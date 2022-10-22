goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12125 = e.target.readyState;
var fexpr__12124 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__12124.cljs$core$IFn$_invoke$arity$1 ? fexpr__12124.cljs$core$IFn$_invoke$arity$1(G__12125) : fexpr__12124.call(null,G__12125));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12134,handler){
var map__12135 = p__12134;
var map__12135__$1 = cljs.core.__destructure_map(map__12135);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12135__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12135__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12135__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12135__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12135__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12135__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12135__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12132_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__12132_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___12181 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___12181)){
var response_type_12183 = temp__5804__auto___12181;
(this$__$1.responseType = cljs.core.name(response_type_12183));
} else {
}

var seq__12140_12184 = cljs.core.seq(headers);
var chunk__12141_12185 = null;
var count__12142_12186 = (0);
var i__12143_12187 = (0);
while(true){
if((i__12143_12187 < count__12142_12186)){
var vec__12159_12188 = chunk__12141_12185.cljs$core$IIndexed$_nth$arity$2(null,i__12143_12187);
var k_12189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159_12188,(0),null);
var v_12190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159_12188,(1),null);
this$__$1.setRequestHeader(k_12189,v_12190);


var G__12191 = seq__12140_12184;
var G__12192 = chunk__12141_12185;
var G__12193 = count__12142_12186;
var G__12194 = (i__12143_12187 + (1));
seq__12140_12184 = G__12191;
chunk__12141_12185 = G__12192;
count__12142_12186 = G__12193;
i__12143_12187 = G__12194;
continue;
} else {
var temp__5804__auto___12195 = cljs.core.seq(seq__12140_12184);
if(temp__5804__auto___12195){
var seq__12140_12196__$1 = temp__5804__auto___12195;
if(cljs.core.chunked_seq_QMARK_(seq__12140_12196__$1)){
var c__5568__auto___12197 = cljs.core.chunk_first(seq__12140_12196__$1);
var G__12198 = cljs.core.chunk_rest(seq__12140_12196__$1);
var G__12199 = c__5568__auto___12197;
var G__12200 = cljs.core.count(c__5568__auto___12197);
var G__12201 = (0);
seq__12140_12184 = G__12198;
chunk__12141_12185 = G__12199;
count__12142_12186 = G__12200;
i__12143_12187 = G__12201;
continue;
} else {
var vec__12169_12202 = cljs.core.first(seq__12140_12196__$1);
var k_12203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12169_12202,(0),null);
var v_12204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12169_12202,(1),null);
this$__$1.setRequestHeader(k_12203,v_12204);


var G__12205 = cljs.core.next(seq__12140_12196__$1);
var G__12206 = null;
var G__12207 = (0);
var G__12208 = (0);
seq__12140_12184 = G__12205;
chunk__12141_12185 = G__12206;
count__12142_12186 = G__12207;
i__12143_12187 = G__12208;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
