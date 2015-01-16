// Compiled by ClojureScript 0.0-2644 {}
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2644";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$2,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$3,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$4,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$5,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25205__delegate = function (args){
return console.log.apply(console,(function (){var G__25204 = args;
return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__25204) : cljs.core.into_array.call(null,G__25204));
})());
};
var G__25205 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25205__delegate.call(this,args);};
G__25205.cljs$lang$maxFixedArity = 0;
G__25205.cljs$lang$applyTo = (function (arglist__25206){
var args = cljs.core.seq(arglist__25206);
return G__25205__delegate(args);
});
G__25205.cljs$core$IFn$_invoke$arity$variadic = G__25205__delegate;
return G__25205;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
cljs.core.not_native = null;

/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){
return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x)){
return false;
} else {
return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){
return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){
if(!((x == null))){
return (x.constructor === Object);
} else {
return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var G__25208 = x;
return goog.isString(G__25208);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[(function (){var G__25210 = x__$1;
return goog.typeOf(G__25210);
})()])){
return true;
} else {
if((p["_"])){
return true;
} else {
return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){
if((x == null)){
return null;
} else {
return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
var ty = cljs.core.type(obj);
var ty__$1 = (cljs.core.truth_((function (){var and__3709__auto__ = ty;
if(cljs.core.truth_(and__3709__auto__)){
return ty.cljs$lang$type;
} else {
return and__3709__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__25212 = obj;
return goog.typeOf(G__25212);
})());
return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){
var temp__4124__auto__ = ty.cljs$lang$ctorStr;
if(cljs.core.truth_(temp__4124__auto__)){
var s = temp__4124__auto__;
return s;
} else {
return [cljs.core.str(ty)].join('');
}
});
if((typeof Symbol !== 'undefined') && (((function (){var G__25214 = Symbol;
return goog.typeOf(G__25214);
})() === "function"))){
cljs.core.ITER_SYMBOL = Symbol.iterator;
} else {
cljs.core.ITER_SYMBOL = "@@iterator";
}
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){
var len = arr.length;
var new_arr = (new Array(len));
var n__4608__auto___25216 = len;
var i_25217 = (0);
while(true){
if((i_25217 < n__4608__auto___25216)){
(new_arr[i_25217] = (arr[i_25217]));

var G__25218 = (i_25217 + (1));
i_25217 = G__25218;
continue;
} else {
}
break;
}

return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__25227__delegate = function (array,i,idxs){
var G__25224 = aget;
var G__25225 = aget.cljs$core$IFn$_invoke$arity$2(array,i);
var G__25226 = idxs;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__25224,G__25225,G__25226) : cljs.core.apply.call(null,G__25224,G__25225,G__25226));
};
var G__25227 = function (array,i,var_args){
var idxs = null;
if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25227__delegate.call(this,array,i,idxs);};
G__25227.cljs$lang$maxFixedArity = 2;
G__25227.cljs$lang$applyTo = (function (arglist__25228){
var array = cljs.core.first(arglist__25228);
arglist__25228 = cljs.core.next(arglist__25228);
var i = cljs.core.first(arglist__25228);
var idxs = cljs.core.rest(arglist__25228);
return G__25227__delegate(array,i,idxs);
});
G__25227.cljs$core$IFn$_invoke$arity$variadic = G__25227__delegate;
return G__25227;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){
return (array[i] = val);
});
var aset__4 = (function() { 
var G__25237__delegate = function (array,idx,idx2,idxv){
var G__25233 = aset;
var G__25234 = (array[idx]);
var G__25235 = idx2;
var G__25236 = idxv;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__25233,G__25234,G__25235,G__25236) : cljs.core.apply.call(null,G__25233,G__25234,G__25235,G__25236));
};
var G__25237 = function (array,idx,idx2,var_args){
var idxv = null;
if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25237__delegate.call(this,array,idx,idx2,idxv);};
G__25237.cljs$lang$maxFixedArity = 3;
G__25237.cljs$lang$applyTo = (function (arglist__25238){
var array = cljs.core.first(arglist__25238);
arglist__25238 = cljs.core.next(arglist__25238);
var idx = cljs.core.first(arglist__25238);
arglist__25238 = cljs.core.next(arglist__25238);
var idx2 = cljs.core.first(arglist__25238);
var idxv = cljs.core.rest(arglist__25238);
return G__25237__delegate(array,idx,idx2,idxv);
});
G__25237.cljs$core$IFn$_invoke$arity$variadic = G__25237__delegate;
return G__25237;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
var G__25244 = (function (a,x){
a.push(x);

return a;
});
var G__25245 = [];
var G__25246 = aseq;
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__25244,G__25245,G__25246) : cljs.core.reduce.call(null,G__25244,G__25245,G__25246));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
/**
* Invoke JavaScript object method via string. Needed when the
* string is not a valid unquoted property name.
* @param {...*} var_args
*/
cljs.core.js_invoke = (function() { 
var js_invoke__delegate = function (obj,s,args){
return (obj[s]).apply(obj,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var js_invoke = function (obj,s,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return js_invoke__delegate.call(this,obj,s,args);};
js_invoke.cljs$lang$maxFixedArity = 2;
js_invoke.cljs$lang$applyTo = (function (arglist__25247){
var obj = cljs.core.first(arglist__25247);
arglist__25247 = cljs.core.next(arglist__25247);
var s = cljs.core.first(arglist__25247);
var args = cljs.core.rest(arglist__25247);
return js_invoke__delegate(obj,s,args);
});
js_invoke.cljs$core$IFn$_invoke$arity$variadic = js_invoke__delegate;
return js_invoke;
})()
;

cljs.core.Fn = (function (){var obj25249 = {};
return obj25249;
})();


cljs.core.IFn = (function (){var obj25251 = {};
return obj25251;
})();

cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$1;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25297 = x__4365__auto__;
return goog.typeOf(G__25297);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$2;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25299 = x__4365__auto__;
return goog.typeOf(G__25299);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$3;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25301 = x__4365__auto__;
return goog.typeOf(G__25301);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$4;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25303 = x__4365__auto__;
return goog.typeOf(G__25303);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$5;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25305 = x__4365__auto__;
return goog.typeOf(G__25305);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$6;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25307 = x__4365__auto__;
return goog.typeOf(G__25307);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$7;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25309 = x__4365__auto__;
return goog.typeOf(G__25309);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$8;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25311 = x__4365__auto__;
return goog.typeOf(G__25311);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$9;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25313 = x__4365__auto__;
return goog.typeOf(G__25313);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$10;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25315 = x__4365__auto__;
return goog.typeOf(G__25315);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$11;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25317 = x__4365__auto__;
return goog.typeOf(G__25317);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$12;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25319 = x__4365__auto__;
return goog.typeOf(G__25319);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$13;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25321 = x__4365__auto__;
return goog.typeOf(G__25321);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$14;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25323 = x__4365__auto__;
return goog.typeOf(G__25323);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$15;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25325 = x__4365__auto__;
return goog.typeOf(G__25325);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$16;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25327 = x__4365__auto__;
return goog.typeOf(G__25327);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$17;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25329 = x__4365__auto__;
return goog.typeOf(G__25329);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$18;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25331 = x__4365__auto__;
return goog.typeOf(G__25331);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$19;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25333 = x__4365__auto__;
return goog.typeOf(G__25333);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$20;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25335 = x__4365__auto__;
return goog.typeOf(G__25335);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$21;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25337 = x__4365__auto__;
return goog.typeOf(G__25337);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IFn$_invoke$arity$22;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._invoke[(function (){var G__25339 = x__4365__auto__;
return goog.typeOf(G__25339);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._invoke["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;


cljs.core.ICloneable = (function (){var obj25341 = {};
return obj25341;
})();

cljs.core._clone = (function _clone(value){
if((function (){var and__3709__auto__ = value;
if(and__3709__auto__){
return value.cljs$core$ICloneable$_clone$arity$1;
} else {
return and__3709__auto__;
}
})()){
return value.cljs$core$ICloneable$_clone$arity$1(value);
} else {
var x__4365__auto__ = (((value == null))?null:value);
return (function (){var or__3721__auto__ = (cljs.core._clone[(function (){var G__25345 = x__4365__auto__;
return goog.typeOf(G__25345);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._clone["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});


cljs.core.ICounted = (function (){var obj25347 = {};
return obj25347;
})();

cljs.core._count = (function _count(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$ICounted$_count$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._count[(function (){var G__25351 = x__4365__auto__;
return goog.typeOf(G__25351);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._count["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IEmptyableCollection = (function (){var obj25353 = {};
return obj25353;
})();

cljs.core._empty = (function _empty(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._empty[(function (){var G__25357 = x__4365__auto__;
return goog.typeOf(G__25357);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._empty["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ICollection = (function (){var obj25359 = {};
return obj25359;
})();

cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$ICollection$_conj$arity$2;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._conj[(function (){var G__25363 = x__4365__auto__;
return goog.typeOf(G__25363);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._conj["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});


cljs.core.IIndexed = (function (){var obj25365 = {};
return obj25365;
})();

cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IIndexed$_nth$arity$2;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._nth[(function (){var G__25371 = x__4365__auto__;
return goog.typeOf(G__25371);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._nth["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IIndexed$_nth$arity$3;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._nth[(function (){var G__25373 = x__4365__auto__;
return goog.typeOf(G__25373);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._nth["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;


cljs.core.ASeq = (function (){var obj25375 = {};
return obj25375;
})();


cljs.core.ISeq = (function (){var obj25377 = {};
return obj25377;
})();

cljs.core._first = (function _first(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$ISeq$_first$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._first[(function (){var G__25381 = x__4365__auto__;
return goog.typeOf(G__25381);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._first["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._rest = (function _rest(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$ISeq$_rest$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._rest[(function (){var G__25385 = x__4365__auto__;
return goog.typeOf(G__25385);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._rest["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INext = (function (){var obj25387 = {};
return obj25387;
})();

cljs.core._next = (function _next(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$INext$_next$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$INext$_next$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._next[(function (){var G__25391 = x__4365__auto__;
return goog.typeOf(G__25391);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._next["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ILookup = (function (){var obj25393 = {};
return obj25393;
})();

cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$ILookup$_lookup$arity$2;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._lookup[(function (){var G__25399 = x__4365__auto__;
return goog.typeOf(G__25399);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._lookup["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$ILookup$_lookup$arity$3;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._lookup[(function (){var G__25401 = x__4365__auto__;
return goog.typeOf(G__25401);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._lookup["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;


cljs.core.IAssociative = (function (){var obj25403 = {};
return obj25403;
})();

cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__25407 = x__4365__auto__;
return goog.typeOf(G__25407);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});

cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IAssociative$_assoc$arity$3;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._assoc[(function (){var G__25411 = x__4365__auto__;
return goog.typeOf(G__25411);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._assoc["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});


cljs.core.IMap = (function (){var obj25413 = {};
return obj25413;
})();

cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IMap$_dissoc$arity$2;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._dissoc[(function (){var G__25417 = x__4365__auto__;
return goog.typeOf(G__25417);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});


cljs.core.IMapEntry = (function (){var obj25419 = {};
return obj25419;
})();

cljs.core._key = (function _key(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IMapEntry$_key$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._key[(function (){var G__25423 = x__4365__auto__;
return goog.typeOf(G__25423);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._key["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});

cljs.core._val = (function _val(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IMapEntry$_val$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._val[(function (){var G__25427 = x__4365__auto__;
return goog.typeOf(G__25427);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._val["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISet = (function (){var obj25429 = {};
return obj25429;
})();

cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$ISet$_disjoin$arity$2;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._disjoin[(function (){var G__25433 = x__4365__auto__;
return goog.typeOf(G__25433);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});


cljs.core.IStack = (function (){var obj25435 = {};
return obj25435;
})();

cljs.core._peek = (function _peek(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IStack$_peek$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IStack$_peek$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._peek[(function (){var G__25439 = x__4365__auto__;
return goog.typeOf(G__25439);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._peek["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});

cljs.core._pop = (function _pop(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IStack$_pop$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IStack$_pop$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._pop[(function (){var G__25443 = x__4365__auto__;
return goog.typeOf(G__25443);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._pop["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IVector = (function (){var obj25445 = {};
return obj25445;
})();

cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IVector$_assoc_n$arity$3;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._assoc_n[(function (){var G__25449 = x__4365__auto__;
return goog.typeOf(G__25449);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});


cljs.core.IDeref = (function (){var obj25451 = {};
return obj25451;
})();

cljs.core._deref = (function _deref(o){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$IDeref$_deref$arity$1;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$IDeref$_deref$arity$1(o);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._deref[(function (){var G__25455 = x__4365__auto__;
return goog.typeOf(G__25455);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._deref["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});


cljs.core.IDerefWithTimeout = (function (){var obj25457 = {};
return obj25457;
})();

cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._deref_with_timeout[(function (){var G__25461 = x__4365__auto__;
return goog.typeOf(G__25461);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});


cljs.core.IMeta = (function (){var obj25463 = {};
return obj25463;
})();

cljs.core._meta = (function _meta(o){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$IMeta$_meta$arity$1;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$IMeta$_meta$arity$1(o);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._meta[(function (){var G__25467 = x__4365__auto__;
return goog.typeOf(G__25467);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._meta["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});


cljs.core.IWithMeta = (function (){var obj25469 = {};
return obj25469;
})();

cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._with_meta[(function (){var G__25473 = x__4365__auto__;
return goog.typeOf(G__25473);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});


cljs.core.IReduce = (function (){var obj25475 = {};
return obj25475;
})();

cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IReduce$_reduce$arity$2;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._reduce[(function (){var G__25481 = x__4365__auto__;
return goog.typeOf(G__25481);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._reduce["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IReduce$_reduce$arity$3;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._reduce[(function (){var G__25483 = x__4365__auto__;
return goog.typeOf(G__25483);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._reduce["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;


cljs.core.IKVReduce = (function (){var obj25485 = {};
return obj25485;
})();

cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._kv_reduce[(function (){var G__25489 = x__4365__auto__;
return goog.typeOf(G__25489);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});


cljs.core.IEquiv = (function (){var obj25491 = {};
return obj25491;
})();

cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$IEquiv$_equiv$arity$2;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._equiv[(function (){var G__25495 = x__4365__auto__;
return goog.typeOf(G__25495);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._equiv["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});


cljs.core.IHash = (function (){var obj25497 = {};
return obj25497;
})();

cljs.core._hash = (function _hash(o){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$IHash$_hash$arity$1;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(o);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._hash[(function (){var G__25501 = x__4365__auto__;
return goog.typeOf(G__25501);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._hash["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});


cljs.core.ISeqable = (function (){var obj25503 = {};
return obj25503;
})();

cljs.core._seq = (function _seq(o){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$ISeqable$_seq$arity$1;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$ISeqable$_seq$arity$1(o);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._seq[(function (){var G__25507 = x__4365__auto__;
return goog.typeOf(G__25507);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._seq["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});


cljs.core.ISequential = (function (){var obj25509 = {};
return obj25509;
})();


cljs.core.IList = (function (){var obj25511 = {};
return obj25511;
})();


cljs.core.IRecord = (function (){var obj25513 = {};
return obj25513;
})();


cljs.core.IReversible = (function (){var obj25515 = {};
return obj25515;
})();

cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IReversible$_rseq$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._rseq[(function (){var G__25519 = x__4365__auto__;
return goog.typeOf(G__25519);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._rseq["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISorted = (function (){var obj25521 = {};
return obj25521;
})();

cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._sorted_seq[(function (){var G__25525 = x__4365__auto__;
return goog.typeOf(G__25525);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});

cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._sorted_seq_from[(function (){var G__25529 = x__4365__auto__;
return goog.typeOf(G__25529);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});

cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$ISorted$_entry_key$arity$2;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._entry_key[(function (){var G__25533 = x__4365__auto__;
return goog.typeOf(G__25533);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});

cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$ISorted$_comparator$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._comparator[(function (){var G__25537 = x__4365__auto__;
return goog.typeOf(G__25537);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._comparator["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IWriter = (function (){var obj25539 = {};
return obj25539;
})();

cljs.core._write = (function _write(writer,s){
if((function (){var and__3709__auto__ = writer;
if(and__3709__auto__){
return writer.cljs$core$IWriter$_write$arity$2;
} else {
return and__3709__auto__;
}
})()){
return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else {
var x__4365__auto__ = (((writer == null))?null:writer);
return (function (){var or__3721__auto__ = (cljs.core._write[(function (){var G__25543 = x__4365__auto__;
return goog.typeOf(G__25543);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._write["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});

cljs.core._flush = (function _flush(writer){
if((function (){var and__3709__auto__ = writer;
if(and__3709__auto__){
return writer.cljs$core$IWriter$_flush$arity$1;
} else {
return and__3709__auto__;
}
})()){
return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else {
var x__4365__auto__ = (((writer == null))?null:writer);
return (function (){var or__3721__auto__ = (cljs.core._flush[(function (){var G__25547 = x__4365__auto__;
return goog.typeOf(G__25547);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._flush["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});


cljs.core.IPrintWithWriter = (function (){var obj25549 = {};
return obj25549;
})();

cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._pr_writer[(function (){var G__25553 = x__4365__auto__;
return goog.typeOf(G__25553);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});


cljs.core.IPending = (function (){var obj25555 = {};
return obj25555;
})();

cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3709__auto__ = d;
if(and__3709__auto__){
return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else {
return and__3709__auto__;
}
})()){
return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else {
var x__4365__auto__ = (((d == null))?null:d);
return (function (){var or__3721__auto__ = (cljs.core._realized_QMARK_[(function (){var G__25559 = x__4365__auto__;
return goog.typeOf(G__25559);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});


cljs.core.IWatchable = (function (){var obj25561 = {};
return obj25561;
})();

cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._notify_watches[(function (){var G__25565 = x__4365__auto__;
return goog.typeOf(G__25565);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});

cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._add_watch[(function (){var G__25569 = x__4365__auto__;
return goog.typeOf(G__25569);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else {
return and__3709__auto__;
}
})()){
return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (cljs.core._remove_watch[(function (){var G__25573 = x__4365__auto__;
return goog.typeOf(G__25573);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});


cljs.core.IEditableCollection = (function (){var obj25575 = {};
return obj25575;
})();

cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._as_transient[(function (){var G__25579 = x__4365__auto__;
return goog.typeOf(G__25579);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ITransientCollection = (function (){var obj25581 = {};
return obj25581;
})();

cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3709__auto__ = tcoll;
if(and__3709__auto__){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else {
var x__4365__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3721__auto__ = (cljs.core._conj_BANG_[(function (){var G__25585 = x__4365__auto__;
return goog.typeOf(G__25585);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});

cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3709__auto__ = tcoll;
if(and__3709__auto__){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else {
return and__3709__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else {
var x__4365__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3721__auto__ = (cljs.core._persistent_BANG_[(function (){var G__25589 = x__4365__auto__;
return goog.typeOf(G__25589);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientAssociative = (function (){var obj25591 = {};
return obj25591;
})();

cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3709__auto__ = tcoll;
if(and__3709__auto__){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else {
return and__3709__auto__;
}
})()){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else {
var x__4365__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3721__auto__ = (cljs.core._assoc_BANG_[(function (){var G__25595 = x__4365__auto__;
return goog.typeOf(G__25595);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});


cljs.core.ITransientMap = (function (){var obj25597 = {};
return obj25597;
})();

cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3709__auto__ = tcoll;
if(and__3709__auto__){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else {
var x__4365__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3721__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__25601 = x__4365__auto__;
return goog.typeOf(G__25601);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});


cljs.core.ITransientVector = (function (){var obj25603 = {};
return obj25603;
})();

cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3709__auto__ = tcoll;
if(and__3709__auto__){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else {
return and__3709__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else {
var x__4365__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3721__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__25607 = x__4365__auto__;
return goog.typeOf(G__25607);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});

cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3709__auto__ = tcoll;
if(and__3709__auto__){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else {
return and__3709__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else {
var x__4365__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3721__auto__ = (cljs.core._pop_BANG_[(function (){var G__25611 = x__4365__auto__;
return goog.typeOf(G__25611);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientSet = (function (){var obj25613 = {};
return obj25613;
})();

cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3709__auto__ = tcoll;
if(and__3709__auto__){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else {
var x__4365__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3721__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__25617 = x__4365__auto__;
return goog.typeOf(G__25617);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});


cljs.core.IComparable = (function (){var obj25619 = {};
return obj25619;
})();

cljs.core._compare = (function _compare(x,y){
if((function (){var and__3709__auto__ = x;
if(and__3709__auto__){
return x.cljs$core$IComparable$_compare$arity$2;
} else {
return and__3709__auto__;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else {
var x__4365__auto__ = (((x == null))?null:x);
return (function (){var or__3721__auto__ = (cljs.core._compare[(function (){var G__25623 = x__4365__auto__;
return goog.typeOf(G__25623);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._compare["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});


cljs.core.IChunk = (function (){var obj25625 = {};
return obj25625;
})();

cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IChunk$_drop_first$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._drop_first[(function (){var G__25629 = x__4365__auto__;
return goog.typeOf(G__25629);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedSeq = (function (){var obj25631 = {};
return obj25631;
})();

cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._chunked_first[(function (){var G__25635 = x__4365__auto__;
return goog.typeOf(G__25635);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._chunked_rest[(function (){var G__25639 = x__4365__auto__;
return goog.typeOf(G__25639);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedNext = (function (){var obj25641 = {};
return obj25641;
})();

cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._chunked_next[(function (){var G__25645 = x__4365__auto__;
return goog.typeOf(G__25645);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INamed = (function (){var obj25647 = {};
return obj25647;
})();

cljs.core._name = (function _name(x){
if((function (){var and__3709__auto__ = x;
if(and__3709__auto__){
return x.cljs$core$INamed$_name$arity$1;
} else {
return and__3709__auto__;
}
})()){
return x.cljs$core$INamed$_name$arity$1(x);
} else {
var x__4365__auto__ = (((x == null))?null:x);
return (function (){var or__3721__auto__ = (cljs.core._name[(function (){var G__25651 = x__4365__auto__;
return goog.typeOf(G__25651);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._name["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});

cljs.core._namespace = (function _namespace(x){
if((function (){var and__3709__auto__ = x;
if(and__3709__auto__){
return x.cljs$core$INamed$_namespace$arity$1;
} else {
return and__3709__auto__;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(x);
} else {
var x__4365__auto__ = (((x == null))?null:x);
return (function (){var or__3721__auto__ = (cljs.core._namespace[(function (){var G__25655 = x__4365__auto__;
return goog.typeOf(G__25655);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._namespace["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});


cljs.core.IAtom = (function (){var obj25657 = {};
return obj25657;
})();


cljs.core.IReset = (function (){var obj25659 = {};
return obj25659;
})();

cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._reset_BANG_[(function (){var G__25663 = x__4365__auto__;
return goog.typeOf(G__25663);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._reset_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.ISwap = (function (){var obj25665 = {};
return obj25665;
})();

cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._swap_BANG_[(function (){var G__25675 = x__4365__auto__;
return goog.typeOf(G__25675);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._swap_BANG_[(function (){var G__25677 = x__4365__auto__;
return goog.typeOf(G__25677);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._swap_BANG_[(function (){var G__25679 = x__4365__auto__;
return goog.typeOf(G__25679);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._swap_BANG_[(function (){var G__25681 = x__4365__auto__;
return goog.typeOf(G__25681);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;


cljs.core.IVolatile = (function (){var obj25683 = {};
return obj25683;
})();

cljs.core._vreset_BANG_ = (function _vreset_BANG_(o,new_value){
if((function (){var and__3709__auto__ = o;
if(and__3709__auto__){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2(o,new_value);
} else {
var x__4365__auto__ = (((o == null))?null:o);
return (function (){var or__3721__auto__ = (cljs.core._vreset_BANG_[(function (){var G__25687 = x__4365__auto__;
return goog.typeOf(G__25687);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._vreset_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IVolatile.-vreset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.IIterable = (function (){var obj25689 = {};
return obj25689;
})();

cljs.core._iterator = (function _iterator(coll){
if((function (){var and__3709__auto__ = coll;
if(and__3709__auto__){
return coll.cljs$core$IIterable$_iterator$arity$1;
} else {
return and__3709__auto__;
}
})()){
return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else {
var x__4365__auto__ = (((coll == null))?null:coll);
return (function (){var or__3721__auto__ = (cljs.core._iterator[(function (){var G__25693 = x__4365__auto__;
return goog.typeOf(G__25693);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._iterator["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});


/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.sb.append(s);
});

cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cljs.core.StringBufferWriter.cljs$lang$type = true;

cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";

cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/StringBufferWriter");
});

cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){
return (new cljs.core.StringBufferWriter(sb));
});

/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());

writer.cljs$core$IWriter$_flush$arity$1(null);

return [cljs.core.str(sb)].join('');
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){
return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__25696 = (4294967295);
var G__25697 = (5);
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__25696,G__25697) : Math.imul.call(null,G__25696,G__25697));
})() === (0))))){
cljs.core.imul = (function imul(a,b){
var G__25700 = a;
var G__25701 = b;
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__25700,G__25701) : Math.imul.call(null,G__25700,G__25701));
});
} else {
cljs.core.imul = (function imul(a,b){
var ah = ((a >>> (16)) & (65535));
var al = (a & (65535));
var bh = ((b >>> (16)) & (65535));
var bl = (b & (65535));
return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){
return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){
return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){
var h1__$1 = h1;
var h1__$2 = (h1__$1 ^ len);
var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));
var h1__$4 = cljs.core.imul(h1__$3,(2246822507));
var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));
var h1__$6 = cljs.core.imul(h1__$5,(3266489909));
var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));
return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){
if((in$ === (0))){
return in$;
} else {
var k1 = cljs.core.m3_mix_K1(in$);
var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);
return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){
var h1 = (function (){var i = (1);
var h1 = cljs.core.m3_seed;
while(true){
if((i < in$.length)){
var G__25702 = (i + (2));
var G__25703 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__25702;
h1 = G__25703;
continue;
} else {
return h1;
}
break;
}
})();
var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);
return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});



cljs.core.string_hash_cache = (function (){var obj25705 = {};
return obj25705;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){
if(!((s == null))){
var len = s.length;
if((len > (0))){
var i = (0);
var hash = (0);
while(true){
if((i < len)){
var G__25706 = (i + (1));
var G__25707 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__25706;
hash = G__25707;
continue;
} else {
return hash;
}
break;
}
} else {
return (0);
}
} else {
return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = cljs.core.hash_string_STAR_(k);
(cljs.core.string_hash_cache[k] = h);

cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));

return h;
});
cljs.core.hash_string = (function hash_string(k){
if((cljs.core.string_hash_cache_count > (255))){
cljs.core.string_hash_cache = (function (){var obj25711 = {};
return obj25711;
})();

cljs.core.string_hash_cache_count = (0);
} else {
}

var h = (cljs.core.string_hash_cache[k]);
if(typeof h === 'number'){
return h;
} else {
return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){
if((function (){var G__25714 = o;
if(G__25714){
var bit__4395__auto__ = (G__25714.cljs$lang$protocol_mask$partition0$ & (4194304));
if((bit__4395__auto__) || (G__25714.cljs$core$IHash$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(null);
} else {
if(typeof o === 'number'){
return ((function (){var G__25715 = o;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__25715) : Math.floor.call(null,G__25715));
})() % (2147483647));
} else {
if(o === true){
return (1);
} else {
if(o === false){
return (0);
} else {
if(typeof o === 'string'){
return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else {
if((o instanceof Date)){
return o.valueOf();
} else {
if((o == null)){
return (0);
} else {
return cljs.core._hash(o);

}
}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){
return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){
if((a.str === b.str)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3709__auto__ = cljs.core.not(a.ns);
if(and__3709__auto__){
return b.ns;
} else {
return and__3709__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__25722 = a.ns;
var G__25723 = b.ns;
return goog.array.defaultCompare(G__25722,G__25723);
})();
if(((0) === nsc)){
var G__25724 = a.name;
var G__25725 = b.name;
return goog.array.defaultCompare(G__25724,G__25725);
} else {
return nsc;
}
}
} else {
var G__25726 = a.name;
var G__25727 = b.name;
return goog.array.defaultCompare(G__25726,G__25727);

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,self__.str);
});

cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){
var self__ = this;
var sym__$1 = this;
var h__4142__auto__ = self__._hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_symbol(sym__$1);
self__._hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});

cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Symbol.prototype.call = (function() {
var G__25729 = null;
var G__25729__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__25729__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__25729 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__25729__2.call(this,self__,coll);
case 3:
return G__25729__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25729.cljs$core$IFn$_invoke$arity$2 = G__25729__2;
G__25729.cljs$core$IFn$_invoke$arity$3 = G__25729__3;
return G__25729;
})()
;

cljs.core.Symbol.prototype.apply = (function (self__,args25728){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25728)));
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});

cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Symbol)){
return (self__.str === other.str);
} else {
return false;
}
});

cljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.str;
});

cljs.core.Symbol.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Symbol.cljs$lang$type = true;

cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";

cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Symbol");
});

cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){
return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});

cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if((name instanceof cljs.core.Symbol)){
return name;
} else {
return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){
var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;

/**
* @constructor
*/
cljs.core.Var = (function (val,sym,_meta){
this.val = val;
this.sym = sym;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 163840;
})
cljs.core.Var.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Var.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.Var.cljs$lang$type = true;

cljs.core.Var.cljs$lang$ctorStr = "cljs.core/Var";

cljs.core.Var.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Var");
});

cljs.core.__GT_Var = (function __GT_Var(val,sym,_meta){
return (new cljs.core.Var(val,sym,_meta));
});



cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){
var G__25733 = x;
if(G__25733){
var bit__4402__auto__ = null;
if(cljs.core.truth_((function (){var or__3721__auto__ = bit__4402__auto__;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return G__25733.cljs$core$IIterable$;
}
})())){
return true;
} else {
if((!G__25733.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__25733);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__25733);
}
});
cljs.core.clone = (function clone(value){
return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){
var G__25735 = value;
if(G__25735){
var bit__4402__auto__ = (G__25735.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4402__auto__) || (G__25735.cljs$core$ICloneable$)){
return true;
} else {
if((!G__25735.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__25735);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__25735);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__25737 = coll;
if(G__25737){
var bit__4395__auto__ = (G__25737.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4395__auto__) || (G__25737.cljs$core$ISeqable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else {
if(coll instanceof Array){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(typeof coll === 'string'){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll)){
return cljs.core._seq(coll);
} else {
throw (new Error([cljs.core.str(coll),cljs.core.str(" is not ISeqable")].join('')));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__25739 = coll;
if(G__25739){
var bit__4395__auto__ = (G__25739.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4395__auto__) || (G__25739.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if((s == null)){
return null;
} else {
return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null))){
if((function (){var G__25741 = coll;
if(G__25741){
var bit__4395__auto__ = (G__25741.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4395__auto__) || (G__25741.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if(s){
return cljs.core._rest(s);
} else {
return cljs.core.List.EMPTY;
}
}
} else {
return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__25743 = coll;
if(G__25743){
var bit__4395__auto__ = (G__25743.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4395__auto__) || (G__25743.cljs$core$INext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$INext$_next$arity$1(null);
} else {
return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
if((x == null)){
return (y == null);
} else {
return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__25748__delegate = function (x,y,more){
while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__25749 = y;
var G__25750 = cljs.core.first(more);
var G__25751 = cljs.core.next(more);
x = G__25749;
y = G__25750;
more = G__25751;
continue;
} else {
return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__25748 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25748__delegate.call(this,x,y,more);};
G__25748.cljs$lang$maxFixedArity = 2;
G__25748.cljs$lang$applyTo = (function (arglist__25752){
var x = cljs.core.first(arglist__25752);
arglist__25752 = cljs.core.next(arglist__25752);
var y = cljs.core.first(arglist__25752);
var more = cljs.core.rest(arglist__25752);
return G__25748__delegate(x,y,more);
});
G__25748.cljs$core$IFn$_invoke$arity$variadic = G__25748__delegate;
return G__25748;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": x};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6Iterator.cljs$lang$type = true;

cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";

cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ES6Iterator");
});

cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){
return (new cljs.core.ES6Iterator(s));
});

cljs.core.es6_iterator = (function es6_iterator(coll){
return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6IteratorSeq = (function (value,iter,_rest){
this.value = value;
this.iter = iter;
this._rest = _rest;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8388672;
})
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__._rest == null)){
self__._rest = (function (){var G__25753 = self__.iter;
return (cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1(G__25753) : cljs.core.es6_iterator_seq.call(null,G__25753));
})();
} else {
}

return self__._rest;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ES6IteratorSeq.cljs$lang$type = true;

cljs.core.ES6IteratorSeq.cljs$lang$ctorStr = "cljs.core/ES6IteratorSeq";

cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ES6IteratorSeq");
});

cljs.core.__GT_ES6IteratorSeq = (function __GT_ES6IteratorSeq(value,iter,_rest){
return (new cljs.core.ES6IteratorSeq(value,iter,_rest));
});

cljs.core.es6_iterator_seq = (function es6_iterator_seq(iter){
var v = iter.next();
if(cljs.core.truth_(v.done)){
return cljs.core.List.EMPTY;
} else {
return (new cljs.core.ES6IteratorSeq(v.value,iter,null));
}
});
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){
var h1 = cljs.core.m3_seed;
var k1 = cljs.core.m3_mix_K1(hash_basis);
var h1__$1 = cljs.core.m3_mix_H1(h1,k1);
return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){
var n = (0);
var hash_code = (1);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__25754 = (n + (1));
var G__25755 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__25756 = cljs.core.next(coll__$1);
n = G__25754;
hash_code = G__25755;
coll__$1 = G__25756;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){
var n = (0);
var hash_code = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__25757 = (n + (1));
var G__25758 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__25759 = cljs.core.next(coll__$1);
n = G__25757;
hash_code = G__25758;
coll__$1 = G__25759;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});


(cljs.core.ICounted["null"] = true);

(cljs.core._count["null"] = (function (_){
return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;

Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (_){
return null;
}));

(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);

(cljs.core._hash["_"] = (function (o){
var G__25760 = o;
return goog.getUid(G__25760);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.val;
});

cljs.core.Reduced.cljs$lang$type = true;

cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";

cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Reduced");
});

cljs.core.__GT_Reduced = (function __GT_Reduced(val){
return (new cljs.core.Reduced(val));
});

/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return (r instanceof cljs.core.Reduced);
});
/**
* If x is already reduced?, returns it, else returns (reduced x)
*/
cljs.core.ensure_reduced = (function ensure_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return x;
} else {
return cljs.core.reduced(x);
}
});
/**
* If x is reduced?, returns (deref x), else returns x
*/
cljs.core.unreduced = (function unreduced(x){
if(cljs.core.reduced_QMARK_(x)){
var G__25762 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25762) : cljs.core.deref.call(null,G__25762));
} else {
return x;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count(cicoll);
if((cnt === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__25769 = val;
var G__25770 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25769,G__25770) : f.call(null,G__25769,G__25770));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__25775 = nval;
var G__25776 = (n + (1));
val = G__25775;
n = G__25776;
continue;
}
} else {
return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__25771 = val__$1;
var G__25772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25771,G__25772) : f.call(null,G__25771,G__25772));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__25777 = nval;
var G__25778 = (n + (1));
val__$1 = G__25777;
n = G__25778;
continue;
}
} else {
return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__25773 = val__$1;
var G__25774 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25773,G__25774) : f.call(null,G__25773,G__25774));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__25779 = nval;
var G__25780 = (n + (1));
val__$1 = G__25779;
n = G__25780;
continue;
}
} else {
return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = (arr[(0)]);
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__25787 = val;
var G__25788 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25787,G__25788) : f.call(null,G__25787,G__25788));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__25793 = nval;
var G__25794 = (n + (1));
val = G__25793;
n = G__25794;
continue;
}
} else {
return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__25789 = val__$1;
var G__25790 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25789,G__25790) : f.call(null,G__25789,G__25790));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__25795 = nval;
var G__25796 = (n + (1));
val__$1 = G__25795;
n = G__25796;
continue;
}
} else {
return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__25791 = val__$1;
var G__25792 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25791,G__25792) : f.call(null,G__25791,G__25792));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__25797 = nval;
var G__25798 = (n + (1));
val__$1 = G__25797;
n = G__25798;
continue;
}
} else {
return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;



/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__25800 = x;
if(G__25800){
var bit__4402__auto__ = (G__25800.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4402__auto__) || (G__25800.cljs$core$ICounted$)){
return true;
} else {
if((!G__25800.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__25800);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__25800);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__25802 = x;
if(G__25802){
var bit__4402__auto__ = (G__25802.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4402__auto__) || (G__25802.cljs$core$IIndexed$)){
return true;
} else {
if((!G__25802.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__25802);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__25802);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.IndexedSeqIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.IndexedSeqIterator.cljs$lang$type = true;

cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";

cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/IndexedSeqIterator");
});

cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){
return (new cljs.core.IndexedSeqIterator(arr,i));
});


/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.IndexedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return not_found;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr.length - self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var c = cljs.core._count(coll__$1);
if((c > (0))){
return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__25803 = coll__$1;
var G__25804 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__25803,G__25804) : cljs.core.equiv_sequential.call(null,G__25803,G__25804));
});

cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr[self__.i]);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__25805 = o;
var G__25806 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__25805,G__25806) : cljs.core.cons.call(null,G__25805,G__25806));
});

cljs.core.IndexedSeq.cljs$lang$type = true;

cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";

cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/IndexedSeq");
});

cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){
return (new cljs.core.IndexedSeq(arr,i));
});

(cljs.core.IndexedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length)){
return (new cljs.core.IndexedSeq(prim,i));
} else {
return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;


/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.RSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});

cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return null;
}
});

cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.i + (1));
});

cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__25809 = coll__$1;
var G__25810 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__25809,G__25810) : cljs.core.equiv_sequential.call(null,G__25809,G__25810));
});

cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__25811 = cljs.core.List.EMPTY;
var G__25812 = self__.meta;
return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__25811,G__25812) : cljs.core.with_meta.call(null,G__25811,G__25812));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){
var self__ = this;
var col__$1 = this;
var G__25813 = f;
var G__25814 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__25813,G__25814) : cljs.core.seq_reduce.call(null,G__25813,G__25814));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){
var self__ = this;
var col__$1 = this;
var G__25815 = f;
var G__25816 = start;
var G__25817 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__25815,G__25816,G__25817) : cljs.core.seq_reduce.call(null,G__25815,G__25816,G__25817));
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});

cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__25818 = o;
var G__25819 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__25818,G__25819) : cljs.core.cons.call(null,G__25818,G__25819));
});

cljs.core.RSeq.cljs$lang$type = true;

cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";

cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/RSeq");
});

cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){
return (new cljs.core.RSeq(ci,i,meta));
});

(cljs.core.RSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next(s);
if(!((sn == null))){
var G__25820 = sn;
s = G__25820;
continue;
} else {
return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);

(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){
return coll;
});
var conj__2 = (function (coll,x){
if(!((coll == null))){
return cljs.core._conj(coll,x);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__25825__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__25826 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__25827 = cljs.core.first(xs);
var G__25828 = cljs.core.next(xs);
coll = G__25826;
x = G__25827;
xs = G__25828;
continue;
} else {
return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__25825 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25825__delegate.call(this,coll,x,xs);};
G__25825.cljs$lang$maxFixedArity = 2;
G__25825.cljs$lang$applyTo = (function (arglist__25829){
var coll = cljs.core.first(arglist__25829);
arglist__25829 = cljs.core.next(arglist__25829);
var x = cljs.core.first(arglist__25829);
var xs = cljs.core.rest(arglist__25829);
return G__25825__delegate(coll,x,xs);
});
G__25825.cljs$core$IFn$_invoke$arity$variadic = G__25825__delegate;
return G__25825;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
if((coll == null)){
return null;
} else {
return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq(coll);
var acc = (0);
while(true){
if(cljs.core.counted_QMARK_(s)){
return (acc + cljs.core._count(s));
} else {
var G__25830 = cljs.core.next(s);
var G__25831 = (acc + (1));
s = G__25830;
acc = G__25831;
continue;
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(!((coll == null))){
if((function (){var G__25833 = coll;
if(G__25833){
var bit__4395__auto__ = (G__25833.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4395__auto__) || (G__25833.cljs$core$ICounted$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(null);
} else {
if(coll instanceof Array){
return coll.length;
} else {
if(typeof coll === 'string'){
return coll.length;
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll)){
return cljs.core._count(coll);
} else {
return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else {
return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null)){
throw (new Error("Index out of bounds"));
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
throw (new Error("Index out of bounds"));
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if(cljs.core.seq(coll)){
var G__25834 = cljs.core.next(coll);
var G__25835 = (n - (1));
coll = G__25834;
n = G__25835;
continue;
} else {
throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null)){
return not_found;
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
return not_found;
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
if(cljs.core.seq(coll)){
var G__25836 = cljs.core.next(coll);
var G__25837 = (n - (1));
var G__25838 = not_found;
coll = G__25836;
n = G__25837;
not_found = G__25838;
continue;
} else {
return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number"));
} else {
if((coll == null)){
return coll;
} else {
if((function (){var G__25843 = coll;
if(G__25843){
var bit__4395__auto__ = (G__25843.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4395__auto__) || (G__25843.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__25844 = coll;
if(G__25844){
var bit__4402__auto__ = (G__25844.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4402__auto__) || (G__25844.cljs$core$ISeq$)){
return true;
} else {
if((!G__25844.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25844);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25844);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number."));
} else {
if((coll == null)){
return not_found;
} else {
if((function (){var G__25845 = coll;
if(G__25845){
var bit__4395__auto__ = (G__25845.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4395__auto__) || (G__25845.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__25846 = coll;
if(G__25846){
var bit__4402__auto__ = (G__25846.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4402__auto__) || (G__25846.cljs$core$ISeq$)){
return true;
} else {
if((!G__25846.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25846);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25846);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the nth rest of coll, coll when n is 0.
*/
cljs.core.nthrest = (function nthrest(coll,n){
var n__$1 = n;
var xs = coll;
while(true){
if(((n__$1 > (0))) && (cljs.core.seq(xs))){
var G__25847 = (n__$1 - (1));
var G__25848 = cljs.core.rest(xs);
n__$1 = G__25847;
xs = G__25848;
continue;
} else {
return xs;
}
break;
}
});
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
if((o == null)){
return null;
} else {
if((function (){var G__25851 = o;
if(G__25851){
var bit__4395__auto__ = (G__25851.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4395__auto__) || (G__25851.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else {
return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){
if(!((o == null))){
if((function (){var G__25852 = o;
if(G__25852){
var bit__4395__auto__ = (G__25852.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4395__auto__) || (G__25852.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else {
return not_found;

}
}
}
}
} else {
return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
if(!((coll == null))){
return cljs.core._assoc(coll,k,v);
} else {
return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__25856__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
if(cljs.core.truth_(kvs)){
var G__25857 = ret;
var G__25858 = cljs.core.first(kvs);
var G__25859 = cljs.core.second(kvs);
var G__25860 = cljs.core.nnext(kvs);
coll = G__25857;
k = G__25858;
v = G__25859;
kvs = G__25860;
continue;
} else {
return ret;
}
break;
}
};
var G__25856 = function (coll,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25856__delegate.call(this,coll,k,v,kvs);};
G__25856.cljs$lang$maxFixedArity = 3;
G__25856.cljs$lang$applyTo = (function (arglist__25861){
var coll = cljs.core.first(arglist__25861);
arglist__25861 = cljs.core.next(arglist__25861);
var k = cljs.core.first(arglist__25861);
arglist__25861 = cljs.core.next(arglist__25861);
var v = cljs.core.first(arglist__25861);
var kvs = cljs.core.rest(arglist__25861);
return G__25856__delegate(coll,k,v,kvs);
});
G__25856.cljs$core$IFn$_invoke$arity$variadic = G__25856__delegate;
return G__25856;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__25864__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__25865 = ret;
var G__25866 = cljs.core.first(ks);
var G__25867 = cljs.core.next(ks);
coll = G__25865;
k = G__25866;
ks = G__25867;
continue;
} else {
return ret;
}
}
break;
}
};
var G__25864 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25864__delegate.call(this,coll,k,ks);};
G__25864.cljs$lang$maxFixedArity = 2;
G__25864.cljs$lang$applyTo = (function (arglist__25868){
var coll = cljs.core.first(arglist__25868);
arglist__25868 = cljs.core.next(arglist__25868);
var k = cljs.core.first(arglist__25868);
var ks = cljs.core.rest(arglist__25868);
return G__25864__delegate(coll,k,ks);
});
G__25864.cljs$core$IFn$_invoke$arity$variadic = G__25864__delegate;
return G__25864;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
var or__3721__auto__ = (function (){var G__25873 = f;
return goog.isFunction(G__25873);
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var G__25874 = f;
if(G__25874){
var bit__4402__auto__ = null;
if(cljs.core.truth_((function (){var or__3721__auto____$1 = bit__4402__auto__;
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
return G__25874.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__25874.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__25874);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__25874);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.prototype.call = (function() {
var G__26340 = null;
var G__26340__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__26340__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25876 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__25876) : self__.afn.call(null,G__25876));
});
var G__26340__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25877 = a;
var G__25878 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__25877,G__25878) : self__.afn.call(null,G__25877,G__25878));
});
var G__26340__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25879 = a;
var G__25880 = b;
var G__25881 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__25879,G__25880,G__25881) : self__.afn.call(null,G__25879,G__25880,G__25881));
});
var G__26340__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25882 = a;
var G__25883 = b;
var G__25884 = c;
var G__25885 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__25882,G__25883,G__25884,G__25885) : self__.afn.call(null,G__25882,G__25883,G__25884,G__25885));
});
var G__26340__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25886 = a;
var G__25887 = b;
var G__25888 = c;
var G__25889 = d;
var G__25890 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__25886,G__25887,G__25888,G__25889,G__25890) : self__.afn.call(null,G__25886,G__25887,G__25888,G__25889,G__25890));
});
var G__26340__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25891 = a;
var G__25892 = b;
var G__25893 = c;
var G__25894 = d;
var G__25895 = e;
var G__25896 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__25891,G__25892,G__25893,G__25894,G__25895,G__25896) : self__.afn.call(null,G__25891,G__25892,G__25893,G__25894,G__25895,G__25896));
});
var G__26340__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25897 = a;
var G__25898 = b;
var G__25899 = c;
var G__25900 = d;
var G__25901 = e;
var G__25902 = f;
var G__25903 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__25897,G__25898,G__25899,G__25900,G__25901,G__25902,G__25903) : self__.afn.call(null,G__25897,G__25898,G__25899,G__25900,G__25901,G__25902,G__25903));
});
var G__26340__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25904 = a;
var G__25905 = b;
var G__25906 = c;
var G__25907 = d;
var G__25908 = e;
var G__25909 = f;
var G__25910 = g;
var G__25911 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__25904,G__25905,G__25906,G__25907,G__25908,G__25909,G__25910,G__25911) : self__.afn.call(null,G__25904,G__25905,G__25906,G__25907,G__25908,G__25909,G__25910,G__25911));
});
var G__26340__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25912 = a;
var G__25913 = b;
var G__25914 = c;
var G__25915 = d;
var G__25916 = e;
var G__25917 = f;
var G__25918 = g;
var G__25919 = h;
var G__25920 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__25912,G__25913,G__25914,G__25915,G__25916,G__25917,G__25918,G__25919,G__25920) : self__.afn.call(null,G__25912,G__25913,G__25914,G__25915,G__25916,G__25917,G__25918,G__25919,G__25920));
});
var G__26340__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25921 = a;
var G__25922 = b;
var G__25923 = c;
var G__25924 = d;
var G__25925 = e;
var G__25926 = f;
var G__25927 = g;
var G__25928 = h;
var G__25929 = i;
var G__25930 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__25921,G__25922,G__25923,G__25924,G__25925,G__25926,G__25927,G__25928,G__25929,G__25930) : self__.afn.call(null,G__25921,G__25922,G__25923,G__25924,G__25925,G__25926,G__25927,G__25928,G__25929,G__25930));
});
var G__26340__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25931 = a;
var G__25932 = b;
var G__25933 = c;
var G__25934 = d;
var G__25935 = e;
var G__25936 = f;
var G__25937 = g;
var G__25938 = h;
var G__25939 = i;
var G__25940 = j;
var G__25941 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937,G__25938,G__25939,G__25940,G__25941) : self__.afn.call(null,G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937,G__25938,G__25939,G__25940,G__25941));
});
var G__26340__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25942 = a;
var G__25943 = b;
var G__25944 = c;
var G__25945 = d;
var G__25946 = e;
var G__25947 = f;
var G__25948 = g;
var G__25949 = h;
var G__25950 = i;
var G__25951 = j;
var G__25952 = k;
var G__25953 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__25942,G__25943,G__25944,G__25945,G__25946,G__25947,G__25948,G__25949,G__25950,G__25951,G__25952,G__25953) : self__.afn.call(null,G__25942,G__25943,G__25944,G__25945,G__25946,G__25947,G__25948,G__25949,G__25950,G__25951,G__25952,G__25953));
});
var G__26340__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25954 = a;
var G__25955 = b;
var G__25956 = c;
var G__25957 = d;
var G__25958 = e;
var G__25959 = f;
var G__25960 = g;
var G__25961 = h;
var G__25962 = i;
var G__25963 = j;
var G__25964 = k;
var G__25965 = l;
var G__25966 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__25954,G__25955,G__25956,G__25957,G__25958,G__25959,G__25960,G__25961,G__25962,G__25963,G__25964,G__25965,G__25966) : self__.afn.call(null,G__25954,G__25955,G__25956,G__25957,G__25958,G__25959,G__25960,G__25961,G__25962,G__25963,G__25964,G__25965,G__25966));
});
var G__26340__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25967 = a;
var G__25968 = b;
var G__25969 = c;
var G__25970 = d;
var G__25971 = e;
var G__25972 = f;
var G__25973 = g;
var G__25974 = h;
var G__25975 = i;
var G__25976 = j;
var G__25977 = k;
var G__25978 = l;
var G__25979 = m;
var G__25980 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__25967,G__25968,G__25969,G__25970,G__25971,G__25972,G__25973,G__25974,G__25975,G__25976,G__25977,G__25978,G__25979,G__25980) : self__.afn.call(null,G__25967,G__25968,G__25969,G__25970,G__25971,G__25972,G__25973,G__25974,G__25975,G__25976,G__25977,G__25978,G__25979,G__25980));
});
var G__26340__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25981 = a;
var G__25982 = b;
var G__25983 = c;
var G__25984 = d;
var G__25985 = e;
var G__25986 = f;
var G__25987 = g;
var G__25988 = h;
var G__25989 = i;
var G__25990 = j;
var G__25991 = k;
var G__25992 = l;
var G__25993 = m;
var G__25994 = n;
var G__25995 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__25981,G__25982,G__25983,G__25984,G__25985,G__25986,G__25987,G__25988,G__25989,G__25990,G__25991,G__25992,G__25993,G__25994,G__25995) : self__.afn.call(null,G__25981,G__25982,G__25983,G__25984,G__25985,G__25986,G__25987,G__25988,G__25989,G__25990,G__25991,G__25992,G__25993,G__25994,G__25995));
});
var G__26340__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__25996 = a;
var G__25997 = b;
var G__25998 = c;
var G__25999 = d;
var G__26000 = e;
var G__26001 = f;
var G__26002 = g;
var G__26003 = h;
var G__26004 = i;
var G__26005 = j;
var G__26006 = k;
var G__26007 = l;
var G__26008 = m;
var G__26009 = n;
var G__26010 = o;
var G__26011 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__25996,G__25997,G__25998,G__25999,G__26000,G__26001,G__26002,G__26003,G__26004,G__26005,G__26006,G__26007,G__26008,G__26009,G__26010,G__26011) : self__.afn.call(null,G__25996,G__25997,G__25998,G__25999,G__26000,G__26001,G__26002,G__26003,G__26004,G__26005,G__26006,G__26007,G__26008,G__26009,G__26010,G__26011));
});
var G__26340__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26012 = a;
var G__26013 = b;
var G__26014 = c;
var G__26015 = d;
var G__26016 = e;
var G__26017 = f;
var G__26018 = g;
var G__26019 = h;
var G__26020 = i;
var G__26021 = j;
var G__26022 = k;
var G__26023 = l;
var G__26024 = m;
var G__26025 = n;
var G__26026 = o;
var G__26027 = p;
var G__26028 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__26012,G__26013,G__26014,G__26015,G__26016,G__26017,G__26018,G__26019,G__26020,G__26021,G__26022,G__26023,G__26024,G__26025,G__26026,G__26027,G__26028) : self__.afn.call(null,G__26012,G__26013,G__26014,G__26015,G__26016,G__26017,G__26018,G__26019,G__26020,G__26021,G__26022,G__26023,G__26024,G__26025,G__26026,G__26027,G__26028));
});
var G__26340__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26029 = a;
var G__26030 = b;
var G__26031 = c;
var G__26032 = d;
var G__26033 = e;
var G__26034 = f;
var G__26035 = g;
var G__26036 = h;
var G__26037 = i;
var G__26038 = j;
var G__26039 = k;
var G__26040 = l;
var G__26041 = m;
var G__26042 = n;
var G__26043 = o;
var G__26044 = p;
var G__26045 = q;
var G__26046 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__26029,G__26030,G__26031,G__26032,G__26033,G__26034,G__26035,G__26036,G__26037,G__26038,G__26039,G__26040,G__26041,G__26042,G__26043,G__26044,G__26045,G__26046) : self__.afn.call(null,G__26029,G__26030,G__26031,G__26032,G__26033,G__26034,G__26035,G__26036,G__26037,G__26038,G__26039,G__26040,G__26041,G__26042,G__26043,G__26044,G__26045,G__26046));
});
var G__26340__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26047 = a;
var G__26048 = b;
var G__26049 = c;
var G__26050 = d;
var G__26051 = e;
var G__26052 = f;
var G__26053 = g;
var G__26054 = h;
var G__26055 = i;
var G__26056 = j;
var G__26057 = k;
var G__26058 = l;
var G__26059 = m;
var G__26060 = n;
var G__26061 = o;
var G__26062 = p;
var G__26063 = q;
var G__26064 = r;
var G__26065 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__26047,G__26048,G__26049,G__26050,G__26051,G__26052,G__26053,G__26054,G__26055,G__26056,G__26057,G__26058,G__26059,G__26060,G__26061,G__26062,G__26063,G__26064,G__26065) : self__.afn.call(null,G__26047,G__26048,G__26049,G__26050,G__26051,G__26052,G__26053,G__26054,G__26055,G__26056,G__26057,G__26058,G__26059,G__26060,G__26061,G__26062,G__26063,G__26064,G__26065));
});
var G__26340__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26066 = a;
var G__26067 = b;
var G__26068 = c;
var G__26069 = d;
var G__26070 = e;
var G__26071 = f;
var G__26072 = g;
var G__26073 = h;
var G__26074 = i;
var G__26075 = j;
var G__26076 = k;
var G__26077 = l;
var G__26078 = m;
var G__26079 = n;
var G__26080 = o;
var G__26081 = p;
var G__26082 = q;
var G__26083 = r;
var G__26084 = s;
var G__26085 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__26066,G__26067,G__26068,G__26069,G__26070,G__26071,G__26072,G__26073,G__26074,G__26075,G__26076,G__26077,G__26078,G__26079,G__26080,G__26081,G__26082,G__26083,G__26084,G__26085) : self__.afn.call(null,G__26066,G__26067,G__26068,G__26069,G__26070,G__26071,G__26072,G__26073,G__26074,G__26075,G__26076,G__26077,G__26078,G__26079,G__26080,G__26081,G__26082,G__26083,G__26084,G__26085));
});
var G__26340__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__26086 = self__.afn;
var G__26087 = a;
var G__26088 = b;
var G__26089 = c;
var G__26090 = d;
var G__26091 = e;
var G__26092 = f;
var G__26093 = g;
var G__26094 = h;
var G__26095 = i;
var G__26096 = j;
var G__26097 = k;
var G__26098 = l;
var G__26099 = m;
var G__26100 = n;
var G__26101 = o;
var G__26102 = p;
var G__26103 = q;
var G__26104 = r;
var G__26105 = s;
var G__26106 = t;
var G__26107 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__26086,G__26087,G__26088,G__26089,G__26090,G__26091,G__26092,G__26093,G__26094,G__26095,G__26096,G__26097,G__26098,G__26099,G__26100,G__26101,G__26102,G__26103,G__26104,G__26105,G__26106,G__26107) : cljs.core.apply.call(null,G__26086,G__26087,G__26088,G__26089,G__26090,G__26091,G__26092,G__26093,G__26094,G__26095,G__26096,G__26097,G__26098,G__26099,G__26100,G__26101,G__26102,G__26103,G__26104,G__26105,G__26106,G__26107));
});
G__26340 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__26340__1.call(this,self__);
case 2:
return G__26340__2.call(this,self__,a);
case 3:
return G__26340__3.call(this,self__,a,b);
case 4:
return G__26340__4.call(this,self__,a,b,c);
case 5:
return G__26340__5.call(this,self__,a,b,c,d);
case 6:
return G__26340__6.call(this,self__,a,b,c,d,e);
case 7:
return G__26340__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__26340__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__26340__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__26340__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__26340__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__26340__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__26340__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__26340__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__26340__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__26340__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__26340__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__26340__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__26340__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__26340__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__26340__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__26340__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26340.cljs$core$IFn$_invoke$arity$1 = G__26340__1;
G__26340.cljs$core$IFn$_invoke$arity$2 = G__26340__2;
G__26340.cljs$core$IFn$_invoke$arity$3 = G__26340__3;
G__26340.cljs$core$IFn$_invoke$arity$4 = G__26340__4;
G__26340.cljs$core$IFn$_invoke$arity$5 = G__26340__5;
G__26340.cljs$core$IFn$_invoke$arity$6 = G__26340__6;
G__26340.cljs$core$IFn$_invoke$arity$7 = G__26340__7;
G__26340.cljs$core$IFn$_invoke$arity$8 = G__26340__8;
G__26340.cljs$core$IFn$_invoke$arity$9 = G__26340__9;
G__26340.cljs$core$IFn$_invoke$arity$10 = G__26340__10;
G__26340.cljs$core$IFn$_invoke$arity$11 = G__26340__11;
G__26340.cljs$core$IFn$_invoke$arity$12 = G__26340__12;
G__26340.cljs$core$IFn$_invoke$arity$13 = G__26340__13;
G__26340.cljs$core$IFn$_invoke$arity$14 = G__26340__14;
G__26340.cljs$core$IFn$_invoke$arity$15 = G__26340__15;
G__26340.cljs$core$IFn$_invoke$arity$16 = G__26340__16;
G__26340.cljs$core$IFn$_invoke$arity$17 = G__26340__17;
G__26340.cljs$core$IFn$_invoke$arity$18 = G__26340__18;
G__26340.cljs$core$IFn$_invoke$arity$19 = G__26340__19;
G__26340.cljs$core$IFn$_invoke$arity$20 = G__26340__20;
G__26340.cljs$core$IFn$_invoke$arity$21 = G__26340__21;
G__26340.cljs$core$IFn$_invoke$arity$22 = G__26340__22;
return G__26340;
})()
;

cljs.core.MetaFn.prototype.apply = (function (self__,args25875){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25875)));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
var G__26108 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__26108) : self__.afn.call(null,G__26108));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
var G__26109 = a;
var G__26110 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__26109,G__26110) : self__.afn.call(null,G__26109,G__26110));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
var G__26111 = a;
var G__26112 = b;
var G__26113 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__26111,G__26112,G__26113) : self__.afn.call(null,G__26111,G__26112,G__26113));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
var G__26114 = a;
var G__26115 = b;
var G__26116 = c;
var G__26117 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__26114,G__26115,G__26116,G__26117) : self__.afn.call(null,G__26114,G__26115,G__26116,G__26117));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
var G__26118 = a;
var G__26119 = b;
var G__26120 = c;
var G__26121 = d;
var G__26122 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__26118,G__26119,G__26120,G__26121,G__26122) : self__.afn.call(null,G__26118,G__26119,G__26120,G__26121,G__26122));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
var G__26123 = a;
var G__26124 = b;
var G__26125 = c;
var G__26126 = d;
var G__26127 = e;
var G__26128 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__26123,G__26124,G__26125,G__26126,G__26127,G__26128) : self__.afn.call(null,G__26123,G__26124,G__26125,G__26126,G__26127,G__26128));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
var G__26129 = a;
var G__26130 = b;
var G__26131 = c;
var G__26132 = d;
var G__26133 = e;
var G__26134 = f;
var G__26135 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__26129,G__26130,G__26131,G__26132,G__26133,G__26134,G__26135) : self__.afn.call(null,G__26129,G__26130,G__26131,G__26132,G__26133,G__26134,G__26135));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
var G__26136 = a;
var G__26137 = b;
var G__26138 = c;
var G__26139 = d;
var G__26140 = e;
var G__26141 = f;
var G__26142 = g;
var G__26143 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__26136,G__26137,G__26138,G__26139,G__26140,G__26141,G__26142,G__26143) : self__.afn.call(null,G__26136,G__26137,G__26138,G__26139,G__26140,G__26141,G__26142,G__26143));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
var G__26144 = a;
var G__26145 = b;
var G__26146 = c;
var G__26147 = d;
var G__26148 = e;
var G__26149 = f;
var G__26150 = g;
var G__26151 = h;
var G__26152 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__26144,G__26145,G__26146,G__26147,G__26148,G__26149,G__26150,G__26151,G__26152) : self__.afn.call(null,G__26144,G__26145,G__26146,G__26147,G__26148,G__26149,G__26150,G__26151,G__26152));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
var G__26153 = a;
var G__26154 = b;
var G__26155 = c;
var G__26156 = d;
var G__26157 = e;
var G__26158 = f;
var G__26159 = g;
var G__26160 = h;
var G__26161 = i;
var G__26162 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__26153,G__26154,G__26155,G__26156,G__26157,G__26158,G__26159,G__26160,G__26161,G__26162) : self__.afn.call(null,G__26153,G__26154,G__26155,G__26156,G__26157,G__26158,G__26159,G__26160,G__26161,G__26162));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
var G__26163 = a;
var G__26164 = b;
var G__26165 = c;
var G__26166 = d;
var G__26167 = e;
var G__26168 = f;
var G__26169 = g;
var G__26170 = h;
var G__26171 = i;
var G__26172 = j;
var G__26173 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__26163,G__26164,G__26165,G__26166,G__26167,G__26168,G__26169,G__26170,G__26171,G__26172,G__26173) : self__.afn.call(null,G__26163,G__26164,G__26165,G__26166,G__26167,G__26168,G__26169,G__26170,G__26171,G__26172,G__26173));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
var G__26174 = a;
var G__26175 = b;
var G__26176 = c;
var G__26177 = d;
var G__26178 = e;
var G__26179 = f;
var G__26180 = g;
var G__26181 = h;
var G__26182 = i;
var G__26183 = j;
var G__26184 = k;
var G__26185 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__26174,G__26175,G__26176,G__26177,G__26178,G__26179,G__26180,G__26181,G__26182,G__26183,G__26184,G__26185) : self__.afn.call(null,G__26174,G__26175,G__26176,G__26177,G__26178,G__26179,G__26180,G__26181,G__26182,G__26183,G__26184,G__26185));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
var G__26186 = a;
var G__26187 = b;
var G__26188 = c;
var G__26189 = d;
var G__26190 = e;
var G__26191 = f;
var G__26192 = g;
var G__26193 = h;
var G__26194 = i;
var G__26195 = j;
var G__26196 = k;
var G__26197 = l;
var G__26198 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__26186,G__26187,G__26188,G__26189,G__26190,G__26191,G__26192,G__26193,G__26194,G__26195,G__26196,G__26197,G__26198) : self__.afn.call(null,G__26186,G__26187,G__26188,G__26189,G__26190,G__26191,G__26192,G__26193,G__26194,G__26195,G__26196,G__26197,G__26198));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
var G__26199 = a;
var G__26200 = b;
var G__26201 = c;
var G__26202 = d;
var G__26203 = e;
var G__26204 = f;
var G__26205 = g;
var G__26206 = h;
var G__26207 = i;
var G__26208 = j;
var G__26209 = k;
var G__26210 = l;
var G__26211 = m;
var G__26212 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__26199,G__26200,G__26201,G__26202,G__26203,G__26204,G__26205,G__26206,G__26207,G__26208,G__26209,G__26210,G__26211,G__26212) : self__.afn.call(null,G__26199,G__26200,G__26201,G__26202,G__26203,G__26204,G__26205,G__26206,G__26207,G__26208,G__26209,G__26210,G__26211,G__26212));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
var G__26213 = a;
var G__26214 = b;
var G__26215 = c;
var G__26216 = d;
var G__26217 = e;
var G__26218 = f;
var G__26219 = g;
var G__26220 = h;
var G__26221 = i;
var G__26222 = j;
var G__26223 = k;
var G__26224 = l;
var G__26225 = m;
var G__26226 = n;
var G__26227 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__26213,G__26214,G__26215,G__26216,G__26217,G__26218,G__26219,G__26220,G__26221,G__26222,G__26223,G__26224,G__26225,G__26226,G__26227) : self__.afn.call(null,G__26213,G__26214,G__26215,G__26216,G__26217,G__26218,G__26219,G__26220,G__26221,G__26222,G__26223,G__26224,G__26225,G__26226,G__26227));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
var G__26228 = a;
var G__26229 = b;
var G__26230 = c;
var G__26231 = d;
var G__26232 = e;
var G__26233 = f;
var G__26234 = g;
var G__26235 = h;
var G__26236 = i;
var G__26237 = j;
var G__26238 = k;
var G__26239 = l;
var G__26240 = m;
var G__26241 = n;
var G__26242 = o;
var G__26243 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__26228,G__26229,G__26230,G__26231,G__26232,G__26233,G__26234,G__26235,G__26236,G__26237,G__26238,G__26239,G__26240,G__26241,G__26242,G__26243) : self__.afn.call(null,G__26228,G__26229,G__26230,G__26231,G__26232,G__26233,G__26234,G__26235,G__26236,G__26237,G__26238,G__26239,G__26240,G__26241,G__26242,G__26243));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
var G__26244 = a;
var G__26245 = b;
var G__26246 = c;
var G__26247 = d;
var G__26248 = e;
var G__26249 = f;
var G__26250 = g;
var G__26251 = h;
var G__26252 = i;
var G__26253 = j;
var G__26254 = k;
var G__26255 = l;
var G__26256 = m;
var G__26257 = n;
var G__26258 = o;
var G__26259 = p;
var G__26260 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__26244,G__26245,G__26246,G__26247,G__26248,G__26249,G__26250,G__26251,G__26252,G__26253,G__26254,G__26255,G__26256,G__26257,G__26258,G__26259,G__26260) : self__.afn.call(null,G__26244,G__26245,G__26246,G__26247,G__26248,G__26249,G__26250,G__26251,G__26252,G__26253,G__26254,G__26255,G__26256,G__26257,G__26258,G__26259,G__26260));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
var G__26261 = a;
var G__26262 = b;
var G__26263 = c;
var G__26264 = d;
var G__26265 = e;
var G__26266 = f;
var G__26267 = g;
var G__26268 = h;
var G__26269 = i;
var G__26270 = j;
var G__26271 = k;
var G__26272 = l;
var G__26273 = m;
var G__26274 = n;
var G__26275 = o;
var G__26276 = p;
var G__26277 = q;
var G__26278 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__26261,G__26262,G__26263,G__26264,G__26265,G__26266,G__26267,G__26268,G__26269,G__26270,G__26271,G__26272,G__26273,G__26274,G__26275,G__26276,G__26277,G__26278) : self__.afn.call(null,G__26261,G__26262,G__26263,G__26264,G__26265,G__26266,G__26267,G__26268,G__26269,G__26270,G__26271,G__26272,G__26273,G__26274,G__26275,G__26276,G__26277,G__26278));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
var G__26279 = a;
var G__26280 = b;
var G__26281 = c;
var G__26282 = d;
var G__26283 = e;
var G__26284 = f;
var G__26285 = g;
var G__26286 = h;
var G__26287 = i;
var G__26288 = j;
var G__26289 = k;
var G__26290 = l;
var G__26291 = m;
var G__26292 = n;
var G__26293 = o;
var G__26294 = p;
var G__26295 = q;
var G__26296 = r;
var G__26297 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__26279,G__26280,G__26281,G__26282,G__26283,G__26284,G__26285,G__26286,G__26287,G__26288,G__26289,G__26290,G__26291,G__26292,G__26293,G__26294,G__26295,G__26296,G__26297) : self__.afn.call(null,G__26279,G__26280,G__26281,G__26282,G__26283,G__26284,G__26285,G__26286,G__26287,G__26288,G__26289,G__26290,G__26291,G__26292,G__26293,G__26294,G__26295,G__26296,G__26297));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
var G__26298 = a;
var G__26299 = b;
var G__26300 = c;
var G__26301 = d;
var G__26302 = e;
var G__26303 = f;
var G__26304 = g;
var G__26305 = h;
var G__26306 = i;
var G__26307 = j;
var G__26308 = k;
var G__26309 = l;
var G__26310 = m;
var G__26311 = n;
var G__26312 = o;
var G__26313 = p;
var G__26314 = q;
var G__26315 = r;
var G__26316 = s;
var G__26317 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__26298,G__26299,G__26300,G__26301,G__26302,G__26303,G__26304,G__26305,G__26306,G__26307,G__26308,G__26309,G__26310,G__26311,G__26312,G__26313,G__26314,G__26315,G__26316,G__26317) : self__.afn.call(null,G__26298,G__26299,G__26300,G__26301,G__26302,G__26303,G__26304,G__26305,G__26306,G__26307,G__26308,G__26309,G__26310,G__26311,G__26312,G__26313,G__26314,G__26315,G__26316,G__26317));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
var G__26318 = self__.afn;
var G__26319 = a;
var G__26320 = b;
var G__26321 = c;
var G__26322 = d;
var G__26323 = e;
var G__26324 = f;
var G__26325 = g;
var G__26326 = h;
var G__26327 = i;
var G__26328 = j;
var G__26329 = k;
var G__26330 = l;
var G__26331 = m;
var G__26332 = n;
var G__26333 = o;
var G__26334 = p;
var G__26335 = q;
var G__26336 = r;
var G__26337 = s;
var G__26338 = t;
var G__26339 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__26318,G__26319,G__26320,G__26321,G__26322,G__26323,G__26324,G__26325,G__26326,G__26327,G__26328,G__26329,G__26330,G__26331,G__26332,G__26333,G__26334,G__26335,G__26336,G__26337,G__26338,G__26339) : cljs.core.apply.call(null,G__26318,G__26319,G__26320,G__26321,G__26322,G__26323,G__26324,G__26325,G__26326,G__26327,G__26328,G__26329,G__26330,G__26331,G__26332,G__26333,G__26334,G__26335,G__26336,G__26337,G__26338,G__26339));
});

cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;

cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.MetaFn(self__.afn,new_meta));
});

cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.MetaFn.cljs$lang$type = true;

cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";

cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/MetaFn");
});

cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){
return (new cljs.core.MetaFn(afn,meta));
});

/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__26344 = o;
if(G__26344){
var bit__4402__auto__ = (G__26344.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4402__auto__) || (G__26344.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__26344.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__26344);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__26344);
}
})()))){
return (new cljs.core.MetaFn(o,meta));
} else {
if((o == null)){
return null;
} else {
return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var and__3709__auto__ = !((o == null));
if(and__3709__auto__){
var G__26348 = o;
if(G__26348){
var bit__4402__auto__ = (G__26348.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4402__auto__) || (G__26348.cljs$core$IMeta$)){
return true;
} else {
if((!G__26348.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__26348);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__26348);
}
} else {
return and__3709__auto__;
}
})()){
return cljs.core._meta(o);
} else {
return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
if((coll == null)){
return null;
} else {
return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
if((coll == null)){
return null;
} else {
return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__26351__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__26352 = ret;
var G__26353 = cljs.core.first(ks);
var G__26354 = cljs.core.next(ks);
coll = G__26352;
k = G__26353;
ks = G__26354;
continue;
} else {
return ret;
}
}
break;
}
};
var G__26351 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26351__delegate.call(this,coll,k,ks);};
G__26351.cljs$lang$maxFixedArity = 2;
G__26351.cljs$lang$applyTo = (function (arglist__26355){
var coll = cljs.core.first(arglist__26355);
arglist__26355 = cljs.core.next(arglist__26355);
var k = cljs.core.first(arglist__26355);
var ks = cljs.core.rest(arglist__26355);
return G__26351__delegate(coll,k,ks);
});
G__26351.cljs$core$IFn$_invoke$arity$variadic = G__26351__delegate;
return G__26351;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null)){
return false;
} else {
var G__26357 = x;
if(G__26357){
var bit__4402__auto__ = (G__26357.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__4402__auto__) || (G__26357.cljs$core$ICollection$)){
return true;
} else {
if((!G__26357.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__26357);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__26357);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null)){
return false;
} else {
var G__26359 = x;
if(G__26359){
var bit__4402__auto__ = (G__26359.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__4402__auto__) || (G__26359.cljs$core$ISet$)){
return true;
} else {
if((!G__26359.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__26359);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__26359);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__26361 = x;
if(G__26361){
var bit__4402__auto__ = (G__26361.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__4402__auto__) || (G__26361.cljs$core$IAssociative$)){
return true;
} else {
if((!G__26361.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__26361);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__26361);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__26363 = x;
if(G__26363){
var bit__4402__auto__ = (G__26363.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__4402__auto__) || (G__26363.cljs$core$ISequential$)){
return true;
} else {
if((!G__26363.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__26363);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__26363);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){
var G__26365 = x;
if(G__26365){
var bit__4402__auto__ = (G__26365.cljs$lang$protocol_mask$partition0$ & (268435456));
if((bit__4402__auto__) || (G__26365.cljs$core$ISorted$)){
return true;
} else {
if((!G__26365.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__26365);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__26365);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__26367 = x;
if(G__26367){
var bit__4402__auto__ = (G__26367.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4402__auto__) || (G__26367.cljs$core$IReduce$)){
return true;
} else {
if((!G__26367.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__26367);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__26367);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null)){
return false;
} else {
var G__26369 = x;
if(G__26369){
var bit__4402__auto__ = (G__26369.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4402__auto__) || (G__26369.cljs$core$IMap$)){
return true;
} else {
if((!G__26369.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__26369);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__26369);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__26371 = x;
if(G__26371){
var bit__4402__auto__ = (G__26371.cljs$lang$protocol_mask$partition0$ & (16384));
if((bit__4402__auto__) || (G__26371.cljs$core$IVector$)){
return true;
} else {
if((!G__26371.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__26371);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__26371);
}
});

cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__26373 = x;
if(G__26373){
var bit__4395__auto__ = (G__26373.cljs$lang$protocol_mask$partition1$ & (512));
if((bit__4395__auto__) || (G__26373.cljs$core$IChunkedSeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
var obj26379 = {};
return obj26379;
});
var js_obj__1 = (function() { 
var G__26382__delegate = function (keyvals){
var G__26380 = goog.object.create;
var G__26381 = keyvals;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__26380,G__26381) : cljs.core.apply.call(null,G__26380,G__26381));
};
var G__26382 = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26382__delegate.call(this,keyvals);};
G__26382.cljs$lang$maxFixedArity = 0;
G__26382.cljs$lang$applyTo = (function (arglist__26383){
var keyvals = cljs.core.seq(arglist__26383);
return G__26382__delegate(keyvals);
});
G__26382.cljs$core$IFn$_invoke$arity$variadic = G__26382__delegate;
return G__26382;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
var G__26386_26388 = obj;
var G__26387_26389 = ((function (G__26386_26388,keys){
return (function (val,key,obj__$1){
return keys.push(key);
});})(G__26386_26388,keys))
;
goog.object.forEach(G__26386_26388,G__26387_26389);

return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__26390 = (i__$1 + (1));
var G__26391 = (j__$1 + (1));
var G__26392 = (len__$1 - (1));
i__$1 = G__26390;
j__$1 = G__26391;
len__$1 = G__26392;
continue;
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - (1)));
var j__$1 = (j + (len - (1)));
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__26393 = (i__$1 - (1));
var G__26394 = (j__$1 - (1));
var G__26395 = (len__$1 - (1));
i__$1 = G__26393;
j__$1 = G__26394;
len__$1 = G__26395;
continue;
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj26397 = {};
return obj26397;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null)){
return false;
} else {
var G__26399 = s;
if(G__26399){
var bit__4402__auto__ = (G__26399.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4402__auto__) || (G__26399.cljs$core$ISeq$)){
return true;
} else {
if((!G__26399.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__26399);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__26399);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__26401 = s;
if(G__26401){
var bit__4402__auto__ = (G__26401.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4402__auto__) || (G__26401.cljs$core$ISeqable$)){
return true;
} else {
if((!G__26401.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26401);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26401);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x)){
return true;
} else {
return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3721__auto__ = cljs.core.fn_QMARK_(f);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var G__26405 = f;
if(G__26405){
var bit__4402__auto__ = (G__26405.cljs$lang$protocol_mask$partition0$ & (1));
if((bit__4402__auto__) || (G__26405.cljs$core$IFn$)){
return true;
} else {
if((!G__26405.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__26405);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__26405);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
return (typeof n === 'number') && (cljs.core.not((function (){var G__26418 = n;
return isNaN(G__26418);
})())) && (!((n === Infinity))) && (((function (){var G__26419 = n;
return parseFloat(G__26419);
})() === (function (){var G__26420 = n;
var G__26421 = (10);
return parseInt(G__26420,G__26421);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return false;
} else {
return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else {
return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__26422__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))){
var s = cljs.core.PersistentHashSet.fromArray([x,y], true);
var xs = more;
while(true){
var x__$1 = cljs.core.first(xs);
var etc = cljs.core.next(xs);
if(cljs.core.truth_(xs)){
if(cljs.core.contains_QMARK_(s,x__$1)){
return false;
} else {
var G__26423 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__26424 = etc;
s = G__26423;
xs = G__26424;
continue;
}
} else {
return true;
}
break;
}
} else {
return false;
}
};
var G__26422 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26422__delegate.call(this,x,y,more);};
G__26422.cljs$lang$maxFixedArity = 2;
G__26422.cljs$lang$applyTo = (function (arglist__26425){
var x = cljs.core.first(arglist__26425);
arglist__26425 = cljs.core.next(arglist__26425);
var y = cljs.core.first(arglist__26425);
var more = cljs.core.rest(arglist__26425);
return G__26422__delegate(x,y,more);
});
G__26422.cljs$core$IFn$_invoke$arity$variadic = G__26422__delegate;
return G__26422;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if((cljs.core.type(x) === cljs.core.type(y))){
if((function (){var G__26429 = x;
if(G__26429){
var bit__4395__auto__ = (G__26429.cljs$lang$protocol_mask$partition1$ & (2048));
if((bit__4395__auto__) || (G__26429.cljs$core$IComparable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else {
var G__26430 = x;
var G__26431 = y;
return goog.array.defaultCompare(G__26430,G__26431);
}
} else {
throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count(xs);
var yl = cljs.core.count(ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));
if(((d === (0))) && (((n + (1)) < len))){
var G__26436 = xs;
var G__26437 = ys;
var G__26438 = len;
var G__26439 = (n + (1));
xs = G__26436;
ys = G__26437;
len = G__26438;
n = G__26439;
continue;
} else {
return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare)){
return cljs.core.compare;
} else {
return (function (x,y){
var r = (function (){var G__26444 = x;
var G__26445 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26444,G__26445) : f.call(null,G__26444,G__26445));
})();
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__26446 = y;
var G__26447 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26446,G__26447) : f.call(null,G__26446,G__26447));
})())){
return (1);
} else {
return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison function, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll)){
var a = (function (){var G__26453 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__26453) : cljs.core.to_array.call(null,G__26453));
})();
var G__26454_26456 = a;
var G__26455_26457 = cljs.core.fn__GT_comparator(comp);
goog.array.stableSort(G__26454_26456,G__26455_26457);

return cljs.core.seq(a);
} else {
return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__26463 = x;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__26463) : keyfn.call(null,G__26463));
})(),(function (){var G__26464 = y;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__26464) : keyfn.call(null,G__26464));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
var G__26470 = f;
var G__26471 = cljs.core.first(s);
var G__26472 = cljs.core.next(s);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__26470,G__26471,G__26472) : cljs.core.reduce.call(null,G__26470,G__26471,G__26472));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var nval = (function (){var G__26473 = val__$1;
var G__26474 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26473,G__26474) : f.call(null,G__26473,G__26474));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__26475 = nval;
var G__26476 = cljs.core.next(coll__$1);
val__$1 = G__26475;
coll__$1 = G__26476;
continue;
}
} else {
return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = (function (){var G__26480 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__26480) : cljs.core.to_array.call(null,G__26480));
})();
var G__26481_26483 = a;
goog.array.shuffle(G__26481_26483);

var G__26482 = a;
return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__26482) : cljs.core.vec.call(null,G__26482));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__26486 = coll;
if(G__26486){
var bit__4395__auto__ = (G__26486.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4395__auto__) || (G__26486.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__26487 = coll;
if(G__26487){
var bit__4395__auto__ = (G__26487.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4395__auto__) || (G__26487.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
if(!((coll == null))){
return cljs.core._kv_reduce(coll,f,init);
} else {
return init;
}
});
cljs.core.identity = (function identity(x){
return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){
return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){
return (function() {
var G__26496 = null;
var G__26496__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__26496__1 = (function (x){
var G__26493 = x;
return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__26493) : cf.call(null,G__26493));
});
var G__26496__2 = (function (x,y){
var G__26494 = x;
var G__26495 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26494,G__26495) : f.call(null,G__26494,G__26495));
});
G__26496 = function(x,y){
switch(arguments.length){
case 0:
return G__26496__0.call(this);
case 1:
return G__26496__1.call(this,x);
case 2:
return G__26496__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26496.cljs$core$IFn$_invoke$arity$0 = G__26496__0;
G__26496.cljs$core$IFn$_invoke$arity$1 = G__26496__1;
G__26496.cljs$core$IFn$_invoke$arity$2 = G__26496__2;
return G__26496;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){
return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){
var f__$1 = (function (){var G__26503 = f;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__26503) : xform.call(null,G__26503));
})();
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);
var G__26504 = ret;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__26504) : f__$1.call(null,G__26504));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return (0);
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__26505__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__26505 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26505__delegate.call(this,x,y,more);};
G__26505.cljs$lang$maxFixedArity = 2;
G__26505.cljs$lang$applyTo = (function (arglist__26506){
var x = cljs.core.first(arglist__26506);
arglist__26506 = cljs.core.next(arglist__26506);
var y = cljs.core.first(arglist__26506);
var more = cljs.core.rest(arglist__26506);
return G__26505__delegate(x,y,more);
});
G__26505.cljs$core$IFn$_invoke$arity$variadic = G__26505__delegate;
return G__26505;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__26507__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__26507 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26507__delegate.call(this,x,y,more);};
G__26507.cljs$lang$maxFixedArity = 2;
G__26507.cljs$lang$applyTo = (function (arglist__26508){
var x = cljs.core.first(arglist__26508);
arglist__26508 = cljs.core.next(arglist__26508);
var y = cljs.core.first(arglist__26508);
var more = cljs.core.rest(arglist__26508);
return G__26507__delegate(x,y,more);
});
G__26507.cljs$core$IFn$_invoke$arity$variadic = G__26507__delegate;
return G__26507;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return (1);
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__26509__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__26509 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26509__delegate.call(this,x,y,more);};
G__26509.cljs$lang$maxFixedArity = 2;
G__26509.cljs$lang$applyTo = (function (arglist__26510){
var x = cljs.core.first(arglist__26510);
arglist__26510 = cljs.core.next(arglist__26510);
var y = cljs.core.first(arglist__26510);
var more = cljs.core.rest(arglist__26510);
return G__26509__delegate(x,y,more);
});
G__26509.cljs$core$IFn$_invoke$arity$variadic = G__26509__delegate;
return G__26509;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__26515__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__26515 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26515__delegate.call(this,x,y,more);};
G__26515.cljs$lang$maxFixedArity = 2;
G__26515.cljs$lang$applyTo = (function (arglist__26516){
var x = cljs.core.first(arglist__26516);
arglist__26516 = cljs.core.next(arglist__26516);
var y = cljs.core.first(arglist__26516);
var more = cljs.core.rest(arglist__26516);
return G__26515__delegate(x,y,more);
});
G__26515.cljs$core$IFn$_invoke$arity$variadic = G__26515__delegate;
return G__26515;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__26517__delegate = function (x,y,more){
while(true){
if((x < y)){
if(cljs.core.next(more)){
var G__26518 = y;
var G__26519 = cljs.core.first(more);
var G__26520 = cljs.core.next(more);
x = G__26518;
y = G__26519;
more = G__26520;
continue;
} else {
return (y < cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__26517 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26517__delegate.call(this,x,y,more);};
G__26517.cljs$lang$maxFixedArity = 2;
G__26517.cljs$lang$applyTo = (function (arglist__26521){
var x = cljs.core.first(arglist__26521);
arglist__26521 = cljs.core.next(arglist__26521);
var y = cljs.core.first(arglist__26521);
var more = cljs.core.rest(arglist__26521);
return G__26517__delegate(x,y,more);
});
G__26517.cljs$core$IFn$_invoke$arity$variadic = G__26517__delegate;
return G__26517;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__26522__delegate = function (x,y,more){
while(true){
if((x <= y)){
if(cljs.core.next(more)){
var G__26523 = y;
var G__26524 = cljs.core.first(more);
var G__26525 = cljs.core.next(more);
x = G__26523;
y = G__26524;
more = G__26525;
continue;
} else {
return (y <= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__26522 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26522__delegate.call(this,x,y,more);};
G__26522.cljs$lang$maxFixedArity = 2;
G__26522.cljs$lang$applyTo = (function (arglist__26526){
var x = cljs.core.first(arglist__26526);
arglist__26526 = cljs.core.next(arglist__26526);
var y = cljs.core.first(arglist__26526);
var more = cljs.core.rest(arglist__26526);
return G__26522__delegate(x,y,more);
});
G__26522.cljs$core$IFn$_invoke$arity$variadic = G__26522__delegate;
return G__26522;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__26527__delegate = function (x,y,more){
while(true){
if((x > y)){
if(cljs.core.next(more)){
var G__26528 = y;
var G__26529 = cljs.core.first(more);
var G__26530 = cljs.core.next(more);
x = G__26528;
y = G__26529;
more = G__26530;
continue;
} else {
return (y > cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__26527 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26527__delegate.call(this,x,y,more);};
G__26527.cljs$lang$maxFixedArity = 2;
G__26527.cljs$lang$applyTo = (function (arglist__26531){
var x = cljs.core.first(arglist__26531);
arglist__26531 = cljs.core.next(arglist__26531);
var y = cljs.core.first(arglist__26531);
var more = cljs.core.rest(arglist__26531);
return G__26527__delegate(x,y,more);
});
G__26527.cljs$core$IFn$_invoke$arity$variadic = G__26527__delegate;
return G__26527;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__26532__delegate = function (x,y,more){
while(true){
if((x >= y)){
if(cljs.core.next(more)){
var G__26533 = y;
var G__26534 = cljs.core.first(more);
var G__26535 = cljs.core.next(more);
x = G__26533;
y = G__26534;
more = G__26535;
continue;
} else {
return (y >= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__26532 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26532__delegate.call(this,x,y,more);};
G__26532.cljs$lang$maxFixedArity = 2;
G__26532.cljs$lang$applyTo = (function (arglist__26536){
var x = cljs.core.first(arglist__26536);
arglist__26536 = cljs.core.next(arglist__26536);
var y = cljs.core.first(arglist__26536);
var more = cljs.core.rest(arglist__26536);
return G__26532__delegate(x,y,more);
});
G__26532.cljs$core$IFn$_invoke$arity$variadic = G__26532__delegate;
return G__26532;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
var x__4038__auto__ = x;
var y__4039__auto__ = y;
return ((x__4038__auto__ > y__4039__auto__) ? x__4038__auto__ : y__4039__auto__);
});
var max__3 = (function() { 
var G__26537__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__4038__auto__ = x;
var y__4039__auto__ = y;
return ((x__4038__auto__ > y__4039__auto__) ? x__4038__auto__ : y__4039__auto__);
})(),more);
};
var G__26537 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26537__delegate.call(this,x,y,more);};
G__26537.cljs$lang$maxFixedArity = 2;
G__26537.cljs$lang$applyTo = (function (arglist__26538){
var x = cljs.core.first(arglist__26538);
arglist__26538 = cljs.core.next(arglist__26538);
var y = cljs.core.first(arglist__26538);
var more = cljs.core.rest(arglist__26538);
return G__26537__delegate(x,y,more);
});
G__26537.cljs$core$IFn$_invoke$arity$variadic = G__26537__delegate;
return G__26537;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
var x__4045__auto__ = x;
var y__4046__auto__ = y;
return ((x__4045__auto__ < y__4046__auto__) ? x__4045__auto__ : y__4046__auto__);
});
var min__3 = (function() { 
var G__26539__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__4045__auto__ = x;
var y__4046__auto__ = y;
return ((x__4045__auto__ < y__4046__auto__) ? x__4045__auto__ : y__4046__auto__);
})(),more);
};
var G__26539 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26539__delegate.call(this,x,y,more);};
G__26539.cljs$lang$maxFixedArity = 2;
G__26539.cljs$lang$applyTo = (function (arglist__26540){
var x = cljs.core.first(arglist__26540);
arglist__26540 = cljs.core.next(arglist__26540);
var y = cljs.core.first(arglist__26540);
var more = cljs.core.rest(arglist__26540);
return G__26539__delegate(x,y,more);
});
G__26539.cljs$core$IFn$_invoke$arity$variadic = G__26539__delegate;
return G__26539;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){
return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){
if(typeof x === 'number'){
return String.fromCharCode(x);
} else {
if((typeof x === 'string') && ((x.length === (1)))){
return x;
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){
return x;
});
cljs.core.float$ = (function float$(x){
return x;
});
cljs.core.double$ = (function double$(x){
return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){
return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){
return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){
return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){
return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){
return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){
return (0);
});
var unchecked_add__1 = (function (x){
return x;
});
var unchecked_add__2 = (function (x,y){
return (x + y);
});
var unchecked_add__3 = (function() { 
var G__26541__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__26541 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26541__delegate.call(this,x,y,more);};
G__26541.cljs$lang$maxFixedArity = 2;
G__26541.cljs$lang$applyTo = (function (arglist__26542){
var x = cljs.core.first(arglist__26542);
arglist__26542 = cljs.core.next(arglist__26542);
var y = cljs.core.first(arglist__26542);
var more = cljs.core.rest(arglist__26542);
return G__26541__delegate(x,y,more);
});
G__26541.cljs$core$IFn$_invoke$arity$variadic = G__26541__delegate;
return G__26541;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){
return (0);
});
var unchecked_add_int__1 = (function (x){
return x;
});
var unchecked_add_int__2 = (function (x,y){
return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__26543__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__26543 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26543__delegate.call(this,x,y,more);};
G__26543.cljs$lang$maxFixedArity = 2;
G__26543.cljs$lang$applyTo = (function (arglist__26544){
var x = cljs.core.first(arglist__26544);
arglist__26544 = cljs.core.next(arglist__26544);
var y = cljs.core.first(arglist__26544);
var more = cljs.core.rest(arglist__26544);
return G__26543__delegate(x,y,more);
});
G__26543.cljs$core$IFn$_invoke$arity$variadic = G__26543__delegate;
return G__26543;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){
return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){
return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){
return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){
return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__26549__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__26549 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26549__delegate.call(this,x,y,more);};
G__26549.cljs$lang$maxFixedArity = 2;
G__26549.cljs$lang$applyTo = (function (arglist__26550){
var x = cljs.core.first(arglist__26550);
arglist__26550 = cljs.core.next(arglist__26550);
var y = cljs.core.first(arglist__26550);
var more = cljs.core.rest(arglist__26550);
return G__26549__delegate(x,y,more);
});
G__26549.cljs$core$IFn$_invoke$arity$variadic = G__26549__delegate;
return G__26549;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){
return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){
return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){
return (1);
});
var unchecked_multiply__1 = (function (x){
return x;
});
var unchecked_multiply__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__26551__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__26551 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26551__delegate.call(this,x,y,more);};
G__26551.cljs$lang$maxFixedArity = 2;
G__26551.cljs$lang$applyTo = (function (arglist__26552){
var x = cljs.core.first(arglist__26552);
arglist__26552 = cljs.core.next(arglist__26552);
var y = cljs.core.first(arglist__26552);
var more = cljs.core.rest(arglist__26552);
return G__26551__delegate(x,y,more);
});
G__26551.cljs$core$IFn$_invoke$arity$variadic = G__26551__delegate;
return G__26551;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){
return (1);
});
var unchecked_multiply_int__1 = (function (x){
return x;
});
var unchecked_multiply_int__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__26553__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__26553 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26553__delegate.call(this,x,y,more);};
G__26553.cljs$lang$maxFixedArity = 2;
G__26553.cljs$lang$applyTo = (function (arglist__26554){
var x = cljs.core.first(arglist__26554);
arglist__26554 = cljs.core.next(arglist__26554);
var y = cljs.core.first(arglist__26554);
var more = cljs.core.rest(arglist__26554);
return G__26553__delegate(x,y,more);
});
G__26553.cljs$core$IFn$_invoke$arity$variadic = G__26553__delegate;
return G__26553;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){
return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){
return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){
var G__26557 = x;
var G__26558 = n;
return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__26557,G__26558) : cljs.core.mod.call(null,G__26557,G__26558));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){
return (- x);
});
var unchecked_subtract__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__26559__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__26559 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26559__delegate.call(this,x,y,more);};
G__26559.cljs$lang$maxFixedArity = 2;
G__26559.cljs$lang$applyTo = (function (arglist__26560){
var x = cljs.core.first(arglist__26560);
arglist__26560 = cljs.core.next(arglist__26560);
var y = cljs.core.first(arglist__26560);
var more = cljs.core.rest(arglist__26560);
return G__26559__delegate(x,y,more);
});
G__26559.cljs$core$IFn$_invoke$arity$variadic = G__26559__delegate;
return G__26559;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){
return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__26561__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__26561 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26561__delegate.call(this,x,y,more);};
G__26561.cljs$lang$maxFixedArity = 2;
G__26561.cljs$lang$applyTo = (function (arglist__26562){
var x = cljs.core.first(arglist__26562);
arglist__26562 = cljs.core.next(arglist__26562);
var y = cljs.core.first(arglist__26562);
var more = cljs.core.rest(arglist__26562);
return G__26561__delegate(x,y,more);
});
G__26561.cljs$core$IFn$_invoke$arity$variadic = G__26561__delegate;
return G__26561;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){
if((q >= (0))){
var G__26565 = q;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__26565) : Math.floor.call(null,G__26565));
} else {
var G__26566 = q;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__26566) : Math.ceil.call(null,G__26566));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){
return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){
return x;
});
cljs.core.bytes = (function bytes(x){
return x;
});
cljs.core.chars = (function chars(x){
return x;
});
cljs.core.shorts = (function shorts(x){
return x;
});
cljs.core.ints = (function ints(x){
return x;
});
cljs.core.floats = (function floats(x){
return x;
});
cljs.core.doubles = (function doubles(x){
return x;
});
cljs.core.longs = (function longs(x){
return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){
return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot(n,d);
return (n - (d * q));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> (1)) & (1431655765)));
var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));
return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__26571__delegate = function (x,y,more){
while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__26572 = y;
var G__26573 = cljs.core.first(more);
var G__26574 = cljs.core.next(more);
x = G__26572;
y = G__26573;
more = G__26574;
continue;
} else {
return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__26571 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26571__delegate.call(this,x,y,more);};
G__26571.cljs$lang$maxFixedArity = 2;
G__26571.cljs$lang$applyTo = (function (arglist__26575){
var x = cljs.core.first(arglist__26575);
arglist__26575 = cljs.core.next(arglist__26575);
var y = cljs.core.first(arglist__26575);
var more = cljs.core.rest(arglist__26575);
return G__26571__delegate(x,y,more);
});
G__26571.cljs$core$IFn$_invoke$arity$variadic = G__26571__delegate;
return G__26571;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq(coll);
while(true){
if((xs) && ((n__$1 > (0)))){
var G__26576 = (n__$1 - (1));
var G__26577 = cljs.core.next(xs);
n__$1 = G__26576;
xs = G__26577;
continue;
} else {
return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if((x == null)){
return "";
} else {
var G__26581 = x;
return goog.string.buildString(G__26581);
}
});
var str__2 = (function() { 
var G__26582__delegate = function (x,ys){
var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));
var more = ys;
while(true){
if(cljs.core.truth_(more)){
var G__26583 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__26584 = cljs.core.next(more);
sb = G__26583;
more = G__26584;
continue;
} else {
return sb.toString();
}
break;
}
};
var G__26582 = function (x,var_args){
var ys = null;
if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26582__delegate.call(this,x,ys);};
G__26582.cljs$lang$maxFixedArity = 1;
G__26582.cljs$lang$applyTo = (function (arglist__26585){
var x = cljs.core.first(arglist__26585);
var ys = cljs.core.rest(arglist__26585);
return G__26582__delegate(x,ys);
});
G__26582.cljs$core$IFn$_invoke$arity$variadic = G__26582__delegate;
return G__26582;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;

/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__26586 = cljs.core.next(xs);
var G__26587 = cljs.core.next(ys);
xs = G__26586;
ys = G__26587;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){
if(cljs.core.seq(coll)){
var res = cljs.core.hash(cljs.core.first(coll));
var s = cljs.core.next(coll);
while(true){
if((s == null)){
return res;
} else {
var G__26588 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__26589 = cljs.core.next(s);
res = G__26588;
s = G__26589;
continue;
}
break;
}
} else {
return (0);
}
});

cljs.core.hash_imap = (function hash_imap(m){
var h = (0);
var s = cljs.core.seq(m);
while(true){
if(s){
var e = cljs.core.first(s);
var G__26594 = ((h + (cljs.core.hash((function (){var G__26592 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__26592) : cljs.core.key.call(null,G__26592));
})()) ^ cljs.core.hash((function (){var G__26593 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__26593) : cljs.core.val.call(null,G__26593));
})()))) % (4503599627370496));
var G__26595 = cljs.core.next(s);
h = G__26594;
s = G__26595;
continue;
} else {
return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = (0);
var s__$1 = cljs.core.seq(s);
while(true){
if(s__$1){
var e = cljs.core.first(s__$1);
var G__26596 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__26597 = cljs.core.next(s__$1);
h = G__26596;
s__$1 = G__26597;
continue;
} else {
return h;
}
break;
}
});


/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implicit this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var seq__26608_26618 = cljs.core.seq(fn_map);
var chunk__26609_26619 = null;
var count__26610_26620 = (0);
var i__26611_26621 = (0);
while(true){
if((i__26611_26621 < count__26610_26620)){
var vec__26612_26622 = chunk__26609_26619.cljs$core$IIndexed$_nth$arity$2(null,i__26611_26621);
var key_name_26623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26612_26622,(0),null);
var f_26624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26612_26622,(1),null);
var str_name_26625 = (function (){var G__26613 = key_name_26623;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__26613) : cljs.core.name.call(null,G__26613));
})();
(obj[str_name_26625] = f_26624);

var G__26626 = seq__26608_26618;
var G__26627 = chunk__26609_26619;
var G__26628 = count__26610_26620;
var G__26629 = (i__26611_26621 + (1));
seq__26608_26618 = G__26626;
chunk__26609_26619 = G__26627;
count__26610_26620 = G__26628;
i__26611_26621 = G__26629;
continue;
} else {
var temp__4126__auto___26630 = cljs.core.seq(seq__26608_26618);
if(temp__4126__auto___26630){
var seq__26608_26631__$1 = temp__4126__auto___26630;
if(cljs.core.chunked_seq_QMARK_(seq__26608_26631__$1)){
var c__4508__auto___26632 = (function (){var G__26614 = seq__26608_26631__$1;
return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__26614) : cljs.core.chunk_first.call(null,G__26614));
})();
var G__26633 = (function (){var G__26615 = seq__26608_26631__$1;
return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__26615) : cljs.core.chunk_rest.call(null,G__26615));
})();
var G__26634 = c__4508__auto___26632;
var G__26635 = cljs.core.count(c__4508__auto___26632);
var G__26636 = (0);
seq__26608_26618 = G__26633;
chunk__26609_26619 = G__26634;
count__26610_26620 = G__26635;
i__26611_26621 = G__26636;
continue;
} else {
var vec__26616_26637 = cljs.core.first(seq__26608_26631__$1);
var key_name_26638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26616_26637,(0),null);
var f_26639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26616_26637,(1),null);
var str_name_26640 = (function (){var G__26617 = key_name_26638;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__26617) : cljs.core.name.call(null,G__26617));
})();
(obj[str_name_26640] = f_26639);

var G__26641 = cljs.core.next(seq__26608_26631__$1);
var G__26642 = null;
var G__26643 = (0);
var G__26644 = (0);
seq__26608_26618 = G__26641;
chunk__26609_26619 = G__26642;
count__26610_26620 = G__26643;
i__26611_26621 = G__26644;
continue;
}
} else {
}
}
break;
}

return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.List.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return null;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._rest(coll__$1);
});

cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});

cljs.core.List.cljs$lang$type = true;

cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";

cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/List");
});

cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){
return (new cljs.core.List(meta,first,rest,count,__hash));
});

(cljs.core.List.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.EmptyList.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.EmptyList(self__.meta));
});

cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
throw (new Error("Can't pop empty list"));
});

cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.EmptyList(meta__$1));
});

cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,null,(1),null));
});

cljs.core.EmptyList.cljs$lang$type = true;

cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";

cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/EmptyList");
});

cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){
return (new cljs.core.EmptyList(meta));
});

cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
(cljs.core.EmptyList.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__26646 = coll;
if(G__26646){
var bit__4402__auto__ = (G__26646.cljs$lang$protocol_mask$partition0$ & (134217728));
if((bit__4402__auto__) || (G__26646.cljs$core$IReversible$)){
return true;
} else {
if((!G__26646.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__26646);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__26646);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll)){
return cljs.core.rseq(coll);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){
var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];
var xs__$1 = xs;
while(true){
if(!((xs__$1 == null))){
arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));

var G__26647 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__26647;
continue;
} else {
return arr;
}
break;
}
})());
var i = arr.length;
var r = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__26648 = (i - (1));
var G__26649 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__26648;
r = G__26649;
continue;
} else {
return r;
}
break;
}
};
var list = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__26650){
var xs = cljs.core.seq(arglist__26650);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Cons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return null;
} else {
return cljs.core.seq(self__.rest);
}
});

cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});

cljs.core.Cons.cljs$lang$type = true;

cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";

cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Cons");
});

cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){
return (new cljs.core.Cons(meta,first,rest,__hash));
});

(cljs.core.Cons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3721__auto__ = (coll == null);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var G__26654 = coll;
if(G__26654){
var bit__4395__auto__ = (G__26654.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4395__auto__) || (G__26654.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return (new cljs.core.Cons(null,x,coll,null));
} else {
return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__26656 = x;
if(G__26656){
var bit__4402__auto__ = (G__26656.cljs$lang$protocol_mask$partition0$ & (33554432));
if((bit__4402__auto__) || (G__26656.cljs$core$IList$)){
return true;
} else {
if((!G__26656.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__26656);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__26656);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){
return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});
cljs.core.compare_keywords = (function compare_keywords(a,b){
if((a.fqn === b.fqn)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3709__auto__ = cljs.core.not(a.ns);
if(and__3709__auto__){
return b.ns;
} else {
return and__3709__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__26663 = a.ns;
var G__26664 = b.ns;
return goog.array.defaultCompare(G__26663,G__26664);
})();
if(((0) === nsc)){
var G__26665 = a.name;
var G__26666 = b.name;
return goog.array.defaultCompare(G__26665,G__26666);
} else {
return nsc;
}
}
} else {
var G__26667 = a.name;
var G__26668 = b.name;
return goog.array.defaultCompare(G__26667,G__26668);

}
}
}
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});

cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4142__auto__ = self__._hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_keyword(this$__$1);
self__._hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.Keyword.prototype.call = (function() {
var G__26670 = null;
var G__26670__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__26670__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__26670 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__26670__2.call(this,self__,coll);
case 3:
return G__26670__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26670.cljs$core$IFn$_invoke$arity$2 = G__26670__2;
G__26670.cljs$core$IFn$_invoke$arity$3 = G__26670__3;
return G__26670;
})()
;

cljs.core.Keyword.prototype.apply = (function (self__,args26669){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26669)));
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});

cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Keyword)){
return (self__.fqn === other.fqn);
} else {
return false;
}
});

cljs.core.Keyword.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(":"),cljs.core.str(self__.fqn)].join('');
});

cljs.core.Keyword.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Keyword.cljs$lang$type = true;

cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";

cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Keyword");
});

cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){
return (new cljs.core.Keyword(ns,name,fqn,_hash));
});

cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var G__26672 = x;
if(G__26672){
var bit__4395__auto__ = (G__26672.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4395__auto__) || (G__26672.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(null);
} else {
throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if((name instanceof cljs.core.Symbol)){
return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__26674 = name;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__26674) : cljs.core.name.call(null,G__26674));
})(),name.str,null));
} else {
if(typeof name === 'string'){
var parts = name.split("/");
if((parts.length === (2))){
return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else {
return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else {
return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return (new cljs.core.Keyword(ns,name,[cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(''):null)),cljs.core.str(name)].join(''),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.LazySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.LazySeq.prototype.sval = (function (){
var self__ = this;
var coll = this;
if((self__.fn == null)){
return self__.s;
} else {
self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();

self__.fn = null;

return self__.s;
}
});

cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.next(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if(!((self__.s == null))){
return cljs.core.rest(self__.s);
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
coll__$1.sval();

if((self__.s == null)){
return null;
} else {
var ls = self__.s;
while(true){
if((ls instanceof cljs.core.LazySeq)){
var G__26675 = ls.sval();
ls = G__26675;
continue;
} else {
self__.s = ls;

return cljs.core.seq(self__.s);
}
break;
}
}
});

cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});

cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.LazySeq.cljs$lang$type = true;

cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";

cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/LazySeq");
});

cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){
return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

(cljs.core.LazySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.end;
});

cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);

return self__.end = (self__.end + (1));
});

cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));
self__.buf = null;

return ret;
});

cljs.core.ChunkBuffer.cljs$lang$type = true;

cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";

cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ChunkBuffer");
});

cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){
return (new cljs.core.ChunkBuffer(buf,end));
});

cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});

cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.arr[(self__.off + i)]);
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
var coll__$1 = this;
if(((i >= (0))) && ((i < (self__.end - self__.off)))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
});

cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
});

cljs.core.ArrayChunk.cljs$lang$type = true;

cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";

cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ArrayChunk");
});

cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});

cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){
return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedCons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
var more__$1 = cljs.core._seq(self__.more);
if((more__$1 == null)){
return null;
} else {
return more__$1;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.chunk;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});

cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,this$__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return null;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.cljs$lang$type = true;

cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";

cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ChunkedCons");
});

cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){
return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});

(cljs.core.ChunkedCons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === (0))){
return rest;
} else {
return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__26677 = s;
if(G__26677){
var bit__4395__auto__ = (G__26677.cljs$lang$protocol_mask$partition1$ & (1024));
if((bit__4395__auto__) || (G__26677.cljs$core$IChunkedNext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._chunked_next(s);
} else {
return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq(s__$1)){
ary.push(cljs.core.first(s__$1));

var G__26678 = cljs.core.next(s__$1);
s__$1 = G__26678;
continue;
} else {
return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = (new Array(cljs.core.count(coll)));
var i_26679 = (0);
var xs_26680 = cljs.core.seq(coll);
while(true){
if(xs_26680){
(ret[i_26679] = cljs.core.to_array(cljs.core.first(xs_26680)));

var G__26681 = (i_26679 + (1));
var G__26682 = cljs.core.next(xs_26680);
i_26679 = G__26681;
xs_26680 = G__26682;
continue;
} else {
}
break;
}

return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__26685 = (i + (1));
var G__26686 = cljs.core.next(s__$1);
i = G__26685;
s__$1 = G__26686;
continue;
} else {
return a;
}
break;
}
} else {
var n__4608__auto___26687 = size;
var i_26688 = (0);
while(true){
if((i_26688 < n__4608__auto___26687)){
(a[i_26688] = init_val_or_seq);

var G__26689 = (i_26688 + (1));
i_26688 = G__26689;
continue;
} else {
}
break;
}

return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__26692 = (i + (1));
var G__26693 = cljs.core.next(s__$1);
i = G__26692;
s__$1 = G__26693;
continue;
} else {
return a;
}
break;
}
} else {
var n__4608__auto___26694 = size;
var i_26695 = (0);
while(true){
if((i_26695 < n__4608__auto___26694)){
(a[i_26695] = init_val_or_seq);

var G__26696 = (i_26695 + (1));
i_26695 = G__26696;
continue;
} else {
}
break;
}

return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__26699 = (i + (1));
var G__26700 = cljs.core.next(s__$1);
i = G__26699;
s__$1 = G__26700;
continue;
} else {
return a;
}
break;
}
} else {
var n__4608__auto___26701 = size;
var i_26702 = (0);
while(true){
if((i_26702 < n__4608__auto___26701)){
(a[i_26702] = init_val_or_seq);

var G__26703 = (i_26702 + (1));
i_26702 = G__26703;
continue;
} else {
}
break;
}

return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__26706 = (i + (1));
var G__26707 = cljs.core.next(s__$1);
i = G__26706;
s__$1 = G__26707;
continue;
} else {
return a;
}
break;
}
} else {
var n__4608__auto___26708 = size;
var i_26709 = (0);
while(true){
if((i_26709 < n__4608__auto___26708)){
(a[i_26709] = init_val_or_seq);

var G__26710 = (i_26709 + (1));
i_26709 = G__26710;
continue;
} else {
}
break;
}

return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s)){
return cljs.core.count(s);
} else {
var s__$1 = s;
var i = n;
var sum = (0);
while(true){
if(((i > (0))) && (cljs.core.seq(s__$1))){
var G__26711 = cljs.core.next(s__$1);
var G__26712 = (i - (1));
var G__26713 = (sum + (1));
s__$1 = G__26711;
i = G__26712;
sum = G__26713;
continue;
} else {
return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null)){
return null;
} else {
if((cljs.core.next(arglist) == null)){
return cljs.core.seq(cljs.core.first(arglist));
} else {
return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,(function (){
return null;
}),null,null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return x;
}),null,null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.seq(x);
if(s){
if(cljs.core.chunked_seq_QMARK_(s)){
return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else {
return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else {
return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__26733__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,(function (){
var xys__$1 = cljs.core.seq(xys);
if(xys__$1){
if(cljs.core.chunked_seq_QMARK_(xys__$1)){
return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else {
return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else {
if(cljs.core.truth_(zs__$1)){
return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__26733 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26733__delegate.call(this,x,y,zs);};
G__26733.cljs$lang$maxFixedArity = 2;
G__26733.cljs$lang$applyTo = (function (arglist__26734){
var x = cljs.core.first(arglist__26734);
arglist__26734 = cljs.core.next(arglist__26734);
var y = cljs.core.first(arglist__26734);
var zs = cljs.core.rest(arglist__26734);
return G__26733__delegate(x,y,zs);
});
G__26733.cljs$core$IFn$_invoke$arity$variadic = G__26733__delegate;
return G__26733;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__26735__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__26735 = function (a,b,c,d,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__26735__delegate.call(this,a,b,c,d,more);};
G__26735.cljs$lang$maxFixedArity = 4;
G__26735.cljs$lang$applyTo = (function (arglist__26736){
var a = cljs.core.first(arglist__26736);
arglist__26736 = cljs.core.next(arglist__26736);
var b = cljs.core.first(arglist__26736);
arglist__26736 = cljs.core.next(arglist__26736);
var c = cljs.core.first(arglist__26736);
arglist__26736 = cljs.core.next(arglist__26736);
var d = cljs.core.first(arglist__26736);
var more = cljs.core.rest(arglist__26736);
return G__26735__delegate(a,b,c,d,more);
});
G__26735.cljs$core$IFn$_invoke$arity$variadic = G__26735__delegate;
return G__26735;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){
return coll;
});
var conj_BANG___2 = (function (tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__26737__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__26738 = ntcoll;
var G__26739 = cljs.core.first(vals);
var G__26740 = cljs.core.next(vals);
tcoll = G__26738;
val = G__26739;
vals = G__26740;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__26737 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26737__delegate.call(this,tcoll,val,vals);};
G__26737.cljs$lang$maxFixedArity = 2;
G__26737.cljs$lang$applyTo = (function (arglist__26741){
var tcoll = cljs.core.first(arglist__26741);
arglist__26741 = cljs.core.next(arglist__26741);
var val = cljs.core.first(arglist__26741);
var vals = cljs.core.rest(arglist__26741);
return G__26737__delegate(tcoll,val,vals);
});
G__26737.cljs$core$IFn$_invoke$arity$variadic = G__26737__delegate;
return G__26737;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__26742__delegate = function (tcoll,key,val,kvs){
while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);
if(cljs.core.truth_(kvs)){
var G__26743 = ntcoll;
var G__26744 = cljs.core.first(kvs);
var G__26745 = cljs.core.second(kvs);
var G__26746 = cljs.core.nnext(kvs);
tcoll = G__26743;
key = G__26744;
val = G__26745;
kvs = G__26746;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__26742 = function (tcoll,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26742__delegate.call(this,tcoll,key,val,kvs);};
G__26742.cljs$lang$maxFixedArity = 3;
G__26742.cljs$lang$applyTo = (function (arglist__26747){
var tcoll = cljs.core.first(arglist__26747);
arglist__26747 = cljs.core.next(arglist__26747);
var key = cljs.core.first(arglist__26747);
arglist__26747 = cljs.core.next(arglist__26747);
var val = cljs.core.first(arglist__26747);
var kvs = cljs.core.rest(arglist__26747);
return G__26742__delegate(tcoll,key,val,kvs);
});
G__26742.cljs$core$IFn$_invoke$arity$variadic = G__26742__delegate;
return G__26742;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__26748__delegate = function (tcoll,key,ks){
while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);
if(cljs.core.truth_(ks)){
var G__26749 = ntcoll;
var G__26750 = cljs.core.first(ks);
var G__26751 = cljs.core.next(ks);
tcoll = G__26749;
key = G__26750;
ks = G__26751;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__26748 = function (tcoll,key,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26748__delegate.call(this,tcoll,key,ks);};
G__26748.cljs$lang$maxFixedArity = 2;
G__26748.cljs$lang$applyTo = (function (arglist__26752){
var tcoll = cljs.core.first(arglist__26752);
arglist__26752 = cljs.core.next(arglist__26752);
var key = cljs.core.first(arglist__26752);
var ks = cljs.core.rest(arglist__26752);
return G__26748__delegate(tcoll,key,ks);
});
G__26748.cljs$core$IFn$_invoke$arity$variadic = G__26748__delegate;
return G__26748;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__26753__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__26754 = ntcoll;
var G__26755 = cljs.core.first(vals);
var G__26756 = cljs.core.next(vals);
tcoll = G__26754;
val = G__26755;
vals = G__26756;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__26753 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26753__delegate.call(this,tcoll,val,vals);};
G__26753.cljs$lang$maxFixedArity = 2;
G__26753.cljs$lang$applyTo = (function (arglist__26757){
var tcoll = cljs.core.first(arglist__26757);
arglist__26757 = cljs.core.next(arglist__26757);
var val = cljs.core.first(arglist__26757);
var vals = cljs.core.rest(arglist__26757);
return G__26753__delegate(tcoll,val,vals);
});
G__26753.cljs$core$IFn$_invoke$arity$variadic = G__26753__delegate;
return G__26753;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;

cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq(args);
if((argc === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var a4652 = cljs.core._first(args__$1);
var args__$2 = cljs.core._rest(args__$1);
if((argc === (1))){
if(f.cljs$core$IFn$_invoke$arity$1){
return f.cljs$core$IFn$_invoke$arity$1(a4652);
} else {
var G__26968 = a4652;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26968) : f.call(null,G__26968));
}
} else {
var b4653 = cljs.core._first(args__$2);
var args__$3 = cljs.core._rest(args__$2);
if((argc === (2))){
if(f.cljs$core$IFn$_invoke$arity$2){
return f.cljs$core$IFn$_invoke$arity$2(a4652,b4653);
} else {
var G__26969 = a4652;
var G__26970 = b4653;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26969,G__26970) : f.call(null,G__26969,G__26970));
}
} else {
var c4654 = cljs.core._first(args__$3);
var args__$4 = cljs.core._rest(args__$3);
if((argc === (3))){
if(f.cljs$core$IFn$_invoke$arity$3){
return f.cljs$core$IFn$_invoke$arity$3(a4652,b4653,c4654);
} else {
var G__26971 = a4652;
var G__26972 = b4653;
var G__26973 = c4654;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26971,G__26972,G__26973) : f.call(null,G__26971,G__26972,G__26973));
}
} else {
var d4655 = cljs.core._first(args__$4);
var args__$5 = cljs.core._rest(args__$4);
if((argc === (4))){
if(f.cljs$core$IFn$_invoke$arity$4){
return f.cljs$core$IFn$_invoke$arity$4(a4652,b4653,c4654,d4655);
} else {
var G__26974 = a4652;
var G__26975 = b4653;
var G__26976 = c4654;
var G__26977 = d4655;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__26974,G__26975,G__26976,G__26977) : f.call(null,G__26974,G__26975,G__26976,G__26977));
}
} else {
var e4656 = cljs.core._first(args__$5);
var args__$6 = cljs.core._rest(args__$5);
if((argc === (5))){
if(f.cljs$core$IFn$_invoke$arity$5){
return f.cljs$core$IFn$_invoke$arity$5(a4652,b4653,c4654,d4655,e4656);
} else {
var G__26978 = a4652;
var G__26979 = b4653;
var G__26980 = c4654;
var G__26981 = d4655;
var G__26982 = e4656;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__26978,G__26979,G__26980,G__26981,G__26982) : f.call(null,G__26978,G__26979,G__26980,G__26981,G__26982));
}
} else {
var f4657 = cljs.core._first(args__$6);
var args__$7 = cljs.core._rest(args__$6);
if((argc === (6))){
if(f.cljs$core$IFn$_invoke$arity$6){
return f.cljs$core$IFn$_invoke$arity$6(a4652,b4653,c4654,d4655,e4656,f4657);
} else {
var G__26983 = a4652;
var G__26984 = b4653;
var G__26985 = c4654;
var G__26986 = d4655;
var G__26987 = e4656;
var G__26988 = f4657;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__26983,G__26984,G__26985,G__26986,G__26987,G__26988) : f.call(null,G__26983,G__26984,G__26985,G__26986,G__26987,G__26988));
}
} else {
var g4658 = cljs.core._first(args__$7);
var args__$8 = cljs.core._rest(args__$7);
if((argc === (7))){
if(f.cljs$core$IFn$_invoke$arity$7){
return f.cljs$core$IFn$_invoke$arity$7(a4652,b4653,c4654,d4655,e4656,f4657,g4658);
} else {
var G__26989 = a4652;
var G__26990 = b4653;
var G__26991 = c4654;
var G__26992 = d4655;
var G__26993 = e4656;
var G__26994 = f4657;
var G__26995 = g4658;
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__26989,G__26990,G__26991,G__26992,G__26993,G__26994,G__26995) : f.call(null,G__26989,G__26990,G__26991,G__26992,G__26993,G__26994,G__26995));
}
} else {
var h4659 = cljs.core._first(args__$8);
var args__$9 = cljs.core._rest(args__$8);
if((argc === (8))){
if(f.cljs$core$IFn$_invoke$arity$8){
return f.cljs$core$IFn$_invoke$arity$8(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659);
} else {
var G__26996 = a4652;
var G__26997 = b4653;
var G__26998 = c4654;
var G__26999 = d4655;
var G__27000 = e4656;
var G__27001 = f4657;
var G__27002 = g4658;
var G__27003 = h4659;
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__26996,G__26997,G__26998,G__26999,G__27000,G__27001,G__27002,G__27003) : f.call(null,G__26996,G__26997,G__26998,G__26999,G__27000,G__27001,G__27002,G__27003));
}
} else {
var i4660 = cljs.core._first(args__$9);
var args__$10 = cljs.core._rest(args__$9);
if((argc === (9))){
if(f.cljs$core$IFn$_invoke$arity$9){
return f.cljs$core$IFn$_invoke$arity$9(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660);
} else {
var G__27004 = a4652;
var G__27005 = b4653;
var G__27006 = c4654;
var G__27007 = d4655;
var G__27008 = e4656;
var G__27009 = f4657;
var G__27010 = g4658;
var G__27011 = h4659;
var G__27012 = i4660;
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__27004,G__27005,G__27006,G__27007,G__27008,G__27009,G__27010,G__27011,G__27012) : f.call(null,G__27004,G__27005,G__27006,G__27007,G__27008,G__27009,G__27010,G__27011,G__27012));
}
} else {
var j4661 = cljs.core._first(args__$10);
var args__$11 = cljs.core._rest(args__$10);
if((argc === (10))){
if(f.cljs$core$IFn$_invoke$arity$10){
return f.cljs$core$IFn$_invoke$arity$10(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661);
} else {
var G__27013 = a4652;
var G__27014 = b4653;
var G__27015 = c4654;
var G__27016 = d4655;
var G__27017 = e4656;
var G__27018 = f4657;
var G__27019 = g4658;
var G__27020 = h4659;
var G__27021 = i4660;
var G__27022 = j4661;
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__27013,G__27014,G__27015,G__27016,G__27017,G__27018,G__27019,G__27020,G__27021,G__27022) : f.call(null,G__27013,G__27014,G__27015,G__27016,G__27017,G__27018,G__27019,G__27020,G__27021,G__27022));
}
} else {
var k4662 = cljs.core._first(args__$11);
var args__$12 = cljs.core._rest(args__$11);
if((argc === (11))){
if(f.cljs$core$IFn$_invoke$arity$11){
return f.cljs$core$IFn$_invoke$arity$11(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662);
} else {
var G__27023 = a4652;
var G__27024 = b4653;
var G__27025 = c4654;
var G__27026 = d4655;
var G__27027 = e4656;
var G__27028 = f4657;
var G__27029 = g4658;
var G__27030 = h4659;
var G__27031 = i4660;
var G__27032 = j4661;
var G__27033 = k4662;
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__27023,G__27024,G__27025,G__27026,G__27027,G__27028,G__27029,G__27030,G__27031,G__27032,G__27033) : f.call(null,G__27023,G__27024,G__27025,G__27026,G__27027,G__27028,G__27029,G__27030,G__27031,G__27032,G__27033));
}
} else {
var l4663 = cljs.core._first(args__$12);
var args__$13 = cljs.core._rest(args__$12);
if((argc === (12))){
if(f.cljs$core$IFn$_invoke$arity$12){
return f.cljs$core$IFn$_invoke$arity$12(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662,l4663);
} else {
var G__27034 = a4652;
var G__27035 = b4653;
var G__27036 = c4654;
var G__27037 = d4655;
var G__27038 = e4656;
var G__27039 = f4657;
var G__27040 = g4658;
var G__27041 = h4659;
var G__27042 = i4660;
var G__27043 = j4661;
var G__27044 = k4662;
var G__27045 = l4663;
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__27034,G__27035,G__27036,G__27037,G__27038,G__27039,G__27040,G__27041,G__27042,G__27043,G__27044,G__27045) : f.call(null,G__27034,G__27035,G__27036,G__27037,G__27038,G__27039,G__27040,G__27041,G__27042,G__27043,G__27044,G__27045));
}
} else {
var m4664 = cljs.core._first(args__$13);
var args__$14 = cljs.core._rest(args__$13);
if((argc === (13))){
if(f.cljs$core$IFn$_invoke$arity$13){
return f.cljs$core$IFn$_invoke$arity$13(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662,l4663,m4664);
} else {
var G__27046 = a4652;
var G__27047 = b4653;
var G__27048 = c4654;
var G__27049 = d4655;
var G__27050 = e4656;
var G__27051 = f4657;
var G__27052 = g4658;
var G__27053 = h4659;
var G__27054 = i4660;
var G__27055 = j4661;
var G__27056 = k4662;
var G__27057 = l4663;
var G__27058 = m4664;
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__27046,G__27047,G__27048,G__27049,G__27050,G__27051,G__27052,G__27053,G__27054,G__27055,G__27056,G__27057,G__27058) : f.call(null,G__27046,G__27047,G__27048,G__27049,G__27050,G__27051,G__27052,G__27053,G__27054,G__27055,G__27056,G__27057,G__27058));
}
} else {
var n4665 = cljs.core._first(args__$14);
var args__$15 = cljs.core._rest(args__$14);
if((argc === (14))){
if(f.cljs$core$IFn$_invoke$arity$14){
return f.cljs$core$IFn$_invoke$arity$14(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662,l4663,m4664,n4665);
} else {
var G__27059 = a4652;
var G__27060 = b4653;
var G__27061 = c4654;
var G__27062 = d4655;
var G__27063 = e4656;
var G__27064 = f4657;
var G__27065 = g4658;
var G__27066 = h4659;
var G__27067 = i4660;
var G__27068 = j4661;
var G__27069 = k4662;
var G__27070 = l4663;
var G__27071 = m4664;
var G__27072 = n4665;
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__27059,G__27060,G__27061,G__27062,G__27063,G__27064,G__27065,G__27066,G__27067,G__27068,G__27069,G__27070,G__27071,G__27072) : f.call(null,G__27059,G__27060,G__27061,G__27062,G__27063,G__27064,G__27065,G__27066,G__27067,G__27068,G__27069,G__27070,G__27071,G__27072));
}
} else {
var o4666 = cljs.core._first(args__$15);
var args__$16 = cljs.core._rest(args__$15);
if((argc === (15))){
if(f.cljs$core$IFn$_invoke$arity$15){
return f.cljs$core$IFn$_invoke$arity$15(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662,l4663,m4664,n4665,o4666);
} else {
var G__27073 = a4652;
var G__27074 = b4653;
var G__27075 = c4654;
var G__27076 = d4655;
var G__27077 = e4656;
var G__27078 = f4657;
var G__27079 = g4658;
var G__27080 = h4659;
var G__27081 = i4660;
var G__27082 = j4661;
var G__27083 = k4662;
var G__27084 = l4663;
var G__27085 = m4664;
var G__27086 = n4665;
var G__27087 = o4666;
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__27073,G__27074,G__27075,G__27076,G__27077,G__27078,G__27079,G__27080,G__27081,G__27082,G__27083,G__27084,G__27085,G__27086,G__27087) : f.call(null,G__27073,G__27074,G__27075,G__27076,G__27077,G__27078,G__27079,G__27080,G__27081,G__27082,G__27083,G__27084,G__27085,G__27086,G__27087));
}
} else {
var p4667 = cljs.core._first(args__$16);
var args__$17 = cljs.core._rest(args__$16);
if((argc === (16))){
if(f.cljs$core$IFn$_invoke$arity$16){
return f.cljs$core$IFn$_invoke$arity$16(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662,l4663,m4664,n4665,o4666,p4667);
} else {
var G__27088 = a4652;
var G__27089 = b4653;
var G__27090 = c4654;
var G__27091 = d4655;
var G__27092 = e4656;
var G__27093 = f4657;
var G__27094 = g4658;
var G__27095 = h4659;
var G__27096 = i4660;
var G__27097 = j4661;
var G__27098 = k4662;
var G__27099 = l4663;
var G__27100 = m4664;
var G__27101 = n4665;
var G__27102 = o4666;
var G__27103 = p4667;
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__27088,G__27089,G__27090,G__27091,G__27092,G__27093,G__27094,G__27095,G__27096,G__27097,G__27098,G__27099,G__27100,G__27101,G__27102,G__27103) : f.call(null,G__27088,G__27089,G__27090,G__27091,G__27092,G__27093,G__27094,G__27095,G__27096,G__27097,G__27098,G__27099,G__27100,G__27101,G__27102,G__27103));
}
} else {
var q4668 = cljs.core._first(args__$17);
var args__$18 = cljs.core._rest(args__$17);
if((argc === (17))){
if(f.cljs$core$IFn$_invoke$arity$17){
return f.cljs$core$IFn$_invoke$arity$17(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662,l4663,m4664,n4665,o4666,p4667,q4668);
} else {
var G__27104 = a4652;
var G__27105 = b4653;
var G__27106 = c4654;
var G__27107 = d4655;
var G__27108 = e4656;
var G__27109 = f4657;
var G__27110 = g4658;
var G__27111 = h4659;
var G__27112 = i4660;
var G__27113 = j4661;
var G__27114 = k4662;
var G__27115 = l4663;
var G__27116 = m4664;
var G__27117 = n4665;
var G__27118 = o4666;
var G__27119 = p4667;
var G__27120 = q4668;
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__27104,G__27105,G__27106,G__27107,G__27108,G__27109,G__27110,G__27111,G__27112,G__27113,G__27114,G__27115,G__27116,G__27117,G__27118,G__27119,G__27120) : f.call(null,G__27104,G__27105,G__27106,G__27107,G__27108,G__27109,G__27110,G__27111,G__27112,G__27113,G__27114,G__27115,G__27116,G__27117,G__27118,G__27119,G__27120));
}
} else {
var r4669 = cljs.core._first(args__$18);
var args__$19 = cljs.core._rest(args__$18);
if((argc === (18))){
if(f.cljs$core$IFn$_invoke$arity$18){
return f.cljs$core$IFn$_invoke$arity$18(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662,l4663,m4664,n4665,o4666,p4667,q4668,r4669);
} else {
var G__27121 = a4652;
var G__27122 = b4653;
var G__27123 = c4654;
var G__27124 = d4655;
var G__27125 = e4656;
var G__27126 = f4657;
var G__27127 = g4658;
var G__27128 = h4659;
var G__27129 = i4660;
var G__27130 = j4661;
var G__27131 = k4662;
var G__27132 = l4663;
var G__27133 = m4664;
var G__27134 = n4665;
var G__27135 = o4666;
var G__27136 = p4667;
var G__27137 = q4668;
var G__27138 = r4669;
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__27121,G__27122,G__27123,G__27124,G__27125,G__27126,G__27127,G__27128,G__27129,G__27130,G__27131,G__27132,G__27133,G__27134,G__27135,G__27136,G__27137,G__27138) : f.call(null,G__27121,G__27122,G__27123,G__27124,G__27125,G__27126,G__27127,G__27128,G__27129,G__27130,G__27131,G__27132,G__27133,G__27134,G__27135,G__27136,G__27137,G__27138));
}
} else {
var s4670 = cljs.core._first(args__$19);
var args__$20 = cljs.core._rest(args__$19);
if((argc === (19))){
if(f.cljs$core$IFn$_invoke$arity$19){
return f.cljs$core$IFn$_invoke$arity$19(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662,l4663,m4664,n4665,o4666,p4667,q4668,r4669,s4670);
} else {
var G__27139 = a4652;
var G__27140 = b4653;
var G__27141 = c4654;
var G__27142 = d4655;
var G__27143 = e4656;
var G__27144 = f4657;
var G__27145 = g4658;
var G__27146 = h4659;
var G__27147 = i4660;
var G__27148 = j4661;
var G__27149 = k4662;
var G__27150 = l4663;
var G__27151 = m4664;
var G__27152 = n4665;
var G__27153 = o4666;
var G__27154 = p4667;
var G__27155 = q4668;
var G__27156 = r4669;
var G__27157 = s4670;
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__27139,G__27140,G__27141,G__27142,G__27143,G__27144,G__27145,G__27146,G__27147,G__27148,G__27149,G__27150,G__27151,G__27152,G__27153,G__27154,G__27155,G__27156,G__27157) : f.call(null,G__27139,G__27140,G__27141,G__27142,G__27143,G__27144,G__27145,G__27146,G__27147,G__27148,G__27149,G__27150,G__27151,G__27152,G__27153,G__27154,G__27155,G__27156,G__27157));
}
} else {
var t4671 = cljs.core._first(args__$20);
var args__$21 = cljs.core._rest(args__$20);
if((argc === (20))){
if(f.cljs$core$IFn$_invoke$arity$20){
return f.cljs$core$IFn$_invoke$arity$20(a4652,b4653,c4654,d4655,e4656,f4657,g4658,h4659,i4660,j4661,k4662,l4663,m4664,n4665,o4666,p4667,q4668,r4669,s4670,t4671);
} else {
var G__27158 = a4652;
var G__27159 = b4653;
var G__27160 = c4654;
var G__27161 = d4655;
var G__27162 = e4656;
var G__27163 = f4657;
var G__27164 = g4658;
var G__27165 = h4659;
var G__27166 = i4660;
var G__27167 = j4661;
var G__27168 = k4662;
var G__27169 = l4663;
var G__27170 = m4664;
var G__27171 = n4665;
var G__27172 = o4666;
var G__27173 = p4667;
var G__27174 = q4668;
var G__27175 = r4669;
var G__27176 = s4670;
var G__27177 = t4671;
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__27158,G__27159,G__27160,G__27161,G__27162,G__27163,G__27164,G__27165,G__27166,G__27167,G__27168,G__27169,G__27170,G__27171,G__27172,G__27173,G__27174,G__27175,G__27176,G__27177) : f.call(null,G__27158,G__27159,G__27160,G__27161,G__27162,G__27163,G__27164,G__27165,G__27166,G__27167,G__27168,G__27169,G__27170,G__27171,G__27172,G__27173,G__27174,G__27175,G__27176,G__27177));
}
} else {
throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,args);
} else {
return f.cljs$lang$applyTo(args);
}
} else {
return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__27178__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__27178 = function (f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__27178__delegate.call(this,f,a,b,c,d,args);};
G__27178.cljs$lang$maxFixedArity = 5;
G__27178.cljs$lang$applyTo = (function (arglist__27179){
var f = cljs.core.first(arglist__27179);
arglist__27179 = cljs.core.next(arglist__27179);
var a = cljs.core.first(arglist__27179);
arglist__27179 = cljs.core.next(arglist__27179);
var b = cljs.core.first(arglist__27179);
arglist__27179 = cljs.core.next(arglist__27179);
var c = cljs.core.first(arglist__27179);
arglist__27179 = cljs.core.next(arglist__27179);
var d = cljs.core.first(arglist__27179);
var args = cljs.core.rest(arglist__27179);
return G__27178__delegate(f,a,b,c,d,args);
});
G__27178.cljs$core$IFn$_invoke$arity$variadic = G__27178__delegate;
return G__27178;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){
return cljs.core.with_meta(obj,(function (){var G__27195 = cljs.core.meta(obj);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27195) : f.call(null,G__27195));
})());
});
var vary_meta__3 = (function (obj,f,a){
return cljs.core.with_meta(obj,(function (){var G__27196 = cljs.core.meta(obj);
var G__27197 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27196,G__27197) : f.call(null,G__27196,G__27197));
})());
});
var vary_meta__4 = (function (obj,f,a,b){
return cljs.core.with_meta(obj,(function (){var G__27198 = cljs.core.meta(obj);
var G__27199 = a;
var G__27200 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27198,G__27199,G__27200) : f.call(null,G__27198,G__27199,G__27200));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){
return cljs.core.with_meta(obj,(function (){var G__27201 = cljs.core.meta(obj);
var G__27202 = a;
var G__27203 = b;
var G__27204 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27201,G__27202,G__27203,G__27204) : f.call(null,G__27201,G__27202,G__27203,G__27204));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){
return cljs.core.with_meta(obj,(function (){var G__27205 = cljs.core.meta(obj);
var G__27206 = a;
var G__27207 = b;
var G__27208 = c;
var G__27209 = d;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__27205,G__27206,G__27207,G__27208,G__27209) : f.call(null,G__27205,G__27206,G__27207,G__27208,G__27209));
})());
});
var vary_meta__7 = (function() { 
var G__27210__delegate = function (obj,f,a,b,c,d,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__27210 = function (obj,f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__27210__delegate.call(this,obj,f,a,b,c,d,args);};
G__27210.cljs$lang$maxFixedArity = 6;
G__27210.cljs$lang$applyTo = (function (arglist__27211){
var obj = cljs.core.first(arglist__27211);
arglist__27211 = cljs.core.next(arglist__27211);
var f = cljs.core.first(arglist__27211);
arglist__27211 = cljs.core.next(arglist__27211);
var a = cljs.core.first(arglist__27211);
arglist__27211 = cljs.core.next(arglist__27211);
var b = cljs.core.first(arglist__27211);
arglist__27211 = cljs.core.next(arglist__27211);
var c = cljs.core.first(arglist__27211);
arglist__27211 = cljs.core.next(arglist__27211);
var d = cljs.core.first(arglist__27211);
var args = cljs.core.rest(arglist__27211);
return G__27210__delegate(obj,f,a,b,c,d,args);
});
G__27210.cljs$core$IFn$_invoke$arity$variadic = G__27210__delegate;
return G__27210;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__27212__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__27212 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27212__delegate.call(this,x,y,more);};
G__27212.cljs$lang$maxFixedArity = 2;
G__27212.cljs$lang$applyTo = (function (arglist__27213){
var x = cljs.core.first(arglist__27213);
arglist__27213 = cljs.core.next(arglist__27213);
var y = cljs.core.first(arglist__27213);
var more = cljs.core.rest(arglist__27213);
return G__27212__delegate(x,y,more);
});
G__27212.cljs$core$IFn$_invoke$arity$variadic = G__27212__delegate;
return G__27212;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll)){
return coll;
} else {
return null;
}
});
cljs.core.nil_iter = (function nil_iter(){
if(typeof cljs.core.t27217 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.t27217 = (function (nil_iter,meta27218){
this.nil_iter = nil_iter;
this.meta27218 = meta27218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t27217.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return false;
});

cljs.core.t27217.prototype.next = (function (){
var self__ = this;
var _ = this;
return (new Error("No such element"));
});

cljs.core.t27217.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.t27217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27219){
var self__ = this;
var _27219__$1 = this;
return self__.meta27218;
});

cljs.core.t27217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27219,meta27218__$1){
var self__ = this;
var _27219__$1 = this;
return (new cljs.core.t27217(self__.nil_iter,meta27218__$1));
});

cljs.core.t27217.cljs$lang$type = true;

cljs.core.t27217.cljs$lang$ctorStr = "cljs.core/t27217";

cljs.core.t27217.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/t27217");
});

cljs.core.__GT_t27217 = (function __GT_t27217(nil_iter__$1,meta27218){
return (new cljs.core.t27217(nil_iter__$1,meta27218));
});

}

return (new cljs.core.t27217(nil_iter,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,54,cljs.core.constant$keyword$9,2990,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,2986,cljs.core.constant$keyword$12,"D:\\prog\\projects\\pure\\clojure\\shoplist\\resources\\public\\js\\out\\cljs\\core.cljs"], null)));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.s.length);
});

cljs.core.StringIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.s.charAt(self__.i);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.StringIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.StringIter.cljs$lang$type = true;

cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";

cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/StringIter");
});

cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){
return (new cljs.core.StringIter(s,i));
});

cljs.core.string_iter = (function string_iter(x){
return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.ArrayIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.ArrayIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.ArrayIter.cljs$lang$type = true;

cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";

cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ArrayIter");
});

cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){
return (new cljs.core.ArrayIter(arr,i));
});

cljs.core.array_iter = (function array_iter(x){
return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__._seq === cljs.core.INIT)){
self__._seq = cljs.core.START;

self__._next = cljs.core.seq(self__._next);
} else {
if((self__._seq === self__._next)){
self__._next = cljs.core.next(self__._seq);
} else {
}
}

return !((self__._next == null));
});

cljs.core.SeqIter.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.not(this$.hasNext())){
throw (new Error("No such element"));
} else {
self__._seq = self__._next;

return cljs.core.first(self__._next);
}
});

cljs.core.SeqIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.SeqIter.cljs$lang$type = true;

cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";

cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/SeqIter");
});

cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){
return (new cljs.core.SeqIter(_seq,_next));
});

cljs.core.seq_iter = (function seq_iter(coll){
return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){
if((coll == null)){
return cljs.core.nil_iter();
} else {
if(typeof coll === 'string'){
return cljs.core.string_iter(coll);
} else {
if(coll instanceof Array){
return cljs.core.array_iter(coll);
} else {
if(cljs.core.iterable_QMARK_(coll)){
return cljs.core._iterator(coll);
} else {
if(cljs.core.seqable_QMARK_(coll)){
return cljs.core.seq_iter(coll);
} else {
throw (new Error([cljs.core.str("Cannot create iterator from "),cljs.core.str(coll)].join('')));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){
return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3709__auto__ = !((lt.stepper == null));
if(and__3709__auto__){
return self__.iter.hasNext();
} else {
return and__3709__auto__;
}
})())){
if(cljs.core.reduced_QMARK_((function (){var G__27220 = lt;
var G__27221 = self__.iter.next();
return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__27220,G__27221) : self__.xform.call(null,G__27220,G__27221));
})())){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__27222 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__27222) : self__.xform.call(null,G__27222));
}
});

cljs.core.Stepper.cljs$lang$type = true;

cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";

cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Stepper");
});

cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){
return (new cljs.core.Stepper(xform,iter));
});

cljs.core.stepper = (function stepper(xform,iter){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return result;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__27224 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__27224) : xform.call(null,G__27224));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
var iters__$1 = cljs.core.seq(self__.iters);
while(true){
if(!((iters__$1 == null))){
var iter = cljs.core.first(iters__$1);
if(cljs.core.not(iter.hasNext())){
return false;
} else {
var G__27226 = cljs.core.next(iters__$1);
iters__$1 = G__27226;
continue;
}
} else {
return true;
}
break;
}
});

cljs.core.MultiStepper.prototype.next = (function (){
var self__ = this;
var _ = this;
var n__4608__auto___27227 = self__.iters.length;
var i_27228 = (0);
while(true){
if((i_27228 < n__4608__auto___27227)){
(self__.nexts[i_27228] = (self__.iters[i_27228]).next());

var G__27229 = (i_27228 + (1));
i_27228 = G__27229;
continue;
} else {
}
break;
}

return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});

cljs.core.MultiStepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3709__auto__ = !((lt.stepper == null));
if(and__3709__auto__){
return this$.hasNext();
} else {
return and__3709__auto__;
}
})())){
if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next())))){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__27225 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__27225) : self__.xform.call(null,G__27225));
}
});

cljs.core.MultiStepper.cljs$lang$type = true;

cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";

cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/MultiStepper");
});

cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){
return (new cljs.core.MultiStepper(xform,iters,nexts));
});

cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){
return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return lt;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__27234 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__27234) : xform.call(null,G__27234));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return cljs.core._seq(self__.rest);
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return self__.first;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
self__.stepper.step(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return this$__$1;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_ordered_coll(this$__$1);
});

cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var s = cljs.core._seq(this$__$1);
if(!((s == null))){
return cljs.core.equiv_sequential(this$__$1,other);
} else {
return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,cljs.core._seq(this$__$1));
});

cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});

cljs.core.LazyTransformer.cljs$lang$type = true;

cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";

cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/LazyTransformer");
});

cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){
return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});

(cljs.core.LazyTransformer.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.LazyTransformer.create = (function (xform,coll){
return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){
var iters = [];
var seq__27235_27239 = cljs.core.seq(colls);
var chunk__27236_27240 = null;
var count__27237_27241 = (0);
var i__27238_27242 = (0);
while(true){
if((i__27238_27242 < count__27237_27241)){
var coll_27243 = chunk__27236_27240.cljs$core$IIndexed$_nth$arity$2(null,i__27238_27242);
iters.push(cljs.core.iter(coll_27243));

var G__27244 = seq__27235_27239;
var G__27245 = chunk__27236_27240;
var G__27246 = count__27237_27241;
var G__27247 = (i__27238_27242 + (1));
seq__27235_27239 = G__27244;
chunk__27236_27240 = G__27245;
count__27237_27241 = G__27246;
i__27238_27242 = G__27247;
continue;
} else {
var temp__4126__auto___27248 = cljs.core.seq(seq__27235_27239);
if(temp__4126__auto___27248){
var seq__27235_27249__$1 = temp__4126__auto___27248;
if(cljs.core.chunked_seq_QMARK_(seq__27235_27249__$1)){
var c__4508__auto___27250 = cljs.core.chunk_first(seq__27235_27249__$1);
var G__27251 = cljs.core.chunk_rest(seq__27235_27249__$1);
var G__27252 = c__4508__auto___27250;
var G__27253 = cljs.core.count(c__4508__auto___27250);
var G__27254 = (0);
seq__27235_27239 = G__27251;
chunk__27236_27240 = G__27252;
count__27237_27241 = G__27253;
i__27238_27242 = G__27254;
continue;
} else {
var coll_27255 = cljs.core.first(seq__27235_27249__$1);
iters.push(cljs.core.iter(coll_27255));

var G__27256 = cljs.core.next(seq__27235_27249__$1);
var G__27257 = null;
var G__27258 = (0);
var G__27259 = (0);
seq__27235_27239 = G__27256;
chunk__27236_27240 = G__27257;
count__27237_27241 = G__27258;
i__27238_27242 = G__27259;
continue;
}
} else {
}
}
break;
}

return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3721__auto__ = cljs.core.seq(coll);
if(or__3721__auto__){
return or__3721__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){
return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__27260__delegate = function (xform,coll,colls){
return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__27260 = function (xform,coll,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27260__delegate.call(this,xform,coll,colls);};
G__27260.cljs$lang$maxFixedArity = 2;
G__27260.cljs$lang$applyTo = (function (arglist__27261){
var xform = cljs.core.first(arglist__27261);
arglist__27261 = cljs.core.next(arglist__27261);
var coll = cljs.core.first(arglist__27261);
var colls = cljs.core.rest(arglist__27261);
return G__27260__delegate(xform,coll,colls);
});
G__27260.cljs$core$IFn$_invoke$arity$variadic = G__27260__delegate;
return G__27260;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null)){
return true;
} else {
if(cljs.core.truth_((function (){var G__27263 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__27263) : pred.call(null,G__27263));
})())){
var G__27264 = pred;
var G__27265 = cljs.core.next(coll);
pred = G__27264;
coll = G__27265;
continue;
} else {
return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll)){
var or__3721__auto__ = (function (){var G__27269 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__27269) : pred.call(null,G__27269));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var G__27270 = pred;
var G__27271 = cljs.core.next(coll);
pred = G__27270;
coll = G__27271;
continue;
}
} else {
return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n)){
return ((n & (1)) === (0));
} else {
throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__27278 = null;
var G__27278__0 = (function (){
return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__27278__1 = (function (x){
return cljs.core.not((function (){var G__27275 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27275) : f.call(null,G__27275));
})());
});
var G__27278__2 = (function (x,y){
return cljs.core.not((function (){var G__27276 = x;
var G__27277 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27276,G__27277) : f.call(null,G__27276,G__27277));
})());
});
var G__27278__3 = (function() { 
var G__27279__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__27279 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27279__delegate.call(this,x,y,zs);};
G__27279.cljs$lang$maxFixedArity = 2;
G__27279.cljs$lang$applyTo = (function (arglist__27280){
var x = cljs.core.first(arglist__27280);
arglist__27280 = cljs.core.next(arglist__27280);
var y = cljs.core.first(arglist__27280);
var zs = cljs.core.rest(arglist__27280);
return G__27279__delegate(x,y,zs);
});
G__27279.cljs$core$IFn$_invoke$arity$variadic = G__27279__delegate;
return G__27279;
})()
;
G__27278 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__27278__0.call(this);
case 1:
return G__27278__1.call(this,x);
case 2:
return G__27278__2.call(this,x,y);
default:
return G__27278__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27278.cljs$lang$maxFixedArity = 2;
G__27278.cljs$lang$applyTo = G__27278__3.cljs$lang$applyTo;
G__27278.cljs$core$IFn$_invoke$arity$0 = G__27278__0;
G__27278.cljs$core$IFn$_invoke$arity$1 = G__27278__1;
G__27278.cljs$core$IFn$_invoke$arity$2 = G__27278__2;
G__27278.cljs$core$IFn$_invoke$arity$variadic = G__27278__3.cljs$core$IFn$_invoke$arity$variadic;
return G__27278;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__27281__delegate = function (args){
return x;
};
var G__27281 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27281__delegate.call(this,args);};
G__27281.cljs$lang$maxFixedArity = 0;
G__27281.cljs$lang$applyTo = (function (arglist__27282){
var args = cljs.core.seq(arglist__27282);
return G__27281__delegate(args);
});
G__27281.cljs$core$IFn$_invoke$arity$variadic = G__27281__delegate;
return G__27281;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__27337 = null;
var G__27337__0 = (function (){
var G__27310 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27310) : f.call(null,G__27310));
});
var G__27337__1 = (function (x){
var G__27311 = (function (){var G__27312 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27312) : g.call(null,G__27312));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27311) : f.call(null,G__27311));
});
var G__27337__2 = (function (x,y){
var G__27313 = (function (){var G__27314 = x;
var G__27315 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__27314,G__27315) : g.call(null,G__27314,G__27315));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27313) : f.call(null,G__27313));
});
var G__27337__3 = (function (x,y,z){
var G__27316 = (function (){var G__27317 = x;
var G__27318 = y;
var G__27319 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__27317,G__27318,G__27319) : g.call(null,G__27317,G__27318,G__27319));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27316) : f.call(null,G__27316));
});
var G__27337__4 = (function() { 
var G__27338__delegate = function (x,y,z,args){
var G__27320 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27320) : f.call(null,G__27320));
};
var G__27338 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27338__delegate.call(this,x,y,z,args);};
G__27338.cljs$lang$maxFixedArity = 3;
G__27338.cljs$lang$applyTo = (function (arglist__27339){
var x = cljs.core.first(arglist__27339);
arglist__27339 = cljs.core.next(arglist__27339);
var y = cljs.core.first(arglist__27339);
arglist__27339 = cljs.core.next(arglist__27339);
var z = cljs.core.first(arglist__27339);
var args = cljs.core.rest(arglist__27339);
return G__27338__delegate(x,y,z,args);
});
G__27338.cljs$core$IFn$_invoke$arity$variadic = G__27338__delegate;
return G__27338;
})()
;
G__27337 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__27337__0.call(this);
case 1:
return G__27337__1.call(this,x);
case 2:
return G__27337__2.call(this,x,y);
case 3:
return G__27337__3.call(this,x,y,z);
default:
return G__27337__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27337.cljs$lang$maxFixedArity = 3;
G__27337.cljs$lang$applyTo = G__27337__4.cljs$lang$applyTo;
G__27337.cljs$core$IFn$_invoke$arity$0 = G__27337__0;
G__27337.cljs$core$IFn$_invoke$arity$1 = G__27337__1;
G__27337.cljs$core$IFn$_invoke$arity$2 = G__27337__2;
G__27337.cljs$core$IFn$_invoke$arity$3 = G__27337__3;
G__27337.cljs$core$IFn$_invoke$arity$variadic = G__27337__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27337;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__27340 = null;
var G__27340__0 = (function (){
var G__27321 = (function (){var G__27322 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27322) : g.call(null,G__27322));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27321) : f.call(null,G__27321));
});
var G__27340__1 = (function (x){
var G__27323 = (function (){var G__27324 = (function (){var G__27325 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__27325) : h.call(null,G__27325));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27324) : g.call(null,G__27324));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27323) : f.call(null,G__27323));
});
var G__27340__2 = (function (x,y){
var G__27326 = (function (){var G__27327 = (function (){var G__27328 = x;
var G__27329 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__27328,G__27329) : h.call(null,G__27328,G__27329));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27327) : g.call(null,G__27327));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27326) : f.call(null,G__27326));
});
var G__27340__3 = (function (x,y,z){
var G__27330 = (function (){var G__27331 = (function (){var G__27332 = x;
var G__27333 = y;
var G__27334 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__27332,G__27333,G__27334) : h.call(null,G__27332,G__27333,G__27334));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27331) : g.call(null,G__27331));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27330) : f.call(null,G__27330));
});
var G__27340__4 = (function() { 
var G__27341__delegate = function (x,y,z,args){
var G__27335 = (function (){var G__27336 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27336) : g.call(null,G__27336));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27335) : f.call(null,G__27335));
};
var G__27341 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27341__delegate.call(this,x,y,z,args);};
G__27341.cljs$lang$maxFixedArity = 3;
G__27341.cljs$lang$applyTo = (function (arglist__27342){
var x = cljs.core.first(arglist__27342);
arglist__27342 = cljs.core.next(arglist__27342);
var y = cljs.core.first(arglist__27342);
arglist__27342 = cljs.core.next(arglist__27342);
var z = cljs.core.first(arglist__27342);
var args = cljs.core.rest(arglist__27342);
return G__27341__delegate(x,y,z,args);
});
G__27341.cljs$core$IFn$_invoke$arity$variadic = G__27341__delegate;
return G__27341;
})()
;
G__27340 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__27340__0.call(this);
case 1:
return G__27340__1.call(this,x);
case 2:
return G__27340__2.call(this,x,y);
case 3:
return G__27340__3.call(this,x,y,z);
default:
return G__27340__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27340.cljs$lang$maxFixedArity = 3;
G__27340.cljs$lang$applyTo = G__27340__4.cljs$lang$applyTo;
G__27340.cljs$core$IFn$_invoke$arity$0 = G__27340__0;
G__27340.cljs$core$IFn$_invoke$arity$1 = G__27340__1;
G__27340.cljs$core$IFn$_invoke$arity$2 = G__27340__2;
G__27340.cljs$core$IFn$_invoke$arity$3 = G__27340__3;
G__27340.cljs$core$IFn$_invoke$arity$variadic = G__27340__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27340;
})()
});
var comp__4 = (function() { 
var G__27343__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));
return ((function (fs__$1){
return (function() { 
var G__27344__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);
var fs__$2 = cljs.core.next(fs__$1);
while(true){
if(fs__$2){
var G__27345 = cljs.core.first(fs__$2).call(null,ret);
var G__27346 = cljs.core.next(fs__$2);
ret = G__27345;
fs__$2 = G__27346;
continue;
} else {
return ret;
}
break;
}
};
var G__27344 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27344__delegate.call(this,args);};
G__27344.cljs$lang$maxFixedArity = 0;
G__27344.cljs$lang$applyTo = (function (arglist__27347){
var args = cljs.core.seq(arglist__27347);
return G__27344__delegate(args);
});
G__27344.cljs$core$IFn$_invoke$arity$variadic = G__27344__delegate;
return G__27344;
})()
;
;})(fs__$1))
};
var G__27343 = function (f1,f2,f3,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27343__delegate.call(this,f1,f2,f3,fs);};
G__27343.cljs$lang$maxFixedArity = 3;
G__27343.cljs$lang$applyTo = (function (arglist__27348){
var f1 = cljs.core.first(arglist__27348);
arglist__27348 = cljs.core.next(arglist__27348);
var f2 = cljs.core.first(arglist__27348);
arglist__27348 = cljs.core.next(arglist__27348);
var f3 = cljs.core.first(arglist__27348);
var fs = cljs.core.rest(arglist__27348);
return G__27343__delegate(f1,f2,f3,fs);
});
G__27343.cljs$core$IFn$_invoke$arity$variadic = G__27343__delegate;
return G__27343;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){
return f;
});
var partial__2 = (function (f,arg1){
return (function() {
var G__27433 = null;
var G__27433__0 = (function (){
var G__27391 = arg1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27391) : f.call(null,G__27391));
});
var G__27433__1 = (function (x){
var G__27392 = arg1;
var G__27393 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27392,G__27393) : f.call(null,G__27392,G__27393));
});
var G__27433__2 = (function (x,y){
var G__27394 = arg1;
var G__27395 = x;
var G__27396 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27394,G__27395,G__27396) : f.call(null,G__27394,G__27395,G__27396));
});
var G__27433__3 = (function (x,y,z){
var G__27397 = arg1;
var G__27398 = x;
var G__27399 = y;
var G__27400 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27397,G__27398,G__27399,G__27400) : f.call(null,G__27397,G__27398,G__27399,G__27400));
});
var G__27433__4 = (function() { 
var G__27434__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,x,y,z,cljs.core.array_seq([args], 0));
};
var G__27434 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27434__delegate.call(this,x,y,z,args);};
G__27434.cljs$lang$maxFixedArity = 3;
G__27434.cljs$lang$applyTo = (function (arglist__27435){
var x = cljs.core.first(arglist__27435);
arglist__27435 = cljs.core.next(arglist__27435);
var y = cljs.core.first(arglist__27435);
arglist__27435 = cljs.core.next(arglist__27435);
var z = cljs.core.first(arglist__27435);
var args = cljs.core.rest(arglist__27435);
return G__27434__delegate(x,y,z,args);
});
G__27434.cljs$core$IFn$_invoke$arity$variadic = G__27434__delegate;
return G__27434;
})()
;
G__27433 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__27433__0.call(this);
case 1:
return G__27433__1.call(this,x);
case 2:
return G__27433__2.call(this,x,y);
case 3:
return G__27433__3.call(this,x,y,z);
default:
return G__27433__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27433.cljs$lang$maxFixedArity = 3;
G__27433.cljs$lang$applyTo = G__27433__4.cljs$lang$applyTo;
G__27433.cljs$core$IFn$_invoke$arity$0 = G__27433__0;
G__27433.cljs$core$IFn$_invoke$arity$1 = G__27433__1;
G__27433.cljs$core$IFn$_invoke$arity$2 = G__27433__2;
G__27433.cljs$core$IFn$_invoke$arity$3 = G__27433__3;
G__27433.cljs$core$IFn$_invoke$arity$variadic = G__27433__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27433;
})()
});
var partial__3 = (function (f,arg1,arg2){
return (function() {
var G__27436 = null;
var G__27436__0 = (function (){
var G__27401 = arg1;
var G__27402 = arg2;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27401,G__27402) : f.call(null,G__27401,G__27402));
});
var G__27436__1 = (function (x){
var G__27403 = arg1;
var G__27404 = arg2;
var G__27405 = x;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27403,G__27404,G__27405) : f.call(null,G__27403,G__27404,G__27405));
});
var G__27436__2 = (function (x,y){
var G__27406 = arg1;
var G__27407 = arg2;
var G__27408 = x;
var G__27409 = y;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27406,G__27407,G__27408,G__27409) : f.call(null,G__27406,G__27407,G__27408,G__27409));
});
var G__27436__3 = (function (x,y,z){
var G__27410 = arg1;
var G__27411 = arg2;
var G__27412 = x;
var G__27413 = y;
var G__27414 = z;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__27410,G__27411,G__27412,G__27413,G__27414) : f.call(null,G__27410,G__27411,G__27412,G__27413,G__27414));
});
var G__27436__4 = (function() { 
var G__27437__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,x,y,cljs.core.array_seq([z,args], 0));
};
var G__27437 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27437__delegate.call(this,x,y,z,args);};
G__27437.cljs$lang$maxFixedArity = 3;
G__27437.cljs$lang$applyTo = (function (arglist__27438){
var x = cljs.core.first(arglist__27438);
arglist__27438 = cljs.core.next(arglist__27438);
var y = cljs.core.first(arglist__27438);
arglist__27438 = cljs.core.next(arglist__27438);
var z = cljs.core.first(arglist__27438);
var args = cljs.core.rest(arglist__27438);
return G__27437__delegate(x,y,z,args);
});
G__27437.cljs$core$IFn$_invoke$arity$variadic = G__27437__delegate;
return G__27437;
})()
;
G__27436 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__27436__0.call(this);
case 1:
return G__27436__1.call(this,x);
case 2:
return G__27436__2.call(this,x,y);
case 3:
return G__27436__3.call(this,x,y,z);
default:
return G__27436__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27436.cljs$lang$maxFixedArity = 3;
G__27436.cljs$lang$applyTo = G__27436__4.cljs$lang$applyTo;
G__27436.cljs$core$IFn$_invoke$arity$0 = G__27436__0;
G__27436.cljs$core$IFn$_invoke$arity$1 = G__27436__1;
G__27436.cljs$core$IFn$_invoke$arity$2 = G__27436__2;
G__27436.cljs$core$IFn$_invoke$arity$3 = G__27436__3;
G__27436.cljs$core$IFn$_invoke$arity$variadic = G__27436__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27436;
})()
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() {
var G__27439 = null;
var G__27439__0 = (function (){
var G__27415 = arg1;
var G__27416 = arg2;
var G__27417 = arg3;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27415,G__27416,G__27417) : f.call(null,G__27415,G__27416,G__27417));
});
var G__27439__1 = (function (x){
var G__27418 = arg1;
var G__27419 = arg2;
var G__27420 = arg3;
var G__27421 = x;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27418,G__27419,G__27420,G__27421) : f.call(null,G__27418,G__27419,G__27420,G__27421));
});
var G__27439__2 = (function (x,y){
var G__27422 = arg1;
var G__27423 = arg2;
var G__27424 = arg3;
var G__27425 = x;
var G__27426 = y;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__27422,G__27423,G__27424,G__27425,G__27426) : f.call(null,G__27422,G__27423,G__27424,G__27425,G__27426));
});
var G__27439__3 = (function (x,y,z){
var G__27427 = arg1;
var G__27428 = arg2;
var G__27429 = arg3;
var G__27430 = x;
var G__27431 = y;
var G__27432 = z;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__27427,G__27428,G__27429,G__27430,G__27431,G__27432) : f.call(null,G__27427,G__27428,G__27429,G__27430,G__27431,G__27432));
});
var G__27439__4 = (function() { 
var G__27440__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3,x,cljs.core.array_seq([y,z,args], 0));
};
var G__27440 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27440__delegate.call(this,x,y,z,args);};
G__27440.cljs$lang$maxFixedArity = 3;
G__27440.cljs$lang$applyTo = (function (arglist__27441){
var x = cljs.core.first(arglist__27441);
arglist__27441 = cljs.core.next(arglist__27441);
var y = cljs.core.first(arglist__27441);
arglist__27441 = cljs.core.next(arglist__27441);
var z = cljs.core.first(arglist__27441);
var args = cljs.core.rest(arglist__27441);
return G__27440__delegate(x,y,z,args);
});
G__27440.cljs$core$IFn$_invoke$arity$variadic = G__27440__delegate;
return G__27440;
})()
;
G__27439 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__27439__0.call(this);
case 1:
return G__27439__1.call(this,x);
case 2:
return G__27439__2.call(this,x,y);
case 3:
return G__27439__3.call(this,x,y,z);
default:
return G__27439__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27439.cljs$lang$maxFixedArity = 3;
G__27439.cljs$lang$applyTo = G__27439__4.cljs$lang$applyTo;
G__27439.cljs$core$IFn$_invoke$arity$0 = G__27439__0;
G__27439.cljs$core$IFn$_invoke$arity$1 = G__27439__1;
G__27439.cljs$core$IFn$_invoke$arity$2 = G__27439__2;
G__27439.cljs$core$IFn$_invoke$arity$3 = G__27439__3;
G__27439.cljs$core$IFn$_invoke$arity$variadic = G__27439__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27439;
})()
});
var partial__5 = (function() { 
var G__27442__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__27443__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__27443 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27443__delegate.call(this,args);};
G__27443.cljs$lang$maxFixedArity = 0;
G__27443.cljs$lang$applyTo = (function (arglist__27444){
var args = cljs.core.seq(arglist__27444);
return G__27443__delegate(args);
});
G__27443.cljs$core$IFn$_invoke$arity$variadic = G__27443__delegate;
return G__27443;
})()
;
};
var G__27442 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__27442__delegate.call(this,f,arg1,arg2,arg3,more);};
G__27442.cljs$lang$maxFixedArity = 4;
G__27442.cljs$lang$applyTo = (function (arglist__27445){
var f = cljs.core.first(arglist__27445);
arglist__27445 = cljs.core.next(arglist__27445);
var arg1 = cljs.core.first(arglist__27445);
arglist__27445 = cljs.core.next(arglist__27445);
var arg2 = cljs.core.first(arglist__27445);
arglist__27445 = cljs.core.next(arglist__27445);
var arg3 = cljs.core.first(arglist__27445);
var more = cljs.core.rest(arglist__27445);
return G__27442__delegate(f,arg1,arg2,arg3,more);
});
G__27442.cljs$core$IFn$_invoke$arity$variadic = G__27442__delegate;
return G__27442;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__27478 = null;
var G__27478__1 = (function (a){
var G__27462 = (((a == null))?x:a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27462) : f.call(null,G__27462));
});
var G__27478__2 = (function (a,b){
var G__27463 = (((a == null))?x:a);
var G__27464 = b;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27463,G__27464) : f.call(null,G__27463,G__27464));
});
var G__27478__3 = (function (a,b,c){
var G__27465 = (((a == null))?x:a);
var G__27466 = b;
var G__27467 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27465,G__27466,G__27467) : f.call(null,G__27465,G__27466,G__27467));
});
var G__27478__4 = (function() { 
var G__27479__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__27479 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27479__delegate.call(this,a,b,c,ds);};
G__27479.cljs$lang$maxFixedArity = 3;
G__27479.cljs$lang$applyTo = (function (arglist__27480){
var a = cljs.core.first(arglist__27480);
arglist__27480 = cljs.core.next(arglist__27480);
var b = cljs.core.first(arglist__27480);
arglist__27480 = cljs.core.next(arglist__27480);
var c = cljs.core.first(arglist__27480);
var ds = cljs.core.rest(arglist__27480);
return G__27479__delegate(a,b,c,ds);
});
G__27479.cljs$core$IFn$_invoke$arity$variadic = G__27479__delegate;
return G__27479;
})()
;
G__27478 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__27478__1.call(this,a);
case 2:
return G__27478__2.call(this,a,b);
case 3:
return G__27478__3.call(this,a,b,c);
default:
return G__27478__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27478.cljs$lang$maxFixedArity = 3;
G__27478.cljs$lang$applyTo = G__27478__4.cljs$lang$applyTo;
G__27478.cljs$core$IFn$_invoke$arity$1 = G__27478__1;
G__27478.cljs$core$IFn$_invoke$arity$2 = G__27478__2;
G__27478.cljs$core$IFn$_invoke$arity$3 = G__27478__3;
G__27478.cljs$core$IFn$_invoke$arity$variadic = G__27478__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27478;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__27481 = null;
var G__27481__2 = (function (a,b){
var G__27468 = (((a == null))?x:a);
var G__27469 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27468,G__27469) : f.call(null,G__27468,G__27469));
});
var G__27481__3 = (function (a,b,c){
var G__27470 = (((a == null))?x:a);
var G__27471 = (((b == null))?y:b);
var G__27472 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27470,G__27471,G__27472) : f.call(null,G__27470,G__27471,G__27472));
});
var G__27481__4 = (function() { 
var G__27482__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__27482 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27482__delegate.call(this,a,b,c,ds);};
G__27482.cljs$lang$maxFixedArity = 3;
G__27482.cljs$lang$applyTo = (function (arglist__27483){
var a = cljs.core.first(arglist__27483);
arglist__27483 = cljs.core.next(arglist__27483);
var b = cljs.core.first(arglist__27483);
arglist__27483 = cljs.core.next(arglist__27483);
var c = cljs.core.first(arglist__27483);
var ds = cljs.core.rest(arglist__27483);
return G__27482__delegate(a,b,c,ds);
});
G__27482.cljs$core$IFn$_invoke$arity$variadic = G__27482__delegate;
return G__27482;
})()
;
G__27481 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__27481__2.call(this,a,b);
case 3:
return G__27481__3.call(this,a,b,c);
default:
return G__27481__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27481.cljs$lang$maxFixedArity = 3;
G__27481.cljs$lang$applyTo = G__27481__4.cljs$lang$applyTo;
G__27481.cljs$core$IFn$_invoke$arity$2 = G__27481__2;
G__27481.cljs$core$IFn$_invoke$arity$3 = G__27481__3;
G__27481.cljs$core$IFn$_invoke$arity$variadic = G__27481__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27481;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__27484 = null;
var G__27484__2 = (function (a,b){
var G__27473 = (((a == null))?x:a);
var G__27474 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27473,G__27474) : f.call(null,G__27473,G__27474));
});
var G__27484__3 = (function (a,b,c){
var G__27475 = (((a == null))?x:a);
var G__27476 = (((b == null))?y:b);
var G__27477 = (((c == null))?z:c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27475,G__27476,G__27477) : f.call(null,G__27475,G__27476,G__27477));
});
var G__27484__4 = (function() { 
var G__27485__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__27485 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27485__delegate.call(this,a,b,c,ds);};
G__27485.cljs$lang$maxFixedArity = 3;
G__27485.cljs$lang$applyTo = (function (arglist__27486){
var a = cljs.core.first(arglist__27486);
arglist__27486 = cljs.core.next(arglist__27486);
var b = cljs.core.first(arglist__27486);
arglist__27486 = cljs.core.next(arglist__27486);
var c = cljs.core.first(arglist__27486);
var ds = cljs.core.rest(arglist__27486);
return G__27485__delegate(a,b,c,ds);
});
G__27485.cljs$core$IFn$_invoke$arity$variadic = G__27485__delegate;
return G__27485;
})()
;
G__27484 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__27484__2.call(this,a,b);
case 3:
return G__27484__3.call(this,a,b,c);
default:
return G__27484__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27484.cljs$lang$maxFixedArity = 3;
G__27484.cljs$lang$applyTo = G__27484__4.cljs$lang$applyTo;
G__27484.cljs$core$IFn$_invoke$arity$2 = G__27484__2;
G__27484.cljs$core$IFn$_invoke$arity$3 = G__27484__3;
G__27484.cljs$core$IFn$_invoke$arity$variadic = G__27484__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27484;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4608__auto___27535 = size;
var i_27536 = (0);
while(true){
if((i_27536 < n__4608__auto___27535)){
cljs.core.chunk_append(b,(function (){var G__27531 = (idx + i_27536);
var G__27532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_27536);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27531,G__27532) : f.call(null,G__27531,G__27532));
})());

var G__27537 = (i_27536 + (1));
i_27536 = G__27537;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__27533 = idx;
var G__27534 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27533,G__27534) : f.call(null,G__27533,G__27534));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){
return (function (rf){
return (function() {
var G__27556 = null;
var G__27556__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__27556__1 = (function (result){
var G__27550 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__27550) : rf.call(null,G__27550));
});
var G__27556__2 = (function (result,input){
var v = (function (){var G__27551 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27551) : f.call(null,G__27551));
})();
if((v == null)){
return result;
} else {
var G__27552 = result;
var G__27553 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__27552,G__27553) : rf.call(null,G__27552,G__27553));
}
});
G__27556 = function(result,input){
switch(arguments.length){
case 0:
return G__27556__0.call(this);
case 1:
return G__27556__1.call(this,result);
case 2:
return G__27556__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27556.cljs$core$IFn$_invoke$arity$0 = G__27556__0;
G__27556.cljs$core$IFn$_invoke$arity$1 = G__27556__1;
G__27556.cljs$core$IFn$_invoke$arity$2 = G__27556__2;
return G__27556;
})()
});
});
var keep__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4608__auto___27557 = size;
var i_27558 = (0);
while(true){
if((i_27558 < n__4608__auto___27557)){
var x_27559 = (function (){var G__27554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_27558);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27554) : f.call(null,G__27554));
})();
if((x_27559 == null)){
} else {
cljs.core.chunk_append(b,x_27559);
}

var G__27560 = (i_27558 + (1));
i_27558 = G__27560;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__27555 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27555) : f.call(null,G__27555));
})();
if((x == null)){
return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else {
return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__27561 = this$__$1;
return goog.getUid(G__27561);
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__27562 = cljs.core.seq(self__.watches);
var chunk__27563 = null;
var count__27564 = (0);
var i__27565 = (0);
while(true){
if((i__27565 < count__27564)){
var vec__27566 = chunk__27563.cljs$core$IIndexed$_nth$arity$2(null,i__27565);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(1),null);
var G__27567_27576 = key;
var G__27568_27577 = this$__$1;
var G__27569_27578 = oldval;
var G__27570_27579 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27567_27576,G__27568_27577,G__27569_27578,G__27570_27579) : f.call(null,G__27567_27576,G__27568_27577,G__27569_27578,G__27570_27579));

var G__27580 = seq__27562;
var G__27581 = chunk__27563;
var G__27582 = count__27564;
var G__27583 = (i__27565 + (1));
seq__27562 = G__27580;
chunk__27563 = G__27581;
count__27564 = G__27582;
i__27565 = G__27583;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__27562);
if(temp__4126__auto__){
var seq__27562__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27562__$1)){
var c__4508__auto__ = cljs.core.chunk_first(seq__27562__$1);
var G__27584 = cljs.core.chunk_rest(seq__27562__$1);
var G__27585 = c__4508__auto__;
var G__27586 = cljs.core.count(c__4508__auto__);
var G__27587 = (0);
seq__27562 = G__27584;
chunk__27563 = G__27585;
count__27564 = G__27586;
i__27565 = G__27587;
continue;
} else {
var vec__27571 = cljs.core.first(seq__27562__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27571,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27571,(1),null);
var G__27572_27588 = key;
var G__27573_27589 = this$__$1;
var G__27574_27590 = oldval;
var G__27575_27591 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27572_27588,G__27573_27589,G__27574_27590,G__27575_27591) : f.call(null,G__27572_27588,G__27573_27589,G__27574_27590,G__27575_27591));

var G__27592 = cljs.core.next(seq__27562__$1);
var G__27593 = null;
var G__27594 = (0);
var G__27595 = (0);
seq__27562 = G__27592;
chunk__27563 = G__27593;
count__27564 = G__27594;
i__27565 = G__27595;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);

return this$__$1;
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

cljs.core.Atom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Atom.cljs$lang$type = true;

cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";

cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Atom");
});

cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){
return (new cljs.core.Atom(state,meta,validator,watches));
});

/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__27599__delegate = function (x,p__27596){
var map__27598 = p__27596;
var map__27598__$1 = ((cljs.core.seq_QMARK_(map__27598))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27598):map__27598);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27598__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27598__$1,cljs.core.constant$keyword$3);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__27599 = function (x,var_args){
var p__27596 = null;
if (arguments.length > 1) {
  p__27596 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27599__delegate.call(this,x,p__27596);};
G__27599.cljs$lang$maxFixedArity = 1;
G__27599.cljs$lang$applyTo = (function (arglist__27600){
var x = cljs.core.first(arglist__27600);
var p__27596 = cljs.core.rest(arglist__27600);
return G__27599__delegate(x,p__27596);
});
G__27599.cljs$core$IFn$_invoke$arity$variadic = G__27599__delegate;
return G__27599;
})()
;
atom = function(x,var_args){
var p__27596 = var_args;
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
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
if((a instanceof cljs.core.Atom)){
var validate = a.validator;
if((validate == null)){
} else {
if(cljs.core.truth_((function (){var G__27603 = new_value;
return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__27603) : validate.call(null,G__27603));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str((function (){var G__27604 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));
return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__27604) : cljs.core.pr_str.call(null,G__27604));
})())].join('')));
}
}

var old_value = a.state;
a.state = new_value;

if((a.watches == null)){
} else {
cljs.core._notify_watches(a,old_value,new_value);
}

return new_value;
} else {
return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__27611 = a.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27611) : f.call(null,G__27611));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__27612 = a.state;
var G__27613 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27612,G__27613) : f.call(null,G__27612,G__27613));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__27614 = a.state;
var G__27615 = x;
var G__27616 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27614,G__27615,G__27616) : f.call(null,G__27614,G__27615,G__27616));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__27617__delegate = function (a,f,x,y,more){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__27617 = function (a,f,x,y,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__27617__delegate.call(this,a,f,x,y,more);};
G__27617.cljs$lang$maxFixedArity = 4;
G__27617.cljs$lang$applyTo = (function (arglist__27618){
var a = cljs.core.first(arglist__27618);
arglist__27618 = cljs.core.next(arglist__27618);
var f = cljs.core.first(arglist__27618);
arglist__27618 = cljs.core.next(arglist__27618);
var x = cljs.core.first(arglist__27618);
arglist__27618 = cljs.core.next(arglist__27618);
var y = cljs.core.first(arglist__27618);
var more = cljs.core.rest(arglist__27618);
return G__27617__delegate(a,f,x,y,more);
});
G__27617.cljs$core$IFn$_invoke$arity$variadic = G__27617__delegate;
return G__27617;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is equal to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.cljs$core$IDeref$_deref$arity$1(null),oldval)){
cljs.core.reset_BANG_(a,newval);

return true;
} else {
return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});

/**
* @constructor
*/
cljs.core.Volatile = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Volatile.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Volatile.prototype.cljs$core$IVolatile$ = true;

cljs.core.Volatile.prototype.cljs$core$IVolatile$_vreset_BANG_$arity$2 = (function (_,new_state){
var self__ = this;
var ___$1 = this;
return self__.state = new_state;
});

cljs.core.Volatile.cljs$lang$type = true;

cljs.core.Volatile.cljs$lang$ctorStr = "cljs.core/Volatile";

cljs.core.Volatile.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Volatile");
});

cljs.core.__GT_Volatile = (function __GT_Volatile(state){
return (new cljs.core.Volatile(state));
});

/**
* Creates and returns a Volatile with an initial value of val.
*/
cljs.core.volatile_BANG_ = (function volatile_BANG_(val){
return (new cljs.core.Volatile(val));
});
/**
* Returns true if x is a volatile.
*/
cljs.core.volatile_QMARK_ = (function volatile_QMARK_(x){
return (x instanceof cljs.core.Volatile);
});
/**
* Sets the value of volatile to newval without regard for the
* current value. Returns newval.
*/
cljs.core.vreset_BANG_ = (function vreset_BANG_(vol,newval){
return cljs.core._vreset_BANG_(vol,newval);
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__27685 = null;
var G__27685__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__27685__1 = (function (result){
var G__27652 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__27652) : rf.call(null,G__27652));
});
var G__27685__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
var v = (function (){var G__27653 = i;
var G__27654 = input;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27653,G__27654) : f.call(null,G__27653,G__27654));
})();
if((v == null)){
return result;
} else {
var G__27655 = result;
var G__27656 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__27655,G__27656) : rf.call(null,G__27655,G__27656));
}
});
G__27685 = function(result,input){
switch(arguments.length){
case 0:
return G__27685__0.call(this);
case 1:
return G__27685__1.call(this,result);
case 2:
return G__27685__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27685.cljs$core$IFn$_invoke$arity$0 = G__27685__0;
G__27685.cljs$core$IFn$_invoke$arity$1 = G__27685__1;
G__27685.cljs$core$IFn$_invoke$arity$2 = G__27685__2;
return G__27685;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4608__auto___27686 = size;
var i_27687 = (0);
while(true){
if((i_27687 < n__4608__auto___27686)){
var x_27688 = (function (){var G__27681 = (idx + i_27687);
var G__27682 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_27687);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27681,G__27682) : f.call(null,G__27681,G__27682));
})();
if((x_27688 == null)){
} else {
cljs.core.chunk_append(b,x_27688);
}

var G__27689 = (i_27687 + (1));
i_27687 = G__27689;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__27683 = idx;
var G__27684 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27683,G__27684) : f.call(null,G__27683,G__27684));
})();
if((x == null)){
return keepi((idx + (1)),cljs.core.rest(s));
} else {
return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((function (){var G__27903 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27903) : p.call(null,G__27903));
})());
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3709__auto__ = (function (){var G__27905 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27905) : p.call(null,G__27905));
})();
if(cljs.core.truth_(and__3709__auto__)){
var G__27906 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27906) : p.call(null,G__27906));
} else {
return and__3709__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3709__auto__ = (function (){var G__27908 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27908) : p.call(null,G__27908));
})();
if(cljs.core.truth_(and__3709__auto__)){
var and__3709__auto____$1 = (function (){var G__27910 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27910) : p.call(null,G__27910));
})();
if(cljs.core.truth_(and__3709__auto____$1)){
var G__27911 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27911) : p.call(null,G__27911));
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__28080__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__28080 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28080__delegate.call(this,x,y,z,args);};
G__28080.cljs$lang$maxFixedArity = 3;
G__28080.cljs$lang$applyTo = (function (arglist__28081){
var x = cljs.core.first(arglist__28081);
arglist__28081 = cljs.core.next(arglist__28081);
var y = cljs.core.first(arglist__28081);
arglist__28081 = cljs.core.next(arglist__28081);
var z = cljs.core.first(arglist__28081);
var args = cljs.core.rest(arglist__28081);
return G__28080__delegate(x,y,z,args);
});
G__28080.cljs$core$IFn$_invoke$arity$variadic = G__28080__delegate;
return G__28080;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3709__auto__ = (function (){var G__27943 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27943) : p1.call(null,G__27943));
})();
if(cljs.core.truth_(and__3709__auto__)){
var G__27944 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27944) : p2.call(null,G__27944));
} else {
return and__3709__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3709__auto__ = (function (){var G__27946 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27946) : p1.call(null,G__27946));
})();
if(cljs.core.truth_(and__3709__auto__)){
var and__3709__auto____$1 = (function (){var G__27948 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27948) : p1.call(null,G__27948));
})();
if(cljs.core.truth_(and__3709__auto____$1)){
var and__3709__auto____$2 = (function (){var G__27950 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27950) : p2.call(null,G__27950));
})();
if(cljs.core.truth_(and__3709__auto____$2)){
var G__27951 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27951) : p2.call(null,G__27951));
} else {
return and__3709__auto____$2;
}
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3709__auto__ = (function (){var G__27953 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27953) : p1.call(null,G__27953));
})();
if(cljs.core.truth_(and__3709__auto__)){
var and__3709__auto____$1 = (function (){var G__27955 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27955) : p1.call(null,G__27955));
})();
if(cljs.core.truth_(and__3709__auto____$1)){
var and__3709__auto____$2 = (function (){var G__27957 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27957) : p1.call(null,G__27957));
})();
if(cljs.core.truth_(and__3709__auto____$2)){
var and__3709__auto____$3 = (function (){var G__27959 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27959) : p2.call(null,G__27959));
})();
if(cljs.core.truth_(and__3709__auto____$3)){
var and__3709__auto____$4 = (function (){var G__27961 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27961) : p2.call(null,G__27961));
})();
if(cljs.core.truth_(and__3709__auto____$4)){
var G__27962 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27962) : p2.call(null,G__27962));
} else {
return and__3709__auto____$4;
}
} else {
return and__3709__auto____$3;
}
} else {
return and__3709__auto____$2;
}
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__28082__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__27690_SHARP_){
var and__3709__auto__ = (function (){var G__27967 = p1__27690_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27967) : p1.call(null,G__27967));
})();
if(cljs.core.truth_(and__3709__auto__)){
var G__27968 = p1__27690_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27968) : p2.call(null,G__27968));
} else {
return and__3709__auto__;
}
}),args)));
};
var G__28082 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28082__delegate.call(this,x,y,z,args);};
G__28082.cljs$lang$maxFixedArity = 3;
G__28082.cljs$lang$applyTo = (function (arglist__28083){
var x = cljs.core.first(arglist__28083);
arglist__28083 = cljs.core.next(arglist__28083);
var y = cljs.core.first(arglist__28083);
arglist__28083 = cljs.core.next(arglist__28083);
var z = cljs.core.first(arglist__28083);
var args = cljs.core.rest(arglist__28083);
return G__28082__delegate(x,y,z,args);
});
G__28082.cljs$core$IFn$_invoke$arity$variadic = G__28082__delegate;
return G__28082;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3709__auto__ = (function (){var G__28014 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28014) : p1.call(null,G__28014));
})();
if(cljs.core.truth_(and__3709__auto__)){
var and__3709__auto____$1 = (function (){var G__28016 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28016) : p2.call(null,G__28016));
})();
if(cljs.core.truth_(and__3709__auto____$1)){
var G__28017 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28017) : p3.call(null,G__28017));
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3709__auto__ = (function (){var G__28019 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28019) : p1.call(null,G__28019));
})();
if(cljs.core.truth_(and__3709__auto__)){
var and__3709__auto____$1 = (function (){var G__28021 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28021) : p2.call(null,G__28021));
})();
if(cljs.core.truth_(and__3709__auto____$1)){
var and__3709__auto____$2 = (function (){var G__28023 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28023) : p3.call(null,G__28023));
})();
if(cljs.core.truth_(and__3709__auto____$2)){
var and__3709__auto____$3 = (function (){var G__28025 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28025) : p1.call(null,G__28025));
})();
if(cljs.core.truth_(and__3709__auto____$3)){
var and__3709__auto____$4 = (function (){var G__28027 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28027) : p2.call(null,G__28027));
})();
if(cljs.core.truth_(and__3709__auto____$4)){
var G__28028 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28028) : p3.call(null,G__28028));
} else {
return and__3709__auto____$4;
}
} else {
return and__3709__auto____$3;
}
} else {
return and__3709__auto____$2;
}
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3709__auto__ = (function (){var G__28030 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28030) : p1.call(null,G__28030));
})();
if(cljs.core.truth_(and__3709__auto__)){
var and__3709__auto____$1 = (function (){var G__28032 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28032) : p2.call(null,G__28032));
})();
if(cljs.core.truth_(and__3709__auto____$1)){
var and__3709__auto____$2 = (function (){var G__28034 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28034) : p3.call(null,G__28034));
})();
if(cljs.core.truth_(and__3709__auto____$2)){
var and__3709__auto____$3 = (function (){var G__28036 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28036) : p1.call(null,G__28036));
})();
if(cljs.core.truth_(and__3709__auto____$3)){
var and__3709__auto____$4 = (function (){var G__28038 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28038) : p2.call(null,G__28038));
})();
if(cljs.core.truth_(and__3709__auto____$4)){
var and__3709__auto____$5 = (function (){var G__28040 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28040) : p3.call(null,G__28040));
})();
if(cljs.core.truth_(and__3709__auto____$5)){
var and__3709__auto____$6 = (function (){var G__28042 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28042) : p1.call(null,G__28042));
})();
if(cljs.core.truth_(and__3709__auto____$6)){
var and__3709__auto____$7 = (function (){var G__28044 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28044) : p2.call(null,G__28044));
})();
if(cljs.core.truth_(and__3709__auto____$7)){
var G__28045 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28045) : p3.call(null,G__28045));
} else {
return and__3709__auto____$7;
}
} else {
return and__3709__auto____$6;
}
} else {
return and__3709__auto____$5;
}
} else {
return and__3709__auto____$4;
}
} else {
return and__3709__auto____$3;
}
} else {
return and__3709__auto____$2;
}
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__28084__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__27691_SHARP_){
var and__3709__auto__ = (function (){var G__28052 = p1__27691_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28052) : p1.call(null,G__28052));
})();
if(cljs.core.truth_(and__3709__auto__)){
var and__3709__auto____$1 = (function (){var G__28054 = p1__27691_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28054) : p2.call(null,G__28054));
})();
if(cljs.core.truth_(and__3709__auto____$1)){
var G__28055 = p1__27691_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28055) : p3.call(null,G__28055));
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
}),args)));
};
var G__28084 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28084__delegate.call(this,x,y,z,args);};
G__28084.cljs$lang$maxFixedArity = 3;
G__28084.cljs$lang$applyTo = (function (arglist__28085){
var x = cljs.core.first(arglist__28085);
arglist__28085 = cljs.core.next(arglist__28085);
var y = cljs.core.first(arglist__28085);
arglist__28085 = cljs.core.next(arglist__28085);
var z = cljs.core.first(arglist__28085);
var args = cljs.core.rest(arglist__28085);
return G__28084__delegate(x,y,z,args);
});
G__28084.cljs$core$IFn$_invoke$arity$variadic = G__28084__delegate;
return G__28084;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__28086__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27692_SHARP_){
var G__28071 = x;
return (p1__27692_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27692_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28071) : p1__27692_SHARP_.call(null,G__28071));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27693_SHARP_){
var and__3709__auto__ = (function (){var G__28073 = x;
return (p1__27693_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27693_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28073) : p1__27693_SHARP_.call(null,G__28073));
})();
if(cljs.core.truth_(and__3709__auto__)){
var G__28074 = y;
return (p1__27693_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27693_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28074) : p1__27693_SHARP_.call(null,G__28074));
} else {
return and__3709__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27694_SHARP_){
var and__3709__auto__ = (function (){var G__28076 = x;
return (p1__27694_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27694_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28076) : p1__27694_SHARP_.call(null,G__28076));
})();
if(cljs.core.truth_(and__3709__auto__)){
var and__3709__auto____$1 = (function (){var G__28078 = y;
return (p1__27694_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27694_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28078) : p1__27694_SHARP_.call(null,G__28078));
})();
if(cljs.core.truth_(and__3709__auto____$1)){
var G__28079 = z;
return (p1__27694_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27694_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28079) : p1__27694_SHARP_.call(null,G__28079));
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__28087__delegate = function (x,y,z,args){
return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27695_SHARP_){
return cljs.core.every_QMARK_(p1__27695_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__28087 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28087__delegate.call(this,x,y,z,args);};
G__28087.cljs$lang$maxFixedArity = 3;
G__28087.cljs$lang$applyTo = (function (arglist__28088){
var x = cljs.core.first(arglist__28088);
arglist__28088 = cljs.core.next(arglist__28088);
var y = cljs.core.first(arglist__28088);
arglist__28088 = cljs.core.next(arglist__28088);
var z = cljs.core.first(arglist__28088);
var args = cljs.core.rest(arglist__28088);
return G__28087__delegate(x,y,z,args);
});
G__28087.cljs$core$IFn$_invoke$arity$variadic = G__28087__delegate;
return G__28087;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__28086 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28086__delegate.call(this,p1,p2,p3,ps);};
G__28086.cljs$lang$maxFixedArity = 3;
G__28086.cljs$lang$applyTo = (function (arglist__28089){
var p1 = cljs.core.first(arglist__28089);
arglist__28089 = cljs.core.next(arglist__28089);
var p2 = cljs.core.first(arglist__28089);
arglist__28089 = cljs.core.next(arglist__28089);
var p3 = cljs.core.first(arglist__28089);
var ps = cljs.core.rest(arglist__28089);
return G__28086__delegate(p1,p2,p3,ps);
});
G__28086.cljs$core$IFn$_invoke$arity$variadic = G__28086__delegate;
return G__28086;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
var G__28295 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28295) : p.call(null,G__28295));
});
var sp1__2 = (function (x,y){
var or__3721__auto__ = (function (){var G__28297 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28297) : p.call(null,G__28297));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var G__28298 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28298) : p.call(null,G__28298));
}
});
var sp1__3 = (function (x,y,z){
var or__3721__auto__ = (function (){var G__28300 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28300) : p.call(null,G__28300));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (function (){var G__28302 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28302) : p.call(null,G__28302));
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var G__28303 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28303) : p.call(null,G__28303));
}
}
});
var sp1__4 = (function() { 
var G__28464__delegate = function (x,y,z,args){
var or__3721__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.some(p,args);
}
};
var G__28464 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28464__delegate.call(this,x,y,z,args);};
G__28464.cljs$lang$maxFixedArity = 3;
G__28464.cljs$lang$applyTo = (function (arglist__28465){
var x = cljs.core.first(arglist__28465);
arglist__28465 = cljs.core.next(arglist__28465);
var y = cljs.core.first(arglist__28465);
arglist__28465 = cljs.core.next(arglist__28465);
var z = cljs.core.first(arglist__28465);
var args = cljs.core.rest(arglist__28465);
return G__28464__delegate(x,y,z,args);
});
G__28464.cljs$core$IFn$_invoke$arity$variadic = G__28464__delegate;
return G__28464;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3721__auto__ = (function (){var G__28335 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28335) : p1.call(null,G__28335));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var G__28336 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28336) : p2.call(null,G__28336));
}
});
var sp2__2 = (function (x,y){
var or__3721__auto__ = (function (){var G__28338 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28338) : p1.call(null,G__28338));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (function (){var G__28340 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28340) : p1.call(null,G__28340));
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var or__3721__auto____$2 = (function (){var G__28342 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28342) : p2.call(null,G__28342));
})();
if(cljs.core.truth_(or__3721__auto____$2)){
return or__3721__auto____$2;
} else {
var G__28343 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28343) : p2.call(null,G__28343));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3721__auto__ = (function (){var G__28345 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28345) : p1.call(null,G__28345));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (function (){var G__28347 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28347) : p1.call(null,G__28347));
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var or__3721__auto____$2 = (function (){var G__28349 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28349) : p1.call(null,G__28349));
})();
if(cljs.core.truth_(or__3721__auto____$2)){
return or__3721__auto____$2;
} else {
var or__3721__auto____$3 = (function (){var G__28351 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28351) : p2.call(null,G__28351));
})();
if(cljs.core.truth_(or__3721__auto____$3)){
return or__3721__auto____$3;
} else {
var or__3721__auto____$4 = (function (){var G__28353 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28353) : p2.call(null,G__28353));
})();
if(cljs.core.truth_(or__3721__auto____$4)){
return or__3721__auto____$4;
} else {
var G__28354 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28354) : p2.call(null,G__28354));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__28466__delegate = function (x,y,z,args){
var or__3721__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.some(((function (or__3721__auto__){
return (function (p1__28090_SHARP_){
var or__3721__auto____$1 = (function (){var G__28356 = p1__28090_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28356) : p1.call(null,G__28356));
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var G__28357 = p1__28090_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28357) : p2.call(null,G__28357));
}
});})(or__3721__auto__))
,args);
}
};
var G__28466 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28466__delegate.call(this,x,y,z,args);};
G__28466.cljs$lang$maxFixedArity = 3;
G__28466.cljs$lang$applyTo = (function (arglist__28467){
var x = cljs.core.first(arglist__28467);
arglist__28467 = cljs.core.next(arglist__28467);
var y = cljs.core.first(arglist__28467);
arglist__28467 = cljs.core.next(arglist__28467);
var z = cljs.core.first(arglist__28467);
var args = cljs.core.rest(arglist__28467);
return G__28466__delegate(x,y,z,args);
});
G__28466.cljs$core$IFn$_invoke$arity$variadic = G__28466__delegate;
return G__28466;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3721__auto__ = (function (){var G__28403 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28403) : p1.call(null,G__28403));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (function (){var G__28405 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28405) : p2.call(null,G__28405));
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var G__28406 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28406) : p3.call(null,G__28406));
}
}
});
var sp3__2 = (function (x,y){
var or__3721__auto__ = (function (){var G__28408 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28408) : p1.call(null,G__28408));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (function (){var G__28410 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28410) : p2.call(null,G__28410));
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var or__3721__auto____$2 = (function (){var G__28412 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28412) : p3.call(null,G__28412));
})();
if(cljs.core.truth_(or__3721__auto____$2)){
return or__3721__auto____$2;
} else {
var or__3721__auto____$3 = (function (){var G__28414 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28414) : p1.call(null,G__28414));
})();
if(cljs.core.truth_(or__3721__auto____$3)){
return or__3721__auto____$3;
} else {
var or__3721__auto____$4 = (function (){var G__28416 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28416) : p2.call(null,G__28416));
})();
if(cljs.core.truth_(or__3721__auto____$4)){
return or__3721__auto____$4;
} else {
var G__28417 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28417) : p3.call(null,G__28417));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3721__auto__ = (function (){var G__28419 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28419) : p1.call(null,G__28419));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (function (){var G__28421 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28421) : p2.call(null,G__28421));
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var or__3721__auto____$2 = (function (){var G__28423 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28423) : p3.call(null,G__28423));
})();
if(cljs.core.truth_(or__3721__auto____$2)){
return or__3721__auto____$2;
} else {
var or__3721__auto____$3 = (function (){var G__28425 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28425) : p1.call(null,G__28425));
})();
if(cljs.core.truth_(or__3721__auto____$3)){
return or__3721__auto____$3;
} else {
var or__3721__auto____$4 = (function (){var G__28427 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28427) : p2.call(null,G__28427));
})();
if(cljs.core.truth_(or__3721__auto____$4)){
return or__3721__auto____$4;
} else {
var or__3721__auto____$5 = (function (){var G__28429 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28429) : p3.call(null,G__28429));
})();
if(cljs.core.truth_(or__3721__auto____$5)){
return or__3721__auto____$5;
} else {
var or__3721__auto____$6 = (function (){var G__28431 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28431) : p1.call(null,G__28431));
})();
if(cljs.core.truth_(or__3721__auto____$6)){
return or__3721__auto____$6;
} else {
var or__3721__auto____$7 = (function (){var G__28433 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28433) : p2.call(null,G__28433));
})();
if(cljs.core.truth_(or__3721__auto____$7)){
return or__3721__auto____$7;
} else {
var G__28434 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28434) : p3.call(null,G__28434));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__28468__delegate = function (x,y,z,args){
var or__3721__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.some(((function (or__3721__auto__){
return (function (p1__28091_SHARP_){
var or__3721__auto____$1 = (function (){var G__28436 = p1__28091_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28436) : p1.call(null,G__28436));
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var or__3721__auto____$2 = (function (){var G__28438 = p1__28091_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28438) : p2.call(null,G__28438));
})();
if(cljs.core.truth_(or__3721__auto____$2)){
return or__3721__auto____$2;
} else {
var G__28439 = p1__28091_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28439) : p3.call(null,G__28439));
}
}
});})(or__3721__auto__))
,args);
}
};
var G__28468 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28468__delegate.call(this,x,y,z,args);};
G__28468.cljs$lang$maxFixedArity = 3;
G__28468.cljs$lang$applyTo = (function (arglist__28469){
var x = cljs.core.first(arglist__28469);
arglist__28469 = cljs.core.next(arglist__28469);
var y = cljs.core.first(arglist__28469);
arglist__28469 = cljs.core.next(arglist__28469);
var z = cljs.core.first(arglist__28469);
var args = cljs.core.rest(arglist__28469);
return G__28468__delegate(x,y,z,args);
});
G__28468.cljs$core$IFn$_invoke$arity$variadic = G__28468__delegate;
return G__28468;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__28470__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some(((function (ps__$1){
return (function (p1__28092_SHARP_){
var G__28455 = x;
return (p1__28092_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28092_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28455) : p1__28092_SHARP_.call(null,G__28455));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some(((function (ps__$1){
return (function (p1__28093_SHARP_){
var or__3721__auto__ = (function (){var G__28457 = x;
return (p1__28093_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28093_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28457) : p1__28093_SHARP_.call(null,G__28457));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var G__28458 = y;
return (p1__28093_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28093_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28458) : p1__28093_SHARP_.call(null,G__28458));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some(((function (ps__$1){
return (function (p1__28094_SHARP_){
var or__3721__auto__ = (function (){var G__28460 = x;
return (p1__28094_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28094_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28460) : p1__28094_SHARP_.call(null,G__28460));
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (function (){var G__28462 = y;
return (p1__28094_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28094_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28462) : p1__28094_SHARP_.call(null,G__28462));
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var G__28463 = z;
return (p1__28094_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28094_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28463) : p1__28094_SHARP_.call(null,G__28463));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__28471__delegate = function (x,y,z,args){
var or__3721__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.some(((function (or__3721__auto__,ps__$1){
return (function (p1__28095_SHARP_){
return cljs.core.some(p1__28095_SHARP_,args);
});})(or__3721__auto__,ps__$1))
,ps__$1);
}
};
var G__28471 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28471__delegate.call(this,x,y,z,args);};
G__28471.cljs$lang$maxFixedArity = 3;
G__28471.cljs$lang$applyTo = (function (arglist__28472){
var x = cljs.core.first(arglist__28472);
arglist__28472 = cljs.core.next(arglist__28472);
var y = cljs.core.first(arglist__28472);
arglist__28472 = cljs.core.next(arglist__28472);
var z = cljs.core.first(arglist__28472);
var args = cljs.core.rest(arglist__28472);
return G__28471__delegate(x,y,z,args);
});
G__28471.cljs$core$IFn$_invoke$arity$variadic = G__28471__delegate;
return G__28471;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__28470 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28470__delegate.call(this,p1,p2,p3,ps);};
G__28470.cljs$lang$maxFixedArity = 3;
G__28470.cljs$lang$applyTo = (function (arglist__28473){
var p1 = cljs.core.first(arglist__28473);
arglist__28473 = cljs.core.next(arglist__28473);
var p2 = cljs.core.first(arglist__28473);
arglist__28473 = cljs.core.next(arglist__28473);
var p3 = cljs.core.first(arglist__28473);
var ps = cljs.core.rest(arglist__28473);
return G__28470__delegate(p1,p2,p3,ps);
});
G__28470.cljs$core$IFn$_invoke$arity$variadic = G__28470__delegate;
return G__28470;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){
return (function (rf){
return (function() {
var G__28528 = null;
var G__28528__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28528__1 = (function (result){
var G__28514 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28514) : rf.call(null,G__28514));
});
var G__28528__2 = (function (result,input){
var G__28515 = result;
var G__28516 = (function (){var G__28517 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28517) : f.call(null,G__28517));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28515,G__28516) : rf.call(null,G__28515,G__28516));
});
var G__28528__3 = (function() { 
var G__28529__delegate = function (result,input,inputs){
var G__28518 = result;
var G__28519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28518,G__28519) : rf.call(null,G__28518,G__28519));
};
var G__28529 = function (result,input,var_args){
var inputs = null;
if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28529__delegate.call(this,result,input,inputs);};
G__28529.cljs$lang$maxFixedArity = 2;
G__28529.cljs$lang$applyTo = (function (arglist__28530){
var result = cljs.core.first(arglist__28530);
arglist__28530 = cljs.core.next(arglist__28530);
var input = cljs.core.first(arglist__28530);
var inputs = cljs.core.rest(arglist__28530);
return G__28529__delegate(result,input,inputs);
});
G__28529.cljs$core$IFn$_invoke$arity$variadic = G__28529__delegate;
return G__28529;
})()
;
G__28528 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__28528__0.call(this);
case 1:
return G__28528__1.call(this,result);
case 2:
return G__28528__2.call(this,result,input);
default:
return G__28528__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28528.cljs$lang$maxFixedArity = 2;
G__28528.cljs$lang$applyTo = G__28528__3.cljs$lang$applyTo;
G__28528.cljs$core$IFn$_invoke$arity$0 = G__28528__0;
G__28528.cljs$core$IFn$_invoke$arity$1 = G__28528__1;
G__28528.cljs$core$IFn$_invoke$arity$2 = G__28528__2;
G__28528.cljs$core$IFn$_invoke$arity$variadic = G__28528__3.cljs$core$IFn$_invoke$arity$variadic;
return G__28528;
})()
});
});
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4608__auto___28531 = size;
var i_28532 = (0);
while(true){
if((i_28532 < n__4608__auto___28531)){
cljs.core.chunk_append(b,(function (){var G__28520 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_28532);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28520) : f.call(null,G__28520));
})());

var G__28533 = (i_28532 + (1));
i_28532 = G__28533;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__28521 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28521) : f.call(null,G__28521));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons((function (){var G__28522 = cljs.core.first(s1);
var G__28523 = cljs.core.first(s2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28522,G__28523) : f.call(null,G__28522,G__28523));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else {
return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
var s3 = cljs.core.seq(c3);
if((s1) && (s2) && (s3)){
return cljs.core.cons((function (){var G__28524 = cljs.core.first(s1);
var G__28525 = cljs.core.first(s2);
var G__28526 = cljs.core.first(s3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28524,G__28525,G__28526) : f.call(null,G__28524,G__28525,G__28526));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else {
return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__28534__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,(function (){
var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});
return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__28474_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__28474_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__28534 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__28534__delegate.call(this,f,c1,c2,c3,colls);};
G__28534.cljs$lang$maxFixedArity = 4;
G__28534.cljs$lang$applyTo = (function (arglist__28535){
var f = cljs.core.first(arglist__28535);
arglist__28535 = cljs.core.next(arglist__28535);
var c1 = cljs.core.first(arglist__28535);
arglist__28535 = cljs.core.next(arglist__28535);
var c2 = cljs.core.first(arglist__28535);
arglist__28535 = cljs.core.next(arglist__28535);
var c3 = cljs.core.first(arglist__28535);
var colls = cljs.core.rest(arglist__28535);
return G__28534__delegate(f,c1,c2,c3,colls);
});
G__28534.cljs$core$IFn$_invoke$arity$variadic = G__28534__delegate;
return G__28534;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__28544 = null;
var G__28544__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28544__1 = (function (result){
var G__28541 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28541) : rf.call(null,G__28541));
});
var G__28544__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
var nn = na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));
var result__$1 = (((n__$1 > (0)))?(function (){var G__28542 = result;
var G__28543 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28542,G__28543) : rf.call(null,G__28542,G__28543));
})():result);
if(!((nn > (0)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__28544 = function(result,input){
switch(arguments.length){
case 0:
return G__28544__0.call(this);
case 1:
return G__28544__1.call(this,result);
case 2:
return G__28544__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28544.cljs$core$IFn$_invoke$arity$0 = G__28544__0;
G__28544.cljs$core$IFn$_invoke$arity$1 = G__28544__1;
G__28544.cljs$core$IFn$_invoke$arity$2 = G__28544__2;
return G__28544;
})()
;})(na))
});
});
var take__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__28551 = null;
var G__28551__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28551__1 = (function (result){
var G__28548 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28548) : rf.call(null,G__28548));
});
var G__28551__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));

if((n__$1 > (0))){
return result;
} else {
var G__28549 = result;
var G__28550 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28549,G__28550) : rf.call(null,G__28549,G__28550));
}
});
G__28551 = function(result,input){
switch(arguments.length){
case 0:
return G__28551__0.call(this);
case 1:
return G__28551__1.call(this,result);
case 2:
return G__28551__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28551.cljs$core$IFn$_invoke$arity$0 = G__28551__0;
G__28551.cljs$core$IFn$_invoke$arity$1 = G__28551__1;
G__28551.cljs$core$IFn$_invoke$arity$2 = G__28551__2;
return G__28551;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(((n__$1 > (0))) && (s)){
var G__28552 = (n__$1 - (1));
var G__28553 = cljs.core.rest(s);
n__$1 = G__28552;
coll__$1 = G__28553;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){
return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq(coll);
var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));
while(true){
if(lead){
var G__28556 = cljs.core.next(s);
var G__28557 = cljs.core.next(lead);
s = G__28556;
lead = G__28557;
continue;
} else {
return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){
return (function (rf){
var da = cljs.core.volatile_BANG_(true);
return ((function (da){
return (function() {
var G__28570 = null;
var G__28570__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28570__1 = (function (result){
var G__28564 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28564) : rf.call(null,G__28564));
});
var G__28570__2 = (function (result,input){
var drop_QMARK_ = cljs.core.deref(da);
if(cljs.core.truth_((function (){var and__3709__auto__ = drop_QMARK_;
if(cljs.core.truth_(and__3709__auto__)){
var G__28565 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28565) : pred.call(null,G__28565));
} else {
return and__3709__auto__;
}
})())){
return result;
} else {
cljs.core.vreset_BANG_(da,null);

var G__28566 = result;
var G__28567 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28566,G__28567) : rf.call(null,G__28566,G__28567));
}
});
G__28570 = function(result,input){
switch(arguments.length){
case 0:
return G__28570__0.call(this);
case 1:
return G__28570__1.call(this,result);
case 2:
return G__28570__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28570.cljs$core$IFn$_invoke$arity$0 = G__28570__0;
G__28570.cljs$core$IFn$_invoke$arity$1 = G__28570__1;
G__28570.cljs$core$IFn$_invoke$arity$2 = G__28570__2;
return G__28570;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__3709__auto__ = s;
if(and__3709__auto__){
var G__28569 = cljs.core.first(s);
return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__28569) : pred__$1.call(null,G__28569));
} else {
return and__3709__auto__;
}
})())){
var G__28571 = pred__$1;
var G__28572 = cljs.core.rest(s);
pred__$1 = G__28571;
coll__$1 = G__28572;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else {
return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){
return iterate(f,(function (){var G__28581 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28581) : f.call(null,G__28581));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__28584__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
};
var G__28584 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28584__delegate.call(this,c1,c2,colls);};
G__28584.cljs$lang$maxFixedArity = 2;
G__28584.cljs$lang$applyTo = (function (arglist__28585){
var c1 = cljs.core.first(arglist__28585);
arglist__28585 = cljs.core.next(arglist__28585);
var c2 = cljs.core.first(arglist__28585);
var colls = cljs.core.rest(arglist__28585);
return G__28584__delegate(c1,c2,colls);
});
G__28584.cljs$core$IFn$_invoke$arity$variadic = G__28584__delegate;
return G__28584;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var coll__$1 = temp__4124__auto__;
return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else {
if(cljs.core.seq(colls__$1)){
return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__28594__delegate = function (f,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__28594 = function (f,var_args){
var colls = null;
if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__28594__delegate.call(this,f,colls);};
G__28594.cljs$lang$maxFixedArity = 1;
G__28594.cljs$lang$applyTo = (function (arglist__28595){
var f = cljs.core.first(arglist__28595);
var colls = cljs.core.rest(arglist__28595);
return G__28594__delegate(f,colls);
});
G__28594.cljs$core$IFn$_invoke$arity$variadic = G__28594__delegate;
return G__28594;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){
return (function (rf){
return (function() {
var G__28614 = null;
var G__28614__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28614__1 = (function (result){
var G__28608 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28608) : rf.call(null,G__28608));
});
var G__28614__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__28609 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28609) : pred.call(null,G__28609));
})())){
var G__28610 = result;
var G__28611 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28610,G__28611) : rf.call(null,G__28610,G__28611));
} else {
return result;
}
});
G__28614 = function(result,input){
switch(arguments.length){
case 0:
return G__28614__0.call(this);
case 1:
return G__28614__1.call(this,result);
case 2:
return G__28614__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28614.cljs$core$IFn$_invoke$arity$0 = G__28614__0;
G__28614.cljs$core$IFn$_invoke$arity$1 = G__28614__1;
G__28614.cljs$core$IFn$_invoke$arity$2 = G__28614__2;
return G__28614;
})()
});
});
var filter__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4608__auto___28615 = size;
var i_28616 = (0);
while(true){
if((i_28616 < n__4608__auto___28615)){
if(cljs.core.truth_((function (){var G__28612 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_28616);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28612) : pred.call(null,G__28612));
})())){
cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_28616));
} else {
}

var G__28617 = (i_28616 + (1));
i_28616 = G__28617;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else {
var f = cljs.core.first(s);
var r = cljs.core.rest(s);
if(cljs.core.truth_((function (){var G__28613 = f;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28613) : pred.call(null,G__28613));
})())){
return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else {
return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else {
return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,(cljs.core.truth_((function (){var G__28624 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__28624) : branch_QMARK_.call(null,G__28624));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__28625 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__28625) : children.call(null,G__28625));
})()], 0)):null));
}),null,null));
});
return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28626_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__28626_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){
if(!((to == null))){
if((function (){var G__28629 = to;
if(G__28629){
var bit__4395__auto__ = (G__28629.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4395__auto__) || (G__28629.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){
if((function (){var G__28630 = to;
if(G__28630){
var bit__4395__auto__ = (G__28630.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4395__auto__) || (G__28630.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__28632 = o;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28632) : f.call(null,G__28632));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__28633__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__28633 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__28633__delegate.call(this,f,c1,c2,c3,colls);};
G__28633.cljs$lang$maxFixedArity = 4;
G__28633.cljs$lang$applyTo = (function (arglist__28634){
var f = cljs.core.first(arglist__28634);
arglist__28634 = cljs.core.next(arglist__28634);
var c1 = cljs.core.first(arglist__28634);
arglist__28634 = cljs.core.next(arglist__28634);
var c2 = cljs.core.first(arglist__28634);
arglist__28634 = cljs.core.next(arglist__28634);
var c3 = cljs.core.first(arglist__28634);
var colls = cljs.core.rest(arglist__28634);
return G__28633__delegate(f,c1,c2,c3,colls);
});
G__28633.cljs$core$IFn$_invoke$arity$variadic = G__28633__delegate;
return G__28633;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.truth_((function (){var G__28636 = o;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28636) : pred.call(null,G__28636));
})())){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else {
return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition up to n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else {
return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
if(!((function (){var G__28651 = m__$1;
if(G__28651){
var bit__4402__auto__ = (G__28651.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4402__auto__) || (G__28651.cljs$core$ILookup$)){
return true;
} else {
if((!G__28651.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__28651);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__28651);
}
})())){
return not_found;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__28652 = sentinel;
var G__28653 = m__$2;
var G__28654 = cljs.core.next(ks__$1);
sentinel = G__28652;
m__$1 = G__28653;
ks__$1 = G__28654;
continue;
}
}
} else {
return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__28655,v){
var vec__28660 = p__28655;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28660,(0),null);
var ks = cljs.core.nthnext(vec__28660,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__28661,f){
var vec__28699 = p__28661;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28699,(0),null);
var ks = cljs.core.nthnext(vec__28699,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28700) : f.call(null,G__28700));
})());
}
});
var update_in__4 = (function (m,p__28662,f,a){
var vec__28701 = p__28662;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28701,(0),null);
var ks = cljs.core.nthnext(vec__28701,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__28703 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28702,G__28703) : f.call(null,G__28702,G__28703));
})());
}
});
var update_in__5 = (function (m,p__28663,f,a,b){
var vec__28704 = p__28663;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28704,(0),null);
var ks = cljs.core.nthnext(vec__28704,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__28706 = a;
var G__28707 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28705,G__28706,G__28707) : f.call(null,G__28705,G__28706,G__28707));
})());
}
});
var update_in__6 = (function (m,p__28664,f,a,b,c){
var vec__28708 = p__28664;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28708,(0),null);
var ks = cljs.core.nthnext(vec__28708,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__28710 = a;
var G__28711 = b;
var G__28712 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__28709,G__28710,G__28711,G__28712) : f.call(null,G__28709,G__28710,G__28711,G__28712));
})());
}
});
var update_in__7 = (function() { 
var G__28714__delegate = function (m,p__28665,f,a,b,c,args){
var vec__28713 = p__28665;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28713,(0),null);
var ks = cljs.core.nthnext(vec__28713,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__28714 = function (m,p__28665,f,a,b,c,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__28714__delegate.call(this,m,p__28665,f,a,b,c,args);};
G__28714.cljs$lang$maxFixedArity = 6;
G__28714.cljs$lang$applyTo = (function (arglist__28715){
var m = cljs.core.first(arglist__28715);
arglist__28715 = cljs.core.next(arglist__28715);
var p__28665 = cljs.core.first(arglist__28715);
arglist__28715 = cljs.core.next(arglist__28715);
var f = cljs.core.first(arglist__28715);
arglist__28715 = cljs.core.next(arglist__28715);
var a = cljs.core.first(arglist__28715);
arglist__28715 = cljs.core.next(arglist__28715);
var b = cljs.core.first(arglist__28715);
arglist__28715 = cljs.core.next(arglist__28715);
var c = cljs.core.first(arglist__28715);
var args = cljs.core.rest(arglist__28715);
return G__28714__delegate(m,p__28665,f,a,b,c,args);
});
G__28714.cljs$core$IFn$_invoke$arity$variadic = G__28714__delegate;
return G__28714;
})()
;
update_in = function(m,p__28665,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__28665,f);
case 4:
return update_in__4.call(this,m,p__28665,f,a);
case 5:
return update_in__5.call(this,m,p__28665,f,a,b);
case 6:
return update_in__6.call(this,m,p__28665,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__28665,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;
/**
* 'Updates' a value in an associative structure, where k is a
* key and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* structure.  If the key does not exist, nil is passed as the old value.
* @param {...*} var_args
*/
cljs.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28726) : f.call(null,G__28726));
})());
});
var update__4 = (function (m,k,f,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__28728 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28727,G__28728) : f.call(null,G__28727,G__28728));
})());
});
var update__5 = (function (m,k,f,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__28730 = x;
var G__28731 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28729,G__28730,G__28731) : f.call(null,G__28729,G__28730,G__28731));
})());
});
var update__6 = (function (m,k,f,x,y,z){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__28733 = x;
var G__28734 = y;
var G__28735 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__28732,G__28733,G__28734,G__28735) : f.call(null,G__28732,G__28733,G__28734,G__28735));
})());
});
var update__7 = (function() { 
var G__28736__delegate = function (m,k,f,x,y,z,more){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__28736 = function (m,k,f,x,y,z,var_args){
var more = null;
if (arguments.length > 6) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__28736__delegate.call(this,m,k,f,x,y,z,more);};
G__28736.cljs$lang$maxFixedArity = 6;
G__28736.cljs$lang$applyTo = (function (arglist__28737){
var m = cljs.core.first(arglist__28737);
arglist__28737 = cljs.core.next(arglist__28737);
var k = cljs.core.first(arglist__28737);
arglist__28737 = cljs.core.next(arglist__28737);
var f = cljs.core.first(arglist__28737);
arglist__28737 = cljs.core.next(arglist__28737);
var x = cljs.core.first(arglist__28737);
arglist__28737 = cljs.core.next(arglist__28737);
var y = cljs.core.first(arglist__28737);
arglist__28737 = cljs.core.next(arglist__28737);
var z = cljs.core.first(arglist__28737);
var more = cljs.core.rest(arglist__28737);
return G__28736__delegate(m,k,f,x,y,z,more);
});
G__28736.cljs$core$IFn$_invoke$arity$variadic = G__28736__delegate;
return G__28736;
})()
;
update = function(m,k,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x);
case 5:
return update__5.call(this,m,k,f,x,y);
case 6:
return update__6.call(this,m,k,f,x,y,z);
default:
return update__7.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x,y,z, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 6;
update.cljs$lang$applyTo = update__7.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$6 = update__6;
update.cljs$core$IFn$_invoke$arity$variadic = update__7.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})

cljs.core.VectorNode.cljs$lang$type = true;

cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";

cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/VectorNode");
});

cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){
return (new cljs.core.VectorNode(edit,arr));
});

cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < (32))){
return (0);
} else {
return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === (0))){
return ret;
} else {
var embed = ret;
var r = cljs.core.pv_fresh_node(edit);
var _ = cljs.core.pv_aset(r,(0),embed);
var G__28738 = (ll - (5));
var G__28739 = r;
ll = G__28738;
ret = G__28739;
continue;
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node(parent);
var subidx = (((pv.cnt - (1)) >>> level) & (31));
if(((5) === level)){
cljs.core.pv_aset(ret,subidx,tailnode);

return ret;
} else {
var child = cljs.core.pv_aget(parent,subidx);
if(!((child == null))){
var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
} else {
var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){
throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__28744 = cljs.core.pv_aget(node,(0));
var G__28745 = (level - (5));
node = G__28744;
level = G__28745;
continue;
} else {
return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){
if((i >= cljs.core.tail_off(pv))){
return pv.tail;
} else {
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__28746 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__28747 = (level - (5));
node = G__28746;
level = G__28747;
continue;
} else {
return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((((0) <= i)) && ((i < pv.cnt))){
return cljs.core.unchecked_array_for(pv,i);
} else {
return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node(node);
if((level === (0))){
cljs.core.pv_aset(ret,(i & (31)),val);

return ret;
} else {
var subidx = ((i >>> level) & (31));
cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));

return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,new_child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,null);

return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.prototype.hasNext = (function (){
var self__ = this;
var this$ = this;
return (self__.i < self__.end);
});

cljs.core.RangedIterator.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(((self__.i - self__.base) === (32))){
self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);

self__.base = (self__.base + (32));
} else {
}

var ret = (self__.arr[(self__.i & (31))]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.RangedIterator.cljs$lang$type = true;

cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";

cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/RangedIterator");
});

cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){
return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});

cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){
var i = start;
return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});







/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__28757 = init__$2;
var G__28758 = (j + i);
var G__28759 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28757,G__28758,G__28759) : f.call(null,G__28757,G__28758,G__28759));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__28770 = (j + (1));
var G__28771 = init__$3;
j = G__28770;
init__$2 = G__28771;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__28760 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28760) : cljs.core.deref.call(null,G__28760));
} else {
var G__28772 = (i + len);
var G__28773 = init__$2;
i = G__28772;
init__$1 = G__28773;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(coll__$1) <= n)){
var new_tail = cljs.core.aclone(self__.tail);
(new_tail[(n & (31))] = val);

return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else {
if((n === self__.cnt)){
return cljs.core._conj(coll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});

cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1)))){
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else {
var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));
var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - (1));
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((other instanceof cljs.core.PersistentVector)){
if((self__.cnt === cljs.core.count(other))){
var me_iter = cljs.core._iterator(coll__$1);
var you_iter = cljs.core._iterator(other);
while(true){
if(cljs.core.truth_(me_iter.hasNext())){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_sequential(coll__$1,other);
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__28761 = self__.root;
return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__28761) : cljs.core.tv_editable_root.call(null,G__28761));
})(),(function (){var G__28762 = self__.tail;
return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__28762) : cljs.core.tv_editable_tail.call(null,G__28762));
})()));
});

cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__28763 = init__$2;
var G__28764 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28763,G__28764) : f.call(null,G__28763,G__28764));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__28774 = (j + (1));
var G__28775 = init__$3;
j = G__28774;
init__$2 = G__28775;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__28765 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28765) : cljs.core.deref.call(null,G__28765));
} else {
var G__28776 = (i + len);
var G__28777 = init__$2;
i = G__28776;
init__$1 = G__28777;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._assoc_n(coll__$1,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});

cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((self__.cnt <= (32))){
return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else {
var G__28766 = coll__$1;
var G__28767 = cljs.core.first_array_for_longvec(coll__$1);
var G__28768 = (0);
var G__28769 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28766,G__28767,G__28768,G__28769) : cljs.core.chunked_seq.call(null,G__28766,G__28767,G__28768,G__28769));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32))){
var len = self__.tail.length;
var new_tail = (new Array((len + (1))));
var n__4608__auto___28778 = len;
var i_28779 = (0);
while(true){
if((i_28779 < n__4608__auto___28778)){
(new_tail[i_28779] = (self__.tail[i_28779]));

var G__28780 = (i_28779 + (1));
i_28779 = G__28780;
continue;
} else {
}
break;
}

(new_tail[len] = o);

return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else {
var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r,(0),self__.root);

cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));

return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});

cljs.core.PersistentVector.prototype.call = (function() {
var G__28781 = null;
var G__28781__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__28781__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__28781 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28781__2.call(this,self__,k);
case 3:
return G__28781__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28781.cljs$core$IFn$_invoke$arity$2 = G__28781__2;
G__28781.cljs$core$IFn$_invoke$arity$3 = G__28781__3;
return G__28781;
})()
;

cljs.core.PersistentVector.prototype.apply = (function (self__,args28756){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28756)));
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.PersistentVector.cljs$lang$type = true;

cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";

cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentVector");
});

cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){
return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});

cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));
if((l < (32))){
return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else {
var node = xs__$1.slice((0),(32));
var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = (32);
var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);
while(true){
if((i < l)){
var G__28782 = (i + (1));
var G__28783 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__28782;
out = G__28783;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentVector.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0)))){
return cljs.core.PersistentVector.fromArray(args.arr,true);
} else {
return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__28784){
var args = cljs.core.seq(arglist__28784);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__28785 = self__.vec;
var G__28786 = self__.node;
var G__28787 = self__.i;
var G__28788 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28785,G__28786,G__28787,G__28788) : cljs.core.chunked_seq.call(null,G__28785,G__28786,G__28787,G__28788));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__28789 = self__.vec;
var G__28790 = (self__.i + self__.off);
var G__28791 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__28789,G__28790,G__28791) : cljs.core.subvec.call(null,G__28789,G__28790,G__28791));
})(),f);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__28792 = self__.vec;
var G__28793 = (self__.i + self__.off);
var G__28794 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__28792,G__28793,G__28794) : cljs.core.subvec.call(null,G__28792,G__28793,G__28794));
})(),f,start);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__28795 = self__.vec;
var G__28796 = self__.node;
var G__28797 = self__.i;
var G__28798 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28795,G__28796,G__28797,G__28798) : cljs.core.chunked_seq.call(null,G__28795,G__28796,G__28797,G__28798));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__28799 = self__.vec;
var G__28800 = cljs.core.unchecked_array_for(self__.vec,end);
var G__28801 = end;
var G__28802 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28799,G__28800,G__28801,G__28802) : cljs.core.chunked_seq.call(null,G__28799,G__28800,G__28801,G__28802));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
var G__28803 = self__.vec;
var G__28804 = self__.node;
var G__28805 = self__.i;
var G__28806 = self__.off;
var G__28807 = m;
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__28803,G__28804,G__28805,G__28806,G__28807) : cljs.core.chunked_seq.call(null,G__28803,G__28804,G__28805,G__28806,G__28807));
});

cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__28808 = self__.vec;
var G__28809 = cljs.core.unchecked_array_for(self__.vec,end);
var G__28810 = end;
var G__28811 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28808,G__28809,G__28810,G__28811) : cljs.core.chunked_seq.call(null,G__28808,G__28809,G__28810,G__28811));
} else {
return null;
}
});

cljs.core.ChunkedSeq.cljs$lang$type = true;

cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";

cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ChunkedSeq");
});

cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});

(cljs.core.ChunkedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){
return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Subvec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return not_found;
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});

cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
var v_pos = (self__.start + n);
var G__28813 = self__.meta;
var G__28814 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);
var G__28815 = self__.start;
var G__28816 = (function (){var x__4038__auto__ = self__.end;
var y__4039__auto__ = (v_pos + (1));
return ((x__4038__auto__ > y__4039__auto__) ? x__4038__auto__ : y__4039__auto__);
})();
var G__28817 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28813,G__28814,G__28815,G__28816,G__28817) : cljs.core.build_subvec.call(null,G__28813,G__28814,G__28815,G__28816,G__28817));
});

cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});

cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.end - self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});

cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.start === self__.end)){
throw (new Error("Can't pop empty vector"));
} else {
var G__28818 = self__.meta;
var G__28819 = self__.v;
var G__28820 = self__.start;
var G__28821 = (self__.end - (1));
var G__28822 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28818,G__28819,G__28820,G__28821,G__28822) : cljs.core.build_subvec.call(null,G__28818,G__28819,G__28820,G__28821,G__28822));
}
});

cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(!((self__.start === self__.end))){
return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else {
return null;
}
});

cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});

cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var coll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n(coll__$1,key,val);
} else {
throw (new Error("Subvec's key for assoc must be a number."));
}
});

cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){
if((i === self__.end)){
return null;
} else {
return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;
return subvec_seq(self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
var G__28824 = meta__$1;
var G__28825 = self__.v;
var G__28826 = self__.start;
var G__28827 = self__.end;
var G__28828 = self__.__hash;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28824,G__28825,G__28826,G__28827,G__28828) : cljs.core.build_subvec.call(null,G__28824,G__28825,G__28826,G__28827,G__28828));
});

cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__28829 = self__.meta;
var G__28830 = cljs.core._assoc_n(self__.v,self__.end,o);
var G__28831 = self__.start;
var G__28832 = (self__.end + (1));
var G__28833 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28829,G__28830,G__28831,G__28832,G__28833) : cljs.core.build_subvec.call(null,G__28829,G__28830,G__28831,G__28832,G__28833));
});

cljs.core.Subvec.prototype.call = (function() {
var G__28834 = null;
var G__28834__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__28834__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__28834 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28834__2.call(this,self__,k);
case 3:
return G__28834__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28834.cljs$core$IFn$_invoke$arity$2 = G__28834__2;
G__28834.cljs$core$IFn$_invoke$arity$3 = G__28834__3;
return G__28834;
})()
;

cljs.core.Subvec.prototype.apply = (function (self__,args28812){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28812)));
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.Subvec.cljs$lang$type = true;

cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";

cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Subvec");
});

cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});

(cljs.core.Subvec.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){
while(true){
if((v instanceof cljs.core.Subvec)){
var G__28835 = meta;
var G__28836 = v.v;
var G__28837 = (v.start + start);
var G__28838 = (v.start + end);
var G__28839 = __hash;
meta = G__28835;
v = G__28836;
start = G__28837;
end = G__28838;
__hash = G__28839;
continue;
} else {
var c = cljs.core.count(v);
if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c))){
throw (new Error("Index out of bounds"));
} else {
}

return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit)){
return node;
} else {
return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode((function (){var obj28846 = {};
return obj28846;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tl,(0),ret,(0),tl.length);

return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx = (((tv.cnt - (1)) >>> level) & (31));
cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);
if(!((child == null))){
return tv_push_tail(tv,(level - (5)),child,tail_node);
} else {
return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));

return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx = (((tv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,new_child);

return node__$1;
}
} else {
if((subidx === (0))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,null);

return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){
if((i >= cljs.core.tail_off(tv))){
return tv.tail;
} else {
var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > (0))){
var G__28854 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__28855 = (level - (5));
node = G__28854;
level = G__28855;
continue;
} else {
return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.prototype.call = (function() {
var G__28859 = null;
var G__28859__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28859__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28859 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28859__2.call(this,self__,k);
case 3:
return G__28859__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28859.cljs$core$IFn$_invoke$arity$2 = G__28859__2;
G__28859.cljs$core$IFn$_invoke$arity$3 = G__28859__3;
return G__28859;
})()
;

cljs.core.TransientVector.prototype.apply = (function (self__,args28856){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28856)));
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else {
throw (new Error("nth after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(tcoll__$1) <= n)){
(self__.tail[(n & (31))] = val);

return tcoll__$1;
} else {
var new_root = ((function (tcoll__$1){
return (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);
if((level === (0))){
cljs.core.pv_aset(node__$1,(n & (31)),val);

return node__$1;
} else {
var subidx = ((n >>> level) & (31));
cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));

return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);
self__.root = new_root;

return tcoll__$1;
}
} else {
if((n === self__.cnt)){
return cljs.core._conj_BANG_(tcoll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

return tcoll__$1;
} else {
if((((self__.cnt - (1)) & (31)) > (0))){
self__.cnt = (self__.cnt - (1));

return tcoll__$1;
} else {
var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));
var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);
if(!((nr == null))){
return nr;
} else {
return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));
self__.root = new_root__$1;

self__.shift = (self__.shift - (5));

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
} else {
self__.root = new_root;

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
}

}
}
}
} else {
throw (new Error("pop! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else {
throw (new Error("TransientVector's key for assoc! must be a number."));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32))){
(self__.tail[(self__.cnt & (31))] = o);

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

if(((self__.cnt >>> (5)) > ((1) << self__.shift))){
var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_shift = (self__.shift + (5));
(new_root_array[(0)] = self__.root);

(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));

self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));

self__.shift = new_shift;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));
var trimmed_tail = (new Array(len));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);

return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientVector.cljs$lang$type = true;

cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";

cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/TransientVector");
});

cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){
return (new cljs.core.TransientVector(cnt,shift,root,tail));
});


/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else {
if((self__.rear == null)){
return cljs.core._empty(coll__$1);
} else {
return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentQueueSeq.cljs$lang$type = true;

cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";

cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentQueueSeq");
});

cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){
return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

(cljs.core.PersistentQueueSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueue.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else {
return coll__$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentQueue.EMPTY,self__.meta);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.rest(cljs.core.seq(coll__$1));
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var rear__$1 = cljs.core.seq(self__.rear);
if(cljs.core.truth_((function (){var or__3721__auto__ = self__.front;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return rear__$1;
}
})())){
return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else {
return null;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3721__auto__ = self__.rear;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});

cljs.core.PersistentQueue.cljs$lang$type = true;

cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";

cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentQueue");
});

cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){
return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});

cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));
(cljs.core.PersistentQueue.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return false;
});

cljs.core.NeverEquiv.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NeverEquiv.cljs$lang$type = true;

cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";

cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/NeverEquiv");
});

cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){
return (new cljs.core.NeverEquiv());
});

cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = (0);
while(true){
if((i < len)){
if((k === (array[i]))){
return i;
} else {
var G__28860 = (i + incr);
i = G__28860;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash(a);
var b__$1 = cljs.core.hash(b);
if((a__$1 < b__$1)){
return (-1);
} else {
if((a__$1 > b__$1)){
return (1);
} else {
return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var mm = cljs.core.meta(m);
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var k__$1 = (ks[i]);
var G__28861 = (i + (1));
var G__28862 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__28861;
out = G__28862;
continue;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = (function (){var obj28866 = {};
return obj28866;
})();
var l = ks.length;
var i_28867 = (0);
while(true){
if((i_28867 < l)){
var k_28868 = (ks[i_28867]);
(new_obj[k_28868] = (obj[k_28868]));

var G__28869 = (i_28867 + (1));
i_28867 = G__28869;
continue;
} else {
}
break;
}

return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ObjMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3709__auto__ = (function (){var G__28873 = k;
return goog.isString(G__28873);
})();
if(cljs.core.truth_(and__3709__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3709__auto__;
}
})())){
return (self__.strobj[k]);
} else {
return not_found;
}
});

cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.keys.length;
var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);
var init__$1 = init;
while(true){
if(cljs.core.seq(keys__$1)){
var k = cljs.core.first(keys__$1);
var init__$2 = (function (){var G__28874 = init__$1;
var G__28875 = k;
var G__28876 = (self__.strobj[k]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28874,G__28875,G__28876) : f.call(null,G__28874,G__28875,G__28876));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__28877 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28877) : cljs.core.deref.call(null,G__28877));
} else {
var G__28883 = cljs.core.rest(keys__$1);
var G__28884 = init__$2;
keys__$1 = G__28883;
init__$1 = G__28884;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.keys.length;
});

cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});

cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});

cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3709__auto__ = (function (){var G__28879 = k;
return goog.isString(G__28879);
})();
if(cljs.core.truth_(and__3709__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3709__auto__;
}
})())){
var new_keys = cljs.core.aclone(self__.keys);
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));

delete new_strobj[k];

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else {
return coll__$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var G__28880 = k;
return goog.isString(G__28880);
})())){
if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD))){
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else {
if(!((cljs.core.scan_array((1),k,self__.keys) == null))){
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
(new_strobj[k] = v);

return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else {
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
var new_keys = cljs.core.aclone(self__.keys);
(new_strobj[k] = v);

new_keys.push(k);

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else {
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3709__auto__ = (function (){var G__28882 = k;
return goog.isString(G__28882);
})();
if(cljs.core.truth_(and__3709__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3709__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.keys.length > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__28870_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28870_SHARP_,(self__.strobj[p1__28870_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else {
return null;
}
});

cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});

cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});

cljs.core.ObjMap.prototype.call = (function() {
var G__28885 = null;
var G__28885__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28885__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28885 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28885__2.call(this,self__,k);
case 3:
return G__28885__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28885.cljs$core$IFn$_invoke$arity$2 = G__28885__2;
G__28885.cljs$core$IFn$_invoke$arity$3 = G__28885__3;
return G__28885;
})()
;

cljs.core.ObjMap.prototype.apply = (function (self__,args28871){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28871)));
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.ObjMap.cljs$lang$type = true;

cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";

cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ObjMap");
});

cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){
return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});

cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj28887 = {};
return obj28887;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var vec__28888 = cljs.core.first(self__.s);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28888,(1),null);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [k,v]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6EntriesIterator.cljs$lang$type = true;

cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";

cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ES6EntriesIterator");
});

cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){
return (new cljs.core.ES6EntriesIterator(s));
});

cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){
return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [x,x]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ES6SetEntriesIterator");
});

cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){
return (new cljs.core.ES6SetEntriesIterator(s));
});

cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){
return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(((arr[i]) == null)){
return i;
} else {
var G__28889 = (i + (2));
i = G__28889;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.fqn;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})()){
return i;
} else {
var G__28890 = (i + (2));
i = G__28890;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.str;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})()){
return i;
} else {
var G__28891 = (i + (2));
i = G__28891;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((k === (arr[i]))){
return i;
} else {
var G__28892 = (i + (2));
i = G__28892;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i]))){
return i;
} else {
var G__28893 = (i + (2));
i = G__28893;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
if((k instanceof cljs.core.Keyword)){
return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else {
if(cljs.core.truth_((function (){var or__3721__auto__ = (function (){var G__28897 = k;
return goog.isString(G__28897);
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return typeof k === 'number';
}
})())){
return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else {
if((k == null)){
return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else {
return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){
var arr = m.arr;
var l = arr.length;
var narr = (new Array((l + (2))));
var i_28898 = (0);
while(true){
if((i_28898 < l)){
(narr[i_28898] = (arr[i_28898]));

var G__28899 = (i_28898 + (1));
i_28898 = G__28899;
continue;
} else {
}
break;
}

(narr[l] = k);

(narr[(l + (1))] = v);

return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return null;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return ((self__.arr.length - self__.i) / (2));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentArrayMapSeq");
});

cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});

(cljs.core.PersistentArrayMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){
if((i <= (arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else {
return null;
}
});


/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs.core.PersistentArrayMapIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
self__.i = (self__.i + (2));

return ret;
});

cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentArrayMapIterator");
});

cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){
return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});


/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__28901 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__28901) : cljs.core.keys.call(null,G__28901));
})());
});

cljs.core.PersistentArrayMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentArrayMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__28902 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__28902) : cljs.core.vals.call(null,G__28902));
})());
});

cljs.core.PersistentArrayMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentArrayMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__28903 = cljs.core.seq(coll);
var chunk__28904 = null;
var count__28905 = (0);
var i__28906 = (0);
while(true){
if((i__28906 < count__28905)){
var vec__28907 = chunk__28904.cljs$core$IIndexed$_nth$arity$2(null,i__28906);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28907,(1),null);
var G__28908_28921 = v;
var G__28909_28922 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28908_28921,G__28909_28922) : f.call(null,G__28908_28921,G__28909_28922));

var G__28923 = seq__28903;
var G__28924 = chunk__28904;
var G__28925 = count__28905;
var G__28926 = (i__28906 + (1));
seq__28903 = G__28923;
chunk__28904 = G__28924;
count__28905 = G__28925;
i__28906 = G__28926;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__28903);
if(temp__4126__auto__){
var seq__28903__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28903__$1)){
var c__4508__auto__ = cljs.core.chunk_first(seq__28903__$1);
var G__28927 = cljs.core.chunk_rest(seq__28903__$1);
var G__28928 = c__4508__auto__;
var G__28929 = cljs.core.count(c__4508__auto__);
var G__28930 = (0);
seq__28903 = G__28927;
chunk__28904 = G__28928;
count__28905 = G__28929;
i__28906 = G__28930;
continue;
} else {
var vec__28910 = cljs.core.first(seq__28903__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28910,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28910,(1),null);
var G__28911_28931 = v;
var G__28912_28932 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28911_28931,G__28912_28932) : f.call(null,G__28911_28931,G__28912_28932));

var G__28933 = cljs.core.next(seq__28903__$1);
var G__28934 = null;
var G__28935 = (0);
var G__28936 = (0);
seq__28903 = G__28933;
chunk__28904 = G__28934;
count__28905 = G__28935;
i__28906 = G__28936;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var G__28913 = init__$1;
var G__28914 = (self__.arr[i]);
var G__28915 = (self__.arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28913,G__28914,G__28915) : f.call(null,G__28913,G__28914,G__28915));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__28916 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28916) : cljs.core.deref.call(null,G__28916));
} else {
var G__28937 = (i + (2));
var G__28938 = init__$2;
i = G__28937;
init__$1 = G__28938;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((function (){var G__28917 = other;
if(G__28917){
var bit__4395__auto__ = (G__28917.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4395__auto__) || (G__28917.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
var alen = self__.arr.length;
var other__$1 = other;
if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null))){
var i = (0);
while(true){
if((i < alen)){
var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);
if(!((v === cljs.core.lookup_sentinel))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v)){
var G__28939 = (i + (2));
i = G__28939;
continue;
} else {
return false;
}
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_map(coll__$1,other);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientArrayMap((function (){var obj28919 = {};
return obj28919;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx >= (0))){
var len = self__.arr.length;
var new_len = (len - (2));
if((new_len === (0))){
return cljs.core._empty(coll__$1);
} else {
var new_arr = (new Array(new_len));
var s = (0);
var d = (0);
while(true){
if((s >= len)){
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s]))){
var G__28940 = (s + (2));
var G__28941 = d;
s = G__28940;
d = G__28941;
continue;
} else {
(new_arr[d] = (self__.arr[s]));

(new_arr[(d + (1))] = (self__.arr[(s + (1))]));

var G__28942 = (s + (2));
var G__28943 = (d + (2));
s = G__28942;
d = G__28943;
continue;

}
}
break;
}
}
} else {
return coll__$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else {
return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else {
if((v === (self__.arr[(idx + (1))]))){
return coll__$1;
} else {
var arr__$1 = (function (){var G__28920 = cljs.core.aclone(self__.arr);
(G__28920[(idx + (1))] = v);

return G__28920;
})();
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__28944 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__28945 = cljs.core.next(es);
ret = G__28944;
es = G__28945;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__28946 = null;
var G__28946__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28946__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28946 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28946__2.call(this,self__,k);
case 3:
return G__28946__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28946.cljs$core$IFn$_invoke$arity$2 = G__28946__2;
G__28946.cljs$core$IFn$_invoke$arity$3 = G__28946__3;
return G__28946;
})()
;

cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args28900){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28900)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentArrayMap.cljs$lang$type = true;

cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";

cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentArrayMap");
});

cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){
return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});

cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){
var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));
if(no_check){
var cnt = (arr__$1.length / (2));
return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else {
var len = arr__$1.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__28947 = (i + (2));
var G__28948 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__28947;
ret = G__28948;
continue;
} else {
return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});
(cljs.core.PersistentArrayMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx >= (0))){
(self__.arr[idx] = (self__.arr[(self__.len - (2))]));

(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));

var G__28949_28957 = self__.arr;
G__28949_28957.pop();

G__28949_28957.pop();


self__.len = (self__.len - (2));
} else {
}

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx === (-1))){
if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
self__.len = (self__.len + (2));

self__.arr.push(key);

self__.arr.push(val);

return tcoll__$1;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__28950 = self__.len;
var G__28951 = self__.arr;
return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__28950,G__28951) : cljs.core.array__GT_transient_hash_map.call(null,G__28950,G__28951));
})(),key,val);
}
} else {
if((val === (self__.arr[(idx + (1))]))){
return tcoll__$1;
} else {
(self__.arr[(idx + (1))] = val);

return tcoll__$1;
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
if((function (){var G__28952 = o;
if(G__28952){
var bit__4402__auto__ = (G__28952.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4402__auto__) || (G__28952.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__28952.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28952);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28952);
}
})()){
return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__28953 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28953) : cljs.core.key.call(null,G__28953));
})(),(function (){var G__28954 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28954) : cljs.core.val.call(null,G__28954));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$2 = tcoll__$1;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__28958 = cljs.core.next(es);
var G__28959 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__28955 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28955) : cljs.core.key.call(null,G__28955));
})(),(function (){var G__28956 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28956) : cljs.core.val.call(null,G__28956));
})());
es = G__28958;
tcoll__$2 = G__28959;
continue;
} else {
return tcoll__$2;
}
break;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
self__.editable_QMARK_ = false;

return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
return cljs.core.quot(self__.len,(2));
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientArrayMap.cljs$lang$type = true;

cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";

cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/TransientArrayMap");
});

cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){
return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});


cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__28960 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__28961 = (i + (2));
out = G__28960;
i = G__28961;
continue;
} else {
return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})

cljs.core.Box.cljs$lang$type = true;

cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";

cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Box");
});

cljs.core.__GT_Box = (function __GT_Box(val){
return (new cljs.core.Box(val));
});






cljs.core.key_test = (function key_test(key,other){
if((key === other)){
return true;
} else {
if(cljs.core.keyword_identical_QMARK_(key,other)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__28964 = cljs.core.aclone(arr);
(G__28964[i] = a);

return G__28964;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__28965 = cljs.core.aclone(arr);
(G__28965[i] = a);

(G__28965[j] = b);

return G__28965;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = (new Array((arr.length - (2))));
cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));

cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));

return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

(editable.arr[j] = b);

return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var k = (arr[i]);
if(!((k == null))){
var G__28970 = init__$1;
var G__28971 = k;
var G__28972 = (arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28970,G__28971,G__28972) : f.call(null,G__28970,G__28971,G__28972));
} else {
var node = (arr[(i + (1))]);
if(!((node == null))){
return node.kv_reduce(f,init__$1);
} else {
return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__28973 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28973) : cljs.core.deref.call(null,G__28973));
} else {
var G__28974 = (i + (2));
var G__28975 = init__$2;
i = G__28974;
init__$1 = G__28975;
continue;
}
} else {
return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var n = cljs.core.bit_count(self__.bitmap);
var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));

return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else {
if((self__.bitmap === bit)){
return null;
} else {
return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
(removed_leaf_QMARK_[(0)] = true);

return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit)){
return null;
} else {
var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);

cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));

(earr[(len - (2))] = null);

(earr[(len - (1))] = null);

return editable;
}
});

cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__28976 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__28976) : cljs.core.create_inode_seq.call(null,G__28976));
});

cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return val_or_node;
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((((2) * n) < self__.arr.length)){
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;

cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));

(earr[((2) * idx)] = key);

(earr[(((2) * idx) + (1))] = val);

editable.bitmap = (editable.bitmap | bit);

return editable;
} else {
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_28990 = (0);
var j_28991 = (0);
while(true){
if((i_28990 < (32))){
if((((self__.bitmap >>> i_28990) & (1)) === (0))){
var G__28992 = (i_28990 + (1));
var G__28993 = j_28991;
i_28990 = G__28992;
j_28991 = G__28993;
continue;
} else {
(nodes[i_28990] = ((!(((self__.arr[j_28991]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_28991])),(self__.arr[j_28991]),(self__.arr[(j_28991 + (1))]),added_leaf_QMARK_):(self__.arr[(j_28991 + (1))])));

var G__28994 = (i_28990 + (1));
var G__28995 = (j_28991 + (2));
i_28990 = G__28994;
j_28991 = G__28995;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (4)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;

editable.bitmap = (editable.bitmap | bit);

return editable;

}
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else {
added_leaf_QMARK_.val = true;

return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__28977 = edit__$1;
var G__28978 = (shift + (5));
var G__28979 = key_or_nil;
var G__28980 = val_or_node;
var G__28981 = hash;
var G__28982 = key;
var G__28983 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__28977,G__28978,G__28979,G__28980,G__28981,G__28982,G__28983) : cljs.core.create_node.call(null,G__28977,G__28978,G__28979,G__28980,G__28981,G__28982,G__28983));
})());

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_28996 = (0);
var j_28997 = (0);
while(true){
if((i_28996 < (32))){
if((((self__.bitmap >>> i_28996) & (1)) === (0))){
var G__28998 = (i_28996 + (1));
var G__28999 = j_28997;
i_28996 = G__28998;
j_28997 = G__28999;
continue;
} else {
(nodes[i_28996] = ((!(((self__.arr[j_28997]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_28997])),(self__.arr[j_28997]),(self__.arr[(j_28997 + (1))]),added_leaf_QMARK_):(self__.arr[(j_28997 + (1))])));

var G__29000 = (i_28996 + (1));
var G__29001 = (j_28997 + (2));
i_28996 = G__29000;
j_28997 = G__29001;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else {
added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__28984 = (shift + (5));
var G__28985 = key_or_nil;
var G__28986 = val_or_node;
var G__28987 = hash;
var G__28988 = key;
var G__28989 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__28984,G__28985,G__28986,G__28987,G__28988,G__28989) : cljs.core.create_node.call(null,G__28984,G__28985,G__28986,G__28987,G__28988,G__28989));
})())));

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without((shift + (5)),hash,key);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else {
if((self__.bitmap === bit)){
return null;
} else {
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.cljs$lang$type = true;

cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";

cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/BitmapIndexedNode");
});

cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){
return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});

cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = arr.length;
var new_arr = (new Array(((2) * (array_node.cnt - (1)))));
var i = (0);
var j = (1);
var bitmap = (0);
while(true){
if((i < len)){
if((!((i === idx))) && (!(((arr[i]) == null)))){
(new_arr[j] = (arr[i]));

var G__29002 = (i + (1));
var G__29003 = (j + (2));
var G__29004 = (bitmap | ((1) << i));
i = G__29002;
j = G__29003;
bitmap = G__29004;
continue;
} else {
var G__29005 = (i + (1));
var G__29006 = j;
var G__29007 = bitmap;
i = G__29005;
j = G__29006;
bitmap = G__29007;
continue;
}
} else {
return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});

cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return inode;
} else {
var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,edit__$1,idx);
} else {
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - (1));

return editable;
}
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});

cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__29008 = self__.arr;
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__29008) : cljs.core.create_array_node_seq.call(null,G__29008));
});

cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var node = (self__.arr[i]);
if(!((node == null))){
var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_(init__$2)){
var G__29009 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29009) : cljs.core.deref.call(null,G__29009));
} else {
var G__29010 = (i + (1));
var G__29011 = init__$2;
i = G__29010;
init__$1 = G__29011;
continue;
}
} else {
var G__29012 = (i + (1));
var G__29013 = init__$1;
i = G__29012;
init__$1 = G__29013;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + (1));

return editable;
} else {
var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});

cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else {
var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});

cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_find((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
var n = node.inode_without((shift + (5)),hash,key);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,null,idx);
} else {
return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else {
return inode;
}
});

cljs.core.ArrayNode.cljs$lang$type = true;

cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";

cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ArrayNode");
});

cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){
return (new cljs.core.ArrayNode(edit,cnt,arr));
});

cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = ((2) * cnt);
var i = (0);
while(true){
if((i < lim)){
if(cljs.core.key_test(key,(arr[i]))){
return i;
} else {
var G__29014 = (i + (2));
i = G__29014;
continue;
}
} else {
return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var new_arr = (new Array(((2) * (self__.cnt + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));

return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});

cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
(removed_leaf_QMARK_[(0)] = true);

if((self__.cnt === (1))){
return null;
} else {
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));

(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));

(earr[(((2) * self__.cnt) - (1))] = null);

(earr[(((2) * self__.cnt) - (2))] = null);

editable.cnt = (editable.cnt - (1));

return editable;
}
}
});

cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__29015 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__29015) : cljs.core.create_inode_seq.call(null,G__29015));
});

cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return (self__.arr[(idx + (1))]);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
if((self__.arr.length > ((2) * self__.cnt))){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);
added_leaf_QMARK_.val = true;

editable.cnt = (editable.cnt + (1));

return editable;
} else {
var len = self__.arr.length;
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else {
if(((self__.arr[(idx + (1))]) === val)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else {
return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
var len = ((2) * self__.cnt);
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val)){
return inode;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else {
return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit)){
self__.arr = array;

self__.cnt = count;

return inode;
} else {
return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});

cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
if((self__.cnt === (1))){
return null;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});

cljs.core.HashCollisionNode.cljs$lang$type = true;

cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";

cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/HashCollisionNode");
});

cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){
return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});

cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.NodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
var G__29016 = self__.nodes;
var G__29017 = (self__.i + (2));
var G__29018 = null;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__29016,G__29017,G__29018) : cljs.core.create_inode_seq.call(null,G__29016,G__29017,G__29018));
} else {
var G__29019 = self__.nodes;
var G__29020 = self__.i;
var G__29021 = cljs.core.next(self__.s);
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__29019,G__29020,G__29021) : cljs.core.create_inode_seq.call(null,G__29019,G__29020,G__29021));
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.NodeSeq.cljs$lang$type = true;

cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";

cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/NodeSeq");
});

cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.NodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
if(!(((nodes[j]) == null))){
return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else {
var temp__4124__auto__ = (nodes[(j + (1))]);
if(cljs.core.truth_(temp__4124__auto__)){
var node = temp__4124__auto__;
var temp__4124__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var node_seq = temp__4124__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else {
var G__29025 = (j + (2));
j = G__29025;
continue;
}
} else {
var G__29026 = (j + (2));
j = G__29026;
continue;
}
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.s);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__29027 = null;
var G__29028 = self__.nodes;
var G__29029 = self__.i;
var G__29030 = cljs.core.next(self__.s);
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__29027,G__29028,G__29029,G__29030) : cljs.core.create_array_node_seq.call(null,G__29027,G__29028,G__29029,G__29030));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ArrayNodeSeq.cljs$lang$type = true;

cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";

cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ArrayNodeSeq");
});

cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.ArrayNodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
var temp__4124__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4124__auto__)){
var nj = temp__4124__auto__;
var temp__4124__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var ns = temp__4124__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else {
var G__29035 = (j + (1));
j = G__29035;
continue;
}
} else {
var G__29036 = (j + (1));
j = G__29036;
continue;
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__29038 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__29038) : cljs.core.keys.call(null,G__29038));
})());
});

cljs.core.PersistentHashMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__29039 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__29039) : cljs.core.vals.call(null,G__29039));
})());
});

cljs.core.PersistentHashMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__29040 = cljs.core.seq(coll);
var chunk__29041 = null;
var count__29042 = (0);
var i__29043 = (0);
while(true){
if((i__29043 < count__29042)){
var vec__29044 = chunk__29041.cljs$core$IIndexed$_nth$arity$2(null,i__29043);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29044,(1),null);
var G__29045_29056 = v;
var G__29046_29057 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29045_29056,G__29046_29057) : f.call(null,G__29045_29056,G__29046_29057));

var G__29058 = seq__29040;
var G__29059 = chunk__29041;
var G__29060 = count__29042;
var G__29061 = (i__29043 + (1));
seq__29040 = G__29058;
chunk__29041 = G__29059;
count__29042 = G__29060;
i__29043 = G__29061;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__29040);
if(temp__4126__auto__){
var seq__29040__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29040__$1)){
var c__4508__auto__ = cljs.core.chunk_first(seq__29040__$1);
var G__29062 = cljs.core.chunk_rest(seq__29040__$1);
var G__29063 = c__4508__auto__;
var G__29064 = cljs.core.count(c__4508__auto__);
var G__29065 = (0);
seq__29040 = G__29062;
chunk__29041 = G__29063;
count__29042 = G__29064;
i__29043 = G__29065;
continue;
} else {
var vec__29047 = cljs.core.first(seq__29040__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(1),null);
var G__29048_29066 = v;
var G__29049_29067 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29048_29066,G__29049_29067) : f.call(null,G__29048_29066,G__29049_29067));

var G__29068 = cljs.core.next(seq__29040__$1);
var G__29069 = null;
var G__29070 = (0);
var G__29071 = (0);
seq__29040 = G__29068;
chunk__29041 = G__29069;
count__29042 = G__29070;
i__29043 = G__29071;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__29050 = init;
var G__29051 = null;
var G__29052 = self__.nil_val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29050,G__29051,G__29052) : f.call(null,G__29050,G__29051,G__29052));
})():init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__29053 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29053) : cljs.core.deref.call(null,G__29053));
} else {
if(!((self__.root == null))){
return self__.root.kv_reduce(f,init__$1);
} else {
return init__$1;

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashMap((function (){var obj29055 = {};
return obj29055;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else {
return coll__$1;
}
} else {
if((self__.root == null)){
return coll__$1;
} else {
var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if((self__.has_nil_QMARK_) && ((v === self__.nil_val))){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
return self__.has_nil_QMARK_;
} else {
if((self__.root == null)){
return false;
} else {
return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else {
return s;
}
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__29072 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__29073 = cljs.core.next(es);
ret = G__29072;
es = G__29073;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentHashMap.prototype.call = (function() {
var G__29074 = null;
var G__29074__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29074__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29074 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29074__2.call(this,self__,k);
case 3:
return G__29074__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29074.cljs$core$IFn$_invoke$arity$2 = G__29074__2;
G__29074.cljs$core$IFn$_invoke$arity$3 = G__29074__3;
return G__29074;
})()
;

cljs.core.PersistentHashMap.prototype.apply = (function (self__,args29037){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29037)));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashMap.cljs$lang$type = true;

cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";

cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentHashMap");
});

cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});

cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var G__29075 = (i + (1));
var G__29076 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__29075;
out = G__29076;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
});
(cljs.core.PersistentHashMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.without_BANG_(key);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.assoc_BANG_(key,val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.conj_BANG_(val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.persistent_BANG_();
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return null;
}
} else {
if((self__.root == null)){
return null;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.edit){
return self__.count;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((function (){var G__29077 = o;
if(G__29077){
var bit__4402__auto__ = (G__29077.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4402__auto__) || (G__29077.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__29077.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__29077);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__29077);
}
})()){
return tcoll.assoc_BANG_((function (){var G__29078 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__29078) : cljs.core.key.call(null,G__29078));
})(),(function (){var G__29079 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__29079) : cljs.core.val.call(null,G__29079));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__29082 = cljs.core.next(es);
var G__29083 = tcoll__$1.assoc_BANG_((function (){var G__29080 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__29080) : cljs.core.key.call(null,G__29080));
})(),(function (){var G__29081 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__29081) : cljs.core.val.call(null,G__29081));
})());
es = G__29082;
tcoll__$1 = G__29083;
continue;
} else {
return tcoll__$1;
}
break;
}
}
} else {
throw (new Error("conj! after persistent"));
}
});

cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if((self__.nil_val === v)){
} else {
self__.nil_val = v;
}

if(self__.has_nil_QMARK_){
} else {
self__.count = (self__.count + (1));

self__.has_nil_QMARK_ = true;
}

return tcoll;
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(added_leaf_QMARK_.val){
self__.count = (self__.count + (1));
} else {
}

return tcoll;
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if(self__.has_nil_QMARK_){
self__.has_nil_QMARK_ = false;

self__.nil_val = null;

self__.count = (self__.count - (1));

return tcoll;
} else {
return tcoll;
}
} else {
if((self__.root == null)){
return tcoll;
} else {
var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(cljs.core.truth_((removed_leaf_QMARK_[(0)]))){
self__.count = (self__.count - (1));
} else {
}

return tcoll;
}
}
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit){
self__.edit = null;

return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientHashMap.cljs$lang$type = true;

cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";

cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/TransientHashMap");
});

cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){
return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});

cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null))){
var G__29084 = ((ascending_QMARK_)?t.left:t.right);
var G__29085 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__29084;
stack__$1 = G__29085;
continue;
} else {
return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt < (0))){
return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else {
return self__.cnt;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek(self__.stack);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.first(self__.stack);
var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null))){
return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentTreeMapSeq");
});

cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){
return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});

(cljs.core.PersistentTreeMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});

cljs.core.balance_left = (function balance_left(key,val,ins,right){
if((ins instanceof cljs.core.RedNode)){
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else {
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if((ins instanceof cljs.core.RedNode)){
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else {
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else {
if((right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right(key,val,del,right.redden());
} else {
if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else {
if((left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left(key,val,left.redden(),del);
} else {
if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__29098 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29098) : cljs.core.deref.call(null,G__29098));
} else {
var init__$2 = (function (){var G__29099 = init__$1;
var G__29100 = node.key;
var G__29101 = node.val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29099,G__29100,G__29101) : f.call(null,G__29099,G__29100,G__29101));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__29102 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29102) : cljs.core.deref.call(null,G__29102));
} else {
var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_(init__$3)){
var G__29103 = init__$3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29103) : cljs.core.deref.call(null,G__29103));
} else {
return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});

cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});

cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});

cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});

cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});

cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});

cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.BlackNode.prototype.call = (function() {
var G__29105 = null;
var G__29105__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29105__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29105 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29105__2.call(this,self__,k);
case 3:
return G__29105__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29105.cljs$core$IFn$_invoke$arity$2 = G__29105__2;
G__29105.cljs$core$IFn$_invoke$arity$3 = G__29105__3;
return G__29105;
})()
;

cljs.core.BlackNode.prototype.apply = (function (self__,args29104){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29104)));
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.BlackNode.cljs$lang$type = true;

cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";

cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/BlackNode");
});

cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){
return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

(cljs.core.BlackNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});

cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});

cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});

cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else {
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});

cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else {
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});

cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});

cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.RedNode.prototype.call = (function() {
var G__29107 = null;
var G__29107__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29107__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29107 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29107__2.call(this,self__,k);
case 3:
return G__29107__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29107.cljs$core$IFn$_invoke$arity$2 = G__29107__2;
G__29107.cljs$core$IFn$_invoke$arity$3 = G__29107__3;
return G__29107;
})()
;

cljs.core.RedNode.prototype.apply = (function (self__,args29106){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29106)));
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.RedNode.cljs$lang$type = true;

cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";

cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/RedNode");
});

cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){
return (new cljs.core.RedNode(key,val,left,right,__hash));
});

(cljs.core.RedNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null)){
return (new cljs.core.RedNode(k,v,null,null,null));
} else {
var c = (function (){var G__29120 = k;
var G__29121 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__29120,G__29121) : comp.call(null,G__29120,G__29121));
})();
if((c === (0))){
(found[(0)] = tree);

return null;
} else {
if((c < (0))){
var ins = tree_map_add(comp,tree.left,k,v,found);
if(!((ins == null))){
return tree.add_left(ins);
} else {
return null;
}
} else {
var ins = tree_map_add(comp,tree.right,k,v,found);
if(!((ins == null))){
return tree.add_right(ins);
} else {
return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
if((left instanceof cljs.core.RedNode)){
if((right instanceof cljs.core.RedNode)){
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else {
if((right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else {
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null))){
var c = (function (){var G__29140 = k;
var G__29141 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__29140,G__29141) : comp.call(null,G__29140,G__29141));
})();
if((c === (0))){
(found[(0)] = tree);

return cljs.core.tree_map_append(tree.left,tree.right);
} else {
if((c < (0))){
var del = tree_map_remove(comp,tree.left,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else {
return null;
}
} else {
var del = tree_map_remove(comp,tree.right,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else {
return null;
}

}
}
} else {
return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = (function (){var G__29152 = k;
var G__29153 = tk;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__29152,G__29153) : comp.call(null,G__29152,G__29153));
})();
if((c === (0))){
return tree.replace(tk,v,tree.left,tree.right);
} else {
if((c < (0))){
return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else {
return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__29155 = cljs.core.seq(coll);
var chunk__29156 = null;
var count__29157 = (0);
var i__29158 = (0);
while(true){
if((i__29158 < count__29157)){
var vec__29159 = chunk__29156.cljs$core$IIndexed$_nth$arity$2(null,i__29158);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29159,(1),null);
var G__29160_29172 = v;
var G__29161_29173 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29160_29172,G__29161_29173) : f.call(null,G__29160_29172,G__29161_29173));

var G__29174 = seq__29155;
var G__29175 = chunk__29156;
var G__29176 = count__29157;
var G__29177 = (i__29158 + (1));
seq__29155 = G__29174;
chunk__29156 = G__29175;
count__29157 = G__29176;
i__29158 = G__29177;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__29155);
if(temp__4126__auto__){
var seq__29155__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29155__$1)){
var c__4508__auto__ = cljs.core.chunk_first(seq__29155__$1);
var G__29178 = cljs.core.chunk_rest(seq__29155__$1);
var G__29179 = c__4508__auto__;
var G__29180 = cljs.core.count(c__4508__auto__);
var G__29181 = (0);
seq__29155 = G__29178;
chunk__29156 = G__29179;
count__29157 = G__29180;
i__29158 = G__29181;
continue;
} else {
var vec__29162 = cljs.core.first(seq__29155__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29162,(1),null);
var G__29163_29182 = v;
var G__29164_29183 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29163_29182,G__29164_29183) : f.call(null,G__29163_29182,G__29164_29183));

var G__29184 = cljs.core.next(seq__29155__$1);
var G__29185 = null;
var G__29186 = (0);
var G__29187 = (0);
seq__29155 = G__29184;
chunk__29156 = G__29185;
count__29157 = G__29186;
i__29158 = G__29187;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__29165 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__29165) : cljs.core.keys.call(null,G__29165));
})());
});

cljs.core.PersistentTreeMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__29166 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__29166) : cljs.core.vals.call(null,G__29166));
})());
});

cljs.core.PersistentTreeMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__29167 = k;
var G__29168 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__29167,G__29168) : self__.comp.call(null,G__29167,G__29168));
})();
if((c === (0))){
return t;
} else {
if((c < (0))){
var G__29188 = t.left;
t = G__29188;
continue;
} else {
var G__29189 = t.right;
t = G__29189;
continue;

}
}
} else {
return null;
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var n = coll__$1.entry_at(k);
if(!((n == null))){
return n.val;
} else {
return not_found;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
if(!((self__.tree == null))){
return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else {
return init;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,(0)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);
if((t == null)){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);
if((t == null)){
var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((coll__$1.entry_at(k) == null));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__29190 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__29191 = cljs.core.next(es);
ret = G__29190;
es = G__29191;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__29192 = null;
var G__29192__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29192__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29192 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29192__2.call(this,self__,k);
case 3:
return G__29192__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29192.cljs$core$IFn$_invoke$arity$2 = G__29192__2;
G__29192.cljs$core$IFn$_invoke$arity$3 = G__29192__3;
return G__29192;
})()
;

cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args29154){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29154)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__29169 = k;
var G__29170 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__29169,G__29170) : self__.comp.call(null,G__29169,G__29170));
})();
if((c === (0))){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__29193 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__29194 = t.left;
stack = G__29193;
t = G__29194;
continue;
} else {
var G__29195 = stack;
var G__29196 = t.right;
stack = G__29195;
t = G__29196;
continue;
}
} else {
if((c > (0))){
var G__29197 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__29198 = t.right;
stack = G__29197;
t = G__29198;
continue;
} else {
var G__29199 = stack;
var G__29200 = t.left;
stack = G__29199;
t = G__29200;
continue;
}

}
}
} else {
if((stack == null)){
return null;
} else {
return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
var G__29171 = entry;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__29171) : cljs.core.key.call(null,G__29171));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.comp;
});

cljs.core.PersistentTreeMap.cljs$lang$type = true;

cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";

cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentTreeMap");
});

cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){
return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});

cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
(cljs.core.PersistentTreeMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$){
var G__29201 = cljs.core.nnext(in$);
var G__29202 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__29201;
out = G__29202;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__29203){
var keyvals = cljs.core.seq(arglist__29203);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),true,false);
};
var array_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__29204){
var keyvals = cljs.core.seq(arglist__29204);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = (function (){var obj29208 = {};
return obj29208;
})();
var kvs = cljs.core.seq(keyvals);
while(true){
if(kvs){
ks.push(cljs.core.first(kvs));

(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));

var G__29209 = cljs.core.nnext(kvs);
kvs = G__29209;
continue;
} else {
return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__29210){
var keyvals = cljs.core.seq(arglist__29210);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$){
var G__29211 = cljs.core.nnext(in$);
var G__29212 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__29211;
out = G__29212;
continue;
} else {
return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__29213){
var keyvals = cljs.core.seq(arglist__29213);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));
while(true){
if(in$){
var G__29214 = cljs.core.nnext(in$);
var G__29215 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__29214;
out = G__29215;
continue;
} else {
return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__29216){
var comparator = cljs.core.first(arglist__29216);
var keyvals = cljs.core.rest(arglist__29216);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.KeySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__29217 = self__.mseq;
if(G__29217){
var bit__4402__auto__ = (G__29217.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4402__auto__) || (G__29217.cljs$core$INext$)){
return true;
} else {
if((!G__29217.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29217);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29217);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.KeySeq(nseq,self__._meta));
}
});

cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_key$arity$1(null);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__29218 = self__.mseq;
if(G__29218){
var bit__4402__auto__ = (G__29218.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4402__auto__) || (G__29218.cljs$core$INext$)){
return true;
} else {
if((!G__29218.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29218);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29218);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.KeySeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.KeySeq(self__.mseq,new_meta));
});

cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.KeySeq.cljs$lang$type = true;

cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";

cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/KeySeq");
});

cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){
return (new cljs.core.KeySeq(mseq,_meta));
});

(cljs.core.KeySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.KeySeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ValSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__29219 = self__.mseq;
if(G__29219){
var bit__4402__auto__ = (G__29219.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4402__auto__) || (G__29219.cljs$core$INext$)){
return true;
} else {
if((!G__29219.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29219);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29219);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.ValSeq(nseq,self__._meta));
}
});

cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_val$arity$1(null);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__29220 = self__.mseq;
if(G__29220){
var bit__4402__auto__ = (G__29220.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4402__auto__) || (G__29220.cljs$core$INext$)){
return true;
} else {
if((!G__29220.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29220);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29220);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.ValSeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ValSeq(self__.mseq,new_meta));
});

cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ValSeq.cljs$lang$type = true;

cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";

cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ValSeq");
});

cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){
return (new cljs.core.ValSeq(mseq,_meta));
});

(cljs.core.ValSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.ValSeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__29221_SHARP_,p2__29222_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3721__auto__ = p1__29221_SHARP_;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__29222_SHARP_);
}),maps);
} else {
return null;
}
};
var merge = function (var_args){
var maps = null;
if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__29223){
var maps = cljs.core.seq(arglist__29223);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first(e);
var v = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__29226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__29227 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29226,G__29227) : f.call(null,G__29226,G__29227));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3721__auto__ = m1;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else {
return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__29228){
var f = cljs.core.first(arglist__29228);
var maps = cljs.core.rest(arglist__29228);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var keys = cljs.core.seq(keyseq);
while(true){
if(keys){
var key = cljs.core.first(keys);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$14);
var G__29229 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$14))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__29230 = cljs.core.next(keys);
ret = G__29229;
keys = G__29230;
continue;
} else {
return cljs.core.with_meta(ret,cljs.core.meta(map));
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__29233 = cljs.core.seq(coll);
var chunk__29234 = null;
var count__29235 = (0);
var i__29236 = (0);
while(true){
if((i__29236 < count__29235)){
var vec__29237 = chunk__29234.cljs$core$IIndexed$_nth$arity$2(null,i__29236);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29237,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29237,(1),null);
var G__29238_29243 = v;
var G__29239_29244 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29238_29243,G__29239_29244) : f.call(null,G__29238_29243,G__29239_29244));

var G__29245 = seq__29233;
var G__29246 = chunk__29234;
var G__29247 = count__29235;
var G__29248 = (i__29236 + (1));
seq__29233 = G__29245;
chunk__29234 = G__29246;
count__29235 = G__29247;
i__29236 = G__29248;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__29233);
if(temp__4126__auto__){
var seq__29233__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29233__$1)){
var c__4508__auto__ = cljs.core.chunk_first(seq__29233__$1);
var G__29249 = cljs.core.chunk_rest(seq__29233__$1);
var G__29250 = c__4508__auto__;
var G__29251 = cljs.core.count(c__4508__auto__);
var G__29252 = (0);
seq__29233 = G__29249;
chunk__29234 = G__29250;
count__29235 = G__29251;
i__29236 = G__29252;
continue;
} else {
var vec__29240 = cljs.core.first(seq__29233__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29240,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29240,(1),null);
var G__29241_29253 = v;
var G__29242_29254 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29241_29253,G__29242_29254) : f.call(null,G__29241_29253,G__29242_29254));

var G__29255 = cljs.core.next(seq__29233__$1);
var G__29256 = null;
var G__29257 = (0);
var G__29258 = (0);
seq__29233 = G__29255;
chunk__29234 = G__29256;
count__29235 = G__29257;
i__29236 = G__29258;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.hash_map,v)){
return v;
} else {
return not_found;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__29231_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__29231_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});

cljs.core.PersistentHashSet.prototype.call = (function() {
var G__29259 = null;
var G__29259__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29259__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29259 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29259__2.call(this,self__,k);
case 3:
return G__29259__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29259.cljs$core$IFn$_invoke$arity$2 = G__29259__2;
G__29259.cljs$core$IFn$_invoke$arity$3 = G__29259__3;
return G__29259;
})()
;

cljs.core.PersistentHashSet.prototype.apply = (function (self__,args29232){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29232)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashSet.cljs$lang$type = true;

cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";

cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentHashSet");
});

cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){
return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});

cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){
var len = items.length;
if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr = ((no_clone)?items:cljs.core.aclone(items));
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__29260 = (i + (1));
var G__29261 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__29260;
out = G__29261;
continue;
} else {
return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else {
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__29262 = (i + (1));
var G__29263 = cljs.core._conj_BANG_(out,(items[i]));
i = G__29262;
out = G__29263;
continue;
} else {
return cljs.core._persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentHashSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.prototype.call = (function() {
var G__29265 = null;
var G__29265__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});
var G__29265__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});
G__29265 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29265__2.call(this,self__,k);
case 3:
return G__29265__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29265.cljs$core$IFn$_invoke$arity$2 = G__29265__2;
G__29265.cljs$core$IFn$_invoke$arity$3 = G__29265__3;
return G__29265;
})()
;

cljs.core.TransientHashSet.prototype.apply = (function (self__,args29264){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29264)));
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
var tcoll__$1 = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return v;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return cljs.core.count(self__.transient_map);
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});

cljs.core.TransientHashSet.cljs$lang$type = true;

cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";

cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/TransientHashSet");
});

cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){
return (new cljs.core.TransientHashSet(transient_map));
});


/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__29268 = cljs.core.seq(coll);
var chunk__29269 = null;
var count__29270 = (0);
var i__29271 = (0);
while(true){
if((i__29271 < count__29270)){
var vec__29272 = chunk__29269.cljs$core$IIndexed$_nth$arity$2(null,i__29271);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29272,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29272,(1),null);
var G__29273_29278 = v;
var G__29274_29279 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29273_29278,G__29274_29279) : f.call(null,G__29273_29278,G__29274_29279));

var G__29280 = seq__29268;
var G__29281 = chunk__29269;
var G__29282 = count__29270;
var G__29283 = (i__29271 + (1));
seq__29268 = G__29280;
chunk__29269 = G__29281;
count__29270 = G__29282;
i__29271 = G__29283;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__29268);
if(temp__4126__auto__){
var seq__29268__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29268__$1)){
var c__4508__auto__ = cljs.core.chunk_first(seq__29268__$1);
var G__29284 = cljs.core.chunk_rest(seq__29268__$1);
var G__29285 = c__4508__auto__;
var G__29286 = cljs.core.count(c__4508__auto__);
var G__29287 = (0);
seq__29268 = G__29284;
chunk__29269 = G__29285;
count__29270 = G__29286;
i__29271 = G__29287;
continue;
} else {
var vec__29275 = cljs.core.first(seq__29268__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29275,(1),null);
var G__29276_29288 = v;
var G__29277_29289 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29276_29288,G__29277_29289) : f.call(null,G__29276_29288,G__29277_29289));

var G__29290 = cljs.core.next(seq__29268__$1);
var G__29291 = null;
var G__29292 = (0);
var G__29293 = (0);
seq__29268 = G__29290;
chunk__29269 = G__29291;
count__29270 = G__29292;
i__29271 = G__29293;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null))){
return n.key;
} else {
return not_found;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core.count(self__.tree_map) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else {
return null;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__29266_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__29266_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core._empty(self__.tree_map),(0)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});

cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__29294 = null;
var G__29294__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29294__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29294 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29294__2.call(this,self__,k);
case 3:
return G__29294__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29294.cljs$core$IFn$_invoke$arity$2 = G__29294__2;
G__29294.cljs$core$IFn$_invoke$arity$3 = G__29294__3;
return G__29294;
})()
;

cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args29267){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29267)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return entry;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._comparator(self__.tree_map);
});

cljs.core.PersistentTreeSet.cljs$lang$type = true;

cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";

cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/PersistentTreeSet");
});

cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){
return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});

cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
(cljs.core.PersistentTreeSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){
var arr = iseq.arr;
var ret = (function (){var a__4602__auto__ = arr;
var i = (0);
var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < a__4602__auto__.length)){
var G__29295 = (i + (1));
var G__29296 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__29295;
res = G__29296;
continue;
} else {
return res;
}
break;
}
})();
return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$ = cljs.core.seq(coll);
if((in$ == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0)))){
return cljs.core.set_from_indexed_seq(in$);
} else {
var in$__$1 = in$;
var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(!((in$__$1 == null))){
var G__29297 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__29298 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__29297;
out = G__29298;
continue;
} else {
return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__29299__delegate = function (keys){
return cljs.core.set(keys);
};
var G__29299 = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29299__delegate.call(this,keys);};
G__29299.cljs$lang$maxFixedArity = 0;
G__29299.cljs$lang$applyTo = (function (arglist__29300){
var keys = cljs.core.seq(arglist__29300);
return G__29299__delegate(keys);
});
G__29299.cljs$core$IFn$_invoke$arity$variadic = G__29299__delegate;
return G__29299;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__29301){
var keys = cljs.core.seq(arglist__29301);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__29302){
var comparator = cljs.core.first(arglist__29302);
var keys = cljs.core.rest(arglist__29302);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29303_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__29303_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.val(e);
} else {
return p1__29303_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){
if(cljs.core.vector_QMARK_(coll)){
var n = cljs.core.count(coll);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){
var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else {
return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29304_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__29304_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.second(e);
} else {
return p1__29304_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__29315,seen__$1){
while(true){
var vec__29316 = p__29315;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29316,(0),null);
var xs__$1 = vec__29316;
var temp__4126__auto__ = cljs.core.seq(xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.contains_QMARK_(seen__$1,f)){
var G__29317 = cljs.core.rest(s);
var G__29318 = seen__$1;
p__29315 = G__29317;
seen__$1 = G__29318;
continue;
} else {
return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next(s__$1)){
var G__29319 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__29320 = cljs.core.next(s__$1);
ret = G__29319;
s__$1 = G__29320;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if((function (){var G__29322 = x;
if(G__29322){
var bit__4395__auto__ = (G__29322.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4395__auto__) || (G__29322.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_name$arity$1(null);
} else {
if(typeof x === 'string'){
return x;
} else {
throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks = cljs.core.seq(keys);
var vs = cljs.core.seq(vals);
while(true){
if((ks) && (vs)){
var G__29323 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__29324 = cljs.core.next(ks);
var G__29325 = cljs.core.next(vs);
map = G__29323;
ks = G__29324;
vs = G__29325;
continue;
} else {
return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((function (){var G__29336 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__29336) : k.call(null,G__29336));
})() > (function (){var G__29337 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__29337) : k.call(null,G__29337));
})())){
return x;
} else {
return y;
}
});
var max_key__4 = (function() { 
var G__29338__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29326_SHARP_,p2__29327_SHARP_){
return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__29326_SHARP_,p2__29327_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__29338 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29338__delegate.call(this,k,x,y,more);};
G__29338.cljs$lang$maxFixedArity = 3;
G__29338.cljs$lang$applyTo = (function (arglist__29339){
var k = cljs.core.first(arglist__29339);
arglist__29339 = cljs.core.next(arglist__29339);
var x = cljs.core.first(arglist__29339);
arglist__29339 = cljs.core.next(arglist__29339);
var y = cljs.core.first(arglist__29339);
var more = cljs.core.rest(arglist__29339);
return G__29338__delegate(k,x,y,more);
});
G__29338.cljs$core$IFn$_invoke$arity$variadic = G__29338__delegate;
return G__29338;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((function (){var G__29350 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__29350) : k.call(null,G__29350));
})() < (function (){var G__29351 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__29351) : k.call(null,G__29351));
})())){
return x;
} else {
return y;
}
});
var min_key__4 = (function() { 
var G__29352__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29340_SHARP_,p2__29341_SHARP_){
return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__29340_SHARP_,p2__29341_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__29352 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29352__delegate.call(this,k,x,y,more);};
G__29352.cljs$lang$maxFixedArity = 3;
G__29352.cljs$lang$applyTo = (function (arglist__29353){
var k = cljs.core.first(arglist__29353);
arglist__29353 = cljs.core.next(arglist__29353);
var x = cljs.core.first(arglist__29353);
arglist__29353 = cljs.core.next(arglist__29353);
var y = cljs.core.first(arglist__29353);
var more = cljs.core.rest(arglist__29353);
return G__29352__delegate(k,x,y,more);
});
G__29352.cljs$core$IFn$_invoke$arity$variadic = G__29352__delegate;
return G__29352;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.prototype.add = (function (x){
var self__ = this;
var _ = this;
return self__.arr.push(x);
});

cljs.core.ArrayList.prototype.size = (function (){
var self__ = this;
var _ = this;
return self__.arr.length;
});

cljs.core.ArrayList.prototype.clear = (function (){
var self__ = this;
var _ = this;
return self__.arr = [];
});

cljs.core.ArrayList.prototype.isEmpty = (function (){
var self__ = this;
var _ = this;
return (self__.arr.length === (0));
});

cljs.core.ArrayList.prototype.toArray = (function (){
var self__ = this;
var _ = this;
return self__.arr;
});

cljs.core.ArrayList.cljs$lang$type = true;

cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";

cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ArrayList");
});

cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){
return (new cljs.core.ArrayList(arr));
});

cljs.core.array_list = (function array_list(){
return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){
return (function (rf){
var a = cljs.core.array_list();
return ((function (a){
return (function() {
var G__29370 = null;
var G__29370__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29370__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__29365 = result;
var G__29366 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29365,G__29366) : rf.call(null,G__29365,G__29366));
})());
})());
var G__29367 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29367) : rf.call(null,G__29367));
});
var G__29370__2 = (function (result,input){
a.add(input);

if((n === a.size())){
var v = cljs.core.vec(a.toArray());
a.clear();

var G__29368 = result;
var G__29369 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29368,G__29369) : rf.call(null,G__29368,G__29369));
} else {
return result;
}
});
G__29370 = function(result,input){
switch(arguments.length){
case 0:
return G__29370__0.call(this);
case 1:
return G__29370__1.call(this,result);
case 2:
return G__29370__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29370.cljs$core$IFn$_invoke$arity$0 = G__29370__0;
G__29370.cljs$core$IFn$_invoke$arity$1 = G__29370__1;
G__29370.cljs$core$IFn$_invoke$arity$2 = G__29370__2;
return G__29370;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){
return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){
return (function (rf){
return (function() {
var G__29383 = null;
var G__29383__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29383__1 = (function (result){
var G__29378 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29378) : rf.call(null,G__29378));
});
var G__29383__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__29379 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__29379) : pred.call(null,G__29379));
})())){
var G__29380 = result;
var G__29381 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29380,G__29381) : rf.call(null,G__29380,G__29381));
} else {
return cljs.core.reduced(result);
}
});
G__29383 = function(result,input){
switch(arguments.length){
case 0:
return G__29383__0.call(this);
case 1:
return G__29383__1.call(this,result);
case 2:
return G__29383__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29383.cljs$core$IFn$_invoke$arity$0 = G__29383__0;
G__29383.cljs$core$IFn$_invoke$arity$1 = G__29383__1;
G__29383.cljs$core$IFn$_invoke$arity$2 = G__29383__2;
return G__29383;
})()
});
});
var take_while__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.truth_((function (){var G__29382 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__29382) : pred.call(null,G__29382));
})())){
return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator(sc);
var G__29388 = (function (){var G__29390 = cljs.core._entry_key(sc,e);
var G__29391 = key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__29390,G__29391) : comp.call(null,G__29390,G__29391));
})();
var G__29389 = (0);
return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__29388,G__29389) : test.call(null,G__29388,G__29389));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__29395 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29395,(0),null);
var s = vec__29395;
if(cljs.core.truth_((function (){var G__29396 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__29396) : include.call(null,G__29396));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__29397 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29397,(0),null);
var s = vec__29397;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__29401 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29401,(0),null);
var s = vec__29401;
if(cljs.core.truth_((function (){var G__29402 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__29402) : include.call(null,G__29402));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__29403 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29403,(0),null);
var s = vec__29403;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__.step > (0))){
return (self__.i < self__.end);
} else {
return (self__.i > self__.end);
}
});

cljs.core.RangeIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.i;
self__.i = (self__.i + self__.step);

return ret;
});

cljs.core.RangeIterator.cljs$lang$type = true;

cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";

cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/RangeIterator");
});

cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){
return (new cljs.core.RangeIterator(i,end,step));
});


/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Range.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
throw (new Error("Index out of bounds"));
}
}
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
return not_found;
}
}
});

cljs.core.Range.prototype.cljs$core$IIterable$ = true;

cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});

cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return self__.meta;
});

cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if(((self__.start + self__.step) < self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
} else {
if(((self__.start + self__.step) > self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(cljs.core.not(cljs.core._seq(rng__$1))){
return (0);
} else {
var G__29404 = ((self__.end - self__.start) / self__.step);
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__29404) : Math.ceil.call(null,G__29404));
}
});

cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
var h__4142__auto__ = self__.__hash;
if(!((h__4142__auto__ == null))){
return h__4142__auto__;
} else {
var h__4142__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);
self__.__hash = h__4142__auto____$1;

return h__4142__auto____$1;
}
});

cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
var rng__$1 = this;
return cljs.core.equiv_sequential(rng__$1,other);
});

cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
var rng__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){
var self__ = this;
var rng__$1 = this;
var i = self__.start;
var ret = init;
while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end))){
var ret__$1 = (function (){var G__29405 = ret;
var G__29406 = i;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29405,G__29406) : f.call(null,G__29405,G__29406));
})();
if(cljs.core.reduced_QMARK_(ret__$1)){
var G__29407 = ret__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29407) : cljs.core.deref.call(null,G__29407));
} else {
var G__29408 = (i + self__.step);
var G__29409 = ret__$1;
i = G__29408;
ret = G__29409;
continue;
}
} else {
return ret;
}
break;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((cljs.core._seq(rng__$1) == null)){
return null;
} else {
return self__.start;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(!((cljs.core._seq(rng__$1) == null))){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if((self__.start < self__.end)){
return rng__$1;
} else {
return null;
}
} else {
if((self__.start > self__.end)){
return rng__$1;
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
var rng__$1 = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
var rng__$1 = this;
return cljs.core.cons(o,rng__$1);
});

cljs.core.Range.cljs$lang$type = true;

cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";

cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Range");
});

cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){
return (new cljs.core.Range(meta,start,end,step,__hash));
});

(cljs.core.Range.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){
return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){
return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__29427 = null;
var G__29427__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29427__1 = (function (result){
var G__29424 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29424) : rf.call(null,G__29424));
});
var G__29427__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
if((cljs.core.rem(i,n) === (0))){
var G__29425 = result;
var G__29426 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29425,G__29426) : rf.call(null,G__29425,G__29426));
} else {
return result;
}
});
G__29427 = function(result,input){
switch(arguments.length){
case 0:
return G__29427__0.call(this);
case 1:
return G__29427__1.call(this,result);
case 2:
return G__29427__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29427.cljs$core$IFn$_invoke$arity$0 = G__29427__0;
G__29427.cljs$core$IFn$_invoke$arity$1 = G__29427__1;
G__29427.cljs$core$IFn$_invoke$arity$2 = G__29427__2;
return G__29427;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else {
return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){
return (function (rf){
var a = cljs.core.array_list();
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$15);
return ((function (a,pa){
return (function() {
var G__29449 = null;
var G__29449__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29449__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__29440 = result;
var G__29441 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29440,G__29441) : rf.call(null,G__29440,G__29441));
})());
})());
var G__29442 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29442) : rf.call(null,G__29442));
});
var G__29449__2 = (function (result,input){
var pval = (function (){var G__29443 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29443) : cljs.core.deref.call(null,G__29443));
})();
var val = (function (){var G__29444 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29444) : f.call(null,G__29444));
})();
cljs.core.vreset_BANG_(pa,val);

if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$15)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval))){
a.add(input);

return result;
} else {
var v = cljs.core.vec(a.toArray());
a.clear();

var ret = (function (){var G__29445 = result;
var G__29446 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29445,G__29446) : rf.call(null,G__29445,G__29446));
})();
if(cljs.core.reduced_QMARK_(ret)){
} else {
a.add(input);
}

return ret;
}
});
G__29449 = function(result,input){
switch(arguments.length){
case 0:
return G__29449__0.call(this);
case 1:
return G__29449__1.call(this,result);
case 2:
return G__29449__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29449.cljs$core$IFn$_invoke$arity$0 = G__29449__0;
G__29449.cljs$core$IFn$_invoke$arity$1 = G__29449__1;
G__29449.cljs$core$IFn$_invoke$arity$2 = G__29449__2;
return G__29449;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var fst = cljs.core.first(s);
var fv = (function (){var G__29447 = fst;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29447) : f.call(null,G__29447));
})();
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__29428_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__29448 = p1__29428_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29448) : f.call(null,G__29448));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));
return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else {
return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__29458 = init;
var G__29459 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29458,G__29459) : f.call(null,G__29458,G__29459));
})(),cljs.core.rest(s));
} else {
return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__29554 = null;
var G__29554__0 = (function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__29554__1 = (function (x){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29512 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29512) : f.call(null,G__29512));
})()],null));
});
var G__29554__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29513 = x;
var G__29514 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29513,G__29514) : f.call(null,G__29513,G__29514));
})()],null));
});
var G__29554__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29515 = x;
var G__29516 = y;
var G__29517 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29515,G__29516,G__29517) : f.call(null,G__29515,G__29516,G__29517));
})()],null));
});
var G__29554__4 = (function() { 
var G__29555__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__29555 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29555__delegate.call(this,x,y,z,args);};
G__29555.cljs$lang$maxFixedArity = 3;
G__29555.cljs$lang$applyTo = (function (arglist__29556){
var x = cljs.core.first(arglist__29556);
arglist__29556 = cljs.core.next(arglist__29556);
var y = cljs.core.first(arglist__29556);
arglist__29556 = cljs.core.next(arglist__29556);
var z = cljs.core.first(arglist__29556);
var args = cljs.core.rest(arglist__29556);
return G__29555__delegate(x,y,z,args);
});
G__29555.cljs$core$IFn$_invoke$arity$variadic = G__29555__delegate;
return G__29555;
})()
;
G__29554 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29554__0.call(this);
case 1:
return G__29554__1.call(this,x);
case 2:
return G__29554__2.call(this,x,y);
case 3:
return G__29554__3.call(this,x,y,z);
default:
return G__29554__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29554.cljs$lang$maxFixedArity = 3;
G__29554.cljs$lang$applyTo = G__29554__4.cljs$lang$applyTo;
G__29554.cljs$core$IFn$_invoke$arity$0 = G__29554__0;
G__29554.cljs$core$IFn$_invoke$arity$1 = G__29554__1;
G__29554.cljs$core$IFn$_invoke$arity$2 = G__29554__2;
G__29554.cljs$core$IFn$_invoke$arity$3 = G__29554__3;
G__29554.cljs$core$IFn$_invoke$arity$variadic = G__29554__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29554;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__29557 = null;
var G__29557__0 = (function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__29557__1 = (function (x){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29518 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29518) : f.call(null,G__29518));
})(),(function (){var G__29519 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__29519) : g.call(null,G__29519));
})()],null));
});
var G__29557__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29520 = x;
var G__29521 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29520,G__29521) : f.call(null,G__29520,G__29521));
})(),(function (){var G__29522 = x;
var G__29523 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__29522,G__29523) : g.call(null,G__29522,G__29523));
})()],null));
});
var G__29557__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29524 = x;
var G__29525 = y;
var G__29526 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29524,G__29525,G__29526) : f.call(null,G__29524,G__29525,G__29526));
})(),(function (){var G__29527 = x;
var G__29528 = y;
var G__29529 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__29527,G__29528,G__29529) : g.call(null,G__29527,G__29528,G__29529));
})()],null));
});
var G__29557__4 = (function() { 
var G__29558__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__29558 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29558__delegate.call(this,x,y,z,args);};
G__29558.cljs$lang$maxFixedArity = 3;
G__29558.cljs$lang$applyTo = (function (arglist__29559){
var x = cljs.core.first(arglist__29559);
arglist__29559 = cljs.core.next(arglist__29559);
var y = cljs.core.first(arglist__29559);
arglist__29559 = cljs.core.next(arglist__29559);
var z = cljs.core.first(arglist__29559);
var args = cljs.core.rest(arglist__29559);
return G__29558__delegate(x,y,z,args);
});
G__29558.cljs$core$IFn$_invoke$arity$variadic = G__29558__delegate;
return G__29558;
})()
;
G__29557 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29557__0.call(this);
case 1:
return G__29557__1.call(this,x);
case 2:
return G__29557__2.call(this,x,y);
case 3:
return G__29557__3.call(this,x,y,z);
default:
return G__29557__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29557.cljs$lang$maxFixedArity = 3;
G__29557.cljs$lang$applyTo = G__29557__4.cljs$lang$applyTo;
G__29557.cljs$core$IFn$_invoke$arity$0 = G__29557__0;
G__29557.cljs$core$IFn$_invoke$arity$1 = G__29557__1;
G__29557.cljs$core$IFn$_invoke$arity$2 = G__29557__2;
G__29557.cljs$core$IFn$_invoke$arity$3 = G__29557__3;
G__29557.cljs$core$IFn$_invoke$arity$variadic = G__29557__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29557;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__29560 = null;
var G__29560__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__29560__1 = (function (x){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29530 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29530) : f.call(null,G__29530));
})(),(function (){var G__29531 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__29531) : g.call(null,G__29531));
})(),(function (){var G__29532 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__29532) : h.call(null,G__29532));
})()],null));
});
var G__29560__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29533 = x;
var G__29534 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29533,G__29534) : f.call(null,G__29533,G__29534));
})(),(function (){var G__29535 = x;
var G__29536 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__29535,G__29536) : g.call(null,G__29535,G__29536));
})(),(function (){var G__29537 = x;
var G__29538 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__29537,G__29538) : h.call(null,G__29537,G__29538));
})()],null));
});
var G__29560__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29539 = x;
var G__29540 = y;
var G__29541 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29539,G__29540,G__29541) : f.call(null,G__29539,G__29540,G__29541));
})(),(function (){var G__29542 = x;
var G__29543 = y;
var G__29544 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__29542,G__29543,G__29544) : g.call(null,G__29542,G__29543,G__29544));
})(),(function (){var G__29545 = x;
var G__29546 = y;
var G__29547 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__29545,G__29546,G__29547) : h.call(null,G__29545,G__29546,G__29547));
})()],null));
});
var G__29560__4 = (function() { 
var G__29561__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__29561 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29561__delegate.call(this,x,y,z,args);};
G__29561.cljs$lang$maxFixedArity = 3;
G__29561.cljs$lang$applyTo = (function (arglist__29562){
var x = cljs.core.first(arglist__29562);
arglist__29562 = cljs.core.next(arglist__29562);
var y = cljs.core.first(arglist__29562);
arglist__29562 = cljs.core.next(arglist__29562);
var z = cljs.core.first(arglist__29562);
var args = cljs.core.rest(arglist__29562);
return G__29561__delegate(x,y,z,args);
});
G__29561.cljs$core$IFn$_invoke$arity$variadic = G__29561__delegate;
return G__29561;
})()
;
G__29560 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29560__0.call(this);
case 1:
return G__29560__1.call(this,x);
case 2:
return G__29560__2.call(this,x,y);
case 3:
return G__29560__3.call(this,x,y,z);
default:
return G__29560__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29560.cljs$lang$maxFixedArity = 3;
G__29560.cljs$lang$applyTo = G__29560__4.cljs$lang$applyTo;
G__29560.cljs$core$IFn$_invoke$arity$0 = G__29560__0;
G__29560.cljs$core$IFn$_invoke$arity$1 = G__29560__1;
G__29560.cljs$core$IFn$_invoke$arity$2 = G__29560__2;
G__29560.cljs$core$IFn$_invoke$arity$3 = G__29560__3;
G__29560.cljs$core$IFn$_invoke$arity$variadic = G__29560__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29560;
})()
});
var juxt__4 = (function() { 
var G__29563__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);
return ((function (fs__$1){
return (function() {
var G__29564 = null;
var G__29564__0 = (function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29460_SHARP_,p2__29461_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29460_SHARP_,(function (){return (p2__29461_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__29461_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__29461_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29564__1 = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29462_SHARP_,p2__29463_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29462_SHARP_,(function (){var G__29548 = x;
return (p2__29463_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__29463_SHARP_.cljs$core$IFn$_invoke$arity$1(G__29548) : p2__29463_SHARP_.call(null,G__29548));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29564__2 = (function (x,y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29464_SHARP_,p2__29465_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29464_SHARP_,(function (){var G__29549 = x;
var G__29550 = y;
return (p2__29465_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__29465_SHARP_.cljs$core$IFn$_invoke$arity$2(G__29549,G__29550) : p2__29465_SHARP_.call(null,G__29549,G__29550));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29564__3 = (function (x,y,z){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29466_SHARP_,p2__29467_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29466_SHARP_,(function (){var G__29551 = x;
var G__29552 = y;
var G__29553 = z;
return (p2__29467_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__29467_SHARP_.cljs$core$IFn$_invoke$arity$3(G__29551,G__29552,G__29553) : p2__29467_SHARP_.call(null,G__29551,G__29552,G__29553));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29564__4 = (function() { 
var G__29565__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29468_SHARP_,p2__29469_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29468_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__29469_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__29565 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29565__delegate.call(this,x,y,z,args);};
G__29565.cljs$lang$maxFixedArity = 3;
G__29565.cljs$lang$applyTo = (function (arglist__29566){
var x = cljs.core.first(arglist__29566);
arglist__29566 = cljs.core.next(arglist__29566);
var y = cljs.core.first(arglist__29566);
arglist__29566 = cljs.core.next(arglist__29566);
var z = cljs.core.first(arglist__29566);
var args = cljs.core.rest(arglist__29566);
return G__29565__delegate(x,y,z,args);
});
G__29565.cljs$core$IFn$_invoke$arity$variadic = G__29565__delegate;
return G__29565;
})()
;
G__29564 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29564__0.call(this);
case 1:
return G__29564__1.call(this,x);
case 2:
return G__29564__2.call(this,x,y);
case 3:
return G__29564__3.call(this,x,y,z);
default:
return G__29564__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29564.cljs$lang$maxFixedArity = 3;
G__29564.cljs$lang$applyTo = G__29564__4.cljs$lang$applyTo;
G__29564.cljs$core$IFn$_invoke$arity$0 = G__29564__0;
G__29564.cljs$core$IFn$_invoke$arity$1 = G__29564__1;
G__29564.cljs$core$IFn$_invoke$arity$2 = G__29564__2;
G__29564.cljs$core$IFn$_invoke$arity$3 = G__29564__3;
G__29564.cljs$core$IFn$_invoke$arity$variadic = G__29564__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29564;
})()
;})(fs__$1))
};
var G__29563 = function (f,g,h,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29563__delegate.call(this,f,g,h,fs);};
G__29563.cljs$lang$maxFixedArity = 3;
G__29563.cljs$lang$applyTo = (function (arglist__29567){
var f = cljs.core.first(arglist__29567);
arglist__29567 = cljs.core.next(arglist__29567);
var g = cljs.core.first(arglist__29567);
arglist__29567 = cljs.core.next(arglist__29567);
var h = cljs.core.first(arglist__29567);
var fs = cljs.core.rest(arglist__29567);
return G__29563__delegate(f,g,h,fs);
});
G__29563.cljs$core$IFn$_invoke$arity$variadic = G__29563__delegate;
return G__29563;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll)){
var G__29568 = cljs.core.next(coll);
coll = G__29568;
continue;
} else {
return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if((cljs.core.seq(coll)) && ((n > (0)))){
var G__29569 = (n - (1));
var G__29570 = cljs.core.next(coll);
n = G__29569;
coll = G__29570;
continue;
} else {
return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);

return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);

return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s)){
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
} else {
return null;
}
} else {
throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if((matches == null)){
return null;
} else {
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
}
} else {
throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find(re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);
var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));
if(cljs.core.truth_(match_data)){
return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){
return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else {
return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
if((s instanceof RegExp)){
return s;
} else {
var vec__29574 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29574,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29574,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29574,(2),null);
return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
var _STAR_print_level_STAR_29582 = cljs.core._STAR_print_level_STAR_;
try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));

if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0)))){
return cljs.core._write(writer,"#");
} else {
cljs.core._write(writer,begin);

if(cljs.core.seq(coll)){
var G__29583_29589 = cljs.core.first(coll);
var G__29584_29590 = writer;
var G__29585_29591 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29583_29589,G__29584_29590,G__29585_29591) : print_one.call(null,G__29583_29589,G__29584_29590,G__29585_29591));
} else {
}

var coll_29592__$1 = cljs.core.next(coll);
var n_29593 = (cljs.core.constant$keyword$5.cljs$core$IFn$_invoke$arity$1(opts) - (1));
while(true){
if((coll_29592__$1) && (((n_29593 == null)) || (!((n_29593 === (0)))))){
cljs.core._write(writer,sep);

var G__29586_29594 = cljs.core.first(coll_29592__$1);
var G__29587_29595 = writer;
var G__29588_29596 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29586_29594,G__29587_29595,G__29588_29596) : print_one.call(null,G__29586_29594,G__29587_29595,G__29588_29596));

var G__29597 = cljs.core.next(coll_29592__$1);
var G__29598 = (n_29593 - (1));
coll_29592__$1 = G__29597;
n_29593 = G__29598;
continue;
} else {
if((cljs.core.seq(coll_29592__$1)) && ((n_29593 === (0)))){
cljs.core._write(writer,sep);

cljs.core._write(writer,"...");
} else {
}
}
break;
}

return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29582;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var seq__29603 = cljs.core.seq(ss);
var chunk__29604 = null;
var count__29605 = (0);
var i__29606 = (0);
while(true){
if((i__29606 < count__29605)){
var s = chunk__29604.cljs$core$IIndexed$_nth$arity$2(null,i__29606);
cljs.core._write(writer,s);

var G__29607 = seq__29603;
var G__29608 = chunk__29604;
var G__29609 = count__29605;
var G__29610 = (i__29606 + (1));
seq__29603 = G__29607;
chunk__29604 = G__29608;
count__29605 = G__29609;
i__29606 = G__29610;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__29603);
if(temp__4126__auto__){
var seq__29603__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29603__$1)){
var c__4508__auto__ = cljs.core.chunk_first(seq__29603__$1);
var G__29611 = cljs.core.chunk_rest(seq__29603__$1);
var G__29612 = c__4508__auto__;
var G__29613 = cljs.core.count(c__4508__auto__);
var G__29614 = (0);
seq__29603 = G__29611;
chunk__29604 = G__29612;
count__29605 = G__29613;
i__29606 = G__29614;
continue;
} else {
var s = cljs.core.first(seq__29603__$1);
cljs.core._write(writer,s);

var G__29615 = cljs.core.next(seq__29603__$1);
var G__29616 = null;
var G__29617 = (0);
var G__29618 = (0);
seq__29603 = G__29615;
chunk__29604 = G__29616;
count__29605 = G__29617;
i__29606 = G__29618;
continue;
}
} else {
return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__29619){
var writer = cljs.core.first(arglist__29619);
var ss = cljs.core.rest(arglist__29619);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));

return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.char_escapes = (function (){var obj29621 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
return obj29621;
})();
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace((function (){var G__29624 = "[\\\\\"\b\f\n\r\t]";
var G__29625 = "g";
return RegExp(G__29624,G__29625);
})(),(function (match){
return (cljs.core.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if((void 0 === obj)){
return cljs.core._write(writer,"#<undefined>");
} else {
if(cljs.core.truth_((function (){var and__3709__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$3);
if(cljs.core.truth_(and__3709__auto__)){
var and__3709__auto____$1 = (function (){var G__29639 = obj;
if(G__29639){
var bit__4402__auto__ = (G__29639.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4402__auto__) || (G__29639.cljs$core$IMeta$)){
return true;
} else {
if((!G__29639.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__29639);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__29639);
}
})();
if(and__3709__auto____$1){
return cljs.core.meta(obj);
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
})())){
cljs.core._write(writer,"^");

pr_writer(cljs.core.meta(obj),writer,opts);

cljs.core._write(writer," ");
} else {
}

if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if(obj.cljs$lang$type){
return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else {
if((function (){var G__29640 = obj;
if(G__29640){
var bit__4395__auto__ = (G__29640.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4395__auto__) || (G__29640.cljs$core$IPrintWithWriter$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else {
if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number')){
return cljs.core._write(writer,[cljs.core.str(obj)].join(''));
} else {
if(cljs.core.object_QMARK_(obj)){
cljs.core._write(writer,"#js ");

var G__29641 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));
var G__29642 = pr_writer;
var G__29643 = writer;
var G__29644 = opts;
return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__29641,G__29642,G__29643,G__29644) : cljs.core.print_map.call(null,G__29641,G__29642,G__29643,G__29644));
} else {
if(obj instanceof Array){
return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else {
if(cljs.core.truth_((function (){var G__29645 = obj;
return goog.isString(G__29645);
})())){
if(cljs.core.truth_(cljs.core.constant$keyword$2.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core._write(writer,cljs.core.quote_string(obj));
} else {
return cljs.core._write(writer,obj);
}
} else {
if(cljs.core.fn_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
} else {
if((obj instanceof Date)){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns) < len)){
var G__29647 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__29647;
continue;
} else {
return ns;
}
break;
}
});
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else {
if(cljs.core.regexp_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else {
if((function (){var G__29646 = obj;
if(G__29646){
var bit__4402__auto__ = (G__29646.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4402__auto__) || (G__29646.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!G__29646.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__29646);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__29646);
}
})()){
return cljs.core._pr_writer(obj,writer,opts);
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));

}
}
}
}
}
}
}
}
}
}
}

}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer(cljs.core.first(objs),writer,opts);

var seq__29652 = cljs.core.seq(cljs.core.next(objs));
var chunk__29653 = null;
var count__29654 = (0);
var i__29655 = (0);
while(true){
if((i__29655 < count__29654)){
var obj = chunk__29653.cljs$core$IIndexed$_nth$arity$2(null,i__29655);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__29656 = seq__29652;
var G__29657 = chunk__29653;
var G__29658 = count__29654;
var G__29659 = (i__29655 + (1));
seq__29652 = G__29656;
chunk__29653 = G__29657;
count__29654 = G__29658;
i__29655 = G__29659;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__29652);
if(temp__4126__auto__){
var seq__29652__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29652__$1)){
var c__4508__auto__ = cljs.core.chunk_first(seq__29652__$1);
var G__29660 = cljs.core.chunk_rest(seq__29652__$1);
var G__29661 = c__4508__auto__;
var G__29662 = cljs.core.count(c__4508__auto__);
var G__29663 = (0);
seq__29652 = G__29660;
chunk__29653 = G__29661;
count__29654 = G__29662;
i__29655 = G__29663;
continue;
} else {
var obj = cljs.core.first(seq__29652__$1);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__29664 = cljs.core.next(seq__29652__$1);
var G__29665 = null;
var G__29666 = (0);
var G__29667 = (0);
seq__29652 = G__29664;
chunk__29653 = G__29665;
count__29654 = G__29666;
i__29655 = G__29667;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer(objs,writer,opts);

writer.cljs$core$IWriter$_flush$arity$1(null);

return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "";
} else {
return [cljs.core.str(cljs.core.pr_sb_with_opts(objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "\n";
} else {
var sb = cljs.core.pr_sb_with_opts(objs,opts);
sb.append("\n");

return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1))){
return cljs.core.flush();
} else {
return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__29668){
var objs = cljs.core.seq(arglist__29668);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__29669){
var objs = cljs.core.seq(arglist__29669);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__29670){
var objs = cljs.core.seq(arglist__29670);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__29671){
var objs = cljs.core.seq(arglist__29671);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var print_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__29672){
var objs = cljs.core.seq(arglist__29672);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var println = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__29673){
var objs = cljs.core.seq(arglist__29673);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var println_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__29674){
var objs = cljs.core.seq(arglist__29674);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var prn = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__29675){
var objs = cljs.core.seq(arglist__29675);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){
return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){
var G__29682_29688 = cljs.core.key(e);
var G__29683_29689 = w;
var G__29684_29690 = opts__$1;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29682_29688,G__29683_29689,G__29684_29690) : print_one.call(null,G__29682_29688,G__29683_29689,G__29684_29690));

cljs.core._write(w," ");

var G__29685 = cljs.core.val(e);
var G__29686 = w;
var G__29687 = opts__$1;
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29685,G__29686,G__29687) : print_one.call(null,G__29685,G__29686,G__29687));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Volatile: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#'");

return cljs.core.pr_writer(a__$1.sym,writer,opts);
});

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core._write(writer,"()");
});

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;

cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;

cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_keywords(x__$1,y);
});

cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;

cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__29691){
var iref = cljs.core.first(arglist__29691);
arglist__29691 = cljs.core.next(arglist__29691);
var f = cljs.core.first(arglist__29691);
var args = cljs.core.rest(arglist__29691);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
cljs.core._add_watch(iref,key,f);

return iref;
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
cljs.core._remove_watch(iref,key);

return iref;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null)){
cljs.core.gensym_counter = (function (){var G__29694 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29694) : cljs.core.atom.call(null,G__29694));
})();
} else {
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return cljs.core.not(self__.f);
});

cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.f)){
self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

self__.f = null;
} else {
}

return self__.value;
});

cljs.core.Delay.cljs$lang$type = true;

cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";

cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Delay");
});

cljs.core.__GT_Delay = (function __GT_Delay(f,value){
return (new cljs.core.Delay(f,value));
});

/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x)){
var G__29696 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29696) : cljs.core.deref.call(null,G__29696));
} else {
return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){
return (function (p1__29697_SHARP_,p2__29698_SHARP_){
var ret = (function (){var G__29701 = p1__29697_SHARP_;
var G__29702 = p2__29698_SHARP_;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29701,G__29702) : rf.call(null,G__29701,G__29702));
})();
if(cljs.core.reduced_QMARK_(ret)){
return cljs.core.reduced(ret);
} else {
return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){
var rf1 = cljs.core.preserving_reduced(rf);
return ((function (rf1){
return (function() {
var G__29705 = null;
var G__29705__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29705__1 = (function (result){
var G__29704 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29704) : rf.call(null,G__29704));
});
var G__29705__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__29705 = function(result,input){
switch(arguments.length){
case 0:
return G__29705__0.call(this);
case 1:
return G__29705__1.call(this,result);
case 2:
return G__29705__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29705.cljs$core$IFn$_invoke$arity$0 = G__29705__0;
G__29705.cljs$core$IFn$_invoke$arity$1 = G__29705__1;
G__29705.cljs$core$IFn$_invoke$arity$2 = G__29705__2;
return G__29705;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){
return (function (rf){
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$15);
return ((function (pa){
return (function() {
var G__29714 = null;
var G__29714__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29714__1 = (function (result){
var G__29710 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29710) : rf.call(null,G__29710));
});
var G__29714__2 = (function (result,input){
var prior = (function (){var G__29711 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29711) : cljs.core.deref.call(null,G__29711));
})();
cljs.core.vreset_BANG_(pa,input);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input)){
return result;
} else {
var G__29712 = result;
var G__29713 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29712,G__29713) : rf.call(null,G__29712,G__29713));
}
});
G__29714 = function(result,input){
switch(arguments.length){
case 0:
return G__29714__0.call(this);
case 1:
return G__29714__1.call(this,result);
case 2:
return G__29714__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29714.cljs$core$IFn$_invoke$arity$0 = G__29714__0;
G__29714.cljs$core$IFn$_invoke$arity$1 = G__29714__1;
G__29714.cljs$core$IFn$_invoke$arity$2 = G__29714__2;
return G__29714;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){
return ((function (){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0 ? cljs.core.rand.cljs$core$IFn$_invoke$arity$0() : cljs.core.rand.call(null));
})() < prob);
}));
});
var random_sample__2 = (function (prob,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){
return ((function (){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0 ? cljs.core.rand.cljs$core$IFn$_invoke$arity$0() : cljs.core.rand.call(null));
})() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){
var self__ = this;
var coll__$2 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});

cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});

cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});

cljs.core.Eduction.cljs$lang$type = true;

cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";

cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/Eduction");
});

cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});

(cljs.core.Eduction.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4699__auto__ = this;
return cljs.core.es6_iterator(this__4699__auto__);
}));
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29716_SHARP_,p2__29715_SHARP_){
var G__29718 = p2__29715_SHARP_;
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__29718) : proc.call(null,G__29718));
}),null,coll);
});

cljs.core.IEncodeJS = (function (){var obj29720 = {};
return obj29720;
})();

cljs.core._clj__GT_js = (function _clj__GT_js(x){
if((function (){var and__3709__auto__ = x;
if(and__3709__auto__){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else {
return and__3709__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__4365__auto__ = (((x == null))?null:x);
return (function (){var or__3721__auto__ = (cljs.core._clj__GT_js[(function (){var G__29724 = x__4365__auto__;
return goog.typeOf(G__29724);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});

cljs.core._key__GT_js = (function _key__GT_js(x){
if((function (){var and__3709__auto__ = x;
if(and__3709__auto__){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else {
return and__3709__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__4365__auto__ = (((x == null))?null:x);
return (function (){var or__3721__auto__ = (cljs.core._key__GT_js[(function (){var G__29728 = x__4365__auto__;
return goog.typeOf(G__29728);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});

cljs.core.key__GT_js = (function key__GT_js(k){
if((function (){var G__29731 = k;
if(G__29731){
var bit__4402__auto__ = null;
if(cljs.core.truth_((function (){var or__3721__auto__ = bit__4402__auto__;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return G__29731.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__29731.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29731);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29731);
}
})()){
return cljs.core._clj__GT_js(k);
} else {
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
var G__29732 = k;
return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__29732) : cljs.core.clj__GT_js.call(null,G__29732));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){
if((x == null)){
return null;
} else {
if((function (){var G__29748 = x;
if(G__29748){
var bit__4402__auto__ = null;
if(cljs.core.truth_((function (){var or__3721__auto__ = bit__4402__auto__;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return G__29748.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__29748.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29748);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29748);
}
})()){
return cljs.core._clj__GT_js(x);
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if((x instanceof cljs.core.Symbol)){
return [cljs.core.str(x)].join('');
} else {
if(cljs.core.map_QMARK_(x)){
var m = (function (){var obj29750 = {};
return obj29750;
})();
var seq__29751_29761 = cljs.core.seq(x);
var chunk__29752_29762 = null;
var count__29753_29763 = (0);
var i__29754_29764 = (0);
while(true){
if((i__29754_29764 < count__29753_29763)){
var vec__29755_29765 = chunk__29752_29762.cljs$core$IIndexed$_nth$arity$2(null,i__29754_29764);
var k_29766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29755_29765,(0),null);
var v_29767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29755_29765,(1),null);
(m[cljs.core.key__GT_js(k_29766)] = clj__GT_js(v_29767));

var G__29768 = seq__29751_29761;
var G__29769 = chunk__29752_29762;
var G__29770 = count__29753_29763;
var G__29771 = (i__29754_29764 + (1));
seq__29751_29761 = G__29768;
chunk__29752_29762 = G__29769;
count__29753_29763 = G__29770;
i__29754_29764 = G__29771;
continue;
} else {
var temp__4126__auto___29772 = cljs.core.seq(seq__29751_29761);
if(temp__4126__auto___29772){
var seq__29751_29773__$1 = temp__4126__auto___29772;
if(cljs.core.chunked_seq_QMARK_(seq__29751_29773__$1)){
var c__4508__auto___29774 = cljs.core.chunk_first(seq__29751_29773__$1);
var G__29775 = cljs.core.chunk_rest(seq__29751_29773__$1);
var G__29776 = c__4508__auto___29774;
var G__29777 = cljs.core.count(c__4508__auto___29774);
var G__29778 = (0);
seq__29751_29761 = G__29775;
chunk__29752_29762 = G__29776;
count__29753_29763 = G__29777;
i__29754_29764 = G__29778;
continue;
} else {
var vec__29756_29779 = cljs.core.first(seq__29751_29773__$1);
var k_29780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29756_29779,(0),null);
var v_29781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29756_29779,(1),null);
(m[cljs.core.key__GT_js(k_29780)] = clj__GT_js(v_29781));

var G__29782 = cljs.core.next(seq__29751_29773__$1);
var G__29783 = null;
var G__29784 = (0);
var G__29785 = (0);
seq__29751_29761 = G__29782;
chunk__29752_29762 = G__29783;
count__29753_29763 = G__29784;
i__29754_29764 = G__29785;
continue;
}
} else {
}
}
break;
}

return m;
} else {
if(cljs.core.coll_QMARK_(x)){
var arr = [];
var seq__29757_29786 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));
var chunk__29758_29787 = null;
var count__29759_29788 = (0);
var i__29760_29789 = (0);
while(true){
if((i__29760_29789 < count__29759_29788)){
var x_29790__$1 = chunk__29758_29787.cljs$core$IIndexed$_nth$arity$2(null,i__29760_29789);
arr.push(x_29790__$1);

var G__29791 = seq__29757_29786;
var G__29792 = chunk__29758_29787;
var G__29793 = count__29759_29788;
var G__29794 = (i__29760_29789 + (1));
seq__29757_29786 = G__29791;
chunk__29758_29787 = G__29792;
count__29759_29788 = G__29793;
i__29760_29789 = G__29794;
continue;
} else {
var temp__4126__auto___29795 = cljs.core.seq(seq__29757_29786);
if(temp__4126__auto___29795){
var seq__29757_29796__$1 = temp__4126__auto___29795;
if(cljs.core.chunked_seq_QMARK_(seq__29757_29796__$1)){
var c__4508__auto___29797 = cljs.core.chunk_first(seq__29757_29796__$1);
var G__29798 = cljs.core.chunk_rest(seq__29757_29796__$1);
var G__29799 = c__4508__auto___29797;
var G__29800 = cljs.core.count(c__4508__auto___29797);
var G__29801 = (0);
seq__29757_29786 = G__29798;
chunk__29758_29787 = G__29799;
count__29759_29788 = G__29800;
i__29760_29789 = G__29801;
continue;
} else {
var x_29802__$1 = cljs.core.first(seq__29757_29796__$1);
arr.push(x_29802__$1);

var G__29803 = cljs.core.next(seq__29757_29796__$1);
var G__29804 = null;
var G__29805 = (0);
var G__29806 = (0);
seq__29757_29786 = G__29803;
chunk__29758_29787 = G__29804;
count__29759_29788 = G__29805;
i__29760_29789 = G__29806;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
return x;

}
}
}
}
}
}
});

cljs.core.IEncodeClojure = (function (){var obj29808 = {};
return obj29808;
})();

cljs.core._js__GT_clj = (function _js__GT_clj(x,options){
if((function (){var and__3709__auto__ = x;
if(and__3709__auto__){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else {
return and__3709__auto__;
}
})()){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else {
var x__4365__auto__ = (((x == null))?null:x);
return (function (){var or__3721__auto__ = (cljs.core._js__GT_clj[(function (){var G__29812 = x__4365__auto__;
return goog.typeOf(G__29812);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});

/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){
return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__29869__delegate = function (x,opts){
var map__29842 = opts;
var map__29842__$1 = ((cljs.core.seq_QMARK_(map__29842))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29842):map__29842);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29842__$1,cljs.core.constant$keyword$16);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__29842,map__29842__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){
if((function (){var G__29858 = x__$1;
if(G__29858){
var bit__4402__auto__ = null;
if(cljs.core.truth_((function (){var or__3721__auto__ = bit__4402__auto__;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return G__29858.cljs$core$IEncodeClojure$;
}
})())){
return true;
} else {
if((!G__29858.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__29858);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__29858);
}
})()){
return cljs.core._js__GT_clj(x__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else {
if(cljs.core.seq_QMARK_(x__$1)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_(x__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(x__$1 instanceof Array){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if((cljs.core.type(x__$1) === Object)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4477__auto__ = ((function (map__29842,map__29842__$1,keywordize_keys,keyfn){
return (function iter__29859(s__29860){
return (new cljs.core.LazySeq(null,((function (map__29842,map__29842__$1,keywordize_keys,keyfn){
return (function (){
var s__29860__$1 = s__29860;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__29860__$1);
if(temp__4126__auto__){
var s__29860__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29860__$2)){
var c__4475__auto__ = cljs.core.chunk_first(s__29860__$2);
var size__4476__auto__ = cljs.core.count(c__4475__auto__);
var b__29862 = cljs.core.chunk_buffer(size__4476__auto__);
if((function (){var i__29861 = (0);
while(true){
if((i__29861 < size__4476__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4475__auto__,i__29861);
cljs.core.chunk_append(b__29862,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29867 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__29867) : keyfn.call(null,G__29867));
})(),thisfn((x__$1[k]))], null));

var G__29870 = (i__29861 + (1));
i__29861 = G__29870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29862),iter__29859(cljs.core.chunk_rest(s__29860__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29862),null);
}
} else {
var k = cljs.core.first(s__29860__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29868 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__29868) : keyfn.call(null,G__29868));
})(),thisfn((x__$1[k]))], null),iter__29859(cljs.core.rest(s__29860__$2)));
}
} else {
return null;
}
break;
}
});})(map__29842,map__29842__$1,keywordize_keys,keyfn))
,null,null));
});})(map__29842,map__29842__$1,keywordize_keys,keyfn))
;
return iter__4477__auto__(cljs.core.js_keys(x__$1));
})());
} else {
return x__$1;

}
}
}
}
}
});})(map__29842,map__29842__$1,keywordize_keys,keyfn))
;
return f(x);
};
var G__29869 = function (x,var_args){
var opts = null;
if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__29869__delegate.call(this,x,opts);};
G__29869.cljs$lang$maxFixedArity = 1;
G__29869.cljs$lang$applyTo = (function (arglist__29871){
var x = cljs.core.first(arglist__29871);
var opts = cljs.core.rest(arglist__29871);
return G__29869__delegate(x,opts);
});
G__29869.cljs$core$IFn$_invoke$arity$variadic = G__29869__delegate;
return G__29869;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = (function (){var G__29874 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29874) : cljs.core.atom.call(null,G__29874));
})();
return ((function (mem){
return (function() { 
var G__29876__delegate = function (args){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__29875 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29875) : cljs.core.deref.call(null,G__29875));
})(),args,cljs.core.lookup_sentinel);
if((v === cljs.core.lookup_sentinel)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

return ret;
} else {
return v;
}
};
var G__29876 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29876__delegate.call(this,args);};
G__29876.cljs$lang$maxFixedArity = 0;
G__29876.cljs$lang$applyTo = (function (arglist__29877){
var args = cljs.core.seq(arglist__29877);
return G__29876__delegate(args);
});
G__29876.cljs$core$IFn$_invoke$arity$variadic = G__29876__delegate;
return G__29876;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();
if(cljs.core.fn_QMARK_(ret)){
var G__29879 = ret;
f = G__29879;
continue;
} else {
return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__29880__delegate = function (f,args){
return trampoline.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__29880 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__29880__delegate.call(this,f,args);};
G__29880.cljs$lang$maxFixedArity = 1;
G__29880.cljs$lang$applyTo = (function (arglist__29881){
var f = cljs.core.first(arglist__29881);
var args = cljs.core.rest(arglist__29881);
return G__29880__delegate(f,args);
});
G__29880.cljs$core$IFn$_invoke$arity$variadic = G__29880__delegate;
return G__29880;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){
return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
var G__29884 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__29884) : Math.floor.call(null,G__29884));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__29886 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29886) : f.call(null,G__29886));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$18,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$19,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){
if((cljs.core._global_hierarchy == null)){
cljs.core._global_hierarchy = (function (){var G__29888 = cljs.core.make_hierarchy();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29888) : cljs.core.atom.call(null,G__29888));
})();
} else {
}

return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__29889){
var f = cljs.core.first(arglist__29889);
var args = cljs.core.rest(arglist__29889);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__29954 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29954) : cljs.core.deref.call(null,G__29954));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3721__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
var and__3709__auto__ = cljs.core.vector_QMARK_(parent);
if(and__3709__auto__){
var and__3709__auto____$1 = cljs.core.vector_QMARK_(child);
if(and__3709__auto____$1){
var and__3709__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3709__auto____$2){
var ret = true;
var i = (0);
while(true){
if((!(ret)) || ((i === cljs.core.count(parent)))){
return ret;
} else {
var G__29979 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__29977 = i;
return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__29977) : child.call(null,G__29977));
})(),(function (){var G__29978 = i;
return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__29978) : parent.call(null,G__29978));
})());
var G__29980 = (i + (1));
ret = G__29979;
i = G__29980;
continue;
}
break;
}
} else {
return and__3709__auto____$2;
}
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__29984 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29984) : cljs.core.deref.call(null,G__29984));
})(),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__29988 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29988) : cljs.core.deref.call(null,G__29988));
})(),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__29992 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29992) : cljs.core.deref.call(null,G__29992));
})(),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

var tp = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var td = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h);
var ta = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h);
var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__30001 = target;
return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__30001) : targets.call(null,G__30001));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__30002 = source;
return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__30002) : sources.call(null,G__30002));
})()));
});})(tp,td,ta))
;
var or__3721__auto__ = ((cljs.core.contains_QMARK_((function (){var G__30006 = tag;
return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__30006) : tp.call(null,G__30006));
})(),parent))?null:(function (){
if(cljs.core.contains_QMARK_((function (){var G__30007 = tag;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__30007) : ta.call(null,G__30007));
})(),parent)){
throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else {
}

if(cljs.core.contains_QMARK_((function (){var G__30008 = parent;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__30008) : ta.call(null,G__30008));
})(),tag)){
throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$19,tf(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$18,tf(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})()
);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var childsParents = (cljs.core.truth_((function (){var G__30015 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__30015) : parentMap.call(null,G__30015));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__30016 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__30016) : parentMap.call(null,G__30016));
})(),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));
var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__30009_SHARP_){
return cljs.core.cons(cljs.core.first(p1__30009_SHARP_),cljs.core.interpose(cljs.core.first(p1__30009_SHARP_),cljs.core.second(p1__30009_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));
if(cljs.core.contains_QMARK_((function (){var G__30017 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__30017) : parentMap.call(null,G__30017));
})(),parent)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__30010_SHARP_,p2__30011_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__30010_SHARP_,p2__30011_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else {
return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){
var G__30020 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30020) : cljs.core.deref.call(null,G__30020));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){
var G__30021 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30021) : cljs.core.deref.call(null,G__30021));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = (function (){var G__30037 = prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30037) : cljs.core.deref.call(null,G__30037));
})().call(null,x);
var or__3721__auto__ = (cljs.core.truth_((function (){var and__3709__auto__ = xprefs;
if(cljs.core.truth_(and__3709__auto__)){
var G__30039 = y;
return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__30039) : xprefs.call(null,G__30039));
} else {
return and__3709__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table))){
} else {
}

var G__30040 = cljs.core.rest(ps);
ps = G__30040;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3721__auto____$1)){
return or__3721__auto____$1;
} else {
var or__3721__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table))){
} else {
}

var G__30041 = cljs.core.rest(ps);
ps = G__30041;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3721__auto____$2)){
return or__3721__auto____$2;
} else {
return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3721__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__30055){
var vec__30056 = p__30055;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30056,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30056,(1),null);
var e = vec__30056;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__30057 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30057) : cljs.core.deref.call(null,G__30057));
})(),dispatch_val,k)){
var be2 = (cljs.core.truth_((function (){var or__3721__auto__ = (be == null);
if(or__3721__auto__){
return or__3721__auto__;
} else {
return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table))){
} else {
throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2)),cljs.core.str(", and neither is preferred")].join('')));
}

return be2;
} else {
return be;
}
}),null,(function (){var G__30058 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30058) : cljs.core.deref.call(null,G__30058));
})());
if(cljs.core.truth_(best_entry)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30059 = cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30059) : cljs.core.deref.call(null,G__30059));
})(),(function (){var G__30060 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30060) : cljs.core.deref.call(null,G__30060));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));

return cljs.core.second(best_entry);
} else {
cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);

return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else {
return null;
}
});

cljs.core.IMultiFn = (function (){var obj30062 = {};
return obj30062;
})();

cljs.core._reset = (function _reset(mf){
if((function (){var and__3709__auto__ = mf;
if(and__3709__auto__){
return mf.cljs$core$IMultiFn$_reset$arity$1;
} else {
return and__3709__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else {
var x__4365__auto__ = (((mf == null))?null:mf);
return (function (){var or__3721__auto__ = (cljs.core._reset[(function (){var G__30066 = x__4365__auto__;
return goog.typeOf(G__30066);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._reset["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});

cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3709__auto__ = mf;
if(and__3709__auto__){
return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else {
return and__3709__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else {
var x__4365__auto__ = (((mf == null))?null:mf);
return (function (){var or__3721__auto__ = (cljs.core._add_method[(function (){var G__30070 = x__4365__auto__;
return goog.typeOf(G__30070);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._add_method["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});

cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3709__auto__ = mf;
if(and__3709__auto__){
return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else {
return and__3709__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else {
var x__4365__auto__ = (((mf == null))?null:mf);
return (function (){var or__3721__auto__ = (cljs.core._remove_method[(function (){var G__30074 = x__4365__auto__;
return goog.typeOf(G__30074);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3709__auto__ = mf;
if(and__3709__auto__){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else {
return and__3709__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else {
var x__4365__auto__ = (((mf == null))?null:mf);
return (function (){var or__3721__auto__ = (cljs.core._prefer_method[(function (){var G__30078 = x__4365__auto__;
return goog.typeOf(G__30078);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});

cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3709__auto__ = mf;
if(and__3709__auto__){
return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else {
return and__3709__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else {
var x__4365__auto__ = (((mf == null))?null:mf);
return (function (){var or__3721__auto__ = (cljs.core._get_method[(function (){var G__30082 = x__4365__auto__;
return goog.typeOf(G__30082);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._get_method["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._methods = (function _methods(mf){
if((function (){var and__3709__auto__ = mf;
if(and__3709__auto__){
return mf.cljs$core$IMultiFn$_methods$arity$1;
} else {
return and__3709__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else {
var x__4365__auto__ = (((mf == null))?null:mf);
return (function (){var or__3721__auto__ = (cljs.core._methods[(function (){var G__30086 = x__4365__auto__;
return goog.typeOf(G__30086);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._methods["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});

cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3709__auto__ = mf;
if(and__3709__auto__){
return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else {
return and__3709__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else {
var x__4365__auto__ = (((mf == null))?null:mf);
return (function (){var or__3721__auto__ = (cljs.core._prefers[(function (){var G__30090 = x__4365__auto__;
return goog.typeOf(G__30090);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core._prefers["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});

cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){
throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 4352;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__30092 = this$__$1;
return goog.getUid(G__30092);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._name(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_namespace$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._namespace(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){
return null;
});})(mf__$1))
);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30093 = self__.cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30093) : cljs.core.deref.call(null,G__30093));
})(),(function (){var G__30094 = self__.hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30094) : cljs.core.deref.call(null,G__30094));
})())){
} else {
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}

var temp__4124__auto__ = (function (){var G__30095 = self__.method_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30095) : cljs.core.deref.call(null,G__30095));
})().call(null,dispatch_val);
if(cljs.core.truth_(temp__4124__auto__)){
var target_fn = temp__4124__auto__;
return target_fn;
} else {
var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4124__auto____$1)){
var target_fn = temp__4124__auto____$1;
return target_fn;
} else {
return (function (){var G__30096 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30096) : cljs.core.deref.call(null,G__30096));
})().call(null,self__.default_dispatch_val);
}
}
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
var mf__$1 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table))){
throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);

return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__30097 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30097) : cljs.core.deref.call(null,G__30097));
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__30098 = self__.prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30098) : cljs.core.deref.call(null,G__30098));
});

cljs.core.MultiFn.prototype.call = (function() {
var G__30939 = null;
var G__30939__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});
var G__30939__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30099 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__30099) : self__.dispatch_fn.call(null,G__30099));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30100 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__30100) : target_fn.call(null,G__30100));
});
var G__30939__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30101 = a;
var G__30102 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__30101,G__30102) : self__.dispatch_fn.call(null,G__30101,G__30102));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30103 = a;
var G__30104 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__30103,G__30104) : target_fn.call(null,G__30103,G__30104));
});
var G__30939__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30105 = a;
var G__30106 = b;
var G__30107 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__30105,G__30106,G__30107) : self__.dispatch_fn.call(null,G__30105,G__30106,G__30107));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30108 = a;
var G__30109 = b;
var G__30110 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__30108,G__30109,G__30110) : target_fn.call(null,G__30108,G__30109,G__30110));
});
var G__30939__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30111 = a;
var G__30112 = b;
var G__30113 = c;
var G__30114 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__30111,G__30112,G__30113,G__30114) : self__.dispatch_fn.call(null,G__30111,G__30112,G__30113,G__30114));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30115 = a;
var G__30116 = b;
var G__30117 = c;
var G__30118 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__30115,G__30116,G__30117,G__30118) : target_fn.call(null,G__30115,G__30116,G__30117,G__30118));
});
var G__30939__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30119 = a;
var G__30120 = b;
var G__30121 = c;
var G__30122 = d;
var G__30123 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__30119,G__30120,G__30121,G__30122,G__30123) : self__.dispatch_fn.call(null,G__30119,G__30120,G__30121,G__30122,G__30123));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30124 = a;
var G__30125 = b;
var G__30126 = c;
var G__30127 = d;
var G__30128 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__30124,G__30125,G__30126,G__30127,G__30128) : target_fn.call(null,G__30124,G__30125,G__30126,G__30127,G__30128));
});
var G__30939__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30129 = a;
var G__30130 = b;
var G__30131 = c;
var G__30132 = d;
var G__30133 = e;
var G__30134 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__30129,G__30130,G__30131,G__30132,G__30133,G__30134) : self__.dispatch_fn.call(null,G__30129,G__30130,G__30131,G__30132,G__30133,G__30134));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30135 = a;
var G__30136 = b;
var G__30137 = c;
var G__30138 = d;
var G__30139 = e;
var G__30140 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__30135,G__30136,G__30137,G__30138,G__30139,G__30140) : target_fn.call(null,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140));
});
var G__30939__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30141 = a;
var G__30142 = b;
var G__30143 = c;
var G__30144 = d;
var G__30145 = e;
var G__30146 = f;
var G__30147 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__30141,G__30142,G__30143,G__30144,G__30145,G__30146,G__30147) : self__.dispatch_fn.call(null,G__30141,G__30142,G__30143,G__30144,G__30145,G__30146,G__30147));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30148 = a;
var G__30149 = b;
var G__30150 = c;
var G__30151 = d;
var G__30152 = e;
var G__30153 = f;
var G__30154 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__30148,G__30149,G__30150,G__30151,G__30152,G__30153,G__30154) : target_fn.call(null,G__30148,G__30149,G__30150,G__30151,G__30152,G__30153,G__30154));
});
var G__30939__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30155 = a;
var G__30156 = b;
var G__30157 = c;
var G__30158 = d;
var G__30159 = e;
var G__30160 = f;
var G__30161 = g;
var G__30162 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__30155,G__30156,G__30157,G__30158,G__30159,G__30160,G__30161,G__30162) : self__.dispatch_fn.call(null,G__30155,G__30156,G__30157,G__30158,G__30159,G__30160,G__30161,G__30162));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30163 = a;
var G__30164 = b;
var G__30165 = c;
var G__30166 = d;
var G__30167 = e;
var G__30168 = f;
var G__30169 = g;
var G__30170 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__30163,G__30164,G__30165,G__30166,G__30167,G__30168,G__30169,G__30170) : target_fn.call(null,G__30163,G__30164,G__30165,G__30166,G__30167,G__30168,G__30169,G__30170));
});
var G__30939__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30171 = a;
var G__30172 = b;
var G__30173 = c;
var G__30174 = d;
var G__30175 = e;
var G__30176 = f;
var G__30177 = g;
var G__30178 = h;
var G__30179 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__30171,G__30172,G__30173,G__30174,G__30175,G__30176,G__30177,G__30178,G__30179) : self__.dispatch_fn.call(null,G__30171,G__30172,G__30173,G__30174,G__30175,G__30176,G__30177,G__30178,G__30179));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30180 = a;
var G__30181 = b;
var G__30182 = c;
var G__30183 = d;
var G__30184 = e;
var G__30185 = f;
var G__30186 = g;
var G__30187 = h;
var G__30188 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__30180,G__30181,G__30182,G__30183,G__30184,G__30185,G__30186,G__30187,G__30188) : target_fn.call(null,G__30180,G__30181,G__30182,G__30183,G__30184,G__30185,G__30186,G__30187,G__30188));
});
var G__30939__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30189 = a;
var G__30190 = b;
var G__30191 = c;
var G__30192 = d;
var G__30193 = e;
var G__30194 = f;
var G__30195 = g;
var G__30196 = h;
var G__30197 = i;
var G__30198 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__30189,G__30190,G__30191,G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198) : self__.dispatch_fn.call(null,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194,G__30195,G__30196,G__30197,G__30198));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30199 = a;
var G__30200 = b;
var G__30201 = c;
var G__30202 = d;
var G__30203 = e;
var G__30204 = f;
var G__30205 = g;
var G__30206 = h;
var G__30207 = i;
var G__30208 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__30199,G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208) : target_fn.call(null,G__30199,G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208));
});
var G__30939__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30209 = a;
var G__30210 = b;
var G__30211 = c;
var G__30212 = d;
var G__30213 = e;
var G__30214 = f;
var G__30215 = g;
var G__30216 = h;
var G__30217 = i;
var G__30218 = j;
var G__30219 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__30209,G__30210,G__30211,G__30212,G__30213,G__30214,G__30215,G__30216,G__30217,G__30218,G__30219) : self__.dispatch_fn.call(null,G__30209,G__30210,G__30211,G__30212,G__30213,G__30214,G__30215,G__30216,G__30217,G__30218,G__30219));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30220 = a;
var G__30221 = b;
var G__30222 = c;
var G__30223 = d;
var G__30224 = e;
var G__30225 = f;
var G__30226 = g;
var G__30227 = h;
var G__30228 = i;
var G__30229 = j;
var G__30230 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230) : target_fn.call(null,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230));
});
var G__30939__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30231 = a;
var G__30232 = b;
var G__30233 = c;
var G__30234 = d;
var G__30235 = e;
var G__30236 = f;
var G__30237 = g;
var G__30238 = h;
var G__30239 = i;
var G__30240 = j;
var G__30241 = k;
var G__30242 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238,G__30239,G__30240,G__30241,G__30242) : self__.dispatch_fn.call(null,G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238,G__30239,G__30240,G__30241,G__30242));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30243 = a;
var G__30244 = b;
var G__30245 = c;
var G__30246 = d;
var G__30247 = e;
var G__30248 = f;
var G__30249 = g;
var G__30250 = h;
var G__30251 = i;
var G__30252 = j;
var G__30253 = k;
var G__30254 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__30243,G__30244,G__30245,G__30246,G__30247,G__30248,G__30249,G__30250,G__30251,G__30252,G__30253,G__30254) : target_fn.call(null,G__30243,G__30244,G__30245,G__30246,G__30247,G__30248,G__30249,G__30250,G__30251,G__30252,G__30253,G__30254));
});
var G__30939__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30255 = a;
var G__30256 = b;
var G__30257 = c;
var G__30258 = d;
var G__30259 = e;
var G__30260 = f;
var G__30261 = g;
var G__30262 = h;
var G__30263 = i;
var G__30264 = j;
var G__30265 = k;
var G__30266 = l;
var G__30267 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__30255,G__30256,G__30257,G__30258,G__30259,G__30260,G__30261,G__30262,G__30263,G__30264,G__30265,G__30266,G__30267) : self__.dispatch_fn.call(null,G__30255,G__30256,G__30257,G__30258,G__30259,G__30260,G__30261,G__30262,G__30263,G__30264,G__30265,G__30266,G__30267));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30268 = a;
var G__30269 = b;
var G__30270 = c;
var G__30271 = d;
var G__30272 = e;
var G__30273 = f;
var G__30274 = g;
var G__30275 = h;
var G__30276 = i;
var G__30277 = j;
var G__30278 = k;
var G__30279 = l;
var G__30280 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__30268,G__30269,G__30270,G__30271,G__30272,G__30273,G__30274,G__30275,G__30276,G__30277,G__30278,G__30279,G__30280) : target_fn.call(null,G__30268,G__30269,G__30270,G__30271,G__30272,G__30273,G__30274,G__30275,G__30276,G__30277,G__30278,G__30279,G__30280));
});
var G__30939__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30281 = a;
var G__30282 = b;
var G__30283 = c;
var G__30284 = d;
var G__30285 = e;
var G__30286 = f;
var G__30287 = g;
var G__30288 = h;
var G__30289 = i;
var G__30290 = j;
var G__30291 = k;
var G__30292 = l;
var G__30293 = m;
var G__30294 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__30281,G__30282,G__30283,G__30284,G__30285,G__30286,G__30287,G__30288,G__30289,G__30290,G__30291,G__30292,G__30293,G__30294) : self__.dispatch_fn.call(null,G__30281,G__30282,G__30283,G__30284,G__30285,G__30286,G__30287,G__30288,G__30289,G__30290,G__30291,G__30292,G__30293,G__30294));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30295 = a;
var G__30296 = b;
var G__30297 = c;
var G__30298 = d;
var G__30299 = e;
var G__30300 = f;
var G__30301 = g;
var G__30302 = h;
var G__30303 = i;
var G__30304 = j;
var G__30305 = k;
var G__30306 = l;
var G__30307 = m;
var G__30308 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__30295,G__30296,G__30297,G__30298,G__30299,G__30300,G__30301,G__30302,G__30303,G__30304,G__30305,G__30306,G__30307,G__30308) : target_fn.call(null,G__30295,G__30296,G__30297,G__30298,G__30299,G__30300,G__30301,G__30302,G__30303,G__30304,G__30305,G__30306,G__30307,G__30308));
});
var G__30939__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30309 = a;
var G__30310 = b;
var G__30311 = c;
var G__30312 = d;
var G__30313 = e;
var G__30314 = f;
var G__30315 = g;
var G__30316 = h;
var G__30317 = i;
var G__30318 = j;
var G__30319 = k;
var G__30320 = l;
var G__30321 = m;
var G__30322 = n;
var G__30323 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__30309,G__30310,G__30311,G__30312,G__30313,G__30314,G__30315,G__30316,G__30317,G__30318,G__30319,G__30320,G__30321,G__30322,G__30323) : self__.dispatch_fn.call(null,G__30309,G__30310,G__30311,G__30312,G__30313,G__30314,G__30315,G__30316,G__30317,G__30318,G__30319,G__30320,G__30321,G__30322,G__30323));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30324 = a;
var G__30325 = b;
var G__30326 = c;
var G__30327 = d;
var G__30328 = e;
var G__30329 = f;
var G__30330 = g;
var G__30331 = h;
var G__30332 = i;
var G__30333 = j;
var G__30334 = k;
var G__30335 = l;
var G__30336 = m;
var G__30337 = n;
var G__30338 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__30324,G__30325,G__30326,G__30327,G__30328,G__30329,G__30330,G__30331,G__30332,G__30333,G__30334,G__30335,G__30336,G__30337,G__30338) : target_fn.call(null,G__30324,G__30325,G__30326,G__30327,G__30328,G__30329,G__30330,G__30331,G__30332,G__30333,G__30334,G__30335,G__30336,G__30337,G__30338));
});
var G__30939__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30339 = a;
var G__30340 = b;
var G__30341 = c;
var G__30342 = d;
var G__30343 = e;
var G__30344 = f;
var G__30345 = g;
var G__30346 = h;
var G__30347 = i;
var G__30348 = j;
var G__30349 = k;
var G__30350 = l;
var G__30351 = m;
var G__30352 = n;
var G__30353 = o;
var G__30354 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__30339,G__30340,G__30341,G__30342,G__30343,G__30344,G__30345,G__30346,G__30347,G__30348,G__30349,G__30350,G__30351,G__30352,G__30353,G__30354) : self__.dispatch_fn.call(null,G__30339,G__30340,G__30341,G__30342,G__30343,G__30344,G__30345,G__30346,G__30347,G__30348,G__30349,G__30350,G__30351,G__30352,G__30353,G__30354));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30355 = a;
var G__30356 = b;
var G__30357 = c;
var G__30358 = d;
var G__30359 = e;
var G__30360 = f;
var G__30361 = g;
var G__30362 = h;
var G__30363 = i;
var G__30364 = j;
var G__30365 = k;
var G__30366 = l;
var G__30367 = m;
var G__30368 = n;
var G__30369 = o;
var G__30370 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__30355,G__30356,G__30357,G__30358,G__30359,G__30360,G__30361,G__30362,G__30363,G__30364,G__30365,G__30366,G__30367,G__30368,G__30369,G__30370) : target_fn.call(null,G__30355,G__30356,G__30357,G__30358,G__30359,G__30360,G__30361,G__30362,G__30363,G__30364,G__30365,G__30366,G__30367,G__30368,G__30369,G__30370));
});
var G__30939__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30371 = a;
var G__30372 = b;
var G__30373 = c;
var G__30374 = d;
var G__30375 = e;
var G__30376 = f;
var G__30377 = g;
var G__30378 = h;
var G__30379 = i;
var G__30380 = j;
var G__30381 = k;
var G__30382 = l;
var G__30383 = m;
var G__30384 = n;
var G__30385 = o;
var G__30386 = p;
var G__30387 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__30371,G__30372,G__30373,G__30374,G__30375,G__30376,G__30377,G__30378,G__30379,G__30380,G__30381,G__30382,G__30383,G__30384,G__30385,G__30386,G__30387) : self__.dispatch_fn.call(null,G__30371,G__30372,G__30373,G__30374,G__30375,G__30376,G__30377,G__30378,G__30379,G__30380,G__30381,G__30382,G__30383,G__30384,G__30385,G__30386,G__30387));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30388 = a;
var G__30389 = b;
var G__30390 = c;
var G__30391 = d;
var G__30392 = e;
var G__30393 = f;
var G__30394 = g;
var G__30395 = h;
var G__30396 = i;
var G__30397 = j;
var G__30398 = k;
var G__30399 = l;
var G__30400 = m;
var G__30401 = n;
var G__30402 = o;
var G__30403 = p;
var G__30404 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__30388,G__30389,G__30390,G__30391,G__30392,G__30393,G__30394,G__30395,G__30396,G__30397,G__30398,G__30399,G__30400,G__30401,G__30402,G__30403,G__30404) : target_fn.call(null,G__30388,G__30389,G__30390,G__30391,G__30392,G__30393,G__30394,G__30395,G__30396,G__30397,G__30398,G__30399,G__30400,G__30401,G__30402,G__30403,G__30404));
});
var G__30939__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30405 = a;
var G__30406 = b;
var G__30407 = c;
var G__30408 = d;
var G__30409 = e;
var G__30410 = f;
var G__30411 = g;
var G__30412 = h;
var G__30413 = i;
var G__30414 = j;
var G__30415 = k;
var G__30416 = l;
var G__30417 = m;
var G__30418 = n;
var G__30419 = o;
var G__30420 = p;
var G__30421 = q;
var G__30422 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__30405,G__30406,G__30407,G__30408,G__30409,G__30410,G__30411,G__30412,G__30413,G__30414,G__30415,G__30416,G__30417,G__30418,G__30419,G__30420,G__30421,G__30422) : self__.dispatch_fn.call(null,G__30405,G__30406,G__30407,G__30408,G__30409,G__30410,G__30411,G__30412,G__30413,G__30414,G__30415,G__30416,G__30417,G__30418,G__30419,G__30420,G__30421,G__30422));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30423 = a;
var G__30424 = b;
var G__30425 = c;
var G__30426 = d;
var G__30427 = e;
var G__30428 = f;
var G__30429 = g;
var G__30430 = h;
var G__30431 = i;
var G__30432 = j;
var G__30433 = k;
var G__30434 = l;
var G__30435 = m;
var G__30436 = n;
var G__30437 = o;
var G__30438 = p;
var G__30439 = q;
var G__30440 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__30423,G__30424,G__30425,G__30426,G__30427,G__30428,G__30429,G__30430,G__30431,G__30432,G__30433,G__30434,G__30435,G__30436,G__30437,G__30438,G__30439,G__30440) : target_fn.call(null,G__30423,G__30424,G__30425,G__30426,G__30427,G__30428,G__30429,G__30430,G__30431,G__30432,G__30433,G__30434,G__30435,G__30436,G__30437,G__30438,G__30439,G__30440));
});
var G__30939__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30441 = a;
var G__30442 = b;
var G__30443 = c;
var G__30444 = d;
var G__30445 = e;
var G__30446 = f;
var G__30447 = g;
var G__30448 = h;
var G__30449 = i;
var G__30450 = j;
var G__30451 = k;
var G__30452 = l;
var G__30453 = m;
var G__30454 = n;
var G__30455 = o;
var G__30456 = p;
var G__30457 = q;
var G__30458 = r;
var G__30459 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__30441,G__30442,G__30443,G__30444,G__30445,G__30446,G__30447,G__30448,G__30449,G__30450,G__30451,G__30452,G__30453,G__30454,G__30455,G__30456,G__30457,G__30458,G__30459) : self__.dispatch_fn.call(null,G__30441,G__30442,G__30443,G__30444,G__30445,G__30446,G__30447,G__30448,G__30449,G__30450,G__30451,G__30452,G__30453,G__30454,G__30455,G__30456,G__30457,G__30458,G__30459));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30460 = a;
var G__30461 = b;
var G__30462 = c;
var G__30463 = d;
var G__30464 = e;
var G__30465 = f;
var G__30466 = g;
var G__30467 = h;
var G__30468 = i;
var G__30469 = j;
var G__30470 = k;
var G__30471 = l;
var G__30472 = m;
var G__30473 = n;
var G__30474 = o;
var G__30475 = p;
var G__30476 = q;
var G__30477 = r;
var G__30478 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__30460,G__30461,G__30462,G__30463,G__30464,G__30465,G__30466,G__30467,G__30468,G__30469,G__30470,G__30471,G__30472,G__30473,G__30474,G__30475,G__30476,G__30477,G__30478) : target_fn.call(null,G__30460,G__30461,G__30462,G__30463,G__30464,G__30465,G__30466,G__30467,G__30468,G__30469,G__30470,G__30471,G__30472,G__30473,G__30474,G__30475,G__30476,G__30477,G__30478));
});
var G__30939__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__30479 = a;
var G__30480 = b;
var G__30481 = c;
var G__30482 = d;
var G__30483 = e;
var G__30484 = f;
var G__30485 = g;
var G__30486 = h;
var G__30487 = i;
var G__30488 = j;
var G__30489 = k;
var G__30490 = l;
var G__30491 = m;
var G__30492 = n;
var G__30493 = o;
var G__30494 = p;
var G__30495 = q;
var G__30496 = r;
var G__30497 = s;
var G__30498 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__30479,G__30480,G__30481,G__30482,G__30483,G__30484,G__30485,G__30486,G__30487,G__30488,G__30489,G__30490,G__30491,G__30492,G__30493,G__30494,G__30495,G__30496,G__30497,G__30498) : self__.dispatch_fn.call(null,G__30479,G__30480,G__30481,G__30482,G__30483,G__30484,G__30485,G__30486,G__30487,G__30488,G__30489,G__30490,G__30491,G__30492,G__30493,G__30494,G__30495,G__30496,G__30497,G__30498));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30499 = a;
var G__30500 = b;
var G__30501 = c;
var G__30502 = d;
var G__30503 = e;
var G__30504 = f;
var G__30505 = g;
var G__30506 = h;
var G__30507 = i;
var G__30508 = j;
var G__30509 = k;
var G__30510 = l;
var G__30511 = m;
var G__30512 = n;
var G__30513 = o;
var G__30514 = p;
var G__30515 = q;
var G__30516 = r;
var G__30517 = s;
var G__30518 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__30499,G__30500,G__30501,G__30502,G__30503,G__30504,G__30505,G__30506,G__30507,G__30508,G__30509,G__30510,G__30511,G__30512,G__30513,G__30514,G__30515,G__30516,G__30517,G__30518) : target_fn.call(null,G__30499,G__30500,G__30501,G__30502,G__30503,G__30504,G__30505,G__30506,G__30507,G__30508,G__30509,G__30510,G__30511,G__30512,G__30513,G__30514,G__30515,G__30516,G__30517,G__30518));
});
var G__30939__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__30939 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__30939__1.call(this,self__);
case 2:
return G__30939__2.call(this,self__,a);
case 3:
return G__30939__3.call(this,self__,a,b);
case 4:
return G__30939__4.call(this,self__,a,b,c);
case 5:
return G__30939__5.call(this,self__,a,b,c,d);
case 6:
return G__30939__6.call(this,self__,a,b,c,d,e);
case 7:
return G__30939__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__30939__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__30939__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__30939__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__30939__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__30939__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__30939__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__30939__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__30939__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__30939__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__30939__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__30939__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__30939__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__30939__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__30939__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__30939__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30939.cljs$core$IFn$_invoke$arity$1 = G__30939__1;
G__30939.cljs$core$IFn$_invoke$arity$2 = G__30939__2;
G__30939.cljs$core$IFn$_invoke$arity$3 = G__30939__3;
G__30939.cljs$core$IFn$_invoke$arity$4 = G__30939__4;
G__30939.cljs$core$IFn$_invoke$arity$5 = G__30939__5;
G__30939.cljs$core$IFn$_invoke$arity$6 = G__30939__6;
G__30939.cljs$core$IFn$_invoke$arity$7 = G__30939__7;
G__30939.cljs$core$IFn$_invoke$arity$8 = G__30939__8;
G__30939.cljs$core$IFn$_invoke$arity$9 = G__30939__9;
G__30939.cljs$core$IFn$_invoke$arity$10 = G__30939__10;
G__30939.cljs$core$IFn$_invoke$arity$11 = G__30939__11;
G__30939.cljs$core$IFn$_invoke$arity$12 = G__30939__12;
G__30939.cljs$core$IFn$_invoke$arity$13 = G__30939__13;
G__30939.cljs$core$IFn$_invoke$arity$14 = G__30939__14;
G__30939.cljs$core$IFn$_invoke$arity$15 = G__30939__15;
G__30939.cljs$core$IFn$_invoke$arity$16 = G__30939__16;
G__30939.cljs$core$IFn$_invoke$arity$17 = G__30939__17;
G__30939.cljs$core$IFn$_invoke$arity$18 = G__30939__18;
G__30939.cljs$core$IFn$_invoke$arity$19 = G__30939__19;
G__30939.cljs$core$IFn$_invoke$arity$20 = G__30939__20;
G__30939.cljs$core$IFn$_invoke$arity$21 = G__30939__21;
G__30939.cljs$core$IFn$_invoke$arity$22 = G__30939__22;
return G__30939;
})()
;

cljs.core.MultiFn.prototype.apply = (function (self__,args30091){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30091)));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var mf = this;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30519 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__30519) : self__.dispatch_fn.call(null,G__30519));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30520 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__30520) : target_fn.call(null,G__30520));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30521 = a;
var G__30522 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__30521,G__30522) : self__.dispatch_fn.call(null,G__30521,G__30522));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30523 = a;
var G__30524 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__30523,G__30524) : target_fn.call(null,G__30523,G__30524));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30525 = a;
var G__30526 = b;
var G__30527 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__30525,G__30526,G__30527) : self__.dispatch_fn.call(null,G__30525,G__30526,G__30527));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30528 = a;
var G__30529 = b;
var G__30530 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__30528,G__30529,G__30530) : target_fn.call(null,G__30528,G__30529,G__30530));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30531 = a;
var G__30532 = b;
var G__30533 = c;
var G__30534 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__30531,G__30532,G__30533,G__30534) : self__.dispatch_fn.call(null,G__30531,G__30532,G__30533,G__30534));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30535 = a;
var G__30536 = b;
var G__30537 = c;
var G__30538 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__30535,G__30536,G__30537,G__30538) : target_fn.call(null,G__30535,G__30536,G__30537,G__30538));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30539 = a;
var G__30540 = b;
var G__30541 = c;
var G__30542 = d;
var G__30543 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__30539,G__30540,G__30541,G__30542,G__30543) : self__.dispatch_fn.call(null,G__30539,G__30540,G__30541,G__30542,G__30543));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30544 = a;
var G__30545 = b;
var G__30546 = c;
var G__30547 = d;
var G__30548 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__30544,G__30545,G__30546,G__30547,G__30548) : target_fn.call(null,G__30544,G__30545,G__30546,G__30547,G__30548));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30549 = a;
var G__30550 = b;
var G__30551 = c;
var G__30552 = d;
var G__30553 = e;
var G__30554 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__30549,G__30550,G__30551,G__30552,G__30553,G__30554) : self__.dispatch_fn.call(null,G__30549,G__30550,G__30551,G__30552,G__30553,G__30554));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30555 = a;
var G__30556 = b;
var G__30557 = c;
var G__30558 = d;
var G__30559 = e;
var G__30560 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__30555,G__30556,G__30557,G__30558,G__30559,G__30560) : target_fn.call(null,G__30555,G__30556,G__30557,G__30558,G__30559,G__30560));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30561 = a;
var G__30562 = b;
var G__30563 = c;
var G__30564 = d;
var G__30565 = e;
var G__30566 = f;
var G__30567 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__30561,G__30562,G__30563,G__30564,G__30565,G__30566,G__30567) : self__.dispatch_fn.call(null,G__30561,G__30562,G__30563,G__30564,G__30565,G__30566,G__30567));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30568 = a;
var G__30569 = b;
var G__30570 = c;
var G__30571 = d;
var G__30572 = e;
var G__30573 = f;
var G__30574 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__30568,G__30569,G__30570,G__30571,G__30572,G__30573,G__30574) : target_fn.call(null,G__30568,G__30569,G__30570,G__30571,G__30572,G__30573,G__30574));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30575 = a;
var G__30576 = b;
var G__30577 = c;
var G__30578 = d;
var G__30579 = e;
var G__30580 = f;
var G__30581 = g;
var G__30582 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__30575,G__30576,G__30577,G__30578,G__30579,G__30580,G__30581,G__30582) : self__.dispatch_fn.call(null,G__30575,G__30576,G__30577,G__30578,G__30579,G__30580,G__30581,G__30582));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30583 = a;
var G__30584 = b;
var G__30585 = c;
var G__30586 = d;
var G__30587 = e;
var G__30588 = f;
var G__30589 = g;
var G__30590 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__30583,G__30584,G__30585,G__30586,G__30587,G__30588,G__30589,G__30590) : target_fn.call(null,G__30583,G__30584,G__30585,G__30586,G__30587,G__30588,G__30589,G__30590));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30591 = a;
var G__30592 = b;
var G__30593 = c;
var G__30594 = d;
var G__30595 = e;
var G__30596 = f;
var G__30597 = g;
var G__30598 = h;
var G__30599 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__30591,G__30592,G__30593,G__30594,G__30595,G__30596,G__30597,G__30598,G__30599) : self__.dispatch_fn.call(null,G__30591,G__30592,G__30593,G__30594,G__30595,G__30596,G__30597,G__30598,G__30599));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30600 = a;
var G__30601 = b;
var G__30602 = c;
var G__30603 = d;
var G__30604 = e;
var G__30605 = f;
var G__30606 = g;
var G__30607 = h;
var G__30608 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__30600,G__30601,G__30602,G__30603,G__30604,G__30605,G__30606,G__30607,G__30608) : target_fn.call(null,G__30600,G__30601,G__30602,G__30603,G__30604,G__30605,G__30606,G__30607,G__30608));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30609 = a;
var G__30610 = b;
var G__30611 = c;
var G__30612 = d;
var G__30613 = e;
var G__30614 = f;
var G__30615 = g;
var G__30616 = h;
var G__30617 = i;
var G__30618 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__30609,G__30610,G__30611,G__30612,G__30613,G__30614,G__30615,G__30616,G__30617,G__30618) : self__.dispatch_fn.call(null,G__30609,G__30610,G__30611,G__30612,G__30613,G__30614,G__30615,G__30616,G__30617,G__30618));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30619 = a;
var G__30620 = b;
var G__30621 = c;
var G__30622 = d;
var G__30623 = e;
var G__30624 = f;
var G__30625 = g;
var G__30626 = h;
var G__30627 = i;
var G__30628 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__30619,G__30620,G__30621,G__30622,G__30623,G__30624,G__30625,G__30626,G__30627,G__30628) : target_fn.call(null,G__30619,G__30620,G__30621,G__30622,G__30623,G__30624,G__30625,G__30626,G__30627,G__30628));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30629 = a;
var G__30630 = b;
var G__30631 = c;
var G__30632 = d;
var G__30633 = e;
var G__30634 = f;
var G__30635 = g;
var G__30636 = h;
var G__30637 = i;
var G__30638 = j;
var G__30639 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__30629,G__30630,G__30631,G__30632,G__30633,G__30634,G__30635,G__30636,G__30637,G__30638,G__30639) : self__.dispatch_fn.call(null,G__30629,G__30630,G__30631,G__30632,G__30633,G__30634,G__30635,G__30636,G__30637,G__30638,G__30639));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30640 = a;
var G__30641 = b;
var G__30642 = c;
var G__30643 = d;
var G__30644 = e;
var G__30645 = f;
var G__30646 = g;
var G__30647 = h;
var G__30648 = i;
var G__30649 = j;
var G__30650 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__30640,G__30641,G__30642,G__30643,G__30644,G__30645,G__30646,G__30647,G__30648,G__30649,G__30650) : target_fn.call(null,G__30640,G__30641,G__30642,G__30643,G__30644,G__30645,G__30646,G__30647,G__30648,G__30649,G__30650));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30651 = a;
var G__30652 = b;
var G__30653 = c;
var G__30654 = d;
var G__30655 = e;
var G__30656 = f;
var G__30657 = g;
var G__30658 = h;
var G__30659 = i;
var G__30660 = j;
var G__30661 = k;
var G__30662 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__30651,G__30652,G__30653,G__30654,G__30655,G__30656,G__30657,G__30658,G__30659,G__30660,G__30661,G__30662) : self__.dispatch_fn.call(null,G__30651,G__30652,G__30653,G__30654,G__30655,G__30656,G__30657,G__30658,G__30659,G__30660,G__30661,G__30662));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30663 = a;
var G__30664 = b;
var G__30665 = c;
var G__30666 = d;
var G__30667 = e;
var G__30668 = f;
var G__30669 = g;
var G__30670 = h;
var G__30671 = i;
var G__30672 = j;
var G__30673 = k;
var G__30674 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__30663,G__30664,G__30665,G__30666,G__30667,G__30668,G__30669,G__30670,G__30671,G__30672,G__30673,G__30674) : target_fn.call(null,G__30663,G__30664,G__30665,G__30666,G__30667,G__30668,G__30669,G__30670,G__30671,G__30672,G__30673,G__30674));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30675 = a;
var G__30676 = b;
var G__30677 = c;
var G__30678 = d;
var G__30679 = e;
var G__30680 = f;
var G__30681 = g;
var G__30682 = h;
var G__30683 = i;
var G__30684 = j;
var G__30685 = k;
var G__30686 = l;
var G__30687 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__30675,G__30676,G__30677,G__30678,G__30679,G__30680,G__30681,G__30682,G__30683,G__30684,G__30685,G__30686,G__30687) : self__.dispatch_fn.call(null,G__30675,G__30676,G__30677,G__30678,G__30679,G__30680,G__30681,G__30682,G__30683,G__30684,G__30685,G__30686,G__30687));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30688 = a;
var G__30689 = b;
var G__30690 = c;
var G__30691 = d;
var G__30692 = e;
var G__30693 = f;
var G__30694 = g;
var G__30695 = h;
var G__30696 = i;
var G__30697 = j;
var G__30698 = k;
var G__30699 = l;
var G__30700 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__30688,G__30689,G__30690,G__30691,G__30692,G__30693,G__30694,G__30695,G__30696,G__30697,G__30698,G__30699,G__30700) : target_fn.call(null,G__30688,G__30689,G__30690,G__30691,G__30692,G__30693,G__30694,G__30695,G__30696,G__30697,G__30698,G__30699,G__30700));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30701 = a;
var G__30702 = b;
var G__30703 = c;
var G__30704 = d;
var G__30705 = e;
var G__30706 = f;
var G__30707 = g;
var G__30708 = h;
var G__30709 = i;
var G__30710 = j;
var G__30711 = k;
var G__30712 = l;
var G__30713 = m;
var G__30714 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__30701,G__30702,G__30703,G__30704,G__30705,G__30706,G__30707,G__30708,G__30709,G__30710,G__30711,G__30712,G__30713,G__30714) : self__.dispatch_fn.call(null,G__30701,G__30702,G__30703,G__30704,G__30705,G__30706,G__30707,G__30708,G__30709,G__30710,G__30711,G__30712,G__30713,G__30714));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30715 = a;
var G__30716 = b;
var G__30717 = c;
var G__30718 = d;
var G__30719 = e;
var G__30720 = f;
var G__30721 = g;
var G__30722 = h;
var G__30723 = i;
var G__30724 = j;
var G__30725 = k;
var G__30726 = l;
var G__30727 = m;
var G__30728 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__30715,G__30716,G__30717,G__30718,G__30719,G__30720,G__30721,G__30722,G__30723,G__30724,G__30725,G__30726,G__30727,G__30728) : target_fn.call(null,G__30715,G__30716,G__30717,G__30718,G__30719,G__30720,G__30721,G__30722,G__30723,G__30724,G__30725,G__30726,G__30727,G__30728));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30729 = a;
var G__30730 = b;
var G__30731 = c;
var G__30732 = d;
var G__30733 = e;
var G__30734 = f;
var G__30735 = g;
var G__30736 = h;
var G__30737 = i;
var G__30738 = j;
var G__30739 = k;
var G__30740 = l;
var G__30741 = m;
var G__30742 = n;
var G__30743 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__30729,G__30730,G__30731,G__30732,G__30733,G__30734,G__30735,G__30736,G__30737,G__30738,G__30739,G__30740,G__30741,G__30742,G__30743) : self__.dispatch_fn.call(null,G__30729,G__30730,G__30731,G__30732,G__30733,G__30734,G__30735,G__30736,G__30737,G__30738,G__30739,G__30740,G__30741,G__30742,G__30743));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30744 = a;
var G__30745 = b;
var G__30746 = c;
var G__30747 = d;
var G__30748 = e;
var G__30749 = f;
var G__30750 = g;
var G__30751 = h;
var G__30752 = i;
var G__30753 = j;
var G__30754 = k;
var G__30755 = l;
var G__30756 = m;
var G__30757 = n;
var G__30758 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__30744,G__30745,G__30746,G__30747,G__30748,G__30749,G__30750,G__30751,G__30752,G__30753,G__30754,G__30755,G__30756,G__30757,G__30758) : target_fn.call(null,G__30744,G__30745,G__30746,G__30747,G__30748,G__30749,G__30750,G__30751,G__30752,G__30753,G__30754,G__30755,G__30756,G__30757,G__30758));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30759 = a;
var G__30760 = b;
var G__30761 = c;
var G__30762 = d;
var G__30763 = e;
var G__30764 = f;
var G__30765 = g;
var G__30766 = h;
var G__30767 = i;
var G__30768 = j;
var G__30769 = k;
var G__30770 = l;
var G__30771 = m;
var G__30772 = n;
var G__30773 = o;
var G__30774 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__30759,G__30760,G__30761,G__30762,G__30763,G__30764,G__30765,G__30766,G__30767,G__30768,G__30769,G__30770,G__30771,G__30772,G__30773,G__30774) : self__.dispatch_fn.call(null,G__30759,G__30760,G__30761,G__30762,G__30763,G__30764,G__30765,G__30766,G__30767,G__30768,G__30769,G__30770,G__30771,G__30772,G__30773,G__30774));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30775 = a;
var G__30776 = b;
var G__30777 = c;
var G__30778 = d;
var G__30779 = e;
var G__30780 = f;
var G__30781 = g;
var G__30782 = h;
var G__30783 = i;
var G__30784 = j;
var G__30785 = k;
var G__30786 = l;
var G__30787 = m;
var G__30788 = n;
var G__30789 = o;
var G__30790 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__30775,G__30776,G__30777,G__30778,G__30779,G__30780,G__30781,G__30782,G__30783,G__30784,G__30785,G__30786,G__30787,G__30788,G__30789,G__30790) : target_fn.call(null,G__30775,G__30776,G__30777,G__30778,G__30779,G__30780,G__30781,G__30782,G__30783,G__30784,G__30785,G__30786,G__30787,G__30788,G__30789,G__30790));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30791 = a;
var G__30792 = b;
var G__30793 = c;
var G__30794 = d;
var G__30795 = e;
var G__30796 = f;
var G__30797 = g;
var G__30798 = h;
var G__30799 = i;
var G__30800 = j;
var G__30801 = k;
var G__30802 = l;
var G__30803 = m;
var G__30804 = n;
var G__30805 = o;
var G__30806 = p;
var G__30807 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__30791,G__30792,G__30793,G__30794,G__30795,G__30796,G__30797,G__30798,G__30799,G__30800,G__30801,G__30802,G__30803,G__30804,G__30805,G__30806,G__30807) : self__.dispatch_fn.call(null,G__30791,G__30792,G__30793,G__30794,G__30795,G__30796,G__30797,G__30798,G__30799,G__30800,G__30801,G__30802,G__30803,G__30804,G__30805,G__30806,G__30807));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30808 = a;
var G__30809 = b;
var G__30810 = c;
var G__30811 = d;
var G__30812 = e;
var G__30813 = f;
var G__30814 = g;
var G__30815 = h;
var G__30816 = i;
var G__30817 = j;
var G__30818 = k;
var G__30819 = l;
var G__30820 = m;
var G__30821 = n;
var G__30822 = o;
var G__30823 = p;
var G__30824 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__30808,G__30809,G__30810,G__30811,G__30812,G__30813,G__30814,G__30815,G__30816,G__30817,G__30818,G__30819,G__30820,G__30821,G__30822,G__30823,G__30824) : target_fn.call(null,G__30808,G__30809,G__30810,G__30811,G__30812,G__30813,G__30814,G__30815,G__30816,G__30817,G__30818,G__30819,G__30820,G__30821,G__30822,G__30823,G__30824));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30825 = a;
var G__30826 = b;
var G__30827 = c;
var G__30828 = d;
var G__30829 = e;
var G__30830 = f;
var G__30831 = g;
var G__30832 = h;
var G__30833 = i;
var G__30834 = j;
var G__30835 = k;
var G__30836 = l;
var G__30837 = m;
var G__30838 = n;
var G__30839 = o;
var G__30840 = p;
var G__30841 = q;
var G__30842 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__30825,G__30826,G__30827,G__30828,G__30829,G__30830,G__30831,G__30832,G__30833,G__30834,G__30835,G__30836,G__30837,G__30838,G__30839,G__30840,G__30841,G__30842) : self__.dispatch_fn.call(null,G__30825,G__30826,G__30827,G__30828,G__30829,G__30830,G__30831,G__30832,G__30833,G__30834,G__30835,G__30836,G__30837,G__30838,G__30839,G__30840,G__30841,G__30842));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30843 = a;
var G__30844 = b;
var G__30845 = c;
var G__30846 = d;
var G__30847 = e;
var G__30848 = f;
var G__30849 = g;
var G__30850 = h;
var G__30851 = i;
var G__30852 = j;
var G__30853 = k;
var G__30854 = l;
var G__30855 = m;
var G__30856 = n;
var G__30857 = o;
var G__30858 = p;
var G__30859 = q;
var G__30860 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__30843,G__30844,G__30845,G__30846,G__30847,G__30848,G__30849,G__30850,G__30851,G__30852,G__30853,G__30854,G__30855,G__30856,G__30857,G__30858,G__30859,G__30860) : target_fn.call(null,G__30843,G__30844,G__30845,G__30846,G__30847,G__30848,G__30849,G__30850,G__30851,G__30852,G__30853,G__30854,G__30855,G__30856,G__30857,G__30858,G__30859,G__30860));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30861 = a;
var G__30862 = b;
var G__30863 = c;
var G__30864 = d;
var G__30865 = e;
var G__30866 = f;
var G__30867 = g;
var G__30868 = h;
var G__30869 = i;
var G__30870 = j;
var G__30871 = k;
var G__30872 = l;
var G__30873 = m;
var G__30874 = n;
var G__30875 = o;
var G__30876 = p;
var G__30877 = q;
var G__30878 = r;
var G__30879 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,G__30868,G__30869,G__30870,G__30871,G__30872,G__30873,G__30874,G__30875,G__30876,G__30877,G__30878,G__30879) : self__.dispatch_fn.call(null,G__30861,G__30862,G__30863,G__30864,G__30865,G__30866,G__30867,G__30868,G__30869,G__30870,G__30871,G__30872,G__30873,G__30874,G__30875,G__30876,G__30877,G__30878,G__30879));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30880 = a;
var G__30881 = b;
var G__30882 = c;
var G__30883 = d;
var G__30884 = e;
var G__30885 = f;
var G__30886 = g;
var G__30887 = h;
var G__30888 = i;
var G__30889 = j;
var G__30890 = k;
var G__30891 = l;
var G__30892 = m;
var G__30893 = n;
var G__30894 = o;
var G__30895 = p;
var G__30896 = q;
var G__30897 = r;
var G__30898 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__30880,G__30881,G__30882,G__30883,G__30884,G__30885,G__30886,G__30887,G__30888,G__30889,G__30890,G__30891,G__30892,G__30893,G__30894,G__30895,G__30896,G__30897,G__30898) : target_fn.call(null,G__30880,G__30881,G__30882,G__30883,G__30884,G__30885,G__30886,G__30887,G__30888,G__30889,G__30890,G__30891,G__30892,G__30893,G__30894,G__30895,G__30896,G__30897,G__30898));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__30899 = a;
var G__30900 = b;
var G__30901 = c;
var G__30902 = d;
var G__30903 = e;
var G__30904 = f;
var G__30905 = g;
var G__30906 = h;
var G__30907 = i;
var G__30908 = j;
var G__30909 = k;
var G__30910 = l;
var G__30911 = m;
var G__30912 = n;
var G__30913 = o;
var G__30914 = p;
var G__30915 = q;
var G__30916 = r;
var G__30917 = s;
var G__30918 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__30899,G__30900,G__30901,G__30902,G__30903,G__30904,G__30905,G__30906,G__30907,G__30908,G__30909,G__30910,G__30911,G__30912,G__30913,G__30914,G__30915,G__30916,G__30917,G__30918) : self__.dispatch_fn.call(null,G__30899,G__30900,G__30901,G__30902,G__30903,G__30904,G__30905,G__30906,G__30907,G__30908,G__30909,G__30910,G__30911,G__30912,G__30913,G__30914,G__30915,G__30916,G__30917,G__30918));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__30919 = a;
var G__30920 = b;
var G__30921 = c;
var G__30922 = d;
var G__30923 = e;
var G__30924 = f;
var G__30925 = g;
var G__30926 = h;
var G__30927 = i;
var G__30928 = j;
var G__30929 = k;
var G__30930 = l;
var G__30931 = m;
var G__30932 = n;
var G__30933 = o;
var G__30934 = p;
var G__30935 = q;
var G__30936 = r;
var G__30937 = s;
var G__30938 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__30919,G__30920,G__30921,G__30922,G__30923,G__30924,G__30925,G__30926,G__30927,G__30928,G__30929,G__30930,G__30931,G__30932,G__30933,G__30934,G__30935,G__30936,G__30937,G__30938) : target_fn.call(null,G__30919,G__30920,G__30921,G__30922,G__30923,G__30924,G__30925,G__30926,G__30927,G__30928,G__30929,G__30930,G__30931,G__30932,G__30933,G__30934,G__30935,G__30936,G__30937,G__30938));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var mf = this;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

cljs.core.MultiFn.cljs$lang$type = true;

cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";

cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/MultiFn");
});

cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});

/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__30940 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));
return goog.string.hashCode(G__30940);
});

cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});

cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.uuid;
});

cljs.core.UUID.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.UUID.cljs$lang$type = true;

cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/UUID");
});

cljs.core.__GT_UUID = (function __GT_UUID(uuid){
return (new cljs.core.UUID(uuid));
});


/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})

cljs.core.ExceptionInfo.cljs$lang$type = true;

cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";

cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.core/ExceptionInfo");
});

cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){
return (new cljs.core.ExceptionInfo(message,data,cause));
});

cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){
return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){
return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.data;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){
return (function (x,y){
if(cljs.core.truth_((function (){var G__30945 = x;
var G__30946 = y;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__30945,G__30946) : pred.call(null,G__30945,G__30946));
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__30947 = y;
var G__30948 = x;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__30947,G__30948) : pred.call(null,G__30947,G__30948));
})())){
return (1);
} else {
return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
/**
* test [v] finds fn at key :test in var metadata and calls it,
* presuming failure will throw exception
*/
cljs.core.test = (function test(v){
var f = v.cljs$lang$test;
if(cljs.core.truth_(f)){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.core.constant$keyword$20;
} else {
return cljs.core.constant$keyword$21;
}
});
