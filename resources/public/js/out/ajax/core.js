// Compiled by ClojureScript 0.0-2665 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

ajax.core.AjaxImpl = (function (){var obj40267 = {};
return obj40267;
})();

ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((function (){var and__3731__auto__ = this$;
if(and__3731__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else {
return and__3731__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__4387__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3743__auto__ = (ajax.core._js_ajax_request[(function (){var G__40271 = x__4387__auto__;
return goog.typeOf(G__40271);
})()]);
if(or__3743__auto__){
return or__3743__auto__;
} else {
var or__3743__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__3743__auto____$1){
return or__3743__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});


ajax.core.AjaxRequest = (function (){var obj40273 = {};
return obj40273;
})();

ajax.core._abort = (function _abort(this$,error_code){
if((function (){var and__3731__auto__ = this$;
if(and__3731__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else {
return and__3731__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else {
var x__4387__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3743__auto__ = (ajax.core._abort[(function (){var G__40277 = x__4387__auto__;
return goog.typeOf(G__40277);
})()]);
if(or__3743__auto__){
return or__3743__auto__;
} else {
var or__3743__auto____$1 = (ajax.core._abort["_"]);
if(or__3743__auto____$1){
return or__3743__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});


ajax.core.DirectlySubmittable = (function (){var obj40279 = {};
return obj40279;
})();

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function submittable_QMARK_(params){
var or__3743__auto__ = (function (){var G__40283 = params;
if(G__40283){
var bit__4424__auto__ = null;
if(cljs.core.truth_((function (){var or__3743__auto__ = bit__4424__auto__;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return G__40283.ajax$core$DirectlySubmittable$;
}
})())){
return true;
} else {
if((!G__40283.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__40283);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__40283);
}
})();
if(or__3743__auto__){
return or__3743__auto__;
} else {
return typeof params === 'string';
}
});
(ajax.core.AjaxImpl["null"] = true);

(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__40284){
var map__40285 = p__40284;
var map__40285__$1 = ((cljs.core.seq_QMARK_(map__40285))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40285):map__40285);
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40285__$1,cljs.core.constant$keyword$24,false);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40285__$1,cljs.core.constant$keyword$25);
var G__40286 = (new goog.net.XhrIo());
var G__40287_40290 = G__40286;
var G__40288_40291 = goog.net.EventType.COMPLETE;
var G__40289_40292 = handler;
goog.events.listen(G__40287_40290,G__40288_40291,G__40289_40292);

G__40286.setTimeoutInterval((function (){var or__3743__auto__ = timeout;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return (0);
}
})());

G__40286.setWithCredentials(with_credentials);

G__40286.send(uri,method,body,headers);

return G__40286;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){
var this$__$1 = this;
return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__40293){
var map__40294 = p__40293;
var map__40294__$1 = ((cljs.core.seq_QMARK_(map__40294))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40294):map__40294);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,cljs.core.constant$keyword$26);
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,cljs.core.constant$keyword$27);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,cljs.core.constant$keyword$25);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,cljs.core.constant$keyword$28);
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){
return ajax.core._abort(this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function read_edn(xhrio){
return cljs.reader.read_string(xhrio.getResponseText());
});
ajax.core.edn_response_format = (function() {
var edn_response_format = null;
var edn_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,ajax.core.read_edn,cljs.core.constant$keyword$30,"EDN"], null);
});
var edn_response_format__1 = (function (opts){
return edn_response_format.cljs$core$IFn$_invoke$arity$0();
});
edn_response_format = function(opts){
switch(arguments.length){
case 0:
return edn_response_format__0.call(this);
case 1:
return edn_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edn_response_format.cljs$core$IFn$_invoke$arity$0 = edn_response_format__0;
edn_response_format.cljs$core$IFn$_invoke$arity$1 = edn_response_format__1;
return edn_response_format;
})()
;
ajax.core.edn_request_format = (function edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$31,cljs.core.pr_str,cljs.core.constant$keyword$32,"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function() {
var transit_write = null;
var transit_write__1 = (function (writer){
return (function (params){
return cognitect.transit.write(writer,params);
});
});
var transit_write__2 = (function (writer,params){
return cognitect.transit.write(writer,params);
});
transit_write = function(writer,params){
switch(arguments.length){
case 1:
return transit_write__1.call(this,writer);
case 2:
return transit_write__2.call(this,writer,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_write.cljs$core$IFn$_invoke$arity$1 = transit_write__1;
transit_write.cljs$core$IFn$_invoke$arity$2 = transit_write__2;
return transit_write;
})()
;
ajax.core.transit_request_format = (function() {
var transit_request_format = null;
var transit_request_format__0 = (function (){
return transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var transit_request_format__1 = (function (p__40295){
var map__40298 = p__40295;
var map__40298__$1 = ((cljs.core.seq_QMARK_(map__40298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40298):map__40298);
var opts = map__40298__$1;
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40298__$1,cljs.core.constant$keyword$33);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40298__$1,cljs.core.constant$keyword$34);
var writer__$1 = (function (){var or__3743__auto__ = writer;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((function (){var or__3743__auto____$1 = type;
if(cljs.core.truth_(or__3743__auto____$1)){
return or__3743__auto____$1;
} else {
return cljs.core.constant$keyword$35;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$31,ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1(writer__$1),cljs.core.constant$keyword$32,ajax.core.transit_content_type], null);
});
transit_request_format = function(p__40295){
switch(arguments.length){
case 0:
return transit_request_format__0.call(this);
case 1:
return transit_request_format__1.call(this,p__40295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_request_format.cljs$core$IFn$_invoke$arity$0 = transit_request_format__0;
transit_request_format.cljs$core$IFn$_invoke$arity$1 = transit_request_format__1;
return transit_request_format;
})()
;
ajax.core.transit_read = (function() {
var transit_read = null;
var transit_read__1 = (function (reader){
return (function (raw,xhrio){
var text = xhrio.getResponseText();
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});
var transit_read__2 = (function (reader,raw){
return (function (xhrio){
var text = xhrio.getResponseText();
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});
var transit_read__3 = (function (reader,raw,xhrio){
var text = xhrio.getResponseText();
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
transit_read = function(reader,raw,xhrio){
switch(arguments.length){
case 1:
return transit_read__1.call(this,reader);
case 2:
return transit_read__2.call(this,reader,raw);
case 3:
return transit_read__3.call(this,reader,raw,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_read.cljs$core$IFn$_invoke$arity$1 = transit_read__1;
transit_read.cljs$core$IFn$_invoke$arity$2 = transit_read__2;
transit_read.cljs$core$IFn$_invoke$arity$3 = transit_read__3;
return transit_read;
})()
;
ajax.core.transit_response_format = (function() {
var transit_response_format = null;
var transit_response_format__0 = (function (){
return transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var transit_response_format__1 = (function (p__40299){
var map__40302 = p__40299;
var map__40302__$1 = ((cljs.core.seq_QMARK_(map__40302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40302):map__40302);
var opts = map__40302__$1;
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40302__$1,cljs.core.constant$keyword$36);
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40302__$1,cljs.core.constant$keyword$37);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40302__$1,cljs.core.constant$keyword$34);
var reader__$1 = (function (){var or__3743__auto__ = reader;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((function (){var or__3743__auto____$1 = type;
if(cljs.core.truth_(or__3743__auto____$1)){
return or__3743__auto____$1;
} else {
return cljs.core.constant$keyword$35;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2(reader__$1,raw),cljs.core.constant$keyword$30,"Transit"], null);
});
transit_response_format = function(p__40299){
switch(arguments.length){
case 0:
return transit_response_format__0.call(this);
case 1:
return transit_response_format__1.call(this,p__40299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_response_format.cljs$core$IFn$_invoke$arity$0 = transit_response_format__0;
transit_response_format.cljs$core$IFn$_invoke$arity$1 = transit_response_format__1;
return transit_response_format;
})()
;
ajax.core.params_to_str = (function params_to_str(params){
if(cljs.core.truth_(params)){
return (function (){var G__40304 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__40304);
})().toString();
} else {
return null;
}
});
ajax.core.read_text = (function read_text(xhrio){
return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$31,ajax.core.params_to_str,cljs.core.constant$keyword$32,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function() {
var raw_response_format = null;
var raw_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,ajax.core.read_text,cljs.core.constant$keyword$30,"raw text"], null);
});
var raw_response_format__1 = (function (opts){
return raw_response_format.cljs$core$IFn$_invoke$arity$0();
});
raw_response_format = function(opts){
switch(arguments.length){
case 0:
return raw_response_format__0.call(this);
case 1:
return raw_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
raw_response_format.cljs$core$IFn$_invoke$arity$0 = raw_response_format__0;
raw_response_format.cljs$core$IFn$_invoke$arity$1 = raw_response_format__1;
return raw_response_format;
})()
;
ajax.core.write_json = (function write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$31,ajax.core.write_json,cljs.core.constant$keyword$32,"application/json"], null);
});
ajax.core.json_read = (function() {
var json_read = null;
var json_read__1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var json = xhrio.getResponseJson(prefix);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$16,keywords_QMARK_], 0));
}
});
});
var json_read__2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var json = xhrio.getResponseJson(prefix);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$16,keywords_QMARK_], 0));
}
});
});
var json_read__3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var json = xhrio.getResponseJson(prefix);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$16,keywords_QMARK_], 0));
}
});
});
var json_read__4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var json = xhrio.getResponseJson(prefix);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$16,keywords_QMARK_], 0));
}
});
json_read = function(prefix,raw,keywords_QMARK_,xhrio){
switch(arguments.length){
case 1:
return json_read__1.call(this,prefix);
case 2:
return json_read__2.call(this,prefix,raw);
case 3:
return json_read__3.call(this,prefix,raw,keywords_QMARK_);
case 4:
return json_read__4.call(this,prefix,raw,keywords_QMARK_,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_read.cljs$core$IFn$_invoke$arity$1 = json_read__1;
json_read.cljs$core$IFn$_invoke$arity$2 = json_read__2;
json_read.cljs$core$IFn$_invoke$arity$3 = json_read__3;
json_read.cljs$core$IFn$_invoke$arity$4 = json_read__4;
return json_read;
})()
;
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should think about using this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function() {
var json_response_format = null;
var json_response_format__0 = (function (){
return json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var json_response_format__1 = (function (p__40305){
var map__40308 = p__40305;
var map__40308__$1 = ((cljs.core.seq_QMARK_(map__40308))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40308):map__40308);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40308__$1,cljs.core.constant$keyword$36);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40308__$1,cljs.core.constant$keyword$38);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40308__$1,cljs.core.constant$keyword$39);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.constant$keyword$30,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
json_response_format = function(p__40305){
switch(arguments.length){
case 0:
return json_response_format__0.call(this);
case 1:
return json_response_format__1.call(this,p__40305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_response_format.cljs$core$IFn$_invoke$arity$0 = json_response_format__0;
json_response_format.cljs$core$IFn$_invoke$arity$1 = json_response_format__1;
return json_response_format;
})()
;
ajax.core.get_response_format = (function get_response_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,format,cljs.core.constant$keyword$30,"custom"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(format)].join('')));

}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__40309,xhrio){
var map__40311 = p__40309;
var map__40311__$1 = ((cljs.core.seq_QMARK_(map__40311))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40311):map__40311);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40311__$1,cljs.core.constant$keyword$30);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$40,status,cljs.core.constant$keyword$41,cljs.core.constant$keyword$43,cljs.core.constant$keyword$42,null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$44,status_text,cljs.core.array_seq([cljs.core.constant$keyword$41,cljs.core.constant$keyword$45,cljs.core.constant$keyword$46,xhrio.getResponseText()], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$44,xhrio.getStatusText(),cljs.core.array_seq([cljs.core.constant$keyword$47,parse_error], 0));
}
});
/**
* @param {...*} var_args
*/
ajax.core.fail = (function() { 
var fail__delegate = function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$40,status,cljs.core.constant$keyword$44,status_text,cljs.core.constant$keyword$41,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
};
var fail = function (status,status_text,failure,var_args){
var params = null;
if (arguments.length > 3) {
var G__40312__i = 0, G__40312__a = new Array(arguments.length -  3);
while (G__40312__i < G__40312__a.length) {G__40312__a[G__40312__i] = arguments[G__40312__i + 3]; ++G__40312__i;}
  params = new cljs.core.IndexedSeq(G__40312__a,0);
} 
return fail__delegate.call(this,status,status_text,failure,params);};
fail.cljs$lang$maxFixedArity = 3;
fail.cljs$lang$applyTo = (function (arglist__40313){
var status = cljs.core.first(arglist__40313);
arglist__40313 = cljs.core.next(arglist__40313);
var status_text = cljs.core.first(arglist__40313);
arglist__40313 = cljs.core.next(arglist__40313);
var failure = cljs.core.first(arglist__40313);
var params = cljs.core.rest(arglist__40313);
return fail__delegate(status,status_text,failure,params);
});
fail.cljs$core$IFn$_invoke$arity$variadic = fail__delegate;
return fail;
})()
;
ajax.core.interpret_response = (function interpret_response(p__40314,response){
var map__40327 = p__40314;
var map__40327__$1 = ((cljs.core.seq_QMARK_(map__40327))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40327):map__40327);
var format = map__40327__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40327__$1,cljs.core.constant$keyword$29);
try{var xhrio = response.target;
var status = xhrio.getStatus();
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),status)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT)){
var G__40329 = "Request aborted by client.";
var G__40330 = cljs.core.constant$keyword$49;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__40329,G__40330) : fail.call(null,G__40329,G__40330));
} else {
var G__40331 = "Request timed out.";
var G__40332 = cljs.core.constant$keyword$25;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__40331,G__40332) : fail.call(null,G__40331,G__40332));
}
} else {
try{var response__$1 = (function (){var G__40334 = xhrio;
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__40334) : read.call(null,G__40334));
})();
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else {
var G__40335 = xhrio.getStatusText();
var G__40336 = cljs.core.constant$keyword$43;
var G__40337 = cljs.core.constant$keyword$42;
var G__40338 = response__$1;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__40335,G__40336,G__40337,G__40338) : fail.call(null,G__40335,G__40336,G__40337,G__40338));
}
}catch (e40333){if((e40333 instanceof Object)){
var e = e40333;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format,xhrio)], null);
} else {
throw e40333;

}
}}
}catch (e40328){if((e40328 instanceof Object)){
var e = e40328;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),e.message,cljs.core.constant$keyword$48,cljs.core.array_seq([cljs.core.constant$keyword$48,e], 0));
} else {
throw e40328;

}
}});
ajax.core.no_format = (function no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$31,format,cljs.core.constant$keyword$32,"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.process_inputs = (function process_inputs(p__40339){
var map__40343 = p__40339;
var map__40343__$1 = ((cljs.core.seq_QMARK_(map__40343))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40343):map__40343);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40343__$1,cljs.core.constant$keyword$50);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40343__$1,cljs.core.constant$keyword$51);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40343__$1,cljs.core.constant$keyword$52);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40343__$1,cljs.core.constant$keyword$53);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40343__$1,cljs.core.constant$keyword$54);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ajax.core.normalize_method(method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else {
var map__40344 = ajax.core.get_request_format(format);
var map__40344__$1 = ((cljs.core.seq_QMARK_(map__40344))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40344):map__40344);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40344__$1,cljs.core.constant$keyword$32);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40344__$1,cljs.core.constant$keyword$31);
var body = ((!((write == null)))?(function (){var G__40345 = params;
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(G__40345) : write.call(null,G__40345));
})():((ajax.core.submittable_QMARK_(params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$1 = (cljs.core.truth_(content_type)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type], null):null);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3743__auto__ = headers;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$1], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.js_handler = (function() {
var js_handler = null;
var js_handler__1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__40351 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__40351) : handler.call(null,G__40351));
});
});
var js_handler__2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__40350 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__40350) : handler.call(null,G__40350));
});
});
var js_handler__3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__40349 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__40349) : handler.call(null,G__40349));
});
js_handler = function(response_format,handler,xhrio){
switch(arguments.length){
case 1:
return js_handler__1.call(this,response_format);
case 2:
return js_handler__2.call(this,response_format,handler);
case 3:
return js_handler__3.call(this,response_format,handler,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_handler.cljs$core$IFn$_invoke$arity$1 = js_handler__1;
js_handler.cljs$core$IFn$_invoke$arity$2 = js_handler__2;
js_handler.cljs$core$IFn$_invoke$arity$3 = js_handler__3;
return js_handler;
})()
;
ajax.core.base_handler = (function base_handler(response_format,p__40352){
var map__40354 = p__40352;
var map__40354__$1 = ((cljs.core.seq_QMARK_(map__40354))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40354):map__40354);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40354__$1,cljs.core.constant$keyword$55);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax_request(p__40355){
var map__40358 = p__40355;
var map__40358__$1 = ((cljs.core.seq_QMARK_(map__40358))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40358):map__40358);
var opts = map__40358__$1;
var manager = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,cljs.core.constant$keyword$56);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,cljs.core.constant$keyword$57);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,cljs.core.constant$keyword$53);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40358__$1,cljs.core.constant$keyword$54);
var response_format__$1 = ajax.core.get_response_format(response_format);
var method__$1 = ajax.core.normalize_method(method);
var vec__40359 = ajax.core.process_inputs(opts);
var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40359,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40359,(1),null);
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40359,(2),null);
var handler = ajax.core.base_handler(response_format__$1,opts);
return ajax.core._js_ajax_request(manager,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/edn",ajax.core.edn_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ajax.core.raw_response_format], null)], null);
ajax.core.detect_content_type = (function() {
var detect_content_type = null;
var detect_content_type__1 = (function (content_type){
return (function (p__40365){
var vec__40366 = p__40365;
var substring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40366,(0),null);
return ((substring == null)) || ((content_type.indexOf(substring) >= (0)));
});
});
var detect_content_type__2 = (function (content_type,p__40360){
var vec__40364 = p__40360;
var substring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40364,(0),null);
return ((substring == null)) || ((content_type.indexOf(substring) >= (0)));
});
detect_content_type = function(content_type,p__40360){
switch(arguments.length){
case 1:
return detect_content_type__1.call(this,content_type);
case 2:
return detect_content_type__2.call(this,content_type,p__40360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_content_type.cljs$core$IFn$_invoke$arity$1 = detect_content_type__1;
detect_content_type.cljs$core$IFn$_invoke$arity$2 = detect_content_type__2;
return detect_content_type;
})()
;
ajax.core.get_default_format = (function get_default_format(xhrio,p__40367){
var map__40369 = p__40367;
var map__40369__$1 = ((cljs.core.seq_QMARK_(map__40369))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40369):map__40369);
var opts = map__40369__$1;
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40369__$1,cljs.core.constant$keyword$58);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((function (){var or__3743__auto__ = xhrio.getResponseHeader("Content-Type");
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return "";
}
})());
return cljs.core.second(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,defaults))).call(null,opts);
});
ajax.core.detect_response_format_read = (function() {
var detect_response_format_read = null;
var detect_response_format_read__1 = (function (opts){
return (function (xhrio){
return cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});
});
var detect_response_format_read__2 = (function (opts,xhrio){
return cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});
detect_response_format_read = function(opts,xhrio){
switch(arguments.length){
case 1:
return detect_response_format_read__1.call(this,opts);
case 2:
return detect_response_format_read__2.call(this,opts,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = detect_response_format_read__1;
detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = detect_response_format_read__2;
return detect_response_format_read;
})()
;
ajax.core.detect_response_format = (function() {
var detect_response_format = null;
var detect_response_format__0 = (function (){
return detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$58,ajax.core.default_formats], null));
});
var detect_response_format__1 = (function (opts){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$52,"(from content type)"], null);
});
detect_response_format = function(opts){
switch(arguments.length){
case 0:
return detect_response_format__0.call(this);
case 1:
return detect_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format.cljs$core$IFn$_invoke$arity$0 = detect_response_format__0;
detect_response_format.cljs$core$IFn$_invoke$arity$1 = detect_response_format__1;
return detect_response_format;
})()
;
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$31,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__40372 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__40372) {
case "url":
return ajax.core.url_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "edn":
return ajax.core.edn_request_format();

break;
case "json":
return ajax.core.json_request_format();

break;
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,format,cljs.core.constant$keyword$30,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__40375 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__40375) {
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "edn":
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.transform_handler = (function() {
var transform_handler = null;
var transform_handler__1 = (function (p__40379){
var map__40390 = p__40379;
var map__40390__$1 = ((cljs.core.seq_QMARK_(map__40390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40390):map__40390);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40390__$1,cljs.core.constant$keyword$59);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40390__$1,cljs.core.constant$keyword$60);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40390__$1,cljs.core.constant$keyword$55);
return ((function (map__40390,map__40390__$1,finally$,error_handler,handler){
return (function (p__40391){
var vec__40392 = p__40391;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40392,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40392,(1),null);
var temp__4124__auto___40394 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___40394)){
var h_40395 = temp__4124__auto___40394;
var G__40393_40396 = result;
(h_40395.cljs$core$IFn$_invoke$arity$1 ? h_40395.cljs$core$IFn$_invoke$arity$1(G__40393_40396) : h_40395.call(null,G__40393_40396));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(map__40390,map__40390__$1,finally$,error_handler,handler))
});
var transform_handler__2 = (function (p__40377,p__40378){
var map__40387 = p__40377;
var map__40387__$1 = ((cljs.core.seq_QMARK_(map__40387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40387):map__40387);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40387__$1,cljs.core.constant$keyword$59);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40387__$1,cljs.core.constant$keyword$60);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40387__$1,cljs.core.constant$keyword$55);
var vec__40388 = p__40378;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40388,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40388,(1),null);
var temp__4124__auto___40397 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___40397)){
var h_40398 = temp__4124__auto___40397;
var G__40389_40399 = result;
(h_40398.cljs$core$IFn$_invoke$arity$1 ? h_40398.cljs$core$IFn$_invoke$arity$1(G__40389_40399) : h_40398.call(null,G__40389_40399));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
transform_handler = function(p__40377,p__40378){
switch(arguments.length){
case 1:
return transform_handler__1.call(this,p__40377);
case 2:
return transform_handler__2.call(this,p__40377,p__40378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transform_handler.cljs$core$IFn$_invoke$arity$1 = transform_handler__1;
transform_handler.cljs$core$IFn$_invoke$arity$2 = transform_handler__2;
return transform_handler;
})()
;
ajax.core.transform_opts = (function transform_opts(p__40400){
var map__40402 = p__40400;
var map__40402__$1 = ((cljs.core.seq_QMARK_(map__40402))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40402):map__40402);
var opts = map__40402__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40402__$1,cljs.core.constant$keyword$51);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40402__$1,cljs.core.constant$keyword$57);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40402__$1,cljs.core.constant$keyword$52);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40402__$1,cljs.core.constant$keyword$53);

var needs_format = !((ajax.core.submittable_QMARK_(params)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")));
var rf = (cljs.core.truth_((function (){var or__3743__auto__ = format;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$55,ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.array_seq([cljs.core.constant$keyword$52,rf,cljs.core.constant$keyword$57,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$54,uri,cljs.core.array_seq([cljs.core.constant$keyword$53,method], 0))));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,opts){
var f__10744__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__10744__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10744__auto__));
};
var GET = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__40403__i = 0, G__40403__a = new Array(arguments.length -  1);
while (G__40403__i < G__40403__a.length) {G__40403__a[G__40403__i] = arguments[G__40403__i + 1]; ++G__40403__i;}
  opts = new cljs.core.IndexedSeq(G__40403__a,0);
} 
return GET__delegate.call(this,uri,opts);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__40404){
var uri = cljs.core.first(arglist__40404);
var opts = cljs.core.rest(arglist__40404);
return GET__delegate(uri,opts);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,opts){
var f__10744__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__10744__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10744__auto__));
};
var HEAD = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__40405__i = 0, G__40405__a = new Array(arguments.length -  1);
while (G__40405__i < G__40405__a.length) {G__40405__a[G__40405__i] = arguments[G__40405__i + 1]; ++G__40405__i;}
  opts = new cljs.core.IndexedSeq(G__40405__a,0);
} 
return HEAD__delegate.call(this,uri,opts);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__40406){
var uri = cljs.core.first(arglist__40406);
var opts = cljs.core.rest(arglist__40406);
return HEAD__delegate(uri,opts);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,opts){
var f__10744__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__10744__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10744__auto__));
};
var POST = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__40407__i = 0, G__40407__a = new Array(arguments.length -  1);
while (G__40407__i < G__40407__a.length) {G__40407__a[G__40407__i] = arguments[G__40407__i + 1]; ++G__40407__i;}
  opts = new cljs.core.IndexedSeq(G__40407__a,0);
} 
return POST__delegate.call(this,uri,opts);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__40408){
var uri = cljs.core.first(arglist__40408);
var opts = cljs.core.rest(arglist__40408);
return POST__delegate(uri,opts);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,opts){
var f__10744__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__10744__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10744__auto__));
};
var PUT = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__40409__i = 0, G__40409__a = new Array(arguments.length -  1);
while (G__40409__i < G__40409__a.length) {G__40409__a[G__40409__i] = arguments[G__40409__i + 1]; ++G__40409__i;}
  opts = new cljs.core.IndexedSeq(G__40409__a,0);
} 
return PUT__delegate.call(this,uri,opts);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__40410){
var uri = cljs.core.first(arglist__40410);
var opts = cljs.core.rest(arglist__40410);
return PUT__delegate(uri,opts);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,opts){
var f__10744__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__10744__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10744__auto__));
};
var DELETE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__40411__i = 0, G__40411__a = new Array(arguments.length -  1);
while (G__40411__i < G__40411__a.length) {G__40411__a[G__40411__i] = arguments[G__40411__i + 1]; ++G__40411__i;}
  opts = new cljs.core.IndexedSeq(G__40411__a,0);
} 
return DELETE__delegate.call(this,uri,opts);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__40412){
var uri = cljs.core.first(arglist__40412);
var opts = cljs.core.rest(arglist__40412);
return DELETE__delegate(uri,opts);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,opts){
var f__10744__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__10744__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10744__auto__));
};
var OPTIONS = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__40413__i = 0, G__40413__a = new Array(arguments.length -  1);
while (G__40413__i < G__40413__a.length) {G__40413__a[G__40413__i] = arguments[G__40413__i + 1]; ++G__40413__i;}
  opts = new cljs.core.IndexedSeq(G__40413__a,0);
} 
return OPTIONS__delegate.call(this,uri,opts);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__40414){
var uri = cljs.core.first(arglist__40414);
var opts = cljs.core.rest(arglist__40414);
return OPTIONS__delegate(uri,opts);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,opts){
var f__10744__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__10744__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10744__auto__));
};
var TRACE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__40415__i = 0, G__40415__a = new Array(arguments.length -  1);
while (G__40415__i < G__40415__a.length) {G__40415__a[G__40415__i] = arguments[G__40415__i + 1]; ++G__40415__i;}
  opts = new cljs.core.IndexedSeq(G__40415__a,0);
} 
return TRACE__delegate.call(this,uri,opts);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__40416){
var uri = cljs.core.first(arglist__40416);
var opts = cljs.core.rest(arglist__40416);
return TRACE__delegate(uri,opts);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
