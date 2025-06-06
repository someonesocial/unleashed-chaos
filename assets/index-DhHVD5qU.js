import{o as G,r as g,j as d,m as x,A as tn,u as nn,a as Ge,b as K}from"./animations-Dbac4OIK.js";import{c as rn}from"./three-BwjENIbd.js";import{l as on,f as an}from"./particles-BABLV0q5.js";import"./vendor-DJG_os-6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var O=function(){return O=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},O.apply(this,arguments)};function ue(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var A="-ms-",le="-moz-",E="-webkit-",jt="comm",$e="rule",it="decl",sn="@import",At="@keyframes",cn="@layer",zt=Math.abs,ot=String.fromCharCode,qe=Object.assign;function dn(e,t){return T(e,0)^45?(((t<<2^T(e,0))<<2^T(e,1))<<2^T(e,2))<<2^T(e,3):0}function $t(e){return e.trim()}function H(e,t){return(e=t.exec(e))?e[0]:e}function m(e,t,n){return e.replace(t,n)}function ve(e,t,n){return e.indexOf(t,n)}function T(e,t){return e.charCodeAt(t)|0}function Q(e,t,n){return e.slice(t,n)}function F(e){return e.length}function Rt(e){return e.length}function de(e,t){return t.push(e),e}function ln(e,t){return e.map(t).join("")}function ft(e,t){return e.filter(function(n){return!H(n,t)})}var Re=1,ee=1,Tt=0,D=0,R=0,ie="";function Te(e,t,n,r,i,o,a,c){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Re,column:ee,length:a,return:"",siblings:c}}function V(e,t){return qe(Te("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Z(e){for(;e.root;)e=V(e.root,{children:[e]});de(e,e.siblings)}function un(){return R}function fn(){return R=D>0?T(ie,--D):0,ee--,R===10&&(ee=1,Re--),R}function L(){return R=D<Tt?T(ie,D++):0,ee++,R===10&&(ee=1,Re++),R}function X(){return T(ie,D)}function Se(){return D}function Oe(e,t){return Q(ie,e,t)}function Xe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pn(e){return Re=ee=1,Tt=F(ie=e),D=0,[]}function hn(e){return ie="",e}function Me(e){return $t(Oe(D-1,Ze(e===91?e+2:e===40?e+1:e)))}function gn(e){for(;(R=X())&&R<33;)L();return Xe(e)>2||Xe(R)>3?"":" "}function mn(e,t){for(;--t&&L()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return Oe(e,Se()+(t<6&&X()==32&&L()==32))}function Ze(e){for(;L();)switch(R){case e:return D;case 34:case 39:e!==34&&e!==39&&Ze(R);break;case 40:e===41&&Ze(e);break;case 92:L();break}return D}function bn(e,t){for(;L()&&e+R!==57;)if(e+R===84&&X()===47)break;return"/*"+Oe(t,D-1)+"*"+ot(e===47?e:L())}function yn(e){for(;!Xe(X());)L();return Oe(e,D)}function xn(e){return hn(ke("",null,null,null,[""],e=pn(e),0,[0],e))}function ke(e,t,n,r,i,o,a,c,s){for(var l=0,u=0,f=a,y=0,h=0,S=0,k=1,z=1,I=1,w=0,v="",j=i,$=o,C=r,b=v;z;)switch(S=w,w=L()){case 40:if(S!=108&&T(b,f-1)==58){ve(b+=m(Me(w),"&","&\f"),"&\f",zt(l?c[l-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:b+=Me(w);break;case 9:case 10:case 13:case 32:b+=gn(S);break;case 92:b+=mn(Se()-1,7);continue;case 47:switch(X()){case 42:case 47:de(wn(bn(L(),Se()),t,n,s),s);break;default:b+="/"}break;case 123*k:c[l++]=F(b)*I;case 125*k:case 59:case 0:switch(w){case 0:case 125:z=0;case 59+u:I==-1&&(b=m(b,/\f/g,"")),h>0&&F(b)-f&&de(h>32?ht(b+";",r,n,f-1,s):ht(m(b," ","")+";",r,n,f-2,s),s);break;case 59:b+=";";default:if(de(C=pt(b,t,n,l,u,i,c,v,j=[],$=[],f,o),o),w===123)if(u===0)ke(b,t,C,C,j,o,f,c,$);else switch(y===99&&T(b,3)===110?100:y){case 100:case 108:case 109:case 115:ke(e,C,C,r&&de(pt(e,C,C,0,0,i,c,v,i,j=[],f,$),$),i,$,f,c,r?j:$);break;default:ke(b,C,C,C,[""],$,0,c,$)}}l=u=h=0,k=I=1,v=b="",f=a;break;case 58:f=1+F(b),h=S;default:if(k<1){if(w==123)--k;else if(w==125&&k++==0&&fn()==125)continue}switch(b+=ot(w),w*k){case 38:I=u>0?1:(b+="\f",-1);break;case 44:c[l++]=(F(b)-1)*I,I=1;break;case 64:X()===45&&(b+=Me(L())),y=X(),u=f=F(v=b+=yn(Se())),w++;break;case 45:S===45&&F(b)==2&&(k=0)}}return o}function pt(e,t,n,r,i,o,a,c,s,l,u,f){for(var y=i-1,h=i===0?o:[""],S=Rt(h),k=0,z=0,I=0;k<r;++k)for(var w=0,v=Q(e,y+1,y=zt(z=a[k])),j=e;w<S;++w)(j=$t(z>0?h[w]+" "+v:m(v,/&\f/g,h[w])))&&(s[I++]=j);return Te(e,t,n,i===0?$e:c,s,l,u,f)}function wn(e,t,n,r){return Te(e,t,n,jt,ot(un()),Q(e,2,-2),0,r)}function ht(e,t,n,r,i){return Te(e,t,n,it,Q(e,0,r),Q(e,r+1,-1),r,i)}function Ot(e,t,n){switch(dn(e,t)){case 5103:return E+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return E+e+e;case 4789:return le+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return E+e+le+e+A+e+e;case 5936:switch(T(e,t+11)){case 114:return E+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return E+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return E+e+A+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return E+e+A+e+e;case 6165:return E+e+A+"flex-"+e+e;case 5187:return E+e+m(e,/(\w+).+(:[^]+)/,E+"box-$1$2"+A+"flex-$1$2")+e;case 5443:return E+e+A+"flex-item-"+m(e,/flex-|-self/g,"")+(H(e,/flex-|baseline/)?"":A+"grid-row-"+m(e,/flex-|-self/g,""))+e;case 4675:return E+e+A+"flex-line-pack"+m(e,/align-content|flex-|-self/g,"")+e;case 5548:return E+e+A+m(e,"shrink","negative")+e;case 5292:return E+e+A+m(e,"basis","preferred-size")+e;case 6060:return E+"box-"+m(e,"-grow","")+E+e+A+m(e,"grow","positive")+e;case 4554:return E+m(e,/([^-])(transform)/g,"$1"+E+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,E+"$1"),/(image-set)/,E+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,E+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+E+e+e;case 4200:if(!H(e,/flex-|baseline/))return A+"grid-column-align"+Q(e,t)+e;break;case 2592:case 3360:return A+m(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,H(r.props,/grid-\w+-end/)})?~ve(e+(n=n[t].value),"span",0)?e:A+m(e,"-start","")+e+A+"grid-row-span:"+(~ve(n,"span",0)?H(n,/\d+/):+H(n,/\d+/)-+H(e,/\d+/))+";":A+m(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return H(r.props,/grid-\w+-start/)})?e:A+m(m(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,E+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(e)-1-t>6)switch(T(e,t+1)){case 109:if(T(e,t+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+E+"$2-$3$1"+le+(T(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ve(e,"stretch",0)?Ot(m(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return m(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,c,s,l){return A+i+":"+o+l+(a?A+i+"-span:"+(c?s:+s-+o)+l:"")+e});case 4949:if(T(e,t+6)===121)return m(e,":",":"+E)+e;break;case 6444:switch(T(e,T(e,14)===45?18:11)){case 120:return m(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+E+(T(e,14)===45?"inline-":"")+"box$3$1"+E+"$2$3$1"+A+"$2box$3")+e;case 100:return m(e,":",":"+A)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return m(e,"scroll-","scroll-snap-")+e}return e}function Ee(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function vn(e,t,n,r){switch(e.type){case cn:if(e.children.length)break;case sn:case it:return e.return=e.return||e.value;case jt:return"";case At:return e.return=e.value+"{"+Ee(e.children,r)+"}";case $e:if(!F(e.value=e.props.join(",")))return""}return F(n=Ee(e.children,r))?e.return=e.value+"{"+n+"}":""}function Sn(e){var t=Rt(e);return function(n,r,i,o){for(var a="",c=0;c<t;c++)a+=e[c](n,r,i,o)||"";return a}}function kn(e){return function(t){t.root||(t=t.return)&&e(t)}}function Cn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case it:e.return=Ot(e.value,e.length,n);return;case At:return Ee([V(e,{value:m(e.value,"@","@"+E)})],r);case $e:if(e.length)return ln(n=e.props,function(i){switch(H(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Z(V(e,{props:[m(i,/:(read-\w+)/,":"+le+"$1")]})),Z(V(e,{props:[i]})),qe(e,{props:ft(n,r)});break;case"::placeholder":Z(V(e,{props:[m(i,/:(plac\w+)/,":"+E+"input-$1")]})),Z(V(e,{props:[m(i,/:(plac\w+)/,":"+le+"$1")]})),Z(V(e,{props:[m(i,/:(plac\w+)/,A+"input-$1")]})),Z(V(e,{props:[i]})),qe(e,{props:ft(n,r)});break}return""})}}var In={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},te=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",Pt="active",Nt="data-styled-version",Pe="6.1.18",at=`/*!sc*/
`,je=typeof window<"u"&&typeof document<"u",En=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),jn={},Ne=Object.freeze([]),ne=Object.freeze({});function Dt(e,t,n){return n===void 0&&(n=ne),e.theme!==n.theme&&e.theme||t||n.theme}var _t=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),An=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zn=/(^-|-$)/g;function gt(e){return e.replace(An,"-").replace(zn,"")}var $n=/(a)(d)/gi,xe=52,mt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Je(e){var t,n="";for(t=Math.abs(e);t>xe;t=t/xe|0)n=mt(t%xe)+n;return(mt(t%xe)+n).replace($n,"$1-$2")}var We,Lt=5381,J=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ft=function(e){return J(Lt,e)};function Bt(e){return Je(Ft(e)>>>0)}function Rn(e){return e.displayName||e.name||"Component"}function Ve(e){return typeof e=="string"&&!0}var Ht=typeof Symbol=="function"&&Symbol.for,Gt=Ht?Symbol.for("react.memo"):60115,Tn=Ht?Symbol.for("react.forward_ref"):60112,On={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Pn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nn=((We={})[Tn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},We[Gt]=Mt,We);function bt(e){return("type"in(t=e)&&t.type.$$typeof)===Gt?Mt:"$$typeof"in e?Nn[e.$$typeof]:On;var t}var Dn=Object.defineProperty,_n=Object.getOwnPropertyNames,yt=Object.getOwnPropertySymbols,Ln=Object.getOwnPropertyDescriptor,Fn=Object.getPrototypeOf,xt=Object.prototype;function Wt(e,t,n){if(typeof t!="string"){if(xt){var r=Fn(t);r&&r!==xt&&Wt(e,r,n)}var i=_n(t);yt&&(i=i.concat(yt(t)));for(var o=bt(e),a=bt(t),c=0;c<i.length;++c){var s=i[c];if(!(s in Pn||n&&n[s]||a&&s in a||o&&s in o)){var l=Ln(t,s);try{Dn(e,s,l)}catch{}}}}return e}function re(e){return typeof e=="function"}function st(e){return typeof e=="object"&&"styledComponentId"in e}function q(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qe(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function fe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function et(e,t,n){if(n===void 0&&(n=!1),!n&&!fe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=et(e[r],t[r]);else if(fe(t))for(var r in t)e[r]=et(e[r],t[r]);return e}function ct(e,t){Object.defineProperty(e,"toString",{value:t})}function pe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Bn=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw pe(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(c,n[a])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(at);return n},e}(),Ce=new Map,Ae=new Map,Ie=1,we=function(e){if(Ce.has(e))return Ce.get(e);for(;Ae.has(Ie);)Ie++;var t=Ie++;return Ce.set(e,t),Ae.set(t,e),t},Hn=function(e,t){Ie=t+1,Ce.set(e,t),Ae.set(t,e)},Gn="style[".concat(te,"][").concat(Nt,'="').concat(Pe,'"]'),Mn=new RegExp("^".concat(te,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wn=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Vn=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(at),i=[],o=0,a=r.length;o<a;o++){var c=r[o].trim();if(c){var s=c.match(Mn);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(Hn(u,l),Wn(e,u,s[3]),e.getTag().insertRules(l,i)),i.length=0}else i.push(c)}}},wt=function(e){for(var t=document.querySelectorAll(Gn),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(te)!==Pt&&(Vn(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Yn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(c){var s=Array.from(c.querySelectorAll("style[".concat(te,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(te,Pt),r.setAttribute(Nt,Pe);var a=Yn();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Un=function(){function e(t){this.element=Vt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw pe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Kn=function(){function e(t){this.element=Vt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qn=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),vt=je,Xn={isServer:!je,useCSSOMInjection:!En},ze=function(){function e(t,n,r){t===void 0&&(t=ne),n===void 0&&(n={});var i=this;this.options=O(O({},Xn),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&je&&vt&&(vt=!1,wt(this)),ct(this,function(){return function(o){for(var a=o.getTag(),c=a.length,s="",l=function(f){var y=function(I){return Ae.get(I)}(f);if(y===void 0)return"continue";var h=o.names.get(y),S=a.getGroup(f);if(h===void 0||!h.size||S.length===0)return"continue";var k="".concat(te,".g").concat(f,'[id="').concat(y,'"]'),z="";h!==void 0&&h.forEach(function(I){I.length>0&&(z+="".concat(I,","))}),s+="".concat(S).concat(k,'{content:"').concat(z,'"}').concat(at)},u=0;u<c;u++)l(u);return s}(i)})}return e.registerId=function(t){return we(t)},e.prototype.rehydrate=function(){!this.server&&je&&wt(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(O(O({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new qn(i):r?new Un(i):new Kn(i)}(this.options),new Bn(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(we(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(we(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(we(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Zn=/&/g,Jn=/^\s*\/\/.*$/gm;function Yt(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Yt(n.children,t)),n})}function Qn(e){var t,n,r,i=ne,o=i.options,a=o===void 0?ne:o,c=i.plugins,s=c===void 0?Ne:c,l=function(y,h,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):y},u=s.slice();u.push(function(y){y.type===$e&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Zn,n).replace(r,l))}),a.prefix&&u.push(Cn),u.push(vn);var f=function(y,h,S,k){h===void 0&&(h=""),S===void 0&&(S=""),k===void 0&&(k="&"),t=k,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var z=y.replace(Jn,""),I=xn(S||h?"".concat(S," ").concat(h," { ").concat(z," }"):z);a.namespace&&(I=Yt(I,a.namespace));var w=[];return Ee(I,Sn(u.concat(kn(function(v){return w.push(v)})))),w};return f.hash=s.length?s.reduce(function(y,h){return h.name||pe(15),J(y,h.name)},Lt).toString():"",f}var er=new ze,tt=Qn(),Ut=G.createContext({shouldForwardProp:void 0,styleSheet:er,stylis:tt});Ut.Consumer;G.createContext(void 0);function nt(){return g.useContext(Ut)}var tr=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=tt);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ct(this,function(){throw pe(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=tt),this.name+t.hash},e}(),nr=function(e){return e>="A"&&e<="Z"};function St(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;nr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Kt=function(e){return e==null||e===!1||e===""},qt=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Kt(o)&&(Array.isArray(o)&&o.isCss||re(o)?r.push("".concat(St(i),":"),o,";"):fe(o)?r.push.apply(r,ue(ue(["".concat(i," {")],qt(o),!1),["}"],!1)):r.push("".concat(St(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in In||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Y(e,t,n,r){if(Kt(e))return[];if(st(e))return[".".concat(e.styledComponentId)];if(re(e)){if(!re(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Y(i,t,n,r)}var o;return e instanceof tr?n?(e.inject(n,r),[e.getName(r)]):[e]:fe(e)?qt(e):Array.isArray(e)?Array.prototype.concat.apply(Ne,e.map(function(a){return Y(a,t,n,r)})):[e.toString()]}function Xt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!st(n))return!1}return!0}var rr=Ft(Pe),ir=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Xt(t),this.componentId=n,this.baseHash=J(rr,n),this.baseStyle=r,ze.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=q(i,this.staticRulesId);else{var o=Qe(Y(this.rules,t,n,r)),a=Je(J(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var c=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,c)}i=q(i,a),this.staticRulesId=a}else{for(var s=J(this.baseHash,r.hash),l="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")l+=f;else if(f){var y=Qe(Y(f,t,n,r));s=J(s,y+u),l+=y}}if(l){var h=Je(s>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(l,".".concat(h),void 0,this.componentId)),i=q(i,h)}}return i},e}(),dt=G.createContext(void 0);dt.Consumer;var Ye={};function or(e,t,n){var r=st(e),i=e,o=!Ve(e),a=t.attrs,c=a===void 0?Ne:a,s=t.componentId,l=s===void 0?function(j,$){var C=typeof j!="string"?"sc":gt(j);Ye[C]=(Ye[C]||0)+1;var b="".concat(C,"-").concat(Bt(Pe+C+Ye[C]));return $?"".concat($,"-").concat(b):b}(t.displayName,t.parentComponentId):s,u=t.displayName,f=u===void 0?function(j){return Ve(j)?"styled.".concat(j):"Styled(".concat(Rn(j),")")}(e):u,y=t.displayName&&t.componentId?"".concat(gt(t.displayName),"-").concat(t.componentId):t.componentId||l,h=r&&i.attrs?i.attrs.concat(c).filter(Boolean):c,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(t.shouldForwardProp){var z=t.shouldForwardProp;S=function(j,$){return k(j,$)&&z(j,$)}}else S=k}var I=new ir(n,y,r?i.componentStyle:void 0);function w(j,$){return function(C,b,_){var N=C.attrs,De=C.componentStyle,oe=C.defaultProps,he=C.foldedComponentIds,_e=C.styledComponentId,Le=C.target,Qt=G.useContext(dt),en=nt(),Fe=C.shouldForwardProp||en.shouldForwardProp,lt=Dt(b,Qt,oe)||ne,B=function(me,se,be){for(var ce,U=O(O({},se),{className:void 0,theme:be}),He=0;He<me.length;He+=1){var ye=re(ce=me[He])?ce(U):ce;for(var W in ye)U[W]=W==="className"?q(U[W],ye[W]):W==="style"?O(O({},U[W]),ye[W]):ye[W]}return se.className&&(U.className=q(U.className,se.className)),U}(N,b,lt),ge=B.as||Le,ae={};for(var M in B)B[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&B.theme===lt||(M==="forwardedAs"?ae.as=B.forwardedAs:Fe&&!Fe(M,ge)||(ae[M]=B[M]));var ut=function(me,se){var be=nt(),ce=me.generateAndInjectStyles(se,be.styleSheet,be.stylis);return ce}(De,B),Be=q(he,_e);return ut&&(Be+=" "+ut),B.className&&(Be+=" "+B.className),ae[Ve(ge)&&!_t.has(ge)?"class":"className"]=Be,_&&(ae.ref=_),g.createElement(ge,ae)}(v,j,$)}w.displayName=f;var v=G.forwardRef(w);return v.attrs=h,v.componentStyle=I,v.displayName=f,v.shouldForwardProp=S,v.foldedComponentIds=r?q(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=y,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?function($){for(var C=[],b=1;b<arguments.length;b++)C[b-1]=arguments[b];for(var _=0,N=C;_<N.length;_++)et($,N[_],!0);return $}({},i.defaultProps,j):j}}),ct(v,function(){return".".concat(v.styledComponentId)}),o&&Wt(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function kt(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ct=function(e){return Object.assign(e,{isCss:!0})};function Zt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(re(e)||fe(e))return Ct(Y(kt(Ne,ue([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Y(r):Ct(Y(kt(r,t)))}function rt(e,t,n){if(n===void 0&&(n=ne),!t)throw pe(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Zt.apply(void 0,ue([i],o,!1)))};return r.attrs=function(i){return rt(e,t,O(O({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return rt(e,t,O(O({},n),i))},r}var Jt=function(e){return rt(or,e)},p=Jt;_t.forEach(function(e){p[e]=Jt(e)});var ar=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Xt(t),ze.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Qe(Y(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ze.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function sr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zt.apply(void 0,ue([e],t,!1)),i="sc-global-".concat(Bt(JSON.stringify(r))),o=new ar(r,i),a=function(s){var l=nt(),u=G.useContext(dt),f=G.useRef(l.styleSheet.allocateGSInstance(i)).current;return l.styleSheet.server&&c(f,s,l.styleSheet,u,l.stylis),G.useLayoutEffect(function(){if(!l.styleSheet.server)return c(f,s,l.styleSheet,u,l.stylis),function(){return o.removeStyles(f,l.styleSheet)}},[f,s,l.styleSheet,u,l.stylis]),null};function c(s,l,u,f,y){if(o.isStatic)o.renderStyles(s,jn,u,y);else{var h=O(O({},l),{theme:Dt(l,f,a.defaultProps)});o.renderStyles(s,h,u,y)}}return G.memo(a)}const cr=({chaosMode:e})=>{const t=g.useCallback(async r=>{await on(r)},[]),n=g.useMemo(()=>({background:{color:{value:e?"#ff6b6b":"transparent"}},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:e?["#ff6b6b","#4ecdc4","#feca57","#ff9ff3"]:["#ffffff"]},links:{color:"#ffffff",distance:150,enable:!0,opacity:.3,width:1},collisions:{enable:!0},move:{directions:"none",enable:!0,outModes:{default:"bounce"},random:!0,speed:e?5:2,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.7,random:!0,animation:{enable:!0,speed:1,minimumValue:.1}},shape:{type:["circle","triangle","polygon"],polygon:{sides:6}},size:{value:e?{min:3,max:10}:{min:1,max:5},animation:{enable:!0,speed:3,minimumValue:.1}}},detectRetina:!0}),[e]);return d.jsx(an,{id:"tsparticles",init:t,options:n,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})},dr=p.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`,lr=p(x.h1)`
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  text-align: center;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #feca57, #ff9ff3);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease infinite;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 30px rgba(255, 107, 107, 0.5));

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`,ur=p(x.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #fff;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 3rem;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
`,fr=p(x.div)`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  background: ${e=>e.color};
  border-radius: ${e=>e.rounded?"50%":"0"};
  filter: blur(1px);
  opacity: 0.7;
`,pr=p(x.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  background: linear-gradient(45deg, #feca57, #ff9ff3, #4ecdc4);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(254, 202, 87, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #ff6b6b, #45b7d1, #feca57);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }
`,hr=({onChaosToggle:e,chaosMode:t})=>{const[n,r]=g.useState([]),[i,o]=g.useState({x:0,y:0});return g.useEffect(()=>{const a=()=>{const s=[];for(let l=0;l<15;l++)s.push({id:l,size:Math.random()*100+20,x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,color:["rgba(255, 107, 107, 0.6)","rgba(78, 205, 196, 0.6)","rgba(69, 183, 209, 0.6)","rgba(254, 202, 87, 0.6)","rgba(255, 159, 243, 0.6)"][Math.floor(Math.random()*5)],rounded:Math.random()>.5});r(s)};a(),window.addEventListener("resize",a);const c=s=>{o({x:s.clientX,y:s.clientY})};return window.addEventListener("mousemove",c),()=>{window.removeEventListener("resize",a),window.removeEventListener("mousemove",c)}},[]),d.jsxs(dr,{children:[n.map(a=>d.jsx(fr,{size:a.size,color:a.color,rounded:a.rounded,animate:{x:[a.x,a.x+(i.x-a.x)*.1],y:[a.y,a.y+(i.y-a.y)*.1],rotate:[0,360],scale:[1,1.2,1]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}},a.id)),d.jsx(lr,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{duration:1.5,type:"spring",stiffness:100},children:"UNLEASHED CHAOS"}),d.jsx(ur,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.5,duration:1},children:"Tauchen Sie ein in eine Welt, wo Kreativität keine Grenzen kennt. Erleben Sie das Unmögliche. Spüren Sie das Unvorhersagbare. Willkommen im Chaos der Sinne."}),d.jsx(pr,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:1,duration:.5},whileHover:{scale:1.1},whileTap:{scale:.95},onClick:e,children:d.jsx("span",{children:"CHAOS ENTFESSELN"})})]})},gr=p.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${e=>e.chaosMode?"linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #feca57 50%, #ff9ff3 75%, #45b7d1 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  background-size: ${e=>e.chaosMode?"400% 400%":"100% 100%"};
  animation: ${e=>e.chaosMode?"gradientShift 3s ease infinite":"none"};

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`,mr=p(x.div)`
  position: absolute;
  border-radius: ${e=>e.borderRadius||"0px"};
  background: ${e=>e.background};
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  cursor: pointer;
  filter: ${e=>e.filter||"none"};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,br=p(x.h2)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  color: white;
  text-align: center;
  z-index: 10;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
`,yr=({chaosMode:e})=>{const[t,n]=g.useState([]),[r,i]=g.useState({x:0,y:0}),o=g.useRef(null);g.useEffect(()=>{const c=()=>{const u=[{type:"circle",borderRadius:"50%"},{type:"square",borderRadius:"0px"},{type:"rounded-square",borderRadius:"20px"},{type:"pill",borderRadius:"100px"}],f=["linear-gradient(45deg, #ff6b6b, #ee5a6f)","linear-gradient(45deg, #4ecdc4, #44a08d)","linear-gradient(45deg, #45b7d1, #96c93d)","linear-gradient(45deg, #feca57, #ff9ff3)","linear-gradient(45deg, #fd79a8, #fdcb6e)","linear-gradient(45deg, #6c5ce7, #a29bfe)"],y=Array.from({length:e?35:20},(h,S)=>{const k=u[Math.floor(Math.random()*u.length)],z=Math.random()*(e?150:100)+(e?30:50);return{id:S,x:Math.random()*(window.innerWidth-z),y:Math.random()*(window.innerHeight-z),width:z,height:z,borderRadius:k.borderRadius,background:f[Math.floor(Math.random()*f.length)],rotationSpeed:(Math.random()-.5)*(e?5:2),scale:1,filter:Math.random()>(e?.3:.7)?"blur(2px)":"none"}});n(y)};c();const s=u=>{if(o.current){const f=o.current.getBoundingClientRect();i({x:u.clientX-f.left,y:u.clientY-f.top})}},l=()=>{c()};return window.addEventListener("mousemove",s),window.addEventListener("resize",l),()=>{window.removeEventListener("mousemove",s),window.removeEventListener("resize",l)}},[e]);const a=c=>{n(s=>s.map(l=>l.id===c?{...l,x:Math.random()*(window.innerWidth-l.width),y:Math.random()*(window.innerHeight-l.height),scale:l.scale===1?1.5:1}:l))};return d.jsxs(gr,{ref:o,chaosMode:e,children:[d.jsx(br,{initial:{opacity:0,y:-50},whileInView:{opacity:1,y:0},animate:e?{color:["#fff","#ff6b6b","#4ecdc4","#feca57","#ff9ff3","#fff"]}:{},transition:e?{duration:2,repeat:1/0}:{duration:1},children:e?"CHAOTISCHE DIMENSIONEN":"INTERAKTIVE DIMENSIONEN"}),t.map(c=>{const s=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)),l=Math.max(0,(e?300:200)-s)/(e?300:200);return d.jsx(mr,{width:c.width,height:c.height,borderRadius:c.borderRadius,background:c.background,filter:c.filter,animate:{x:c.x+(r.x-c.x)*l*(e?.3:.1),y:c.y+(r.y-c.y)*l*(e?.3:.1),rotate:c.rotationSpeed*l*(e?360:180),scale:c.scale+l*(e?.8:.3)},transition:{type:"spring",stiffness:e?400:300,damping:e?20:30},whileHover:{scale:c.scale*(e?1.5:1.2),rotate:e?720:180,filter:e?"brightness(2) saturate(2) hue-rotate(90deg)":"brightness(1.5) saturate(1.5)"},whileTap:{scale:c.scale*.8},onClick:()=>a(c.id)},c.id)})]})},xr=p.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: ${e=>e.chaosMode?"linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #feca57 50%, #ff9ff3 75%, #45b7d1 100%)":"linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"};
  background-size: ${e=>e.chaosMode?"400% 400%":"100% 100%"};
  animation: ${e=>e.chaosMode?"chaosGradient 8s ease infinite":"none"};
  position: relative;
  overflow: hidden;

  @keyframes chaosGradient {
    0% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 50% 100%; }
    75% { background-position: 0% 0%; }
    100% { background-position: 0% 50%; }
  }
`,wr=p(x.h2)`
  font-size: 4rem;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
`,vr=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.chaosMode?"3rem":"2rem"};
  max-width: 1200px;
  margin: 0 auto;
  transform: ${e=>e.chaosMode?"perspective(1000px) rotateX(5deg)":"none"};
`,Sr=p(x.div)`
  position: relative;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background: ${e=>e.background};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,kr=p(x.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 2rem;
  text-align: center;
`,Cr=p.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`,Ir=p.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`,Er=p(x.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`,jr=p(x.div)`
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  color: white;
  text-align: center;
  position: relative;
`,Ar=p.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,zr=p(x.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  margin: 2rem auto;
  cursor: pointer;
`,$r=({chaosMode:e})=>{const[t,n]=g.useState(null),[r,i]=g.useState(0),o=[{id:1,title:"Fraktale Träume",description:"Verlieren Sie sich in unendlichen mathematischen Mustern, die Ihre Wahrnehmung herausfordern.",background:"linear-gradient(45deg, #ff6b6b, #ee5a6f, #ff8a80)",interactive:!0},{id:2,title:"Digitale Synapsen",description:"Erleben Sie das Feuern von Neuronen in einer digitalen Interpretation des Bewusstseins.",background:"linear-gradient(45deg, #4ecdc4, #44a08d, #26d0ce)",interactive:!1},{id:3,title:"Zeitverzerrung",description:"Spüren Sie, wie die Zeit ihre linearen Eigenschaften verliert und zu einem Kunstwerk wird.",background:"linear-gradient(45deg, #45b7d1, #96c93d, #74b9ff)",interactive:!0},{id:4,title:"Emotion.exe",description:"Was passiert, wenn Maschinen lernen zu fühlen? Eine digitale Interpretation menschlicher Emotionen.",background:"linear-gradient(45deg, #feca57, #ff9ff3, #fd79a8)",interactive:!1},{id:5,title:"Chaos Theorie",description:"Der Schmetterlingseffekt visualisiert - kleine Änderungen führen zu gewaltigen Transformationen.",background:"linear-gradient(45deg, #fd79a8, #fdcb6e, #e17055)",interactive:!0},{id:6,title:"Quantenrealität",description:"Tauchen Sie ein in die bizarre Welt der Quantenmechanik, wo nichts ist, wie es scheint.",background:"linear-gradient(45deg, #6c5ce7, #a29bfe, #fd79a8)",interactive:!1}];g.useEffect(()=>{const s=setInterval(()=>{i(l=>(l+1)%4)},2e3);return()=>clearInterval(s)},[]);const a=s=>{n(s)},c=()=>{n(null)};return d.jsxs(xr,{chaosMode:e,children:[d.jsx(wr,{initial:{opacity:0,y:-50},whileInView:{opacity:1,y:0},animate:e?{rotateY:[0,15,-15,0],color:["#fff","#ff6b6b","#4ecdc4","#feca57","#ff9ff3","#fff"]}:{},transition:e?{duration:4,repeat:1/0}:{duration:1},children:e?"CHAOTISCHE REALITÄTEN":"CHAOS GALERIE"}),d.jsx(vr,{chaosMode:e,children:o.map((s,l)=>d.jsx(Sr,{background:s.background,initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},whileHover:{scale:e?1.15:1.05,boxShadow:e?"0 40px 80px rgba(255, 107, 107, 0.6)":"0 30px 60px rgba(0, 0, 0, 0.5)",rotateY:e?10:0},animate:e?{rotateZ:[0,2,-2,0],filter:["brightness(1)","brightness(1.2)","brightness(1)"]}:{},transition:e?{duration:3+l*.5,repeat:1/0}:{delay:l*.1,duration:.6},onClick:()=>a(s),children:d.jsxs(kr,{whileHover:{background:e?"rgba(255, 107, 107, 0.3)":"rgba(0, 0, 0, 0.7)"},children:[d.jsx(Cr,{children:s.title}),d.jsx(Ir,{children:s.description}),s.interactive&&d.jsxs(x.div,{style:{marginTop:"1rem",fontSize:"0.9rem",opacity:.8},animate:{color:e?["#fff","#ff6b6b","#4ecdc4","#feca57","#ff9ff3"]:["#fff","#ff6b6b","#4ecdc4","#feca57"],scale:e?[1,1.1,1]:1},transition:{duration:e?1.5:2,repeat:1/0},children:["✨ ",e?"ULTRA-Interaktiv":"Interaktiv"]})]})},s.id))}),d.jsx(tn,{children:t&&d.jsx(Er,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:c,children:d.jsxs(jr,{initial:{scale:.5,rotate:-10},animate:{scale:1,rotate:0},exit:{scale:.5,rotate:10},onClick:s=>s.stopPropagation(),children:[d.jsx(Ar,{onClick:c,children:"×"}),d.jsx("h2",{style:{marginBottom:"1rem",fontSize:"2rem"},children:t.title}),d.jsx("p",{style:{marginBottom:"2rem",fontSize:"1.1rem",lineHeight:1.6},children:t.description}),t.interactive&&d.jsx(zr,{animate:{rotate:[0,360],scale:[1,1.2,1],borderRadius:["50%","0%","50%"]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},whileHover:{scale:1.5,background:"linear-gradient(45deg, #feca57, #ff9ff3, #45b7d1)"},onClick:()=>i(s=>s+1)}),d.jsx("p",{style:{fontSize:"0.9rem",opacity:.8},children:t.interactive?"Klicken Sie auf das Element oben für Interaktion!":"Lassen Sie dieses Kunstwerk auf sich wirken."})]})})})]})},Rr=p.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.chaosMode?"linear-gradient(45deg, #ff6b6b, #000, #4ecdc4, #000, #feca57, #000)":"linear-gradient(45deg, #000, #2d1b69, #000)"};
  background-size: ${e=>e.chaosMode?"600% 600%":"100% 100%"};
  animation: ${e=>e.chaosMode?"chaosWave 4s ease infinite":"none"};
  position: relative;
  overflow: hidden;

  @keyframes chaosWave {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 50% 100%; }
    75% { background-position: 0% 0%; }
  }
`,Tr=p.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: ${e=>e.chaosMode?"400px":"300px"};
  gap: ${e=>e.chaosMode?"3px":"5px"};
  margin: 2rem 0;
  transform: ${e=>e.chaosMode?"perspective(500px) rotateX(15deg)":"none"};
`,Or=p(x.div)`
  width: ${e=>e.chaosMode?"12px":"8px"};
  background: ${e=>e.chaosMode?"linear-gradient(to top, #ff6b6b, #4ecdc4, #feca57, #ff9ff3, #45b7d1)":"linear-gradient(to top, #ff6b6b, #4ecdc4, #feca57)"};
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 ${e=>e.chaosMode?"30px":"20px"} rgba(255, 107, 107, ${e=>e.chaosMode?"0.8":"0.5"});
  filter: ${e=>e.chaosMode?"saturate(1.5) brightness(1.2)":"none"};
`,It=p(x.button)`
  padding: 15px 30px;
  margin: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);

  &:hover {
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
  }
`,Pr=p(x.h2)`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #feca57);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Nr=({chaosMode:e})=>{const[t,n]=g.useState(!1),[r,i]=g.useState(new Array(e?80:50).fill(0)),[o,a]=g.useState(null),[c,s]=g.useState(null),[l,u]=g.useState(null),[f,y]=g.useState(null),h=g.useRef(),S=()=>{const I=e?80:50,w=new Array(I).fill(0).map(()=>Math.random()*(e?150:100));i(w)},k=()=>{if(t){n(!1),h.current&&cancelAnimationFrame(h.current);return}n(!0);const I=()=>{S(),t&&(h.current=requestAnimationFrame(I))};I()},z=async I=>{const w=I.target.files[0];if(w)try{const v=new(window.AudioContext||window.webkitAudioContext),j=new FileReader;j.onload=async $=>{try{const C=$.target.result,b=await v.decodeAudioData(C),_=v.createBufferSource(),N=v.createAnalyser();N.fftSize=256;const De=N.frequencyBinCount,oe=new Uint8Array(De);_.buffer=b,_.connect(N),N.connect(v.destination),a(v),s(N),u(oe),y(_),_.start(),n(!0);const he=()=>{if(!N)return;N.getByteFrequencyData(oe);const _e=Array.from(oe).slice(0,50).map(Le=>Le/255*100);i(_e),t&&(h.current=requestAnimationFrame(he))};he()}catch(C){console.error("Error decoding audio:",C),S()}},j.readAsArrayBuffer(w)}catch(v){console.error("Error setting up audio:",v),S()}};return g.useEffect(()=>()=>{h.current&&cancelAnimationFrame(h.current),o&&o.close()},[o]),d.jsxs(Rr,{chaosMode:e,children:[d.jsx(Pr,{initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},animate:e?{rotateX:[0,15,-15,0],color:["#fff","#ff6b6b","#4ecdc4","#feca57","#ff9ff3","#fff"]}:{},transition:e?{duration:3,repeat:1/0}:{duration:1},children:e?"CHAOTISCHE KLANGWELLEN":"SOUND WAVES"}),d.jsx(Tr,{chaosMode:e,children:r.map((I,w)=>d.jsx(Or,{chaosMode:e,animate:{height:Math.max(10,I*(e?3:2)),backgroundColor:`hsl(${(I*3+w*7)%360}, 70%, 60%)`,rotateZ:e?Math.sin(Date.now()*.001+w)*10:0,scaleX:e?1+Math.sin(Date.now()*.002+w)*.3:1},transition:{duration:e?.05:.1,ease:"easeOut"}},w))}),d.jsxs("div",{children:[d.jsx(It,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:k,children:t?"STOP BEAT":"START BEAT"}),d.jsx("input",{type:"file",accept:"audio/*",onChange:z,style:{display:"none"},id:"audio-upload"}),d.jsx(It,{as:"label",htmlFor:"audio-upload",whileHover:{scale:1.05},whileTap:{scale:.95},children:"UPLOAD MUSIK"})]}),d.jsxs(x.p,{style:{color:"white",textAlign:"center",marginTop:"2rem",fontSize:"1.2rem",opacity:.8},initial:{opacity:0},whileInView:{opacity:.8},transition:{delay:.5},children:["Erleben Sie, wie Musik zu visueller Kunst wird.",d.jsx("br",{}),"Laden Sie Ihre Lieblingsmusik hoch oder starten Sie den Beat-Generator."]})]})},Dr=p.section`
  min-height: 200vh;
  background: ${e=>e.chaosMode?"linear-gradient(180deg, #ff6b6b, #4ecdc4, #feca57, #ff9ff3, #45b7d1, #000)":"linear-gradient(180deg, #000, #1a1a2e, #16213e, #0f3460)"};
  position: relative;
  overflow: hidden;
  filter: ${e=>e.chaosMode?"contrast(1.2) saturate(1.5)":"none"};
`,Et=p(x.div)`
  position: fixed;
  font-size: clamp(2rem, 8vw, 8rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #fff;
  z-index: 5;
  pointer-events: none;
  white-space: nowrap;
`,_r=p(x.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #feca57, #ff9ff3);
  z-index: 1000;
  transform-origin: left;
`,Ue=p(x.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  position: relative;
`,Lr=p(x.div)`
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  position: absolute;
  filter: blur(1px);
`,Fr=p(x.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: ${e=>e.color};
  border-radius: ${e=>e.rounded?"50%":"20px"};
  opacity: 0.7;
`,Ke=p(x.h2)`
  font-size: clamp(2rem, 6vw, 4rem);
  color: white;
  text-align: center;
  margin: 2rem 0;
  overflow: hidden;
`,Br=p(x.div)`
  text-align: center;
  color: white;
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  margin: 2rem;
  backdrop-filter: blur(10px);
`,Hr=({chaosMode:e})=>{const t=g.useRef(null),{scrollYProgress:n}=nn({target:t,offset:["start start","end end"]}),r=g.useRef(null),i=g.useRef(null),o=g.useRef(null),a=Ge(r,{once:!1}),c=Ge(i,{once:!1}),s=Ge(o,{once:!1}),l=K(n,[0,1],[0,e?-800:-500]),u=K(n,[0,1],[0,e?-1200:-800]);K(n,[0,1],[0,e?-600:-300]);const f=K(n,[0,1],[0,e?1440:720]),y=K(n,[0,.5,1],[1,e?3:2,.5]),h=K(n,[0,.5,1],[1,.5,1]),S=[{id:1,color:"rgba(255, 107, 107, 0.6)",x:"10%",y:"20%",rounded:!0},{id:2,color:"rgba(78, 205, 196, 0.6)",x:"80%",y:"30%",rounded:!1},{id:3,color:"rgba(254, 202, 87, 0.6)",x:"20%",y:"70%",rounded:!0},{id:4,color:"rgba(255, 159, 243, 0.6)",x:"70%",y:"80%",rounded:!1},{id:5,color:"rgba(69, 183, 209, 0.6)",x:"50%",y:"50%",rounded:!0}];return d.jsxs(Dr,{ref:t,chaosMode:e,children:[d.jsx(_r,{style:{scaleX:n}}),d.jsx(Et,{style:{top:"20%",left:"10%",y:l,rotate:f},animate:e?{color:["transparent","#ff6b6b","#4ecdc4","#feca57","transparent"]}:{},transition:e?{duration:3,repeat:1/0}:{},children:e?"ULTRA-CHAOS":"CHAOS"}),d.jsx(Et,{style:{top:"60%",right:"10%",y:u,rotate:f},animate:e?{color:["transparent","#ff9ff3","#45b7d1","#feca57","transparent"]}:{},transition:e?{duration:4,repeat:1/0}:{},children:e?"ENTFESSELT":"UNLEASHED"}),S.map((k,z)=>d.jsx(Fr,{color:k.color,rounded:k.rounded,style:{left:k.x,top:k.y,y:K(n,[0,1],[0,-200-z*(e?150:100)])},animate:{rotate:[0,e?720:360],scale:[1,e?1.5:1.2,1],filter:e?["brightness(1) saturate(1)","brightness(1.5) saturate(2)","brightness(1) saturate(1)"]:void 0},transition:{duration:e?3+z:5+z,repeat:1/0,ease:"easeInOut"}},k.id)),d.jsxs(Ue,{children:[d.jsx(Lr,{style:{scale:y,rotate:f,opacity:h},animate:{borderRadius:["50%","20%","50%","0%","50%"]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),d.jsx(Ke,{ref:r,initial:{y:100,opacity:0},animate:a?{y:0,opacity:1}:{y:100,opacity:0},transition:{duration:1,ease:"easeOut"},style:e?{background:"linear-gradient(45deg, #ff6b6b, #4ecdc4, #feca57)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}:{},children:e?"Die Realität explodiert in tausend Farben":"Die Grenzen der Realität verschwimmen"})]}),d.jsx(Ue,{style:{marginTop:"20vh"},children:d.jsx(Ke,{ref:i,initial:{x:-100,opacity:0},animate:c?{x:0,opacity:1}:{x:-100,opacity:0},transition:{duration:1,delay:.3},style:e?{background:"linear-gradient(45deg, #ff9ff3, #45b7d1, #feca57)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}:{},children:e?"Chaos regiert in dieser verrückten Dimension":"Willkommen in einer neuen Dimension"})}),d.jsx(Ue,{style:{marginTop:"20vh"},children:d.jsx(Ke,{ref:o,initial:{scale:0,opacity:0},animate:s?{scale:1,opacity:1}:{scale:0,opacity:0},transition:{duration:1,delay:.5},style:e?{background:"linear-gradient(45deg, #4ecdc4, #ff6b6b, #ff9ff3)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}:{},children:e?"Wo ALLES und NICHTS gleichzeitig möglich ist!":"Wo alles möglich ist"})}),d.jsxs(Br,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{duration:1.5},children:[d.jsx(x.h2,{style:{fontSize:"3rem",marginBottom:"2rem"},animate:{background:["linear-gradient(45deg, #ff6b6b, #4ecdc4)","linear-gradient(45deg, #4ecdc4, #feca57)","linear-gradient(45deg, #feca57, #ff9ff3)","linear-gradient(45deg, #ff9ff3, #ff6b6b)"]},transition:{duration:4,repeat:1/0},children:"Das Chaos hat Sie erfasst"}),d.jsxs(x.p,{style:{fontSize:"1.3rem",lineHeight:1.6,marginBottom:"2rem"},initial:{opacity:0},whileInView:{opacity:1},transition:{delay:1,duration:1},children:["Sie haben eine Reise durch die unendlichen Möglichkeiten der digitalen Kunst erlebt.",d.jsx("br",{}),"Jeder Klick, jede Bewegung, jeder Moment war einzigartig.",d.jsx("br",{}),"Das ist die Kraft des entfesselten Chaos."]}),d.jsx(x.button,{style:{padding:"1rem 2rem",fontSize:"1.2rem",background:"linear-gradient(45deg, #667eea, #764ba2)",color:"white",border:"none",borderRadius:"30px",cursor:"pointer"},whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Erneut ins Chaos stürzen"})]})]})},Gr=p(x.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
`,Mr=p(x.button)`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #feca57);
  background-size: 300% 300%;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: gradientShift 3s ease infinite;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`,Wr=p(x.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #ff6b6b, transparent);
  border-radius: 50%;
  pointer-events: none;
`,Vr=({chaosMode:e,onToggle:t})=>{const[n,r]=g.useState([]),i=()=>{const o={id:Date.now(),x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight};r(a=>[...a,o]),setTimeout(()=>{r(a=>a.filter(c=>c.id!==o.id))},1e3),t()};return d.jsxs(d.Fragment,{children:[d.jsx(Gr,{children:d.jsx(Mr,{whileHover:{scale:1.1},whileTap:{scale:.9},animate:e?{rotate:[0,360],scale:[1,1.2,1]}:{},transition:e?{duration:2,repeat:1/0}:{},onClick:i,children:e?"🌪️ CHAOS ON":"⚡ ACTIVATE CHAOS"})}),n.map(o=>d.jsx(Wr,{initial:{scale:0,x:o.x,y:o.y,opacity:1},animate:{scale:10,opacity:0},transition:{duration:1}},o.id))]})},Yr=p.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`,Ur=p(x.div)`
  position: absolute;
  font-size: ${e=>e.size}px;
  color: ${e=>e.color};
  text-shadow: 0 0 20px currentColor;
  pointer-events: none;
  user-select: none;
`,Kr=p(x.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10000;
  background: rgba(255, 107, 107, 0.1);
  mix-blend-mode: overlay;
`,qr=({chaosMode:e,mousePosition:t})=>{const[n,r]=g.useState([]),[i,o]=g.useState(!1),a=["⚡","🌪️","💥","🔥","⭐","💫","🌈","🎆","🎨","🎭"],c=["CHAOS!","WILD!","UNLEASHED!","BOOM!","MAGIC!"];return g.useEffect(()=>{if(e){const s=setInterval(()=>{const l={id:Date.now()+Math.random(),x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,content:Math.random()>.5?a[Math.floor(Math.random()*a.length)]:c[Math.floor(Math.random()*c.length)],size:Math.random()*40+20,color:`hsl(${Math.random()*360}, 70%, 50%)`};r(u=>[...u,l]),setTimeout(()=>{r(u=>u.filter(f=>f.id!==l.id))},3e3)},500);return()=>clearInterval(s)}},[e]),g.useEffect(()=>{if(e){const s=setInterval(()=>{o(!0),setTimeout(()=>o(!1),200)},3e3);return()=>clearInterval(s)}},[e]),d.jsxs(d.Fragment,{children:[d.jsx(Yr,{children:n.map(s=>d.jsx(Ur,{size:s.size,color:s.color,initial:{x:s.x,y:s.y,opacity:0,scale:0},animate:{y:s.y-200,opacity:[0,1,1,0],scale:[0,1.2,1,.8],rotate:[0,360]},transition:{duration:3,ease:"easeOut"},children:s.content},s.id))}),i&&d.jsx(Kr,{animate:{x:[0,-5,5,-5,5,0],y:[0,-5,5,-5,5,0]},transition:{duration:.2}})]})},Xr=p(x.div)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 300px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  border: 2px solid #ff6b6b;
  z-index: 1000;
`,Zr=p.h3`
  color: #ff6b6b;
  margin-bottom: 1rem;
  text-align: center;
`,Jr=p.div`
  color: white;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.2rem;
`,Qr=p(x.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
`,ei=({chaosMode:e})=>{const[t,n]=g.useState(0),[r,i]=g.useState([]),[o,a]=g.useState(!1);g.useEffect(()=>{e&&!o?(a(!0),n(0)):e||(a(!1),i([]))},[e,o]),g.useEffect(()=>{if(o){const s=setInterval(()=>{const l={id:Date.now(),x:Math.random()*(window.innerWidth-100),y:Math.random()*(window.innerHeight-100)};i(u=>[...u,l]),setTimeout(()=>{i(u=>u.filter(f=>f.id!==l.id))},2e3)},1e3);return()=>clearInterval(s)}},[o]);const c=s=>{n(l=>l+10),i(l=>l.filter(u=>u.id!==s))};return e?d.jsxs(d.Fragment,{children:[d.jsxs(Xr,{initial:{x:-300},animate:{x:0},exit:{x:-300},children:[d.jsx(Zr,{children:"🎯 CHAOS CATCHER"}),d.jsxs(Jr,{children:["Score: ",t]}),d.jsx("div",{style:{color:"white",fontSize:"0.9rem",textAlign:"center"},children:"Click the floating targets!"})]}),r.map(s=>d.jsx(Qr,{initial:{x:s.x,y:s.y,scale:0},animate:{scale:[0,1.2,1],rotate:[0,360]},exit:{scale:0},transition:{duration:.3},onClick:()=>c(s.id),whileHover:{scale:1.2},whileTap:{scale:.8}},s.id))]}):null},ti=sr`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #000;
    overflow-x: hidden;
    cursor: none;
  }

  html {
    scroll-behavior: smooth;
  }
`,ni=p(x.div)`
  position: relative;
  min-height: 100vh;
  background: ${e=>e.chaosMode?"linear-gradient(45deg, #ff6b6b, #4ecdc4, #feca57, #ff9ff3, #45b7d1)":"linear-gradient(45deg, #000, #1a0033, #000, #330066, #000)"};
  background-size: 400% 400%;
  animation: gradientShift ${e=>e.chaosMode?"2s":"15s"} ease infinite;
  transition: all 0.5s ease;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`,ri=p(x.div)`
  position: fixed;
  width: ${e=>e.chaosMode?"40px":"20px"};
  height: ${e=>e.chaosMode?"40px":"20px"};
  background: ${e=>e.chaosMode?"radial-gradient(circle, #ff6b6b, #4ecdc4, #feca57, #ff9ff3)":"radial-gradient(circle, #ff6b6b, #4ecdc4, #45b7d1)"};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  box-shadow: 0 0 ${e=>e.chaosMode?"40px":"20px"} rgba(255, 107, 107, 0.5);
  transition: all 0.3s ease;
`;function ii(){const[e,t]=g.useState({x:0,y:0}),[n,r]=g.useState(!1),[i,o]=g.useState(0);g.useEffect(()=>{const c=l=>{t({x:l.clientX,y:l.clientY})},s=()=>{o(l=>l+1),i>=9&&!n&&(r(!0),setTimeout(()=>r(!1),3e4))};return window.addEventListener("mousemove",c),window.addEventListener("click",s),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("click",s)}},[i,n]);const a=()=>{r(c=>!c)};return d.jsxs(d.Fragment,{children:[d.jsx(ti,{}),d.jsxs(ni,{chaosMode:n,animate:n?{filter:["hue-rotate(0deg)","hue-rotate(360deg)"]}:{},transition:n?{duration:5,repeat:1/0}:{},children:[d.jsx(ri,{chaosMode:n,animate:{x:e.x-(n?20:10),y:e.y-(n?20:10),rotate:n?[0,360]:0},transition:{type:"spring",stiffness:500,damping:28,rotate:n?{duration:2,repeat:1/0}:{}}}),d.jsx(cr,{chaosMode:n}),d.jsx(Vr,{chaosMode:n,onToggle:a}),d.jsx(qr,{chaosMode:n,mousePosition:e}),d.jsx(ei,{chaosMode:n}),d.jsx(hr,{onChaosToggle:a,chaosMode:n}),d.jsx(yr,{chaosMode:n}),d.jsx(Nr,{chaosMode:n}),d.jsx($r,{chaosMode:n}),d.jsx(Hr,{chaosMode:n})]})]})}rn.createRoot(document.getElementById("root")).render(d.jsx(g.StrictMode,{children:d.jsx(ii,{})}));
