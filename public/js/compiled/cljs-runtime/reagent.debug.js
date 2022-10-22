goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12028__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12029__i = 0, G__12029__a = new Array(arguments.length -  0);
while (G__12029__i < G__12029__a.length) {G__12029__a[G__12029__i] = arguments[G__12029__i + 0]; ++G__12029__i;}
  args = new cljs.core.IndexedSeq(G__12029__a,0,null);
} 
return G__12028__delegate.call(this,args);};
G__12028.cljs$lang$maxFixedArity = 0;
G__12028.cljs$lang$applyTo = (function (arglist__12030){
var args = cljs.core.seq(arglist__12030);
return G__12028__delegate(args);
});
G__12028.cljs$core$IFn$_invoke$arity$variadic = G__12028__delegate;
return G__12028;
})()
);

(o.error = (function() { 
var G__12031__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12032__i = 0, G__12032__a = new Array(arguments.length -  0);
while (G__12032__i < G__12032__a.length) {G__12032__a[G__12032__i] = arguments[G__12032__i + 0]; ++G__12032__i;}
  args = new cljs.core.IndexedSeq(G__12032__a,0,null);
} 
return G__12031__delegate.call(this,args);};
G__12031.cljs$lang$maxFixedArity = 0;
G__12031.cljs$lang$applyTo = (function (arglist__12033){
var args = cljs.core.seq(arglist__12033);
return G__12031__delegate(args);
});
G__12031.cljs$core$IFn$_invoke$arity$variadic = G__12031__delegate;
return G__12031;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
