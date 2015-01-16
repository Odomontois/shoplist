// Compiled by ClojureScript 0.0-2644 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__12337 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__12337) : com.cognitect.transit.eq.hashCode.call(null,G__12337));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__12338 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__12338) : com.cognitect.transit.eq.hashCode.call(null,G__12338));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__12339 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__12339) : com.cognitect.transit.eq.hashCode.call(null,G__12339));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__12344_12348 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__12345_12349 = null;
var count__12346_12350 = (0);
var i__12347_12351 = (0);
while(true){
if((i__12347_12351 < count__12346_12350)){
var k_12352 = chunk__12345_12349.cljs$core$IIndexed$_nth$arity$2(null,i__12347_12351);
var v_12353 = (b[k_12352]);
(a[k_12352] = v_12353);

var G__12354 = seq__12344_12348;
var G__12355 = chunk__12345_12349;
var G__12356 = count__12346_12350;
var G__12357 = (i__12347_12351 + (1));
seq__12344_12348 = G__12354;
chunk__12345_12349 = G__12355;
count__12346_12350 = G__12356;
i__12347_12351 = G__12357;
continue;
} else {
var temp__4126__auto___12358 = cljs.core.seq(seq__12344_12348);
if(temp__4126__auto___12358){
var seq__12344_12359__$1 = temp__4126__auto___12358;
if(cljs.core.chunked_seq_QMARK_(seq__12344_12359__$1)){
var c__4508__auto___12360 = cljs.core.chunk_first(seq__12344_12359__$1);
var G__12361 = cljs.core.chunk_rest(seq__12344_12359__$1);
var G__12362 = c__4508__auto___12360;
var G__12363 = cljs.core.count(c__4508__auto___12360);
var G__12364 = (0);
seq__12344_12348 = G__12361;
chunk__12345_12349 = G__12362;
count__12346_12350 = G__12363;
i__12347_12351 = G__12364;
continue;
} else {
var k_12365 = cljs.core.first(seq__12344_12359__$1);
var v_12366 = (b[k_12365]);
(a[k_12365] = v_12366);

var G__12367 = cljs.core.next(seq__12344_12359__$1);
var G__12368 = null;
var G__12369 = (0);
var G__12370 = (0);
seq__12344_12348 = G__12367;
chunk__12345_12349 = G__12368;
count__12346_12350 = G__12369;
i__12347_12351 = G__12370;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__12371 = arr;
var G__12372 = true;
var G__12373 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__12371,G__12372,G__12373) : cljs.core.PersistentArrayMap.fromArray.call(null,G__12371,G__12372,G__12373));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__12374 = arr;
var G__12375 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__12374,G__12375) : cljs.core.PersistentVector.fromArray.call(null,G__12374,G__12375));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){
var G__12380 = cljs.core.name(type);
var G__12381 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__12380){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12380))
,":",((function (G__12380){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12380))
,"set",((function (G__12380){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__12380))
,"list",((function (G__12380){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__12380))
,"cmap",((function (G__12380){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12382 = (i + (2));
var G__12383 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__12382;
ret = G__12383;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__12380))
], null),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$22)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__12380,G__12381) : com.cognitect.transit.reader.call(null,G__12380,G__12381));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12384_12390 = cljs.core.seq(v);
var chunk__12385_12391 = null;
var count__12386_12392 = (0);
var i__12387_12393 = (0);
while(true){
if((i__12387_12393 < count__12386_12392)){
var x_12394 = chunk__12385_12391.cljs$core$IIndexed$_nth$arity$2(null,i__12387_12393);
ret.push(x_12394);

var G__12395 = seq__12384_12390;
var G__12396 = chunk__12385_12391;
var G__12397 = count__12386_12392;
var G__12398 = (i__12387_12393 + (1));
seq__12384_12390 = G__12395;
chunk__12385_12391 = G__12396;
count__12386_12392 = G__12397;
i__12387_12393 = G__12398;
continue;
} else {
var temp__4126__auto___12399 = cljs.core.seq(seq__12384_12390);
if(temp__4126__auto___12399){
var seq__12384_12400__$1 = temp__4126__auto___12399;
if(cljs.core.chunked_seq_QMARK_(seq__12384_12400__$1)){
var c__4508__auto___12401 = cljs.core.chunk_first(seq__12384_12400__$1);
var G__12402 = cljs.core.chunk_rest(seq__12384_12400__$1);
var G__12403 = c__4508__auto___12401;
var G__12404 = cljs.core.count(c__4508__auto___12401);
var G__12405 = (0);
seq__12384_12390 = G__12402;
chunk__12385_12391 = G__12403;
count__12386_12392 = G__12404;
i__12387_12393 = G__12405;
continue;
} else {
var x_12406 = cljs.core.first(seq__12384_12400__$1);
ret.push(x_12406);

var G__12407 = cljs.core.next(seq__12384_12400__$1);
var G__12408 = null;
var G__12409 = (0);
var G__12410 = (0);
seq__12384_12390 = G__12407;
chunk__12385_12391 = G__12408;
count__12386_12392 = G__12409;
i__12387_12393 = G__12410;
continue;
}
} else {
}
}
break;
}

var G__12388 = "array";
var G__12389 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__12388,G__12389) : com.cognitect.transit.tagged.call(null,G__12388,G__12389));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12411_12417 = cljs.core.seq(v);
var chunk__12412_12418 = null;
var count__12413_12419 = (0);
var i__12414_12420 = (0);
while(true){
if((i__12414_12420 < count__12413_12419)){
var x_12421 = chunk__12412_12418.cljs$core$IIndexed$_nth$arity$2(null,i__12414_12420);
ret.push(x_12421);

var G__12422 = seq__12411_12417;
var G__12423 = chunk__12412_12418;
var G__12424 = count__12413_12419;
var G__12425 = (i__12414_12420 + (1));
seq__12411_12417 = G__12422;
chunk__12412_12418 = G__12423;
count__12413_12419 = G__12424;
i__12414_12420 = G__12425;
continue;
} else {
var temp__4126__auto___12426 = cljs.core.seq(seq__12411_12417);
if(temp__4126__auto___12426){
var seq__12411_12427__$1 = temp__4126__auto___12426;
if(cljs.core.chunked_seq_QMARK_(seq__12411_12427__$1)){
var c__4508__auto___12428 = cljs.core.chunk_first(seq__12411_12427__$1);
var G__12429 = cljs.core.chunk_rest(seq__12411_12427__$1);
var G__12430 = c__4508__auto___12428;
var G__12431 = cljs.core.count(c__4508__auto___12428);
var G__12432 = (0);
seq__12411_12417 = G__12429;
chunk__12412_12418 = G__12430;
count__12413_12419 = G__12431;
i__12414_12420 = G__12432;
continue;
} else {
var x_12433 = cljs.core.first(seq__12411_12427__$1);
ret.push(x_12433);

var G__12434 = cljs.core.next(seq__12411_12427__$1);
var G__12435 = null;
var G__12436 = (0);
var G__12437 = (0);
seq__12411_12417 = G__12434;
chunk__12412_12418 = G__12435;
count__12413_12419 = G__12436;
i__12414_12420 = G__12437;
continue;
}
} else {
}
}
break;
}

var G__12415 = "array";
var G__12416 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__12415,G__12416) : com.cognitect.transit.tagged.call(null,G__12415,G__12416));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12438_12442 = cljs.core.seq(v);
var chunk__12439_12443 = null;
var count__12440_12444 = (0);
var i__12441_12445 = (0);
while(true){
if((i__12441_12445 < count__12440_12444)){
var x_12446 = chunk__12439_12443.cljs$core$IIndexed$_nth$arity$2(null,i__12441_12445);
ret.push(x_12446);

var G__12447 = seq__12438_12442;
var G__12448 = chunk__12439_12443;
var G__12449 = count__12440_12444;
var G__12450 = (i__12441_12445 + (1));
seq__12438_12442 = G__12447;
chunk__12439_12443 = G__12448;
count__12440_12444 = G__12449;
i__12441_12445 = G__12450;
continue;
} else {
var temp__4126__auto___12451 = cljs.core.seq(seq__12438_12442);
if(temp__4126__auto___12451){
var seq__12438_12452__$1 = temp__4126__auto___12451;
if(cljs.core.chunked_seq_QMARK_(seq__12438_12452__$1)){
var c__4508__auto___12453 = cljs.core.chunk_first(seq__12438_12452__$1);
var G__12454 = cljs.core.chunk_rest(seq__12438_12452__$1);
var G__12455 = c__4508__auto___12453;
var G__12456 = cljs.core.count(c__4508__auto___12453);
var G__12457 = (0);
seq__12438_12442 = G__12454;
chunk__12439_12443 = G__12455;
count__12440_12444 = G__12456;
i__12441_12445 = G__12457;
continue;
} else {
var x_12458 = cljs.core.first(seq__12438_12452__$1);
ret.push(x_12458);

var G__12459 = cljs.core.next(seq__12438_12452__$1);
var G__12460 = null;
var G__12461 = (0);
var G__12462 = (0);
seq__12438_12442 = G__12459;
chunk__12439_12443 = G__12460;
count__12440_12444 = G__12461;
i__12441_12445 = G__12462;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__12481 = cljs.core.name(type);
var G__12482 = cognitect.transit.opts_merge({"unpack": ((function (G__12481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__12481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12486 = cljs.core.clone(handlers);
x12486.forEach = ((function (x12486,G__12481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12487 = cljs.core.seq(coll);
var chunk__12488 = null;
var count__12489 = (0);
var i__12490 = (0);
while(true){
if((i__12490 < count__12489)){
var vec__12491 = chunk__12488.cljs$core$IIndexed$_nth$arity$2(null,i__12490);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(1),null);
var G__12492_12497 = v;
var G__12493_12498 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12492_12497,G__12493_12498) : f.call(null,G__12492_12497,G__12493_12498));

var G__12499 = seq__12487;
var G__12500 = chunk__12488;
var G__12501 = count__12489;
var G__12502 = (i__12490 + (1));
seq__12487 = G__12499;
chunk__12488 = G__12500;
count__12489 = G__12501;
i__12490 = G__12502;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__12487);
if(temp__4126__auto__){
var seq__12487__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12487__$1)){
var c__4508__auto__ = cljs.core.chunk_first(seq__12487__$1);
var G__12503 = cljs.core.chunk_rest(seq__12487__$1);
var G__12504 = c__4508__auto__;
var G__12505 = cljs.core.count(c__4508__auto__);
var G__12506 = (0);
seq__12487 = G__12503;
chunk__12488 = G__12504;
count__12489 = G__12505;
i__12490 = G__12506;
continue;
} else {
var vec__12494 = cljs.core.first(seq__12487__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12494,(1),null);
var G__12495_12507 = v;
var G__12496_12508 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12495_12507,G__12496_12508) : f.call(null,G__12495_12507,G__12496_12508));

var G__12509 = cljs.core.next(seq__12487__$1);
var G__12510 = null;
var G__12511 = (0);
var G__12512 = (0);
seq__12487 = G__12509;
chunk__12488 = G__12510;
count__12489 = G__12511;
i__12490 = G__12512;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12486,G__12481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12486;
})(), "objectBuilder": ((function (G__12481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__12481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__12483 = obj;
G__12483.push((function (){var G__12484 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__12484) : kfn.call(null,G__12484));
})(),(function (){var G__12485 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__12485) : vfn.call(null,G__12485));
})());

return G__12483;
});})(G__12481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__12481,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$22)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__12481,G__12482) : com.cognitect.transit.writer.call(null,G__12481,G__12482));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t12527 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t12527 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta12528){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta12528 = meta12528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t12527.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__12530 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__12530) : self__.tag_fn.call(null,G__12530));
});

cognitect.transit.t12527.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__12531 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__12531) : self__.rep_fn.call(null,G__12531));
});

cognitect.transit.t12527.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__12532 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__12532) : self__.str_rep_fn.call(null,G__12532));
} else {
return null;
}
});

cognitect.transit.t12527.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t12527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12529){
var self__ = this;
var _12529__$1 = this;
return self__.meta12528;
});

cognitect.transit.t12527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12529,meta12528__$1){
var self__ = this;
var _12529__$1 = this;
return (new cognitect.transit.t12527(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta12528__$1));
});

cognitect.transit.t12527.cljs$lang$type = true;

cognitect.transit.t12527.cljs$lang$ctorStr = "cognitect.transit/t12527";

cognitect.transit.t12527.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cognitect.transit/t12527");
});

cognitect.transit.__GT_t12527 = (function __GT_t12527(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12528){
return (new cognitect.transit.t12527(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12528));
});

}

return (new cognitect.transit.t12527(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"D:\\prog\\projects\\pure\\clojure\\shoplist\\resources\\public\\js\\out\\cognitect\\transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
var G__12535 = tag;
var G__12536 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__12535,G__12536) : com.cognitect.transit.types.taggedValue.call(null,G__12535,G__12536));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__12538 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__12538) : com.cognitect.transit.types.isTaggedValue.call(null,G__12538));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__12540 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__12540) : com.cognitect.transit.types.integer.call(null,G__12540));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__12542 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__12542) : com.cognitect.transit.types.isInteger.call(null,G__12542));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__12544 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__12544) : com.cognitect.transit.types.bigInteger.call(null,G__12544));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__12546 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__12546) : com.cognitect.transit.types.isBigInteger.call(null,G__12546));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__12548 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__12548) : com.cognitect.transit.types.bigDecimalValue.call(null,G__12548));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__12550 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__12550) : com.cognitect.transit.types.isBigDecimal.call(null,G__12550));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__12552 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__12552) : com.cognitect.transit.types.uri.call(null,G__12552));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__12554 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__12554) : com.cognitect.transit.types.isURI.call(null,G__12554));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__12556 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__12556) : com.cognitect.transit.types.uuid.call(null,G__12556));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__12558 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__12558) : com.cognitect.transit.types.isUUID.call(null,G__12558));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__12560 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__12560) : com.cognitect.transit.types.binary.call(null,G__12560));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__12562 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__12562) : com.cognitect.transit.types.isBinary.call(null,G__12562));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__12564 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__12564) : com.cognitect.transit.types.quoted.call(null,G__12564));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__12566 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__12566) : com.cognitect.transit.types.isQuoted.call(null,G__12566));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__12568 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__12568) : com.cognitect.transit.types.link.call(null,G__12568));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__12570 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__12570) : com.cognitect.transit.types.isLink.call(null,G__12570));
});
