// Compiled by ClojureScript 0.0-2644 {}
goog.provide('shoplist.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent_forms.core');
goog.require('secretary.core');
goog.require('reagent.core');
shoplist.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$164,false], null));
/**
* @param {...*} var_args
*/
shoplist.core.row = (function() { 
var row__delegate = function (label,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,body], null)], null);
};
var row = function (label,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__25164){
var label = cljs.core.first(arglist__25164);
var body = cljs.core.rest(arglist__25164);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
shoplist.core.text_input = (function text_input(id,label){
return shoplist.core.row.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$110,cljs.core.constant$keyword$111,cljs.core.constant$keyword$28,id], null)], null)], 0));
});
/**
* @param {...*} var_args
*/
shoplist.core.selection_list = (function() { 
var selection_list__delegate = function (label,id,items){
return shoplist.core.row.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$169,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$110,cljs.core.constant$keyword$151,cljs.core.constant$keyword$28,id], null),(function (){var iter__4477__auto__ = (function iter__25175(s__25176){
return (new cljs.core.LazySeq(null,(function (){
var s__25176__$1 = s__25176;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__25176__$1);
if(temp__4126__auto__){
var s__25176__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25176__$2)){
var c__4475__auto__ = cljs.core.chunk_first(s__25176__$2);
var size__4476__auto__ = cljs.core.count(c__4475__auto__);
var b__25178 = cljs.core.chunk_buffer(size__4476__auto__);
if((function (){var i__25177 = (0);
while(true){
if((i__25177 < size__4476__auto__)){
var vec__25183 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4475__auto__,i__25177);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25183,(0),null);
var label__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25183,(1),null);
cljs.core.chunk_append(b__25178,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,k], null),label__$1], null));

var G__25185 = (i__25177 + (1));
i__25177 = G__25185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25178),iter__25175(cljs.core.chunk_rest(s__25176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25178),null);
}
} else {
var vec__25184 = cljs.core.first(s__25176__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184,(0),null);
var label__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,k], null),label__$1], null),iter__25175(cljs.core.rest(s__25176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4477__auto__(items);
})()], null)], 0));
};
var selection_list = function (label,id,var_args){
var items = null;
if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return selection_list__delegate.call(this,label,id,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__25186){
var label = cljs.core.first(arglist__25186);
arglist__25186 = cljs.core.next(arglist__25186);
var id = cljs.core.first(arglist__25186);
var items = cljs.core.rest(arglist__25186);
return selection_list__delegate(label,id,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
shoplist.core.form = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,"Reagent Form"], null)], null),shoplist.core.text_input(cljs.core.constant$keyword$173,"First name"),shoplist.core.text_input(cljs.core.constant$keyword$174,"Last name"),shoplist.core.selection_list.cljs$core$IFn$_invoke$arity$variadic("Favorite drinks",cljs.core.constant$keyword$175,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"Crab juice"], null)], 0))], null);
shoplist.core.save_doc = (function save_doc(doc){
return (function (){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(context),cljs.core.str("/save")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$154,(function (){var G__25188 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25188) : cljs.core.deref.call(null,G__25188));
})()], null),cljs.core.constant$keyword$55,(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shoplist.core.state,cljs.core.assoc,cljs.core.constant$keyword$164,true);
})], null)], 0));
});
});
shoplist.core.about = (function about(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,"this is the story of shoplist... work in progress"], null);
});
shoplist.core.home = (function home(){
var doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (doc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,shoplist.core.form,doc,((function (doc){
return (function (_,___$1,___$2){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shoplist.core.state,cljs.core.assoc,cljs.core.constant$keyword$164,false);

return null;
});})(doc))
], null),(cljs.core.truth_(cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1((function (){var G__25190 = shoplist.core.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25190) : cljs.core.deref.call(null,G__25190));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$179,"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$180,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$34,"submit",cljs.core.constant$keyword$61,"btn btn-default",cljs.core.constant$keyword$181,shoplist.core.save_doc(doc)], null),"Submit"], null))], null);
});
;})(doc))
});
shoplist.core.navbar = (function navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$184,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$186,"#/"], null),"shoplist"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$61,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shoplist.core.home,cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1((function (){var G__25193 = shoplist.core.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25193) : cljs.core.deref.call(null,G__25193));
})())))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,(function (){
return secretary.core.dispatch_BANG_("#/");
})], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$61,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shoplist.core.about,cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1((function (){var G__25194 = shoplist.core.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25194) : cljs.core.deref.call(null,G__25194));
})())))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,(function (){
return secretary.core.dispatch_BANG_("#/about");
})], null),"About"], null)], null)], null)], null)], null)], null);
});
shoplist.core.page = (function page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1((function (){var G__25196 = shoplist.core.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25196) : cljs.core.deref.call(null,G__25196));
})())], null);
});
secretary.core.set_config_BANG_(cljs.core.constant$keyword$39,"#");
var action__11837__auto___25199 = (function (params__11838__auto__){
if(cljs.core.map_QMARK_(params__11838__auto__)){
var map__25197 = params__11838__auto__;
var map__25197__$1 = ((cljs.core.seq_QMARK_(map__25197))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25197):map__25197);
console.log("hi!");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shoplist.core.state,cljs.core.assoc,cljs.core.constant$keyword$189,shoplist.core.home);
} else {
if(cljs.core.vector_QMARK_(params__11838__auto__)){
var vec__25198 = params__11838__auto__;
console.log("hi!");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shoplist.core.state,cljs.core.assoc,cljs.core.constant$keyword$189,shoplist.core.home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__11837__auto___25199);

var action__11837__auto___25202 = (function (params__11838__auto__){
if(cljs.core.map_QMARK_(params__11838__auto__)){
var map__25200 = params__11838__auto__;
var map__25200__$1 = ((cljs.core.seq_QMARK_(map__25200))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25200):map__25200);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shoplist.core.state,cljs.core.assoc,cljs.core.constant$keyword$189,shoplist.core.about);
} else {
if(cljs.core.vector_QMARK_(params__11838__auto__)){
var vec__25201 = params__11838__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shoplist.core.state,cljs.core.assoc,cljs.core.constant$keyword$189,shoplist.core.about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__11837__auto___25202);

shoplist.core.init_BANG_ = (function init_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shoplist.core.state,cljs.core.assoc,cljs.core.constant$keyword$189,shoplist.core.home);

reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shoplist.core.navbar], null),document.getElementById("navbar"));

return reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shoplist.core.page], null),document.getElementById("app"));
});
