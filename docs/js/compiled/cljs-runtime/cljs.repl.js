goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20511){
var map__20512 = p__20511;
var map__20512__$1 = cljs.core.__destructure_map(map__20512);
var m = map__20512__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20512__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20512__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__20527_20880 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20528_20881 = null;
var count__20529_20882 = (0);
var i__20530_20883 = (0);
while(true){
if((i__20530_20883 < count__20529_20882)){
var f_20884 = chunk__20528_20881.cljs$core$IIndexed$_nth$arity$2(null,i__20530_20883);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20884], 0));


var G__20886 = seq__20527_20880;
var G__20887 = chunk__20528_20881;
var G__20888 = count__20529_20882;
var G__20889 = (i__20530_20883 + (1));
seq__20527_20880 = G__20886;
chunk__20528_20881 = G__20887;
count__20529_20882 = G__20888;
i__20530_20883 = G__20889;
continue;
} else {
var temp__5804__auto___20890 = cljs.core.seq(seq__20527_20880);
if(temp__5804__auto___20890){
var seq__20527_20891__$1 = temp__5804__auto___20890;
if(cljs.core.chunked_seq_QMARK_(seq__20527_20891__$1)){
var c__5568__auto___20892 = cljs.core.chunk_first(seq__20527_20891__$1);
var G__20893 = cljs.core.chunk_rest(seq__20527_20891__$1);
var G__20894 = c__5568__auto___20892;
var G__20895 = cljs.core.count(c__5568__auto___20892);
var G__20896 = (0);
seq__20527_20880 = G__20893;
chunk__20528_20881 = G__20894;
count__20529_20882 = G__20895;
i__20530_20883 = G__20896;
continue;
} else {
var f_20897 = cljs.core.first(seq__20527_20891__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20897], 0));


var G__20899 = cljs.core.next(seq__20527_20891__$1);
var G__20900 = null;
var G__20901 = (0);
var G__20902 = (0);
seq__20527_20880 = G__20899;
chunk__20528_20881 = G__20900;
count__20529_20882 = G__20901;
i__20530_20883 = G__20902;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20903 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20903], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20903)))?cljs.core.second(arglists_20903):arglists_20903)], 0));
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
var seq__20543_20908 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20544_20909 = null;
var count__20545_20910 = (0);
var i__20546_20911 = (0);
while(true){
if((i__20546_20911 < count__20545_20910)){
var vec__20568_20912 = chunk__20544_20909.cljs$core$IIndexed$_nth$arity$2(null,i__20546_20911);
var name_20913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20568_20912,(0),null);
var map__20571_20914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20568_20912,(1),null);
var map__20571_20915__$1 = cljs.core.__destructure_map(map__20571_20914);
var doc_20916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20571_20915__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20571_20915__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20913], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20917], 0));

if(cljs.core.truth_(doc_20916)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20916], 0));
} else {
}


var G__20920 = seq__20543_20908;
var G__20921 = chunk__20544_20909;
var G__20922 = count__20545_20910;
var G__20923 = (i__20546_20911 + (1));
seq__20543_20908 = G__20920;
chunk__20544_20909 = G__20921;
count__20545_20910 = G__20922;
i__20546_20911 = G__20923;
continue;
} else {
var temp__5804__auto___20924 = cljs.core.seq(seq__20543_20908);
if(temp__5804__auto___20924){
var seq__20543_20926__$1 = temp__5804__auto___20924;
if(cljs.core.chunked_seq_QMARK_(seq__20543_20926__$1)){
var c__5568__auto___20927 = cljs.core.chunk_first(seq__20543_20926__$1);
var G__20928 = cljs.core.chunk_rest(seq__20543_20926__$1);
var G__20929 = c__5568__auto___20927;
var G__20930 = cljs.core.count(c__5568__auto___20927);
var G__20931 = (0);
seq__20543_20908 = G__20928;
chunk__20544_20909 = G__20929;
count__20545_20910 = G__20930;
i__20546_20911 = G__20931;
continue;
} else {
var vec__20581_20933 = cljs.core.first(seq__20543_20926__$1);
var name_20934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581_20933,(0),null);
var map__20584_20935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581_20933,(1),null);
var map__20584_20936__$1 = cljs.core.__destructure_map(map__20584_20935);
var doc_20937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584_20936__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584_20936__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20934], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20938], 0));

if(cljs.core.truth_(doc_20937)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20937], 0));
} else {
}


var G__20941 = cljs.core.next(seq__20543_20926__$1);
var G__20942 = null;
var G__20943 = (0);
var G__20944 = (0);
seq__20543_20908 = G__20941;
chunk__20544_20909 = G__20942;
count__20545_20910 = G__20943;
i__20546_20911 = G__20944;
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

var seq__20593 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20594 = null;
var count__20595 = (0);
var i__20596 = (0);
while(true){
if((i__20596 < count__20595)){
var role = chunk__20594.cljs$core$IIndexed$_nth$arity$2(null,i__20596);
var temp__5804__auto___20950__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20950__$1)){
var spec_20951 = temp__5804__auto___20950__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20951)], 0));
} else {
}


var G__20955 = seq__20593;
var G__20956 = chunk__20594;
var G__20957 = count__20595;
var G__20958 = (i__20596 + (1));
seq__20593 = G__20955;
chunk__20594 = G__20956;
count__20595 = G__20957;
i__20596 = G__20958;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20593);
if(temp__5804__auto____$1){
var seq__20593__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20593__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20593__$1);
var G__20959 = cljs.core.chunk_rest(seq__20593__$1);
var G__20960 = c__5568__auto__;
var G__20961 = cljs.core.count(c__5568__auto__);
var G__20962 = (0);
seq__20593 = G__20959;
chunk__20594 = G__20960;
count__20595 = G__20961;
i__20596 = G__20962;
continue;
} else {
var role = cljs.core.first(seq__20593__$1);
var temp__5804__auto___20964__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20964__$2)){
var spec_20965 = temp__5804__auto___20964__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20965)], 0));
} else {
}


var G__20967 = cljs.core.next(seq__20593__$1);
var G__20968 = null;
var G__20969 = (0);
var G__20970 = (0);
seq__20593 = G__20967;
chunk__20594 = G__20968;
count__20595 = G__20969;
i__20596 = G__20970;
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
var G__20975 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20976 = cljs.core.ex_cause(t);
via = G__20975;
t = G__20976;
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
var map__20720 = datafied_throwable;
var map__20720__$1 = cljs.core.__destructure_map(map__20720);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20720__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20720__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20720__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20722 = cljs.core.last(via);
var map__20722__$1 = cljs.core.__destructure_map(map__20722);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20723 = data;
var map__20723__$1 = cljs.core.__destructure_map(map__20723);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20723__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20723__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20723__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20724 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20724__$1 = cljs.core.__destructure_map(map__20724);
var top_data = map__20724__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20724__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20742 = phase;
var G__20742__$1 = (((G__20742 instanceof cljs.core.Keyword))?G__20742.fqn:null);
switch (G__20742__$1) {
case "read-source":
var map__20744 = data;
var map__20744__$1 = cljs.core.__destructure_map(map__20744);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20745 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20745__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20745,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20745);
var G__20745__$2 = (cljs.core.truth_((function (){var fexpr__20748 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20748.cljs$core$IFn$_invoke$arity$1 ? fexpr__20748.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20748.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20745__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20745__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20745__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20745__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20751 = top_data;
var G__20751__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20751,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20751);
var G__20751__$2 = (cljs.core.truth_((function (){var fexpr__20752 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20752.cljs$core$IFn$_invoke$arity$1 ? fexpr__20752.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20752.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20751__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20751__$1);
var G__20751__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20751__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20751__$2);
var G__20751__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20751__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20751__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20751__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20751__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20758 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20758,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20758,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20758,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20758,(3),null);
var G__20762 = top_data;
var G__20762__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20762,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20762);
var G__20762__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20762__$1);
var G__20762__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20762__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20762__$2);
var G__20762__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20762__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20762__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20762__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20762__$4;
}

break;
case "execution":
var vec__20767 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20699_SHARP_){
var or__5045__auto__ = (p1__20699_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20776 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20776.cljs$core$IFn$_invoke$arity$1 ? fexpr__20776.cljs$core$IFn$_invoke$arity$1(p1__20699_SHARP_) : fexpr__20776.call(null,p1__20699_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20779 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20779__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20779,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20779);
var G__20779__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20779__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20779__$1);
var G__20779__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20779__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20779__$2);
var G__20779__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20779__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20779__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20779__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20779__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20742__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20794){
var map__20795 = p__20794;
var map__20795__$1 = cljs.core.__destructure_map(map__20795);
var triage_data = map__20795__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__20811 = phase;
var G__20811__$1 = (((G__20811 instanceof cljs.core.Keyword))?G__20811.fqn:null);
switch (G__20811__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20814 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20815 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20816 = loc;
var G__20817 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20819_21007 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20820_21008 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20821_21009 = true;
var _STAR_print_fn_STAR__temp_val__20822_21010 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20821_21009);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20822_21010);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20787_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20787_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20820_21008);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20819_21007);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20814,G__20815,G__20816,G__20817) : format.call(null,G__20814,G__20815,G__20816,G__20817));

break;
case "macroexpansion":
var G__20830 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20831 = cause_type;
var G__20832 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20833 = loc;
var G__20834 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20830,G__20831,G__20832,G__20833,G__20834) : format.call(null,G__20830,G__20831,G__20832,G__20833,G__20834));

break;
case "compile-syntax-check":
var G__20836 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20837 = cause_type;
var G__20838 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20839 = loc;
var G__20840 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20836,G__20837,G__20838,G__20839,G__20840) : format.call(null,G__20836,G__20837,G__20838,G__20839,G__20840));

break;
case "compilation":
var G__20841 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20842 = cause_type;
var G__20843 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20844 = loc;
var G__20845 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20841,G__20842,G__20843,G__20844,G__20845) : format.call(null,G__20841,G__20842,G__20843,G__20844,G__20845));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20847 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20848 = symbol;
var G__20849 = loc;
var G__20850 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20852_21017 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20853_21018 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20854_21019 = true;
var _STAR_print_fn_STAR__temp_val__20855_21020 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20854_21019);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20855_21020);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20789_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20789_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20853_21018);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20852_21017);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20847,G__20848,G__20849,G__20850) : format.call(null,G__20847,G__20848,G__20849,G__20850));
} else {
var G__20859 = "Execution error%s at %s(%s).\n%s\n";
var G__20860 = cause_type;
var G__20861 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20862 = loc;
var G__20863 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20859,G__20860,G__20861,G__20862,G__20863) : format.call(null,G__20859,G__20860,G__20861,G__20862,G__20863));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20811__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
