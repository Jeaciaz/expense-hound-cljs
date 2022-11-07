goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18015 = arguments.length;
switch (G__18015) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18036 = (function (f,blockable,meta18037){
this.f = f;
this.blockable = blockable;
this.meta18037 = meta18037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18038,meta18037__$1){
var self__ = this;
var _18038__$1 = this;
return (new cljs.core.async.t_cljs$core$async18036(self__.f,self__.blockable,meta18037__$1));
}));

(cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18038){
var self__ = this;
var _18038__$1 = this;
return self__.meta18037;
}));

(cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18037","meta18037",613595759,null)], null);
}));

(cljs.core.async.t_cljs$core$async18036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18036");

(cljs.core.async.t_cljs$core$async18036.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18036.
 */
cljs.core.async.__GT_t_cljs$core$async18036 = (function cljs$core$async$__GT_t_cljs$core$async18036(f__$1,blockable__$1,meta18037){
return (new cljs.core.async.t_cljs$core$async18036(f__$1,blockable__$1,meta18037));
});

}

return (new cljs.core.async.t_cljs$core$async18036(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18044 = arguments.length;
switch (G__18044) {
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
var G__18047 = arguments.length;
switch (G__18047) {
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
var G__18051 = arguments.length;
switch (G__18051) {
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
var val_20163 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20163) : fn1.call(null,val_20163));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20163) : fn1.call(null,val_20163));
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
var G__18054 = arguments.length;
switch (G__18054) {
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
var n__5636__auto___20169 = n;
var x_20170 = (0);
while(true){
if((x_20170 < n__5636__auto___20169)){
(a[x_20170] = x_20170);

var G__20171 = (x_20170 + (1));
x_20170 = G__20171;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18057 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18057 = (function (flag,meta18058){
this.flag = flag;
this.meta18058 = meta18058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18059,meta18058__$1){
var self__ = this;
var _18059__$1 = this;
return (new cljs.core.async.t_cljs$core$async18057(self__.flag,meta18058__$1));
}));

(cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18059){
var self__ = this;
var _18059__$1 = this;
return self__.meta18058;
}));

(cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18058","meta18058",-939717901,null)], null);
}));

(cljs.core.async.t_cljs$core$async18057.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18057");

(cljs.core.async.t_cljs$core$async18057.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18057");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18057.
 */
cljs.core.async.__GT_t_cljs$core$async18057 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18057(flag__$1,meta18058){
return (new cljs.core.async.t_cljs$core$async18057(flag__$1,meta18058));
});

}

return (new cljs.core.async.t_cljs$core$async18057(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18061 = (function (flag,cb,meta18062){
this.flag = flag;
this.cb = cb;
this.meta18062 = meta18062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18063,meta18062__$1){
var self__ = this;
var _18063__$1 = this;
return (new cljs.core.async.t_cljs$core$async18061(self__.flag,self__.cb,meta18062__$1));
}));

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18063){
var self__ = this;
var _18063__$1 = this;
return self__.meta18062;
}));

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18062","meta18062",-1856044267,null)], null);
}));

(cljs.core.async.t_cljs$core$async18061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18061");

(cljs.core.async.t_cljs$core$async18061.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18061.
 */
cljs.core.async.__GT_t_cljs$core$async18061 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18061(flag__$1,cb__$1,meta18062){
return (new cljs.core.async.t_cljs$core$async18061(flag__$1,cb__$1,meta18062));
});

}

return (new cljs.core.async.t_cljs$core$async18061(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18066_SHARP_){
var G__18069 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18066_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18069) : fret.call(null,G__18069));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18067_SHARP_){
var G__18070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18067_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18070) : fret.call(null,G__18070));
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
var G__20182 = (i + (1));
i = G__20182;
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
var len__5769__auto___20186 = arguments.length;
var i__5770__auto___20187 = (0);
while(true){
if((i__5770__auto___20187 < len__5769__auto___20186)){
args__5775__auto__.push((arguments[i__5770__auto___20187]));

var G__20188 = (i__5770__auto___20187 + (1));
i__5770__auto___20187 = G__20188;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18074){
var map__18075 = p__18074;
var map__18075__$1 = cljs.core.__destructure_map(map__18075);
var opts = map__18075__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18071){
var G__18072 = cljs.core.first(seq18071);
var seq18071__$1 = cljs.core.next(seq18071);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18072,seq18071__$1);
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
var G__18078 = arguments.length;
switch (G__18078) {
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
var c__17925__auto___20193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_18105){
var state_val_18106 = (state_18105[(1)]);
if((state_val_18106 === (7))){
var inst_18101 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
var statearr_18108_20194 = state_18105__$1;
(statearr_18108_20194[(2)] = inst_18101);

(statearr_18108_20194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (1))){
var state_18105__$1 = state_18105;
var statearr_18109_20195 = state_18105__$1;
(statearr_18109_20195[(2)] = null);

(statearr_18109_20195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (4))){
var inst_18083 = (state_18105[(7)]);
var inst_18083__$1 = (state_18105[(2)]);
var inst_18084 = (inst_18083__$1 == null);
var state_18105__$1 = (function (){var statearr_18110 = state_18105;
(statearr_18110[(7)] = inst_18083__$1);

return statearr_18110;
})();
if(cljs.core.truth_(inst_18084)){
var statearr_18111_20196 = state_18105__$1;
(statearr_18111_20196[(1)] = (5));

} else {
var statearr_18112_20197 = state_18105__$1;
(statearr_18112_20197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (13))){
var state_18105__$1 = state_18105;
var statearr_18114_20198 = state_18105__$1;
(statearr_18114_20198[(2)] = null);

(statearr_18114_20198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (6))){
var inst_18083 = (state_18105[(7)]);
var state_18105__$1 = state_18105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18105__$1,(11),to,inst_18083);
} else {
if((state_val_18106 === (3))){
var inst_18103 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18105__$1,inst_18103);
} else {
if((state_val_18106 === (12))){
var state_18105__$1 = state_18105;
var statearr_18115_20199 = state_18105__$1;
(statearr_18115_20199[(2)] = null);

(statearr_18115_20199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (2))){
var state_18105__$1 = state_18105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18105__$1,(4),from);
} else {
if((state_val_18106 === (11))){
var inst_18094 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
if(cljs.core.truth_(inst_18094)){
var statearr_18116_20200 = state_18105__$1;
(statearr_18116_20200[(1)] = (12));

} else {
var statearr_18117_20201 = state_18105__$1;
(statearr_18117_20201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (9))){
var state_18105__$1 = state_18105;
var statearr_18119_20202 = state_18105__$1;
(statearr_18119_20202[(2)] = null);

(statearr_18119_20202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (5))){
var state_18105__$1 = state_18105;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18120_20203 = state_18105__$1;
(statearr_18120_20203[(1)] = (8));

} else {
var statearr_18121_20204 = state_18105__$1;
(statearr_18121_20204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (14))){
var inst_18099 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
var statearr_18122_20205 = state_18105__$1;
(statearr_18122_20205[(2)] = inst_18099);

(statearr_18122_20205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (10))){
var inst_18090 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
var statearr_18123_20206 = state_18105__$1;
(statearr_18123_20206[(2)] = inst_18090);

(statearr_18123_20206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (8))){
var inst_18087 = cljs.core.async.close_BANG_(to);
var state_18105__$1 = state_18105;
var statearr_18124_20207 = state_18105__$1;
(statearr_18124_20207[(2)] = inst_18087);

(statearr_18124_20207[(1)] = (10));


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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_18125 = [null,null,null,null,null,null,null,null];
(statearr_18125[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_18125[(1)] = (1));

return statearr_18125;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_18105){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18105);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18127){var ex__17409__auto__ = e18127;
var statearr_18128_20210 = state_18105;
(statearr_18128_20210[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18105[(4)]))){
var statearr_18129_20211 = state_18105;
(statearr_18129_20211[(1)] = cljs.core.first((state_18105[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20212 = state_18105;
state_18105 = G__20212;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_18105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_18105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_18130 = f__17926__auto__();
(statearr_18130[(6)] = c__17925__auto___20193);

return statearr_18130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
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
var process__$1 = (function (p__18132){
var vec__18133 = p__18132;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18133,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18133,(1),null);
var job = vec__18133;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17925__auto___20213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_18140){
var state_val_18141 = (state_18140[(1)]);
if((state_val_18141 === (1))){
var state_18140__$1 = state_18140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18140__$1,(2),res,v);
} else {
if((state_val_18141 === (2))){
var inst_18137 = (state_18140[(2)]);
var inst_18138 = cljs.core.async.close_BANG_(res);
var state_18140__$1 = (function (){var statearr_18143 = state_18140;
(statearr_18143[(7)] = inst_18137);

return statearr_18143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18140__$1,inst_18138);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0 = (function (){
var statearr_18144 = [null,null,null,null,null,null,null,null];
(statearr_18144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__);

(statearr_18144[(1)] = (1));

return statearr_18144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1 = (function (state_18140){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18140);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18145){var ex__17409__auto__ = e18145;
var statearr_18146_20215 = state_18140;
(statearr_18146_20215[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18140[(4)]))){
var statearr_18147_20216 = state_18140;
(statearr_18147_20216[(1)] = cljs.core.first((state_18140[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20217 = state_18140;
state_18140 = G__20217;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = function(state_18140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1.call(this,state_18140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_18148 = f__17926__auto__();
(statearr_18148[(6)] = c__17925__auto___20213);

return statearr_18148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18150){
var vec__18151 = p__18150;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18151,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18151,(1),null);
var job = vec__18151;
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
var n__5636__auto___20218 = n;
var __20219 = (0);
while(true){
if((__20219 < n__5636__auto___20218)){
var G__18154_20220 = type;
var G__18154_20221__$1 = (((G__18154_20220 instanceof cljs.core.Keyword))?G__18154_20220.fqn:null);
switch (G__18154_20221__$1) {
case "compute":
var c__17925__auto___20223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20219,c__17925__auto___20223,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async){
return (function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = ((function (__20219,c__17925__auto___20223,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async){
return (function (state_18167){
var state_val_18168 = (state_18167[(1)]);
if((state_val_18168 === (1))){
var state_18167__$1 = state_18167;
var statearr_18170_20224 = state_18167__$1;
(statearr_18170_20224[(2)] = null);

(statearr_18170_20224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (2))){
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18167__$1,(4),jobs);
} else {
if((state_val_18168 === (3))){
var inst_18165 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18167__$1,inst_18165);
} else {
if((state_val_18168 === (4))){
var inst_18157 = (state_18167[(2)]);
var inst_18158 = process__$1(inst_18157);
var state_18167__$1 = state_18167;
if(cljs.core.truth_(inst_18158)){
var statearr_18171_20229 = state_18167__$1;
(statearr_18171_20229[(1)] = (5));

} else {
var statearr_18172_20230 = state_18167__$1;
(statearr_18172_20230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (5))){
var state_18167__$1 = state_18167;
var statearr_18173_20231 = state_18167__$1;
(statearr_18173_20231[(2)] = null);

(statearr_18173_20231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (6))){
var state_18167__$1 = state_18167;
var statearr_18174_20232 = state_18167__$1;
(statearr_18174_20232[(2)] = null);

(statearr_18174_20232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (7))){
var inst_18163 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
var statearr_18175_20233 = state_18167__$1;
(statearr_18175_20233[(2)] = inst_18163);

(statearr_18175_20233[(1)] = (3));


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
});})(__20219,c__17925__auto___20223,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async))
;
return ((function (__20219,switch__17405__auto__,c__17925__auto___20223,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0 = (function (){
var statearr_18177 = [null,null,null,null,null,null,null];
(statearr_18177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__);

(statearr_18177[(1)] = (1));

return statearr_18177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1 = (function (state_18167){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18167);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18178){var ex__17409__auto__ = e18178;
var statearr_18179_20239 = state_18167;
(statearr_18179_20239[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18167[(4)]))){
var statearr_18180_20240 = state_18167;
(statearr_18180_20240[(1)] = cljs.core.first((state_18167[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20241 = state_18167;
state_18167 = G__20241;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = function(state_18167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1.call(this,state_18167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__;
})()
;})(__20219,switch__17405__auto__,c__17925__auto___20223,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async))
})();
var state__17927__auto__ = (function (){var statearr_18181 = f__17926__auto__();
(statearr_18181[(6)] = c__17925__auto___20223);

return statearr_18181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
});})(__20219,c__17925__auto___20223,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async))
);


break;
case "async":
var c__17925__auto___20242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20219,c__17925__auto___20242,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async){
return (function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = ((function (__20219,c__17925__auto___20242,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async){
return (function (state_18194){
var state_val_18195 = (state_18194[(1)]);
if((state_val_18195 === (1))){
var state_18194__$1 = state_18194;
var statearr_18197_20243 = state_18194__$1;
(statearr_18197_20243[(2)] = null);

(statearr_18197_20243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (2))){
var state_18194__$1 = state_18194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18194__$1,(4),jobs);
} else {
if((state_val_18195 === (3))){
var inst_18192 = (state_18194[(2)]);
var state_18194__$1 = state_18194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18194__$1,inst_18192);
} else {
if((state_val_18195 === (4))){
var inst_18184 = (state_18194[(2)]);
var inst_18185 = async(inst_18184);
var state_18194__$1 = state_18194;
if(cljs.core.truth_(inst_18185)){
var statearr_18198_20245 = state_18194__$1;
(statearr_18198_20245[(1)] = (5));

} else {
var statearr_18199_20247 = state_18194__$1;
(statearr_18199_20247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (5))){
var state_18194__$1 = state_18194;
var statearr_18200_20248 = state_18194__$1;
(statearr_18200_20248[(2)] = null);

(statearr_18200_20248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (6))){
var state_18194__$1 = state_18194;
var statearr_18201_20249 = state_18194__$1;
(statearr_18201_20249[(2)] = null);

(statearr_18201_20249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18195 === (7))){
var inst_18190 = (state_18194[(2)]);
var state_18194__$1 = state_18194;
var statearr_18202_20250 = state_18194__$1;
(statearr_18202_20250[(2)] = inst_18190);

(statearr_18202_20250[(1)] = (3));


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
});})(__20219,c__17925__auto___20242,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async))
;
return ((function (__20219,switch__17405__auto__,c__17925__auto___20242,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0 = (function (){
var statearr_18204 = [null,null,null,null,null,null,null];
(statearr_18204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__);

(statearr_18204[(1)] = (1));

return statearr_18204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1 = (function (state_18194){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18194);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18205){var ex__17409__auto__ = e18205;
var statearr_18206_20251 = state_18194;
(statearr_18206_20251[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18194[(4)]))){
var statearr_18207_20252 = state_18194;
(statearr_18207_20252[(1)] = cljs.core.first((state_18194[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20253 = state_18194;
state_18194 = G__20253;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = function(state_18194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1.call(this,state_18194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__;
})()
;})(__20219,switch__17405__auto__,c__17925__auto___20242,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async))
})();
var state__17927__auto__ = (function (){var statearr_18208 = f__17926__auto__();
(statearr_18208[(6)] = c__17925__auto___20242);

return statearr_18208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
});})(__20219,c__17925__auto___20242,G__18154_20220,G__18154_20221__$1,n__5636__auto___20218,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18154_20221__$1)].join('')));

}

var G__20255 = (__20219 + (1));
__20219 = G__20255;
continue;
} else {
}
break;
}

var c__17925__auto___20256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_18231){
var state_val_18232 = (state_18231[(1)]);
if((state_val_18232 === (7))){
var inst_18227 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18233_20258 = state_18231__$1;
(statearr_18233_20258[(2)] = inst_18227);

(statearr_18233_20258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (1))){
var state_18231__$1 = state_18231;
var statearr_18234_20259 = state_18231__$1;
(statearr_18234_20259[(2)] = null);

(statearr_18234_20259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (4))){
var inst_18211 = (state_18231[(7)]);
var inst_18211__$1 = (state_18231[(2)]);
var inst_18212 = (inst_18211__$1 == null);
var state_18231__$1 = (function (){var statearr_18235 = state_18231;
(statearr_18235[(7)] = inst_18211__$1);

return statearr_18235;
})();
if(cljs.core.truth_(inst_18212)){
var statearr_18236_20260 = state_18231__$1;
(statearr_18236_20260[(1)] = (5));

} else {
var statearr_18237_20261 = state_18231__$1;
(statearr_18237_20261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (6))){
var inst_18211 = (state_18231[(7)]);
var inst_18216 = (state_18231[(8)]);
var inst_18216__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18218 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18219 = [inst_18211,inst_18216__$1];
var inst_18220 = (new cljs.core.PersistentVector(null,2,(5),inst_18218,inst_18219,null));
var state_18231__$1 = (function (){var statearr_18239 = state_18231;
(statearr_18239[(8)] = inst_18216__$1);

return statearr_18239;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18231__$1,(8),jobs,inst_18220);
} else {
if((state_val_18232 === (3))){
var inst_18229 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18231__$1,inst_18229);
} else {
if((state_val_18232 === (2))){
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18231__$1,(4),from);
} else {
if((state_val_18232 === (9))){
var inst_18224 = (state_18231[(2)]);
var state_18231__$1 = (function (){var statearr_18240 = state_18231;
(statearr_18240[(9)] = inst_18224);

return statearr_18240;
})();
var statearr_18241_20262 = state_18231__$1;
(statearr_18241_20262[(2)] = null);

(statearr_18241_20262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (5))){
var inst_18214 = cljs.core.async.close_BANG_(jobs);
var state_18231__$1 = state_18231;
var statearr_18242_20265 = state_18231__$1;
(statearr_18242_20265[(2)] = inst_18214);

(statearr_18242_20265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (8))){
var inst_18216 = (state_18231[(8)]);
var inst_18222 = (state_18231[(2)]);
var state_18231__$1 = (function (){var statearr_18243 = state_18231;
(statearr_18243[(10)] = inst_18222);

return statearr_18243;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18231__$1,(9),results,inst_18216);
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
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0 = (function (){
var statearr_18245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__);

(statearr_18245[(1)] = (1));

return statearr_18245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1 = (function (state_18231){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18231);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18246){var ex__17409__auto__ = e18246;
var statearr_18247_20268 = state_18231;
(statearr_18247_20268[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18231[(4)]))){
var statearr_18248_20269 = state_18231;
(statearr_18248_20269[(1)] = cljs.core.first((state_18231[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20270 = state_18231;
state_18231 = G__20270;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = function(state_18231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1.call(this,state_18231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_18249 = f__17926__auto__();
(statearr_18249[(6)] = c__17925__auto___20256);

return statearr_18249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));


var c__17925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_18288){
var state_val_18289 = (state_18288[(1)]);
if((state_val_18289 === (7))){
var inst_18284 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
var statearr_18290_20271 = state_18288__$1;
(statearr_18290_20271[(2)] = inst_18284);

(statearr_18290_20271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (20))){
var state_18288__$1 = state_18288;
var statearr_18291_20272 = state_18288__$1;
(statearr_18291_20272[(2)] = null);

(statearr_18291_20272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (1))){
var state_18288__$1 = state_18288;
var statearr_18292_20273 = state_18288__$1;
(statearr_18292_20273[(2)] = null);

(statearr_18292_20273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (4))){
var inst_18252 = (state_18288[(7)]);
var inst_18252__$1 = (state_18288[(2)]);
var inst_18253 = (inst_18252__$1 == null);
var state_18288__$1 = (function (){var statearr_18294 = state_18288;
(statearr_18294[(7)] = inst_18252__$1);

return statearr_18294;
})();
if(cljs.core.truth_(inst_18253)){
var statearr_18295_20274 = state_18288__$1;
(statearr_18295_20274[(1)] = (5));

} else {
var statearr_18296_20275 = state_18288__$1;
(statearr_18296_20275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (15))){
var inst_18266 = (state_18288[(8)]);
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18288__$1,(18),to,inst_18266);
} else {
if((state_val_18289 === (21))){
var inst_18279 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
var statearr_18297_20276 = state_18288__$1;
(statearr_18297_20276[(2)] = inst_18279);

(statearr_18297_20276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (13))){
var inst_18281 = (state_18288[(2)]);
var state_18288__$1 = (function (){var statearr_18298 = state_18288;
(statearr_18298[(9)] = inst_18281);

return statearr_18298;
})();
var statearr_18299_20278 = state_18288__$1;
(statearr_18299_20278[(2)] = null);

(statearr_18299_20278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (6))){
var inst_18252 = (state_18288[(7)]);
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18288__$1,(11),inst_18252);
} else {
if((state_val_18289 === (17))){
var inst_18274 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
if(cljs.core.truth_(inst_18274)){
var statearr_18300_20280 = state_18288__$1;
(statearr_18300_20280[(1)] = (19));

} else {
var statearr_18301_20281 = state_18288__$1;
(statearr_18301_20281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (3))){
var inst_18286 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18288__$1,inst_18286);
} else {
if((state_val_18289 === (12))){
var inst_18263 = (state_18288[(10)]);
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18288__$1,(14),inst_18263);
} else {
if((state_val_18289 === (2))){
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18288__$1,(4),results);
} else {
if((state_val_18289 === (19))){
var state_18288__$1 = state_18288;
var statearr_18303_20282 = state_18288__$1;
(statearr_18303_20282[(2)] = null);

(statearr_18303_20282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (11))){
var inst_18263 = (state_18288[(2)]);
var state_18288__$1 = (function (){var statearr_18304 = state_18288;
(statearr_18304[(10)] = inst_18263);

return statearr_18304;
})();
var statearr_18305_20283 = state_18288__$1;
(statearr_18305_20283[(2)] = null);

(statearr_18305_20283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (9))){
var state_18288__$1 = state_18288;
var statearr_18306_20284 = state_18288__$1;
(statearr_18306_20284[(2)] = null);

(statearr_18306_20284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (5))){
var state_18288__$1 = state_18288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18309_20285 = state_18288__$1;
(statearr_18309_20285[(1)] = (8));

} else {
var statearr_18310_20286 = state_18288__$1;
(statearr_18310_20286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (14))){
var inst_18268 = (state_18288[(11)]);
var inst_18266 = (state_18288[(8)]);
var inst_18266__$1 = (state_18288[(2)]);
var inst_18267 = (inst_18266__$1 == null);
var inst_18268__$1 = cljs.core.not(inst_18267);
var state_18288__$1 = (function (){var statearr_18311 = state_18288;
(statearr_18311[(11)] = inst_18268__$1);

(statearr_18311[(8)] = inst_18266__$1);

return statearr_18311;
})();
if(inst_18268__$1){
var statearr_18312_20287 = state_18288__$1;
(statearr_18312_20287[(1)] = (15));

} else {
var statearr_18313_20288 = state_18288__$1;
(statearr_18313_20288[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (16))){
var inst_18268 = (state_18288[(11)]);
var state_18288__$1 = state_18288;
var statearr_18314_20289 = state_18288__$1;
(statearr_18314_20289[(2)] = inst_18268);

(statearr_18314_20289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (10))){
var inst_18259 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
var statearr_18315_20290 = state_18288__$1;
(statearr_18315_20290[(2)] = inst_18259);

(statearr_18315_20290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (18))){
var inst_18271 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
var statearr_18316_20291 = state_18288__$1;
(statearr_18316_20291[(2)] = inst_18271);

(statearr_18316_20291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18289 === (8))){
var inst_18256 = cljs.core.async.close_BANG_(to);
var state_18288__$1 = state_18288;
var statearr_18317_20293 = state_18288__$1;
(statearr_18317_20293[(2)] = inst_18256);

(statearr_18317_20293[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0 = (function (){
var statearr_18320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__);

(statearr_18320[(1)] = (1));

return statearr_18320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1 = (function (state_18288){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18288);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18321){var ex__17409__auto__ = e18321;
var statearr_18322_20295 = state_18288;
(statearr_18322_20295[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18288[(4)]))){
var statearr_18323_20296 = state_18288;
(statearr_18323_20296[(1)] = cljs.core.first((state_18288[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20297 = state_18288;
state_18288 = G__20297;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__ = function(state_18288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1.call(this,state_18288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_18324 = f__17926__auto__();
(statearr_18324[(6)] = c__17925__auto__);

return statearr_18324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));

return c__17925__auto__;
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
var G__18326 = arguments.length;
switch (G__18326) {
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
var G__18329 = arguments.length;
switch (G__18329) {
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
var G__18332 = arguments.length;
switch (G__18332) {
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
var c__17925__auto___20310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_18361){
var state_val_18362 = (state_18361[(1)]);
if((state_val_18362 === (7))){
var inst_18357 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18369_20311 = state_18361__$1;
(statearr_18369_20311[(2)] = inst_18357);

(statearr_18369_20311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (1))){
var state_18361__$1 = state_18361;
var statearr_18370_20312 = state_18361__$1;
(statearr_18370_20312[(2)] = null);

(statearr_18370_20312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (4))){
var inst_18338 = (state_18361[(7)]);
var inst_18338__$1 = (state_18361[(2)]);
var inst_18339 = (inst_18338__$1 == null);
var state_18361__$1 = (function (){var statearr_18371 = state_18361;
(statearr_18371[(7)] = inst_18338__$1);

return statearr_18371;
})();
if(cljs.core.truth_(inst_18339)){
var statearr_18372_20313 = state_18361__$1;
(statearr_18372_20313[(1)] = (5));

} else {
var statearr_18373_20314 = state_18361__$1;
(statearr_18373_20314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (13))){
var state_18361__$1 = state_18361;
var statearr_18375_20315 = state_18361__$1;
(statearr_18375_20315[(2)] = null);

(statearr_18375_20315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (6))){
var inst_18338 = (state_18361[(7)]);
var inst_18344 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18338) : p.call(null,inst_18338));
var state_18361__$1 = state_18361;
if(cljs.core.truth_(inst_18344)){
var statearr_18379_20316 = state_18361__$1;
(statearr_18379_20316[(1)] = (9));

} else {
var statearr_18380_20317 = state_18361__$1;
(statearr_18380_20317[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (3))){
var inst_18359 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18361__$1,inst_18359);
} else {
if((state_val_18362 === (12))){
var state_18361__$1 = state_18361;
var statearr_18382_20318 = state_18361__$1;
(statearr_18382_20318[(2)] = null);

(statearr_18382_20318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (2))){
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18361__$1,(4),ch);
} else {
if((state_val_18362 === (11))){
var inst_18338 = (state_18361[(7)]);
var inst_18348 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18361__$1,(8),inst_18348,inst_18338);
} else {
if((state_val_18362 === (9))){
var state_18361__$1 = state_18361;
var statearr_18387_20319 = state_18361__$1;
(statearr_18387_20319[(2)] = tc);

(statearr_18387_20319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (5))){
var inst_18341 = cljs.core.async.close_BANG_(tc);
var inst_18342 = cljs.core.async.close_BANG_(fc);
var state_18361__$1 = (function (){var statearr_18390 = state_18361;
(statearr_18390[(8)] = inst_18341);

return statearr_18390;
})();
var statearr_18392_20320 = state_18361__$1;
(statearr_18392_20320[(2)] = inst_18342);

(statearr_18392_20320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (14))){
var inst_18355 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18394_20321 = state_18361__$1;
(statearr_18394_20321[(2)] = inst_18355);

(statearr_18394_20321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (10))){
var state_18361__$1 = state_18361;
var statearr_18398_20323 = state_18361__$1;
(statearr_18398_20323[(2)] = fc);

(statearr_18398_20323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (8))){
var inst_18350 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
if(cljs.core.truth_(inst_18350)){
var statearr_18399_20324 = state_18361__$1;
(statearr_18399_20324[(1)] = (12));

} else {
var statearr_18401_20325 = state_18361__$1;
(statearr_18401_20325[(1)] = (13));

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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_18405 = [null,null,null,null,null,null,null,null,null];
(statearr_18405[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_18405[(1)] = (1));

return statearr_18405;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_18361){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18361);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18406){var ex__17409__auto__ = e18406;
var statearr_18408_20326 = state_18361;
(statearr_18408_20326[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18361[(4)]))){
var statearr_18409_20327 = state_18361;
(statearr_18409_20327[(1)] = cljs.core.first((state_18361[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20328 = state_18361;
state_18361 = G__20328;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_18361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_18361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_18414 = f__17926__auto__();
(statearr_18414[(6)] = c__17925__auto___20310);

return statearr_18414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
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
var c__17925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_18444){
var state_val_18445 = (state_18444[(1)]);
if((state_val_18445 === (7))){
var inst_18440 = (state_18444[(2)]);
var state_18444__$1 = state_18444;
var statearr_18450_20330 = state_18444__$1;
(statearr_18450_20330[(2)] = inst_18440);

(statearr_18450_20330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (1))){
var inst_18420 = init;
var inst_18422 = inst_18420;
var state_18444__$1 = (function (){var statearr_18453 = state_18444;
(statearr_18453[(7)] = inst_18422);

return statearr_18453;
})();
var statearr_18455_20331 = state_18444__$1;
(statearr_18455_20331[(2)] = null);

(statearr_18455_20331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (4))){
var inst_18426 = (state_18444[(8)]);
var inst_18426__$1 = (state_18444[(2)]);
var inst_18427 = (inst_18426__$1 == null);
var state_18444__$1 = (function (){var statearr_18457 = state_18444;
(statearr_18457[(8)] = inst_18426__$1);

return statearr_18457;
})();
if(cljs.core.truth_(inst_18427)){
var statearr_18458_20332 = state_18444__$1;
(statearr_18458_20332[(1)] = (5));

} else {
var statearr_18461_20337 = state_18444__$1;
(statearr_18461_20337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (6))){
var inst_18426 = (state_18444[(8)]);
var inst_18430 = (state_18444[(9)]);
var inst_18422 = (state_18444[(7)]);
var inst_18430__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18422,inst_18426) : f.call(null,inst_18422,inst_18426));
var inst_18431 = cljs.core.reduced_QMARK_(inst_18430__$1);
var state_18444__$1 = (function (){var statearr_18464 = state_18444;
(statearr_18464[(9)] = inst_18430__$1);

return statearr_18464;
})();
if(inst_18431){
var statearr_18465_20338 = state_18444__$1;
(statearr_18465_20338[(1)] = (8));

} else {
var statearr_18466_20339 = state_18444__$1;
(statearr_18466_20339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (3))){
var inst_18442 = (state_18444[(2)]);
var state_18444__$1 = state_18444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18444__$1,inst_18442);
} else {
if((state_val_18445 === (2))){
var state_18444__$1 = state_18444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18444__$1,(4),ch);
} else {
if((state_val_18445 === (9))){
var inst_18430 = (state_18444[(9)]);
var inst_18422 = inst_18430;
var state_18444__$1 = (function (){var statearr_18471 = state_18444;
(statearr_18471[(7)] = inst_18422);

return statearr_18471;
})();
var statearr_18472_20340 = state_18444__$1;
(statearr_18472_20340[(2)] = null);

(statearr_18472_20340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (5))){
var inst_18422 = (state_18444[(7)]);
var state_18444__$1 = state_18444;
var statearr_18475_20341 = state_18444__$1;
(statearr_18475_20341[(2)] = inst_18422);

(statearr_18475_20341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (10))){
var inst_18438 = (state_18444[(2)]);
var state_18444__$1 = state_18444;
var statearr_18477_20342 = state_18444__$1;
(statearr_18477_20342[(2)] = inst_18438);

(statearr_18477_20342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (8))){
var inst_18430 = (state_18444[(9)]);
var inst_18434 = cljs.core.deref(inst_18430);
var state_18444__$1 = state_18444;
var statearr_18478_20343 = state_18444__$1;
(statearr_18478_20343[(2)] = inst_18434);

(statearr_18478_20343[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__17406__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17406__auto____0 = (function (){
var statearr_18481 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18481[(0)] = cljs$core$async$reduce_$_state_machine__17406__auto__);

(statearr_18481[(1)] = (1));

return statearr_18481;
});
var cljs$core$async$reduce_$_state_machine__17406__auto____1 = (function (state_18444){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18444);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18484){var ex__17409__auto__ = e18484;
var statearr_18485_20344 = state_18444;
(statearr_18485_20344[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18444[(4)]))){
var statearr_18487_20345 = state_18444;
(statearr_18487_20345[(1)] = cljs.core.first((state_18444[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20346 = state_18444;
state_18444 = G__20346;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17406__auto__ = function(state_18444){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17406__auto____1.call(this,state_18444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17406__auto____0;
cljs$core$async$reduce_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17406__auto____1;
return cljs$core$async$reduce_$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_18490 = f__17926__auto__();
(statearr_18490[(6)] = c__17925__auto__);

return statearr_18490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));

return c__17925__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_18501){
var state_val_18502 = (state_18501[(1)]);
if((state_val_18502 === (1))){
var inst_18496 = cljs.core.async.reduce(f__$1,init,ch);
var state_18501__$1 = state_18501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18501__$1,(2),inst_18496);
} else {
if((state_val_18502 === (2))){
var inst_18498 = (state_18501[(2)]);
var inst_18499 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18498) : f__$1.call(null,inst_18498));
var state_18501__$1 = state_18501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18501__$1,inst_18499);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17406__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17406__auto____0 = (function (){
var statearr_18508 = [null,null,null,null,null,null,null];
(statearr_18508[(0)] = cljs$core$async$transduce_$_state_machine__17406__auto__);

(statearr_18508[(1)] = (1));

return statearr_18508;
});
var cljs$core$async$transduce_$_state_machine__17406__auto____1 = (function (state_18501){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18501);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18512){var ex__17409__auto__ = e18512;
var statearr_18513_20350 = state_18501;
(statearr_18513_20350[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18501[(4)]))){
var statearr_18514_20351 = state_18501;
(statearr_18514_20351[(1)] = cljs.core.first((state_18501[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20352 = state_18501;
state_18501 = G__20352;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17406__auto__ = function(state_18501){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17406__auto____1.call(this,state_18501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17406__auto____0;
cljs$core$async$transduce_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17406__auto____1;
return cljs$core$async$transduce_$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_18519 = f__17926__auto__();
(statearr_18519[(6)] = c__17925__auto__);

return statearr_18519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));

return c__17925__auto__;
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
var G__18525 = arguments.length;
switch (G__18525) {
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
var c__17925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_18557){
var state_val_18559 = (state_18557[(1)]);
if((state_val_18559 === (7))){
var inst_18538 = (state_18557[(2)]);
var state_18557__$1 = state_18557;
var statearr_18563_20355 = state_18557__$1;
(statearr_18563_20355[(2)] = inst_18538);

(statearr_18563_20355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (1))){
var inst_18531 = cljs.core.seq(coll);
var inst_18532 = inst_18531;
var state_18557__$1 = (function (){var statearr_18567 = state_18557;
(statearr_18567[(7)] = inst_18532);

return statearr_18567;
})();
var statearr_18568_20357 = state_18557__$1;
(statearr_18568_20357[(2)] = null);

(statearr_18568_20357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (4))){
var inst_18532 = (state_18557[(7)]);
var inst_18536 = cljs.core.first(inst_18532);
var state_18557__$1 = state_18557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18557__$1,(7),ch,inst_18536);
} else {
if((state_val_18559 === (13))){
var inst_18550 = (state_18557[(2)]);
var state_18557__$1 = state_18557;
var statearr_18574_20358 = state_18557__$1;
(statearr_18574_20358[(2)] = inst_18550);

(statearr_18574_20358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (6))){
var inst_18541 = (state_18557[(2)]);
var state_18557__$1 = state_18557;
if(cljs.core.truth_(inst_18541)){
var statearr_18576_20359 = state_18557__$1;
(statearr_18576_20359[(1)] = (8));

} else {
var statearr_18577_20360 = state_18557__$1;
(statearr_18577_20360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (3))){
var inst_18554 = (state_18557[(2)]);
var state_18557__$1 = state_18557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18557__$1,inst_18554);
} else {
if((state_val_18559 === (12))){
var state_18557__$1 = state_18557;
var statearr_18581_20361 = state_18557__$1;
(statearr_18581_20361[(2)] = null);

(statearr_18581_20361[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (2))){
var inst_18532 = (state_18557[(7)]);
var state_18557__$1 = state_18557;
if(cljs.core.truth_(inst_18532)){
var statearr_18583_20362 = state_18557__$1;
(statearr_18583_20362[(1)] = (4));

} else {
var statearr_18586_20363 = state_18557__$1;
(statearr_18586_20363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (11))){
var inst_18547 = cljs.core.async.close_BANG_(ch);
var state_18557__$1 = state_18557;
var statearr_18588_20364 = state_18557__$1;
(statearr_18588_20364[(2)] = inst_18547);

(statearr_18588_20364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (9))){
var state_18557__$1 = state_18557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18590_20365 = state_18557__$1;
(statearr_18590_20365[(1)] = (11));

} else {
var statearr_18592_20366 = state_18557__$1;
(statearr_18592_20366[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (5))){
var inst_18532 = (state_18557[(7)]);
var state_18557__$1 = state_18557;
var statearr_18595_20367 = state_18557__$1;
(statearr_18595_20367[(2)] = inst_18532);

(statearr_18595_20367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (10))){
var inst_18552 = (state_18557[(2)]);
var state_18557__$1 = state_18557;
var statearr_18598_20368 = state_18557__$1;
(statearr_18598_20368[(2)] = inst_18552);

(statearr_18598_20368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (8))){
var inst_18532 = (state_18557[(7)]);
var inst_18543 = cljs.core.next(inst_18532);
var inst_18532__$1 = inst_18543;
var state_18557__$1 = (function (){var statearr_18601 = state_18557;
(statearr_18601[(7)] = inst_18532__$1);

return statearr_18601;
})();
var statearr_18603_20369 = state_18557__$1;
(statearr_18603_20369[(2)] = null);

(statearr_18603_20369[(1)] = (2));


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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_18605 = [null,null,null,null,null,null,null,null];
(statearr_18605[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_18605[(1)] = (1));

return statearr_18605;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_18557){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18557);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18612){var ex__17409__auto__ = e18612;
var statearr_18613_20370 = state_18557;
(statearr_18613_20370[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18557[(4)]))){
var statearr_18615_20371 = state_18557;
(statearr_18615_20371[(1)] = cljs.core.first((state_18557[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20372 = state_18557;
state_18557 = G__20372;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_18557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_18557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_18620 = f__17926__auto__();
(statearr_18620[(6)] = c__17925__auto__);

return statearr_18620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));

return c__17925__auto__;
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
var G__18630 = arguments.length;
switch (G__18630) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_20381 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_20381(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20385 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_20385(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20386 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_20386(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20390 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_20390(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18673 = (function (ch,cs,meta18674){
this.ch = ch;
this.cs = cs;
this.meta18674 = meta18674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18675,meta18674__$1){
var self__ = this;
var _18675__$1 = this;
return (new cljs.core.async.t_cljs$core$async18673(self__.ch,self__.cs,meta18674__$1));
}));

(cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18675){
var self__ = this;
var _18675__$1 = this;
return self__.meta18674;
}));

(cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18674","meta18674",-1701884933,null)], null);
}));

(cljs.core.async.t_cljs$core$async18673.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18673");

(cljs.core.async.t_cljs$core$async18673.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18673");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18673.
 */
cljs.core.async.__GT_t_cljs$core$async18673 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18673(ch__$1,cs__$1,meta18674){
return (new cljs.core.async.t_cljs$core$async18673(ch__$1,cs__$1,meta18674));
});

}

return (new cljs.core.async.t_cljs$core$async18673(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17925__auto___20404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_18814){
var state_val_18815 = (state_18814[(1)]);
if((state_val_18815 === (7))){
var inst_18806 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18821_20405 = state_18814__$1;
(statearr_18821_20405[(2)] = inst_18806);

(statearr_18821_20405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (20))){
var inst_18709 = (state_18814[(7)]);
var inst_18721 = cljs.core.first(inst_18709);
var inst_18722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18721,(0),null);
var inst_18723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18721,(1),null);
var state_18814__$1 = (function (){var statearr_18822 = state_18814;
(statearr_18822[(8)] = inst_18722);

return statearr_18822;
})();
if(cljs.core.truth_(inst_18723)){
var statearr_18823_20406 = state_18814__$1;
(statearr_18823_20406[(1)] = (22));

} else {
var statearr_18824_20407 = state_18814__$1;
(statearr_18824_20407[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (27))){
var inst_18678 = (state_18814[(9)]);
var inst_18751 = (state_18814[(10)]);
var inst_18753 = (state_18814[(11)]);
var inst_18758 = (state_18814[(12)]);
var inst_18758__$1 = cljs.core._nth(inst_18751,inst_18753);
var inst_18759 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18758__$1,inst_18678,done);
var state_18814__$1 = (function (){var statearr_18832 = state_18814;
(statearr_18832[(12)] = inst_18758__$1);

return statearr_18832;
})();
if(cljs.core.truth_(inst_18759)){
var statearr_18833_20411 = state_18814__$1;
(statearr_18833_20411[(1)] = (30));

} else {
var statearr_18835_20412 = state_18814__$1;
(statearr_18835_20412[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (1))){
var state_18814__$1 = state_18814;
var statearr_18836_20413 = state_18814__$1;
(statearr_18836_20413[(2)] = null);

(statearr_18836_20413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (24))){
var inst_18709 = (state_18814[(7)]);
var inst_18728 = (state_18814[(2)]);
var inst_18729 = cljs.core.next(inst_18709);
var inst_18687 = inst_18729;
var inst_18688 = null;
var inst_18689 = (0);
var inst_18690 = (0);
var state_18814__$1 = (function (){var statearr_18837 = state_18814;
(statearr_18837[(13)] = inst_18688);

(statearr_18837[(14)] = inst_18728);

(statearr_18837[(15)] = inst_18687);

(statearr_18837[(16)] = inst_18689);

(statearr_18837[(17)] = inst_18690);

return statearr_18837;
})();
var statearr_18842_20414 = state_18814__$1;
(statearr_18842_20414[(2)] = null);

(statearr_18842_20414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (39))){
var state_18814__$1 = state_18814;
var statearr_18846_20418 = state_18814__$1;
(statearr_18846_20418[(2)] = null);

(statearr_18846_20418[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (4))){
var inst_18678 = (state_18814[(9)]);
var inst_18678__$1 = (state_18814[(2)]);
var inst_18679 = (inst_18678__$1 == null);
var state_18814__$1 = (function (){var statearr_18851 = state_18814;
(statearr_18851[(9)] = inst_18678__$1);

return statearr_18851;
})();
if(cljs.core.truth_(inst_18679)){
var statearr_18852_20419 = state_18814__$1;
(statearr_18852_20419[(1)] = (5));

} else {
var statearr_18853_20420 = state_18814__$1;
(statearr_18853_20420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (15))){
var inst_18688 = (state_18814[(13)]);
var inst_18687 = (state_18814[(15)]);
var inst_18689 = (state_18814[(16)]);
var inst_18690 = (state_18814[(17)]);
var inst_18705 = (state_18814[(2)]);
var inst_18706 = (inst_18690 + (1));
var tmp18843 = inst_18688;
var tmp18844 = inst_18687;
var tmp18845 = inst_18689;
var inst_18687__$1 = tmp18844;
var inst_18688__$1 = tmp18843;
var inst_18689__$1 = tmp18845;
var inst_18690__$1 = inst_18706;
var state_18814__$1 = (function (){var statearr_18854 = state_18814;
(statearr_18854[(13)] = inst_18688__$1);

(statearr_18854[(15)] = inst_18687__$1);

(statearr_18854[(16)] = inst_18689__$1);

(statearr_18854[(17)] = inst_18690__$1);

(statearr_18854[(18)] = inst_18705);

return statearr_18854;
})();
var statearr_18858_20421 = state_18814__$1;
(statearr_18858_20421[(2)] = null);

(statearr_18858_20421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (21))){
var inst_18732 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18863_20422 = state_18814__$1;
(statearr_18863_20422[(2)] = inst_18732);

(statearr_18863_20422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (31))){
var inst_18758 = (state_18814[(12)]);
var inst_18762 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18758);
var state_18814__$1 = state_18814;
var statearr_18864_20426 = state_18814__$1;
(statearr_18864_20426[(2)] = inst_18762);

(statearr_18864_20426[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (32))){
var inst_18751 = (state_18814[(10)]);
var inst_18752 = (state_18814[(19)]);
var inst_18750 = (state_18814[(20)]);
var inst_18753 = (state_18814[(11)]);
var inst_18764 = (state_18814[(2)]);
var inst_18765 = (inst_18753 + (1));
var tmp18860 = inst_18751;
var tmp18861 = inst_18752;
var tmp18862 = inst_18750;
var inst_18750__$1 = tmp18862;
var inst_18751__$1 = tmp18860;
var inst_18752__$1 = tmp18861;
var inst_18753__$1 = inst_18765;
var state_18814__$1 = (function (){var statearr_18866 = state_18814;
(statearr_18866[(10)] = inst_18751__$1);

(statearr_18866[(21)] = inst_18764);

(statearr_18866[(19)] = inst_18752__$1);

(statearr_18866[(20)] = inst_18750__$1);

(statearr_18866[(11)] = inst_18753__$1);

return statearr_18866;
})();
var statearr_18867_20427 = state_18814__$1;
(statearr_18867_20427[(2)] = null);

(statearr_18867_20427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (40))){
var inst_18779 = (state_18814[(22)]);
var inst_18783 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18779);
var state_18814__$1 = state_18814;
var statearr_18868_20428 = state_18814__$1;
(statearr_18868_20428[(2)] = inst_18783);

(statearr_18868_20428[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (33))){
var inst_18768 = (state_18814[(23)]);
var inst_18772 = cljs.core.chunked_seq_QMARK_(inst_18768);
var state_18814__$1 = state_18814;
if(inst_18772){
var statearr_18869_20429 = state_18814__$1;
(statearr_18869_20429[(1)] = (36));

} else {
var statearr_18870_20430 = state_18814__$1;
(statearr_18870_20430[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (13))){
var inst_18699 = (state_18814[(24)]);
var inst_18702 = cljs.core.async.close_BANG_(inst_18699);
var state_18814__$1 = state_18814;
var statearr_18875_20432 = state_18814__$1;
(statearr_18875_20432[(2)] = inst_18702);

(statearr_18875_20432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (22))){
var inst_18722 = (state_18814[(8)]);
var inst_18725 = cljs.core.async.close_BANG_(inst_18722);
var state_18814__$1 = state_18814;
var statearr_18880_20433 = state_18814__$1;
(statearr_18880_20433[(2)] = inst_18725);

(statearr_18880_20433[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (36))){
var inst_18768 = (state_18814[(23)]);
var inst_18774 = cljs.core.chunk_first(inst_18768);
var inst_18775 = cljs.core.chunk_rest(inst_18768);
var inst_18776 = cljs.core.count(inst_18774);
var inst_18750 = inst_18775;
var inst_18751 = inst_18774;
var inst_18752 = inst_18776;
var inst_18753 = (0);
var state_18814__$1 = (function (){var statearr_18881 = state_18814;
(statearr_18881[(10)] = inst_18751);

(statearr_18881[(19)] = inst_18752);

(statearr_18881[(20)] = inst_18750);

(statearr_18881[(11)] = inst_18753);

return statearr_18881;
})();
var statearr_18882_20434 = state_18814__$1;
(statearr_18882_20434[(2)] = null);

(statearr_18882_20434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (41))){
var inst_18768 = (state_18814[(23)]);
var inst_18785 = (state_18814[(2)]);
var inst_18786 = cljs.core.next(inst_18768);
var inst_18750 = inst_18786;
var inst_18751 = null;
var inst_18752 = (0);
var inst_18753 = (0);
var state_18814__$1 = (function (){var statearr_18887 = state_18814;
(statearr_18887[(10)] = inst_18751);

(statearr_18887[(19)] = inst_18752);

(statearr_18887[(25)] = inst_18785);

(statearr_18887[(20)] = inst_18750);

(statearr_18887[(11)] = inst_18753);

return statearr_18887;
})();
var statearr_18888_20435 = state_18814__$1;
(statearr_18888_20435[(2)] = null);

(statearr_18888_20435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (43))){
var state_18814__$1 = state_18814;
var statearr_18892_20436 = state_18814__$1;
(statearr_18892_20436[(2)] = null);

(statearr_18892_20436[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (29))){
var inst_18794 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18894_20437 = state_18814__$1;
(statearr_18894_20437[(2)] = inst_18794);

(statearr_18894_20437[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (44))){
var inst_18803 = (state_18814[(2)]);
var state_18814__$1 = (function (){var statearr_18895 = state_18814;
(statearr_18895[(26)] = inst_18803);

return statearr_18895;
})();
var statearr_18896_20438 = state_18814__$1;
(statearr_18896_20438[(2)] = null);

(statearr_18896_20438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (6))){
var inst_18742 = (state_18814[(27)]);
var inst_18741 = cljs.core.deref(cs);
var inst_18742__$1 = cljs.core.keys(inst_18741);
var inst_18743 = cljs.core.count(inst_18742__$1);
var inst_18744 = cljs.core.reset_BANG_(dctr,inst_18743);
var inst_18749 = cljs.core.seq(inst_18742__$1);
var inst_18750 = inst_18749;
var inst_18751 = null;
var inst_18752 = (0);
var inst_18753 = (0);
var state_18814__$1 = (function (){var statearr_18901 = state_18814;
(statearr_18901[(28)] = inst_18744);

(statearr_18901[(10)] = inst_18751);

(statearr_18901[(27)] = inst_18742__$1);

(statearr_18901[(19)] = inst_18752);

(statearr_18901[(20)] = inst_18750);

(statearr_18901[(11)] = inst_18753);

return statearr_18901;
})();
var statearr_18902_20439 = state_18814__$1;
(statearr_18902_20439[(2)] = null);

(statearr_18902_20439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (28))){
var inst_18768 = (state_18814[(23)]);
var inst_18750 = (state_18814[(20)]);
var inst_18768__$1 = cljs.core.seq(inst_18750);
var state_18814__$1 = (function (){var statearr_18903 = state_18814;
(statearr_18903[(23)] = inst_18768__$1);

return statearr_18903;
})();
if(inst_18768__$1){
var statearr_18904_20444 = state_18814__$1;
(statearr_18904_20444[(1)] = (33));

} else {
var statearr_18905_20445 = state_18814__$1;
(statearr_18905_20445[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (25))){
var inst_18752 = (state_18814[(19)]);
var inst_18753 = (state_18814[(11)]);
var inst_18755 = (inst_18753 < inst_18752);
var inst_18756 = inst_18755;
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18756)){
var statearr_18907_20446 = state_18814__$1;
(statearr_18907_20446[(1)] = (27));

} else {
var statearr_18908_20447 = state_18814__$1;
(statearr_18908_20447[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (34))){
var state_18814__$1 = state_18814;
var statearr_18909_20448 = state_18814__$1;
(statearr_18909_20448[(2)] = null);

(statearr_18909_20448[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (17))){
var state_18814__$1 = state_18814;
var statearr_18910_20449 = state_18814__$1;
(statearr_18910_20449[(2)] = null);

(statearr_18910_20449[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (3))){
var inst_18808 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18814__$1,inst_18808);
} else {
if((state_val_18815 === (12))){
var inst_18737 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18911_20454 = state_18814__$1;
(statearr_18911_20454[(2)] = inst_18737);

(statearr_18911_20454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (2))){
var state_18814__$1 = state_18814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18814__$1,(4),ch);
} else {
if((state_val_18815 === (23))){
var state_18814__$1 = state_18814;
var statearr_18919_20455 = state_18814__$1;
(statearr_18919_20455[(2)] = null);

(statearr_18919_20455[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (35))){
var inst_18792 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18921_20456 = state_18814__$1;
(statearr_18921_20456[(2)] = inst_18792);

(statearr_18921_20456[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (19))){
var inst_18709 = (state_18814[(7)]);
var inst_18713 = cljs.core.chunk_first(inst_18709);
var inst_18714 = cljs.core.chunk_rest(inst_18709);
var inst_18715 = cljs.core.count(inst_18713);
var inst_18687 = inst_18714;
var inst_18688 = inst_18713;
var inst_18689 = inst_18715;
var inst_18690 = (0);
var state_18814__$1 = (function (){var statearr_18922 = state_18814;
(statearr_18922[(13)] = inst_18688);

(statearr_18922[(15)] = inst_18687);

(statearr_18922[(16)] = inst_18689);

(statearr_18922[(17)] = inst_18690);

return statearr_18922;
})();
var statearr_18926_20457 = state_18814__$1;
(statearr_18926_20457[(2)] = null);

(statearr_18926_20457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (11))){
var inst_18687 = (state_18814[(15)]);
var inst_18709 = (state_18814[(7)]);
var inst_18709__$1 = cljs.core.seq(inst_18687);
var state_18814__$1 = (function (){var statearr_18928 = state_18814;
(statearr_18928[(7)] = inst_18709__$1);

return statearr_18928;
})();
if(inst_18709__$1){
var statearr_18929_20458 = state_18814__$1;
(statearr_18929_20458[(1)] = (16));

} else {
var statearr_18930_20459 = state_18814__$1;
(statearr_18930_20459[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (9))){
var inst_18739 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18934_20460 = state_18814__$1;
(statearr_18934_20460[(2)] = inst_18739);

(statearr_18934_20460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (5))){
var inst_18685 = cljs.core.deref(cs);
var inst_18686 = cljs.core.seq(inst_18685);
var inst_18687 = inst_18686;
var inst_18688 = null;
var inst_18689 = (0);
var inst_18690 = (0);
var state_18814__$1 = (function (){var statearr_18936 = state_18814;
(statearr_18936[(13)] = inst_18688);

(statearr_18936[(15)] = inst_18687);

(statearr_18936[(16)] = inst_18689);

(statearr_18936[(17)] = inst_18690);

return statearr_18936;
})();
var statearr_18937_20461 = state_18814__$1;
(statearr_18937_20461[(2)] = null);

(statearr_18937_20461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (14))){
var state_18814__$1 = state_18814;
var statearr_18938_20462 = state_18814__$1;
(statearr_18938_20462[(2)] = null);

(statearr_18938_20462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (45))){
var inst_18800 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18942_20463 = state_18814__$1;
(statearr_18942_20463[(2)] = inst_18800);

(statearr_18942_20463[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (26))){
var inst_18742 = (state_18814[(27)]);
var inst_18796 = (state_18814[(2)]);
var inst_18797 = cljs.core.seq(inst_18742);
var state_18814__$1 = (function (){var statearr_18944 = state_18814;
(statearr_18944[(29)] = inst_18796);

return statearr_18944;
})();
if(inst_18797){
var statearr_18945_20464 = state_18814__$1;
(statearr_18945_20464[(1)] = (42));

} else {
var statearr_18946_20465 = state_18814__$1;
(statearr_18946_20465[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (16))){
var inst_18709 = (state_18814[(7)]);
var inst_18711 = cljs.core.chunked_seq_QMARK_(inst_18709);
var state_18814__$1 = state_18814;
if(inst_18711){
var statearr_18947_20466 = state_18814__$1;
(statearr_18947_20466[(1)] = (19));

} else {
var statearr_18948_20467 = state_18814__$1;
(statearr_18948_20467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (38))){
var inst_18789 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18950_20468 = state_18814__$1;
(statearr_18950_20468[(2)] = inst_18789);

(statearr_18950_20468[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (30))){
var state_18814__$1 = state_18814;
var statearr_18951_20469 = state_18814__$1;
(statearr_18951_20469[(2)] = null);

(statearr_18951_20469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (10))){
var inst_18688 = (state_18814[(13)]);
var inst_18690 = (state_18814[(17)]);
var inst_18698 = cljs.core._nth(inst_18688,inst_18690);
var inst_18699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18698,(0),null);
var inst_18700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18698,(1),null);
var state_18814__$1 = (function (){var statearr_18952 = state_18814;
(statearr_18952[(24)] = inst_18699);

return statearr_18952;
})();
if(cljs.core.truth_(inst_18700)){
var statearr_18957_20470 = state_18814__$1;
(statearr_18957_20470[(1)] = (13));

} else {
var statearr_18961_20471 = state_18814__$1;
(statearr_18961_20471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (18))){
var inst_18735 = (state_18814[(2)]);
var state_18814__$1 = state_18814;
var statearr_18963_20472 = state_18814__$1;
(statearr_18963_20472[(2)] = inst_18735);

(statearr_18963_20472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (42))){
var state_18814__$1 = state_18814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18814__$1,(45),dchan);
} else {
if((state_val_18815 === (37))){
var inst_18678 = (state_18814[(9)]);
var inst_18768 = (state_18814[(23)]);
var inst_18779 = (state_18814[(22)]);
var inst_18779__$1 = cljs.core.first(inst_18768);
var inst_18780 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18779__$1,inst_18678,done);
var state_18814__$1 = (function (){var statearr_18968 = state_18814;
(statearr_18968[(22)] = inst_18779__$1);

return statearr_18968;
})();
if(cljs.core.truth_(inst_18780)){
var statearr_18969_20475 = state_18814__$1;
(statearr_18969_20475[(1)] = (39));

} else {
var statearr_18970_20476 = state_18814__$1;
(statearr_18970_20476[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18815 === (8))){
var inst_18689 = (state_18814[(16)]);
var inst_18690 = (state_18814[(17)]);
var inst_18692 = (inst_18690 < inst_18689);
var inst_18693 = inst_18692;
var state_18814__$1 = state_18814;
if(cljs.core.truth_(inst_18693)){
var statearr_18971_20480 = state_18814__$1;
(statearr_18971_20480[(1)] = (10));

} else {
var statearr_18975_20481 = state_18814__$1;
(statearr_18975_20481[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__17406__auto__ = null;
var cljs$core$async$mult_$_state_machine__17406__auto____0 = (function (){
var statearr_18977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18977[(0)] = cljs$core$async$mult_$_state_machine__17406__auto__);

(statearr_18977[(1)] = (1));

return statearr_18977;
});
var cljs$core$async$mult_$_state_machine__17406__auto____1 = (function (state_18814){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_18814);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e18981){var ex__17409__auto__ = e18981;
var statearr_18982_20483 = state_18814;
(statearr_18982_20483[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_18814[(4)]))){
var statearr_18984_20484 = state_18814;
(statearr_18984_20484[(1)] = cljs.core.first((state_18814[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20485 = state_18814;
state_18814 = G__20485;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17406__auto__ = function(state_18814){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17406__auto____1.call(this,state_18814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17406__auto____0;
cljs$core$async$mult_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17406__auto____1;
return cljs$core$async$mult_$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_18985 = f__17926__auto__();
(statearr_18985[(6)] = c__17925__auto___20404);

return statearr_18985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
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
var G__18987 = arguments.length;
switch (G__18987) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_20489 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_20489(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20490 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_20490(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20491 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20491(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20492 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_20492(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20493 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20493(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20499 = arguments.length;
var i__5770__auto___20500 = (0);
while(true){
if((i__5770__auto___20500 < len__5769__auto___20499)){
args__5775__auto__.push((arguments[i__5770__auto___20500]));

var G__20501 = (i__5770__auto___20500 + (1));
i__5770__auto___20500 = G__20501;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18999){
var map__19000 = p__18999;
var map__19000__$1 = cljs.core.__destructure_map(map__19000);
var opts = map__19000__$1;
var statearr_19001_20505 = state;
(statearr_19001_20505[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19002_20508 = state;
(statearr_19002_20508[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19003_20509 = state;
(statearr_19003_20509[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18995){
var G__18996 = cljs.core.first(seq18995);
var seq18995__$1 = cljs.core.next(seq18995);
var G__18997 = cljs.core.first(seq18995__$1);
var seq18995__$2 = cljs.core.next(seq18995__$1);
var G__18998 = cljs.core.first(seq18995__$2);
var seq18995__$3 = cljs.core.next(seq18995__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18996,G__18997,G__18998,seq18995__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19008 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19009){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19009 = meta19009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19010,meta19009__$1){
var self__ = this;
var _19010__$1 = this;
return (new cljs.core.async.t_cljs$core$async19008(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19009__$1));
}));

(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19010){
var self__ = this;
var _19010__$1 = this;
return self__.meta19009;
}));

(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19008.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19009","meta19009",842579512,null)], null);
}));

(cljs.core.async.t_cljs$core$async19008.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19008");

(cljs.core.async.t_cljs$core$async19008.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19008");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19008.
 */
cljs.core.async.__GT_t_cljs$core$async19008 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19008(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19009){
return (new cljs.core.async.t_cljs$core$async19008(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19009));
});

}

return (new cljs.core.async.t_cljs$core$async19008(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17925__auto___20534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_19086){
var state_val_19087 = (state_19086[(1)]);
if((state_val_19087 === (7))){
var inst_19042 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
if(cljs.core.truth_(inst_19042)){
var statearr_19091_20541 = state_19086__$1;
(statearr_19091_20541[(1)] = (8));

} else {
var statearr_19092_20542 = state_19086__$1;
(statearr_19092_20542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (20))){
var inst_19035 = (state_19086[(7)]);
var state_19086__$1 = state_19086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19086__$1,(23),out,inst_19035);
} else {
if((state_val_19087 === (1))){
var inst_19016 = calc_state();
var inst_19017 = cljs.core.__destructure_map(inst_19016);
var inst_19018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19017,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19017,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19017,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19022 = inst_19016;
var state_19086__$1 = (function (){var statearr_19095 = state_19086;
(statearr_19095[(8)] = inst_19021);

(statearr_19095[(9)] = inst_19018);

(statearr_19095[(10)] = inst_19020);

(statearr_19095[(11)] = inst_19022);

return statearr_19095;
})();
var statearr_19096_20547 = state_19086__$1;
(statearr_19096_20547[(2)] = null);

(statearr_19096_20547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (24))){
var inst_19026 = (state_19086[(12)]);
var inst_19022 = inst_19026;
var state_19086__$1 = (function (){var statearr_19097 = state_19086;
(statearr_19097[(11)] = inst_19022);

return statearr_19097;
})();
var statearr_19098_20548 = state_19086__$1;
(statearr_19098_20548[(2)] = null);

(statearr_19098_20548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (4))){
var inst_19037 = (state_19086[(13)]);
var inst_19035 = (state_19086[(7)]);
var inst_19034 = (state_19086[(2)]);
var inst_19035__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19034,(0),null);
var inst_19036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19034,(1),null);
var inst_19037__$1 = (inst_19035__$1 == null);
var state_19086__$1 = (function (){var statearr_19102 = state_19086;
(statearr_19102[(14)] = inst_19036);

(statearr_19102[(13)] = inst_19037__$1);

(statearr_19102[(7)] = inst_19035__$1);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19037__$1)){
var statearr_19103_20553 = state_19086__$1;
(statearr_19103_20553[(1)] = (5));

} else {
var statearr_19104_20554 = state_19086__$1;
(statearr_19104_20554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (15))){
var inst_19060 = (state_19086[(15)]);
var inst_19027 = (state_19086[(16)]);
var inst_19060__$1 = cljs.core.empty_QMARK_(inst_19027);
var state_19086__$1 = (function (){var statearr_19105 = state_19086;
(statearr_19105[(15)] = inst_19060__$1);

return statearr_19105;
})();
if(inst_19060__$1){
var statearr_19106_20555 = state_19086__$1;
(statearr_19106_20555[(1)] = (17));

} else {
var statearr_19107_20556 = state_19086__$1;
(statearr_19107_20556[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (21))){
var inst_19026 = (state_19086[(12)]);
var inst_19022 = inst_19026;
var state_19086__$1 = (function (){var statearr_19108 = state_19086;
(statearr_19108[(11)] = inst_19022);

return statearr_19108;
})();
var statearr_19109_20563 = state_19086__$1;
(statearr_19109_20563[(2)] = null);

(statearr_19109_20563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (13))){
var inst_19049 = (state_19086[(2)]);
var inst_19050 = calc_state();
var inst_19022 = inst_19050;
var state_19086__$1 = (function (){var statearr_19110 = state_19086;
(statearr_19110[(11)] = inst_19022);

(statearr_19110[(17)] = inst_19049);

return statearr_19110;
})();
var statearr_19118_20564 = state_19086__$1;
(statearr_19118_20564[(2)] = null);

(statearr_19118_20564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (22))){
var inst_19080 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19125_20565 = state_19086__$1;
(statearr_19125_20565[(2)] = inst_19080);

(statearr_19125_20565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (6))){
var inst_19036 = (state_19086[(14)]);
var inst_19040 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19036,change);
var state_19086__$1 = state_19086;
var statearr_19132_20567 = state_19086__$1;
(statearr_19132_20567[(2)] = inst_19040);

(statearr_19132_20567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (25))){
var state_19086__$1 = state_19086;
var statearr_19133_20572 = state_19086__$1;
(statearr_19133_20572[(2)] = null);

(statearr_19133_20572[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (17))){
var inst_19036 = (state_19086[(14)]);
var inst_19028 = (state_19086[(18)]);
var inst_19062 = (inst_19028.cljs$core$IFn$_invoke$arity$1 ? inst_19028.cljs$core$IFn$_invoke$arity$1(inst_19036) : inst_19028.call(null,inst_19036));
var inst_19063 = cljs.core.not(inst_19062);
var state_19086__$1 = state_19086;
var statearr_19134_20573 = state_19086__$1;
(statearr_19134_20573[(2)] = inst_19063);

(statearr_19134_20573[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (3))){
var inst_19084 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19086__$1,inst_19084);
} else {
if((state_val_19087 === (12))){
var state_19086__$1 = state_19086;
var statearr_19135_20574 = state_19086__$1;
(statearr_19135_20574[(2)] = null);

(statearr_19135_20574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (2))){
var inst_19026 = (state_19086[(12)]);
var inst_19022 = (state_19086[(11)]);
var inst_19026__$1 = cljs.core.__destructure_map(inst_19022);
var inst_19027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19026__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19026__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19026__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19086__$1 = (function (){var statearr_19143 = state_19086;
(statearr_19143[(18)] = inst_19028);

(statearr_19143[(16)] = inst_19027);

(statearr_19143[(12)] = inst_19026__$1);

return statearr_19143;
})();
return cljs.core.async.ioc_alts_BANG_(state_19086__$1,(4),inst_19029);
} else {
if((state_val_19087 === (23))){
var inst_19071 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
if(cljs.core.truth_(inst_19071)){
var statearr_19147_20585 = state_19086__$1;
(statearr_19147_20585[(1)] = (24));

} else {
var statearr_19148_20586 = state_19086__$1;
(statearr_19148_20586[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (19))){
var inst_19066 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19149_20587 = state_19086__$1;
(statearr_19149_20587[(2)] = inst_19066);

(statearr_19149_20587[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (11))){
var inst_19036 = (state_19086[(14)]);
var inst_19046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19036);
var state_19086__$1 = state_19086;
var statearr_19153_20588 = state_19086__$1;
(statearr_19153_20588[(2)] = inst_19046);

(statearr_19153_20588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (9))){
var inst_19036 = (state_19086[(14)]);
var inst_19054 = (state_19086[(19)]);
var inst_19027 = (state_19086[(16)]);
var inst_19054__$1 = (inst_19027.cljs$core$IFn$_invoke$arity$1 ? inst_19027.cljs$core$IFn$_invoke$arity$1(inst_19036) : inst_19027.call(null,inst_19036));
var state_19086__$1 = (function (){var statearr_19154 = state_19086;
(statearr_19154[(19)] = inst_19054__$1);

return statearr_19154;
})();
if(cljs.core.truth_(inst_19054__$1)){
var statearr_19155_20589 = state_19086__$1;
(statearr_19155_20589[(1)] = (14));

} else {
var statearr_19156_20590 = state_19086__$1;
(statearr_19156_20590[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (5))){
var inst_19037 = (state_19086[(13)]);
var state_19086__$1 = state_19086;
var statearr_19157_20592 = state_19086__$1;
(statearr_19157_20592[(2)] = inst_19037);

(statearr_19157_20592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (14))){
var inst_19054 = (state_19086[(19)]);
var state_19086__$1 = state_19086;
var statearr_19158_20597 = state_19086__$1;
(statearr_19158_20597[(2)] = inst_19054);

(statearr_19158_20597[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (26))){
var inst_19076 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19159_20598 = state_19086__$1;
(statearr_19159_20598[(2)] = inst_19076);

(statearr_19159_20598[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (16))){
var inst_19068 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
if(cljs.core.truth_(inst_19068)){
var statearr_19160_20600 = state_19086__$1;
(statearr_19160_20600[(1)] = (20));

} else {
var statearr_19162_20601 = state_19086__$1;
(statearr_19162_20601[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (10))){
var inst_19082 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19166_20602 = state_19086__$1;
(statearr_19166_20602[(2)] = inst_19082);

(statearr_19166_20602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (18))){
var inst_19060 = (state_19086[(15)]);
var state_19086__$1 = state_19086;
var statearr_19167_20603 = state_19086__$1;
(statearr_19167_20603[(2)] = inst_19060);

(statearr_19167_20603[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (8))){
var inst_19035 = (state_19086[(7)]);
var inst_19044 = (inst_19035 == null);
var state_19086__$1 = state_19086;
if(cljs.core.truth_(inst_19044)){
var statearr_19168_20604 = state_19086__$1;
(statearr_19168_20604[(1)] = (11));

} else {
var statearr_19169_20605 = state_19086__$1;
(statearr_19169_20605[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__17406__auto__ = null;
var cljs$core$async$mix_$_state_machine__17406__auto____0 = (function (){
var statearr_19170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19170[(0)] = cljs$core$async$mix_$_state_machine__17406__auto__);

(statearr_19170[(1)] = (1));

return statearr_19170;
});
var cljs$core$async$mix_$_state_machine__17406__auto____1 = (function (state_19086){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_19086);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e19171){var ex__17409__auto__ = e19171;
var statearr_19172_20606 = state_19086;
(statearr_19172_20606[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_19086[(4)]))){
var statearr_19173_20607 = state_19086;
(statearr_19173_20607[(1)] = cljs.core.first((state_19086[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20608 = state_19086;
state_19086 = G__20608;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17406__auto__ = function(state_19086){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17406__auto____1.call(this,state_19086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17406__auto____0;
cljs$core$async$mix_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17406__auto____1;
return cljs$core$async$mix_$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_19174 = f__17926__auto__();
(statearr_19174[(6)] = c__17925__auto___20534);

return statearr_19174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_20615 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_20615(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20616 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_20616(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20633 = (function() {
var G__20635 = null;
var G__20635__1 = (function (p){
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
var G__20635__2 = (function (p,v){
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
G__20635 = function(p,v){
switch(arguments.length){
case 1:
return G__20635__1.call(this,p);
case 2:
return G__20635__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20635.cljs$core$IFn$_invoke$arity$1 = G__20635__1;
G__20635.cljs$core$IFn$_invoke$arity$2 = G__20635__2;
return G__20635;
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20633(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20633(p,v);
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
var c__17925__auto___20690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_19281){
var state_val_19282 = (state_19281[(1)]);
if((state_val_19282 === (7))){
var inst_19277 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19283_20695 = state_19281__$1;
(statearr_19283_20695[(2)] = inst_19277);

(statearr_19283_20695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (20))){
var state_19281__$1 = state_19281;
var statearr_19284_20701 = state_19281__$1;
(statearr_19284_20701[(2)] = null);

(statearr_19284_20701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (1))){
var state_19281__$1 = state_19281;
var statearr_19285_20709 = state_19281__$1;
(statearr_19285_20709[(2)] = null);

(statearr_19285_20709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (24))){
var inst_19260 = (state_19281[(7)]);
var inst_19269 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19260);
var state_19281__$1 = state_19281;
var statearr_19290_20710 = state_19281__$1;
(statearr_19290_20710[(2)] = inst_19269);

(statearr_19290_20710[(1)] = (25));


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
var statearr_19292_20719 = state_19281__$1;
(statearr_19292_20719[(1)] = (5));

} else {
var statearr_19293_20721 = state_19281__$1;
(statearr_19293_20721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (15))){
var inst_19254 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19294_20725 = state_19281__$1;
(statearr_19294_20725[(2)] = inst_19254);

(statearr_19294_20725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (21))){
var inst_19274 = (state_19281[(2)]);
var state_19281__$1 = (function (){var statearr_19296 = state_19281;
(statearr_19296[(9)] = inst_19274);

return statearr_19296;
})();
var statearr_19300_20727 = state_19281__$1;
(statearr_19300_20727[(2)] = null);

(statearr_19300_20727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (13))){
var inst_19236 = (state_19281[(10)]);
var inst_19238 = cljs.core.chunked_seq_QMARK_(inst_19236);
var state_19281__$1 = state_19281;
if(inst_19238){
var statearr_19301_20728 = state_19281__$1;
(statearr_19301_20728[(1)] = (16));

} else {
var statearr_19302_20733 = state_19281__$1;
(statearr_19302_20733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (22))){
var inst_19266 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
if(cljs.core.truth_(inst_19266)){
var statearr_19303_20734 = state_19281__$1;
(statearr_19303_20734[(1)] = (23));

} else {
var statearr_19304_20735 = state_19281__$1;
(statearr_19304_20735[(1)] = (24));

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
var statearr_19306_20740 = state_19281__$1;
(statearr_19306_20740[(1)] = (19));

} else {
var statearr_19307_20741 = state_19281__$1;
(statearr_19307_20741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (25))){
var inst_19271 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19308_20743 = state_19281__$1;
(statearr_19308_20743[(2)] = inst_19271);

(statearr_19308_20743[(1)] = (21));


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
var statearr_19310_20746 = state_19281__$1;
(statearr_19310_20746[(2)] = null);

(statearr_19310_20746[(1)] = (8));


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
var statearr_19311_20747 = state_19281__$1;
(statearr_19311_20747[(2)] = inst_19256);

(statearr_19311_20747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (2))){
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19281__$1,(4),ch);
} else {
if((state_val_19282 === (23))){
var state_19281__$1 = state_19281;
var statearr_19313_20750 = state_19281__$1;
(statearr_19313_20750[(2)] = null);

(statearr_19313_20750[(1)] = (25));


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
var statearr_19316_20753 = state_19281__$1;
(statearr_19316_20753[(1)] = (13));

} else {
var statearr_19317_20754 = state_19281__$1;
(statearr_19317_20754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (9))){
var inst_19258 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19318_20755 = state_19281__$1;
(statearr_19318_20755[(2)] = inst_19258);

(statearr_19318_20755[(1)] = (7));


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
var statearr_19323_20757 = state_19281__$1;
(statearr_19323_20757[(2)] = null);

(statearr_19323_20757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (14))){
var state_19281__$1 = state_19281;
var statearr_19327_20761 = state_19281__$1;
(statearr_19327_20761[(2)] = null);

(statearr_19327_20761[(1)] = (15));


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
var statearr_19329_20763 = state_19281__$1;
(statearr_19329_20763[(2)] = null);

(statearr_19329_20763[(1)] = (8));


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
var statearr_19331_20764 = state_19281__$1;
(statearr_19331_20764[(2)] = null);

(statearr_19331_20764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (18))){
var inst_19251 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19332_20770 = state_19281__$1;
(statearr_19332_20770[(2)] = inst_19251);

(statearr_19332_20770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (8))){
var inst_19224 = (state_19281[(13)]);
var inst_19225 = (state_19281[(16)]);
var inst_19227 = (inst_19225 < inst_19224);
var inst_19228 = inst_19227;
var state_19281__$1 = state_19281;
if(cljs.core.truth_(inst_19228)){
var statearr_19333_20772 = state_19281__$1;
(statearr_19333_20772[(1)] = (10));

} else {
var statearr_19334_20773 = state_19281__$1;
(statearr_19334_20773[(1)] = (11));

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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_19335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19335[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_19335[(1)] = (1));

return statearr_19335;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_19281){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_19281);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e19336){var ex__17409__auto__ = e19336;
var statearr_19337_20775 = state_19281;
(statearr_19337_20775[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_19281[(4)]))){
var statearr_19338_20777 = state_19281;
(statearr_19338_20777[(1)] = cljs.core.first((state_19281[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20778 = state_19281;
state_19281 = G__20778;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_19281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_19281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_19339 = f__17926__auto__();
(statearr_19339[(6)] = c__17925__auto___20690);

return statearr_19339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
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
var c__17925__auto___20788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_19389){
var state_val_19390 = (state_19389[(1)]);
if((state_val_19390 === (7))){
var state_19389__$1 = state_19389;
var statearr_19394_20790 = state_19389__$1;
(statearr_19394_20790[(2)] = null);

(statearr_19394_20790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (1))){
var state_19389__$1 = state_19389;
var statearr_19395_20791 = state_19389__$1;
(statearr_19395_20791[(2)] = null);

(statearr_19395_20791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (4))){
var inst_19350 = (state_19389[(7)]);
var inst_19349 = (state_19389[(8)]);
var inst_19352 = (inst_19350 < inst_19349);
var state_19389__$1 = state_19389;
if(cljs.core.truth_(inst_19352)){
var statearr_19396_20792 = state_19389__$1;
(statearr_19396_20792[(1)] = (6));

} else {
var statearr_19397_20793 = state_19389__$1;
(statearr_19397_20793[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (15))){
var inst_19375 = (state_19389[(9)]);
var inst_19380 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19375);
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19389__$1,(17),out,inst_19380);
} else {
if((state_val_19390 === (13))){
var inst_19375 = (state_19389[(9)]);
var inst_19375__$1 = (state_19389[(2)]);
var inst_19376 = cljs.core.some(cljs.core.nil_QMARK_,inst_19375__$1);
var state_19389__$1 = (function (){var statearr_19398 = state_19389;
(statearr_19398[(9)] = inst_19375__$1);

return statearr_19398;
})();
if(cljs.core.truth_(inst_19376)){
var statearr_19399_20796 = state_19389__$1;
(statearr_19399_20796[(1)] = (14));

} else {
var statearr_19401_20797 = state_19389__$1;
(statearr_19401_20797[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (6))){
var state_19389__$1 = state_19389;
var statearr_19405_20798 = state_19389__$1;
(statearr_19405_20798[(2)] = null);

(statearr_19405_20798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (17))){
var inst_19382 = (state_19389[(2)]);
var state_19389__$1 = (function (){var statearr_19407 = state_19389;
(statearr_19407[(10)] = inst_19382);

return statearr_19407;
})();
var statearr_19408_20799 = state_19389__$1;
(statearr_19408_20799[(2)] = null);

(statearr_19408_20799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (3))){
var inst_19387 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19389__$1,inst_19387);
} else {
if((state_val_19390 === (12))){
var _ = (function (){var statearr_19409 = state_19389;
(statearr_19409[(4)] = cljs.core.rest((state_19389[(4)])));

return statearr_19409;
})();
var state_19389__$1 = state_19389;
var ex19406 = (state_19389__$1[(2)]);
var statearr_19410_20800 = state_19389__$1;
(statearr_19410_20800[(5)] = ex19406);


if((ex19406 instanceof Object)){
var statearr_19411_20801 = state_19389__$1;
(statearr_19411_20801[(1)] = (11));

(statearr_19411_20801[(5)] = null);

} else {
throw ex19406;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (2))){
var inst_19348 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19349 = cnt;
var inst_19350 = (0);
var state_19389__$1 = (function (){var statearr_19412 = state_19389;
(statearr_19412[(11)] = inst_19348);

(statearr_19412[(7)] = inst_19350);

(statearr_19412[(8)] = inst_19349);

return statearr_19412;
})();
var statearr_19413_20802 = state_19389__$1;
(statearr_19413_20802[(2)] = null);

(statearr_19413_20802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (11))){
var inst_19354 = (state_19389[(2)]);
var inst_19355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19389__$1 = (function (){var statearr_19414 = state_19389;
(statearr_19414[(12)] = inst_19354);

return statearr_19414;
})();
var statearr_19415_20803 = state_19389__$1;
(statearr_19415_20803[(2)] = inst_19355);

(statearr_19415_20803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (9))){
var inst_19350 = (state_19389[(7)]);
var _ = (function (){var statearr_19416 = state_19389;
(statearr_19416[(4)] = cljs.core.cons((12),(state_19389[(4)])));

return statearr_19416;
})();
var inst_19361 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19350) : chs__$1.call(null,inst_19350));
var inst_19362 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19350) : done.call(null,inst_19350));
var inst_19363 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19361,inst_19362);
var ___$1 = (function (){var statearr_19417 = state_19389;
(statearr_19417[(4)] = cljs.core.rest((state_19389[(4)])));

return statearr_19417;
})();
var state_19389__$1 = state_19389;
var statearr_19418_20805 = state_19389__$1;
(statearr_19418_20805[(2)] = inst_19363);

(statearr_19418_20805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (5))){
var inst_19373 = (state_19389[(2)]);
var state_19389__$1 = (function (){var statearr_19419 = state_19389;
(statearr_19419[(13)] = inst_19373);

return statearr_19419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19389__$1,(13),dchan);
} else {
if((state_val_19390 === (14))){
var inst_19378 = cljs.core.async.close_BANG_(out);
var state_19389__$1 = state_19389;
var statearr_19434_20812 = state_19389__$1;
(statearr_19434_20812[(2)] = inst_19378);

(statearr_19434_20812[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (16))){
var inst_19385 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
var statearr_19435_20813 = state_19389__$1;
(statearr_19435_20813[(2)] = inst_19385);

(statearr_19435_20813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (10))){
var inst_19350 = (state_19389[(7)]);
var inst_19366 = (state_19389[(2)]);
var inst_19367 = (inst_19350 + (1));
var inst_19350__$1 = inst_19367;
var state_19389__$1 = (function (){var statearr_19442 = state_19389;
(statearr_19442[(7)] = inst_19350__$1);

(statearr_19442[(14)] = inst_19366);

return statearr_19442;
})();
var statearr_19443_20818 = state_19389__$1;
(statearr_19443_20818[(2)] = null);

(statearr_19443_20818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19390 === (8))){
var inst_19371 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
var statearr_19444_20827 = state_19389__$1;
(statearr_19444_20827[(2)] = inst_19371);

(statearr_19444_20827[(1)] = (5));


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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_19445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19445[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_19445[(1)] = (1));

return statearr_19445;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_19389){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_19389);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e19454){var ex__17409__auto__ = e19454;
var statearr_19455_20828 = state_19389;
(statearr_19455_20828[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_19389[(4)]))){
var statearr_19462_20829 = state_19389;
(statearr_19462_20829[(1)] = cljs.core.first((state_19389[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20835 = state_19389;
state_19389 = G__20835;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_19389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_19389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_19469 = f__17926__auto__();
(statearr_19469[(6)] = c__17925__auto___20788);

return statearr_19469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
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
var G__19474 = arguments.length;
switch (G__19474) {
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
var c__17925__auto___20851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_19507){
var state_val_19508 = (state_19507[(1)]);
if((state_val_19508 === (7))){
var inst_19486 = (state_19507[(7)]);
var inst_19487 = (state_19507[(8)]);
var inst_19486__$1 = (state_19507[(2)]);
var inst_19487__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19486__$1,(0),null);
var inst_19488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19486__$1,(1),null);
var inst_19489 = (inst_19487__$1 == null);
var state_19507__$1 = (function (){var statearr_19512 = state_19507;
(statearr_19512[(9)] = inst_19488);

(statearr_19512[(7)] = inst_19486__$1);

(statearr_19512[(8)] = inst_19487__$1);

return statearr_19512;
})();
if(cljs.core.truth_(inst_19489)){
var statearr_19513_20856 = state_19507__$1;
(statearr_19513_20856[(1)] = (8));

} else {
var statearr_19514_20857 = state_19507__$1;
(statearr_19514_20857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (1))){
var inst_19476 = cljs.core.vec(chs);
var inst_19477 = inst_19476;
var state_19507__$1 = (function (){var statearr_19515 = state_19507;
(statearr_19515[(10)] = inst_19477);

return statearr_19515;
})();
var statearr_19516_20858 = state_19507__$1;
(statearr_19516_20858[(2)] = null);

(statearr_19516_20858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (4))){
var inst_19477 = (state_19507[(10)]);
var state_19507__$1 = state_19507;
return cljs.core.async.ioc_alts_BANG_(state_19507__$1,(7),inst_19477);
} else {
if((state_val_19508 === (6))){
var inst_19503 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19517_20864 = state_19507__$1;
(statearr_19517_20864[(2)] = inst_19503);

(statearr_19517_20864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (3))){
var inst_19505 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19507__$1,inst_19505);
} else {
if((state_val_19508 === (2))){
var inst_19477 = (state_19507[(10)]);
var inst_19479 = cljs.core.count(inst_19477);
var inst_19480 = (inst_19479 > (0));
var state_19507__$1 = state_19507;
if(cljs.core.truth_(inst_19480)){
var statearr_19519_20865 = state_19507__$1;
(statearr_19519_20865[(1)] = (4));

} else {
var statearr_19520_20867 = state_19507__$1;
(statearr_19520_20867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (11))){
var inst_19477 = (state_19507[(10)]);
var inst_19496 = (state_19507[(2)]);
var tmp19518 = inst_19477;
var inst_19477__$1 = tmp19518;
var state_19507__$1 = (function (){var statearr_19521 = state_19507;
(statearr_19521[(11)] = inst_19496);

(statearr_19521[(10)] = inst_19477__$1);

return statearr_19521;
})();
var statearr_19522_20868 = state_19507__$1;
(statearr_19522_20868[(2)] = null);

(statearr_19522_20868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (9))){
var inst_19487 = (state_19507[(8)]);
var state_19507__$1 = state_19507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19507__$1,(11),out,inst_19487);
} else {
if((state_val_19508 === (5))){
var inst_19501 = cljs.core.async.close_BANG_(out);
var state_19507__$1 = state_19507;
var statearr_19523_20869 = state_19507__$1;
(statearr_19523_20869[(2)] = inst_19501);

(statearr_19523_20869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (10))){
var inst_19499 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19524_20870 = state_19507__$1;
(statearr_19524_20870[(2)] = inst_19499);

(statearr_19524_20870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (8))){
var inst_19477 = (state_19507[(10)]);
var inst_19488 = (state_19507[(9)]);
var inst_19486 = (state_19507[(7)]);
var inst_19487 = (state_19507[(8)]);
var inst_19491 = (function (){var cs = inst_19477;
var vec__19482 = inst_19486;
var v = inst_19487;
var c = inst_19488;
return (function (p1__19470_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19470_SHARP_);
});
})();
var inst_19492 = cljs.core.filterv(inst_19491,inst_19477);
var inst_19477__$1 = inst_19492;
var state_19507__$1 = (function (){var statearr_19525 = state_19507;
(statearr_19525[(10)] = inst_19477__$1);

return statearr_19525;
})();
var statearr_19526_20872 = state_19507__$1;
(statearr_19526_20872[(2)] = null);

(statearr_19526_20872[(1)] = (2));


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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_19527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19527[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_19527[(1)] = (1));

return statearr_19527;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_19507){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_19507);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e19528){var ex__17409__auto__ = e19528;
var statearr_19529_20877 = state_19507;
(statearr_19529_20877[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_19507[(4)]))){
var statearr_19530_20878 = state_19507;
(statearr_19530_20878[(1)] = cljs.core.first((state_19507[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20879 = state_19507;
state_19507 = G__20879;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_19507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_19507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_19531 = f__17926__auto__();
(statearr_19531[(6)] = c__17925__auto___20851);

return statearr_19531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
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
var c__17925__auto___20898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_19557){
var state_val_19558 = (state_19557[(1)]);
if((state_val_19558 === (7))){
var inst_19539 = (state_19557[(7)]);
var inst_19539__$1 = (state_19557[(2)]);
var inst_19540 = (inst_19539__$1 == null);
var inst_19541 = cljs.core.not(inst_19540);
var state_19557__$1 = (function (){var statearr_19567 = state_19557;
(statearr_19567[(7)] = inst_19539__$1);

return statearr_19567;
})();
if(inst_19541){
var statearr_19568_20904 = state_19557__$1;
(statearr_19568_20904[(1)] = (8));

} else {
var statearr_19569_20905 = state_19557__$1;
(statearr_19569_20905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (1))){
var inst_19534 = (0);
var state_19557__$1 = (function (){var statearr_19573 = state_19557;
(statearr_19573[(8)] = inst_19534);

return statearr_19573;
})();
var statearr_19574_20906 = state_19557__$1;
(statearr_19574_20906[(2)] = null);

(statearr_19574_20906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (4))){
var state_19557__$1 = state_19557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19557__$1,(7),ch);
} else {
if((state_val_19558 === (6))){
var inst_19552 = (state_19557[(2)]);
var state_19557__$1 = state_19557;
var statearr_19575_20907 = state_19557__$1;
(statearr_19575_20907[(2)] = inst_19552);

(statearr_19575_20907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (3))){
var inst_19554 = (state_19557[(2)]);
var inst_19555 = cljs.core.async.close_BANG_(out);
var state_19557__$1 = (function (){var statearr_19576 = state_19557;
(statearr_19576[(9)] = inst_19554);

return statearr_19576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19557__$1,inst_19555);
} else {
if((state_val_19558 === (2))){
var inst_19534 = (state_19557[(8)]);
var inst_19536 = (inst_19534 < n);
var state_19557__$1 = state_19557;
if(cljs.core.truth_(inst_19536)){
var statearr_19577_20918 = state_19557__$1;
(statearr_19577_20918[(1)] = (4));

} else {
var statearr_19578_20919 = state_19557__$1;
(statearr_19578_20919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (11))){
var inst_19534 = (state_19557[(8)]);
var inst_19544 = (state_19557[(2)]);
var inst_19545 = (inst_19534 + (1));
var inst_19534__$1 = inst_19545;
var state_19557__$1 = (function (){var statearr_19579 = state_19557;
(statearr_19579[(8)] = inst_19534__$1);

(statearr_19579[(10)] = inst_19544);

return statearr_19579;
})();
var statearr_19580_20925 = state_19557__$1;
(statearr_19580_20925[(2)] = null);

(statearr_19580_20925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (9))){
var state_19557__$1 = state_19557;
var statearr_19581_20932 = state_19557__$1;
(statearr_19581_20932[(2)] = null);

(statearr_19581_20932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (5))){
var state_19557__$1 = state_19557;
var statearr_19582_20940 = state_19557__$1;
(statearr_19582_20940[(2)] = null);

(statearr_19582_20940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (10))){
var inst_19549 = (state_19557[(2)]);
var state_19557__$1 = state_19557;
var statearr_19583_20945 = state_19557__$1;
(statearr_19583_20945[(2)] = inst_19549);

(statearr_19583_20945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19558 === (8))){
var inst_19539 = (state_19557[(7)]);
var state_19557__$1 = state_19557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19557__$1,(11),out,inst_19539);
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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_19584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19584[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_19584[(1)] = (1));

return statearr_19584;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_19557){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_19557);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e19585){var ex__17409__auto__ = e19585;
var statearr_19586_20963 = state_19557;
(statearr_19586_20963[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_19557[(4)]))){
var statearr_19587_20966 = state_19557;
(statearr_19587_20966[(1)] = cljs.core.first((state_19557[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20971 = state_19557;
state_19557 = G__20971;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_19557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_19557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_19588 = f__17926__auto__();
(statearr_19588[(6)] = c__17925__auto___20898);

return statearr_19588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19590 = (function (f,ch,meta19591){
this.f = f;
this.ch = ch;
this.meta19591 = meta19591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19592,meta19591__$1){
var self__ = this;
var _19592__$1 = this;
return (new cljs.core.async.t_cljs$core$async19590(self__.f,self__.ch,meta19591__$1));
}));

(cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19592){
var self__ = this;
var _19592__$1 = this;
return self__.meta19591;
}));

(cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19597 = (function (f,ch,meta19591,_,fn1,meta19598){
this.f = f;
this.ch = ch;
this.meta19591 = meta19591;
this._ = _;
this.fn1 = fn1;
this.meta19598 = meta19598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19599,meta19598__$1){
var self__ = this;
var _19599__$1 = this;
return (new cljs.core.async.t_cljs$core$async19597(self__.f,self__.ch,self__.meta19591,self__._,self__.fn1,meta19598__$1));
}));

(cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19599){
var self__ = this;
var _19599__$1 = this;
return self__.meta19598;
}));

(cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19589_SHARP_){
var G__19604 = (((p1__19589_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19589_SHARP_) : self__.f.call(null,p1__19589_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19604) : f1.call(null,G__19604));
});
}));

(cljs.core.async.t_cljs$core$async19597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19591","meta19591",1580726994,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19590","cljs.core.async/t_cljs$core$async19590",-750217372,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19598","meta19598",-838312967,null)], null);
}));

(cljs.core.async.t_cljs$core$async19597.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19597");

(cljs.core.async.t_cljs$core$async19597.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19597");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19597.
 */
cljs.core.async.__GT_t_cljs$core$async19597 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19597(f__$1,ch__$1,meta19591__$1,___$2,fn1__$1,meta19598){
return (new cljs.core.async.t_cljs$core$async19597(f__$1,ch__$1,meta19591__$1,___$2,fn1__$1,meta19598));
});

}

return (new cljs.core.async.t_cljs$core$async19597(self__.f,self__.ch,self__.meta19591,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19591","meta19591",1580726994,null)], null);
}));

(cljs.core.async.t_cljs$core$async19590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19590");

(cljs.core.async.t_cljs$core$async19590.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19590.
 */
cljs.core.async.__GT_t_cljs$core$async19590 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19590(f__$1,ch__$1,meta19591){
return (new cljs.core.async.t_cljs$core$async19590(f__$1,ch__$1,meta19591));
});

}

return (new cljs.core.async.t_cljs$core$async19590(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19606 = (function (f,ch,meta19607){
this.f = f;
this.ch = ch;
this.meta19607 = meta19607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19608,meta19607__$1){
var self__ = this;
var _19608__$1 = this;
return (new cljs.core.async.t_cljs$core$async19606(self__.f,self__.ch,meta19607__$1));
}));

(cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19608){
var self__ = this;
var _19608__$1 = this;
return self__.meta19607;
}));

(cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19607","meta19607",1032811651,null)], null);
}));

(cljs.core.async.t_cljs$core$async19606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19606");

(cljs.core.async.t_cljs$core$async19606.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19606.
 */
cljs.core.async.__GT_t_cljs$core$async19606 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19606(f__$1,ch__$1,meta19607){
return (new cljs.core.async.t_cljs$core$async19606(f__$1,ch__$1,meta19607));
});

}

return (new cljs.core.async.t_cljs$core$async19606(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19625 = (function (p,ch,meta19626){
this.p = p;
this.ch = ch;
this.meta19626 = meta19626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19627,meta19626__$1){
var self__ = this;
var _19627__$1 = this;
return (new cljs.core.async.t_cljs$core$async19625(self__.p,self__.ch,meta19626__$1));
}));

(cljs.core.async.t_cljs$core$async19625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19627){
var self__ = this;
var _19627__$1 = this;
return self__.meta19626;
}));

(cljs.core.async.t_cljs$core$async19625.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19625.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19625.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19625.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19626","meta19626",-850891554,null)], null);
}));

(cljs.core.async.t_cljs$core$async19625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19625");

(cljs.core.async.t_cljs$core$async19625.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19625.
 */
cljs.core.async.__GT_t_cljs$core$async19625 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19625(p__$1,ch__$1,meta19626){
return (new cljs.core.async.t_cljs$core$async19625(p__$1,ch__$1,meta19626));
});

}

return (new cljs.core.async.t_cljs$core$async19625(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19656 = arguments.length;
switch (G__19656) {
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
var c__17925__auto___21001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_19679){
var state_val_19680 = (state_19679[(1)]);
if((state_val_19680 === (7))){
var inst_19675 = (state_19679[(2)]);
var state_19679__$1 = state_19679;
var statearr_19681_21002 = state_19679__$1;
(statearr_19681_21002[(2)] = inst_19675);

(statearr_19681_21002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (1))){
var state_19679__$1 = state_19679;
var statearr_19682_21003 = state_19679__$1;
(statearr_19682_21003[(2)] = null);

(statearr_19682_21003[(1)] = (2));


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
var statearr_19684_21005 = state_19679__$1;
(statearr_19684_21005[(1)] = (5));

} else {
var statearr_19685_21006 = state_19679__$1;
(statearr_19685_21006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (6))){
var inst_19661 = (state_19679[(7)]);
var inst_19666 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19661) : p.call(null,inst_19661));
var state_19679__$1 = state_19679;
if(cljs.core.truth_(inst_19666)){
var statearr_19686_21011 = state_19679__$1;
(statearr_19686_21011[(1)] = (8));

} else {
var statearr_19687_21012 = state_19679__$1;
(statearr_19687_21012[(1)] = (9));

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
var statearr_19688_21014 = state_19679__$1;
(statearr_19688_21014[(2)] = inst_19669);

(statearr_19688_21014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (9))){
var state_19679__$1 = state_19679;
var statearr_19689_21015 = state_19679__$1;
(statearr_19689_21015[(2)] = null);

(statearr_19689_21015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (5))){
var inst_19664 = cljs.core.async.close_BANG_(out);
var state_19679__$1 = state_19679;
var statearr_19690_21016 = state_19679__$1;
(statearr_19690_21016[(2)] = inst_19664);

(statearr_19690_21016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (10))){
var inst_19672 = (state_19679[(2)]);
var state_19679__$1 = (function (){var statearr_19691 = state_19679;
(statearr_19691[(8)] = inst_19672);

return statearr_19691;
})();
var statearr_19692_21021 = state_19679__$1;
(statearr_19692_21021[(2)] = null);

(statearr_19692_21021[(1)] = (2));


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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_19693 = [null,null,null,null,null,null,null,null,null];
(statearr_19693[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_19693[(1)] = (1));

return statearr_19693;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_19679){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_19679);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e19694){var ex__17409__auto__ = e19694;
var statearr_19695_21027 = state_19679;
(statearr_19695_21027[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_19679[(4)]))){
var statearr_19696_21028 = state_19679;
(statearr_19696_21028[(1)] = cljs.core.first((state_19679[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21029 = state_19679;
state_19679 = G__21029;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_19679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_19679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_19697 = f__17926__auto__();
(statearr_19697[(6)] = c__17925__auto___21001);

return statearr_19697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19699 = arguments.length;
switch (G__19699) {
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
var c__17925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_19774){
var state_val_19775 = (state_19774[(1)]);
if((state_val_19775 === (7))){
var inst_19770 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
var statearr_19777_21036 = state_19774__$1;
(statearr_19777_21036[(2)] = inst_19770);

(statearr_19777_21036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (20))){
var inst_19740 = (state_19774[(7)]);
var inst_19751 = (state_19774[(2)]);
var inst_19752 = cljs.core.next(inst_19740);
var inst_19715 = inst_19752;
var inst_19716 = null;
var inst_19717 = (0);
var inst_19718 = (0);
var state_19774__$1 = (function (){var statearr_19779 = state_19774;
(statearr_19779[(8)] = inst_19718);

(statearr_19779[(9)] = inst_19715);

(statearr_19779[(10)] = inst_19717);

(statearr_19779[(11)] = inst_19716);

(statearr_19779[(12)] = inst_19751);

return statearr_19779;
})();
var statearr_19780_21037 = state_19774__$1;
(statearr_19780_21037[(2)] = null);

(statearr_19780_21037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (1))){
var state_19774__$1 = state_19774;
var statearr_19781_21038 = state_19774__$1;
(statearr_19781_21038[(2)] = null);

(statearr_19781_21038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (4))){
var inst_19704 = (state_19774[(13)]);
var inst_19704__$1 = (state_19774[(2)]);
var inst_19705 = (inst_19704__$1 == null);
var state_19774__$1 = (function (){var statearr_19782 = state_19774;
(statearr_19782[(13)] = inst_19704__$1);

return statearr_19782;
})();
if(cljs.core.truth_(inst_19705)){
var statearr_19783_21039 = state_19774__$1;
(statearr_19783_21039[(1)] = (5));

} else {
var statearr_19784_21040 = state_19774__$1;
(statearr_19784_21040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (15))){
var state_19774__$1 = state_19774;
var statearr_19788_21041 = state_19774__$1;
(statearr_19788_21041[(2)] = null);

(statearr_19788_21041[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (21))){
var state_19774__$1 = state_19774;
var statearr_19789_21042 = state_19774__$1;
(statearr_19789_21042[(2)] = null);

(statearr_19789_21042[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (13))){
var inst_19718 = (state_19774[(8)]);
var inst_19715 = (state_19774[(9)]);
var inst_19717 = (state_19774[(10)]);
var inst_19716 = (state_19774[(11)]);
var inst_19726 = (state_19774[(2)]);
var inst_19727 = (inst_19718 + (1));
var tmp19785 = inst_19715;
var tmp19786 = inst_19717;
var tmp19787 = inst_19716;
var inst_19715__$1 = tmp19785;
var inst_19716__$1 = tmp19787;
var inst_19717__$1 = tmp19786;
var inst_19718__$1 = inst_19727;
var state_19774__$1 = (function (){var statearr_19790 = state_19774;
(statearr_19790[(8)] = inst_19718__$1);

(statearr_19790[(9)] = inst_19715__$1);

(statearr_19790[(14)] = inst_19726);

(statearr_19790[(10)] = inst_19717__$1);

(statearr_19790[(11)] = inst_19716__$1);

return statearr_19790;
})();
var statearr_19791_21043 = state_19774__$1;
(statearr_19791_21043[(2)] = null);

(statearr_19791_21043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (22))){
var state_19774__$1 = state_19774;
var statearr_19792_21044 = state_19774__$1;
(statearr_19792_21044[(2)] = null);

(statearr_19792_21044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (6))){
var inst_19704 = (state_19774[(13)]);
var inst_19713 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19704) : f.call(null,inst_19704));
var inst_19714 = cljs.core.seq(inst_19713);
var inst_19715 = inst_19714;
var inst_19716 = null;
var inst_19717 = (0);
var inst_19718 = (0);
var state_19774__$1 = (function (){var statearr_19793 = state_19774;
(statearr_19793[(8)] = inst_19718);

(statearr_19793[(9)] = inst_19715);

(statearr_19793[(10)] = inst_19717);

(statearr_19793[(11)] = inst_19716);

return statearr_19793;
})();
var statearr_19794_21045 = state_19774__$1;
(statearr_19794_21045[(2)] = null);

(statearr_19794_21045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (17))){
var inst_19740 = (state_19774[(7)]);
var inst_19744 = cljs.core.chunk_first(inst_19740);
var inst_19745 = cljs.core.chunk_rest(inst_19740);
var inst_19746 = cljs.core.count(inst_19744);
var inst_19715 = inst_19745;
var inst_19716 = inst_19744;
var inst_19717 = inst_19746;
var inst_19718 = (0);
var state_19774__$1 = (function (){var statearr_19795 = state_19774;
(statearr_19795[(8)] = inst_19718);

(statearr_19795[(9)] = inst_19715);

(statearr_19795[(10)] = inst_19717);

(statearr_19795[(11)] = inst_19716);

return statearr_19795;
})();
var statearr_19796_21050 = state_19774__$1;
(statearr_19796_21050[(2)] = null);

(statearr_19796_21050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (3))){
var inst_19772 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19774__$1,inst_19772);
} else {
if((state_val_19775 === (12))){
var inst_19760 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
var statearr_19799_21051 = state_19774__$1;
(statearr_19799_21051[(2)] = inst_19760);

(statearr_19799_21051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (2))){
var state_19774__$1 = state_19774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19774__$1,(4),in$);
} else {
if((state_val_19775 === (23))){
var inst_19768 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
var statearr_19800_21056 = state_19774__$1;
(statearr_19800_21056[(2)] = inst_19768);

(statearr_19800_21056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (19))){
var inst_19755 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
var statearr_19802_21057 = state_19774__$1;
(statearr_19802_21057[(2)] = inst_19755);

(statearr_19802_21057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (11))){
var inst_19715 = (state_19774[(9)]);
var inst_19740 = (state_19774[(7)]);
var inst_19740__$1 = cljs.core.seq(inst_19715);
var state_19774__$1 = (function (){var statearr_19803 = state_19774;
(statearr_19803[(7)] = inst_19740__$1);

return statearr_19803;
})();
if(inst_19740__$1){
var statearr_19804_21058 = state_19774__$1;
(statearr_19804_21058[(1)] = (14));

} else {
var statearr_19805_21059 = state_19774__$1;
(statearr_19805_21059[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (9))){
var inst_19762 = (state_19774[(2)]);
var inst_19763 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19774__$1 = (function (){var statearr_19806 = state_19774;
(statearr_19806[(15)] = inst_19762);

return statearr_19806;
})();
if(cljs.core.truth_(inst_19763)){
var statearr_19807_21063 = state_19774__$1;
(statearr_19807_21063[(1)] = (21));

} else {
var statearr_19808_21064 = state_19774__$1;
(statearr_19808_21064[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (5))){
var inst_19707 = cljs.core.async.close_BANG_(out);
var state_19774__$1 = state_19774;
var statearr_19809_21065 = state_19774__$1;
(statearr_19809_21065[(2)] = inst_19707);

(statearr_19809_21065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (14))){
var inst_19740 = (state_19774[(7)]);
var inst_19742 = cljs.core.chunked_seq_QMARK_(inst_19740);
var state_19774__$1 = state_19774;
if(inst_19742){
var statearr_19819_21067 = state_19774__$1;
(statearr_19819_21067[(1)] = (17));

} else {
var statearr_19820_21068 = state_19774__$1;
(statearr_19820_21068[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (16))){
var inst_19758 = (state_19774[(2)]);
var state_19774__$1 = state_19774;
var statearr_19821_21069 = state_19774__$1;
(statearr_19821_21069[(2)] = inst_19758);

(statearr_19821_21069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19775 === (10))){
var inst_19718 = (state_19774[(8)]);
var inst_19716 = (state_19774[(11)]);
var inst_19723 = cljs.core._nth(inst_19716,inst_19718);
var state_19774__$1 = state_19774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19774__$1,(13),out,inst_19723);
} else {
if((state_val_19775 === (18))){
var inst_19740 = (state_19774[(7)]);
var inst_19749 = cljs.core.first(inst_19740);
var state_19774__$1 = state_19774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19774__$1,(20),out,inst_19749);
} else {
if((state_val_19775 === (8))){
var inst_19718 = (state_19774[(8)]);
var inst_19717 = (state_19774[(10)]);
var inst_19720 = (inst_19718 < inst_19717);
var inst_19721 = inst_19720;
var state_19774__$1 = state_19774;
if(cljs.core.truth_(inst_19721)){
var statearr_19823_21073 = state_19774__$1;
(statearr_19823_21073[(1)] = (10));

} else {
var statearr_19824_21074 = state_19774__$1;
(statearr_19824_21074[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__17406__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17406__auto____0 = (function (){
var statearr_19825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19825[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17406__auto__);

(statearr_19825[(1)] = (1));

return statearr_19825;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17406__auto____1 = (function (state_19774){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_19774);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e19826){var ex__17409__auto__ = e19826;
var statearr_19827_21075 = state_19774;
(statearr_19827_21075[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_19774[(4)]))){
var statearr_19828_21077 = state_19774;
(statearr_19828_21077[(1)] = cljs.core.first((state_19774[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21079 = state_19774;
state_19774 = G__21079;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17406__auto__ = function(state_19774){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17406__auto____1.call(this,state_19774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17406__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17406__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_19829 = f__17926__auto__();
(statearr_19829[(6)] = c__17925__auto__);

return statearr_19829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));

return c__17925__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19831 = arguments.length;
switch (G__19831) {
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
var G__19835 = arguments.length;
switch (G__19835) {
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
var G__19839 = arguments.length;
switch (G__19839) {
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
var c__17925__auto___21089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_19870){
var state_val_19871 = (state_19870[(1)]);
if((state_val_19871 === (7))){
var inst_19865 = (state_19870[(2)]);
var state_19870__$1 = state_19870;
var statearr_19873_21090 = state_19870__$1;
(statearr_19873_21090[(2)] = inst_19865);

(statearr_19873_21090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19871 === (1))){
var inst_19840 = null;
var state_19870__$1 = (function (){var statearr_19874 = state_19870;
(statearr_19874[(7)] = inst_19840);

return statearr_19874;
})();
var statearr_19884_21091 = state_19870__$1;
(statearr_19884_21091[(2)] = null);

(statearr_19884_21091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19871 === (4))){
var inst_19843 = (state_19870[(8)]);
var inst_19843__$1 = (state_19870[(2)]);
var inst_19851 = (inst_19843__$1 == null);
var inst_19852 = cljs.core.not(inst_19851);
var state_19870__$1 = (function (){var statearr_19885 = state_19870;
(statearr_19885[(8)] = inst_19843__$1);

return statearr_19885;
})();
if(inst_19852){
var statearr_19886_21092 = state_19870__$1;
(statearr_19886_21092[(1)] = (5));

} else {
var statearr_19887_21093 = state_19870__$1;
(statearr_19887_21093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19871 === (6))){
var state_19870__$1 = state_19870;
var statearr_19892_21094 = state_19870__$1;
(statearr_19892_21094[(2)] = null);

(statearr_19892_21094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19871 === (3))){
var inst_19867 = (state_19870[(2)]);
var inst_19868 = cljs.core.async.close_BANG_(out);
var state_19870__$1 = (function (){var statearr_19893 = state_19870;
(statearr_19893[(9)] = inst_19867);

return statearr_19893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19870__$1,inst_19868);
} else {
if((state_val_19871 === (2))){
var state_19870__$1 = state_19870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19870__$1,(4),ch);
} else {
if((state_val_19871 === (11))){
var inst_19843 = (state_19870[(8)]);
var inst_19859 = (state_19870[(2)]);
var inst_19840 = inst_19843;
var state_19870__$1 = (function (){var statearr_19901 = state_19870;
(statearr_19901[(10)] = inst_19859);

(statearr_19901[(7)] = inst_19840);

return statearr_19901;
})();
var statearr_19902_21095 = state_19870__$1;
(statearr_19902_21095[(2)] = null);

(statearr_19902_21095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19871 === (9))){
var inst_19843 = (state_19870[(8)]);
var state_19870__$1 = state_19870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19870__$1,(11),out,inst_19843);
} else {
if((state_val_19871 === (5))){
var inst_19843 = (state_19870[(8)]);
var inst_19840 = (state_19870[(7)]);
var inst_19854 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19843,inst_19840);
var state_19870__$1 = state_19870;
if(inst_19854){
var statearr_19905_21096 = state_19870__$1;
(statearr_19905_21096[(1)] = (8));

} else {
var statearr_19906_21097 = state_19870__$1;
(statearr_19906_21097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19871 === (10))){
var inst_19862 = (state_19870[(2)]);
var state_19870__$1 = state_19870;
var statearr_19907_21099 = state_19870__$1;
(statearr_19907_21099[(2)] = inst_19862);

(statearr_19907_21099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19871 === (8))){
var inst_19840 = (state_19870[(7)]);
var tmp19904 = inst_19840;
var inst_19840__$1 = tmp19904;
var state_19870__$1 = (function (){var statearr_19908 = state_19870;
(statearr_19908[(7)] = inst_19840__$1);

return statearr_19908;
})();
var statearr_19909_21100 = state_19870__$1;
(statearr_19909_21100[(2)] = null);

(statearr_19909_21100[(1)] = (2));


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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_19912 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19912[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_19912[(1)] = (1));

return statearr_19912;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_19870){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_19870);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e19916){var ex__17409__auto__ = e19916;
var statearr_19919_21101 = state_19870;
(statearr_19919_21101[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_19870[(4)]))){
var statearr_19920_21102 = state_19870;
(statearr_19920_21102[(1)] = cljs.core.first((state_19870[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21103 = state_19870;
state_19870 = G__21103;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_19870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_19870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_19921 = f__17926__auto__();
(statearr_19921[(6)] = c__17925__auto___21089);

return statearr_19921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19925 = arguments.length;
switch (G__19925) {
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
var c__17925__auto___21106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_19967){
var state_val_19968 = (state_19967[(1)]);
if((state_val_19968 === (7))){
var inst_19962 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19976_21107 = state_19967__$1;
(statearr_19976_21107[(2)] = inst_19962);

(statearr_19976_21107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (1))){
var inst_19929 = (new Array(n));
var inst_19930 = inst_19929;
var inst_19931 = (0);
var state_19967__$1 = (function (){var statearr_19977 = state_19967;
(statearr_19977[(7)] = inst_19930);

(statearr_19977[(8)] = inst_19931);

return statearr_19977;
})();
var statearr_19978_21108 = state_19967__$1;
(statearr_19978_21108[(2)] = null);

(statearr_19978_21108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (4))){
var inst_19934 = (state_19967[(9)]);
var inst_19934__$1 = (state_19967[(2)]);
var inst_19935 = (inst_19934__$1 == null);
var inst_19936 = cljs.core.not(inst_19935);
var state_19967__$1 = (function (){var statearr_19980 = state_19967;
(statearr_19980[(9)] = inst_19934__$1);

return statearr_19980;
})();
if(inst_19936){
var statearr_19981_21110 = state_19967__$1;
(statearr_19981_21110[(1)] = (5));

} else {
var statearr_19982_21111 = state_19967__$1;
(statearr_19982_21111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (15))){
var inst_19956 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19983_21112 = state_19967__$1;
(statearr_19983_21112[(2)] = inst_19956);

(statearr_19983_21112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (13))){
var state_19967__$1 = state_19967;
var statearr_19984_21113 = state_19967__$1;
(statearr_19984_21113[(2)] = null);

(statearr_19984_21113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (6))){
var inst_19931 = (state_19967[(8)]);
var inst_19952 = (inst_19931 > (0));
var state_19967__$1 = state_19967;
if(cljs.core.truth_(inst_19952)){
var statearr_19985_21114 = state_19967__$1;
(statearr_19985_21114[(1)] = (12));

} else {
var statearr_19988_21118 = state_19967__$1;
(statearr_19988_21118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (3))){
var inst_19964 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19967__$1,inst_19964);
} else {
if((state_val_19968 === (12))){
var inst_19930 = (state_19967[(7)]);
var inst_19954 = cljs.core.vec(inst_19930);
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19967__$1,(15),out,inst_19954);
} else {
if((state_val_19968 === (2))){
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19967__$1,(4),ch);
} else {
if((state_val_19968 === (11))){
var inst_19946 = (state_19967[(2)]);
var inst_19947 = (new Array(n));
var inst_19930 = inst_19947;
var inst_19931 = (0);
var state_19967__$1 = (function (){var statearr_19991 = state_19967;
(statearr_19991[(10)] = inst_19946);

(statearr_19991[(7)] = inst_19930);

(statearr_19991[(8)] = inst_19931);

return statearr_19991;
})();
var statearr_19992_21119 = state_19967__$1;
(statearr_19992_21119[(2)] = null);

(statearr_19992_21119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (9))){
var inst_19930 = (state_19967[(7)]);
var inst_19944 = cljs.core.vec(inst_19930);
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19967__$1,(11),out,inst_19944);
} else {
if((state_val_19968 === (5))){
var inst_19930 = (state_19967[(7)]);
var inst_19931 = (state_19967[(8)]);
var inst_19934 = (state_19967[(9)]);
var inst_19939 = (state_19967[(11)]);
var inst_19938 = (inst_19930[inst_19931] = inst_19934);
var inst_19939__$1 = (inst_19931 + (1));
var inst_19940 = (inst_19939__$1 < n);
var state_19967__$1 = (function (){var statearr_19994 = state_19967;
(statearr_19994[(12)] = inst_19938);

(statearr_19994[(11)] = inst_19939__$1);

return statearr_19994;
})();
if(cljs.core.truth_(inst_19940)){
var statearr_19995_21120 = state_19967__$1;
(statearr_19995_21120[(1)] = (8));

} else {
var statearr_19996_21121 = state_19967__$1;
(statearr_19996_21121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (14))){
var inst_19959 = (state_19967[(2)]);
var inst_19960 = cljs.core.async.close_BANG_(out);
var state_19967__$1 = (function (){var statearr_19999 = state_19967;
(statearr_19999[(13)] = inst_19959);

return statearr_19999;
})();
var statearr_20000_21122 = state_19967__$1;
(statearr_20000_21122[(2)] = inst_19960);

(statearr_20000_21122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (10))){
var inst_19950 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_20001_21123 = state_19967__$1;
(statearr_20001_21123[(2)] = inst_19950);

(statearr_20001_21123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (8))){
var inst_19930 = (state_19967[(7)]);
var inst_19939 = (state_19967[(11)]);
var tmp19998 = inst_19930;
var inst_19930__$1 = tmp19998;
var inst_19931 = inst_19939;
var state_19967__$1 = (function (){var statearr_20002 = state_19967;
(statearr_20002[(7)] = inst_19930__$1);

(statearr_20002[(8)] = inst_19931);

return statearr_20002;
})();
var statearr_20003_21124 = state_19967__$1;
(statearr_20003_21124[(2)] = null);

(statearr_20003_21124[(1)] = (2));


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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_20004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20004[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_20004[(1)] = (1));

return statearr_20004;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_19967){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_19967);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e20005){var ex__17409__auto__ = e20005;
var statearr_20006_21130 = state_19967;
(statearr_20006_21130[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_19967[(4)]))){
var statearr_20007_21132 = state_19967;
(statearr_20007_21132[(1)] = cljs.core.first((state_19967[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21133 = state_19967;
state_19967 = G__21133;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_19967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_19967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_20008 = f__17926__auto__();
(statearr_20008[(6)] = c__17925__auto___21106);

return statearr_20008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20014 = arguments.length;
switch (G__20014) {
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
var c__17925__auto___21137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_20070){
var state_val_20071 = (state_20070[(1)]);
if((state_val_20071 === (7))){
var inst_20065 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20075_21142 = state_20070__$1;
(statearr_20075_21142[(2)] = inst_20065);

(statearr_20075_21142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (1))){
var inst_20022 = [];
var inst_20023 = inst_20022;
var inst_20024 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20070__$1 = (function (){var statearr_20076 = state_20070;
(statearr_20076[(7)] = inst_20023);

(statearr_20076[(8)] = inst_20024);

return statearr_20076;
})();
var statearr_20077_21143 = state_20070__$1;
(statearr_20077_21143[(2)] = null);

(statearr_20077_21143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (4))){
var inst_20027 = (state_20070[(9)]);
var inst_20027__$1 = (state_20070[(2)]);
var inst_20028 = (inst_20027__$1 == null);
var inst_20029 = cljs.core.not(inst_20028);
var state_20070__$1 = (function (){var statearr_20084 = state_20070;
(statearr_20084[(9)] = inst_20027__$1);

return statearr_20084;
})();
if(inst_20029){
var statearr_20085_21144 = state_20070__$1;
(statearr_20085_21144[(1)] = (5));

} else {
var statearr_20086_21145 = state_20070__$1;
(statearr_20086_21145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (15))){
var inst_20023 = (state_20070[(7)]);
var inst_20057 = cljs.core.vec(inst_20023);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20070__$1,(18),out,inst_20057);
} else {
if((state_val_20071 === (13))){
var inst_20052 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20093_21150 = state_20070__$1;
(statearr_20093_21150[(2)] = inst_20052);

(statearr_20093_21150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (6))){
var inst_20023 = (state_20070[(7)]);
var inst_20054 = inst_20023.length;
var inst_20055 = (inst_20054 > (0));
var state_20070__$1 = state_20070;
if(cljs.core.truth_(inst_20055)){
var statearr_20094_21152 = state_20070__$1;
(statearr_20094_21152[(1)] = (15));

} else {
var statearr_20095_21153 = state_20070__$1;
(statearr_20095_21153[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (17))){
var inst_20062 = (state_20070[(2)]);
var inst_20063 = cljs.core.async.close_BANG_(out);
var state_20070__$1 = (function (){var statearr_20096 = state_20070;
(statearr_20096[(10)] = inst_20062);

return statearr_20096;
})();
var statearr_20097_21154 = state_20070__$1;
(statearr_20097_21154[(2)] = inst_20063);

(statearr_20097_21154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (3))){
var inst_20067 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20070__$1,inst_20067);
} else {
if((state_val_20071 === (12))){
var inst_20023 = (state_20070[(7)]);
var inst_20045 = cljs.core.vec(inst_20023);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20070__$1,(14),out,inst_20045);
} else {
if((state_val_20071 === (2))){
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20070__$1,(4),ch);
} else {
if((state_val_20071 === (11))){
var inst_20031 = (state_20070[(11)]);
var inst_20023 = (state_20070[(7)]);
var inst_20027 = (state_20070[(9)]);
var inst_20042 = inst_20023.push(inst_20027);
var tmp20099 = inst_20023;
var inst_20023__$1 = tmp20099;
var inst_20024 = inst_20031;
var state_20070__$1 = (function (){var statearr_20101 = state_20070;
(statearr_20101[(12)] = inst_20042);

(statearr_20101[(7)] = inst_20023__$1);

(statearr_20101[(8)] = inst_20024);

return statearr_20101;
})();
var statearr_20102_21162 = state_20070__$1;
(statearr_20102_21162[(2)] = null);

(statearr_20102_21162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (9))){
var inst_20024 = (state_20070[(8)]);
var inst_20038 = cljs.core.keyword_identical_QMARK_(inst_20024,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20070__$1 = state_20070;
var statearr_20103_21163 = state_20070__$1;
(statearr_20103_21163[(2)] = inst_20038);

(statearr_20103_21163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (5))){
var inst_20031 = (state_20070[(11)]);
var inst_20035 = (state_20070[(13)]);
var inst_20024 = (state_20070[(8)]);
var inst_20027 = (state_20070[(9)]);
var inst_20031__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20027) : f.call(null,inst_20027));
var inst_20035__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20031__$1,inst_20024);
var state_20070__$1 = (function (){var statearr_20104 = state_20070;
(statearr_20104[(11)] = inst_20031__$1);

(statearr_20104[(13)] = inst_20035__$1);

return statearr_20104;
})();
if(inst_20035__$1){
var statearr_20105_21164 = state_20070__$1;
(statearr_20105_21164[(1)] = (8));

} else {
var statearr_20106_21165 = state_20070__$1;
(statearr_20106_21165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (14))){
var inst_20031 = (state_20070[(11)]);
var inst_20027 = (state_20070[(9)]);
var inst_20047 = (state_20070[(2)]);
var inst_20048 = [];
var inst_20049 = inst_20048.push(inst_20027);
var inst_20023 = inst_20048;
var inst_20024 = inst_20031;
var state_20070__$1 = (function (){var statearr_20112 = state_20070;
(statearr_20112[(14)] = inst_20049);

(statearr_20112[(7)] = inst_20023);

(statearr_20112[(15)] = inst_20047);

(statearr_20112[(8)] = inst_20024);

return statearr_20112;
})();
var statearr_20118_21167 = state_20070__$1;
(statearr_20118_21167[(2)] = null);

(statearr_20118_21167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (16))){
var state_20070__$1 = state_20070;
var statearr_20119_21168 = state_20070__$1;
(statearr_20119_21168[(2)] = null);

(statearr_20119_21168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (10))){
var inst_20040 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
if(cljs.core.truth_(inst_20040)){
var statearr_20120_21169 = state_20070__$1;
(statearr_20120_21169[(1)] = (11));

} else {
var statearr_20121_21170 = state_20070__$1;
(statearr_20121_21170[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (18))){
var inst_20059 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20122_21171 = state_20070__$1;
(statearr_20122_21171[(2)] = inst_20059);

(statearr_20122_21171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (8))){
var inst_20035 = (state_20070[(13)]);
var state_20070__$1 = state_20070;
var statearr_20123_21173 = state_20070__$1;
(statearr_20123_21173[(2)] = inst_20035);

(statearr_20123_21173[(1)] = (10));


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
var cljs$core$async$state_machine__17406__auto__ = null;
var cljs$core$async$state_machine__17406__auto____0 = (function (){
var statearr_20125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20125[(0)] = cljs$core$async$state_machine__17406__auto__);

(statearr_20125[(1)] = (1));

return statearr_20125;
});
var cljs$core$async$state_machine__17406__auto____1 = (function (state_20070){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_20070);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e20126){var ex__17409__auto__ = e20126;
var statearr_20127_21177 = state_20070;
(statearr_20127_21177[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_20070[(4)]))){
var statearr_20129_21178 = state_20070;
(statearr_20129_21178[(1)] = cljs.core.first((state_20070[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21179 = state_20070;
state_20070 = G__21179;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs$core$async$state_machine__17406__auto__ = function(state_20070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17406__auto____1.call(this,state_20070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17406__auto____0;
cljs$core$async$state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17406__auto____1;
return cljs$core$async$state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_20130 = f__17926__auto__();
(statearr_20130[(6)] = c__17925__auto___21137);

return statearr_20130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
