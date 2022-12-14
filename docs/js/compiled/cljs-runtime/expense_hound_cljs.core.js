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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sum","sum",136986814),cljs.core.filterv((function (p1__12748_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category_name","category_name",-961572431).cljs$core$IFn$_invoke$arity$1(p1__12748_SHARP_),category_name)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,"all")));
}),spendings)));
});
expense_hound_cljs.core.transform_keys = (function expense_hound_cljs$core$transform_keys(m){
return cljs.core.update_keys(m,(function (p1__12749_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(p1__12749_SHARP_),"_","-"));
}));
});
expense_hound_cljs.core.fetch_data_BANG_ = (function expense_hound_cljs$core$fetch_data_BANG_(){
var now = module$node_modules$dayjs$dayjs_min();
var period_start_ts = (((now.date() < (5)))?now.date((5)).subtract((1),"month"):now.date((5))).valueOf();
var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11784__auto__ = (function (state_12788){
var state_val_12789 = (state_12788[(1)]);
if((state_val_12789 === (1))){
var inst_12753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12754 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12755 = ["apikey"];
var inst_12756 = cljs.core.deref(expense_hound_cljs.core.api_key);
var inst_12757 = [inst_12756];
var inst_12758 = cljs.core.PersistentHashMap.fromArrays(inst_12755,inst_12757);
var inst_12759 = [inst_12758,false];
var inst_12760 = cljs.core.PersistentHashMap.fromArrays(inst_12754,inst_12759);
var inst_12761 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/categories?order=name",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12760], 0));
var inst_12762 = ["https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings?select=category_name,sum,datetime&datetime=gt.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(period_start_ts)].join('');
var inst_12763 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12764 = ["apikey"];
var inst_12765 = cljs.core.deref(expense_hound_cljs.core.api_key);
var inst_12766 = [inst_12765];
var inst_12767 = cljs.core.PersistentHashMap.fromArrays(inst_12764,inst_12766);
var inst_12768 = [inst_12767,false];
var inst_12769 = cljs.core.PersistentHashMap.fromArrays(inst_12763,inst_12768);
var inst_12770 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_12762,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12769], 0));
var inst_12771 = [inst_12761,inst_12770];
var inst_12772 = (new cljs.core.PersistentVector(null,2,(5),inst_12753,inst_12771,null));
var inst_12773 = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,inst_12772);
var state_12788__$1 = state_12788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12788__$1,(2),inst_12773);
} else {
if((state_val_12789 === (2))){
var inst_12775 = (state_12788[(2)]);
var inst_12776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12775,(0),null);
var inst_12777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12775,(1),null);
var inst_12778 = [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.Keyword(null,"spendings-list","spendings-list",-256293101)];
var inst_12779 = (function (){var vec__12750 = inst_12775;
var categories = inst_12776;
var monthly_spendings = inst_12777;
return (function (category){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expense_hound_cljs.core.transform_keys(category),new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957),expense_hound_cljs.core.get_category_spendings(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(monthly_spendings)));
});
})();
var inst_12780 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12776);
var inst_12781 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_12779,inst_12780);
var inst_12782 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12777);
var inst_12783 = cljs.core.rseq(inst_12782);
var inst_12784 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(expense_hound_cljs.core.transform_keys,inst_12783);
var inst_12785 = [inst_12781,inst_12784];
var inst_12786 = cljs.core.PersistentHashMap.fromArrays(inst_12778,inst_12785);
var state_12788__$1 = state_12788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12788__$1,inst_12786);
} else {
return null;
}
}
});
return (function() {
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__ = null;
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____0 = (function (){
var statearr_12790 = [null,null,null,null,null,null,null];
(statearr_12790[(0)] = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__);

(statearr_12790[(1)] = (1));

return statearr_12790;
});
var expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____1 = (function (state_12788){
while(true){
var ret_value__11786__auto__ = (function (){try{while(true){
var result__11787__auto__ = switch__11784__auto__(state_12788);
if(cljs.core.keyword_identical_QMARK_(result__11787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11787__auto__;
}
break;
}
}catch (e12791){var ex__11788__auto__ = e12791;
var statearr_12792_12870 = state_12788;
(statearr_12792_12870[(2)] = ex__11788__auto__);


if(cljs.core.seq((state_12788[(4)]))){
var statearr_12793_12871 = state_12788;
(statearr_12793_12871[(1)] = cljs.core.first((state_12788[(4)])));

} else {
throw ex__11788__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12872 = state_12788;
state_12788 = G__12872;
continue;
} else {
return ret_value__11786__auto__;
}
break;
}
});
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__ = function(state_12788){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____0.call(this);
case 1:
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____1.call(this,state_12788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____0;
expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto____1;
return expense_hound_cljs$core$fetch_data_BANG__$_state_machine__11785__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_12794 = f__11870__auto__();
(statearr_12794[(6)] = c__11869__auto__);

return statearr_12794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
expense_hound_cljs.core.submit_transaction_BANG_ = (function expense_hound_cljs$core$submit_transaction_BANG_(category_name,sum){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://dpefczqikdvufeuyldmj.supabase.co/rest/v1/spendings",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["apikey",cljs.core.deref(expense_hound_cljs.core.api_key)], null),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sum","sum",136986814),sum,new cljs.core.Keyword(null,"category_name","category_name",-961572431),category_name,new cljs.core.Keyword(null,"datetime","datetime",494675702),module$node_modules$dayjs$dayjs_min().valueOf()], null)], null)], 0));
});
expense_hound_cljs.core.progress_bar = (function expense_hound_cljs$core$progress_bar(p__12795){
var map__12796 = p__12795;
var map__12796__$1 = cljs.core.__destructure_map(map__12796);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12796__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12796__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var remaining_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12796__$1,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997));
var available = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12796__$1,new cljs.core.Keyword(null,"available","available",-1470697127));
var about_to_spend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12796__$1,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12796__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar--bar","div.progress-bar--bar",1592792181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, ["--color",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"33"].join(''),"--opaque-color",color,"--width-before-change",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (remaining_budget / base_budget))),"%"].join(''),"--width-after-change",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((remaining_budget - about_to_spend) / base_budget))),"%"].join('')], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),about_to_spend))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(available):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"tomato"], null)], null),available], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(available - about_to_spend)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar--total","div.progress-bar--total",1381484267),remaining_budget], null)], null);
});
expense_hound_cljs.core.progress_bars = (function expense_hound_cljs$core$progress_bars(categories,about_to_spend){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar--container","div.progress-bar--container",-491996734),(function (){var iter__5523__auto__ = (function expense_hound_cljs$core$progress_bars_$_iter__12797(s__12798){
return (new cljs.core.LazySeq(null,(function (){
var s__12798__$1 = s__12798;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12798__$1);
if(temp__5804__auto__){
var s__12798__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12798__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12798__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12800 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12799 = (0);
while(true){
if((i__12799 < size__5522__auto__)){
var map__12801 = cljs.core._nth(c__5521__auto__,i__12799);
var map__12801__$1 = cljs.core.__destructure_map(map__12801);
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12801__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12801__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var spendings_total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12801__$1,new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12801__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__12800,(function (){var now = module$node_modules$dayjs$dayjs_min();
var remaining_budget = (base_budget - spendings_total);
var days_in_period = (((now.date() < (5)))?now.subtract((1),"month"):now).daysInMonth();
var days_from_start = now.diff((((now.date() < (4)))?now.date((4)).subtract((1),"month"):now.date((4))),"day");
var available = Math.floor((((base_budget / days_in_period) * days_from_start) - spendings_total));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680),base_budget,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997),remaining_budget,new cljs.core.Keyword(null,"available","available",-1470697127),available,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785),about_to_spend,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null);
})());

var G__12873 = (i__12799 + (1));
i__12799 = G__12873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12800),expense_hound_cljs$core$progress_bars_$_iter__12797(cljs.core.chunk_rest(s__12798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12800),null);
}
} else {
var map__12802 = cljs.core.first(s__12798__$2);
var map__12802__$1 = cljs.core.__destructure_map(map__12802);
var base_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12802__$1,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12802__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var spendings_total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12802__$1,new cljs.core.Keyword(null,"spendings-total","spendings-total",-266347957));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12802__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons((function (){var now = module$node_modules$dayjs$dayjs_min();
var remaining_budget = (base_budget - spendings_total);
var days_in_period = (((now.date() < (5)))?now.subtract((1),"month"):now).daysInMonth();
var days_from_start = now.diff((((now.date() < (4)))?now.date((4)).subtract((1),"month"):now.date((4))),"day");
var available = Math.floor((((base_budget / days_in_period) * days_from_start) - spendings_total));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_hound_cljs.core.progress_bar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"base-budget","base-budget",-1447264680),base_budget,new cljs.core.Keyword(null,"remaining-budget","remaining-budget",560052997),remaining_budget,new cljs.core.Keyword(null,"available","available",-1470697127),available,new cljs.core.Keyword(null,"about-to-spend","about-to-spend",-207709785),about_to_spend,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)], null);
})(),expense_hound_cljs$core$progress_bars_$_iter__12797(cljs.core.rest(s__12798__$2)));
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
var default_to_0 = (function (p1__12803_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__12803_SHARP_)){
return (0);
} else {
return parseFloat(p1__12803_SHARP_);
}
});
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-section","div.input-section",-1170218990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-section--input","input.input-section--input",1042690371),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"numeric",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"450",new cljs.core.Keyword(null,"value","value",305978217),(((cljs.core.deref(about_to_spend) > (0)))?cljs.core.deref(about_to_spend):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12804_SHARP_){
return cljs.core.reset_BANG_(about_to_spend,default_to_0(p1__12804_SHARP_.currentTarget.value));
})], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12806){
var map__12807 = p__12806;
var map__12807__$1 = cljs.core.__destructure_map(map__12807);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12807__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var emoji = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12807__$1,new cljs.core.Keyword(null,"emoji","emoji",1031230144));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var handle_submit = (function (is_refund_QMARK_){
return (function (){
cljs.core.reset_BANG_(loading_QMARK_,true);

var c__11869__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11870__auto__ = (function (){var switch__11784__auto__ = (function (state_12833){
var state_val_12834 = (state_12833[(1)]);
if((state_val_12834 === (1))){
var state_12833__$1 = state_12833;
if(cljs.core.truth_(is_refund_QMARK_)){
var statearr_12835_12874 = state_12833__$1;
(statearr_12835_12874[(1)] = (3));

} else {
var statearr_12836_12875 = state_12833__$1;
(statearr_12836_12875[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12834 === (2))){
var inst_12818 = (state_12833[(2)]);
var inst_12819 = cljs.core.__destructure_map(inst_12818);
var inst_12820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12819,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_12821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12819,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_12822 = cljs.core.reset_BANG_(loading_QMARK_,false);
var state_12833__$1 = (function (){var statearr_12837 = state_12833;
(statearr_12837[(7)] = inst_12821);

(statearr_12837[(8)] = inst_12822);

return statearr_12837;
})();
if(cljs.core.truth_(inst_12820)){
var statearr_12838_12876 = state_12833__$1;
(statearr_12838_12876[(1)] = (6));

} else {
var statearr_12839_12877 = state_12833__$1;
(statearr_12839_12877[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12834 === (3))){
var inst_12810 = cljs.core.deref(about_to_spend);
var inst_12811 = (- inst_12810);
var state_12833__$1 = state_12833;
var statearr_12840_12878 = state_12833__$1;
(statearr_12840_12878[(2)] = inst_12811);

(statearr_12840_12878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12834 === (4))){
var inst_12813 = cljs.core.deref(about_to_spend);
var state_12833__$1 = state_12833;
var statearr_12841_12879 = state_12833__$1;
(statearr_12841_12879[(2)] = inst_12813);

(statearr_12841_12879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12834 === (5))){
var inst_12815 = (state_12833[(2)]);
var inst_12816 = expense_hound_cljs.core.submit_transaction_BANG_(name,inst_12815);
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12833__$1,(2),inst_12816);
} else {
if((state_val_12834 === (6))){
var inst_12824 = cljs.core.reset_BANG_(about_to_spend,(0));
var inst_12825 = (reset_data_BANG_.cljs$core$IFn$_invoke$arity$0 ? reset_data_BANG_.cljs$core$IFn$_invoke$arity$0() : reset_data_BANG_.call(null));
var state_12833__$1 = (function (){var statearr_12842 = state_12833;
(statearr_12842[(9)] = inst_12824);

return statearr_12842;
})();
var statearr_12843_12880 = state_12833__$1;
(statearr_12843_12880[(2)] = inst_12825);

(statearr_12843_12880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12834 === (7))){
var inst_12821 = (state_12833[(7)]);
var inst_12827 = cljs.core.clj__GT_js(inst_12821);
var inst_12828 = JSON.stringify(inst_12827);
var inst_12829 = alert(inst_12828);
var state_12833__$1 = state_12833;
var statearr_12844_12881 = state_12833__$1;
(statearr_12844_12881[(2)] = inst_12829);

(statearr_12844_12881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12834 === (8))){
var inst_12831 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12833__$1,inst_12831);
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
var statearr_12845 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12845[(0)] = expense_hound_cljs$core$input_section_$_state_machine__11785__auto__);

(statearr_12845[(1)] = (1));

return statearr_12845;
});
var expense_hound_cljs$core$input_section_$_state_machine__11785__auto____1 = (function (state_12833){
while(true){
var ret_value__11786__auto__ = (function (){try{while(true){
var result__11787__auto__ = switch__11784__auto__(state_12833);
if(cljs.core.keyword_identical_QMARK_(result__11787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11787__auto__;
}
break;
}
}catch (e12846){var ex__11788__auto__ = e12846;
var statearr_12847_12882 = state_12833;
(statearr_12847_12882[(2)] = ex__11788__auto__);


if(cljs.core.seq((state_12833[(4)]))){
var statearr_12848_12883 = state_12833;
(statearr_12848_12883[(1)] = cljs.core.first((state_12833[(4)])));

} else {
throw ex__11788__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12884 = state_12833;
state_12833 = G__12884;
continue;
} else {
return ret_value__11786__auto__;
}
break;
}
});
expense_hound_cljs$core$input_section_$_state_machine__11785__auto__ = function(state_12833){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$input_section_$_state_machine__11785__auto____0.call(this);
case 1:
return expense_hound_cljs$core$input_section_$_state_machine__11785__auto____1.call(this,state_12833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$input_section_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$input_section_$_state_machine__11785__auto____0;
expense_hound_cljs$core$input_section_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$input_section_$_state_machine__11785__auto____1;
return expense_hound_cljs$core$input_section_$_state_machine__11785__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_12849 = f__11870__auto__();
(statearr_12849[(6)] = c__11869__auto__);

return statearr_12849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-loading","data-loading",1561385822),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-section--button",(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?"input-section--button--loading":null)], null),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),handle_submit(true),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_submit(false),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null),emoji], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12805_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__12805_SHARP_),"all");
}),categories)))], null);
});
});
expense_hound_cljs.core.history = (function expense_hound_cljs$core$history(categories,spendings){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--wrapper","div.history--wrapper",1870690886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--container","div.history--container",128988096),(function (){var iter__5523__auto__ = (function expense_hound_cljs$core$history_$_iter__12851(s__12852){
return (new cljs.core.LazySeq(null,(function (){
var s__12852__$1 = s__12852;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12852__$1);
if(temp__5804__auto__){
var s__12852__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12852__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__12852__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__12854 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__12853 = (0);
while(true){
if((i__12853 < size__5522__auto__)){
var map__12855 = cljs.core._nth(c__5521__auto__,i__12853);
var map__12855__$1 = cljs.core.__destructure_map(map__12855);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12855__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12855__$1,new cljs.core.Keyword(null,"datetime","datetime",494675702));
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12855__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
cljs.core.chunk_append(b__12854,(function (){var emoji = cljs.core.some(((function (i__12853,map__12855,map__12855__$1,category_name,datetime,sum,c__5521__auto__,size__5522__auto__,b__12854,s__12852__$2,temp__5804__auto__){
return (function (p1__12850_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__12850_SHARP_))){
return new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(p1__12850_SHARP_);
} else {
return null;
}
});})(i__12853,map__12855,map__12855__$1,category_name,datetime,sum,c__5521__auto__,size__5522__auto__,b__12854,s__12852__$2,temp__5804__auto__))
,categories);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--item","div.history--item",-837104737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),datetime], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),emoji], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((sum < (0)))?"history--amount--refund":null)], null),Math.abs(sum)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--datetime","div.history--datetime",881927059),module$node_modules$dayjs$dayjs_min(datetime).format("HH:MM; DD.MM.YY")], null)], null);
})());

var G__12885 = (i__12853 + (1));
i__12853 = G__12885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12854),expense_hound_cljs$core$history_$_iter__12851(cljs.core.chunk_rest(s__12852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12854),null);
}
} else {
var map__12856 = cljs.core.first(s__12852__$2);
var map__12856__$1 = cljs.core.__destructure_map(map__12856);
var category_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12856__$1,new cljs.core.Keyword(null,"category-name","category-name",-1615496579));
var datetime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12856__$1,new cljs.core.Keyword(null,"datetime","datetime",494675702));
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12856__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
return cljs.core.cons((function (){var emoji = cljs.core.some(((function (map__12856,map__12856__$1,category_name,datetime,sum,s__12852__$2,temp__5804__auto__){
return (function (p1__12850_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__12850_SHARP_))){
return new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(p1__12850_SHARP_);
} else {
return null;
}
});})(map__12856,map__12856__$1,category_name,datetime,sum,s__12852__$2,temp__5804__auto__))
,categories);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--item","div.history--item",-837104737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),datetime], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),emoji], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((sum < (0)))?"history--amount--refund":null)], null),Math.abs(sum)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history--datetime","div.history--datetime",881927059),module$node_modules$dayjs$dayjs_min(datetime).format("HH:MM; DD.MM.YY")], null)], null);
})(),expense_hound_cljs$core$history_$_iter__12851(cljs.core.rest(s__12852__$2)));
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
var f__11870__auto__ = (function (){var switch__11784__auto__ = (function (state_12862){
var state_val_12863 = (state_12862[(1)]);
if((state_val_12863 === (1))){
var inst_12857 = expense_hound_cljs.core.fetch_data_BANG_();
var state_12862__$1 = state_12862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12862__$1,(2),inst_12857);
} else {
if((state_val_12863 === (2))){
var inst_12859 = (state_12862[(2)]);
var inst_12860 = cljs.core.reset_BANG_(data,inst_12859);
var state_12862__$1 = state_12862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12862__$1,inst_12860);
} else {
return null;
}
}
});
return (function() {
var expense_hound_cljs$core$app_$_state_machine__11785__auto__ = null;
var expense_hound_cljs$core$app_$_state_machine__11785__auto____0 = (function (){
var statearr_12864 = [null,null,null,null,null,null,null];
(statearr_12864[(0)] = expense_hound_cljs$core$app_$_state_machine__11785__auto__);

(statearr_12864[(1)] = (1));

return statearr_12864;
});
var expense_hound_cljs$core$app_$_state_machine__11785__auto____1 = (function (state_12862){
while(true){
var ret_value__11786__auto__ = (function (){try{while(true){
var result__11787__auto__ = switch__11784__auto__(state_12862);
if(cljs.core.keyword_identical_QMARK_(result__11787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11787__auto__;
}
break;
}
}catch (e12865){var ex__11788__auto__ = e12865;
var statearr_12866_12886 = state_12862;
(statearr_12866_12886[(2)] = ex__11788__auto__);


if(cljs.core.seq((state_12862[(4)]))){
var statearr_12867_12887 = state_12862;
(statearr_12867_12887[(1)] = cljs.core.first((state_12862[(4)])));

} else {
throw ex__11788__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12888 = state_12862;
state_12862 = G__12888;
continue;
} else {
return ret_value__11786__auto__;
}
break;
}
});
expense_hound_cljs$core$app_$_state_machine__11785__auto__ = function(state_12862){
switch(arguments.length){
case 0:
return expense_hound_cljs$core$app_$_state_machine__11785__auto____0.call(this);
case 1:
return expense_hound_cljs$core$app_$_state_machine__11785__auto____1.call(this,state_12862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expense_hound_cljs$core$app_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$0 = expense_hound_cljs$core$app_$_state_machine__11785__auto____0;
expense_hound_cljs$core$app_$_state_machine__11785__auto__.cljs$core$IFn$_invoke$arity$1 = expense_hound_cljs$core$app_$_state_machine__11785__auto____1;
return expense_hound_cljs$core$app_$_state_machine__11785__auto__;
})()
})();
var state__11871__auto__ = (function (){var statearr_12868 = f__11870__auto__();
(statearr_12868[(6)] = c__11869__auto__);

return statearr_12868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11871__auto__);
}));

return c__11869__auto__;
});
reset_data_BANG_();

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.content","main.content",-806546979),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u0422\u0440\u0435\u043A\u0435\u0440"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),cljs.core.deref(data)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loader","div.loader",-1644603528)], null):(function (){var map__12869 = cljs.core.deref(data);
var map__12869__$1 = cljs.core.__destructure_map(map__12869);
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12869__$1,new cljs.core.Keyword(null,"categories","categories",178386610));
var spendings_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12869__$1,new cljs.core.Keyword(null,"spendings-list","spendings-list",-256293101));
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
