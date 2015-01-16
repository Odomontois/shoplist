// Compiled by ClojureScript 0.0-2644 {}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');

secretary.core.IRouteMatches = (function (){var obj19256 = {};
return obj19256;
})();

secretary.core.route_matches = (function route_matches(this$,route){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else {
return and__3709__auto__;
}
})()){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (secretary.core.route_matches[(function (){var G__19260 = x__4365__auto__;
return goog.typeOf(G__19260);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (secretary.core.route_matches["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});


secretary.core.IRouteValue = (function (){var obj19262 = {};
return obj19262;
})();

secretary.core.route_value = (function route_value(this$){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.secretary$core$IRouteValue$route_value$arity$1;
} else {
return and__3709__auto__;
}
})()){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (secretary.core.route_value[(function (){var G__19266 = x__4365__auto__;
return goog.typeOf(G__19266);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (secretary.core.route_value["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
})().call(null,this$);
}
});


secretary.core.IRenderRoute = (function (){var obj19268 = {};
return obj19268;
})();

secretary.core.render_route = (function() {
var render_route = null;
var render_route__1 = (function (this$){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else {
return and__3709__auto__;
}
})()){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (secretary.core.render_route[(function (){var G__19274 = x__4365__auto__;
return goog.typeOf(G__19274);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (secretary.core.render_route["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});
var render_route__2 = (function (this$,params){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else {
return and__3709__auto__;
}
})()){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (secretary.core.render_route[(function (){var G__19276 = x__4365__auto__;
return goog.typeOf(G__19276);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (secretary.core.render_route["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});
render_route = function(this$,params){
switch(arguments.length){
case 1:
return render_route__1.call(this,this$);
case 2:
return render_route__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_route.cljs$core$IFn$_invoke$arity$1 = render_route__1;
render_route.cljs$core$IFn$_invoke$arity$2 = render_route__2;
return render_route;
})()
;

secretary.core._STAR_config_STAR_ = (function (){var G__19277 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19277) : cljs.core.atom.call(null,G__19277));
})();
/**
* Gets a value for *config* at path.
*/
secretary.core.get_config = (function get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19279 = secretary.core._STAR_config_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19279) : cljs.core.deref.call(null,G__19279));
})(),path__$1);
});
/**
* Associates a value val for *config* at path.
*/
secretary.core.set_config_BANG_ = (function set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
/**
* Given a key and a value return and encoded key-value pair.
*/
secretary.core.encode_pair = (function (){var method_table__4618__auto__ = (function (){var G__19280 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19280) : cljs.core.atom.call(null,G__19280));
})();
var prefer_table__4619__auto__ = (function (){var G__19281 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19281) : cljs.core.atom.call(null,G__19281));
})();
var method_cache__4620__auto__ = (function (){var G__19282 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19282) : cljs.core.atom.call(null,G__19282));
})();
var cached_hierarchy__4621__auto__ = (function (){var G__19283 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19283) : cljs.core.atom.call(null,G__19283));
})();
var hierarchy__4622__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$107,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__){
return (function (p__19284){
var vec__19285 = p__19284;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19285,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19285,(1),null);
if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
return cljs.core.constant$keyword$158;
} else {
if((function (){var or__3721__auto__ = cljs.core.map_QMARK_(v);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var G__19287 = v;
if(G__19287){
var bit__4402__auto__ = (G__19287.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__4402__auto__) || (G__19287.cljs$core$IRecord$)){
return true;
} else {
if((!G__19287.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__19287);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__19287);
}
}
})()){
return cljs.core.constant$keyword$159;
} else {
return null;
}
}
});})(method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__))
,cljs.core.constant$keyword$7,hierarchy__4622__auto__,method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__));
})();
secretary.core.key_index = (function() {
var key_index = null;
var key_index__1 = (function (k){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("[]")].join('');
});
var key_index__2 = (function (k,index){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});
key_index = function(k,index){
switch(arguments.length){
case 1:
return key_index__1.call(this,k);
case 2:
return key_index__2.call(this,k,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
key_index.cljs$core$IFn$_invoke$arity$1 = key_index__1;
key_index.cljs$core$IFn$_invoke$arity$2 = key_index__2;
return key_index;
})()
;
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$158,(function (p__19288){
var vec__19289 = p__19288;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(1),null);
var encoded = cljs.core.map_indexed(((function (vec__19289,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
var G__19290 = pair;
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__19290) : secretary.core.encode_pair.call(null,G__19290));
});})(vec__19289,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$159,(function (p__19291){
var vec__19292 = p__19291;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19292,k,v){
return (function (p__19293){
var vec__19294 = p__19293;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19294,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19294,(1),null);
var G__19295 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__19295) : secretary.core.encode_pair.call(null,G__19295));
});})(vec__19292,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (p__19296){
var vec__19297 = p__19296;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19297,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19297,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((function (){var G__19298 = [cljs.core.str(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__19298) : secretary.core.encode.call(null,G__19298));
})())].join('');
}));
/**
* Convert a map of query parameters into url encoded string.
*/
secretary.core.encode_query_params = (function encode_query_params(query_params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
* Like js/encodeURIComponent excepts ignore slashes.
*/
secretary.core.encode_uri = (function encode_uri(uri){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
* Parse a value from a serialized query-string key index. If the
* index value is empty 0 is returned, if it's a digit it returns the
* js/parseInt value, otherwise it returns the extracted index.
*/
secretary.core.parse_path = (function parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq(index_re,path);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__19302){
var vec__19303 = p__19302;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
var G__19304 = part;
return parseInt(G__19304);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
* Return a key path for a serialized query-string entry.
* 
* Ex.
* 
* (key-parse "foo[][a][][b]")
* ;; => ("foo" 0 "a" 0 "b")
* 
*/
secretary.core.key_parse = (function key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__19306 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19306,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19306,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19306,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);
return cljs.core.cons(key,parsed_path);
});
/**
* Like assoc-in but numbers in path create vectors instead of maps.
* 
* Ex.
* 
* (assoc-in-query-params {} ["foo" 0] 1)
* ;; => {"foo" [1]}
* 
* (assoc-in-query-params {} ["foo" 0 "a"] 1)
* ;; => {"foo" [{"a" 1}]}
* 
*/
secretary.core.assoc_in_query_params = (function assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed((function (i,_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});
var hs = heads(path);
var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h)))))){
return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last(path) === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.decode_query_params = (function decode_query_params(query_string){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){
var vec__19309 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(function (){var G__19310 = v;
return (secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(G__19310) : secretary.core.decode.call(null,G__19310));
})());
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys(params);
return params__$1;
});
/**
* Like re-matches but result is a always vector. If re does not
* capture matches then it will return a vector of [m m] as if it had a
* single capture. Other wise it maintains consistent behavior with
* re-matches.
*/
secretary.core.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var ms = cljs.core.re_matches(re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_(ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function re_escape(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){
if(cljs.core.truth_((function (){var G__19312 = c;
return (secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(G__19312) : secretary.core.re_escape_chars.call(null,G__19312));
})())){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
* Attempt to lex a single token from s with clauses. Each clause is a
* pair of [regexp action] where action is a function. regexp is
* expected to begin with ^ and contain a single capture. If the
* attempt is successful a vector of [s-without-token (action capture)]
* is returned. Otherwise the result is nil.
*/
secretary.core.lex_STAR_ = (function lex_STAR_(s,clauses){
return cljs.core.some((function (p__19317){
var vec__19318 = p__19317;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19318,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19318,(1),null);
var temp__4126__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__19319 = temp__4126__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19319,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19319,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(function (){var G__19320 = c;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__19320) : action.call(null,G__19320));
})()], null);
} else {
return null;
}
}),clauses);
});
/**
* Return a pair of [regex params]. regex is a compiled regular
* expression for matching routes. params is a list of route param
* names (:*, :id, etc.).
*/
secretary.core.lex_route = (function lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(s__$1)){
var vec__19323 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(0),null);
var vec__19324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324,(1),null);
var G__19325 = s__$2;
var G__19326 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__19327 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__19325;
pattern = G__19326;
params = G__19327;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
* Given a route return an instance of IRouteMatches.
*/
secretary.core.compile_route = (function compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):cljs.core.constant$keyword$160);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape(v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__19333 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19333,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19333,(1),null);
if(typeof secretary.core.t19334 !== 'undefined'){
} else {

/**
* @constructor
*/
secretary.core.t19334 = (function (params,re,vec__19333,clauses,orig_route,compile_route,meta19335){
this.params = params;
this.re = re;
this.vec__19333 = vec__19333;
this.clauses = clauses;
this.orig_route = orig_route;
this.compile_route = compile_route;
this.meta19335 = meta19335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
secretary.core.t19334.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t19334.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__19333,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4126__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__19337 = temp__4126__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(0),null);
var ms = cljs.core.nthnext(vec__19337,(1));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__19333,re,params))
;

secretary.core.t19334.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t19334.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__19333,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__19333,re,params))
;

secretary.core.t19334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__19333,re,params){
return (function (_19336){
var self__ = this;
var _19336__$1 = this;
return self__.meta19335;
});})(clauses,vec__19333,re,params))
;

secretary.core.t19334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__19333,re,params){
return (function (_19336,meta19335__$1){
var self__ = this;
var _19336__$1 = this;
return (new secretary.core.t19334(self__.params,self__.re,self__.vec__19333,self__.clauses,self__.orig_route,self__.compile_route,meta19335__$1));
});})(clauses,vec__19333,re,params))
;

secretary.core.t19334.cljs$lang$type = true;

secretary.core.t19334.cljs$lang$ctorStr = "secretary.core/t19334";

secretary.core.t19334.cljs$lang$ctorPrWriter = ((function (clauses,vec__19333,re,params){
return (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"secretary.core/t19334");
});})(clauses,vec__19333,re,params))
;

secretary.core.__GT_t19334 = ((function (clauses,vec__19333,re,params){
return (function __GT_t19334(params__$1,re__$1,vec__19333__$1,clauses__$1,orig_route__$1,compile_route__$1,meta19335){
return (new secretary.core.t19334(params__$1,re__$1,vec__19333__$1,clauses__$1,orig_route__$1,compile_route__$1,meta19335));
});})(clauses,vec__19333,re,params))
;

}

return (new secretary.core.t19334(params,re,vec__19333,clauses,orig_route,compile_route,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,41,cljs.core.constant$keyword$9,251,cljs.core.constant$keyword$10,4,cljs.core.constant$keyword$11,242,cljs.core.constant$keyword$12,"D:\\prog\\projects\\pure\\clojure\\shoplist\\resources\\public\\js\\out\\secretary\\core.cljs"], null)));
});
/**
* @param {...*} var_args
*/
secretary.core.render_route_STAR_ = (function() { 
var render_route_STAR___delegate = function (obj,args){
if((function (){var G__19339 = obj;
if(G__19339){
var bit__4402__auto__ = null;
if(cljs.core.truth_((function (){var or__3721__auto__ = bit__4402__auto__;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return G__19339.secretary$core$IRenderRoute$;
}
})())){
return true;
} else {
if((!G__19339.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__19339);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__19339);
}
})()){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
};
var render_route_STAR_ = function (obj,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return render_route_STAR___delegate.call(this,obj,args);};
render_route_STAR_.cljs$lang$maxFixedArity = 1;
render_route_STAR_.cljs$lang$applyTo = (function (arglist__19340){
var obj = cljs.core.first(arglist__19340);
var args = cljs.core.rest(arglist__19340);
return render_route_STAR___delegate(obj,args);
});
render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = render_route_STAR___delegate;
return render_route_STAR_;
})()
;
secretary.core._STAR_routes_STAR_ = (function (){var G__19341 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19341) : cljs.core.atom.call(null,G__19341));
})();
secretary.core.add_route_BANG_ = (function add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__19344){
var vec__19345 = p__19344;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function reset_routes_BANG_(){
var G__19348 = secretary.core._STAR_routes_STAR_;
var G__19349 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19348,G__19349) : cljs.core.reset_BANG_.call(null,G__19348,G__19349));
});
secretary.core.locate_route = (function locate_route(route){
return cljs.core.some((function (p__19353){
var vec__19354 = p__19353;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19354,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19354,(1),null);
var temp__4126__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__4126__auto__)){
var params = temp__4126__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$161,action,cljs.core.constant$keyword$51,params,cljs.core.constant$keyword$162,compiled_route], null);
} else {
return null;
}
}),(function (){var G__19355 = secretary.core._STAR_routes_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19355) : cljs.core.deref.call(null,G__19355));
})());
});
/**
* Returns original route value as set in defroute when passed a URI path.
*/
secretary.core.locate_route_value = (function locate_route_value(uri){
return secretary.core.route_value(cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function prefix(){
return [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$39], null)))].join('');
});
secretary.core.uri_without_prefix = (function uri_without_prefix(uri){
return clojure.string.replace(uri,cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(secretary.core.prefix())].join('')),"");
});
/**
* Ensures that the uri has a leading slash
*/
secretary.core.uri_with_leading_slash = (function uri_with_leading_slash(uri){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
* Dispatch an action for a given route if it matches the URI path.
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){
var vec__19359 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19359,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19359,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$163,secretary.core.decode_query_params(query_string)], null):null);
var map__19360 = secretary.core.locate_route(uri_path__$1);
var map__19360__$1 = ((cljs.core.seq_QMARK_(map__19360))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19360):map__19360);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19360__$1,cljs.core.constant$keyword$51);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19360__$1,cljs.core.constant$keyword$161);
var action__$1 = (function (){var or__3721__auto__ = action;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));
var G__19361 = params__$1;
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(G__19361) : action__$1.call(null,G__19361));
});
secretary.core.invalid_params = (function invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__19364){
var vec__19365 = p__19364;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19365,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19365,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);
if(cljs.core.truth_(cljs.core.re_matches(validation,value))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__19366,route){
var vec__19367 = p__19366;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19367,(0),null);
var validations = cljs.core.nthnext(vec__19367,(1));
var vec__19368 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19368,(0),null);
var validations__$1 = cljs.core.nthnext(vec__19368,(1));
var params = secretary.core.compile_route(route_string__$1).secretary$core$IRouteMatches$route_matches$arity$2(null,route);
if(secretary.core.params_valid_QMARK_(params,validations__$1)){
return params;
} else {
return null;
}
});

RegExp.prototype.secretary$core$IRouteMatches$ = true;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4126__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__19369 = temp__4126__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19369,(0),null);
var ms = cljs.core.nthnext(vec__19369,(1));
return cljs.core.vec(ms);
} else {
return null;
}
});

(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.compile_route(this$).secretary$core$IRouteMatches$route_matches$arity$2(null,route);
}));
cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__19370){
var vec__19371 = p__19370;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19371,(0),null);
var validations = cljs.core.nthnext(vec__19371,(1));
var vec__19372 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19372,(0),null);
var validations__$1 = cljs.core.nthnext(vec__19372,(1));
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});

RegExp.prototype.secretary$core$IRouteValue$ = true;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.compile_route(this$).secretary$core$IRouteValue$route_value$arity$1(null);
}));
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__19373,params){
var vec__19374 = p__19373;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19374,(0),null);
var validations = cljs.core.nthnext(vec__19374,(1));
var vec__19375 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19375,(0),null);
var validations__$1 = cljs.core.nthnext(vec__19375,(1));
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});

(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
}));

(secretary.core.render_route["string"] = (function (this$,params){
var map__19376 = params;
var map__19376__$1 = ((cljs.core.seq_QMARK_(map__19376))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19376):map__19376);
var m = map__19376__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19376__$1,cljs.core.constant$keyword$163);
var a = (function (){var G__19377 = m;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19377) : cljs.core.atom.call(null,G__19377));
})();
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__19376,map__19376__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19378 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19378) : cljs.core.deref.call(null,G__19378));
})(),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__19376,map__19376__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$39], null))),cljs.core.str(path)].join('');
var temp__4124__auto__ = (function (){var and__3709__auto__ = query_params;
if(cljs.core.truth_(and__3709__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__3709__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var query_string = temp__4124__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
}));
