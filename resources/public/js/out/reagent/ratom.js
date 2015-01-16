// Compiled by ClojureScript 0.0-2644 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__12731 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12731) : cljs.core.atom.call(null,G__12731));
})();
reagent.ratom.running = (function running(){
var G__12733 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12733) : cljs.core.deref.call(null,G__12733));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_12735 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_12735;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12736 = this$__$1;
return goog.getUid(G__12736);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__12737_12748 = key;
var G__12738_12749 = this$__$1;
var G__12739_12750 = oldval;
var G__12740_12751 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12737_12748,G__12738_12749,G__12739_12750,G__12740_12751) : f.call(null,G__12737_12748,G__12738_12749,G__12739_12750,G__12740_12751));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12741 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12741) : f.call(null,G__12741));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12742 = self__.state;
var G__12743 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12742,G__12743) : f.call(null,G__12742,G__12743));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12744 = self__.state;
var G__12745 = x;
var G__12746 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12744,G__12745,G__12746) : f.call(null,G__12744,G__12745,G__12746));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__12747 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__12747) : self__.validator.call(null,G__12747));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__12755__delegate = function (x,p__12752){
var map__12754 = p__12752;
var map__12754__$1 = ((cljs.core.seq_QMARK_(map__12754))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12754):map__12754);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12754__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12754__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__12755 = function (x,var_args){
var p__12752 = null;
if (arguments.length > 1) {
  p__12752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12755__delegate.call(this,x,p__12752);};
G__12755.cljs$lang$maxFixedArity = 1;
G__12755.cljs$lang$applyTo = (function (arglist__12756){
var x = cljs.core.first(arglist__12756);
var p__12752 = cljs.core.rest(arglist__12756);
return G__12755__delegate(x,p__12752);
});
G__12755.cljs$core$IFn$_invoke$arity$variadic = G__12755__delegate;
return G__12755;
})()
;
atom = function(x,var_args){
var p__12752 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

reagent.ratom.IDisposable = (function (){var obj12758 = {};
return obj12758;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3709__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__12762 = x__4365__auto__;
return goog.typeOf(G__12762);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj12764 = {};
return obj12764;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3709__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (reagent.ratom.run[(function (){var G__12768 = x__4365__auto__;
return goog.typeOf(G__12768);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (reagent.ratom.run["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj12770 = {};
return obj12770;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3709__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (reagent.ratom._update_watching[(function (){var G__12774 = x__4365__auto__;
return goog.typeOf(G__12774);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3709__auto__ = k;
if(and__3709__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3709__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4365__auto__ = (((k == null))?null:k);
return (function (){var or__3721__auto__ = (reagent.ratom._handle_change[(function (){var G__12778 = x__4365__auto__;
return goog.typeOf(G__12778);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv((function (_,key,f){
var G__12783_12787 = key;
var G__12784_12788 = obs;
var G__12785_12789 = oldval;
var G__12786_12790 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12783_12787,G__12784_12788,G__12785_12789,G__12786_12790) : f.call(null,G__12783_12787,G__12784_12788,G__12785_12789,G__12786_12790));

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3709__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3709__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3709__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3721__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__12791_12812 = cljs.core.seq(derefed);
var chunk__12792_12813 = null;
var count__12793_12814 = (0);
var i__12794_12815 = (0);
while(true){
if((i__12794_12815 < count__12793_12814)){
var w_12816 = chunk__12792_12813.cljs$core$IIndexed$_nth$arity$2(null,i__12794_12815);
if(cljs.core.contains_QMARK_(self__.watching,w_12816)){
} else {
cljs.core.add_watch(w_12816,this$__$1,reagent.ratom._handle_change);
}

var G__12817 = seq__12791_12812;
var G__12818 = chunk__12792_12813;
var G__12819 = count__12793_12814;
var G__12820 = (i__12794_12815 + (1));
seq__12791_12812 = G__12817;
chunk__12792_12813 = G__12818;
count__12793_12814 = G__12819;
i__12794_12815 = G__12820;
continue;
} else {
var temp__4126__auto___12821 = cljs.core.seq(seq__12791_12812);
if(temp__4126__auto___12821){
var seq__12791_12822__$1 = temp__4126__auto___12821;
if(cljs.core.chunked_seq_QMARK_(seq__12791_12822__$1)){
var c__4508__auto___12823 = cljs.core.chunk_first(seq__12791_12822__$1);
var G__12824 = cljs.core.chunk_rest(seq__12791_12822__$1);
var G__12825 = c__4508__auto___12823;
var G__12826 = cljs.core.count(c__4508__auto___12823);
var G__12827 = (0);
seq__12791_12812 = G__12824;
chunk__12792_12813 = G__12825;
count__12793_12814 = G__12826;
i__12794_12815 = G__12827;
continue;
} else {
var w_12828 = cljs.core.first(seq__12791_12822__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_12828)){
} else {
cljs.core.add_watch(w_12828,this$__$1,reagent.ratom._handle_change);
}

var G__12829 = cljs.core.next(seq__12791_12822__$1);
var G__12830 = null;
var G__12831 = (0);
var G__12832 = (0);
seq__12791_12812 = G__12829;
chunk__12792_12813 = G__12830;
count__12793_12814 = G__12831;
i__12794_12815 = G__12832;
continue;
}
} else {
}
}
break;
}

var seq__12795_12833 = cljs.core.seq(self__.watching);
var chunk__12796_12834 = null;
var count__12797_12835 = (0);
var i__12798_12836 = (0);
while(true){
if((i__12798_12836 < count__12797_12835)){
var w_12837 = chunk__12796_12834.cljs$core$IIndexed$_nth$arity$2(null,i__12798_12836);
if(cljs.core.contains_QMARK_(derefed,w_12837)){
} else {
cljs.core.remove_watch(w_12837,this$__$1);
}

var G__12838 = seq__12795_12833;
var G__12839 = chunk__12796_12834;
var G__12840 = count__12797_12835;
var G__12841 = (i__12798_12836 + (1));
seq__12795_12833 = G__12838;
chunk__12796_12834 = G__12839;
count__12797_12835 = G__12840;
i__12798_12836 = G__12841;
continue;
} else {
var temp__4126__auto___12842 = cljs.core.seq(seq__12795_12833);
if(temp__4126__auto___12842){
var seq__12795_12843__$1 = temp__4126__auto___12842;
if(cljs.core.chunked_seq_QMARK_(seq__12795_12843__$1)){
var c__4508__auto___12844 = cljs.core.chunk_first(seq__12795_12843__$1);
var G__12845 = cljs.core.chunk_rest(seq__12795_12843__$1);
var G__12846 = c__4508__auto___12844;
var G__12847 = cljs.core.count(c__4508__auto___12844);
var G__12848 = (0);
seq__12795_12833 = G__12845;
chunk__12796_12834 = G__12846;
count__12797_12835 = G__12847;
i__12798_12836 = G__12848;
continue;
} else {
var w_12849 = cljs.core.first(seq__12795_12843__$1);
if(cljs.core.contains_QMARK_(derefed,w_12849)){
} else {
cljs.core.remove_watch(w_12849,this$__$1);
}

var G__12850 = cljs.core.next(seq__12795_12843__$1);
var G__12851 = null;
var G__12852 = (0);
var G__12853 = (0);
seq__12795_12833 = G__12850;
chunk__12796_12834 = G__12851;
count__12797_12835 = G__12852;
i__12798_12836 = G__12853;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12799 = this$__$1;
return goog.getUid(G__12799);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__12800_12854 = cljs.core.seq(self__.watching);
var chunk__12801_12855 = null;
var count__12802_12856 = (0);
var i__12803_12857 = (0);
while(true){
if((i__12803_12857 < count__12802_12856)){
var w_12858 = chunk__12801_12855.cljs$core$IIndexed$_nth$arity$2(null,i__12803_12857);
cljs.core.remove_watch(w_12858,this$__$1);

var G__12859 = seq__12800_12854;
var G__12860 = chunk__12801_12855;
var G__12861 = count__12802_12856;
var G__12862 = (i__12803_12857 + (1));
seq__12800_12854 = G__12859;
chunk__12801_12855 = G__12860;
count__12802_12856 = G__12861;
i__12803_12857 = G__12862;
continue;
} else {
var temp__4126__auto___12863 = cljs.core.seq(seq__12800_12854);
if(temp__4126__auto___12863){
var seq__12800_12864__$1 = temp__4126__auto___12863;
if(cljs.core.chunked_seq_QMARK_(seq__12800_12864__$1)){
var c__4508__auto___12865 = cljs.core.chunk_first(seq__12800_12864__$1);
var G__12866 = cljs.core.chunk_rest(seq__12800_12864__$1);
var G__12867 = c__4508__auto___12865;
var G__12868 = cljs.core.count(c__4508__auto___12865);
var G__12869 = (0);
seq__12800_12854 = G__12866;
chunk__12801_12855 = G__12867;
count__12802_12856 = G__12868;
i__12803_12857 = G__12869;
continue;
} else {
var w_12870 = cljs.core.first(seq__12800_12864__$1);
cljs.core.remove_watch(w_12870,this$__$1);

var G__12871 = cljs.core.next(seq__12800_12864__$1);
var G__12872 = null;
var G__12873 = (0);
var G__12874 = (0);
seq__12800_12854 = G__12871;
chunk__12801_12855 = G__12872;
count__12802_12856 = G__12873;
i__12803_12857 = G__12874;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches(a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12804 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12804) : f__$1.call(null,G__12804));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12805 = self__.state;
var G__12806 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__12805,G__12806) : f__$1.call(null,G__12805,G__12806));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12807 = self__.state;
var G__12808 = x;
var G__12809 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__12807,G__12808,G__12809) : f__$1.call(null,G__12807,G__12808,G__12809));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches(this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
var G__12810_12875 = oldval;
var G__12811_12876 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__12810_12875,G__12811_12876) : self__.on_set.call(null,G__12810_12875,G__12811_12876));
} else {
}

return reagent.ratom.call_watches(this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if(cljs.core.empty_QMARK_(self__.watches)){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not((function (){var or__3721__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__10900__auto___12877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(!((console.log == null))){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(177),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__10900__auto___12877], 0)))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3721__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))], 0)))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__12878){
var map__12880 = p__12878;
var map__12880__$1 = ((cljs.core.seq_QMARK_(map__12880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12880):map__12880);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12880__$1,cljs.core.constant$keyword$63);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12880__$1,cljs.core.constant$keyword$64);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12880__$1,cljs.core.constant$keyword$65);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12880__$1,cljs.core.constant$keyword$66);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__12878 = null;
if (arguments.length > 1) {
  p__12878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_reaction__delegate.call(this,f,p__12878);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__12881){
var f = cljs.core.first(arglist__12881);
var p__12878 = cljs.core.rest(arglist__12881);
return make_reaction__delegate(f,p__12878);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
