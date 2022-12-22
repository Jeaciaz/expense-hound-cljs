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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sum","sum",136986814),cljs.core.filterv((function (p1__12746_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category_name","category_name",-961572431).cljs$core$IFn$_invoke$arity$1(p1__12746_SHARP_),category_name)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,"all")));
}),spendings)));
});
expense_hound_cljs.core.transform_keys = (function expense_hound_cljs$core$transform_keys(m){
return cljs.core.update_keys(m,(function (p1__12747_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(p1__12747_SHARP_),"_","-"));
}));
});
expense_hound_cljs.core.fetch_data_BANG_ = (function expense_hound_cljs$core$fetch_data_BANG_(){
var now = module$node_modules$dayjs$dayjs_min();
var period_start_ts = (((now.date() < (5)))?now.date((5)).subtract((1),"month"):now.date((5))).valueOf();
var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11784__auto__ = (function (state_12786){
var state_val_12787 = (state_12786[(1)]);
if((state_val_12787 === (1))){
var inst_12751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12752 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12753 = ["apikey"];
var inst_12754 = cljs.core.deref(expense_hound_cljs.core.api_key);
var inst_12755 = [inst_12754];
var inst_12756 = cljs.core.PersistentHashMap.fromArrays(inst_12753,inst_12755);
var inst_12757 = [inst_12756,false];
var inst_12758 = cljs.core.PersistentHashMap.fromArrays(inst_12752,inst_12757);
var inst_12759 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/categories?order=name",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12758], 0));
var inst_12760 = ["https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings?select=category_name,sum,datetime&datetime=gt.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period_start_ts)].join('');
var inst_12761 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12762 = ["apikey"];
var inst_12763 = cljs.core.deref(expense_hound_cljs.core.api_key);
var inst_12764 = [inst_12763];
var inst_12765 = cljs.core.PersistentHashMap.fromArrays(inst_12762,inst_12764);
var inst_12766 = [inst_12765,false];
var inst_12767 = cljs.core.PersistentHashMap.fromArrays(inst_12761,inst_12766);
var inst_12768 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_12760,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12767], 0));
var inst_12769 = [inst_12759,inst_12768];
var inst_12770 = (new cljs.core.PersistentVector(null,2,(5),inst_12751,inst_12769,null));
var inst_12771 = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_12770);
var state_12786__$1 = state_12786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12786__$1,(2),inst_12771);
} else {
if((state_val_12787 === (2))){
var inst_12773 = (state_12786[(2)]);
var inst_12774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12773,(0),null);
var inst_12775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12773,(1),null);
var inst_12776 = [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.Keyword(null,"spendings-list","spendings-list",-256293101)];
var inst_12777 = (function (){var vec__12748 = inst_12773;
var categories = inst_12774;
var monthly_spendings = inst_12775;
return (function (category){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expense_hound_cljs.core.transform_keys(category),new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957),expense_hound_cljs.core.get_category_spendings(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(monthly_spendings)));
});
})();
var inst_12778 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12774);
var inst_12779 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_12777,inst_12778);
var inst_12780 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12775);
var inst_12781 = cljs.core.rseq(inst_12780);
var inst_12782 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(expense_hound_cljs.core.transform_keys,inst_12781);
var inst_12783 = [inst_12779,inst_12782];
var inst_12784 = cljs.core.PersistentHashMap.fromArrays(inst_12776,inst_12783);
var state_12786__$1 = state_12786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12786__$1,inst_12784);
} else {
return null;
}
}
});
return (function() {
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__ = null;
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____0 = (function (){
var statearr_12788 = [null,null,null,null,null,null,null];
(statearr_12788[(0)] = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__);

(statearr_12788[(1)] = (1));

return statearr_12788;
});
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____1 = (function (state_12786){
while(true){
var ret_value__11786__auto__ = (function (){try{while(true){
var result__11787__auto__ = switch__11784__auto__(state_12786);
if(cljs.core.keyword_identical_QMARK_(result__11787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11787__auto__;
}
break;
}
}catch (e12789){var ex__11788__auto__ = e12789;
var statearr_12790_12868 = state_12786;
(statearr_12790_12868[(2)] = ex__11788__auto__);


if(cljs.core.seq((state_12786[(4)]))){
var statearr_12791_12869 = state_12786;
(statearr_12791_12869[(1)] = cljs.core.first((state_12786[(4)])));

} else {
throw ex__11788__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12870 = state_12786;
state_12786 = G__12870;
continue;
} else {
return ret_value__11786__auto__;
}
break;
}
});
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__ = function(state_12786){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____0.call(this);
case 1:
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____1.call(this,state_12786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____0;
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____1;
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_12792 = f__11870__auto__();
(statearr_12792[(6)] = c__11869__auto__);

return statearr_12792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
expense_hound_cljs.core.submit_transaction_BANG_ = (function expense_hound_cljs$core$submit_transaction_BANG_(category_name,sum){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["apikey",cljs.core.deref(expense_hound_cljs.core.api_key)], null),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sum","sum",136986814),sum,new cljs.core.Keyword(null,"category_name","category_name",-961572431),category_name,new cljs.core.Keyword(null,"datetime","datetime",494675702),module$node_modules$dayjs$dayjs_min().valueOf()], null)], null)], 0));
});
expense_hound_cljs.core.progress_bar = (function expense_hound_cljs$core$progress_bar(p__12793){
var map__12794 = p__12793;
var map__12794__$1 = cljs.core.__destructure_map(map__12794);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var remaining_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997));
var available = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,new cljs.core.Keyword(null,"available","available",-1470697127));
var about_to_spend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar--bar","div.progress-bar--bar",1592792181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, ["--color",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"33"].join(''),"--opaque-color",color,"--width-before-change",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (remaining_budget / base_budget))),"%"].join(''),"--width-after-change",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((remaining_budget - about_to_spend) / base_budget))),"%"].join('')], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),about_to_spend))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(available):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"tomato"], null)], null),available], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(available - about_to_spend)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),remaining_budget], null)], null);
});
expense_hound_cljs.core.progress_bars = (function expense_hound_cljs$core$progress_bars(categories,about_to_spend){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar--container","div.progress-bar--container",-491996734),(function (){var iter__5523__auto__ = (function expense_hound_cljs$core$progress_bars_$_iter__12795(s__12796){
return (new cljs.core.LazySeq(null,(function (){
var s__12796__$1 = s__12796;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12796__$1);
if(temp__5804__auto__){
var s__12796__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12796__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12796__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12798 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12797 = (0);
while(true){
if((i__12797 < size__5522__auto__)){
var map__12799 = cljs.core._nth(c__5521__auto__,i__12797);
var map__12799__$1 = cljs.core.__destructure_map(map__12799);
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12799__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12799__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var spendings_total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12799__$1,new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12799__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__12798,(function (){var now = module$node_modules$dayjs$dayjs_min();
var remaining_budget = (base_budget - spendings_total);
var days_in_period = (((now.date() < (5)))?now.subtract((1),"month"):now).daysInMonth();
var days_from_start = now.diff((((now.date() < (4)))?now.date((4)).subtract((1),"month"):now.date((4))),"day");
var available = Math.floor((((base_budget / days_in_period) * days_from_start) - spendings_total));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680),base_budget,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997),remaining_budget,new cljs.core.Keyword(null,"available","available",-1470697127),available,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785),about_to_spend,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null);
})());

var G__12871 = (i__12797 + (1));
i__12797 = G__12871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12798),expense_hound_cljs$core$progress_bars_$_iter__12795(cljs.core.chunk_rest(s__12796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12798),null);
}
} else {
var map__12800 = cljs.core.first(s__12796__$2);
var map__12800__$1 = cljs.core.__destructure_map(map__12800);
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12800__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12800__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var spendings_total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12800__$1,new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12800__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons((function (){var now = module$node_modules$dayjs$dayjs_min();
var remaining_budget = (base_budget - spendings_total);
var days_in_period = (((now.date() < (5)))?now.subtract((1),"month"):now).daysInMonth();
var days_from_start = now.diff((((now.date() < (4)))?now.date((4)).subtract((1),"month"):now.date((4))),"day");
var available = Math.floor((((base_budget / days_in_period) * days_from_start) - spendings_total));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680),base_budget,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997),remaining_budget,new cljs.core.Keyword(null,"available","available",-1470697127),available,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785),about_to_spend,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null);
})(),expense_hound_cljs$core$progress_bars_$_iter__12795(cljs.core.rest(s__12796__$2)));
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
var default_to_0 = (function (p1__12801_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__12801_SHARP_)){
return (0);
} else {
return parseFloat(p1__12801_SHARP_);
}
});
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-section","div.input-section",-1170218990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-section--input","input.input-section--input",1042690371),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if((!((el == null)))){
return el.focus();
} else {
return null;
}
}),new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"numeric",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"450",new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core.deref(about_to_spend) > (0)))?cljs.core.deref(about_to_spend):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12802_SHARP_){
return cljs.core.reset_BANG_(about_to_spend,default_to_0(p1__12802_SHARP_.currentTarget.value));
})], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12804){
var map__12805 = p__12804;
var map__12805__$1 = cljs.core.__destructure_map(map__12805);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12805__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var emoji = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12805__$1,new cljs.core.Keyword(null,"emoji","emoji",1031230144));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var handle_submit = (function (is_refund_QMARK_){
return (function (){
cljs.core.reset_BANG_(loading_QMARK_,true);

var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11784__auto__ = (function (state_12831){
var state_val_12832 = (state_12831[(1)]);
if((state_val_12832 === (1))){
var state_12831__$1 = state_12831;
if(cljs.core.truth_(is_refund_QMARK_)){
var statearr_12833_12872 = state_12831__$1;
(statearr_12833_12872[(1)] = (3));

} else {
var statearr_12834_12873 = state_12831__$1;
(statearr_12834_12873[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (2))){
var inst_12816 = (state_12831[(2)]);
var inst_12817 = cljs.core.__destructure_map(inst_12816);
var inst_12818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12817,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_12819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12817,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_12820 = cljs.core.reset_BANG_(loading_QMARK_,false);
var state_12831__$1 = (function (){var statearr_12835 = state_12831;
(statearr_12835[(7)] = inst_12820);

(statearr_12835[(8)] = inst_12819);

return statearr_12835;
})();
if(cljs.core.truth_(inst_12818)){
var statearr_12836_12874 = state_12831__$1;
(statearr_12836_12874[(1)] = (6));

} else {
var statearr_12837_12875 = state_12831__$1;
(statearr_12837_12875[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (3))){
var inst_12808 = cljs.core.deref(about_to_spend);
var inst_12809 = (- inst_12808);
var state_12831__$1 = state_12831;
var statearr_12838_12876 = state_12831__$1;
(statearr_12838_12876[(2)] = inst_12809);

(statearr_12838_12876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (4))){
var inst_12811 = cljs.core.deref(about_to_spend);
var state_12831__$1 = state_12831;
var statearr_12839_12877 = state_12831__$1;
(statearr_12839_12877[(2)] = inst_12811);

(statearr_12839_12877[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (5))){
var inst_12813 = (state_12831[(2)]);
var inst_12814 = expense_hound_cljs.core.submit_transaction_BANG_(name,inst_12813);
var state_12831__$1 = state_12831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12831__$1,(2),inst_12814);
} else {
if((state_val_12832 === (6))){
var inst_12822 = cljs.core.reset_BANG_(about_to_spend,(0));
var inst_12823 = (reset_data_BANG_.cljs$core$IFn$_invoke$arity$0 ? reset_data_BANG_.cljs$core$IFn$_invoke$arity$0() : reset_data_BANG_.call(null));
var state_12831__$1 = (function (){var statearr_12840 = state_12831;
(statearr_12840[(9)] = inst_12822);

return statearr_12840;
})();
var statearr_12841_12878 = state_12831__$1;
(statearr_12841_12878[(2)] = inst_12823);

(statearr_12841_12878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (7))){
var inst_12819 = (state_12831[(8)]);
var inst_12825 = cljs.core.clj__GT_js(inst_12819);
var inst_12826 = JSON.stringify(inst_12825);
var inst_12827 = alert(inst_12826);
var state_12831__$1 = state_12831;
var statearr_12842_12879 = state_12831__$1;
(statearr_12842_12879[(2)] = inst_12827);

(statearr_12842_12879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12832 === (8))){
var inst_12829 = (state_12831[(2)]);
var state_12831__$1 = state_12831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12831__$1,inst_12829);
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
var expense_hound_cljs$core$input_section_$_state_machine__11785__auto__ = null;
var expense_hound_cljs$core$input_section_$_state_machine__11785__auto____0 = (function (){
var statearr_12843 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12843[(0)] = expense_hound_cljs$core$input_section_$_state_machine__11785__auto__);

(statearr_12843[(1)] = (1));

return statearr_12843;
});
var expense_hound_cljs$core$input_section_$_state_machine__11785__auto____1 = (function (state_12831){
while(true){
var ret_value__11786__auto__ = (function (){try{while(true){
var result__11787__auto__ = switch__11784__auto__(state_12831);
if(cljs.core.keyword_identical_QMARK_(result__11787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11787__auto__;
}
break;
}
}catch (e12844){var ex__11788__auto__ = e12844;
var statearr_12845_12880 = state_12831;
(statearr_12845_12880[(2)] = ex__11788__auto__);


if(cljs.core.seq((state_12831[(4)]))){
var statearr_12846_12881 = state_12831;
(statearr_12846_12881[(1)] = cljs.core.first((state_12831[(4)])));

} else {
throw ex__11788__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12882 = state_12831;
state_12831 = G__12882;
continue;
} else {
return ret_value__11786__auto__;
}
break;
}
});
expense_hound_cljs$core$input_section_$_state_machine__11785__auto__ = function(state_12831){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$input_section_$_state_machine__11785__auto____0.call(this);
case 1:
return expense_hound_cljs$core$input_section_$_state_machine__11785__auto____1.call(this,state_12831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$input_section_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$input_section_$_state_machine__11785__auto____0;
expense_hound_cljs$core$input_section_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$input_section_$_state_machine__11785__auto____1;
return expense_hound_cljs$core$input_section_$_state_machine__11785__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_12847 = f__11870__auto__();
(statearr_12847[(6)] = c__11869__auto__);

return statearr_12847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-loading","data-loading",1561385822),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-section--button",(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?"input-section--button--loading":null)], null),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),handle_submit(true),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_submit(false),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null),emoji], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12803_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__12803_SHARP_),"all");
}),categories)))], null);
});
});
expense_hound_cljs.core.history = (function expense_hound_cljs$core$history(categories,spendings){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--wrapper","div.history--wrapper",1870690886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--container","div.history--container",128988096),(function (){var iter__5523__auto__ = (function expense_hound_cljs$core$history_$_iter__12849(s__12850){
return (new cljs.core.LazySeq(null,(function (){
var s__12850__$1 = s__12850;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12850__$1);
if(temp__5804__auto__){
var s__12850__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12850__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12850__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12852 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12851 = (0);
while(true){
if((i__12851 < size__5522__auto__)){
var map__12853 = cljs.core._nth(c__5521__auto__,i__12851);
var map__12853__$1 = cljs.core.__destructure_map(map__12853);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12853__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12853__$1,new cljs.core.Keyword(null,"datetime","datetime",494675702));
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12853__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
cljs.core.chunk_append(b__12852,(function (){var emoji = cljs.core.some(((function (i__12851,map__12853,map__12853__$1,category_name,datetime,sum,c__5521__auto__,size__5522__auto__,b__12852,s__12850__$2,temp__5804__auto__){
return (function (p1__12848_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__12848_SHARP_))){
return new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(p1__12848_SHARP_);
} else {
return null;
}
});})(i__12851,map__12853,map__12853__$1,category_name,datetime,sum,c__5521__auto__,size__5522__auto__,b__12852,s__12850__$2,temp__5804__auto__))
,categories);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--item","div.history--item",-837104737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),datetime], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),emoji], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((sum < (0)))?"history--amount--refund":null)], null),Math.abs(sum)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--datetime","div.history--datetime",881927059),module$node_modules$dayjs$dayjs_min(datetime).format("HH:MM; DD.MM.YY")], null)], null);
})());

var G__12883 = (i__12851 + (1));
i__12851 = G__12883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12852),expense_hound_cljs$core$history_$_iter__12849(cljs.core.chunk_rest(s__12850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12852),null);
}
} else {
var map__12854 = cljs.core.first(s__12850__$2);
var map__12854__$1 = cljs.core.__destructure_map(map__12854);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12854__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12854__$1,new cljs.core.Keyword(null,"datetime","datetime",494675702));
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12854__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
return cljs.core.cons((function (){var emoji = cljs.core.some(((function (map__12854,map__12854__$1,category_name,datetime,sum,s__12850__$2,temp__5804__auto__){
return (function (p1__12848_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__12848_SHARP_))){
return new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(p1__12848_SHARP_);
} else {
return null;
}
});})(map__12854,map__12854__$1,category_name,datetime,sum,s__12850__$2,temp__5804__auto__))
,categories);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--item","div.history--item",-837104737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),datetime], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),emoji], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((sum < (0)))?"history--amount--refund":null)], null),Math.abs(sum)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--datetime","div.history--datetime",881927059),module$node_modules$dayjs$dayjs_min(datetime).format("HH:MM; DD.MM.YY")], null)], null);
})(),expense_hound_cljs$core$history_$_iter__12849(cljs.core.rest(s__12850__$2)));
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
expense_hound_cljs.core.app = (function expense_hound_cljs$core$app(){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var about_to_spend = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var reset_data_BANG_ = (function (){
cljs.core.reset_BANG_(data,new cljs.core.Keyword(null,"loading","loading",-737050189));

var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11784__auto__ = (function (state_12860){
var state_val_12861 = (state_12860[(1)]);
if((state_val_12861 === (1))){
var inst_12855 = expense_hound_cljs.core.fetch_data_BANG_();
var state_12860__$1 = state_12860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12860__$1,(2),inst_12855);
} else {
if((state_val_12861 === (2))){
var inst_12857 = (state_12860[(2)]);
var inst_12858 = cljs.core.reset_BANG_(data,inst_12857);
var state_12860__$1 = state_12860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12860__$1,inst_12858);
} else {
return null;
}
}
});
return (function() {
var expense_hound_cljs$core$app_$_state_machine__11785__auto__ = null;
var expense_hound_cljs$core$app_$_state_machine__11785__auto____0 = (function (){
var statearr_12862 = [null,null,null,null,null,null,null];
(statearr_12862[(0)] = expense_hound_cljs$core$app_$_state_machine__11785__auto__);

(statearr_12862[(1)] = (1));

return statearr_12862;
});
var expense_hound_cljs$core$app_$_state_machine__11785__auto____1 = (function (state_12860){
while(true){
var ret_value__11786__auto__ = (function (){try{while(true){
var result__11787__auto__ = switch__11784__auto__(state_12860);
if(cljs.core.keyword_identical_QMARK_(result__11787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11787__auto__;
}
break;
}
}catch (e12863){var ex__11788__auto__ = e12863;
var statearr_12864_12884 = state_12860;
(statearr_12864_12884[(2)] = ex__11788__auto__);


if(cljs.core.seq((state_12860[(4)]))){
var statearr_12865_12885 = state_12860;
(statearr_12865_12885[(1)] = cljs.core.first((state_12860[(4)])));

} else {
throw ex__11788__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12886 = state_12860;
state_12860 = G__12886;
continue;
} else {
return ret_value__11786__auto__;
}
break;
}
});
expense_hound_cljs$core$app_$_state_machine__11785__auto__ = function(state_12860){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$app_$_state_machine__11785__auto____0.call(this);
case 1:
return expense_hound_cljs$core$app_$_state_machine__11785__auto____1.call(this,state_12860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$app_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$app_$_state_machine__11785__auto____0;
expense_hound_cljs$core$app_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$app_$_state_machine__11785__auto____1;
return expense_hound_cljs$core$app_$_state_machine__11785__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_12866 = f__11870__auto__();
(statearr_12866[(6)] = c__11869__auto__);

return statearr_12866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
reset_data_BANG_();

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.content","main.content",-806546979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u0422\u0440\u0435\u043A\u0435\u0440"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),cljs.core.deref(data)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loader","div.loader",-1644603528)], null):(function (){var map__12867 = cljs.core.deref(data);
var map__12867__$1 = cljs.core.__destructure_map(map__12867);
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12867__$1,new cljs.core.Keyword(null,"categories","categories",178386610));
var spendings_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12867__$1,new cljs.core.Keyword(null,"spendings-list","spendings-list",-256293101));
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
