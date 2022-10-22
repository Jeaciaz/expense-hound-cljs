goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__12527 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12528 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12528);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__12529 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12530 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12530);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12529);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12527);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__12532 = arguments.length;
switch (G__12532) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__12533 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12533,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12533,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__12536_12553 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__12537_12554 = null;
var count__12538_12555 = (0);
var i__12539_12556 = (0);
while(true){
if((i__12539_12556 < count__12538_12555)){
var vec__12546_12557 = chunk__12537_12554.cljs$core$IIndexed$_nth$arity$2(null,i__12539_12556);
var container_12558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546_12557,(0),null);
var comp_12559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12546_12557,(1),null);
reagent.dom.re_render_component(comp_12559,container_12558);


var G__12560 = seq__12536_12553;
var G__12561 = chunk__12537_12554;
var G__12562 = count__12538_12555;
var G__12563 = (i__12539_12556 + (1));
seq__12536_12553 = G__12560;
chunk__12537_12554 = G__12561;
count__12538_12555 = G__12562;
i__12539_12556 = G__12563;
continue;
} else {
var temp__5804__auto___12564 = cljs.core.seq(seq__12536_12553);
if(temp__5804__auto___12564){
var seq__12536_12565__$1 = temp__5804__auto___12564;
if(cljs.core.chunked_seq_QMARK_(seq__12536_12565__$1)){
var c__5568__auto___12566 = cljs.core.chunk_first(seq__12536_12565__$1);
var G__12567 = cljs.core.chunk_rest(seq__12536_12565__$1);
var G__12568 = c__5568__auto___12566;
var G__12569 = cljs.core.count(c__5568__auto___12566);
var G__12570 = (0);
seq__12536_12553 = G__12567;
chunk__12537_12554 = G__12568;
count__12538_12555 = G__12569;
i__12539_12556 = G__12570;
continue;
} else {
var vec__12549_12571 = cljs.core.first(seq__12536_12565__$1);
var container_12572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12549_12571,(0),null);
var comp_12573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12549_12571,(1),null);
reagent.dom.re_render_component(comp_12573,container_12572);


var G__12574 = cljs.core.next(seq__12536_12565__$1);
var G__12575 = null;
var G__12576 = (0);
var G__12577 = (0);
seq__12536_12553 = G__12574;
chunk__12537_12554 = G__12575;
count__12538_12555 = G__12576;
i__12539_12556 = G__12577;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
