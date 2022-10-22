goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21297,p__21298){
var map__21302 = p__21297;
var map__21302__$1 = cljs.core.__destructure_map(map__21302);
var svc = map__21302__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21303 = p__21298;
var map__21303__$1 = cljs.core.__destructure_map(map__21303);
var msg = map__21303__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21303__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21303__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21303__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21303__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21309,p__21310){
var map__21312 = p__21309;
var map__21312__$1 = cljs.core.__destructure_map(map__21312);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21313 = p__21310;
var map__21313__$1 = cljs.core.__destructure_map(map__21313);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21321,p__21322){
var map__21323 = p__21321;
var map__21323__$1 = cljs.core.__destructure_map(map__21323);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21323__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21323__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21324 = p__21322;
var map__21324__$1 = cljs.core.__destructure_map(map__21324);
var msg = map__21324__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21324__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21328,tid){
var map__21329 = p__21328;
var map__21329__$1 = cljs.core.__destructure_map(map__21329);
var svc = map__21329__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21329__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21352 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21353 = null;
var count__21354 = (0);
var i__21355 = (0);
while(true){
if((i__21355 < count__21354)){
var vec__21371 = chunk__21353.cljs$core$IIndexed$_nth$arity$2(null,i__21355);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21371,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21371,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21398 = seq__21352;
var G__21399 = chunk__21353;
var G__21400 = count__21354;
var G__21401 = (i__21355 + (1));
seq__21352 = G__21398;
chunk__21353 = G__21399;
count__21354 = G__21400;
i__21355 = G__21401;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21352);
if(temp__5804__auto__){
var seq__21352__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21352__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21352__$1);
var G__21406 = cljs.core.chunk_rest(seq__21352__$1);
var G__21407 = c__5568__auto__;
var G__21408 = cljs.core.count(c__5568__auto__);
var G__21409 = (0);
seq__21352 = G__21406;
chunk__21353 = G__21407;
count__21354 = G__21408;
i__21355 = G__21409;
continue;
} else {
var vec__21376 = cljs.core.first(seq__21352__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21376,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21376,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21412 = cljs.core.next(seq__21352__$1);
var G__21413 = null;
var G__21414 = (0);
var G__21415 = (0);
seq__21352 = G__21412;
chunk__21353 = G__21413;
count__21354 = G__21414;
i__21355 = G__21415;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21332_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21332_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21333_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21333_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21334_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21334_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21335_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21335_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21385){
var map__21387 = p__21385;
var map__21387__$1 = cljs.core.__destructure_map(map__21387);
var svc = map__21387__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
