goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17927 = arguments.length;
switch (G__17927) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17951 = (function (f,blockable,meta17952){
this.f = f;
this.blockable = blockable;
this.meta17952 = meta17952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17953,meta17952__$1){
var self__ = this;
var _17953__$1 = this;
return (new cljs.core.async.t_cljs$core$async17951(self__.f,self__.blockable,meta17952__$1));
}));

(cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17953){
var self__ = this;
var _17953__$1 = this;
return self__.meta17952;
}));

(cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17952","meta17952",-904850835,null)], null);
}));

(cljs.core.async.t_cljs$core$async17951.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17951");

(cljs.core.async.t_cljs$core$async17951.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17951");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17951.
 */
cljs.core.async.__GT_t_cljs$core$async17951 = (function cljs$core$async$__GT_t_cljs$core$async17951(f__$1,blockable__$1,meta17952){
return (new cljs.core.async.t_cljs$core$async17951(f__$1,blockable__$1,meta17952));
});

}

return (new cljs.core.async.t_cljs$core$async17951(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18011 = arguments.length;
switch (G__18011) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18024 = arguments.length;
switch (G__18024) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18027 = arguments.length;
switch (G__18027) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20176 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20176) : fn1.call(null,val_20176));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20176) : fn1.call(null,val_20176));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18051 = arguments.length;
switch (G__18051) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___20179 = n;
var x_20180 = (0);
while(true){
if((x_20180 < n__5636__auto___20179)){
(a[x_20180] = x_20180);

var G__20181 = (x_20180 + (1));
x_20180 = G__20181;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18054 = (function (flag,meta18055){
this.flag = flag;
this.meta18055 = meta18055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18056,meta18055__$1){
var self__ = this;
var _18056__$1 = this;
return (new cljs.core.async.t_cljs$core$async18054(self__.flag,meta18055__$1));
}));

(cljs.core.async.t_cljs$core$async18054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18056){
var self__ = this;
var _18056__$1 = this;
return self__.meta18055;
}));

(cljs.core.async.t_cljs$core$async18054.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18054.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18055","meta18055",267433169,null)], null);
}));

(cljs.core.async.t_cljs$core$async18054.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18054");

(cljs.core.async.t_cljs$core$async18054.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18054");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18054.
 */
cljs.core.async.__GT_t_cljs$core$async18054 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18054(flag__$1,meta18055){
return (new cljs.core.async.t_cljs$core$async18054(flag__$1,meta18055));
});

}

return (new cljs.core.async.t_cljs$core$async18054(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18058 = (function (flag,cb,meta18059){
this.flag = flag;
this.cb = cb;
this.meta18059 = meta18059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18060,meta18059__$1){
var self__ = this;
var _18060__$1 = this;
return (new cljs.core.async.t_cljs$core$async18058(self__.flag,self__.cb,meta18059__$1));
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18060){
var self__ = this;
var _18060__$1 = this;
return self__.meta18059;
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18059","meta18059",-936167075,null)], null);
}));

(cljs.core.async.t_cljs$core$async18058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18058");

(cljs.core.async.t_cljs$core$async18058.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18058.
 */
cljs.core.async.__GT_t_cljs$core$async18058 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18058(flag__$1,cb__$1,meta18059){
return (new cljs.core.async.t_cljs$core$async18058(flag__$1,cb__$1,meta18059));
});

}

return (new cljs.core.async.t_cljs$core$async18058(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18063_SHARP_){
var G__18066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18063_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18066) : fret.call(null,G__18066));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18064_SHARP_){
var G__18067 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18064_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18067) : fret.call(null,G__18067));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20188 = (i + (1));
i = G__20188;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20191 = arguments.length;
var i__5770__auto___20192 = (0);
while(true){
if((i__5770__auto___20192 < len__5769__auto___20191)){
args__5775__auto__.push((arguments[i__5770__auto___20192]));

var G__20193 = (i__5770__auto___20192 + (1));
i__5770__auto___20192 = G__20193;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18071){
var map__18072 = p__18071;
var map__18072__$1 = cljs.core.__destructure_map(map__18072);
var opts = map__18072__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18068){
var G__18069 = cljs.core.first(seq18068);
var seq18068__$1 = cljs.core.next(seq18068);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18069,seq18068__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18075 = arguments.length;
switch (G__18075) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17781__auto___20195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_18102){
var state_val_18103 = (state_18102[(1)]);
if((state_val_18103 === (7))){
var inst_18097 = (state_18102[(2)]);
var state_18102__$1 = state_18102;
var statearr_18104_20196 = state_18102__$1;
(statearr_18104_20196[(2)] = inst_18097);

(statearr_18104_20196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (1))){
var state_18102__$1 = state_18102;
var statearr_18105_20197 = state_18102__$1;
(statearr_18105_20197[(2)] = null);

(statearr_18105_20197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (4))){
var inst_18080 = (state_18102[(7)]);
var inst_18080__$1 = (state_18102[(2)]);
var inst_18081 = (inst_18080__$1 == null);
var state_18102__$1 = (function (){var statearr_18107 = state_18102;
(statearr_18107[(7)] = inst_18080__$1);

return statearr_18107;
})();
if(cljs.core.truth_(inst_18081)){
var statearr_18108_20199 = state_18102__$1;
(statearr_18108_20199[(1)] = (5));

} else {
var statearr_18109_20200 = state_18102__$1;
(statearr_18109_20200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (13))){
var state_18102__$1 = state_18102;
var statearr_18110_20201 = state_18102__$1;
(statearr_18110_20201[(2)] = null);

(statearr_18110_20201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (6))){
var inst_18080 = (state_18102[(7)]);
var state_18102__$1 = state_18102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18102__$1,(11),to,inst_18080);
} else {
if((state_val_18103 === (3))){
var inst_18099 = (state_18102[(2)]);
var state_18102__$1 = state_18102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18102__$1,inst_18099);
} else {
if((state_val_18103 === (12))){
var state_18102__$1 = state_18102;
var statearr_18112_20202 = state_18102__$1;
(statearr_18112_20202[(2)] = null);

(statearr_18112_20202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (2))){
var state_18102__$1 = state_18102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18102__$1,(4),from);
} else {
if((state_val_18103 === (11))){
var inst_18090 = (state_18102[(2)]);
var state_18102__$1 = state_18102;
if(cljs.core.truth_(inst_18090)){
var statearr_18113_20203 = state_18102__$1;
(statearr_18113_20203[(1)] = (12));

} else {
var statearr_18114_20204 = state_18102__$1;
(statearr_18114_20204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (9))){
var state_18102__$1 = state_18102;
var statearr_18115_20205 = state_18102__$1;
(statearr_18115_20205[(2)] = null);

(statearr_18115_20205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (5))){
var state_18102__$1 = state_18102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18116_20206 = state_18102__$1;
(statearr_18116_20206[(1)] = (8));

} else {
var statearr_18117_20207 = state_18102__$1;
(statearr_18117_20207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (14))){
var inst_18095 = (state_18102[(2)]);
var state_18102__$1 = state_18102;
var statearr_18118_20209 = state_18102__$1;
(statearr_18118_20209[(2)] = inst_18095);

(statearr_18118_20209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (10))){
var inst_18087 = (state_18102[(2)]);
var state_18102__$1 = state_18102;
var statearr_18120_20210 = state_18102__$1;
(statearr_18120_20210[(2)] = inst_18087);

(statearr_18120_20210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18103 === (8))){
var inst_18084 = cljs.core.async.close_BANG_(to);
var state_18102__$1 = state_18102;
var statearr_18121_20211 = state_18102__$1;
(statearr_18121_20211[(2)] = inst_18084);

(statearr_18121_20211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_18122 = [null,null,null,null,null,null,null,null];
(statearr_18122[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_18122[(1)] = (1));

return statearr_18122;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_18102){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18102);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18123){var ex__17412__auto__ = e18123;
var statearr_18124_20216 = state_18102;
(statearr_18124_20216[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18102[(4)]))){
var statearr_18125_20218 = state_18102;
(statearr_18125_20218[(1)] = cljs.core.first((state_18102[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20221 = state_18102;
state_18102 = G__20221;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_18102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_18102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_18126 = f__17782__auto__();
(statearr_18126[(6)] = c__17781__auto___20195);

return statearr_18126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18128){
var vec__18129 = p__18128;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18129,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18129,(1),null);
var job = vec__18129;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17781__auto___20225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_18137){
var state_val_18138 = (state_18137[(1)]);
if((state_val_18138 === (1))){
var state_18137__$1 = state_18137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18137__$1,(2),res,v);
} else {
if((state_val_18138 === (2))){
var inst_18134 = (state_18137[(2)]);
var inst_18135 = cljs.core.async.close_BANG_(res);
var state_18137__$1 = (function (){var statearr_18139 = state_18137;
(statearr_18139[(7)] = inst_18134);

return statearr_18139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18137__$1,inst_18135);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0 = (function (){
var statearr_18140 = [null,null,null,null,null,null,null,null];
(statearr_18140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__);

(statearr_18140[(1)] = (1));

return statearr_18140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1 = (function (state_18137){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18137);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18141){var ex__17412__auto__ = e18141;
var statearr_18142_20228 = state_18137;
(statearr_18142_20228[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18137[(4)]))){
var statearr_18143_20229 = state_18137;
(statearr_18143_20229[(1)] = cljs.core.first((state_18137[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20230 = state_18137;
state_18137 = G__20230;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = function(state_18137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1.call(this,state_18137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_18144 = f__17782__auto__();
(statearr_18144[(6)] = c__17781__auto___20225);

return statearr_18144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18146){
var vec__18147 = p__18146;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(1),null);
var job = vec__18147;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___20231 = n;
var __20232 = (0);
while(true){
if((__20232 < n__5636__auto___20231)){
var G__18150_20233 = type;
var G__18150_20234__$1 = (((G__18150_20233 instanceof cljs.core.Keyword))?G__18150_20233.fqn:null);
switch (G__18150_20234__$1) {
case "compute":
var c__17781__auto___20236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20232,c__17781__auto___20236,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async){
return (function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = ((function (__20232,c__17781__auto___20236,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async){
return (function (state_18163){
var state_val_18164 = (state_18163[(1)]);
if((state_val_18164 === (1))){
var state_18163__$1 = state_18163;
var statearr_18165_20240 = state_18163__$1;
(statearr_18165_20240[(2)] = null);

(statearr_18165_20240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (2))){
var state_18163__$1 = state_18163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18163__$1,(4),jobs);
} else {
if((state_val_18164 === (3))){
var inst_18161 = (state_18163[(2)]);
var state_18163__$1 = state_18163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18163__$1,inst_18161);
} else {
if((state_val_18164 === (4))){
var inst_18153 = (state_18163[(2)]);
var inst_18154 = process__$1(inst_18153);
var state_18163__$1 = state_18163;
if(cljs.core.truth_(inst_18154)){
var statearr_18167_20242 = state_18163__$1;
(statearr_18167_20242[(1)] = (5));

} else {
var statearr_18168_20243 = state_18163__$1;
(statearr_18168_20243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (5))){
var state_18163__$1 = state_18163;
var statearr_18169_20244 = state_18163__$1;
(statearr_18169_20244[(2)] = null);

(statearr_18169_20244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (6))){
var state_18163__$1 = state_18163;
var statearr_18170_20245 = state_18163__$1;
(statearr_18170_20245[(2)] = null);

(statearr_18170_20245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (7))){
var inst_18159 = (state_18163[(2)]);
var state_18163__$1 = state_18163;
var statearr_18171_20246 = state_18163__$1;
(statearr_18171_20246[(2)] = inst_18159);

(statearr_18171_20246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20232,c__17781__auto___20236,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async))
;
return ((function (__20232,switch__17408__auto__,c__17781__auto___20236,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0 = (function (){
var statearr_18172 = [null,null,null,null,null,null,null];
(statearr_18172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__);

(statearr_18172[(1)] = (1));

return statearr_18172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1 = (function (state_18163){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18163);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18173){var ex__17412__auto__ = e18173;
var statearr_18174_20247 = state_18163;
(statearr_18174_20247[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18163[(4)]))){
var statearr_18175_20248 = state_18163;
(statearr_18175_20248[(1)] = cljs.core.first((state_18163[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20250 = state_18163;
state_18163 = G__20250;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = function(state_18163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1.call(this,state_18163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__;
})()
;})(__20232,switch__17408__auto__,c__17781__auto___20236,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async))
})();
var state__17783__auto__ = (function (){var statearr_18177 = f__17782__auto__();
(statearr_18177[(6)] = c__17781__auto___20236);

return statearr_18177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
});})(__20232,c__17781__auto___20236,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async))
);


break;
case "async":
var c__17781__auto___20251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20232,c__17781__auto___20251,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async){
return (function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = ((function (__20232,c__17781__auto___20251,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async){
return (function (state_18190){
var state_val_18191 = (state_18190[(1)]);
if((state_val_18191 === (1))){
var state_18190__$1 = state_18190;
var statearr_18192_20253 = state_18190__$1;
(statearr_18192_20253[(2)] = null);

(statearr_18192_20253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (2))){
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18190__$1,(4),jobs);
} else {
if((state_val_18191 === (3))){
var inst_18188 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18190__$1,inst_18188);
} else {
if((state_val_18191 === (4))){
var inst_18180 = (state_18190[(2)]);
var inst_18181 = async(inst_18180);
var state_18190__$1 = state_18190;
if(cljs.core.truth_(inst_18181)){
var statearr_18193_20254 = state_18190__$1;
(statearr_18193_20254[(1)] = (5));

} else {
var statearr_18194_20255 = state_18190__$1;
(statearr_18194_20255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (5))){
var state_18190__$1 = state_18190;
var statearr_18196_20256 = state_18190__$1;
(statearr_18196_20256[(2)] = null);

(statearr_18196_20256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (6))){
var state_18190__$1 = state_18190;
var statearr_18197_20257 = state_18190__$1;
(statearr_18197_20257[(2)] = null);

(statearr_18197_20257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (7))){
var inst_18186 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18198_20258 = state_18190__$1;
(statearr_18198_20258[(2)] = inst_18186);

(statearr_18198_20258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20232,c__17781__auto___20251,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async))
;
return ((function (__20232,switch__17408__auto__,c__17781__auto___20251,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0 = (function (){
var statearr_18199 = [null,null,null,null,null,null,null];
(statearr_18199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__);

(statearr_18199[(1)] = (1));

return statearr_18199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1 = (function (state_18190){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18190);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18200){var ex__17412__auto__ = e18200;
var statearr_18201_20259 = state_18190;
(statearr_18201_20259[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18190[(4)]))){
var statearr_18202_20260 = state_18190;
(statearr_18202_20260[(1)] = cljs.core.first((state_18190[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20261 = state_18190;
state_18190 = G__20261;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = function(state_18190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1.call(this,state_18190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__;
})()
;})(__20232,switch__17408__auto__,c__17781__auto___20251,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async))
})();
var state__17783__auto__ = (function (){var statearr_18203 = f__17782__auto__();
(statearr_18203[(6)] = c__17781__auto___20251);

return statearr_18203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
});})(__20232,c__17781__auto___20251,G__18150_20233,G__18150_20234__$1,n__5636__auto___20231,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18150_20234__$1)].join('')));

}

var G__20262 = (__20232 + (1));
__20232 = G__20262;
continue;
} else {
}
break;
}

var c__17781__auto___20263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_18226){
var state_val_18227 = (state_18226[(1)]);
if((state_val_18227 === (7))){
var inst_18222 = (state_18226[(2)]);
var state_18226__$1 = state_18226;
var statearr_18229_20264 = state_18226__$1;
(statearr_18229_20264[(2)] = inst_18222);

(statearr_18229_20264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (1))){
var state_18226__$1 = state_18226;
var statearr_18230_20266 = state_18226__$1;
(statearr_18230_20266[(2)] = null);

(statearr_18230_20266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (4))){
var inst_18207 = (state_18226[(7)]);
var inst_18207__$1 = (state_18226[(2)]);
var inst_18208 = (inst_18207__$1 == null);
var state_18226__$1 = (function (){var statearr_18231 = state_18226;
(statearr_18231[(7)] = inst_18207__$1);

return statearr_18231;
})();
if(cljs.core.truth_(inst_18208)){
var statearr_18233_20268 = state_18226__$1;
(statearr_18233_20268[(1)] = (5));

} else {
var statearr_18234_20269 = state_18226__$1;
(statearr_18234_20269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (6))){
var inst_18212 = (state_18226[(8)]);
var inst_18207 = (state_18226[(7)]);
var inst_18212__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18213 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18214 = [inst_18207,inst_18212__$1];
var inst_18215 = (new cljs.core.PersistentVector(null,2,(5),inst_18213,inst_18214,null));
var state_18226__$1 = (function (){var statearr_18235 = state_18226;
(statearr_18235[(8)] = inst_18212__$1);

return statearr_18235;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18226__$1,(8),jobs,inst_18215);
} else {
if((state_val_18227 === (3))){
var inst_18224 = (state_18226[(2)]);
var state_18226__$1 = state_18226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18226__$1,inst_18224);
} else {
if((state_val_18227 === (2))){
var state_18226__$1 = state_18226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18226__$1,(4),from);
} else {
if((state_val_18227 === (9))){
var inst_18219 = (state_18226[(2)]);
var state_18226__$1 = (function (){var statearr_18236 = state_18226;
(statearr_18236[(9)] = inst_18219);

return statearr_18236;
})();
var statearr_18237_20270 = state_18226__$1;
(statearr_18237_20270[(2)] = null);

(statearr_18237_20270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (5))){
var inst_18210 = cljs.core.async.close_BANG_(jobs);
var state_18226__$1 = state_18226;
var statearr_18238_20271 = state_18226__$1;
(statearr_18238_20271[(2)] = inst_18210);

(statearr_18238_20271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (8))){
var inst_18212 = (state_18226[(8)]);
var inst_18217 = (state_18226[(2)]);
var state_18226__$1 = (function (){var statearr_18240 = state_18226;
(statearr_18240[(10)] = inst_18217);

return statearr_18240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18226__$1,(9),results,inst_18212);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0 = (function (){
var statearr_18241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__);

(statearr_18241[(1)] = (1));

return statearr_18241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1 = (function (state_18226){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18226);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18242){var ex__17412__auto__ = e18242;
var statearr_18243_20276 = state_18226;
(statearr_18243_20276[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18226[(4)]))){
var statearr_18244_20277 = state_18226;
(statearr_18244_20277[(1)] = cljs.core.first((state_18226[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20278 = state_18226;
state_18226 = G__20278;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = function(state_18226){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1.call(this,state_18226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_18245 = f__17782__auto__();
(statearr_18245[(6)] = c__17781__auto___20263);

return statearr_18245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


var c__17781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_18284){
var state_val_18285 = (state_18284[(1)]);
if((state_val_18285 === (7))){
var inst_18280 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
var statearr_18287_20279 = state_18284__$1;
(statearr_18287_20279[(2)] = inst_18280);

(statearr_18287_20279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (20))){
var state_18284__$1 = state_18284;
var statearr_18288_20280 = state_18284__$1;
(statearr_18288_20280[(2)] = null);

(statearr_18288_20280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (1))){
var state_18284__$1 = state_18284;
var statearr_18289_20281 = state_18284__$1;
(statearr_18289_20281[(2)] = null);

(statearr_18289_20281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (4))){
var inst_18249 = (state_18284[(7)]);
var inst_18249__$1 = (state_18284[(2)]);
var inst_18250 = (inst_18249__$1 == null);
var state_18284__$1 = (function (){var statearr_18290 = state_18284;
(statearr_18290[(7)] = inst_18249__$1);

return statearr_18290;
})();
if(cljs.core.truth_(inst_18250)){
var statearr_18291_20285 = state_18284__$1;
(statearr_18291_20285[(1)] = (5));

} else {
var statearr_18292_20286 = state_18284__$1;
(statearr_18292_20286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (15))){
var inst_18262 = (state_18284[(8)]);
var state_18284__$1 = state_18284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18284__$1,(18),to,inst_18262);
} else {
if((state_val_18285 === (21))){
var inst_18275 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
var statearr_18293_20287 = state_18284__$1;
(statearr_18293_20287[(2)] = inst_18275);

(statearr_18293_20287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (13))){
var inst_18277 = (state_18284[(2)]);
var state_18284__$1 = (function (){var statearr_18294 = state_18284;
(statearr_18294[(9)] = inst_18277);

return statearr_18294;
})();
var statearr_18296_20289 = state_18284__$1;
(statearr_18296_20289[(2)] = null);

(statearr_18296_20289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (6))){
var inst_18249 = (state_18284[(7)]);
var state_18284__$1 = state_18284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18284__$1,(11),inst_18249);
} else {
if((state_val_18285 === (17))){
var inst_18270 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
if(cljs.core.truth_(inst_18270)){
var statearr_18297_20291 = state_18284__$1;
(statearr_18297_20291[(1)] = (19));

} else {
var statearr_18298_20292 = state_18284__$1;
(statearr_18298_20292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (3))){
var inst_18282 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18284__$1,inst_18282);
} else {
if((state_val_18285 === (12))){
var inst_18259 = (state_18284[(10)]);
var state_18284__$1 = state_18284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18284__$1,(14),inst_18259);
} else {
if((state_val_18285 === (2))){
var state_18284__$1 = state_18284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18284__$1,(4),results);
} else {
if((state_val_18285 === (19))){
var state_18284__$1 = state_18284;
var statearr_18299_20293 = state_18284__$1;
(statearr_18299_20293[(2)] = null);

(statearr_18299_20293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (11))){
var inst_18259 = (state_18284[(2)]);
var state_18284__$1 = (function (){var statearr_18300 = state_18284;
(statearr_18300[(10)] = inst_18259);

return statearr_18300;
})();
var statearr_18301_20294 = state_18284__$1;
(statearr_18301_20294[(2)] = null);

(statearr_18301_20294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (9))){
var state_18284__$1 = state_18284;
var statearr_18303_20295 = state_18284__$1;
(statearr_18303_20295[(2)] = null);

(statearr_18303_20295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (5))){
var state_18284__$1 = state_18284;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18304_20296 = state_18284__$1;
(statearr_18304_20296[(1)] = (8));

} else {
var statearr_18305_20297 = state_18284__$1;
(statearr_18305_20297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (14))){
var inst_18264 = (state_18284[(11)]);
var inst_18262 = (state_18284[(8)]);
var inst_18262__$1 = (state_18284[(2)]);
var inst_18263 = (inst_18262__$1 == null);
var inst_18264__$1 = cljs.core.not(inst_18263);
var state_18284__$1 = (function (){var statearr_18306 = state_18284;
(statearr_18306[(11)] = inst_18264__$1);

(statearr_18306[(8)] = inst_18262__$1);

return statearr_18306;
})();
if(inst_18264__$1){
var statearr_18307_20298 = state_18284__$1;
(statearr_18307_20298[(1)] = (15));

} else {
var statearr_18308_20299 = state_18284__$1;
(statearr_18308_20299[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (16))){
var inst_18264 = (state_18284[(11)]);
var state_18284__$1 = state_18284;
var statearr_18309_20300 = state_18284__$1;
(statearr_18309_20300[(2)] = inst_18264);

(statearr_18309_20300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (10))){
var inst_18256 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
var statearr_18310_20301 = state_18284__$1;
(statearr_18310_20301[(2)] = inst_18256);

(statearr_18310_20301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (18))){
var inst_18267 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
var statearr_18312_20302 = state_18284__$1;
(statearr_18312_20302[(2)] = inst_18267);

(statearr_18312_20302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (8))){
var inst_18253 = cljs.core.async.close_BANG_(to);
var state_18284__$1 = state_18284;
var statearr_18313_20303 = state_18284__$1;
(statearr_18313_20303[(2)] = inst_18253);

(statearr_18313_20303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0 = (function (){
var statearr_18314 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__);

(statearr_18314[(1)] = (1));

return statearr_18314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1 = (function (state_18284){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18284);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18315){var ex__17412__auto__ = e18315;
var statearr_18316_20305 = state_18284;
(statearr_18316_20305[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18284[(4)]))){
var statearr_18317_20307 = state_18284;
(statearr_18317_20307[(1)] = cljs.core.first((state_18284[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20308 = state_18284;
state_18284 = G__20308;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__ = function(state_18284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1.call(this,state_18284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_18319 = f__17782__auto__();
(statearr_18319[(6)] = c__17781__auto__);

return statearr_18319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));

return c__17781__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18321 = arguments.length;
switch (G__18321) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18324 = arguments.length;
switch (G__18324) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18328 = arguments.length;
switch (G__18328) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17781__auto___20319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_18356){
var state_val_18357 = (state_18356[(1)]);
if((state_val_18357 === (7))){
var inst_18352 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
var statearr_18358_20320 = state_18356__$1;
(statearr_18358_20320[(2)] = inst_18352);

(statearr_18358_20320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (1))){
var state_18356__$1 = state_18356;
var statearr_18359_20321 = state_18356__$1;
(statearr_18359_20321[(2)] = null);

(statearr_18359_20321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (4))){
var inst_18333 = (state_18356[(7)]);
var inst_18333__$1 = (state_18356[(2)]);
var inst_18334 = (inst_18333__$1 == null);
var state_18356__$1 = (function (){var statearr_18360 = state_18356;
(statearr_18360[(7)] = inst_18333__$1);

return statearr_18360;
})();
if(cljs.core.truth_(inst_18334)){
var statearr_18361_20322 = state_18356__$1;
(statearr_18361_20322[(1)] = (5));

} else {
var statearr_18362_20323 = state_18356__$1;
(statearr_18362_20323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (13))){
var state_18356__$1 = state_18356;
var statearr_18363_20324 = state_18356__$1;
(statearr_18363_20324[(2)] = null);

(statearr_18363_20324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (6))){
var inst_18333 = (state_18356[(7)]);
var inst_18339 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18333) : p.call(null,inst_18333));
var state_18356__$1 = state_18356;
if(cljs.core.truth_(inst_18339)){
var statearr_18364_20325 = state_18356__$1;
(statearr_18364_20325[(1)] = (9));

} else {
var statearr_18365_20326 = state_18356__$1;
(statearr_18365_20326[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (3))){
var inst_18354 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18356__$1,inst_18354);
} else {
if((state_val_18357 === (12))){
var state_18356__$1 = state_18356;
var statearr_18366_20327 = state_18356__$1;
(statearr_18366_20327[(2)] = null);

(statearr_18366_20327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (2))){
var state_18356__$1 = state_18356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18356__$1,(4),ch);
} else {
if((state_val_18357 === (11))){
var inst_18333 = (state_18356[(7)]);
var inst_18343 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18356__$1,(8),inst_18343,inst_18333);
} else {
if((state_val_18357 === (9))){
var state_18356__$1 = state_18356;
var statearr_18367_20328 = state_18356__$1;
(statearr_18367_20328[(2)] = tc);

(statearr_18367_20328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (5))){
var inst_18336 = cljs.core.async.close_BANG_(tc);
var inst_18337 = cljs.core.async.close_BANG_(fc);
var state_18356__$1 = (function (){var statearr_18370 = state_18356;
(statearr_18370[(8)] = inst_18336);

return statearr_18370;
})();
var statearr_18371_20329 = state_18356__$1;
(statearr_18371_20329[(2)] = inst_18337);

(statearr_18371_20329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (14))){
var inst_18350 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
var statearr_18372_20330 = state_18356__$1;
(statearr_18372_20330[(2)] = inst_18350);

(statearr_18372_20330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (10))){
var state_18356__$1 = state_18356;
var statearr_18373_20331 = state_18356__$1;
(statearr_18373_20331[(2)] = fc);

(statearr_18373_20331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (8))){
var inst_18345 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
if(cljs.core.truth_(inst_18345)){
var statearr_18374_20333 = state_18356__$1;
(statearr_18374_20333[(1)] = (12));

} else {
var statearr_18375_20334 = state_18356__$1;
(statearr_18375_20334[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_18376 = [null,null,null,null,null,null,null,null,null];
(statearr_18376[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_18376[(1)] = (1));

return statearr_18376;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_18356){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18356);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18377){var ex__17412__auto__ = e18377;
var statearr_18378_20336 = state_18356;
(statearr_18378_20336[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18356[(4)]))){
var statearr_18379_20337 = state_18356;
(statearr_18379_20337[(1)] = cljs.core.first((state_18356[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20338 = state_18356;
state_18356 = G__20338;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_18356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_18356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_18380 = f__17782__auto__();
(statearr_18380[(6)] = c__17781__auto___20319);

return statearr_18380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_18408){
var state_val_18409 = (state_18408[(1)]);
if((state_val_18409 === (7))){
var inst_18402 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
var statearr_18413_20339 = state_18408__$1;
(statearr_18413_20339[(2)] = inst_18402);

(statearr_18413_20339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (1))){
var inst_18384 = init;
var inst_18385 = inst_18384;
var state_18408__$1 = (function (){var statearr_18414 = state_18408;
(statearr_18414[(7)] = inst_18385);

return statearr_18414;
})();
var statearr_18415_20340 = state_18408__$1;
(statearr_18415_20340[(2)] = null);

(statearr_18415_20340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (4))){
var inst_18388 = (state_18408[(8)]);
var inst_18388__$1 = (state_18408[(2)]);
var inst_18389 = (inst_18388__$1 == null);
var state_18408__$1 = (function (){var statearr_18417 = state_18408;
(statearr_18417[(8)] = inst_18388__$1);

return statearr_18417;
})();
if(cljs.core.truth_(inst_18389)){
var statearr_18419_20341 = state_18408__$1;
(statearr_18419_20341[(1)] = (5));

} else {
var statearr_18422_20342 = state_18408__$1;
(statearr_18422_20342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (6))){
var inst_18388 = (state_18408[(8)]);
var inst_18392 = (state_18408[(9)]);
var inst_18385 = (state_18408[(7)]);
var inst_18392__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18385,inst_18388) : f.call(null,inst_18385,inst_18388));
var inst_18393 = cljs.core.reduced_QMARK_(inst_18392__$1);
var state_18408__$1 = (function (){var statearr_18424 = state_18408;
(statearr_18424[(9)] = inst_18392__$1);

return statearr_18424;
})();
if(inst_18393){
var statearr_18428_20343 = state_18408__$1;
(statearr_18428_20343[(1)] = (8));

} else {
var statearr_18429_20344 = state_18408__$1;
(statearr_18429_20344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (3))){
var inst_18405 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18408__$1,inst_18405);
} else {
if((state_val_18409 === (2))){
var state_18408__$1 = state_18408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18408__$1,(4),ch);
} else {
if((state_val_18409 === (9))){
var inst_18392 = (state_18408[(9)]);
var inst_18385 = inst_18392;
var state_18408__$1 = (function (){var statearr_18435 = state_18408;
(statearr_18435[(7)] = inst_18385);

return statearr_18435;
})();
var statearr_18438_20345 = state_18408__$1;
(statearr_18438_20345[(2)] = null);

(statearr_18438_20345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (5))){
var inst_18385 = (state_18408[(7)]);
var state_18408__$1 = state_18408;
var statearr_18441_20346 = state_18408__$1;
(statearr_18441_20346[(2)] = inst_18385);

(statearr_18441_20346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (10))){
var inst_18399 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
var statearr_18444_20351 = state_18408__$1;
(statearr_18444_20351[(2)] = inst_18399);

(statearr_18444_20351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (8))){
var inst_18392 = (state_18408[(9)]);
var inst_18395 = cljs.core.deref(inst_18392);
var state_18408__$1 = state_18408;
var statearr_18447_20355 = state_18408__$1;
(statearr_18447_20355[(2)] = inst_18395);

(statearr_18447_20355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17409__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17409__auto____0 = (function (){
var statearr_18451 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18451[(0)] = cljs$core$async$reduce_$_state_machine__17409__auto__);

(statearr_18451[(1)] = (1));

return statearr_18451;
});
var cljs$core$async$reduce_$_state_machine__17409__auto____1 = (function (state_18408){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18408);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18453){var ex__17412__auto__ = e18453;
var statearr_18456_20356 = state_18408;
(statearr_18456_20356[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18408[(4)]))){
var statearr_18458_20358 = state_18408;
(statearr_18458_20358[(1)] = cljs.core.first((state_18408[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20359 = state_18408;
state_18408 = G__20359;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17409__auto__ = function(state_18408){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17409__auto____1.call(this,state_18408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17409__auto____0;
cljs$core$async$reduce_$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17409__auto____1;
return cljs$core$async$reduce_$_state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_18463 = f__17782__auto__();
(statearr_18463[(6)] = c__17781__auto__);

return statearr_18463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));

return c__17781__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_18477){
var state_val_18478 = (state_18477[(1)]);
if((state_val_18478 === (1))){
var inst_18470 = cljs.core.async.reduce(f__$1,init,ch);
var state_18477__$1 = state_18477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18477__$1,(2),inst_18470);
} else {
if((state_val_18478 === (2))){
var inst_18473 = (state_18477[(2)]);
var inst_18474 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18473) : f__$1.call(null,inst_18473));
var state_18477__$1 = state_18477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18477__$1,inst_18474);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17409__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17409__auto____0 = (function (){
var statearr_18487 = [null,null,null,null,null,null,null];
(statearr_18487[(0)] = cljs$core$async$transduce_$_state_machine__17409__auto__);

(statearr_18487[(1)] = (1));

return statearr_18487;
});
var cljs$core$async$transduce_$_state_machine__17409__auto____1 = (function (state_18477){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18477);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18489){var ex__17412__auto__ = e18489;
var statearr_18490_20368 = state_18477;
(statearr_18490_20368[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18477[(4)]))){
var statearr_18491_20369 = state_18477;
(statearr_18491_20369[(1)] = cljs.core.first((state_18477[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20370 = state_18477;
state_18477 = G__20370;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17409__auto__ = function(state_18477){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17409__auto____1.call(this,state_18477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17409__auto____0;
cljs$core$async$transduce_$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17409__auto____1;
return cljs$core$async$transduce_$_state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_18496 = f__17782__auto__();
(statearr_18496[(6)] = c__17781__auto__);

return statearr_18496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));

return c__17781__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18504 = arguments.length;
switch (G__18504) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_18538){
var state_val_18539 = (state_18538[(1)]);
if((state_val_18539 === (7))){
var inst_18518 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
var statearr_18545_20375 = state_18538__$1;
(statearr_18545_20375[(2)] = inst_18518);

(statearr_18545_20375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (1))){
var inst_18511 = cljs.core.seq(coll);
var inst_18512 = inst_18511;
var state_18538__$1 = (function (){var statearr_18547 = state_18538;
(statearr_18547[(7)] = inst_18512);

return statearr_18547;
})();
var statearr_18548_20376 = state_18538__$1;
(statearr_18548_20376[(2)] = null);

(statearr_18548_20376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (4))){
var inst_18512 = (state_18538[(7)]);
var inst_18516 = cljs.core.first(inst_18512);
var state_18538__$1 = state_18538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18538__$1,(7),ch,inst_18516);
} else {
if((state_val_18539 === (13))){
var inst_18530 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
var statearr_18553_20377 = state_18538__$1;
(statearr_18553_20377[(2)] = inst_18530);

(statearr_18553_20377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (6))){
var inst_18521 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
if(cljs.core.truth_(inst_18521)){
var statearr_18556_20378 = state_18538__$1;
(statearr_18556_20378[(1)] = (8));

} else {
var statearr_18557_20379 = state_18538__$1;
(statearr_18557_20379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (3))){
var inst_18535 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18538__$1,inst_18535);
} else {
if((state_val_18539 === (12))){
var state_18538__$1 = state_18538;
var statearr_18561_20380 = state_18538__$1;
(statearr_18561_20380[(2)] = null);

(statearr_18561_20380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (2))){
var inst_18512 = (state_18538[(7)]);
var state_18538__$1 = state_18538;
if(cljs.core.truth_(inst_18512)){
var statearr_18562_20385 = state_18538__$1;
(statearr_18562_20385[(1)] = (4));

} else {
var statearr_18564_20386 = state_18538__$1;
(statearr_18564_20386[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (11))){
var inst_18527 = cljs.core.async.close_BANG_(ch);
var state_18538__$1 = state_18538;
var statearr_18565_20390 = state_18538__$1;
(statearr_18565_20390[(2)] = inst_18527);

(statearr_18565_20390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (9))){
var state_18538__$1 = state_18538;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18569_20391 = state_18538__$1;
(statearr_18569_20391[(1)] = (11));

} else {
var statearr_18570_20392 = state_18538__$1;
(statearr_18570_20392[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (5))){
var inst_18512 = (state_18538[(7)]);
var state_18538__$1 = state_18538;
var statearr_18571_20393 = state_18538__$1;
(statearr_18571_20393[(2)] = inst_18512);

(statearr_18571_20393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (10))){
var inst_18533 = (state_18538[(2)]);
var state_18538__$1 = state_18538;
var statearr_18573_20394 = state_18538__$1;
(statearr_18573_20394[(2)] = inst_18533);

(statearr_18573_20394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18539 === (8))){
var inst_18512 = (state_18538[(7)]);
var inst_18523 = cljs.core.next(inst_18512);
var inst_18512__$1 = inst_18523;
var state_18538__$1 = (function (){var statearr_18575 = state_18538;
(statearr_18575[(7)] = inst_18512__$1);

return statearr_18575;
})();
var statearr_18577_20395 = state_18538__$1;
(statearr_18577_20395[(2)] = null);

(statearr_18577_20395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_18580 = [null,null,null,null,null,null,null,null];
(statearr_18580[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_18580[(1)] = (1));

return statearr_18580;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_18538){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18538);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18582){var ex__17412__auto__ = e18582;
var statearr_18583_20399 = state_18538;
(statearr_18583_20399[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18538[(4)]))){
var statearr_18587_20400 = state_18538;
(statearr_18587_20400[(1)] = cljs.core.first((state_18538[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20401 = state_18538;
state_18538 = G__20401;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_18538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_18538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_18594 = f__17782__auto__();
(statearr_18594[(6)] = c__17781__auto__);

return statearr_18594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));

return c__17781__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18602 = arguments.length;
switch (G__18602) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20406 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20406(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20410 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20410(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20411 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20411(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20413 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20413(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18646 = (function (ch,cs,meta18647){
this.ch = ch;
this.cs = cs;
this.meta18647 = meta18647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18648,meta18647__$1){
var self__ = this;
var _18648__$1 = this;
return (new cljs.core.async.t_cljs$core$async18646(self__.ch,self__.cs,meta18647__$1));
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18648){
var self__ = this;
var _18648__$1 = this;
return self__.meta18647;
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18647","meta18647",1212723054,null)], null);
}));

(cljs.core.async.t_cljs$core$async18646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18646");

(cljs.core.async.t_cljs$core$async18646.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18646.
 */
cljs.core.async.__GT_t_cljs$core$async18646 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18646(ch__$1,cs__$1,meta18647){
return (new cljs.core.async.t_cljs$core$async18646(ch__$1,cs__$1,meta18647));
});

}

return (new cljs.core.async.t_cljs$core$async18646(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17781__auto___20422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_18810){
var state_val_18811 = (state_18810[(1)]);
if((state_val_18811 === (7))){
var inst_18804 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18816_20423 = state_18810__$1;
(statearr_18816_20423[(2)] = inst_18804);

(statearr_18816_20423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (20))){
var inst_18698 = (state_18810[(7)]);
var inst_18711 = cljs.core.first(inst_18698);
var inst_18712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18711,(0),null);
var inst_18713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18711,(1),null);
var state_18810__$1 = (function (){var statearr_18821 = state_18810;
(statearr_18821[(8)] = inst_18712);

return statearr_18821;
})();
if(cljs.core.truth_(inst_18713)){
var statearr_18823_20424 = state_18810__$1;
(statearr_18823_20424[(1)] = (22));

} else {
var statearr_18824_20425 = state_18810__$1;
(statearr_18824_20425[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (27))){
var inst_18755 = (state_18810[(9)]);
var inst_18745 = (state_18810[(10)]);
var inst_18747 = (state_18810[(11)]);
var inst_18663 = (state_18810[(12)]);
var inst_18755__$1 = cljs.core._nth(inst_18745,inst_18747);
var inst_18756 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18755__$1,inst_18663,done);
var state_18810__$1 = (function (){var statearr_18825 = state_18810;
(statearr_18825[(9)] = inst_18755__$1);

return statearr_18825;
})();
if(cljs.core.truth_(inst_18756)){
var statearr_18826_20426 = state_18810__$1;
(statearr_18826_20426[(1)] = (30));

} else {
var statearr_18827_20427 = state_18810__$1;
(statearr_18827_20427[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (1))){
var state_18810__$1 = state_18810;
var statearr_18828_20428 = state_18810__$1;
(statearr_18828_20428[(2)] = null);

(statearr_18828_20428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (24))){
var inst_18698 = (state_18810[(7)]);
var inst_18721 = (state_18810[(2)]);
var inst_18722 = cljs.core.next(inst_18698);
var inst_18673 = inst_18722;
var inst_18674 = null;
var inst_18675 = (0);
var inst_18676 = (0);
var state_18810__$1 = (function (){var statearr_18836 = state_18810;
(statearr_18836[(13)] = inst_18674);

(statearr_18836[(14)] = inst_18721);

(statearr_18836[(15)] = inst_18673);

(statearr_18836[(16)] = inst_18675);

(statearr_18836[(17)] = inst_18676);

return statearr_18836;
})();
var statearr_18838_20429 = state_18810__$1;
(statearr_18838_20429[(2)] = null);

(statearr_18838_20429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (39))){
var state_18810__$1 = state_18810;
var statearr_18842_20430 = state_18810__$1;
(statearr_18842_20430[(2)] = null);

(statearr_18842_20430[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (4))){
var inst_18663 = (state_18810[(12)]);
var inst_18663__$1 = (state_18810[(2)]);
var inst_18664 = (inst_18663__$1 == null);
var state_18810__$1 = (function (){var statearr_18846 = state_18810;
(statearr_18846[(12)] = inst_18663__$1);

return statearr_18846;
})();
if(cljs.core.truth_(inst_18664)){
var statearr_18848_20431 = state_18810__$1;
(statearr_18848_20431[(1)] = (5));

} else {
var statearr_18849_20432 = state_18810__$1;
(statearr_18849_20432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (15))){
var inst_18674 = (state_18810[(13)]);
var inst_18673 = (state_18810[(15)]);
var inst_18675 = (state_18810[(16)]);
var inst_18676 = (state_18810[(17)]);
var inst_18694 = (state_18810[(2)]);
var inst_18695 = (inst_18676 + (1));
var tmp18839 = inst_18674;
var tmp18840 = inst_18673;
var tmp18841 = inst_18675;
var inst_18673__$1 = tmp18840;
var inst_18674__$1 = tmp18839;
var inst_18675__$1 = tmp18841;
var inst_18676__$1 = inst_18695;
var state_18810__$1 = (function (){var statearr_18853 = state_18810;
(statearr_18853[(13)] = inst_18674__$1);

(statearr_18853[(15)] = inst_18673__$1);

(statearr_18853[(16)] = inst_18675__$1);

(statearr_18853[(18)] = inst_18694);

(statearr_18853[(17)] = inst_18676__$1);

return statearr_18853;
})();
var statearr_18855_20433 = state_18810__$1;
(statearr_18855_20433[(2)] = null);

(statearr_18855_20433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (21))){
var inst_18725 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18859_20434 = state_18810__$1;
(statearr_18859_20434[(2)] = inst_18725);

(statearr_18859_20434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (31))){
var inst_18755 = (state_18810[(9)]);
var inst_18759 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18755);
var state_18810__$1 = state_18810;
var statearr_18863_20435 = state_18810__$1;
(statearr_18863_20435[(2)] = inst_18759);

(statearr_18863_20435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (32))){
var inst_18744 = (state_18810[(19)]);
var inst_18745 = (state_18810[(10)]);
var inst_18746 = (state_18810[(20)]);
var inst_18747 = (state_18810[(11)]);
var inst_18761 = (state_18810[(2)]);
var inst_18762 = (inst_18747 + (1));
var tmp18856 = inst_18744;
var tmp18857 = inst_18745;
var tmp18858 = inst_18746;
var inst_18744__$1 = tmp18856;
var inst_18745__$1 = tmp18857;
var inst_18746__$1 = tmp18858;
var inst_18747__$1 = inst_18762;
var state_18810__$1 = (function (){var statearr_18865 = state_18810;
(statearr_18865[(19)] = inst_18744__$1);

(statearr_18865[(10)] = inst_18745__$1);

(statearr_18865[(20)] = inst_18746__$1);

(statearr_18865[(21)] = inst_18761);

(statearr_18865[(11)] = inst_18747__$1);

return statearr_18865;
})();
var statearr_18866_20436 = state_18810__$1;
(statearr_18866_20436[(2)] = null);

(statearr_18866_20436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (40))){
var inst_18777 = (state_18810[(22)]);
var inst_18781 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18777);
var state_18810__$1 = state_18810;
var statearr_18868_20437 = state_18810__$1;
(statearr_18868_20437[(2)] = inst_18781);

(statearr_18868_20437[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (33))){
var inst_18766 = (state_18810[(23)]);
var inst_18770 = cljs.core.chunked_seq_QMARK_(inst_18766);
var state_18810__$1 = state_18810;
if(inst_18770){
var statearr_18869_20438 = state_18810__$1;
(statearr_18869_20438[(1)] = (36));

} else {
var statearr_18870_20439 = state_18810__$1;
(statearr_18870_20439[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (13))){
var inst_18687 = (state_18810[(24)]);
var inst_18691 = cljs.core.async.close_BANG_(inst_18687);
var state_18810__$1 = state_18810;
var statearr_18871_20440 = state_18810__$1;
(statearr_18871_20440[(2)] = inst_18691);

(statearr_18871_20440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (22))){
var inst_18712 = (state_18810[(8)]);
var inst_18717 = cljs.core.async.close_BANG_(inst_18712);
var state_18810__$1 = state_18810;
var statearr_18876_20441 = state_18810__$1;
(statearr_18876_20441[(2)] = inst_18717);

(statearr_18876_20441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (36))){
var inst_18766 = (state_18810[(23)]);
var inst_18772 = cljs.core.chunk_first(inst_18766);
var inst_18773 = cljs.core.chunk_rest(inst_18766);
var inst_18774 = cljs.core.count(inst_18772);
var inst_18744 = inst_18773;
var inst_18745 = inst_18772;
var inst_18746 = inst_18774;
var inst_18747 = (0);
var state_18810__$1 = (function (){var statearr_18881 = state_18810;
(statearr_18881[(19)] = inst_18744);

(statearr_18881[(10)] = inst_18745);

(statearr_18881[(20)] = inst_18746);

(statearr_18881[(11)] = inst_18747);

return statearr_18881;
})();
var statearr_18882_20442 = state_18810__$1;
(statearr_18882_20442[(2)] = null);

(statearr_18882_20442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (41))){
var inst_18766 = (state_18810[(23)]);
var inst_18783 = (state_18810[(2)]);
var inst_18784 = cljs.core.next(inst_18766);
var inst_18744 = inst_18784;
var inst_18745 = null;
var inst_18746 = (0);
var inst_18747 = (0);
var state_18810__$1 = (function (){var statearr_18883 = state_18810;
(statearr_18883[(19)] = inst_18744);

(statearr_18883[(10)] = inst_18745);

(statearr_18883[(25)] = inst_18783);

(statearr_18883[(20)] = inst_18746);

(statearr_18883[(11)] = inst_18747);

return statearr_18883;
})();
var statearr_18887_20448 = state_18810__$1;
(statearr_18887_20448[(2)] = null);

(statearr_18887_20448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (43))){
var state_18810__$1 = state_18810;
var statearr_18889_20449 = state_18810__$1;
(statearr_18889_20449[(2)] = null);

(statearr_18889_20449[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (29))){
var inst_18792 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18890_20450 = state_18810__$1;
(statearr_18890_20450[(2)] = inst_18792);

(statearr_18890_20450[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (44))){
var inst_18801 = (state_18810[(2)]);
var state_18810__$1 = (function (){var statearr_18891 = state_18810;
(statearr_18891[(26)] = inst_18801);

return statearr_18891;
})();
var statearr_18892_20452 = state_18810__$1;
(statearr_18892_20452[(2)] = null);

(statearr_18892_20452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (6))){
var inst_18735 = (state_18810[(27)]);
var inst_18734 = cljs.core.deref(cs);
var inst_18735__$1 = cljs.core.keys(inst_18734);
var inst_18737 = cljs.core.count(inst_18735__$1);
var inst_18738 = cljs.core.reset_BANG_(dctr,inst_18737);
var inst_18743 = cljs.core.seq(inst_18735__$1);
var inst_18744 = inst_18743;
var inst_18745 = null;
var inst_18746 = (0);
var inst_18747 = (0);
var state_18810__$1 = (function (){var statearr_18897 = state_18810;
(statearr_18897[(19)] = inst_18744);

(statearr_18897[(10)] = inst_18745);

(statearr_18897[(20)] = inst_18746);

(statearr_18897[(11)] = inst_18747);

(statearr_18897[(27)] = inst_18735__$1);

(statearr_18897[(28)] = inst_18738);

return statearr_18897;
})();
var statearr_18898_20455 = state_18810__$1;
(statearr_18898_20455[(2)] = null);

(statearr_18898_20455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (28))){
var inst_18744 = (state_18810[(19)]);
var inst_18766 = (state_18810[(23)]);
var inst_18766__$1 = cljs.core.seq(inst_18744);
var state_18810__$1 = (function (){var statearr_18902 = state_18810;
(statearr_18902[(23)] = inst_18766__$1);

return statearr_18902;
})();
if(inst_18766__$1){
var statearr_18904_20459 = state_18810__$1;
(statearr_18904_20459[(1)] = (33));

} else {
var statearr_18905_20460 = state_18810__$1;
(statearr_18905_20460[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (25))){
var inst_18746 = (state_18810[(20)]);
var inst_18747 = (state_18810[(11)]);
var inst_18751 = (inst_18747 < inst_18746);
var inst_18752 = inst_18751;
var state_18810__$1 = state_18810;
if(cljs.core.truth_(inst_18752)){
var statearr_18906_20461 = state_18810__$1;
(statearr_18906_20461[(1)] = (27));

} else {
var statearr_18908_20462 = state_18810__$1;
(statearr_18908_20462[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (34))){
var state_18810__$1 = state_18810;
var statearr_18909_20463 = state_18810__$1;
(statearr_18909_20463[(2)] = null);

(statearr_18909_20463[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (17))){
var state_18810__$1 = state_18810;
var statearr_18910_20465 = state_18810__$1;
(statearr_18910_20465[(2)] = null);

(statearr_18910_20465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (3))){
var inst_18806 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18810__$1,inst_18806);
} else {
if((state_val_18811 === (12))){
var inst_18730 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18918_20470 = state_18810__$1;
(statearr_18918_20470[(2)] = inst_18730);

(statearr_18918_20470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (2))){
var state_18810__$1 = state_18810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18810__$1,(4),ch);
} else {
if((state_val_18811 === (23))){
var state_18810__$1 = state_18810;
var statearr_18920_20471 = state_18810__$1;
(statearr_18920_20471[(2)] = null);

(statearr_18920_20471[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (35))){
var inst_18790 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18921_20473 = state_18810__$1;
(statearr_18921_20473[(2)] = inst_18790);

(statearr_18921_20473[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (19))){
var inst_18698 = (state_18810[(7)]);
var inst_18703 = cljs.core.chunk_first(inst_18698);
var inst_18704 = cljs.core.chunk_rest(inst_18698);
var inst_18705 = cljs.core.count(inst_18703);
var inst_18673 = inst_18704;
var inst_18674 = inst_18703;
var inst_18675 = inst_18705;
var inst_18676 = (0);
var state_18810__$1 = (function (){var statearr_18926 = state_18810;
(statearr_18926[(13)] = inst_18674);

(statearr_18926[(15)] = inst_18673);

(statearr_18926[(16)] = inst_18675);

(statearr_18926[(17)] = inst_18676);

return statearr_18926;
})();
var statearr_18927_20474 = state_18810__$1;
(statearr_18927_20474[(2)] = null);

(statearr_18927_20474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (11))){
var inst_18698 = (state_18810[(7)]);
var inst_18673 = (state_18810[(15)]);
var inst_18698__$1 = cljs.core.seq(inst_18673);
var state_18810__$1 = (function (){var statearr_18932 = state_18810;
(statearr_18932[(7)] = inst_18698__$1);

return statearr_18932;
})();
if(inst_18698__$1){
var statearr_18933_20475 = state_18810__$1;
(statearr_18933_20475[(1)] = (16));

} else {
var statearr_18934_20476 = state_18810__$1;
(statearr_18934_20476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (9))){
var inst_18732 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18935_20477 = state_18810__$1;
(statearr_18935_20477[(2)] = inst_18732);

(statearr_18935_20477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (5))){
var inst_18671 = cljs.core.deref(cs);
var inst_18672 = cljs.core.seq(inst_18671);
var inst_18673 = inst_18672;
var inst_18674 = null;
var inst_18675 = (0);
var inst_18676 = (0);
var state_18810__$1 = (function (){var statearr_18940 = state_18810;
(statearr_18940[(13)] = inst_18674);

(statearr_18940[(15)] = inst_18673);

(statearr_18940[(16)] = inst_18675);

(statearr_18940[(17)] = inst_18676);

return statearr_18940;
})();
var statearr_18941_20483 = state_18810__$1;
(statearr_18941_20483[(2)] = null);

(statearr_18941_20483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (14))){
var state_18810__$1 = state_18810;
var statearr_18942_20484 = state_18810__$1;
(statearr_18942_20484[(2)] = null);

(statearr_18942_20484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (45))){
var inst_18798 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18944_20485 = state_18810__$1;
(statearr_18944_20485[(2)] = inst_18798);

(statearr_18944_20485[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (26))){
var inst_18735 = (state_18810[(27)]);
var inst_18794 = (state_18810[(2)]);
var inst_18795 = cljs.core.seq(inst_18735);
var state_18810__$1 = (function (){var statearr_18945 = state_18810;
(statearr_18945[(29)] = inst_18794);

return statearr_18945;
})();
if(inst_18795){
var statearr_18946_20489 = state_18810__$1;
(statearr_18946_20489[(1)] = (42));

} else {
var statearr_18947_20490 = state_18810__$1;
(statearr_18947_20490[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (16))){
var inst_18698 = (state_18810[(7)]);
var inst_18701 = cljs.core.chunked_seq_QMARK_(inst_18698);
var state_18810__$1 = state_18810;
if(inst_18701){
var statearr_18948_20494 = state_18810__$1;
(statearr_18948_20494[(1)] = (19));

} else {
var statearr_18949_20495 = state_18810__$1;
(statearr_18949_20495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (38))){
var inst_18787 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18954_20496 = state_18810__$1;
(statearr_18954_20496[(2)] = inst_18787);

(statearr_18954_20496[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (30))){
var state_18810__$1 = state_18810;
var statearr_18959_20502 = state_18810__$1;
(statearr_18959_20502[(2)] = null);

(statearr_18959_20502[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (10))){
var inst_18674 = (state_18810[(13)]);
var inst_18676 = (state_18810[(17)]);
var inst_18685 = cljs.core._nth(inst_18674,inst_18676);
var inst_18687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18685,(0),null);
var inst_18688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18685,(1),null);
var state_18810__$1 = (function (){var statearr_18960 = state_18810;
(statearr_18960[(24)] = inst_18687);

return statearr_18960;
})();
if(cljs.core.truth_(inst_18688)){
var statearr_18961_20507 = state_18810__$1;
(statearr_18961_20507[(1)] = (13));

} else {
var statearr_18962_20511 = state_18810__$1;
(statearr_18962_20511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (18))){
var inst_18728 = (state_18810[(2)]);
var state_18810__$1 = state_18810;
var statearr_18967_20512 = state_18810__$1;
(statearr_18967_20512[(2)] = inst_18728);

(statearr_18967_20512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (42))){
var state_18810__$1 = state_18810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18810__$1,(45),dchan);
} else {
if((state_val_18811 === (37))){
var inst_18777 = (state_18810[(22)]);
var inst_18663 = (state_18810[(12)]);
var inst_18766 = (state_18810[(23)]);
var inst_18777__$1 = cljs.core.first(inst_18766);
var inst_18778 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18777__$1,inst_18663,done);
var state_18810__$1 = (function (){var statearr_18972 = state_18810;
(statearr_18972[(22)] = inst_18777__$1);

return statearr_18972;
})();
if(cljs.core.truth_(inst_18778)){
var statearr_18973_20517 = state_18810__$1;
(statearr_18973_20517[(1)] = (39));

} else {
var statearr_18974_20524 = state_18810__$1;
(statearr_18974_20524[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18811 === (8))){
var inst_18675 = (state_18810[(16)]);
var inst_18676 = (state_18810[(17)]);
var inst_18678 = (inst_18676 < inst_18675);
var inst_18679 = inst_18678;
var state_18810__$1 = state_18810;
if(cljs.core.truth_(inst_18679)){
var statearr_18978_20529 = state_18810__$1;
(statearr_18978_20529[(1)] = (10));

} else {
var statearr_18979_20530 = state_18810__$1;
(statearr_18979_20530[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17409__auto__ = null;
var cljs$core$async$mult_$_state_machine__17409__auto____0 = (function (){
var statearr_18981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18981[(0)] = cljs$core$async$mult_$_state_machine__17409__auto__);

(statearr_18981[(1)] = (1));

return statearr_18981;
});
var cljs$core$async$mult_$_state_machine__17409__auto____1 = (function (state_18810){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_18810);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e18982){var ex__17412__auto__ = e18982;
var statearr_18983_20531 = state_18810;
(statearr_18983_20531[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_18810[(4)]))){
var statearr_18984_20532 = state_18810;
(statearr_18984_20532[(1)] = cljs.core.first((state_18810[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20537 = state_18810;
state_18810 = G__20537;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17409__auto__ = function(state_18810){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17409__auto____1.call(this,state_18810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17409__auto____0;
cljs$core$async$mult_$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17409__auto____1;
return cljs$core$async$mult_$_state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_18989 = f__17782__auto__();
(statearr_18989[(6)] = c__17781__auto___20422);

return statearr_18989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18992 = arguments.length;
switch (G__18992) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20542 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20542(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20547 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20547(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20548 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20548(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20555 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20555(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20562 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20562(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20563 = arguments.length;
var i__5770__auto___20564 = (0);
while(true){
if((i__5770__auto___20564 < len__5769__auto___20563)){
args__5775__auto__.push((arguments[i__5770__auto___20564]));

var G__20565 = (i__5770__auto___20564 + (1));
i__5770__auto___20564 = G__20565;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19001){
var map__19002 = p__19001;
var map__19002__$1 = cljs.core.__destructure_map(map__19002);
var opts = map__19002__$1;
var statearr_19003_20566 = state;
(statearr_19003_20566[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19004_20567 = state;
(statearr_19004_20567[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19006_20568 = state;
(statearr_19006_20568[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18997){
var G__18998 = cljs.core.first(seq18997);
var seq18997__$1 = cljs.core.next(seq18997);
var G__18999 = cljs.core.first(seq18997__$1);
var seq18997__$2 = cljs.core.next(seq18997__$1);
var G__19000 = cljs.core.first(seq18997__$2);
var seq18997__$3 = cljs.core.next(seq18997__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18998,G__18999,G__19000,seq18997__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19010 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19011){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19011 = meta19011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19012,meta19011__$1){
var self__ = this;
var _19012__$1 = this;
return (new cljs.core.async.t_cljs$core$async19010(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19011__$1));
}));

(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19012){
var self__ = this;
var _19012__$1 = this;
return self__.meta19011;
}));

(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19010.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19011","meta19011",-784955089,null)], null);
}));

(cljs.core.async.t_cljs$core$async19010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19010");

(cljs.core.async.t_cljs$core$async19010.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19010.
 */
cljs.core.async.__GT_t_cljs$core$async19010 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19010(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19011){
return (new cljs.core.async.t_cljs$core$async19010(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19011));
});

}

return (new cljs.core.async.t_cljs$core$async19010(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17781__auto___20613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_19088){
var state_val_19089 = (state_19088[(1)]);
if((state_val_19089 === (7))){
var inst_19046 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
if(cljs.core.truth_(inst_19046)){
var statearr_19093_20614 = state_19088__$1;
(statearr_19093_20614[(1)] = (8));

} else {
var statearr_19094_20619 = state_19088__$1;
(statearr_19094_20619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (20))){
var inst_19039 = (state_19088[(7)]);
var state_19088__$1 = state_19088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19088__$1,(23),out,inst_19039);
} else {
if((state_val_19089 === (1))){
var inst_19022 = calc_state();
var inst_19023 = cljs.core.__destructure_map(inst_19022);
var inst_19024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19023,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19023,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19023,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19027 = inst_19022;
var state_19088__$1 = (function (){var statearr_19095 = state_19088;
(statearr_19095[(8)] = inst_19027);

(statearr_19095[(9)] = inst_19026);

(statearr_19095[(10)] = inst_19025);

(statearr_19095[(11)] = inst_19024);

return statearr_19095;
})();
var statearr_19096_20633 = state_19088__$1;
(statearr_19096_20633[(2)] = null);

(statearr_19096_20633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (24))){
var inst_19030 = (state_19088[(12)]);
var inst_19027 = inst_19030;
var state_19088__$1 = (function (){var statearr_19100 = state_19088;
(statearr_19100[(8)] = inst_19027);

return statearr_19100;
})();
var statearr_19101_20643 = state_19088__$1;
(statearr_19101_20643[(2)] = null);

(statearr_19101_20643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (4))){
var inst_19039 = (state_19088[(7)]);
var inst_19041 = (state_19088[(13)]);
var inst_19038 = (state_19088[(2)]);
var inst_19039__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19038,(0),null);
var inst_19040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19038,(1),null);
var inst_19041__$1 = (inst_19039__$1 == null);
var state_19088__$1 = (function (){var statearr_19102 = state_19088;
(statearr_19102[(7)] = inst_19039__$1);

(statearr_19102[(13)] = inst_19041__$1);

(statearr_19102[(14)] = inst_19040);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19041__$1)){
var statearr_19103_20648 = state_19088__$1;
(statearr_19103_20648[(1)] = (5));

} else {
var statearr_19104_20653 = state_19088__$1;
(statearr_19104_20653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (15))){
var inst_19031 = (state_19088[(15)]);
var inst_19061 = (state_19088[(16)]);
var inst_19061__$1 = cljs.core.empty_QMARK_(inst_19031);
var state_19088__$1 = (function (){var statearr_19105 = state_19088;
(statearr_19105[(16)] = inst_19061__$1);

return statearr_19105;
})();
if(inst_19061__$1){
var statearr_19106_20663 = state_19088__$1;
(statearr_19106_20663[(1)] = (17));

} else {
var statearr_19107_20664 = state_19088__$1;
(statearr_19107_20664[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (21))){
var inst_19030 = (state_19088[(12)]);
var inst_19027 = inst_19030;
var state_19088__$1 = (function (){var statearr_19108 = state_19088;
(statearr_19108[(8)] = inst_19027);

return statearr_19108;
})();
var statearr_19109_20671 = state_19088__$1;
(statearr_19109_20671[(2)] = null);

(statearr_19109_20671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (13))){
var inst_19054 = (state_19088[(2)]);
var inst_19055 = calc_state();
var inst_19027 = inst_19055;
var state_19088__$1 = (function (){var statearr_19113 = state_19088;
(statearr_19113[(17)] = inst_19054);

(statearr_19113[(8)] = inst_19027);

return statearr_19113;
})();
var statearr_19118_20683 = state_19088__$1;
(statearr_19118_20683[(2)] = null);

(statearr_19118_20683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (22))){
var inst_19081 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
var statearr_19125_20693 = state_19088__$1;
(statearr_19125_20693[(2)] = inst_19081);

(statearr_19125_20693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (6))){
var inst_19040 = (state_19088[(14)]);
var inst_19044 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19040,change);
var state_19088__$1 = state_19088;
var statearr_19132_20695 = state_19088__$1;
(statearr_19132_20695[(2)] = inst_19044);

(statearr_19132_20695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (25))){
var state_19088__$1 = state_19088;
var statearr_19133_20700 = state_19088__$1;
(statearr_19133_20700[(2)] = null);

(statearr_19133_20700[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (17))){
var inst_19032 = (state_19088[(18)]);
var inst_19040 = (state_19088[(14)]);
var inst_19063 = (inst_19032.cljs$core$IFn$_invoke$arity$1 ? inst_19032.cljs$core$IFn$_invoke$arity$1(inst_19040) : inst_19032.call(null,inst_19040));
var inst_19064 = cljs.core.not(inst_19063);
var state_19088__$1 = state_19088;
var statearr_19134_20702 = state_19088__$1;
(statearr_19134_20702[(2)] = inst_19064);

(statearr_19134_20702[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (3))){
var inst_19086 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19088__$1,inst_19086);
} else {
if((state_val_19089 === (12))){
var state_19088__$1 = state_19088;
var statearr_19135_20703 = state_19088__$1;
(statearr_19135_20703[(2)] = null);

(statearr_19135_20703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (2))){
var inst_19027 = (state_19088[(8)]);
var inst_19030 = (state_19088[(12)]);
var inst_19030__$1 = cljs.core.__destructure_map(inst_19027);
var inst_19031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19030__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19030__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19030__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19088__$1 = (function (){var statearr_19146 = state_19088;
(statearr_19146[(18)] = inst_19032);

(statearr_19146[(15)] = inst_19031);

(statearr_19146[(12)] = inst_19030__$1);

return statearr_19146;
})();
return cljs.core.async.ioc_alts_BANG_(state_19088__$1,(4),inst_19033);
} else {
if((state_val_19089 === (23))){
var inst_19072 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
if(cljs.core.truth_(inst_19072)){
var statearr_19147_20709 = state_19088__$1;
(statearr_19147_20709[(1)] = (24));

} else {
var statearr_19148_20710 = state_19088__$1;
(statearr_19148_20710[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (19))){
var inst_19067 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
var statearr_19149_20711 = state_19088__$1;
(statearr_19149_20711[(2)] = inst_19067);

(statearr_19149_20711[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (11))){
var inst_19040 = (state_19088[(14)]);
var inst_19051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19040);
var state_19088__$1 = state_19088;
var statearr_19153_20712 = state_19088__$1;
(statearr_19153_20712[(2)] = inst_19051);

(statearr_19153_20712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (9))){
var inst_19058 = (state_19088[(19)]);
var inst_19031 = (state_19088[(15)]);
var inst_19040 = (state_19088[(14)]);
var inst_19058__$1 = (inst_19031.cljs$core$IFn$_invoke$arity$1 ? inst_19031.cljs$core$IFn$_invoke$arity$1(inst_19040) : inst_19031.call(null,inst_19040));
var state_19088__$1 = (function (){var statearr_19154 = state_19088;
(statearr_19154[(19)] = inst_19058__$1);

return statearr_19154;
})();
if(cljs.core.truth_(inst_19058__$1)){
var statearr_19155_20714 = state_19088__$1;
(statearr_19155_20714[(1)] = (14));

} else {
var statearr_19156_20715 = state_19088__$1;
(statearr_19156_20715[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (5))){
var inst_19041 = (state_19088[(13)]);
var state_19088__$1 = state_19088;
var statearr_19157_20719 = state_19088__$1;
(statearr_19157_20719[(2)] = inst_19041);

(statearr_19157_20719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (14))){
var inst_19058 = (state_19088[(19)]);
var state_19088__$1 = state_19088;
var statearr_19158_20720 = state_19088__$1;
(statearr_19158_20720[(2)] = inst_19058);

(statearr_19158_20720[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (26))){
var inst_19077 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
var statearr_19159_20721 = state_19088__$1;
(statearr_19159_20721[(2)] = inst_19077);

(statearr_19159_20721[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (16))){
var inst_19069 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
if(cljs.core.truth_(inst_19069)){
var statearr_19160_20723 = state_19088__$1;
(statearr_19160_20723[(1)] = (20));

} else {
var statearr_19161_20724 = state_19088__$1;
(statearr_19161_20724[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (10))){
var inst_19083 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
var statearr_19163_20725 = state_19088__$1;
(statearr_19163_20725[(2)] = inst_19083);

(statearr_19163_20725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (18))){
var inst_19061 = (state_19088[(16)]);
var state_19088__$1 = state_19088;
var statearr_19167_20726 = state_19088__$1;
(statearr_19167_20726[(2)] = inst_19061);

(statearr_19167_20726[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (8))){
var inst_19039 = (state_19088[(7)]);
var inst_19048 = (inst_19039 == null);
var state_19088__$1 = state_19088;
if(cljs.core.truth_(inst_19048)){
var statearr_19168_20728 = state_19088__$1;
(statearr_19168_20728[(1)] = (11));

} else {
var statearr_19169_20730 = state_19088__$1;
(statearr_19169_20730[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17409__auto__ = null;
var cljs$core$async$mix_$_state_machine__17409__auto____0 = (function (){
var statearr_19170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19170[(0)] = cljs$core$async$mix_$_state_machine__17409__auto__);

(statearr_19170[(1)] = (1));

return statearr_19170;
});
var cljs$core$async$mix_$_state_machine__17409__auto____1 = (function (state_19088){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_19088);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e19171){var ex__17412__auto__ = e19171;
var statearr_19172_20731 = state_19088;
(statearr_19172_20731[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_19088[(4)]))){
var statearr_19173_20732 = state_19088;
(statearr_19173_20732[(1)] = cljs.core.first((state_19088[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20733 = state_19088;
state_19088 = G__20733;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17409__auto__ = function(state_19088){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17409__auto____1.call(this,state_19088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17409__auto____0;
cljs$core$async$mix_$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17409__auto____1;
return cljs$core$async$mix_$_state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_19174 = f__17782__auto__();
(statearr_19174[(6)] = c__17781__auto___20613);

return statearr_19174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20736 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20736(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20739 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20739(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20743 = (function() {
var G__20744 = null;
var G__20744__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20744__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20744 = function(p,v){
switch(arguments.length){
case 1:
return G__20744__1.call(this,p);
case 2:
return G__20744__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20744.cljs$core$IFn$_invoke$arity$1 = G__20744__1;
G__20744.cljs$core$IFn$_invoke$arity$2 = G__20744__2;
return G__20744;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19191 = arguments.length;
switch (G__19191) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20743(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20743(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19194 = arguments.length;
switch (G__19194) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19192_SHARP_){
if(cljs.core.truth_((p1__19192_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19192_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19192_SHARP_.call(null,topic)))){
return p1__19192_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19192_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19195 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19196){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19196 = meta19196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19197,meta19196__$1){
var self__ = this;
var _19197__$1 = this;
return (new cljs.core.async.t_cljs$core$async19195(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19196__$1));
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19197){
var self__ = this;
var _19197__$1 = this;
return self__.meta19196;
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19196","meta19196",-613613601,null)], null);
}));

(cljs.core.async.t_cljs$core$async19195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19195");

(cljs.core.async.t_cljs$core$async19195.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19195.
 */
cljs.core.async.__GT_t_cljs$core$async19195 = (function cljs$core$async$__GT_t_cljs$core$async19195(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19196){
return (new cljs.core.async.t_cljs$core$async19195(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19196));
});

}

return (new cljs.core.async.t_cljs$core$async19195(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17781__auto___20801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_19281){
var state_val_19282 = (state_19281[(1)]);
if((state_val_19282 === (7))){
var inst_19277 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19283_20802 = state_19281__$1;
(statearr_19283_20802[(2)] = inst_19277);

(statearr_19283_20802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (20))){
var state_19281__$1 = state_19281;
var statearr_19285_20803 = state_19281__$1;
(statearr_19285_20803[(2)] = null);

(statearr_19285_20803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (1))){
var state_19281__$1 = state_19281;
var statearr_19289_20804 = state_19281__$1;
(statearr_19289_20804[(2)] = null);

(statearr_19289_20804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (24))){
var inst_19260 = (state_19281[(7)]);
var inst_19269 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19260);
var state_19281__$1 = state_19281;
var statearr_19290_20805 = state_19281__$1;
(statearr_19290_20805[(2)] = inst_19269);

(statearr_19290_20805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (4))){
var inst_19212 = (state_19281[(8)]);
var inst_19212__$1 = (state_19281[(2)]);
var inst_19213 = (inst_19212__$1 == null);
var state_19281__$1 = (function (){var statearr_19291 = state_19281;
(statearr_19291[(8)] = inst_19212__$1);

return statearr_19291;
})();
if(cljs.core.truth_(inst_19213)){
var statearr_19292_20806 = state_19281__$1;
(statearr_19292_20806[(1)] = (5));

} else {
var statearr_19294_20807 = state_19281__$1;
(statearr_19294_20807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (15))){
var inst_19254 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19298_20808 = state_19281__$1;
(statearr_19298_20808[(2)] = inst_19254);

(statearr_19298_20808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (21))){
var inst_19274 = (state_19281[(2)]);
var state_19281__$1 = (function (){var statearr_19299 = state_19281;
(statearr_19299[(9)] = inst_19274);

return statearr_19299;
})();
var statearr_19300_20813 = state_19281__$1;
(statearr_19300_20813[(2)] = null);

(statearr_19300_20813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (13))){
var inst_19236 = (state_19281[(10)]);
var inst_19238 = cljs.core.chunked_seq_QMARK_(inst_19236);
var state_19281__$1 = state_19281;
if(inst_19238){
var statearr_19301_20822 = state_19281__$1;
(statearr_19301_20822[(1)] = (16));

} else {
var statearr_19302_20824 = state_19281__$1;
(statearr_19302_20824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (22))){
var inst_19266 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
if(cljs.core.truth_(inst_19266)){
var statearr_19303_20831 = state_19281__$1;
(statearr_19303_20831[(1)] = (23));

} else {
var statearr_19304_20836 = state_19281__$1;
(statearr_19304_20836[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (6))){
var inst_19260 = (state_19281[(7)]);
var inst_19262 = (state_19281[(11)]);
var inst_19212 = (state_19281[(8)]);
var inst_19260__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19212) : topic_fn.call(null,inst_19212));
var inst_19261 = cljs.core.deref(mults);
var inst_19262__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19261,inst_19260__$1);
var state_19281__$1 = (function (){var statearr_19305 = state_19281;
(statearr_19305[(7)] = inst_19260__$1);

(statearr_19305[(11)] = inst_19262__$1);

return statearr_19305;
})();
if(cljs.core.truth_(inst_19262__$1)){
var statearr_19306_20838 = state_19281__$1;
(statearr_19306_20838[(1)] = (19));

} else {
var statearr_19307_20839 = state_19281__$1;
(statearr_19307_20839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (25))){
var inst_19271 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19308_20840 = state_19281__$1;
(statearr_19308_20840[(2)] = inst_19271);

(statearr_19308_20840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (17))){
var inst_19236 = (state_19281[(10)]);
var inst_19245 = cljs.core.first(inst_19236);
var inst_19246 = cljs.core.async.muxch_STAR_(inst_19245);
var inst_19247 = cljs.core.async.close_BANG_(inst_19246);
var inst_19248 = cljs.core.next(inst_19236);
var inst_19222 = inst_19248;
var inst_19223 = null;
var inst_19224 = (0);
var inst_19225 = (0);
var state_19281__$1 = (function (){var statearr_19309 = state_19281;
(statearr_19309[(12)] = inst_19223);

(statearr_19309[(13)] = inst_19224);

(statearr_19309[(14)] = inst_19247);

(statearr_19309[(15)] = inst_19222);

(statearr_19309[(16)] = inst_19225);

return statearr_19309;
})();
var statearr_19310_20852 = state_19281__$1;
(statearr_19310_20852[(2)] = null);

(statearr_19310_20852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (3))){
var inst_19279 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19281__$1,inst_19279);
} else {
if((state_val_19282 === (12))){
var inst_19256 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19312_20861 = state_19281__$1;
(statearr_19312_20861[(2)] = inst_19256);

(statearr_19312_20861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (2))){
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19281__$1,(4),ch);
} else {
if((state_val_19282 === (23))){
var state_19281__$1 = state_19281;
var statearr_19314_20869 = state_19281__$1;
(statearr_19314_20869[(2)] = null);

(statearr_19314_20869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (19))){
var inst_19262 = (state_19281[(11)]);
var inst_19212 = (state_19281[(8)]);
var inst_19264 = cljs.core.async.muxch_STAR_(inst_19262);
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19281__$1,(22),inst_19264,inst_19212);
} else {
if((state_val_19282 === (11))){
var inst_19236 = (state_19281[(10)]);
var inst_19222 = (state_19281[(15)]);
var inst_19236__$1 = cljs.core.seq(inst_19222);
var state_19281__$1 = (function (){var statearr_19315 = state_19281;
(statearr_19315[(10)] = inst_19236__$1);

return statearr_19315;
})();
if(inst_19236__$1){
var statearr_19316_20881 = state_19281__$1;
(statearr_19316_20881[(1)] = (13));

} else {
var statearr_19317_20882 = state_19281__$1;
(statearr_19317_20882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (9))){
var inst_19258 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19321_20883 = state_19281__$1;
(statearr_19321_20883[(2)] = inst_19258);

(statearr_19321_20883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (5))){
var inst_19219 = cljs.core.deref(mults);
var inst_19220 = cljs.core.vals(inst_19219);
var inst_19221 = cljs.core.seq(inst_19220);
var inst_19222 = inst_19221;
var inst_19223 = null;
var inst_19224 = (0);
var inst_19225 = (0);
var state_19281__$1 = (function (){var statearr_19322 = state_19281;
(statearr_19322[(12)] = inst_19223);

(statearr_19322[(13)] = inst_19224);

(statearr_19322[(15)] = inst_19222);

(statearr_19322[(16)] = inst_19225);

return statearr_19322;
})();
var statearr_19323_20886 = state_19281__$1;
(statearr_19323_20886[(2)] = null);

(statearr_19323_20886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (14))){
var state_19281__$1 = state_19281;
var statearr_19327_20891 = state_19281__$1;
(statearr_19327_20891[(2)] = null);

(statearr_19327_20891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (16))){
var inst_19236 = (state_19281[(10)]);
var inst_19240 = cljs.core.chunk_first(inst_19236);
var inst_19241 = cljs.core.chunk_rest(inst_19236);
var inst_19242 = cljs.core.count(inst_19240);
var inst_19222 = inst_19241;
var inst_19223 = inst_19240;
var inst_19224 = inst_19242;
var inst_19225 = (0);
var state_19281__$1 = (function (){var statearr_19328 = state_19281;
(statearr_19328[(12)] = inst_19223);

(statearr_19328[(13)] = inst_19224);

(statearr_19328[(15)] = inst_19222);

(statearr_19328[(16)] = inst_19225);

return statearr_19328;
})();
var statearr_19329_20903 = state_19281__$1;
(statearr_19329_20903[(2)] = null);

(statearr_19329_20903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (10))){
var inst_19223 = (state_19281[(12)]);
var inst_19224 = (state_19281[(13)]);
var inst_19222 = (state_19281[(15)]);
var inst_19225 = (state_19281[(16)]);
var inst_19230 = cljs.core._nth(inst_19223,inst_19225);
var inst_19231 = cljs.core.async.muxch_STAR_(inst_19230);
var inst_19232 = cljs.core.async.close_BANG_(inst_19231);
var inst_19233 = (inst_19225 + (1));
var tmp19324 = inst_19223;
var tmp19325 = inst_19224;
var tmp19326 = inst_19222;
var inst_19222__$1 = tmp19326;
var inst_19223__$1 = tmp19324;
var inst_19224__$1 = tmp19325;
var inst_19225__$1 = inst_19233;
var state_19281__$1 = (function (){var statearr_19330 = state_19281;
(statearr_19330[(17)] = inst_19232);

(statearr_19330[(12)] = inst_19223__$1);

(statearr_19330[(13)] = inst_19224__$1);

(statearr_19330[(15)] = inst_19222__$1);

(statearr_19330[(16)] = inst_19225__$1);

return statearr_19330;
})();
var statearr_19331_20910 = state_19281__$1;
(statearr_19331_20910[(2)] = null);

(statearr_19331_20910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (18))){
var inst_19251 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19332_20912 = state_19281__$1;
(statearr_19332_20912[(2)] = inst_19251);

(statearr_19332_20912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (8))){
var inst_19224 = (state_19281[(13)]);
var inst_19225 = (state_19281[(16)]);
var inst_19227 = (inst_19225 < inst_19224);
var inst_19228 = inst_19227;
var state_19281__$1 = state_19281;
if(cljs.core.truth_(inst_19228)){
var statearr_19333_20913 = state_19281__$1;
(statearr_19333_20913[(1)] = (10));

} else {
var statearr_19334_20914 = state_19281__$1;
(statearr_19334_20914[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_19335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19335[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_19335[(1)] = (1));

return statearr_19335;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_19281){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_19281);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e19336){var ex__17412__auto__ = e19336;
var statearr_19337_20916 = state_19281;
(statearr_19337_20916[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_19281[(4)]))){
var statearr_19338_20918 = state_19281;
(statearr_19338_20918[(1)] = cljs.core.first((state_19281[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20919 = state_19281;
state_19281 = G__20919;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_19281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_19281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_19339 = f__17782__auto__();
(statearr_19339[(6)] = c__17781__auto___20801);

return statearr_19339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19341 = arguments.length;
switch (G__19341) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19343 = arguments.length;
switch (G__19343) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19345 = arguments.length;
switch (G__19345) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17781__auto___20927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_19392){
var state_val_19393 = (state_19392[(1)]);
if((state_val_19393 === (7))){
var state_19392__$1 = state_19392;
var statearr_19394_20928 = state_19392__$1;
(statearr_19394_20928[(2)] = null);

(statearr_19394_20928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (1))){
var state_19392__$1 = state_19392;
var statearr_19395_20929 = state_19392__$1;
(statearr_19395_20929[(2)] = null);

(statearr_19395_20929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (4))){
var inst_19350 = (state_19392[(7)]);
var inst_19349 = (state_19392[(8)]);
var inst_19352 = (inst_19350 < inst_19349);
var state_19392__$1 = state_19392;
if(cljs.core.truth_(inst_19352)){
var statearr_19396_20930 = state_19392__$1;
(statearr_19396_20930[(1)] = (6));

} else {
var statearr_19397_20931 = state_19392__$1;
(statearr_19397_20931[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (15))){
var inst_19378 = (state_19392[(9)]);
var inst_19383 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19378);
var state_19392__$1 = state_19392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19392__$1,(17),out,inst_19383);
} else {
if((state_val_19393 === (13))){
var inst_19378 = (state_19392[(9)]);
var inst_19378__$1 = (state_19392[(2)]);
var inst_19379 = cljs.core.some(cljs.core.nil_QMARK_,inst_19378__$1);
var state_19392__$1 = (function (){var statearr_19402 = state_19392;
(statearr_19402[(9)] = inst_19378__$1);

return statearr_19402;
})();
if(cljs.core.truth_(inst_19379)){
var statearr_19403_20933 = state_19392__$1;
(statearr_19403_20933[(1)] = (14));

} else {
var statearr_19404_20934 = state_19392__$1;
(statearr_19404_20934[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (6))){
var state_19392__$1 = state_19392;
var statearr_19405_20935 = state_19392__$1;
(statearr_19405_20935[(2)] = null);

(statearr_19405_20935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (17))){
var inst_19385 = (state_19392[(2)]);
var state_19392__$1 = (function (){var statearr_19407 = state_19392;
(statearr_19407[(10)] = inst_19385);

return statearr_19407;
})();
var statearr_19408_20936 = state_19392__$1;
(statearr_19408_20936[(2)] = null);

(statearr_19408_20936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (3))){
var inst_19390 = (state_19392[(2)]);
var state_19392__$1 = state_19392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19392__$1,inst_19390);
} else {
if((state_val_19393 === (12))){
var _ = (function (){var statearr_19409 = state_19392;
(statearr_19409[(4)] = cljs.core.rest((state_19392[(4)])));

return statearr_19409;
})();
var state_19392__$1 = state_19392;
var ex19406 = (state_19392__$1[(2)]);
var statearr_19410_20941 = state_19392__$1;
(statearr_19410_20941[(5)] = ex19406);


if((ex19406 instanceof Object)){
var statearr_19411_20942 = state_19392__$1;
(statearr_19411_20942[(1)] = (11));

(statearr_19411_20942[(5)] = null);

} else {
throw ex19406;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (2))){
var inst_19348 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19349 = cnt;
var inst_19350 = (0);
var state_19392__$1 = (function (){var statearr_19412 = state_19392;
(statearr_19412[(11)] = inst_19348);

(statearr_19412[(7)] = inst_19350);

(statearr_19412[(8)] = inst_19349);

return statearr_19412;
})();
var statearr_19413_20948 = state_19392__$1;
(statearr_19413_20948[(2)] = null);

(statearr_19413_20948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (11))){
var inst_19354 = (state_19392[(2)]);
var inst_19355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19392__$1 = (function (){var statearr_19414 = state_19392;
(statearr_19414[(12)] = inst_19354);

return statearr_19414;
})();
var statearr_19415_20953 = state_19392__$1;
(statearr_19415_20953[(2)] = inst_19355);

(statearr_19415_20953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (9))){
var inst_19350 = (state_19392[(7)]);
var _ = (function (){var statearr_19430 = state_19392;
(statearr_19430[(4)] = cljs.core.cons((12),(state_19392[(4)])));

return statearr_19430;
})();
var inst_19361 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19350) : chs__$1.call(null,inst_19350));
var inst_19362 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19350) : done.call(null,inst_19350));
var inst_19363 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19361,inst_19362);
var ___$1 = (function (){var statearr_19431 = state_19392;
(statearr_19431[(4)] = cljs.core.rest((state_19392[(4)])));

return statearr_19431;
})();
var state_19392__$1 = state_19392;
var statearr_19432_20957 = state_19392__$1;
(statearr_19432_20957[(2)] = inst_19363);

(statearr_19432_20957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (5))){
var inst_19373 = (state_19392[(2)]);
var state_19392__$1 = (function (){var statearr_19439 = state_19392;
(statearr_19439[(13)] = inst_19373);

return statearr_19439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19392__$1,(13),dchan);
} else {
if((state_val_19393 === (14))){
var inst_19381 = cljs.core.async.close_BANG_(out);
var state_19392__$1 = state_19392;
var statearr_19440_20963 = state_19392__$1;
(statearr_19440_20963[(2)] = inst_19381);

(statearr_19440_20963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (16))){
var inst_19388 = (state_19392[(2)]);
var state_19392__$1 = state_19392;
var statearr_19441_20964 = state_19392__$1;
(statearr_19441_20964[(2)] = inst_19388);

(statearr_19441_20964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (10))){
var inst_19350 = (state_19392[(7)]);
var inst_19366 = (state_19392[(2)]);
var inst_19367 = (inst_19350 + (1));
var inst_19350__$1 = inst_19367;
var state_19392__$1 = (function (){var statearr_19450 = state_19392;
(statearr_19450[(7)] = inst_19350__$1);

(statearr_19450[(14)] = inst_19366);

return statearr_19450;
})();
var statearr_19457_20965 = state_19392__$1;
(statearr_19457_20965[(2)] = null);

(statearr_19457_20965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (8))){
var inst_19371 = (state_19392[(2)]);
var state_19392__$1 = state_19392;
var statearr_19458_20968 = state_19392__$1;
(statearr_19458_20968[(2)] = inst_19371);

(statearr_19458_20968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_19465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19465[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_19465[(1)] = (1));

return statearr_19465;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_19392){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_19392);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e19466){var ex__17412__auto__ = e19466;
var statearr_19467_20972 = state_19392;
(statearr_19467_20972[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_19392[(4)]))){
var statearr_19468_20977 = state_19392;
(statearr_19468_20977[(1)] = cljs.core.first((state_19392[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20978 = state_19392;
state_19392 = G__20978;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_19392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_19392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_19471 = f__17782__auto__();
(statearr_19471[(6)] = c__17781__auto___20927);

return statearr_19471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19475 = arguments.length;
switch (G__19475) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17781__auto___20983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_19510){
var state_val_19511 = (state_19510[(1)]);
if((state_val_19511 === (7))){
var inst_19489 = (state_19510[(7)]);
var inst_19490 = (state_19510[(8)]);
var inst_19489__$1 = (state_19510[(2)]);
var inst_19490__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19489__$1,(0),null);
var inst_19491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19489__$1,(1),null);
var inst_19492 = (inst_19490__$1 == null);
var state_19510__$1 = (function (){var statearr_19512 = state_19510;
(statearr_19512[(7)] = inst_19489__$1);

(statearr_19512[(8)] = inst_19490__$1);

(statearr_19512[(9)] = inst_19491);

return statearr_19512;
})();
if(cljs.core.truth_(inst_19492)){
var statearr_19513_20988 = state_19510__$1;
(statearr_19513_20988[(1)] = (8));

} else {
var statearr_19514_20989 = state_19510__$1;
(statearr_19514_20989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (1))){
var inst_19476 = cljs.core.vec(chs);
var inst_19477 = inst_19476;
var state_19510__$1 = (function (){var statearr_19515 = state_19510;
(statearr_19515[(10)] = inst_19477);

return statearr_19515;
})();
var statearr_19516_20990 = state_19510__$1;
(statearr_19516_20990[(2)] = null);

(statearr_19516_20990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (4))){
var inst_19477 = (state_19510[(10)]);
var state_19510__$1 = state_19510;
return cljs.core.async.ioc_alts_BANG_(state_19510__$1,(7),inst_19477);
} else {
if((state_val_19511 === (6))){
var inst_19506 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
var statearr_19517_20991 = state_19510__$1;
(statearr_19517_20991[(2)] = inst_19506);

(statearr_19517_20991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (3))){
var inst_19508 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19510__$1,inst_19508);
} else {
if((state_val_19511 === (2))){
var inst_19477 = (state_19510[(10)]);
var inst_19479 = cljs.core.count(inst_19477);
var inst_19480 = (inst_19479 > (0));
var state_19510__$1 = state_19510;
if(cljs.core.truth_(inst_19480)){
var statearr_19519_20992 = state_19510__$1;
(statearr_19519_20992[(1)] = (4));

} else {
var statearr_19520_20993 = state_19510__$1;
(statearr_19520_20993[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (11))){
var inst_19477 = (state_19510[(10)]);
var inst_19499 = (state_19510[(2)]);
var tmp19518 = inst_19477;
var inst_19477__$1 = tmp19518;
var state_19510__$1 = (function (){var statearr_19521 = state_19510;
(statearr_19521[(11)] = inst_19499);

(statearr_19521[(10)] = inst_19477__$1);

return statearr_19521;
})();
var statearr_19522_20994 = state_19510__$1;
(statearr_19522_20994[(2)] = null);

(statearr_19522_20994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (9))){
var inst_19490 = (state_19510[(8)]);
var state_19510__$1 = state_19510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19510__$1,(11),out,inst_19490);
} else {
if((state_val_19511 === (5))){
var inst_19504 = cljs.core.async.close_BANG_(out);
var state_19510__$1 = state_19510;
var statearr_19523_20996 = state_19510__$1;
(statearr_19523_20996[(2)] = inst_19504);

(statearr_19523_20996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (10))){
var inst_19502 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
var statearr_19524_20997 = state_19510__$1;
(statearr_19524_20997[(2)] = inst_19502);

(statearr_19524_20997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (8))){
var inst_19489 = (state_19510[(7)]);
var inst_19477 = (state_19510[(10)]);
var inst_19490 = (state_19510[(8)]);
var inst_19491 = (state_19510[(9)]);
var inst_19494 = (function (){var cs = inst_19477;
var vec__19485 = inst_19489;
var v = inst_19490;
var c = inst_19491;
return (function (p1__19472_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19472_SHARP_);
});
})();
var inst_19495 = cljs.core.filterv(inst_19494,inst_19477);
var inst_19477__$1 = inst_19495;
var state_19510__$1 = (function (){var statearr_19525 = state_19510;
(statearr_19525[(10)] = inst_19477__$1);

return statearr_19525;
})();
var statearr_19526_21000 = state_19510__$1;
(statearr_19526_21000[(2)] = null);

(statearr_19526_21000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_19527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19527[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_19527[(1)] = (1));

return statearr_19527;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_19510){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_19510);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e19528){var ex__17412__auto__ = e19528;
var statearr_19529_21002 = state_19510;
(statearr_19529_21002[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_19510[(4)]))){
var statearr_19530_21003 = state_19510;
(statearr_19530_21003[(1)] = cljs.core.first((state_19510[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21004 = state_19510;
state_19510 = G__21004;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_19510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_19510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_19531 = f__17782__auto__();
(statearr_19531[(6)] = c__17781__auto___20983);

return statearr_19531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19533 = arguments.length;
switch (G__19533) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17781__auto___21007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_19568){
var state_val_19569 = (state_19568[(1)]);
if((state_val_19569 === (7))){
var inst_19550 = (state_19568[(7)]);
var inst_19550__$1 = (state_19568[(2)]);
var inst_19551 = (inst_19550__$1 == null);
var inst_19552 = cljs.core.not(inst_19551);
var state_19568__$1 = (function (){var statearr_19570 = state_19568;
(statearr_19570[(7)] = inst_19550__$1);

return statearr_19570;
})();
if(inst_19552){
var statearr_19571_21008 = state_19568__$1;
(statearr_19571_21008[(1)] = (8));

} else {
var statearr_19572_21009 = state_19568__$1;
(statearr_19572_21009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (1))){
var inst_19545 = (0);
var state_19568__$1 = (function (){var statearr_19573 = state_19568;
(statearr_19573[(8)] = inst_19545);

return statearr_19573;
})();
var statearr_19574_21010 = state_19568__$1;
(statearr_19574_21010[(2)] = null);

(statearr_19574_21010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (4))){
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19568__$1,(7),ch);
} else {
if((state_val_19569 === (6))){
var inst_19563 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19575_21011 = state_19568__$1;
(statearr_19575_21011[(2)] = inst_19563);

(statearr_19575_21011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (3))){
var inst_19565 = (state_19568[(2)]);
var inst_19566 = cljs.core.async.close_BANG_(out);
var state_19568__$1 = (function (){var statearr_19576 = state_19568;
(statearr_19576[(9)] = inst_19565);

return statearr_19576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19568__$1,inst_19566);
} else {
if((state_val_19569 === (2))){
var inst_19545 = (state_19568[(8)]);
var inst_19547 = (inst_19545 < n);
var state_19568__$1 = state_19568;
if(cljs.core.truth_(inst_19547)){
var statearr_19577_21012 = state_19568__$1;
(statearr_19577_21012[(1)] = (4));

} else {
var statearr_19578_21013 = state_19568__$1;
(statearr_19578_21013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (11))){
var inst_19545 = (state_19568[(8)]);
var inst_19555 = (state_19568[(2)]);
var inst_19556 = (inst_19545 + (1));
var inst_19545__$1 = inst_19556;
var state_19568__$1 = (function (){var statearr_19579 = state_19568;
(statearr_19579[(10)] = inst_19555);

(statearr_19579[(8)] = inst_19545__$1);

return statearr_19579;
})();
var statearr_19580_21014 = state_19568__$1;
(statearr_19580_21014[(2)] = null);

(statearr_19580_21014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (9))){
var state_19568__$1 = state_19568;
var statearr_19581_21015 = state_19568__$1;
(statearr_19581_21015[(2)] = null);

(statearr_19581_21015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (5))){
var state_19568__$1 = state_19568;
var statearr_19582_21017 = state_19568__$1;
(statearr_19582_21017[(2)] = null);

(statearr_19582_21017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (10))){
var inst_19560 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19583_21018 = state_19568__$1;
(statearr_19583_21018[(2)] = inst_19560);

(statearr_19583_21018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (8))){
var inst_19550 = (state_19568[(7)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19568__$1,(11),out,inst_19550);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_19584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19584[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_19584[(1)] = (1));

return statearr_19584;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_19568){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_19568);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e19585){var ex__17412__auto__ = e19585;
var statearr_19586_21021 = state_19568;
(statearr_19586_21021[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_19568[(4)]))){
var statearr_19588_21022 = state_19568;
(statearr_19588_21022[(1)] = cljs.core.first((state_19568[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21023 = state_19568;
state_19568 = G__21023;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_19568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_19568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_19590 = f__17782__auto__();
(statearr_19590[(6)] = c__17781__auto___21007);

return statearr_19590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19594 = (function (f,ch,meta19595){
this.f = f;
this.ch = ch;
this.meta19595 = meta19595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19596,meta19595__$1){
var self__ = this;
var _19596__$1 = this;
return (new cljs.core.async.t_cljs$core$async19594(self__.f,self__.ch,meta19595__$1));
}));

(cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19596){
var self__ = this;
var _19596__$1 = this;
return self__.meta19595;
}));

(cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19601 = (function (f,ch,meta19595,_,fn1,meta19602){
this.f = f;
this.ch = ch;
this.meta19595 = meta19595;
this._ = _;
this.fn1 = fn1;
this.meta19602 = meta19602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19603,meta19602__$1){
var self__ = this;
var _19603__$1 = this;
return (new cljs.core.async.t_cljs$core$async19601(self__.f,self__.ch,self__.meta19595,self__._,self__.fn1,meta19602__$1));
}));

(cljs.core.async.t_cljs$core$async19601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19603){
var self__ = this;
var _19603__$1 = this;
return self__.meta19602;
}));

(cljs.core.async.t_cljs$core$async19601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19593_SHARP_){
var G__19604 = (((p1__19593_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19593_SHARP_) : self__.f.call(null,p1__19593_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19604) : f1.call(null,G__19604));
});
}));

(cljs.core.async.t_cljs$core$async19601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19595","meta19595",-1341467052,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19594","cljs.core.async/t_cljs$core$async19594",-9613220,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19602","meta19602",1005545663,null)], null);
}));

(cljs.core.async.t_cljs$core$async19601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19601");

(cljs.core.async.t_cljs$core$async19601.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19601.
 */
cljs.core.async.__GT_t_cljs$core$async19601 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19601(f__$1,ch__$1,meta19595__$1,___$2,fn1__$1,meta19602){
return (new cljs.core.async.t_cljs$core$async19601(f__$1,ch__$1,meta19595__$1,___$2,fn1__$1,meta19602));
});

}

return (new cljs.core.async.t_cljs$core$async19601(self__.f,self__.ch,self__.meta19595,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19605 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19605) : self__.f.call(null,G__19605));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19595","meta19595",-1341467052,null)], null);
}));

(cljs.core.async.t_cljs$core$async19594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19594");

(cljs.core.async.t_cljs$core$async19594.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19594.
 */
cljs.core.async.__GT_t_cljs$core$async19594 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19594(f__$1,ch__$1,meta19595){
return (new cljs.core.async.t_cljs$core$async19594(f__$1,ch__$1,meta19595));
});

}

return (new cljs.core.async.t_cljs$core$async19594(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19609 = (function (f,ch,meta19610){
this.f = f;
this.ch = ch;
this.meta19610 = meta19610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19611,meta19610__$1){
var self__ = this;
var _19611__$1 = this;
return (new cljs.core.async.t_cljs$core$async19609(self__.f,self__.ch,meta19610__$1));
}));

(cljs.core.async.t_cljs$core$async19609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19611){
var self__ = this;
var _19611__$1 = this;
return self__.meta19610;
}));

(cljs.core.async.t_cljs$core$async19609.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19609.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19609.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19610","meta19610",961730260,null)], null);
}));

(cljs.core.async.t_cljs$core$async19609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19609");

(cljs.core.async.t_cljs$core$async19609.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19609.
 */
cljs.core.async.__GT_t_cljs$core$async19609 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19609(f__$1,ch__$1,meta19610){
return (new cljs.core.async.t_cljs$core$async19609(f__$1,ch__$1,meta19610));
});

}

return (new cljs.core.async.t_cljs$core$async19609(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19635 = (function (p,ch,meta19636){
this.p = p;
this.ch = ch;
this.meta19636 = meta19636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19637,meta19636__$1){
var self__ = this;
var _19637__$1 = this;
return (new cljs.core.async.t_cljs$core$async19635(self__.p,self__.ch,meta19636__$1));
}));

(cljs.core.async.t_cljs$core$async19635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19637){
var self__ = this;
var _19637__$1 = this;
return self__.meta19636;
}));

(cljs.core.async.t_cljs$core$async19635.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19635.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19635.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19635.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19636","meta19636",-450190029,null)], null);
}));

(cljs.core.async.t_cljs$core$async19635.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19635");

(cljs.core.async.t_cljs$core$async19635.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19635");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19635.
 */
cljs.core.async.__GT_t_cljs$core$async19635 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19635(p__$1,ch__$1,meta19636){
return (new cljs.core.async.t_cljs$core$async19635(p__$1,ch__$1,meta19636));
});

}

return (new cljs.core.async.t_cljs$core$async19635(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19658 = arguments.length;
switch (G__19658) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17781__auto___21056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_19679){
var state_val_19680 = (state_19679[(1)]);
if((state_val_19680 === (7))){
var inst_19675 = (state_19679[(2)]);
var state_19679__$1 = state_19679;
var statearr_19681_21057 = state_19679__$1;
(statearr_19681_21057[(2)] = inst_19675);

(statearr_19681_21057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (1))){
var state_19679__$1 = state_19679;
var statearr_19682_21058 = state_19679__$1;
(statearr_19682_21058[(2)] = null);

(statearr_19682_21058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (4))){
var inst_19661 = (state_19679[(7)]);
var inst_19661__$1 = (state_19679[(2)]);
var inst_19662 = (inst_19661__$1 == null);
var state_19679__$1 = (function (){var statearr_19683 = state_19679;
(statearr_19683[(7)] = inst_19661__$1);

return statearr_19683;
})();
if(cljs.core.truth_(inst_19662)){
var statearr_19684_21059 = state_19679__$1;
(statearr_19684_21059[(1)] = (5));

} else {
var statearr_19685_21060 = state_19679__$1;
(statearr_19685_21060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (6))){
var inst_19661 = (state_19679[(7)]);
var inst_19666 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19661) : p.call(null,inst_19661));
var state_19679__$1 = state_19679;
if(cljs.core.truth_(inst_19666)){
var statearr_19686_21063 = state_19679__$1;
(statearr_19686_21063[(1)] = (8));

} else {
var statearr_19687_21064 = state_19679__$1;
(statearr_19687_21064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (3))){
var inst_19677 = (state_19679[(2)]);
var state_19679__$1 = state_19679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19679__$1,inst_19677);
} else {
if((state_val_19680 === (2))){
var state_19679__$1 = state_19679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19679__$1,(4),ch);
} else {
if((state_val_19680 === (11))){
var inst_19669 = (state_19679[(2)]);
var state_19679__$1 = state_19679;
var statearr_19688_21067 = state_19679__$1;
(statearr_19688_21067[(2)] = inst_19669);

(statearr_19688_21067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (9))){
var state_19679__$1 = state_19679;
var statearr_19691_21068 = state_19679__$1;
(statearr_19691_21068[(2)] = null);

(statearr_19691_21068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (5))){
var inst_19664 = cljs.core.async.close_BANG_(out);
var state_19679__$1 = state_19679;
var statearr_19692_21071 = state_19679__$1;
(statearr_19692_21071[(2)] = inst_19664);

(statearr_19692_21071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (10))){
var inst_19672 = (state_19679[(2)]);
var state_19679__$1 = (function (){var statearr_19693 = state_19679;
(statearr_19693[(8)] = inst_19672);

return statearr_19693;
})();
var statearr_19694_21072 = state_19679__$1;
(statearr_19694_21072[(2)] = null);

(statearr_19694_21072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (8))){
var inst_19661 = (state_19679[(7)]);
var state_19679__$1 = state_19679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19679__$1,(11),out,inst_19661);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_19696 = [null,null,null,null,null,null,null,null,null];
(statearr_19696[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_19696[(1)] = (1));

return statearr_19696;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_19679){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_19679);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e19707){var ex__17412__auto__ = e19707;
var statearr_19708_21073 = state_19679;
(statearr_19708_21073[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_19679[(4)]))){
var statearr_19709_21075 = state_19679;
(statearr_19709_21075[(1)] = cljs.core.first((state_19679[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21077 = state_19679;
state_19679 = G__21077;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_19679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_19679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_19710 = f__17782__auto__();
(statearr_19710[(6)] = c__17781__auto___21056);

return statearr_19710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19714 = arguments.length;
switch (G__19714) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_19776){
var state_val_19777 = (state_19776[(1)]);
if((state_val_19777 === (7))){
var inst_19772 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19780_21084 = state_19776__$1;
(statearr_19780_21084[(2)] = inst_19772);

(statearr_19780_21084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (20))){
var inst_19742 = (state_19776[(7)]);
var inst_19753 = (state_19776[(2)]);
var inst_19754 = cljs.core.next(inst_19742);
var inst_19728 = inst_19754;
var inst_19729 = null;
var inst_19730 = (0);
var inst_19731 = (0);
var state_19776__$1 = (function (){var statearr_19781 = state_19776;
(statearr_19781[(8)] = inst_19731);

(statearr_19781[(9)] = inst_19728);

(statearr_19781[(10)] = inst_19730);

(statearr_19781[(11)] = inst_19753);

(statearr_19781[(12)] = inst_19729);

return statearr_19781;
})();
var statearr_19783_21085 = state_19776__$1;
(statearr_19783_21085[(2)] = null);

(statearr_19783_21085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (1))){
var state_19776__$1 = state_19776;
var statearr_19784_21088 = state_19776__$1;
(statearr_19784_21088[(2)] = null);

(statearr_19784_21088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (4))){
var inst_19717 = (state_19776[(13)]);
var inst_19717__$1 = (state_19776[(2)]);
var inst_19718 = (inst_19717__$1 == null);
var state_19776__$1 = (function (){var statearr_19785 = state_19776;
(statearr_19785[(13)] = inst_19717__$1);

return statearr_19785;
})();
if(cljs.core.truth_(inst_19718)){
var statearr_19786_21090 = state_19776__$1;
(statearr_19786_21090[(1)] = (5));

} else {
var statearr_19787_21091 = state_19776__$1;
(statearr_19787_21091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (15))){
var state_19776__$1 = state_19776;
var statearr_19791_21095 = state_19776__$1;
(statearr_19791_21095[(2)] = null);

(statearr_19791_21095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (21))){
var state_19776__$1 = state_19776;
var statearr_19792_21096 = state_19776__$1;
(statearr_19792_21096[(2)] = null);

(statearr_19792_21096[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (13))){
var inst_19731 = (state_19776[(8)]);
var inst_19728 = (state_19776[(9)]);
var inst_19730 = (state_19776[(10)]);
var inst_19729 = (state_19776[(12)]);
var inst_19738 = (state_19776[(2)]);
var inst_19739 = (inst_19731 + (1));
var tmp19788 = inst_19728;
var tmp19789 = inst_19730;
var tmp19790 = inst_19729;
var inst_19728__$1 = tmp19788;
var inst_19729__$1 = tmp19790;
var inst_19730__$1 = tmp19789;
var inst_19731__$1 = inst_19739;
var state_19776__$1 = (function (){var statearr_19793 = state_19776;
(statearr_19793[(8)] = inst_19731__$1);

(statearr_19793[(9)] = inst_19728__$1);

(statearr_19793[(10)] = inst_19730__$1);

(statearr_19793[(12)] = inst_19729__$1);

(statearr_19793[(14)] = inst_19738);

return statearr_19793;
})();
var statearr_19803_21098 = state_19776__$1;
(statearr_19803_21098[(2)] = null);

(statearr_19803_21098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (22))){
var state_19776__$1 = state_19776;
var statearr_19804_21100 = state_19776__$1;
(statearr_19804_21100[(2)] = null);

(statearr_19804_21100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (6))){
var inst_19717 = (state_19776[(13)]);
var inst_19726 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19717) : f.call(null,inst_19717));
var inst_19727 = cljs.core.seq(inst_19726);
var inst_19728 = inst_19727;
var inst_19729 = null;
var inst_19730 = (0);
var inst_19731 = (0);
var state_19776__$1 = (function (){var statearr_19805 = state_19776;
(statearr_19805[(8)] = inst_19731);

(statearr_19805[(9)] = inst_19728);

(statearr_19805[(10)] = inst_19730);

(statearr_19805[(12)] = inst_19729);

return statearr_19805;
})();
var statearr_19806_21103 = state_19776__$1;
(statearr_19806_21103[(2)] = null);

(statearr_19806_21103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (17))){
var inst_19742 = (state_19776[(7)]);
var inst_19746 = cljs.core.chunk_first(inst_19742);
var inst_19747 = cljs.core.chunk_rest(inst_19742);
var inst_19748 = cljs.core.count(inst_19746);
var inst_19728 = inst_19747;
var inst_19729 = inst_19746;
var inst_19730 = inst_19748;
var inst_19731 = (0);
var state_19776__$1 = (function (){var statearr_19808 = state_19776;
(statearr_19808[(8)] = inst_19731);

(statearr_19808[(9)] = inst_19728);

(statearr_19808[(10)] = inst_19730);

(statearr_19808[(12)] = inst_19729);

return statearr_19808;
})();
var statearr_19809_21106 = state_19776__$1;
(statearr_19809_21106[(2)] = null);

(statearr_19809_21106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (3))){
var inst_19774 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19776__$1,inst_19774);
} else {
if((state_val_19777 === (12))){
var inst_19762 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19810_21107 = state_19776__$1;
(statearr_19810_21107[(2)] = inst_19762);

(statearr_19810_21107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (2))){
var state_19776__$1 = state_19776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19776__$1,(4),in$);
} else {
if((state_val_19777 === (23))){
var inst_19770 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19811_21108 = state_19776__$1;
(statearr_19811_21108[(2)] = inst_19770);

(statearr_19811_21108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (19))){
var inst_19757 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19812_21109 = state_19776__$1;
(statearr_19812_21109[(2)] = inst_19757);

(statearr_19812_21109[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (11))){
var inst_19728 = (state_19776[(9)]);
var inst_19742 = (state_19776[(7)]);
var inst_19742__$1 = cljs.core.seq(inst_19728);
var state_19776__$1 = (function (){var statearr_19813 = state_19776;
(statearr_19813[(7)] = inst_19742__$1);

return statearr_19813;
})();
if(inst_19742__$1){
var statearr_19814_21111 = state_19776__$1;
(statearr_19814_21111[(1)] = (14));

} else {
var statearr_19815_21112 = state_19776__$1;
(statearr_19815_21112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (9))){
var inst_19764 = (state_19776[(2)]);
var inst_19765 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19776__$1 = (function (){var statearr_19816 = state_19776;
(statearr_19816[(15)] = inst_19764);

return statearr_19816;
})();
if(cljs.core.truth_(inst_19765)){
var statearr_19817_21113 = state_19776__$1;
(statearr_19817_21113[(1)] = (21));

} else {
var statearr_19818_21114 = state_19776__$1;
(statearr_19818_21114[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (5))){
var inst_19720 = cljs.core.async.close_BANG_(out);
var state_19776__$1 = state_19776;
var statearr_19819_21115 = state_19776__$1;
(statearr_19819_21115[(2)] = inst_19720);

(statearr_19819_21115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (14))){
var inst_19742 = (state_19776[(7)]);
var inst_19744 = cljs.core.chunked_seq_QMARK_(inst_19742);
var state_19776__$1 = state_19776;
if(inst_19744){
var statearr_19820_21119 = state_19776__$1;
(statearr_19820_21119[(1)] = (17));

} else {
var statearr_19821_21120 = state_19776__$1;
(statearr_19821_21120[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (16))){
var inst_19760 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19822_21121 = state_19776__$1;
(statearr_19822_21121[(2)] = inst_19760);

(statearr_19822_21121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (10))){
var inst_19731 = (state_19776[(8)]);
var inst_19729 = (state_19776[(12)]);
var inst_19736 = cljs.core._nth(inst_19729,inst_19731);
var state_19776__$1 = state_19776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19776__$1,(13),out,inst_19736);
} else {
if((state_val_19777 === (18))){
var inst_19742 = (state_19776[(7)]);
var inst_19751 = cljs.core.first(inst_19742);
var state_19776__$1 = state_19776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19776__$1,(20),out,inst_19751);
} else {
if((state_val_19777 === (8))){
var inst_19731 = (state_19776[(8)]);
var inst_19730 = (state_19776[(10)]);
var inst_19733 = (inst_19731 < inst_19730);
var inst_19734 = inst_19733;
var state_19776__$1 = state_19776;
if(cljs.core.truth_(inst_19734)){
var statearr_19825_21125 = state_19776__$1;
(statearr_19825_21125[(1)] = (10));

} else {
var statearr_19826_21126 = state_19776__$1;
(statearr_19826_21126[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17409__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17409__auto____0 = (function (){
var statearr_19828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19828[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17409__auto__);

(statearr_19828[(1)] = (1));

return statearr_19828;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17409__auto____1 = (function (state_19776){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_19776);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e19829){var ex__17412__auto__ = e19829;
var statearr_19831_21129 = state_19776;
(statearr_19831_21129[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_19776[(4)]))){
var statearr_19832_21130 = state_19776;
(statearr_19832_21130[(1)] = cljs.core.first((state_19776[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21131 = state_19776;
state_19776 = G__21131;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17409__auto__ = function(state_19776){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17409__auto____1.call(this,state_19776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17409__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17409__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_19833 = f__17782__auto__();
(statearr_19833[(6)] = c__17781__auto__);

return statearr_19833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));

return c__17781__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19835 = arguments.length;
switch (G__19835) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19845 = arguments.length;
switch (G__19845) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19856 = arguments.length;
switch (G__19856) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17781__auto___21151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_19892){
var state_val_19893 = (state_19892[(1)]);
if((state_val_19893 === (7))){
var inst_19887 = (state_19892[(2)]);
var state_19892__$1 = state_19892;
var statearr_19896_21152 = state_19892__$1;
(statearr_19896_21152[(2)] = inst_19887);

(statearr_19896_21152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (1))){
var inst_19868 = null;
var state_19892__$1 = (function (){var statearr_19897 = state_19892;
(statearr_19897[(7)] = inst_19868);

return statearr_19897;
})();
var statearr_19901_21153 = state_19892__$1;
(statearr_19901_21153[(2)] = null);

(statearr_19901_21153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (4))){
var inst_19872 = (state_19892[(8)]);
var inst_19872__$1 = (state_19892[(2)]);
var inst_19873 = (inst_19872__$1 == null);
var inst_19874 = cljs.core.not(inst_19873);
var state_19892__$1 = (function (){var statearr_19904 = state_19892;
(statearr_19904[(8)] = inst_19872__$1);

return statearr_19904;
})();
if(inst_19874){
var statearr_19905_21154 = state_19892__$1;
(statearr_19905_21154[(1)] = (5));

} else {
var statearr_19906_21155 = state_19892__$1;
(statearr_19906_21155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (6))){
var state_19892__$1 = state_19892;
var statearr_19907_21156 = state_19892__$1;
(statearr_19907_21156[(2)] = null);

(statearr_19907_21156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (3))){
var inst_19889 = (state_19892[(2)]);
var inst_19890 = cljs.core.async.close_BANG_(out);
var state_19892__$1 = (function (){var statearr_19908 = state_19892;
(statearr_19908[(9)] = inst_19889);

return statearr_19908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19892__$1,inst_19890);
} else {
if((state_val_19893 === (2))){
var state_19892__$1 = state_19892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19892__$1,(4),ch);
} else {
if((state_val_19893 === (11))){
var inst_19872 = (state_19892[(8)]);
var inst_19881 = (state_19892[(2)]);
var inst_19868 = inst_19872;
var state_19892__$1 = (function (){var statearr_19910 = state_19892;
(statearr_19910[(10)] = inst_19881);

(statearr_19910[(7)] = inst_19868);

return statearr_19910;
})();
var statearr_19911_21158 = state_19892__$1;
(statearr_19911_21158[(2)] = null);

(statearr_19911_21158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (9))){
var inst_19872 = (state_19892[(8)]);
var state_19892__$1 = state_19892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19892__$1,(11),out,inst_19872);
} else {
if((state_val_19893 === (5))){
var inst_19868 = (state_19892[(7)]);
var inst_19872 = (state_19892[(8)]);
var inst_19876 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19872,inst_19868);
var state_19892__$1 = state_19892;
if(inst_19876){
var statearr_19917_21160 = state_19892__$1;
(statearr_19917_21160[(1)] = (8));

} else {
var statearr_19918_21161 = state_19892__$1;
(statearr_19918_21161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (10))){
var inst_19884 = (state_19892[(2)]);
var state_19892__$1 = state_19892;
var statearr_19919_21165 = state_19892__$1;
(statearr_19919_21165[(2)] = inst_19884);

(statearr_19919_21165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (8))){
var inst_19868 = (state_19892[(7)]);
var tmp19915 = inst_19868;
var inst_19868__$1 = tmp19915;
var state_19892__$1 = (function (){var statearr_19920 = state_19892;
(statearr_19920[(7)] = inst_19868__$1);

return statearr_19920;
})();
var statearr_19921_21166 = state_19892__$1;
(statearr_19921_21166[(2)] = null);

(statearr_19921_21166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_19922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19922[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_19922[(1)] = (1));

return statearr_19922;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_19892){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_19892);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e19923){var ex__17412__auto__ = e19923;
var statearr_19924_21167 = state_19892;
(statearr_19924_21167[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_19892[(4)]))){
var statearr_19926_21168 = state_19892;
(statearr_19926_21168[(1)] = cljs.core.first((state_19892[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21170 = state_19892;
state_19892 = G__21170;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_19892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_19892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_19927 = f__17782__auto__();
(statearr_19927[(6)] = c__17781__auto___21151);

return statearr_19927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19937 = arguments.length;
switch (G__19937) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17781__auto___21174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_19979){
var state_val_19980 = (state_19979[(1)]);
if((state_val_19980 === (7))){
var inst_19973 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
var statearr_19981_21175 = state_19979__$1;
(statearr_19981_21175[(2)] = inst_19973);

(statearr_19981_21175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (1))){
var inst_19938 = (new Array(n));
var inst_19939 = inst_19938;
var inst_19940 = (0);
var state_19979__$1 = (function (){var statearr_19982 = state_19979;
(statearr_19982[(7)] = inst_19940);

(statearr_19982[(8)] = inst_19939);

return statearr_19982;
})();
var statearr_19984_21176 = state_19979__$1;
(statearr_19984_21176[(2)] = null);

(statearr_19984_21176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (4))){
var inst_19943 = (state_19979[(9)]);
var inst_19943__$1 = (state_19979[(2)]);
var inst_19946 = (inst_19943__$1 == null);
var inst_19947 = cljs.core.not(inst_19946);
var state_19979__$1 = (function (){var statearr_19985 = state_19979;
(statearr_19985[(9)] = inst_19943__$1);

return statearr_19985;
})();
if(inst_19947){
var statearr_19986_21177 = state_19979__$1;
(statearr_19986_21177[(1)] = (5));

} else {
var statearr_19988_21178 = state_19979__$1;
(statearr_19988_21178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (15))){
var inst_19967 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
var statearr_19989_21179 = state_19979__$1;
(statearr_19989_21179[(2)] = inst_19967);

(statearr_19989_21179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (13))){
var state_19979__$1 = state_19979;
var statearr_19990_21180 = state_19979__$1;
(statearr_19990_21180[(2)] = null);

(statearr_19990_21180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (6))){
var inst_19940 = (state_19979[(7)]);
var inst_19963 = (inst_19940 > (0));
var state_19979__$1 = state_19979;
if(cljs.core.truth_(inst_19963)){
var statearr_19991_21181 = state_19979__$1;
(statearr_19991_21181[(1)] = (12));

} else {
var statearr_19992_21182 = state_19979__$1;
(statearr_19992_21182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (3))){
var inst_19975 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19979__$1,inst_19975);
} else {
if((state_val_19980 === (12))){
var inst_19939 = (state_19979[(8)]);
var inst_19965 = cljs.core.vec(inst_19939);
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19979__$1,(15),out,inst_19965);
} else {
if((state_val_19980 === (2))){
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19979__$1,(4),ch);
} else {
if((state_val_19980 === (11))){
var inst_19957 = (state_19979[(2)]);
var inst_19958 = (new Array(n));
var inst_19939 = inst_19958;
var inst_19940 = (0);
var state_19979__$1 = (function (){var statearr_19993 = state_19979;
(statearr_19993[(10)] = inst_19957);

(statearr_19993[(7)] = inst_19940);

(statearr_19993[(8)] = inst_19939);

return statearr_19993;
})();
var statearr_19994_21183 = state_19979__$1;
(statearr_19994_21183[(2)] = null);

(statearr_19994_21183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (9))){
var inst_19939 = (state_19979[(8)]);
var inst_19955 = cljs.core.vec(inst_19939);
var state_19979__$1 = state_19979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19979__$1,(11),out,inst_19955);
} else {
if((state_val_19980 === (5))){
var inst_19940 = (state_19979[(7)]);
var inst_19943 = (state_19979[(9)]);
var inst_19950 = (state_19979[(11)]);
var inst_19939 = (state_19979[(8)]);
var inst_19949 = (inst_19939[inst_19940] = inst_19943);
var inst_19950__$1 = (inst_19940 + (1));
var inst_19951 = (inst_19950__$1 < n);
var state_19979__$1 = (function (){var statearr_19995 = state_19979;
(statearr_19995[(12)] = inst_19949);

(statearr_19995[(11)] = inst_19950__$1);

return statearr_19995;
})();
if(cljs.core.truth_(inst_19951)){
var statearr_20000_21187 = state_19979__$1;
(statearr_20000_21187[(1)] = (8));

} else {
var statearr_20001_21188 = state_19979__$1;
(statearr_20001_21188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (14))){
var inst_19970 = (state_19979[(2)]);
var inst_19971 = cljs.core.async.close_BANG_(out);
var state_19979__$1 = (function (){var statearr_20003 = state_19979;
(statearr_20003[(13)] = inst_19970);

return statearr_20003;
})();
var statearr_20004_21189 = state_19979__$1;
(statearr_20004_21189[(2)] = inst_19971);

(statearr_20004_21189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (10))){
var inst_19961 = (state_19979[(2)]);
var state_19979__$1 = state_19979;
var statearr_20005_21190 = state_19979__$1;
(statearr_20005_21190[(2)] = inst_19961);

(statearr_20005_21190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19980 === (8))){
var inst_19950 = (state_19979[(11)]);
var inst_19939 = (state_19979[(8)]);
var tmp20002 = inst_19939;
var inst_19939__$1 = tmp20002;
var inst_19940 = inst_19950;
var state_19979__$1 = (function (){var statearr_20007 = state_19979;
(statearr_20007[(7)] = inst_19940);

(statearr_20007[(8)] = inst_19939__$1);

return statearr_20007;
})();
var statearr_20008_21192 = state_19979__$1;
(statearr_20008_21192[(2)] = null);

(statearr_20008_21192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_20009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20009[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_20009[(1)] = (1));

return statearr_20009;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_19979){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_19979);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e20016){var ex__17412__auto__ = e20016;
var statearr_20017_21196 = state_19979;
(statearr_20017_21196[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_19979[(4)]))){
var statearr_20018_21197 = state_19979;
(statearr_20018_21197[(1)] = cljs.core.first((state_19979[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21198 = state_19979;
state_19979 = G__21198;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_19979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_19979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_20022 = f__17782__auto__();
(statearr_20022[(6)] = c__17781__auto___21174);

return statearr_20022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20028 = arguments.length;
switch (G__20028) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17781__auto___21202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17782__auto__ = (function (){var switch__17408__auto__ = (function (state_20085){
var state_val_20086 = (state_20085[(1)]);
if((state_val_20086 === (7))){
var inst_20081 = (state_20085[(2)]);
var state_20085__$1 = state_20085;
var statearr_20089_21204 = state_20085__$1;
(statearr_20089_21204[(2)] = inst_20081);

(statearr_20089_21204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (1))){
var inst_20035 = [];
var inst_20036 = inst_20035;
var inst_20037 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20085__$1 = (function (){var statearr_20090 = state_20085;
(statearr_20090[(7)] = inst_20037);

(statearr_20090[(8)] = inst_20036);

return statearr_20090;
})();
var statearr_20091_21209 = state_20085__$1;
(statearr_20091_21209[(2)] = null);

(statearr_20091_21209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (4))){
var inst_20040 = (state_20085[(9)]);
var inst_20040__$1 = (state_20085[(2)]);
var inst_20041 = (inst_20040__$1 == null);
var inst_20042 = cljs.core.not(inst_20041);
var state_20085__$1 = (function (){var statearr_20092 = state_20085;
(statearr_20092[(9)] = inst_20040__$1);

return statearr_20092;
})();
if(inst_20042){
var statearr_20093_21210 = state_20085__$1;
(statearr_20093_21210[(1)] = (5));

} else {
var statearr_20094_21212 = state_20085__$1;
(statearr_20094_21212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (15))){
var inst_20036 = (state_20085[(8)]);
var inst_20073 = cljs.core.vec(inst_20036);
var state_20085__$1 = state_20085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20085__$1,(18),out,inst_20073);
} else {
if((state_val_20086 === (13))){
var inst_20068 = (state_20085[(2)]);
var state_20085__$1 = state_20085;
var statearr_20100_21213 = state_20085__$1;
(statearr_20100_21213[(2)] = inst_20068);

(statearr_20100_21213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (6))){
var inst_20036 = (state_20085[(8)]);
var inst_20070 = inst_20036.length;
var inst_20071 = (inst_20070 > (0));
var state_20085__$1 = state_20085;
if(cljs.core.truth_(inst_20071)){
var statearr_20106_21214 = state_20085__$1;
(statearr_20106_21214[(1)] = (15));

} else {
var statearr_20107_21215 = state_20085__$1;
(statearr_20107_21215[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (17))){
var inst_20078 = (state_20085[(2)]);
var inst_20079 = cljs.core.async.close_BANG_(out);
var state_20085__$1 = (function (){var statearr_20108 = state_20085;
(statearr_20108[(10)] = inst_20078);

return statearr_20108;
})();
var statearr_20109_21216 = state_20085__$1;
(statearr_20109_21216[(2)] = inst_20079);

(statearr_20109_21216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (3))){
var inst_20083 = (state_20085[(2)]);
var state_20085__$1 = state_20085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20085__$1,inst_20083);
} else {
if((state_val_20086 === (12))){
var inst_20036 = (state_20085[(8)]);
var inst_20061 = cljs.core.vec(inst_20036);
var state_20085__$1 = state_20085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20085__$1,(14),out,inst_20061);
} else {
if((state_val_20086 === (2))){
var state_20085__$1 = state_20085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20085__$1,(4),ch);
} else {
if((state_val_20086 === (11))){
var inst_20040 = (state_20085[(9)]);
var inst_20044 = (state_20085[(11)]);
var inst_20036 = (state_20085[(8)]);
var inst_20058 = inst_20036.push(inst_20040);
var tmp20110 = inst_20036;
var inst_20036__$1 = tmp20110;
var inst_20037 = inst_20044;
var state_20085__$1 = (function (){var statearr_20112 = state_20085;
(statearr_20112[(7)] = inst_20037);

(statearr_20112[(12)] = inst_20058);

(statearr_20112[(8)] = inst_20036__$1);

return statearr_20112;
})();
var statearr_20113_21221 = state_20085__$1;
(statearr_20113_21221[(2)] = null);

(statearr_20113_21221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (9))){
var inst_20037 = (state_20085[(7)]);
var inst_20054 = cljs.core.keyword_identical_QMARK_(inst_20037,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20085__$1 = state_20085;
var statearr_20115_21222 = state_20085__$1;
(statearr_20115_21222[(2)] = inst_20054);

(statearr_20115_21222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (5))){
var inst_20037 = (state_20085[(7)]);
var inst_20040 = (state_20085[(9)]);
var inst_20044 = (state_20085[(11)]);
var inst_20051 = (state_20085[(13)]);
var inst_20044__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20040) : f.call(null,inst_20040));
var inst_20051__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20044__$1,inst_20037);
var state_20085__$1 = (function (){var statearr_20121 = state_20085;
(statearr_20121[(11)] = inst_20044__$1);

(statearr_20121[(13)] = inst_20051__$1);

return statearr_20121;
})();
if(inst_20051__$1){
var statearr_20122_21223 = state_20085__$1;
(statearr_20122_21223[(1)] = (8));

} else {
var statearr_20123_21224 = state_20085__$1;
(statearr_20123_21224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (14))){
var inst_20040 = (state_20085[(9)]);
var inst_20044 = (state_20085[(11)]);
var inst_20063 = (state_20085[(2)]);
var inst_20064 = [];
var inst_20065 = inst_20064.push(inst_20040);
var inst_20036 = inst_20064;
var inst_20037 = inst_20044;
var state_20085__$1 = (function (){var statearr_20124 = state_20085;
(statearr_20124[(14)] = inst_20063);

(statearr_20124[(7)] = inst_20037);

(statearr_20124[(8)] = inst_20036);

(statearr_20124[(15)] = inst_20065);

return statearr_20124;
})();
var statearr_20125_21225 = state_20085__$1;
(statearr_20125_21225[(2)] = null);

(statearr_20125_21225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (16))){
var state_20085__$1 = state_20085;
var statearr_20126_21226 = state_20085__$1;
(statearr_20126_21226[(2)] = null);

(statearr_20126_21226[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (10))){
var inst_20056 = (state_20085[(2)]);
var state_20085__$1 = state_20085;
if(cljs.core.truth_(inst_20056)){
var statearr_20127_21229 = state_20085__$1;
(statearr_20127_21229[(1)] = (11));

} else {
var statearr_20128_21230 = state_20085__$1;
(statearr_20128_21230[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (18))){
var inst_20075 = (state_20085[(2)]);
var state_20085__$1 = state_20085;
var statearr_20129_21231 = state_20085__$1;
(statearr_20129_21231[(2)] = inst_20075);

(statearr_20129_21231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20086 === (8))){
var inst_20051 = (state_20085[(13)]);
var state_20085__$1 = state_20085;
var statearr_20130_21232 = state_20085__$1;
(statearr_20130_21232[(2)] = inst_20051);

(statearr_20130_21232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17409__auto__ = null;
var cljs$core$async$state_machine__17409__auto____0 = (function (){
var statearr_20135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20135[(0)] = cljs$core$async$state_machine__17409__auto__);

(statearr_20135[(1)] = (1));

return statearr_20135;
});
var cljs$core$async$state_machine__17409__auto____1 = (function (state_20085){
while(true){
var ret_value__17410__auto__ = (function (){try{while(true){
var result__17411__auto__ = switch__17408__auto__(state_20085);
if(cljs.core.keyword_identical_QMARK_(result__17411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17411__auto__;
}
break;
}
}catch (e20136){var ex__17412__auto__ = e20136;
var statearr_20137_21235 = state_20085;
(statearr_20137_21235[(2)] = ex__17412__auto__);


if(cljs.core.seq((state_20085[(4)]))){
var statearr_20138_21236 = state_20085;
(statearr_20138_21236[(1)] = cljs.core.first((state_20085[(4)])));

} else {
throw ex__17412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21237 = state_20085;
state_20085 = G__21237;
continue;
} else {
return ret_value__17410__auto__;
}
break;
}
});
cljs$core$async$state_machine__17409__auto__ = function(state_20085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17409__auto____1.call(this,state_20085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17409__auto____0;
cljs$core$async$state_machine__17409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17409__auto____1;
return cljs$core$async$state_machine__17409__auto__;
})()
})();
var state__17783__auto__ = (function (){var statearr_20139 = f__17782__auto__();
(statearr_20139[(6)] = c__17781__auto___21202);

return statearr_20139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17783__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
