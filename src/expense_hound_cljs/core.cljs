(ns expense-hound-cljs.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [reagent.dom :as rdom]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!] :as async]
            ["dayjs" :as djs]))

(def api-key (r/atom :loading))

(defn get-persistent! [atom key msg]
  (let [ls-key (. js/localStorage (getItem key))]
    (if-not (nil? ls-key)
      (reset! atom ls-key)
      (let [new-atom (js/prompt msg)]
        (reset! atom new-atom)
        (. js/localStorage (setItem key new-atom))))))

(defn get-category-spendings [category-name spendings]
  (let [spendings (->> spendings
                       ;; берем только относящиеся к текущей категории траты
                       (filterv #(or (= (:category_name %) category-name) (= category-name "all")))
                       ;; берем сумму
                       (mapv #(:sum %))
                       ;; фолбечимся на пустой массив
                       (and []))
        spendings-total (reduce + 0 spendings)]
    {:spendings spendings
     :spendings-total spendings-total}))

(defn transform-keys [m] (update-keys m #(-> %
                                             name
                                             (str/replace "_" "-")
                                             keyword)))

(defn fetch-data! []
  (let [now (djs)
        day-start-ts (.valueOf (.startOf now "day"))
        period-start-ts (.valueOf (if (< (.date now) 5)
                                    (.subtract (.date now 5) 1 "month")
                                    (.date now 5)))]
    (go (let [[categories
               spendings
               monthly-spendings] (<! (async/map vector [(http/get "https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/categories?order=name"
                                                                   {:headers {"apikey" @api-key}
                                                                    :with-credentials? false})
                                                         (http/get (str "https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings?select=category_name,sum&datetime=gt." day-start-ts)
                                                                   {:headers {"apikey" @api-key}
                                                                    :with-credentials? false})
                                                         (http/get (str "https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings?select=category_name,sum&datetime=gt." period-start-ts)
                                                                   {:headers {"apikey" @api-key}
                                                                    :with-credentials? false})]))]
          (->> categories
               (:body)
               (mapv (fn [category]
                       (-> category
                           (transform-keys)
                           (merge (get-category-spendings (:name category) (:body spendings)))
                           (assoc :remaining-budget (- (:base_budget category) (:spendings-total (get-category-spendings (:name category) (:body monthly-spendings)))))))))))))

(defn submit-transaction! [category-name sum]
  (http/post "https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings"
             {:headers {"apikey" @api-key}
              :with-credentials? false
              :json-params {:sum sum :category_name category-name :datetime (.valueOf (djs))}}))

(defn progress-bar [{label :label
                     base-budget :base-budget
                     remaining-budget :remaining-budget
                     per-day :per-day
                     about-to-spend :about-to-spend
                     color :color}]
  [:<> {:key label}
   [:div label]
   [:div.progress-bar--bar {:style {"--color" (str color "33")
                                    "--opaque-color" color
                                    "--width-before-change" (str (* 100 (/ remaining-budget base-budget)) "%")
                                    "--width-after-change" (str (* 100 (/ (- remaining-budget about-to-spend) base-budget)) "%")}}
    (if (= 0 about-to-spend)
      (str per-day)
      [:<> [:s {:style {:color "tomato"}} per-day] [:span (- per-day about-to-spend)]])]
   [:div remaining-budget]])

(defn progress-bars [categories about-to-spend]
  [:div.progress-bar--container
   (for [{base-budget :base-budget
          color :color
          label :label
          spendings-total :spendings-total
          remaining-budget :remaining-budget} categories]
     (let [now (djs)
           days-to-reset (.diff
                          (if (< (.date now) 5)
                            (.date now 5)
                            (.add (.date now 5) 1 "month"))
                          now
                          "day")
           per-day (js/Math.floor (- (/ (+ remaining-budget spendings-total) days-to-reset) spendings-total))]
       [:<> {:key label}
        [progress-bar {:label label
                       :base-budget base-budget
                       :remaining-budget remaining-budget
                       :per-day per-day
                       :about-to-spend about-to-spend
                       :color color}]]))])

(defn input-section [categories about-to-spend reset-data!]
  (let [default-to-0 #(if (= "" %) 0 (js/parseFloat %))
        loading? (r/atom false)]
    (fn []
      [:div.input-section
       [:input.input-section--input {:type "number" :placeholder "450" :value (when (> @about-to-spend 0) @about-to-spend) :on-change #(reset! about-to-spend (->> % .-currentTarget .-value default-to-0))}]
       (->> categories
            (filter #(not= (:name %) "all"))
            (map (fn [{color :color emoji :emoji name :name}]
                   [:button {:data-loading @loading?
                             :class ["input-section--button" (when @loading? "input-section--button--loading")]
                             :on-click (fn []
                                         (reset! loading? true)
                                         (go (let [{success :success body :body} (<! (submit-transaction! name @about-to-spend))]
                                               (reset! loading? false)
                                               (if success
                                                 (do (reset! about-to-spend 0) (reset-data!))
                                                 (js/alert (-> body clj->js js/JSON.stringify))))))
                             :style {:background-color color}} emoji]))
            (into [:<>]))])))

(defn app []
  (let [data (r/atom nil)
        about-to-spend (r/atom 0)
        reset-data! #(do (reset! data :loading) 
                         (go (let [fetched-data (<! (fetch-data!))]
                               (reset! data fetched-data))))]
    (reset-data!)
    (fn []
      [:div
       [:h1 "Трекер"]
       (if (= :loading @data)
         [:div.loader] 
         [:div
          [progress-bars @data @about-to-spend]
          [input-section @data about-to-spend reset-data!]])])))

(defn start []
  (get-persistent! api-key "api-key" "Введите ключ к API")
  (rdom/render [app] (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
