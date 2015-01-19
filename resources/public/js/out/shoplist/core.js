// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('shoplist.core')) {
goog.provide('shoplist.core');
}
goog.require('cljs.core');
goog.require('shoplist.home');
goog.require('reagent.core');
shoplist.core.init_BANG_ = (function init_BANG_(){
cljs.core.swap_BANG_.call(null,shoplist.home.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),shoplist.home.home);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shoplist.home.navbar], null),document.getElementById("navbar"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shoplist.home.page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map