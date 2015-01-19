// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('cognitect.transit')) {
goog.provide('cognitect.transit');
}
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
return cljs.core._equiv.call(null,other,this$__$1);
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
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__6711_6715 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__6712_6716 = null;
var count__6713_6717 = (0);
var i__6714_6718 = (0);
while(true){
if((i__6714_6718 < count__6713_6717)){
var k_6719 = cljs.core._nth.call(null,chunk__6712_6716,i__6714_6718);
var v_6720 = (b[k_6719]);
(a[k_6719] = v_6720);

var G__6721 = seq__6711_6715;
var G__6722 = chunk__6712_6716;
var G__6723 = count__6713_6717;
var G__6724 = (i__6714_6718 + (1));
seq__6711_6715 = G__6721;
chunk__6712_6716 = G__6722;
count__6713_6717 = G__6723;
i__6714_6718 = G__6724;
continue;
} else {
var temp__4126__auto___6725 = cljs.core.seq.call(null,seq__6711_6715);
if(temp__4126__auto___6725){
var seq__6711_6726__$1 = temp__4126__auto___6725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6711_6726__$1)){
var c__4512__auto___6727 = cljs.core.chunk_first.call(null,seq__6711_6726__$1);
var G__6728 = cljs.core.chunk_rest.call(null,seq__6711_6726__$1);
var G__6729 = c__4512__auto___6727;
var G__6730 = cljs.core.count.call(null,c__4512__auto___6727);
var G__6731 = (0);
seq__6711_6715 = G__6728;
chunk__6712_6716 = G__6729;
count__6713_6717 = G__6730;
i__6714_6718 = G__6731;
continue;
} else {
var k_6732 = cljs.core.first.call(null,seq__6711_6726__$1);
var v_6733 = (b[k_6732]);
(a[k_6732] = v_6733);

var G__6734 = cljs.core.next.call(null,seq__6711_6726__$1);
var G__6735 = null;
var G__6736 = (0);
var G__6737 = (0);
seq__6711_6715 = G__6734;
chunk__6712_6716 = G__6735;
count__6713_6717 = G__6736;
i__6714_6718 = G__6737;
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
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/MapBuilder");
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
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/VectorBuilder");
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
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__6738 = (i + (2));
var G__6739 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6738;
ret = G__6739;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/SymbolHandler");
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
var seq__6740_6744 = cljs.core.seq.call(null,v);
var chunk__6741_6745 = null;
var count__6742_6746 = (0);
var i__6743_6747 = (0);
while(true){
if((i__6743_6747 < count__6742_6746)){
var x_6748 = cljs.core._nth.call(null,chunk__6741_6745,i__6743_6747);
ret.push(x_6748);

var G__6749 = seq__6740_6744;
var G__6750 = chunk__6741_6745;
var G__6751 = count__6742_6746;
var G__6752 = (i__6743_6747 + (1));
seq__6740_6744 = G__6749;
chunk__6741_6745 = G__6750;
count__6742_6746 = G__6751;
i__6743_6747 = G__6752;
continue;
} else {
var temp__4126__auto___6753 = cljs.core.seq.call(null,seq__6740_6744);
if(temp__4126__auto___6753){
var seq__6740_6754__$1 = temp__4126__auto___6753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6740_6754__$1)){
var c__4512__auto___6755 = cljs.core.chunk_first.call(null,seq__6740_6754__$1);
var G__6756 = cljs.core.chunk_rest.call(null,seq__6740_6754__$1);
var G__6757 = c__4512__auto___6755;
var G__6758 = cljs.core.count.call(null,c__4512__auto___6755);
var G__6759 = (0);
seq__6740_6744 = G__6756;
chunk__6741_6745 = G__6757;
count__6742_6746 = G__6758;
i__6743_6747 = G__6759;
continue;
} else {
var x_6760 = cljs.core.first.call(null,seq__6740_6754__$1);
ret.push(x_6760);

var G__6761 = cljs.core.next.call(null,seq__6740_6754__$1);
var G__6762 = null;
var G__6763 = (0);
var G__6764 = (0);
seq__6740_6744 = G__6761;
chunk__6741_6745 = G__6762;
count__6742_6746 = G__6763;
i__6743_6747 = G__6764;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/MapHandler");
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
var seq__6765_6769 = cljs.core.seq.call(null,v);
var chunk__6766_6770 = null;
var count__6767_6771 = (0);
var i__6768_6772 = (0);
while(true){
if((i__6768_6772 < count__6767_6771)){
var x_6773 = cljs.core._nth.call(null,chunk__6766_6770,i__6768_6772);
ret.push(x_6773);

var G__6774 = seq__6765_6769;
var G__6775 = chunk__6766_6770;
var G__6776 = count__6767_6771;
var G__6777 = (i__6768_6772 + (1));
seq__6765_6769 = G__6774;
chunk__6766_6770 = G__6775;
count__6767_6771 = G__6776;
i__6768_6772 = G__6777;
continue;
} else {
var temp__4126__auto___6778 = cljs.core.seq.call(null,seq__6765_6769);
if(temp__4126__auto___6778){
var seq__6765_6779__$1 = temp__4126__auto___6778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6765_6779__$1)){
var c__4512__auto___6780 = cljs.core.chunk_first.call(null,seq__6765_6779__$1);
var G__6781 = cljs.core.chunk_rest.call(null,seq__6765_6779__$1);
var G__6782 = c__4512__auto___6780;
var G__6783 = cljs.core.count.call(null,c__4512__auto___6780);
var G__6784 = (0);
seq__6765_6769 = G__6781;
chunk__6766_6770 = G__6782;
count__6767_6771 = G__6783;
i__6768_6772 = G__6784;
continue;
} else {
var x_6785 = cljs.core.first.call(null,seq__6765_6779__$1);
ret.push(x_6785);

var G__6786 = cljs.core.next.call(null,seq__6765_6779__$1);
var G__6787 = null;
var G__6788 = (0);
var G__6789 = (0);
seq__6765_6769 = G__6786;
chunk__6766_6770 = G__6787;
count__6767_6771 = G__6788;
i__6768_6772 = G__6789;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/SetHandler");
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
var seq__6790_6794 = cljs.core.seq.call(null,v);
var chunk__6791_6795 = null;
var count__6792_6796 = (0);
var i__6793_6797 = (0);
while(true){
if((i__6793_6797 < count__6792_6796)){
var x_6798 = cljs.core._nth.call(null,chunk__6791_6795,i__6793_6797);
ret.push(x_6798);

var G__6799 = seq__6790_6794;
var G__6800 = chunk__6791_6795;
var G__6801 = count__6792_6796;
var G__6802 = (i__6793_6797 + (1));
seq__6790_6794 = G__6799;
chunk__6791_6795 = G__6800;
count__6792_6796 = G__6801;
i__6793_6797 = G__6802;
continue;
} else {
var temp__4126__auto___6803 = cljs.core.seq.call(null,seq__6790_6794);
if(temp__4126__auto___6803){
var seq__6790_6804__$1 = temp__4126__auto___6803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6790_6804__$1)){
var c__4512__auto___6805 = cljs.core.chunk_first.call(null,seq__6790_6804__$1);
var G__6806 = cljs.core.chunk_rest.call(null,seq__6790_6804__$1);
var G__6807 = c__4512__auto___6805;
var G__6808 = cljs.core.count.call(null,c__4512__auto___6805);
var G__6809 = (0);
seq__6790_6794 = G__6806;
chunk__6791_6795 = G__6807;
count__6792_6796 = G__6808;
i__6793_6797 = G__6809;
continue;
} else {
var x_6810 = cljs.core.first.call(null,seq__6790_6804__$1);
ret.push(x_6810);

var G__6811 = cljs.core.next.call(null,seq__6790_6804__$1);
var G__6812 = null;
var G__6813 = (0);
var G__6814 = (0);
seq__6790_6794 = G__6811;
chunk__6791_6795 = G__6812;
count__6792_6796 = G__6813;
i__6793_6797 = G__6814;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/UUIDHandler");
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
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x6824 = cljs.core.clone.call(null,handlers);
x6824.forEach = ((function (x6824,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__6825 = cljs.core.seq.call(null,coll);
var chunk__6826 = null;
var count__6827 = (0);
var i__6828 = (0);
while(true){
if((i__6828 < count__6827)){
var vec__6829 = cljs.core._nth.call(null,chunk__6826,i__6828);
var k = cljs.core.nth.call(null,vec__6829,(0),null);
var v = cljs.core.nth.call(null,vec__6829,(1),null);
f.call(null,v,k);

var G__6831 = seq__6825;
var G__6832 = chunk__6826;
var G__6833 = count__6827;
var G__6834 = (i__6828 + (1));
seq__6825 = G__6831;
chunk__6826 = G__6832;
count__6827 = G__6833;
i__6828 = G__6834;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6825);
if(temp__4126__auto__){
var seq__6825__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6825__$1)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,seq__6825__$1);
var G__6835 = cljs.core.chunk_rest.call(null,seq__6825__$1);
var G__6836 = c__4512__auto__;
var G__6837 = cljs.core.count.call(null,c__4512__auto__);
var G__6838 = (0);
seq__6825 = G__6835;
chunk__6826 = G__6836;
count__6827 = G__6837;
i__6828 = G__6838;
continue;
} else {
var vec__6830 = cljs.core.first.call(null,seq__6825__$1);
var k = cljs.core.nth.call(null,vec__6830,(0),null);
var v = cljs.core.nth.call(null,vec__6830,(1),null);
f.call(null,v,k);

var G__6839 = cljs.core.next.call(null,seq__6825__$1);
var G__6840 = null;
var G__6841 = (0);
var G__6842 = (0);
seq__6825 = G__6839;
chunk__6826 = G__6840;
count__6827 = G__6841;
i__6828 = G__6842;
continue;
}
} else {
return null;
}
}
break;
}
});})(x6824,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x6824;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__6823 = obj;
G__6823.push(kfn.call(null,k),vfn.call(null,v));

return G__6823;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t6846 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t6846 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta6847){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta6847 = meta6847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t6846.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t6846.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t6846.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t6846.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t6846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6848){
var self__ = this;
var _6848__$1 = this;
return self__.meta6847;
});

cognitect.transit.t6846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6848,meta6847__$1){
var self__ = this;
var _6848__$1 = this;
return (new cognitect.transit.t6846(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta6847__$1));
});

cognitect.transit.t6846.cljs$lang$type = true;

cognitect.transit.t6846.cljs$lang$ctorStr = "cognitect.transit/t6846";

cognitect.transit.t6846.cljs$lang$ctorPrWriter = (function (this__4312__auto__,writer__4313__auto__,opt__4314__auto__){
return cljs.core._write.call(null,writer__4313__auto__,"cognitect.transit/t6846");
});

cognitect.transit.__GT_t6846 = (function __GT_t6846(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6847){
return (new cognitect.transit.t6846(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6847));
});

}

return (new cognitect.transit.t6846(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),259,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),254,new cljs.core.Keyword(null,"file","file",-1269645878),"D:\\prog\\projects\\pure\\clojure\\shoplist\\resources\\public\\js\\out\\cognitect\\transit.cljs"], null)));
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
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map