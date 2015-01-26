// Compiled by ClojureScript 0.0-2665 {}
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
var G__13587 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__13587) : com.cognitect.transit.eq.hashCode.call(null,G__13587));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__13588 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__13588) : com.cognitect.transit.eq.hashCode.call(null,G__13588));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__13589 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__13589) : com.cognitect.transit.eq.hashCode.call(null,G__13589));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__13594_13598 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__13595_13599 = null;
var count__13596_13600 = (0);
var i__13597_13601 = (0);
while(true){
if((i__13597_13601 < count__13596_13600)){
var k_13602 = chunk__13595_13599.cljs$core$IIndexed$_nth$arity$2(null,i__13597_13601);
var v_13603 = (b[k_13602]);
(a[k_13602] = v_13603);

var G__13604 = seq__13594_13598;
var G__13605 = chunk__13595_13599;
var G__13606 = count__13596_13600;
var G__13607 = (i__13597_13601 + (1));
seq__13594_13598 = G__13604;
chunk__13595_13599 = G__13605;
count__13596_13600 = G__13606;
i__13597_13601 = G__13607;
continue;
} else {
var temp__4126__auto___13608 = cljs.core.seq(seq__13594_13598);
if(temp__4126__auto___13608){
var seq__13594_13609__$1 = temp__4126__auto___13608;
if(cljs.core.chunked_seq_QMARK_(seq__13594_13609__$1)){
var c__4530__auto___13610 = cljs.core.chunk_first(seq__13594_13609__$1);
var G__13611 = cljs.core.chunk_rest(seq__13594_13609__$1);
var G__13612 = c__4530__auto___13610;
var G__13613 = cljs.core.count(c__4530__auto___13610);
var G__13614 = (0);
seq__13594_13598 = G__13611;
chunk__13595_13599 = G__13612;
count__13596_13600 = G__13613;
i__13597_13601 = G__13614;
continue;
} else {
var k_13615 = cljs.core.first(seq__13594_13609__$1);
var v_13616 = (b[k_13615]);
(a[k_13615] = v_13616);

var G__13617 = cljs.core.next(seq__13594_13609__$1);
var G__13618 = null;
var G__13619 = (0);
var G__13620 = (0);
seq__13594_13598 = G__13617;
chunk__13595_13599 = G__13618;
count__13596_13600 = G__13619;
i__13597_13601 = G__13620;
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
var G__13621 = arr;
var G__13622 = true;
var G__13623 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__13621,G__13622,G__13623) : cljs.core.PersistentArrayMap.fromArray.call(null,G__13621,G__13622,G__13623));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/MapBuilder");
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
var G__13624 = arr;
var G__13625 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__13624,G__13625) : cljs.core.PersistentVector.fromArray.call(null,G__13624,G__13625));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/VectorBuilder");
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
var G__13630 = cljs.core.name(type);
var G__13631 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__13630){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__13630))
,":",((function (G__13630){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__13630))
,"set",((function (G__13630){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__13630))
,"list",((function (G__13630){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__13630))
,"cmap",((function (G__13630){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__13632 = (i + (2));
var G__13633 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__13632;
ret = G__13633;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__13630))
], null),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$22)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__13630,G__13631) : com.cognitect.transit.reader.call(null,G__13630,G__13631));
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/SymbolHandler");
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
var seq__13634_13640 = cljs.core.seq(v);
var chunk__13635_13641 = null;
var count__13636_13642 = (0);
var i__13637_13643 = (0);
while(true){
if((i__13637_13643 < count__13636_13642)){
var x_13644 = chunk__13635_13641.cljs$core$IIndexed$_nth$arity$2(null,i__13637_13643);
ret.push(x_13644);

var G__13645 = seq__13634_13640;
var G__13646 = chunk__13635_13641;
var G__13647 = count__13636_13642;
var G__13648 = (i__13637_13643 + (1));
seq__13634_13640 = G__13645;
chunk__13635_13641 = G__13646;
count__13636_13642 = G__13647;
i__13637_13643 = G__13648;
continue;
} else {
var temp__4126__auto___13649 = cljs.core.seq(seq__13634_13640);
if(temp__4126__auto___13649){
var seq__13634_13650__$1 = temp__4126__auto___13649;
if(cljs.core.chunked_seq_QMARK_(seq__13634_13650__$1)){
var c__4530__auto___13651 = cljs.core.chunk_first(seq__13634_13650__$1);
var G__13652 = cljs.core.chunk_rest(seq__13634_13650__$1);
var G__13653 = c__4530__auto___13651;
var G__13654 = cljs.core.count(c__4530__auto___13651);
var G__13655 = (0);
seq__13634_13640 = G__13652;
chunk__13635_13641 = G__13653;
count__13636_13642 = G__13654;
i__13637_13643 = G__13655;
continue;
} else {
var x_13656 = cljs.core.first(seq__13634_13650__$1);
ret.push(x_13656);

var G__13657 = cljs.core.next(seq__13634_13650__$1);
var G__13658 = null;
var G__13659 = (0);
var G__13660 = (0);
seq__13634_13640 = G__13657;
chunk__13635_13641 = G__13658;
count__13636_13642 = G__13659;
i__13637_13643 = G__13660;
continue;
}
} else {
}
}
break;
}

var G__13638 = "array";
var G__13639 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__13638,G__13639) : com.cognitect.transit.tagged.call(null,G__13638,G__13639));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/MapHandler");
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
var seq__13661_13667 = cljs.core.seq(v);
var chunk__13662_13668 = null;
var count__13663_13669 = (0);
var i__13664_13670 = (0);
while(true){
if((i__13664_13670 < count__13663_13669)){
var x_13671 = chunk__13662_13668.cljs$core$IIndexed$_nth$arity$2(null,i__13664_13670);
ret.push(x_13671);

var G__13672 = seq__13661_13667;
var G__13673 = chunk__13662_13668;
var G__13674 = count__13663_13669;
var G__13675 = (i__13664_13670 + (1));
seq__13661_13667 = G__13672;
chunk__13662_13668 = G__13673;
count__13663_13669 = G__13674;
i__13664_13670 = G__13675;
continue;
} else {
var temp__4126__auto___13676 = cljs.core.seq(seq__13661_13667);
if(temp__4126__auto___13676){
var seq__13661_13677__$1 = temp__4126__auto___13676;
if(cljs.core.chunked_seq_QMARK_(seq__13661_13677__$1)){
var c__4530__auto___13678 = cljs.core.chunk_first(seq__13661_13677__$1);
var G__13679 = cljs.core.chunk_rest(seq__13661_13677__$1);
var G__13680 = c__4530__auto___13678;
var G__13681 = cljs.core.count(c__4530__auto___13678);
var G__13682 = (0);
seq__13661_13667 = G__13679;
chunk__13662_13668 = G__13680;
count__13663_13669 = G__13681;
i__13664_13670 = G__13682;
continue;
} else {
var x_13683 = cljs.core.first(seq__13661_13677__$1);
ret.push(x_13683);

var G__13684 = cljs.core.next(seq__13661_13677__$1);
var G__13685 = null;
var G__13686 = (0);
var G__13687 = (0);
seq__13661_13667 = G__13684;
chunk__13662_13668 = G__13685;
count__13663_13669 = G__13686;
i__13664_13670 = G__13687;
continue;
}
} else {
}
}
break;
}

var G__13665 = "array";
var G__13666 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__13665,G__13666) : com.cognitect.transit.tagged.call(null,G__13665,G__13666));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/SetHandler");
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
var seq__13688_13692 = cljs.core.seq(v);
var chunk__13689_13693 = null;
var count__13690_13694 = (0);
var i__13691_13695 = (0);
while(true){
if((i__13691_13695 < count__13690_13694)){
var x_13696 = chunk__13689_13693.cljs$core$IIndexed$_nth$arity$2(null,i__13691_13695);
ret.push(x_13696);

var G__13697 = seq__13688_13692;
var G__13698 = chunk__13689_13693;
var G__13699 = count__13690_13694;
var G__13700 = (i__13691_13695 + (1));
seq__13688_13692 = G__13697;
chunk__13689_13693 = G__13698;
count__13690_13694 = G__13699;
i__13691_13695 = G__13700;
continue;
} else {
var temp__4126__auto___13701 = cljs.core.seq(seq__13688_13692);
if(temp__4126__auto___13701){
var seq__13688_13702__$1 = temp__4126__auto___13701;
if(cljs.core.chunked_seq_QMARK_(seq__13688_13702__$1)){
var c__4530__auto___13703 = cljs.core.chunk_first(seq__13688_13702__$1);
var G__13704 = cljs.core.chunk_rest(seq__13688_13702__$1);
var G__13705 = c__4530__auto___13703;
var G__13706 = cljs.core.count(c__4530__auto___13703);
var G__13707 = (0);
seq__13688_13692 = G__13704;
chunk__13689_13693 = G__13705;
count__13690_13694 = G__13706;
i__13691_13695 = G__13707;
continue;
} else {
var x_13708 = cljs.core.first(seq__13688_13702__$1);
ret.push(x_13708);

var G__13709 = cljs.core.next(seq__13688_13702__$1);
var G__13710 = null;
var G__13711 = (0);
var G__13712 = (0);
seq__13688_13692 = G__13709;
chunk__13689_13693 = G__13710;
count__13690_13694 = G__13711;
i__13691_13695 = G__13712;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/UUIDHandler");
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
var G__13731 = cljs.core.name(type);
var G__13732 = cognitect.transit.opts_merge({"unpack": ((function (G__13731,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__13731,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x13736 = cljs.core.clone(handlers);
x13736.forEach = ((function (x13736,G__13731,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__13737 = cljs.core.seq(coll);
var chunk__13738 = null;
var count__13739 = (0);
var i__13740 = (0);
while(true){
if((i__13740 < count__13739)){
var vec__13741 = chunk__13738.cljs$core$IIndexed$_nth$arity$2(null,i__13740);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13741,(1),null);
var G__13742_13747 = v;
var G__13743_13748 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13742_13747,G__13743_13748) : f.call(null,G__13742_13747,G__13743_13748));

var G__13749 = seq__13737;
var G__13750 = chunk__13738;
var G__13751 = count__13739;
var G__13752 = (i__13740 + (1));
seq__13737 = G__13749;
chunk__13738 = G__13750;
count__13739 = G__13751;
i__13740 = G__13752;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__13737);
if(temp__4126__auto__){
var seq__13737__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13737__$1)){
var c__4530__auto__ = cljs.core.chunk_first(seq__13737__$1);
var G__13753 = cljs.core.chunk_rest(seq__13737__$1);
var G__13754 = c__4530__auto__;
var G__13755 = cljs.core.count(c__4530__auto__);
var G__13756 = (0);
seq__13737 = G__13753;
chunk__13738 = G__13754;
count__13739 = G__13755;
i__13740 = G__13756;
continue;
} else {
var vec__13744 = cljs.core.first(seq__13737__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13744,(1),null);
var G__13745_13757 = v;
var G__13746_13758 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13745_13757,G__13746_13758) : f.call(null,G__13745_13757,G__13746_13758));

var G__13759 = cljs.core.next(seq__13737__$1);
var G__13760 = null;
var G__13761 = (0);
var G__13762 = (0);
seq__13737 = G__13759;
chunk__13738 = G__13760;
count__13739 = G__13761;
i__13740 = G__13762;
continue;
}
} else {
return null;
}
}
break;
}
});})(x13736,G__13731,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x13736;
})(), "objectBuilder": ((function (G__13731,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__13731,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__13733 = obj;
G__13733.push((function (){var G__13734 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__13734) : kfn.call(null,G__13734));
})(),(function (){var G__13735 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__13735) : vfn.call(null,G__13735));
})());

return G__13733;
});})(G__13731,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__13731,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$22)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__13731,G__13732) : com.cognitect.transit.writer.call(null,G__13731,G__13732));
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
if(typeof cognitect.transit.t13777 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t13777 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta13778){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta13778 = meta13778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t13777.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__13780 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__13780) : self__.tag_fn.call(null,G__13780));
});

cognitect.transit.t13777.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__13781 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__13781) : self__.rep_fn.call(null,G__13781));
});

cognitect.transit.t13777.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__13782 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__13782) : self__.str_rep_fn.call(null,G__13782));
} else {
return null;
}
});

cognitect.transit.t13777.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t13777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13779){
var self__ = this;
var _13779__$1 = this;
return self__.meta13778;
});

cognitect.transit.t13777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13779,meta13778__$1){
var self__ = this;
var _13779__$1 = this;
return (new cognitect.transit.t13777(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta13778__$1));
});

cognitect.transit.t13777.cljs$lang$type = true;

cognitect.transit.t13777.cljs$lang$ctorStr = "cognitect.transit/t13777";

cognitect.transit.t13777.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write(writer__4331__auto__,"cognitect.transit/t13777");
});

cognitect.transit.__GT_t13777 = (function __GT_t13777(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta13778){
return (new cognitect.transit.t13777(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta13778));
});

}

return (new cognitect.transit.t13777(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"D:\\prog\\projects\\pure\\clojure\\shoplist\\resources\\public\\js\\out\\cognitect\\transit.cljs"], null)));
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
var G__13785 = tag;
var G__13786 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__13785,G__13786) : com.cognitect.transit.types.taggedValue.call(null,G__13785,G__13786));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__13788 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__13788) : com.cognitect.transit.types.isTaggedValue.call(null,G__13788));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__13790 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__13790) : com.cognitect.transit.types.integer.call(null,G__13790));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__13792 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__13792) : com.cognitect.transit.types.isInteger.call(null,G__13792));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__13794 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__13794) : com.cognitect.transit.types.bigInteger.call(null,G__13794));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__13796 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__13796) : com.cognitect.transit.types.isBigInteger.call(null,G__13796));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__13798 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__13798) : com.cognitect.transit.types.bigDecimalValue.call(null,G__13798));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__13800 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__13800) : com.cognitect.transit.types.isBigDecimal.call(null,G__13800));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__13802 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__13802) : com.cognitect.transit.types.uri.call(null,G__13802));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__13804 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__13804) : com.cognitect.transit.types.isURI.call(null,G__13804));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__13806 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__13806) : com.cognitect.transit.types.uuid.call(null,G__13806));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__13808 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__13808) : com.cognitect.transit.types.isUUID.call(null,G__13808));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__13810 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__13810) : com.cognitect.transit.types.binary.call(null,G__13810));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__13812 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__13812) : com.cognitect.transit.types.isBinary.call(null,G__13812));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__13814 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__13814) : com.cognitect.transit.types.quoted.call(null,G__13814));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__13816 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__13816) : com.cognitect.transit.types.isQuoted.call(null,G__13816));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__13818 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__13818) : com.cognitect.transit.types.link.call(null,G__13818));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__13820 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__13820) : com.cognitect.transit.types.isLink.call(null,G__13820));
});
