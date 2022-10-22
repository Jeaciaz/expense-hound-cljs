goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20453){
var map__20454 = p__20453;
var map__20454__$1 = cljs.core.__destructure_map(map__20454);
var m = map__20454__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20466_20809 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20467_20810 = null;
var count__20468_20811 = (0);
var i__20469_20812 = (0);
while(true){
if((i__20469_20812 < count__20468_20811)){
var f_20814 = chunk__20467_20810.cljs$core$IIndexed$_nth$arity$2(null,i__20469_20812);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20814], 0));


var G__20815 = seq__20466_20809;
var G__20816 = chunk__20467_20810;
var G__20817 = count__20468_20811;
var G__20818 = (i__20469_20812 + (1));
seq__20466_20809 = G__20815;
chunk__20467_20810 = G__20816;
count__20468_20811 = G__20817;
i__20469_20812 = G__20818;
continue;
} else {
var temp__5804__auto___20820 = cljs.core.seq(seq__20466_20809);
if(temp__5804__auto___20820){
var seq__20466_20821__$1 = temp__5804__auto___20820;
if(cljs.core.chunked_seq_QMARK_(seq__20466_20821__$1)){
var c__5568__auto___20823 = cljs.core.chunk_first(seq__20466_20821__$1);
var G__20825 = cljs.core.chunk_rest(seq__20466_20821__$1);
var G__20826 = c__5568__auto___20823;
var G__20827 = cljs.core.count(c__5568__auto___20823);
var G__20828 = (0);
seq__20466_20809 = G__20825;
chunk__20467_20810 = G__20826;
count__20468_20811 = G__20827;
i__20469_20812 = G__20828;
continue;
} else {
var f_20830 = cljs.core.first(seq__20466_20821__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20830], 0));


var G__20832 = cljs.core.next(seq__20466_20821__$1);
var G__20833 = null;
var G__20834 = (0);
var G__20835 = (0);
seq__20466_20809 = G__20832;
chunk__20467_20810 = G__20833;
count__20468_20811 = G__20834;
i__20469_20812 = G__20835;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20837 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20837], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20837)))?cljs.core.second(arglists_20837):arglists_20837)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20498_20842 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20499_20843 = null;
var count__20500_20844 = (0);
var i__20501_20845 = (0);
while(true){
if((i__20501_20845 < count__20500_20844)){
var vec__20533_20846 = chunk__20499_20843.cljs$core$IIndexed$_nth$arity$2(null,i__20501_20845);
var name_20847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20533_20846,(0),null);
var map__20536_20848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20533_20846,(1),null);
var map__20536_20849__$1 = cljs.core.__destructure_map(map__20536_20848);
var doc_20850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536_20849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536_20849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20847], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20851], 0));

if(cljs.core.truth_(doc_20850)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20850], 0));
} else {
}


var G__20857 = seq__20498_20842;
var G__20858 = chunk__20499_20843;
var G__20859 = count__20500_20844;
var G__20860 = (i__20501_20845 + (1));
seq__20498_20842 = G__20857;
chunk__20499_20843 = G__20858;
count__20500_20844 = G__20859;
i__20501_20845 = G__20860;
continue;
} else {
var temp__5804__auto___20862 = cljs.core.seq(seq__20498_20842);
if(temp__5804__auto___20862){
var seq__20498_20863__$1 = temp__5804__auto___20862;
if(cljs.core.chunked_seq_QMARK_(seq__20498_20863__$1)){
var c__5568__auto___20864 = cljs.core.chunk_first(seq__20498_20863__$1);
var G__20865 = cljs.core.chunk_rest(seq__20498_20863__$1);
var G__20866 = c__5568__auto___20864;
var G__20867 = cljs.core.count(c__5568__auto___20864);
var G__20868 = (0);
seq__20498_20842 = G__20865;
chunk__20499_20843 = G__20866;
count__20500_20844 = G__20867;
i__20501_20845 = G__20868;
continue;
} else {
var vec__20543_20870 = cljs.core.first(seq__20498_20863__$1);
var name_20871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20543_20870,(0),null);
var map__20546_20872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20543_20870,(1),null);
var map__20546_20873__$1 = cljs.core.__destructure_map(map__20546_20872);
var doc_20874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20546_20873__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20546_20873__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20871], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20875], 0));

if(cljs.core.truth_(doc_20874)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20874], 0));
} else {
}


var G__20877 = cljs.core.next(seq__20498_20863__$1);
var G__20878 = null;
var G__20879 = (0);
var G__20880 = (0);
seq__20498_20842 = G__20877;
chunk__20499_20843 = G__20878;
count__20500_20844 = G__20879;
i__20501_20845 = G__20880;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20549 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20550 = null;
var count__20551 = (0);
var i__20552 = (0);
while(true){
if((i__20552 < count__20551)){
var role = chunk__20550.cljs$core$IIndexed$_nth$arity$2(null,i__20552);
var temp__5804__auto___20884__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20884__$1)){
var spec_20885 = temp__5804__auto___20884__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20885)], 0));
} else {
}


var G__20887 = seq__20549;
var G__20888 = chunk__20550;
var G__20889 = count__20551;
var G__20890 = (i__20552 + (1));
seq__20549 = G__20887;
chunk__20550 = G__20888;
count__20551 = G__20889;
i__20552 = G__20890;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20549);
if(temp__5804__auto____$1){
var seq__20549__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20549__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20549__$1);
var G__20892 = cljs.core.chunk_rest(seq__20549__$1);
var G__20893 = c__5568__auto__;
var G__20894 = cljs.core.count(c__5568__auto__);
var G__20895 = (0);
seq__20549 = G__20892;
chunk__20550 = G__20893;
count__20551 = G__20894;
i__20552 = G__20895;
continue;
} else {
var role = cljs.core.first(seq__20549__$1);
var temp__5804__auto___20897__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20897__$2)){
var spec_20898 = temp__5804__auto___20897__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20898)], 0));
} else {
}


var G__20899 = cljs.core.next(seq__20549__$1);
var G__20900 = null;
var G__20901 = (0);
var G__20902 = (0);
seq__20549 = G__20899;
chunk__20550 = G__20900;
count__20551 = G__20901;
i__20552 = G__20902;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20908 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20909 = cljs.core.ex_cause(t);
via = G__20908;
t = G__20909;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20644 = datafied_throwable;
var map__20644__$1 = cljs.core.__destructure_map(map__20644);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20644__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20644__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20644__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20645 = cljs.core.last(via);
var map__20645__$1 = cljs.core.__destructure_map(map__20645);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20645__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20645__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20645__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20646 = data;
var map__20646__$1 = cljs.core.__destructure_map(map__20646);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20646__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20646__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20646__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20647 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20647__$1 = cljs.core.__destructure_map(map__20647);
var top_data = map__20647__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20647__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20665 = phase;
var G__20665__$1 = (((G__20665 instanceof cljs.core.Keyword))?G__20665.fqn:null);
switch (G__20665__$1) {
case "read-source":
var map__20674 = data;
var map__20674__$1 = cljs.core.__destructure_map(map__20674);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20674__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20674__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20682 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20682__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20682,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20682);
var G__20682__$2 = (cljs.core.truth_((function (){var fexpr__20692 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20692.cljs$core$IFn$_invoke$arity$1 ? fexpr__20692.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20692.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20682__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20682__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20682__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20682__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20694 = top_data;
var G__20694__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20694,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20694);
var G__20694__$2 = (cljs.core.truth_((function (){var fexpr__20701 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20701.cljs$core$IFn$_invoke$arity$1 ? fexpr__20701.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20701.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20694__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20694__$1);
var G__20694__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20694__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20694__$2);
var G__20694__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20694__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20694__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20694__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20694__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20704 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20704,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20704,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20704,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20704,(3),null);
var G__20707 = top_data;
var G__20707__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20707,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20707);
var G__20707__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20707__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20707__$1);
var G__20707__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20707__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20707__$2);
var G__20707__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20707__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20707__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20707__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20707__$4;
}

break;
case "execution":
var vec__20716 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20716,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20716,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20716,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20716,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20628_SHARP_){
var or__5045__auto__ = (p1__20628_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20722 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20722.cljs$core$IFn$_invoke$arity$1 ? fexpr__20722.cljs$core$IFn$_invoke$arity$1(p1__20628_SHARP_) : fexpr__20722.call(null,p1__20628_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20727 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20727__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20727,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20727);
var G__20727__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20727__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20727__$1);
var G__20727__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20727__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20727__$2);
var G__20727__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20727__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20727__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20727__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20727__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20665__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20740){
var map__20742 = p__20740;
var map__20742__$1 = cljs.core.__destructure_map(map__20742);
var triage_data = map__20742__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20742__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20751 = phase;
var G__20751__$1 = (((G__20751 instanceof cljs.core.Keyword))?G__20751.fqn:null);
switch (G__20751__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20752 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20753 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20754 = loc;
var G__20755 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20756_20949 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20757_20950 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20758_20951 = true;
var _STAR_print_fn_STAR__temp_val__20759_20952 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20758_20951);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20759_20952);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20737_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20737_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20757_20950);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20756_20949);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20752,G__20753,G__20754,G__20755) : format.call(null,G__20752,G__20753,G__20754,G__20755));

break;
case "macroexpansion":
var G__20762 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20763 = cause_type;
var G__20764 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20765 = loc;
var G__20766 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20762,G__20763,G__20764,G__20765,G__20766) : format.call(null,G__20762,G__20763,G__20764,G__20765,G__20766));

break;
case "compile-syntax-check":
var G__20770 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20771 = cause_type;
var G__20772 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20773 = loc;
var G__20774 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20770,G__20771,G__20772,G__20773,G__20774) : format.call(null,G__20770,G__20771,G__20772,G__20773,G__20774));

break;
case "compilation":
var G__20777 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20778 = cause_type;
var G__20779 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20780 = loc;
var G__20781 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20777,G__20778,G__20779,G__20780,G__20781) : format.call(null,G__20777,G__20778,G__20779,G__20780,G__20781));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20782 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20783 = symbol;
var G__20784 = loc;
var G__20785 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20786_20973 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20788_20974 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20790_20975 = true;
var _STAR_print_fn_STAR__temp_val__20791_20976 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20790_20975);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20791_20976);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20738_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20738_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20788_20974);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20786_20973);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20782,G__20783,G__20784,G__20785) : format.call(null,G__20782,G__20783,G__20784,G__20785));
} else {
var G__20796 = "Execution error%s at %s(%s).\n%s\n";
var G__20797 = cause_type;
var G__20798 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20799 = loc;
var G__20800 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20796,G__20797,G__20798,G__20799,G__20800) : format.call(null,G__20796,G__20797,G__20798,G__20799,G__20800));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20751__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
