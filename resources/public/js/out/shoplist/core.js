// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('shoplist.core')) {
goog.provide('shoplist.core');
}
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent_forms.core');
goog.require('secretary.core');
goog.require('reagent.core');
shoplist.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
/**
* @param {...*} var_args
*/
shoplist.core.row = (function() { 
var row__delegate = function (label,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
};
var row = function (label,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__6458){
var label = cljs.core.first(arglist__6458);
var body = cljs.core.rest(arglist__6458);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
shoplist.core.text_input = (function text_input(id,label){
return shoplist.core.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
});
/**
* @param {...*} var_args
*/
shoplist.core.selection_list = (function() { 
var selection_list__delegate = function (label,id,items){
return shoplist.core.row.call(null,label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (){var iter__4477__auto__ = (function iter__6467(s__6468){
return (new cljs.core.LazySeq(null,(function (){
var s__6468__$1 = s__6468;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6468__$1);
if(temp__4126__auto__){
var s__6468__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6468__$2)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,s__6468__$2);
var size__4476__auto__ = cljs.core.count.call(null,c__4475__auto__);
var b__6470 = cljs.core.chunk_buffer.call(null,size__4476__auto__);
if((function (){var i__6469 = (0);
while(true){
if((i__6469 < size__4476__auto__)){
var vec__6473 = cljs.core._nth.call(null,c__4475__auto__,i__6469);
var k = cljs.core.nth.call(null,vec__6473,(0),null);
var label__$1 = cljs.core.nth.call(null,vec__6473,(1),null);
cljs.core.chunk_append.call(null,b__6470,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),label__$1], null));

var G__6475 = (i__6469 + (1));
i__6469 = G__6475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6470),iter__6467.call(null,cljs.core.chunk_rest.call(null,s__6468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6470),null);
}
} else {
var vec__6474 = cljs.core.first.call(null,s__6468__$2);
var k = cljs.core.nth.call(null,vec__6474,(0),null);
var label__$1 = cljs.core.nth.call(null,vec__6474,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),label__$1], null),iter__6467.call(null,cljs.core.rest.call(null,s__6468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4477__auto__.call(null,items);
})()], null));
};
var selection_list = function (label,id,var_args){
var items = null;
if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return selection_list__delegate.call(this,label,id,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__6476){
var label = cljs.core.first(arglist__6476);
arglist__6476 = cljs.core.next(arglist__6476);
var id = cljs.core.first(arglist__6476);
var items = cljs.core.rest(arglist__6476);
return selection_list__delegate(label,id,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
shoplist.core.form = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),shoplist.core.text_input.call(null,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"),shoplist.core.text_input.call(null,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"),shoplist.core.selection_list.call(null,"Favorite drinks",new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null))], null);
shoplist.core.save_doc = (function save_doc(doc){
return (function (){
return ajax.core.POST.call(null,[cljs.core.str(context),cljs.core.str("/save")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.deref.call(null,doc)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){
return cljs.core.swap_BANG_.call(null,shoplist.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
});
shoplist.core.about = (function about(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"this is the story of shoplist... work in progress"], null);
});
shoplist.core.home = (function home(){
var doc = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (doc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,shoplist.core.form,doc,((function (doc){
return (function (_,___$1,___$2){
cljs.core.swap_BANG_.call(null,shoplist.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);

return null;
});})(doc))
], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shoplist.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),shoplist.core.save_doc.call(null,doc)], null),"Submit"], null))], null);
});
;})(doc))
});
shoplist.core.navbar = (function navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-fixed-top","div.navbar.navbar-inverse.navbar-fixed-top",-279800444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"shoplist"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,shoplist.core.home,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shoplist.core.state))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return secretary.core.dispatch_BANG_.call(null,"#/");
})], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,shoplist.core.about,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shoplist.core.state))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return secretary.core.dispatch_BANG_.call(null,"#/about");
})], null),"About"], null)], null)], null)], null)], null)], null);
});
shoplist.core.page = (function page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shoplist.core.state))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__6450__auto___6479 = (function (params__6451__auto__){
if(cljs.core.map_QMARK_.call(null,params__6451__auto__)){
var map__6477 = params__6451__auto__;
var map__6477__$1 = ((cljs.core.seq_QMARK_.call(null,map__6477))?cljs.core.apply.call(null,cljs.core.hash_map,map__6477):map__6477);
console.log("hi!");

return cljs.core.swap_BANG_.call(null,shoplist.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),shoplist.core.home);
} else {
if(cljs.core.vector_QMARK_.call(null,params__6451__auto__)){
var vec__6478 = params__6451__auto__;
console.log("hi!");

return cljs.core.swap_BANG_.call(null,shoplist.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),shoplist.core.home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__6450__auto___6479);

var action__6450__auto___6482 = (function (params__6451__auto__){
if(cljs.core.map_QMARK_.call(null,params__6451__auto__)){
var map__6480 = params__6451__auto__;
var map__6480__$1 = ((cljs.core.seq_QMARK_.call(null,map__6480))?cljs.core.apply.call(null,cljs.core.hash_map,map__6480):map__6480);
return cljs.core.swap_BANG_.call(null,shoplist.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),shoplist.core.about);
} else {
if(cljs.core.vector_QMARK_.call(null,params__6451__auto__)){
var vec__6481 = params__6451__auto__;
return cljs.core.swap_BANG_.call(null,shoplist.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),shoplist.core.about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__6450__auto___6482);

shoplist.core.init_BANG_ = (function init_BANG_(){
cljs.core.swap_BANG_.call(null,shoplist.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),shoplist.core.home);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shoplist.core.navbar], null),document.getElementById("navbar"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shoplist.core.page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map