goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23786 = arguments.length;
var i__5770__auto___23787 = (0);
while(true){
if((i__5770__auto___23787 < len__5769__auto___23786)){
args__5775__auto__.push((arguments[i__5770__auto___23787]));

var G__23788 = (i__5770__auto___23787 + (1));
i__5770__auto___23787 = G__23788;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23086){
var G__23087 = cljs.core.first(seq23086);
var seq23086__$1 = cljs.core.next(seq23086);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23087,seq23086__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23093 = cljs.core.seq(sources);
var chunk__23094 = null;
var count__23095 = (0);
var i__23096 = (0);
while(true){
if((i__23096 < count__23095)){
var map__23107 = chunk__23094.cljs$core$IIndexed$_nth$arity$2(null,i__23096);
var map__23107__$1 = cljs.core.__destructure_map(map__23107);
var src = map__23107__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23107__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23107__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23107__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23107__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23110){var e_23789 = e23110;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23789);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23789.message)].join('')));
}

var G__23790 = seq__23093;
var G__23791 = chunk__23094;
var G__23792 = count__23095;
var G__23793 = (i__23096 + (1));
seq__23093 = G__23790;
chunk__23094 = G__23791;
count__23095 = G__23792;
i__23096 = G__23793;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23093);
if(temp__5804__auto__){
var seq__23093__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23093__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23093__$1);
var G__23794 = cljs.core.chunk_rest(seq__23093__$1);
var G__23795 = c__5568__auto__;
var G__23796 = cljs.core.count(c__5568__auto__);
var G__23797 = (0);
seq__23093 = G__23794;
chunk__23094 = G__23795;
count__23095 = G__23796;
i__23096 = G__23797;
continue;
} else {
var map__23112 = cljs.core.first(seq__23093__$1);
var map__23112__$1 = cljs.core.__destructure_map(map__23112);
var src = map__23112__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23112__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23112__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23112__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23112__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23118){var e_23801 = e23118;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23801);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23801.message)].join('')));
}

var G__23803 = cljs.core.next(seq__23093__$1);
var G__23804 = null;
var G__23805 = (0);
var G__23806 = (0);
seq__23093 = G__23803;
chunk__23094 = G__23804;
count__23095 = G__23805;
i__23096 = G__23806;
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
var seq__23128 = cljs.core.seq(js_requires);
var chunk__23129 = null;
var count__23130 = (0);
var i__23131 = (0);
while(true){
if((i__23131 < count__23130)){
var js_ns = chunk__23129.cljs$core$IIndexed$_nth$arity$2(null,i__23131);
var require_str_23807 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23807);


var G__23808 = seq__23128;
var G__23809 = chunk__23129;
var G__23810 = count__23130;
var G__23811 = (i__23131 + (1));
seq__23128 = G__23808;
chunk__23129 = G__23809;
count__23130 = G__23810;
i__23131 = G__23811;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23128);
if(temp__5804__auto__){
var seq__23128__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23128__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23128__$1);
var G__23812 = cljs.core.chunk_rest(seq__23128__$1);
var G__23813 = c__5568__auto__;
var G__23814 = cljs.core.count(c__5568__auto__);
var G__23815 = (0);
seq__23128 = G__23812;
chunk__23129 = G__23813;
count__23130 = G__23814;
i__23131 = G__23815;
continue;
} else {
var js_ns = cljs.core.first(seq__23128__$1);
var require_str_23816 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23816);


var G__23818 = cljs.core.next(seq__23128__$1);
var G__23819 = null;
var G__23820 = (0);
var G__23821 = (0);
seq__23128 = G__23818;
chunk__23129 = G__23819;
count__23130 = G__23820;
i__23131 = G__23821;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23139){
var map__23140 = p__23139;
var map__23140__$1 = cljs.core.__destructure_map(map__23140);
var msg = map__23140__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23140__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23140__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23143(s__23144){
return (new cljs.core.LazySeq(null,(function (){
var s__23144__$1 = s__23144;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23144__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__23153 = cljs.core.first(xs__6360__auto__);
var map__23153__$1 = cljs.core.__destructure_map(map__23153);
var src = map__23153__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23153__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23153__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__23144__$1,map__23153,map__23153__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23140,map__23140__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23143_$_iter__23145(s__23146){
return (new cljs.core.LazySeq(null,((function (s__23144__$1,map__23153,map__23153__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23140,map__23140__$1,msg,info,reload_info){
return (function (){
var s__23146__$1 = s__23146;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23146__$1);
if(temp__5804__auto____$1){
var s__23146__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23146__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23146__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23149 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23148 = (0);
while(true){
if((i__23148 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__23148);
cljs.core.chunk_append(b__23149,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23838 = (i__23148 + (1));
i__23148 = G__23838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23149),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23143_$_iter__23145(cljs.core.chunk_rest(s__23146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23149),null);
}
} else {
var warning = cljs.core.first(s__23146__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23143_$_iter__23145(cljs.core.rest(s__23146__$2)));
}
} else {
return null;
}
break;
}
});})(s__23144__$1,map__23153,map__23153__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23140,map__23140__$1,msg,info,reload_info))
,null,null));
});})(s__23144__$1,map__23153,map__23153__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23140,map__23140__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23143(cljs.core.rest(s__23144__$1)));
} else {
var G__23850 = cljs.core.rest(s__23144__$1);
s__23144__$1 = G__23850;
continue;
}
} else {
var G__23851 = cljs.core.rest(s__23144__$1);
s__23144__$1 = G__23851;
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
var seq__23165_23852 = cljs.core.seq(warnings);
var chunk__23166_23853 = null;
var count__23167_23854 = (0);
var i__23168_23855 = (0);
while(true){
if((i__23168_23855 < count__23167_23854)){
var map__23173_23856 = chunk__23166_23853.cljs$core$IIndexed$_nth$arity$2(null,i__23168_23855);
var map__23173_23857__$1 = cljs.core.__destructure_map(map__23173_23856);
var w_23858 = map__23173_23857__$1;
var msg_23859__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173_23857__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173_23857__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173_23857__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173_23857__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23862)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23860),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23861),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23859__$1)].join(''));


var G__23864 = seq__23165_23852;
var G__23865 = chunk__23166_23853;
var G__23866 = count__23167_23854;
var G__23867 = (i__23168_23855 + (1));
seq__23165_23852 = G__23864;
chunk__23166_23853 = G__23865;
count__23167_23854 = G__23866;
i__23168_23855 = G__23867;
continue;
} else {
var temp__5804__auto___23868 = cljs.core.seq(seq__23165_23852);
if(temp__5804__auto___23868){
var seq__23165_23869__$1 = temp__5804__auto___23868;
if(cljs.core.chunked_seq_QMARK_(seq__23165_23869__$1)){
var c__5568__auto___23870 = cljs.core.chunk_first(seq__23165_23869__$1);
var G__23871 = cljs.core.chunk_rest(seq__23165_23869__$1);
var G__23872 = c__5568__auto___23870;
var G__23873 = cljs.core.count(c__5568__auto___23870);
var G__23874 = (0);
seq__23165_23852 = G__23871;
chunk__23166_23853 = G__23872;
count__23167_23854 = G__23873;
i__23168_23855 = G__23874;
continue;
} else {
var map__23175_23875 = cljs.core.first(seq__23165_23869__$1);
var map__23175_23876__$1 = cljs.core.__destructure_map(map__23175_23875);
var w_23877 = map__23175_23876__$1;
var msg_23878__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175_23876__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175_23876__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175_23876__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175_23876__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23881)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23879),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23880),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23878__$1)].join(''));


var G__23882 = cljs.core.next(seq__23165_23869__$1);
var G__23883 = null;
var G__23884 = (0);
var G__23885 = (0);
seq__23165_23852 = G__23882;
chunk__23166_23853 = G__23883;
count__23167_23854 = G__23884;
i__23168_23855 = G__23885;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23138_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23138_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23176){
var map__23177 = p__23176;
var map__23177__$1 = cljs.core.__destructure_map(map__23177);
var msg = map__23177__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23177__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23177__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23178 = cljs.core.seq(updates);
var chunk__23180 = null;
var count__23181 = (0);
var i__23182 = (0);
while(true){
if((i__23182 < count__23181)){
var path = chunk__23180.cljs$core$IIndexed$_nth$arity$2(null,i__23182);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23389_23896 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23393_23898 = null;
var count__23394_23899 = (0);
var i__23395_23900 = (0);
while(true){
if((i__23395_23900 < count__23394_23899)){
var node_23901 = chunk__23393_23898.cljs$core$IIndexed$_nth$arity$2(null,i__23395_23900);
if(cljs.core.not(node_23901.shadow$old)){
var path_match_23902 = shadow.cljs.devtools.client.browser.match_paths(node_23901.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23902)){
var new_link_23903 = (function (){var G__23508 = node_23901.cloneNode(true);
G__23508.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23902),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23508;
})();
(node_23901.shadow$old = true);

(new_link_23903.onload = ((function (seq__23389_23896,chunk__23393_23898,count__23394_23899,i__23395_23900,seq__23178,chunk__23180,count__23181,i__23182,new_link_23903,path_match_23902,node_23901,path,map__23177,map__23177__$1,msg,updates,reload_info){
return (function (e){
var seq__23513_23904 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23515_23905 = null;
var count__23516_23906 = (0);
var i__23517_23907 = (0);
while(true){
if((i__23517_23907 < count__23516_23906)){
var map__23532_23908 = chunk__23515_23905.cljs$core$IIndexed$_nth$arity$2(null,i__23517_23907);
var map__23532_23909__$1 = cljs.core.__destructure_map(map__23532_23908);
var task_23910 = map__23532_23909__$1;
var fn_str_23911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23532_23909__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23532_23909__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23915 = goog.getObjectByName(fn_str_23911,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23912)].join(''));

(fn_obj_23915.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23915.cljs$core$IFn$_invoke$arity$2(path,new_link_23903) : fn_obj_23915.call(null,path,new_link_23903));


var G__23918 = seq__23513_23904;
var G__23919 = chunk__23515_23905;
var G__23920 = count__23516_23906;
var G__23921 = (i__23517_23907 + (1));
seq__23513_23904 = G__23918;
chunk__23515_23905 = G__23919;
count__23516_23906 = G__23920;
i__23517_23907 = G__23921;
continue;
} else {
var temp__5804__auto___23922 = cljs.core.seq(seq__23513_23904);
if(temp__5804__auto___23922){
var seq__23513_23923__$1 = temp__5804__auto___23922;
if(cljs.core.chunked_seq_QMARK_(seq__23513_23923__$1)){
var c__5568__auto___23924 = cljs.core.chunk_first(seq__23513_23923__$1);
var G__23925 = cljs.core.chunk_rest(seq__23513_23923__$1);
var G__23926 = c__5568__auto___23924;
var G__23927 = cljs.core.count(c__5568__auto___23924);
var G__23928 = (0);
seq__23513_23904 = G__23925;
chunk__23515_23905 = G__23926;
count__23516_23906 = G__23927;
i__23517_23907 = G__23928;
continue;
} else {
var map__23535_23929 = cljs.core.first(seq__23513_23923__$1);
var map__23535_23930__$1 = cljs.core.__destructure_map(map__23535_23929);
var task_23931 = map__23535_23930__$1;
var fn_str_23932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535_23930__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535_23930__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23934 = goog.getObjectByName(fn_str_23932,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23933)].join(''));

(fn_obj_23934.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23934.cljs$core$IFn$_invoke$arity$2(path,new_link_23903) : fn_obj_23934.call(null,path,new_link_23903));


var G__23938 = cljs.core.next(seq__23513_23923__$1);
var G__23939 = null;
var G__23940 = (0);
var G__23941 = (0);
seq__23513_23904 = G__23938;
chunk__23515_23905 = G__23939;
count__23516_23906 = G__23940;
i__23517_23907 = G__23941;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23901);
});})(seq__23389_23896,chunk__23393_23898,count__23394_23899,i__23395_23900,seq__23178,chunk__23180,count__23181,i__23182,new_link_23903,path_match_23902,node_23901,path,map__23177,map__23177__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23902], 0));

goog.dom.insertSiblingAfter(new_link_23903,node_23901);


var G__23945 = seq__23389_23896;
var G__23946 = chunk__23393_23898;
var G__23947 = count__23394_23899;
var G__23948 = (i__23395_23900 + (1));
seq__23389_23896 = G__23945;
chunk__23393_23898 = G__23946;
count__23394_23899 = G__23947;
i__23395_23900 = G__23948;
continue;
} else {
var G__23949 = seq__23389_23896;
var G__23950 = chunk__23393_23898;
var G__23951 = count__23394_23899;
var G__23952 = (i__23395_23900 + (1));
seq__23389_23896 = G__23949;
chunk__23393_23898 = G__23950;
count__23394_23899 = G__23951;
i__23395_23900 = G__23952;
continue;
}
} else {
var G__23953 = seq__23389_23896;
var G__23954 = chunk__23393_23898;
var G__23955 = count__23394_23899;
var G__23956 = (i__23395_23900 + (1));
seq__23389_23896 = G__23953;
chunk__23393_23898 = G__23954;
count__23394_23899 = G__23955;
i__23395_23900 = G__23956;
continue;
}
} else {
var temp__5804__auto___23957 = cljs.core.seq(seq__23389_23896);
if(temp__5804__auto___23957){
var seq__23389_23958__$1 = temp__5804__auto___23957;
if(cljs.core.chunked_seq_QMARK_(seq__23389_23958__$1)){
var c__5568__auto___23960 = cljs.core.chunk_first(seq__23389_23958__$1);
var G__23962 = cljs.core.chunk_rest(seq__23389_23958__$1);
var G__23963 = c__5568__auto___23960;
var G__23964 = cljs.core.count(c__5568__auto___23960);
var G__23965 = (0);
seq__23389_23896 = G__23962;
chunk__23393_23898 = G__23963;
count__23394_23899 = G__23964;
i__23395_23900 = G__23965;
continue;
} else {
var node_23967 = cljs.core.first(seq__23389_23958__$1);
if(cljs.core.not(node_23967.shadow$old)){
var path_match_23968 = shadow.cljs.devtools.client.browser.match_paths(node_23967.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23968)){
var new_link_23969 = (function (){var G__23567 = node_23967.cloneNode(true);
G__23567.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23968),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23567;
})();
(node_23967.shadow$old = true);

(new_link_23969.onload = ((function (seq__23389_23896,chunk__23393_23898,count__23394_23899,i__23395_23900,seq__23178,chunk__23180,count__23181,i__23182,new_link_23969,path_match_23968,node_23967,seq__23389_23958__$1,temp__5804__auto___23957,path,map__23177,map__23177__$1,msg,updates,reload_info){
return (function (e){
var seq__23575_23970 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23577_23971 = null;
var count__23578_23972 = (0);
var i__23579_23973 = (0);
while(true){
if((i__23579_23973 < count__23578_23972)){
var map__23591_23977 = chunk__23577_23971.cljs$core$IIndexed$_nth$arity$2(null,i__23579_23973);
var map__23591_23978__$1 = cljs.core.__destructure_map(map__23591_23977);
var task_23979 = map__23591_23978__$1;
var fn_str_23980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23591_23978__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23591_23978__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23985 = goog.getObjectByName(fn_str_23980,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23981)].join(''));

(fn_obj_23985.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23985.cljs$core$IFn$_invoke$arity$2(path,new_link_23969) : fn_obj_23985.call(null,path,new_link_23969));


var G__23986 = seq__23575_23970;
var G__23987 = chunk__23577_23971;
var G__23988 = count__23578_23972;
var G__23989 = (i__23579_23973 + (1));
seq__23575_23970 = G__23986;
chunk__23577_23971 = G__23987;
count__23578_23972 = G__23988;
i__23579_23973 = G__23989;
continue;
} else {
var temp__5804__auto___23990__$1 = cljs.core.seq(seq__23575_23970);
if(temp__5804__auto___23990__$1){
var seq__23575_23991__$1 = temp__5804__auto___23990__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23575_23991__$1)){
var c__5568__auto___23992 = cljs.core.chunk_first(seq__23575_23991__$1);
var G__23993 = cljs.core.chunk_rest(seq__23575_23991__$1);
var G__23994 = c__5568__auto___23992;
var G__23995 = cljs.core.count(c__5568__auto___23992);
var G__23996 = (0);
seq__23575_23970 = G__23993;
chunk__23577_23971 = G__23994;
count__23578_23972 = G__23995;
i__23579_23973 = G__23996;
continue;
} else {
var map__23595_23997 = cljs.core.first(seq__23575_23991__$1);
var map__23595_23998__$1 = cljs.core.__destructure_map(map__23595_23997);
var task_23999 = map__23595_23998__$1;
var fn_str_24000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23595_23998__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23595_23998__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24002 = goog.getObjectByName(fn_str_24000,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24001)].join(''));

(fn_obj_24002.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24002.cljs$core$IFn$_invoke$arity$2(path,new_link_23969) : fn_obj_24002.call(null,path,new_link_23969));


var G__24005 = cljs.core.next(seq__23575_23991__$1);
var G__24006 = null;
var G__24007 = (0);
var G__24008 = (0);
seq__23575_23970 = G__24005;
chunk__23577_23971 = G__24006;
count__23578_23972 = G__24007;
i__23579_23973 = G__24008;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23967);
});})(seq__23389_23896,chunk__23393_23898,count__23394_23899,i__23395_23900,seq__23178,chunk__23180,count__23181,i__23182,new_link_23969,path_match_23968,node_23967,seq__23389_23958__$1,temp__5804__auto___23957,path,map__23177,map__23177__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23968], 0));

goog.dom.insertSiblingAfter(new_link_23969,node_23967);


var G__24010 = cljs.core.next(seq__23389_23958__$1);
var G__24011 = null;
var G__24012 = (0);
var G__24013 = (0);
seq__23389_23896 = G__24010;
chunk__23393_23898 = G__24011;
count__23394_23899 = G__24012;
i__23395_23900 = G__24013;
continue;
} else {
var G__24014 = cljs.core.next(seq__23389_23958__$1);
var G__24015 = null;
var G__24016 = (0);
var G__24017 = (0);
seq__23389_23896 = G__24014;
chunk__23393_23898 = G__24015;
count__23394_23899 = G__24016;
i__23395_23900 = G__24017;
continue;
}
} else {
var G__24018 = cljs.core.next(seq__23389_23958__$1);
var G__24019 = null;
var G__24020 = (0);
var G__24021 = (0);
seq__23389_23896 = G__24018;
chunk__23393_23898 = G__24019;
count__23394_23899 = G__24020;
i__23395_23900 = G__24021;
continue;
}
}
} else {
}
}
break;
}


var G__24025 = seq__23178;
var G__24026 = chunk__23180;
var G__24027 = count__23181;
var G__24028 = (i__23182 + (1));
seq__23178 = G__24025;
chunk__23180 = G__24026;
count__23181 = G__24027;
i__23182 = G__24028;
continue;
} else {
var G__24030 = seq__23178;
var G__24031 = chunk__23180;
var G__24032 = count__23181;
var G__24033 = (i__23182 + (1));
seq__23178 = G__24030;
chunk__23180 = G__24031;
count__23181 = G__24032;
i__23182 = G__24033;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23178);
if(temp__5804__auto__){
var seq__23178__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23178__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23178__$1);
var G__24035 = cljs.core.chunk_rest(seq__23178__$1);
var G__24036 = c__5568__auto__;
var G__24037 = cljs.core.count(c__5568__auto__);
var G__24038 = (0);
seq__23178 = G__24035;
chunk__23180 = G__24036;
count__23181 = G__24037;
i__23182 = G__24038;
continue;
} else {
var path = cljs.core.first(seq__23178__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23602_24039 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23606_24040 = null;
var count__23607_24041 = (0);
var i__23608_24042 = (0);
while(true){
if((i__23608_24042 < count__23607_24041)){
var node_24043 = chunk__23606_24040.cljs$core$IIndexed$_nth$arity$2(null,i__23608_24042);
if(cljs.core.not(node_24043.shadow$old)){
var path_match_24044 = shadow.cljs.devtools.client.browser.match_paths(node_24043.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24044)){
var new_link_24045 = (function (){var G__23658 = node_24043.cloneNode(true);
G__23658.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24044),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23658;
})();
(node_24043.shadow$old = true);

(new_link_24045.onload = ((function (seq__23602_24039,chunk__23606_24040,count__23607_24041,i__23608_24042,seq__23178,chunk__23180,count__23181,i__23182,new_link_24045,path_match_24044,node_24043,path,seq__23178__$1,temp__5804__auto__,map__23177,map__23177__$1,msg,updates,reload_info){
return (function (e){
var seq__23663_24048 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23665_24049 = null;
var count__23666_24050 = (0);
var i__23667_24051 = (0);
while(true){
if((i__23667_24051 < count__23666_24050)){
var map__23673_24053 = chunk__23665_24049.cljs$core$IIndexed$_nth$arity$2(null,i__23667_24051);
var map__23673_24054__$1 = cljs.core.__destructure_map(map__23673_24053);
var task_24055 = map__23673_24054__$1;
var fn_str_24056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23673_24054__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23673_24054__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24059 = goog.getObjectByName(fn_str_24056,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24057)].join(''));

(fn_obj_24059.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24059.cljs$core$IFn$_invoke$arity$2(path,new_link_24045) : fn_obj_24059.call(null,path,new_link_24045));


var G__24060 = seq__23663_24048;
var G__24061 = chunk__23665_24049;
var G__24062 = count__23666_24050;
var G__24063 = (i__23667_24051 + (1));
seq__23663_24048 = G__24060;
chunk__23665_24049 = G__24061;
count__23666_24050 = G__24062;
i__23667_24051 = G__24063;
continue;
} else {
var temp__5804__auto___24064__$1 = cljs.core.seq(seq__23663_24048);
if(temp__5804__auto___24064__$1){
var seq__23663_24065__$1 = temp__5804__auto___24064__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23663_24065__$1)){
var c__5568__auto___24066 = cljs.core.chunk_first(seq__23663_24065__$1);
var G__24067 = cljs.core.chunk_rest(seq__23663_24065__$1);
var G__24068 = c__5568__auto___24066;
var G__24069 = cljs.core.count(c__5568__auto___24066);
var G__24070 = (0);
seq__23663_24048 = G__24067;
chunk__23665_24049 = G__24068;
count__23666_24050 = G__24069;
i__23667_24051 = G__24070;
continue;
} else {
var map__23683_24072 = cljs.core.first(seq__23663_24065__$1);
var map__23683_24073__$1 = cljs.core.__destructure_map(map__23683_24072);
var task_24074 = map__23683_24073__$1;
var fn_str_24075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683_24073__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683_24073__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24080 = goog.getObjectByName(fn_str_24075,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24076)].join(''));

(fn_obj_24080.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24080.cljs$core$IFn$_invoke$arity$2(path,new_link_24045) : fn_obj_24080.call(null,path,new_link_24045));


var G__24083 = cljs.core.next(seq__23663_24065__$1);
var G__24084 = null;
var G__24085 = (0);
var G__24086 = (0);
seq__23663_24048 = G__24083;
chunk__23665_24049 = G__24084;
count__23666_24050 = G__24085;
i__23667_24051 = G__24086;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24043);
});})(seq__23602_24039,chunk__23606_24040,count__23607_24041,i__23608_24042,seq__23178,chunk__23180,count__23181,i__23182,new_link_24045,path_match_24044,node_24043,path,seq__23178__$1,temp__5804__auto__,map__23177,map__23177__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24044], 0));

goog.dom.insertSiblingAfter(new_link_24045,node_24043);


var G__24088 = seq__23602_24039;
var G__24089 = chunk__23606_24040;
var G__24090 = count__23607_24041;
var G__24091 = (i__23608_24042 + (1));
seq__23602_24039 = G__24088;
chunk__23606_24040 = G__24089;
count__23607_24041 = G__24090;
i__23608_24042 = G__24091;
continue;
} else {
var G__24092 = seq__23602_24039;
var G__24093 = chunk__23606_24040;
var G__24094 = count__23607_24041;
var G__24095 = (i__23608_24042 + (1));
seq__23602_24039 = G__24092;
chunk__23606_24040 = G__24093;
count__23607_24041 = G__24094;
i__23608_24042 = G__24095;
continue;
}
} else {
var G__24096 = seq__23602_24039;
var G__24097 = chunk__23606_24040;
var G__24098 = count__23607_24041;
var G__24099 = (i__23608_24042 + (1));
seq__23602_24039 = G__24096;
chunk__23606_24040 = G__24097;
count__23607_24041 = G__24098;
i__23608_24042 = G__24099;
continue;
}
} else {
var temp__5804__auto___24102__$1 = cljs.core.seq(seq__23602_24039);
if(temp__5804__auto___24102__$1){
var seq__23602_24104__$1 = temp__5804__auto___24102__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23602_24104__$1)){
var c__5568__auto___24105 = cljs.core.chunk_first(seq__23602_24104__$1);
var G__24106 = cljs.core.chunk_rest(seq__23602_24104__$1);
var G__24107 = c__5568__auto___24105;
var G__24108 = cljs.core.count(c__5568__auto___24105);
var G__24109 = (0);
seq__23602_24039 = G__24106;
chunk__23606_24040 = G__24107;
count__23607_24041 = G__24108;
i__23608_24042 = G__24109;
continue;
} else {
var node_24112 = cljs.core.first(seq__23602_24104__$1);
if(cljs.core.not(node_24112.shadow$old)){
var path_match_24114 = shadow.cljs.devtools.client.browser.match_paths(node_24112.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24114)){
var new_link_24115 = (function (){var G__23686 = node_24112.cloneNode(true);
G__23686.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24114),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23686;
})();
(node_24112.shadow$old = true);

(new_link_24115.onload = ((function (seq__23602_24039,chunk__23606_24040,count__23607_24041,i__23608_24042,seq__23178,chunk__23180,count__23181,i__23182,new_link_24115,path_match_24114,node_24112,seq__23602_24104__$1,temp__5804__auto___24102__$1,path,seq__23178__$1,temp__5804__auto__,map__23177,map__23177__$1,msg,updates,reload_info){
return (function (e){
var seq__23691_24116 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23693_24117 = null;
var count__23694_24118 = (0);
var i__23695_24119 = (0);
while(true){
if((i__23695_24119 < count__23694_24118)){
var map__23706_24125 = chunk__23693_24117.cljs$core$IIndexed$_nth$arity$2(null,i__23695_24119);
var map__23706_24126__$1 = cljs.core.__destructure_map(map__23706_24125);
var task_24127 = map__23706_24126__$1;
var fn_str_24128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23706_24126__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23706_24126__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24133 = goog.getObjectByName(fn_str_24128,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24129)].join(''));

(fn_obj_24133.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24133.cljs$core$IFn$_invoke$arity$2(path,new_link_24115) : fn_obj_24133.call(null,path,new_link_24115));


var G__24136 = seq__23691_24116;
var G__24137 = chunk__23693_24117;
var G__24138 = count__23694_24118;
var G__24139 = (i__23695_24119 + (1));
seq__23691_24116 = G__24136;
chunk__23693_24117 = G__24137;
count__23694_24118 = G__24138;
i__23695_24119 = G__24139;
continue;
} else {
var temp__5804__auto___24145__$2 = cljs.core.seq(seq__23691_24116);
if(temp__5804__auto___24145__$2){
var seq__23691_24147__$1 = temp__5804__auto___24145__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23691_24147__$1)){
var c__5568__auto___24149 = cljs.core.chunk_first(seq__23691_24147__$1);
var G__24150 = cljs.core.chunk_rest(seq__23691_24147__$1);
var G__24151 = c__5568__auto___24149;
var G__24152 = cljs.core.count(c__5568__auto___24149);
var G__24153 = (0);
seq__23691_24116 = G__24150;
chunk__23693_24117 = G__24151;
count__23694_24118 = G__24152;
i__23695_24119 = G__24153;
continue;
} else {
var map__23711_24161 = cljs.core.first(seq__23691_24147__$1);
var map__23711_24162__$1 = cljs.core.__destructure_map(map__23711_24161);
var task_24163 = map__23711_24162__$1;
var fn_str_24164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23711_24162__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23711_24162__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24174 = goog.getObjectByName(fn_str_24164,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24165)].join(''));

(fn_obj_24174.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24174.cljs$core$IFn$_invoke$arity$2(path,new_link_24115) : fn_obj_24174.call(null,path,new_link_24115));


var G__24187 = cljs.core.next(seq__23691_24147__$1);
var G__24188 = null;
var G__24189 = (0);
var G__24190 = (0);
seq__23691_24116 = G__24187;
chunk__23693_24117 = G__24188;
count__23694_24118 = G__24189;
i__23695_24119 = G__24190;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24112);
});})(seq__23602_24039,chunk__23606_24040,count__23607_24041,i__23608_24042,seq__23178,chunk__23180,count__23181,i__23182,new_link_24115,path_match_24114,node_24112,seq__23602_24104__$1,temp__5804__auto___24102__$1,path,seq__23178__$1,temp__5804__auto__,map__23177,map__23177__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24114], 0));

goog.dom.insertSiblingAfter(new_link_24115,node_24112);


var G__24195 = cljs.core.next(seq__23602_24104__$1);
var G__24196 = null;
var G__24197 = (0);
var G__24198 = (0);
seq__23602_24039 = G__24195;
chunk__23606_24040 = G__24196;
count__23607_24041 = G__24197;
i__23608_24042 = G__24198;
continue;
} else {
var G__24200 = cljs.core.next(seq__23602_24104__$1);
var G__24201 = null;
var G__24202 = (0);
var G__24203 = (0);
seq__23602_24039 = G__24200;
chunk__23606_24040 = G__24201;
count__23607_24041 = G__24202;
i__23608_24042 = G__24203;
continue;
}
} else {
var G__24205 = cljs.core.next(seq__23602_24104__$1);
var G__24206 = null;
var G__24207 = (0);
var G__24208 = (0);
seq__23602_24039 = G__24205;
chunk__23606_24040 = G__24206;
count__23607_24041 = G__24207;
i__23608_24042 = G__24208;
continue;
}
}
} else {
}
}
break;
}


var G__24209 = cljs.core.next(seq__23178__$1);
var G__24210 = null;
var G__24211 = (0);
var G__24212 = (0);
seq__23178 = G__24209;
chunk__23180 = G__24210;
count__23181 = G__24211;
i__23182 = G__24212;
continue;
} else {
var G__24213 = cljs.core.next(seq__23178__$1);
var G__24214 = null;
var G__24215 = (0);
var G__24216 = (0);
seq__23178 = G__24213;
chunk__23180 = G__24214;
count__23181 = G__24215;
i__23182 = G__24216;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__23721){
var map__23722 = p__23721;
var map__23722__$1 = cljs.core.__destructure_map(map__23722);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23722__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__23740){
var map__23741 = p__23740;
var map__23741__$1 = cljs.core.__destructure_map(map__23741);
var _ = map__23741__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23741__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23742,done,error){
var map__23743 = p__23742;
var map__23743__$1 = cljs.core.__destructure_map(map__23743);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23743__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23748,done,error){
var map__23749 = p__23748;
var map__23749__$1 = cljs.core.__destructure_map(map__23749);
var msg = map__23749__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23749__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23749__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23749__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23756){
var map__23757 = p__23756;
var map__23757__$1 = cljs.core.__destructure_map(map__23757);
var src = map__23757__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23763 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23763) : done.call(null,G__23763));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23764){
var map__23765 = p__23764;
var map__23765__$1 = cljs.core.__destructure_map(map__23765);
var msg__$1 = map__23765__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23765__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23766){var ex = e23766;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23768){
var map__23769 = p__23768;
var map__23769__$1 = cljs.core.__destructure_map(map__23769);
var env = map__23769__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23769__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23772){
var map__23773 = p__23772;
var map__23773__$1 = cljs.core.__destructure_map(map__23773);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23773__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23773__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__23777){
var map__23778 = p__23777;
var map__23778__$1 = cljs.core.__destructure_map(map__23778);
var svc = map__23778__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23778__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
