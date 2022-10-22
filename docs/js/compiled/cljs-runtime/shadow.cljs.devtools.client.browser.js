goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23313 = arguments.length;
var i__5770__auto___23314 = (0);
while(true){
if((i__5770__auto___23314 < len__5769__auto___23313)){
args__5775__auto__.push((arguments[i__5770__auto___23314]));

var G__23315 = (i__5770__auto___23314 + (1));
i__5770__auto___23314 = G__23315;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22893){
var G__22894 = cljs.core.first(seq22893);
var seq22893__$1 = cljs.core.next(seq22893);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22894,seq22893__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22898 = cljs.core.seq(sources);
var chunk__22900 = null;
var count__22901 = (0);
var i__22902 = (0);
while(true){
if((i__22902 < count__22901)){
var map__22914 = chunk__22900.cljs$core$IIndexed$_nth$arity$2(null,i__22902);
var map__22914__$1 = cljs.core.__destructure_map(map__22914);
var src = map__22914__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22915){var e_23316 = e22915;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23316);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23316.message)].join('')));
}

var G__23317 = seq__22898;
var G__23318 = chunk__22900;
var G__23319 = count__22901;
var G__23320 = (i__22902 + (1));
seq__22898 = G__23317;
chunk__22900 = G__23318;
count__22901 = G__23319;
i__22902 = G__23320;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22898);
if(temp__5804__auto__){
var seq__22898__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22898__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22898__$1);
var G__23321 = cljs.core.chunk_rest(seq__22898__$1);
var G__23322 = c__5568__auto__;
var G__23323 = cljs.core.count(c__5568__auto__);
var G__23324 = (0);
seq__22898 = G__23321;
chunk__22900 = G__23322;
count__22901 = G__23323;
i__22902 = G__23324;
continue;
} else {
var map__22916 = cljs.core.first(seq__22898__$1);
var map__22916__$1 = cljs.core.__destructure_map(map__22916);
var src = map__22916__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22916__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22916__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22916__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22916__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22917){var e_23325 = e22917;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23325);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23325.message)].join('')));
}

var G__23326 = cljs.core.next(seq__22898__$1);
var G__23327 = null;
var G__23328 = (0);
var G__23329 = (0);
seq__22898 = G__23326;
chunk__22900 = G__23327;
count__22901 = G__23328;
i__22902 = G__23329;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22921 = cljs.core.seq(js_requires);
var chunk__22922 = null;
var count__22923 = (0);
var i__22924 = (0);
while(true){
if((i__22924 < count__22923)){
var js_ns = chunk__22922.cljs$core$IIndexed$_nth$arity$2(null,i__22924);
var require_str_23330 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23330);


var G__23331 = seq__22921;
var G__23332 = chunk__22922;
var G__23333 = count__22923;
var G__23334 = (i__22924 + (1));
seq__22921 = G__23331;
chunk__22922 = G__23332;
count__22923 = G__23333;
i__22924 = G__23334;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22921);
if(temp__5804__auto__){
var seq__22921__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22921__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22921__$1);
var G__23335 = cljs.core.chunk_rest(seq__22921__$1);
var G__23336 = c__5568__auto__;
var G__23337 = cljs.core.count(c__5568__auto__);
var G__23338 = (0);
seq__22921 = G__23335;
chunk__22922 = G__23336;
count__22923 = G__23337;
i__22924 = G__23338;
continue;
} else {
var js_ns = cljs.core.first(seq__22921__$1);
var require_str_23339 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23339);


var G__23340 = cljs.core.next(seq__22921__$1);
var G__23341 = null;
var G__23342 = (0);
var G__23343 = (0);
seq__22921 = G__23340;
chunk__22922 = G__23341;
count__22923 = G__23342;
i__22924 = G__23343;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22933){
var map__22934 = p__22933;
var map__22934__$1 = cljs.core.__destructure_map(map__22934);
var msg = map__22934__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22937(s__22938){
return (new cljs.core.LazySeq(null,(function (){
var s__22938__$1 = s__22938;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22938__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22944 = cljs.core.first(xs__6360__auto__);
var map__22944__$1 = cljs.core.__destructure_map(map__22944);
var src = map__22944__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22944__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22944__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22938__$1,map__22944,map__22944__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22934,map__22934__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22937_$_iter__22939(s__22940){
return (new cljs.core.LazySeq(null,((function (s__22938__$1,map__22944,map__22944__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22934,map__22934__$1,msg,info,reload_info){
return (function (){
var s__22940__$1 = s__22940;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22940__$1);
if(temp__5804__auto____$1){
var s__22940__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22940__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22940__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22942 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22941 = (0);
while(true){
if((i__22941 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22941);
cljs.core.chunk_append(b__22942,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23344 = (i__22941 + (1));
i__22941 = G__23344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22942),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22937_$_iter__22939(cljs.core.chunk_rest(s__22940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22942),null);
}
} else {
var warning = cljs.core.first(s__22940__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22937_$_iter__22939(cljs.core.rest(s__22940__$2)));
}
} else {
return null;
}
break;
}
});})(s__22938__$1,map__22944,map__22944__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22934,map__22934__$1,msg,info,reload_info))
,null,null));
});})(s__22938__$1,map__22944,map__22944__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22934,map__22934__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22937(cljs.core.rest(s__22938__$1)));
} else {
var G__23345 = cljs.core.rest(s__22938__$1);
s__22938__$1 = G__23345;
continue;
}
} else {
var G__23346 = cljs.core.rest(s__22938__$1);
s__22938__$1 = G__23346;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22952_23347 = cljs.core.seq(warnings);
var chunk__22953_23348 = null;
var count__22954_23349 = (0);
var i__22955_23350 = (0);
while(true){
if((i__22955_23350 < count__22954_23349)){
var map__22958_23351 = chunk__22953_23348.cljs$core$IIndexed$_nth$arity$2(null,i__22955_23350);
var map__22958_23352__$1 = cljs.core.__destructure_map(map__22958_23351);
var w_23353 = map__22958_23352__$1;
var msg_23354__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22958_23352__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22958_23352__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22958_23352__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22958_23352__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23357)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23355),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23356),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23354__$1)].join(''));


var G__23358 = seq__22952_23347;
var G__23359 = chunk__22953_23348;
var G__23360 = count__22954_23349;
var G__23361 = (i__22955_23350 + (1));
seq__22952_23347 = G__23358;
chunk__22953_23348 = G__23359;
count__22954_23349 = G__23360;
i__22955_23350 = G__23361;
continue;
} else {
var temp__5804__auto___23362 = cljs.core.seq(seq__22952_23347);
if(temp__5804__auto___23362){
var seq__22952_23363__$1 = temp__5804__auto___23362;
if(cljs.core.chunked_seq_QMARK_(seq__22952_23363__$1)){
var c__5568__auto___23364 = cljs.core.chunk_first(seq__22952_23363__$1);
var G__23365 = cljs.core.chunk_rest(seq__22952_23363__$1);
var G__23366 = c__5568__auto___23364;
var G__23367 = cljs.core.count(c__5568__auto___23364);
var G__23368 = (0);
seq__22952_23347 = G__23365;
chunk__22953_23348 = G__23366;
count__22954_23349 = G__23367;
i__22955_23350 = G__23368;
continue;
} else {
var map__22963_23369 = cljs.core.first(seq__22952_23363__$1);
var map__22963_23370__$1 = cljs.core.__destructure_map(map__22963_23369);
var w_23371 = map__22963_23370__$1;
var msg_23372__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22963_23370__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22963_23370__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22963_23370__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22963_23370__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23375)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23373),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23374),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23372__$1)].join(''));


var G__23376 = cljs.core.next(seq__22952_23363__$1);
var G__23377 = null;
var G__23378 = (0);
var G__23379 = (0);
seq__22952_23347 = G__23376;
chunk__22953_23348 = G__23377;
count__22954_23349 = G__23378;
i__22955_23350 = G__23379;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22931_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22931_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22996){
var map__22997 = p__22996;
var map__22997__$1 = cljs.core.__destructure_map(map__22997);
var msg = map__22997__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22997__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22997__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22998 = cljs.core.seq(updates);
var chunk__23000 = null;
var count__23001 = (0);
var i__23002 = (0);
while(true){
if((i__23002 < count__23001)){
var path = chunk__23000.cljs$core$IIndexed$_nth$arity$2(null,i__23002);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23156_23380 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23160_23381 = null;
var count__23161_23382 = (0);
var i__23162_23383 = (0);
while(true){
if((i__23162_23383 < count__23161_23382)){
var node_23384 = chunk__23160_23381.cljs$core$IIndexed$_nth$arity$2(null,i__23162_23383);
if(cljs.core.not(node_23384.shadow$old)){
var path_match_23385 = shadow.cljs.devtools.client.browser.match_paths(node_23384.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23385)){
var new_link_23386 = (function (){var G__23204 = node_23384.cloneNode(true);
G__23204.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23385),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23204;
})();
(node_23384.shadow$old = true);

(new_link_23386.onload = ((function (seq__23156_23380,chunk__23160_23381,count__23161_23382,i__23162_23383,seq__22998,chunk__23000,count__23001,i__23002,new_link_23386,path_match_23385,node_23384,path,map__22997,map__22997__$1,msg,updates,reload_info){
return (function (e){
var seq__23208_23387 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23210_23388 = null;
var count__23211_23389 = (0);
var i__23212_23390 = (0);
while(true){
if((i__23212_23390 < count__23211_23389)){
var map__23222_23391 = chunk__23210_23388.cljs$core$IIndexed$_nth$arity$2(null,i__23212_23390);
var map__23222_23392__$1 = cljs.core.__destructure_map(map__23222_23391);
var task_23393 = map__23222_23392__$1;
var fn_str_23394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222_23392__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222_23392__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23396 = goog.getObjectByName(fn_str_23394,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23395)].join(''));

(fn_obj_23396.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23396.cljs$core$IFn$_invoke$arity$2(path,new_link_23386) : fn_obj_23396.call(null,path,new_link_23386));


var G__23397 = seq__23208_23387;
var G__23398 = chunk__23210_23388;
var G__23399 = count__23211_23389;
var G__23400 = (i__23212_23390 + (1));
seq__23208_23387 = G__23397;
chunk__23210_23388 = G__23398;
count__23211_23389 = G__23399;
i__23212_23390 = G__23400;
continue;
} else {
var temp__5804__auto___23401 = cljs.core.seq(seq__23208_23387);
if(temp__5804__auto___23401){
var seq__23208_23402__$1 = temp__5804__auto___23401;
if(cljs.core.chunked_seq_QMARK_(seq__23208_23402__$1)){
var c__5568__auto___23403 = cljs.core.chunk_first(seq__23208_23402__$1);
var G__23404 = cljs.core.chunk_rest(seq__23208_23402__$1);
var G__23405 = c__5568__auto___23403;
var G__23406 = cljs.core.count(c__5568__auto___23403);
var G__23407 = (0);
seq__23208_23387 = G__23404;
chunk__23210_23388 = G__23405;
count__23211_23389 = G__23406;
i__23212_23390 = G__23407;
continue;
} else {
var map__23224_23408 = cljs.core.first(seq__23208_23402__$1);
var map__23224_23409__$1 = cljs.core.__destructure_map(map__23224_23408);
var task_23410 = map__23224_23409__$1;
var fn_str_23411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23224_23409__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23224_23409__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23413 = goog.getObjectByName(fn_str_23411,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23412)].join(''));

(fn_obj_23413.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23413.cljs$core$IFn$_invoke$arity$2(path,new_link_23386) : fn_obj_23413.call(null,path,new_link_23386));


var G__23414 = cljs.core.next(seq__23208_23402__$1);
var G__23415 = null;
var G__23416 = (0);
var G__23417 = (0);
seq__23208_23387 = G__23414;
chunk__23210_23388 = G__23415;
count__23211_23389 = G__23416;
i__23212_23390 = G__23417;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23384);
});})(seq__23156_23380,chunk__23160_23381,count__23161_23382,i__23162_23383,seq__22998,chunk__23000,count__23001,i__23002,new_link_23386,path_match_23385,node_23384,path,map__22997,map__22997__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23385], 0));

goog.dom.insertSiblingAfter(new_link_23386,node_23384);


var G__23418 = seq__23156_23380;
var G__23419 = chunk__23160_23381;
var G__23420 = count__23161_23382;
var G__23421 = (i__23162_23383 + (1));
seq__23156_23380 = G__23418;
chunk__23160_23381 = G__23419;
count__23161_23382 = G__23420;
i__23162_23383 = G__23421;
continue;
} else {
var G__23422 = seq__23156_23380;
var G__23423 = chunk__23160_23381;
var G__23424 = count__23161_23382;
var G__23425 = (i__23162_23383 + (1));
seq__23156_23380 = G__23422;
chunk__23160_23381 = G__23423;
count__23161_23382 = G__23424;
i__23162_23383 = G__23425;
continue;
}
} else {
var G__23426 = seq__23156_23380;
var G__23427 = chunk__23160_23381;
var G__23428 = count__23161_23382;
var G__23429 = (i__23162_23383 + (1));
seq__23156_23380 = G__23426;
chunk__23160_23381 = G__23427;
count__23161_23382 = G__23428;
i__23162_23383 = G__23429;
continue;
}
} else {
var temp__5804__auto___23430 = cljs.core.seq(seq__23156_23380);
if(temp__5804__auto___23430){
var seq__23156_23431__$1 = temp__5804__auto___23430;
if(cljs.core.chunked_seq_QMARK_(seq__23156_23431__$1)){
var c__5568__auto___23432 = cljs.core.chunk_first(seq__23156_23431__$1);
var G__23433 = cljs.core.chunk_rest(seq__23156_23431__$1);
var G__23434 = c__5568__auto___23432;
var G__23435 = cljs.core.count(c__5568__auto___23432);
var G__23436 = (0);
seq__23156_23380 = G__23433;
chunk__23160_23381 = G__23434;
count__23161_23382 = G__23435;
i__23162_23383 = G__23436;
continue;
} else {
var node_23437 = cljs.core.first(seq__23156_23431__$1);
if(cljs.core.not(node_23437.shadow$old)){
var path_match_23438 = shadow.cljs.devtools.client.browser.match_paths(node_23437.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23438)){
var new_link_23439 = (function (){var G__23228 = node_23437.cloneNode(true);
G__23228.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23438),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23228;
})();
(node_23437.shadow$old = true);

(new_link_23439.onload = ((function (seq__23156_23380,chunk__23160_23381,count__23161_23382,i__23162_23383,seq__22998,chunk__23000,count__23001,i__23002,new_link_23439,path_match_23438,node_23437,seq__23156_23431__$1,temp__5804__auto___23430,path,map__22997,map__22997__$1,msg,updates,reload_info){
return (function (e){
var seq__23229_23440 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23231_23441 = null;
var count__23232_23442 = (0);
var i__23233_23443 = (0);
while(true){
if((i__23233_23443 < count__23232_23442)){
var map__23237_23444 = chunk__23231_23441.cljs$core$IIndexed$_nth$arity$2(null,i__23233_23443);
var map__23237_23445__$1 = cljs.core.__destructure_map(map__23237_23444);
var task_23446 = map__23237_23445__$1;
var fn_str_23447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23237_23445__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23237_23445__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23449 = goog.getObjectByName(fn_str_23447,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23448)].join(''));

(fn_obj_23449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23449.cljs$core$IFn$_invoke$arity$2(path,new_link_23439) : fn_obj_23449.call(null,path,new_link_23439));


var G__23450 = seq__23229_23440;
var G__23451 = chunk__23231_23441;
var G__23452 = count__23232_23442;
var G__23453 = (i__23233_23443 + (1));
seq__23229_23440 = G__23450;
chunk__23231_23441 = G__23451;
count__23232_23442 = G__23452;
i__23233_23443 = G__23453;
continue;
} else {
var temp__5804__auto___23454__$1 = cljs.core.seq(seq__23229_23440);
if(temp__5804__auto___23454__$1){
var seq__23229_23455__$1 = temp__5804__auto___23454__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23229_23455__$1)){
var c__5568__auto___23456 = cljs.core.chunk_first(seq__23229_23455__$1);
var G__23457 = cljs.core.chunk_rest(seq__23229_23455__$1);
var G__23458 = c__5568__auto___23456;
var G__23459 = cljs.core.count(c__5568__auto___23456);
var G__23460 = (0);
seq__23229_23440 = G__23457;
chunk__23231_23441 = G__23458;
count__23232_23442 = G__23459;
i__23233_23443 = G__23460;
continue;
} else {
var map__23238_23461 = cljs.core.first(seq__23229_23455__$1);
var map__23238_23462__$1 = cljs.core.__destructure_map(map__23238_23461);
var task_23463 = map__23238_23462__$1;
var fn_str_23464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238_23462__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23238_23462__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23466 = goog.getObjectByName(fn_str_23464,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23465)].join(''));

(fn_obj_23466.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23466.cljs$core$IFn$_invoke$arity$2(path,new_link_23439) : fn_obj_23466.call(null,path,new_link_23439));


var G__23467 = cljs.core.next(seq__23229_23455__$1);
var G__23468 = null;
var G__23469 = (0);
var G__23470 = (0);
seq__23229_23440 = G__23467;
chunk__23231_23441 = G__23468;
count__23232_23442 = G__23469;
i__23233_23443 = G__23470;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23437);
});})(seq__23156_23380,chunk__23160_23381,count__23161_23382,i__23162_23383,seq__22998,chunk__23000,count__23001,i__23002,new_link_23439,path_match_23438,node_23437,seq__23156_23431__$1,temp__5804__auto___23430,path,map__22997,map__22997__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23438], 0));

goog.dom.insertSiblingAfter(new_link_23439,node_23437);


var G__23471 = cljs.core.next(seq__23156_23431__$1);
var G__23472 = null;
var G__23473 = (0);
var G__23474 = (0);
seq__23156_23380 = G__23471;
chunk__23160_23381 = G__23472;
count__23161_23382 = G__23473;
i__23162_23383 = G__23474;
continue;
} else {
var G__23475 = cljs.core.next(seq__23156_23431__$1);
var G__23476 = null;
var G__23477 = (0);
var G__23478 = (0);
seq__23156_23380 = G__23475;
chunk__23160_23381 = G__23476;
count__23161_23382 = G__23477;
i__23162_23383 = G__23478;
continue;
}
} else {
var G__23479 = cljs.core.next(seq__23156_23431__$1);
var G__23480 = null;
var G__23481 = (0);
var G__23482 = (0);
seq__23156_23380 = G__23479;
chunk__23160_23381 = G__23480;
count__23161_23382 = G__23481;
i__23162_23383 = G__23482;
continue;
}
}
} else {
}
}
break;
}


var G__23483 = seq__22998;
var G__23484 = chunk__23000;
var G__23485 = count__23001;
var G__23486 = (i__23002 + (1));
seq__22998 = G__23483;
chunk__23000 = G__23484;
count__23001 = G__23485;
i__23002 = G__23486;
continue;
} else {
var G__23487 = seq__22998;
var G__23488 = chunk__23000;
var G__23489 = count__23001;
var G__23490 = (i__23002 + (1));
seq__22998 = G__23487;
chunk__23000 = G__23488;
count__23001 = G__23489;
i__23002 = G__23490;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22998);
if(temp__5804__auto__){
var seq__22998__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22998__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22998__$1);
var G__23491 = cljs.core.chunk_rest(seq__22998__$1);
var G__23492 = c__5568__auto__;
var G__23493 = cljs.core.count(c__5568__auto__);
var G__23494 = (0);
seq__22998 = G__23491;
chunk__23000 = G__23492;
count__23001 = G__23493;
i__23002 = G__23494;
continue;
} else {
var path = cljs.core.first(seq__22998__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23239_23495 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23243_23496 = null;
var count__23244_23497 = (0);
var i__23245_23498 = (0);
while(true){
if((i__23245_23498 < count__23244_23497)){
var node_23499 = chunk__23243_23496.cljs$core$IIndexed$_nth$arity$2(null,i__23245_23498);
if(cljs.core.not(node_23499.shadow$old)){
var path_match_23500 = shadow.cljs.devtools.client.browser.match_paths(node_23499.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23500)){
var new_link_23501 = (function (){var G__23271 = node_23499.cloneNode(true);
G__23271.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23500),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23271;
})();
(node_23499.shadow$old = true);

(new_link_23501.onload = ((function (seq__23239_23495,chunk__23243_23496,count__23244_23497,i__23245_23498,seq__22998,chunk__23000,count__23001,i__23002,new_link_23501,path_match_23500,node_23499,path,seq__22998__$1,temp__5804__auto__,map__22997,map__22997__$1,msg,updates,reload_info){
return (function (e){
var seq__23272_23502 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23274_23503 = null;
var count__23275_23504 = (0);
var i__23276_23505 = (0);
while(true){
if((i__23276_23505 < count__23275_23504)){
var map__23280_23506 = chunk__23274_23503.cljs$core$IIndexed$_nth$arity$2(null,i__23276_23505);
var map__23280_23507__$1 = cljs.core.__destructure_map(map__23280_23506);
var task_23508 = map__23280_23507__$1;
var fn_str_23509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23280_23507__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23280_23507__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23511 = goog.getObjectByName(fn_str_23509,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23510)].join(''));

(fn_obj_23511.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23511.cljs$core$IFn$_invoke$arity$2(path,new_link_23501) : fn_obj_23511.call(null,path,new_link_23501));


var G__23512 = seq__23272_23502;
var G__23513 = chunk__23274_23503;
var G__23514 = count__23275_23504;
var G__23515 = (i__23276_23505 + (1));
seq__23272_23502 = G__23512;
chunk__23274_23503 = G__23513;
count__23275_23504 = G__23514;
i__23276_23505 = G__23515;
continue;
} else {
var temp__5804__auto___23516__$1 = cljs.core.seq(seq__23272_23502);
if(temp__5804__auto___23516__$1){
var seq__23272_23517__$1 = temp__5804__auto___23516__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23272_23517__$1)){
var c__5568__auto___23518 = cljs.core.chunk_first(seq__23272_23517__$1);
var G__23519 = cljs.core.chunk_rest(seq__23272_23517__$1);
var G__23520 = c__5568__auto___23518;
var G__23521 = cljs.core.count(c__5568__auto___23518);
var G__23522 = (0);
seq__23272_23502 = G__23519;
chunk__23274_23503 = G__23520;
count__23275_23504 = G__23521;
i__23276_23505 = G__23522;
continue;
} else {
var map__23281_23523 = cljs.core.first(seq__23272_23517__$1);
var map__23281_23524__$1 = cljs.core.__destructure_map(map__23281_23523);
var task_23525 = map__23281_23524__$1;
var fn_str_23526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23281_23524__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23281_23524__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23528 = goog.getObjectByName(fn_str_23526,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23527)].join(''));

(fn_obj_23528.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23528.cljs$core$IFn$_invoke$arity$2(path,new_link_23501) : fn_obj_23528.call(null,path,new_link_23501));


var G__23529 = cljs.core.next(seq__23272_23517__$1);
var G__23530 = null;
var G__23531 = (0);
var G__23532 = (0);
seq__23272_23502 = G__23529;
chunk__23274_23503 = G__23530;
count__23275_23504 = G__23531;
i__23276_23505 = G__23532;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23499);
});})(seq__23239_23495,chunk__23243_23496,count__23244_23497,i__23245_23498,seq__22998,chunk__23000,count__23001,i__23002,new_link_23501,path_match_23500,node_23499,path,seq__22998__$1,temp__5804__auto__,map__22997,map__22997__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23500], 0));

goog.dom.insertSiblingAfter(new_link_23501,node_23499);


var G__23533 = seq__23239_23495;
var G__23534 = chunk__23243_23496;
var G__23535 = count__23244_23497;
var G__23536 = (i__23245_23498 + (1));
seq__23239_23495 = G__23533;
chunk__23243_23496 = G__23534;
count__23244_23497 = G__23535;
i__23245_23498 = G__23536;
continue;
} else {
var G__23537 = seq__23239_23495;
var G__23538 = chunk__23243_23496;
var G__23539 = count__23244_23497;
var G__23540 = (i__23245_23498 + (1));
seq__23239_23495 = G__23537;
chunk__23243_23496 = G__23538;
count__23244_23497 = G__23539;
i__23245_23498 = G__23540;
continue;
}
} else {
var G__23541 = seq__23239_23495;
var G__23542 = chunk__23243_23496;
var G__23543 = count__23244_23497;
var G__23544 = (i__23245_23498 + (1));
seq__23239_23495 = G__23541;
chunk__23243_23496 = G__23542;
count__23244_23497 = G__23543;
i__23245_23498 = G__23544;
continue;
}
} else {
var temp__5804__auto___23545__$1 = cljs.core.seq(seq__23239_23495);
if(temp__5804__auto___23545__$1){
var seq__23239_23546__$1 = temp__5804__auto___23545__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23239_23546__$1)){
var c__5568__auto___23547 = cljs.core.chunk_first(seq__23239_23546__$1);
var G__23548 = cljs.core.chunk_rest(seq__23239_23546__$1);
var G__23549 = c__5568__auto___23547;
var G__23550 = cljs.core.count(c__5568__auto___23547);
var G__23551 = (0);
seq__23239_23495 = G__23548;
chunk__23243_23496 = G__23549;
count__23244_23497 = G__23550;
i__23245_23498 = G__23551;
continue;
} else {
var node_23552 = cljs.core.first(seq__23239_23546__$1);
if(cljs.core.not(node_23552.shadow$old)){
var path_match_23553 = shadow.cljs.devtools.client.browser.match_paths(node_23552.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23553)){
var new_link_23554 = (function (){var G__23282 = node_23552.cloneNode(true);
G__23282.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23553),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23282;
})();
(node_23552.shadow$old = true);

(new_link_23554.onload = ((function (seq__23239_23495,chunk__23243_23496,count__23244_23497,i__23245_23498,seq__22998,chunk__23000,count__23001,i__23002,new_link_23554,path_match_23553,node_23552,seq__23239_23546__$1,temp__5804__auto___23545__$1,path,seq__22998__$1,temp__5804__auto__,map__22997,map__22997__$1,msg,updates,reload_info){
return (function (e){
var seq__23283_23555 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23285_23556 = null;
var count__23286_23557 = (0);
var i__23287_23558 = (0);
while(true){
if((i__23287_23558 < count__23286_23557)){
var map__23291_23559 = chunk__23285_23556.cljs$core$IIndexed$_nth$arity$2(null,i__23287_23558);
var map__23291_23560__$1 = cljs.core.__destructure_map(map__23291_23559);
var task_23561 = map__23291_23560__$1;
var fn_str_23562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291_23560__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291_23560__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23564 = goog.getObjectByName(fn_str_23562,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23563)].join(''));

(fn_obj_23564.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23564.cljs$core$IFn$_invoke$arity$2(path,new_link_23554) : fn_obj_23564.call(null,path,new_link_23554));


var G__23565 = seq__23283_23555;
var G__23566 = chunk__23285_23556;
var G__23567 = count__23286_23557;
var G__23568 = (i__23287_23558 + (1));
seq__23283_23555 = G__23565;
chunk__23285_23556 = G__23566;
count__23286_23557 = G__23567;
i__23287_23558 = G__23568;
continue;
} else {
var temp__5804__auto___23569__$2 = cljs.core.seq(seq__23283_23555);
if(temp__5804__auto___23569__$2){
var seq__23283_23570__$1 = temp__5804__auto___23569__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23283_23570__$1)){
var c__5568__auto___23571 = cljs.core.chunk_first(seq__23283_23570__$1);
var G__23572 = cljs.core.chunk_rest(seq__23283_23570__$1);
var G__23573 = c__5568__auto___23571;
var G__23574 = cljs.core.count(c__5568__auto___23571);
var G__23575 = (0);
seq__23283_23555 = G__23572;
chunk__23285_23556 = G__23573;
count__23286_23557 = G__23574;
i__23287_23558 = G__23575;
continue;
} else {
var map__23292_23576 = cljs.core.first(seq__23283_23570__$1);
var map__23292_23577__$1 = cljs.core.__destructure_map(map__23292_23576);
var task_23578 = map__23292_23577__$1;
var fn_str_23579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23292_23577__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23292_23577__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23581 = goog.getObjectByName(fn_str_23579,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23580)].join(''));

(fn_obj_23581.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23581.cljs$core$IFn$_invoke$arity$2(path,new_link_23554) : fn_obj_23581.call(null,path,new_link_23554));


var G__23582 = cljs.core.next(seq__23283_23570__$1);
var G__23583 = null;
var G__23584 = (0);
var G__23585 = (0);
seq__23283_23555 = G__23582;
chunk__23285_23556 = G__23583;
count__23286_23557 = G__23584;
i__23287_23558 = G__23585;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23552);
});})(seq__23239_23495,chunk__23243_23496,count__23244_23497,i__23245_23498,seq__22998,chunk__23000,count__23001,i__23002,new_link_23554,path_match_23553,node_23552,seq__23239_23546__$1,temp__5804__auto___23545__$1,path,seq__22998__$1,temp__5804__auto__,map__22997,map__22997__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23553], 0));

goog.dom.insertSiblingAfter(new_link_23554,node_23552);


var G__23586 = cljs.core.next(seq__23239_23546__$1);
var G__23587 = null;
var G__23588 = (0);
var G__23589 = (0);
seq__23239_23495 = G__23586;
chunk__23243_23496 = G__23587;
count__23244_23497 = G__23588;
i__23245_23498 = G__23589;
continue;
} else {
var G__23590 = cljs.core.next(seq__23239_23546__$1);
var G__23591 = null;
var G__23592 = (0);
var G__23593 = (0);
seq__23239_23495 = G__23590;
chunk__23243_23496 = G__23591;
count__23244_23497 = G__23592;
i__23245_23498 = G__23593;
continue;
}
} else {
var G__23594 = cljs.core.next(seq__23239_23546__$1);
var G__23595 = null;
var G__23596 = (0);
var G__23597 = (0);
seq__23239_23495 = G__23594;
chunk__23243_23496 = G__23595;
count__23244_23497 = G__23596;
i__23245_23498 = G__23597;
continue;
}
}
} else {
}
}
break;
}


var G__23598 = cljs.core.next(seq__22998__$1);
var G__23599 = null;
var G__23600 = (0);
var G__23601 = (0);
seq__22998 = G__23598;
chunk__23000 = G__23599;
count__23001 = G__23600;
i__23002 = G__23601;
continue;
} else {
var G__23602 = cljs.core.next(seq__22998__$1);
var G__23603 = null;
var G__23604 = (0);
var G__23605 = (0);
seq__22998 = G__23602;
chunk__23000 = G__23603;
count__23001 = G__23604;
i__23002 = G__23605;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__23293){
var map__23294 = p__23293;
var map__23294__$1 = cljs.core.__destructure_map(map__23294);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23294__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__23295){
var map__23296 = p__23295;
var map__23296__$1 = cljs.core.__destructure_map(map__23296);
var _ = map__23296__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23296__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23297,done,error){
var map__23298 = p__23297;
var map__23298__$1 = cljs.core.__destructure_map(map__23298);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23298__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23299,done,error){
var map__23300 = p__23299;
var map__23300__$1 = cljs.core.__destructure_map(map__23300);
var msg = map__23300__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23300__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23300__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23300__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23301){
var map__23302 = p__23301;
var map__23302__$1 = cljs.core.__destructure_map(map__23302);
var src = map__23302__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23302__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23303 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23303) : done.call(null,G__23303));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23304){
var map__23305 = p__23304;
var map__23305__$1 = cljs.core.__destructure_map(map__23305);
var msg__$1 = map__23305__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23306){var ex = e23306;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23307){
var map__23308 = p__23307;
var map__23308__$1 = cljs.core.__destructure_map(map__23308);
var env = map__23308__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23308__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23309){
var map__23310 = p__23309;
var map__23310__$1 = cljs.core.__destructure_map(map__23310);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23311){
var map__23312 = p__23311;
var map__23312__$1 = cljs.core.__destructure_map(map__23312);
var svc = map__23312__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
