// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('reagent_forms.core')) {
goog.provide('reagent_forms.core');
}
goog.require('cljs.core');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
return cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,cljs.core.name.call(null,id),/\./));
}));
reagent_forms.core.set_doc_value = (function set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__13643_SHARP_,p2__13642_SHARP_){
var or__3743__auto__ = p2__13642_SHARP_.call(null,path,value,p1__13643_SHARP_);
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return p1__13643_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.format_type = (function (){var method_table__4640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4644__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4644__auto__,method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function format_value(fmt,value){
if(cljs.core.truth_((function (){var and__3731__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__3731__auto__){
return fmt;
} else {
return and__3731__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
if(reagent_forms.core.valid_number_ending_QMARK_.call(null,n)){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
reagent_forms.core.bind = (function (){var method_table__4640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4644__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__){
return (function (p__13644,_){
var map__13645 = p__13644;
var map__13645__$1 = ((cljs.core.seq_QMARK_.call(null,map__13645))?cljs.core.apply.call(null,cljs.core.hash_map,map__13645):map__13645);
var field = cljs.core.get.call(null,map__13645__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4644__auto__,method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__13647,p__13648){
var map__13649 = p__13647;
var map__13649__$1 = ((cljs.core.seq_QMARK_.call(null,map__13649))?cljs.core.apply.call(null,cljs.core.hash_map,map__13649):map__13649);
var fmt = cljs.core.get.call(null,map__13649__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__13649__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__13649__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var map__13650 = p__13648;
var map__13650__$1 = ((cljs.core.seq_QMARK_.call(null,map__13650))?cljs.core.apply.call(null,cljs.core.hash_map,map__13650):map__13650);
var save_BANG_ = cljs.core.get.call(null,map__13650__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__13650__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__3743__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__13649,map__13649__$1,fmt,id,field,map__13650,map__13650__$1,save_BANG_,get){
return (function (p1__13646_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__13646_SHARP_)));
});})(map__13649,map__13649__$1,fmt,id,field,map__13650,map__13650__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__13651,p__13652){
var map__13653 = p__13651;
var map__13653__$1 = ((cljs.core.seq_QMARK_.call(null,map__13653))?cljs.core.apply.call(null,cljs.core.hash_map,map__13653):map__13653);
var id = cljs.core.get.call(null,map__13653__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__13654 = p__13652;
var map__13654__$1 = ((cljs.core.seq_QMARK_.call(null,map__13654))?cljs.core.apply.call(null,cljs.core.hash_map,map__13654):map__13654);
var save_BANG_ = cljs.core.get.call(null,map__13654__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__13654__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__13653,map__13653__$1,id,map__13654,map__13654__$1,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__13653,map__13653__$1,id,map__13654,map__13654__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__13655,opts,p__13656){
var vec__13659 = p__13655;
var type = cljs.core.nth.call(null,vec__13659,(0),null);
var attrs = cljs.core.nth.call(null,vec__13659,(1),null);
var body = cljs.core.nthnext.call(null,vec__13659,(2));
var vec__13660 = p__13656;
var default_attrs = cljs.core.nth.call(null,vec__13660,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
};
var set_attrs = function (p__13655,opts,var_args){
var p__13656 = null;
if (arguments.length > 2) {
var G__13661__i = 0, G__13661__a = new Array(arguments.length -  2);
while (G__13661__i < G__13661__a.length) {G__13661__a[G__13661__i] = arguments[G__13661__i + 2]; ++G__13661__i;}
  p__13656 = new cljs.core.IndexedSeq(G__13661__a,0);
} 
return set_attrs__delegate.call(this,p__13655,opts,p__13656);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__13662){
var p__13655 = cljs.core.first(arglist__13662);
arglist__13662 = cljs.core.next(arglist__13662);
var opts = cljs.core.first(arglist__13662);
var p__13656 = cljs.core.rest(arglist__13662);
return set_attrs__delegate(p__13655,opts,p__13656);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__4640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4644__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__){
return (function (p__13663,_){
var vec__13664 = p__13663;
var ___$1 = cljs.core.nth.call(null,vec__13664,(0),null);
var map__13665 = cljs.core.nth.call(null,vec__13664,(1),null);
var map__13665__$1 = ((cljs.core.seq_QMARK_.call(null,map__13665))?cljs.core.apply.call(null,cljs.core.hash_map,map__13665):map__13665);
var field = cljs.core.get.call(null,map__13665__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4644__auto__,method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__13666,p__13667){
var vec__13668 = p__13666;
var _ = cljs.core.nth.call(null,vec__13668,(0),null);
var attrs = cljs.core.nth.call(null,vec__13668,(1),null);
var component = vec__13668;
var map__13669 = p__13667;
var map__13669__$1 = ((cljs.core.seq_QMARK_.call(null,map__13669))?cljs.core.apply.call(null,cljs.core.hash_map,map__13669):map__13669);
var doc = cljs.core.get.call(null,map__13669__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__13668,_,attrs,component,map__13669,map__13669__$1,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return component;
} else {
return null;
}
} else {
return component;
}
});
;})(vec__13668,_,attrs,component,map__13669,map__13669__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__13670,p__13671){
var vec__13672 = p__13670;
var _ = cljs.core.nth.call(null,vec__13672,(0),null);
var map__13673 = cljs.core.nth.call(null,vec__13672,(1),null);
var map__13673__$1 = ((cljs.core.seq_QMARK_.call(null,map__13673))?cljs.core.apply.call(null,cljs.core.hash_map,map__13673):map__13673);
var attrs = map__13673__$1;
var field = cljs.core.get.call(null,map__13673__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__13672;
var map__13674 = p__13671;
var map__13674__$1 = ((cljs.core.seq_QMARK_.call(null,map__13674))?cljs.core.apply.call(null,cljs.core.hash_map,map__13674):map__13674);
var opts = map__13674__$1;
var doc = cljs.core.get.call(null,map__13674__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__13672,_,map__13673,map__13673__$1,attrs,field,component,map__13674,map__13674__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__13672,_,map__13673,map__13673__$1,attrs,field,component,map__13674,map__13674__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__13676,p__13677){
var vec__13678 = p__13676;
var type = cljs.core.nth.call(null,vec__13678,(0),null);
var map__13679 = cljs.core.nth.call(null,vec__13678,(1),null);
var map__13679__$1 = ((cljs.core.seq_QMARK_.call(null,map__13679))?cljs.core.apply.call(null,cljs.core.hash_map,map__13679):map__13679);
var attrs = map__13679__$1;
var fmt = cljs.core.get.call(null,map__13679__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__13679__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__13680 = p__13677;
var map__13680__$1 = ((cljs.core.seq_QMARK_.call(null,map__13680))?cljs.core.apply.call(null,cljs.core.hash_map,map__13680):map__13680);
var save_BANG_ = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));
return ((function (display_value,vec__13678,type,map__13679,map__13679__$1,attrs,fmt,id,map__13680,map__13680__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__3743__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return "";
}
})();
var map__13681 = cljs.core.deref.call(null,display_value);
var map__13681__$1 = ((cljs.core.seq_QMARK_.call(null,map__13681))?cljs.core.apply.call(null,cljs.core.hash_map,map__13681):map__13681);
var value = cljs.core.get.call(null,map__13681__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__13681__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6624__auto__,temp__4124__auto__,display_value,vec__13678,type,map__13679,map__13679__$1,attrs,fmt,id,map__13680,map__13680__$1,save_BANG_,get,doc){
return (function (p1__13675_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__13675_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(visible__6624__auto__,temp__4124__auto__,display_value,vec__13678,type,map__13679,map__13679__$1,attrs,fmt,id,map__13680,map__13680__$1,save_BANG_,get,doc))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__3743__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return "";
}
})();
var map__13682 = cljs.core.deref.call(null,display_value);
var map__13682__$1 = ((cljs.core.seq_QMARK_.call(null,map__13682))?cljs.core.apply.call(null,cljs.core.hash_map,map__13682):map__13682);
var value = cljs.core.get.call(null,map__13682__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__13682__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,display_value,vec__13678,type,map__13679,map__13679__$1,attrs,fmt,id,map__13680,map__13680__$1,save_BANG_,get,doc){
return (function (p1__13675_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__13675_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(temp__4124__auto__,display_value,vec__13678,type,map__13679,map__13679__$1,attrs,fmt,id,map__13680,map__13680__$1,save_BANG_,get,doc))
], null),attrs)], null);
}
});
;})(display_value,vec__13678,type,map__13679,map__13679__$1,attrs,fmt,id,map__13680,map__13680__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__13684,p__13685){
var vec__13686 = p__13684;
var _ = cljs.core.nth.call(null,vec__13686,(0),null);
var map__13687 = cljs.core.nth.call(null,vec__13686,(1),null);
var map__13687__$1 = ((cljs.core.seq_QMARK_.call(null,map__13687))?cljs.core.apply.call(null,cljs.core.hash_map,map__13687):map__13687);
var attrs = map__13687__$1;
var auto_close_QMARK_ = cljs.core.get.call(null,map__13687__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var inline = cljs.core.get.call(null,map__13687__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var date_format = cljs.core.get.call(null,map__13687__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var id = cljs.core.get.call(null,map__13687__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__13688 = p__13685;
var map__13688__$1 = ((cljs.core.seq_QMARK_.call(null,map__13688))?cljs.core.apply.call(null,cljs.core.hash_map,map__13688):map__13688);
var save_BANG_ = cljs.core.get.call(null,map__13688__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__13688__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__13688__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__6624__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__6624__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__6624__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__6624__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__6624__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(visible__6624__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc))
,((function (visible__6624__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc){
return (function (p1__13683_SHARP_){
return save_BANG_.call(null,id,p1__13683_SHARP_);
});})(visible__6624__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc))
], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc))
,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc){
return (function (p1__13683_SHARP_){
return save_BANG_.call(null,id,p1__13683_SHARP_);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc))
], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__13686,_,map__13687,map__13687__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__13688,map__13688__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__13689,p__13690){
var vec__13691 = p__13689;
var _ = cljs.core.nth.call(null,vec__13691,(0),null);
var map__13692 = cljs.core.nth.call(null,vec__13691,(1),null);
var map__13692__$1 = ((cljs.core.seq_QMARK_.call(null,map__13692))?cljs.core.apply.call(null,cljs.core.hash_map,map__13692):map__13692);
var attrs = map__13692__$1;
var field = cljs.core.get.call(null,map__13692__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__13692__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var component = vec__13691;
var map__13693 = p__13690;
var map__13693__$1 = ((cljs.core.seq_QMARK_.call(null,map__13693))?cljs.core.apply.call(null,cljs.core.hash_map,map__13693):map__13693);
var opts = map__13693__$1;
var get = cljs.core.get.call(null,map__13693__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__13693__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__13691,_,map__13692,map__13692__$1,attrs,field,id,component,map__13693,map__13693__$1,opts,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__13691,_,map__13692,map__13692__$1,attrs,field,id,component,map__13693,map__13693__$1,opts,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__13694,p__13695){
var vec__13696 = p__13694;
var type = cljs.core.nth.call(null,vec__13696,(0),null);
var map__13697 = cljs.core.nth.call(null,vec__13696,(1),null);
var map__13697__$1 = ((cljs.core.seq_QMARK_.call(null,map__13697))?cljs.core.apply.call(null,cljs.core.hash_map,map__13697):map__13697);
var attrs = map__13697__$1;
var placeholder = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var postamble = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var preamble = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var id = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__13698 = p__13695;
var map__13698__$1 = ((cljs.core.seq_QMARK_.call(null,map__13698))?cljs.core.apply.call(null,cljs.core.hash_map,map__13698):map__13698);
var get = cljs.core.get.call(null,map__13698__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__13698__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__13696,type,map__13697,map__13697__$1,attrs,placeholder,postamble,preamble,id,map__13698,map__13698__$1,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__13696,type,map__13697,map__13697__$1,attrs,placeholder,postamble,preamble,id,map__13698,map__13698__$1,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__13699,p__13700){
var vec__13701 = p__13699;
var type = cljs.core.nth.call(null,vec__13701,(0),null);
var map__13702 = cljs.core.nth.call(null,vec__13701,(1),null);
var map__13702__$1 = ((cljs.core.seq_QMARK_.call(null,map__13702))?cljs.core.apply.call(null,cljs.core.hash_map,map__13702):map__13702);
var attrs = map__13702__$1;
var touch_event = cljs.core.get.call(null,map__13702__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var event = cljs.core.get.call(null,map__13702__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__13702__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var body = cljs.core.nthnext.call(null,vec__13701,(2));
var map__13703 = p__13700;
var map__13703__$1 = ((cljs.core.seq_QMARK_.call(null,map__13703))?cljs.core.apply.call(null,cljs.core.hash_map,map__13703):map__13703);
var opts = map__13703__$1;
var save_BANG_ = cljs.core.get.call(null,map__13703__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__13703__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__13703__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__13701,type,map__13702,map__13702__$1,attrs,touch_event,event,id,body,map__13703,map__13703__$1,opts,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__3743__auto__ = touch_event;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,visible__6624__auto__,temp__4124__auto__,vec__13701,type,map__13702,map__13702__$1,attrs,touch_event,event,id,body,map__13703,map__13703__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,visible__6624__auto__,temp__4124__auto__,vec__13701,type,map__13702,map__13702__$1,attrs,touch_event,event,id,body,map__13703,map__13703__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__3743__auto__ = touch_event;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,temp__4124__auto__,vec__13701,type,map__13702,map__13702__$1,attrs,touch_event,event,id,body,map__13703,map__13703__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,temp__4124__auto__,vec__13701,type,map__13702,map__13702__$1,attrs,touch_event,event,id,body,map__13703,map__13703__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__13701,type,map__13702,map__13702__$1,attrs,touch_event,event,id,body,map__13703,map__13703__$1,opts,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__13704,p__13705){
var vec__13706 = p__13704;
var type = cljs.core.nth.call(null,vec__13706,(0),null);
var map__13707 = cljs.core.nth.call(null,vec__13706,(1),null);
var map__13707__$1 = ((cljs.core.seq_QMARK_.call(null,map__13707))?cljs.core.apply.call(null,cljs.core.hash_map,map__13707):map__13707);
var attrs = map__13707__$1;
var value = cljs.core.get.call(null,map__13707__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__13707__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__13707__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var body = cljs.core.nthnext.call(null,vec__13706,(2));
var map__13708 = p__13705;
var map__13708__$1 = ((cljs.core.seq_QMARK_.call(null,map__13708))?cljs.core.apply.call(null,cljs.core.hash_map,map__13708):map__13708);
var save_BANG_ = cljs.core.get.call(null,map__13708__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__13708__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__13708__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var state = reagent.core.atom.call(null,cljs.core._EQ_.call(null,value,get.call(null,id)));
return ((function (state,vec__13706,type,map__13707,map__13707__$1,attrs,value,id,field,body,map__13708,map__13708__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6624__auto__,temp__4124__auto__,state,vec__13706,type,map__13707,map__13707__$1,attrs,value,id,field,body,map__13708,map__13708__$1,save_BANG_,get,doc){
return (function (){
save_BANG_.call(null,id,value);

return cljs.core.reset_BANG_.call(null,state,cljs.core._EQ_.call(null,value,get.call(null,id)));
});})(visible__6624__auto__,temp__4124__auto__,state,vec__13706,type,map__13707,map__13707__$1,attrs,value,id,field,body,map__13708,map__13708__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,state,vec__13706,type,map__13707,map__13707__$1,attrs,value,id,field,body,map__13708,map__13708__$1,save_BANG_,get,doc){
return (function (){
save_BANG_.call(null,id,value);

return cljs.core.reset_BANG_.call(null,state,cljs.core._EQ_.call(null,value,get.call(null,id)));
});})(temp__4124__auto__,state,vec__13706,type,map__13707,map__13707__$1,attrs,value,id,field,body,map__13708,map__13708__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
}
});
;})(state,vec__13706,type,map__13707,map__13707__$1,attrs,value,id,field,body,map__13708,map__13708__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__13710,p__13711){
var vec__13712 = p__13710;
var type = cljs.core.nth.call(null,vec__13712,(0),null);
var map__13713 = cljs.core.nth.call(null,vec__13712,(1),null);
var map__13713__$1 = ((cljs.core.seq_QMARK_.call(null,map__13713))?cljs.core.apply.call(null,cljs.core.hash_map,map__13713):map__13713);
var attrs = map__13713__$1;
var data_source = cljs.core.get.call(null,map__13713__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var id = cljs.core.get.call(null,map__13713__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__13714 = p__13711;
var map__13714__$1 = ((cljs.core.seq_QMARK_.call(null,map__13714))?cljs.core.apply.call(null,cljs.core.hash_map,map__13714):map__13714);
var save_BANG_ = cljs.core.get.call(null,map__13714__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__13714__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__13714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
}
});})(visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (p1__13709_SHARP_){
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__13709_SHARP_));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);
});})(visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = data_source.call(null,value.toLowerCase());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.typeahead","ul.typeahead",-1230632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__3743__auto__ = cljs.core.empty_QMARK_.call(null,results);
if(or__3743__auto__){
return or__3743__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
], null),(function (){var iter__4499__auto__ = ((function (results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function iter__13715(s__13716){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
var s__13716__$1 = s__13716;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13716__$1);
if(temp__4126__auto____$1){
var s__13716__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13716__$2)){
var c__4497__auto__ = cljs.core.chunk_first.call(null,s__13716__$2);
var size__4498__auto__ = cljs.core.count.call(null,c__4497__auto__);
var b__13718 = cljs.core.chunk_buffer.call(null,size__4498__auto__);
if((function (){var i__13717 = (0);
while(true){
if((i__13717 < size__4498__auto__)){
var result = cljs.core._nth.call(null,c__4497__auto__,i__13717);
cljs.core.chunk_append.call(null,b__13718,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13717,result,c__4497__auto__,size__4498__auto__,b__13718,s__13716__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(i__13717,result,c__4497__auto__,size__4498__auto__,b__13718,s__13716__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
], null),result], null));

var G__13723 = (i__13717 + (1));
i__13717 = G__13723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13718),iter__13715.call(null,cljs.core.chunk_rest.call(null,s__13716__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13718),null);
}
} else {
var result = cljs.core.first.call(null,s__13716__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (result,s__13716__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(result,s__13716__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
], null),result], null),iter__13715.call(null,cljs.core.rest.call(null,s__13716__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,visible__6624__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
;
return iter__4499__auto__.call(null,results);
})()], null);
} else {
return null;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (p1__13709_SHARP_){
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__13709_SHARP_));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = data_source.call(null,value.toLowerCase());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.typeahead","ul.typeahead",-1230632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__3743__auto__ = cljs.core.empty_QMARK_.call(null,results);
if(or__3743__auto__){
return or__3743__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
], null),(function (){var iter__4499__auto__ = ((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function iter__13719(s__13720){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
var s__13720__$1 = s__13720;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13720__$1);
if(temp__4126__auto____$1){
var s__13720__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13720__$2)){
var c__4497__auto__ = cljs.core.chunk_first.call(null,s__13720__$2);
var size__4498__auto__ = cljs.core.count.call(null,c__4497__auto__);
var b__13722 = cljs.core.chunk_buffer.call(null,size__4498__auto__);
if((function (){var i__13721 = (0);
while(true){
if((i__13721 < size__4498__auto__)){
var result = cljs.core._nth.call(null,c__4497__auto__,i__13721);
cljs.core.chunk_append.call(null,b__13722,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13721,result,c__4497__auto__,size__4498__auto__,b__13722,s__13720__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(i__13721,result,c__4497__auto__,size__4498__auto__,b__13722,s__13720__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
], null),result], null));

var G__13724 = (i__13721 + (1));
i__13721 = G__13724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13722),iter__13719.call(null,cljs.core.chunk_rest.call(null,s__13720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13722),null);
}
} else {
var result = cljs.core.first.call(null,s__13720__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (result,s__13720__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(result,s__13720__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
], null),result], null),iter__13719.call(null,cljs.core.rest.call(null,s__13720__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
;
return iter__4499__auto__.call(null,results);
})()], null);
} else {
return null;
}
})()], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__13712,type,map__13713,map__13713__$1,attrs,data_source,id,map__13714,map__13714__$1,save_BANG_,get,doc))
}));
reagent_forms.core.group_item = (function group_item(p__13725,p__13726,selections,field,id){
var vec__13730 = p__13725;
var type = cljs.core.nth.call(null,vec__13730,(0),null);
var map__13731 = cljs.core.nth.call(null,vec__13730,(1),null);
var map__13731__$1 = ((cljs.core.seq_QMARK_.call(null,map__13731))?cljs.core.apply.call(null,cljs.core.hash_map,map__13731):map__13731);
var attrs = map__13731__$1;
var touch_event = cljs.core.get.call(null,map__13731__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var key = cljs.core.get.call(null,map__13731__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var body = cljs.core.nthnext.call(null,vec__13730,(2));
var map__13732 = p__13726;
var map__13732__$1 = ((cljs.core.seq_QMARK_.call(null,map__13732))?cljs.core.apply.call(null,cljs.core.hash_map,map__13732):map__13732);
var multi_select = cljs.core.get.call(null,map__13732__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var save_BANG_ = cljs.core.get.call(null,map__13732__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var handle_click_BANG_ = ((function (vec__13730,type,map__13731,map__13731__$1,attrs,touch_event,key,body,map__13732,map__13732__$1,multi_select,save_BANG_){
return (function handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__13730,type,map__13731,map__13731__$1,attrs,touch_event,key,body,map__13732,map__13732__$1,multi_select,save_BANG_))
;
return ((function (vec__13730,type,map__13731,map__13731__$1,attrs,touch_event,key,body,map__13732,map__13732__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__3743__auto__ = touch_event;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__13730,type,map__13731,map__13731__$1,attrs,touch_event,key,body,map__13732,map__13732__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__13733){
var map__13738 = p__13733;
var map__13738__$1 = ((cljs.core.seq_QMARK_.call(null,map__13738))?cljs.core.apply.call(null,cljs.core.hash_map,map__13738):map__13738);
var multi_select = cljs.core.get.call(null,map__13738__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var get = cljs.core.get.call(null,map__13738__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__13738,map__13738__$1,multi_select,get){
return (function (m,p__13739){
var vec__13740 = p__13739;
var _ = cljs.core.nth.call(null,vec__13740,(0),null);
var map__13741 = cljs.core.nth.call(null,vec__13740,(1),null);
var map__13741__$1 = ((cljs.core.seq_QMARK_.call(null,map__13741))?cljs.core.apply.call(null,cljs.core.hash_map,map__13741):map__13741);
var key = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__13738,map__13738__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
* selectors might be passed in inline or as a collection
*/
reagent_forms.core.extract_selectors = (function extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function selection_group(p__13744,p__13745){
var vec__13751 = p__13744;
var type = cljs.core.nth.call(null,vec__13751,(0),null);
var map__13752 = cljs.core.nth.call(null,vec__13751,(1),null);
var map__13752__$1 = ((cljs.core.seq_QMARK_.call(null,map__13752))?cljs.core.apply.call(null,cljs.core.hash_map,map__13752):map__13752);
var attrs = map__13752__$1;
var id = cljs.core.get.call(null,map__13752__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__13752__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var selection_items = cljs.core.nthnext.call(null,vec__13751,(2));
var map__13753 = p__13745;
var map__13753__$1 = ((cljs.core.seq_QMARK_.call(null,map__13753))?cljs.core.apply.call(null,cljs.core.hash_map,map__13753):map__13753);
var opts = map__13753__$1;
var get = cljs.core.get.call(null,map__13753__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get){
return (function (p1__13742_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get){
return (function (p__13754){
var vec__13755 = p__13754;
var k = cljs.core.nth.call(null,vec__13755,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get))
,p1__13742_SHARP_));
});})(selection_items__$1,selections,selectors,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get){
return (function (p1__13743_SHARP_){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__13743_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__13751,type,map__13752,map__13752__$1,attrs,id,field,selection_items,map__13753,map__13753__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__13756,p__13757){
var vec__13758 = p__13756;
var _ = cljs.core.nth.call(null,vec__13758,(0),null);
var attrs = cljs.core.nth.call(null,vec__13758,(1),null);
var field = vec__13758;
var map__13759 = p__13757;
var map__13759__$1 = ((cljs.core.seq_QMARK_.call(null,map__13759))?cljs.core.apply.call(null,cljs.core.hash_map,map__13759):map__13759);
var opts = map__13759__$1;
var doc = cljs.core.get.call(null,map__13759__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__13758,_,attrs,field,map__13759,map__13759__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__13758,_,attrs,field,map__13759,map__13759__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__13760,p__13761){
var vec__13762 = p__13760;
var _ = cljs.core.nth.call(null,vec__13762,(0),null);
var attrs = cljs.core.nth.call(null,vec__13762,(1),null);
var field = vec__13762;
var map__13763 = p__13761;
var map__13763__$1 = ((cljs.core.seq_QMARK_.call(null,map__13763))?cljs.core.apply.call(null,cljs.core.hash_map,map__13763):map__13763);
var opts = map__13763__$1;
var doc = cljs.core.get.call(null,map__13763__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__13762,_,attrs,field,map__13763,map__13763__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__13762,_,attrs,field,map__13763,map__13763__$1,opts,doc))
}));
reagent_forms.core.map_options = (function map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4499__auto__ = (function iter__13776(s__13777){
return (new cljs.core.LazySeq(null,(function (){
var s__13777__$1 = s__13777;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13777__$1);
if(temp__4126__auto__){
var s__13777__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13777__$2)){
var c__4497__auto__ = cljs.core.chunk_first.call(null,s__13777__$2);
var size__4498__auto__ = cljs.core.count.call(null,c__4497__auto__);
var b__13779 = cljs.core.chunk_buffer.call(null,size__4498__auto__);
if((function (){var i__13778 = (0);
while(true){
if((i__13778 < size__4498__auto__)){
var vec__13784 = cljs.core._nth.call(null,c__4497__auto__,i__13778);
var _ = cljs.core.nth.call(null,vec__13784,(0),null);
var map__13785 = cljs.core.nth.call(null,vec__13784,(1),null);
var map__13785__$1 = ((cljs.core.seq_QMARK_.call(null,map__13785))?cljs.core.apply.call(null,cljs.core.hash_map,map__13785):map__13785);
var key = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__13784,(2),null);
cljs.core.chunk_append.call(null,b__13779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__13788 = (i__13778 + (1));
i__13778 = G__13788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13779),iter__13776.call(null,cljs.core.chunk_rest.call(null,s__13777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13779),null);
}
} else {
var vec__13786 = cljs.core.first.call(null,s__13777__$2);
var _ = cljs.core.nth.call(null,vec__13786,(0),null);
var map__13787 = cljs.core.nth.call(null,vec__13786,(1),null);
var map__13787__$1 = ((cljs.core.seq_QMARK_.call(null,map__13787))?cljs.core.apply.call(null,cljs.core.hash_map,map__13787):map__13787);
var key = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__13786,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),iter__13776.call(null,cljs.core.rest.call(null,s__13777__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4499__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__13789_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__13789_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__13792,p__13793){
var vec__13794 = p__13792;
var type = cljs.core.nth.call(null,vec__13794,(0),null);
var map__13795 = cljs.core.nth.call(null,vec__13794,(1),null);
var map__13795__$1 = ((cljs.core.seq_QMARK_.call(null,map__13795))?cljs.core.apply.call(null,cljs.core.hash_map,map__13795):map__13795);
var attrs = map__13795__$1;
var id = cljs.core.get.call(null,map__13795__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__13795__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var options = cljs.core.nthnext.call(null,vec__13794,(2));
var map__13796 = p__13793;
var map__13796__$1 = ((cljs.core.seq_QMARK_.call(null,map__13796))?cljs.core.apply.call(null,cljs.core.hash_map,map__13796):map__13796);
var save_BANG_ = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__3743__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__6624__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__6624__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6624__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc){
return (function (p1__13790_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__13790_SHARP_)));
});})(visible__6624__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__6624__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc){
return (function (p1__13791_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13791_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__6624__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc){
return (function (p1__13790_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__13790_SHARP_)));
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc){
return (function (p1__13791_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13791_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__13794,type,map__13795,map__13795__$1,attrs,id,field,options,map__13796,map__13796__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
* creates data bindings between the form fields and the supplied atom
* form - the form template with the fields
* doc - the document that the fields will be bound to
* events - any events that should be triggered when the document state changes
* @param {...*} var_args
*/
reagent_forms.core.bind_fields = (function() { 
var bind_fields__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__13797_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__13797_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(reagent_forms.core.field_QMARK_.call(null,node)){
var field = reagent_forms.core.init_field.call(null,node,opts);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
};
var bind_fields = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__13798__i = 0, G__13798__a = new Array(arguments.length -  2);
while (G__13798__i < G__13798__a.length) {G__13798__a[G__13798__i] = arguments[G__13798__i + 2]; ++G__13798__i;}
  events = new cljs.core.IndexedSeq(G__13798__a,0);
} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__13799){
var form = cljs.core.first(arglist__13799);
arglist__13799 = cljs.core.next(arglist__13799);
var doc = cljs.core.first(arglist__13799);
var events = cljs.core.rest(arglist__13799);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;

//# sourceMappingURL=core.js.map