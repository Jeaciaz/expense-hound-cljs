goog.provide('expense_hound_cljs.core');
var module$node_modules$dayjs$dayjs_min=shadow.js.require("module$node_modules$dayjs$dayjs_min", {});
expense_hound_cljs.core.api_key = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loading","loading",-737050189));
expense_hound_cljs.core.get_persistent_BANG_ = (function expense_hound_cljs$core$get_persistent_BANG_(key,msg){
var ls_key = localStorage.getItem(key);
if((!((ls_key == null)))){
return ls_key;
} else {
var new_atom = prompt(msg);
localStorage.setItem(key,new_atom);

return new_atom;
}
});
expense_hound_cljs.core.get_category_spendings = (function expense_hound_cljs$core$get_category_spendings(category_name,spendings){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sum","sum",136986814),cljs.core.filterv((function (p1__24337_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category_name","category_name",-961572431).cljs$core$IFn$_invoke$arity$1(p1__24337_SHARP_),category_name)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,"all")));
}),spendings)));
});
expense_hound_cljs.core.transform_keys = (function expense_hound_cljs$core$transform_keys(m){
return cljs.core.update_keys(m,(function (p1__24338_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(p1__24338_SHARP_),"_","-"));
}));
});
expense_hound_cljs.core.fetch_data_BANG_ = (function expense_hound_cljs$core$fetch_data_BANG_(){
var now = module$node_modules$dayjs$dayjs_min();
var period_start_ts = (((now.date() < (5)))?now.date((5)).subtract((1),"month"):now.date((5))).valueOf();
var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11799__auto__ = (function (state_24377){
var state_val_24378 = (state_24377[(1)]);
if((state_val_24378 === (1))){
var inst_24342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24343 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24344 = ["apikey"];
var inst_24345 = cljs.core.deref(expense_hound_cljs.core.api_key);
var inst_24346 = [inst_24345];
var inst_24347 = cljs.core.PersistentHashMap.fromArrays(inst_24344,inst_24346);
var inst_24348 = [inst_24347,false];
var inst_24349 = cljs.core.PersistentHashMap.fromArrays(inst_24343,inst_24348);
var inst_24350 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/categories?order=name",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_24349], 0));
var inst_24351 = ["https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings?select=category_name,sum,datetime&datetime=gt.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period_start_ts)].join('');
var inst_24352 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24353 = ["apikey"];
var inst_24354 = cljs.core.deref(expense_hound_cljs.core.api_key);
var inst_24355 = [inst_24354];
var inst_24356 = cljs.core.PersistentHashMap.fromArrays(inst_24353,inst_24355);
var inst_24357 = [inst_24356,false];
var inst_24358 = cljs.core.PersistentHashMap.fromArrays(inst_24352,inst_24357);
var inst_24359 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_24351,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_24358], 0));
var inst_24360 = [inst_24350,inst_24359];
var inst_24361 = (new cljs.core.PersistentVector(null,2,(5),inst_24342,inst_24360,null));
var inst_24362 = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_24361);
var state_24377__$1 = state_24377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24377__$1,(2),inst_24362);
} else {
if((state_val_24378 === (2))){
var inst_24364 = (state_24377[(2)]);
var inst_24365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24364,(0),null);
var inst_24366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24364,(1),null);
var inst_24367 = [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.Keyword(null,"spendings-list","spendings-list",-256293101)];
var inst_24368 = (function (){var vec__24339 = inst_24364;
var categories = inst_24365;
var monthly_spendings = inst_24366;
return (function (category){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expense_hound_cljs.core.transform_keys(category),new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957),expense_hound_cljs.core.get_category_spendings(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(monthly_spendings)));
});
})();
var inst_24369 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24365);
var inst_24370 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_24368,inst_24369);
var inst_24371 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24366);
var inst_24372 = cljs.core.rseq(inst_24371);
var inst_24373 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(expense_hound_cljs.core.transform_keys,inst_24372);
var inst_24374 = [inst_24370,inst_24373];
var inst_24375 = cljs.core.PersistentHashMap.fromArrays(inst_24367,inst_24374);
var state_24377__$1 = state_24377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24377__$1,inst_24375);
} else {
return null;
}
}
});
return (function() {
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto__ = null;
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto____0 = (function (){
var statearr_24379 = [null,null,null,null,null,null,null];
(statearr_24379[(0)] = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto__);

(statearr_24379[(1)] = (1));

return statearr_24379;
});
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto____1 = (function (state_24377){
while(true){
var ret_value__11801__auto__ = (function (){try{while(true){
var result__11802__auto__ = switch__11799__auto__(state_24377);
if(cljs.core.keyword_identical_QMARK_(result__11802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11802__auto__;
}
break;
}
}catch (e24380){var ex__11803__auto__ = e24380;
var statearr_24381_24460 = state_24377;
(statearr_24381_24460[(2)] = ex__11803__auto__);


if(cljs.core.seq((state_24377[(4)]))){
var statearr_24382_24461 = state_24377;
(statearr_24382_24461[(1)] = cljs.core.first((state_24377[(4)])));

} else {
throw ex__11803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24462 = state_24377;
state_24377 = G__24462;
continue;
} else {
return ret_value__11801__auto__;
}
break;
}
});
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto__ = function(state_24377){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto____0.call(this);
case 1:
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto____1.call(this,state_24377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto____0;
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto____1;
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11800__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_24383 = f__11870__auto__();
(statearr_24383[(6)] = c__11869__auto__);

return statearr_24383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
expense_hound_cljs.core.submit_transaction_BANG_ = (function expense_hound_cljs$core$submit_transaction_BANG_(category_name,sum){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["apikey",cljs.core.deref(expense_hound_cljs.core.api_key)], null),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sum","sum",136986814),sum,new cljs.core.Keyword(null,"category_name","category_name",-961572431),category_name,new cljs.core.Keyword(null,"datetime","datetime",494675702),module$node_modules$dayjs$dayjs_min().valueOf()], null)], null)], 0));
});
expense_hound_cljs.core.progress_bar = (function expense_hound_cljs$core$progress_bar(p__24384){
var map__24385 = p__24384;
var map__24385__$1 = cljs.core.__destructure_map(map__24385);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24385__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24385__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var remaining_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24385__$1,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997));
var available = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24385__$1,new cljs.core.Keyword(null,"available","available",-1470697127));
var about_to_spend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24385__$1,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24385__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar--bar","div.progress-bar--bar",1592792181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, ["--color",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"33"].join(''),"--opaque-color",color,"--width-before-change",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (remaining_budget / base_budget))),"%"].join(''),"--width-after-change",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((remaining_budget - about_to_spend) / base_budget))),"%"].join('')], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),about_to_spend))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(available):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"tomato"], null)], null),available], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(available - about_to_spend)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),remaining_budget], null)], null);
});
expense_hound_cljs.core.progress_bars = (function expense_hound_cljs$core$progress_bars(categories,about_to_spend){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar--container","div.progress-bar--container",-491996734),(function (){var iter__5523__auto__ = (function expense_hound_cljs$core$progress_bars_$_iter__24386(s__24387){
return (new cljs.core.LazySeq(null,(function (){
var s__24387__$1 = s__24387;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24387__$1);
if(temp__5804__auto__){
var s__24387__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24387__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24387__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24389 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24388 = (0);
while(true){
if((i__24388 < size__5522__auto__)){
var map__24390 = cljs.core._nth(c__5521__auto__,i__24388);
var map__24390__$1 = cljs.core.__destructure_map(map__24390);
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24390__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24390__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var spendings_total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24390__$1,new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24390__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__24389,(function (){var now = module$node_modules$dayjs$dayjs_min();
var remaining_budget = (base_budget - spendings_total);
var days_in_period = (((now.date() < (5)))?now.subtract((1),"month"):now).daysInMonth();
var days_from_start = now.diff((((now.date() < (4)))?now.date((4)).subtract((1),"month"):now.date((4))),"day");
var available = Math.floor((((base_budget / days_in_period) * days_from_start) - spendings_total));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680),base_budget,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997),remaining_budget,new cljs.core.Keyword(null,"available","available",-1470697127),available,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785),about_to_spend,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null);
})());

var G__24463 = (i__24388 + (1));
i__24388 = G__24463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24389),expense_hound_cljs$core$progress_bars_$_iter__24386(cljs.core.chunk_rest(s__24387__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24389),null);
}
} else {
var map__24391 = cljs.core.first(s__24387__$2);
var map__24391__$1 = cljs.core.__destructure_map(map__24391);
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24391__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24391__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var spendings_total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24391__$1,new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24391__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons((function (){var now = module$node_modules$dayjs$dayjs_min();
var remaining_budget = (base_budget - spendings_total);
var days_in_period = (((now.date() < (5)))?now.subtract((1),"month"):now).daysInMonth();
var days_from_start = now.diff((((now.date() < (4)))?now.date((4)).subtract((1),"month"):now.date((4))),"day");
var available = Math.floor((((base_budget / days_in_period) * days_from_start) - spendings_total));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680),base_budget,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997),remaining_budget,new cljs.core.Keyword(null,"available","available",-1470697127),available,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785),about_to_spend,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null);
})(),expense_hound_cljs$core$progress_bars_$_iter__24386(cljs.core.rest(s__24387__$2)));
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
var default_to_0 = (function (p1__24392_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__24392_SHARP_)){
return (0);
} else {
return parseFloat(p1__24392_SHARP_);
}
});
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-section","div.input-section",-1170218990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-section--input","input.input-section--input",1042690371),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"numeric",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"450",new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core.deref(about_to_spend) > (0)))?cljs.core.deref(about_to_spend):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24393_SHARP_){
return cljs.core.reset_BANG_(about_to_spend,default_to_0(p1__24393_SHARP_.currentTarget.value));
})], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24395){
var map__24396 = p__24395;
var map__24396__$1 = cljs.core.__destructure_map(map__24396);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var emoji = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"emoji","emoji",1031230144));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var handle_submit = (function (is_refund_QMARK_){
return (function (){
cljs.core.reset_BANG_(loading_QMARK_,true);

var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11799__auto__ = (function (state_24422){
var state_val_24423 = (state_24422[(1)]);
if((state_val_24423 === (1))){
var state_24422__$1 = state_24422;
if(cljs.core.truth_(is_refund_QMARK_)){
var statearr_24424_24464 = state_24422__$1;
(statearr_24424_24464[(1)] = (3));

} else {
var statearr_24425_24465 = state_24422__$1;
(statearr_24425_24465[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24423 === (2))){
var inst_24407 = (state_24422[(2)]);
var inst_24408 = cljs.core.__destructure_map(inst_24407);
var inst_24409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24408,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_24410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24408,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_24411 = cljs.core.reset_BANG_(loading_QMARK_,false);
var state_24422__$1 = (function (){var statearr_24426 = state_24422;
(statearr_24426[(7)] = inst_24411);

(statearr_24426[(8)] = inst_24410);

return statearr_24426;
})();
if(cljs.core.truth_(inst_24409)){
var statearr_24427_24466 = state_24422__$1;
(statearr_24427_24466[(1)] = (6));

} else {
var statearr_24428_24467 = state_24422__$1;
(statearr_24428_24467[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24423 === (3))){
var inst_24399 = cljs.core.deref(about_to_spend);
var inst_24400 = (- inst_24399);
var state_24422__$1 = state_24422;
var statearr_24429_24468 = state_24422__$1;
(statearr_24429_24468[(2)] = inst_24400);

(statearr_24429_24468[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24423 === (4))){
var inst_24402 = cljs.core.deref(about_to_spend);
var state_24422__$1 = state_24422;
var statearr_24430_24469 = state_24422__$1;
(statearr_24430_24469[(2)] = inst_24402);

(statearr_24430_24469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24423 === (5))){
var inst_24404 = (state_24422[(2)]);
var inst_24405 = expense_hound_cljs.core.submit_transaction_BANG_(name,inst_24404);
var state_24422__$1 = state_24422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24422__$1,(2),inst_24405);
} else {
if((state_val_24423 === (6))){
var inst_24413 = cljs.core.reset_BANG_(about_to_spend,(0));
var inst_24414 = (reset_data_BANG_.cljs$core$IFn$_invoke$arity$0 ? reset_data_BANG_.cljs$core$IFn$_invoke$arity$0() : reset_data_BANG_.call(null));
var state_24422__$1 = (function (){var statearr_24431 = state_24422;
(statearr_24431[(9)] = inst_24413);

return statearr_24431;
})();
var statearr_24432_24470 = state_24422__$1;
(statearr_24432_24470[(2)] = inst_24414);

(statearr_24432_24470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24423 === (7))){
var inst_24410 = (state_24422[(8)]);
var inst_24416 = cljs.core.clj__GT_js(inst_24410);
var inst_24417 = JSON.stringify(inst_24416);
var inst_24418 = alert(inst_24417);
var state_24422__$1 = state_24422;
var statearr_24433_24471 = state_24422__$1;
(statearr_24433_24471[(2)] = inst_24418);

(statearr_24433_24471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24423 === (8))){
var inst_24420 = (state_24422[(2)]);
var state_24422__$1 = state_24422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24422__$1,inst_24420);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var expense_hound_cljs$core$input_section_$_state_machine__11800__auto__ = null;
var expense_hound_cljs$core$input_section_$_state_machine__11800__auto____0 = (function (){
var statearr_24434 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24434[(0)] = expense_hound_cljs$core$input_section_$_state_machine__11800__auto__);

(statearr_24434[(1)] = (1));

return statearr_24434;
});
var expense_hound_cljs$core$input_section_$_state_machine__11800__auto____1 = (function (state_24422){
while(true){
var ret_value__11801__auto__ = (function (){try{while(true){
var result__11802__auto__ = switch__11799__auto__(state_24422);
if(cljs.core.keyword_identical_QMARK_(result__11802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11802__auto__;
}
break;
}
}catch (e24435){var ex__11803__auto__ = e24435;
var statearr_24436_24472 = state_24422;
(statearr_24436_24472[(2)] = ex__11803__auto__);


if(cljs.core.seq((state_24422[(4)]))){
var statearr_24437_24473 = state_24422;
(statearr_24437_24473[(1)] = cljs.core.first((state_24422[(4)])));

} else {
throw ex__11803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24474 = state_24422;
state_24422 = G__24474;
continue;
} else {
return ret_value__11801__auto__;
}
break;
}
});
expense_hound_cljs$core$input_section_$_state_machine__11800__auto__ = function(state_24422){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$input_section_$_state_machine__11800__auto____0.call(this);
case 1:
return expense_hound_cljs$core$input_section_$_state_machine__11800__auto____1.call(this,state_24422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$input_section_$_state_machine__11800__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$input_section_$_state_machine__11800__auto____0;
expense_hound_cljs$core$input_section_$_state_machine__11800__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$input_section_$_state_machine__11800__auto____1;
return expense_hound_cljs$core$input_section_$_state_machine__11800__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_24438 = f__11870__auto__();
(statearr_24438[(6)] = c__11869__auto__);

return statearr_24438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-loading","data-loading",1561385822),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-section--button",(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?"input-section--button--loading":null)], null),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),handle_submit(true),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_submit(false),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null),emoji], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24394_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__24394_SHARP_),"all");
}),categories)))], null);
});
});
expense_hound_cljs.core.history = (function expense_hound_cljs$core$history(categories,spendings){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--wrapper","div.history--wrapper",1870690886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--container","div.history--container",128988096),(function (){var iter__5523__auto__ = (function expense_hound_cljs$core$history_$_iter__24440(s__24441){
return (new cljs.core.LazySeq(null,(function (){
var s__24441__$1 = s__24441;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24441__$1);
if(temp__5804__auto__){
var s__24441__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24441__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24441__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24443 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24442 = (0);
while(true){
if((i__24442 < size__5522__auto__)){
var map__24444 = cljs.core._nth(c__5521__auto__,i__24442);
var map__24444__$1 = cljs.core.__destructure_map(map__24444);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24444__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24444__$1,new cljs.core.Keyword(null,"datetime","datetime",494675702));
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24444__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
cljs.core.chunk_append(b__24443,(function (){var emoji = cljs.core.some(((function (i__24442,map__24444,map__24444__$1,category_name,datetime,sum,c__5521__auto__,size__5522__auto__,b__24443,s__24441__$2,temp__5804__auto__){
return (function (p1__24439_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__24439_SHARP_))){
return new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(p1__24439_SHARP_);
} else {
return null;
}
});})(i__24442,map__24444,map__24444__$1,category_name,datetime,sum,c__5521__auto__,size__5522__auto__,b__24443,s__24441__$2,temp__5804__auto__))
,categories);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--item","div.history--item",-837104737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),datetime], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),emoji], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((sum < (0)))?"history--amount--refund":null)], null),Math.abs(sum)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--datetime","div.history--datetime",881927059),module$node_modules$dayjs$dayjs_min(datetime).format("HH:MM; DD.MM.YY")], null)], null);
})());

var G__24475 = (i__24442 + (1));
i__24442 = G__24475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24443),expense_hound_cljs$core$history_$_iter__24440(cljs.core.chunk_rest(s__24441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24443),null);
}
} else {
var map__24445 = cljs.core.first(s__24441__$2);
var map__24445__$1 = cljs.core.__destructure_map(map__24445);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24445__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24445__$1,new cljs.core.Keyword(null,"datetime","datetime",494675702));
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24445__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
return cljs.core.cons((function (){var emoji = cljs.core.some(((function (map__24445,map__24445__$1,category_name,datetime,sum,s__24441__$2,temp__5804__auto__){
return (function (p1__24439_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__24439_SHARP_))){
return new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(p1__24439_SHARP_);
} else {
return null;
}
});})(map__24445,map__24445__$1,category_name,datetime,sum,s__24441__$2,temp__5804__auto__))
,categories);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--item","div.history--item",-837104737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),datetime], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),emoji], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((sum < (0)))?"history--amount--refund":null)], null),Math.abs(sum)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--datetime","div.history--datetime",881927059),module$node_modules$dayjs$dayjs_min(datetime).format("HH:MM; DD.MM.YY")], null)], null);
})(),expense_hound_cljs$core$history_$_iter__24440(cljs.core.rest(s__24441__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(spendings);
})()], null)], null);
});
cljs.core.some((function (p1__24446_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("all",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__24446_SHARP_))){
return p1__24446_SHARP_;
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"a"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"b"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"all"], null)], null));
expense_hound_cljs.core.app = (function expense_hound_cljs$core$app(){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var about_to_spend = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var reset_data_BANG_ = (function (){
cljs.core.reset_BANG_(data,new cljs.core.Keyword(null,"loading","loading",-737050189));

var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11799__auto__ = (function (state_24452){
var state_val_24453 = (state_24452[(1)]);
if((state_val_24453 === (1))){
var inst_24447 = expense_hound_cljs.core.fetch_data_BANG_();
var state_24452__$1 = state_24452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24452__$1,(2),inst_24447);
} else {
if((state_val_24453 === (2))){
var inst_24449 = (state_24452[(2)]);
var inst_24450 = cljs.core.reset_BANG_(data,inst_24449);
var state_24452__$1 = state_24452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24452__$1,inst_24450);
} else {
return null;
}
}
});
return (function() {
var expense_hound_cljs$core$app_$_state_machine__11800__auto__ = null;
var expense_hound_cljs$core$app_$_state_machine__11800__auto____0 = (function (){
var statearr_24454 = [null,null,null,null,null,null,null];
(statearr_24454[(0)] = expense_hound_cljs$core$app_$_state_machine__11800__auto__);

(statearr_24454[(1)] = (1));

return statearr_24454;
});
var expense_hound_cljs$core$app_$_state_machine__11800__auto____1 = (function (state_24452){
while(true){
var ret_value__11801__auto__ = (function (){try{while(true){
var result__11802__auto__ = switch__11799__auto__(state_24452);
if(cljs.core.keyword_identical_QMARK_(result__11802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11802__auto__;
}
break;
}
}catch (e24455){var ex__11803__auto__ = e24455;
var statearr_24456_24476 = state_24452;
(statearr_24456_24476[(2)] = ex__11803__auto__);


if(cljs.core.seq((state_24452[(4)]))){
var statearr_24457_24477 = state_24452;
(statearr_24457_24477[(1)] = cljs.core.first((state_24452[(4)])));

} else {
throw ex__11803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24478 = state_24452;
state_24452 = G__24478;
continue;
} else {
return ret_value__11801__auto__;
}
break;
}
});
expense_hound_cljs$core$app_$_state_machine__11800__auto__ = function(state_24452){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$app_$_state_machine__11800__auto____0.call(this);
case 1:
return expense_hound_cljs$core$app_$_state_machine__11800__auto____1.call(this,state_24452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$app_$_state_machine__11800__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$app_$_state_machine__11800__auto____0;
expense_hound_cljs$core$app_$_state_machine__11800__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$app_$_state_machine__11800__auto____1;
return expense_hound_cljs$core$app_$_state_machine__11800__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_24458 = f__11870__auto__();
(statearr_24458[(6)] = c__11869__auto__);

return statearr_24458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
reset_data_BANG_();

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.content","main.content",-806546979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u0422\u0440\u0435\u043A\u0435\u0440"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),cljs.core.deref(data)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loader","div.loader",-1644603528)], null):(function (){var map__24459 = cljs.core.deref(data);
var map__24459__$1 = cljs.core.__destructure_map(map__24459);
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24459__$1,new cljs.core.Keyword(null,"categories","categories",178386610));
var spendings_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24459__$1,new cljs.core.Keyword(null,"spendings-list","spendings-list",-256293101));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bars,categories,cljs.core.deref(about_to_spend)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.input_section,categories,about_to_spend,reset_data_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.history,categories,spendings_list], null)], null);
})())], null);
});
});
expense_hound_cljs.core.start = (function expense_hound_cljs$core$start(){
cljs.core.reset_BANG_(expense_hound_cljs.core.api_key,expense_hound_cljs.core.get_persistent_BANG_("api-key","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447 \u043A API"));

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
