// Compiled by ClojureScript 0.0-2644 {}
goog.provide('reagent_forms.core');
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
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),/\./));
}));
reagent_forms.core.set_doc_value = (function set_doc_value(doc,id,value,events){
var path = (function (){var G__18757 = id;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__18757) : reagent_forms.core.id__GT_path.call(null,G__18757));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (p1__18749_SHARP_,p2__18748_SHARP_){
var or__3721__auto__ = (function (){var G__18761 = path;
var G__18762 = value;
var G__18763 = p1__18749_SHARP_;
return (p2__18748_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__18748_SHARP_.cljs$core$IFn$_invoke$arity$3(G__18761,G__18762,G__18763) : p2__18748_SHARP_.call(null,G__18761,G__18762,G__18763));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return p1__18749_SHARP_;
}
});})(path))
,cljs.core.assoc_in(doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.set_doc_value,id,value,cljs.core.array_seq([events], 0));
});
});
reagent_forms.core.format_type = (function (){var method_table__4618__auto__ = (function (){var G__18764 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18764) : cljs.core.atom.call(null,G__18764));
})();
var prefer_table__4619__auto__ = (function (){var G__18765 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18765) : cljs.core.atom.call(null,G__18765));
})();
var method_cache__4620__auto__ = (function (){var G__18766 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18766) : cljs.core.atom.call(null,G__18766));
})();
var cached_hierarchy__4621__auto__ = (function (){var G__18767 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18767) : cljs.core.atom.call(null,G__18767));
})();
var hierarchy__4622__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$107,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,cljs.core.constant$keyword$109], null)))){
return cljs.core.constant$keyword$109;
} else {
return field_type;
}
});})(method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__))
,cljs.core.constant$keyword$7,hierarchy__4622__auto__,method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(cljs.core.butlast(n)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(n)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.last(n)));
});
reagent_forms.core.format_value = (function format_value(fmt,value){
if(cljs.core.truth_((function (){var and__3709__auto__ = cljs.core.not((function (){var G__18776 = (function (){var G__18777 = value;
return parseFloat(G__18777);
})();
return isNaN(G__18776);
})());
if(and__3709__auto__){
return fmt;
} else {
return and__3709__auto__;
}
})())){
var G__18778 = fmt;
var G__18779 = value;
return goog.string.format(G__18778,G__18779);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$109,(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = (function (){var G__18780 = n;
return parseFloat(G__18780);
})();
if(cljs.core.truth_((function (){var G__18781 = parsed;
return isNaN(G__18781);
})())){
return null;
} else {
if(reagent_forms.core.valid_number_ending_QMARK_(n)){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (_,value){
return value;
}));
reagent_forms.core.bind = (function (){var method_table__4618__auto__ = (function (){var G__18782 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18782) : cljs.core.atom.call(null,G__18782));
})();
var prefer_table__4619__auto__ = (function (){var G__18783 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18783) : cljs.core.atom.call(null,G__18783));
})();
var method_cache__4620__auto__ = (function (){var G__18784 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18784) : cljs.core.atom.call(null,G__18784));
})();
var cached_hierarchy__4621__auto__ = (function (){var G__18785 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18785) : cljs.core.atom.call(null,G__18785));
})();
var hierarchy__4622__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$107,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__){
return (function (p__18786,_){
var map__18787 = p__18786;
var map__18787__$1 = ((cljs.core.seq_QMARK_(map__18787))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18787):map__18787);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,cljs.core.constant$keyword$110);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$111,cljs.core.constant$keyword$109,cljs.core.constant$keyword$112,cljs.core.constant$keyword$113,cljs.core.constant$keyword$108,cljs.core.constant$keyword$114], null)))){
return cljs.core.constant$keyword$115;
} else {
return field;
}
});})(method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__))
,cljs.core.constant$keyword$7,hierarchy__4622__auto__,method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__));
})();
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$115,(function (p__18789,p__18790){
var map__18791 = p__18789;
var map__18791__$1 = ((cljs.core.seq_QMARK_(map__18791))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18791):map__18791);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18791__$1,cljs.core.constant$keyword$116);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18791__$1,cljs.core.constant$keyword$28);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18791__$1,cljs.core.constant$keyword$110);
var map__18792 = p__18790;
var map__18792__$1 = ((cljs.core.seq_QMARK_(map__18792))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18792):map__18792);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18792__$1,cljs.core.constant$keyword$117);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18792__$1,cljs.core.constant$keyword$118);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$119,(function (){var value = (function (){var or__3721__auto__ = (function (){var G__18794 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18794) : get.call(null,G__18794));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.constant$keyword$120,((function (map__18791,map__18791__$1,fmt,id,field,map__18792,map__18792__$1,save_BANG_,get){
return (function (p1__18788_SHARP_){
var G__18795 = id;
var G__18796 = (function (){var G__18797 = field;
var G__18798 = reagent_forms.core.value_of(p1__18788_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__18797,G__18798) : reagent_forms.core.format_type.call(null,G__18797,G__18798));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18795,G__18796) : save_BANG_.call(null,G__18795,G__18796));
});})(map__18791,map__18791__$1,fmt,id,field,map__18792,map__18792__$1,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$121,(function (p__18799,p__18800){
var map__18801 = p__18799;
var map__18801__$1 = ((cljs.core.seq_QMARK_(map__18801))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18801):map__18801);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18801__$1,cljs.core.constant$keyword$28);
var map__18802 = p__18800;
var map__18802__$1 = ((cljs.core.seq_QMARK_(map__18802))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18802):map__18802);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,cljs.core.constant$keyword$122);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,cljs.core.constant$keyword$117);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18802__$1,cljs.core.constant$keyword$118);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$122,(function (){var G__18803 = checked;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18803) : cljs.core.deref.call(null,G__18803));
})(),cljs.core.constant$keyword$120,((function (map__18801,map__18801__$1,id,map__18802,map__18802__$1,checked,save_BANG_,get){
return (function (){
var G__18804 = id;
var G__18805 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(checked,cljs.core.not);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18804,G__18805) : save_BANG_.call(null,G__18804,G__18805));
});})(map__18801,map__18801__$1,id,map__18802,map__18802__$1,checked,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (_,___$1){
return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__18806,opts,p__18807){
var vec__18812 = p__18806;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18812,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18812,(1),null);
var body = cljs.core.nthnext(vec__18812,(2));
var vec__18813 = p__18807;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18813,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attrs,(function (){var G__18814 = attrs;
var G__18815 = opts;
return (reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(G__18814,G__18815) : reagent_forms.core.bind.call(null,G__18814,G__18815));
})(),attrs], 0))], null),body);
};
var set_attrs = function (p__18806,opts,var_args){
var p__18807 = null;
if (arguments.length > 2) {
  p__18807 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attrs__delegate.call(this,p__18806,opts,p__18807);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__18816){
var p__18806 = cljs.core.first(arglist__18816);
arglist__18816 = cljs.core.next(arglist__18816);
var opts = cljs.core.first(arglist__18816);
var p__18807 = cljs.core.rest(arglist__18816);
return set_attrs__delegate(p__18806,opts,p__18807);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__4618__auto__ = (function (){var G__18817 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18817) : cljs.core.atom.call(null,G__18817));
})();
var prefer_table__4619__auto__ = (function (){var G__18818 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18818) : cljs.core.atom.call(null,G__18818));
})();
var method_cache__4620__auto__ = (function (){var G__18819 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18819) : cljs.core.atom.call(null,G__18819));
})();
var cached_hierarchy__4621__auto__ = (function (){var G__18820 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18820) : cljs.core.atom.call(null,G__18820));
})();
var hierarchy__4622__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$107,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__){
return (function (p__18821,_){
var vec__18822 = p__18821;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18822,(0),null);
var map__18823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18822,(1),null);
var map__18823__$1 = ((cljs.core.seq_QMARK_(map__18823))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18823):map__18823);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18823__$1,cljs.core.constant$keyword$110);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,cljs.core.constant$keyword$111,cljs.core.constant$keyword$112,cljs.core.constant$keyword$113,cljs.core.constant$keyword$114], null)))){
return cljs.core.constant$keyword$115;
} else {
return field__$1;
}
});})(method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__))
,cljs.core.constant$keyword$7,hierarchy__4622__auto__,method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__));
})();
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$115,(function (p__18824,opts){
var vec__18825 = p__18824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18825,(0),null);
var map__18826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18825,(1),null);
var map__18826__$1 = ((cljs.core.seq_QMARK_(map__18826))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18826):map__18826);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18826__$1,cljs.core.constant$keyword$110);
var component = vec__18825;
return ((function (vec__18825,_,map__18826,map__18826__$1,field,component){
return (function (){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,field], null)], 0));
});
;})(vec__18825,_,map__18826,map__18826__$1,field,component))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$109,(function (p__18828,p__18829){
var vec__18830 = p__18828;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830,(0),null);
var map__18831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830,(1),null);
var map__18831__$1 = ((cljs.core.seq_QMARK_(map__18831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18831):map__18831);
var attrs = map__18831__$1;
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18831__$1,cljs.core.constant$keyword$116);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18831__$1,cljs.core.constant$keyword$28);
var map__18832 = p__18829;
var map__18832__$1 = ((cljs.core.seq_QMARK_(map__18832))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18832):map__18832);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,cljs.core.constant$keyword$117);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,cljs.core.constant$keyword$118);
var display_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$123,false,cljs.core.constant$keyword$119,(function (){var G__18833 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18833) : get.call(null,G__18833));
})()], null));
return ((function (display_value,vec__18830,type,map__18831,map__18831__$1,attrs,fmt,id,map__18832,map__18832__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$34,cljs.core.constant$keyword$111,cljs.core.constant$keyword$119,(function (){var doc_value = (function (){var or__3721__auto__ = (function (){var G__18836 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18836) : get.call(null,G__18836));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return "";
}
})();
var map__18834 = (function (){var G__18837 = display_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18837) : cljs.core.deref.call(null,G__18837));
})();
var map__18834__$1 = ((cljs.core.seq_QMARK_(map__18834))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18834):map__18834);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18834__$1,cljs.core.constant$keyword$119);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18834__$1,cljs.core.constant$keyword$123);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.constant$keyword$123);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.constant$keyword$120,((function (display_value,vec__18830,type,map__18831,map__18831__$1,attrs,fmt,id,map__18832,map__18832__$1,save_BANG_,get){
return (function (p1__18827_SHARP_){
var temp__4124__auto__ = (function (){var G__18838 = cljs.core.constant$keyword$109;
var G__18839 = reagent_forms.core.value_of(p1__18827_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__18838,G__18839) : reagent_forms.core.format_type.call(null,G__18838,G__18839));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var value = temp__4124__auto__;
var G__18840_18847 = display_value;
var G__18841_18848 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$123,true,cljs.core.constant$keyword$119,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18840_18847,G__18841_18848) : cljs.core.reset_BANG_.call(null,G__18840_18847,G__18841_18848));

var G__18842 = id;
var G__18843 = (function (){var G__18844 = value;
return parseFloat(G__18844);
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18842,G__18843) : save_BANG_.call(null,G__18842,G__18843));
} else {
var G__18845 = id;
var G__18846 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18845,G__18846) : save_BANG_.call(null,G__18845,G__18846));
}
});})(display_value,vec__18830,type,map__18831,map__18831__$1,attrs,fmt,id,map__18832,map__18832__$1,save_BANG_,get))
], null),attrs], 0))], null);
});
;})(display_value,vec__18830,type,map__18831,map__18831__$1,attrs,fmt,id,map__18832,map__18832__$1,save_BANG_,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$124,(function (p__18850,p__18851){
var vec__18852 = p__18850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18852,(0),null);
var map__18853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18852,(1),null);
var map__18853__$1 = ((cljs.core.seq_QMARK_(map__18853))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18853):map__18853);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18853__$1,cljs.core.constant$keyword$125);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18853__$1,cljs.core.constant$keyword$126);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18853__$1,cljs.core.constant$keyword$28);
var map__18854 = p__18851;
var map__18854__$1 = ((cljs.core.seq_QMARK_(map__18854))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18854):map__18854);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.constant$keyword$117);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.constant$keyword$118);
var fmt = reagent_forms.datepicker.parse_format(date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$129,true,cljs.core.constant$keyword$34,cljs.core.constant$keyword$111,cljs.core.constant$keyword$96,((function (fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get))
,cljs.core.constant$keyword$119,(function (){var temp__4126__auto__ = (function (){var G__18855 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18855) : get.call(null,G__18855));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,((function (fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),expanded_QMARK_,((function (fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get){
return (function (){
var G__18856 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18856) : get.call(null,G__18856));
});})(fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get))
,((function (fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get){
return (function (p1__18849_SHARP_){
var G__18857 = id;
var G__18858 = p1__18849_SHARP_;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18857,G__18858) : save_BANG_.call(null,G__18857,G__18858));
});})(fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get))
], null)], null);
});
;})(fmt,today,expanded_QMARK_,vec__18852,_,map__18853,map__18853__$1,inline,date_format,id,map__18854,map__18854__$1,save_BANG_,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$121,(function (p__18859,p__18860){
var vec__18861 = p__18859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18861,(0),null);
var map__18862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18861,(1),null);
var map__18862__$1 = ((cljs.core.seq_QMARK_(map__18862))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18862):map__18862);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18862__$1,cljs.core.constant$keyword$110);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18862__$1,cljs.core.constant$keyword$28);
var component = vec__18861;
var map__18863 = p__18860;
var map__18863__$1 = ((cljs.core.seq_QMARK_(map__18863))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18863):map__18863);
var opts = map__18863__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18863__$1,cljs.core.constant$keyword$118);
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__18864 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18864) : get.call(null,G__18864));
})());
return ((function (state,vec__18861,_,map__18862,map__18862__$1,field,id,component,map__18863,map__18863__$1,opts,get){
return (function (){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$122,state),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,field], null)], 0));
});
;})(state,vec__18861,_,map__18862,map__18862__$1,field,id,component,map__18863,map__18863__$1,opts,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$132,(function (p__18865,p__18866){
var vec__18867 = p__18865;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(0),null);
var map__18868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(1),null);
var map__18868__$1 = ((cljs.core.seq_QMARK_(map__18868))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18868):map__18868);
var attrs = map__18868__$1;
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,cljs.core.constant$keyword$133);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,cljs.core.constant$keyword$134);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,cljs.core.constant$keyword$135);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,cljs.core.constant$keyword$28);
var map__18869 = p__18866;
var map__18869__$1 = ((cljs.core.seq_QMARK_(map__18869))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18869):map__18869);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18869__$1,cljs.core.constant$keyword$118);
return ((function (vec__18867,type,map__18868,map__18868__$1,attrs,placeholder,postamble,preamble,id,map__18869,map__18869__$1,get){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto__ = (function (){var G__18870 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18870) : get.call(null,G__18870));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var value = temp__4124__auto__;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
});
;})(vec__18867,type,map__18868,map__18868__$1,attrs,placeholder,postamble,preamble,id,map__18869,map__18869__$1,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$136,(function (p__18871,p__18872){
var vec__18873 = p__18871;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18873,(0),null);
var map__18874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18873,(1),null);
var map__18874__$1 = ((cljs.core.seq_QMARK_(map__18874))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18874):map__18874);
var attrs = map__18874__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18874__$1,cljs.core.constant$keyword$137);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18874__$1,cljs.core.constant$keyword$138);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18874__$1,cljs.core.constant$keyword$28);
var body = cljs.core.nthnext(vec__18873,(2));
var map__18875 = p__18872;
var map__18875__$1 = ((cljs.core.seq_QMARK_(map__18875))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18875):map__18875);
var opts = map__18875__$1;
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18875__$1,cljs.core.constant$keyword$117);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18875__$1,cljs.core.constant$keyword$118);
return ((function (vec__18873,type,map__18874,map__18874__$1,attrs,touch_event,event,id,body,map__18875,map__18875__$1,opts,save_BANG_,get){
return (function (){
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__18876 = (function (){var G__18877 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18877) : get.call(null,G__18877));
})();
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__18876) : event.call(null,G__18876));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto__ = cljs.core.not_empty((function (){var G__18878 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18878) : get.call(null,G__18878));
})());
if(cljs.core.truth_(temp__4124__auto__)){
var message = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$139,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,"button",cljs.core.constant$keyword$140,true,(function (){var or__3721__auto__ = touch_event;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.constant$keyword$96;
}
})(),((function (message,temp__4124__auto__,vec__18873,type,map__18874,map__18874__$1,attrs,touch_event,event,id,body,map__18875,map__18875__$1,opts,save_BANG_,get){
return (function (){
var G__18879 = id;
var G__18880 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18879,G__18880) : save_BANG_.call(null,G__18879,G__18880));
});})(message,temp__4124__auto__,vec__18873,type,map__18874,map__18874__$1,attrs,touch_event,event,id,body,map__18875,map__18875__$1,opts,save_BANG_,get))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
});
;})(vec__18873,type,map__18874,map__18874__$1,attrs,touch_event,event,id,body,map__18875,map__18875__$1,opts,save_BANG_,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$141,(function (p__18881,p__18882){
var vec__18883 = p__18881;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18883,(0),null);
var map__18884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18883,(1),null);
var map__18884__$1 = ((cljs.core.seq_QMARK_(map__18884))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18884):map__18884);
var attrs = map__18884__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18884__$1,cljs.core.constant$keyword$119);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18884__$1,cljs.core.constant$keyword$28);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18884__$1,cljs.core.constant$keyword$110);
var body = cljs.core.nthnext(vec__18883,(2));
var map__18885 = p__18882;
var map__18885__$1 = ((cljs.core.seq_QMARK_(map__18885))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18885):map__18885);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18885__$1,cljs.core.constant$keyword$117);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18885__$1,cljs.core.constant$keyword$118);
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__18886 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18886) : get.call(null,G__18886));
})()));
return ((function (state,vec__18883,type,map__18884,map__18884__$1,attrs,value,id,field,body,map__18885,map__18885__$1,save_BANG_,get){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$34,cljs.core.constant$keyword$141,cljs.core.constant$keyword$122,(function (){var G__18887 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18887) : cljs.core.deref.call(null,G__18887));
})(),cljs.core.constant$keyword$120,((function (state,vec__18883,type,map__18884,map__18884__$1,attrs,value,id,field,body,map__18885,map__18885__$1,save_BANG_,get){
return (function (){
var G__18888_18893 = id;
var G__18889_18894 = value;
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18888_18893,G__18889_18894) : save_BANG_.call(null,G__18888_18893,G__18889_18894));

var G__18890 = state;
var G__18891 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__18892 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18892) : get.call(null,G__18892));
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18890,G__18891) : cljs.core.reset_BANG_.call(null,G__18890,G__18891));
});})(state,vec__18883,type,map__18884,map__18884__$1,attrs,value,id,field,body,map__18885,map__18885__$1,save_BANG_,get))
], null),attrs], 0))], null),body);
});
;})(state,vec__18883,type,map__18884,map__18884__$1,attrs,value,id,field,body,map__18885,map__18885__$1,save_BANG_,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$142,(function (p__18896,p__18897){
var vec__18898 = p__18896;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18898,(0),null);
var map__18899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18898,(1),null);
var map__18899__$1 = ((cljs.core.seq_QMARK_(map__18899))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18899):map__18899);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18899__$1,cljs.core.constant$keyword$143);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18899__$1,cljs.core.constant$keyword$28);
var map__18900 = p__18897;
var map__18900__$1 = ((cljs.core.seq_QMARK_(map__18900))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18900):map__18900);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18900__$1,cljs.core.constant$keyword$117);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18900__$1,cljs.core.constant$keyword$118);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$34,cljs.core.constant$keyword$111,cljs.core.constant$keyword$119,(function (){var G__18901 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18901) : get.call(null,G__18901));
})(),cljs.core.constant$keyword$145,((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get){
return (function (){
if(cljs.core.truth_((function (){var G__18902 = mouse_on_list_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18902) : cljs.core.deref.call(null,G__18902));
})())){
return null;
} else {
var G__18903 = typeahead_hidden_QMARK_;
var G__18904 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18903,G__18904) : cljs.core.reset_BANG_.call(null,G__18903,G__18904));
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get))
,cljs.core.constant$keyword$120,((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get){
return (function (p1__18895_SHARP_){
var G__18905_18939 = id;
var G__18906_18940 = reagent_forms.core.value_of(p1__18895_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18905_18939,G__18906_18940) : save_BANG_.call(null,G__18905_18939,G__18906_18940));

var G__18907 = typeahead_hidden_QMARK_;
var G__18908 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18907,G__18908) : cljs.core.reset_BANG_.call(null,G__18907,G__18908));
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get))
], null)], null),(function (){var temp__4126__auto__ = (function (){var G__18909 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18909) : get.call(null,G__18909));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = (function (){var G__18910 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__18910) : data_source.call(null,G__18910));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,(function (){var or__3721__auto__ = cljs.core.empty_QMARK_(results);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var G__18912 = typeahead_hidden_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18912) : cljs.core.deref.call(null,G__18912));
}
})(),cljs.core.constant$keyword$148,((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get){
return (function (){
var G__18913 = mouse_on_list_QMARK_;
var G__18914 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18913,G__18914) : cljs.core.reset_BANG_.call(null,G__18913,G__18914));
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get))
,cljs.core.constant$keyword$149,((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get){
return (function (){
var G__18915 = mouse_on_list_QMARK_;
var G__18916 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18915,G__18916) : cljs.core.reset_BANG_.call(null,G__18915,G__18916));
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get))
], null),(function (){var iter__4477__auto__ = ((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get){
return (function iter__18917(s__18918){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get){
return (function (){
var s__18918__$1 = s__18918;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__18918__$1);
if(temp__4126__auto____$1){
var s__18918__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18918__$2)){
var c__4475__auto__ = cljs.core.chunk_first(s__18918__$2);
var size__4476__auto__ = cljs.core.count(c__4475__auto__);
var b__18920 = cljs.core.chunk_buffer(size__4476__auto__);
if((function (){var i__18919 = (0);
while(true){
if((i__18919 < size__4476__auto__)){
var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4475__auto__,i__18919);
cljs.core.chunk_append(b__18920,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,((function (i__18919,result,c__4475__auto__,size__4476__auto__,b__18920,s__18918__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get){
return (function (){
var G__18931_18941 = typeahead_hidden_QMARK_;
var G__18932_18942 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18931_18941,G__18932_18942) : cljs.core.reset_BANG_.call(null,G__18931_18941,G__18932_18942));

var G__18933 = id;
var G__18934 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18933,G__18934) : save_BANG_.call(null,G__18933,G__18934));
});})(i__18919,result,c__4475__auto__,size__4476__auto__,b__18920,s__18918__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get))
], null),result], null));

var G__18943 = (i__18919 + (1));
i__18919 = G__18943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18920),iter__18917(cljs.core.chunk_rest(s__18918__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18920),null);
}
} else {
var result = cljs.core.first(s__18918__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,((function (result,s__18918__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get){
return (function (){
var G__18935_18944 = typeahead_hidden_QMARK_;
var G__18936_18945 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18935_18944,G__18936_18945) : cljs.core.reset_BANG_.call(null,G__18935_18944,G__18936_18945));

var G__18937 = id;
var G__18938 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18937,G__18938) : save_BANG_.call(null,G__18937,G__18938));
});})(result,s__18918__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get))
], null),result], null),iter__18917(cljs.core.rest(s__18918__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get))
,null,null));
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get))
;
return iter__4477__auto__(results);
})()], null);
} else {
return null;
}
})()], null);
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18898,type,map__18899,map__18899__$1,data_source,id,map__18900,map__18900__$1,save_BANG_,get))
}));
reagent_forms.core.group_item = (function group_item(p__18946,p__18947,selections,field,id){
var vec__18997 = p__18946;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18997,(0),null);
var map__18998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18997,(1),null);
var map__18998__$1 = ((cljs.core.seq_QMARK_(map__18998))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18998):map__18998);
var attrs = map__18998__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18998__$1,cljs.core.constant$keyword$137);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18998__$1,cljs.core.constant$keyword$76);
var body = cljs.core.nthnext(vec__18997,(2));
var map__18999 = p__18947;
var map__18999__$1 = ((cljs.core.seq_QMARK_(map__18999))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18999):map__18999);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18999__$1,cljs.core.constant$keyword$151);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18999__$1,cljs.core.constant$keyword$117);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18999__$1,cljs.core.constant$keyword$118);
var handle_click_BANG_ = ((function (vec__18997,type,map__18998,map__18998__$1,attrs,touch_event,key,body,map__18999,map__18999__$1,multi_select,save_BANG_,get){
return (function handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__19033 = id;
var G__19034 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__19035 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19035) : cljs.core.deref.call(null,G__19035));
})()));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19033,G__19034) : save_BANG_.call(null,G__19033,G__19034));
} else {
var value = (function (){var G__19036 = (function (){var G__19037 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19037) : cljs.core.deref.call(null,G__19037));
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__19036) : key.call(null,G__19036));
})();
var G__19038_19046 = selections;
var G__19039_19047 = new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not(value)], true, false);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19038_19046,G__19039_19047) : cljs.core.reset_BANG_.call(null,G__19038_19046,G__19039_19047));

var G__19040 = id;
var G__19041 = (cljs.core.truth_((function (){var G__19042 = (function (){var G__19043 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19043) : cljs.core.deref.call(null,G__19043));
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__19042) : key.call(null,G__19042));
})())?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19040,G__19041) : save_BANG_.call(null,G__19040,G__19041));
}
});})(vec__18997,type,map__18998,map__18998__$1,attrs,touch_event,key,body,map__18999,map__18999__$1,multi_select,save_BANG_,get))
;
return ((function (vec__18997,type,map__18998,map__18998__$1,attrs,touch_event,key,body,map__18999,map__18999__$1,multi_select,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$61,(cljs.core.truth_((function (){var G__19044 = (function (){var G__19045 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19045) : cljs.core.deref.call(null,G__19045));
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__19044) : key.call(null,G__19044));
})())?"active":null),(function (){var or__3721__auto__ = touch_event;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.constant$keyword$96;
}
})(),handle_click_BANG_], true, false),attrs], 0)),body], null);
});
;})(vec__18997,type,map__18998,map__18998__$1,attrs,touch_event,key,body,map__18999,map__18999__$1,multi_select,save_BANG_,get))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__19048){
var map__19054 = p__19048;
var map__19054__$1 = ((cljs.core.seq_QMARK_(map__19054))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19054):map__19054);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19054__$1,cljs.core.constant$keyword$151);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19054__$1,cljs.core.constant$keyword$118);
var value = (function (){var G__19055 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19055) : get.call(null,G__19055));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__19054,map__19054__$1,multi_select,get){
return (function (m,p__19056){
var vec__19057 = p__19056;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(0),null);
var map__19058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(1),null);
var map__19058__$1 = ((cljs.core.seq_QMARK_(map__19058))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19058):map__19058);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,cljs.core.constant$keyword$76);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__19054,map__19054__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
* selectors might be passed in inline or as a collection
*/
reagent_forms.core.extract_selectors = (function extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function selection_group(p__19061,p__19062){
var vec__19071 = p__19061;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19071,(0),null);
var map__19072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19071,(1),null);
var map__19072__$1 = ((cljs.core.seq_QMARK_(map__19072))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19072):map__19072);
var attrs = map__19072__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19072__$1,cljs.core.constant$keyword$28);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19072__$1,cljs.core.constant$keyword$110);
var selection_items = cljs.core.nthnext(vec__19071,(2));
var map__19073 = p__19062;
var map__19073__$1 = ((cljs.core.seq_QMARK_(map__19073))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19073):map__19073);
var opts = map__19073__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19073__$1,cljs.core.constant$keyword$118);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$152,cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.constant$keyword$153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get){
return (function (){
if(cljs.core.truth_((function (){var G__19074 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19074) : get.call(null,G__19074));
})())){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get){
return (function (p1__19059_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get){
return (function (p__19075){
var vec__19076 = p__19075;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19076,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get))
,p1__19059_SHARP_));
});})(selection_items__$1,selections,selectors,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$153,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get){
return (function (p1__19060_SHARP_){
var temp__4124__auto__ = cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(p1__19060_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
var G__19077 = (function (){var G__19078 = cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(opts);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19078) : cljs.core.deref.call(null,G__19078));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19077) : visible_QMARK_.call(null,G__19077));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__19071,type,map__19072,map__19072__$1,attrs,id,field,selection_items,map__19073,map__19073__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$155,(function (field,opts){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$151,(function (field,opts){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$151,true)], null);
});
}));
reagent_forms.core.map_options = (function map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4477__auto__ = (function iter__19093(s__19094){
return (new cljs.core.LazySeq(null,(function (){
var s__19094__$1 = s__19094;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__19094__$1);
if(temp__4126__auto__){
var s__19094__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19094__$2)){
var c__4475__auto__ = cljs.core.chunk_first(s__19094__$2);
var size__4476__auto__ = cljs.core.count(c__4475__auto__);
var b__19096 = cljs.core.chunk_buffer(size__4476__auto__);
if((function (){var i__19095 = (0);
while(true){
if((i__19095 < size__4476__auto__)){
var vec__19103 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4475__auto__,i__19095);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19103,(0),null);
var map__19104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19103,(1),null);
var map__19104__$1 = ((cljs.core.seq_QMARK_(map__19104))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19104):map__19104);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19104__$1,cljs.core.constant$keyword$76);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19103,(2),null);
cljs.core.chunk_append(b__19096,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__19107 = (i__19095 + (1));
i__19095 = G__19107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19096),iter__19093(cljs.core.chunk_rest(s__19094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19096),null);
}
} else {
var vec__19105 = cljs.core.first(s__19094__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19105,(0),null);
var map__19106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19105,(1),null);
var map__19106__$1 = ((cljs.core.seq_QMARK_(map__19106))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19106):map__19106);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19106__$1,cljs.core.constant$keyword$76);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19105,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),iter__19093(cljs.core.rest(s__19094__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4477__auto__(options);
})());
});
reagent_forms.core.default_selection = (function default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19108_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__19108_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$76], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$156,(function (p__19111,p__19112){
var vec__19113 = p__19111;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19113,(0),null);
var map__19114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19113,(1),null);
var map__19114__$1 = ((cljs.core.seq_QMARK_(map__19114))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19114):map__19114);
var attrs = map__19114__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,cljs.core.constant$keyword$28);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,cljs.core.constant$keyword$110);
var options = cljs.core.nthnext(vec__19113,(2));
var map__19115 = p__19112;
var map__19115__$1 = ((cljs.core.seq_QMARK_(map__19115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19115):map__19115);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,cljs.core.constant$keyword$117);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,cljs.core.constant$keyword$118);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,cljs.core.constant$keyword$154);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__3721__auto__ = (function (){var G__19117 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19117) : get.call(null,G__19117));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$76], null));
}
})());
var G__19118_19126 = id;
var G__19119_19127 = (function (){var G__19120 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19120) : cljs.core.deref.call(null,G__19120));
})();
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19118_19126,G__19119_19127) : save_BANG_.call(null,G__19118_19126,G__19119_19127));

return ((function (options__$1,options_lookup,selection,vec__19113,type,map__19114,map__19114__$1,attrs,id,field,options,map__19115,map__19115__$1,save_BANG_,get,doc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,reagent_forms.core.default_selection(options__$1,(function (){var G__19121 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19121) : cljs.core.deref.call(null,G__19121));
})()),cljs.core.constant$keyword$120,((function (options__$1,options_lookup,selection,vec__19113,type,map__19114,map__19114__$1,attrs,id,field,options,map__19115,map__19115__$1,save_BANG_,get,doc){
return (function (p1__19109_SHARP_){
var G__19122 = id;
var G__19123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__19109_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19122,G__19123) : save_BANG_.call(null,G__19122,G__19123));
});})(options__$1,options_lookup,selection,vec__19113,type,map__19114,map__19114__$1,attrs,id,field,options,map__19115,map__19115__$1,save_BANG_,get,doc))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (options__$1,options_lookup,selection,vec__19113,type,map__19114,map__19114__$1,attrs,id,field,options,map__19115,map__19115__$1,save_BANG_,get,doc){
return (function (p1__19110_SHARP_){
var temp__4124__auto__ = cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19110_SHARP_));
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
var G__19124 = (function (){var G__19125 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19125) : cljs.core.deref.call(null,G__19125));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19124) : visible_QMARK_.call(null,G__19124));
} else {
return true;
}
});})(options__$1,options_lookup,selection,vec__19113,type,map__19114,map__19114__$1,attrs,id,field,options,map__19115,map__19115__$1,save_BANG_,get,doc))
,options__$1))], null);
});
;})(options__$1,options_lookup,selection,vec__19113,type,map__19114,map__19114__$1,attrs,id,field,options,map__19115,map__19115__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){
return (cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.constant$keyword$110));
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
var opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$154,doc,cljs.core.constant$keyword$118,(function (p1__19128_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19133 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19133) : cljs.core.deref.call(null,G__19133));
})(),(function (){var G__19134 = p1__19128_SHARP_;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__19134) : reagent_forms.core.id__GT_path.call(null,G__19134));
})());
}),cljs.core.constant$keyword$117,reagent_forms.core.mk_save_fn(doc,events)], null);
var form__$1 = clojure.walk.postwalk(((function (opts){
return (function (node){
if(reagent_forms.core.field_QMARK_(node)){
var field = (function (){var G__19135 = node;
var G__19136 = opts;
return (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(G__19135,G__19136) : reagent_forms.core.init_field.call(null,G__19135,G__19136));
})();
if(cljs.core.fn_QMARK_(field)){
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
  events = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__19137){
var form = cljs.core.first(arglist__19137);
arglist__19137 = cljs.core.next(arglist__19137);
var doc = cljs.core.first(arglist__19137);
var events = cljs.core.rest(arglist__19137);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;
