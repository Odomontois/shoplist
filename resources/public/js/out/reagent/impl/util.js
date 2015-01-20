// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('reagent.impl.util')) {
goog.provide('reagent.impl.util');
}
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__7572 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__7572,(0),null);
var parts = cljs.core.nthnext.call(null,vec__7572,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__7574__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__3743__auto___7575 = self__.p;
if(cljs.core.truth_(or__3743__auto___7575)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__7574 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__7576__i = 0, G__7576__a = new Array(arguments.length -  1);
while (G__7576__i < G__7576__a.length) {G__7576__a[G__7576__i] = arguments[G__7576__i + 1]; ++G__7576__i;}
  a = new cljs.core.IndexedSeq(G__7576__a,0);
} 
return G__7574__delegate.call(this,self__,a);};
G__7574.cljs$lang$maxFixedArity = 1;
G__7574.cljs$lang$applyTo = (function (arglist__7577){
var self__ = cljs.core.first(arglist__7577);
var a = cljs.core.rest(arglist__7577);
return G__7574__delegate(self__,a);
});
G__7574.cljs$core$IFn$_invoke$arity$variadic = G__7574__delegate;
return G__7574;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args7573){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7573)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__7578__delegate = function (a){
var _ = this;
var or__3743__auto___7579 = self__.p;
if(cljs.core.truth_(or__3743__auto___7579)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__7578 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__7580__i = 0, G__7580__a = new Array(arguments.length -  0);
while (G__7580__i < G__7580__a.length) {G__7580__a[G__7580__i] = arguments[G__7580__i + 0]; ++G__7580__i;}
  a = new cljs.core.IndexedSeq(G__7580__a,0);
} 
return G__7578__delegate.call(this,a);};
G__7578.cljs$lang$maxFixedArity = 0;
G__7578.cljs$lang$applyTo = (function (arglist__7581){
var a = cljs.core.seq(arglist__7581);
return G__7578__delegate(a);
});
G__7578.cljs$core$IFn$_invoke$arity$variadic = G__7578__delegate;
return G__7578;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4330__auto__,writer__4331__auto__,opt__4332__auto__){
return cljs.core._write.call(null,writer__4331__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){
var or__3743__auto__ = cljs.core.ifn_QMARK_.call(null,x);
if(or__3743__auto__){
return or__3743__auto__;
} else {
var G__7585 = x;
if(G__7585){
var bit__4424__auto__ = (G__7585.cljs$lang$protocol_mask$partition1$ & (256));
if((bit__4424__auto__) || (G__7585.cljs$core$IMultiFn$)){
return true;
} else {
if((!G__7585.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__7585);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__7585);
}
}
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util.doc_node_type = (9);
reagent.impl.util.react_id_name = "data-reactid";
reagent.impl.util.get_react_node = (function get_react_node(cont){
if((cont == null)){
return null;
} else {
if((reagent.impl.util.doc_node_type === (cont["nodeType"]))){
return (cont["documentElement"]);
} else {
return (cont["firstChild"]);
}
}
});
reagent.impl.util.get_root_id = (function get_root_id(cont){
var G__7587 = reagent.impl.util.get_react_node.call(null,cont);
var G__7587__$1 = (((G__7587 == null))?null:(G__7587["getAttribute"])(reagent.impl.util.react_id_name));
return G__7587__$1;
});
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
try{return (React["renderComponent"])(comp.call(null),container);
}catch (e7590){if((e7590 instanceof Object)){
var e = e7590;
try{(React["unmountComponentAtNode"])(container);
}catch (e7591){if((e7591 instanceof Object)){
var e_7592__$1 = e7591;
if(typeof console !== 'undefined'){
console.log(e_7592__$1);
} else {
}
} else {
throw e7591;

}
}
var temp__4126__auto___7593 = reagent.impl.util.get_react_node.call(null,container);
if(cljs.core.truth_(temp__4126__auto___7593)){
var n_7594 = temp__4126__auto___7593;
(n_7594["removeAttribute"])(reagent.impl.util.react_id_name);

(n_7594["innerHTML"] = "");
} else {
}

throw e;
} else {
throw e7590;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
return (React["renderComponent"])(comp.call(null),container,(function (){
var id_7595 = reagent.impl.util.get_root_id.call(null,container);
if((id_7595 == null)){
} else {
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,id_7595,((function (id_7595){
return (function (){
return reagent.impl.util.re_render_component.call(null,comp,container);
});})(id_7595))
);
}

if((callback == null)){
return null;
} else {
return callback.call(null);
}
}));
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
var id_7596 = reagent.impl.util.get_root_id.call(null,container);
if((id_7596 == null)){
} else {
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,id_7596);
}

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var _STAR_always_update_STAR_7602_7607 = reagent.impl.util._STAR_always_update_STAR_;
try{reagent.impl.util._STAR_always_update_STAR_ = true;

var seq__7603_7608 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__7604_7609 = null;
var count__7605_7610 = (0);
var i__7606_7611 = (0);
while(true){
if((i__7606_7611 < count__7605_7610)){
var f_7612 = cljs.core._nth.call(null,chunk__7604_7609,i__7606_7611);
f_7612.call(null);

var G__7613 = seq__7603_7608;
var G__7614 = chunk__7604_7609;
var G__7615 = count__7605_7610;
var G__7616 = (i__7606_7611 + (1));
seq__7603_7608 = G__7613;
chunk__7604_7609 = G__7614;
count__7605_7610 = G__7615;
i__7606_7611 = G__7616;
continue;
} else {
var temp__4126__auto___7617 = cljs.core.seq.call(null,seq__7603_7608);
if(temp__4126__auto___7617){
var seq__7603_7618__$1 = temp__4126__auto___7617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7603_7618__$1)){
var c__4530__auto___7619 = cljs.core.chunk_first.call(null,seq__7603_7618__$1);
var G__7620 = cljs.core.chunk_rest.call(null,seq__7603_7618__$1);
var G__7621 = c__4530__auto___7619;
var G__7622 = cljs.core.count.call(null,c__4530__auto___7619);
var G__7623 = (0);
seq__7603_7608 = G__7620;
chunk__7604_7609 = G__7621;
count__7605_7610 = G__7622;
i__7606_7611 = G__7623;
continue;
} else {
var f_7624 = cljs.core.first.call(null,seq__7603_7618__$1);
f_7624.call(null);

var G__7625 = cljs.core.next.call(null,seq__7603_7618__$1);
var G__7626 = null;
var G__7627 = (0);
var G__7628 = (0);
seq__7603_7608 = G__7625;
chunk__7604_7609 = G__7626;
count__7605_7610 = G__7627;
i__7606_7611 = G__7628;
continue;
}
} else {
}
}
break;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7602_7607;
}
return "Updated";
});
reagent.impl.util._not_found = (function (){var obj7630 = {};
return obj7630;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){
return (cljs.core.keyword_identical_QMARK_.call(null,x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type.call(null,x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.call(null,x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){
var or__3743__auto__ = (x === y);
if(or__3743__auto__){
return or__3743__auto__;
} else {
var and__3731__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__3731__auto__){
var and__3731__auto____$1 = cljs.core.map_QMARK_.call(null,y);
if(and__3731__auto____$1){
var and__3731__auto____$2 = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));
if(and__3731__auto____$2){
return cljs.core.reduce_kv.call(null,((function (and__3731__auto____$2,and__3731__auto____$1,and__3731__auto__,or__3743__auto__){
return (function (res,k,v){
var yv = cljs.core.get.call(null,y,k,reagent.impl.util._not_found);
if(cljs.core.truth_((function (){var or__3743__auto____$1 = (v === yv);
if(or__3743__auto____$1){
return or__3743__auto____$1;
} else {
var or__3743__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,yv);
if(or__3743__auto____$2){
return or__3743__auto____$2;
} else {
var and__3731__auto____$3 = cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736));
if(and__3731__auto____$3){
return shallow_equal_maps.call(null,v,yv);
} else {
return and__3731__auto____$3;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__3731__auto____$2,and__3731__auto____$1,and__3731__auto__,or__3743__auto__))
,true,x);
} else {
return and__3731__auto____$2;
}
} else {
return and__3731__auto____$1;
}
} else {
return and__3731__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(v1,v2){
if(cljs.core.vector_QMARK_.call(null,v1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v1","v1",-2141311508,null))))].join('')));
}

if(cljs.core.vector_QMARK_.call(null,v2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v2","v2",1875554983,null))))].join('')));
}

var or__3743__auto__ = (v1 === v2);
if(or__3743__auto__){
return or__3743__auto__;
} else {
var and__3731__auto__ = (cljs.core.count.call(null,v1) === cljs.core.count.call(null,v2));
if(and__3731__auto__){
return cljs.core.reduce_kv.call(null,((function (and__3731__auto__,or__3743__auto__){
return (function (res,k,v){
var v_SINGLEQUOTE_ = cljs.core.nth.call(null,v2,k);
if(cljs.core.truth_((function (){var or__3743__auto____$1 = (v === v_SINGLEQUOTE_);
if(or__3743__auto____$1){
return or__3743__auto____$1;
} else {
var or__3743__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,v_SINGLEQUOTE_);
if(or__3743__auto____$2){
return or__3743__auto____$2;
} else {
var and__3731__auto____$1 = cljs.core.map_QMARK_.call(null,v);
if(and__3731__auto____$1){
return reagent.impl.util.shallow_equal_maps.call(null,v,v_SINGLEQUOTE_);
} else {
return and__3731__auto____$1;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__3731__auto__,or__3743__auto__))
,true,v1);
} else {
return and__3731__auto__;
}
}
});

//# sourceMappingURL=util.js.map