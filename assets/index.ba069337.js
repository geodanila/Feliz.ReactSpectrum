import{r as n,a as Fl,_ as Il,D as U,F,W as Vr,A as N,T as y,b as ht,I as A,B as L,V as R,c as Ie,L as Nr,d as Gt,e as Bl,f as dn,g as sr,h as Mr,i as ur,j as Dl,k as Vl,l as Nl,m as Ml,n as Rl,o as zl,p as Pl,q as pn,s as mr,P as Ht,R as Qe,t as Z,C as z,u as dr,G as hn,v as Ll,w as Be,S as ve,M as te,x as re,K as pr,y as Rr,z as zr,E as Ot,H as Pr,J as ft,N as ae,O as fn,Q as _l,U as Gl,X as Hl,Y as He,Z as et,$ as _,a0 as se,a1 as gt,a2 as ne,a3 as hr,a4 as tt,a5 as xt,a6 as rt,a7 as nt,a8 as Wt,a9 as jt,aa as qt,ab as Ol,ac as Wl,ad as jl,ae as Q,af as Et,ag as ue,ah as K,ai as Lr,aj as J,ak as gn,al as xn,am as Oe,an as We,ao as ql,ap as Ul,aq as En,ar as Kl,as as Jl,at as je,au as fr,av as $l,aw as St,ax as gr,ay as Ut,az as _r,aA as Gr,aB as Yl,aC as bt,aD as Xl,aE as Zl,aF as Ql,aG as ei,aH as ti,aI as ri}from"./vendor.c5d32169.js";const ni=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=l(a);fetch(a.href,c)}};ni();function qe(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function li(e){return typeof e.CompareTo=="function"}function ii(e){return typeof e.Equals=="function"}function ai(e){return typeof e.GetHashCode=="function"}function xr(e,t){return Object.getPrototypeOf(e).constructor===Object.getPrototypeOf(t).constructor}class oi{constructor(t){this.iter=t}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this.iter.next();return this.current=t.value,!t.done}["System.Collections.IEnumerator.Reset"](){throw new Error("JS iterators cannot be reset")}Dispose(){}}function Ue(e){return typeof e.GetEnumerator=="function"?e.GetEnumerator():new oi(e[Symbol.iterator]())}function Sn(e){return{[Symbol.iterator](){return this},next(){const t=e["System.Collections.IEnumerator.MoveNext"](),l=t?e["System.Collections.IEnumerator.get_Current"]():void 0;return{done:!t,value:l}}}}function Le(e,t){let l=e.toString(10);for(;l.length<t;)l="0"+l;return l}function bn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function yn(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Ke{static id(t){return Ke.idMap.has(t)||Ke.idMap.set(t,++Ke.count),Ke.idMap.get(t)}}Ke.idMap=new WeakMap;Ke.count=0;function ci(e){let t=0,l=5381;const i=e.length;for(;t<i;)l=l*33^e.charCodeAt(t++);return l}function Hr(e){return e*2654435761|0}function Kt(e){return e.length===0?0:e.reduce((t,l)=>(t<<5)+t^l)}function si(e){return e.getTime()}function ui(e){const t=e.length,l=new Array(t);for(let i=0;i<t;i++)l[i]=yt(e[i]);return Kt(l)}function yt(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return Hr(e);case"string":return ci(e);default:{if(ai(e))return e.GetHashCode();if(qe(e))return ui(e);if(e instanceof Date)return si(e);if(Object.getPrototypeOf(e).constructor===Object){const t=Object.values(e).map(l=>yt(l));return Kt(t)}else return Hr(Ke.id(e))}}}function mi(e,t,l){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!l(e[i],t[i]))return!1;return!0}function Cn(e,t){return mi(e,t,Jt)}function di(e,t){const l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return!1;l.sort(),i.sort();for(let a=0;a<l.length;a++)if(l[a]!==i[a]||!Jt(e[l[a]],t[i[a]]))return!1;return!0}function Jt(e,t){return e===t?!0:e==null?t==null:t==null||typeof e!="object"?!1:ii(e)?e.Equals(t):qe(e)?qe(t)&&Cn(e,t):e instanceof Date?t instanceof Date&&An(e,t)===0:Object.getPrototypeOf(e).constructor===Object&&di(e,t)}function An(e,t){let l,i;return"offset"in e&&"offset"in t?(l=e.getTime(),i=t.getTime()):(l=e.getTime()+bn(e),i=t.getTime()+bn(t)),l===i?0:l<i?-1:1}function vn(e,t){return e===t?0:e<t?-1:1}function pi(e,t,l){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let i=0,a=0;i<e.length;i++)if(a=l(e[i],t[i]),a!==0)return a;return 0}function wn(e,t){return pi(e,t,lt)}function hi(e,t){const l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return l.length<i.length?-1:1;l.sort(),i.sort();for(let a=0,c=0;a<l.length;a++){const s=l[a];if(s!==i[a])return s<i[a]?-1:1;if(c=lt(e[s],t[s]),c!==0)return c}return 0}function lt(e,t){return e===t?0:e==null?t==null?0:-1:t==null?1:typeof e!="object"?e<t?-1:1:li(e)?e.CompareTo(t):qe(e)?qe(t)?wn(e,t):-1:e instanceof Date?t instanceof Date?An(e,t):-1:Object.getPrototypeOf(e).constructor===Object?hi(e,t):-1}function kn(e,t,l){return e(t,l)>0?t:l}function fe(e){const t={};for(const l of e)t[l[0]]=l[1];return t}const $t=Symbol("curried");function Or(e,t){if(t==null||t.length>1)return t;const l=(...i)=>{let a=t;for(let c=0;c<e;c++)a=a(i[c]);return a};return l[$t]=t,l}function Wr(e,t,l){return i=>t===1?l(...e.concat([i])):Wr(e.concat([i]),t-1,l)}function Tn(e,t){return t==null||t.length===1?t:$t in t?t[$t]:Wr([],e,t)}function fi(e,t,l){if(t!=null)if($t in t){t=t[$t];for(let i=0;i<l.length;i++)t=t(l[i]);return t}else return Wr(l,e,t)}function gi(e){let t=0,l="[";for(const i of e){if(t===0)l+=De(i);else if(t===100){l+="; ...";break}else l+="; "+De(i);t++}return l+"]"}function De(e,t=0){if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return gi(e);{const l=Object.getPrototypeOf(e).constructor;return l===Object&&t<10?"{ "+Object.entries(e).map(([i,a])=>i+" = "+De(a,t+1)).join(`
  `)+" }":l.name}}return String(e)}function xi(e,t){if(t.length===0)return e;{let l="",i=!0;return t.length===1?(l=De(t[0]),i=l.indexOf(" ")>=0):l=t.map(a=>De(a)).join(", "),e+(i?" (":" ")+l+(i?")":"")}}class jr{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return xi(this.name,this.fields)}GetHashCode(){const t=this.fields.map(l=>yt(l));return t.splice(0,0,Hr(this.tag)),Kt(t)}Equals(t){return this===t?!0:xr(this,t)&&this.tag===t.tag?Cn(this.fields,t.fields):!1}CompareTo(t){return this===t?0:xr(this,t)?this.tag===t.tag?wn(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function Ei(e){const t={},l=Object.keys(e);for(let i=0;i<l.length;i++)t[l[i]]=e[l[i]];return t}function Si(e){return"{ "+Object.entries(e).map(([t,l])=>t+" = "+De(l)).join(`
  `)+" }"}function bi(e){const t=Object.values(e).map(l=>yt(l));return Kt(t)}function yi(e,t){if(e===t)return!0;if(xr(e,t)){const l=Object.keys(e);for(let i=0;i<l.length;i++)if(!Jt(e[l[i]],t[l[i]]))return!1;return!0}else return!1}function Ci(e,t){if(e===t)return 0;if(xr(e,t)){const l=Object.keys(e);for(let i=0;i<l.length;i++){const a=lt(e[l[i]],t[l[i]]);if(a!==0)return a}return 0}else return-1}class it{toJSON(){return Ei(this)}toString(){return Si(this)}GetHashCode(){return bi(this)}Equals(t){return yi(this,t)}CompareTo(t){return Ci(this,t)}}const Je=Symbol("numeric");function Ai(e){return typeof e=="number"||(e==null?void 0:e[Je])}function vi(e,t){return typeof e=="number"?e<t?-1:e>t?1:0:e.CompareTo(t)}function wi(e,t){return typeof e=="number"?e*t:e[Je]().multiply(t)}function ki(e,t){return typeof e=="number"?e.toFixed(t):e[Je]().toFixed(t)}function Fn(e,t){return typeof e=="number"?e.toPrecision(t):e[Je]().toPrecision(t)}function In(e,t){return typeof e=="number"?e.toExponential(t):e[Je]().toExponential(t)}function Bn(e){return typeof e=="number"?(Number(e)>>>0).toString(16):e[Je]().toHex()}var H={GetHashCode(){return Kt([this.s,this.e].concat(this.c))},Equals(e){return!this.cmp(e)},CompareTo(e){return this.cmp(e)},[Je](){const e=this;return{multiply:t=>e.mul(t),toPrecision:t=>e.toPrecision(t),toExponential:t=>e.toExponential(t),toFixed:t=>e.toFixed(t),toHex:()=>(Number(e)>>>0).toString(16)}}},Ti=28,Fi=1,at=1e6,Dn=1e6,Ii=-29,Bi=29,Di=!1,Yt="[big.js] ",ot=Yt+"Invalid ",Er=ot+"decimal places",Vi=ot+"rounding mode",Vn=Yt+"Division by zero",Ve=void 0,Ni=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Nn(){function e(t){var l=this;if(!(l instanceof e))return t===Ve?Nn():new e(t);if(t instanceof e)l.s=t.s,l.e=t.e,l.c=t.c.slice(),Mi(l);else{if(typeof t!="string"){if(e.strict===!0)throw TypeError(ot+"number");t=t===0&&1/t<0?"-0":String(t)}Ri(l,t)}l.constructor=e}return e.prototype=H,e.DP=Ti,e.RM=Fi,e.NE=Ii,e.PE=Bi,e.strict=Di,e}function Mi(e){if(e.c.length>1&&!e.c[0]){let t=e.c.findIndex(l=>l);e.c=e.c.slice(t),e.e=e.e-t}}function Ri(e,t){var l,i,a;if(!Ni.test(t))throw Error(ot+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(l=t.indexOf("."))>-1&&(t=t.replace(".","")),(i=t.search(/e/i))>0?(l<0&&(l=i),l+=+t.slice(i+1),t=t.substring(0,i)):l<0&&(l=t.length),a=t.length,i=0;i<l&&i<a&&t.charAt(i)=="0";)++i;if(i==a)e.c=[e.e=0];else for(e.e=l-i-1,e.c=[],l=0;i<a;)e.c[l++]=+t.charAt(i++);return e=$e(e,Ye.DP+1,Ye.RM),e}function $e(e,t,l,i){var a=e.c;if(l===Ve&&(l=Ye.RM),l!==0&&l!==1&&l!==2&&l!==3)throw Error(Vi);if(t<1)i=l===3&&(i||!!a[0])||t===0&&(l===1&&a[0]>=5||l===2&&(a[0]>5||a[0]===5&&(i||a[1]!==Ve))),a.length=1,i?(e.e=e.e-t+1,a[0]=1):a[0]=e.e=0;else if(t<a.length){const c=a.findIndex((s,d)=>d>=t&&s>0)<0;if(i=l===1&&a[t]>=5||l===2&&(a[t]>5||a[t]===5&&(i||a[t+1]!==Ve||a[t-1]&1))||l===3&&(i||!c),a.length=t--,i)for(;++a[t]>9;)a[t]=0,t--||(++e.e,a.unshift(1));for(t=a.length;!a[--t];)a.pop()}return e}function Ct(e,t,l){var i=e.e,a=e.c.join(""),c=a.length;if(t)a=a.charAt(0)+(c>1?"."+a.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)a="0"+a;a="0."+a}else if(i>0)if(++i>c)for(i-=c;i--;)a+="0";else i<c&&(a=a.slice(0,i)+"."+a.slice(i));else c>1&&(a=a.charAt(0)+"."+a.slice(1));return e.s<0&&l?"-"+a:a}H.abs=function(){var e=new this.constructor(this);return e.s=1,e};H.cmp=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.c,c=e.c,s=i.s,d=e.s,h=i.e,p=e.e;if(!a[0]||!c[0])return a[0]?s:c[0]?-d:0;if(s!=d)return s;if(t=s<0,h!=p)return h>p^t?1:-1;for(d=Math.max(a.length,c.length),s=0;s<d;s++)if(h=s<a.length?a[s]:0,p=s<c.length?c[s]:0,h!=p)return h>p^t?1:-1;return 0};H.div=function(e){var t=this.constructor,l=new t(this),e=new t(e),i=l.c,a=e.c,c=l.s==e.s?1:-1,s=t.DP;if(s!==~~s||s<0||s>at)throw Error(Er);if(!a[0])throw Error(Vn);if(!i[0])return e.s=c,e.c=[e.e=0],e;var d,h,p,g,S,T=a.slice(),M=d=a.length,O=i.length,G=i.slice(0,d),ee=G.length,pt=e,Br=pt.c=[],Dr=0,_t=s+(pt.e=l.e-e.e)+1;for(pt.s=c,c=_t<0?0:_t,T.unshift(0);ee++<d;)G.push(0);do{for(p=0;p<10;p++){if(d!=(ee=G.length))g=d>ee?1:-1;else for(S=-1,g=0;++S<d;)if(a[S]!=G[S]){g=a[S]>G[S]?1:-1;break}if(g<0){for(h=ee==d?a:T;ee;){if(G[--ee]<h[ee]){for(S=ee;S&&!G[--S];)G[S]=9;--G[S],G[ee]+=10}G[ee]-=h[ee]}for(;!G[0];)G.shift()}else break}Br[Dr++]=g?p:++p,G[0]&&g?G[ee]=i[M]||0:G=[i[M]]}while((M++<O||G[0]!==Ve)&&c--);return!Br[0]&&Dr!=1&&(Br.shift(),pt.e--,_t--),Dr>_t&&$e(pt,_t,t.RM,G[0]!==Ve),pt};H.eq=function(e){return this.cmp(e)===0};H.gt=function(e){return this.cmp(e)>0};H.gte=function(e){return this.cmp(e)>-1};H.lt=function(e){return this.cmp(e)<0};H.lte=function(e){return this.cmp(e)<1};H.minus=H.sub=function(e){var t,l,i,a,c=this.constructor,s=new c(this),e=new c(e),d=s.s,h=e.s;if(d!=h)return e.s=-h,s.plus(e);var p=s.c.slice(),g=s.e,S=e.c,T=e.e;if(!p[0]||!S[0])return S[0]?e.s=-h:p[0]?e=new c(s):e.s=1,e;if(d=g-T){for((a=d<0)?(d=-d,i=p):(T=g,i=S),i.reverse(),h=d;h--;)i.push(0);i.reverse()}else for(l=((a=p.length<S.length)?p:S).length,d=h=0;h<l;h++)if(p[h]!=S[h]){a=p[h]<S[h];break}if(a&&(i=p,p=S,S=i,e.s=-e.s),(h=(l=S.length)-(t=p.length))>0)for(;h--;)p[t++]=0;for(h=t;l>d;){if(p[--l]<S[l]){for(t=l;t&&!p[--t];)p[t]=9;--p[t],p[l]+=10}p[l]-=S[l]}for(;p[--h]===0;)p.pop();for(;p[0]===0;)p.shift(),--T;return p[0]||(e.s=1,p=[T=0]),e.c=p,e.e=T,e};H.mod=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.s,c=e.s;if(!e.c[0])throw Error(Vn);return i.s=e.s=1,t=e.cmp(i)==1,i.s=a,e.s=c,t?new l(i):(a=l.DP,c=l.RM,l.DP=l.RM=0,i=i.div(e),l.DP=a,l.RM=c,this.minus(i.times(e)))};H.plus=H.add=function(e){var t,l,i,a=this.constructor,c=new a(this),e=new a(e);if(c.s!=e.s)return e.s=-e.s,c.minus(e);var s=c.e,d=c.c,h=e.e,p=e.c;if(!d[0]||!p[0])return p[0]||(d[0]?e=new a(c):e.s=c.s),e;if(d=d.slice(),t=s-h){for(t>0?(h=s,i=p):(t=-t,i=d),i.reverse();t--;)i.push(0);i.reverse()}for(d.length-p.length<0&&(i=p,p=d,d=i),t=p.length,l=0;t;d[t]%=10)l=(d[--t]=d[t]+p[t]+l)/10|0;for(l&&(d.unshift(l),++h),t=d.length;d[--t]===0;)d.pop();return e.c=d,e.e=h,e};H.pow=function(e){var t=this.constructor,l=new t(this),i=new t("1"),a=new t("1"),c=e<0;if(e!==~~e||e<-Dn||e>Dn)throw Error(ot+"exponent");for(c&&(e=-e);e&1&&(i=i.times(l)),e>>=1,!!e;)l=l.times(l);return c?a.div(i):i};H.prec=function(e,t){if(e!==~~e||e<1||e>at)throw Error(ot+"precision");return $e(new this.constructor(this),e,t)};H.round=function(e,t){if(e===Ve)e=0;else if(e!==~~e||e<-at||e>at)throw Error(Er);return $e(new this.constructor(this),e+this.e+1,t)};H.sqrt=function(){var e,t,l,i=this.constructor,a=new i(this),c=a.s,s=a.e,d=new i("0.5");if(!a.c[0])return new i(a);if(c<0)throw Error(Yt+"No square root");c=Math.sqrt(a+""),c===0||c===1/0?(t=a.c.join(""),t.length+s&1||(t+="0"),c=Math.sqrt(t),s=((s+1)/2|0)-(s<0||s&1),e=new i((c==1/0?"5e":(c=c.toExponential()).slice(0,c.indexOf("e")+1))+s)):e=new i(c+""),s=e.e+(i.DP+=4);do l=e,e=d.times(l.plus(a.div(l)));while(l.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return $e(e,(i.DP-=4)+e.e+1,i.RM)};H.times=H.mul=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.c,c=e.c,s=a.length,d=c.length,h=i.e,p=e.e;if(e.s=i.s==e.s?1:-1,!a[0]||!c[0])return e.c=[e.e=0],e;for(e.e=h+p,s<d&&(t=a,a=c,c=t,p=s,s=d,d=p),t=new Array(p=s+d);p--;)t[p]=0;for(h=d;h--;){for(d=0,p=s+h;p>h;)d=t[p]+c[h]*a[p-h-1]+d,t[p--]=d%10,d=d/10|0;t[p]=d}for(d?++e.e:t.shift(),h=t.length;!t[--h];)t.pop();return e.c=t,e};H.toExponential=function(e,t){var l=this,i=l.c[0];if(e!==Ve){if(e!==~~e||e<0||e>at)throw Error(Er);for(l=$e(new l.constructor(l),++e,t);l.c.length<e;)l.c.push(0)}return Ct(l,!0,!!i)};H.toFixed=function(e,t){var l=this,i=l.c[0];if(e!==Ve){if(e!==~~e||e<0||e>at)throw Error(Er);for(l=$e(new l.constructor(l),e+l.e+1,t),e=e+l.e+1;l.c.length<e;)l.c.push(0)}return Ct(l,!1,!!i)};H.toJSON=H.toString=function(){var e=this,t=e.constructor;return Ct(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};H.toNumber=function(){var e=Number(Ct(this,!0,!0));if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(Yt+"Imprecise conversion");return e};H.toPrecision=function(e,t){var l=this,i=l.constructor,a=l.c[0];if(e!==Ve){if(e!==~~e||e<1||e>at)throw Error(ot+"precision");for(l=$e(new i(l),e,t);l.c.length<e;)l.c.push(0)}return Ct(l,e<=l.e||l.e<=i.NE||l.e>=i.PE,!!a)};H.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(Yt+"valueOf disallowed");return Ct(e,e.e<=t.NE||e.e>=t.PE,!0)};var Ye=Nn();new Ye(0);new Ye(1);new Ye(-1);new Ye("79228162514264337593543950335");new Ye("-79228162514264337593543950335");var Mn;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(Mn||(Mn={}));function zi(e){return e===-2147483648?e:-e}var ge=null;try{ge=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Ne(e,t,l){this.low=e|0,this.high=t|0,this.unsigned=!!l}Ne.prototype.GetHashCode=function(){let e=this.unsigned?1:0;return e=(e<<5)+e^this.high,e=(e<<5)+e^this.low,e};Ne.prototype.Equals=function(e){return Se(this,e)};Ne.prototype.CompareTo=function(e){return Qt(this,e)};Ne.prototype.toString=function(e){return Zt(this,e)};Ne.prototype.toJSON=function(){return Zt(this)};Ne.prototype[Je]=function(){const e=this;return{multiply:t=>me(e,t),toPrecision:t=>String(e)+0 .toPrecision(t).substr(1),toExponential:t=>String(e)+0 .toExponential(t).substr(1),toFixed:t=>String(e)+0 .toFixed(t).substr(1),toHex:()=>Zt(e.unsigned?e:Zi($i(e),!0),16)}};Object.defineProperty(Ne.prototype,"__isLong__",{value:!0});function we(e){return(e&&e.__isLong__)===!0}var Rn={},zn={};function At(e,t){var l,i,a;return t?(e>>>=0,(a=0<=e&&e<256)&&(i=zn[e],i)?i:(l=W(e,(e|0)<0?-1:0,!0),a&&(zn[e]=l),l)):(e|=0,(a=-128<=e&&e<128)&&(i=Rn[e],i)?i:(l=W(e,e<0?-1:0,!1),a&&(Rn[e]=l),l))}function ke(e,t){if(isNaN(e))return t?Ze:Te;if(t){if(e<0)return Ze;if(e>=_n)return Gi}else{if(e<=-Gn)return xe;if(e+1>=Gn)return _i}return e<0?Y(ke(-e,t)):W(e%vt|0,e/vt|0,t)}function W(e,t,l){return new Ne(e,t,l)}var Sr=Math.pow;function Pn(e,t,l){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return Te;if(typeof t=="number"?(l=t,t=!1):t=!!t,l=l||10,l<2||36<l)throw RangeError("radix");var i=e.indexOf("-");if(i>0)throw Error("interior hyphen");if(i===0)return Y(Pn(e.substring(1),t,l));for(var a=ke(Sr(l,8)),c=Te,s=0;s<e.length;s+=8){var d=Math.min(8,e.length-s),h=parseInt(e.substring(s,s+d),l);if(d<8){var p=ke(Sr(l,d));c=st(me(c,p),ke(h))}else c=me(c,a),c=st(c,ke(h))}return c.unsigned=t,c}function Xe(e,t){return typeof e=="number"?ke(e,t):typeof e=="string"?Pn(e,t):W(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}var Ln=1<<16,Pi=1<<24,vt=Ln*Ln,_n=vt*vt,Gn=_n/2,Hn=At(Pi),Te=At(0),Ze=At(0,!0),Xt=At(1),Li=At(1,!0),On=At(-1),_i=W(4294967295|0,2147483647|0,!1),Gi=W(4294967295|0,4294967295|0,!0),xe=W(0,2147483648|0,!1);function wt(e){return e.unsigned?e.low>>>0:e.low}function br(e){return e.unsigned?(e.high>>>0)*vt+(e.low>>>0):e.high*vt+(e.low>>>0)}function Zt(e,t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(ct(e))return"0";if(Ee(e))if(Se(e,xe)){var l=ke(t),i=_e(e,l),a=kt(me(i,l),e);return Zt(i,t)+wt(a).toString(t)}else return"-"+Zt(Y(e),t);for(var c=ke(Sr(t,6),e.unsigned),s=e,d="";;){var h=_e(s,c),p=wt(kt(s,me(h,c)))>>>0,g=p.toString(t);if(s=h,ct(s))return g+d;for(;g.length<6;)g="0"+g;d=""+g+d}}function ct(e){return e.high===0&&e.low===0}function Ee(e){return!e.unsigned&&e.high<0}function Wn(e){return(e.low&1)==1}function Se(e,t){return we(t)||(t=Xe(t)),e.unsigned!==t.unsigned&&e.high>>>31==1&&t.high>>>31==1?!1:e.high===t.high&&e.low===t.low}function jn(e,t){return Qt(e,t)<0}function qr(e,t){return Qt(e,t)>0}function Hi(e,t){return Qt(e,t)>=0}function Qt(e,t){if(we(t)||(t=Xe(t)),Se(e,t))return 0;var l=Ee(e),i=Ee(t);return l&&!i?-1:!l&&i?1:e.unsigned?t.high>>>0>e.high>>>0||t.high===e.high&&t.low>>>0>e.low>>>0?-1:1:Ee(kt(e,t))?-1:1}function Y(e){return!e.unsigned&&Se(e,xe)?xe:st(Wi(e),Xt)}function st(e,t){we(t)||(t=Xe(t));var l=e.high>>>16,i=e.high&65535,a=e.low>>>16,c=e.low&65535,s=t.high>>>16,d=t.high&65535,h=t.low>>>16,p=t.low&65535,g=0,S=0,T=0,M=0;return M+=c+p,T+=M>>>16,M&=65535,T+=a+h,S+=T>>>16,T&=65535,S+=i+d,g+=S>>>16,S&=65535,g+=l+s,g&=65535,W(T<<16|M,g<<16|S,e.unsigned)}function kt(e,t){return we(t)||(t=Xe(t)),st(e,Y(t))}function me(e,t){if(ct(e))return e.unsigned?Ze:Te;if(we(t)||(t=Xe(t)),ge){var l=ge.mul(e.low,e.high,t.low,t.high);return W(l,ge.get_high(),e.unsigned)}if(ct(t))return e.unsigned?Ze:Te;if(Se(e,xe))return Wn(t)?xe:Te;if(Se(t,xe))return Wn(e)?xe:Te;if(Ee(e))return Ee(t)?me(Y(e),Y(t)):Y(me(Y(e),t));if(Ee(t))return Y(me(e,Y(t)));if(jn(e,Hn)&&jn(t,Hn))return ke(br(e)*br(t),e.unsigned);var i=e.high>>>16,a=e.high&65535,c=e.low>>>16,s=e.low&65535,d=t.high>>>16,h=t.high&65535,p=t.low>>>16,g=t.low&65535,S=0,T=0,M=0,O=0;return O+=s*g,M+=O>>>16,O&=65535,M+=c*g,T+=M>>>16,M&=65535,M+=s*p,T+=M>>>16,M&=65535,T+=a*g,S+=T>>>16,T&=65535,T+=c*p,S+=T>>>16,T&=65535,T+=s*h,S+=T>>>16,T&=65535,S+=i*g+a*p+c*h+s*d,S&=65535,W(M<<16|O,S<<16|T,e.unsigned)}function _e(e,t){if(we(t)||(t=Xe(t)),ct(t))throw Error("division by zero");if(ge){if(!e.unsigned&&e.high===-2147483648&&t.low===-1&&t.high===-1)return e;var l=(e.unsigned?ge.div_u:ge.div_s)(e.low,e.high,t.low,t.high);return W(l,ge.get_high(),e.unsigned)}if(ct(e))return e.unsigned?Ze:Te;var i,a,c;if(e.unsigned){if(t.unsigned||(t=Ji(t)),qr(t,e))return Ze;if(qr(t,Ki(e,1)))return Li;c=Ze}else{if(Se(e,xe)){if(Se(t,Xt)||Se(t,On))return xe;if(Se(t,xe))return Xt;var s=Ui(e,1);return i=qi(_e(s,t),1),Se(i,Te)?Ee(t)?Xt:On:(a=kt(e,me(t,i)),c=st(i,_e(a,t)),c)}else if(Se(t,xe))return e.unsigned?Ze:Te;if(Ee(e))return Ee(t)?_e(Y(e),Y(t)):Y(_e(Y(e),t));if(Ee(t))return Y(_e(e,Y(t)));c=Te}for(a=e;Hi(a,t);){i=Math.max(1,Math.floor(br(a)/br(t)));for(var d=Math.ceil(Math.log(i)/Math.LN2),h=d<=48?1:Sr(2,d-48),p=ke(i),g=me(p,t);Ee(g)||qr(g,a);)i-=h,p=ke(i,e.unsigned),g=me(p,t);ct(p)&&(p=Xt),c=st(c,p),a=kt(a,g)}return c}function Oi(e,t){if(we(t)||(t=Xe(t)),ge){var l=(e.unsigned?ge.rem_u:ge.rem_s)(e.low,e.high,t.low,t.high);return W(l,ge.get_high(),e.unsigned)}return kt(e,me(_e(e,t),t))}function Wi(e){return W(~e.low,~e.high,e.unsigned)}function ji(e,t){return we(t)||(t=Xe(t)),W(e.low&t.low,e.high&t.high,e.unsigned)}function qi(e,t){return we(t)&&(t=wt(t)),(t&=63)==0?e:t<32?W(e.low<<t,e.high<<t|e.low>>>32-t,e.unsigned):W(0,e.low<<t-32,e.unsigned)}function Ui(e,t){return we(t)&&(t=wt(t)),(t&=63)==0?e:t<32?W(e.low>>>t|e.high<<32-t,e.high>>t,e.unsigned):W(e.high>>t-32,e.high>=0?0:-1,e.unsigned)}function Ki(e,t){if(we(t)&&(t=wt(t)),t&=63,t===0)return e;var l=e.high;if(t<32){var i=e.low;return W(i>>>t|l<<32-t,l>>>t,e.unsigned)}else return W(t===32?l:l>>>t-32,0,e.unsigned)}function Ji(e){return e.unsigned?e:W(e.low,e.high,!0)}function $i(e,t){return t?Yi(e):Xi(e)}function Yi(e){var t=e.high,l=e.low;return[l&255,l>>>8&255,l>>>16&255,l>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}function Xi(e){var t=e.high,l=e.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,l>>>24,l>>>16&255,l>>>8&255,l&255]}function Zi(e,t,l){return l?Qi(e,t):ea(e,t)}function Qi(e,t){return new Ne(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)}function ea(e,t){return new Ne(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}const be=st,ye=me,Ge=_e,ta=Oi,ra=Y,Tt=ji,yr=Qt,X=W,Me=wt;function $(e,t,l){let i=e,a=0;switch(l){case 0:i=e<<24>>24,a=i;break;case 4:i=e<<24>>>24;break;case 1:i=e<<16>>16,a=i;break;case 5:i=e<<16>>>16;break;case 2:i=e>>0,a=i;break;case 6:i=e>>>0;break}return W(i,a>>31,t)}function Ur(e){const t=e<0;e=Math.abs(e);const l=~~(e/36e5),i=e%36e5/6e4;return(t?"-":"+")+Le(l,2)+":"+Le(i,2)}function Cr(e,t){const l=e.toISOString();return t==="first"?l.substring(0,l.indexOf("T")):l.substring(l.indexOf("T")+1,l.length-1)}function na(e,t){if(t)return e.toISOString();{const l=e.kind==null?!0:e.kind===2;return Le(e.getFullYear(),4)+"-"+Le(e.getMonth()+1,2)+"-"+Le(e.getDate(),2)+"T"+Le(e.getHours(),2)+":"+Le(e.getMinutes(),2)+":"+Le(e.getSeconds(),2)+"."+Le(e.getMilliseconds(),3)+(l?Ur(e.getTimezoneOffset()*-6e4):"")}}function la(e,t){const l=e.toISOString();return l.substring(0,l.length-1)+Ur(t)}function qn(e,t,l){return t.replace(/(\w)\1*/g,i=>{let a=Number.NaN;switch(i.substring(0,1)){case"y":const c=l?e.getUTCFullYear():e.getFullYear();a=i.length<4?c%100:c;break;case"M":a=(l?e.getUTCMonth():e.getMonth())+1;break;case"d":a=l?e.getUTCDate():e.getDate();break;case"H":a=l?e.getUTCHours():e.getHours();break;case"h":const s=l?e.getUTCHours():e.getHours();a=s>12?s%12:s;break;case"m":a=l?e.getUTCMinutes():e.getMinutes();break;case"s":a=l?e.getUTCSeconds():e.getSeconds();break;case"f":a=l?e.getUTCMilliseconds():e.getMilliseconds();break}return Number.isNaN(a)?i:a<10&&i.length>1?"0"+a:""+a})}function ia(e,t){var l,i,a;const c=new Date(e.getTime()+((l=e.offset)!==null&&l!==void 0?l:0));if(typeof t!="string")return c.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+Ur((i=e.offset)!==null&&i!==void 0?i:0);if(t.length===1)switch(t){case"D":case"d":return Cr(c,"first");case"T":case"t":return Cr(c,"second");case"O":case"o":return la(c,(a=e.offset)!==null&&a!==void 0?a:0);default:throw new Error("Unrecognized Date print format")}else return qn(c,t,!0)}function aa(e,t){const l=e.kind===1;if(typeof t!="string")return l?e.toUTCString():e.toLocaleString();if(t.length===1)switch(t){case"D":case"d":return l?Cr(e,"first"):e.toLocaleDateString();case"T":case"t":return l?Cr(e,"second"):e.toLocaleTimeString();case"O":case"o":return na(e,l);default:throw new Error("Unrecognized Date print format")}else return qn(e,t,l)}function oa(e,t,l){return e.offset!=null?ia(e,t):aa(e,t)}function ca(e,t=0){if((t&~(1^2^16^256))!=0)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");let l="g";return l+=t&1?"i":"",l+=t&2?"m":"",l+=t&16?"s":"",new RegExp(e,l)}function Un(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function Ar(e,t,l=0){let i;return i=e instanceof RegExp?(i=e,e=t,i.lastIndex=l,i):i=ca(t,l),i.test(e)}const er=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,tr=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function sa(e,t){return vi(e,t)<0}function Kn(e){return{input:e,cont:da(e)}}function ua(e,t){let l=0,i=0,a="";tr.lastIndex=0;let c=tr.exec(e);for(;c;){const s=c.index+(c[1]||"").length;a+=e.substring(i,s).replace(/%%/g,"%");const[,,d,h,p,g]=c;a+=Jn(t[l++],d,h,p,g),i=tr.lastIndex,tr.lastIndex-=1,c=tr.exec(e)}return a+=e.substring(i).replace(/%%/g,"%"),a}function ma(e,t){return typeof t=="string"?e(t):t.cont(e)}function Kr(e){return ma(t=>t,e)}function Jn(e,t,l,i,a){let c="";if(t=t||"",a=a||"",Ai(e))switch(a.toLowerCase()!=="x"&&(sa(e,0)?(e=wi(e,-1),c="-"):t.indexOf(" ")>=0?c=" ":t.indexOf("+")>=0&&(c="+")),i=i==null?null:parseInt(i,10),a){case"f":case"F":i=i!=null?i:6,e=ki(e,i);break;case"g":case"G":e=i!=null?Fn(e,i):Fn(e);break;case"e":case"E":e=i!=null?In(e,i):In(e);break;case"x":e=Bn(e);break;case"X":e=Bn(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=oa(e):e=De(e);if(l=typeof l=="number"?l:parseInt(l,10),isNaN(l))e=c+e;else{const s=t.indexOf("0")>=0,d=t.indexOf("-")>=0,h=d||!s?" ":"0";h==="0"?(e=Yn(e,l-c.length,h,d),e=c+e):e=Yn(c+e,l,h,d)}return e}function $n(e,t,l,i="",a=-1){return(...c)=>{let s=i;const d=t.slice(),h=l.slice();for(const p of c){const[,,g,S,T,M]=h[0];let O=S;if(a>=0)O=a,a=-1;else if(O==="*"){if(p<0)throw new Error("Non-negative number required");a=p;continue}s+=d[0],s+=Jn(p,g,O,T,M),d.splice(0,1),h.splice(0,1)}return h.length===0?(s+=d[0],e(s)):$n(e,d,h,s,a)}}function da(e){return t=>{er.lastIndex=0;const l=[],i=[];let a=0,c=er.exec(e);for(;c;){const s=c.index+(c[1]||"").length;l.push(e.substring(a,s).replace(/%%/g,"%")),i.push(c),a=er.lastIndex,er.lastIndex-=1,c=er.exec(e)}return l.length===0?t(e.replace(/%%/g,"%")):(l.push(e.substring(a).replace(/%%/g,"%")),$n(t,l,i))}}function pa(e,t){const l=e.lastIndexOf(t);return l>=0&&l===e.length-t.length}function ha(e){return typeof e!="string"||/^\s*$/.test(e)}function vr(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function Yn(e,t,l,i){l=l||" ",t=t-e.length;for(let a=0;a<t;a++)e=i?e+l:l+e;return e}function fa(e,t,l,i){if(l=typeof l=="number"?l:void 0,i=typeof i=="number"?i:0,l&&l<0)throw new Error("Count cannot be less than zero");if(l===0)return[];const a=(i&1)==1,c=(i&2)==2;t=t||[],t=t.filter(g=>g).map(Un),t=t.length>0?t:["\\s"];const s=[],d=new RegExp(t.join("|"),"g");let h=!0,p=0;do{const g=d.exec(e);if(g===null){const S=c?e.substring(p).trim():e.substring(p);(!a||S.length>0)&&s.push(S),h=!1}else{const S=c?e.substring(p,g.index).trim():e.substring(p,g.index);(!a||S.length>0)&&(l!=null&&s.length+1===l?(s.push(c?e.substring(p).trim():e.substring(p)),h=!1):s.push(S)),p=d.lastIndex}}while(h);return s}function ga(e,...t){return t.length===0?e.trimEnd():e.replace(new RegExp("["+Un(t.join(""))+"]+$"),"")}function Xn(e,t,l){if(t+(l||0)>e.length)throw new Error("Invalid startIndex and/or length");return l!=null?e.substr(t,l):e.substr(t)}class Ft{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return yt(this.value)}Equals(t){return t==null?!1:Jt(this.value,t instanceof Ft?t.value:t)}CompareTo(t){return t==null?1:lt(this.value,t instanceof Ft?t.value:t)}}function q(e){return e==null||e instanceof Ft?new Ft(e):e}function Re(e){if(e==null)throw new Error("Option has no value");return e instanceof Ft?e.value:e}function xa(e){return e==null?[]:[Re(e)]}function rr(e,t){return e!=null?Re(e):t}function Ea(e,t){return t!=null?q(e(Re(t))):void 0}function Sa(e,t){return t!=null?e(Re(t)):void 0}function Zn(e,t){return typeof e=="function"?new e(t):new Array(t)}function Qn(e,t,l,i){const a=t|0;return e.fill(i,a,a+l)}function ba(e,t){const l=Zn(t,1);return l[0]=e,l}function It(e,t,l){if(e<0)throw new Error("The input must be non-negative\\nParameter name: count");const i=Zn(l,e);for(let a=0;a<=e-1;a++)i[a]=t(a);return i}function ya(e){return e.slice()}function el(e,t,l){if(t==null)return l==null;if(l==null)return!1;{let i=0,a=!0;const c=t.length|0,s=l.length|0;if(c>s)return!1;if(c<s)return!1;for(;i<c?a:!1;)a=e(t[i],l[i]),i=i+1|0;return a}}const tl="List was empty";class Ce extends it{constructor(t,l){super();this.head=t,this.tail=l}toString(){return"["+vr("; ",this)+"]"}Equals(t){const l=this;return l===t?!0:((a,c)=>{e:for(;;){const s=a,d=c,h=[s.tail,d.tail];if(h[0]!=null)if(h[1]!=null){const p=h[0],g=h[1];if(Jt(s.head,d.head)){a=p,c=g;continue e}else return!1}else return!1;else return h[1]==null}})(l,t)}GetHashCode(){return((i,a,c)=>{e:for(;;){const s=i,d=a,h=c,p=h.tail;if(p!=null){const g=p;if(s>18)return d|0;i=s+1,a=(d<<1)+yt(h.head)+631*s,c=g;continue e}else return d|0}})(0,0,this)|0}toJSON(t){const l=this;return Array.from(l)}CompareTo(t){return((a,c)=>{e:for(;;){const s=a,d=c,h=[s.tail,d.tail];if(h[0]!=null)if(h[1]!=null){const p=h[0],g=h[1],S=lt(s.head,d.head)|0;if(S===0){a=p,c=g;continue e}else return S|0}else return 1;else return h[1]!=null?-1:0}})(this,t)|0}GetEnumerator(){return Aa(this)}[Symbol.iterator](){return Sn(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return Ue(this)}}class Ca{constructor(t){this.xs=t,this.it=this.xs,this.current=null}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this,l=t.it.tail;if(l!=null){const i=l;return t.current=t.it.head,t.it=i,!0}else return!1}["System.Collections.IEnumerator.Reset"](){const t=this;t.it=t.xs,t.current=null}Dispose(){}}function Aa(e){return new Ca(e)}function de(){return new Ce(null,void 0)}function Jr(e,t){return new Ce(e,t)}function Bt(e){return e.tail==null}function rl(e){return((l,i)=>{e:for(;;){const a=l,s=i.tail;if(s!=null){l=a+1,i=s;continue e}else return a|0}})(0,e)|0}function Dt(e){if(e.tail!=null)return e.head;throw new Error(tl+"\\nParameter name: list")}function Fe(e){const t=e.tail;if(t!=null)return t;throw new Error(tl+"\\nParameter name: list")}function o(){return de()}function $r(e,t){return Jr(e,t)}function u(e){return Jr(e,de())}function v(e){return Bt(e)}function nl(e){return rl(e)}function w(e){return Dt(e)}function k(e){return Fe(e)}function Vt(e){const t=rl(e)|0,l=Qn(new Array(t),0,t,null);return((a,c)=>{e:for(;;){const s=a,d=c;if(!Bt(d)){l[s]=Dt(d),a=s+1,c=Fe(d);continue e}break}})(0,e),l}function Yr(e,t,l){let i=t,a=l;for(;!Bt(a);)i=e(i,Dt(a)),a=Fe(a);return i}function va(e,t,l){return((a,c,s)=>{e:for(;;){const d=a,h=c,p=s;if(Bt(p))return h;a=d+1,c=e(d,h,Dt(p)),s=Fe(p);continue e}})(0,t,l)}function ll(e,t){Yr((l,i)=>{e(i)},void 0,t)}function wa(e,t){let l=t;for(let i=e.length-1;i>=0;i--)l=Jr(e[i],l);return l}function f(e){return wa(e,de())}function oe(e){let t,l;if(qe(e))return f(e);if(e instanceof Ce)return e;{const i=de();let a=i;const c=Ue(e);try{for(;c["System.Collections.IEnumerator.MoveNext"]();){const h=c["System.Collections.Generic.IEnumerator`1.get_Current"]();a=(t=a,l=new Ce(h,void 0),t.tail=l,l)}}finally{c.Dispose()}const s=a,d=de();return s.tail=d,Fe(i)}}function ka(e){const t=de();let l=t;const i=s=>{l=Yr((d,h)=>{const p=new Ce(h,void 0);return d.tail=p,p},l,s)};if(qe(e))e.forEach(i);else if(e instanceof Ce)ll(i,e);else{const s=Ue(e);try{for(;s["System.Collections.IEnumerator.MoveNext"]();)i(s["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{s.Dispose()}}const a=l,c=de();return a.tail=c,Fe(t)}function Ta(e,t){let l,i;const a=de();let c=a,s=t;for(;!Bt(s);){let p=e(Dt(s));for(;!Bt(p);)c=(l=c,i=new Ce(Dt(p),void 0),l.tail=i,i),p=Fe(p);s=Fe(s)}const d=c,h=de();return d.tail=h,Fe(a)}function wr(e,t){const l=de(),i=va((c,s,d)=>{const h=new Ce(e(c,d),void 0);return s.tail=h,h},l,t),a=de();return i.tail=a,Fe(l)}function Fa(e,t){const l=de(),i=Yr((c,s)=>{const d=new Ce(e(s),void 0);return c.tail=d,d},l,t),a=de();return i.tail=a,Fe(l)}function Ia(e){return wr((t,l)=>[t,l],e)}function Ba(e,t){console.error(e,t)}function il(e,t,l){ll(i=>{try{i(t)}catch(a){e(a)}},l)}function al(){return o()}function Da(e){return ka(e)}function Va(e){throw new Error(e)}const Na="Enumeration already finished.",Ma="Enumeration has not started. Call MoveNext.",ol="The input sequence has an insufficient number of elements.",Ra="Reset is not supported on this enumerator.";function za(){throw new Error(Ra)}function Xr(){throw new Error(Ma)}function Zr(){throw new Error(Na)}class Pa{constructor(t){this.f=t}toString(){const t=this,l=4;let i=0,a="seq [";const c=Ue(t);try{for(;i<l?c["System.Collections.IEnumerator.MoveNext"]():!1;)i>0&&(a=a+"; "),a=a+De(c["System.Collections.Generic.IEnumerator`1.get_Current"]()),i=i+1|0;return i===l&&(a=a+"; ..."),a+"]"}finally{c.Dispose()}}GetEnumerator(){return this.f()}[Symbol.iterator](){return Sn(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return this.f()}}function La(e){return new Pa(e)}class _a{constructor(t,l,i){this.current=t,this.next=l,this.dispose=i}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current()}["System.Collections.IEnumerator.get_Current"](){return this.current()}["System.Collections.IEnumerator.MoveNext"](){return this.next()}["System.Collections.IEnumerator.Reset"](){za()}Dispose(){this.dispose()}}function kr(e,t,l){return new _a(e,t,l)}function Ga(e){let t,l,i=!1,a=!1,c;const s=()=>{if(a=!0,l!=null){const d=l;try{d.Dispose()}finally{l=void 0}}if(t!=null){const d=t;try{d.Dispose()}finally{t=void 0}}};return kr(()=>(i?a&&Zr():Xr(),c!=null?Re(c):Zr()),()=>{let d;if(i||(i=!0),a)return!1;{let h;for(;h==null;){const p=[t,l];if(p[0]!=null)if(p[1]!=null){const g=p[1];if(g["System.Collections.IEnumerator.MoveNext"]())c=q(g["System.Collections.Generic.IEnumerator`1.get_Current"]()),h=!0;else try{g.Dispose()}finally{l=void 0}}else{const g=p[0];g["System.Collections.IEnumerator.MoveNext"]()?l=(d=g["System.Collections.Generic.IEnumerator`1.get_Current"](),Ue(d)):(s(),h=!1)}else t=Ue(e)}return Re(h)}},()=>{a||s()})}function Ha(e,t){return kr(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{t.Dispose()}finally{e()}})}function cl(e,t,l){let i=!1,a,c=q(e());const s=()=>{if(c!=null){const h=Re(c);try{l(h)}finally{c=void 0}}},d=()=>{try{s()}finally{a=void 0}};return kr(()=>(i||Xr(),a!=null?Re(a):Zr()),()=>{if(i||(i=!0),c!=null){const h=Re(c);let p;try{p=t(h)}catch(g){throw d(),g}return p!=null?(a=p,!0):(d(),!1)}else return!1},s)}function Oa(e,t){let l,i=t;return kr(()=>{if(l!=null){const a=l[0];return l[1],a}else return Xr()},()=>(l=e(i),l!=null?(l[0],i=l[1],!0):!1),()=>{})}function Wa(e,t){t==null&&Va(e)}function Nt(e){return La(e)}function Tr(e){return Wa("source",e),Ue(e)}function x(e){return Nt(()=>Ue(e()))}function sl(e){return Nt(()=>Ga(e))}function ja(e,t){return Nt(()=>Oa(e,t))}function Qr(){return x(()=>new Array(0))}function E(e){return x(()=>ba(e))}function C(e){return qe(e)?f(e):e instanceof Ce?e:oe(e)}function qa(e,t,l){return Nt(()=>cl(e,t,l))}function Ua(e,t,l){return Nt(()=>{let i=-1;return cl(e,a=>(i=i+1|0,t(i,a)),l)})}function P(e,t){return sl([e,t])}function Ka(e,t,l){const i=Tr(l);try{let a=t;for(;i["System.Collections.IEnumerator.MoveNext"]();)a=e(a,i["System.Collections.Generic.IEnumerator`1.get_Current"]());return a}finally{i.Dispose()}}function Ja(e,t){Ka((l,i)=>{e(i)},void 0,t)}function nr(e,t){return qa(()=>Tr(t),l=>l["System.Collections.IEnumerator.MoveNext"]()?q(e(l["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,l=>{l.Dispose()})}function $a(e,t){return Nt(()=>{const l=Tr(t);try{for(let i=1;i<=e;i++)if(!l["System.Collections.IEnumerator.MoveNext"]())throw new Error(ol+"\\nParameter name: source");return Ha(()=>{},l)}catch(i){throw l.Dispose(),i}})}function Ya(e,t){return Ua(()=>Tr(t),(l,i)=>{if(l<e){if(i["System.Collections.IEnumerator.MoveNext"]())return q(i["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(ol+"\\nParameter name: source")}else return},l=>{l.Dispose()})}function ul(e,t){return x(()=>sl(nr(e,t)))}class ml extends it{constructor(t,l){super();this.bound=t|0,this.digits=l}}function dl(e,t){e:for(;;){const l=e,i=t;if(i===0)return 1;if(i%2==0){e=l*l,t=~~(i/2);continue e}else return l*dl(l*l,~~(i/2))|0}}X(2013265921,0,!1);X(2013265921,0,!0);const Xa=29;It(Xa-1,e=>dl(2,e),Int32Array);function en(e){return e.bound}function lr(e,t){return e.digits[t]}function tn(e,t){return $(lr(e,t),!1,2)}function Fr(e,t,l){e.digits[t]=l|0}function rn(e,t){e:for(;;){const l=e,i=t;if(i===0)return X(1,0,!1);if(i%2==0){e=ye(l,l),t=~~(i/2);continue e}else return ye(l,rn(ye(l,l),~~(i/2)))}}function Mt(e,t){e:for(;;){const l=e,i=t;if(i===0)return 1;if(i%2==0){e=l*l,t=~~(i/2);continue e}else return l*Mt(l*l,~~(i/2))|0}}function Za(e){let t=0;for(let l=0;l<=e.bound-1;l++)t=e.digits[l]+(t<<3)|0;return t|0}const Rt=24,ut=16777216,ze=X(16777216,0,!1),zt=X(16777215,0,!1);X(16777215,0,!0);function mt(e){return new ml(e,new Int32Array(e))}function Qa(e){return new ml(e.bound,ya(e.digits))}function Pe(e){const l=((i,a)=>{e:for(;;){const c=i,s=a;if(s===-1?!0:c[s]!==0)return s+1|0;i=c,a=s-1;continue e}})(e.digits,e.bound-1)|0;return e.bound=l|0,e}const pl=2,hl=3;function ir(e){const t=(e<0?0:e)|0;if(t<ut){const l=mt(1);return l.digits[0]=t|0,Pe(l)}else{const l=mt(pl);for(let i=0;i<=pl-1;i++)l.digits[i]=~~(t/Mt(ut,i))%ut|0;return Pe(l)}}function eo(e){const t=yr(e,X(0,0,!1))<0?X(0,0,!1):e,l=mt(hl);for(let i=0;i<=hl-1;i++)l.digits[i]=~~Me(ta(Ge(t,rn(ze,i)),ze))|0;return Pe(l)}function to(e){if(e.bound===1)return e.digits[0]|0;{let t=0;for(let l=e.bound-1;l>=0;l--)t=e.digits[l]+ut*t|0;return t|0}}const ro=ir(1),no=ir(0);function ce(e){return e.bound-1}function le(e){return e.bound===0}function fl(e,t){return e.bound===t.bound?((i,a,c)=>{e:for(;;){const s=i,d=a,h=c;if(h===-1)return!0;if(s[h]===d[h]){i=s,a=d,c=h-1;continue e}else return!1}})(e.digits,t.digits,e.bound-1):!1}function lo(e,t,l,i){return e.bound+t<l.bound+i?-1:e.bound+t>l.bound+t?1:((c,s,d)=>{e:for(;;){const h=c,p=s,g=d;if(g===-1)return 0;{const S=(g<t?0:h[g-t])|0,T=(g<i?0:p[g-i])|0;if(S===T){c=h,s=p,d=g-1;continue e}else return S<T?-1:1}}})(e.digits,l.digits,e.bound+t-1)|0}function io(e,t){return e.bound<t.bound?-1:e.bound>t.bound?1:((i,a,c)=>{e:for(;;){const s=i,d=a,h=c;if(h===-1)return 0;if(s[h]===d[h]){i=s,a=d,c=h-1;continue e}else return s[h]<d[h]?-1:1}})(e.digits,t.digits,e.bound-1)|0}function gl(e,t){return io(e,t)===-1}function ao(e,t){const l=mt(2),i=ye($(e,!1,2),$(t,!1,2));return Fr(l,0,~~Me(Tt(i,zt))),Fr(l,1,~~Me(Ge(i,ze))),Pe(l)}function xl(e,t,l){e:for(;;){const i=e,a=t,c=l;if(yr(a,X(0,0,!1))>0){const s=be(tn(i,c),a);Fr(i,c,~~Me(Tt(s,zt))),e=i,t=Ge(s,ze),l=c+1;continue e}break}}function El(e,t){const l=en(e)|0,i=mt(l+1),a=$(t,!1,2);let c=X(0,0,!1);for(let s=0;s<=l-1;s++){const d=be(be(c,tn(i,s)),ye(tn(e,s),a));Fr(i,s,~~Me(Tt(d,zt))),c=Ge(d,ze)}return xl(i,c,l),Pe(i)}function oo(e,t){const l=mt(e.bound+t.bound),i=l.digits;for(let a=0;a<=e.bound-1;a++){const c=$(e.digits[a],!1,2);let s=X(0,0,!1),d=a;for(let h=0;h<=t.bound-1;h++){const p=$(t.digits[h],!1,2),g=be(be($(i[d],!1,2),s),ye(c,p));i[d]=~~Me(Tt(g,zt))|0,s=Ge(g,ze),d=d+1|0}xl(l,s,d)}return Pe(l)}function co(e,t){const l=en(e)===1,i=en(t)===1;return(l?i:!1)?ao(lr(e,0),lr(t,0)):l?El(t,lr(e,0)):i?El(e,lr(t,0)):oo(e,t)}class so extends it{constructor(t,l,i,a,c,s,d){super();this.bigL=t|0,this.twoToBigL=l|0,this.k=i|0,this.bigK=a|0,this.bigN=c|0,this.split=s|0,this.splits=d}}function pe(e,t,l,i){return new so(e,Mt(2,e),t,l,i,~~(Rt/e),It(~~(Rt/e),a=>Mt(2,e*a),Int32Array))}const uo=[pe(1,28,268435456,268435456),pe(2,26,67108864,134217728),pe(3,24,16777216,50331648),pe(4,22,4194304,16777216),pe(5,20,1048576,5242880),pe(6,18,262144,1572864),pe(7,16,65536,458752),pe(8,14,16384,131072),pe(9,12,4096,36864),pe(10,10,1024,10240),pe(11,8,256,2816),pe(12,6,64,768),pe(13,4,16,208)];It(Rt,e=>Mt(2,e)-1,Int32Array);It(Rt,e=>Mt(2,e),Int32Array);It(Rt,e=>rn(X(2,0,!1),e));~~(uo[0].bigN/Rt);function mo(e,t){return co(e,t)}function po(e,t,l,i){const a=[e.digits,ce(e)],c=a[0],s=[l.digits,ce(l)],d=s[1]|0,h=s[0],p=$(t,!1,2);let g=0,S=ye(p,$(h[0],!1,2));for(;yr(S,X(0,0,!1))>0?!0:g<d;){if(g>a[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let T=~~Me(Tt(S,zt)),M=Ge(S,ze);T<=c[g+i]?c[g+i]=c[g+i]-T|0:(c[g+i]=c[g+i]+(ut-T)|0,M=be(M,X(1,0,!1))),g<d?S=be(M,ye(p,$(h[g+1],!1,2))):S=M,g=g+1|0}Pe(e)}function ho(e,t,l,i){const a=[e.digits,ce(e)],c=a[0],s=[l.digits,ce(l)],d=s[1]|0,h=s[0],p=$(t,!1,2);let g=0,S=ye(p,$(h[0],!1,2));for(;yr(S,X(0,0,!1))>0?!0:g<d;){if(g>a[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let T=~~Me(Tt(S,zt)),M=Ge(S,ze);T<ut-c[g+i]?c[g+i]=c[g+i]+T|0:(c[g+i]=T-(ut-c[g+i])|0,M=be(M,X(1,0,!1))),g<d?S=be(M,ye(p,$(h[g+1],!1,2))):S=M,g=g+1|0}Pe(e)}function fo(e,t,l){const i=[ce(t),ce(e)],a=i[1]|0,c=i[0]|0;if(a<c+l)return 0;{const s=[t.digits,e.digits],d=s[1],h=s[0],p=(c===0?a===l?~~(d[l]/h[0]):~~Me(Ge(be(ye($(d[a],!1,2),ze),$(d[a-1],!1,2)),$(h[0],!1,2))):a===c+l?~~(d[a]/(h[c]+1)):~~Me(Ge(be(ye($(d[a],!1,2),ze),$(d[a-1],!1,2)),be($(h[c],!1,2),X(1,0,!1)))))|0;return p===0?lo(t,l,e,0)!==1?1:0:p|0}}function go(e,t){if(le(t))throw new Error;if(ce(e)<ce(t))return[no,e];{const l=Qa(e),i=mt(ce(e)-ce(t)+1+1);let a=ce(e);const c=ce(t)|0;let s=a-c,d=!1;for(;!d;){const h=fo(l,t,s)|0;h>0?(po(l,h,t,s),ho(i,h,ro,s)):(d=h===0?s===0:!1,d||(a===c+s?s=s-1|0:(s=s-1|0,a=a-1|0)))}return[Pe(i),Pe(l)]}}ir(2);function nn(e){return ir(e)}function xo(e){return eo(e)}function Sl(e){const t=ce(e)|0,l=(c,s,d)=>{e:for(;;){const h=c,p=s,g=d;if(ce(g)>t)return $r([p,g],h);c=$r([p,g],h),s=p+1,d=mo(g,g);continue e}},i=(c,s,d,h)=>{e:for(;;){const p=c,g=s,S=d,T=h;if(v(T)){const M=to(S)|0;return(p?M===0:!1)?g:$r(yn(M),g)}else{const M=k(T),O=go(S,w(T)[1]),G=O[1],ee=O[0];if(p?le(ee):!1){c=p,s=g,d=G,h=M;continue e}else{c=p,s=i(!1,g,G,M),d=ee,h=M;continue e}}}},a=i(!0,o(),e,l(o(),0,ir(10)));return v(a)?"0":vr("",Vt(a))}function Eo(e){return e.bound<=1}function bl(e){const t=e,l=0;return l<t.bound?t.digits[l]|0:0}class Ae extends it{constructor(t,l){super();this.signInt=t|0,this.v=l}toString(){const t=this;switch(dt(t)|0){case-1:return le(j(t))?"0":"-"+Sl(j(t));case 0:return"0";case 1:return Sl(j(t));default:throw new Error("signs should be +/- 1 or 0")}}Equals(t){const l=this;return t instanceof Ae?yl(l,t):!1}GetHashCode(){return yo(this)|0}toJSON(t){return De(this)}CompareTo(t){const l=this;if(t instanceof Ae)return bo(l,t)|0;throw new Error("the objects are not comparable\\nParameter name: obj")}}function ln(e,t){return new Ae(e,t)}(()=>{Ae.smallLim=4096,Ae.smallPosTab=It(Ae.smallLim,e=>nn(e)),Ae.one=on(1),Ae.two=on(2),Ae.zero=on(0)})();function an(e){return(Eo(e)?bl(e)<Ae.smallLim:!1)?Ae.smallPosTab[bl(e)]:e}function dt(e){return e.signInt}function j(e){return e.v}function yl(e,t){const l=[dt(e),dt(t)];let i;switch(l[0]===-1?l[1]===-1?i=1:l[1]===0?i=8:l[1]===1?i=3:i=9:l[0]===0?l[1]===-1?i=6:l[1]===0?i=4:l[1]===1?i=5:i=9:l[0]===1?l[1]===-1?i=2:l[1]===0?i=7:l[1]===1?i=0:i=9:i=9,i){case 0:return fl(j(e),j(t));case 1:return fl(j(e),j(t));case 2:return le(j(e))?le(j(t)):!1;case 3:return le(j(e))?le(j(t)):!1;case 4:return!0;case 5:return le(j(t));case 6:return le(j(t));case 7:return le(j(e));case 8:return le(j(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function So(e,t){const l=[dt(e),dt(t)];let i;switch(l[0]===-1?l[1]===-1?i=1:l[1]===0?i=8:l[1]===1?i=3:i=9:l[0]===0?l[1]===-1?i=6:l[1]===0?i=4:l[1]===1?i=5:i=9:l[0]===1?l[1]===-1?i=2:l[1]===0?i=7:l[1]===1?i=0:i=9:i=9,i){case 0:return gl(j(e),j(t));case 1:return gl(j(t),j(e));case 2:return!1;case 3:return le(j(e))?!le(j(t)):!0;case 4:return!1;case 5:return!le(j(t));case 6:return!1;case 7:return!1;case 8:return!le(j(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function bo(e,t){return So(e,t)?-1:yl(e,t)?0:1}function yo(e){return dt(e)===0?1:dt(e)+Za(j(e))|0}function on(e){return e>=0?ln(1,an(nn(e))):e===-2147483648?ln(-1,an(xo(ra($(e,!1,2))))):ln(-1,an(nn(zi(e))))}function Co(e,t,l,i){const a=lt(e,l)|0;if(a===0)throw new Error("The step of a range cannot be zero");const c=a>0;return s=>{const d=lt(s,t)|0;return((c?d<=0:!1)?!0:c?!1:d>=0)?[s,i(s,e)]:void 0}}function Ao(e,t,l,i,a){const c=Co(t,l,i,a);return x(()=>ja(c,e))}function vo(e,t,l){return Ao(e,t,l,0,(i,a)=>i+a)}class Pt extends jr{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["Writable","ReadWritable"]}}class wo{constructor(t){this.state=new Pt(0,Qn(new Array(kn((l,i)=>vn(l,i),t,10)),0,kn((l,i)=>vn(l,i),t,10),null),0)}}function ko(e){return new wo(e)}function To(e){const t=e.state;if(t.tag===1){const l=t.fields[1]|0,i=t.fields[2]|0,a=t.fields[0],c=(i+1)%a.length|0;return c===l?e.state=new Pt(0,a,l):e.state=new Pt(1,a,l,c),q(a[i])}else return}function Fo(e,t){const l=e.state;if(l.tag===1){const i=l.fields[1]|0,a=l.fields[2]|0,c=l.fields[0];c[i]=t;const s=(i+1)%c.length|0;s===a?e.state=new Pt(1,Io(e,a,c),c.length,0):e.state=new Pt(1,c,s,a)}else{const i=l.fields[1]|0,a=l.fields[0];a[i]=t;const c=(i+1)%a.length|0;e.state=new Pt(1,a,c,i)}}function Io(e,t,l){return Array.from(x(()=>P($a(t,l),x(()=>P(Ya(t,l),x(()=>ul(i=>E(null),vo(0,1,l.length))))))))}class Cl extends it{constructor(t,l,i,a,c,s,d){super();this.init=t,this.update=l,this.subscribe=i,this.view=a,this.setState=c,this.onError=s,this.syncDispatch=d}}function Bo(e,t,l){return new Cl(e,t,i=>al(),l,(i,a)=>{l(i,a)},i=>{Ba(i[0],i[1])},Or(2,i=>i))}function Do(e,t){return new Cl(t.init,t.update,t.subscribe,t.view,e,t.onError,t.syncDispatch)}function Vo(e){return Tn(2,e.view)}function No(e,t){const l=t.init(e),i=l[0],a=ko(10);let c=!1,s=i;const d=p=>{if(c)Fo(a,p);else{c=!0;let g=q(p);for(;g!=null;){const S=Re(g);try{const T=t.update(S,s),M=T[0];t.setState(M,h),il(O=>{t.onError([Kr(Kn("Error in command while handling: %A"))(S),O])},h,T[1]),s=M}catch(T){t.onError([Kr(Kn("Unable to process the message: %A"))(S),T])}g=To(a)}c=!1}},h=fi(1,t.syncDispatch,[d]);t.setState(i,h),il(p=>{t.onError(["Error intitializing:",p])},h,Da(f([(()=>{try{return t.subscribe(i)}catch(p){return t.onError(["Unable to subscribe:",p]),al()}})(),l[1]])))}function Mo(e){No(void 0,e)}class Ro extends it{constructor(t,l,i){super();this.model=t,this.render=l,this.equal=i}}class zo extends n.exports.Component{constructor(t){super(t)}shouldComponentUpdate(t,l){const i=this;return!i.props.equal(i.props.model,t.model)}render(){return this.props.render()}}function Po(e,t,l,i){return n.exports.createElement(zo,new Ro(l,()=>t(l,i),e))}function Lo(e,t,l){return Do((i,a)=>{Fl.exports.render(e((c,s)=>c===s,Or(2,Vo(l)),i,a),document.getElementById(t))},l)}function _o(e,t){return Lo((l,i,a,c)=>Po(l,i,a,c),e,t)}const r=Il,Go=e=>{n.exports.useEffect(()=>{const t=e();return()=>{t.Dispose()}})},Ho=(e,t)=>{n.exports.useEffect(()=>{const l=e();return()=>{l.Dispose()}},t)},Oo=e=>{n.exports.useLayoutEffect(()=>{const t=e();return()=>{t.Dispose()}})},Wo=Go,jo=Ho,qo=Oo;function Uo(e,t,l,i){const a=r.memo(e,Or(2,rr(Tn(2,l),null)));return Ja(c=>{e.displayName=c},xa(t)),c=>r.createElement(a,Ko(i,c))}function Ko(e,t){if(e==null)return t;{const l=e;return t.key=l(t),t}}function ar(e){return{Dispose(){e()}}}function cn(e){Wo(e)}function Jo(e){qo(t=>(e(),ar(()=>{})))}function $o(e){Yo(e,[])}function Yo(e,t){jo(l=>(e(),ar(()=>{})),t)}function Xo(e,t){return r.useCallback(e,rr(t,[]))}function sn(e){return r.useRef(e)}function Zo(){return sn(void 0)}function ie(e,t){return r.useMemo(e,rr(t,[]))}function Qo(e,t,l){return Uo(e,void 0,l,t)}function Ir(e){const t=sn(e),l=Xo(i=>t.current(i),[]);return Jo(()=>{t.current=e}),l}function B(e){return r.useState(e)}class or extends jr{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["FSharp","Bash"]}}function cr(e){const t=e.text,l=e.lang,i=Zo();$o(()=>{const c=i.current;c==null?console.warn("Failed to find element"):Prism.highlightAllUnder(c)});const a=l.tag===1?"language-bash":"language-fsharp";return n.exports.createElement("pre",{ref:i,className:a,children:r.Children.toArray([n.exports.createElement("code",{children:[t]})])})}function ec(e){const t=e.elements;return r.createElement(Vr,{UNSAFE_className:"example-result",children:r.Children.toArray(Array.from(t))})}function V(e){const t=e.examples,l=e.description,i=e.title;return n.exports.createElement(n.exports.Fragment,{},...C(x(()=>P(E(n.exports.createElement("h1",{className:"title example-group-title",children:r.Children.toArray([i])})),x(()=>P(E(n.exports.createElement("p",{className:"example-group-description",children:r.Children.toArray(Array.from(l))})),x(()=>ul(a=>P(E(a[1]),x(()=>a[0]!==nl(t)-1?P(E(n.exports.createElement("br",{})),x(()=>P(E(r.createElement(U,{size:"S"})),x(()=>E(n.exports.createElement("br",{})))))):Qr())),Ia(t)))))))))}function m(e){const t=e.elements,l=e.description,i=e.code,a=e.title;return n.exports.createElement(n.exports.Fragment,{},...C(x(()=>P(E(n.exports.createElement("h2",{className:"subtitle",children:r.Children.toArray([a])})),x(()=>P(nr(c=>c,l),x(()=>E(r.createElement(F,{direction:"column",gap:"size-100",children:r.Children.toArray([n.exports.createElement(cr,{lang:new or(0),text:i}),n.exports.createElement(ec,{elements:t})])})))))))))}const Al=f(["blue-400","blue-500","blue-600","blue-700","celery-400","celery-500","celery-600","celery-700","chartreuse-400","chartreuse-500","chartreuse-600","chartreuse-700","fuchsia-400","fuchsia-500","fuchsia-600","fuchsia-700","gray-50","gray-75","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","green-400","green-500","green-600","green-700","indigo-400","indigo-500","indigo-600","indigo-700","informative","magenta-400","magenta-500","magenta-600","magenta-700","negative","notice","orange-400","orange-500"]);function tc(){return n.exports.createElement(n.exports.Fragment,{},n.exports.createElement("h1",{className:"title",children:r.Children.toArray(["Feliz.ReactSpectrum",n.exports.createElement("a",{href:"https://www.nuget.org/packages/Feliz.ReactSpectrum/",children:r.Children.toArray([n.exports.createElement("img",{alt:"NuGet badge",src:"https://img.shields.io/nuget/v/Feliz.ReactSpectrum.svg?style=square"})])})])}),n.exports.createElement("h2",{className:"subtitle",children:r.Children.toArray(["Feliz-style Fable bindings for Adobe's React Spectrum components"])}),r.createElement(U,{size:"M",marginTop:10,marginBottom:10}),n.exports.createElement("p",{children:r.Children.toArray(["Fable bindings for ",n.exports.createElement("a",{href:"https://react-spectrum.adobe.com/react-spectrum/",children:r.Children.toArray(["Adobe's React Spectrum components"])}),", written in the excelent ",n.exports.createElement("a",{href:"https://github.com/Zaid-Ajaj/Feliz",children:r.Children.toArray(["Feliz DSL style"])}),"."])}),n.exports.createElement("h2",{className:"subtitle paragraph",children:r.Children.toArray(["Features"])}),n.exports.createElement("ul",{className:"bullet-list",children:r.Children.toArray([n.exports.createElement("li",{children:["Covers all React Spectrum components as of version 3.15.1"]}),n.exports.createElement("li",{children:["Fully erased - the generated JS is zero size"]}),n.exports.createElement("li",{children:r.Children.toArray(["Compatible with the ",n.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:r.Children.toArray(["Femto dotnet tool"])})])})])}))}function rc(){return n.exports.createElement(n.exports.Fragment,{},n.exports.createElement("h2",{className:"subtitle",children:r.Children.toArray(["Using the Femto dotnet tool"])}),n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["The easiest way to install the package is using the ",n.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:r.Children.toArray(["Femto dotnet tool"])})," since this will also take care of installing the correct npm dependencies."])}),n.exports.createElement(cr,{lang:new or(1),text:"dotnet femto install Feliz.ReactSpectrum"}),n.exports.createElement("h2",{className:"subtitle",children:r.Children.toArray(["Manual installation"])}),n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["You can install the package using NuGet:"])}),n.exports.createElement(cr,{lang:new or(1),text:"dotnet add package Feliz.ReactSpectrum"}),n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["Or in case you use Paket:"])}),n.exports.createElement(cr,{lang:new or(1),text:"dotnet paket add Feliz.ReactSpectrum"}),n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["Don't forget to also install the npm dependencies:"])}),n.exports.createElement(cr,{lang:new or(1),text:`npm install @adobe/react-spectrum\r
npm install @spectrum-icons/illustrations\r
npm install @spectrum-icons/workflow`}))}function nc(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.ActionButton [\r
    ActionButton.content "Press me"\r
    ActionButton.onPress (fun ev ->\r
        Browser.Dom.window.alert("I was clicked!")\r
    )\r
]`,description:o(),elements:u(r.createElement(N,{children:"Press me",onPress:e=>{window.alert(q("I was clicked!"))}}))})}function lc(){let e;return n.exports.createElement(m,{title:"Adding an icon",code:`Spectrum.ActionButton [\r
    ActionButton.children [\r
        Spectrum.Icon.Airplane [\r
            Icon.size IconSize.M\r
        ]\r
        Spectrum.Text "I have an airplane icon"\r
    ]\r
    ActionButton.onPress (fun ev ->\r
        Browser.Dom.console.log("Event: ", ev)\r
    )\r
]`,description:o(),elements:u(r.createElement(N,{children:r.Children.toArray([(e=Bl,r.createElement(e,{size:"M"})),r.createElement(y,{children:r.Children.toArray(["I have an airplane icon"])})]),onPress:t=>{console.log("Event: ",t)}}))})}function ic(){let e;return n.exports.createElement(m,{title:"Icon-only",code:`Spectrum.ActionButton [\r
    ActionButton.ariaLabel "Edit"\r
    ActionButton.children [\r
        Spectrum.Icon.Edit [\r
            Icon.size IconSize.S\r
        ]\r
    ]\r
    ActionButton.onPress (fun ev ->\r
        Browser.Dom.console.log("Event: ", ev)\r
    )\r
]`,description:o(),elements:u(r.createElement(N,{["aria-label"]:"Edit",children:r.Children.toArray([(e=dn,r.createElement(e,{size:"S"}))]),onPress:t=>{console.log("Event: ",t)}}))})}function ac(){const e=f(["ActionButtons allow users to perform an action. They\u2019re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren\u2019t meant to draw a lot of attention.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionButton.html"})," for more details."]);return n.exports.createElement(V,{title:"ActionButton",description:e,examples:f([n.exports.createElement(nc,null),n.exports.createElement(lc,null),n.exports.createElement(ic,null)])})}function oc(){return n.exports.createElement(m,{title:"Default example",code:`let action, setAction = React.useState("")\r
\r
React.fragment [\r
    Spectrum.ActionGroup [\r
        ActionGroup.onAction setAction\r
        ActionGroup.children [\r
            Spectrum.Item [\r
                Item.key "add"\r
                Item.title "Add"\r
            ]\r
            Spectrum.Item [\r
                Item.key "delete"\r
                Item.title "Delete"\r
            ]\r
            Spectrum.Item [\r
                Item.key "edit"\r
                Item.title "Edit"\r
            ]\r
        ]\r
    ]\r
    Html.p $"Action {action}"\r
]`,description:o(),elements:C(x(()=>{let e;const t=B("");return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(ht,{onAction:t[1],children:[r.createElement(A,{key:"add",title:"Add"}),r.createElement(A,{key:"delete",title:"Delete"}),r.createElement(A,{key:"edit",title:"Edit"})]}),(e=`Action ${t[0]}`,n.exports.createElement("p",{children:[e]}))))}))})}function cc(){return n.exports.createElement(m,{title:"Multiple selection",code:`let selected, setSelected = React.useState([ "list" ])\r
\r
React.fragment [\r
    Spectrum.ActionGroup [\r
        ActionGroup.selectionMode SelectionMode.Multiple\r
        ActionGroup.selectedKeys selected\r
        ActionGroup.onSelectionChange(\r
            function\r
            | Set keys -> setSelected keys\r
            | _ -> ()\r
        )\r
        ActionGroup.children [\r
            Spectrum.Item [\r
                Item.key "grid"\r
                Item.children [ Spectrum.Text "Grid view" ]\r
            ]\r
            Spectrum.Item [\r
                Item.key "list"\r
                Item.children [ Spectrum.Text "List view" ]\r
            ]\r
            Spectrum.Item [\r
                Item.key "gallery"\r
                Item.children [ Spectrum.Text "Gallery view" ]\r
            ]\r
        ]\r
    ]\r
    Spectrum.Text $"Current selection (controller): %A{selected}"\r
]`,description:o(),elements:C(x(()=>{let e,t;const l=B(u("list")),i=l[0];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(ht,fe(f([["selectionMode","multiple"],["selectedKeys",Array.from(i)],(e=a=>{a instanceof Ce&&l[1](a)},["onSelectionChange",a=>{const c=a;e(c==="all"?"all":oe(c.values()))}]),["children",[r.createElement(A,{key:"grid",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Grid view"])})])}),r.createElement(A,{key:"list",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["List view"])})])}),r.createElement(A,{key:"gallery",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Gallery view"])})])})]]]))),(t=Kr(ua("Current selection (controller): %A%P()",[Vt(i)])),r.createElement(y,{children:r.Children.toArray([t])}))))}))})}function sc(){let e,t,l;return n.exports.createElement(m,{title:"With icons",code:`Spectrum.ActionGroup [\r
    ActionGroup.children [\r
        Spectrum.Item [\r
            Item.key "edit2"\r
            Item.children [\r
                Spectrum.Icon.Draw []\r
                Spectrum.Text "Edit"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "copy2"\r
            Item.children [\r
                Spectrum.Icon.Copy []\r
                Spectrum.Text "Copy"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "delete2"\r
            Item.children [\r
                Spectrum.Icon.Delete []\r
                Spectrum.Text "Delete"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(ht,{children:[r.createElement(A,{key:"edit2",children:r.Children.toArray([(e=sr,r.createElement(e,{})),r.createElement(y,{children:r.Children.toArray(["Edit"])})])}),r.createElement(A,{key:"copy2",children:r.Children.toArray([(t=Mr,r.createElement(t,{})),r.createElement(y,{children:r.Children.toArray(["Copy"])})])}),r.createElement(A,{key:"delete2",children:r.Children.toArray([(l=ur,r.createElement(l,{})),r.createElement(y,{children:r.Children.toArray(["Delete"])})])})]}))})}function uc(){return n.exports.createElement(m,{title:"Using an item template",code:`let items = [\r
    {| label = "React"; name = "_React" |}\r
    {| label = "Add"; name = "_Add" |}\r
    {| label = "Delete"; name = "_Delete" |}\r
]\r
\r
Spectrum.ActionGroup [\r
    ActionGroup.items items\r
    ActionGroup.isEmphasized true\r
    ActionGroup.selectionMode SelectionMode.Single\r
    ActionGroup.onSelectionChange (\r
        function\r
        | Set [ item ] -> Browser.Dom.console.log("Selection: ", item)\r
        | _ -> ()\r
    )\r
    ActionGroup.itemTemplate (fun (item: {| label: string; name: string |}) ->\r
        Spectrum.Item [\r
            Item.key item.name\r
            Item.children [ Spectrum.Text item.label ]\r
        ]\r
    )\r
]`,description:o(),elements:C(x(()=>{let e;const t=f([{label:"React",name:"_React"},{label:"Add",name:"_Add"},{label:"Delete",name:"_Delete"}]);return E(r.createElement(ht,fe(f([["items",Array.from(t)],["isEmphasized",!0],["selectionMode","single"],(e=l=>{let i,a;switch(l instanceof Ce?v(l)?i=1:v(k(l))?(i=0,a=w(l)):i=1:i=1,i){case 0:{console.log("Selection: ",a);break}}},["onSelectionChange",l=>{const i=l;e(i==="all"?"all":oe(i.values()))}]),["children",l=>r.createElement(A,{key:l.name,children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray([l.label])})])})]]))))}))})}function mc(){let e,t,l,i,a;return n.exports.createElement(m,{title:"Collapsing buttons",code:`Spectrum.ActionGroup [\r
    ActionGroup.overflowMode ActionGroupOverflowMode.Collapse\r
    ActionGroup.maxWidth 250\r
    ActionGroup.children [\r
        Spectrum.Item [\r
            Item.key "edit"\r
            Item.textValue "Edit"\r
            Item.children [\r
                Spectrum.Icon.Draw []\r
                Spectrum.Text "Edit"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "copy"\r
            Item.textValue "Copy"\r
            Item.children [\r
                Spectrum.Icon.Copy []\r
                Spectrum.Text "Copy"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "delete"\r
            Item.textValue "Delete"\r
            Item.children [\r
                Spectrum.Icon.Delete []\r
                Spectrum.Text "Delete"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "move"\r
            Item.textValue "Move"\r
            Item.children [\r
                Spectrum.Icon.Move []\r
                Spectrum.Text "Move"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "duplicate"\r
            Item.textValue "Duplicate"\r
            Item.children [\r
                Spectrum.Icon.Duplicate []\r
                Spectrum.Text "Duplicate"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(ht,{overflowMode:"collapse",maxWidth:250,children:[r.createElement(A,{key:"edit",textValue:"Edit",children:r.Children.toArray([(e=sr,r.createElement(e,{})),r.createElement(y,{children:r.Children.toArray(["Edit"])})])}),r.createElement(A,{key:"copy",textValue:"Copy",children:r.Children.toArray([(t=Mr,r.createElement(t,{})),r.createElement(y,{children:r.Children.toArray(["Copy"])})])}),r.createElement(A,{key:"delete",textValue:"Delete",children:r.Children.toArray([(l=ur,r.createElement(l,{})),r.createElement(y,{children:r.Children.toArray(["Delete"])})])}),r.createElement(A,{key:"move",textValue:"Move",children:r.Children.toArray([(i=Dl,r.createElement(i,{})),r.createElement(y,{children:r.Children.toArray(["Move"])})])}),r.createElement(A,{key:"duplicate",textValue:"Duplicate",children:r.Children.toArray([(a=Vl,r.createElement(a,{})),r.createElement(y,{children:r.Children.toArray(["Duplicate"])})])})]}))})}function dc(){let e,t,l,i,a;return n.exports.createElement(m,{title:"Collapsed with multiple selection",code:`Spectrum.ActionGroup [\r
    ActionGroup.ariaLabel "Text style"\r
    ActionGroup.overflowMode ActionGroupOverflowMode.Collapse\r
    ActionGroup.selectionMode SelectionMode.Multiple\r
    ActionGroup.isEmphasized true\r
    ActionGroup.summaryIcon (Spectrum.Icon.TextStyle [])\r
    ActionGroup.maxWidth 100\r
    ActionGroup.children [\r
        Spectrum.Item [\r
            Item.key "bold"\r
            Item.textValue "Bold"\r
            Item.children [\r
                Spectrum.Icon.TagBold []\r
                Spectrum.Text "Bold"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "italic"\r
            Item.textValue "Italic"\r
            Item.children [\r
                Spectrum.Icon.TagItalic []\r
                Spectrum.Text "Italic"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "underline"\r
            Item.textValue "Underline"\r
            Item.children [\r
                Spectrum.Icon.TagUnderline []\r
                Spectrum.Text "Underline"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "strike"\r
            Item.textValue "Strikethrough"\r
            Item.children [\r
                Spectrum.Icon.TextStrikethrough []\r
                Spectrum.Text "Strikethrough"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(ht,{["aria-label"]:"Text style",overflowMode:"collapse",selectionMode:"multiple",isEmphasized:!0,summaryIcon:(e=Nl,r.createElement(e,{})),maxWidth:100,children:[r.createElement(A,{key:"bold",textValue:"Bold",children:r.Children.toArray([(t=Ml,r.createElement(t,{})),r.createElement(y,{children:r.Children.toArray(["Bold"])})])}),r.createElement(A,{key:"italic",textValue:"Italic",children:r.Children.toArray([(l=Rl,r.createElement(l,{})),r.createElement(y,{children:r.Children.toArray(["Italic"])})])}),r.createElement(A,{key:"underline",textValue:"Underline",children:r.Children.toArray([(i=zl,r.createElement(i,{})),r.createElement(y,{children:r.Children.toArray(["Underline"])})])}),r.createElement(A,{key:"strike",textValue:"Strikethrough",children:r.Children.toArray([(a=Pl,r.createElement(a,{})),r.createElement(y,{children:r.Children.toArray(["Strikethrough"])})])})]}))})}function pc(){const e=f(["An ActionGroup is a grouping of ActionButtons that are related to one another.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html"})," for more details."]);return n.exports.createElement(V,{title:"ActionGroup",description:e,examples:f([n.exports.createElement(oc,null),n.exports.createElement(cc,null),n.exports.createElement(sc,null),n.exports.createElement(uc,null),n.exports.createElement(mc,null),n.exports.createElement(dc,null)])})}function hc(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Button [\r
    Button.variant ButtonVariant.CTA\r
    Button.content "Save"\r
]`,description:o(),elements:u(r.createElement(L,{variant:"cta",children:"Save"}))})}function fc(){let e;return n.exports.createElement(m,{title:"Icon + label",code:`Spectrum.Button [\r
    Button.variant ButtonVariant.Primary\r
    Button.children [\r
        Spectrum.Icon.Bell []\r
        Spectrum.Text "Icon + Label"\r
    ]\r
]`,description:o(),elements:u(r.createElement(L,{variant:"primary",children:r.Children.toArray([(e=pn,r.createElement(e,{})),r.createElement(y,{children:r.Children.toArray(["Icon + Label"])})])}))})}function gc(){return n.exports.createElement(m,{title:"Button variants",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Row\r
    Flex.alignItems FlexAlignItems.Center\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.children [\r
        Spectrum.Button [\r
            Button.variant ButtonVariant.CTA\r
            Button.content "CTA"\r
        ]\r
        Spectrum.Button [\r
            Button.variant ButtonVariant.Primary\r
            Button.content "Primary"\r
        ]\r
        Spectrum.Button [\r
            Button.variant ButtonVariant.Secondary\r
            Button.content "Secondary"\r
        ]\r
        Spectrum.Button [\r
            Button.variant ButtonVariant.Negative\r
            Button.content "Negative"\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Green400)\r
            View.padding 20\r
            View.children [\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.OverBackground\r
                    Button.content "Over background"\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"row",alignItems:"center",gap:"size-100",children:r.Children.toArray([r.createElement(L,{variant:"cta",children:"CTA"}),r.createElement(L,{variant:"primary",children:"Primary"}),r.createElement(L,{variant:"secondary",children:"Secondary"}),r.createElement(L,{variant:"negative",children:"Negative"}),r.createElement(R,{backgroundColor:"green-400",padding:20,children:r.Children.toArray([r.createElement(L,{variant:"overBackground",children:"Over background"})])})])}))})}function xc(){const e=f(["Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Button.html"})," for more details."]);return n.exports.createElement(V,{title:"Button",description:e,examples:f([n.exports.createElement(hc,null),n.exports.createElement(fc,null),n.exports.createElement(gc,null)])})}function Ec(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.ButtonGroup [\r
    Spectrum.Button [\r
        Button.variant ButtonVariant.Secondary\r
        Button.content "No, thanks"\r
    ]\r
    Spectrum.Button [\r
        Button.variant ButtonVariant.Secondary\r
        Button.content "Remind me later"\r
    ]\r
    Spectrum.Button [\r
        Button.variant ButtonVariant.Primary\r
        Button.content "Rate now"\r
    ]\r
]`,description:o(),elements:u(n.exports.createElement(Ie,o(),r.createElement(L,{variant:"secondary",children:"No, thanks"}),r.createElement(L,{variant:"secondary",children:"Remind me later"}),r.createElement(L,{variant:"primary",children:"Rate now"})))})}function Sc(){return n.exports.createElement(m,{title:"Orientation",code:`Spectrum.ButtonGroup [\r
    ButtonGroup.orientation Orientation.Vertical\r
    ButtonGroup.children [\r
        Spectrum.Button [\r
            Button.variant ButtonVariant.Secondary\r
            Button.content "No, thanks"\r
        ]\r
        Spectrum.Button [\r
            Button.variant ButtonVariant.Secondary\r
            Button.content "Remind me later"\r
        ]\r
        Spectrum.Button [\r
            Button.variant ButtonVariant.Primary\r
            Button.content "Rate now"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Ie,{orientation:"vertical",children:r.Children.toArray([r.createElement(L,{variant:"secondary",children:"No, thanks"}),r.createElement(L,{variant:"secondary",children:"Remind me later"}),r.createElement(L,{variant:"primary",children:"Rate now"})])}))})}function bc(){return n.exports.createElement(m,{title:"Alignment",code:`Spectrum.Flex [\r
    Flex.gap (DimValue.Number 10)\r
    Flex.direction FlexDirection.Column\r
    Flex.alignItems FlexAlignItems.Start\r
    Flex.children [\r
        Spectrum.Text "align = 'end'"\r
        Spectrum.ButtonGroup [\r
            ButtonGroup.orientation Orientation.Vertical\r
            ButtonGroup.align ButtonGroupAlignment.End\r
            ButtonGroup.children [\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Secondary\r
                    Button.content "No, thanks"\r
                ]\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Secondary\r
                    Button.content "Remind me later"\r
                ]\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Primary\r
                    Button.content "Rate now"\r
                ]\r
            ]\r
        ]\r
        Spectrum.Text "align = 'center'"\r
        Spectrum.ButtonGroup [\r
            ButtonGroup.orientation Orientation.Vertical\r
            ButtonGroup.align ButtonGroupAlignment.Center\r
            ButtonGroup.children [\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Secondary\r
                    Button.content "No, thanks"\r
                ]\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Secondary\r
                    Button.content "Remind me later"\r
                ]\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Primary\r
                    Button.content "Rate now"\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{gap:10,direction:"column",alignItems:"start",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["align = 'end'"])}),r.createElement(Ie,{orientation:"vertical",align:"end",children:r.Children.toArray([r.createElement(L,{variant:"secondary",children:"No, thanks"}),r.createElement(L,{variant:"secondary",children:"Remind me later"}),r.createElement(L,{variant:"primary",children:"Rate now"})])}),r.createElement(y,{children:r.Children.toArray(["align = 'center'"])}),r.createElement(Ie,{orientation:"vertical",align:"center",children:r.Children.toArray([r.createElement(L,{variant:"secondary",children:"No, thanks"}),r.createElement(L,{variant:"secondary",children:"Remind me later"}),r.createElement(L,{variant:"primary",children:"Rate now"})])})])}))})}function yc(){const e=f(["ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html"})," for more details."]);return n.exports.createElement(V,{title:"ButtonGroup",description:e,examples:f([n.exports.createElement(Ec,null),n.exports.createElement(Sc,null),n.exports.createElement(bc,null)])})}function Cc(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.LogicButton [\r
    LogicButton.variant LogicButtonVariant.And\r
    LogicButton.children [\r
        Spectrum.Text "And"\r
    ]\r
]`,description:o(),elements:u(r.createElement(Nr,{variant:"and",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["And"])})])}))})}function Ac(){return n.exports.createElement(m,{title:"Or variant",code:`Spectrum.LogicButton [\r
    LogicButton.variant LogicButtonVariant.Or\r
    LogicButton.children [\r
        Spectrum.Text "Or"\r
    ]\r
]`,description:o(),elements:u(r.createElement(Nr,{variant:"or",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Or"])})])}))})}function vc(){return n.exports.createElement(m,{title:"Events",code:`let variant, setVariant = React.useState(LogicButtonVariant.Or)\r
\r
Spectrum.LogicButton [\r
    LogicButton.variant variant\r
    LogicButton.onPress (fun _ ->\r
        let newVariant =\r
            match variant with\r
            | LogicButtonVariant.And -> LogicButtonVariant.Or\r
            | LogicButtonVariant.Or -> LogicButtonVariant.And\r
        setVariant newVariant\r
    )\r
    LogicButton.content (variant.ToString())\r
]`,description:o(),elements:C(x(()=>{const e=B("or"),t=e[0];return E(r.createElement(Nr,{variant:t,onPress:l=>{e[1](t==="or"?"and":"or")},children:t}))}))})}function wc(){const e=f(["A LogicButton displays an operator within a boolean logic sequence.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/LogicButton.html"})," for more details."]);return n.exports.createElement(V,{title:"LogicButton",description:e,examples:f([n.exports.createElement(Cc,null),n.exports.createElement(Ac,null),n.exports.createElement(vc,null)])})}function kc(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.ToggleButton [\r
    Spectrum.Text "Pin"\r
]`,description:o(),elements:u(n.exports.createElement(Gt,o(),r.createElement(y,{children:r.Children.toArray(["Pin"])})))})}function Tc(){let e;return n.exports.createElement(m,{title:"Using icons",code:`Spectrum.ToggleButton [\r
    ToggleButton.children [\r
        Spectrum.Icon.PinOff []\r
        Spectrum.Text "Pin"\r
    ]\r
]`,description:o(),elements:u(r.createElement(Gt,{children:r.Children.toArray([(e=mr,r.createElement(e,{})),r.createElement(y,{children:r.Children.toArray(["Pin"])})])}))})}function Fc(){return n.exports.createElement(m,{title:"Events",code:`let isSelected, setSelected = React.useState(false)\r
\r
Spectrum.ToggleButton [\r
    ToggleButton.isEmphasized true\r
    ToggleButton.isSelected isSelected\r
    ToggleButton.onChange setSelected\r
    ToggleButton.ariaLabel "Pin"\r
    ToggleButton.children [\r
        Spectrum.Icon.PinOff []\r
        Spectrum.Text $"Is selected: {isSelected}"\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e,t;const l=B(!1),i=l[0];return E(r.createElement(Gt,{isEmphasized:!0,isSelected:i,onChange:a=>{setTimeout(()=>{l[1](a)},0)},["aria-label"]:"Pin",children:r.Children.toArray([(e=mr,r.createElement(e,{})),(t=`Is selected: ${i}`,r.createElement(y,{children:r.Children.toArray([t])}))])}))}))})}function Ic(){let e,t;return n.exports.createElement(m,{title:"Static color",code:`Spectrum.Flex [\r
    Flex.wrap true\r
    Flex.gap (DimValue.Size Size250)\r
    Flex.children [\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color StaticSeafoam700)\r
            View.padding 20\r
            View.children [\r
                Spectrum.ToggleButton [\r
                    ToggleButton.staticColor StaticColorValue.White\r
                    ToggleButton.children [\r
                        Spectrum.Icon.PinOff []\r
                        Spectrum.Text "Pin"\r
                    ]\r
                ]\r
            ]\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color StaticYellow400)\r
            View.padding 20\r
            View.children [\r
                Spectrum.ToggleButton [\r
                    ToggleButton.staticColor StaticColorValue.Black\r
                    ToggleButton.isQuiet true\r
                    ToggleButton.defaultSelected true\r
                    ToggleButton.children [\r
                        Spectrum.Icon.PinOff []\r
                        Spectrum.Text "Pin"\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{wrap:!0,gap:"size-250",children:r.Children.toArray([r.createElement(R,{backgroundColor:"static-seafoam-700",padding:20,children:r.Children.toArray([r.createElement(Gt,{staticColor:"white",children:r.Children.toArray([(e=mr,r.createElement(e,{})),r.createElement(y,{children:r.Children.toArray(["Pin"])})])})])}),r.createElement(R,{backgroundColor:"static-yellow-400",padding:20,children:r.Children.toArray([r.createElement(Gt,{staticColor:"black",isQuiet:!0,defaultSelected:!0,children:r.Children.toArray([(t=mr,r.createElement(t,{})),r.createElement(y,{children:r.Children.toArray(["Pin"])})])})])})])}))})}function Bc(){const e=f(["ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ToggleButton.html"})," for more details."]);return n.exports.createElement(V,{title:"ToggleButton",description:e,examples:f([n.exports.createElement(kc,null),n.exports.createElement(Tc,null),n.exports.createElement(Fc,null),n.exports.createElement(Ic,null)])})}function Dc(){let e;return n.exports.createElement(m,{title:"Using the Provider component",code:`Spectrum.Provider [\r
    Provider.defaultTheme\r
    Provider.colorScheme ColorScheme.Light\r
    Provider.locale "en-US"\r
    Provider.scale Scale.Medium\r
    Provider.children [\r
        Spectrum.ActionButton [\r
            ActionButton.content "Spectrum button"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Ht,fe(f([(e=dr,["theme",e]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["children",r.Children.toArray([r.createElement(N,{children:"Spectrum button"})])]]))))})}function Vc(){let e;const t=u(n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["You can override the default screen breakpoints as follows. Resize the browser window to see the effects."])}));return n.exports.createElement(m,{title:"Provider screen breakpoints",code:`Spectrum.Provider [\r
    Provider.defaultTheme\r
    Provider.colorScheme ColorScheme.Light\r
    Provider.breakpoints(M = 640, L = 1024)\r
    Provider.children [\r
        Spectrum.View [\r
            View.height (DimValue.Size Size2000)\r
            View.backgroundColor (ResponsiveProp.make(\r
                base' = (BackgroundColorValue.Color Celery600),\r
                M = (BackgroundColorValue.Color Blue600),\r
                L = (BackgroundColorValue.Color Magenta600))\r
            )\r
        ]\r
    ]\r
]`,description:t,elements:u(r.createElement(Ht,fe(f([(e=dr,["theme",e]),["colorScheme","light"],["breakpoints",{L:1024,M:640,S:void 0}],["children",r.Children.toArray([r.createElement(R,{height:"size-2000",backgroundColor:{base:q("celery-600"),S:void 0,M:q("blue-600"),L:q("magenta-600")}})])]]))))})}function Nc(){let e;return n.exports.createElement(m,{title:"Color scheme",code:`Spectrum.Provider [\r
    Provider.defaultTheme\r
    Provider.colorScheme ColorScheme.Dark\r
    Provider.children [\r
        Spectrum.View [\r
            View.padding 20\r
            View.children [\r
                Spectrum.ActionButton [\r
                    ActionButton.content "Dark mode!"\r
                ]\r
            ]\r
        ]\r
    ]\r
]\r
`,description:o(),elements:u(r.createElement(Ht,fe(f([(e=dr,["theme",e]),["colorScheme","dark"],["children",r.Children.toArray([r.createElement(R,{padding:20,children:r.Children.toArray([r.createElement(N,{children:"Dark mode!"})])})])]]))))})}function Mc(){const e=u(n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["You can use a Provider component to define common properties for a group of components within. For example, you can disable multiple components as follows:"])}));return n.exports.createElement(m,{title:"Property groups",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.alignItems FlexAlignItems.Start\r
    Flex.children [\r
        Spectrum.Provider [\r
            Provider.isDisabled true\r
            Provider.children [\r
                Spectrum.RadioGroup [\r
                    RadioGroup.label "Favorite animal"\r
                    RadioGroup.children [\r
                        Spectrum.Radio [\r
                            Radio.value "dogs"\r
                            Radio.content "Dogs"\r
                        ]\r
                        Spectrum.Radio [\r
                            Radio.value "cats"\r
                            Radio.content "Cats"\r
                        ]\r
                        Spectrum.Radio [\r
                            Radio.value "horses"\r
                            Radio.content "Horses"\r
                        ]\r
                    ]\r
                ]\r
                Spectrum.Checkbox [\r
                    Checkbox.content "I agree"\r
                ]\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Primary\r
                    Button.content "Submit"\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:e,elements:u(r.createElement(F,{direction:"column",gap:"size-100",alignItems:"start",children:r.Children.toArray([r.createElement(Ht,{isDisabled:!0,children:r.Children.toArray([r.createElement(Qe,{label:"Favorite animal",children:r.Children.toArray([r.createElement(Z,{value:"dogs",children:"Dogs"}),r.createElement(Z,{value:"cats",children:"Cats"}),r.createElement(Z,{value:"horses",children:"Horses"})])}),r.createElement(z,{children:r.Children.toArray(["I agree"])}),r.createElement(L,{variant:"primary",children:"Submit"})])})])}))})}function Rc(){const e=f(["Provider is the container for all React Spectrum applications. It defines the theme, locale, and other application level settings, and can also be used to provide common properties to a group of components.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Provider.html"})," for more details."]);return n.exports.createElement(V,{title:"Provider",description:e,examples:f([n.exports.createElement(Dc,null),n.exports.createElement(Vc,null),n.exports.createElement(Nc,null),n.exports.createElement(Mc,null)])})}function zc(){return n.exports.createElement(m,{title:"Vertical stack",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.width (DimValue.Size Size2000)\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.children [\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Celery600)\r
            View.height (DimValue.Size Size800)\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Blue600)\r
            View.height (DimValue.Size Size800)\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Magenta600)\r
            View.height (DimValue.Size Size800)\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"column",width:"size-2000",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",height:"size-800"}),r.createElement(R,{backgroundColor:"blue-600",height:"size-800"}),r.createElement(R,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function Pc(){return n.exports.createElement(m,{title:"Horizontal stack",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Row\r
    Flex.height (DimValue.Size Size800)\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.children [\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Celery600)\r
            View.width (DimValue.Size Size800)\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Blue600)\r
            View.width (DimValue.Size Size800)\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Magenta600)\r
            View.width (DimValue.Size Size800)\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"row",height:"size-800",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",width:"size-800"}),r.createElement(R,{backgroundColor:"blue-600",width:"size-800"}),r.createElement(R,{backgroundColor:"magenta-600",width:"size-800"})])}))})}function Lc(){const e=u(n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["This example shows how you can nest flexboxes to create more complicated layouts. It also uses the flex prop on one of the children to expand it to fill the repaining space."])}));return n.exports.createElement(m,{title:"Nesting",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.children [\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Celery600)\r
            View.height (DimValue.Size Size800)\r
        ]\r
        Spectrum.Flex [\r
            Flex.direction FlexDirection.Row\r
            Flex.height (DimValue.Size Size3000)\r
            Flex.gap (DimValue.Size Size100)\r
            Flex.children [\r
                Spectrum.View [\r
                    View.backgroundColor (BackgroundColorValue.Color Indigo600)\r
                    View.width (DimValue.Size Size2000)\r
                ]\r
                Spectrum.View [\r
                    View.backgroundColor (BackgroundColorValue.Color Seafoam600)\r
                    View.flex true\r
                ]\r
            ]\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Magenta600)\r
            View.height (DimValue.Size Size800)\r
        ]\r
    ]\r
]`,description:e,elements:u(r.createElement(F,{direction:"column",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",height:"size-800"}),r.createElement(F,{direction:"row",height:"size-3000",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"indigo-600",width:"size-2000"}),r.createElement(R,{backgroundColor:"seafoam-600",flex:!0})])}),r.createElement(R,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function _c(){const e=u(n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["This example shows how to enable wrapping of items into multiple rows. Resize your browser window to see the items reflow."])}));return n.exports.createElement(m,{title:"Wrapping",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Row\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.wrap true\r
    Flex.children [\r
        for color in colors do\r
            Spectrum.View [\r
                View.key (unbox<string> color)\r
                View.backgroundColor (BackgroundColorValue.Color color)\r
                View.width (DimValue.Size Size800)\r
                View.height (DimValue.Size Size800)\r
            ]\r
    ]\r
]`,description:e,elements:u(r.createElement(F,{direction:"row",gap:"size-100",wrap:!0,children:r.Children.toArray(Array.from(C(x(()=>nr(t=>r.createElement(R,{key:t,backgroundColor:t,width:"size-800",height:"size-800"}),Al)))))}))})}function Gc(){return n.exports.createElement(m,{title:"Alignment",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.alignItems FlexAlignItems.Center\r
    Flex.children [\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Celery600)\r
            View.width (DimValue.Size Size800)\r
            View.height (DimValue.Size Size800)\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Blue600)\r
            View.width (DimValue.Size Size2000)\r
            View.height (DimValue.Size Size800)\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Magenta600)\r
            View.width (DimValue.Size Size800)\r
            View.height (DimValue.Size Size800)\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"column",gap:"size-100",alignItems:"center",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),r.createElement(R,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),r.createElement(R,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])}))})}function Hc(){return n.exports.createElement(m,{title:"Justification",code:`Spectrum.View [\r
    View.height (DimValue.Size Size3000)\r
    View.borderWidth BorderSizeValue.Thin\r
    View.borderColor BorderColorValue.Dark\r
    View.children [\r
        Spectrum.Flex [\r
            Flex.direction FlexDirection.Column\r
            Flex.gap (DimValue.Size Size100)\r
            Flex.justifyContent FlexJustifyContent.Center\r
            Flex.height "100%"\r
            Flex.children [\r
                Spectrum.View [\r
                    View.backgroundColor (BackgroundColorValue.Color Celery600)\r
                    View.width (DimValue.Size Size800)\r
                    View.height (DimValue.Size Size800)\r
                ]\r
                Spectrum.View [\r
                    View.backgroundColor (BackgroundColorValue.Color Blue600)\r
                    View.width (DimValue.Size Size2000)\r
                    View.height (DimValue.Size Size800)\r
                ]\r
                Spectrum.View [\r
                    View.backgroundColor (BackgroundColorValue.Color Magenta600)\r
                    View.width (DimValue.Size Size800)\r
                    View.height (DimValue.Size Size800)\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(R,{height:"size-3000",borderWidth:"thin",borderColor:"dark",children:r.Children.toArray([r.createElement(F,{direction:"column",gap:"size-100",justifyContent:"center",height:"100%",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),r.createElement(R,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),r.createElement(R,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])})])}))})}function Oc(){const e=f(["A layout container using flexbox. Provides Spectrum dimension values, and supports the gap property to define consistent spacing between items.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Flex.html"})," for more details."]);return n.exports.createElement(V,{title:"Flex",description:e,examples:f([n.exports.createElement(zc,null),n.exports.createElement(Pc,null),n.exports.createElement(Lc,null),n.exports.createElement(_c,null),n.exports.createElement(Gc,null),n.exports.createElement(Hc,null)])})}function Wc(){return n.exports.createElement(m,{title:"Explicit grid",code:`Spectrum.Grid [\r
    Grid.areas [ "header header"; "sidebar content"; "footer footer" ]\r
    Grid.columns [ "1fr"; "3fr" ]\r
    Grid.rows [\r
        DimValue.Size Size1000\r
        DimValue.String "auto"\r
        DimValue.Size Size1000\r
    ]\r
    Grid.height (DimValue.Size Size6000)\r
    Grid.width "80%"\r
    Grid.gap (DimValue.Size Size100)\r
    Grid.children [\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Celery600)\r
            View.gridArea "header"\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Blue600)\r
            View.gridArea "sidebar"\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Purple600)\r
            View.gridArea "content"\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Magenta600)\r
            View.gridArea "footer"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(hn,{areas:Vt(f(["header header","sidebar content","footer footer"])),columns:Vt(f(["1fr","3fr"])),rows:Vt(f(["size-1000","auto","size-1000"])),height:"size-6000",width:"80%",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",gridArea:"header"}),r.createElement(R,{backgroundColor:"blue-600",gridArea:"sidebar"}),r.createElement(R,{backgroundColor:"purple-600",gridArea:"content"}),r.createElement(R,{backgroundColor:"magenta-600",gridArea:"footer"})])}))})}function jc(){let e;return n.exports.createElement(m,{title:"Implicit grid",code:`Spectrum.Grid [\r
    Grid.height (DimValue.Size Size6000)\r
    Grid.width "100%"\r
    Grid.columns (Spectrum.repeat(AutoFit, DimValue.Size Size800))\r
    Grid.autoRows (DimValue.Size Size800)\r
    Grid.justifyContent GridJustifyContent.Center\r
    Grid.gap (DimValue.Size Size200)\r
    Grid.children [\r
        for color in colors do\r
            Spectrum.View [\r
                View.key (unbox<string> color)\r
                View.backgroundColor (BackgroundColorValue.Color color)\r
            ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(hn,{height:"size-6000",width:"100%",columns:(e=Ll,e("auto-fit","size-800")),autoRows:"size-800",justifyContent:"center",gap:"size-200",children:r.Children.toArray(Array.from(C(x(()=>nr(t=>r.createElement(R,{key:t,backgroundColor:t}),Al)))))}))})}function qc(){const e=f(["A layout container using CSS grid. Supports Spectrum dimensions as values to ensure consistent and adaptive sizing and spacing.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Grid.html"})," for more details."]);return n.exports.createElement(V,{title:"Grid",description:e,examples:f([n.exports.createElement(Wc,null),n.exports.createElement(jc,null)])})}function Uc(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.ListBox [\r
    ListBox.width (DimValue.Size Size2400)\r
    ListBox.ariaLabel "Alignment"\r
    ListBox.children [\r
        Spectrum.Item "Left"\r
        Spectrum.Item "Middle"\r
        Spectrum.Item "Right"\r
    ]\r
]`,description:o(),elements:u(r.createElement(Be,{width:"size-2400",["aria-label"]:"Alignment",children:[r.createElement(A,{children:"Left"}),r.createElement(A,{children:"Middle"}),r.createElement(A,{children:"Right"})]}))})}function Kc(){return n.exports.createElement(m,{title:"Content example",code:`let options = [\r
    {| id = 1; name = "Aardvark" |}\r
    {| id = 2; name = "Cat" |}\r
    {| id = 3; name = "Dog" |}\r
    {| id = 4; name = "Kangaroo" |}\r
    {| id = 5; name = "Koala" |}\r
    {| id = 6; name = "Penguin" |}\r
    {| id = 7; name = "Snake" |}\r
    {| id = 8; name = "Turtle" |}\r
    {| id = 9; name = "Wombat" |}\r
]\r
\r
let animalId, setAnimalId = React.useState<int option>(Option.None)\r
React.fragment [\r
    Spectrum.ListBox [\r
        ListBox.width (DimValue.Size Size2400)\r
        ListBox.ariaLabel "Animals"\r
        ListBox.items options\r
        ListBox.itemTemplate (fun (obj: {| id: int; name: string |}) ->\r
            Spectrum.Item obj.name\r
        )\r
        ListBox.selectionMode SelectionMode.Single\r
        ListBox.onSelectionChange (fun selection ->\r
            match selection with\r
            | [ id ] -> setAnimalId (Some id)\r
            | _ -> setAnimalId None\r
        )\r
    ]\r
    let text =\r
        match animalId with\r
        | Some _ ->  $"Animal id: {animalId}"\r
        | None -> "None selected"\r
    Html.p text\r
]`,description:o(),elements:C(x(()=>{const e=f([{id:1,name:"Aardvark"},{id:2,name:"Cat"},{id:3,name:"Dog"},{id:4,name:"Kangaroo"},{id:5,name:"Koala"},{id:6,name:"Penguin"},{id:7,name:"Snake"},{id:8,name:"Turtle"},{id:9,name:"Wombat"}]),t=B(void 0),l=t[1],i=t[0];return E(n.exports.createElement(n.exports.Fragment,{},...C(x(()=>P(E(r.createElement(Be,{width:"size-2400",["aria-label"]:"Animals",items:Array.from(e),children:a=>r.createElement(A,{children:a.name}),selectionMode:"single",onSelectionChange:a=>{const c=oe(a.values());let s,d;switch(v(c)?s=1:v(k(c))?(s=0,d=w(c)):s=1,s){case 0:{l(d);break}case 1:{l(void 0);break}}}})),x(()=>{const a=i==null?"None selected":`Animal id: ${i}`;return E(n.exports.createElement("p",{children:[a]}))}))))))}))})}function Jc(){return n.exports.createElement(m,{title:"Selection example",code:`let options = [\r
    {| name = "Koala" |}\r
    {| name = "Kangaroo" |}\r
    {| name = "Platypus" |}\r
    {| name = "Bald Eagle" |}\r
    {| name = "Bison" |}\r
    {| name = "Skunk" |}\r
]\r
\r
let animal, setAnimal = React.useState(["Bison"])\r
\r
Spectrum.Flex [\r
    Flex.direction FlexDirection.Row\r
    Flex.gap (DimValue.Size Size350)\r
    Flex.children [\r
        Spectrum.ListBox [\r
            ListBox.selectionMode SelectionMode.Multiple\r
            ListBox.ariaLabel "Pick an animal"\r
            ListBox.items options\r
            ListBox.defaultSelectedKeys ["Bison"; "Koala"]\r
            ListBox.width (DimValue.Size Size2400)\r
            ListBox.itemTemplate (fun (item: {| name: string |}) ->\r
                Spectrum.Item [\r
                    Item.key item.name\r
                    Item.textValue item.name\r
                    Item.children [\r
                        Spectrum.Text item.name\r
                    ]\r
                ]\r
            )\r
        ]\r
        Spectrum.ListBox [\r
            ListBox.selectionMode SelectionMode.Multiple\r
            ListBox.ariaLabel "Pick an animal"\r
            ListBox.items options\r
            ListBox.selectedKeys animal\r
            ListBox.onSelectionChange setAnimal\r
            ListBox.width (DimValue.Size Size2400)\r
            ListBox.itemTemplate (fun (item: {| name: string |}) ->\r
                Spectrum.Item [\r
                    Item.key item.name\r
                    Item.textValue item.name\r
                    Item.children [\r
                        Spectrum.Text item.name\r
                    ]\r
                ]\r
            )\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=f([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),t=B(u("Bison"));return E(r.createElement(F,{direction:"row",gap:"size-350",children:r.Children.toArray([r.createElement(Be,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),defaultSelectedKeys:["Bison","Koala"],width:"size-2400",children:l=>r.createElement(A,{key:l.name,textValue:l.name,children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray([l.name])})])})}),r.createElement(Be,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],onSelectionChange:l=>{t[1](oe(l.values()))},width:"size-2400",children:l=>r.createElement(A,{key:l.name,textValue:l.name,children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray([l.name])})])})})])}))}))})}function b(e,t){return r.createElement(A,{key:e,textValue:t,children:t})}function $c(){return n.exports.createElement(m,{title:"Sections",code:`Spectrum.ListBox [\r
    ListBox.width (DimValue.Size Size2400)\r
    ListBox.ariaLabel "Pick your favorite"\r
    ListBox.selectionMode SelectionMode.Single\r
    ListBox.children [\r
        Spectrum.Section [\r
            Section.title "Animals"\r
            Section.children [\r
                makeItem "Aardvark" "Aardvark"\r
                makeItem "Kangaroo" "Kangaroo"\r
                makeItem "Snake" "Snake"\r
            ]\r
        ]\r
        Spectrum.Section [\r
            Section.title "People"\r
            Section.children [\r
                makeItem "Danni" "Danni"\r
                makeItem "Devon" "Devon"\r
                makeItem "Ross" "Ross"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Be,{width:"size-2400",["aria-label"]:"Pick your favorite",selectionMode:"single",children:[r.createElement(ve,{title:"Animals",children:[b("Aardvark","Aardvark"),b("Kangaroo","Kangaroo"),b("Snake","Snake")]}),r.createElement(ve,{title:"People",children:[b("Danni","Danni"),b("Devon","Devon"),b("Ross","Ross")]})]}))})}function Yc(){return n.exports.createElement(m,{title:"Dynamic items",code:`let options = [\r
    {| name = "Australian"\r
        animals = [|\r
            {| id = 2; name = "Koala" |}\r
            {| id = 3; name = "Kangaroo" |}\r
            {| id = 4; name = "Platypus" |} |] |}\r
    {| name = "American"\r
        animals = [|\r
            {| id = 6; name = "Bald Eagle" |}\r
            {| id = 7; name = "Bison" |}\r
            {| id = 8; name = "Skunk" |} |] |}\r
]\r
let selected, setSelected = React.useState<string list>([])\r
\r
Spectrum.ListBox [\r
    ListBox.ariaLabel "Pick an animal"\r
    ListBox.items options\r
    ListBox.selectedKeys selected\r
    ListBox.selectionMode SelectionMode.Single\r
    ListBox.onSelectionChange setSelected\r
    ListBox.width (DimValue.Size Size2400)\r
    ListBox.itemTemplate (fun (item: {| name: string; animals: {| id: int; name: string |} array |} ) ->\r
        Spectrum.Section [\r
            Section.key item.name\r
            Section.title item.name\r
            Section.items item.animals\r
            Section.itemTemplate (fun (inner: {| id: int; name: string |}) ->\r
                Spectrum.Item [\r
                    Item.key (inner.id.ToString())\r
                    Item.textValue inner.name\r
                    Item.children [ Spectrum.Text inner.name ]\r
                ]\r
            )\r
        ]\r
    )\r
]`,description:o(),elements:C(x(()=>{const e=f([{animals:[{id:2,name:"Koala"},{id:3,name:"Kangaroo"},{id:4,name:"Platypus"}],name:"Australian"},{animals:[{id:6,name:"Bald Eagle"},{id:7,name:"Bison"},{id:8,name:"Skunk"}],name:"American"}]),t=B(o());return E(r.createElement(Be,{["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],selectionMode:"single",onSelectionChange:l=>{t[1](oe(l.values()))},width:"size-2400",children:l=>r.createElement(ve,{key:l.name,title:l.name,items:Array.from(l.animals),children:i=>{let a;return r.createElement(A,{key:(a=i.id,yn(a)),textValue:i.name,children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray([i.name])})])})}})}))}))})}function Xc(){return n.exports.createElement(m,{title:"Events",code:`let frequency, setFrequency = React.useState<string list>([])\r
let makeItem x =\r
    Spectrum.Item [\r
        Item.key x\r
        Item.textValue x\r
        Item.children [ Spectrum.Text x ]\r
    ]\r
\r
React.fragment [\r
    Spectrum.ListBox [\r
        ListBox.ariaLabel "Choose frequency"\r
        ListBox.selectionMode SelectionMode.Single\r
        ListBox.onSelectionChange setFrequency\r
        ListBox.width (DimValue.Size Size2400)\r
        ListBox.children [\r
            makeItem "Rarely"\r
            makeItem "Sometimes"\r
            makeItem "Always"\r
        ]\r
    ]\r
    Html.p $"You selected: {match frequency with | [ value ] -> value | _ -> System.String.Empty}"\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(o()),l=t[0],i=a=>r.createElement(A,{key:a,textValue:a,children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray([a])})])});return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(Be,{["aria-label"]:"Choose frequency",selectionMode:"single",onSelectionChange:a=>{t[1](oe(a.values()))},width:"size-2400",children:[i("Rarely"),i("Sometimes"),i("Always")]}),(e=`You selected: ${v(l)?"":v(k(l))?w(l):""}`,n.exports.createElement("p",{children:[e]}))))}))})}function Zc(){let e,t,l;return n.exports.createElement(m,{title:"Complex items",code:`Spectrum.ListBox [\r
    ListBox.width (DimValue.Size Size2400)\r
    ListBox.ariaLabel "Options"\r
    ListBox.selectionMode SelectionMode.Single\r
    ListBox.children [\r
        Spectrum.Section [\r
            Section.title "Permissions"\r
            Section.children [\r
                Spectrum.Item [\r
                    Item.textValue "Read"\r
                    Item.children [\r
                        Spectrum.Icon.Book [\r
                            Icon.size IconSize.S\r
                        ]\r
                        Spectrum.Text "Read"\r
                        Spectrum.Text [\r
                            Text.content "Read only"\r
                            Text.slot "description"\r
                        ]\r
                    ]\r
                ]\r
                Spectrum.Item [\r
                    Item.textValue "Write"\r
                    Item.children [\r
                        Spectrum.Icon.Draw [\r
                            Icon.size IconSize.S\r
                        ]\r
                        Spectrum.Text "Write"\r
                        Spectrum.Text [\r
                            Text.content "Read and Write Only"\r
                            Text.slot "description"\r
                        ]\r
                    ]\r
                ]\r
                Spectrum.Item [\r
                    Item.textValue "Admin"\r
                    Item.children [\r
                        Spectrum.Icon.BulkEditUsers [\r
                            Icon.size IconSize.S\r
                        ]\r
                        Spectrum.Text "Admin"\r
                        Spectrum.Text [\r
                            Text.content "Full access"\r
                            Text.slot "description"\r
                        ]\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Be,{width:"size-2400",["aria-label"]:"Options",selectionMode:"single",children:[r.createElement(ve,{title:"Permissions",children:[r.createElement(A,{textValue:"Read",children:r.Children.toArray([(e=fn,r.createElement(e,{size:"S"})),r.createElement(y,{children:r.Children.toArray(["Read"])}),r.createElement(y,{children:r.Children.toArray(["Read only"]),slot:"description"})])}),r.createElement(A,{textValue:"Write",children:r.Children.toArray([(t=sr,r.createElement(t,{size:"S"})),r.createElement(y,{children:r.Children.toArray(["Write"])}),r.createElement(y,{children:r.Children.toArray(["Read and Write Only"]),slot:"description"})])}),r.createElement(A,{textValue:"Admin",children:r.Children.toArray([(l=_l,r.createElement(l,{size:"S"})),r.createElement(y,{children:r.Children.toArray(["Admin"])}),r.createElement(y,{children:r.Children.toArray(["Full access"]),slot:"description"})])})]})]}))})}function Qc(){return n.exports.createElement(m,{title:"Disabled keys",code:`Spectrum.ListBox [\r
    ListBox.width (DimValue.Size Size2400)\r
    ListBox.ariaLabel "Pick your favorite"\r
    ListBox.disabledKeys [ "Snake"; "Ross" ]\r
    ListBox.selectionMode SelectionMode.Single\r
    ListBox.children [\r
        Spectrum.Section [\r
            Section.title "Animals"\r
            Section.children [\r
                makeItem "Aardvark" "Aardvark"\r
                makeItem "Kangaroo" "Kangaroo"\r
                makeItem "Snake" "Snake"\r
            ]\r
        ]\r
        Spectrum.Section [\r
            Section.title "People"\r
            Section.children [\r
                makeItem "Danni" "Danni"\r
                makeItem "Devon" "Devon"\r
                makeItem "Ross" "Ross"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Be,{width:"size-2400",["aria-label"]:"Pick your favorite",disabledKeys:["Snake","Ross"],selectionMode:"single",children:[r.createElement(ve,{title:"Animals",children:[b("Aardvark","Aardvark"),b("Kangaroo","Kangaroo"),b("Snake","Snake")]}),r.createElement(ve,{title:"People",children:[b("Danni","Danni"),b("Devon","Devon"),b("Ross","Ross")]})]}))})}function es(){const e=f(["A list of options that can allow selection of one or more.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ListBox.html"})," for more details."]);return n.exports.createElement(V,{title:"ListBox",description:e,examples:f([n.exports.createElement(Uc,null),n.exports.createElement(Kc,null),n.exports.createElement(Jc,null),n.exports.createElement($c,null),n.exports.createElement(Yc,null),n.exports.createElement(Xc,null),n.exports.createElement(Zc,null),n.exports.createElement(Qc,null)])})}function ts(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.MenuTrigger [\r
    Spectrum.ActionButton [\r
        ActionButton.content "Edit"\r
    ]\r
    Spectrum.Menu [\r
        Menu.onAction (fun x -> Browser.Dom.window.alert(x))\r
        Menu.children [\r
            makeItem "cut" "Cut"\r
            makeItem "copy" "Copy"\r
            makeItem "paste" "Paste"\r
            makeItem "replace" "Replace"\r
        ]\r
    ]\r
]`,description:o(),elements:u(n.exports.createElement(te,o(),r.createElement(N,{children:"Edit"}),r.createElement(re,{onAction:e=>{window.alert(q(e))},children:[b("cut","Cut"),b("copy","Copy"),b("paste","Paste"),b("replace","Replace")]})))})}function rs(){return n.exports.createElement(m,{title:"Using an item template",code:`let menuItems = [\r
    {| id = "cut"; name = "Cut" |}\r
    {| id = "copy"; name = "Copy" |}\r
    {| id = "Paste"; name = "Paste" |}\r
    {| id = "replace"; name = "Replace" |}\r
]\r
\r
Spectrum.MenuTrigger [\r
    Spectrum.ActionButton [ Html.text "Edit" ]\r
    Spectrum.Menu [\r
        Menu.items menuItems\r
        Menu.itemTemplate (fun (item: {| id: string; name: string |}) ->\r
            makeItem item.id item.name\r
        )\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=f([{id:"cut",name:"Cut"},{id:"copy",name:"Copy"},{id:"Paste",name:"Paste"},{id:"replace",name:"Replace"}]);return E(n.exports.createElement(te,o(),n.exports.createElement(N,o(),"Edit"),r.createElement(re,{items:Array.from(e),children:t=>b(t.id,t.name)})))}))})}function ns(){return n.exports.createElement(m,{title:"Events",code:`let action, setAction = React.useState("")\r
\r
let makeItem key text =\r
    Spectrum.Item [\r
        Item.key key\r
        Item.textValue text\r
        Item.children [ Spectrum.Text text ]\r
    ]\r
\r
React.fragment [\r
    Spectrum.MenuTrigger [\r
        Spectrum.ActionButton [ Html.text "Edit" ]\r
        Spectrum.Menu [\r
            Menu.onAction setAction\r
            Menu.children [\r
                makeItem "cut" "Cut"\r
                makeItem "copy" "Copy"\r
                makeItem "paste" "Paste"\r
            ]\r
        ]\r
    ]\r
    Html.p $"Action: {action}"\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(""),l=(i,a)=>r.createElement(A,{key:i,textValue:a,children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray([a])})])});return E(n.exports.createElement(n.exports.Fragment,{},n.exports.createElement(te,o(),n.exports.createElement(N,o(),"Edit"),r.createElement(re,{onAction:t[1],children:[l("cut","Cut"),l("copy","Copy"),l("paste","Paste")]})),(e=`Action: ${t[0]}`,n.exports.createElement("p",{children:[e]}))))}))})}function ls(){return n.exports.createElement(m,{title:"Selection",code:`let selected, setSelected = React.useState([ "middle" ])\r
\r
React.fragment [\r
    Spectrum.MenuTrigger [\r
        Spectrum.ActionButton [ Html.text "Align" ]\r
        Spectrum.Menu [\r
            Menu.selectionMode SelectionMode.Single\r
            Menu.selectedKeys selected\r
            Menu.onSelectionChange setSelected\r
            Menu.children [\r
                makeItem "left" "Left"\r
                makeItem "middle" "Middle"\r
                makeItem "right" "Right"\r
            ]\r
        ]\r
    ]\r
    match selected with\r
    | [ selected' ] -> Html.p $"Current selection (controlled): {selected'}"\r
    | _ -> Html.p $"No selection"\r
]`,description:o(),elements:C(x(()=>{const e=B(u("middle")),t=e[0];return E(n.exports.createElement(n.exports.Fragment,{},...C(x(()=>P(E(n.exports.createElement(te,o(),n.exports.createElement(N,o(),"Align"),r.createElement(re,{selectionMode:"single",selectedKeys:t,onSelectionChange:l=>{e[1](oe(l.values()))},children:[b("left","Left"),b("middle","Middle"),b("right","Right")]}))),x(()=>{let l;return v(t)?E(n.exports.createElement("p",{children:["No selection"]})):v(k(t))?E((l=`Current selection (controlled): ${w(t)}`,n.exports.createElement("p",{children:[l]}))):E(n.exports.createElement("p",{children:["No selection"]}))}))))))}))})}function is(){return n.exports.createElement(m,{title:"Selection (multiple)",code:`let selected, setSelected = React.useState([ "Sidebar"; "Console" ])\r
\r
React.fragment [\r
    Spectrum.MenuTrigger [\r
        MenuTrigger.closeOnSelected false\r
        MenuTrigger.children [\r
            Spectrum.ActionButton [ Html.text "Show" ]\r
            Spectrum.Menu [\r
                Menu.selectionMode SelectionMode.Multiple\r
                Menu.selectedKeys selected\r
                Menu.onSelectionChange setSelected\r
                Menu.children [\r
                    makeItem "Sidebar" "Sidebar"\r
                    makeItem "Searchbar" "Searchbar"\r
                    makeItem "Tools" "Tools"\r
                    makeItem "Console" "Console"\r
                ]\r
            ]\r
        ]\r
    ]\r
    Html.p $"Current selection (controlled): {selected |> Array.ofList}"\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(f(["Sidebar","Console"])),l=t[0];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(te,{closeOnSelect:!1,children:[n.exports.createElement(N,o(),"Show"),r.createElement(re,{selectionMode:"multiple",selectedKeys:l,onSelectionChange:i=>{t[1](oe(i.values()))},children:[b("Sidebar","Sidebar"),b("Searchbar","Searchbar"),b("Tools","Tools"),b("Console","Console")]})]}),(e=`Current selection (controlled): ${Vt(l)}`,n.exports.createElement("p",{children:[e]}))))}))})}function as(){return n.exports.createElement(m,{title:"Sections",code:`let selected, setSelected = React.useState([ "bold"; "left" ])\r
\r
Spectrum.MenuTrigger [\r
    Spectrum.ActionButton [ Html.text "Edit" ]\r
    Spectrum.Menu [\r
        Menu.selectionMode SelectionMode.Multiple\r
        Menu.selectedKeys selected\r
        Menu.onSelectionChange setSelected\r
        Menu.children [\r
            Spectrum.Section [\r
                Section.title "Styles"\r
                Section.children [\r
                    makeItem "bold" "Bold"\r
                    makeItem "underline" "Underline"\r
                ]\r
            ]\r
            Spectrum.Section [\r
                Section.title "Align"\r
                Section.children [\r
                    makeItem "left" "Left"\r
                    makeItem "middle" "Middle"\r
                    makeItem "right" "Right"\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B(f(["bold","left"]));return E(n.exports.createElement(te,o(),n.exports.createElement(N,o(),"Edit"),r.createElement(re,{selectionMode:"multiple",selectedKeys:e[0],onSelectionChange:t=>{e[1](oe(t.values()))},children:[r.createElement(ve,{title:"Styles",children:[b("bold","Bold"),b("underline","Underline")]}),r.createElement(ve,{title:"Align",children:[b("left","Left"),b("middle","Middle"),b("right","Right")]})]})))}))})}function os(){let e,t,l;return n.exports.createElement(m,{title:"Complex items",code:`Spectrum.MenuTrigger [\r
    Spectrum.ActionButton [ Html.text "Edit" ]\r
    Spectrum.Menu [\r
        Spectrum.Item [\r
            Item.key "cut"\r
            Item.textValue "Cut"\r
            Item.children [\r
                Spectrum.Icon.Cut [ Icon.size IconSize.S ]\r
                Spectrum.Text "Cut"\r
                Spectrum.Keyboard "\u2318X"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "copy"\r
            Item.textValue "Copy"\r
            Item.children [\r
                Spectrum.Icon.Copy [ Icon.size IconSize.S ]\r
                Spectrum.Text "Copy"\r
                Spectrum.Keyboard "\u2318C"\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.key "paste"\r
            Item.textValue "Paste"\r
            Item.children [\r
                Spectrum.Icon.Paste [ Icon.size IconSize.S ]\r
                Spectrum.Text "Paste"\r
                Spectrum.Keyboard "\u2318V"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(n.exports.createElement(te,o(),n.exports.createElement(N,o(),"Edit"),n.exports.createElement(re,o(),r.createElement(A,{key:"cut",textValue:"Cut",children:r.Children.toArray([(e=Gl,r.createElement(e,{size:"S"})),r.createElement(y,{children:r.Children.toArray(["Cut"])}),r.createElement(pr,{children:r.Children.toArray(["\u2318X"])})])}),r.createElement(A,{key:"copy",textValue:"Copy",children:r.Children.toArray([(t=Mr,r.createElement(t,{size:"S"})),r.createElement(y,{children:r.Children.toArray(["Copy"])}),r.createElement(pr,{children:r.Children.toArray(["\u2318C"])})])}),r.createElement(A,{key:"paste",textValue:"Paste",children:r.Children.toArray([(l=Hl,r.createElement(l,{size:"S"})),r.createElement(y,{children:r.Children.toArray(["Paste"])}),r.createElement(pr,{children:r.Children.toArray(["\u2318V"])})])}))))})}function cs(){return n.exports.createElement(m,{title:"Disabled keys",code:`let items = [\r
    {| name = "tiff"; id = "a1b2c3" |}\r
    {| name = "png"; id = "g5h1j9" |}\r
    {| name = "jpg"; id = "p8k3i4" |}\r
    {| name = "PDF"; id = "j7i3a0" |}\r
]\r
\r
Spectrum.MenuTrigger [\r
    Spectrum.ActionButton [ Html.text "Filter" ]\r
    Spectrum.Menu [\r
        Menu.items items\r
        Menu.disabledKeys [ "a1b2c3"; "p8k3i4" ]\r
        Menu.itemTemplate (fun (item: {| name: string; id: string |}) ->\r
            Spectrum.Item item.name\r
        )\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=f([{id:"a1b2c3",name:"tiff"},{id:"g5h1j9",name:"png"},{id:"p8k3i4",name:"jpg"},{id:"j7i3a0",name:"PDF"}]);return E(n.exports.createElement(te,o(),n.exports.createElement(N,o(),"Filter"),r.createElement(re,{items:Array.from(e),disabledKeys:["a1b2c3","p8k3i4"],children:t=>r.createElement(A,{children:t.name})})))}))})}function ss(){const e=f(["Menus display a list of actions or options that a user can choose.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Menu.html"})," for more details."]);return n.exports.createElement(V,{title:"Menu",description:e,examples:f([n.exports.createElement(ts,null),n.exports.createElement(rs,null),n.exports.createElement(ns,null),n.exports.createElement(ls,null),n.exports.createElement(is,null),n.exports.createElement(as,null),n.exports.createElement(os,null),n.exports.createElement(cs,null)])})}function us(){return n.exports.createElement(m,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)\r
\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.alignItems FlexAlignItems.Center\r
    Flex.children [\r
        Spectrum.MenuTrigger [\r
            MenuTrigger.onOpenChange setIsOpen\r
            MenuTrigger.children [\r
                Spectrum.ActionButton [ Html.text "Edit" ]\r
                Spectrum.Menu [\r
                    Spectrum.Item [\r
                        Item.key "cut"\r
                        Item.textValue "Cut"\r
                        Item.children [ Spectrum.Text "Cut" ]\r
                    ]\r
                    Spectrum.Item [\r
                        Item.key "copy"\r
                        Item.textValue "Copy"\r
                        Item.children [ Spectrum.Text "Copy" ]\r
                    ]\r
                    Spectrum.Item [\r
                        Item.key "paste"\r
                        Item.textValue "Paste"\r
                        Item.children [ Spectrum.Text "Paste" ]\r
                    ]\r
                ]\r
            ]\r
        ]\r
        Html.div $"Currently open: {isOpen}"\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(!1);return E(r.createElement(F,{gap:"size-100",alignItems:"center",children:r.Children.toArray([r.createElement(te,{onOpenChange:t[1],children:[n.exports.createElement(N,o(),"Edit"),n.exports.createElement(re,o(),r.createElement(A,{key:"cut",textValue:"Cut",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Cut"])})])}),r.createElement(A,{key:"copy",textValue:"Copy",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Copy"])})])}),r.createElement(A,{key:"paste",textValue:"Paste",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Paste"])})])}))]}),(e=`Currently open: ${t[0]}`,n.exports.createElement("div",{children:[e]}))])}))}))})}function ms(){return n.exports.createElement(m,{title:"Alignment and direction",code:`Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.children [\r
        Spectrum.MenuTrigger [\r
            MenuTrigger.align Alignment.Start\r
            MenuTrigger.children [\r
                Spectrum.ActionButton "Edit"\r
                Spectrum.Menu [\r
                    makeItem "cut" "Cut"\r
                    makeItem "copy" "Copy"\r
                    makeItem "paste" "Paste"\r
                ]\r
            ]\r
        ]\r
        Spectrum.MenuTrigger [\r
            MenuTrigger.align Alignment.End\r
            MenuTrigger.direction MenuDirection.Top\r
            MenuTrigger.shouldFlip false\r
            MenuTrigger.children [\r
                Spectrum.ActionButton "View"\r
                Spectrum.Menu [\r
                    makeItem "sidebar" "Sidebar"\r
                    makeItem "options" "Page options"\r
                    makeItem "edit" "Edit panel"\r
                ]\r
            ]\r
        ]\r
        Spectrum.MenuTrigger [\r
            MenuTrigger.align Alignment.Start\r
            MenuTrigger.direction MenuDirection.Start\r
            MenuTrigger.children [\r
                Spectrum.ActionButton "Edit"\r
                Spectrum.Menu [\r
                    makeItem "cut" "Cut"\r
                    makeItem "copy" "Copy"\r
                    makeItem "paste" "Paste"\r
                ]\r
            ]\r
        ]\r
        Spectrum.MenuTrigger [\r
            MenuTrigger.align Alignment.End\r
            MenuTrigger.direction MenuDirection.End\r
            MenuTrigger.children [\r
                Spectrum.ActionButton "View"\r
                Spectrum.Menu [\r
                    makeItem "sidebar" "Sidebar"\r
                    makeItem "options" "Page options"\r
                    makeItem "edit" "Edit panel"\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{gap:"size-100",children:r.Children.toArray([r.createElement(te,{align:"start",children:[r.createElement(N,{children:r.Children.toArray(["Edit"])}),n.exports.createElement(re,o(),b("cut","Cut"),b("copy","Copy"),b("paste","Paste"))]}),r.createElement(te,{align:"end",direction:"top",shouldFlip:!1,children:[r.createElement(N,{children:r.Children.toArray(["View"])}),n.exports.createElement(re,o(),b("sidebar","Sidebar"),b("options","Page options"),b("edit","Edit panel"))]}),r.createElement(te,{align:"start",direction:"start",children:[r.createElement(N,{children:r.Children.toArray(["Edit"])}),n.exports.createElement(re,o(),b("cut","Cut"),b("copy","Copy"),b("paste","Paste"))]}),r.createElement(te,{align:"end",direction:"end",children:[r.createElement(N,{children:r.Children.toArray(["View"])}),n.exports.createElement(re,o(),b("sidebar","Sidebar"),b("options","Page options"),b("edit","Edit panel"))]})])}))})}function ds(){return n.exports.createElement(m,{title:"Open and selection",code:`let isOpen, setIsOpen = React.useState(false)\r
let selection, setSelection = React.useState([])\r
\r
Spectrum.MenuTrigger [\r
    MenuTrigger.isOpen isOpen\r
    MenuTrigger.onOpenChange setIsOpen\r
    MenuTrigger.children [\r
        Spectrum.ActionButton [ Html.text "View" ]\r
        Spectrum.Menu [\r
            Menu.selectionMode SelectionMode.Multiple\r
            Menu.selectedKeys selection\r
            Menu.onSelectionChange setSelection\r
            Menu.children [\r
                Spectrum.Item [\r
                    Item.key "side"\r
                    Item.textValue "Sidebar"\r
                    Item.children [ Spectrum.Text "Sidebar" ]\r
                ]\r
                Spectrum.Item [\r
                    Item.key "options"\r
                    Item.textValue "Page options"\r
                    Item.children [ Spectrum.Text "Page options" ]\r
                ]\r
                Spectrum.Item [\r
                    Item.key "edit"\r
                    Item.textValue "Edit panel"\r
                    Item.children [ Spectrum.Text "Edit panel" ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B(!1),t=B(o());return E(r.createElement(te,{isOpen:e[0],onOpenChange:e[1],children:[n.exports.createElement(N,o(),"View"),r.createElement(re,{selectionMode:"multiple",selectedKeys:t[0],onSelectionChange:l=>{t[1](oe(l.values()))},children:[r.createElement(A,{key:"side",textValue:"Sidebar",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Sidebar"])})])}),r.createElement(A,{key:"options",textValue:"Page options",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Page options"])})])}),r.createElement(A,{key:"edit",textValue:"Edit panel",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Edit panel"])})])})]})]}))}))})}function ps(){const e=f(["The MenuTrigger serves as a wrapper around a Menu and its associated trigger, linking the Menu's open state with the trigger's press state.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html"})," for more details."]);return n.exports.createElement(V,{title:"MenuTrigger",description:e,examples:f([n.exports.createElement(us,null),n.exports.createElement(ms,null),n.exports.createElement(ds,null)])})}function hs(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.TableView [\r
    TableView.ariaLabel "Example table with static contents"\r
    TableView.selectionMode SelectionMode.Multiple\r
    TableView.children [\r
        Spectrum.TableHeader [\r
            Spectrum.Column "Name"\r
            Spectrum.Column "Type"\r
            Spectrum.Column [\r
                Column.align ColumnAlignment.End\r
                Column.content "Date Modified"\r
            ]\r
        ]\r
        Spectrum.TableBody [\r
            Spectrum.Row [\r
                Spectrum.Cell "Games"\r
                Spectrum.Cell "File folder"\r
                Spectrum.Cell "6/7/2020"\r
            ]\r
            Spectrum.Row [\r
                Spectrum.Cell "Program Files"\r
                Spectrum.Cell "File folder"\r
                Spectrum.Cell "4/7/2021"\r
            ]\r
            Spectrum.Row [\r
                Spectrum.Cell "bootmgr"\r
                Spectrum.Cell "System file"\r
                Spectrum.Cell "11/20/2010"\r
            ]\r
            Spectrum.Row [\r
                Spectrum.Cell "log.txt"\r
                Spectrum.Cell "Text Document"\r
                Spectrum.Cell "1/18/2016"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Rr,{["aria-label"]:"Example table with static contents",selectionMode:"multiple",children:[n.exports.createElement(zr,o(),r.createElement(Ot,{children:"Name"}),r.createElement(Ot,{children:"Type"}),r.createElement(Ot,{align:"end",children:["Date Modified"]})),n.exports.createElement(Pr,o(),n.exports.createElement(ft,o(),r.createElement(ae,{children:"Games"}),r.createElement(ae,{children:"File folder"}),r.createElement(ae,{children:"6/7/2020"})),n.exports.createElement(ft,o(),r.createElement(ae,{children:"Program Files"}),r.createElement(ae,{children:"File folder"}),r.createElement(ae,{children:"4/7/2021"})),n.exports.createElement(ft,o(),r.createElement(ae,{children:"bootmgr"}),r.createElement(ae,{children:"System file"}),r.createElement(ae,{children:"11/20/2010"})),n.exports.createElement(ft,o(),r.createElement(ae,{children:"log.txt"}),r.createElement(ae,{children:"Text Document"}),r.createElement(ae,{children:"1/18/2016"})))]}))})}function fs(){return n.exports.createElement(m,{title:"More complex example",code:`let columns = [\r
    {| name = "Name"; uid = "name" |}\r
    {| name = "Type"; uid = "entryType" |}\r
    {| name = "Date Modified"; uid = "date" |}\r
]\r
\r
let rows = [\r
    {| id = 1; name = "Games"; date = "6/7/2020"; entryType = "File folder" |}\r
    {| id = 2; name = "Program Files"; date = "4/7/2021"; entryType = "File folder" |}\r
    {| id = 3; name = "bootmgr"; date = "11/20/2010"; entryType = "System file" |}\r
    {| id = 4; name = "log.txt"; date = "1/18/2016"; entryType = "Text Document" |}\r
]\r
\r
Spectrum.TableView [\r
    TableView.ariaLabel "Example table with dynamic content"\r
    TableView.maxWidth (DimValue.Size Size6000)\r
    TableView.selectionMode SelectionMode.Multiple\r
    TableView.disabledKeys [ 3 ]\r
    TableView.children [\r
        Spectrum.TableHeader [\r
            TableHeader.columns columns\r
            TableHeader.columnTemplate (fun (col: {| name: string; uid: string |}) ->\r
                Spectrum.Column [\r
                    Column.key col.uid\r
                    Column.align (if col.uid = "date" then ColumnAlignment.End else ColumnAlignment.Start)\r
                    Column.content col.name\r
                ]\r
            )\r
        ]\r
        Spectrum.TableBody [\r
            TableBody.items rows\r
            TableBody.itemTemplate (fun (item: {| id: int; name: string; date: string; entryType: string |}) ->\r
                Spectrum.Row [\r
                    Row.cellTemplate (fun columnKey ->\r
                        let entry: string = item?(columnKey)\r
                        Spectrum.Cell entry\r
                    )\r
                ]\r
            )\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=f([{name:"Name",uid:"name"},{name:"Type",uid:"entryType"},{name:"Date Modified",uid:"date"}]),t=f([{date:"6/7/2020",entryType:"File folder",id:1,name:"Games"},{date:"4/7/2021",entryType:"File folder",id:2,name:"Program Files"},{date:"11/20/2010",entryType:"System file",id:3,name:"bootmgr"},{date:"1/18/2016",entryType:"Text Document",id:4,name:"log.txt"}]);return E(r.createElement(Rr,{["aria-label"]:"Example table with dynamic content",maxWidth:"size-6000",selectionMode:"multiple",disabledKeys:[3],children:[r.createElement(zr,{columns:Array.from(e),children:l=>r.createElement(Ot,{key:l.uid,align:l.uid==="date"?"end":"start",children:[l.name]})}),r.createElement(Pr,{items:t,children:l=>r.createElement(ft,{children:i=>{const a=l[i];return r.createElement(ae,{children:a})}})})]}))}))})}function gs(){return n.exports.createElement(m,{title:"Layout + highlight selection + action",code:`let columns = [\r
    {| id = "firstName"; name = "First Name" |}\r
    {| id = "lastName"; name = "Last Name" |}\r
    {| id = "city"; name = "City" |}\r
]\r
\r
let rows = [\r
    {| id = 1; firstName = "George"; lastName = "Danila"; city = "Sibiu" |}\r
    {| id = 2; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}\r
    {| id = 3; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}\r
    {| id = 4; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}\r
    {| id = 5; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}\r
    {| id = 6; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}\r
    {| id = 7; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}\r
    {| id = 8; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}\r
    {| id = 9; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}\r
    {| id = 10; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}\r
    {| id = 11; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}\r
    {| id = 12; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}\r
    {| id = 13; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}\r
    {| id = 14; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}\r
    {| id = 15; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}\r
    {| id = 16; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}\r
    {| id = 17; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}\r
    {| id = 18; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}\r
    {| id = 19; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}\r
    {| id = 20; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}\r
    {| id = 21; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}\r
    {| id = 22; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}\r
    {| id = 23; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}\r
    {| id = 24; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}\r
    {| id = 25; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}\r
    {| id = 26; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}\r
    {| id = 27; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}\r
    {| id = 28; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}\r
    {| id = 29; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}\r
    {| id = 30; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}\r
    {| id = 31; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}\r
    {| id = 32; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}\r
    {| id = 33; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}\r
    {| id = 34; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}\r
    {| id = 35; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}\r
    {| id = 36; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}\r
    {| id = 37; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}\r
    {| id = 38; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}\r
    {| id = 39; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}\r
    {| id = 40; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}\r
    {| id = 41; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}\r
    {| id = 42; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}\r
    {| id = 43; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}\r
    {| id = 44; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}\r
    {| id = 45; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}\r
    {| id = 46; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}\r
    {| id = 47; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}\r
    {| id = 48; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}\r
    {| id = 49; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}\r
]\r
\r
Spectrum.Flex [\r
    Flex.height (DimValue.Size Size5000)\r
    Flex.width "100%"\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.children [\r
        Spectrum.ActionButton [\r
            ActionButton.alignSelf FlexAlignSelf.Start\r
            ActionButton.content "Add"\r
        ]\r
        Spectrum.TableView [\r
            TableView.flex true\r
            TableView.ariaLabel "Example table with dynamic content"\r
            TableView.selectionMode SelectionMode.Single\r
            TableView.selectionStyle TableViewSelectionStyle.Highlight\r
            TableView.onAction (fun x -> Browser.Dom.window.alert(x))\r
            TableView.children [\r
                Spectrum.TableHeader [\r
                    TableHeader.columns columns\r
                    TableHeader.columnTemplate (fun (col: {| id: string; name: string |} ) ->\r
                        Spectrum.Column [\r
                            Column.key col.id\r
                            Column.content col.name\r
                        ]\r
                    )\r
                ]\r
                Spectrum.TableBody [\r
                    TableBody.items rows\r
                    TableBody.itemTemplate (fun (item: {| firstName: string; lastName: string; city: string |}) ->\r
                        Spectrum.Row [\r
                            Row.cellTemplate (fun columnKey ->\r
                                Spectrum.Cell (item?(columnKey) |> string)\r
                            )\r
                        ]\r
                    )\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=f([{id:"firstName",name:"First Name"},{id:"lastName",name:"Last Name"},{id:"city",name:"City"}]),t=f([{city:"Sibiu",firstName:"George",id:1,lastName:"Danila"},{city:"Tilburg",firstName:"Andras",id:2,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:3,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:4,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:5,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:6,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:7,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:8,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:9,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:10,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:11,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:12,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:13,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:14,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:15,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:16,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:17,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:18,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:19,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:20,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:21,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:22,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:23,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:24,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:25,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:26,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:27,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:28,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:29,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:30,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:31,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:32,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:33,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:34,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:35,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:36,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:37,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:38,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:39,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:40,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:41,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:42,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:43,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:44,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:45,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:46,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:47,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:48,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:49,lastName:"Jaram"}]);return E(r.createElement(F,{height:"size-5000",width:"100%",direction:"column",gap:"size-150",children:r.Children.toArray([r.createElement(N,{alignSelf:"start",children:"Add"}),r.createElement(Rr,{flex:!0,["aria-label"]:"Example table with dynamic content",selectionMode:"single",selectionStyle:"highlight",onAction:l=>{window.alert(q(l))},children:[r.createElement(zr,{columns:Array.from(e),children:l=>r.createElement(Ot,{key:l.id,children:[l.name]})}),r.createElement(Pr,{items:t,children:l=>r.createElement(ft,{children:i=>{const a=De(l[i]);return r.createElement(ae,{children:a})}})})]})])}))}))})}function xs(){const e=f(["Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TableView.html"})," for more details."]);return n.exports.createElement(V,{title:"TableView",description:e,examples:f([n.exports.createElement(hs,null),n.exports.createElement(fs,null),n.exports.createElement(gs,null)])})}function Es(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Checkbox [\r
    Checkbox.content "Unsubscribe"\r
]`,description:o(),elements:u(r.createElement(z,{children:r.Children.toArray(["Unsubscribe"])}))})}function Ss(){return n.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState(true)\r
Spectrum.Flex [\r
    Flex.direction FlexDirection.Row\r
    Flex.children [\r
        Spectrum.Checkbox [\r
            Checkbox.defaultSelected true\r
            Checkbox.content "Subscribe (uncontrolled)"\r
        ]\r
        Spectrum.Checkbox [\r
            Checkbox.isSelected selected\r
            Checkbox.onChange setSelected\r
            Checkbox.content "Subscribe (controlled)"\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B(!0);return E(r.createElement(F,{direction:"row",children:r.Children.toArray([r.createElement(z,{defaultSelected:!0,children:r.Children.toArray(["Subscribe (uncontrolled)"])}),r.createElement(z,{isSelected:e[0],onChange:e[1],children:r.Children.toArray(["Subscribe (controlled)"])})])}))}))})}function bs(){return n.exports.createElement(m,{title:"Indeterminate",code:`Spectrum.Checkbox [\r
    Checkbox.isIndeterminate true\r
    Checkbox.content "Subscribe"\r
]`,description:o(),elements:u(r.createElement(z,{isIndeterminate:!0,children:r.Children.toArray(["Subscribe"])}))})}function ys(){return n.exports.createElement(m,{title:"Events",code:`let selected, setSelected = React.useState(false)\r
    Spectrum.Flex [\r
        Flex.direction FlexDirection.Column\r
        Flex.children [\r
            Spectrum.Checkbox [\r
                Checkbox.isSelected selected\r
                Checkbox.onChange setSelected\r
                Checkbox.content "Subscribe"\r
            ]\r
            Spectrum.View [\r
                let status = if selected then "subscribed" else "unsubscribed"\r
                Html.text $"You are {status}"\r
            ]\r
        ]\r
    ]`,description:o(),elements:C(x(()=>{const e=B(!1),t=e[0];return E(r.createElement(F,{direction:"column",children:r.Children.toArray([r.createElement(z,{isSelected:t,onChange:e[1],children:r.Children.toArray(["Subscribe"])}),n.exports.createElement(R,o(),...C(x(()=>E(`You are ${t?"subscribed":"unsubscribed"}`))))])}))}))})}function Cs(){return n.exports.createElement(m,{title:"Validation",code:`Spectrum.Checkbox [\r
        Checkbox.validationState ValidationState.Invalid\r
        Checkbox.content "I accept the terms and conditions"\r
    ]`,description:o(),elements:u(r.createElement(z,{validationState:"invalid",children:r.Children.toArray(["I accept the terms and conditions"])}))})}function As(){const e=f(["Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Checkbox.html"})," for more details."]);return n.exports.createElement(V,{title:"Checkbox",description:e,examples:f([n.exports.createElement(Es,null),n.exports.createElement(Ss,null),n.exports.createElement(bs,null),n.exports.createElement(ys,null),n.exports.createElement(Cs,null)])})}function vs(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.CheckboxGroup [\r
    CheckboxGroup.label "Favorite sports"\r
    CheckboxGroup.children [\r
        Spectrum.Checkbox [\r
            Checkbox.value "soccer"\r
            Checkbox.content "Soccer"\r
        ]\r
        Spectrum.Checkbox [\r
            Checkbox.value "baseball"\r
            Checkbox.content "Baseball"\r
        ]\r
        Spectrum.Checkbox [\r
            Checkbox.value "basketball"\r
            Checkbox.content "Basketball"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(He,{label:"Favorite sports",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}))})}function ws(){return n.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState([ "soccer"; "baseball" ])\r
let joinStr (s: seq<string>) = System.String.Join(", ", s)\r
\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size300)\r
    Flex.children [\r
        Spectrum.CheckboxGroup [\r
            CheckboxGroup.label "Favorite sports (uncontrolled)"\r
            CheckboxGroup.defaultValue [ "soccer"; "baseball" ]\r
            CheckboxGroup.children [\r
                Spectrum.Checkbox [\r
                    Checkbox.value "soccer"\r
                    Checkbox.content "Soccer"\r
                ]\r
                Spectrum.Checkbox [\r
                    Checkbox.value "baseball"\r
                    Checkbox.content "Baseball"\r
                ]\r
                Spectrum.Checkbox [\r
                    Checkbox.value "basketball"\r
                    Checkbox.content "Basketball"\r
                ]\r
            ]\r
        ]\r
        Spectrum.Flex [\r
            Flex.direction FlexDirection.Column\r
            Flex.gap (DimValue.Size Size200)\r
            Flex.children [\r
                Spectrum.CheckboxGroup [\r
                    CheckboxGroup.label "Favorite sports (controlled)"\r
                    CheckboxGroup.value selected\r
                    CheckboxGroup.onChange (List.ofSeq >> setSelected)\r
                    CheckboxGroup.children [\r
                        Spectrum.Checkbox [\r
                            Checkbox.value "soccer"\r
                            Checkbox.content "Soccer"\r
                        ]\r
                        Spectrum.Checkbox [\r
                            Checkbox.value "baseball"\r
                            Checkbox.content "Baseball"\r
                        ]\r
                        Spectrum.Checkbox [\r
                            Checkbox.value "basketball"\r
                            Checkbox.content "Basketball"\r
                        ]\r
                    ]\r
                ]\r
                Html.p $"Selected: {selected |> joinStr}"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(f(["soccer","baseball"])),l=t[0];return E(r.createElement(F,{gap:"size-300",children:r.Children.toArray([r.createElement(He,{label:"Favorite sports (uncontrolled)",defaultValue:["soccer","baseball"],children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),r.createElement(F,{direction:"column",gap:"size-200",children:r.Children.toArray([r.createElement(He,{label:"Favorite sports (controlled)",value:Array.from(l),onChange:i=>{t[1](oe(i))},children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),(e=`Selected: ${vr(", ",l)}`,n.exports.createElement("p",{children:[e]}))])})])}))}))})}function ks(){return n.exports.createElement(m,{title:"Labeling",code:`Spectrum.Flex [\r
Flex.gap (DimValue.Size Size300)\r
Flex.wrap true\r
Flex.children [\r
    Spectrum.CheckboxGroup [\r
        CheckboxGroup.label "Favorite sports"\r
        CheckboxGroup.children [\r
            Spectrum.Checkbox [\r
                Checkbox.value "soccer"\r
                Checkbox.content "Soccer"\r
            ]\r
            Spectrum.Checkbox [\r
                Checkbox.value "baseball"\r
                Checkbox.content "Baseball"\r
            ]\r
            Spectrum.Checkbox [\r
                Checkbox.value "basketball"\r
                Checkbox.content "Basketball"\r
            ]\r
        ]\r
    ]\r
    Spectrum.CheckboxGroup [\r
        CheckboxGroup.label "Favorite sports"\r
        CheckboxGroup.isRequired true\r
        CheckboxGroup.necessityIndicator NecessityIndicator.Icon\r
        CheckboxGroup.children [\r
            Spectrum.Checkbox [\r
                Checkbox.value "soccer"\r
                Checkbox.content "Soccer"\r
            ]\r
            Spectrum.Checkbox [\r
                Checkbox.value "baseball"\r
                Checkbox.content "Baseball"\r
            ]\r
            Spectrum.Checkbox [\r
                Checkbox.value "basketball"\r
                Checkbox.content "Basketball"\r
            ]\r
        ]\r
    ]\r
    Spectrum.CheckboxGroup [\r
        CheckboxGroup.label "Favorite sports"\r
        CheckboxGroup.isRequired true\r
        CheckboxGroup.necessityIndicator NecessityIndicator.Label\r
        CheckboxGroup.children [\r
            Spectrum.Checkbox [\r
                Checkbox.value "soccer"\r
                Checkbox.content "Soccer"\r
            ]\r
            Spectrum.Checkbox [\r
                Checkbox.value "baseball"\r
                Checkbox.content "Baseball"\r
            ]\r
            Spectrum.Checkbox [\r
                Checkbox.value "basketball"\r
                Checkbox.content "Basketball"\r
            ]\r
        ]\r
    ]\r
    Spectrum.CheckboxGroup [\r
        CheckboxGroup.label "Favorite sports"\r
        CheckboxGroup.necessityIndicator NecessityIndicator.Label\r
        CheckboxGroup.children [\r
            Spectrum.Checkbox [\r
                Checkbox.value "soccer"\r
                Checkbox.content "Soccer"\r
            ]\r
            Spectrum.Checkbox [\r
                Checkbox.value "baseball"\r
                Checkbox.content "Baseball"\r
            ]\r
            Spectrum.Checkbox [\r
                Checkbox.value "basketball"\r
                Checkbox.content "Basketball"\r
            ]\r
        ]\r
    ]\r
]\r
]`,description:o(),elements:u(r.createElement(F,{gap:"size-300",wrap:!0,children:r.Children.toArray([r.createElement(He,{label:"Favorite sports",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),r.createElement(He,{label:"Favorite sports",isRequired:!0,necessityIndicator:"icon",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),r.createElement(He,{label:"Favorite sports",isRequired:!0,necessityIndicator:"label",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),r.createElement(He,{label:"Favorite sports",necessityIndicator:"label",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])})])}))})}function Ts(){return n.exports.createElement(m,{title:"Validation",code:`let selected, setSelected = React.useState([])\r
Spectrum.CheckboxGroup [\r
    CheckboxGroup.label "Sandwich condiments"\r
    CheckboxGroup.value selected\r
    CheckboxGroup.onChange (List.ofSeq >> setSelected)\r
    CheckboxGroup.isRequired true\r
    if selected.Length = 0 then\r
        CheckboxGroup.validationState ValidationState.Invalid\r
    CheckboxGroup.children [\r
        Spectrum.Checkbox [\r
            Checkbox.value "lettuce"\r
            Checkbox.content "Lettuce"\r
        ]\r
        Spectrum.Checkbox [\r
            Checkbox.value "tomato"\r
            Checkbox.content "Tomato"\r
        ]\r
        Spectrum.Checkbox [\r
            Checkbox.value "onion"\r
            Checkbox.content "Onion"\r
        ]\r
        Spectrum.Checkbox [\r
            Checkbox.value "sprouts"\r
            Checkbox.content "Sprouts"\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B(o()),t=e[0];return E(r.createElement(He,fe(C(x(()=>P(E(["label","Sandwich condiments"]),x(()=>P(E(["value",Array.from(t)]),x(()=>P(E(["onChange",l=>{e[1](oe(l))}]),x(()=>P(E(["isRequired",!0]),x(()=>P(nl(t)===0?E(["validationState","invalid"]):Qr(),x(()=>E(["children",r.Children.toArray([r.createElement(z,{value:"lettuce",children:r.Children.toArray(["Lettuce"])}),r.createElement(z,{value:"tomato",children:r.Children.toArray(["Tomato"])}),r.createElement(z,{value:"onion",children:r.Children.toArray(["Onion"])}),r.createElement(z,{value:"sprouts",children:r.Children.toArray(["Sprouts"])})])]))))))))))))))))}))})}function Fs(){const e=f(["A CheckboxGroup allows users to select one or more items from a list of choices.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html"})," for more details."]);return n.exports.createElement(V,{title:"CheckboxGroup",description:e,examples:f([n.exports.createElement(vs,null),n.exports.createElement(ws,null),n.exports.createElement(ks,null),n.exports.createElement(Ts,null)])})}function Is(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Form [\r
    Form.maxWidth (DimValue.Size Size3600)\r
    Form.children [\r
        Spectrum.TextField [\r
            TextField.label "Email"\r
            TextField.type' TextFieldType.Email\r
            TextField.placeholder "abc@adobe.com"\r
        ]\r
        Spectrum.TextField [\r
            TextField.label "Password"\r
            TextField.type' TextFieldType.Password\r
            TextField.placeholder "1234"\r
        ]\r
        Spectrum.Checkbox [\r
            Checkbox.content "Remember me"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(et,{maxWidth:"size-3600",children:r.Children.toArray([r.createElement(_,{label:"Email",type:"email",placeholder:"abc@adobe.com"}),r.createElement(_,{label:"Password",type:"password",placeholder:"1234"}),r.createElement(z,{children:r.Children.toArray(["Remember me"])})])}))})}function Bs(){return n.exports.createElement(m,{title:"Content",code:`Spectrum.Form [\r
    Form.maxWidth (DimValue.Size Size3600)\r
    Form.isRequired true\r
    Form.necessityIndicator NecessityIndicator.Label\r
    Form.children [\r
        Spectrum.TextField [\r
            TextField.label "Name"\r
            TextField.placeholder "Jane Smith"\r
        ]\r
        Spectrum.TextField [\r
            TextField.label "Email"\r
            TextField.placeholder "abc@adobe.com"\r
        ]\r
        Spectrum.TextField [\r
            TextField.label "Address"\r
            TextField.placeholder "123 Any Street"\r
            TextField.isRequired false\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(et,{maxWidth:"size-3600",isRequired:!0,necessityIndicator:"label",children:r.Children.toArray([r.createElement(_,{label:"Name",placeholder:"Jane Smith"}),r.createElement(_,{label:"Email",placeholder:"abc@adobe.com"}),r.createElement(_,{label:"Address",placeholder:"123 Any Street",isRequired:!1})])}))})}function Ds(){return n.exports.createElement(m,{title:"Labeling",code:`React.fragment [\r
    Html.h3 [\r
        prop.id "label-3"\r
        prop.children [ Html.text "Personal Information" ]\r
    ]\r
    Spectrum.Form [\r
        Form.maxWidth (DimValue.Size Size3600)\r
        Form.ariaLabeledBy "label-3"\r
        Form.children [\r
            Spectrum.TextField [\r
                TextField.label "First Name"\r
                TextField.placeholder "John"\r
            ]\r
            Spectrum.TextField [\r
                TextField.label "Last Name"\r
                TextField.placeholder "Smith"\r
            ]\r
            Spectrum.RadioGroup [\r
                RadioGroup.label "Favorite pet"\r
                RadioGroup.children [\r
                    Spectrum.Radio [\r
                        Radio.value "dogs"\r
                        Radio.content "Dogs"\r
                    ]\r
                    Spectrum.Radio [\r
                        Radio.value "cats"\r
                        Radio.content "Cats"\r
                    ]\r
                    Spectrum.Radio [\r
                        Radio.value "dragons"\r
                        Radio.content "Dragons"\r
                    ]\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(n.exports.createElement(n.exports.Fragment,{},n.exports.createElement("h3",{id:"label-3",children:r.Children.toArray(["Personal Information"])}),r.createElement(et,{maxWidth:"size-3600",["aria-labelledby"]:"label-3",children:r.Children.toArray([r.createElement(_,{label:"First Name",placeholder:"John"}),r.createElement(_,{label:"Last Name",placeholder:"Smith"}),r.createElement(Qe,{label:"Favorite pet",children:r.Children.toArray([r.createElement(Z,{value:"dogs",children:"Dogs"}),r.createElement(Z,{value:"cats",children:"Cats"}),r.createElement(Z,{value:"dragons",children:"Dragons"})])})])})))})}function Vs(){return n.exports.createElement(m,{title:"Quiet",code:`Spectrum.Form [\r
    Form.isQuiet true\r
    Form.ariaLabel "Quiet example"\r
    Form.maxWidth (DimValue.Size Size3600)\r
    Form.children [\r
        Spectrum.TextField [\r
            TextField.label "Name"\r
            TextField.placeholder "John Smith"\r
        ]\r
        Spectrum.TextField [\r
            TextField.label "Address"\r
            TextField.placeholder "123 Any Street"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(et,{isQuiet:!0,["aria-label"]:"Quiet example",maxWidth:"size-3600",children:r.Children.toArray([r.createElement(_,{label:"Name",placeholder:"John Smith"}),r.createElement(_,{label:"Address",placeholder:"123 Any Street"})])}))})}function Ns(){const e=f(["Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Form.html"})," for more details."]);return n.exports.createElement(V,{title:"Form",description:e,examples:f([n.exports.createElement(Is,null),n.exports.createElement(Bs,null),n.exports.createElement(Ds,null),n.exports.createElement(Vs,null)])})}function Ms(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.NumberField [\r
    NumberField.label "Width"\r
    NumberField.defaultValue 1024\r
    NumberField.minValue 0\r
]`,description:o(),elements:u(r.createElement(se,{label:"Width",defaultValue:1024,minValue:0}))})}function Rs(){return n.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState(15)\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.wrap true\r
    Flex.children [\r
        Spectrum.NumberField [\r
            NumberField.width "200px"\r
            NumberField.label "Cookies (uncontrolled)"\r
            NumberField.defaultValue 15\r
            NumberField.minValue 0\r
        ]\r
        Spectrum.NumberField [\r
            NumberField.width "200px"\r
            NumberField.label "Cookies (controlled)"\r
            NumberField.value value\r
            NumberField.onChange setValue\r
            NumberField.minValue 0\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B(15);return E(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(se,{width:"200px",label:"Cookies (uncontrolled)",defaultValue:15,minValue:0}),r.createElement(se,{width:"200px",label:"Cookies (controlled)",value:e[0],onChange:t=>{setTimeout(()=>{e[1](t)},0)},minValue:0})])}))}))})}function zs(){return n.exports.createElement(m,{title:"Number formatting",code:`Spectrum.NumberField [\r
    NumberField.label "Adjust exposure"\r
    NumberField.defaultValue 0\r
    NumberField.formatOptions <| NumberFormat.make(\r
        signDisplay = NumberFormatSignDisplay.ExceptZero,\r
        minimumFractionDigits = 1,\r
        maximumFractionDigits = 2)\r
]`,description:o(),elements:u(r.createElement(se,{label:"Adjust exposure",defaultValue:0,formatOptions:{localeMatcher:void 0,style:void 0,currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:"exceptZero",notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:1,maximumFractionDigits:2,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Ps(){return n.exports.createElement(m,{title:"Percentage",code:`Spectrum.NumberField [\r
    NumberField.label "Sales tax"\r
    NumberField.defaultValue 0.05\r
    NumberField.minValue 0\r
    NumberField.formatOptions <| NumberFormat.make(\r
        style = NumberFormatStyle.Percent)\r
]`,description:o(),elements:u(r.createElement(se,{label:"Sales tax",defaultValue:.05,minValue:0,formatOptions:{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Ls(){return n.exports.createElement(m,{title:"Currency values",code:`Spectrum.NumberField [\r
    NumberField.label "Transaction amount"\r
    NumberField.defaultValue 45\r
    NumberField.formatOptions <| NumberFormat.make(\r
        style = NumberFormatStyle.Currency,\r
        currency = "EUR",\r
        currencyDisplay = NumberFormatCurrencyDisplay.Symbol,\r
        currencySign = NumberFormatCurrencySign.Accounting)\r
]`,description:o(),elements:u(r.createElement(se,{label:"Transaction amount",defaultValue:45,formatOptions:{localeMatcher:void 0,style:"currency",currency:"EUR",currencyDisplay:"symbol",currencySign:"accounting",useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function _s(){return n.exports.createElement(m,{title:"Units",code:`Spectrum.NumberField [\r
    NumberField.label "Package width"\r
    NumberField.defaultValue 4\r
    NumberField.minValue 0\r
    NumberField.formatOptions <| NumberFormat.make(\r
        style = NumberFormatStyle.Unit,\r
        unit = "inch",\r
        unitDisplay = NumberFormatUnitDisplay.Long)\r
]`,description:o(),elements:u(r.createElement(se,{label:"Package width",defaultValue:4,minValue:0,formatOptions:{localeMatcher:void 0,style:"unit",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:"inch",unitDisplay:"long",minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Gs(){return n.exports.createElement(m,{title:"Step values",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.children [\r
        Spectrum.NumberField [\r
            NumberField.label "Step"\r
            NumberField.step 10\r
        ]\r
        Spectrum.NumberField [\r
            NumberField.label "Step + minValue"\r
            NumberField.step 3\r
            NumberField.minValue 2\r
        ]\r
        Spectrum.NumberField [\r
            NumberField.label "Step + minValue + maxValue"\r
            NumberField.step 3\r
            NumberField.minValue 2\r
            NumberField.maxValue 21\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"column",gap:"size-150",children:r.Children.toArray([r.createElement(se,{label:"Step",step:10}),r.createElement(se,{label:"Step + minValue",step:3,minValue:2}),r.createElement(se,{label:"Step + minValue + maxValue",step:3,minValue:2,maxValue:21})])}))})}function Hs(){return n.exports.createElement(m,{title:"Events",code:`let value, setValue = React.useState(0)\r
Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.children [\r
        Spectrum.NumberField [\r
            NumberField.onChange setValue\r
            NumberField.label "Number of cookies to buy"\r
            NumberField.minValue 0\r
        ]\r
        Html.pre $"How many cookies you are ordering: {value}"\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(0);return E(r.createElement(F,{direction:"column",gap:"size-150",children:r.Children.toArray([r.createElement(se,{onChange:l=>{setTimeout(()=>{t[1](l)},0)},label:"Number of cookies to buy",minValue:0}),(e=`How many cookies you are ordering: ${t[0]}`,n.exports.createElement("pre",{children:[e]}))])}))}))})}function Os(){return n.exports.createElement(m,{title:"Validation",code:`let value, setValue = React.useState(15)\r
let isValid = React.useMemo ((fun () -> value % 3 = 0 && value % 5 = 0), [| value |])\r
Spectrum.NumberField [\r
    NumberField.value value\r
    NumberField.onChange setValue\r
    NumberField.label "FizzBuzz values only"\r
    NumberField.validationState isValid\r
]`,description:o(),elements:C(x(()=>{const e=B(15),t=e[0]|0,l=ie(()=>t%3==0?t%5==0:!1,[t]);return E(r.createElement(se,fe(f([["value",t],["onChange",i=>{setTimeout(()=>{e[1](i)},0)}],["label","FizzBuzz values only"],l?["validationState","valid"]:["validationState","invalid"]]))))}))})}function Ws(){return n.exports.createElement(m,{title:"Help text",code:`let value, setValue = React.useState(1)\r
let checkIfValid () = value > 0 || JS.isNaN(float(value))\r
let isValid = React.useMemo(checkIfValid, [| value |])\r
Spectrum.NumberField [\r
    NumberField.validationState isValid\r
    NumberField.value value\r
    NumberField.onChange setValue\r
    NumberField.label "Positive numbers only"\r
    NumberField.description "Enter a positive number."\r
    if value = 0 then NumberField.errorMessage "Is zero positive?"\r
    else NumberField.errorMessage "Positive numbers are bigger than 0."\r
]`,description:o(),elements:C(x(()=>{const e=B(1),t=e[0]|0,l=ie(()=>t>0?!0:isNaN(t),[t]);return E(r.createElement(se,fe(C(x(()=>P(E(l?["validationState","valid"]:["validationState","invalid"]),x(()=>P(E(["value",t]),x(()=>P(E(["onChange",i=>{setTimeout(()=>{e[1](i)},0)}]),x(()=>P(E(["label","Positive numbers only"]),x(()=>P(E(["description","Enter a positive number."]),x(()=>E(t===0?["errorMessage","Is zero positive?"]:["errorMessage","Positive numbers are bigger than 0."]))))))))))))))))}))})}function js(){const e=f(["NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/NumberField.html"})," for more details."]);return n.exports.createElement(V,{title:"NumberField",description:e,examples:f([n.exports.createElement(Ms,null),n.exports.createElement(Rs,null),n.exports.createElement(zs,null),n.exports.createElement(Ps,null),n.exports.createElement(Ls,null),n.exports.createElement(_s,null),n.exports.createElement(Gs,null),n.exports.createElement(Hs,null),n.exports.createElement(Os,null),n.exports.createElement(Ws,null)])})}function qs(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.RadioGroup [\r
    RadioGroup.label "Favorite pet"\r
    RadioGroup.children [\r
        Spectrum.Radio [\r
            Radio.value "dogs"\r
            Radio.content "Dogs"\r
        ]\r
        Spectrum.Radio [\r
            Radio.value "cats"\r
            Radio.content "Cats"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Qe,{label:"Favorite pet",children:r.Children.toArray([r.createElement(Z,{value:"dogs",children:"Dogs"}),r.createElement(Z,{value:"cats",children:"Cats"})])}))})}function Us(){return n.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState("yes")\r
\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size300)\r
    Flex.children [\r
        Spectrum.RadioGroup [\r
            RadioGroup.label "Are you a wizard? (uncontrolled)"\r
            RadioGroup.defaultValue "yes"\r
            RadioGroup.children [\r
                Spectrum.Radio [\r
                    Radio.value "yes"\r
                    Radio.content "Yes"\r
                ]\r
                Spectrum.Radio [\r
                    Radio.value "no"\r
                    Radio.content "No"\r
                ]\r
            ]\r
        ]\r
        Spectrum.RadioGroup [\r
            RadioGroup.label "Are you a wizard? (controlled)"\r
            RadioGroup.value selected\r
            RadioGroup.onChange setSelected\r
            RadioGroup.children [\r
                Spectrum.Radio [\r
                    Radio.value "yes"\r
                    Radio.content "Yes"\r
                ]\r
                Spectrum.Radio [\r
                    Radio.value "no"\r
                    Radio.content "No"\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B("yes");return E(r.createElement(F,{gap:"size-300",children:r.Children.toArray([r.createElement(Qe,{label:"Are you a wizard? (uncontrolled)",defaultValue:"yes",children:r.Children.toArray([r.createElement(Z,{value:"yes",children:"Yes"}),r.createElement(Z,{value:"no",children:"No"})])}),r.createElement(Qe,{label:"Are you a wizard? (controlled)",value:e[0],onChange:e[1],children:r.Children.toArray([r.createElement(Z,{value:"yes",children:"Yes"}),r.createElement(Z,{value:"no",children:"No"})])})])}))}))})}function Ks(){return n.exports.createElement(m,{title:"Events",code:`let selected, setSelected = React.useState("")\r
\r
React.fragment [\r
    Spectrum.RadioGroup [\r
        RadioGroup.label "Favorite avatar"\r
        RadioGroup.value selected\r
        RadioGroup.onChange setSelected\r
        RadioGroup.children [\r
            Spectrum.Radio [\r
                Radio.value "wizard"\r
                Radio.content "Wizard"\r
            ]\r
            Spectrum.Radio [\r
                Radio.value "dragon"\r
                Radio.content "Dragon"\r
            ]\r
        ]\r
    ]\r
    Html.div $"You have selected: {selected}"\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(""),l=t[0];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(Qe,{label:"Favorite avatar",value:l,onChange:t[1],children:r.Children.toArray([r.createElement(Z,{value:"wizard",children:"Wizard"}),r.createElement(Z,{value:"dragon",children:"Dragon"})])}),(e=`You have selected: ${l}`,n.exports.createElement("div",{children:[e]}))))}))})}function Js(){return n.exports.createElement(m,{title:"Orientation",code:`Spectrum.RadioGroup [\r
    RadioGroup.label "Favorite avatar"\r
    RadioGroup.orientation Orientation.Horizontal\r
    RadioGroup.children [\r
        Spectrum.Radio [\r
            Radio.value "wizard"\r
            Radio.content "Wizard"\r
        ]\r
        Spectrum.Radio [\r
            Radio.value "dragon"\r
            Radio.content "Dragon"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Qe,{label:"Favorite avatar",orientation:"horizontal",children:r.Children.toArray([r.createElement(Z,{value:"wizard",children:"Wizard"}),r.createElement(Z,{value:"dragon",children:"Dragon"})])}))})}function $s(){const e=f(["Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RadioGroup.html"})," for more details."]);return n.exports.createElement(V,{title:"RadioGroup",description:e,examples:f([n.exports.createElement(qs,null),n.exports.createElement(Us,null),n.exports.createElement(Ks,null),n.exports.createElement(Js,null)])})}function Ys(){return n.exports.createElement(m,{title:"Default example",code:`let submittedText, setSubmittedText = React.useState("")\r
React.fragment [\r
    Spectrum.SearchField [\r
        SearchField.label "Search"\r
        SearchField.placeholder "Enter text"\r
        SearchField.onSubmit setSubmittedText\r
    ]\r
    Html.p $"Submitted text: {submittedText}"\r
]`,description:o(),elements:C(x(()=>{let e;const t=B("");return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(hr,{label:"Search",placeholder:"Enter text",onSubmit:t[1]}),(e=`Submitted text: ${t[0]}`,n.exports.createElement("p",{children:[e]}))))}))})}function Xs(){return n.exports.createElement(m,{title:"Value",code:`let searchValue, setSearchValue = React.useState("puppies")\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size300)\r
    Flex.children [\r
        Spectrum.SearchField [\r
            SearchField.defaultValue "puppies"\r
            SearchField.label "Search (uncontrolled)"\r
        ]\r
        Spectrum.SearchField [\r
            SearchField.value searchValue\r
            SearchField.onChange setSearchValue\r
            SearchField.label "Search (controlled)"\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B("puppies");return E(r.createElement(F,{gap:"size-300",children:r.Children.toArray([r.createElement(hr,{defaultValue:"puppies",label:"Search (uncontrolled)"}),r.createElement(hr,{value:e[0],onChange:e[1],label:"Search (controlled)"})])}))}))})}function Zs(){return n.exports.createElement(m,{title:"Properties",code:`let currentText, setCurrentText = React.useState("")\r
let submittedText, setSubmittedText = React.useState("")\r
Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.children [\r
        Spectrum.SearchField [\r
            SearchField.value currentText\r
            SearchField.onChange setCurrentText\r
            SearchField.label "Your text"\r
            SearchField.placeholder "Enter some text"\r
            SearchField.onClear (fun () -> setCurrentText "")\r
            SearchField.onSubmit setSubmittedText\r
        ]\r
        Html.pre $"Mirrored text: {currentText}"\r
        Html.pre $"Submitted text: {submittedText}"\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e,t;const l=B(""),i=l[1],a=l[0],c=B("");return E(r.createElement(F,{direction:"column",children:r.Children.toArray([r.createElement(hr,{value:a,onChange:i,label:"Your text",placeholder:"Enter some text",onClear:()=>{i("")},onSubmit:c[1]}),(e=`Mirrored text: ${a}`,n.exports.createElement("pre",{children:[e]})),(t=`Submitted text: ${c[0]}`,n.exports.createElement("pre",{children:[t]}))])}))}))})}function Qs(){const e=f(["A SearchField is a text field designed for searches.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/SearchField.html"})," for more details."]);return n.exports.createElement(V,{title:"SearchField",description:e,examples:f([n.exports.createElement(Ys,null),n.exports.createElement(Xs,null),n.exports.createElement(Zs,null)])})}function eu(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Switch [\r
    Switch.content "Low power mode"\r
]`,description:o(),elements:u(r.createElement(gt,{children:"Low power mode"}))})}function tu(){return n.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState(false)\r
React.fragment [\r
    Spectrum.Switch [\r
        Switch.defaultSelected true\r
        Switch.content "Low power mode (uncontrolled)"\r
    ]\r
    Spectrum.Flex [\r
        Flex.direction FlexDirection.Column\r
        Flex.gap (DimValue.Size Size100)\r
        Flex.children [\r
            Spectrum.Switch [\r
                Switch.isSelected selected\r
                Switch.onChange setSelected\r
                Switch.content "Low power mode (controlled)"\r
            ]\r
            Html.div $"The switch is on: {selected}"\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(!1),l=t[0];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(gt,{defaultSelected:!0,children:"Low power mode (uncontrolled)"}),r.createElement(F,{direction:"column",gap:"size-100",children:r.Children.toArray([r.createElement(gt,{isSelected:l,onChange:t[1],children:"Low power mode (controlled)"}),(e=`The switch is on: ${l}`,n.exports.createElement("div",{children:[e]}))])})))}))})}function ru(){return n.exports.createElement(m,{title:"Disabled",code:`Spectrum.Switch [\r
    Switch.isDisabled true\r
    Switch.content "Switch label"\r
]`,description:o(),elements:u(r.createElement(gt,{isDisabled:!0,children:"Switch label"}))})}function nu(){return n.exports.createElement(m,{title:"Emphasized",code:`Spectrum.Switch [\r
    Switch.isEmphasized true\r
    Switch.defaultSelected true\r
    Switch.content "Switch label"\r
]`,description:o(),elements:u(r.createElement(gt,{isEmphasized:!0,defaultSelected:!0,children:"Switch label"}))})}function lu(){return n.exports.createElement(m,{title:"Read-only",code:`Spectrum.Switch [\r
    Switch.isReadOnly true\r
    Switch.defaultSelected true\r
    Switch.content "Switch label"\r
]`,description:o(),elements:u(r.createElement(gt,{isReadOnly:!0,defaultSelected:!0,children:"Switch label"}))})}function iu(){const e=f(["Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Switch.html"})," for more details."]);return n.exports.createElement(V,{title:"Switch",description:e,examples:f([n.exports.createElement(eu,null),n.exports.createElement(tu,null),n.exports.createElement(ru,null),n.exports.createElement(nu,null),n.exports.createElement(lu,null)])})}function au(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.TextArea [\r
    TextArea.label "Name"\r
]`,description:o(),elements:u(r.createElement(ne,{label:"Name"}))})}function ou(){return n.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState("This is on a wait list")\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.wrap true\r
    Flex.children [\r
        Spectrum.TextArea [\r
            TextArea.label "Notes (uncontrolled)"\r
            TextArea.defaultValue "This is on a wait list"\r
        ]\r
        Spectrum.TextArea [\r
            TextArea.label "Notes (controlled)"\r
            TextArea.value value\r
            TextArea.onChange setValue\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B("This is on a wait list");return E(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(ne,{label:"Notes (uncontrolled)",defaultValue:"This is on a wait list"}),r.createElement(ne,{label:"Notes (controlled)",value:e[0],onChange:e[1]})])}))}))})}function cu(){return n.exports.createElement(m,{title:"todo",code:`Spectrum.TextArea [\r
    TextArea.label "Email"\r
    TextArea.placeholder "abc@gmail.com"\r
]`,description:o(),elements:u(r.createElement(ne,{label:"Email",placeholder:"abc@gmail.com"}))})}function su(){return n.exports.createElement(m,{title:"todo",code:`Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.wrap true\r
    Flex.children [\r
        Spectrum.TextArea [\r
            TextArea.label "Street address"\r
        ]\r
        Spectrum.TextArea [\r
            TextArea.label "Street address"\r
            TextArea.isRequired true\r
            TextArea.necessityIndicator NecessityIndicator.Icon\r
        ]\r
        Spectrum.TextArea [\r
            TextArea.label "Street address"\r
            TextArea.isRequired true\r
            TextArea.necessityIndicator NecessityIndicator.Label\r
        ]\r
        Spectrum.TextArea [\r
            TextArea.label "Street address"\r
            TextArea.necessityIndicator NecessityIndicator.Label\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(ne,{label:"Street address"}),r.createElement(ne,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),r.createElement(ne,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),r.createElement(ne,{label:"Street address",necessityIndicator:"label"})])}))})}function uu(){return n.exports.createElement(m,{title:"Events",code:`let text, setText = React.useState("")\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.direction FlexDirection.Column\r
    Flex.children [\r
        Spectrum.TextArea [\r
            TextArea.label "Your text"\r
            TextArea.placeholder "Enter some text..."\r
            TextArea.onChange setText\r
        ]\r
        Html.pre $"Mirrored text: {text}"\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=B("");return E(r.createElement(F,{gap:"size-150",direction:"column",children:r.Children.toArray([r.createElement(ne,{label:"Your text",placeholder:"Enter some text...",onChange:t[1]}),(e=`Mirrored text: ${t[0]}`,n.exports.createElement("pre",{children:[e]}))])}))}))})}function mu(){return n.exports.createElement(m,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")\r
let regex = System.Text.RegularExpressions.Regex("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")\r
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])\r
\r
Spectrum.TextArea [\r
    TextArea.validationState isValid\r
    TextArea.placeholder "Enter your email"\r
    TextArea.value value\r
    TextArea.onChange setValue\r
    TextArea.label "Email"\r
    TextArea.errorMessage "Invalid email"\r
]`,description:o(),elements:C(x(()=>{const e=B("me@email.com"),t=e[0],l=ie(()=>Ar(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,t),[t]);return E(r.createElement(ne,fe(f([l?["validationState","valid"]:["validationState","invalid"],["placeholder","Enter your email"],["value",t],["onChange",e[1]],["label","Email"],["errorMessage","Invalid email"]]))))}))})}function du(){return n.exports.createElement(m,{title:"Quiet",code:`Spectrum.TextArea [\r
    TextArea.label "Email"\r
    TextArea.placeholder "Email Address"\r
    TextArea.isQuiet true\r
]`,description:o(),elements:u(r.createElement(ne,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function pu(){return n.exports.createElement(m,{title:"Disabled",code:`Spectrum.TextArea [\r
    TextArea.label "Email"\r
    TextArea.placeholder "Email Address"\r
    TextArea.isDisabled true\r
]`,description:o(),elements:u(r.createElement(ne,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function hu(){return n.exports.createElement(m,{title:"Read-only",code:`Spectrum.TextArea [\r
    TextArea.label "Email"\r
    TextArea.placeholder "Email Address"\r
    TextArea.isReadOnly true\r
]`,description:o(),elements:u(r.createElement(ne,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function fu(){return n.exports.createElement(m,{title:"Label asignment and position",code:`Spectrum.TextArea [\r
    TextArea.label "Search"\r
    TextArea.labelPosition LabelPosition.Side\r
    TextArea.labelAlign Alignment.End\r
]`,description:o(),elements:u(r.createElement(ne,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function gu(){return n.exports.createElement(m,{title:"Help text",code:`let value, setValue = React.useState("0")\r
let regex = System.Text.RegularExpressions.Regex("^\\d$")\r
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])\r
Spectrum.TextArea [\r
    TextArea.validationState isValid\r
    TextArea.value value\r
    TextArea.onChange setValue\r
    TextArea.label "Favorite number"\r
    TextArea.maxLength 1\r
    TextArea.description "Enter a single digit number"\r
    match value with\r
    | "" -> TextArea.errorMessage "Empty input not allowed"\r
    | _ -> TextArea.errorMessage "Single digit numbers are 0-9"\r
]`,description:o(),elements:C(x(()=>{const e=B("0"),t=e[0],l=ie(()=>Ar(/^\d$/g,t),[t]);return E(r.createElement(ne,fe(C(x(()=>P(E(l?["validationState","valid"]:["validationState","invalid"]),x(()=>P(E(["value",t]),x(()=>P(E(["onChange",e[1]]),x(()=>P(E(["label","Favorite number"]),x(()=>P(E(["maxLength",1]),x(()=>P(E(["description","Enter a single digit number"]),x(()=>E(t===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))))))}))})}function xu(){const e=f(["TextAreas are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextArea.html"})," for more details."]);return n.exports.createElement(V,{title:"TextArea",description:e,examples:f([n.exports.createElement(au,null),n.exports.createElement(ou,null),n.exports.createElement(cu,null),n.exports.createElement(su,null),n.exports.createElement(uu,null),n.exports.createElement(mu,null),n.exports.createElement(du,null),n.exports.createElement(pu,null),n.exports.createElement(hu,null),n.exports.createElement(fu,null),n.exports.createElement(gu,null)])})}function Eu(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.TextField [\r
    TextField.label "Name"\r
]`,description:o(),elements:u(r.createElement(_,{label:"Name"}))})}function Su(){return n.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState("me@email.com")\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.wrap true\r
    Flex.children [\r
        Spectrum.TextField [\r
            TextField.label "Email (uncontrolled)"\r
            TextField.defaultValue "me@email.com"\r
        ]\r
        Spectrum.TextField [\r
            TextField.label "Email (controlled)"\r
            TextField.defaultValue value\r
            TextField.onChange setValue\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B("me@email.com");return E(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(_,{label:"Email (uncontrolled)",defaultValue:"me@email.com"}),r.createElement(_,{label:"Email (controlled)",defaultValue:e[0],onChange:e[1]})])}))}))})}function bu(){return n.exports.createElement(m,{title:"Placeholder",code:`Spectrum.TextField [\r
    TextField.label "Email"\r
    TextField.placeholder "abc@gmail.com"\r
]`,description:o(),elements:u(r.createElement(_,{label:"Email",placeholder:"abc@gmail.com"}))})}function yu(){return n.exports.createElement(m,{title:"Labeling",code:`Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.wrap true\r
    Flex.children [\r
        Spectrum.TextField [\r
            TextField.label "Street address"\r
        ]\r
        Spectrum.TextField [\r
            TextField.label "Street address"\r
            TextField.isRequired true\r
            TextField.necessityIndicator NecessityIndicator.Icon\r
        ]\r
        Spectrum.TextField [\r
            TextField.label "Street address"\r
            TextField.isRequired true\r
            TextField.necessityIndicator NecessityIndicator.Label\r
        ]\r
        Spectrum.TextField [\r
            TextField.label "Street address"\r
            TextField.necessityIndicator NecessityIndicator.Label\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(_,{label:"Street address"}),r.createElement(_,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),r.createElement(_,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),r.createElement(_,{label:"Street address",necessityIndicator:"label"})])}))})}function Cu(){return n.exports.createElement(m,{title:"Events",code:`let text, setText = React.useState("")\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.direction FlexDirection.Column\r
    Flex.children [\r
        Spectrum.TextField [\r
            TextField.label "Your text"\r
            TextField.placeholder "Enter some text..."\r
            TextField.onChange setText\r
        ]\r
        Html.pre $"Mirrored text: {text}"\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=B("");return E(r.createElement(F,{gap:"size-150",direction:"column",children:r.Children.toArray([r.createElement(_,{label:"Your text",placeholder:"Enter some text...",onChange:t[1]}),(e=`Mirrored text: ${t[0]}`,n.exports.createElement("pre",{children:[e]}))])}))}))})}function Au(){return n.exports.createElement(m,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")\r
let regex = System.Text.RegularExpressions.Regex("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")\r
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])\r
\r
Spectrum.TextField [\r
    TextField.validationState (if isValid then ValidationState.Valid else ValidationState.Invalid)\r
    TextField.placeholder "Enter your email"\r
    TextField.value value\r
    TextField.onChange setValue\r
    TextField.label "Email"\r
    TextField.errorMessage "Invalid email"\r
]`,description:o(),elements:C(x(()=>{const e=B("me@email.com"),t=e[0],l=ie(()=>Ar(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,t),[t]);return E(r.createElement(_,{validationState:l?"valid":"invalid",placeholder:"Enter your email",value:t,onChange:e[1],label:"Email",errorMessage:"Invalid email"}))}))})}function vu(){return n.exports.createElement(m,{title:"Quiet",code:`Spectrum.TextField [\r
    TextField.label "Email"\r
    TextField.placeholder "Email Address"\r
    TextField.isQuiet true\r
]`,description:o(),elements:u(r.createElement(_,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function wu(){return n.exports.createElement(m,{title:"Disabled",code:`Spectrum.TextField [\r
    TextField.label "Email"\r
    TextField.placeholder "Email Address"\r
    TextField.isDisabled true\r
]`,description:o(),elements:u(r.createElement(_,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function ku(){return n.exports.createElement(m,{title:"Read-only",code:`Spectrum.TextField [\r
    TextField.label "Email"\r
    TextField.placeholder "Email Address"\r
    TextField.isReadOnly true\r
]`,description:o(),elements:u(r.createElement(_,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function Tu(){return n.exports.createElement(m,{title:"Label alignment and position",code:`Spectrum.TextField [\r
    TextField.label "Search"\r
    TextField.labelPosition LabelPosition.Side\r
    TextField.labelAlign Alignment.End\r
]`,description:o(),elements:u(r.createElement(_,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function Fu(){return n.exports.createElement(m,{title:"Help text",code:`let value, setValue = React.useState("0")\r
let regex = System.Text.RegularExpressions.Regex("^\\d$")\r
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])\r
Spectrum.TextField [\r
    TextField.validationState isValid\r
    TextField.value value\r
    TextField.onChange setValue\r
    TextField.label "Favorite number"\r
    TextField.maxLength 1\r
    TextField.description "Enter a single digit number"\r
    match value with\r
    | "" -> TextField.errorMessage "Empty input not allowed"\r
    | _ -> TextField.errorMessage "Single digit numbers are 0-9"\r
]`,description:o(),elements:C(x(()=>{const e=B("0"),t=e[0],l=ie(()=>Ar(/^\d$/g,t),[t]);return E(r.createElement(_,fe(C(x(()=>P(E(l?["validationState","valid"]:["validationState","invalid"]),x(()=>P(E(["value",t]),x(()=>P(E(["onChange",e[1]]),x(()=>P(E(["label","Favorite number"]),x(()=>P(E(["maxLength",1]),x(()=>P(E(["description","Enter a single digit number"]),x(()=>E(t===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))))))}))})}function Iu(){const e=f(["TextFields are text inputs that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextField.html"})," for more details."]);return n.exports.createElement(V,{title:"TextField",description:e,examples:f([n.exports.createElement(Eu,null),n.exports.createElement(Su,null),n.exports.createElement(bu,null),n.exports.createElement(yu,null),n.exports.createElement(Cu,null),n.exports.createElement(Au,null),n.exports.createElement(vu,null),n.exports.createElement(wu,null),n.exports.createElement(ku,null),n.exports.createElement(Tu,null),n.exports.createElement(Fu,null)])})}function Bu(){let e,t,l,i,a,c,s;return n.exports.createElement(m,{title:"Icon size",code:`Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.children [\r
        Spectrum.Icon.Beaker [\r
            prop.ariaLabel "XXS Beaker"\r
            Icon.size IconSize.XXS\r
        ]\r
        Spectrum.Icon.Beaker [\r
            prop.ariaLabel "XS Beaker"\r
            Icon.size IconSize.XS\r
        ]\r
        Spectrum.Icon.Beaker [\r
            prop.ariaLabel "S Beaker"\r
            Icon.size IconSize.S\r
        ]\r
        Spectrum.Icon.Beaker [\r
            prop.ariaLabel "M Beaker"\r
            Icon.size IconSize.M\r
        ]\r
        Spectrum.Icon.Beaker [\r
            prop.ariaLabel "L Beaker"\r
            Icon.size IconSize.L\r
        ]\r
        Spectrum.Icon.Beaker [\r
            prop.ariaLabel "XL Beaker"\r
            Icon.size IconSize.XL\r
        ]\r
        Spectrum.Icon.Beaker [\r
            prop.ariaLabel "XXL Beaker"\r
            Icon.size IconSize.XXL\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{gap:"size-100",children:r.Children.toArray([(e=tt,r.createElement(e,{["aria-label"]:"XXS Beaker",size:"XXS"})),(t=tt,r.createElement(t,{["aria-label"]:"XS Beaker",size:"XS"})),(l=tt,r.createElement(l,{["aria-label"]:"S Beaker",size:"S"})),(i=tt,r.createElement(i,{["aria-label"]:"M Beaker",size:"M"})),(a=tt,r.createElement(a,{["aria-label"]:"L Beaker",size:"L"})),(c=tt,r.createElement(c,{["aria-label"]:"XL Beaker",size:"XL"})),(s=tt,r.createElement(s,{["aria-label"]:"XXL Beaker",size:"XXL"}))])}))})}function Du(){let e,t,l,i,a;return n.exports.createElement(m,{title:"Coloring",code:`Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.children [\r
        Spectrum.Icon.Alert [\r
            prop.ariaLabel "Default Alert"\r
        ]\r
        Spectrum.Icon.Alert [\r
            prop.ariaLabel "Negative Alert"\r
            Icon.color SemanticColor.Negative\r
        ]\r
        Spectrum.Icon.Alert [\r
            prop.ariaLabel "Notification Alert"\r
            Icon.color SemanticColor.Notice\r
        ]\r
        Spectrum.Icon.Alert [\r
            prop.ariaLabel "Positive Alert"\r
            Icon.color SemanticColor.Positive\r
        ]\r
        Spectrum.Icon.Alert [\r
            prop.ariaLabel "Informative Alert"\r
            Icon.color SemanticColor.Informative\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{gap:"size-100",children:r.Children.toArray([(e=xt,r.createElement(e,{["aria-label"]:"Default Alert"})),(t=xt,r.createElement(t,{["aria-label"]:"Negative Alert",color:"negative"})),(l=xt,r.createElement(l,{["aria-label"]:"Notification Alert",color:"notice"})),(i=xt,r.createElement(i,{["aria-label"]:"Positive Alert",color:"positive"})),(a=xt,r.createElement(a,{["aria-label"]:"Informative Alert",color:"informative"}))])}))})}function Vu(){const e=f(["Workflow icons are graphical metaphors or symbols that can be used to compliment existing experiences.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"})," for more details."]);return n.exports.createElement(V,{title:"Workflow Icons",description:e,examples:f([n.exports.createElement(Bu,null),n.exports.createElement(Du,null)])})}function Nu(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Breadcrumbs [\r
    makeItem "home" "Home"\r
    makeItem "trendy" "Trendy"\r
    makeItem "march 2020 assets" "March 2020 Assets"\r
]`,description:o(),elements:u(n.exports.createElement(rt,o(),b("home","Home"),b("trendy","Trendy"),b("march 2020 assets","March 2020 Assets")))})}function Mu(){return n.exports.createElement(m,{title:"Events",code:`let folders = [\r
    {| id = 1; label = "Home" |}\r
    {| id = 2; label = "Trendy" |}\r
    {| id = 3; label = "March 2020 Assets" |}\r
]\r
let folderId, setFolderId = React.useState(JS.undefined<int>)\r
Html.div [\r
    Spectrum.Breadcrumbs [\r
        Breadcrumbs.onAction setFolderId\r
        Breadcrumbs.children [\r
            for folder in folders do\r
                Spectrum.Item [\r
                    Item.key folder.id\r
                    Item.content folder.label\r
                ]\r
        ]\r
    ]\r
    Html.p $"You pressed folder ID: {folderId}"\r
]`,description:o(),elements:C(x(()=>{let e,t;const l=f([{id:1,label:"Home"},{id:2,label:"Trendy"},{id:3,label:"March 2020 Assets"}]),i=B(void 0);return E((e=f([r.createElement(rt,{onAction:i[1],children:C(x(()=>nr(a=>r.createElement(A,{key:a.id,children:a.label}),l)))}),(t=`You pressed folder ID: ${i[0]}`,n.exports.createElement("p",{children:[t]}))]),n.exports.createElement("div",{children:r.Children.toArray(Array.from(e))})))}))})}function Ru(){return n.exports.createElement(m,{title:"Sizes",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.children [\r
        Spectrum.Breadcrumbs [\r
            Breadcrumbs.size BreadcrumbsSize.S\r
            Breadcrumbs.children [\r
                makeItem "home" "Home"\r
                makeItem "trendy" "Trendy"\r
            ]\r
        ]\r
        Spectrum.Breadcrumbs [\r
            Breadcrumbs.size BreadcrumbsSize.M\r
            Breadcrumbs.children [\r
                makeItem "home" "Home"\r
                makeItem "trendy" "Trendy"\r
            ]\r
        ]\r
        Spectrum.Breadcrumbs [\r
            Breadcrumbs.size BreadcrumbsSize.L\r
            Breadcrumbs.children [\r
                makeItem "home" "Home"\r
                makeItem "trendy" "Trendy"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"column",gap:"size-150",children:r.Children.toArray([r.createElement(rt,{size:"S",children:[b("home","Home"),b("trendy","Trendy")]}),r.createElement(rt,{size:"M",children:[b("home","Home"),b("trendy","Trendy")]}),r.createElement(rt,{size:"L",children:[b("home","Home"),b("trendy","Trendy")]})])}))})}function zu(){return n.exports.createElement(m,{title:"Multiline",code:`Spectrum.Breadcrumbs [\r
    Breadcrumbs.isMultiline true\r
    Breadcrumbs.children [\r
        makeItem "home" "Home"\r
        makeItem "trendy" "Trendy"\r
        makeItem "march 2020 assets" "March 2020 Assets"\r
    ]\r
]`,description:o(),elements:u(r.createElement(rt,{isMultiline:!0,children:[b("home","Home"),b("trendy","Trendy"),b("march 2020 assets","March 2020 Assets")]}))})}function Pu(){return n.exports.createElement(m,{title:"Root context",code:`Spectrum.View [\r
    View.overflow Overflow.Hidden\r
    View.width "200px"\r
    View.children [\r
        Spectrum.Breadcrumbs [\r
            Breadcrumbs.showRoot true\r
            Breadcrumbs.children [\r
                makeItem "home" "Home"\r
                makeItem "trendy" "Trendy"\r
                makeItem "march 2020 assets" "March 2020 Assets"\r
                makeItem "winter" "Winter"\r
                makeItem "holiday" "Holiday"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(R,{overflow:"hidden",width:"200px",children:r.Children.toArray([r.createElement(rt,{showRoot:!0,children:[b("home","Home"),b("trendy","Trendy"),b("march 2020 assets","March 2020 Assets"),b("winter","Winter"),b("holiday","Holiday")]})])}))})}function Lu(){const e=f(["Breadcrumbs show hierarchy and navigational context for a user\u2019s location within an application.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html"})," for more details."]);return n.exports.createElement(V,{title:"Breadcrumbs",description:e,examples:f([n.exports.createElement(Nu,null),n.exports.createElement(Mu,null),n.exports.createElement(Ru,null),n.exports.createElement(zu,null),n.exports.createElement(Pu,null)])})}function _u(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Link [\r
    Html.a [\r
        prop.href "https://www.imdb.com/title/tt6348138/"\r
        prop.target.blank\r
        prop.children [ Html.text "The missing link" ]\r
    ]\r
]`,description:o(),elements:u(n.exports.createElement(nt,o(),n.exports.createElement("a",{href:"https://www.imdb.com/title/tt6348138/",target:"_blank",children:r.Children.toArray(["The missing link"])})))})}function Gu(){return n.exports.createElement(m,{title:"Plain-text content",code:`Spectrum.Link [\r
    Link.onPress <| fun _ -> Browser.Dom.window.alert("Pressed!")\r
    Link.content "A label"\r
]`,description:o(),elements:u(r.createElement(nt,{onPress:e=>{window.alert(q("Pressed!"))},children:"A label"}))})}function Hu(){let e,t,l;return n.exports.createElement(m,{title:"Variants",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.children [\r
        Html.p [\r
            Html.text "Would you like to "\r
            Spectrum.Link [\r
                Link.variant LinkVariant.Primary\r
                Link.content "learn more"\r
            ]\r
            Html.text " about this fine component?"\r
        ]\r
        Html.p [\r
            Html.text "Would you like to "\r
            Spectrum.Link [\r
                Link.variant LinkVariant.Secondary\r
                Link.content "learn more"\r
            ]\r
            Html.text " about this fine component?"\r
        ]\r
        Html.p [\r
            Html.text "Would you like to "\r
            Spectrum.Link [\r
                Link.variant LinkVariant.Primary\r
                Link.isQuiet true\r
                Link.content "learn more"\r
            ]\r
            Html.text " about this fine component?"\r
        ]\r
        Spectrum.View [\r
            View.backgroundColor (BackgroundColorValue.Color Positive)\r
            View.padding (DimValue.Size Size300)\r
            View.children [\r
                Spectrum.Link [\r
                    Link.variant LinkVariant.OverBackground\r
                    Link.content "learn more"\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"column",children:r.Children.toArray([(e=f(["Would you like to ",r.createElement(nt,{variant:"primary",children:"learn more"})," about this fine component?"]),n.exports.createElement("p",{children:r.Children.toArray(Array.from(e))})),(t=f(["Would you like to ",r.createElement(nt,{variant:"secondary",children:"learn more"})," about this fine component?"]),n.exports.createElement("p",{children:r.Children.toArray(Array.from(t))})),(l=f(["Would you like to ",r.createElement(nt,{variant:"primary",isQuiet:!0,children:"learn more"})," about this fine component?"]),n.exports.createElement("p",{children:r.Children.toArray(Array.from(l))})),r.createElement(R,{backgroundColor:"positive",padding:"size-300",children:r.Children.toArray([r.createElement(nt,{variant:"overBackground",children:"learn more"})])})])}))})}function Ou(){const e=f(["Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Link.html"})," for more details."]);return n.exports.createElement(V,{title:"Link",description:e,examples:f([n.exports.createElement(_u,null),n.exports.createElement(Gu,null),n.exports.createElement(Hu,null)])})}function Wu(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Tabs [\r
    Tabs.ariaLabel "History of Ancient Rome"\r
    Tabs.defaultSelectedKey "FoR"\r
    Tabs.children [\r
        Spectrum.TabList [\r
            TabList.children [\r
                Spectrum.Item [\r
                    Item.key "FoR"\r
                    Item.content "Founding of Rome"\r
                ]\r
                Spectrum.Item [\r
                    Item.key "MaR"\r
                    Item.content "Monarchy and Republic"\r
                ]\r
                Spectrum.Item [\r
                    Item.key "Emp"\r
                    Item.content "Empire"\r
                ]\r
            ]\r
        ]\r
        Spectrum.TabPanels [\r
            TabPanels.children [\r
                Spectrum.Item [\r
                    Item.key "FoR"\r
                    Item.content "Arma virumque cano, Troiae qui primus ab oris."\r
                ]\r
                Spectrum.Item [\r
                    Item.key "MaR"\r
                    Item.content "Senatus Populusque Romanus."\r
                ]\r
                Spectrum.Item [\r
                    Item.key "Emp"\r
                    Item.content "Alea jacta est."\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Wt,{["aria-label"]:"History of Ancient Rome",defaultSelectedKey:"FoR",children:r.Children.toArray([r.createElement(jt,{children:[r.createElement(A,{key:"FoR",children:"Founding of Rome"}),r.createElement(A,{key:"MaR",children:"Monarchy and Republic"}),r.createElement(A,{key:"Emp",children:"Empire"})]}),r.createElement(qt,{children:[r.createElement(A,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),r.createElement(A,{key:"MaR",children:"Senatus Populusque Romanus."}),r.createElement(A,{key:"Emp",children:"Alea jacta est."})]})])}))})}function ju(){return n.exports.createElement(m,{title:"Dynamic content",code:`let tabs = [\r
    {| id = 1\r
        name = "Founding of Rome"\r
        children = "Arma virumque cano, Troiae qui primus ab oris." |}\r
    {| id = 2\r
        name = "Monarchy and Republic"\r
        children = "Senatus Populusque Romanus." |}\r
    {| id = 3\r
        name = "Empire"\r
        children = "Alea jacta est." |}\r
]\r
let tabId, setTabId = React.useState(1)\r
\r
React.fragment [\r
    Html.p $"Current tab id: {tabId}"\r
    Spectrum.Tabs [\r
        Tabs.ariaLabel "History of Ancient Rome"\r
        Tabs.items tabs\r
        Tabs.onSelectionChange setTabId\r
        Tabs.children [\r
            Spectrum.TabList [\r
                TabList.itemTemplate (fun item ->\r
                    let name: string = item?name\r
                    Spectrum.Item name\r
                )\r
            ]\r
            Spectrum.TabPanels [\r
                TabPanels.itemTemplate (fun item ->\r
                    let children: string = item?children\r
                    Spectrum.Item children\r
                )\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=f([{children:"Arma virumque cano, Troiae qui primus ab oris.",id:1,name:"Founding of Rome"},{children:"Senatus Populusque Romanus.",id:2,name:"Monarchy and Republic"},{children:"Alea jacta est.",id:3,name:"Empire"}]),l=B(1);return E(n.exports.createElement(n.exports.Fragment,{},(e=`Current tab id: ${l[0]}`,n.exports.createElement("p",{children:[e]})),r.createElement(Wt,{["aria-label"]:"History of Ancient Rome",items:Array.from(t),onSelectionChange:l[1],children:r.Children.toArray([r.createElement(jt,{children:i=>{const a=i.name;return r.createElement(A,{children:a})}}),r.createElement(qt,{children:i=>{const a=i.children;return r.createElement(A,{children:a})}})])})))}))})}function qu(){let e,t,l;return n.exports.createElement(m,{title:"Icons in tabs",code:`Spectrum.Tabs [\r
    Tabs.ariaLabel "History of Ancient Rome"\r
    Tabs.children [\r
        Spectrum.TabList [\r
            Spectrum.Item [\r
                Item.key "FoR"\r
                Item.children [\r
                    Spectrum.Icon.Bookmark []\r
                    Spectrum.Text "Founding of Rome"\r
                ]\r
            ]\r
            Spectrum.Item [\r
                Item.key "MaR"\r
                Item.children [\r
                    Spectrum.Icon.Calendar []\r
                    Spectrum.Text "Monarchy and Republic"\r
                ]\r
            ]\r
            Spectrum.Item [\r
                Item.key "Emp"\r
                Item.children [\r
                    Spectrum.Icon.Dashboard []\r
                    Spectrum.Text "Empire"\r
                ]\r
            ]\r
        ]\r
        Spectrum.TabPanels [\r
            Spectrum.Item [\r
                Item.key "FoR"\r
                Item.content "Arma virumque cano, Troiae qui primus ab oris."\r
            ]\r
            Spectrum.Item [\r
                Item.key "MaR"\r
                Item.content "Senatus Populusque Romanus."\r
            ]\r
            Spectrum.Item [\r
                Item.key "Emp"\r
                Item.content "Alea jacta est."\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Wt,{["aria-label"]:"History of Ancient Rome",children:r.Children.toArray([n.exports.createElement(jt,o(),r.createElement(A,{key:"FoR",children:r.Children.toArray([(e=Ol,r.createElement(e,{})),r.createElement(y,{children:r.Children.toArray(["Founding of Rome"])})])}),r.createElement(A,{key:"MaR",children:r.Children.toArray([(t=Wl,r.createElement(t,{})),r.createElement(y,{children:r.Children.toArray(["Monarchy and Republic"])})])}),r.createElement(A,{key:"Emp",children:r.Children.toArray([(l=jl,r.createElement(l,{})),r.createElement(y,{children:r.Children.toArray(["Empire"])})])})),n.exports.createElement(qt,o(),r.createElement(A,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),r.createElement(A,{key:"MaR",children:"Senatus Populusque Romanus."}),r.createElement(A,{key:"Emp",children:"Alea jacta est."}))])}))})}function Uu(){return n.exports.createElement(m,{title:"Selection",code:`let tabs = [\r
    {| id = 1; name = "Keyboard Settings"; children = "No keyboard detected" |}\r
    {| id = 2; name = "Mouse Settings"; children = "No mouse detected" |}\r
    {| id = 3; name = "Gamepad Settings"; children = "No gamepad detected" |}\r
]\r
let tab, setTab = React.useState(2)\r
\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.wrap true\r
    Flex.children [\r
        Html.span [\r
            prop.id "label-2"\r
            prop.children [\r
                Html.text "Settings (uncontrolled)"\r
            ]\r
        ]\r
        Spectrum.Tabs [\r
            Tabs.ariaLabeledBy "label-2"\r
            Tabs.items tabs\r
            Tabs.defaultSelectedKey 2\r
            Tabs.marginBottom (DimValue.Size Size400)\r
            Tabs.children [\r
                Spectrum.TabList [\r
                    TabList.itemTemplate (fun item ->\r
                        let name: string = item?name\r
                        Spectrum.Item name\r
                    )\r
                ]\r
                Spectrum.TabPanels [\r
                    TabPanels.itemTemplate (fun item ->\r
                        let children: string = item?children\r
                        Spectrum.Item children\r
                    )\r
                ]\r
            ]\r
        ]\r
        Html.span [\r
            prop.id "label-3"\r
            prop.children [\r
                Html.text "Settings (controlled)"\r
            ]\r
        ]\r
        Spectrum.Tabs [\r
            Tabs.ariaLabeledBy "label-3"\r
            Tabs.items tabs\r
            Tabs.selectedKey tab\r
            Tabs.onSelectionChange setTab\r
            Tabs.children [\r
                Spectrum.TabList [\r
                    TabList.itemTemplate (fun item ->\r
                        let name: string = item?name\r
                        Spectrum.Item name\r
                    )\r
                ]\r
                Spectrum.TabPanels [\r
                    TabPanels.itemTemplate (fun item ->\r
                        let children: string = item?children\r
                        Spectrum.Item children\r
                    )\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=f([{children:"No keyboard detected",id:1,name:"Keyboard Settings"},{children:"No mouse detected",id:2,name:"Mouse Settings"},{children:"No gamepad detected",id:3,name:"Gamepad Settings"}]),t=B(2);return E(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([n.exports.createElement("span",{id:"label-2",children:r.Children.toArray(["Settings (uncontrolled)"])}),r.createElement(Wt,{["aria-labelledby"]:"label-2",items:Array.from(e),defaultSelectedKey:2,marginBottom:"size-400",children:r.Children.toArray([r.createElement(jt,{children:l=>{const i=l.name;return r.createElement(A,{children:i})}}),r.createElement(qt,{children:l=>{const i=l.children;return r.createElement(A,{children:i})}})])}),n.exports.createElement("span",{id:"label-3",children:r.Children.toArray(["Settings (controlled)"])}),r.createElement(Wt,{["aria-labelledby"]:"label-3",items:Array.from(e),selectedKey:t[0],onSelectionChange:t[1],children:r.Children.toArray([r.createElement(jt,{children:l=>{const i=l.name;return r.createElement(A,{children:i})}}),r.createElement(qt,{children:l=>{const i=l.children;return r.createElement(A,{children:i})}})])})])}))}))})}function Ku(){const e=f(["Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tabs.html"})," for more details."]);return n.exports.createElement(V,{title:"Tabs",description:e,examples:f([n.exports.createElement(Wu,null),n.exports.createElement(ju,null),n.exports.createElement(qu,null),n.exports.createElement(Uu,null)])})}function Ju(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton [ Html.text "Save" ]\r
    Spectrum.AlertDialog [\r
        AlertDialog.title "Low disk space!"\r
        AlertDialog.variant AlertDialogVariant.Warning\r
        AlertDialog.primaryActionLabel "Confirm"\r
        AlertDialog.content "You are running low on disk space.\\nDelete unnecessary files to free up space."\r
    ]\r
]`,description:o(),elements:u(n.exports.createElement(Q,o(),n.exports.createElement(N,o(),"Save"),r.createElement(Et,{title:"Low disk space!",variant:"warning",primaryActionLabel:"Confirm",children:`You are running low on disk space.
Delete unnecessary files to free up space.`})))})}function $u(){return n.exports.createElement(m,{title:"Content",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton [ Html.text "Exit" ]\r
    Spectrum.AlertDialog [\r
        AlertDialog.title "Register profile"\r
        AlertDialog.variant AlertDialogVariant.Information\r
        AlertDialog.primaryActionLabel "Register"\r
        AlertDialog.secondaryActionLabel "Reminder me later"\r
        AlertDialog.cancelLabel "Cancel"\r
        AlertDialog.content "You have not saved your profile information \\nfor this account. Would you like to register now?"\r
    ]\r
]`,description:o(),elements:u(n.exports.createElement(Q,o(),n.exports.createElement(N,o(),"Exit"),r.createElement(Et,{title:"Register profile",variant:"information",primaryActionLabel:"Register",secondaryActionLabel:"Reminder me later",cancelLabel:"Cancel",children:`You have not saved your profile information 
for this account. Would you like to register now?`})))})}function Yu(){return n.exports.createElement(m,{title:"Accessibility",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton [ Html.text "Save" ]\r
    Spectrum.AlertDialog [\r
        AlertDialog.title "Save file"\r
        AlertDialog.variant AlertDialogVariant.Confirmation\r
        AlertDialog.primaryActionLabel "Save"\r
        AlertDialog.cancelLabel "Cancel"\r
        AlertDialog.autoFocusButton AutoFocusButton.Primary\r
        AlertDialog.content "A file with the same name already exists. Overwrite?"\r
    ]\r
]`,description:o(),elements:u(n.exports.createElement(Q,o(),n.exports.createElement(N,o(),"Save"),r.createElement(Et,{title:"Save file",variant:"confirmation",primaryActionLabel:"Save",cancelLabel:"Cancel",autoFocusButton:"primary",children:"A file with the same name already exists. Overwrite?"})))})}function Xu(){return n.exports.createElement(m,{title:"Events",code:`let onPrimaryAction () = Browser.Dom.window.alert("Primary button pressed.")\r
let onSecondaryAction () = Browser.Dom.window.alert("Secondary button pressed.")\r
let onCancel () = Browser.Dom.window.alert("Cancel button pressed.")\r
Spectrum.DialogTrigger [\r
    Spectrum.ActionButton [ Html.text "Publish" ]\r
    Spectrum.AlertDialog [\r
        AlertDialog.variant AlertDialogVariant.Confirmation\r
        AlertDialog.title "Confirm publish"\r
        AlertDialog.primaryActionLabel "Publish"\r
        AlertDialog.secondaryActionLabel "Save as draft"\r
        AlertDialog.cancelLabel "Cancel"\r
        AlertDialog.onPrimaryAction onPrimaryAction\r
        AlertDialog.onSecondaryAction onSecondaryAction\r
        AlertDialog.onCancel onCancel\r
        AlertDialog.content "Are you sure you want to publish this document?"\r
    ]\r
]`,description:o(),elements:C(x(()=>E(n.exports.createElement(Q,o(),n.exports.createElement(N,o(),"Publish"),r.createElement(Et,{variant:"confirmation",title:"Confirm publish",primaryActionLabel:"Publish",secondaryActionLabel:"Save as draft",cancelLabel:"Cancel",onPrimaryAction:()=>{window.alert(q("Primary button pressed."))},onSecondaryAction:()=>{window.alert(q("Secondary button pressed."))},onCancel:()=>{window.alert(q("Cancel button pressed."))},children:"Are you sure you want to publish this document?"})))))})}function Zu(){const e=f(["AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html"})," for more details."]);return n.exports.createElement(V,{title:"AlertDialog",description:e,examples:f([n.exports.createElement(Ju,null),n.exports.createElement($u,null),n.exports.createElement(Yu,null),n.exports.createElement(Xu,null)])})}function Qu(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton "Check connectivity"\r
    Spectrum.DialogClose <| fun close ->\r
        Spectrum.Dialog [\r
            Spectrum.Heading "Internet Speed Test"\r
            Spectrum.Header "Connection status: Connected"\r
            Spectrum.Divider ()\r
            Spectrum.Content [\r
                Spectrum.Text "Start speed test?"\r
            ]\r
            Spectrum.ButtonGroup [\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Secondary\r
                    Button.onPress (fun _ -> close())\r
                    Button.content "Cancel"\r
                ]\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.CTA\r
                    Button.onPress (fun _ -> close())\r
                    Button.content "Confirm"\r
                ]\r
            ]\r
        ]\r
]`,description:o(),elements:u(n.exports.createElement(Q,o(),r.createElement(N,{children:r.Children.toArray(["Check connectivity"])}),e=>n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["Internet Speed Test"])}),r.createElement(Lr,{children:r.Children.toArray(["Connection status: Connected"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),r.createElement(y,{children:r.Children.toArray(["Start speed test?"])})),n.exports.createElement(Ie,o(),r.createElement(L,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),r.createElement(L,{variant:"cta",onPress:t=>{e()},children:"Confirm"})))))})}function em(){return n.exports.createElement(m,{title:"Content",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton "Publish"\r
    Spectrum.DialogClose <| fun close ->\r
        Spectrum.Dialog [\r
            Spectrum.Heading "Publish 3 pages"\r
            Spectrum.Divider ()\r
            Spectrum.Content [\r
                Html.text "Confirm publish"\r
            ]\r
            Spectrum.ButtonGroup [\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Secondary\r
                    Button.onPress (fun _ -> close())\r
                    Button.content "Cancel"\r
                ]\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.CTA\r
                    Button.autoFocus true\r
                    Button.onPress (fun _ -> close())\r
                    Button.content "Confirm"\r
                ]\r
            ]\r
        ]\r
]`,description:o(),elements:u(n.exports.createElement(Q,o(),r.createElement(N,{children:r.Children.toArray(["Publish"])}),e=>n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["Publish 3 pages"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),"Confirm publish"),n.exports.createElement(Ie,o(),r.createElement(L,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),r.createElement(L,{variant:"cta",autoFocus:!0,onPress:t=>{e()},children:"Confirm"})))))})}function tm(){return n.exports.createElement(m,{title:"Dismissable",code:`Spectrum.DialogTrigger [\r
    DialogTrigger.isDismissable true\r
    DialogTrigger.children [\r
        Spectrum.ActionButton "Status"\r
        Spectrum.Dialog [\r
            Spectrum.Heading "Status"\r
            Spectrum.Divider ()\r
            Spectrum.Content [\r
                Html.text "Printer Status: Connected"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Q,{isDismissable:!0,children:r.Children.toArray([r.createElement(N,{children:r.Children.toArray(["Status"])}),n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["Status"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),"Printer Status: Connected"))])}))})}function rm(){return n.exports.createElement(m,{title:"Complex UI",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton "Register"\r
    Spectrum.DialogClose <| fun close ->\r
        Spectrum.Dialog [\r
            Dialog.size DialogSize.L\r
            Dialog.children [\r
                Spectrum.Heading [\r
                    Spectrum.Flex [\r
                        Flex.alignItems FlexAlignItems.Center\r
                        Flex.gap (DimValue.Size Size100)\r
                        Flex.children [\r
                            Spectrum.Icon.Book [ Icon.size IconSize.S ]\r
                            Spectrum.Text "Register for newsletter"\r
                        ]\r
                    ]\r
                ]\r
                Spectrum.Header [\r
                    Spectrum.Link [\r
                        Html.a [\r
                            prop.href "//example.com"\r
                            prop.target.blank\r
                            prop.children [ Html.text "What is this?" ]\r
                        ]\r
                    ]\r
                ]\r
                Spectrum.Divider ()\r
                Spectrum.Content [\r
                    Spectrum.Form [\r
                        Spectrum.TextField [\r
                            TextField.label "First Name"\r
                            TextField.placeholder "John"\r
                            TextField.autoFocus true\r
                        ]\r
                        Spectrum.TextField [\r
                            TextField.label "Last Name"\r
                            TextField.placeholder "Smith"\r
                        ]\r
                        Spectrum.TextField [\r
                            TextField.label "Street Address"\r
                            TextField.placeholder "123 Any Street"\r
                        ]\r
                        Spectrum.TextField [\r
                            TextField.label "City"\r
                            TextField.placeholder "San Francisco"\r
                        ]\r
                    ]\r
                ]\r
                Spectrum.Footer [\r
                    Spectrum.Checkbox [\r
                        Checkbox.content "I want to receive updates for exclusive offers in my area."\r
                    ]\r
                ]\r
                Spectrum.ButtonGroup [\r
                    Spectrum.Button [\r
                        Button.variant ButtonVariant.Secondary\r
                        Button.onPress (fun _ -> close())\r
                        Button.content "Cancel"\r
                    ]\r
                    Spectrum.Button [\r
                        Button.variant ButtonVariant.CTA\r
                        Button.onPress (fun _ -> close())\r
                        Button.content "Register"\r
                    ]\r
                ]\r
            ]\r
        ]\r
]`,description:o(),elements:u(n.exports.createElement(Q,o(),r.createElement(N,{children:r.Children.toArray(["Register"])}),e=>{let t;return r.createElement(ue,{size:"L",children:r.Children.toArray([n.exports.createElement(K,o(),r.createElement(F,{alignItems:"center",gap:"size-100",children:r.Children.toArray([(t=fn,r.createElement(t,{size:"S"})),r.createElement(y,{children:r.Children.toArray(["Register for newsletter"])})])})),n.exports.createElement(Lr,o(),n.exports.createElement(nt,o(),n.exports.createElement("a",{href:"//example.com",target:"_blank",children:r.Children.toArray(["What is this?"])}))),n.exports.createElement(U,o()),n.exports.createElement(J,o(),n.exports.createElement(et,o(),r.createElement(_,{label:"First Name",placeholder:"John",autoFocus:!0}),r.createElement(_,{label:"Last Name",placeholder:"Smith"}),r.createElement(_,{label:"Street Address",placeholder:"123 Any Street"}),r.createElement(_,{label:"City",placeholder:"San Francisco"}))),n.exports.createElement(gn,o(),r.createElement(z,{children:r.Children.toArray(["I want to receive updates for exclusive offers in my area."])})),n.exports.createElement(Ie,o(),r.createElement(L,{variant:"secondary",onPress:l=>{e()},children:"Cancel"}),r.createElement(L,{variant:"cta",onPress:l=>{e()},children:"Register"}))])})}))})}function nm(){return n.exports.createElement(m,{title:"Hero image",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton "Upload"\r
    Spectrum.DialogClose <| fun close ->\r
        Spectrum.Dialog [\r
            Spectrum.Image [\r
                Image.slot "hero"\r
                Image.alt ""\r
                Image.src "https://i.imgur.com/Z7AzH2c.png"\r
                Image.objectFit ImageObjectFit.Cover\r
            ]\r
            Spectrum.Heading "Upload file"\r
            Spectrum.Divider ()\r
            Spectrum.Content "Are you sure you want to upload this file?"\r
            Spectrum.ButtonGroup [\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Secondary\r
                    Button.onPress (fun _ -> close())\r
                    Button.content "Cancel"\r
                ]\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.CTA\r
                    Button.onPress (fun _ -> close())\r
                    Button.content "Confirm"\r
                ]\r
            ]\r
        ]\r
]`,description:o(),elements:u(n.exports.createElement(Q,o(),r.createElement(N,{children:r.Children.toArray(["Upload"])}),e=>n.exports.createElement(ue,o(),r.createElement(xn,{slot:"hero",alt:"",src:"https://i.imgur.com/Z7AzH2c.png",objectFit:"cover"}),r.createElement(K,{children:r.Children.toArray(["Upload file"])}),n.exports.createElement(U,o()),r.createElement(J,{children:r.Children.toArray(["Are you sure you want to upload this file?"])}),n.exports.createElement(Ie,o(),r.createElement(L,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),r.createElement(L,{variant:"cta",onPress:t=>{e()},children:"Confirm"})))))})}function lm(){return n.exports.createElement(m,{title:"Events",code:`let alertSave = fun (close) ->\r
    close()\r
    Browser.Dom.window.alert("Profile saved!")\r
\r
let alertCancel = fun (close) ->\r
    close()\r
    Browser.Dom.window.alert("Profile not saved!")\r
\r
Spectrum.DialogTrigger [\r
    Spectrum.ActionButton "Set Profile"\r
    Spectrum.DialogClose <| fun close ->\r
        Spectrum.Dialog [\r
            Spectrum.Heading "Profile"\r
            Spectrum.Divider ()\r
            Spectrum.ButtonGroup [\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.Secondary\r
                    Button.onPress (fun _ -> alertCancel(close))\r
                    Button.content "Cancel"\r
                ]\r
                Spectrum.Button [\r
                    Button.variant ButtonVariant.CTA\r
                    Button.autoFocus true\r
                    Button.onPress (fun _ -> alertSave(close))\r
                    Button.content "Save"\r
                ]\r
            ]\r
            Spectrum.Content [\r
                Spectrum.Form [\r
                    Spectrum.TextField [\r
                        TextField.label "Name"\r
                    ]\r
                    Spectrum.Checkbox [\r
                        Checkbox.content "Make private"\r
                    ]\r
                ]\r
            ]\r
        ]\r
]`,description:o(),elements:C(x(()=>E(n.exports.createElement(Q,o(),r.createElement(N,{children:r.Children.toArray(["Set Profile"])}),e=>n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["Profile"])}),n.exports.createElement(U,o()),n.exports.createElement(Ie,o(),r.createElement(L,{variant:"secondary",onPress:t=>{e(),window.alert(q("Profile not saved!"))},children:"Cancel"}),r.createElement(L,{variant:"cta",autoFocus:!0,onPress:t=>{e(),window.alert(q("Profile saved!"))},children:"Save"})),n.exports.createElement(J,o(),n.exports.createElement(et,o(),r.createElement(_,{label:"Name"}),r.createElement(z,{children:r.Children.toArray(["Make private"])}))))))))})}function im(){const e=f(["Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Dialog.html"})," for more details."]);return n.exports.createElement(V,{title:"Dialog",description:e,examples:f([n.exports.createElement(Qu,null),n.exports.createElement(em,null),n.exports.createElement(tm,null),n.exports.createElement(rm,null),n.exports.createElement(nm,null),n.exports.createElement(lm,null)])})}function am(){return n.exports.createElement(m,{title:"Default example",code:`let isOpen, setIsOpen = React.useState(false)\r
\r
React.fragment [\r
    Spectrum.ActionButton [\r
        ActionButton.onPress (fun _ -> setIsOpen(true))\r
        ActionButton.children [\r
            Spectrum.Icon.Delete []\r
            Spectrum.Text "Delete"\r
        ]\r
    ]\r
    Spectrum.DialogContainer [\r
        DialogContainer.onDismiss (fun () -> setIsOpen(false))\r
        DialogContainer.children [\r
            if isOpen then\r
                Spectrum.AlertDialog [\r
                    AlertDialog.title "Delete"\r
                    AlertDialog.variant AlertDialogVariant.Destructive\r
                    AlertDialog.primaryActionLabel "Delete"\r
                    AlertDialog.content "Are you sure you want to delete this item?"\r
                ]\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(!1),l=t[1];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(N,{onPress:i=>{l(!0)},children:r.Children.toArray([(e=ur,r.createElement(e,{})),r.createElement(y,{children:r.Children.toArray(["Delete"])})])}),r.createElement(En,{onDismiss:()=>{l(!1)},children:r.Children.toArray(Array.from(C(x(()=>t[0]?E(r.createElement(Et,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"})):Qr()))))})))}))})}function om(){const e=Kl();return n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["Edit"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),r.createElement(et,{children:r.Children.toArray([r.createElement(_,{autoFocus:!0,label:"First Name",defaultValue:"John"}),r.createElement(_,{label:"Last Name",defaultValue:"Smith"})])})),n.exports.createElement(Ie,o(),r.createElement(L,{variant:"secondary",onPress:t=>{e.dismiss()},children:"Cancel"}),r.createElement(L,{variant:"cta",onPress:t=>{e.dismiss()},children:"Save"})))}function cm(){return n.exports.createElement(m,{title:"Dialog triggered by a menu item",code:`let dialog, setDialog = React.useState(JS.undefined<string>)\r
React.fragment [\r
    Spectrum.MenuTrigger [\r
        Spectrum.ActionButton [\r
            ActionButton.ariaLabel "Actions"\r
            ActionButton.children [\r
                Spectrum.Icon.More []\r
            ]\r
        ]\r
        Spectrum.Menu [\r
            Menu.onAction setDialog\r
            Menu.children [\r
                makeItem "edit" "Edit..."\r
                makeItem "delete" "Delete..."\r
            ]\r
        ]\r
    ]\r
    Spectrum.DialogContainer [\r
        DialogContainer.onDismiss (fun () -> setDialog(JS.undefined<string>))\r
        DialogContainer.type' DialogContainerType.Modal\r
        DialogContainer.children [\r
            match dialog with\r
            | "edit" -> EditDialog ()\r
            | "delete" ->\r
                Spectrum.AlertDialog [\r
                    AlertDialog.title "Delete"\r
                    AlertDialog.variant AlertDialogVariant.Destructive\r
                    AlertDialog.primaryActionLabel "Delete"\r
                    AlertDialog.content "Are you sure you want to delete this item?"\r
                ]\r
            | _ -> Html.none\r
        ]\r
    ]\r
]\r
\r
// EditDialog.fs\r
[<ReactComponent>]\r
let EditDialog () =\r
    let dialog = Spectrum.useDialogContainer()\r
    Spectrum.Dialog [\r
        Spectrum.Heading "Edit"\r
        Spectrum.Divider ()\r
        Spectrum.Content [\r
            Spectrum.Form [\r
                //Form.width "100%"\r
                Form.children [\r
                    Spectrum.TextField [\r
                        TextField.autoFocus true\r
                        TextField.label "First Name"\r
                        TextField.defaultValue "John"\r
                    ]\r
                    Spectrum.TextField [\r
                        TextField.label "Last Name"\r
                        TextField.defaultValue "Smith"\r
                    ]\r
                ]\r
            ]\r
        ]\r
        Spectrum.ButtonGroup [\r
            Spectrum.Button [\r
                Button.variant ButtonVariant.Secondary\r
                Button.onPress (fun _ -> dialog.dismiss())\r
                Button.content "Cancel"\r
            ]\r
            Spectrum.Button [\r
                Button.variant ButtonVariant.CTA\r
                Button.onPress (fun _ -> dialog.dismiss())\r
                Button.content "Save"\r
            ]\r
        ]\r
    ]\r
`,description:o(),elements:C(x(()=>{let e;const t=B(void 0),l=t[1],i=t[0];return E(n.exports.createElement(n.exports.Fragment,{},n.exports.createElement(te,o(),r.createElement(N,{["aria-label"]:"Actions",children:r.Children.toArray([(e=Jl,r.createElement(e,{}))])}),r.createElement(re,{onAction:l,children:[b("edit","Edit..."),b("delete","Delete...")]})),r.createElement(En,{onDismiss:()=>{l(void 0)},type:"modal",children:r.Children.toArray(Array.from(C(x(()=>E(i==="edit"?n.exports.createElement(om,null):i==="delete"?r.createElement(Et,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"}):null)))))})))}))})}function sm(){const e=f(["A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html"})," for more details."]);return n.exports.createElement(V,{title:"DialogContainer",description:e,examples:f([n.exports.createElement(am,null),n.exports.createElement(cm,null)])})}function um(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.DialogTrigger [\r
    DialogTrigger.type' DialogTriggerType.Popover\r
    DialogTrigger.children [\r
        Spectrum.ActionButton "Disk Status"\r
        Spectrum.Dialog [\r
            Spectrum.Heading "C://"\r
            Spectrum.Divider ()\r
            Spectrum.Content [\r
                Spectrum.Text "50% disk space remaining."\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Q,{type:"popover",children:r.Children.toArray([r.createElement(N,{children:r.Children.toArray(["Disk Status"])}),n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["C://"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),r.createElement(y,{children:r.Children.toArray(["50% disk space remaining."])})))])}))})}function mm(){return n.exports.createElement(m,{title:"Tray dialog",code:`Spectrum.DialogTrigger [\r
    DialogTrigger.type' DialogTriggerType.Tray\r
    DialogTrigger.children [\r
        Spectrum.ActionButton "Check messages"\r
        Spectrum.Dialog [\r
            Spectrum.Heading "New messages"\r
            Spectrum.Divider ()\r
            Spectrum.Content [\r
                Spectrum.Text "You have 5 new messages."\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Q,{type:"tray",children:r.Children.toArray([r.createElement(N,{children:r.Children.toArray(["Check messages"])}),n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["New messages"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),r.createElement(y,{children:r.Children.toArray(["You have 5 new messages."])})))])}))})}function dm(){return n.exports.createElement(m,{title:"Dialog anchor",code:`let ref = React.useRef<Browser.Types.HTMLElement option>(None)\r
\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size1000)\r
    Flex.children [\r
        Spectrum.DialogTrigger [\r
            DialogTrigger.type' DialogTriggerType.Popover\r
            DialogTrigger.targetRef ref\r
            DialogTrigger.children [\r
                Spectrum.ActionButton "Trigger"\r
                Spectrum.Dialog [\r
                    Spectrum.Heading "The heading"\r
                    Spectrum.Divider ()\r
                    Spectrum.Content [\r
                        Spectrum.Text "This is a popover anchored to the span"\r
                    ]\r
                ]\r
            ]\r
        ]\r
        Html.span [\r
            prop.ref ref\r
            prop.style [\r
                style.width 140\r
                style.textAlign.center\r
            ]\r
            prop.children [\r
                Html.text "Popover appears over here"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=sn(void 0);return E(r.createElement(F,{gap:"size-1000",children:r.Children.toArray([r.createElement(Q,{type:"popover",targetRef:e,children:r.Children.toArray([r.createElement(N,{children:r.Children.toArray(["Trigger"])}),n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["The heading"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),r.createElement(y,{children:r.Children.toArray(["This is a popover anchored to the span"])})))])}),n.exports.createElement("span",{ref:e,style:{width:140,textAlign:"center"},children:r.Children.toArray(["Popover appears over here"])})])}))}))})}function pm(){return n.exports.createElement(m,{title:"Placement",code:`Spectrum.DialogTrigger [\r
    DialogTrigger.type' DialogTriggerType.Popover\r
    DialogTrigger.placement Placement.RightTop\r
    DialogTrigger.children [\r
        Spectrum.ActionButton "Trigger"\r
        Spectrum.Dialog [\r
            Spectrum.Heading "The Heading"\r
            Spectrum.Divider ()\r
            Spectrum.Content [\r
                Spectrum.Text "This is a popover placed to the right of its trigger and offset so the arrow is at the top of the dialog."\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Q,{type:"popover",placement:"right top",children:r.Children.toArray([r.createElement(N,{children:r.Children.toArray(["Trigger"])}),n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["The Heading"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),r.createElement(y,{children:r.Children.toArray(["This is a popover placed to the right of its trigger and offset so the arrow is at the top of the dialog."])})))])}))})}function hm(){return n.exports.createElement(m,{title:"Offset and cross offset",code:`Spectrum.DialogTrigger [\r
    DialogTrigger.type' DialogTriggerType.Popover\r
    DialogTrigger.placement Placement.Top\r
    DialogTrigger.offset 50\r
    DialogTrigger.children [\r
        Spectrum.ActionButton "Trigger"\r
        Spectrum.Dialog [\r
            Spectrum.Heading "Offset"\r
            Spectrum.Divider ()\r
            Spectrum.Content [\r
                Spectrum.Text "Offset by an additional 50px."\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Q,{type:"popover",placement:"top",offset:50,children:r.Children.toArray([r.createElement(N,{children:r.Children.toArray(["Trigger"])}),n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["Offset"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),r.createElement(y,{children:r.Children.toArray(["Offset by an additional 50px."])})))])}))})}function fm(){return n.exports.createElement(m,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)\r
\r
Spectrum.Flex [\r
    Flex.alignItems FlexAlignItems.Center\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.children [\r
        Spectrum.DialogTrigger [\r
            DialogTrigger.type' DialogTriggerType.Popover\r
            DialogTrigger.placement Placement.Top\r
            DialogTrigger.onOpenChange setIsOpen\r
            DialogTrigger.children [\r
                Spectrum.ActionButton "Whispers"\r
                Spectrum.Dialog [\r
                    Spectrum.Heading "Whispers and DMs"\r
                    Spectrum.Divider ()\r
                    Spectrum.Content [\r
                        Spectrum.Text "You have 0 new messages."\r
                    ]\r
                ]\r
            ]\r
        ]\r
        Spectrum.Text $"Current open state: {isOpen}"\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=B(!1);return E(r.createElement(F,{alignItems:"center",gap:"size-100",children:r.Children.toArray([r.createElement(Q,{type:"popover",placement:"top",onOpenChange:t[1],children:r.Children.toArray([r.createElement(N,{children:r.Children.toArray(["Whispers"])}),n.exports.createElement(ue,o(),r.createElement(K,{children:r.Children.toArray(["Whispers and DMs"])}),n.exports.createElement(U,o()),n.exports.createElement(J,o(),r.createElement(y,{children:r.Children.toArray(["You have 0 new messages."])})))])}),(e=`Current open state: ${t[0]}`,r.createElement(y,{children:r.Children.toArray([e])}))])}))}))})}function gm(){const e=f(["DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html"})," for more details."]);return n.exports.createElement(V,{title:"DialogTrigger",description:e,examples:f([n.exports.createElement(um,null),n.exports.createElement(mm,null),n.exports.createElement(dm,null),n.exports.createElement(pm,null),n.exports.createElement(hm,null),n.exports.createElement(fm,null)])})}function xm(){let e;return n.exports.createElement(m,{title:"Default example",code:`Spectrum.TooltipTrigger [\r
    TooltipTrigger.delay 0\r
    TooltipTrigger.children [\r
        Spectrum.ActionButton [\r
            ActionButton.ariaLabel "Edit Name"\r
            ActionButton.children [\r
                Spectrum.Icon.Edit []\r
            ]\r
        ]\r
        Spectrum.Tooltip [\r
            Tooltip.content "Change Name"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Oe,{delay:0,children:r.Children.toArray([r.createElement(N,{["aria-label"]:"Edit Name",children:r.Children.toArray([(e=dn,r.createElement(e,{}))])}),r.createElement(We,{children:"Change Name"})])}))})}function Em(){return n.exports.createElement(m,{title:"Warmup / Cooldown",code:`Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size200)\r
    Flex.children [\r
        Spectrum.TooltipTrigger [\r
            Spectrum.ActionButton "Hover me"\r
            Spectrum.Tooltip "I come up after a delay."\r
        ]\r
        Spectrum.TooltipTrigger [\r
            Spectrum.ActionButton "Then hover me"\r
            Spectrum.Tooltip "If you did it quickly, I appear immediately."\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{gap:"size-200",children:r.Children.toArray([n.exports.createElement(Oe,o(),r.createElement(N,{children:r.Children.toArray(["Hover me"])}),r.createElement(We,{children:"I come up after a delay."})),n.exports.createElement(Oe,o(),r.createElement(N,{children:r.Children.toArray(["Then hover me"])}),r.createElement(We,{children:"If you did it quickly, I appear immediately."}))])}))})}function Sm(){return n.exports.createElement(m,{title:"Tooltip placement",code:`Spectrum.TooltipTrigger [\r
    TooltipTrigger.placement TooltipPlacement.End\r
    TooltipTrigger.children [\r
        Spectrum.ActionButton [\r
            ActionButton.ariaLabel "Foo"\r
            ActionButton.content "Placement"\r
        ]\r
        Spectrum.Tooltip "In left-to-right, this is on the right. In right-to-left, this is on the left."\r
    ]\r
]`,description:o(),elements:u(r.createElement(Oe,{placement:"end",children:r.Children.toArray([r.createElement(N,{["aria-label"]:"Foo",children:"Placement"}),r.createElement(We,{children:"In left-to-right, this is on the right. In right-to-left, this is on the left."})])}))})}function bm(){return n.exports.createElement(m,{title:"Offset and cross offset",code:`Spectrum.TooltipTrigger [\r
    TooltipTrigger.offset 50\r
    TooltipTrigger.children [\r
        Spectrum.ActionButton "Offset"\r
        Spectrum.Tooltip "This will shift up..."\r
    ]\r
]`,description:o(),elements:u(r.createElement(Oe,{offset:50,children:r.Children.toArray([r.createElement(N,{children:r.Children.toArray(["Offset"])}),r.createElement(We,{children:"This will shift up..."})])}))})}function ym(){let e,t,l;return n.exports.createElement(m,{title:"Visual variants",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Row\r
    Flex.gap (DimValue.Size Size100)\r
    Flex.children [\r
        Spectrum.TooltipTrigger [\r
            Spectrum.ActionButton [\r
                ActionButton.ariaLabel "Approve"\r
                ActionButton.children [\r
                    Spectrum.Icon.ThumbUp []\r
                ]\r
            ]\r
            Spectrum.Tooltip [\r
                Tooltip.variant TooltipVariant.Positive\r
                Tooltip.showIcon true\r
                Tooltip.content "Approve workflow"\r
            ]\r
        ]\r
        Spectrum.TooltipTrigger [\r
            Spectrum.ActionButton [\r
                ActionButton.ariaLabel "Information"\r
                ActionButton.children [\r
                    Spectrum.Icon.Question []\r
                ]\r
            ]\r
            Spectrum.Tooltip [\r
                Tooltip.variant TooltipVariant.Info\r
                Tooltip.showIcon true\r
                Tooltip.content "Show the more information menu"\r
            ]\r
        ]\r
        Spectrum.TooltipTrigger [\r
            Spectrum.ActionButton [\r
                ActionButton.ariaLabel "Danger"\r
                ActionButton.children [\r
                    Spectrum.Icon.Delete []\r
                ]\r
            ]\r
            Spectrum.Tooltip [\r
                Tooltip.variant TooltipVariant.Negative\r
                Tooltip.showIcon true\r
                Tooltip.content "Dangerous action"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"row",gap:"size-100",children:r.Children.toArray([n.exports.createElement(Oe,o(),r.createElement(N,{["aria-label"]:"Approve",children:r.Children.toArray([(e=ql,r.createElement(e,{}))])}),r.createElement(We,{variant:"positive",showIcon:!0,children:"Approve workflow"})),n.exports.createElement(Oe,o(),r.createElement(N,{["aria-label"]:"Information",children:r.Children.toArray([(t=Ul,r.createElement(t,{}))])}),r.createElement(We,{variant:"info",showIcon:!0,children:"Show the more information menu"})),n.exports.createElement(Oe,o(),r.createElement(N,{["aria-label"]:"Danger",children:r.Children.toArray([(l=ur,r.createElement(l,{}))])}),r.createElement(We,{variant:"negative",showIcon:!0,children:"Dangerous action"}))])}))})}function Cm(){const e=f(["Display container for Tooltip content. Has a directional arrow dependent on its placement.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tooltip.html"})," for more details."]);return n.exports.createElement(V,{title:"Tooltip",description:e,examples:f([n.exports.createElement(xm,null),n.exports.createElement(Em,null),n.exports.createElement(Sm,null),n.exports.createElement(bm,null),n.exports.createElement(ym,null)])})}function Am(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.ComboBox [\r
    ComboBox.label "Favorite animal"\r
    ComboBox.children [\r
        makeItem "red panda" "Red Panda"\r
        makeItem "cat" "Cat"\r
        makeItem "dog" "Dog"\r
        makeItem "aardvark" "Aardvark"\r
        makeItem "kangaroo" "Kangaroo"\r
        makeItem "snake" "Snake"\r
    ]\r
]`,description:o(),elements:u(r.createElement(je,{label:"Favorite animal",children:[b("red panda","Red Panda"),b("cat","Cat"),b("dog","Dog"),b("aardvark","Aardvark"),b("kangaroo","Kangaroo"),b("snake","Snake")]}))})}function vm(){return n.exports.createElement(m,{title:"Content",code:`let options = [\r
    {| id = 1; name = "Aerospace" |}\r
    {| id = 2; name = "Mechanical" |}\r
    {| id = 3; name = "Civil" |}\r
    {| id = 4; name = "Biomedical" |}\r
    {| id = 5; name = "Nuclear" |}\r
    {| id = 6; name = "Industrial" |}\r
    {| id = 7; name = "Chemical" |}\r
    {| id = 8; name = "Agricultural" |}\r
    {| id = 9; name = "Electrical" |}\r
]\r
let majorId, setMajorId = React.useState<int option>(None)\r
React.fragment [\r
    Html.p $"Topic id: {majorId}"\r
    Spectrum.ComboBox [\r
        ComboBox.label "Pick an engineering major"\r
        ComboBox.placeholder "Search engineering majors..."\r
        ComboBox.defaultItems options\r
        ComboBox.onSelectionChange setMajorId\r
        ComboBox.itemTemplate (fun item ->\r
            let name: string = item?name\r
            Spectrum.Item name\r
        )\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e;const t=f([{id:1,name:"Aerospace"},{id:2,name:"Mechanical"},{id:3,name:"Civil"},{id:4,name:"Biomedical"},{id:5,name:"Nuclear"},{id:6,name:"Industrial"},{id:7,name:"Chemical"},{id:8,name:"Agricultural"},{id:9,name:"Electrical"}]),l=B(void 0);return E(n.exports.createElement(n.exports.Fragment,{},(e=`Topic id: ${l[0]}`,n.exports.createElement("p",{children:[e]})),r.createElement(je,{label:"Pick an engineering major",placeholder:"Search engineering majors...",defaultItems:Array.from(t),onSelectionChange:l[1],children:i=>{const a=i.name;return r.createElement(A,{children:a})}})))}))})}function wm(){return n.exports.createElement(m,{title:"Value",code:`let names = [\r
    "Adobe Photoshop"; "Adobe XD"; "Adobe InDesign";\r
    "Adobe AfterEffects"; "Adobe Illustrator";\r
    "Adobe Lightroom"; "Adobe Premiere Pro";\r
    "Adobe Fresco"; "Adobe Dreamweaver"\r
]\r
let options = names |> List.mapi (fun idx name -> {| id = idx + 1; name = name |})\r
let value, setValue = React.useState("Adobe XD")\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.wrap true\r
    Flex.children [\r
        Spectrum.ComboBox [\r
            ComboBox.label "Adobe product (Uncontrolled)"\r
            ComboBox.defaultItems options\r
            ComboBox.defaultInputValue "Adobe XD"\r
            ComboBox.itemTemplate (fun item ->\r
                let name: string = item?name\r
                Spectrum.Item name\r
            )\r
        ]\r
        Spectrum.ComboBox [\r
            ComboBox.label "Adobe product (Controlled)"\r
            ComboBox.defaultItems options\r
            ComboBox.inputValue value\r
            ComboBox.onInputChange setValue\r
            ComboBox.itemTemplate (fun item ->\r
                let name: string = item?name\r
                Spectrum.Item name\r
            )\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=wr((l,i)=>({id:l+1,name:i}),f(["Adobe Photoshop","Adobe XD","Adobe InDesign","Adobe AfterEffects","Adobe Illustrator","Adobe Lightroom","Adobe Premiere Pro","Adobe Fresco","Adobe Dreamweaver"])),t=B("Adobe XD");return E(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(je,{label:"Adobe product (Uncontrolled)",defaultItems:Array.from(e),defaultInputValue:"Adobe XD",children:l=>{const i=l.name;return r.createElement(A,{children:i})}}),r.createElement(je,{label:"Adobe product (Controlled)",defaultItems:Array.from(e),inputValue:t[0],onInputChange:t[1],children:l=>{const i=l.name;return r.createElement(A,{children:i})}})])}))}))})}function km(){return n.exports.createElement(m,{title:"Custom value",code:`let options = [\r
    {| name = "Apple" |}\r
    {| name = "Banana" |}\r
    {| name = "Orange" |}\r
    {| name = "Grapes" |}\r
    {| name = "Watermelon" |}\r
    {| name = "Pear" |}\r
]\r
React.fragment [\r
    Html.p "Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list feel free to write your own selection."\r
    Spectrum.ComboBox [\r
        ComboBox.label "Preferred fruit"\r
        ComboBox.defaultItems options\r
        ComboBox.allowsCustomValue true\r
        ComboBox.itemTemplate (fun item ->\r
            let name: string = item?name\r
            makeItem name name\r
        )\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=f([{name:"Apple"},{name:"Banana"},{name:"Orange"},{name:"Grapes"},{name:"Watermelon"},{name:"Pear"}]);return E(n.exports.createElement(n.exports.Fragment,{},n.exports.createElement("p",{children:["Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list feel free to write your own selection."]}),r.createElement(je,{label:"Preferred fruit",defaultItems:Array.from(e),allowsCustomValue:!0,children:t=>{const l=t.name;return b(l,l)}})))}))})}function Tm(){return n.exports.createElement(m,{title:"Sections",code:`Spectrum.ComboBox [\r
    ComboBox.label "Preferred fruit or vegetable"\r
    ComboBox.children [\r
        Spectrum.Section [\r
            Section.title "Fruit"\r
            Section.children [\r
                makeItem "Apple" "Apple"\r
                makeItem "Banana" "Banana"\r
                makeItem "Orange" "Orange"\r
            ]\r
        ]\r
        Spectrum.Section [\r
            Section.title "Vegetables"\r
            Section.children [\r
                makeItem "Cabbage" "Cabbage"\r
                makeItem "Lettuce" "Lettuce"\r
                makeItem "Carrots" "Carrots"\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(je,{label:"Preferred fruit or vegetable",children:[r.createElement(ve,{title:"Fruit",children:[b("Apple","Apple"),b("Banana","Banana"),b("Orange","Orange")]}),r.createElement(ve,{title:"Vegetables",children:[b("Cabbage","Cabbage"),b("Lettuce","Lettuce"),b("Carrots","Carrots")]})]}))})}function Fm(){return n.exports.createElement(m,{title:"Events",code:`let options =\r
    [ "Aerospace"; "Mechanical"; "Civil"; "Biomedical"; "Nuclear";\r
    "Industrial"; "Chemical"; "Agricultural"; "Electrical" ]\r
    |> List.mapi (fun idx name -> {| id = idx + 1; name = name |})\r
let value, setValue = React.useState("")\r
let majorId, setMajorId = React.useState(0)\r
\r
let onSelectionChange id = setMajorId(id)\r
let onInputChange value = setValue(value)\r
\r
React.fragment [\r
    Html.p $"Current selected major id: {majorId}"\r
    Html.p $"Current input text: {value}"\r
    Spectrum.ComboBox [\r
        ComboBox.label "Pick an engineering major"\r
        ComboBox.defaultItems options\r
        ComboBox.selectedKey majorId\r
        ComboBox.onSelectionChange onSelectionChange\r
        ComboBox.onInputChange onInputChange\r
        ComboBox.itemTemplate (fun item ->\r
            let name: string = item?name\r
            Spectrum.Item name\r
        )\r
    ]\r
]`,description:o(),elements:C(x(()=>{let e,t;const l=wr((s,d)=>({id:s+1,name:d}),f(["Aerospace","Mechanical","Civil","Biomedical","Nuclear","Industrial","Chemical","Agricultural","Electrical"])),i=B(""),a=B(0),c=a[0]|0;return E(n.exports.createElement(n.exports.Fragment,{},(e=`Current selected major id: ${c}`,n.exports.createElement("p",{children:[e]})),(t=`Current input text: ${i[0]}`,n.exports.createElement("p",{children:[t]})),r.createElement(je,{label:"Pick an engineering major",defaultItems:Array.from(l),selectedKey:c,onSelectionChange:s=>{a[1](s)},onInputChange:s=>{i[1](s)},children:s=>{const d=s.name;return r.createElement(A,{children:d})}})))}))})}function Im(){let e,t,l,i;return n.exports.createElement(m,{title:"Complex items",code:`Spectrum.ComboBox [\r
    ComboBox.label "Select action"\r
    ComboBox.children [\r
        Spectrum.Item [\r
            Item.textValue "Add to queue"\r
            Item.children [\r
                Spectrum.Icon.Add []\r
                Spectrum.Text "Add to queue"\r
                Spectrum.Text [\r
                    Text.slot "description"\r
                    Text.content "Add to current watch queue"\r
                ]\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.textValue "Add review"\r
            Item.children [\r
                Spectrum.Icon.Draw []\r
                Spectrum.Text "Add review"\r
                Spectrum.Text [\r
                    Text.slot "description"\r
                    Text.content "Post a review for the episode"\r
                ]\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.textValue "Subscribe to series"\r
            Item.children [\r
                Spectrum.Icon.Bell []\r
                Spectrum.Text "Subscribe to series"\r
                Spectrum.Text [\r
                    Text.slot "description"\r
                    Text.content "Add series to your subscription list and be notified when a new episode airs"\r
                ]\r
            ]\r
        ]\r
        Spectrum.Item [\r
            Item.textValue "Report"\r
            Item.children [\r
                Spectrum.Icon.Alert []\r
                Spectrum.Text "Report"\r
                Spectrum.Text [\r
                    Text.slot "description"\r
                    Text.content "Report an issue/violation"\r
                ]\r
            ]\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(je,{label:"Select action",children:[r.createElement(A,{textValue:"Add to queue",children:r.Children.toArray([(e=$l,r.createElement(e,{})),r.createElement(y,{children:r.Children.toArray(["Add to queue"])}),r.createElement(y,{slot:"description",children:r.Children.toArray(["Add to current watch queue"])})])}),r.createElement(A,{textValue:"Add review",children:r.Children.toArray([(t=sr,r.createElement(t,{})),r.createElement(y,{children:r.Children.toArray(["Add review"])}),r.createElement(y,{slot:"description",children:r.Children.toArray(["Post a review for the episode"])})])}),r.createElement(A,{textValue:"Subscribe to series",children:r.Children.toArray([(l=pn,r.createElement(l,{})),r.createElement(y,{children:r.Children.toArray(["Subscribe to series"])}),r.createElement(y,{slot:"description",children:r.Children.toArray(["Add series to your subscription list and be notified when a new episode airs"])})])}),r.createElement(A,{textValue:"Report",children:r.Children.toArray([(i=xt,r.createElement(i,{})),r.createElement(y,{children:r.Children.toArray(["Report"])}),r.createElement(y,{slot:"description",children:r.Children.toArray(["Report an issue/violation"])})])})]}))})}function Bm(){const e=f(["ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ComboBox.html"})," for more details."]);return n.exports.createElement(V,{title:"ComboBox",description:e,examples:f([n.exports.createElement(Am,null),n.exports.createElement(vm,null),n.exports.createElement(wm,null),n.exports.createElement(km,null),n.exports.createElement(Tm,null),n.exports.createElement(Fm,null),n.exports.createElement(Im,null)])})}function Dm(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Picker [\r
    Picker.label "Choose frequency"\r
    Picker.children [\r
        makeItem "rarely" "Rarely"\r
        makeItem "sometimes" "Sometimes"\r
        makeItem "always" "Always"\r
    ]\r
]`,description:o(),elements:u(r.createElement(fr,{label:"Choose frequency",children:[b("rarely","Rarely"),b("sometimes","Sometimes"),b("always","Always")]}))})}function Vm(){return n.exports.createElement(m,{title:"Content",code:`let options =\r
    [ "Aardvark"; "Cat"; "Dog"; "Kangaroo";\r
    "Koala"; "Penguin"; "Snake"; "Turtle"; "Wombat" ]\r
    |> List.mapi (fun idx animal -> {| id = idx + 1; name = animal |})\r
let animalId, setAnimalId = React.useState<int option>(None)\r
React.fragment [\r
    Spectrum.Picker [\r
        Picker.label "Pick an animal"\r
        Picker.items options\r
        Picker.onSelectionChange setAnimalId\r
        Picker.itemTemplate (fun item ->\r
            let name: string = item?name\r
            Spectrum.Item name\r
        )\r
    ]\r
    Html.p $"Animal id: {animalId}"\r
]`,description:o(),elements:C(x(()=>{let e;const t=wr((i,a)=>({id:i+1,name:a}),f(["Aardvark","Cat","Dog","Kangaroo","Koala","Penguin","Snake","Turtle","Wombat"])),l=B(void 0);return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(fr,{label:"Pick an animal",items:Array.from(t),onSelectionChange:l[1],children:i=>{const a=i.name;return r.createElement(A,{children:a})}}),(e=`Animal id: ${l[0]}`,n.exports.createElement("p",{children:[e]}))))}))})}function Nm(){return n.exports.createElement(m,{title:"Selection",code:`let options = [\r
    {| name = "Koala" |}\r
    {| name = "Kangaroo" |}\r
    {| name = "Platypus" |}\r
    {| name = "Bald Eagle" |}\r
    {| name = "Bison" |}\r
    {| name = "Skunk" |}\r
]\r
let animal, setAnimal = React.useState("Bison")\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.wrap true\r
    Flex.children [\r
        Spectrum.Picker [\r
            Picker.label "Pick an animal (Uncontrolled)"\r
            Picker.items options\r
            Picker.defaultSelectedKey "Bison"\r
            Picker.itemTemplate (fun item ->\r
                let name: string = item?name\r
                makeItem name name\r
            )\r
        ]\r
        Spectrum.Picker [\r
            Picker.label "Pick an animal (Controlled)"\r
            Picker.items options\r
            Picker.selectedKey animal\r
            Picker.onSelectionChange setAnimal\r
            Picker.itemTemplate (fun item ->\r
                let name: string = item?name\r
                makeItem name name\r
            )\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=f([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),t=B("Bison");return E(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(fr,{label:"Pick an animal (Uncontrolled)",items:Array.from(e),defaultSelectedKey:"Bison",children:l=>{const i=l.name;return b(i,i)}}),r.createElement(fr,{label:"Pick an animal (Controlled)",items:Array.from(e),selectedKey:t[0],onSelectionChange:t[1],children:l=>{const i=l.name;return b(i,i)}})])}))}))})}function Mm(){const e=f(["Pickers allow users to choose a single option from a collapsible list of options when space is limited.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Picker.html"})," for more details."]);return n.exports.createElement(V,{title:"Picker",description:e,examples:f([n.exports.createElement(Dm,null),n.exports.createElement(Vm,null),n.exports.createElement(Nm,null)])})}function Rm(){return n.exports.createElement(m,{title:"Default example",code:'Spectrum.RangeSlider [\r\n    RangeSlider.label "Range"\r\n    RangeSlider.defaultValue {| start = 12; ``end`` = 36 |}\r\n]',description:o(),elements:u(r.createElement(St,{label:"Range",defaultValue:{end:36,start:12}}))})}function zm(){return n.exports.createElement(m,{title:"Value",code:'let value, setValue = React.useState({| start = 25; ``end`` = 75 |})\r\nSpectrum.Flex [\r\n    Flex.gap (DimValue.Size Size150)\r\n    Flex.wrap true\r\n    Flex.children [\r\n        Spectrum.RangeSlider [\r\n            RangeSlider.label "Range (Uncontrolled)"\r\n            RangeSlider.defaultValue {| start = 25; ``end`` = 75 |}\r\n        ]\r\n        Spectrum.RangeSlider [\r\n            RangeSlider.label "Range (Controlled)"\r\n            RangeSlider.value {| start = value.start; ``end`` = value.``end`` |}\r\n            RangeSlider.onChange (fun x -> setValue {| start = x.start; ``end`` = x.``end`` |})\r\n        ]\r\n    ]\r\n]',description:o(),elements:C(x(()=>{const e=B({end:75,start:25}),t=e[0];return E(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(St,{label:"Range (Uncontrolled)",defaultValue:{end:75,start:25}}),r.createElement(St,{label:"Range (Controlled)",value:{end:t.end,start:t.start},onChange:l=>{e[1]({end:l.end,start:l.start})}})])}))}))})}function Pm(){return n.exports.createElement(m,{title:"Different scale",code:`Spectrum.RangeSlider [\r
    RangeSlider.label "Range"\r
    RangeSlider.minValue 50\r
    RangeSlider.maxValue 150\r
    RangeSlider.defaultValue {| start = 75; \`\`end\`\` = 100 |}\r
]`,description:o(),elements:u(r.createElement(St,{label:"Range",minValue:50,maxValue:150,defaultValue:{end:100,start:75}}))})}function Lm(){return n.exports.createElement(m,{title:"Number format",code:'Spectrum.RangeSlider [\r\n    RangeSlider.label "Price range"\r\n    RangeSlider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "JPY")\r\n    RangeSlider.defaultValue {| start = 75; ``end`` = 100 |}\r\n]',description:o(),elements:u(r.createElement(St,{label:"Price range",formatOptions:{localeMatcher:void 0,style:"currency",currency:"JPY",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},defaultValue:{end:100,start:75}}))})}function _m(){return n.exports.createElement(m,{title:"Using the getValueLabel prop",code:'Spectrum.RangeSlider [\r\n    RangeSlider.label "Search radius"\r\n    RangeSlider.maxValue 200\r\n    RangeSlider.defaultValue {| start = 15; ``end`` = 60 |}\r\n    RangeSlider.getValueLabel (fun m -> $"{m.start}m to {m.``end``}m away")\r\n]',description:o(),elements:u(r.createElement(St,{label:"Search radius",maxValue:200,defaultValue:{end:60,start:15},getValueLabel:e=>`${e.start}m to ${e.end}m away`}))})}function Gm(){const e=f(["RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RangeSlider.html"})," for more details."]);return n.exports.createElement(V,{title:"RangeSlider",description:e,examples:f([n.exports.createElement(Rm,null),n.exports.createElement(zm,null),n.exports.createElement(Pm,null),n.exports.createElement(Lm,null),n.exports.createElement(_m,null)])})}function Hm(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Slider [\r
    Slider.label "Cookies to buy"\r
    Slider.defaultValue 12\r
]`,description:o(),elements:u(r.createElement(gr,{label:"Cookies to buy",defaultValue:12}))})}function Om(){return n.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState(25)\r
Spectrum.Flex [\r
    Flex.gap (DimValue.Size Size150)\r
    Flex.wrap true\r
    Flex.children [\r
        Spectrum.Slider [\r
            Slider.label "Cookies to buy (Uncontrolled)"\r
            Slider.defaultValue 25\r
        ]\r
        Spectrum.Slider [\r
            Slider.label "Cookies to buy (Controlled)"\r
            Slider.value value\r
            Slider.onChange setValue\r
        ]\r
    ]\r
]`,description:o(),elements:C(x(()=>{const e=B(25);return E(r.createElement(F,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(gr,{label:"Cookies to buy (Uncontrolled)",defaultValue:25}),r.createElement(gr,{label:"Cookies to buy (Controlled)",value:e[0],onChange:e[1]})])}))}))})}function Wm(){return n.exports.createElement(m,{title:"Number format",code:`Spectrum.Slider [\r
    Slider.label "Currency"\r
    Slider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "USD")\r
    Slider.defaultValue 60\r
]`,description:o(),elements:u(r.createElement(gr,{label:"Currency",formatOptions:{localeMatcher:void 0,style:"currency",currency:"USD",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},defaultValue:60}))})}function jm(){const e=f(["Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Slider.html"})," for more details."]);return n.exports.createElement(V,{title:"Slider",description:e,examples:f([n.exports.createElement(Hm,null),n.exports.createElement(Om,null),n.exports.createElement(Wm,null)])})}function qm(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Meter [\r
    Meter.label "Storage space"\r
    Meter.variant MeterVariant.Positive\r
    Meter.value 35\r
]`,description:o(),elements:u(r.createElement(Ut,{label:"Storage space",variant:"positive",value:35}))})}function Um(){return n.exports.createElement(m,{title:"Warning example",code:`Spectrum.Meter [\r
    Meter.label "Progress"\r
    Meter.marginBottom (DimValue.Size Size300)\r
    Meter.value 25\r
    Meter.valueLabel "1 of 4"\r
    Meter.variant MeterVariant.Warning\r
]`,description:o(),elements:u(r.createElement(Ut,{label:"Progress",marginBottom:"size-300",value:25,valueLabel:"1 of 4",variant:"warning"}))})}function Km(){return n.exports.createElement(m,{title:"Labels and formatting",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.maxWidth (DimValue.Size Size3000)\r
    Flex.gap (DimValue.Size Size300)\r
    Flex.children [\r
        Spectrum.Meter [\r
            Meter.label "Space used"\r
            Meter.showValueLabel false\r
            Meter.value 90\r
            Meter.variant MeterVariant.Critical\r
        ]\r
        Spectrum.Meter [\r
            Meter.label "Space used"\r
            Meter.valueLabel "54 of 60GB"\r
            Meter.value 90\r
            Meter.variant MeterVariant.Critical\r
        ]\r
        Spectrum.Meter [\r
            Meter.label "Space used"\r
            Meter.value 89.123\r
            Meter.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Percent, minimumFractionDigits = 2)\r
            Meter.variant MeterVariant.Critical\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"column",maxWidth:"size-3000",gap:"size-300",children:r.Children.toArray([r.createElement(Ut,{label:"Space used",showValueLabel:!1,value:90,variant:"critical"}),r.createElement(Ut,{label:"Space used",valueLabel:"54 of 60GB",value:90,variant:"critical"}),r.createElement(Ut,{label:"Space used",value:89.123,formatOptions:{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:2,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},variant:"critical"})])}))})}function Jm(){const e=f(["Meters are visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Meter.html"})," for more details."]);return n.exports.createElement(V,{title:"Meter",description:e,examples:f([n.exports.createElement(qm,null),n.exports.createElement(Um,null),n.exports.createElement(Km,null)])})}function $m(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.ProgressBar [\r
    ProgressBar.label "Loading..."\r
    ProgressBar.value 50\r
]`,description:o(),elements:u(r.createElement(_r,{label:"Loading...",value:50}))})}function Ym(){return n.exports.createElement(m,{title:"Indeterminate",code:`Spectrum.ProgressBar [\r
    ProgressBar.label "Loading..."\r
    ProgressBar.isIndeterminate true\r
]`,description:o(),elements:u(r.createElement(_r,{label:"Loading...",isIndeterminate:!0}))})}function Xm(){return n.exports.createElement(m,{title:"Over background",code:`Spectrum.View [\r
    View.backgroundColor (BackgroundColorValue.Color Positive)\r
    View.padding (DimValue.Size Size300)\r
    View.children [\r
        Spectrum.ProgressBar [\r
            ProgressBar.overBackgroundVariant\r
            ProgressBar.label "Loading..."\r
            ProgressBar.value 5\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(R,{backgroundColor:"positive",padding:"size-300",children:r.Children.toArray([r.createElement(_r,{variant:"overBackground",label:"Loading...",value:5})])}))})}function Zm(){const e=f(["ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressBar.html"})," for more details."]);return n.exports.createElement(V,{title:"ProgressBar",description:e,examples:f([n.exports.createElement($m,null),n.exports.createElement(Ym,null),n.exports.createElement(Xm,null)])})}function Qm(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.ProgressCircle [\r
    ProgressCircle.ariaLabel "Loading..."\r
    ProgressCircle.value 50\r
]`,description:o(),elements:u(r.createElement(Gr,{["aria-label"]:"Loading...",value:50}))})}function ed(){return n.exports.createElement(m,{title:"Indeterminate",code:`Spectrum.ProgressCircle [\r
    ProgressCircle.ariaLabel "Loading..."\r
    ProgressCircle.isIndeterminate true\r
]`,description:o(),elements:u(r.createElement(Gr,{["aria-label"]:"Loading...",isIndeterminate:!0}))})}function td(){return n.exports.createElement(m,{title:"Over background",code:`Spectrum.View [\r
    View.backgroundColor (BackgroundColorValue.Color Positive)\r
    View.padding (DimValue.Size Size300)\r
    View.children [\r
        Spectrum.ProgressCircle [\r
            ProgressCircle.overBackgroundVariant\r
            ProgressCircle.isIndeterminate true\r
            ProgressCircle.ariaLabel "Loading..."\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(R,{backgroundColor:"positive",padding:"size-300",children:r.Children.toArray([r.createElement(Gr,{variant:"overBackground",isIndeterminate:!0,["aria-label"]:"Loading..."})])}))})}function rd(){const e=f(["ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressCircle.html"})," for more details."]);return n.exports.createElement(V,{title:"ProgressCircle",description:e,examples:f([n.exports.createElement(Qm,null),n.exports.createElement(ed,null),n.exports.createElement(td,null)])})}function nd(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.StatusLight [\r
    StatusLight.variant StatusLightVariant.Positive\r
    StatusLight.content "Ready"\r
]`,description:o(),elements:u(r.createElement(Yl,{variant:"positive",children:"Ready"}))})}function ld(){const e=f(["Status lights are used to color code categories and labels commonly found in data visualization. When status lights have a semantic meaning, they should use semantic variant colors.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/StatusLight.html"})," for more details."]);return n.exports.createElement(V,{title:"StatusLight",description:e,examples:u(n.exports.createElement(nd,null))})}function id(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Content "Content is king"\r
`,description:o(),elements:u(r.createElement(J,{children:r.Children.toArray(["Content is king"])}))})}function ad(){const e=f(["Content represents the primary content within a Spectrum container.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Content.html"})," for more details."]);return n.exports.createElement(V,{title:"Content",description:e,examples:u(n.exports.createElement(id,null))})}function od(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size125)\r
    Flex.children [\r
        Spectrum.Text "Content above"\r
        Spectrum.Divider ()\r
        Spectrum.Text "Content below"\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"column",gap:"size-125",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Content above"])}),n.exports.createElement(U,o()),r.createElement(y,{children:r.Children.toArray(["Content below"])})])}))})}function cd(){return n.exports.createElement(m,{title:"Vertical",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Row\r
    Flex.gap (DimValue.Size Size125)\r
    Flex.children [\r
        Spectrum.Text "Content left"\r
        Spectrum.Divider [\r
            Divider.orientation Orientation.Vertical\r
        ]\r
        Spectrum.Text "Content right"\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"row",gap:"size-125",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Content left"])}),r.createElement(U,{orientation:"vertical"}),r.createElement(y,{children:r.Children.toArray(["Content right"])})])}))})}function sd(){return n.exports.createElement(m,{title:"Size",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size125)\r
    Flex.children [\r
        Spectrum.Text "Content above large Divider"\r
        Spectrum.Divider [ Divider.size DividerSize.L ]\r
        Spectrum.Text "Content above medium Divider"\r
        Spectrum.Divider [ Divider.size DividerSize.M ]\r
        Spectrum.Text "Content above small Divider"\r
        Spectrum.Divider [ Divider.size DividerSize.S ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(F,{direction:"column",gap:"size-125",children:r.Children.toArray([r.createElement(y,{children:r.Children.toArray(["Content above large Divider"])}),r.createElement(U,{size:"L"}),r.createElement(y,{children:r.Children.toArray(["Content above medium Divider"])}),r.createElement(U,{size:"M"}),r.createElement(y,{children:r.Children.toArray(["Content above small Divider"])}),r.createElement(U,{size:"S"})])}))})}function ud(){const e=f(["Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Divider.html"})," for more details."]);return n.exports.createElement(V,{title:"Divider",description:e,examples:f([n.exports.createElement(od,null),n.exports.createElement(cd,null),n.exports.createElement(sd,null)])})}function md(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Footer "\xA9 All rights reserved."\r
`,description:o(),elements:u(r.createElement(gn,{children:r.Children.toArray(["\xA9 All rights reserved."])}))})}function dd(){const e=f(["Footer represents a footer within a Spectrum container.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Footer.html"})," for more details."]);return n.exports.createElement(V,{title:"Footer",description:e,examples:u(n.exports.createElement(md,null))})}function pd(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Header "Header example..."\r
`,description:o(),elements:u(r.createElement(Lr,{children:r.Children.toArray(["Header example..."])}))})}function hd(){const e=f(["Header represents a header within a Spectrum container.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Header.html"})," for more details."]);return n.exports.createElement(V,{title:"Header",description:e,examples:u(n.exports.createElement(pd,null))})}function fd(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Heading [\r
    Heading.level 4\r
    Heading.content "A level 4 heading..."\r
]`,description:o(),elements:u(r.createElement(K,{level:4,children:"A level 4 heading..."}))})}function gd(){const e=f(["Heading is used to create various levels of typographic hierarchies.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Heading.html"})," for more details."]);return n.exports.createElement(V,{title:"Heading",description:e,examples:u(n.exports.createElement(fd,null))})}function xd(){let e;return n.exports.createElement(m,{title:"No search results",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.NoSearchResults []\r
    Spectrum.Heading "No matching results"\r
    Spectrum.Content "Try another search"\r
]`,description:o(),elements:u(n.exports.createElement(bt,o(),(e=Xl,r.createElement(e,{})),r.createElement(K,{children:r.Children.toArray(["No matching results"])}),r.createElement(J,{children:r.Children.toArray(["Try another search"])})))})}function Ed(){let e;return n.exports.createElement(m,{title:"403 forbidden",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.Unauthorized []\r
    Spectrum.Heading "Error 403: Access not allowed"\r
    Spectrum.Content "You do not have permission to access this page. Try checking the URL or visit a different page."\r
]`,description:o(),elements:u(n.exports.createElement(bt,o(),(e=Zl,r.createElement(e,{})),r.createElement(K,{children:r.Children.toArray(["Error 403: Access not allowed"])}),r.createElement(J,{children:r.Children.toArray(["You do not have permission to access this page. Try checking the URL or visit a different page."])})))})}function Sd(){let e;return n.exports.createElement(m,{title:"404 not found",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.NotFound []\r
    Spectrum.Heading "Error 404: Page not found"\r
    Spectrum.Content "This page isn't available. Try checking the URL or visit a different page."\r
]`,description:o(),elements:u(n.exports.createElement(bt,o(),(e=Ql,r.createElement(e,{})),r.createElement(K,{children:r.Children.toArray(["Error 404: Page not found"])}),r.createElement(J,{children:r.Children.toArray(["This page isn't available. Try checking the URL or visit a different page."])})))})}function bd(){let e;return n.exports.createElement(m,{title:"500 internal server error",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.Error []\r
    Spectrum.Heading "Error 500: Internal server error"\r
    Spectrum.Content "Something went wrong. Please try again later."\r
]`,description:o(),elements:u(n.exports.createElement(bt,o(),(e=ei,r.createElement(e,{})),r.createElement(K,{children:r.Children.toArray(["Error 500: Internal server error"])}),r.createElement(J,{children:r.Children.toArray(["Something went wrong. Please try again later."])})))})}function yd(){let e;return n.exports.createElement(m,{title:"503 service unavailable",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.Unavailable []\r
    Spectrum.Heading "Error 503: Service unavailble"\r
    Spectrum.Content "This page isn't working. Try a different page or try again later."\r
]`,description:o(),elements:u(n.exports.createElement(bt,o(),(e=ti,r.createElement(e,{})),r.createElement(K,{children:r.Children.toArray(["Error 503: Service unavailble"])}),r.createElement(J,{children:r.Children.toArray(["This page isn't working. Try a different page or try again later."])})))})}function Cd(){let e;return n.exports.createElement(m,{title:"504 server timeout",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.Timeout []\r
    Spectrum.Heading "Error 504: Server timeout"\r
    Spectrum.Content "The server took too long. Please try again later."\r
]`,description:o(),elements:u(n.exports.createElement(bt,o(),(e=ri,r.createElement(e,{})),r.createElement(K,{children:r.Children.toArray(["Error 504: Server timeout"])}),r.createElement(J,{children:r.Children.toArray(["The server took too long. Please try again later."])})))})}function Ad(){const e=f(["An IllustratedMessage displays an illustration and a message, usually for an empty state or an error page.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html"})," for more details."]);return n.exports.createElement(V,{title:"IllustratedMessage",description:e,examples:f([n.exports.createElement(xd,null),n.exports.createElement(Ed,null),n.exports.createElement(Sd,null),n.exports.createElement(bd,null),n.exports.createElement(yd,null),n.exports.createElement(Cd,null)])})}function vd(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Image [\r
    Image.src "https://i.imgur.com/Z7AzH2c.png"\r
    Image.alt "Sky and roof"\r
]`,description:o(),elements:u(r.createElement(xn,{src:"https://i.imgur.com/Z7AzH2c.png",alt:"Sky and roof"}))})}function wd(){const e=f(["Image is used to insert and display an image within a component.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Image.html"})," for more details."]);return n.exports.createElement(V,{title:"Image",description:e,examples:u(n.exports.createElement(vd,null))})}function kd(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Keyboard "\u2318V"\r
`,description:o(),elements:u(r.createElement(pr,{children:r.Children.toArray(["\u2318V"])}))})}function Td(){const e=f(["Keyboard represents text that specifies a keyboard command.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Keyboard.html"})," for more details."]);return n.exports.createElement(V,{title:"Keyboard",description:e,examples:u(n.exports.createElement(kd,null))})}function Fd(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Text "A piece of text..."\r
`,description:o(),elements:u(r.createElement(y,{children:r.Children.toArray(["A piece of text..."])}))})}function Id(){const e=f(["Text represents text with no specific semantic meaning.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Text.html"})," for more details."]);return n.exports.createElement(V,{title:"Text",description:e,examples:u(n.exports.createElement(Fd,null))})}function Bd(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.View [\r
    View.width 200\r
    View.borderColor BorderColorValue.Hover\r
    View.borderWidth BorderSizeValue.Thicker\r
    View.padding (DimValue.Size Size250)\r
    View.borderRadius BorderRadiusValue.Medium\r
    View.backgroundColor (\r
        ResponsiveProp.make(\r
            base' = BackgroundColorValue.Color StaticGreen400,\r
            S = BackgroundColorValue.LabelGray,\r
            M = BackgroundColorValue.Color StaticBlue300,\r
            L = BackgroundColorValue.Color StaticRed400\r
        )\r
    )\r
    View.children [\r
        Spectrum.ActionButton [\r
            ActionButton.content "Click me!"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(R,{width:200,borderColor:"hover",borderWidth:"thicker",padding:"size-250",borderRadius:"medium",backgroundColor:{base:q("static-green-400"),S:q("label-gray"),M:q("static-blue-300"),L:q("static-red-400")},children:r.Children.toArray([r.createElement(N,{children:"Click me!"})])}))})}function Dd(){const e=f(["View is a general purpose container with no specific semantics that can be used for custom styling purposes. It supports Spectrum style props to ensure consistency with other Spectrum components.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/View.html"})," for more details."]);return n.exports.createElement(V,{title:"View",description:e,examples:u(n.exports.createElement(Bd,null))})}function Vd(){return n.exports.createElement(m,{title:"Default example",code:`Spectrum.Well [\r
    Well.content "Better a little which is well done, than a great deal imperfectly."\r
]`,description:o(),elements:u(r.createElement(Vr,{children:"Better a little which is well done, than a great deal imperfectly."}))})}function Nd(){let e;return n.exports.createElement(m,{title:"Another example",code:`Spectrum.Well [\r
    Well.role "region"\r
    Well.ariaLabeledBy "well-label"\r
    Well.children [\r
        Html.h3 [\r
            prop.id "well-label"\r
            prop.children [ Html.text "Shipping Address" ]\r
        ]\r
        Html.p [\r
            Html.text "601 Townsend Street"\r
            Html.br []\r
            Html.text " San Francisco, CA 94103"\r
        ]\r
    ]\r
]`,description:o(),elements:u(r.createElement(Vr,{role:"region",["aria-labelledby"]:"well-label",children:r.Children.toArray([n.exports.createElement("h3",{id:"well-label",children:r.Children.toArray(["Shipping Address"])}),(e=f(["601 Townsend Street",n.exports.createElement("br",{})," San Francisco, CA 94103"]),n.exports.createElement("p",{children:r.Children.toArray(Array.from(e))}))])}))})}function Md(){const e=f(["A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Well.html"})," for more details."]);return n.exports.createElement(V,{title:"Well",description:e,examples:f([n.exports.createElement(Vd,null),n.exports.createElement(Nd,null)])})}const Rd=(()=>{let e=!1;try{(typeof window!="undefined"?typeof window.addEventListener=="function":!1)&&(window.addEventListener("testPassiveEventSupport",t=>{},{passive:!0}),window.removeEventListener("testPassiveEventSupport",t=>{}))}catch{}return e})();function un(e){return Ea(t=>(t.passive?!Rd:!1)?{capture:t.capture,once:t.once,passive:!1}:t,e)}function mn(e){return Sa(t=>{if(t.capture)return{capture:!0}},e)}function Lt(e,t){if(t.indexOf(e)===0)return t}function vl(e,t){if(pa(t,e))return t}function zd(e){return e===1?t=>{let l,i,a,c,s,d;return l=Lt("/",t),l!=null?(i=l,"#"+i):(a=Lt("#/",t),a!=null?(c=a,c):(s=Lt("#",t),s!=null?(d=s,"#/"+Xn(d,1,d.length-1)):"#/"+t))}:t=>{let l,i;return l=Lt("/",t),l!=null?(i=l,i):"/"+t}}function I(e,t){return zd(t)(vr("/",Fa(l=>((l.indexOf("?")>=0?!0:l.indexOf("#")===0)?!0:l.indexOf("/")===0)?l:encodeURIComponent(l),e)))}function Pd(e,t,l){t===1?history.pushState(void 0,"",I(e,l)):history.replaceState(void 0,"",I(e,l));const i=document.createEvent("CustomEvent");i.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(i)}function wl(e,t){return Ta(l=>{if(ha(l))return o();{const i=ga(l,"#");if(i==="?")return o();if(Lt("?",i)!=null)return u(i);{const a=i.split("?");if(el((c,s)=>c===s,a,null)?!1:a.length===1){const c=a[0];return u(decodeURIComponent(c))}else if(el((c,s)=>c===s,a,null)?!1:a.length===2)if(a[1]===""){const c=a[0];return u(decodeURIComponent(c))}else{const c=a[0],s=a[1];return f([decodeURIComponent(c),"?"+s])}else return o()}}},f(fa(Lt("#",e)!=null?Xn(e,1,e.length-1):t===1&&(vl("#",e)!=null||vl("#/",e)!=null)?"":e,["/"],null,0)))}function Ld(e,t,l){return t(wl(e===2?window.location.pathname+window.location.search:window.location.hash,e))}const _d=Qo(e=>{const t=Ir(p=>{const g=rr(e.onUrlChanged,S=>{});Ld(rr(e.hashMode,1),g)});if(window.navigator.userAgent.indexOf("Trident")>=0?!0:window.navigator.userAgent.indexOf("MSIE")>=0){const p="hashchange",g=G=>{t(G)},S=void 0,T=ie(()=>un(S),[S]),M=ie(()=>mn(S),[S]),O=ie(()=>G=>{g(G)},[g]);cn(Ir(()=>(T==null?window.addEventListener(p,O):window.addEventListener(p,O,T),ar(()=>{M==null?window.removeEventListener(p,O):window.removeEventListener(p,O,M)}))))}else{const p="popstate",g=t,S=void 0,T=ie(()=>un(S),[S]),M=ie(()=>mn(S),[S]),O=ie(()=>G=>{g(G)},[g]);cn(Ir(()=>(T==null?window.addEventListener(p,O):window.addEventListener(p,O,T),ar(()=>{M==null?window.removeEventListener(p,O):window.removeEventListener(p,O,M)}))))}const l="CUSTOM_NAVIGATION_EVENT",i=t,a=void 0,c=ie(()=>un(a),[a]),s=ie(()=>mn(a),[a]),d=ie(()=>p=>{i(p)},[i]);cn(Ir(()=>(c==null?window.addEventListener(l,d):window.addEventListener(l,d,c),ar(()=>{s==null?window.removeEventListener(l,d):window.removeEventListener(l,d,s)}))));const h=e.application;return h==null?null:h});function he(e,t,l){return r.createElement(ve,{key:e,title:t,children:Array.from(l)})}function D(e,t){return r.createElement(A,{key:e,textValue:t,title:t})}function Gd(){return f([he("general","General",[D("overview","Overview"),D("installation","Installation")]),he("application","Application",[D("provider","Provider")]),he("layout","Layout",[D("flex","Flex"),D("grid","Grid")]),he("buttons","Buttons",[D("actionButton","ActionButton"),D("actionGroup","ActionGroup"),D("button","Button"),D("buttonGroup","ButtonGroup"),D("logicButton","LogicButton"),D("toggleButton","ToggleButton")]),he("collections","Collections",[D("listBox","ListBox"),D("menu","Menu"),D("menuTrigger","MenuTrigger"),D("tableView","TableView")]),he("forms","Forms",[D("checkbox","Checkbox"),D("checkboxGroup","CheckboxGroup"),D("form","Form"),D("numberField","NumberField"),D("radioGroup","RadioGroup"),D("searchField","SearchField"),D("switch","Switch"),D("textArea","TextArea"),D("textField","TextField")]),he("icons","Icons",[D("workflowIcons","Workflow Icons")]),he("navigation","Navigation",[D("breadcrumbs","Breadcrumbs"),D("link","Link"),D("tabs","Tabs")]),he("overlays","Overlays",[D("alertDialog","AlertDialog"),D("dialog","Dialog"),D("dialogContainer","DialogContainer"),D("dialogTrigger","DialogTrigger"),D("tooltip","Tooltip")]),he("pickers","Pickers",[D("comboBox","ComboBox"),D("picker","Picker")]),he("sliders","Sliders",[D("rangeSlider","RangeSlider"),D("slider","Slider")]),he("status","Status",[D("meter","Meter"),D("progressBar","ProgressBar"),D("progressCircle","ProgressCircle"),D("statusLight","StatusLight")]),he("content'","Content",[D("content","Content"),D("divider","Divider"),D("footer","Footer"),D("header","Header"),D("heading","Heading"),D("illustratedMessage","IllustratedMessage"),D("image","Image"),D("keyboard","Keyboard"),D("text","Text"),D("view","View"),D("well","Well")])])}function Hd(e){switch(e){case"installation":return n.exports.createElement(rc,null);case"actionButton":return n.exports.createElement(ac,null);case"actionGroup":return n.exports.createElement(pc,null);case"button":return n.exports.createElement(xc,null);case"buttonGroup":return n.exports.createElement(yc,null);case"toggleButton":return n.exports.createElement(Bc,null);case"provider":return n.exports.createElement(Rc,null);case"flex":return n.exports.createElement(Oc,null);case"grid":return n.exports.createElement(qc,null);case"logicButton":return n.exports.createElement(wc,null);case"listBox":return n.exports.createElement(es,null);case"menu":return n.exports.createElement(ss,null);case"menuTrigger":return n.exports.createElement(ps,null);case"tableView":return n.exports.createElement(xs,null);case"checkbox":return n.exports.createElement(As,null);case"checkboxGroup":return n.exports.createElement(Fs,null);case"form":return n.exports.createElement(Ns,null);case"numberField":return n.exports.createElement(js,null);case"radioGroup":return n.exports.createElement($s,null);case"searchField":return n.exports.createElement(Qs,null);case"switch":return n.exports.createElement(iu,null);case"textArea":return n.exports.createElement(xu,null);case"textField":return n.exports.createElement(Iu,null);case"workflowIcons":return n.exports.createElement(Vu,null);case"breadcrumbs":return n.exports.createElement(Lu,null);case"link":return n.exports.createElement(Ou,null);case"tabs":return n.exports.createElement(Ku,null);case"alertDialog":return n.exports.createElement(Zu,null);case"dialog":return n.exports.createElement(im,null);case"dialogContainer":return n.exports.createElement(sm,null);case"dialogTrigger":return n.exports.createElement(gm,null);case"tooltip":return n.exports.createElement(Cm,null);case"comboBox":return n.exports.createElement(Bm,null);case"picker":return n.exports.createElement(Mm,null);case"rangeSlider":return n.exports.createElement(Gm,null);case"slider":return n.exports.createElement(jm,null);case"meter":return n.exports.createElement(Jm,null);case"progressBar":return n.exports.createElement(Zm,null);case"progressCircle":return n.exports.createElement(rd,null);case"statusLight":return n.exports.createElement(ld,null);case"content":return n.exports.createElement(ad,null);case"divider":return n.exports.createElement(ud,null);case"footer":return n.exports.createElement(dd,null);case"header":return n.exports.createElement(hd,null);case"heading":return n.exports.createElement(gd,null);case"illustratedMessage":return n.exports.createElement(Ad,null);case"image":return n.exports.createElement(wd,null);case"keyboard":return n.exports.createElement(Td,null);case"text":return n.exports.createElement(Id,null);case"view":return n.exports.createElement(Dd,null);case"well":return n.exports.createElement(Md,null);default:return n.exports.createElement(tc,null)}}function kl(e){let t;switch(v(e)?t=52:w(e)===""?v(k(e))?t=0:t=52:w(e)==="installation"?v(k(e))?t=1:t=52:w(e)==="provider"?v(k(e))?t=2:t=52:w(e)==="flex"?v(k(e))?t=3:t=52:w(e)==="grid"?v(k(e))?t=4:t=52:w(e)==="actionbutton"?v(k(e))?t=5:t=52:w(e)==="actiongroup"?v(k(e))?t=6:t=52:w(e)==="button"?v(k(e))?t=7:t=52:w(e)==="buttongroup"?v(k(e))?t=8:t=52:w(e)==="logicbutton"?v(k(e))?t=9:t=52:w(e)==="togglebutton"?v(k(e))?t=10:t=52:w(e)==="listbox"?v(k(e))?t=11:t=52:w(e)==="menu"?v(k(e))?t=12:t=52:w(e)==="menutrigger"?v(k(e))?t=13:t=52:w(e)==="tableview"?v(k(e))?t=14:t=52:w(e)==="checkbox"?v(k(e))?t=15:t=52:w(e)==="checkboxgroup"?v(k(e))?t=16:t=52:w(e)==="form"?v(k(e))?t=17:t=52:w(e)==="numberfield"?v(k(e))?t=18:t=52:w(e)==="radiogroup"?v(k(e))?t=19:t=52:w(e)==="searchfield"?v(k(e))?t=20:t=52:w(e)==="switch"?v(k(e))?t=21:t=52:w(e)==="textarea"?v(k(e))?t=22:t=52:w(e)==="textfield"?v(k(e))?t=23:t=52:w(e)==="icons"?v(k(e))?t=24:t=52:w(e)==="breadcrumbs"?v(k(e))?t=25:t=52:w(e)==="link"?v(k(e))?t=26:t=52:w(e)==="tabs"?v(k(e))?t=27:t=52:w(e)==="alertdialog"?v(k(e))?t=28:t=52:w(e)==="dialog"?v(k(e))?t=29:t=52:w(e)==="dialogcontainer"?v(k(e))?t=30:t=52:w(e)==="dialogtrigger"?v(k(e))?t=31:t=52:w(e)==="tooltip"?v(k(e))?t=32:t=52:w(e)==="combobox"?v(k(e))?t=33:t=52:w(e)==="picker"?v(k(e))?t=34:t=52:w(e)==="rangeslider"?v(k(e))?t=35:t=52:w(e)==="slider"?v(k(e))?t=36:t=52:w(e)==="meter"?v(k(e))?t=37:t=52:w(e)==="progressbar"?v(k(e))?t=38:t=52:w(e)==="progresscircle"?v(k(e))?t=39:t=52:w(e)==="statuslight"?v(k(e))?t=40:t=52:w(e)==="content"?v(k(e))?t=41:t=52:w(e)==="divider"?v(k(e))?t=42:t=52:w(e)==="footer"?v(k(e))?t=43:t=52:w(e)==="header"?v(k(e))?t=44:t=52:w(e)==="heading"?v(k(e))?t=45:t=52:w(e)==="illustratedmessage"?v(k(e))?t=46:t=52:w(e)==="image"?v(k(e))?t=47:t=52:w(e)==="keyboard"?v(k(e))?t=48:t=52:w(e)==="text"?v(k(e))?t=49:t=52:w(e)==="view"?v(k(e))?t=50:t=52:w(e)==="well"&&v(k(e))?t=51:t=52,t){case 0:return"overview";case 1:return"installation";case 2:return"provider";case 3:return"flex";case 4:return"grid";case 5:return"actionButton";case 6:return"actionGroup";case 7:return"button";case 8:return"buttonGroup";case 9:return"logicButton";case 10:return"toggleButton";case 11:return"listBox";case 12:return"menu";case 13:return"menuTrigger";case 14:return"tableView";case 15:return"checkbox";case 16:return"checkboxGroup";case 17:return"form";case 18:return"numberField";case 19:return"radioGroup";case 20:return"searchField";case 21:return"switch";case 22:return"textArea";case 23:return"textField";case 24:return"workflowIcons";case 25:return"breadcrumbs";case 26:return"link";case 27:return"tabs";case 28:return"alertDialog";case 29:return"dialog";case 30:return"dialogContainer";case 31:return"dialogTrigger";case 32:return"tooltip";case 33:return"comboBox";case 34:return"picker";case 35:return"rangeSlider";case 36:return"slider";case 37:return"meter";case 38:return"progressBar";case 39:return"progressCircle";case 40:return"statusLight";case 41:return"content";case 42:return"divider";case 43:return"footer";case 44:return"header";case 45:return"heading";case 46:return"illustratedMessage";case 47:return"image";case 48:return"keyboard";case 49:return"text";case 50:return"view";case 51:return"well";case 52:return"overview"}}function Od(e){switch(e){case"installation":return I(u("installation"),1);case"provider":return I(u("provider"),1);case"flex":return I(u("flex"),1);case"grid":return I(u("grid"),1);case"actionButton":return I(u("actionbutton"),1);case"actionGroup":return I(u("actiongroup"),1);case"button":return I(u("button"),1);case"buttonGroup":return I(u("buttongroup"),1);case"logicButton":return I(u("logicbutton"),1);case"toggleButton":return I(u("togglebutton"),1);case"listBox":return I(u("listbox"),1);case"menu":return I(u("menu"),1);case"menuTrigger":return I(u("menutrigger"),1);case"tableView":return I(u("tableview"),1);case"checkbox":return I(u("checkbox"),1);case"checkboxGroup":return I(u("checkboxgroup"),1);case"form":return I(u("form"),1);case"numberField":return I(u("numberfield"),1);case"radioGroup":return I(u("radiogroup"),1);case"searchField":return I(u("searchfield"),1);case"switch":return I(u("switch"),1);case"textArea":return I(u("textarea"),1);case"textField":return I(u("textfield"),1);case"workflowIcons":return I(u("icons"),1);case"breadcrumbs":return I(u("breadcrumbs"),1);case"link":return I(u("link"),1);case"tabs":return I(u("tabs"),1);case"alertDialog":return I(u("alertdialog"),1);case"dialog":return I(u("dialog"),1);case"dialogContainer":return I(u("dialogcontainer"),1);case"dialogTrigger":return I(u("dialogtrigger"),1);case"tooltip":return I(u("tooltip"),1);case"comboBox":return I(u("combobox"),1);case"picker":return I(u("picker"),1);case"rangeSlider":return I(u("rangeslider"),1);case"slider":return I(u("slider"),1);case"meter":return I(u("meter"),1);case"progressBar":return I(u("progressbar"),1);case"progressCircle":return I(u("progresscircle"),1);case"statusLight":return I(u("statuslight"),1);case"content":return I(u("content"),1);case"divider":return I(u("divider"),1);case"footer":return I(u("footer"),1);case"header":return I(u("header"),1);case"heading":return I(u("heading"),1);case"illustratedMessage":return I(u("illustratedmessage"),1);case"image":return I(u("image"),1);case"keyboard":return I(u("keyboard"),1);case"text":return I(u("text"),1);case"view":return I(u("view"),1);case"well":return I(u("well"),1);default:return I(u(""),1)}}class Tl extends it{constructor(t){super();this.SelectedDoc=t}}class Wd extends jr{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["SelectDocsId"]}}function jd(){return[new Tl(kl(wl(window.location.hash,1))),o()]}function qd(e,t){return[new Tl(e.fields[0]),o()]}function Ud(e,t){let l;const i=Gd();return r.createElement(Ht,fe(f([(l=dr,["theme",l]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["id","spectrum-provider"],["children",r.Children.toArray([r.createElement(F,{width:"100%",height:"100%",direction:"column",alignItems:"center",children:r.Children.toArray([r.createElement(F,{columnGap:"size-300",direction:"row",height:"100%",width:"70%",children:r.Children.toArray([r.createElement(R,{width:200,maxWidth:200,minWidth:200,backgroundColor:"gray-200",children:r.Children.toArray([r.createElement(Be,{id:"navigation-list",children:Array.from(i),["aria-label"]:"Navigation panel",selectionMode:"single",disallowEmptySelection:!0,selectedKeys:[e.SelectedDoc],onSelectionChange:a=>{const c=oe(a.values());let s,d;switch(v(c)?s=1:v(k(c))?(s=0,d=w(c)):s=1,s){case 0:{Pd(u(Od(d)),1,1);break}}}})])}),r.createElement(R,{flexGrow:1,paddingTop:20,id:"content-host",children:r.Children.toArray([_d({onUrlChanged:a=>{t(new Wd(0,kl(a)))},application:n.exports.createElement(n.exports.Fragment,{},Hd(e.SelectedDoc))})])})])})])})])]])))}Mo(_o("app-root",Bo(jd,(e,t)=>qd(e),(e,t)=>Ud(e,t))));
