goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21357,p__21358){
var map__21359 = p__21357;
var map__21359__$1 = cljs.core.__destructure_map(map__21359);
var svc = map__21359__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21359__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21359__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21359__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21360 = p__21358;
var map__21360__$1 = cljs.core.__destructure_map(map__21360);
var msg = map__21360__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21360__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21360__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21360__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21360__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21361,p__21362){
var map__21363 = p__21361;
var map__21363__$1 = cljs.core.__destructure_map(map__21363);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21363__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21364 = p__21362;
var map__21364__$1 = cljs.core.__destructure_map(map__21364);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21364__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21370,p__21371){
var map__21373 = p__21370;
var map__21373__$1 = cljs.core.__destructure_map(map__21373);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21374 = p__21371;
var map__21374__$1 = cljs.core.__destructure_map(map__21374);
var msg = map__21374__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21374__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21378,tid){
var map__21379 = p__21378;
var map__21379__$1 = cljs.core.__destructure_map(map__21379);
var svc = map__21379__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21394 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21395 = null;
var count__21396 = (0);
var i__21397 = (0);
while(true){
if((i__21397 < count__21396)){
var vec__21414 = chunk__21395.cljs$core$IIndexed$_nth$arity$2(null,i__21397);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21414,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21414,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21433 = seq__21394;
var G__21434 = chunk__21395;
var G__21435 = count__21396;
var G__21436 = (i__21397 + (1));
seq__21394 = G__21433;
chunk__21395 = G__21434;
count__21396 = G__21435;
i__21397 = G__21436;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21394);
if(temp__5804__auto__){
var seq__21394__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21394__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21394__$1);
var G__21437 = cljs.core.chunk_rest(seq__21394__$1);
var G__21438 = c__5568__auto__;
var G__21439 = cljs.core.count(c__5568__auto__);
var G__21440 = (0);
seq__21394 = G__21437;
chunk__21395 = G__21438;
count__21396 = G__21439;
i__21397 = G__21440;
continue;
} else {
var vec__21420 = cljs.core.first(seq__21394__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21420,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21420,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21441 = cljs.core.next(seq__21394__$1);
var G__21442 = null;
var G__21443 = (0);
var G__21444 = (0);
seq__21394 = G__21441;
chunk__21395 = G__21442;
count__21396 = G__21443;
i__21397 = G__21444;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21382_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21382_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21383_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21383_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21384_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21384_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21385_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21385_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21428){
var map__21429 = p__21428;
var map__21429__$1 = cljs.core.__destructure_map(map__21429);
var svc = map__21429__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21429__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21429__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
