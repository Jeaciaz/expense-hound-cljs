goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17713,res){
var map__17720 = p__17713;
var map__17720__$1 = cljs.core.__destructure_map(map__17720);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17720__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17720__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17721 = res;
var G__17721__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17721,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17721);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17721__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17721__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17723 = arguments.length;
switch (G__17723) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17724,msg,handlers,timeout_after_ms){
var map__17725 = p__17724;
var map__17725__$1 = cljs.core.__destructure_map(map__17725);
var runtime = map__17725__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17725__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17983 = arguments.length;
var i__5770__auto___17984 = (0);
while(true){
if((i__5770__auto___17984 < len__5769__auto___17983)){
args__5775__auto__.push((arguments[i__5770__auto___17984]));

var G__17985 = (i__5770__auto___17984 + (1));
i__5770__auto___17984 = G__17985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17729,ev,args){
var map__17730 = p__17729;
var map__17730__$1 = cljs.core.__destructure_map(map__17730);
var runtime = map__17730__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17731 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17734 = null;
var count__17735 = (0);
var i__17736 = (0);
while(true){
if((i__17736 < count__17735)){
var ext = chunk__17734.cljs$core$IIndexed$_nth$arity$2(null,i__17736);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17994 = seq__17731;
var G__17995 = chunk__17734;
var G__17996 = count__17735;
var G__17997 = (i__17736 + (1));
seq__17731 = G__17994;
chunk__17734 = G__17995;
count__17735 = G__17996;
i__17736 = G__17997;
continue;
} else {
var G__17999 = seq__17731;
var G__18000 = chunk__17734;
var G__18001 = count__17735;
var G__18002 = (i__17736 + (1));
seq__17731 = G__17999;
chunk__17734 = G__18000;
count__17735 = G__18001;
i__17736 = G__18002;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17731);
if(temp__5804__auto__){
var seq__17731__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17731__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17731__$1);
var G__18007 = cljs.core.chunk_rest(seq__17731__$1);
var G__18008 = c__5568__auto__;
var G__18009 = cljs.core.count(c__5568__auto__);
var G__18010 = (0);
seq__17731 = G__18007;
chunk__17734 = G__18008;
count__17735 = G__18009;
i__17736 = G__18010;
continue;
} else {
var ext = cljs.core.first(seq__17731__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18012 = cljs.core.next(seq__17731__$1);
var G__18013 = null;
var G__18014 = (0);
var G__18015 = (0);
seq__17731 = G__18012;
chunk__17734 = G__18013;
count__17735 = G__18014;
i__17736 = G__18015;
continue;
} else {
var G__18016 = cljs.core.next(seq__17731__$1);
var G__18017 = null;
var G__18018 = (0);
var G__18019 = (0);
seq__17731 = G__18016;
chunk__17734 = G__18017;
count__17735 = G__18018;
i__17736 = G__18019;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17726){
var G__17727 = cljs.core.first(seq17726);
var seq17726__$1 = cljs.core.next(seq17726);
var G__17728 = cljs.core.first(seq17726__$1);
var seq17726__$2 = cljs.core.next(seq17726__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17727,G__17728,seq17726__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17743,p__17744){
var map__17745 = p__17743;
var map__17745__$1 = cljs.core.__destructure_map(map__17745);
var runtime = map__17745__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17745__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17746 = p__17744;
var map__17746__$1 = cljs.core.__destructure_map(map__17746);
var msg = map__17746__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17746__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17747 = cljs.core.deref(state_ref);
var map__17747__$1 = cljs.core.__destructure_map(map__17747);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17756){
var map__17759 = p__17756;
var map__17759__$1 = cljs.core.__destructure_map(map__17759);
var runtime = map__17759__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17769,msg){
var map__17771 = p__17769;
var map__17771__$1 = cljs.core.__destructure_map(map__17771);
var runtime = map__17771__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17771__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17790,key,p__17791){
var map__17792 = p__17790;
var map__17792__$1 = cljs.core.__destructure_map(map__17792);
var state = map__17792__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17792__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17794 = p__17791;
var map__17794__$1 = cljs.core.__destructure_map(map__17794);
var spec = map__17794__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17794__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17809,key,spec){
var map__17812 = p__17809;
var map__17812__$1 = cljs.core.__destructure_map(map__17812);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17812__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17820_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17820_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17823_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17823_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17824_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17824_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17825_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17825_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17826_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17826_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17873,key){
var map__17874 = p__17873;
var map__17874__$1 = cljs.core.__destructure_map(map__17874);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17874__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17882,msg){
var map__17883 = p__17882;
var map__17883__$1 = cljs.core.__destructure_map(map__17883);
var runtime = map__17883__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17883__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17889,p__17890){
var map__17896 = p__17889;
var map__17896__$1 = cljs.core.__destructure_map(map__17896);
var runtime = map__17896__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17896__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17897 = p__17890;
var map__17897__$1 = cljs.core.__destructure_map(map__17897);
var msg = map__17897__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17897__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17897__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17920 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17922 = null;
var count__17923 = (0);
var i__17924 = (0);
while(true){
if((i__17924 < count__17923)){
var map__17964 = chunk__17922.cljs$core$IIndexed$_nth$arity$2(null,i__17924);
var map__17964__$1 = cljs.core.__destructure_map(map__17964);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17964__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18029 = seq__17920;
var G__18030 = chunk__17922;
var G__18031 = count__17923;
var G__18032 = (i__17924 + (1));
seq__17920 = G__18029;
chunk__17922 = G__18030;
count__17923 = G__18031;
i__17924 = G__18032;
continue;
} else {
var G__18033 = seq__17920;
var G__18034 = chunk__17922;
var G__18035 = count__17923;
var G__18036 = (i__17924 + (1));
seq__17920 = G__18033;
chunk__17922 = G__18034;
count__17923 = G__18035;
i__17924 = G__18036;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17920);
if(temp__5804__auto__){
var seq__17920__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17920__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17920__$1);
var G__18037 = cljs.core.chunk_rest(seq__17920__$1);
var G__18038 = c__5568__auto__;
var G__18039 = cljs.core.count(c__5568__auto__);
var G__18040 = (0);
seq__17920 = G__18037;
chunk__17922 = G__18038;
count__17923 = G__18039;
i__17924 = G__18040;
continue;
} else {
var map__17977 = cljs.core.first(seq__17920__$1);
var map__17977__$1 = cljs.core.__destructure_map(map__17977);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17977__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18041 = cljs.core.next(seq__17920__$1);
var G__18042 = null;
var G__18043 = (0);
var G__18044 = (0);
seq__17920 = G__18041;
chunk__17922 = G__18042;
count__17923 = G__18043;
i__17924 = G__18044;
continue;
} else {
var G__18045 = cljs.core.next(seq__17920__$1);
var G__18046 = null;
var G__18047 = (0);
var G__18048 = (0);
seq__17920 = G__18045;
chunk__17922 = G__18046;
count__17923 = G__18047;
i__17924 = G__18048;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
