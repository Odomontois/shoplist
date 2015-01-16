// Compiled by ClojureScript 0.0-2644 {}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.cljs_state = "cljsState";
reagent.impl.component.cljs_render = "cljsRender";
reagent.impl.component.state_atom = (function state_atom(this$){
var sa = (this$[reagent.impl.component.cljs_state]);
if(!((sa == null))){
return sa;
} else {
return (this$[reagent.impl.component.cljs_state] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.state = (function state(this$){
var G__12580 = reagent.impl.component.state_atom(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12580) : cljs.core.deref.call(null,G__12580));
});
reagent.impl.component.replace_state = (function replace_state(this$,new_state){
var G__12583 = reagent.impl.component.state_atom(this$);
var G__12584 = new_state;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12583,G__12584) : cljs.core.reset_BANG_.call(null,G__12583,G__12584));
});
reagent.impl.component.set_state = (function set_state(this$,new_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.state_atom(this$),cljs.core.merge,new_state);
});
reagent.impl.component.do_render = (function do_render(C){
var _STAR_current_component_STAR_12599 = reagent.impl.component._STAR_current_component_STAR_;
try{reagent.impl.component._STAR_current_component_STAR_ = C;

var f = (C[reagent.impl.component.cljs_render]);
var _ = ((reagent.impl.util.clj_ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = reagent.impl.util.js_props(C);
var res = ((((C["componentFunction"]) == null))?(function (){var G__12600 = C;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12600) : f.call(null,G__12600));
})():(function (){var argv = (p[reagent.impl.util.cljs_argv]);
var n = cljs.core.count(argv);
var G__12601 = n;
switch (G__12601) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__12602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12602) : f.call(null,G__12602));

break;
case (3):
var G__12603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__12604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12603,G__12604) : f.call(null,G__12603,G__12604));

break;
case (4):
var G__12605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__12606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__12607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12605,G__12606,G__12607) : f.call(null,G__12605,G__12606,G__12607));

break;
case (5):
var G__12608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__12609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__12610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__12611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12608,G__12609,G__12610,G__12611) : f.call(null,G__12608,G__12609,G__12610,G__12611));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return C.asComponent(res,(p[reagent.impl.util.cljs_level]));
} else {
if(cljs.core.ifn_QMARK_(res)){
(C[reagent.impl.component.cljs_render] = res);

return do_render(C);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_12599;
}});
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){
var G__12625 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__12625) {
case "componentWillUnmount":
return ((function (G__12625){
return (function (){
var C = this;
reagent.impl.batching.dispose(C);

if((f == null)){
return null;
} else {
var G__12626 = C;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12626) : f.call(null,G__12626));
}
});
;})(G__12625))

break;
case "componentDidUpdate":
return ((function (G__12625){
return (function (oldprops){
var C = this;
var old_argv = (oldprops[reagent.impl.util.cljs_argv]);
var G__12627 = C;
var G__12628 = old_argv;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12627,G__12628) : f.call(null,G__12627,G__12628));
});
;})(G__12625))

break;
case "componentWillUpdate":
return ((function (G__12625){
return (function (nextprops){
var C = this;
var next_argv = (nextprops[reagent.impl.util.cljs_argv]);
var G__12629 = C;
var G__12630 = next_argv;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12629,G__12630) : f.call(null,G__12629,G__12630));
});
;})(G__12625))

break;
case "shouldComponentUpdate":
return ((function (G__12625){
return (function (nextprops,nextstate){
var C = this;
var inprops = reagent.impl.util.js_props(C);
var old_argv = (inprops[reagent.impl.util.cljs_argv]);
var new_argv = (nextprops[reagent.impl.util.cljs_argv]);
if((f == null)){
return cljs.core.not(reagent.impl.util.equal_args(old_argv,new_argv));
} else {
var G__12631 = C;
var G__12632 = old_argv;
var G__12633 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12631,G__12632,G__12633) : f.call(null,G__12631,G__12632,G__12633));
}
});
;})(G__12625))

break;
case "componentWillReceiveProps":
return ((function (G__12625){
return (function (props){
var C = this;
var G__12634 = C;
var G__12635 = (props[reagent.impl.util.cljs_argv]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12634,G__12635) : f.call(null,G__12634,G__12635));
});
;})(G__12625))

break;
case "getInitialState":
return ((function (G__12625){
return (function (){
var C = this;
return reagent.impl.component.set_state(C,(function (){var G__12636 = C;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12636) : f.call(null,G__12636));
})());
});
;})(G__12625))

break;
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__12638__delegate = function (args){
var C = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,C,args);
};
var G__12638 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12638__delegate.call(this,args);};
G__12638.cljs$lang$maxFixedArity = 0;
G__12638.cljs$lang$applyTo = (function (arglist__12639){
var args = cljs.core.seq(arglist__12639);
return G__12638__delegate(args);
});
G__12638.cljs$core$IFn$_invoke$arity$variadic = G__12638__delegate;
return G__12638;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$68,null,cljs.core.constant$keyword$69,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.ifn_QMARK_(f)){
var G__12641 = f;
(G__12641["__reactDontBind"] = true);

return G__12641;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__12643 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__12643) : reagent.impl.component.dont_wrap.call(null,G__12643));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__3709__auto__ = wrap;
if(cljs.core.truth_(and__3709__auto__)){
return f;
} else {
return and__3709__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__3721__auto__ = wrap;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,null,cljs.core.constant$keyword$71,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__12645 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__12645) : reagent.impl.component.dash_to_camel.call(null,G__12645));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$67,render_f,cljs.core.array_seq([cljs.core.constant$keyword$68,(cljs.core.truth_(reagent.impl.util.is_client)?(function (){
var C = this;
return reagent.impl.batching.run_reactively(C,((function (C){
return (function (){
return reagent.impl.component.do_render(C);
});})(C))
);
}):(function (){
var C = this;
return reagent.impl.component.do_render(C);
}))], 0));
});
reagent.impl.component.wrap_funs = (function wrap_funs(fun_map){
var render_fun = (function (){var or__3721__auto__ = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((reagent.impl.util.clj_ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = (function (){var or__3721__auto__ = cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = render_fun.displayName;
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
return render_fun.name;
}
}
})();
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$72,name_SINGLEQUOTE_),render_fun);
return cljs.core.reduce_kv(((function (render_fun,_,name,name_SINGLEQUOTE_,fmap){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(render_fun,_,name,name_SINGLEQUOTE_,fmap))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__12647 = o;
(G__12647[cljs.core.name(k)] = v);

return G__12647;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body,as_component){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var _ = spec.asComponent = reagent.impl.component.dont_bind(as_component);
var res = reagent.impl.util.React.createClass(spec);
var f = ((function (spec,_,res){
return (function() { 
var G__12650__delegate = function (args){
var G__12649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (as_component.cljs$core$IFn$_invoke$arity$1 ? as_component.cljs$core$IFn$_invoke$arity$1(G__12649) : as_component.call(null,G__12649));
};
var G__12650 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12650__delegate.call(this,args);};
G__12650.cljs$lang$maxFixedArity = 0;
G__12650.cljs$lang$applyTo = (function (arglist__12651){
var args = cljs.core.seq(arglist__12651);
return G__12650__delegate(args);
});
G__12650.cljs$core$IFn$_invoke$arity$variadic = G__12650__delegate;
return G__12650;
})()
;})(spec,_,res))
;
f.cljsReactClass = res;

res.cljsReactClass = res;

return f;
});
