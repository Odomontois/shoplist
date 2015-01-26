// Compiled by ClojureScript 0.0-2665 {}
goog.provide('shoplist.core');
goog.require('cljs.core');
goog.require('shoplist.home');
goog.require('reagent.core');
shoplist.core.init_BANG_ = (function init_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shoplist.home.state,cljs.core.assoc,cljs.core.constant$keyword$219,shoplist.home.home);

reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shoplist.home.navbar], null),document.getElementById("navbar"));

return reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shoplist.home.page], null),document.getElementById("app"));
});
