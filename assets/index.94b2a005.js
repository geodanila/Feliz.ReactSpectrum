import{r,a as Fl,_ as Il,D as U,F,W as Mn,A as N,T as y,b as ht,I as A,B as L,V as R,c as Ie,L as Rn,d as ft,e as Bl,f as dr,g as un,h as zn,i as mn,j as Dl,k as Vl,l as Nl,m as Ml,n as Rl,o as zl,p as Pl,q as pr,s as dn,P as Ht,R as Qe,t as Z,C as P,u as pn,G as hr,v as Ll,w as Be,S as ve,M as te,x as ne,K as hn,y as Pn,z as Ln,E as Ot,H as _n,J as gt,N as ae,O as fr,Q as _l,U as Gl,X as Hl,Y as He,Z as et,$ as _,a0 as se,a1 as fn,a2 as xt,a3 as re,a4 as tt,a5 as Et,a6 as nt,a7 as rt,a8 as Wt,a9 as jt,aa as qt,ab as Ol,ac as Wl,ad as jl,ae as Q,af as St,ag as ue,ah as K,ai as Gn,aj as J,ak as gr,al as xr,am as Er,an as Oe,ao as We,ap as ql,aq as Ul,ar as Kl,as as Jl,at as je,au as gn,av as $l,aw as bt,ax as xn,ay as Ut,az as Hn,aA as On,aB as Yl,aC as yt,aD as Xl,aE as Zl,aF as Ql,aG as ei,aH as ti,aI as ni,aJ as ri,aK as li}from"./vendor.cbcc365d.js";const ii=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=l(a);fetch(a.href,c)}};ii();function qe(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function ai(e){return typeof e.CompareTo=="function"}function oi(e){return typeof e.Equals=="function"}function ci(e){return typeof e.GetHashCode=="function"}function En(e,t){return Object.getPrototypeOf(e).constructor===Object.getPrototypeOf(t).constructor}class si{constructor(t){this.iter=t}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this.iter.next();return this.current=t.value,!t.done}["System.Collections.IEnumerator.Reset"](){throw new Error("JS iterators cannot be reset")}Dispose(){}}function Ue(e){return typeof e.GetEnumerator=="function"?e.GetEnumerator():new si(e[Symbol.iterator]())}function Sr(e){return{[Symbol.iterator](){return this},next(){const t=e["System.Collections.IEnumerator.MoveNext"](),l=t?e["System.Collections.IEnumerator.get_Current"]():void 0;return{done:!t,value:l}}}}function Le(e,t){let l=e.toString(10);for(;l.length<t;)l="0"+l;return l}function br(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function yr(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Ke{static id(t){return Ke.idMap.has(t)||Ke.idMap.set(t,++Ke.count),Ke.idMap.get(t)}}Ke.idMap=new WeakMap;Ke.count=0;function ui(e){let t=0,l=5381;const i=e.length;for(;t<i;)l=l*33^e.charCodeAt(t++);return l}function Wn(e){return e*2654435761|0}function Kt(e){return e.length===0?0:e.reduce((t,l)=>(t<<5)+t^l)}function mi(e){return e.getTime()}function di(e){const t=e.length,l=new Array(t);for(let i=0;i<t;i++)l[i]=Ct(e[i]);return Kt(l)}function Ct(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return Wn(e);case"string":return ui(e);default:{if(ci(e))return e.GetHashCode();if(qe(e))return di(e);if(e instanceof Date)return mi(e);if(Object.getPrototypeOf(e).constructor===Object){const t=Object.values(e).map(l=>Ct(l));return Kt(t)}else return Wn(Ke.id(e))}}}function pi(e,t,l){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!l(e[i],t[i]))return!1;return!0}function Cr(e,t){return pi(e,t,Jt)}function hi(e,t){const l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return!1;l.sort(),i.sort();for(let a=0;a<l.length;a++)if(l[a]!==i[a]||!Jt(e[l[a]],t[i[a]]))return!1;return!0}function Jt(e,t){return e===t?!0:e==null?t==null:t==null||typeof e!="object"?!1:oi(e)?e.Equals(t):qe(e)?qe(t)&&Cr(e,t):e instanceof Date?t instanceof Date&&Ar(e,t)===0:Object.getPrototypeOf(e).constructor===Object&&hi(e,t)}function Ar(e,t){let l,i;return"offset"in e&&"offset"in t?(l=e.getTime(),i=t.getTime()):(l=e.getTime()+br(e),i=t.getTime()+br(t)),l===i?0:l<i?-1:1}function vr(e,t){return e===t?0:e<t?-1:1}function fi(e,t,l){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let i=0,a=0;i<e.length;i++)if(a=l(e[i],t[i]),a!==0)return a;return 0}function wr(e,t){return fi(e,t,lt)}function gi(e,t){const l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return l.length<i.length?-1:1;l.sort(),i.sort();for(let a=0,c=0;a<l.length;a++){const s=l[a];if(s!==i[a])return s<i[a]?-1:1;if(c=lt(e[s],t[s]),c!==0)return c}return 0}function lt(e,t){return e===t?0:e==null?t==null?0:-1:t==null?1:typeof e!="object"?e<t?-1:1:ai(e)?e.CompareTo(t):qe(e)?qe(t)?wr(e,t):-1:e instanceof Date?t instanceof Date?Ar(e,t):-1:Object.getPrototypeOf(e).constructor===Object?gi(e,t):-1}function kr(e,t,l){return e(t,l)>0?t:l}function me(e){const t={};for(const l of e)t[l[0]]=l[1];return t}const $t=Symbol("curried");function jn(e,t){if(t==null||t.length>1)return t;const l=(...i)=>{let a=t;for(let c=0;c<e;c++)a=a(i[c]);return a};return l[$t]=t,l}function qn(e,t,l){return i=>t===1?l(...e.concat([i])):qn(e.concat([i]),t-1,l)}function Tr(e,t){return t==null||t.length===1?t:$t in t?t[$t]:qn([],e,t)}function xi(e,t,l){if(t!=null)if($t in t){t=t[$t];for(let i=0;i<l.length;i++)t=t(l[i]);return t}else return qn(l,e,t)}function Ei(e){let t=0,l="[";for(const i of e){if(t===0)l+=De(i);else if(t===100){l+="; ...";break}else l+="; "+De(i);t++}return l+"]"}function De(e,t=0){if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return Ei(e);{const l=Object.getPrototypeOf(e).constructor;return l===Object&&t<10?"{ "+Object.entries(e).map(([i,a])=>i+" = "+De(a,t+1)).join(`
  `)+" }":l.name}}return String(e)}function Si(e,t){if(t.length===0)return e;{let l="",i=!0;return t.length===1?(l=De(t[0]),i=l.indexOf(" ")>=0):l=t.map(a=>De(a)).join(", "),e+(i?" (":" ")+l+(i?")":"")}}class Un{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Si(this.name,this.fields)}GetHashCode(){const t=this.fields.map(l=>Ct(l));return t.splice(0,0,Wn(this.tag)),Kt(t)}Equals(t){return this===t?!0:En(this,t)&&this.tag===t.tag?Cr(this.fields,t.fields):!1}CompareTo(t){return this===t?0:En(this,t)?this.tag===t.tag?wr(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function bi(e){const t={},l=Object.keys(e);for(let i=0;i<l.length;i++)t[l[i]]=e[l[i]];return t}function yi(e){return"{ "+Object.entries(e).map(([t,l])=>t+" = "+De(l)).join(`
  `)+" }"}function Ci(e){const t=Object.values(e).map(l=>Ct(l));return Kt(t)}function Ai(e,t){if(e===t)return!0;if(En(e,t)){const l=Object.keys(e);for(let i=0;i<l.length;i++)if(!Jt(e[l[i]],t[l[i]]))return!1;return!0}else return!1}function vi(e,t){if(e===t)return 0;if(En(e,t)){const l=Object.keys(e);for(let i=0;i<l.length;i++){const a=lt(e[l[i]],t[l[i]]);if(a!==0)return a}return 0}else return-1}class it{toJSON(){return bi(this)}toString(){return yi(this)}GetHashCode(){return Ci(this)}Equals(t){return Ai(this,t)}CompareTo(t){return vi(this,t)}}const Je=Symbol("numeric");function wi(e){return typeof e=="number"||(e==null?void 0:e[Je])}function ki(e,t){return typeof e=="number"?e<t?-1:e>t?1:0:e.CompareTo(t)}function Ti(e,t){return typeof e=="number"?e*t:e[Je]().multiply(t)}function Fi(e,t){return typeof e=="number"?e.toFixed(t):e[Je]().toFixed(t)}function Fr(e,t){return typeof e=="number"?e.toPrecision(t):e[Je]().toPrecision(t)}function Ir(e,t){return typeof e=="number"?e.toExponential(t):e[Je]().toExponential(t)}function Br(e){return typeof e=="number"?(Number(e)>>>0).toString(16):e[Je]().toHex()}var H={GetHashCode(){return Kt([this.s,this.e].concat(this.c))},Equals(e){return!this.cmp(e)},CompareTo(e){return this.cmp(e)},[Je](){const e=this;return{multiply:t=>e.mul(t),toPrecision:t=>e.toPrecision(t),toExponential:t=>e.toExponential(t),toFixed:t=>e.toFixed(t),toHex:()=>(Number(e)>>>0).toString(16)}}},Ii=28,Bi=1,at=1e6,Dr=1e6,Di=-29,Vi=29,Ni=!1,Yt="[big.js] ",ot=Yt+"Invalid ",Sn=ot+"decimal places",Mi=ot+"rounding mode",Vr=Yt+"Division by zero",Ve=void 0,Ri=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Nr(){function e(t){var l=this;if(!(l instanceof e))return t===Ve?Nr():new e(t);if(t instanceof e)l.s=t.s,l.e=t.e,l.c=t.c.slice(),zi(l);else{if(typeof t!="string"){if(e.strict===!0)throw TypeError(ot+"number");t=t===0&&1/t<0?"-0":String(t)}Pi(l,t)}l.constructor=e}return e.prototype=H,e.DP=Ii,e.RM=Bi,e.NE=Di,e.PE=Vi,e.strict=Ni,e}function zi(e){if(e.c.length>1&&!e.c[0]){let t=e.c.findIndex(l=>l);e.c=e.c.slice(t),e.e=e.e-t}}function Pi(e,t){var l,i,a;if(!Ri.test(t))throw Error(ot+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(l=t.indexOf("."))>-1&&(t=t.replace(".","")),(i=t.search(/e/i))>0?(l<0&&(l=i),l+=+t.slice(i+1),t=t.substring(0,i)):l<0&&(l=t.length),a=t.length,i=0;i<l&&i<a&&t.charAt(i)=="0";)++i;if(i==a)e.c=[e.e=0];else for(e.e=l-i-1,e.c=[],l=0;i<a;)e.c[l++]=+t.charAt(i++);return e=$e(e,Ye.DP+1,Ye.RM),e}function $e(e,t,l,i){var a=e.c;if(l===Ve&&(l=Ye.RM),l!==0&&l!==1&&l!==2&&l!==3)throw Error(Mi);if(t<1)i=l===3&&(i||!!a[0])||t===0&&(l===1&&a[0]>=5||l===2&&(a[0]>5||a[0]===5&&(i||a[1]!==Ve))),a.length=1,i?(e.e=e.e-t+1,a[0]=1):a[0]=e.e=0;else if(t<a.length){const c=a.findIndex((s,d)=>d>=t&&s>0)<0;if(i=l===1&&a[t]>=5||l===2&&(a[t]>5||a[t]===5&&(i||a[t+1]!==Ve||a[t-1]&1))||l===3&&(i||!c),a.length=t--,i)for(;++a[t]>9;)a[t]=0,t--||(++e.e,a.unshift(1));for(t=a.length;!a[--t];)a.pop()}return e}function At(e,t,l){var i=e.e,a=e.c.join(""),c=a.length;if(t)a=a.charAt(0)+(c>1?"."+a.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)a="0"+a;a="0."+a}else if(i>0)if(++i>c)for(i-=c;i--;)a+="0";else i<c&&(a=a.slice(0,i)+"."+a.slice(i));else c>1&&(a=a.charAt(0)+"."+a.slice(1));return e.s<0&&l?"-"+a:a}H.abs=function(){var e=new this.constructor(this);return e.s=1,e};H.cmp=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.c,c=e.c,s=i.s,d=e.s,h=i.e,p=e.e;if(!a[0]||!c[0])return a[0]?s:c[0]?-d:0;if(s!=d)return s;if(t=s<0,h!=p)return h>p^t?1:-1;for(d=Math.max(a.length,c.length),s=0;s<d;s++)if(h=s<a.length?a[s]:0,p=s<c.length?c[s]:0,h!=p)return h>p^t?1:-1;return 0};H.div=function(e){var t=this.constructor,l=new t(this),e=new t(e),i=l.c,a=e.c,c=l.s==e.s?1:-1,s=t.DP;if(s!==~~s||s<0||s>at)throw Error(Sn);if(!a[0])throw Error(Vr);if(!i[0])return e.s=c,e.c=[e.e=0],e;var d,h,p,g,S,T=a.slice(),M=d=a.length,O=i.length,G=i.slice(0,d),ee=G.length,pt=e,Vn=pt.c=[],Nn=0,Gt=s+(pt.e=l.e-e.e)+1;for(pt.s=c,c=Gt<0?0:Gt,T.unshift(0);ee++<d;)G.push(0);do{for(p=0;p<10;p++){if(d!=(ee=G.length))g=d>ee?1:-1;else for(S=-1,g=0;++S<d;)if(a[S]!=G[S]){g=a[S]>G[S]?1:-1;break}if(g<0){for(h=ee==d?a:T;ee;){if(G[--ee]<h[ee]){for(S=ee;S&&!G[--S];)G[S]=9;--G[S],G[ee]+=10}G[ee]-=h[ee]}for(;!G[0];)G.shift()}else break}Vn[Nn++]=g?p:++p,G[0]&&g?G[ee]=i[M]||0:G=[i[M]]}while((M++<O||G[0]!==Ve)&&c--);return!Vn[0]&&Nn!=1&&(Vn.shift(),pt.e--,Gt--),Nn>Gt&&$e(pt,Gt,t.RM,G[0]!==Ve),pt};H.eq=function(e){return this.cmp(e)===0};H.gt=function(e){return this.cmp(e)>0};H.gte=function(e){return this.cmp(e)>-1};H.lt=function(e){return this.cmp(e)<0};H.lte=function(e){return this.cmp(e)<1};H.minus=H.sub=function(e){var t,l,i,a,c=this.constructor,s=new c(this),e=new c(e),d=s.s,h=e.s;if(d!=h)return e.s=-h,s.plus(e);var p=s.c.slice(),g=s.e,S=e.c,T=e.e;if(!p[0]||!S[0])return S[0]?e.s=-h:p[0]?e=new c(s):e.s=1,e;if(d=g-T){for((a=d<0)?(d=-d,i=p):(T=g,i=S),i.reverse(),h=d;h--;)i.push(0);i.reverse()}else for(l=((a=p.length<S.length)?p:S).length,d=h=0;h<l;h++)if(p[h]!=S[h]){a=p[h]<S[h];break}if(a&&(i=p,p=S,S=i,e.s=-e.s),(h=(l=S.length)-(t=p.length))>0)for(;h--;)p[t++]=0;for(h=t;l>d;){if(p[--l]<S[l]){for(t=l;t&&!p[--t];)p[t]=9;--p[t],p[l]+=10}p[l]-=S[l]}for(;p[--h]===0;)p.pop();for(;p[0]===0;)p.shift(),--T;return p[0]||(e.s=1,p=[T=0]),e.c=p,e.e=T,e};H.mod=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.s,c=e.s;if(!e.c[0])throw Error(Vr);return i.s=e.s=1,t=e.cmp(i)==1,i.s=a,e.s=c,t?new l(i):(a=l.DP,c=l.RM,l.DP=l.RM=0,i=i.div(e),l.DP=a,l.RM=c,this.minus(i.times(e)))};H.plus=H.add=function(e){var t,l,i,a=this.constructor,c=new a(this),e=new a(e);if(c.s!=e.s)return e.s=-e.s,c.minus(e);var s=c.e,d=c.c,h=e.e,p=e.c;if(!d[0]||!p[0])return p[0]||(d[0]?e=new a(c):e.s=c.s),e;if(d=d.slice(),t=s-h){for(t>0?(h=s,i=p):(t=-t,i=d),i.reverse();t--;)i.push(0);i.reverse()}for(d.length-p.length<0&&(i=p,p=d,d=i),t=p.length,l=0;t;d[t]%=10)l=(d[--t]=d[t]+p[t]+l)/10|0;for(l&&(d.unshift(l),++h),t=d.length;d[--t]===0;)d.pop();return e.c=d,e.e=h,e};H.pow=function(e){var t=this.constructor,l=new t(this),i=new t("1"),a=new t("1"),c=e<0;if(e!==~~e||e<-Dr||e>Dr)throw Error(ot+"exponent");for(c&&(e=-e);e&1&&(i=i.times(l)),e>>=1,!!e;)l=l.times(l);return c?a.div(i):i};H.prec=function(e,t){if(e!==~~e||e<1||e>at)throw Error(ot+"precision");return $e(new this.constructor(this),e,t)};H.round=function(e,t){if(e===Ve)e=0;else if(e!==~~e||e<-at||e>at)throw Error(Sn);return $e(new this.constructor(this),e+this.e+1,t)};H.sqrt=function(){var e,t,l,i=this.constructor,a=new i(this),c=a.s,s=a.e,d=new i("0.5");if(!a.c[0])return new i(a);if(c<0)throw Error(Yt+"No square root");c=Math.sqrt(a+""),c===0||c===1/0?(t=a.c.join(""),t.length+s&1||(t+="0"),c=Math.sqrt(t),s=((s+1)/2|0)-(s<0||s&1),e=new i((c==1/0?"5e":(c=c.toExponential()).slice(0,c.indexOf("e")+1))+s)):e=new i(c+""),s=e.e+(i.DP+=4);do l=e,e=d.times(l.plus(a.div(l)));while(l.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return $e(e,(i.DP-=4)+e.e+1,i.RM)};H.times=H.mul=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.c,c=e.c,s=a.length,d=c.length,h=i.e,p=e.e;if(e.s=i.s==e.s?1:-1,!a[0]||!c[0])return e.c=[e.e=0],e;for(e.e=h+p,s<d&&(t=a,a=c,c=t,p=s,s=d,d=p),t=new Array(p=s+d);p--;)t[p]=0;for(h=d;h--;){for(d=0,p=s+h;p>h;)d=t[p]+c[h]*a[p-h-1]+d,t[p--]=d%10,d=d/10|0;t[p]=d}for(d?++e.e:t.shift(),h=t.length;!t[--h];)t.pop();return e.c=t,e};H.toExponential=function(e,t){var l=this,i=l.c[0];if(e!==Ve){if(e!==~~e||e<0||e>at)throw Error(Sn);for(l=$e(new l.constructor(l),++e,t);l.c.length<e;)l.c.push(0)}return At(l,!0,!!i)};H.toFixed=function(e,t){var l=this,i=l.c[0];if(e!==Ve){if(e!==~~e||e<0||e>at)throw Error(Sn);for(l=$e(new l.constructor(l),e+l.e+1,t),e=e+l.e+1;l.c.length<e;)l.c.push(0)}return At(l,!1,!!i)};H.toJSON=H.toString=function(){var e=this,t=e.constructor;return At(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};H.toNumber=function(){var e=Number(At(this,!0,!0));if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(Yt+"Imprecise conversion");return e};H.toPrecision=function(e,t){var l=this,i=l.constructor,a=l.c[0];if(e!==Ve){if(e!==~~e||e<1||e>at)throw Error(ot+"precision");for(l=$e(new i(l),e,t);l.c.length<e;)l.c.push(0)}return At(l,e<=l.e||l.e<=i.NE||l.e>=i.PE,!!a)};H.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(Yt+"valueOf disallowed");return At(e,e.e<=t.NE||e.e>=t.PE,!0)};var Ye=Nr();new Ye(0);new Ye(1);new Ye(-1);new Ye("79228162514264337593543950335");new Ye("-79228162514264337593543950335");var Mr;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(Mr||(Mr={}));function Li(e){return e===-2147483648?e:-e}var ge=null;try{ge=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Ne(e,t,l){this.low=e|0,this.high=t|0,this.unsigned=!!l}Ne.prototype.GetHashCode=function(){let e=this.unsigned?1:0;return e=(e<<5)+e^this.high,e=(e<<5)+e^this.low,e};Ne.prototype.Equals=function(e){return Se(this,e)};Ne.prototype.CompareTo=function(e){return Qt(this,e)};Ne.prototype.toString=function(e){return Zt(this,e)};Ne.prototype.toJSON=function(){return Zt(this)};Ne.prototype[Je]=function(){const e=this;return{multiply:t=>de(e,t),toPrecision:t=>String(e)+0 .toPrecision(t).substr(1),toExponential:t=>String(e)+0 .toExponential(t).substr(1),toFixed:t=>String(e)+0 .toFixed(t).substr(1),toHex:()=>Zt(e.unsigned?e:ea(Xi(e),!0),16)}};Object.defineProperty(Ne.prototype,"__isLong__",{value:!0});function we(e){return(e&&e.__isLong__)===!0}var Rr={},zr={};function vt(e,t){var l,i,a;return t?(e>>>=0,(a=0<=e&&e<256)&&(i=zr[e],i)?i:(l=W(e,(e|0)<0?-1:0,!0),a&&(zr[e]=l),l)):(e|=0,(a=-128<=e&&e<128)&&(i=Rr[e],i)?i:(l=W(e,e<0?-1:0,!1),a&&(Rr[e]=l),l))}function ke(e,t){if(isNaN(e))return t?Ze:Te;if(t){if(e<0)return Ze;if(e>=_r)return Oi}else{if(e<=-Gr)return xe;if(e+1>=Gr)return Hi}return e<0?Y(ke(-e,t)):W(e%wt|0,e/wt|0,t)}function W(e,t,l){return new Ne(e,t,l)}var bn=Math.pow;function Pr(e,t,l){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return Te;if(typeof t=="number"?(l=t,t=!1):t=!!t,l=l||10,l<2||36<l)throw RangeError("radix");var i=e.indexOf("-");if(i>0)throw Error("interior hyphen");if(i===0)return Y(Pr(e.substring(1),t,l));for(var a=ke(bn(l,8)),c=Te,s=0;s<e.length;s+=8){var d=Math.min(8,e.length-s),h=parseInt(e.substring(s,s+d),l);if(d<8){var p=ke(bn(l,d));c=st(de(c,p),ke(h))}else c=de(c,a),c=st(c,ke(h))}return c.unsigned=t,c}function Xe(e,t){return typeof e=="number"?ke(e,t):typeof e=="string"?Pr(e,t):W(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}var Lr=1<<16,_i=1<<24,wt=Lr*Lr,_r=wt*wt,Gr=_r/2,Hr=vt(_i),Te=vt(0),Ze=vt(0,!0),Xt=vt(1),Gi=vt(1,!0),Or=vt(-1),Hi=W(4294967295|0,2147483647|0,!1),Oi=W(4294967295|0,4294967295|0,!0),xe=W(0,2147483648|0,!1);function kt(e){return e.unsigned?e.low>>>0:e.low}function yn(e){return e.unsigned?(e.high>>>0)*wt+(e.low>>>0):e.high*wt+(e.low>>>0)}function Zt(e,t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(ct(e))return"0";if(Ee(e))if(Se(e,xe)){var l=ke(t),i=_e(e,l),a=Tt(de(i,l),e);return Zt(i,t)+kt(a).toString(t)}else return"-"+Zt(Y(e),t);for(var c=ke(bn(t,6),e.unsigned),s=e,d="";;){var h=_e(s,c),p=kt(Tt(s,de(h,c)))>>>0,g=p.toString(t);if(s=h,ct(s))return g+d;for(;g.length<6;)g="0"+g;d=""+g+d}}function ct(e){return e.high===0&&e.low===0}function Ee(e){return!e.unsigned&&e.high<0}function Wr(e){return(e.low&1)==1}function Se(e,t){return we(t)||(t=Xe(t)),e.unsigned!==t.unsigned&&e.high>>>31==1&&t.high>>>31==1?!1:e.high===t.high&&e.low===t.low}function jr(e,t){return Qt(e,t)<0}function Kn(e,t){return Qt(e,t)>0}function Wi(e,t){return Qt(e,t)>=0}function Qt(e,t){if(we(t)||(t=Xe(t)),Se(e,t))return 0;var l=Ee(e),i=Ee(t);return l&&!i?-1:!l&&i?1:e.unsigned?t.high>>>0>e.high>>>0||t.high===e.high&&t.low>>>0>e.low>>>0?-1:1:Ee(Tt(e,t))?-1:1}function Y(e){return!e.unsigned&&Se(e,xe)?xe:st(qi(e),Xt)}function st(e,t){we(t)||(t=Xe(t));var l=e.high>>>16,i=e.high&65535,a=e.low>>>16,c=e.low&65535,s=t.high>>>16,d=t.high&65535,h=t.low>>>16,p=t.low&65535,g=0,S=0,T=0,M=0;return M+=c+p,T+=M>>>16,M&=65535,T+=a+h,S+=T>>>16,T&=65535,S+=i+d,g+=S>>>16,S&=65535,g+=l+s,g&=65535,W(T<<16|M,g<<16|S,e.unsigned)}function Tt(e,t){return we(t)||(t=Xe(t)),st(e,Y(t))}function de(e,t){if(ct(e))return e.unsigned?Ze:Te;if(we(t)||(t=Xe(t)),ge){var l=ge.mul(e.low,e.high,t.low,t.high);return W(l,ge.get_high(),e.unsigned)}if(ct(t))return e.unsigned?Ze:Te;if(Se(e,xe))return Wr(t)?xe:Te;if(Se(t,xe))return Wr(e)?xe:Te;if(Ee(e))return Ee(t)?de(Y(e),Y(t)):Y(de(Y(e),t));if(Ee(t))return Y(de(e,Y(t)));if(jr(e,Hr)&&jr(t,Hr))return ke(yn(e)*yn(t),e.unsigned);var i=e.high>>>16,a=e.high&65535,c=e.low>>>16,s=e.low&65535,d=t.high>>>16,h=t.high&65535,p=t.low>>>16,g=t.low&65535,S=0,T=0,M=0,O=0;return O+=s*g,M+=O>>>16,O&=65535,M+=c*g,T+=M>>>16,M&=65535,M+=s*p,T+=M>>>16,M&=65535,T+=a*g,S+=T>>>16,T&=65535,T+=c*p,S+=T>>>16,T&=65535,T+=s*h,S+=T>>>16,T&=65535,S+=i*g+a*p+c*h+s*d,S&=65535,W(M<<16|O,S<<16|T,e.unsigned)}function _e(e,t){if(we(t)||(t=Xe(t)),ct(t))throw Error("division by zero");if(ge){if(!e.unsigned&&e.high===-2147483648&&t.low===-1&&t.high===-1)return e;var l=(e.unsigned?ge.div_u:ge.div_s)(e.low,e.high,t.low,t.high);return W(l,ge.get_high(),e.unsigned)}if(ct(e))return e.unsigned?Ze:Te;var i,a,c;if(e.unsigned){if(t.unsigned||(t=Yi(t)),Kn(t,e))return Ze;if(Kn(t,$i(e,1)))return Gi;c=Ze}else{if(Se(e,xe)){if(Se(t,Xt)||Se(t,Or))return xe;if(Se(t,xe))return Xt;var s=Ji(e,1);return i=Ki(_e(s,t),1),Se(i,Te)?Ee(t)?Xt:Or:(a=Tt(e,de(t,i)),c=st(i,_e(a,t)),c)}else if(Se(t,xe))return e.unsigned?Ze:Te;if(Ee(e))return Ee(t)?_e(Y(e),Y(t)):Y(_e(Y(e),t));if(Ee(t))return Y(_e(e,Y(t)));c=Te}for(a=e;Wi(a,t);){i=Math.max(1,Math.floor(yn(a)/yn(t)));for(var d=Math.ceil(Math.log(i)/Math.LN2),h=d<=48?1:bn(2,d-48),p=ke(i),g=de(p,t);Ee(g)||Kn(g,a);)i-=h,p=ke(i,e.unsigned),g=de(p,t);ct(p)&&(p=Xt),c=st(c,p),a=Tt(a,g)}return c}function ji(e,t){if(we(t)||(t=Xe(t)),ge){var l=(e.unsigned?ge.rem_u:ge.rem_s)(e.low,e.high,t.low,t.high);return W(l,ge.get_high(),e.unsigned)}return Tt(e,de(_e(e,t),t))}function qi(e){return W(~e.low,~e.high,e.unsigned)}function Ui(e,t){return we(t)||(t=Xe(t)),W(e.low&t.low,e.high&t.high,e.unsigned)}function Ki(e,t){return we(t)&&(t=kt(t)),(t&=63)==0?e:t<32?W(e.low<<t,e.high<<t|e.low>>>32-t,e.unsigned):W(0,e.low<<t-32,e.unsigned)}function Ji(e,t){return we(t)&&(t=kt(t)),(t&=63)==0?e:t<32?W(e.low>>>t|e.high<<32-t,e.high>>t,e.unsigned):W(e.high>>t-32,e.high>=0?0:-1,e.unsigned)}function $i(e,t){if(we(t)&&(t=kt(t)),t&=63,t===0)return e;var l=e.high;if(t<32){var i=e.low;return W(i>>>t|l<<32-t,l>>>t,e.unsigned)}else return W(t===32?l:l>>>t-32,0,e.unsigned)}function Yi(e){return e.unsigned?e:W(e.low,e.high,!0)}function Xi(e,t){return t?Zi(e):Qi(e)}function Zi(e){var t=e.high,l=e.low;return[l&255,l>>>8&255,l>>>16&255,l>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}function Qi(e){var t=e.high,l=e.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,l>>>24,l>>>16&255,l>>>8&255,l&255]}function ea(e,t,l){return l?ta(e,t):na(e,t)}function ta(e,t){return new Ne(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)}function na(e,t){return new Ne(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}const be=st,ye=de,Ge=_e,ra=ji,la=Y,Ft=Ui,Cn=Qt,X=W,Me=kt;function $(e,t,l){let i=e,a=0;switch(l){case 0:i=e<<24>>24,a=i;break;case 4:i=e<<24>>>24;break;case 1:i=e<<16>>16,a=i;break;case 5:i=e<<16>>>16;break;case 2:i=e>>0,a=i;break;case 6:i=e>>>0;break}return W(i,a>>31,t)}function Jn(e){const t=e<0;e=Math.abs(e);const l=~~(e/36e5),i=e%36e5/6e4;return(t?"-":"+")+Le(l,2)+":"+Le(i,2)}function An(e,t){const l=e.toISOString();return t==="first"?l.substring(0,l.indexOf("T")):l.substring(l.indexOf("T")+1,l.length-1)}function ia(e,t){if(t)return e.toISOString();{const l=e.kind==null?!0:e.kind===2;return Le(e.getFullYear(),4)+"-"+Le(e.getMonth()+1,2)+"-"+Le(e.getDate(),2)+"T"+Le(e.getHours(),2)+":"+Le(e.getMinutes(),2)+":"+Le(e.getSeconds(),2)+"."+Le(e.getMilliseconds(),3)+(l?Jn(e.getTimezoneOffset()*-6e4):"")}}function aa(e,t){const l=e.toISOString();return l.substring(0,l.length-1)+Jn(t)}function qr(e,t,l){return t.replace(/(\w)\1*/g,i=>{let a=Number.NaN;switch(i.substring(0,1)){case"y":const c=l?e.getUTCFullYear():e.getFullYear();a=i.length<4?c%100:c;break;case"M":a=(l?e.getUTCMonth():e.getMonth())+1;break;case"d":a=l?e.getUTCDate():e.getDate();break;case"H":a=l?e.getUTCHours():e.getHours();break;case"h":const s=l?e.getUTCHours():e.getHours();a=s>12?s%12:s;break;case"m":a=l?e.getUTCMinutes():e.getMinutes();break;case"s":a=l?e.getUTCSeconds():e.getSeconds();break;case"f":a=l?e.getUTCMilliseconds():e.getMilliseconds();break}return Number.isNaN(a)?i:a<10&&i.length>1?"0"+a:""+a})}function oa(e,t){var l,i,a;const c=new Date(e.getTime()+((l=e.offset)!==null&&l!==void 0?l:0));if(typeof t!="string")return c.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+Jn((i=e.offset)!==null&&i!==void 0?i:0);if(t.length===1)switch(t){case"D":case"d":return An(c,"first");case"T":case"t":return An(c,"second");case"O":case"o":return aa(c,(a=e.offset)!==null&&a!==void 0?a:0);default:throw new Error("Unrecognized Date print format")}else return qr(c,t,!0)}function ca(e,t){const l=e.kind===1;if(typeof t!="string")return l?e.toUTCString():e.toLocaleString();if(t.length===1)switch(t){case"D":case"d":return l?An(e,"first"):e.toLocaleDateString();case"T":case"t":return l?An(e,"second"):e.toLocaleTimeString();case"O":case"o":return ia(e,l);default:throw new Error("Unrecognized Date print format")}else return qr(e,t,l)}function sa(e,t,l){return e.offset!=null?oa(e,t):ca(e,t)}function ua(e,t=0){if((t&~(1^2^16^256))!=0)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");let l="g";return l+=t&1?"i":"",l+=t&2?"m":"",l+=t&16?"s":"",new RegExp(e,l)}function Ur(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function vn(e,t,l=0){let i;return i=e instanceof RegExp?(i=e,e=t,i.lastIndex=l,i):i=ua(t,l),i.test(e)}const en=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,tn=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function ma(e,t){return ki(e,t)<0}function Kr(e){return{input:e,cont:ha(e)}}function da(e,t){let l=0,i=0,a="";tn.lastIndex=0;let c=tn.exec(e);for(;c;){const s=c.index+(c[1]||"").length;a+=e.substring(i,s).replace(/%%/g,"%");const[,,d,h,p,g]=c;a+=Jr(t[l++],d,h,p,g),i=tn.lastIndex,tn.lastIndex-=1,c=tn.exec(e)}return a+=e.substring(i).replace(/%%/g,"%"),a}function pa(e,t){return typeof t=="string"?e(t):t.cont(e)}function $n(e){return pa(t=>t,e)}function Jr(e,t,l,i,a){let c="";if(t=t||"",a=a||"",wi(e))switch(a.toLowerCase()!=="x"&&(ma(e,0)?(e=Ti(e,-1),c="-"):t.indexOf(" ")>=0?c=" ":t.indexOf("+")>=0&&(c="+")),i=i==null?null:parseInt(i,10),a){case"f":case"F":i=i!=null?i:6,e=Fi(e,i);break;case"g":case"G":e=i!=null?Fr(e,i):Fr(e);break;case"e":case"E":e=i!=null?Ir(e,i):Ir(e);break;case"x":e=Br(e);break;case"X":e=Br(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=sa(e):e=De(e);if(l=typeof l=="number"?l:parseInt(l,10),isNaN(l))e=c+e;else{const s=t.indexOf("0")>=0,d=t.indexOf("-")>=0,h=d||!s?" ":"0";h==="0"?(e=Yr(e,l-c.length,h,d),e=c+e):e=Yr(c+e,l,h,d)}return e}function $r(e,t,l,i="",a=-1){return(...c)=>{let s=i;const d=t.slice(),h=l.slice();for(const p of c){const[,,g,S,T,M]=h[0];let O=S;if(a>=0)O=a,a=-1;else if(O==="*"){if(p<0)throw new Error("Non-negative number required");a=p;continue}s+=d[0],s+=Jr(p,g,O,T,M),d.splice(0,1),h.splice(0,1)}return h.length===0?(s+=d[0],e(s)):$r(e,d,h,s,a)}}function ha(e){return t=>{en.lastIndex=0;const l=[],i=[];let a=0,c=en.exec(e);for(;c;){const s=c.index+(c[1]||"").length;l.push(e.substring(a,s).replace(/%%/g,"%")),i.push(c),a=en.lastIndex,en.lastIndex-=1,c=en.exec(e)}return l.length===0?t(e.replace(/%%/g,"%")):(l.push(e.substring(a).replace(/%%/g,"%")),$r(t,l,i))}}function fa(e,t){const l=e.lastIndexOf(t);return l>=0&&l===e.length-t.length}function ga(e){return typeof e!="string"||/^\s*$/.test(e)}function wn(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function Yr(e,t,l,i){l=l||" ",t=t-e.length;for(let a=0;a<t;a++)e=i?e+l:l+e;return e}function xa(e,t,l,i){if(l=typeof l=="number"?l:void 0,i=typeof i=="number"?i:0,l&&l<0)throw new Error("Count cannot be less than zero");if(l===0)return[];const a=(i&1)==1,c=(i&2)==2;t=t||[],t=t.filter(g=>g).map(Ur),t=t.length>0?t:["\\s"];const s=[],d=new RegExp(t.join("|"),"g");let h=!0,p=0;do{const g=d.exec(e);if(g===null){const S=c?e.substring(p).trim():e.substring(p);(!a||S.length>0)&&s.push(S),h=!1}else{const S=c?e.substring(p,g.index).trim():e.substring(p,g.index);(!a||S.length>0)&&(l!=null&&s.length+1===l?(s.push(c?e.substring(p).trim():e.substring(p)),h=!1):s.push(S)),p=d.lastIndex}}while(h);return s}function Ea(e,...t){return t.length===0?e.trimEnd():e.replace(new RegExp("["+Ur(t.join(""))+"]+$"),"")}function Xr(e,t,l){if(t+(l||0)>e.length)throw new Error("Invalid startIndex and/or length");return l!=null?e.substr(t,l):e.substr(t)}class It{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Ct(this.value)}Equals(t){return t==null?!1:Jt(this.value,t instanceof It?t.value:t)}CompareTo(t){return t==null?1:lt(this.value,t instanceof It?t.value:t)}}function q(e){return e==null||e instanceof It?new It(e):e}function Re(e){if(e==null)throw new Error("Option has no value");return e instanceof It?e.value:e}function Sa(e){return e==null?[]:[Re(e)]}function nn(e,t){return e!=null?Re(e):t}function ba(e,t){return t!=null?q(e(Re(t))):void 0}function ya(e,t){return t!=null?e(Re(t)):void 0}function Zr(e,t){return typeof e=="function"?new e(t):new Array(t)}function Qr(e,t,l,i){const a=t|0;return e.fill(i,a,a+l)}function Ca(e,t){const l=Zr(t,1);return l[0]=e,l}function Bt(e,t,l){if(e<0)throw new Error("The input must be non-negative\\nParameter name: count");const i=Zr(l,e);for(let a=0;a<=e-1;a++)i[a]=t(a);return i}function Aa(e){return e.slice()}function el(e,t,l){if(t==null)return l==null;if(l==null)return!1;{let i=0,a=!0;const c=t.length|0,s=l.length|0;if(c>s)return!1;if(c<s)return!1;for(;i<c?a:!1;)a=e(t[i],l[i]),i=i+1|0;return a}}const tl="List was empty";class Ce extends it{constructor(t,l){super();this.head=t,this.tail=l}toString(){return"["+wn("; ",this)+"]"}Equals(t){const l=this;return l===t?!0:((a,c)=>{e:for(;;){const s=a,d=c,h=[s.tail,d.tail];if(h[0]!=null)if(h[1]!=null){const p=h[0],g=h[1];if(Jt(s.head,d.head)){a=p,c=g;continue e}else return!1}else return!1;else return h[1]==null}})(l,t)}GetHashCode(){return((i,a,c)=>{e:for(;;){const s=i,d=a,h=c,p=h.tail;if(p!=null){const g=p;if(s>18)return d|0;i=s+1,a=(d<<1)+Ct(h.head)+631*s,c=g;continue e}else return d|0}})(0,0,this)|0}toJSON(t){const l=this;return Array.from(l)}CompareTo(t){return((a,c)=>{e:for(;;){const s=a,d=c,h=[s.tail,d.tail];if(h[0]!=null)if(h[1]!=null){const p=h[0],g=h[1],S=lt(s.head,d.head)|0;if(S===0){a=p,c=g;continue e}else return S|0}else return 1;else return h[1]!=null?-1:0}})(this,t)|0}GetEnumerator(){return wa(this)}[Symbol.iterator](){return Sr(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return Ue(this)}}class va{constructor(t){this.xs=t,this.it=this.xs,this.current=null}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this,l=t.it.tail;if(l!=null){const i=l;return t.current=t.it.head,t.it=i,!0}else return!1}["System.Collections.IEnumerator.Reset"](){const t=this;t.it=t.xs,t.current=null}Dispose(){}}function wa(e){return new va(e)}function pe(){return new Ce(null,void 0)}function Yn(e,t){return new Ce(e,t)}function Dt(e){return e.tail==null}function nl(e){return((l,i)=>{e:for(;;){const a=l,s=i.tail;if(s!=null){l=a+1,i=s;continue e}else return a|0}})(0,e)|0}function Vt(e){if(e.tail!=null)return e.head;throw new Error(tl+"\\nParameter name: list")}function Fe(e){const t=e.tail;if(t!=null)return t;throw new Error(tl+"\\nParameter name: list")}function o(){return pe()}function Xn(e,t){return Yn(e,t)}function u(e){return Yn(e,pe())}function v(e){return Dt(e)}function rl(e){return nl(e)}function w(e){return Vt(e)}function k(e){return Fe(e)}function Nt(e){const t=nl(e)|0,l=Qr(new Array(t),0,t,null);return((a,c)=>{e:for(;;){const s=a,d=c;if(!Dt(d)){l[s]=Vt(d),a=s+1,c=Fe(d);continue e}break}})(0,e),l}function Zn(e,t,l){let i=t,a=l;for(;!Dt(a);)i=e(i,Vt(a)),a=Fe(a);return i}function ka(e,t,l){return((a,c,s)=>{e:for(;;){const d=a,h=c,p=s;if(Dt(p))return h;a=d+1,c=e(d,h,Vt(p)),s=Fe(p);continue e}})(0,t,l)}function ll(e,t){Zn((l,i)=>{e(i)},void 0,t)}function Ta(e,t){let l=t;for(let i=e.length-1;i>=0;i--)l=Yn(e[i],l);return l}function f(e){return Ta(e,pe())}function oe(e){let t,l;if(qe(e))return f(e);if(e instanceof Ce)return e;{const i=pe();let a=i;const c=Ue(e);try{for(;c["System.Collections.IEnumerator.MoveNext"]();){const h=c["System.Collections.Generic.IEnumerator`1.get_Current"]();a=(t=a,l=new Ce(h,void 0),t.tail=l,l)}}finally{c.Dispose()}const s=a,d=pe();return s.tail=d,Fe(i)}}function Fa(e){const t=pe();let l=t;const i=s=>{l=Zn((d,h)=>{const p=new Ce(h,void 0);return d.tail=p,p},l,s)};if(qe(e))e.forEach(i);else if(e instanceof Ce)ll(i,e);else{const s=Ue(e);try{for(;s["System.Collections.IEnumerator.MoveNext"]();)i(s["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{s.Dispose()}}const a=l,c=pe();return a.tail=c,Fe(t)}function Ia(e,t){let l,i;const a=pe();let c=a,s=t;for(;!Dt(s);){let p=e(Vt(s));for(;!Dt(p);)c=(l=c,i=new Ce(Vt(p),void 0),l.tail=i,i),p=Fe(p);s=Fe(s)}const d=c,h=pe();return d.tail=h,Fe(a)}function kn(e,t){const l=pe(),i=ka((c,s,d)=>{const h=new Ce(e(c,d),void 0);return s.tail=h,h},l,t),a=pe();return i.tail=a,Fe(l)}function Ba(e,t){const l=pe(),i=Zn((c,s)=>{const d=new Ce(e(s),void 0);return c.tail=d,d},l,t),a=pe();return i.tail=a,Fe(l)}function Da(e){return kn((t,l)=>[t,l],e)}function Va(e,t){console.error(e,t)}function il(e,t,l){ll(i=>{try{i(t)}catch(a){e(a)}},l)}function al(){return o()}function Na(e){return Fa(e)}function Ma(e){throw new Error(e)}const Ra="Enumeration already finished.",za="Enumeration has not started. Call MoveNext.",ol="The input sequence has an insufficient number of elements.",Pa="Reset is not supported on this enumerator.";function La(){throw new Error(Pa)}function Qn(){throw new Error(za)}function er(){throw new Error(Ra)}class _a{constructor(t){this.f=t}toString(){const t=this,l=4;let i=0,a="seq [";const c=Ue(t);try{for(;i<l?c["System.Collections.IEnumerator.MoveNext"]():!1;)i>0&&(a=a+"; "),a=a+De(c["System.Collections.Generic.IEnumerator`1.get_Current"]()),i=i+1|0;return i===l&&(a=a+"; ..."),a+"]"}finally{c.Dispose()}}GetEnumerator(){return this.f()}[Symbol.iterator](){return Sr(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return this.f()}}function Ga(e){return new _a(e)}class Ha{constructor(t,l,i){this.current=t,this.next=l,this.dispose=i}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current()}["System.Collections.IEnumerator.get_Current"](){return this.current()}["System.Collections.IEnumerator.MoveNext"](){return this.next()}["System.Collections.IEnumerator.Reset"](){La()}Dispose(){this.dispose()}}function Tn(e,t,l){return new Ha(e,t,l)}function Oa(e){let t,l,i=!1,a=!1,c;const s=()=>{if(a=!0,l!=null){const d=l;try{d.Dispose()}finally{l=void 0}}if(t!=null){const d=t;try{d.Dispose()}finally{t=void 0}}};return Tn(()=>(i?a&&er():Qn(),c!=null?Re(c):er()),()=>{let d;if(i||(i=!0),a)return!1;{let h;for(;h==null;){const p=[t,l];if(p[0]!=null)if(p[1]!=null){const g=p[1];if(g["System.Collections.IEnumerator.MoveNext"]())c=q(g["System.Collections.Generic.IEnumerator`1.get_Current"]()),h=!0;else try{g.Dispose()}finally{l=void 0}}else{const g=p[0];g["System.Collections.IEnumerator.MoveNext"]()?l=(d=g["System.Collections.Generic.IEnumerator`1.get_Current"](),Ue(d)):(s(),h=!1)}else t=Ue(e)}return Re(h)}},()=>{a||s()})}function Wa(e,t){return Tn(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{t.Dispose()}finally{e()}})}function cl(e,t,l){let i=!1,a,c=q(e());const s=()=>{if(c!=null){const h=Re(c);try{l(h)}finally{c=void 0}}},d=()=>{try{s()}finally{a=void 0}};return Tn(()=>(i||Qn(),a!=null?Re(a):er()),()=>{if(i||(i=!0),c!=null){const h=Re(c);let p;try{p=t(h)}catch(g){throw d(),g}return p!=null?(a=p,!0):(d(),!1)}else return!1},s)}function ja(e,t){let l,i=t;return Tn(()=>{if(l!=null){const a=l[0];return l[1],a}else return Qn()},()=>(l=e(i),l!=null?(l[0],i=l[1],!0):!1),()=>{})}function qa(e,t){t==null&&Ma(e)}function Mt(e){return Ga(e)}function Fn(e){return qa("source",e),Ue(e)}function x(e){return Mt(()=>Ue(e()))}function sl(e){return Mt(()=>Oa(e))}function Ua(e,t){return Mt(()=>ja(e,t))}function In(){return x(()=>new Array(0))}function E(e){return x(()=>Ca(e))}function C(e){return qe(e)?f(e):e instanceof Ce?e:oe(e)}function Ka(e,t,l){return Mt(()=>cl(e,t,l))}function Ja(e,t,l){return Mt(()=>{let i=-1;return cl(e,a=>(i=i+1|0,t(i,a)),l)})}function z(e,t){return sl([e,t])}function $a(e,t,l){const i=Fn(l);try{let a=t;for(;i["System.Collections.IEnumerator.MoveNext"]();)a=e(a,i["System.Collections.Generic.IEnumerator`1.get_Current"]());return a}finally{i.Dispose()}}function Ya(e,t){$a((l,i)=>{e(i)},void 0,t)}function rn(e,t){return Ka(()=>Fn(t),l=>l["System.Collections.IEnumerator.MoveNext"]()?q(e(l["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,l=>{l.Dispose()})}function Xa(e,t){return Mt(()=>{const l=Fn(t);try{for(let i=1;i<=e;i++)if(!l["System.Collections.IEnumerator.MoveNext"]())throw new Error(ol+"\\nParameter name: source");return Wa(()=>{},l)}catch(i){throw l.Dispose(),i}})}function Za(e,t){return Ja(()=>Fn(t),(l,i)=>{if(l<e){if(i["System.Collections.IEnumerator.MoveNext"]())return q(i["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(ol+"\\nParameter name: source")}else return},l=>{l.Dispose()})}function ul(e,t){return x(()=>sl(rn(e,t)))}class ml extends it{constructor(t,l){super();this.bound=t|0,this.digits=l}}function dl(e,t){e:for(;;){const l=e,i=t;if(i===0)return 1;if(i%2==0){e=l*l,t=~~(i/2);continue e}else return l*dl(l*l,~~(i/2))|0}}X(2013265921,0,!1);X(2013265921,0,!0);const Qa=29;Bt(Qa-1,e=>dl(2,e),Int32Array);function tr(e){return e.bound}function ln(e,t){return e.digits[t]}function nr(e,t){return $(ln(e,t),!1,2)}function Bn(e,t,l){e.digits[t]=l|0}function rr(e,t){e:for(;;){const l=e,i=t;if(i===0)return X(1,0,!1);if(i%2==0){e=ye(l,l),t=~~(i/2);continue e}else return ye(l,rr(ye(l,l),~~(i/2)))}}function Rt(e,t){e:for(;;){const l=e,i=t;if(i===0)return 1;if(i%2==0){e=l*l,t=~~(i/2);continue e}else return l*Rt(l*l,~~(i/2))|0}}function eo(e){let t=0;for(let l=0;l<=e.bound-1;l++)t=e.digits[l]+(t<<3)|0;return t|0}const zt=24,ut=16777216,ze=X(16777216,0,!1),Pt=X(16777215,0,!1);X(16777215,0,!0);function mt(e){return new ml(e,new Int32Array(e))}function to(e){return new ml(e.bound,Aa(e.digits))}function Pe(e){const l=((i,a)=>{e:for(;;){const c=i,s=a;if(s===-1?!0:c[s]!==0)return s+1|0;i=c,a=s-1;continue e}})(e.digits,e.bound-1)|0;return e.bound=l|0,e}const pl=2,hl=3;function an(e){const t=(e<0?0:e)|0;if(t<ut){const l=mt(1);return l.digits[0]=t|0,Pe(l)}else{const l=mt(pl);for(let i=0;i<=pl-1;i++)l.digits[i]=~~(t/Rt(ut,i))%ut|0;return Pe(l)}}function no(e){const t=Cn(e,X(0,0,!1))<0?X(0,0,!1):e,l=mt(hl);for(let i=0;i<=hl-1;i++)l.digits[i]=~~Me(ra(Ge(t,rr(ze,i)),ze))|0;return Pe(l)}function ro(e){if(e.bound===1)return e.digits[0]|0;{let t=0;for(let l=e.bound-1;l>=0;l--)t=e.digits[l]+ut*t|0;return t|0}}const lo=an(1),io=an(0);function ce(e){return e.bound-1}function le(e){return e.bound===0}function fl(e,t){return e.bound===t.bound?((i,a,c)=>{e:for(;;){const s=i,d=a,h=c;if(h===-1)return!0;if(s[h]===d[h]){i=s,a=d,c=h-1;continue e}else return!1}})(e.digits,t.digits,e.bound-1):!1}function ao(e,t,l,i){return e.bound+t<l.bound+i?-1:e.bound+t>l.bound+t?1:((c,s,d)=>{e:for(;;){const h=c,p=s,g=d;if(g===-1)return 0;{const S=(g<t?0:h[g-t])|0,T=(g<i?0:p[g-i])|0;if(S===T){c=h,s=p,d=g-1;continue e}else return S<T?-1:1}}})(e.digits,l.digits,e.bound+t-1)|0}function oo(e,t){return e.bound<t.bound?-1:e.bound>t.bound?1:((i,a,c)=>{e:for(;;){const s=i,d=a,h=c;if(h===-1)return 0;if(s[h]===d[h]){i=s,a=d,c=h-1;continue e}else return s[h]<d[h]?-1:1}})(e.digits,t.digits,e.bound-1)|0}function gl(e,t){return oo(e,t)===-1}function co(e,t){const l=mt(2),i=ye($(e,!1,2),$(t,!1,2));return Bn(l,0,~~Me(Ft(i,Pt))),Bn(l,1,~~Me(Ge(i,ze))),Pe(l)}function xl(e,t,l){e:for(;;){const i=e,a=t,c=l;if(Cn(a,X(0,0,!1))>0){const s=be(nr(i,c),a);Bn(i,c,~~Me(Ft(s,Pt))),e=i,t=Ge(s,ze),l=c+1;continue e}break}}function El(e,t){const l=tr(e)|0,i=mt(l+1),a=$(t,!1,2);let c=X(0,0,!1);for(let s=0;s<=l-1;s++){const d=be(be(c,nr(i,s)),ye(nr(e,s),a));Bn(i,s,~~Me(Ft(d,Pt))),c=Ge(d,ze)}return xl(i,c,l),Pe(i)}function so(e,t){const l=mt(e.bound+t.bound),i=l.digits;for(let a=0;a<=e.bound-1;a++){const c=$(e.digits[a],!1,2);let s=X(0,0,!1),d=a;for(let h=0;h<=t.bound-1;h++){const p=$(t.digits[h],!1,2),g=be(be($(i[d],!1,2),s),ye(c,p));i[d]=~~Me(Ft(g,Pt))|0,s=Ge(g,ze),d=d+1|0}xl(l,s,d)}return Pe(l)}function uo(e,t){const l=tr(e)===1,i=tr(t)===1;return(l?i:!1)?co(ln(e,0),ln(t,0)):l?El(t,ln(e,0)):i?El(e,ln(t,0)):so(e,t)}class mo extends it{constructor(t,l,i,a,c,s,d){super();this.bigL=t|0,this.twoToBigL=l|0,this.k=i|0,this.bigK=a|0,this.bigN=c|0,this.split=s|0,this.splits=d}}function he(e,t,l,i){return new mo(e,Rt(2,e),t,l,i,~~(zt/e),Bt(~~(zt/e),a=>Rt(2,e*a),Int32Array))}const po=[he(1,28,268435456,268435456),he(2,26,67108864,134217728),he(3,24,16777216,50331648),he(4,22,4194304,16777216),he(5,20,1048576,5242880),he(6,18,262144,1572864),he(7,16,65536,458752),he(8,14,16384,131072),he(9,12,4096,36864),he(10,10,1024,10240),he(11,8,256,2816),he(12,6,64,768),he(13,4,16,208)];Bt(zt,e=>Rt(2,e)-1,Int32Array);Bt(zt,e=>Rt(2,e),Int32Array);Bt(zt,e=>rr(X(2,0,!1),e));~~(po[0].bigN/zt);function ho(e,t){return uo(e,t)}function fo(e,t,l,i){const a=[e.digits,ce(e)],c=a[0],s=[l.digits,ce(l)],d=s[1]|0,h=s[0],p=$(t,!1,2);let g=0,S=ye(p,$(h[0],!1,2));for(;Cn(S,X(0,0,!1))>0?!0:g<d;){if(g>a[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let T=~~Me(Ft(S,Pt)),M=Ge(S,ze);T<=c[g+i]?c[g+i]=c[g+i]-T|0:(c[g+i]=c[g+i]+(ut-T)|0,M=be(M,X(1,0,!1))),g<d?S=be(M,ye(p,$(h[g+1],!1,2))):S=M,g=g+1|0}Pe(e)}function go(e,t,l,i){const a=[e.digits,ce(e)],c=a[0],s=[l.digits,ce(l)],d=s[1]|0,h=s[0],p=$(t,!1,2);let g=0,S=ye(p,$(h[0],!1,2));for(;Cn(S,X(0,0,!1))>0?!0:g<d;){if(g>a[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let T=~~Me(Ft(S,Pt)),M=Ge(S,ze);T<ut-c[g+i]?c[g+i]=c[g+i]+T|0:(c[g+i]=T-(ut-c[g+i])|0,M=be(M,X(1,0,!1))),g<d?S=be(M,ye(p,$(h[g+1],!1,2))):S=M,g=g+1|0}Pe(e)}function xo(e,t,l){const i=[ce(t),ce(e)],a=i[1]|0,c=i[0]|0;if(a<c+l)return 0;{const s=[t.digits,e.digits],d=s[1],h=s[0],p=(c===0?a===l?~~(d[l]/h[0]):~~Me(Ge(be(ye($(d[a],!1,2),ze),$(d[a-1],!1,2)),$(h[0],!1,2))):a===c+l?~~(d[a]/(h[c]+1)):~~Me(Ge(be(ye($(d[a],!1,2),ze),$(d[a-1],!1,2)),be($(h[c],!1,2),X(1,0,!1)))))|0;return p===0?ao(t,l,e,0)!==1?1:0:p|0}}function Eo(e,t){if(le(t))throw new Error;if(ce(e)<ce(t))return[io,e];{const l=to(e),i=mt(ce(e)-ce(t)+1+1);let a=ce(e);const c=ce(t)|0;let s=a-c,d=!1;for(;!d;){const h=xo(l,t,s)|0;h>0?(fo(l,h,t,s),go(i,h,lo,s)):(d=h===0?s===0:!1,d||(a===c+s?s=s-1|0:(s=s-1|0,a=a-1|0)))}return[Pe(i),Pe(l)]}}an(2);function lr(e){return an(e)}function So(e){return no(e)}function Sl(e){const t=ce(e)|0,l=(c,s,d)=>{e:for(;;){const h=c,p=s,g=d;if(ce(g)>t)return Xn([p,g],h);c=Xn([p,g],h),s=p+1,d=ho(g,g);continue e}},i=(c,s,d,h)=>{e:for(;;){const p=c,g=s,S=d,T=h;if(v(T)){const M=ro(S)|0;return(p?M===0:!1)?g:Xn(yr(M),g)}else{const M=k(T),O=Eo(S,w(T)[1]),G=O[1],ee=O[0];if(p?le(ee):!1){c=p,s=g,d=G,h=M;continue e}else{c=p,s=i(!1,g,G,M),d=ee,h=M;continue e}}}},a=i(!0,o(),e,l(o(),0,an(10)));return v(a)?"0":wn("",Nt(a))}function bo(e){return e.bound<=1}function bl(e){const t=e,l=0;return l<t.bound?t.digits[l]|0:0}class Ae extends it{constructor(t,l){super();this.signInt=t|0,this.v=l}toString(){const t=this;switch(dt(t)|0){case-1:return le(j(t))?"0":"-"+Sl(j(t));case 0:return"0";case 1:return Sl(j(t));default:throw new Error("signs should be +/- 1 or 0")}}Equals(t){const l=this;return t instanceof Ae?yl(l,t):!1}GetHashCode(){return Ao(this)|0}toJSON(t){return De(this)}CompareTo(t){const l=this;if(t instanceof Ae)return Co(l,t)|0;throw new Error("the objects are not comparable\\nParameter name: obj")}}function ir(e,t){return new Ae(e,t)}(()=>{Ae.smallLim=4096,Ae.smallPosTab=Bt(Ae.smallLim,e=>lr(e)),Ae.one=or(1),Ae.two=or(2),Ae.zero=or(0)})();function ar(e){return(bo(e)?bl(e)<Ae.smallLim:!1)?Ae.smallPosTab[bl(e)]:e}function dt(e){return e.signInt}function j(e){return e.v}function yl(e,t){const l=[dt(e),dt(t)];let i;switch(l[0]===-1?l[1]===-1?i=1:l[1]===0?i=8:l[1]===1?i=3:i=9:l[0]===0?l[1]===-1?i=6:l[1]===0?i=4:l[1]===1?i=5:i=9:l[0]===1?l[1]===-1?i=2:l[1]===0?i=7:l[1]===1?i=0:i=9:i=9,i){case 0:return fl(j(e),j(t));case 1:return fl(j(e),j(t));case 2:return le(j(e))?le(j(t)):!1;case 3:return le(j(e))?le(j(t)):!1;case 4:return!0;case 5:return le(j(t));case 6:return le(j(t));case 7:return le(j(e));case 8:return le(j(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function yo(e,t){const l=[dt(e),dt(t)];let i;switch(l[0]===-1?l[1]===-1?i=1:l[1]===0?i=8:l[1]===1?i=3:i=9:l[0]===0?l[1]===-1?i=6:l[1]===0?i=4:l[1]===1?i=5:i=9:l[0]===1?l[1]===-1?i=2:l[1]===0?i=7:l[1]===1?i=0:i=9:i=9,i){case 0:return gl(j(e),j(t));case 1:return gl(j(t),j(e));case 2:return!1;case 3:return le(j(e))?!le(j(t)):!0;case 4:return!1;case 5:return!le(j(t));case 6:return!1;case 7:return!1;case 8:return!le(j(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function Co(e,t){return yo(e,t)?-1:yl(e,t)?0:1}function Ao(e){return dt(e)===0?1:dt(e)+eo(j(e))|0}function or(e){return e>=0?ir(1,ar(lr(e))):e===-2147483648?ir(-1,ar(So(la($(e,!1,2))))):ir(-1,ar(lr(Li(e))))}function vo(e,t,l,i){const a=lt(e,l)|0;if(a===0)throw new Error("The step of a range cannot be zero");const c=a>0;return s=>{const d=lt(s,t)|0;return((c?d<=0:!1)?!0:c?!1:d>=0)?[s,i(s,e)]:void 0}}function wo(e,t,l,i,a){const c=vo(t,l,i,a);return x(()=>Ua(c,e))}function ko(e,t,l){return wo(e,t,l,0,(i,a)=>i+a)}class Lt extends Un{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["Writable","ReadWritable"]}}class To{constructor(t){this.state=new Lt(0,Qr(new Array(kr((l,i)=>vr(l,i),t,10)),0,kr((l,i)=>vr(l,i),t,10),null),0)}}function Fo(e){return new To(e)}function Io(e){const t=e.state;if(t.tag===1){const l=t.fields[1]|0,i=t.fields[2]|0,a=t.fields[0],c=(i+1)%a.length|0;return c===l?e.state=new Lt(0,a,l):e.state=new Lt(1,a,l,c),q(a[i])}else return}function Bo(e,t){const l=e.state;if(l.tag===1){const i=l.fields[1]|0,a=l.fields[2]|0,c=l.fields[0];c[i]=t;const s=(i+1)%c.length|0;s===a?e.state=new Lt(1,Do(e,a,c),c.length,0):e.state=new Lt(1,c,s,a)}else{const i=l.fields[1]|0,a=l.fields[0];a[i]=t;const c=(i+1)%a.length|0;e.state=new Lt(1,a,c,i)}}function Do(e,t,l){return Array.from(x(()=>z(Xa(t,l),x(()=>z(Za(t,l),x(()=>ul(i=>E(null),ko(0,1,l.length))))))))}class Cl extends it{constructor(t,l,i,a,c,s,d){super();this.init=t,this.update=l,this.subscribe=i,this.view=a,this.setState=c,this.onError=s,this.syncDispatch=d}}function Vo(e,t,l){return new Cl(e,t,i=>al(),l,(i,a)=>{l(i,a)},i=>{Va(i[0],i[1])},jn(2,i=>i))}function No(e,t){return new Cl(t.init,t.update,t.subscribe,t.view,e,t.onError,t.syncDispatch)}function Mo(e){return Tr(2,e.view)}function Ro(e,t){const l=t.init(e),i=l[0],a=Fo(10);let c=!1,s=i;const d=p=>{if(c)Bo(a,p);else{c=!0;let g=q(p);for(;g!=null;){const S=Re(g);try{const T=t.update(S,s),M=T[0];t.setState(M,h),il(O=>{t.onError([$n(Kr("Error in command while handling: %A"))(S),O])},h,T[1]),s=M}catch(T){t.onError([$n(Kr("Unable to process the message: %A"))(S),T])}g=Io(a)}c=!1}},h=xi(1,t.syncDispatch,[d]);t.setState(i,h),il(p=>{t.onError(["Error intitializing:",p])},h,Na(f([(()=>{try{return t.subscribe(i)}catch(p){return t.onError(["Unable to subscribe:",p]),al()}})(),l[1]])))}function zo(e){Ro(void 0,e)}class Po extends it{constructor(t,l,i){super();this.model=t,this.render=l,this.equal=i}}class Lo extends r.exports.Component{constructor(t){super(t)}shouldComponentUpdate(t,l){const i=this;return!i.props.equal(i.props.model,t.model)}render(){return this.props.render()}}function _o(e,t,l,i){return r.exports.createElement(Lo,new Po(l,()=>t(l,i),e))}function Go(e,t,l){return No((i,a)=>{Fl.exports.render(e((c,s)=>c===s,jn(2,Mo(l)),i,a),document.getElementById(t))},l)}function Ho(e,t){return Go((l,i,a,c)=>_o(l,i,a,c),e,t)}const n=Il,Oo=e=>{r.exports.useEffect(()=>{const t=e();return()=>{t.Dispose()}})},Wo=(e,t)=>{r.exports.useEffect(()=>{const l=e();return()=>{l.Dispose()}},t)},jo=e=>{r.exports.useLayoutEffect(()=>{const t=e();return()=>{t.Dispose()}})},qo=Oo,Uo=Wo,Ko=jo;function Jo(e,t,l,i){const a=n.memo(e,jn(2,nn(Tr(2,l),null)));return Ya(c=>{e.displayName=c},Sa(t)),c=>n.createElement(a,$o(i,c))}function $o(e,t){if(e==null)return t;{const l=e;return t.key=l(t),t}}function on(e){return{Dispose(){e()}}}function cr(e){qo(e)}function Yo(e){Ko(t=>(e(),on(()=>{})))}function Xo(e){Zo(e,[])}function Zo(e,t){Uo(l=>(e(),on(()=>{})),t)}function Qo(e,t){return n.useCallback(e,nn(t,[]))}function sr(e){return n.useRef(e)}function ec(){return sr(void 0)}function ie(e,t){return n.useMemo(e,nn(t,[]))}function tc(e,t,l){return Jo(e,void 0,l,t)}function Dn(e){const t=sr(e),l=Qo(i=>t.current(i),[]);return Yo(()=>{t.current=e}),l}function B(e){return n.useState(e)}class cn extends Un{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["FSharp","Bash"]}}function sn(e){const t=e.text,l=e.lang,i=ec();Xo(()=>{const c=i.current;c==null?console.warn("Failed to find element"):Prism.highlightAllUnder(c)});const a=l.tag===1?"language-bash":"language-fsharp";return r.exports.createElement("pre",{ref:i,className:a,children:n.Children.toArray([r.exports.createElement("code",{children:[t]})])})}function nc(e){const t=e.elements;return n.createElement(Mn,{UNSAFE_className:"example-result",children:n.Children.toArray(Array.from(t))})}function V(e){const t=e.examples,l=e.description,i=e.title;return r.exports.createElement(r.exports.Fragment,{},...C(x(()=>z(E(r.exports.createElement("h1",{className:"title example-group-title",children:n.Children.toArray([i])})),x(()=>z(E(r.exports.createElement("p",{className:"example-group-description",children:n.Children.toArray(Array.from(l))})),x(()=>ul(a=>z(E(a[1]),x(()=>a[0]!==rl(t)-1?z(E(r.exports.createElement("br",{})),x(()=>z(E(n.createElement(U,{size:"S"})),x(()=>E(r.exports.createElement("br",{})))))):In())),Da(t)))))))))}function m(e){const t=e.elements,l=e.description,i=e.code,a=e.title;return r.exports.createElement(r.exports.Fragment,{},...C(x(()=>z(E(r.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray([a])})),x(()=>z(rn(c=>c,l),x(()=>E(n.createElement(F,{direction:"column",gap:"size-100",children:n.Children.toArray([r.exports.createElement(sn,{lang:new cn(0),text:i}),r.exports.createElement(nc,{elements:t})])})))))))))}const Al=f(["blue-400","blue-500","blue-600","blue-700","celery-400","celery-500","celery-600","celery-700","chartreuse-400","chartreuse-500","chartreuse-600","chartreuse-700","fuchsia-400","fuchsia-500","fuchsia-600","fuchsia-700","gray-50","gray-75","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","green-400","green-500","green-600","green-700","indigo-400","indigo-500","indigo-600","indigo-700","informative","magenta-400","magenta-500","magenta-600","magenta-700","negative","notice","orange-400","orange-500"]);function rc(){return r.exports.createElement(r.exports.Fragment,{},r.exports.createElement("h1",{className:"title",children:n.Children.toArray(["Feliz.ReactSpectrum",r.exports.createElement("a",{href:"https://www.nuget.org/packages/Feliz.ReactSpectrum/",children:n.Children.toArray([r.exports.createElement("img",{alt:"NuGet badge",src:"https://img.shields.io/nuget/v/Feliz.ReactSpectrum.svg?style=square"})])})])}),r.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray(["Feliz-style Fable bindings for Adobe's React Spectrum components"])}),n.createElement(U,{size:"M",marginTop:10,marginBottom:10}),r.exports.createElement("p",{children:n.Children.toArray(["Fable bindings for ",r.exports.createElement("a",{href:"https://react-spectrum.adobe.com/react-spectrum/",children:n.Children.toArray(["Adobe's React Spectrum components"])}),", written in the excelent ",r.exports.createElement("a",{href:"https://github.com/Zaid-Ajaj/Feliz",children:n.Children.toArray(["Feliz DSL style"])}),"."])}),r.exports.createElement("h2",{className:"subtitle paragraph",children:n.Children.toArray(["Features"])}),r.exports.createElement("ul",{className:"bullet-list",children:n.Children.toArray([r.exports.createElement("li",{children:["Covers all React Spectrum components as of version 3.15.1"]}),r.exports.createElement("li",{children:["Fully erased - the generated JS is zero size"]}),r.exports.createElement("li",{children:n.Children.toArray(["Compatible with the ",r.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:n.Children.toArray(["Femto dotnet tool"])})])})])}))}function lc(){return r.exports.createElement(r.exports.Fragment,{},r.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray(["Using the Femto dotnet tool"])}),r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["The easiest way to install the package is using the ",r.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:n.Children.toArray(["Femto dotnet tool"])})," since this will also take care of installing the correct npm dependencies."])}),r.exports.createElement(sn,{lang:new cn(1),text:"dotnet femto install Feliz.ReactSpectrum"}),r.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray(["Manual installation"])}),r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["You can install the package using NuGet:"])}),r.exports.createElement(sn,{lang:new cn(1),text:"dotnet add package Feliz.ReactSpectrum"}),r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["Or in case you use Paket:"])}),r.exports.createElement(sn,{lang:new cn(1),text:"dotnet paket add Feliz.ReactSpectrum"}),r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["Don't forget to also install the npm dependencies:"])}),r.exports.createElement(sn,{lang:new cn(1),text:`npm install @adobe/react-spectrum
npm install @spectrum-icons/illustrations
npm install @spectrum-icons/workflow`}))}function ic(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ActionButton [
    ActionButton.content "Press me"
    ActionButton.onPress (fun ev ->
        Browser.Dom.window.alert("I was clicked!")
    )
]`,description:o(),elements:u(n.createElement(N,{children:"Press me",onPress:e=>{window.alert(q("I was clicked!"))}}))})}function ac(){let e;return r.exports.createElement(m,{title:"Adding an icon",code:`Spectrum.ActionButton [
    ActionButton.children [
        Spectrum.Icon.Airplane [
            Icon.size IconSize.M
        ]
        Spectrum.Text "I have an airplane icon"
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]`,description:o(),elements:u(n.createElement(N,{children:n.Children.toArray([(e=Bl,n.createElement(e,{size:"M"})),n.createElement(y,{children:n.Children.toArray(["I have an airplane icon"])})]),onPress:t=>{console.log("Event: ",t)}}))})}function oc(){let e;return r.exports.createElement(m,{title:"Icon-only",code:`Spectrum.ActionButton [
    ActionButton.ariaLabel "Edit"
    ActionButton.children [
        Spectrum.Icon.Edit [
            Icon.size IconSize.S
        ]
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]`,description:o(),elements:u(n.createElement(N,{["aria-label"]:"Edit",children:n.Children.toArray([(e=dr,n.createElement(e,{size:"S"}))]),onPress:t=>{console.log("Event: ",t)}}))})}function cc(){const e=f(["ActionButtons allow users to perform an action. They\u2019re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren\u2019t meant to draw a lot of attention.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionButton.html"})," for more details."]);return r.exports.createElement(V,{title:"ActionButton",description:e,examples:f([r.exports.createElement(ic,null),r.exports.createElement(ac,null),r.exports.createElement(oc,null)])})}function sc(){return r.exports.createElement(m,{title:"Default example",code:`let action, setAction = React.useState("")

React.fragment [
    Spectrum.ActionGroup [
        ActionGroup.onAction setAction
        ActionGroup.children [
            Spectrum.Item [
                Item.key "add"
                Item.title "Add"
            ]
            Spectrum.Item [
                Item.key "delete"
                Item.title "Delete"
            ]
            Spectrum.Item [
                Item.key "edit"
                Item.title "Edit"
            ]
        ]
    ]
    Html.p $"Action {action}"
]`,description:o(),elements:C(x(()=>{let e;const t=B("");return E(r.exports.createElement(r.exports.Fragment,{},n.createElement(ht,{onAction:t[1],children:[n.createElement(A,{key:"add",title:"Add"}),n.createElement(A,{key:"delete",title:"Delete"}),n.createElement(A,{key:"edit",title:"Edit"})]}),(e=`Action ${t[0]}`,r.exports.createElement("p",{children:[e]}))))}))})}function uc(){return r.exports.createElement(m,{title:"Multiple selection",code:`let selected, setSelected = React.useState([ "list" ])

React.fragment [
    Spectrum.ActionGroup [
        ActionGroup.selectionMode SelectionMode.Multiple
        ActionGroup.selectedKeys selected
        ActionGroup.onSelectionChange(
            function
            | Set keys -> setSelected keys
            | _ -> ()
        )
        ActionGroup.children [
            Spectrum.Item [
                Item.key "grid"
                Item.children [ Spectrum.Text "Grid view" ]
            ]
            Spectrum.Item [
                Item.key "list"
                Item.children [ Spectrum.Text "List view" ]
            ]
            Spectrum.Item [
                Item.key "gallery"
                Item.children [ Spectrum.Text "Gallery view" ]
            ]
        ]
    ]
    Spectrum.Text $"Current selection (controller): %A{selected}"
]`,description:o(),elements:C(x(()=>{let e,t;const l=B(u("list")),i=l[0];return E(r.exports.createElement(r.exports.Fragment,{},n.createElement(ht,me(f([["selectionMode","multiple"],["selectedKeys",Array.from(i)],(e=a=>{a instanceof Ce&&l[1](a)},["onSelectionChange",a=>{const c=a;e(c==="all"?"all":oe(c.values()))}]),["children",[n.createElement(A,{key:"grid",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Grid view"])})])}),n.createElement(A,{key:"list",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["List view"])})])}),n.createElement(A,{key:"gallery",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Gallery view"])})])})]]]))),(t=$n(da("Current selection (controller): %A%P()",[Nt(i)])),n.createElement(y,{children:n.Children.toArray([t])}))))}))})}function mc(){let e,t,l;return r.exports.createElement(m,{title:"With icons",code:`Spectrum.ActionGroup [
    ActionGroup.children [
        Spectrum.Item [
            Item.key "edit2"
            Item.children [
                Spectrum.Icon.Draw []
                Spectrum.Text "Edit"
            ]
        ]
        Spectrum.Item [
            Item.key "copy2"
            Item.children [
                Spectrum.Icon.Copy []
                Spectrum.Text "Copy"
            ]
        ]
        Spectrum.Item [
            Item.key "delete2"
            Item.children [
                Spectrum.Icon.Delete []
                Spectrum.Text "Delete"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(ht,{children:[n.createElement(A,{key:"edit2",children:n.Children.toArray([(e=un,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Edit"])})])}),n.createElement(A,{key:"copy2",children:n.Children.toArray([(t=zn,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Copy"])})])}),n.createElement(A,{key:"delete2",children:n.Children.toArray([(l=mn,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Delete"])})])})]}))})}function dc(){return r.exports.createElement(m,{title:"Using an item template",code:`let items = [
    {| label = "React"; name = "_React" |}
    {| label = "Add"; name = "_Add" |}
    {| label = "Delete"; name = "_Delete" |}
]

Spectrum.ActionGroup [
    ActionGroup.items items
    ActionGroup.isEmphasized true
    ActionGroup.selectionMode SelectionMode.Single
    ActionGroup.onSelectionChange (
        function
        | Set [ item ] -> Browser.Dom.console.log("Selection: ", item)
        | _ -> ()
    )
    ActionGroup.itemTemplate (fun (item: {| label: string; name: string |}) ->
        Spectrum.Item [
            Item.key item.name
            Item.children [ Spectrum.Text item.label ]
        ]
    )
]`,description:o(),elements:C(x(()=>{let e;const t=f([{label:"React",name:"_React"},{label:"Add",name:"_Add"},{label:"Delete",name:"_Delete"}]);return E(n.createElement(ht,me(f([["items",Array.from(t)],["isEmphasized",!0],["selectionMode","single"],(e=l=>{let i,a;switch(l instanceof Ce?v(l)?i=1:v(k(l))?(i=0,a=w(l)):i=1:i=1,i){case 0:{console.log("Selection: ",a);break}}},["onSelectionChange",l=>{const i=l;e(i==="all"?"all":oe(i.values()))}]),["children",l=>n.createElement(A,{key:l.name,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([l.label])})])})]]))))}))})}function pc(){let e,t,l,i,a;return r.exports.createElement(m,{title:"Collapsing buttons",code:`Spectrum.ActionGroup [
    ActionGroup.overflowMode ActionGroupOverflowMode.Collapse
    ActionGroup.maxWidth 250
    ActionGroup.children [
        Spectrum.Item [
            Item.key "edit"
            Item.textValue "Edit"
            Item.children [
                Spectrum.Icon.Draw []
                Spectrum.Text "Edit"
            ]
        ]
        Spectrum.Item [
            Item.key "copy"
            Item.textValue "Copy"
            Item.children [
                Spectrum.Icon.Copy []
                Spectrum.Text "Copy"
            ]
        ]
        Spectrum.Item [
            Item.key "delete"
            Item.textValue "Delete"
            Item.children [
                Spectrum.Icon.Delete []
                Spectrum.Text "Delete"
            ]
        ]
        Spectrum.Item [
            Item.key "move"
            Item.textValue "Move"
            Item.children [
                Spectrum.Icon.Move []
                Spectrum.Text "Move"
            ]
        ]
        Spectrum.Item [
            Item.key "duplicate"
            Item.textValue "Duplicate"
            Item.children [
                Spectrum.Icon.Duplicate []
                Spectrum.Text "Duplicate"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(ht,{overflowMode:"collapse",maxWidth:250,children:[n.createElement(A,{key:"edit",textValue:"Edit",children:n.Children.toArray([(e=un,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Edit"])})])}),n.createElement(A,{key:"copy",textValue:"Copy",children:n.Children.toArray([(t=zn,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Copy"])})])}),n.createElement(A,{key:"delete",textValue:"Delete",children:n.Children.toArray([(l=mn,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Delete"])})])}),n.createElement(A,{key:"move",textValue:"Move",children:n.Children.toArray([(i=Dl,n.createElement(i,{})),n.createElement(y,{children:n.Children.toArray(["Move"])})])}),n.createElement(A,{key:"duplicate",textValue:"Duplicate",children:n.Children.toArray([(a=Vl,n.createElement(a,{})),n.createElement(y,{children:n.Children.toArray(["Duplicate"])})])})]}))})}function hc(){let e,t,l,i,a;return r.exports.createElement(m,{title:"Collapsed with multiple selection",code:`Spectrum.ActionGroup [
    ActionGroup.ariaLabel "Text style"
    ActionGroup.overflowMode ActionGroupOverflowMode.Collapse
    ActionGroup.selectionMode SelectionMode.Multiple
    ActionGroup.isEmphasized true
    ActionGroup.summaryIcon (Spectrum.Icon.TextStyle [])
    ActionGroup.maxWidth 100
    ActionGroup.children [
        Spectrum.Item [
            Item.key "bold"
            Item.textValue "Bold"
            Item.children [
                Spectrum.Icon.TagBold []
                Spectrum.Text "Bold"
            ]
        ]
        Spectrum.Item [
            Item.key "italic"
            Item.textValue "Italic"
            Item.children [
                Spectrum.Icon.TagItalic []
                Spectrum.Text "Italic"
            ]
        ]
        Spectrum.Item [
            Item.key "underline"
            Item.textValue "Underline"
            Item.children [
                Spectrum.Icon.TagUnderline []
                Spectrum.Text "Underline"
            ]
        ]
        Spectrum.Item [
            Item.key "strike"
            Item.textValue "Strikethrough"
            Item.children [
                Spectrum.Icon.TextStrikethrough []
                Spectrum.Text "Strikethrough"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(ht,{["aria-label"]:"Text style",overflowMode:"collapse",selectionMode:"multiple",isEmphasized:!0,summaryIcon:(e=Nl,n.createElement(e,{})),maxWidth:100,children:[n.createElement(A,{key:"bold",textValue:"Bold",children:n.Children.toArray([(t=Ml,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Bold"])})])}),n.createElement(A,{key:"italic",textValue:"Italic",children:n.Children.toArray([(l=Rl,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Italic"])})])}),n.createElement(A,{key:"underline",textValue:"Underline",children:n.Children.toArray([(i=zl,n.createElement(i,{})),n.createElement(y,{children:n.Children.toArray(["Underline"])})])}),n.createElement(A,{key:"strike",textValue:"Strikethrough",children:n.Children.toArray([(a=Pl,n.createElement(a,{})),n.createElement(y,{children:n.Children.toArray(["Strikethrough"])})])})]}))})}function fc(){const e=f(["An ActionGroup is a grouping of ActionButtons that are related to one another.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html"})," for more details."]);return r.exports.createElement(V,{title:"ActionGroup",description:e,examples:f([r.exports.createElement(sc,null),r.exports.createElement(uc,null),r.exports.createElement(mc,null),r.exports.createElement(dc,null),r.exports.createElement(pc,null),r.exports.createElement(hc,null)])})}function gc(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Button [
    Button.variant ButtonVariant.CTA
    Button.content "Save"
]`,description:o(),elements:u(n.createElement(L,{variant:"cta",children:"Save"}))})}function xc(){let e;return r.exports.createElement(m,{title:"Icon + label",code:`Spectrum.Button [
    Button.variant ButtonVariant.Primary
    Button.children [
        Spectrum.Icon.Bell []
        Spectrum.Text "Icon + Label"
    ]
]`,description:o(),elements:u(n.createElement(L,{variant:"primary",children:n.Children.toArray([(e=pr,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Icon + Label"])})])}))})}function Ec(){return r.exports.createElement(m,{title:"Button variants",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.alignItems FlexAlignItems.Center
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.Button [
            Button.variant ButtonVariant.CTA
            Button.content "CTA"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Primary
            Button.content "Primary"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Secondary
            Button.content "Secondary"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Negative
            Button.content "Negative"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Green400)
            View.padding 20
            View.children [
                Spectrum.Button [
                    Button.variant ButtonVariant.OverBackground
                    Button.content "Over background"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"row",alignItems:"center",gap:"size-100",children:n.Children.toArray([n.createElement(L,{variant:"cta",children:"CTA"}),n.createElement(L,{variant:"primary",children:"Primary"}),n.createElement(L,{variant:"secondary",children:"Secondary"}),n.createElement(L,{variant:"negative",children:"Negative"}),n.createElement(R,{backgroundColor:"green-400",padding:20,children:n.Children.toArray([n.createElement(L,{variant:"overBackground",children:"Over background"})])})])}))})}function Sc(){const e=f(["Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Button.html"})," for more details."]);return r.exports.createElement(V,{title:"Button",description:e,examples:f([r.exports.createElement(gc,null),r.exports.createElement(xc,null),r.exports.createElement(Ec,null)])})}function bc(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ButtonGroup [
    Spectrum.Button [
        Button.variant ButtonVariant.Secondary
        Button.content "No, thanks"
    ]
    Spectrum.Button [
        Button.variant ButtonVariant.Secondary
        Button.content "Remind me later"
    ]
    Spectrum.Button [
        Button.variant ButtonVariant.Primary
        Button.content "Rate now"
    ]
]`,description:o(),elements:u(r.exports.createElement(Ie,o(),n.createElement(L,{variant:"secondary",children:"No, thanks"}),n.createElement(L,{variant:"secondary",children:"Remind me later"}),n.createElement(L,{variant:"primary",children:"Rate now"})))})}function yc(){return r.exports.createElement(m,{title:"Orientation",code:`Spectrum.ButtonGroup [
    ButtonGroup.orientation Orientation.Vertical
    ButtonGroup.children [
        Spectrum.Button [
            Button.variant ButtonVariant.Secondary
            Button.content "No, thanks"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Secondary
            Button.content "Remind me later"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Primary
            Button.content "Rate now"
        ]
    ]
]`,description:o(),elements:u(n.createElement(Ie,{orientation:"vertical",children:n.Children.toArray([n.createElement(L,{variant:"secondary",children:"No, thanks"}),n.createElement(L,{variant:"secondary",children:"Remind me later"}),n.createElement(L,{variant:"primary",children:"Rate now"})])}))})}function Cc(){return r.exports.createElement(m,{title:"Alignment",code:`Spectrum.Flex [
    Flex.gap (DimValue.Number 10)
    Flex.direction FlexDirection.Column
    Flex.alignItems FlexAlignItems.Start
    Flex.children [
        Spectrum.Text "align = 'end'"
        Spectrum.ButtonGroup [
            ButtonGroup.orientation Orientation.Vertical
            ButtonGroup.align ButtonGroupAlignment.End
            ButtonGroup.children [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "No, thanks"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "Remind me later"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Primary
                    Button.content "Rate now"
                ]
            ]
        ]
        Spectrum.Text "align = 'center'"
        Spectrum.ButtonGroup [
            ButtonGroup.orientation Orientation.Vertical
            ButtonGroup.align ButtonGroupAlignment.Center
            ButtonGroup.children [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "No, thanks"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "Remind me later"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Primary
                    Button.content "Rate now"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{gap:10,direction:"column",alignItems:"start",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["align = 'end'"])}),n.createElement(Ie,{orientation:"vertical",align:"end",children:n.Children.toArray([n.createElement(L,{variant:"secondary",children:"No, thanks"}),n.createElement(L,{variant:"secondary",children:"Remind me later"}),n.createElement(L,{variant:"primary",children:"Rate now"})])}),n.createElement(y,{children:n.Children.toArray(["align = 'center'"])}),n.createElement(Ie,{orientation:"vertical",align:"center",children:n.Children.toArray([n.createElement(L,{variant:"secondary",children:"No, thanks"}),n.createElement(L,{variant:"secondary",children:"Remind me later"}),n.createElement(L,{variant:"primary",children:"Rate now"})])})])}))})}function Ac(){const e=f(["ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html"})," for more details."]);return r.exports.createElement(V,{title:"ButtonGroup",description:e,examples:f([r.exports.createElement(bc,null),r.exports.createElement(yc,null),r.exports.createElement(Cc,null)])})}function vc(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.And
    LogicButton.children [
        Spectrum.Text "And"
    ]
]`,description:o(),elements:u(n.createElement(Rn,{variant:"and",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["And"])})])}))})}function wc(){return r.exports.createElement(m,{title:"Or variant",code:`Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.Or
    LogicButton.children [
        Spectrum.Text "Or"
    ]
]`,description:o(),elements:u(n.createElement(Rn,{variant:"or",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Or"])})])}))})}function kc(){return r.exports.createElement(m,{title:"Events",code:`let variant, setVariant = React.useState(LogicButtonVariant.Or)

Spectrum.LogicButton [
    LogicButton.variant variant
    LogicButton.onPress (fun _ ->
        let newVariant =
            match variant with
            | LogicButtonVariant.And -> LogicButtonVariant.Or
            | LogicButtonVariant.Or -> LogicButtonVariant.And
        setVariant newVariant
    )
    LogicButton.content (variant.ToString())
]`,description:o(),elements:C(x(()=>{const e=B("or"),t=e[0];return E(n.createElement(Rn,{variant:t,onPress:l=>{e[1](t==="or"?"and":"or")},children:t}))}))})}function Tc(){const e=f(["A LogicButton displays an operator within a boolean logic sequence.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/LogicButton.html"})," for more details."]);return r.exports.createElement(V,{title:"LogicButton",description:e,examples:f([r.exports.createElement(vc,null),r.exports.createElement(wc,null),r.exports.createElement(kc,null)])})}function Fc(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ToggleButton [
    Spectrum.Text "Pin"
]`,description:o(),elements:u(r.exports.createElement(ft,o(),n.createElement(y,{children:n.Children.toArray(["Pin"])})))})}function Ic(){let e;return r.exports.createElement(m,{title:"Using icons",code:`Spectrum.ToggleButton [
    ToggleButton.children [
        Spectrum.Icon.PinOff []
        Spectrum.Text "Pin"
    ]
]`,description:o(),elements:u(n.createElement(ft,{children:n.Children.toArray([(e=dn,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Pin"])})])}))})}function Bc(){return r.exports.createElement(m,{title:"Events",code:`let isSelected, setSelected = React.useState(false)

Spectrum.ToggleButton [
    ToggleButton.isEmphasized true
    ToggleButton.isSelected isSelected
    ToggleButton.onChange setSelected
    ToggleButton.ariaLabel "Pin"
    ToggleButton.children [
        Spectrum.Icon.PinOff []
        Spectrum.Text $"Is selected: {isSelected}"
    ]
]`,description:o(),elements:C(x(()=>{let e,t;const l=B(!1),i=l[0];return E(n.createElement(ft,{isEmphasized:!0,isSelected:i,onChange:a=>{setTimeout(()=>{l[1](a)},0)},["aria-label"]:"Pin",children:n.Children.toArray([(e=dn,n.createElement(e,{})),(t=`Is selected: ${i}`,n.createElement(y,{children:n.Children.toArray([t])}))])}))}))})}function Dc(){let e,t;return r.exports.createElement(m,{title:"Static color",code:`Spectrum.Flex [
    Flex.wrap true
    Flex.gap (DimValue.Size Size250)
    Flex.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color StaticSeafoam700)
            View.padding 20
            View.children [
                Spectrum.ToggleButton [
                    ToggleButton.staticColor StaticColorValue.White
                    ToggleButton.children [
                        Spectrum.Icon.PinOff []
                        Spectrum.Text "Pin"
                    ]
                ]
            ]
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color StaticYellow400)
            View.padding 20
            View.children [
                Spectrum.ToggleButton [
                    ToggleButton.staticColor StaticColorValue.Black
                    ToggleButton.isQuiet true
                    ToggleButton.defaultSelected true
                    ToggleButton.children [
                        Spectrum.Icon.PinOff []
                        Spectrum.Text "Pin"
                    ]
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{wrap:!0,gap:"size-250",children:n.Children.toArray([n.createElement(R,{backgroundColor:"static-seafoam-700",padding:20,children:n.Children.toArray([n.createElement(ft,{staticColor:"white",children:n.Children.toArray([(e=dn,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Pin"])})])})])}),n.createElement(R,{backgroundColor:"static-yellow-400",padding:20,children:n.Children.toArray([n.createElement(ft,{staticColor:"black",isQuiet:!0,defaultSelected:!0,children:n.Children.toArray([(t=dn,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Pin"])})])})])})])}))})}function Vc(){const e=f(["ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ToggleButton.html"})," for more details."]);return r.exports.createElement(V,{title:"ToggleButton",description:e,examples:f([r.exports.createElement(Fc,null),r.exports.createElement(Ic,null),r.exports.createElement(Bc,null),r.exports.createElement(Dc,null)])})}function Nc(){let e;return r.exports.createElement(m,{title:"Using the Provider component",code:`Spectrum.Provider [
    Provider.defaultTheme
    Provider.colorScheme ColorScheme.Light
    Provider.locale "en-US"
    Provider.scale Scale.Medium
    Provider.children [
        Spectrum.ActionButton [
            ActionButton.content "Spectrum button"
        ]
    ]
]`,description:o(),elements:u(n.createElement(Ht,me(f([(e=pn,["theme",e]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["children",n.Children.toArray([n.createElement(N,{children:"Spectrum button"})])]]))))})}function Mc(){let e;const t=u(r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["You can override the default screen breakpoints as follows. Resize the browser window to see the effects."])}));return r.exports.createElement(m,{title:"Provider screen breakpoints",code:`Spectrum.Provider [
    Provider.defaultTheme
    Provider.colorScheme ColorScheme.Light
    Provider.breakpoints(M = 640, L = 1024)
    Provider.children [
        Spectrum.View [
            View.height (DimValue.Size Size2000)
            View.backgroundColor (ResponsiveProp.make(
                base' = (BackgroundColorValue.Color Celery600),
                M = (BackgroundColorValue.Color Blue600),
                L = (BackgroundColorValue.Color Magenta600))
            )
        ]
    ]
]`,description:t,elements:u(n.createElement(Ht,me(f([(e=pn,["theme",e]),["colorScheme","light"],["breakpoints",{L:1024,M:640,S:void 0}],["children",n.Children.toArray([n.createElement(R,{height:"size-2000",backgroundColor:{base:q("celery-600"),S:void 0,M:q("blue-600"),L:q("magenta-600")}})])]]))))})}function Rc(){let e;return r.exports.createElement(m,{title:"Color scheme",code:`Spectrum.Provider [
    Provider.defaultTheme
    Provider.colorScheme ColorScheme.Dark
    Provider.children [
        Spectrum.View [
            View.padding 20
            View.children [
                Spectrum.ActionButton [
                    ActionButton.content "Dark mode!"
                ]
            ]
        ]
    ]
]
`,description:o(),elements:u(n.createElement(Ht,me(f([(e=pn,["theme",e]),["colorScheme","dark"],["children",n.Children.toArray([n.createElement(R,{padding:20,children:n.Children.toArray([n.createElement(N,{children:"Dark mode!"})])})])]]))))})}function zc(){const e=u(r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["You can use a Provider component to define common properties for a group of components within. For example, you can disable multiple components as follows:"])}));return r.exports.createElement(m,{title:"Property groups",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size100)
    Flex.alignItems FlexAlignItems.Start
    Flex.children [
        Spectrum.Provider [
            Provider.isDisabled true
            Provider.children [
                Spectrum.RadioGroup [
                    RadioGroup.label "Favorite animal"
                    RadioGroup.children [
                        Spectrum.Radio [
                            Radio.value "dogs"
                            Radio.content "Dogs"
                        ]
                        Spectrum.Radio [
                            Radio.value "cats"
                            Radio.content "Cats"
                        ]
                        Spectrum.Radio [
                            Radio.value "horses"
                            Radio.content "Horses"
                        ]
                    ]
                ]
                Spectrum.Checkbox [
                    Checkbox.content "I agree"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Primary
                    Button.content "Submit"
                ]
            ]
        ]
    ]
]`,description:e,elements:u(n.createElement(F,{direction:"column",gap:"size-100",alignItems:"start",children:n.Children.toArray([n.createElement(Ht,{isDisabled:!0,children:n.Children.toArray([n.createElement(Qe,{label:"Favorite animal",children:n.Children.toArray([n.createElement(Z,{value:"dogs",children:"Dogs"}),n.createElement(Z,{value:"cats",children:"Cats"}),n.createElement(Z,{value:"horses",children:"Horses"})])}),n.createElement(P,{children:n.Children.toArray(["I agree"])}),n.createElement(L,{variant:"primary",children:"Submit"})])})])}))})}function Pc(){const e=f(["Provider is the container for all React Spectrum applications. It defines the theme, locale, and other application level settings, and can also be used to provide common properties to a group of components.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Provider.html"})," for more details."]);return r.exports.createElement(V,{title:"Provider",description:e,examples:f([r.exports.createElement(Nc,null),r.exports.createElement(Mc,null),r.exports.createElement(Rc,null),r.exports.createElement(zc,null)])})}function Lc(){return r.exports.createElement(m,{title:"Vertical stack",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.width (DimValue.Size Size2000)
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Blue600)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.height (DimValue.Size Size800)
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"column",width:"size-2000",gap:"size-100",children:n.Children.toArray([n.createElement(R,{backgroundColor:"celery-600",height:"size-800"}),n.createElement(R,{backgroundColor:"blue-600",height:"size-800"}),n.createElement(R,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function _c(){return r.exports.createElement(m,{title:"Horizontal stack",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.height (DimValue.Size Size800)
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.width (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Blue600)
            View.width (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.width (DimValue.Size Size800)
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"row",height:"size-800",gap:"size-100",children:n.Children.toArray([n.createElement(R,{backgroundColor:"celery-600",width:"size-800"}),n.createElement(R,{backgroundColor:"blue-600",width:"size-800"}),n.createElement(R,{backgroundColor:"magenta-600",width:"size-800"})])}))})}function Gc(){const e=u(r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["This example shows how you can nest flexboxes to create more complicated layouts. It also uses the flex prop on one of the children to expand it to fill the repaining space."])}));return r.exports.createElement(m,{title:"Nesting",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.Flex [
            Flex.direction FlexDirection.Row
            Flex.height (DimValue.Size Size3000)
            Flex.gap (DimValue.Size Size100)
            Flex.children [
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Indigo600)
                    View.width (DimValue.Size Size2000)
                ]
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Seafoam600)
                    View.flex true
                ]
            ]
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.height (DimValue.Size Size800)
        ]
    ]
]`,description:e,elements:u(n.createElement(F,{direction:"column",gap:"size-100",children:n.Children.toArray([n.createElement(R,{backgroundColor:"celery-600",height:"size-800"}),n.createElement(F,{direction:"row",height:"size-3000",gap:"size-100",children:n.Children.toArray([n.createElement(R,{backgroundColor:"indigo-600",width:"size-2000"}),n.createElement(R,{backgroundColor:"seafoam-600",flex:!0})])}),n.createElement(R,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function Hc(){const e=u(r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["This example shows how to enable wrapping of items into multiple rows. Resize your browser window to see the items reflow."])}));return r.exports.createElement(m,{title:"Wrapping",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size100)
    Flex.wrap true
    Flex.children [
        for color in colors do
            Spectrum.View [
                View.key (unbox<string> color)
                View.backgroundColor (BackgroundColorValue.Color color)
                View.width (DimValue.Size Size800)
                View.height (DimValue.Size Size800)
            ]
    ]
]`,description:e,elements:u(n.createElement(F,{direction:"row",gap:"size-100",wrap:!0,children:n.Children.toArray(Array.from(C(x(()=>rn(t=>n.createElement(R,{key:t,backgroundColor:t,width:"size-800",height:"size-800"}),Al)))))}))})}function Oc(){return r.exports.createElement(m,{title:"Alignment",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size100)
    Flex.alignItems FlexAlignItems.Center
    Flex.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.width (DimValue.Size Size800)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Blue600)
            View.width (DimValue.Size Size2000)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.width (DimValue.Size Size800)
            View.height (DimValue.Size Size800)
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"column",gap:"size-100",alignItems:"center",children:n.Children.toArray([n.createElement(R,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),n.createElement(R,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),n.createElement(R,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])}))})}function Wc(){return r.exports.createElement(m,{title:"Justification",code:`Spectrum.View [
    View.height (DimValue.Size Size3000)
    View.borderWidth BorderSizeValue.Thin
    View.borderColor BorderColorValue.Dark
    View.children [
        Spectrum.Flex [
            Flex.direction FlexDirection.Column
            Flex.gap (DimValue.Size Size100)
            Flex.justifyContent FlexJustifyContent.Center
            Flex.height "100%"
            Flex.children [
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Celery600)
                    View.width (DimValue.Size Size800)
                    View.height (DimValue.Size Size800)
                ]
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Blue600)
                    View.width (DimValue.Size Size2000)
                    View.height (DimValue.Size Size800)
                ]
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Magenta600)
                    View.width (DimValue.Size Size800)
                    View.height (DimValue.Size Size800)
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(R,{height:"size-3000",borderWidth:"thin",borderColor:"dark",children:n.Children.toArray([n.createElement(F,{direction:"column",gap:"size-100",justifyContent:"center",height:"100%",children:n.Children.toArray([n.createElement(R,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),n.createElement(R,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),n.createElement(R,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])})])}))})}function jc(){const e=f(["A layout container using flexbox. Provides Spectrum dimension values, and supports the gap property to define consistent spacing between items.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Flex.html"})," for more details."]);return r.exports.createElement(V,{title:"Flex",description:e,examples:f([r.exports.createElement(Lc,null),r.exports.createElement(_c,null),r.exports.createElement(Gc,null),r.exports.createElement(Hc,null),r.exports.createElement(Oc,null),r.exports.createElement(Wc,null)])})}function qc(){return r.exports.createElement(m,{title:"Explicit grid",code:`Spectrum.Grid [
    Grid.areas [ "header header"; "sidebar content"; "footer footer" ]
    Grid.columns [ "1fr"; "3fr" ]
    Grid.rows [
        DimValue.Size Size1000
        DimValue.String "auto"
        DimValue.Size Size1000
    ]
    Grid.height (DimValue.Size Size6000)
    Grid.width "80%"
    Grid.gap (DimValue.Size Size100)
    Grid.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.gridArea "header"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Blue600)
            View.gridArea "sidebar"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Purple600)
            View.gridArea "content"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.gridArea "footer"
        ]
    ]
]`,description:o(),elements:u(n.createElement(hr,{areas:Nt(f(["header header","sidebar content","footer footer"])),columns:Nt(f(["1fr","3fr"])),rows:Nt(f(["size-1000","auto","size-1000"])),height:"size-6000",width:"80%",gap:"size-100",children:n.Children.toArray([n.createElement(R,{backgroundColor:"celery-600",gridArea:"header"}),n.createElement(R,{backgroundColor:"blue-600",gridArea:"sidebar"}),n.createElement(R,{backgroundColor:"purple-600",gridArea:"content"}),n.createElement(R,{backgroundColor:"magenta-600",gridArea:"footer"})])}))})}function Uc(){let e;return r.exports.createElement(m,{title:"Implicit grid",code:`Spectrum.Grid [
    Grid.height (DimValue.Size Size6000)
    Grid.width "100%"
    Grid.columns (Spectrum.repeat(AutoFit, DimValue.Size Size800))
    Grid.autoRows (DimValue.Size Size800)
    Grid.justifyContent GridJustifyContent.Center
    Grid.gap (DimValue.Size Size200)
    Grid.children [
        for color in colors do
            Spectrum.View [
                View.key (unbox<string> color)
                View.backgroundColor (BackgroundColorValue.Color color)
            ]
    ]
]`,description:o(),elements:u(n.createElement(hr,{height:"size-6000",width:"100%",columns:(e=Ll,e("auto-fit","size-800")),autoRows:"size-800",justifyContent:"center",gap:"size-200",children:n.Children.toArray(Array.from(C(x(()=>rn(t=>n.createElement(R,{key:t,backgroundColor:t}),Al)))))}))})}function Kc(){const e=f(["A layout container using CSS grid. Supports Spectrum dimensions as values to ensure consistent and adaptive sizing and spacing.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Grid.html"})," for more details."]);return r.exports.createElement(V,{title:"Grid",description:e,examples:f([r.exports.createElement(qc,null),r.exports.createElement(Uc,null)])})}function Jc(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Alignment"
    ListBox.children [
        Spectrum.Item "Left"
        Spectrum.Item "Middle"
        Spectrum.Item "Right"
    ]
]`,description:o(),elements:u(n.createElement(Be,{width:"size-2400",["aria-label"]:"Alignment",children:[n.createElement(A,{children:"Left"}),n.createElement(A,{children:"Middle"}),n.createElement(A,{children:"Right"})]}))})}function $c(){return r.exports.createElement(m,{title:"Content example",code:`let options = [
    {| id = 1; name = "Aardvark" |}
    {| id = 2; name = "Cat" |}
    {| id = 3; name = "Dog" |}
    {| id = 4; name = "Kangaroo" |}
    {| id = 5; name = "Koala" |}
    {| id = 6; name = "Penguin" |}
    {| id = 7; name = "Snake" |}
    {| id = 8; name = "Turtle" |}
    {| id = 9; name = "Wombat" |}
]

let animalId, setAnimalId = React.useState<int option>(Option.None)
React.fragment [
    Spectrum.ListBox [
        ListBox.width (DimValue.Size Size2400)
        ListBox.ariaLabel "Animals"
        ListBox.items options
        ListBox.itemTemplate (fun (obj: {| id: int; name: string |}) ->
            Spectrum.Item obj.name
        )
        ListBox.selectionMode SelectionMode.Single
        ListBox.onSelectionChange (fun selection ->
            match selection with
            | [ id ] -> setAnimalId (Some id)
            | _ -> setAnimalId None
        )
    ]
    let text =
        match animalId with
        | Some _ ->  $"Animal id: {animalId}"
        | None -> "None selected"
    Html.p text
]`,description:o(),elements:C(x(()=>{const e=f([{id:1,name:"Aardvark"},{id:2,name:"Cat"},{id:3,name:"Dog"},{id:4,name:"Kangaroo"},{id:5,name:"Koala"},{id:6,name:"Penguin"},{id:7,name:"Snake"},{id:8,name:"Turtle"},{id:9,name:"Wombat"}]),t=B(void 0),l=t[1],i=t[0];return E(r.exports.createElement(r.exports.Fragment,{},...C(x(()=>z(E(n.createElement(Be,{width:"size-2400",["aria-label"]:"Animals",items:Array.from(e),children:a=>n.createElement(A,{children:a.name}),selectionMode:"single",onSelectionChange:a=>{const c=oe(a.values());let s,d;switch(v(c)?s=1:v(k(c))?(s=0,d=w(c)):s=1,s){case 0:{l(d);break}case 1:{l(void 0);break}}}})),x(()=>{const a=i==null?"None selected":`Animal id: ${i}`;return E(r.exports.createElement("p",{children:[a]}))}))))))}))})}function Yc(){return r.exports.createElement(m,{title:"Selection example",code:`let options = [
    {| name = "Koala" |}
    {| name = "Kangaroo" |}
    {| name = "Platypus" |}
    {| name = "Bald Eagle" |}
    {| name = "Bison" |}
    {| name = "Skunk" |}
]

let animal, setAnimal = React.useState(["Bison"])

Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size350)
    Flex.children [
        Spectrum.ListBox [
            ListBox.selectionMode SelectionMode.Multiple
            ListBox.ariaLabel "Pick an animal"
            ListBox.items options
            ListBox.defaultSelectedKeys ["Bison"; "Koala"]
            ListBox.width (DimValue.Size Size2400)
            ListBox.itemTemplate (fun (item: {| name: string |}) ->
                Spectrum.Item [
                    Item.key item.name
                    Item.textValue item.name
                    Item.children [
                        Spectrum.Text item.name
                    ]
                ]
            )
        ]
        Spectrum.ListBox [
            ListBox.selectionMode SelectionMode.Multiple
            ListBox.ariaLabel "Pick an animal"
            ListBox.items options
            ListBox.selectedKeys animal
            ListBox.onSelectionChange setAnimal
            ListBox.width (DimValue.Size Size2400)
            ListBox.itemTemplate (fun (item: {| name: string |}) ->
                Spectrum.Item [
                    Item.key item.name
                    Item.textValue item.name
                    Item.children [
                        Spectrum.Text item.name
                    ]
                ]
            )
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=f([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),t=B(u("Bison"));return E(n.createElement(F,{direction:"row",gap:"size-350",children:n.Children.toArray([n.createElement(Be,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),defaultSelectedKeys:["Bison","Koala"],width:"size-2400",children:l=>n.createElement(A,{key:l.name,textValue:l.name,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([l.name])})])})}),n.createElement(Be,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],onSelectionChange:l=>{t[1](oe(l.values()))},width:"size-2400",children:l=>n.createElement(A,{key:l.name,textValue:l.name,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([l.name])})])})})])}))}))})}function b(e,t){return n.createElement(A,{key:e,textValue:t,children:t})}function Xc(){return r.exports.createElement(m,{title:"Sections",code:`Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Pick your favorite"
    ListBox.selectionMode SelectionMode.Single
    ListBox.children [
        Spectrum.Section [
            Section.title "Animals"
            Section.children [
                makeItem "Aardvark" "Aardvark"
                makeItem "Kangaroo" "Kangaroo"
                makeItem "Snake" "Snake"
            ]
        ]
        Spectrum.Section [
            Section.title "People"
            Section.children [
                makeItem "Danni" "Danni"
                makeItem "Devon" "Devon"
                makeItem "Ross" "Ross"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Be,{width:"size-2400",["aria-label"]:"Pick your favorite",selectionMode:"single",children:[n.createElement(ve,{title:"Animals",children:[b("Aardvark","Aardvark"),b("Kangaroo","Kangaroo"),b("Snake","Snake")]}),n.createElement(ve,{title:"People",children:[b("Danni","Danni"),b("Devon","Devon"),b("Ross","Ross")]})]}))})}function Zc(){return r.exports.createElement(m,{title:"Dynamic items",code:`let options = [
    {| name = "Australian"
        animals = [|
            {| id = 2; name = "Koala" |}
            {| id = 3; name = "Kangaroo" |}
            {| id = 4; name = "Platypus" |} |] |}
    {| name = "American"
        animals = [|
            {| id = 6; name = "Bald Eagle" |}
            {| id = 7; name = "Bison" |}
            {| id = 8; name = "Skunk" |} |] |}
]
let selected, setSelected = React.useState<string list>([])

Spectrum.ListBox [
    ListBox.ariaLabel "Pick an animal"
    ListBox.items options
    ListBox.selectedKeys selected
    ListBox.selectionMode SelectionMode.Single
    ListBox.onSelectionChange setSelected
    ListBox.width (DimValue.Size Size2400)
    ListBox.itemTemplate (fun (item: {| name: string; animals: {| id: int; name: string |} array |} ) ->
        Spectrum.Section [
            Section.key item.name
            Section.title item.name
            Section.items item.animals
            Section.itemTemplate (fun (inner: {| id: int; name: string |}) ->
                Spectrum.Item [
                    Item.key (inner.id.ToString())
                    Item.textValue inner.name
                    Item.children [ Spectrum.Text inner.name ]
                ]
            )
        ]
    )
]`,description:o(),elements:C(x(()=>{const e=f([{animals:[{id:2,name:"Koala"},{id:3,name:"Kangaroo"},{id:4,name:"Platypus"}],name:"Australian"},{animals:[{id:6,name:"Bald Eagle"},{id:7,name:"Bison"},{id:8,name:"Skunk"}],name:"American"}]),t=B(o());return E(n.createElement(Be,{["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],selectionMode:"single",onSelectionChange:l=>{t[1](oe(l.values()))},width:"size-2400",children:l=>n.createElement(ve,{key:l.name,title:l.name,items:Array.from(l.animals),children:i=>{let a;return n.createElement(A,{key:(a=i.id,yr(a)),textValue:i.name,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([i.name])})])})}})}))}))})}function Qc(){return r.exports.createElement(m,{title:"Events",code:`let frequency, setFrequency = React.useState<string list>([])
let makeItem x =
    Spectrum.Item [
        Item.key x
        Item.textValue x
        Item.children [ Spectrum.Text x ]
    ]

React.fragment [
    Spectrum.ListBox [
        ListBox.ariaLabel "Choose frequency"
        ListBox.selectionMode SelectionMode.Single
        ListBox.onSelectionChange setFrequency
        ListBox.width (DimValue.Size Size2400)
        ListBox.children [
            makeItem "Rarely"
            makeItem "Sometimes"
            makeItem "Always"
        ]
    ]
    Html.p $"You selected: {match frequency with | [ value ] -> value | _ -> System.String.Empty}"
]`,description:o(),elements:C(x(()=>{let e;const t=B(o()),l=t[0],i=a=>n.createElement(A,{key:a,textValue:a,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([a])})])});return E(r.exports.createElement(r.exports.Fragment,{},n.createElement(Be,{["aria-label"]:"Choose frequency",selectionMode:"single",onSelectionChange:a=>{t[1](oe(a.values()))},width:"size-2400",children:[i("Rarely"),i("Sometimes"),i("Always")]}),(e=`You selected: ${v(l)?"":v(k(l))?w(l):""}`,r.exports.createElement("p",{children:[e]}))))}))})}function es(){let e,t,l;return r.exports.createElement(m,{title:"Complex items",code:`Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Options"
    ListBox.selectionMode SelectionMode.Single
    ListBox.children [
        Spectrum.Section [
            Section.title "Permissions"
            Section.children [
                Spectrum.Item [
                    Item.textValue "Read"
                    Item.children [
                        Spectrum.Icon.Book [
                            Icon.size IconSize.S
                        ]
                        Spectrum.Text "Read"
                        Spectrum.Text [
                            Text.content "Read only"
                            Text.slot "description"
                        ]
                    ]
                ]
                Spectrum.Item [
                    Item.textValue "Write"
                    Item.children [
                        Spectrum.Icon.Draw [
                            Icon.size IconSize.S
                        ]
                        Spectrum.Text "Write"
                        Spectrum.Text [
                            Text.content "Read and Write Only"
                            Text.slot "description"
                        ]
                    ]
                ]
                Spectrum.Item [
                    Item.textValue "Admin"
                    Item.children [
                        Spectrum.Icon.BulkEditUsers [
                            Icon.size IconSize.S
                        ]
                        Spectrum.Text "Admin"
                        Spectrum.Text [
                            Text.content "Full access"
                            Text.slot "description"
                        ]
                    ]
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Be,{width:"size-2400",["aria-label"]:"Options",selectionMode:"single",children:[n.createElement(ve,{title:"Permissions",children:[n.createElement(A,{textValue:"Read",children:n.Children.toArray([(e=fr,n.createElement(e,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Read"])}),n.createElement(y,{children:n.Children.toArray(["Read only"]),slot:"description"})])}),n.createElement(A,{textValue:"Write",children:n.Children.toArray([(t=un,n.createElement(t,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Write"])}),n.createElement(y,{children:n.Children.toArray(["Read and Write Only"]),slot:"description"})])}),n.createElement(A,{textValue:"Admin",children:n.Children.toArray([(l=_l,n.createElement(l,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Admin"])}),n.createElement(y,{children:n.Children.toArray(["Full access"]),slot:"description"})])})]})]}))})}function ts(){return r.exports.createElement(m,{title:"Disabled keys",code:`Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Pick your favorite"
    ListBox.disabledKeys [ "Snake"; "Ross" ]
    ListBox.selectionMode SelectionMode.Single
    ListBox.children [
        Spectrum.Section [
            Section.title "Animals"
            Section.children [
                makeItem "Aardvark" "Aardvark"
                makeItem "Kangaroo" "Kangaroo"
                makeItem "Snake" "Snake"
            ]
        ]
        Spectrum.Section [
            Section.title "People"
            Section.children [
                makeItem "Danni" "Danni"
                makeItem "Devon" "Devon"
                makeItem "Ross" "Ross"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Be,{width:"size-2400",["aria-label"]:"Pick your favorite",disabledKeys:["Snake","Ross"],selectionMode:"single",children:[n.createElement(ve,{title:"Animals",children:[b("Aardvark","Aardvark"),b("Kangaroo","Kangaroo"),b("Snake","Snake")]}),n.createElement(ve,{title:"People",children:[b("Danni","Danni"),b("Devon","Devon"),b("Ross","Ross")]})]}))})}function ns(){const e=f(["A list of options that can allow selection of one or more.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ListBox.html"})," for more details."]);return r.exports.createElement(V,{title:"ListBox",description:e,examples:f([r.exports.createElement(Jc,null),r.exports.createElement($c,null),r.exports.createElement(Yc,null),r.exports.createElement(Xc,null),r.exports.createElement(Zc,null),r.exports.createElement(Qc,null),r.exports.createElement(es,null),r.exports.createElement(ts,null)])})}function rs(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.MenuTrigger [
    Spectrum.ActionButton [
        ActionButton.content "Edit"
    ]
    Spectrum.Menu [
        Menu.onAction (fun x -> Browser.Dom.window.alert(x))
        Menu.children [
            makeItem "cut" "Cut"
            makeItem "copy" "Copy"
            makeItem "paste" "Paste"
            makeItem "replace" "Replace"
        ]
    ]
]`,description:o(),elements:u(r.exports.createElement(te,o(),n.createElement(N,{children:"Edit"}),n.createElement(ne,{onAction:e=>{window.alert(q(e))},children:[b("cut","Cut"),b("copy","Copy"),b("paste","Paste"),b("replace","Replace")]})))})}function ls(){return r.exports.createElement(m,{title:"Using an item template",code:`let menuItems = [
    {| id = "cut"; name = "Cut" |}
    {| id = "copy"; name = "Copy" |}
    {| id = "Paste"; name = "Paste" |}
    {| id = "replace"; name = "Replace" |}
]

Spectrum.MenuTrigger [
    Spectrum.ActionButton [ Html.text "Edit" ]
    Spectrum.Menu [
        Menu.items menuItems
        Menu.itemTemplate (fun (item: {| id: string; name: string |}) ->
            makeItem item.id item.name
        )
    ]
]`,description:o(),elements:C(x(()=>{const e=f([{id:"cut",name:"Cut"},{id:"copy",name:"Copy"},{id:"Paste",name:"Paste"},{id:"replace",name:"Replace"}]);return E(r.exports.createElement(te,o(),r.exports.createElement(N,o(),"Edit"),n.createElement(ne,{items:Array.from(e),children:t=>b(t.id,t.name)})))}))})}function is(){return r.exports.createElement(m,{title:"Events",code:`let action, setAction = React.useState("")

let makeItem key text =
    Spectrum.Item [
        Item.key key
        Item.textValue text
        Item.children [ Spectrum.Text text ]
    ]

React.fragment [
    Spectrum.MenuTrigger [
        Spectrum.ActionButton [ Html.text "Edit" ]
        Spectrum.Menu [
            Menu.onAction setAction
            Menu.children [
                makeItem "cut" "Cut"
                makeItem "copy" "Copy"
                makeItem "paste" "Paste"
            ]
        ]
    ]
    Html.p $"Action: {action}"
]`,description:o(),elements:C(x(()=>{let e;const t=B(""),l=(i,a)=>n.createElement(A,{key:i,textValue:a,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([a])})])});return E(r.exports.createElement(r.exports.Fragment,{},r.exports.createElement(te,o(),r.exports.createElement(N,o(),"Edit"),n.createElement(ne,{onAction:t[1],children:[l("cut","Cut"),l("copy","Copy"),l("paste","Paste")]})),(e=`Action: ${t[0]}`,r.exports.createElement("p",{children:[e]}))))}))})}function as(){return r.exports.createElement(m,{title:"Selection",code:`let selected, setSelected = React.useState([ "middle" ])

React.fragment [
    Spectrum.MenuTrigger [
        Spectrum.ActionButton [ Html.text "Align" ]
        Spectrum.Menu [
            Menu.selectionMode SelectionMode.Single
            Menu.selectedKeys selected
            Menu.onSelectionChange setSelected
            Menu.children [
                makeItem "left" "Left"
                makeItem "middle" "Middle"
                makeItem "right" "Right"
            ]
        ]
    ]
    match selected with
    | [ selected' ] -> Html.p $"Current selection (controlled): {selected'}"
    | _ -> Html.p $"No selection"
]`,description:o(),elements:C(x(()=>{const e=B(u("middle")),t=e[0];return E(r.exports.createElement(r.exports.Fragment,{},...C(x(()=>z(E(r.exports.createElement(te,o(),r.exports.createElement(N,o(),"Align"),n.createElement(ne,{selectionMode:"single",selectedKeys:t,onSelectionChange:l=>{e[1](oe(l.values()))},children:[b("left","Left"),b("middle","Middle"),b("right","Right")]}))),x(()=>{let l;return v(t)?E(r.exports.createElement("p",{children:["No selection"]})):v(k(t))?E((l=`Current selection (controlled): ${w(t)}`,r.exports.createElement("p",{children:[l]}))):E(r.exports.createElement("p",{children:["No selection"]}))}))))))}))})}function os(){return r.exports.createElement(m,{title:"Selection (multiple)",code:`let selected, setSelected = React.useState([ "Sidebar"; "Console" ])

React.fragment [
    Spectrum.MenuTrigger [
        MenuTrigger.closeOnSelected false
        MenuTrigger.children [
            Spectrum.ActionButton [ Html.text "Show" ]
            Spectrum.Menu [
                Menu.selectionMode SelectionMode.Multiple
                Menu.selectedKeys selected
                Menu.onSelectionChange setSelected
                Menu.children [
                    makeItem "Sidebar" "Sidebar"
                    makeItem "Searchbar" "Searchbar"
                    makeItem "Tools" "Tools"
                    makeItem "Console" "Console"
                ]
            ]
        ]
    ]
    Html.p $"Current selection (controlled): {selected |> Array.ofList}"
]`,description:o(),elements:C(x(()=>{let e;const t=B(f(["Sidebar","Console"])),l=t[0];return E(r.exports.createElement(r.exports.Fragment,{},n.createElement(te,{closeOnSelect:!1,children:[r.exports.createElement(N,o(),"Show"),n.createElement(ne,{selectionMode:"multiple",selectedKeys:l,onSelectionChange:i=>{t[1](oe(i.values()))},children:[b("Sidebar","Sidebar"),b("Searchbar","Searchbar"),b("Tools","Tools"),b("Console","Console")]})]}),(e=`Current selection (controlled): ${Nt(l)}`,r.exports.createElement("p",{children:[e]}))))}))})}function cs(){return r.exports.createElement(m,{title:"Sections",code:`let selected, setSelected = React.useState([ "bold"; "left" ])

Spectrum.MenuTrigger [
    Spectrum.ActionButton [ Html.text "Edit" ]
    Spectrum.Menu [
        Menu.selectionMode SelectionMode.Multiple
        Menu.selectedKeys selected
        Menu.onSelectionChange setSelected
        Menu.children [
            Spectrum.Section [
                Section.title "Styles"
                Section.children [
                    makeItem "bold" "Bold"
                    makeItem "underline" "Underline"
                ]
            ]
            Spectrum.Section [
                Section.title "Align"
                Section.children [
                    makeItem "left" "Left"
                    makeItem "middle" "Middle"
                    makeItem "right" "Right"
                ]
            ]
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B(f(["bold","left"]));return E(r.exports.createElement(te,o(),r.exports.createElement(N,o(),"Edit"),n.createElement(ne,{selectionMode:"multiple",selectedKeys:e[0],onSelectionChange:t=>{e[1](oe(t.values()))},children:[n.createElement(ve,{title:"Styles",children:[b("bold","Bold"),b("underline","Underline")]}),n.createElement(ve,{title:"Align",children:[b("left","Left"),b("middle","Middle"),b("right","Right")]})]})))}))})}function ss(){let e,t,l;return r.exports.createElement(m,{title:"Complex items",code:`Spectrum.MenuTrigger [
    Spectrum.ActionButton [ Html.text "Edit" ]
    Spectrum.Menu [
        Spectrum.Item [
            Item.key "cut"
            Item.textValue "Cut"
            Item.children [
                Spectrum.Icon.Cut [ Icon.size IconSize.S ]
                Spectrum.Text "Cut"
                Spectrum.Keyboard "\u2318X"
            ]
        ]
        Spectrum.Item [
            Item.key "copy"
            Item.textValue "Copy"
            Item.children [
                Spectrum.Icon.Copy [ Icon.size IconSize.S ]
                Spectrum.Text "Copy"
                Spectrum.Keyboard "\u2318C"
            ]
        ]
        Spectrum.Item [
            Item.key "paste"
            Item.textValue "Paste"
            Item.children [
                Spectrum.Icon.Paste [ Icon.size IconSize.S ]
                Spectrum.Text "Paste"
                Spectrum.Keyboard "\u2318V"
            ]
        ]
    ]
]`,description:o(),elements:u(r.exports.createElement(te,o(),r.exports.createElement(N,o(),"Edit"),r.exports.createElement(ne,o(),n.createElement(A,{key:"cut",textValue:"Cut",children:n.Children.toArray([(e=Gl,n.createElement(e,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Cut"])}),n.createElement(hn,{children:n.Children.toArray(["\u2318X"])})])}),n.createElement(A,{key:"copy",textValue:"Copy",children:n.Children.toArray([(t=zn,n.createElement(t,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Copy"])}),n.createElement(hn,{children:n.Children.toArray(["\u2318C"])})])}),n.createElement(A,{key:"paste",textValue:"Paste",children:n.Children.toArray([(l=Hl,n.createElement(l,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Paste"])}),n.createElement(hn,{children:n.Children.toArray(["\u2318V"])})])}))))})}function us(){return r.exports.createElement(m,{title:"Disabled keys",code:`let items = [
    {| name = "tiff"; id = "a1b2c3" |}
    {| name = "png"; id = "g5h1j9" |}
    {| name = "jpg"; id = "p8k3i4" |}
    {| name = "PDF"; id = "j7i3a0" |}
]

Spectrum.MenuTrigger [
    Spectrum.ActionButton [ Html.text "Filter" ]
    Spectrum.Menu [
        Menu.items items
        Menu.disabledKeys [ "a1b2c3"; "p8k3i4" ]
        Menu.itemTemplate (fun (item: {| name: string; id: string |}) ->
            Spectrum.Item item.name
        )
    ]
]`,description:o(),elements:C(x(()=>{const e=f([{id:"a1b2c3",name:"tiff"},{id:"g5h1j9",name:"png"},{id:"p8k3i4",name:"jpg"},{id:"j7i3a0",name:"PDF"}]);return E(r.exports.createElement(te,o(),r.exports.createElement(N,o(),"Filter"),n.createElement(ne,{items:Array.from(e),disabledKeys:["a1b2c3","p8k3i4"],children:t=>n.createElement(A,{children:t.name})})))}))})}function ms(){const e=f(["Menus display a list of actions or options that a user can choose.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Menu.html"})," for more details."]);return r.exports.createElement(V,{title:"Menu",description:e,examples:f([r.exports.createElement(rs,null),r.exports.createElement(ls,null),r.exports.createElement(is,null),r.exports.createElement(as,null),r.exports.createElement(os,null),r.exports.createElement(cs,null),r.exports.createElement(ss,null),r.exports.createElement(us,null)])})}function ds(){return r.exports.createElement(m,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)

Spectrum.Flex [
    Flex.gap (DimValue.Size Size100)
    Flex.alignItems FlexAlignItems.Center
    Flex.children [
        Spectrum.MenuTrigger [
            MenuTrigger.onOpenChange setIsOpen
            MenuTrigger.children [
                Spectrum.ActionButton [ Html.text "Edit" ]
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "cut"
                        Item.textValue "Cut"
                        Item.children [ Spectrum.Text "Cut" ]
                    ]
                    Spectrum.Item [
                        Item.key "copy"
                        Item.textValue "Copy"
                        Item.children [ Spectrum.Text "Copy" ]
                    ]
                    Spectrum.Item [
                        Item.key "paste"
                        Item.textValue "Paste"
                        Item.children [ Spectrum.Text "Paste" ]
                    ]
                ]
            ]
        ]
        Html.div $"Currently open: {isOpen}"
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=B(!1);return E(n.createElement(F,{gap:"size-100",alignItems:"center",children:n.Children.toArray([n.createElement(te,{onOpenChange:t[1],children:[r.exports.createElement(N,o(),"Edit"),r.exports.createElement(ne,o(),n.createElement(A,{key:"cut",textValue:"Cut",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Cut"])})])}),n.createElement(A,{key:"copy",textValue:"Copy",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Copy"])})])}),n.createElement(A,{key:"paste",textValue:"Paste",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Paste"])})])}))]}),(e=`Currently open: ${t[0]}`,r.exports.createElement("div",{children:[e]}))])}))}))})}function ps(){return r.exports.createElement(m,{title:"Alignment and direction",code:`Spectrum.Flex [
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.Start
            MenuTrigger.children [
                Spectrum.ActionButton "Edit"
                Spectrum.Menu [
                    makeItem "cut" "Cut"
                    makeItem "copy" "Copy"
                    makeItem "paste" "Paste"
                ]
            ]
        ]
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.End
            MenuTrigger.direction MenuDirection.Top
            MenuTrigger.shouldFlip false
            MenuTrigger.children [
                Spectrum.ActionButton "View"
                Spectrum.Menu [
                    makeItem "sidebar" "Sidebar"
                    makeItem "options" "Page options"
                    makeItem "edit" "Edit panel"
                ]
            ]
        ]
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.Start
            MenuTrigger.direction MenuDirection.Start
            MenuTrigger.children [
                Spectrum.ActionButton "Edit"
                Spectrum.Menu [
                    makeItem "cut" "Cut"
                    makeItem "copy" "Copy"
                    makeItem "paste" "Paste"
                ]
            ]
        ]
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.End
            MenuTrigger.direction MenuDirection.End
            MenuTrigger.children [
                Spectrum.ActionButton "View"
                Spectrum.Menu [
                    makeItem "sidebar" "Sidebar"
                    makeItem "options" "Page options"
                    makeItem "edit" "Edit panel"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{gap:"size-100",children:n.Children.toArray([n.createElement(te,{align:"start",children:[n.createElement(N,{children:n.Children.toArray(["Edit"])}),r.exports.createElement(ne,o(),b("cut","Cut"),b("copy","Copy"),b("paste","Paste"))]}),n.createElement(te,{align:"end",direction:"top",shouldFlip:!1,children:[n.createElement(N,{children:n.Children.toArray(["View"])}),r.exports.createElement(ne,o(),b("sidebar","Sidebar"),b("options","Page options"),b("edit","Edit panel"))]}),n.createElement(te,{align:"start",direction:"start",children:[n.createElement(N,{children:n.Children.toArray(["Edit"])}),r.exports.createElement(ne,o(),b("cut","Cut"),b("copy","Copy"),b("paste","Paste"))]}),n.createElement(te,{align:"end",direction:"end",children:[n.createElement(N,{children:n.Children.toArray(["View"])}),r.exports.createElement(ne,o(),b("sidebar","Sidebar"),b("options","Page options"),b("edit","Edit panel"))]})])}))})}function hs(){return r.exports.createElement(m,{title:"Open and selection",code:`let isOpen, setIsOpen = React.useState(false)
let selection, setSelection = React.useState([])

Spectrum.MenuTrigger [
    MenuTrigger.isOpen isOpen
    MenuTrigger.onOpenChange setIsOpen
    MenuTrigger.children [
        Spectrum.ActionButton [ Html.text "View" ]
        Spectrum.Menu [
            Menu.selectionMode SelectionMode.Multiple
            Menu.selectedKeys selection
            Menu.onSelectionChange setSelection
            Menu.children [
                Spectrum.Item [
                    Item.key "side"
                    Item.textValue "Sidebar"
                    Item.children [ Spectrum.Text "Sidebar" ]
                ]
                Spectrum.Item [
                    Item.key "options"
                    Item.textValue "Page options"
                    Item.children [ Spectrum.Text "Page options" ]
                ]
                Spectrum.Item [
                    Item.key "edit"
                    Item.textValue "Edit panel"
                    Item.children [ Spectrum.Text "Edit panel" ]
                ]
            ]
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B(!1),t=B(o());return E(n.createElement(te,{isOpen:e[0],onOpenChange:e[1],children:[r.exports.createElement(N,o(),"View"),n.createElement(ne,{selectionMode:"multiple",selectedKeys:t[0],onSelectionChange:l=>{t[1](oe(l.values()))},children:[n.createElement(A,{key:"side",textValue:"Sidebar",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Sidebar"])})])}),n.createElement(A,{key:"options",textValue:"Page options",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Page options"])})])}),n.createElement(A,{key:"edit",textValue:"Edit panel",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Edit panel"])})])})]})]}))}))})}function fs(){const e=f(["The MenuTrigger serves as a wrapper around a Menu and its associated trigger, linking the Menu's open state with the trigger's press state.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html"})," for more details."]);return r.exports.createElement(V,{title:"MenuTrigger",description:e,examples:f([r.exports.createElement(ds,null),r.exports.createElement(ps,null),r.exports.createElement(hs,null)])})}function gs(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.TableView [
    TableView.ariaLabel "Example table with static contents"
    TableView.selectionMode SelectionMode.Multiple
    TableView.children [
        Spectrum.TableHeader [
            Spectrum.Column "Name"
            Spectrum.Column "Type"
            Spectrum.Column [
                Column.align ColumnAlignment.End
                Column.content "Date Modified"
            ]
        ]
        Spectrum.TableBody [
            Spectrum.Row [
                Spectrum.Cell "Games"
                Spectrum.Cell "File folder"
                Spectrum.Cell "6/7/2020"
            ]
            Spectrum.Row [
                Spectrum.Cell "Program Files"
                Spectrum.Cell "File folder"
                Spectrum.Cell "4/7/2021"
            ]
            Spectrum.Row [
                Spectrum.Cell "bootmgr"
                Spectrum.Cell "System file"
                Spectrum.Cell "11/20/2010"
            ]
            Spectrum.Row [
                Spectrum.Cell "log.txt"
                Spectrum.Cell "Text Document"
                Spectrum.Cell "1/18/2016"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Pn,{["aria-label"]:"Example table with static contents",selectionMode:"multiple",children:[r.exports.createElement(Ln,o(),n.createElement(Ot,{children:"Name"}),n.createElement(Ot,{children:"Type"}),n.createElement(Ot,{align:"end",children:["Date Modified"]})),r.exports.createElement(_n,o(),r.exports.createElement(gt,o(),n.createElement(ae,{children:"Games"}),n.createElement(ae,{children:"File folder"}),n.createElement(ae,{children:"6/7/2020"})),r.exports.createElement(gt,o(),n.createElement(ae,{children:"Program Files"}),n.createElement(ae,{children:"File folder"}),n.createElement(ae,{children:"4/7/2021"})),r.exports.createElement(gt,o(),n.createElement(ae,{children:"bootmgr"}),n.createElement(ae,{children:"System file"}),n.createElement(ae,{children:"11/20/2010"})),r.exports.createElement(gt,o(),n.createElement(ae,{children:"log.txt"}),n.createElement(ae,{children:"Text Document"}),n.createElement(ae,{children:"1/18/2016"})))]}))})}function xs(){return r.exports.createElement(m,{title:"More complex example",code:`let columns = [
    {| name = "Name"; uid = "name" |}
    {| name = "Type"; uid = "entryType" |}
    {| name = "Date Modified"; uid = "date" |}
]

let rows = [
    {| id = 1; name = "Games"; date = "6/7/2020"; entryType = "File folder" |}
    {| id = 2; name = "Program Files"; date = "4/7/2021"; entryType = "File folder" |}
    {| id = 3; name = "bootmgr"; date = "11/20/2010"; entryType = "System file" |}
    {| id = 4; name = "log.txt"; date = "1/18/2016"; entryType = "Text Document" |}
]

Spectrum.TableView [
    TableView.ariaLabel "Example table with dynamic content"
    TableView.maxWidth (DimValue.Size Size6000)
    TableView.selectionMode SelectionMode.Multiple
    TableView.disabledKeys [ 3 ]
    TableView.children [
        Spectrum.TableHeader [
            TableHeader.columns columns
            TableHeader.columnTemplate (fun (col: {| name: string; uid: string |}) ->
                Spectrum.Column [
                    Column.key col.uid
                    Column.align (if col.uid = "date" then ColumnAlignment.End else ColumnAlignment.Start)
                    Column.content col.name
                ]
            )
        ]
        Spectrum.TableBody [
            TableBody.items rows
            TableBody.itemTemplate (fun (item: {| id: int; name: string; date: string; entryType: string |}) ->
                Spectrum.Row [
                    Row.cellTemplate (fun columnKey ->
                        let entry: string = item?(columnKey)
                        Spectrum.Cell entry
                    )
                ]
            )
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=f([{name:"Name",uid:"name"},{name:"Type",uid:"entryType"},{name:"Date Modified",uid:"date"}]),t=f([{date:"6/7/2020",entryType:"File folder",id:1,name:"Games"},{date:"4/7/2021",entryType:"File folder",id:2,name:"Program Files"},{date:"11/20/2010",entryType:"System file",id:3,name:"bootmgr"},{date:"1/18/2016",entryType:"Text Document",id:4,name:"log.txt"}]);return E(n.createElement(Pn,{["aria-label"]:"Example table with dynamic content",maxWidth:"size-6000",selectionMode:"multiple",disabledKeys:[3],children:[n.createElement(Ln,{columns:Array.from(e),children:l=>n.createElement(Ot,{key:l.uid,align:l.uid==="date"?"end":"start",children:[l.name]})}),n.createElement(_n,{items:t,children:l=>n.createElement(gt,{children:i=>{const a=l[i];return n.createElement(ae,{children:a})}})})]}))}))})}function Es(){return r.exports.createElement(m,{title:"Layout + highlight selection + action",code:`let columns = [
    {| id = "firstName"; name = "First Name" |}
    {| id = "lastName"; name = "Last Name" |}
    {| id = "city"; name = "City" |}
]

let rows = [
    {| id = 1; firstName = "George"; lastName = "Danila"; city = "Sibiu" |}
    {| id = 2; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 3; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 4; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 5; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 6; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 7; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 8; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 9; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 10; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 11; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 12; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 13; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 14; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 15; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 16; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 17; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 18; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 19; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 20; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 21; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 22; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 23; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 24; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 25; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 26; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 27; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 28; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 29; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 30; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 31; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 32; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 33; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 34; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 35; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 36; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 37; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 38; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 39; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 40; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 41; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 42; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 43; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 44; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 45; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 46; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 47; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 48; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 49; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
]

Spectrum.Flex [
    Flex.height (DimValue.Size Size5000)
    Flex.width "100%"
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size150)
    Flex.children [
        Spectrum.ActionButton [
            ActionButton.alignSelf FlexAlignSelf.Start
            ActionButton.content "Add"
        ]
        Spectrum.TableView [
            TableView.flex true
            TableView.ariaLabel "Example table with dynamic content"
            TableView.selectionMode SelectionMode.Single
            TableView.selectionStyle TableViewSelectionStyle.Highlight
            TableView.onAction (fun x -> Browser.Dom.window.alert(x))
            TableView.children [
                Spectrum.TableHeader [
                    TableHeader.columns columns
                    TableHeader.columnTemplate (fun (col: {| id: string; name: string |} ) ->
                        Spectrum.Column [
                            Column.key col.id
                            Column.content col.name
                        ]
                    )
                ]
                Spectrum.TableBody [
                    TableBody.items rows
                    TableBody.itemTemplate (fun (item: {| firstName: string; lastName: string; city: string |}) ->
                        Spectrum.Row [
                            Row.cellTemplate (fun columnKey ->
                                Spectrum.Cell (item?(columnKey) |> string)
                            )
                        ]
                    )
                ]
            ]
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=f([{id:"firstName",name:"First Name"},{id:"lastName",name:"Last Name"},{id:"city",name:"City"}]),t=f([{city:"Sibiu",firstName:"George",id:1,lastName:"Danila"},{city:"Tilburg",firstName:"Andras",id:2,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:3,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:4,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:5,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:6,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:7,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:8,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:9,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:10,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:11,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:12,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:13,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:14,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:15,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:16,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:17,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:18,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:19,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:20,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:21,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:22,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:23,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:24,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:25,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:26,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:27,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:28,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:29,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:30,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:31,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:32,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:33,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:34,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:35,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:36,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:37,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:38,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:39,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:40,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:41,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:42,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:43,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:44,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:45,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:46,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:47,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:48,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:49,lastName:"Jaram"}]);return E(n.createElement(F,{height:"size-5000",width:"100%",direction:"column",gap:"size-150",children:n.Children.toArray([n.createElement(N,{alignSelf:"start",children:"Add"}),n.createElement(Pn,{flex:!0,["aria-label"]:"Example table with dynamic content",selectionMode:"single",selectionStyle:"highlight",onAction:l=>{window.alert(q(l))},children:[n.createElement(Ln,{columns:Array.from(e),children:l=>n.createElement(Ot,{key:l.id,children:[l.name]})}),n.createElement(_n,{items:t,children:l=>n.createElement(gt,{children:i=>{const a=De(l[i]);return n.createElement(ae,{children:a})}})})]})])}))}))})}function Ss(){const e=f(["Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TableView.html"})," for more details."]);return r.exports.createElement(V,{title:"TableView",description:e,examples:f([r.exports.createElement(gs,null),r.exports.createElement(xs,null),r.exports.createElement(Es,null)])})}function bs(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Checkbox [
    Checkbox.content "Unsubscribe"
]`,description:o(),elements:u(n.createElement(P,{children:n.Children.toArray(["Unsubscribe"])}))})}function ys(){return r.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState(true)
Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.children [
        Spectrum.Checkbox [
            Checkbox.defaultSelected true
            Checkbox.content "Subscribe (uncontrolled)"
        ]
        Spectrum.Checkbox [
            Checkbox.isSelected selected
            Checkbox.onChange setSelected
            Checkbox.content "Subscribe (controlled)"
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B(!0);return E(n.createElement(F,{direction:"row",children:n.Children.toArray([n.createElement(P,{defaultSelected:!0,children:n.Children.toArray(["Subscribe (uncontrolled)"])}),n.createElement(P,{isSelected:e[0],onChange:e[1],children:n.Children.toArray(["Subscribe (controlled)"])})])}))}))})}function Cs(){return r.exports.createElement(m,{title:"Indeterminate",code:`Spectrum.Checkbox [
    Checkbox.isIndeterminate true
    Checkbox.content "Subscribe"
]`,description:o(),elements:u(n.createElement(P,{isIndeterminate:!0,children:n.Children.toArray(["Subscribe"])}))})}function As(){return r.exports.createElement(m,{title:"Events",code:`let selected, setSelected = React.useState(false)
    Spectrum.Flex [
        Flex.direction FlexDirection.Column
        Flex.children [
            Spectrum.Checkbox [
                Checkbox.isSelected selected
                Checkbox.onChange setSelected
                Checkbox.content "Subscribe"
            ]
            Spectrum.View [
                let status = if selected then "subscribed" else "unsubscribed"
                Html.text $"You are {status}"
            ]
        ]
    ]`,description:o(),elements:C(x(()=>{const e=B(!1),t=e[0];return E(n.createElement(F,{direction:"column",children:n.Children.toArray([n.createElement(P,{isSelected:t,onChange:e[1],children:n.Children.toArray(["Subscribe"])}),r.exports.createElement(R,o(),...C(x(()=>E(`You are ${t?"subscribed":"unsubscribed"}`))))])}))}))})}function vs(){return r.exports.createElement(m,{title:"Validation",code:`Spectrum.Checkbox [
        Checkbox.validationState ValidationState.Invalid
        Checkbox.content "I accept the terms and conditions"
    ]`,description:o(),elements:u(n.createElement(P,{validationState:"invalid",children:n.Children.toArray(["I accept the terms and conditions"])}))})}function ws(){const e=f(["Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Checkbox.html"})," for more details."]);return r.exports.createElement(V,{title:"Checkbox",description:e,examples:f([r.exports.createElement(bs,null),r.exports.createElement(ys,null),r.exports.createElement(Cs,null),r.exports.createElement(As,null),r.exports.createElement(vs,null)])})}function ks(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.CheckboxGroup [
    CheckboxGroup.label "Favorite sports"
    CheckboxGroup.children [
        Spectrum.Checkbox [
            Checkbox.value "soccer"
            Checkbox.content "Soccer"
        ]
        Spectrum.Checkbox [
            Checkbox.value "baseball"
            Checkbox.content "Baseball"
        ]
        Spectrum.Checkbox [
            Checkbox.value "basketball"
            Checkbox.content "Basketball"
        ]
    ]
]`,description:o(),elements:u(n.createElement(He,{label:"Favorite sports",children:n.Children.toArray([n.createElement(P,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(P,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(P,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}))})}function Ts(){return r.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState([ "soccer"; "baseball" ])
let joinStr (s: seq<string>) = System.String.Join(", ", s)

Spectrum.Flex [
    Flex.gap (DimValue.Size Size300)
    Flex.children [
        Spectrum.CheckboxGroup [
            CheckboxGroup.label "Favorite sports (uncontrolled)"
            CheckboxGroup.defaultValue [ "soccer"; "baseball" ]
            CheckboxGroup.children [
                Spectrum.Checkbox [
                    Checkbox.value "soccer"
                    Checkbox.content "Soccer"
                ]
                Spectrum.Checkbox [
                    Checkbox.value "baseball"
                    Checkbox.content "Baseball"
                ]
                Spectrum.Checkbox [
                    Checkbox.value "basketball"
                    Checkbox.content "Basketball"
                ]
            ]
        ]
        Spectrum.Flex [
            Flex.direction FlexDirection.Column
            Flex.gap (DimValue.Size Size200)
            Flex.children [
                Spectrum.CheckboxGroup [
                    CheckboxGroup.label "Favorite sports (controlled)"
                    CheckboxGroup.value selected
                    CheckboxGroup.onChange (List.ofSeq >> setSelected)
                    CheckboxGroup.children [
                        Spectrum.Checkbox [
                            Checkbox.value "soccer"
                            Checkbox.content "Soccer"
                        ]
                        Spectrum.Checkbox [
                            Checkbox.value "baseball"
                            Checkbox.content "Baseball"
                        ]
                        Spectrum.Checkbox [
                            Checkbox.value "basketball"
                            Checkbox.content "Basketball"
                        ]
                    ]
                ]
                Html.p $"Selected: {selected |> joinStr}"
            ]
        ]
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=B(f(["soccer","baseball"])),l=t[0];return E(n.createElement(F,{gap:"size-300",children:n.Children.toArray([n.createElement(He,{label:"Favorite sports (uncontrolled)",defaultValue:["soccer","baseball"],children:n.Children.toArray([n.createElement(P,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(P,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(P,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),n.createElement(F,{direction:"column",gap:"size-200",children:n.Children.toArray([n.createElement(He,{label:"Favorite sports (controlled)",value:Array.from(l),onChange:i=>{t[1](oe(i))},children:n.Children.toArray([n.createElement(P,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(P,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(P,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),(e=`Selected: ${wn(", ",l)}`,r.exports.createElement("p",{children:[e]}))])})])}))}))})}function Fs(){return r.exports.createElement(m,{title:"Labeling",code:`Spectrum.Flex [
Flex.gap (DimValue.Size Size300)
Flex.wrap true
Flex.children [
    Spectrum.CheckboxGroup [
        CheckboxGroup.label "Favorite sports"
        CheckboxGroup.children [
            Spectrum.Checkbox [
                Checkbox.value "soccer"
                Checkbox.content "Soccer"
            ]
            Spectrum.Checkbox [
                Checkbox.value "baseball"
                Checkbox.content "Baseball"
            ]
            Spectrum.Checkbox [
                Checkbox.value "basketball"
                Checkbox.content "Basketball"
            ]
        ]
    ]
    Spectrum.CheckboxGroup [
        CheckboxGroup.label "Favorite sports"
        CheckboxGroup.isRequired true
        CheckboxGroup.necessityIndicator NecessityIndicator.Icon
        CheckboxGroup.children [
            Spectrum.Checkbox [
                Checkbox.value "soccer"
                Checkbox.content "Soccer"
            ]
            Spectrum.Checkbox [
                Checkbox.value "baseball"
                Checkbox.content "Baseball"
            ]
            Spectrum.Checkbox [
                Checkbox.value "basketball"
                Checkbox.content "Basketball"
            ]
        ]
    ]
    Spectrum.CheckboxGroup [
        CheckboxGroup.label "Favorite sports"
        CheckboxGroup.isRequired true
        CheckboxGroup.necessityIndicator NecessityIndicator.Label
        CheckboxGroup.children [
            Spectrum.Checkbox [
                Checkbox.value "soccer"
                Checkbox.content "Soccer"
            ]
            Spectrum.Checkbox [
                Checkbox.value "baseball"
                Checkbox.content "Baseball"
            ]
            Spectrum.Checkbox [
                Checkbox.value "basketball"
                Checkbox.content "Basketball"
            ]
        ]
    ]
    Spectrum.CheckboxGroup [
        CheckboxGroup.label "Favorite sports"
        CheckboxGroup.necessityIndicator NecessityIndicator.Label
        CheckboxGroup.children [
            Spectrum.Checkbox [
                Checkbox.value "soccer"
                Checkbox.content "Soccer"
            ]
            Spectrum.Checkbox [
                Checkbox.value "baseball"
                Checkbox.content "Baseball"
            ]
            Spectrum.Checkbox [
                Checkbox.value "basketball"
                Checkbox.content "Basketball"
            ]
        ]
    ]
]
]`,description:o(),elements:u(n.createElement(F,{gap:"size-300",wrap:!0,children:n.Children.toArray([n.createElement(He,{label:"Favorite sports",children:n.Children.toArray([n.createElement(P,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(P,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(P,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),n.createElement(He,{label:"Favorite sports",isRequired:!0,necessityIndicator:"icon",children:n.Children.toArray([n.createElement(P,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(P,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(P,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),n.createElement(He,{label:"Favorite sports",isRequired:!0,necessityIndicator:"label",children:n.Children.toArray([n.createElement(P,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(P,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(P,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),n.createElement(He,{label:"Favorite sports",necessityIndicator:"label",children:n.Children.toArray([n.createElement(P,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(P,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(P,{value:"basketball",children:n.Children.toArray(["Basketball"])})])})])}))})}function Is(){return r.exports.createElement(m,{title:"Validation",code:`let selected, setSelected = React.useState([])
Spectrum.CheckboxGroup [
    CheckboxGroup.label "Sandwich condiments"
    CheckboxGroup.value selected
    CheckboxGroup.onChange (List.ofSeq >> setSelected)
    CheckboxGroup.isRequired true
    if selected.Length = 0 then
        CheckboxGroup.validationState ValidationState.Invalid
    CheckboxGroup.children [
        Spectrum.Checkbox [
            Checkbox.value "lettuce"
            Checkbox.content "Lettuce"
        ]
        Spectrum.Checkbox [
            Checkbox.value "tomato"
            Checkbox.content "Tomato"
        ]
        Spectrum.Checkbox [
            Checkbox.value "onion"
            Checkbox.content "Onion"
        ]
        Spectrum.Checkbox [
            Checkbox.value "sprouts"
            Checkbox.content "Sprouts"
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B(o()),t=e[0];return E(n.createElement(He,me(C(x(()=>z(E(["label","Sandwich condiments"]),x(()=>z(E(["value",Array.from(t)]),x(()=>z(E(["onChange",l=>{e[1](oe(l))}]),x(()=>z(E(["isRequired",!0]),x(()=>z(rl(t)===0?E(["validationState","invalid"]):In(),x(()=>E(["children",n.Children.toArray([n.createElement(P,{value:"lettuce",children:n.Children.toArray(["Lettuce"])}),n.createElement(P,{value:"tomato",children:n.Children.toArray(["Tomato"])}),n.createElement(P,{value:"onion",children:n.Children.toArray(["Onion"])}),n.createElement(P,{value:"sprouts",children:n.Children.toArray(["Sprouts"])})])]))))))))))))))))}))})}function Bs(){const e=f(["A CheckboxGroup allows users to select one or more items from a list of choices.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html"})," for more details."]);return r.exports.createElement(V,{title:"CheckboxGroup",description:e,examples:f([r.exports.createElement(ks,null),r.exports.createElement(Ts,null),r.exports.createElement(Fs,null),r.exports.createElement(Is,null)])})}function Ds(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Form [
    Form.maxWidth (DimValue.Size Size3600)
    Form.children [
        Spectrum.TextField [
            TextField.label "Email"
            TextField.type' TextFieldType.Email
            TextField.placeholder "abc@adobe.com"
        ]
        Spectrum.TextField [
            TextField.label "Password"
            TextField.type' TextFieldType.Password
            TextField.placeholder "1234"
        ]
        Spectrum.Checkbox [
            Checkbox.content "Remember me"
        ]
    ]
]`,description:o(),elements:u(n.createElement(et,{maxWidth:"size-3600",children:n.Children.toArray([n.createElement(_,{label:"Email",type:"email",placeholder:"abc@adobe.com"}),n.createElement(_,{label:"Password",type:"password",placeholder:"1234"}),n.createElement(P,{children:n.Children.toArray(["Remember me"])})])}))})}function Vs(){return r.exports.createElement(m,{title:"Content",code:`Spectrum.Form [
    Form.maxWidth (DimValue.Size Size3600)
    Form.isRequired true
    Form.necessityIndicator NecessityIndicator.Label
    Form.children [
        Spectrum.TextField [
            TextField.label "Name"
            TextField.placeholder "Jane Smith"
        ]
        Spectrum.TextField [
            TextField.label "Email"
            TextField.placeholder "abc@adobe.com"
        ]
        Spectrum.TextField [
            TextField.label "Address"
            TextField.placeholder "123 Any Street"
            TextField.isRequired false
        ]
    ]
]`,description:o(),elements:u(n.createElement(et,{maxWidth:"size-3600",isRequired:!0,necessityIndicator:"label",children:n.Children.toArray([n.createElement(_,{label:"Name",placeholder:"Jane Smith"}),n.createElement(_,{label:"Email",placeholder:"abc@adobe.com"}),n.createElement(_,{label:"Address",placeholder:"123 Any Street",isRequired:!1})])}))})}function Ns(){return r.exports.createElement(m,{title:"Labeling",code:`React.fragment [
    Html.h3 [
        prop.id "label-3"
        prop.children [ Html.text "Personal Information" ]
    ]
    Spectrum.Form [
        Form.maxWidth (DimValue.Size Size3600)
        Form.ariaLabeledBy "label-3"
        Form.children [
            Spectrum.TextField [
                TextField.label "First Name"
                TextField.placeholder "John"
            ]
            Spectrum.TextField [
                TextField.label "Last Name"
                TextField.placeholder "Smith"
            ]
            Spectrum.RadioGroup [
                RadioGroup.label "Favorite pet"
                RadioGroup.children [
                    Spectrum.Radio [
                        Radio.value "dogs"
                        Radio.content "Dogs"
                    ]
                    Spectrum.Radio [
                        Radio.value "cats"
                        Radio.content "Cats"
                    ]
                    Spectrum.Radio [
                        Radio.value "dragons"
                        Radio.content "Dragons"
                    ]
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(r.exports.createElement(r.exports.Fragment,{},r.exports.createElement("h3",{id:"label-3",children:n.Children.toArray(["Personal Information"])}),n.createElement(et,{maxWidth:"size-3600",["aria-labelledby"]:"label-3",children:n.Children.toArray([n.createElement(_,{label:"First Name",placeholder:"John"}),n.createElement(_,{label:"Last Name",placeholder:"Smith"}),n.createElement(Qe,{label:"Favorite pet",children:n.Children.toArray([n.createElement(Z,{value:"dogs",children:"Dogs"}),n.createElement(Z,{value:"cats",children:"Cats"}),n.createElement(Z,{value:"dragons",children:"Dragons"})])})])})))})}function Ms(){return r.exports.createElement(m,{title:"Quiet",code:`Spectrum.Form [
    Form.isQuiet true
    Form.ariaLabel "Quiet example"
    Form.maxWidth (DimValue.Size Size3600)
    Form.children [
        Spectrum.TextField [
            TextField.label "Name"
            TextField.placeholder "John Smith"
        ]
        Spectrum.TextField [
            TextField.label "Address"
            TextField.placeholder "123 Any Street"
        ]
    ]
]`,description:o(),elements:u(n.createElement(et,{isQuiet:!0,["aria-label"]:"Quiet example",maxWidth:"size-3600",children:n.Children.toArray([n.createElement(_,{label:"Name",placeholder:"John Smith"}),n.createElement(_,{label:"Address",placeholder:"123 Any Street"})])}))})}function Rs(){const e=f(["Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Form.html"})," for more details."]);return r.exports.createElement(V,{title:"Form",description:e,examples:f([r.exports.createElement(Ds,null),r.exports.createElement(Vs,null),r.exports.createElement(Ns,null),r.exports.createElement(Ms,null)])})}function zs(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.NumberField [
    NumberField.label "Width"
    NumberField.defaultValue 1024
    NumberField.minValue 0
]`,description:o(),elements:u(n.createElement(se,{label:"Width",defaultValue:1024,minValue:0}))})}function Ps(){return r.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState(15)
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.NumberField [
            NumberField.width "200px"
            NumberField.label "Cookies (uncontrolled)"
            NumberField.defaultValue 15
            NumberField.minValue 0
        ]
        Spectrum.NumberField [
            NumberField.width "200px"
            NumberField.label "Cookies (controlled)"
            NumberField.value value
            NumberField.onChange setValue
            NumberField.minValue 0
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B(15);return E(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(se,{width:"200px",label:"Cookies (uncontrolled)",defaultValue:15,minValue:0}),n.createElement(se,{width:"200px",label:"Cookies (controlled)",value:e[0],onChange:t=>{setTimeout(()=>{e[1](t)},0)},minValue:0})])}))}))})}function Ls(){return r.exports.createElement(m,{title:"Number formatting",code:`Spectrum.NumberField [
    NumberField.label "Adjust exposure"
    NumberField.defaultValue 0
    NumberField.formatOptions <| NumberFormat.make(
        signDisplay = NumberFormatSignDisplay.ExceptZero,
        minimumFractionDigits = 1,
        maximumFractionDigits = 2)
]`,description:o(),elements:u(n.createElement(se,{label:"Adjust exposure",defaultValue:0,formatOptions:{localeMatcher:void 0,style:void 0,currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:"exceptZero",notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:1,maximumFractionDigits:2,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function _s(){return r.exports.createElement(m,{title:"Percentage",code:`Spectrum.NumberField [
    NumberField.label "Sales tax"
    NumberField.defaultValue 0.05
    NumberField.minValue 0
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Percent)
]`,description:o(),elements:u(n.createElement(se,{label:"Sales tax",defaultValue:.05,minValue:0,formatOptions:{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Gs(){return r.exports.createElement(m,{title:"Currency values",code:`Spectrum.NumberField [
    NumberField.label "Transaction amount"
    NumberField.defaultValue 45
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Currency,
        currency = "EUR",
        currencyDisplay = NumberFormatCurrencyDisplay.Symbol,
        currencySign = NumberFormatCurrencySign.Accounting)
]`,description:o(),elements:u(n.createElement(se,{label:"Transaction amount",defaultValue:45,formatOptions:{localeMatcher:void 0,style:"currency",currency:"EUR",currencyDisplay:"symbol",currencySign:"accounting",useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Hs(){return r.exports.createElement(m,{title:"Units",code:`Spectrum.NumberField [
    NumberField.label "Package width"
    NumberField.defaultValue 4
    NumberField.minValue 0
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Unit,
        unit = "inch",
        unitDisplay = NumberFormatUnitDisplay.Long)
]`,description:o(),elements:u(n.createElement(se,{label:"Package width",defaultValue:4,minValue:0,formatOptions:{localeMatcher:void 0,style:"unit",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:"inch",unitDisplay:"long",minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Os(){return r.exports.createElement(m,{title:"Step values",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size150)
    Flex.children [
        Spectrum.NumberField [
            NumberField.label "Step"
            NumberField.step 10
        ]
        Spectrum.NumberField [
            NumberField.label "Step + minValue"
            NumberField.step 3
            NumberField.minValue 2
        ]
        Spectrum.NumberField [
            NumberField.label "Step + minValue + maxValue"
            NumberField.step 3
            NumberField.minValue 2
            NumberField.maxValue 21
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"column",gap:"size-150",children:n.Children.toArray([n.createElement(se,{label:"Step",step:10}),n.createElement(se,{label:"Step + minValue",step:3,minValue:2}),n.createElement(se,{label:"Step + minValue + maxValue",step:3,minValue:2,maxValue:21})])}))})}function Ws(){return r.exports.createElement(m,{title:"Events",code:`let value, setValue = React.useState(0)
Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size150)
    Flex.children [
        Spectrum.NumberField [
            NumberField.onChange setValue
            NumberField.label "Number of cookies to buy"
            NumberField.minValue 0
        ]
        Html.pre $"How many cookies you are ordering: {value}"
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=B(0);return E(n.createElement(F,{direction:"column",gap:"size-150",children:n.Children.toArray([n.createElement(se,{onChange:l=>{setTimeout(()=>{t[1](l)},0)},label:"Number of cookies to buy",minValue:0}),(e=`How many cookies you are ordering: ${t[0]}`,r.exports.createElement("pre",{children:[e]}))])}))}))})}function js(){return r.exports.createElement(m,{title:"Validation",code:`let value, setValue = React.useState(15)
let isValid = React.useMemo ((fun () -> value % 3 = 0 && value % 5 = 0), [| value |])
Spectrum.NumberField [
    NumberField.value value
    NumberField.onChange setValue
    NumberField.label "FizzBuzz values only"
    NumberField.validationState isValid
]`,description:o(),elements:C(x(()=>{const e=B(15),t=e[0]|0,l=ie(()=>t%3==0?t%5==0:!1,[t]);return E(n.createElement(se,me(f([["value",t],["onChange",i=>{setTimeout(()=>{e[1](i)},0)}],["label","FizzBuzz values only"],l?["validationState","valid"]:["validationState","invalid"]]))))}))})}function qs(){return r.exports.createElement(m,{title:"Help text",code:`let value, setValue = React.useState(1)
let checkIfValid () = value > 0 || JS.isNaN(float(value))
let isValid = React.useMemo(checkIfValid, [| value |])
Spectrum.NumberField [
    NumberField.validationState isValid
    NumberField.value value
    NumberField.onChange setValue
    NumberField.label "Positive numbers only"
    NumberField.description "Enter a positive number."
    if value = 0 then NumberField.errorMessage "Is zero positive?"
    else NumberField.errorMessage "Positive numbers are bigger than 0."
]`,description:o(),elements:C(x(()=>{const e=B(1),t=e[0]|0,l=ie(()=>t>0?!0:isNaN(t),[t]);return E(n.createElement(se,me(C(x(()=>z(E(l?["validationState","valid"]:["validationState","invalid"]),x(()=>z(E(["value",t]),x(()=>z(E(["onChange",i=>{setTimeout(()=>{e[1](i)},0)}]),x(()=>z(E(["label","Positive numbers only"]),x(()=>z(E(["description","Enter a positive number."]),x(()=>E(t===0?["errorMessage","Is zero positive?"]:["errorMessage","Positive numbers are bigger than 0."]))))))))))))))))}))})}function Us(){const e=f(["NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/NumberField.html"})," for more details."]);return r.exports.createElement(V,{title:"NumberField",description:e,examples:f([r.exports.createElement(zs,null),r.exports.createElement(Ps,null),r.exports.createElement(Ls,null),r.exports.createElement(_s,null),r.exports.createElement(Gs,null),r.exports.createElement(Hs,null),r.exports.createElement(Os,null),r.exports.createElement(Ws,null),r.exports.createElement(js,null),r.exports.createElement(qs,null)])})}function Ks(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.RadioGroup [
    RadioGroup.label "Favorite pet"
    RadioGroup.children [
        Spectrum.Radio [
            Radio.value "dogs"
            Radio.content "Dogs"
        ]
        Spectrum.Radio [
            Radio.value "cats"
            Radio.content "Cats"
        ]
    ]
]`,description:o(),elements:u(n.createElement(Qe,{label:"Favorite pet",children:n.Children.toArray([n.createElement(Z,{value:"dogs",children:"Dogs"}),n.createElement(Z,{value:"cats",children:"Cats"})])}))})}function Js(){return r.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState("yes")

Spectrum.Flex [
    Flex.gap (DimValue.Size Size300)
    Flex.children [
        Spectrum.RadioGroup [
            RadioGroup.label "Are you a wizard? (uncontrolled)"
            RadioGroup.defaultValue "yes"
            RadioGroup.children [
                Spectrum.Radio [
                    Radio.value "yes"
                    Radio.content "Yes"
                ]
                Spectrum.Radio [
                    Radio.value "no"
                    Radio.content "No"
                ]
            ]
        ]
        Spectrum.RadioGroup [
            RadioGroup.label "Are you a wizard? (controlled)"
            RadioGroup.value selected
            RadioGroup.onChange setSelected
            RadioGroup.children [
                Spectrum.Radio [
                    Radio.value "yes"
                    Radio.content "Yes"
                ]
                Spectrum.Radio [
                    Radio.value "no"
                    Radio.content "No"
                ]
            ]
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B("yes");return E(n.createElement(F,{gap:"size-300",children:n.Children.toArray([n.createElement(Qe,{label:"Are you a wizard? (uncontrolled)",defaultValue:"yes",children:n.Children.toArray([n.createElement(Z,{value:"yes",children:"Yes"}),n.createElement(Z,{value:"no",children:"No"})])}),n.createElement(Qe,{label:"Are you a wizard? (controlled)",value:e[0],onChange:e[1],children:n.Children.toArray([n.createElement(Z,{value:"yes",children:"Yes"}),n.createElement(Z,{value:"no",children:"No"})])})])}))}))})}function $s(){return r.exports.createElement(m,{title:"Events",code:`let selected, setSelected = React.useState("")

React.fragment [
    Spectrum.RadioGroup [
        RadioGroup.label "Favorite avatar"
        RadioGroup.value selected
        RadioGroup.onChange setSelected
        RadioGroup.children [
            Spectrum.Radio [
                Radio.value "wizard"
                Radio.content "Wizard"
            ]
            Spectrum.Radio [
                Radio.value "dragon"
                Radio.content "Dragon"
            ]
        ]
    ]
    Html.div $"You have selected: {selected}"
]`,description:o(),elements:C(x(()=>{let e;const t=B(""),l=t[0];return E(r.exports.createElement(r.exports.Fragment,{},n.createElement(Qe,{label:"Favorite avatar",value:l,onChange:t[1],children:n.Children.toArray([n.createElement(Z,{value:"wizard",children:"Wizard"}),n.createElement(Z,{value:"dragon",children:"Dragon"})])}),(e=`You have selected: ${l}`,r.exports.createElement("div",{children:[e]}))))}))})}function Ys(){return r.exports.createElement(m,{title:"Orientation",code:`Spectrum.RadioGroup [
    RadioGroup.label "Favorite avatar"
    RadioGroup.orientation Orientation.Horizontal
    RadioGroup.children [
        Spectrum.Radio [
            Radio.value "wizard"
            Radio.content "Wizard"
        ]
        Spectrum.Radio [
            Radio.value "dragon"
            Radio.content "Dragon"
        ]
    ]
]`,description:o(),elements:u(n.createElement(Qe,{label:"Favorite avatar",orientation:"horizontal",children:n.Children.toArray([n.createElement(Z,{value:"wizard",children:"Wizard"}),n.createElement(Z,{value:"dragon",children:"Dragon"})])}))})}function Xs(){const e=f(["Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RadioGroup.html"})," for more details."]);return r.exports.createElement(V,{title:"RadioGroup",description:e,examples:f([r.exports.createElement(Ks,null),r.exports.createElement(Js,null),r.exports.createElement($s,null),r.exports.createElement(Ys,null)])})}function Zs(){return r.exports.createElement(m,{title:"Default example",code:`let submittedText, setSubmittedText = React.useState("")
React.fragment [
    Spectrum.SearchField [
        SearchField.label "Search"
        SearchField.placeholder "Enter text"
        SearchField.onSubmit setSubmittedText
    ]
    Html.p $"Submitted text: {submittedText}"
]`,description:o(),elements:C(x(()=>{let e;const t=B("");return E(r.exports.createElement(r.exports.Fragment,{},n.createElement(fn,{label:"Search",placeholder:"Enter text",onSubmit:t[1]}),(e=`Submitted text: ${t[0]}`,r.exports.createElement("p",{children:[e]}))))}))})}function Qs(){return r.exports.createElement(m,{title:"Value",code:`let searchValue, setSearchValue = React.useState("puppies")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size300)
    Flex.children [
        Spectrum.SearchField [
            SearchField.defaultValue "puppies"
            SearchField.label "Search (uncontrolled)"
        ]
        Spectrum.SearchField [
            SearchField.value searchValue
            SearchField.onChange setSearchValue
            SearchField.label "Search (controlled)"
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B("puppies");return E(n.createElement(F,{gap:"size-300",children:n.Children.toArray([n.createElement(fn,{defaultValue:"puppies",label:"Search (uncontrolled)"}),n.createElement(fn,{value:e[0],onChange:e[1],label:"Search (controlled)"})])}))}))})}function eu(){return r.exports.createElement(m,{title:"Properties",code:`let currentText, setCurrentText = React.useState("")
let submittedText, setSubmittedText = React.useState("")
Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.children [
        Spectrum.SearchField [
            SearchField.value currentText
            SearchField.onChange setCurrentText
            SearchField.label "Your text"
            SearchField.placeholder "Enter some text"
            SearchField.onClear (fun () -> setCurrentText "")
            SearchField.onSubmit setSubmittedText
        ]
        Html.pre $"Mirrored text: {currentText}"
        Html.pre $"Submitted text: {submittedText}"
    ]
]`,description:o(),elements:C(x(()=>{let e,t;const l=B(""),i=l[1],a=l[0],c=B("");return E(n.createElement(F,{direction:"column",children:n.Children.toArray([n.createElement(fn,{value:a,onChange:i,label:"Your text",placeholder:"Enter some text",onClear:()=>{i("")},onSubmit:c[1]}),(e=`Mirrored text: ${a}`,r.exports.createElement("pre",{children:[e]})),(t=`Submitted text: ${c[0]}`,r.exports.createElement("pre",{children:[t]}))])}))}))})}function tu(){const e=f(["A SearchField is a text field designed for searches.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/SearchField.html"})," for more details."]);return r.exports.createElement(V,{title:"SearchField",description:e,examples:f([r.exports.createElement(Zs,null),r.exports.createElement(Qs,null),r.exports.createElement(eu,null)])})}function nu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Switch [
    Switch.content "Low power mode"
]`,description:o(),elements:u(n.createElement(xt,{children:"Low power mode"}))})}function ru(){return r.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState(false)
React.fragment [
    Spectrum.Switch [
        Switch.defaultSelected true
        Switch.content "Low power mode (uncontrolled)"
    ]
    Spectrum.Flex [
        Flex.direction FlexDirection.Column
        Flex.gap (DimValue.Size Size100)
        Flex.children [
            Spectrum.Switch [
                Switch.isSelected selected
                Switch.onChange setSelected
                Switch.content "Low power mode (controlled)"
            ]
            Html.div $"The switch is on: {selected}"
        ]
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=B(!1),l=t[0];return E(r.exports.createElement(r.exports.Fragment,{},n.createElement(xt,{defaultSelected:!0,children:"Low power mode (uncontrolled)"}),n.createElement(F,{direction:"column",gap:"size-100",children:n.Children.toArray([n.createElement(xt,{isSelected:l,onChange:t[1],children:"Low power mode (controlled)"}),(e=`The switch is on: ${l}`,r.exports.createElement("div",{children:[e]}))])})))}))})}function lu(){return r.exports.createElement(m,{title:"Disabled",code:`Spectrum.Switch [
    Switch.isDisabled true
    Switch.content "Switch label"
]`,description:o(),elements:u(n.createElement(xt,{isDisabled:!0,children:"Switch label"}))})}function iu(){return r.exports.createElement(m,{title:"Emphasized",code:`Spectrum.Switch [
    Switch.isEmphasized true
    Switch.defaultSelected true
    Switch.content "Switch label"
]`,description:o(),elements:u(n.createElement(xt,{isEmphasized:!0,defaultSelected:!0,children:"Switch label"}))})}function au(){return r.exports.createElement(m,{title:"Read-only",code:`Spectrum.Switch [
    Switch.isReadOnly true
    Switch.defaultSelected true
    Switch.content "Switch label"
]`,description:o(),elements:u(n.createElement(xt,{isReadOnly:!0,defaultSelected:!0,children:"Switch label"}))})}function ou(){const e=f(["Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Switch.html"})," for more details."]);return r.exports.createElement(V,{title:"Switch",description:e,examples:f([r.exports.createElement(nu,null),r.exports.createElement(ru,null),r.exports.createElement(lu,null),r.exports.createElement(iu,null),r.exports.createElement(au,null)])})}function cu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.TextArea [
    TextArea.label "Name"
]`,description:o(),elements:u(n.createElement(re,{label:"Name"}))})}function su(){return r.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState("This is on a wait list")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.TextArea [
            TextArea.label "Notes (uncontrolled)"
            TextArea.defaultValue "This is on a wait list"
        ]
        Spectrum.TextArea [
            TextArea.label "Notes (controlled)"
            TextArea.value value
            TextArea.onChange setValue
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B("This is on a wait list");return E(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(re,{label:"Notes (uncontrolled)",defaultValue:"This is on a wait list"}),n.createElement(re,{label:"Notes (controlled)",value:e[0],onChange:e[1]})])}))}))})}function uu(){return r.exports.createElement(m,{title:"todo",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "abc@gmail.com"
]`,description:o(),elements:u(n.createElement(re,{label:"Email",placeholder:"abc@gmail.com"}))})}function mu(){return r.exports.createElement(m,{title:"todo",code:`Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.TextArea [
            TextArea.label "Street address"
        ]
        Spectrum.TextArea [
            TextArea.label "Street address"
            TextArea.isRequired true
            TextArea.necessityIndicator NecessityIndicator.Icon
        ]
        Spectrum.TextArea [
            TextArea.label "Street address"
            TextArea.isRequired true
            TextArea.necessityIndicator NecessityIndicator.Label
        ]
        Spectrum.TextArea [
            TextArea.label "Street address"
            TextArea.necessityIndicator NecessityIndicator.Label
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(re,{label:"Street address"}),n.createElement(re,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),n.createElement(re,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),n.createElement(re,{label:"Street address",necessityIndicator:"label"})])}))})}function du(){return r.exports.createElement(m,{title:"Events",code:`let text, setText = React.useState("")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.direction FlexDirection.Column
    Flex.children [
        Spectrum.TextArea [
            TextArea.label "Your text"
            TextArea.placeholder "Enter some text..."
            TextArea.onChange setText
        ]
        Html.pre $"Mirrored text: {text}"
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=B("");return E(n.createElement(F,{gap:"size-150",direction:"column",children:n.Children.toArray([n.createElement(re,{label:"Your text",placeholder:"Enter some text...",onChange:t[1]}),(e=`Mirrored text: ${t[0]}`,r.exports.createElement("pre",{children:[e]}))])}))}))})}function pu(){return r.exports.createElement(m,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")
let regex = System.Text.RegularExpressions.Regex("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

Spectrum.TextArea [
    TextArea.validationState isValid
    TextArea.placeholder "Enter your email"
    TextArea.value value
    TextArea.onChange setValue
    TextArea.label "Email"
    TextArea.errorMessage "Invalid email"
]`,description:o(),elements:C(x(()=>{const e=B("me@email.com"),t=e[0],l=ie(()=>vn(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,t),[t]);return E(n.createElement(re,me(f([l?["validationState","valid"]:["validationState","invalid"],["placeholder","Enter your email"],["value",t],["onChange",e[1]],["label","Email"],["errorMessage","Invalid email"]]))))}))})}function hu(){return r.exports.createElement(m,{title:"Quiet",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isQuiet true
]`,description:o(),elements:u(n.createElement(re,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function fu(){return r.exports.createElement(m,{title:"Disabled",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isDisabled true
]`,description:o(),elements:u(n.createElement(re,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function gu(){return r.exports.createElement(m,{title:"Read-only",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isReadOnly true
]`,description:o(),elements:u(n.createElement(re,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function xu(){return r.exports.createElement(m,{title:"Label asignment and position",code:`Spectrum.TextArea [
    TextArea.label "Search"
    TextArea.labelPosition LabelPosition.Side
    TextArea.labelAlign Alignment.End
]`,description:o(),elements:u(n.createElement(re,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function Eu(){return r.exports.createElement(m,{title:"Help text",code:`let value, setValue = React.useState("0")
let regex = System.Text.RegularExpressions.Regex("^\\d$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])
Spectrum.TextArea [
    TextArea.validationState isValid
    TextArea.value value
    TextArea.onChange setValue
    TextArea.label "Favorite number"
    TextArea.maxLength 1
    TextArea.description "Enter a single digit number"
    match value with
    | "" -> TextArea.errorMessage "Empty input not allowed"
    | _ -> TextArea.errorMessage "Single digit numbers are 0-9"
]`,description:o(),elements:C(x(()=>{const e=B("0"),t=e[0],l=ie(()=>vn(/^\d$/g,t),[t]);return E(n.createElement(re,me(C(x(()=>z(E(l?["validationState","valid"]:["validationState","invalid"]),x(()=>z(E(["value",t]),x(()=>z(E(["onChange",e[1]]),x(()=>z(E(["label","Favorite number"]),x(()=>z(E(["maxLength",1]),x(()=>z(E(["description","Enter a single digit number"]),x(()=>E(t===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))))))}))})}function Su(){const e=f(["TextAreas are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextArea.html"})," for more details."]);return r.exports.createElement(V,{title:"TextArea",description:e,examples:f([r.exports.createElement(cu,null),r.exports.createElement(su,null),r.exports.createElement(uu,null),r.exports.createElement(mu,null),r.exports.createElement(du,null),r.exports.createElement(pu,null),r.exports.createElement(hu,null),r.exports.createElement(fu,null),r.exports.createElement(gu,null),r.exports.createElement(xu,null),r.exports.createElement(Eu,null)])})}function bu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.TextField [
    TextField.label "Name"
]`,description:o(),elements:u(n.createElement(_,{label:"Name"}))})}function yu(){return r.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState("me@email.com")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.TextField [
            TextField.label "Email (uncontrolled)"
            TextField.defaultValue "me@email.com"
        ]
        Spectrum.TextField [
            TextField.label "Email (controlled)"
            TextField.defaultValue value
            TextField.onChange setValue
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B("me@email.com");return E(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(_,{label:"Email (uncontrolled)",defaultValue:"me@email.com"}),n.createElement(_,{label:"Email (controlled)",defaultValue:e[0],onChange:e[1]})])}))}))})}function Cu(){return r.exports.createElement(m,{title:"Placeholder",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "abc@gmail.com"
]`,description:o(),elements:u(n.createElement(_,{label:"Email",placeholder:"abc@gmail.com"}))})}function Au(){return r.exports.createElement(m,{title:"Labeling",code:`Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.TextField [
            TextField.label "Street address"
        ]
        Spectrum.TextField [
            TextField.label "Street address"
            TextField.isRequired true
            TextField.necessityIndicator NecessityIndicator.Icon
        ]
        Spectrum.TextField [
            TextField.label "Street address"
            TextField.isRequired true
            TextField.necessityIndicator NecessityIndicator.Label
        ]
        Spectrum.TextField [
            TextField.label "Street address"
            TextField.necessityIndicator NecessityIndicator.Label
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(_,{label:"Street address"}),n.createElement(_,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),n.createElement(_,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),n.createElement(_,{label:"Street address",necessityIndicator:"label"})])}))})}function vu(){return r.exports.createElement(m,{title:"Events",code:`let text, setText = React.useState("")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.direction FlexDirection.Column
    Flex.children [
        Spectrum.TextField [
            TextField.label "Your text"
            TextField.placeholder "Enter some text..."
            TextField.onChange setText
        ]
        Html.pre $"Mirrored text: {text}"
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=B("");return E(n.createElement(F,{gap:"size-150",direction:"column",children:n.Children.toArray([n.createElement(_,{label:"Your text",placeholder:"Enter some text...",onChange:t[1]}),(e=`Mirrored text: ${t[0]}`,r.exports.createElement("pre",{children:[e]}))])}))}))})}function wu(){return r.exports.createElement(m,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")
let regex = System.Text.RegularExpressions.Regex("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

Spectrum.TextField [
    TextField.validationState (if isValid then ValidationState.Valid else ValidationState.Invalid)
    TextField.placeholder "Enter your email"
    TextField.value value
    TextField.onChange setValue
    TextField.label "Email"
    TextField.errorMessage "Invalid email"
]`,description:o(),elements:C(x(()=>{const e=B("me@email.com"),t=e[0],l=ie(()=>vn(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,t),[t]);return E(n.createElement(_,{validationState:l?"valid":"invalid",placeholder:"Enter your email",value:t,onChange:e[1],label:"Email",errorMessage:"Invalid email"}))}))})}function ku(){return r.exports.createElement(m,{title:"Quiet",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isQuiet true
]`,description:o(),elements:u(n.createElement(_,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function Tu(){return r.exports.createElement(m,{title:"Disabled",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isDisabled true
]`,description:o(),elements:u(n.createElement(_,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function Fu(){return r.exports.createElement(m,{title:"Read-only",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isReadOnly true
]`,description:o(),elements:u(n.createElement(_,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function Iu(){return r.exports.createElement(m,{title:"Label alignment and position",code:`Spectrum.TextField [
    TextField.label "Search"
    TextField.labelPosition LabelPosition.Side
    TextField.labelAlign Alignment.End
]`,description:o(),elements:u(n.createElement(_,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function Bu(){return r.exports.createElement(m,{title:"Help text",code:`let value, setValue = React.useState("0")
let regex = System.Text.RegularExpressions.Regex("^\\d$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])
Spectrum.TextField [
    TextField.validationState isValid
    TextField.value value
    TextField.onChange setValue
    TextField.label "Favorite number"
    TextField.maxLength 1
    TextField.description "Enter a single digit number"
    match value with
    | "" -> TextField.errorMessage "Empty input not allowed"
    | _ -> TextField.errorMessage "Single digit numbers are 0-9"
]`,description:o(),elements:C(x(()=>{const e=B("0"),t=e[0],l=ie(()=>vn(/^\d$/g,t),[t]);return E(n.createElement(_,me(C(x(()=>z(E(l?["validationState","valid"]:["validationState","invalid"]),x(()=>z(E(["value",t]),x(()=>z(E(["onChange",e[1]]),x(()=>z(E(["label","Favorite number"]),x(()=>z(E(["maxLength",1]),x(()=>z(E(["description","Enter a single digit number"]),x(()=>E(t===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))))))}))})}function Du(){const e=f(["TextFields are text inputs that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextField.html"})," for more details."]);return r.exports.createElement(V,{title:"TextField",description:e,examples:f([r.exports.createElement(bu,null),r.exports.createElement(yu,null),r.exports.createElement(Cu,null),r.exports.createElement(Au,null),r.exports.createElement(vu,null),r.exports.createElement(wu,null),r.exports.createElement(ku,null),r.exports.createElement(Tu,null),r.exports.createElement(Fu,null),r.exports.createElement(Iu,null),r.exports.createElement(Bu,null)])})}function Vu(){let e,t,l,i,a,c,s;return r.exports.createElement(m,{title:"Icon size",code:`Spectrum.Flex [
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.Icon.Beaker [
            prop.ariaLabel "XXS Beaker"
            Icon.size IconSize.XXS
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "XS Beaker"
            Icon.size IconSize.XS
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "S Beaker"
            Icon.size IconSize.S
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "M Beaker"
            Icon.size IconSize.M
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "L Beaker"
            Icon.size IconSize.L
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "XL Beaker"
            Icon.size IconSize.XL
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "XXL Beaker"
            Icon.size IconSize.XXL
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{gap:"size-100",children:n.Children.toArray([(e=tt,n.createElement(e,{["aria-label"]:"XXS Beaker",size:"XXS"})),(t=tt,n.createElement(t,{["aria-label"]:"XS Beaker",size:"XS"})),(l=tt,n.createElement(l,{["aria-label"]:"S Beaker",size:"S"})),(i=tt,n.createElement(i,{["aria-label"]:"M Beaker",size:"M"})),(a=tt,n.createElement(a,{["aria-label"]:"L Beaker",size:"L"})),(c=tt,n.createElement(c,{["aria-label"]:"XL Beaker",size:"XL"})),(s=tt,n.createElement(s,{["aria-label"]:"XXL Beaker",size:"XXL"}))])}))})}function Nu(){let e,t,l,i,a;return r.exports.createElement(m,{title:"Coloring",code:`Spectrum.Flex [
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.Icon.Alert [
            prop.ariaLabel "Default Alert"
        ]
        Spectrum.Icon.Alert [
            prop.ariaLabel "Negative Alert"
            Icon.color SemanticColor.Negative
        ]
        Spectrum.Icon.Alert [
            prop.ariaLabel "Notification Alert"
            Icon.color SemanticColor.Notice
        ]
        Spectrum.Icon.Alert [
            prop.ariaLabel "Positive Alert"
            Icon.color SemanticColor.Positive
        ]
        Spectrum.Icon.Alert [
            prop.ariaLabel "Informative Alert"
            Icon.color SemanticColor.Informative
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{gap:"size-100",children:n.Children.toArray([(e=Et,n.createElement(e,{["aria-label"]:"Default Alert"})),(t=Et,n.createElement(t,{["aria-label"]:"Negative Alert",color:"negative"})),(l=Et,n.createElement(l,{["aria-label"]:"Notification Alert",color:"notice"})),(i=Et,n.createElement(i,{["aria-label"]:"Positive Alert",color:"positive"})),(a=Et,n.createElement(a,{["aria-label"]:"Informative Alert",color:"informative"}))])}))})}function Mu(){const e=f(["Workflow icons are graphical metaphors or symbols that can be used to compliment existing experiences.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"})," for more details."]);return r.exports.createElement(V,{title:"Workflow Icons",description:e,examples:f([r.exports.createElement(Vu,null),r.exports.createElement(Nu,null)])})}function Ru(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Breadcrumbs [
    makeItem "home" "Home"
    makeItem "trendy" "Trendy"
    makeItem "march 2020 assets" "March 2020 Assets"
]`,description:o(),elements:u(r.exports.createElement(nt,o(),b("home","Home"),b("trendy","Trendy"),b("march 2020 assets","March 2020 Assets")))})}function zu(){return r.exports.createElement(m,{title:"Events",code:`let folders = [
    {| id = 1; label = "Home" |}
    {| id = 2; label = "Trendy" |}
    {| id = 3; label = "March 2020 Assets" |}
]
let folderId, setFolderId = React.useState(JS.undefined<int>)
Html.div [
    Spectrum.Breadcrumbs [
        Breadcrumbs.onAction setFolderId
        Breadcrumbs.children [
            for folder in folders do
                Spectrum.Item [
                    Item.key folder.id
                    Item.content folder.label
                ]
        ]
    ]
    Html.p $"You pressed folder ID: {folderId}"
]`,description:o(),elements:C(x(()=>{let e,t;const l=f([{id:1,label:"Home"},{id:2,label:"Trendy"},{id:3,label:"March 2020 Assets"}]),i=B(void 0);return E((e=f([n.createElement(nt,{onAction:i[1],children:C(x(()=>rn(a=>n.createElement(A,{key:a.id,children:a.label}),l)))}),(t=`You pressed folder ID: ${i[0]}`,r.exports.createElement("p",{children:[t]}))]),r.exports.createElement("div",{children:n.Children.toArray(Array.from(e))})))}))})}function Pu(){return r.exports.createElement(m,{title:"Sizes",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size150)
    Flex.children [
        Spectrum.Breadcrumbs [
            Breadcrumbs.size BreadcrumbsSize.S
            Breadcrumbs.children [
                makeItem "home" "Home"
                makeItem "trendy" "Trendy"
            ]
        ]
        Spectrum.Breadcrumbs [
            Breadcrumbs.size BreadcrumbsSize.M
            Breadcrumbs.children [
                makeItem "home" "Home"
                makeItem "trendy" "Trendy"
            ]
        ]
        Spectrum.Breadcrumbs [
            Breadcrumbs.size BreadcrumbsSize.L
            Breadcrumbs.children [
                makeItem "home" "Home"
                makeItem "trendy" "Trendy"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"column",gap:"size-150",children:n.Children.toArray([n.createElement(nt,{size:"S",children:[b("home","Home"),b("trendy","Trendy")]}),n.createElement(nt,{size:"M",children:[b("home","Home"),b("trendy","Trendy")]}),n.createElement(nt,{size:"L",children:[b("home","Home"),b("trendy","Trendy")]})])}))})}function Lu(){return r.exports.createElement(m,{title:"Multiline",code:`Spectrum.Breadcrumbs [
    Breadcrumbs.isMultiline true
    Breadcrumbs.children [
        makeItem "home" "Home"
        makeItem "trendy" "Trendy"
        makeItem "march 2020 assets" "March 2020 Assets"
    ]
]`,description:o(),elements:u(n.createElement(nt,{isMultiline:!0,children:[b("home","Home"),b("trendy","Trendy"),b("march 2020 assets","March 2020 Assets")]}))})}function _u(){return r.exports.createElement(m,{title:"Root context",code:`Spectrum.View [
    View.overflow Overflow.Hidden
    View.width "200px"
    View.children [
        Spectrum.Breadcrumbs [
            Breadcrumbs.showRoot true
            Breadcrumbs.children [
                makeItem "home" "Home"
                makeItem "trendy" "Trendy"
                makeItem "march 2020 assets" "March 2020 Assets"
                makeItem "winter" "Winter"
                makeItem "holiday" "Holiday"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(R,{overflow:"hidden",width:"200px",children:n.Children.toArray([n.createElement(nt,{showRoot:!0,children:[b("home","Home"),b("trendy","Trendy"),b("march 2020 assets","March 2020 Assets"),b("winter","Winter"),b("holiday","Holiday")]})])}))})}function Gu(){const e=f(["Breadcrumbs show hierarchy and navigational context for a user\u2019s location within an application.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html"})," for more details."]);return r.exports.createElement(V,{title:"Breadcrumbs",description:e,examples:f([r.exports.createElement(Ru,null),r.exports.createElement(zu,null),r.exports.createElement(Pu,null),r.exports.createElement(Lu,null),r.exports.createElement(_u,null)])})}function Hu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Link [
    Html.a [
        prop.href "https://www.imdb.com/title/tt6348138/"
        prop.target.blank
        prop.children [ Html.text "The missing link" ]
    ]
]`,description:o(),elements:u(r.exports.createElement(rt,o(),r.exports.createElement("a",{href:"https://www.imdb.com/title/tt6348138/",target:"_blank",children:n.Children.toArray(["The missing link"])})))})}function Ou(){return r.exports.createElement(m,{title:"Plain-text content",code:`Spectrum.Link [
    Link.onPress <| fun _ -> Browser.Dom.window.alert("Pressed!")
    Link.content "A label"
]`,description:o(),elements:u(n.createElement(rt,{onPress:e=>{window.alert(q("Pressed!"))},children:"A label"}))})}function Wu(){let e,t,l;return r.exports.createElement(m,{title:"Variants",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.children [
        Html.p [
            Html.text "Would you like to "
            Spectrum.Link [
                Link.variant LinkVariant.Primary
                Link.content "learn more"
            ]
            Html.text " about this fine component?"
        ]
        Html.p [
            Html.text "Would you like to "
            Spectrum.Link [
                Link.variant LinkVariant.Secondary
                Link.content "learn more"
            ]
            Html.text " about this fine component?"
        ]
        Html.p [
            Html.text "Would you like to "
            Spectrum.Link [
                Link.variant LinkVariant.Primary
                Link.isQuiet true
                Link.content "learn more"
            ]
            Html.text " about this fine component?"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Positive)
            View.padding (DimValue.Size Size300)
            View.children [
                Spectrum.Link [
                    Link.variant LinkVariant.OverBackground
                    Link.content "learn more"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"column",children:n.Children.toArray([(e=f(["Would you like to ",n.createElement(rt,{variant:"primary",children:"learn more"})," about this fine component?"]),r.exports.createElement("p",{children:n.Children.toArray(Array.from(e))})),(t=f(["Would you like to ",n.createElement(rt,{variant:"secondary",children:"learn more"})," about this fine component?"]),r.exports.createElement("p",{children:n.Children.toArray(Array.from(t))})),(l=f(["Would you like to ",n.createElement(rt,{variant:"primary",isQuiet:!0,children:"learn more"})," about this fine component?"]),r.exports.createElement("p",{children:n.Children.toArray(Array.from(l))})),n.createElement(R,{backgroundColor:"positive",padding:"size-300",children:n.Children.toArray([n.createElement(rt,{variant:"overBackground",children:"learn more"})])})])}))})}function ju(){const e=f(["Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Link.html"})," for more details."]);return r.exports.createElement(V,{title:"Link",description:e,examples:f([r.exports.createElement(Hu,null),r.exports.createElement(Ou,null),r.exports.createElement(Wu,null)])})}function qu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Tabs [
    Tabs.ariaLabel "History of Ancient Rome"
    Tabs.defaultSelectedKey "FoR"
    Tabs.children [
        Spectrum.TabList [
            TabList.children [
                Spectrum.Item [
                    Item.key "FoR"
                    Item.content "Founding of Rome"
                ]
                Spectrum.Item [
                    Item.key "MaR"
                    Item.content "Monarchy and Republic"
                ]
                Spectrum.Item [
                    Item.key "Emp"
                    Item.content "Empire"
                ]
            ]
        ]
        Spectrum.TabPanels [
            TabPanels.children [
                Spectrum.Item [
                    Item.key "FoR"
                    Item.content "Arma virumque cano, Troiae qui primus ab oris."
                ]
                Spectrum.Item [
                    Item.key "MaR"
                    Item.content "Senatus Populusque Romanus."
                ]
                Spectrum.Item [
                    Item.key "Emp"
                    Item.content "Alea jacta est."
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Wt,{["aria-label"]:"History of Ancient Rome",defaultSelectedKey:"FoR",children:n.Children.toArray([n.createElement(jt,{children:[n.createElement(A,{key:"FoR",children:"Founding of Rome"}),n.createElement(A,{key:"MaR",children:"Monarchy and Republic"}),n.createElement(A,{key:"Emp",children:"Empire"})]}),n.createElement(qt,{children:[n.createElement(A,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),n.createElement(A,{key:"MaR",children:"Senatus Populusque Romanus."}),n.createElement(A,{key:"Emp",children:"Alea jacta est."})]})])}))})}function Uu(){return r.exports.createElement(m,{title:"Dynamic content",code:`let tabs = [
    {| id = 1
        name = "Founding of Rome"
        children = "Arma virumque cano, Troiae qui primus ab oris." |}
    {| id = 2
        name = "Monarchy and Republic"
        children = "Senatus Populusque Romanus." |}
    {| id = 3
        name = "Empire"
        children = "Alea jacta est." |}
]
let tabId, setTabId = React.useState(1)

React.fragment [
    Html.p $"Current tab id: {tabId}"
    Spectrum.Tabs [
        Tabs.ariaLabel "History of Ancient Rome"
        Tabs.items tabs
        Tabs.onSelectionChange setTabId
        Tabs.children [
            Spectrum.TabList [
                TabList.itemTemplate (fun item ->
                    let name: string = item?name
                    Spectrum.Item name
                )
            ]
            Spectrum.TabPanels [
                TabPanels.itemTemplate (fun item ->
                    let children: string = item?children
                    Spectrum.Item children
                )
            ]
        ]
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=f([{children:"Arma virumque cano, Troiae qui primus ab oris.",id:1,name:"Founding of Rome"},{children:"Senatus Populusque Romanus.",id:2,name:"Monarchy and Republic"},{children:"Alea jacta est.",id:3,name:"Empire"}]),l=B(1);return E(r.exports.createElement(r.exports.Fragment,{},(e=`Current tab id: ${l[0]}`,r.exports.createElement("p",{children:[e]})),n.createElement(Wt,{["aria-label"]:"History of Ancient Rome",items:Array.from(t),onSelectionChange:l[1],children:n.Children.toArray([n.createElement(jt,{children:i=>{const a=i.name;return n.createElement(A,{children:a})}}),n.createElement(qt,{children:i=>{const a=i.children;return n.createElement(A,{children:a})}})])})))}))})}function Ku(){let e,t,l;return r.exports.createElement(m,{title:"Icons in tabs",code:`Spectrum.Tabs [
    Tabs.ariaLabel "History of Ancient Rome"
    Tabs.children [
        Spectrum.TabList [
            Spectrum.Item [
                Item.key "FoR"
                Item.children [
                    Spectrum.Icon.Bookmark []
                    Spectrum.Text "Founding of Rome"
                ]
            ]
            Spectrum.Item [
                Item.key "MaR"
                Item.children [
                    Spectrum.Icon.Calendar []
                    Spectrum.Text "Monarchy and Republic"
                ]
            ]
            Spectrum.Item [
                Item.key "Emp"
                Item.children [
                    Spectrum.Icon.Dashboard []
                    Spectrum.Text "Empire"
                ]
            ]
        ]
        Spectrum.TabPanels [
            Spectrum.Item [
                Item.key "FoR"
                Item.content "Arma virumque cano, Troiae qui primus ab oris."
            ]
            Spectrum.Item [
                Item.key "MaR"
                Item.content "Senatus Populusque Romanus."
            ]
            Spectrum.Item [
                Item.key "Emp"
                Item.content "Alea jacta est."
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Wt,{["aria-label"]:"History of Ancient Rome",children:n.Children.toArray([r.exports.createElement(jt,o(),n.createElement(A,{key:"FoR",children:n.Children.toArray([(e=Ol,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Founding of Rome"])})])}),n.createElement(A,{key:"MaR",children:n.Children.toArray([(t=Wl,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Monarchy and Republic"])})])}),n.createElement(A,{key:"Emp",children:n.Children.toArray([(l=jl,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Empire"])})])})),r.exports.createElement(qt,o(),n.createElement(A,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),n.createElement(A,{key:"MaR",children:"Senatus Populusque Romanus."}),n.createElement(A,{key:"Emp",children:"Alea jacta est."}))])}))})}function Ju(){return r.exports.createElement(m,{title:"Selection",code:`let tabs = [
    {| id = 1; name = "Keyboard Settings"; children = "No keyboard detected" |}
    {| id = 2; name = "Mouse Settings"; children = "No mouse detected" |}
    {| id = 3; name = "Gamepad Settings"; children = "No gamepad detected" |}
]
let tab, setTab = React.useState(2)

Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Html.span [
            prop.id "label-2"
            prop.children [
                Html.text "Settings (uncontrolled)"
            ]
        ]
        Spectrum.Tabs [
            Tabs.ariaLabeledBy "label-2"
            Tabs.items tabs
            Tabs.defaultSelectedKey 2
            Tabs.marginBottom (DimValue.Size Size400)
            Tabs.children [
                Spectrum.TabList [
                    TabList.itemTemplate (fun item ->
                        let name: string = item?name
                        Spectrum.Item name
                    )
                ]
                Spectrum.TabPanels [
                    TabPanels.itemTemplate (fun item ->
                        let children: string = item?children
                        Spectrum.Item children
                    )
                ]
            ]
        ]
        Html.span [
            prop.id "label-3"
            prop.children [
                Html.text "Settings (controlled)"
            ]
        ]
        Spectrum.Tabs [
            Tabs.ariaLabeledBy "label-3"
            Tabs.items tabs
            Tabs.selectedKey tab
            Tabs.onSelectionChange setTab
            Tabs.children [
                Spectrum.TabList [
                    TabList.itemTemplate (fun item ->
                        let name: string = item?name
                        Spectrum.Item name
                    )
                ]
                Spectrum.TabPanels [
                    TabPanels.itemTemplate (fun item ->
                        let children: string = item?children
                        Spectrum.Item children
                    )
                ]
            ]
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=f([{children:"No keyboard detected",id:1,name:"Keyboard Settings"},{children:"No mouse detected",id:2,name:"Mouse Settings"},{children:"No gamepad detected",id:3,name:"Gamepad Settings"}]),t=B(2);return E(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([r.exports.createElement("span",{id:"label-2",children:n.Children.toArray(["Settings (uncontrolled)"])}),n.createElement(Wt,{["aria-labelledby"]:"label-2",items:Array.from(e),defaultSelectedKey:2,marginBottom:"size-400",children:n.Children.toArray([n.createElement(jt,{children:l=>{const i=l.name;return n.createElement(A,{children:i})}}),n.createElement(qt,{children:l=>{const i=l.children;return n.createElement(A,{children:i})}})])}),r.exports.createElement("span",{id:"label-3",children:n.Children.toArray(["Settings (controlled)"])}),n.createElement(Wt,{["aria-labelledby"]:"label-3",items:Array.from(e),selectedKey:t[0],onSelectionChange:t[1],children:n.Children.toArray([n.createElement(jt,{children:l=>{const i=l.name;return n.createElement(A,{children:i})}}),n.createElement(qt,{children:l=>{const i=l.children;return n.createElement(A,{children:i})}})])})])}))}))})}function $u(){const e=f(["Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tabs.html"})," for more details."]);return r.exports.createElement(V,{title:"Tabs",description:e,examples:f([r.exports.createElement(qu,null),r.exports.createElement(Uu,null),r.exports.createElement(Ku,null),r.exports.createElement(Ju,null)])})}function Yu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Save" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Low disk space!"
        AlertDialog.variant AlertDialogVariant.Warning
        AlertDialog.primaryActionLabel "Confirm"
        AlertDialog.content "You are running low on disk space.\\nDelete unnecessary files to free up space."
    ]
]`,description:o(),elements:u(r.exports.createElement(Q,o(),r.exports.createElement(N,o(),"Save"),n.createElement(St,{title:"Low disk space!",variant:"warning",primaryActionLabel:"Confirm",children:`You are running low on disk space.
Delete unnecessary files to free up space.`})))})}function Xu(){return r.exports.createElement(m,{title:"Content",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Exit" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Register profile"
        AlertDialog.variant AlertDialogVariant.Information
        AlertDialog.primaryActionLabel "Register"
        AlertDialog.secondaryActionLabel "Reminder me later"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.content "You have not saved your profile information \\nfor this account. Would you like to register now?"
    ]
]`,description:o(),elements:u(r.exports.createElement(Q,o(),r.exports.createElement(N,o(),"Exit"),n.createElement(St,{title:"Register profile",variant:"information",primaryActionLabel:"Register",secondaryActionLabel:"Reminder me later",cancelLabel:"Cancel",children:`You have not saved your profile information 
for this account. Would you like to register now?`})))})}function Zu(){return r.exports.createElement(m,{title:"Accessibility",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Save" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Save file"
        AlertDialog.variant AlertDialogVariant.Confirmation
        AlertDialog.primaryActionLabel "Save"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.autoFocusButton AutoFocusButton.Primary
        AlertDialog.content "A file with the same name already exists. Overwrite?"
    ]
]`,description:o(),elements:u(r.exports.createElement(Q,o(),r.exports.createElement(N,o(),"Save"),n.createElement(St,{title:"Save file",variant:"confirmation",primaryActionLabel:"Save",cancelLabel:"Cancel",autoFocusButton:"primary",children:"A file with the same name already exists. Overwrite?"})))})}function Qu(){return r.exports.createElement(m,{title:"Events",code:`let onPrimaryAction () = Browser.Dom.window.alert("Primary button pressed.")
let onSecondaryAction () = Browser.Dom.window.alert("Secondary button pressed.")
let onCancel () = Browser.Dom.window.alert("Cancel button pressed.")
Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Publish" ]
    Spectrum.AlertDialog [
        AlertDialog.variant AlertDialogVariant.Confirmation
        AlertDialog.title "Confirm publish"
        AlertDialog.primaryActionLabel "Publish"
        AlertDialog.secondaryActionLabel "Save as draft"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.onPrimaryAction onPrimaryAction
        AlertDialog.onSecondaryAction onSecondaryAction
        AlertDialog.onCancel onCancel
        AlertDialog.content "Are you sure you want to publish this document?"
    ]
]`,description:o(),elements:C(x(()=>E(r.exports.createElement(Q,o(),r.exports.createElement(N,o(),"Publish"),n.createElement(St,{variant:"confirmation",title:"Confirm publish",primaryActionLabel:"Publish",secondaryActionLabel:"Save as draft",cancelLabel:"Cancel",onPrimaryAction:()=>{window.alert(q("Primary button pressed."))},onSecondaryAction:()=>{window.alert(q("Secondary button pressed."))},onCancel:()=>{window.alert(q("Cancel button pressed."))},children:"Are you sure you want to publish this document?"})))))})}function em(){const e=f(["AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html"})," for more details."]);return r.exports.createElement(V,{title:"AlertDialog",description:e,examples:f([r.exports.createElement(Yu,null),r.exports.createElement(Xu,null),r.exports.createElement(Zu,null),r.exports.createElement(Qu,null)])})}function tm(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton "Check connectivity"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Spectrum.Heading "Internet Speed Test"
            Spectrum.Header "Connection status: Connected"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "Start speed test?"
            ]
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.onPress (fun _ -> close())
                    Button.content "Cancel"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.CTA
                    Button.onPress (fun _ -> close())
                    Button.content "Confirm"
                ]
            ]
        ]
]`,description:o(),elements:u(r.exports.createElement(Q,o(),n.createElement(N,{children:n.Children.toArray(["Check connectivity"])}),e=>r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["Internet Speed Test"])}),n.createElement(Gn,{children:n.Children.toArray(["Connection status: Connected"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),n.createElement(y,{children:n.Children.toArray(["Start speed test?"])})),r.exports.createElement(Ie,o(),n.createElement(L,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),n.createElement(L,{variant:"cta",onPress:t=>{e()},children:"Confirm"})))))})}function nm(){return r.exports.createElement(m,{title:"Content",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton "Publish"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Spectrum.Heading "Publish 3 pages"
            Spectrum.Divider ()
            Spectrum.Content [
                Html.text "Confirm publish"
            ]
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.onPress (fun _ -> close())
                    Button.content "Cancel"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.CTA
                    Button.autoFocus true
                    Button.onPress (fun _ -> close())
                    Button.content "Confirm"
                ]
            ]
        ]
]`,description:o(),elements:u(r.exports.createElement(Q,o(),n.createElement(N,{children:n.Children.toArray(["Publish"])}),e=>r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["Publish 3 pages"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),"Confirm publish"),r.exports.createElement(Ie,o(),n.createElement(L,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),n.createElement(L,{variant:"cta",autoFocus:!0,onPress:t=>{e()},children:"Confirm"})))))})}function rm(){return r.exports.createElement(m,{title:"Dismissable",code:`Spectrum.DialogTrigger [
    DialogTrigger.isDismissable true
    DialogTrigger.children [
        Spectrum.ActionButton "Status"
        Spectrum.Dialog [
            Spectrum.Heading "Status"
            Spectrum.Divider ()
            Spectrum.Content [
                Html.text "Printer Status: Connected"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Q,{isDismissable:!0,children:n.Children.toArray([n.createElement(N,{children:n.Children.toArray(["Status"])}),r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["Status"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),"Printer Status: Connected"))])}))})}function lm(){return r.exports.createElement(m,{title:"Complex UI",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton "Register"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Dialog.size DialogSize.L
            Dialog.children [
                Spectrum.Heading [
                    Spectrum.Flex [
                        Flex.alignItems FlexAlignItems.Center
                        Flex.gap (DimValue.Size Size100)
                        Flex.children [
                            Spectrum.Icon.Book [ Icon.size IconSize.S ]
                            Spectrum.Text "Register for newsletter"
                        ]
                    ]
                ]
                Spectrum.Header [
                    Spectrum.Link [
                        Html.a [
                            prop.href "//example.com"
                            prop.target.blank
                            prop.children [ Html.text "What is this?" ]
                        ]
                    ]
                ]
                Spectrum.Divider ()
                Spectrum.Content [
                    Spectrum.Form [
                        Spectrum.TextField [
                            TextField.label "First Name"
                            TextField.placeholder "John"
                            TextField.autoFocus true
                        ]
                        Spectrum.TextField [
                            TextField.label "Last Name"
                            TextField.placeholder "Smith"
                        ]
                        Spectrum.TextField [
                            TextField.label "Street Address"
                            TextField.placeholder "123 Any Street"
                        ]
                        Spectrum.TextField [
                            TextField.label "City"
                            TextField.placeholder "San Francisco"
                        ]
                    ]
                ]
                Spectrum.Footer [
                    Spectrum.Checkbox [
                        Checkbox.content "I want to receive updates for exclusive offers in my area."
                    ]
                ]
                Spectrum.ButtonGroup [
                    Spectrum.Button [
                        Button.variant ButtonVariant.Secondary
                        Button.onPress (fun _ -> close())
                        Button.content "Cancel"
                    ]
                    Spectrum.Button [
                        Button.variant ButtonVariant.CTA
                        Button.onPress (fun _ -> close())
                        Button.content "Register"
                    ]
                ]
            ]
        ]
]`,description:o(),elements:u(r.exports.createElement(Q,o(),n.createElement(N,{children:n.Children.toArray(["Register"])}),e=>{let t;return n.createElement(ue,{size:"L",children:n.Children.toArray([r.exports.createElement(K,o(),n.createElement(F,{alignItems:"center",gap:"size-100",children:n.Children.toArray([(t=fr,n.createElement(t,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Register for newsletter"])})])})),r.exports.createElement(Gn,o(),r.exports.createElement(rt,o(),r.exports.createElement("a",{href:"//example.com",target:"_blank",children:n.Children.toArray(["What is this?"])}))),r.exports.createElement(U,o()),r.exports.createElement(J,o(),r.exports.createElement(et,o(),n.createElement(_,{label:"First Name",placeholder:"John",autoFocus:!0}),n.createElement(_,{label:"Last Name",placeholder:"Smith"}),n.createElement(_,{label:"Street Address",placeholder:"123 Any Street"}),n.createElement(_,{label:"City",placeholder:"San Francisco"}))),r.exports.createElement(gr,o(),n.createElement(P,{children:n.Children.toArray(["I want to receive updates for exclusive offers in my area."])})),r.exports.createElement(Ie,o(),n.createElement(L,{variant:"secondary",onPress:l=>{e()},children:"Cancel"}),n.createElement(L,{variant:"cta",onPress:l=>{e()},children:"Register"}))])})}))})}function im(){return r.exports.createElement(m,{title:"Hero image",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton "Upload"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Spectrum.Image [
                Image.slot "hero"
                Image.alt ""
                Image.src "https://i.imgur.com/Z7AzH2c.png"
                Image.objectFit ImageObjectFit.Cover
            ]
            Spectrum.Heading "Upload file"
            Spectrum.Divider ()
            Spectrum.Content "Are you sure you want to upload this file?"
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.onPress (fun _ -> close())
                    Button.content "Cancel"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.CTA
                    Button.onPress (fun _ -> close())
                    Button.content "Confirm"
                ]
            ]
        ]
]`,description:o(),elements:u(r.exports.createElement(Q,o(),n.createElement(N,{children:n.Children.toArray(["Upload"])}),e=>r.exports.createElement(ue,o(),n.createElement(xr,{slot:"hero",alt:"",src:"https://i.imgur.com/Z7AzH2c.png",objectFit:"cover"}),n.createElement(K,{children:n.Children.toArray(["Upload file"])}),r.exports.createElement(U,o()),n.createElement(J,{children:n.Children.toArray(["Are you sure you want to upload this file?"])}),r.exports.createElement(Ie,o(),n.createElement(L,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),n.createElement(L,{variant:"cta",onPress:t=>{e()},children:"Confirm"})))))})}function am(){return r.exports.createElement(m,{title:"Events",code:`let alertSave = fun (close) ->
    close()
    Browser.Dom.window.alert("Profile saved!")

let alertCancel = fun (close) ->
    close()
    Browser.Dom.window.alert("Profile not saved!")

Spectrum.DialogTrigger [
    Spectrum.ActionButton "Set Profile"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Spectrum.Heading "Profile"
            Spectrum.Divider ()
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.onPress (fun _ -> alertCancel(close))
                    Button.content "Cancel"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.CTA
                    Button.autoFocus true
                    Button.onPress (fun _ -> alertSave(close))
                    Button.content "Save"
                ]
            ]
            Spectrum.Content [
                Spectrum.Form [
                    Spectrum.TextField [
                        TextField.label "Name"
                    ]
                    Spectrum.Checkbox [
                        Checkbox.content "Make private"
                    ]
                ]
            ]
        ]
]`,description:o(),elements:C(x(()=>E(r.exports.createElement(Q,o(),n.createElement(N,{children:n.Children.toArray(["Set Profile"])}),e=>r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["Profile"])}),r.exports.createElement(U,o()),r.exports.createElement(Ie,o(),n.createElement(L,{variant:"secondary",onPress:t=>{e(),window.alert(q("Profile not saved!"))},children:"Cancel"}),n.createElement(L,{variant:"cta",autoFocus:!0,onPress:t=>{e(),window.alert(q("Profile saved!"))},children:"Save"})),r.exports.createElement(J,o(),r.exports.createElement(et,o(),n.createElement(_,{label:"Name"}),n.createElement(P,{children:n.Children.toArray(["Make private"])}))))))))})}function om(){const e=f(["Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Dialog.html"})," for more details."]);return r.exports.createElement(V,{title:"Dialog",description:e,examples:f([r.exports.createElement(tm,null),r.exports.createElement(nm,null),r.exports.createElement(rm,null),r.exports.createElement(lm,null),r.exports.createElement(im,null),r.exports.createElement(am,null)])})}function cm(){return r.exports.createElement(m,{title:"Default example",code:`let isOpen, setIsOpen = React.useState(false)

React.fragment [
    Spectrum.ActionButton [
        ActionButton.onPress (fun _ -> setIsOpen(true))
        ActionButton.children [
            Spectrum.Icon.Delete []
            Spectrum.Text "Delete"
        ]
    ]
    Spectrum.DialogContainer [
        DialogContainer.onDismiss (fun () -> setIsOpen(false))
        DialogContainer.children [
            if isOpen then
                Spectrum.AlertDialog [
                    AlertDialog.title "Delete"
                    AlertDialog.variant AlertDialogVariant.Destructive
                    AlertDialog.primaryActionLabel "Delete"
                    AlertDialog.content "Are you sure you want to delete this item?"
                ]
        ]
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=B(!1),l=t[1];return E(r.exports.createElement(r.exports.Fragment,{},n.createElement(N,{onPress:i=>{l(!0)},children:n.Children.toArray([(e=mn,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Delete"])})])}),n.createElement(Er,{onDismiss:()=>{l(!1)},children:n.Children.toArray(Array.from(C(x(()=>t[0]?E(n.createElement(St,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"})):In()))))})))}))})}function sm(){const e=ql();return r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["Edit"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),n.createElement(et,{children:n.Children.toArray([n.createElement(_,{autoFocus:!0,label:"First Name",defaultValue:"John"}),n.createElement(_,{label:"Last Name",defaultValue:"Smith"})])})),r.exports.createElement(Ie,o(),n.createElement(L,{variant:"secondary",onPress:t=>{e.dismiss()},children:"Cancel"}),n.createElement(L,{variant:"cta",onPress:t=>{e.dismiss()},children:"Save"})))}function um(){return r.exports.createElement(m,{title:"Dialog triggered by a menu item",code:`let dialog, setDialog = React.useState(JS.undefined<string>)
React.fragment [
    Spectrum.MenuTrigger [
        Spectrum.ActionButton [
            ActionButton.ariaLabel "Actions"
            ActionButton.children [
                Spectrum.Icon.More []
            ]
        ]
        Spectrum.Menu [
            Menu.onAction setDialog
            Menu.children [
                makeItem "edit" "Edit..."
                makeItem "delete" "Delete..."
            ]
        ]
    ]
    Spectrum.DialogContainer [
        DialogContainer.onDismiss (fun () -> setDialog(JS.undefined<string>))
        DialogContainer.type' DialogContainerType.Modal
        DialogContainer.children [
            match dialog with
            | "edit" -> EditDialog ()
            | "delete" ->
                Spectrum.AlertDialog [
                    AlertDialog.title "Delete"
                    AlertDialog.variant AlertDialogVariant.Destructive
                    AlertDialog.primaryActionLabel "Delete"
                    AlertDialog.content "Are you sure you want to delete this item?"
                ]
            | _ -> Html.none
        ]
    ]
]

// EditDialog.fs
[<ReactComponent>]
let EditDialog () =
    let dialog = Spectrum.useDialogContainer()
    Spectrum.Dialog [
        Spectrum.Heading "Edit"
        Spectrum.Divider ()
        Spectrum.Content [
            Spectrum.Form [
                Form.children [
                    Spectrum.TextField [
                        TextField.autoFocus true
                        TextField.label "First Name"
                        TextField.defaultValue "John"
                    ]
                    Spectrum.TextField [
                        TextField.label "Last Name"
                        TextField.defaultValue "Smith"
                    ]
                ]
            ]
        ]
        Spectrum.ButtonGroup [
            Spectrum.Button [
                Button.variant ButtonVariant.Secondary
                Button.onPress (fun _ -> dialog.dismiss())
                Button.content "Cancel"
            ]
            Spectrum.Button [
                Button.variant ButtonVariant.CTA
                Button.onPress (fun _ -> dialog.dismiss())
                Button.content "Save"
            ]
        ]
    ]
`,description:o(),elements:C(x(()=>{let e;const t=B(void 0),l=t[1],i=t[0];return E(r.exports.createElement(r.exports.Fragment,{},r.exports.createElement(te,o(),n.createElement(N,{["aria-label"]:"Actions",children:n.Children.toArray([(e=Ul,n.createElement(e,{}))])}),n.createElement(ne,{onAction:l,children:[b("edit","Edit..."),b("delete","Delete...")]})),n.createElement(Er,{onDismiss:()=>{l(void 0)},type:"modal",children:n.Children.toArray(Array.from(C(x(()=>E(i==="edit"?r.exports.createElement(sm,null):i==="delete"?n.createElement(St,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"}):null)))))})))}))})}function mm(){const e=f(["A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html"})," for more details."]);return r.exports.createElement(V,{title:"DialogContainer",description:e,examples:f([r.exports.createElement(cm,null),r.exports.createElement(um,null)])})}function dm(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.DialogTrigger [
    DialogTrigger.type' DialogTriggerType.Popover
    DialogTrigger.children [
        Spectrum.ActionButton "Disk Status"
        Spectrum.Dialog [
            Spectrum.Heading "C://"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "50% disk space remaining."
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Q,{type:"popover",children:n.Children.toArray([n.createElement(N,{children:n.Children.toArray(["Disk Status"])}),r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["C://"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),n.createElement(y,{children:n.Children.toArray(["50% disk space remaining."])})))])}))})}function pm(){return r.exports.createElement(m,{title:"Tray dialog",code:`Spectrum.DialogTrigger [
    DialogTrigger.type' DialogTriggerType.Tray
    DialogTrigger.children [
        Spectrum.ActionButton "Check messages"
        Spectrum.Dialog [
            Spectrum.Heading "New messages"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "You have 5 new messages."
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Q,{type:"tray",children:n.Children.toArray([n.createElement(N,{children:n.Children.toArray(["Check messages"])}),r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["New messages"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),n.createElement(y,{children:n.Children.toArray(["You have 5 new messages."])})))])}))})}function hm(){return r.exports.createElement(m,{title:"Dialog anchor",code:`let ref = React.useRef<Browser.Types.HTMLElement option>(None)

Spectrum.Flex [
    Flex.gap (DimValue.Size Size1000)
    Flex.children [
        Spectrum.DialogTrigger [
            DialogTrigger.type' DialogTriggerType.Popover
            DialogTrigger.targetRef ref
            DialogTrigger.children [
                Spectrum.ActionButton "Trigger"
                Spectrum.Dialog [
                    Spectrum.Heading "The heading"
                    Spectrum.Divider ()
                    Spectrum.Content [
                        Spectrum.Text "This is a popover anchored to the span"
                    ]
                ]
            ]
        ]
        Html.span [
            prop.ref ref
            prop.style [
                style.width 140
                style.textAlign.center
            ]
            prop.children [
                Html.text "Popover appears over here"
            ]
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=sr(void 0);return E(n.createElement(F,{gap:"size-1000",children:n.Children.toArray([n.createElement(Q,{type:"popover",targetRef:e,children:n.Children.toArray([n.createElement(N,{children:n.Children.toArray(["Trigger"])}),r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["The heading"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),n.createElement(y,{children:n.Children.toArray(["This is a popover anchored to the span"])})))])}),r.exports.createElement("span",{ref:e,style:{width:140,textAlign:"center"},children:n.Children.toArray(["Popover appears over here"])})])}))}))})}function fm(){return r.exports.createElement(m,{title:"Placement",code:`Spectrum.DialogTrigger [
    DialogTrigger.type' DialogTriggerType.Popover
    DialogTrigger.placement Placement.RightTop
    DialogTrigger.children [
        Spectrum.ActionButton "Trigger"
        Spectrum.Dialog [
            Spectrum.Heading "The Heading"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "This is a popover placed to the right of its trigger and offset so the arrow is at the top of the dialog."
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Q,{type:"popover",placement:"right top",children:n.Children.toArray([n.createElement(N,{children:n.Children.toArray(["Trigger"])}),r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["The Heading"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),n.createElement(y,{children:n.Children.toArray(["This is a popover placed to the right of its trigger and offset so the arrow is at the top of the dialog."])})))])}))})}function gm(){return r.exports.createElement(m,{title:"Offset and cross offset",code:`Spectrum.DialogTrigger [
    DialogTrigger.type' DialogTriggerType.Popover
    DialogTrigger.placement Placement.Top
    DialogTrigger.offset 50
    DialogTrigger.children [
        Spectrum.ActionButton "Trigger"
        Spectrum.Dialog [
            Spectrum.Heading "Offset"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "Offset by an additional 50px."
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Q,{type:"popover",placement:"top",offset:50,children:n.Children.toArray([n.createElement(N,{children:n.Children.toArray(["Trigger"])}),r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["Offset"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),n.createElement(y,{children:n.Children.toArray(["Offset by an additional 50px."])})))])}))})}function xm(){return r.exports.createElement(m,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)

Spectrum.Flex [
    Flex.alignItems FlexAlignItems.Center
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.DialogTrigger [
            DialogTrigger.type' DialogTriggerType.Popover
            DialogTrigger.placement Placement.Top
            DialogTrigger.onOpenChange setIsOpen
            DialogTrigger.children [
                Spectrum.ActionButton "Whispers"
                Spectrum.Dialog [
                    Spectrum.Heading "Whispers and DMs"
                    Spectrum.Divider ()
                    Spectrum.Content [
                        Spectrum.Text "You have 0 new messages."
                    ]
                ]
            ]
        ]
        Spectrum.Text $"Current open state: {isOpen}"
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=B(!1);return E(n.createElement(F,{alignItems:"center",gap:"size-100",children:n.Children.toArray([n.createElement(Q,{type:"popover",placement:"top",onOpenChange:t[1],children:n.Children.toArray([n.createElement(N,{children:n.Children.toArray(["Whispers"])}),r.exports.createElement(ue,o(),n.createElement(K,{children:n.Children.toArray(["Whispers and DMs"])}),r.exports.createElement(U,o()),r.exports.createElement(J,o(),n.createElement(y,{children:n.Children.toArray(["You have 0 new messages."])})))])}),(e=`Current open state: ${t[0]}`,n.createElement(y,{children:n.Children.toArray([e])}))])}))}))})}function Em(){const e=f(["DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html"})," for more details."]);return r.exports.createElement(V,{title:"DialogTrigger",description:e,examples:f([r.exports.createElement(dm,null),r.exports.createElement(pm,null),r.exports.createElement(hm,null),r.exports.createElement(fm,null),r.exports.createElement(gm,null),r.exports.createElement(xm,null)])})}function Sm(){let e;return r.exports.createElement(m,{title:"Default example",code:`Spectrum.TooltipTrigger [
    TooltipTrigger.delay 0
    TooltipTrigger.children [
        Spectrum.ActionButton [
            ActionButton.ariaLabel "Edit Name"
            ActionButton.children [
                Spectrum.Icon.Edit []
            ]
        ]
        Spectrum.Tooltip [
            Tooltip.content "Change Name"
        ]
    ]
]`,description:o(),elements:u(n.createElement(Oe,{delay:0,children:n.Children.toArray([n.createElement(N,{["aria-label"]:"Edit Name",children:n.Children.toArray([(e=dr,n.createElement(e,{}))])}),n.createElement(We,{children:"Change Name"})])}))})}function bm(){return r.exports.createElement(m,{title:"Warmup / Cooldown",code:`Spectrum.Flex [
    Flex.gap (DimValue.Size Size200)
    Flex.children [
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton "Hover me"
            Spectrum.Tooltip "I come up after a delay."
        ]
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton "Then hover me"
            Spectrum.Tooltip "If you did it quickly, I appear immediately."
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{gap:"size-200",children:n.Children.toArray([r.exports.createElement(Oe,o(),n.createElement(N,{children:n.Children.toArray(["Hover me"])}),n.createElement(We,{children:"I come up after a delay."})),r.exports.createElement(Oe,o(),n.createElement(N,{children:n.Children.toArray(["Then hover me"])}),n.createElement(We,{children:"If you did it quickly, I appear immediately."}))])}))})}function ym(){return r.exports.createElement(m,{title:"Tooltip placement",code:`Spectrum.TooltipTrigger [
    TooltipTrigger.placement TooltipPlacement.End
    TooltipTrigger.children [
        Spectrum.ActionButton [
            ActionButton.ariaLabel "Foo"
            ActionButton.content "Placement"
        ]
        Spectrum.Tooltip "In left-to-right, this is on the right. In right-to-left, this is on the left."
    ]
]`,description:o(),elements:u(n.createElement(Oe,{placement:"end",children:n.Children.toArray([n.createElement(N,{["aria-label"]:"Foo",children:"Placement"}),n.createElement(We,{children:"In left-to-right, this is on the right. In right-to-left, this is on the left."})])}))})}function Cm(){return r.exports.createElement(m,{title:"Offset and cross offset",code:`Spectrum.TooltipTrigger [
    TooltipTrigger.offset 50
    TooltipTrigger.children [
        Spectrum.ActionButton "Offset"
        Spectrum.Tooltip "This will shift up..."
    ]
]`,description:o(),elements:u(n.createElement(Oe,{offset:50,children:n.Children.toArray([n.createElement(N,{children:n.Children.toArray(["Offset"])}),n.createElement(We,{children:"This will shift up..."})])}))})}function Am(){let e,t,l;return r.exports.createElement(m,{title:"Visual variants",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton [
                ActionButton.ariaLabel "Approve"
                ActionButton.children [
                    Spectrum.Icon.ThumbUp []
                ]
            ]
            Spectrum.Tooltip [
                Tooltip.variant TooltipVariant.Positive
                Tooltip.showIcon true
                Tooltip.content "Approve workflow"
            ]
        ]
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton [
                ActionButton.ariaLabel "Information"
                ActionButton.children [
                    Spectrum.Icon.Question []
                ]
            ]
            Spectrum.Tooltip [
                Tooltip.variant TooltipVariant.Info
                Tooltip.showIcon true
                Tooltip.content "Show the more information menu"
            ]
        ]
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton [
                ActionButton.ariaLabel "Danger"
                ActionButton.children [
                    Spectrum.Icon.Delete []
                ]
            ]
            Spectrum.Tooltip [
                Tooltip.variant TooltipVariant.Negative
                Tooltip.showIcon true
                Tooltip.content "Dangerous action"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"row",gap:"size-100",children:n.Children.toArray([r.exports.createElement(Oe,o(),n.createElement(N,{["aria-label"]:"Approve",children:n.Children.toArray([(e=Kl,n.createElement(e,{}))])}),n.createElement(We,{variant:"positive",showIcon:!0,children:"Approve workflow"})),r.exports.createElement(Oe,o(),n.createElement(N,{["aria-label"]:"Information",children:n.Children.toArray([(t=Jl,n.createElement(t,{}))])}),n.createElement(We,{variant:"info",showIcon:!0,children:"Show the more information menu"})),r.exports.createElement(Oe,o(),n.createElement(N,{["aria-label"]:"Danger",children:n.Children.toArray([(l=mn,n.createElement(l,{}))])}),n.createElement(We,{variant:"negative",showIcon:!0,children:"Dangerous action"}))])}))})}function vm(){const e=f(["Display container for Tooltip content. Has a directional arrow dependent on its placement.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tooltip.html"})," for more details."]);return r.exports.createElement(V,{title:"Tooltip",description:e,examples:f([r.exports.createElement(Sm,null),r.exports.createElement(bm,null),r.exports.createElement(ym,null),r.exports.createElement(Cm,null),r.exports.createElement(Am,null)])})}function wm(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ComboBox [
    ComboBox.label "Favorite animal"
    ComboBox.children [
        makeItem "red panda" "Red Panda"
        makeItem "cat" "Cat"
        makeItem "dog" "Dog"
        makeItem "aardvark" "Aardvark"
        makeItem "kangaroo" "Kangaroo"
        makeItem "snake" "Snake"
    ]
]`,description:o(),elements:u(n.createElement(je,{label:"Favorite animal",children:[b("red panda","Red Panda"),b("cat","Cat"),b("dog","Dog"),b("aardvark","Aardvark"),b("kangaroo","Kangaroo"),b("snake","Snake")]}))})}function km(){return r.exports.createElement(m,{title:"Content",code:`let options = [
    {| id = 1; name = "Aerospace" |}
    {| id = 2; name = "Mechanical" |}
    {| id = 3; name = "Civil" |}
    {| id = 4; name = "Biomedical" |}
    {| id = 5; name = "Nuclear" |}
    {| id = 6; name = "Industrial" |}
    {| id = 7; name = "Chemical" |}
    {| id = 8; name = "Agricultural" |}
    {| id = 9; name = "Electrical" |}
]
let majorId, setMajorId = React.useState<int option>(None)
React.fragment [
    Html.p $"Topic id: {majorId}"
    Spectrum.ComboBox [
        ComboBox.label "Pick an engineering major"
        ComboBox.placeholder "Search engineering majors..."
        ComboBox.defaultItems options
        ComboBox.onSelectionChange setMajorId
        ComboBox.itemTemplate (fun item ->
            let name: string = item?name
            Spectrum.Item name
        )
    ]
]`,description:o(),elements:C(x(()=>{let e;const t=f([{id:1,name:"Aerospace"},{id:2,name:"Mechanical"},{id:3,name:"Civil"},{id:4,name:"Biomedical"},{id:5,name:"Nuclear"},{id:6,name:"Industrial"},{id:7,name:"Chemical"},{id:8,name:"Agricultural"},{id:9,name:"Electrical"}]),l=B(void 0);return E(r.exports.createElement(r.exports.Fragment,{},(e=`Topic id: ${l[0]}`,r.exports.createElement("p",{children:[e]})),n.createElement(je,{label:"Pick an engineering major",placeholder:"Search engineering majors...",defaultItems:Array.from(t),onSelectionChange:l[1],children:i=>{const a=i.name;return n.createElement(A,{children:a})}})))}))})}function Tm(){return r.exports.createElement(m,{title:"Value",code:`let names = [
    "Adobe Photoshop"; "Adobe XD"; "Adobe InDesign";
    "Adobe AfterEffects"; "Adobe Illustrator";
    "Adobe Lightroom"; "Adobe Premiere Pro";
    "Adobe Fresco"; "Adobe Dreamweaver"
]
let options = names |> List.mapi (fun idx name -> {| id = idx + 1; name = name |})
let value, setValue = React.useState("Adobe XD")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.ComboBox [
            ComboBox.label "Adobe product (Uncontrolled)"
            ComboBox.defaultItems options
            ComboBox.defaultInputValue "Adobe XD"
            ComboBox.itemTemplate (fun item ->
                let name: string = item?name
                Spectrum.Item name
            )
        ]
        Spectrum.ComboBox [
            ComboBox.label "Adobe product (Controlled)"
            ComboBox.defaultItems options
            ComboBox.inputValue value
            ComboBox.onInputChange setValue
            ComboBox.itemTemplate (fun item ->
                let name: string = item?name
                Spectrum.Item name
            )
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=kn((l,i)=>({id:l+1,name:i}),f(["Adobe Photoshop","Adobe XD","Adobe InDesign","Adobe AfterEffects","Adobe Illustrator","Adobe Lightroom","Adobe Premiere Pro","Adobe Fresco","Adobe Dreamweaver"])),t=B("Adobe XD");return E(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(je,{label:"Adobe product (Uncontrolled)",defaultItems:Array.from(e),defaultInputValue:"Adobe XD",children:l=>{const i=l.name;return n.createElement(A,{children:i})}}),n.createElement(je,{label:"Adobe product (Controlled)",defaultItems:Array.from(e),inputValue:t[0],onInputChange:t[1],children:l=>{const i=l.name;return n.createElement(A,{children:i})}})])}))}))})}function Fm(){return r.exports.createElement(m,{title:"Custom value",code:`let options = [
    {| name = "Apple" |}
    {| name = "Banana" |}
    {| name = "Orange" |}
    {| name = "Grapes" |}
    {| name = "Watermelon" |}
    {| name = "Pear" |}
]
React.fragment [
    Html.p "Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list feel free to write your own selection."
    Spectrum.ComboBox [
        ComboBox.label "Preferred fruit"
        ComboBox.defaultItems options
        ComboBox.allowsCustomValue true
        ComboBox.itemTemplate (fun item ->
            let name: string = item?name
            makeItem name name
        )
    ]
]`,description:o(),elements:C(x(()=>{const e=f([{name:"Apple"},{name:"Banana"},{name:"Orange"},{name:"Grapes"},{name:"Watermelon"},{name:"Pear"}]);return E(r.exports.createElement(r.exports.Fragment,{},r.exports.createElement("p",{children:["Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list feel free to write your own selection."]}),n.createElement(je,{label:"Preferred fruit",defaultItems:Array.from(e),allowsCustomValue:!0,children:t=>{const l=t.name;return b(l,l)}})))}))})}function Im(){return r.exports.createElement(m,{title:"Sections",code:`Spectrum.ComboBox [
    ComboBox.label "Preferred fruit or vegetable"
    ComboBox.children [
        Spectrum.Section [
            Section.title "Fruit"
            Section.children [
                makeItem "Apple" "Apple"
                makeItem "Banana" "Banana"
                makeItem "Orange" "Orange"
            ]
        ]
        Spectrum.Section [
            Section.title "Vegetables"
            Section.children [
                makeItem "Cabbage" "Cabbage"
                makeItem "Lettuce" "Lettuce"
                makeItem "Carrots" "Carrots"
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(je,{label:"Preferred fruit or vegetable",children:[n.createElement(ve,{title:"Fruit",children:[b("Apple","Apple"),b("Banana","Banana"),b("Orange","Orange")]}),n.createElement(ve,{title:"Vegetables",children:[b("Cabbage","Cabbage"),b("Lettuce","Lettuce"),b("Carrots","Carrots")]})]}))})}function Bm(){return r.exports.createElement(m,{title:"Events",code:`let options =
    [ "Aerospace"; "Mechanical"; "Civil"; "Biomedical"; "Nuclear";
    "Industrial"; "Chemical"; "Agricultural"; "Electrical" ]
    |> List.mapi (fun idx name -> {| id = idx + 1; name = name |})
let value, setValue = React.useState("")
let majorId, setMajorId = React.useState(0)

let onSelectionChange id = setMajorId(id)
let onInputChange value = setValue(value)

React.fragment [
    Html.p $"Current selected major id: {majorId}"
    Html.p $"Current input text: {value}"
    Spectrum.ComboBox [
        ComboBox.label "Pick an engineering major"
        ComboBox.defaultItems options
        ComboBox.selectedKey majorId
        ComboBox.onSelectionChange onSelectionChange
        ComboBox.onInputChange onInputChange
        ComboBox.itemTemplate (fun item ->
            let name: string = item?name
            Spectrum.Item name
        )
    ]
]`,description:o(),elements:C(x(()=>{let e,t;const l=kn((s,d)=>({id:s+1,name:d}),f(["Aerospace","Mechanical","Civil","Biomedical","Nuclear","Industrial","Chemical","Agricultural","Electrical"])),i=B(""),a=B(0),c=a[0]|0;return E(r.exports.createElement(r.exports.Fragment,{},(e=`Current selected major id: ${c}`,r.exports.createElement("p",{children:[e]})),(t=`Current input text: ${i[0]}`,r.exports.createElement("p",{children:[t]})),n.createElement(je,{label:"Pick an engineering major",defaultItems:Array.from(l),selectedKey:c,onSelectionChange:s=>{a[1](s)},onInputChange:s=>{i[1](s)},children:s=>{const d=s.name;return n.createElement(A,{children:d})}})))}))})}function Dm(){let e,t,l,i;return r.exports.createElement(m,{title:"Complex items",code:`Spectrum.ComboBox [
    ComboBox.label "Select action"
    ComboBox.children [
        Spectrum.Item [
            Item.textValue "Add to queue"
            Item.children [
                Spectrum.Icon.Add []
                Spectrum.Text "Add to queue"
                Spectrum.Text [
                    Text.slot "description"
                    Text.content "Add to current watch queue"
                ]
            ]
        ]
        Spectrum.Item [
            Item.textValue "Add review"
            Item.children [
                Spectrum.Icon.Draw []
                Spectrum.Text "Add review"
                Spectrum.Text [
                    Text.slot "description"
                    Text.content "Post a review for the episode"
                ]
            ]
        ]
        Spectrum.Item [
            Item.textValue "Subscribe to series"
            Item.children [
                Spectrum.Icon.Bell []
                Spectrum.Text "Subscribe to series"
                Spectrum.Text [
                    Text.slot "description"
                    Text.content "Add series to your subscription list and be notified when a new episode airs"
                ]
            ]
        ]
        Spectrum.Item [
            Item.textValue "Report"
            Item.children [
                Spectrum.Icon.Alert []
                Spectrum.Text "Report"
                Spectrum.Text [
                    Text.slot "description"
                    Text.content "Report an issue/violation"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(je,{label:"Select action",children:[n.createElement(A,{textValue:"Add to queue",children:n.Children.toArray([(e=$l,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Add to queue"])}),n.createElement(y,{slot:"description",children:n.Children.toArray(["Add to current watch queue"])})])}),n.createElement(A,{textValue:"Add review",children:n.Children.toArray([(t=un,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Add review"])}),n.createElement(y,{slot:"description",children:n.Children.toArray(["Post a review for the episode"])})])}),n.createElement(A,{textValue:"Subscribe to series",children:n.Children.toArray([(l=pr,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Subscribe to series"])}),n.createElement(y,{slot:"description",children:n.Children.toArray(["Add series to your subscription list and be notified when a new episode airs"])})])}),n.createElement(A,{textValue:"Report",children:n.Children.toArray([(i=Et,n.createElement(i,{})),n.createElement(y,{children:n.Children.toArray(["Report"])}),n.createElement(y,{slot:"description",children:n.Children.toArray(["Report an issue/violation"])})])})]}))})}function Vm(){const e=f(["ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ComboBox.html"})," for more details."]);return r.exports.createElement(V,{title:"ComboBox",description:e,examples:f([r.exports.createElement(wm,null),r.exports.createElement(km,null),r.exports.createElement(Tm,null),r.exports.createElement(Fm,null),r.exports.createElement(Im,null),r.exports.createElement(Bm,null),r.exports.createElement(Dm,null)])})}function Nm(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Picker [
    Picker.label "Choose frequency"
    Picker.children [
        makeItem "rarely" "Rarely"
        makeItem "sometimes" "Sometimes"
        makeItem "always" "Always"
    ]
]`,description:o(),elements:u(n.createElement(gn,{label:"Choose frequency",children:[b("rarely","Rarely"),b("sometimes","Sometimes"),b("always","Always")]}))})}function Mm(){return r.exports.createElement(m,{title:"Content",code:`let options =
    [ "Aardvark"; "Cat"; "Dog"; "Kangaroo";
    "Koala"; "Penguin"; "Snake"; "Turtle"; "Wombat" ]
    |> List.mapi (fun idx animal -> {| id = idx + 1; name = animal |})
let animalId, setAnimalId = React.useState<int option>(None)
React.fragment [
    Spectrum.Picker [
        Picker.label "Pick an animal"
        Picker.items options
        Picker.onSelectionChange setAnimalId
        Picker.itemTemplate (fun item ->
            let name: string = item?name
            Spectrum.Item name
        )
    ]
    Html.p $"Animal id: {animalId}"
]`,description:o(),elements:C(x(()=>{let e;const t=kn((i,a)=>({id:i+1,name:a}),f(["Aardvark","Cat","Dog","Kangaroo","Koala","Penguin","Snake","Turtle","Wombat"])),l=B(void 0);return E(r.exports.createElement(r.exports.Fragment,{},n.createElement(gn,{label:"Pick an animal",items:Array.from(t),onSelectionChange:l[1],children:i=>{const a=i.name;return n.createElement(A,{children:a})}}),(e=`Animal id: ${l[0]}`,r.exports.createElement("p",{children:[e]}))))}))})}function Rm(){return r.exports.createElement(m,{title:"Selection",code:`let options = [
    {| name = "Koala" |}
    {| name = "Kangaroo" |}
    {| name = "Platypus" |}
    {| name = "Bald Eagle" |}
    {| name = "Bison" |}
    {| name = "Skunk" |}
]
let animal, setAnimal = React.useState("Bison")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.Picker [
            Picker.label "Pick an animal (Uncontrolled)"
            Picker.items options
            Picker.defaultSelectedKey "Bison"
            Picker.itemTemplate (fun item ->
                let name: string = item?name
                makeItem name name
            )
        ]
        Spectrum.Picker [
            Picker.label "Pick an animal (Controlled)"
            Picker.items options
            Picker.selectedKey animal
            Picker.onSelectionChange setAnimal
            Picker.itemTemplate (fun item ->
                let name: string = item?name
                makeItem name name
            )
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=f([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),t=B("Bison");return E(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(gn,{label:"Pick an animal (Uncontrolled)",items:Array.from(e),defaultSelectedKey:"Bison",children:l=>{const i=l.name;return b(i,i)}}),n.createElement(gn,{label:"Pick an animal (Controlled)",items:Array.from(e),selectedKey:t[0],onSelectionChange:t[1],children:l=>{const i=l.name;return b(i,i)}})])}))}))})}function zm(){const e=f(["Pickers allow users to choose a single option from a collapsible list of options when space is limited.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Picker.html"})," for more details."]);return r.exports.createElement(V,{title:"Picker",description:e,examples:f([r.exports.createElement(Nm,null),r.exports.createElement(Mm,null),r.exports.createElement(Rm,null)])})}function Pm(){return r.exports.createElement(m,{title:"Default example",code:'Spectrum.RangeSlider [\n    RangeSlider.label "Range"\n    RangeSlider.defaultValue {| start = 12; ``end`` = 36 |}\n]',description:o(),elements:u(n.createElement(bt,{label:"Range",defaultValue:{end:36,start:12}}))})}function Lm(){return r.exports.createElement(m,{title:"Value",code:'let value, setValue = React.useState({| start = 25; ``end`` = 75 |})\nSpectrum.Flex [\n    Flex.gap (DimValue.Size Size150)\n    Flex.wrap true\n    Flex.children [\n        Spectrum.RangeSlider [\n            RangeSlider.label "Range (Uncontrolled)"\n            RangeSlider.defaultValue {| start = 25; ``end`` = 75 |}\n        ]\n        Spectrum.RangeSlider [\n            RangeSlider.label "Range (Controlled)"\n            RangeSlider.value {| start = value.start; ``end`` = value.``end`` |}\n            RangeSlider.onChange (fun x -> setValue {| start = x.start; ``end`` = x.``end`` |})\n        ]\n    ]\n]',description:o(),elements:C(x(()=>{const e=B({end:75,start:25}),t=e[0];return E(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(bt,{label:"Range (Uncontrolled)",defaultValue:{end:75,start:25}}),n.createElement(bt,{label:"Range (Controlled)",value:{end:t.end,start:t.start},onChange:l=>{e[1]({end:l.end,start:l.start})}})])}))}))})}function _m(){return r.exports.createElement(m,{title:"Different scale",code:`Spectrum.RangeSlider [
    RangeSlider.label "Range"
    RangeSlider.minValue 50
    RangeSlider.maxValue 150
    RangeSlider.defaultValue {| start = 75; \`\`end\`\` = 100 |}
]`,description:o(),elements:u(n.createElement(bt,{label:"Range",minValue:50,maxValue:150,defaultValue:{end:100,start:75}}))})}function Gm(){return r.exports.createElement(m,{title:"Number format",code:'Spectrum.RangeSlider [\n    RangeSlider.label "Price range"\n    RangeSlider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "JPY")\n    RangeSlider.defaultValue {| start = 75; ``end`` = 100 |}\n]',description:o(),elements:u(n.createElement(bt,{label:"Price range",formatOptions:{localeMatcher:void 0,style:"currency",currency:"JPY",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},defaultValue:{end:100,start:75}}))})}function Hm(){return r.exports.createElement(m,{title:"Using the getValueLabel prop",code:'Spectrum.RangeSlider [\n    RangeSlider.label "Search radius"\n    RangeSlider.maxValue 200\n    RangeSlider.defaultValue {| start = 15; ``end`` = 60 |}\n    RangeSlider.getValueLabel (fun m -> $"{m.start}m to {m.``end``}m away")\n]',description:o(),elements:u(n.createElement(bt,{label:"Search radius",maxValue:200,defaultValue:{end:60,start:15},getValueLabel:e=>`${e.start}m to ${e.end}m away`}))})}function Om(){const e=f(["RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RangeSlider.html"})," for more details."]);return r.exports.createElement(V,{title:"RangeSlider",description:e,examples:f([r.exports.createElement(Pm,null),r.exports.createElement(Lm,null),r.exports.createElement(_m,null),r.exports.createElement(Gm,null),r.exports.createElement(Hm,null)])})}function Wm(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Slider [
    Slider.label "Cookies to buy"
    Slider.defaultValue 12
]`,description:o(),elements:u(n.createElement(xn,{label:"Cookies to buy",defaultValue:12}))})}function jm(){return r.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState(25)
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.Slider [
            Slider.label "Cookies to buy (Uncontrolled)"
            Slider.defaultValue 25
        ]
        Spectrum.Slider [
            Slider.label "Cookies to buy (Controlled)"
            Slider.value value
            Slider.onChange setValue
        ]
    ]
]`,description:o(),elements:C(x(()=>{const e=B(25);return E(n.createElement(F,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(xn,{label:"Cookies to buy (Uncontrolled)",defaultValue:25}),n.createElement(xn,{label:"Cookies to buy (Controlled)",value:e[0],onChange:e[1]})])}))}))})}function qm(){return r.exports.createElement(m,{title:"Number format",code:`Spectrum.Slider [
    Slider.label "Currency"
    Slider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "USD")
    Slider.defaultValue 60
]`,description:o(),elements:u(n.createElement(xn,{label:"Currency",formatOptions:{localeMatcher:void 0,style:"currency",currency:"USD",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},defaultValue:60}))})}function Um(){const e=f(["Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Slider.html"})," for more details."]);return r.exports.createElement(V,{title:"Slider",description:e,examples:f([r.exports.createElement(Wm,null),r.exports.createElement(jm,null),r.exports.createElement(qm,null)])})}function Km(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Meter [
    Meter.label "Storage space"
    Meter.variant MeterVariant.Positive
    Meter.value 35
]`,description:o(),elements:u(n.createElement(Ut,{label:"Storage space",variant:"positive",value:35}))})}function Jm(){return r.exports.createElement(m,{title:"Warning example",code:`Spectrum.Meter [
    Meter.label "Progress"
    Meter.marginBottom (DimValue.Size Size300)
    Meter.value 25
    Meter.valueLabel "1 of 4"
    Meter.variant MeterVariant.Warning
]`,description:o(),elements:u(n.createElement(Ut,{label:"Progress",marginBottom:"size-300",value:25,valueLabel:"1 of 4",variant:"warning"}))})}function $m(){return r.exports.createElement(m,{title:"Labels and formatting",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.maxWidth (DimValue.Size Size3000)
    Flex.gap (DimValue.Size Size300)
    Flex.children [
        Spectrum.Meter [
            Meter.label "Space used"
            Meter.showValueLabel false
            Meter.value 90
            Meter.variant MeterVariant.Critical
        ]
        Spectrum.Meter [
            Meter.label "Space used"
            Meter.valueLabel "54 of 60GB"
            Meter.value 90
            Meter.variant MeterVariant.Critical
        ]
        Spectrum.Meter [
            Meter.label "Space used"
            Meter.value 89.123
            Meter.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Percent, minimumFractionDigits = 2)
            Meter.variant MeterVariant.Critical
        ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"column",maxWidth:"size-3000",gap:"size-300",children:n.Children.toArray([n.createElement(Ut,{label:"Space used",showValueLabel:!1,value:90,variant:"critical"}),n.createElement(Ut,{label:"Space used",valueLabel:"54 of 60GB",value:90,variant:"critical"}),n.createElement(Ut,{label:"Space used",value:89.123,formatOptions:{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:2,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},variant:"critical"})])}))})}function Ym(){const e=f(["Meters are visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Meter.html"})," for more details."]);return r.exports.createElement(V,{title:"Meter",description:e,examples:f([r.exports.createElement(Km,null),r.exports.createElement(Jm,null),r.exports.createElement($m,null)])})}function Xm(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ProgressBar [
    ProgressBar.label "Loading..."
    ProgressBar.value 50
]`,description:o(),elements:u(n.createElement(Hn,{label:"Loading...",value:50}))})}function Zm(){return r.exports.createElement(m,{title:"Indeterminate",code:`Spectrum.ProgressBar [
    ProgressBar.label "Loading..."
    ProgressBar.isIndeterminate true
]`,description:o(),elements:u(n.createElement(Hn,{label:"Loading...",isIndeterminate:!0}))})}function Qm(){return r.exports.createElement(m,{title:"Over background",code:`Spectrum.View [
    View.backgroundColor (BackgroundColorValue.Color Positive)
    View.padding (DimValue.Size Size300)
    View.children [
        Spectrum.ProgressBar [
            ProgressBar.overBackgroundVariant
            ProgressBar.label "Loading..."
            ProgressBar.value 5
        ]
    ]
]`,description:o(),elements:u(n.createElement(R,{backgroundColor:"positive",padding:"size-300",children:n.Children.toArray([n.createElement(Hn,{variant:"overBackground",label:"Loading...",value:5})])}))})}function ed(){const e=f(["ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressBar.html"})," for more details."]);return r.exports.createElement(V,{title:"ProgressBar",description:e,examples:f([r.exports.createElement(Xm,null),r.exports.createElement(Zm,null),r.exports.createElement(Qm,null)])})}function td(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ProgressCircle [
    ProgressCircle.ariaLabel "Loading..."
    ProgressCircle.value 50
]`,description:o(),elements:u(n.createElement(On,{["aria-label"]:"Loading...",value:50}))})}function nd(){return r.exports.createElement(m,{title:"Indeterminate",code:`Spectrum.ProgressCircle [
    ProgressCircle.ariaLabel "Loading..."
    ProgressCircle.isIndeterminate true
]`,description:o(),elements:u(n.createElement(On,{["aria-label"]:"Loading...",isIndeterminate:!0}))})}function rd(){return r.exports.createElement(m,{title:"Over background",code:`Spectrum.View [
    View.backgroundColor (BackgroundColorValue.Color Positive)
    View.padding (DimValue.Size Size300)
    View.children [
        Spectrum.ProgressCircle [
            ProgressCircle.overBackgroundVariant
            ProgressCircle.isIndeterminate true
            ProgressCircle.ariaLabel "Loading..."
        ]
    ]
]`,description:o(),elements:u(n.createElement(R,{backgroundColor:"positive",padding:"size-300",children:n.Children.toArray([n.createElement(On,{variant:"overBackground",isIndeterminate:!0,["aria-label"]:"Loading..."})])}))})}function ld(){const e=f(["ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressCircle.html"})," for more details."]);return r.exports.createElement(V,{title:"ProgressCircle",description:e,examples:f([r.exports.createElement(td,null),r.exports.createElement(nd,null),r.exports.createElement(rd,null)])})}function id(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.StatusLight [
    StatusLight.variant StatusLightVariant.Positive
    StatusLight.content "Ready"
]`,description:o(),elements:u(n.createElement(Yl,{variant:"positive",children:"Ready"}))})}function ad(){const e=f(["Status lights are used to color code categories and labels commonly found in data visualization. When status lights have a semantic meaning, they should use semantic variant colors.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/StatusLight.html"})," for more details."]);return r.exports.createElement(V,{title:"StatusLight",description:e,examples:u(r.exports.createElement(id,null))})}function od(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Content "Content is king"
`,description:o(),elements:u(n.createElement(J,{children:n.Children.toArray(["Content is king"])}))})}function cd(){const e=f(["Content represents the primary content within a Spectrum container.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Content.html"})," for more details."]);return r.exports.createElement(V,{title:"Content",description:e,examples:u(r.exports.createElement(od,null))})}function sd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content above"
        Spectrum.Divider ()
        Spectrum.Text "Content below"
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"column",gap:"size-125",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Content above"])}),r.exports.createElement(U,o()),n.createElement(y,{children:n.Children.toArray(["Content below"])})])}))})}function ud(){return r.exports.createElement(m,{title:"Vertical",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content left"
        Spectrum.Divider [
            Divider.orientation Orientation.Vertical
        ]
        Spectrum.Text "Content right"
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"row",gap:"size-125",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Content left"])}),n.createElement(U,{orientation:"vertical"}),n.createElement(y,{children:n.Children.toArray(["Content right"])})])}))})}function md(){return r.exports.createElement(m,{title:"Size",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content above large Divider"
        Spectrum.Divider [ Divider.size DividerSize.L ]
        Spectrum.Text "Content above medium Divider"
        Spectrum.Divider [ Divider.size DividerSize.M ]
        Spectrum.Text "Content above small Divider"
        Spectrum.Divider [ Divider.size DividerSize.S ]
    ]
]`,description:o(),elements:u(n.createElement(F,{direction:"column",gap:"size-125",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Content above large Divider"])}),n.createElement(U,{size:"L"}),n.createElement(y,{children:n.Children.toArray(["Content above medium Divider"])}),n.createElement(U,{size:"M"}),n.createElement(y,{children:n.Children.toArray(["Content above small Divider"])}),n.createElement(U,{size:"S"})])}))})}function dd(){const e=f(["Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Divider.html"})," for more details."]);return r.exports.createElement(V,{title:"Divider",description:e,examples:f([r.exports.createElement(sd,null),r.exports.createElement(ud,null),r.exports.createElement(md,null)])})}function pd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Footer "\xA9 All rights reserved."
`,description:o(),elements:u(n.createElement(gr,{children:n.Children.toArray(["\xA9 All rights reserved."])}))})}function hd(){const e=f(["Footer represents a footer within a Spectrum container.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Footer.html"})," for more details."]);return r.exports.createElement(V,{title:"Footer",description:e,examples:u(r.exports.createElement(pd,null))})}function fd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Header "Header example..."
`,description:o(),elements:u(n.createElement(Gn,{children:n.Children.toArray(["Header example..."])}))})}function gd(){const e=f(["Header represents a header within a Spectrum container.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Header.html"})," for more details."]);return r.exports.createElement(V,{title:"Header",description:e,examples:u(r.exports.createElement(fd,null))})}function xd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Heading [
    Heading.level 4
    Heading.content "A level 4 heading..."
]`,description:o(),elements:u(n.createElement(K,{level:4,children:"A level 4 heading..."}))})}function Ed(){const e=f(["Heading is used to create various levels of typographic hierarchies.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Heading.html"})," for more details."]);return r.exports.createElement(V,{title:"Heading",description:e,examples:u(r.exports.createElement(xd,null))})}function Sd(){let e;return r.exports.createElement(m,{title:"No search results",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.NoSearchResults []
    Spectrum.Heading "No matching results"
    Spectrum.Content "Try another search"
]`,description:o(),elements:u(r.exports.createElement(yt,o(),(e=Xl,n.createElement(e,{})),n.createElement(K,{children:n.Children.toArray(["No matching results"])}),n.createElement(J,{children:n.Children.toArray(["Try another search"])})))})}function bd(){let e;return r.exports.createElement(m,{title:"403 forbidden",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Unauthorized []
    Spectrum.Heading "Error 403: Access not allowed"
    Spectrum.Content "You do not have permission to access this page. Try checking the URL or visit a different page."
]`,description:o(),elements:u(r.exports.createElement(yt,o(),(e=Zl,n.createElement(e,{})),n.createElement(K,{children:n.Children.toArray(["Error 403: Access not allowed"])}),n.createElement(J,{children:n.Children.toArray(["You do not have permission to access this page. Try checking the URL or visit a different page."])})))})}function yd(){let e;return r.exports.createElement(m,{title:"404 not found",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.NotFound []
    Spectrum.Heading "Error 404: Page not found"
    Spectrum.Content "This page isn't available. Try checking the URL or visit a different page."
]`,description:o(),elements:u(r.exports.createElement(yt,o(),(e=Ql,n.createElement(e,{})),n.createElement(K,{children:n.Children.toArray(["Error 404: Page not found"])}),n.createElement(J,{children:n.Children.toArray(["This page isn't available. Try checking the URL or visit a different page."])})))})}function Cd(){let e;return r.exports.createElement(m,{title:"500 internal server error",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Error []
    Spectrum.Heading "Error 500: Internal server error"
    Spectrum.Content "Something went wrong. Please try again later."
]`,description:o(),elements:u(r.exports.createElement(yt,o(),(e=ei,n.createElement(e,{})),n.createElement(K,{children:n.Children.toArray(["Error 500: Internal server error"])}),n.createElement(J,{children:n.Children.toArray(["Something went wrong. Please try again later."])})))})}function Ad(){let e;return r.exports.createElement(m,{title:"503 service unavailable",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Unavailable []
    Spectrum.Heading "Error 503: Service unavailble"
    Spectrum.Content "This page isn't working. Try a different page or try again later."
]`,description:o(),elements:u(r.exports.createElement(yt,o(),(e=ti,n.createElement(e,{})),n.createElement(K,{children:n.Children.toArray(["Error 503: Service unavailble"])}),n.createElement(J,{children:n.Children.toArray(["This page isn't working. Try a different page or try again later."])})))})}function vd(){let e;return r.exports.createElement(m,{title:"504 server timeout",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Timeout []
    Spectrum.Heading "Error 504: Server timeout"
    Spectrum.Content "The server took too long. Please try again later."
]`,description:o(),elements:u(r.exports.createElement(yt,o(),(e=ni,n.createElement(e,{})),n.createElement(K,{children:n.Children.toArray(["Error 504: Server timeout"])}),n.createElement(J,{children:n.Children.toArray(["The server took too long. Please try again later."])})))})}function wd(){const e=f(["An IllustratedMessage displays an illustration and a message, usually for an empty state or an error page.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html"})," for more details."]);return r.exports.createElement(V,{title:"IllustratedMessage",description:e,examples:f([r.exports.createElement(Sd,null),r.exports.createElement(bd,null),r.exports.createElement(yd,null),r.exports.createElement(Cd,null),r.exports.createElement(Ad,null),r.exports.createElement(vd,null)])})}function kd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Image [
    Image.src "https://i.imgur.com/Z7AzH2c.png"
    Image.alt "Sky and roof"
]`,description:o(),elements:u(n.createElement(xr,{src:"https://i.imgur.com/Z7AzH2c.png",alt:"Sky and roof"}))})}function Td(){const e=f(["Image is used to insert and display an image within a component.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Image.html"})," for more details."]);return r.exports.createElement(V,{title:"Image",description:e,examples:u(r.exports.createElement(kd,null))})}function Fd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Keyboard "\u2318V"
`,description:o(),elements:u(n.createElement(hn,{children:n.Children.toArray(["\u2318V"])}))})}function Id(){const e=f(["Keyboard represents text that specifies a keyboard command.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Keyboard.html"})," for more details."]);return r.exports.createElement(V,{title:"Keyboard",description:e,examples:u(r.exports.createElement(Fd,null))})}function Bd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Text "A piece of text..."
`,description:o(),elements:u(n.createElement(y,{children:n.Children.toArray(["A piece of text..."])}))})}function Dd(){const e=f(["Text represents text with no specific semantic meaning.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Text.html"})," for more details."]);return r.exports.createElement(V,{title:"Text",description:e,examples:u(r.exports.createElement(Bd,null))})}function Vd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.View [
    View.width 200
    View.borderColor BorderColorValue.Hover
    View.borderWidth BorderSizeValue.Thicker
    View.padding (DimValue.Size Size250)
    View.borderRadius BorderRadiusValue.Medium
    View.backgroundColor (
        ResponsiveProp.make(
            base' = BackgroundColorValue.Color StaticGreen400,
            S = BackgroundColorValue.LabelGray,
            M = BackgroundColorValue.Color StaticBlue300,
            L = BackgroundColorValue.Color StaticRed400
        )
    )
    View.children [
        Spectrum.ActionButton [
            ActionButton.content "Click me!"
        ]
    ]
]`,description:o(),elements:u(n.createElement(R,{width:200,borderColor:"hover",borderWidth:"thicker",padding:"size-250",borderRadius:"medium",backgroundColor:{base:q("static-green-400"),S:q("label-gray"),M:q("static-blue-300"),L:q("static-red-400")},children:n.Children.toArray([n.createElement(N,{children:"Click me!"})])}))})}function Nd(){const e=f(["View is a general purpose container with no specific semantics that can be used for custom styling purposes. It supports Spectrum style props to ensure consistency with other Spectrum components.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/View.html"})," for more details."]);return r.exports.createElement(V,{title:"View",description:e,examples:u(r.exports.createElement(Vd,null))})}function Md(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Well [
    Well.content "Better a little which is well done, than a great deal imperfectly."
]`,description:o(),elements:u(n.createElement(Mn,{children:"Better a little which is well done, than a great deal imperfectly."}))})}function Rd(){let e;return r.exports.createElement(m,{title:"Another example",code:`Spectrum.Well [
    Well.role "region"
    Well.ariaLabeledBy "well-label"
    Well.children [
        Html.h3 [
            prop.id "well-label"
            prop.children [ Html.text "Shipping Address" ]
        ]
        Html.p [
            Html.text "601 Townsend Street"
            Html.br []
            Html.text " San Francisco, CA 94103"
        ]
    ]
]`,description:o(),elements:u(n.createElement(Mn,{role:"region",["aria-labelledby"]:"well-label",children:n.Children.toArray([r.exports.createElement("h3",{id:"well-label",children:n.Children.toArray(["Shipping Address"])}),(e=f(["601 Townsend Street",r.exports.createElement("br",{})," San Francisco, CA 94103"]),r.exports.createElement("p",{children:n.Children.toArray(Array.from(e))}))])}))})}function zd(){const e=f(["A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Well.html"})," for more details."]);return r.exports.createElement(V,{title:"Well",description:e,examples:f([r.exports.createElement(Md,null),r.exports.createElement(Rd,null)])})}const Pd=(()=>{let e=!1;try{(typeof window!="undefined"?typeof window.addEventListener=="function":!1)&&(window.addEventListener("testPassiveEventSupport",t=>{},{passive:!0}),window.removeEventListener("testPassiveEventSupport",t=>{}))}catch{}return e})();function ur(e){return ba(t=>(t.passive?!Pd:!1)?{capture:t.capture,once:t.once,passive:!1}:t,e)}function mr(e){return ya(t=>{if(t.capture)return{capture:!0}},e)}function _t(e,t){if(t.indexOf(e)===0)return t}function vl(e,t){if(fa(t,e))return t}function Ld(e){return e===1?t=>{let l,i,a,c,s,d;return l=_t("/",t),l!=null?(i=l,"#"+i):(a=_t("#/",t),a!=null?(c=a,c):(s=_t("#",t),s!=null?(d=s,"#/"+Xr(d,1,d.length-1)):"#/"+t))}:t=>{let l,i;return l=_t("/",t),l!=null?(i=l,i):"/"+t}}function I(e,t){return Ld(t)(wn("/",Ba(l=>((l.indexOf("?")>=0?!0:l.indexOf("#")===0)?!0:l.indexOf("/")===0)?l:encodeURIComponent(l),e)))}function _d(e,t,l){t===1?history.pushState(void 0,"",I(e,l)):history.replaceState(void 0,"",I(e,l));const i=document.createEvent("CustomEvent");i.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(i)}function wl(e,t){return Ia(l=>{if(ga(l))return o();{const i=Ea(l,"#");if(i==="?")return o();if(_t("?",i)!=null)return u(i);{const a=i.split("?");if(el((c,s)=>c===s,a,null)?!1:a.length===1){const c=a[0];return u(decodeURIComponent(c))}else if(el((c,s)=>c===s,a,null)?!1:a.length===2)if(a[1]===""){const c=a[0];return u(decodeURIComponent(c))}else{const c=a[0],s=a[1];return f([decodeURIComponent(c),"?"+s])}else return o()}}},f(xa(_t("#",e)!=null?Xr(e,1,e.length-1):t===1&&(vl("#",e)!=null||vl("#/",e)!=null)?"":e,["/"],null,0)))}function Gd(e,t,l){return t(wl(e===2?window.location.pathname+window.location.search:window.location.hash,e))}const Hd=tc(e=>{const t=Dn(p=>{const g=nn(e.onUrlChanged,S=>{});Gd(nn(e.hashMode,1),g)});if(window.navigator.userAgent.indexOf("Trident")>=0?!0:window.navigator.userAgent.indexOf("MSIE")>=0){const p="hashchange",g=G=>{t(G)},S=void 0,T=ie(()=>ur(S),[S]),M=ie(()=>mr(S),[S]),O=ie(()=>G=>{g(G)},[g]);cr(Dn(()=>(T==null?window.addEventListener(p,O):window.addEventListener(p,O,T),on(()=>{M==null?window.removeEventListener(p,O):window.removeEventListener(p,O,M)}))))}else{const p="popstate",g=t,S=void 0,T=ie(()=>ur(S),[S]),M=ie(()=>mr(S),[S]),O=ie(()=>G=>{g(G)},[g]);cr(Dn(()=>(T==null?window.addEventListener(p,O):window.addEventListener(p,O,T),on(()=>{M==null?window.removeEventListener(p,O):window.removeEventListener(p,O,M)}))))}const l="CUSTOM_NAVIGATION_EVENT",i=t,a=void 0,c=ie(()=>ur(a),[a]),s=ie(()=>mr(a),[a]),d=ie(()=>p=>{i(p)},[i]);cr(Dn(()=>(c==null?window.addEventListener(l,d):window.addEventListener(l,d,c),on(()=>{s==null?window.removeEventListener(l,d):window.removeEventListener(l,d,s)}))));const h=e.application;return h==null?null:h});function fe(e,t,l){return n.createElement(ve,{key:e,title:t,children:Array.from(l)})}function D(e,t){return n.createElement(A,{key:e,textValue:t,title:t})}function Od(){return f([fe("general","General",[D("overview","Overview"),D("installation","Installation")]),fe("application","Application",[D("provider","Provider")]),fe("layout","Layout",[D("flex","Flex"),D("grid","Grid")]),fe("buttons","Buttons",[D("actionButton","ActionButton"),D("actionGroup","ActionGroup"),D("button","Button"),D("buttonGroup","ButtonGroup"),D("logicButton","LogicButton"),D("toggleButton","ToggleButton")]),fe("collections","Collections",[D("listBox","ListBox"),D("menu","Menu"),D("menuTrigger","MenuTrigger"),D("tableView","TableView")]),fe("forms","Forms",[D("checkbox","Checkbox"),D("checkboxGroup","CheckboxGroup"),D("form","Form"),D("numberField","NumberField"),D("radioGroup","RadioGroup"),D("searchField","SearchField"),D("switch","Switch"),D("textArea","TextArea"),D("textField","TextField")]),fe("icons","Icons",[D("workflowIcons","Workflow Icons")]),fe("navigation","Navigation",[D("breadcrumbs","Breadcrumbs"),D("link","Link"),D("tabs","Tabs")]),fe("overlays","Overlays",[D("alertDialog","AlertDialog"),D("dialog","Dialog"),D("dialogContainer","DialogContainer"),D("dialogTrigger","DialogTrigger"),D("tooltip","Tooltip")]),fe("pickers","Pickers",[D("comboBox","ComboBox"),D("picker","Picker")]),fe("sliders","Sliders",[D("rangeSlider","RangeSlider"),D("slider","Slider")]),fe("status","Status",[D("meter","Meter"),D("progressBar","ProgressBar"),D("progressCircle","ProgressCircle"),D("statusLight","StatusLight")]),fe("content'","Content",[D("content","Content"),D("divider","Divider"),D("footer","Footer"),D("header","Header"),D("heading","Heading"),D("illustratedMessage","IllustratedMessage"),D("image","Image"),D("keyboard","Keyboard"),D("text","Text"),D("view","View"),D("well","Well")])])}function Wd(e){switch(e){case"installation":return r.exports.createElement(lc,null);case"actionButton":return r.exports.createElement(cc,null);case"actionGroup":return r.exports.createElement(fc,null);case"button":return r.exports.createElement(Sc,null);case"buttonGroup":return r.exports.createElement(Ac,null);case"toggleButton":return r.exports.createElement(Vc,null);case"provider":return r.exports.createElement(Pc,null);case"flex":return r.exports.createElement(jc,null);case"grid":return r.exports.createElement(Kc,null);case"logicButton":return r.exports.createElement(Tc,null);case"listBox":return r.exports.createElement(ns,null);case"menu":return r.exports.createElement(ms,null);case"menuTrigger":return r.exports.createElement(fs,null);case"tableView":return r.exports.createElement(Ss,null);case"checkbox":return r.exports.createElement(ws,null);case"checkboxGroup":return r.exports.createElement(Bs,null);case"form":return r.exports.createElement(Rs,null);case"numberField":return r.exports.createElement(Us,null);case"radioGroup":return r.exports.createElement(Xs,null);case"searchField":return r.exports.createElement(tu,null);case"switch":return r.exports.createElement(ou,null);case"textArea":return r.exports.createElement(Su,null);case"textField":return r.exports.createElement(Du,null);case"workflowIcons":return r.exports.createElement(Mu,null);case"breadcrumbs":return r.exports.createElement(Gu,null);case"link":return r.exports.createElement(ju,null);case"tabs":return r.exports.createElement($u,null);case"alertDialog":return r.exports.createElement(em,null);case"dialog":return r.exports.createElement(om,null);case"dialogContainer":return r.exports.createElement(mm,null);case"dialogTrigger":return r.exports.createElement(Em,null);case"tooltip":return r.exports.createElement(vm,null);case"comboBox":return r.exports.createElement(Vm,null);case"picker":return r.exports.createElement(zm,null);case"rangeSlider":return r.exports.createElement(Om,null);case"slider":return r.exports.createElement(Um,null);case"meter":return r.exports.createElement(Ym,null);case"progressBar":return r.exports.createElement(ed,null);case"progressCircle":return r.exports.createElement(ld,null);case"statusLight":return r.exports.createElement(ad,null);case"content":return r.exports.createElement(cd,null);case"divider":return r.exports.createElement(dd,null);case"footer":return r.exports.createElement(hd,null);case"header":return r.exports.createElement(gd,null);case"heading":return r.exports.createElement(Ed,null);case"illustratedMessage":return r.exports.createElement(wd,null);case"image":return r.exports.createElement(Td,null);case"keyboard":return r.exports.createElement(Id,null);case"text":return r.exports.createElement(Dd,null);case"view":return r.exports.createElement(Nd,null);case"well":return r.exports.createElement(zd,null);default:return r.exports.createElement(rc,null)}}function kl(e){let t;switch(v(e)?t=52:w(e)===""?v(k(e))?t=0:t=52:w(e)==="installation"?v(k(e))?t=1:t=52:w(e)==="provider"?v(k(e))?t=2:t=52:w(e)==="flex"?v(k(e))?t=3:t=52:w(e)==="grid"?v(k(e))?t=4:t=52:w(e)==="actionbutton"?v(k(e))?t=5:t=52:w(e)==="actiongroup"?v(k(e))?t=6:t=52:w(e)==="button"?v(k(e))?t=7:t=52:w(e)==="buttongroup"?v(k(e))?t=8:t=52:w(e)==="logicbutton"?v(k(e))?t=9:t=52:w(e)==="togglebutton"?v(k(e))?t=10:t=52:w(e)==="listbox"?v(k(e))?t=11:t=52:w(e)==="menu"?v(k(e))?t=12:t=52:w(e)==="menutrigger"?v(k(e))?t=13:t=52:w(e)==="tableview"?v(k(e))?t=14:t=52:w(e)==="checkbox"?v(k(e))?t=15:t=52:w(e)==="checkboxgroup"?v(k(e))?t=16:t=52:w(e)==="form"?v(k(e))?t=17:t=52:w(e)==="numberfield"?v(k(e))?t=18:t=52:w(e)==="radiogroup"?v(k(e))?t=19:t=52:w(e)==="searchfield"?v(k(e))?t=20:t=52:w(e)==="switch"?v(k(e))?t=21:t=52:w(e)==="textarea"?v(k(e))?t=22:t=52:w(e)==="textfield"?v(k(e))?t=23:t=52:w(e)==="icons"?v(k(e))?t=24:t=52:w(e)==="breadcrumbs"?v(k(e))?t=25:t=52:w(e)==="link"?v(k(e))?t=26:t=52:w(e)==="tabs"?v(k(e))?t=27:t=52:w(e)==="alertdialog"?v(k(e))?t=28:t=52:w(e)==="dialog"?v(k(e))?t=29:t=52:w(e)==="dialogcontainer"?v(k(e))?t=30:t=52:w(e)==="dialogtrigger"?v(k(e))?t=31:t=52:w(e)==="tooltip"?v(k(e))?t=32:t=52:w(e)==="combobox"?v(k(e))?t=33:t=52:w(e)==="picker"?v(k(e))?t=34:t=52:w(e)==="rangeslider"?v(k(e))?t=35:t=52:w(e)==="slider"?v(k(e))?t=36:t=52:w(e)==="meter"?v(k(e))?t=37:t=52:w(e)==="progressbar"?v(k(e))?t=38:t=52:w(e)==="progresscircle"?v(k(e))?t=39:t=52:w(e)==="statuslight"?v(k(e))?t=40:t=52:w(e)==="content"?v(k(e))?t=41:t=52:w(e)==="divider"?v(k(e))?t=42:t=52:w(e)==="footer"?v(k(e))?t=43:t=52:w(e)==="header"?v(k(e))?t=44:t=52:w(e)==="heading"?v(k(e))?t=45:t=52:w(e)==="illustratedmessage"?v(k(e))?t=46:t=52:w(e)==="image"?v(k(e))?t=47:t=52:w(e)==="keyboard"?v(k(e))?t=48:t=52:w(e)==="text"?v(k(e))?t=49:t=52:w(e)==="view"?v(k(e))?t=50:t=52:w(e)==="well"&&v(k(e))?t=51:t=52,t){case 0:return"overview";case 1:return"installation";case 2:return"provider";case 3:return"flex";case 4:return"grid";case 5:return"actionButton";case 6:return"actionGroup";case 7:return"button";case 8:return"buttonGroup";case 9:return"logicButton";case 10:return"toggleButton";case 11:return"listBox";case 12:return"menu";case 13:return"menuTrigger";case 14:return"tableView";case 15:return"checkbox";case 16:return"checkboxGroup";case 17:return"form";case 18:return"numberField";case 19:return"radioGroup";case 20:return"searchField";case 21:return"switch";case 22:return"textArea";case 23:return"textField";case 24:return"workflowIcons";case 25:return"breadcrumbs";case 26:return"link";case 27:return"tabs";case 28:return"alertDialog";case 29:return"dialog";case 30:return"dialogContainer";case 31:return"dialogTrigger";case 32:return"tooltip";case 33:return"comboBox";case 34:return"picker";case 35:return"rangeSlider";case 36:return"slider";case 37:return"meter";case 38:return"progressBar";case 39:return"progressCircle";case 40:return"statusLight";case 41:return"content";case 42:return"divider";case 43:return"footer";case 44:return"header";case 45:return"heading";case 46:return"illustratedMessage";case 47:return"image";case 48:return"keyboard";case 49:return"text";case 50:return"view";case 51:return"well";case 52:return"overview"}}function jd(e){switch(e){case"installation":return I(u("installation"),1);case"provider":return I(u("provider"),1);case"flex":return I(u("flex"),1);case"grid":return I(u("grid"),1);case"actionButton":return I(u("actionbutton"),1);case"actionGroup":return I(u("actiongroup"),1);case"button":return I(u("button"),1);case"buttonGroup":return I(u("buttongroup"),1);case"logicButton":return I(u("logicbutton"),1);case"toggleButton":return I(u("togglebutton"),1);case"listBox":return I(u("listbox"),1);case"menu":return I(u("menu"),1);case"menuTrigger":return I(u("menutrigger"),1);case"tableView":return I(u("tableview"),1);case"checkbox":return I(u("checkbox"),1);case"checkboxGroup":return I(u("checkboxgroup"),1);case"form":return I(u("form"),1);case"numberField":return I(u("numberfield"),1);case"radioGroup":return I(u("radiogroup"),1);case"searchField":return I(u("searchfield"),1);case"switch":return I(u("switch"),1);case"textArea":return I(u("textarea"),1);case"textField":return I(u("textfield"),1);case"workflowIcons":return I(u("icons"),1);case"breadcrumbs":return I(u("breadcrumbs"),1);case"link":return I(u("link"),1);case"tabs":return I(u("tabs"),1);case"alertDialog":return I(u("alertdialog"),1);case"dialog":return I(u("dialog"),1);case"dialogContainer":return I(u("dialogcontainer"),1);case"dialogTrigger":return I(u("dialogtrigger"),1);case"tooltip":return I(u("tooltip"),1);case"comboBox":return I(u("combobox"),1);case"picker":return I(u("picker"),1);case"rangeSlider":return I(u("rangeslider"),1);case"slider":return I(u("slider"),1);case"meter":return I(u("meter"),1);case"progressBar":return I(u("progressbar"),1);case"progressCircle":return I(u("progresscircle"),1);case"statusLight":return I(u("statuslight"),1);case"content":return I(u("content"),1);case"divider":return I(u("divider"),1);case"footer":return I(u("footer"),1);case"header":return I(u("header"),1);case"heading":return I(u("heading"),1);case"illustratedMessage":return I(u("illustratedmessage"),1);case"image":return I(u("image"),1);case"keyboard":return I(u("keyboard"),1);case"text":return I(u("text"),1);case"view":return I(u("view"),1);case"well":return I(u("well"),1);default:return I(u(""),1)}}class Tl extends it{constructor(t){super();this.SelectedDoc=t}}class qd extends Un{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["SelectDocsId"]}}function Ud(){return[new Tl(kl(wl(window.location.hash,1))),o()]}function Kd(e,t){return[new Tl(e.fields[0]),o()]}function Jd(e){let t;const l=e.dispatch,i=e.model,a=Od(),c=B(!1),s=c[1],d=c[0];return n.createElement(F,{id:"main",direction:"column",alignItems:"center",children:n.Children.toArray([n.createElement(R,{id:"toggle-host",borderBottomColor:"dark",borderBottomWidth:"thin",alignSelf:"stretch",children:n.Children.toArray([n.createElement(ft,{isSelected:d,onChange:h=>{setTimeout(()=>{s(h)},0)},children:n.Children.toArray(Array.from(C(x(()=>{let h,p;return E(d?(h=ri,n.createElement(h,{})):(p=li,n.createElement(p,{})))})))),alignSelf:"start"})])}),n.createElement(F,{id:"main-content",flex:1,columnGap:"size-300",direction:"row",children:n.Children.toArray([n.createElement(R,me(C(x(()=>z(E(["id","navigation-list-host"]),x(()=>z(d?In():E(["UNSAFE_className","collapsed"]),x(()=>z(E(["backgroundColor","gray-200"]),x(()=>E(["children",n.Children.toArray([n.createElement(Be,{id:"navigation-list",children:Array.from(a),["aria-label"]:"Navigation panel",selectionMode:"single",disallowEmptySelection:!0,selectedKeys:[i.SelectedDoc],onSelectionChange:h=>{const p=oe(h.values());let g,S;switch(v(p)?g=1:v(k(p))?(g=0,S=w(p)):g=1,g){case 0:{_d(u(jd(S)),1,1),s(!1),document.getElementById("content-host").scrollTo(0,0);break}}}})])]))))))))))),n.createElement(R,{id:"content-host",children:n.Children.toArray([(t=u(Hd({onUrlChanged:h=>{l(new qd(0,kl(h)))},application:r.exports.createElement(r.exports.Fragment,{},Wd(i.SelectedDoc))})),r.exports.createElement("div",{children:n.Children.toArray(Array.from(t))}))])})])})])})}function $d(e,t){let l;return n.createElement(Ht,me(f([(l=pn,["theme",l]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["id","spectrum-provider"],["children",n.Children.toArray([r.exports.createElement(Jd,{model:e,dispatch:t})])]])))}zo(Ho("app-root",Vo(Ud,(e,t)=>Kd(e),(e,t)=>$d(e,t))));
