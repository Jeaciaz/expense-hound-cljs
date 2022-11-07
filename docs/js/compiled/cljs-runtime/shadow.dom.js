goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21431 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_21431(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21432 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_21432(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__20208 = coll;
var G__20209 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__20208,G__20209) : shadow.dom.lazy_native_coll_seq.call(null,G__20208,G__20209));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__20246 = arguments.length;
switch (G__20246) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__20257 = arguments.length;
switch (G__20257) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__20267 = arguments.length;
switch (G__20267) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__20279 = arguments.length;
switch (G__20279) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__20294 = arguments.length;
switch (G__20294) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20309 = arguments.length;
switch (G__20309) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20322){if((e20322 instanceof Object)){
var e = e20322;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20322;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20333 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20334 = null;
var count__20335 = (0);
var i__20336 = (0);
while(true){
if((i__20336 < count__20335)){
var el = chunk__20334.cljs$core$IIndexed$_nth$arity$2(null,i__20336);
var handler_21451__$1 = ((function (seq__20333,chunk__20334,count__20335,i__20336,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20333,chunk__20334,count__20335,i__20336,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21451__$1);


var G__21452 = seq__20333;
var G__21453 = chunk__20334;
var G__21454 = count__20335;
var G__21455 = (i__20336 + (1));
seq__20333 = G__21452;
chunk__20334 = G__21453;
count__20335 = G__21454;
i__20336 = G__21455;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20333);
if(temp__5804__auto__){
var seq__20333__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20333__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20333__$1);
var G__21456 = cljs.core.chunk_rest(seq__20333__$1);
var G__21457 = c__5568__auto__;
var G__21458 = cljs.core.count(c__5568__auto__);
var G__21459 = (0);
seq__20333 = G__21456;
chunk__20334 = G__21457;
count__20335 = G__21458;
i__20336 = G__21459;
continue;
} else {
var el = cljs.core.first(seq__20333__$1);
var handler_21460__$1 = ((function (seq__20333,chunk__20334,count__20335,i__20336,el,seq__20333__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20333,chunk__20334,count__20335,i__20336,el,seq__20333__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21460__$1);


var G__21461 = cljs.core.next(seq__20333__$1);
var G__21462 = null;
var G__21463 = (0);
var G__21464 = (0);
seq__20333 = G__21461;
chunk__20334 = G__21462;
count__20335 = G__21463;
i__20336 = G__21464;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__20356 = arguments.length;
switch (G__20356) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20373 = cljs.core.seq(events);
var chunk__20374 = null;
var count__20375 = (0);
var i__20376 = (0);
while(true){
if((i__20376 < count__20375)){
var vec__20387 = chunk__20374.cljs$core$IIndexed$_nth$arity$2(null,i__20376);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20387,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20387,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21466 = seq__20373;
var G__21467 = chunk__20374;
var G__21468 = count__20375;
var G__21469 = (i__20376 + (1));
seq__20373 = G__21466;
chunk__20374 = G__21467;
count__20375 = G__21468;
i__20376 = G__21469;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20373);
if(temp__5804__auto__){
var seq__20373__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20373__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20373__$1);
var G__21470 = cljs.core.chunk_rest(seq__20373__$1);
var G__21471 = c__5568__auto__;
var G__21472 = cljs.core.count(c__5568__auto__);
var G__21473 = (0);
seq__20373 = G__21470;
chunk__20374 = G__21471;
count__20375 = G__21472;
i__20376 = G__21473;
continue;
} else {
var vec__20391 = cljs.core.first(seq__20373__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20391,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21474 = cljs.core.next(seq__20373__$1);
var G__21475 = null;
var G__21476 = (0);
var G__21477 = (0);
seq__20373 = G__21474;
chunk__20374 = G__21475;
count__20375 = G__21476;
i__20376 = G__21477;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20397 = cljs.core.seq(styles);
var chunk__20398 = null;
var count__20399 = (0);
var i__20400 = (0);
while(true){
if((i__20400 < count__20399)){
var vec__20415 = chunk__20398.cljs$core$IIndexed$_nth$arity$2(null,i__20400);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21478 = seq__20397;
var G__21479 = chunk__20398;
var G__21480 = count__20399;
var G__21481 = (i__20400 + (1));
seq__20397 = G__21478;
chunk__20398 = G__21479;
count__20399 = G__21480;
i__20400 = G__21481;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20397);
if(temp__5804__auto__){
var seq__20397__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20397__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20397__$1);
var G__21482 = cljs.core.chunk_rest(seq__20397__$1);
var G__21483 = c__5568__auto__;
var G__21484 = cljs.core.count(c__5568__auto__);
var G__21485 = (0);
seq__20397 = G__21482;
chunk__20398 = G__21483;
count__20399 = G__21484;
i__20400 = G__21485;
continue;
} else {
var vec__20423 = cljs.core.first(seq__20397__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20423,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20423,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21486 = cljs.core.next(seq__20397__$1);
var G__21487 = null;
var G__21488 = (0);
var G__21489 = (0);
seq__20397 = G__21486;
chunk__20398 = G__21487;
count__20399 = G__21488;
i__20400 = G__21489;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20431_21490 = key;
var G__20431_21491__$1 = (((G__20431_21490 instanceof cljs.core.Keyword))?G__20431_21490.fqn:null);
switch (G__20431_21491__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21493 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21493,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21493,"aria-");
}
})())){
el.setAttribute(ks_21493,value);
} else {
(el[ks_21493] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20473){
var map__20474 = p__20473;
var map__20474__$1 = cljs.core.__destructure_map(map__20474);
var props = map__20474__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20474__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20477 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20477,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20477,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20477,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20482 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20482,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20482;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20488 = arguments.length;
switch (G__20488) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20494){
var vec__20495 = p__20494;
var seq__20496 = cljs.core.seq(vec__20495);
var first__20497 = cljs.core.first(seq__20496);
var seq__20496__$1 = cljs.core.next(seq__20496);
var nn = first__20497;
var first__20497__$1 = cljs.core.first(seq__20496__$1);
var seq__20496__$2 = cljs.core.next(seq__20496__$1);
var np = first__20497__$1;
var nc = seq__20496__$2;
var node = vec__20495;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20502 = nn;
var G__20503 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20502,G__20503) : create_fn.call(null,G__20502,G__20503));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20506 = nn;
var G__20507 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20506,G__20507) : create_fn.call(null,G__20506,G__20507));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20513 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20513,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20513,(1),null);
var seq__20516_21495 = cljs.core.seq(node_children);
var chunk__20517_21496 = null;
var count__20518_21497 = (0);
var i__20519_21498 = (0);
while(true){
if((i__20519_21498 < count__20518_21497)){
var child_struct_21499 = chunk__20517_21496.cljs$core$IIndexed$_nth$arity$2(null,i__20519_21498);
var children_21500 = shadow.dom.dom_node(child_struct_21499);
if(cljs.core.seq_QMARK_(children_21500)){
var seq__20575_21501 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21500));
var chunk__20577_21502 = null;
var count__20578_21503 = (0);
var i__20579_21504 = (0);
while(true){
if((i__20579_21504 < count__20578_21503)){
var child_21505 = chunk__20577_21502.cljs$core$IIndexed$_nth$arity$2(null,i__20579_21504);
if(cljs.core.truth_(child_21505)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21505);


var G__21506 = seq__20575_21501;
var G__21507 = chunk__20577_21502;
var G__21508 = count__20578_21503;
var G__21509 = (i__20579_21504 + (1));
seq__20575_21501 = G__21506;
chunk__20577_21502 = G__21507;
count__20578_21503 = G__21508;
i__20579_21504 = G__21509;
continue;
} else {
var G__21510 = seq__20575_21501;
var G__21511 = chunk__20577_21502;
var G__21512 = count__20578_21503;
var G__21513 = (i__20579_21504 + (1));
seq__20575_21501 = G__21510;
chunk__20577_21502 = G__21511;
count__20578_21503 = G__21512;
i__20579_21504 = G__21513;
continue;
}
} else {
var temp__5804__auto___21514 = cljs.core.seq(seq__20575_21501);
if(temp__5804__auto___21514){
var seq__20575_21515__$1 = temp__5804__auto___21514;
if(cljs.core.chunked_seq_QMARK_(seq__20575_21515__$1)){
var c__5568__auto___21516 = cljs.core.chunk_first(seq__20575_21515__$1);
var G__21517 = cljs.core.chunk_rest(seq__20575_21515__$1);
var G__21518 = c__5568__auto___21516;
var G__21519 = cljs.core.count(c__5568__auto___21516);
var G__21520 = (0);
seq__20575_21501 = G__21517;
chunk__20577_21502 = G__21518;
count__20578_21503 = G__21519;
i__20579_21504 = G__21520;
continue;
} else {
var child_21521 = cljs.core.first(seq__20575_21515__$1);
if(cljs.core.truth_(child_21521)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21521);


var G__21522 = cljs.core.next(seq__20575_21515__$1);
var G__21523 = null;
var G__21524 = (0);
var G__21525 = (0);
seq__20575_21501 = G__21522;
chunk__20577_21502 = G__21523;
count__20578_21503 = G__21524;
i__20579_21504 = G__21525;
continue;
} else {
var G__21526 = cljs.core.next(seq__20575_21515__$1);
var G__21527 = null;
var G__21528 = (0);
var G__21529 = (0);
seq__20575_21501 = G__21526;
chunk__20577_21502 = G__21527;
count__20578_21503 = G__21528;
i__20579_21504 = G__21529;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21500);
}


var G__21530 = seq__20516_21495;
var G__21531 = chunk__20517_21496;
var G__21532 = count__20518_21497;
var G__21533 = (i__20519_21498 + (1));
seq__20516_21495 = G__21530;
chunk__20517_21496 = G__21531;
count__20518_21497 = G__21532;
i__20519_21498 = G__21533;
continue;
} else {
var temp__5804__auto___21534 = cljs.core.seq(seq__20516_21495);
if(temp__5804__auto___21534){
var seq__20516_21535__$1 = temp__5804__auto___21534;
if(cljs.core.chunked_seq_QMARK_(seq__20516_21535__$1)){
var c__5568__auto___21536 = cljs.core.chunk_first(seq__20516_21535__$1);
var G__21537 = cljs.core.chunk_rest(seq__20516_21535__$1);
var G__21538 = c__5568__auto___21536;
var G__21539 = cljs.core.count(c__5568__auto___21536);
var G__21540 = (0);
seq__20516_21495 = G__21537;
chunk__20517_21496 = G__21538;
count__20518_21497 = G__21539;
i__20519_21498 = G__21540;
continue;
} else {
var child_struct_21541 = cljs.core.first(seq__20516_21535__$1);
var children_21542 = shadow.dom.dom_node(child_struct_21541);
if(cljs.core.seq_QMARK_(children_21542)){
var seq__20609_21543 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21542));
var chunk__20611_21544 = null;
var count__20612_21545 = (0);
var i__20613_21546 = (0);
while(true){
if((i__20613_21546 < count__20612_21545)){
var child_21547 = chunk__20611_21544.cljs$core$IIndexed$_nth$arity$2(null,i__20613_21546);
if(cljs.core.truth_(child_21547)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21547);


var G__21548 = seq__20609_21543;
var G__21549 = chunk__20611_21544;
var G__21550 = count__20612_21545;
var G__21551 = (i__20613_21546 + (1));
seq__20609_21543 = G__21548;
chunk__20611_21544 = G__21549;
count__20612_21545 = G__21550;
i__20613_21546 = G__21551;
continue;
} else {
var G__21552 = seq__20609_21543;
var G__21553 = chunk__20611_21544;
var G__21554 = count__20612_21545;
var G__21555 = (i__20613_21546 + (1));
seq__20609_21543 = G__21552;
chunk__20611_21544 = G__21553;
count__20612_21545 = G__21554;
i__20613_21546 = G__21555;
continue;
}
} else {
var temp__5804__auto___21556__$1 = cljs.core.seq(seq__20609_21543);
if(temp__5804__auto___21556__$1){
var seq__20609_21557__$1 = temp__5804__auto___21556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20609_21557__$1)){
var c__5568__auto___21558 = cljs.core.chunk_first(seq__20609_21557__$1);
var G__21559 = cljs.core.chunk_rest(seq__20609_21557__$1);
var G__21560 = c__5568__auto___21558;
var G__21561 = cljs.core.count(c__5568__auto___21558);
var G__21562 = (0);
seq__20609_21543 = G__21559;
chunk__20611_21544 = G__21560;
count__20612_21545 = G__21561;
i__20613_21546 = G__21562;
continue;
} else {
var child_21563 = cljs.core.first(seq__20609_21557__$1);
if(cljs.core.truth_(child_21563)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21563);


var G__21564 = cljs.core.next(seq__20609_21557__$1);
var G__21565 = null;
var G__21566 = (0);
var G__21567 = (0);
seq__20609_21543 = G__21564;
chunk__20611_21544 = G__21565;
count__20612_21545 = G__21566;
i__20613_21546 = G__21567;
continue;
} else {
var G__21568 = cljs.core.next(seq__20609_21557__$1);
var G__21569 = null;
var G__21570 = (0);
var G__21571 = (0);
seq__20609_21543 = G__21568;
chunk__20611_21544 = G__21569;
count__20612_21545 = G__21570;
i__20613_21546 = G__21571;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21542);
}


var G__21572 = cljs.core.next(seq__20516_21535__$1);
var G__21573 = null;
var G__21574 = (0);
var G__21575 = (0);
seq__20516_21495 = G__21572;
chunk__20517_21496 = G__21573;
count__20518_21497 = G__21574;
i__20519_21498 = G__21575;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20736 = cljs.core.seq(node);
var chunk__20737 = null;
var count__20738 = (0);
var i__20739 = (0);
while(true){
if((i__20739 < count__20738)){
var n = chunk__20737.cljs$core$IIndexed$_nth$arity$2(null,i__20739);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21580 = seq__20736;
var G__21581 = chunk__20737;
var G__21582 = count__20738;
var G__21583 = (i__20739 + (1));
seq__20736 = G__21580;
chunk__20737 = G__21581;
count__20738 = G__21582;
i__20739 = G__21583;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20736);
if(temp__5804__auto__){
var seq__20736__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20736__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20736__$1);
var G__21584 = cljs.core.chunk_rest(seq__20736__$1);
var G__21585 = c__5568__auto__;
var G__21586 = cljs.core.count(c__5568__auto__);
var G__21587 = (0);
seq__20736 = G__21584;
chunk__20737 = G__21585;
count__20738 = G__21586;
i__20739 = G__21587;
continue;
} else {
var n = cljs.core.first(seq__20736__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21588 = cljs.core.next(seq__20736__$1);
var G__21589 = null;
var G__21590 = (0);
var G__21591 = (0);
seq__20736 = G__21588;
chunk__20737 = G__21589;
count__20738 = G__21590;
i__20739 = G__21591;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20771 = arguments.length;
switch (G__20771) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20783 = arguments.length;
switch (G__20783) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20806 = arguments.length;
switch (G__20806) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21599 = arguments.length;
var i__5770__auto___21600 = (0);
while(true){
if((i__5770__auto___21600 < len__5769__auto___21599)){
args__5775__auto__.push((arguments[i__5770__auto___21600]));

var G__21601 = (i__5770__auto___21600 + (1));
i__5770__auto___21600 = G__21601;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20873_21602 = cljs.core.seq(nodes);
var chunk__20874_21603 = null;
var count__20875_21604 = (0);
var i__20876_21605 = (0);
while(true){
if((i__20876_21605 < count__20875_21604)){
var node_21607 = chunk__20874_21603.cljs$core$IIndexed$_nth$arity$2(null,i__20876_21605);
fragment.appendChild(shadow.dom._to_dom(node_21607));


var G__21608 = seq__20873_21602;
var G__21609 = chunk__20874_21603;
var G__21610 = count__20875_21604;
var G__21611 = (i__20876_21605 + (1));
seq__20873_21602 = G__21608;
chunk__20874_21603 = G__21609;
count__20875_21604 = G__21610;
i__20876_21605 = G__21611;
continue;
} else {
var temp__5804__auto___21612 = cljs.core.seq(seq__20873_21602);
if(temp__5804__auto___21612){
var seq__20873_21613__$1 = temp__5804__auto___21612;
if(cljs.core.chunked_seq_QMARK_(seq__20873_21613__$1)){
var c__5568__auto___21614 = cljs.core.chunk_first(seq__20873_21613__$1);
var G__21615 = cljs.core.chunk_rest(seq__20873_21613__$1);
var G__21616 = c__5568__auto___21614;
var G__21617 = cljs.core.count(c__5568__auto___21614);
var G__21618 = (0);
seq__20873_21602 = G__21615;
chunk__20874_21603 = G__21616;
count__20875_21604 = G__21617;
i__20876_21605 = G__21618;
continue;
} else {
var node_21619 = cljs.core.first(seq__20873_21613__$1);
fragment.appendChild(shadow.dom._to_dom(node_21619));


var G__21620 = cljs.core.next(seq__20873_21613__$1);
var G__21621 = null;
var G__21622 = (0);
var G__21623 = (0);
seq__20873_21602 = G__21620;
chunk__20874_21603 = G__21621;
count__20875_21604 = G__21622;
i__20876_21605 = G__21623;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20866){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20866));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20946_21624 = cljs.core.seq(scripts);
var chunk__20947_21625 = null;
var count__20948_21626 = (0);
var i__20949_21627 = (0);
while(true){
if((i__20949_21627 < count__20948_21626)){
var vec__20977_21629 = chunk__20947_21625.cljs$core$IIndexed$_nth$arity$2(null,i__20949_21627);
var script_tag_21630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20977_21629,(0),null);
var script_body_21631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20977_21629,(1),null);
eval(script_body_21631);


var G__21632 = seq__20946_21624;
var G__21633 = chunk__20947_21625;
var G__21634 = count__20948_21626;
var G__21635 = (i__20949_21627 + (1));
seq__20946_21624 = G__21632;
chunk__20947_21625 = G__21633;
count__20948_21626 = G__21634;
i__20949_21627 = G__21635;
continue;
} else {
var temp__5804__auto___21636 = cljs.core.seq(seq__20946_21624);
if(temp__5804__auto___21636){
var seq__20946_21637__$1 = temp__5804__auto___21636;
if(cljs.core.chunked_seq_QMARK_(seq__20946_21637__$1)){
var c__5568__auto___21638 = cljs.core.chunk_first(seq__20946_21637__$1);
var G__21639 = cljs.core.chunk_rest(seq__20946_21637__$1);
var G__21640 = c__5568__auto___21638;
var G__21641 = cljs.core.count(c__5568__auto___21638);
var G__21642 = (0);
seq__20946_21624 = G__21639;
chunk__20947_21625 = G__21640;
count__20948_21626 = G__21641;
i__20949_21627 = G__21642;
continue;
} else {
var vec__20980_21643 = cljs.core.first(seq__20946_21637__$1);
var script_tag_21644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20980_21643,(0),null);
var script_body_21645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20980_21643,(1),null);
eval(script_body_21645);


var G__21647 = cljs.core.next(seq__20946_21637__$1);
var G__21648 = null;
var G__21649 = (0);
var G__21650 = (0);
seq__20946_21624 = G__21647;
chunk__20947_21625 = G__21648;
count__20948_21626 = G__21649;
i__20949_21627 = G__21650;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20983){
var vec__20984 = p__20983;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20984,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20984,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20990 = arguments.length;
switch (G__20990) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__21032 = cljs.core.seq(style_keys);
var chunk__21033 = null;
var count__21034 = (0);
var i__21035 = (0);
while(true){
if((i__21035 < count__21034)){
var it = chunk__21033.cljs$core$IIndexed$_nth$arity$2(null,i__21035);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21658 = seq__21032;
var G__21659 = chunk__21033;
var G__21660 = count__21034;
var G__21661 = (i__21035 + (1));
seq__21032 = G__21658;
chunk__21033 = G__21659;
count__21034 = G__21660;
i__21035 = G__21661;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21032);
if(temp__5804__auto__){
var seq__21032__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21032__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21032__$1);
var G__21663 = cljs.core.chunk_rest(seq__21032__$1);
var G__21664 = c__5568__auto__;
var G__21665 = cljs.core.count(c__5568__auto__);
var G__21666 = (0);
seq__21032 = G__21663;
chunk__21033 = G__21664;
count__21034 = G__21665;
i__21035 = G__21666;
continue;
} else {
var it = cljs.core.first(seq__21032__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21667 = cljs.core.next(seq__21032__$1);
var G__21668 = null;
var G__21669 = (0);
var G__21670 = (0);
seq__21032 = G__21667;
chunk__21033 = G__21668;
count__21034 = G__21669;
i__21035 = G__21670;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21047,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21070 = k21047;
var G__21070__$1 = (((G__21070 instanceof cljs.core.Keyword))?G__21070.fqn:null);
switch (G__21070__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21047,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21078){
var vec__21080 = p__21078;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21080,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21080,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21046){
var self__ = this;
var G__21046__$1 = this;
return (new cljs.core.RecordIter((0),G__21046__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21048,other21049){
var self__ = this;
var this21048__$1 = this;
return (((!((other21049 == null)))) && ((((this21048__$1.constructor === other21049.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21048__$1.x,other21049.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21048__$1.y,other21049.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21048__$1.__extmap,other21049.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21047){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21109 = k21047;
var G__21109__$1 = (((G__21109 instanceof cljs.core.Keyword))?G__21109.fqn:null);
switch (G__21109__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21047);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21046){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21115 = cljs.core.keyword_identical_QMARK_;
var expr__21116 = k__5352__auto__;
if(cljs.core.truth_((pred__21115.cljs$core$IFn$_invoke$arity$2 ? pred__21115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__21116) : pred__21115.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__21116)))){
return (new shadow.dom.Coordinate(G__21046,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21115.cljs$core$IFn$_invoke$arity$2 ? pred__21115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__21116) : pred__21115.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__21116)))){
return (new shadow.dom.Coordinate(self__.x,G__21046,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21046),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21046){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__21046,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__21055){
var extmap__5385__auto__ = (function (){var G__21136 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21055,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__21055)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21136);
} else {
return G__21136;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__21055),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__21055),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21157,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21166 = k21157;
var G__21166__$1 = (((G__21166 instanceof cljs.core.Keyword))?G__21166.fqn:null);
switch (G__21166__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21157,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21172){
var vec__21174 = p__21172;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21174,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21174,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21156){
var self__ = this;
var G__21156__$1 = this;
return (new cljs.core.RecordIter((0),G__21156__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21158,other21159){
var self__ = this;
var this21158__$1 = this;
return (((!((other21159 == null)))) && ((((this21158__$1.constructor === other21159.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21158__$1.w,other21159.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21158__$1.h,other21159.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21158__$1.__extmap,other21159.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21157){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21194 = k21157;
var G__21194__$1 = (((G__21194 instanceof cljs.core.Keyword))?G__21194.fqn:null);
switch (G__21194__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21157);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21156){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21197 = cljs.core.keyword_identical_QMARK_;
var expr__21198 = k__5352__auto__;
if(cljs.core.truth_((pred__21197.cljs$core$IFn$_invoke$arity$2 ? pred__21197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__21198) : pred__21197.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__21198)))){
return (new shadow.dom.Size(G__21156,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21197.cljs$core$IFn$_invoke$arity$2 ? pred__21197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__21198) : pred__21197.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__21198)))){
return (new shadow.dom.Size(self__.w,G__21156,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21156),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21156){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__21156,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__21161){
var extmap__5385__auto__ = (function (){var G__21206 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21161,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__21161)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21206);
} else {
return G__21206;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__21161),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__21161),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21743 = (i + (1));
var G__21744 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21743;
ret = G__21744;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21223){
var vec__21224 = p__21223;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21224,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__21232 = arguments.length;
switch (G__21232) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21752 = ps;
var G__21753 = (i + (1));
el__$1 = G__21752;
i = G__21753;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__21248 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21248,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21248,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21248,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__21252_21760 = cljs.core.seq(props);
var chunk__21253_21761 = null;
var count__21254_21762 = (0);
var i__21255_21763 = (0);
while(true){
if((i__21255_21763 < count__21254_21762)){
var vec__21262_21769 = chunk__21253_21761.cljs$core$IIndexed$_nth$arity$2(null,i__21255_21763);
var k_21770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21262_21769,(0),null);
var v_21771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21262_21769,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21770);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21770),v_21771);


var G__21775 = seq__21252_21760;
var G__21777 = chunk__21253_21761;
var G__21778 = count__21254_21762;
var G__21779 = (i__21255_21763 + (1));
seq__21252_21760 = G__21775;
chunk__21253_21761 = G__21777;
count__21254_21762 = G__21778;
i__21255_21763 = G__21779;
continue;
} else {
var temp__5804__auto___21783 = cljs.core.seq(seq__21252_21760);
if(temp__5804__auto___21783){
var seq__21252_21784__$1 = temp__5804__auto___21783;
if(cljs.core.chunked_seq_QMARK_(seq__21252_21784__$1)){
var c__5568__auto___21785 = cljs.core.chunk_first(seq__21252_21784__$1);
var G__21786 = cljs.core.chunk_rest(seq__21252_21784__$1);
var G__21787 = c__5568__auto___21785;
var G__21788 = cljs.core.count(c__5568__auto___21785);
var G__21789 = (0);
seq__21252_21760 = G__21786;
chunk__21253_21761 = G__21787;
count__21254_21762 = G__21788;
i__21255_21763 = G__21789;
continue;
} else {
var vec__21269_21790 = cljs.core.first(seq__21252_21784__$1);
var k_21791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21269_21790,(0),null);
var v_21792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21269_21790,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21791);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21791),v_21792);


var G__21795 = cljs.core.next(seq__21252_21784__$1);
var G__21796 = null;
var G__21797 = (0);
var G__21798 = (0);
seq__21252_21760 = G__21795;
chunk__21253_21761 = G__21796;
count__21254_21762 = G__21797;
i__21255_21763 = G__21798;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__21284 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21284,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21284,(1),null);
var seq__21289_21800 = cljs.core.seq(node_children);
var chunk__21292_21801 = null;
var count__21293_21802 = (0);
var i__21294_21803 = (0);
while(true){
if((i__21294_21803 < count__21293_21802)){
var child_struct_21805 = chunk__21292_21801.cljs$core$IIndexed$_nth$arity$2(null,i__21294_21803);
if((!((child_struct_21805 == null)))){
if(typeof child_struct_21805 === 'string'){
var text_21806 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21806),child_struct_21805].join(''));
} else {
var children_21807 = shadow.dom.svg_node(child_struct_21805);
if(cljs.core.seq_QMARK_(children_21807)){
var seq__21331_21808 = cljs.core.seq(children_21807);
var chunk__21333_21809 = null;
var count__21334_21810 = (0);
var i__21335_21811 = (0);
while(true){
if((i__21335_21811 < count__21334_21810)){
var child_21812 = chunk__21333_21809.cljs$core$IIndexed$_nth$arity$2(null,i__21335_21811);
if(cljs.core.truth_(child_21812)){
node.appendChild(child_21812);


var G__21813 = seq__21331_21808;
var G__21814 = chunk__21333_21809;
var G__21815 = count__21334_21810;
var G__21816 = (i__21335_21811 + (1));
seq__21331_21808 = G__21813;
chunk__21333_21809 = G__21814;
count__21334_21810 = G__21815;
i__21335_21811 = G__21816;
continue;
} else {
var G__21817 = seq__21331_21808;
var G__21818 = chunk__21333_21809;
var G__21819 = count__21334_21810;
var G__21820 = (i__21335_21811 + (1));
seq__21331_21808 = G__21817;
chunk__21333_21809 = G__21818;
count__21334_21810 = G__21819;
i__21335_21811 = G__21820;
continue;
}
} else {
var temp__5804__auto___21821 = cljs.core.seq(seq__21331_21808);
if(temp__5804__auto___21821){
var seq__21331_21822__$1 = temp__5804__auto___21821;
if(cljs.core.chunked_seq_QMARK_(seq__21331_21822__$1)){
var c__5568__auto___21823 = cljs.core.chunk_first(seq__21331_21822__$1);
var G__21825 = cljs.core.chunk_rest(seq__21331_21822__$1);
var G__21826 = c__5568__auto___21823;
var G__21827 = cljs.core.count(c__5568__auto___21823);
var G__21828 = (0);
seq__21331_21808 = G__21825;
chunk__21333_21809 = G__21826;
count__21334_21810 = G__21827;
i__21335_21811 = G__21828;
continue;
} else {
var child_21830 = cljs.core.first(seq__21331_21822__$1);
if(cljs.core.truth_(child_21830)){
node.appendChild(child_21830);


var G__21831 = cljs.core.next(seq__21331_21822__$1);
var G__21832 = null;
var G__21833 = (0);
var G__21834 = (0);
seq__21331_21808 = G__21831;
chunk__21333_21809 = G__21832;
count__21334_21810 = G__21833;
i__21335_21811 = G__21834;
continue;
} else {
var G__21835 = cljs.core.next(seq__21331_21822__$1);
var G__21836 = null;
var G__21837 = (0);
var G__21838 = (0);
seq__21331_21808 = G__21835;
chunk__21333_21809 = G__21836;
count__21334_21810 = G__21837;
i__21335_21811 = G__21838;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21807);
}
}


var G__21840 = seq__21289_21800;
var G__21841 = chunk__21292_21801;
var G__21842 = count__21293_21802;
var G__21843 = (i__21294_21803 + (1));
seq__21289_21800 = G__21840;
chunk__21292_21801 = G__21841;
count__21293_21802 = G__21842;
i__21294_21803 = G__21843;
continue;
} else {
var G__21845 = seq__21289_21800;
var G__21846 = chunk__21292_21801;
var G__21847 = count__21293_21802;
var G__21848 = (i__21294_21803 + (1));
seq__21289_21800 = G__21845;
chunk__21292_21801 = G__21846;
count__21293_21802 = G__21847;
i__21294_21803 = G__21848;
continue;
}
} else {
var temp__5804__auto___21849 = cljs.core.seq(seq__21289_21800);
if(temp__5804__auto___21849){
var seq__21289_21850__$1 = temp__5804__auto___21849;
if(cljs.core.chunked_seq_QMARK_(seq__21289_21850__$1)){
var c__5568__auto___21851 = cljs.core.chunk_first(seq__21289_21850__$1);
var G__21852 = cljs.core.chunk_rest(seq__21289_21850__$1);
var G__21853 = c__5568__auto___21851;
var G__21854 = cljs.core.count(c__5568__auto___21851);
var G__21855 = (0);
seq__21289_21800 = G__21852;
chunk__21292_21801 = G__21853;
count__21293_21802 = G__21854;
i__21294_21803 = G__21855;
continue;
} else {
var child_struct_21856 = cljs.core.first(seq__21289_21850__$1);
if((!((child_struct_21856 == null)))){
if(typeof child_struct_21856 === 'string'){
var text_21857 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21857),child_struct_21856].join(''));
} else {
var children_21858 = shadow.dom.svg_node(child_struct_21856);
if(cljs.core.seq_QMARK_(children_21858)){
var seq__21345_21859 = cljs.core.seq(children_21858);
var chunk__21347_21860 = null;
var count__21348_21861 = (0);
var i__21349_21862 = (0);
while(true){
if((i__21349_21862 < count__21348_21861)){
var child_21864 = chunk__21347_21860.cljs$core$IIndexed$_nth$arity$2(null,i__21349_21862);
if(cljs.core.truth_(child_21864)){
node.appendChild(child_21864);


var G__21865 = seq__21345_21859;
var G__21866 = chunk__21347_21860;
var G__21867 = count__21348_21861;
var G__21868 = (i__21349_21862 + (1));
seq__21345_21859 = G__21865;
chunk__21347_21860 = G__21866;
count__21348_21861 = G__21867;
i__21349_21862 = G__21868;
continue;
} else {
var G__21869 = seq__21345_21859;
var G__21870 = chunk__21347_21860;
var G__21871 = count__21348_21861;
var G__21872 = (i__21349_21862 + (1));
seq__21345_21859 = G__21869;
chunk__21347_21860 = G__21870;
count__21348_21861 = G__21871;
i__21349_21862 = G__21872;
continue;
}
} else {
var temp__5804__auto___21874__$1 = cljs.core.seq(seq__21345_21859);
if(temp__5804__auto___21874__$1){
var seq__21345_21875__$1 = temp__5804__auto___21874__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21345_21875__$1)){
var c__5568__auto___21876 = cljs.core.chunk_first(seq__21345_21875__$1);
var G__21877 = cljs.core.chunk_rest(seq__21345_21875__$1);
var G__21878 = c__5568__auto___21876;
var G__21879 = cljs.core.count(c__5568__auto___21876);
var G__21880 = (0);
seq__21345_21859 = G__21877;
chunk__21347_21860 = G__21878;
count__21348_21861 = G__21879;
i__21349_21862 = G__21880;
continue;
} else {
var child_21881 = cljs.core.first(seq__21345_21875__$1);
if(cljs.core.truth_(child_21881)){
node.appendChild(child_21881);


var G__21882 = cljs.core.next(seq__21345_21875__$1);
var G__21883 = null;
var G__21884 = (0);
var G__21885 = (0);
seq__21345_21859 = G__21882;
chunk__21347_21860 = G__21883;
count__21348_21861 = G__21884;
i__21349_21862 = G__21885;
continue;
} else {
var G__21886 = cljs.core.next(seq__21345_21875__$1);
var G__21887 = null;
var G__21888 = (0);
var G__21889 = (0);
seq__21345_21859 = G__21886;
chunk__21347_21860 = G__21887;
count__21348_21861 = G__21888;
i__21349_21862 = G__21889;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21858);
}
}


var G__21892 = cljs.core.next(seq__21289_21850__$1);
var G__21893 = null;
var G__21894 = (0);
var G__21895 = (0);
seq__21289_21800 = G__21892;
chunk__21292_21801 = G__21893;
count__21293_21802 = G__21894;
i__21294_21803 = G__21895;
continue;
} else {
var G__21896 = cljs.core.next(seq__21289_21850__$1);
var G__21897 = null;
var G__21898 = (0);
var G__21899 = (0);
seq__21289_21800 = G__21896;
chunk__21292_21801 = G__21897;
count__21293_21802 = G__21898;
i__21294_21803 = G__21899;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21905 = arguments.length;
var i__5770__auto___21906 = (0);
while(true){
if((i__5770__auto___21906 < len__5769__auto___21905)){
args__5775__auto__.push((arguments[i__5770__auto___21906]));

var G__21909 = (i__5770__auto___21906 + (1));
i__5770__auto___21906 = G__21909;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21355){
var G__21356 = cljs.core.first(seq21355);
var seq21355__$1 = cljs.core.next(seq21355);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21356,seq21355__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__21366 = arguments.length;
switch (G__21366) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17925__auto___21927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_21392){
var state_val_21393 = (state_21392[(1)]);
if((state_val_21393 === (1))){
var state_21392__$1 = state_21392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21392__$1,(2),once_or_cleanup);
} else {
if((state_val_21393 === (2))){
var inst_21389 = (state_21392[(2)]);
var inst_21390 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21392__$1 = (function (){var statearr_21401 = state_21392;
(statearr_21401[(7)] = inst_21389);

return statearr_21401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21392__$1,inst_21390);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17406__auto__ = null;
var shadow$dom$state_machine__17406__auto____0 = (function (){
var statearr_21409 = [null,null,null,null,null,null,null,null];
(statearr_21409[(0)] = shadow$dom$state_machine__17406__auto__);

(statearr_21409[(1)] = (1));

return statearr_21409;
});
var shadow$dom$state_machine__17406__auto____1 = (function (state_21392){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_21392);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e21411){var ex__17409__auto__ = e21411;
var statearr_21412_21929 = state_21392;
(statearr_21412_21929[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_21392[(4)]))){
var statearr_21413_21932 = state_21392;
(statearr_21413_21932[(1)] = cljs.core.first((state_21392[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21935 = state_21392;
state_21392 = G__21935;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
shadow$dom$state_machine__17406__auto__ = function(state_21392){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17406__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17406__auto____1.call(this,state_21392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17406__auto____0;
shadow$dom$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17406__auto____1;
return shadow$dom$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_21419 = f__17926__auto__();
(statearr_21419[(6)] = c__17925__auto___21927);

return statearr_21419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
