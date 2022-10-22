goog.provide('expense_hound_cljs.core');
var module$node_modules$dayjs$dayjs_min=shadow.js.require("module$node_modules$dayjs$dayjs_min", {});
expense_hound_cljs.core.api_key = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loading","loading",-737050189));
expense_hound_cljs.core.get_persistent_BANG_ = (function expense_hound_cljs$core$get_persistent_BANG_(atom,key,msg){
var ls_key = localStorage.getItem(key);
if((!((ls_key == null)))){
return cljs.core.reset_BANG_(atom,ls_key);
} else {
var new_atom = prompt(msg);
cljs.core.reset_BANG_(atom,new_atom);

return localStorage.setItem(key,new_atom);
}
});
expense_hound_cljs.core.get_category_spendings = (function expense_hound_cljs$core$get_category_spendings(category_name,spendings){
var spendings__$1 = (function (){var and__5043__auto__ = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28185_SHARP_){
return new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(p1__28185_SHARP_);
}),cljs.core.filterv((function (p1__28184_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category_name","category_name",-961572431).cljs$core$IFn$_invoke$arity$1(p1__28184_SHARP_),category_name)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,"all")));
}),spendings));
} else {
return and__5043__auto__;
}
})();
var spendings_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),spendings__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spendings","spendings",2005289836),spendings__$1,new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957),spendings_total], null);
});
expense_hound_cljs.core.transform_keys = (function expense_hound_cljs$core$transform_keys(m){
return cljs.core.update_keys(m,(function (p1__28186_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(p1__28186_SHARP_),"_","-"));
}));
});
expense_hound_cljs.core.fetch_data_BANG_ = (function expense_hound_cljs$core$fetch_data_BANG_(){
var now = module$node_modules$dayjs$dayjs_min();
var day_start_ts = now.startOf("day").valueOf();
var period_start_ts = (((now.date() < (5)))?now.date((5)).subtract((1),"month"):now.date((5))).valueOf();
var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11784__auto__ = (function (state_28229){
var state_val_28230 = (state_28229[(1)]);
if((state_val_28230 === (1))){
var inst_28190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28191 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28192 = ["apikey"];
var inst_28193 = cljs.core.deref(expense_hound_cljs.core.api_key);
var inst_28194 = [inst_28193];
var inst_28195 = cljs.core.PersistentHashMap.fromArrays(inst_28192,inst_28194);
var inst_28196 = [inst_28195,false];
var inst_28197 = cljs.core.PersistentHashMap.fromArrays(inst_28191,inst_28196);
var inst_28198 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/categories?order=name",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28197], 0));
var inst_28199 = ["https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings?select=category_name,sum&datetime=gt.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day_start_ts)].join('');
var inst_28200 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28201 = ["apikey"];
var inst_28202 = cljs.core.deref(expense_hound_cljs.core.api_key);
var inst_28203 = [inst_28202];
var inst_28204 = cljs.core.PersistentHashMap.fromArrays(inst_28201,inst_28203);
var inst_28205 = [inst_28204,false];
var inst_28206 = cljs.core.PersistentHashMap.fromArrays(inst_28200,inst_28205);
var inst_28207 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_28199,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28206], 0));
var inst_28208 = ["https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings?select=category_name,sum&datetime=gt.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period_start_ts)].join('');
var inst_28209 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28210 = ["apikey"];
var inst_28211 = cljs.core.deref(expense_hound_cljs.core.api_key);
var inst_28212 = [inst_28211];
var inst_28213 = cljs.core.PersistentHashMap.fromArrays(inst_28210,inst_28212);
var inst_28214 = [inst_28213,false];
var inst_28215 = cljs.core.PersistentHashMap.fromArrays(inst_28209,inst_28214);
var inst_28216 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_28208,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28215], 0));
var inst_28217 = [inst_28198,inst_28207,inst_28216];
var inst_28218 = (new cljs.core.PersistentVector(null,3,(5),inst_28190,inst_28217,null));
var inst_28219 = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_28218);
var state_28229__$1 = state_28229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28229__$1,(2),inst_28219);
} else {
if((state_val_28230 === (2))){
var inst_28221 = (state_28229[(2)]);
var inst_28222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28221,(0),null);
var inst_28223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28221,(1),null);
var inst_28224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28221,(2),null);
var inst_28225 = (function (){var vec__28187 = inst_28221;
var categories = inst_28222;
var spendings = inst_28223;
var monthly_spendings = inst_28224;
return (function (category){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expense_hound_cljs.core.transform_keys(category),expense_hound_cljs.core.get_category_spendings(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(spendings))], 0)),new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997),(new cljs.core.Keyword(null,"base_budget","base_budget",-1760411173).cljs$core$IFn$_invoke$arity$1(category) - new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957).cljs$core$IFn$_invoke$arity$1(expense_hound_cljs.core.get_category_spendings(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(monthly_spendings)))));
});
})();
var inst_28226 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28222);
var inst_28227 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_28225,inst_28226);
var state_28229__$1 = state_28229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28229__$1,inst_28227);
} else {
return null;
}
}
});
return (function() {
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__ = null;
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____0 = (function (){
var statearr_28231 = [null,null,null,null,null,null,null];
(statearr_28231[(0)] = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__);

(statearr_28231[(1)] = (1));

return statearr_28231;
});
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____1 = (function (state_28229){
while(true){
var ret_value__11786__auto__ = (function (){try{while(true){
var result__11787__auto__ = switch__11784__auto__(state_28229);
if(cljs.core.keyword_identical_QMARK_(result__11787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11787__auto__;
}
break;
}
}catch (e28232){var ex__11788__auto__ = e28232;
var statearr_28233_28293 = state_28229;
(statearr_28233_28293[(2)] = ex__11788__auto__);


if(cljs.core.seq((state_28229[(4)]))){
var statearr_28234_28294 = state_28229;
(statearr_28234_28294[(1)] = cljs.core.first((state_28229[(4)])));

} else {
throw ex__11788__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28295 = state_28229;
state_28229 = G__28295;
continue;
} else {
return ret_value__11786__auto__;
}
break;
}
});
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__ = function(state_28229){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____0.call(this);
case 1:
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____1.call(this,state_28229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____0;
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____1;
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_28235 = f__11870__auto__();
(statearr_28235[(6)] = c__11869__auto__);

return statearr_28235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
expense_hound_cljs.core.submit_transaction_BANG_ = (function expense_hound_cljs$core$submit_transaction_BANG_(category_name,sum){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["apikey",cljs.core.deref(expense_hound_cljs.core.api_key)], null),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sum","sum",136986814),sum,new cljs.core.Keyword(null,"category_name","category_name",-961572431),category_name,new cljs.core.Keyword(null,"datetime","datetime",494675702),module$node_modules$dayjs$dayjs_min().valueOf()], null)], null)], 0));
});
expense_hound_cljs.core.progress_bar = (function expense_hound_cljs$core$progress_bar(p__28236){
var map__28237 = p__28236;
var map__28237__$1 = cljs.core.__destructure_map(map__28237);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var remaining_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997));
var per_day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"per-day","per-day",-617851613));
var about_to_spend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar--bar","div.progress-bar--bar",1592792181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, ["--color",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"33"].join(''),"--opaque-color",color,"--width-before-change",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (remaining_budget / base_budget))),"%"].join(''),"--width-after-change",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((remaining_budget - about_to_spend) / base_budget))),"%"].join('')], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),about_to_spend))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(per_day):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"tomato"], null)], null),per_day], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(per_day - about_to_spend)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),remaining_budget], null)], null);
});
expense_hound_cljs.core.progress_bars = (function expense_hound_cljs$core$progress_bars(categories,about_to_spend){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar--container","div.progress-bar--container",-491996734),(function (){var iter__5523__auto__ = (function expense_hound_cljs$core$progress_bars_$_iter__28238(s__28239){
return (new cljs.core.LazySeq(null,(function (){
var s__28239__$1 = s__28239;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28239__$1);
if(temp__5804__auto__){
var s__28239__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28239__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28239__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28241 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28240 = (0);
while(true){
if((i__28240 < size__5522__auto__)){
var map__28242 = cljs.core._nth(c__5521__auto__,i__28240);
var map__28242__$1 = cljs.core.__destructure_map(map__28242);
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28242__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28242__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28242__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var spendings_total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28242__$1,new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957));
var remaining_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28242__$1,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997));
cljs.core.chunk_append(b__28241,(function (){var now = module$node_modules$dayjs$dayjs_min();
var days_to_reset = (((now.date() < (5)))?now.date((5)):now.date((5)).add((1),"month")).diff(now,"day");
var per_day = Math.floor((((remaining_budget + spendings_total) / days_to_reset) - spendings_total));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680),base_budget,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997),remaining_budget,new cljs.core.Keyword(null,"per-day","per-day",-617851613),per_day,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785),about_to_spend,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null);
})());

var G__28296 = (i__28240 + (1));
i__28240 = G__28296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28241),expense_hound_cljs$core$progress_bars_$_iter__28238(cljs.core.chunk_rest(s__28239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28241),null);
}
} else {
var map__28243 = cljs.core.first(s__28239__$2);
var map__28243__$1 = cljs.core.__destructure_map(map__28243);
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28243__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28243__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28243__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var spendings_total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28243__$1,new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957));
var remaining_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28243__$1,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997));
return cljs.core.cons((function (){var now = module$node_modules$dayjs$dayjs_min();
var days_to_reset = (((now.date() < (5)))?now.date((5)):now.date((5)).add((1),"month")).diff(now,"day");
var per_day = Math.floor((((remaining_budget + spendings_total) / days_to_reset) - spendings_total));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680),base_budget,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997),remaining_budget,new cljs.core.Keyword(null,"per-day","per-day",-617851613),per_day,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785),about_to_spend,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null);
})(),expense_hound_cljs$core$progress_bars_$_iter__28238(cljs.core.rest(s__28239__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(categories);
})()], null);
});
expense_hound_cljs.core.input_section = (function expense_hound_cljs$core$input_section(categories,about_to_spend,reset_data_BANG_){
var default_to_0 = (function (p1__28244_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__28244_SHARP_)){
return (0);
} else {
return parseFloat(p1__28244_SHARP_);
}
});
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-section","div.input-section",-1170218990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-section--input","input.input-section--input",1042690371),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"450",new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core.deref(about_to_spend) > (0)))?cljs.core.deref(about_to_spend):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28245_SHARP_){
return cljs.core.reset_BANG_(about_to_spend,default_to_0(p1__28245_SHARP_.currentTarget.value));
})], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28247){
var map__28248 = p__28247;
var map__28248__$1 = cljs.core.__destructure_map(map__28248);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28248__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var emoji = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28248__$1,new cljs.core.Keyword(null,"emoji","emoji",1031230144));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28248__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-loading","data-loading",1561385822),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-section--button",(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?"input-section--button--loading":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(loading_QMARK_,true);

var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11784__auto__ = (function (state_28268){
var state_val_28269 = (state_28268[(1)]);
if((state_val_28269 === (1))){
var inst_28250 = cljs.core.deref(about_to_spend);
var inst_28251 = expense_hound_cljs.core.submit_transaction_BANG_(name,inst_28250);
var state_28268__$1 = state_28268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28268__$1,(2),inst_28251);
} else {
if((state_val_28269 === (2))){
var inst_28253 = (state_28268[(2)]);
var inst_28254 = cljs.core.__destructure_map(inst_28253);
var inst_28255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28254,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_28256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28254,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_28257 = cljs.core.reset_BANG_(loading_QMARK_,false);
var state_28268__$1 = (function (){var statearr_28270 = state_28268;
(statearr_28270[(7)] = inst_28256);

(statearr_28270[(8)] = inst_28257);

return statearr_28270;
})();
if(cljs.core.truth_(inst_28255)){
var statearr_28271_28297 = state_28268__$1;
(statearr_28271_28297[(1)] = (3));

} else {
var statearr_28272_28298 = state_28268__$1;
(statearr_28272_28298[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (3))){
var inst_28259 = cljs.core.reset_BANG_(about_to_spend,(0));
var inst_28260 = (reset_data_BANG_.cljs$core$IFn$_invoke$arity$0 ? reset_data_BANG_.cljs$core$IFn$_invoke$arity$0() : reset_data_BANG_.call(null));
var state_28268__$1 = (function (){var statearr_28273 = state_28268;
(statearr_28273[(9)] = inst_28259);

return statearr_28273;
})();
var statearr_28274_28299 = state_28268__$1;
(statearr_28274_28299[(2)] = inst_28260);

(statearr_28274_28299[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (4))){
var inst_28256 = (state_28268[(7)]);
var inst_28262 = cljs.core.clj__GT_js(inst_28256);
var inst_28263 = JSON.stringify(inst_28262);
var inst_28264 = alert(inst_28263);
var state_28268__$1 = state_28268;
var statearr_28275_28300 = state_28268__$1;
(statearr_28275_28300[(2)] = inst_28264);

(statearr_28275_28300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28269 === (5))){
var inst_28266 = (state_28268[(2)]);
var state_28268__$1 = state_28268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28268__$1,inst_28266);
} else {
return null;
}
}
}
}
}
});
return (function() {
var expense_hound_cljs$core$input_section_$_state_machine__11785__auto__ = null;
var expense_hound_cljs$core$input_section_$_state_machine__11785__auto____0 = (function (){
var statearr_28276 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28276[(0)] = expense_hound_cljs$core$input_section_$_state_machine__11785__auto__);

(statearr_28276[(1)] = (1));

return statearr_28276;
});
var expense_hound_cljs$core$input_section_$_state_machine__11785__auto____1 = (function (state_28268){
while(true){
var ret_value__11786__auto__ = (function (){try{while(true){
var result__11787__auto__ = switch__11784__auto__(state_28268);
if(cljs.core.keyword_identical_QMARK_(result__11787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11787__auto__;
}
break;
}
}catch (e28277){var ex__11788__auto__ = e28277;
var statearr_28278_28301 = state_28268;
(statearr_28278_28301[(2)] = ex__11788__auto__);


if(cljs.core.seq((state_28268[(4)]))){
var statearr_28279_28302 = state_28268;
(statearr_28279_28302[(1)] = cljs.core.first((state_28268[(4)])));

} else {
throw ex__11788__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28303 = state_28268;
state_28268 = G__28303;
continue;
} else {
return ret_value__11786__auto__;
}
break;
}
});
expense_hound_cljs$core$input_section_$_state_machine__11785__auto__ = function(state_28268){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$input_section_$_state_machine__11785__auto____0.call(this);
case 1:
return expense_hound_cljs$core$input_section_$_state_machine__11785__auto____1.call(this,state_28268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$input_section_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$input_section_$_state_machine__11785__auto____0;
expense_hound_cljs$core$input_section_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$input_section_$_state_machine__11785__auto____1;
return expense_hound_cljs$core$input_section_$_state_machine__11785__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_28280 = f__11870__auto__();
(statearr_28280[(6)] = c__11869__auto__);

return statearr_28280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null),emoji], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28246_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__28246_SHARP_),"all");
}),categories)))], null);
});
});
expense_hound_cljs.core.app = (function expense_hound_cljs$core$app(){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var about_to_spend = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var reset_data_BANG_ = (function (){
cljs.core.reset_BANG_(data,new cljs.core.Keyword(null,"loading","loading",-737050189));

var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11784__auto__ = (function (state_28286){
var state_val_28287 = (state_28286[(1)]);
if((state_val_28287 === (1))){
var inst_28281 = expense_hound_cljs.core.fetch_data_BANG_();
var state_28286__$1 = state_28286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28286__$1,(2),inst_28281);
} else {
if((state_val_28287 === (2))){
var inst_28283 = (state_28286[(2)]);
var inst_28284 = cljs.core.reset_BANG_(data,inst_28283);
var state_28286__$1 = state_28286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28286__$1,inst_28284);
} else {
return null;
}
}
});
return (function() {
var expense_hound_cljs$core$app_$_state_machine__11785__auto__ = null;
var expense_hound_cljs$core$app_$_state_machine__11785__auto____0 = (function (){
var statearr_28288 = [null,null,null,null,null,null,null];
(statearr_28288[(0)] = expense_hound_cljs$core$app_$_state_machine__11785__auto__);

(statearr_28288[(1)] = (1));

return statearr_28288;
});
var expense_hound_cljs$core$app_$_state_machine__11785__auto____1 = (function (state_28286){
while(true){
var ret_value__11786__auto__ = (function (){try{while(true){
var result__11787__auto__ = switch__11784__auto__(state_28286);
if(cljs.core.keyword_identical_QMARK_(result__11787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11787__auto__;
}
break;
}
}catch (e28289){var ex__11788__auto__ = e28289;
var statearr_28290_28304 = state_28286;
(statearr_28290_28304[(2)] = ex__11788__auto__);


if(cljs.core.seq((state_28286[(4)]))){
var statearr_28291_28305 = state_28286;
(statearr_28291_28305[(1)] = cljs.core.first((state_28286[(4)])));

} else {
throw ex__11788__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28306 = state_28286;
state_28286 = G__28306;
continue;
} else {
return ret_value__11786__auto__;
}
break;
}
});
expense_hound_cljs$core$app_$_state_machine__11785__auto__ = function(state_28286){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$app_$_state_machine__11785__auto____0.call(this);
case 1:
return expense_hound_cljs$core$app_$_state_machine__11785__auto____1.call(this,state_28286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$app_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$app_$_state_machine__11785__auto____0;
expense_hound_cljs$core$app_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$app_$_state_machine__11785__auto____1;
return expense_hound_cljs$core$app_$_state_machine__11785__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_28292 = f__11870__auto__();
(statearr_28292[(6)] = c__11869__auto__);

return statearr_28292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
reset_data_BANG_();

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u0422\u0440\u0435\u043A\u0435\u0440"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),cljs.core.deref(data)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loader","div.loader",-1644603528)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bars,cljs.core.deref(data),cljs.core.deref(about_to_spend)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.input_section,cljs.core.deref(data),about_to_spend,reset_data_BANG_], null)], null))], null);
});
});
expense_hound_cljs.core.start = (function expense_hound_cljs$core$start(){
expense_hound_cljs.core.get_persistent_BANG_(expense_hound_cljs.core.api_key,"api-key","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447 \u043A API");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.app], null),document.getElementById("app"));
});
expense_hound_cljs.core.init = (function expense_hound_cljs$core$init(){
return expense_hound_cljs.core.start();
});
goog.exportSymbol('expense_hound_cljs.core.init', expense_hound_cljs.core.init);
expense_hound_cljs.core.stop = (function expense_hound_cljs$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=expense_hound_cljs.core.js.map
