// Compiled by ClojureScript 0.0-2644 {}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');

cljs.reader.PushbackReader = (function (){var obj12028 = {};
return obj12028;
})();

cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3709__auto__ = reader;
if(and__3709__auto__){
return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else {
return and__3709__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else {
var x__4365__auto__ = (((reader == null))?null:reader);
return (function (){var or__3721__auto__ = (cljs.reader.read_char[(function (){var G__12032 = x__4365__auto__;
return goog.typeOf(G__12032);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.reader.read_char["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});

cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3709__auto__ = reader;
if(and__3709__auto__){
return reader.cljs$reader$PushbackReader$unread$arity$2;
} else {
return and__3709__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else {
var x__4365__auto__ = (((reader == null))?null:reader);
return (function (){var or__3721__auto__ = (cljs.reader.unread[(function (){var G__12036 = x__4365__auto__;
return goog.typeOf(G__12036);
})()]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.reader.unread["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});


/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
var reader__$1 = this;
if((self__.buffer.length === (0))){
self__.idx = (self__.idx + (1));

return (self__.s[self__.idx]);
} else {
return self__.buffer.pop();
}
});

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
var reader__$1 = this;
return self__.buffer.push(ch);
});

cljs.reader.StringPushbackReader.cljs$lang$type = true;

cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";

cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write(writer__4309__auto__,"cljs.reader/StringPushbackReader");
});

cljs.reader.__GT_StringPushbackReader = (function __GT_StringPushbackReader(s,buffer,idx){
return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});

cljs.reader.push_back_reader = (function push_back_reader(s){

return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3721__auto__ = (function (){var G__12040 = ch;
return goog.string.isBreakingWhitespace(G__12040);
})();
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
var G__12042 = ch;
return goog.string.isNumeric(G__12042);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);
cljs.reader.unread(reader,next_ch);

return next_ch;
})())));
});


/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__12043){
var rdr = cljs.core.first(arglist__12043);
var msg = cljs.core.rest(arglist__12043);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3709__auto__ = !((ch === "#"));
if(and__3709__auto__){
var and__3709__auto____$1 = !((ch === "'"));
if(and__3709__auto____$1){
var and__3709__auto____$2 = !((ch === ":"));
if(and__3709__auto____$2){
var G__12051 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__12051) : cljs.reader.macros.call(null,G__12051));
} else {
return and__3709__auto____$2;
}
} else {
return and__3709__auto____$1;
}
} else {
return and__3709__auto__;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(rdr);
while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch))){
cljs.reader.unread(rdr,ch);

return sb.toString();
} else {
var G__12052 = (function (){
sb.append(ch);

return sb;
})()
;
var G__12053 = cljs.reader.read_char(rdr);
sb = G__12052;
ch = G__12053;
continue;
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch = cljs.reader.read_char(reader);
if(((ch === "\n")) || ((ch === "\r")) || ((ch == null))){
return reader;
} else {
continue;
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches = re.exec(s);
if((!((matches == null))) && (((matches[(0)]) === s))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
cljs.reader.match_int = (function match_int(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s);
var ie8_fix = (groups[(2)]);
var zero = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ie8_fix,""))?null:ie8_fix);
if(!((zero == null))){
return (0);
} else {
var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),(function (){var G__12058 = (groups[(6)]);
var G__12059 = (10);
return parseInt(G__12058,G__12059);
})()]:[null,null]
))));
var n = (a[(0)]);
var radix = (a[(1)]);
if((n == null)){
return null;
} else {
var parsed = (function (){var G__12060 = n;
var G__12061 = radix;
return parseInt(G__12060,G__12061);
})();
if(("-" === (groups[(1)]))){
return (- parsed);
} else {
return parsed;
}
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s);
var numinator = (groups[(1)]);
var denominator = (groups[(2)]);
return ((function (){var G__12066 = numinator;
var G__12067 = (10);
return parseInt(G__12066,G__12067);
})() / (function (){var G__12068 = denominator;
var G__12069 = (10);
return parseInt(G__12068,G__12069);
})());
});
cljs.reader.match_float = (function match_float(s){
var G__12071 = s;
return parseFloat(G__12071);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s))){
return cljs.reader.match_int(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s))){
return cljs.reader.match_ratio(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s))){
return cljs.reader.match_float(s);
} else {
return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t")){
return "\t";
} else {
if((c === "r")){
return "\r";
} else {
if((c === "n")){
return "\n";
} else {
if((c === "\\")){
return "\\";
} else {
if((c === "\"")){
return "\"";
} else {
if((c === "b")){
return "\b";
} else {
if((c === "f")){
return "\f";
} else {
return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str))){
return unicode_str;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code = (function (){var G__12074 = code_str;
var G__12075 = (16);
return parseInt(G__12074,G__12075);
})();
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch = cljs.reader.read_char(reader);
var mapresult = cljs.reader.escape_char_map(ch);
if(cljs.core.truth_(mapresult)){
return mapresult;
} else {
if((ch === "x")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else {
if((ch === "u")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else {
if(cljs.reader.numeric_QMARK_(ch)){
return String.fromCharCode(ch);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));

}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch = cljs.reader.read_char(rdr);
while(true){
if(cljs.core.truth_((function (){var G__12077 = ch;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__12077) : pred.call(null,G__12077));
})())){
var G__12078 = cljs.reader.read_char(rdr);
ch = G__12078;
continue;
} else {
return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}

if((delim === ch)){
return cljs.core.persistent_BANG_(a);
} else {
var temp__4124__auto__ = (function (){var G__12086 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__12086) : cljs.reader.macros.call(null,G__12086));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var macrofn = temp__4124__auto__;
var mret = (function (){var G__12087 = rdr;
var G__12088 = ch;
return (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(G__12087,G__12088) : macrofn.call(null,G__12087,G__12088));
})();
var G__12093 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__12093;
continue;
} else {
cljs.reader.unread(rdr,ch);

var o = (function (){var G__12089 = rdr;
var G__12090 = true;
var G__12091 = null;
var G__12092 = recursive_QMARK_;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__12089,G__12090,G__12091,G__12092) : cljs.reader.read.call(null,G__12089,G__12090,G__12091,G__12092));
})();
var G__12094 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__12094;
continue;
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch = cljs.reader.read_char(rdr);
var dm = (function (){var G__12100 = ch;
return (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(G__12100) : cljs.reader.dispatch_macros.call(null,G__12100));
})();
if(cljs.core.truth_(dm)){
var G__12101 = rdr;
var G__12102 = _;
return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(G__12101,G__12102) : dm.call(null,G__12101,G__12102));
} else {
var temp__4124__auto__ = (function (){var G__12103 = rdr;
var G__12104 = ch;
return (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(G__12103,G__12104) : cljs.reader.maybe_read_tagged_type.call(null,G__12103,G__12104));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var obj = temp__4124__auto__;
return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmatched delimiter ",ch], 0));
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l = cljs.reader.read_delimited_list("}",rdr,true);
if(cljs.core.odd_QMARK_(cljs.core.count(l))){
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__3721__auto__ = (ch == null);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = cljs.reader.whitespace_QMARK_(ch);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
var G__12110 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__12110) : cljs.reader.macros.call(null,G__12110));
}
}
})())){
cljs.reader.unread(reader,ch);

var s = buffer.toString();
var or__3721__auto__ = cljs.reader.match_number(s);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else {
var G__12111 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__12112 = cljs.reader.read_char(reader);
buffer = G__12111;
ch = G__12112;
continue;
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
var G__12113 = (function (){
buffer.append(cljs.reader.escape_char(buffer,reader));

return buffer;
})()
;
var G__12114 = cljs.reader.read_char(reader);
buffer = G__12113;
ch = G__12114;
continue;
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__12115 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__12116 = cljs.reader.read_char(reader);
buffer = G__12115;
ch = G__12116;
continue;

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function read_raw_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
buffer.append(ch);

var nch = cljs.reader.read_char(reader);
if((nch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
var G__12121 = (function (){var G__12119 = buffer;
G__12119.append(nch);

return G__12119;
})();
var G__12122 = cljs.reader.read_char(reader);
buffer = G__12121;
ch = G__12122;
continue;
}
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__12123 = (function (){var G__12120 = buffer;
G__12120.append(ch);

return G__12120;
})();
var G__12124 = cljs.reader.read_char(reader);
buffer = G__12123;
ch = G__12124;
continue;

}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil")){
return null;
} else {
if((t === "true")){
return true;
} else {
if((t === "false")){
return false;
} else {
if((t === "/")){
return new cljs.core.Symbol(null,"/","/",-1371932971,null);
} else {
return not_found;

}
}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token = cljs.reader.read_token(reader,initch);
if(cljs.core.truth_((function (){var and__3709__auto__ = (function (){var G__12131 = token;
var G__12132 = "/";
return goog.string.contains(G__12131,G__12132);
})();
if(cljs.core.truth_(and__3709__auto__)){
return !((token.length === (1)));
} else {
return and__3709__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + (1)),token.length));
} else {
return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));
var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);
var token__$1 = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1))))){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else {
if((!((ns == null))) && ((ns.length > (0)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,f], null);
} else {
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
return f;

}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__12137 = rdr;
var G__12138 = true;
var G__12139 = null;
var G__12140 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__12137,G__12138,G__12139,G__12140) : cljs.reader.read.call(null,G__12137,G__12138,G__12139,G__12140));
})()),sym);
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m = cljs.reader.desugar_meta((function (){var G__12150 = rdr;
var G__12151 = true;
var G__12152 = null;
var G__12153 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__12150,G__12151,G__12152,G__12153) : cljs.reader.read.call(null,G__12150,G__12151,G__12152,G__12153));
})());
if(cljs.core.map_QMARK_(m)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}

var o = (function (){var G__12154 = rdr;
var G__12155 = true;
var G__12156 = null;
var G__12157 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__12154,G__12155,G__12156,G__12157) : cljs.reader.read.call(null,G__12154,G__12155,G__12156,G__12157));
})();
if((function (){var G__12158 = o;
if(G__12158){
var bit__4402__auto__ = (G__12158.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4402__auto__) || (G__12158.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__12158.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12158);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12158);
}
})()){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern(cljs.reader.read_raw_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
var G__12163_12167 = rdr;
var G__12164_12168 = true;
var G__12165_12169 = null;
var G__12166_12170 = true;
(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__12163_12167,G__12164_12168,G__12165_12169,G__12166_12170) : cljs.reader.read.call(null,G__12163_12167,G__12164_12168,G__12165_12169,G__12166_12170));

return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\"")){
return cljs.reader.read_string_STAR_;
} else {
if((c === ":")){
return cljs.reader.read_keyword;
} else {
if((c === ";")){
return cljs.reader.read_comment;
} else {
if((c === "'")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else {
if((c === "@")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else {
if((c === "^")){
return cljs.reader.read_meta;
} else {
if((c === "`")){
return cljs.reader.not_implemented;
} else {
if((c === "~")){
return cljs.reader.not_implemented;
} else {
if((c === "(")){
return cljs.reader.read_list;
} else {
if((c === ")")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "[")){
return cljs.reader.read_vector;
} else {
if((c === "]")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "{")){
return cljs.reader.read_map;
} else {
if((c === "}")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "\\")){
return cljs.reader.read_char;
} else {
if((c === "#")){
return cljs.reader.read_dispatch;
} else {
return null;

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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{")){
return cljs.reader.read_set;
} else {
if((s === "<")){
return cljs.reader.throwing_reader("Unreadable form");
} else {
if((s === "\"")){
return cljs.reader.read_regex;
} else {
if((s === "!")){
return cljs.reader.read_comment;
} else {
if((s === "_")){
return cljs.reader.read_discard;
} else {
return null;

}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljs.reader.read_char(reader);
if((ch == null)){
if(cljs.core.truth_(eof_is_error)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
return sentinel;
}
} else {
if(cljs.reader.whitespace_QMARK_(ch)){
var G__12179 = reader;
var G__12180 = eof_is_error;
var G__12181 = sentinel;
var G__12182 = is_recursive;
reader = G__12179;
eof_is_error = G__12180;
sentinel = G__12181;
is_recursive = G__12182;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_(ch)){
var G__12183 = (function (){var G__12175 = reader;
var G__12176 = ch;
return (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(G__12175,G__12176) : cljs.reader.read_comment.call(null,G__12175,G__12176));
})();
var G__12184 = eof_is_error;
var G__12185 = sentinel;
var G__12186 = is_recursive;
reader = G__12183;
eof_is_error = G__12184;
sentinel = G__12185;
is_recursive = G__12186;
continue;
} else {
var f = cljs.reader.macros(ch);
var res = (cljs.core.truth_(f)?(function (){var G__12177 = reader;
var G__12178 = ch;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12177,G__12178) : f.call(null,G__12177,G__12178));
})():((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):cljs.reader.read_symbol(reader,ch)
));
if((res === reader)){
var G__12187 = reader;
var G__12188 = eof_is_error;
var G__12189 = sentinel;
var G__12190 = is_recursive;
reader = G__12187;
eof_is_error = G__12188;
sentinel = G__12189;
is_recursive = G__12190;
continue;
} else {
return res;
}

}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r = cljs.reader.push_back_reader(s);
return cljs.reader.read(r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__12191 = b.append("0");
b = G__12191;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return !(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
return (cljs.reader.divisible_QMARK_(year,(4))) && ((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function parse_int(s){
var n = (function (){var G__12195 = s;
var G__12196 = (10);
return parseInt(G__12195,G__12196);
})();
if(cljs.core.not((function (){var G__12197 = n;
return isNaN(G__12197);
})())){
return n;
} else {
return null;
}
});
cljs.reader.check = (function check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')], 0));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function parse_and_validate_timestamp(s){
var vec__12201 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12201,(10),null);
var v = vec__12201;
if(cljs.core.not(v)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join('')], 0));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__3721__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__3721__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__3721__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__3721__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__3721__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__3721__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__3721__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__3721__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__12202 = months__$1;
var G__12203 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__12202,G__12203) : cljs.reader.days_in_month.call(null,G__12202,G__12203));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4124__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__12205 = temp__4124__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12205,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12205,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12205,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12205,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12205,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12205,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12205,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12205,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__12218_12230 = cljs.core.seq(form);
var chunk__12219_12231 = null;
var count__12220_12232 = (0);
var i__12221_12233 = (0);
while(true){
if((i__12221_12233 < count__12220_12232)){
var x_12234 = chunk__12219_12231.cljs$core$IIndexed$_nth$arity$2(null,i__12221_12233);
arr.push(x_12234);

var G__12235 = seq__12218_12230;
var G__12236 = chunk__12219_12231;
var G__12237 = count__12220_12232;
var G__12238 = (i__12221_12233 + (1));
seq__12218_12230 = G__12235;
chunk__12219_12231 = G__12236;
count__12220_12232 = G__12237;
i__12221_12233 = G__12238;
continue;
} else {
var temp__4126__auto___12239 = cljs.core.seq(seq__12218_12230);
if(temp__4126__auto___12239){
var seq__12218_12240__$1 = temp__4126__auto___12239;
if(cljs.core.chunked_seq_QMARK_(seq__12218_12240__$1)){
var c__4508__auto___12241 = cljs.core.chunk_first(seq__12218_12240__$1);
var G__12242 = cljs.core.chunk_rest(seq__12218_12240__$1);
var G__12243 = c__4508__auto___12241;
var G__12244 = cljs.core.count(c__4508__auto___12241);
var G__12245 = (0);
seq__12218_12230 = G__12242;
chunk__12219_12231 = G__12243;
count__12220_12232 = G__12244;
i__12221_12233 = G__12245;
continue;
} else {
var x_12246 = cljs.core.first(seq__12218_12240__$1);
arr.push(x_12246);

var G__12247 = cljs.core.next(seq__12218_12240__$1);
var G__12248 = null;
var G__12249 = (0);
var G__12250 = (0);
seq__12218_12230 = G__12247;
chunk__12219_12231 = G__12248;
count__12220_12232 = G__12249;
i__12221_12233 = G__12250;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = (function (){var obj12223 = {};
return obj12223;
})();
var seq__12224_12251 = cljs.core.seq(form);
var chunk__12225_12252 = null;
var count__12226_12253 = (0);
var i__12227_12254 = (0);
while(true){
if((i__12227_12254 < count__12226_12253)){
var vec__12228_12255 = chunk__12225_12252.cljs$core$IIndexed$_nth$arity$2(null,i__12227_12254);
var k_12256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12228_12255,(0),null);
var v_12257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12228_12255,(1),null);
(obj[cljs.core.name(k_12256)] = v_12257);

var G__12258 = seq__12224_12251;
var G__12259 = chunk__12225_12252;
var G__12260 = count__12226_12253;
var G__12261 = (i__12227_12254 + (1));
seq__12224_12251 = G__12258;
chunk__12225_12252 = G__12259;
count__12226_12253 = G__12260;
i__12227_12254 = G__12261;
continue;
} else {
var temp__4126__auto___12262 = cljs.core.seq(seq__12224_12251);
if(temp__4126__auto___12262){
var seq__12224_12263__$1 = temp__4126__auto___12262;
if(cljs.core.chunked_seq_QMARK_(seq__12224_12263__$1)){
var c__4508__auto___12264 = cljs.core.chunk_first(seq__12224_12263__$1);
var G__12265 = cljs.core.chunk_rest(seq__12224_12263__$1);
var G__12266 = c__4508__auto___12264;
var G__12267 = cljs.core.count(c__4508__auto___12264);
var G__12268 = (0);
seq__12224_12251 = G__12265;
chunk__12225_12252 = G__12266;
count__12226_12253 = G__12267;
i__12227_12254 = G__12268;
continue;
} else {
var vec__12229_12269 = cljs.core.first(seq__12224_12263__$1);
var k_12270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12229_12269,(0),null);
var v_12271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12229_12269,(1),null);
(obj[cljs.core.name(k_12270)] = v_12271);

var G__12272 = cljs.core.next(seq__12224_12263__$1);
var G__12273 = null;
var G__12274 = (0);
var G__12275 = (0);
seq__12224_12251 = G__12272;
chunk__12225_12252 = G__12273;
count__12226_12253 = G__12274;
i__12227_12254 = G__12275;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join('')], 0));

}
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(typeof uuid === 'string'){
return (new cljs.core.UUID(uuid));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = (function (){var G__12276 = new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12276) : cljs.core.atom.call(null,G__12276));
})();
cljs.reader._STAR_default_data_reader_fn_STAR_ = (function (){var G__12277 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12277) : cljs.core.atom.call(null,G__12277));
})();
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag = cljs.reader.read_symbol(rdr,initch);
var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__12284 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12284) : cljs.core.deref.call(null,G__12284));
})(),[cljs.core.str(tag)].join(''));
var dfn = (function (){var G__12285 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12285) : cljs.core.deref.call(null,G__12285));
})();
if(cljs.core.truth_(pfn)){
var G__12286 = cljs.reader.read(rdr,true,null,false);
return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(G__12286) : pfn.call(null,G__12286));
} else {
if(cljs.core.truth_(dfn)){
var G__12287 = tag;
var G__12288 = cljs.reader.read(rdr,true,null,false);
return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(G__12287,G__12288) : dfn.call(null,G__12287,G__12288));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys((function (){var G__12289 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12289) : cljs.core.deref.call(null,G__12289));
})())], 0))], 0));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__12291 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12291) : cljs.core.deref.call(null,G__12291));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__12293 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12293) : cljs.core.deref.call(null,G__12293));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function register_default_tag_parser_BANG_(f){
var old_parser = (function (){var G__12295 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12295) : cljs.core.deref.call(null,G__12295));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function deregister_default_tag_parser_BANG_(){
var old_parser = (function (){var G__12297 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12297) : cljs.core.deref.call(null,G__12297));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
