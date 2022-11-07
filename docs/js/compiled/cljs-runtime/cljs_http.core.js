goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__23203 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__23203.cljs$core$IFn$_invoke$arity$1 ? fexpr__23203.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__23203.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23206){
var vec__23207 = p__23206;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23207,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__23212 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__23212)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__23212)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__23212)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__23212)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__23212)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23212)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23212)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__23220){
var map__23222 = p__23220;
var map__23222__$1 = cljs.core.__destructure_map(map__23222);
var request = map__23222__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__23223 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__23223,default_headers);

cljs_http.core.apply_response_type_BANG_(G__23223,response_type);

G__23223.setTimeoutInterval(timeout);

G__23223.setWithCredentials(send_credentials);

return G__23223;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__23227){
var map__23228 = p__23227;
var map__23228__$1 = cljs.core.__destructure_map(map__23228);
var request = map__23228__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23228__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23228__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23228__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23228__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23228__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23228__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5045__auto__ = request_method;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__23231 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__23231) : cljs_http.core.error_kw.call(null,G__23231));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_23319 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__23240_23320 = xhr;
G__23240_23320.setProgressEventsEnabled(true);

G__23240_23320.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_23319,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__23240_23320.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_23319,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__17925__auto___23328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_23252){
var state_val_23253 = (state_23252[(1)]);
if((state_val_23253 === (1))){
var state_23252__$1 = state_23252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23252__$1,(2),cancel);
} else {
if((state_val_23253 === (2))){
var inst_23243 = (state_23252[(2)]);
var inst_23244 = xhr.isComplete();
var inst_23245 = cljs.core.not(inst_23244);
var state_23252__$1 = (function (){var statearr_23256 = state_23252;
(statearr_23256[(7)] = inst_23243);

return statearr_23256;
})();
if(inst_23245){
var statearr_23257_23330 = state_23252__$1;
(statearr_23257_23330[(1)] = (3));

} else {
var statearr_23258_23331 = state_23252__$1;
(statearr_23258_23331[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (3))){
var inst_23247 = xhr.abort();
var state_23252__$1 = state_23252;
var statearr_23259_23332 = state_23252__$1;
(statearr_23259_23332[(2)] = inst_23247);

(statearr_23259_23332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (4))){
var state_23252__$1 = state_23252;
var statearr_23261_23333 = state_23252__$1;
(statearr_23261_23333[(2)] = null);

(statearr_23261_23333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (5))){
var inst_23250 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23252__$1,inst_23250);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__17406__auto__ = null;
var cljs_http$core$xhr_$_state_machine__17406__auto____0 = (function (){
var statearr_23262 = [null,null,null,null,null,null,null,null];
(statearr_23262[(0)] = cljs_http$core$xhr_$_state_machine__17406__auto__);

(statearr_23262[(1)] = (1));

return statearr_23262;
});
var cljs_http$core$xhr_$_state_machine__17406__auto____1 = (function (state_23252){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_23252);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e23263){var ex__17409__auto__ = e23263;
var statearr_23264_23335 = state_23252;
(statearr_23264_23335[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_23252[(4)]))){
var statearr_23265_23336 = state_23252;
(statearr_23265_23336[(1)] = cljs.core.first((state_23252[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23337 = state_23252;
state_23252 = G__23337;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__17406__auto__ = function(state_23252){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__17406__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__17406__auto____1.call(this,state_23252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__17406__auto____0;
cljs_http$core$xhr_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__17406__auto____1;
return cljs_http$core$xhr_$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_23269 = f__17926__auto__();
(statearr_23269[(6)] = c__17925__auto___23328);

return statearr_23269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__23277){
var map__23279 = p__23277;
var map__23279__$1 = cljs.core.__destructure_map(map__23279);
var request = map__23279__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23279__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23279__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23279__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23279__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_23341 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_23341], null));

if(cljs.core.truth_(cancel)){
var c__17925__auto___23343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17926__auto__ = (function (){var switch__17405__auto__ = (function (state_23286){
var state_val_23287 = (state_23286[(1)]);
if((state_val_23287 === (1))){
var state_23286__$1 = state_23286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23286__$1,(2),cancel);
} else {
if((state_val_23287 === (2))){
var inst_23283 = (state_23286[(2)]);
var inst_23284 = jsonp.cancel(req_23341);
var state_23286__$1 = (function (){var statearr_23289 = state_23286;
(statearr_23289[(7)] = inst_23283);

return statearr_23289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23286__$1,inst_23284);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__17406__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__17406__auto____0 = (function (){
var statearr_23290 = [null,null,null,null,null,null,null,null];
(statearr_23290[(0)] = cljs_http$core$jsonp_$_state_machine__17406__auto__);

(statearr_23290[(1)] = (1));

return statearr_23290;
});
var cljs_http$core$jsonp_$_state_machine__17406__auto____1 = (function (state_23286){
while(true){
var ret_value__17407__auto__ = (function (){try{while(true){
var result__17408__auto__ = switch__17405__auto__(state_23286);
if(cljs.core.keyword_identical_QMARK_(result__17408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17408__auto__;
}
break;
}
}catch (e23291){var ex__17409__auto__ = e23291;
var statearr_23292_23345 = state_23286;
(statearr_23292_23345[(2)] = ex__17409__auto__);


if(cljs.core.seq((state_23286[(4)]))){
var statearr_23293_23347 = state_23286;
(statearr_23293_23347[(1)] = cljs.core.first((state_23286[(4)])));

} else {
throw ex__17409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23348 = state_23286;
state_23286 = G__23348;
continue;
} else {
return ret_value__17407__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__17406__auto__ = function(state_23286){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__17406__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__17406__auto____1.call(this,state_23286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__17406__auto____0;
cljs_http$core$jsonp_$_state_machine__17406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__17406__auto____1;
return cljs_http$core$jsonp_$_state_machine__17406__auto__;
})()
})();
var state__17927__auto__ = (function (){var statearr_23304 = f__17926__auto__();
(statearr_23304[(6)] = c__17925__auto___23343);

return statearr_23304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17927__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__23306){
var map__23313 = p__23306;
var map__23313__$1 = cljs.core.__destructure_map(map__23313);
var request = map__23313__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
