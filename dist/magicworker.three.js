(()=>{var ym=Object.create;var ho=Object.defineProperty;var vm=Object.getOwnPropertyDescriptor;var bm=Object.getOwnPropertyNames;var _m=Object.getPrototypeOf,wm=Object.prototype.hasOwnProperty;var Sm=(l,e,t)=>e in l?ho(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var jr=(l=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(l,{get:(e,t)=>(typeof require!="undefined"?require:e)[t]}):l)(function(l){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+l+'" is not supported')});var Tm=(l,e)=>()=>(e||l((e={exports:{}}).exports,e),e.exports),df=(l,e)=>{for(var t in e)ho(l,t,{get:e[t],enumerable:!0})},Mm=(l,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of bm(e))!wm.call(l,i)&&i!==t&&ho(l,i,{get:()=>e[i],enumerable:!(n=vm(e,i))||n.enumerable});return l};var Em=(l,e,t)=>(t=l!=null?ym(_m(l)):{},Mm(e||!l||!l.__esModule?ho(t,"default",{value:l,enumerable:!0}):t,l));var rt=(l,e,t)=>(Sm(l,typeof e!="symbol"?e+"":e,t),t);var gf=Tm((mf,Tu)=>{(function(l){if(typeof mf=="object"&&typeof Tu<"u")Tu.exports=l();else if(typeof define=="function"&&define.amd)define([],l);else{var e;typeof window<"u"?e=window:typeof global<"u"?e=global:typeof self<"u"?e=self:e=this,l()}})(function(){var l,e,t;return function(){function n(i,s,r){function a(c,h){if(!s[c]){if(!i[c]){var o=typeof jr=="function"&&jr;if(!h&&o)return o(c,!0);if(f)return f(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var m=s[c]={exports:{}};i[c][0].call(m.exports,function(g){var y=i[c][1][g];return a(y||g)},m,m.exports,n,i,s,r)}return s[c].exports}for(var f=typeof jr=="function"&&jr,d=0;d<r.length;d++)a(r[d]);return a}return n}()({1:[function(n,i,s){(function(r,a){typeof s=="object"&&typeof i<"u"?a(s):typeof l=="function"&&l.amd?l(["exports"],a):(r=r||self,a(r.acorn={}))})(this,function(r){"use strict";var a={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},f="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",d={5:f,"5module":f+" export import",6:f+" const class extends export import super"},c=/^in(stanceof)?$/,h="\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",o="\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F",u=new RegExp("["+h+"]"),m=new RegExp("["+h+o+"]");h=o=null;var g=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,155,22,13,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,0,33,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,0,161,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,754,9486,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541],y=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,232,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,792487,239];function v(p,S){for(var R=65536,F=0;F<S.length;F+=2){if(R+=S[F],R>p)return!1;if(R+=S[F+1],R>=p)return!0}}function w(p,S){return p<65?p===36:p<91?!0:p<97?p===95:p<123?!0:p<=65535?p>=170&&u.test(String.fromCharCode(p)):S===!1?!1:v(p,g)}function E(p,S){return p<48?p===36:p<58?!0:p<65?!1:p<91?!0:p<97?p===95:p<123?!0:p<=65535?p>=170&&m.test(String.fromCharCode(p)):S===!1?!1:v(p,g)||v(p,y)}var _=function(S,R){R===void 0&&(R={}),this.label=S,this.keyword=R.keyword,this.beforeExpr=!!R.beforeExpr,this.startsExpr=!!R.startsExpr,this.isLoop=!!R.isLoop,this.isAssign=!!R.isAssign,this.prefix=!!R.prefix,this.postfix=!!R.postfix,this.binop=R.binop||null,this.updateContext=null};function M(p,S){return new _(p,{beforeExpr:!0,binop:S})}var A={beforeExpr:!0},I={startsExpr:!0},C={};function T(p,S){return S===void 0&&(S={}),S.keyword=p,C[p]=new _(p,S)}var b={num:new _("num",I),regexp:new _("regexp",I),string:new _("string",I),name:new _("name",I),eof:new _("eof"),bracketL:new _("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new _("]"),braceL:new _("{",{beforeExpr:!0,startsExpr:!0}),braceR:new _("}"),parenL:new _("(",{beforeExpr:!0,startsExpr:!0}),parenR:new _(")"),comma:new _(",",A),semi:new _(";",A),colon:new _(":",A),dot:new _("."),question:new _("?",A),arrow:new _("=>",A),template:new _("template"),invalidTemplate:new _("invalidTemplate"),ellipsis:new _("...",A),backQuote:new _("`",I),dollarBraceL:new _("${",{beforeExpr:!0,startsExpr:!0}),eq:new _("=",{beforeExpr:!0,isAssign:!0}),assign:new _("_=",{beforeExpr:!0,isAssign:!0}),incDec:new _("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new _("!/~",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:M("||",1),logicalAND:M("&&",2),bitwiseOR:M("|",3),bitwiseXOR:M("^",4),bitwiseAND:M("&",5),equality:M("==/!=/===/!==",6),relational:M("</>/<=/>=",7),bitShift:M("<</>>/>>>",8),plusMin:new _("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:M("%",10),star:M("*",10),slash:M("/",10),starstar:new _("**",{beforeExpr:!0}),_break:T("break"),_case:T("case",A),_catch:T("catch"),_continue:T("continue"),_debugger:T("debugger"),_default:T("default",A),_do:T("do",{isLoop:!0,beforeExpr:!0}),_else:T("else",A),_finally:T("finally"),_for:T("for",{isLoop:!0}),_function:T("function",I),_if:T("if"),_return:T("return",A),_switch:T("switch"),_throw:T("throw",A),_try:T("try"),_var:T("var"),_const:T("const"),_while:T("while",{isLoop:!0}),_with:T("with"),_new:T("new",{beforeExpr:!0,startsExpr:!0}),_this:T("this",I),_super:T("super",I),_class:T("class",I),_extends:T("extends",A),_export:T("export"),_import:T("import",I),_null:T("null",I),_true:T("true",I),_false:T("false",I),_in:T("in",{beforeExpr:!0,binop:7}),_instanceof:T("instanceof",{beforeExpr:!0,binop:7}),_typeof:T("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:T("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:T("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},L=/\r\n?|\n|\u2028|\u2029/,P=new RegExp(L.source,"g");function X(p,S){return p===10||p===13||!S&&(p===8232||p===8233)}var D=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,z=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,H=Object.prototype,B=H.hasOwnProperty,$=H.toString;function j(p,S){return B.call(p,S)}var K=Array.isArray||function(p){return $.call(p)==="[object Array]"};function ne(p){return new RegExp("^(?:"+p.replace(/ /g,"|")+")$")}var Z=function(S,R){this.line=S,this.column=R};Z.prototype.offset=function(S){return new Z(this.line,this.column+S)};var le=function(S,R,F){this.start=R,this.end=F,S.sourceFile!==null&&(this.source=S.sourceFile)};function ce(p,S){for(var R=1,F=0;;){P.lastIndex=F;var G=P.exec(p);if(G&&G.index<S)++R,F=G.index+G[0].length;else return new Z(R,S-F)}}var de={ecmaVersion:10,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowAwaitOutsideFunction:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1};function Q(p){var S={};for(var R in de)S[R]=p&&j(p,R)?p[R]:de[R];if(S.ecmaVersion>=2015&&(S.ecmaVersion-=2009),S.allowReserved==null&&(S.allowReserved=S.ecmaVersion<5),K(S.onToken)){var F=S.onToken;S.onToken=function(G){return F.push(G)}}return K(S.onComment)&&(S.onComment=Me(S,S.onComment)),S}function Me(p,S){return function(R,F,G,J,ue,Ce){var He={type:R?"Block":"Line",value:F,start:G,end:J};p.locations&&(He.loc=new le(this,ue,Ce)),p.ranges&&(He.range=[G,J]),S.push(He)}}var ve=1,Ve=2,oe=ve|Ve,Ie=4,ie=8,se=16,ae=32,xe=64,me=128;function Ne(p,S){return Ve|(p?Ie:0)|(S?ie:0)}var Pe=0,Fe=1,Je=2,st=3,V=4,O=5,Y=function(S,R,F){this.options=S=Q(S),this.sourceFile=S.sourceFile,this.keywords=ne(d[S.ecmaVersion>=6?6:S.sourceType==="module"?"5module":5]);var G="";if(S.allowReserved!==!0){for(var J=S.ecmaVersion;!(G=a[J]);J--);S.sourceType==="module"&&(G+=" await")}this.reservedWords=ne(G);var ue=(G?G+" ":"")+a.strict;this.reservedWordsStrict=ne(ue),this.reservedWordsStrictBind=ne(ue+" "+a.strictBind),this.input=String(R),this.containsEsc=!1,F?(this.pos=F,this.lineStart=this.input.lastIndexOf(`
`,F-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(L).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=b.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule=S.sourceType==="module",this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.yieldPos=this.awaitPos=this.awaitIdentPos=0,this.labels=[],this.undefinedExports={},this.pos===0&&S.allowHashBang&&this.input.slice(0,2)==="#!"&&this.skipLineComment(2),this.scopeStack=[],this.enterScope(ve),this.regexpState=null},pe={inFunction:{configurable:!0},inGenerator:{configurable:!0},inAsync:{configurable:!0},allowSuper:{configurable:!0},allowDirectSuper:{configurable:!0},treatFunctionsAsVar:{configurable:!0}};Y.prototype.parse=function(){var S=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(S)},pe.inFunction.get=function(){return(this.currentVarScope().flags&Ve)>0},pe.inGenerator.get=function(){return(this.currentVarScope().flags&ie)>0},pe.inAsync.get=function(){return(this.currentVarScope().flags&Ie)>0},pe.allowSuper.get=function(){return(this.currentThisScope().flags&xe)>0},pe.allowDirectSuper.get=function(){return(this.currentThisScope().flags&me)>0},pe.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())},Y.prototype.inNonArrowFunction=function(){return(this.currentThisScope().flags&Ve)>0},Y.extend=function(){for(var S=[],R=arguments.length;R--;)S[R]=arguments[R];for(var F=this,G=0;G<S.length;G++)F=S[G](F);return F},Y.parse=function(S,R){return new this(R,S).parse()},Y.parseExpressionAt=function(S,R,F){var G=new this(F,S,R);return G.nextToken(),G.parseExpression()},Y.tokenizer=function(S,R){return new this(R,S)},Object.defineProperties(Y.prototype,pe);var be=Y.prototype,Re=/^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;be.strictDirective=function(p){for(;;){z.lastIndex=p,p+=z.exec(this.input)[0].length;var S=Re.exec(this.input.slice(p));if(!S)return!1;if((S[1]||S[2])==="use strict")return!0;p+=S[0].length,z.lastIndex=p,p+=z.exec(this.input)[0].length,this.input[p]===";"&&p++}},be.eat=function(p){return this.type===p?(this.next(),!0):!1},be.isContextual=function(p){return this.type===b.name&&this.value===p&&!this.containsEsc},be.eatContextual=function(p){return this.isContextual(p)?(this.next(),!0):!1},be.expectContextual=function(p){this.eatContextual(p)||this.unexpected()},be.canInsertSemicolon=function(){return this.type===b.eof||this.type===b.braceR||L.test(this.input.slice(this.lastTokEnd,this.start))},be.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},be.semicolon=function(){!this.eat(b.semi)&&!this.insertSemicolon()&&this.unexpected()},be.afterTrailingComma=function(p,S){if(this.type===p)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),S||this.next(),!0},be.expect=function(p){this.eat(p)||this.unexpected()},be.unexpected=function(p){this.raise(p??this.start,"Unexpected token")};function Ue(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1}be.checkPatternErrors=function(p,S){if(!!p){p.trailingComma>-1&&this.raiseRecoverable(p.trailingComma,"Comma is not permitted after the rest element");var R=S?p.parenthesizedAssign:p.parenthesizedBind;R>-1&&this.raiseRecoverable(R,"Parenthesized pattern")}},be.checkExpressionErrors=function(p,S){if(!p)return!1;var R=p.shorthandAssign,F=p.doubleProto;if(!S)return R>=0||F>=0;R>=0&&this.raise(R,"Shorthand property assignments are valid only in destructuring patterns"),F>=0&&this.raiseRecoverable(F,"Redefinition of __proto__ property")},be.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value")},be.isSimpleAssignTarget=function(p){return p.type==="ParenthesizedExpression"?this.isSimpleAssignTarget(p.expression):p.type==="Identifier"||p.type==="MemberExpression"};var k=Y.prototype;k.parseTopLevel=function(p){var S={};for(p.body||(p.body=[]);this.type!==b.eof;){var R=this.parseStatement(null,!0,S);p.body.push(R)}if(this.inModule)for(var F=0,G=Object.keys(this.undefinedExports);F<G.length;F+=1){var J=G[F];this.raiseRecoverable(this.undefinedExports[J].start,"Export '"+J+"' is not defined")}return this.adaptDirectivePrologue(p.body),this.next(),p.sourceType=this.options.sourceType,this.finishNode(p,"Program")};var ye={kind:"loop"},ke={kind:"switch"};k.isLet=function(p){if(this.options.ecmaVersion<6||!this.isContextual("let"))return!1;z.lastIndex=this.pos;var S=z.exec(this.input),R=this.pos+S[0].length,F=this.input.charCodeAt(R);if(F===91)return!0;if(p)return!1;if(F===123)return!0;if(w(F,!0)){for(var G=R+1;E(this.input.charCodeAt(G),!0);)++G;var J=this.input.slice(R,G);if(!c.test(J))return!0}return!1},k.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async"))return!1;z.lastIndex=this.pos;var p=z.exec(this.input),S=this.pos+p[0].length;return!L.test(this.input.slice(this.pos,S))&&this.input.slice(S,S+8)==="function"&&(S+8===this.input.length||!E(this.input.charAt(S+8)))},k.parseStatement=function(p,S,R){var F=this.type,G=this.startNode(),J;switch(this.isLet(p)&&(F=b._var,J="let"),F){case b._break:case b._continue:return this.parseBreakContinueStatement(G,F.keyword);case b._debugger:return this.parseDebuggerStatement(G);case b._do:return this.parseDoStatement(G);case b._for:return this.parseForStatement(G);case b._function:return p&&(this.strict||p!=="if"&&p!=="label")&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(G,!1,!p);case b._class:return p&&this.unexpected(),this.parseClass(G,!0);case b._if:return this.parseIfStatement(G);case b._return:return this.parseReturnStatement(G);case b._switch:return this.parseSwitchStatement(G);case b._throw:return this.parseThrowStatement(G);case b._try:return this.parseTryStatement(G);case b._const:case b._var:return J=J||this.value,p&&J!=="var"&&this.unexpected(),this.parseVarStatement(G,J);case b._while:return this.parseWhileStatement(G);case b._with:return this.parseWithStatement(G);case b.braceL:return this.parseBlock(!0,G);case b.semi:return this.parseEmptyStatement(G);case b._export:case b._import:if(this.options.ecmaVersion>10&&F===b._import){z.lastIndex=this.pos;var ue=z.exec(this.input),Ce=this.pos+ue[0].length,He=this.input.charCodeAt(Ce);if(He===40)return this.parseExpressionStatement(G,this.parseExpression())}return this.options.allowImportExportEverywhere||(S||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),F===b._import?this.parseImport(G):this.parseExport(G,R);default:if(this.isAsyncFunction())return p&&this.unexpected(),this.next(),this.parseFunctionStatement(G,!0,!p);var ct=this.value,Jt=this.parseExpression();return F===b.name&&Jt.type==="Identifier"&&this.eat(b.colon)?this.parseLabeledStatement(G,ct,Jt,p):this.parseExpressionStatement(G,Jt)}},k.parseBreakContinueStatement=function(p,S){var R=S==="break";this.next(),this.eat(b.semi)||this.insertSemicolon()?p.label=null:this.type!==b.name?this.unexpected():(p.label=this.parseIdent(),this.semicolon());for(var F=0;F<this.labels.length;++F){var G=this.labels[F];if((p.label==null||G.name===p.label.name)&&(G.kind!=null&&(R||G.kind==="loop")||p.label&&R))break}return F===this.labels.length&&this.raise(p.start,"Unsyntactic "+S),this.finishNode(p,R?"BreakStatement":"ContinueStatement")},k.parseDebuggerStatement=function(p){return this.next(),this.semicolon(),this.finishNode(p,"DebuggerStatement")},k.parseDoStatement=function(p){return this.next(),this.labels.push(ye),p.body=this.parseStatement("do"),this.labels.pop(),this.expect(b._while),p.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(b.semi):this.semicolon(),this.finishNode(p,"DoWhileStatement")},k.parseForStatement=function(p){this.next();var S=this.options.ecmaVersion>=9&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)&&this.eatContextual("await")?this.lastTokStart:-1;if(this.labels.push(ye),this.enterScope(0),this.expect(b.parenL),this.type===b.semi)return S>-1&&this.unexpected(S),this.parseFor(p,null);var R=this.isLet();if(this.type===b._var||this.type===b._const||R){var F=this.startNode(),G=R?"let":this.value;return this.next(),this.parseVar(F,!0,G),this.finishNode(F,"VariableDeclaration"),(this.type===b._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&F.declarations.length===1?(this.options.ecmaVersion>=9&&(this.type===b._in?S>-1&&this.unexpected(S):p.await=S>-1),this.parseForIn(p,F)):(S>-1&&this.unexpected(S),this.parseFor(p,F))}var J=new Ue,ue=this.parseExpression(!0,J);return this.type===b._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.options.ecmaVersion>=9&&(this.type===b._in?S>-1&&this.unexpected(S):p.await=S>-1),this.toAssignable(ue,!1,J),this.checkLVal(ue),this.parseForIn(p,ue)):(this.checkExpressionErrors(J,!0),S>-1&&this.unexpected(S),this.parseFor(p,ue))},k.parseFunctionStatement=function(p,S,R){return this.next(),this.parseFunction(p,W|(R?0:we),!1,S)},k.parseIfStatement=function(p){return this.next(),p.test=this.parseParenExpression(),p.consequent=this.parseStatement("if"),p.alternate=this.eat(b._else)?this.parseStatement("if"):null,this.finishNode(p,"IfStatement")},k.parseReturnStatement=function(p){return!this.inFunction&&!this.options.allowReturnOutsideFunction&&this.raise(this.start,"'return' outside of function"),this.next(),this.eat(b.semi)||this.insertSemicolon()?p.argument=null:(p.argument=this.parseExpression(),this.semicolon()),this.finishNode(p,"ReturnStatement")},k.parseSwitchStatement=function(p){this.next(),p.discriminant=this.parseParenExpression(),p.cases=[],this.expect(b.braceL),this.labels.push(ke),this.enterScope(0);for(var S,R=!1;this.type!==b.braceR;)if(this.type===b._case||this.type===b._default){var F=this.type===b._case;S&&this.finishNode(S,"SwitchCase"),p.cases.push(S=this.startNode()),S.consequent=[],this.next(),F?S.test=this.parseExpression():(R&&this.raiseRecoverable(this.lastTokStart,"Multiple default clauses"),R=!0,S.test=null),this.expect(b.colon)}else S||this.unexpected(),S.consequent.push(this.parseStatement(null));return this.exitScope(),S&&this.finishNode(S,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(p,"SwitchStatement")},k.parseThrowStatement=function(p){return this.next(),L.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),p.argument=this.parseExpression(),this.semicolon(),this.finishNode(p,"ThrowStatement")};var Ee=[];k.parseTryStatement=function(p){if(this.next(),p.block=this.parseBlock(),p.handler=null,this.type===b._catch){var S=this.startNode();if(this.next(),this.eat(b.parenL)){S.param=this.parseBindingAtom();var R=S.param.type==="Identifier";this.enterScope(R?ae:0),this.checkLVal(S.param,R?V:Je),this.expect(b.parenR)}else this.options.ecmaVersion<10&&this.unexpected(),S.param=null,this.enterScope(0);S.body=this.parseBlock(!1),this.exitScope(),p.handler=this.finishNode(S,"CatchClause")}return p.finalizer=this.eat(b._finally)?this.parseBlock():null,!p.handler&&!p.finalizer&&this.raise(p.start,"Missing catch or finally clause"),this.finishNode(p,"TryStatement")},k.parseVarStatement=function(p,S){return this.next(),this.parseVar(p,!1,S),this.semicolon(),this.finishNode(p,"VariableDeclaration")},k.parseWhileStatement=function(p){return this.next(),p.test=this.parseParenExpression(),this.labels.push(ye),p.body=this.parseStatement("while"),this.labels.pop(),this.finishNode(p,"WhileStatement")},k.parseWithStatement=function(p){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),p.object=this.parseParenExpression(),p.body=this.parseStatement("with"),this.finishNode(p,"WithStatement")},k.parseEmptyStatement=function(p){return this.next(),this.finishNode(p,"EmptyStatement")},k.parseLabeledStatement=function(p,S,R,F){for(var G=0,J=this.labels;G<J.length;G+=1){var ue=J[G];ue.name===S&&this.raise(R.start,"Label '"+S+"' is already declared")}for(var Ce=this.type.isLoop?"loop":this.type===b._switch?"switch":null,He=this.labels.length-1;He>=0;He--){var ct=this.labels[He];if(ct.statementStart===p.start)ct.statementStart=this.start,ct.kind=Ce;else break}return this.labels.push({name:S,kind:Ce,statementStart:this.start}),p.body=this.parseStatement(F?F.indexOf("label")===-1?F+"label":F:"label"),this.labels.pop(),p.label=R,this.finishNode(p,"LabeledStatement")},k.parseExpressionStatement=function(p,S){return p.expression=S,this.semicolon(),this.finishNode(p,"ExpressionStatement")},k.parseBlock=function(p,S){for(p===void 0&&(p=!0),S===void 0&&(S=this.startNode()),S.body=[],this.expect(b.braceL),p&&this.enterScope(0);!this.eat(b.braceR);){var R=this.parseStatement(null);S.body.push(R)}return p&&this.exitScope(),this.finishNode(S,"BlockStatement")},k.parseFor=function(p,S){return p.init=S,this.expect(b.semi),p.test=this.type===b.semi?null:this.parseExpression(),this.expect(b.semi),p.update=this.type===b.parenR?null:this.parseExpression(),this.expect(b.parenR),p.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(p,"ForStatement")},k.parseForIn=function(p,S){var R=this.type===b._in;return this.next(),S.type==="VariableDeclaration"&&S.declarations[0].init!=null&&(!R||this.options.ecmaVersion<8||this.strict||S.kind!=="var"||S.declarations[0].id.type!=="Identifier")?this.raise(S.start,(R?"for-in":"for-of")+" loop variable declaration may not have an initializer"):S.type==="AssignmentPattern"&&this.raise(S.start,"Invalid left-hand side in for-loop"),p.left=S,p.right=R?this.parseExpression():this.parseMaybeAssign(),this.expect(b.parenR),p.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(p,R?"ForInStatement":"ForOfStatement")},k.parseVar=function(p,S,R){for(p.declarations=[],p.kind=R;;){var F=this.startNode();if(this.parseVarId(F,R),this.eat(b.eq)?F.init=this.parseMaybeAssign(S):R==="const"&&!(this.type===b._in||this.options.ecmaVersion>=6&&this.isContextual("of"))?this.unexpected():F.id.type!=="Identifier"&&!(S&&(this.type===b._in||this.isContextual("of")))?this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value"):F.init=null,p.declarations.push(this.finishNode(F,"VariableDeclarator")),!this.eat(b.comma))break}return p},k.parseVarId=function(p,S){p.id=this.parseBindingAtom(),this.checkLVal(p.id,S==="var"?Fe:Je,!1)};var W=1,we=2,Se=4;k.parseFunction=function(p,S,R,F){this.initFunction(p),(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!F)&&(this.type===b.star&&S&we&&this.unexpected(),p.generator=this.eat(b.star)),this.options.ecmaVersion>=8&&(p.async=!!F),S&W&&(p.id=S&Se&&this.type!==b.name?null:this.parseIdent(),p.id&&!(S&we)&&this.checkLVal(p.id,this.strict||p.generator||p.async?this.treatFunctionsAsVar?Fe:Je:st));var G=this.yieldPos,J=this.awaitPos,ue=this.awaitIdentPos;return this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(Ne(p.async,p.generator)),S&W||(p.id=this.type===b.name?this.parseIdent():null),this.parseFunctionParams(p),this.parseFunctionBody(p,R,!1),this.yieldPos=G,this.awaitPos=J,this.awaitIdentPos=ue,this.finishNode(p,S&W?"FunctionDeclaration":"FunctionExpression")},k.parseFunctionParams=function(p){this.expect(b.parenL),p.params=this.parseBindingList(b.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams()},k.parseClass=function(p,S){this.next();var R=this.strict;this.strict=!0,this.parseClassId(p,S),this.parseClassSuper(p);var F=this.startNode(),G=!1;for(F.body=[],this.expect(b.braceL);!this.eat(b.braceR);){var J=this.parseClassElement(p.superClass!==null);J&&(F.body.push(J),J.type==="MethodDefinition"&&J.kind==="constructor"&&(G&&this.raise(J.start,"Duplicate constructor in the same class"),G=!0))}return p.body=this.finishNode(F,"ClassBody"),this.strict=R,this.finishNode(p,S?"ClassDeclaration":"ClassExpression")},k.parseClassElement=function(p){var S=this;if(this.eat(b.semi))return null;var R=this.startNode(),F=function(He,ct){ct===void 0&&(ct=!1);var Jt=S.start,Xn=S.startLoc;return S.eatContextual(He)?S.type!==b.parenL&&(!ct||!S.canInsertSemicolon())?!0:(R.key&&S.unexpected(),R.computed=!1,R.key=S.startNodeAt(Jt,Xn),R.key.name=He,S.finishNode(R.key,"Identifier"),!1):!1};R.kind="method",R.static=F("static");var G=this.eat(b.star),J=!1;G||(this.options.ecmaVersion>=8&&F("async",!0)?(J=!0,G=this.options.ecmaVersion>=9&&this.eat(b.star)):F("get")?R.kind="get":F("set")&&(R.kind="set")),R.key||this.parsePropertyName(R);var ue=R.key,Ce=!1;return!R.computed&&!R.static&&(ue.type==="Identifier"&&ue.name==="constructor"||ue.type==="Literal"&&ue.value==="constructor")?(R.kind!=="method"&&this.raise(ue.start,"Constructor can't have get/set modifier"),G&&this.raise(ue.start,"Constructor can't be a generator"),J&&this.raise(ue.start,"Constructor can't be an async method"),R.kind="constructor",Ce=p):R.static&&ue.type==="Identifier"&&ue.name==="prototype"&&this.raise(ue.start,"Classes may not have a static property named prototype"),this.parseClassMethod(R,G,J,Ce),R.kind==="get"&&R.value.params.length!==0&&this.raiseRecoverable(R.value.start,"getter should have no params"),R.kind==="set"&&R.value.params.length!==1&&this.raiseRecoverable(R.value.start,"setter should have exactly one param"),R.kind==="set"&&R.value.params[0].type==="RestElement"&&this.raiseRecoverable(R.value.params[0].start,"Setter cannot use rest params"),R},k.parseClassMethod=function(p,S,R,F){return p.value=this.parseMethod(S,R,F),this.finishNode(p,"MethodDefinition")},k.parseClassId=function(p,S){this.type===b.name?(p.id=this.parseIdent(),S&&this.checkLVal(p.id,Je,!1)):(S===!0&&this.unexpected(),p.id=null)},k.parseClassSuper=function(p){p.superClass=this.eat(b._extends)?this.parseExprSubscripts():null},k.parseExport=function(p,S){if(this.next(),this.eat(b.star))return this.expectContextual("from"),this.type!==b.string&&this.unexpected(),p.source=this.parseExprAtom(),this.semicolon(),this.finishNode(p,"ExportAllDeclaration");if(this.eat(b._default)){this.checkExport(S,"default",this.lastTokStart);var R;if(this.type===b._function||(R=this.isAsyncFunction())){var F=this.startNode();this.next(),R&&this.next(),p.declaration=this.parseFunction(F,W|Se,!1,R)}else if(this.type===b._class){var G=this.startNode();p.declaration=this.parseClass(G,"nullableID")}else p.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(p,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())p.declaration=this.parseStatement(null),p.declaration.type==="VariableDeclaration"?this.checkVariableExport(S,p.declaration.declarations):this.checkExport(S,p.declaration.id.name,p.declaration.id.start),p.specifiers=[],p.source=null;else{if(p.declaration=null,p.specifiers=this.parseExportSpecifiers(S),this.eatContextual("from"))this.type!==b.string&&this.unexpected(),p.source=this.parseExprAtom();else{for(var J=0,ue=p.specifiers;J<ue.length;J+=1){var Ce=ue[J];this.checkUnreserved(Ce.local),this.checkLocalExport(Ce.local)}p.source=null}this.semicolon()}return this.finishNode(p,"ExportNamedDeclaration")},k.checkExport=function(p,S,R){!p||(j(p,S)&&this.raiseRecoverable(R,"Duplicate export '"+S+"'"),p[S]=!0)},k.checkPatternExport=function(p,S){var R=S.type;if(R==="Identifier")this.checkExport(p,S.name,S.start);else if(R==="ObjectPattern")for(var F=0,G=S.properties;F<G.length;F+=1){var J=G[F];this.checkPatternExport(p,J)}else if(R==="ArrayPattern")for(var ue=0,Ce=S.elements;ue<Ce.length;ue+=1){var He=Ce[ue];He&&this.checkPatternExport(p,He)}else R==="Property"?this.checkPatternExport(p,S.value):R==="AssignmentPattern"?this.checkPatternExport(p,S.left):R==="RestElement"?this.checkPatternExport(p,S.argument):R==="ParenthesizedExpression"&&this.checkPatternExport(p,S.expression)},k.checkVariableExport=function(p,S){if(!!p)for(var R=0,F=S;R<F.length;R+=1){var G=F[R];this.checkPatternExport(p,G.id)}},k.shouldParseExportStatement=function(){return this.type.keyword==="var"||this.type.keyword==="const"||this.type.keyword==="class"||this.type.keyword==="function"||this.isLet()||this.isAsyncFunction()},k.parseExportSpecifiers=function(p){var S=[],R=!0;for(this.expect(b.braceL);!this.eat(b.braceR);){if(R)R=!1;else if(this.expect(b.comma),this.afterTrailingComma(b.braceR))break;var F=this.startNode();F.local=this.parseIdent(!0),F.exported=this.eatContextual("as")?this.parseIdent(!0):F.local,this.checkExport(p,F.exported.name,F.exported.start),S.push(this.finishNode(F,"ExportSpecifier"))}return S},k.parseImport=function(p){return this.next(),this.type===b.string?(p.specifiers=Ee,p.source=this.parseExprAtom()):(p.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),p.source=this.type===b.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(p,"ImportDeclaration")},k.parseImportSpecifiers=function(){var p=[],S=!0;if(this.type===b.name){var R=this.startNode();if(R.local=this.parseIdent(),this.checkLVal(R.local,Je),p.push(this.finishNode(R,"ImportDefaultSpecifier")),!this.eat(b.comma))return p}if(this.type===b.star){var F=this.startNode();return this.next(),this.expectContextual("as"),F.local=this.parseIdent(),this.checkLVal(F.local,Je),p.push(this.finishNode(F,"ImportNamespaceSpecifier")),p}for(this.expect(b.braceL);!this.eat(b.braceR);){if(S)S=!1;else if(this.expect(b.comma),this.afterTrailingComma(b.braceR))break;var G=this.startNode();G.imported=this.parseIdent(!0),this.eatContextual("as")?G.local=this.parseIdent():(this.checkUnreserved(G.imported),G.local=G.imported),this.checkLVal(G.local,Je),p.push(this.finishNode(G,"ImportSpecifier"))}return p},k.adaptDirectivePrologue=function(p){for(var S=0;S<p.length&&this.isDirectiveCandidate(p[S]);++S)p[S].directive=p[S].expression.raw.slice(1,-1)},k.isDirectiveCandidate=function(p){return p.type==="ExpressionStatement"&&p.expression.type==="Literal"&&typeof p.expression.value=="string"&&(this.input[p.start]==='"'||this.input[p.start]==="'")};var Oe=Y.prototype;Oe.toAssignable=function(p,S,R){if(this.options.ecmaVersion>=6&&p)switch(p.type){case"Identifier":this.inAsync&&p.name==="await"&&this.raise(p.start,"Cannot use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":case"RestElement":break;case"ObjectExpression":p.type="ObjectPattern",R&&this.checkPatternErrors(R,!0);for(var F=0,G=p.properties;F<G.length;F+=1){var J=G[F];this.toAssignable(J,S),J.type==="RestElement"&&(J.argument.type==="ArrayPattern"||J.argument.type==="ObjectPattern")&&this.raise(J.argument.start,"Unexpected token")}break;case"Property":p.kind!=="init"&&this.raise(p.key.start,"Object pattern can't contain getter or setter"),this.toAssignable(p.value,S);break;case"ArrayExpression":p.type="ArrayPattern",R&&this.checkPatternErrors(R,!0),this.toAssignableList(p.elements,S);break;case"SpreadElement":p.type="RestElement",this.toAssignable(p.argument,S),p.argument.type==="AssignmentPattern"&&this.raise(p.argument.start,"Rest elements cannot have a default value");break;case"AssignmentExpression":p.operator!=="="&&this.raise(p.left.end,"Only '=' operator can be used for specifying default value."),p.type="AssignmentPattern",delete p.operator,this.toAssignable(p.left,S);case"AssignmentPattern":break;case"ParenthesizedExpression":this.toAssignable(p.expression,S,R);break;case"MemberExpression":if(!S)break;default:this.raise(p.start,"Assigning to rvalue")}else R&&this.checkPatternErrors(R,!0);return p},Oe.toAssignableList=function(p,S){for(var R=p.length,F=0;F<R;F++){var G=p[F];G&&this.toAssignable(G,S)}if(R){var J=p[R-1];this.options.ecmaVersion===6&&S&&J&&J.type==="RestElement"&&J.argument.type!=="Identifier"&&this.unexpected(J.argument.start)}return p},Oe.parseSpread=function(p){var S=this.startNode();return this.next(),S.argument=this.parseMaybeAssign(!1,p),this.finishNode(S,"SpreadElement")},Oe.parseRestBinding=function(){var p=this.startNode();return this.next(),this.options.ecmaVersion===6&&this.type!==b.name&&this.unexpected(),p.argument=this.parseBindingAtom(),this.finishNode(p,"RestElement")},Oe.parseBindingAtom=function(){if(this.options.ecmaVersion>=6)switch(this.type){case b.bracketL:var p=this.startNode();return this.next(),p.elements=this.parseBindingList(b.bracketR,!0,!0),this.finishNode(p,"ArrayPattern");case b.braceL:return this.parseObj(!0)}return this.parseIdent()},Oe.parseBindingList=function(p,S,R){for(var F=[],G=!0;!this.eat(p);)if(G?G=!1:this.expect(b.comma),S&&this.type===b.comma)F.push(null);else{if(R&&this.afterTrailingComma(p))break;if(this.type===b.ellipsis){var J=this.parseRestBinding();this.parseBindingListItem(J),F.push(J),this.type===b.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.expect(p);break}else{var ue=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(ue),F.push(ue)}}return F},Oe.parseBindingListItem=function(p){return p},Oe.parseMaybeDefault=function(p,S,R){if(R=R||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(b.eq))return R;var F=this.startNodeAt(p,S);return F.left=R,F.right=this.parseMaybeAssign(),this.finishNode(F,"AssignmentPattern")},Oe.checkLVal=function(p,S,R){switch(S===void 0&&(S=Pe),p.type){case"Identifier":S===Je&&p.name==="let"&&this.raiseRecoverable(p.start,"let is disallowed as a lexically bound name"),this.strict&&this.reservedWordsStrictBind.test(p.name)&&this.raiseRecoverable(p.start,(S?"Binding ":"Assigning to ")+p.name+" in strict mode"),R&&(j(R,p.name)&&this.raiseRecoverable(p.start,"Argument name clash"),R[p.name]=!0),S!==Pe&&S!==O&&this.declareName(p.name,S,p.start);break;case"MemberExpression":S&&this.raiseRecoverable(p.start,"Binding member expression");break;case"ObjectPattern":for(var F=0,G=p.properties;F<G.length;F+=1){var J=G[F];this.checkLVal(J,S,R)}break;case"Property":this.checkLVal(p.value,S,R);break;case"ArrayPattern":for(var ue=0,Ce=p.elements;ue<Ce.length;ue+=1){var He=Ce[ue];He&&this.checkLVal(He,S,R)}break;case"AssignmentPattern":this.checkLVal(p.left,S,R);break;case"RestElement":this.checkLVal(p.argument,S,R);break;case"ParenthesizedExpression":this.checkLVal(p.expression,S,R);break;default:this.raise(p.start,(S?"Binding":"Assigning to")+" rvalue")}};var he=Y.prototype;he.checkPropClash=function(p,S,R){if(!(this.options.ecmaVersion>=9&&p.type==="SpreadElement")&&!(this.options.ecmaVersion>=6&&(p.computed||p.method||p.shorthand))){var F=p.key,G;switch(F.type){case"Identifier":G=F.name;break;case"Literal":G=String(F.value);break;default:return}var J=p.kind;if(this.options.ecmaVersion>=6){G==="__proto__"&&J==="init"&&(S.proto&&(R?R.doubleProto<0&&(R.doubleProto=F.start):this.raiseRecoverable(F.start,"Redefinition of __proto__ property")),S.proto=!0);return}G="$"+G;var ue=S[G];if(ue){var Ce;J==="init"?Ce=this.strict&&ue.init||ue.get||ue.set:Ce=ue.init||ue[J],Ce&&this.raiseRecoverable(F.start,"Redefinition of property")}else ue=S[G]={init:!1,get:!1,set:!1};ue[J]=!0}},he.parseExpression=function(p,S){var R=this.start,F=this.startLoc,G=this.parseMaybeAssign(p,S);if(this.type===b.comma){var J=this.startNodeAt(R,F);for(J.expressions=[G];this.eat(b.comma);)J.expressions.push(this.parseMaybeAssign(p,S));return this.finishNode(J,"SequenceExpression")}return G},he.parseMaybeAssign=function(p,S,R){if(this.isContextual("yield")){if(this.inGenerator)return this.parseYield(p);this.exprAllowed=!1}var F=!1,G=-1,J=-1;S?(G=S.parenthesizedAssign,J=S.trailingComma,S.parenthesizedAssign=S.trailingComma=-1):(S=new Ue,F=!0);var ue=this.start,Ce=this.startLoc;(this.type===b.parenL||this.type===b.name)&&(this.potentialArrowAt=this.start);var He=this.parseMaybeConditional(p,S);if(R&&(He=R.call(this,He,ue,Ce)),this.type.isAssign){var ct=this.startNodeAt(ue,Ce);return ct.operator=this.value,ct.left=this.type===b.eq?this.toAssignable(He,!1,S):He,F||(S.parenthesizedAssign=S.trailingComma=S.doubleProto=-1),S.shorthandAssign>=ct.left.start&&(S.shorthandAssign=-1),this.checkLVal(He),this.next(),ct.right=this.parseMaybeAssign(p),this.finishNode(ct,"AssignmentExpression")}else F&&this.checkExpressionErrors(S,!0);return G>-1&&(S.parenthesizedAssign=G),J>-1&&(S.trailingComma=J),He},he.parseMaybeConditional=function(p,S){var R=this.start,F=this.startLoc,G=this.parseExprOps(p,S);if(this.checkExpressionErrors(S))return G;if(this.eat(b.question)){var J=this.startNodeAt(R,F);return J.test=G,J.consequent=this.parseMaybeAssign(),this.expect(b.colon),J.alternate=this.parseMaybeAssign(p),this.finishNode(J,"ConditionalExpression")}return G},he.parseExprOps=function(p,S){var R=this.start,F=this.startLoc,G=this.parseMaybeUnary(S,!1);return this.checkExpressionErrors(S)||G.start===R&&G.type==="ArrowFunctionExpression"?G:this.parseExprOp(G,R,F,-1,p)},he.parseExprOp=function(p,S,R,F,G){var J=this.type.binop;if(J!=null&&(!G||this.type!==b._in)&&J>F){var ue=this.type===b.logicalOR||this.type===b.logicalAND,Ce=this.value;this.next();var He=this.start,ct=this.startLoc,Jt=this.parseExprOp(this.parseMaybeUnary(null,!1),He,ct,J,G),Xn=this.buildBinary(S,R,p,Jt,Ce,ue);return this.parseExprOp(Xn,S,R,F,G)}return p},he.buildBinary=function(p,S,R,F,G,J){var ue=this.startNodeAt(p,S);return ue.left=R,ue.operator=G,ue.right=F,this.finishNode(ue,J?"LogicalExpression":"BinaryExpression")},he.parseMaybeUnary=function(p,S){var R=this.start,F=this.startLoc,G;if(this.isContextual("await")&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction))G=this.parseAwait(),S=!0;else if(this.type.prefix){var J=this.startNode(),ue=this.type===b.incDec;J.operator=this.value,J.prefix=!0,this.next(),J.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(p,!0),ue?this.checkLVal(J.argument):this.strict&&J.operator==="delete"&&J.argument.type==="Identifier"?this.raiseRecoverable(J.start,"Deleting local variable in strict mode"):S=!0,G=this.finishNode(J,ue?"UpdateExpression":"UnaryExpression")}else{if(G=this.parseExprSubscripts(p),this.checkExpressionErrors(p))return G;for(;this.type.postfix&&!this.canInsertSemicolon();){var Ce=this.startNodeAt(R,F);Ce.operator=this.value,Ce.prefix=!1,Ce.argument=G,this.checkLVal(G),this.next(),G=this.finishNode(Ce,"UpdateExpression")}}return!S&&this.eat(b.starstar)?this.buildBinary(R,F,G,this.parseMaybeUnary(null,!1),"**",!1):G},he.parseExprSubscripts=function(p){var S=this.start,R=this.startLoc,F=this.parseExprAtom(p);if(F.type==="ArrowFunctionExpression"&&this.input.slice(this.lastTokStart,this.lastTokEnd)!==")")return F;var G=this.parseSubscripts(F,S,R);return p&&G.type==="MemberExpression"&&(p.parenthesizedAssign>=G.start&&(p.parenthesizedAssign=-1),p.parenthesizedBind>=G.start&&(p.parenthesizedBind=-1)),G},he.parseSubscripts=function(p,S,R,F){for(var G=this.options.ecmaVersion>=8&&p.type==="Identifier"&&p.name==="async"&&this.lastTokEnd===p.end&&!this.canInsertSemicolon()&&this.input.slice(p.start,p.end)==="async";;){var J=this.parseSubscript(p,S,R,F,G);if(J===p||J.type==="ArrowFunctionExpression")return J;p=J}},he.parseSubscript=function(p,S,R,F,G){var J=this.eat(b.bracketL);if(J||this.eat(b.dot)){var ue=this.startNodeAt(S,R);ue.object=p,ue.property=J?this.parseExpression():this.parseIdent(this.options.allowReserved!=="never"),ue.computed=!!J,J&&this.expect(b.bracketR),p=this.finishNode(ue,"MemberExpression")}else if(!F&&this.eat(b.parenL)){var Ce=new Ue,He=this.yieldPos,ct=this.awaitPos,Jt=this.awaitIdentPos;this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0;var Xn=this.parseExprList(b.parenR,this.options.ecmaVersion>=8,!1,Ce);if(G&&!this.canInsertSemicolon()&&this.eat(b.arrow))return this.checkPatternErrors(Ce,!1),this.checkYieldAwaitInDefaultParams(),this.awaitIdentPos>0&&this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function"),this.yieldPos=He,this.awaitPos=ct,this.awaitIdentPos=Jt,this.parseArrowExpression(this.startNodeAt(S,R),Xn,!0);this.checkExpressionErrors(Ce,!0),this.yieldPos=He||this.yieldPos,this.awaitPos=ct||this.awaitPos,this.awaitIdentPos=Jt||this.awaitIdentPos;var Vs=this.startNodeAt(S,R);Vs.callee=p,Vs.arguments=Xn,p=this.finishNode(Vs,"CallExpression")}else if(this.type===b.backQuote){var Hi=this.startNodeAt(S,R);Hi.tag=p,Hi.quasi=this.parseTemplate({isTagged:!0}),p=this.finishNode(Hi,"TaggedTemplateExpression")}return p},he.parseExprAtom=function(p){this.type===b.slash&&this.readRegexp();var S,R=this.potentialArrowAt===this.start;switch(this.type){case b._super:return this.allowSuper||this.raise(this.start,"'super' keyword outside a method"),S=this.startNode(),this.next(),this.type===b.parenL&&!this.allowDirectSuper&&this.raise(S.start,"super() call outside constructor of a subclass"),this.type!==b.dot&&this.type!==b.bracketL&&this.type!==b.parenL&&this.unexpected(),this.finishNode(S,"Super");case b._this:return S=this.startNode(),this.next(),this.finishNode(S,"ThisExpression");case b.name:var F=this.start,G=this.startLoc,J=this.containsEsc,ue=this.parseIdent(!1);if(this.options.ecmaVersion>=8&&!J&&ue.name==="async"&&!this.canInsertSemicolon()&&this.eat(b._function))return this.parseFunction(this.startNodeAt(F,G),0,!1,!0);if(R&&!this.canInsertSemicolon()){if(this.eat(b.arrow))return this.parseArrowExpression(this.startNodeAt(F,G),[ue],!1);if(this.options.ecmaVersion>=8&&ue.name==="async"&&this.type===b.name&&!J)return ue=this.parseIdent(!1),(this.canInsertSemicolon()||!this.eat(b.arrow))&&this.unexpected(),this.parseArrowExpression(this.startNodeAt(F,G),[ue],!0)}return ue;case b.regexp:var Ce=this.value;return S=this.parseLiteral(Ce.value),S.regex={pattern:Ce.pattern,flags:Ce.flags},S;case b.num:case b.string:return this.parseLiteral(this.value);case b._null:case b._true:case b._false:return S=this.startNode(),S.value=this.type===b._null?null:this.type===b._true,S.raw=this.type.keyword,this.next(),this.finishNode(S,"Literal");case b.parenL:var He=this.start,ct=this.parseParenAndDistinguishExpression(R);return p&&(p.parenthesizedAssign<0&&!this.isSimpleAssignTarget(ct)&&(p.parenthesizedAssign=He),p.parenthesizedBind<0&&(p.parenthesizedBind=He)),ct;case b.bracketL:return S=this.startNode(),this.next(),S.elements=this.parseExprList(b.bracketR,!0,!0,p),this.finishNode(S,"ArrayExpression");case b.braceL:return this.parseObj(!1,p);case b._function:return S=this.startNode(),this.next(),this.parseFunction(S,0);case b._class:return this.parseClass(this.startNode(),!1);case b._new:return this.parseNew();case b.backQuote:return this.parseTemplate();case b._import:return this.options.ecmaVersion>=11?this.parseExprImport():this.unexpected();default:this.unexpected()}},he.parseExprImport=function(){var p=this.startNode();switch(this.next(),this.type){case b.parenL:return this.parseDynamicImport(p);default:this.unexpected()}},he.parseDynamicImport=function(p){if(this.next(),p.source=this.parseMaybeAssign(),!this.eat(b.parenR)){var S=this.start;this.eat(b.comma)&&this.eat(b.parenR)?this.raiseRecoverable(S,"Trailing comma is not allowed in import()"):this.unexpected(S)}return this.finishNode(p,"ImportExpression")},he.parseLiteral=function(p){var S=this.startNode();return S.value=p,S.raw=this.input.slice(this.start,this.end),S.raw.charCodeAt(S.raw.length-1)===110&&(S.bigint=S.raw.slice(0,-1)),this.next(),this.finishNode(S,"Literal")},he.parseParenExpression=function(){this.expect(b.parenL);var p=this.parseExpression();return this.expect(b.parenR),p},he.parseParenAndDistinguishExpression=function(p){var S=this.start,R=this.startLoc,F,G=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var J=this.start,ue=this.startLoc,Ce=[],He=!0,ct=!1,Jt=new Ue,Xn=this.yieldPos,Vs=this.awaitPos,Hi;for(this.yieldPos=0,this.awaitPos=0;this.type!==b.parenR;)if(He?He=!1:this.expect(b.comma),G&&this.afterTrailingComma(b.parenR,!0)){ct=!0;break}else if(this.type===b.ellipsis){Hi=this.start,Ce.push(this.parseParenItem(this.parseRestBinding())),this.type===b.comma&&this.raise(this.start,"Comma is not permitted after the rest element");break}else Ce.push(this.parseMaybeAssign(!1,Jt,this.parseParenItem));var gm=this.start,xm=this.startLoc;if(this.expect(b.parenR),p&&!this.canInsertSemicolon()&&this.eat(b.arrow))return this.checkPatternErrors(Jt,!1),this.checkYieldAwaitInDefaultParams(),this.yieldPos=Xn,this.awaitPos=Vs,this.parseParenArrowList(S,R,Ce);(!Ce.length||ct)&&this.unexpected(this.lastTokStart),Hi&&this.unexpected(Hi),this.checkExpressionErrors(Jt,!0),this.yieldPos=Xn||this.yieldPos,this.awaitPos=Vs||this.awaitPos,Ce.length>1?(F=this.startNodeAt(J,ue),F.expressions=Ce,this.finishNodeAt(F,"SequenceExpression",gm,xm)):F=Ce[0]}else F=this.parseParenExpression();if(this.options.preserveParens){var ff=this.startNodeAt(S,R);return ff.expression=F,this.finishNode(ff,"ParenthesizedExpression")}else return F},he.parseParenItem=function(p){return p},he.parseParenArrowList=function(p,S,R){return this.parseArrowExpression(this.startNodeAt(p,S),R)};var ze=[];he.parseNew=function(){this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword new");var p=this.startNode(),S=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(b.dot)){p.meta=S;var R=this.containsEsc;return p.property=this.parseIdent(!0),(p.property.name!=="target"||R)&&this.raiseRecoverable(p.property.start,"The only valid meta property for new is new.target"),this.inNonArrowFunction()||this.raiseRecoverable(p.start,"new.target can only be used in functions"),this.finishNode(p,"MetaProperty")}var F=this.start,G=this.startLoc,J=this.type===b._import;return p.callee=this.parseSubscripts(this.parseExprAtom(),F,G,!0),J&&p.callee.type==="ImportExpression"&&this.raise(F,"Cannot use new with import()"),this.eat(b.parenL)?p.arguments=this.parseExprList(b.parenR,this.options.ecmaVersion>=8,!1):p.arguments=ze,this.finishNode(p,"NewExpression")},he.parseTemplateElement=function(p){var S=p.isTagged,R=this.startNode();return this.type===b.invalidTemplate?(S||this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal"),R.value={raw:this.value,cooked:null}):R.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,`
`),cooked:this.value},this.next(),R.tail=this.type===b.backQuote,this.finishNode(R,"TemplateElement")},he.parseTemplate=function(p){p===void 0&&(p={});var S=p.isTagged;S===void 0&&(S=!1);var R=this.startNode();this.next(),R.expressions=[];var F=this.parseTemplateElement({isTagged:S});for(R.quasis=[F];!F.tail;)this.type===b.eof&&this.raise(this.pos,"Unterminated template literal"),this.expect(b.dollarBraceL),R.expressions.push(this.parseExpression()),this.expect(b.braceR),R.quasis.push(F=this.parseTemplateElement({isTagged:S}));return this.next(),this.finishNode(R,"TemplateLiteral")},he.isAsyncProp=function(p){return!p.computed&&p.key.type==="Identifier"&&p.key.name==="async"&&(this.type===b.name||this.type===b.num||this.type===b.string||this.type===b.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===b.star)&&!L.test(this.input.slice(this.lastTokEnd,this.start))},he.parseObj=function(p,S){var R=this.startNode(),F=!0,G={};for(R.properties=[],this.next();!this.eat(b.braceR);){if(F)F=!1;else if(this.expect(b.comma),this.options.ecmaVersion>=5&&this.afterTrailingComma(b.braceR))break;var J=this.parseProperty(p,S);p||this.checkPropClash(J,G,S),R.properties.push(J)}return this.finishNode(R,p?"ObjectPattern":"ObjectExpression")},he.parseProperty=function(p,S){var R=this.startNode(),F,G,J,ue;if(this.options.ecmaVersion>=9&&this.eat(b.ellipsis))return p?(R.argument=this.parseIdent(!1),this.type===b.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.finishNode(R,"RestElement")):(this.type===b.parenL&&S&&(S.parenthesizedAssign<0&&(S.parenthesizedAssign=this.start),S.parenthesizedBind<0&&(S.parenthesizedBind=this.start)),R.argument=this.parseMaybeAssign(!1,S),this.type===b.comma&&S&&S.trailingComma<0&&(S.trailingComma=this.start),this.finishNode(R,"SpreadElement"));this.options.ecmaVersion>=6&&(R.method=!1,R.shorthand=!1,(p||S)&&(J=this.start,ue=this.startLoc),p||(F=this.eat(b.star)));var Ce=this.containsEsc;return this.parsePropertyName(R),!p&&!Ce&&this.options.ecmaVersion>=8&&!F&&this.isAsyncProp(R)?(G=!0,F=this.options.ecmaVersion>=9&&this.eat(b.star),this.parsePropertyName(R,S)):G=!1,this.parsePropertyValue(R,p,F,G,J,ue,S,Ce),this.finishNode(R,"Property")},he.parsePropertyValue=function(p,S,R,F,G,J,ue,Ce){if((R||F)&&this.type===b.colon&&this.unexpected(),this.eat(b.colon))p.value=S?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,ue),p.kind="init";else if(this.options.ecmaVersion>=6&&this.type===b.parenL)S&&this.unexpected(),p.kind="init",p.method=!0,p.value=this.parseMethod(R,F);else if(!S&&!Ce&&this.options.ecmaVersion>=5&&!p.computed&&p.key.type==="Identifier"&&(p.key.name==="get"||p.key.name==="set")&&this.type!==b.comma&&this.type!==b.braceR){(R||F)&&this.unexpected(),p.kind=p.key.name,this.parsePropertyName(p),p.value=this.parseMethod(!1);var He=p.kind==="get"?0:1;if(p.value.params.length!==He){var ct=p.value.start;p.kind==="get"?this.raiseRecoverable(ct,"getter should have no params"):this.raiseRecoverable(ct,"setter should have exactly one param")}else p.kind==="set"&&p.value.params[0].type==="RestElement"&&this.raiseRecoverable(p.value.params[0].start,"Setter cannot use rest params")}else this.options.ecmaVersion>=6&&!p.computed&&p.key.type==="Identifier"?((R||F)&&this.unexpected(),this.checkUnreserved(p.key),p.key.name==="await"&&!this.awaitIdentPos&&(this.awaitIdentPos=G),p.kind="init",S?p.value=this.parseMaybeDefault(G,J,p.key):this.type===b.eq&&ue?(ue.shorthandAssign<0&&(ue.shorthandAssign=this.start),p.value=this.parseMaybeDefault(G,J,p.key)):p.value=p.key,p.shorthand=!0):this.unexpected()},he.parsePropertyName=function(p){if(this.options.ecmaVersion>=6){if(this.eat(b.bracketL))return p.computed=!0,p.key=this.parseMaybeAssign(),this.expect(b.bracketR),p.key;p.computed=!1}return p.key=this.type===b.num||this.type===b.string?this.parseExprAtom():this.parseIdent(this.options.allowReserved!=="never")},he.initFunction=function(p){p.id=null,this.options.ecmaVersion>=6&&(p.generator=p.expression=!1),this.options.ecmaVersion>=8&&(p.async=!1)},he.parseMethod=function(p,S,R){var F=this.startNode(),G=this.yieldPos,J=this.awaitPos,ue=this.awaitIdentPos;return this.initFunction(F),this.options.ecmaVersion>=6&&(F.generator=p),this.options.ecmaVersion>=8&&(F.async=!!S),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(Ne(S,F.generator)|xe|(R?me:0)),this.expect(b.parenL),F.params=this.parseBindingList(b.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(F,!1,!0),this.yieldPos=G,this.awaitPos=J,this.awaitIdentPos=ue,this.finishNode(F,"FunctionExpression")},he.parseArrowExpression=function(p,S,R){var F=this.yieldPos,G=this.awaitPos,J=this.awaitIdentPos;return this.enterScope(Ne(R,!1)|se),this.initFunction(p),this.options.ecmaVersion>=8&&(p.async=!!R),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,p.params=this.toAssignableList(S,!0),this.parseFunctionBody(p,!0,!1),this.yieldPos=F,this.awaitPos=G,this.awaitIdentPos=J,this.finishNode(p,"ArrowFunctionExpression")},he.parseFunctionBody=function(p,S,R){var F=S&&this.type!==b.braceL,G=this.strict,J=!1;if(F)p.body=this.parseMaybeAssign(),p.expression=!0,this.checkParams(p,!1);else{var ue=this.options.ecmaVersion>=7&&!this.isSimpleParamList(p.params);(!G||ue)&&(J=this.strictDirective(this.end),J&&ue&&this.raiseRecoverable(p.start,"Illegal 'use strict' directive in function with non-simple parameter list"));var Ce=this.labels;this.labels=[],J&&(this.strict=!0),this.checkParams(p,!G&&!J&&!S&&!R&&this.isSimpleParamList(p.params)),p.body=this.parseBlock(!1),p.expression=!1,this.adaptDirectivePrologue(p.body.body),this.labels=Ce}this.exitScope(),this.strict&&p.id&&this.checkLVal(p.id,O),this.strict=G},he.isSimpleParamList=function(p){for(var S=0,R=p;S<R.length;S+=1){var F=R[S];if(F.type!=="Identifier")return!1}return!0},he.checkParams=function(p,S){for(var R={},F=0,G=p.params;F<G.length;F+=1){var J=G[F];this.checkLVal(J,Fe,S?null:R)}},he.parseExprList=function(p,S,R,F){for(var G=[],J=!0;!this.eat(p);){if(J)J=!1;else if(this.expect(b.comma),S&&this.afterTrailingComma(p))break;var ue=void 0;R&&this.type===b.comma?ue=null:this.type===b.ellipsis?(ue=this.parseSpread(F),F&&this.type===b.comma&&F.trailingComma<0&&(F.trailingComma=this.start)):ue=this.parseMaybeAssign(!1,F),G.push(ue)}return G},he.checkUnreserved=function(p){var S=p.start,R=p.end,F=p.name;if(this.inGenerator&&F==="yield"&&this.raiseRecoverable(S,"Cannot use 'yield' as identifier inside a generator"),this.inAsync&&F==="await"&&this.raiseRecoverable(S,"Cannot use 'await' as identifier inside an async function"),this.keywords.test(F)&&this.raise(S,"Unexpected keyword '"+F+"'"),!(this.options.ecmaVersion<6&&this.input.slice(S,R).indexOf("\\")!==-1)){var G=this.strict?this.reservedWordsStrict:this.reservedWords;G.test(F)&&(!this.inAsync&&F==="await"&&this.raiseRecoverable(S,"Cannot use keyword 'await' outside an async function"),this.raiseRecoverable(S,"The keyword '"+F+"' is reserved"))}},he.parseIdent=function(p,S){var R=this.startNode();return this.type===b.name?R.name=this.value:this.type.keyword?(R.name=this.type.keyword,(R.name==="class"||R.name==="function")&&(this.lastTokEnd!==this.lastTokStart+1||this.input.charCodeAt(this.lastTokStart)!==46)&&this.context.pop()):this.unexpected(),this.next(!!p),this.finishNode(R,"Identifier"),p||(this.checkUnreserved(R),R.name==="await"&&!this.awaitIdentPos&&(this.awaitIdentPos=R.start)),R},he.parseYield=function(p){this.yieldPos||(this.yieldPos=this.start);var S=this.startNode();return this.next(),this.type===b.semi||this.canInsertSemicolon()||this.type!==b.star&&!this.type.startsExpr?(S.delegate=!1,S.argument=null):(S.delegate=this.eat(b.star),S.argument=this.parseMaybeAssign(p)),this.finishNode(S,"YieldExpression")},he.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var p=this.startNode();return this.next(),p.argument=this.parseMaybeUnary(null,!1),this.finishNode(p,"AwaitExpression")};var _e=Y.prototype;_e.raise=function(p,S){var R=ce(this.input,p);S+=" ("+R.line+":"+R.column+")";var F=new SyntaxError(S);throw F.pos=p,F.loc=R,F.raisedAt=this.pos,F},_e.raiseRecoverable=_e.raise,_e.curPosition=function(){if(this.options.locations)return new Z(this.curLine,this.pos-this.lineStart)};var Ge=Y.prototype,lt=function(S){this.flags=S,this.var=[],this.lexical=[],this.functions=[]};Ge.enterScope=function(p){this.scopeStack.push(new lt(p))},Ge.exitScope=function(){this.scopeStack.pop()},Ge.treatFunctionsAsVarInScope=function(p){return p.flags&Ve||!this.inModule&&p.flags&ve},Ge.declareName=function(p,S,R){var F=!1;if(S===Je){var G=this.currentScope();F=G.lexical.indexOf(p)>-1||G.functions.indexOf(p)>-1||G.var.indexOf(p)>-1,G.lexical.push(p),this.inModule&&G.flags&ve&&delete this.undefinedExports[p]}else if(S===V){var J=this.currentScope();J.lexical.push(p)}else if(S===st){var ue=this.currentScope();this.treatFunctionsAsVar?F=ue.lexical.indexOf(p)>-1:F=ue.lexical.indexOf(p)>-1||ue.var.indexOf(p)>-1,ue.functions.push(p)}else for(var Ce=this.scopeStack.length-1;Ce>=0;--Ce){var He=this.scopeStack[Ce];if(He.lexical.indexOf(p)>-1&&!(He.flags&ae&&He.lexical[0]===p)||!this.treatFunctionsAsVarInScope(He)&&He.functions.indexOf(p)>-1){F=!0;break}if(He.var.push(p),this.inModule&&He.flags&ve&&delete this.undefinedExports[p],He.flags&oe)break}F&&this.raiseRecoverable(R,"Identifier '"+p+"' has already been declared")},Ge.checkLocalExport=function(p){this.scopeStack[0].lexical.indexOf(p.name)===-1&&this.scopeStack[0].var.indexOf(p.name)===-1&&(this.undefinedExports[p.name]=p)},Ge.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]},Ge.currentVarScope=function(){for(var p=this.scopeStack.length-1;;p--){var S=this.scopeStack[p];if(S.flags&oe)return S}},Ge.currentThisScope=function(){for(var p=this.scopeStack.length-1;;p--){var S=this.scopeStack[p];if(S.flags&oe&&!(S.flags&se))return S}};var Ye=function(S,R,F){this.type="",this.start=R,this.end=0,S.options.locations&&(this.loc=new le(S,F)),S.options.directSourceFile&&(this.sourceFile=S.options.directSourceFile),S.options.ranges&&(this.range=[R,0])},Ht=Y.prototype;Ht.startNode=function(){return new Ye(this,this.start,this.startLoc)},Ht.startNodeAt=function(p,S){return new Ye(this,p,S)};function Zt(p,S,R,F){return p.type=S,p.end=R,this.options.locations&&(p.loc.end=F),this.options.ranges&&(p.range[1]=R),p}Ht.finishNode=function(p,S){return Zt.call(this,p,S,this.lastTokEnd,this.lastTokEndLoc)},Ht.finishNodeAt=function(p,S,R,F){return Zt.call(this,p,S,R,F)};var qt=function(S,R,F,G,J){this.token=S,this.isExpr=!!R,this.preserveSpace=!!F,this.override=G,this.generator=!!J},ht={b_stat:new qt("{",!1),b_expr:new qt("{",!0),b_tmpl:new qt("${",!1),p_stat:new qt("(",!1),p_expr:new qt("(",!0),q_tmpl:new qt("`",!0,!0,function(p){return p.tryReadTemplateToken()}),f_stat:new qt("function",!1),f_expr:new qt("function",!0),f_expr_gen:new qt("function",!0,!1,null,!0),f_gen:new qt("function",!1,!1,null,!0)},zs=Y.prototype;zs.initialContext=function(){return[ht.b_stat]},zs.braceIsBlock=function(p){var S=this.curContext();return S===ht.f_expr||S===ht.f_stat?!0:p===b.colon&&(S===ht.b_stat||S===ht.b_expr)?!S.isExpr:p===b._return||p===b.name&&this.exprAllowed?L.test(this.input.slice(this.lastTokEnd,this.start)):p===b._else||p===b.semi||p===b.eof||p===b.parenR||p===b.arrow?!0:p===b.braceL?S===ht.b_stat:p===b._var||p===b._const||p===b.name?!1:!this.exprAllowed},zs.inGeneratorContext=function(){for(var p=this.context.length-1;p>=1;p--){var S=this.context[p];if(S.token==="function")return S.generator}return!1},zs.updateContext=function(p){var S,R=this.type;R.keyword&&p===b.dot?this.exprAllowed=!1:(S=R.updateContext)?S.call(this,p):this.exprAllowed=R.beforeExpr},b.parenR.updateContext=b.braceR.updateContext=function(){if(this.context.length===1){this.exprAllowed=!0;return}var p=this.context.pop();p===ht.b_stat&&this.curContext().token==="function"&&(p=this.context.pop()),this.exprAllowed=!p.isExpr},b.braceL.updateContext=function(p){this.context.push(this.braceIsBlock(p)?ht.b_stat:ht.b_expr),this.exprAllowed=!0},b.dollarBraceL.updateContext=function(){this.context.push(ht.b_tmpl),this.exprAllowed=!0},b.parenL.updateContext=function(p){var S=p===b._if||p===b._for||p===b._with||p===b._while;this.context.push(S?ht.p_stat:ht.p_expr),this.exprAllowed=!0},b.incDec.updateContext=function(){},b._function.updateContext=b._class.updateContext=function(p){p.beforeExpr&&p!==b.semi&&p!==b._else&&!(p===b._return&&L.test(this.input.slice(this.lastTokEnd,this.start)))&&!((p===b.colon||p===b.braceL)&&this.curContext()===ht.b_stat)?this.context.push(ht.f_expr):this.context.push(ht.f_stat),this.exprAllowed=!1},b.backQuote.updateContext=function(){this.curContext()===ht.q_tmpl?this.context.pop():this.context.push(ht.q_tmpl),this.exprAllowed=!1},b.star.updateContext=function(p){if(p===b._function){var S=this.context.length-1;this.context[S]===ht.f_expr?this.context[S]=ht.f_expr_gen:this.context[S]=ht.f_gen}this.exprAllowed=!0},b.name.updateContext=function(p){var S=!1;this.options.ecmaVersion>=6&&p!==b.dot&&(this.value==="of"&&!this.exprAllowed||this.value==="yield"&&this.inGeneratorContext())&&(S=!0),this.exprAllowed=S};var Us="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",Kr=Us+" Extended_Pictographic",yu=Kr,vu={9:Us,10:Kr,11:yu},co="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",U="Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",q=U+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",re=q+" Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",ee={9:U,10:q,11:re},fe={};function We(p){var S=fe[p]={binary:ne(vu[p]+" "+co),nonBinary:{General_Category:ne(co),Script:ne(ee[p])}};S.nonBinary.Script_Extensions=S.nonBinary.Script,S.nonBinary.gc=S.nonBinary.General_Category,S.nonBinary.sc=S.nonBinary.Script,S.nonBinary.scx=S.nonBinary.Script_Extensions}We(9),We(10),We(11);var ge=Y.prototype,Ke=function(S){this.parser=S,this.validFlags="gim"+(S.options.ecmaVersion>=6?"uy":"")+(S.options.ecmaVersion>=9?"s":""),this.unicodeProperties=fe[S.options.ecmaVersion>=11?11:S.options.ecmaVersion],this.source="",this.flags="",this.start=0,this.switchU=!1,this.switchN=!1,this.pos=0,this.lastIntValue=0,this.lastStringValue="",this.lastAssertionIsQuantifiable=!1,this.numCapturingParens=0,this.maxBackReference=0,this.groupNames=[],this.backReferenceNames=[]};Ke.prototype.reset=function(S,R,F){var G=F.indexOf("u")!==-1;this.start=S|0,this.source=R+"",this.flags=F,this.switchU=G&&this.parser.options.ecmaVersion>=6,this.switchN=G&&this.parser.options.ecmaVersion>=9},Ke.prototype.raise=function(S){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+S)},Ke.prototype.at=function(S){var R=this.source,F=R.length;if(S>=F)return-1;var G=R.charCodeAt(S);if(!this.switchU||G<=55295||G>=57344||S+1>=F)return G;var J=R.charCodeAt(S+1);return J>=56320&&J<=57343?(G<<10)+J-56613888:G},Ke.prototype.nextIndex=function(S){var R=this.source,F=R.length;if(S>=F)return F;var G=R.charCodeAt(S),J;return!this.switchU||G<=55295||G>=57344||S+1>=F||(J=R.charCodeAt(S+1))<56320||J>57343?S+1:S+2},Ke.prototype.current=function(){return this.at(this.pos)},Ke.prototype.lookahead=function(){return this.at(this.nextIndex(this.pos))},Ke.prototype.advance=function(){this.pos=this.nextIndex(this.pos)},Ke.prototype.eat=function(S){return this.current()===S?(this.advance(),!0):!1};function Xe(p){return p<=65535?String.fromCharCode(p):(p-=65536,String.fromCharCode((p>>10)+55296,(p&1023)+56320))}ge.validateRegExpFlags=function(p){for(var S=p.validFlags,R=p.flags,F=0;F<R.length;F++){var G=R.charAt(F);S.indexOf(G)===-1&&this.raise(p.start,"Invalid regular expression flag"),R.indexOf(G,F+1)>-1&&this.raise(p.start,"Duplicate regular expression flag")}},ge.validateRegExpPattern=function(p){this.regexp_pattern(p),!p.switchN&&this.options.ecmaVersion>=9&&p.groupNames.length>0&&(p.switchN=!0,this.regexp_pattern(p))},ge.regexp_pattern=function(p){p.pos=0,p.lastIntValue=0,p.lastStringValue="",p.lastAssertionIsQuantifiable=!1,p.numCapturingParens=0,p.maxBackReference=0,p.groupNames.length=0,p.backReferenceNames.length=0,this.regexp_disjunction(p),p.pos!==p.source.length&&(p.eat(41)&&p.raise("Unmatched ')'"),(p.eat(93)||p.eat(125))&&p.raise("Lone quantifier brackets")),p.maxBackReference>p.numCapturingParens&&p.raise("Invalid escape");for(var S=0,R=p.backReferenceNames;S<R.length;S+=1){var F=R[S];p.groupNames.indexOf(F)===-1&&p.raise("Invalid named capture referenced")}},ge.regexp_disjunction=function(p){for(this.regexp_alternative(p);p.eat(124);)this.regexp_alternative(p);this.regexp_eatQuantifier(p,!0)&&p.raise("Nothing to repeat"),p.eat(123)&&p.raise("Lone quantifier brackets")},ge.regexp_alternative=function(p){for(;p.pos<p.source.length&&this.regexp_eatTerm(p););},ge.regexp_eatTerm=function(p){return this.regexp_eatAssertion(p)?(p.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(p)&&p.switchU&&p.raise("Invalid quantifier"),!0):(p.switchU?this.regexp_eatAtom(p):this.regexp_eatExtendedAtom(p))?(this.regexp_eatQuantifier(p),!0):!1},ge.regexp_eatAssertion=function(p){var S=p.pos;if(p.lastAssertionIsQuantifiable=!1,p.eat(94)||p.eat(36))return!0;if(p.eat(92)){if(p.eat(66)||p.eat(98))return!0;p.pos=S}if(p.eat(40)&&p.eat(63)){var R=!1;if(this.options.ecmaVersion>=9&&(R=p.eat(60)),p.eat(61)||p.eat(33))return this.regexp_disjunction(p),p.eat(41)||p.raise("Unterminated group"),p.lastAssertionIsQuantifiable=!R,!0}return p.pos=S,!1},ge.regexp_eatQuantifier=function(p,S){return S===void 0&&(S=!1),this.regexp_eatQuantifierPrefix(p,S)?(p.eat(63),!0):!1},ge.regexp_eatQuantifierPrefix=function(p,S){return p.eat(42)||p.eat(43)||p.eat(63)||this.regexp_eatBracedQuantifier(p,S)},ge.regexp_eatBracedQuantifier=function(p,S){var R=p.pos;if(p.eat(123)){var F=0,G=-1;if(this.regexp_eatDecimalDigits(p)&&(F=p.lastIntValue,p.eat(44)&&this.regexp_eatDecimalDigits(p)&&(G=p.lastIntValue),p.eat(125)))return G!==-1&&G<F&&!S&&p.raise("numbers out of order in {} quantifier"),!0;p.switchU&&!S&&p.raise("Incomplete quantifier"),p.pos=R}return!1},ge.regexp_eatAtom=function(p){return this.regexp_eatPatternCharacters(p)||p.eat(46)||this.regexp_eatReverseSolidusAtomEscape(p)||this.regexp_eatCharacterClass(p)||this.regexp_eatUncapturingGroup(p)||this.regexp_eatCapturingGroup(p)},ge.regexp_eatReverseSolidusAtomEscape=function(p){var S=p.pos;if(p.eat(92)){if(this.regexp_eatAtomEscape(p))return!0;p.pos=S}return!1},ge.regexp_eatUncapturingGroup=function(p){var S=p.pos;if(p.eat(40)){if(p.eat(63)&&p.eat(58)){if(this.regexp_disjunction(p),p.eat(41))return!0;p.raise("Unterminated group")}p.pos=S}return!1},ge.regexp_eatCapturingGroup=function(p){if(p.eat(40)){if(this.options.ecmaVersion>=9?this.regexp_groupSpecifier(p):p.current()===63&&p.raise("Invalid group"),this.regexp_disjunction(p),p.eat(41))return p.numCapturingParens+=1,!0;p.raise("Unterminated group")}return!1},ge.regexp_eatExtendedAtom=function(p){return p.eat(46)||this.regexp_eatReverseSolidusAtomEscape(p)||this.regexp_eatCharacterClass(p)||this.regexp_eatUncapturingGroup(p)||this.regexp_eatCapturingGroup(p)||this.regexp_eatInvalidBracedQuantifier(p)||this.regexp_eatExtendedPatternCharacter(p)},ge.regexp_eatInvalidBracedQuantifier=function(p){return this.regexp_eatBracedQuantifier(p,!0)&&p.raise("Nothing to repeat"),!1},ge.regexp_eatSyntaxCharacter=function(p){var S=p.current();return at(S)?(p.lastIntValue=S,p.advance(),!0):!1};function at(p){return p===36||p>=40&&p<=43||p===46||p===63||p>=91&&p<=94||p>=123&&p<=125}ge.regexp_eatPatternCharacters=function(p){for(var S=p.pos,R=0;(R=p.current())!==-1&&!at(R);)p.advance();return p.pos!==S},ge.regexp_eatExtendedPatternCharacter=function(p){var S=p.current();return S!==-1&&S!==36&&!(S>=40&&S<=43)&&S!==46&&S!==63&&S!==91&&S!==94&&S!==124?(p.advance(),!0):!1},ge.regexp_groupSpecifier=function(p){if(p.eat(63)){if(this.regexp_eatGroupName(p)){p.groupNames.indexOf(p.lastStringValue)!==-1&&p.raise("Duplicate capture group name"),p.groupNames.push(p.lastStringValue);return}p.raise("Invalid group")}},ge.regexp_eatGroupName=function(p){if(p.lastStringValue="",p.eat(60)){if(this.regexp_eatRegExpIdentifierName(p)&&p.eat(62))return!0;p.raise("Invalid capture group name")}return!1},ge.regexp_eatRegExpIdentifierName=function(p){if(p.lastStringValue="",this.regexp_eatRegExpIdentifierStart(p)){for(p.lastStringValue+=Xe(p.lastIntValue);this.regexp_eatRegExpIdentifierPart(p);)p.lastStringValue+=Xe(p.lastIntValue);return!0}return!1},ge.regexp_eatRegExpIdentifierStart=function(p){var S=p.pos,R=p.current();return p.advance(),R===92&&this.regexp_eatRegExpUnicodeEscapeSequence(p)&&(R=p.lastIntValue),et(R)?(p.lastIntValue=R,!0):(p.pos=S,!1)};function et(p){return w(p,!0)||p===36||p===95}ge.regexp_eatRegExpIdentifierPart=function(p){var S=p.pos,R=p.current();return p.advance(),R===92&&this.regexp_eatRegExpUnicodeEscapeSequence(p)&&(R=p.lastIntValue),it(R)?(p.lastIntValue=R,!0):(p.pos=S,!1)};function it(p){return E(p,!0)||p===36||p===95||p===8204||p===8205}ge.regexp_eatAtomEscape=function(p){return this.regexp_eatBackReference(p)||this.regexp_eatCharacterClassEscape(p)||this.regexp_eatCharacterEscape(p)||p.switchN&&this.regexp_eatKGroupName(p)?!0:(p.switchU&&(p.current()===99&&p.raise("Invalid unicode escape"),p.raise("Invalid escape")),!1)},ge.regexp_eatBackReference=function(p){var S=p.pos;if(this.regexp_eatDecimalEscape(p)){var R=p.lastIntValue;if(p.switchU)return R>p.maxBackReference&&(p.maxBackReference=R),!0;if(R<=p.numCapturingParens)return!0;p.pos=S}return!1},ge.regexp_eatKGroupName=function(p){if(p.eat(107)){if(this.regexp_eatGroupName(p))return p.backReferenceNames.push(p.lastStringValue),!0;p.raise("Invalid named reference")}return!1},ge.regexp_eatCharacterEscape=function(p){return this.regexp_eatControlEscape(p)||this.regexp_eatCControlLetter(p)||this.regexp_eatZero(p)||this.regexp_eatHexEscapeSequence(p)||this.regexp_eatRegExpUnicodeEscapeSequence(p)||!p.switchU&&this.regexp_eatLegacyOctalEscapeSequence(p)||this.regexp_eatIdentityEscape(p)},ge.regexp_eatCControlLetter=function(p){var S=p.pos;if(p.eat(99)){if(this.regexp_eatControlLetter(p))return!0;p.pos=S}return!1},ge.regexp_eatZero=function(p){return p.current()===48&&!tt(p.lookahead())?(p.lastIntValue=0,p.advance(),!0):!1},ge.regexp_eatControlEscape=function(p){var S=p.current();return S===116?(p.lastIntValue=9,p.advance(),!0):S===110?(p.lastIntValue=10,p.advance(),!0):S===118?(p.lastIntValue=11,p.advance(),!0):S===102?(p.lastIntValue=12,p.advance(),!0):S===114?(p.lastIntValue=13,p.advance(),!0):!1},ge.regexp_eatControlLetter=function(p){var S=p.current();return mt(S)?(p.lastIntValue=S%32,p.advance(),!0):!1};function mt(p){return p>=65&&p<=90||p>=97&&p<=122}ge.regexp_eatRegExpUnicodeEscapeSequence=function(p){var S=p.pos;if(p.eat(117)){if(this.regexp_eatFixedHexDigits(p,4)){var R=p.lastIntValue;if(p.switchU&&R>=55296&&R<=56319){var F=p.pos;if(p.eat(92)&&p.eat(117)&&this.regexp_eatFixedHexDigits(p,4)){var G=p.lastIntValue;if(G>=56320&&G<=57343)return p.lastIntValue=(R-55296)*1024+(G-56320)+65536,!0}p.pos=F,p.lastIntValue=R}return!0}if(p.switchU&&p.eat(123)&&this.regexp_eatHexDigits(p)&&p.eat(125)&&Hn(p.lastIntValue))return!0;p.switchU&&p.raise("Invalid unicode escape"),p.pos=S}return!1};function Hn(p){return p>=0&&p<=1114111}ge.regexp_eatIdentityEscape=function(p){if(p.switchU)return this.regexp_eatSyntaxCharacter(p)?!0:p.eat(47)?(p.lastIntValue=47,!0):!1;var S=p.current();return S!==99&&(!p.switchN||S!==107)?(p.lastIntValue=S,p.advance(),!0):!1},ge.regexp_eatDecimalEscape=function(p){p.lastIntValue=0;var S=p.current();if(S>=49&&S<=57){do p.lastIntValue=10*p.lastIntValue+(S-48),p.advance();while((S=p.current())>=48&&S<=57);return!0}return!1},ge.regexp_eatCharacterClassEscape=function(p){var S=p.current();if(hi(S))return p.lastIntValue=-1,p.advance(),!0;if(p.switchU&&this.options.ecmaVersion>=9&&(S===80||S===112)){if(p.lastIntValue=-1,p.advance(),p.eat(123)&&this.regexp_eatUnicodePropertyValueExpression(p)&&p.eat(125))return!0;p.raise("Invalid property name")}return!1};function hi(p){return p===100||p===68||p===115||p===83||p===119||p===87}ge.regexp_eatUnicodePropertyValueExpression=function(p){var S=p.pos;if(this.regexp_eatUnicodePropertyName(p)&&p.eat(61)){var R=p.lastStringValue;if(this.regexp_eatUnicodePropertyValue(p)){var F=p.lastStringValue;return this.regexp_validateUnicodePropertyNameAndValue(p,R,F),!0}}if(p.pos=S,this.regexp_eatLoneUnicodePropertyNameOrValue(p)){var G=p.lastStringValue;return this.regexp_validateUnicodePropertyNameOrValue(p,G),!0}return!1},ge.regexp_validateUnicodePropertyNameAndValue=function(p,S,R){j(p.unicodeProperties.nonBinary,S)||p.raise("Invalid property name"),p.unicodeProperties.nonBinary[S].test(R)||p.raise("Invalid property value")},ge.regexp_validateUnicodePropertyNameOrValue=function(p,S){p.unicodeProperties.binary.test(S)||p.raise("Invalid property name")},ge.regexp_eatUnicodePropertyName=function(p){var S=0;for(p.lastStringValue="";Wn(S=p.current());)p.lastStringValue+=Xe(S),p.advance();return p.lastStringValue!==""};function Wn(p){return mt(p)||p===95}ge.regexp_eatUnicodePropertyValue=function(p){var S=0;for(p.lastStringValue="";hn(S=p.current());)p.lastStringValue+=Xe(S),p.advance();return p.lastStringValue!==""};function hn(p){return Wn(p)||tt(p)}ge.regexp_eatLoneUnicodePropertyNameOrValue=function(p){return this.regexp_eatUnicodePropertyValue(p)},ge.regexp_eatCharacterClass=function(p){if(p.eat(91)){if(p.eat(94),this.regexp_classRanges(p),p.eat(93))return!0;p.raise("Unterminated character class")}return!1},ge.regexp_classRanges=function(p){for(;this.regexp_eatClassAtom(p);){var S=p.lastIntValue;if(p.eat(45)&&this.regexp_eatClassAtom(p)){var R=p.lastIntValue;p.switchU&&(S===-1||R===-1)&&p.raise("Invalid character class"),S!==-1&&R!==-1&&S>R&&p.raise("Range out of order in character class")}}},ge.regexp_eatClassAtom=function(p){var S=p.pos;if(p.eat(92)){if(this.regexp_eatClassEscape(p))return!0;if(p.switchU){var R=p.current();(R===99||Qt(R))&&p.raise("Invalid class escape"),p.raise("Invalid escape")}p.pos=S}var F=p.current();return F!==93?(p.lastIntValue=F,p.advance(),!0):!1},ge.regexp_eatClassEscape=function(p){var S=p.pos;if(p.eat(98))return p.lastIntValue=8,!0;if(p.switchU&&p.eat(45))return p.lastIntValue=45,!0;if(!p.switchU&&p.eat(99)){if(this.regexp_eatClassControlLetter(p))return!0;p.pos=S}return this.regexp_eatCharacterClassEscape(p)||this.regexp_eatCharacterEscape(p)},ge.regexp_eatClassControlLetter=function(p){var S=p.current();return tt(S)||S===95?(p.lastIntValue=S%32,p.advance(),!0):!1},ge.regexp_eatHexEscapeSequence=function(p){var S=p.pos;if(p.eat(120)){if(this.regexp_eatFixedHexDigits(p,2))return!0;p.switchU&&p.raise("Invalid escape"),p.pos=S}return!1},ge.regexp_eatDecimalDigits=function(p){var S=p.pos,R=0;for(p.lastIntValue=0;tt(R=p.current());)p.lastIntValue=10*p.lastIntValue+(R-48),p.advance();return p.pos!==S};function tt(p){return p>=48&&p<=57}ge.regexp_eatHexDigits=function(p){var S=p.pos,R=0;for(p.lastIntValue=0;Kn(R=p.current());)p.lastIntValue=16*p.lastIntValue+vt(R),p.advance();return p.pos!==S};function Kn(p){return p>=48&&p<=57||p>=65&&p<=70||p>=97&&p<=102}function vt(p){return p>=65&&p<=70?10+(p-65):p>=97&&p<=102?10+(p-97):p-48}ge.regexp_eatLegacyOctalEscapeSequence=function(p){if(this.regexp_eatOctalDigit(p)){var S=p.lastIntValue;if(this.regexp_eatOctalDigit(p)){var R=p.lastIntValue;S<=3&&this.regexp_eatOctalDigit(p)?p.lastIntValue=S*64+R*8+p.lastIntValue:p.lastIntValue=S*8+R}else p.lastIntValue=S;return!0}return!1},ge.regexp_eatOctalDigit=function(p){var S=p.current();return Qt(S)?(p.lastIntValue=S-48,p.advance(),!0):(p.lastIntValue=0,!1)};function Qt(p){return p>=48&&p<=55}ge.regexp_eatFixedHexDigits=function(p,S){var R=p.pos;p.lastIntValue=0;for(var F=0;F<S;++F){var G=p.current();if(!Kn(G))return p.pos=R,!1;p.lastIntValue=16*p.lastIntValue+vt(G),p.advance()}return!0};var en=function(S){this.type=S.type,this.value=S.value,this.start=S.start,this.end=S.end,S.options.locations&&(this.loc=new le(S,S.startLoc,S.endLoc)),S.options.ranges&&(this.range=[S.start,S.end])},$e=Y.prototype;$e.next=function(p){!p&&this.type.keyword&&this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+this.type.keyword),this.options.onToken&&this.options.onToken(new en(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken()},$e.getToken=function(){return this.next(),new en(this)},typeof Symbol<"u"&&($e[Symbol.iterator]=function(){var p=this;return{next:function(){var S=p.getToken();return{done:S.type===b.eof,value:S}}}}),$e.curContext=function(){return this.context[this.context.length-1]},$e.nextToken=function(){var p=this.curContext();if((!p||!p.preserveSpace)&&this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length)return this.finishToken(b.eof);if(p.override)return p.override(this);this.readToken(this.fullCharCodeAtPos())},$e.readToken=function(p){return w(p,this.options.ecmaVersion>=6)||p===92?this.readWord():this.getTokenFromCode(p)},$e.fullCharCodeAtPos=function(){var p=this.input.charCodeAt(this.pos);if(p<=55295||p>=57344)return p;var S=this.input.charCodeAt(this.pos+1);return(p<<10)+S-56613888},$e.skipBlockComment=function(){var p=this.options.onComment&&this.curPosition(),S=this.pos,R=this.input.indexOf("*/",this.pos+=2);if(R===-1&&this.raise(this.pos-2,"Unterminated comment"),this.pos=R+2,this.options.locations){P.lastIndex=S;for(var F;(F=P.exec(this.input))&&F.index<this.pos;)++this.curLine,this.lineStart=F.index+F[0].length}this.options.onComment&&this.options.onComment(!0,this.input.slice(S+2,R),S,this.pos,p,this.curPosition())},$e.skipLineComment=function(p){for(var S=this.pos,R=this.options.onComment&&this.curPosition(),F=this.input.charCodeAt(this.pos+=p);this.pos<this.input.length&&!X(F);)F=this.input.charCodeAt(++this.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(S+p,this.pos),S,this.pos,R,this.curPosition())},$e.skipSpace=function(){e:for(;this.pos<this.input.length;){var p=this.input.charCodeAt(this.pos);switch(p){case 32:case 160:++this.pos;break;case 13:this.input.charCodeAt(this.pos+1)===10&&++this.pos;case 10:case 8232:case 8233:++this.pos,this.options.locations&&(++this.curLine,this.lineStart=this.pos);break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break e}break;default:if(p>8&&p<14||p>=5760&&D.test(String.fromCharCode(p)))++this.pos;else break e}}},$e.finishToken=function(p,S){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var R=this.type;this.type=p,this.value=S,this.updateContext(R)},$e.readToken_dot=function(){var p=this.input.charCodeAt(this.pos+1);if(p>=48&&p<=57)return this.readNumber(!0);var S=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&p===46&&S===46?(this.pos+=3,this.finishToken(b.ellipsis)):(++this.pos,this.finishToken(b.dot))},$e.readToken_slash=function(){var p=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):p===61?this.finishOp(b.assign,2):this.finishOp(b.slash,1)},$e.readToken_mult_modulo_exp=function(p){var S=this.input.charCodeAt(this.pos+1),R=1,F=p===42?b.star:b.modulo;return this.options.ecmaVersion>=7&&p===42&&S===42&&(++R,F=b.starstar,S=this.input.charCodeAt(this.pos+2)),S===61?this.finishOp(b.assign,R+1):this.finishOp(F,R)},$e.readToken_pipe_amp=function(p){var S=this.input.charCodeAt(this.pos+1);return S===p?this.finishOp(p===124?b.logicalOR:b.logicalAND,2):S===61?this.finishOp(b.assign,2):this.finishOp(p===124?b.bitwiseOR:b.bitwiseAND,1)},$e.readToken_caret=function(){var p=this.input.charCodeAt(this.pos+1);return p===61?this.finishOp(b.assign,2):this.finishOp(b.bitwiseXOR,1)},$e.readToken_plus_min=function(p){var S=this.input.charCodeAt(this.pos+1);return S===p?S===45&&!this.inModule&&this.input.charCodeAt(this.pos+2)===62&&(this.lastTokEnd===0||L.test(this.input.slice(this.lastTokEnd,this.pos)))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(b.incDec,2):S===61?this.finishOp(b.assign,2):this.finishOp(b.plusMin,1)},$e.readToken_lt_gt=function(p){var S=this.input.charCodeAt(this.pos+1),R=1;return S===p?(R=p===62&&this.input.charCodeAt(this.pos+2)===62?3:2,this.input.charCodeAt(this.pos+R)===61?this.finishOp(b.assign,R+1):this.finishOp(b.bitShift,R)):S===33&&p===60&&!this.inModule&&this.input.charCodeAt(this.pos+2)===45&&this.input.charCodeAt(this.pos+3)===45?(this.skipLineComment(4),this.skipSpace(),this.nextToken()):(S===61&&(R=2),this.finishOp(b.relational,R))},$e.readToken_eq_excl=function(p){var S=this.input.charCodeAt(this.pos+1);return S===61?this.finishOp(b.equality,this.input.charCodeAt(this.pos+2)===61?3:2):p===61&&S===62&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(b.arrow)):this.finishOp(p===61?b.eq:b.prefix,1)},$e.getTokenFromCode=function(p){switch(p){case 46:return this.readToken_dot();case 40:return++this.pos,this.finishToken(b.parenL);case 41:return++this.pos,this.finishToken(b.parenR);case 59:return++this.pos,this.finishToken(b.semi);case 44:return++this.pos,this.finishToken(b.comma);case 91:return++this.pos,this.finishToken(b.bracketL);case 93:return++this.pos,this.finishToken(b.bracketR);case 123:return++this.pos,this.finishToken(b.braceL);case 125:return++this.pos,this.finishToken(b.braceR);case 58:return++this.pos,this.finishToken(b.colon);case 63:return++this.pos,this.finishToken(b.question);case 96:if(this.options.ecmaVersion<6)break;return++this.pos,this.finishToken(b.backQuote);case 48:var S=this.input.charCodeAt(this.pos+1);if(S===120||S===88)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(S===111||S===79)return this.readRadixNumber(8);if(S===98||S===66)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(p);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(p);case 124:case 38:return this.readToken_pipe_amp(p);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(p);case 60:case 62:return this.readToken_lt_gt(p);case 61:case 33:return this.readToken_eq_excl(p);case 126:return this.finishOp(b.prefix,1)}this.raise(this.pos,"Unexpected character '"+Gi(p)+"'")},$e.finishOp=function(p,S){var R=this.input.slice(this.pos,this.pos+S);return this.pos+=S,this.finishToken(p,R)},$e.readRegexp=function(){for(var p,S,R=this.pos;;){this.pos>=this.input.length&&this.raise(R,"Unterminated regular expression");var F=this.input.charAt(this.pos);if(L.test(F)&&this.raise(R,"Unterminated regular expression"),p)p=!1;else{if(F==="[")S=!0;else if(F==="]"&&S)S=!1;else if(F==="/"&&!S)break;p=F==="\\"}++this.pos}var G=this.input.slice(R,this.pos);++this.pos;var J=this.pos,ue=this.readWord1();this.containsEsc&&this.unexpected(J);var Ce=this.regexpState||(this.regexpState=new Ke(this));Ce.reset(R,G,ue),this.validateRegExpFlags(Ce),this.validateRegExpPattern(Ce);var He=null;try{He=new RegExp(G,ue)}catch{}return this.finishToken(b.regexp,{pattern:G,flags:ue,value:He})},$e.readInt=function(p,S){for(var R=this.pos,F=0,G=0,J=S??1/0;G<J;++G){var ue=this.input.charCodeAt(this.pos),Ce=void 0;if(ue>=97?Ce=ue-97+10:ue>=65?Ce=ue-65+10:ue>=48&&ue<=57?Ce=ue-48:Ce=1/0,Ce>=p)break;++this.pos,F=F*p+Ce}return this.pos===R||S!=null&&this.pos-R!==S?null:F},$e.readRadixNumber=function(p){var S=this.pos;this.pos+=2;var R=this.readInt(p);return R==null&&this.raise(this.start+2,"Expected number in radix "+p),this.options.ecmaVersion>=11&&this.input.charCodeAt(this.pos)===110?(R=typeof BigInt<"u"?BigInt(this.input.slice(S,this.pos)):null,++this.pos):w(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(b.num,R)},$e.readNumber=function(p){var S=this.pos;!p&&this.readInt(10)===null&&this.raise(S,"Invalid number");var R=this.pos-S>=2&&this.input.charCodeAt(S)===48;R&&this.strict&&this.raise(S,"Invalid number");var F=this.input.charCodeAt(this.pos);if(!R&&!p&&this.options.ecmaVersion>=11&&F===110){var G=this.input.slice(S,this.pos),J=typeof BigInt<"u"?BigInt(G):null;return++this.pos,w(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(b.num,J)}R&&/[89]/.test(this.input.slice(S,this.pos))&&(R=!1),F===46&&!R&&(++this.pos,this.readInt(10),F=this.input.charCodeAt(this.pos)),(F===69||F===101)&&!R&&(F=this.input.charCodeAt(++this.pos),(F===43||F===45)&&++this.pos,this.readInt(10)===null&&this.raise(S,"Invalid number")),w(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var ue=this.input.slice(S,this.pos),Ce=R?parseInt(ue,8):parseFloat(ue);return this.finishToken(b.num,Ce)},$e.readCodePoint=function(){var p=this.input.charCodeAt(this.pos),S;if(p===123){this.options.ecmaVersion<6&&this.unexpected();var R=++this.pos;S=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,S>1114111&&this.invalidStringToken(R,"Code point out of bounds")}else S=this.readHexChar(4);return S};function Gi(p){return p<=65535?String.fromCharCode(p):(p-=65536,String.fromCharCode((p>>10)+55296,(p&1023)+56320))}$e.readString=function(p){for(var S="",R=++this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");var F=this.input.charCodeAt(this.pos);if(F===p)break;F===92?(S+=this.input.slice(R,this.pos),S+=this.readEscapedChar(!1),R=this.pos):(X(F,this.options.ecmaVersion>=10)&&this.raise(this.start,"Unterminated string constant"),++this.pos)}return S+=this.input.slice(R,this.pos++),this.finishToken(b.string,S)};var Nt={};$e.tryReadTemplateToken=function(){this.inTemplateElement=!0;try{this.readTmplToken()}catch(p){if(p===Nt)this.readInvalidTemplateToken();else throw p}this.inTemplateElement=!1},$e.invalidStringToken=function(p,S){if(this.inTemplateElement&&this.options.ecmaVersion>=9)throw Nt;this.raise(p,S)},$e.readTmplToken=function(){for(var p="",S=this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated template");var R=this.input.charCodeAt(this.pos);if(R===96||R===36&&this.input.charCodeAt(this.pos+1)===123)return this.pos===this.start&&(this.type===b.template||this.type===b.invalidTemplate)?R===36?(this.pos+=2,this.finishToken(b.dollarBraceL)):(++this.pos,this.finishToken(b.backQuote)):(p+=this.input.slice(S,this.pos),this.finishToken(b.template,p));if(R===92)p+=this.input.slice(S,this.pos),p+=this.readEscapedChar(!0),S=this.pos;else if(X(R)){switch(p+=this.input.slice(S,this.pos),++this.pos,R){case 13:this.input.charCodeAt(this.pos)===10&&++this.pos;case 10:p+=`
`;break;default:p+=String.fromCharCode(R);break}this.options.locations&&(++this.curLine,this.lineStart=this.pos),S=this.pos}else++this.pos}},$e.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++)switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if(this.input[this.pos+1]!=="{")break;case"`":return this.finishToken(b.invalidTemplate,this.input.slice(this.start,this.pos))}this.raise(this.start,"Unterminated template")},$e.readEscapedChar=function(p){var S=this.input.charCodeAt(++this.pos);switch(++this.pos,S){case 110:return`
`;case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return Gi(this.readCodePoint());case 116:return"	";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:this.input.charCodeAt(this.pos)===10&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";case 56:case 57:if(p){var R=this.pos-1;return this.invalidStringToken(R,"Invalid escape sequence in template string"),null}default:if(S>=48&&S<=55){var F=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],G=parseInt(F,8);return G>255&&(F=F.slice(0,-1),G=parseInt(F,8)),this.pos+=F.length-1,S=this.input.charCodeAt(this.pos),(F!=="0"||S===56||S===57)&&(this.strict||p)&&this.invalidStringToken(this.pos-1-F.length,p?"Octal literal in template string":"Octal literal in strict mode"),String.fromCharCode(G)}return X(S)?"":String.fromCharCode(S)}},$e.readHexChar=function(p){var S=this.pos,R=this.readInt(16,p);return R===null&&this.invalidStringToken(S,"Bad character escape sequence"),R},$e.readWord1=function(){this.containsEsc=!1;for(var p="",S=!0,R=this.pos,F=this.options.ecmaVersion>=6;this.pos<this.input.length;){var G=this.fullCharCodeAtPos();if(E(G,F))this.pos+=G<=65535?1:2;else if(G===92){this.containsEsc=!0,p+=this.input.slice(R,this.pos);var J=this.pos;this.input.charCodeAt(++this.pos)!==117&&this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.pos;var ue=this.readCodePoint();(S?w:E)(ue,F)||this.invalidStringToken(J,"Invalid Unicode escape"),p+=Gi(ue),R=this.pos}else break;S=!1}return p+this.input.slice(R,this.pos)},$e.readWord=function(){var p=this.readWord1(),S=b.name;return this.keywords.test(p)&&(S=C[p]),this.finishToken(S,p)};var fi="7.1.0";Y.acorn={Parser:Y,version:fi,defaultOptions:de,Position:Z,SourceLocation:le,getLineInfo:ce,Node:Ye,TokenType:_,tokTypes:b,keywordTypes:C,TokContext:qt,tokContexts:ht,isIdentifierChar:E,isIdentifierStart:w,Token:en,isNewLine:X,lineBreak:L,lineBreakG:P,nonASCIIwhitespace:D};function Xr(p,S){return Y.parse(p,S)}function fn(p,S,R){return Y.parseExpressionAt(p,S,R)}function mm(p,S){return Y.tokenizer(p,S)}r.Node=Ye,r.Parser=Y,r.Position=Z,r.SourceLocation=le,r.TokContext=qt,r.Token=en,r.TokenType=_,r.defaultOptions=de,r.getLineInfo=ce,r.isIdentifierChar=E,r.isIdentifierStart=w,r.isNewLine=X,r.keywordTypes=C,r.lineBreak=L,r.lineBreakG=P,r.nonASCIIwhitespace=D,r.parse=Xr,r.parseExpressionAt=fn,r.tokContexts=ht,r.tokTypes=b,r.tokenizer=mm,r.version=fi,Object.defineProperty(r,"__esModule",{value:!0})})},{}],2:[function(n,i,s){},{}],3:[function(n,i,s){function r(h,o={}){let{contextName:u="gl",throwGetError:m,useTrackablePrimitives:g,readPixelsFile:y,recording:v=[],variables:w={},onReadPixels:E,onUnrecognizedArgumentLookup:_}=o,M=new Proxy(h,{get:L}),A=[],I={},C=0,T="",b;return M;function L(ce,de){switch(de){case"addComment":return j;case"checkThrowError":return K;case"getReadPixelsVariableName":return b;case"insertVariable":return D;case"reset":return X;case"setIndent":return H;case"toString":return P;case"getContextVariableName":return le}return typeof h[de]=="function"?function(){switch(de){case"getError":return m?v.push(`${T}if (${u}.getError() !== ${u}.NONE) throw new Error('error');`):v.push(`${T}${u}.getError();`),h.getError();case"getExtension":{let oe=`${u}Variables${A.length}`;v.push(`${T}const ${oe} = ${u}.getExtension('${arguments[0]}');`);let Ie=h.getExtension(arguments[0]);if(Ie&&typeof Ie=="object"){let ie=a(Ie,{getEntity:z,useTrackablePrimitives:g,recording:v,contextName:oe,contextVariables:A,variables:w,indent:T,onUnrecognizedArgumentLookup:_});return A.push(ie),ie}else A.push(null);return Ie}case"readPixels":let Me=A.indexOf(arguments[6]),ve;if(Me===-1){let oe=Z(arguments[6]);oe?(ve=oe,v.push(`${T}${oe}`)):(ve=`${u}Variable${A.length}`,A.push(arguments[6]),v.push(`${T}const ${ve} = new ${arguments[6].constructor.name}(${arguments[6].length});`))}else ve=`${u}Variable${Me}`;b=ve;let Ve=[arguments[0],arguments[1],arguments[2],arguments[3],z(arguments[4]),z(arguments[5]),ve];return v.push(`${T}${u}.readPixels(${Ve.join(", ")});`),y&&$(arguments[2],arguments[3]),E&&E(ve,Ve),h.readPixels.apply(h,arguments);case"drawBuffers":return v.push(`${T}${u}.drawBuffers([${f(arguments[0],{contextName:u,contextVariables:A,getEntity:z,addVariable:B,variables:w,onUnrecognizedArgumentLookup:_})}]);`),h.drawBuffers(arguments[0])}let Q=h[de].apply(h,arguments);switch(typeof Q){case"undefined":v.push(`${T}${ne(de,arguments)};`);return;case"number":case"boolean":if(g&&A.indexOf(c(Q))===-1){v.push(`${T}const ${u}Variable${A.length} = ${ne(de,arguments)};`),A.push(Q=c(Q));break}default:Q===null?v.push(`${ne(de,arguments)};`):v.push(`${T}const ${u}Variable${A.length} = ${ne(de,arguments)};`),A.push(Q)}return Q}:(I[h[de]]=de,h[de])}function P(){return v.join(`
`)}function X(){for(;v.length>0;)v.pop()}function D(ce,de){w[ce]=de}function z(ce){let de=I[ce];return de?u+"."+de:ce}function H(ce){T=" ".repeat(ce)}function B(ce,de){let Q=`${u}Variable${A.length}`;return v.push(`${T}const ${Q} = ${de};`),A.push(ce),Q}function $(ce,de){let Q=`${u}Variable${A.length}`,Me=`imageDatum${C}`;v.push(`${T}let ${Me} = ["P3\\n# ${y}.ppm\\n", ${ce}, ' ', ${de}, "\\n255\\n"].join("");`),v.push(`${T}for (let i = 0; i < ${Me}.length; i += 4) {`),v.push(`${T}  ${Me} += ${Q}[i] + ' ' + ${Q}[i + 1] + ' ' + ${Q}[i + 2] + ' ';`),v.push(`${T}}`),v.push(`${T}if (typeof require !== "undefined") {`),v.push(`${T}  require('fs').writeFileSync('./${y}.ppm', ${Me});`),v.push(`${T}}`),C++}function j(ce){v.push(`${T}// ${ce}`)}function K(){v.push(`${T}(() => {
      ${T}const error = ${u}.getError();
      ${T}if (error !== ${u}.NONE) {
      ${T}  const names = Object.getOwnPropertyNames(gl);
      ${T}  for (let i = 0; i < names.length; i++) {
      ${T}    const name = names[i];
      ${T}    if (${u}[name] === error) {
      ${T}      throw new Error('${u} threw ' + name);
      ${T}    }
      ${T}  }
      ${T}}
      ${T}})();`)}function ne(ce,de){return`${u}.${ce}(${f(de,{contextName:u,contextVariables:A,getEntity:z,addVariable:B,variables:w,onUnrecognizedArgumentLookup:_})})`}function Z(ce){if(w){for(let de in w)if(w[de]===ce)return de}return null}function le(ce){let de=A.indexOf(ce);return de!==-1?`${u}Variable${de}`:null}}function a(h,o){let u=new Proxy(h,{get:I}),m={},{contextName:g,contextVariables:y,getEntity:v,useTrackablePrimitives:w,recording:E,variables:_,indent:M,onUnrecognizedArgumentLookup:A}=o;return u;function I(L,P){return typeof L[P]=="function"?function(){switch(P){case"drawBuffersWEBGL":return E.push(`${M}${g}.drawBuffersWEBGL([${f(arguments[0],{contextName:g,contextVariables:y,getEntity:C,addVariable:b,variables:_,onUnrecognizedArgumentLookup:A})}]);`),h.drawBuffersWEBGL(arguments[0])}let X=h[P].apply(h,arguments);switch(typeof X){case"undefined":E.push(`${M}${T(P,arguments)};`);return;case"number":case"boolean":w&&y.indexOf(c(X))===-1?(E.push(`${M}const ${g}Variable${y.length} = ${T(P,arguments)};`),y.push(X=c(X))):(E.push(`${M}const ${g}Variable${y.length} = ${T(P,arguments)};`),y.push(X));break;default:X===null?E.push(`${T(P,arguments)};`):E.push(`${M}const ${g}Variable${y.length} = ${T(P,arguments)};`),y.push(X)}return X}:(m[h[P]]=P,h[P])}function C(L){return m.hasOwnProperty(L)?`${g}.${m[L]}`:v(L)}function T(L,P){return`${g}.${L}(${f(P,{contextName:g,contextVariables:y,getEntity:C,addVariable:b,variables:_,onUnrecognizedArgumentLookup:A})})`}function b(L,P){let X=`${g}Variable${y.length}`;return y.push(L),E.push(`${M}const ${X} = ${P};`),X}}function f(h,o){let{variables:u,onUnrecognizedArgumentLookup:m}=o;return Array.from(h).map(y=>{let v=g(y);return v||d(y,o)}).join(", ");function g(y){if(u){for(let v in u)if(!!u.hasOwnProperty(v)&&u[v]===y)return v}return m?m(y):null}}function d(h,o){let{contextName:u,contextVariables:m,getEntity:g,addVariable:y,onUnrecognizedArgumentLookup:v}=o;if(typeof h>"u")return"undefined";if(h===null)return"null";let w=m.indexOf(h);if(w>-1)return`${u}Variable${w}`;switch(h.constructor.name){case"String":let E=/\n/.test(h),_=/'/.test(h),M=/"/.test(h);return E?"`"+h+"`":_&&!M?'"'+h+'"':"'"+h+"'";case"Number":return g(h);case"Boolean":return g(h);case"Array":return y(h,`new ${h.constructor.name}([${Array.from(h).join(",")}])`);case"Float32Array":case"Uint8Array":case"Uint16Array":case"Int32Array":return y(h,`new ${h.constructor.name}(${JSON.stringify(Array.from(h))})`);default:if(v){let A=v(h);if(A)return A}throw new Error(`unrecognized argument type ${h.constructor.name}`)}}function c(h){return new h.constructor(h)}typeof i<"u"&&(i.exports={glWiretap:r,glExtensionWiretap:a}),typeof window<"u"&&(r.glExtensionWiretap=a,window.glWiretap=r)},{}],4:[function(n,i,s){function r(y){let v=new Array(y.length);for(let w=0;w<y.length;w++){let E=y[w];E.toArray?v[w]=E.toArray():v[w]=E}return v}function a(){let y=r(arguments),v=new Float32Array(this.output.x);for(let w=0;w<this.output.x;w++)this.thread.x=w,this.thread.y=0,this.thread.z=0,v[w]=this._fn.apply(this,y);return v}function f(){let y=r(arguments),v=new Array(this.output.y);for(let w=0;w<this.output.y;w++){let E=new Float32Array(this.output.x);for(let _=0;_<this.output.x;_++)this.thread.x=_,this.thread.y=w,this.thread.z=0,E[_]=this._fn.apply(this,y);v[w]=E}return v}function d(){let y=r(arguments);for(let v=0;v<this.output.y;v++)for(let w=0;w<this.output.x;w++)this.thread.x=w,this.thread.y=v,this.thread.z=0,this._fn.apply(this,y)}function c(){let y=r(arguments),v=new Array(this.output.z);for(let w=0;w<this.output.z;w++){let E=new Array(this.output.y);for(let _=0;_<this.output.y;_++){let M=new Float32Array(this.output.x);for(let A=0;A<this.output.x;A++)this.thread.x=A,this.thread.y=_,this.thread.z=w,M[A]=this._fn.apply(this,y);E[_]=M}v[w]=E}return v}function h(y){y.setOutput=E=>{y.output=u(E),y.graphical&&o(y)},y.toJSON=()=>{throw new Error("Not usable with gpuMock")},y.setConstants=E=>(y.constants=E,y),y.setGraphical=E=>(y.graphical=E,y),y.setCanvas=E=>(y.canvas=E,y),y.setContext=E=>(y.context=E,y),y.destroy=()=>{},y.validateSettings=()=>{},y.graphical&&y.output&&o(y),y.exec=function(){return new Promise((E,_)=>{try{E(y.apply(y,arguments))}catch(M){_(M)}})},y.getPixels=E=>{let{x:_,y:M}=y.output;return E?g(y._imageData.data,_,M):y._imageData.data.slice(0)},y.color=function(E,_,M,A){typeof A>"u"&&(A=1),E=Math.floor(E*255),_=Math.floor(_*255),M=Math.floor(M*255),A=Math.floor(A*255);let I=y.output.x,C=y.output.y,T=y.thread.x,b=C-y.thread.y-1,L=T+b*I;y._colorData[L*4+0]=E,y._colorData[L*4+1]=_,y._colorData[L*4+2]=M,y._colorData[L*4+3]=A};let v=()=>y,w=["setWarnVarUsage","setArgumentTypes","setTactic","setOptimizeFloatMemory","setDebug","setLoopMaxIterations","setConstantTypes","setFunctions","setNativeFunctions","setInjectedNative","setPipeline","setPrecision","setOutputToTexture","setImmutable","setStrictIntegers","setDynamicOutput","setHardcodeConstants","setDynamicArguments","setUseLegacyEncoder","setWarnVarUsage","addSubKernel"];for(let E=0;E<w.length;E++)y[w[E]]=v;return y}function o(y){let{x:v,y:w}=y.output;if(y.context&&y.context.createImageData){let E=new Uint8ClampedArray(v*w*4);y._imageData=y.context.createImageData(v,w),y._colorData=E}else{let E=new Uint8ClampedArray(v*w*4);y._imageData={data:E},y._colorData=E}}function u(y){let v=null;if(y.length)if(y.length===3){let[w,E,_]=y;v={x:w,y:E,z:_}}else if(y.length===2){let[w,E]=y;v={x:w,y:E}}else{let[w]=y;v={x:w}}else v=y;return v}function m(y,v={}){let w=v.output?u(v.output):null;function E(){return E.output.z?c.apply(E,arguments):E.output.y?E.graphical?d.apply(E,arguments):f.apply(E,arguments):a.apply(E,arguments)}return E._fn=y,E.constants=v.constants||null,E.context=v.context||null,E.canvas=v.canvas||null,E.graphical=v.graphical||!1,E._imageData=null,E._colorData=null,E.output=w,E.thread={x:0,y:0,z:0},h(E)}function g(y,v,w){let E=w/2|0,_=v*4,M=new Uint8ClampedArray(v*4),A=y.slice(0);for(let I=0;I<E;++I){let C=I*_,T=(w-I-1)*_;M.set(A.subarray(C,C+_)),A.copyWithin(C,T,T+_),A.set(M,T)}return A}i.exports={gpuMock:m}},{}],5:[function(n,i,s){let{utils:r}=n("./utils");function a(f,d){let c=d.toString();return new Function(`return function ${f} (${r.getArgumentNamesFromString(c).join(", ")}) {
        ${r.getFunctionBodyFromString(c)}
      }`)()}i.exports={alias:a}},{"./utils":114}],6:[function(n,i,s){let{FunctionNode:r}=n("../function-node");class a extends r{astFunction(d,c){if(!this.isRootKernel){c.push("function"),c.push(" "),c.push(this.name),c.push("(");for(let h=0;h<this.argumentNames.length;++h){let o=this.argumentNames[h];h>0&&c.push(", "),c.push("user_"),c.push(o)}c.push(`) {
`)}for(let h=0;h<d.body.body.length;++h)this.astGeneric(d.body.body[h],c),c.push(`
`);return this.isRootKernel||c.push(`}
`),c}astReturnStatement(d,c){let h=this.returnType||this.getType(d.argument);return this.returnType||(this.returnType=h),this.isRootKernel?(c.push(this.leadingReturnStatement),this.astGeneric(d.argument,c),c.push(`;
`),c.push(this.followingReturnStatement),c.push(`continue;
`)):this.isSubKernel?(c.push(`subKernelResult_${this.name} = `),this.astGeneric(d.argument,c),c.push(";"),c.push(`return subKernelResult_${this.name};`)):(c.push("return "),this.astGeneric(d.argument,c),c.push(";")),c}astLiteral(d,c){if(isNaN(d.value))throw this.astErrorOutput("Non-numeric literal not supported : "+d.value,d);return c.push(d.value),c}astBinaryExpression(d,c){return c.push("("),this.astGeneric(d.left,c),c.push(d.operator),this.astGeneric(d.right,c),c.push(")"),c}astIdentifierExpression(d,c){if(d.type!=="Identifier")throw this.astErrorOutput("IdentifierExpression - not an Identifier",d);switch(d.name){case"Infinity":c.push("Infinity");break;default:this.constants&&this.constants.hasOwnProperty(d.name)?c.push("constants_"+d.name):c.push("user_"+d.name)}return c}astForStatement(d,c){if(d.type!=="ForStatement")throw this.astErrorOutput("Invalid for statement",d);let h=[],o=[],u=[],m=[],g=null;if(d.init){this.pushState("in-for-loop-init"),this.astGeneric(d.init,h);for(let y=0;y<h.length;y++)h[y].includes&&h[y].includes(",")&&(g=!1);this.popState("in-for-loop-init")}else g=!1;if(d.test?this.astGeneric(d.test,o):g=!1,d.update?this.astGeneric(d.update,u):g=!1,d.body&&(this.pushState("loop-body"),this.astGeneric(d.body,m),this.popState("loop-body")),g===null&&(g=this.isSafe(d.init)&&this.isSafe(d.test)),g)c.push(`for (${h.join("")};${o.join("")};${u.join("")}){
`),c.push(m.join("")),c.push(`}
`);else{let y=this.getInternalVariableName("safeI");h.length>0&&c.push(h.join(""),`;
`),c.push(`for (let ${y}=0;${y}<LOOP_MAX;${y}++){
`),o.length>0&&c.push(`if (!${o.join("")}) break;
`),c.push(m.join("")),c.push(`
${u.join("")};`),c.push(`}
`)}return c}astWhileStatement(d,c){if(d.type!=="WhileStatement")throw this.astErrorOutput("Invalid while statement",d);return c.push("for (let i = 0; i < LOOP_MAX; i++) {"),c.push("if ("),this.astGeneric(d.test,c),c.push(`) {
`),this.astGeneric(d.body,c),c.push(`} else {
`),c.push(`break;
`),c.push(`}
`),c.push(`}
`),c}astDoWhileStatement(d,c){if(d.type!=="DoWhileStatement")throw this.astErrorOutput("Invalid while statement",d);return c.push("for (let i = 0; i < LOOP_MAX; i++) {"),this.astGeneric(d.body,c),c.push("if (!"),this.astGeneric(d.test,c),c.push(`) {
`),c.push(`break;
`),c.push(`}
`),c.push(`}
`),c}astAssignmentExpression(d,c){let h=this.getDeclaration(d.left);if(h&&!h.assignable)throw this.astErrorOutput(`Variable ${d.left.name} is not assignable here`,d);return this.astGeneric(d.left,c),c.push(d.operator),this.astGeneric(d.right,c),c}astBlockStatement(d,c){if(this.isState("loop-body")){this.pushState("block-body");for(let h=0;h<d.body.length;h++)this.astGeneric(d.body[h],c);this.popState("block-body")}else{c.push(`{
`);for(let h=0;h<d.body.length;h++)this.astGeneric(d.body[h],c);c.push(`}
`)}return c}astVariableDeclaration(d,c){c.push(`${d.kind} `);let{declarations:h}=d;for(let o=0;o<h.length;o++){o>0&&c.push(",");let u=h[o],m=this.getDeclaration(u.id);m.valueType||(m.valueType=this.getType(u.init)),this.astGeneric(u,c)}return this.isState("in-for-loop-init")||c.push(";"),c}astIfStatement(d,c){return c.push("if ("),this.astGeneric(d.test,c),c.push(")"),d.consequent.type==="BlockStatement"?this.astGeneric(d.consequent,c):(c.push(` {
`),this.astGeneric(d.consequent,c),c.push(`
}
`)),d.alternate&&(c.push("else "),d.alternate.type==="BlockStatement"||d.alternate.type==="IfStatement"?this.astGeneric(d.alternate,c):(c.push(` {
`),this.astGeneric(d.alternate,c),c.push(`
}
`))),c}astSwitchStatement(d,c){let{discriminant:h,cases:o}=d;c.push("switch ("),this.astGeneric(h,c),c.push(`) {
`);for(let u=0;u<o.length;u++){if(o[u].test===null){c.push(`default:
`),this.astGeneric(o[u].consequent,c),o[u].consequent&&o[u].consequent.length>0&&c.push(`break;
`);continue}c.push("case "),this.astGeneric(o[u].test,c),c.push(`:
`),o[u].consequent&&o[u].consequent.length>0&&(this.astGeneric(o[u].consequent,c),c.push(`break;
`))}c.push(`
}`)}astThisExpression(d,c){return c.push("_this"),c}astMemberExpression(d,c){let{signature:h,type:o,property:u,xProperty:m,yProperty:g,zProperty:y,name:v,origin:w}=this.getMemberExpressionDetails(d);switch(h){case"this.thread.value":return c.push(`_this.thread.${v}`),c;case"this.output.value":switch(v){case"x":c.push("outputX");break;case"y":c.push("outputY");break;case"z":c.push("outputZ");break;default:throw this.astErrorOutput("Unexpected expression",d)}return c;case"value":throw this.astErrorOutput("Unexpected expression",d);case"value[]":case"value[][]":case"value[][][]":case"value.value":if(w==="Math")return c.push(Math[v]),c;switch(u){case"r":return c.push(`user_${v}[0]`),c;case"g":return c.push(`user_${v}[1]`),c;case"b":return c.push(`user_${v}[2]`),c;case"a":return c.push(`user_${v}[3]`),c}break;case"this.constants.value":case"this.constants.value[]":case"this.constants.value[][]":case"this.constants.value[][][]":break;case"fn()[]":return this.astGeneric(d.object,c),c.push("["),this.astGeneric(d.property,c),c.push("]"),c;case"fn()[][]":return this.astGeneric(d.object.object,c),c.push("["),this.astGeneric(d.object.property,c),c.push("]"),c.push("["),this.astGeneric(d.property,c),c.push("]"),c;default:throw this.astErrorOutput("Unexpected expression",d)}if(!d.computed)switch(o){case"Number":case"Integer":case"Float":case"Boolean":return c.push(`${w}_${v}`),c}let E=`${w}_${v}`;switch(o){case"Array(2)":case"Array(3)":case"Array(4)":case"Matrix(2)":case"Matrix(3)":case"Matrix(4)":case"HTMLImageArray":case"ArrayTexture(1)":case"ArrayTexture(2)":case"ArrayTexture(3)":case"ArrayTexture(4)":case"HTMLImage":default:let _,M;if(w==="constants"){let A=this.constants[v];M=this.constantTypes[v]==="Input",_=M?A.size:null}else M=this.isInput(v),_=M?this.argumentSizes[this.argumentNames.indexOf(v)]:null;c.push(`${E}`),y&&g?M?(c.push("[("),this.astGeneric(y,c),c.push(`*${this.dynamicArguments?"(outputY * outputX)":_[1]*_[0]})+(`),this.astGeneric(g,c),c.push(`*${this.dynamicArguments?"outputX":_[0]})+`),this.astGeneric(m,c),c.push("]")):(c.push("["),this.astGeneric(y,c),c.push("]"),c.push("["),this.astGeneric(g,c),c.push("]"),c.push("["),this.astGeneric(m,c),c.push("]")):g?M?(c.push("[("),this.astGeneric(g,c),c.push(`*${this.dynamicArguments?"outputX":_[0]})+`),this.astGeneric(m,c),c.push("]")):(c.push("["),this.astGeneric(g,c),c.push("]"),c.push("["),this.astGeneric(m,c),c.push("]")):typeof m<"u"&&(c.push("["),this.astGeneric(m,c),c.push("]"))}return c}astCallExpression(d,c){if(d.type!=="CallExpression")throw this.astErrorOutput("Unknown CallExpression",d);let h=this.astMemberExpressionUnroll(d.callee);this.calledFunctions.indexOf(h)<0&&this.calledFunctions.push(h);let o=this.isAstMathFunction(d);this.onFunctionCall&&this.onFunctionCall(this.name,h,d.arguments),c.push(h),c.push("(");let u=this.lookupFunctionArgumentTypes(h)||[];for(let m=0;m<d.arguments.length;++m){let g=d.arguments[m],y=this.getType(g);u[m]||this.triggerImplyArgumentType(h,m,y,this),m>0&&c.push(", "),this.astGeneric(g,c)}return c.push(")"),c}astArrayExpression(d,c){let h=this.getType(d),o=d.elements.length,u=[];for(let m=0;m<o;++m){let g=[];this.astGeneric(d.elements[m],g),u.push(g.join(""))}switch(h){case"Matrix(2)":case"Matrix(3)":case"Matrix(4)":c.push(`[${u.join(", ")}]`);break;default:c.push(`new Float32Array([${u.join(", ")}])`)}return c}astDebuggerStatement(d,c){return c.push("debugger;"),c}}i.exports={CPUFunctionNode:a}},{"../function-node":10}],7:[function(n,i,s){let{utils:r}=n("../../utils");function a(d,c){let h=[];for(let o in c){if(!c.hasOwnProperty(o))continue;let u=c[o],m=d[o];switch(u){case"Number":case"Integer":case"Float":case"Boolean":h.push(`${o}:${m}`);break;case"Array(2)":case"Array(3)":case"Array(4)":case"Matrix(2)":case"Matrix(3)":case"Matrix(4)":h.push(`${o}:new ${m.constructor.name}(${JSON.stringify(Array.from(m))})`);break}}return`{ ${h.join()} }`}function f(d,c){let h=[],o=[],u=[],m=!/^function/.test(d.color.toString());if(h.push("  const { context, canvas, constants: incomingConstants } = settings;",`  const output = new Int32Array(${JSON.stringify(Array.from(d.output))});`,`  const _constantTypes = ${JSON.stringify(d.constantTypes)};`,`  const _constants = ${a(d.constants,d.constantTypes)};`),o.push("    constants: _constants,","    context,","    output,","    thread: {x: 0, y: 0, z: 0},"),d.graphical){h.push(`  const _imageData = context.createImageData(${d.output[0]}, ${d.output[1]});`),h.push(`  const _colorData = new Uint8ClampedArray(${d.output[0]} * ${d.output[1]} * 4);`);let v=r.flattenFunctionToString((m?"function ":"")+d.color.toString(),{thisLookup:E=>{switch(E){case"_colorData":return"_colorData";case"_imageData":return"_imageData";case"output":return"output";case"thread":return"this.thread"}return JSON.stringify(d[E])},findDependency:(E,_)=>null}),w=r.flattenFunctionToString((m?"function ":"")+d.getPixels.toString(),{thisLookup:E=>{switch(E){case"_colorData":return"_colorData";case"_imageData":return"_imageData";case"output":return"output";case"thread":return"this.thread"}return JSON.stringify(d[E])},findDependency:()=>null});o.push("    _imageData,","    _colorData,",`    color: ${v},`),u.push(`  kernel.getPixels = ${w};`)}let g=[],y=Object.keys(d.constantTypes);for(let v=0;v<y.length;v++)g.push(d.constantTypes[y]);if(d.argumentTypes.indexOf("HTMLImageArray")!==-1||g.indexOf("HTMLImageArray")!==-1){let v=r.flattenFunctionToString((m?"function ":"")+d._imageTo3DArray.toString(),{doNotDefine:["canvas"],findDependency:(w,E)=>w==="this"?(m?"function ":"")+d[E].toString():null,thisLookup:w=>{switch(w){case"canvas":return;case"context":return"context"}}});u.push(v),o.push("    _mediaTo2DArray,"),o.push("    _imageTo3DArray,")}else if(d.argumentTypes.indexOf("HTMLImage")!==-1||g.indexOf("HTMLImage")!==-1){let v=r.flattenFunctionToString((m?"function ":"")+d._mediaTo2DArray.toString(),{findDependency:(w,E)=>null,thisLookup:w=>{switch(w){case"canvas":return"settings.canvas";case"context":return"settings.context"}throw new Error("unhandled thisLookup")}});u.push(v),o.push("    _mediaTo2DArray,")}return`function(settings) {
      ${h.join(`
`)}
        for (const p in _constantTypes) {
          if (!_constantTypes.hasOwnProperty(p)) continue;
          const type = _constantTypes[p];
          switch (type) {
            case 'Number':
            case 'Integer':
            case 'Float':
            case 'Boolean':
            case 'Array(2)':
            case 'Array(3)':
            case 'Array(4)':
            case 'Matrix(2)':
            case 'Matrix(3)':
            case 'Matrix(4)':
              if (incomingConstants.hasOwnProperty(p)) {
                console.warn('constant ' + p + ' of type ' + type + ' cannot be resigned');
              }
              continue;
          }
          if (!incomingConstants.hasOwnProperty(p)) {
            throw new Error('constant ' + p + ' not found');
          }
          _constants[p] = incomingConstants[p];
        }
        const kernel = (function() {
      ${d._kernelString}
        })
          .apply({ ${o.join(`
`)} });
        ${u.join(`
`)}
        return kernel;
      }`}i.exports={cpuKernelString:f}},{"../../utils":114}],8:[function(n,i,s){let{Kernel:r}=n("../kernel"),{FunctionBuilder:a}=n("../function-builder"),{CPUFunctionNode:f}=n("./function-node"),{utils:d}=n("../../utils"),{cpuKernelString:c}=n("./kernel-string");class h extends r{static getFeatures(){return this.features}static get features(){return Object.freeze({kernelMap:!0,isIntegerDivisionAccurate:!0})}static get isSupported(){return!0}static isContextMatch(u){return!1}static get mode(){return"cpu"}static nativeFunctionArguments(){return null}static nativeFunctionReturnType(){throw new Error(`Looking up native function return type not supported on ${this.name}`)}static combineKernels(u){return u}static getSignature(u,m){return"cpu"+(m.length>0?":"+m.join(","):"")}constructor(u,m){super(u,m),this.mergeSettings(u.settings||m),this._imageData=null,this._colorData=null,this._kernelString=null,this._prependedString=[],this.thread={x:0,y:0,z:0},this.translatedSources=null}initCanvas(){if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(0,0)}initContext(){return this.canvas?this.canvas.getContext("2d"):null}initPlugins(u){return[]}validateSettings(u){if(!this.output||this.output.length===0){if(u.length!==1)throw new Error("Auto output only supported for kernels with only one input");let m=d.getVariableType(u[0],this.strictIntegers);if(m==="Array")this.output=d.getDimensions(m);else if(m==="NumberTexture"||m==="ArrayTexture(4)")this.output=u[0].output;else throw new Error("Auto output not supported for input type: "+m)}if(this.graphical&&this.output.length!==2)throw new Error("Output must have 2 dimensions on graphical mode");this.checkOutput()}translateSource(){if(this.leadingReturnStatement=this.output.length>1?"resultX[x] = ":"result[x] = ",this.subKernels){let m=[];for(let g=0;g<this.subKernels.length;g++){let{name:y}=this.subKernels[g];m.push(this.output.length>1?`resultX_${y}[x] = subKernelResult_${y};
`:`result_${y}[x] = subKernelResult_${y};
`)}this.followingReturnStatement=m.join("")}let u=a.fromKernel(this,f);this.translatedSources=u.getPrototypes("kernel"),!this.graphical&&!this.returnType&&(this.returnType=u.getKernelResultType())}build(){if(this.built)return;if(this.setupConstants(),this.setupArguments(arguments),this.validateSettings(arguments),this.translateSource(),this.graphical){let{canvas:m,output:g}=this;if(!m)throw new Error("no canvas available for using graphical output");let y=g[0],v=g[1]||1;m.width=y,m.height=v,this._imageData=this.context.createImageData(y,v),this._colorData=new Uint8ClampedArray(y*v*4)}let u=this.getKernelString();this.kernelString=u,this.debug&&(console.log("Function output:"),console.log(u));try{this.run=new Function([],u).bind(this)()}catch(m){console.error("An error occurred compiling the javascript: ",m)}this.buildSignature(arguments),this.built=!0}color(u,m,g,y){typeof y>"u"&&(y=1),u=Math.floor(u*255),m=Math.floor(m*255),g=Math.floor(g*255),y=Math.floor(y*255);let v=this.output[0],w=this.output[1],E=this.thread.x,_=w-this.thread.y-1,M=E+_*v;this._colorData[M*4+0]=u,this._colorData[M*4+1]=m,this._colorData[M*4+2]=g,this._colorData[M*4+3]=y}getKernelString(){if(this._kernelString!==null)return this._kernelString;let u=null,{translatedSources:m}=this;return m.length>1?m=m.filter(g=>/^function/.test(g)?g:(u=g,!1)):u=m.shift(),this._kernelString=`  const LOOP_MAX = ${this._getLoopMaxString()};
        ${this.injectedNative||""}
        const _this = this;
        ${this._resultKernelHeader()}
        ${this._processConstants()}
        return (${this.argumentNames.map(g=>"user_"+g).join(", ")}) => {
          ${this._prependedString.join("")}
          ${this._earlyThrows()}
          ${this._processArguments()}
          ${this.graphical?this._graphicalKernelBody(u):this._resultKernelBody(u)}
          ${m.length>0?m.join(`
`):""}
        };`}toString(){return c(this)}_getLoopMaxString(){return this.loopMaxIterations?` ${parseInt(this.loopMaxIterations)};`:" 1000;"}_processConstants(){if(!this.constants)return"";let u=[];for(let m in this.constants)switch(this.constantTypes[m]){case"HTMLCanvas":case"HTMLImage":case"HTMLVideo":u.push(`    const constants_${m} = this._mediaTo2DArray(this.constants.${m});
`);break;case"HTMLImageArray":u.push(`    const constants_${m} = this._imageTo3DArray(this.constants.${m});
`);break;case"Input":u.push(`    const constants_${m} = this.constants.${m}.value;
`);break;default:u.push(`    const constants_${m} = this.constants.${m};
`)}return u.join("")}_earlyThrows(){if(this.graphical||this.immutable||!this.pipeline)return"";let u=[];for(let g=0;g<this.argumentTypes.length;g++)this.argumentTypes[g]==="Array"&&u.push(this.argumentNames[g]);if(u.length===0)return"";let m=[];for(let g=0;g<u.length;g++){let y=u[g],v=this._mapSubKernels(w=>`user_${y} === result_${w.name}`).join(" || ");m.push(`user_${y} === result${v?` || ${v}`:""}`)}return`if (${m.join(" || ")}) throw new Error('Source and destination arrays are the same.  Use immutable = true');`}_processArguments(){let u=[];for(let m=0;m<this.argumentTypes.length;m++){let g=`user_${this.argumentNames[m]}`;switch(this.argumentTypes[m]){case"HTMLCanvas":case"HTMLImage":case"HTMLVideo":u.push(`    ${g} = this._mediaTo2DArray(${g});
`);break;case"HTMLImageArray":u.push(`    ${g} = this._imageTo3DArray(${g});
`);break;case"Input":u.push(`    ${g} = ${g}.value;
`);break;case"ArrayTexture(1)":case"ArrayTexture(2)":case"ArrayTexture(3)":case"ArrayTexture(4)":case"NumberTexture":case"MemoryOptimizedNumberTexture":u.push(`
          if (${g}.toArray) {
            if (!_this.textureCache) {
              _this.textureCache = [];
              _this.arrayCache = [];
            }
            const textureIndex = _this.textureCache.indexOf(${g});
            if (textureIndex !== -1) {
              ${g} = _this.arrayCache[textureIndex];
            } else {
              _this.textureCache.push(${g});
              ${g} = ${g}.toArray();
              _this.arrayCache.push(${g});
            }
          }`);break}}return u.join("")}_mediaTo2DArray(u){let m=this.canvas,g=u.width>0?u.width:u.videoWidth,y=u.height>0?u.height:u.videoHeight;m.width<g&&(m.width=g),m.height<y&&(m.height=y);let v=this.context;v.drawImage(u,0,0,g,y);let w=v.getImageData(0,0,g,y).data,E=new Array(y),_=0;for(let M=y-1;M>=0;M--){let A=E[M]=new Array(g);for(let I=0;I<g;I++){let C=new Float32Array(4);C[0]=w[_++]/255,C[1]=w[_++]/255,C[2]=w[_++]/255,C[3]=w[_++]/255,A[I]=C}}return E}getPixels(u){let[m,g]=this.output;return u?d.flipPixels(this._imageData.data,m,g):this._imageData.data.slice(0)}_imageTo3DArray(u){let m=new Array(u.length);for(let g=0;g<u.length;g++)m[g]=this._mediaTo2DArray(u[g]);return m}_resultKernelHeader(){if(this.graphical||this.immutable||!this.pipeline)return"";switch(this.output.length){case 1:return this._mutableKernel1DResults();case 2:return this._mutableKernel2DResults();case 3:return this._mutableKernel3DResults()}}_resultKernelBody(u){switch(this.output.length){case 1:return(!this.immutable&&this.pipeline?this._resultMutableKernel1DLoop(u):this._resultImmutableKernel1DLoop(u))+this._kernelOutput();case 2:return(!this.immutable&&this.pipeline?this._resultMutableKernel2DLoop(u):this._resultImmutableKernel2DLoop(u))+this._kernelOutput();case 3:return(!this.immutable&&this.pipeline?this._resultMutableKernel3DLoop(u):this._resultImmutableKernel3DLoop(u))+this._kernelOutput();default:throw new Error("unsupported size kernel")}}_graphicalKernelBody(u){switch(this.output.length){case 2:return this._graphicalKernel2DLoop(u)+this._graphicalOutput();default:throw new Error("unsupported size kernel")}}_graphicalOutput(){return`
          this._imageData.data.set(this._colorData);
          this.context.putImageData(this._imageData, 0, 0);
          return;`}_getKernelResultTypeConstructorString(){switch(this.returnType){case"LiteralInteger":case"Number":case"Integer":case"Float":return"Float32Array";case"Array(2)":case"Array(3)":case"Array(4)":return"Array";default:if(this.graphical)return"Float32Array";throw new Error(`unhandled returnType ${this.returnType}`)}}_resultImmutableKernel1DLoop(u){let m=this._getKernelResultTypeConstructorString();return`  const outputX = _this.output[0];
          const result = new ${m}(outputX);
          ${this._mapSubKernels(g=>`const result_${g.name} = new ${m}(outputX);
`).join("    ")}
          ${this._mapSubKernels(g=>`let subKernelResult_${g.name};
`).join("    ")}
          for (let x = 0; x < outputX; x++) {
            this.thread.x = x;
            this.thread.y = 0;
            this.thread.z = 0;
            ${u}
          }`}_mutableKernel1DResults(){let u=this._getKernelResultTypeConstructorString();return`  const outputX = _this.output[0];
          const result = new ${u}(outputX);
          ${this._mapSubKernels(m=>`const result_${m.name} = new ${u}(outputX);
`).join("    ")}
          ${this._mapSubKernels(m=>`let subKernelResult_${m.name};
`).join("    ")}`}_resultMutableKernel1DLoop(u){return`  const outputX = _this.output[0];
          for (let x = 0; x < outputX; x++) {
            this.thread.x = x;
            this.thread.y = 0;
            this.thread.z = 0;
            ${u}
          }`}_resultImmutableKernel2DLoop(u){let m=this._getKernelResultTypeConstructorString();return`  const outputX = _this.output[0];
          const outputY = _this.output[1];
          const result = new Array(outputY);
          ${this._mapSubKernels(g=>`const result_${g.name} = new Array(outputY);
`).join("    ")}
          ${this._mapSubKernels(g=>`let subKernelResult_${g.name};
`).join("    ")}
          for (let y = 0; y < outputY; y++) {
            this.thread.z = 0;
            this.thread.y = y;
            const resultX = result[y] = new ${m}(outputX);
            ${this._mapSubKernels(g=>`const resultX_${g.name} = result_${g.name}[y] = new ${m}(outputX);
`).join("")}
            for (let x = 0; x < outputX; x++) {
              this.thread.x = x;
              ${u}
            }
          }`}_mutableKernel2DResults(){let u=this._getKernelResultTypeConstructorString();return`  const outputX = _this.output[0];
          const outputY = _this.output[1];
          const result = new Array(outputY);
          ${this._mapSubKernels(m=>`const result_${m.name} = new Array(outputY);
`).join("    ")}
          ${this._mapSubKernels(m=>`let subKernelResult_${m.name};
`).join("    ")}
          for (let y = 0; y < outputY; y++) {
            const resultX = result[y] = new ${u}(outputX);
            ${this._mapSubKernels(m=>`const resultX_${m.name} = result_${m.name}[y] = new ${u}(outputX);
`).join("")}
          }`}_resultMutableKernel2DLoop(u){let m=this._getKernelResultTypeConstructorString();return`  const outputX = _this.output[0];
          const outputY = _this.output[1];
          for (let y = 0; y < outputY; y++) {
            this.thread.z = 0;
            this.thread.y = y;
            const resultX = result[y];
            ${this._mapSubKernels(g=>`const resultX_${g.name} = result_${g.name}[y] = new ${m}(outputX);
`).join("")}
            for (let x = 0; x < outputX; x++) {
              this.thread.x = x;
              ${u}
            }
          }`}_graphicalKernel2DLoop(u){return`  const outputX = _this.output[0];
          const outputY = _this.output[1];
          for (let y = 0; y < outputY; y++) {
            this.thread.z = 0;
            this.thread.y = y;
            for (let x = 0; x < outputX; x++) {
              this.thread.x = x;
              ${u}
            }
          }`}_resultImmutableKernel3DLoop(u){let m=this._getKernelResultTypeConstructorString();return`  const outputX = _this.output[0];
          const outputY = _this.output[1];
          const outputZ = _this.output[2];
          const result = new Array(outputZ);
          ${this._mapSubKernels(g=>`const result_${g.name} = new Array(outputZ);
`).join("    ")}
          ${this._mapSubKernels(g=>`let subKernelResult_${g.name};
`).join("    ")}
          for (let z = 0; z < outputZ; z++) {
            this.thread.z = z;
            const resultY = result[z] = new Array(outputY);
            ${this._mapSubKernels(g=>`const resultY_${g.name} = result_${g.name}[z] = new Array(outputY);
`).join("      ")}
            for (let y = 0; y < outputY; y++) {
              this.thread.y = y;
              const resultX = resultY[y] = new ${m}(outputX);
              ${this._mapSubKernels(g=>`const resultX_${g.name} = resultY_${g.name}[y] = new ${m}(outputX);
`).join("        ")}
              for (let x = 0; x < outputX; x++) {
                this.thread.x = x;
                ${u}
              }
            }
          }`}_mutableKernel3DResults(){let u=this._getKernelResultTypeConstructorString();return`  const outputX = _this.output[0];
          const outputY = _this.output[1];
          const outputZ = _this.output[2];
          const result = new Array(outputZ);
          ${this._mapSubKernels(m=>`const result_${m.name} = new Array(outputZ);
`).join("    ")}
          ${this._mapSubKernels(m=>`let subKernelResult_${m.name};
`).join("    ")}
          for (let z = 0; z < outputZ; z++) {
            const resultY = result[z] = new Array(outputY);
            ${this._mapSubKernels(m=>`const resultY_${m.name} = result_${m.name}[z] = new Array(outputY);
`).join("      ")}
            for (let y = 0; y < outputY; y++) {
              const resultX = resultY[y] = new ${u}(outputX);
              ${this._mapSubKernels(m=>`const resultX_${m.name} = resultY_${m.name}[y] = new ${u}(outputX);
`).join("        ")}
            }
          }`}_resultMutableKernel3DLoop(u){return`  const outputX = _this.output[0];
          const outputY = _this.output[1];
          const outputZ = _this.output[2];
          for (let z = 0; z < outputZ; z++) {
            this.thread.z = z;
            const resultY = result[z];
            for (let y = 0; y < outputY; y++) {
              this.thread.y = y;
              const resultX = resultY[y];
              for (let x = 0; x < outputX; x++) {
                this.thread.x = x;
                ${u}
              }
            }
          }`}_kernelOutput(){return this.subKernels?`
    return {
            result: result,
            ${this.subKernels.map(u=>`${u.property}: result_${u.name}`).join(`,
      `)}
          };`:`
    return result;`}_mapSubKernels(u){return this.subKernels===null?[""]:this.subKernels.map(u)}destroy(u){u&&delete this.canvas}static destroyContext(u){}toJSON(){let u=super.toJSON();return u.functionNodes=a.fromKernel(this,f).toJSON(),u}setOutput(u){super.setOutput(u);let[m,g]=this.output;this.graphical&&(this._imageData=this.context.createImageData(m,g),this._colorData=new Uint8ClampedArray(m*g*4))}prependString(u){if(this._kernelString)throw new Error("Kernel already built");this._prependedString.push(u)}hasPrependString(u){return this._prependedString.indexOf(u)>-1}}i.exports={CPUKernel:h}},{"../../utils":114,"../function-builder":9,"../kernel":36,"./function-node":6,"./kernel-string":7}],9:[function(n,i,s){class r{static fromKernel(f,d,c){let{kernelArguments:h,kernelConstants:o,argumentNames:u,argumentSizes:m,argumentBitRatios:g,constants:y,constantBitRatios:v,debug:w,loopMaxIterations:E,nativeFunctions:_,output:M,optimizeFloatMemory:A,precision:I,plugins:C,source:T,subKernels:b,functions:L,leadingReturnStatement:P,followingReturnStatement:X,dynamicArguments:D,dynamicOutput:z}=f,H=new Array(h.length),B={};for(let ae=0;ae<h.length;ae++)H[ae]=h[ae].type;for(let ae=0;ae<o.length;ae++){let xe=o[ae];B[xe.name]=xe.type}let $=(ae,xe)=>se.needsArgumentType(ae,xe),j=(ae,xe,me)=>{se.assignArgumentType(ae,xe,me)},K=(ae,xe,me)=>se.lookupReturnType(ae,xe,me),ne=ae=>se.lookupFunctionArgumentTypes(ae),Z=(ae,xe)=>se.lookupFunctionArgumentName(ae,xe),le=(ae,xe)=>se.lookupFunctionArgumentBitRatio(ae,xe),ce=(ae,xe,me,Ne)=>{se.assignArgumentType(ae,xe,me,Ne)},de=(ae,xe,me,Ne)=>{se.assignArgumentBitRatio(ae,xe,me,Ne)},Q=(ae,xe,me)=>{se.trackFunctionCall(ae,xe,me)},Me=(ae,xe)=>{let me=[];for(let Pe=0;Pe<ae.params.length;Pe++)me.push(ae.params[Pe].name);let Ne=new d(xe,Object.assign({},ve,{returnType:null,ast:ae,name:ae.id.name,argumentNames:me,lookupReturnType:K,lookupFunctionArgumentTypes:ne,lookupFunctionArgumentName:Z,lookupFunctionArgumentBitRatio:le,needsArgumentType:$,assignArgumentType:j,triggerImplyArgumentType:ce,triggerImplyArgumentBitRatio:de,onFunctionCall:Q}));Ne.traceFunctionAST(ae),se.addFunctionNode(Ne)},ve=Object.assign({isRootKernel:!1,onNestedFunction:Me,lookupReturnType:K,lookupFunctionArgumentTypes:ne,lookupFunctionArgumentName:Z,lookupFunctionArgumentBitRatio:le,needsArgumentType:$,assignArgumentType:j,triggerImplyArgumentType:ce,triggerImplyArgumentBitRatio:de,onFunctionCall:Q,optimizeFloatMemory:A,precision:I,constants:y,constantTypes:B,constantBitRatios:v,debug:w,loopMaxIterations:E,output:M,plugins:C,dynamicArguments:D,dynamicOutput:z},c||{}),Ve=Object.assign({},ve,{isRootKernel:!0,name:"kernel",argumentNames:u,argumentTypes:H,argumentSizes:m,argumentBitRatios:g,leadingReturnStatement:P,followingReturnStatement:X});if(typeof T=="object"&&T.functionNodes)return new r().fromJSON(T.functionNodes,d);let oe=new d(T,Ve),Ie=null;L&&(Ie=L.map(ae=>new d(ae.source,{returnType:ae.returnType,argumentTypes:ae.argumentTypes,output:M,plugins:C,constants:y,constantTypes:B,constantBitRatios:v,optimizeFloatMemory:A,precision:I,lookupReturnType:K,lookupFunctionArgumentTypes:ne,lookupFunctionArgumentName:Z,lookupFunctionArgumentBitRatio:le,needsArgumentType:$,assignArgumentType:j,triggerImplyArgumentType:ce,triggerImplyArgumentBitRatio:de,onFunctionCall:Q,onNestedFunction:Me})));let ie=null;b&&(ie=b.map(ae=>{let{name:xe,source:me}=ae;return new d(me,Object.assign({},ve,{name:xe,isSubKernel:!0,isRootKernel:!1}))}));let se=new r({kernel:f,rootNode:oe,functionNodes:Ie,nativeFunctions:_,subKernelNodes:ie});return se}constructor(f){if(f=f||{},this.kernel=f.kernel,this.rootNode=f.rootNode,this.functionNodes=f.functionNodes||[],this.subKernelNodes=f.subKernelNodes||[],this.nativeFunctions=f.nativeFunctions||[],this.functionMap={},this.nativeFunctionNames=[],this.lookupChain=[],this.functionNodeDependencies={},this.functionCalls={},this.rootNode&&(this.functionMap.kernel=this.rootNode),this.functionNodes)for(let d=0;d<this.functionNodes.length;d++)this.functionMap[this.functionNodes[d].name]=this.functionNodes[d];if(this.subKernelNodes)for(let d=0;d<this.subKernelNodes.length;d++)this.functionMap[this.subKernelNodes[d].name]=this.subKernelNodes[d];if(this.nativeFunctions)for(let d=0;d<this.nativeFunctions.length;d++){let c=this.nativeFunctions[d];this.nativeFunctionNames.push(c.name)}}addFunctionNode(f){if(!f.name)throw new Error("functionNode.name needs set");this.functionMap[f.name]=f,f.isRootKernel&&(this.rootNode=f)}traceFunctionCalls(f,d){if(f=f||"kernel",d=d||[],this.nativeFunctionNames.indexOf(f)>-1){let h=d.indexOf(f);if(h===-1)d.push(f);else{let o=d.splice(h,1)[0];d.push(o)}return d}let c=this.functionMap[f];if(c){let h=d.indexOf(f);if(h===-1){d.push(f),c.toString();for(let o=0;o<c.calledFunctions.length;++o)this.traceFunctionCalls(c.calledFunctions[o],d)}else{let o=d.splice(h,1)[0];d.push(o)}}return d}getPrototypeString(f){return this.getPrototypes(f).join(`
`)}getPrototypes(f){return this.rootNode&&this.rootNode.toString(),f?this.getPrototypesFromFunctionNames(this.traceFunctionCalls(f,[]).reverse()):this.getPrototypesFromFunctionNames(Object.keys(this.functionMap))}getStringFromFunctionNames(f){let d=[];for(let c=0;c<f.length;++c)this.functionMap[f[c]]&&d.push(this.functionMap[f[c]].toString());return d.join(`
`)}getPrototypesFromFunctionNames(f){let d=[];for(let c=0;c<f.length;++c){let h=f[c],o=this.nativeFunctionNames.indexOf(h);if(o>-1){d.push(this.nativeFunctions[o].source);continue}let u=this.functionMap[h];u&&d.push(u.toString())}return d}toJSON(){return this.traceFunctionCalls(this.rootNode.name).reverse().map(f=>{let d=this.nativeFunctions.indexOf(f);if(d>-1)return{name:f,source:this.nativeFunctions[d].source};if(this.functionMap[f])return this.functionMap[f].toJSON();throw new Error(`function ${f} not found`)})}fromJSON(f,d){this.functionMap={};for(let c=0;c<f.length;c++){let h=f[c];this.functionMap[h.settings.name]=new d(h.ast,h.settings)}return this}getString(f){return f?this.getStringFromFunctionNames(this.traceFunctionCalls(f).reverse()):this.getStringFromFunctionNames(Object.keys(this.functionMap))}lookupReturnType(f,d,c){if(d.type!=="CallExpression")throw new Error(`expected ast type of "CallExpression", but is ${d.type}`);if(this._isNativeFunction(f))return this._lookupNativeFunctionReturnType(f);if(this._isFunction(f)){let h=this._getFunction(f);if(h.returnType)return h.returnType;{for(let u=0;u<this.lookupChain.length;u++)if(this.lookupChain[u].ast===d){if(h.argumentTypes.length===0&&d.arguments.length>0){let m=d.arguments;for(let g=0;g<m.length;g++)this.lookupChain.push({name:c.name,ast:m[u],requestingNode:c}),h.argumentTypes[g]=c.getType(m[g]),this.lookupChain.pop();return h.returnType=h.getType(h.getJsAST())}throw new Error("circlical logic detected!")}this.lookupChain.push({name:c.name,ast:d,requestingNode:c});let o=h.getType(h.getJsAST());return this.lookupChain.pop(),h.returnType=o}}return null}_getFunction(f){return this._isFunction(f)||new Error(`Function ${f} not found`),this.functionMap[f]}_isFunction(f){return Boolean(this.functionMap[f])}_getNativeFunction(f){for(let d=0;d<this.nativeFunctions.length;d++)if(this.nativeFunctions[d].name===f)return this.nativeFunctions[d];return null}_isNativeFunction(f){return Boolean(this._getNativeFunction(f))}_lookupNativeFunctionReturnType(f){let d=this._getNativeFunction(f);if(d)return d.returnType;throw new Error(`Native function ${f} not found`)}lookupFunctionArgumentTypes(f){return this._isNativeFunction(f)?this._getNativeFunction(f).argumentTypes:this._isFunction(f)?this._getFunction(f).argumentTypes:null}lookupFunctionArgumentName(f,d){return this._getFunction(f).argumentNames[d]}lookupFunctionArgumentBitRatio(f,d){if(!this._isFunction(f))throw new Error("function not found");if(this.rootNode.name===f){let u=this.rootNode.argumentNames.indexOf(d);if(u!==-1)return this.rootNode.argumentBitRatios[u]}let c=this._getFunction(f),h=c.argumentNames.indexOf(d);if(h===-1)throw new Error("argument not found");let o=c.argumentBitRatios[h];if(typeof o!="number")throw new Error("argument bit ratio not found");return o}needsArgumentType(f,d){return this._isFunction(f)?!this._getFunction(f).argumentTypes[d]:!1}assignArgumentType(f,d,c,h){if(!this._isFunction(f))return;let o=this._getFunction(f);o.argumentTypes[d]||(o.argumentTypes[d]=c)}assignArgumentBitRatio(f,d,c,h){let o=this._getFunction(f);if(this._isNativeFunction(c))return null;let u=this._getFunction(c),m=o.argumentNames.indexOf(d);if(m===-1)throw new Error(`Argument ${d} not found in arguments from function ${f}`);let g=o.argumentBitRatios[m];if(typeof g!="number")throw new Error(`Bit ratio for argument ${d} not found in function ${f}`);u.argumentBitRatios||(u.argumentBitRatios=new Array(u.argumentNames.length));let y=u.argumentBitRatios[m];if(typeof y=="number"){if(y!==g)throw new Error(`Incompatible bit ratio found at function ${f} at argument ${d}`);return y}return u.argumentBitRatios[m]=g,g}trackFunctionCall(f,d,c){this.functionNodeDependencies[f]||(this.functionNodeDependencies[f]=new Set,this.functionCalls[f]=[]),this.functionNodeDependencies[f].add(d),this.functionCalls[f].push(c)}getKernelResultType(){return this.rootNode.returnType||this.rootNode.getType(this.rootNode.ast)}getSubKernelResultType(f){let d=this.subKernelNodes[f],c=!1;for(let h=0;h<this.rootNode.functionCalls.length;h++)this.rootNode.functionCalls[h].ast.callee.name===d.name&&(c=!0);if(!c)throw new Error(`SubKernel ${d.name} never called by kernel`);return d.returnType||d.getType(d.getJsAST())}getReturnTypes(){let f={[this.rootNode.name]:this.rootNode.getType(this.rootNode.ast)},d=this.traceFunctionCalls(this.rootNode.name);for(let c=0;c<d.length;c++){let h=d[c],o=this.functionMap[h];f[h]=o.getType(o.ast)}return f}}i.exports={FunctionBuilder:r}},{}],10:[function(n,i,s){let r=n("acorn"),{utils:a}=n("../utils"),{FunctionTracer:f}=n("./function-tracer");class d{constructor(o,u){if(!o&&!u.ast)throw new Error("source parameter is missing");if(u=u||{},this.source=o,this.ast=null,this.name=typeof o=="string"?u.isRootKernel?"kernel":u.name||a.getFunctionNameFromString(o):null,this.calledFunctions=[],this.constants={},this.constantTypes={},this.constantBitRatios={},this.isRootKernel=!1,this.isSubKernel=!1,this.debug=null,this.functions=null,this.identifiers=null,this.contexts=null,this.functionCalls=null,this.states=[],this.needsArgumentType=null,this.assignArgumentType=null,this.lookupReturnType=null,this.lookupFunctionArgumentTypes=null,this.lookupFunctionArgumentBitRatio=null,this.triggerImplyArgumentType=null,this.triggerImplyArgumentBitRatio=null,this.onNestedFunction=null,this.onFunctionCall=null,this.optimizeFloatMemory=null,this.precision=null,this.loopMaxIterations=null,this.argumentNames=typeof this.source=="string"?a.getArgumentNamesFromString(this.source):null,this.argumentTypes=[],this.argumentSizes=[],this.argumentBitRatios=null,this.returnType=null,this.output=[],this.plugins=null,this.leadingReturnStatement=null,this.followingReturnStatement=null,this.dynamicOutput=null,this.dynamicArguments=null,this.strictTypingChecking=!1,this.fixIntegerDivisionAccuracy=null,u)for(let m in u)!u.hasOwnProperty(m)||!this.hasOwnProperty(m)||(this[m]=u[m]);this.literalTypes={},this.validate(),this._string=null,this._internalVariableNames={}}validate(){if(typeof this.source!="string"&&!this.ast)throw new Error("this.source not a string");if(!this.ast&&!a.isFunctionString(this.source))throw new Error("this.source not a function string");if(!this.name)throw new Error("this.name could not be set");if(this.argumentTypes.length>0&&this.argumentTypes.length!==this.argumentNames.length)throw new Error(`argumentTypes count of ${this.argumentTypes.length} exceeds ${this.argumentNames.length}`);if(this.output.length<1)throw new Error("this.output is not big enough")}isIdentifierConstant(o){return this.constants?this.constants.hasOwnProperty(o):!1}isInput(o){return this.argumentTypes[this.argumentNames.indexOf(o)]==="Input"}pushState(o){this.states.push(o)}popState(o){if(this.state!==o)throw new Error(`Cannot popState ${o} when in ${this.state}`);this.states.pop()}isState(o){return this.state===o}get state(){return this.states[this.states.length-1]}astMemberExpressionUnroll(o){if(o.type==="Identifier")return o.name;if(o.type==="ThisExpression")return"this";if(o.type==="MemberExpression"&&o.object&&o.property)return o.object.hasOwnProperty("name")&&o.object.name!=="Math"?this.astMemberExpressionUnroll(o.property):this.astMemberExpressionUnroll(o.object)+"."+this.astMemberExpressionUnroll(o.property);if(o.hasOwnProperty("expressions")){let u=o.expressions[0];if(u.type==="Literal"&&u.value===0&&o.expressions.length===2)return this.astMemberExpressionUnroll(o.expressions[1])}throw this.astErrorOutput("Unknown astMemberExpressionUnroll",o)}getJsAST(o){if(this.ast)return this.ast;if(typeof this.source=="object")return this.traceFunctionAST(this.source),this.ast=this.source;if(o=o||r,o===null)throw new Error("Missing JS to AST parser");let u=Object.freeze(o.parse(`const parser_${this.name} = ${this.source};`,{locations:!0})),m=u.body[0].declarations[0].init;if(this.traceFunctionAST(m),!u)throw new Error("Failed to parse JS code");return this.ast=m}traceFunctionAST(o){let{contexts:u,declarations:m,functions:g,identifiers:y,functionCalls:v}=new f(o);this.contexts=u,this.identifiers=y,this.functionCalls=v,this.functions=g;for(let w=0;w<m.length;w++){let E=m[w],{ast:_,inForLoopInit:M,inForLoopTest:A}=E,{init:I}=_,C=this.getDependencies(I),T=null;if(M&&A)T="Integer";else if(I){let b=this.getType(I);switch(b){case"Integer":case"Float":case"Number":I.type==="MemberExpression"?T=b:T="Number";break;case"LiteralInteger":T="Number";break;default:T=b}}E.valueType=T,E.dependencies=C,E.isSafe=this.isSafeDependencies(C)}for(let w=0;w<g.length;w++)this.onNestedFunction(g[w],this.source)}getDeclaration(o){for(let u=0;u<this.identifiers.length;u++){let m=this.identifiers[u];if(o===m.ast)return m.declaration}return null}getVariableType(o){if(o.type!=="Identifier")throw new Error(`ast of ${o.type} not "Identifier"`);let u=null,m=this.argumentNames.indexOf(o.name);if(m===-1){let g=this.getDeclaration(o);if(g)return g.valueType}else{let g=this.argumentTypes[m];g&&(u=g)}if(!u&&this.strictTypingChecking)throw new Error(`Declaration of ${name} not found`);return u}getLookupType(o){if(!c.hasOwnProperty(o))throw new Error(`unknown typeLookupMap ${o}`);return c[o]}getConstantType(o){if(this.constantTypes[o]){let u=this.constantTypes[o];return u==="Float"?"Number":u}throw new Error(`Type for constant "${o}" not declared`)}toString(){return this._string?this._string:this._string=this.astGeneric(this.getJsAST(),[]).join("").trim()}toJSON(){let o={source:this.source,name:this.name,constants:this.constants,constantTypes:this.constantTypes,isRootKernel:this.isRootKernel,isSubKernel:this.isSubKernel,debug:this.debug,output:this.output,loopMaxIterations:this.loopMaxIterations,argumentNames:this.argumentNames,argumentTypes:this.argumentTypes,argumentSizes:this.argumentSizes,returnType:this.returnType,leadingReturnStatement:this.leadingReturnStatement,followingReturnStatement:this.followingReturnStatement};return{ast:this.ast,settings:o}}getType(o){if(Array.isArray(o))return this.getType(o[o.length-1]);switch(o.type){case"BlockStatement":return this.getType(o.body);case"ArrayExpression":switch(this.getType(o.elements[0])){case"Array(2)":case"Array(3)":case"Array(4)":return`Matrix(${o.elements.length})`}return`Array(${o.elements.length})`;case"Literal":let m=this.astKey(o);return this.literalTypes[m]?this.literalTypes[m]:Number.isInteger(o.value)?"LiteralInteger":o.value===!0||o.value===!1?"Boolean":"Number";case"AssignmentExpression":return this.getType(o.left);case"CallExpression":if(this.isAstMathFunction(o))return"Number";if(!o.callee||!o.callee.name){if(o.callee.type==="SequenceExpression"&&o.callee.expressions[o.callee.expressions.length-1].property.name){let E=o.callee.expressions[o.callee.expressions.length-1].property.name;return this.inferArgumentTypesIfNeeded(E,o.arguments),this.lookupReturnType(E,o,this)}if(this.getVariableSignature(o.callee,!0)==="this.color")return null;if(o.callee.type==="MemberExpression"&&o.callee.object&&o.callee.property&&o.callee.property.name&&o.arguments){let E=o.callee.property.name;return this.inferArgumentTypesIfNeeded(E,o.arguments),this.lookupReturnType(E,o,this)}throw this.astErrorOutput("Unknown call expression",o)}if(o.callee&&o.callee.name){let E=o.callee.name;return this.inferArgumentTypesIfNeeded(E,o.arguments),this.lookupReturnType(E,o,this)}throw this.astErrorOutput(`Unhandled getType Type "${o.type}"`,o);case"LogicalExpression":return"Boolean";case"BinaryExpression":switch(o.operator){case"%":case"/":if(this.fixIntegerDivisionAccuracy)return"Number";break;case">":case"<":return"Boolean";case"&":case"|":case"^":case"<<":case">>":case">>>":return"Integer"}let g=this.getType(o.left);if(this.isState("skip-literal-correction"))return g;if(g==="LiteralInteger"){let E=this.getType(o.right);return E==="LiteralInteger"?o.left.value%1===0?"Integer":"Float":E}return c[g]||g;case"UpdateExpression":return this.getType(o.argument);case"UnaryExpression":return o.operator==="~"?"Integer":this.getType(o.argument);case"VariableDeclaration":{let E=o.declarations,_;for(let M=0;M<E.length;M++){let A=E[M];_=this.getType(A)}if(!_)throw this.astErrorOutput("Unable to find type for declaration",o);return _}case"VariableDeclarator":let y=this.getDeclaration(o.id);if(!y)throw this.astErrorOutput("Unable to find declarator",o);if(!y.valueType)throw this.astErrorOutput("Unable to find declarator valueType",o);return y.valueType;case"Identifier":if(o.name==="Infinity")return"Number";if(this.isAstVariable(o)&&this.getVariableSignature(o)==="value")return this.getCheckVariableType(o);let v=this.findIdentifierOrigin(o);return v&&v.init?this.getType(v.init):null;case"ReturnStatement":return this.getType(o.argument);case"MemberExpression":if(this.isAstMathFunction(o)){switch(o.property.name){case"ceil":return"Integer";case"floor":return"Integer";case"round":return"Integer"}return"Number"}if(this.isAstVariable(o)){switch(this.getVariableSignature(o)){case"value[]":return this.getLookupType(this.getCheckVariableType(o.object));case"value[][]":return this.getLookupType(this.getCheckVariableType(o.object.object));case"value[][][]":return this.getLookupType(this.getCheckVariableType(o.object.object.object));case"value[][][][]":return this.getLookupType(this.getCheckVariableType(o.object.object.object.object));case"value.thread.value":case"this.thread.value":return"Integer";case"this.output.value":return this.dynamicOutput?"Integer":"LiteralInteger";case"this.constants.value":return this.getConstantType(o.property.name);case"this.constants.value[]":return this.getLookupType(this.getConstantType(o.object.property.name));case"this.constants.value[][]":return this.getLookupType(this.getConstantType(o.object.object.property.name));case"this.constants.value[][][]":return this.getLookupType(this.getConstantType(o.object.object.object.property.name));case"this.constants.value[][][][]":return this.getLookupType(this.getConstantType(o.object.object.object.object.property.name));case"fn()[]":case"fn()[][]":case"fn()[][][]":return this.getLookupType(this.getType(o.object));case"value.value":if(this.isAstMathVariable(o))return"Number";switch(o.property.name){case"r":case"g":case"b":case"a":return this.getLookupType(this.getCheckVariableType(o.object))}case"[][]":return"Number"}throw this.astErrorOutput("Unhandled getType MemberExpression",o)}throw this.astErrorOutput("Unhandled getType MemberExpression",o);case"ConditionalExpression":return this.getType(o.consequent);case"FunctionDeclaration":case"FunctionExpression":let w=this.findLastReturn(o.body);return w?this.getType(w):null;case"IfStatement":return this.getType(o.consequent);case"SequenceExpression":return this.getType(o.expressions[o.expressions.length-1]);default:throw this.astErrorOutput(`Unhandled getType Type "${o.type}"`,o)}}getCheckVariableType(o){let u=this.getVariableType(o);if(!u)throw this.astErrorOutput(`${o.type} is not defined`,o);return u}inferArgumentTypesIfNeeded(o,u){for(let m=0;m<u.length;m++){if(!this.needsArgumentType(o,m))continue;let g=this.getType(u[m]);if(!g)throw this.astErrorOutput(`Unable to infer argument ${m}`,u[m]);this.assignArgumentType(o,m,g)}}isAstMathVariable(o){let u=["E","PI","SQRT2","SQRT1_2","LN2","LN10","LOG2E","LOG10E"];return o.type==="MemberExpression"&&o.object&&o.object.type==="Identifier"&&o.object.name==="Math"&&o.property&&o.property.type==="Identifier"&&u.indexOf(o.property.name)>-1}isAstMathFunction(o){let u=["abs","acos","acosh","asin","asinh","atan","atan2","atanh","cbrt","ceil","clz32","cos","cosh","expm1","exp","floor","fround","imul","log","log2","log10","log1p","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc"];return o.type==="CallExpression"&&o.callee&&o.callee.type==="MemberExpression"&&o.callee.object&&o.callee.object.type==="Identifier"&&o.callee.object.name==="Math"&&o.callee.property&&o.callee.property.type==="Identifier"&&u.indexOf(o.callee.property.name)>-1}isAstVariable(o){return o.type==="Identifier"||o.type==="MemberExpression"}isSafe(o){return this.isSafeDependencies(this.getDependencies(o))}isSafeDependencies(o){return o&&o.every?o.every(u=>u.isSafe):!0}getDependencies(o,u,m){if(u||(u=[]),!o)return null;if(Array.isArray(o)){for(let g=0;g<o.length;g++)this.getDependencies(o[g],u,m);return u}switch(o.type){case"AssignmentExpression":return this.getDependencies(o.left,u,m),this.getDependencies(o.right,u,m),u;case"ConditionalExpression":return this.getDependencies(o.test,u,m),this.getDependencies(o.alternate,u,m),this.getDependencies(o.consequent,u,m),u;case"Literal":u.push({origin:"literal",value:o.value,isSafe:m===!0?!1:o.value>-1/0&&o.value<1/0&&!isNaN(o.value)});break;case"VariableDeclarator":return this.getDependencies(o.init,u,m);case"Identifier":let g=this.getDeclaration(o);if(g)u.push({name:o.name,origin:"declaration",isSafe:m?!1:this.isSafeDependencies(g.dependencies)});else if(this.argumentNames.indexOf(o.name)>-1)u.push({name:o.name,origin:"argument",isSafe:!1});else if(this.strictTypingChecking)throw new Error(`Cannot find identifier origin "${o.name}"`);break;case"FunctionDeclaration":return this.getDependencies(o.body.body[o.body.body.length-1],u,m);case"ReturnStatement":return this.getDependencies(o.argument,u);case"BinaryExpression":case"LogicalExpression":return m=o.operator==="/"||o.operator==="*",this.getDependencies(o.left,u,m),this.getDependencies(o.right,u,m),u;case"UnaryExpression":case"UpdateExpression":return this.getDependencies(o.argument,u,m);case"VariableDeclaration":return this.getDependencies(o.declarations,u,m);case"ArrayExpression":return u.push({origin:"declaration",isSafe:!0}),u;case"CallExpression":return u.push({origin:"function",isSafe:!0}),u;case"MemberExpression":let y=this.getMemberExpressionDetails(o);switch(y.signature){case"value[]":this.getDependencies(o.object,u,m);break;case"value[][]":this.getDependencies(o.object.object,u,m);break;case"value[][][]":this.getDependencies(o.object.object.object,u,m);break;case"this.output.value":this.dynamicOutput&&u.push({name:y.name,origin:"output",isSafe:!1});break}if(y)return y.property&&this.getDependencies(y.property,u,m),y.xProperty&&this.getDependencies(y.xProperty,u,m),y.yProperty&&this.getDependencies(y.yProperty,u,m),y.zProperty&&this.getDependencies(y.zProperty,u,m),u;case"SequenceExpression":return this.getDependencies(o.expressions,u,m);default:throw this.astErrorOutput(`Unhandled type ${o.type} in getDependencies`,o)}return u}getVariableSignature(o,u){if(!this.isAstVariable(o))throw new Error(`ast of type "${o.type}" is not a variable signature`);if(o.type==="Identifier")return"value";let m=[];for(;o;)o.computed?m.push("[]"):o.type==="ThisExpression"?m.unshift("this"):o.property&&o.property.name?o.property.name==="x"||o.property.name==="y"||o.property.name==="z"?m.unshift(u?"."+o.property.name:".value"):o.property.name==="constants"||o.property.name==="thread"||o.property.name==="output"?m.unshift("."+o.property.name):m.unshift(u?"."+o.property.name:".value"):o.name?m.unshift(u?o.name:"value"):o.callee&&o.callee.name?m.unshift(u?o.callee.name+"()":"fn()"):o.elements?m.unshift("[]"):m.unshift("unknown"),o=o.object;let g=m.join("");return u||["value","value[]","value[][]","value[][][]","value[][][][]","value.value","value.thread.value","this.thread.value","this.output.value","this.constants.value","this.constants.value[]","this.constants.value[][]","this.constants.value[][][]","this.constants.value[][][][]","fn()[]","fn()[][]","fn()[][][]","[][]"].indexOf(g)>-1?g:null}build(){return this.toString().length>0}astGeneric(o,u){if(o===null)throw this.astErrorOutput("NULL ast",o);if(Array.isArray(o)){for(let m=0;m<o.length;m++)this.astGeneric(o[m],u);return u}switch(o.type){case"FunctionDeclaration":return this.astFunctionDeclaration(o,u);case"FunctionExpression":return this.astFunctionExpression(o,u);case"ReturnStatement":return this.astReturnStatement(o,u);case"Literal":return this.astLiteral(o,u);case"BinaryExpression":return this.astBinaryExpression(o,u);case"Identifier":return this.astIdentifierExpression(o,u);case"AssignmentExpression":return this.astAssignmentExpression(o,u);case"ExpressionStatement":return this.astExpressionStatement(o,u);case"EmptyStatement":return this.astEmptyStatement(o,u);case"BlockStatement":return this.astBlockStatement(o,u);case"IfStatement":return this.astIfStatement(o,u);case"SwitchStatement":return this.astSwitchStatement(o,u);case"BreakStatement":return this.astBreakStatement(o,u);case"ContinueStatement":return this.astContinueStatement(o,u);case"ForStatement":return this.astForStatement(o,u);case"WhileStatement":return this.astWhileStatement(o,u);case"DoWhileStatement":return this.astDoWhileStatement(o,u);case"VariableDeclaration":return this.astVariableDeclaration(o,u);case"VariableDeclarator":return this.astVariableDeclarator(o,u);case"ThisExpression":return this.astThisExpression(o,u);case"SequenceExpression":return this.astSequenceExpression(o,u);case"UnaryExpression":return this.astUnaryExpression(o,u);case"UpdateExpression":return this.astUpdateExpression(o,u);case"LogicalExpression":return this.astLogicalExpression(o,u);case"MemberExpression":return this.astMemberExpression(o,u);case"CallExpression":return this.astCallExpression(o,u);case"ArrayExpression":return this.astArrayExpression(o,u);case"DebuggerStatement":return this.astDebuggerStatement(o,u);case"ConditionalExpression":return this.astConditionalExpression(o,u)}throw this.astErrorOutput("Unknown ast type : "+o.type,o)}astErrorOutput(o,u){if(typeof this.source!="string")return new Error(o);let m=a.getAstString(this.source,u),y=this.source.substr(u.start).split(/\n/),v=y.length>0?y[y.length-1]:0;return new Error(`${o} on line ${y.length}, position ${v.length}:
 ${m}`)}astDebuggerStatement(o,u){return u}astConditionalExpression(o,u){if(o.type!=="ConditionalExpression")throw this.astErrorOutput("Not a conditional expression",o);return u.push("("),this.astGeneric(o.test,u),u.push("?"),this.astGeneric(o.consequent,u),u.push(":"),this.astGeneric(o.alternate,u),u.push(")"),u}astFunction(o,u){throw new Error(`"astFunction" not defined on ${this.constructor.name}`)}astFunctionDeclaration(o,u){return this.isChildFunction(o)?u:this.astFunction(o,u)}astFunctionExpression(o,u){return this.isChildFunction(o)?u:this.astFunction(o,u)}isChildFunction(o){for(let u=0;u<this.functions.length;u++)if(this.functions[u]===o)return!0;return!1}astReturnStatement(o,u){return u}astLiteral(o,u){return this.literalTypes[this.astKey(o)]="Number",u}astBinaryExpression(o,u){return u}astIdentifierExpression(o,u){return u}astAssignmentExpression(o,u){return u}astExpressionStatement(o,u){return this.astGeneric(o.expression,u),u.push(";"),u}astEmptyStatement(o,u){return u}astBlockStatement(o,u){return u}astIfStatement(o,u){return u}astSwitchStatement(o,u){return u}astBreakStatement(o,u){return u.push("break;"),u}astContinueStatement(o,u){return u.push(`continue;
`),u}astForStatement(o,u){return u}astWhileStatement(o,u){return u}astDoWhileStatement(o,u){return u}astVariableDeclarator(o,u){return this.astGeneric(o.id,u),o.init!==null&&(u.push("="),this.astGeneric(o.init,u)),u}astThisExpression(o,u){return u}astSequenceExpression(o,u){let{expressions:m}=o,g=[];for(let y=0;y<m.length;y++){let v=m[y],w=[];this.astGeneric(v,w),g.push(w.join(""))}return g.length>1?u.push("(",g.join(","),")"):u.push(g[0]),u}astUnaryExpression(o,u){return this.checkAndUpconvertBitwiseUnary(o,u)||(o.prefix?(u.push(o.operator),this.astGeneric(o.argument,u)):(this.astGeneric(o.argument,u),u.push(o.operator))),u}checkAndUpconvertBitwiseUnary(o,u){}astUpdateExpression(o,u){return o.prefix?(u.push(o.operator),this.astGeneric(o.argument,u)):(this.astGeneric(o.argument,u),u.push(o.operator)),u}astLogicalExpression(o,u){return u.push("("),this.astGeneric(o.left,u),u.push(o.operator),this.astGeneric(o.right,u),u.push(")"),u}astMemberExpression(o,u){return u}astCallExpression(o,u){return u}astArrayExpression(o,u){return u}getMemberExpressionDetails(o){if(o.type!=="MemberExpression")throw this.astErrorOutput(`Expression ${o.type} not a MemberExpression`,o);let u=null,m=null,g=this.getVariableSignature(o);switch(g){case"value":return null;case"value.thread.value":case"this.thread.value":case"this.output.value":return{signature:g,type:"Integer",name:o.property.name};case"value[]":if(typeof o.object.name!="string")throw this.astErrorOutput("Unexpected expression",o);return u=o.object.name,{name:u,origin:"user",signature:g,type:this.getVariableType(o.object),xProperty:o.property};case"value[][]":if(typeof o.object.object.name!="string")throw this.astErrorOutput("Unexpected expression",o);return u=o.object.object.name,{name:u,origin:"user",signature:g,type:this.getVariableType(o.object.object),yProperty:o.object.property,xProperty:o.property};case"value[][][]":if(typeof o.object.object.object.name!="string")throw this.astErrorOutput("Unexpected expression",o);return u=o.object.object.object.name,{name:u,origin:"user",signature:g,type:this.getVariableType(o.object.object.object),zProperty:o.object.object.property,yProperty:o.object.property,xProperty:o.property};case"value[][][][]":if(typeof o.object.object.object.object.name!="string")throw this.astErrorOutput("Unexpected expression",o);return u=o.object.object.object.object.name,{name:u,origin:"user",signature:g,type:this.getVariableType(o.object.object.object.object),zProperty:o.object.object.property,yProperty:o.object.property,xProperty:o.property};case"value.value":if(typeof o.property.name!="string")throw this.astErrorOutput("Unexpected expression",o);if(this.isAstMathVariable(o))return u=o.property.name,{name:u,origin:"Math",type:"Number",signature:g};switch(o.property.name){case"r":case"g":case"b":case"a":return u=o.object.name,{name:u,property:o.property.name,origin:"user",signature:g,type:"Number"};default:throw this.astErrorOutput("Unexpected expression",o)}case"this.constants.value":if(typeof o.property.name!="string")throw this.astErrorOutput("Unexpected expression",o);if(u=o.property.name,m=this.getConstantType(u),!m)throw this.astErrorOutput("Constant has no type",o);return{name:u,type:m,origin:"constants",signature:g};case"this.constants.value[]":if(typeof o.object.property.name!="string")throw this.astErrorOutput("Unexpected expression",o);if(u=o.object.property.name,m=this.getConstantType(u),!m)throw this.astErrorOutput("Constant has no type",o);return{name:u,type:m,origin:"constants",signature:g,xProperty:o.property};case"this.constants.value[][]":{if(typeof o.object.object.property.name!="string")throw this.astErrorOutput("Unexpected expression",o);if(u=o.object.object.property.name,m=this.getConstantType(u),!m)throw this.astErrorOutput("Constant has no type",o);return{name:u,type:m,origin:"constants",signature:g,yProperty:o.object.property,xProperty:o.property}}case"this.constants.value[][][]":{if(typeof o.object.object.object.property.name!="string")throw this.astErrorOutput("Unexpected expression",o);if(u=o.object.object.object.property.name,m=this.getConstantType(u),!m)throw this.astErrorOutput("Constant has no type",o);return{name:u,type:m,origin:"constants",signature:g,zProperty:o.object.object.property,yProperty:o.object.property,xProperty:o.property}}case"fn()[]":case"fn()[][]":case"[][]":return{signature:g,property:o.property};default:throw this.astErrorOutput("Unexpected expression",o)}}findIdentifierOrigin(o){let u=[this.ast];for(;u.length>0;){let m=u[0];if(m.type==="VariableDeclarator"&&m.id&&m.id.name&&m.id.name===o.name)return m;if(u.shift(),m.argument)u.push(m.argument);else if(m.body)u.push(m.body);else if(m.declarations)u.push(m.declarations);else if(Array.isArray(m))for(let g=0;g<m.length;g++)u.push(m[g])}return null}findLastReturn(o){let u=[o||this.ast];for(;u.length>0;){let m=u.pop();if(m.type==="ReturnStatement")return m;if(m.type!=="FunctionDeclaration")if(m.argument)u.push(m.argument);else if(m.body)u.push(m.body);else if(m.declarations)u.push(m.declarations);else if(Array.isArray(m))for(let g=0;g<m.length;g++)u.push(m[g]);else m.consequent?u.push(m.consequent):m.cases&&u.push(m.cases)}return null}getInternalVariableName(o){return this._internalVariableNames.hasOwnProperty(o)||(this._internalVariableNames[o]=0),this._internalVariableNames[o]++,this._internalVariableNames[o]===1?o:o+this._internalVariableNames[o]}astKey(o,u=","){if(!o.start||!o.end)throw new Error("AST start and end needed");return`${o.start}${u}${o.end}`}}let c={Number:"Number",Float:"Float",Integer:"Integer",Array:"Number","Array(2)":"Number","Array(3)":"Number","Array(4)":"Number","Matrix(2)":"Number","Matrix(3)":"Number","Matrix(4)":"Number",Array2D:"Number",Array3D:"Number",Input:"Number",HTMLCanvas:"Array(4)",HTMLImage:"Array(4)",HTMLVideo:"Array(4)",HTMLImageArray:"Array(4)",NumberTexture:"Number",MemoryOptimizedNumberTexture:"Number","Array1D(2)":"Array(2)","Array1D(3)":"Array(3)","Array1D(4)":"Array(4)","Array2D(2)":"Array(2)","Array2D(3)":"Array(3)","Array2D(4)":"Array(4)","Array3D(2)":"Array(2)","Array3D(3)":"Array(3)","Array3D(4)":"Array(4)","ArrayTexture(1)":"Number","ArrayTexture(2)":"Array(2)","ArrayTexture(3)":"Array(3)","ArrayTexture(4)":"Array(4)"};i.exports={FunctionNode:d}},{"../utils":114,"./function-tracer":11,acorn:1}],11:[function(n,i,s){let{utils:r}=n("../utils");function a(c){return c.length>0?c[c.length-1]:null}let f={trackIdentifiers:"trackIdentifiers",memberExpression:"memberExpression",inForLoopInit:"inForLoopInit"};class d{constructor(h){this.runningContexts=[],this.functionContexts=[],this.contexts=[],this.functionCalls=[],this.declarations=[],this.identifiers=[],this.functions=[],this.returnStatements=[],this.trackedIdentifiers=null,this.states=[],this.newFunctionContext(),this.scan(h)}isState(h){return this.states[this.states.length-1]===h}hasState(h){return this.states.indexOf(h)>-1}pushState(h){this.states.push(h)}popState(h){if(this.isState(h))this.states.pop();else throw new Error(`Cannot pop the non-active state "${h}"`)}get currentFunctionContext(){return a(this.functionContexts)}get currentContext(){return a(this.runningContexts)}newFunctionContext(){let h={"@contextType":"function"};this.contexts.push(h),this.functionContexts.push(h)}newContext(h){let o=Object.assign({"@contextType":"const/let"},this.currentContext);this.contexts.push(o),this.runningContexts.push(o),h();let{currentFunctionContext:u}=this;for(let m in u)!u.hasOwnProperty(m)||o.hasOwnProperty(m)||(o[m]=u[m]);return this.runningContexts.pop(),o}useFunctionContext(h){let o=a(this.functionContexts);this.runningContexts.push(o),h(),this.runningContexts.pop()}getIdentifiers(h){let o=this.trackedIdentifiers=[];return this.pushState(f.trackIdentifiers),h(),this.trackedIdentifiers=null,this.popState(f.trackIdentifiers),o}getDeclaration(h){let{currentContext:o,currentFunctionContext:u,runningContexts:m}=this,g=o[h]||u[h]||null;if(!g&&o===u&&m.length>0){let y=m[m.length-2];if(y[h])return y[h]}return g}scan(h){if(!!h){if(Array.isArray(h)){for(let o=0;o<h.length;o++)this.scan(h[o]);return}switch(h.type){case"Program":this.useFunctionContext(()=>{this.scan(h.body)});break;case"BlockStatement":this.newContext(()=>{this.scan(h.body)});break;case"AssignmentExpression":case"LogicalExpression":this.scan(h.left),this.scan(h.right);break;case"BinaryExpression":this.scan(h.left),this.scan(h.right);break;case"UpdateExpression":if(h.operator==="++"){let o=this.getDeclaration(h.argument.name);o&&(o.suggestedType="Integer")}this.scan(h.argument);break;case"UnaryExpression":this.scan(h.argument);break;case"VariableDeclaration":h.kind==="var"?this.useFunctionContext(()=>{h.declarations=r.normalizeDeclarations(h),this.scan(h.declarations)}):(h.declarations=r.normalizeDeclarations(h),this.scan(h.declarations));break;case"VariableDeclarator":{let{currentContext:o}=this,u=this.hasState(f.inForLoopInit),m={ast:h,context:o,name:h.id.name,origin:"declaration",inForLoopInit:u,inForLoopTest:null,assignable:o===this.currentFunctionContext||!u&&!o.hasOwnProperty(h.id.name),suggestedType:null,valueType:null,dependencies:null,isSafe:null};o[h.id.name]||(o[h.id.name]=m),this.declarations.push(m),this.scan(h.id),this.scan(h.init);break}case"FunctionExpression":case"FunctionDeclaration":this.runningContexts.length===0?this.scan(h.body):this.functions.push(h);break;case"IfStatement":this.scan(h.test),this.scan(h.consequent),h.alternate&&this.scan(h.alternate);break;case"ForStatement":{let o,u=this.newContext(()=>{this.pushState(f.inForLoopInit),this.scan(h.init),this.popState(f.inForLoopInit),o=this.getIdentifiers(()=>{this.scan(h.test)}),this.scan(h.update),this.newContext(()=>{this.scan(h.body)})});if(o)for(let m in u)m!=="@contextType"&&o.indexOf(m)>-1&&(u[m].inForLoopTest=!0);break}case"DoWhileStatement":case"WhileStatement":this.newContext(()=>{this.scan(h.body),this.scan(h.test)});break;case"Identifier":{this.isState(f.trackIdentifiers)&&this.trackedIdentifiers.push(h.name),this.identifiers.push({context:this.currentContext,declaration:this.getDeclaration(h.name),ast:h});break}case"ReturnStatement":this.returnStatements.push(h),this.scan(h.argument);break;case"MemberExpression":this.pushState(f.memberExpression),this.scan(h.object),this.scan(h.property),this.popState(f.memberExpression);break;case"ExpressionStatement":this.scan(h.expression);break;case"SequenceExpression":this.scan(h.expressions);break;case"CallExpression":this.functionCalls.push({context:this.currentContext,ast:h}),this.scan(h.arguments);break;case"ArrayExpression":this.scan(h.elements);break;case"ConditionalExpression":this.scan(h.test),this.scan(h.alternate),this.scan(h.consequent);break;case"SwitchStatement":this.scan(h.discriminant),this.scan(h.cases);break;case"SwitchCase":this.scan(h.test),this.scan(h.consequent);break;case"ThisExpression":case"Literal":case"DebuggerStatement":case"EmptyStatement":case"BreakStatement":case"ContinueStatement":break;default:throw new Error(`unhandled type "${h.type}"`)}}}}i.exports={FunctionTracer:d}},{"../utils":114}],12:[function(n,i,s){let{glWiretap:r}=n("gl-wiretap"),{utils:a}=n("../../utils");function f(m){return m.toString().replace("=>","").replace(/^function /,"").replace(/utils[.]/g,"/*utils.*/")}function d(m,g,y,v,w){y.built||y.build.apply(y,g),g=g?Array.from(g).map(oe=>{switch(typeof oe){case"boolean":return new Boolean(oe);case"number":return new Number(oe);default:return oe}}):null;let E=[],_=[],M=r(y.context,{useTrackablePrimitives:!0,onReadPixels:oe=>{if(Me.subKernels){if(!A)_.push(`    const result = { result: ${c(oe,Me)} };`),A=!0;else{let Ie=Me.subKernels[I++].property;_.push(`    result${isNaN(Ie)?"."+Ie:`[${Ie}]`} = ${c(oe,Me)};`)}I===Me.subKernels.length&&_.push("    return result;");return}oe?_.push(`    return ${c(oe,Me)};`):_.push("    return null;")},onUnrecognizedArgumentLookup:oe=>{let Ie=u(oe,Me.kernelArguments,[],M,E);if(Ie)return Ie;let ie=u(oe,Me.kernelConstants,D?Object.keys(D).map(se=>D[se]):[],M,E);return ie||null}}),A=!1,I=0,{source:C,canvas:T,output:b,pipeline:L,graphical:P,loopMaxIterations:X,constants:D,optimizeFloatMemory:z,precision:H,fixIntegerDivisionAccuracy:B,functions:$,nativeFunctions:j,subKernels:K,immutable:ne,argumentTypes:Z,constantTypes:le,kernelArguments:ce,kernelConstants:de,tactic:Q}=y,Me=new m(C,{canvas:T,context:M,checkContext:!1,output:b,pipeline:L,graphical:P,loopMaxIterations:X,constants:D,optimizeFloatMemory:z,precision:H,fixIntegerDivisionAccuracy:B,functions:$,nativeFunctions:j,subKernels:K,immutable:ne,argumentTypes:Z,constantTypes:le,tactic:Q}),ve=[];if(M.setIndent(2),Me.build.apply(Me,g),ve.push(M.toString()),M.reset(),Me.kernelArguments.forEach((oe,Ie)=>{switch(oe.type){case"Integer":case"Boolean":case"Number":case"Float":case"Array":case"Array(2)":case"Array(3)":case"Array(4)":case"HTMLCanvas":case"HTMLImage":case"HTMLVideo":M.insertVariable(`uploadValue_${oe.name}`,oe.uploadValue);break;case"HTMLImageArray":for(let ie=0;ie<g[Ie].length;ie++){let se=g[Ie];M.insertVariable(`uploadValue_${oe.name}[${ie}]`,se[ie])}break;case"Input":M.insertVariable(`uploadValue_${oe.name}`,oe.uploadValue);break;case"MemoryOptimizedNumberTexture":case"NumberTexture":case"Array1D(2)":case"Array1D(3)":case"Array1D(4)":case"Array2D(2)":case"Array2D(3)":case"Array2D(4)":case"Array3D(2)":case"Array3D(3)":case"Array3D(4)":case"ArrayTexture(1)":case"ArrayTexture(2)":case"ArrayTexture(3)":case"ArrayTexture(4)":M.insertVariable(`uploadValue_${oe.name}`,g[Ie].texture);break;default:throw new Error(`unhandled kernelArgumentType insertion for glWiretap of type ${oe.type}`)}}),ve.push("/** start of injected functions **/"),ve.push(`function ${f(a.flattenTo)}`),ve.push(`function ${f(a.flatten2dArrayTo)}`),ve.push(`function ${f(a.flatten3dArrayTo)}`),ve.push(`function ${f(a.flatten4dArrayTo)}`),ve.push(`function ${f(a.isArray)}`),Me.renderOutput!==Me.renderTexture&&Me.formatValues&&ve.push(`  const renderOutput = function ${f(Me.formatValues)};`),ve.push("/** end of injected functions **/"),ve.push(`  const innerKernel = function (${Me.kernelArguments.map(oe=>oe.varName).join(", ")}) {`),M.setIndent(4),Me.run.apply(Me,g),Me.renderKernels?Me.renderKernels():Me.renderOutput&&Me.renderOutput(),ve.push("    /** start setup uploads for kernel values **/"),Me.kernelArguments.forEach(oe=>{ve.push("    "+oe.getStringValueHandler().split(`
`).join(`
    `))}),ve.push("    /** end setup uploads for kernel values **/"),ve.push(M.toString()),Me.renderOutput===Me.renderTexture){M.reset();let oe=M.getContextVariableName(Me.framebuffer);if(Me.renderKernels){let Ie=Me.renderKernels(),ie=M.getContextVariableName(Me.texture.texture);ve.push(`    return {
            result: {
              texture: ${ie},
              type: '${Ie.result.type}',
              toArray: ${o(Ie.result,ie,oe)}
            },`);let{subKernels:se,mappedTextures:ae}=Me;for(let xe=0;xe<se.length;xe++){let me=ae[xe],Ne=se[xe],Pe=Ie[Ne.property],Fe=M.getContextVariableName(me.texture);ve.push(`
            ${Ne.property}: {
              texture: ${Fe},
              type: '${Pe.type}',
              toArray: ${o(Pe,Fe,oe)}
            },`)}ve.push("    };")}else{let Ie=Me.renderOutput(),ie=M.getContextVariableName(Me.texture.texture);ve.push(`    return {
              texture: ${ie},
              type: '${Ie.type}',
              toArray: ${o(Ie,ie,oe)}
            };`)}}ve.push(`    ${w?`
`+w+"    ":""}`),ve.push(_.join(`
`)),ve.push("  };"),Me.graphical&&(ve.push(h(Me)),ve.push("  innerKernel.getPixels = getPixels;")),ve.push("  return innerKernel;");let Ve=[];return de.forEach(oe=>{Ve.push(`${oe.getStringValueHandler()}`)}),`function kernel(settings) {
        const { context, constants } = settings;
        ${Ve.join("")}
        ${v||""}
      ${ve.join(`
`)}
      }`}function c(m,g){let y=g.precision==="single"?m:`new Float32Array(${m}.buffer)`;return g.output[2]?`renderOutput(${y}, ${g.output[0]}, ${g.output[1]}, ${g.output[2]})`:g.output[1]?`renderOutput(${y}, ${g.output[0]}, ${g.output[1]})`:`renderOutput(${y}, ${g.output[0]})`}function h(m){let g=m.getPixels.toString(),y=!/^function/.test(g);return a.flattenFunctionToString(`${y?"function ":""}${g}`,{findDependency:(v,w)=>v==="utils"?`const ${w} = ${a[w].toString()};`:null,thisLookup:v=>{if(v==="context")return null;if(m.hasOwnProperty(v))return JSON.stringify(m[v]);throw new Error(`unhandled thisLookup ${v}`)}})}function o(m,g,y){let v=m.toArray.toString(),w=!/^function/.test(v),E=a.flattenFunctionToString(`${w?"function ":""}${v}`,{findDependency:(_,M)=>{if(_==="utils")return`const ${M} = ${a[M].toString()};`;if(_==="this")return M==="framebuffer"?"":`${w?"function ":""}${m[M].toString()}`;throw new Error("unhandled fromObject")},thisLookup:(_,M)=>{if(_==="texture")return g;if(_==="context")return M?null:"gl";if(m.hasOwnProperty(_))return JSON.stringify(m[_]);throw new Error(`unhandled thisLookup ${_}`)}});return`() => {
        function framebuffer() { return ${y}; };
        ${E}
        return toArray();
        }`}function u(m,g,y,v,w){if(m===null||g===null)return null;switch(typeof m){case"boolean":case"number":return null}if(typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement)for(let E=0;E<g.length;E++){let _=g[E];if(_.type!=="HTMLImageArray"&&_||_.uploadValue!==m)continue;let M=y[E].indexOf(m);if(M===-1)continue;let A=`uploadValue_${_.name}[${M}]`;return v.insertVariable(A,m),A}for(let E=0;E<g.length;E++){let _=g[E];if(m!==_.uploadValue)continue;let M=`uploadValue_${_.name}`;return v.insertVariable(M,_),M}return null}i.exports={glKernelString:d}},{"../../utils":114,"gl-wiretap":3}],13:[function(n,i,s){let{Kernel:r}=n("../kernel"),{utils:a}=n("../../utils"),{GLTextureArray2Float:f}=n("./texture/array-2-float"),{GLTextureArray2Float2D:d}=n("./texture/array-2-float-2d"),{GLTextureArray2Float3D:c}=n("./texture/array-2-float-3d"),{GLTextureArray3Float:h}=n("./texture/array-3-float"),{GLTextureArray3Float2D:o}=n("./texture/array-3-float-2d"),{GLTextureArray3Float3D:u}=n("./texture/array-3-float-3d"),{GLTextureArray4Float:m}=n("./texture/array-4-float"),{GLTextureArray4Float2D:g}=n("./texture/array-4-float-2d"),{GLTextureArray4Float3D:y}=n("./texture/array-4-float-3d"),{GLTextureFloat:v}=n("./texture/float"),{GLTextureFloat2D:w}=n("./texture/float-2d"),{GLTextureFloat3D:E}=n("./texture/float-3d"),{GLTextureMemoryOptimized:_}=n("./texture/memory-optimized"),{GLTextureMemoryOptimized2D:M}=n("./texture/memory-optimized-2d"),{GLTextureMemoryOptimized3D:A}=n("./texture/memory-optimized-3d"),{GLTextureUnsigned:I}=n("./texture/unsigned"),{GLTextureUnsigned2D:C}=n("./texture/unsigned-2d"),{GLTextureUnsigned3D:T}=n("./texture/unsigned-3d"),{GLTextureGraphical:b}=n("./texture/graphical");class L extends r{static get mode(){return"gpu"}static getIsFloatRead(){let D=`function kernelFunction() {
            return 1;
          }`,z=new this(D,{context:this.testContext,canvas:this.testCanvas,validate:!1,output:[1],precision:"single",returnType:"Number",tactic:"speed"});z.build(),z.run();let H=z.renderOutput();return z.destroy(!0),H[0]===1}static getIsIntegerDivisionAccurate(){function D($,j){return $[this.thread.x]/j[this.thread.x]}let z=new this(D.toString(),{context:this.testContext,canvas:this.testCanvas,validate:!1,output:[2],returnType:"Number",precision:"unsigned",tactic:"speed"}),H=[[6,6030401],[3,3991]];z.build.apply(z,H),z.run.apply(z,H);let B=z.renderOutput();return z.destroy(!0),B[0]===2&&B[1]===1511}static getIsSpeedTacticSupported(){function D($){return $[this.thread.x]}let z=new this(D.toString(),{context:this.testContext,canvas:this.testCanvas,validate:!1,output:[4],returnType:"Number",precision:"unsigned",tactic:"speed"}),H=[[0,1,2,3]];z.build.apply(z,H),z.run.apply(z,H);let B=z.renderOutput();return z.destroy(!0),Math.round(B[0])===0&&Math.round(B[1])===1&&Math.round(B[2])===2&&Math.round(B[3])===3}static get testCanvas(){throw new Error(`"testCanvas" not defined on ${this.name}`)}static get testContext(){throw new Error(`"testContext" not defined on ${this.name}`)}static getFeatures(){let D=this.testContext,z=this.getIsDrawBuffers();return Object.freeze({isFloatRead:this.getIsFloatRead(),isIntegerDivisionAccurate:this.getIsIntegerDivisionAccurate(),isSpeedTacticSupported:this.getIsSpeedTacticSupported(),isTextureFloat:this.getIsTextureFloat(),isDrawBuffers:z,kernelMap:z,channelCount:this.getChannelCount(),maxTextureSize:this.getMaxTextureSize(),lowIntPrecision:D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.LOW_INT),lowFloatPrecision:D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.LOW_FLOAT),mediumIntPrecision:D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.MEDIUM_INT),mediumFloatPrecision:D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.MEDIUM_FLOAT),highIntPrecision:D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.HIGH_INT),highFloatPrecision:D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.HIGH_FLOAT)})}static setupFeatureChecks(){throw new Error(`"setupFeatureChecks" not defined on ${this.name}`)}static getSignature(D,z){return D.getVariablePrecisionString()+(z.length>0?":"+z.join(","):"")}setFixIntegerDivisionAccuracy(D){return this.fixIntegerDivisionAccuracy=D,this}setPrecision(D){return this.precision=D,this}setFloatTextures(D){return a.warnDeprecated("method","setFloatTextures","setOptimizeFloatMemory"),this.floatTextures=D,this}static nativeFunctionArguments(D){let z=[],H=[],B=[],$=/^[a-zA-Z_]/,j=/[a-zA-Z_0-9]/,K=0,ne=null,Z=null;for(;K<D.length;){let le=D[K],ce=D[K+1],de=B.length>0?B[B.length-1]:null;if(de==="FUNCTION_ARGUMENTS"&&le==="/"&&ce==="*"){B.push("MULTI_LINE_COMMENT"),K+=2;continue}else if(de==="MULTI_LINE_COMMENT"&&le==="*"&&ce==="/"){B.pop(),K+=2;continue}else if(de==="FUNCTION_ARGUMENTS"&&le==="/"&&ce==="/"){B.push("COMMENT"),K+=2;continue}else if(de==="COMMENT"&&le===`
`){B.pop(),K++;continue}else if(de===null&&le==="("){B.push("FUNCTION_ARGUMENTS"),K++;continue}else if(de==="FUNCTION_ARGUMENTS"){if(le===")"){B.pop();break}if(le==="f"&&ce==="l"&&D[K+2]==="o"&&D[K+3]==="a"&&D[K+4]==="t"&&D[K+5]===" "){B.push("DECLARE_VARIABLE"),Z="float",ne="",K+=6;continue}else if(le==="i"&&ce==="n"&&D[K+2]==="t"&&D[K+3]===" "){B.push("DECLARE_VARIABLE"),Z="int",ne="",K+=4;continue}else if(le==="v"&&ce==="e"&&D[K+2]==="c"&&D[K+3]==="2"&&D[K+4]===" "){B.push("DECLARE_VARIABLE"),Z="vec2",ne="",K+=5;continue}else if(le==="v"&&ce==="e"&&D[K+2]==="c"&&D[K+3]==="3"&&D[K+4]===" "){B.push("DECLARE_VARIABLE"),Z="vec3",ne="",K+=5;continue}else if(le==="v"&&ce==="e"&&D[K+2]==="c"&&D[K+3]==="4"&&D[K+4]===" "){B.push("DECLARE_VARIABLE"),Z="vec4",ne="",K+=5;continue}}else if(de==="DECLARE_VARIABLE"){if(ne===""){if(le===" "){K++;continue}if(!$.test(le))throw new Error("variable name is not expected string")}ne+=le,j.test(ce)||(B.pop(),H.push(ne),z.push(P[Z]))}K++}if(B.length>0)throw new Error("GLSL function was not parsable");return{argumentNames:H,argumentTypes:z}}static nativeFunctionReturnType(D){return P[D.match(/int|float|vec[2-4]/)[0]]}static combineKernels(D,z){D.apply(null,arguments);let{texSize:H,context:B,threadDim:$}=z.texSize,j;if(z.precision==="single"){let K=H[0],ne=Math.ceil(H[1]/4);j=new Float32Array(K*ne*4*4),B.readPixels(0,0,K,ne*4,B.RGBA,B.FLOAT,j)}else{let K=new Uint8Array(H[0]*H[1]*4);B.readPixels(0,0,H[0],H[1],B.RGBA,B.UNSIGNED_BYTE,K),j=new Float32Array(K.buffer)}if(j=j.subarray(0,$[0]*$[1]*$[2]),z.output.length===1)return j;if(z.output.length===2)return a.splitArray(j,z.output[0]);if(z.output.length===3)return a.splitArray(j,z.output[0]*z.output[1]).map(function(ne){return a.splitArray(ne,z.output[0])})}constructor(D,z){super(D,z),this.transferValues=null,this.formatValues=null,this.TextureConstructor=null,this.renderOutput=null,this.renderRawOutput=null,this.texSize=null,this.translatedSource=null,this.compiledFragmentShader=null,this.compiledVertexShader=null,this.switchingKernels=null,this._textureSwitched=null,this._mappedTextureSwitched=null}checkTextureSize(){let{features:D}=this.constructor;if(this.texSize[0]>D.maxTextureSize||this.texSize[1]>D.maxTextureSize)throw new Error(`Texture size [${this.texSize[0]},${this.texSize[1]}] generated by kernel is larger than supported size [${D.maxTextureSize},${D.maxTextureSize}]`)}translateSource(){throw new Error(`"translateSource" not defined on ${this.constructor.name}`)}pickRenderStrategy(D){if(this.graphical)return this.renderRawOutput=this.readPackedPixelsToUint8Array,this.transferValues=z=>z,this.TextureConstructor=b,null;if(this.precision==="unsigned")if(this.renderRawOutput=this.readPackedPixelsToUint8Array,this.transferValues=this.readPackedPixelsToFloat32Array,this.pipeline)switch(this.renderOutput=this.renderTexture,this.subKernels!==null&&(this.renderKernels=this.renderKernelsToTextures),this.returnType){case"LiteralInteger":case"Float":case"Number":case"Integer":return this.output[2]>0?(this.TextureConstructor=T,null):this.output[1]>0?(this.TextureConstructor=C,null):(this.TextureConstructor=I,null);case"Array(2)":case"Array(3)":case"Array(4)":return this.requestFallback(D)}else switch(this.subKernels!==null&&(this.renderKernels=this.renderKernelsToArrays),this.returnType){case"LiteralInteger":case"Float":case"Number":case"Integer":return this.renderOutput=this.renderValues,this.output[2]>0?(this.TextureConstructor=T,this.formatValues=a.erect3DPackedFloat,null):this.output[1]>0?(this.TextureConstructor=C,this.formatValues=a.erect2DPackedFloat,null):(this.TextureConstructor=I,this.formatValues=a.erectPackedFloat,null);case"Array(2)":case"Array(3)":case"Array(4)":return this.requestFallback(D)}else if(this.precision==="single"){if(this.renderRawOutput=this.readFloatPixelsToFloat32Array,this.transferValues=this.readFloatPixelsToFloat32Array,this.pipeline)switch(this.renderOutput=this.renderTexture,this.subKernels!==null&&(this.renderKernels=this.renderKernelsToTextures),this.returnType){case"LiteralInteger":case"Float":case"Number":case"Integer":return this.optimizeFloatMemory?this.output[2]>0?(this.TextureConstructor=A,null):this.output[1]>0?(this.TextureConstructor=M,null):(this.TextureConstructor=_,null):this.output[2]>0?(this.TextureConstructor=E,null):this.output[1]>0?(this.TextureConstructor=w,null):(this.TextureConstructor=v,null);case"Array(2)":return this.output[2]>0?(this.TextureConstructor=c,null):this.output[1]>0?(this.TextureConstructor=d,null):(this.TextureConstructor=f,null);case"Array(3)":return this.output[2]>0?(this.TextureConstructor=u,null):this.output[1]>0?(this.TextureConstructor=o,null):(this.TextureConstructor=h,null);case"Array(4)":return this.output[2]>0?(this.TextureConstructor=y,null):this.output[1]>0?(this.TextureConstructor=g,null):(this.TextureConstructor=m,null)}if(this.renderOutput=this.renderValues,this.subKernels!==null&&(this.renderKernels=this.renderKernelsToArrays),this.optimizeFloatMemory)switch(this.returnType){case"LiteralInteger":case"Float":case"Number":case"Integer":return this.output[2]>0?(this.TextureConstructor=A,this.formatValues=a.erectMemoryOptimized3DFloat,null):this.output[1]>0?(this.TextureConstructor=M,this.formatValues=a.erectMemoryOptimized2DFloat,null):(this.TextureConstructor=_,this.formatValues=a.erectMemoryOptimizedFloat,null);case"Array(2)":return this.output[2]>0?(this.TextureConstructor=c,this.formatValues=a.erect3DArray2,null):this.output[1]>0?(this.TextureConstructor=d,this.formatValues=a.erect2DArray2,null):(this.TextureConstructor=f,this.formatValues=a.erectArray2,null);case"Array(3)":return this.output[2]>0?(this.TextureConstructor=u,this.formatValues=a.erect3DArray3,null):this.output[1]>0?(this.TextureConstructor=o,this.formatValues=a.erect2DArray3,null):(this.TextureConstructor=h,this.formatValues=a.erectArray3,null);case"Array(4)":return this.output[2]>0?(this.TextureConstructor=y,this.formatValues=a.erect3DArray4,null):this.output[1]>0?(this.TextureConstructor=g,this.formatValues=a.erect2DArray4,null):(this.TextureConstructor=m,this.formatValues=a.erectArray4,null)}else switch(this.returnType){case"LiteralInteger":case"Float":case"Number":case"Integer":return this.output[2]>0?(this.TextureConstructor=E,this.formatValues=a.erect3DFloat,null):this.output[1]>0?(this.TextureConstructor=w,this.formatValues=a.erect2DFloat,null):(this.TextureConstructor=v,this.formatValues=a.erectFloat,null);case"Array(2)":return this.output[2]>0?(this.TextureConstructor=c,this.formatValues=a.erect3DArray2,null):this.output[1]>0?(this.TextureConstructor=d,this.formatValues=a.erect2DArray2,null):(this.TextureConstructor=f,this.formatValues=a.erectArray2,null);case"Array(3)":return this.output[2]>0?(this.TextureConstructor=u,this.formatValues=a.erect3DArray3,null):this.output[1]>0?(this.TextureConstructor=o,this.formatValues=a.erect2DArray3,null):(this.TextureConstructor=h,this.formatValues=a.erectArray3,null);case"Array(4)":return this.output[2]>0?(this.TextureConstructor=y,this.formatValues=a.erect3DArray4,null):this.output[1]>0?(this.TextureConstructor=g,this.formatValues=a.erect2DArray4,null):(this.TextureConstructor=m,this.formatValues=a.erectArray4,null)}}else throw new Error(`unhandled precision of "${this.precision}"`);throw new Error(`unhandled return type "${this.returnType}"`)}getKernelString(){throw new Error("abstract method call")}getMainResultTexture(){switch(this.returnType){case"LiteralInteger":case"Float":case"Integer":case"Number":return this.getMainResultNumberTexture();case"Array(2)":return this.getMainResultArray2Texture();case"Array(3)":return this.getMainResultArray3Texture();case"Array(4)":return this.getMainResultArray4Texture();default:throw new Error(`unhandled returnType type ${this.returnType}`)}}getMainResultKernelNumberTexture(){throw new Error("abstract method call")}getMainResultSubKernelNumberTexture(){throw new Error("abstract method call")}getMainResultKernelArray2Texture(){throw new Error("abstract method call")}getMainResultSubKernelArray2Texture(){throw new Error("abstract method call")}getMainResultKernelArray3Texture(){throw new Error("abstract method call")}getMainResultSubKernelArray3Texture(){throw new Error("abstract method call")}getMainResultKernelArray4Texture(){throw new Error("abstract method call")}getMainResultSubKernelArray4Texture(){throw new Error("abstract method call")}getMainResultGraphical(){throw new Error("abstract method call")}getMainResultMemoryOptimizedFloats(){throw new Error("abstract method call")}getMainResultPackedPixels(){throw new Error("abstract method call")}getMainResultString(){return this.graphical?this.getMainResultGraphical():this.precision==="single"?this.optimizeFloatMemory?this.getMainResultMemoryOptimizedFloats():this.getMainResultTexture():this.getMainResultPackedPixels()}getMainResultNumberTexture(){return a.linesToString(this.getMainResultKernelNumberTexture())+a.linesToString(this.getMainResultSubKernelNumberTexture())}getMainResultArray2Texture(){return a.linesToString(this.getMainResultKernelArray2Texture())+a.linesToString(this.getMainResultSubKernelArray2Texture())}getMainResultArray3Texture(){return a.linesToString(this.getMainResultKernelArray3Texture())+a.linesToString(this.getMainResultSubKernelArray3Texture())}getMainResultArray4Texture(){return a.linesToString(this.getMainResultKernelArray4Texture())+a.linesToString(this.getMainResultSubKernelArray4Texture())}getFloatTacticDeclaration(){return`precision ${this.getVariablePrecisionString(this.texSize,this.tactic)} float;
`}getIntTacticDeclaration(){return`precision ${this.getVariablePrecisionString(this.texSize,this.tactic,!0)} int;
`}getSampler2DTacticDeclaration(){return`precision ${this.getVariablePrecisionString(this.texSize,this.tactic)} sampler2D;
`}getSampler2DArrayTacticDeclaration(){return`precision ${this.getVariablePrecisionString(this.texSize,this.tactic)} sampler2DArray;
`}renderTexture(){return this.immutable?this.texture.clone():this.texture}readPackedPixelsToUint8Array(){if(this.precision!=="unsigned")throw new Error('Requires this.precision to be "unsigned"');let{texSize:D,context:z}=this,H=new Uint8Array(D[0]*D[1]*4);return z.readPixels(0,0,D[0],D[1],z.RGBA,z.UNSIGNED_BYTE,H),H}readPackedPixelsToFloat32Array(){return new Float32Array(this.readPackedPixelsToUint8Array().buffer)}readFloatPixelsToFloat32Array(){if(this.precision!=="single")throw new Error('Requires this.precision to be "single"');let{texSize:D,context:z}=this,H=D[0],B=D[1],$=new Float32Array(H*B*4);return z.readPixels(0,0,H,B,z.RGBA,z.FLOAT,$),$}getPixels(D){let{context:z,output:H}=this,[B,$]=H,j=new Uint8Array(B*$*4);return z.readPixels(0,0,B,$,z.RGBA,z.UNSIGNED_BYTE,j),new Uint8ClampedArray((D?j:a.flipPixels(j,B,$)).buffer)}renderKernelsToArrays(){let D={result:this.renderOutput()};for(let z=0;z<this.subKernels.length;z++)D[this.subKernels[z].property]=this.mappedTextures[z].toArray();return D}renderKernelsToTextures(){let D={result:this.renderOutput()};if(this.immutable)for(let z=0;z<this.subKernels.length;z++)D[this.subKernels[z].property]=this.mappedTextures[z].clone();else for(let z=0;z<this.subKernels.length;z++)D[this.subKernels[z].property]=this.mappedTextures[z];return D}resetSwitchingKernels(){let D=this.switchingKernels;return this.switchingKernels=null,D}setOutput(D){let z=this.toKernelOutput(D);if(this.program){if(!this.dynamicOutput)throw new Error("Resizing a kernel with dynamicOutput: false is not possible");let H=[z[0],z[1]||1,z[2]||1],B=a.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},H),$=this.texSize;if($){let K=this.getVariablePrecisionString($,this.tactic),ne=this.getVariablePrecisionString(B,this.tactic);if(K!==ne){this.debug&&console.warn("Precision requirement changed, asking GPU instance to recompile"),this.switchKernels({type:"outputPrecisionMismatch",precision:ne,needed:D});return}}this.output=z,this.threadDim=H,this.texSize=B;let{context:j}=this;if(j.bindFramebuffer(j.FRAMEBUFFER,this.framebuffer),this.updateMaxTexSize(),this.framebuffer.width=this.texSize[0],this.framebuffer.height=this.texSize[1],j.viewport(0,0,this.maxTexSize[0],this.maxTexSize[1]),this.canvas.width=this.maxTexSize[0],this.canvas.height=this.maxTexSize[1],this.texture&&this.texture.delete(),this.texture=null,this._setupOutputTexture(),this.mappedTextures&&this.mappedTextures.length>0){for(let K=0;K<this.mappedTextures.length;K++)this.mappedTextures[K].delete();this.mappedTextures=null,this._setupSubOutputTextures()}}else this.output=z;return this}renderValues(){return this.formatValues(this.transferValues(),this.output[0],this.output[1],this.output[2])}switchKernels(D){this.switchingKernels?this.switchingKernels.push(D):this.switchingKernels=[D]}getVariablePrecisionString(D=this.texSize,z=this.tactic,H=!1){if(!z){if(!this.constructor.features.isSpeedTacticSupported)return"highp";let B=this.constructor.features[H?"lowIntPrecision":"lowFloatPrecision"],$=this.constructor.features[H?"mediumIntPrecision":"mediumFloatPrecision"],j=this.constructor.features[H?"highIntPrecision":"highFloatPrecision"],K=Math.log2(D[0]*D[1]);if(K<=B.rangeMax)return"lowp";if(K<=$.rangeMax)return"mediump";if(K<=j.rangeMax)return"highp";throw new Error("The required size exceeds that of the ability of your system")}switch(z){case"speed":return"lowp";case"balanced":return"mediump";case"precision":return"highp";default:throw new Error(`Unknown tactic "${z}" use "speed", "balanced", "precision", or empty for auto`)}}updateTextureArgumentRefs(D,z){if(!!this.immutable){if(this.texture.texture===z.texture){let{prevArg:H}=D;H&&(H.texture._refs===1&&(this.texture.delete(),this.texture=H.clone(),this._textureSwitched=!0),H.delete()),D.prevArg=z.clone()}else if(this.mappedTextures&&this.mappedTextures.length>0){let{mappedTextures:H}=this;for(let B=0;B<H.length;B++){let $=H[B];if($.texture===z.texture){let{prevArg:j}=D;j&&(j.texture._refs===1&&($.delete(),H[B]=j.clone(),this._mappedTextureSwitched[B]=!0),j.delete()),D.prevArg=z.clone();return}}}}}onActivate(D){if(this._textureSwitched=!0,this.texture=D.texture,this.mappedTextures){for(let z=0;z<this.mappedTextures.length;z++)this._mappedTextureSwitched[z]=!0;this.mappedTextures=D.mappedTextures}}initCanvas(){}}let P={int:"Integer",float:"Number",vec2:"Array(2)",vec3:"Array(3)",vec4:"Array(4)"};i.exports={GLKernel:L}},{"../../utils":114,"../kernel":36,"./texture/array-2-float":16,"./texture/array-2-float-2d":14,"./texture/array-2-float-3d":15,"./texture/array-3-float":19,"./texture/array-3-float-2d":17,"./texture/array-3-float-3d":18,"./texture/array-4-float":22,"./texture/array-4-float-2d":20,"./texture/array-4-float-3d":21,"./texture/float":25,"./texture/float-2d":23,"./texture/float-3d":24,"./texture/graphical":26,"./texture/memory-optimized":30,"./texture/memory-optimized-2d":28,"./texture/memory-optimized-3d":29,"./texture/unsigned":33,"./texture/unsigned-2d":31,"./texture/unsigned-3d":32}],14:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(2)"}toArray(){return r.erect2DArray2(this.renderValues(),this.output[0],this.output[1])}}i.exports={GLTextureArray2Float2D:f}},{"../../../utils":114,"./float":25}],15:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(2)"}toArray(){return r.erect3DArray2(this.renderValues(),this.output[0],this.output[1],this.output[2])}}i.exports={GLTextureArray2Float3D:f}},{"../../../utils":114,"./float":25}],16:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(2)"}toArray(){return r.erectArray2(this.renderValues(),this.output[0],this.output[1])}}i.exports={GLTextureArray2Float:f}},{"../../../utils":114,"./float":25}],17:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(3)"}toArray(){return r.erect2DArray3(this.renderValues(),this.output[0],this.output[1])}}i.exports={GLTextureArray3Float2D:f}},{"../../../utils":114,"./float":25}],18:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(3)"}toArray(){return r.erect3DArray3(this.renderValues(),this.output[0],this.output[1],this.output[2])}}i.exports={GLTextureArray3Float3D:f}},{"../../../utils":114,"./float":25}],19:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(3)"}toArray(){return r.erectArray3(this.renderValues(),this.output[0])}}i.exports={GLTextureArray3Float:f}},{"../../../utils":114,"./float":25}],20:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(4)"}toArray(){return r.erect2DArray4(this.renderValues(),this.output[0],this.output[1])}}i.exports={GLTextureArray4Float2D:f}},{"../../../utils":114,"./float":25}],21:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(4)"}toArray(){return r.erect3DArray4(this.renderValues(),this.output[0],this.output[1],this.output[2])}}i.exports={GLTextureArray4Float3D:f}},{"../../../utils":114,"./float":25}],22:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(4)"}toArray(){return r.erectArray4(this.renderValues(),this.output[0])}}i.exports={GLTextureArray4Float:f}},{"../../../utils":114,"./float":25}],23:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(1)"}toArray(){return r.erect2DFloat(this.renderValues(),this.output[0],this.output[1])}}i.exports={GLTextureFloat2D:f}},{"../../../utils":114,"./float":25}],24:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="ArrayTexture(1)"}toArray(){return r.erect3DFloat(this.renderValues(),this.output[0],this.output[1],this.output[2])}}i.exports={GLTextureFloat3D:f}},{"../../../utils":114,"./float":25}],25:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTexture:a}=n("./index");class f extends a{get textureType(){return this.context.FLOAT}constructor(c){super(c),this.type="ArrayTexture(1)"}renderRawOutput(){let c=this.context,h=this.size;c.bindFramebuffer(c.FRAMEBUFFER,this.framebuffer()),c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,this.texture,0);let o=new Float32Array(h[0]*h[1]*4);return c.readPixels(0,0,h[0],h[1],c.RGBA,c.FLOAT,o),o}renderValues(){return this._deleted?null:this.renderRawOutput()}toArray(){return r.erectFloat(this.renderValues(),this.output[0])}}i.exports={GLTextureFloat:f}},{"../../../utils":114,"./index":27}],26:[function(n,i,s){let{GLTextureUnsigned:r}=n("./unsigned");class a extends r{constructor(d){super(d),this.type="ArrayTexture(4)"}toArray(){return this.renderValues()}}i.exports={GLTextureGraphical:a}},{"./unsigned":33}],27:[function(n,i,s){let{Texture:r}=n("../../../texture");class a extends r{get textureType(){throw new Error(`"textureType" not implemented on ${this.name}`)}clone(){return new this.constructor(this)}beforeMutate(){return this.texture._refs>1?(this.newTexture(),!0):!1}cloneTexture(){this.texture._refs--;let{context:c,size:h,texture:o,kernel:u}=this;u.debug&&console.warn("cloning internal texture"),c.bindFramebuffer(c.FRAMEBUFFER,this.framebuffer()),f(c,o),c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,o,0);let m=c.createTexture();f(c,m),c.texImage2D(c.TEXTURE_2D,0,this.internalFormat,h[0],h[1],0,this.textureFormat,this.textureType,null),c.copyTexSubImage2D(c.TEXTURE_2D,0,0,0,0,0,h[0],h[1]),m._refs=1,this.texture=m}newTexture(){this.texture._refs--;let c=this.context,h=this.size;this.kernel.debug&&console.warn("new internal texture");let u=c.createTexture();f(c,u),c.texImage2D(c.TEXTURE_2D,0,this.internalFormat,h[0],h[1],0,this.textureFormat,this.textureType,null),u._refs=1,this.texture=u}clear(){if(this.texture._refs){this.texture._refs--;let o=this.context,u=this.texture=o.createTexture();f(o,u);let m=this.size;u._refs=1,o.texImage2D(o.TEXTURE_2D,0,this.internalFormat,m[0],m[1],0,this.textureFormat,this.textureType,null)}let{context:c,texture:h}=this;c.bindFramebuffer(c.FRAMEBUFFER,this.framebuffer()),c.bindTexture(c.TEXTURE_2D,h),f(c,h),c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,h,0),c.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT)}delete(){this._deleted||(this._deleted=!0,!(this.texture._refs&&(this.texture._refs--,this.texture._refs))&&this.context.deleteTexture(this.texture))}framebuffer(){return this._framebuffer||(this._framebuffer=this.kernel.getRawValueFramebuffer(this.size[0],this.size[1])),this._framebuffer}}function f(d,c){d.activeTexture(d.TEXTURE15),d.bindTexture(d.TEXTURE_2D,c),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.NEAREST)}i.exports={GLTexture:a}},{"../../../texture":113}],28:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="MemoryOptimizedNumberTexture"}toArray(){return r.erectMemoryOptimized2DFloat(this.renderValues(),this.output[0],this.output[1])}}i.exports={GLTextureMemoryOptimized2D:f}},{"../../../utils":114,"./float":25}],29:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="MemoryOptimizedNumberTexture"}toArray(){return r.erectMemoryOptimized3DFloat(this.renderValues(),this.output[0],this.output[1],this.output[2])}}i.exports={GLTextureMemoryOptimized3D:f}},{"../../../utils":114,"./float":25}],30:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureFloat:a}=n("./float");class f extends a{constructor(c){super(c),this.type="MemoryOptimizedNumberTexture"}toArray(){return r.erectMemoryOptimizedFloat(this.renderValues(),this.output[0])}}i.exports={GLTextureMemoryOptimized:f}},{"../../../utils":114,"./float":25}],31:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureUnsigned:a}=n("./unsigned");class f extends a{constructor(c){super(c),this.type="NumberTexture"}toArray(){return r.erect2DPackedFloat(this.renderValues(),this.output[0],this.output[1])}}i.exports={GLTextureUnsigned2D:f}},{"../../../utils":114,"./unsigned":33}],32:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTextureUnsigned:a}=n("./unsigned");class f extends a{constructor(c){super(c),this.type="NumberTexture"}toArray(){return r.erect3DPackedFloat(this.renderValues(),this.output[0],this.output[1],this.output[2])}}i.exports={GLTextureUnsigned3D:f}},{"../../../utils":114,"./unsigned":33}],33:[function(n,i,s){let{utils:r}=n("../../../utils"),{GLTexture:a}=n("./index");class f extends a{get textureType(){return this.context.UNSIGNED_BYTE}constructor(c){super(c),this.type="NumberTexture"}renderRawOutput(){let{context:c}=this;c.bindFramebuffer(c.FRAMEBUFFER,this.framebuffer()),c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,this.texture,0);let h=new Uint8Array(this.size[0]*this.size[1]*4);return c.readPixels(0,0,this.size[0],this.size[1],c.RGBA,c.UNSIGNED_BYTE,h),h}renderValues(){return this._deleted?null:new Float32Array(this.renderRawOutput().buffer)}toArray(){return r.erectPackedFloat(this.renderValues(),this.output[0])}}i.exports={GLTextureUnsigned:f}},{"../../../utils":114,"./index":27}],34:[function(n,i,s){let r=n("gl"),{WebGLKernel:a}=n("../web-gl/kernel"),{glKernelString:f}=n("../gl/kernel-string"),d=null,c=null,h=null,o=null,u=null;class m extends a{static get isSupported(){return d!==null||(this.setupFeatureChecks(),d=h!==null),d}static setupFeatureChecks(){if(c=null,o=null,typeof r=="function")try{if(h=r(2,2,{preserveDrawingBuffer:!0}),!h||!h.getExtension)return;o={STACKGL_resize_drawingbuffer:h.getExtension("STACKGL_resize_drawingbuffer"),STACKGL_destroy_context:h.getExtension("STACKGL_destroy_context"),OES_texture_float:h.getExtension("OES_texture_float"),OES_texture_float_linear:h.getExtension("OES_texture_float_linear"),OES_element_index_uint:h.getExtension("OES_element_index_uint"),WEBGL_draw_buffers:h.getExtension("WEBGL_draw_buffers"),WEBGL_color_buffer_float:h.getExtension("WEBGL_color_buffer_float")},u=this.getFeatures()}catch(y){console.warn(y)}}static isContextMatch(y){try{return y.getParameter(y.RENDERER)==="ANGLE"}catch{return!1}}static getIsTextureFloat(){return Boolean(o.OES_texture_float)}static getIsDrawBuffers(){return Boolean(o.WEBGL_draw_buffers)}static getChannelCount(){return o.WEBGL_draw_buffers?h.getParameter(o.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL):1}static getMaxTextureSize(){return h.getParameter(h.MAX_TEXTURE_SIZE)}static get testCanvas(){return c}static get testContext(){return h}static get features(){return u}initCanvas(){return{}}initContext(){return r(2,2,{preserveDrawingBuffer:!0})}initExtensions(){this.extensions={STACKGL_resize_drawingbuffer:this.context.getExtension("STACKGL_resize_drawingbuffer"),STACKGL_destroy_context:this.context.getExtension("STACKGL_destroy_context"),OES_texture_float:this.context.getExtension("OES_texture_float"),OES_texture_float_linear:this.context.getExtension("OES_texture_float_linear"),OES_element_index_uint:this.context.getExtension("OES_element_index_uint"),WEBGL_draw_buffers:this.context.getExtension("WEBGL_draw_buffers")}}build(){super.build.apply(this,arguments),this.fallbackRequested||this.extensions.STACKGL_resize_drawingbuffer.resize(this.maxTexSize[0],this.maxTexSize[1])}destroyExtensions(){this.extensions.STACKGL_resize_drawingbuffer=null,this.extensions.STACKGL_destroy_context=null,this.extensions.OES_texture_float=null,this.extensions.OES_texture_float_linear=null,this.extensions.OES_element_index_uint=null,this.extensions.WEBGL_draw_buffers=null}static destroyContext(y){let v=y.getExtension("STACKGL_destroy_context");v&&v.destroy&&v.destroy()}toString(){let y=`const gl = context || require('gl')(1, 1);
`,v=`    if (!context) { gl.getExtension('STACKGL_destroy_context').destroy(); }
`;return f(this.constructor,arguments,this,y,v)}setOutput(y){return super.setOutput(y),this.graphical&&this.extensions.STACKGL_resize_drawingbuffer&&this.extensions.STACKGL_resize_drawingbuffer.resize(this.maxTexSize[0],this.maxTexSize[1]),this}}i.exports={HeadlessGLKernel:m}},{"../gl/kernel-string":12,"../web-gl/kernel":70,gl:2}],35:[function(n,i,s){class r{constructor(f,d){let{name:c,kernel:h,context:o,checkContext:u,onRequestContextHandle:m,onUpdateValueMismatch:g,origin:y,strictIntegers:v,type:w,tactic:E}=d;if(!c)throw new Error("name not set");if(!w)throw new Error("type not set");if(!y)throw new Error("origin not set");if(y!=="user"&&y!=="constants")throw new Error(`origin must be "user" or "constants" value is "${y}"`);if(!m)throw new Error("onRequestContextHandle is not set");this.name=c,this.origin=y,this.tactic=E,this.varName=y==="constants"?`constants.${c}`:c,this.kernel=h,this.strictIntegers=v,this.type=f.type||w,this.size=f.size||null,this.index=null,this.context=o,this.checkContext=u??!0,this.contextHandle=null,this.onRequestContextHandle=m,this.onUpdateValueMismatch=g,this.forceUploadEachRun=null}get id(){return`${this.origin}_${name}`}getSource(){throw new Error(`"getSource" not defined on ${this.constructor.name}`)}updateValue(f){throw new Error(`"updateValue" not defined on ${this.constructor.name}`)}}i.exports={KernelValue:r}},{}],36:[function(n,i,s){let{utils:r}=n("../utils"),{Input:a}=n("../input");class f{static get isSupported(){throw new Error(`"isSupported" not implemented on ${this.name}`)}static isContextMatch(h){throw new Error(`"isContextMatch" not implemented on ${this.name}`)}static getFeatures(){throw new Error(`"getFeatures" not implemented on ${this.name}`)}static destroyContext(h){throw new Error(`"destroyContext" called on ${this.name}`)}static nativeFunctionArguments(){throw new Error(`"nativeFunctionArguments" called on ${this.name}`)}static nativeFunctionReturnType(){throw new Error(`"nativeFunctionReturnType" called on ${this.name}`)}static combineKernels(){throw new Error(`"combineKernels" called on ${this.name}`)}constructor(h,o){if(typeof h!="object"){if(typeof h!="string")throw new Error("source not a string");if(!r.isFunctionString(h))throw new Error("source not a function string")}this.useLegacyEncoder=!1,this.fallbackRequested=!1,this.onRequestFallback=null,this.argumentNames=typeof h=="string"?r.getArgumentNamesFromString(h):null,this.argumentTypes=null,this.argumentSizes=null,this.argumentBitRatios=null,this.kernelArguments=null,this.kernelConstants=null,this.forceUploadKernelConstants=null,this.source=h,this.output=null,this.debug=!1,this.graphical=!1,this.loopMaxIterations=0,this.constants=null,this.constantTypes=null,this.constantBitRatios=null,this.dynamicArguments=!1,this.dynamicOutput=!1,this.canvas=null,this.context=null,this.checkContext=null,this.gpu=null,this.functions=null,this.nativeFunctions=null,this.injectedNative=null,this.subKernels=null,this.validate=!0,this.immutable=!1,this.pipeline=!1,this.precision=null,this.tactic=null,this.plugins=null,this.returnType=null,this.leadingReturnStatement=null,this.followingReturnStatement=null,this.optimizeFloatMemory=null,this.strictIntegers=!1,this.fixIntegerDivisionAccuracy=null,this.built=!1,this.signature=null}mergeSettings(h){for(let o in h)if(!(!h.hasOwnProperty(o)||!this.hasOwnProperty(o))){switch(o){case"output":if(!Array.isArray(h.output)){this.setOutput(h.output);continue}break;case"functions":this.functions=[];for(let u=0;u<h.functions.length;u++)this.addFunction(h.functions[u]);continue;case"graphical":h[o]&&!h.hasOwnProperty("precision")&&(this.precision="unsigned"),this[o]=h[o];continue;case"nativeFunctions":if(!h.nativeFunctions)continue;this.nativeFunctions=[];for(let u=0;u<h.nativeFunctions.length;u++){let m=h.nativeFunctions[u],{name:g,source:y}=m;this.addNativeFunction(g,y,m)}continue}this[o]=h[o]}this.canvas||(this.canvas=this.initCanvas()),this.context||(this.context=this.initContext()),this.plugins||(this.plugins=this.initPlugins(h))}build(){throw new Error(`"build" not defined on ${this.constructor.name}`)}run(){throw new Error(`"run" not defined on ${this.constructor.name}`)}initCanvas(){throw new Error(`"initCanvas" not defined on ${this.constructor.name}`)}initContext(){throw new Error(`"initContext" not defined on ${this.constructor.name}`)}initPlugins(h){throw new Error(`"initPlugins" not defined on ${this.constructor.name}`)}addFunction(h,o={}){if(h.name&&h.source&&h.argumentTypes&&"returnType"in h)this.functions.push(h);else if("settings"in h&&"source"in h)this.functions.push(this.functionToIGPUFunction(h.source,h.settings));else if(typeof h=="string"||typeof h=="function")this.functions.push(this.functionToIGPUFunction(h,o));else throw new Error("function not properly defined");return this}addNativeFunction(h,o,u={}){let{argumentTypes:m,argumentNames:g}=u.argumentTypes?d(u.argumentTypes):this.constructor.nativeFunctionArguments(o)||{};return this.nativeFunctions.push({name:h,source:o,settings:u,argumentTypes:m,argumentNames:g,returnType:u.returnType||this.constructor.nativeFunctionReturnType(o)}),this}setupArguments(h){if(this.kernelArguments=[],this.argumentTypes)for(let o=0;o<this.argumentTypes.length;o++)this.kernelArguments.push({type:this.argumentTypes[o]});else if(!this.argumentTypes){this.argumentTypes=[];for(let o=0;o<h.length;o++){let u=r.getVariableType(h[o],this.strictIntegers),m=u==="Integer"?"Number":u;this.argumentTypes.push(m),this.kernelArguments.push({type:m})}}this.argumentSizes=new Array(h.length),this.argumentBitRatios=new Int32Array(h.length);for(let o=0;o<h.length;o++){let u=h[o];this.argumentSizes[o]=u.constructor===a?u.size:null,this.argumentBitRatios[o]=this.getBitRatio(u)}if(this.argumentNames.length!==h.length)throw new Error("arguments are miss-aligned")}setupConstants(){this.kernelConstants=[];let h=this.constantTypes===null;if(h&&(this.constantTypes={}),this.constantBitRatios={},this.constants)for(let o in this.constants){if(h){let u=r.getVariableType(this.constants[o],this.strictIntegers);this.constantTypes[o]=u,this.kernelConstants.push({name:o,type:u})}else this.kernelConstants.push({name:o,type:this.constantTypes[o]});this.constantBitRatios[o]=this.getBitRatio(this.constants[o])}}setOptimizeFloatMemory(h){return this.optimizeFloatMemory=h,this}toKernelOutput(h){return h.hasOwnProperty("x")?h.hasOwnProperty("y")?h.hasOwnProperty("z")?[h.x,h.y,h.z]:[h.x,h.y]:[h.x]:h}setOutput(h){return this.output=this.toKernelOutput(h),this}setDebug(h){return this.debug=h,this}setGraphical(h){return this.graphical=h,this.precision="unsigned",this}setLoopMaxIterations(h){return this.loopMaxIterations=h,this}setConstants(h){return this.constants=h,this}setConstantTypes(h){return this.constantTypes=h,this}setFunctions(h){for(let o=0;o<h.length;o++)this.addFunction(h[o]);return this}setNativeFunctions(h){for(let o=0;o<h.length;o++){let u=h[o],{name:m,source:g}=u;this.addNativeFunction(m,g,u)}return this}setInjectedNative(h){return this.injectedNative=h,this}setPipeline(h){return this.pipeline=h,this}setPrecision(h){return this.precision=h,this}setDimensions(h){return r.warnDeprecated("method","setDimensions","setOutput"),this.output=h,this}setOutputToTexture(h){return r.warnDeprecated("method","setOutputToTexture","setPipeline"),this.pipeline=h,this}setImmutable(h){return this.immutable=h,this}setCanvas(h){return this.canvas=h,this}setStrictIntegers(h){return this.strictIntegers=h,this}setDynamicOutput(h){return this.dynamicOutput=h,this}setHardcodeConstants(h){return r.warnDeprecated("method","setHardcodeConstants"),this.setDynamicOutput(h),this.setDynamicArguments(h),this}setDynamicArguments(h){return this.dynamicArguments=h,this}setUseLegacyEncoder(h){return this.useLegacyEncoder=h,this}setWarnVarUsage(h){return r.warnDeprecated("method","setWarnVarUsage"),this}getCanvas(){return r.warnDeprecated("method","getCanvas"),this.canvas}getWebGl(){return r.warnDeprecated("method","getWebGl"),this.context}setContext(h){return this.context=h,this}setArgumentTypes(h){if(Array.isArray(h))this.argumentTypes=h;else{this.argumentTypes=[];for(let o in h){if(!h.hasOwnProperty(o))continue;let u=this.argumentNames.indexOf(o);if(u===-1)throw new Error(`unable to find argument ${o}`);this.argumentTypes[u]=h[o]}}return this}setTactic(h){return this.tactic=h,this}requestFallback(h){if(!this.onRequestFallback)throw new Error(`"onRequestFallback" not defined on ${this.constructor.name}`);return this.fallbackRequested=!0,this.onRequestFallback(h)}validateSettings(){throw new Error(`"validateSettings" not defined on ${this.constructor.name}`)}addSubKernel(h){if(this.subKernels===null&&(this.subKernels=[]),!h.source)throw new Error('subKernel missing "source" property');if(!h.property&&isNaN(h.property))throw new Error('subKernel missing "property" property');if(!h.name)throw new Error('subKernel missing "name" property');return this.subKernels.push(h),this}destroy(h){throw new Error(`"destroy" called on ${this.constructor.name}`)}getBitRatio(h){if(this.precision==="single")return 4;if(Array.isArray(h[0]))return this.getBitRatio(h[0]);if(h.constructor===a)return this.getBitRatio(h.value);switch(h.constructor){case Uint8ClampedArray:case Uint8Array:case Int8Array:return 1;case Uint16Array:case Int16Array:return 2;case Float32Array:case Int32Array:default:return 4}}getPixels(h){throw new Error(`"getPixels" called on ${this.constructor.name}`)}checkOutput(){if(!this.output||!r.isArray(this.output))throw new Error("kernel.output not an array");if(this.output.length<1)throw new Error("kernel.output is empty, needs at least 1 value");for(let h=0;h<this.output.length;h++)if(isNaN(this.output[h])||this.output[h]<1)throw new Error(`${this.constructor.name}.output[${h}] incorrectly defined as \`${this.output[h]}\`, needs to be numeric, and greater than 0`)}prependString(h){throw new Error(`"prependString" called on ${this.constructor.name}`)}hasPrependString(h){throw new Error(`"hasPrependString" called on ${this.constructor.name}`)}toJSON(){return{settings:{output:this.output,pipeline:this.pipeline,argumentNames:this.argumentNames,argumentsTypes:this.argumentTypes,constants:this.constants,pluginNames:this.plugins?this.plugins.map(h=>h.name):null,returnType:this.returnType}}}buildSignature(h){let o=this.constructor;this.signature=o.getSignature(this,o.getArgumentTypes(this,h))}static getArgumentTypes(h,o){let u=new Array(o.length);for(let m=0;m<o.length;m++){let g=o[m],y=h.argumentTypes[m];if(g.type)u[m]=g.type;else switch(y){case"Number":case"Integer":case"Float":case"ArrayTexture(1)":u[m]=r.getVariableType(g);break;default:u[m]=y}}return u}static getSignature(h,o){throw new Error(`"getSignature" not implemented on ${this.name}`)}functionToIGPUFunction(h,o={}){if(typeof h!="string"&&typeof h!="function")throw new Error("source not a string or function");let u=typeof h=="string"?h:h.toString(),m=[];return Array.isArray(o.argumentTypes)?m=o.argumentTypes:typeof o.argumentTypes=="object"?m=r.getArgumentNamesFromString(u).map(g=>o.argumentTypes[g])||[]:m=o.argumentTypes||[],{name:r.getFunctionNameFromString(u)||null,source:u,argumentTypes:m,returnType:o.returnType||null}}onActivate(h){}}function d(c){let h=Object.keys(c),o=[];for(let u=0;u<h.length;u++){let m=h[u];o.push(c[m])}return{argumentTypes:o,argumentNames:h}}i.exports={Kernel:f}},{"../input":110,"../utils":114}],37:[function(n,i,s){let r=`__HEADER__;
      __FLOAT_TACTIC_DECLARATION__;
      __INT_TACTIC_DECLARATION__;
      __SAMPLER_2D_TACTIC_DECLARATION__;
      
      const int LOOP_MAX = __LOOP_MAX__;
      
      __PLUGINS__;
      __CONSTANTS__;
      
      varying vec2 vTexCoord;
      
      float acosh(float x) {
        return log(x + sqrt(x * x - 1.0));
      }
      
      float sinh(float x) {
        return (pow(${Math.E}, x) - pow(${Math.E}, -x)) / 2.0;
      }
      
      float asinh(float x) {
        return log(x + sqrt(x * x + 1.0));
      }
      
      float atan2(float v1, float v2) {
        if (v1 == 0.0 || v2 == 0.0) return 0.0;
        return atan(v1 / v2);
      }
      
      float atanh(float x) {
        x = (x + 1.0) / (x - 1.0);
        if (x < 0.0) {
          return 0.5 * log(-x);
        }
        return 0.5 * log(x);
      }
      
      float cbrt(float x) {
        if (x >= 0.0) {
          return pow(x, 1.0 / 3.0);
        } else {
          return -pow(x, 1.0 / 3.0);
        }
      }
      
      float cosh(float x) {
        return (pow(${Math.E}, x) + pow(${Math.E}, -x)) / 2.0; 
      }
      
      float expm1(float x) {
        return pow(${Math.E}, x) - 1.0; 
      }
      
      float fround(highp float x) {
        return x;
      }
      
      float imul(float v1, float v2) {
        return float(int(v1) * int(v2));
      }
      
      float log10(float x) {
        return log2(x) * (1.0 / log2(10.0));
      }
      
      float log1p(float x) {
        return log(1.0 + x);
      }
      
      float _pow(float v1, float v2) {
        if (v2 == 0.0) return 1.0;
        return pow(v1, v2);
      }
      
      float tanh(float x) {
        float e = exp(2.0 * x);
        return (e - 1.0) / (e + 1.0);
      }
      
      float trunc(float x) {
        if (x >= 0.0) {
          return floor(x); 
        } else {
          return ceil(x);
        }
      }
      
      vec4 _round(vec4 x) {
        return floor(x + 0.5);
      }
      
      float _round(float x) {
        return floor(x + 0.5);
      }
      
      const int BIT_COUNT = 32;
      int modi(int x, int y) {
        return x - y * (x / y);
      }
      
      int bitwiseOr(int a, int b) {
        int result = 0;
        int n = 1;
        
        for (int i = 0; i < BIT_COUNT; i++) {
          if ((modi(a, 2) == 1) || (modi(b, 2) == 1)) {
            result += n;
          }
          a = a / 2;
          b = b / 2;
          n = n * 2;
          if(!(a > 0 || b > 0)) {
            break;
          }
        }
        return result;
      }
      int bitwiseXOR(int a, int b) {
        int result = 0;
        int n = 1;
        
        for (int i = 0; i < BIT_COUNT; i++) {
          if ((modi(a, 2) == 1) != (modi(b, 2) == 1)) {
            result += n;
          }
          a = a / 2;
          b = b / 2;
          n = n * 2;
          if(!(a > 0 || b > 0)) {
            break;
          }
        }
        return result;
      }
      int bitwiseAnd(int a, int b) {
        int result = 0;
        int n = 1;
        for (int i = 0; i < BIT_COUNT; i++) {
          if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {
            result += n;
          }
          a = a / 2;
          b = b / 2;
          n = n * 2;
          if(!(a > 0 && b > 0)) {
            break;
          }
        }
        return result;
      }
      int bitwiseNot(int a) {
        int result = 0;
        int n = 1;
        
        for (int i = 0; i < BIT_COUNT; i++) {
          if (modi(a, 2) == 0) {
            result += n;    
          }
          a = a / 2;
          n = n * 2;
        }
        return result;
      }
      int bitwiseZeroFillLeftShift(int n, int shift) {
        int maxBytes = BIT_COUNT;
        for (int i = 0; i < BIT_COUNT; i++) {
          if (maxBytes >= n) {
            break;
          }
          maxBytes *= 2;
        }
        for (int i = 0; i < BIT_COUNT; i++) {
          if (i >= shift) {
            break;
          }
          n *= 2;
        }
      
        int result = 0;
        int byteVal = 1;
        for (int i = 0; i < BIT_COUNT; i++) {
          if (i >= maxBytes) break;
          if (modi(n, 2) > 0) { result += byteVal; }
          n = int(n / 2);
          byteVal *= 2;
        }
        return result;
      }
      
      int bitwiseSignedRightShift(int num, int shifts) {
        return int(floor(float(num) / pow(2.0, float(shifts))));
      }
      
      int bitwiseZeroFillRightShift(int n, int shift) {
        int maxBytes = BIT_COUNT;
        for (int i = 0; i < BIT_COUNT; i++) {
          if (maxBytes >= n) {
            break;
          }
          maxBytes *= 2;
        }
        for (int i = 0; i < BIT_COUNT; i++) {
          if (i >= shift) {
            break;
          }
          n /= 2;
        }
        int result = 0;
        int byteVal = 1;
        for (int i = 0; i < BIT_COUNT; i++) {
          if (i >= maxBytes) break;
          if (modi(n, 2) > 0) { result += byteVal; }
          n = int(n / 2);
          byteVal *= 2;
        }
        return result;
      }
      
      vec2 integerMod(vec2 x, float y) {
        vec2 res = floor(mod(x, y));
        return res * step(1.0 - floor(y), -res);
      }
      
      vec3 integerMod(vec3 x, float y) {
        vec3 res = floor(mod(x, y));
        return res * step(1.0 - floor(y), -res);
      }
      
      vec4 integerMod(vec4 x, vec4 y) {
        vec4 res = floor(mod(x, y));
        return res * step(1.0 - floor(y), -res);
      }
      
      float integerMod(float x, float y) {
        float res = floor(mod(x, y));
        return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);
      }
      
      int integerMod(int x, int y) {
        return x - (y * int(x / y));
      }
      
      __DIVIDE_WITH_INTEGER_CHECK__;
      
      // Here be dragons!
      // DO NOT OPTIMIZE THIS CODE
      // YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE
      // LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME
      const vec2 MAGIC_VEC = vec2(1.0, -256.0);
      const vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);
      const vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536
      float decode32(vec4 texel) {
        __DECODE32_ENDIANNESS__;
        texel *= 255.0;
        vec2 gte128;
        gte128.x = texel.b >= 128.0 ? 1.0 : 0.0;
        gte128.y = texel.a >= 128.0 ? 1.0 : 0.0;
        float exponent = 2.0 * texel.a - 127.0 + dot(gte128, MAGIC_VEC);
        float res = exp2(_round(exponent));
        texel.b = texel.b - 128.0 * gte128.x;
        res = dot(texel, SCALE_FACTOR) * exp2(_round(exponent-23.0)) + res;
        res *= gte128.y * -2.0 + 1.0;
        return res;
      }
      
      float decode16(vec4 texel, int index) {
        int channel = integerMod(index, 2);
        if (channel == 0) return texel.r * 255.0 + texel.g * 65280.0;
        if (channel == 1) return texel.b * 255.0 + texel.a * 65280.0;
        return 0.0;
      }
      
      float decode8(vec4 texel, int index) {
        int channel = integerMod(index, 4);
        if (channel == 0) return texel.r * 255.0;
        if (channel == 1) return texel.g * 255.0;
        if (channel == 2) return texel.b * 255.0;
        if (channel == 3) return texel.a * 255.0;
        return 0.0;
      }
      
      vec4 legacyEncode32(float f) {
        float F = abs(f);
        float sign = f < 0.0 ? 1.0 : 0.0;
        float exponent = floor(log2(F));
        float mantissa = (exp2(-exponent) * F);
        // exponent += floor(log2(mantissa));
        vec4 texel = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;
        texel.rg = integerMod(texel.rg, 256.0);
        texel.b = integerMod(texel.b, 128.0);
        texel.a = exponent*0.5 + 63.5;
        texel.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;
        texel = floor(texel);
        texel *= 0.003921569; // 1/255
        __ENCODE32_ENDIANNESS__;
        return texel;
      }
      
      // https://github.com/gpujs/gpu.js/wiki/Encoder-details
      vec4 encode32(float value) {
        if (value == 0.0) return vec4(0, 0, 0, 0);
      
        float exponent;
        float mantissa;
        vec4  result;
        float sgn;
      
        sgn = step(0.0, -value);
        value = abs(value);
      
        exponent = floor(log2(value));
      
        mantissa = value*pow(2.0, -exponent)-1.0;
        exponent = exponent+127.0;
        result   = vec4(0,0,0,0);
      
        result.a = floor(exponent/2.0);
        exponent = exponent - result.a*2.0;
        result.a = result.a + 128.0*sgn;
      
        result.b = floor(mantissa * 128.0);
        mantissa = mantissa - result.b / 128.0;
        result.b = result.b + exponent*128.0;
      
        result.g = floor(mantissa*32768.0);
        mantissa = mantissa - result.g/32768.0;
      
        result.r = floor(mantissa*8388608.0);
        return result/255.0;
      }
      // Dragons end here
      
      int index;
      ivec3 threadId;
      
      ivec3 indexTo3D(int idx, ivec3 texDim) {
        int z = int(idx / (texDim.x * texDim.y));
        idx -= z * int(texDim.x * texDim.y);
        int y = int(idx / texDim.x);
        int x = int(integerMod(idx, texDim.x));
        return ivec3(x, y, z);
      }
      
      float get32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture2D(tex, st / vec2(texSize));
        return decode32(texel);
      }
      
      float get16(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int w = texSize.x * 2;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture2D(tex, st / vec2(texSize.x * 2, texSize.y));
        return decode16(texel, index);
      }
      
      float get8(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int w = texSize.x * 4;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture2D(tex, st / vec2(texSize.x * 4, texSize.y));
        return decode8(texel, index);
      }
      
      float getMemoryOptimized32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int channel = integerMod(index, 4);
        index = index / 4;
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture2D(tex, st / vec2(texSize));
        if (channel == 0) return texel.r;
        if (channel == 1) return texel.g;
        if (channel == 2) return texel.b;
        if (channel == 3) return texel.a;
        return 0.0;
      }
      
      vec4 getImage2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        return texture2D(tex, st / vec2(texSize));
      }
      
      float getFloatFromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);
        return result[0];
      }
      
      vec2 getVec2FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);
        return vec2(result[0], result[1]);
      }
      
      vec2 getMemoryOptimizedVec2(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + (texDim.x * (y + (texDim.y * z)));
        int channel = integerMod(index, 2);
        index = index / 2;
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture2D(tex, st / vec2(texSize));
        if (channel == 0) return vec2(texel.r, texel.g);
        if (channel == 1) return vec2(texel.b, texel.a);
        return vec2(0.0, 0.0);
      }
      
      vec3 getVec3FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);
        return vec3(result[0], result[1], result[2]);
      }
      
      vec3 getMemoryOptimizedVec3(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int fieldIndex = 3 * (x + texDim.x * (y + texDim.y * z));
        int vectorIndex = fieldIndex / 4;
        int vectorOffset = fieldIndex - vectorIndex * 4;
        int readY = vectorIndex / texSize.x;
        int readX = vectorIndex - readY * texSize.x;
        vec4 tex1 = texture2D(tex, (vec2(readX, readY) + 0.5) / vec2(texSize));
        
        if (vectorOffset == 0) {
          return tex1.xyz;
        } else if (vectorOffset == 1) {
          return tex1.yzw;
        } else {
          readX++;
          if (readX >= texSize.x) {
            readX = 0;
            readY++;
          }
          vec4 tex2 = texture2D(tex, vec2(readX, readY) / vec2(texSize));
          if (vectorOffset == 2) {
            return vec3(tex1.z, tex1.w, tex2.x);
          } else {
            return vec3(tex1.w, tex2.x, tex2.y);
          }
        }
      }
      
      vec4 getVec4FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        return getImage2D(tex, texSize, texDim, z, y, x);
      }
      
      vec4 getMemoryOptimizedVec4(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int channel = integerMod(index, 2);
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture2D(tex, st / vec2(texSize));
        return vec4(texel.r, texel.g, texel.b, texel.a);
      }
      
      vec4 actualColor;
      void color(float r, float g, float b, float a) {
        actualColor = vec4(r,g,b,a);
      }
      
      void color(float r, float g, float b) {
        color(r,g,b,1.0);
      }
      
      void color(sampler2D image) {
        actualColor = texture2D(image, vTexCoord);
      }
      
      float modulo(float number, float divisor) {
        if (number < 0.0) {
          number = abs(number);
          if (divisor < 0.0) {
            divisor = abs(divisor);
          }
          return -mod(number, divisor);
        }
        if (divisor < 0.0) {
          divisor = abs(divisor);
        }
        return mod(number, divisor);
      }
      
      __INJECTED_NATIVE__;
      __MAIN_CONSTANTS__;
      __MAIN_ARGUMENTS__;
      __KERNEL__;
      
      void main(void) {
        index = int(vTexCoord.s * float(uTexSize.x)) + int(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;
        __MAIN_RESULT__;
      }`;i.exports={fragmentShader:r}},{}],38:[function(n,i,s){let{utils:r}=n("../../utils"),{FunctionNode:a}=n("../function-node");class f extends a{constructor(o,u){super(o,u),u&&u.hasOwnProperty("fixIntegerDivisionAccuracy")&&(this.fixIntegerDivisionAccuracy=u.fixIntegerDivisionAccuracy)}astConditionalExpression(o,u){if(o.type!=="ConditionalExpression")throw this.astErrorOutput("Not a conditional expression",o);let m=this.getType(o.consequent),g=this.getType(o.alternate);return m===null&&g===null?(u.push("if ("),this.astGeneric(o.test,u),u.push(") {"),this.astGeneric(o.consequent,u),u.push(";"),u.push("} else {"),this.astGeneric(o.alternate,u),u.push(";"),u.push("}"),u):(u.push("("),this.astGeneric(o.test,u),u.push("?"),this.astGeneric(o.consequent,u),u.push(":"),this.astGeneric(o.alternate,u),u.push(")"),u)}astFunction(o,u){if(this.isRootKernel)u.push("void");else{this.returnType||this.findLastReturn()&&(this.returnType=this.getType(o.body),this.returnType==="LiteralInteger"&&(this.returnType="Number"));let{returnType:m}=this;if(!m)u.push("void");else{let g=d[m];if(!g)throw new Error(`unknown type ${m}`);u.push(g)}}if(u.push(" "),u.push(this.name),u.push("("),!this.isRootKernel)for(let m=0;m<this.argumentNames.length;++m){let g=this.argumentNames[m];m>0&&u.push(", ");let y=this.argumentTypes[this.argumentNames.indexOf(g)];if(!y)throw this.astErrorOutput(`Unknown argument ${g} type`,o);y==="LiteralInteger"&&(this.argumentTypes[m]=y="Number");let v=d[y];if(!v)throw this.astErrorOutput("Unexpected expression",o);let w=r.sanitizeName(g);v==="sampler2D"||v==="sampler2DArray"?u.push(`${v} user_${w},ivec2 user_${w}Size,ivec3 user_${w}Dim`):u.push(`${v} user_${w}`)}u.push(`) {
`);for(let m=0;m<o.body.body.length;++m)this.astGeneric(o.body.body[m],u),u.push(`
`);return u.push(`}
`),u}astReturnStatement(o,u){if(!o.argument)throw this.astErrorOutput("Unexpected return statement",o);this.pushState("skip-literal-correction");let m=this.getType(o.argument);this.popState("skip-literal-correction");let g=[];switch(this.returnType||(m==="LiteralInteger"||m==="Integer"?this.returnType="Number":this.returnType=m),this.returnType){case"LiteralInteger":case"Number":case"Float":switch(m){case"Integer":g.push("float("),this.astGeneric(o.argument,g),g.push(")");break;case"LiteralInteger":this.castLiteralToFloat(o.argument,g),this.getType(o)==="Integer"&&(g.unshift("float("),g.push(")"));break;default:this.astGeneric(o.argument,g)}break;case"Integer":switch(m){case"Float":case"Number":this.castValueToInteger(o.argument,g);break;case"LiteralInteger":this.castLiteralToInteger(o.argument,g);break;default:this.astGeneric(o.argument,g)}break;case"Array(4)":case"Array(3)":case"Array(2)":case"Matrix(2)":case"Matrix(3)":case"Matrix(4)":case"Input":this.astGeneric(o.argument,g);break;default:throw this.astErrorOutput(`unhandled return type ${this.returnType}`,o)}return this.isRootKernel?(u.push(`kernelResult = ${g.join("")};`),u.push("return;")):this.isSubKernel?(u.push(`subKernelResult_${this.name} = ${g.join("")};`),u.push(`return subKernelResult_${this.name};`)):u.push(`return ${g.join("")};`),u}astLiteral(o,u){if(isNaN(o.value))throw this.astErrorOutput("Non-numeric literal not supported : "+o.value,o);let m=this.astKey(o);return Number.isInteger(o.value)?this.isState("casting-to-integer")||this.isState("building-integer")?(this.literalTypes[m]="Integer",u.push(`${o.value}`)):this.isState("casting-to-float")||this.isState("building-float")?(this.literalTypes[m]="Number",u.push(`${o.value}.0`)):(this.literalTypes[m]="Number",u.push(`${o.value}.0`)):this.isState("casting-to-integer")||this.isState("building-integer")?(this.literalTypes[m]="Integer",u.push(Math.round(o.value))):(this.literalTypes[m]="Number",u.push(`${o.value}`)),u}astBinaryExpression(o,u){if(this.checkAndUpconvertOperator(o,u))return u;if(this.fixIntegerDivisionAccuracy&&o.operator==="/"){switch(u.push("divWithIntCheck("),this.pushState("building-float"),this.getType(o.left)){case"Integer":this.castValueToFloat(o.left,u);break;case"LiteralInteger":this.castLiteralToFloat(o.left,u);break;default:this.astGeneric(o.left,u)}switch(u.push(", "),this.getType(o.right)){case"Integer":this.castValueToFloat(o.right,u);break;case"LiteralInteger":this.castLiteralToFloat(o.right,u);break;default:this.astGeneric(o.right,u)}return this.popState("building-float"),u.push(")"),u}u.push("(");let m=this.getType(o.left)||"Number",g=this.getType(o.right)||"Number";if(!m||!g)throw this.astErrorOutput("Unhandled binary expression",o);let y=m+" & "+g;switch(y){case"Integer & Integer":this.pushState("building-integer"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.astGeneric(o.right,u),this.popState("building-integer");break;case"Number & Float":case"Float & Number":case"Float & Float":case"Number & Number":this.pushState("building-float"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.astGeneric(o.right,u),this.popState("building-float");break;case"LiteralInteger & LiteralInteger":this.isState("casting-to-integer")||this.isState("building-integer")?(this.pushState("building-integer"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.astGeneric(o.right,u),this.popState("building-integer")):(this.pushState("building-float"),this.castLiteralToFloat(o.left,u),u.push(c[o.operator]||o.operator),this.castLiteralToFloat(o.right,u),this.popState("building-float"));break;case"Integer & Float":case"Integer & Number":if((o.operator===">"||o.operator==="<"&&o.right.type==="Literal")&&!Number.isInteger(o.right.value)){this.pushState("building-float"),this.castValueToFloat(o.left,u),u.push(c[o.operator]||o.operator),this.astGeneric(o.right,u),this.popState("building-float");break}if(this.pushState("building-integer"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.pushState("casting-to-integer"),o.right.type==="Literal"){let v=[];if(this.astGeneric(o.right,v),this.getType(o.right)==="Integer")u.push(v.join(""));else throw this.astErrorOutput("Unhandled binary expression with literal",o)}else u.push("int("),this.astGeneric(o.right,u),u.push(")");this.popState("casting-to-integer"),this.popState("building-integer");break;case"Integer & LiteralInteger":this.pushState("building-integer"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.castLiteralToInteger(o.right,u),this.popState("building-integer");break;case"Number & Integer":this.pushState("building-float"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.castValueToFloat(o.right,u),this.popState("building-float");break;case"Float & LiteralInteger":case"Number & LiteralInteger":this.pushState("building-float"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.castLiteralToFloat(o.right,u),this.popState("building-float");break;case"LiteralInteger & Float":case"LiteralInteger & Number":this.isState("casting-to-integer")?(this.pushState("building-integer"),this.castLiteralToInteger(o.left,u),u.push(c[o.operator]||o.operator),this.castValueToInteger(o.right,u),this.popState("building-integer")):(this.pushState("building-float"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.pushState("casting-to-float"),this.astGeneric(o.right,u),this.popState("casting-to-float"),this.popState("building-float"));break;case"LiteralInteger & Integer":this.pushState("building-integer"),this.castLiteralToInteger(o.left,u),u.push(c[o.operator]||o.operator),this.astGeneric(o.right,u),this.popState("building-integer");break;case"Boolean & Boolean":this.pushState("building-boolean"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.astGeneric(o.right,u),this.popState("building-boolean");break;case"Float & Integer":this.pushState("building-float"),this.astGeneric(o.left,u),u.push(c[o.operator]||o.operator),this.castValueToFloat(o.right,u),this.popState("building-float");break;default:throw this.astErrorOutput(`Unhandled binary expression between ${y}`,o)}return u.push(")"),u}checkAndUpconvertOperator(o,u){let m=this.checkAndUpconvertBitwiseOperators(o,u);if(m)return m;let y={"%":this.fixIntegerDivisionAccuracy?"integerCorrectionModulo":"modulo","**":"pow"}[o.operator];if(!y)return null;switch(u.push(y),u.push("("),this.getType(o.left)){case"Integer":this.castValueToFloat(o.left,u);break;case"LiteralInteger":this.castLiteralToFloat(o.left,u);break;default:this.astGeneric(o.left,u)}switch(u.push(","),this.getType(o.right)){case"Integer":this.castValueToFloat(o.right,u);break;case"LiteralInteger":this.castLiteralToFloat(o.right,u);break;default:this.astGeneric(o.right,u)}return u.push(")"),u}checkAndUpconvertBitwiseOperators(o,u){let g={"&":"bitwiseAnd","|":"bitwiseOr","^":"bitwiseXOR","<<":"bitwiseZeroFillLeftShift",">>":"bitwiseSignedRightShift",">>>":"bitwiseZeroFillRightShift"}[o.operator];if(!g)return null;switch(u.push(g),u.push("("),this.getType(o.left)){case"Number":case"Float":this.castValueToInteger(o.left,u);break;case"LiteralInteger":this.castLiteralToInteger(o.left,u);break;default:this.astGeneric(o.left,u)}switch(u.push(","),this.getType(o.right)){case"Number":case"Float":this.castValueToInteger(o.right,u);break;case"LiteralInteger":this.castLiteralToInteger(o.right,u);break;default:this.astGeneric(o.right,u)}return u.push(")"),u}checkAndUpconvertBitwiseUnary(o,u){let g={"~":"bitwiseNot"}[o.operator];if(!g)return null;switch(u.push(g),u.push("("),this.getType(o.argument)){case"Number":case"Float":this.castValueToInteger(o.argument,u);break;case"LiteralInteger":this.castLiteralToInteger(o.argument,u);break;default:this.astGeneric(o.argument,u)}return u.push(")"),u}castLiteralToInteger(o,u){return this.pushState("casting-to-integer"),this.astGeneric(o,u),this.popState("casting-to-integer"),u}castLiteralToFloat(o,u){return this.pushState("casting-to-float"),this.astGeneric(o,u),this.popState("casting-to-float"),u}castValueToInteger(o,u){return this.pushState("casting-to-integer"),u.push("int("),this.astGeneric(o,u),u.push(")"),this.popState("casting-to-integer"),u}castValueToFloat(o,u){return this.pushState("casting-to-float"),u.push("float("),this.astGeneric(o,u),u.push(")"),this.popState("casting-to-float"),u}astIdentifierExpression(o,u){if(o.type!=="Identifier")throw this.astErrorOutput("IdentifierExpression - not an Identifier",o);let m=this.getType(o),g=r.sanitizeName(o.name);return o.name==="Infinity"?u.push("3.402823466e+38"):m==="Boolean"?this.argumentNames.indexOf(g)>-1?u.push(`bool(user_${g})`):u.push(`user_${g}`):u.push(`user_${g}`),u}astForStatement(o,u){if(o.type!=="ForStatement")throw this.astErrorOutput("Invalid for statement",o);let m=[],g=[],y=[],v=[],w=null;if(o.init){let{declarations:E}=o.init;E.length>1&&(w=!1),this.astGeneric(o.init,m);for(let _=0;_<E.length;_++)E[_].init&&E[_].init.type!=="Literal"&&(w=!1)}else w=!1;if(o.test?this.astGeneric(o.test,g):w=!1,o.update?this.astGeneric(o.update,y):w=!1,o.body&&(this.pushState("loop-body"),this.astGeneric(o.body,v),this.popState("loop-body")),w===null&&(w=this.isSafe(o.init)&&this.isSafe(o.test)),w){let E=m.join(""),_=E[E.length-1]!==";";u.push(`for (${E}${_?";":""}${g.join("")};${y.join("")}){
`),u.push(v.join("")),u.push(`}
`)}else{let E=this.getInternalVariableName("safeI");m.length>0&&u.push(m.join(""),`
`),u.push(`for (int ${E}=0;${E}<LOOP_MAX;${E}++){
`),g.length>0&&u.push(`if (!${g.join("")}) break;
`),u.push(v.join("")),u.push(`
${y.join("")};`),u.push(`}
`)}return u}astWhileStatement(o,u){if(o.type!=="WhileStatement")throw this.astErrorOutput("Invalid while statement",o);let m=this.getInternalVariableName("safeI");return u.push(`for (int ${m}=0;${m}<LOOP_MAX;${m}++){
`),u.push("if (!"),this.astGeneric(o.test,u),u.push(`) break;
`),this.astGeneric(o.body,u),u.push(`}
`),u}astDoWhileStatement(o,u){if(o.type!=="DoWhileStatement")throw this.astErrorOutput("Invalid while statement",o);let m=this.getInternalVariableName("safeI");return u.push(`for (int ${m}=0;${m}<LOOP_MAX;${m}++){
`),this.astGeneric(o.body,u),u.push("if (!"),this.astGeneric(o.test,u),u.push(`) break;
`),u.push(`}
`),u}astAssignmentExpression(o,u){if(o.operator==="%=")this.astGeneric(o.left,u),u.push("="),u.push("mod("),this.astGeneric(o.left,u),u.push(","),this.astGeneric(o.right,u),u.push(")");else if(o.operator==="**=")this.astGeneric(o.left,u),u.push("="),u.push("pow("),this.astGeneric(o.left,u),u.push(","),this.astGeneric(o.right,u),u.push(")");else{let m=this.getType(o.left),g=this.getType(o.right);return this.astGeneric(o.left,u),u.push(o.operator),m!=="Integer"&&g==="Integer"?(u.push("float("),this.astGeneric(o.right,u),u.push(")")):this.astGeneric(o.right,u),u}}astBlockStatement(o,u){if(this.isState("loop-body")){this.pushState("block-body");for(let m=0;m<o.body.length;m++)this.astGeneric(o.body[m],u);this.popState("block-body")}else{u.push(`{
`);for(let m=0;m<o.body.length;m++)this.astGeneric(o.body[m],u);u.push(`}
`)}return u}astVariableDeclaration(o,u){let m=o.declarations;if(!m||!m[0]||!m[0].init)throw this.astErrorOutput("Unexpected expression",o);let g=[],y=null,v=[],w=[];for(let E=0;E<m.length;E++){let _=m[E],M=_.init,A=this.getDeclaration(_.id),I=this.getType(_.init),C=I;C==="LiteralInteger"&&(A.suggestedType==="Integer"?C="Integer":C="Number");let T=d[C];if(!T)throw this.astErrorOutput(`Markup type ${C} not handled`,o);let b=[];if(I==="Integer"&&C==="Integer"){if(A.valueType="Number",E===0||y===null)b.push("float ");else if(C!==y)throw new Error("Unhandled declaration");y=C,b.push(`user_${r.sanitizeName(_.id.name)}=`),b.push("float("),this.astGeneric(M,b),b.push(")")}else A.valueType=C,E===0||y===null?b.push(`${T} `):C!==y&&(v.push(w.join(",")),w=[],b.push(`${T} `)),y=C,b.push(`user_${r.sanitizeName(_.id.name)}=`),I==="Number"&&C==="Integer"?M.left&&M.left.type==="Literal"?this.astGeneric(M,b):(b.push("int("),this.astGeneric(M,b),b.push(")")):I==="LiteralInteger"&&C==="Integer"?this.castLiteralToInteger(M,b):this.astGeneric(M,b);w.push(b.join(""))}return w.length>0&&v.push(w.join(",")),g.push(v.join(";")),u.push(g.join("")),u.push(";"),u}astIfStatement(o,u){return u.push("if ("),this.astGeneric(o.test,u),u.push(")"),o.consequent.type==="BlockStatement"?this.astGeneric(o.consequent,u):(u.push(` {
`),this.astGeneric(o.consequent,u),u.push(`
}
`)),o.alternate&&(u.push("else "),o.alternate.type==="BlockStatement"||o.alternate.type==="IfStatement"?this.astGeneric(o.alternate,u):(u.push(` {
`),this.astGeneric(o.alternate,u),u.push(`
}
`))),u}astSwitchStatement(o,u){if(o.type!=="SwitchStatement")throw this.astErrorOutput("Invalid switch statement",o);let{discriminant:m,cases:g}=o,y=this.getType(m),v=`switchDiscriminant${this.astKey(o,"_")}`;switch(y){case"Float":case"Number":u.push(`float ${v} = `),this.astGeneric(m,u),u.push(`;
`);break;case"Integer":u.push(`int ${v} = `),this.astGeneric(m,u),u.push(`;
`);break}if(g.length===1&&!g[0].test)return this.astGeneric(g[0].consequent,u),u;let w=!1,E=[],_=!1,M=!1;for(let A=0;A<g.length;A++){if(g[A].test){if(A===0||!M?(M=!0,u.push(`if (${v} == `)):w?(u.push(`${v} == `),w=!1):u.push(` else if (${v} == `),y==="Integer")switch(this.getType(g[A].test)){case"Number":case"Float":this.castValueToInteger(g[A].test,u);break;case"LiteralInteger":this.castLiteralToInteger(g[A].test,u);break}else if(y==="Float")switch(this.getType(g[A].test)){case"LiteralInteger":this.castLiteralToFloat(g[A].test,u);break;case"Integer":this.castValueToFloat(g[A].test,u);break}else throw new Error("unhanlded");if(!g[A].consequent||g[A].consequent.length===0){w=!0,u.push(" || ");continue}u.push(`) {
`)}else if(g.length>A+1){_=!0,this.astGeneric(g[A].consequent,E);continue}else u.push(` else {
`);this.astGeneric(g[A].consequent,u),u.push(`
}`)}return _&&(u.push(" else {"),u.push(E.join("")),u.push("}")),u}astThisExpression(o,u){return u.push("this"),u}astMemberExpression(o,u){let{property:m,name:g,signature:y,origin:v,type:w,xProperty:E,yProperty:_,zProperty:M}=this.getMemberExpressionDetails(o);switch(y){case"value.thread.value":case"this.thread.value":if(g!=="x"&&g!=="y"&&g!=="z")throw this.astErrorOutput("Unexpected expression, expected `this.thread.x`, `this.thread.y`, or `this.thread.z`",o);return u.push(`threadId.${g}`),u;case"this.output.value":if(this.dynamicOutput)switch(g){case"x":this.isState("casting-to-float")?u.push("float(uOutputDim.x)"):u.push("uOutputDim.x");break;case"y":this.isState("casting-to-float")?u.push("float(uOutputDim.y)"):u.push("uOutputDim.y");break;case"z":this.isState("casting-to-float")?u.push("float(uOutputDim.z)"):u.push("uOutputDim.z");break;default:throw this.astErrorOutput("Unexpected expression",o)}else switch(g){case"x":this.isState("casting-to-integer")?u.push(this.output[0]):u.push(this.output[0],".0");break;case"y":this.isState("casting-to-integer")?u.push(this.output[1]):u.push(this.output[1],".0");break;case"z":this.isState("casting-to-integer")?u.push(this.output[2]):u.push(this.output[2],".0");break;default:throw this.astErrorOutput("Unexpected expression",o)}return u;case"value":throw this.astErrorOutput("Unexpected expression",o);case"value[]":case"value[][]":case"value[][][]":case"value[][][][]":case"value.value":if(v==="Math")return u.push(Math[g]),u;let I=r.sanitizeName(g);switch(m){case"r":return u.push(`user_${I}.r`),u;case"g":return u.push(`user_${I}.g`),u;case"b":return u.push(`user_${I}.b`),u;case"a":return u.push(`user_${I}.a`),u}break;case"this.constants.value":if(typeof E>"u")switch(w){case"Array(2)":case"Array(3)":case"Array(4)":return u.push(`constants_${r.sanitizeName(g)}`),u}case"this.constants.value[]":case"this.constants.value[][]":case"this.constants.value[][][]":case"this.constants.value[][][][]":break;case"fn()[]":return this.astCallExpression(o.object,u),u.push("["),u.push(this.memberExpressionPropertyMarkup(m)),u.push("]"),u;case"fn()[][]":return this.astCallExpression(o.object.object,u),u.push("["),u.push(this.memberExpressionPropertyMarkup(o.object.property)),u.push("]"),u.push("["),u.push(this.memberExpressionPropertyMarkup(o.property)),u.push("]"),u;case"[][]":return this.astArrayExpression(o.object,u),u.push("["),u.push(this.memberExpressionPropertyMarkup(m)),u.push("]"),u;default:throw this.astErrorOutput("Unexpected expression",o)}if(o.computed===!1)switch(w){case"Number":case"Integer":case"Float":case"Boolean":return u.push(`${v}_${r.sanitizeName(g)}`),u}let A=`${v}_${r.sanitizeName(g)}`;switch(w){case"Array(2)":case"Array(3)":case"Array(4)":this.astGeneric(o.object,u),u.push("["),u.push(this.memberExpressionPropertyMarkup(E)),u.push("]");break;case"HTMLImageArray":u.push(`getImage3D(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");break;case"ArrayTexture(1)":u.push(`getFloatFromSampler2D(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");break;case"Array1D(2)":case"Array2D(2)":case"Array3D(2)":u.push(`getMemoryOptimizedVec2(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");break;case"ArrayTexture(2)":u.push(`getVec2FromSampler2D(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");break;case"Array1D(3)":case"Array2D(3)":case"Array3D(3)":u.push(`getMemoryOptimizedVec3(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");break;case"ArrayTexture(3)":u.push(`getVec3FromSampler2D(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");break;case"Array1D(4)":case"Array2D(4)":case"Array3D(4)":u.push(`getMemoryOptimizedVec4(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");break;case"ArrayTexture(4)":case"HTMLCanvas":case"HTMLImage":case"HTMLVideo":u.push(`getVec4FromSampler2D(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");break;case"NumberTexture":case"Array":case"Array2D":case"Array3D":case"Array4D":case"Input":case"Number":case"Float":case"Integer":if(this.precision==="single")u.push(`getMemoryOptimized32(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");else{let I=v==="user"?this.lookupFunctionArgumentBitRatio(this.name,g):this.constantBitRatios[g];switch(I){case 1:u.push(`get8(${A}, ${A}Size, ${A}Dim, `);break;case 2:u.push(`get16(${A}, ${A}Size, ${A}Dim, `);break;case 4:case 0:u.push(`get32(${A}, ${A}Size, ${A}Dim, `);break;default:throw new Error(`unhandled bit ratio of ${I}`)}this.memberExpressionXYZ(E,_,M,u),u.push(")")}break;case"MemoryOptimizedNumberTexture":u.push(`getMemoryOptimized32(${A}, ${A}Size, ${A}Dim, `),this.memberExpressionXYZ(E,_,M,u),u.push(")");break;case"Matrix(2)":case"Matrix(3)":case"Matrix(4)":u.push(`${A}[${this.memberExpressionPropertyMarkup(_)}]`),_&&u.push(`[${this.memberExpressionPropertyMarkup(E)}]`);break;default:throw new Error(`unhandled member expression "${w}"`)}return u}astCallExpression(o,u){if(!o.callee)throw this.astErrorOutput("Unknown CallExpression",o);let m=null,g=this.isAstMathFunction(o);if(g||o.callee.object&&o.callee.object.type==="ThisExpression"?m=o.callee.property.name:o.callee.type==="SequenceExpression"&&o.callee.expressions[0].type==="Literal"&&!isNaN(o.callee.expressions[0].raw)?m=o.callee.expressions[1].property.name:m=o.callee.name,!m)throw this.astErrorOutput("Unhandled function, couldn't find name",o);switch(m){case"pow":m="_pow";break;case"round":m="_round";break}if(this.calledFunctions.indexOf(m)<0&&this.calledFunctions.push(m),m==="random"&&this.plugins&&this.plugins.length>0)for(let y=0;y<this.plugins.length;y++){let v=this.plugins[y];if(v.functionMatch==="Math.random()"&&v.functionReplace)return u.push(v.functionReplace),u}if(this.onFunctionCall&&this.onFunctionCall(this.name,m,o.arguments),u.push(m),u.push("("),g)for(let y=0;y<o.arguments.length;++y){let v=o.arguments[y],w=this.getType(v);switch(y>0&&u.push(", "),w){case"Integer":this.castValueToFloat(v,u);break;default:this.astGeneric(v,u);break}}else{let y=this.lookupFunctionArgumentTypes(m)||[];for(let v=0;v<o.arguments.length;++v){let w=o.arguments[v],E=y[v];v>0&&u.push(", ");let _=this.getType(w);switch(E||(this.triggerImplyArgumentType(m,v,_,this),E=_),_){case"Boolean":this.astGeneric(w,u);continue;case"Number":case"Float":if(E==="Integer"){u.push("int("),this.astGeneric(w,u),u.push(")");continue}else if(E==="Number"||E==="Float"){this.astGeneric(w,u);continue}else if(E==="LiteralInteger"){this.castLiteralToFloat(w,u);continue}break;case"Integer":if(E==="Number"||E==="Float"){u.push("float("),this.astGeneric(w,u),u.push(")");continue}else if(E==="Integer"){this.astGeneric(w,u);continue}break;case"LiteralInteger":if(E==="Integer"){this.castLiteralToInteger(w,u);continue}else if(E==="Number"||E==="Float"){this.castLiteralToFloat(w,u);continue}else if(E==="LiteralInteger"){this.astGeneric(w,u);continue}break;case"Array(2)":case"Array(3)":case"Array(4)":if(E===_){if(w.type==="Identifier")u.push(`user_${r.sanitizeName(w.name)}`);else if(w.type==="ArrayExpression"||w.type==="MemberExpression"||w.type==="CallExpression")this.astGeneric(w,u);else throw this.astErrorOutput(`Unhandled argument type ${w.type}`,o);continue}break;case"HTMLCanvas":case"HTMLImage":case"HTMLImageArray":case"HTMLVideo":case"ArrayTexture(1)":case"ArrayTexture(2)":case"ArrayTexture(3)":case"ArrayTexture(4)":case"Array":case"Input":if(E===_){if(w.type!=="Identifier")throw this.astErrorOutput(`Unhandled argument type ${w.type}`,o);this.triggerImplyArgumentBitRatio(this.name,w.name,m,v);let M=r.sanitizeName(w.name);u.push(`user_${M},user_${M}Size,user_${M}Dim`);continue}break}throw this.astErrorOutput(`Unhandled argument combination of ${_} and ${E} for argument named "${w.name}"`,o)}}return u.push(")"),u}astArrayExpression(o,u){let m=this.getType(o),g=o.elements.length;switch(m){case"Matrix(2)":case"Matrix(3)":case"Matrix(4)":u.push(`mat${g}(`);break;default:u.push(`vec${g}(`)}for(let y=0;y<g;++y){y>0&&u.push(", ");let v=o.elements[y];this.astGeneric(v,u)}return u.push(")"),u}memberExpressionXYZ(o,u,m,g){return m?g.push(this.memberExpressionPropertyMarkup(m),", "):g.push("0, "),u?g.push(this.memberExpressionPropertyMarkup(u),", "):g.push("0, "),g.push(this.memberExpressionPropertyMarkup(o)),g}memberExpressionPropertyMarkup(o){if(!o)throw new Error("Property not set");let u=this.getType(o),m=[];switch(u){case"Number":case"Float":this.castValueToInteger(o,m);break;case"LiteralInteger":this.castLiteralToInteger(o,m);break;default:this.astGeneric(o,m)}return m.join("")}}let d={Array:"sampler2D","Array(2)":"vec2","Array(3)":"vec3","Array(4)":"vec4","Matrix(2)":"mat2","Matrix(3)":"mat3","Matrix(4)":"mat4",Array2D:"sampler2D",Array3D:"sampler2D",Boolean:"bool",Float:"float",Input:"sampler2D",Integer:"int",Number:"float",LiteralInteger:"float",NumberTexture:"sampler2D",MemoryOptimizedNumberTexture:"sampler2D","ArrayTexture(1)":"sampler2D","ArrayTexture(2)":"sampler2D","ArrayTexture(3)":"sampler2D","ArrayTexture(4)":"sampler2D",HTMLVideo:"sampler2D",HTMLCanvas:"sampler2D",HTMLImage:"sampler2D",HTMLImageArray:"sampler2DArray"},c={"===":"==","!==":"!="};i.exports={WebGLFunctionNode:f}},{"../../utils":114,"../function-node":10}],39:[function(n,i,s){let{WebGLKernelValueBoolean:r}=n("./kernel-value/boolean"),{WebGLKernelValueFloat:a}=n("./kernel-value/float"),{WebGLKernelValueInteger:f}=n("./kernel-value/integer"),{WebGLKernelValueHTMLImage:d}=n("./kernel-value/html-image"),{WebGLKernelValueDynamicHTMLImage:c}=n("./kernel-value/dynamic-html-image"),{WebGLKernelValueHTMLVideo:h}=n("./kernel-value/html-video"),{WebGLKernelValueDynamicHTMLVideo:o}=n("./kernel-value/dynamic-html-video"),{WebGLKernelValueSingleInput:u}=n("./kernel-value/single-input"),{WebGLKernelValueDynamicSingleInput:m}=n("./kernel-value/dynamic-single-input"),{WebGLKernelValueUnsignedInput:g}=n("./kernel-value/unsigned-input"),{WebGLKernelValueDynamicUnsignedInput:y}=n("./kernel-value/dynamic-unsigned-input"),{WebGLKernelValueMemoryOptimizedNumberTexture:v}=n("./kernel-value/memory-optimized-number-texture"),{WebGLKernelValueDynamicMemoryOptimizedNumberTexture:w}=n("./kernel-value/dynamic-memory-optimized-number-texture"),{WebGLKernelValueNumberTexture:E}=n("./kernel-value/number-texture"),{WebGLKernelValueDynamicNumberTexture:_}=n("./kernel-value/dynamic-number-texture"),{WebGLKernelValueSingleArray:M}=n("./kernel-value/single-array"),{WebGLKernelValueDynamicSingleArray:A}=n("./kernel-value/dynamic-single-array"),{WebGLKernelValueSingleArray1DI:I}=n("./kernel-value/single-array1d-i"),{WebGLKernelValueDynamicSingleArray1DI:C}=n("./kernel-value/dynamic-single-array1d-i"),{WebGLKernelValueSingleArray2DI:T}=n("./kernel-value/single-array2d-i"),{WebGLKernelValueDynamicSingleArray2DI:b}=n("./kernel-value/dynamic-single-array2d-i"),{WebGLKernelValueSingleArray3DI:L}=n("./kernel-value/single-array3d-i"),{WebGLKernelValueDynamicSingleArray3DI:P}=n("./kernel-value/dynamic-single-array3d-i"),{WebGLKernelValueSingleArray2:X}=n("./kernel-value/single-array2"),{WebGLKernelValueSingleArray3:D}=n("./kernel-value/single-array3"),{WebGLKernelValueSingleArray4:z}=n("./kernel-value/single-array4"),{WebGLKernelValueUnsignedArray:H}=n("./kernel-value/unsigned-array"),{WebGLKernelValueDynamicUnsignedArray:B}=n("./kernel-value/dynamic-unsigned-array"),$={unsigned:{dynamic:{Boolean:r,Integer:f,Float:a,Array:B,"Array(2)":!1,"Array(3)":!1,"Array(4)":!1,"Array1D(2)":!1,"Array1D(3)":!1,"Array1D(4)":!1,"Array2D(2)":!1,"Array2D(3)":!1,"Array2D(4)":!1,"Array3D(2)":!1,"Array3D(3)":!1,"Array3D(4)":!1,Input:y,NumberTexture:_,"ArrayTexture(1)":_,"ArrayTexture(2)":_,"ArrayTexture(3)":_,"ArrayTexture(4)":_,MemoryOptimizedNumberTexture:w,HTMLCanvas:c,HTMLImage:c,HTMLImageArray:!1,HTMLVideo:o},static:{Boolean:r,Float:a,Integer:f,Array:H,"Array(2)":!1,"Array(3)":!1,"Array(4)":!1,"Array1D(2)":!1,"Array1D(3)":!1,"Array1D(4)":!1,"Array2D(2)":!1,"Array2D(3)":!1,"Array2D(4)":!1,"Array3D(2)":!1,"Array3D(3)":!1,"Array3D(4)":!1,Input:g,NumberTexture:E,"ArrayTexture(1)":E,"ArrayTexture(2)":E,"ArrayTexture(3)":E,"ArrayTexture(4)":E,MemoryOptimizedNumberTexture:v,HTMLCanvas:d,HTMLImage:d,HTMLImageArray:!1,HTMLVideo:h}},single:{dynamic:{Boolean:r,Integer:f,Float:a,Array:A,"Array(2)":X,"Array(3)":D,"Array(4)":z,"Array1D(2)":C,"Array1D(3)":C,"Array1D(4)":C,"Array2D(2)":b,"Array2D(3)":b,"Array2D(4)":b,"Array3D(2)":P,"Array3D(3)":P,"Array3D(4)":P,Input:m,NumberTexture:_,"ArrayTexture(1)":_,"ArrayTexture(2)":_,"ArrayTexture(3)":_,"ArrayTexture(4)":_,MemoryOptimizedNumberTexture:w,HTMLCanvas:c,HTMLImage:c,HTMLImageArray:!1,HTMLVideo:o},static:{Boolean:r,Float:a,Integer:f,Array:M,"Array(2)":X,"Array(3)":D,"Array(4)":z,"Array1D(2)":I,"Array1D(3)":I,"Array1D(4)":I,"Array2D(2)":T,"Array2D(3)":T,"Array2D(4)":T,"Array3D(2)":L,"Array3D(3)":L,"Array3D(4)":L,Input:u,NumberTexture:E,"ArrayTexture(1)":E,"ArrayTexture(2)":E,"ArrayTexture(3)":E,"ArrayTexture(4)":E,MemoryOptimizedNumberTexture:v,HTMLCanvas:d,HTMLImage:d,HTMLImageArray:!1,HTMLVideo:h}}};function j(K,ne,Z,le){if(!K)throw new Error("type missing");if(!ne)throw new Error("dynamic missing");if(!Z)throw new Error("precision missing");le.type&&(K=le.type);let ce=$[Z][ne];if(ce[K]===!1)return null;if(ce[K]===void 0)throw new Error(`Could not find a KernelValue for ${K}`);return ce[K]}i.exports={lookupKernelValueType:j,kernelValueMaps:$}},{"./kernel-value/boolean":41,"./kernel-value/dynamic-html-image":42,"./kernel-value/dynamic-html-video":43,"./kernel-value/dynamic-memory-optimized-number-texture":44,"./kernel-value/dynamic-number-texture":45,"./kernel-value/dynamic-single-array":46,"./kernel-value/dynamic-single-array1d-i":47,"./kernel-value/dynamic-single-array2d-i":48,"./kernel-value/dynamic-single-array3d-i":49,"./kernel-value/dynamic-single-input":50,"./kernel-value/dynamic-unsigned-array":51,"./kernel-value/dynamic-unsigned-input":52,"./kernel-value/float":53,"./kernel-value/html-image":54,"./kernel-value/html-video":55,"./kernel-value/integer":57,"./kernel-value/memory-optimized-number-texture":58,"./kernel-value/number-texture":59,"./kernel-value/single-array":60,"./kernel-value/single-array1d-i":61,"./kernel-value/single-array2":62,"./kernel-value/single-array2d-i":63,"./kernel-value/single-array3":64,"./kernel-value/single-array3d-i":65,"./kernel-value/single-array4":66,"./kernel-value/single-input":67,"./kernel-value/unsigned-array":68,"./kernel-value/unsigned-input":69}],40:[function(n,i,s){let{WebGLKernelValue:r}=n("./index"),{Input:a}=n("../../../input");class f extends r{checkSize(c,h){if(!this.kernel.validate)return;let{maxTextureSize:o}=this.kernel.constructor.features;if(c>o||h>o)throw c>h?new Error(`Argument texture width of ${c} larger than maximum size of ${o} for your GPU`):c<h?new Error(`Argument texture height of ${h} larger than maximum size of ${o} for your GPU`):new Error(`Argument texture height and width of ${h} larger than maximum size of ${o} for your GPU`)}setup(){this.requestTexture(),this.setupTexture(),this.defineTexture()}requestTexture(){this.texture=this.onRequestTexture()}defineTexture(){let{context:c}=this;c.activeTexture(this.contextHandle),c.bindTexture(c.TEXTURE_2D,this.texture),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST)}setupTexture(){this.contextHandle=this.onRequestContextHandle(),this.index=this.onRequestIndex(),this.dimensionsId=this.id+"Dim",this.sizeId=this.id+"Size"}getBitRatio(c){if(Array.isArray(c[0]))return this.getBitRatio(c[0]);if(c.constructor===a)return this.getBitRatio(c.value);switch(c.constructor){case Uint8ClampedArray:case Uint8Array:case Int8Array:return 1;case Uint16Array:case Int16Array:return 2;case Float32Array:case Int32Array:default:return 4}}destroy(){this.prevArg&&this.prevArg.delete(),this.context.deleteTexture(this.texture)}}i.exports={WebGLKernelArray:f}},{"../../../input":110,"./index":56}],41:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValue:a}=n("./index");class f extends a{constructor(c,h){super(c,h),this.uploadValue=c}getSource(c){return this.origin==="constants"?`const bool ${this.id} = ${c};
`:`uniform bool ${this.id};
`}getStringValueHandler(){return`const uploadValue_${this.name} = ${this.varName};
`}updateValue(c){this.origin!=="constants"&&this.kernel.setUniform1i(this.id,this.uploadValue=c)}}i.exports={WebGLKernelValueBoolean:f}},{"../../../utils":114,"./index":56}],42:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueHTMLImage:a}=n("./html-image");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){let{width:h,height:o}=c;this.checkSize(h,o),this.dimensions=[h,o,1],this.textureSize=[h,o],this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicHTMLImage:f}},{"../../../utils":114,"./html-image":54}],43:[function(n,i,s){let{WebGLKernelValueDynamicHTMLImage:r}=n("./dynamic-html-image");class a extends r{}i.exports={WebGLKernelValueDynamicHTMLVideo:a}},{"./dynamic-html-image":42}],44:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueMemoryOptimizedNumberTexture:a}=n("./memory-optimized-number-texture");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){this.dimensions=c.dimensions,this.checkSize(c.size[0],c.size[1]),this.textureSize=c.size,this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicMemoryOptimizedNumberTexture:f}},{"../../../utils":114,"./memory-optimized-number-texture":58}],45:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueNumberTexture:a}=n("./number-texture");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){this.dimensions=c.dimensions,this.checkSize(c.size[0],c.size[1]),this.textureSize=c.size,this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicNumberTexture:f}},{"../../../utils":114,"./number-texture":59}],46:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleArray:a}=n("./single-array");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){this.dimensions=r.getDimensions(c,!0),this.textureSize=r.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio,this.checkSize(this.textureSize[0],this.textureSize[1]),this.uploadValue=new Float32Array(this.uploadArrayLength),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicSingleArray:f}},{"../../../utils":114,"./single-array":60}],47:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleArray1DI:a}=n("./single-array1d-i");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){this.setShape(c),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicSingleArray1DI:f}},{"../../../utils":114,"./single-array1d-i":61}],48:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleArray2DI:a}=n("./single-array2d-i");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){this.setShape(c),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicSingleArray2DI:f}},{"../../../utils":114,"./single-array2d-i":63}],49:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleArray3DI:a}=n("./single-array3d-i");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){this.setShape(c),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicSingleArray3DI:f}},{"../../../utils":114,"./single-array3d-i":65}],50:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleInput:a}=n("./single-input");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){let[h,o,u]=c.size;this.dimensions=new Int32Array([h||1,o||1,u||1]),this.textureSize=r.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio,this.checkSize(this.textureSize[0],this.textureSize[1]),this.uploadValue=new Float32Array(this.uploadArrayLength),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicSingleInput:f}},{"../../../utils":114,"./single-input":67}],51:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueUnsignedArray:a}=n("./unsigned-array");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){this.dimensions=r.getDimensions(c,!0),this.textureSize=r.getMemoryOptimizedPackedTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*(4/this.bitRatio),this.checkSize(this.textureSize[0],this.textureSize[1]);let h=this.getTransferArrayType(c);this.preUploadValue=new h(this.uploadArrayLength),this.uploadValue=new Uint8Array(this.preUploadValue.buffer),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicUnsignedArray:f}},{"../../../utils":114,"./unsigned-array":68}],52:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueUnsignedInput:a}=n("./unsigned-input");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}updateValue(c){let[h,o,u]=c.size;this.dimensions=new Int32Array([h||1,o||1,u||1]),this.textureSize=r.getMemoryOptimizedPackedTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*(4/this.bitRatio),this.checkSize(this.textureSize[0],this.textureSize[1]);let m=this.getTransferArrayType(c.value);this.preUploadValue=new m(this.uploadArrayLength),this.uploadValue=new Uint8Array(this.preUploadValue.buffer),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGLKernelValueDynamicUnsignedInput:f}},{"../../../utils":114,"./unsigned-input":69}],53:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValue:a}=n("./index");class f extends a{constructor(c,h){super(c,h),this.uploadValue=c}getStringValueHandler(){return`const uploadValue_${this.name} = ${this.varName};
`}getSource(c){return this.origin==="constants"?Number.isInteger(c)?`const float ${this.id} = ${c}.0;
`:`const float ${this.id} = ${c};
`:`uniform float ${this.id};
`}updateValue(c){this.origin!=="constants"&&this.kernel.setUniform1f(this.id,this.uploadValue=c)}}i.exports={WebGLKernelValueFloat:f}},{"../../../utils":114,"./index":56}],54:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array");class f extends a{constructor(c,h){super(c,h);let{width:o,height:u}=c;this.checkSize(o,u),this.dimensions=[o,u,1],this.textureSize=[o,u],this.uploadValue=c}getStringValueHandler(){return`const uploadValue_${this.name} = ${this.varName};
`}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!0),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,this.uploadValue=c),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueHTMLImage:f}},{"../../../utils":114,"./array":40}],55:[function(n,i,s){let{WebGLKernelValueHTMLImage:r}=n("./html-image");class a extends r{}i.exports={WebGLKernelValueHTMLVideo:a}},{"./html-image":54}],56:[function(n,i,s){let{utils:r}=n("../../../utils"),{KernelValue:a}=n("../../kernel-value");class f extends a{constructor(c,h){super(c,h),this.dimensionsId=null,this.sizeId=null,this.initialValueConstructor=c.constructor,this.onRequestTexture=h.onRequestTexture,this.onRequestIndex=h.onRequestIndex,this.uploadValue=null,this.textureSize=null,this.bitRatio=null,this.prevArg=null}get id(){return`${this.origin}_${r.sanitizeName(this.name)}`}setup(){}getTransferArrayType(c){if(Array.isArray(c[0]))return this.getTransferArrayType(c[0]);switch(c.constructor){case Array:case Int32Array:case Int16Array:case Int8Array:return Float32Array;case Uint8ClampedArray:case Uint8Array:case Uint16Array:case Uint32Array:case Float32Array:case Float64Array:return c.constructor}return console.warn("Unfamiliar constructor type.  Will go ahead and use, but likley this may result in a transfer of zeros"),c.constructor}getStringValueHandler(){throw new Error(`"getStringValueHandler" not implemented on ${this.constructor.name}`)}getVariablePrecisionString(){return this.kernel.getVariablePrecisionString(this.textureSize||void 0,this.tactic||void 0)}destroy(){}}i.exports={WebGLKernelValue:f}},{"../../../utils":114,"../../kernel-value":35}],57:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValue:a}=n("./index");class f extends a{constructor(c,h){super(c,h),this.uploadValue=c}getStringValueHandler(){return`const uploadValue_${this.name} = ${this.varName};
`}getSource(c){return this.origin==="constants"?`const int ${this.id} = ${parseInt(c)};
`:`uniform int ${this.id};
`}updateValue(c){this.origin!=="constants"&&this.kernel.setUniform1i(this.id,this.uploadValue=c)}}i.exports={WebGLKernelValueInteger:f}},{"../../../utils":114,"./index":56}],58:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array"),f="Source and destination textures are the same.  Use immutable = true and manually cleanup kernel output texture memory with texture.delete()";class d extends a{constructor(h,o){super(h,o);let[u,m]=h.size;this.checkSize(u,m),this.dimensions=h.dimensions,this.textureSize=h.size,this.uploadValue=h.texture,this.forceUploadEachRun=!0}setup(){this.setupTexture()}getStringValueHandler(){return`const uploadValue_${this.name} = ${this.varName}.texture;
`}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(h){if(h.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(h.constructor);return}if(this.checkContext&&h.context!==this.context)throw new Error(`Value ${this.name} (${this.type}) must be from same context`);let{kernel:o,context:u}=this;if(o.pipeline)if(o.immutable)o.updateTextureArgumentRefs(this,h);else{if(o.texture.texture===h.texture)throw new Error(f);if(o.mappedTextures){let{mappedTextures:m}=o;for(let g=0;g<m.length;g++)if(m[g].texture===h.texture)throw new Error(f)}}u.activeTexture(this.contextHandle),u.bindTexture(u.TEXTURE_2D,this.uploadValue=h.texture),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueMemoryOptimizedNumberTexture:d,sameError:f}},{"../../../utils":114,"./array":40}],59:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array"),{sameError:f}=n("./memory-optimized-number-texture");class d extends a{constructor(h,o){super(h,o);let[u,m]=h.size;this.checkSize(u,m);let{size:g,dimensions:y}=h;this.bitRatio=this.getBitRatio(h),this.dimensions=y,this.textureSize=g,this.uploadValue=h.texture,this.forceUploadEachRun=!0}setup(){this.setupTexture()}getStringValueHandler(){return`const uploadValue_${this.name} = ${this.varName}.texture;
`}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(h){if(h.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(h.constructor);return}if(this.checkContext&&h.context!==this.context)throw new Error(`Value ${this.name} (${this.type}) must be from same context`);let{kernel:o,context:u}=this;if(o.pipeline)if(o.immutable)o.updateTextureArgumentRefs(this,h);else{if(o.texture.texture===h.texture)throw new Error(f);if(o.mappedTextures){let{mappedTextures:m}=o;for(let g=0;g<m.length;g++)if(m[g].texture===h.texture)throw new Error(f)}}u.activeTexture(this.contextHandle),u.bindTexture(u.TEXTURE_2D,this.uploadValue=h.texture),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueNumberTexture:d}},{"../../../utils":114,"./array":40,"./memory-optimized-number-texture":58}],60:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array");class f extends a{constructor(c,h){super(c,h),this.bitRatio=4,this.dimensions=r.getDimensions(c,!0),this.textureSize=r.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio,this.checkSize(this.textureSize[0],this.textureSize[1]),this.uploadValue=new Float32Array(this.uploadArrayLength)}getStringValueHandler(){return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,`flattenTo(${this.varName}, uploadValue_${this.name})`])}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flattenTo(c,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueSingleArray:f}},{"../../../utils":114,"./array":40}],61:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array");class f extends a{constructor(c,h){super(c,h),this.bitRatio=4,this.setShape(c)}setShape(c){let h=r.getDimensions(c,!0);this.textureSize=r.getMemoryOptimizedFloatTextureSize(h,this.bitRatio),this.dimensions=new Int32Array([h[1],1,1]),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio,this.checkSize(this.textureSize[0],this.textureSize[1]),this.uploadValue=new Float32Array(this.uploadArrayLength)}getStringValueHandler(){return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,`flattenTo(${this.varName}, uploadValue_${this.name})`])}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flatten2dArrayTo(c,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueSingleArray1DI:f}},{"../../../utils":114,"./array":40}],62:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValue:a}=n("./index");class f extends a{constructor(c,h){super(c,h),this.uploadValue=c}getSource(c){return this.origin==="constants"?`const vec2 ${this.id} = vec2(${c[0]},${c[1]});
`:`uniform vec2 ${this.id};
`}getStringValueHandler(){return this.origin==="constants"?"":`const uploadValue_${this.name} = ${this.varName};
`}updateValue(c){this.origin!=="constants"&&this.kernel.setUniform2fv(this.id,this.uploadValue=c)}}i.exports={WebGLKernelValueSingleArray2:f}},{"../../../utils":114,"./index":56}],63:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array");class f extends a{constructor(c,h){super(c,h),this.bitRatio=4,this.setShape(c)}setShape(c){let h=r.getDimensions(c,!0);this.textureSize=r.getMemoryOptimizedFloatTextureSize(h,this.bitRatio),this.dimensions=new Int32Array([h[1],h[2],1]),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio,this.checkSize(this.textureSize[0],this.textureSize[1]),this.uploadValue=new Float32Array(this.uploadArrayLength)}getStringValueHandler(){return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,`flattenTo(${this.varName}, uploadValue_${this.name})`])}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flatten3dArrayTo(c,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueSingleArray2DI:f}},{"../../../utils":114,"./array":40}],64:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValue:a}=n("./index");class f extends a{constructor(c,h){super(c,h),this.uploadValue=c}getSource(c){return this.origin==="constants"?`const vec3 ${this.id} = vec3(${c[0]},${c[1]},${c[2]});
`:`uniform vec3 ${this.id};
`}getStringValueHandler(){return this.origin==="constants"?"":`const uploadValue_${this.name} = ${this.varName};
`}updateValue(c){this.origin!=="constants"&&this.kernel.setUniform3fv(this.id,this.uploadValue=c)}}i.exports={WebGLKernelValueSingleArray3:f}},{"../../../utils":114,"./index":56}],65:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array");class f extends a{constructor(c,h){super(c,h),this.bitRatio=4,this.setShape(c)}setShape(c){let h=r.getDimensions(c,!0);this.textureSize=r.getMemoryOptimizedFloatTextureSize(h,this.bitRatio),this.dimensions=new Int32Array([h[1],h[2],h[3]]),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio,this.checkSize(this.textureSize[0],this.textureSize[1]),this.uploadValue=new Float32Array(this.uploadArrayLength)}getStringValueHandler(){return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,`flattenTo(${this.varName}, uploadValue_${this.name})`])}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flatten4dArrayTo(c,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueSingleArray3DI:f}},{"../../../utils":114,"./array":40}],66:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValue:a}=n("./index");class f extends a{constructor(c,h){super(c,h),this.uploadValue=c}getSource(c){return this.origin==="constants"?`const vec4 ${this.id} = vec4(${c[0]},${c[1]},${c[2]},${c[3]});
`:`uniform vec4 ${this.id};
`}getStringValueHandler(){return this.origin==="constants"?"":`const uploadValue_${this.name} = ${this.varName};
`}updateValue(c){this.origin!=="constants"&&this.kernel.setUniform4fv(this.id,this.uploadValue=c)}}i.exports={WebGLKernelValueSingleArray4:f}},{"../../../utils":114,"./index":56}],67:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array");class f extends a{constructor(c,h){super(c,h),this.bitRatio=4;let[o,u,m]=c.size;this.dimensions=new Int32Array([o||1,u||1,m||1]),this.textureSize=r.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio,this.checkSize(this.textureSize[0],this.textureSize[1]),this.uploadValue=new Float32Array(this.uploadArrayLength)}getStringValueHandler(){return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`,`flattenTo(${this.varName}.value, uploadValue_${this.name})`])}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flattenTo(c.value,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueSingleInput:f}},{"../../../utils":114,"./array":40}],68:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array");class f extends a{constructor(c,h){super(c,h),this.bitRatio=this.getBitRatio(c),this.dimensions=r.getDimensions(c,!0),this.textureSize=r.getMemoryOptimizedPackedTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*(4/this.bitRatio),this.checkSize(this.textureSize[0],this.textureSize[1]),this.TranserArrayType=this.getTransferArrayType(c),this.preUploadValue=new this.TranserArrayType(this.uploadArrayLength),this.uploadValue=new Uint8Array(this.preUploadValue.buffer)}getStringValueHandler(){return r.linesToString([`const preUploadValue_${this.name} = new ${this.TranserArrayType.name}(${this.uploadArrayLength})`,`const uploadValue_${this.name} = new Uint8Array(preUploadValue_${this.name}.buffer)`,`flattenTo(${this.varName}, preUploadValue_${this.name})`])}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flattenTo(c,this.preUploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.UNSIGNED_BYTE,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueUnsignedArray:f}},{"../../../utils":114,"./array":40}],69:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("./array");class f extends a{constructor(c,h){super(c,h),this.bitRatio=this.getBitRatio(c);let[o,u,m]=c.size;this.dimensions=new Int32Array([o||1,u||1,m||1]),this.textureSize=r.getMemoryOptimizedPackedTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*(4/this.bitRatio),this.checkSize(this.textureSize[0],this.textureSize[1]),this.TranserArrayType=this.getTransferArrayType(c.value),this.preUploadValue=new this.TranserArrayType(this.uploadArrayLength),this.uploadValue=new Uint8Array(this.preUploadValue.buffer)}getStringValueHandler(){return r.linesToString([`const preUploadValue_${this.name} = new ${this.TranserArrayType.name}(${this.uploadArrayLength})`,`const uploadValue_${this.name} = new Uint8Array(preUploadValue_${this.name}.buffer)`,`flattenTo(${this.varName}.value, preUploadValue_${this.name})`])}getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return}let{context:h}=this;r.flattenTo(c.value,this.preUploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.UNSIGNED_BYTE,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGLKernelValueUnsignedInput:f}},{"../../../utils":114,"./array":40}],70:[function(n,i,s){let{GLKernel:r}=n("../gl/kernel"),{FunctionBuilder:a}=n("../function-builder"),{WebGLFunctionNode:f}=n("./function-node"),{utils:d}=n("../../utils"),c=n("../../plugins/math-random-uniformly-distributed"),{fragmentShader:h}=n("./fragment-shader"),{vertexShader:o}=n("./vertex-shader"),{glKernelString:u}=n("../gl/kernel-string"),{lookupKernelValueType:m}=n("./kernel-value-maps"),g=null,y=null,v=null,w=null,E=null,_=[c],M=[],A={};class I extends r{static get isSupported(){return g!==null||(this.setupFeatureChecks(),g=this.isContextMatch(v)),g}static setupFeatureChecks(){typeof document<"u"?y=document.createElement("canvas"):typeof OffscreenCanvas<"u"&&(y=new OffscreenCanvas(0,0)),y&&(v=y.getContext("webgl")||y.getContext("experimental-webgl"),!(!v||!v.getExtension)&&(w={OES_texture_float:v.getExtension("OES_texture_float"),OES_texture_float_linear:v.getExtension("OES_texture_float_linear"),OES_element_index_uint:v.getExtension("OES_element_index_uint"),WEBGL_draw_buffers:v.getExtension("WEBGL_draw_buffers")},E=this.getFeatures()))}static isContextMatch(T){return typeof WebGLRenderingContext<"u"?T instanceof WebGLRenderingContext:!1}static getIsTextureFloat(){return Boolean(w.OES_texture_float)}static getIsDrawBuffers(){return Boolean(w.WEBGL_draw_buffers)}static getChannelCount(){return w.WEBGL_draw_buffers?v.getParameter(w.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL):1}static getMaxTextureSize(){return v.getParameter(v.MAX_TEXTURE_SIZE)}static lookupKernelValueType(T,b,L,P){return m(T,b,L,P)}static get testCanvas(){return y}static get testContext(){return v}static get features(){return E}static get fragmentShader(){return h}static get vertexShader(){return o}constructor(T,b){super(T,b),this.program=null,this.pipeline=b.pipeline,this.endianness=d.systemEndianness(),this.extensions={},this.argumentTextureCount=0,this.constantTextureCount=0,this.fragShader=null,this.vertShader=null,this.drawBuffersMap=null,this.maxTexSize=null,this.onRequestSwitchKernel=null,this.texture=null,this.mappedTextures=null,this.mergeSettings(T.settings||b),this.threadDim=null,this.framebuffer=null,this.buffer=null,this.textureCache=[],this.programUniformLocationCache={},this.uniform1fCache={},this.uniform1iCache={},this.uniform2fCache={},this.uniform2fvCache={},this.uniform2ivCache={},this.uniform3fvCache={},this.uniform3ivCache={},this.uniform4fvCache={},this.uniform4ivCache={}}initCanvas(){if(typeof document<"u"){let T=document.createElement("canvas");return T.width=2,T.height=2,T}else if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(0,0)}initContext(){let T={alpha:!1,depth:!1,antialias:!1};return this.canvas.getContext("webgl",T)||this.canvas.getContext("experimental-webgl",T)}initPlugins(T){let b=[],{source:L}=this;if(typeof L=="string")for(let P=0;P<_.length;P++){let X=_[P];L.match(X.functionMatch)&&b.push(X)}else if(typeof L=="object"&&T.pluginNames)for(let P=0;P<_.length;P++){let X=_[P];T.pluginNames.some(z=>z===X.name)&&b.push(X)}return b}initExtensions(){this.extensions={OES_texture_float:this.context.getExtension("OES_texture_float"),OES_texture_float_linear:this.context.getExtension("OES_texture_float_linear"),OES_element_index_uint:this.context.getExtension("OES_element_index_uint"),WEBGL_draw_buffers:this.context.getExtension("WEBGL_draw_buffers"),WEBGL_color_buffer_float:this.context.getExtension("WEBGL_color_buffer_float")}}validateSettings(T){if(!this.validate){this.texSize=d.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},this.output);return}let{features:b}=this.constructor;if(this.optimizeFloatMemory===!0&&!b.isTextureFloat)throw new Error("Float textures are not supported");if(this.precision==="single"&&!b.isFloatRead)throw new Error("Single precision not supported");if(!this.graphical&&this.precision===null&&b.isTextureFloat&&(this.precision=b.isFloatRead?"single":"unsigned"),this.subKernels&&this.subKernels.length>0&&!this.extensions.WEBGL_draw_buffers)throw new Error("could not instantiate draw buffers extension");if(this.fixIntegerDivisionAccuracy===null?this.fixIntegerDivisionAccuracy=!b.isIntegerDivisionAccurate:this.fixIntegerDivisionAccuracy&&b.isIntegerDivisionAccurate&&(this.fixIntegerDivisionAccuracy=!1),this.checkOutput(),!this.output||this.output.length===0){if(T.length!==1)throw new Error("Auto output only supported for kernels with only one input");let L=d.getVariableType(T[0],this.strictIntegers);switch(L){case"Array":this.output=d.getDimensions(L);break;case"NumberTexture":case"MemoryOptimizedNumberTexture":case"ArrayTexture(1)":case"ArrayTexture(2)":case"ArrayTexture(3)":case"ArrayTexture(4)":this.output=T[0].output;break;default:throw new Error("Auto output not supported for input type: "+L)}}if(this.graphical){if(this.output.length!==2)throw new Error("Output must have 2 dimensions on graphical mode");this.precision==="precision"&&(this.precision="unsigned",console.warn("Cannot use graphical mode and single precision at the same time")),this.texSize=d.clone(this.output);return}else this.precision===null&&b.isTextureFloat&&(this.precision="single");this.texSize=d.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},this.output),this.checkTextureSize()}updateMaxTexSize(){let{texSize:T,canvas:b}=this;if(this.maxTexSize===null){let L=M.indexOf(b);L===-1&&(L=M.length,M.push(b),A[L]=[T[0],T[1]]),this.maxTexSize=A[L]}this.maxTexSize[0]<T[0]&&(this.maxTexSize[0]=T[0]),this.maxTexSize[1]<T[1]&&(this.maxTexSize[1]=T[1])}setupArguments(T){this.kernelArguments=[],this.argumentTextureCount=0;let b=this.argumentTypes===null;if(b&&(this.argumentTypes=[]),this.argumentSizes=[],this.argumentBitRatios=[],T.length<this.argumentNames.length)throw new Error("not enough arguments for kernel");if(T.length>this.argumentNames.length)throw new Error("too many arguments for kernel");let{context:L}=this,P=0,X=()=>this.createTexture(),D=()=>this.constantTextureCount+P++,z=B=>{this.switchKernels({type:"argumentMismatch",needed:B})},H=()=>L.TEXTURE0+this.constantTextureCount+this.argumentTextureCount++;for(let B=0;B<T.length;B++){let $=T[B],j=this.argumentNames[B],K;b?(K=d.getVariableType($,this.strictIntegers),this.argumentTypes.push(K)):K=this.argumentTypes[B];let ne=this.constructor.lookupKernelValueType(K,this.dynamicArguments?"dynamic":"static",this.precision,T[B]);if(ne===null)return this.requestFallback(T);let Z=new ne($,{name:j,type:K,tactic:this.tactic,origin:"user",context:L,checkContext:this.checkContext,kernel:this,strictIntegers:this.strictIntegers,onRequestTexture:X,onRequestIndex:D,onUpdateValueMismatch:z,onRequestContextHandle:H});this.kernelArguments.push(Z),Z.setup(),this.argumentSizes.push(Z.textureSize),this.argumentBitRatios[B]=Z.bitRatio}}createTexture(){let T=this.context.createTexture();return this.textureCache.push(T),T}setupConstants(T){let{context:b}=this;this.kernelConstants=[],this.forceUploadKernelConstants=[];let L=this.constantTypes===null;L&&(this.constantTypes={}),this.constantBitRatios={};let P=0;for(let X in this.constants){let D=this.constants[X],z;L?(z=d.getVariableType(D,this.strictIntegers),this.constantTypes[X]=z):z=this.constantTypes[X];let H=this.constructor.lookupKernelValueType(z,"static",this.precision,D);if(H===null)return this.requestFallback(T);let B=new H(D,{name:X,type:z,tactic:this.tactic,origin:"constants",context:this.context,checkContext:this.checkContext,kernel:this,strictIntegers:this.strictIntegers,onRequestTexture:()=>this.createTexture(),onRequestIndex:()=>P++,onRequestContextHandle:()=>b.TEXTURE0+this.constantTextureCount++});this.constantBitRatios[X]=B.bitRatio,this.kernelConstants.push(B),B.setup(),B.forceUploadEachRun&&this.forceUploadKernelConstants.push(B)}}build(){if(this.built||(this.initExtensions(),this.validateSettings(arguments),this.setupConstants(arguments),this.fallbackRequested)||(this.setupArguments(arguments),this.fallbackRequested))return;this.updateMaxTexSize(),this.translateSource();let T=this.pickRenderStrategy(arguments);if(T)return T;let{texSize:b,context:L,canvas:P}=this;L.enable(L.SCISSOR_TEST),this.pipeline&&this.precision==="single"?(L.viewport(0,0,this.maxTexSize[0],this.maxTexSize[1]),P.width=this.maxTexSize[0],P.height=this.maxTexSize[1]):(L.viewport(0,0,this.maxTexSize[0],this.maxTexSize[1]),P.width=this.maxTexSize[0],P.height=this.maxTexSize[1]);let X=this.threadDim=Array.from(this.output);for(;X.length<3;)X.push(1);let D=this.getVertexShader(arguments),z=L.createShader(L.VERTEX_SHADER);L.shaderSource(z,D),L.compileShader(z),this.vertShader=z;let H=this.getFragmentShader(arguments),B=L.createShader(L.FRAGMENT_SHADER);if(L.shaderSource(B,H),L.compileShader(B),this.fragShader=B,this.debug&&(console.log("GLSL Shader Output:"),console.log(H)),!L.getShaderParameter(z,L.COMPILE_STATUS))throw new Error("Error compiling vertex shader: "+L.getShaderInfoLog(z));if(!L.getShaderParameter(B,L.COMPILE_STATUS))throw new Error("Error compiling fragment shader: "+L.getShaderInfoLog(B));let $=this.program=L.createProgram();L.attachShader($,z),L.attachShader($,B),L.linkProgram($),this.framebuffer=L.createFramebuffer(),this.framebuffer.width=b[0],this.framebuffer.height=b[1],this.rawValueFramebuffers={};let j=new Float32Array([-1,-1,1,-1,-1,1,1,1]),K=new Float32Array([0,0,1,0,0,1,1,1]),ne=j.byteLength,Z=this.buffer;Z?L.bindBuffer(L.ARRAY_BUFFER,Z):(Z=this.buffer=L.createBuffer(),L.bindBuffer(L.ARRAY_BUFFER,Z),L.bufferData(L.ARRAY_BUFFER,j.byteLength+K.byteLength,L.STATIC_DRAW)),L.bufferSubData(L.ARRAY_BUFFER,0,j),L.bufferSubData(L.ARRAY_BUFFER,ne,K);let le=L.getAttribLocation(this.program,"aPos");L.enableVertexAttribArray(le),L.vertexAttribPointer(le,2,L.FLOAT,!1,0,0);let ce=L.getAttribLocation(this.program,"aTexCoord");L.enableVertexAttribArray(ce),L.vertexAttribPointer(ce,2,L.FLOAT,!1,0,ne),L.bindFramebuffer(L.FRAMEBUFFER,this.framebuffer);let de=0;L.useProgram(this.program);for(let Q in this.constants)this.kernelConstants[de++].updateValue(this.constants[Q]);this._setupOutputTexture(),this.subKernels!==null&&this.subKernels.length>0&&(this._mappedTextureSwitched={},this._setupSubOutputTextures()),this.buildSignature(arguments),this.built=!0}translateSource(){let T=a.fromKernel(this,f,{fixIntegerDivisionAccuracy:this.fixIntegerDivisionAccuracy});this.translatedSource=T.getPrototypeString("kernel"),this.setupReturnTypes(T)}setupReturnTypes(T){if(!this.graphical&&!this.returnType&&(this.returnType=T.getKernelResultType()),this.subKernels&&this.subKernels.length>0)for(let b=0;b<this.subKernels.length;b++){let L=this.subKernels[b];L.returnType||(L.returnType=T.getSubKernelResultType(b))}}run(){let{kernelArguments:T,texSize:b,forceUploadKernelConstants:L,context:P}=this;P.useProgram(this.program),P.scissor(0,0,b[0],b[1]),this.dynamicOutput&&(this.setUniform3iv("uOutputDim",new Int32Array(this.threadDim)),this.setUniform2iv("uTexSize",b)),this.setUniform2f("ratio",b[0]/this.maxTexSize[0],b[1]/this.maxTexSize[1]);for(let X=0;X<L.length;X++){let D=L[X];if(D.updateValue(this.constants[D.name]),this.switchingKernels)return}for(let X=0;X<T.length;X++)if(T[X].updateValue(arguments[X]),this.switchingKernels)return;if(this.plugins)for(let X=0;X<this.plugins.length;X++){let D=this.plugins[X];D.onBeforeRun&&D.onBeforeRun(this)}if(this.graphical){if(this.pipeline)return P.bindRenderbuffer(P.RENDERBUFFER,null),P.bindFramebuffer(P.FRAMEBUFFER,this.framebuffer),this.immutable&&this._replaceOutputTexture(),P.drawArrays(P.TRIANGLE_STRIP,0,4),this.immutable?this.texture.clone():this.texture;P.bindRenderbuffer(P.RENDERBUFFER,null),P.bindFramebuffer(P.FRAMEBUFFER,null),P.drawArrays(P.TRIANGLE_STRIP,0,4);return}P.bindFramebuffer(P.FRAMEBUFFER,this.framebuffer),this.immutable&&this._replaceOutputTexture(),this.subKernels!==null&&(this.immutable&&this._replaceSubOutputTextures(),this.drawBuffers()),P.drawArrays(P.TRIANGLE_STRIP,0,4)}drawBuffers(){this.extensions.WEBGL_draw_buffers.drawBuffersWEBGL(this.drawBuffersMap)}getInternalFormat(){return this.context.RGBA}getTextureFormat(){let{context:T}=this;switch(this.getInternalFormat()){case T.RGBA:return T.RGBA;default:throw new Error("Unknown internal format")}}_replaceOutputTexture(){if(this.texture.beforeMutate()||this._textureSwitched){let T=this.context;T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,this.texture.texture,0),this._textureSwitched=!1}}_setupOutputTexture(){let T=this.context,b=this.texSize;if(this.texture){T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,this.texture.texture,0);return}let L=this.createTexture();T.activeTexture(T.TEXTURE0+this.constantTextureCount+this.argumentTextureCount),T.bindTexture(T.TEXTURE_2D,L),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_S,T.CLAMP_TO_EDGE),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_T,T.CLAMP_TO_EDGE),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MIN_FILTER,T.NEAREST),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MAG_FILTER,T.NEAREST);let P=this.getInternalFormat();this.precision==="single"?T.texImage2D(T.TEXTURE_2D,0,P,b[0],b[1],0,T.RGBA,T.FLOAT,null):T.texImage2D(T.TEXTURE_2D,0,P,b[0],b[1],0,P,T.UNSIGNED_BYTE,null),T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,L,0),this.texture=new this.TextureConstructor({texture:L,size:b,dimensions:this.threadDim,output:this.output,context:this.context,internalFormat:this.getInternalFormat(),textureFormat:this.getTextureFormat(),kernel:this})}_replaceSubOutputTextures(){let T=this.context;for(let b=0;b<this.mappedTextures.length;b++){let L=this.mappedTextures[b];(L.beforeMutate()||this._mappedTextureSwitched[b])&&(T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+b+1,T.TEXTURE_2D,L.texture,0),this._mappedTextureSwitched[b]=!1)}}_setupSubOutputTextures(){let T=this.context;if(this.mappedTextures){for(let L=0;L<this.subKernels.length;L++)T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+L+1,T.TEXTURE_2D,this.mappedTextures[L].texture,0);return}let b=this.texSize;this.drawBuffersMap=[T.COLOR_ATTACHMENT0],this.mappedTextures=[];for(let L=0;L<this.subKernels.length;L++){let P=this.createTexture();this.drawBuffersMap.push(T.COLOR_ATTACHMENT0+L+1),T.activeTexture(T.TEXTURE0+this.constantTextureCount+this.argumentTextureCount+L),T.bindTexture(T.TEXTURE_2D,P),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_S,T.CLAMP_TO_EDGE),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_T,T.CLAMP_TO_EDGE),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MIN_FILTER,T.NEAREST),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MAG_FILTER,T.NEAREST),this.precision==="single"?T.texImage2D(T.TEXTURE_2D,0,T.RGBA,b[0],b[1],0,T.RGBA,T.FLOAT,null):T.texImage2D(T.TEXTURE_2D,0,T.RGBA,b[0],b[1],0,T.RGBA,T.UNSIGNED_BYTE,null),T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+L+1,T.TEXTURE_2D,P,0),this.mappedTextures.push(new this.TextureConstructor({texture:P,size:b,dimensions:this.threadDim,output:this.output,context:this.context,internalFormat:this.getInternalFormat(),textureFormat:this.getTextureFormat(),kernel:this}))}}setUniform1f(T,b){if(this.uniform1fCache.hasOwnProperty(T)){let P=this.uniform1fCache[T];if(b===P)return}this.uniform1fCache[T]=b;let L=this.getUniformLocation(T);this.context.uniform1f(L,b)}setUniform1i(T,b){if(this.uniform1iCache.hasOwnProperty(T)){let P=this.uniform1iCache[T];if(b===P)return}this.uniform1iCache[T]=b;let L=this.getUniformLocation(T);this.context.uniform1i(L,b)}setUniform2f(T,b,L){if(this.uniform2fCache.hasOwnProperty(T)){let X=this.uniform2fCache[T];if(b===X[0]&&L===X[1])return}this.uniform2fCache[T]=[b,L];let P=this.getUniformLocation(T);this.context.uniform2f(P,b,L)}setUniform2fv(T,b){if(this.uniform2fvCache.hasOwnProperty(T)){let P=this.uniform2fvCache[T];if(b[0]===P[0]&&b[1]===P[1])return}this.uniform2fvCache[T]=b;let L=this.getUniformLocation(T);this.context.uniform2fv(L,b)}setUniform2iv(T,b){if(this.uniform2ivCache.hasOwnProperty(T)){let P=this.uniform2ivCache[T];if(b[0]===P[0]&&b[1]===P[1])return}this.uniform2ivCache[T]=b;let L=this.getUniformLocation(T);this.context.uniform2iv(L,b)}setUniform3fv(T,b){if(this.uniform3fvCache.hasOwnProperty(T)){let P=this.uniform3fvCache[T];if(b[0]===P[0]&&b[1]===P[1]&&b[2]===P[2])return}this.uniform3fvCache[T]=b;let L=this.getUniformLocation(T);this.context.uniform3fv(L,b)}setUniform3iv(T,b){if(this.uniform3ivCache.hasOwnProperty(T)){let P=this.uniform3ivCache[T];if(b[0]===P[0]&&b[1]===P[1]&&b[2]===P[2])return}this.uniform3ivCache[T]=b;let L=this.getUniformLocation(T);this.context.uniform3iv(L,b)}setUniform4fv(T,b){if(this.uniform4fvCache.hasOwnProperty(T)){let P=this.uniform4fvCache[T];if(b[0]===P[0]&&b[1]===P[1]&&b[2]===P[2]&&b[3]===P[3])return}this.uniform4fvCache[T]=b;let L=this.getUniformLocation(T);this.context.uniform4fv(L,b)}setUniform4iv(T,b){if(this.uniform4ivCache.hasOwnProperty(T)){let P=this.uniform4ivCache[T];if(b[0]===P[0]&&b[1]===P[1]&&b[2]===P[2]&&b[3]===P[3])return}this.uniform4ivCache[T]=b;let L=this.getUniformLocation(T);this.context.uniform4iv(L,b)}getUniformLocation(T){return this.programUniformLocationCache.hasOwnProperty(T)?this.programUniformLocationCache[T]:this.programUniformLocationCache[T]=this.context.getUniformLocation(this.program,T)}_getFragShaderArtifactMap(T){return{HEADER:this._getHeaderString(),LOOP_MAX:this._getLoopMaxString(),PLUGINS:this._getPluginsString(),CONSTANTS:this._getConstantsString(),DECODE32_ENDIANNESS:this._getDecode32EndiannessString(),ENCODE32_ENDIANNESS:this._getEncode32EndiannessString(),DIVIDE_WITH_INTEGER_CHECK:this._getDivideWithIntegerCheckString(),INJECTED_NATIVE:this._getInjectedNative(),MAIN_CONSTANTS:this._getMainConstantsString(),MAIN_ARGUMENTS:this._getMainArgumentsString(T),KERNEL:this.getKernelString(),MAIN_RESULT:this.getMainResultString(),FLOAT_TACTIC_DECLARATION:this.getFloatTacticDeclaration(),INT_TACTIC_DECLARATION:this.getIntTacticDeclaration(),SAMPLER_2D_TACTIC_DECLARATION:this.getSampler2DTacticDeclaration(),SAMPLER_2D_ARRAY_TACTIC_DECLARATION:this.getSampler2DArrayTacticDeclaration()}}_getVertShaderArtifactMap(T){return{FLOAT_TACTIC_DECLARATION:this.getFloatTacticDeclaration(),INT_TACTIC_DECLARATION:this.getIntTacticDeclaration(),SAMPLER_2D_TACTIC_DECLARATION:this.getSampler2DTacticDeclaration(),SAMPLER_2D_ARRAY_TACTIC_DECLARATION:this.getSampler2DArrayTacticDeclaration()}}_getHeaderString(){return this.subKernels!==null?`#extension GL_EXT_draw_buffers : require
`:""}_getLoopMaxString(){return this.loopMaxIterations?` ${parseInt(this.loopMaxIterations)};
`:` 1000;
`}_getPluginsString(){return this.plugins?this.plugins.map(T=>T.source&&this.source.match(T.functionMatch)?T.source:"").join(`
`):`
`}_getConstantsString(){let T=[],{threadDim:b,texSize:L}=this;return this.dynamicOutput?T.push("uniform ivec3 uOutputDim","uniform ivec2 uTexSize"):T.push(`ivec3 uOutputDim = ivec3(${b[0]}, ${b[1]}, ${b[2]})`,`ivec2 uTexSize = ivec2(${L[0]}, ${L[1]})`),d.linesToString(T)}_getTextureCoordinate(){let T=this.subKernels;return T===null||T.length<1?`varying vec2 vTexCoord;
`:`out vec2 vTexCoord;
`}_getDecode32EndiannessString(){return this.endianness==="LE"?"":`  texel.rgba = texel.abgr;
`}_getEncode32EndiannessString(){return this.endianness==="LE"?"":`  texel.rgba = texel.abgr;
`}_getDivideWithIntegerCheckString(){return this.fixIntegerDivisionAccuracy?`float divWithIntCheck(float x, float y) {
        if (floor(x) == x && floor(y) == y && integerMod(x, y) == 0.0) {
          return float(int(x) / int(y));
        }
        return x / y;
      }
      
      float integerCorrectionModulo(float number, float divisor) {
        if (number < 0.0) {
          number = abs(number);
          if (divisor < 0.0) {
            divisor = abs(divisor);
          }
          return -(number - (divisor * floor(divWithIntCheck(number, divisor))));
        }
        if (divisor < 0.0) {
          divisor = abs(divisor);
        }
        return number - (divisor * floor(divWithIntCheck(number, divisor)));
      }`:""}_getMainArgumentsString(T){let b=[],{argumentNames:L}=this;for(let P=0;P<L.length;P++)b.push(this.kernelArguments[P].getSource(T[P]));return b.join("")}_getInjectedNative(){return this.injectedNative||""}_getMainConstantsString(){let T=[],{constants:b}=this;if(b){let L=0;for(let P in b)!this.constants.hasOwnProperty(P)||T.push(this.kernelConstants[L++].getSource(this.constants[P]))}return T.join("")}getRawValueFramebuffer(T,b){if(this.rawValueFramebuffers[T]||(this.rawValueFramebuffers[T]={}),!this.rawValueFramebuffers[T][b]){let L=this.context.createFramebuffer();L.width=T,L.height=b,this.rawValueFramebuffers[T][b]=L}return this.rawValueFramebuffers[T][b]}getKernelResultDeclaration(){switch(this.returnType){case"Array(2)":return"vec2 kernelResult";case"Array(3)":return"vec3 kernelResult";case"Array(4)":return"vec4 kernelResult";case"LiteralInteger":case"Float":case"Number":case"Integer":return"float kernelResult";default:if(this.graphical)return"float kernelResult";throw new Error(`unrecognized output type "${this.returnType}"`)}}getKernelString(){let T=[this.getKernelResultDeclaration()],{subKernels:b}=this;if(b!==null)switch(this.returnType){case"Number":case"Float":case"Integer":for(let L=0;L<b.length;L++){let P=b[L];T.push(P.returnType==="Integer"?`int subKernelResult_${P.name} = 0`:`float subKernelResult_${P.name} = 0.0`)}break;case"Array(2)":for(let L=0;L<b.length;L++)T.push(`vec2 subKernelResult_${b[L].name}`);break;case"Array(3)":for(let L=0;L<b.length;L++)T.push(`vec3 subKernelResult_${b[L].name}`);break;case"Array(4)":for(let L=0;L<b.length;L++)T.push(`vec4 subKernelResult_${b[L].name}`);break}return d.linesToString(T)+this.translatedSource}getMainResultGraphical(){return d.linesToString(["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  gl_FragColor = actualColor"])}getMainResultPackedPixels(){switch(this.returnType){case"LiteralInteger":case"Number":case"Integer":case"Float":return this.getMainResultKernelPackedPixels()+this.getMainResultSubKernelPackedPixels();default:throw new Error(`packed output only usable with Numbers, "${this.returnType}" specified`)}}getMainResultKernelPackedPixels(){return d.linesToString(["  threadId = indexTo3D(index, uOutputDim)","  kernel()",`  gl_FragData[0] = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(kernelResult)`])}getMainResultSubKernelPackedPixels(){let T=[];if(!this.subKernels)return"";for(let b=0;b<this.subKernels.length;b++)this.subKernels[b].returnType==="Integer"?T.push(`  gl_FragData[${b+1}] = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(float(subKernelResult_${this.subKernels[b].name}))`):T.push(`  gl_FragData[${b+1}] = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(subKernelResult_${this.subKernels[b].name})`);return d.linesToString(T)}getMainResultMemoryOptimizedFloats(){let T=["  index *= 4"];switch(this.returnType){case"Number":case"Integer":case"Float":let b=["r","g","b","a"];for(let L=0;L<b.length;L++){let P=b[L];this.getMainResultKernelMemoryOptimizedFloats(T,P),this.getMainResultSubKernelMemoryOptimizedFloats(T,P),L+1<b.length&&T.push("  index += 1")}break;default:throw new Error(`optimized output only usable with Numbers, ${this.returnType} specified`)}return d.linesToString(T)}getMainResultKernelMemoryOptimizedFloats(T,b){T.push("  threadId = indexTo3D(index, uOutputDim)","  kernel()",`  gl_FragData[0].${b} = kernelResult`)}getMainResultSubKernelMemoryOptimizedFloats(T,b){if(!this.subKernels)return T;for(let L=0;L<this.subKernels.length;L++)this.subKernels[L].returnType==="Integer"?T.push(`  gl_FragData[${L+1}].${b} = float(subKernelResult_${this.subKernels[L].name})`):T.push(`  gl_FragData[${L+1}].${b} = subKernelResult_${this.subKernels[L].name}`)}getMainResultKernelNumberTexture(){return["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  gl_FragData[0][0] = kernelResult"]}getMainResultSubKernelNumberTexture(){let T=[];if(!this.subKernels)return T;for(let b=0;b<this.subKernels.length;++b){let L=this.subKernels[b];L.returnType==="Integer"?T.push(`  gl_FragData[${b+1}][0] = float(subKernelResult_${L.name})`):T.push(`  gl_FragData[${b+1}][0] = subKernelResult_${L.name}`)}return T}getMainResultKernelArray2Texture(){return["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  gl_FragData[0][0] = kernelResult[0]","  gl_FragData[0][1] = kernelResult[1]"]}getMainResultSubKernelArray2Texture(){let T=[];if(!this.subKernels)return T;for(let b=0;b<this.subKernels.length;++b)T.push(`  gl_FragData[${b+1}][0] = subKernelResult_${this.subKernels[b].name}[0]`,`  gl_FragData[${b+1}][1] = subKernelResult_${this.subKernels[b].name}[1]`);return T}getMainResultKernelArray3Texture(){return["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  gl_FragData[0][0] = kernelResult[0]","  gl_FragData[0][1] = kernelResult[1]","  gl_FragData[0][2] = kernelResult[2]"]}getMainResultSubKernelArray3Texture(){let T=[];if(!this.subKernels)return T;for(let b=0;b<this.subKernels.length;++b)T.push(`  gl_FragData[${b+1}][0] = subKernelResult_${this.subKernels[b].name}[0]`,`  gl_FragData[${b+1}][1] = subKernelResult_${this.subKernels[b].name}[1]`,`  gl_FragData[${b+1}][2] = subKernelResult_${this.subKernels[b].name}[2]`);return T}getMainResultKernelArray4Texture(){return["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  gl_FragData[0] = kernelResult"]}getMainResultSubKernelArray4Texture(){let T=[];if(!this.subKernels)return T;switch(this.returnType){case"Number":case"Float":case"Integer":for(let b=0;b<this.subKernels.length;++b)this.subKernels[b].returnType==="Integer"?T.push(`  gl_FragData[${b+1}] = float(subKernelResult_${this.subKernels[b].name})`):T.push(`  gl_FragData[${b+1}] = subKernelResult_${this.subKernels[b].name}`);break;case"Array(2)":for(let b=0;b<this.subKernels.length;++b)T.push(`  gl_FragData[${b+1}][0] = subKernelResult_${this.subKernels[b].name}[0]`,`  gl_FragData[${b+1}][1] = subKernelResult_${this.subKernels[b].name}[1]`);break;case"Array(3)":for(let b=0;b<this.subKernels.length;++b)T.push(`  gl_FragData[${b+1}][0] = subKernelResult_${this.subKernels[b].name}[0]`,`  gl_FragData[${b+1}][1] = subKernelResult_${this.subKernels[b].name}[1]`,`  gl_FragData[${b+1}][2] = subKernelResult_${this.subKernels[b].name}[2]`);break;case"Array(4)":for(let b=0;b<this.subKernels.length;++b)T.push(`  gl_FragData[${b+1}][0] = subKernelResult_${this.subKernels[b].name}[0]`,`  gl_FragData[${b+1}][1] = subKernelResult_${this.subKernels[b].name}[1]`,`  gl_FragData[${b+1}][2] = subKernelResult_${this.subKernels[b].name}[2]`,`  gl_FragData[${b+1}][3] = subKernelResult_${this.subKernels[b].name}[3]`);break}return T}replaceArtifacts(T,b){return T.replace(/[ ]*__([A-Z]+[0-9]*([_]?[A-Z]*[0-9]?)*)__;\n/g,(L,P)=>{if(b.hasOwnProperty(P))return b[P];throw`unhandled artifact ${P}`})}getFragmentShader(T){return this.compiledFragmentShader!==null?this.compiledFragmentShader:this.compiledFragmentShader=this.replaceArtifacts(this.constructor.fragmentShader,this._getFragShaderArtifactMap(T))}getVertexShader(T){return this.compiledVertexShader!==null?this.compiledVertexShader:this.compiledVertexShader=this.replaceArtifacts(this.constructor.vertexShader,this._getVertShaderArtifactMap(T))}toString(){let T=d.linesToString(["const gl = context"]);return u(this.constructor,arguments,this,T)}destroy(T){if(!this.context)return;this.buffer&&this.context.deleteBuffer(this.buffer),this.framebuffer&&this.context.deleteFramebuffer(this.framebuffer);for(let L in this.rawValueFramebuffers){for(let P in this.rawValueFramebuffers[L])this.context.deleteFramebuffer(this.rawValueFramebuffers[L][P]),delete this.rawValueFramebuffers[L][P];delete this.rawValueFramebuffers[L]}if(this.vertShader&&this.context.deleteShader(this.vertShader),this.fragShader&&this.context.deleteShader(this.fragShader),this.program&&this.context.deleteProgram(this.program),this.texture){this.texture.delete();let L=this.textureCache.indexOf(this.texture.texture);L>-1&&this.textureCache.splice(L,1),this.texture=null}if(this.mappedTextures&&this.mappedTextures.length){for(let L=0;L<this.mappedTextures.length;L++){let P=this.mappedTextures[L];P.delete();let X=this.textureCache.indexOf(P.texture);X>-1&&this.textureCache.splice(X,1)}this.mappedTextures=null}if(this.kernelArguments)for(let L=0;L<this.kernelArguments.length;L++)this.kernelArguments[L].destroy();if(this.kernelConstants)for(let L=0;L<this.kernelConstants.length;L++)this.kernelConstants[L].destroy();for(;this.textureCache.length>0;){let L=this.textureCache.pop();this.context.deleteTexture(L)}if(T){let L=M.indexOf(this.canvas);L>=0&&(M[L]=null,A[L]=null)}if(this.destroyExtensions(),delete this.context,delete this.canvas,!this.gpu)return;let b=this.gpu.kernels.indexOf(this);b!==-1&&this.gpu.kernels.splice(b,1)}destroyExtensions(){this.extensions.OES_texture_float=null,this.extensions.OES_texture_float_linear=null,this.extensions.OES_element_index_uint=null,this.extensions.WEBGL_draw_buffers=null}static destroyContext(T){let b=T.getExtension("WEBGL_lose_context");b&&b.loseContext()}toJSON(){let T=super.toJSON();return T.functionNodes=a.fromKernel(this,f).toJSON(),T.settings.threadDim=this.threadDim,T}}i.exports={WebGLKernel:I}},{"../../plugins/math-random-uniformly-distributed":112,"../../utils":114,"../function-builder":9,"../gl/kernel":13,"../gl/kernel-string":12,"./fragment-shader":37,"./function-node":38,"./kernel-value-maps":39,"./vertex-shader":71}],71:[function(n,i,s){let r=`__FLOAT_TACTIC_DECLARATION__;
      __INT_TACTIC_DECLARATION__;
      __SAMPLER_2D_TACTIC_DECLARATION__;
      
      attribute vec2 aPos;
      attribute vec2 aTexCoord;
      
      varying vec2 vTexCoord;
      uniform vec2 ratio;
      
      void main(void) {
        gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);
        vTexCoord = aTexCoord;
      }`;i.exports={vertexShader:r}},{}],72:[function(n,i,s){let r=`#version 300 es
      __HEADER__;
      __FLOAT_TACTIC_DECLARATION__;
      __INT_TACTIC_DECLARATION__;
      __SAMPLER_2D_TACTIC_DECLARATION__;
      __SAMPLER_2D_ARRAY_TACTIC_DECLARATION__;
      
      const int LOOP_MAX = __LOOP_MAX__;
      
      __PLUGINS__;
      __CONSTANTS__;
      
      in vec2 vTexCoord;
      
      float atan2(float v1, float v2) {
        if (v1 == 0.0 || v2 == 0.0) return 0.0;
        return atan(v1 / v2);
      }
      
      float cbrt(float x) {
        if (x >= 0.0) {
          return pow(x, 1.0 / 3.0);
        } else {
          return -pow(x, 1.0 / 3.0);
        }
      }
      
      float expm1(float x) {
        return pow(${Math.E}, x) - 1.0; 
      }
      
      float fround(highp float x) {
        return x;
      }
      
      float imul(float v1, float v2) {
        return float(int(v1) * int(v2));
      }
      
      float log10(float x) {
        return log2(x) * (1.0 / log2(10.0));
      }
      
      float log1p(float x) {
        return log(1.0 + x);
      }
      
      float _pow(float v1, float v2) {
        if (v2 == 0.0) return 1.0;
        return pow(v1, v2);
      }
      
      float _round(float x) {
        return floor(x + 0.5);
      }
      
      
      const int BIT_COUNT = 32;
      int modi(int x, int y) {
        return x - y * (x / y);
      }
      
      int bitwiseOr(int a, int b) {
        int result = 0;
        int n = 1;
        
        for (int i = 0; i < BIT_COUNT; i++) {
          if ((modi(a, 2) == 1) || (modi(b, 2) == 1)) {
            result += n;
          }
          a = a / 2;
          b = b / 2;
          n = n * 2;
          if(!(a > 0 || b > 0)) {
            break;
          }
        }
        return result;
      }
      int bitwiseXOR(int a, int b) {
        int result = 0;
        int n = 1;
        
        for (int i = 0; i < BIT_COUNT; i++) {
          if ((modi(a, 2) == 1) != (modi(b, 2) == 1)) {
            result += n;
          }
          a = a / 2;
          b = b / 2;
          n = n * 2;
          if(!(a > 0 || b > 0)) {
            break;
          }
        }
        return result;
      }
      int bitwiseAnd(int a, int b) {
        int result = 0;
        int n = 1;
        for (int i = 0; i < BIT_COUNT; i++) {
          if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {
            result += n;
          }
          a = a / 2;
          b = b / 2;
          n = n * 2;
          if(!(a > 0 && b > 0)) {
            break;
          }
        }
        return result;
      }
      int bitwiseNot(int a) {
        int result = 0;
        int n = 1;
        
        for (int i = 0; i < BIT_COUNT; i++) {
          if (modi(a, 2) == 0) {
            result += n;    
          }
          a = a / 2;
          n = n * 2;
        }
        return result;
      }
      int bitwiseZeroFillLeftShift(int n, int shift) {
        int maxBytes = BIT_COUNT;
        for (int i = 0; i < BIT_COUNT; i++) {
          if (maxBytes >= n) {
            break;
          }
          maxBytes *= 2;
        }
        for (int i = 0; i < BIT_COUNT; i++) {
          if (i >= shift) {
            break;
          }
          n *= 2;
        }
      
        int result = 0;
        int byteVal = 1;
        for (int i = 0; i < BIT_COUNT; i++) {
          if (i >= maxBytes) break;
          if (modi(n, 2) > 0) { result += byteVal; }
          n = int(n / 2);
          byteVal *= 2;
        }
        return result;
      }
      
      int bitwiseSignedRightShift(int num, int shifts) {
        return int(floor(float(num) / pow(2.0, float(shifts))));
      }
      
      int bitwiseZeroFillRightShift(int n, int shift) {
        int maxBytes = BIT_COUNT;
        for (int i = 0; i < BIT_COUNT; i++) {
          if (maxBytes >= n) {
            break;
          }
          maxBytes *= 2;
        }
        for (int i = 0; i < BIT_COUNT; i++) {
          if (i >= shift) {
            break;
          }
          n /= 2;
        }
        int result = 0;
        int byteVal = 1;
        for (int i = 0; i < BIT_COUNT; i++) {
          if (i >= maxBytes) break;
          if (modi(n, 2) > 0) { result += byteVal; }
          n = int(n / 2);
          byteVal *= 2;
        }
        return result;
      }
      
      vec2 integerMod(vec2 x, float y) {
        vec2 res = floor(mod(x, y));
        return res * step(1.0 - floor(y), -res);
      }
      
      vec3 integerMod(vec3 x, float y) {
        vec3 res = floor(mod(x, y));
        return res * step(1.0 - floor(y), -res);
      }
      
      vec4 integerMod(vec4 x, vec4 y) {
        vec4 res = floor(mod(x, y));
        return res * step(1.0 - floor(y), -res);
      }
      
      float integerMod(float x, float y) {
        float res = floor(mod(x, y));
        return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);
      }
      
      int integerMod(int x, int y) {
        return x - (y * int(x/y));
      }
      
      __DIVIDE_WITH_INTEGER_CHECK__;
      
      // Here be dragons!
      // DO NOT OPTIMIZE THIS CODE
      // YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE
      // LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME
      const vec2 MAGIC_VEC = vec2(1.0, -256.0);
      const vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);
      const vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536
      float decode32(vec4 texel) {
        __DECODE32_ENDIANNESS__;
        texel *= 255.0;
        vec2 gte128;
        gte128.x = texel.b >= 128.0 ? 1.0 : 0.0;
        gte128.y = texel.a >= 128.0 ? 1.0 : 0.0;
        float exponent = 2.0 * texel.a - 127.0 + dot(gte128, MAGIC_VEC);
        float res = exp2(round(exponent));
        texel.b = texel.b - 128.0 * gte128.x;
        res = dot(texel, SCALE_FACTOR) * exp2(round(exponent-23.0)) + res;
        res *= gte128.y * -2.0 + 1.0;
        return res;
      }
      
      float decode16(vec4 texel, int index) {
        int channel = integerMod(index, 2);
        return texel[channel*2] * 255.0 + texel[channel*2 + 1] * 65280.0;
      }
      
      float decode8(vec4 texel, int index) {
        int channel = integerMod(index, 4);
        return texel[channel] * 255.0;
      }
      
      vec4 legacyEncode32(float f) {
        float F = abs(f);
        float sign = f < 0.0 ? 1.0 : 0.0;
        float exponent = floor(log2(F));
        float mantissa = (exp2(-exponent) * F);
        // exponent += floor(log2(mantissa));
        vec4 texel = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;
        texel.rg = integerMod(texel.rg, 256.0);
        texel.b = integerMod(texel.b, 128.0);
        texel.a = exponent*0.5 + 63.5;
        texel.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;
        texel = floor(texel);
        texel *= 0.003921569; // 1/255
        __ENCODE32_ENDIANNESS__;
        return texel;
      }
      
      // https://github.com/gpujs/gpu.js/wiki/Encoder-details
      vec4 encode32(float value) {
        if (value == 0.0) return vec4(0, 0, 0, 0);
      
        float exponent;
        float mantissa;
        vec4  result;
        float sgn;
      
        sgn = step(0.0, -value);
        value = abs(value);
      
        exponent = floor(log2(value));
      
        mantissa = value*pow(2.0, -exponent)-1.0;
        exponent = exponent+127.0;
        result   = vec4(0,0,0,0);
      
        result.a = floor(exponent/2.0);
        exponent = exponent - result.a*2.0;
        result.a = result.a + 128.0*sgn;
      
        result.b = floor(mantissa * 128.0);
        mantissa = mantissa - result.b / 128.0;
        result.b = result.b + exponent*128.0;
      
        result.g = floor(mantissa*32768.0);
        mantissa = mantissa - result.g/32768.0;
      
        result.r = floor(mantissa*8388608.0);
        return result/255.0;
      }
      // Dragons end here
      
      int index;
      ivec3 threadId;
      
      ivec3 indexTo3D(int idx, ivec3 texDim) {
        int z = int(idx / (texDim.x * texDim.y));
        idx -= z * int(texDim.x * texDim.y);
        int y = int(idx / texDim.x);
        int x = int(integerMod(idx, texDim.x));
        return ivec3(x, y, z);
      }
      
      float get32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture(tex, st / vec2(texSize));
        return decode32(texel);
      }
      
      float get16(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + (texDim.x * (y + (texDim.y * z)));
        int w = texSize.x * 2;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture(tex, st / vec2(texSize.x * 2, texSize.y));
        return decode16(texel, index);
      }
      
      float get8(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + (texDim.x * (y + (texDim.y * z)));
        int w = texSize.x * 4;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture(tex, st / vec2(texSize.x * 4, texSize.y));
        return decode8(texel, index);
      }
      
      float getMemoryOptimized32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + (texDim.x * (y + (texDim.y * z)));
        int channel = integerMod(index, 4);
        index = index / 4;
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        index = index / 4;
        vec4 texel = texture(tex, st / vec2(texSize));
        return texel[channel];
      }
      
      vec4 getImage2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        return texture(tex, st / vec2(texSize));
      }
      
      vec4 getImage3D(sampler2DArray tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        return texture(tex, vec3(st / vec2(texSize), z));
      }
      
      float getFloatFromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);
        return result[0];
      }
      
      vec2 getVec2FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);
        return vec2(result[0], result[1]);
      }
      
      vec2 getMemoryOptimizedVec2(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int channel = integerMod(index, 2);
        index = index / 2;
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture(tex, st / vec2(texSize));
        if (channel == 0) return vec2(texel.r, texel.g);
        if (channel == 1) return vec2(texel.b, texel.a);
        return vec2(0.0, 0.0);
      }
      
      vec3 getVec3FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);
        return vec3(result[0], result[1], result[2]);
      }
      
      vec3 getMemoryOptimizedVec3(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int fieldIndex = 3 * (x + texDim.x * (y + texDim.y * z));
        int vectorIndex = fieldIndex / 4;
        int vectorOffset = fieldIndex - vectorIndex * 4;
        int readY = vectorIndex / texSize.x;
        int readX = vectorIndex - readY * texSize.x;
        vec4 tex1 = texture(tex, (vec2(readX, readY) + 0.5) / vec2(texSize));
      
        if (vectorOffset == 0) {
          return tex1.xyz;
        } else if (vectorOffset == 1) {
          return tex1.yzw;
        } else {
          readX++;
          if (readX >= texSize.x) {
            readX = 0;
            readY++;
          }
          vec4 tex2 = texture(tex, vec2(readX, readY) / vec2(texSize));
          if (vectorOffset == 2) {
            return vec3(tex1.z, tex1.w, tex2.x);
          } else {
            return vec3(tex1.w, tex2.x, tex2.y);
          }
        }
      }
      
      vec4 getVec4FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        return getImage2D(tex, texSize, texDim, z, y, x);
      }
      
      vec4 getMemoryOptimizedVec4(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {
        int index = x + texDim.x * (y + texDim.y * z);
        int channel = integerMod(index, 2);
        int w = texSize.x;
        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;
        vec4 texel = texture(tex, st / vec2(texSize));
        return vec4(texel.r, texel.g, texel.b, texel.a);
      }
      
      vec4 actualColor;
      void color(float r, float g, float b, float a) {
        actualColor = vec4(r,g,b,a);
      }
      
      void color(float r, float g, float b) {
        color(r,g,b,1.0);
      }
      
      float modulo(float number, float divisor) {
        if (number < 0.0) {
          number = abs(number);
          if (divisor < 0.0) {
            divisor = abs(divisor);
          }
          return -mod(number, divisor);
        }
        if (divisor < 0.0) {
          divisor = abs(divisor);
        }
        return mod(number, divisor);
      }
      
      __INJECTED_NATIVE__;
      __MAIN_CONSTANTS__;
      __MAIN_ARGUMENTS__;
      __KERNEL__;
      
      void main(void) {
        index = int(vTexCoord.s * float(uTexSize.x)) + int(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;
        __MAIN_RESULT__;
      }`;i.exports={fragmentShader:r}},{}],73:[function(n,i,s){let{utils:r}=n("../../utils"),{WebGLFunctionNode:a}=n("../web-gl/function-node");class f extends a{astIdentifierExpression(c,h){if(c.type!=="Identifier")throw this.astErrorOutput("IdentifierExpression - not an Identifier",c);let o=this.getType(c),u=r.sanitizeName(c.name);return c.name==="Infinity"?h.push("intBitsToFloat(2139095039)"):o==="Boolean"?this.argumentNames.indexOf(u)>-1?h.push(`bool(user_${u})`):h.push(`user_${u}`):h.push(`user_${u}`),h}}i.exports={WebGL2FunctionNode:f}},{"../../utils":114,"../web-gl/function-node":38}],74:[function(n,i,s){let{WebGL2KernelValueBoolean:r}=n("./kernel-value/boolean"),{WebGL2KernelValueFloat:a}=n("./kernel-value/float"),{WebGL2KernelValueInteger:f}=n("./kernel-value/integer"),{WebGL2KernelValueHTMLImage:d}=n("./kernel-value/html-image"),{WebGL2KernelValueDynamicHTMLImage:c}=n("./kernel-value/dynamic-html-image"),{WebGL2KernelValueHTMLImageArray:h}=n("./kernel-value/html-image-array"),{WebGL2KernelValueDynamicHTMLImageArray:o}=n("./kernel-value/dynamic-html-image-array"),{WebGL2KernelValueHTMLVideo:u}=n("./kernel-value/html-video"),{WebGL2KernelValueDynamicHTMLVideo:m}=n("./kernel-value/dynamic-html-video"),{WebGL2KernelValueSingleInput:g}=n("./kernel-value/single-input"),{WebGL2KernelValueDynamicSingleInput:y}=n("./kernel-value/dynamic-single-input"),{WebGL2KernelValueUnsignedInput:v}=n("./kernel-value/unsigned-input"),{WebGL2KernelValueDynamicUnsignedInput:w}=n("./kernel-value/dynamic-unsigned-input"),{WebGL2KernelValueMemoryOptimizedNumberTexture:E}=n("./kernel-value/memory-optimized-number-texture"),{WebGL2KernelValueDynamicMemoryOptimizedNumberTexture:_}=n("./kernel-value/dynamic-memory-optimized-number-texture"),{WebGL2KernelValueNumberTexture:M}=n("./kernel-value/number-texture"),{WebGL2KernelValueDynamicNumberTexture:A}=n("./kernel-value/dynamic-number-texture"),{WebGL2KernelValueSingleArray:I}=n("./kernel-value/single-array"),{WebGL2KernelValueDynamicSingleArray:C}=n("./kernel-value/dynamic-single-array"),{WebGL2KernelValueSingleArray1DI:T}=n("./kernel-value/single-array1d-i"),{WebGL2KernelValueDynamicSingleArray1DI:b}=n("./kernel-value/dynamic-single-array1d-i"),{WebGL2KernelValueSingleArray2DI:L}=n("./kernel-value/single-array2d-i"),{WebGL2KernelValueDynamicSingleArray2DI:P}=n("./kernel-value/dynamic-single-array2d-i"),{WebGL2KernelValueSingleArray3DI:X}=n("./kernel-value/single-array3d-i"),{WebGL2KernelValueDynamicSingleArray3DI:D}=n("./kernel-value/dynamic-single-array3d-i"),{WebGL2KernelValueSingleArray2:z}=n("./kernel-value/single-array2"),{WebGL2KernelValueSingleArray3:H}=n("./kernel-value/single-array3"),{WebGL2KernelValueSingleArray4:B}=n("./kernel-value/single-array4"),{WebGL2KernelValueUnsignedArray:$}=n("./kernel-value/unsigned-array"),{WebGL2KernelValueDynamicUnsignedArray:j}=n("./kernel-value/dynamic-unsigned-array"),K={unsigned:{dynamic:{Boolean:r,Integer:f,Float:a,Array:j,"Array(2)":!1,"Array(3)":!1,"Array(4)":!1,"Array1D(2)":!1,"Array1D(3)":!1,"Array1D(4)":!1,"Array2D(2)":!1,"Array2D(3)":!1,"Array2D(4)":!1,"Array3D(2)":!1,"Array3D(3)":!1,"Array3D(4)":!1,Input:w,NumberTexture:A,"ArrayTexture(1)":A,"ArrayTexture(2)":A,"ArrayTexture(3)":A,"ArrayTexture(4)":A,MemoryOptimizedNumberTexture:_,HTMLCanvas:c,HTMLImage:c,HTMLImageArray:o,HTMLVideo:m},static:{Boolean:r,Float:a,Integer:f,Array:$,"Array(2)":!1,"Array(3)":!1,"Array(4)":!1,"Array1D(2)":!1,"Array1D(3)":!1,"Array1D(4)":!1,"Array2D(2)":!1,"Array2D(3)":!1,"Array2D(4)":!1,"Array3D(2)":!1,"Array3D(3)":!1,"Array3D(4)":!1,Input:v,NumberTexture:M,"ArrayTexture(1)":M,"ArrayTexture(2)":M,"ArrayTexture(3)":M,"ArrayTexture(4)":M,MemoryOptimizedNumberTexture:_,HTMLCanvas:d,HTMLImage:d,HTMLImageArray:h,HTMLVideo:u}},single:{dynamic:{Boolean:r,Integer:f,Float:a,Array:C,"Array(2)":z,"Array(3)":H,"Array(4)":B,"Array1D(2)":b,"Array1D(3)":b,"Array1D(4)":b,"Array2D(2)":P,"Array2D(3)":P,"Array2D(4)":P,"Array3D(2)":D,"Array3D(3)":D,"Array3D(4)":D,Input:y,NumberTexture:A,"ArrayTexture(1)":A,"ArrayTexture(2)":A,"ArrayTexture(3)":A,"ArrayTexture(4)":A,MemoryOptimizedNumberTexture:_,HTMLCanvas:c,HTMLImage:c,HTMLImageArray:o,HTMLVideo:m},static:{Boolean:r,Float:a,Integer:f,Array:I,"Array(2)":z,"Array(3)":H,"Array(4)":B,"Array1D(2)":T,"Array1D(3)":T,"Array1D(4)":T,"Array2D(2)":L,"Array2D(3)":L,"Array2D(4)":L,"Array3D(2)":X,"Array3D(3)":X,"Array3D(4)":X,Input:g,NumberTexture:M,"ArrayTexture(1)":M,"ArrayTexture(2)":M,"ArrayTexture(3)":M,"ArrayTexture(4)":M,MemoryOptimizedNumberTexture:E,HTMLCanvas:d,HTMLImage:d,HTMLImageArray:h,HTMLVideo:u}}};function ne(Z,le,ce,de){if(!Z)throw new Error("type missing");if(!le)throw new Error("dynamic missing");if(!ce)throw new Error("precision missing");de.type&&(Z=de.type);let Q=K[ce][le];if(Q[Z]===!1)return null;if(Q[Z]===void 0)throw new Error(`Could not find a KernelValue for ${Z}`);return Q[Z]}i.exports={kernelValueMaps:K,lookupKernelValueType:ne}},{"./kernel-value/boolean":75,"./kernel-value/dynamic-html-image":77,"./kernel-value/dynamic-html-image-array":76,"./kernel-value/dynamic-html-video":78,"./kernel-value/dynamic-memory-optimized-number-texture":79,"./kernel-value/dynamic-number-texture":80,"./kernel-value/dynamic-single-array":81,"./kernel-value/dynamic-single-array1d-i":82,"./kernel-value/dynamic-single-array2d-i":83,"./kernel-value/dynamic-single-array3d-i":84,"./kernel-value/dynamic-single-input":85,"./kernel-value/dynamic-unsigned-array":86,"./kernel-value/dynamic-unsigned-input":87,"./kernel-value/float":88,"./kernel-value/html-image":90,"./kernel-value/html-image-array":89,"./kernel-value/html-video":91,"./kernel-value/integer":92,"./kernel-value/memory-optimized-number-texture":93,"./kernel-value/number-texture":94,"./kernel-value/single-array":95,"./kernel-value/single-array1d-i":96,"./kernel-value/single-array2":97,"./kernel-value/single-array2d-i":98,"./kernel-value/single-array3":99,"./kernel-value/single-array3d-i":100,"./kernel-value/single-array4":101,"./kernel-value/single-input":102,"./kernel-value/unsigned-array":103,"./kernel-value/unsigned-input":104}],75:[function(n,i,s){let{WebGLKernelValueBoolean:r}=n("../../web-gl/kernel-value/boolean");class a extends r{}i.exports={WebGL2KernelValueBoolean:a}},{"../../web-gl/kernel-value/boolean":41}],76:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGL2KernelValueHTMLImageArray:a}=n("./html-image-array");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2DArray ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}updateValue(c){let{width:h,height:o}=c[0];this.checkSize(h,o),this.dimensions=[h,o,c.length],this.textureSize=[h,o],this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGL2KernelValueDynamicHTMLImageArray:f}},{"../../../utils":114,"./html-image-array":89}],77:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueDynamicHTMLImage:a}=n("../../web-gl/kernel-value/dynamic-html-image");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}}i.exports={WebGL2KernelValueDynamicHTMLImage:f}},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-html-image":42}],78:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGL2KernelValueDynamicHTMLImage:a}=n("./dynamic-html-image");class f extends a{}i.exports={WebGL2KernelValueDynamicHTMLVideo:f}},{"../../../utils":114,"./dynamic-html-image":77}],79:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueDynamicMemoryOptimizedNumberTexture:a}=n("../../web-gl/kernel-value/dynamic-memory-optimized-number-texture");class f extends a{getSource(){return r.linesToString([`uniform sampler2D ${this.id}`,`uniform ivec2 ${this.sizeId}`,`uniform ivec3 ${this.dimensionsId}`])}}i.exports={WebGL2KernelValueDynamicMemoryOptimizedNumberTexture:f}},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-memory-optimized-number-texture":44}],80:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueDynamicNumberTexture:a}=n("../../web-gl/kernel-value/dynamic-number-texture");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}}i.exports={WebGL2KernelValueDynamicNumberTexture:f}},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-number-texture":45}],81:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGL2KernelValueSingleArray:a}=n("../../web-gl2/kernel-value/single-array");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}updateValue(c){this.dimensions=r.getDimensions(c,!0),this.textureSize=r.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio,this.checkSize(this.textureSize[0],this.textureSize[1]),this.uploadValue=new Float32Array(this.uploadArrayLength),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGL2KernelValueDynamicSingleArray:f}},{"../../../utils":114,"../../web-gl2/kernel-value/single-array":95}],82:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGL2KernelValueSingleArray1DI:a}=n("../../web-gl2/kernel-value/single-array1d-i");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}updateValue(c){this.setShape(c),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGL2KernelValueDynamicSingleArray1DI:f}},{"../../../utils":114,"../../web-gl2/kernel-value/single-array1d-i":96}],83:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGL2KernelValueSingleArray2DI:a}=n("../../web-gl2/kernel-value/single-array2d-i");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}updateValue(c){this.setShape(c),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGL2KernelValueDynamicSingleArray2DI:f}},{"../../../utils":114,"../../web-gl2/kernel-value/single-array2d-i":98}],84:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGL2KernelValueSingleArray3DI:a}=n("../../web-gl2/kernel-value/single-array3d-i");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}updateValue(c){this.setShape(c),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGL2KernelValueDynamicSingleArray3DI:f}},{"../../../utils":114,"../../web-gl2/kernel-value/single-array3d-i":100}],85:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGL2KernelValueSingleInput:a}=n("../../web-gl2/kernel-value/single-input");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}updateValue(c){let[h,o,u]=c.size;this.dimensions=new Int32Array([h||1,o||1,u||1]),this.textureSize=r.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio),this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio,this.checkSize(this.textureSize[0],this.textureSize[1]),this.uploadValue=new Float32Array(this.uploadArrayLength),this.kernel.setUniform3iv(this.dimensionsId,this.dimensions),this.kernel.setUniform2iv(this.sizeId,this.textureSize),super.updateValue(c)}}i.exports={WebGL2KernelValueDynamicSingleInput:f}},{"../../../utils":114,"../../web-gl2/kernel-value/single-input":102}],86:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueDynamicUnsignedArray:a}=n("../../web-gl/kernel-value/dynamic-unsigned-array");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}}i.exports={WebGL2KernelValueDynamicUnsignedArray:f}},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-unsigned-array":51}],87:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueDynamicUnsignedInput:a}=n("../../web-gl/kernel-value/dynamic-unsigned-input");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`uniform ${c} ivec2 ${this.sizeId}`,`uniform ${c} ivec3 ${this.dimensionsId}`])}}i.exports={WebGL2KernelValueDynamicUnsignedInput:f}},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-unsigned-input":52}],88:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueFloat:a}=n("../../web-gl/kernel-value/float");class f extends a{}i.exports={WebGL2KernelValueFloat:f}},{"../../../utils":114,"../../web-gl/kernel-value/float":53}],89:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelArray:a}=n("../../web-gl/kernel-value/array");class f extends a{constructor(c,h){super(c,h),this.checkSize(c[0].width,c[0].height),this.dimensions=[c[0].width,c[0].height,c.length],this.textureSize=[c[0].width,c[0].height]}defineTexture(){let{context:c}=this;c.activeTexture(this.contextHandle),c.bindTexture(c.TEXTURE_2D_ARRAY,this.texture),c.texParameteri(c.TEXTURE_2D_ARRAY,c.TEXTURE_MAG_FILTER,c.NEAREST),c.texParameteri(c.TEXTURE_2D_ARRAY,c.TEXTURE_MIN_FILTER,c.NEAREST)}getStringValueHandler(){return`const uploadValue_${this.name} = ${this.varName};
`}getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2DArray ${this.id}`,`${c} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`${c} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){let{context:h}=this;h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D_ARRAY,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!0),h.texImage3D(h.TEXTURE_2D_ARRAY,0,h.RGBA,c[0].width,c[0].height,c.length,0,h.RGBA,h.UNSIGNED_BYTE,null);for(let o=0;o<c.length;o++)h.texSubImage3D(h.TEXTURE_2D_ARRAY,0,0,0,o,c[o].width,c[o].height,1,h.RGBA,h.UNSIGNED_BYTE,this.uploadValue=c[o]);this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGL2KernelValueHTMLImageArray:f}},{"../../../utils":114,"../../web-gl/kernel-value/array":40}],90:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueHTMLImage:a}=n("../../web-gl/kernel-value/html-image");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`${c} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`${c} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}}i.exports={WebGL2KernelValueHTMLImage:f}},{"../../../utils":114,"../../web-gl/kernel-value/html-image":54}],91:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGL2KernelValueHTMLImage:a}=n("./html-image");class f extends a{}i.exports={WebGL2KernelValueHTMLVideo:f}},{"../../../utils":114,"./html-image":90}],92:[function(n,i,s){let{WebGLKernelValueInteger:r}=n("../../web-gl/kernel-value/integer");class a extends r{getSource(d){let c=this.getVariablePrecisionString();return this.origin==="constants"?`const ${c} int ${this.id} = ${parseInt(d)};
`:`uniform ${c} int ${this.id};
`}updateValue(d){this.origin!=="constants"&&this.kernel.setUniform1i(this.id,this.uploadValue=d)}}i.exports={WebGL2KernelValueInteger:a}},{"../../web-gl/kernel-value/integer":57}],93:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueMemoryOptimizedNumberTexture:a}=n("../../web-gl/kernel-value/memory-optimized-number-texture");class f extends a{getSource(){let{id:c,sizeId:h,textureSize:o,dimensionsId:u,dimensions:m}=this,g=this.getVariablePrecisionString();return r.linesToString([`uniform sampler2D ${c}`,`${g} ivec2 ${h} = ivec2(${o[0]}, ${o[1]})`,`${g} ivec3 ${u} = ivec3(${m[0]}, ${m[1]}, ${m[2]})`])}}i.exports={WebGL2KernelValueMemoryOptimizedNumberTexture:f}},{"../../../utils":114,"../../web-gl/kernel-value/memory-optimized-number-texture":58}],94:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueNumberTexture:a}=n("../../web-gl/kernel-value/number-texture");class f extends a{getSource(){let{id:c,sizeId:h,textureSize:o,dimensionsId:u,dimensions:m}=this,g=this.getVariablePrecisionString();return r.linesToString([`uniform ${g} sampler2D ${c}`,`${g} ivec2 ${h} = ivec2(${o[0]}, ${o[1]})`,`${g} ivec3 ${u} = ivec3(${m[0]}, ${m[1]}, ${m[2]})`])}}i.exports={WebGL2KernelValueNumberTexture:f}},{"../../../utils":114,"../../web-gl/kernel-value/number-texture":59}],95:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleArray:a}=n("../../web-gl/kernel-value/single-array");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`${c} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`${c} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flattenTo(c,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA32F,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGL2KernelValueSingleArray:f}},{"../../../utils":114,"../../web-gl/kernel-value/single-array":60}],96:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleArray1DI:a}=n("../../web-gl/kernel-value/single-array1d-i");class f extends a{updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flattenTo(c,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA32F,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGL2KernelValueSingleArray1DI:f}},{"../../../utils":114,"../../web-gl/kernel-value/single-array1d-i":61}],97:[function(n,i,s){let{WebGLKernelValueSingleArray2:r}=n("../../web-gl/kernel-value/single-array2");class a extends r{}i.exports={WebGL2KernelValueSingleArray2:a}},{"../../web-gl/kernel-value/single-array2":62}],98:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleArray2DI:a}=n("../../web-gl/kernel-value/single-array2d-i");class f extends a{updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flattenTo(c,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA32F,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGL2KernelValueSingleArray2DI:f}},{"../../../utils":114,"../../web-gl/kernel-value/single-array2d-i":63}],99:[function(n,i,s){let{WebGLKernelValueSingleArray3:r}=n("../../web-gl/kernel-value/single-array3");class a extends r{}i.exports={WebGL2KernelValueSingleArray3:a}},{"../../web-gl/kernel-value/single-array3":64}],100:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleArray3DI:a}=n("../../web-gl/kernel-value/single-array3d-i");class f extends a{updateValue(c){if(c.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(c.constructor);return}let{context:h}=this;r.flattenTo(c,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA32F,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGL2KernelValueSingleArray3DI:f}},{"../../../utils":114,"../../web-gl/kernel-value/single-array3d-i":65}],101:[function(n,i,s){let{WebGLKernelValueSingleArray4:r}=n("../../web-gl/kernel-value/single-array4");class a extends r{}i.exports={WebGL2KernelValueSingleArray4:a}},{"../../web-gl/kernel-value/single-array4":66}],102:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueSingleInput:a}=n("../../web-gl/kernel-value/single-input");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`${c} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`${c} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}updateValue(c){let{context:h}=this;r.flattenTo(c.value,this.uploadValue),h.activeTexture(this.contextHandle),h.bindTexture(h.TEXTURE_2D,this.texture),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA32F,this.textureSize[0],this.textureSize[1],0,h.RGBA,h.FLOAT,this.uploadValue),this.kernel.setUniform1i(this.id,this.index)}}i.exports={WebGL2KernelValueSingleInput:f}},{"../../../utils":114,"../../web-gl/kernel-value/single-input":67}],103:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueUnsignedArray:a}=n("../../web-gl/kernel-value/unsigned-array");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`${c} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`${c} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}}i.exports={WebGL2KernelValueUnsignedArray:f}},{"../../../utils":114,"../../web-gl/kernel-value/unsigned-array":68}],104:[function(n,i,s){let{utils:r}=n("../../../utils"),{WebGLKernelValueUnsignedInput:a}=n("../../web-gl/kernel-value/unsigned-input");class f extends a{getSource(){let c=this.getVariablePrecisionString();return r.linesToString([`uniform ${c} sampler2D ${this.id}`,`${c} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`,`${c} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])}}i.exports={WebGL2KernelValueUnsignedInput:f}},{"../../../utils":114,"../../web-gl/kernel-value/unsigned-input":69}],105:[function(n,i,s){let{WebGLKernel:r}=n("../web-gl/kernel"),{WebGL2FunctionNode:a}=n("./function-node"),{FunctionBuilder:f}=n("../function-builder"),{utils:d}=n("../../utils"),{fragmentShader:c}=n("./fragment-shader"),{vertexShader:h}=n("./vertex-shader"),{lookupKernelValueType:o}=n("./kernel-value-maps"),u=null,m=null,g=null,y=null,v=null;class w extends r{static get isSupported(){return u!==null||(this.setupFeatureChecks(),u=this.isContextMatch(g)),u}static setupFeatureChecks(){typeof document<"u"?m=document.createElement("canvas"):typeof OffscreenCanvas<"u"&&(m=new OffscreenCanvas(0,0)),m&&(g=m.getContext("webgl2"),!(!g||!g.getExtension)&&(y={EXT_color_buffer_float:g.getExtension("EXT_color_buffer_float"),OES_texture_float_linear:g.getExtension("OES_texture_float_linear")},v=this.getFeatures()))}static isContextMatch(_){return typeof WebGL2RenderingContext<"u"?_ instanceof WebGL2RenderingContext:!1}static getFeatures(){let _=this.testContext;return Object.freeze({isFloatRead:this.getIsFloatRead(),isIntegerDivisionAccurate:this.getIsIntegerDivisionAccurate(),isSpeedTacticSupported:this.getIsSpeedTacticSupported(),kernelMap:!0,isTextureFloat:!0,isDrawBuffers:!0,channelCount:this.getChannelCount(),maxTextureSize:this.getMaxTextureSize(),lowIntPrecision:_.getShaderPrecisionFormat(_.FRAGMENT_SHADER,_.LOW_INT),lowFloatPrecision:_.getShaderPrecisionFormat(_.FRAGMENT_SHADER,_.LOW_FLOAT),mediumIntPrecision:_.getShaderPrecisionFormat(_.FRAGMENT_SHADER,_.MEDIUM_INT),mediumFloatPrecision:_.getShaderPrecisionFormat(_.FRAGMENT_SHADER,_.MEDIUM_FLOAT),highIntPrecision:_.getShaderPrecisionFormat(_.FRAGMENT_SHADER,_.HIGH_INT),highFloatPrecision:_.getShaderPrecisionFormat(_.FRAGMENT_SHADER,_.HIGH_FLOAT)})}static getIsTextureFloat(){return!0}static getChannelCount(){return g.getParameter(g.MAX_DRAW_BUFFERS)}static getMaxTextureSize(){return g.getParameter(g.MAX_TEXTURE_SIZE)}static lookupKernelValueType(_,M,A,I){return o(_,M,A,I)}static get testCanvas(){return m}static get testContext(){return g}static get features(){return v}static get fragmentShader(){return c}static get vertexShader(){return h}initContext(){let _={alpha:!1,depth:!1,antialias:!1};return this.canvas.getContext("webgl2",_)}initExtensions(){this.extensions={EXT_color_buffer_float:this.context.getExtension("EXT_color_buffer_float"),OES_texture_float_linear:this.context.getExtension("OES_texture_float_linear")}}validateSettings(_){if(!this.validate){this.texSize=d.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},this.output);return}let{features:M}=this.constructor;if(this.precision==="single"&&!M.isFloatRead)throw new Error("Float texture outputs are not supported");if(!this.graphical&&this.precision===null&&(this.precision=M.isFloatRead?"single":"unsigned"),this.fixIntegerDivisionAccuracy===null?this.fixIntegerDivisionAccuracy=!M.isIntegerDivisionAccurate:this.fixIntegerDivisionAccuracy&&M.isIntegerDivisionAccurate&&(this.fixIntegerDivisionAccuracy=!1),this.checkOutput(),!this.output||this.output.length===0){if(_.length!==1)throw new Error("Auto output only supported for kernels with only one input");let A=d.getVariableType(_[0],this.strictIntegers);switch(A){case"Array":this.output=d.getDimensions(A);break;case"NumberTexture":case"MemoryOptimizedNumberTexture":case"ArrayTexture(1)":case"ArrayTexture(2)":case"ArrayTexture(3)":case"ArrayTexture(4)":this.output=_[0].output;break;default:throw new Error("Auto output not supported for input type: "+A)}}if(this.graphical){if(this.output.length!==2)throw new Error("Output must have 2 dimensions on graphical mode");this.precision==="single"&&(console.warn("Cannot use graphical mode and single precision at the same time"),this.precision="unsigned"),this.texSize=d.clone(this.output);return}else!this.graphical&&this.precision===null&&M.isTextureFloat&&(this.precision="single");this.texSize=d.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},this.output),this.checkTextureSize()}translateSource(){let _=f.fromKernel(this,a,{fixIntegerDivisionAccuracy:this.fixIntegerDivisionAccuracy});this.translatedSource=_.getPrototypeString("kernel"),this.setupReturnTypes(_)}drawBuffers(){this.context.drawBuffers(this.drawBuffersMap)}getTextureFormat(){let{context:_}=this;switch(this.getInternalFormat()){case _.R32F:return _.RED;case _.RG32F:return _.RG;case _.RGBA32F:return _.RGBA;case _.RGBA:return _.RGBA;default:throw new Error("Unknown internal format")}}getInternalFormat(){let{context:_}=this;if(this.precision==="single"){if(this.pipeline)switch(this.returnType){case"Number":case"Float":case"Integer":return this.optimizeFloatMemory?_.RGBA32F:_.R32F;case"Array(2)":return _.RG32F;case"Array(3)":case"Array(4)":return _.RGBA32F;default:throw new Error("Unhandled return type")}return _.RGBA32F}return _.RGBA}_setupOutputTexture(){let _=this.context;if(this.texture){_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,this.texture.texture,0);return}_.bindFramebuffer(_.FRAMEBUFFER,this.framebuffer);let M=_.createTexture(),A=this.texSize;_.activeTexture(_.TEXTURE0+this.constantTextureCount+this.argumentTextureCount),_.bindTexture(_.TEXTURE_2D,M),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.REPEAT),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.REPEAT),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.NEAREST),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.NEAREST);let I=this.getInternalFormat();this.precision==="single"?_.texStorage2D(_.TEXTURE_2D,1,I,A[0],A[1]):_.texImage2D(_.TEXTURE_2D,0,I,A[0],A[1],0,I,_.UNSIGNED_BYTE,null),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,M,0),this.texture=new this.TextureConstructor({texture:M,size:A,dimensions:this.threadDim,output:this.output,context:this.context,internalFormat:this.getInternalFormat(),textureFormat:this.getTextureFormat(),kernel:this})}_setupSubOutputTextures(){let _=this.context;if(this.mappedTextures){for(let A=0;A<this.subKernels.length;A++)_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+A+1,_.TEXTURE_2D,this.mappedTextures[A].texture,0);return}let M=this.texSize;this.drawBuffersMap=[_.COLOR_ATTACHMENT0],this.mappedTextures=[];for(let A=0;A<this.subKernels.length;A++){let I=this.createTexture();this.drawBuffersMap.push(_.COLOR_ATTACHMENT0+A+1),_.activeTexture(_.TEXTURE0+this.constantTextureCount+this.argumentTextureCount+A),_.bindTexture(_.TEXTURE_2D,I),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.NEAREST),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.NEAREST);let C=this.getInternalFormat();this.precision==="single"?_.texStorage2D(_.TEXTURE_2D,1,C,M[0],M[1]):_.texImage2D(_.TEXTURE_2D,0,_.RGBA,M[0],M[1],0,_.RGBA,_.UNSIGNED_BYTE,null),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+A+1,_.TEXTURE_2D,I,0),this.mappedTextures.push(new this.TextureConstructor({texture:I,size:M,dimensions:this.threadDim,output:this.output,context:this.context,internalFormat:this.getInternalFormat(),textureFormat:this.getTextureFormat(),kernel:this}))}}_getHeaderString(){return""}_getTextureCoordinate(){let _=this.subKernels,M=this.getVariablePrecisionString(this.texSize,this.tactic);return _===null||_.length<1?`in ${M} vec2 vTexCoord;
`:`out ${M} vec2 vTexCoord;
`}_getMainArgumentsString(_){let M=[],A=this.argumentNames;for(let I=0;I<A.length;I++)M.push(this.kernelArguments[I].getSource(_[I]));return M.join("")}getKernelString(){let _=[this.getKernelResultDeclaration()],M=this.subKernels;if(M!==null)switch(_.push("layout(location = 0) out vec4 data0"),this.returnType){case"Number":case"Float":case"Integer":for(let A=0;A<M.length;A++){let I=M[A];_.push(I.returnType==="Integer"?`int subKernelResult_${I.name} = 0`:`float subKernelResult_${I.name} = 0.0`,`layout(location = ${A+1}) out vec4 data${A+1}`)}break;case"Array(2)":for(let A=0;A<M.length;A++)_.push(`vec2 subKernelResult_${M[A].name}`,`layout(location = ${A+1}) out vec4 data${A+1}`);break;case"Array(3)":for(let A=0;A<M.length;A++)_.push(`vec3 subKernelResult_${M[A].name}`,`layout(location = ${A+1}) out vec4 data${A+1}`);break;case"Array(4)":for(let A=0;A<M.length;A++)_.push(`vec4 subKernelResult_${M[A].name}`,`layout(location = ${A+1}) out vec4 data${A+1}`);break}else _.push("out vec4 data0");return d.linesToString(_)+this.translatedSource}getMainResultGraphical(){return d.linesToString(["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  data0 = actualColor"])}getMainResultPackedPixels(){switch(this.returnType){case"LiteralInteger":case"Number":case"Integer":case"Float":return this.getMainResultKernelPackedPixels()+this.getMainResultSubKernelPackedPixels();default:throw new Error(`packed output only usable with Numbers, "${this.returnType}" specified`)}}getMainResultKernelPackedPixels(){return d.linesToString(["  threadId = indexTo3D(index, uOutputDim)","  kernel()",`  data0 = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(kernelResult)`])}getMainResultSubKernelPackedPixels(){let _=[];if(!this.subKernels)return"";for(let M=0;M<this.subKernels.length;M++)this.subKernels[M].returnType==="Integer"?_.push(`  data${M+1} = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(float(subKernelResult_${this.subKernels[M].name}))`):_.push(`  data${M+1} = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(subKernelResult_${this.subKernels[M].name})`);return d.linesToString(_)}getMainResultKernelMemoryOptimizedFloats(_,M){_.push("  threadId = indexTo3D(index, uOutputDim)","  kernel()",`  data0.${M} = kernelResult`)}getMainResultSubKernelMemoryOptimizedFloats(_,M){if(!this.subKernels)return _;for(let A=0;A<this.subKernels.length;A++){let I=this.subKernels[A];I.returnType==="Integer"?_.push(`  data${A+1}.${M} = float(subKernelResult_${I.name})`):_.push(`  data${A+1}.${M} = subKernelResult_${I.name}`)}}getMainResultKernelNumberTexture(){return["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  data0[0] = kernelResult"]}getMainResultSubKernelNumberTexture(){let _=[];if(!this.subKernels)return _;for(let M=0;M<this.subKernels.length;++M){let A=this.subKernels[M];A.returnType==="Integer"?_.push(`  data${M+1}[0] = float(subKernelResult_${A.name})`):_.push(`  data${M+1}[0] = subKernelResult_${A.name}`)}return _}getMainResultKernelArray2Texture(){return["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  data0[0] = kernelResult[0]","  data0[1] = kernelResult[1]"]}getMainResultSubKernelArray2Texture(){let _=[];if(!this.subKernels)return _;for(let M=0;M<this.subKernels.length;++M){let A=this.subKernels[M];_.push(`  data${M+1}[0] = subKernelResult_${A.name}[0]`,`  data${M+1}[1] = subKernelResult_${A.name}[1]`)}return _}getMainResultKernelArray3Texture(){return["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  data0[0] = kernelResult[0]","  data0[1] = kernelResult[1]","  data0[2] = kernelResult[2]"]}getMainResultSubKernelArray3Texture(){let _=[];if(!this.subKernels)return _;for(let M=0;M<this.subKernels.length;++M){let A=this.subKernels[M];_.push(`  data${M+1}[0] = subKernelResult_${A.name}[0]`,`  data${M+1}[1] = subKernelResult_${A.name}[1]`,`  data${M+1}[2] = subKernelResult_${A.name}[2]`)}return _}getMainResultKernelArray4Texture(){return["  threadId = indexTo3D(index, uOutputDim)","  kernel()","  data0 = kernelResult"]}getMainResultSubKernelArray4Texture(){let _=[];if(!this.subKernels)return _;for(let M=0;M<this.subKernels.length;++M)_.push(`  data${M+1} = subKernelResult_${this.subKernels[M].name}`);return _}destroyExtensions(){this.extensions.EXT_color_buffer_float=null,this.extensions.OES_texture_float_linear=null}toJSON(){let _=super.toJSON();return _.functionNodes=f.fromKernel(this,a).toJSON(),_.settings.threadDim=this.threadDim,_}}i.exports={WebGL2Kernel:w}},{"../../utils":114,"../function-builder":9,"../web-gl/kernel":70,"./fragment-shader":72,"./function-node":73,"./kernel-value-maps":74,"./vertex-shader":106}],106:[function(n,i,s){let r=`#version 300 es
      __FLOAT_TACTIC_DECLARATION__;
      __INT_TACTIC_DECLARATION__;
      __SAMPLER_2D_TACTIC_DECLARATION__;
      
      in vec2 aPos;
      in vec2 aTexCoord;
      
      out vec2 vTexCoord;
      uniform vec2 ratio;
      
      void main(void) {
        gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);
        vTexCoord = aTexCoord;
      }`;i.exports={vertexShader:r}},{}],107:[function(n,i,s){let r=n("./index"),a=r.GPU;for(let d in r)!r.hasOwnProperty(d)||d!=="GPU"&&(a[d]=r[d]);typeof window<"u"&&f(window),typeof self<"u"&&f(self);function f(d){d.GPU||Object.defineProperty(d,"GPU",{get(){return a}})}i.exports=r},{"./index":109}],108:[function(n,i,s){let{gpuMock:r}=n("gpu-mock.js"),{utils:a}=n("./utils"),{Kernel:f}=n("./backend/kernel"),{CPUKernel:d}=n("./backend/cpu/kernel"),{HeadlessGLKernel:c}=n("./backend/headless-gl/kernel"),{WebGL2Kernel:h}=n("./backend/web-gl2/kernel"),{WebGLKernel:o}=n("./backend/web-gl/kernel"),{kernelRunShortcut:u}=n("./kernel-run-shortcut"),m=[c,h,o],g=["gpu","cpu"],y={headlessgl:c,webgl2:h,webgl:o},v=!0;class w{static disableValidation(){v=!1}static enableValidation(){v=!0}static get isGPUSupported(){return m.some(M=>M.isSupported)}static get isKernelMapSupported(){return m.some(M=>M.isSupported&&M.features.kernelMap)}static get isOffscreenCanvasSupported(){return typeof Worker<"u"&&typeof OffscreenCanvas<"u"||typeof importScripts<"u"}static get isWebGLSupported(){return o.isSupported}static get isWebGL2Supported(){return h.isSupported}static get isHeadlessGLSupported(){return c.isSupported}static get isCanvasSupported(){return typeof HTMLCanvasElement<"u"}static get isGPUHTMLImageArraySupported(){return h.isSupported}static get isSinglePrecisionSupported(){return m.some(M=>M.isSupported&&M.features.isFloatRead&&M.features.isTextureFloat)}constructor(M){if(M=M||{},this.canvas=M.canvas||null,this.context=M.context||null,this.mode=M.mode,this.Kernel=null,this.kernels=[],this.functions=[],this.nativeFunctions=[],this.injectedNative=null,this.mode!=="dev"){if(this.chooseKernel(),M.functions)for(let A=0;A<M.functions.length;A++)this.addFunction(M.functions[A]);if(M.nativeFunctions)for(let A in M.nativeFunctions){if(!M.nativeFunctions.hasOwnProperty(A))continue;let I=M.nativeFunctions[A],{name:C,source:T}=I;this.addNativeFunction(C,T,I)}}}chooseKernel(){if(this.Kernel)return;let M=null;if(this.context){for(let A=0;A<m.length;A++){let I=m[A];if(I.isContextMatch(this.context)){if(!I.isSupported)throw new Error(`Kernel type ${I.name} not supported`);M=I;break}}if(M===null)throw new Error("unknown Context")}else if(this.mode){if(this.mode in y)(!v||y[this.mode].isSupported)&&(M=y[this.mode]);else if(this.mode==="gpu"){for(let A=0;A<m.length;A++)if(m[A].isSupported){M=m[A];break}}else this.mode==="cpu"&&(M=d);if(!M)throw new Error(`A requested mode of "${this.mode}" and is not supported`)}else{for(let A=0;A<m.length;A++)if(m[A].isSupported){M=m[A];break}M||(M=d)}this.mode||(this.mode=M.mode),this.Kernel=M}createKernel(M,A){if(typeof M>"u")throw new Error("Missing source parameter");if(typeof M!="object"&&!a.isFunction(M)&&typeof M!="string")throw new Error("source parameter not a function");let I=this.kernels;if(this.mode==="dev"){let z=r(M,E(A));return I.push(z),z}M=typeof M=="function"?M.toString():M;let C={},T=E(A)||{};A&&typeof A.argumentTypes=="object"&&(T.argumentTypes=Object.keys(A.argumentTypes).map(z=>A.argumentTypes[z]));function b(z){console.warn("Falling back to CPU");let H=new d(M,{argumentTypes:D.argumentTypes,constantTypes:D.constantTypes,graphical:D.graphical,loopMaxIterations:D.loopMaxIterations,constants:D.constants,dynamicOutput:D.dynamicOutput,dynamicArgument:D.dynamicArguments,output:D.output,precision:D.precision,pipeline:D.pipeline,immutable:D.immutable,optimizeFloatMemory:D.optimizeFloatMemory,fixIntegerDivisionAccuracy:D.fixIntegerDivisionAccuracy,functions:D.functions,nativeFunctions:D.nativeFunctions,injectedNative:D.injectedNative,subKernels:D.subKernels,strictIntegers:D.strictIntegers,debug:D.debug});H.build.apply(H,z);let B=H.run.apply(H,z);return D.replaceKernel(H),B}function L(z,H,B){B.debug&&console.warn("Switching kernels");let $=null;if(B.signature&&!C[B.signature]&&(C[B.signature]=B),B.dynamicOutput)for(let ce=z.length-1;ce>=0;ce--){let de=z[ce];de.type==="outputPrecisionMismatch"&&($=de.needed)}let j=B.constructor,K=j.getArgumentTypes(B,H),ne=j.getSignature(B,K),Z=C[ne];if(Z)return Z.onActivate(B),Z;let le=C[ne]=new j(M,{argumentTypes:K,constantTypes:B.constantTypes,graphical:B.graphical,loopMaxIterations:B.loopMaxIterations,constants:B.constants,dynamicOutput:B.dynamicOutput,dynamicArgument:B.dynamicArguments,context:B.context,canvas:B.canvas,output:$||B.output,precision:B.precision,pipeline:B.pipeline,immutable:B.immutable,optimizeFloatMemory:B.optimizeFloatMemory,fixIntegerDivisionAccuracy:B.fixIntegerDivisionAccuracy,functions:B.functions,nativeFunctions:B.nativeFunctions,injectedNative:B.injectedNative,subKernels:B.subKernels,strictIntegers:B.strictIntegers,debug:B.debug,gpu:B.gpu,validate:v,returnType:B.returnType,tactic:B.tactic,onRequestFallback:b,onRequestSwitchKernel:L,texture:B.texture,mappedTextures:B.mappedTextures,drawBuffersMap:B.drawBuffersMap});return le.build.apply(le,H),D.replaceKernel(le),I.push(le),le}let P=Object.assign({context:this.context,canvas:this.canvas,functions:this.functions,nativeFunctions:this.nativeFunctions,injectedNative:this.injectedNative,gpu:this,validate:v,onRequestFallback:b,onRequestSwitchKernel:L},T),X=new this.Kernel(M,P),D=u(X);return this.canvas||(this.canvas=X.canvas),this.context||(this.context=X.context),I.push(X),D}createKernelMap(){let M,A,I=typeof arguments[arguments.length-2];if(I==="function"||I==="string"?(M=arguments[arguments.length-2],A=arguments[arguments.length-1]):M=arguments[arguments.length-1],this.mode!=="dev"&&(!this.Kernel.isSupported||!this.Kernel.features.kernelMap)&&this.mode&&g.indexOf(this.mode)<0)throw new Error(`kernelMap not supported on ${this.Kernel.name}`);let C=E(A);if(A&&typeof A.argumentTypes=="object"&&(C.argumentTypes=Object.keys(A.argumentTypes).map(T=>A.argumentTypes[T])),Array.isArray(arguments[0])){C.subKernels=[];let T=arguments[0];for(let b=0;b<T.length;b++){let L=T[b].toString(),P=a.getFunctionNameFromString(L);C.subKernels.push({name:P,source:L,property:b})}}else{C.subKernels=[];let T=arguments[0];for(let b in T){if(!T.hasOwnProperty(b))continue;let L=T[b].toString(),P=a.getFunctionNameFromString(L);C.subKernels.push({name:P||b,source:L,property:b})}}return this.createKernel(M,C)}combineKernels(){let M=arguments[0],A=arguments[arguments.length-1];if(M.kernel.constructor.mode==="cpu")return A;let I=arguments[0].canvas,C=arguments[0].context,T=arguments.length-1;for(let b=0;b<T;b++)arguments[b].setCanvas(I).setContext(C).setPipeline(!0);return function(){let b=A.apply(this,arguments);return b.toArray?b.toArray():b}}setFunctions(M){return this.functions=M,this}setNativeFunctions(M){return this.nativeFunctions=M,this}addFunction(M,A){return this.functions.push({source:M,settings:A}),this}addNativeFunction(M,A,I){if(this.kernels.length>0)throw new Error('Cannot call "addNativeFunction" after "createKernels" has been called.');return this.nativeFunctions.push(Object.assign({name:M,source:A},I)),this}injectNative(M){return this.injectedNative=M,this}destroy(){return new Promise((M,A)=>{this.kernels||M(),setTimeout(()=>{try{for(let C=0;C<this.kernels.length;C++)this.kernels[C].destroy(!0);let I=this.kernels[0];I&&(I.kernel&&(I=I.kernel),I.constructor.destroyContext&&I.constructor.destroyContext(this.context))}catch(I){A(I)}M()},0)})}}function E(_){if(!_)return{};let M=Object.assign({},_);return _.hasOwnProperty("floatOutput")&&(a.warnDeprecated("setting","floatOutput","precision"),M.precision=_.floatOutput?"single":"unsigned"),_.hasOwnProperty("outputToTexture")&&(a.warnDeprecated("setting","outputToTexture","pipeline"),M.pipeline=Boolean(_.outputToTexture)),_.hasOwnProperty("outputImmutable")&&(a.warnDeprecated("setting","outputImmutable","immutable"),M.immutable=Boolean(_.outputImmutable)),_.hasOwnProperty("floatTextures")&&(a.warnDeprecated("setting","floatTextures","optimizeFloatMemory"),M.optimizeFloatMemory=Boolean(_.floatTextures)),M}i.exports={GPU:w,kernelOrder:m,kernelTypes:g}},{"./backend/cpu/kernel":8,"./backend/headless-gl/kernel":34,"./backend/kernel":36,"./backend/web-gl/kernel":70,"./backend/web-gl2/kernel":105,"./kernel-run-shortcut":111,"./utils":114,"gpu-mock.js":4}],109:[function(n,i,s){let{GPU:r}=n("./gpu"),{alias:a}=n("./alias"),{utils:f}=n("./utils"),{Input:d,input:c}=n("./input"),{Texture:h}=n("./texture"),{FunctionBuilder:o}=n("./backend/function-builder"),{FunctionNode:u}=n("./backend/function-node"),{CPUFunctionNode:m}=n("./backend/cpu/function-node"),{CPUKernel:g}=n("./backend/cpu/kernel"),{HeadlessGLKernel:y}=n("./backend/headless-gl/kernel"),{WebGLFunctionNode:v}=n("./backend/web-gl/function-node"),{WebGLKernel:w}=n("./backend/web-gl/kernel"),{kernelValueMaps:E}=n("./backend/web-gl/kernel-value-maps"),{WebGL2FunctionNode:_}=n("./backend/web-gl2/function-node"),{WebGL2Kernel:M}=n("./backend/web-gl2/kernel"),{kernelValueMaps:A}=n("./backend/web-gl2/kernel-value-maps"),{GLKernel:I}=n("./backend/gl/kernel"),{Kernel:C}=n("./backend/kernel"),{FunctionTracer:T}=n("./backend/function-tracer"),b=n("./plugins/math-random-uniformly-distributed");i.exports={alias:a,CPUFunctionNode:m,CPUKernel:g,GPU:r,FunctionBuilder:o,FunctionNode:u,HeadlessGLKernel:y,Input:d,input:c,Texture:h,utils:f,WebGL2FunctionNode:_,WebGL2Kernel:M,webGL2KernelValueMaps:A,WebGLFunctionNode:v,WebGLKernel:w,webGLKernelValueMaps:E,GLKernel:I,Kernel:C,FunctionTracer:T,plugins:{mathRandom:b}}},{"./alias":5,"./backend/cpu/function-node":6,"./backend/cpu/kernel":8,"./backend/function-builder":9,"./backend/function-node":10,"./backend/function-tracer":11,"./backend/gl/kernel":13,"./backend/headless-gl/kernel":34,"./backend/kernel":36,"./backend/web-gl/function-node":38,"./backend/web-gl/kernel":70,"./backend/web-gl/kernel-value-maps":39,"./backend/web-gl2/function-node":73,"./backend/web-gl2/kernel":105,"./backend/web-gl2/kernel-value-maps":74,"./gpu":108,"./input":110,"./plugins/math-random-uniformly-distributed":112,"./texture":113,"./utils":114}],110:[function(n,i,s){class r{constructor(d,c){this.value=d,Array.isArray(c)?this.size=c:(this.size=new Int32Array(3),c.z?this.size=new Int32Array([c.x,c.y,c.z]):c.y?this.size=new Int32Array([c.x,c.y]):this.size=new Int32Array([c.x]));let[h,o,u]=this.size;if(u){if(this.value.length!==h*o*u)throw new Error(`Input size ${this.value.length} does not match ${h} * ${o} * ${u} = ${o*h*u}`)}else if(o){if(this.value.length!==h*o)throw new Error(`Input size ${this.value.length} does not match ${h} * ${o} = ${o*h}`)}else if(this.value.length!==h)throw new Error(`Input size ${this.value.length} does not match ${h}`)}toArray(){let{utils:d}=n("./utils"),[c,h,o]=this.size;return o?d.erectMemoryOptimized3DFloat(this.value.subarray?this.value:new Float32Array(this.value),c,h,o):h?d.erectMemoryOptimized2DFloat(this.value.subarray?this.value:new Float32Array(this.value),c,h):this.value}}function a(f,d){return new r(f,d)}i.exports={Input:r,input:a}},{"./utils":114}],111:[function(n,i,s){let{utils:r}=n("./utils");function a(d){let c=function(){return d.build.apply(d,arguments),c=function(){let o=d.run.apply(d,arguments);if(d.switchingKernels){let u=d.resetSwitchingKernels(),m=d.onRequestSwitchKernel(u,arguments,d);h.kernel=d=m,o=m.run.apply(m,arguments)}return d.renderKernels?d.renderKernels():d.renderOutput?d.renderOutput():o},c.apply(d,arguments)},h=function(){return c.apply(d,arguments)};return h.exec=function(){return new Promise((o,u)=>{try{o(c.apply(this,arguments))}catch(m){u(m)}})},h.replaceKernel=function(o){d=o,f(d,h)},f(d,h),h}function f(d,c){if(c.kernel){c.kernel=d;return}let h=r.allPropertiesOf(d);for(let o=0;o<h.length;o++){let u=h[o];u[0]==="_"&&u[1]==="_"||(typeof d[u]=="function"?u.substring(0,3)==="add"||u.substring(0,3)==="set"?c[u]=function(){return c.kernel[u].apply(c.kernel,arguments),c}:c[u]=function(){return c.kernel[u].apply(c.kernel,arguments)}:(c.__defineGetter__(u,()=>c.kernel[u]),c.__defineSetter__(u,m=>{c.kernel[u]=m})))}c.kernel=d}i.exports={kernelRunShortcut:a}},{"./utils":114}],112:[function(n,i,s){let o={name:"math-random-uniformly-distributed",onBeforeRun:u=>{u.setUniform1f("randomSeed1",Math.random()),u.setUniform1f("randomSeed2",Math.random())},functionMatch:"Math.random()",functionReplace:"nrand(vTexCoord)",functionReturnType:"Number",source:`// https://www.shadertoy.com/view/4t2SDh
      //note: uniformly distributed, normalized rand, [0,1]
      highp float randomSeedShift = 1.0;
      highp float slide = 1.0;
      uniform highp float randomSeed1;
      uniform highp float randomSeed2;
      
      highp float nrand(highp vec2 n) {
        highp float result = fract(sin(dot((n.xy + 1.0) * vec2(randomSeed1 * slide, randomSeed2 * randomSeedShift), vec2(12.9898, 78.233))) * 43758.5453);
        randomSeedShift = result;
        if (randomSeedShift > 0.5) {
          slide += 0.00009; 
        } else {
          slide += 0.0009;
        }
        return result;
      }`};i.exports=o},{}],113:[function(n,i,s){class r{constructor(f){let{texture:d,size:c,dimensions:h,output:o,context:u,type:m="NumberTexture",kernel:g,internalFormat:y,textureFormat:v}=f;if(!o)throw new Error('settings property "output" required.');if(!u)throw new Error('settings property "context" required.');if(!d)throw new Error('settings property "texture" required.');if(!g)throw new Error('settings property "kernel" required.');this.texture=d,d._refs?d._refs++:d._refs=1,this.size=c,this.dimensions=h,this.output=o,this.context=u,this.kernel=g,this.type=m,this._deleted=!1,this.internalFormat=y,this.textureFormat=v}toArray(){throw new Error(`Not implemented on ${this.constructor.name}`)}clone(){throw new Error(`Not implemented on ${this.constructor.name}`)}delete(){throw new Error(`Not implemented on ${this.constructor.name}`)}clear(){throw new Error(`Not implemented on ${this.constructor.name}`)}}i.exports={Texture:r}},{}],114:[function(n,i,s){let r=n("acorn"),{Input:a}=n("./input"),{Texture:f}=n("./texture"),d=/function ([^(]*)/,c=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,h=/([^\s,]+)/g,o={systemEndianness(){return y},getSystemEndianness(){let v=new ArrayBuffer(4),w=new Uint32Array(v),E=new Uint8Array(v);if(w[0]=3735928559,E[0]===239)return"LE";if(E[0]===222)return"BE";throw new Error("unknown endianness")},isFunction(v){return typeof v=="function"},isFunctionString(v){return typeof v=="string"?v.slice(0,8).toLowerCase()==="function":!1},getFunctionNameFromString(v){let w=d.exec(v);return!w||w.length===0?null:w[1].trim()},getFunctionBodyFromString(v){return v.substring(v.indexOf("{")+1,v.lastIndexOf("}"))},getArgumentNamesFromString(v){let w=v.replace(c,""),E=w.slice(w.indexOf("(")+1,w.indexOf(")")).match(h);return E===null&&(E=[]),E},clone(v){if(v===null||typeof v!="object"||v.hasOwnProperty("isActiveClone"))return v;let w=v.constructor();for(let E in v)Object.prototype.hasOwnProperty.call(v,E)&&(v.isActiveClone=null,w[E]=o.clone(v[E]),delete v.isActiveClone);return w},isArray(v){return!isNaN(v.length)},getVariableType(v,w){if(o.isArray(v))return v.length>0&&v[0].nodeName==="IMG"?"HTMLImageArray":"Array";switch(v.constructor){case Boolean:return"Boolean";case Number:return w&&Number.isInteger(v)?"Integer":"Float";case f:return v.type;case a:return"Input"}switch(v.nodeName){case"IMG":return"HTMLImage";case"CANVAS":return"HTMLImage";case"VIDEO":return"HTMLVideo"}return v.hasOwnProperty("type")?v.type:"Unknown"},getKernelTextureSize(v,w){let[E,_,M]=w,A=(E||1)*(_||1)*(M||1);return v.optimizeFloatMemory&&v.precision==="single"&&(E=A=Math.ceil(A/4)),_>1&&E*_===A?new Int32Array([E,_]):o.closestSquareDimensions(A)},closestSquareDimensions(v){let w=Math.sqrt(v),E=Math.ceil(w),_=Math.floor(w);for(;E*_<v;)E--,_=Math.ceil(v/E);return new Int32Array([_,Math.ceil(v/_)])},getMemoryOptimizedFloatTextureSize(v,w){let _=o.roundTo((v[0]||1)*(v[1]||1)*(v[2]||1)*(v[3]||1),4)/w;return o.closestSquareDimensions(_)},getMemoryOptimizedPackedTextureSize(v,w){let[E,_,M]=v,I=o.roundTo((E||1)*(_||1)*(M||1),4)/(4/w);return o.closestSquareDimensions(I)},roundTo(v,w){return Math.floor((v+w-1)/w)*w},getDimensions(v,w){let E;if(o.isArray(v)){let _=[],M=v;for(;o.isArray(M);)_.push(M.length),M=M[0];E=_.reverse()}else if(v instanceof f)E=v.output;else if(v instanceof a)E=v.size;else throw new Error(`Unknown dimensions of ${v}`);if(w)for(E=Array.from(E);E.length<3;)E.push(1);return new Int32Array(E)},flatten2dArrayTo(v,w){let E=0;for(let _=0;_<v.length;_++)w.set(v[_],E),E+=v[_].length},flatten3dArrayTo(v,w){let E=0;for(let _=0;_<v.length;_++)for(let M=0;M<v[_].length;M++)w.set(v[_][M],E),E+=v[_][M].length},flatten4dArrayTo(v,w){let E=0;for(let _=0;_<v.length;_++)for(let M=0;M<v[_].length;M++)for(let A=0;A<v[_][M].length;A++)w.set(v[_][M][A],E),E+=v[_][M][A].length},flattenTo(v,w){o.isArray(v[0])?o.isArray(v[0][0])?o.isArray(v[0][0][0])?o.flatten4dArrayTo(v,w):o.flatten3dArrayTo(v,w):o.flatten2dArrayTo(v,w):w.set(v)},splitArray(v,w){let E=[];for(let _=0;_<v.length;_+=w)E.push(new v.constructor(v.buffer,_*4+v.byteOffset,w));return E},getAstString(v,w){let E=Array.isArray(v)?v:v.split(/\r?\n/g),_=w.loc.start,M=w.loc.end,A=[];if(_.line===M.line)A.push(E[_.line-1].substring(_.column,M.column));else{A.push(E[_.line-1].slice(_.column));for(let I=_.line;I<M.line;I++)A.push(E[I]);A.push(E[M.line-1].slice(0,M.column))}return A.join(`
`)},allPropertiesOf(v){let w=[];do w.push.apply(w,Object.getOwnPropertyNames(v));while(v=Object.getPrototypeOf(v));return w},linesToString(v){return v.length>0?v.join(`;
`)+`;
`:`
`},warnDeprecated(v,w,E){console.warn(E?`You are using a deprecated ${v} "${w}". It has been replaced with "${E}". Fixing, but please upgrade as it will soon be removed.`:`You are using a deprecated ${v} "${w}". It has been removed. Fixing, but please upgrade as it will soon be removed.`)},flipPixels:(v,w,E)=>{let _=E/2|0,M=w*4,A=new Uint8ClampedArray(w*4),I=v.slice(0);for(let C=0;C<_;++C){let T=C*M,b=(E-C-1)*M;A.set(I.subarray(T,T+M)),I.copyWithin(T,b,b+M),I.set(A,b)}return I},erectPackedFloat:(v,w)=>v.subarray(0,w),erect2DPackedFloat:(v,w,E)=>{let _=new Array(E);for(let M=0;M<E;M++){let A=M*w,I=A+w;_[M]=v.subarray(A,I)}return _},erect3DPackedFloat:(v,w,E,_)=>{let M=new Array(_);for(let A=0;A<_;A++){let I=new Array(E);for(let C=0;C<E;C++){let T=A*E*w+C*w,b=T+w;I[C]=v.subarray(T,b)}M[A]=I}return M},erectMemoryOptimizedFloat:(v,w)=>v.subarray(0,w),erectMemoryOptimized2DFloat:(v,w,E)=>{let _=new Array(E);for(let M=0;M<E;M++){let A=M*w;_[M]=v.subarray(A,A+w)}return _},erectMemoryOptimized3DFloat:(v,w,E,_)=>{let M=new Array(_);for(let A=0;A<_;A++){let I=new Array(E);for(let C=0;C<E;C++){let T=A*E*w+C*w;I[C]=v.subarray(T,T+w)}M[A]=I}return M},erectFloat:(v,w)=>{let E=new Float32Array(w),_=0;for(let M=0;M<w;M++)E[M]=v[_],_+=4;return E},erect2DFloat:(v,w,E)=>{let _=new Array(E),M=0;for(let A=0;A<E;A++){let I=new Float32Array(w);for(let C=0;C<w;C++)I[C]=v[M],M+=4;_[A]=I}return _},erect3DFloat:(v,w,E,_)=>{let M=new Array(_),A=0;for(let I=0;I<_;I++){let C=new Array(E);for(let T=0;T<E;T++){let b=new Float32Array(w);for(let L=0;L<w;L++)b[L]=v[A],A+=4;C[T]=b}M[I]=C}return M},erectArray2:(v,w)=>{let E=new Array(w),_=w*4,M=0;for(let A=0;A<_;A+=4)E[M++]=v.subarray(A,A+2);return E},erect2DArray2:(v,w,E)=>{let _=new Array(E),M=w*4;for(let A=0;A<E;A++){let I=new Array(w),C=A*M,T=0;for(let b=0;b<M;b+=4)I[T++]=v.subarray(b+C,b+C+2);_[A]=I}return _},erect3DArray2:(v,w,E,_)=>{let M=w*4,A=new Array(_);for(let I=0;I<_;I++){let C=new Array(E);for(let T=0;T<E;T++){let b=new Array(w),L=I*M*E+T*M,P=0;for(let X=0;X<M;X+=4)b[P++]=v.subarray(X+L,X+L+2);C[T]=b}A[I]=C}return A},erectArray3:(v,w)=>{let E=new Array(w),_=w*4,M=0;for(let A=0;A<_;A+=4)E[M++]=v.subarray(A,A+3);return E},erect2DArray3:(v,w,E)=>{let _=w*4,M=new Array(E);for(let A=0;A<E;A++){let I=new Array(w),C=A*_,T=0;for(let b=0;b<_;b+=4)I[T++]=v.subarray(b+C,b+C+3);M[A]=I}return M},erect3DArray3:(v,w,E,_)=>{let M=w*4,A=new Array(_);for(let I=0;I<_;I++){let C=new Array(E);for(let T=0;T<E;T++){let b=new Array(w),L=I*M*E+T*M,P=0;for(let X=0;X<M;X+=4)b[P++]=v.subarray(X+L,X+L+3);C[T]=b}A[I]=C}return A},erectArray4:(v,w)=>{let E=new Array(v),_=w*4,M=0;for(let A=0;A<_;A+=4)E[M++]=v.subarray(A,A+4);return E},erect2DArray4:(v,w,E)=>{let _=w*4,M=new Array(E);for(let A=0;A<E;A++){let I=new Array(w),C=A*_,T=0;for(let b=0;b<_;b+=4)I[T++]=v.subarray(b+C,b+C+4);M[A]=I}return M},erect3DArray4:(v,w,E,_)=>{let M=w*4,A=new Array(_);for(let I=0;I<_;I++){let C=new Array(E);for(let T=0;T<E;T++){let b=new Array(w),L=I*M*E+T*M,P=0;for(let X=0;X<M;X+=4)b[P++]=v.subarray(X+L,X+L+4);C[T]=b}A[I]=C}return A},flattenFunctionToString:(v,w)=>{let{findDependency:E,thisLookup:_,doNotDefine:M}=w,A=w.flattened;A||(A=w.flattened={});let I=r.parse(v),C=[],T=0;function b(P){if(Array.isArray(P)){let X=[];for(let D=0;D<P.length;D++)X.push(b(P[D]));return X.join("")}switch(P.type){case"Program":return b(P.body)+(P.body[0].type==="VariableDeclaration"?";":"");case"FunctionDeclaration":return`function ${P.id.name}(${P.params.map(b).join(", ")}) ${b(P.body)}`;case"BlockStatement":{let D=[];T+=2;for(let z=0;z<P.body.length;z++){let H=b(P.body[z]);H&&D.push(" ".repeat(T)+H,`;
`)}return T-=2,`{
${D.join("")}}`}case"VariableDeclaration":let X=o.normalizeDeclarations(P).map(b).filter(D=>D!==null);return X.length<1?"":`${P.kind} ${X.join(",")}`;case"VariableDeclarator":return P.init.object&&P.init.object.type==="ThisExpression"?_(P.init.property.name,!0)?`${P.id.name} = ${b(P.init)}`:null:`${P.id.name} = ${b(P.init)}`;case"CallExpression":{if(P.callee.property.name==="subarray")return`${b(P.callee.object)}.${b(P.callee.property)}(${P.arguments.map(D=>b(D)).join(", ")})`;if(P.callee.object.name==="gl"||P.callee.object.name==="context")return`${b(P.callee.object)}.${b(P.callee.property)}(${P.arguments.map(D=>b(D)).join(", ")})`;if(P.callee.object.type==="ThisExpression")return C.push(E("this",P.callee.property.name)),`${P.callee.property.name}(${P.arguments.map(D=>b(D)).join(", ")})`;if(P.callee.object.name){let D=E(P.callee.object.name,P.callee.property.name);return D===null?`${P.callee.object.name}.${P.callee.property.name}(${P.arguments.map(z=>b(z)).join(", ")})`:(C.push(D),`${P.callee.property.name}(${P.arguments.map(z=>b(z)).join(", ")})`)}else{if(P.callee.object.type==="MemberExpression")return`${b(P.callee.object)}.${P.callee.property.name}(${P.arguments.map(D=>b(D)).join(", ")})`;throw new Error("unknown ast.callee")}}case"ReturnStatement":return`return ${b(P.argument)}`;case"BinaryExpression":return`(${b(P.left)}${P.operator}${b(P.right)})`;case"UnaryExpression":return P.prefix?`${P.operator} ${b(P.argument)}`:`${b(P.argument)} ${P.operator}`;case"ExpressionStatement":return`${b(P.expression)}`;case"SequenceExpression":return`(${b(P.expressions)})`;case"ArrowFunctionExpression":return`(${P.params.map(b).join(", ")}) => ${b(P.body)}`;case"Literal":return P.raw;case"Identifier":return P.name;case"MemberExpression":return P.object.type==="ThisExpression"?_(P.property.name):P.computed?`${b(P.object)}[${b(P.property)}]`:b(P.object)+"."+b(P.property);case"ThisExpression":return"this";case"NewExpression":return`new ${b(P.callee)}(${P.arguments.map(D=>b(D)).join(", ")})`;case"ForStatement":return`for (${b(P.init)};${b(P.test)};${b(P.update)}) ${b(P.body)}`;case"AssignmentExpression":return`${b(P.left)}${P.operator}${b(P.right)}`;case"UpdateExpression":return`${b(P.argument)}${P.operator}`;case"IfStatement":return`if (${b(P.test)}) ${b(P.consequent)}`;case"ThrowStatement":return`throw ${b(P.argument)}`;case"ObjectPattern":return P.properties.map(b).join(", ");case"ArrayPattern":return P.elements.map(b).join(", ");case"DebuggerStatement":return"debugger;";case"ConditionalExpression":return`${b(P.test)}?${b(P.consequent)}:${b(P.alternate)}`;case"Property":if(P.kind==="init")return b(P.key)}throw new Error(`unhandled ast.type of ${P.type}`)}let L=b(I);if(C.length>0){let P=[];for(let X=0;X<C.length;X++){let D=C[X];A[D]||(A[D]=!0),D&&P.push(o.flattenFunctionToString(D,w)+`
`)}return P.join("")+L}return L},normalizeDeclarations:v=>{if(v.type!=="VariableDeclaration")throw new Error('Ast is not of type "VariableDeclaration"');let w=[];for(let E=0;E<v.declarations.length;E++){let _=v.declarations[E];if(_.id&&_.id.type==="ObjectPattern"&&_.id.properties){let{properties:M}=_.id;for(let A=0;A<M.length;A++){let I=M[A];if(I.value.type==="ObjectPattern"&&I.value.properties)for(let C=0;C<I.value.properties.length;C++){let T=I.value.properties[C];if(T.type==="Property")w.push({type:"VariableDeclarator",id:{type:"Identifier",name:T.key.name},init:{type:"MemberExpression",object:{type:"MemberExpression",object:_.init,property:{type:"Identifier",name:I.key.name},computed:!1},property:{type:"Identifier",name:T.key.name},computed:!1}});else throw new Error("unexpected state")}else if(I.value.type==="Identifier")w.push({type:"VariableDeclarator",id:{type:"Identifier",name:I.value&&I.value.name?I.value.name:I.key.name},init:{type:"MemberExpression",object:_.init,property:{type:"Identifier",name:I.key.name},computed:!1}});else throw new Error("unexpected state")}}else if(_.id&&_.id.type==="ArrayPattern"&&_.id.elements){let{elements:M}=_.id;for(let A=0;A<M.length;A++){let I=M[A];if(I.type==="Identifier")w.push({type:"VariableDeclarator",id:{type:"Identifier",name:I.name},init:{type:"MemberExpression",object:_.init,property:{type:"Literal",value:A,raw:A.toString(),start:I.start,end:I.end},computed:!0}});else throw new Error("unexpected state")}}else w.push(_)}return w},splitHTMLImageToRGB:(v,w)=>{let E=v.createKernel(function(C){return C[this.thread.y][this.thread.x].r*255},{output:[w.width,w.height],precision:"unsigned",argumentTypes:{a:"HTMLImage"}}),_=v.createKernel(function(C){return C[this.thread.y][this.thread.x].g*255},{output:[w.width,w.height],precision:"unsigned",argumentTypes:{a:"HTMLImage"}}),M=v.createKernel(function(C){return C[this.thread.y][this.thread.x].b*255},{output:[w.width,w.height],precision:"unsigned",argumentTypes:{a:"HTMLImage"}}),A=v.createKernel(function(C){return C[this.thread.y][this.thread.x].a*255},{output:[w.width,w.height],precision:"unsigned",argumentTypes:{a:"HTMLImage"}}),I=[E(w),_(w),M(w),A(w)];return I.rKernel=E,I.gKernel=_,I.bKernel=M,I.aKernel=A,I.gpu=v,I},splitRGBAToCanvases:(v,w,E,_)=>{let M=v.createKernel(function(T){let b=T[this.thread.y][this.thread.x];this.color(b.r/255,0,0,255)},{output:[E,_],graphical:!0,argumentTypes:{v:"Array2D(4)"}});M(w);let A=v.createKernel(function(T){let b=T[this.thread.y][this.thread.x];this.color(0,b.g/255,0,255)},{output:[E,_],graphical:!0,argumentTypes:{v:"Array2D(4)"}});A(w);let I=v.createKernel(function(T){let b=T[this.thread.y][this.thread.x];this.color(0,0,b.b/255,255)},{output:[E,_],graphical:!0,argumentTypes:{v:"Array2D(4)"}});I(w);let C=v.createKernel(function(T){let b=T[this.thread.y][this.thread.x];this.color(255,255,255,b.a/255)},{output:[E,_],graphical:!0,argumentTypes:{v:"Array2D(4)"}});return C(w),[M.canvas,A.canvas,I.canvas,C.canvas]},getMinifySafeName:v=>{try{let w=r.parse(`const value = ${v.toString()}`),{init:E}=w.body[0].declarations[0];return E.body.name||E.body.body[0].argument.name}catch{throw new Error("Unrecognized function type.  Please use `() => yourFunctionVariableHere` or function() { return yourFunctionVariableHere; }")}},sanitizeName:function(v){return u.test(v)&&(v=v.replace(u,"S_S")),m.test(v)?v=v.replace(m,"U_U"):g.test(v)&&(v=v.replace(g,"u_u")),v}},u=/\$/,m=/__/,g=/_/,y=o.getSystemEndianness();i.exports={utils:o}},{"./input":110,"./texture":113,acorn:1}]},{},[107])(107)})});var xu={};df(xu,{ProxyElement:()=>Hr,ThreadedCanvas:()=>uo,WorkerManager:()=>Gr,initProxyElement:()=>uf});var bu;typeof process<"u"?bu=path.join(process.cwd(),"node_modules","magicworker","distmagic.three.worker.js"):bu=window.location.origin+"/node_modules/magicworker/dist/magic.three.worker.js";var _u=bu;var wu=class{constructor(e=!1,t=!1){this.debug=e,this.listeners=[],this.synchronous=t,this.syncInterval="FRAMERATE",this.syncAnim=void 0,t===!0&&this.startSync()}addListener(e=null,t,n=void 0,i=void 0,s=void 0,r=this.debug,a=!0){if(t===void 0){console.error("You must assign an object");return}var f=e;f==null&&(f=Math.floor(Math.random()*1e5)),this.synchronous===!0&&(a=!1);var d={key:f,listener:new Su(t,n,i,s,r,a)};this.listeners.push(d)}getListener(e){return this.listeners.find((n,i)=>{if(n.key===e)return!0})}hasKey(e){var t=!1;return this.listeners.forEach((n,i)=>{if(n.key===e)return t=!0,!0}),t}getKeyIndices(e){var t=[];return this.listeners.find((n,i)=>{n.key===e&&t.push(i)}),t}onchange(e=null,t=null){if(e==null)this.listeners.forEach((i,s)=>{i.listener.onchange=t});else var n=this.listeners.find((i,s)=>{i.name===e&&(i.listener.onchange=t)})}addFunc=(e=null,t=null,n=!0)=>{var i=null;if(t!==null)if(e==null)this.listeners.forEach((r,a)=>{i=r.listener.addFunc(t),r.listener.running==!1&&n==!0&&r.listener.start()});else var s=this.listeners.find((r,a)=>{r.key===e&&(i=r.listener.addFunc(t),r.listener.running==!1&&n==!0&&r.listener.start())});return i};getFuncs=(e=void 0)=>{if(e){var t=this.listeners.find((n,i)=>{if(n.key===e)return!0});return t.onchangeFuncs}else return};removeFuncs=(e=null,t=null,n=!1)=>{if(e==null)this.listeners.forEach((s,r)=>{s.listener.removeFuncs(t)});else var i=this.listeners.find((s,r)=>{s.key===e&&(s.listener.removeFuncs(t),(s.listener.onchangeFuncs.length===0||n===!0)&&s.listener.stop())})};stop(e=null){if(this.synchronous&&this.stopSync(),e==null)this.listeners.forEach((n,i)=>{n.listener.stop()});else var t=this.listeners.find((n,i)=>{n.name===e&&n.listener.stop()})}start(e=null){if(this.synchronous&&this.stopSync(),e==null)this.listeners.forEach((n,i)=>{n.listener.start()});else var t=this.listeners.find((n,i)=>{n.name===e&&n.listener.start()})}startSync(){if(this.synchronous===!1){this.synchronous=!0,this.stop();let e=()=>{this.synchronous===!0&&(this.listeners.forEach(t=>{t.listener.check()}),this.syncInterval==="FRAMERATE"?this.syncAnim=requestAnimationFrame(e):typeof this.syncInterval=="number"&&setTimeout(e,this.syncInterval))};e()}}stopSync(){this.synchronous=!1,this.syncAnim&&cancelAnimationFrame(this.syncAnim)}remove(e=null){if(e==null)this.listeners.forEach(i=>{i.listener.stop()}),this.listeners.splice(0,this.listeners.length);else{var t=[],n=this.listeners.forEach((i,s)=>{i.key===e&&t.push(s)});t.reverse().forEach(i=>{this.listeners[i].listener.stop(),this.listeners.splice(i,1)})}}},Su=class{constructor(e,t="__ANY__",n=this.onchange,i="FRAMERATE",s=!1,r=!0){this.debug=s,this.onchange=n,this.onchangeFuncs=[],this.object=e,this.propName=t,this.propOld=void 0,this.setListenerRef(t),this.running=r,this.funcs=0,this.interval,i<10?(this.interval=10,console.log("Min recommended interval set: 10ms")):this.interval=i,r===!0&&(typeof window>"u"?setTimeout(()=>{this.check()},60):this.checker=requestAnimationFrame(this.check))}onchange=e=>{console.log(this.propName," changed from: ",this.propOld," to: ",this.object[this.propName])};addFunc=(e=null)=>{let t=0;return e!==null&&(this.onchangeFuncs.push({idx:this.funcs,onchange:e}),t=this.funcs,this.funcs++),t};removeFuncs(e=null){let t=0;e===null?this.onchangeFuncs=[]:this.onchangeFuncs.find((n,i)=>{if(n.idx===e)return t=i,!0})!==void 0&&this.onchangeFuncs.splice(t,1)}onchangeMulti=e=>{[...this.onchangeFuncs].forEach((n,i)=>{this.debug===!0&&console.log(n.onchange),n.onchange(e)})};setListenerRef=e=>{e==="__ANY__"||e===null||e===void 0?this.propOld=JSON.stringifyFast(this.object):Array.isArray(this.object[e])?this.propOld=JSON.stringifyFast(this.object[e].slice(this.object[e].length-20)):typeof this.object[e]=="object"?this.propOld=JSON.stringifyFast(this.object[e]):typeof this.object[e]=="function"?this.propOld=this.object[e].toString():this.propOld=this.object[e],this.debug===!0&&console.log("propname",e,", new assignment: ",this.propOld)};check=()=>{let e=!1;if(this.propName==="__ANY__"||this.propName===null||this.propName===void 0)this.propOld!==JSON.stringifyFast(this.object)&&(this.debug===!0&&console.log("onchange: ",this.onchange),this.onchange(this.object),this.onchangeFuncs.length>0&&this.onchangeMulti(this.object),this.setListenerRef(this.propName),e=!0);else if(Array.isArray(this.object[this.propName]))this.propOld!==JSON.stringifyFast(this.object[this.propName].slice(this.object[this.propName].length-20))&&(this.debug===!0&&console.log("onchange: ",this.onchange),this.onchange(this.object[this.propName]),this.onchangeFuncs.length>0&&this.onchangeMulti(this.object[this.propName]),this.setListenerRef(this.propName),e=!0);else if(typeof this.object[this.propName]=="object"){let t=JSON.stringifyFast(this.object[this.propName]);this.propOld!==t&&(this.debug===!0&&console.log("onchange: ",this.onchange),this.onchange(this.object[this.propName]),this.onchangeFuncs.length>0&&this.onchangeMulti(this.object[this.propName]),this.setListenerRef(this.propName),e=!0)}else typeof this.object[this.propName]=="function"?this.propOld!==this.object[this.propName].toString()&&(this.debug===!0&&console.log("onchange: ",this.onchange),this.onchange(this.object[this.propName].toString()),this.onchangeFuncs.length>0&&this.onchangeMulti(this.object[this.propName].toString()),this.setListenerRef(this.propName),e=!0):this.object[this.propName]!==this.propOld&&(this.debug===!0&&console.log("onchange: ",this.onchange),this.onchange(this.object[this.propName]),this.onchangeFuncs.length>0&&this.onchangeMulti(this.object[this.propName]),this.setListenerRef(this.propName),e=!0);return this.running===!0&&(this.debug===!0&&console.log("checking",this.object,this.propName),this.interval==="FRAMERATE"?typeof window>"u"?setTimeout(()=>{this.check()},16):this.checker=requestAnimationFrame(this.check):setTimeout(()=>{this.check()},this.interval)),e};start(){this.running=!0,typeof window>"u"?setTimeout(()=>{this.check()},16):this.checker=requestAnimationFrame(this.check)}stop(){this.running=!1,cancelAnimationFrame(this.checker)}};JSON.stringifyFast===void 0&&(JSON.stringifyFast=function(){let l=new Map,e=[],t=["this"];function n(){l.clear(),e.length=0,t.length=1}function i(r,a){var f=e.length-1;if(e[f]){var d=e[f];if(typeof d=="object")if(d[r]===a||f===0)t.push(r),e.push(a.pushed);else for(;f-->=0;){if(d=e[f],typeof d=="object"&&d[r]===a){f+=2,e.length=f,t.length=f,--f,e[f]=a,t[f]=r;break}f--}}}function s(r,a){let f;if(a!=null)if(typeof a=="object"){let d=a.constructor.name;r&&d==="Object"&&i(r,a);let c=l.get(a);if(c)return"[Circular Reference]"+c;if(l.set(a,t.join(".")),d==="Array")a.length>20?f=a.slice(a.length-20):f=a;else if(d.includes("Set"))f=Array.from(a);else if(d!=="Object"&&d!=="Number"&&d!=="String"&&d!=="Boolean")f="instanceof_"+d;else if(d==="Object"){let h={};for(let o in a)if(a[o]==null)h[o]=a[o];else if(Array.isArray(a[o]))a[o].length>20?h[o]=a[o].slice(a[o].length-20):h[o]=a[o];else if(a[o].constructor.name==="Object"){h[o]={};for(let u in a[o])if(Array.isArray(a[o][u]))a[o][u].length>20?h[o][u]=a[o][u].slice(a[o][u].length-20):h[o][u]=a[o][u];else if(a[o][u]!=null){let m=a[o][u].constructor.name;m.includes("Set")?h[o][u]=Array.from(a[o][u]):m!=="Number"&&m!=="String"&&m!=="Boolean"?h[o][u]="instanceof_"+m:h[o][u]=a[o][u]}else h[o][u]=a[o][u]}else{let u=a[o].constructor.name;u.includes("Set")?h[o]=Array.from(a[o]):u!=="Number"&&u!=="String"&&u!=="Boolean"?h[o]="instanceof_"+u:h[o]=a[o]}f=h}else f=a}else f=a;return f}return function(a,f){e.push(a);let d=JSON.stringify(a,s,f);return n(),d}}());JSON.stringifyWithCircularRefs===void 0&&(JSON.stringifyWithCircularRefs=function(){let l=new Map,e=[],t=["this"];function n(){l.clear(),e.length=0,t.length=1}function i(r,a){var f=e.length-1,d=e[f];if(d[r]===a||f===0)t.push(r),e.push(a);else for(;f-->=0;)if(d=e[f],d[r]===a){f+=2,e.length=f,t.length=f,--f,e[f]=a,t[f]=r;break}}function s(r,a){if(a!=null&&typeof a=="object"){r&&i(r,a);let f=l.get(a);if(f)return"[Circular Reference]"+f;l.set(a,t.join("."))}return a}return function(a,f){try{return e.push(a),JSON.stringify(a,s,f)}finally{n()}}}());var pf=wu;var fo=class{constructor(e={},t="FRAMERATE",n=!0){this.data=e,this.interval=t,this.pushToState={},this.pushRecord={pushed:[]},this.pushCallbacks={},this.triggers={},this.prev={},this.listener=new pf,this.defaultStartListenerEventLoop=n}subscribe(e,t,n=this.defaultStartListenerEventLoop){if(e&&e!=="state")if(this.data[e]===void 0)this.addToState(e,null,t,n);else return this.addSecondaryKeyResponse(e,t,void 0,n);else return this.addSecondaryKeyResponse(e,t,void 0,n)}subscribeOnce(e=void 0,t=n=>{}){let n,i=s=>{t(s),this.unsubscribe(e,n)};n=this.subscribe(e,i)}unsubscribe(e,t=null){t!==null?this.removeSecondaryKeyResponse(e,t,!0):console.error("Specify a subcription function index")}unsubscribeAll(e){this.unsubscribeAllSequential(e),this.unsubscribeAllTriggers(e),this.clearAllKeyResponses(e),this.data[e]&&delete this.data[e],this.listener.hasKey("pushToState")&&this.setSequentialState({stateRemoved:e})}setInterval(e="FRAMERATE"){this.interval=e,this.listener.listeners.forEach((t,n)=>{t.interval=this.interval})}updateState(e,t){this.data[e]==null?this.addToState(e,t):this.data[e]=t}setupSynchronousUpdates=()=>{if(!this.listener.hasKey("pushToState")){let e=()=>{if(Object.keys(this.pushToState).length>0){Object.assign(this.data,this.pushToState);for(let t of Object.getOwnPropertyNames(this.pushToState))delete this.pushToState[t]}};this.listener.addListener("pushToState",this.pushToState,"__ANY__",e,this.interval),this.addToState("pushRecord",this.pushRecord,t=>{let n=t.pushed.length;for(let i=0;i<n;i++){let s=t.pushed[i];this.pushCallbacks.state&&this.pushCallbacks.state.forEach(r=>{r.onchange(s)});for(let r in s)this.pushCallbacks[r]&&this.pushCallbacks[r].forEach(a=>{typeof a=="object"&&a.onchange(s[r])})}this.pushRecord.pushed.splice(0,n)})}};addToState(e,t,n=null,i=this.defaultStartListenerEventLoop,s=!1){if(!this.listener.hasKey("pushToState")&&this.defaultStartListenerEventLoop&&this.setupSynchronousUpdates(),this.data[e]=t,this.setSequentialState({stateAdded:e}),n!==null)return this.addSecondaryKeyResponse(e,n,s,i)}get(e){return this.data[e]}getState(){return JSON.parse(JSON.stringifyFast(this.data))}setState(e={},t=!1){if(!this.listener.hasKey("pushToState")&&this.defaultStartListenerEventLoop&&(this.setupSynchronousUpdates(),this.pushRecord.pushed.push(JSON.parse(JSON.stringifyWithCircularRefs(e)))),e.stateUpdateTimeStamp=Date.now(),t){for(let n in e)if(n in this.pushToState){if(Array.isArray(this.pushToState[n])&&Array.isArray(e[n]))e[n]=this.pushToState[n].push(...e[n]);else if(typeof this.pushToState[n]=="object"&&typeof e[n]=="object"){for(let i in e[n])if(this.pushToState[n][i]){if(Array.isArray(this.pushToState[n][i])&&Array.isArray(e[n][i]))e[n][i]=this.pushToState[n][i].push(...e[n][i]);else if(typeof this.pushToState[n][i]=="object"&&typeof e[n][i]=="object"){for(let s in e[n][i])if(this.pushToState[n][i][s])Array.isArray(this.pushToState[n][i][s])&&Array.isArray(e[n][i][s])&&(e[n][i][s]=this.pushToState[n][i][s].push(...e[n][i][s]));else if(typeof this.pushToState[n][i][s]=="object"&&typeof e[n][i][s]=="object")for(let r in e[n][i][s])this.pushToState[n][i][s][r]&&Array.isArray(this.pushToState[n][i][s][r])&&Array.isArray(e[n][i][s][r])&&(e[n][i][s][r]=this.pushToState[n][i][s][r].push(...e[n][i][s][r]))}}}}}if(Object.assign(this.pushToState,e),Object.keys(this.triggers).length>0){this.triggers.state&&this.triggers.state.forEach(n=>{n.onchange(this.data)});for(let n of Object.getOwnPropertyNames(this.triggers))n in this.pushToState&&(this.data[n]=this.pushToState[n],delete this.pushToState[n],this.triggers[n].forEach(i=>{i.onchange(this.data[n])}))}return this.pushToState}subscribeTrigger(e=void 0,t=n=>{}){if(e){this.triggers[e]||(this.triggers[e]=[]);let n=this.triggers[e].length;return this.triggers[e].push({idx:n,onchange:t}),this.triggers[e].length-1}else return}subscribeTriggerOnce(e=void 0,t=n=>{}){let n,i=s=>{t(s),this.unsubscribeTrigger(e,n)};n=this.subscribeTrigger(e,i)}unsubscribeTrigger(e=void 0,t=0){let n,i=this.triggers[e];i&&i.find(r=>{if(r.idx===t)return!0})&&i.splice(n,1)}unsubscribeAllTriggers(e){e&&this.triggers[e]&&delete this.triggers[e]}setSequentialState(e={}){this.listener.hasKey("pushToState")||this.setupSynchronousUpdates(),e.stateUpdateTimeStamp=Date.now(),this.pushRecord.pushed.push(JSON.parse(JSON.stringify(e)))}subscribeSequential(e=void 0,t=void 0){if(e)if(this.data[e]===void 0&&e!=="state"&&this.addToState(e,null,void 0),this.pushCallbacks[e]||(this.pushCallbacks[e]=[]),t){let n=this.pushCallbacks[e].length;return this.pushCallbacks[e].push({idx:n,onchange:t}),this.pushCallbacks[e].length-1}else return;else return}subscribeSequentialOnce(e=void 0,t=n=>{}){let n,i=s=>{t(s),this.unsubscribeSequential(e,n)};n=this.subscribeSequential(e,i)}unsubscribeSequential(e=void 0,t=0){e&&this.pushCallbacks[e]&&this.pushCallbacks[e].find((n,i)=>{if(n.idx===t)return this.pushCallbacks[e].splice(i,1),!0})}unsubscribeAllSequential(e){e&&this.pushCallbacks[e]&&this.pushCallbacks[e]&&delete this.pushCallbacks[e]}setPrimaryKeyResponse(e=null,t=null,n=!1,i=this.defaultStartListenerEventLoop){if(t!==null)if(this.listener.hasKey(e))this.listener.onchange(e,t);else if(e!=null&&e!=="state")this.listener.addListener(e,this.data,e,t,this.data.stateUpdateInterval,n,i);else{if(!this.listener.hasKey("state")){let s=()=>{this.prev=Object.assign({},this.data)};this.listener.addListener("state",this.data,"__ANY__",s,this.interval)}return this.listener.addFunc("state",t)}}addSecondaryKeyResponse=(e=null,t=null,n=!1,i=this.defaultStartListenerEventLoop)=>{if(t!=null){if(this.listener.hasKey(e))return this.listener.addFunc(e,t);if(e!=null&&e!=="state")return this.listener.addListener(e,this.data,e,()=>{},this.data.stateUpdateInterval,n,i),this.listener.addFunc(e,t);if(!this.listener.hasKey("state")){let s=()=>{this.prev=Object.assign({},this.data)};this.listener.addListener("state",this.data,"__ANY__",s,this.interval)}return this.listener.addFunc("state",t)}};removeSecondaryKeyResponse(e=null,t=null,n=!0){e!==null?this.listener.hasKey(e)?this.listener.removeFuncs(e,t,n):console.error("key does not exist"):console.error("provide key")}clearAllKeyResponses(e=null){e===null?this.listener.remove(null):this.listener.hasKey(e)&&this.listener.remove(e)}getKeySubCallbacks(e){return this.listener.getFuncs(e)}removeState=this.unsubscribeAll;runSynchronousListeners(){this.defaultStartListenerEventLoop=!1,this.listener.startSync()}stop(e=null){this.listener.stop(e)}};JSON.stringifyFast===void 0&&(JSON.stringifyFast=function(){let l=new Map,e=[],t=["this"];function n(){l.clear(),e.length=0,t.length=1}function i(r,a){var f=e.length-1;if(e[f]){var d=e[f];if(typeof d=="object")if(d[r]===a||f===0)t.push(r),e.push(a.pushed);else for(;f-->=0;){if(d=e[f],typeof d=="object"&&d[r]===a){f+=2,e.length=f,t.length=f,--f,e[f]=a,t[f]=r;break}f++}}}function s(r,a){let f;if(a!=null)if(typeof a=="object"){let d=a.constructor.name;r&&d==="Object"&&i(r,a);let c=l.get(a);if(c)return"[Circular Reference]"+c;if(l.set(a,t.join(".")),d==="Array")a.length>20?f=a.slice(a.length-20):f=a;else if(d.includes("Set"))f=Array.from(a);else if(d!=="Object"&&d!=="Number"&&d!=="String"&&d!=="Boolean")f="instanceof_"+d;else if(d==="Object"){let h={};for(let o in a)if(a[o]==null)h[o]=a[o];else if(Array.isArray(a[o]))a[o].length>20?h[o]=a[o].slice(a[o].length-20):h[o]=a[o];else if(a[o].constructor.name==="Object"){h[o]={};for(let u in a[o])if(Array.isArray(a[o][u]))a[o][u].length>20?h[o][u]=a[o][u].slice(a[o][u].length-20):h[o][u]=a[o][u];else if(a[o][u]!=null){let m=a[o][u].constructor.name;m.includes("Set")?h[o][u]=Array.from(a[o][u]):m!=="Number"&&m!=="String"&&m!=="Boolean"?h[o][u]="instanceof_"+m:h[o][u]=a[o][u]}else h[o][u]=a[o][u]}else{let u=a[o].constructor.name;u.includes("Set")?h[o]=Array.from(a[o]):u!=="Number"&&u!=="String"&&u!=="Boolean"?h[o]="instanceof_"+u:h[o]=a[o]}f=h}else f=a}else f=a;return f}return function(a,f){e.push(a);let d=JSON.stringify(a,s,f);return n(),d}}());JSON.stringifyWithCircularRefs===void 0&&(JSON.stringifyWithCircularRefs=function(){let l=new Map,e=[],t=["this"];function n(){l.clear(),e.length=0,t.length=1}function i(r,a){var f=e.length-1,d=e[f];if(typeof d=="object")if(d[r]===a||f===0)t.push(r),e.push(a.pushed);else for(;f-->=0;){if(d=e[f],typeof d=="object"&&d[r]===a){f+=2,e.length=f,t.length=f,--f,e[f]=a,t[f]=r;break}f--}}function s(r,a){if(a!=null&&typeof a=="object"){r&&i(r,a);let f=l.get(a);if(f)return"[Circular Reference]"+f;l.set(a,t.join("."))}return a}return function(a,f){try{return e.push(a),JSON.stringify(a,s,f)}finally{n()}}}());var Bs=class{constructor(e=void 0){this.state=new fo({},void 0,!1),this.manager=e,e!==void 0&&(e.responses.find(n=>{if(n.name==="eventmanager")return!0})||e.addCallback("eventmanager",this.callback))}subEvent(e,t=n=>{console.log(e,n)}){return this.state.subscribeTrigger(e,t)}unsubEvent(e,t){return this.state.unsubscribeTrigger(e,t)}async addEvent(e,t=void 0,n=void 0,i=void 0){if(this.state.setState({[e]:void 0}),this.manager!==void 0&&(i!==void 0||n!==void 0))return t!==void 0?await this.manager.post({origin:i,foo:"addevent",input:[e,n]},t):(this.manager.workers.forEach(s=>{this.manager.post({origin:i,foo:"addevent",input:[e,n]},s.id)}),!0)}removeEmitter(e){this.state.unsubscribeAllTriggers(e)}emit=(e,t,n=void 0,i=void 0,s=void 0)=>{let r={eventName:e,output:t};!t||!e||(this.manager!==void 0?n!==void 0?this.manager.post(r,n,i):this.manager.workers.forEach(a=>{this.manager.post(r,a.id,i)}):typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&(s?s.postMessage(r,void 0,i):globalThis.postMessage(r,void 0,i)),this.state.setState({[e]:t}))};callback=e=>{typeof e=="object"&&e.eventName!==void 0&&e.output!==void 0&&this.state.setState({[e.eventName]:e.output})};export=()=>this};var Am=async l=>await import(l);function tw(l){return l.toString().replace(/^\W*(function[^{]+\{([\s\S]*)\}|[^=]+=>[^{]*\{([\s\S]*)\}|[^=]+=>(.+))/i,"$2$3$4")}function nw(l){let e=l.toString();return e.slice(0,e.indexOf("{")+1)}function iw(head,body){let newFunc=eval(head+body+"}");return newFunc}function sw(l){let e=new RegExp("(|[a-zA-Z]w*|([a-zA-Z]w*(,s*[a-zA-Z]w*)*))s*=>"),t=typeof l=="string"?l.substring(0,10).includes("function"):!1,n=typeof l=="string"?e.test(l):!1;return!!(t||n)}function _n(method){let getFunctionBody=l=>l.replace(/^\W*(function[^{]+\{([\s\S]*)\}|[^=]+=>[^{]*\{([\s\S]*)\}|[^=]+=>(.+))/i,"$2$3$4"),getFunctionHead=l=>{let e=l.indexOf(")");return l.slice(0,l.indexOf("{",e)+1)},newFuncHead=getFunctionHead(method),newFuncBody=getFunctionBody(method),newFunc;if(newFuncHead.includes("function ")){let l=newFuncHead.split("(")[1].split(")")[0];newFunc=new Function(l,newFuncBody)}else if(newFuncHead.substring(0,6)===newFuncBody.substring(0,6)){let l=newFuncHead.split("(")[1].split(")")[0];newFunc=new Function(l,newFuncBody.substring(newFuncBody.indexOf("{")+1,newFuncBody.length-1))}else newFunc=eval(newFuncHead+newFuncBody+"}");return newFunc}var wn=class{constructor(){}static genSineWave(e=20,t=1,n=1,i=512,s=0,r=1){for(var a=[],f=[],d=1/i,c=0;c<n;c+=d){var h=Math.sin(2*Math.PI*e*c)*t;h+=Math.sin(2*Math.PI*s*c)*r,a.push(h),f.push(c)}return[f,a]}static getSineAmplitude(e=20,t=1,n=0,i=0){return Math.sin(this.TWO_PI*e*n+i)*t}static mean(e){var t=e.reduce((n,i)=>i+=n);return t/e.length}static mode(e){return e.sort((t,n)=>e.filter(i=>i===t).length-e.filter(i=>i===n).length).pop()}static std(e,t=void 0){let n=t;t||(n=this.mean(e));let i=0;for(let s=0;s<e.length;s++){let r=e[s]-n;i+=r*r}return Math.sqrt(i/e.length)}static relError(e=[],t=[],n=!0){if(e.length!==t.length)throw new Error("Input arrays of same length!");let i=e.length,s=new Array(e.length);for(let r=0;r<i;r++){let a=(e[r]-t[r])/e[r];n&&(a=Math.abs(a)),s[r]=a}return s}static informationEntropy(e=[]){let t=e.length,n=new Array(t);for(let i=0;i<t;i++){let s=e[i]*Math.log(e[i]);isNaN(s)&&(s=0),n[i]=s}return n}static zscore(e){let t=this.mean(e),n=this.std(e,t),i=new Array().length(e.length);for(let s=0;s<e.length;s++)i[s]=(e[s]-t)/n;return i}static variance(e){var t=this.mean(e);return e.reduce((n,i)=>n+(i-t)**2,0)/e.length}static dot(e,t){for(var n=0,i=0;i<e.length;i++)n+=e[i]*t[i];return n}static cross3D(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}static magnitude(e){var t=0;return e.forEach(n=>{t+=n*n}),Math.sqrt(t)}static distance(e,t){var n=0;return e.forEach((i,s)=>{n+=(t[s]-i)*(t[s]-i)}),Math.sqrt(n)}static midpoint(e=[1,2,3],t=[3,4,5]){return e.map((n,i)=>(n+t[i])*.5)}static normalize(e){var t=0;t=this.magnitude(e);var n=new Array(e.length);return e.forEach((i,s)=>{n[s]=i*t}),n}static normalizeSeries(e=[],t=!0){let n=Math.max(...e),i=Math.min(...e);return t==!1&&(n=Math.max(n,Math.abs(i)),i=0),n-i===0&&(i=0,n===0&&(n=1e-13)),e.map(s=>(s-i)/(n-i))}static quadraticFormula(e,t,n){let i=Math.sqrt(t*t-4*e*n);if(!isNaN(i))return["complex","complex"];let s=1/(2*e);if(i===0)return[t*s];let r=-t;return[(r+i)*s,(r-i)*s]}static newtonsMethod(e=r=>Math.pow(r,5)+r*r-r-.2,t=0,n=1,i=.01,s=10){let r=[];for(let a=0;a<s;a++){let f=Math.random()*(n-t),d=e(f),c=e(f+i),h=(c-d)/i,o=f+i;for(;Math.abs(h)>i;){let g=-d/v,y=o+g;d=c,c=e(y);let v=(c-d)/(y-o)}let u,m=r.find((g,y)=>{if(Math.abs(xn1-g)<i)return u=y,!0});m?r[u]=(xn1+m)*.5:r.push(xn1)}return r}static makeVec(e,t){var n=[];return e.forEach((i,s)=>{n.push(t[s]-i)}),n}static combinations(e=["a","b","c"],t=3){var n=[];return t<=0?n.push([]):wn.combinations(e,t-1).forEach(function(i){e.forEach(function(s){n.push([s].concat(i))})}),n}static generateCoordinateSpace(e=[10,10,10],t=[-10,-10,-10],n=[1,1,1],i=void 0){for(let f=0;f<e.length;f++)if(t[f]>e[f]){let d=e[f];e[f]=t[f],t[f]=d}let s=[],r=[...e],a=r.length-1;for(s.push([...r]);r[0]>=t[0];){let f=c=>{if(r[c]<=t[c]){if(c===0||(r[c]=e[c],c--,c<0))return;typeof n[c]=="function"?r[c]-=n[c](r[c]):r[c]-=n[c],f(c)}},d=a;typeof n[d]=="function"?r[d]-=n[d](r[d]):r[d]-=n[d],s.push([...r]),f(d),i&&(s[s.length-1]=i(s[s.length-1]))}return s}static calcVectorField(e=[[0,0],[0,1],[1,0],[1,1]],t=(n,i)=>[n*10,i*10]){return e.map(n=>t(...n))}static transpose(e){return e[0].map((t,n)=>e.map(i=>i[n]))}static matmul(e,t){for(var n=e.length,i=e[0].length,s=t.length,r=t[0].length,a=new Array(n),f=0;f<n;++f){a[f]=new Array(r);for(var d=0;d<r;++d){a[f][d]=0;for(var c=0;c<i;++c)a[f][d]+=e[f][c]*t[c][d]}}return a}static matscale(e,t){let n=[];for(var i=0;i<e.length;i++){n[i]=[];for(let s=0;s<e[0].length;s++)n[i][s]=e[i][s]*t}return n}static matadd(e,t){let n=[];for(let s=0;s<e.length;s++){n[s]=[];for(var i=0;i<e[0].length;i++)n[s][i]=e[s][i]+t[s][i]}return n}static matsub(e,t){let n=[];for(let s=0;s<e.length;s++){n[s]=[];for(var i=0;i<e[0].length;i++)n[s][i]=e[s][i]-t[s][i]}return n}static histogram(e=[],t=1,n=void 0){let i=[...e];i.sort(function(d,c){return d-c});let s=Math.min(...i);if(typeof n=="number"){let d=Math.max(...i);t=Math.abs((d-s)/(n-1))}let r=s,a=[],f=[];for(let d=0;d<i.length;d++){let c=t*r;if(i[d]>s+c){r++,c+=t;let o=s+c+c*.5;a.push(o),f.push(0)}f[f.length-1]++}return[a,f]}static normalDistribution(e=[],t=!0,n=1e-4){let i=this.mean(e),s=this.variance(e),r=e.length,a=[],f=1/(this.TWO_PI*s),d=1/s,c=0;for(let h=0;h<r;h++){let o=Math.exp(-.5*Math.pow((e[h]-i)*d,2))*f;o<n&&(o=0),a.push(o),c+=o}if(t){let h=1/c;a=a.map(o=>o*h)}return a}static expectedValue(e=[],t=this.normalDistribution(e)){return e.reduce((n,i,s)=>n+i*t[s])}static originMoment(e=[],t=this.normalDistribution(e),n=1){return e.reduce((i,s,r)=>i+Math.pow(s,n)*t[r])}static centralMoment(e=[],t=this.normalDistribution(e),n=1){let i=this.mean(e);return e.reduce((s,r,a)=>s+Math.pow(r-i,n)*t[a]/e.length)}static linearDiscriminantAnalysis(e=[],t=[]){let n=this.mean(e),i=this.mean(t),s=this.cov1d(e,t),r=this.normalDistribution(e),a=[];for(let f=0;f<e.length;f++)a.push(x[f]*s*i-.5*n*s*i+Math.log10(r[f]));return a}static conv1D(e=[],t=[1/3,1/3,1/3],n=Math.floor(t.length*.5)){let i=[],s=1/t.length;if(n>0){let f=new Array(n).fill(0);e=[...f,...e,...f]}let r=Math.floor(t.length*.5),a=e.length-t.length+r;for(let f=r;f<a;f++){let d=0;for(let c=0;c<t.length;c++)d+=e[f-r]*t[c];i.push(d*s)}return i}static conv2D(e=[[],[],[]],t=[[],[],[]],n=0){let i=new Array(e.length-Math.ceil(t.length*.5)).fill([]),s,r=wn.transpose(r);if(n>0){let y=new Array(n).fill(0);s=wn.transpose(e);for(let v=0;v<s.length;v++)s[v]=[...y,...s[v],...y];e=wn.transpose(s);for(let v=0;v<e.length;v++)e[v]=[...y,...e[v],...y]}let a=Math.floor(t[0].length*.5),f=Math.floor(r[0].length*.5),d=e[0].length-t[0].length+a,c=s[0].length-r[0].length+f,h=1/(t[0].length*r[0].length),o=d*c,u=a,m,g=f;for(;u<o;){let y=0;m=u%e[0].length,m===0&&g++;for(let v=0;v<t[0].length;v++){for(let w=0;w<r[0].length;v++)y+=e[g-f+w][m-a+v]*t[w][v];i[g].push(y*h)}u++}return i}static cov2d(e){var t=this.transpose(e),n=[],i=[],s=[];e.forEach((g,y)=>{i.push(this.mean(g))}),t.forEach((g,y)=>{s.push(this.mean(g))}),e.forEach((g,y)=>{n.push([]);for(var v=0;v<g.length;v++)n[y].push((e[y][v]-i[y])*(e[y][v]-s[v])/(g.length-1))});for(var r=this.transpose(n),a=n.length,f=n[0].length,d=r.length,c=r[0].length,h=new Array(a),o=0;o<a;++o){h[o]=new Array(c);for(var u=0;u<c;++u){h[o][u]=0;for(var m=0;m<f;++m)h[o][u]+=n[o][m]*r[m][u]/(e[0].length-1)}}return h}static cov1d(e=[],t=[]){return this.cov2d([e,t])}static cov3d(e=[],t=[],n=[]){return[[this.cov1d(e,e),this.cov1d(e,t),this.cov1d(e,n)],[this.cov1d(t,e),this.cov1d(t,t),this.cov1d(t,n)],[this.cov1d(n,e),this.cov1d(n,t),this.cov1d(n,n)]]}static covNd(e=[]){let t=[];e.forEach((n,i)=>{t.push([]),e.forEach((s,r)=>{t[i].push(this.cov1d(n,s))})})}static eigens2x2(e=[[1,2],[3,4]]){let t=e[0][0]*e[1][1]-e[0][1]*e[1][0],n=(e[0][0]+e[1][1])*.5,i=Math.sqrt(n*n-t),s=n+i,r=n-i;return[s,r]}static eigenvectors2x2(e=[[1,2],[3,4]],t=[1,2]){let n=[-e[0][1],e[0][0]-t[0]];n[0]===0&&n[1]===0&&(n[0]=e[1][1]-t[0],n[1]=-e[1][0]);let i=[-e[0][1],e[0][0]-t[1]];return i[0]===0&&i[1]===0&&(i[0]=e[1][1]-t[1],i[1]=-e[1][0]),[n,i]}static fastpca2d(e,t){let n=this.cov1d(e,t),i=this.eigens2x2(n);i[1]>i[0]&&i.reverse();let s=this.eigenvectors2x2(n,i);return console.log(i,s),[i,s]}static crosscorrelation(e,t){var n=[...t,...Array(t.length).fill(0)],i=this.mean(e),s=this.mean(t),r=e.reduce((o,u)=>o+=Math.pow(u-i,2));r=Math.sqrt(r);var a=t.reduce((o,u)=>o+=Math.pow(u-i,2));a=Math.sqrt(a);for(var f=1/(r*a),d=new Array(e.length).fill(0),c=0;c<e.length;c++){var h=e.reduce((o,u,m)=>o+=(u-i)*(n[c+m]-s));d[c]=h*f}return d}static autocorrelation(e){var t=[...e,...Array(e.length).fill(0)],n=this.mean(e),i=e.reduce((d,c)=>d+=Math.pow(c-n,2));i=Math.sqrt(i);for(var s=1/(i*i),r=new Array(e.length).fill(0),a=0;a<e.length;a++){var f=e.reduce((d,c,h)=>d+=(c-n)*(t[a+h]-n));r[a]=f*s}return r}static autocorrelation2d(e){let t=[];for(let n=0;n<e.length;n++){t.push([]);for(let i=0;i<e[n].length;i++){let s=0;for(let r=0;r<e.length;r++)for(let a=0;a<e[r].length;a++)s+=e[r][a]*e[r-n][a-i];t[n][i]=s}}return t}static autocorrelation2dNormalized(e){let t=[];for(let n=0;n<e.length;n++){t.push([]);for(let i=0;i<e[n].length;i++){let s=0,r=0;for(let a=0;a<e.length;a++)for(let f=0;f<e[a].length;f++)s+=e[a][f]*e[a-n][f-i],r+=e[a][f]*e[a][f];t[n][i]=s/r-1}}return t}static correlograms(e=[[],[]]){var t=[];return e.forEach((n,i)=>{e.forEach((s,r)=>{r>=i&&t.push(wn.crosscorrelation(n,s))})}),t}static dft(e=[]){for(var t=6.283185307179586,n=[],i=[],s=[],r=0;r<e.length;r++){n.push(0),i.push(0);for(var a=0;a<e.length;a++){var f=t*r*a/e.length;n[r]=n[r]+e[a]*Math.cos(f),i[r]=i[r]-e[a]*Math.sin(f)}s.push(Math.sqrt(n[r]*n[r]+i[r]*i[r]))}function d(o){return[...o.slice(Math.ceil(o.length*.5),o.length),...o.slice(0,Math.ceil(o.length*.5))]}s=d(s);let c=s.length*.5,h=s.map((o,u)=>u-c);return{real:n,imag:i,freqs:h,mags:s}}static sma(e=[],t){for(var n=[],i=0;i<e.length;i++)if(i==0)n.push(e[0]);else if(i<t){var s=e.slice(0,i+1);n.push(s.reduce((r,a)=>a+=r)/(i+1))}else{var s=e.slice(i-t,i);n.push(s.reduce((a,f)=>f+=a)/t)}return n}static sum(e=[]){if(e.length>0){var t=e.reduce((n,i)=>i+=n);return t}else return 0}static reduceArrByFactor(e,t=2){return e.filter((i,s)=>s%t===0)}static makeArr(e,t,n){for(var i=[],s=(t-e)/(n-1),r=0;r<n;r++)i.push(e+s*r);return i}static autoscale(e,t=1,n=0,i=!1){if(e?.length===0)return e;let s=Math.max(...e),r=Math.min(...e),a=1/t,f;if(i){let d=Math.max(Math.abs(r),Math.abs(s));return f=a/d,e.map(c=>c*f+(a*(n+1)*2-1-a))}else return f=a/(s-r),e.map(d=>2*((d-r)*f-1/(2*t))+(a*(n+1)*2-1-a))}static absmax(e){return Math.max(Math.abs(Math.min(...e)),Math.max(...e))}static downsample(e,t,n=1){if(e.length>t){let i=new Array(t),s=e.length/t,r=e.length-1,a=0,f=0;for(let d=s;d<e.length;d+=s){let c=Math.round(d);c>r&&(c=r);for(let h=a;h<c;h++)i[f]+=e[h];i[f]/=(c-a)*n,f++,a=c}return i}else return e}static interpolateArray(e,t,n=1){var i=function(o,u,m){return(o+(u-o)*m)*n},s=new Array,r=new Number((e.length-1)/(t-1));s[0]=e[0];for(var a=1;a<t-1;a++){var f=a*r,d=new Number(Math.floor(f)).toFixed(),c=new Number(Math.ceil(f)).toFixed(),h=f-d;s[a]=i(e[d],e[c],h)}return s[t-1]=e[e.length-1],s}static isExtrema(e,t="peak"){let n=[...e];if(n.length%2===0&&n.pop(),e.length>1){let i=!0;for(let s=0;s<n.length;s++){let r=n[s];if(t==="peak"){if(s<Math.floor(n.length*.5)&&r>=n[Math.floor(n.length*.5)]){i=!1;break}else if(s>Math.floor(n.length*.5)&&r>=n[Math.floor(n.length*.5)]){i=!1;break}}else if(t==="valley"){if(s<Math.floor(n.length*.5)&&r<=n[Math.floor(n.length*.5)]){i=!1;break}else if(s>Math.floor(n.length*.5)&&r<=n[Math.floor(n.length*.5)]){i=!1;break}}else if(s<Math.floor(n.length*.5)&&r<=n[Math.floor(n.length*.5)]){i=!1;break}else if(s>Math.floor(n.length*.5)&&r<=n[Math.floor(n.length*.5)]){i=!1;break}}if(t!=="peak"&&t!=="valley"&&i===!1){i=!0;for(let s=0;s<n.length;s++){let r=n[s];if(s<Math.floor(n.length*.5)&&r>=n[Math.floor(n.length*.5)]){i=!1;break}else if(s>Math.floor(n.length*.5)&&r>=n[Math.floor(n.length*.5)]){i=!1;break}}}return i}else return}static isCriticalPoint(e,t="peak"){let n=[...e];if(n.length%2===0&&n.pop(),e.length>1){let i=!0;for(let s=0;s<n.length;s++){let r=n[s];if(t==="peak"){if(s<n.length*.5&&r<=0){i=!1;break}else if(s>n.length*.5&&r>0){i=!1;break}}else if(t==="valley"){if(s<n.length*.5&&r>=0){i=!1;break}else if(s>n.length*.5&&r<0){i=!1;break}}else if(s<n.length*.5&&r>=0){i=!1;break}else if(s>n.length*.5&&r<0){i=!1;break}}if(t!=="peak"&&t!=="valley"&&i===!1){i=!0;for(let s=0;s<n.length;s++){let r=n[s];if(s<n.length*.5&&r<=0){i=!1;break}else if(s>n.length*.5&&r>0){i=!1;break}}}return i}else return}static getPeakThreshold(e,t,n){let i,s=e.filter((r,a)=>{if(t.indexOf(a)>-1)return!0});return n===0?i=this.mean(s):i=(n+this.mean(s))*.5,i}static column(e,t){let n=new Array(e.length).fill(0).map(()=>new Array(1).fill(0));for(let i=0;i<e.length;i++)n[i][0]=e[i][t];return n}static flatten_vector(e){let t=[];for(let n=0;n<e.length;n++)t[n]=e[n][0];return t}static squared_difference(e,t){let n=0;for(let i=0;i<e.length;i++)n=n+Math.pow(e[i]-t[i],2);return n}static shift_deflate(e,t,n){let i=Math.sqrt(this.matmul(this.transpose(n),n)),s=this.matscale(n,1/i),r=this.matscale(this.matmul(s,this.transpose(s)),t);return this.matsub(e,r)}static eigenvalue_of_vector(e,t){return ev=this.matmul(this.matmul(this.transpose(t),e),t),ev}static power_iteration(e,t=1e-5,n=1e3){let i=e.length,s=new Array(i).fill(0).map(()=>new Array(1).fill(Math.sqrt(i))),r=this.eigenvalue_of_vector(e,s),a=1,f=0;for(;a>t&&f<n;){let d=JSON.parse(JSON.stringify(r)),c=this.matmul(e,s);s=this.normalize(c),r=this.eigenvalue_of_vector(e,s),a=Math.abs(r-d),f++}return[r,s]}static eigens(e,t=1e-4,n=1e3){let i=[],s=[];for(let r=0;r<e.length;r++){let a=this.power_iteration(e,t,n),f=a[0],d=a[1];i[r]=f,s[r]=this.flatten_vector(d),e=this.shift_deflate(e,f,d)}return[i,s]}static pca(e,t=1e-5){let n=e.length,i=new Array(n),s=new Array(n),r=this.transpose(e);i[0]=this.column(e,0);let a=1,f=0;for(;espilon>t;){f++,s[0]=this.matmul(r,i[0]);let c=this.matmul(this.transpose(i[0]),i[0]);s[0]=this.matscale(s[0],1/c);let h=Math.sqrt(this.matmul(this.transpose(s[0]),s[0]));s[0]=this.matscale(s[0],1/h);let o=this.matmul(e,s[0]),u=this.matmul(this.transpose(s[0]),s[0]);o=this.matscale(o,1/u),a=this.squared_difference(i[0],o),i[0]=JSON.parse(JSON.stringify(o))}return this.matmul(this.transpose(i[0]),i[0])}static p300(e=[],t=[],n=[],i=256){let s=Math.floor(i/10),r=this.sma(t,s),a=this.peakDetect(r,"peak",s),f=this.mean(r),d=this.std(r,f),c=0,h=[];return a.length>0&&e.forEach((o,u)=>{for(;n[a[c]]<o+200&&(c++,!!a[c]););let m=0,g=[];for(;n[a[c+m]]<o+600&&(g.push(c+m),m++,!!a[c+m]););if(g.length>1){let y=[];g.forEach(E=>{y.push(r[a[E]])});let v=Math.max(...y),w=g[y.indexOf(v)];h.push({event_timestamp:o,event_index:u,peak_timestamp:n[[a[w]]],signal_index:[a[w]],signal_amplitude:t[[a[w]]],zscore:(r[a[w]]-f)/d})}else g.length===1&&h.push({event_timestamp:o,event_index:u,peak_timestamp:n[a[g[0]]],signal_index:a[g[0]],signal_amplitude:t[[a[g[0]]]],zscore:(r[a[g[0]]]-f)/d})}),h}},je=wn;rt(je,"TWO_PI",Math.PI*2),rt(je,"C",299792458),rt(je,"G",66743e-15),rt(je,"h",662607015e-42),rt(je,"R",8314.32),rt(je,"Ra",287),rt(je,"H",69.3),rt(je,"kbar",1054571817e-43),rt(je,"kB",1380649e-29),rt(je,"ke",89875517923e-1),rt(je,"me",91093837015e-41),rt(je,"mp",167262192369e-38),rt(je,"mn",167492749804e-38),rt(je,"P0",101325),rt(je,"T0",288.15),rt(je,"p0",1.225),rt(je,"Na",60220978e16),rt(je,"y",1.405),rt(je,"M0",28.96643),rt(je,"g0",9.80665),rt(je,"Re",6378100),rt(je,"B",1458e-9),rt(je,"S",110.4),rt(je,"Sigma",365e-12),rt(je,"imgkernels",{edgeDetection:[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]],boxBlur:[[1/9,1/9,1/9],[1/9,1/9,1/9],[1/9,1/9,1/9]],sobelLeft:[[1,0,-1],[2,0,-2],[1,0,-1]],sobelRight:[[-1,0,1],[-2,0,2],[-1,0,1]],sobelTop:[[1,2,1],[0,0,0],[-1,-2,-1]],sobelBottom:[[-1,2,1],[0,0,0],[1,2,1]],identity:[[0,0,0],[0,1,0],[0,0,0]],gaussian3x3:[[1,2,1],[2,4,2],[1,2,1]],guassian7x7:[[0,0,0,5,0,0,0],[0,5,18,32,18,5,0],[0,18,64,100,64,18,0],[5,32,100,100,100,32,5],[0,18,64,100,64,18,0],[0,5,18,32,18,5,0],[0,0,0,5,0,0,0]],emboss:[[-2,-1,0],[-1,1,1],[0,1,2]],sharpen:[[0,-1,0],[-1,5,-1],[0,-1,0]]}),rt(je,"integral",(e=i=>i,t=[],n=.01)=>{let i=0;for(let s=t[0];s<t[1];s+=n)i+=e(s)*n;return i}),rt(je,"dintegral",(e=(s,r)=>s+r,t=[[],[]],n=.01,i=n)=>{let s=0;for(let r=t[0][0]+n;r<t[0][1];r+=n)for(let a=t[1][0]+i;a<t[1][1];a+=i)s+=e(r,a)*n*i;return s}),rt(je,"tintegral",(e=(r,a,f)=>r+a+f,t=[[],[],[]],n=.01,i=n,s=n)=>{let r=0;for(let a=t[0][0]+n;a<t[0][1];a+=n)for(let f=t[1][0]+i;f<t[1][1];f+=i)for(let d=t[2][0]+s;d<t[2][1];d+=s)r+=e(a,f,d)*n*i*s;return r}),rt(je,"pintegral",(e=i=>i,t=[],n=.01)=>{let i=0,s,r;for(let a=t[0];a<t[1];a+=n)s=r,r=e(a),s&&(i+=wn.distance([0,s],[n,r]));return i}),rt(je,"meshgrid",wn.generateCoordinateSpace),rt(je,"upsample",wn.interpolateArray),rt(je,"peakDetect",(e,t="peak",n=49)=>{let i=Math.floor(n*.5),s=[];for(let r=0;r<e.length-n;r++)wn.isExtrema(e.slice(r,r+n),t)&&s.push(r+i-1);return s});var $r=class{constructor(e){this.callbackManager=e,e.Math2=je,this.callbacks=[{case:"xcor",callback:(t,n,i)=>je.crosscorrelation(...n)},{case:"autocor",callback:(t,n,i)=>je.autocorrelation(n)},{case:"cov1d",callback:(t,n,i)=>je.cov1d(...n)},{case:"cov2d",callback:(t,n,i)=>je.cov2d(n)},{case:"sma",callback:(t,n,i)=>je.sma(...n)}],this.addCallbacks()}addCallbacks(e=this.callbacks){e.forEach(t=>{this.callbackManager.addCallback(t.case,t.callback),t.aliases&&t.aliases.forEach(n=>{this.callbackManager.addCallback(n,t.callback)})})}};var fw=Em(gf());function Cm(l,e){return l+e}function Rm(l,e){return l-e}function Lm(l,e){return l*e}function Im(l,e){return l/e}function Dm(l,e,t,n){return[l+t,e+n]}function Pm(l,e,t,n){return[l-t,e-n]}function Fm(l,e,t,n){return[l*t-e*n,l*n+e*t]}function km(l,e){let t=Math.exp(l);return[t*Math.cos(e),t*Math.sin(e)]}function Vt(l,e){return Math.sqrt(l*l+e*e)}function Nm(l){return 0-l}function Om(l){let e=Math.sqrt(l);for(var t=3;t<=e;){if(l%t===0)return t;t+=2}}function Mu(l,e){for(var t=0,n=0;n<e;n++)t+=l[n];return t/e}function Eu(l,e,t){for(var n=0,i=0;i<t;i++)n+=(l[i]-e)*(l[i]-e);return Math.sqrt(n)}function zm(l,e,t){for(var n=0,i=0,s=0;s<t;s++)i=l[s]-e,n+=i*i;return n/t}function Um(l,e,t){for(var n=0,i=0,s=0;s<t;s++)i=l[s]-e,n+=i*i;return Math.sqrt(n/t)}function Au(l,e,t,n,i,s,r,a){for(var f=0,d=0;d<r;d++){var c=d+a,h=0;c<r&&(h=n[c]),f+=(l[d]-e)*(h-i)}return f/(t*s)}function Vm(l,e,t){for(var n=0,i=0;i<e;i++)n+=Math.exp(l[i]);return Math.exp(l[t])/n}function Gs(l,e,t){for(var n=0,i=0,s=1/e,r=6.28318530718*t*s,a=0;a<e;a++){var f=r*a;n=n+l[a]*Math.cos(f),i=i-l[a]*Math.sin(f)}return[n*s,i*s]}function Cu(l,e,t,n){for(var i=0,s=0,r=1/e,a=6.28318530718*t*r,f=0;f<e;f++){var d=a*f;i=i+l[f+(e-1)*n]*Math.cos(d),s=s-l[f+(e-1)*n]*Math.sin(d)}return[i*r,s*r]}function Yr(l,e,t,n){var i=0,s=0,r=1/e,a=6.28318530718*t*r,f=1,d=0,c=n*.25;if(t<=c)for(;t<=c;)c=c*.5,f+=1;for(var h=0;h<e;h+=f){var o=h;o>e&&(o=e);var u=a*o;i=i+l[o]*Math.cos(u),s=s-l[o]*Math.sin(u),d+=1}return[i/d,s/d]}function vf(l,e,t,n,i){var s=0,r=0,a=1/e,f=6.28318530718*t*a,d=1,c=0,h=i*.25;if(t<=h)for(;t<=h;)h=h*.5,d+=1;for(var o=0;o<e;o+=d){var u=o;u>e&&(u=e);var m=f*u;s=s+l[u+(e-1)*n]*Math.cos(m),r=r-l[u+(e-1)*n]*Math.sin(m),c+=1}return[s/c,r/c]}function po(l,e,t){for(var n=0,i=0,s=1/e,r=6.28318530718*t*s,a=0;a<e;a++){var f=r*a;n=n+l[a]*Math.cos(f),i=l[a]*Math.sin(f)-i}return[n*s,i*s]}function bf(l,e,t,n){for(var i=0,s=0,r=1/e,a=6.28318530718*t*r,f=0;f<e;f++){var d=a*f;i=i+l[f+(e-1)*n]*Math.cos(d),s=l[f+(e-1)*n]*Math.sin(d)-s}return[i*r,s*r]}function mo(l,e,t,n){var i=0,s=0,r=1/e,a=6.28318530718*t*r,f=1,d=0,c=n*.25;if(t<=c)for(;t<=c;)c=c*.5,f+=1;for(var h=0;h<e;h+=f){var o=h;o>e&&(o=e);var u=a*o;i=i+l[o]*Math.cos(u),s=l[o]*Math.sin(u)-s,d+=1}return[i/d,s/d]}function _f(l,e,t,n,i){var s=0,r=0,a=1/e,f=6.28318530718*t*a,d=1,c=0,h=i*.25;if(t<=h)for(;t<=h;)h=h*.5,d+=1;for(var o=0;o<e;o+=d){var u=o;u>e&&(u=e);var m=f*u;s=s+l[u+(e-1)*n]*Math.cos(m),r=l[u+(e-1)*n]*Math.sin(m)-r,c+=1}return[s/c,r/c]}function Bm(l,e){var t=Math.floor(this.thread.x/e)*2,n=this.thread.x-Math.floor(this.thread.x/e)*e,i=Mu(l[t],e),s=Mu(l[t+1],e),r=Eu(l[t],i,e),a=Eu(l[t+1],s,e),f=Au(l[t],i,r,l[t+1],s,a,e,n);return f}function Gm(l,e,t,n){var i=Math.floor(this.thread.x/e)*2,s=this.thread.x-Math.floor(this.thread.x/e)*e,r=t[i],a=t[i+1],f=n[i],d=n[i+1],c=Au(l[i],r,f,l[i+1],a,d,e,s);return c}function Hm(l,e,t){var n=Gs(l,e,this.thread.x);return Vt(n[0],n[1])*t}function Wm(l,e,t){var n=po(l,e,this.thread.x);return Vt(n[0],n[1])*t}function xf(l,e,t,n){var i=Yr(l,e,this.thread.x,n);return Vt(i[0],i[1])*t}function yf(l,e,t,n){var i=mo(l,e,this.thread.x,n);return Vt(i[0],i[1])*t}function Km(l,e){var t=this.output.x,n=Gs(l[this.thread.y],t,this.thread.x);return Vt(n[0],n[1])*e}function Xm(l,e,t){var n=[0,0];if(this.thread.x<=e)n=Gs(l,e,this.thread.x);else{var i=Math.floor(this.thread.x/e);n=Cu(l,e,this.thread.x-i*e,i)}return Vt(n[0],n[1])*t}function jm(l,e,t,n){var i=[0,0];if(this.thread.x<=e)i=Yr(l,e,this.thread.x,n);else{var s=Math.floor(this.thread.x/e);i=vf(l,e,this.thread.x-s*e,s,n)}return Vt(i[0],i[1])*t}function $m(l,e,t,n,i){var s=[0,0],r=this.thread.x/e*(n-t)+t;return s=Gs(l,e,r),Vt(s[0],s[1])*i}function Ym(l,e,t,n,i){var s=[0,0],r=this.thread.x/e*(n-t)+t;return s=Yr(l,e,r),Vt(s[0],s[1])*i}function qm(l,e,t,n,i){var s=[0,0],r=this.thread.x/e*(n-t)+t;return s=po(l,e,r),Vt(s[0],s[1])*i}function Jm(l,e,t,n,i){var s=[0,0],r=this.thread.x/e*(n-t)+t;return s=mo(l,e,r),Vt(s[0],s[1])*i}function Zm(l,e,t,n,i){var s=[0,0];if(this.thread.x<e){var r=this.thread.x/e*(n-t)+t;s=Gs(l,e,r)}else{var a=Math.floor(this.thread.x/e),r=(this.thread.x-a*e)/e*(n-t)+t;s=Cu(l,e,r-a*e,a)}return Vt(s[0],s[1])*i}function Qm(l,e,t,n,i){var s=[0,0];if(this.thread.x<e){var r=this.thread.x/e*(n-t)+t;s=Yr(l,e,r,e)}else{var a=Math.floor(this.thread.x/e),r=(this.thread.x-a*e)/e*(n-t)+t;s=vf(l,e,r-a*e,a,e)}return Vt(s[0],s[1])*i}function eg(l,e,t,n,i){var s=[0,0];if(this.thread.x<e){var r=this.thread.x/e*(n-t)+t;s=po(l,e,r)}else{var a=Math.floor(this.thread.x/e),r=(this.thread.x-a*e)/e*(n-t)+t;s=bf(l,e,r-a*e,a)}return Vt(s[0]*2,s[1]*2)*i}function tg(l,e,t,n,i){var s=[0,0];if(this.thread.x<e){var r=this.thread.x/e*(n-t)+t;s=mo(l,e,r)}else{var a=Math.floor(this.thread.x/e),r=(this.thread.x-a*e)/e*(n-t)+t;s=_f(l,e,r-a*e,a)}return Vt(s[0]*2,s[1]*2)*i}function ng(l,e,t,n){for(var i=t*Math.floor(this.thread.x/e),s=l[i][this.thread.x],r=0;r<t;r++)s*=l[r][this.thread.x];return s*n}function ig(l,e,t,n,i){let s=(Math.sqrt(i)-1)/2,r=2*s+1,a=0,f=0,d=0,c=-s,h=0;for(;c<=s;){if(this.thread.x+c<0||this.thread.x+c>=e){c++;continue}let o=-s;for(;o<=s;){if(this.thread.y+o<0||this.thread.y+o>=t){o++;continue}h=(o+s)*r+c+s;let u=n[h],m=l[this.thread.y+c][this.thread.x+o];a+=m.r*u,f+=m.g*u,d+=m.b*u,o++}c++}this.color(a,f,d)}function sg(l,e,t,n,i,s){let r=0,a=0,f=0;for(var d=0;d<s;d++){let c=i[d],h=(Math.sqrt(c)-1)/2,o=2*h+1,u=-h,m=0;for(;u<=h;){if(this.thread.x+u<0||this.thread.x+u>=e){u++;continue}let g=-h;for(;g<=h;){if(this.thread.y+g<0||this.thread.y+g>=t){g++;continue}m=(g+h)*o+u+h;let y=n[d][m],v=l[this.thread.y+u][this.thread.x+g];r+=v.r*y,a+=v.g*y,f+=v.b*y,g++}u++}}this.color(r,a,f)}function rg(l){return l[this.thread.y][this.thread.x]}var Ft={correlogramsKern:Bm,correlogramsPCKern:Gm,dftKern:Hm,idftKern:Wm,fftKern:xf,ifftKern:yf,dft_windowedKern:$m,idft_windowedKern:qm,fft_windowedKern:Ym,ifft_windowedKern:Jm,listdft2DKern:Km,listdft1DKern:Xm,listfft1DKern:jm,listfft1D_windowedKern:Qm,listdft1D_windowedKern:Zm,listidft1D_windowedKern:eg,listifft1D_windowedKern:tg,bulkArrayMulKern:ng,fftKern:xf,ifftKern:yf,multiImgConv2DKern:sg,ImgConv2DKern:ig,transpose2DKern:rg},wf=[Cm,Rm,Lm,Im,Dm,Pm,Fm,km,Vt,Nm,Om,Mu,Eu,zm,Um,Au,Vm,Gs,Cu,po,bf,Yr,mo,_f];function It(l,e,t={setDynamicOutput:!0,setDynamicArguments:!0,setPipeline:!0,setImmutable:!0,setGraphical:!1}){let n=l.createKernel(e);return t.setDynamicOutput&&n.setDynamicOutput(!0),t.output&&n.setOutput(t.output),t.setDynamicArguments&&n.setDynamicArguments(!0),t.setPipeline&&n.setPipeline(!0),t.setImmutable&&n.setImmutable(!0),t.setGraphical&&n.setGraphical(!0),n}function ag(l,e,t={output:[300,300],setDynamicArguments:!0,setDynamicOutput:!0,setPipeline:!1,setImmutable:!0,setGraphical:!0},n){let i=It(l,e,t),s=i.canvas;return typeof n=="string"?document.getElementById(toAppend).appendChild(s):n?toAppend.appendChild(s):document.body.appendChild(s),i}var go=class{constructor(e=new GPU){this.gpu=e,this.kernels=new Map,this.kernel,this.PI=3.141592653589793,this.SQRT1_2=.7071067811865476,this.addFunctions(),this.imgkernels={edgeDetection:[-1,-1,-1,-1,8,-1,-1,-1,-1],boxBlur:[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],sobelLeft:[1,0,-1,2,0,-2,1,0,-1],sobelRight:[-1,0,1,-2,0,2,-1,0,1],sobelTop:[1,2,1,0,0,0,-1,-2,-1],sobelBottom:[-1,2,1,0,0,0,1,2,1],identity:[0,0,0,0,1,0,0,0,0],gaussian3x3:[1,2,1,2,4,2,1,2,1],guassian7x7:[0,0,0,5,0,0,0,0,5,18,32,18,5,0,0,18,64,100,64,18,0,5,32,100,100,100,32,5,0,18,64,100,64,18,0,0,5,18,32,18,5,0,0,0,0,5,0,0,0],emboss:[-2,-1,0,-1,1,1,0,1,2],sharpen:[0,-1,0,-1,5,-1,0,-1,0]}}addFunction(e=function(){}){this.gpu.addFunction(e)}addKernel(e="",t=function(){},n){return this.kernels.get(e)?(console.error("Kernel already exists"),!1):(this.kernels.set(e,It(this.gpu,t,n)),!0)}addCanvasKernel(e,t,n,i){if(this.kernels.get(e))return console.error("Kernel already exists"),!1;{let r=ag(this.gpu,t,n,i);return this.kernels.set(e,r),r}}combineKernels(e,t=[],n=function(){}){if(this.kernels.get(e))return console.error("Kernel already exists"),!1;{t.forEach((r,a)=>{if(typeof r=="string"){let f=this.kernels.get(r);if(f)t[a]=f;else return!1}else typeof r=="function"&&(this.kernels.get(r.name)||this.addKernel(r.name,r))});let s=this.gpu.combineKernels(...t,n);return this.kernels.set(e,s),s}}callKernel(e="",t=[]){let n,i=this.kernels.get(e);return i?(n=i(...t),n):(console.error("Kernel not found"),!1)}callCanvasKernel(e="",t=[],n=[]){let i,s=this.kernels.get(e);return s?(n.length===2&&s.setOutput(n),i=s(...t),i):(console.error("Kernel not found"),!1)}hasKernel(e=""){return!!this.kernels.get(e)}addFunctions(){wf.forEach(i=>this.gpu.addFunction(i)),this.correlograms=It(this.gpu,Ft.correlogramsKern),this.correlogramsPC=It(this.gpu,Ft.correlogramsPCKern),this.dft=It(this.gpu,Ft.dftKern),this.idft=It(this.gpu,Ft.idftKern),this.dft_windowed=It(this.gpu,Ft.dft_windowedKern),this.idft_windowed=It(this.gpu,Ft.idft_windowedKern),this.fft=It(this.gpu,Ft.fftKern),this.ifft=It(this.gpu,Ft.ifftKern),this.fft_windowed=It(this.gpu,Ft.fft_windowedKern),this.ifft_windowed=It(this.gpu,Ft.ifft_windowedKern),this.listdft2D=It(this.gpu,Ft.listdft2DKern),this.listdft1D=It(this.gpu,Ft.listdft1DKern),this.listdft1D_windowed=It(this.gpu,Ft.listdft1D_windowedKern),this.listfft1D=It(this.gpu,Ft.listfft1DKern),this.listfft1D_windowed=It(this.gpu,Ft.listfft1D_windowedKern),this.listidft1D_windowed=It(this.gpu,Ft.listidft1D_windowedKern),this.listifft1D_windowed=It(this.gpu,Ft.listifft1D_windowedKern),this.bulkArrayMul=It(this.gpu,Ft.bulkArrayMulKern),[{name:"correlograms",krnl:this.correlograms},{name:"correlogramsPC",krnl:this.correlogramsPC},{name:"dft",krnl:this.dft},{name:"idft",krnl:this.idft},{name:"dft_windowed",krnl:this.idft_windowed},{name:"fft",krnl:this.fft},{name:"ifft",krnl:this.ifft},{name:"fft_windowed",krnl:this.fft_windowed},{name:"ifft_windowed",krnl:this.ifft_windowed},{name:"listdft2D",krnl:this.listdft2D},{name:"listdft1D",krnl:this.listdft1D},{name:"listdft1D_windowed",krnl:this.listdft1D_windowed},{name:"listfft1D",krnl:this.listfft1D},{name:"listfft1D_windowed",krnl:this.listfft1D_windowed},{name:"listidft1D_windowed",krnl:this.listidft1D_windowed},{name:"listifft1D_windowed",krnl:this.listifft1D_windowed},{name:"bulkArrayMul",krnl:this.bulkArrayMul}].forEach(i=>{this.kernels.set(i.name,i)});let t=(i,s,r,a,f)=>{var d=this.fft_windowed(i,s,r,a,f,0),c=this.ifft_windowed(d,s,r,a,f);return c},n=(i,s,r,a,f)=>{var d=this.listdft1D_windowed(i,s,r,a,f,new Array(Math.ceil(i/s)).fill(0)),c=this.listifft1D_windowed(d,s,r,a,f);return c};this.gpuCoherence=(i,s,r,a,f)=>{var d=this.correlograms(i),c=this.listfft1D_windowed(d,s,r,a,f,new Array(Math.ceil(i/s)).fill(0)),h=this.bulkArrayMul(c,s,5,1);return h}}gpuXCors(e,t=!1,n=!1){var i;if(t===!0){var s=[],r=[];e.forEach((m,g)=>{s.push(m.reduce((y,v)=>v+=y)/m.length),r.push(Math.sqrt(s[g].reduce((y,v)=>y+=Math.pow(v-mean1,2))))});for(var a=[],f=[],d=[],c=0;c<e.length;c++)for(var h=c;h<e.length;h++)d.push(...e[c],...e[h]),a.push(s[c],s[h]),f.push(r[c],r[h]);this.correlogramsPC.setOutput([d.length]),this.correlogramsPC.setLoopMaxIterations(e[0].length*2),i=this.correlogramsPC(d,e[0].length,a,f)}else{for(var d=[],c=0;c<e.length;c++)for(var h=c;h<e.length;h++)d.push(...e[c],...e[h]);this.correlograms.setOutput([d.length]),this.correlograms.setLoopMaxIterations(e[0].length*2),i=this.correlograms(d,e[0].length)}if(n===!0)return i;var o=i.toArray();i.delete();for(var u=[],c=0;c<e.length;c++)u.push(o.splice(0,e[0].length));return u}gpuDFT(e,t,n=1,i=!1){var s=e.length,r=s/t;this.dft.setOutput([e.length]),this.dft.setLoopMaxIterations(s);var a=this.dft(e,s,n),f=null;if(i===!1){var d=this.makeFrequencyDistribution(s,r),c=a.toArray();return a.delete(),[d,this.orderMagnitudes(c)]}else{var h=a;return a.delete(),h}}MultiChannelDFT(e,t,n=1,i=!1){var s=[];e.forEach(u=>{s.push(...u)});var r=e[0].length,a=r/t;this.listdft1D.setOutput([s.length]),this.listdft1D.setLoopMaxIterations(r);var f=this.listdft1D(s,r,n);if(i===!1){var d=[],c=this.makeFrequencyDistribution(r,a);s=f.toArray();for(var h=0;h<s.length;h+=r)d.push(this.orderMagnitudes([...s.slice(h,h+r)]));return f.delete(),[c,d]}else{var o=f;return f.delete(),o}}MultiChannelDFT_Bandpass(e=[],t,n,i,s=1,r=!1){var a=[];e.forEach(u=>{a.push(...u)});var f=i*2,d=e[0].length,c=d/t;this.listdft1D_windowed.setOutput([a.length]),this.listdft1D_windowed.setLoopMaxIterations(d);var h=this.listdft1D_windowed(a,c,n,f,s);if(r===!0)return h;a=h.toArray(),h.delete();var o=this.bandPassWindow(n,i,c);return[o,this.orderBPMagnitudes(a,t,c,d)]}gpuFFT(e,t,n=1,a,s=!1){var r=e.length,a=r/t;this.fft.setOutput([e.length]),this.fft.setLoopMaxIterations(r);var f=this.fft(e,r,n,a),d=null;if(s===!1){var c=this.makeFrequencyDistribution(r,a),h=f.toArray();return f.delete(),[c,this.orderMagnitudes(h)]}else{var o=f;return f.delete(),o}}MultiChannelFFT(e,t,n=1,i=!1){var s=[];e.forEach(u=>{s.push(...u)});var r=e[0].length,a=r/t;this.listfft1D.setOutput([s.length]),this.listfft1D.setLoopMaxIterations(r);var f=this.listfft1D(s,r,n,a);if(i===!1){var d=[],c=this.makeFrequencyDistribution(r,a);s=f.toArray();for(var h=0;h<s.length;h+=r)d.push(this.orderMagnitudes([...s.slice(h,h+r)]));return f.delete(),[c,d]}else{var o=f;return f.delete(),o}}MultiChannelFFT_Bandpass(e=[],t,n,i,s=1,r=!1){var a=[];e.forEach(u=>{a.push(...u)});var f=i*2,d=e[0].length,c=d/t;this.listfft1D_windowed.setOutput([a.length]),this.listfft1D_windowed.setLoopMaxIterations(d);var h=this.listfft1D_windowed(a,c,n,f,s);if(r===!0)return h;a=h.toArray(),h.delete();var o=this.bandPassWindow(n,i,c);return[o,this.orderBPMagnitudes(a,t,c,d)]}orderMagnitudes(e){return[...e.slice(Math.ceil(e.length*.5),e.length),...e.slice(0,Math.ceil(e.length*.5))]}makeFrequencyDistribution(e,t){for(var n=e,i=t/n,s=[],r=-n/2;r<n/2;r++){var a=r*i;s.push(a)}return s}orderBPMagnitudes(e,t,n,i){for(var s=[],r=0;r<e.length;r+=i)s.push([...e.slice(r,Math.ceil(i*.5+r))]);var a=[],f=1/n;return t>1?(s.forEach((d,c)=>{a.push([]);for(var h=1/Math.max(...d),o=0;o<d.length;o++)if(o==0)a[c]=d.slice(o,Math.floor(n)),o=Math.floor(n);else{var u=o-Math.floor(Math.floor(o*f)*n)-1;a[c][u]=a[c][u]*d[o-1]*h}a[c]=[...a[c].slice(0,Math.ceil(a[c].length*.5))]}),a):s}bandPassWindow(e,t,n,i=!0){var s=t*2;let r=(s-e)/n;var a=[];if(i===!0)for(var f=0;f<Math.ceil(.5*n);f+=r)a.push(e+(s-e)*f/n);else for(var f=-Math.ceil(.5*n);f<Math.ceil(.5*n);f+=r)a.push(e+(s-e)*f/n);return a}};var qr=class{constructor(e){try{this.gpu=new go}catch{return}this.callbackManager=e,e.gpu=this.gpu,this.callbacks=[{case:"addgpufunc",callback:(t,n,i)=>t.gpu.addFunction(_n(n[0]))},{case:"addkernel",callback:(t,n,i)=>t.gpu.addKernel(n[0],_n(n[1]))},{case:"callkernel",callback:(t,n,i)=>t.gpu.callKernel(n[0],n.slice(1))},{case:"dft",callback:(t,n,i)=>(n[2]==null&&(n[2]=1),t.gpu.gpuDFT(...n))},{case:"multidft",callback:(t,n,i)=>(n[2]==null&&(n[2]=1),t.gpu.MultiChannelDFT(...n))},{case:"multidftbandpass",callback:(t,n,i)=>(n[4]==null&&(n[4]=1),t.gpu.MultiChannelDFT_Bandpass(...n))},{case:"fft",callback:(t,n,i)=>(n[2]==null&&(n[2]=1),t.gpu.gpuFFT(...n))},{case:"multifft",callback:(t,n,i)=>(n[2]==null&&(n[2]=1),t.gpu.MultiChannelFFT(...n))},{case:"multifftbandpass",callback:(t,n,i)=>(n[4]==null&&(n[4]=1),t.gpu.MultiChannelFFT_Bandpass(...n))},{case:"gpucoh",callback:(t,n,i)=>t.gpu.gpuCoherence(...n)},{case:"coherence",callback:(t,n,i)=>{let s=je.correlograms(n[0]),r=[...n[0],...s];var a,f=1;a=t.gpu.MultiChannelDFT_Bandpass(r,n[1],n[2],n[3],f);let d=a[1].splice(n[0].length,r.length-n[0].length),c=[],h=n[0].length;var o=0,u=0;d.forEach((g,y)=>{if(u+o===h){var v=d.splice(y,1);o++,d.splice(o,0,...v),u=0}u++});var m=[];return o=0,u=1,d.forEach((g,y)=>{var v=new Array(g.length).fill(0);y<h?(g.forEach((w,E)=>{v[E]=w}),m.push(v)):(g.forEach((w,E)=>{v[E]=w*w/(m[o][E]*m[o+u][E]),v[E]>1&&(v[E]=1)}),u++,u+o===h&&(o++,u=1),c.push(v))}),[a[0],a[1],c]}}],this.addCallbacks()}addCallbacks(e=this.callbacks){e.forEach(t=>{this.callbackManager.addCallback(t.case,t.callback),t.aliases&&t.aliases.forEach(n=>{this.callbackManager.addCallback(n,t.callback)})})}};function Sf(){}var Ru=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Lu=class extends Ru{constructor(){super(),this.style={}}get clientWidth(){return this.width}get clientHeight(){return this.height}setPointerCapture(){}releasePointerCapture(){}getBoundingClientRect(){return{left:this.left,top:this.top,width:this.width,height:this.height,right:this.left+this.width,bottom:this.top+this.height}}handleEvent(e){if(e.type==="size"){this.left=e.left,this.top=e.top,this.width=e.width,this.height=e.height;return}e.preventDefault=Sf,e.stopPropagation=Sf,this.dispatchEvent(e)}focus(){}},xo=class{constructor(){this.id="proxy"+Math.floor(Math.random()*1e4),this.targets={},this.handleEvent=this.handleEvent.bind(this)}makeProxy(e){let{id:t}=e,n=new Lu;this.targets[t]=n}getProxy(e){return this.targets[e]}handleEvent(e){this.targets[e.id].handleEvent(e.data)}};var nf={};df(nf,{ACESFilmicToneMapping:()=>_p,AddEquation:()=>Qi,AddOperation:()=>xp,AdditiveAnimationBlendMode:()=>jh,AdditiveBlending:()=>ha,AlphaFormat:()=>Cp,AlwaysDepth:()=>cp,AlwaysStencilFunc:()=>Kp,AmbientLight:()=>qa,AmbientLightProbe:()=>$l,AnimationClip:()=>Is,AnimationLoader:()=>Xc,AnimationMixer:()=>Zl,AnimationObjectGroup:()=>Jl,AnimationUtils:()=>xt,ArcCurve:()=>Aa,ArrayCamera:()=>wa,ArrowHelper:()=>ch,Audio:()=>eo,AudioAnalyser:()=>Yl,AudioContext:()=>Zh,AudioListener:()=>qc,AudioLoader:()=>Xl,AxesHelper:()=>ru,AxisHelper:()=>Lh,BackSide:()=>rn,BasicDepthPacking:()=>Gp,BasicShadowMap:()=>lg,BinaryTextureLoader:()=>kh,Bone:()=>Er,BooleanKeyframeTrack:()=>li,BoundingBoxHelper:()=>Ih,Box2:()=>zi,Box3:()=>Xt,Box3Helper:()=>lh,BoxBufferGeometry:()=>vn,BoxGeometry:()=>vn,BoxHelper:()=>su,BufferAttribute:()=>Qe,BufferGeometry:()=>Be,BufferGeometryLoader:()=>Wl,ByteType:()=>Sp,Cache:()=>Ds,Camera:()=>hs,CameraHelper:()=>oh,CanvasRenderer:()=>D_,CanvasTexture:()=>Il,CapsuleBufferGeometry:()=>ys,CapsuleGeometry:()=>ys,CatmullRomCurve3:()=>Ca,CineonToneMapping:()=>bp,CircleBufferGeometry:()=>vs,CircleGeometry:()=>vs,ClampToEdgeWrapping:()=>Kt,Clock:()=>Fr,Color:()=>Te,ColorKeyframeTrack:()=>Wa,ColorManagement:()=>pn,CompressedTexture:()=>Ea,CompressedTextureLoader:()=>jc,ConeBufferGeometry:()=>bs,ConeGeometry:()=>bs,CubeCamera:()=>vr,CubeReflectionMapping:()=>Ti,CubeRefractionMapping:()=>Mi,CubeTexture:()=>Ci,CubeTextureLoader:()=>Ol,CubeUVReflectionMapping:()=>Or,CubicBezierCurve:()=>Cr,CubicBezierCurve3:()=>Ra,CubicInterpolant:()=>Fl,CullFaceBack:()=>hc,CullFaceFront:()=>Yd,CullFaceFrontBack:()=>og,CullFaceNone:()=>$d,Curve:()=>Yt,CurvePath:()=>Pl,CustomBlending:()=>Jd,CustomToneMapping:()=>wp,CylinderBufferGeometry:()=>oi,CylinderGeometry:()=>oi,Cylindrical:()=>th,Data3DTexture:()=>cs,DataArrayTexture:()=>Ai,DataTexture:()=>ni,DataTexture2DArray:()=>Vh,DataTexture3D:()=>Bh,DataTextureLoader:()=>zl,DataUtils:()=>fh,DecrementStencilOp:()=>bg,DecrementWrapStencilOp:()=>wg,DefaultLoadingManager:()=>lm,DepthFormat:()=>wi,DepthStencilFormat:()=>us,DepthTexture:()=>Sa,DirectionalLight:()=>Fs,DirectionalLightHelper:()=>ah,DiscreteInterpolant:()=>kl,DodecahedronBufferGeometry:()=>_s,DodecahedronGeometry:()=>_s,DoubleSide:()=>ls,DstAlphaFactor:()=>sp,DstColorFactor:()=>ap,DynamicBufferAttribute:()=>bh,DynamicCopyUsage:()=>Ng,DynamicDrawUsage:()=>pr,DynamicReadUsage:()=>Pg,EdgesGeometry:()=>La,EdgesHelper:()=>Dh,EllipseCurve:()=>gs,EqualDepth:()=>fp,EqualStencilFunc:()=>Eg,EquirectangularReflectionMapping:()=>fa,EquirectangularRefractionMapping:()=>da,Euler:()=>Bn,EventDispatcher:()=>yn,ExtrudeBufferGeometry:()=>Dn,ExtrudeGeometry:()=>Dn,FaceColors:()=>C_,FileLoader:()=>bn,FlatShading:()=>Hh,Float16BufferAttribute:()=>Ml,Float32Attribute:()=>Ch,Float32BufferAttribute:()=>Le,Float64Attribute:()=>Rh,Float64BufferAttribute:()=>El,FloatType:()=>Qn,Fog:()=>ps,FogExp2:()=>ds,Font:()=>O_,FontLoader:()=>N_,FramebufferTexture:()=>Ll,FrontSide:()=>os,Frustum:()=>fs,GLBufferAttribute:()=>eu,GLSL1:()=>zg,GLSL3:()=>Oc,GreaterDepth:()=>pp,GreaterEqualDepth:()=>dp,GreaterEqualStencilFunc:()=>Lg,GreaterStencilFunc:()=>Cg,GridHelper:()=>iu,Group:()=>ei,HalfFloatType:()=>fr,HemisphereLight:()=>Xa,HemisphereLightHelper:()=>sh,HemisphereLightProbe:()=>jl,IcosahedronBufferGeometry:()=>ws,IcosahedronGeometry:()=>ws,ImageBitmapLoader:()=>Kl,ImageLoader:()=>Ps,ImageUtils:()=>zn,ImmediateRenderObject:()=>z_,IncrementStencilOp:()=>vg,IncrementWrapStencilOp:()=>_g,InstancedBufferAttribute:()=>ri,InstancedBufferGeometry:()=>Qa,InstancedInterleavedBuffer:()=>Ql,InstancedMesh:()=>Ta,Int16Attribute:()=>Th,Int16BufferAttribute:()=>Sl,Int32Attribute:()=>Eh,Int32BufferAttribute:()=>Tl,Int8Attribute:()=>_h,Int8BufferAttribute:()=>bl,IntType:()=>Mp,InterleavedBuffer:()=>si,InterleavedBufferAttribute:()=>Gn,Interpolant:()=>Pn,InterpolateDiscrete:()=>ga,InterpolateLinear:()=>xa,InterpolateSmooth:()=>ul,InvertStencilOp:()=>Sg,JSONLoader:()=>P_,KeepStencilOp:()=>cl,KeyframeTrack:()=>ln,LOD:()=>Cl,LatheBufferGeometry:()=>Di,LatheGeometry:()=>Di,Layers:()=>mr,LensFlare:()=>k_,LessDepth:()=>hp,LessEqualDepth:()=>fl,LessEqualStencilFunc:()=>Ag,LessStencilFunc:()=>Mg,Light:()=>un,LightProbe:()=>ks,Line:()=>Ln,Line3:()=>tu,LineBasicMaterial:()=>Pt,LineCurve:()=>xs,LineCurve3:()=>Dl,LineDashedMaterial:()=>Ga,LineLoop:()=>Ma,LinePieces:()=>E_,LineSegments:()=>Gt,LineStrip:()=>M_,LinearEncoding:()=>ii,LinearFilter:()=>_t,LinearInterpolant:()=>Ha,LinearMipMapLinearFilter:()=>dg,LinearMipMapNearestFilter:()=>fg,LinearMipmapLinearFilter:()=>Ns,LinearMipmapNearestFilter:()=>Xh,LinearSRGBColorSpace:()=>_i,LinearToneMapping:()=>yp,Loader:()=>Ut,LoaderUtils:()=>Pr,LoadingManager:()=>Ka,LoopOnce:()=>zp,LoopPingPong:()=>Vp,LoopRepeat:()=>Up,LuminanceAlphaFormat:()=>Ip,LuminanceFormat:()=>Lp,MOUSE:()=>Ui,Material:()=>Tt,MaterialLoader:()=>Hl,Math:()=>ex,MathUtils:()=>ex,Matrix3:()=>Lt,Matrix4:()=>De,MaxEquation:()=>mc,Mesh:()=>ft,MeshBasicMaterial:()=>on,MeshDepthMaterial:()=>_r,MeshDistanceMaterial:()=>wr,MeshFaceMaterial:()=>L_,MeshLambertMaterial:()=>Va,MeshMatcapMaterial:()=>Ba,MeshNormalMaterial:()=>Ua,MeshPhongMaterial:()=>Cs,MeshPhysicalMaterial:()=>Oa,MeshStandardMaterial:()=>Dr,MeshToonMaterial:()=>za,MinEquation:()=>pc,MirroredRepeatWrapping:()=>ma,MixOperation:()=>gp,MultiMaterial:()=>I_,MultiplyBlending:()=>dc,MultiplyOperation:()=>no,NearestFilter:()=>bt,NearestMipMapLinearFilter:()=>hg,NearestMipMapNearestFilter:()=>cg,NearestMipmapLinearFilter:()=>pl,NearestMipmapNearestFilter:()=>dl,NeverDepth:()=>up,NeverStencilFunc:()=>Tg,NoBlending:()=>ti,NoColorSpace:()=>gg,NoColors:()=>A_,NoToneMapping:()=>On,NormalAnimationBlendMode:()=>lu,NormalBlending:()=>is,NotEqualDepth:()=>mp,NotEqualStencilFunc:()=>Rg,NumberKeyframeTrack:()=>Rs,Object3D:()=>qe,ObjectLoader:()=>$c,ObjectSpaceNormalMap:()=>Wp,OctahedronBufferGeometry:()=>Fi,OctahedronGeometry:()=>Fi,OneFactor:()=>tp,OneMinusDstAlphaFactor:()=>rp,OneMinusDstColorFactor:()=>op,OneMinusSrcAlphaFactor:()=>Kh,OneMinusSrcColorFactor:()=>ip,OrthographicCamera:()=>Rn,PCFShadowMap:()=>Gh,PCFSoftShadowMap:()=>qd,PMREMGenerator:()=>_a,ParametricGeometry:()=>Oh,Particle:()=>ph,ParticleBasicMaterial:()=>xh,ParticleSystem:()=>mh,ParticleSystemMaterial:()=>yh,Path:()=>Ii,PerspectiveCamera:()=>Et,Plane:()=>mn,PlaneBufferGeometry:()=>Ri,PlaneGeometry:()=>Ri,PlaneHelper:()=>uh,PointCloud:()=>dh,PointCloudMaterial:()=>gh,PointLight:()=>Ya,PointLightHelper:()=>ih,Points:()=>ms,PointsMaterial:()=>ai,PolarGridHelper:()=>rh,PolyhedronBufferGeometry:()=>In,PolyhedronGeometry:()=>In,PositionalAudio:()=>Jc,PropertyBinding:()=>nt,PropertyMixer:()=>ql,QuadraticBezierCurve:()=>Rr,QuadraticBezierCurve3:()=>Lr,Quaternion:()=>At,QuaternionKeyframeTrack:()=>Oi,QuaternionLinearInterpolant:()=>Nl,REVISION:()=>au,RGBADepthPacking:()=>Hp,RGBAFormat:()=>sn,RGBAIntegerFormat:()=>Np,RGBA_ASTC_10x10_Format:()=>Pc,RGBA_ASTC_10x5_Format:()=>Lc,RGBA_ASTC_10x6_Format:()=>Ic,RGBA_ASTC_10x8_Format:()=>Dc,RGBA_ASTC_12x10_Format:()=>Fc,RGBA_ASTC_12x12_Format:()=>kc,RGBA_ASTC_4x4_Format:()=>wc,RGBA_ASTC_5x4_Format:()=>Sc,RGBA_ASTC_5x5_Format:()=>Tc,RGBA_ASTC_6x5_Format:()=>Mc,RGBA_ASTC_6x6_Format:()=>Ec,RGBA_ASTC_8x5_Format:()=>Ac,RGBA_ASTC_8x6_Format:()=>Cc,RGBA_ASTC_8x8_Format:()=>Rc,RGBA_BPTC_Format:()=>Nc,RGBA_ETC2_EAC_Format:()=>_c,RGBA_PVRTC_2BPPV1_Format:()=>vc,RGBA_PVRTC_4BPPV1_Format:()=>yc,RGBA_S3TC_DXT1_Format:()=>al,RGBA_S3TC_DXT3_Format:()=>ol,RGBA_S3TC_DXT5_Format:()=>ll,RGBFormat:()=>Rp,RGB_ETC1_Format:()=>Op,RGB_ETC2_Format:()=>bc,RGB_PVRTC_2BPPV1_Format:()=>xc,RGB_PVRTC_4BPPV1_Format:()=>gc,RGB_S3TC_DXT1_Format:()=>rl,RGFormat:()=>Fp,RGIntegerFormat:()=>kp,RawShaderMaterial:()=>Na,Ray:()=>Vn,Raycaster:()=>to,RectAreaLight:()=>Ja,RedFormat:()=>Dp,RedIntegerFormat:()=>Pp,ReinhardToneMapping:()=>vp,RepeatWrapping:()=>pa,ReplaceStencilOp:()=>yg,ReverseSubtractEquation:()=>Qd,RingBufferGeometry:()=>Ss,RingGeometry:()=>Ss,SRGBColorSpace:()=>kn,Scene:()=>Li,SceneUtils:()=>F_,ShaderChunk:()=>Ze,ShaderLib:()=>Cn,ShaderMaterial:()=>pt,ShadowMaterial:()=>ka,Shape:()=>gn,ShapeBufferGeometry:()=>ki,ShapeGeometry:()=>ki,ShapePath:()=>hh,ShapeUtils:()=>xn,ShortType:()=>Tp,Skeleton:()=>Ar,SkeletonHelper:()=>nu,SkinnedMesh:()=>Mr,SmoothShading:()=>ug,Source:()=>Nn,Sphere:()=>Un,SphereBufferGeometry:()=>Ni,SphereGeometry:()=>Ni,Spherical:()=>Nr,SphericalHarmonics3:()=>Za,SplineCurve:()=>Ir,SpotLight:()=>$a,SpotLightHelper:()=>nh,Sprite:()=>Tr,SpriteMaterial:()=>Sr,SrcAlphaFactor:()=>Wh,SrcAlphaSaturateFactor:()=>lp,SrcColorFactor:()=>np,StaticCopyUsage:()=>kg,StaticDrawUsage:()=>dr,StaticReadUsage:()=>Dg,StereoCamera:()=>Yc,StreamCopyUsage:()=>Og,StreamDrawUsage:()=>Ig,StreamReadUsage:()=>Fg,StringKeyframeTrack:()=>ui,SubtractEquation:()=>Zd,SubtractiveBlending:()=>fc,TOUCH:()=>Vi,TangentSpaceNormalMap:()=>Os,TetrahedronBufferGeometry:()=>Ts,TetrahedronGeometry:()=>Ts,TextGeometry:()=>zh,Texture:()=>yt,TextureLoader:()=>Ul,TorusBufferGeometry:()=>Ms,TorusGeometry:()=>Ms,TorusKnotBufferGeometry:()=>Es,TorusKnotGeometry:()=>Es,Triangle:()=>wt,TriangleFanDrawMode:()=>mg,TriangleStripDrawMode:()=>pg,TrianglesDrawMode:()=>Bp,TubeBufferGeometry:()=>As,TubeGeometry:()=>As,UVMapping:()=>ou,Uint16Attribute:()=>Mh,Uint16BufferAttribute:()=>gr,Uint32Attribute:()=>Ah,Uint32BufferAttribute:()=>xr,Uint8Attribute:()=>wh,Uint8BufferAttribute:()=>_l,Uint8ClampedAttribute:()=>Sh,Uint8ClampedBufferAttribute:()=>wl,Uniform:()=>kr,UniformsLib:()=>Ae,UniformsUtils:()=>Fn,UnsignedByteType:()=>Ei,UnsignedInt248Type:()=>ss,UnsignedIntType:()=>aa,UnsignedShort4444Type:()=>Ep,UnsignedShort5551Type:()=>Ap,UnsignedShortType:()=>hr,VSMShadowMap:()=>or,Vector2:()=>te,Vector3:()=>N,Vector4:()=>ot,VectorKeyframeTrack:()=>Ls,Vertex:()=>vh,VertexColors:()=>R_,VideoTexture:()=>Rl,WebGL1Renderer:()=>Al,WebGL3DRenderTarget:()=>yl,WebGLArrayRenderTarget:()=>xl,WebGLCubeRenderTarget:()=>br,WebGLMultipleRenderTargets:()=>vl,WebGLMultisampleRenderTarget:()=>Uh,WebGLRenderTarget:()=>dt,WebGLRenderTargetCube:()=>Nh,WebGLRenderer:()=>ut,WebGLUtils:()=>im,WireframeGeometry:()=>Fa,WireframeHelper:()=>Ph,WrapAroundEnding:()=>ya,XHRLoader:()=>Fh,ZeroCurvatureEnding:()=>ts,ZeroFactor:()=>ep,ZeroSlopeEnding:()=>ns,ZeroStencilOp:()=>xg,_SRGBAFormat:()=>ml,sRGBEncoding:()=>gt});var au="140",Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,hc=1,Yd=2,og=3,lg=0,Gh=1,qd=2,or=3,os=0,rn=1,ls=2,Hh=1,ug=2,ti=0,is=1,ha=2,fc=3,dc=4,Jd=5,Qi=100,Zd=101,Qd=102,pc=103,mc=104,ep=200,tp=201,np=202,ip=203,Wh=204,Kh=205,sp=206,rp=207,ap=208,op=209,lp=210,up=0,cp=1,hp=2,fl=3,fp=4,dp=5,pp=6,mp=7,no=0,gp=1,xp=2,On=0,yp=1,vp=2,bp=3,_p=4,wp=5,ou=300,Ti=301,Mi=302,fa=303,da=304,Or=306,pa=1e3,Kt=1001,ma=1002,bt=1003,dl=1004,cg=1004,pl=1005,hg=1005,_t=1006,Xh=1007,fg=1007,Ns=1008,dg=1008,Ei=1009,Sp=1010,Tp=1011,hr=1012,Mp=1013,aa=1014,Qn=1015,fr=1016,Ep=1017,Ap=1018,ss=1020,Cp=1021,Rp=1022,sn=1023,Lp=1024,Ip=1025,wi=1026,us=1027,Dp=1028,Pp=1029,Fp=1030,kp=1031,Np=1033,rl=33776,al=33777,ol=33778,ll=33779,gc=35840,xc=35841,yc=35842,vc=35843,Op=36196,bc=37492,_c=37496,wc=37808,Sc=37809,Tc=37810,Mc=37811,Ec=37812,Ac=37813,Cc=37814,Rc=37815,Lc=37816,Ic=37817,Dc=37818,Pc=37819,Fc=37820,kc=37821,Nc=36492,zp=2200,Up=2201,Vp=2202,ga=2300,xa=2301,ul=2302,ts=2400,ns=2401,ya=2402,lu=2500,jh=2501,Bp=0,pg=1,mg=2,ii=3e3,gt=3001,Gp=3200,Hp=3201,Os=0,Wp=1,gg="",kn="srgb",_i="srgb-linear",xg=0,cl=7680,yg=7681,vg=7682,bg=7683,_g=34055,wg=34056,Sg=5386,Tg=512,Mg=513,Eg=514,Ag=515,Cg=516,Rg=517,Lg=518,Kp=519,dr=35044,pr=35048,Ig=35040,Dg=35045,Pg=35049,Fg=35041,kg=35046,Ng=35050,Og=35042,zg="100",Oc="300 es",ml=1035,yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},zt=[];for(let l=0;l<256;l++)zt[l]=(l<16?"0":"")+l.toString(16);var Tf=1234567,rs=Math.PI/180,va=180/Math.PI;function an(){let l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[l&255]+zt[l>>8&255]+zt[l>>16&255]+zt[l>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Rt(l,e,t){return Math.max(e,Math.min(t,l))}function $h(l,e){return(l%e+e)%e}function Ug(l,e,t,n,i){return n+(l-e)*(i-n)/(t-e)}function Vg(l,e,t){return l!==e?(t-l)/(e-l):0}function oa(l,e,t){return(1-t)*l+t*e}function Bg(l,e,t,n){return oa(l,e,1-Math.exp(-t*n))}function Gg(l,e=1){return e-Math.abs($h(l,e*2)-e)}function Hg(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*(3-2*l))}function Wg(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*l*(l*(l*6-15)+10))}function Kg(l,e){return l+Math.floor(Math.random()*(e-l+1))}function Xg(l,e){return l+Math.random()*(e-l)}function jg(l){return l*(.5-Math.random())}function $g(l){l!==void 0&&(Tf=l);let e=Tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yg(l){return l*rs}function qg(l){return l*va}function zc(l){return(l&l-1)===0&&l!==0}function Xp(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function gl(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function Jg(l,e,t,n,i){let s=Math.cos,r=Math.sin,a=s(t/2),f=r(t/2),d=s((e+n)/2),c=r((e+n)/2),h=s((e-n)/2),o=r((e-n)/2),u=s((n-e)/2),m=r((n-e)/2);switch(i){case"XYX":l.set(a*c,f*h,f*o,a*d);break;case"YZY":l.set(f*o,a*c,f*h,a*d);break;case"ZXZ":l.set(f*h,f*o,a*c,a*d);break;case"XZX":l.set(a*c,f*m,f*u,a*d);break;case"YXY":l.set(f*u,a*c,f*m,a*d);break;case"ZYZ":l.set(f*m,f*u,a*c,a*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zg(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Qg(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}var ex=Object.freeze({__proto__:null,DEG2RAD:rs,RAD2DEG:va,generateUUID:an,clamp:Rt,euclideanModulo:$h,mapLinear:Ug,inverseLerp:Vg,lerp:oa,damp:Bg,pingpong:Gg,smoothstep:Hg,smootherstep:Wg,randInt:Kg,randFloat:Xg,randFloatSpread:jg,seededRandom:$g,degToRad:Yg,radToDeg:qg,isPowerOfTwo:zc,ceilPowerOfTwo:Xp,floorPowerOfTwo:gl,setQuaternionFromProperEuler:Jg,normalize:Qg,denormalize:Zg}),te=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};te.prototype.isVector2=!0;var Lt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,r,a,f,d){let c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=f,c[6]=n,c[7]=r,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],f=n[6],d=n[1],c=n[4],h=n[7],o=n[2],u=n[5],m=n[8],g=i[0],y=i[3],v=i[6],w=i[1],E=i[4],_=i[7],M=i[2],A=i[5],I=i[8];return s[0]=r*g+a*w+f*M,s[3]=r*y+a*E+f*A,s[6]=r*v+a*_+f*I,s[1]=d*g+c*w+h*M,s[4]=d*y+c*E+h*A,s[7]=d*v+c*_+h*I,s[2]=o*g+u*w+m*M,s[5]=o*y+u*E+m*A,s[8]=o*v+u*_+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],f=e[6],d=e[7],c=e[8];return t*r*c-t*a*d-n*s*c+n*a*f+i*s*d-i*r*f}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],f=e[6],d=e[7],c=e[8],h=c*r-a*d,o=a*f-c*s,u=d*s-r*f,m=t*h+n*o+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=h*g,e[1]=(i*d-c*n)*g,e[2]=(a*n-i*r)*g,e[3]=o*g,e[4]=(c*t-i*f)*g,e[5]=(i*s-a*t)*g,e[6]=u*g,e[7]=(n*f-d*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){let f=Math.cos(s),d=Math.sin(s);return this.set(n*f,n*d,-n*(f*r+d*a)+r+e,-i*d,i*f,-i*(-d*r+f*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],a=i[6],f=i[1],d=i[4],c=i[7];return i[0]=t*s+n*f,i[3]=t*r+n*d,i[6]=t*a+n*c,i[1]=-n*s+t*f,i[4]=-n*r+t*d,i[7]=-n*a+t*c,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lt.prototype.isMatrix3=!0;function jp(l){for(let e=l.length-1;e>=0;--e)if(l[e]>65535)return!0;return!1}var tx={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function lr(l,e){return new tx[l](e)}function ba(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function as(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function hl(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}var Iu={[kn]:{[_i]:as},[_i]:{[kn]:hl}},pn={legacyMode:!0,get workingColorSpace(){return _i},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.legacyMode||e===t||!e||!t)return l;if(Iu[e]&&Iu[e][t]!==void 0){let n=Iu[e][t];return l.r=n(l.r),l.g=n(l.g),l.b=n(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}},$p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={r:0,g:0,b:0},Sn={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Du(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}function vo(l,e){return e.r=l.r,e.g=l.g,e.b=l.b,e}var Te=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_i){return this.r=e,this.g=t,this.b=n,pn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_i){if(e=$h(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Du(r,s,e+1/3),this.g=Du(r,s,e),this.b=Du(r,s,e-1/3)}return pn.toWorkingColorSpace(this,i),this}setStyle(e,t=kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let f=parseFloat(s[1])/360,d=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(f,d,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pn.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=kn){let n=$p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=hl(e.r),this.g=hl(e.g),this.b=hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return pn.fromWorkingColorSpace(vo(this,kt),e),Rt(kt.r*255,0,255)<<16^Rt(kt.g*255,0,255)<<8^Rt(kt.b*255,0,255)<<0}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_i){pn.fromWorkingColorSpace(vo(this,kt),t);let n=kt.r,i=kt.g,s=kt.b,r=Math.max(n,i,s),a=Math.min(n,i,s),f,d,c=(a+r)/2;if(a===r)f=0,d=0;else{let h=r-a;switch(d=c<=.5?h/(r+a):h/(2-r-a),r){case n:f=(i-s)/h+(i<s?6:0);break;case i:f=(s-n)/h+2;break;case s:f=(n-i)/h+4;break}f/=6}return e.h=f,e.s=d,e.l=c,e}getRGB(e,t=_i){return pn.fromWorkingColorSpace(vo(this,kt),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=kn){return pn.fromWorkingColorSpace(vo(this,kt),e),e!==kn?`color(${e} ${kt.r} ${kt.g} ${kt.b})`:`rgb(${kt.r*255|0},${kt.g*255|0},${kt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Sn),Sn.h+=e,Sn.s+=t,Sn.l+=n,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(yo);let n=oa(Sn.h,yo.h,t),i=oa(Sn.s,yo.s,t),s=oa(Sn.l,yo.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Te.NAMES=$p;Te.prototype.isColor=!0;Te.prototype.r=1;Te.prototype.g=1;Te.prototype.b=1;var Hs,zn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=ba("canvas")),Hs.width=e.width,Hs.height=e.height;let n=Hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ba("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=as(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(as(t[n]/255)*255):t[n]=as(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nn=class{constructor(e=null){this.uuid=an(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Pu(i[r].image)):s.push(Pu(i[r]))}else s=Pu(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Pu(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?zn.getDataURL(l):l.data?{data:Array.prototype.slice.call(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Nn.prototype.isSource=!0;var nx=0,yt=class extends yn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Kt,i=Kt,s=_t,r=Ns,a=sn,f=Ei,d=1,c=ii){super(),Object.defineProperty(this,"id",{value:nx++}),this.uuid=an(),this.name="",this.source=new Nn(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=f,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=ou;yt.prototype.isTexture=!0;var ot=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,f=e.elements,d=f[0],c=f[4],h=f[8],o=f[1],u=f[5],m=f[9],g=f[2],y=f[6],v=f[10];if(Math.abs(c-o)<.01&&Math.abs(h-g)<.01&&Math.abs(m-y)<.01){if(Math.abs(c+o)<.1&&Math.abs(h+g)<.1&&Math.abs(m+y)<.1&&Math.abs(d+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(d+1)/2,_=(u+1)/2,M=(v+1)/2,A=(c+o)/4,I=(h+g)/4,C=(m+y)/4;return E>_&&E>M?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=I/n):_>M?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=I/s,i=C/s),this.set(n,i,s,t),this}let w=Math.sqrt((y-m)*(y-m)+(h-g)*(h-g)+(o-c)*(o-c));return Math.abs(w)<.001&&(w=1),this.x=(y-m)/w,this.y=(h-g)/w,this.z=(o-c)/w,this.w=Math.acos((d+u+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ot.prototype.isVector4=!0;var dt=class extends yn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_t,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Nn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.prototype.isWebGLRenderTarget=!0;var Ai=class extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};Ai.prototype.isDataArrayTexture=!0;var xl=class extends dt{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new Ai(null,e,t,n),this.texture.isRenderTargetTexture=!0}};xl.prototype.isWebGLArrayRenderTarget=!0;var cs=class extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};cs.prototype.isData3DTexture=!0;var yl=class extends dt{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new cs(null,e,t,n),this.texture.isRenderTargetTexture=!0}};yl.prototype.isWebGL3DRenderTarget=!0;var vl=class extends dt{constructor(e,t,n,i={}){super(e,t,i);let s=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=s.clone(),this.texture[r].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}};vl.prototype.isWebGLMultipleRenderTargets=!0;var At=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,r,a){let f=n[i+0],d=n[i+1],c=n[i+2],h=n[i+3],o=s[r+0],u=s[r+1],m=s[r+2],g=s[r+3];if(a===0){e[t+0]=f,e[t+1]=d,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=o,e[t+1]=u,e[t+2]=m,e[t+3]=g;return}if(h!==g||f!==o||d!==u||c!==m){let y=1-a,v=f*o+d*u+c*m+h*g,w=v>=0?1:-1,E=1-v*v;if(E>Number.EPSILON){let M=Math.sqrt(E),A=Math.atan2(M,v*w);y=Math.sin(y*A)/M,a=Math.sin(a*A)/M}let _=a*w;if(f=f*y+o*_,d=d*y+u*_,c=c*y+m*_,h=h*y+g*_,y===1-a){let M=1/Math.sqrt(f*f+d*d+c*c+h*h);f*=M,d*=M,c*=M,h*=M}}e[t]=f,e[t+1]=d,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){let a=n[i],f=n[i+1],d=n[i+2],c=n[i+3],h=s[r],o=s[r+1],u=s[r+2],m=s[r+3];return e[t]=a*m+c*h+f*u-d*o,e[t+1]=f*m+c*o+d*h-a*u,e[t+2]=d*m+c*u+a*o-f*h,e[t+3]=c*m-a*h-f*o-d*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,f=Math.sin,d=a(n/2),c=a(i/2),h=a(s/2),o=f(n/2),u=f(i/2),m=f(s/2);switch(r){case"XYZ":this._x=o*c*h+d*u*m,this._y=d*u*h-o*c*m,this._z=d*c*m+o*u*h,this._w=d*c*h-o*u*m;break;case"YXZ":this._x=o*c*h+d*u*m,this._y=d*u*h-o*c*m,this._z=d*c*m-o*u*h,this._w=d*c*h+o*u*m;break;case"ZXY":this._x=o*c*h-d*u*m,this._y=d*u*h+o*c*m,this._z=d*c*m+o*u*h,this._w=d*c*h-o*u*m;break;case"ZYX":this._x=o*c*h-d*u*m,this._y=d*u*h+o*c*m,this._z=d*c*m-o*u*h,this._w=d*c*h+o*u*m;break;case"YZX":this._x=o*c*h+d*u*m,this._y=d*u*h+o*c*m,this._z=d*c*m-o*u*h,this._w=d*c*h-o*u*m;break;case"XZY":this._x=o*c*h-d*u*m,this._y=d*u*h-o*c*m,this._z=d*c*m+o*u*h,this._w=d*c*h+o*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],f=t[9],d=t[2],c=t[6],h=t[10],o=n+a+h;if(o>0){let u=.5/Math.sqrt(o+1);this._w=.25/u,this._x=(c-f)*u,this._y=(s-d)*u,this._z=(r-i)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(c-f)/u,this._x=.25*u,this._y=(i+r)/u,this._z=(s+d)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(s-d)/u,this._x=(i+r)/u,this._y=.25*u,this._z=(f+c)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(r-i)/u,this._x=(s+d)/u,this._y=(f+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,f=t._y,d=t._z,c=t._w;return this._x=n*c+r*a+i*d-s*f,this._y=i*c+r*f+s*a-n*d,this._z=s*c+r*d+n*f-i*a,this._w=r*c-n*a-i*f-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,r=this._w,a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let f=1-a*a;if(f<=Number.EPSILON){let u=1-t;return this._w=u*r+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let d=Math.sqrt(f),c=Math.atan2(d,a),h=Math.sin((1-t)*c)/d,o=Math.sin(t*c)/d;return this._w=r*h+this._w*o,this._x=n*h+this._x*o,this._y=i*h+this._y*o,this._z=s*h+this._z*o,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};At.prototype.isQuaternion=!0;var N=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,f=e.w,d=f*t+r*i-a*n,c=f*n+a*t-s*i,h=f*i+s*n-r*t,o=-s*t-r*n-a*i;return this.x=d*f+o*-s+c*-a-h*-r,this.y=c*f+o*-r+h*-s-d*-a,this.z=h*f+o*-a+d*-r-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,f=t.z;return this.x=i*f-s*a,this.y=s*r-n*f,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};N.prototype.isVector3=!0;var Fu=new N,Mf=new At,Xt=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let f=0,d=e.length;f<d;f+=3){let c=e[f],h=e[f+1],o=e[f+2];c<t&&(t=c),h<n&&(n=h),o<i&&(i=o),c>s&&(s=c),h>r&&(r=h),o>a&&(a=o)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let f=0,d=e.count;f<d;f++){let c=e.getX(f),h=e.getY(f),o=e.getZ(f);c<t&&(t=c),h<n&&(n=h),o<i&&(i=o),c>s&&(s=c),h>r&&(r=h),o>a&&(a=o)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let r=0,a=s.count;r<a;r++)Wi.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Wi)}else n.boundingBox===null&&n.computeBoundingBox(),ku.copy(n.boundingBox),ku.applyMatrix4(e.matrixWorld),this.union(ku);let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),bo.subVectors(this.max,Jr),Ws.subVectors(e.a,Jr),Ks.subVectors(e.b,Jr),Xs.subVectors(e.c,Jr),di.subVectors(Ks,Ws),pi.subVectors(Xs,Ks),Ki.subVectors(Ws,Xs);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Ki.z,Ki.y,di.z,0,-di.x,pi.z,0,-pi.x,Ki.z,0,-Ki.x,-di.y,di.x,0,-pi.y,pi.x,0,-Ki.y,Ki.x,0];return!Nu(t,Ws,Ks,Xs,bo)||(t=[1,0,0,0,1,0,0,0,1],!Nu(t,Ws,Ks,Xs,bo))?!1:(_o.crossVectors(di,pi),t=[_o.x,_o.y,_o.z],Nu(t,Ws,Ks,Xs,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Xt.prototype.isBox3=!0;var jn=[new N,new N,new N,new N,new N,new N,new N,new N],Wi=new N,ku=new Xt,Ws=new N,Ks=new N,Xs=new N,di=new N,pi=new N,Ki=new N,Jr=new N,bo=new N,_o=new N,Xi=new N;function Nu(l,e,t,n,i){for(let s=0,r=l.length-3;s<=r;s+=3){Xi.fromArray(l,s);let a=i.x*Math.abs(Xi.x)+i.y*Math.abs(Xi.y)+i.z*Math.abs(Xi.z),f=e.dot(Xi),d=t.dot(Xi),c=n.dot(Xi);if(Math.max(-Math.max(f,d,c),Math.min(f,d,c))>a)return!1}return!0}var ix=new Xt,Ef=new N,wo=new N,Ou=new N,Un=class{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ix.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ou.subVectors(e,this.center);let t=Ou.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ou.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?wo.set(0,0,1).multiplyScalar(e.radius):wo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ef.copy(e.center).add(wo)),this.expandByPoint(Ef.copy(e.center).sub(wo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new N,zu=new N,So=new N,mi=new N,Uu=new N,To=new N,Vu=new N,Vn=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.direction).multiplyScalar(t).add(this.origin),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zu.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(zu);let s=e.distanceTo(t)*.5,r=-this.direction.dot(So),a=mi.dot(this.direction),f=-mi.dot(So),d=mi.lengthSq(),c=Math.abs(1-r*r),h,o,u,m;if(c>0)if(h=r*f-a,o=r*a-f,m=s*c,h>=0)if(o>=-m)if(o<=m){let g=1/c;h*=g,o*=g,u=h*(h+r*o+2*a)+o*(r*h+o+2*f)+d}else o=s,h=Math.max(0,-(r*o+a)),u=-h*h+o*(o+2*f)+d;else o=-s,h=Math.max(0,-(r*o+a)),u=-h*h+o*(o+2*f)+d;else o<=-m?(h=Math.max(0,-(-r*s+a)),o=h>0?-s:Math.min(Math.max(-s,-f),s),u=-h*h+o*(o+2*f)+d):o<=m?(h=0,o=Math.min(Math.max(-s,-f),s),u=o*(o+2*f)+d):(h=Math.max(0,-(r*s+a)),o=h>0?s:Math.min(Math.max(-s,-f),s),u=-h*h+o*(o+2*f)+d);else o=r>0?-s:s,h=Math.max(0,-(r*o+a)),u=-h*h+o*(o+2*f)+d;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(So).multiplyScalar(o).add(zu),u}intersectSphere(e,t){$n.subVectors(e.center,this.origin);let n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,f=n+r;return a<0&&f<0?null:a<0?this.at(f,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,f,d=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,o=this.origin;return d>=0?(n=(e.min.x-o.x)*d,i=(e.max.x-o.x)*d):(n=(e.max.x-o.x)*d,i=(e.min.x-o.x)*d),c>=0?(s=(e.min.y-o.y)*c,r=(e.max.y-o.y)*c):(s=(e.max.y-o.y)*c,r=(e.min.y-o.y)*c),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),h>=0?(a=(e.min.z-o.z)*h,f=(e.max.z-o.z)*h):(a=(e.max.z-o.z)*h,f=(e.min.z-o.z)*h),n>f||a>i)||((a>n||n!==n)&&(n=a),(f<i||i!==i)&&(i=f),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,s){Uu.subVectors(t,e),To.subVectors(n,e),Vu.crossVectors(Uu,To);let r=this.direction.dot(Vu),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;mi.subVectors(this.origin,e);let f=a*this.direction.dot(To.crossVectors(mi,To));if(f<0)return null;let d=a*this.direction.dot(Uu.cross(mi));if(d<0||f+d>r)return null;let c=-a*mi.dot(Vu);return c<0?null:this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,r,a,f,d,c,h,o,u,m,g,y){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=a,v[13]=f,v[2]=d,v[6]=c,v[10]=h,v[14]=o,v[3]=u,v[7]=m,v[11]=g,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),r=1/js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),f=Math.cos(i),d=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let o=r*c,u=r*h,m=a*c,g=a*h;t[0]=f*c,t[4]=-f*h,t[8]=d,t[1]=u+m*d,t[5]=o-g*d,t[9]=-a*f,t[2]=g-o*d,t[6]=m+u*d,t[10]=r*f}else if(e.order==="YXZ"){let o=f*c,u=f*h,m=d*c,g=d*h;t[0]=o+g*a,t[4]=m*a-u,t[8]=r*d,t[1]=r*h,t[5]=r*c,t[9]=-a,t[2]=u*a-m,t[6]=g+o*a,t[10]=r*f}else if(e.order==="ZXY"){let o=f*c,u=f*h,m=d*c,g=d*h;t[0]=o-g*a,t[4]=-r*h,t[8]=m+u*a,t[1]=u+m*a,t[5]=r*c,t[9]=g-o*a,t[2]=-r*d,t[6]=a,t[10]=r*f}else if(e.order==="ZYX"){let o=r*c,u=r*h,m=a*c,g=a*h;t[0]=f*c,t[4]=m*d-u,t[8]=o*d+g,t[1]=f*h,t[5]=g*d+o,t[9]=u*d-m,t[2]=-d,t[6]=a*f,t[10]=r*f}else if(e.order==="YZX"){let o=r*f,u=r*d,m=a*f,g=a*d;t[0]=f*c,t[4]=g-o*h,t[8]=m*h+u,t[1]=h,t[5]=r*c,t[9]=-a*c,t[2]=-d*c,t[6]=u*h+m,t[10]=o-g*h}else if(e.order==="XZY"){let o=r*f,u=r*d,m=a*f,g=a*d;t[0]=f*c,t[4]=-h,t[8]=d*c,t[1]=o*h+g,t[5]=r*c,t[9]=u*h-m,t[2]=m*h-u,t[6]=a*c,t[10]=g*h+o}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sx,e,rx)}lookAt(e,t,n){let i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),gi.crossVectors(n,tn),gi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),gi.crossVectors(n,tn)),gi.normalize(),Mo.crossVectors(tn,gi),i[0]=gi.x,i[4]=Mo.x,i[8]=tn.x,i[1]=gi.y,i[5]=Mo.y,i[9]=tn.y,i[2]=gi.z,i[6]=Mo.z,i[10]=tn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],f=n[8],d=n[12],c=n[1],h=n[5],o=n[9],u=n[13],m=n[2],g=n[6],y=n[10],v=n[14],w=n[3],E=n[7],_=n[11],M=n[15],A=i[0],I=i[4],C=i[8],T=i[12],b=i[1],L=i[5],P=i[9],X=i[13],D=i[2],z=i[6],H=i[10],B=i[14],$=i[3],j=i[7],K=i[11],ne=i[15];return s[0]=r*A+a*b+f*D+d*$,s[4]=r*I+a*L+f*z+d*j,s[8]=r*C+a*P+f*H+d*K,s[12]=r*T+a*X+f*B+d*ne,s[1]=c*A+h*b+o*D+u*$,s[5]=c*I+h*L+o*z+u*j,s[9]=c*C+h*P+o*H+u*K,s[13]=c*T+h*X+o*B+u*ne,s[2]=m*A+g*b+y*D+v*$,s[6]=m*I+g*L+y*z+v*j,s[10]=m*C+g*P+y*H+v*K,s[14]=m*T+g*X+y*B+v*ne,s[3]=w*A+E*b+_*D+M*$,s[7]=w*I+E*L+_*z+M*j,s[11]=w*C+E*P+_*H+M*K,s[15]=w*T+E*X+_*B+M*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],f=e[9],d=e[13],c=e[2],h=e[6],o=e[10],u=e[14],m=e[3],g=e[7],y=e[11],v=e[15];return m*(+s*f*h-i*d*h-s*a*o+n*d*o+i*a*u-n*f*u)+g*(+t*f*u-t*d*o+s*r*o-i*r*u+i*d*c-s*f*c)+y*(+t*d*h-t*a*u-s*r*h+n*r*u+s*a*c-n*d*c)+v*(-i*a*c-t*f*h+t*a*o+i*r*h-n*r*o+n*f*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],f=e[6],d=e[7],c=e[8],h=e[9],o=e[10],u=e[11],m=e[12],g=e[13],y=e[14],v=e[15],w=h*y*d-g*o*d+g*f*u-a*y*u-h*f*v+a*o*v,E=m*o*d-c*y*d-m*f*u+r*y*u+c*f*v-r*o*v,_=c*g*d-m*h*d+m*a*u-r*g*u-c*a*v+r*h*v,M=m*h*f-c*g*f-m*a*o+r*g*o+c*a*y-r*h*y,A=t*w+n*E+i*_+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=w*I,e[1]=(g*o*s-h*y*s-g*i*u+n*y*u+h*i*v-n*o*v)*I,e[2]=(a*y*s-g*f*s+g*i*d-n*y*d-a*i*v+n*f*v)*I,e[3]=(h*f*s-a*o*s-h*i*d+n*o*d+a*i*u-n*f*u)*I,e[4]=E*I,e[5]=(c*y*s-m*o*s+m*i*u-t*y*u-c*i*v+t*o*v)*I,e[6]=(m*f*s-r*y*s-m*i*d+t*y*d+r*i*v-t*f*v)*I,e[7]=(r*o*s-c*f*s+c*i*d-t*o*d-r*i*u+t*f*u)*I,e[8]=_*I,e[9]=(m*h*s-c*g*s-m*n*u+t*g*u+c*n*v-t*h*v)*I,e[10]=(r*g*s-m*a*s+m*n*d-t*g*d-r*n*v+t*a*v)*I,e[11]=(c*a*s-r*h*s-c*n*d+t*h*d+r*n*u-t*a*u)*I,e[12]=M*I,e[13]=(c*g*i-m*h*i+m*n*o-t*g*o-c*n*y+t*h*y)*I,e[14]=(m*a*i-r*g*i-m*n*f+t*g*f+r*n*y-t*a*y)*I,e[15]=(r*h*i-c*a*i+c*n*f-t*h*f-r*n*o+t*a*o)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,f=e.z,d=s*r,c=s*a;return this.set(d*r+n,d*a-i*f,d*f+i*a,0,d*a+i*f,c*a+n,c*f-i*r,0,d*f-i*a,c*f+i*r,s*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,r=t._y,a=t._z,f=t._w,d=s+s,c=r+r,h=a+a,o=s*d,u=s*c,m=s*h,g=r*c,y=r*h,v=a*h,w=f*d,E=f*c,_=f*h,M=n.x,A=n.y,I=n.z;return i[0]=(1-(g+v))*M,i[1]=(u+_)*M,i[2]=(m-E)*M,i[3]=0,i[4]=(u-_)*A,i[5]=(1-(o+v))*A,i[6]=(y+w)*A,i[7]=0,i[8]=(m+E)*I,i[9]=(y-w)*I,i[10]=(1-(o+g))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=js.set(i[0],i[1],i[2]).length(),r=js.set(i[4],i[5],i[6]).length(),a=js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);let d=1/s,c=1/r,h=1/a;return Tn.elements[0]*=d,Tn.elements[1]*=d,Tn.elements[2]*=d,Tn.elements[4]*=c,Tn.elements[5]*=c,Tn.elements[6]*=c,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r){r===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,f=2*s/(t-e),d=2*s/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i),o=-(r+s)/(r-s),u=-2*r*s/(r-s);return a[0]=f,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=d,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=o,a[14]=u,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,r){let a=this.elements,f=1/(t-e),d=1/(n-i),c=1/(r-s),h=(t+e)*f,o=(n+i)*d,u=(r+s)*c;return a[0]=2*f,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*d,a[9]=0,a[13]=-o,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-u,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};De.prototype.isMatrix4=!0;var js=new N,Tn=new De,sx=new N(0,0,0),rx=new N(1,1,1),gi=new N,Mo=new N,tn=new N,Af=new De,Cf=new At,Bn=class{constructor(e=0,t=0,n=0,i=Bn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],a=i[8],f=i[1],d=i[5],c=i[9],h=i[2],o=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(o,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,d)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(o,u),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-r,d));break;case"YZX":this._z=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(o,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Af,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cf.setFromEuler(this),this.setFromQuaternion(Cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.prototype.isEuler=!0;Bn.DefaultOrder="XYZ";Bn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ax=0,Rf=new N,$s=new At,Yn=new De,Eo=new N,Zr=new N,ox=new N,lx=new At,Lf=new N(1,0,0),If=new N(0,1,0),Df=new N(0,0,1),ux={type:"added"},Pf={type:"removed"},qe=class extends yn{constructor(){super(),Object.defineProperty(this,"id",{value:ax++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DefaultUp.clone();let e=new N,t=new Bn,n=new At,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Lt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Lf,e)}rotateY(e){return this.rotateOnAxis(If,e)}rotateZ(e){return this.rotateOnAxis(Df,e)}translateOnAxis(e,t){return Rf.copy(e).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lf,e)}translateY(e){return this.translateOnAxis(If,e)}translateZ(e){return this.translateOnAxis(Df,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Zr,Eo,this.up):Yn.lookAt(Eo,Zr,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(Yn),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ux)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Pf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,ox),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,lx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,f){return a[f.uuid]===void 0&&(a[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let f=a.shapes;if(Array.isArray(f))for(let d=0,c=f.length;d<c;d++){let h=f[d];s(e.shapes,h)}else s(e.shapes,f)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let f=0,d=this.material.length;f<d;f++)a.push(s(e.materials,this.material[f]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let f=this.animations[a];i.animations.push(s(e.animations,f))}}if(t){let a=r(e.geometries),f=r(e.materials),d=r(e.textures),c=r(e.images),h=r(e.shapes),o=r(e.skeletons),u=r(e.animations),m=r(e.nodes);a.length>0&&(n.geometries=a),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),o.length>0&&(n.skeletons=o),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){let f=[];for(let d in a){let c=a[d];delete c.metadata,f.push(c)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};qe.DefaultUp=new N(0,1,0);qe.DefaultMatrixAutoUpdate=!0;qe.prototype.isObject3D=!0;var Mn=new N,qn=new N,Bu=new N,Jn=new N,Ys=new N,qs=new N,Ff=new N,Gu=new N,Hu=new N,Wu=new N,wt=class{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mn.subVectors(i,t),qn.subVectors(n,t),Bu.subVectors(e,t);let r=Mn.dot(Mn),a=Mn.dot(qn),f=Mn.dot(Bu),d=qn.dot(qn),c=qn.dot(Bu),h=r*d-a*a;if(h===0)return s.set(-2,-1,-1);let o=1/h,u=(d*f-a*c)*o,m=(r*c-a*f)*o;return s.set(1-u-m,m,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,n,i,s,r,a,f){return this.getBarycoord(e,t,n,i,Jn),f.set(0,0),f.addScaledVector(s,Jn.x),f.addScaledVector(r,Jn.y),f.addScaledVector(a,Jn.z),f}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),qn.subVectors(e,t),Mn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Mn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return wt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,a;Ys.subVectors(i,n),qs.subVectors(s,n),Gu.subVectors(e,n);let f=Ys.dot(Gu),d=qs.dot(Gu);if(f<=0&&d<=0)return t.copy(n);Hu.subVectors(e,i);let c=Ys.dot(Hu),h=qs.dot(Hu);if(c>=0&&h<=c)return t.copy(i);let o=f*h-c*d;if(o<=0&&f>=0&&c<=0)return r=f/(f-c),t.copy(n).addScaledVector(Ys,r);Wu.subVectors(e,s);let u=Ys.dot(Wu),m=qs.dot(Wu);if(m>=0&&u<=m)return t.copy(s);let g=u*d-f*m;if(g<=0&&d>=0&&m<=0)return a=d/(d-m),t.copy(n).addScaledVector(qs,a);let y=c*m-u*h;if(y<=0&&h-c>=0&&u-m>=0)return Ff.subVectors(s,i),a=(h-c)/(h-c+(u-m)),t.copy(i).addScaledVector(Ff,a);let v=1/(y+g+o);return r=g*v,a=o*v,t.copy(n).addScaledVector(Ys,r).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cx=0,Tt=class extends yn{constructor(){super(),Object.defineProperty(this,"id",{value:cx++}),this.uuid=an(),this.name="",this.type="Material",this.blending=is,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wh,this.blendDst=Kh,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cl,this.stencilZFail=cl,this.stencilZPass=cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Hh;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==os&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let r=[];for(let a in s){let f=s[a];delete f.metadata,r.push(f)}return r}if(t){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};Tt.prototype.isMaterial=!0;Tt.fromType=function(){return null};var on=class extends Tt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};on.prototype.isMeshBasicMaterial=!0;var Dt=new N,Ao=new te,Qe=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=dr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new Te),t[n++]=r.r,t[n++]=r.g,t[n++]=r.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new te),t[n++]=r.x,t[n++]=r.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new N),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new ot),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z,t[n++]=r.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};Qe.prototype.isBufferAttribute=!0;var bl=class extends Qe{constructor(e,t,n){super(new Int8Array(e),t,n)}},_l=class extends Qe{constructor(e,t,n){super(new Uint8Array(e),t,n)}},wl=class extends Qe{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},Sl=class extends Qe{constructor(e,t,n){super(new Int16Array(e),t,n)}},gr=class extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tl=class extends Qe{constructor(e,t,n){super(new Int32Array(e),t,n)}},xr=class extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ml=class extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};Ml.prototype.isFloat16BufferAttribute=!0;var Le=class extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}},El=class extends Qe{constructor(e,t,n){super(new Float64Array(e),t,n)}},hx=0,dn=new De,Ku=new qe,Js=new N,nn=new Xt,Qr=new Xt,Ot=new N,Be=class extends yn{constructor(){super(),Object.defineProperty(this,"id",{value:hx++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?xr:gr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(nn.min,Qr.min),nn.expandByPoint(Ot),Ot.addVectors(nn.max,Qr.max),nn.expandByPoint(Ot)):(nn.expandByPoint(Qr.min),nn.expandByPoint(Qr.max))}nn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],f=this.morphTargetsRelative;for(let d=0,c=a.count;d<c;d++)Ot.fromBufferAttribute(a,d),f&&(Js.fromBufferAttribute(e,d),Ot.add(Js)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*a),4));let f=this.getAttribute("tangent").array,d=[],c=[];for(let b=0;b<a;b++)d[b]=new N,c[b]=new N;let h=new N,o=new N,u=new N,m=new te,g=new te,y=new te,v=new N,w=new N;function E(b,L,P){h.fromArray(i,b*3),o.fromArray(i,L*3),u.fromArray(i,P*3),m.fromArray(r,b*2),g.fromArray(r,L*2),y.fromArray(r,P*2),o.sub(h),u.sub(h),g.sub(m),y.sub(m);let X=1/(g.x*y.y-y.x*g.y);!isFinite(X)||(v.copy(o).multiplyScalar(y.y).addScaledVector(u,-g.y).multiplyScalar(X),w.copy(u).multiplyScalar(g.x).addScaledVector(o,-y.x).multiplyScalar(X),d[b].add(v),d[L].add(v),d[P].add(v),c[b].add(w),c[L].add(w),c[P].add(w))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let b=0,L=_.length;b<L;++b){let P=_[b],X=P.start,D=P.count;for(let z=X,H=X+D;z<H;z+=3)E(n[z+0],n[z+1],n[z+2])}let M=new N,A=new N,I=new N,C=new N;function T(b){I.fromArray(s,b*3),C.copy(I);let L=d[b];M.copy(L),M.sub(I.multiplyScalar(I.dot(L))).normalize(),A.crossVectors(C,L);let X=A.dot(c[b])<0?-1:1;f[b*4]=M.x,f[b*4+1]=M.y,f[b*4+2]=M.z,f[b*4+3]=X}for(let b=0,L=_.length;b<L;++b){let P=_[b],X=P.start,D=P.count;for(let z=X,H=X+D;z<H;z+=3)T(n[z+0]),T(n[z+1]),T(n[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let o=0,u=n.count;o<u;o++)n.setXYZ(o,0,0,0);let i=new N,s=new N,r=new N,a=new N,f=new N,d=new N,c=new N,h=new N;if(e)for(let o=0,u=e.count;o<u;o+=3){let m=e.getX(o+0),g=e.getX(o+1),y=e.getX(o+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,m),f.fromBufferAttribute(n,g),d.fromBufferAttribute(n,y),a.add(c),f.add(c),d.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,f.x,f.y,f.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let o=0,u=t.count;o<u;o+=3)i.fromBufferAttribute(t,o+0),s.fromBufferAttribute(t,o+1),r.fromBufferAttribute(t,o+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(o+0,c.x,c.y,c.z),n.setXYZ(o+1,c.x,c.y,c.z),n.setXYZ(o+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let r=n[i].array,a=e.attributes[i],f=a.array,d=a.itemSize*t,c=Math.min(f.length,r.length-d);for(let h=0,o=d;h<c;h++,o++)r[o]=f[h]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,f){let d=a.array,c=a.itemSize,h=a.normalized,o=new d.constructor(f.length*c),u=0,m=0;for(let g=0,y=f.length;g<y;g++){a.isInterleavedBufferAttribute?u=f[g]*a.data.stride+a.offset:u=f[g]*c;for(let v=0;v<c;v++)o[m++]=d[u++]}return new Qe(o,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Be,n=this.index.array,i=this.attributes;for(let a in i){let f=i[a],d=e(f,n);t.setAttribute(a,d)}let s=this.morphAttributes;for(let a in s){let f=[],d=s[a];for(let c=0,h=d.length;c<h;c++){let o=d[c],u=e(o,n);f.push(u)}t.morphAttributes[a]=f}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,f=r.length;a<f;a++){let d=r[a];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let f=this.parameters;for(let d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let f in n){let d=n[f];e.data.attributes[f]=d.toJSON(e.data)}let i={},s=!1;for(let f in this.morphAttributes){let d=this.morphAttributes[f],c=[];for(let h=0,o=d.length;h<o;h++){let u=d[h];c.push(u.toJSON(e.data))}c.length>0&&(i[f]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let d in i){let c=i[d];this.setAttribute(d,c.clone(t))}let s=e.morphAttributes;for(let d in s){let c=[],h=s[d];for(let o=0,u=h.length;o<u;o++)c.push(h[o].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let d=0,c=r.length;d<c;d++){let h=r[d];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.prototype.isBufferGeometry=!0;var kf=new De,Zs=new Vn,Xu=new Un,xi=new N,yi=new N,vi=new N,ju=new N,$u=new N,Yu=new N,Co=new N,Ro=new N,Lo=new N,Io=new te,Do=new te,Po=new te,qu=new N,Fo=new N,ft=class extends qe{constructor(e=new Be,t=new on){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Xu.copy(n.boundingSphere),Xu.applyMatrix4(s),e.ray.intersectsSphere(Xu)===!1)||(kf.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(kf),n.boundingBox!==null&&Zs.intersectsBox(n.boundingBox)===!1))return;let r;if(n.isBufferGeometry){let a=n.index,f=n.attributes.position,d=n.morphAttributes.position,c=n.morphTargetsRelative,h=n.attributes.uv,o=n.attributes.uv2,u=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,y=u.length;g<y;g++){let v=u[g],w=i[v.materialIndex],E=Math.max(v.start,m.start),_=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let M=E,A=_;M<A;M+=3){let I=a.getX(M),C=a.getX(M+1),T=a.getX(M+2);r=ko(this,w,e,Zs,f,d,c,h,o,I,C,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let v=g,w=y;v<w;v+=3){let E=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);r=ko(this,i,e,Zs,f,d,c,h,o,E,_,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(i))for(let g=0,y=u.length;g<y;g++){let v=u[g],w=i[v.materialIndex],E=Math.max(v.start,m.start),_=Math.min(f.count,Math.min(v.start+v.count,m.start+m.count));for(let M=E,A=_;M<A;M+=3){let I=M,C=M+1,T=M+2;r=ko(this,w,e,Zs,f,d,c,h,o,I,C,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(f.count,m.start+m.count);for(let v=g,w=y;v<w;v+=3){let E=v,_=v+1,M=v+2;r=ko(this,i,e,Zs,f,d,c,h,o,E,_,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};ft.prototype.isMesh=!0;function fx(l,e,t,n,i,s,r,a){let f;if(e.side===rn?f=n.intersectTriangle(r,s,i,!0,a):f=n.intersectTriangle(i,s,r,e.side!==ls,a),f===null)return null;Fo.copy(a),Fo.applyMatrix4(l.matrixWorld);let d=t.ray.origin.distanceTo(Fo);return d<t.near||d>t.far?null:{distance:d,point:Fo.clone(),object:l}}function ko(l,e,t,n,i,s,r,a,f,d,c,h){xi.fromBufferAttribute(i,d),yi.fromBufferAttribute(i,c),vi.fromBufferAttribute(i,h);let o=l.morphTargetInfluences;if(s&&o){Co.set(0,0,0),Ro.set(0,0,0),Lo.set(0,0,0);for(let m=0,g=s.length;m<g;m++){let y=o[m],v=s[m];y!==0&&(ju.fromBufferAttribute(v,d),$u.fromBufferAttribute(v,c),Yu.fromBufferAttribute(v,h),r?(Co.addScaledVector(ju,y),Ro.addScaledVector($u,y),Lo.addScaledVector(Yu,y)):(Co.addScaledVector(ju.sub(xi),y),Ro.addScaledVector($u.sub(yi),y),Lo.addScaledVector(Yu.sub(vi),y)))}xi.add(Co),yi.add(Ro),vi.add(Lo)}l.isSkinnedMesh&&(l.boneTransform(d,xi),l.boneTransform(c,yi),l.boneTransform(h,vi));let u=fx(l,e,t,n,xi,yi,vi,qu);if(u){a&&(Io.fromBufferAttribute(a,d),Do.fromBufferAttribute(a,c),Po.fromBufferAttribute(a,h),u.uv=wt.getUV(qu,xi,yi,vi,Io,Do,Po,new te)),f&&(Io.fromBufferAttribute(f,d),Do.fromBufferAttribute(f,c),Po.fromBufferAttribute(f,h),u.uv2=wt.getUV(qu,xi,yi,vi,Io,Do,Po,new te));let m={a:d,b:c,c:h,normal:new N,materialIndex:0};wt.getNormal(xi,yi,vi,m.normal),u.face=m}return u}var vn=class extends Be{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let f=[],d=[],c=[],h=[],o=0,u=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(f),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2));function m(g,y,v,w,E,_,M,A,I,C,T){let b=_/I,L=M/C,P=_/2,X=M/2,D=A/2,z=I+1,H=C+1,B=0,$=0,j=new N;for(let K=0;K<H;K++){let ne=K*L-X;for(let Z=0;Z<z;Z++){let le=Z*b-P;j[g]=le*w,j[y]=ne*E,j[v]=D,d.push(j.x,j.y,j.z),j[g]=0,j[y]=0,j[v]=A>0?1:-1,c.push(j.x,j.y,j.z),h.push(Z/I),h.push(1-K/C),B+=1}}for(let K=0;K<C;K++)for(let ne=0;ne<I;ne++){let Z=o+ne+z*K,le=o+ne+z*(K+1),ce=o+(ne+1)+z*(K+1),de=o+(ne+1)+z*K;f.push(Z,le,de),f.push(le,ce,de),$+=6}a.addGroup(u,$,T),u+=$,o+=B}}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function yr(l){let e={};for(let t in l){e[t]={};for(let n in l[t]){let i=l[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(l){let e={};for(let t=0;t<l.length;t++){let n=yr(l[t]);for(let i in n)e[i]=n[i]}return e}var Fn={clone:yr,merge:Bt},dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends Tt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=dx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};pt.prototype.isShaderMaterial=!0;var hs=class extends qe{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};hs.prototype.isCamera=!0;var Et=class extends hs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let f=r.fullWidth,d=r.fullHeight;s+=r.offsetX*i/f,t-=r.offsetY*n/d,i*=r.width/f,n*=r.height/d}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};Et.prototype.isPerspectiveCamera=!0;var Qs=90,er=1,vr=class extends qe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new Et(Qs,er,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new N(1,0,0)),this.add(i);let s=new Et(Qs,er,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);let r=new Et(Qs,er,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new N(0,1,0)),this.add(r);let a=new Et(Qs,er,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new N(0,-1,0)),this.add(a);let f=new Et(Qs,er,e,t);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new N(0,0,1)),this.add(f);let d=new Et(Qs,er,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new N(0,0,-1)),this.add(d)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,r,a,f,d]=this.children,c=e.getRenderTarget(),h=e.toneMapping,o=e.xr.enabled;e.toneMapping=On,e.xr.enabled=!1;let u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,f),n.texture.generateMipmaps=u,e.setRenderTarget(n,5),e.render(t,d),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=o,n.texture.needsPMREMUpdate=!0}},Ci=class extends yt{constructor(e,t,n,i,s,r,a,f,d,c){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,i,s,r,a,f,d,c),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Ci.prototype.isCubeTexture=!0;var br=class extends dt{constructor(e,t={}){super(e,e,t);let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ci(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vn(5,5,5),s=new pt({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ti});s.uniforms.tEquirect.value=t;let r=new ft(i,s),a=t.minFilter;return t.minFilter===Ns&&(t.minFilter=_t),new vr(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}};br.prototype.isWebGLCubeRenderTarget=!0;var Ju=new N,mx=new N,gx=new Lt,mn=class{constructor(e=new N(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ju.subVectors(n,t).cross(mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(Ju),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gx.getNormalMatrix(e),i=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};mn.prototype.isPlane=!0;var tr=new Un,No=new N,fs=class{constructor(e=new mn,t=new mn,n=new mn,i=new mn,s=new mn,r=new mn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],a=n[3],f=n[4],d=n[5],c=n[6],h=n[7],o=n[8],u=n[9],m=n[10],g=n[11],y=n[12],v=n[13],w=n[14],E=n[15];return t[0].setComponents(a-i,h-f,g-o,E-y).normalize(),t[1].setComponents(a+i,h+f,g+o,E+y).normalize(),t[2].setComponents(a+s,h+d,g+u,E+v).normalize(),t[3].setComponents(a-s,h-d,g-u,E-v).normalize(),t[4].setComponents(a-r,h-c,g-m,E-w).normalize(),t[5].setComponents(a+r,h+c,g+m,E+w).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(No.x=i.normal.x>0?e.max.x:e.min.x,No.y=i.normal.y>0?e.max.y:e.min.y,No.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yp(){let l=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=l.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=l.requestAnimationFrame(i),e=!0)},stop:function(){l.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){l=s}}}function xx(l,e){let t=e.isWebGL2,n=new WeakMap;function i(d,c){let h=d.array,o=d.usage,u=l.createBuffer();l.bindBuffer(c,u),l.bufferData(c,h,o),d.onUploadCallback();let m;if(h instanceof Float32Array)m=5126;else if(h instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(h instanceof Int16Array)m=5122;else if(h instanceof Uint32Array)m=5125;else if(h instanceof Int32Array)m=5124;else if(h instanceof Int8Array)m=5120;else if(h instanceof Uint8Array)m=5121;else if(h instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version}}function s(d,c,h){let o=c.array,u=c.updateRange;l.bindBuffer(h,d),u.count===-1?l.bufferSubData(h,0,o):(t?l.bufferSubData(h,u.offset*o.BYTES_PER_ELEMENT,o,u.offset,u.count):l.bufferSubData(h,u.offset*o.BYTES_PER_ELEMENT,o.subarray(u.offset,u.offset+u.count)),u.count=-1)}function r(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);let c=n.get(d);c&&(l.deleteBuffer(c.buffer),n.delete(d))}function f(d,c){if(d.isGLBufferAttribute){let o=n.get(d);(!o||o.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);let h=n.get(d);h===void 0?n.set(d,i(d,c)):h.version<d.version&&(s(h.buffer,d,c),h.version=d.version)}return{get:r,remove:a,update:f}}var Ri=class extends Be{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,a=Math.floor(n),f=Math.floor(i),d=a+1,c=f+1,h=e/a,o=t/f,u=[],m=[],g=[],y=[];for(let v=0;v<c;v++){let w=v*o-r;for(let E=0;E<d;E++){let _=E*h-s;m.push(_,-w,0),g.push(0,0,1),y.push(E/a),y.push(1-v/f)}}for(let v=0;v<f;v++)for(let w=0;w<a;w++){let E=w+d*v,_=w+d*(v+1),M=w+1+d*(v+1),A=w+1+d*v;u.push(E,_,A),u.push(_,M,A)}this.setIndex(u),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(g,3)),this.setAttribute("uv",new Le(y,2))}static fromJSON(e){return new Ri(e.width,e.height,e.widthSegments,e.heightSegments)}},yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx="vec3 transformed = vec3( position );",Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ax=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ey=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ty=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iy=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,sy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ry=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,cy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,hy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,my=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,by=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ly=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jy=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$y=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,r0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,a0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,o0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,l0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,u0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,c0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,h0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,S0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,H0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ze={alphamap_fragment:yx,alphamap_pars_fragment:vx,alphatest_fragment:bx,alphatest_pars_fragment:_x,aomap_fragment:wx,aomap_pars_fragment:Sx,begin_vertex:Tx,beginnormal_vertex:Mx,bsdfs:Ex,bumpmap_pars_fragment:Ax,clipping_planes_fragment:Cx,clipping_planes_pars_fragment:Rx,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Ix,color_fragment:Dx,color_pars_fragment:Px,color_pars_vertex:Fx,color_vertex:kx,common:Nx,cube_uv_reflection_fragment:Ox,defaultnormal_vertex:zx,displacementmap_pars_vertex:Ux,displacementmap_vertex:Vx,emissivemap_fragment:Bx,emissivemap_pars_fragment:Gx,encodings_fragment:Hx,encodings_pars_fragment:Wx,envmap_fragment:Kx,envmap_common_pars_fragment:Xx,envmap_pars_fragment:jx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:ry,envmap_vertex:Yx,fog_vertex:qx,fog_pars_vertex:Jx,fog_fragment:Zx,fog_pars_fragment:Qx,gradientmap_pars_fragment:ey,lightmap_fragment:ty,lightmap_pars_fragment:ny,lights_lambert_vertex:iy,lights_pars_begin:sy,lights_toon_fragment:ay,lights_toon_pars_fragment:oy,lights_phong_fragment:ly,lights_phong_pars_fragment:uy,lights_physical_fragment:cy,lights_physical_pars_fragment:hy,lights_fragment_begin:fy,lights_fragment_maps:dy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:yy,map_fragment:vy,map_pars_fragment:by,map_particle_fragment:_y,map_particle_pars_fragment:wy,metalnessmap_fragment:Sy,metalnessmap_pars_fragment:Ty,morphcolor_vertex:My,morphnormal_vertex:Ey,morphtarget_pars_vertex:Ay,morphtarget_vertex:Cy,normal_fragment_begin:Ry,normal_fragment_maps:Ly,normal_pars_fragment:Iy,normal_pars_vertex:Dy,normal_vertex:Py,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:ky,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Oy,output_fragment:zy,packing:Uy,premultiplied_alpha_fragment:Vy,project_vertex:By,dithering_fragment:Gy,dithering_pars_fragment:Hy,roughnessmap_fragment:Wy,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:jy,shadowmap_vertex:$y,shadowmask_pars_fragment:Yy,skinbase_vertex:qy,skinning_pars_vertex:Jy,skinning_vertex:Zy,skinnormal_vertex:Qy,specularmap_fragment:e0,specularmap_pars_fragment:t0,tonemapping_fragment:n0,tonemapping_pars_fragment:i0,transmission_fragment:s0,transmission_pars_fragment:r0,uv_pars_fragment:a0,uv_pars_vertex:o0,uv_vertex:l0,uv2_pars_fragment:u0,uv2_pars_vertex:c0,uv2_vertex:h0,worldpos_vertex:f0,background_vert:d0,background_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:x0,depth_frag:y0,distanceRGBA_vert:v0,distanceRGBA_frag:b0,equirect_vert:_0,equirect_frag:w0,linedashed_vert:S0,linedashed_frag:T0,meshbasic_vert:M0,meshbasic_frag:E0,meshlambert_vert:A0,meshlambert_frag:C0,meshmatcap_vert:R0,meshmatcap_frag:L0,meshnormal_vert:I0,meshnormal_frag:D0,meshphong_vert:P0,meshphong_frag:F0,meshphysical_vert:k0,meshphysical_frag:N0,meshtoon_vert:O0,meshtoon_frag:z0,points_vert:U0,points_frag:V0,shadow_vert:B0,shadow_frag:G0,sprite_vert:H0,sprite_frag:W0},Ae={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Lt},uv2Transform:{value:new Lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}}},Cn={basic:{uniforms:Bt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Bt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Bt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Bt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Bt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Bt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Bt([Ae.points,Ae.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Bt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Bt([Ae.common,Ae.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Bt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Bt([Ae.sprite,Ae.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},cube:{uniforms:Bt([Ae.envmap,{opacity:{value:1}}]),vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Bt([Ae.common,Ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Bt([Ae.lights,Ae.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Cn.physical={uniforms:Bt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new te(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};function K0(l,e,t,n,i,s){let r=new Te(0),a=i===!0?0:1,f,d,c=null,h=0,o=null;function u(g,y){let v=!1,w=y.isScene===!0?y.background:null;w&&w.isTexture&&(w=e.get(w));let E=l.xr,_=E.getSession&&E.getSession();_&&_.environmentBlendMode==="additive"&&(w=null),w===null?m(r,a):w&&w.isColor&&(m(w,1),v=!0),(l.autoClear||v)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Or)?(d===void 0&&(d=new ft(new vn(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:yr(Cn.cube.uniforms),vertexShader:Cn.cube.vertexShader,fragmentShader:Cn.cube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(M,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(c!==w||h!==w.version||o!==l.toneMapping)&&(d.material.needsUpdate=!0,c=w,h=w.version,o=l.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new ft(new Ri(2,2),new pt({name:"BackgroundMaterial",uniforms:yr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(c!==w||h!==w.version||o!==l.toneMapping)&&(f.material.needsUpdate=!0,c=w,h=w.version,o=l.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null))}function m(g,y){t.buffers.color.setClear(g.r,g.g,g.b,y,s)}return{getClearColor:function(){return r},setClearColor:function(g,y=1){r.set(g),a=y,m(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,m(r,a)},render:u}}function X0(l,e,t,n){let i=l.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},f=y(null),d=f,c=!1;function h(D,z,H,B,$){let j=!1;if(r){let K=g(B,H,z);d!==K&&(d=K,u(d.object)),j=v(D,B,H,$),j&&w(D,B,H,$)}else{let K=z.wireframe===!0;(d.geometry!==B.id||d.program!==H.id||d.wireframe!==K)&&(d.geometry=B.id,d.program=H.id,d.wireframe=K,j=!0)}$!==null&&t.update($,34963),(j||c)&&(c=!1,C(D,z,H,B),$!==null&&l.bindBuffer(34963,t.get($).buffer))}function o(){return n.isWebGL2?l.createVertexArray():s.createVertexArrayOES()}function u(D){return n.isWebGL2?l.bindVertexArray(D):s.bindVertexArrayOES(D)}function m(D){return n.isWebGL2?l.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,z,H){let B=H.wireframe===!0,$=a[D.id];$===void 0&&($={},a[D.id]=$);let j=$[z.id];j===void 0&&(j={},$[z.id]=j);let K=j[B];return K===void 0&&(K=y(o()),j[B]=K),K}function y(D){let z=[],H=[],B=[];for(let $=0;$<i;$++)z[$]=0,H[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:B,object:D,attributes:{},index:null}}function v(D,z,H,B){let $=d.attributes,j=z.attributes,K=0,ne=H.getAttributes();for(let Z in ne)if(ne[Z].location>=0){let ce=$[Z],de=j[Z];if(de===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),ce===void 0||ce.attribute!==de||de&&ce.data!==de.data)return!0;K++}return d.attributesNum!==K||d.index!==B}function w(D,z,H,B){let $={},j=z.attributes,K=0,ne=H.getAttributes();for(let Z in ne)if(ne[Z].location>=0){let ce=j[Z];ce===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));let de={};de.attribute=ce,ce&&ce.data&&(de.data=ce.data),$[Z]=de,K++}d.attributes=$,d.attributesNum=K,d.index=B}function E(){let D=d.newAttributes;for(let z=0,H=D.length;z<H;z++)D[z]=0}function _(D){M(D,0)}function M(D,z){let H=d.newAttributes,B=d.enabledAttributes,$=d.attributeDivisors;H[D]=1,B[D]===0&&(l.enableVertexAttribArray(D),B[D]=1),$[D]!==z&&((n.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),$[D]=z)}function A(){let D=d.newAttributes,z=d.enabledAttributes;for(let H=0,B=z.length;H<B;H++)z[H]!==D[H]&&(l.disableVertexAttribArray(H),z[H]=0)}function I(D,z,H,B,$,j){n.isWebGL2===!0&&(H===5124||H===5125)?l.vertexAttribIPointer(D,z,H,$,j):l.vertexAttribPointer(D,z,H,B,$,j)}function C(D,z,H,B){if(n.isWebGL2===!1&&(D.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();let $=B.attributes,j=H.getAttributes(),K=z.defaultAttributeValues;for(let ne in j){let Z=j[ne];if(Z.location>=0){let le=$[ne];if(le===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),le!==void 0){let ce=le.normalized,de=le.itemSize,Q=t.get(le);if(Q===void 0)continue;let Me=Q.buffer,ve=Q.type,Ve=Q.bytesPerElement;if(le.isInterleavedBufferAttribute){let oe=le.data,Ie=oe.stride,ie=le.offset;if(oe.isInstancedInterleavedBuffer){for(let se=0;se<Z.locationSize;se++)M(Z.location+se,oe.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<Z.locationSize;se++)_(Z.location+se);l.bindBuffer(34962,Me);for(let se=0;se<Z.locationSize;se++)I(Z.location+se,de/Z.locationSize,ve,ce,Ie*Ve,(ie+de/Z.locationSize*se)*Ve)}else{if(le.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)M(Z.location+oe,le.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let oe=0;oe<Z.locationSize;oe++)_(Z.location+oe);l.bindBuffer(34962,Me);for(let oe=0;oe<Z.locationSize;oe++)I(Z.location+oe,de/Z.locationSize,ve,ce,de*Ve,de/Z.locationSize*oe*Ve)}}else if(K!==void 0){let ce=K[ne];if(ce!==void 0)switch(ce.length){case 2:l.vertexAttrib2fv(Z.location,ce);break;case 3:l.vertexAttrib3fv(Z.location,ce);break;case 4:l.vertexAttrib4fv(Z.location,ce);break;default:l.vertexAttrib1fv(Z.location,ce)}}}}A()}function T(){P();for(let D in a){let z=a[D];for(let H in z){let B=z[H];for(let $ in B)m(B[$].object),delete B[$];delete z[H]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;let z=a[D.id];for(let H in z){let B=z[H];for(let $ in B)m(B[$].object),delete B[$];delete z[H]}delete a[D.id]}function L(D){for(let z in a){let H=a[z];if(H[D.id]===void 0)continue;let B=H[D.id];for(let $ in B)m(B[$].object),delete B[$];delete H[D.id]}}function P(){X(),c=!0,d!==f&&(d=f,u(d.object))}function X(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:h,reset:P,resetDefaultState:X,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:L,initAttributes:E,enableAttribute:_,disableUnusedAttributes:A}}function j0(l,e,t,n){let i=n.isWebGL2,s;function r(d){s=d}function a(d,c){l.drawArrays(s,d,c),t.update(c,s,1)}function f(d,c,h){if(h===0)return;let o,u;if(i)o=l,u="drawArraysInstanced";else if(o=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",o===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}o[u](s,d,c,h),t.update(c,s,h)}this.setMode=r,this.render=a,this.renderInstances=f}function $0(l,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=l.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&l instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",f=s(a);f!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",f,"instead."),a=f);let d=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=l.getParameter(34930),o=l.getParameter(35660),u=l.getParameter(3379),m=l.getParameter(34076),g=l.getParameter(34921),y=l.getParameter(36347),v=l.getParameter(36348),w=l.getParameter(36349),E=o>0,_=r||e.has("OES_texture_float"),M=E&&_,A=r?l.getParameter(36183):0;return{isWebGL2:r,drawBuffers:d,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:o,maxTextureSize:u,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:A}}function Y0(l){let e=this,t=null,n=0,i=!1,s=!1,r=new mn,a=new Lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(h,o,u){let m=h.length!==0||o||n!==0||i;return i=o,t=c(h,u,0),n=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,d()},this.setState=function(h,o,u){let m=h.clippingPlanes,g=h.clipIntersection,y=h.clipShadows,v=l.get(h);if(!i||m===null||m.length===0||s&&!y)s?c(null):d();else{let w=s?0:n,E=w*4,_=v.clippingState||null;f.value=_,_=c(m,o,E,u);for(let M=0;M!==E;++M)_[M]=t[M];v.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,o,u,m){let g=h!==null?h.length:0,y=null;if(g!==0){if(y=f.value,m!==!0||y===null){let v=u+g*4,w=o.matrixWorldInverse;a.getNormalMatrix(w),(y===null||y.length<v)&&(y=new Float32Array(v));for(let E=0,_=u;E!==g;++E,_+=4)r.copy(h[E]).applyMatrix4(w,a),r.normal.toArray(y,_),y[_+3]=r.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}}function q0(l){let e=new WeakMap;function t(r,a){return a===fa?r.mapping=Ti:a===da&&(r.mapping=Mi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){let a=r.mapping;if(a===fa||a===da)if(e.has(r)){let f=e.get(r).texture;return t(f,r.mapping)}else{let f=r.image;if(f&&f.height>0){let d=new br(f.height/2);return d.fromEquirectangularTexture(l,r),e.set(r,d),r.addEventListener("dispose",i),t(d.texture,r.mapping)}else return null}}return r}function i(r){let a=r.target;a.removeEventListener("dispose",i);let f=e.get(a);f!==void 0&&(e.delete(a),f.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Rn=class extends hs{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,a=i+t,f=i-t;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,r=s+d*this.view.width,a-=c*this.view.offsetY,f=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Rn.prototype.isOrthographicCamera=!0;var ur=4,Nf=[.125,.215,.35,.446,.526,.582],es=20,Zu=new Rn,Of=new Te,Qu=null,Zi=(1+Math.sqrt(5))/2,nr=1/Zi,zf=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Zi,nr),new N(0,Zi,-nr),new N(nr,0,Zi),new N(-nr,0,Zi),new N(Zi,nr,0),new N(-Zi,nr,0)],_a=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qu=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu),e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:fr,format:sn,encoding:ii,depthBuffer:!1},i=Uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J0(s)),this._blurMaterial=Z0(s,e,t)}return i}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Zu)}_sceneToCubeUV(e,t,n,i){let a=new Et(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,o=c.toneMapping;c.getClearColor(Of),c.toneMapping=On,c.autoClear=!1;let u=new on({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new ft(new vn,u),g=!1,y=e.background;y?y.isColor&&(u.color.copy(y),e.background=null,g=!0):(u.color.copy(Of),g=!0);for(let v=0;v<6;v++){let w=v%3;w===0?(a.up.set(0,f[v],0),a.lookAt(d[v],0,0)):w===1?(a.up.set(0,0,f[v]),a.lookAt(0,d[v],0)):(a.up.set(0,f[v],0),a.lookAt(0,0,d[v]));let E=this._cubeSize;Oo(i,w*E,v>2?E:0,E,E),c.setRenderTarget(i),g&&c.render(m,a),c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=o,c.autoClear=h,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ti||e.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());let s=i?this._cubemapMaterial:this._equirectMaterial,r=new ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let f=this._cubeSize;Oo(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(r,Zu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=zf[(i-1)%zf.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){let f=this._renderer,d=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,h=new ft(this._lodPlanes[i],d),o=d.uniforms,u=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*es-1),g=s/m,y=isFinite(s)?1+Math.floor(c*g):es;y>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${es}`);let v=[],w=0;for(let I=0;I<es;++I){let C=I/g,T=Math.exp(-C*C/2);v.push(T),I===0?w+=T:I<y&&(w+=2*T)}for(let I=0;I<v.length;I++)v[I]=v[I]/w;o.envMap.value=e.texture,o.samples.value=y,o.weights.value=v,o.latitudinal.value=r==="latitudinal",a&&(o.poleAxis.value=a);let{_lodMax:E}=this;o.dTheta.value=m,o.mipInt.value=E-n;let _=this._sizeLods[i],M=3*_*(i>E-ur?i-E+ur:0),A=4*(this._cubeSize-_);Oo(t,M,A,3*_,2*_),f.setRenderTarget(t),f.render(h,Zu)}};function J0(l){let e=[],t=[],n=[],i=l,s=l-ur+1+Nf.length;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let f=1/a;r>l-ur?f=Nf[r-l+ur-1]:r===0&&(f=0),n.push(f);let d=1/(a-2),c=-d,h=1+d,o=[c,c,h,c,h,h,c,c,h,h,c,h],u=6,m=6,g=3,y=2,v=1,w=new Float32Array(g*m*u),E=new Float32Array(y*m*u),_=new Float32Array(v*m*u);for(let A=0;A<u;A++){let I=A%3*2/3-1,C=A>2?0:-1,T=[I,C,0,I+2/3,C,0,I+2/3,C+1,0,I,C,0,I+2/3,C+1,0,I,C+1,0];w.set(T,g*m*A),E.set(o,y*m*A);let b=[A,A,A,A,A,A];_.set(b,v*m*A)}let M=new Be;M.setAttribute("position",new Qe(w,g)),M.setAttribute("uv",new Qe(E,y)),M.setAttribute("faceIndex",new Qe(_,v)),e.push(M),i>ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uf(l,e,t){let n=new dt(l,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(l,e,t,n,i){l.viewport.set(e,t,n,i),l.scissor.set(e,t,n,i)}function Z0(l,e,t){let n=new Float32Array(es),i=new N(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Vf(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Bf(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q0(l){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let f=a.mapping,d=f===fa||f===da,c=f===Ti||f===Mi;if(d||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new _a(l)),h=d?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(d&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new _a(l));let o=d?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,o),a.addEventListener("dispose",s),o.texture}else return null}}}return a}function i(a){let f=0,d=6;for(let c=0;c<d;c++)a[c]!==void 0&&f++;return f===d}function s(a){let f=a.target;f.removeEventListener("dispose",s);let d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function tv(l){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=l.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nv(l,e,t,n){let i={},s=new WeakMap;function r(h){let o=h.target;o.index!==null&&e.remove(o.index);for(let m in o.attributes)e.remove(o.attributes[m]);o.removeEventListener("dispose",r),delete i[o.id];let u=s.get(o);u&&(e.remove(u),s.delete(o)),n.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,t.memory.geometries--}function a(h,o){return i[o.id]===!0||(o.addEventListener("dispose",r),i[o.id]=!0,t.memory.geometries++),o}function f(h){let o=h.attributes;for(let m in o)e.update(o[m],34962);let u=h.morphAttributes;for(let m in u){let g=u[m];for(let y=0,v=g.length;y<v;y++)e.update(g[y],34962)}}function d(h){let o=[],u=h.index,m=h.attributes.position,g=0;if(u!==null){let w=u.array;g=u.version;for(let E=0,_=w.length;E<_;E+=3){let M=w[E+0],A=w[E+1],I=w[E+2];o.push(M,A,A,I,I,M)}}else{let w=m.array;g=m.version;for(let E=0,_=w.length/3-1;E<_;E+=3){let M=E+0,A=E+1,I=E+2;o.push(M,A,A,I,I,M)}}let y=new(jp(o)?xr:gr)(o,1);y.version=g;let v=s.get(h);v&&e.remove(v),s.set(h,y)}function c(h){let o=s.get(h);if(o){let u=h.index;u!==null&&o.version<u.version&&d(h)}else d(h);return s.get(h)}return{get:a,update:f,getWireframeAttribute:c}}function iv(l,e,t,n){let i=n.isWebGL2,s;function r(o){s=o}let a,f;function d(o){a=o.type,f=o.bytesPerElement}function c(o,u){l.drawElements(s,u,a,o*f),t.update(u,s,1)}function h(o,u,m){if(m===0)return;let g,y;if(i)g=l,y="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,u,a,o*f,m),t.update(u,s,m)}this.setMode=r,this.setIndex=d,this.render=c,this.renderInstances=h}function sv(l){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rv(l,e){return l[0]-e[0]}function av(l,e){return Math.abs(e[1])-Math.abs(l[1])}function ec(l,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),l.divideScalar(t)}function ov(l,e,t){let n={},i=new Float32Array(8),s=new WeakMap,r=new ot,a=[];for(let d=0;d<8;d++)a[d]=[d,0];function f(d,c,h,o){let u=d.morphTargetInfluences;if(e.isWebGL2===!0){let m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0,y=s.get(c);if(y===void 0||y.count!==g){let z=function(){X.dispose(),s.delete(c),c.removeEventListener("dispose",z)};y!==void 0&&y.texture.dispose();let E=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],I=c.morphAttributes.normal||[],C=c.morphAttributes.color||[],T=0;E===!0&&(T=1),_===!0&&(T=2),M===!0&&(T=3);let b=c.attributes.position.count*T,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let P=new Float32Array(b*L*4*g),X=new Ai(P,b,L,g);X.type=Qn,X.needsUpdate=!0;let D=T*4;for(let H=0;H<g;H++){let B=A[H],$=I[H],j=C[H],K=b*L*4*H;for(let ne=0;ne<B.count;ne++){let Z=ne*D;E===!0&&(r.fromBufferAttribute(B,ne),B.normalized===!0&&ec(r,B),P[K+Z+0]=r.x,P[K+Z+1]=r.y,P[K+Z+2]=r.z,P[K+Z+3]=0),_===!0&&(r.fromBufferAttribute($,ne),$.normalized===!0&&ec(r,$),P[K+Z+4]=r.x,P[K+Z+5]=r.y,P[K+Z+6]=r.z,P[K+Z+7]=0),M===!0&&(r.fromBufferAttribute(j,ne),j.normalized===!0&&ec(r,j),P[K+Z+8]=r.x,P[K+Z+9]=r.y,P[K+Z+10]=r.z,P[K+Z+11]=j.itemSize===4?r.w:1)}}y={count:g,texture:X,size:new te(b,L)},s.set(c,y),c.addEventListener("dispose",z)}let v=0;for(let E=0;E<u.length;E++)v+=u[E];let w=c.morphTargetsRelative?1:1-v;o.getUniforms().setValue(l,"morphTargetBaseInfluence",w),o.getUniforms().setValue(l,"morphTargetInfluences",u),o.getUniforms().setValue(l,"morphTargetsTexture",y.texture,t),o.getUniforms().setValue(l,"morphTargetsTextureSize",y.size)}else{let m=u===void 0?0:u.length,g=n[c.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[c.id]=g}for(let _=0;_<m;_++){let M=g[_];M[0]=_,M[1]=u[_]}g.sort(av);for(let _=0;_<8;_++)_<m&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(rv);let y=c.morphAttributes.position,v=c.morphAttributes.normal,w=0;for(let _=0;_<8;_++){let M=a[_],A=M[0],I=M[1];A!==Number.MAX_SAFE_INTEGER&&I?(y&&c.getAttribute("morphTarget"+_)!==y[A]&&c.setAttribute("morphTarget"+_,y[A]),v&&c.getAttribute("morphNormal"+_)!==v[A]&&c.setAttribute("morphNormal"+_,v[A]),i[_]=I,w+=I):(y&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),v&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),i[_]=0)}let E=c.morphTargetsRelative?1:1-w;o.getUniforms().setValue(l,"morphTargetBaseInfluence",E),o.getUniforms().setValue(l,"morphTargetInfluences",i)}}return{update:f}}function lv(l,e,t,n){let i=new WeakMap;function s(f){let d=n.render.frame,c=f.geometry,h=e.get(f,c);return i.get(h)!==d&&(e.update(h),i.set(h,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",a)===!1&&f.addEventListener("dispose",a),t.update(f.instanceMatrix,34962),f.instanceColor!==null&&t.update(f.instanceColor,34962)),h}function r(){i=new WeakMap}function a(f){let d=f.target;d.removeEventListener("dispose",a),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:r}}var qp=new yt,Jp=new Ai,Zp=new cs,Qp=new Ci,Gf=[],Hf=[],Wf=new Float32Array(16),Kf=new Float32Array(9),Xf=new Float32Array(4);function zr(l,e,t){let n=l[0];if(n<=0||n>0)return l;let i=e*t,s=Gf[i];if(s===void 0&&(s=new Float32Array(i),Gf[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,l[r].toArray(s,a)}return s}function jt(l,e){if(l.length!==e.length)return!1;for(let t=0,n=l.length;t<n;t++)if(l[t]!==e[t])return!1;return!0}function $t(l,e){for(let t=0,n=e.length;t<n;t++)l[t]=e[t]}function uu(l,e){let t=Hf[e];t===void 0&&(t=new Int32Array(e),Hf[e]=t);for(let n=0;n!==e;++n)t[n]=l.allocateTextureUnit();return t}function uv(l,e){let t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function cv(l,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;l.uniform2fv(this.addr,e),$t(t,e)}}function hv(l,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;l.uniform3fv(this.addr,e),$t(t,e)}}function fv(l,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;l.uniform4fv(this.addr,e),$t(t,e)}}function dv(l,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Xf.set(n),l.uniformMatrix2fv(this.addr,!1,Xf),$t(t,n)}}function pv(l,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Kf.set(n),l.uniformMatrix3fv(this.addr,!1,Kf),$t(t,n)}}function mv(l,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Wf.set(n),l.uniformMatrix4fv(this.addr,!1,Wf),$t(t,n)}}function gv(l,e){let t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function xv(l,e){let t=this.cache;jt(t,e)||(l.uniform2iv(this.addr,e),$t(t,e))}function yv(l,e){let t=this.cache;jt(t,e)||(l.uniform3iv(this.addr,e),$t(t,e))}function vv(l,e){let t=this.cache;jt(t,e)||(l.uniform4iv(this.addr,e),$t(t,e))}function bv(l,e){let t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function _v(l,e){let t=this.cache;jt(t,e)||(l.uniform2uiv(this.addr,e),$t(t,e))}function wv(l,e){let t=this.cache;jt(t,e)||(l.uniform3uiv(this.addr,e),$t(t,e))}function Sv(l,e){let t=this.cache;jt(t,e)||(l.uniform4uiv(this.addr,e),$t(t,e))}function Tv(l,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||qp,i)}function Mv(l,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zp,i)}function Ev(l,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qp,i)}function Av(l,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jp,i)}function Cv(l){switch(l){case 5126:return uv;case 35664:return cv;case 35665:return hv;case 35666:return fv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return yv;case 35669:case 35673:return vv;case 5125:return bv;case 36294:return _v;case 36295:return wv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Av}}function Rv(l,e){l.uniform1fv(this.addr,e)}function Lv(l,e){let t=zr(e,this.size,2);l.uniform2fv(this.addr,t)}function Iv(l,e){let t=zr(e,this.size,3);l.uniform3fv(this.addr,t)}function Dv(l,e){let t=zr(e,this.size,4);l.uniform4fv(this.addr,t)}function Pv(l,e){let t=zr(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function Fv(l,e){let t=zr(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function kv(l,e){let t=zr(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function Nv(l,e){l.uniform1iv(this.addr,e)}function Ov(l,e){l.uniform2iv(this.addr,e)}function zv(l,e){l.uniform3iv(this.addr,e)}function Uv(l,e){l.uniform4iv(this.addr,e)}function Vv(l,e){l.uniform1uiv(this.addr,e)}function Bv(l,e){l.uniform2uiv(this.addr,e)}function Gv(l,e){l.uniform3uiv(this.addr,e)}function Hv(l,e){l.uniform4uiv(this.addr,e)}function Wv(l,e,t){let n=e.length,i=uu(t,n);l.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||qp,i[s])}function Kv(l,e,t){let n=e.length,i=uu(t,n);l.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Zp,i[s])}function Xv(l,e,t){let n=e.length,i=uu(t,n);l.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Qp,i[s])}function jv(l,e,t){let n=e.length,i=uu(t,n);l.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Jp,i[s])}function $v(l){switch(l){case 5126:return Rv;case 35664:return Lv;case 35665:return Iv;case 35666:return Dv;case 35674:return Pv;case 35675:return Fv;case 35676:return kv;case 5124:case 35670:return Nv;case 35667:case 35671:return Ov;case 35668:case 35672:return zv;case 35669:case 35673:return Uv;case 5125:return Vv;case 36294:return Bv;case 36295:return Gv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return jv}}function Yv(l,e,t){this.id=l,this.addr=t,this.cache=[],this.setValue=Cv(e.type)}function qv(l,e,t){this.id=l,this.addr=t,this.cache=[],this.size=e.size,this.setValue=$v(e.type)}function em(l){this.id=l,this.seq=[],this.map={}}em.prototype.setValue=function(l,e,t){let n=this.seq;for(let i=0,s=n.length;i!==s;++i){let r=n[i];r.setValue(l,e[r.id],t)}};var tc=/(\w+)(\])?(\[|\.)?/g;function jf(l,e){l.seq.push(e),l.map[e.id]=e}function Jv(l,e,t){let n=l.name,i=n.length;for(tc.lastIndex=0;;){let s=tc.exec(n),r=tc.lastIndex,a=s[1],f=s[2]==="]",d=s[3];if(f&&(a=a|0),d===void 0||d==="["&&r+2===i){jf(t,d===void 0?new Yv(a,l,e):new qv(a,l,e));break}else{let h=t.map[a];h===void 0&&(h=new em(a),jf(t,h)),t=h}}}function Si(l,e){this.seq=[],this.map={};let t=l.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=l.getActiveUniform(e,n),s=l.getUniformLocation(e,i.name);Jv(i,s,this)}}Si.prototype.setValue=function(l,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(l,t,n)};Si.prototype.setOptional=function(l,e,t){let n=e[t];n!==void 0&&this.setValue(l,t,n)};Si.upload=function(l,e,t,n){for(let i=0,s=e.length;i!==s;++i){let r=e[i],a=t[r.id];a.needsUpdate!==!1&&r.setValue(l,a.value,n)}};Si.seqWithValue=function(l,e){let t=[];for(let n=0,i=l.length;n!==i;++n){let s=l[n];s.id in e&&t.push(s)}return t};function $f(l,e,t){let n=l.createShader(e);return l.shaderSource(n,t),l.compileShader(n),n}var Zv=0;function Qv(l,e){let t=l.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++)n.push(r+1+": "+t[r]);return n.join(`
`)}function eb(l){switch(l){case ii:return["Linear","( value )"];case gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function Yf(l,e,t){let n=l.getShaderParameter(e,35713),i=l.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let r=parseInt(s[0]);return t.toUpperCase()+`

`+i+`

`+Qv(l.getShaderSource(e),r)}else return i}function tb(l,e){let t=eb(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function nb(l,e){let t;switch(e){case yp:t="Linear";break;case vp:t="Reinhard";break;case bp:t="OptimizedCineon";break;case _p:t="ACESFilmic";break;case wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ib(l){return[l.extensionDerivatives||!!l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ra).join(`
`)}function sb(l){let e=[];for(let t in l){let n=l[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rb(l,e){let t={},n=l.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=l.getActiveAttrib(e,i),r=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:l.getAttribLocation(e,r),locationSize:a}}return t}function ra(l){return l!==""}function qf(l,e){return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jf(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(l){return l.replace(ab,ob)}function ob(l,e){let t=Ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Uc(t)}var lb=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(l){return l.replace(ub,tm).replace(lb,cb)}function cb(l,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),tm(l,e,t,n)}function tm(l,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qf(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hb(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function fb(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Ti:case Mi:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function db(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function pb(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case no:e="ENVMAP_BLENDING_MULTIPLY";break;case gp:e="ENVMAP_BLENDING_MIX";break;case xp:e="ENVMAP_BLENDING_ADD";break}return e}function mb(l){let e=l.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gb(l,e,t,n){let i=l.getContext(),s=t.defines,r=t.vertexShader,a=t.fragmentShader,f=hb(t),d=fb(t),c=db(t),h=pb(t),o=mb(t),u=t.isWebGL2?"":ib(t),m=sb(s),g=i.createProgram(),y,v,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[m].filter(ra).join(`
`),y.length>0&&(y+=`
`),v=[u,m].filter(ra).join(`
`),v.length>0&&(v+=`
`)):(y=[Qf(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),v=[u,Qf(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",o?"#define CUBEUV_TEXEL_WIDTH "+o.texelWidth:"",o?"#define CUBEUV_TEXEL_HEIGHT "+o.texelHeight:"",o?"#define CUBEUV_MAX_MIP "+o.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ze.tonemapping_pars_fragment:"",t.toneMapping!==On?nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.encodings_pars_fragment,tb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),r=Uc(r),r=qf(r,t),r=Jf(r,t),a=Uc(a),a=qf(a,t),a=Jf(a,t),r=Zf(r),a=Zf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=w+y+r,_=w+v+a,M=$f(i,35633,E),A=$f(i,35632,_);if(i.attachShader(g,M),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),l.debug.checkShaderErrors){let T=i.getProgramInfoLog(g).trim(),b=i.getShaderInfoLog(M).trim(),L=i.getShaderInfoLog(A).trim(),P=!0,X=!0;if(i.getProgramParameter(g,35714)===!1){P=!1;let D=Yf(i,M,"vertex"),z=Yf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+T+`
`+D+`
`+z)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(b===""||L==="")&&(X=!1);X&&(this.diagnostics={runnable:P,programLog:T,vertexShader:{log:b,prefix:y},fragmentShader:{log:L,prefix:v}})}i.deleteShader(M),i.deleteShader(A);let I;this.getUniforms=function(){return I===void 0&&(I=new Si(i,g)),I};let C;return this.getAttributes=function(){return C===void 0&&(C=rb(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Zv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}var xb=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let n=new Bc(e);t.set(e,n)}return t.get(e)}},Bc=class{constructor(e){this.id=xb++,this.code=e,this.usedTimes=0}};function yb(l,e,t,n,i,s,r){let a=new mr,f=new Vc,d=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,o=i.vertexTextures,u=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(C,T,b,L,P){let X=L.fog,D=P.geometry,z=C.isMeshStandardMaterial?L.environment:null,H=(C.isMeshStandardMaterial?t:e).get(C.envMap||z),B=!!H&&H.mapping===Or?H.image.height:null,$=m[C.type];C.precision!==null&&(u=i.getMaxPrecision(C.precision),u!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",u,"instead."));let j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,K=j!==void 0?j.length:0,ne=0;D.morphAttributes.position!==void 0&&(ne=1),D.morphAttributes.normal!==void 0&&(ne=2),D.morphAttributes.color!==void 0&&(ne=3);let Z,le,ce,de;if($){let oe=Cn[$];Z=oe.vertexShader,le=oe.fragmentShader}else Z=C.vertexShader,le=C.fragmentShader,f.update(C),ce=f.getVertexShaderID(C),de=f.getFragmentShaderID(C);let Q=l.getRenderTarget(),Me=C.alphaTest>0,ve=C.clearcoat>0;return{isWebGL2:c,shaderID:$,shaderName:C.type,vertexShader:Z,fragmentShader:le,defines:C.defines,customVertexShaderID:ce,customFragmentShaderID:de,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:u,instancing:P.isInstancedMesh===!0,instancingColor:P.isInstancedMesh===!0&&P.instanceColor!==null,supportsVertexTextures:o,outputEncoding:Q===null?l.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:ii,map:!!C.map,matcap:!!C.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:B,lightMap:!!C.lightMap,aoMap:!!C.aoMap,emissiveMap:!!C.emissiveMap,bumpMap:!!C.bumpMap,normalMap:!!C.normalMap,objectSpaceNormalMap:C.normalMapType===Wp,tangentSpaceNormalMap:C.normalMapType===Os,decodeVideoTexture:!!C.map&&C.map.isVideoTexture===!0&&C.map.encoding===gt,clearcoat:ve,clearcoatMap:ve&&!!C.clearcoatMap,clearcoatRoughnessMap:ve&&!!C.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!C.clearcoatNormalMap,displacementMap:!!C.displacementMap,roughnessMap:!!C.roughnessMap,metalnessMap:!!C.metalnessMap,specularMap:!!C.specularMap,specularIntensityMap:!!C.specularIntensityMap,specularColorMap:!!C.specularColorMap,opaque:C.transparent===!1&&C.blending===is,alphaMap:!!C.alphaMap,alphaTest:Me,gradientMap:!!C.gradientMap,sheen:C.sheen>0,sheenColorMap:!!C.sheenColorMap,sheenRoughnessMap:!!C.sheenRoughnessMap,transmission:C.transmission>0,transmissionMap:!!C.transmissionMap,thicknessMap:!!C.thicknessMap,combine:C.combine,vertexTangents:!!C.normalMap&&!!D.attributes.tangent,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!C.map||!!C.bumpMap||!!C.normalMap||!!C.specularMap||!!C.alphaMap||!!C.emissiveMap||!!C.roughnessMap||!!C.metalnessMap||!!C.clearcoatMap||!!C.clearcoatRoughnessMap||!!C.clearcoatNormalMap||!!C.displacementMap||!!C.transmissionMap||!!C.thicknessMap||!!C.specularIntensityMap||!!C.specularColorMap||!!C.sheenColorMap||!!C.sheenRoughnessMap,uvsVertexOnly:!(!!C.map||!!C.bumpMap||!!C.normalMap||!!C.specularMap||!!C.alphaMap||!!C.emissiveMap||!!C.roughnessMap||!!C.metalnessMap||!!C.clearcoatNormalMap||C.transmission>0||!!C.transmissionMap||!!C.thicknessMap||!!C.specularIntensityMap||!!C.specularColorMap||C.sheen>0||!!C.sheenColorMap||!!C.sheenRoughnessMap)&&!!C.displacementMap,fog:!!X,useFog:C.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!C.flatShading,sizeAttenuation:C.sizeAttenuation,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:C.dithering,shadowMapEnabled:l.shadowMap.enabled&&b.length>0,shadowMapType:l.shadowMap.type,toneMapping:C.toneMapped?l.toneMapping:On,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ls,flipSided:C.side===rn,useDepthPacking:!!C.depthPacking,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:C.extensions&&C.extensions.derivatives,extensionFragDepth:C.extensions&&C.extensions.fragDepth,extensionDrawBuffers:C.extensions&&C.extensions.drawBuffers,extensionShaderTextureLOD:C.extensions&&C.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function y(C){let T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(let b in C.defines)T.push(b),T.push(C.defines[b]);return C.isRawShaderMaterial===!1&&(v(T,C),w(T,C),T.push(l.outputEncoding)),T.push(C.customProgramCacheKey),T.join()}function v(C,T){C.push(T.precision),C.push(T.outputEncoding),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.combine),C.push(T.vertexUvs),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function w(C,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.displacementMap&&a.enable(18),T.specularMap&&a.enable(19),T.roughnessMap&&a.enable(20),T.metalnessMap&&a.enable(21),T.gradientMap&&a.enable(22),T.alphaMap&&a.enable(23),T.alphaTest&&a.enable(24),T.vertexColors&&a.enable(25),T.vertexAlphas&&a.enable(26),T.vertexUvs&&a.enable(27),T.vertexTangents&&a.enable(28),T.uvsVertexOnly&&a.enable(29),T.fog&&a.enable(30),C.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),C.push(a.mask)}function E(C){let T=m[C.type],b;if(T){let L=Cn[T];b=Fn.clone(L.uniforms)}else b=C.uniforms;return b}function _(C,T){let b;for(let L=0,P=d.length;L<P;L++){let X=d[L];if(X.cacheKey===T){b=X,++b.usedTimes;break}}return b===void 0&&(b=new gb(l,T,C,s),d.push(b)),b}function M(C){if(--C.usedTimes===0){let T=d.indexOf(C);d[T]=d[d.length-1],d.pop(),C.destroy()}}function A(C){f.remove(C)}function I(){f.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:E,acquireProgram:_,releaseProgram:M,releaseShaderCache:A,programs:d,dispose:I}}function vb(){let l=new WeakMap;function e(s){let r=l.get(s);return r===void 0&&(r={},l.set(s,r)),r}function t(s){l.delete(s)}function n(s,r,a){l.get(s)[r]=a}function i(){l=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function bb(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function ed(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function td(){let l=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,o,u,m,g,y){let v=l[e];return v===void 0?(v={id:h.id,object:h,geometry:o,material:u,groupOrder:m,renderOrder:h.renderOrder,z:g,group:y},l[e]=v):(v.id=h.id,v.object=h,v.geometry=o,v.material=u,v.groupOrder=m,v.renderOrder=h.renderOrder,v.z=g,v.group=y),e++,v}function a(h,o,u,m,g,y){let v=r(h,o,u,m,g,y);u.transmission>0?n.push(v):u.transparent===!0?i.push(v):t.push(v)}function f(h,o,u,m,g,y){let v=r(h,o,u,m,g,y);u.transmission>0?n.unshift(v):u.transparent===!0?i.unshift(v):t.unshift(v)}function d(h,o){t.length>1&&t.sort(h||bb),n.length>1&&n.sort(o||ed),i.length>1&&i.sort(o||ed)}function c(){for(let h=e,o=l.length;h<o;h++){let u=l[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:f,finish:c,sort:d}}function _b(){let l=new WeakMap;function e(n,i){let s;return l.has(n)===!1?(s=new td,l.set(n,[s])):i>=l.get(n).length?(s=new td,l.get(n).push(s)):s=l.get(n)[i],s}function t(){l=new WeakMap}return{get:e,dispose:t}}function wb(){let l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Te};break;case"SpotLight":t={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return l[e.id]=t,t}}}function Sb(){let l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}var Tb=0;function Mb(l,e){return(e.castShadow?1:0)-(l.castShadow?1:0)}function Eb(l,e){let t=new wb,n=Sb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new De,a=new De;function f(c,h){let o=0,u=0,m=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let g=0,y=0,v=0,w=0,E=0,_=0,M=0,A=0;c.sort(Mb);let I=h!==!0?Math.PI:1;for(let T=0,b=c.length;T<b;T++){let L=c[T],P=L.color,X=L.intensity,D=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)o+=P.r*X*I,u+=P.g*X*I,m+=P.b*X*I;else if(L.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],X);else if(L.isDirectionalLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*I),L.castShadow){let B=L.shadow,$=n.get(L);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.directionalShadow[g]=$,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=L.shadow.matrix,_++}i.directional[g]=H,g++}else if(L.isSpotLight){let H=t.get(L);if(H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(P).multiplyScalar(X*I),H.distance=D,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,L.castShadow){let B=L.shadow,$=n.get(L);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=z,i.spotShadowMatrix[v]=L.shadow.matrix,A++}i.spot[v]=H,v++}else if(L.isRectAreaLight){let H=t.get(L);H.color.copy(P).multiplyScalar(X),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=H,w++}else if(L.isPointLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*I),H.distance=L.distance,H.decay=L.decay,L.castShadow){let B=L.shadow,$=n.get(L);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,i.pointShadow[y]=$,i.pointShadowMap[y]=z,i.pointShadowMatrix[y]=L.shadow.matrix,M++}i.point[y]=H,y++}else if(L.isHemisphereLight){let H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(X*I),H.groundColor.copy(L.groundColor).multiplyScalar(X*I),i.hemi[E]=H,E++}}w>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=o,i.ambient[1]=u,i.ambient[2]=m;let C=i.hash;(C.directionalLength!==g||C.pointLength!==y||C.spotLength!==v||C.rectAreaLength!==w||C.hemiLength!==E||C.numDirectionalShadows!==_||C.numPointShadows!==M||C.numSpotShadows!==A)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=w,i.point.length=y,i.hemi.length=E,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=A,C.directionalLength=g,C.pointLength=y,C.spotLength=v,C.rectAreaLength=w,C.hemiLength=E,C.numDirectionalShadows=_,C.numPointShadows=M,C.numSpotShadows=A,i.version=Tb++)}function d(c,h){let o=0,u=0,m=0,g=0,y=0,v=h.matrixWorldInverse;for(let w=0,E=c.length;w<E;w++){let _=c[w];if(_.isDirectionalLight){let M=i.directional[o];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),o++}else if(_.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),m++}else if(_.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),a.identity(),r.copy(_.matrixWorld),r.premultiply(v),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),u++}else if(_.isHemisphereLight){let M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),y++}}}return{setup:f,setupView:d,state:i}}function nd(l,e){let t=new Eb(l,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function f(h){t.setup(n,h)}function d(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:f,setupLightsView:d,pushLight:r,pushShadow:a}}function Ab(l,e){let t=new WeakMap;function n(s,r=0){let a;return t.has(s)===!1?(a=new nd(l,e),t.set(s,[a])):r>=t.get(s).length?(a=new nd(l,e),t.get(s).push(a)):a=t.get(s)[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var _r=class extends Tt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};_r.prototype.isMeshDepthMaterial=!0;var wr=class extends Tt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};wr.prototype.isMeshDistanceMaterial=!0;var Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};var cn=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},U_=new Rn(-1,1,1,-1,0,1),rf=new Be;rf.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3));rf.setAttribute("uv",new Le([0,2,0,0,2,0],2));var Bi=class{constructor(e){this._mesh=new ft(rf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var so=class extends cn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fn.clone(e.uniforms),this.material=new pt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}};var ro=class extends cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},hu=class extends cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var fu=class{constructor(e,t){if(this.renderer=e,t===void 0){let n=e.getSize(new te);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new dt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Vr===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),so===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new so(Vr),this.clock=new Fr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let a=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ro!==void 0&&(r instanceof ro?n=!0:r instanceof hu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};var kw=new Rn(-1,1,1,-1,0,1),pm=new Be;pm.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3));pm.setAttribute("uv",new Le([0,2,0,0,2,0],2));var du=class extends cn{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=i}};var Br={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new te(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ao={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new te(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},pu={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new te(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var mu=class extends cn{constructor(e,t){super(),this.edgesRT=new dt(e,t,{depthBuffer:!1}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new dt(e,t,{depthBuffer:!1}),this.weightsRT.texture.name="SMAAPass.weights";let n=this,i=new Image;i.src=this.getAreaTexture(),i.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new yt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=i,this.areaTexture.minFilter=_t,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let s=new Image;s.src=this.getSearchTexture(),s.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new yt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=bt,this.searchTexture.minFilter=bt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,Br===void 0&&console.error("THREE.SMAAPass relies on SMAAShader"),this.uniformsEdges=Fn.clone(Br.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new pt({defines:Object.assign({},Br.defines),uniforms:this.uniformsEdges,vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader}),this.uniformsWeights=Fn.clone(ao.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new pt({defines:Object.assign({},ao.defines),uniforms:this.uniformsWeights,vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader}),this.uniformsBlend=Fn.clone(pu.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new pt({uniforms:this.uniformsBlend,vertexShader:pu.vertexShader,fragmentShader:pu.fragmentShader}),this.needsSwap=!1,this.fsQuad=new Bi(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};var af={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ci=class extends cn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new dt(s,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let o=new dt(s,r);o.texture.name="UnrealBloomPass.h"+h,o.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(o);let u=new dt(s,r);u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),r=Math.round(r/2)}af===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");let a=af;this.highPassUniforms=Fn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let f=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(f[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new te(s,r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Vr===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");let c=Vr;this.copyUniforms=Fn.clone(c.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new pt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:ha,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new on,this.fsQuad=new Bi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new te(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this.fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[f].uniforms.direction.value=ci.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=ci.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[f];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){return new pt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ci.BlurDirectionX=new te(1,0);ci.BlurDirectionY=new te(0,1);var oo=class{constructor(e,t,n){this.manager=t,this.THREE=nf,this.canvas=e,this.proxy=n,this.renderer=void 0,this.composer=void 0,this.gui=void 0,this.controls=void 0,this.camera=void 0,this.scene=void 0,this.ANIMATING=!1,this.ANIMFRAMETIME=0,this.OrbitControls=io,this.EffectComposer=fu,this.RenderPass=du,this.SMAAPass=mu,this.UnrealBloomPass=ci,this.PickHelper=of}setup=(e,t,n)=>{this.defaultSetup(),this.ANIMATING=!0,this.animate(e,t,n)};draw=(e,t,n)=>{this.defaultDraw()};finished=(e,t,n)=>{let i={foo:"render",output:this.ANIMFRAMETIME,origin:n};this.manager&&this.manager.checkEvents("render")?this.manager.EVENTS.emit("render",i):postMessage(i)};clear=(e,t,n)=>{this.defaultClear()};animate=(e,t,n)=>{if(!this.ANIMATING)return;this.ANIMFRAMETIME=performance.now()-this.ANIMFRAMETIME,this.draw(e,t,n),this.finished(e,t,n),this.ANIMFRAMETIME=performance.now(),requestAnimationFrame(()=>{this.animate(e,t,n)})};resizeRendererToDisplaySize=(e=this.renderer,t=this.proxy,n=this.camera)=>{let i=e.domElement,s=t.clientWidth,r=t.clientHeight,a=i.width!==s||i.height!==r;return a&&(e.setSize(s,r,!1),n&&(n.aspect=t.clientWidth/t.clientHeight,n.updateProjectionMatrix())),a};defaultSetup=()=>{let e=this.canvas;this.renderer=new ut({canvas:e}),this.time=0;let t=75,n=2,i=.1,s=100;this.camera=new Et(t,n,i,s),this.camera.position.z=4,this.controls=new io(this.camera,this.proxy),this.controls.target.set(0,0,0),this.controls.update(),this.scene=new Li;{let y=new Fs(16777215,1);y.position.set(-1,2,4),this.scene.add(y)}let r=1,a=1,f=1,d=new vn(r,a,f),c=(m,g,y)=>{let v=new Cs({color:g}),w=new ft(m,v);return this.scene.add(w),w.position.x=y,w};this.cubes=[c(d,4500104,0),c(d,8930474,-2),c(d,11176004,2)],this.pickPosition={x:-2,y:-2};let h=m=>{let g=this.proxy.getBoundingClientRect();return{x:m.clientX-g.left,y:m.clientY-g.top}},o=m=>{let g=h(m);this.pickPosition.x=g.x/this.proxy.clientWidth*2-1,this.pickPosition.y=g.y/this.proxy.clientHeight*-2+1},u=()=>{this.pickPosition.x=-1e5,this.pickPosition.y=-1e5};this.pickHelper=new this.PickHelper,u(),this.proxy.addEventListener("mousemove",o),this.proxy.addEventListener("mouseout",u),this.proxy.addEventListener("mouseleave",u),this.proxy.addEventListener("touchstart",m=>{m.preventDefault(),o(m.touches[0])},{passive:!1}),this.proxy.addEventListener("touchmove",m=>{o(m.touches[0])}),this.proxy.addEventListener("touchend",u),this.pickPosition={x:-2,y:-2},this.pickHelper=new this.PickHelper,u()};defaultDraw=()=>{this.time+=this.ANIMFRAMETIME*.001,this.resizeRendererToDisplaySize(this.renderer,this.proxy,this.camera),this.cubes.forEach((e,t)=>{let n=1+t*.1,i=this.time*n;e.rotation.x=i,e.rotation.y=i}),this.pickHelper.pick(this.pickPosition,this.scene,this.camera,this.time),this.renderer.render(this.scene,this.camera)};defaultClear=()=>{this.ANIMATING=!1,this.scene=null,this.renderer&&(this.renderer.domElement=null),this.renderer=null,this.composer=null,this.gui=null,this.controls=null,this.camera=null,this.scene=null}},of=class{constructor(){this.raycaster=new to,this.pickedObject=null,this.pickedObjectSavedColor=0}pick(e,t,n,i){this.pickedObject&&(this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor),this.pickedObject=void 0),this.raycaster.setFromCamera(e,n);let s=this.raycaster.intersectObjects(t.children);s.length&&(this.pickedObject=s[0].object,this.pickedObjectSavedColor=this.pickedObject.material.emissive.getHex(),this.pickedObject.material.emissive.setHex(i*8%2>1?16776960:16711680))}};var lo=class{constructor(e){this.callbackManager=e,e.canvas=new OffscreenCanvas(512,512),e.ANIMATION=void 0,e.ANIMATIONFUNC=void 0,e.ANIMATING=!1,e.ANIMFRAMETIME=performance.now(),e.threeUtil=void 0,e.PROXYMANAGER=new xo;try{}catch{self.document={}}this.callbacks=[{case:"resizecanvas",callback:(t,n,i)=>(t.canvas.width=n[0],t.canvas.height=n[1],!0)},{case:"proxyHandler",callback:(t,n,i)=>{if(n.type==="makeProxy"){t.PROXYMANAGER.makeProxy(n);let s=t.PROXYMANAGER.getProxy(n.id);s.ownerDocument=s,t[n.id]=s}else if(n.type==="event")t.PROXYMANAGER.handleEvent(n);else return!1;return!0}},{case:"initThree",callback:async(t,n,i)=>(t.ANIMATING&&(t.ANIMATING=!1,cancelAnimationFrame(t.ANIMATION)),t.threeUtil||(t.threeUtil=new oo(t.canvas,t,t.PROXYMANAGER.getProxy(n[0])),t.THREE=t.threeUtil.THREE),typeof n[1]=="object"&&await t.runCallback("setValues",n[1]),n[2]&&(t.threeUtil.setup=_n(n[2])),n[3]&&(t.threeUtil.draw=_n(n[3])),n[4]&&(t.threeUtil.clear=_n(n[4])),t.threeUtil.clear(t,n,i),t.threeUtil.setup(t,n,i),!0)},{case:"startThree",callback:async(t,n,i)=>(t.ANIMATING&&(t.ANIMATING=!1,cancelAnimationFrame(t.ANIMATION)),t.threeUtil||(t.threeUtil=new oo(t.canvas,t,t.PROXYMANAGER.getProxy(n[0]))),t.threeUtil&&(t.threeUtil.clear(t,n,i),t.threeUtil.setup(t,n,i)),!0)},{case:"clearThree",callback:(t,n,i)=>(t.threeUtil&&t.threeUtil.clear(t,n,i),!0)},{case:"setAnimation",callback:(t,n,i)=>(t.animationFunc=_n(n[0]),!0)},{case:"startAnimation",callback:(t,n,i)=>{let s=()=>{if(t.ANIMATING){t.animationFunc(t,n,i),t.ANIMFRAMETIME=performance.now()-t.ANIMFRAMETIME;let r=t.checkEvents("render",i),a={foo:"render",output:t.ANIMFRAMETIME,origin:i};t.ANIMFRAMETIME=performance.now(),r?t.EVENTS.emit("render",a):postMessage(a),requestAnimationFrame(s)}};return this.ANIMATING?(t.ANIMATING=!1,cancelAnimationFrame(t.ANIMATION),setTimeout(()=>{t.ANIMATING=!0,t.ANIMATION=requestAnimationFrame(s)},300)):(t.ANIMATING=!0,console.log("begin animation"),t.ANIMATION=requestAnimationFrame(s)),!0}},{case:"stopAnimation",callback:(t,n,i)=>t.ANIMATING?(t.ANIMATING=!1,cancelAnimationFrame(t.ANIMATION),!0):!1},{case:"render",callback:(t,n,i)=>{t.animationFunc(t,n,i);let s=performance.now()-t.ANIMFRAMETIME;return tselfhis.ANIMFRAMETIME=performance.now(),s}}],this.addCallbacks()}addCallbacks(e=this.callbacks){e.forEach(t=>{this.callbackManager.addCallback(t.case,t.callback),t.aliases&&t.aliases.forEach(n=>{this.callbackManager.addCallback(n,t.callback)})})}};var gu=class{canvas;ctx;context;constructor(options={cpu:!0,gpu:!0,renderer:!0}){if(this.EVENTS=new Bs,this.EVENTSETTINGS=[],this.ID=Math.floor(Math.random()*1e3),this.defaultFunctions=[{case:"ping",callback:(l,e,t)=>"pong"},{case:"list",callback:(l,e,t)=>{let n=[];return this.callbacks.forEach((i,s)=>{n.push(s)}),n}},{case:"addfunc",callback:(l,e,t)=>{if(!e[0]||!e[1])return!1;let n=_n(e[1]);if(e[2]===!0){let i=async(s,r,a)=>{try{return await n(s,r,a)}catch(f){console.error(f)}};l.callbacks.set(e[0],i)}else l.callbacks.set(e[0],n);return!0}},{case:"removefunc",callback:(l,e,t)=>{if(e[0])return this.removeCallback(e[0])}},{case:"setValues",callback:(l,e,t)=>typeof e=="object"?(Object.keys(e).forEach(n=>{l[n]=e[n],l.threeUtil&&(l.threeUtil[n]=e[n])}),!0):!1},{case:"appendValues",callback:(l,e,t)=>typeof e=="object"?(Object.keys(e).forEach(n=>{l[n]&&Array.isArray(e[n])?l[n].push(e[n]):l[n]=e[n]}),!0):!1},{case:"setValuesFromArrayBuffers",callback:(l,e,t)=>typeof e=="object"?(Object.keys(e).forEach(n=>{e[n].__proto__.__proto__.constructor.name==="TypedArray"?l[n]=Array.from(e[n]):l[n]=e[n]}),!0):!1},{case:"appendValuesFromArrayBuffers",callback:(l,e,t)=>typeof e=="object"?(Object.keys(e).forEach(n=>{!l[n]&&e[n].__proto__.__proto__.constructor.name==="TypedArray"?l[n]=Array.from(e[n]):l[n]?e[n].__proto__.__proto__.constructor.name==="TypedArray"?l[n].push(Array.from(e[n])):Array.isArray(e[n])?l[n].push(e[n]):l[n]=e[n]:l[n]=e[n]}),!0):!1},{case:"transferClassObject",callback:(self,args,origin)=>typeof args=="object"?(Object.keys(args).forEach(key=>{if(typeof args[key]=="string"){let obj=args[key];args[key].indexOf("class")===0&&(obj=eval("("+args[key]+")")),self[key]=obj,self.threeUtil&&(self.threeUtil[key]=obj)}}),!0):!1},{case:"addport",callback:(l,e,t)=>{let n=e[1];n.onmessage=onmessage,this[e[0]]=n}},{case:"addevent",callback:(l,e,t)=>{if(l.EVENTSETTINGS.push({eventName:e[0],case:e[1],port:e[2],origin:t}),e[2]){let n=e[2];n.onmessage=onmessage,this[e[0]+"port"]=n}return!0}},{case:"subevent",callback:(l,e,t)=>{if(typeof e[0]!="string")return!1;let n=_n(e[1]),i=this.checkEvents(e[0]);return l.EVENTS.subEvent(e[0],s=>{n(l,s,t,i?.port,i?.eventName)})}},{case:"unsubevent",callback:(l,e,t)=>l.EVENTS.unsubEvent(e[0],e[1])}],this.callbacks=new Map,this.defaultFunctions.forEach(l=>{l.case&&this.callbacks.set(l.case,l.callback),l.aliases&&l.aliases.forEach(e=>this.callbacks.set(e,l.callback))}),options.cpu)try{$r&&(this.workerCPU=new $r(this))}catch(l){console.error(l)}if(options.gpu)try{qr&&(this.workerGPU=new qr(this))}catch(l){console.error(l)}if(options.renderer)try{lo&&(this.workerRenderer=new lo(this))}catch(l){console.error(l)}}addCallback=(l,e=(t,n,i)=>{})=>!l||!e?!1:(this.callbacks.set(l,e),!0);removeCallback=l=>this.callbacks.get(l)?(this.callbacks.delete(l),!0):!1;runCallback=async(l,e=[],t)=>{let n,i=this.callbacks.get(l);return i&&(n=await i(this,e,t)),n};checkEvents=(l,e)=>this.EVENTSETTINGS.find(n=>n.origin&&e&&n.case&&l?n.origin===e&&n.case===l:n.case&&l?n.case===l:n.origin&&e?n.origin===e:!1);checkCallbacks=async l=>{let e;if(!l.data)return e;let t;return l.data.case?t=this.callbacks.get(l.data.case):l.data.foo?t=this.callbacks.get(l.data.foo):l.data.command?t=this.callbacks.get(l.data.command):l.data.cmd&&(t=this.callbacks.get(l.data.cmd)),t&&(l.data.input?e=await t(this,l.data.input,l.data.origin):l.data.args?e=await t(this,l.data.args,l.data.origin):e=await t(this,void 0,l.data.origin)),e}};var uo=class{constructor(e,t,n=void 0,i=void 0,s=void 0,r=void 0,a=`canvas_${Math.round(Math.random()*1e5)}`,f=void 0){if(!t)throw new Error("Input a canvas element or Id");if(this.origin=a,this.workerId=r,this.manager=e,!e)return!1;typeof t=="string"&&(t=document.getElementById(t)),this.canvas=t,this.context=n,this.offscreen,this.workerId||this.initWorker(),typeof s=="object"&&this.manager.postToWorker({foo:"setValues",args:s,origin:this.origin},this.workerId,f),t&&this.setCanvas(t),n&&this.setContext(n),i&&this.setAnimation(i)}setContext(e=this.context){this.context=e,this.manager.postToWorker({context:e,origin:this.origin},this.workerId)}setCanvas(e=this.canvas){this.canvas=e,this.offscreen=e.transferControlToOffscreen(),this.manager.postToWorker({canvas:this.offscreen,origin:this.origin,foo:null},this.workerId,[this.offscreen])}setValues(e=void 0,t=void 0){typeof setValues=="object"&&this.manager.postToWorker({foo:"setValues",input:e,origin:this.origin},this.workerId,t)}setAnimation(e){let t=e;if(typeof e=="function")t=e.toString();else if(typeof e!="string")return!1;this.manager.postToWorker({origin:this.origin,foo:"setAnimation",input:[t]},this.workerId)}addSetup(e){let t=e;typeof e=="function"&&(t=e.toString()),this.manager.postToWorker({origin:this.origin,foo:"addFunc",input:["setupAnim",t]},this.workerId)}setThreeAnimation(e,t){this.manager.postToWorker({origin:this.origin,foo:"initThree",input:[e.toString(),t.toString()]})}startThreeAnimation(){this.manager.postToWorker({origin:this.origin,foo:"startThree",input:[]},this.workerId)}clearThreeAnimation(){this.manager.postToWorker({origin:this.origin,foo:"clearThree",input:[]},this.workerId)}setValues(e={},t=[]){typeof e=="object"&&this.manager.postToWorker({origin:this.origin,foo:"setValues",input:e},this.workerId,t)}startAnimation(){this.manager.postToWorker({origin:this.origin,foo:"startAnimation",input:[]},this.workerId)}stopAnimation(){this.manager.postToWorker({origin:this.origin,foo:"stopAnimation",input:[]},this.workerId)}setCanvasSize(e=this.canvas.width,t=this.canvas.height){this.manager.postToWorker({origin:this.origin,foo:"resizecanvas",input:[e,t]},this.workerId)}initWorker(){!this.workerId&&this.manager&&(this.workerId=this.manager.addWorker(),this.manager.workerResponses.push(this.workeronmessage)),this.setCanvas(),this.setContext()}init(e){this.workerId||this.initWorker(),this.setCanvas(),this.setContext(),e&&this.setAnimation(e)}deinit(){this.manager.terminate(this.workerId)}workeronmessage=e=>{e.origin===this.origin&&console.log("Result: ",e)};test(e="testcanvas"){let t=document.getElementById(e);t||(t=document.createElement("canvas"),t.id=e,document.body.insertAdjacentElement("beforeend",t)),this.canvas=t,this.context="2d",this.init(),this.setValues({x:1,y:2,z:3});function n(i,s,r){i.x||(i.x=1,i.y=2,i.z=3),i.ctx.font="10px serif",i.ctx.fillText(`${i.x} + ${i.y} + ${i.z} = ${i.x+i.y+i.z}`,10,50),i.x++,i.z+=2}this.setAnimation(n),setTimeout(()=>{this.stopAnimation()},1e4)}};var V_={},Gr=class{url;responses=[];workers=[];threads=0;threadrot=0;events;subEvent;unsubEvent;addEvent;toResolve={};ProxyElement=Hr;initProxyElement=uf;ThreadedCanvas=uo;constructor(e=1,t){this.url=t,this.responses=[],this.workers=[],this.threads=e,this.threadrot=0,this.EVENTS=new Bs(this),this.subEvent=(i,s=r=>{})=>{this.EVENTS.subEvent(i,s)},this.unsubEvent=(i,s)=>{this.EVENTS.unsubEvent(i,s)},this.addEvent=async(i,s,r,a)=>await this.EVENTS.addEvent(i,s,r,a);let n=0;for(console.log("worker",_u);n<e;)this.addWorker(),n++}getWorker(e){return e?this.workers.find(t=>{if(t.id===e)return!0}).worker:this.workers[0].worker}addWorker=(e=this.url,t="module")=>{let n;try{if(e==null)n=new Worker(new URL(_u));else if(t==="blob")try{let i="worker"+Math.floor(Math.random()*1e10),s=new Blob([this.url],{type:"text/javascript"});n=new Worker(URL.createObjectURL(s)),console.log("Blob worker created!")}catch(i){console.error(i)}else e instanceof URL||(e=new URL(e,V_.url)),n=new Worker(e,{name:"worker_"+this.workers.length,type:t})}catch(i){try{console.log("Error, creating dummy worker (WARNING: Single Threaded). ERROR:",i),n=new lf(this.responses)}catch(s){console.error("DummyWorker Error: ",s)}}finally{if(n){let i="worker_"+Math.floor(Math.random()*1e10);return this.workers.push({worker:n,id:i}),n.onmessage=s=>{var r=s.data;let a=this.toResolve[s.data.callbackId];a&&(a(r.output),delete this.toResolve[s.data.callbackId]),this.responses.forEach((f,d)=>{typeof f=="object"?f.callback(r):typeof f=="function"&&f(r)})},n.onerror=s=>{console.error(s)},console.log("magic threads: ",this.workers.length),i}else return}};addCallback(e="",t=n=>{}){e.length>0&&!this.responses.find(n=>{if(typeof n=="object"&&n.name===e)return!0})&&this.responses.push({name:e,callback:t})}removeCallback(e=""){if(e.length>0){let t;this.responses.find((n,i)=>{if(typeof n=="object"&&n.name===e)return t=i,!0})&&t&&this.responses.splice(t,1)}else typeof e=="number"&&this.responses.splice(e,1)}async addFunction(e,t,n,i,s=r=>{}){if(e&&t){typeof t=="function"&&(t=t.toString());let r={foo:"addfunc",args:[e,t],origin:i};return n?await this.post(r,n,s):(this.workers.forEach(a=>{this.post(r,a.id,s)}),!0)}}addWorkerFunction=this.addFunction;async run(e,t,n,i,s,r=a=>{}){if(e){if(e==="transferClassObject"&&typeof t=="object"&&!Array.isArray(t))for(let f in t)typeof t[f]=="object"&&!Array.isArray(t[f])&&(t[f]=t[f].toString());let a={foo:e,args:t,origin:i};return await this.post(a,n,s,r)}}runWorkerFunction=this.run;runFunction=this.run;async setValues(e={},t,n,i){if(t)return await this.run("setValues",e,t,n,i);this.workers.forEach(s=>{this.run("setValues",e,s.id,n,i)})}establishMessageChannel(e,t,n,i,s,r){let a=new MessageChannel,f=a.port1,d=a.port2;this.run("addevent",[e,s,f],t,r,[f]),this.run("addevent",[e,e,d],n,r,[d]),typeof i=="function"&&this.run("subevent",[e,i.toString()],n,r)}post=(e,t,n,i=s=>{})=>new Promise(s=>{typeof e!="object"&&(e={input:e}),Array.isArray(e.input)&&(e.input=e.input.map(a=>typeof a=="function"?a.toString():a));let r=a=>{i&&i(a),s(a)};if(e.callbackId=Math.floor(1e6*Math.random()),this.toResolve[e.callbackId]=r,t==null){let a=this.workers?.[this.threadrot]?.worker;a&&(a.postMessage(e,n),this.threads>1&&(this.threadrot++,this.threadrot>=this.threads&&(this.threadrot=0)))}else this.workers.find(a=>{if(a.id===t)return a.worker.postMessage(e,n),!0})});postToWorker=this.post;terminate(e){if(!e)this.workers.forEach(t=>t.worker.terminate());else{let t;return this.workers.find((i,s)=>{if(i.id===e)return t=s,i.worker.terminate(),!0})&&t?(this.workers.splice(t,1),!0):!1}}close=this.terminate},lf=class{responses;manager;constructor(e){this.responses=e,this.manager=new gu,this.counter=0}postMessage=async e=>{let t=await this.onmessage({data:e});this.responses.forEach((n,i)=>{n(t)})};terminate(){}onerror=()=>{};onmessage=async e=>{if(!e.data)return;let t,n;e.data.foo?n=e.data.foo:e.data.case?n=e.data.case:e.data.cmd?n=e.data.cmd:e.data.command&&(n=e.data.command);let i=this.manager.callbacks.get(n);return i&&e.data.input?t=await i(this,e.data.input,e.data.origin):i&&e.data.args?t=await i(this,e.data.args,e.data.origin):i&&(t=await i(this,void 0,e.data.origin)),{output:t,foo:e.data.foo,origin:e.data.origin,callbackId:e.data.callback,counter:this.counter++}}};var Hr=class{constructor(e,t,n,i,s){this.id="proxy"+Math.floor(Math.random()*1e4),this.eventHandlers=i,this.origin=t,this.workerId=n,this.manager=s instanceof Gr?s:new Gr;let r=f=>{this.manager.runWorkerFunction("proxyHandler",{type:"event",id:this.id,data:f},this.workerId,this.origin)};this.manager.runWorkerFunction("proxyHandler",{type:"makeProxy",id:this.id},this.workerId,this.origin);for(let[f,d]of Object.entries(this.eventHandlers))e.addEventListener(f,function(c){d(c,r)});let a=()=>{let f=e.getBoundingClientRect();r({type:"size",left:f.left,top:f.top,width:e.clientWidth,height:e.clientHeight})};a(),window.addEventListener("resize",a)}},Wr=hf(["ctrlKey","metaKey","shiftKey","button","pointerType","clientX","clientY","pageX","pageY"]),B_=hf(["deltaX","deltaY"]),G_=hf(["ctrlKey","metaKey","shiftKey","keyCode"]);function H_(l,e){l.preventDefault(),B_(l,e)}function W_(l){l.preventDefault()}function K_(l,e,t){for(let n of e)t[n]=l[n]}function hf(l){return function(t,n){let i={type:t.type};K_(t,l,i),n(i)}}function cf(l,e){let t=[],n={type:l.type,touches:t};for(let i=0;i<l.touches.length;++i){let s=l.touches[i];t.push({pageX:s.pageX,pageY:s.pageY})}e(n)}var X_={"37":!0,"38":!0,"39":!0,"40":!0};function j_(l,e){let{keyCode:t}=l;X_[t]&&(l.preventDefault(),G_(l,e))}function uf(l,e,t){let n={contextmenu:W_,mousedown:Wr,mousemove:Wr,mouseup:Wr,pointerdown:Wr,pointermove:Wr,pointerup:Wr,touchstart:cf,touchmove:cf,touchend:cf,wheel:H_,keydown:j_};return new Hr(l,t,e,n,this)}typeof globalThis.magic<"u"?Object.assign(globalThis.magic,xu):globalThis.magic=xu;})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * gpu.js
 * http://gpu.rocks/
 *
 * GPU Accelerated JavaScript
 *
 * @version 2.11.0
 * @date Tue Jan 05 2021 15:55:59 GMT-0500 (Eastern Standard Time)
 *
 * @license MIT
 * The MIT License
 *
 * Copyright (c) 2021 gpu.js Team
 */