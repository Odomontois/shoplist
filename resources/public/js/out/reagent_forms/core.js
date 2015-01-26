// Compiled by ClojureScript 0.0-2665 {}
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
var path = (function (){var G__46539 = id;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__46539) : reagent_forms.core.id__GT_path.call(null,G__46539));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (p1__46531_SHARP_,p2__46530_SHARP_){
var or__3743__auto__ = (function (){var G__46543 = path;
var G__46544 = value;
var G__46545 = p1__46531_SHARP_;
return (p2__46530_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__46530_SHARP_.cljs$core$IFn$_invoke$arity$3(G__46543,G__46544,G__46545) : p2__46530_SHARP_.call(null,G__46543,G__46544,G__46545));
})();
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return p1__46531_SHARP_;
}
});})(path))
,cljs.core.assoc_in(doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.set_doc_value,id,value,cljs.core.array_seq([events], 0));
});
});
reagent_forms.core.format_type = (function (){var method_table__4640__auto__ = (function (){var G__46546 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46546) : cljs.core.atom.call(null,G__46546));
})();
var prefer_table__4641__auto__ = (function (){var G__46547 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46547) : cljs.core.atom.call(null,G__46547));
})();
var method_cache__4642__auto__ = (function (){var G__46548 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46548) : cljs.core.atom.call(null,G__46548));
})();
var cached_hierarchy__4643__auto__ = (function (){var G__46549 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46549) : cljs.core.atom.call(null,G__46549));
})();
var hierarchy__4644__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$109,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110,cljs.core.constant$keyword$111], null)))){
return cljs.core.constant$keyword$111;
} else {
return field_type;
}
});})(method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__))
,cljs.core.constant$keyword$7,hierarchy__4644__auto__,method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(cljs.core.butlast(n)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(n)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.last(n)));
});
reagent_forms.core.format_value = (function format_value(fmt,value){
if(cljs.core.truth_((function (){var and__3731__auto__ = cljs.core.not((function (){var G__46558 = (function (){var G__46559 = value;
return parseFloat(G__46559);
})();
return isNaN(G__46558);
})());
if(and__3731__auto__){
return fmt;
} else {
return and__3731__auto__;
}
})())){
var G__46560 = fmt;
var G__46561 = value;
return goog.string.format(G__46560,G__46561);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$111,(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = (function (){var G__46562 = n;
return parseFloat(G__46562);
})();
if(cljs.core.truth_((function (){var G__46563 = parsed;
return isNaN(G__46563);
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
reagent_forms.core.bind = (function (){var method_table__4640__auto__ = (function (){var G__46564 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46564) : cljs.core.atom.call(null,G__46564));
})();
var prefer_table__4641__auto__ = (function (){var G__46565 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46565) : cljs.core.atom.call(null,G__46565));
})();
var method_cache__4642__auto__ = (function (){var G__46566 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46566) : cljs.core.atom.call(null,G__46566));
})();
var cached_hierarchy__4643__auto__ = (function (){var G__46567 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46567) : cljs.core.atom.call(null,G__46567));
})();
var hierarchy__4644__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$109,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__){
return (function (p__46568,_){
var map__46569 = p__46568;
var map__46569__$1 = ((cljs.core.seq_QMARK_(map__46569))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46569):map__46569);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46569__$1,cljs.core.constant$keyword$112);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113,cljs.core.constant$keyword$111,cljs.core.constant$keyword$114,cljs.core.constant$keyword$115,cljs.core.constant$keyword$110,cljs.core.constant$keyword$116], null)))){
return cljs.core.constant$keyword$117;
} else {
return field;
}
});})(method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__))
,cljs.core.constant$keyword$7,hierarchy__4644__auto__,method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__));
})();
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$117,(function (p__46571,p__46572){
var map__46573 = p__46571;
var map__46573__$1 = ((cljs.core.seq_QMARK_(map__46573))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46573):map__46573);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46573__$1,cljs.core.constant$keyword$118);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46573__$1,cljs.core.constant$keyword$28);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46573__$1,cljs.core.constant$keyword$112);
var map__46574 = p__46572;
var map__46574__$1 = ((cljs.core.seq_QMARK_(map__46574))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46574):map__46574);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46574__$1,cljs.core.constant$keyword$119);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46574__$1,cljs.core.constant$keyword$120);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$121,(function (){var value = (function (){var or__3743__auto__ = (function (){var G__46576 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46576) : get.call(null,G__46576));
})();
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.constant$keyword$122,((function (map__46573,map__46573__$1,fmt,id,field,map__46574,map__46574__$1,save_BANG_,get){
return (function (p1__46570_SHARP_){
var G__46577 = id;
var G__46578 = (function (){var G__46579 = field;
var G__46580 = reagent_forms.core.value_of(p1__46570_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__46579,G__46580) : reagent_forms.core.format_type.call(null,G__46579,G__46580));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46577,G__46578) : save_BANG_.call(null,G__46577,G__46578));
});})(map__46573,map__46573__$1,fmt,id,field,map__46574,map__46574__$1,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$123,(function (p__46581,p__46582){
var map__46583 = p__46581;
var map__46583__$1 = ((cljs.core.seq_QMARK_(map__46583))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46583):map__46583);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46583__$1,cljs.core.constant$keyword$28);
var map__46584 = p__46582;
var map__46584__$1 = ((cljs.core.seq_QMARK_(map__46584))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46584):map__46584);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46584__$1,cljs.core.constant$keyword$119);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46584__$1,cljs.core.constant$keyword$120);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,(function (){var G__46585 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46585) : get.call(null,G__46585));
})(),cljs.core.constant$keyword$122,((function (map__46583,map__46583__$1,id,map__46584,map__46584__$1,save_BANG_,get){
return (function (){
var G__46586 = id;
var G__46587 = cljs.core.not((function (){var G__46588 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46588) : get.call(null,G__46588));
})());
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46586,G__46587) : save_BANG_.call(null,G__46586,G__46587));
});})(map__46583,map__46583__$1,id,map__46584,map__46584__$1,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (_,___$1){
return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__46589,opts,p__46590){
var vec__46595 = p__46589;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46595,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46595,(1),null);
var body = cljs.core.nthnext(vec__46595,(2));
var vec__46596 = p__46590;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46596,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attrs,(function (){var G__46597 = attrs;
var G__46598 = opts;
return (reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(G__46597,G__46598) : reagent_forms.core.bind.call(null,G__46597,G__46598));
})(),attrs], 0))], null),body);
};
var set_attrs = function (p__46589,opts,var_args){
var p__46590 = null;
if (arguments.length > 2) {
var G__46599__i = 0, G__46599__a = new Array(arguments.length -  2);
while (G__46599__i < G__46599__a.length) {G__46599__a[G__46599__i] = arguments[G__46599__i + 2]; ++G__46599__i;}
  p__46590 = new cljs.core.IndexedSeq(G__46599__a,0);
} 
return set_attrs__delegate.call(this,p__46589,opts,p__46590);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__46600){
var p__46589 = cljs.core.first(arglist__46600);
arglist__46600 = cljs.core.next(arglist__46600);
var opts = cljs.core.first(arglist__46600);
var p__46590 = cljs.core.rest(arglist__46600);
return set_attrs__delegate(p__46589,opts,p__46590);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__4640__auto__ = (function (){var G__46601 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46601) : cljs.core.atom.call(null,G__46601));
})();
var prefer_table__4641__auto__ = (function (){var G__46602 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46602) : cljs.core.atom.call(null,G__46602));
})();
var method_cache__4642__auto__ = (function (){var G__46603 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46603) : cljs.core.atom.call(null,G__46603));
})();
var cached_hierarchy__4643__auto__ = (function (){var G__46604 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46604) : cljs.core.atom.call(null,G__46604));
})();
var hierarchy__4644__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$109,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__){
return (function (p__46605,_){
var vec__46606 = p__46605;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46606,(0),null);
var map__46607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46606,(1),null);
var map__46607__$1 = ((cljs.core.seq_QMARK_(map__46607))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46607):map__46607);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46607__$1,cljs.core.constant$keyword$112);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110,cljs.core.constant$keyword$113,cljs.core.constant$keyword$114,cljs.core.constant$keyword$115,cljs.core.constant$keyword$116], null)))){
return cljs.core.constant$keyword$117;
} else {
return field__$1;
}
});})(method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__,hierarchy__4644__auto__))
,cljs.core.constant$keyword$7,hierarchy__4644__auto__,method_table__4640__auto__,prefer_table__4641__auto__,method_cache__4642__auto__,cached_hierarchy__4643__auto__));
})();
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$125,(function (p__46608,p__46609){
var vec__46610 = p__46608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(1),null);
var component = vec__46610;
var map__46611 = p__46609;
var map__46611__$1 = ((cljs.core.seq_QMARK_(map__46611))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46611):map__46611);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46611__$1,cljs.core.constant$keyword$126);
return ((function (vec__46610,_,attrs,component,map__46611,map__46611__$1,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46612 = (function (){var G__46613 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46613) : cljs.core.deref.call(null,G__46613));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46612) : visible__12259__auto__.call(null,G__46612));
})())){
return component;
} else {
return null;
}
} else {
return component;
}
});
;})(vec__46610,_,attrs,component,map__46611,map__46611__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$117,(function (p__46614,p__46615){
var vec__46616 = p__46614;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46616,(0),null);
var map__46617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46616,(1),null);
var map__46617__$1 = ((cljs.core.seq_QMARK_(map__46617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46617):map__46617);
var attrs = map__46617__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46617__$1,cljs.core.constant$keyword$112);
var component = vec__46616;
var map__46618 = p__46615;
var map__46618__$1 = ((cljs.core.seq_QMARK_(map__46618))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46618):map__46618);
var opts = map__46618__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46618__$1,cljs.core.constant$keyword$126);
return ((function (vec__46616,_,map__46617,map__46617__$1,attrs,field,component,map__46618,map__46618__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46619 = (function (){var G__46620 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46620) : cljs.core.deref.call(null,G__46620));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46619) : visible__12259__auto__.call(null,G__46619));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,field], null)], 0));
}
});
;})(vec__46616,_,map__46617,map__46617__$1,attrs,field,component,map__46618,map__46618__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$111,(function (p__46622,p__46623){
var vec__46624 = p__46622;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46624,(0),null);
var map__46625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46624,(1),null);
var map__46625__$1 = ((cljs.core.seq_QMARK_(map__46625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46625):map__46625);
var attrs = map__46625__$1;
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46625__$1,cljs.core.constant$keyword$118);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46625__$1,cljs.core.constant$keyword$28);
var map__46626 = p__46623;
var map__46626__$1 = ((cljs.core.seq_QMARK_(map__46626))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46626):map__46626);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46626__$1,cljs.core.constant$keyword$119);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46626__$1,cljs.core.constant$keyword$120);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46626__$1,cljs.core.constant$keyword$126);
var display_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$128,false,cljs.core.constant$keyword$121,(function (){var G__46627 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46627) : get.call(null,G__46627));
})()], null));
return ((function (display_value,vec__46624,type,map__46625,map__46625__$1,attrs,fmt,id,map__46626,map__46626__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46628 = (function (){var G__46629 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46629) : cljs.core.deref.call(null,G__46629));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46628) : visible__12259__auto__.call(null,G__46628));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$34,cljs.core.constant$keyword$113,cljs.core.constant$keyword$121,(function (){var doc_value = (function (){var or__3743__auto__ = (function (){var G__46632 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46632) : get.call(null,G__46632));
})();
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return "";
}
})();
var map__46630 = (function (){var G__46633 = display_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46633) : cljs.core.deref.call(null,G__46633));
})();
var map__46630__$1 = ((cljs.core.seq_QMARK_(map__46630))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46630):map__46630);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46630__$1,cljs.core.constant$keyword$121);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46630__$1,cljs.core.constant$keyword$128);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.constant$keyword$128);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.constant$keyword$122,((function (visible__12259__auto__,temp__4124__auto__,display_value,vec__46624,type,map__46625,map__46625__$1,attrs,fmt,id,map__46626,map__46626__$1,save_BANG_,get,doc){
return (function (p1__46621_SHARP_){
var temp__4124__auto____$1 = (function (){var G__46634 = cljs.core.constant$keyword$111;
var G__46635 = reagent_forms.core.value_of(p1__46621_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__46634,G__46635) : reagent_forms.core.format_type.call(null,G__46634,G__46635));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
var G__46636_46656 = display_value;
var G__46637_46657 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$121,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46636_46656,G__46637_46657) : cljs.core.reset_BANG_.call(null,G__46636_46656,G__46637_46657));

var G__46638 = id;
var G__46639 = (function (){var G__46640 = value;
return parseFloat(G__46640);
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46638,G__46639) : save_BANG_.call(null,G__46638,G__46639));
} else {
var G__46641 = id;
var G__46642 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46641,G__46642) : save_BANG_.call(null,G__46641,G__46642));
}
});})(visible__12259__auto__,temp__4124__auto__,display_value,vec__46624,type,map__46625,map__46625__$1,attrs,fmt,id,map__46626,map__46626__$1,save_BANG_,get,doc))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$34,cljs.core.constant$keyword$113,cljs.core.constant$keyword$121,(function (){var doc_value = (function (){var or__3743__auto__ = (function (){var G__46645 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46645) : get.call(null,G__46645));
})();
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return "";
}
})();
var map__46643 = (function (){var G__46646 = display_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46646) : cljs.core.deref.call(null,G__46646));
})();
var map__46643__$1 = ((cljs.core.seq_QMARK_(map__46643))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46643):map__46643);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46643__$1,cljs.core.constant$keyword$121);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46643__$1,cljs.core.constant$keyword$128);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.constant$keyword$128);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.constant$keyword$122,((function (temp__4124__auto__,display_value,vec__46624,type,map__46625,map__46625__$1,attrs,fmt,id,map__46626,map__46626__$1,save_BANG_,get,doc){
return (function (p1__46621_SHARP_){
var temp__4124__auto____$1 = (function (){var G__46647 = cljs.core.constant$keyword$111;
var G__46648 = reagent_forms.core.value_of(p1__46621_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__46647,G__46648) : reagent_forms.core.format_type.call(null,G__46647,G__46648));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
var G__46649_46658 = display_value;
var G__46650_46659 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$121,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46649_46658,G__46650_46659) : cljs.core.reset_BANG_.call(null,G__46649_46658,G__46650_46659));

var G__46651 = id;
var G__46652 = (function (){var G__46653 = value;
return parseFloat(G__46653);
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46651,G__46652) : save_BANG_.call(null,G__46651,G__46652));
} else {
var G__46654 = id;
var G__46655 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46654,G__46655) : save_BANG_.call(null,G__46654,G__46655));
}
});})(temp__4124__auto__,display_value,vec__46624,type,map__46625,map__46625__$1,attrs,fmt,id,map__46626,map__46626__$1,save_BANG_,get,doc))
], null),attrs], 0))], null);
}
});
;})(display_value,vec__46624,type,map__46625,map__46625__$1,attrs,fmt,id,map__46626,map__46626__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$129,(function (p__46661,p__46662){
var vec__46663 = p__46661;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46663,(0),null);
var map__46664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46663,(1),null);
var map__46664__$1 = ((cljs.core.seq_QMARK_(map__46664))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46664):map__46664);
var attrs = map__46664__$1;
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46664__$1,cljs.core.constant$keyword$130);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46664__$1,cljs.core.constant$keyword$131);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46664__$1,cljs.core.constant$keyword$132);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46664__$1,cljs.core.constant$keyword$28);
var map__46665 = p__46662;
var map__46665__$1 = ((cljs.core.seq_QMARK_(map__46665))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46665):map__46665);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46665__$1,cljs.core.constant$keyword$119);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46665__$1,cljs.core.constant$keyword$120);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46665__$1,cljs.core.constant$keyword$126);
var fmt = reagent_forms.datepicker.parse_format(date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46666 = (function (){var G__46667 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46667) : cljs.core.deref.call(null,G__46667));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46666) : visible__12259__auto__.call(null,G__46666));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,true,cljs.core.constant$keyword$34,cljs.core.constant$keyword$113,cljs.core.constant$keyword$96,((function (visible__12259__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__12259__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$121,(function (){var temp__4126__auto__ = (function (){var G__46668 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46668) : get.call(null,G__46668));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,((function (visible__12259__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__12259__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__12259__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc){
return (function (){
var G__46669 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46669) : get.call(null,G__46669));
});})(visible__12259__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc))
,((function (visible__12259__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc){
return (function (p1__46660_SHARP_){
var G__46670 = id;
var G__46671 = p1__46660_SHARP_;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46670,G__46671) : save_BANG_.call(null,G__46670,G__46671));
});})(visible__12259__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc))
], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$135,true,cljs.core.constant$keyword$34,cljs.core.constant$keyword$113,cljs.core.constant$keyword$96,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$121,(function (){var temp__4126__auto__ = (function (){var G__46672 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46672) : get.call(null,G__46672));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc){
return (function (){
var G__46673 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46673) : get.call(null,G__46673));
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc))
,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc){
return (function (p1__46660_SHARP_){
var G__46674 = id;
var G__46675 = p1__46660_SHARP_;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46674,G__46675) : save_BANG_.call(null,G__46674,G__46675));
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc))
], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__46663,_,map__46664,map__46664__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__46665,map__46665__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$123,(function (p__46676,p__46677){
var vec__46678 = p__46676;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46678,(0),null);
var map__46679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46678,(1),null);
var map__46679__$1 = ((cljs.core.seq_QMARK_(map__46679))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46679):map__46679);
var attrs = map__46679__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46679__$1,cljs.core.constant$keyword$112);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46679__$1,cljs.core.constant$keyword$28);
var component = vec__46678;
var map__46680 = p__46677;
var map__46680__$1 = ((cljs.core.seq_QMARK_(map__46680))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46680):map__46680);
var opts = map__46680__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46680__$1,cljs.core.constant$keyword$120);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46680__$1,cljs.core.constant$keyword$126);
return ((function (vec__46678,_,map__46679,map__46679__$1,attrs,field,id,component,map__46680,map__46680__$1,opts,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46681 = (function (){var G__46682 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46682) : cljs.core.deref.call(null,G__46682));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46681) : visible__12259__auto__.call(null,G__46681));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,field], null)], 0));
}
});
;})(vec__46678,_,map__46679,map__46679__$1,attrs,field,id,component,map__46680,map__46680__$1,opts,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$138,(function (p__46683,p__46684){
var vec__46685 = p__46683;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46685,(0),null);
var map__46686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46685,(1),null);
var map__46686__$1 = ((cljs.core.seq_QMARK_(map__46686))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46686):map__46686);
var attrs = map__46686__$1;
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46686__$1,cljs.core.constant$keyword$139);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46686__$1,cljs.core.constant$keyword$140);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46686__$1,cljs.core.constant$keyword$141);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46686__$1,cljs.core.constant$keyword$28);
var map__46687 = p__46684;
var map__46687__$1 = ((cljs.core.seq_QMARK_(map__46687))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46687):map__46687);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46687__$1,cljs.core.constant$keyword$120);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46687__$1,cljs.core.constant$keyword$126);
return ((function (vec__46685,type,map__46686,map__46686__$1,attrs,placeholder,postamble,preamble,id,map__46687,map__46687__$1,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46688 = (function (){var G__46689 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46689) : cljs.core.deref.call(null,G__46689));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46688) : visible__12259__auto__.call(null,G__46688));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = (function (){var G__46690 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46690) : get.call(null,G__46690));
})();
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = (function (){var G__46691 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46691) : get.call(null,G__46691));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__46685,type,map__46686,map__46686__$1,attrs,placeholder,postamble,preamble,id,map__46687,map__46687__$1,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$142,(function (p__46692,p__46693){
var vec__46694 = p__46692;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46694,(0),null);
var map__46695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46694,(1),null);
var map__46695__$1 = ((cljs.core.seq_QMARK_(map__46695))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46695):map__46695);
var attrs = map__46695__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46695__$1,cljs.core.constant$keyword$143);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46695__$1,cljs.core.constant$keyword$144);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46695__$1,cljs.core.constant$keyword$28);
var body = cljs.core.nthnext(vec__46694,(2));
var map__46696 = p__46693;
var map__46696__$1 = ((cljs.core.seq_QMARK_(map__46696))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46696):map__46696);
var opts = map__46696__$1;
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46696__$1,cljs.core.constant$keyword$119);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46696__$1,cljs.core.constant$keyword$120);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46696__$1,cljs.core.constant$keyword$126);
return ((function (vec__46694,type,map__46695,map__46695__$1,attrs,touch_event,event,id,body,map__46696,map__46696__$1,opts,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46697 = (function (){var G__46698 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46698) : cljs.core.deref.call(null,G__46698));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46697) : visible__12259__auto__.call(null,G__46697));
})())){
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__46699 = (function (){var G__46700 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46700) : get.call(null,G__46700));
})();
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__46699) : event.call(null,G__46699));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty((function (){var G__46701 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46701) : get.call(null,G__46701));
})());
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,"button",cljs.core.constant$keyword$146,true,(function (){var or__3743__auto__ = touch_event;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return cljs.core.constant$keyword$96;
}
})(),((function (message,temp__4124__auto____$1,visible__12259__auto__,temp__4124__auto__,vec__46694,type,map__46695,map__46695__$1,attrs,touch_event,event,id,body,map__46696,map__46696__$1,opts,save_BANG_,get,doc){
return (function (){
var G__46702 = id;
var G__46703 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46702,G__46703) : save_BANG_.call(null,G__46702,G__46703));
});})(message,temp__4124__auto____$1,visible__12259__auto__,temp__4124__auto__,vec__46694,type,map__46695,map__46695__$1,attrs,touch_event,event,id,body,map__46696,map__46696__$1,opts,save_BANG_,get,doc))
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
if(cljs.core.truth_((function (){var G__46704 = (function (){var G__46705 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46705) : get.call(null,G__46705));
})();
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__46704) : event.call(null,G__46704));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty((function (){var G__46706 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46706) : get.call(null,G__46706));
})());
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$34,"button",cljs.core.constant$keyword$146,true,(function (){var or__3743__auto__ = touch_event;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return cljs.core.constant$keyword$96;
}
})(),((function (message,temp__4124__auto____$1,temp__4124__auto__,vec__46694,type,map__46695,map__46695__$1,attrs,touch_event,event,id,body,map__46696,map__46696__$1,opts,save_BANG_,get,doc){
return (function (){
var G__46707 = id;
var G__46708 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46707,G__46708) : save_BANG_.call(null,G__46707,G__46708));
});})(message,temp__4124__auto____$1,temp__4124__auto__,vec__46694,type,map__46695,map__46695__$1,attrs,touch_event,event,id,body,map__46696,map__46696__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__46694,type,map__46695,map__46695__$1,attrs,touch_event,event,id,body,map__46696,map__46696__$1,opts,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$147,(function (p__46709,p__46710){
var vec__46711 = p__46709;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46711,(0),null);
var map__46712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46711,(1),null);
var map__46712__$1 = ((cljs.core.seq_QMARK_(map__46712))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46712):map__46712);
var attrs = map__46712__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46712__$1,cljs.core.constant$keyword$121);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46712__$1,cljs.core.constant$keyword$28);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46712__$1,cljs.core.constant$keyword$112);
var body = cljs.core.nthnext(vec__46711,(2));
var map__46713 = p__46710;
var map__46713__$1 = ((cljs.core.seq_QMARK_(map__46713))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46713):map__46713);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,cljs.core.constant$keyword$119);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,cljs.core.constant$keyword$120);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46713__$1,cljs.core.constant$keyword$126);
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__46714 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46714) : get.call(null,G__46714));
})()));
return ((function (state,vec__46711,type,map__46712,map__46712__$1,attrs,value,id,field,body,map__46713,map__46713__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46715 = (function (){var G__46716 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46716) : cljs.core.deref.call(null,G__46716));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46715) : visible__12259__auto__.call(null,G__46715));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$34,cljs.core.constant$keyword$147,cljs.core.constant$keyword$124,(function (){var G__46717 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46717) : cljs.core.deref.call(null,G__46717));
})(),cljs.core.constant$keyword$122,((function (visible__12259__auto__,temp__4124__auto__,state,vec__46711,type,map__46712,map__46712__$1,attrs,value,id,field,body,map__46713,map__46713__$1,save_BANG_,get,doc){
return (function (){
var G__46718_46729 = id;
var G__46719_46730 = value;
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46718_46729,G__46719_46730) : save_BANG_.call(null,G__46718_46729,G__46719_46730));

var G__46720 = state;
var G__46721 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__46722 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46722) : get.call(null,G__46722));
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46720,G__46721) : cljs.core.reset_BANG_.call(null,G__46720,G__46721));
});})(visible__12259__auto__,temp__4124__auto__,state,vec__46711,type,map__46712,map__46712__$1,attrs,value,id,field,body,map__46713,map__46713__$1,save_BANG_,get,doc))
], null),attrs], 0))], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$34,cljs.core.constant$keyword$147,cljs.core.constant$keyword$124,(function (){var G__46723 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46723) : cljs.core.deref.call(null,G__46723));
})(),cljs.core.constant$keyword$122,((function (temp__4124__auto__,state,vec__46711,type,map__46712,map__46712__$1,attrs,value,id,field,body,map__46713,map__46713__$1,save_BANG_,get,doc){
return (function (){
var G__46724_46731 = id;
var G__46725_46732 = value;
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46724_46731,G__46725_46732) : save_BANG_.call(null,G__46724_46731,G__46725_46732));

var G__46726 = state;
var G__46727 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__46728 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46728) : get.call(null,G__46728));
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46726,G__46727) : cljs.core.reset_BANG_.call(null,G__46726,G__46727));
});})(temp__4124__auto__,state,vec__46711,type,map__46712,map__46712__$1,attrs,value,id,field,body,map__46713,map__46713__$1,save_BANG_,get,doc))
], null),attrs], 0))], null),body);
}
});
;})(state,vec__46711,type,map__46712,map__46712__$1,attrs,value,id,field,body,map__46713,map__46713__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$148,(function (p__46734,p__46735){
var vec__46736 = p__46734;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46736,(0),null);
var map__46737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46736,(1),null);
var map__46737__$1 = ((cljs.core.seq_QMARK_(map__46737))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46737):map__46737);
var attrs = map__46737__$1;
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46737__$1,cljs.core.constant$keyword$149);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46737__$1,cljs.core.constant$keyword$28);
var map__46738 = p__46735;
var map__46738__$1 = ((cljs.core.seq_QMARK_(map__46738))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46738):map__46738);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46738__$1,cljs.core.constant$keyword$119);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46738__$1,cljs.core.constant$keyword$120);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46738__$1,cljs.core.constant$keyword$126);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46739 = (function (){var G__46740 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46740) : cljs.core.deref.call(null,G__46740));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46739) : visible__12259__auto__.call(null,G__46739));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$34,cljs.core.constant$keyword$113,cljs.core.constant$keyword$121,(function (){var G__46741 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46741) : get.call(null,G__46741));
})(),cljs.core.constant$keyword$151,((function (visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_((function (){var G__46742 = mouse_on_list_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46742) : cljs.core.deref.call(null,G__46742));
})())){
return null;
} else {
var G__46743 = typeahead_hidden_QMARK_;
var G__46744 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46743,G__46744) : cljs.core.reset_BANG_.call(null,G__46743,G__46744));
}
});})(visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$122,((function (visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (p1__46733_SHARP_){
var G__46745_46817 = id;
var G__46746_46818 = reagent_forms.core.value_of(p1__46733_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46745_46817,G__46746_46818) : save_BANG_.call(null,G__46745_46817,G__46746_46818));

var G__46747 = typeahead_hidden_QMARK_;
var G__46748 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46747,G__46748) : cljs.core.reset_BANG_.call(null,G__46747,G__46748));
});})(visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = (function (){var G__46749 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46749) : get.call(null,G__46749));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = (function (){var G__46750 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__46750) : data_source.call(null,G__46750));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$153,(function (){var or__3743__auto__ = cljs.core.empty_QMARK_(results);
if(or__3743__auto__){
return or__3743__auto__;
} else {
var G__46752 = typeahead_hidden_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46752) : cljs.core.deref.call(null,G__46752));
}
})(),cljs.core.constant$keyword$154,((function (results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var G__46753 = mouse_on_list_QMARK_;
var G__46754 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46753,G__46754) : cljs.core.reset_BANG_.call(null,G__46753,G__46754));
});})(results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$155,((function (results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var G__46755 = mouse_on_list_QMARK_;
var G__46756 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46755,G__46756) : cljs.core.reset_BANG_.call(null,G__46755,G__46756));
});})(results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
], null),(function (){var iter__4499__auto__ = ((function (results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function iter__46757(s__46758){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var s__46758__$1 = s__46758;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46758__$1);
if(temp__4126__auto____$1){
var s__46758__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46758__$2)){
var c__4497__auto__ = cljs.core.chunk_first(s__46758__$2);
var size__4498__auto__ = cljs.core.count(c__4497__auto__);
var b__46760 = cljs.core.chunk_buffer(size__4498__auto__);
if((function (){var i__46759 = (0);
while(true){
if((i__46759 < size__4498__auto__)){
var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4497__auto__,i__46759);
cljs.core.chunk_append(b__46760,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,((function (i__46759,result,c__4497__auto__,size__4498__auto__,b__46760,s__46758__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var G__46771_46819 = typeahead_hidden_QMARK_;
var G__46772_46820 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46771_46819,G__46772_46820) : cljs.core.reset_BANG_.call(null,G__46771_46819,G__46772_46820));

var G__46773 = id;
var G__46774 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46773,G__46774) : save_BANG_.call(null,G__46773,G__46774));
});})(i__46759,result,c__4497__auto__,size__4498__auto__,b__46760,s__46758__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
], null),result], null));

var G__46821 = (i__46759 + (1));
i__46759 = G__46821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46760),iter__46757(cljs.core.chunk_rest(s__46758__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46760),null);
}
} else {
var result = cljs.core.first(s__46758__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,((function (result,s__46758__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var G__46775_46822 = typeahead_hidden_QMARK_;
var G__46776_46823 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46775_46822,G__46776_46823) : cljs.core.reset_BANG_.call(null,G__46775_46822,G__46776_46823));

var G__46777 = id;
var G__46778 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46777,G__46778) : save_BANG_.call(null,G__46777,G__46778));
});})(result,s__46758__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
], null),result], null),iter__46757(cljs.core.rest(s__46758__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,visible__12259__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
;
return iter__4499__auto__(results);
})()], null);
} else {
return null;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$34,cljs.core.constant$keyword$113,cljs.core.constant$keyword$121,(function (){var G__46779 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46779) : get.call(null,G__46779));
})(),cljs.core.constant$keyword$151,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_((function (){var G__46780 = mouse_on_list_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46780) : cljs.core.deref.call(null,G__46780));
})())){
return null;
} else {
var G__46781 = typeahead_hidden_QMARK_;
var G__46782 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46781,G__46782) : cljs.core.reset_BANG_.call(null,G__46781,G__46782));
}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$122,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (p1__46733_SHARP_){
var G__46783_46824 = id;
var G__46784_46825 = reagent_forms.core.value_of(p1__46733_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46783_46824,G__46784_46825) : save_BANG_.call(null,G__46783_46824,G__46784_46825));

var G__46785 = typeahead_hidden_QMARK_;
var G__46786 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46785,G__46786) : cljs.core.reset_BANG_.call(null,G__46785,G__46786));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = (function (){var G__46787 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46787) : get.call(null,G__46787));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = (function (){var G__46788 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__46788) : data_source.call(null,G__46788));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$153,(function (){var or__3743__auto__ = cljs.core.empty_QMARK_(results);
if(or__3743__auto__){
return or__3743__auto__;
} else {
var G__46790 = typeahead_hidden_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46790) : cljs.core.deref.call(null,G__46790));
}
})(),cljs.core.constant$keyword$154,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var G__46791 = mouse_on_list_QMARK_;
var G__46792 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46791,G__46792) : cljs.core.reset_BANG_.call(null,G__46791,G__46792));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$155,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var G__46793 = mouse_on_list_QMARK_;
var G__46794 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46793,G__46794) : cljs.core.reset_BANG_.call(null,G__46793,G__46794));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
], null),(function (){var iter__4499__auto__ = ((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function iter__46795(s__46796){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var s__46796__$1 = s__46796;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46796__$1);
if(temp__4126__auto____$1){
var s__46796__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46796__$2)){
var c__4497__auto__ = cljs.core.chunk_first(s__46796__$2);
var size__4498__auto__ = cljs.core.count(c__4497__auto__);
var b__46798 = cljs.core.chunk_buffer(size__4498__auto__);
if((function (){var i__46797 = (0);
while(true){
if((i__46797 < size__4498__auto__)){
var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4497__auto__,i__46797);
cljs.core.chunk_append(b__46798,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,((function (i__46797,result,c__4497__auto__,size__4498__auto__,b__46798,s__46796__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var G__46809_46826 = typeahead_hidden_QMARK_;
var G__46810_46827 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46809_46826,G__46810_46827) : cljs.core.reset_BANG_.call(null,G__46809_46826,G__46810_46827));

var G__46811 = id;
var G__46812 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46811,G__46812) : save_BANG_.call(null,G__46811,G__46812));
});})(i__46797,result,c__4497__auto__,size__4498__auto__,b__46798,s__46796__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
], null),result], null));

var G__46828 = (i__46797 + (1));
i__46797 = G__46828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46798),iter__46795(cljs.core.chunk_rest(s__46796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46798),null);
}
} else {
var result = cljs.core.first(s__46796__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,((function (result,s__46796__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc){
return (function (){
var G__46813_46829 = typeahead_hidden_QMARK_;
var G__46814_46830 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46813_46829,G__46814_46830) : cljs.core.reset_BANG_.call(null,G__46813_46829,G__46814_46830));

var G__46815 = id;
var G__46816 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46815,G__46816) : save_BANG_.call(null,G__46815,G__46816));
});})(result,s__46796__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
], null),result], null),iter__46795(cljs.core.rest(s__46796__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
;
return iter__4499__auto__(results);
})()], null);
} else {
return null;
}
})()], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__46736,type,map__46737,map__46737__$1,attrs,data_source,id,map__46738,map__46738__$1,save_BANG_,get,doc))
}));
reagent_forms.core.group_item = (function group_item(p__46831,p__46832,selections,field,id){
var vec__46873 = p__46831;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46873,(0),null);
var map__46874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46873,(1),null);
var map__46874__$1 = ((cljs.core.seq_QMARK_(map__46874))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46874):map__46874);
var attrs = map__46874__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46874__$1,cljs.core.constant$keyword$143);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46874__$1,cljs.core.constant$keyword$76);
var body = cljs.core.nthnext(vec__46873,(2));
var map__46875 = p__46832;
var map__46875__$1 = ((cljs.core.seq_QMARK_(map__46875))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46875):map__46875);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46875__$1,cljs.core.constant$keyword$157);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46875__$1,cljs.core.constant$keyword$119);
var handle_click_BANG_ = ((function (vec__46873,type,map__46874,map__46874__$1,attrs,touch_event,key,body,map__46875,map__46875__$1,multi_select,save_BANG_){
return (function handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__46903 = id;
var G__46904 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__46905 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46905) : cljs.core.deref.call(null,G__46905));
})()));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46903,G__46904) : save_BANG_.call(null,G__46903,G__46904));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__46906 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46906) : cljs.core.deref.call(null,G__46906));
})(),key);
var G__46907_46913 = selections;
var G__46908_46914 = new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not(value)], true, false);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46907_46913,G__46908_46914) : cljs.core.reset_BANG_.call(null,G__46907_46913,G__46908_46914));

var G__46909 = id;
var G__46910 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__46911 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46911) : cljs.core.deref.call(null,G__46911));
})(),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46909,G__46910) : save_BANG_.call(null,G__46909,G__46910));
}
});})(vec__46873,type,map__46874,map__46874__$1,attrs,touch_event,key,body,map__46875,map__46875__$1,multi_select,save_BANG_))
;
return ((function (vec__46873,type,map__46874,map__46874__$1,attrs,touch_event,key,body,map__46875,map__46875__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$61,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__46912 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46912) : cljs.core.deref.call(null,G__46912));
})(),key))?"active":null),(function (){var or__3743__auto__ = touch_event;
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return cljs.core.constant$keyword$96;
}
})(),handle_click_BANG_], true, false),attrs], 0)),body], null);
});
;})(vec__46873,type,map__46874,map__46874__$1,attrs,touch_event,key,body,map__46875,map__46875__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__46915){
var map__46921 = p__46915;
var map__46921__$1 = ((cljs.core.seq_QMARK_(map__46921))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46921):map__46921);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46921__$1,cljs.core.constant$keyword$157);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46921__$1,cljs.core.constant$keyword$120);
var value = (function (){var G__46922 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46922) : get.call(null,G__46922));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__46921,map__46921__$1,multi_select,get){
return (function (m,p__46923){
var vec__46924 = p__46923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46924,(0),null);
var map__46925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46924,(1),null);
var map__46925__$1 = ((cljs.core.seq_QMARK_(map__46925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46925):map__46925);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,cljs.core.constant$keyword$76);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__46921,map__46921__$1,multi_select,get))
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
reagent_forms.core.selection_group = (function selection_group(p__46928,p__46929){
var vec__46938 = p__46928;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46938,(0),null);
var map__46939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46938,(1),null);
var map__46939__$1 = ((cljs.core.seq_QMARK_(map__46939))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46939):map__46939);
var attrs = map__46939__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46939__$1,cljs.core.constant$keyword$28);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46939__$1,cljs.core.constant$keyword$112);
var selection_items = cljs.core.nthnext(vec__46938,(2));
var map__46940 = p__46929;
var map__46940__$1 = ((cljs.core.seq_QMARK_(map__46940))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46940):map__46940);
var opts = map__46940__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46940__$1,cljs.core.constant$keyword$120);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$127,cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.constant$keyword$158,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get){
return (function (){
if(cljs.core.truth_((function (){var G__46941 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46941) : get.call(null,G__46941));
})())){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get){
return (function (p1__46926_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get){
return (function (p__46942){
var vec__46943 = p__46942;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46943,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get))
,p1__46926_SHARP_));
});})(selection_items__$1,selections,selectors,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$158,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get){
return (function (p1__46927_SHARP_){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(p1__46927_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
var G__46944 = (function (){var G__46945 = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(opts);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46945) : cljs.core.deref.call(null,G__46945));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46944) : visible_QMARK_.call(null,G__46944));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__46938,type,map__46939,map__46939__$1,attrs,id,field,selection_items,map__46940,map__46940__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$159,(function (p__46946,p__46947){
var vec__46948 = p__46946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46948,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46948,(1),null);
var field = vec__46948;
var map__46949 = p__46947;
var map__46949__$1 = ((cljs.core.seq_QMARK_(map__46949))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46949):map__46949);
var opts = map__46949__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46949__$1,cljs.core.constant$keyword$126);
return ((function (vec__46948,_,attrs,field,map__46949,map__46949__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46950 = (function (){var G__46951 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46951) : cljs.core.deref.call(null,G__46951));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46950) : visible__12259__auto__.call(null,G__46950));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__46948,_,attrs,field,map__46949,map__46949__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$157,(function (p__46952,p__46953){
var vec__46954 = p__46952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46954,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46954,(1),null);
var field = vec__46954;
var map__46955 = p__46953;
var map__46955__$1 = ((cljs.core.seq_QMARK_(map__46955))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46955):map__46955);
var opts = map__46955__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46955__$1,cljs.core.constant$keyword$126);
return ((function (vec__46954,_,attrs,field,map__46955,map__46955__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__46956 = (function (){var G__46957 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46957) : cljs.core.deref.call(null,G__46957));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__46956) : visible__12259__auto__.call(null,G__46956));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$157,true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$157,true)], null);
}
});
;})(vec__46954,_,attrs,field,map__46955,map__46955__$1,opts,doc))
}));
reagent_forms.core.map_options = (function map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4499__auto__ = (function iter__46972(s__46973){
return (new cljs.core.LazySeq(null,(function (){
var s__46973__$1 = s__46973;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__46973__$1);
if(temp__4126__auto__){
var s__46973__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46973__$2)){
var c__4497__auto__ = cljs.core.chunk_first(s__46973__$2);
var size__4498__auto__ = cljs.core.count(c__4497__auto__);
var b__46975 = cljs.core.chunk_buffer(size__4498__auto__);
if((function (){var i__46974 = (0);
while(true){
if((i__46974 < size__4498__auto__)){
var vec__46982 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4497__auto__,i__46974);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(0),null);
var map__46983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(1),null);
var map__46983__$1 = ((cljs.core.seq_QMARK_(map__46983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46983):map__46983);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46983__$1,cljs.core.constant$keyword$76);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(2),null);
cljs.core.chunk_append(b__46975,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__46986 = (i__46974 + (1));
i__46974 = G__46986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46975),iter__46972(cljs.core.chunk_rest(s__46973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46975),null);
}
} else {
var vec__46984 = cljs.core.first(s__46973__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46984,(0),null);
var map__46985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46984,(1),null);
var map__46985__$1 = ((cljs.core.seq_QMARK_(map__46985))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46985):map__46985);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,cljs.core.constant$keyword$76);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46984,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),iter__46972(cljs.core.rest(s__46973__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4499__auto__(options);
})());
});
reagent_forms.core.default_selection = (function default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46987_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__46987_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$76], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$160,(function (p__46990,p__46991){
var vec__46992 = p__46990;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46992,(0),null);
var map__46993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46992,(1),null);
var map__46993__$1 = ((cljs.core.seq_QMARK_(map__46993))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46993):map__46993);
var attrs = map__46993__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46993__$1,cljs.core.constant$keyword$28);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46993__$1,cljs.core.constant$keyword$112);
var options = cljs.core.nthnext(vec__46992,(2));
var map__46994 = p__46991;
var map__46994__$1 = ((cljs.core.seq_QMARK_(map__46994))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46994):map__46994);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,cljs.core.constant$keyword$119);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,cljs.core.constant$keyword$120);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,cljs.core.constant$keyword$126);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__3743__auto__ = (function (){var G__46996 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__46996) : get.call(null,G__46996));
})();
if(cljs.core.truth_(or__3743__auto__)){
return or__3743__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$76], null));
}
})());
var G__46997_47012 = id;
var G__46998_47013 = (function (){var G__46999 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46999) : cljs.core.deref.call(null,G__46999));
})();
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__46997_47012,G__46998_47013) : save_BANG_.call(null,G__46997_47012,G__46998_47013));

return ((function (options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__12259__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__47000 = (function (){var G__47001 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47001) : cljs.core.deref.call(null,G__47001));
})();
return (visible__12259__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__12259__auto__.cljs$core$IFn$_invoke$arity$1(G__47000) : visible__12259__auto__.call(null,G__47000));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,reagent_forms.core.default_selection(options__$1,(function (){var G__47002 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47002) : cljs.core.deref.call(null,G__47002));
})()),cljs.core.constant$keyword$122,((function (visible__12259__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc){
return (function (p1__46988_SHARP_){
var G__47003 = id;
var G__47004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__46988_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__47003,G__47004) : save_BANG_.call(null,G__47003,G__47004));
});})(visible__12259__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (visible__12259__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc){
return (function (p1__46989_SHARP_){
var temp__4124__auto____$1 = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__46989_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
var G__47005 = (function (){var G__47006 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47006) : cljs.core.deref.call(null,G__47006));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__47005) : visible_QMARK_.call(null,G__47005));
} else {
return true;
}
});})(visible__12259__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,reagent_forms.core.default_selection(options__$1,(function (){var G__47007 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47007) : cljs.core.deref.call(null,G__47007));
})()),cljs.core.constant$keyword$122,((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc){
return (function (p1__46988_SHARP_){
var G__47008 = id;
var G__47009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__46988_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__47008,G__47009) : save_BANG_.call(null,G__47008,G__47009));
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc){
return (function (p1__46989_SHARP_){
var temp__4124__auto____$1 = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__46989_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
var G__47010 = (function (){var G__47011 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47011) : cljs.core.deref.call(null,G__47011));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__47010) : visible_QMARK_.call(null,G__47010));
} else {
return true;
}
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__46992,type,map__46993,map__46993__$1,attrs,id,field,options,map__46994,map__46994__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){
return (cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.constant$keyword$112));
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
var opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$126,doc,cljs.core.constant$keyword$120,(function (p1__47014_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__47019 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47019) : cljs.core.deref.call(null,G__47019));
})(),(function (){var G__47020 = p1__47014_SHARP_;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__47020) : reagent_forms.core.id__GT_path.call(null,G__47020));
})());
}),cljs.core.constant$keyword$119,reagent_forms.core.mk_save_fn(doc,events)], null);
var form__$1 = clojure.walk.postwalk(((function (opts){
return (function (node){
if(reagent_forms.core.field_QMARK_(node)){
var field = (function (){var G__47021 = node;
var G__47022 = opts;
return (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(G__47021,G__47022) : reagent_forms.core.init_field.call(null,G__47021,G__47022));
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
var G__47023__i = 0, G__47023__a = new Array(arguments.length -  2);
while (G__47023__i < G__47023__a.length) {G__47023__a[G__47023__i] = arguments[G__47023__i + 2]; ++G__47023__i;}
  events = new cljs.core.IndexedSeq(G__47023__a,0);
} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__47024){
var form = cljs.core.first(arglist__47024);
arglist__47024 = cljs.core.next(arglist__47024);
var doc = cljs.core.first(arglist__47024);
var events = cljs.core.rest(arglist__47024);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;
