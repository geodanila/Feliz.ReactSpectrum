import{r as n,a as Fl,_ as Il,D as re,F as I,W as Vr,A as M,T as C,b as ht,I as y,B as L,V as R,c as Te,L as Nr,d as Gt,e as Bl,f as mn,g as sr,h as Mr,i as ur,j as Dl,k as Vl,l as Nl,m as Ml,n as Rl,o as zl,p as Pl,q as dn,s as mr,P as Ht,R as Ze,t as $,C as z,u as dr,G as pn,v as Ll,w as Fe,S as Ce,M as Y,x as Z,K as pr,y as Rr,z as zr,E as Ot,H as Pr,J as ft,N as ne,O as hn,Q as _l,U as Gl,X as Hl,Y as Ge,Z as Qe,$ as _,a0 as ce,a1 as xt,a2 as Q,a3 as hr,a4 as et,a5 as gt,a6 as tt,a7 as rt,a8 as Wt,a9 as jt,aa as qt,ab as Ol,ac as Wl,ad as jl,ae as Ie,af as Et,ag as nt,ah as le,ai as Lr,aj as ie,ak as fn,al as xn,am as He,an as Oe,ao as ql,ap as Ul,aq as gn,ar as Kl,as as Jl,at as We,au as fr,av as $l,aw as St,ax as xr,ay as Ut,az as _r,aA as Gr,aB as Xl,aC as bt,aD as Yl,aE as Zl,aF as Ql,aG as ei,aH as ti,aI as ri}from"./vendor.c5d32169.js";const ni=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=l(a);fetch(a.href,o)}};ni();function je(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function li(e){return typeof e.CompareTo=="function"}function ii(e){return typeof e.Equals=="function"}function ai(e){return typeof e.GetHashCode=="function"}function gr(e,t){return Object.getPrototypeOf(e).constructor===Object.getPrototypeOf(t).constructor}class oi{constructor(t){this.iter=t}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this.iter.next();return this.current=t.value,!t.done}["System.Collections.IEnumerator.Reset"](){throw new Error("JS iterators cannot be reset")}Dispose(){}}function qe(e){return typeof e.GetEnumerator=="function"?e.GetEnumerator():new oi(e[Symbol.iterator]())}function En(e){return{[Symbol.iterator](){return this},next(){const t=e["System.Collections.IEnumerator.MoveNext"](),l=t?e["System.Collections.IEnumerator.get_Current"]():void 0;return{done:!t,value:l}}}}function Pe(e,t){let l=e.toString(10);for(;l.length<t;)l="0"+l;return l}function Sn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function bn(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Ue{static id(t){return Ue.idMap.has(t)||Ue.idMap.set(t,++Ue.count),Ue.idMap.get(t)}}Ue.idMap=new WeakMap;Ue.count=0;function ci(e){let t=0,l=5381;const i=e.length;for(;t<i;)l=l*33^e.charCodeAt(t++);return l}function Hr(e){return e*2654435761|0}function Kt(e){return e.length===0?0:e.reduce((t,l)=>(t<<5)+t^l)}function si(e){return e.getTime()}function ui(e){const t=e.length,l=new Array(t);for(let i=0;i<t;i++)l[i]=yt(e[i]);return Kt(l)}function yt(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return Hr(e);case"string":return ci(e);default:{if(ai(e))return e.GetHashCode();if(je(e))return ui(e);if(e instanceof Date)return si(e);if(Object.getPrototypeOf(e).constructor===Object){const t=Object.values(e).map(l=>yt(l));return Kt(t)}else return Hr(Ue.id(e))}}}function mi(e,t,l){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!l(e[i],t[i]))return!1;return!0}function yn(e,t){return mi(e,t,Jt)}function di(e,t){const l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return!1;l.sort(),i.sort();for(let a=0;a<l.length;a++)if(l[a]!==i[a]||!Jt(e[l[a]],t[i[a]]))return!1;return!0}function Jt(e,t){return e===t?!0:e==null?t==null:t==null||typeof e!="object"?!1:ii(e)?e.Equals(t):je(e)?je(t)&&yn(e,t):e instanceof Date?t instanceof Date&&Cn(e,t)===0:Object.getPrototypeOf(e).constructor===Object&&di(e,t)}function Cn(e,t){let l,i;return"offset"in e&&"offset"in t?(l=e.getTime(),i=t.getTime()):(l=e.getTime()+Sn(e),i=t.getTime()+Sn(t)),l===i?0:l<i?-1:1}function An(e,t){return e===t?0:e<t?-1:1}function pi(e,t,l){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let i=0,a=0;i<e.length;i++)if(a=l(e[i],t[i]),a!==0)return a;return 0}function vn(e,t){return pi(e,t,lt)}function hi(e,t){const l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return l.length<i.length?-1:1;l.sort(),i.sort();for(let a=0,o=0;a<l.length;a++){const s=l[a];if(s!==i[a])return s<i[a]?-1:1;if(o=lt(e[s],t[s]),o!==0)return o}return 0}function lt(e,t){return e===t?0:e==null?t==null?0:-1:t==null?1:typeof e!="object"?e<t?-1:1:li(e)?e.CompareTo(t):je(e)?je(t)?vn(e,t):-1:e instanceof Date?t instanceof Date?Cn(e,t):-1:Object.getPrototypeOf(e).constructor===Object?hi(e,t):-1}function wn(e,t,l){return e(t,l)>0?t:l}function pe(e){const t={};for(const l of e)t[l[0]]=l[1];return t}const $t=Symbol("curried");function Or(e,t){if(t==null||t.length>1)return t;const l=(...i)=>{let a=t;for(let o=0;o<e;o++)a=a(i[o]);return a};return l[$t]=t,l}function Wr(e,t,l){return i=>t===1?l(...e.concat([i])):Wr(e.concat([i]),t-1,l)}function kn(e,t){return t==null||t.length===1?t:$t in t?t[$t]:Wr([],e,t)}function fi(e,t,l){if(t!=null)if($t in t){t=t[$t];for(let i=0;i<l.length;i++)t=t(l[i]);return t}else return Wr(l,e,t)}function xi(e){let t=0,l="[";for(const i of e){if(t===0)l+=Be(i);else if(t===100){l+="; ...";break}else l+="; "+Be(i);t++}return l+"]"}function Be(e,t=0){if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return xi(e);{const l=Object.getPrototypeOf(e).constructor;return l===Object&&t<10?"{ "+Object.entries(e).map(([i,a])=>i+" = "+Be(a,t+1)).join(`
  `)+" }":l.name}}return String(e)}function gi(e,t){if(t.length===0)return e;{let l="",i=!0;return t.length===1?(l=Be(t[0]),i=l.indexOf(" ")>=0):l=t.map(a=>Be(a)).join(", "),e+(i?" (":" ")+l+(i?")":"")}}class jr{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return gi(this.name,this.fields)}GetHashCode(){const t=this.fields.map(l=>yt(l));return t.splice(0,0,Hr(this.tag)),Kt(t)}Equals(t){return this===t?!0:gr(this,t)&&this.tag===t.tag?yn(this.fields,t.fields):!1}CompareTo(t){return this===t?0:gr(this,t)?this.tag===t.tag?vn(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function Ei(e){const t={},l=Object.keys(e);for(let i=0;i<l.length;i++)t[l[i]]=e[l[i]];return t}function Si(e){return"{ "+Object.entries(e).map(([t,l])=>t+" = "+Be(l)).join(`
  `)+" }"}function bi(e){const t=Object.values(e).map(l=>yt(l));return Kt(t)}function yi(e,t){if(e===t)return!0;if(gr(e,t)){const l=Object.keys(e);for(let i=0;i<l.length;i++)if(!Jt(e[l[i]],t[l[i]]))return!1;return!0}else return!1}function Ci(e,t){if(e===t)return 0;if(gr(e,t)){const l=Object.keys(e);for(let i=0;i<l.length;i++){const a=lt(e[l[i]],t[l[i]]);if(a!==0)return a}return 0}else return-1}class it{toJSON(){return Ei(this)}toString(){return Si(this)}GetHashCode(){return bi(this)}Equals(t){return yi(this,t)}CompareTo(t){return Ci(this,t)}}const Ke=Symbol("numeric");function Ai(e){return typeof e=="number"||(e==null?void 0:e[Ke])}function vi(e,t){return typeof e=="number"?e<t?-1:e>t?1:0:e.CompareTo(t)}function wi(e,t){return typeof e=="number"?e*t:e[Ke]().multiply(t)}function ki(e,t){return typeof e=="number"?e.toFixed(t):e[Ke]().toFixed(t)}function Tn(e,t){return typeof e=="number"?e.toPrecision(t):e[Ke]().toPrecision(t)}function Fn(e,t){return typeof e=="number"?e.toExponential(t):e[Ke]().toExponential(t)}function In(e){return typeof e=="number"?(Number(e)>>>0).toString(16):e[Ke]().toHex()}var H={GetHashCode(){return Kt([this.s,this.e].concat(this.c))},Equals(e){return!this.cmp(e)},CompareTo(e){return this.cmp(e)},[Ke](){const e=this;return{multiply:t=>e.mul(t),toPrecision:t=>e.toPrecision(t),toExponential:t=>e.toExponential(t),toFixed:t=>e.toFixed(t),toHex:()=>(Number(e)>>>0).toString(16)}}},Ti=28,Fi=1,at=1e6,Bn=1e6,Ii=-29,Bi=29,Di=!1,Xt="[big.js] ",ot=Xt+"Invalid ",Er=ot+"decimal places",Vi=ot+"rounding mode",Dn=Xt+"Division by zero",De=void 0,Ni=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Vn(){function e(t){var l=this;if(!(l instanceof e))return t===De?Vn():new e(t);if(t instanceof e)l.s=t.s,l.e=t.e,l.c=t.c.slice(),Mi(l);else{if(typeof t!="string"){if(e.strict===!0)throw TypeError(ot+"number");t=t===0&&1/t<0?"-0":String(t)}Ri(l,t)}l.constructor=e}return e.prototype=H,e.DP=Ti,e.RM=Fi,e.NE=Ii,e.PE=Bi,e.strict=Di,e}function Mi(e){if(e.c.length>1&&!e.c[0]){let t=e.c.findIndex(l=>l);e.c=e.c.slice(t),e.e=e.e-t}}function Ri(e,t){var l,i,a;if(!Ni.test(t))throw Error(ot+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(l=t.indexOf("."))>-1&&(t=t.replace(".","")),(i=t.search(/e/i))>0?(l<0&&(l=i),l+=+t.slice(i+1),t=t.substring(0,i)):l<0&&(l=t.length),a=t.length,i=0;i<l&&i<a&&t.charAt(i)=="0";)++i;if(i==a)e.c=[e.e=0];else for(e.e=l-i-1,e.c=[],l=0;i<a;)e.c[l++]=+t.charAt(i++);return e=Je(e,$e.DP+1,$e.RM),e}function Je(e,t,l,i){var a=e.c;if(l===De&&(l=$e.RM),l!==0&&l!==1&&l!==2&&l!==3)throw Error(Vi);if(t<1)i=l===3&&(i||!!a[0])||t===0&&(l===1&&a[0]>=5||l===2&&(a[0]>5||a[0]===5&&(i||a[1]!==De))),a.length=1,i?(e.e=e.e-t+1,a[0]=1):a[0]=e.e=0;else if(t<a.length){const o=a.findIndex((s,m)=>m>=t&&s>0)<0;if(i=l===1&&a[t]>=5||l===2&&(a[t]>5||a[t]===5&&(i||a[t+1]!==De||a[t-1]&1))||l===3&&(i||!o),a.length=t--,i)for(;++a[t]>9;)a[t]=0,t--||(++e.e,a.unshift(1));for(t=a.length;!a[--t];)a.pop()}return e}function Ct(e,t,l){var i=e.e,a=e.c.join(""),o=a.length;if(t)a=a.charAt(0)+(o>1?"."+a.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)a="0"+a;a="0."+a}else if(i>0)if(++i>o)for(i-=o;i--;)a+="0";else i<o&&(a=a.slice(0,i)+"."+a.slice(i));else o>1&&(a=a.charAt(0)+"."+a.slice(1));return e.s<0&&l?"-"+a:a}H.abs=function(){var e=new this.constructor(this);return e.s=1,e};H.cmp=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.c,o=e.c,s=i.s,m=e.s,h=i.e,p=e.e;if(!a[0]||!o[0])return a[0]?s:o[0]?-m:0;if(s!=m)return s;if(t=s<0,h!=p)return h>p^t?1:-1;for(m=Math.max(a.length,o.length),s=0;s<m;s++)if(h=s<a.length?a[s]:0,p=s<o.length?o[s]:0,h!=p)return h>p^t?1:-1;return 0};H.div=function(e){var t=this.constructor,l=new t(this),e=new t(e),i=l.c,a=e.c,o=l.s==e.s?1:-1,s=t.DP;if(s!==~~s||s<0||s>at)throw Error(Er);if(!a[0])throw Error(Dn);if(!i[0])return e.s=o,e.c=[e.e=0],e;var m,h,p,x,S,T=a.slice(),N=m=a.length,O=i.length,G=i.slice(0,m),X=G.length,pt=e,Br=pt.c=[],Dr=0,_t=s+(pt.e=l.e-e.e)+1;for(pt.s=o,o=_t<0?0:_t,T.unshift(0);X++<m;)G.push(0);do{for(p=0;p<10;p++){if(m!=(X=G.length))x=m>X?1:-1;else for(S=-1,x=0;++S<m;)if(a[S]!=G[S]){x=a[S]>G[S]?1:-1;break}if(x<0){for(h=X==m?a:T;X;){if(G[--X]<h[X]){for(S=X;S&&!G[--S];)G[S]=9;--G[S],G[X]+=10}G[X]-=h[X]}for(;!G[0];)G.shift()}else break}Br[Dr++]=x?p:++p,G[0]&&x?G[X]=i[N]||0:G=[i[N]]}while((N++<O||G[0]!==De)&&o--);return!Br[0]&&Dr!=1&&(Br.shift(),pt.e--,_t--),Dr>_t&&Je(pt,_t,t.RM,G[0]!==De),pt};H.eq=function(e){return this.cmp(e)===0};H.gt=function(e){return this.cmp(e)>0};H.gte=function(e){return this.cmp(e)>-1};H.lt=function(e){return this.cmp(e)<0};H.lte=function(e){return this.cmp(e)<1};H.minus=H.sub=function(e){var t,l,i,a,o=this.constructor,s=new o(this),e=new o(e),m=s.s,h=e.s;if(m!=h)return e.s=-h,s.plus(e);var p=s.c.slice(),x=s.e,S=e.c,T=e.e;if(!p[0]||!S[0])return S[0]?e.s=-h:p[0]?e=new o(s):e.s=1,e;if(m=x-T){for((a=m<0)?(m=-m,i=p):(T=x,i=S),i.reverse(),h=m;h--;)i.push(0);i.reverse()}else for(l=((a=p.length<S.length)?p:S).length,m=h=0;h<l;h++)if(p[h]!=S[h]){a=p[h]<S[h];break}if(a&&(i=p,p=S,S=i,e.s=-e.s),(h=(l=S.length)-(t=p.length))>0)for(;h--;)p[t++]=0;for(h=t;l>m;){if(p[--l]<S[l]){for(t=l;t&&!p[--t];)p[t]=9;--p[t],p[l]+=10}p[l]-=S[l]}for(;p[--h]===0;)p.pop();for(;p[0]===0;)p.shift(),--T;return p[0]||(e.s=1,p=[T=0]),e.c=p,e.e=T,e};H.mod=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.s,o=e.s;if(!e.c[0])throw Error(Dn);return i.s=e.s=1,t=e.cmp(i)==1,i.s=a,e.s=o,t?new l(i):(a=l.DP,o=l.RM,l.DP=l.RM=0,i=i.div(e),l.DP=a,l.RM=o,this.minus(i.times(e)))};H.plus=H.add=function(e){var t,l,i,a=this.constructor,o=new a(this),e=new a(e);if(o.s!=e.s)return e.s=-e.s,o.minus(e);var s=o.e,m=o.c,h=e.e,p=e.c;if(!m[0]||!p[0])return p[0]||(m[0]?e=new a(o):e.s=o.s),e;if(m=m.slice(),t=s-h){for(t>0?(h=s,i=p):(t=-t,i=m),i.reverse();t--;)i.push(0);i.reverse()}for(m.length-p.length<0&&(i=p,p=m,m=i),t=p.length,l=0;t;m[t]%=10)l=(m[--t]=m[t]+p[t]+l)/10|0;for(l&&(m.unshift(l),++h),t=m.length;m[--t]===0;)m.pop();return e.c=m,e.e=h,e};H.pow=function(e){var t=this.constructor,l=new t(this),i=new t("1"),a=new t("1"),o=e<0;if(e!==~~e||e<-Bn||e>Bn)throw Error(ot+"exponent");for(o&&(e=-e);e&1&&(i=i.times(l)),e>>=1,!!e;)l=l.times(l);return o?a.div(i):i};H.prec=function(e,t){if(e!==~~e||e<1||e>at)throw Error(ot+"precision");return Je(new this.constructor(this),e,t)};H.round=function(e,t){if(e===De)e=0;else if(e!==~~e||e<-at||e>at)throw Error(Er);return Je(new this.constructor(this),e+this.e+1,t)};H.sqrt=function(){var e,t,l,i=this.constructor,a=new i(this),o=a.s,s=a.e,m=new i("0.5");if(!a.c[0])return new i(a);if(o<0)throw Error(Xt+"No square root");o=Math.sqrt(a+""),o===0||o===1/0?(t=a.c.join(""),t.length+s&1||(t+="0"),o=Math.sqrt(t),s=((s+1)/2|0)-(s<0||s&1),e=new i((o==1/0?"5e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+s)):e=new i(o+""),s=e.e+(i.DP+=4);do l=e,e=m.times(l.plus(a.div(l)));while(l.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return Je(e,(i.DP-=4)+e.e+1,i.RM)};H.times=H.mul=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.c,o=e.c,s=a.length,m=o.length,h=i.e,p=e.e;if(e.s=i.s==e.s?1:-1,!a[0]||!o[0])return e.c=[e.e=0],e;for(e.e=h+p,s<m&&(t=a,a=o,o=t,p=s,s=m,m=p),t=new Array(p=s+m);p--;)t[p]=0;for(h=m;h--;){for(m=0,p=s+h;p>h;)m=t[p]+o[h]*a[p-h-1]+m,t[p--]=m%10,m=m/10|0;t[p]=m}for(m?++e.e:t.shift(),h=t.length;!t[--h];)t.pop();return e.c=t,e};H.toExponential=function(e,t){var l=this,i=l.c[0];if(e!==De){if(e!==~~e||e<0||e>at)throw Error(Er);for(l=Je(new l.constructor(l),++e,t);l.c.length<e;)l.c.push(0)}return Ct(l,!0,!!i)};H.toFixed=function(e,t){var l=this,i=l.c[0];if(e!==De){if(e!==~~e||e<0||e>at)throw Error(Er);for(l=Je(new l.constructor(l),e+l.e+1,t),e=e+l.e+1;l.c.length<e;)l.c.push(0)}return Ct(l,!1,!!i)};H.toJSON=H.toString=function(){var e=this,t=e.constructor;return Ct(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};H.toNumber=function(){var e=Number(Ct(this,!0,!0));if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(Xt+"Imprecise conversion");return e};H.toPrecision=function(e,t){var l=this,i=l.constructor,a=l.c[0];if(e!==De){if(e!==~~e||e<1||e>at)throw Error(ot+"precision");for(l=Je(new i(l),e,t);l.c.length<e;)l.c.push(0)}return Ct(l,e<=l.e||l.e<=i.NE||l.e>=i.PE,!!a)};H.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(Xt+"valueOf disallowed");return Ct(e,e.e<=t.NE||e.e>=t.PE,!0)};var $e=Vn();new $e(0);new $e(1);new $e(-1);new $e("79228162514264337593543950335");new $e("-79228162514264337593543950335");var Nn;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(Nn||(Nn={}));function zi(e){return e===-2147483648?e:-e}var he=null;try{he=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Ve(e,t,l){this.low=e|0,this.high=t|0,this.unsigned=!!l}Ve.prototype.GetHashCode=function(){let e=this.unsigned?1:0;return e=(e<<5)+e^this.high,e=(e<<5)+e^this.low,e};Ve.prototype.Equals=function(e){return ge(this,e)};Ve.prototype.CompareTo=function(e){return Qt(this,e)};Ve.prototype.toString=function(e){return Zt(this,e)};Ve.prototype.toJSON=function(){return Zt(this)};Ve.prototype[Ke]=function(){const e=this;return{multiply:t=>se(e,t),toPrecision:t=>String(e)+0 .toPrecision(t).substr(1),toExponential:t=>String(e)+0 .toExponential(t).substr(1),toFixed:t=>String(e)+0 .toFixed(t).substr(1),toHex:()=>Zt(e.unsigned?e:Zi($i(e),!0),16)}};Object.defineProperty(Ve.prototype,"__isLong__",{value:!0});function Ae(e){return(e&&e.__isLong__)===!0}var Mn={},Rn={};function At(e,t){var l,i,a;return t?(e>>>=0,(a=0<=e&&e<256)&&(i=Rn[e],i)?i:(l=W(e,(e|0)<0?-1:0,!0),a&&(Rn[e]=l),l)):(e|=0,(a=-128<=e&&e<128)&&(i=Mn[e],i)?i:(l=W(e,e<0?-1:0,!1),a&&(Mn[e]=l),l))}function ve(e,t){if(isNaN(e))return t?Ye:we;if(t){if(e<0)return Ye;if(e>=Ln)return Gi}else{if(e<=-_n)return fe;if(e+1>=_n)return _i}return e<0?K(ve(-e,t)):W(e%vt|0,e/vt|0,t)}function W(e,t,l){return new Ve(e,t,l)}var Sr=Math.pow;function zn(e,t,l){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return we;if(typeof t=="number"?(l=t,t=!1):t=!!t,l=l||10,l<2||36<l)throw RangeError("radix");var i=e.indexOf("-");if(i>0)throw Error("interior hyphen");if(i===0)return K(zn(e.substring(1),t,l));for(var a=ve(Sr(l,8)),o=we,s=0;s<e.length;s+=8){var m=Math.min(8,e.length-s),h=parseInt(e.substring(s,s+m),l);if(m<8){var p=ve(Sr(l,m));o=st(se(o,p),ve(h))}else o=se(o,a),o=st(o,ve(h))}return o.unsigned=t,o}function Xe(e,t){return typeof e=="number"?ve(e,t):typeof e=="string"?zn(e,t):W(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}var Pn=1<<16,Pi=1<<24,vt=Pn*Pn,Ln=vt*vt,_n=Ln/2,Gn=At(Pi),we=At(0),Ye=At(0,!0),Yt=At(1),Li=At(1,!0),Hn=At(-1),_i=W(4294967295|0,2147483647|0,!1),Gi=W(4294967295|0,4294967295|0,!0),fe=W(0,2147483648|0,!1);function wt(e){return e.unsigned?e.low>>>0:e.low}function br(e){return e.unsigned?(e.high>>>0)*vt+(e.low>>>0):e.high*vt+(e.low>>>0)}function Zt(e,t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(ct(e))return"0";if(xe(e))if(ge(e,fe)){var l=ve(t),i=Le(e,l),a=kt(se(i,l),e);return Zt(i,t)+wt(a).toString(t)}else return"-"+Zt(K(e),t);for(var o=ve(Sr(t,6),e.unsigned),s=e,m="";;){var h=Le(s,o),p=wt(kt(s,se(h,o)))>>>0,x=p.toString(t);if(s=h,ct(s))return x+m;for(;x.length<6;)x="0"+x;m=""+x+m}}function ct(e){return e.high===0&&e.low===0}function xe(e){return!e.unsigned&&e.high<0}function On(e){return(e.low&1)==1}function ge(e,t){return Ae(t)||(t=Xe(t)),e.unsigned!==t.unsigned&&e.high>>>31==1&&t.high>>>31==1?!1:e.high===t.high&&e.low===t.low}function Wn(e,t){return Qt(e,t)<0}function qr(e,t){return Qt(e,t)>0}function Hi(e,t){return Qt(e,t)>=0}function Qt(e,t){if(Ae(t)||(t=Xe(t)),ge(e,t))return 0;var l=xe(e),i=xe(t);return l&&!i?-1:!l&&i?1:e.unsigned?t.high>>>0>e.high>>>0||t.high===e.high&&t.low>>>0>e.low>>>0?-1:1:xe(kt(e,t))?-1:1}function K(e){return!e.unsigned&&ge(e,fe)?fe:st(Wi(e),Yt)}function st(e,t){Ae(t)||(t=Xe(t));var l=e.high>>>16,i=e.high&65535,a=e.low>>>16,o=e.low&65535,s=t.high>>>16,m=t.high&65535,h=t.low>>>16,p=t.low&65535,x=0,S=0,T=0,N=0;return N+=o+p,T+=N>>>16,N&=65535,T+=a+h,S+=T>>>16,T&=65535,S+=i+m,x+=S>>>16,S&=65535,x+=l+s,x&=65535,W(T<<16|N,x<<16|S,e.unsigned)}function kt(e,t){return Ae(t)||(t=Xe(t)),st(e,K(t))}function se(e,t){if(ct(e))return e.unsigned?Ye:we;if(Ae(t)||(t=Xe(t)),he){var l=he.mul(e.low,e.high,t.low,t.high);return W(l,he.get_high(),e.unsigned)}if(ct(t))return e.unsigned?Ye:we;if(ge(e,fe))return On(t)?fe:we;if(ge(t,fe))return On(e)?fe:we;if(xe(e))return xe(t)?se(K(e),K(t)):K(se(K(e),t));if(xe(t))return K(se(e,K(t)));if(Wn(e,Gn)&&Wn(t,Gn))return ve(br(e)*br(t),e.unsigned);var i=e.high>>>16,a=e.high&65535,o=e.low>>>16,s=e.low&65535,m=t.high>>>16,h=t.high&65535,p=t.low>>>16,x=t.low&65535,S=0,T=0,N=0,O=0;return O+=s*x,N+=O>>>16,O&=65535,N+=o*x,T+=N>>>16,N&=65535,N+=s*p,T+=N>>>16,N&=65535,T+=a*x,S+=T>>>16,T&=65535,T+=o*p,S+=T>>>16,T&=65535,T+=s*h,S+=T>>>16,T&=65535,S+=i*x+a*p+o*h+s*m,S&=65535,W(N<<16|O,S<<16|T,e.unsigned)}function Le(e,t){if(Ae(t)||(t=Xe(t)),ct(t))throw Error("division by zero");if(he){if(!e.unsigned&&e.high===-2147483648&&t.low===-1&&t.high===-1)return e;var l=(e.unsigned?he.div_u:he.div_s)(e.low,e.high,t.low,t.high);return W(l,he.get_high(),e.unsigned)}if(ct(e))return e.unsigned?Ye:we;var i,a,o;if(e.unsigned){if(t.unsigned||(t=Ji(t)),qr(t,e))return Ye;if(qr(t,Ki(e,1)))return Li;o=Ye}else{if(ge(e,fe)){if(ge(t,Yt)||ge(t,Hn))return fe;if(ge(t,fe))return Yt;var s=Ui(e,1);return i=qi(Le(s,t),1),ge(i,we)?xe(t)?Yt:Hn:(a=kt(e,se(t,i)),o=st(i,Le(a,t)),o)}else if(ge(t,fe))return e.unsigned?Ye:we;if(xe(e))return xe(t)?Le(K(e),K(t)):K(Le(K(e),t));if(xe(t))return K(Le(e,K(t)));o=we}for(a=e;Hi(a,t);){i=Math.max(1,Math.floor(br(a)/br(t)));for(var m=Math.ceil(Math.log(i)/Math.LN2),h=m<=48?1:Sr(2,m-48),p=ve(i),x=se(p,t);xe(x)||qr(x,a);)i-=h,p=ve(i,e.unsigned),x=se(p,t);ct(p)&&(p=Yt),o=st(o,p),a=kt(a,x)}return o}function Oi(e,t){if(Ae(t)||(t=Xe(t)),he){var l=(e.unsigned?he.rem_u:he.rem_s)(e.low,e.high,t.low,t.high);return W(l,he.get_high(),e.unsigned)}return kt(e,se(Le(e,t),t))}function Wi(e){return W(~e.low,~e.high,e.unsigned)}function ji(e,t){return Ae(t)||(t=Xe(t)),W(e.low&t.low,e.high&t.high,e.unsigned)}function qi(e,t){return Ae(t)&&(t=wt(t)),(t&=63)==0?e:t<32?W(e.low<<t,e.high<<t|e.low>>>32-t,e.unsigned):W(0,e.low<<t-32,e.unsigned)}function Ui(e,t){return Ae(t)&&(t=wt(t)),(t&=63)==0?e:t<32?W(e.low>>>t|e.high<<32-t,e.high>>t,e.unsigned):W(e.high>>t-32,e.high>=0?0:-1,e.unsigned)}function Ki(e,t){if(Ae(t)&&(t=wt(t)),t&=63,t===0)return e;var l=e.high;if(t<32){var i=e.low;return W(i>>>t|l<<32-t,l>>>t,e.unsigned)}else return W(t===32?l:l>>>t-32,0,e.unsigned)}function Ji(e){return e.unsigned?e:W(e.low,e.high,!0)}function $i(e,t){return t?Xi(e):Yi(e)}function Xi(e){var t=e.high,l=e.low;return[l&255,l>>>8&255,l>>>16&255,l>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}function Yi(e){var t=e.high,l=e.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,l>>>24,l>>>16&255,l>>>8&255,l&255]}function Zi(e,t,l){return l?Qi(e,t):ea(e,t)}function Qi(e,t){return new Ve(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)}function ea(e,t){return new Ve(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}const Ee=st,Se=se,_e=Le,ta=Oi,ra=K,Tt=ji,yr=Qt,J=W,Ne=wt;function U(e,t,l){let i=e,a=0;switch(l){case 0:i=e<<24>>24,a=i;break;case 4:i=e<<24>>>24;break;case 1:i=e<<16>>16,a=i;break;case 5:i=e<<16>>>16;break;case 2:i=e>>0,a=i;break;case 6:i=e>>>0;break}return W(i,a>>31,t)}function Ur(e){const t=e<0;e=Math.abs(e);const l=~~(e/36e5),i=e%36e5/6e4;return(t?"-":"+")+Pe(l,2)+":"+Pe(i,2)}function Cr(e,t){const l=e.toISOString();return t==="first"?l.substring(0,l.indexOf("T")):l.substring(l.indexOf("T")+1,l.length-1)}function na(e,t){if(t)return e.toISOString();{const l=e.kind==null?!0:e.kind===2;return Pe(e.getFullYear(),4)+"-"+Pe(e.getMonth()+1,2)+"-"+Pe(e.getDate(),2)+"T"+Pe(e.getHours(),2)+":"+Pe(e.getMinutes(),2)+":"+Pe(e.getSeconds(),2)+"."+Pe(e.getMilliseconds(),3)+(l?Ur(e.getTimezoneOffset()*-6e4):"")}}function la(e,t){const l=e.toISOString();return l.substring(0,l.length-1)+Ur(t)}function jn(e,t,l){return t.replace(/(\w)\1*/g,i=>{let a=Number.NaN;switch(i.substring(0,1)){case"y":const o=l?e.getUTCFullYear():e.getFullYear();a=i.length<4?o%100:o;break;case"M":a=(l?e.getUTCMonth():e.getMonth())+1;break;case"d":a=l?e.getUTCDate():e.getDate();break;case"H":a=l?e.getUTCHours():e.getHours();break;case"h":const s=l?e.getUTCHours():e.getHours();a=s>12?s%12:s;break;case"m":a=l?e.getUTCMinutes():e.getMinutes();break;case"s":a=l?e.getUTCSeconds():e.getSeconds();break;case"f":a=l?e.getUTCMilliseconds():e.getMilliseconds();break}return Number.isNaN(a)?i:a<10&&i.length>1?"0"+a:""+a})}function ia(e,t){var l,i,a;const o=new Date(e.getTime()+((l=e.offset)!==null&&l!==void 0?l:0));if(typeof t!="string")return o.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+Ur((i=e.offset)!==null&&i!==void 0?i:0);if(t.length===1)switch(t){case"D":case"d":return Cr(o,"first");case"T":case"t":return Cr(o,"second");case"O":case"o":return la(o,(a=e.offset)!==null&&a!==void 0?a:0);default:throw new Error("Unrecognized Date print format")}else return jn(o,t,!0)}function aa(e,t){const l=e.kind===1;if(typeof t!="string")return l?e.toUTCString():e.toLocaleString();if(t.length===1)switch(t){case"D":case"d":return l?Cr(e,"first"):e.toLocaleDateString();case"T":case"t":return l?Cr(e,"second"):e.toLocaleTimeString();case"O":case"o":return na(e,l);default:throw new Error("Unrecognized Date print format")}else return jn(e,t,l)}function oa(e,t,l){return e.offset!=null?ia(e,t):aa(e,t)}function ca(e,t=0){if((t&~(1^2^16^256))!=0)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");let l="g";return l+=t&1?"i":"",l+=t&2?"m":"",l+=t&16?"s":"",new RegExp(e,l)}function qn(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function Ar(e,t,l=0){let i;return i=e instanceof RegExp?(i=e,e=t,i.lastIndex=l,i):i=ca(t,l),i.test(e)}const er=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,tr=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function sa(e,t){return vi(e,t)<0}function Un(e){return{input:e,cont:da(e)}}function ua(e,t){let l=0,i=0,a="";tr.lastIndex=0;let o=tr.exec(e);for(;o;){const s=o.index+(o[1]||"").length;a+=e.substring(i,s).replace(/%%/g,"%");const[,,m,h,p,x]=o;a+=Kn(t[l++],m,h,p,x),i=tr.lastIndex,tr.lastIndex-=1,o=tr.exec(e)}return a+=e.substring(i).replace(/%%/g,"%"),a}function ma(e,t){return typeof t=="string"?e(t):t.cont(e)}function Kr(e){return ma(t=>t,e)}function Kn(e,t,l,i,a){let o="";if(t=t||"",a=a||"",Ai(e))switch(a.toLowerCase()!=="x"&&(sa(e,0)?(e=wi(e,-1),o="-"):t.indexOf(" ")>=0?o=" ":t.indexOf("+")>=0&&(o="+")),i=i==null?null:parseInt(i,10),a){case"f":case"F":i=i!=null?i:6,e=ki(e,i);break;case"g":case"G":e=i!=null?Tn(e,i):Tn(e);break;case"e":case"E":e=i!=null?Fn(e,i):Fn(e);break;case"x":e=In(e);break;case"X":e=In(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=oa(e):e=Be(e);if(l=typeof l=="number"?l:parseInt(l,10),isNaN(l))e=o+e;else{const s=t.indexOf("0")>=0,m=t.indexOf("-")>=0,h=m||!s?" ":"0";h==="0"?(e=$n(e,l-o.length,h,m),e=o+e):e=$n(o+e,l,h,m)}return e}function Jn(e,t,l,i="",a=-1){return(...o)=>{let s=i;const m=t.slice(),h=l.slice();for(const p of o){const[,,x,S,T,N]=h[0];let O=S;if(a>=0)O=a,a=-1;else if(O==="*"){if(p<0)throw new Error("Non-negative number required");a=p;continue}s+=m[0],s+=Kn(p,x,O,T,N),m.splice(0,1),h.splice(0,1)}return h.length===0?(s+=m[0],e(s)):Jn(e,m,h,s,a)}}function da(e){return t=>{er.lastIndex=0;const l=[],i=[];let a=0,o=er.exec(e);for(;o;){const s=o.index+(o[1]||"").length;l.push(e.substring(a,s).replace(/%%/g,"%")),i.push(o),a=er.lastIndex,er.lastIndex-=1,o=er.exec(e)}return l.length===0?t(e.replace(/%%/g,"%")):(l.push(e.substring(a).replace(/%%/g,"%")),Jn(t,l,i))}}function pa(e,t){const l=e.lastIndexOf(t);return l>=0&&l===e.length-t.length}function ha(e){return typeof e!="string"||/^\s*$/.test(e)}function vr(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function $n(e,t,l,i){l=l||" ",t=t-e.length;for(let a=0;a<t;a++)e=i?e+l:l+e;return e}function fa(e,t,l,i){if(l=typeof l=="number"?l:void 0,i=typeof i=="number"?i:0,l&&l<0)throw new Error("Count cannot be less than zero");if(l===0)return[];const a=(i&1)==1,o=(i&2)==2;t=t||[],t=t.filter(x=>x).map(qn),t=t.length>0?t:["\\s"];const s=[],m=new RegExp(t.join("|"),"g");let h=!0,p=0;do{const x=m.exec(e);if(x===null){const S=o?e.substring(p).trim():e.substring(p);(!a||S.length>0)&&s.push(S),h=!1}else{const S=o?e.substring(p,x.index).trim():e.substring(p,x.index);(!a||S.length>0)&&(l!=null&&s.length+1===l?(s.push(o?e.substring(p).trim():e.substring(p)),h=!1):s.push(S)),p=m.lastIndex}}while(h);return s}function xa(e,...t){return t.length===0?e.trimEnd():e.replace(new RegExp("["+qn(t.join(""))+"]+$"),"")}function Xn(e,t,l){if(t+(l||0)>e.length)throw new Error("Invalid startIndex and/or length");return l!=null?e.substr(t,l):e.substr(t)}class Ft{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return yt(this.value)}Equals(t){return t==null?!1:Jt(this.value,t instanceof Ft?t.value:t)}CompareTo(t){return t==null?1:lt(this.value,t instanceof Ft?t.value:t)}}function q(e){return e==null||e instanceof Ft?new Ft(e):e}function Me(e){if(e==null)throw new Error("Option has no value");return e instanceof Ft?e.value:e}function ga(e){return e==null?[]:[Me(e)]}function rr(e,t){return e!=null?Me(e):t}function Ea(e,t){return t!=null?q(e(Me(t))):void 0}function Sa(e,t){return t!=null?e(Me(t)):void 0}function Yn(e,t){return typeof e=="function"?new e(t):new Array(t)}function Zn(e,t,l,i){const a=t|0;return e.fill(i,a,a+l)}function ba(e,t){const l=Yn(t,1);return l[0]=e,l}function It(e,t,l){if(e<0)throw new Error("The input must be non-negative\\nParameter name: count");const i=Yn(l,e);for(let a=0;a<=e-1;a++)i[a]=t(a);return i}function ya(e){return e.slice()}function Qn(e,t,l){if(t==null)return l==null;if(l==null)return!1;{let i=0,a=!0;const o=t.length|0,s=l.length|0;if(o>s)return!1;if(o<s)return!1;for(;i<o?a:!1;)a=e(t[i],l[i]),i=i+1|0;return a}}const el="List was empty";class be extends it{constructor(t,l){super();this.head=t,this.tail=l}toString(){return"["+vr("; ",this)+"]"}Equals(t){const l=this;return l===t?!0:((a,o)=>{e:for(;;){const s=a,m=o,h=[s.tail,m.tail];if(h[0]!=null)if(h[1]!=null){const p=h[0],x=h[1];if(Jt(s.head,m.head)){a=p,o=x;continue e}else return!1}else return!1;else return h[1]==null}})(l,t)}GetHashCode(){return((i,a,o)=>{e:for(;;){const s=i,m=a,h=o,p=h.tail;if(p!=null){const x=p;if(s>18)return m|0;i=s+1,a=(m<<1)+yt(h.head)+631*s,o=x;continue e}else return m|0}})(0,0,this)|0}toJSON(t){const l=this;return Array.from(l)}CompareTo(t){return((a,o)=>{e:for(;;){const s=a,m=o,h=[s.tail,m.tail];if(h[0]!=null)if(h[1]!=null){const p=h[0],x=h[1],S=lt(s.head,m.head)|0;if(S===0){a=p,o=x;continue e}else return S|0}else return 1;else return h[1]!=null?-1:0}})(this,t)|0}GetEnumerator(){return Aa(this)}[Symbol.iterator](){return En(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return qe(this)}}class Ca{constructor(t){this.xs=t,this.it=this.xs,this.current=null}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this,l=t.it.tail;if(l!=null){const i=l;return t.current=t.it.head,t.it=i,!0}else return!1}["System.Collections.IEnumerator.Reset"](){const t=this;t.it=t.xs,t.current=null}Dispose(){}}function Aa(e){return new Ca(e)}function ue(){return new be(null,void 0)}function Jr(e,t){return new be(e,t)}function Bt(e){return e.tail==null}function tl(e){return((l,i)=>{e:for(;;){const a=l,s=i.tail;if(s!=null){l=a+1,i=s;continue e}else return a|0}})(0,e)|0}function Dt(e){if(e.tail!=null)return e.head;throw new Error(el+"\\nParameter name: list")}function ke(e){const t=e.tail;if(t!=null)return t;throw new Error(el+"\\nParameter name: list")}function c(){return ue()}function $r(e,t){return Jr(e,t)}function u(e){return Jr(e,ue())}function v(e){return Bt(e)}function rl(e){return tl(e)}function w(e){return Dt(e)}function k(e){return ke(e)}function Vt(e){const t=tl(e)|0,l=Zn(new Array(t),0,t,null);return((a,o)=>{e:for(;;){const s=a,m=o;if(!Bt(m)){l[s]=Dt(m),a=s+1,o=ke(m);continue e}break}})(0,e),l}function Xr(e,t,l){let i=t,a=l;for(;!Bt(a);)i=e(i,Dt(a)),a=ke(a);return i}function va(e,t,l){return((a,o,s)=>{e:for(;;){const m=a,h=o,p=s;if(Bt(p))return h;a=m+1,o=e(m,h,Dt(p)),s=ke(p);continue e}})(0,t,l)}function nl(e,t){Xr((l,i)=>{e(i)},void 0,t)}function wa(e,t){let l=t;for(let i=e.length-1;i>=0;i--)l=Jr(e[i],l);return l}function f(e){return wa(e,ue())}function ae(e){let t,l;if(je(e))return f(e);if(e instanceof be)return e;{const i=ue();let a=i;const o=qe(e);try{for(;o["System.Collections.IEnumerator.MoveNext"]();){const h=o["System.Collections.Generic.IEnumerator`1.get_Current"]();a=(t=a,l=new be(h,void 0),t.tail=l,l)}}finally{o.Dispose()}const s=a,m=ue();return s.tail=m,ke(i)}}function ka(e){const t=ue();let l=t;const i=s=>{l=Xr((m,h)=>{const p=new be(h,void 0);return m.tail=p,p},l,s)};if(je(e))e.forEach(i);else if(e instanceof be)nl(i,e);else{const s=qe(e);try{for(;s["System.Collections.IEnumerator.MoveNext"]();)i(s["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{s.Dispose()}}const a=l,o=ue();return a.tail=o,ke(t)}function Ta(e,t){let l,i;const a=ue();let o=a,s=t;for(;!Bt(s);){let p=e(Dt(s));for(;!Bt(p);)o=(l=o,i=new be(Dt(p),void 0),l.tail=i,i),p=ke(p);s=ke(s)}const m=o,h=ue();return m.tail=h,ke(a)}function wr(e,t){const l=ue(),i=va((o,s,m)=>{const h=new be(e(o,m),void 0);return s.tail=h,h},l,t),a=ue();return i.tail=a,ke(l)}function Fa(e,t){const l=ue(),i=Xr((o,s)=>{const m=new be(e(s),void 0);return o.tail=m,m},l,t),a=ue();return i.tail=a,ke(l)}function Ia(e){return wr((t,l)=>[t,l],e)}function Ba(e,t){console.error(e,t)}function ll(e,t,l){nl(i=>{try{i(t)}catch(a){e(a)}},l)}function il(){return c()}function Da(e){return ka(e)}function Va(e){throw new Error(e)}const Na="Enumeration already finished.",Ma="Enumeration has not started. Call MoveNext.",al="The input sequence has an insufficient number of elements.",Ra="Reset is not supported on this enumerator.";function za(){throw new Error(Ra)}function Yr(){throw new Error(Ma)}function Zr(){throw new Error(Na)}class Pa{constructor(t){this.f=t}toString(){const t=this,l=4;let i=0,a="seq [";const o=qe(t);try{for(;i<l?o["System.Collections.IEnumerator.MoveNext"]():!1;)i>0&&(a=a+"; "),a=a+Be(o["System.Collections.Generic.IEnumerator`1.get_Current"]()),i=i+1|0;return i===l&&(a=a+"; ..."),a+"]"}finally{o.Dispose()}}GetEnumerator(){return this.f()}[Symbol.iterator](){return En(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return this.f()}}function La(e){return new Pa(e)}class _a{constructor(t,l,i){this.current=t,this.next=l,this.dispose=i}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current()}["System.Collections.IEnumerator.get_Current"](){return this.current()}["System.Collections.IEnumerator.MoveNext"](){return this.next()}["System.Collections.IEnumerator.Reset"](){za()}Dispose(){this.dispose()}}function kr(e,t,l){return new _a(e,t,l)}function Ga(e){let t,l,i=!1,a=!1,o;const s=()=>{if(a=!0,l!=null){const m=l;try{m.Dispose()}finally{l=void 0}}if(t!=null){const m=t;try{m.Dispose()}finally{t=void 0}}};return kr(()=>(i?a&&Zr():Yr(),o!=null?Me(o):Zr()),()=>{let m;if(i||(i=!0),a)return!1;{let h;for(;h==null;){const p=[t,l];if(p[0]!=null)if(p[1]!=null){const x=p[1];if(x["System.Collections.IEnumerator.MoveNext"]())o=q(x["System.Collections.Generic.IEnumerator`1.get_Current"]()),h=!0;else try{x.Dispose()}finally{l=void 0}}else{const x=p[0];x["System.Collections.IEnumerator.MoveNext"]()?l=(m=x["System.Collections.Generic.IEnumerator`1.get_Current"](),qe(m)):(s(),h=!1)}else t=qe(e)}return Me(h)}},()=>{a||s()})}function Ha(e,t){return kr(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{t.Dispose()}finally{e()}})}function ol(e,t,l){let i=!1,a,o=q(e());const s=()=>{if(o!=null){const h=Me(o);try{l(h)}finally{o=void 0}}},m=()=>{try{s()}finally{a=void 0}};return kr(()=>(i||Yr(),a!=null?Me(a):Zr()),()=>{if(i||(i=!0),o!=null){const h=Me(o);let p;try{p=t(h)}catch(x){throw m(),x}return p!=null?(a=p,!0):(m(),!1)}else return!1},s)}function Oa(e,t){let l,i=t;return kr(()=>{if(l!=null){const a=l[0];return l[1],a}else return Yr()},()=>(l=e(i),l!=null?(l[0],i=l[1],!0):!1),()=>{})}function Wa(e,t){t==null&&Va(e)}function Nt(e){return La(e)}function Tr(e){return Wa("source",e),qe(e)}function g(e){return Nt(()=>qe(e()))}function cl(e){return Nt(()=>Ga(e))}function ja(e,t){return Nt(()=>Oa(e,t))}function Qr(){return g(()=>new Array(0))}function E(e){return g(()=>ba(e))}function A(e){return je(e)?f(e):e instanceof be?e:ae(e)}function qa(e,t,l){return Nt(()=>ol(e,t,l))}function Ua(e,t,l){return Nt(()=>{let i=-1;return ol(e,a=>(i=i+1|0,t(i,a)),l)})}function P(e,t){return cl([e,t])}function Ka(e,t,l){const i=Tr(l);try{let a=t;for(;i["System.Collections.IEnumerator.MoveNext"]();)a=e(a,i["System.Collections.Generic.IEnumerator`1.get_Current"]());return a}finally{i.Dispose()}}function Ja(e,t){Ka((l,i)=>{e(i)},void 0,t)}function nr(e,t){return qa(()=>Tr(t),l=>l["System.Collections.IEnumerator.MoveNext"]()?q(e(l["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,l=>{l.Dispose()})}function $a(e,t){return Nt(()=>{const l=Tr(t);try{for(let i=1;i<=e;i++)if(!l["System.Collections.IEnumerator.MoveNext"]())throw new Error(al+"\\nParameter name: source");return Ha(()=>{},l)}catch(i){throw l.Dispose(),i}})}function Xa(e,t){return Ua(()=>Tr(t),(l,i)=>{if(l<e){if(i["System.Collections.IEnumerator.MoveNext"]())return q(i["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(al+"\\nParameter name: source")}else return},l=>{l.Dispose()})}function sl(e,t){return g(()=>cl(nr(e,t)))}class ul extends it{constructor(t,l){super();this.bound=t|0,this.digits=l}}function ml(e,t){e:for(;;){const l=e,i=t;if(i===0)return 1;if(i%2==0){e=l*l,t=~~(i/2);continue e}else return l*ml(l*l,~~(i/2))|0}}J(2013265921,0,!1);J(2013265921,0,!0);const Ya=29;It(Ya-1,e=>ml(2,e),Int32Array);function en(e){return e.bound}function lr(e,t){return e.digits[t]}function tn(e,t){return U(lr(e,t),!1,2)}function Fr(e,t,l){e.digits[t]=l|0}function rn(e,t){e:for(;;){const l=e,i=t;if(i===0)return J(1,0,!1);if(i%2==0){e=Se(l,l),t=~~(i/2);continue e}else return Se(l,rn(Se(l,l),~~(i/2)))}}function Mt(e,t){e:for(;;){const l=e,i=t;if(i===0)return 1;if(i%2==0){e=l*l,t=~~(i/2);continue e}else return l*Mt(l*l,~~(i/2))|0}}function Za(e){let t=0;for(let l=0;l<=e.bound-1;l++)t=e.digits[l]+(t<<3)|0;return t|0}const Rt=24,ut=16777216,Re=J(16777216,0,!1),zt=J(16777215,0,!1);J(16777215,0,!0);function mt(e){return new ul(e,new Int32Array(e))}function Qa(e){return new ul(e.bound,ya(e.digits))}function ze(e){const l=((i,a)=>{e:for(;;){const o=i,s=a;if(s===-1?!0:o[s]!==0)return s+1|0;i=o,a=s-1;continue e}})(e.digits,e.bound-1)|0;return e.bound=l|0,e}const dl=2,pl=3;function ir(e){const t=(e<0?0:e)|0;if(t<ut){const l=mt(1);return l.digits[0]=t|0,ze(l)}else{const l=mt(dl);for(let i=0;i<=dl-1;i++)l.digits[i]=~~(t/Mt(ut,i))%ut|0;return ze(l)}}function eo(e){const t=yr(e,J(0,0,!1))<0?J(0,0,!1):e,l=mt(pl);for(let i=0;i<=pl-1;i++)l.digits[i]=~~Ne(ta(_e(t,rn(Re,i)),Re))|0;return ze(l)}function to(e){if(e.bound===1)return e.digits[0]|0;{let t=0;for(let l=e.bound-1;l>=0;l--)t=e.digits[l]+ut*t|0;return t|0}}const ro=ir(1),no=ir(0);function oe(e){return e.bound-1}function ee(e){return e.bound===0}function hl(e,t){return e.bound===t.bound?((i,a,o)=>{e:for(;;){const s=i,m=a,h=o;if(h===-1)return!0;if(s[h]===m[h]){i=s,a=m,o=h-1;continue e}else return!1}})(e.digits,t.digits,e.bound-1):!1}function lo(e,t,l,i){return e.bound+t<l.bound+i?-1:e.bound+t>l.bound+t?1:((o,s,m)=>{e:for(;;){const h=o,p=s,x=m;if(x===-1)return 0;{const S=(x<t?0:h[x-t])|0,T=(x<i?0:p[x-i])|0;if(S===T){o=h,s=p,m=x-1;continue e}else return S<T?-1:1}}})(e.digits,l.digits,e.bound+t-1)|0}function io(e,t){return e.bound<t.bound?-1:e.bound>t.bound?1:((i,a,o)=>{e:for(;;){const s=i,m=a,h=o;if(h===-1)return 0;if(s[h]===m[h]){i=s,a=m,o=h-1;continue e}else return s[h]<m[h]?-1:1}})(e.digits,t.digits,e.bound-1)|0}function fl(e,t){return io(e,t)===-1}function ao(e,t){const l=mt(2),i=Se(U(e,!1,2),U(t,!1,2));return Fr(l,0,~~Ne(Tt(i,zt))),Fr(l,1,~~Ne(_e(i,Re))),ze(l)}function xl(e,t,l){e:for(;;){const i=e,a=t,o=l;if(yr(a,J(0,0,!1))>0){const s=Ee(tn(i,o),a);Fr(i,o,~~Ne(Tt(s,zt))),e=i,t=_e(s,Re),l=o+1;continue e}break}}function gl(e,t){const l=en(e)|0,i=mt(l+1),a=U(t,!1,2);let o=J(0,0,!1);for(let s=0;s<=l-1;s++){const m=Ee(Ee(o,tn(i,s)),Se(tn(e,s),a));Fr(i,s,~~Ne(Tt(m,zt))),o=_e(m,Re)}return xl(i,o,l),ze(i)}function oo(e,t){const l=mt(e.bound+t.bound),i=l.digits;for(let a=0;a<=e.bound-1;a++){const o=U(e.digits[a],!1,2);let s=J(0,0,!1),m=a;for(let h=0;h<=t.bound-1;h++){const p=U(t.digits[h],!1,2),x=Ee(Ee(U(i[m],!1,2),s),Se(o,p));i[m]=~~Ne(Tt(x,zt))|0,s=_e(x,Re),m=m+1|0}xl(l,s,m)}return ze(l)}function co(e,t){const l=en(e)===1,i=en(t)===1;return(l?i:!1)?ao(lr(e,0),lr(t,0)):l?gl(t,lr(e,0)):i?gl(e,lr(t,0)):oo(e,t)}class so extends it{constructor(t,l,i,a,o,s,m){super();this.bigL=t|0,this.twoToBigL=l|0,this.k=i|0,this.bigK=a|0,this.bigN=o|0,this.split=s|0,this.splits=m}}function me(e,t,l,i){return new so(e,Mt(2,e),t,l,i,~~(Rt/e),It(~~(Rt/e),a=>Mt(2,e*a),Int32Array))}const uo=[me(1,28,268435456,268435456),me(2,26,67108864,134217728),me(3,24,16777216,50331648),me(4,22,4194304,16777216),me(5,20,1048576,5242880),me(6,18,262144,1572864),me(7,16,65536,458752),me(8,14,16384,131072),me(9,12,4096,36864),me(10,10,1024,10240),me(11,8,256,2816),me(12,6,64,768),me(13,4,16,208)];It(Rt,e=>Mt(2,e)-1,Int32Array);It(Rt,e=>Mt(2,e),Int32Array);It(Rt,e=>rn(J(2,0,!1),e));~~(uo[0].bigN/Rt);function mo(e,t){return co(e,t)}function po(e,t,l,i){const a=[e.digits,oe(e)],o=a[0],s=[l.digits,oe(l)],m=s[1]|0,h=s[0],p=U(t,!1,2);let x=0,S=Se(p,U(h[0],!1,2));for(;yr(S,J(0,0,!1))>0?!0:x<m;){if(x>a[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let T=~~Ne(Tt(S,zt)),N=_e(S,Re);T<=o[x+i]?o[x+i]=o[x+i]-T|0:(o[x+i]=o[x+i]+(ut-T)|0,N=Ee(N,J(1,0,!1))),x<m?S=Ee(N,Se(p,U(h[x+1],!1,2))):S=N,x=x+1|0}ze(e)}function ho(e,t,l,i){const a=[e.digits,oe(e)],o=a[0],s=[l.digits,oe(l)],m=s[1]|0,h=s[0],p=U(t,!1,2);let x=0,S=Se(p,U(h[0],!1,2));for(;yr(S,J(0,0,!1))>0?!0:x<m;){if(x>a[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let T=~~Ne(Tt(S,zt)),N=_e(S,Re);T<ut-o[x+i]?o[x+i]=o[x+i]+T|0:(o[x+i]=T-(ut-o[x+i])|0,N=Ee(N,J(1,0,!1))),x<m?S=Ee(N,Se(p,U(h[x+1],!1,2))):S=N,x=x+1|0}ze(e)}function fo(e,t,l){const i=[oe(t),oe(e)],a=i[1]|0,o=i[0]|0;if(a<o+l)return 0;{const s=[t.digits,e.digits],m=s[1],h=s[0],p=(o===0?a===l?~~(m[l]/h[0]):~~Ne(_e(Ee(Se(U(m[a],!1,2),Re),U(m[a-1],!1,2)),U(h[0],!1,2))):a===o+l?~~(m[a]/(h[o]+1)):~~Ne(_e(Ee(Se(U(m[a],!1,2),Re),U(m[a-1],!1,2)),Ee(U(h[o],!1,2),J(1,0,!1)))))|0;return p===0?lo(t,l,e,0)!==1?1:0:p|0}}function xo(e,t){if(ee(t))throw new Error;if(oe(e)<oe(t))return[no,e];{const l=Qa(e),i=mt(oe(e)-oe(t)+1+1);let a=oe(e);const o=oe(t)|0;let s=a-o,m=!1;for(;!m;){const h=fo(l,t,s)|0;h>0?(po(l,h,t,s),ho(i,h,ro,s)):(m=h===0?s===0:!1,m||(a===o+s?s=s-1|0:(s=s-1|0,a=a-1|0)))}return[ze(i),ze(l)]}}ir(2);function nn(e){return ir(e)}function go(e){return eo(e)}function El(e){const t=oe(e)|0,l=(o,s,m)=>{e:for(;;){const h=o,p=s,x=m;if(oe(x)>t)return $r([p,x],h);o=$r([p,x],h),s=p+1,m=mo(x,x);continue e}},i=(o,s,m,h)=>{e:for(;;){const p=o,x=s,S=m,T=h;if(v(T)){const N=to(S)|0;return(p?N===0:!1)?x:$r(bn(N),x)}else{const N=k(T),O=xo(S,w(T)[1]),G=O[1],X=O[0];if(p?ee(X):!1){o=p,s=x,m=G,h=N;continue e}else{o=p,s=i(!1,x,G,N),m=X,h=N;continue e}}}},a=i(!0,c(),e,l(c(),0,ir(10)));return v(a)?"0":vr("",Vt(a))}function Eo(e){return e.bound<=1}function Sl(e){const t=e,l=0;return l<t.bound?t.digits[l]|0:0}class ye extends it{constructor(t,l){super();this.signInt=t|0,this.v=l}toString(){const t=this;switch(dt(t)|0){case-1:return ee(j(t))?"0":"-"+El(j(t));case 0:return"0";case 1:return El(j(t));default:throw new Error("signs should be +/- 1 or 0")}}Equals(t){const l=this;return t instanceof ye?bl(l,t):!1}GetHashCode(){return yo(this)|0}toJSON(t){return Be(this)}CompareTo(t){const l=this;if(t instanceof ye)return bo(l,t)|0;throw new Error("the objects are not comparable\\nParameter name: obj")}}function ln(e,t){return new ye(e,t)}(()=>{ye.smallLim=4096,ye.smallPosTab=It(ye.smallLim,e=>nn(e)),ye.one=on(1),ye.two=on(2),ye.zero=on(0)})();function an(e){return(Eo(e)?Sl(e)<ye.smallLim:!1)?ye.smallPosTab[Sl(e)]:e}function dt(e){return e.signInt}function j(e){return e.v}function bl(e,t){const l=[dt(e),dt(t)];let i;switch(l[0]===-1?l[1]===-1?i=1:l[1]===0?i=8:l[1]===1?i=3:i=9:l[0]===0?l[1]===-1?i=6:l[1]===0?i=4:l[1]===1?i=5:i=9:l[0]===1?l[1]===-1?i=2:l[1]===0?i=7:l[1]===1?i=0:i=9:i=9,i){case 0:return hl(j(e),j(t));case 1:return hl(j(e),j(t));case 2:return ee(j(e))?ee(j(t)):!1;case 3:return ee(j(e))?ee(j(t)):!1;case 4:return!0;case 5:return ee(j(t));case 6:return ee(j(t));case 7:return ee(j(e));case 8:return ee(j(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function So(e,t){const l=[dt(e),dt(t)];let i;switch(l[0]===-1?l[1]===-1?i=1:l[1]===0?i=8:l[1]===1?i=3:i=9:l[0]===0?l[1]===-1?i=6:l[1]===0?i=4:l[1]===1?i=5:i=9:l[0]===1?l[1]===-1?i=2:l[1]===0?i=7:l[1]===1?i=0:i=9:i=9,i){case 0:return fl(j(e),j(t));case 1:return fl(j(t),j(e));case 2:return!1;case 3:return ee(j(e))?!ee(j(t)):!0;case 4:return!1;case 5:return!ee(j(t));case 6:return!1;case 7:return!1;case 8:return!ee(j(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function bo(e,t){return So(e,t)?-1:bl(e,t)?0:1}function yo(e){return dt(e)===0?1:dt(e)+Za(j(e))|0}function on(e){return e>=0?ln(1,an(nn(e))):e===-2147483648?ln(-1,an(go(ra(U(e,!1,2))))):ln(-1,an(nn(zi(e))))}function Co(e,t,l,i){const a=lt(e,l)|0;if(a===0)throw new Error("The step of a range cannot be zero");const o=a>0;return s=>{const m=lt(s,t)|0;return((o?m<=0:!1)?!0:o?!1:m>=0)?[s,i(s,e)]:void 0}}function Ao(e,t,l,i,a){const o=Co(t,l,i,a);return g(()=>ja(o,e))}function vo(e,t,l){return Ao(e,t,l,0,(i,a)=>i+a)}class Pt extends jr{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["Writable","ReadWritable"]}}class wo{constructor(t){this.state=new Pt(0,Zn(new Array(wn((l,i)=>An(l,i),t,10)),0,wn((l,i)=>An(l,i),t,10),null),0)}}function ko(e){return new wo(e)}function To(e){const t=e.state;if(t.tag===1){const l=t.fields[1]|0,i=t.fields[2]|0,a=t.fields[0],o=(i+1)%a.length|0;return o===l?e.state=new Pt(0,a,l):e.state=new Pt(1,a,l,o),q(a[i])}else return}function Fo(e,t){const l=e.state;if(l.tag===1){const i=l.fields[1]|0,a=l.fields[2]|0,o=l.fields[0];o[i]=t;const s=(i+1)%o.length|0;s===a?e.state=new Pt(1,Io(e,a,o),o.length,0):e.state=new Pt(1,o,s,a)}else{const i=l.fields[1]|0,a=l.fields[0];a[i]=t;const o=(i+1)%a.length|0;e.state=new Pt(1,a,o,i)}}function Io(e,t,l){return Array.from(g(()=>P($a(t,l),g(()=>P(Xa(t,l),g(()=>sl(i=>E(null),vo(0,1,l.length))))))))}class yl extends it{constructor(t,l,i,a,o,s,m){super();this.init=t,this.update=l,this.subscribe=i,this.view=a,this.setState=o,this.onError=s,this.syncDispatch=m}}function Bo(e,t,l){return new yl(e,t,i=>il(),l,(i,a)=>{l(i,a)},i=>{Ba(i[0],i[1])},Or(2,i=>i))}function Do(e,t){return new yl(t.init,t.update,t.subscribe,t.view,e,t.onError,t.syncDispatch)}function Vo(e){return kn(2,e.view)}function No(e,t){const l=t.init(e),i=l[0],a=ko(10);let o=!1,s=i;const m=p=>{if(o)Fo(a,p);else{o=!0;let x=q(p);for(;x!=null;){const S=Me(x);try{const T=t.update(S,s),N=T[0];t.setState(N,h),ll(O=>{t.onError([Kr(Un("Error in command while handling: %A"))(S),O])},h,T[1]),s=N}catch(T){t.onError([Kr(Un("Unable to process the message: %A"))(S),T])}x=To(a)}o=!1}},h=fi(1,t.syncDispatch,[m]);t.setState(i,h),ll(p=>{t.onError(["Error intitializing:",p])},h,Da(f([(()=>{try{return t.subscribe(i)}catch(p){return t.onError(["Unable to subscribe:",p]),il()}})(),l[1]])))}function Mo(e){No(void 0,e)}class Ro extends it{constructor(t,l,i){super();this.model=t,this.render=l,this.equal=i}}class zo extends n.exports.Component{constructor(t){super(t)}shouldComponentUpdate(t,l){const i=this;return!i.props.equal(i.props.model,t.model)}render(){return this.props.render()}}function Po(e,t,l,i){return n.exports.createElement(zo,new Ro(l,()=>t(l,i),e))}function Lo(e,t,l){return Do((i,a)=>{Fl.exports.render(e((o,s)=>o===s,Or(2,Vo(l)),i,a),document.getElementById(t))},l)}function _o(e,t){return Lo((l,i,a,o)=>Po(l,i,a,o),e,t)}const r=Il,Go=e=>{n.exports.useEffect(()=>{const t=e();return()=>{t.Dispose()}})},Ho=(e,t)=>{n.exports.useEffect(()=>{const l=e();return()=>{l.Dispose()}},t)},Oo=e=>{n.exports.useLayoutEffect(()=>{const t=e();return()=>{t.Dispose()}})},Wo=Go,jo=Ho,qo=Oo;function Uo(e,t,l,i){const a=r.memo(e,Or(2,rr(kn(2,l),null)));return Ja(o=>{e.displayName=o},ga(t)),o=>r.createElement(a,Ko(i,o))}function Ko(e,t){if(e==null)return t;{const l=e;return t.key=l(t),t}}function ar(e){return{Dispose(){e()}}}function cn(e){Wo(e)}function Jo(e){qo(t=>(e(),ar(()=>{})))}function $o(e){Xo(e,[])}function Xo(e,t){jo(l=>(e(),ar(()=>{})),t)}function Yo(e,t){return r.useCallback(e,rr(t,[]))}function Cl(e){return r.useRef(e)}function Zo(){return Cl(void 0)}function te(e,t){return r.useMemo(e,rr(t,[]))}function Qo(e,t,l){return Uo(e,void 0,l,t)}function Ir(e){const t=Cl(e),l=Yo(i=>t.current(i),[]);return Jo(()=>{t.current=e}),l}function D(e){return r.useState(e)}class or extends jr{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["FSharp","Bash"]}}function cr(e){const t=e.text,l=e.lang,i=Zo();$o(()=>{const o=i.current;o==null?console.warn("Failed to find element"):Prism.highlightAllUnder(o)});const a=l.tag===1?"language-bash":"language-fsharp";return n.exports.createElement("pre",{ref:i,className:a,children:r.Children.toArray([n.exports.createElement("code",{children:[t]})])})}function ec(e){const t=e.elements;return r.createElement(Vr,{UNSAFE_className:"example-result",children:r.Children.toArray(Array.from(t))})}function V(e){const t=e.examples,l=e.description,i=e.title;return n.exports.createElement(n.exports.Fragment,{},...A(g(()=>P(E(n.exports.createElement("h1",{className:"title example-group-title",children:r.Children.toArray([i])})),g(()=>P(E(n.exports.createElement("p",{className:"example-group-description",children:r.Children.toArray(Array.from(l))})),g(()=>sl(a=>P(E(a[1]),g(()=>a[0]!==rl(t)-1?P(E(n.exports.createElement("br",{})),g(()=>P(E(r.createElement(re,{size:"S"})),g(()=>E(n.exports.createElement("br",{})))))):Qr())),Ia(t)))))))))}function d(e){const t=e.elements,l=e.description,i=e.code,a=e.title;return n.exports.createElement(n.exports.Fragment,{},...A(g(()=>P(E(n.exports.createElement("h2",{className:"subtitle",children:r.Children.toArray([a])})),g(()=>P(nr(o=>o,l),g(()=>E(r.createElement(I,{direction:"column",gap:"size-100",children:r.Children.toArray([n.exports.createElement(cr,{lang:new or(0),text:i}),n.exports.createElement(ec,{elements:t})])})))))))))}const Al=f(["blue-400","blue-500","blue-600","blue-700","celery-400","celery-500","celery-600","celery-700","chartreuse-400","chartreuse-500","chartreuse-600","chartreuse-700","fuchsia-400","fuchsia-500","fuchsia-600","fuchsia-700","gray-50","gray-75","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","green-400","green-500","green-600","green-700","indigo-400","indigo-500","indigo-600","indigo-700","informative","magenta-400","magenta-500","magenta-600","magenta-700","negative","notice","orange-400","orange-500"]);function tc(){return n.exports.createElement(n.exports.Fragment,{},n.exports.createElement("h1",{className:"title",children:r.Children.toArray(["Feliz.ReactSpectrum",n.exports.createElement("a",{href:"https://www.nuget.org/packages/Feliz.ReactSpectrum/",children:r.Children.toArray([n.exports.createElement("img",{alt:"NuGet badge",src:"https://img.shields.io/nuget/v/Feliz.ReactSpectrum.svg?style=square"})])})])}),n.exports.createElement("h2",{className:"subtitle",children:r.Children.toArray(["Feliz-style Fable bindings for Adobe's React Spectrum components"])}),r.createElement(re,{size:"M",marginTop:10,marginBottom:10}),n.exports.createElement("p",{children:r.Children.toArray(["Fable bindings for ",n.exports.createElement("a",{href:"https://react-spectrum.adobe.com/react-spectrum/",children:r.Children.toArray(["Adobe's React Spectrum components"])}),", written in the excelent ",n.exports.createElement("a",{href:"https://github.com/Zaid-Ajaj/Feliz",children:r.Children.toArray(["Feliz DSL style"])}),"."])}),n.exports.createElement("h2",{className:"subtitle paragraph",children:r.Children.toArray(["Features"])}),n.exports.createElement("ul",{className:"bullet-list",children:r.Children.toArray([n.exports.createElement("li",{children:["Covers all React Spectrum components as of version 3.15.1"]}),n.exports.createElement("li",{children:["Fully erased - the generated JS is zero size"]}),n.exports.createElement("li",{children:r.Children.toArray(["Compatible with the ",n.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:r.Children.toArray(["Femto dotnet tool"])})])})])}))}function rc(){return n.exports.createElement(n.exports.Fragment,{},n.exports.createElement("h2",{className:"subtitle",children:r.Children.toArray(["Using the Femto dotnet tool"])}),n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["The easiest way to install the package is using the ",n.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:r.Children.toArray(["Femto dotnet tool"])})," since this will also take care of installing the correct npm dependencies."])}),n.exports.createElement(cr,{lang:new or(1),text:"dotnet femto install Feliz.ReactSpectrum"}),n.exports.createElement("h2",{className:"subtitle",children:r.Children.toArray(["Manual installation"])}),n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["You can install the package using NuGet:"])}),n.exports.createElement(cr,{lang:new or(1),text:"dotnet add package Feliz.ReactSpectrum"}),n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["Or in case you use Paket:"])}),n.exports.createElement(cr,{lang:new or(1),text:"dotnet paket add Feliz.ReactSpectrum"}),n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["Don't forget to also install the npm dependencies:"])}),n.exports.createElement(cr,{lang:new or(1),text:`npm install @adobe/react-spectrum\r
npm install @spectrum-icons/illustrations\r
npm install @spectrum-icons/workflow`}))}function nc(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.ActionButton [\r
    ActionButton.content "Press me"\r
    ActionButton.onPress (fun ev ->\r
        Browser.Dom.window.alert("I was clicked!")\r
    )\r
]`,description:c(),elements:u(r.createElement(M,{children:"Press me",onPress:e=>{window.alert(q("I was clicked!"))}}))})}function lc(){let e;return n.exports.createElement(d,{title:"Adding an icon",code:`Spectrum.ActionButton [\r
    ActionButton.children [\r
        Spectrum.Icon.Airplane [\r
            Icon.size IconSize.M\r
        ]\r
        Spectrum.Text "I have an airplane icon"\r
    ]\r
    ActionButton.onPress (fun ev ->\r
        Browser.Dom.console.log("Event: ", ev)\r
    )\r
]`,description:c(),elements:u(r.createElement(M,{children:r.Children.toArray([(e=Bl,r.createElement(e,{size:"M"})),r.createElement(C,{children:r.Children.toArray(["I have an airplane icon"])})]),onPress:t=>{console.log("Event: ",t)}}))})}function ic(){let e;return n.exports.createElement(d,{title:"Icon-only",code:`Spectrum.ActionButton [\r
    ActionButton.ariaLabel "Edit"\r
    ActionButton.children [\r
        Spectrum.Icon.Edit [\r
            Icon.size IconSize.S\r
        ]\r
    ]\r
    ActionButton.onPress (fun ev ->\r
        Browser.Dom.console.log("Event: ", ev)\r
    )\r
]`,description:c(),elements:u(r.createElement(M,{["aria-label"]:"Edit",children:r.Children.toArray([(e=mn,r.createElement(e,{size:"S"}))]),onPress:t=>{console.log("Event: ",t)}}))})}function ac(){const e=f(["ActionButtons allow users to perform an action. They\u2019re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren\u2019t meant to draw a lot of attention.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionButton.html"})," for more details."]);return n.exports.createElement(V,{title:"ActionButton",description:e,examples:f([n.exports.createElement(nc,null),n.exports.createElement(lc,null),n.exports.createElement(ic,null)])})}function oc(){return n.exports.createElement(d,{title:"Default example",code:`let action, setAction = React.useState("")\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D("");return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(ht,{onAction:t[1],children:[r.createElement(y,{key:"add",title:"Add"}),r.createElement(y,{key:"delete",title:"Delete"}),r.createElement(y,{key:"edit",title:"Edit"})]}),(e=`Action ${t[0]}`,n.exports.createElement("p",{children:[e]}))))}))})}function cc(){return n.exports.createElement(d,{title:"Multiple selection",code:`let selected, setSelected = React.useState([ "list" ])\r
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
]`,description:c(),elements:A(g(()=>{let e,t;const l=D(u("list")),i=l[0];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(ht,pe(f([["selectionMode","multiple"],["selectedKeys",Array.from(i)],(e=a=>{a instanceof be&&l[1](a)},["onSelectionChange",a=>{const o=a;e(o==="all"?"all":ae(o.values()))}]),["children",[r.createElement(y,{key:"grid",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Grid view"])})])}),r.createElement(y,{key:"list",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["List view"])})])}),r.createElement(y,{key:"gallery",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Gallery view"])})])})]]]))),(t=Kr(ua("Current selection (controller): %A%P()",[Vt(i)])),r.createElement(C,{children:r.Children.toArray([t])}))))}))})}function sc(){let e,t,l;return n.exports.createElement(d,{title:"With icons",code:`Spectrum.ActionGroup [\r
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
]`,description:c(),elements:u(r.createElement(ht,{children:[r.createElement(y,{key:"edit2",children:r.Children.toArray([(e=sr,r.createElement(e,{})),r.createElement(C,{children:r.Children.toArray(["Edit"])})])}),r.createElement(y,{key:"copy2",children:r.Children.toArray([(t=Mr,r.createElement(t,{})),r.createElement(C,{children:r.Children.toArray(["Copy"])})])}),r.createElement(y,{key:"delete2",children:r.Children.toArray([(l=ur,r.createElement(l,{})),r.createElement(C,{children:r.Children.toArray(["Delete"])})])})]}))})}function uc(){return n.exports.createElement(d,{title:"Using an item template",code:`let items = [\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=f([{label:"React",name:"_React"},{label:"Add",name:"_Add"},{label:"Delete",name:"_Delete"}]);return E(r.createElement(ht,pe(f([["items",Array.from(t)],["isEmphasized",!0],["selectionMode","single"],(e=l=>{let i,a;switch(l instanceof be?v(l)?i=1:v(k(l))?(i=0,a=w(l)):i=1:i=1,i){case 0:{console.log("Selection: ",a);break}}},["onSelectionChange",l=>{const i=l;e(i==="all"?"all":ae(i.values()))}]),["children",l=>r.createElement(y,{key:l.name,children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray([l.label])})])})]]))))}))})}function mc(){let e,t,l,i,a;return n.exports.createElement(d,{title:"Collapsing buttons",code:`Spectrum.ActionGroup [\r
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
]`,description:c(),elements:u(r.createElement(ht,{overflowMode:"collapse",maxWidth:250,children:[r.createElement(y,{key:"edit",textValue:"Edit",children:r.Children.toArray([(e=sr,r.createElement(e,{})),r.createElement(C,{children:r.Children.toArray(["Edit"])})])}),r.createElement(y,{key:"copy",textValue:"Copy",children:r.Children.toArray([(t=Mr,r.createElement(t,{})),r.createElement(C,{children:r.Children.toArray(["Copy"])})])}),r.createElement(y,{key:"delete",textValue:"Delete",children:r.Children.toArray([(l=ur,r.createElement(l,{})),r.createElement(C,{children:r.Children.toArray(["Delete"])})])}),r.createElement(y,{key:"move",textValue:"Move",children:r.Children.toArray([(i=Dl,r.createElement(i,{})),r.createElement(C,{children:r.Children.toArray(["Move"])})])}),r.createElement(y,{key:"duplicate",textValue:"Duplicate",children:r.Children.toArray([(a=Vl,r.createElement(a,{})),r.createElement(C,{children:r.Children.toArray(["Duplicate"])})])})]}))})}function dc(){let e,t,l,i,a;return n.exports.createElement(d,{title:"Collapsed with multiple selection",code:`Spectrum.ActionGroup [\r
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
]`,description:c(),elements:u(r.createElement(ht,{["aria-label"]:"Text style",overflowMode:"collapse",selectionMode:"multiple",isEmphasized:!0,summaryIcon:(e=Nl,r.createElement(e,{})),maxWidth:100,children:[r.createElement(y,{key:"bold",textValue:"Bold",children:r.Children.toArray([(t=Ml,r.createElement(t,{})),r.createElement(C,{children:r.Children.toArray(["Bold"])})])}),r.createElement(y,{key:"italic",textValue:"Italic",children:r.Children.toArray([(l=Rl,r.createElement(l,{})),r.createElement(C,{children:r.Children.toArray(["Italic"])})])}),r.createElement(y,{key:"underline",textValue:"Underline",children:r.Children.toArray([(i=zl,r.createElement(i,{})),r.createElement(C,{children:r.Children.toArray(["Underline"])})])}),r.createElement(y,{key:"strike",textValue:"Strikethrough",children:r.Children.toArray([(a=Pl,r.createElement(a,{})),r.createElement(C,{children:r.Children.toArray(["Strikethrough"])})])})]}))})}function pc(){const e=f(["An ActionGroup is a grouping of ActionButtons that are related to one another.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html"})," for more details."]);return n.exports.createElement(V,{title:"ActionGroup",description:e,examples:f([n.exports.createElement(oc,null),n.exports.createElement(cc,null),n.exports.createElement(sc,null),n.exports.createElement(uc,null),n.exports.createElement(mc,null),n.exports.createElement(dc,null)])})}function hc(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Button [\r
    Button.variant ButtonVariant.CTA\r
    Button.content "Save"\r
]`,description:c(),elements:u(r.createElement(L,{variant:"cta",children:"Save"}))})}function fc(){let e;return n.exports.createElement(d,{title:"Icon + label",code:`Spectrum.Button [\r
    Button.variant ButtonVariant.Primary\r
    Button.children [\r
        Spectrum.Icon.Bell []\r
        Spectrum.Text "Icon + Label"\r
    ]\r
]`,description:c(),elements:u(r.createElement(L,{variant:"primary",children:r.Children.toArray([(e=dn,r.createElement(e,{})),r.createElement(C,{children:r.Children.toArray(["Icon + Label"])})])}))})}function xc(){return n.exports.createElement(d,{title:"Button variants",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"row",alignItems:"center",gap:"size-100",children:r.Children.toArray([r.createElement(L,{variant:"cta",children:"CTA"}),r.createElement(L,{variant:"primary",children:"Primary"}),r.createElement(L,{variant:"secondary",children:"Secondary"}),r.createElement(L,{variant:"negative",children:"Negative"}),r.createElement(R,{backgroundColor:"green-400",padding:20,children:r.Children.toArray([r.createElement(L,{variant:"overBackground",children:"Over background"})])})])}))})}function gc(){const e=f(["Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Button.html"})," for more details."]);return n.exports.createElement(V,{title:"Button",description:e,examples:f([n.exports.createElement(hc,null),n.exports.createElement(fc,null),n.exports.createElement(xc,null)])})}function Ec(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.ButtonGroup [\r
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
]`,description:c(),elements:u(n.exports.createElement(Te,c(),r.createElement(L,{variant:"secondary",children:"No, thanks"}),r.createElement(L,{variant:"secondary",children:"Remind me later"}),r.createElement(L,{variant:"primary",children:"Rate now"})))})}function Sc(){return n.exports.createElement(d,{title:"Orientation",code:`Spectrum.ButtonGroup [\r
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
]`,description:c(),elements:u(r.createElement(Te,{orientation:"vertical",children:r.Children.toArray([r.createElement(L,{variant:"secondary",children:"No, thanks"}),r.createElement(L,{variant:"secondary",children:"Remind me later"}),r.createElement(L,{variant:"primary",children:"Rate now"})])}))})}function bc(){return n.exports.createElement(d,{title:"Alignment",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{gap:10,direction:"column",alignItems:"start",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["align = 'end'"])}),r.createElement(Te,{orientation:"vertical",align:"end",children:r.Children.toArray([r.createElement(L,{variant:"secondary",children:"No, thanks"}),r.createElement(L,{variant:"secondary",children:"Remind me later"}),r.createElement(L,{variant:"primary",children:"Rate now"})])}),r.createElement(C,{children:r.Children.toArray(["align = 'center'"])}),r.createElement(Te,{orientation:"vertical",align:"center",children:r.Children.toArray([r.createElement(L,{variant:"secondary",children:"No, thanks"}),r.createElement(L,{variant:"secondary",children:"Remind me later"}),r.createElement(L,{variant:"primary",children:"Rate now"})])})])}))})}function yc(){const e=f(["ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html"})," for more details."]);return n.exports.createElement(V,{title:"ButtonGroup",description:e,examples:f([n.exports.createElement(Ec,null),n.exports.createElement(Sc,null),n.exports.createElement(bc,null)])})}function Cc(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.LogicButton [\r
    LogicButton.variant LogicButtonVariant.And\r
    LogicButton.children [\r
        Spectrum.Text "And"\r
    ]\r
]`,description:c(),elements:u(r.createElement(Nr,{variant:"and",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["And"])})])}))})}function Ac(){return n.exports.createElement(d,{title:"Or variant",code:`Spectrum.LogicButton [\r
    LogicButton.variant LogicButtonVariant.Or\r
    LogicButton.children [\r
        Spectrum.Text "Or"\r
    ]\r
]`,description:c(),elements:u(r.createElement(Nr,{variant:"or",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Or"])})])}))})}function vc(){return n.exports.createElement(d,{title:"Events",code:`let variant, setVariant = React.useState(LogicButtonVariant.Or)\r
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
]`,description:c(),elements:A(g(()=>{const e=D("or"),t=e[0];return E(r.createElement(Nr,{variant:t,onPress:l=>{e[1](t==="or"?"and":"or")},children:t}))}))})}function wc(){const e=f(["A LogicButton displays an operator within a boolean logic sequence.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/LogicButton.html"})," for more details."]);return n.exports.createElement(V,{title:"LogicButton",description:e,examples:f([n.exports.createElement(Cc,null),n.exports.createElement(Ac,null),n.exports.createElement(vc,null)])})}function kc(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.ToggleButton [\r
    Spectrum.Text "Pin"\r
]`,description:c(),elements:u(n.exports.createElement(Gt,c(),r.createElement(C,{children:r.Children.toArray(["Pin"])})))})}function Tc(){let e;return n.exports.createElement(d,{title:"Using icons",code:`Spectrum.ToggleButton [\r
    ToggleButton.children [\r
        Spectrum.Icon.PinOff []\r
        Spectrum.Text "Pin"\r
    ]\r
]`,description:c(),elements:u(r.createElement(Gt,{children:r.Children.toArray([(e=mr,r.createElement(e,{})),r.createElement(C,{children:r.Children.toArray(["Pin"])})])}))})}function Fc(){return n.exports.createElement(d,{title:"Events",code:`let isSelected, setSelected = React.useState(false)\r
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
]`,description:c(),elements:A(g(()=>{let e,t;const l=D(!1),i=l[0];return E(r.createElement(Gt,{isEmphasized:!0,isSelected:i,onChange:a=>{setTimeout(()=>{l[1](a)},0)},["aria-label"]:"Pin",children:r.Children.toArray([(e=mr,r.createElement(e,{})),(t=`Is selected: ${i}`,r.createElement(C,{children:r.Children.toArray([t])}))])}))}))})}function Ic(){let e,t;return n.exports.createElement(d,{title:"Static color",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{wrap:!0,gap:"size-250",children:r.Children.toArray([r.createElement(R,{backgroundColor:"static-seafoam-700",padding:20,children:r.Children.toArray([r.createElement(Gt,{staticColor:"white",children:r.Children.toArray([(e=mr,r.createElement(e,{})),r.createElement(C,{children:r.Children.toArray(["Pin"])})])})])}),r.createElement(R,{backgroundColor:"static-yellow-400",padding:20,children:r.Children.toArray([r.createElement(Gt,{staticColor:"black",isQuiet:!0,defaultSelected:!0,children:r.Children.toArray([(t=mr,r.createElement(t,{})),r.createElement(C,{children:r.Children.toArray(["Pin"])})])})])})])}))})}function Bc(){const e=f(["ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ToggleButton.html"})," for more details."]);return n.exports.createElement(V,{title:"ToggleButton",description:e,examples:f([n.exports.createElement(kc,null),n.exports.createElement(Tc,null),n.exports.createElement(Fc,null),n.exports.createElement(Ic,null)])})}function Dc(){let e;return n.exports.createElement(d,{title:"Using the Provider component",code:`Spectrum.Provider [\r
    Provider.defaultTheme\r
    Provider.colorScheme ColorScheme.Light\r
    Provider.locale "en-US"\r
    Provider.scale Scale.Medium\r
    Provider.children [\r
        Spectrum.ActionButton [\r
            ActionButton.content "Spectrum button"\r
        ]\r
    ]\r
]`,description:c(),elements:u(r.createElement(Ht,pe(f([(e=dr,["theme",e]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["children",r.Children.toArray([r.createElement(M,{children:"Spectrum button"})])]]))))})}function Vc(){let e;const t=u(n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["You can override the default screen breakpoints as follows. Resize the browser window to see the effects."])}));return n.exports.createElement(d,{title:"Provider screen breakpoints",code:`Spectrum.Provider [\r
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
]`,description:t,elements:u(r.createElement(Ht,pe(f([(e=dr,["theme",e]),["colorScheme","light"],["breakpoints",{L:1024,M:640,S:void 0}],["children",r.Children.toArray([r.createElement(R,{height:"size-2000",backgroundColor:{base:q("celery-600"),S:void 0,M:q("blue-600"),L:q("magenta-600")}})])]]))))})}function Nc(){let e;return n.exports.createElement(d,{title:"Color scheme",code:`Spectrum.Provider [\r
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
`,description:c(),elements:u(r.createElement(Ht,pe(f([(e=dr,["theme",e]),["colorScheme","dark"],["children",r.Children.toArray([r.createElement(R,{padding:20,children:r.Children.toArray([r.createElement(M,{children:"Dark mode!"})])})])]]))))})}function Mc(){const e=u(n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["You can use a Provider component to define common properties for a group of components within. For example, you can disable multiple components as follows:"])}));return n.exports.createElement(d,{title:"Property groups",code:`Spectrum.Flex [\r
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
]`,description:e,elements:u(r.createElement(I,{direction:"column",gap:"size-100",alignItems:"start",children:r.Children.toArray([r.createElement(Ht,{isDisabled:!0,children:r.Children.toArray([r.createElement(Ze,{label:"Favorite animal",children:r.Children.toArray([r.createElement($,{value:"dogs",children:"Dogs"}),r.createElement($,{value:"cats",children:"Cats"}),r.createElement($,{value:"horses",children:"Horses"})])}),r.createElement(z,{children:r.Children.toArray(["I agree"])}),r.createElement(L,{variant:"primary",children:"Submit"})])})])}))})}function Rc(){const e=f(["Provider is the container for all React Spectrum applications. It defines the theme, locale, and other application level settings, and can also be used to provide common properties to a group of components.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Provider.html"})," for more details."]);return n.exports.createElement(V,{title:"Provider",description:e,examples:f([n.exports.createElement(Dc,null),n.exports.createElement(Vc,null),n.exports.createElement(Nc,null),n.exports.createElement(Mc,null)])})}function zc(){return n.exports.createElement(d,{title:"Vertical stack",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"column",width:"size-2000",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",height:"size-800"}),r.createElement(R,{backgroundColor:"blue-600",height:"size-800"}),r.createElement(R,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function Pc(){return n.exports.createElement(d,{title:"Horizontal stack",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"row",height:"size-800",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",width:"size-800"}),r.createElement(R,{backgroundColor:"blue-600",width:"size-800"}),r.createElement(R,{backgroundColor:"magenta-600",width:"size-800"})])}))})}function Lc(){const e=u(n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["This example shows how you can nest flexboxes to create more complicated layouts. It also uses the flex prop on one of the children to expand it to fill the repaining space."])}));return n.exports.createElement(d,{title:"Nesting",code:`Spectrum.Flex [\r
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
]`,description:e,elements:u(r.createElement(I,{direction:"column",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",height:"size-800"}),r.createElement(I,{direction:"row",height:"size-3000",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"indigo-600",width:"size-2000"}),r.createElement(R,{backgroundColor:"seafoam-600",flex:!0})])}),r.createElement(R,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function _c(){const e=u(n.exports.createElement("p",{className:"paragraph",children:r.Children.toArray(["This example shows how to enable wrapping of items into multiple rows. Resize your browser window to see the items reflow."])}));return n.exports.createElement(d,{title:"Wrapping",code:`Spectrum.Flex [\r
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
]`,description:e,elements:u(r.createElement(I,{direction:"row",gap:"size-100",wrap:!0,children:r.Children.toArray(Array.from(A(g(()=>nr(t=>r.createElement(R,{key:t,backgroundColor:t,width:"size-800",height:"size-800"}),Al)))))}))})}function Gc(){return n.exports.createElement(d,{title:"Alignment",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"column",gap:"size-100",alignItems:"center",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),r.createElement(R,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),r.createElement(R,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])}))})}function Hc(){return n.exports.createElement(d,{title:"Justification",code:`Spectrum.View [\r
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
]`,description:c(),elements:u(r.createElement(R,{height:"size-3000",borderWidth:"thin",borderColor:"dark",children:r.Children.toArray([r.createElement(I,{direction:"column",gap:"size-100",justifyContent:"center",height:"100%",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),r.createElement(R,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),r.createElement(R,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])})])}))})}function Oc(){const e=f(["A layout container using flexbox. Provides Spectrum dimension values, and supports the gap property to define consistent spacing between items.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Flex.html"})," for more details."]);return n.exports.createElement(V,{title:"Flex",description:e,examples:f([n.exports.createElement(zc,null),n.exports.createElement(Pc,null),n.exports.createElement(Lc,null),n.exports.createElement(_c,null),n.exports.createElement(Gc,null),n.exports.createElement(Hc,null)])})}function Wc(){return n.exports.createElement(d,{title:"Explicit grid",code:`Spectrum.Grid [\r
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
]`,description:c(),elements:u(r.createElement(pn,{areas:Vt(f(["header header","sidebar content","footer footer"])),columns:Vt(f(["1fr","3fr"])),rows:Vt(f(["size-1000","auto","size-1000"])),height:"size-6000",width:"80%",gap:"size-100",children:r.Children.toArray([r.createElement(R,{backgroundColor:"celery-600",gridArea:"header"}),r.createElement(R,{backgroundColor:"blue-600",gridArea:"sidebar"}),r.createElement(R,{backgroundColor:"purple-600",gridArea:"content"}),r.createElement(R,{backgroundColor:"magenta-600",gridArea:"footer"})])}))})}function jc(){let e;return n.exports.createElement(d,{title:"Implicit grid",code:`Spectrum.Grid [\r
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
]`,description:c(),elements:u(r.createElement(pn,{height:"size-6000",width:"100%",columns:(e=Ll,e("auto-fit","size-800")),autoRows:"size-800",justifyContent:"center",gap:"size-200",children:r.Children.toArray(Array.from(A(g(()=>nr(t=>r.createElement(R,{key:t,backgroundColor:t}),Al)))))}))})}function qc(){const e=f(["A layout container using CSS grid. Supports Spectrum dimensions as values to ensure consistent and adaptive sizing and spacing.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Grid.html"})," for more details."]);return n.exports.createElement(V,{title:"Grid",description:e,examples:f([n.exports.createElement(Wc,null),n.exports.createElement(jc,null)])})}function Uc(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.ListBox [\r
    ListBox.width (DimValue.Size Size2400)\r
    ListBox.ariaLabel "Alignment"\r
    ListBox.children [\r
        Spectrum.Item "Left"\r
        Spectrum.Item "Middle"\r
        Spectrum.Item "Right"\r
    ]\r
]`,description:c(),elements:u(r.createElement(Fe,{width:"size-2400",["aria-label"]:"Alignment",children:[r.createElement(y,{children:"Left"}),r.createElement(y,{children:"Middle"}),r.createElement(y,{children:"Right"})]}))})}function Kc(){return n.exports.createElement(d,{title:"Content example",code:`let options = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{id:1,name:"Aardvark"},{id:2,name:"Cat"},{id:3,name:"Dog"},{id:4,name:"Kangaroo"},{id:5,name:"Koala"},{id:6,name:"Penguin"},{id:7,name:"Snake"},{id:8,name:"Turtle"},{id:9,name:"Wombat"}]),t=D(void 0),l=t[1],i=t[0];return E(n.exports.createElement(n.exports.Fragment,{},...A(g(()=>P(E(r.createElement(Fe,{width:"size-2400",["aria-label"]:"Animals",items:Array.from(e),children:a=>r.createElement(y,{children:a.name}),selectionMode:"single",onSelectionChange:a=>{const o=ae(a.values());let s,m;switch(v(o)?s=1:v(k(o))?(s=0,m=w(o)):s=1,s){case 0:{l(m);break}case 1:{l(void 0);break}}}})),g(()=>{const a=i==null?"None selected":`Animal id: ${i}`;return E(n.exports.createElement("p",{children:[a]}))}))))))}))})}function Jc(){return n.exports.createElement(d,{title:"Selection example",code:`let options = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),t=D(u("Bison"));return E(r.createElement(I,{direction:"row",gap:"size-350",children:r.Children.toArray([r.createElement(Fe,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),defaultSelectedKeys:["Bison","Koala"],width:"size-2400",children:l=>r.createElement(y,{key:l.name,textValue:l.name,children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray([l.name])})])})}),r.createElement(Fe,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],onSelectionChange:l=>{t[1](ae(l.values()))},width:"size-2400",children:l=>r.createElement(y,{key:l.name,textValue:l.name,children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray([l.name])})])})})])}))}))})}function b(e,t){return r.createElement(y,{key:e,textValue:t,children:t})}function $c(){return n.exports.createElement(d,{title:"Sections",code:`Spectrum.ListBox [\r
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
]`,description:c(),elements:u(r.createElement(Fe,{width:"size-2400",["aria-label"]:"Pick your favorite",selectionMode:"single",children:[r.createElement(Ce,{title:"Animals",children:[b("Aardvark","Aardvark"),b("Kangaroo","Kangaroo"),b("Snake","Snake")]}),r.createElement(Ce,{title:"People",children:[b("Danni","Danni"),b("Devon","Devon"),b("Ross","Ross")]})]}))})}function Xc(){return n.exports.createElement(d,{title:"Dynamic items",code:`let options = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{animals:[{id:2,name:"Koala"},{id:3,name:"Kangaroo"},{id:4,name:"Platypus"}],name:"Australian"},{animals:[{id:6,name:"Bald Eagle"},{id:7,name:"Bison"},{id:8,name:"Skunk"}],name:"American"}]),t=D(c());return E(r.createElement(Fe,{["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],selectionMode:"single",onSelectionChange:l=>{t[1](ae(l.values()))},width:"size-2400",children:l=>r.createElement(Ce,{key:l.name,title:l.name,items:Array.from(l.animals),children:i=>{let a;return r.createElement(y,{key:(a=i.id,bn(a)),textValue:i.name,children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray([i.name])})])})}})}))}))})}function Yc(){return n.exports.createElement(d,{title:"Events",code:`let frequency, setFrequency = React.useState<string list>([])\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D(c()),l=t[0],i=a=>r.createElement(y,{key:a,textValue:a,children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray([a])})])});return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(Fe,{["aria-label"]:"Choose frequency",selectionMode:"single",onSelectionChange:a=>{t[1](ae(a.values()))},width:"size-2400",children:[i("Rarely"),i("Sometimes"),i("Always")]}),(e=`You selected: ${v(l)?"":v(k(l))?w(l):""}`,n.exports.createElement("p",{children:[e]}))))}))})}function Zc(){let e,t,l;return n.exports.createElement(d,{title:"Complex items",code:`Spectrum.ListBox [\r
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
]`,description:c(),elements:u(r.createElement(Fe,{width:"size-2400",["aria-label"]:"Options",selectionMode:"single",children:[r.createElement(Ce,{title:"Permissions",children:[r.createElement(y,{textValue:"Read",children:r.Children.toArray([(e=hn,r.createElement(e,{size:"S"})),r.createElement(C,{children:r.Children.toArray(["Read"])}),r.createElement(C,{children:r.Children.toArray(["Read only"]),slot:"description"})])}),r.createElement(y,{textValue:"Write",children:r.Children.toArray([(t=sr,r.createElement(t,{size:"S"})),r.createElement(C,{children:r.Children.toArray(["Write"])}),r.createElement(C,{children:r.Children.toArray(["Read and Write Only"]),slot:"description"})])}),r.createElement(y,{textValue:"Admin",children:r.Children.toArray([(l=_l,r.createElement(l,{size:"S"})),r.createElement(C,{children:r.Children.toArray(["Admin"])}),r.createElement(C,{children:r.Children.toArray(["Full access"]),slot:"description"})])})]})]}))})}function Qc(){return n.exports.createElement(d,{title:"Disabled keys",code:`Spectrum.ListBox [\r
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
]`,description:c(),elements:u(r.createElement(Fe,{width:"size-2400",["aria-label"]:"Pick your favorite",disabledKeys:["Snake","Ross"],selectionMode:"single",children:[r.createElement(Ce,{title:"Animals",children:[b("Aardvark","Aardvark"),b("Kangaroo","Kangaroo"),b("Snake","Snake")]}),r.createElement(Ce,{title:"People",children:[b("Danni","Danni"),b("Devon","Devon"),b("Ross","Ross")]})]}))})}function es(){const e=f(["A list of options that can allow selection of one or more.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ListBox.html"})," for more details."]);return n.exports.createElement(V,{title:"ListBox",description:e,examples:f([n.exports.createElement(Uc,null),n.exports.createElement(Kc,null),n.exports.createElement(Jc,null),n.exports.createElement($c,null),n.exports.createElement(Xc,null),n.exports.createElement(Yc,null),n.exports.createElement(Zc,null),n.exports.createElement(Qc,null)])})}function ts(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.MenuTrigger [\r
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
]`,description:c(),elements:u(n.exports.createElement(Y,c(),r.createElement(M,{children:"Edit"}),r.createElement(Z,{onAction:e=>{window.alert(q(e))},children:[b("cut","Cut"),b("copy","Copy"),b("paste","Paste"),b("replace","Replace")]})))})}function rs(){return n.exports.createElement(d,{title:"Using an item template",code:`let menuItems = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{id:"cut",name:"Cut"},{id:"copy",name:"Copy"},{id:"Paste",name:"Paste"},{id:"replace",name:"Replace"}]);return E(n.exports.createElement(Y,c(),n.exports.createElement(M,c(),"Edit"),r.createElement(Z,{items:Array.from(e),children:t=>b(t.id,t.name)})))}))})}function ns(){return n.exports.createElement(d,{title:"Events",code:`let action, setAction = React.useState("")\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D(""),l=(i,a)=>r.createElement(y,{key:i,textValue:a,children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray([a])})])});return E(n.exports.createElement(n.exports.Fragment,{},n.exports.createElement(Y,c(),n.exports.createElement(M,c(),"Edit"),r.createElement(Z,{onAction:t[1],children:[l("cut","Cut"),l("copy","Copy"),l("paste","Paste")]})),(e=`Action: ${t[0]}`,n.exports.createElement("p",{children:[e]}))))}))})}function ls(){return n.exports.createElement(d,{title:"Selection",code:`let selected, setSelected = React.useState([ "middle" ])\r
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
]`,description:c(),elements:A(g(()=>{const e=D(u("middle")),t=e[0];return E(n.exports.createElement(n.exports.Fragment,{},...A(g(()=>P(E(n.exports.createElement(Y,c(),n.exports.createElement(M,c(),"Align"),r.createElement(Z,{selectionMode:"single",selectedKeys:t,onSelectionChange:l=>{e[1](ae(l.values()))},children:[b("left","Left"),b("middle","Middle"),b("right","Right")]}))),g(()=>{let l;return v(t)?E(n.exports.createElement("p",{children:["No selection"]})):v(k(t))?E((l=`Current selection (controlled): ${w(t)}`,n.exports.createElement("p",{children:[l]}))):E(n.exports.createElement("p",{children:["No selection"]}))}))))))}))})}function is(){return n.exports.createElement(d,{title:"Selection (multiple)",code:`let selected, setSelected = React.useState([ "Sidebar"; "Console" ])\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D(f(["Sidebar","Console"])),l=t[0];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(Y,{closeOnSelect:!1,children:[n.exports.createElement(M,c(),"Show"),r.createElement(Z,{selectionMode:"multiple",selectedKeys:l,onSelectionChange:i=>{t[1](ae(i.values()))},children:[b("Sidebar","Sidebar"),b("Searchbar","Searchbar"),b("Tools","Tools"),b("Console","Console")]})]}),(e=`Current selection (controlled): ${Vt(l)}`,n.exports.createElement("p",{children:[e]}))))}))})}function as(){return n.exports.createElement(d,{title:"Sections",code:`let selected, setSelected = React.useState([ "bold"; "left" ])\r
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
]`,description:c(),elements:A(g(()=>{const e=D(f(["bold","left"]));return E(n.exports.createElement(Y,c(),n.exports.createElement(M,c(),"Edit"),r.createElement(Z,{selectionMode:"multiple",selectedKeys:e[0],onSelectionChange:t=>{e[1](ae(t.values()))},children:[r.createElement(Ce,{title:"Styles",children:[b("bold","Bold"),b("underline","Underline")]}),r.createElement(Ce,{title:"Align",children:[b("left","Left"),b("middle","Middle"),b("right","Right")]})]})))}))})}function os(){let e,t,l;return n.exports.createElement(d,{title:"Complex items",code:`Spectrum.MenuTrigger [\r
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
]`,description:c(),elements:u(n.exports.createElement(Y,c(),n.exports.createElement(M,c(),"Edit"),n.exports.createElement(Z,c(),r.createElement(y,{key:"cut",textValue:"Cut",children:r.Children.toArray([(e=Gl,r.createElement(e,{size:"S"})),r.createElement(C,{children:r.Children.toArray(["Cut"])}),r.createElement(pr,{children:r.Children.toArray(["\u2318X"])})])}),r.createElement(y,{key:"copy",textValue:"Copy",children:r.Children.toArray([(t=Mr,r.createElement(t,{size:"S"})),r.createElement(C,{children:r.Children.toArray(["Copy"])}),r.createElement(pr,{children:r.Children.toArray(["\u2318C"])})])}),r.createElement(y,{key:"paste",textValue:"Paste",children:r.Children.toArray([(l=Hl,r.createElement(l,{size:"S"})),r.createElement(C,{children:r.Children.toArray(["Paste"])}),r.createElement(pr,{children:r.Children.toArray(["\u2318V"])})])}))))})}function cs(){return n.exports.createElement(d,{title:"Disabled keys",code:`let items = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{id:"a1b2c3",name:"tiff"},{id:"g5h1j9",name:"png"},{id:"p8k3i4",name:"jpg"},{id:"j7i3a0",name:"PDF"}]);return E(n.exports.createElement(Y,c(),n.exports.createElement(M,c(),"Filter"),r.createElement(Z,{items:Array.from(e),disabledKeys:["a1b2c3","p8k3i4"],children:t=>r.createElement(y,{children:t.name})})))}))})}function ss(){const e=f(["Menus display a list of actions or options that a user can choose.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Menu.html"})," for more details."]);return n.exports.createElement(V,{title:"Menu",description:e,examples:f([n.exports.createElement(ts,null),n.exports.createElement(rs,null),n.exports.createElement(ns,null),n.exports.createElement(ls,null),n.exports.createElement(is,null),n.exports.createElement(as,null),n.exports.createElement(os,null),n.exports.createElement(cs,null)])})}function us(){return n.exports.createElement(d,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D(!1);return E(r.createElement(I,{gap:"size-100",alignItems:"center",children:r.Children.toArray([r.createElement(Y,{onOpenChange:t[1],children:[n.exports.createElement(M,c(),"Edit"),n.exports.createElement(Z,c(),r.createElement(y,{key:"cut",textValue:"Cut",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Cut"])})])}),r.createElement(y,{key:"copy",textValue:"Copy",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Copy"])})])}),r.createElement(y,{key:"paste",textValue:"Paste",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Paste"])})])}))]}),(e=`Currently open: ${t[0]}`,n.exports.createElement("div",{children:[e]}))])}))}))})}function ms(){return n.exports.createElement(d,{title:"Alignment and direction",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{gap:"size-100",children:r.Children.toArray([r.createElement(Y,{align:"start",children:[r.createElement(M,{children:r.Children.toArray(["Edit"])}),n.exports.createElement(Z,c(),b("cut","Cut"),b("copy","Copy"),b("paste","Paste"))]}),r.createElement(Y,{align:"end",direction:"top",shouldFlip:!1,children:[r.createElement(M,{children:r.Children.toArray(["View"])}),n.exports.createElement(Z,c(),b("sidebar","Sidebar"),b("options","Page options"),b("edit","Edit panel"))]}),r.createElement(Y,{align:"start",direction:"start",children:[r.createElement(M,{children:r.Children.toArray(["Edit"])}),n.exports.createElement(Z,c(),b("cut","Cut"),b("copy","Copy"),b("paste","Paste"))]}),r.createElement(Y,{align:"end",direction:"end",children:[r.createElement(M,{children:r.Children.toArray(["View"])}),n.exports.createElement(Z,c(),b("sidebar","Sidebar"),b("options","Page options"),b("edit","Edit panel"))]})])}))})}function ds(){return n.exports.createElement(d,{title:"Open and selection",code:`let isOpen, setIsOpen = React.useState(false)\r
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
]`,description:c(),elements:A(g(()=>{const e=D(!1),t=D(c());return E(r.createElement(Y,{isOpen:e[0],onOpenChange:e[1],children:[n.exports.createElement(M,c(),"View"),r.createElement(Z,{selectionMode:"multiple",selectedKeys:t[0],onSelectionChange:l=>{t[1](ae(l.values()))},children:[r.createElement(y,{key:"side",textValue:"Sidebar",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Sidebar"])})])}),r.createElement(y,{key:"options",textValue:"Page options",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Page options"])})])}),r.createElement(y,{key:"edit",textValue:"Edit panel",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Edit panel"])})])})]})]}))}))})}function ps(){const e=f(["The MenuTrigger serves as a wrapper around a Menu and its associated trigger, linking the Menu's open state with the trigger's press state.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html"})," for more details."]);return n.exports.createElement(V,{title:"MenuTrigger",description:e,examples:f([n.exports.createElement(us,null),n.exports.createElement(ms,null),n.exports.createElement(ds,null)])})}function hs(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.TableView [\r
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
]`,description:c(),elements:u(r.createElement(Rr,{["aria-label"]:"Example table with static contents",selectionMode:"multiple",children:[n.exports.createElement(zr,c(),r.createElement(Ot,{children:"Name"}),r.createElement(Ot,{children:"Type"}),r.createElement(Ot,{align:"end",children:["Date Modified"]})),n.exports.createElement(Pr,c(),n.exports.createElement(ft,c(),r.createElement(ne,{children:"Games"}),r.createElement(ne,{children:"File folder"}),r.createElement(ne,{children:"6/7/2020"})),n.exports.createElement(ft,c(),r.createElement(ne,{children:"Program Files"}),r.createElement(ne,{children:"File folder"}),r.createElement(ne,{children:"4/7/2021"})),n.exports.createElement(ft,c(),r.createElement(ne,{children:"bootmgr"}),r.createElement(ne,{children:"System file"}),r.createElement(ne,{children:"11/20/2010"})),n.exports.createElement(ft,c(),r.createElement(ne,{children:"log.txt"}),r.createElement(ne,{children:"Text Document"}),r.createElement(ne,{children:"1/18/2016"})))]}))})}function fs(){return n.exports.createElement(d,{title:"More complex example",code:`let columns = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{name:"Name",uid:"name"},{name:"Type",uid:"entryType"},{name:"Date Modified",uid:"date"}]),t=f([{date:"6/7/2020",entryType:"File folder",id:1,name:"Games"},{date:"4/7/2021",entryType:"File folder",id:2,name:"Program Files"},{date:"11/20/2010",entryType:"System file",id:3,name:"bootmgr"},{date:"1/18/2016",entryType:"Text Document",id:4,name:"log.txt"}]);return E(r.createElement(Rr,{["aria-label"]:"Example table with dynamic content",maxWidth:"size-6000",selectionMode:"multiple",disabledKeys:[3],children:[r.createElement(zr,{columns:Array.from(e),children:l=>r.createElement(Ot,{key:l.uid,align:l.uid==="date"?"end":"start",children:[l.name]})}),r.createElement(Pr,{items:t,children:l=>r.createElement(ft,{children:i=>{const a=l[i];return r.createElement(ne,{children:a})}})})]}))}))})}function xs(){return n.exports.createElement(d,{title:"Layout + highlight selection + action",code:`let columns = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{id:"firstName",name:"First Name"},{id:"lastName",name:"Last Name"},{id:"city",name:"City"}]),t=f([{city:"Sibiu",firstName:"George",id:1,lastName:"Danila"},{city:"Tilburg",firstName:"Andras",id:2,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:3,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:4,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:5,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:6,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:7,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:8,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:9,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:10,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:11,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:12,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:13,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:14,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:15,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:16,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:17,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:18,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:19,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:20,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:21,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:22,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:23,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:24,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:25,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:26,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:27,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:28,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:29,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:30,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:31,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:32,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:33,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:34,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:35,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:36,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:37,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:38,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:39,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:40,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:41,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:42,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:43,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:44,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:45,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:46,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:47,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:48,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:49,lastName:"Jaram"}]);return E(r.createElement(I,{height:"size-5000",width:"100%",direction:"column",gap:"size-150",children:r.Children.toArray([r.createElement(M,{alignSelf:"start",children:"Add"}),r.createElement(Rr,{flex:!0,["aria-label"]:"Example table with dynamic content",selectionMode:"single",selectionStyle:"highlight",onAction:l=>{window.alert(q(l))},children:[r.createElement(zr,{columns:Array.from(e),children:l=>r.createElement(Ot,{key:l.id,children:[l.name]})}),r.createElement(Pr,{items:t,children:l=>r.createElement(ft,{children:i=>{const a=Be(l[i]);return r.createElement(ne,{children:a})}})})]})])}))}))})}function gs(){const e=f(["Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TableView.html"})," for more details."]);return n.exports.createElement(V,{title:"TableView",description:e,examples:f([n.exports.createElement(hs,null),n.exports.createElement(fs,null),n.exports.createElement(xs,null)])})}function Es(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Checkbox [\r
    Checkbox.content "Unsubscribe"\r
]`,description:c(),elements:u(r.createElement(z,{children:r.Children.toArray(["Unsubscribe"])}))})}function Ss(){return n.exports.createElement(d,{title:"Value",code:`let selected, setSelected = React.useState(true)\r
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
]`,description:c(),elements:A(g(()=>{const e=D(!0);return E(r.createElement(I,{direction:"row",children:r.Children.toArray([r.createElement(z,{defaultSelected:!0,children:r.Children.toArray(["Subscribe (uncontrolled)"])}),r.createElement(z,{isSelected:e[0],onChange:e[1],children:r.Children.toArray(["Subscribe (controlled)"])})])}))}))})}function bs(){return n.exports.createElement(d,{title:"Indeterminate",code:`Spectrum.Checkbox [\r
    Checkbox.isIndeterminate true\r
    Checkbox.content "Subscribe"\r
]`,description:c(),elements:u(r.createElement(z,{isIndeterminate:!0,children:r.Children.toArray(["Subscribe"])}))})}function ys(){return n.exports.createElement(d,{title:"Events",code:`let selected, setSelected = React.useState(false)\r
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
    ]`,description:c(),elements:A(g(()=>{const e=D(!1),t=e[0];return E(r.createElement(I,{direction:"column",children:r.Children.toArray([r.createElement(z,{isSelected:t,onChange:e[1],children:r.Children.toArray(["Subscribe"])}),n.exports.createElement(R,c(),...A(g(()=>E(`You are ${t?"subscribed":"unsubscribed"}`))))])}))}))})}function Cs(){return n.exports.createElement(d,{title:"Validation",code:`Spectrum.Checkbox [\r
        Checkbox.validationState ValidationState.Invalid\r
        Checkbox.content "I accept the terms and conditions"\r
    ]`,description:c(),elements:u(r.createElement(z,{validationState:"invalid",children:r.Children.toArray(["I accept the terms and conditions"])}))})}function As(){const e=f(["Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Checkbox.html"})," for more details."]);return n.exports.createElement(V,{title:"Checkbox",description:e,examples:f([n.exports.createElement(Es,null),n.exports.createElement(Ss,null),n.exports.createElement(bs,null),n.exports.createElement(ys,null),n.exports.createElement(Cs,null)])})}function vs(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.CheckboxGroup [\r
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
]`,description:c(),elements:u(r.createElement(Ge,{label:"Favorite sports",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}))})}function ws(){return n.exports.createElement(d,{title:"Value",code:`let selected, setSelected = React.useState([ "soccer"; "baseball" ])\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D(f(["soccer","baseball"])),l=t[0];return E(r.createElement(I,{gap:"size-300",children:r.Children.toArray([r.createElement(Ge,{label:"Favorite sports (uncontrolled)",defaultValue:["soccer","baseball"],children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),r.createElement(I,{direction:"column",gap:"size-200",children:r.Children.toArray([r.createElement(Ge,{label:"Favorite sports (controlled)",value:Array.from(l),onChange:i=>{t[1](ae(i))},children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),(e=`Selected: ${vr(", ",l)}`,n.exports.createElement("p",{children:[e]}))])})])}))}))})}function ks(){return n.exports.createElement(d,{title:"Labeling",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{gap:"size-300",wrap:!0,children:r.Children.toArray([r.createElement(Ge,{label:"Favorite sports",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),r.createElement(Ge,{label:"Favorite sports",isRequired:!0,necessityIndicator:"icon",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),r.createElement(Ge,{label:"Favorite sports",isRequired:!0,necessityIndicator:"label",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])}),r.createElement(Ge,{label:"Favorite sports",necessityIndicator:"label",children:r.Children.toArray([r.createElement(z,{value:"soccer",children:r.Children.toArray(["Soccer"])}),r.createElement(z,{value:"baseball",children:r.Children.toArray(["Baseball"])}),r.createElement(z,{value:"basketball",children:r.Children.toArray(["Basketball"])})])})])}))})}function Ts(){return n.exports.createElement(d,{title:"Validation",code:`let selected, setSelected = React.useState([])\r
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
]`,description:c(),elements:A(g(()=>{const e=D(c()),t=e[0];return E(r.createElement(Ge,pe(A(g(()=>P(E(["label","Sandwich condiments"]),g(()=>P(E(["value",Array.from(t)]),g(()=>P(E(["onChange",l=>{e[1](ae(l))}]),g(()=>P(E(["isRequired",!0]),g(()=>P(rl(t)===0?E(["validationState","invalid"]):Qr(),g(()=>E(["children",r.Children.toArray([r.createElement(z,{value:"lettuce",children:r.Children.toArray(["Lettuce"])}),r.createElement(z,{value:"tomato",children:r.Children.toArray(["Tomato"])}),r.createElement(z,{value:"onion",children:r.Children.toArray(["Onion"])}),r.createElement(z,{value:"sprouts",children:r.Children.toArray(["Sprouts"])})])]))))))))))))))))}))})}function Fs(){const e=f(["A CheckboxGroup allows users to select one or more items from a list of choices.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html"})," for more details."]);return n.exports.createElement(V,{title:"CheckboxGroup",description:e,examples:f([n.exports.createElement(vs,null),n.exports.createElement(ws,null),n.exports.createElement(ks,null),n.exports.createElement(Ts,null)])})}function Is(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Form [\r
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
]`,description:c(),elements:u(r.createElement(Qe,{maxWidth:"size-3600",children:r.Children.toArray([r.createElement(_,{label:"Email",type:"email",placeholder:"abc@adobe.com"}),r.createElement(_,{label:"Password",type:"password",placeholder:"1234"}),r.createElement(z,{children:r.Children.toArray(["Remember me"])})])}))})}function Bs(){return n.exports.createElement(d,{title:"Content",code:`Spectrum.Form [\r
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
]`,description:c(),elements:u(r.createElement(Qe,{maxWidth:"size-3600",isRequired:!0,necessityIndicator:"label",children:r.Children.toArray([r.createElement(_,{label:"Name",placeholder:"Jane Smith"}),r.createElement(_,{label:"Email",placeholder:"abc@adobe.com"}),r.createElement(_,{label:"Address",placeholder:"123 Any Street",isRequired:!1})])}))})}function Ds(){return n.exports.createElement(d,{title:"Labeling",code:`React.fragment [\r
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
]`,description:c(),elements:u(n.exports.createElement(n.exports.Fragment,{},n.exports.createElement("h3",{id:"label-3",children:r.Children.toArray(["Personal Information"])}),r.createElement(Qe,{maxWidth:"size-3600",["aria-labelledby"]:"label-3",children:r.Children.toArray([r.createElement(_,{label:"First Name",placeholder:"John"}),r.createElement(_,{label:"Last Name",placeholder:"Smith"}),r.createElement(Ze,{label:"Favorite pet",children:r.Children.toArray([r.createElement($,{value:"dogs",children:"Dogs"}),r.createElement($,{value:"cats",children:"Cats"}),r.createElement($,{value:"dragons",children:"Dragons"})])})])})))})}function Vs(){return n.exports.createElement(d,{title:"Quiet",code:`Spectrum.Form [\r
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
]`,description:c(),elements:u(r.createElement(Qe,{isQuiet:!0,["aria-label"]:"Quiet example",maxWidth:"size-3600",children:r.Children.toArray([r.createElement(_,{label:"Name",placeholder:"John Smith"}),r.createElement(_,{label:"Address",placeholder:"123 Any Street"})])}))})}function Ns(){const e=f(["Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Form.html"})," for more details."]);return n.exports.createElement(V,{title:"Form",description:e,examples:f([n.exports.createElement(Is,null),n.exports.createElement(Bs,null),n.exports.createElement(Ds,null),n.exports.createElement(Vs,null)])})}function Ms(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.NumberField [\r
    NumberField.label "Width"\r
    NumberField.defaultValue 1024\r
    NumberField.minValue 0\r
]`,description:c(),elements:u(r.createElement(ce,{label:"Width",defaultValue:1024,minValue:0}))})}function Rs(){return n.exports.createElement(d,{title:"Value",code:`let value, setValue = React.useState(15)\r
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
]`,description:c(),elements:A(g(()=>{const e=D(15);return E(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(ce,{width:"200px",label:"Cookies (uncontrolled)",defaultValue:15,minValue:0}),r.createElement(ce,{width:"200px",label:"Cookies (controlled)",value:e[0],onChange:t=>{setTimeout(()=>{e[1](t)},0)},minValue:0})])}))}))})}function zs(){return n.exports.createElement(d,{title:"Number formatting",code:`Spectrum.NumberField [\r
    NumberField.label "Adjust exposure"\r
    NumberField.defaultValue 0\r
    NumberField.formatOptions <| NumberFormat.make(\r
        signDisplay = NumberFormatSignDisplay.ExceptZero,\r
        minimumFractionDigits = 1,\r
        maximumFractionDigits = 2)\r
]`,description:c(),elements:u(r.createElement(ce,{label:"Adjust exposure",defaultValue:0,formatOptions:{localeMatcher:void 0,style:void 0,currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:"exceptZero",notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:1,maximumFractionDigits:2,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Ps(){return n.exports.createElement(d,{title:"Percentage",code:`Spectrum.NumberField [\r
    NumberField.label "Sales tax"\r
    NumberField.defaultValue 0.05\r
    NumberField.minValue 0\r
    NumberField.formatOptions <| NumberFormat.make(\r
        style = NumberFormatStyle.Percent)\r
]`,description:c(),elements:u(r.createElement(ce,{label:"Sales tax",defaultValue:.05,minValue:0,formatOptions:{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Ls(){return n.exports.createElement(d,{title:"Currency values",code:`Spectrum.NumberField [\r
    NumberField.label "Transaction amount"\r
    NumberField.defaultValue 45\r
    NumberField.formatOptions <| NumberFormat.make(\r
        style = NumberFormatStyle.Currency,\r
        currency = "EUR",\r
        currencyDisplay = NumberFormatCurrencyDisplay.Symbol,\r
        currencySign = NumberFormatCurrencySign.Accounting)\r
]`,description:c(),elements:u(r.createElement(ce,{label:"Transaction amount",defaultValue:45,formatOptions:{localeMatcher:void 0,style:"currency",currency:"EUR",currencyDisplay:"symbol",currencySign:"accounting",useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function _s(){return n.exports.createElement(d,{title:"Units",code:`Spectrum.NumberField [\r
    NumberField.label "Package width"\r
    NumberField.defaultValue 4\r
    NumberField.minValue 0\r
    NumberField.formatOptions <| NumberFormat.make(\r
        style = NumberFormatStyle.Unit,\r
        unit = "inch",\r
        unitDisplay = NumberFormatUnitDisplay.Long)\r
]`,description:c(),elements:u(r.createElement(ce,{label:"Package width",defaultValue:4,minValue:0,formatOptions:{localeMatcher:void 0,style:"unit",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:"inch",unitDisplay:"long",minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Gs(){return n.exports.createElement(d,{title:"Step values",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"column",gap:"size-150",children:r.Children.toArray([r.createElement(ce,{label:"Step",step:10}),r.createElement(ce,{label:"Step + minValue",step:3,minValue:2}),r.createElement(ce,{label:"Step + minValue + maxValue",step:3,minValue:2,maxValue:21})])}))})}function Hs(){return n.exports.createElement(d,{title:"Events",code:`let value, setValue = React.useState(0)\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D(0);return E(r.createElement(I,{direction:"column",gap:"size-150",children:r.Children.toArray([r.createElement(ce,{onChange:l=>{setTimeout(()=>{t[1](l)},0)},label:"Number of cookies to buy",minValue:0}),(e=`How many cookies you are ordering: ${t[0]}`,n.exports.createElement("pre",{children:[e]}))])}))}))})}function Os(){return n.exports.createElement(d,{title:"Validation",code:`let value, setValue = React.useState(15)\r
let isValid = React.useMemo ((fun () -> value % 3 = 0 && value % 5 = 0), [| value |])\r
Spectrum.NumberField [\r
    NumberField.value value\r
    NumberField.onChange setValue\r
    NumberField.label "FizzBuzz values only"\r
    NumberField.validationState isValid\r
]`,description:c(),elements:A(g(()=>{const e=D(15),t=e[0]|0,l=te(()=>t%3==0?t%5==0:!1,[t]);return E(r.createElement(ce,pe(f([["value",t],["onChange",i=>{setTimeout(()=>{e[1](i)},0)}],["label","FizzBuzz values only"],l?["validationState","valid"]:["validationState","invalid"]]))))}))})}function Ws(){return n.exports.createElement(d,{title:"Help text",code:`let value, setValue = React.useState(1)\r
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
]`,description:c(),elements:A(g(()=>{const e=D(1),t=e[0]|0,l=te(()=>t>0?!0:isNaN(t),[t]);return E(r.createElement(ce,pe(A(g(()=>P(E(l?["validationState","valid"]:["validationState","invalid"]),g(()=>P(E(["value",t]),g(()=>P(E(["onChange",i=>{setTimeout(()=>{e[1](i)},0)}]),g(()=>P(E(["label","Positive numbers only"]),g(()=>P(E(["description","Enter a positive number."]),g(()=>E(t===0?["errorMessage","Is zero positive?"]:["errorMessage","Positive numbers are bigger than 0."]))))))))))))))))}))})}function js(){const e=f(["NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/NumberField.html"})," for more details."]);return n.exports.createElement(V,{title:"NumberField",description:e,examples:f([n.exports.createElement(Ms,null),n.exports.createElement(Rs,null),n.exports.createElement(zs,null),n.exports.createElement(Ps,null),n.exports.createElement(Ls,null),n.exports.createElement(_s,null),n.exports.createElement(Gs,null),n.exports.createElement(Hs,null),n.exports.createElement(Os,null),n.exports.createElement(Ws,null)])})}function qs(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.RadioGroup [\r
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
]`,description:c(),elements:u(r.createElement(Ze,{label:"Favorite pet",children:r.Children.toArray([r.createElement($,{value:"dogs",children:"Dogs"}),r.createElement($,{value:"cats",children:"Cats"})])}))})}function Us(){return n.exports.createElement(d,{title:"Value",code:`let selected, setSelected = React.useState("yes")\r
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
]`,description:c(),elements:A(g(()=>{const e=D("yes");return E(r.createElement(I,{gap:"size-300",children:r.Children.toArray([r.createElement(Ze,{label:"Are you a wizard? (uncontrolled)",defaultValue:"yes",children:r.Children.toArray([r.createElement($,{value:"yes",children:"Yes"}),r.createElement($,{value:"no",children:"No"})])}),r.createElement(Ze,{label:"Are you a wizard? (controlled)",value:e[0],onChange:e[1],children:r.Children.toArray([r.createElement($,{value:"yes",children:"Yes"}),r.createElement($,{value:"no",children:"No"})])})])}))}))})}function Ks(){return n.exports.createElement(d,{title:"Events",code:`let selected, setSelected = React.useState("")\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D(""),l=t[0];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(Ze,{label:"Favorite avatar",value:l,onChange:t[1],children:r.Children.toArray([r.createElement($,{value:"wizard",children:"Wizard"}),r.createElement($,{value:"dragon",children:"Dragon"})])}),(e=`You have selected: ${l}`,n.exports.createElement("div",{children:[e]}))))}))})}function Js(){return n.exports.createElement(d,{title:"Orientation",code:`Spectrum.RadioGroup [\r
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
]`,description:c(),elements:u(r.createElement(Ze,{label:"Favorite avatar",orientation:"horizontal",children:r.Children.toArray([r.createElement($,{value:"wizard",children:"Wizard"}),r.createElement($,{value:"dragon",children:"Dragon"})])}))})}function $s(){const e=f(["Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RadioGroup.html"})," for more details."]);return n.exports.createElement(V,{title:"RadioGroup",description:e,examples:f([n.exports.createElement(qs,null),n.exports.createElement(Us,null),n.exports.createElement(Ks,null),n.exports.createElement(Js,null)])})}function Xs(){return n.exports.createElement(d,{title:"Default example",code:`let submittedText, setSubmittedText = React.useState("")\r
React.fragment [\r
    Spectrum.SearchField [\r
        SearchField.label "Search"\r
        SearchField.placeholder "Enter text"\r
        SearchField.onSubmit setSubmittedText\r
    ]\r
    Html.p $"Submitted text: {submittedText}"\r
]`,description:c(),elements:A(g(()=>{let e;const t=D("");return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(hr,{label:"Search",placeholder:"Enter text",onSubmit:t[1]}),(e=`Submitted text: ${t[0]}`,n.exports.createElement("p",{children:[e]}))))}))})}function Ys(){return n.exports.createElement(d,{title:"Value",code:`let searchValue, setSearchValue = React.useState("puppies")\r
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
]`,description:c(),elements:A(g(()=>{const e=D("puppies");return E(r.createElement(I,{gap:"size-300",children:r.Children.toArray([r.createElement(hr,{defaultValue:"puppies",label:"Search (uncontrolled)"}),r.createElement(hr,{value:e[0],onChange:e[1],label:"Search (controlled)"})])}))}))})}function Zs(){return n.exports.createElement(d,{title:"Properties",code:`let currentText, setCurrentText = React.useState("")\r
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
]`,description:c(),elements:A(g(()=>{let e,t;const l=D(""),i=l[1],a=l[0],o=D("");return E(r.createElement(I,{direction:"column",children:r.Children.toArray([r.createElement(hr,{value:a,onChange:i,label:"Your text",placeholder:"Enter some text",onClear:()=>{i("")},onSubmit:o[1]}),(e=`Mirrored text: ${a}`,n.exports.createElement("pre",{children:[e]})),(t=`Submitted text: ${o[0]}`,n.exports.createElement("pre",{children:[t]}))])}))}))})}function Qs(){const e=f(["A SearchField is a text field designed for searches.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/SearchField.html"})," for more details."]);return n.exports.createElement(V,{title:"SearchField",description:e,examples:f([n.exports.createElement(Xs,null),n.exports.createElement(Ys,null),n.exports.createElement(Zs,null)])})}function eu(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Switch [\r
    Switch.content "Low power mode"\r
]`,description:c(),elements:u(r.createElement(xt,{children:"Low power mode"}))})}function tu(){return n.exports.createElement(d,{title:"Value",code:`let selected, setSelected = React.useState(false)\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D(!1),l=t[0];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(xt,{defaultSelected:!0,children:"Low power mode (uncontrolled)"}),r.createElement(I,{direction:"column",gap:"size-100",children:r.Children.toArray([r.createElement(xt,{isSelected:l,onChange:t[1],children:"Low power mode (controlled)"}),(e=`The switch is on: ${l}`,n.exports.createElement("div",{children:[e]}))])})))}))})}function ru(){return n.exports.createElement(d,{title:"Disabled",code:`Spectrum.Switch [\r
    Switch.isDisabled true\r
    Switch.content "Switch label"\r
]`,description:c(),elements:u(r.createElement(xt,{isDisabled:!0,children:"Switch label"}))})}function nu(){return n.exports.createElement(d,{title:"Emphasized",code:`Spectrum.Switch [\r
    Switch.isEmphasized true\r
    Switch.defaultSelected true\r
    Switch.content "Switch label"\r
]`,description:c(),elements:u(r.createElement(xt,{isEmphasized:!0,defaultSelected:!0,children:"Switch label"}))})}function lu(){return n.exports.createElement(d,{title:"Read-only",code:`Spectrum.Switch [\r
    Switch.isReadOnly true\r
    Switch.defaultSelected true\r
    Switch.content "Switch label"\r
]`,description:c(),elements:u(r.createElement(xt,{isReadOnly:!0,defaultSelected:!0,children:"Switch label"}))})}function iu(){const e=f(["Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Switch.html"})," for more details."]);return n.exports.createElement(V,{title:"Switch",description:e,examples:f([n.exports.createElement(eu,null),n.exports.createElement(tu,null),n.exports.createElement(ru,null),n.exports.createElement(nu,null),n.exports.createElement(lu,null)])})}function au(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.TextArea [\r
    TextArea.label "Name"\r
]`,description:c(),elements:u(r.createElement(Q,{label:"Name"}))})}function ou(){return n.exports.createElement(d,{title:"Value",code:`let value, setValue = React.useState("This is on a wait list")\r
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
]`,description:c(),elements:A(g(()=>{const e=D("This is on a wait list");return E(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(Q,{label:"Notes (uncontrolled)",defaultValue:"This is on a wait list"}),r.createElement(Q,{label:"Notes (controlled)",value:e[0],onChange:e[1]})])}))}))})}function cu(){return n.exports.createElement(d,{title:"todo",code:`Spectrum.TextArea [\r
    TextArea.label "Email"\r
    TextArea.placeholder "abc@gmail.com"\r
]`,description:c(),elements:u(r.createElement(Q,{label:"Email",placeholder:"abc@gmail.com"}))})}function su(){return n.exports.createElement(d,{title:"todo",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(Q,{label:"Street address"}),r.createElement(Q,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),r.createElement(Q,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),r.createElement(Q,{label:"Street address",necessityIndicator:"label"})])}))})}function uu(){return n.exports.createElement(d,{title:"Events",code:`let text, setText = React.useState("")\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D("");return E(r.createElement(I,{gap:"size-150",direction:"column",children:r.Children.toArray([r.createElement(Q,{label:"Your text",placeholder:"Enter some text...",onChange:t[1]}),(e=`Mirrored text: ${t[0]}`,n.exports.createElement("pre",{children:[e]}))])}))}))})}function mu(){return n.exports.createElement(d,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")\r
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
]`,description:c(),elements:A(g(()=>{const e=D("me@email.com"),t=e[0],l=te(()=>Ar(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,t),[t]);return E(r.createElement(Q,pe(f([l?["validationState","valid"]:["validationState","invalid"],["placeholder","Enter your email"],["value",t],["onChange",e[1]],["label","Email"],["errorMessage","Invalid email"]]))))}))})}function du(){return n.exports.createElement(d,{title:"Quiet",code:`Spectrum.TextArea [\r
    TextArea.label "Email"\r
    TextArea.placeholder "Email Address"\r
    TextArea.isQuiet true\r
]`,description:c(),elements:u(r.createElement(Q,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function pu(){return n.exports.createElement(d,{title:"Disabled",code:`Spectrum.TextArea [\r
    TextArea.label "Email"\r
    TextArea.placeholder "Email Address"\r
    TextArea.isDisabled true\r
]`,description:c(),elements:u(r.createElement(Q,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function hu(){return n.exports.createElement(d,{title:"Read-only",code:`Spectrum.TextArea [\r
    TextArea.label "Email"\r
    TextArea.placeholder "Email Address"\r
    TextArea.isReadOnly true\r
]`,description:c(),elements:u(r.createElement(Q,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function fu(){return n.exports.createElement(d,{title:"Label asignment and position",code:`Spectrum.TextArea [\r
    TextArea.label "Search"\r
    TextArea.labelPosition LabelPosition.Side\r
    TextArea.labelAlign Alignment.End\r
]`,description:c(),elements:u(r.createElement(Q,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function xu(){return n.exports.createElement(d,{title:"Help text",code:`let value, setValue = React.useState("0")\r
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
]`,description:c(),elements:A(g(()=>{const e=D("0"),t=e[0],l=te(()=>Ar(/^\d$/g,t),[t]);return E(r.createElement(Q,pe(A(g(()=>P(E(l?["validationState","valid"]:["validationState","invalid"]),g(()=>P(E(["value",t]),g(()=>P(E(["onChange",e[1]]),g(()=>P(E(["label","Favorite number"]),g(()=>P(E(["maxLength",1]),g(()=>P(E(["description","Enter a single digit number"]),g(()=>E(t===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))))))}))})}function gu(){const e=f(["TextAreas are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextArea.html"})," for more details."]);return n.exports.createElement(V,{title:"TextArea",description:e,examples:f([n.exports.createElement(au,null),n.exports.createElement(ou,null),n.exports.createElement(cu,null),n.exports.createElement(su,null),n.exports.createElement(uu,null),n.exports.createElement(mu,null),n.exports.createElement(du,null),n.exports.createElement(pu,null),n.exports.createElement(hu,null),n.exports.createElement(fu,null),n.exports.createElement(xu,null)])})}function Eu(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.TextField [\r
    TextField.label "Name"\r
]`,description:c(),elements:u(r.createElement(_,{label:"Name"}))})}function Su(){return n.exports.createElement(d,{title:"Value",code:`let value, setValue = React.useState("me@email.com")\r
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
]`,description:c(),elements:A(g(()=>{const e=D("me@email.com");return E(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(_,{label:"Email (uncontrolled)",defaultValue:"me@email.com"}),r.createElement(_,{label:"Email (controlled)",defaultValue:e[0],onChange:e[1]})])}))}))})}function bu(){return n.exports.createElement(d,{title:"Placeholder",code:`Spectrum.TextField [\r
    TextField.label "Email"\r
    TextField.placeholder "abc@gmail.com"\r
]`,description:c(),elements:u(r.createElement(_,{label:"Email",placeholder:"abc@gmail.com"}))})}function yu(){return n.exports.createElement(d,{title:"Labeling",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(_,{label:"Street address"}),r.createElement(_,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),r.createElement(_,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),r.createElement(_,{label:"Street address",necessityIndicator:"label"})])}))})}function Cu(){return n.exports.createElement(d,{title:"Events",code:`let text, setText = React.useState("")\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D("");return E(r.createElement(I,{gap:"size-150",direction:"column",children:r.Children.toArray([r.createElement(_,{label:"Your text",placeholder:"Enter some text...",onChange:t[1]}),(e=`Mirrored text: ${t[0]}`,n.exports.createElement("pre",{children:[e]}))])}))}))})}function Au(){return n.exports.createElement(d,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")\r
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
]`,description:c(),elements:A(g(()=>{const e=D("me@email.com"),t=e[0],l=te(()=>Ar(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,t),[t]);return E(r.createElement(_,{validationState:l?"valid":"invalid",placeholder:"Enter your email",value:t,onChange:e[1],label:"Email",errorMessage:"Invalid email"}))}))})}function vu(){return n.exports.createElement(d,{title:"Quiet",code:`Spectrum.TextField [\r
    TextField.label "Email"\r
    TextField.placeholder "Email Address"\r
    TextField.isQuiet true\r
]`,description:c(),elements:u(r.createElement(_,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function wu(){return n.exports.createElement(d,{title:"Disabled",code:`Spectrum.TextField [\r
    TextField.label "Email"\r
    TextField.placeholder "Email Address"\r
    TextField.isDisabled true\r
]`,description:c(),elements:u(r.createElement(_,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function ku(){return n.exports.createElement(d,{title:"Read-only",code:`Spectrum.TextField [\r
    TextField.label "Email"\r
    TextField.placeholder "Email Address"\r
    TextField.isReadOnly true\r
]`,description:c(),elements:u(r.createElement(_,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function Tu(){return n.exports.createElement(d,{title:"Label alignment and position",code:`Spectrum.TextField [\r
    TextField.label "Search"\r
    TextField.labelPosition LabelPosition.Side\r
    TextField.labelAlign Alignment.End\r
]`,description:c(),elements:u(r.createElement(_,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function Fu(){return n.exports.createElement(d,{title:"Help text",code:`let value, setValue = React.useState("0")\r
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
]`,description:c(),elements:A(g(()=>{const e=D("0"),t=e[0],l=te(()=>Ar(/^\d$/g,t),[t]);return E(r.createElement(_,pe(A(g(()=>P(E(l?["validationState","valid"]:["validationState","invalid"]),g(()=>P(E(["value",t]),g(()=>P(E(["onChange",e[1]]),g(()=>P(E(["label","Favorite number"]),g(()=>P(E(["maxLength",1]),g(()=>P(E(["description","Enter a single digit number"]),g(()=>E(t===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))))))}))})}function Iu(){const e=f(["TextFields are text inputs that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextField.html"})," for more details."]);return n.exports.createElement(V,{title:"TextField",description:e,examples:f([n.exports.createElement(Eu,null),n.exports.createElement(Su,null),n.exports.createElement(bu,null),n.exports.createElement(yu,null),n.exports.createElement(Cu,null),n.exports.createElement(Au,null),n.exports.createElement(vu,null),n.exports.createElement(wu,null),n.exports.createElement(ku,null),n.exports.createElement(Tu,null),n.exports.createElement(Fu,null)])})}function Bu(){let e,t,l,i,a,o,s;return n.exports.createElement(d,{title:"Icon size",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{gap:"size-100",children:r.Children.toArray([(e=et,r.createElement(e,{["aria-label"]:"XXS Beaker",size:"XXS"})),(t=et,r.createElement(t,{["aria-label"]:"XS Beaker",size:"XS"})),(l=et,r.createElement(l,{["aria-label"]:"S Beaker",size:"S"})),(i=et,r.createElement(i,{["aria-label"]:"M Beaker",size:"M"})),(a=et,r.createElement(a,{["aria-label"]:"L Beaker",size:"L"})),(o=et,r.createElement(o,{["aria-label"]:"XL Beaker",size:"XL"})),(s=et,r.createElement(s,{["aria-label"]:"XXL Beaker",size:"XXL"}))])}))})}function Du(){let e,t,l,i,a;return n.exports.createElement(d,{title:"Coloring",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{gap:"size-100",children:r.Children.toArray([(e=gt,r.createElement(e,{["aria-label"]:"Default Alert"})),(t=gt,r.createElement(t,{["aria-label"]:"Negative Alert",color:"negative"})),(l=gt,r.createElement(l,{["aria-label"]:"Notification Alert",color:"notice"})),(i=gt,r.createElement(i,{["aria-label"]:"Positive Alert",color:"positive"})),(a=gt,r.createElement(a,{["aria-label"]:"Informative Alert",color:"informative"}))])}))})}function Vu(){const e=f(["Workflow icons are graphical metaphors or symbols that can be used to compliment existing experiences.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"})," for more details."]);return n.exports.createElement(V,{title:"Workflow Icons",description:e,examples:f([n.exports.createElement(Bu,null),n.exports.createElement(Du,null)])})}function Nu(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Breadcrumbs [\r
    makeItem "home" "Home"\r
    makeItem "trendy" "Trendy"\r
    makeItem "march 2020 assets" "March 2020 Assets"\r
]`,description:c(),elements:u(n.exports.createElement(tt,c(),b("home","Home"),b("trendy","Trendy"),b("march 2020 assets","March 2020 Assets")))})}function Mu(){return n.exports.createElement(d,{title:"Events",code:`let folders = [\r
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
]`,description:c(),elements:A(g(()=>{let e,t;const l=f([{id:1,label:"Home"},{id:2,label:"Trendy"},{id:3,label:"March 2020 Assets"}]),i=D(void 0);return E((e=f([r.createElement(tt,{onAction:i[1],children:A(g(()=>nr(a=>r.createElement(y,{key:a.id,children:a.label}),l)))}),(t=`You pressed folder ID: ${i[0]}`,n.exports.createElement("p",{children:[t]}))]),n.exports.createElement("div",{children:r.Children.toArray(Array.from(e))})))}))})}function Ru(){return n.exports.createElement(d,{title:"Sizes",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"column",gap:"size-150",children:r.Children.toArray([r.createElement(tt,{size:"S",children:[b("home","Home"),b("trendy","Trendy")]}),r.createElement(tt,{size:"M",children:[b("home","Home"),b("trendy","Trendy")]}),r.createElement(tt,{size:"L",children:[b("home","Home"),b("trendy","Trendy")]})])}))})}function zu(){return n.exports.createElement(d,{title:"Multiline",code:`Spectrum.Breadcrumbs [\r
    Breadcrumbs.isMultiline true\r
    Breadcrumbs.children [\r
        makeItem "home" "Home"\r
        makeItem "trendy" "Trendy"\r
        makeItem "march 2020 assets" "March 2020 Assets"\r
    ]\r
]`,description:c(),elements:u(r.createElement(tt,{isMultiline:!0,children:[b("home","Home"),b("trendy","Trendy"),b("march 2020 assets","March 2020 Assets")]}))})}function Pu(){return n.exports.createElement(d,{title:"Root context",code:`Spectrum.View [\r
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
]`,description:c(),elements:u(r.createElement(R,{overflow:"hidden",width:"200px",children:r.Children.toArray([r.createElement(tt,{showRoot:!0,children:[b("home","Home"),b("trendy","Trendy"),b("march 2020 assets","March 2020 Assets"),b("winter","Winter"),b("holiday","Holiday")]})])}))})}function Lu(){const e=f(["Breadcrumbs show hierarchy and navigational context for a user\u2019s location within an application.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html"})," for more details."]);return n.exports.createElement(V,{title:"Breadcrumbs",description:e,examples:f([n.exports.createElement(Nu,null),n.exports.createElement(Mu,null),n.exports.createElement(Ru,null),n.exports.createElement(zu,null),n.exports.createElement(Pu,null)])})}function _u(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Link [\r
    Html.a [\r
        prop.href "https://www.imdb.com/title/tt6348138/"\r
        prop.target.blank\r
        prop.children [ Html.text "The missing link" ]\r
    ]\r
]`,description:c(),elements:u(n.exports.createElement(rt,c(),n.exports.createElement("a",{href:"https://www.imdb.com/title/tt6348138/",target:"_blank",children:r.Children.toArray(["The missing link"])})))})}function Gu(){return n.exports.createElement(d,{title:"Plain-text content",code:`Spectrum.Link [\r
    Link.onPress <| fun _ -> Browser.Dom.window.alert("Pressed!")\r
    Link.content "A label"\r
]`,description:c(),elements:u(r.createElement(rt,{onPress:e=>{window.alert(q("Pressed!"))},children:"A label"}))})}function Hu(){let e,t,l;return n.exports.createElement(d,{title:"Variants",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"column",children:r.Children.toArray([(e=f(["Would you like to ",r.createElement(rt,{variant:"primary",children:"learn more"})," about this fine component?"]),n.exports.createElement("p",{children:r.Children.toArray(Array.from(e))})),(t=f(["Would you like to ",r.createElement(rt,{variant:"secondary",children:"learn more"})," about this fine component?"]),n.exports.createElement("p",{children:r.Children.toArray(Array.from(t))})),(l=f(["Would you like to ",r.createElement(rt,{variant:"primary",isQuiet:!0,children:"learn more"})," about this fine component?"]),n.exports.createElement("p",{children:r.Children.toArray(Array.from(l))})),r.createElement(R,{backgroundColor:"positive",padding:"size-300",children:r.Children.toArray([r.createElement(rt,{variant:"overBackground",children:"learn more"})])})])}))})}function Ou(){const e=f(["Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Link.html"})," for more details."]);return n.exports.createElement(V,{title:"Link",description:e,examples:f([n.exports.createElement(_u,null),n.exports.createElement(Gu,null),n.exports.createElement(Hu,null)])})}function Wu(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Tabs [\r
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
]`,description:c(),elements:u(r.createElement(Wt,{["aria-label"]:"History of Ancient Rome",defaultSelectedKey:"FoR",children:r.Children.toArray([r.createElement(jt,{children:[r.createElement(y,{key:"FoR",children:"Founding of Rome"}),r.createElement(y,{key:"MaR",children:"Monarchy and Republic"}),r.createElement(y,{key:"Emp",children:"Empire"})]}),r.createElement(qt,{children:[r.createElement(y,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),r.createElement(y,{key:"MaR",children:"Senatus Populusque Romanus."}),r.createElement(y,{key:"Emp",children:"Alea jacta est."})]})])}))})}function ju(){return n.exports.createElement(d,{title:"Dynamic content",code:`let tabs = [\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=f([{children:"Arma virumque cano, Troiae qui primus ab oris.",id:1,name:"Founding of Rome"},{children:"Senatus Populusque Romanus.",id:2,name:"Monarchy and Republic"},{children:"Alea jacta est.",id:3,name:"Empire"}]),l=D(1);return E(n.exports.createElement(n.exports.Fragment,{},(e=`Current tab id: ${l[0]}`,n.exports.createElement("p",{children:[e]})),r.createElement(Wt,{["aria-label"]:"History of Ancient Rome",items:Array.from(t),onSelectionChange:l[1],children:r.Children.toArray([r.createElement(jt,{children:i=>{const a=i.name;return r.createElement(y,{children:a})}}),r.createElement(qt,{children:i=>{const a=i.children;return r.createElement(y,{children:a})}})])})))}))})}function qu(){let e,t,l;return n.exports.createElement(d,{title:"Icons in tabs",code:`Spectrum.Tabs [\r
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
]`,description:c(),elements:u(r.createElement(Wt,{["aria-label"]:"History of Ancient Rome",children:r.Children.toArray([n.exports.createElement(jt,c(),r.createElement(y,{key:"FoR",children:r.Children.toArray([(e=Ol,r.createElement(e,{})),r.createElement(C,{children:r.Children.toArray(["Founding of Rome"])})])}),r.createElement(y,{key:"MaR",children:r.Children.toArray([(t=Wl,r.createElement(t,{})),r.createElement(C,{children:r.Children.toArray(["Monarchy and Republic"])})])}),r.createElement(y,{key:"Emp",children:r.Children.toArray([(l=jl,r.createElement(l,{})),r.createElement(C,{children:r.Children.toArray(["Empire"])})])})),n.exports.createElement(qt,c(),r.createElement(y,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),r.createElement(y,{key:"MaR",children:"Senatus Populusque Romanus."}),r.createElement(y,{key:"Emp",children:"Alea jacta est."}))])}))})}function Uu(){return n.exports.createElement(d,{title:"Selection",code:`let tabs = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{children:"No keyboard detected",id:1,name:"Keyboard Settings"},{children:"No mouse detected",id:2,name:"Mouse Settings"},{children:"No gamepad detected",id:3,name:"Gamepad Settings"}]),t=D(2);return E(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([n.exports.createElement("span",{id:"label-2",children:r.Children.toArray(["Settings (uncontrolled)"])}),r.createElement(Wt,{["aria-labelledby"]:"label-2",items:Array.from(e),defaultSelectedKey:2,marginBottom:"size-400",children:r.Children.toArray([r.createElement(jt,{children:l=>{const i=l.name;return r.createElement(y,{children:i})}}),r.createElement(qt,{children:l=>{const i=l.children;return r.createElement(y,{children:i})}})])}),n.exports.createElement("span",{id:"label-3",children:r.Children.toArray(["Settings (controlled)"])}),r.createElement(Wt,{["aria-labelledby"]:"label-3",items:Array.from(e),selectedKey:t[0],onSelectionChange:t[1],children:r.Children.toArray([r.createElement(jt,{children:l=>{const i=l.name;return r.createElement(y,{children:i})}}),r.createElement(qt,{children:l=>{const i=l.children;return r.createElement(y,{children:i})}})])})])}))}))})}function Ku(){const e=f(["Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tabs.html"})," for more details."]);return n.exports.createElement(V,{title:"Tabs",description:e,examples:f([n.exports.createElement(Wu,null),n.exports.createElement(ju,null),n.exports.createElement(qu,null),n.exports.createElement(Uu,null)])})}function Ju(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton [ Html.text "Save" ]\r
    Spectrum.AlertDialog [\r
        AlertDialog.title "Low disk space!"\r
        AlertDialog.variant AlertDialogVariant.Warning\r
        AlertDialog.primaryActionLabel "Confirm"\r
        AlertDialog.content "You are running low on disk space.\\nDelete unnecessary files to free up space."\r
    ]\r
]`,description:c(),elements:u(n.exports.createElement(Ie,c(),n.exports.createElement(M,c(),"Save"),r.createElement(Et,{title:"Low disk space!",variant:"warning",primaryActionLabel:"Confirm",children:`You are running low on disk space.
Delete unnecessary files to free up space.`})))})}function $u(){return n.exports.createElement(d,{title:"Content",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton [ Html.text "Exit" ]\r
    Spectrum.AlertDialog [\r
        AlertDialog.title "Register profile"\r
        AlertDialog.variant AlertDialogVariant.Information\r
        AlertDialog.primaryActionLabel "Register"\r
        AlertDialog.secondaryActionLabel "Reminder me later"\r
        AlertDialog.cancelLabel "Cancel"\r
        AlertDialog.content "You have not saved your profile information \\nfor this account. Would you like to register now?"\r
    ]\r
]`,description:c(),elements:u(n.exports.createElement(Ie,c(),n.exports.createElement(M,c(),"Exit"),r.createElement(Et,{title:"Register profile",variant:"information",primaryActionLabel:"Register",secondaryActionLabel:"Reminder me later",cancelLabel:"Cancel",children:`You have not saved your profile information 
for this account. Would you like to register now?`})))})}function Xu(){return n.exports.createElement(d,{title:"Accessibility",code:`Spectrum.DialogTrigger [\r
    Spectrum.ActionButton [ Html.text "Save" ]\r
    Spectrum.AlertDialog [\r
        AlertDialog.title "Save file"\r
        AlertDialog.variant AlertDialogVariant.Confirmation\r
        AlertDialog.primaryActionLabel "Save"\r
        AlertDialog.cancelLabel "Cancel"\r
        AlertDialog.autoFocusButton AutoFocusButton.Primary\r
        AlertDialog.content "A file with the same name already exists. Overwrite?"\r
    ]\r
]`,description:c(),elements:u(n.exports.createElement(Ie,c(),n.exports.createElement(M,c(),"Save"),r.createElement(Et,{title:"Save file",variant:"confirmation",primaryActionLabel:"Save",cancelLabel:"Cancel",autoFocusButton:"primary",children:"A file with the same name already exists. Overwrite?"})))})}function Yu(){return n.exports.createElement(d,{title:"Events",code:`let onPrimaryAction () = Browser.Dom.window.alert("Primary button pressed.")\r
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
]`,description:c(),elements:A(g(()=>E(n.exports.createElement(Ie,c(),n.exports.createElement(M,c(),"Publish"),r.createElement(Et,{variant:"confirmation",title:"Confirm publish",primaryActionLabel:"Publish",secondaryActionLabel:"Save as draft",cancelLabel:"Cancel",onPrimaryAction:()=>{window.alert(q("Primary button pressed."))},onSecondaryAction:()=>{window.alert(q("Secondary button pressed."))},onCancel:()=>{window.alert(q("Cancel button pressed."))},children:"Are you sure you want to publish this document?"})))))})}function Zu(){const e=f(["AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html"})," for more details."]);return n.exports.createElement(V,{title:"AlertDialog",description:e,examples:f([n.exports.createElement(Ju,null),n.exports.createElement($u,null),n.exports.createElement(Xu,null),n.exports.createElement(Yu,null)])})}function Qu(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.DialogTrigger [\r
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
]`,description:c(),elements:u(n.exports.createElement(Ie,c(),r.createElement(M,{children:r.Children.toArray(["Check connectivity"])}),e=>n.exports.createElement(nt,c(),r.createElement(le,{children:r.Children.toArray(["Internet Speed Test"])}),r.createElement(Lr,{children:r.Children.toArray(["Connection status: Connected"])}),n.exports.createElement(re,c()),n.exports.createElement(ie,c(),r.createElement(C,{children:r.Children.toArray(["Start speed test?"])})),n.exports.createElement(Te,c(),r.createElement(L,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),r.createElement(L,{variant:"cta",onPress:t=>{e()},children:"Confirm"})))))})}function em(){return n.exports.createElement(d,{title:"Content",code:`Spectrum.DialogTrigger [\r
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
]`,description:c(),elements:u(n.exports.createElement(Ie,c(),r.createElement(M,{children:r.Children.toArray(["Publish"])}),e=>n.exports.createElement(nt,c(),r.createElement(le,{children:r.Children.toArray(["Publish 3 pages"])}),n.exports.createElement(re,c()),n.exports.createElement(ie,c(),"Confirm publish"),n.exports.createElement(Te,c(),r.createElement(L,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),r.createElement(L,{variant:"cta",autoFocus:!0,onPress:t=>{e()},children:"Confirm"})))))})}function tm(){return n.exports.createElement(d,{title:"Dismissable",code:`Spectrum.DialogTrigger [\r
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
]`,description:c(),elements:u(r.createElement(Ie,{isDismissable:!0,children:r.Children.toArray([r.createElement(M,{children:r.Children.toArray(["Status"])}),n.exports.createElement(nt,c(),r.createElement(le,{children:r.Children.toArray(["Status"])}),n.exports.createElement(re,c()),n.exports.createElement(ie,c(),"Printer Status: Connected"))])}))})}function rm(){return n.exports.createElement(d,{title:"Complex UI",code:`Spectrum.DialogTrigger [\r
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
]`,description:c(),elements:u(n.exports.createElement(Ie,c(),r.createElement(M,{children:r.Children.toArray(["Register"])}),e=>{let t;return r.createElement(nt,{size:"L",children:r.Children.toArray([n.exports.createElement(le,c(),r.createElement(I,{alignItems:"center",gap:"size-100",children:r.Children.toArray([(t=hn,r.createElement(t,{size:"S"})),r.createElement(C,{children:r.Children.toArray(["Register for newsletter"])})])})),n.exports.createElement(Lr,c(),n.exports.createElement(rt,c(),n.exports.createElement("a",{href:"//example.com",target:"_blank",children:r.Children.toArray(["What is this?"])}))),n.exports.createElement(re,c()),n.exports.createElement(ie,c(),n.exports.createElement(Qe,c(),r.createElement(_,{label:"First Name",placeholder:"John",autoFocus:!0}),r.createElement(_,{label:"Last Name",placeholder:"Smith"}),r.createElement(_,{label:"Street Address",placeholder:"123 Any Street"}),r.createElement(_,{label:"City",placeholder:"San Francisco"}))),n.exports.createElement(fn,c(),r.createElement(z,{children:r.Children.toArray(["I want to receive updates for exclusive offers in my area."])})),n.exports.createElement(Te,c(),r.createElement(L,{variant:"secondary",onPress:l=>{e()},children:"Cancel"}),r.createElement(L,{variant:"cta",onPress:l=>{e()},children:"Register"}))])})}))})}function nm(){return n.exports.createElement(d,{title:"Hero image",code:`Spectrum.DialogTrigger [\r
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
]`,description:c(),elements:u(n.exports.createElement(Ie,c(),r.createElement(M,{children:r.Children.toArray(["Upload"])}),e=>n.exports.createElement(nt,c(),r.createElement(xn,{slot:"hero",alt:"",src:"https://i.imgur.com/Z7AzH2c.png",objectFit:"cover"}),r.createElement(le,{children:r.Children.toArray(["Upload file"])}),n.exports.createElement(re,c()),r.createElement(ie,{children:r.Children.toArray(["Are you sure you want to upload this file?"])}),n.exports.createElement(Te,c(),r.createElement(L,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),r.createElement(L,{variant:"cta",onPress:t=>{e()},children:"Confirm"})))))})}function lm(){return n.exports.createElement(d,{title:"Events",code:`let alertSave = fun (close) ->\r
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
]`,description:c(),elements:A(g(()=>E(n.exports.createElement(Ie,c(),r.createElement(M,{children:r.Children.toArray(["Set Profile"])}),e=>n.exports.createElement(nt,c(),r.createElement(le,{children:r.Children.toArray(["Profile"])}),n.exports.createElement(re,c()),n.exports.createElement(Te,c(),r.createElement(L,{variant:"secondary",onPress:t=>{e(),window.alert(q("Profile not saved!"))},children:"Cancel"}),r.createElement(L,{variant:"cta",autoFocus:!0,onPress:t=>{e(),window.alert(q("Profile saved!"))},children:"Save"})),n.exports.createElement(ie,c(),n.exports.createElement(Qe,c(),r.createElement(_,{label:"Name"}),r.createElement(z,{children:r.Children.toArray(["Make private"])}))))))))})}function im(){const e=f(["Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Dialog.html"})," for more details."]);return n.exports.createElement(V,{title:"Dialog",description:e,examples:f([n.exports.createElement(Qu,null),n.exports.createElement(em,null),n.exports.createElement(tm,null),n.exports.createElement(rm,null),n.exports.createElement(nm,null),n.exports.createElement(lm,null)])})}function am(){return n.exports.createElement(d,{title:"Default example",code:`let isOpen, setIsOpen = React.useState(false)\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=D(!1),l=t[1];return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(M,{onPress:i=>{l(!0)},children:r.Children.toArray([(e=ur,r.createElement(e,{})),r.createElement(C,{children:r.Children.toArray(["Delete"])})])}),r.createElement(gn,{onDismiss:()=>{l(!1)},children:r.Children.toArray(Array.from(A(g(()=>t[0]?E(r.createElement(Et,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"})):Qr()))))})))}))})}function om(){const e=Kl();return n.exports.createElement(nt,c(),r.createElement(le,{children:r.Children.toArray(["Edit"])}),n.exports.createElement(re,c()),n.exports.createElement(ie,c(),r.createElement(Qe,{children:r.Children.toArray([r.createElement(_,{autoFocus:!0,label:"First Name",defaultValue:"John"}),r.createElement(_,{label:"Last Name",defaultValue:"Smith"})])})),n.exports.createElement(Te,c(),r.createElement(L,{variant:"secondary",onPress:t=>{e.dismiss()},children:"Cancel"}),r.createElement(L,{variant:"cta",onPress:t=>{e.dismiss()},children:"Save"})))}function cm(){return n.exports.createElement(d,{title:"Dialog triggered by a menu item",code:`let dialog, setDialog = React.useState(JS.undefined<string>)\r
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
`,description:c(),elements:A(g(()=>{let e;const t=D(void 0),l=t[1],i=t[0];return E(n.exports.createElement(n.exports.Fragment,{},n.exports.createElement(Y,c(),r.createElement(M,{["aria-label"]:"Actions",children:r.Children.toArray([(e=Jl,r.createElement(e,{}))])}),r.createElement(Z,{onAction:l,children:[b("edit","Edit..."),b("delete","Delete...")]})),r.createElement(gn,{onDismiss:()=>{l(void 0)},type:"modal",children:r.Children.toArray(Array.from(A(g(()=>E(i==="edit"?n.exports.createElement(om,null):i==="delete"?r.createElement(Et,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"}):null)))))})))}))})}function sm(){const e=f(["A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html"})," for more details."]);return n.exports.createElement(V,{title:"DialogContainer",description:e,examples:f([n.exports.createElement(am,null),n.exports.createElement(cm,null)])})}function um(){const e=f(["DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html"})," for more details."]);return n.exports.createElement(V,{title:"DialogTrigger",description:e,examples:c()})}function mm(){let e;return n.exports.createElement(d,{title:"Default example",code:`Spectrum.TooltipTrigger [\r
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
]`,description:c(),elements:u(r.createElement(He,{delay:0,children:r.Children.toArray([r.createElement(M,{["aria-label"]:"Edit Name",children:r.Children.toArray([(e=mn,r.createElement(e,{}))])}),r.createElement(Oe,{children:"Change Name"})])}))})}function dm(){return n.exports.createElement(d,{title:"Warmup / Cooldown",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{gap:"size-200",children:r.Children.toArray([n.exports.createElement(He,c(),r.createElement(M,{children:r.Children.toArray(["Hover me"])}),r.createElement(Oe,{children:"I come up after a delay."})),n.exports.createElement(He,c(),r.createElement(M,{children:r.Children.toArray(["Then hover me"])}),r.createElement(Oe,{children:"If you did it quickly, I appear immediately."}))])}))})}function pm(){return n.exports.createElement(d,{title:"Tooltip placement",code:`Spectrum.TooltipTrigger [\r
    TooltipTrigger.placement TooltipPlacement.End\r
    TooltipTrigger.children [\r
        Spectrum.ActionButton [\r
            ActionButton.ariaLabel "Foo"\r
            ActionButton.content "Placement"\r
        ]\r
        Spectrum.Tooltip "In left-to-right, this is on the right. In right-to-left, this is on the left."\r
    ]\r
]`,description:c(),elements:u(r.createElement(He,{placement:"end",children:r.Children.toArray([r.createElement(M,{["aria-label"]:"Foo",children:"Placement"}),r.createElement(Oe,{children:"In left-to-right, this is on the right. In right-to-left, this is on the left."})])}))})}function hm(){return n.exports.createElement(d,{title:"Offset and cross offset",code:`Spectrum.TooltipTrigger [\r
    TooltipTrigger.offset 50\r
    TooltipTrigger.children [\r
        Spectrum.ActionButton "Offset"\r
        Spectrum.Tooltip "This will shift up..."\r
    ]\r
]`,description:c(),elements:u(r.createElement(He,{offset:50,children:r.Children.toArray([r.createElement(M,{children:r.Children.toArray(["Offset"])}),r.createElement(Oe,{children:"This will shift up..."})])}))})}function fm(){let e,t,l;return n.exports.createElement(d,{title:"Visual variants",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"row",gap:"size-100",children:r.Children.toArray([n.exports.createElement(He,c(),r.createElement(M,{["aria-label"]:"Approve",children:r.Children.toArray([(e=ql,r.createElement(e,{}))])}),r.createElement(Oe,{variant:"positive",showIcon:!0,children:"Approve workflow"})),n.exports.createElement(He,c(),r.createElement(M,{["aria-label"]:"Information",children:r.Children.toArray([(t=Ul,r.createElement(t,{}))])}),r.createElement(Oe,{variant:"info",showIcon:!0,children:"Show the more information menu"})),n.exports.createElement(He,c(),r.createElement(M,{["aria-label"]:"Danger",children:r.Children.toArray([(l=ur,r.createElement(l,{}))])}),r.createElement(Oe,{variant:"negative",showIcon:!0,children:"Dangerous action"}))])}))})}function xm(){const e=f(["Display container for Tooltip content. Has a directional arrow dependent on its placement.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tooltip.html"})," for more details."]);return n.exports.createElement(V,{title:"Tooltip",description:e,examples:f([n.exports.createElement(mm,null),n.exports.createElement(dm,null),n.exports.createElement(pm,null),n.exports.createElement(hm,null),n.exports.createElement(fm,null)])})}function gm(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.ComboBox [\r
    ComboBox.label "Favorite animal"\r
    ComboBox.children [\r
        makeItem "red panda" "Red Panda"\r
        makeItem "cat" "Cat"\r
        makeItem "dog" "Dog"\r
        makeItem "aardvark" "Aardvark"\r
        makeItem "kangaroo" "Kangaroo"\r
        makeItem "snake" "Snake"\r
    ]\r
]`,description:c(),elements:u(r.createElement(We,{label:"Favorite animal",children:[b("red panda","Red Panda"),b("cat","Cat"),b("dog","Dog"),b("aardvark","Aardvark"),b("kangaroo","Kangaroo"),b("snake","Snake")]}))})}function Em(){return n.exports.createElement(d,{title:"Content",code:`let options = [\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=f([{id:1,name:"Aerospace"},{id:2,name:"Mechanical"},{id:3,name:"Civil"},{id:4,name:"Biomedical"},{id:5,name:"Nuclear"},{id:6,name:"Industrial"},{id:7,name:"Chemical"},{id:8,name:"Agricultural"},{id:9,name:"Electrical"}]),l=D(void 0);return E(n.exports.createElement(n.exports.Fragment,{},(e=`Topic id: ${l[0]}`,n.exports.createElement("p",{children:[e]})),r.createElement(We,{label:"Pick an engineering major",placeholder:"Search engineering majors...",defaultItems:Array.from(t),onSelectionChange:l[1],children:i=>{const a=i.name;return r.createElement(y,{children:a})}})))}))})}function Sm(){return n.exports.createElement(d,{title:"Value",code:`let names = [\r
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
]`,description:c(),elements:A(g(()=>{const e=wr((l,i)=>({id:l+1,name:i}),f(["Adobe Photoshop","Adobe XD","Adobe InDesign","Adobe AfterEffects","Adobe Illustrator","Adobe Lightroom","Adobe Premiere Pro","Adobe Fresco","Adobe Dreamweaver"])),t=D("Adobe XD");return E(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(We,{label:"Adobe product (Uncontrolled)",defaultItems:Array.from(e),defaultInputValue:"Adobe XD",children:l=>{const i=l.name;return r.createElement(y,{children:i})}}),r.createElement(We,{label:"Adobe product (Controlled)",defaultItems:Array.from(e),inputValue:t[0],onInputChange:t[1],children:l=>{const i=l.name;return r.createElement(y,{children:i})}})])}))}))})}function bm(){return n.exports.createElement(d,{title:"Custom value",code:`let options = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{name:"Apple"},{name:"Banana"},{name:"Orange"},{name:"Grapes"},{name:"Watermelon"},{name:"Pear"}]);return E(n.exports.createElement(n.exports.Fragment,{},n.exports.createElement("p",{children:["Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list feel free to write your own selection."]}),r.createElement(We,{label:"Preferred fruit",defaultItems:Array.from(e),allowsCustomValue:!0,children:t=>{const l=t.name;return b(l,l)}})))}))})}function ym(){return n.exports.createElement(d,{title:"Sections",code:`Spectrum.ComboBox [\r
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
]`,description:c(),elements:u(r.createElement(We,{label:"Preferred fruit or vegetable",children:[r.createElement(Ce,{title:"Fruit",children:[b("Apple","Apple"),b("Banana","Banana"),b("Orange","Orange")]}),r.createElement(Ce,{title:"Vegetables",children:[b("Cabbage","Cabbage"),b("Lettuce","Lettuce"),b("Carrots","Carrots")]})]}))})}function Cm(){return n.exports.createElement(d,{title:"Events",code:`let options =\r
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
]`,description:c(),elements:A(g(()=>{let e,t;const l=wr((s,m)=>({id:s+1,name:m}),f(["Aerospace","Mechanical","Civil","Biomedical","Nuclear","Industrial","Chemical","Agricultural","Electrical"])),i=D(""),a=D(0),o=a[0]|0;return E(n.exports.createElement(n.exports.Fragment,{},(e=`Current selected major id: ${o}`,n.exports.createElement("p",{children:[e]})),(t=`Current input text: ${i[0]}`,n.exports.createElement("p",{children:[t]})),r.createElement(We,{label:"Pick an engineering major",defaultItems:Array.from(l),selectedKey:o,onSelectionChange:s=>{a[1](s)},onInputChange:s=>{i[1](s)},children:s=>{const m=s.name;return r.createElement(y,{children:m})}})))}))})}function Am(){let e,t,l,i;return n.exports.createElement(d,{title:"Complex items",code:`Spectrum.ComboBox [\r
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
]`,description:c(),elements:u(r.createElement(We,{label:"Select action",children:[r.createElement(y,{textValue:"Add to queue",children:r.Children.toArray([(e=$l,r.createElement(e,{})),r.createElement(C,{children:r.Children.toArray(["Add to queue"])}),r.createElement(C,{slot:"description",children:r.Children.toArray(["Add to current watch queue"])})])}),r.createElement(y,{textValue:"Add review",children:r.Children.toArray([(t=sr,r.createElement(t,{})),r.createElement(C,{children:r.Children.toArray(["Add review"])}),r.createElement(C,{slot:"description",children:r.Children.toArray(["Post a review for the episode"])})])}),r.createElement(y,{textValue:"Subscribe to series",children:r.Children.toArray([(l=dn,r.createElement(l,{})),r.createElement(C,{children:r.Children.toArray(["Subscribe to series"])}),r.createElement(C,{slot:"description",children:r.Children.toArray(["Add series to your subscription list and be notified when a new episode airs"])})])}),r.createElement(y,{textValue:"Report",children:r.Children.toArray([(i=gt,r.createElement(i,{})),r.createElement(C,{children:r.Children.toArray(["Report"])}),r.createElement(C,{slot:"description",children:r.Children.toArray(["Report an issue/violation"])})])})]}))})}function vm(){const e=f(["ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ComboBox.html"})," for more details."]);return n.exports.createElement(V,{title:"ComboBox",description:e,examples:f([n.exports.createElement(gm,null),n.exports.createElement(Em,null),n.exports.createElement(Sm,null),n.exports.createElement(bm,null),n.exports.createElement(ym,null),n.exports.createElement(Cm,null),n.exports.createElement(Am,null)])})}function wm(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Picker [\r
    Picker.label "Choose frequency"\r
    Picker.children [\r
        makeItem "rarely" "Rarely"\r
        makeItem "sometimes" "Sometimes"\r
        makeItem "always" "Always"\r
    ]\r
]`,description:c(),elements:u(r.createElement(fr,{label:"Choose frequency",children:[b("rarely","Rarely"),b("sometimes","Sometimes"),b("always","Always")]}))})}function km(){return n.exports.createElement(d,{title:"Content",code:`let options =\r
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
]`,description:c(),elements:A(g(()=>{let e;const t=wr((i,a)=>({id:i+1,name:a}),f(["Aardvark","Cat","Dog","Kangaroo","Koala","Penguin","Snake","Turtle","Wombat"])),l=D(void 0);return E(n.exports.createElement(n.exports.Fragment,{},r.createElement(fr,{label:"Pick an animal",items:Array.from(t),onSelectionChange:l[1],children:i=>{const a=i.name;return r.createElement(y,{children:a})}}),(e=`Animal id: ${l[0]}`,n.exports.createElement("p",{children:[e]}))))}))})}function Tm(){return n.exports.createElement(d,{title:"Selection",code:`let options = [\r
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
]`,description:c(),elements:A(g(()=>{const e=f([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),t=D("Bison");return E(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(fr,{label:"Pick an animal (Uncontrolled)",items:Array.from(e),defaultSelectedKey:"Bison",children:l=>{const i=l.name;return b(i,i)}}),r.createElement(fr,{label:"Pick an animal (Controlled)",items:Array.from(e),selectedKey:t[0],onSelectionChange:t[1],children:l=>{const i=l.name;return b(i,i)}})])}))}))})}function Fm(){const e=f(["Pickers allow users to choose a single option from a collapsible list of options when space is limited.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Picker.html"})," for more details."]);return n.exports.createElement(V,{title:"Picker",description:e,examples:f([n.exports.createElement(wm,null),n.exports.createElement(km,null),n.exports.createElement(Tm,null)])})}function Im(){return n.exports.createElement(d,{title:"Default example",code:'Spectrum.RangeSlider [\r\n    RangeSlider.label "Range"\r\n    RangeSlider.defaultValue {| start = 12; ``end`` = 36 |}\r\n]',description:c(),elements:u(r.createElement(St,{label:"Range",defaultValue:{end:36,start:12}}))})}function Bm(){return n.exports.createElement(d,{title:"Value",code:'let value, setValue = React.useState({| start = 25; ``end`` = 75 |})\r\nSpectrum.Flex [\r\n    Flex.gap (DimValue.Size Size150)\r\n    Flex.wrap true\r\n    Flex.children [\r\n        Spectrum.RangeSlider [\r\n            RangeSlider.label "Range (Uncontrolled)"\r\n            RangeSlider.defaultValue {| start = 25; ``end`` = 75 |}\r\n        ]\r\n        Spectrum.RangeSlider [\r\n            RangeSlider.label "Range (Controlled)"\r\n            RangeSlider.value {| start = value.start; ``end`` = value.``end`` |}\r\n            RangeSlider.onChange (fun x -> setValue {| start = x.start; ``end`` = x.``end`` |})\r\n        ]\r\n    ]\r\n]',description:c(),elements:A(g(()=>{const e=D({end:75,start:25}),t=e[0];return E(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(St,{label:"Range (Uncontrolled)",defaultValue:{end:75,start:25}}),r.createElement(St,{label:"Range (Controlled)",value:{end:t.end,start:t.start},onChange:l=>{e[1]({end:l.end,start:l.start})}})])}))}))})}function Dm(){return n.exports.createElement(d,{title:"Different scale",code:`Spectrum.RangeSlider [\r
    RangeSlider.label "Range"\r
    RangeSlider.minValue 50\r
    RangeSlider.maxValue 150\r
    RangeSlider.defaultValue {| start = 75; \`\`end\`\` = 100 |}\r
]`,description:c(),elements:u(r.createElement(St,{label:"Range",minValue:50,maxValue:150,defaultValue:{end:100,start:75}}))})}function Vm(){return n.exports.createElement(d,{title:"Number format",code:'Spectrum.RangeSlider [\r\n    RangeSlider.label "Price range"\r\n    RangeSlider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "JPY")\r\n    RangeSlider.defaultValue {| start = 75; ``end`` = 100 |}\r\n]',description:c(),elements:u(r.createElement(St,{label:"Price range",formatOptions:{localeMatcher:void 0,style:"currency",currency:"JPY",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},defaultValue:{end:100,start:75}}))})}function Nm(){return n.exports.createElement(d,{title:"Using the getValueLabel prop",code:'Spectrum.RangeSlider [\r\n    RangeSlider.label "Search radius"\r\n    RangeSlider.maxValue 200\r\n    RangeSlider.defaultValue {| start = 15; ``end`` = 60 |}\r\n    RangeSlider.getValueLabel (fun m -> $"{m.start}m to {m.``end``}m away")\r\n]',description:c(),elements:u(r.createElement(St,{label:"Search radius",maxValue:200,defaultValue:{end:60,start:15},getValueLabel:e=>`${e.start}m to ${e.end}m away`}))})}function Mm(){const e=f(["RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RangeSlider.html"})," for more details."]);return n.exports.createElement(V,{title:"RangeSlider",description:e,examples:f([n.exports.createElement(Im,null),n.exports.createElement(Bm,null),n.exports.createElement(Dm,null),n.exports.createElement(Vm,null),n.exports.createElement(Nm,null)])})}function Rm(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Slider [\r
    Slider.label "Cookies to buy"\r
    Slider.defaultValue 12\r
]`,description:c(),elements:u(r.createElement(xr,{label:"Cookies to buy",defaultValue:12}))})}function zm(){return n.exports.createElement(d,{title:"Value",code:`let value, setValue = React.useState(25)\r
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
]`,description:c(),elements:A(g(()=>{const e=D(25);return E(r.createElement(I,{gap:"size-150",wrap:!0,children:r.Children.toArray([r.createElement(xr,{label:"Cookies to buy (Uncontrolled)",defaultValue:25}),r.createElement(xr,{label:"Cookies to buy (Controlled)",value:e[0],onChange:e[1]})])}))}))})}function Pm(){return n.exports.createElement(d,{title:"Number format",code:`Spectrum.Slider [\r
    Slider.label "Currency"\r
    Slider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "USD")\r
    Slider.defaultValue 60\r
]`,description:c(),elements:u(r.createElement(xr,{label:"Currency",formatOptions:{localeMatcher:void 0,style:"currency",currency:"USD",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},defaultValue:60}))})}function Lm(){const e=f(["Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Slider.html"})," for more details."]);return n.exports.createElement(V,{title:"Slider",description:e,examples:f([n.exports.createElement(Rm,null),n.exports.createElement(zm,null),n.exports.createElement(Pm,null)])})}function _m(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Meter [\r
    Meter.label "Storage space"\r
    Meter.variant MeterVariant.Positive\r
    Meter.value 35\r
]`,description:c(),elements:u(r.createElement(Ut,{label:"Storage space",variant:"positive",value:35}))})}function Gm(){return n.exports.createElement(d,{title:"Warning example",code:`Spectrum.Meter [\r
    Meter.label "Progress"\r
    Meter.marginBottom (DimValue.Size Size300)\r
    Meter.value 25\r
    Meter.valueLabel "1 of 4"\r
    Meter.variant MeterVariant.Warning\r
]`,description:c(),elements:u(r.createElement(Ut,{label:"Progress",marginBottom:"size-300",value:25,valueLabel:"1 of 4",variant:"warning"}))})}function Hm(){return n.exports.createElement(d,{title:"Labels and formatting",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"column",maxWidth:"size-3000",gap:"size-300",children:r.Children.toArray([r.createElement(Ut,{label:"Space used",showValueLabel:!1,value:90,variant:"critical"}),r.createElement(Ut,{label:"Space used",valueLabel:"54 of 60GB",value:90,variant:"critical"}),r.createElement(Ut,{label:"Space used",value:89.123,formatOptions:{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:2,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},variant:"critical"})])}))})}function Om(){const e=f(["Meters are visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Meter.html"})," for more details."]);return n.exports.createElement(V,{title:"Meter",description:e,examples:f([n.exports.createElement(_m,null),n.exports.createElement(Gm,null),n.exports.createElement(Hm,null)])})}function Wm(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.ProgressBar [\r
    ProgressBar.label "Loading..."\r
    ProgressBar.value 50\r
]`,description:c(),elements:u(r.createElement(_r,{label:"Loading...",value:50}))})}function jm(){return n.exports.createElement(d,{title:"Indeterminate",code:`Spectrum.ProgressBar [\r
    ProgressBar.label "Loading..."\r
    ProgressBar.isIndeterminate true\r
]`,description:c(),elements:u(r.createElement(_r,{label:"Loading...",isIndeterminate:!0}))})}function qm(){return n.exports.createElement(d,{title:"Over background",code:`Spectrum.View [\r
    View.backgroundColor (BackgroundColorValue.Color Positive)\r
    View.padding (DimValue.Size Size300)\r
    View.children [\r
        Spectrum.ProgressBar [\r
            ProgressBar.overBackgroundVariant\r
            ProgressBar.label "Loading..."\r
            ProgressBar.value 5\r
        ]\r
    ]\r
]`,description:c(),elements:u(r.createElement(R,{backgroundColor:"positive",padding:"size-300",children:r.Children.toArray([r.createElement(_r,{variant:"overBackground",label:"Loading...",value:5})])}))})}function Um(){const e=f(["ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressBar.html"})," for more details."]);return n.exports.createElement(V,{title:"ProgressBar",description:e,examples:f([n.exports.createElement(Wm,null),n.exports.createElement(jm,null),n.exports.createElement(qm,null)])})}function Km(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.ProgressCircle [\r
    ProgressCircle.ariaLabel "Loading..."\r
    ProgressCircle.value 50\r
]`,description:c(),elements:u(r.createElement(Gr,{["aria-label"]:"Loading...",value:50}))})}function Jm(){return n.exports.createElement(d,{title:"Indeterminate",code:`Spectrum.ProgressCircle [\r
    ProgressCircle.ariaLabel "Loading..."\r
    ProgressCircle.isIndeterminate true\r
]`,description:c(),elements:u(r.createElement(Gr,{["aria-label"]:"Loading...",isIndeterminate:!0}))})}function $m(){return n.exports.createElement(d,{title:"Over background",code:`Spectrum.View [\r
    View.backgroundColor (BackgroundColorValue.Color Positive)\r
    View.padding (DimValue.Size Size300)\r
    View.children [\r
        Spectrum.ProgressCircle [\r
            ProgressCircle.overBackgroundVariant\r
            ProgressCircle.isIndeterminate true\r
            ProgressCircle.ariaLabel "Loading..."\r
        ]\r
    ]\r
]`,description:c(),elements:u(r.createElement(R,{backgroundColor:"positive",padding:"size-300",children:r.Children.toArray([r.createElement(Gr,{variant:"overBackground",isIndeterminate:!0,["aria-label"]:"Loading..."})])}))})}function Xm(){const e=f(["ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressCircle.html"})," for more details."]);return n.exports.createElement(V,{title:"ProgressCircle",description:e,examples:f([n.exports.createElement(Km,null),n.exports.createElement(Jm,null),n.exports.createElement($m,null)])})}function Ym(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.StatusLight [\r
    StatusLight.variant StatusLightVariant.Positive\r
    StatusLight.content "Ready"\r
]`,description:c(),elements:u(r.createElement(Xl,{variant:"positive",children:"Ready"}))})}function Zm(){const e=f(["Status lights are used to color code categories and labels commonly found in data visualization. When status lights have a semantic meaning, they should use semantic variant colors.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/StatusLight.html"})," for more details."]);return n.exports.createElement(V,{title:"StatusLight",description:e,examples:u(n.exports.createElement(Ym,null))})}function Qm(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Content "Content is king"\r
`,description:c(),elements:u(r.createElement(ie,{children:r.Children.toArray(["Content is king"])}))})}function ed(){const e=f(["Content represents the primary content within a Spectrum container.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Content.html"})," for more details."]);return n.exports.createElement(V,{title:"Content",description:e,examples:u(n.exports.createElement(Qm,null))})}function td(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Column\r
    Flex.gap (DimValue.Size Size125)\r
    Flex.children [\r
        Spectrum.Text "Content above"\r
        Spectrum.Divider ()\r
        Spectrum.Text "Content below"\r
    ]\r
]`,description:c(),elements:u(r.createElement(I,{direction:"column",gap:"size-125",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Content above"])}),n.exports.createElement(re,c()),r.createElement(C,{children:r.Children.toArray(["Content below"])})])}))})}function rd(){return n.exports.createElement(d,{title:"Vertical",code:`Spectrum.Flex [\r
    Flex.direction FlexDirection.Row\r
    Flex.gap (DimValue.Size Size125)\r
    Flex.children [\r
        Spectrum.Text "Content left"\r
        Spectrum.Divider [\r
            Divider.orientation Orientation.Vertical\r
        ]\r
        Spectrum.Text "Content right"\r
    ]\r
]`,description:c(),elements:u(r.createElement(I,{direction:"row",gap:"size-125",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Content left"])}),r.createElement(re,{orientation:"vertical"}),r.createElement(C,{children:r.Children.toArray(["Content right"])})])}))})}function nd(){return n.exports.createElement(d,{title:"Size",code:`Spectrum.Flex [\r
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
]`,description:c(),elements:u(r.createElement(I,{direction:"column",gap:"size-125",children:r.Children.toArray([r.createElement(C,{children:r.Children.toArray(["Content above large Divider"])}),r.createElement(re,{size:"L"}),r.createElement(C,{children:r.Children.toArray(["Content above medium Divider"])}),r.createElement(re,{size:"M"}),r.createElement(C,{children:r.Children.toArray(["Content above small Divider"])}),r.createElement(re,{size:"S"})])}))})}function ld(){const e=f(["Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Divider.html"})," for more details."]);return n.exports.createElement(V,{title:"Divider",description:e,examples:f([n.exports.createElement(td,null),n.exports.createElement(rd,null),n.exports.createElement(nd,null)])})}function id(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Footer "\xA9 All rights reserved."\r
`,description:c(),elements:u(r.createElement(fn,{children:r.Children.toArray(["\xA9 All rights reserved."])}))})}function ad(){const e=f(["Footer represents a footer within a Spectrum container.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Footer.html"})," for more details."]);return n.exports.createElement(V,{title:"Footer",description:e,examples:u(n.exports.createElement(id,null))})}function od(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Header "Header example..."\r
`,description:c(),elements:u(r.createElement(Lr,{children:r.Children.toArray(["Header example..."])}))})}function cd(){const e=f(["Header represents a header within a Spectrum container.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Header.html"})," for more details."]);return n.exports.createElement(V,{title:"Header",description:e,examples:u(n.exports.createElement(od,null))})}function sd(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Heading [\r
    Heading.level 4\r
    Heading.content "A level 4 heading..."\r
]`,description:c(),elements:u(r.createElement(le,{level:4,children:"A level 4 heading..."}))})}function ud(){const e=f(["Heading is used to create various levels of typographic hierarchies.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Heading.html"})," for more details."]);return n.exports.createElement(V,{title:"Heading",description:e,examples:u(n.exports.createElement(sd,null))})}function md(){let e;return n.exports.createElement(d,{title:"No search results",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.NoSearchResults []\r
    Spectrum.Heading "No matching results"\r
    Spectrum.Content "Try another search"\r
]`,description:c(),elements:u(n.exports.createElement(bt,c(),(e=Yl,r.createElement(e,{})),r.createElement(le,{children:r.Children.toArray(["No matching results"])}),r.createElement(ie,{children:r.Children.toArray(["Try another search"])})))})}function dd(){let e;return n.exports.createElement(d,{title:"403 forbidden",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.Unauthorized []\r
    Spectrum.Heading "Error 403: Access not allowed"\r
    Spectrum.Content "You do not have permission to access this page. Try checking the URL or visit a different page."\r
]`,description:c(),elements:u(n.exports.createElement(bt,c(),(e=Zl,r.createElement(e,{})),r.createElement(le,{children:r.Children.toArray(["Error 403: Access not allowed"])}),r.createElement(ie,{children:r.Children.toArray(["You do not have permission to access this page. Try checking the URL or visit a different page."])})))})}function pd(){let e;return n.exports.createElement(d,{title:"404 not found",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.NotFound []\r
    Spectrum.Heading "Error 404: Page not found"\r
    Spectrum.Content "This page isn't available. Try checking the URL or visit a different page."\r
]`,description:c(),elements:u(n.exports.createElement(bt,c(),(e=Ql,r.createElement(e,{})),r.createElement(le,{children:r.Children.toArray(["Error 404: Page not found"])}),r.createElement(ie,{children:r.Children.toArray(["This page isn't available. Try checking the URL or visit a different page."])})))})}function hd(){let e;return n.exports.createElement(d,{title:"500 internal server error",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.Error []\r
    Spectrum.Heading "Error 500: Internal server error"\r
    Spectrum.Content "Something went wrong. Please try again later."\r
]`,description:c(),elements:u(n.exports.createElement(bt,c(),(e=ei,r.createElement(e,{})),r.createElement(le,{children:r.Children.toArray(["Error 500: Internal server error"])}),r.createElement(ie,{children:r.Children.toArray(["Something went wrong. Please try again later."])})))})}function fd(){let e;return n.exports.createElement(d,{title:"503 service unavailable",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.Unavailable []\r
    Spectrum.Heading "Error 503: Service unavailble"\r
    Spectrum.Content "This page isn't working. Try a different page or try again later."\r
]`,description:c(),elements:u(n.exports.createElement(bt,c(),(e=ti,r.createElement(e,{})),r.createElement(le,{children:r.Children.toArray(["Error 503: Service unavailble"])}),r.createElement(ie,{children:r.Children.toArray(["This page isn't working. Try a different page or try again later."])})))})}function xd(){let e;return n.exports.createElement(d,{title:"504 server timeout",code:`Spectrum.IllustratedMessage [\r
    Spectrum.Illustrations.Timeout []\r
    Spectrum.Heading "Error 504: Server timeout"\r
    Spectrum.Content "The server took too long. Please try again later."\r
]`,description:c(),elements:u(n.exports.createElement(bt,c(),(e=ri,r.createElement(e,{})),r.createElement(le,{children:r.Children.toArray(["Error 504: Server timeout"])}),r.createElement(ie,{children:r.Children.toArray(["The server took too long. Please try again later."])})))})}function gd(){const e=f(["An IllustratedMessage displays an illustration and a message, usually for an empty state or an error page.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html"})," for more details."]);return n.exports.createElement(V,{title:"IllustratedMessage",description:e,examples:f([n.exports.createElement(md,null),n.exports.createElement(dd,null),n.exports.createElement(pd,null),n.exports.createElement(hd,null),n.exports.createElement(fd,null),n.exports.createElement(xd,null)])})}function Ed(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Image [\r
    Image.src "https://i.imgur.com/Z7AzH2c.png"\r
    Image.alt "Sky and roof"\r
]`,description:c(),elements:u(r.createElement(xn,{src:"https://i.imgur.com/Z7AzH2c.png",alt:"Sky and roof"}))})}function Sd(){const e=f(["Image is used to insert and display an image within a component.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Image.html"})," for more details."]);return n.exports.createElement(V,{title:"Image",description:e,examples:u(n.exports.createElement(Ed,null))})}function bd(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Keyboard "\u2318V"\r
`,description:c(),elements:u(r.createElement(pr,{children:r.Children.toArray(["\u2318V"])}))})}function yd(){const e=f(["Keyboard represents text that specifies a keyboard command.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Keyboard.html"})," for more details."]);return n.exports.createElement(V,{title:"Keyboard",description:e,examples:u(n.exports.createElement(bd,null))})}function Cd(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Text "A piece of text..."\r
`,description:c(),elements:u(r.createElement(C,{children:r.Children.toArray(["A piece of text..."])}))})}function Ad(){const e=f(["Text represents text with no specific semantic meaning.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Text.html"})," for more details."]);return n.exports.createElement(V,{title:"Text",description:e,examples:u(n.exports.createElement(Cd,null))})}function vd(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.View [\r
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
]`,description:c(),elements:u(r.createElement(R,{width:200,borderColor:"hover",borderWidth:"thicker",padding:"size-250",borderRadius:"medium",backgroundColor:{base:q("static-green-400"),S:q("label-gray"),M:q("static-blue-300"),L:q("static-red-400")},children:r.Children.toArray([r.createElement(M,{children:"Click me!"})])}))})}function wd(){const e=f(["View is a general purpose container with no specific semantics that can be used for custom styling purposes. It supports Spectrum style props to ensure consistency with other Spectrum components.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/View.html"})," for more details."]);return n.exports.createElement(V,{title:"View",description:e,examples:u(n.exports.createElement(vd,null))})}function kd(){return n.exports.createElement(d,{title:"Default example",code:`Spectrum.Well [\r
    Well.content "Better a little which is well done, than a great deal imperfectly."\r
]`,description:c(),elements:u(r.createElement(Vr,{children:"Better a little which is well done, than a great deal imperfectly."}))})}function Td(){let e;return n.exports.createElement(d,{title:"Another example",code:`Spectrum.Well [\r
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
]`,description:c(),elements:u(r.createElement(Vr,{role:"region",["aria-labelledby"]:"well-label",children:r.Children.toArray([n.exports.createElement("h3",{id:"well-label",children:r.Children.toArray(["Shipping Address"])}),(e=f(["601 Townsend Street",n.exports.createElement("br",{})," San Francisco, CA 94103"]),n.exports.createElement("p",{children:r.Children.toArray(Array.from(e))}))])}))})}function Fd(){const e=f(["A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.",n.exports.createElement("br",{}),n.exports.createElement("br",{})," Check the official ",n.exports.createElement("a",{children:r.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Well.html"})," for more details."]);return n.exports.createElement(V,{title:"Well",description:e,examples:f([n.exports.createElement(kd,null),n.exports.createElement(Td,null)])})}const Id=(()=>{let e=!1;try{(typeof window!="undefined"?typeof window.addEventListener=="function":!1)&&(window.addEventListener("testPassiveEventSupport",t=>{},{passive:!0}),window.removeEventListener("testPassiveEventSupport",t=>{}))}catch{}return e})();function sn(e){return Ea(t=>(t.passive?!Id:!1)?{capture:t.capture,once:t.once,passive:!1}:t,e)}function un(e){return Sa(t=>{if(t.capture)return{capture:!0}},e)}function Lt(e,t){if(t.indexOf(e)===0)return t}function vl(e,t){if(pa(t,e))return t}function Bd(e){return e===1?t=>{let l,i,a,o,s,m;return l=Lt("/",t),l!=null?(i=l,"#"+i):(a=Lt("#/",t),a!=null?(o=a,o):(s=Lt("#",t),s!=null?(m=s,"#/"+Xn(m,1,m.length-1)):"#/"+t))}:t=>{let l,i;return l=Lt("/",t),l!=null?(i=l,i):"/"+t}}function F(e,t){return Bd(t)(vr("/",Fa(l=>((l.indexOf("?")>=0?!0:l.indexOf("#")===0)?!0:l.indexOf("/")===0)?l:encodeURIComponent(l),e)))}function Dd(e,t,l){t===1?history.pushState(void 0,"",F(e,l)):history.replaceState(void 0,"",F(e,l));const i=document.createEvent("CustomEvent");i.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(i)}function wl(e,t){return Ta(l=>{if(ha(l))return c();{const i=xa(l,"#");if(i==="?")return c();if(Lt("?",i)!=null)return u(i);{const a=i.split("?");if(Qn((o,s)=>o===s,a,null)?!1:a.length===1){const o=a[0];return u(decodeURIComponent(o))}else if(Qn((o,s)=>o===s,a,null)?!1:a.length===2)if(a[1]===""){const o=a[0];return u(decodeURIComponent(o))}else{const o=a[0],s=a[1];return f([decodeURIComponent(o),"?"+s])}else return c()}}},f(fa(Lt("#",e)!=null?Xn(e,1,e.length-1):t===1&&(vl("#",e)!=null||vl("#/",e)!=null)?"":e,["/"],null,0)))}function Vd(e,t,l){return t(wl(e===2?window.location.pathname+window.location.search:window.location.hash,e))}const Nd=Qo(e=>{const t=Ir(p=>{const x=rr(e.onUrlChanged,S=>{});Vd(rr(e.hashMode,1),x)});if(window.navigator.userAgent.indexOf("Trident")>=0?!0:window.navigator.userAgent.indexOf("MSIE")>=0){const p="hashchange",x=G=>{t(G)},S=void 0,T=te(()=>sn(S),[S]),N=te(()=>un(S),[S]),O=te(()=>G=>{x(G)},[x]);cn(Ir(()=>(T==null?window.addEventListener(p,O):window.addEventListener(p,O,T),ar(()=>{N==null?window.removeEventListener(p,O):window.removeEventListener(p,O,N)}))))}else{const p="popstate",x=t,S=void 0,T=te(()=>sn(S),[S]),N=te(()=>un(S),[S]),O=te(()=>G=>{x(G)},[x]);cn(Ir(()=>(T==null?window.addEventListener(p,O):window.addEventListener(p,O,T),ar(()=>{N==null?window.removeEventListener(p,O):window.removeEventListener(p,O,N)}))))}const l="CUSTOM_NAVIGATION_EVENT",i=t,a=void 0,o=te(()=>sn(a),[a]),s=te(()=>un(a),[a]),m=te(()=>p=>{i(p)},[i]);cn(Ir(()=>(o==null?window.addEventListener(l,m):window.addEventListener(l,m,o),ar(()=>{s==null?window.removeEventListener(l,m):window.removeEventListener(l,m,s)}))));const h=e.application;return h==null?null:h});function de(e,t,l){return r.createElement(Ce,{key:e,title:t,children:Array.from(l)})}function B(e,t){return r.createElement(y,{key:e,textValue:t,title:t})}function Md(){return f([de("general","General",[B("overview","Overview"),B("installation","Installation")]),de("application","Application",[B("provider","Provider")]),de("layout","Layout",[B("flex","Flex"),B("grid","Grid")]),de("buttons","Buttons",[B("actionButton","ActionButton"),B("actionGroup","ActionGroup"),B("button","Button"),B("buttonGroup","ButtonGroup"),B("logicButton","LogicButton"),B("toggleButton","ToggleButton")]),de("collections","Collections",[B("listBox","ListBox"),B("menu","Menu"),B("menuTrigger","MenuTrigger"),B("tableView","TableView")]),de("forms","Forms",[B("checkbox","Checkbox"),B("checkboxGroup","CheckboxGroup"),B("form","Form"),B("numberField","NumberField"),B("radioGroup","RadioGroup"),B("searchField","SearchField"),B("switch","Switch"),B("textArea","TextArea"),B("textField","TextField")]),de("icons","Icons",[B("workflowIcons","Workflow Icons")]),de("navigation","Navigation",[B("breadcrumbs","Breadcrumbs"),B("link","Link"),B("tabs","Tabs")]),de("overlays","Overlays",[B("alertDialog","AlertDialog"),B("dialog","Dialog"),B("dialogContainer","DialogContainer"),B("dialogTrigger","DialogTrigger"),B("tooltip","Tooltip")]),de("pickers","Pickers",[B("comboBox","ComboBox"),B("picker","Picker")]),de("sliders","Sliders",[B("rangeSlider","RangeSlider"),B("slider","Slider")]),de("status","Status",[B("meter","Meter"),B("progressBar","ProgressBar"),B("progressCircle","ProgressCircle"),B("statusLight","StatusLight")]),de("content'","Content",[B("content","Content"),B("divider","Divider"),B("footer","Footer"),B("header","Header"),B("heading","Heading"),B("illustratedMessage","IllustratedMessage"),B("image","Image"),B("keyboard","Keyboard"),B("text","Text"),B("view","View"),B("well","Well")])])}function Rd(e){switch(e){case"installation":return n.exports.createElement(rc,null);case"actionButton":return n.exports.createElement(ac,null);case"actionGroup":return n.exports.createElement(pc,null);case"button":return n.exports.createElement(gc,null);case"buttonGroup":return n.exports.createElement(yc,null);case"toggleButton":return n.exports.createElement(Bc,null);case"provider":return n.exports.createElement(Rc,null);case"flex":return n.exports.createElement(Oc,null);case"grid":return n.exports.createElement(qc,null);case"logicButton":return n.exports.createElement(wc,null);case"listBox":return n.exports.createElement(es,null);case"menu":return n.exports.createElement(ss,null);case"menuTrigger":return n.exports.createElement(ps,null);case"tableView":return n.exports.createElement(gs,null);case"checkbox":return n.exports.createElement(As,null);case"checkboxGroup":return n.exports.createElement(Fs,null);case"form":return n.exports.createElement(Ns,null);case"numberField":return n.exports.createElement(js,null);case"radioGroup":return n.exports.createElement($s,null);case"searchField":return n.exports.createElement(Qs,null);case"switch":return n.exports.createElement(iu,null);case"textArea":return n.exports.createElement(gu,null);case"textField":return n.exports.createElement(Iu,null);case"workflowIcons":return n.exports.createElement(Vu,null);case"breadcrumbs":return n.exports.createElement(Lu,null);case"link":return n.exports.createElement(Ou,null);case"tabs":return n.exports.createElement(Ku,null);case"alertDialog":return n.exports.createElement(Zu,null);case"dialog":return n.exports.createElement(im,null);case"dialogContainer":return n.exports.createElement(sm,null);case"dialogTrigger":return n.exports.createElement(um,null);case"tooltip":return n.exports.createElement(xm,null);case"comboBox":return n.exports.createElement(vm,null);case"picker":return n.exports.createElement(Fm,null);case"rangeSlider":return n.exports.createElement(Mm,null);case"slider":return n.exports.createElement(Lm,null);case"meter":return n.exports.createElement(Om,null);case"progressBar":return n.exports.createElement(Um,null);case"progressCircle":return n.exports.createElement(Xm,null);case"statusLight":return n.exports.createElement(Zm,null);case"content":return n.exports.createElement(ed,null);case"divider":return n.exports.createElement(ld,null);case"footer":return n.exports.createElement(ad,null);case"header":return n.exports.createElement(cd,null);case"heading":return n.exports.createElement(ud,null);case"illustratedMessage":return n.exports.createElement(gd,null);case"image":return n.exports.createElement(Sd,null);case"keyboard":return n.exports.createElement(yd,null);case"text":return n.exports.createElement(Ad,null);case"view":return n.exports.createElement(wd,null);case"well":return n.exports.createElement(Fd,null);default:return n.exports.createElement(tc,null)}}function kl(e){let t;switch(v(e)?t=52:w(e)===""?v(k(e))?t=0:t=52:w(e)==="installation"?v(k(e))?t=1:t=52:w(e)==="provider"?v(k(e))?t=2:t=52:w(e)==="flex"?v(k(e))?t=3:t=52:w(e)==="grid"?v(k(e))?t=4:t=52:w(e)==="actionbutton"?v(k(e))?t=5:t=52:w(e)==="actiongroup"?v(k(e))?t=6:t=52:w(e)==="button"?v(k(e))?t=7:t=52:w(e)==="buttongroup"?v(k(e))?t=8:t=52:w(e)==="logicbutton"?v(k(e))?t=9:t=52:w(e)==="togglebutton"?v(k(e))?t=10:t=52:w(e)==="listbox"?v(k(e))?t=11:t=52:w(e)==="menu"?v(k(e))?t=12:t=52:w(e)==="menutrigger"?v(k(e))?t=13:t=52:w(e)==="tableview"?v(k(e))?t=14:t=52:w(e)==="checkbox"?v(k(e))?t=15:t=52:w(e)==="checkboxgroup"?v(k(e))?t=16:t=52:w(e)==="form"?v(k(e))?t=17:t=52:w(e)==="numberfield"?v(k(e))?t=18:t=52:w(e)==="radiogroup"?v(k(e))?t=19:t=52:w(e)==="searchfield"?v(k(e))?t=20:t=52:w(e)==="switch"?v(k(e))?t=21:t=52:w(e)==="textarea"?v(k(e))?t=22:t=52:w(e)==="textfield"?v(k(e))?t=23:t=52:w(e)==="icons"?v(k(e))?t=24:t=52:w(e)==="breadcrumbs"?v(k(e))?t=25:t=52:w(e)==="link"?v(k(e))?t=26:t=52:w(e)==="tabs"?v(k(e))?t=27:t=52:w(e)==="alertdialog"?v(k(e))?t=28:t=52:w(e)==="dialog"?v(k(e))?t=29:t=52:w(e)==="dialogcontainer"?v(k(e))?t=30:t=52:w(e)==="dialogtrigger"?v(k(e))?t=31:t=52:w(e)==="tooltip"?v(k(e))?t=32:t=52:w(e)==="combobox"?v(k(e))?t=33:t=52:w(e)==="picker"?v(k(e))?t=34:t=52:w(e)==="rangeslider"?v(k(e))?t=35:t=52:w(e)==="slider"?v(k(e))?t=36:t=52:w(e)==="meter"?v(k(e))?t=37:t=52:w(e)==="progressbar"?v(k(e))?t=38:t=52:w(e)==="progresscircle"?v(k(e))?t=39:t=52:w(e)==="statuslight"?v(k(e))?t=40:t=52:w(e)==="content"?v(k(e))?t=41:t=52:w(e)==="divider"?v(k(e))?t=42:t=52:w(e)==="footer"?v(k(e))?t=43:t=52:w(e)==="header"?v(k(e))?t=44:t=52:w(e)==="heading"?v(k(e))?t=45:t=52:w(e)==="illustratedmessage"?v(k(e))?t=46:t=52:w(e)==="image"?v(k(e))?t=47:t=52:w(e)==="keyboard"?v(k(e))?t=48:t=52:w(e)==="text"?v(k(e))?t=49:t=52:w(e)==="view"?v(k(e))?t=50:t=52:w(e)==="well"&&v(k(e))?t=51:t=52,t){case 0:return"overview";case 1:return"installation";case 2:return"provider";case 3:return"flex";case 4:return"grid";case 5:return"actionButton";case 6:return"actionGroup";case 7:return"button";case 8:return"buttonGroup";case 9:return"logicButton";case 10:return"toggleButton";case 11:return"listBox";case 12:return"menu";case 13:return"menuTrigger";case 14:return"tableView";case 15:return"checkbox";case 16:return"checkboxGroup";case 17:return"form";case 18:return"numberField";case 19:return"radioGroup";case 20:return"searchField";case 21:return"switch";case 22:return"textArea";case 23:return"textField";case 24:return"workflowIcons";case 25:return"breadcrumbs";case 26:return"link";case 27:return"tabs";case 28:return"alertDialog";case 29:return"dialog";case 30:return"dialogContainer";case 31:return"dialogTrigger";case 32:return"tooltip";case 33:return"comboBox";case 34:return"picker";case 35:return"rangeSlider";case 36:return"slider";case 37:return"meter";case 38:return"progressBar";case 39:return"progressCircle";case 40:return"statusLight";case 41:return"content";case 42:return"divider";case 43:return"footer";case 44:return"header";case 45:return"heading";case 46:return"illustratedMessage";case 47:return"image";case 48:return"keyboard";case 49:return"text";case 50:return"view";case 51:return"well";case 52:return"overview"}}function zd(e){switch(e){case"installation":return F(u("installation"),1);case"provider":return F(u("provider"),1);case"flex":return F(u("flex"),1);case"grid":return F(u("grid"),1);case"actionButton":return F(u("actionbutton"),1);case"actionGroup":return F(u("actiongroup"),1);case"button":return F(u("button"),1);case"buttonGroup":return F(u("buttongroup"),1);case"logicButton":return F(u("logicbutton"),1);case"toggleButton":return F(u("togglebutton"),1);case"listBox":return F(u("listbox"),1);case"menu":return F(u("menu"),1);case"menuTrigger":return F(u("menutrigger"),1);case"tableView":return F(u("tableview"),1);case"checkbox":return F(u("checkbox"),1);case"checkboxGroup":return F(u("checkboxgroup"),1);case"form":return F(u("form"),1);case"numberField":return F(u("numberfield"),1);case"radioGroup":return F(u("radiogroup"),1);case"searchField":return F(u("searchfield"),1);case"switch":return F(u("switch"),1);case"textArea":return F(u("textarea"),1);case"textField":return F(u("textfield"),1);case"workflowIcons":return F(u("icons"),1);case"breadcrumbs":return F(u("breadcrumbs"),1);case"link":return F(u("link"),1);case"tabs":return F(u("tabs"),1);case"alertDialog":return F(u("alertdialog"),1);case"dialog":return F(u("dialog"),1);case"dialogContainer":return F(u("dialogcontainer"),1);case"dialogTrigger":return F(u("dialogtrigger"),1);case"tooltip":return F(u("tooltip"),1);case"comboBox":return F(u("combobox"),1);case"picker":return F(u("picker"),1);case"rangeSlider":return F(u("rangeslider"),1);case"slider":return F(u("slider"),1);case"meter":return F(u("meter"),1);case"progressBar":return F(u("progressbar"),1);case"progressCircle":return F(u("progresscircle"),1);case"statusLight":return F(u("statuslight"),1);case"content":return F(u("content"),1);case"divider":return F(u("divider"),1);case"footer":return F(u("footer"),1);case"header":return F(u("header"),1);case"heading":return F(u("heading"),1);case"illustratedMessage":return F(u("illustratedmessage"),1);case"image":return F(u("image"),1);case"keyboard":return F(u("keyboard"),1);case"text":return F(u("text"),1);case"view":return F(u("view"),1);case"well":return F(u("well"),1);default:return F(u(""),1)}}class Tl extends it{constructor(t){super();this.SelectedDoc=t}}class Pd extends jr{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["SelectDocsId"]}}function Ld(){return[new Tl(kl(wl(window.location.hash,1))),c()]}function _d(e,t){return[new Tl(e.fields[0]),c()]}function Gd(e,t){let l;const i=Md();return r.createElement(Ht,pe(f([(l=dr,["theme",l]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["id","spectrum-provider"],["children",r.Children.toArray([r.createElement(I,{width:"100%",height:"100%",direction:"column",alignItems:"center",children:r.Children.toArray([r.createElement(I,{columnGap:"size-300",direction:"row",height:"100%",width:"70%",children:r.Children.toArray([r.createElement(R,{width:200,maxWidth:200,minWidth:200,backgroundColor:"gray-200",children:r.Children.toArray([r.createElement(Fe,{id:"navigation-list",children:Array.from(i),["aria-label"]:"Navigation panel",selectionMode:"single",disallowEmptySelection:!0,selectedKeys:[e.SelectedDoc],onSelectionChange:a=>{const o=ae(a.values());let s,m;switch(v(o)?s=1:v(k(o))?(s=0,m=w(o)):s=1,s){case 0:{Dd(u(zd(m)),1,1);break}}}})])}),r.createElement(R,{flexGrow:1,paddingTop:20,id:"content-host",children:r.Children.toArray([Nd({onUrlChanged:a=>{t(new Pd(0,kl(a)))},application:n.exports.createElement(n.exports.Fragment,{},Rd(e.SelectedDoc))})])})])})])})])]])))}Mo(_o("app-root",Bo(Ld,(e,t)=>_d(e),(e,t)=>Gd(e,t))));