// code-prettify
var DecorationsT,JobT,SourceSpansT,IN_GLOBAL_SCOPE=!1,PR;window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;!function(){function D(a){function i(a){var b=a.charCodeAt(0);if(92!==b)return b;var c=a.charAt(1);return b=h[c],b?b:"0"<=c&&c<="7"?parseInt(a.substring(1),8):"u"===c||"x"===c?parseInt(a.substring(2),16):a.charCodeAt(1)}function j(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);var b=String.fromCharCode(a);return"\\"===b||"-"===b||"]"===b||"^"===b?"\\"+b:b}function k(a){var b=a.substring(1,a.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),c=[],d="^"===b[0],e=["["];d&&e.push("^");for(var f=d?1:0,g=b.length;f<g;++f){var h=b[f];if(/\\[bdsw]/i.test(h))e.push(h);else{var l,k=i(h);f+2<g&&"-"===b[f+1]?(l=i(b[f+2]),f+=2):l=k,c.push([k,l]),l<65||k>122||(l<65||k>90||c.push([32|Math.max(65,k),32|Math.min(l,90)]),l<97||k>122||c.push([Math.max(97,k)&-33,Math.min(l,122)&-33]))}}c.sort(function(a,b){return a[0]-b[0]||b[1]-a[1]});for(var m=[],n=[],f=0;f<c.length;++f){var o=c[f];o[0]<=n[1]+1?n[1]=Math.max(n[1],o[1]):m.push(n=o)}for(var f=0;f<m.length;++f){var o=m[f];e.push(j(o[0])),o[1]>o[0]&&(o[1]+1>o[0]&&e.push("-"),e.push(j(o[1])))}return e.push("]"),e.join("")}function l(a){for(var d=a.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),e=d.length,f=[],g=0,h=0;g<e;++g){var i=d[g];if("("===i)++h;else if("\\"===i.charAt(0)){var l=+i.substring(1);l&&(l<=h?f[l]=-1:d[g]=j(l))}}for(var g=1;g<f.length;++g)-1===f[g]&&(f[g]=++b);for(var g=0,h=0;g<e;++g){var i=d[g];if("("===i)++h,f[h]||(d[g]="(?:");else if("\\"===i.charAt(0)){var l=+i.substring(1);l&&l<=h&&(d[g]="\\"+f[l])}}for(var g=0;g<e;++g)"^"===d[g]&&"^"!==d[g+1]&&(d[g]="");if(a.ignoreCase&&c)for(var g=0;g<e;++g){var i=d[g],m=i.charAt(0);i.length>=2&&"["===m?d[g]=k(i):"\\"!==m&&(d[g]=i.replace(/[a-zA-Z]/g,function(a){var b=a.charCodeAt(0);return"["+String.fromCharCode(b&-33,32|b)+"]"}))}return d.join("")}for(var b=0,c=!1,d=!1,e=0,f=a.length;e<f;++e){var g=a[e];if(g.ignoreCase)d=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){c=!0,d=!1;break}}for(var h={b:8,t:9,n:10,v:11,f:12,r:13},m=[],e=0,f=a.length;e<f;++e){var g=a[e];if(g.global||g.multiline)throw new Error(""+g);m.push("(?:"+l(g)+")")}return new RegExp(m.join("|"),d?"gi":"g")}function E(a,b){function h(a){var i=a.nodeType;if(1==i){if(c.test(a.className))return;for(var j=a.firstChild;j;j=j.nextSibling)h(j);var k=a.nodeName.toLowerCase();"br"!==k&&"li"!==k||(d[g]="\n",f[g<<1]=e++,f[g++<<1|1]=a)}else if(3==i||4==i){var l=a.nodeValue;l.length&&(l=b?l.replace(/\r\n?/g,"\n"):l.replace(/[ \t\r\n]+/g," "),d[g]=l,f[g<<1]=e,e+=l.length,f[g++<<1|1]=a)}}var c=/(?:^|\s)nocode(?:\s|$)/,d=[],e=0,f=[],g=0;return h(a),{sourceCode:d.join("").replace(/\n$/,""),spans:f}}function F(a,b,c,d,e){if(c){var f={sourceNode:a,pre:1,langExtension:null,numberLines:null,sourceCode:c,spans:null,basePos:b,decorations:null};d(f),e.push.apply(e,f.decorations)}}function H(a){for(var b=void 0,c=a.firstChild;c;c=c.nextSibling){var d=c.nodeType;b=1===d?b?a:c:3===d&&G.test(c.nodeValue)?a:b}return b===a?void 0:b}function I(a,b){var d,c={};!function(){for(var e=a.concat(b),f=[],g={},h=0,i=e.length;h<i;++h){var j=e[h],k=j[3];if(k)for(var l=k.length;--l>=0;)c[k.charAt(l)]=j;var m=j[1],n=""+m;g.hasOwnProperty(n)||(f.push(m),g[n]=null)}f.push(/[\0-\uffff]/),d=D(f)}();var e=b.length,f=function(a){for(var g=a.sourceCode,h=a.basePos,i=a.sourceNode,j=[h,v],k=0,l=g.match(d)||[],m={},n=0,o=l.length;n<o;++n){var s,p=l[n],q=m[p],r=void 0;if("string"==typeof q)s=!1;else{var t=c[p.charAt(0)];if(t)r=p.match(t[1]),q=t[0];else{for(var u=0;u<e;++u)if(t=b[u],r=p.match(t[1])){q=t[0];break}r||(q=v)}s=q.length>=5&&"lang-"===q.substring(0,5),!s||r&&"string"==typeof r[1]||(s=!1,q=y),s||(m[p]=q)}var w=k;if(k+=p.length,s){var x=r[1],z=p.indexOf(x),A=z+x.length;r[2]&&(A=p.length-r[2].length,z=A-x.length);var B=q.substring(5);F(i,h+w,p.substring(0,z),f,j),F(i,h+w+z,x,P(B,x),j),F(i,h+w+A,p.substring(A),f,j)}else j.push(h+w,q)}a.decorations=j};return f}function J(a){var b=[],c=[];a.tripleQuotedStrings?b.push([p,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):a.multiLineStrings?b.push([p,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):b.push([p,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),a.verbatimStrings&&c.push([p,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var d=a.hashComments;d&&(a.cStyleComments?(d>1?b.push([r,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):b.push([r,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),c.push([p,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):b.push([r,/^#[^\r\n]*/,null,"#"])),a.cStyleComments&&(c.push([r,/^\/\/[^\r\n]*/,null]),c.push([r,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var e=a.regexLiterals;if(e){var f=e>1?"":"\n\r",g=f?".":"[\\S\\s]",h="/(?=[^/*"+f+"])(?:[^/\\x5B\\x5C"+f+"]|\\x5C"+g+"|\\x5B(?:[^\\x5C\\x5D"+f+"]|\\x5C"+g+")*(?:\\x5D|$))+/";c.push(["lang-regex",RegExp("^"+C+"("+h+")")])}var i=a.types;i&&c.push([s,i]);var j=(""+a.keywords).replace(/^ | $/g,"");j.length&&c.push([q,new RegExp("^(?:"+j.replace(/[\s,]+/g,"|")+")\\b"),null]),b.push([v,/^\s+/,null," \r\n\t "]);var k="^.[^\\s\\w.$@'\"`/\\\\]*";return a.regexLiterals&&(k+="(?!s*/)"),c.push([t,/^@[a-z_$][a-z_$@0-9]*/i,null],[s,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[v,/^[a-z_$][a-z_$@0-9]*/i,null],[t,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[v,/^\\[\s\S]?/,null],[u,new RegExp(k),null]),I(b,c)}function L(a,b,c){function i(a){var b=a.nodeType;if(1!=b||d.test(a.className)){if((3==b||4==b)&&c){var h=a.nodeValue,k=h.match(e);if(k){var l=h.substring(0,k.index);a.nodeValue=l;var m=h.substring(k.index+k[0].length);if(m){var n=a.parentNode;n.insertBefore(f.createTextNode(m),a.nextSibling)}j(a),l||a.parentNode.removeChild(a)}}}else if("br"===a.nodeName)j(a),a.parentNode&&a.parentNode.removeChild(a);else for(var g=a.firstChild;g;g=g.nextSibling)i(g)}function j(a){function b(a,c){var d=c?a.cloneNode(!1):a,e=a.parentNode;if(e){var f=b(e,1),g=a.nextSibling;f.appendChild(d);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var d,c=b(a.nextSibling,0);(d=c.parentNode)&&1===d.nodeType;)c=d;h.push(c)}for(var d=/(?:^|\s)nocode(?:\s|$)/,e=/\r\n?|\n/,f=a.ownerDocument,g=f.createElement("li");a.firstChild;)g.appendChild(a.firstChild);for(var h=[g],k=0;k<h.length;++k)i(h[k]);b===(0|b)&&h[0].setAttribute("value",b);var l=f.createElement("ol");l.className="linenums";for(var m=Math.max(0,b-1|0)||0,k=0,n=h.length;k<n;++k)g=h[k],g.className="L"+(k+m)%10,g.firstChild||g.appendChild(f.createTextNode(" ")),l.appendChild(g);a.appendChild(l)}function M(a){var b=/\bMSIE\s(\d+)/.exec(navigator.userAgent);b=b&&+b[1]<=8;var c=/\n/g,d=a.sourceCode,e=d.length,f=0,g=a.spans,h=g.length,i=0,j=a.decorations,k=j.length,l=0;j[k]=e;var m,n;for(n=m=0;n<k;)j[n]!==j[n+2]?(j[m++]=j[n++],j[m++]=j[n++]):n+=2;for(k=m,n=m=0;n<k;){for(var o=j[n],p=j[n+1],q=n+2;q+2<=k&&j[q+1]===p;)q+=2;j[m++]=o,j[m++]=p,n=q}k=j.length=m;var r=a.sourceNode,s="";r&&(s=r.style.display,r.style.display="none");try{for(;i<h;){var y,v=(g[i],g[i+2]||e),w=j[l+2]||e,q=Math.min(v,w),x=g[i+1];if(1!==x.nodeType&&(y=d.substring(f,q))){b&&(y=y.replace(c,"\r")),x.nodeValue=y;var z=x.ownerDocument,A=z.createElement("span");A.className=j[l+1];var B=x.parentNode;B.replaceChild(A,x),A.appendChild(x),f<v&&(g[i+1]=x=z.createTextNode(d.substring(q,v)),B.insertBefore(x,A.nextSibling))}f=q,f>=v&&(i+=2),f>=w&&(l+=2)}}finally{r&&(r.style.display=s)}}function O(b,c){for(var d=c.length;--d>=0;){var e=c[d];N.hasOwnProperty(e)?a.console&&console.warn("cannot override language handler %s",e):N[e]=b}}function P(a,b){return a&&N.hasOwnProperty(a)||(a=/^\s*</.test(b)?"default-markup":"default-code"),N[a]}function Q(b){var c=b.langExtension;try{var d=E(b.sourceNode,b.pre),e=d.sourceCode;b.sourceCode=e,b.spans=d.spans,b.basePos=0,P(c,e)(b),M(b)}catch(b){a.console&&console.log(b&&b.stack||b)}}function R(a,b,c){var d=c||!1,e=b||null,f=document.createElement("div");f.innerHTML="<pre>"+a+"</pre>",f=f.firstChild,d&&L(f,d,!0);var g={langExtension:e,numberLines:d,sourceNode:f,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null};return Q(g),f.innerHTML}function S(b,c){function f(a){return d.getElementsByTagName(a)}function u(){for(var c=a.PR_SHOULD_USE_CONTINUATION?l.now()+250:1/0;m<h.length&&l.now()<c;m++){for(var d=h[m],f=t,g=d;g=g.previousSibling;){var i=g.nodeType,j=(7===i||8===i)&&g.nodeValue;if(j?!/^\??prettify\b/.test(j):3!==i||/\S/.test(g.nodeValue))break;if(j){f={},j.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){f[b]=c});break}}var k=d.className;if((f!==t||o.test(k))&&!p.test(k)){for(var v=!1,w=d.parentNode;w;w=w.parentNode){var x=w.tagName;if(s.test(x)&&w.className&&o.test(w.className)){v=!0;break}}if(!v){d.className+=" prettyprinted";var y=f.lang;if(!y){y=k.match(n);var z;!y&&(z=H(d))&&r.test(z.tagName)&&(y=z.className.match(n)),y&&(y=y[1])}var A;if(q.test(d.tagName))A=1;else{var B=d.currentStyle,C=e.defaultView,D=B?B.whiteSpace:C&&C.getComputedStyle?C.getComputedStyle(d,null).getPropertyValue("white-space"):0;A=D&&"pre"===D.substring(0,3)}var E=f.linenums;(E="true"===E||+E)||(E=k.match(/\blinenums\b(?::(\d+))?/),E=!!E&&(!E[1]||!E[1].length||+E[1])),E&&L(d,E,A);var F={langExtension:y,sourceNode:d,numberLines:E,pre:A,sourceCode:null,basePos:null,spans:null,decorations:null};Q(F)}}}m<h.length?a.setTimeout(u,250):"function"==typeof b&&b()}for(var d=c||document.body,e=d.ownerDocument||document,g=[f("pre"),f("code"),f("xmp")],h=[],i=0;i<g.length;++i)for(var j=0,k=g[i].length;j<k;++j)h.push(g[i][j]);g=null;var l=Date;l.now||(l={now:function(){return+new Date}});var m=0,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,o=/\bprettyprint\b/,p=/\bprettyprinted\b/,q=/pre|xmp/i,r=/^code$/i,s=/^(?:pre|code|xmp)$/i,t={};u()}var a=window,b=["break,continue,do,else,for,if,return,while"],c=[b,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],d=[c,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],e=[d,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],f=[d,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],g=[d,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],h="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",i=[d,"abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],j="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",k=[b,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],l=[b,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],m=[b,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],n=[e,g,f,i,j,k,l,m],o=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,p="str",q="kwd",r="com",s="typ",t="lit",u="pun",v="pln",w="tag",x="dec",y="src",z="atn",A="atv",B="nocode",C="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",G=/\S/,K=J({keywords:n,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),N={};O(K,["default-code"]),O(I([],[[v,/^[^<?]+/],[x,/^<!\w[^>]*(?:>|$)/],[r,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[u,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),O(I([[v,/^[\s]+/,null," \t\r\n"],[A,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[w,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[z,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[u,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),O(I([],[[A,/^[\s\S]+/]]),["uq.val"]),O(J({keywords:e,hashComments:!0,cStyleComments:!0,types:o}),["c","cc","cpp","cxx","cyc","m"]),O(J({keywords:"null,true,false"}),["json"]),O(J({keywords:g,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:o}),["cs"]),O(J({keywords:f,cStyleComments:!0}),["java"]),O(J({keywords:m,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),O(J({keywords:k,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),O(J({keywords:j,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),O(J({keywords:l,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),O(J({keywords:i,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),O(J({keywords:h,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),O(I([],[[p,/^[\s\S]+/]]),["regex"]);var T=a.PR={createSimpleLexer:I,registerLangHandler:O,sourceDecorator:J,PR_ATTRIB_NAME:z,PR_ATTRIB_VALUE:A,PR_COMMENT:r,PR_DECLARATION:x,PR_KEYWORD:q,PR_LITERAL:t,PR_NOCODE:B,PR_PLAIN:v,PR_PUNCTUATION:u,PR_SOURCE:y,PR_STRING:p,PR_TAG:w,PR_TYPE:s,prettyPrintOne:IN_GLOBAL_SCOPE?a.prettyPrintOne=R:prettyPrintOne=R,prettyPrint:prettyPrint=IN_GLOBAL_SCOPE?a.prettyPrint=S:prettyPrint=S},U=a.define;"function"==typeof U&&U.amd&&U("google-code-prettify",[],function(){return T})}();
// input.js
!function(b,c){"object"==typeof exports&&"object"==typeof module?module.exports=c():"function"==typeof define&&define.amd?define([],c):"object"==typeof exports?exports.POWERMODE=c():b.POWERMODE=c()}(this,function(){return function(a){function c(d){if(b[d])return b[d].exports;var e=b[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,c),e.loaded=!0,e.exports}var b={};return c.m=a,c.c=b,c.p="",c(0)}([function(a,b,c){"use strict";function h(a,b){return Math.random()*(b-a)+a}function i(a){if(l.colorful){var b=h(0,360);return"hsla("+h(b-10,b+10)+", 100%, "+h(50,80)+"%, 1)"}return window.getComputedStyle(a).color}function j(){var b,a=document.activeElement;if("TEXTAREA"===a.tagName||"INPUT"===a.tagName&&"text"===a.getAttribute("type")){var d=c(1)(a,a.selectionStart);return b=a.getBoundingClientRect(),{x:d.left+b.left,y:d.top+b.top,color:i(a)}}var e=window.getSelection();if(e.rangeCount){var f=e.getRangeAt(0),g=f.startContainer;return g.nodeType===document.TEXT_NODE&&(g=g.parentNode),b=f.getBoundingClientRect(),{x:b.left,y:b.top,color:i(g)}}return{x:0,y:0,color:"transparent"}}function k(a,b,c){return{x:a,y:b,alpha:1,color:c,velocity:{x:-1+2*Math.random(),y:-3.5+2*Math.random()}}}function l(){for(var a=j(),b=5+Math.round(10*Math.random());b--;)f[g]=k(a.x,a.y,a.color),g=(g+1)%500;if(l.shake){var c=1+2*Math.random(),d=c*(Math.random()>.5?-1:1),e=c*(Math.random()>.5?-1:1);document.body.style.marginLeft=d+"px",document.body.style.marginTop=e+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75)}}function m(){requestAnimationFrame(m),e.clearRect(0,0,d.width,d.height);for(var a=0;a<f.length;++a){var b=f[a];b.alpha<=.1||(b.velocity.y+=.075,b.x+=b.velocity.x,b.y+=b.velocity.y,b.alpha*=.96,e.globalAlpha=b.alpha,e.fillStyle=b.color,e.fillRect(Math.round(b.x-1.5),Math.round(b.y-1.5),3,3))}}var d=document.createElement("canvas");d.width=window.innerWidth,d.height=window.innerHeight,d.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){d.width=window.innerWidth,d.height=window.innerHeight}),document.body.appendChild(d);var e=d.getContext("2d"),f=[],g=0;l.shake=!0,l.colorful=!1,requestAnimationFrame(m),a.exports=l},function(a,b){!function(){function d(a,d,e){var f=e&&e.debug||!1;if(f){var g=document.querySelector("#input-textarea-caret-position-mirror-div");g&&g.parentNode.removeChild(g)}var h=document.createElement("div");h.id="input-textarea-caret-position-mirror-div",document.body.appendChild(h);var i=h.style,j=window.getComputedStyle?getComputedStyle(a):a.currentStyle;i.whiteSpace="pre-wrap","INPUT"!==a.nodeName&&(i.wordWrap="break-word"),i.position="absolute",f||(i.visibility="hidden"),b.forEach(function(a){i[a]=j[a]}),c?a.scrollHeight>parseInt(j.height)&&(i.overflowY="scroll"):i.overflow="hidden",h.textContent=a.value.substring(0,d),"INPUT"===a.nodeName&&(h.textContent=h.textContent.replace(/\s/g," "));var k=document.createElement("span");k.textContent=a.value.substring(d)||".",h.appendChild(k);var l={top:k.offsetTop+parseInt(j.borderTopWidth),left:k.offsetLeft+parseInt(j.borderLeftWidth)};return f?k.style.backgroundColor="#aaa":document.body.removeChild(h),l}var b=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],c=null!=window.mozInnerScreenX;"undefined"!=typeof a&&"undefined"!=typeof a.exports?a.exports=d:window.getCaretCoordinates=d}()}])});
