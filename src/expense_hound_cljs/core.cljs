(ns expense-hound-cljs.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [reagent.dom :as rdom]
            [cljs-http.client :as http]
            ["dayjs" :as djs]
            [cljs.core.async :refer [<!] :as async]))

(def api-key (r/atom :loading))

(defn get-persistent! [key msg]
  (let [ls-key (. js/localStorage (getItem key))]
    (if-not (nil? ls-key)
      ls-key
      (let [new-atom (js/prompt msg)]
        (. js/localStorage (setItem key new-atom))
        new-atom))))

(defn get-category-spendings [category-name spendings]
  (->> spendings
        ;; берем только относящиеся к текущей категории траты
       (filterv #(or (= (:category_name %) category-name) (= category-name "all")))
        ;; берем сумму
       (mapv :sum)
       (reduce + 0)))

(defn transform-keys [m] (update-keys m #(-> %
                                             name
                                             (str/replace "_" "-")
                                             keyword)))

(defn fetch-data! []
  (let [now (djs)
        period-start-ts (.valueOf (if (< (.date now) 5)
                                    (.subtract (.date now 5) 1 "month")
                                    (.date now 5)))]
    (go (let [[categories
               monthly-spendings] (<! (async/map vector [(http/get "https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/categories?order=name"
                                                                   {:headers {"apikey" @api-key}
                                                                    :with-credentials? false})
                                                         (http/get (str "https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings?select=category_name,sum,datetime&datetime=gt." period-start-ts)
                                                                   {:headers {"apikey" @api-key}
                                                                    :with-credentials? false})]))]
          {:categories (->> categories
                            :body
                            (mapv (fn [category]
                                    (-> category
                                        (transform-keys)
                                        (assoc :spendings-total (get-category-spendings (:name category) (:body monthly-spendings)))))))
           :spendings-list (->> monthly-spendings
                               :body
                               rseq
                               (mapv transform-keys))}))))

(defn submit-transaction! [category-name sum]
  (http/post "https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings"
             {:headers {"apikey" @api-key}
              :with-credentials? false
              :json-params {:sum sum :category_name category-name :datetime (.valueOf (djs))}}))

(defn progress-bar
  [{label :label
    base-budget :base-budget
    remaining-budget :remaining-budget
    available :available
    about-to-spend :about-to-spend
    color :color}]

  [:<> {:key label}
   [:div label]
   [:div.progress-bar--bar {:style {"--color" (str color "33")
                                    "--opaque-color" color
                                    "--width-before-change" (str (* 100 (/ remaining-budget base-budget)) "%")
                                    "--width-after-change" (str (* 100 (/ (- remaining-budget about-to-spend) base-budget)) "%")}}
    (if (= 0 about-to-spend)
      (str available)
      [:<> [:s {:style {:color "tomato"}} available] [:span (- available about-to-spend)]])]
   [:div remaining-budget]])

(defn progress-bars [categories about-to-spend]
  [:div.progress-bar--container
   (for [{base-budget :base-budget
          color :color
          spendings-total :spendings-total
          label :label} categories]
     (let [now (djs)
           remaining-budget (- base-budget spendings-total)
           days-in-period (.daysInMonth
                           (if (< (.date now) 5)
                             (.subtract now 1 "month")
                             now))
           days-from-start (.diff
                            now
                             ;; 4 потому что считаем, что 5 число - это первый день
                            (if (< (.date now) 4)
                              (.subtract (.date now 4) 1 "month")
                              (.date now 4))
                            "day")
           available (-> base-budget
                         (/ days-in-period)
                         (* days-from-start)
                         (- spendings-total)
                         js/Math.floor)]
       [:<> {:key label}
        [progress-bar {:label label
                       :base-budget base-budget
                       :remaining-budget remaining-budget
                       :available available
                       :about-to-spend about-to-spend
                       :color color}]]))])

(defn input-section [categories about-to-spend reset-data!]
  (let [default-to-0 #(if (= "" %) 0 (js/parseFloat %))
        loading? (r/atom false)]
    (fn []
      [:div.input-section
       [:input.input-section--input {:type "number"
                                     :inputMode "numeric"
                                     :placeholder "450"
                                     :value (when (> @about-to-spend 0) @about-to-spend)
                                     :on-change #(reset! about-to-spend (->> % .-currentTarget .-value default-to-0))}]
       (->> categories
            (filter #(not= (:name %) "all"))
            (map (fn [{color :color emoji :emoji name :name}]
                   (let [handle-submit (fn [is-refund?]
                                         (fn []
                                           (reset! loading? true)
                                           (go (let [{success? :success body :body} (<! (submit-transaction! name (if is-refund? 
                                                                                                                    (- @about-to-spend) 
                                                                                                                    @about-to-spend)))]
                                                  (reset! loading? false)
                                                  (if success?
                                                    (do (reset! about-to-spend 0) (reset-data!))
                                                    (-> body clj->js js/JSON.stringify js/alert))))))]
                     [:button {:data-loading @loading?
                               :class ["input-section--button" (when @loading? "input-section--button--loading")]
                               :on-context-menu (handle-submit true)
                               :on-click (handle-submit false)
                               :style {:background-color color}} emoji])))
            (into [:<>]))])))

(defn history [categories spendings]
  [:div.history--wrapper
   [:div.history--container
    (for [{category-name :category-name
           datetime :datetime
           sum :sum} spendings]
      (let [emoji (some #(when (= category-name (:name %)) (:emoji %)) categories)]
        [:div.history--item {:key datetime}
         [:div emoji]
         [:div {:class (when (neg? sum) "history--amount--refund")} (js/Math.abs sum)]
         [:div.history--datetime (-> datetime
                                     djs
                                     (.format "HH:MM; DD.MM.YY"))]]))]])

(some #(when (= "all" (:name %)) %) [{:name "a"} {:name "b"} {:name "all"}])
(defn app []
  (let [data (r/atom nil)
        about-to-spend (r/atom 0)
        reset-data! #(do (reset! data :loading)
                         (go (let [fetched-data (<! (fetch-data!))]
                               (reset! data fetched-data))))]
    (reset-data!)
    (fn []
      [:main.content
       [:h1 "Трекер"]
       (if (= :loading @data)
         [:div.loader]
         (let [{categories :categories
                spendings-list :spendings-list} @data]
           [:<>
            [progress-bars categories @about-to-spend]
            [input-section categories about-to-spend reset-data!]
            [history categories spendings-list]]))])))

(defn start []
  (reset! api-key (get-persistent! "api-key" "Введите ключ к API"))
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
