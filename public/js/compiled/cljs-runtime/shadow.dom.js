goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21466 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_21466(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21471 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_21471(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__20189 = coll;
var G__20190 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__20189,G__20190) : shadow.dom.lazy_native_coll_seq.call(null,G__20189,G__20190));
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
var G__20224 = arguments.length;
switch (G__20224) {
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
var G__20227 = arguments.length;
switch (G__20227) {
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
var G__20241 = arguments.length;
switch (G__20241) {
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
var G__20252 = arguments.length;
switch (G__20252) {
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
var G__20267 = arguments.length;
switch (G__20267) {
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
var G__20290 = arguments.length;
switch (G__20290) {
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
}catch (e20304){if((e20304 instanceof Object)){
var e = e20304;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20304;

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
var seq__20311 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20312 = null;
var count__20313 = (0);
var i__20314 = (0);
while(true){
if((i__20314 < count__20313)){
var el = chunk__20312.cljs$core$IIndexed$_nth$arity$2(null,i__20314);
var handler_21502__$1 = ((function (seq__20311,chunk__20312,count__20313,i__20314,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20311,chunk__20312,count__20313,i__20314,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21502__$1);


var G__21504 = seq__20311;
var G__21505 = chunk__20312;
var G__21506 = count__20313;
var G__21507 = (i__20314 + (1));
seq__20311 = G__21504;
chunk__20312 = G__21505;
count__20313 = G__21506;
i__20314 = G__21507;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20311);
if(temp__5804__auto__){
var seq__20311__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20311__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20311__$1);
var G__21508 = cljs.core.chunk_rest(seq__20311__$1);
var G__21509 = c__5568__auto__;
var G__21510 = cljs.core.count(c__5568__auto__);
var G__21511 = (0);
seq__20311 = G__21508;
chunk__20312 = G__21509;
count__20313 = G__21510;
i__20314 = G__21511;
continue;
} else {
var el = cljs.core.first(seq__20311__$1);
var handler_21512__$1 = ((function (seq__20311,chunk__20312,count__20313,i__20314,el,seq__20311__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20311,chunk__20312,count__20313,i__20314,el,seq__20311__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21512__$1);


var G__21513 = cljs.core.next(seq__20311__$1);
var G__21514 = null;
var G__21515 = (0);
var G__21516 = (0);
seq__20311 = G__21513;
chunk__20312 = G__21514;
count__20313 = G__21515;
i__20314 = G__21516;
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
var G__20335 = arguments.length;
switch (G__20335) {
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
var seq__20347 = cljs.core.seq(events);
var chunk__20348 = null;
var count__20349 = (0);
var i__20350 = (0);
while(true){
if((i__20350 < count__20349)){
var vec__20365 = chunk__20348.cljs$core$IIndexed$_nth$arity$2(null,i__20350);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21528 = seq__20347;
var G__21529 = chunk__20348;
var G__21530 = count__20349;
var G__21531 = (i__20350 + (1));
seq__20347 = G__21528;
chunk__20348 = G__21529;
count__20349 = G__21530;
i__20350 = G__21531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20347);
if(temp__5804__auto__){
var seq__20347__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20347__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20347__$1);
var G__21533 = cljs.core.chunk_rest(seq__20347__$1);
var G__21534 = c__5568__auto__;
var G__21535 = cljs.core.count(c__5568__auto__);
var G__21536 = (0);
seq__20347 = G__21533;
chunk__20348 = G__21534;
count__20349 = G__21535;
i__20350 = G__21536;
continue;
} else {
var vec__20372 = cljs.core.first(seq__20347__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20372,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21540 = cljs.core.next(seq__20347__$1);
var G__21541 = null;
var G__21542 = (0);
var G__21543 = (0);
seq__20347 = G__21540;
chunk__20348 = G__21541;
count__20349 = G__21542;
i__20350 = G__21543;
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
var seq__20381 = cljs.core.seq(styles);
var chunk__20382 = null;
var count__20383 = (0);
var i__20384 = (0);
while(true){
if((i__20384 < count__20383)){
var vec__20402 = chunk__20382.cljs$core$IIndexed$_nth$arity$2(null,i__20384);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20402,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21550 = seq__20381;
var G__21551 = chunk__20382;
var G__21552 = count__20383;
var G__21553 = (i__20384 + (1));
seq__20381 = G__21550;
chunk__20382 = G__21551;
count__20383 = G__21552;
i__20384 = G__21553;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20381);
if(temp__5804__auto__){
var seq__20381__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20381__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20381__$1);
var G__21555 = cljs.core.chunk_rest(seq__20381__$1);
var G__21556 = c__5568__auto__;
var G__21557 = cljs.core.count(c__5568__auto__);
var G__21558 = (0);
seq__20381 = G__21555;
chunk__20382 = G__21556;
count__20383 = G__21557;
i__20384 = G__21558;
continue;
} else {
var vec__20407 = cljs.core.first(seq__20381__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20407,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21560 = cljs.core.next(seq__20381__$1);
var G__21561 = null;
var G__21562 = (0);
var G__21563 = (0);
seq__20381 = G__21560;
chunk__20382 = G__21561;
count__20383 = G__21562;
i__20384 = G__21563;
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
var G__20412_21567 = key;
var G__20412_21568__$1 = (((G__20412_21567 instanceof cljs.core.Keyword))?G__20412_21567.fqn:null);
switch (G__20412_21568__$1) {
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
var ks_21575 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21575,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21575,"aria-");
}
})())){
el.setAttribute(ks_21575,value);
} else {
(el[ks_21575] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20443){
var map__20444 = p__20443;
var map__20444__$1 = cljs.core.__destructure_map(map__20444);
var props = map__20444__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20445 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20451 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20451,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20451;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20458 = arguments.length;
switch (G__20458) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20478){
var vec__20480 = p__20478;
var seq__20481 = cljs.core.seq(vec__20480);
var first__20482 = cljs.core.first(seq__20481);
var seq__20481__$1 = cljs.core.next(seq__20481);
var nn = first__20482;
var first__20482__$1 = cljs.core.first(seq__20481__$1);
var seq__20481__$2 = cljs.core.next(seq__20481__$1);
var np = first__20482__$1;
var nc = seq__20481__$2;
var node = vec__20480;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20487 = nn;
var G__20488 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20487,G__20488) : create_fn.call(null,G__20487,G__20488));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20492 = nn;
var G__20493 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20492,G__20493) : create_fn.call(null,G__20492,G__20493));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20508 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20508,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20508,(1),null);
var seq__20513_21598 = cljs.core.seq(node_children);
var chunk__20514_21599 = null;
var count__20515_21600 = (0);
var i__20516_21601 = (0);
while(true){
if((i__20516_21601 < count__20515_21600)){
var child_struct_21604 = chunk__20514_21599.cljs$core$IIndexed$_nth$arity$2(null,i__20516_21601);
var children_21605 = shadow.dom.dom_node(child_struct_21604);
if(cljs.core.seq_QMARK_(children_21605)){
var seq__20593_21608 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21605));
var chunk__20595_21609 = null;
var count__20596_21610 = (0);
var i__20597_21611 = (0);
while(true){
if((i__20597_21611 < count__20596_21610)){
var child_21612 = chunk__20595_21609.cljs$core$IIndexed$_nth$arity$2(null,i__20597_21611);
if(cljs.core.truth_(child_21612)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21612);


var G__21613 = seq__20593_21608;
var G__21614 = chunk__20595_21609;
var G__21615 = count__20596_21610;
var G__21616 = (i__20597_21611 + (1));
seq__20593_21608 = G__21613;
chunk__20595_21609 = G__21614;
count__20596_21610 = G__21615;
i__20597_21611 = G__21616;
continue;
} else {
var G__21617 = seq__20593_21608;
var G__21618 = chunk__20595_21609;
var G__21619 = count__20596_21610;
var G__21620 = (i__20597_21611 + (1));
seq__20593_21608 = G__21617;
chunk__20595_21609 = G__21618;
count__20596_21610 = G__21619;
i__20597_21611 = G__21620;
continue;
}
} else {
var temp__5804__auto___21621 = cljs.core.seq(seq__20593_21608);
if(temp__5804__auto___21621){
var seq__20593_21622__$1 = temp__5804__auto___21621;
if(cljs.core.chunked_seq_QMARK_(seq__20593_21622__$1)){
var c__5568__auto___21623 = cljs.core.chunk_first(seq__20593_21622__$1);
var G__21624 = cljs.core.chunk_rest(seq__20593_21622__$1);
var G__21625 = c__5568__auto___21623;
var G__21626 = cljs.core.count(c__5568__auto___21623);
var G__21627 = (0);
seq__20593_21608 = G__21624;
chunk__20595_21609 = G__21625;
count__20596_21610 = G__21626;
i__20597_21611 = G__21627;
continue;
} else {
var child_21632 = cljs.core.first(seq__20593_21622__$1);
if(cljs.core.truth_(child_21632)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21632);


var G__21634 = cljs.core.next(seq__20593_21622__$1);
var G__21635 = null;
var G__21636 = (0);
var G__21637 = (0);
seq__20593_21608 = G__21634;
chunk__20595_21609 = G__21635;
count__20596_21610 = G__21636;
i__20597_21611 = G__21637;
continue;
} else {
var G__21638 = cljs.core.next(seq__20593_21622__$1);
var G__21639 = null;
var G__21640 = (0);
var G__21641 = (0);
seq__20593_21608 = G__21638;
chunk__20595_21609 = G__21639;
count__20596_21610 = G__21640;
i__20597_21611 = G__21641;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21605);
}


var G__21644 = seq__20513_21598;
var G__21645 = chunk__20514_21599;
var G__21646 = count__20515_21600;
var G__21647 = (i__20516_21601 + (1));
seq__20513_21598 = G__21644;
chunk__20514_21599 = G__21645;
count__20515_21600 = G__21646;
i__20516_21601 = G__21647;
continue;
} else {
var temp__5804__auto___21649 = cljs.core.seq(seq__20513_21598);
if(temp__5804__auto___21649){
var seq__20513_21651__$1 = temp__5804__auto___21649;
if(cljs.core.chunked_seq_QMARK_(seq__20513_21651__$1)){
var c__5568__auto___21653 = cljs.core.chunk_first(seq__20513_21651__$1);
var G__21654 = cljs.core.chunk_rest(seq__20513_21651__$1);
var G__21655 = c__5568__auto___21653;
var G__21656 = cljs.core.count(c__5568__auto___21653);
var G__21657 = (0);
seq__20513_21598 = G__21654;
chunk__20514_21599 = G__21655;
count__20515_21600 = G__21656;
i__20516_21601 = G__21657;
continue;
} else {
var child_struct_21658 = cljs.core.first(seq__20513_21651__$1);
var children_21659 = shadow.dom.dom_node(child_struct_21658);
if(cljs.core.seq_QMARK_(children_21659)){
var seq__20657_21660 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21659));
var chunk__20659_21661 = null;
var count__20660_21662 = (0);
var i__20661_21663 = (0);
while(true){
if((i__20661_21663 < count__20660_21662)){
var child_21664 = chunk__20659_21661.cljs$core$IIndexed$_nth$arity$2(null,i__20661_21663);
if(cljs.core.truth_(child_21664)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21664);


var G__21665 = seq__20657_21660;
var G__21666 = chunk__20659_21661;
var G__21667 = count__20660_21662;
var G__21668 = (i__20661_21663 + (1));
seq__20657_21660 = G__21665;
chunk__20659_21661 = G__21666;
count__20660_21662 = G__21667;
i__20661_21663 = G__21668;
continue;
} else {
var G__21669 = seq__20657_21660;
var G__21670 = chunk__20659_21661;
var G__21671 = count__20660_21662;
var G__21672 = (i__20661_21663 + (1));
seq__20657_21660 = G__21669;
chunk__20659_21661 = G__21670;
count__20660_21662 = G__21671;
i__20661_21663 = G__21672;
continue;
}
} else {
var temp__5804__auto___21673__$1 = cljs.core.seq(seq__20657_21660);
if(temp__5804__auto___21673__$1){
var seq__20657_21674__$1 = temp__5804__auto___21673__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20657_21674__$1)){
var c__5568__auto___21675 = cljs.core.chunk_first(seq__20657_21674__$1);
var G__21676 = cljs.core.chunk_rest(seq__20657_21674__$1);
var G__21677 = c__5568__auto___21675;
var G__21678 = cljs.core.count(c__5568__auto___21675);
var G__21679 = (0);
seq__20657_21660 = G__21676;
chunk__20659_21661 = G__21677;
count__20660_21662 = G__21678;
i__20661_21663 = G__21679;
continue;
} else {
var child_21680 = cljs.core.first(seq__20657_21674__$1);
if(cljs.core.truth_(child_21680)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21680);


var G__21681 = cljs.core.next(seq__20657_21674__$1);
var G__21682 = null;
var G__21683 = (0);
var G__21684 = (0);
seq__20657_21660 = G__21681;
chunk__20659_21661 = G__21682;
count__20660_21662 = G__21683;
i__20661_21663 = G__21684;
continue;
} else {
var G__21685 = cljs.core.next(seq__20657_21674__$1);
var G__21686 = null;
var G__21687 = (0);
var G__21688 = (0);
seq__20657_21660 = G__21685;
chunk__20659_21661 = G__21686;
count__20660_21662 = G__21687;
i__20661_21663 = G__21688;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21659);
}


var G__21690 = cljs.core.next(seq__20513_21651__$1);
var G__21691 = null;
var G__21692 = (0);
var G__21693 = (0);
seq__20513_21598 = G__21690;
chunk__20514_21599 = G__21691;
count__20515_21600 = G__21692;
i__20516_21601 = G__21693;
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
var seq__20745 = cljs.core.seq(node);
var chunk__20746 = null;
var count__20747 = (0);
var i__20748 = (0);
while(true){
if((i__20748 < count__20747)){
var n = chunk__20746.cljs$core$IIndexed$_nth$arity$2(null,i__20748);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21697 = seq__20745;
var G__21698 = chunk__20746;
var G__21699 = count__20747;
var G__21700 = (i__20748 + (1));
seq__20745 = G__21697;
chunk__20746 = G__21698;
count__20747 = G__21699;
i__20748 = G__21700;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20745);
if(temp__5804__auto__){
var seq__20745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20745__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20745__$1);
var G__21703 = cljs.core.chunk_rest(seq__20745__$1);
var G__21704 = c__5568__auto__;
var G__21705 = cljs.core.count(c__5568__auto__);
var G__21706 = (0);
seq__20745 = G__21703;
chunk__20746 = G__21704;
count__20747 = G__21705;
i__20748 = G__21706;
continue;
} else {
var n = cljs.core.first(seq__20745__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21708 = cljs.core.next(seq__20745__$1);
var G__21709 = null;
var G__21710 = (0);
var G__21711 = (0);
seq__20745 = G__21708;
chunk__20746 = G__21709;
count__20747 = G__21710;
i__20748 = G__21711;
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
var G__20767 = arguments.length;
switch (G__20767) {
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
var G__20795 = arguments.length;
switch (G__20795) {
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
var G__20829 = arguments.length;
switch (G__20829) {
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
var len__5769__auto___21732 = arguments.length;
var i__5770__auto___21733 = (0);
while(true){
if((i__5770__auto___21733 < len__5769__auto___21732)){
args__5775__auto__.push((arguments[i__5770__auto___21733]));

var G__21734 = (i__5770__auto___21733 + (1));
i__5770__auto___21733 = G__21734;
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
var seq__20920_21735 = cljs.core.seq(nodes);
var chunk__20921_21736 = null;
var count__20922_21737 = (0);
var i__20923_21738 = (0);
while(true){
if((i__20923_21738 < count__20922_21737)){
var node_21739 = chunk__20921_21736.cljs$core$IIndexed$_nth$arity$2(null,i__20923_21738);
fragment.appendChild(shadow.dom._to_dom(node_21739));


var G__21740 = seq__20920_21735;
var G__21741 = chunk__20921_21736;
var G__21742 = count__20922_21737;
var G__21743 = (i__20923_21738 + (1));
seq__20920_21735 = G__21740;
chunk__20921_21736 = G__21741;
count__20922_21737 = G__21742;
i__20923_21738 = G__21743;
continue;
} else {
var temp__5804__auto___21744 = cljs.core.seq(seq__20920_21735);
if(temp__5804__auto___21744){
var seq__20920_21745__$1 = temp__5804__auto___21744;
if(cljs.core.chunked_seq_QMARK_(seq__20920_21745__$1)){
var c__5568__auto___21747 = cljs.core.chunk_first(seq__20920_21745__$1);
var G__21749 = cljs.core.chunk_rest(seq__20920_21745__$1);
var G__21750 = c__5568__auto___21747;
var G__21751 = cljs.core.count(c__5568__auto___21747);
var G__21753 = (0);
seq__20920_21735 = G__21749;
chunk__20921_21736 = G__21750;
count__20922_21737 = G__21751;
i__20923_21738 = G__21753;
continue;
} else {
var node_21755 = cljs.core.first(seq__20920_21745__$1);
fragment.appendChild(shadow.dom._to_dom(node_21755));


var G__21756 = cljs.core.next(seq__20920_21745__$1);
var G__21757 = null;
var G__21758 = (0);
var G__21759 = (0);
seq__20920_21735 = G__21756;
chunk__20921_21736 = G__21757;
count__20922_21737 = G__21758;
i__20923_21738 = G__21759;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20915){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20915));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20937_21760 = cljs.core.seq(scripts);
var chunk__20938_21761 = null;
var count__20939_21762 = (0);
var i__20940_21763 = (0);
while(true){
if((i__20940_21763 < count__20939_21762)){
var vec__20969_21764 = chunk__20938_21761.cljs$core$IIndexed$_nth$arity$2(null,i__20940_21763);
var script_tag_21765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20969_21764,(0),null);
var script_body_21766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20969_21764,(1),null);
eval(script_body_21766);


var G__21767 = seq__20937_21760;
var G__21768 = chunk__20938_21761;
var G__21769 = count__20939_21762;
var G__21770 = (i__20940_21763 + (1));
seq__20937_21760 = G__21767;
chunk__20938_21761 = G__21768;
count__20939_21762 = G__21769;
i__20940_21763 = G__21770;
continue;
} else {
var temp__5804__auto___21771 = cljs.core.seq(seq__20937_21760);
if(temp__5804__auto___21771){
var seq__20937_21772__$1 = temp__5804__auto___21771;
if(cljs.core.chunked_seq_QMARK_(seq__20937_21772__$1)){
var c__5568__auto___21773 = cljs.core.chunk_first(seq__20937_21772__$1);
var G__21774 = cljs.core.chunk_rest(seq__20937_21772__$1);
var G__21775 = c__5568__auto___21773;
var G__21776 = cljs.core.count(c__5568__auto___21773);
var G__21777 = (0);
seq__20937_21760 = G__21774;
chunk__20938_21761 = G__21775;
count__20939_21762 = G__21776;
i__20940_21763 = G__21777;
continue;
} else {
var vec__20979_21778 = cljs.core.first(seq__20937_21772__$1);
var script_tag_21779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20979_21778,(0),null);
var script_body_21780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20979_21778,(1),null);
eval(script_body_21780);


var G__21781 = cljs.core.next(seq__20937_21772__$1);
var G__21782 = null;
var G__21783 = (0);
var G__21784 = (0);
seq__20937_21760 = G__21781;
chunk__20938_21761 = G__21782;
count__20939_21762 = G__21783;
i__20940_21763 = G__21784;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20984){
var vec__20985 = p__20984;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20985,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20985,(1),null);
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
var G__21001 = arguments.length;
switch (G__21001) {
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
var seq__21024 = cljs.core.seq(style_keys);
var chunk__21025 = null;
var count__21026 = (0);
var i__21027 = (0);
while(true){
if((i__21027 < count__21026)){
var it = chunk__21025.cljs$core$IIndexed$_nth$arity$2(null,i__21027);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21798 = seq__21024;
var G__21799 = chunk__21025;
var G__21800 = count__21026;
var G__21801 = (i__21027 + (1));
seq__21024 = G__21798;
chunk__21025 = G__21799;
count__21026 = G__21800;
i__21027 = G__21801;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21024);
if(temp__5804__auto__){
var seq__21024__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21024__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21024__$1);
var G__21802 = cljs.core.chunk_rest(seq__21024__$1);
var G__21803 = c__5568__auto__;
var G__21804 = cljs.core.count(c__5568__auto__);
var G__21805 = (0);
seq__21024 = G__21802;
chunk__21025 = G__21803;
count__21026 = G__21804;
i__21027 = G__21805;
continue;
} else {
var it = cljs.core.first(seq__21024__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21810 = cljs.core.next(seq__21024__$1);
var G__21811 = null;
var G__21812 = (0);
var G__21813 = (0);
seq__21024 = G__21810;
chunk__21025 = G__21811;
count__21026 = G__21812;
i__21027 = G__21813;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21042,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21048 = k21042;
var G__21048__$1 = (((G__21048 instanceof cljs.core.Keyword))?G__21048.fqn:null);
switch (G__21048__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21042,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21050){
var vec__21051 = p__21050;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21051,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21051,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21041){
var self__ = this;
var G__21041__$1 = this;
return (new cljs.core.RecordIter((0),G__21041__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21043,other21044){
var self__ = this;
var this21043__$1 = this;
return (((!((other21044 == null)))) && ((((this21043__$1.constructor === other21044.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21043__$1.x,other21044.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21043__$1.y,other21044.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21043__$1.__extmap,other21044.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21042){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21086 = k21042;
var G__21086__$1 = (((G__21086 instanceof cljs.core.Keyword))?G__21086.fqn:null);
switch (G__21086__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21042);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21041){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21092 = cljs.core.keyword_identical_QMARK_;
var expr__21093 = k__5352__auto__;
if(cljs.core.truth_((pred__21092.cljs$core$IFn$_invoke$arity$2 ? pred__21092.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__21093) : pred__21092.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__21093)))){
return (new shadow.dom.Coordinate(G__21041,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21092.cljs$core$IFn$_invoke$arity$2 ? pred__21092.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__21093) : pred__21092.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__21093)))){
return (new shadow.dom.Coordinate(self__.x,G__21041,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21041),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21041){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__21041,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__21047){
var extmap__5385__auto__ = (function (){var G__21110 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21047,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__21047)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21110);
} else {
return G__21110;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__21047),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__21047),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21138,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21157 = k21138;
var G__21157__$1 = (((G__21157 instanceof cljs.core.Keyword))?G__21157.fqn:null);
switch (G__21157__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21138,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21159){
var vec__21162 = p__21159;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21162,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21162,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21137){
var self__ = this;
var G__21137__$1 = this;
return (new cljs.core.RecordIter((0),G__21137__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21139,other21140){
var self__ = this;
var this21139__$1 = this;
return (((!((other21140 == null)))) && ((((this21139__$1.constructor === other21140.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21139__$1.w,other21140.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21139__$1.h,other21140.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21139__$1.__extmap,other21140.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21138){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21191 = k21138;
var G__21191__$1 = (((G__21191 instanceof cljs.core.Keyword))?G__21191.fqn:null);
switch (G__21191__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21138);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21137){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21193 = cljs.core.keyword_identical_QMARK_;
var expr__21194 = k__5352__auto__;
if(cljs.core.truth_((pred__21193.cljs$core$IFn$_invoke$arity$2 ? pred__21193.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__21194) : pred__21193.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__21194)))){
return (new shadow.dom.Size(G__21137,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21193.cljs$core$IFn$_invoke$arity$2 ? pred__21193.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__21194) : pred__21193.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__21194)))){
return (new shadow.dom.Size(self__.w,G__21137,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21137),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21137){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__21137,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__21149){
var extmap__5385__auto__ = (function (){var G__21217 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21149,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__21149)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21217);
} else {
return G__21217;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__21149),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__21149),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__21838 = (i + (1));
var G__21839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21838;
ret = G__21839;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21248){
var vec__21249 = p__21248;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21249,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__21257 = arguments.length;
switch (G__21257) {
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
var G__21845 = ps;
var G__21846 = (i + (1));
el__$1 = G__21845;
i = G__21846;
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
var vec__21281 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21281,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21281,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21281,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__21286_21854 = cljs.core.seq(props);
var chunk__21287_21855 = null;
var count__21288_21856 = (0);
var i__21289_21857 = (0);
while(true){
if((i__21289_21857 < count__21288_21856)){
var vec__21299_21860 = chunk__21287_21855.cljs$core$IIndexed$_nth$arity$2(null,i__21289_21857);
var k_21861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21299_21860,(0),null);
var v_21862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21299_21860,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21861);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21861),v_21862);


var G__21865 = seq__21286_21854;
var G__21866 = chunk__21287_21855;
var G__21867 = count__21288_21856;
var G__21868 = (i__21289_21857 + (1));
seq__21286_21854 = G__21865;
chunk__21287_21855 = G__21866;
count__21288_21856 = G__21867;
i__21289_21857 = G__21868;
continue;
} else {
var temp__5804__auto___21869 = cljs.core.seq(seq__21286_21854);
if(temp__5804__auto___21869){
var seq__21286_21870__$1 = temp__5804__auto___21869;
if(cljs.core.chunked_seq_QMARK_(seq__21286_21870__$1)){
var c__5568__auto___21871 = cljs.core.chunk_first(seq__21286_21870__$1);
var G__21873 = cljs.core.chunk_rest(seq__21286_21870__$1);
var G__21874 = c__5568__auto___21871;
var G__21875 = cljs.core.count(c__5568__auto___21871);
var G__21876 = (0);
seq__21286_21854 = G__21873;
chunk__21287_21855 = G__21874;
count__21288_21856 = G__21875;
i__21289_21857 = G__21876;
continue;
} else {
var vec__21317_21877 = cljs.core.first(seq__21286_21870__$1);
var k_21878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21317_21877,(0),null);
var v_21879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21317_21877,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21878);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21878),v_21879);


var G__21882 = cljs.core.next(seq__21286_21870__$1);
var G__21883 = null;
var G__21884 = (0);
var G__21885 = (0);
seq__21286_21854 = G__21882;
chunk__21287_21855 = G__21883;
count__21288_21856 = G__21884;
i__21289_21857 = G__21885;
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
var vec__21343 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21343,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21343,(1),null);
var seq__21346_21888 = cljs.core.seq(node_children);
var chunk__21348_21889 = null;
var count__21349_21890 = (0);
var i__21350_21891 = (0);
while(true){
if((i__21350_21891 < count__21349_21890)){
var child_struct_21892 = chunk__21348_21889.cljs$core$IIndexed$_nth$arity$2(null,i__21350_21891);
if((!((child_struct_21892 == null)))){
if(typeof child_struct_21892 === 'string'){
var text_21893 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21893),child_struct_21892].join(''));
} else {
var children_21894 = shadow.dom.svg_node(child_struct_21892);
if(cljs.core.seq_QMARK_(children_21894)){
var seq__21388_21895 = cljs.core.seq(children_21894);
var chunk__21390_21896 = null;
var count__21391_21897 = (0);
var i__21392_21898 = (0);
while(true){
if((i__21392_21898 < count__21391_21897)){
var child_21899 = chunk__21390_21896.cljs$core$IIndexed$_nth$arity$2(null,i__21392_21898);
if(cljs.core.truth_(child_21899)){
node.appendChild(child_21899);


var G__21900 = seq__21388_21895;
var G__21901 = chunk__21390_21896;
var G__21902 = count__21391_21897;
var G__21903 = (i__21392_21898 + (1));
seq__21388_21895 = G__21900;
chunk__21390_21896 = G__21901;
count__21391_21897 = G__21902;
i__21392_21898 = G__21903;
continue;
} else {
var G__21904 = seq__21388_21895;
var G__21905 = chunk__21390_21896;
var G__21906 = count__21391_21897;
var G__21907 = (i__21392_21898 + (1));
seq__21388_21895 = G__21904;
chunk__21390_21896 = G__21905;
count__21391_21897 = G__21906;
i__21392_21898 = G__21907;
continue;
}
} else {
var temp__5804__auto___21909 = cljs.core.seq(seq__21388_21895);
if(temp__5804__auto___21909){
var seq__21388_21910__$1 = temp__5804__auto___21909;
if(cljs.core.chunked_seq_QMARK_(seq__21388_21910__$1)){
var c__5568__auto___21911 = cljs.core.chunk_first(seq__21388_21910__$1);
var G__21912 = cljs.core.chunk_rest(seq__21388_21910__$1);
var G__21913 = c__5568__auto___21911;
var G__21914 = cljs.core.count(c__5568__auto___21911);
var G__21915 = (0);
seq__21388_21895 = G__21912;
chunk__21390_21896 = G__21913;
count__21391_21897 = G__21914;
i__21392_21898 = G__21915;
continue;
} else {
var child_21916 = cljs.core.first(seq__21388_21910__$1);
if(cljs.core.truth_(child_21916)){
node.appendChild(child_21916);


var G__21917 = cljs.core.next(seq__21388_21910__$1);
var G__21918 = null;
var G__21919 = (0);
var G__21920 = (0);
seq__21388_21895 = G__21917;
chunk__21390_21896 = G__21918;
count__21391_21897 = G__21919;
i__21392_21898 = G__21920;
continue;
} else {
var G__21921 = cljs.core.next(seq__21388_21910__$1);
var G__21922 = null;
var G__21923 = (0);
var G__21924 = (0);
seq__21388_21895 = G__21921;
chunk__21390_21896 = G__21922;
count__21391_21897 = G__21923;
i__21392_21898 = G__21924;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21894);
}
}


var G__21925 = seq__21346_21888;
var G__21926 = chunk__21348_21889;
var G__21927 = count__21349_21890;
var G__21928 = (i__21350_21891 + (1));
seq__21346_21888 = G__21925;
chunk__21348_21889 = G__21926;
count__21349_21890 = G__21927;
i__21350_21891 = G__21928;
continue;
} else {
var G__21930 = seq__21346_21888;
var G__21931 = chunk__21348_21889;
var G__21932 = count__21349_21890;
var G__21933 = (i__21350_21891 + (1));
seq__21346_21888 = G__21930;
chunk__21348_21889 = G__21931;
count__21349_21890 = G__21932;
i__21350_21891 = G__21933;
continue;
}
} else {
var temp__5804__auto___21934 = cljs.core.seq(seq__21346_21888);
if(temp__5804__auto___21934){
var seq__21346_21935__$1 = temp__5804__auto___21934;
if(cljs.core.chunked_seq_QMARK_(seq__21346_21935__$1)){
var c__5568__auto___21936 = cljs.core.chunk_first(seq__21346_21935__$1);
var G__21937 = cljs.core.chunk_rest(seq__21346_21935__$1);
var G__21938 = c__5568__auto___21936;
var G__21939 = cljs.core.count(c__5568__auto___21936);
var G__21940 = (0);
seq__21346_21888 = G__21937;
chunk__21348_21889 = G__21938;
count__21349_21890 = G__21939;
i__21350_21891 = G__21940;
continue;
} else {
var child_struct_21941 = cljs.core.first(seq__21346_21935__$1);
if((!((child_struct_21941 == null)))){
if(typeof child_struct_21941 === 'string'){
var text_21944 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21944),child_struct_21941].join(''));
} else {
var children_21945 = shadow.dom.svg_node(child_struct_21941);
if(cljs.core.seq_QMARK_(children_21945)){
var seq__21416_21946 = cljs.core.seq(children_21945);
var chunk__21418_21947 = null;
var count__21419_21948 = (0);
var i__21420_21949 = (0);
while(true){
if((i__21420_21949 < count__21419_21948)){
var child_21951 = chunk__21418_21947.cljs$core$IIndexed$_nth$arity$2(null,i__21420_21949);
if(cljs.core.truth_(child_21951)){
node.appendChild(child_21951);


var G__21952 = seq__21416_21946;
var G__21953 = chunk__21418_21947;
var G__21954 = count__21419_21948;
var G__21955 = (i__21420_21949 + (1));
seq__21416_21946 = G__21952;
chunk__21418_21947 = G__21953;
count__21419_21948 = G__21954;
i__21420_21949 = G__21955;
continue;
} else {
var G__21956 = seq__21416_21946;
var G__21957 = chunk__21418_21947;
var G__21958 = count__21419_21948;
var G__21959 = (i__21420_21949 + (1));
seq__21416_21946 = G__21956;
chunk__21418_21947 = G__21957;
count__21419_21948 = G__21958;
i__21420_21949 = G__21959;
continue;
}
} else {
var temp__5804__auto___21960__$1 = cljs.core.seq(seq__21416_21946);
if(temp__5804__auto___21960__$1){
var seq__21416_21961__$1 = temp__5804__auto___21960__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21416_21961__$1)){
var c__5568__auto___21962 = cljs.core.chunk_first(seq__21416_21961__$1);
var G__21966 = cljs.core.chunk_rest(seq__21416_21961__$1);
var G__21967 = c__5568__auto___21962;
var G__21968 = cljs.core.count(c__5568__auto___21962);
var G__21969 = (0);
seq__21416_21946 = G__21966;
chunk__21418_21947 = G__21967;
count__21419_21948 = G__21968;
i__21420_21949 = G__21969;
continue;
} else {
var child_21972 = cljs.core.first(seq__21416_21961__$1);
if(cljs.core.truth_(child_21972)){
node.appendChild(child_21972);


var G__21973 = cljs.core.next(seq__21416_21961__$1);
var G__21974 = null;
var G__21975 = (0);
var G__21976 = (0);
seq__21416_21946 = G__21973;
chunk__21418_21947 = G__21974;
count__21419_21948 = G__21975;
i__21420_21949 = G__21976;
continue;
} else {
var G__21977 = cljs.core.next(seq__21416_21961__$1);
var G__21978 = null;
var G__21979 = (0);
var G__21980 = (0);
seq__21416_21946 = G__21977;
chunk__21418_21947 = G__21978;
count__21419_21948 = G__21979;
i__21420_21949 = G__21980;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21945);
}
}


var G__21981 = cljs.core.next(seq__21346_21935__$1);
var G__21982 = null;
var G__21983 = (0);
var G__21984 = (0);
seq__21346_21888 = G__21981;
chunk__21348_21889 = G__21982;
count__21349_21890 = G__21983;
i__21350_21891 = G__21984;
continue;
} else {
var G__21985 = cljs.core.next(seq__21346_21935__$1);
var G__21986 = null;
var G__21987 = (0);
var G__21988 = (0);
seq__21346_21888 = G__21985;
chunk__21348_21889 = G__21986;
count__21349_21890 = G__21987;
i__21350_21891 = G__21988;
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
var len__5769__auto___21997 = arguments.length;
var i__5770__auto___21998 = (0);
while(true){
if((i__5770__auto___21998 < len__5769__auto___21997)){
args__5775__auto__.push((arguments[i__5770__auto___21998]));

var G__21999 = (i__5770__auto___21998 + (1));
i__5770__auto___21998 = G__21999;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21423){
var G__21424 = cljs.core.first(seq21423);
var seq21423__$1 = cljs.core.next(seq21423);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21424,seq21423__$1);
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
var G__21430 = arguments.length;
switch (G__21430) {
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
var c__17781__auto___22003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_21437){
var state_val_21438 = (state_21437[(1)]);
if((state_val_21438 === (1))){
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21437__$1,(2),once_or_cleanup);
} else {
if((state_val_21438 === (2))){
var inst_21434 = (state_21437[(2)]);
var inst_21435 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21437__$1 = (function (){var statearr_21441 = state_21437;
(statearr_21441[(7)] = inst_21434);

return statearr_21441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21437__$1,inst_21435);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17409__auto__ = null;
var shadow$dom$state_machine__17409__auto____0 = (function (){
var statearr_21442 = [null,null,null,null,null,null,null,null];
(statearr_21442[(0)] = shadow$dom$state_machine__17409__auto__);

(statearr_21442[(1)] = (1));

return statearr_21442;
});
var shadow$dom$state_machine__17409__auto____1 = (function (state_21437){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_21437);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e21443){var ex__17412__auto__ = e21443;
var statearr_21444_22004 = state_21437;
(statearr_21444_22004[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_21437[(4)]))){
var statearr_21448_22005 = state_21437;
(statearr_21448_22005[(1)] = cljs.core.first((state_21437[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22006 = state_21437;
state_21437 = G__22006;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
shadow$dom$state_machine__17409__auto__ = function(state_21437){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17409__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17409__auto____1.call(this,state_21437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17409__auto____0;
shadow$dom$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17409__auto____1;
return shadow$dom$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_21451 = f__17782__auto__();
(statearr_21451[(6)] = c__17781__auto___22003);

return statearr_21451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
