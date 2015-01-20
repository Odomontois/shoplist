// Compiled by ClojureScript 0.0-2665 {}
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
var seq__7131_7135 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__7132_7136 = null;
var count__7133_7137 = (0);
var i__7134_7138 = (0);
while(true){
if((i__7134_7138 < count__7133_7137)){
var k_7139 = cljs.core._nth.call(null,chunk__7132_7136,i__7134_7138);
var v_7140 = (b[k_7139]);
(a[k_7139] = v_7140);

var G__7141 = seq__7131_7135;
var G__7142 = chunk__7132_7136;
var G__7143 = count__7133_7137;
var G__7144 = (i__7134_7138 + (1));
seq__7131_7135 = G__7141;
chunk__7132_7136 = G__7142;
count__7133_7137 = G__7143;
i__7134_7138 = G__7144;
continue;
} else {
var temp__4126__auto___7145 = cljs.core.seq.call(null,seq__7131_7135);
if(temp__4126__auto___7145){
var seq__7131_7146__$1 = temp__4126__auto___7145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7131_7146__$1)){
var c__4530__auto___7147 = cljs.core.chunk_first.call(null,seq__7131_7146__$1);
var G__7148 = cljs.core.chunk_rest.call(null,seq__7131_7146__$1);
var G__7149 = c__4530__auto___7147;
var G__7150 = cljs.core.count.call(null,c__4530__auto___7147);
var G__7151 = (0);
seq__7131_7135 = G__7148;
chunk__7132_7136 = G__7149;
count__7133_7137 = G__7150;
i__7134_7138 = G__7151;
continue;
} else {
var k_7152 = cljs.core.first.call(null,seq__7131_7146__$1);
var v_7153 = (b[k_7152]);
(a[k_7152] = v_7153);

var G__7154 = cljs.core.next.call(null,seq__7131_7146__$1);
var G__7155 = null;
var G__7156 = (0);
var G__7157 = (0);
seq__7131_7135 = G__7154;
chunk__7132_7136 = G__7155;
count__7133_7137 = G__7156;
i__7134_7138 = G__7157;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/VectorBuilder");
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
var G__7158 = (i + (2));
var G__7159 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__7158;
ret = G__7159;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/KeywordHandler");
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
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/SymbolHandler");
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
var seq__7160_7164 = cljs.core.seq.call(null,v);
var chunk__7161_7165 = null;
var count__7162_7166 = (0);
var i__7163_7167 = (0);
while(true){
if((i__7163_7167 < count__7162_7166)){
var x_7168 = cljs.core._nth.call(null,chunk__7161_7165,i__7163_7167);
ret.push(x_7168);

var G__7169 = seq__7160_7164;
var G__7170 = chunk__7161_7165;
var G__7171 = count__7162_7166;
var G__7172 = (i__7163_7167 + (1));
seq__7160_7164 = G__7169;
chunk__7161_7165 = G__7170;
count__7162_7166 = G__7171;
i__7163_7167 = G__7172;
continue;
} else {
var temp__4126__auto___7173 = cljs.core.seq.call(null,seq__7160_7164);
if(temp__4126__auto___7173){
var seq__7160_7174__$1 = temp__4126__auto___7173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7160_7174__$1)){
var c__4530__auto___7175 = cljs.core.chunk_first.call(null,seq__7160_7174__$1);
var G__7176 = cljs.core.chunk_rest.call(null,seq__7160_7174__$1);
var G__7177 = c__4530__auto___7175;
var G__7178 = cljs.core.count.call(null,c__4530__auto___7175);
var G__7179 = (0);
seq__7160_7164 = G__7176;
chunk__7161_7165 = G__7177;
count__7162_7166 = G__7178;
i__7163_7167 = G__7179;
continue;
} else {
var x_7180 = cljs.core.first.call(null,seq__7160_7174__$1);
ret.push(x_7180);

var G__7181 = cljs.core.next.call(null,seq__7160_7174__$1);
var G__7182 = null;
var G__7183 = (0);
var G__7184 = (0);
seq__7160_7164 = G__7181;
chunk__7161_7165 = G__7182;
count__7162_7166 = G__7183;
i__7163_7167 = G__7184;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/ListHandler");
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
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/MapHandler");
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
var seq__7185_7189 = cljs.core.seq.call(null,v);
var chunk__7186_7190 = null;
var count__7187_7191 = (0);
var i__7188_7192 = (0);
while(true){
if((i__7188_7192 < count__7187_7191)){
var x_7193 = cljs.core._nth.call(null,chunk__7186_7190,i__7188_7192);
ret.push(x_7193);

var G__7194 = seq__7185_7189;
var G__7195 = chunk__7186_7190;
var G__7196 = count__7187_7191;
var G__7197 = (i__7188_7192 + (1));
seq__7185_7189 = G__7194;
chunk__7186_7190 = G__7195;
count__7187_7191 = G__7196;
i__7188_7192 = G__7197;
continue;
} else {
var temp__4126__auto___7198 = cljs.core.seq.call(null,seq__7185_7189);
if(temp__4126__auto___7198){
var seq__7185_7199__$1 = temp__4126__auto___7198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7185_7199__$1)){
var c__4530__auto___7200 = cljs.core.chunk_first.call(null,seq__7185_7199__$1);
var G__7201 = cljs.core.chunk_rest.call(null,seq__7185_7199__$1);
var G__7202 = c__4530__auto___7200;
var G__7203 = cljs.core.count.call(null,c__4530__auto___7200);
var G__7204 = (0);
seq__7185_7189 = G__7201;
chunk__7186_7190 = G__7202;
count__7187_7191 = G__7203;
i__7188_7192 = G__7204;
continue;
} else {
var x_7205 = cljs.core.first.call(null,seq__7185_7199__$1);
ret.push(x_7205);

var G__7206 = cljs.core.next.call(null,seq__7185_7199__$1);
var G__7207 = null;
var G__7208 = (0);
var G__7209 = (0);
seq__7185_7189 = G__7206;
chunk__7186_7190 = G__7207;
count__7187_7191 = G__7208;
i__7188_7192 = G__7209;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/SetHandler");
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
var seq__7210_7214 = cljs.core.seq.call(null,v);
var chunk__7211_7215 = null;
var count__7212_7216 = (0);
var i__7213_7217 = (0);
while(true){
if((i__7213_7217 < count__7212_7216)){
var x_7218 = cljs.core._nth.call(null,chunk__7211_7215,i__7213_7217);
ret.push(x_7218);

var G__7219 = seq__7210_7214;
var G__7220 = chunk__7211_7215;
var G__7221 = count__7212_7216;
var G__7222 = (i__7213_7217 + (1));
seq__7210_7214 = G__7219;
chunk__7211_7215 = G__7220;
count__7212_7216 = G__7221;
i__7213_7217 = G__7222;
continue;
} else {
var temp__4126__auto___7223 = cljs.core.seq.call(null,seq__7210_7214);
if(temp__4126__auto___7223){
var seq__7210_7224__$1 = temp__4126__auto___7223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7210_7224__$1)){
var c__4530__auto___7225 = cljs.core.chunk_first.call(null,seq__7210_7224__$1);
var G__7226 = cljs.core.chunk_rest.call(null,seq__7210_7224__$1);
var G__7227 = c__4530__auto___7225;
var G__7228 = cljs.core.count.call(null,c__4530__auto___7225);
var G__7229 = (0);
seq__7210_7214 = G__7226;
chunk__7211_7215 = G__7227;
count__7212_7216 = G__7228;
i__7213_7217 = G__7229;
continue;
} else {
var x_7230 = cljs.core.first.call(null,seq__7210_7224__$1);
ret.push(x_7230);

var G__7231 = cljs.core.next.call(null,seq__7210_7224__$1);
var G__7232 = null;
var G__7233 = (0);
var G__7234 = (0);
seq__7210_7214 = G__7231;
chunk__7211_7215 = G__7232;
count__7212_7216 = G__7233;
i__7213_7217 = G__7234;
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
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/VectorHandler");
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
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/UUIDHandler");
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
, "handlers": (function (){var x7244 = cljs.core.clone.call(null,handlers);
x7244.forEach = ((function (x7244,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__7245 = cljs.core.seq.call(null,coll);
var chunk__7246 = null;
var count__7247 = (0);
var i__7248 = (0);
while(true){
if((i__7248 < count__7247)){
var vec__7249 = cljs.core._nth.call(null,chunk__7246,i__7248);
var k = cljs.core.nth.call(null,vec__7249,(0),null);
var v = cljs.core.nth.call(null,vec__7249,(1),null);
f.call(null,v,k);

var G__7251 = seq__7245;
var G__7252 = chunk__7246;
var G__7253 = count__7247;
var G__7254 = (i__7248 + (1));
seq__7245 = G__7251;
chunk__7246 = G__7252;
count__7247 = G__7253;
i__7248 = G__7254;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7245);
if(temp__4126__auto__){
var seq__7245__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7245__$1)){
var c__4530__auto__ = cljs.core.chunk_first.call(null,seq__7245__$1);
var G__7255 = cljs.core.chunk_rest.call(null,seq__7245__$1);
var G__7256 = c__4530__auto__;
var G__7257 = cljs.core.count.call(null,c__4530__auto__);
var G__7258 = (0);
seq__7245 = G__7255;
chunk__7246 = G__7256;
count__7247 = G__7257;
i__7248 = G__7258;
continue;
} else {
var vec__7250 = cljs.core.first.call(null,seq__7245__$1);
var k = cljs.core.nth.call(null,vec__7250,(0),null);
var v = cljs.core.nth.call(null,vec__7250,(1),null);
f.call(null,v,k);

var G__7259 = cljs.core.next.call(null,seq__7245__$1);
var G__7260 = null;
var G__7261 = (0);
var G__7262 = (0);
seq__7245 = G__7259;
chunk__7246 = G__7260;
count__7247 = G__7261;
i__7248 = G__7262;
continue;
}
} else {
return null;
}
}
break;
}
});})(x7244,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x7244;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__7243 = obj;
G__7243.push(kfn.call(null,k),vfn.call(null,v));

return G__7243;
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
if(typeof cognitect.transit.t7266 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t7266 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta7267){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta7267 = meta7267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t7266.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t7266.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t7266.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t7266.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t7266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7268){
var self__ = this;
var _7268__$1 = this;
return self__.meta7267;
});

cognitect.transit.t7266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7268,meta7267__$1){
var self__ = this;
var _7268__$1 = this;
return (new cognitect.transit.t7266(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta7267__$1));
});

cognitect.transit.t7266.cljs$lang$type = true;

cognitect.transit.t7266.cljs$lang$ctorStr = "cognitect.transit/t7266";

cognitect.transit.t7266.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write.call(null,writer__4331__auto__,"cognitect.transit/t7266");
});

cognitect.transit.__GT_t7266 = (function __GT_t7266(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta7267){
return (new cognitect.transit.t7266(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta7267));
});

}

return (new cognitect.transit.t7266(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),259,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),254,new cljs.core.Keyword(null,"file","file",-1269645878),"D:\\prog\\projects\\pure\\clojure\\shoplist\\resources\\public\\js\\out\\cognitect\\transit.cljs"], null)));
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