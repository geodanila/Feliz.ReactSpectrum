import{r,a as kl,_ as Il,D as j,F as I,W as Vn,A as V,T as y,b as pt,I as f,B as P,V as M,c as Te,L as Nn,d as ht,e as Tl,f as ur,g as sn,h as Mn,i as un,j as Fl,k as Bl,l as Dl,m as Vl,n as Nl,o as Ml,p as Rl,q as mr,s as mn,P as Gt,R as Ze,t as X,C as z,u as dn,G as dr,v as zl,w as Fe,S as Ae,M as ee,x as te,K as pn,y as Rn,z as zn,E as Ht,H as Pn,J as ft,N as ie,O as pr,Q as Pl,U as Ll,X as _l,Y as Ge,Z as Qe,$ as L,a0 as ce,a1 as hn,a2 as gt,a3 as ne,a4 as et,a5 as xt,a6 as tt,a7 as nt,a8 as Ot,a9 as Wt,aa as qt,ab as Gl,ac as Hl,ad as Ol,ae as Z,af as Et,ag as se,ah as U,ai as Ln,aj as K,ak as hr,al as fr,am as gr,an as He,ao as Oe,ap as Wl,aq as ql,ar as jl,as as Ul,at as We,au as fn,av as Kl,aw as St,ax as gn,ay as jt,az as _n,aA as Gn,aB as Jl,aC as bt,aD as $l,aE as Yl,aF as Xl,aG as Zl,aH as Ql,aI as ei,aJ as ti,aK as ni}from"./vendor.cbcc365d.js";const ri=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=l(a);fetch(a.href,c)}};ri();function qe(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function li(e){return typeof e.CompareTo=="function"}function ii(e){return typeof e.Equals=="function"}function ai(e){return typeof e.GetHashCode=="function"}function xn(e,t){return Object.getPrototypeOf(e).constructor===Object.getPrototypeOf(t).constructor}class oi{constructor(t){this.iter=t}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this.iter.next();return this.current=t.value,!t.done}["System.Collections.IEnumerator.Reset"](){throw new Error("JS iterators cannot be reset")}Dispose(){}}function je(e){return typeof e.GetEnumerator=="function"?e.GetEnumerator():new oi(e[Symbol.iterator]())}function xr(e){return{[Symbol.iterator](){return this},next(){const t=e["System.Collections.IEnumerator.MoveNext"](),l=t?e["System.Collections.IEnumerator.get_Current"]():void 0;return{done:!t,value:l}}}}function Pe(e,t){let l=e.toString(10);for(;l.length<t;)l="0"+l;return l}function Er(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function Sr(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Ue{static id(t){return Ue.idMap.has(t)||Ue.idMap.set(t,++Ue.count),Ue.idMap.get(t)}}Ue.idMap=new WeakMap;Ue.count=0;function ci(e){let t=0,l=5381;const i=e.length;for(;t<i;)l=l*33^e.charCodeAt(t++);return l}function Hn(e){return e*2654435761|0}function Ut(e){return e.length===0?0:e.reduce((t,l)=>(t<<5)+t^l)}function si(e){return e.getTime()}function ui(e){const t=e.length,l=new Array(t);for(let i=0;i<t;i++)l[i]=yt(e[i]);return Ut(l)}function yt(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return Hn(e);case"string":return ci(e);default:{if(ai(e))return e.GetHashCode();if(qe(e))return ui(e);if(e instanceof Date)return si(e);if(Object.getPrototypeOf(e).constructor===Object){const t=Object.values(e).map(l=>yt(l));return Ut(t)}else return Hn(Ue.id(e))}}}function mi(e,t,l){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!l(e[i],t[i]))return!1;return!0}function br(e,t){return mi(e,t,Kt)}function di(e,t){const l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return!1;l.sort(),i.sort();for(let a=0;a<l.length;a++)if(l[a]!==i[a]||!Kt(e[l[a]],t[i[a]]))return!1;return!0}function Kt(e,t){return e===t?!0:e==null?t==null:t==null||typeof e!="object"?!1:ii(e)?e.Equals(t):qe(e)?qe(t)&&br(e,t):e instanceof Date?t instanceof Date&&yr(e,t)===0:Object.getPrototypeOf(e).constructor===Object&&di(e,t)}function yr(e,t){let l,i;return"offset"in e&&"offset"in t?(l=e.getTime(),i=t.getTime()):(l=e.getTime()+Er(e),i=t.getTime()+Er(t)),l===i?0:l<i?-1:1}function Cr(e,t){return e===t?0:e<t?-1:1}function pi(e,t,l){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let i=0,a=0;i<e.length;i++)if(a=l(e[i],t[i]),a!==0)return a;return 0}function Ar(e,t){return pi(e,t,rt)}function hi(e,t){const l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return l.length<i.length?-1:1;l.sort(),i.sort();for(let a=0,c=0;a<l.length;a++){const s=l[a];if(s!==i[a])return s<i[a]?-1:1;if(c=rt(e[s],t[s]),c!==0)return c}return 0}function rt(e,t){return e===t?0:e==null?t==null?0:-1:t==null?1:typeof e!="object"?e<t?-1:1:li(e)?e.CompareTo(t):qe(e)?qe(t)?Ar(e,t):-1:e instanceof Date?t instanceof Date?yr(e,t):-1:Object.getPrototypeOf(e).constructor===Object?hi(e,t):-1}function vr(e,t,l){return e(t,l)>0?t:l}function ue(e){const t={};for(const l of e)t[l[0]]=l[1];return t}const Jt=Symbol("curried");function On(e,t){if(t==null||t.length>1)return t;const l=(...i)=>{let a=t;for(let c=0;c<e;c++)a=a(i[c]);return a};return l[Jt]=t,l}function Wn(e,t,l){return i=>t===1?l(...e.concat([i])):Wn(e.concat([i]),t-1,l)}function wr(e,t){return t==null||t.length===1?t:Jt in t?t[Jt]:Wn([],e,t)}function fi(e,t,l){if(t!=null)if(Jt in t){t=t[Jt];for(let i=0;i<l.length;i++)t=t(l[i]);return t}else return Wn(l,e,t)}function gi(e){let t=0,l="[";for(const i of e){if(t===0)l+=Be(i);else if(t===100){l+="; ...";break}else l+="; "+Be(i);t++}return l+"]"}function Be(e,t=0){if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return gi(e);{const l=Object.getPrototypeOf(e).constructor;return l===Object&&t<10?"{ "+Object.entries(e).map(([i,a])=>i+" = "+Be(a,t+1)).join(`
  `)+" }":l.name}}return String(e)}function xi(e,t){if(t.length===0)return e;{let l="",i=!0;return t.length===1?(l=Be(t[0]),i=l.indexOf(" ")>=0):l=t.map(a=>Be(a)).join(", "),e+(i?" (":" ")+l+(i?")":"")}}class qn{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return xi(this.name,this.fields)}GetHashCode(){const t=this.fields.map(l=>yt(l));return t.splice(0,0,Hn(this.tag)),Ut(t)}Equals(t){return this===t?!0:xn(this,t)&&this.tag===t.tag?br(this.fields,t.fields):!1}CompareTo(t){return this===t?0:xn(this,t)?this.tag===t.tag?Ar(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function Ei(e){const t={},l=Object.keys(e);for(let i=0;i<l.length;i++)t[l[i]]=e[l[i]];return t}function Si(e){return"{ "+Object.entries(e).map(([t,l])=>t+" = "+Be(l)).join(`
  `)+" }"}function bi(e){const t=Object.values(e).map(l=>yt(l));return Ut(t)}function yi(e,t){if(e===t)return!0;if(xn(e,t)){const l=Object.keys(e);for(let i=0;i<l.length;i++)if(!Kt(e[l[i]],t[l[i]]))return!1;return!0}else return!1}function Ci(e,t){if(e===t)return 0;if(xn(e,t)){const l=Object.keys(e);for(let i=0;i<l.length;i++){const a=rt(e[l[i]],t[l[i]]);if(a!==0)return a}return 0}else return-1}class lt{toJSON(){return Ei(this)}toString(){return Si(this)}GetHashCode(){return bi(this)}Equals(t){return yi(this,t)}CompareTo(t){return Ci(this,t)}}const Ke=Symbol("numeric");function Ai(e){return typeof e=="number"||(e==null?void 0:e[Ke])}function vi(e,t){return typeof e=="number"?e<t?-1:e>t?1:0:e.CompareTo(t)}function wi(e,t){return typeof e=="number"?e*t:e[Ke]().multiply(t)}function ki(e,t){return typeof e=="number"?e.toFixed(t):e[Ke]().toFixed(t)}function kr(e,t){return typeof e=="number"?e.toPrecision(t):e[Ke]().toPrecision(t)}function Ir(e,t){return typeof e=="number"?e.toExponential(t):e[Ke]().toExponential(t)}function Tr(e){return typeof e=="number"?(Number(e)>>>0).toString(16):e[Ke]().toHex()}var G={GetHashCode(){return Ut([this.s,this.e].concat(this.c))},Equals(e){return!this.cmp(e)},CompareTo(e){return this.cmp(e)},[Ke](){const e=this;return{multiply:t=>e.mul(t),toPrecision:t=>e.toPrecision(t),toExponential:t=>e.toExponential(t),toFixed:t=>e.toFixed(t),toHex:()=>(Number(e)>>>0).toString(16)}}},Ii=28,Ti=1,it=1e6,Fr=1e6,Fi=-29,Bi=29,Di=!1,$t="[big.js] ",at=$t+"Invalid ",En=at+"decimal places",Vi=at+"rounding mode",Br=$t+"Division by zero",De=void 0,Ni=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Dr(){function e(t){var l=this;if(!(l instanceof e))return t===De?Dr():new e(t);if(t instanceof e)l.s=t.s,l.e=t.e,l.c=t.c.slice(),Mi(l);else{if(typeof t!="string"){if(e.strict===!0)throw TypeError(at+"number");t=t===0&&1/t<0?"-0":String(t)}Ri(l,t)}l.constructor=e}return e.prototype=G,e.DP=Ii,e.RM=Ti,e.NE=Fi,e.PE=Bi,e.strict=Di,e}function Mi(e){if(e.c.length>1&&!e.c[0]){let t=e.c.findIndex(l=>l);e.c=e.c.slice(t),e.e=e.e-t}}function Ri(e,t){var l,i,a;if(!Ni.test(t))throw Error(at+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(l=t.indexOf("."))>-1&&(t=t.replace(".","")),(i=t.search(/e/i))>0?(l<0&&(l=i),l+=+t.slice(i+1),t=t.substring(0,i)):l<0&&(l=t.length),a=t.length,i=0;i<l&&i<a&&t.charAt(i)=="0";)++i;if(i==a)e.c=[e.e=0];else for(e.e=l-i-1,e.c=[],l=0;i<a;)e.c[l++]=+t.charAt(i++);return e=Je(e,$e.DP+1,$e.RM),e}function Je(e,t,l,i){var a=e.c;if(l===De&&(l=$e.RM),l!==0&&l!==1&&l!==2&&l!==3)throw Error(Vi);if(t<1)i=l===3&&(i||!!a[0])||t===0&&(l===1&&a[0]>=5||l===2&&(a[0]>5||a[0]===5&&(i||a[1]!==De))),a.length=1,i?(e.e=e.e-t+1,a[0]=1):a[0]=e.e=0;else if(t<a.length){const c=a.findIndex((s,d)=>d>=t&&s>0)<0;if(i=l===1&&a[t]>=5||l===2&&(a[t]>5||a[t]===5&&(i||a[t+1]!==De||a[t-1]&1))||l===3&&(i||!c),a.length=t--,i)for(;++a[t]>9;)a[t]=0,t--||(++e.e,a.unshift(1));for(t=a.length;!a[--t];)a.pop()}return e}function Ct(e,t,l){var i=e.e,a=e.c.join(""),c=a.length;if(t)a=a.charAt(0)+(c>1?"."+a.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)a="0"+a;a="0."+a}else if(i>0)if(++i>c)for(i-=c;i--;)a+="0";else i<c&&(a=a.slice(0,i)+"."+a.slice(i));else c>1&&(a=a.charAt(0)+"."+a.slice(1));return e.s<0&&l?"-"+a:a}G.abs=function(){var e=new this.constructor(this);return e.s=1,e};G.cmp=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.c,c=e.c,s=i.s,d=e.s,h=i.e,p=e.e;if(!a[0]||!c[0])return a[0]?s:c[0]?-d:0;if(s!=d)return s;if(t=s<0,h!=p)return h>p^t?1:-1;for(d=Math.max(a.length,c.length),s=0;s<d;s++)if(h=s<a.length?a[s]:0,p=s<c.length?c[s]:0,h!=p)return h>p^t?1:-1;return 0};G.div=function(e){var t=this.constructor,l=new t(this),e=new t(e),i=l.c,a=e.c,c=l.s==e.s?1:-1,s=t.DP;if(s!==~~s||s<0||s>it)throw Error(En);if(!a[0])throw Error(Br);if(!i[0])return e.s=c,e.c=[e.e=0],e;var d,h,p,x,b,k=a.slice(),N=d=a.length,H=i.length,_=i.slice(0,d),Q=_.length,dt=e,Bn=dt.c=[],Dn=0,_t=s+(dt.e=l.e-e.e)+1;for(dt.s=c,c=_t<0?0:_t,k.unshift(0);Q++<d;)_.push(0);do{for(p=0;p<10;p++){if(d!=(Q=_.length))x=d>Q?1:-1;else for(b=-1,x=0;++b<d;)if(a[b]!=_[b]){x=a[b]>_[b]?1:-1;break}if(x<0){for(h=Q==d?a:k;Q;){if(_[--Q]<h[Q]){for(b=Q;b&&!_[--b];)_[b]=9;--_[b],_[Q]+=10}_[Q]-=h[Q]}for(;!_[0];)_.shift()}else break}Bn[Dn++]=x?p:++p,_[0]&&x?_[Q]=i[N]||0:_=[i[N]]}while((N++<H||_[0]!==De)&&c--);return!Bn[0]&&Dn!=1&&(Bn.shift(),dt.e--,_t--),Dn>_t&&Je(dt,_t,t.RM,_[0]!==De),dt};G.eq=function(e){return this.cmp(e)===0};G.gt=function(e){return this.cmp(e)>0};G.gte=function(e){return this.cmp(e)>-1};G.lt=function(e){return this.cmp(e)<0};G.lte=function(e){return this.cmp(e)<1};G.minus=G.sub=function(e){var t,l,i,a,c=this.constructor,s=new c(this),e=new c(e),d=s.s,h=e.s;if(d!=h)return e.s=-h,s.plus(e);var p=s.c.slice(),x=s.e,b=e.c,k=e.e;if(!p[0]||!b[0])return b[0]?e.s=-h:p[0]?e=new c(s):e.s=1,e;if(d=x-k){for((a=d<0)?(d=-d,i=p):(k=x,i=b),i.reverse(),h=d;h--;)i.push(0);i.reverse()}else for(l=((a=p.length<b.length)?p:b).length,d=h=0;h<l;h++)if(p[h]!=b[h]){a=p[h]<b[h];break}if(a&&(i=p,p=b,b=i,e.s=-e.s),(h=(l=b.length)-(t=p.length))>0)for(;h--;)p[t++]=0;for(h=t;l>d;){if(p[--l]<b[l]){for(t=l;t&&!p[--t];)p[t]=9;--p[t],p[l]+=10}p[l]-=b[l]}for(;p[--h]===0;)p.pop();for(;p[0]===0;)p.shift(),--k;return p[0]||(e.s=1,p=[k=0]),e.c=p,e.e=k,e};G.mod=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.s,c=e.s;if(!e.c[0])throw Error(Br);return i.s=e.s=1,t=e.cmp(i)==1,i.s=a,e.s=c,t?new l(i):(a=l.DP,c=l.RM,l.DP=l.RM=0,i=i.div(e),l.DP=a,l.RM=c,this.minus(i.times(e)))};G.plus=G.add=function(e){var t,l,i,a=this.constructor,c=new a(this),e=new a(e);if(c.s!=e.s)return e.s=-e.s,c.minus(e);var s=c.e,d=c.c,h=e.e,p=e.c;if(!d[0]||!p[0])return p[0]||(d[0]?e=new a(c):e.s=c.s),e;if(d=d.slice(),t=s-h){for(t>0?(h=s,i=p):(t=-t,i=d),i.reverse();t--;)i.push(0);i.reverse()}for(d.length-p.length<0&&(i=p,p=d,d=i),t=p.length,l=0;t;d[t]%=10)l=(d[--t]=d[t]+p[t]+l)/10|0;for(l&&(d.unshift(l),++h),t=d.length;d[--t]===0;)d.pop();return e.c=d,e.e=h,e};G.pow=function(e){var t=this.constructor,l=new t(this),i=new t("1"),a=new t("1"),c=e<0;if(e!==~~e||e<-Fr||e>Fr)throw Error(at+"exponent");for(c&&(e=-e);e&1&&(i=i.times(l)),e>>=1,!!e;)l=l.times(l);return c?a.div(i):i};G.prec=function(e,t){if(e!==~~e||e<1||e>it)throw Error(at+"precision");return Je(new this.constructor(this),e,t)};G.round=function(e,t){if(e===De)e=0;else if(e!==~~e||e<-it||e>it)throw Error(En);return Je(new this.constructor(this),e+this.e+1,t)};G.sqrt=function(){var e,t,l,i=this.constructor,a=new i(this),c=a.s,s=a.e,d=new i("0.5");if(!a.c[0])return new i(a);if(c<0)throw Error($t+"No square root");c=Math.sqrt(a+""),c===0||c===1/0?(t=a.c.join(""),t.length+s&1||(t+="0"),c=Math.sqrt(t),s=((s+1)/2|0)-(s<0||s&1),e=new i((c==1/0?"5e":(c=c.toExponential()).slice(0,c.indexOf("e")+1))+s)):e=new i(c+""),s=e.e+(i.DP+=4);do l=e,e=d.times(l.plus(a.div(l)));while(l.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return Je(e,(i.DP-=4)+e.e+1,i.RM)};G.times=G.mul=function(e){var t,l=this.constructor,i=new l(this),e=new l(e),a=i.c,c=e.c,s=a.length,d=c.length,h=i.e,p=e.e;if(e.s=i.s==e.s?1:-1,!a[0]||!c[0])return e.c=[e.e=0],e;for(e.e=h+p,s<d&&(t=a,a=c,c=t,p=s,s=d,d=p),t=new Array(p=s+d);p--;)t[p]=0;for(h=d;h--;){for(d=0,p=s+h;p>h;)d=t[p]+c[h]*a[p-h-1]+d,t[p--]=d%10,d=d/10|0;t[p]=d}for(d?++e.e:t.shift(),h=t.length;!t[--h];)t.pop();return e.c=t,e};G.toExponential=function(e,t){var l=this,i=l.c[0];if(e!==De){if(e!==~~e||e<0||e>it)throw Error(En);for(l=Je(new l.constructor(l),++e,t);l.c.length<e;)l.c.push(0)}return Ct(l,!0,!!i)};G.toFixed=function(e,t){var l=this,i=l.c[0];if(e!==De){if(e!==~~e||e<0||e>it)throw Error(En);for(l=Je(new l.constructor(l),e+l.e+1,t),e=e+l.e+1;l.c.length<e;)l.c.push(0)}return Ct(l,!1,!!i)};G.toJSON=G.toString=function(){var e=this,t=e.constructor;return Ct(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};G.toNumber=function(){var e=Number(Ct(this,!0,!0));if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error($t+"Imprecise conversion");return e};G.toPrecision=function(e,t){var l=this,i=l.constructor,a=l.c[0];if(e!==De){if(e!==~~e||e<1||e>it)throw Error(at+"precision");for(l=Je(new i(l),e,t);l.c.length<e;)l.c.push(0)}return Ct(l,e<=l.e||l.e<=i.NE||l.e>=i.PE,!!a)};G.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error($t+"valueOf disallowed");return Ct(e,e.e<=t.NE||e.e>=t.PE,!0)};var $e=Dr();new $e(0);new $e(1);new $e(-1);new $e("79228162514264337593543950335");new $e("-79228162514264337593543950335");var Vr;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(Vr||(Vr={}));function zi(e){return e===-2147483648?e:-e}var fe=null;try{fe=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Ve(e,t,l){this.low=e|0,this.high=t|0,this.unsigned=!!l}Ve.prototype.GetHashCode=function(){let e=this.unsigned?1:0;return e=(e<<5)+e^this.high,e=(e<<5)+e^this.low,e};Ve.prototype.Equals=function(e){return Ee(this,e)};Ve.prototype.CompareTo=function(e){return Zt(this,e)};Ve.prototype.toString=function(e){return Xt(this,e)};Ve.prototype.toJSON=function(){return Xt(this)};Ve.prototype[Ke]=function(){const e=this;return{multiply:t=>me(e,t),toPrecision:t=>String(e)+0 .toPrecision(t).substr(1),toExponential:t=>String(e)+0 .toExponential(t).substr(1),toFixed:t=>String(e)+0 .toFixed(t).substr(1),toHex:()=>Xt(e.unsigned?e:Zi($i(e),!0),16)}};Object.defineProperty(Ve.prototype,"__isLong__",{value:!0});function ve(e){return(e&&e.__isLong__)===!0}var Nr={},Mr={};function At(e,t){var l,i,a;return t?(e>>>=0,(a=0<=e&&e<256)&&(i=Mr[e],i)?i:(l=O(e,(e|0)<0?-1:0,!0),a&&(Mr[e]=l),l)):(e|=0,(a=-128<=e&&e<128)&&(i=Nr[e],i)?i:(l=O(e,e<0?-1:0,!1),a&&(Nr[e]=l),l))}function we(e,t){if(isNaN(e))return t?Xe:ke;if(t){if(e<0)return Xe;if(e>=Pr)return Gi}else{if(e<=-Lr)return ge;if(e+1>=Lr)return _i}return e<0?$(we(-e,t)):O(e%vt|0,e/vt|0,t)}function O(e,t,l){return new Ve(e,t,l)}var Sn=Math.pow;function Rr(e,t,l){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return ke;if(typeof t=="number"?(l=t,t=!1):t=!!t,l=l||10,l<2||36<l)throw RangeError("radix");var i=e.indexOf("-");if(i>0)throw Error("interior hyphen");if(i===0)return $(Rr(e.substring(1),t,l));for(var a=we(Sn(l,8)),c=ke,s=0;s<e.length;s+=8){var d=Math.min(8,e.length-s),h=parseInt(e.substring(s,s+d),l);if(d<8){var p=we(Sn(l,d));c=ct(me(c,p),we(h))}else c=me(c,a),c=ct(c,we(h))}return c.unsigned=t,c}function Ye(e,t){return typeof e=="number"?we(e,t):typeof e=="string"?Rr(e,t):O(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}var zr=1<<16,Pi=1<<24,vt=zr*zr,Pr=vt*vt,Lr=Pr/2,_r=At(Pi),ke=At(0),Xe=At(0,!0),Yt=At(1),Li=At(1,!0),Gr=At(-1),_i=O(4294967295|0,2147483647|0,!1),Gi=O(4294967295|0,4294967295|0,!0),ge=O(0,2147483648|0,!1);function wt(e){return e.unsigned?e.low>>>0:e.low}function bn(e){return e.unsigned?(e.high>>>0)*vt+(e.low>>>0):e.high*vt+(e.low>>>0)}function Xt(e,t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(ot(e))return"0";if(xe(e))if(Ee(e,ge)){var l=we(t),i=Le(e,l),a=kt(me(i,l),e);return Xt(i,t)+wt(a).toString(t)}else return"-"+Xt($(e),t);for(var c=we(Sn(t,6),e.unsigned),s=e,d="";;){var h=Le(s,c),p=wt(kt(s,me(h,c)))>>>0,x=p.toString(t);if(s=h,ot(s))return x+d;for(;x.length<6;)x="0"+x;d=""+x+d}}function ot(e){return e.high===0&&e.low===0}function xe(e){return!e.unsigned&&e.high<0}function Hr(e){return(e.low&1)==1}function Ee(e,t){return ve(t)||(t=Ye(t)),e.unsigned!==t.unsigned&&e.high>>>31==1&&t.high>>>31==1?!1:e.high===t.high&&e.low===t.low}function Or(e,t){return Zt(e,t)<0}function jn(e,t){return Zt(e,t)>0}function Hi(e,t){return Zt(e,t)>=0}function Zt(e,t){if(ve(t)||(t=Ye(t)),Ee(e,t))return 0;var l=xe(e),i=xe(t);return l&&!i?-1:!l&&i?1:e.unsigned?t.high>>>0>e.high>>>0||t.high===e.high&&t.low>>>0>e.low>>>0?-1:1:xe(kt(e,t))?-1:1}function $(e){return!e.unsigned&&Ee(e,ge)?ge:ct(Wi(e),Yt)}function ct(e,t){ve(t)||(t=Ye(t));var l=e.high>>>16,i=e.high&65535,a=e.low>>>16,c=e.low&65535,s=t.high>>>16,d=t.high&65535,h=t.low>>>16,p=t.low&65535,x=0,b=0,k=0,N=0;return N+=c+p,k+=N>>>16,N&=65535,k+=a+h,b+=k>>>16,k&=65535,b+=i+d,x+=b>>>16,b&=65535,x+=l+s,x&=65535,O(k<<16|N,x<<16|b,e.unsigned)}function kt(e,t){return ve(t)||(t=Ye(t)),ct(e,$(t))}function me(e,t){if(ot(e))return e.unsigned?Xe:ke;if(ve(t)||(t=Ye(t)),fe){var l=fe.mul(e.low,e.high,t.low,t.high);return O(l,fe.get_high(),e.unsigned)}if(ot(t))return e.unsigned?Xe:ke;if(Ee(e,ge))return Hr(t)?ge:ke;if(Ee(t,ge))return Hr(e)?ge:ke;if(xe(e))return xe(t)?me($(e),$(t)):$(me($(e),t));if(xe(t))return $(me(e,$(t)));if(Or(e,_r)&&Or(t,_r))return we(bn(e)*bn(t),e.unsigned);var i=e.high>>>16,a=e.high&65535,c=e.low>>>16,s=e.low&65535,d=t.high>>>16,h=t.high&65535,p=t.low>>>16,x=t.low&65535,b=0,k=0,N=0,H=0;return H+=s*x,N+=H>>>16,H&=65535,N+=c*x,k+=N>>>16,N&=65535,N+=s*p,k+=N>>>16,N&=65535,k+=a*x,b+=k>>>16,k&=65535,k+=c*p,b+=k>>>16,k&=65535,k+=s*h,b+=k>>>16,k&=65535,b+=i*x+a*p+c*h+s*d,b&=65535,O(N<<16|H,b<<16|k,e.unsigned)}function Le(e,t){if(ve(t)||(t=Ye(t)),ot(t))throw Error("division by zero");if(fe){if(!e.unsigned&&e.high===-2147483648&&t.low===-1&&t.high===-1)return e;var l=(e.unsigned?fe.div_u:fe.div_s)(e.low,e.high,t.low,t.high);return O(l,fe.get_high(),e.unsigned)}if(ot(e))return e.unsigned?Xe:ke;var i,a,c;if(e.unsigned){if(t.unsigned||(t=Ji(t)),jn(t,e))return Xe;if(jn(t,Ki(e,1)))return Li;c=Xe}else{if(Ee(e,ge)){if(Ee(t,Yt)||Ee(t,Gr))return ge;if(Ee(t,ge))return Yt;var s=Ui(e,1);return i=ji(Le(s,t),1),Ee(i,ke)?xe(t)?Yt:Gr:(a=kt(e,me(t,i)),c=ct(i,Le(a,t)),c)}else if(Ee(t,ge))return e.unsigned?Xe:ke;if(xe(e))return xe(t)?Le($(e),$(t)):$(Le($(e),t));if(xe(t))return $(Le(e,$(t)));c=ke}for(a=e;Hi(a,t);){i=Math.max(1,Math.floor(bn(a)/bn(t)));for(var d=Math.ceil(Math.log(i)/Math.LN2),h=d<=48?1:Sn(2,d-48),p=we(i),x=me(p,t);xe(x)||jn(x,a);)i-=h,p=we(i,e.unsigned),x=me(p,t);ot(p)&&(p=Yt),c=ct(c,p),a=kt(a,x)}return c}function Oi(e,t){if(ve(t)||(t=Ye(t)),fe){var l=(e.unsigned?fe.rem_u:fe.rem_s)(e.low,e.high,t.low,t.high);return O(l,fe.get_high(),e.unsigned)}return kt(e,me(Le(e,t),t))}function Wi(e){return O(~e.low,~e.high,e.unsigned)}function qi(e,t){return ve(t)||(t=Ye(t)),O(e.low&t.low,e.high&t.high,e.unsigned)}function ji(e,t){return ve(t)&&(t=wt(t)),(t&=63)==0?e:t<32?O(e.low<<t,e.high<<t|e.low>>>32-t,e.unsigned):O(0,e.low<<t-32,e.unsigned)}function Ui(e,t){return ve(t)&&(t=wt(t)),(t&=63)==0?e:t<32?O(e.low>>>t|e.high<<32-t,e.high>>t,e.unsigned):O(e.high>>t-32,e.high>=0?0:-1,e.unsigned)}function Ki(e,t){if(ve(t)&&(t=wt(t)),t&=63,t===0)return e;var l=e.high;if(t<32){var i=e.low;return O(i>>>t|l<<32-t,l>>>t,e.unsigned)}else return O(t===32?l:l>>>t-32,0,e.unsigned)}function Ji(e){return e.unsigned?e:O(e.low,e.high,!0)}function $i(e,t){return t?Yi(e):Xi(e)}function Yi(e){var t=e.high,l=e.low;return[l&255,l>>>8&255,l>>>16&255,l>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}function Xi(e){var t=e.high,l=e.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,l>>>24,l>>>16&255,l>>>8&255,l&255]}function Zi(e,t,l){return l?Qi(e,t):ea(e,t)}function Qi(e,t){return new Ve(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)}function ea(e,t){return new Ve(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}const Se=ct,be=me,_e=Le,ta=Oi,na=$,It=qi,yn=Zt,Y=O,Ne=wt;function J(e,t,l){let i=e,a=0;switch(l){case 0:i=e<<24>>24,a=i;break;case 4:i=e<<24>>>24;break;case 1:i=e<<16>>16,a=i;break;case 5:i=e<<16>>>16;break;case 2:i=e>>0,a=i;break;case 6:i=e>>>0;break}return O(i,a>>31,t)}function Un(e){const t=e<0;e=Math.abs(e);const l=~~(e/36e5),i=e%36e5/6e4;return(t?"-":"+")+Pe(l,2)+":"+Pe(i,2)}function Cn(e,t){const l=e.toISOString();return t==="first"?l.substring(0,l.indexOf("T")):l.substring(l.indexOf("T")+1,l.length-1)}function ra(e,t){if(t)return e.toISOString();{const l=e.kind==null?!0:e.kind===2;return Pe(e.getFullYear(),4)+"-"+Pe(e.getMonth()+1,2)+"-"+Pe(e.getDate(),2)+"T"+Pe(e.getHours(),2)+":"+Pe(e.getMinutes(),2)+":"+Pe(e.getSeconds(),2)+"."+Pe(e.getMilliseconds(),3)+(l?Un(e.getTimezoneOffset()*-6e4):"")}}function la(e,t){const l=e.toISOString();return l.substring(0,l.length-1)+Un(t)}function Wr(e,t,l){return t.replace(/(\w)\1*/g,i=>{let a=Number.NaN;switch(i.substring(0,1)){case"y":const c=l?e.getUTCFullYear():e.getFullYear();a=i.length<4?c%100:c;break;case"M":a=(l?e.getUTCMonth():e.getMonth())+1;break;case"d":a=l?e.getUTCDate():e.getDate();break;case"H":a=l?e.getUTCHours():e.getHours();break;case"h":const s=l?e.getUTCHours():e.getHours();a=s>12?s%12:s;break;case"m":a=l?e.getUTCMinutes():e.getMinutes();break;case"s":a=l?e.getUTCSeconds():e.getSeconds();break;case"f":a=l?e.getUTCMilliseconds():e.getMilliseconds();break}return Number.isNaN(a)?i:a<10&&i.length>1?"0"+a:""+a})}function ia(e,t){var l,i,a;const c=new Date(e.getTime()+((l=e.offset)!==null&&l!==void 0?l:0));if(typeof t!="string")return c.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+Un((i=e.offset)!==null&&i!==void 0?i:0);if(t.length===1)switch(t){case"D":case"d":return Cn(c,"first");case"T":case"t":return Cn(c,"second");case"O":case"o":return la(c,(a=e.offset)!==null&&a!==void 0?a:0);default:throw new Error("Unrecognized Date print format")}else return Wr(c,t,!0)}function aa(e,t){const l=e.kind===1;if(typeof t!="string")return l?e.toUTCString():e.toLocaleString();if(t.length===1)switch(t){case"D":case"d":return l?Cn(e,"first"):e.toLocaleDateString();case"T":case"t":return l?Cn(e,"second"):e.toLocaleTimeString();case"O":case"o":return ra(e,l);default:throw new Error("Unrecognized Date print format")}else return Wr(e,t,l)}function oa(e,t,l){return e.offset!=null?ia(e,t):aa(e,t)}function ca(e,t=0){if((t&~(1^2^16^256))!=0)throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");let l="g";return l+=t&1?"i":"",l+=t&2?"m":"",l+=t&16?"s":"",new RegExp(e,l)}function qr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function An(e,t,l=0){let i;return i=e instanceof RegExp?(i=e,e=t,i.lastIndex=l,i):i=ca(t,l),i.test(e)}const Qt=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,en=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function sa(e,t){return vi(e,t)<0}function jr(e){return{input:e,cont:da(e)}}function ua(e,t){let l=0,i=0,a="";en.lastIndex=0;let c=en.exec(e);for(;c;){const s=c.index+(c[1]||"").length;a+=e.substring(i,s).replace(/%%/g,"%");const[,,d,h,p,x]=c;a+=Ur(t[l++],d,h,p,x),i=en.lastIndex,en.lastIndex-=1,c=en.exec(e)}return a+=e.substring(i).replace(/%%/g,"%"),a}function ma(e,t){return typeof t=="string"?e(t):t.cont(e)}function Kn(e){return ma(t=>t,e)}function Ur(e,t,l,i,a){let c="";if(t=t||"",a=a||"",Ai(e))switch(a.toLowerCase()!=="x"&&(sa(e,0)?(e=wi(e,-1),c="-"):t.indexOf(" ")>=0?c=" ":t.indexOf("+")>=0&&(c="+")),i=i==null?null:parseInt(i,10),a){case"f":case"F":i=i!=null?i:6,e=ki(e,i);break;case"g":case"G":e=i!=null?kr(e,i):kr(e);break;case"e":case"E":e=i!=null?Ir(e,i):Ir(e);break;case"x":e=Tr(e);break;case"X":e=Tr(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=oa(e):e=Be(e);if(l=typeof l=="number"?l:parseInt(l,10),isNaN(l))e=c+e;else{const s=t.indexOf("0")>=0,d=t.indexOf("-")>=0,h=d||!s?" ":"0";h==="0"?(e=Jr(e,l-c.length,h,d),e=c+e):e=Jr(c+e,l,h,d)}return e}function Kr(e,t,l,i="",a=-1){return(...c)=>{let s=i;const d=t.slice(),h=l.slice();for(const p of c){const[,,x,b,k,N]=h[0];let H=b;if(a>=0)H=a,a=-1;else if(H==="*"){if(p<0)throw new Error("Non-negative number required");a=p;continue}s+=d[0],s+=Ur(p,x,H,k,N),d.splice(0,1),h.splice(0,1)}return h.length===0?(s+=d[0],e(s)):Kr(e,d,h,s,a)}}function da(e){return t=>{Qt.lastIndex=0;const l=[],i=[];let a=0,c=Qt.exec(e);for(;c;){const s=c.index+(c[1]||"").length;l.push(e.substring(a,s).replace(/%%/g,"%")),i.push(c),a=Qt.lastIndex,Qt.lastIndex-=1,c=Qt.exec(e)}return l.length===0?t(e.replace(/%%/g,"%")):(l.push(e.substring(a).replace(/%%/g,"%")),Kr(t,l,i))}}function pa(e,t){const l=e.lastIndexOf(t);return l>=0&&l===e.length-t.length}function ha(e){return typeof e!="string"||/^\s*$/.test(e)}function vn(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function Jr(e,t,l,i){l=l||" ",t=t-e.length;for(let a=0;a<t;a++)e=i?e+l:l+e;return e}function fa(e,t,l,i){if(l=typeof l=="number"?l:void 0,i=typeof i=="number"?i:0,l&&l<0)throw new Error("Count cannot be less than zero");if(l===0)return[];const a=(i&1)==1,c=(i&2)==2;t=t||[],t=t.filter(x=>x).map(qr),t=t.length>0?t:["\\s"];const s=[],d=new RegExp(t.join("|"),"g");let h=!0,p=0;do{const x=d.exec(e);if(x===null){const b=c?e.substring(p).trim():e.substring(p);(!a||b.length>0)&&s.push(b),h=!1}else{const b=c?e.substring(p,x.index).trim():e.substring(p,x.index);(!a||b.length>0)&&(l!=null&&s.length+1===l?(s.push(c?e.substring(p).trim():e.substring(p)),h=!1):s.push(b)),p=d.lastIndex}}while(h);return s}function ga(e,...t){return t.length===0?e.trimEnd():e.replace(new RegExp("["+qr(t.join(""))+"]+$"),"")}function $r(e,t,l){if(t+(l||0)>e.length)throw new Error("Invalid startIndex and/or length");return l!=null?e.substr(t,l):e.substr(t)}class Tt{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return yt(this.value)}Equals(t){return t==null?!1:Kt(this.value,t instanceof Tt?t.value:t)}CompareTo(t){return t==null?1:rt(this.value,t instanceof Tt?t.value:t)}}function q(e){return e==null||e instanceof Tt?new Tt(e):e}function Me(e){if(e==null)throw new Error("Option has no value");return e instanceof Tt?e.value:e}function xa(e){return e==null?[]:[Me(e)]}function tn(e,t){return e!=null?Me(e):t}function Ea(e,t){return t!=null?q(e(Me(t))):void 0}function Sa(e,t){return t!=null?e(Me(t)):void 0}function Yr(e,t){return typeof e=="function"?new e(t):new Array(t)}function Xr(e,t,l,i){const a=t|0;return e.fill(i,a,a+l)}function ba(e,t){const l=Yr(t,1);return l[0]=e,l}function Ft(e,t,l){if(e<0)throw new Error("The input must be non-negative\\nParameter name: count");const i=Yr(l,e);for(let a=0;a<=e-1;a++)i[a]=t(a);return i}function ya(e){return e.slice()}function Zr(e,t,l){if(t==null)return l==null;if(l==null)return!1;{let i=0,a=!0;const c=t.length|0,s=l.length|0;if(c>s)return!1;if(c<s)return!1;for(;i<c?a:!1;)a=e(t[i],l[i]),i=i+1|0;return a}}const Qr="List was empty";class ye extends lt{constructor(t,l){super();this.head=t,this.tail=l}toString(){return"["+vn("; ",this)+"]"}Equals(t){const l=this;return l===t?!0:((a,c)=>{e:for(;;){const s=a,d=c,h=[s.tail,d.tail];if(h[0]!=null)if(h[1]!=null){const p=h[0],x=h[1];if(Kt(s.head,d.head)){a=p,c=x;continue e}else return!1}else return!1;else return h[1]==null}})(l,t)}GetHashCode(){return((i,a,c)=>{e:for(;;){const s=i,d=a,h=c,p=h.tail;if(p!=null){const x=p;if(s>18)return d|0;i=s+1,a=(d<<1)+yt(h.head)+631*s,c=x;continue e}else return d|0}})(0,0,this)|0}toJSON(t){const l=this;return Array.from(l)}CompareTo(t){return((a,c)=>{e:for(;;){const s=a,d=c,h=[s.tail,d.tail];if(h[0]!=null)if(h[1]!=null){const p=h[0],x=h[1],b=rt(s.head,d.head)|0;if(b===0){a=p,c=x;continue e}else return b|0}else return 1;else return h[1]!=null?-1:0}})(this,t)|0}GetEnumerator(){return Aa(this)}[Symbol.iterator](){return xr(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return je(this)}}class Ca{constructor(t){this.xs=t,this.it=this.xs,this.current=null}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this,l=t.it.tail;if(l!=null){const i=l;return t.current=t.it.head,t.it=i,!0}else return!1}["System.Collections.IEnumerator.Reset"](){const t=this;t.it=t.xs,t.current=null}Dispose(){}}function Aa(e){return new Ca(e)}function de(){return new ye(null,void 0)}function Jn(e,t){return new ye(e,t)}function Bt(e){return e.tail==null}function el(e){return((l,i)=>{e:for(;;){const a=l,s=i.tail;if(s!=null){l=a+1,i=s;continue e}else return a|0}})(0,e)|0}function Dt(e){if(e.tail!=null)return e.head;throw new Error(Qr+"\\nParameter name: list")}function Ie(e){const t=e.tail;if(t!=null)return t;throw new Error(Qr+"\\nParameter name: list")}function o(){return de()}function $n(e,t){return Jn(e,t)}function u(e){return Jn(e,de())}function A(e){return Bt(e)}function tl(e){return el(e)}function v(e){return Dt(e)}function w(e){return Ie(e)}function Vt(e){const t=el(e)|0,l=Xr(new Array(t),0,t,null);return((a,c)=>{e:for(;;){const s=a,d=c;if(!Bt(d)){l[s]=Dt(d),a=s+1,c=Ie(d);continue e}break}})(0,e),l}function Yn(e,t,l){let i=t,a=l;for(;!Bt(a);)i=e(i,Dt(a)),a=Ie(a);return i}function va(e,t,l){return((a,c,s)=>{e:for(;;){const d=a,h=c,p=s;if(Bt(p))return h;a=d+1,c=e(d,h,Dt(p)),s=Ie(p);continue e}})(0,t,l)}function nl(e,t){Yn((l,i)=>{e(i)},void 0,t)}function wa(e,t){let l=t;for(let i=e.length-1;i>=0;i--)l=Jn(e[i],l);return l}function g(e){return wa(e,de())}function ae(e){let t,l;if(qe(e))return g(e);if(e instanceof ye)return e;{const i=de();let a=i;const c=je(e);try{for(;c["System.Collections.IEnumerator.MoveNext"]();){const h=c["System.Collections.Generic.IEnumerator`1.get_Current"]();a=(t=a,l=new ye(h,void 0),t.tail=l,l)}}finally{c.Dispose()}const s=a,d=de();return s.tail=d,Ie(i)}}function ka(e){const t=de();let l=t;const i=s=>{l=Yn((d,h)=>{const p=new ye(h,void 0);return d.tail=p,p},l,s)};if(qe(e))e.forEach(i);else if(e instanceof ye)nl(i,e);else{const s=je(e);try{for(;s["System.Collections.IEnumerator.MoveNext"]();)i(s["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{s.Dispose()}}const a=l,c=de();return a.tail=c,Ie(t)}function Ia(e,t){let l,i;const a=de();let c=a,s=t;for(;!Bt(s);){let p=e(Dt(s));for(;!Bt(p);)c=(l=c,i=new ye(Dt(p),void 0),l.tail=i,i),p=Ie(p);s=Ie(s)}const d=c,h=de();return d.tail=h,Ie(a)}function Ta(e,t){const l=de(),i=va((c,s,d)=>{const h=new ye(e(c,d),void 0);return s.tail=h,h},l,t),a=de();return i.tail=a,Ie(l)}function Fa(e,t){const l=de(),i=Yn((c,s)=>{const d=new ye(e(s),void 0);return c.tail=d,d},l,t),a=de();return i.tail=a,Ie(l)}function Ba(e){return Ta((t,l)=>[t,l],e)}function Da(e,t){console.error(e,t)}function rl(e,t,l){nl(i=>{try{i(t)}catch(a){e(a)}},l)}function ll(){return o()}function Va(e){return ka(e)}function Na(e){throw new Error(e)}const Ma="Enumeration already finished.",Ra="Enumeration has not started. Call MoveNext.",il="The input sequence has an insufficient number of elements.",za="Reset is not supported on this enumerator.";function Pa(){throw new Error(za)}function Xn(){throw new Error(Ra)}function Zn(){throw new Error(Ma)}class La{constructor(t){this.f=t}toString(){const t=this,l=4;let i=0,a="seq [";const c=je(t);try{for(;i<l?c["System.Collections.IEnumerator.MoveNext"]():!1;)i>0&&(a=a+"; "),a=a+Be(c["System.Collections.Generic.IEnumerator`1.get_Current"]()),i=i+1|0;return i===l&&(a=a+"; ..."),a+"]"}finally{c.Dispose()}}GetEnumerator(){return this.f()}[Symbol.iterator](){return xr(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return this.f()}}function _a(e){return new La(e)}class Ga{constructor(t,l,i){this.current=t,this.next=l,this.dispose=i}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current()}["System.Collections.IEnumerator.get_Current"](){return this.current()}["System.Collections.IEnumerator.MoveNext"](){return this.next()}["System.Collections.IEnumerator.Reset"](){Pa()}Dispose(){this.dispose()}}function wn(e,t,l){return new Ga(e,t,l)}function Ha(e){let t,l,i=!1,a=!1,c;const s=()=>{if(a=!0,l!=null){const d=l;try{d.Dispose()}finally{l=void 0}}if(t!=null){const d=t;try{d.Dispose()}finally{t=void 0}}};return wn(()=>(i?a&&Zn():Xn(),c!=null?Me(c):Zn()),()=>{let d;if(i||(i=!0),a)return!1;{let h;for(;h==null;){const p=[t,l];if(p[0]!=null)if(p[1]!=null){const x=p[1];if(x["System.Collections.IEnumerator.MoveNext"]())c=q(x["System.Collections.Generic.IEnumerator`1.get_Current"]()),h=!0;else try{x.Dispose()}finally{l=void 0}}else{const x=p[0];x["System.Collections.IEnumerator.MoveNext"]()?l=(d=x["System.Collections.Generic.IEnumerator`1.get_Current"](),je(d)):(s(),h=!1)}else t=je(e)}return Me(h)}},()=>{a||s()})}function Oa(e,t){return wn(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{t.Dispose()}finally{e()}})}function al(e,t,l){let i=!1,a,c=q(e());const s=()=>{if(c!=null){const h=Me(c);try{l(h)}finally{c=void 0}}},d=()=>{try{s()}finally{a=void 0}};return wn(()=>(i||Xn(),a!=null?Me(a):Zn()),()=>{if(i||(i=!0),c!=null){const h=Me(c);let p;try{p=t(h)}catch(x){throw d(),x}return p!=null?(a=p,!0):(d(),!1)}else return!1},s)}function Wa(e,t){let l,i=t;return wn(()=>{if(l!=null){const a=l[0];return l[1],a}else return Xn()},()=>(l=e(i),l!=null?(l[0],i=l[1],!0):!1),()=>{})}function qa(e,t){t==null&&Na(e)}function Nt(e){return _a(e)}function kn(e){return qa("source",e),je(e)}function E(e){return Nt(()=>je(e()))}function ol(e){return Nt(()=>Ha(e))}function ja(e,t){return Nt(()=>Wa(e,t))}function In(){return E(()=>new Array(0))}function S(e){return E(()=>ba(e))}function C(e){return qe(e)?g(e):e instanceof ye?e:ae(e)}function Ua(e,t,l){return Nt(()=>al(e,t,l))}function Ka(e,t,l){return Nt(()=>{let i=-1;return al(e,a=>(i=i+1|0,t(i,a)),l)})}function R(e,t){return ol([e,t])}function Ja(e,t,l){const i=kn(l);try{let a=t;for(;i["System.Collections.IEnumerator.MoveNext"]();)a=e(a,i["System.Collections.Generic.IEnumerator`1.get_Current"]());return a}finally{i.Dispose()}}function $a(e,t){Ja((l,i)=>{e(i)},void 0,t)}function nn(e,t){return Ua(()=>kn(t),l=>l["System.Collections.IEnumerator.MoveNext"]()?q(e(l["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,l=>{l.Dispose()})}function Ya(e,t){return Nt(()=>{const l=kn(t);try{for(let i=1;i<=e;i++)if(!l["System.Collections.IEnumerator.MoveNext"]())throw new Error(il+"\\nParameter name: source");return Oa(()=>{},l)}catch(i){throw l.Dispose(),i}})}function Xa(e,t){return Ka(()=>kn(t),(l,i)=>{if(l<e){if(i["System.Collections.IEnumerator.MoveNext"]())return q(i["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(il+"\\nParameter name: source")}else return},l=>{l.Dispose()})}function cl(e,t){return E(()=>ol(nn(e,t)))}class sl extends lt{constructor(t,l){super();this.bound=t|0,this.digits=l}}function ul(e,t){e:for(;;){const l=e,i=t;if(i===0)return 1;if(i%2==0){e=l*l,t=~~(i/2);continue e}else return l*ul(l*l,~~(i/2))|0}}Y(2013265921,0,!1);Y(2013265921,0,!0);const Za=29;Ft(Za-1,e=>ul(2,e),Int32Array);function Qn(e){return e.bound}function rn(e,t){return e.digits[t]}function er(e,t){return J(rn(e,t),!1,2)}function Tn(e,t,l){e.digits[t]=l|0}function tr(e,t){e:for(;;){const l=e,i=t;if(i===0)return Y(1,0,!1);if(i%2==0){e=be(l,l),t=~~(i/2);continue e}else return be(l,tr(be(l,l),~~(i/2)))}}function Mt(e,t){e:for(;;){const l=e,i=t;if(i===0)return 1;if(i%2==0){e=l*l,t=~~(i/2);continue e}else return l*Mt(l*l,~~(i/2))|0}}function Qa(e){let t=0;for(let l=0;l<=e.bound-1;l++)t=e.digits[l]+(t<<3)|0;return t|0}const Rt=24,st=16777216,Re=Y(16777216,0,!1),zt=Y(16777215,0,!1);Y(16777215,0,!0);function ut(e){return new sl(e,new Int32Array(e))}function eo(e){return new sl(e.bound,ya(e.digits))}function ze(e){const l=((i,a)=>{e:for(;;){const c=i,s=a;if(s===-1?!0:c[s]!==0)return s+1|0;i=c,a=s-1;continue e}})(e.digits,e.bound-1)|0;return e.bound=l|0,e}const ml=2,dl=3;function ln(e){const t=(e<0?0:e)|0;if(t<st){const l=ut(1);return l.digits[0]=t|0,ze(l)}else{const l=ut(ml);for(let i=0;i<=ml-1;i++)l.digits[i]=~~(t/Mt(st,i))%st|0;return ze(l)}}function to(e){const t=yn(e,Y(0,0,!1))<0?Y(0,0,!1):e,l=ut(dl);for(let i=0;i<=dl-1;i++)l.digits[i]=~~Ne(ta(_e(t,tr(Re,i)),Re))|0;return ze(l)}function no(e){if(e.bound===1)return e.digits[0]|0;{let t=0;for(let l=e.bound-1;l>=0;l--)t=e.digits[l]+st*t|0;return t|0}}const ro=ln(1),lo=ln(0);function oe(e){return e.bound-1}function re(e){return e.bound===0}function pl(e,t){return e.bound===t.bound?((i,a,c)=>{e:for(;;){const s=i,d=a,h=c;if(h===-1)return!0;if(s[h]===d[h]){i=s,a=d,c=h-1;continue e}else return!1}})(e.digits,t.digits,e.bound-1):!1}function io(e,t,l,i){return e.bound+t<l.bound+i?-1:e.bound+t>l.bound+t?1:((c,s,d)=>{e:for(;;){const h=c,p=s,x=d;if(x===-1)return 0;{const b=(x<t?0:h[x-t])|0,k=(x<i?0:p[x-i])|0;if(b===k){c=h,s=p,d=x-1;continue e}else return b<k?-1:1}}})(e.digits,l.digits,e.bound+t-1)|0}function ao(e,t){return e.bound<t.bound?-1:e.bound>t.bound?1:((i,a,c)=>{e:for(;;){const s=i,d=a,h=c;if(h===-1)return 0;if(s[h]===d[h]){i=s,a=d,c=h-1;continue e}else return s[h]<d[h]?-1:1}})(e.digits,t.digits,e.bound-1)|0}function hl(e,t){return ao(e,t)===-1}function oo(e,t){const l=ut(2),i=be(J(e,!1,2),J(t,!1,2));return Tn(l,0,~~Ne(It(i,zt))),Tn(l,1,~~Ne(_e(i,Re))),ze(l)}function fl(e,t,l){e:for(;;){const i=e,a=t,c=l;if(yn(a,Y(0,0,!1))>0){const s=Se(er(i,c),a);Tn(i,c,~~Ne(It(s,zt))),e=i,t=_e(s,Re),l=c+1;continue e}break}}function gl(e,t){const l=Qn(e)|0,i=ut(l+1),a=J(t,!1,2);let c=Y(0,0,!1);for(let s=0;s<=l-1;s++){const d=Se(Se(c,er(i,s)),be(er(e,s),a));Tn(i,s,~~Ne(It(d,zt))),c=_e(d,Re)}return fl(i,c,l),ze(i)}function co(e,t){const l=ut(e.bound+t.bound),i=l.digits;for(let a=0;a<=e.bound-1;a++){const c=J(e.digits[a],!1,2);let s=Y(0,0,!1),d=a;for(let h=0;h<=t.bound-1;h++){const p=J(t.digits[h],!1,2),x=Se(Se(J(i[d],!1,2),s),be(c,p));i[d]=~~Ne(It(x,zt))|0,s=_e(x,Re),d=d+1|0}fl(l,s,d)}return ze(l)}function so(e,t){const l=Qn(e)===1,i=Qn(t)===1;return(l?i:!1)?oo(rn(e,0),rn(t,0)):l?gl(t,rn(e,0)):i?gl(e,rn(t,0)):co(e,t)}class uo extends lt{constructor(t,l,i,a,c,s,d){super();this.bigL=t|0,this.twoToBigL=l|0,this.k=i|0,this.bigK=a|0,this.bigN=c|0,this.split=s|0,this.splits=d}}function pe(e,t,l,i){return new uo(e,Mt(2,e),t,l,i,~~(Rt/e),Ft(~~(Rt/e),a=>Mt(2,e*a),Int32Array))}const mo=[pe(1,28,268435456,268435456),pe(2,26,67108864,134217728),pe(3,24,16777216,50331648),pe(4,22,4194304,16777216),pe(5,20,1048576,5242880),pe(6,18,262144,1572864),pe(7,16,65536,458752),pe(8,14,16384,131072),pe(9,12,4096,36864),pe(10,10,1024,10240),pe(11,8,256,2816),pe(12,6,64,768),pe(13,4,16,208)];Ft(Rt,e=>Mt(2,e)-1,Int32Array);Ft(Rt,e=>Mt(2,e),Int32Array);Ft(Rt,e=>tr(Y(2,0,!1),e));~~(mo[0].bigN/Rt);function po(e,t){return so(e,t)}function ho(e,t,l,i){const a=[e.digits,oe(e)],c=a[0],s=[l.digits,oe(l)],d=s[1]|0,h=s[0],p=J(t,!1,2);let x=0,b=be(p,J(h[0],!1,2));for(;yn(b,Y(0,0,!1))>0?!0:x<d;){if(x>a[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let k=~~Ne(It(b,zt)),N=_e(b,Re);k<=c[x+i]?c[x+i]=c[x+i]-k|0:(c[x+i]=c[x+i]+(st-k)|0,N=Se(N,Y(1,0,!1))),x<d?b=Se(N,be(p,J(h[x+1],!1,2))):b=N,x=x+1|0}ze(e)}function fo(e,t,l,i){const a=[e.digits,oe(e)],c=a[0],s=[l.digits,oe(l)],d=s[1]|0,h=s[0],p=J(t,!1,2);let x=0,b=be(p,J(h[0],!1,2));for(;yn(b,Y(0,0,!1))>0?!0:x<d;){if(x>a[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let k=~~Ne(It(b,zt)),N=_e(b,Re);k<st-c[x+i]?c[x+i]=c[x+i]+k|0:(c[x+i]=k-(st-c[x+i])|0,N=Se(N,Y(1,0,!1))),x<d?b=Se(N,be(p,J(h[x+1],!1,2))):b=N,x=x+1|0}ze(e)}function go(e,t,l){const i=[oe(t),oe(e)],a=i[1]|0,c=i[0]|0;if(a<c+l)return 0;{const s=[t.digits,e.digits],d=s[1],h=s[0],p=(c===0?a===l?~~(d[l]/h[0]):~~Ne(_e(Se(be(J(d[a],!1,2),Re),J(d[a-1],!1,2)),J(h[0],!1,2))):a===c+l?~~(d[a]/(h[c]+1)):~~Ne(_e(Se(be(J(d[a],!1,2),Re),J(d[a-1],!1,2)),Se(J(h[c],!1,2),Y(1,0,!1)))))|0;return p===0?io(t,l,e,0)!==1?1:0:p|0}}function xo(e,t){if(re(t))throw new Error;if(oe(e)<oe(t))return[lo,e];{const l=eo(e),i=ut(oe(e)-oe(t)+1+1);let a=oe(e);const c=oe(t)|0;let s=a-c,d=!1;for(;!d;){const h=go(l,t,s)|0;h>0?(ho(l,h,t,s),fo(i,h,ro,s)):(d=h===0?s===0:!1,d||(a===c+s?s=s-1|0:(s=s-1|0,a=a-1|0)))}return[ze(i),ze(l)]}}ln(2);function nr(e){return ln(e)}function Eo(e){return to(e)}function xl(e){const t=oe(e)|0,l=(c,s,d)=>{e:for(;;){const h=c,p=s,x=d;if(oe(x)>t)return $n([p,x],h);c=$n([p,x],h),s=p+1,d=po(x,x);continue e}},i=(c,s,d,h)=>{e:for(;;){const p=c,x=s,b=d,k=h;if(A(k)){const N=no(b)|0;return(p?N===0:!1)?x:$n(Sr(N),x)}else{const N=w(k),H=xo(b,v(k)[1]),_=H[1],Q=H[0];if(p?re(Q):!1){c=p,s=x,d=_,h=N;continue e}else{c=p,s=i(!1,x,_,N),d=Q,h=N;continue e}}}},a=i(!0,o(),e,l(o(),0,ln(10)));return A(a)?"0":vn("",Vt(a))}function So(e){return e.bound<=1}function El(e){const t=e,l=0;return l<t.bound?t.digits[l]|0:0}class Ce extends lt{constructor(t,l){super();this.signInt=t|0,this.v=l}toString(){const t=this;switch(mt(t)|0){case-1:return re(W(t))?"0":"-"+xl(W(t));case 0:return"0";case 1:return xl(W(t));default:throw new Error("signs should be +/- 1 or 0")}}Equals(t){const l=this;return t instanceof Ce?Sl(l,t):!1}GetHashCode(){return Co(this)|0}toJSON(t){return Be(this)}CompareTo(t){const l=this;if(t instanceof Ce)return yo(l,t)|0;throw new Error("the objects are not comparable\\nParameter name: obj")}}function rr(e,t){return new Ce(e,t)}(()=>{Ce.smallLim=4096,Ce.smallPosTab=Ft(Ce.smallLim,e=>nr(e)),Ce.one=ir(1),Ce.two=ir(2),Ce.zero=ir(0)})();function lr(e){return(So(e)?El(e)<Ce.smallLim:!1)?Ce.smallPosTab[El(e)]:e}function mt(e){return e.signInt}function W(e){return e.v}function Sl(e,t){const l=[mt(e),mt(t)];let i;switch(l[0]===-1?l[1]===-1?i=1:l[1]===0?i=8:l[1]===1?i=3:i=9:l[0]===0?l[1]===-1?i=6:l[1]===0?i=4:l[1]===1?i=5:i=9:l[0]===1?l[1]===-1?i=2:l[1]===0?i=7:l[1]===1?i=0:i=9:i=9,i){case 0:return pl(W(e),W(t));case 1:return pl(W(e),W(t));case 2:return re(W(e))?re(W(t)):!1;case 3:return re(W(e))?re(W(t)):!1;case 4:return!0;case 5:return re(W(t));case 6:return re(W(t));case 7:return re(W(e));case 8:return re(W(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function bo(e,t){const l=[mt(e),mt(t)];let i;switch(l[0]===-1?l[1]===-1?i=1:l[1]===0?i=8:l[1]===1?i=3:i=9:l[0]===0?l[1]===-1?i=6:l[1]===0?i=4:l[1]===1?i=5:i=9:l[0]===1?l[1]===-1?i=2:l[1]===0?i=7:l[1]===1?i=0:i=9:i=9,i){case 0:return hl(W(e),W(t));case 1:return hl(W(t),W(e));case 2:return!1;case 3:return re(W(e))?!re(W(t)):!0;case 4:return!1;case 5:return!re(W(t));case 6:return!1;case 7:return!1;case 8:return!re(W(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function yo(e,t){return bo(e,t)?-1:Sl(e,t)?0:1}function Co(e){return mt(e)===0?1:mt(e)+Qa(W(e))|0}function ir(e){return e>=0?rr(1,lr(nr(e))):e===-2147483648?rr(-1,lr(Eo(na(J(e,!1,2))))):rr(-1,lr(nr(zi(e))))}function Ao(e,t,l,i){const a=rt(e,l)|0;if(a===0)throw new Error("The step of a range cannot be zero");const c=a>0;return s=>{const d=rt(s,t)|0;return((c?d<=0:!1)?!0:c?!1:d>=0)?[s,i(s,e)]:void 0}}function vo(e,t,l,i,a){const c=Ao(t,l,i,a);return E(()=>ja(c,e))}function wo(e,t,l){return vo(e,t,l,0,(i,a)=>i+a)}class Pt extends qn{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["Writable","ReadWritable"]}}class ko{constructor(t){this.state=new Pt(0,Xr(new Array(vr((l,i)=>Cr(l,i),t,10)),0,vr((l,i)=>Cr(l,i),t,10),null),0)}}function Io(e){return new ko(e)}function To(e){const t=e.state;if(t.tag===1){const l=t.fields[1]|0,i=t.fields[2]|0,a=t.fields[0],c=(i+1)%a.length|0;return c===l?e.state=new Pt(0,a,l):e.state=new Pt(1,a,l,c),q(a[i])}else return}function Fo(e,t){const l=e.state;if(l.tag===1){const i=l.fields[1]|0,a=l.fields[2]|0,c=l.fields[0];c[i]=t;const s=(i+1)%c.length|0;s===a?e.state=new Pt(1,Bo(e,a,c),c.length,0):e.state=new Pt(1,c,s,a)}else{const i=l.fields[1]|0,a=l.fields[0];a[i]=t;const c=(i+1)%a.length|0;e.state=new Pt(1,a,c,i)}}function Bo(e,t,l){return Array.from(E(()=>R(Ya(t,l),E(()=>R(Xa(t,l),E(()=>cl(i=>S(null),wo(0,1,l.length))))))))}class bl extends lt{constructor(t,l,i,a,c,s,d){super();this.init=t,this.update=l,this.subscribe=i,this.view=a,this.setState=c,this.onError=s,this.syncDispatch=d}}function Do(e,t,l){return new bl(e,t,i=>ll(),l,(i,a)=>{l(i,a)},i=>{Da(i[0],i[1])},On(2,i=>i))}function Vo(e,t){return new bl(t.init,t.update,t.subscribe,t.view,e,t.onError,t.syncDispatch)}function No(e){return wr(2,e.view)}function Mo(e,t){const l=t.init(e),i=l[0],a=Io(10);let c=!1,s=i;const d=p=>{if(c)Fo(a,p);else{c=!0;let x=q(p);for(;x!=null;){const b=Me(x);try{const k=t.update(b,s),N=k[0];t.setState(N,h),rl(H=>{t.onError([Kn(jr("Error in command while handling: %A"))(b),H])},h,k[1]),s=N}catch(k){t.onError([Kn(jr("Unable to process the message: %A"))(b),k])}x=To(a)}c=!1}},h=fi(1,t.syncDispatch,[d]);t.setState(i,h),rl(p=>{t.onError(["Error intitializing:",p])},h,Va(g([(()=>{try{return t.subscribe(i)}catch(p){return t.onError(["Unable to subscribe:",p]),ll()}})(),l[1]])))}function Ro(e){Mo(void 0,e)}class zo extends lt{constructor(t,l,i){super();this.model=t,this.render=l,this.equal=i}}class Po extends r.exports.Component{constructor(t){super(t)}shouldComponentUpdate(t,l){const i=this;return!i.props.equal(i.props.model,t.model)}render(){return this.props.render()}}function Lo(e,t,l,i){return r.exports.createElement(Po,new zo(l,()=>t(l,i),e))}function _o(e,t,l){return Vo((i,a)=>{kl.exports.render(e((c,s)=>c===s,On(2,No(l)),i,a),document.getElementById(t))},l)}function Go(e,t){return _o((l,i,a,c)=>Lo(l,i,a,c),e,t)}const n=Il,Ho=e=>{r.exports.useEffect(()=>{const t=e();return()=>{t.Dispose()}})},Oo=(e,t)=>{r.exports.useEffect(()=>{const l=e();return()=>{l.Dispose()}},t)},Wo=e=>{r.exports.useLayoutEffect(()=>{const t=e();return()=>{t.Dispose()}})},qo=Ho,jo=Oo,Uo=Wo;function Ko(e,t,l,i){const a=n.memo(e,On(2,tn(wr(2,l),null)));return $a(c=>{e.displayName=c},xa(t)),c=>n.createElement(a,Jo(i,c))}function Jo(e,t){if(e==null)return t;{const l=e;return t.key=l(t),t}}function an(e){return{Dispose(){e()}}}function ar(e){qo(e)}function $o(e){Uo(t=>(e(),an(()=>{})))}function Yo(e){Xo(e,[])}function Xo(e,t){jo(l=>(e(),an(()=>{})),t)}function Zo(e,t){return n.useCallback(e,tn(t,[]))}function or(e){return n.useRef(e)}function Qo(){return or(void 0)}function le(e,t){return n.useMemo(e,tn(t,[]))}function ec(e,t,l){return Ko(e,void 0,l,t)}function Fn(e){const t=or(e),l=Zo(i=>t.current(i),[]);return $o(()=>{t.current=e}),l}function F(e){return n.useState(e)}class on extends qn{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["FSharp","Bash"]}}function cn(e){const t=e.text,l=e.lang,i=Qo();Yo(()=>{const c=i.current;c==null?console.warn("Failed to find element"):Prism.highlightAllUnder(c)});const a=l.tag===1?"language-bash":"language-fsharp";return r.exports.createElement("pre",{ref:i,className:a,children:n.Children.toArray([r.exports.createElement("code",{children:[t]})])})}function tc(e){const t=e.elements;return n.createElement(Vn,{UNSAFE_className:"example-result",children:n.Children.toArray(Array.from(t))})}function D(e){const t=e.examples,l=e.description,i=e.title;return r.exports.createElement(r.exports.Fragment,{},...C(E(()=>R(S(r.exports.createElement("h1",{className:"title example-group-title",children:n.Children.toArray([i])})),E(()=>R(S(r.exports.createElement("p",{className:"example-group-description",children:n.Children.toArray(Array.from(l))})),E(()=>cl(a=>R(S(a[1]),E(()=>a[0]!==tl(t)-1?R(S(r.exports.createElement("br",{})),E(()=>R(S(n.createElement(j,{size:"S"})),E(()=>S(r.exports.createElement("br",{})))))):In())),Ba(t)))))))))}function m(e){const t=e.elements,l=e.description,i=e.code,a=e.title;return r.exports.createElement(r.exports.Fragment,{},...C(E(()=>R(S(r.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray([a])})),E(()=>R(nn(c=>c,l),E(()=>S(n.createElement(I,{direction:"column",gap:"size-100",children:n.Children.toArray([r.exports.createElement(cn,{lang:new on(0),text:i}),r.exports.createElement(tc,{elements:t})])})))))))))}const yl=g(["blue-400","blue-500","blue-600","blue-700","celery-400","celery-500","celery-600","celery-700","chartreuse-400","chartreuse-500","chartreuse-600","chartreuse-700","fuchsia-400","fuchsia-500","fuchsia-600","fuchsia-700","gray-50","gray-75","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","green-400","green-500","green-600","green-700","indigo-400","indigo-500","indigo-600","indigo-700","informative","magenta-400","magenta-500","magenta-600","magenta-700","negative","notice","orange-400","orange-500"]);function nc(){return r.exports.createElement(r.exports.Fragment,{},r.exports.createElement("h1",{className:"title",children:n.Children.toArray(["Feliz.ReactSpectrum",r.exports.createElement("a",{href:"https://www.nuget.org/packages/Feliz.ReactSpectrum/",children:n.Children.toArray([r.exports.createElement("img",{alt:"NuGet badge",src:"https://img.shields.io/nuget/v/Feliz.ReactSpectrum.svg?style=square"})])})])}),r.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray(["Feliz-style Fable bindings for Adobe's React Spectrum components"])}),n.createElement(j,{size:"M",marginTop:10,marginBottom:10}),r.exports.createElement("p",{children:n.Children.toArray(["Fable bindings for ",r.exports.createElement("a",{href:"https://react-spectrum.adobe.com/react-spectrum/",children:n.Children.toArray(["Adobe's React Spectrum components"])}),", written in the excelent ",r.exports.createElement("a",{href:"https://github.com/Zaid-Ajaj/Feliz",children:n.Children.toArray(["Feliz DSL style"])}),"."])}),r.exports.createElement("h2",{className:"subtitle paragraph",children:n.Children.toArray(["Features"])}),r.exports.createElement("ul",{className:"bullet-list",children:n.Children.toArray([r.exports.createElement("li",{children:["Covers all React Spectrum components as of version 3.15.1"]}),r.exports.createElement("li",{children:["Fully erased - the generated JS is zero size"]}),r.exports.createElement("li",{children:n.Children.toArray(["Compatible with the ",r.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:n.Children.toArray(["Femto dotnet tool"])})])})])}))}function rc(){return r.exports.createElement(r.exports.Fragment,{},r.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray(["Using the Femto dotnet tool"])}),r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["The easiest way to install the package is using the ",r.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:n.Children.toArray(["Femto dotnet tool"])})," since this will also take care of installing the correct npm dependencies."])}),r.exports.createElement(cn,{lang:new on(1),text:"dotnet femto install Feliz.ReactSpectrum"}),r.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray(["Manual installation"])}),r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["You can install the package using NuGet:"])}),r.exports.createElement(cn,{lang:new on(1),text:"dotnet add package Feliz.ReactSpectrum"}),r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["Or in case you use Paket:"])}),r.exports.createElement(cn,{lang:new on(1),text:"dotnet paket add Feliz.ReactSpectrum"}),r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["Don't forget to also install the npm dependencies:"])}),r.exports.createElement(cn,{lang:new on(1),text:`npm install @adobe/react-spectrum
npm install @spectrum-icons/illustrations
npm install @spectrum-icons/workflow`}))}function lc(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ActionButton [
    ActionButton.content "Press me"
    ActionButton.onPress (fun ev ->
        Browser.Dom.window.alert("I was clicked!")
    )
]`,description:o(),elements:u(n.createElement(V,{children:"Press me",onPress:e=>{window.alert(q("I was clicked!"))}}))})}function ic(){let e;return r.exports.createElement(m,{title:"Adding an icon",code:`Spectrum.ActionButton [
    ActionButton.children [
        Spectrum.Icon.Airplane [
            Icon.size IconSize.M
        ]
        Spectrum.Text "I have an airplane icon"
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]`,description:o(),elements:u(n.createElement(V,{children:n.Children.toArray([(e=Tl,n.createElement(e,{size:"M"})),n.createElement(y,{children:n.Children.toArray(["I have an airplane icon"])})]),onPress:t=>{console.log("Event: ",t)}}))})}function ac(){let e;return r.exports.createElement(m,{title:"Icon-only",code:`Spectrum.ActionButton [
    ActionButton.ariaLabel "Edit"
    ActionButton.children [
        Spectrum.Icon.Edit [
            Icon.size IconSize.S
        ]
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]`,description:o(),elements:u(n.createElement(V,{["aria-label"]:"Edit",children:n.Children.toArray([(e=ur,n.createElement(e,{size:"S"}))]),onPress:t=>{console.log("Event: ",t)}}))})}function oc(){const e=g(["ActionButtons allow users to perform an action. They\u2019re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren\u2019t meant to draw a lot of attention.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionButton.html"})," for more details."]);return r.exports.createElement(D,{title:"ActionButton",description:e,examples:g([r.exports.createElement(lc,null),r.exports.createElement(ic,null),r.exports.createElement(ac,null)])})}function cc(){return r.exports.createElement(m,{title:"Default example",code:`let action, setAction = React.useState("")

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
]`,description:o(),elements:C(E(()=>{let e;const t=F("");return S(r.exports.createElement(r.exports.Fragment,{},n.createElement(pt,{onAction:t[1],children:[n.createElement(f,{key:"add",title:"Add"}),n.createElement(f,{key:"delete",title:"Delete"}),n.createElement(f,{key:"edit",title:"Edit"})]}),(e=`Action ${t[0]}`,r.exports.createElement("p",{children:[e]}))))}))})}function sc(){return r.exports.createElement(m,{title:"Multiple selection",code:`let selected, setSelected = React.useState([ "list" ])

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
]`,description:o(),elements:C(E(()=>{let e,t;const l=F(u("list")),i=l[0];return S(r.exports.createElement(r.exports.Fragment,{},n.createElement(pt,ue(g([["selectionMode","multiple"],["selectedKeys",Array.from(i)],(e=a=>{a instanceof ye&&l[1](a)},["onSelectionChange",a=>{const c=a;e(c==="all"?"all":ae(c.values()))}]),["children",[n.createElement(f,{key:"grid",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Grid view"])})])}),n.createElement(f,{key:"list",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["List view"])})])}),n.createElement(f,{key:"gallery",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Gallery view"])})])})]]]))),(t=Kn(ua("Current selection (controller): %A%P()",[Vt(i)])),n.createElement(y,{children:n.Children.toArray([t])}))))}))})}function uc(){let e,t,l;return r.exports.createElement(m,{title:"With icons",code:`Spectrum.ActionGroup [
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
]`,description:o(),elements:u(n.createElement(pt,{children:[n.createElement(f,{key:"edit2",children:n.Children.toArray([(e=sn,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Edit"])})])}),n.createElement(f,{key:"copy2",children:n.Children.toArray([(t=Mn,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Copy"])})])}),n.createElement(f,{key:"delete2",children:n.Children.toArray([(l=un,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Delete"])})])})]}))})}function mc(){return r.exports.createElement(m,{title:"Using an item template",code:`let items = [
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
]`,description:o(),elements:C(E(()=>{let e;const t=g([{label:"React",name:"_React"},{label:"Add",name:"_Add"},{label:"Delete",name:"_Delete"}]);return S(n.createElement(pt,ue(g([["items",Array.from(t)],["isEmphasized",!0],["selectionMode","single"],(e=l=>{let i,a;switch(l instanceof ye?A(l)?i=1:A(w(l))?(i=0,a=v(l)):i=1:i=1,i){case 0:{console.log("Selection: ",a);break}}},["onSelectionChange",l=>{const i=l;e(i==="all"?"all":ae(i.values()))}]),["children",l=>n.createElement(f,{key:l.name,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([l.label])})])})]]))))}))})}function dc(){let e,t,l,i,a;return r.exports.createElement(m,{title:"Collapsing buttons",code:`Spectrum.ActionGroup [
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
]`,description:o(),elements:u(n.createElement(pt,{overflowMode:"collapse",maxWidth:250,children:[n.createElement(f,{key:"edit",textValue:"Edit",children:n.Children.toArray([(e=sn,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Edit"])})])}),n.createElement(f,{key:"copy",textValue:"Copy",children:n.Children.toArray([(t=Mn,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Copy"])})])}),n.createElement(f,{key:"delete",textValue:"Delete",children:n.Children.toArray([(l=un,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Delete"])})])}),n.createElement(f,{key:"move",textValue:"Move",children:n.Children.toArray([(i=Fl,n.createElement(i,{})),n.createElement(y,{children:n.Children.toArray(["Move"])})])}),n.createElement(f,{key:"duplicate",textValue:"Duplicate",children:n.Children.toArray([(a=Bl,n.createElement(a,{})),n.createElement(y,{children:n.Children.toArray(["Duplicate"])})])})]}))})}function pc(){let e,t,l,i,a;return r.exports.createElement(m,{title:"Collapsed with multiple selection",code:`Spectrum.ActionGroup [
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
]`,description:o(),elements:u(n.createElement(pt,{["aria-label"]:"Text style",overflowMode:"collapse",selectionMode:"multiple",isEmphasized:!0,summaryIcon:(e=Dl,n.createElement(e,{})),maxWidth:100,children:[n.createElement(f,{key:"bold",textValue:"Bold",children:n.Children.toArray([(t=Vl,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Bold"])})])}),n.createElement(f,{key:"italic",textValue:"Italic",children:n.Children.toArray([(l=Nl,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Italic"])})])}),n.createElement(f,{key:"underline",textValue:"Underline",children:n.Children.toArray([(i=Ml,n.createElement(i,{})),n.createElement(y,{children:n.Children.toArray(["Underline"])})])}),n.createElement(f,{key:"strike",textValue:"Strikethrough",children:n.Children.toArray([(a=Rl,n.createElement(a,{})),n.createElement(y,{children:n.Children.toArray(["Strikethrough"])})])})]}))})}function hc(){const e=g(["An ActionGroup is a grouping of ActionButtons that are related to one another.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html"})," for more details."]);return r.exports.createElement(D,{title:"ActionGroup",description:e,examples:g([r.exports.createElement(cc,null),r.exports.createElement(sc,null),r.exports.createElement(uc,null),r.exports.createElement(mc,null),r.exports.createElement(dc,null),r.exports.createElement(pc,null)])})}function fc(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Button [
    Button.variant ButtonVariant.CTA
    Button.content "Save"
]`,description:o(),elements:u(n.createElement(P,{variant:"cta",children:"Save"}))})}function gc(){let e;return r.exports.createElement(m,{title:"Icon + label",code:`Spectrum.Button [
    Button.variant ButtonVariant.Primary
    Button.children [
        Spectrum.Icon.Bell []
        Spectrum.Text "Icon + Label"
    ]
]`,description:o(),elements:u(n.createElement(P,{variant:"primary",children:n.Children.toArray([(e=mr,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Icon + Label"])})])}))})}function xc(){return r.exports.createElement(m,{title:"Button variants",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{direction:"row",alignItems:"center",gap:"size-100",children:n.Children.toArray([n.createElement(P,{variant:"cta",children:"CTA"}),n.createElement(P,{variant:"primary",children:"Primary"}),n.createElement(P,{variant:"secondary",children:"Secondary"}),n.createElement(P,{variant:"negative",children:"Negative"}),n.createElement(M,{backgroundColor:"green-400",padding:20,children:n.Children.toArray([n.createElement(P,{variant:"overBackground",children:"Over background"})])})])}))})}function Ec(){const e=g(["Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Button.html"})," for more details."]);return r.exports.createElement(D,{title:"Button",description:e,examples:g([r.exports.createElement(fc,null),r.exports.createElement(gc,null),r.exports.createElement(xc,null)])})}function Sc(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ButtonGroup [
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
]`,description:o(),elements:u(r.exports.createElement(Te,o(),n.createElement(P,{variant:"secondary",children:"No, thanks"}),n.createElement(P,{variant:"secondary",children:"Remind me later"}),n.createElement(P,{variant:"primary",children:"Rate now"})))})}function bc(){return r.exports.createElement(m,{title:"Orientation",code:`Spectrum.ButtonGroup [
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
]`,description:o(),elements:u(n.createElement(Te,{orientation:"vertical",children:n.Children.toArray([n.createElement(P,{variant:"secondary",children:"No, thanks"}),n.createElement(P,{variant:"secondary",children:"Remind me later"}),n.createElement(P,{variant:"primary",children:"Rate now"})])}))})}function yc(){return r.exports.createElement(m,{title:"Alignment",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{gap:10,direction:"column",alignItems:"start",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["align = 'end'"])}),n.createElement(Te,{orientation:"vertical",align:"end",children:n.Children.toArray([n.createElement(P,{variant:"secondary",children:"No, thanks"}),n.createElement(P,{variant:"secondary",children:"Remind me later"}),n.createElement(P,{variant:"primary",children:"Rate now"})])}),n.createElement(y,{children:n.Children.toArray(["align = 'center'"])}),n.createElement(Te,{orientation:"vertical",align:"center",children:n.Children.toArray([n.createElement(P,{variant:"secondary",children:"No, thanks"}),n.createElement(P,{variant:"secondary",children:"Remind me later"}),n.createElement(P,{variant:"primary",children:"Rate now"})])})])}))})}function Cc(){const e=g(["ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html"})," for more details."]);return r.exports.createElement(D,{title:"ButtonGroup",description:e,examples:g([r.exports.createElement(Sc,null),r.exports.createElement(bc,null),r.exports.createElement(yc,null)])})}function Ac(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.And
    LogicButton.children [
        Spectrum.Text "And"
    ]
]`,description:o(),elements:u(n.createElement(Nn,{variant:"and",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["And"])})])}))})}function vc(){return r.exports.createElement(m,{title:"Or variant",code:`Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.Or
    LogicButton.children [
        Spectrum.Text "Or"
    ]
]`,description:o(),elements:u(n.createElement(Nn,{variant:"or",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Or"])})])}))})}function wc(){return r.exports.createElement(m,{title:"Events",code:`let variant, setVariant = React.useState(LogicButtonVariant.Or)

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
]`,description:o(),elements:C(E(()=>{const e=F("or"),t=e[0];return S(n.createElement(Nn,{variant:t,onPress:l=>{e[1](t==="or"?"and":"or")},children:t}))}))})}function kc(){const e=g(["A LogicButton displays an operator within a boolean logic sequence.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/LogicButton.html"})," for more details."]);return r.exports.createElement(D,{title:"LogicButton",description:e,examples:g([r.exports.createElement(Ac,null),r.exports.createElement(vc,null),r.exports.createElement(wc,null)])})}function Ic(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ToggleButton [
    Spectrum.Text "Pin"
]`,description:o(),elements:u(r.exports.createElement(ht,o(),n.createElement(y,{children:n.Children.toArray(["Pin"])})))})}function Tc(){let e;return r.exports.createElement(m,{title:"Using icons",code:`Spectrum.ToggleButton [
    ToggleButton.children [
        Spectrum.Icon.PinOff []
        Spectrum.Text "Pin"
    ]
]`,description:o(),elements:u(n.createElement(ht,{children:n.Children.toArray([(e=mn,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Pin"])})])}))})}function Fc(){return r.exports.createElement(m,{title:"Events",code:`let isSelected, setSelected = React.useState(false)

Spectrum.ToggleButton [
    ToggleButton.isEmphasized true
    ToggleButton.isSelected isSelected
    ToggleButton.onChange setSelected
    ToggleButton.ariaLabel "Pin"
    ToggleButton.children [
        Spectrum.Icon.PinOff []
        Spectrum.Text $"Is selected: {isSelected}"
    ]
]`,description:o(),elements:C(E(()=>{let e,t;const l=F(!1),i=l[0];return S(n.createElement(ht,{isEmphasized:!0,isSelected:i,onChange:a=>{setTimeout(()=>{l[1](a)},0)},["aria-label"]:"Pin",children:n.Children.toArray([(e=mn,n.createElement(e,{})),(t=`Is selected: ${i}`,n.createElement(y,{children:n.Children.toArray([t])}))])}))}))})}function Bc(){let e,t;return r.exports.createElement(m,{title:"Static color",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{wrap:!0,gap:"size-250",children:n.Children.toArray([n.createElement(M,{backgroundColor:"static-seafoam-700",padding:20,children:n.Children.toArray([n.createElement(ht,{staticColor:"white",children:n.Children.toArray([(e=mn,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Pin"])})])})])}),n.createElement(M,{backgroundColor:"static-yellow-400",padding:20,children:n.Children.toArray([n.createElement(ht,{staticColor:"black",isQuiet:!0,defaultSelected:!0,children:n.Children.toArray([(t=mn,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Pin"])})])})])})])}))})}function Dc(){const e=g(["ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ToggleButton.html"})," for more details."]);return r.exports.createElement(D,{title:"ToggleButton",description:e,examples:g([r.exports.createElement(Ic,null),r.exports.createElement(Tc,null),r.exports.createElement(Fc,null),r.exports.createElement(Bc,null)])})}function Vc(){let e;return r.exports.createElement(m,{title:"Using the Provider component",code:`Spectrum.Provider [
    Provider.defaultTheme
    Provider.colorScheme ColorScheme.Light
    Provider.locale "en-US"
    Provider.scale Scale.Medium
    Provider.children [
        Spectrum.ActionButton [
            ActionButton.content "Spectrum button"
        ]
    ]
]`,description:o(),elements:u(n.createElement(Gt,ue(g([(e=dn,["theme",e]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["children",n.Children.toArray([n.createElement(V,{children:"Spectrum button"})])]]))))})}function Nc(){let e;const t=u(r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["You can override the default screen breakpoints as follows. Resize the browser window to see the effects."])}));return r.exports.createElement(m,{title:"Provider screen breakpoints",code:`Spectrum.Provider [
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
]`,description:t,elements:u(n.createElement(Gt,ue(g([(e=dn,["theme",e]),["colorScheme","light"],["breakpoints",{L:1024,M:640,S:void 0}],["children",n.Children.toArray([n.createElement(M,{height:"size-2000",backgroundColor:{base:q("celery-600"),S:void 0,M:q("blue-600"),L:q("magenta-600")}})])]]))))})}function Mc(){let e;return r.exports.createElement(m,{title:"Color scheme",code:`Spectrum.Provider [
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
`,description:o(),elements:u(n.createElement(Gt,ue(g([(e=dn,["theme",e]),["colorScheme","dark"],["children",n.Children.toArray([n.createElement(M,{padding:20,children:n.Children.toArray([n.createElement(V,{children:"Dark mode!"})])})])]]))))})}function Rc(){const e=u(r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["You can use a Provider component to define common properties for a group of components within. For example, you can disable multiple components as follows:"])}));return r.exports.createElement(m,{title:"Property groups",code:`// Note: You still need to define an app-level Provider for themeing.
Spectrum.Flex [
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
]`,description:e,elements:u(n.createElement(I,{direction:"column",gap:"size-100",alignItems:"start",children:n.Children.toArray([n.createElement(Gt,{isDisabled:!0,children:n.Children.toArray([n.createElement(Ze,{label:"Favorite animal",children:n.Children.toArray([n.createElement(X,{value:"dogs",children:"Dogs"}),n.createElement(X,{value:"cats",children:"Cats"}),n.createElement(X,{value:"horses",children:"Horses"})])}),n.createElement(z,{children:n.Children.toArray(["I agree"])}),n.createElement(P,{variant:"primary",children:"Submit"})])})])}))})}function zc(){const e=g(["Provider is the container for all React Spectrum applications. It defines the theme, locale, and other application level settings, and can also be used to provide common properties to a group of components.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Provider.html"})," for more details."]);return r.exports.createElement(D,{title:"Provider",description:e,examples:g([r.exports.createElement(Vc,null),r.exports.createElement(Nc,null),r.exports.createElement(Mc,null),r.exports.createElement(Rc,null)])})}function Pc(){return r.exports.createElement(m,{title:"Vertical stack",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{direction:"column",width:"size-2000",gap:"size-100",children:n.Children.toArray([n.createElement(M,{backgroundColor:"celery-600",height:"size-800"}),n.createElement(M,{backgroundColor:"blue-600",height:"size-800"}),n.createElement(M,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function Lc(){return r.exports.createElement(m,{title:"Horizontal stack",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{direction:"row",height:"size-800",gap:"size-100",children:n.Children.toArray([n.createElement(M,{backgroundColor:"celery-600",width:"size-800"}),n.createElement(M,{backgroundColor:"blue-600",width:"size-800"}),n.createElement(M,{backgroundColor:"magenta-600",width:"size-800"})])}))})}function _c(){const e=u(r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["This example shows how you can nest flexboxes to create more complicated layouts. It also uses the flex prop on one of the children to expand it to fill the repaining space."])}));return r.exports.createElement(m,{title:"Nesting",code:`Spectrum.Flex [
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
]`,description:e,elements:u(n.createElement(I,{direction:"column",gap:"size-100",children:n.Children.toArray([n.createElement(M,{backgroundColor:"celery-600",height:"size-800"}),n.createElement(I,{direction:"row",height:"size-3000",gap:"size-100",children:n.Children.toArray([n.createElement(M,{backgroundColor:"indigo-600",width:"size-2000"}),n.createElement(M,{backgroundColor:"seafoam-600",flex:!0})])}),n.createElement(M,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function Gc(){const e=u(r.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["This example shows how to enable wrapping of items into multiple rows. Resize your browser window to see the items reflow."])}));return r.exports.createElement(m,{title:"Wrapping",code:`Spectrum.Flex [
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
]`,description:e,elements:u(n.createElement(I,{direction:"row",gap:"size-100",wrap:!0,children:n.Children.toArray(Array.from(C(E(()=>nn(t=>n.createElement(M,{key:t,backgroundColor:t,width:"size-800",height:"size-800"}),yl)))))}))})}function Hc(){return r.exports.createElement(m,{title:"Alignment",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{direction:"column",gap:"size-100",alignItems:"center",children:n.Children.toArray([n.createElement(M,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),n.createElement(M,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),n.createElement(M,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])}))})}function Oc(){return r.exports.createElement(m,{title:"Justification",code:`Spectrum.View [
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
]`,description:o(),elements:u(n.createElement(M,{height:"size-3000",borderWidth:"thin",borderColor:"dark",children:n.Children.toArray([n.createElement(I,{direction:"column",gap:"size-100",justifyContent:"center",height:"100%",children:n.Children.toArray([n.createElement(M,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),n.createElement(M,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),n.createElement(M,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])})])}))})}function Wc(){const e=g(["A layout container using flexbox. Provides Spectrum dimension values, and supports the gap property to define consistent spacing between items.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Flex.html"})," for more details."]);return r.exports.createElement(D,{title:"Flex",description:e,examples:g([r.exports.createElement(Pc,null),r.exports.createElement(Lc,null),r.exports.createElement(_c,null),r.exports.createElement(Gc,null),r.exports.createElement(Hc,null),r.exports.createElement(Oc,null)])})}function qc(){return r.exports.createElement(m,{title:"Explicit grid",code:`Spectrum.Grid [
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
]`,description:o(),elements:u(n.createElement(dr,{areas:Vt(g(["header header","sidebar content","footer footer"])),columns:Vt(g(["1fr","3fr"])),rows:Vt(g(["size-1000","auto","size-1000"])),height:"size-6000",width:"80%",gap:"size-100",children:n.Children.toArray([n.createElement(M,{backgroundColor:"celery-600",gridArea:"header"}),n.createElement(M,{backgroundColor:"blue-600",gridArea:"sidebar"}),n.createElement(M,{backgroundColor:"purple-600",gridArea:"content"}),n.createElement(M,{backgroundColor:"magenta-600",gridArea:"footer"})])}))})}function jc(){let e;return r.exports.createElement(m,{title:"Implicit grid",code:`Spectrum.Grid [
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
]`,description:o(),elements:u(n.createElement(dr,{height:"size-6000",width:"100%",columns:(e=zl,e("auto-fit","size-800")),autoRows:"size-800",justifyContent:"center",gap:"size-200",children:n.Children.toArray(Array.from(C(E(()=>nn(t=>n.createElement(M,{key:t,backgroundColor:t}),yl)))))}))})}function Uc(){const e=g(["A layout container using CSS grid. Supports Spectrum dimensions as values to ensure consistent and adaptive sizing and spacing.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Grid.html"})," for more details."]);return r.exports.createElement(D,{title:"Grid",description:e,examples:g([r.exports.createElement(qc,null),r.exports.createElement(jc,null)])})}function Kc(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Alignment"
    ListBox.children [
        Spectrum.Item "Left"
        Spectrum.Item "Middle"
        Spectrum.Item "Right"
    ]
]`,description:o(),elements:u(n.createElement(Fe,{width:"size-2400",["aria-label"]:"Alignment",children:[n.createElement(f,{children:"Left"}),n.createElement(f,{children:"Middle"}),n.createElement(f,{children:"Right"})]}))})}function Jc(){return r.exports.createElement(m,{title:"Content example",code:`let options = [
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
]`,description:o(),elements:C(E(()=>{const e=g([{id:1,name:"Aardvark"},{id:2,name:"Cat"},{id:3,name:"Dog"},{id:4,name:"Kangaroo"},{id:5,name:"Koala"},{id:6,name:"Penguin"},{id:7,name:"Snake"},{id:8,name:"Turtle"},{id:9,name:"Wombat"}]),t=F(void 0),l=t[1],i=t[0];return S(r.exports.createElement(r.exports.Fragment,{},...C(E(()=>R(S(n.createElement(Fe,{width:"size-2400",["aria-label"]:"Animals",items:Array.from(e),children:a=>n.createElement(f,{children:a.name}),selectionMode:"single",onSelectionChange:a=>{const c=ae(a.values());let s,d;switch(A(c)?s=1:A(w(c))?(s=0,d=v(c)):s=1,s){case 0:{l(d);break}case 1:{l(void 0);break}}}})),E(()=>{const a=i==null?"None selected":`Animal id: ${i}`;return S(r.exports.createElement("p",{children:[a]}))}))))))}))})}function $c(){return r.exports.createElement(m,{title:"Selection example",code:`let options = [
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
]`,description:o(),elements:C(E(()=>{const e=g([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),t=F(u("Bison"));return S(n.createElement(I,{direction:"row",gap:"size-350",children:n.Children.toArray([n.createElement(Fe,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),defaultSelectedKeys:["Bison","Koala"],width:"size-2400",children:l=>n.createElement(f,{key:l.name,textValue:l.name,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([l.name])})])})}),n.createElement(Fe,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],onSelectionChange:l=>{t[1](ae(l.values()))},width:"size-2400",children:l=>n.createElement(f,{key:l.name,textValue:l.name,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([l.name])})])})})])}))}))})}function Yc(){return r.exports.createElement(m,{title:"Sections",code:`Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Pick your favorite"
    ListBox.selectionMode SelectionMode.Single
    ListBox.children [
        Spectrum.Section [
            Section.title "Animals"
            Section.children [
                Spectrum.Item [
                    Item.key "Aardvark"
                    Item.content "Aardvark"
                ]
                Spectrum.Item [
                    Item.key "Kangaroo"
                    Item.content "Kangaroo"
                ]
                Spectrum.Item [
                    Item.key "Snake"
                    Item.content "Snake"
                ]
            ]
        ]
        Spectrum.Section [
            Section.title "People"
            Section.children [
                Spectrum.Item [
                    Item.key "Danni"
                    Item.content "Danni"
                ]
                Spectrum.Item [
                    Item.key "Devon"
                    Item.content "Devon"
                ]
                Spectrum.Item [
                    Item.key "Ross"
                    Item.content "Ross"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Fe,{width:"size-2400",["aria-label"]:"Pick your favorite",selectionMode:"single",children:[n.createElement(Ae,{title:"Animals",children:[n.createElement(f,{key:"Aardvark",children:"Aardvark"}),n.createElement(f,{key:"Kangaroo",children:"Kangaroo"}),n.createElement(f,{key:"Snake",children:"Snake"})]}),n.createElement(Ae,{title:"People",children:[n.createElement(f,{key:"Danni",children:"Danni"}),n.createElement(f,{key:"Devon",children:"Devon"}),n.createElement(f,{key:"Ross",children:"Ross"})]})]}))})}function Xc(){return r.exports.createElement(m,{title:"Dynamic items",code:`let options = [
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
]`,description:o(),elements:C(E(()=>{const e=g([{animals:[{id:2,name:"Koala"},{id:3,name:"Kangaroo"},{id:4,name:"Platypus"}],name:"Australian"},{animals:[{id:6,name:"Bald Eagle"},{id:7,name:"Bison"},{id:8,name:"Skunk"}],name:"American"}]),t=F(o());return S(n.createElement(Fe,{["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],selectionMode:"single",onSelectionChange:l=>{t[1](ae(l.values()))},width:"size-2400",children:l=>n.createElement(Ae,{key:l.name,title:l.name,items:Array.from(l.animals),children:i=>{let a;return n.createElement(f,{key:(a=i.id,Sr(a)),textValue:i.name,children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray([i.name])})])})}})}))}))})}function Zc(){return r.exports.createElement(m,{title:"Events",code:`let frequency, setFrequency = React.useState<string list>([])

React.fragment [
    Spectrum.ListBox [
        ListBox.ariaLabel "Choose frequency"
        ListBox.selectionMode SelectionMode.Single
        ListBox.onSelectionChange setFrequency
        ListBox.width (DimValue.Size Size2400)
        ListBox.children [
            Spectrum.Item [
                Item.key "Rarely"
                Item.content "Rarely"
            ]
            Spectrum.Item [
                Item.key "Sometimes"
                Item.content "Sometimes"
            ]
            Spectrum.Item [
                Item.key "Always"
                Item.content "Always"
            ]
        ]
    ]
    Html.p $"You selected: {match frequency with | [ value ] -> value | _ -> System.String.Empty}"
]`,description:o(),elements:C(E(()=>{let e;const t=F(o()),l=t[0];return S(r.exports.createElement(r.exports.Fragment,{},n.createElement(Fe,{["aria-label"]:"Choose frequency",selectionMode:"single",onSelectionChange:i=>{t[1](ae(i.values()))},width:"size-2400",children:[n.createElement(f,{key:"Rarely",children:"Rarely"}),n.createElement(f,{key:"Sometimes",children:"Sometimes"}),n.createElement(f,{key:"Always",children:"Always"})]}),(e=`You selected: ${A(l)?"":A(w(l))?v(l):""}`,r.exports.createElement("p",{children:[e]}))))}))})}function Qc(){let e,t,l;return r.exports.createElement(m,{title:"Complex items",code:`Spectrum.ListBox [
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
]`,description:o(),elements:u(n.createElement(Fe,{width:"size-2400",["aria-label"]:"Options",selectionMode:"single",children:[n.createElement(Ae,{title:"Permissions",children:[n.createElement(f,{textValue:"Read",children:n.Children.toArray([(e=pr,n.createElement(e,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Read"])}),n.createElement(y,{children:n.Children.toArray(["Read only"]),slot:"description"})])}),n.createElement(f,{textValue:"Write",children:n.Children.toArray([(t=sn,n.createElement(t,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Write"])}),n.createElement(y,{children:n.Children.toArray(["Read and Write Only"]),slot:"description"})])}),n.createElement(f,{textValue:"Admin",children:n.Children.toArray([(l=Pl,n.createElement(l,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Admin"])}),n.createElement(y,{children:n.Children.toArray(["Full access"]),slot:"description"})])})]})]}))})}function es(){return r.exports.createElement(m,{title:"Disabled keys",code:`Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Pick your favorite"
    ListBox.disabledKeys [ "Snake"; "Ross" ]
    ListBox.selectionMode SelectionMode.Single
    ListBox.children [
        Spectrum.Section [
            Section.title "Animals"
            Section.children [
                Spectrum.Item [
                    Item.key "Aardvark"
                    Item.content "Aardvark"
                ]
                Spectrum.Item [
                    Item.key "Kangaroo"
                    Item.content "Kangaroo"
                ]
                Spectrum.Item [
                    Item.key "Snake"
                    Item.content "Snake"
                ]
            ]
        ]
        Spectrum.Section [
            Section.title "People"
            Section.children [
                Spectrum.Item [
                    Item.key "Danni"
                    Item.content "Danni"
                ]
                Spectrum.Item [
                    Item.key "Devon"
                    Item.content "Devon"
                ]
                Spectrum.Item [
                    Item.key "Ross"
                    Item.content "Ross"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(Fe,{width:"size-2400",["aria-label"]:"Pick your favorite",disabledKeys:["Snake","Ross"],selectionMode:"single",children:[n.createElement(Ae,{title:"Animals",children:[n.createElement(f,{key:"Aardvark",children:"Aardvark"}),n.createElement(f,{key:"Kangaroo",children:"Kangaroo"}),n.createElement(f,{key:"Snake",children:"Snake"})]}),n.createElement(Ae,{title:"People",children:[n.createElement(f,{key:"Danni",children:"Danni"}),n.createElement(f,{key:"Devon",children:"Devon"}),n.createElement(f,{key:"Ross",children:"Ross"})]})]}))})}function ts(){const e=g(["A list of options that can allow selection of one or more.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ListBox.html"})," for more details."]);return r.exports.createElement(D,{title:"ListBox",description:e,examples:g([r.exports.createElement(Kc,null),r.exports.createElement(Jc,null),r.exports.createElement($c,null),r.exports.createElement(Yc,null),r.exports.createElement(Xc,null),r.exports.createElement(Zc,null),r.exports.createElement(Qc,null),r.exports.createElement(es,null)])})}function ns(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.MenuTrigger [
    Spectrum.ActionButton [
        ActionButton.content "Edit"
    ]
    Spectrum.Menu [
        Menu.onAction (fun x -> Browser.Dom.window.alert(x))
        Menu.children [
            Spectrum.Item [
                Item.key "cut"
                Item.content "Cut"
            ]
            Spectrum.Item [
                Item.key "copy"
                Item.content "Copy"
            ]
            Spectrum.Item [
                Item.key "paste"
                Item.content "Paste"
            ]
            Spectrum.Item [
                Item.key "replace"
                Item.content "Replace"
            ]
        ]
    ]
]`,description:o(),elements:u(r.exports.createElement(ee,o(),n.createElement(V,{children:"Edit"}),n.createElement(te,{onAction:e=>{window.alert(q(e))},children:[n.createElement(f,{key:"cut",children:"Cut"}),n.createElement(f,{key:"copy",children:"Copy"}),n.createElement(f,{key:"paste",children:"Paste"}),n.createElement(f,{key:"replace",children:"Replace"})]})))})}function rs(){return r.exports.createElement(m,{title:"Using an item template",code:`let menuItems = [
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
            Spectrum.Item [
                Item.key item.id
                Item.content item.name
            ]
        )
    ]
]`,description:o(),elements:C(E(()=>{const e=g([{id:"cut",name:"Cut"},{id:"copy",name:"Copy"},{id:"Paste",name:"Paste"},{id:"replace",name:"Replace"}]);return S(r.exports.createElement(ee,o(),r.exports.createElement(V,o(),"Edit"),n.createElement(te,{items:Array.from(e),children:t=>n.createElement(f,{key:t.id,children:t.name})})))}))})}function ls(){return r.exports.createElement(m,{title:"Events",code:`let action, setAction = React.useState("")

React.fragment [
    Spectrum.MenuTrigger [
        Spectrum.ActionButton [ Html.text "Edit" ]
        Spectrum.Menu [
            Menu.onAction setAction
            Menu.children [
                Spectrum.Item [
                    Item.key "cut"
                    Item.content "Cut"
                ]
                Spectrum.Item [
                    Item.key "copy"
                    Item.content "Copy"
                ]
                Spectrum.Item [
                    Item.key "paste"
                    Item.content "Paste"
                ]
            ]
        ]
    ]
    Html.p $"Action: {action}"
]`,description:o(),elements:C(E(()=>{let e;const t=F("");return S(r.exports.createElement(r.exports.Fragment,{},r.exports.createElement(ee,o(),r.exports.createElement(V,o(),"Edit"),n.createElement(te,{onAction:t[1],children:[n.createElement(f,{key:"cut",children:"Cut"}),n.createElement(f,{key:"copy",children:"Copy"}),n.createElement(f,{key:"paste",children:"Paste"})]})),(e=`Action: ${t[0]}`,r.exports.createElement("p",{children:[e]}))))}))})}function is(){return r.exports.createElement(m,{title:"Selection",code:`let selected, setSelected = React.useState([ "middle" ])

React.fragment [
    Spectrum.MenuTrigger [
        Spectrum.ActionButton [ Html.text "Align" ]
        Spectrum.Menu [
            Menu.selectionMode SelectionMode.Single
            Menu.selectedKeys selected
            Menu.onSelectionChange setSelected
            Menu.children [
                Spectrum.Item [
                    Item.key "left"
                    Item.content "Left"
                ]
                Spectrum.Item [
                    Item.key "middle"
                    Item.content "Middle"
                ]
                Spectrum.Item [
                    Item.key "right"
                    Item.content "Right"
                ]
            ]
        ]
    ]
    match selected with
    | [ selected' ] -> Html.p $"Current selection (controlled): {selected'}"
    | _ -> Html.p $"No selection"
]`,description:o(),elements:C(E(()=>{const e=F(u("middle")),t=e[0];return S(r.exports.createElement(r.exports.Fragment,{},...C(E(()=>R(S(r.exports.createElement(ee,o(),r.exports.createElement(V,o(),"Align"),n.createElement(te,{selectionMode:"single",selectedKeys:t,onSelectionChange:l=>{e[1](ae(l.values()))},children:[n.createElement(f,{key:"left",children:"Left"}),n.createElement(f,{key:"middle",children:"Middle"}),n.createElement(f,{key:"right",children:"Right"})]}))),E(()=>{let l;return A(t)?S(r.exports.createElement("p",{children:["No selection"]})):A(w(t))?S((l=`Current selection (controlled): ${v(t)}`,r.exports.createElement("p",{children:[l]}))):S(r.exports.createElement("p",{children:["No selection"]}))}))))))}))})}function as(){return r.exports.createElement(m,{title:"Selection (multiple)",code:`let selected, setSelected = React.useState([ "Sidebar"; "Console" ])

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
                    Spectrum.Item [
                        Item.key "Sidebar"
                        Item.content "Sidebar"
                    ]
                    Spectrum.Item [
                        Item.key "Searchbar"
                        Item.content "Searchbar"
                    ]
                    Spectrum.Item [
                        Item.key "Tools"
                        Item.content "Tools"
                    ]
                    Spectrum.Item [
                        Item.key "Console"
                        Item.content "Console"
                    ]
                ]
            ]
        ]
    ]
    Html.p $"Current selection (controlled): {selected |> Array.ofList}"
]`,description:o(),elements:C(E(()=>{let e;const t=F(g(["Sidebar","Console"])),l=t[0];return S(r.exports.createElement(r.exports.Fragment,{},n.createElement(ee,{closeOnSelect:!1,children:[r.exports.createElement(V,o(),"Show"),n.createElement(te,{selectionMode:"multiple",selectedKeys:l,onSelectionChange:i=>{t[1](ae(i.values()))},children:[n.createElement(f,{key:"Sidebar",children:"Sidebar"}),n.createElement(f,{key:"Searchbar",children:"Searchbar"}),n.createElement(f,{key:"Tools",children:"Tools"}),n.createElement(f,{key:"Console",children:"Console"})]})]}),(e=`Current selection (controlled): ${Vt(l)}`,r.exports.createElement("p",{children:[e]}))))}))})}function os(){return r.exports.createElement(m,{title:"Sections",code:`let selected, setSelected = React.useState([ "bold"; "left" ])

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
                    Spectrum.Item [
                        Item.key "bold"
                        Item.content "Bold"
                    ]
                    Spectrum.Item [
                        Item.key "underline"
                        Item.content "Underline"
                    ]
                ]
            ]
            Spectrum.Section [
                Section.title "Align"
                Section.children [
                    Spectrum.Item [
                        Item.key "left"
                        Item.content "Left"
                    ]
                    Spectrum.Item [
                        Item.key "middle"
                        Item.content "Middle"
                    ]
                    Spectrum.Item [
                        Item.key "right"
                        Item.content "Right"
                    ]
                ]
            ]
        ]
    ]
]`,description:o(),elements:C(E(()=>{const e=F(g(["bold","left"]));return S(r.exports.createElement(ee,o(),r.exports.createElement(V,o(),"Edit"),n.createElement(te,{selectionMode:"multiple",selectedKeys:e[0],onSelectionChange:t=>{e[1](ae(t.values()))},children:[n.createElement(Ae,{title:"Styles",children:[n.createElement(f,{key:"bold",children:"Bold"}),n.createElement(f,{key:"underline",children:"Underline"})]}),n.createElement(Ae,{title:"Align",children:[n.createElement(f,{key:"left",children:"Left"}),n.createElement(f,{key:"middle",children:"Middle"}),n.createElement(f,{key:"right",children:"Right"})]})]})))}))})}function cs(){let e,t,l;return r.exports.createElement(m,{title:"Complex items",code:`Spectrum.MenuTrigger [
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
]`,description:o(),elements:u(r.exports.createElement(ee,o(),r.exports.createElement(V,o(),"Edit"),r.exports.createElement(te,o(),n.createElement(f,{key:"cut",textValue:"Cut",children:n.Children.toArray([(e=Ll,n.createElement(e,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Cut"])}),n.createElement(pn,{children:n.Children.toArray(["\u2318X"])})])}),n.createElement(f,{key:"copy",textValue:"Copy",children:n.Children.toArray([(t=Mn,n.createElement(t,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Copy"])}),n.createElement(pn,{children:n.Children.toArray(["\u2318C"])})])}),n.createElement(f,{key:"paste",textValue:"Paste",children:n.Children.toArray([(l=_l,n.createElement(l,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Paste"])}),n.createElement(pn,{children:n.Children.toArray(["\u2318V"])})])}))))})}function ss(){return r.exports.createElement(m,{title:"Disabled keys",code:`let items = [
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
]`,description:o(),elements:C(E(()=>{const e=g([{id:"a1b2c3",name:"tiff"},{id:"g5h1j9",name:"png"},{id:"p8k3i4",name:"jpg"},{id:"j7i3a0",name:"PDF"}]);return S(r.exports.createElement(ee,o(),r.exports.createElement(V,o(),"Filter"),n.createElement(te,{items:Array.from(e),disabledKeys:["a1b2c3","p8k3i4"],children:t=>n.createElement(f,{children:t.name})})))}))})}function us(){const e=g(["Menus display a list of actions or options that a user can choose.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Menu.html"})," for more details."]);return r.exports.createElement(D,{title:"Menu",description:e,examples:g([r.exports.createElement(ns,null),r.exports.createElement(rs,null),r.exports.createElement(ls,null),r.exports.createElement(is,null),r.exports.createElement(as,null),r.exports.createElement(os,null),r.exports.createElement(cs,null),r.exports.createElement(ss,null)])})}function ms(){return r.exports.createElement(m,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)

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
]`,description:o(),elements:C(E(()=>{let e;const t=F(!1);return S(n.createElement(I,{gap:"size-100",alignItems:"center",children:n.Children.toArray([n.createElement(ee,{onOpenChange:t[1],children:[r.exports.createElement(V,o(),"Edit"),r.exports.createElement(te,o(),n.createElement(f,{key:"cut",textValue:"Cut",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Cut"])})])}),n.createElement(f,{key:"copy",textValue:"Copy",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Copy"])})])}),n.createElement(f,{key:"paste",textValue:"Paste",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Paste"])})])}))]}),(e=`Currently open: ${t[0]}`,r.exports.createElement("div",{children:[e]}))])}))}))})}function ds(){return r.exports.createElement(m,{title:"Alignment and direction",code:`Spectrum.Flex [
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.Start
            MenuTrigger.children [
                Spectrum.ActionButton "Edit"
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "cut"
                        Item.content "Cut"
                    ]
                    Spectrum.Item [
                        Item.key "copy"
                        Item.content "Copy"
                    ]
                    Spectrum.Item [
                        Item.key "paste"
                        Item.content "Paste"
                    ]
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
                    Spectrum.Item [
                        Item.key "sidebar"
                        Item.content "Sidebar"
                    ]
                    Spectrum.Item [
                        Item.key "options"
                        Item.content "Page options"
                    ]
                    Spectrum.Item [
                        Item.key "edit"
                        Item.content "Edit panel"
                    ]
                ]
            ]
        ]
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.Start
            MenuTrigger.direction MenuDirection.Start
            MenuTrigger.children [
                Spectrum.ActionButton "Edit"
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "cut"
                        Item.content "Cut"
                    ]
                    Spectrum.Item [
                        Item.key "copy"
                        Item.content "Copy"
                    ]
                    Spectrum.Item [
                        Item.key "paste"
                        Item.content "Paste"
                    ]
                ]
            ]
        ]
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.End
            MenuTrigger.direction MenuDirection.End
            MenuTrigger.children [
                Spectrum.ActionButton "View"
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "sidebar"
                        Item.content "Sidebar"
                    ]
                    Spectrum.Item [
                        Item.key "options"
                        Item.content "Page options"
                    ]
                    Spectrum.Item [
                        Item.key "edit"
                        Item.content "Edit panel"
                    ]
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(I,{gap:"size-100",children:n.Children.toArray([n.createElement(ee,{align:"start",children:[n.createElement(V,{children:n.Children.toArray(["Edit"])}),r.exports.createElement(te,o(),n.createElement(f,{key:"cut",children:"Cut"}),n.createElement(f,{key:"copy",children:"Copy"}),n.createElement(f,{key:"paste",children:"Paste"}))]}),n.createElement(ee,{align:"end",direction:"top",shouldFlip:!1,children:[n.createElement(V,{children:n.Children.toArray(["View"])}),r.exports.createElement(te,o(),n.createElement(f,{key:"sidebar",children:"Sidebar"}),n.createElement(f,{key:"options",children:"Page options"}),n.createElement(f,{key:"edit",children:"Edit panel"}))]}),n.createElement(ee,{align:"start",direction:"start",children:[n.createElement(V,{children:n.Children.toArray(["Edit"])}),r.exports.createElement(te,o(),n.createElement(f,{key:"cut",children:"Cut"}),n.createElement(f,{key:"copy",children:"Copy"}),n.createElement(f,{key:"paste",children:"Paste"}))]}),n.createElement(ee,{align:"end",direction:"end",children:[n.createElement(V,{children:n.Children.toArray(["View"])}),r.exports.createElement(te,o(),n.createElement(f,{key:"sidebar",children:"Sidebar"}),n.createElement(f,{key:"options",children:"Page options"}),n.createElement(f,{key:"edit",children:"Edit panel"}))]})])}))})}function ps(){return r.exports.createElement(m,{title:"Open and selection",code:`let isOpen, setIsOpen = React.useState(false)
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
]`,description:o(),elements:C(E(()=>{const e=F(!1),t=F(o());return S(n.createElement(ee,{isOpen:e[0],onOpenChange:e[1],children:[r.exports.createElement(V,o(),"View"),n.createElement(te,{selectionMode:"multiple",selectedKeys:t[0],onSelectionChange:l=>{t[1](ae(l.values()))},children:[n.createElement(f,{key:"side",textValue:"Sidebar",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Sidebar"])})])}),n.createElement(f,{key:"options",textValue:"Page options",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Page options"])})])}),n.createElement(f,{key:"edit",textValue:"Edit panel",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Edit panel"])})])})]})]}))}))})}function hs(){const e=g(["The MenuTrigger serves as a wrapper around a Menu and its associated trigger, linking the Menu's open state with the trigger's press state.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html"})," for more details."]);return r.exports.createElement(D,{title:"MenuTrigger",description:e,examples:g([r.exports.createElement(ms,null),r.exports.createElement(ds,null),r.exports.createElement(ps,null)])})}function fs(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.TableView [
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
]`,description:o(),elements:u(n.createElement(Rn,{["aria-label"]:"Example table with static contents",selectionMode:"multiple",children:[r.exports.createElement(zn,o(),n.createElement(Ht,{children:"Name"}),n.createElement(Ht,{children:"Type"}),n.createElement(Ht,{align:"end",children:["Date Modified"]})),r.exports.createElement(Pn,o(),r.exports.createElement(ft,o(),n.createElement(ie,{children:"Games"}),n.createElement(ie,{children:"File folder"}),n.createElement(ie,{children:"6/7/2020"})),r.exports.createElement(ft,o(),n.createElement(ie,{children:"Program Files"}),n.createElement(ie,{children:"File folder"}),n.createElement(ie,{children:"4/7/2021"})),r.exports.createElement(ft,o(),n.createElement(ie,{children:"bootmgr"}),n.createElement(ie,{children:"System file"}),n.createElement(ie,{children:"11/20/2010"})),r.exports.createElement(ft,o(),n.createElement(ie,{children:"log.txt"}),n.createElement(ie,{children:"Text Document"}),n.createElement(ie,{children:"1/18/2016"})))]}))})}function gs(){return r.exports.createElement(m,{title:"More complex example",code:`let columns = [
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
]`,description:o(),elements:C(E(()=>{const e=g([{name:"Name",uid:"name"},{name:"Type",uid:"entryType"},{name:"Date Modified",uid:"date"}]),t=g([{date:"6/7/2020",entryType:"File folder",id:1,name:"Games"},{date:"4/7/2021",entryType:"File folder",id:2,name:"Program Files"},{date:"11/20/2010",entryType:"System file",id:3,name:"bootmgr"},{date:"1/18/2016",entryType:"Text Document",id:4,name:"log.txt"}]);return S(n.createElement(Rn,{["aria-label"]:"Example table with dynamic content",maxWidth:"size-6000",selectionMode:"multiple",disabledKeys:[3],children:[n.createElement(zn,{columns:Array.from(e),children:l=>n.createElement(Ht,{key:l.uid,align:l.uid==="date"?"end":"start",children:[l.name]})}),n.createElement(Pn,{items:t,children:l=>n.createElement(ft,{children:i=>{const a=l[i];return n.createElement(ie,{children:a})}})})]}))}))})}function xs(){return r.exports.createElement(m,{title:"Layout + highlight selection + action",code:`let columns = [
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
]`,description:o(),elements:C(E(()=>{const e=g([{id:"firstName",name:"First Name"},{id:"lastName",name:"Last Name"},{id:"city",name:"City"}]),t=g([{city:"Sibiu",firstName:"George",id:1,lastName:"Danila"},{city:"Tilburg",firstName:"Andras",id:2,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:3,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:4,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:5,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:6,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:7,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:8,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:9,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:10,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:11,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:12,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:13,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:14,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:15,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:16,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:17,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:18,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:19,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:20,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:21,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:22,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:23,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:24,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:25,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:26,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:27,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:28,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:29,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:30,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:31,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:32,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:33,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:34,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:35,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:36,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:37,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:38,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:39,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:40,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:41,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:42,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:43,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:44,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:45,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:46,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:47,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:48,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:49,lastName:"Jaram"}]);return S(n.createElement(I,{height:"size-5000",width:"100%",direction:"column",gap:"size-150",children:n.Children.toArray([n.createElement(V,{alignSelf:"start",children:"Add"}),n.createElement(Rn,{flex:!0,["aria-label"]:"Example table with dynamic content",selectionMode:"single",selectionStyle:"highlight",onAction:l=>{window.alert(q(l))},children:[n.createElement(zn,{columns:Array.from(e),children:l=>n.createElement(Ht,{key:l.id,children:[l.name]})}),n.createElement(Pn,{items:t,children:l=>n.createElement(ft,{children:i=>{const a=Be(l[i]);return n.createElement(ie,{children:a})}})})]})])}))}))})}function Es(){const e=g(["Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TableView.html"})," for more details.",r.exports.createElement("br",{}),r.exports.createElement("br",{}),"Please note that the following examples require the you to open ",r.exports.createElement("em",{children:["Fable.Core.JsInterop"]})," in order to access the dynamic operator (?)."]);return r.exports.createElement(D,{title:"TableView",description:e,examples:g([r.exports.createElement(fs,null),r.exports.createElement(gs,null),r.exports.createElement(xs,null)])})}function Ss(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Checkbox [
    Checkbox.content "Unsubscribe"
]`,description:o(),elements:u(n.createElement(z,{children:n.Children.toArray(["Unsubscribe"])}))})}function bs(){return r.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState(true)
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
]`,description:o(),elements:C(E(()=>{const e=F(!0);return S(n.createElement(I,{direction:"row",children:n.Children.toArray([n.createElement(z,{defaultSelected:!0,children:n.Children.toArray(["Subscribe (uncontrolled)"])}),n.createElement(z,{isSelected:e[0],onChange:e[1],children:n.Children.toArray(["Subscribe (controlled)"])})])}))}))})}function ys(){return r.exports.createElement(m,{title:"Indeterminate",code:`Spectrum.Checkbox [
    Checkbox.isIndeterminate true
    Checkbox.content "Subscribe"
]`,description:o(),elements:u(n.createElement(z,{isIndeterminate:!0,children:n.Children.toArray(["Subscribe"])}))})}function Cs(){return r.exports.createElement(m,{title:"Events",code:`let selected, setSelected = React.useState(false)
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
    ]`,description:o(),elements:C(E(()=>{const e=F(!1),t=e[0];return S(n.createElement(I,{direction:"column",children:n.Children.toArray([n.createElement(z,{isSelected:t,onChange:e[1],children:n.Children.toArray(["Subscribe"])}),r.exports.createElement(M,o(),...C(E(()=>S(`You are ${t?"subscribed":"unsubscribed"}`))))])}))}))})}function As(){return r.exports.createElement(m,{title:"Validation",code:`Spectrum.Checkbox [
        Checkbox.validationState ValidationState.Invalid
        Checkbox.content "I accept the terms and conditions"
    ]`,description:o(),elements:u(n.createElement(z,{validationState:"invalid",children:n.Children.toArray(["I accept the terms and conditions"])}))})}function vs(){const e=g(["Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Checkbox.html"})," for more details."]);return r.exports.createElement(D,{title:"Checkbox",description:e,examples:g([r.exports.createElement(Ss,null),r.exports.createElement(bs,null),r.exports.createElement(ys,null),r.exports.createElement(Cs,null),r.exports.createElement(As,null)])})}function ws(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.CheckboxGroup [
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
]`,description:o(),elements:u(n.createElement(Ge,{label:"Favorite sports",children:n.Children.toArray([n.createElement(z,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(z,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(z,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}))})}function ks(){return r.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState([ "soccer"; "baseball" ])
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
]`,description:o(),elements:C(E(()=>{let e;const t=F(g(["soccer","baseball"])),l=t[0];return S(n.createElement(I,{gap:"size-300",children:n.Children.toArray([n.createElement(Ge,{label:"Favorite sports (uncontrolled)",defaultValue:["soccer","baseball"],children:n.Children.toArray([n.createElement(z,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(z,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(z,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),n.createElement(I,{direction:"column",gap:"size-200",children:n.Children.toArray([n.createElement(Ge,{label:"Favorite sports (controlled)",value:Array.from(l),onChange:i=>{t[1](ae(i))},children:n.Children.toArray([n.createElement(z,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(z,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(z,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),(e=`Selected: ${vn(", ",l)}`,r.exports.createElement("p",{children:[e]}))])})])}))}))})}function Is(){return r.exports.createElement(m,{title:"Labeling",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{gap:"size-300",wrap:!0,children:n.Children.toArray([n.createElement(Ge,{label:"Favorite sports",children:n.Children.toArray([n.createElement(z,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(z,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(z,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),n.createElement(Ge,{label:"Favorite sports",isRequired:!0,necessityIndicator:"icon",children:n.Children.toArray([n.createElement(z,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(z,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(z,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),n.createElement(Ge,{label:"Favorite sports",isRequired:!0,necessityIndicator:"label",children:n.Children.toArray([n.createElement(z,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(z,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(z,{value:"basketball",children:n.Children.toArray(["Basketball"])})])}),n.createElement(Ge,{label:"Favorite sports",necessityIndicator:"label",children:n.Children.toArray([n.createElement(z,{value:"soccer",children:n.Children.toArray(["Soccer"])}),n.createElement(z,{value:"baseball",children:n.Children.toArray(["Baseball"])}),n.createElement(z,{value:"basketball",children:n.Children.toArray(["Basketball"])})])})])}))})}function Ts(){return r.exports.createElement(m,{title:"Validation",code:`let selected, setSelected = React.useState([])
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
]`,description:o(),elements:C(E(()=>{const e=F(o()),t=e[0];return S(n.createElement(Ge,ue(C(E(()=>R(S(["label","Sandwich condiments"]),E(()=>R(S(["value",Array.from(t)]),E(()=>R(S(["onChange",l=>{e[1](ae(l))}]),E(()=>R(S(["isRequired",!0]),E(()=>R(tl(t)===0?S(["validationState","invalid"]):In(),E(()=>S(["children",n.Children.toArray([n.createElement(z,{value:"lettuce",children:n.Children.toArray(["Lettuce"])}),n.createElement(z,{value:"tomato",children:n.Children.toArray(["Tomato"])}),n.createElement(z,{value:"onion",children:n.Children.toArray(["Onion"])}),n.createElement(z,{value:"sprouts",children:n.Children.toArray(["Sprouts"])})])]))))))))))))))))}))})}function Fs(){const e=g(["A CheckboxGroup allows users to select one or more items from a list of choices.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html"})," for more details."]);return r.exports.createElement(D,{title:"CheckboxGroup",description:e,examples:g([r.exports.createElement(ws,null),r.exports.createElement(ks,null),r.exports.createElement(Is,null),r.exports.createElement(Ts,null)])})}function Bs(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Form [
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
]`,description:o(),elements:u(n.createElement(Qe,{maxWidth:"size-3600",children:n.Children.toArray([n.createElement(L,{label:"Email",type:"email",placeholder:"abc@adobe.com"}),n.createElement(L,{label:"Password",type:"password",placeholder:"1234"}),n.createElement(z,{children:n.Children.toArray(["Remember me"])})])}))})}function Ds(){return r.exports.createElement(m,{title:"Content",code:`Spectrum.Form [
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
]`,description:o(),elements:u(n.createElement(Qe,{maxWidth:"size-3600",isRequired:!0,necessityIndicator:"label",children:n.Children.toArray([n.createElement(L,{label:"Name",placeholder:"Jane Smith"}),n.createElement(L,{label:"Email",placeholder:"abc@adobe.com"}),n.createElement(L,{label:"Address",placeholder:"123 Any Street",isRequired:!1})])}))})}function Vs(){return r.exports.createElement(m,{title:"Labeling",code:`React.fragment [
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
]`,description:o(),elements:u(r.exports.createElement(r.exports.Fragment,{},r.exports.createElement("h3",{id:"label-3",children:n.Children.toArray(["Personal Information"])}),n.createElement(Qe,{maxWidth:"size-3600",["aria-labelledby"]:"label-3",children:n.Children.toArray([n.createElement(L,{label:"First Name",placeholder:"John"}),n.createElement(L,{label:"Last Name",placeholder:"Smith"}),n.createElement(Ze,{label:"Favorite pet",children:n.Children.toArray([n.createElement(X,{value:"dogs",children:"Dogs"}),n.createElement(X,{value:"cats",children:"Cats"}),n.createElement(X,{value:"dragons",children:"Dragons"})])})])})))})}function Ns(){return r.exports.createElement(m,{title:"Quiet",code:`Spectrum.Form [
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
]`,description:o(),elements:u(n.createElement(Qe,{isQuiet:!0,["aria-label"]:"Quiet example",maxWidth:"size-3600",children:n.Children.toArray([n.createElement(L,{label:"Name",placeholder:"John Smith"}),n.createElement(L,{label:"Address",placeholder:"123 Any Street"})])}))})}function Ms(){const e=g(["Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Form.html"})," for more details."]);return r.exports.createElement(D,{title:"Form",description:e,examples:g([r.exports.createElement(Bs,null),r.exports.createElement(Ds,null),r.exports.createElement(Vs,null),r.exports.createElement(Ns,null)])})}function Rs(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.NumberField [
    NumberField.label "Width"
    NumberField.defaultValue 1024
    NumberField.minValue 0
]`,description:o(),elements:u(n.createElement(ce,{label:"Width",defaultValue:1024,minValue:0}))})}function zs(){return r.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState(15)
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
]`,description:o(),elements:C(E(()=>{const e=F(15);return S(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(ce,{width:"200px",label:"Cookies (uncontrolled)",defaultValue:15,minValue:0}),n.createElement(ce,{width:"200px",label:"Cookies (controlled)",value:e[0],onChange:t=>{setTimeout(()=>{e[1](t)},0)},minValue:0})])}))}))})}function Ps(){return r.exports.createElement(m,{title:"Number formatting",code:`Spectrum.NumberField [
    NumberField.label "Adjust exposure"
    NumberField.defaultValue 0
    NumberField.formatOptions <| NumberFormat.make(
        signDisplay = NumberFormatSignDisplay.ExceptZero,
        minimumFractionDigits = 1,
        maximumFractionDigits = 2)
]`,description:o(),elements:u(n.createElement(ce,{label:"Adjust exposure",defaultValue:0,formatOptions:{localeMatcher:void 0,style:void 0,currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:"exceptZero",notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:1,maximumFractionDigits:2,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Ls(){return r.exports.createElement(m,{title:"Percentage",code:`Spectrum.NumberField [
    NumberField.label "Sales tax"
    NumberField.defaultValue 0.05
    NumberField.minValue 0
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Percent)
]`,description:o(),elements:u(n.createElement(ce,{label:"Sales tax",defaultValue:.05,minValue:0,formatOptions:{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function _s(){return r.exports.createElement(m,{title:"Currency values",code:`Spectrum.NumberField [
    NumberField.label "Transaction amount"
    NumberField.defaultValue 45
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Currency,
        currency = "EUR",
        currencyDisplay = NumberFormatCurrencyDisplay.Symbol,
        currencySign = NumberFormatCurrencySign.Accounting)
]`,description:o(),elements:u(n.createElement(ce,{label:"Transaction amount",defaultValue:45,formatOptions:{localeMatcher:void 0,style:"currency",currency:"EUR",currencyDisplay:"symbol",currencySign:"accounting",useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Gs(){return r.exports.createElement(m,{title:"Units",code:`Spectrum.NumberField [
    NumberField.label "Package width"
    NumberField.defaultValue 4
    NumberField.minValue 0
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Unit,
        unit = "inch",
        unitDisplay = NumberFormatUnitDisplay.Long)
]`,description:o(),elements:u(n.createElement(ce,{label:"Package width",defaultValue:4,minValue:0,formatOptions:{localeMatcher:void 0,style:"unit",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:"inch",unitDisplay:"long",minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}}))})}function Hs(){return r.exports.createElement(m,{title:"Step values",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{direction:"column",gap:"size-150",children:n.Children.toArray([n.createElement(ce,{label:"Step",step:10}),n.createElement(ce,{label:"Step + minValue",step:3,minValue:2}),n.createElement(ce,{label:"Step + minValue + maxValue",step:3,minValue:2,maxValue:21})])}))})}function Os(){return r.exports.createElement(m,{title:"Events",code:`let value, setValue = React.useState(0)
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
]`,description:o(),elements:C(E(()=>{let e;const t=F(0);return S(n.createElement(I,{direction:"column",gap:"size-150",children:n.Children.toArray([n.createElement(ce,{onChange:l=>{setTimeout(()=>{t[1](l)},0)},label:"Number of cookies to buy",minValue:0}),(e=`How many cookies you are ordering: ${t[0]}`,r.exports.createElement("pre",{children:[e]}))])}))}))})}function Ws(){return r.exports.createElement(m,{title:"Validation",code:`let value, setValue = React.useState(15)
let isValid = React.useMemo ((fun () -> value % 3 = 0 && value % 5 = 0), [| value |])
Spectrum.NumberField [
    NumberField.value value
    NumberField.onChange setValue
    NumberField.label "FizzBuzz values only"
    NumberField.validationState isValid
]`,description:o(),elements:C(E(()=>{const e=F(15),t=e[0]|0,l=le(()=>t%3==0?t%5==0:!1,[t]);return S(n.createElement(ce,ue(g([["value",t],["onChange",i=>{setTimeout(()=>{e[1](i)},0)}],["label","FizzBuzz values only"],l?["validationState","valid"]:["validationState","invalid"]]))))}))})}function qs(){return r.exports.createElement(m,{title:"Help text",code:`let value, setValue = React.useState(1)
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
]`,description:o(),elements:C(E(()=>{const e=F(1),t=e[0]|0,l=le(()=>t>0?!0:isNaN(t),[t]);return S(n.createElement(ce,ue(C(E(()=>R(S(l?["validationState","valid"]:["validationState","invalid"]),E(()=>R(S(["value",t]),E(()=>R(S(["onChange",i=>{setTimeout(()=>{e[1](i)},0)}]),E(()=>R(S(["label","Positive numbers only"]),E(()=>R(S(["description","Enter a positive number."]),E(()=>S(t===0?["errorMessage","Is zero positive?"]:["errorMessage","Positive numbers are bigger than 0."]))))))))))))))))}))})}function js(){const e=g(["NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/NumberField.html"})," for more details."]);return r.exports.createElement(D,{title:"NumberField",description:e,examples:g([r.exports.createElement(Rs,null),r.exports.createElement(zs,null),r.exports.createElement(Ps,null),r.exports.createElement(Ls,null),r.exports.createElement(_s,null),r.exports.createElement(Gs,null),r.exports.createElement(Hs,null),r.exports.createElement(Os,null),r.exports.createElement(Ws,null),r.exports.createElement(qs,null)])})}function Us(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.RadioGroup [
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
]`,description:o(),elements:u(n.createElement(Ze,{label:"Favorite pet",children:n.Children.toArray([n.createElement(X,{value:"dogs",children:"Dogs"}),n.createElement(X,{value:"cats",children:"Cats"})])}))})}function Ks(){return r.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState("yes")

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
]`,description:o(),elements:C(E(()=>{const e=F("yes");return S(n.createElement(I,{gap:"size-300",children:n.Children.toArray([n.createElement(Ze,{label:"Are you a wizard? (uncontrolled)",defaultValue:"yes",children:n.Children.toArray([n.createElement(X,{value:"yes",children:"Yes"}),n.createElement(X,{value:"no",children:"No"})])}),n.createElement(Ze,{label:"Are you a wizard? (controlled)",value:e[0],onChange:e[1],children:n.Children.toArray([n.createElement(X,{value:"yes",children:"Yes"}),n.createElement(X,{value:"no",children:"No"})])})])}))}))})}function Js(){return r.exports.createElement(m,{title:"Events",code:`let selected, setSelected = React.useState("")

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
]`,description:o(),elements:C(E(()=>{let e;const t=F(""),l=t[0];return S(r.exports.createElement(r.exports.Fragment,{},n.createElement(Ze,{label:"Favorite avatar",value:l,onChange:t[1],children:n.Children.toArray([n.createElement(X,{value:"wizard",children:"Wizard"}),n.createElement(X,{value:"dragon",children:"Dragon"})])}),(e=`You have selected: ${l}`,r.exports.createElement("div",{children:[e]}))))}))})}function $s(){return r.exports.createElement(m,{title:"Orientation",code:`Spectrum.RadioGroup [
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
]`,description:o(),elements:u(n.createElement(Ze,{label:"Favorite avatar",orientation:"horizontal",children:n.Children.toArray([n.createElement(X,{value:"wizard",children:"Wizard"}),n.createElement(X,{value:"dragon",children:"Dragon"})])}))})}function Ys(){const e=g(["Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RadioGroup.html"})," for more details."]);return r.exports.createElement(D,{title:"RadioGroup",description:e,examples:g([r.exports.createElement(Us,null),r.exports.createElement(Ks,null),r.exports.createElement(Js,null),r.exports.createElement($s,null)])})}function Xs(){return r.exports.createElement(m,{title:"Default example",code:`let submittedText, setSubmittedText = React.useState("")
React.fragment [
    Spectrum.SearchField [
        SearchField.label "Search"
        SearchField.placeholder "Enter text"
        SearchField.onSubmit setSubmittedText
    ]
    Html.p $"Submitted text: {submittedText}"
]`,description:o(),elements:C(E(()=>{let e;const t=F("");return S(r.exports.createElement(r.exports.Fragment,{},n.createElement(hn,{label:"Search",placeholder:"Enter text",onSubmit:t[1]}),(e=`Submitted text: ${t[0]}`,r.exports.createElement("p",{children:[e]}))))}))})}function Zs(){return r.exports.createElement(m,{title:"Value",code:`let searchValue, setSearchValue = React.useState("puppies")
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
]`,description:o(),elements:C(E(()=>{const e=F("puppies");return S(n.createElement(I,{gap:"size-300",children:n.Children.toArray([n.createElement(hn,{defaultValue:"puppies",label:"Search (uncontrolled)"}),n.createElement(hn,{value:e[0],onChange:e[1],label:"Search (controlled)"})])}))}))})}function Qs(){return r.exports.createElement(m,{title:"Properties",code:`let currentText, setCurrentText = React.useState("")
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
]`,description:o(),elements:C(E(()=>{let e,t;const l=F(""),i=l[1],a=l[0],c=F("");return S(n.createElement(I,{direction:"column",children:n.Children.toArray([n.createElement(hn,{value:a,onChange:i,label:"Your text",placeholder:"Enter some text",onClear:()=>{i("")},onSubmit:c[1]}),(e=`Mirrored text: ${a}`,r.exports.createElement("pre",{children:[e]})),(t=`Submitted text: ${c[0]}`,r.exports.createElement("pre",{children:[t]}))])}))}))})}function eu(){const e=g(["A SearchField is a text field designed for searches.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/SearchField.html"})," for more details."]);return r.exports.createElement(D,{title:"SearchField",description:e,examples:g([r.exports.createElement(Xs,null),r.exports.createElement(Zs,null),r.exports.createElement(Qs,null)])})}function tu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Switch [
    Switch.content "Low power mode"
]`,description:o(),elements:u(n.createElement(gt,{children:"Low power mode"}))})}function nu(){return r.exports.createElement(m,{title:"Value",code:`let selected, setSelected = React.useState(false)
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
]`,description:o(),elements:C(E(()=>{let e;const t=F(!1),l=t[0];return S(r.exports.createElement(r.exports.Fragment,{},n.createElement(gt,{defaultSelected:!0,children:"Low power mode (uncontrolled)"}),n.createElement(I,{direction:"column",gap:"size-100",children:n.Children.toArray([n.createElement(gt,{isSelected:l,onChange:t[1],children:"Low power mode (controlled)"}),(e=`The switch is on: ${l}`,r.exports.createElement("div",{children:[e]}))])})))}))})}function ru(){return r.exports.createElement(m,{title:"Disabled",code:`Spectrum.Switch [
    Switch.isDisabled true
    Switch.content "Switch label"
]`,description:o(),elements:u(n.createElement(gt,{isDisabled:!0,children:"Switch label"}))})}function lu(){return r.exports.createElement(m,{title:"Emphasized",code:`Spectrum.Switch [
    Switch.isEmphasized true
    Switch.defaultSelected true
    Switch.content "Switch label"
]`,description:o(),elements:u(n.createElement(gt,{isEmphasized:!0,defaultSelected:!0,children:"Switch label"}))})}function iu(){return r.exports.createElement(m,{title:"Read-only",code:`Spectrum.Switch [
    Switch.isReadOnly true
    Switch.defaultSelected true
    Switch.content "Switch label"
]`,description:o(),elements:u(n.createElement(gt,{isReadOnly:!0,defaultSelected:!0,children:"Switch label"}))})}function au(){const e=g(["Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Switch.html"})," for more details."]);return r.exports.createElement(D,{title:"Switch",description:e,examples:g([r.exports.createElement(tu,null),r.exports.createElement(nu,null),r.exports.createElement(ru,null),r.exports.createElement(lu,null),r.exports.createElement(iu,null)])})}function ou(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.TextArea [
    TextArea.label "Name"
]`,description:o(),elements:u(n.createElement(ne,{label:"Name"}))})}function cu(){return r.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState("This is on a wait list")
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
]`,description:o(),elements:C(E(()=>{const e=F("This is on a wait list");return S(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(ne,{label:"Notes (uncontrolled)",defaultValue:"This is on a wait list"}),n.createElement(ne,{label:"Notes (controlled)",value:e[0],onChange:e[1]})])}))}))})}function su(){return r.exports.createElement(m,{title:"todo",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "abc@gmail.com"
]`,description:o(),elements:u(n.createElement(ne,{label:"Email",placeholder:"abc@gmail.com"}))})}function uu(){return r.exports.createElement(m,{title:"todo",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(ne,{label:"Street address"}),n.createElement(ne,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),n.createElement(ne,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),n.createElement(ne,{label:"Street address",necessityIndicator:"label"})])}))})}function mu(){return r.exports.createElement(m,{title:"Events",code:`let text, setText = React.useState("")
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
]`,description:o(),elements:C(E(()=>{let e;const t=F("");return S(n.createElement(I,{gap:"size-150",direction:"column",children:n.Children.toArray([n.createElement(ne,{label:"Your text",placeholder:"Enter some text...",onChange:t[1]}),(e=`Mirrored text: ${t[0]}`,r.exports.createElement("pre",{children:[e]}))])}))}))})}function du(){return r.exports.createElement(m,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")
let regex = System.Text.RegularExpressions.Regex("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

Spectrum.TextArea [
    TextArea.validationState isValid
    TextArea.placeholder "Enter your email"
    TextArea.value value
    TextArea.onChange setValue
    TextArea.label "Email"
    TextArea.errorMessage "Invalid email"
]`,description:o(),elements:C(E(()=>{const e=F("me@email.com"),t=e[0],l=le(()=>An(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,t),[t]);return S(n.createElement(ne,ue(g([l?["validationState","valid"]:["validationState","invalid"],["placeholder","Enter your email"],["value",t],["onChange",e[1]],["label","Email"],["errorMessage","Invalid email"]]))))}))})}function pu(){return r.exports.createElement(m,{title:"Quiet",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isQuiet true
]`,description:o(),elements:u(n.createElement(ne,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function hu(){return r.exports.createElement(m,{title:"Disabled",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isDisabled true
]`,description:o(),elements:u(n.createElement(ne,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function fu(){return r.exports.createElement(m,{title:"Read-only",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isReadOnly true
]`,description:o(),elements:u(n.createElement(ne,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function gu(){return r.exports.createElement(m,{title:"Label asignment and position",code:`Spectrum.TextArea [
    TextArea.label "Search"
    TextArea.labelPosition LabelPosition.Side
    TextArea.labelAlign Alignment.End
]`,description:o(),elements:u(n.createElement(ne,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function xu(){return r.exports.createElement(m,{title:"Help text",code:`let value, setValue = React.useState("0")
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
]`,description:o(),elements:C(E(()=>{const e=F("0"),t=e[0],l=le(()=>An(/^\d$/g,t),[t]);return S(n.createElement(ne,ue(C(E(()=>R(S(l?["validationState","valid"]:["validationState","invalid"]),E(()=>R(S(["value",t]),E(()=>R(S(["onChange",e[1]]),E(()=>R(S(["label","Favorite number"]),E(()=>R(S(["maxLength",1]),E(()=>R(S(["description","Enter a single digit number"]),E(()=>S(t===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))))))}))})}function Eu(){const e=g(["TextAreas are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextArea.html"})," for more details."]);return r.exports.createElement(D,{title:"TextArea",description:e,examples:g([r.exports.createElement(ou,null),r.exports.createElement(cu,null),r.exports.createElement(su,null),r.exports.createElement(uu,null),r.exports.createElement(mu,null),r.exports.createElement(du,null),r.exports.createElement(pu,null),r.exports.createElement(hu,null),r.exports.createElement(fu,null),r.exports.createElement(gu,null),r.exports.createElement(xu,null)])})}function Su(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.TextField [
    TextField.label "Name"
]`,description:o(),elements:u(n.createElement(L,{label:"Name"}))})}function bu(){return r.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState("me@email.com")
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
]`,description:o(),elements:C(E(()=>{const e=F("me@email.com");return S(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(L,{label:"Email (uncontrolled)",defaultValue:"me@email.com"}),n.createElement(L,{label:"Email (controlled)",defaultValue:e[0],onChange:e[1]})])}))}))})}function yu(){return r.exports.createElement(m,{title:"Placeholder",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "abc@gmail.com"
]`,description:o(),elements:u(n.createElement(L,{label:"Email",placeholder:"abc@gmail.com"}))})}function Cu(){return r.exports.createElement(m,{title:"Labeling",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(L,{label:"Street address"}),n.createElement(L,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),n.createElement(L,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),n.createElement(L,{label:"Street address",necessityIndicator:"label"})])}))})}function Au(){return r.exports.createElement(m,{title:"Events",code:`let text, setText = React.useState("")
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
]`,description:o(),elements:C(E(()=>{let e;const t=F("");return S(n.createElement(I,{gap:"size-150",direction:"column",children:n.Children.toArray([n.createElement(L,{label:"Your text",placeholder:"Enter some text...",onChange:t[1]}),(e=`Mirrored text: ${t[0]}`,r.exports.createElement("pre",{children:[e]}))])}))}))})}function vu(){return r.exports.createElement(m,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")
let regex = System.Text.RegularExpressions.Regex("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

Spectrum.TextField [
    TextField.validationState (if isValid then ValidationState.Valid else ValidationState.Invalid)
    TextField.placeholder "Enter your email"
    TextField.value value
    TextField.onChange setValue
    TextField.label "Email"
    TextField.errorMessage "Invalid email"
]`,description:o(),elements:C(E(()=>{const e=F("me@email.com"),t=e[0],l=le(()=>An(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,t),[t]);return S(n.createElement(L,{validationState:l?"valid":"invalid",placeholder:"Enter your email",value:t,onChange:e[1],label:"Email",errorMessage:"Invalid email"}))}))})}function wu(){return r.exports.createElement(m,{title:"Quiet",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isQuiet true
]`,description:o(),elements:u(n.createElement(L,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function ku(){return r.exports.createElement(m,{title:"Disabled",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isDisabled true
]`,description:o(),elements:u(n.createElement(L,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function Iu(){return r.exports.createElement(m,{title:"Read-only",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isReadOnly true
]`,description:o(),elements:u(n.createElement(L,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function Tu(){return r.exports.createElement(m,{title:"Label alignment and position",code:`Spectrum.TextField [
    TextField.label "Search"
    TextField.labelPosition LabelPosition.Side
    TextField.labelAlign Alignment.End
]`,description:o(),elements:u(n.createElement(L,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function Fu(){return r.exports.createElement(m,{title:"Help text",code:`let value, setValue = React.useState("0")
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
]`,description:o(),elements:C(E(()=>{const e=F("0"),t=e[0],l=le(()=>An(/^\d$/g,t),[t]);return S(n.createElement(L,ue(C(E(()=>R(S(l?["validationState","valid"]:["validationState","invalid"]),E(()=>R(S(["value",t]),E(()=>R(S(["onChange",e[1]]),E(()=>R(S(["label","Favorite number"]),E(()=>R(S(["maxLength",1]),E(()=>R(S(["description","Enter a single digit number"]),E(()=>S(t===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))))))}))})}function Bu(){const e=g(["TextFields are text inputs that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextField.html"})," for more details."]);return r.exports.createElement(D,{title:"TextField",description:e,examples:g([r.exports.createElement(Su,null),r.exports.createElement(bu,null),r.exports.createElement(yu,null),r.exports.createElement(Cu,null),r.exports.createElement(Au,null),r.exports.createElement(vu,null),r.exports.createElement(wu,null),r.exports.createElement(ku,null),r.exports.createElement(Iu,null),r.exports.createElement(Tu,null),r.exports.createElement(Fu,null)])})}function Du(){let e,t,l,i,a,c,s;return r.exports.createElement(m,{title:"Icon size",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{gap:"size-100",children:n.Children.toArray([(e=et,n.createElement(e,{["aria-label"]:"XXS Beaker",size:"XXS"})),(t=et,n.createElement(t,{["aria-label"]:"XS Beaker",size:"XS"})),(l=et,n.createElement(l,{["aria-label"]:"S Beaker",size:"S"})),(i=et,n.createElement(i,{["aria-label"]:"M Beaker",size:"M"})),(a=et,n.createElement(a,{["aria-label"]:"L Beaker",size:"L"})),(c=et,n.createElement(c,{["aria-label"]:"XL Beaker",size:"XL"})),(s=et,n.createElement(s,{["aria-label"]:"XXL Beaker",size:"XXL"}))])}))})}function Vu(){let e,t,l,i,a;return r.exports.createElement(m,{title:"Coloring",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{gap:"size-100",children:n.Children.toArray([(e=xt,n.createElement(e,{["aria-label"]:"Default Alert"})),(t=xt,n.createElement(t,{["aria-label"]:"Negative Alert",color:"negative"})),(l=xt,n.createElement(l,{["aria-label"]:"Notification Alert",color:"notice"})),(i=xt,n.createElement(i,{["aria-label"]:"Positive Alert",color:"positive"})),(a=xt,n.createElement(a,{["aria-label"]:"Informative Alert",color:"informative"}))])}))})}function Nu(){const e=g(["Workflow icons are graphical metaphors or symbols that can be used to compliment existing experiences.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"})," for more details."]);return r.exports.createElement(D,{title:"Workflow Icons",description:e,examples:g([r.exports.createElement(Du,null),r.exports.createElement(Vu,null)])})}function Mu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Breadcrumbs [
    Spectrum.Item [
        Item.key "home"
        Item.content "Home"
    ]
    Spectrum.Item [
        Item.key "trendy"
        Item.content "Trendy"
    ]
    Spectrum.Item [
        Item.key "march 2020 assets"
        Item.content "March 2020 Assets"
    ]
]`,description:o(),elements:u(r.exports.createElement(tt,o(),n.createElement(f,{key:"home",children:"Home"}),n.createElement(f,{key:"trendy",children:"Trendy"}),n.createElement(f,{key:"march 2020 assets",children:"March 2020 Assets"})))})}function Ru(){return r.exports.createElement(m,{title:"Events",code:`let folders = [
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
]`,description:o(),elements:C(E(()=>{let e,t;const l=g([{id:1,label:"Home"},{id:2,label:"Trendy"},{id:3,label:"March 2020 Assets"}]),i=F(void 0);return S((e=g([n.createElement(tt,{onAction:i[1],children:C(E(()=>nn(a=>n.createElement(f,{key:a.id,children:a.label}),l)))}),(t=`You pressed folder ID: ${i[0]}`,r.exports.createElement("p",{children:[t]}))]),r.exports.createElement("div",{children:n.Children.toArray(Array.from(e))})))}))})}function zu(){return r.exports.createElement(m,{title:"Sizes",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size150)
    Flex.children [
        Spectrum.Breadcrumbs [
            Breadcrumbs.size BreadcrumbsSize.S
            Breadcrumbs.children [
                Spectrum.Item [
                    Item.key "home"
                    Item.content "Home"
                ]
                Spectrum.Item [
                    Item.key "trendy"
                    Item.content "Trendy"
                ]
            ]
        ]
        Spectrum.Breadcrumbs [
            Breadcrumbs.size BreadcrumbsSize.M
            Breadcrumbs.children [
                Spectrum.Item [
                    Item.key "home"
                    Item.content "Home"
                ]
                Spectrum.Item [
                    Item.key "trendy"
                    Item.content "Trendy"
                ]
            ]
        ]
        Spectrum.Breadcrumbs [
            Breadcrumbs.size BreadcrumbsSize.L
            Breadcrumbs.children [
                Spectrum.Item [
                    Item.key "home"
                    Item.content "Home"
                ]
                Spectrum.Item [
                    Item.key "trendy"
                    Item.content "Trendy"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(I,{direction:"column",gap:"size-150",children:n.Children.toArray([n.createElement(tt,{size:"S",children:[n.createElement(f,{key:"home",children:"Home"}),n.createElement(f,{key:"trendy",children:"Trendy"})]}),n.createElement(tt,{size:"M",children:[n.createElement(f,{key:"home",children:"Home"}),n.createElement(f,{key:"trendy",children:"Trendy"})]}),n.createElement(tt,{size:"L",children:[n.createElement(f,{key:"home",children:"Home"}),n.createElement(f,{key:"trendy",children:"Trendy"})]})])}))})}function Pu(){return r.exports.createElement(m,{title:"Multiline",code:`Spectrum.Breadcrumbs [
    Breadcrumbs.isMultiline true
    Breadcrumbs.children [
        Spectrum.Item [
            Item.key "home"
            Item.content "Home"
        ]
        Spectrum.Item [
            Item.key "trendy"
            Item.content "Trendy"
        ]
        Spectrum.Item [
            Item.key "march 2020 assets"
            Item.content "March 2020 Assets"
        ]
    ]
]`,description:o(),elements:u(n.createElement(tt,{isMultiline:!0,children:[n.createElement(f,{key:"home",children:"Home"}),n.createElement(f,{key:"trendy",children:"Trendy"}),n.createElement(f,{key:"march 2020 assets",children:"March 2020 Assets"})]}))})}function Lu(){return r.exports.createElement(m,{title:"Root context",code:`Spectrum.View [
    View.overflow Overflow.Hidden
    View.width "200px"
    View.children [
        Spectrum.Breadcrumbs [
            Breadcrumbs.showRoot true
            Breadcrumbs.children [
                Spectrum.Item [
                    Item.key "home"
                    Item.content "Home"
                ]
                Spectrum.Item [
                    Item.key "trendy"
                    Item.content "Trendy"
                ]
                Spectrum.Item [
                    Item.key "march 2020 assets"
                    Item.content "March 2020 Assets"
                ]
                Spectrum.Item [
                    Item.key "winter"
                    Item.content "Winter"
                ]
                Spectrum.Item [
                    Item.key "holiday"
                    Item.content "Holiday"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(M,{overflow:"hidden",width:"200px",children:n.Children.toArray([n.createElement(tt,{showRoot:!0,children:[n.createElement(f,{key:"home",children:"Home"}),n.createElement(f,{key:"trendy",children:"Trendy"}),n.createElement(f,{key:"march 2020 assets",children:"March 2020 Assets"}),n.createElement(f,{key:"winter",children:"Winter"}),n.createElement(f,{key:"holiday",children:"Holiday"})]})])}))})}function _u(){const e=g(["Breadcrumbs show hierarchy and navigational context for a user\u2019s location within an application.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html"})," for more details."]);return r.exports.createElement(D,{title:"Breadcrumbs",description:e,examples:g([r.exports.createElement(Mu,null),r.exports.createElement(Ru,null),r.exports.createElement(zu,null),r.exports.createElement(Pu,null),r.exports.createElement(Lu,null)])})}function Gu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Link [
    Html.a [
        prop.href "https://www.imdb.com/title/tt6348138/"
        prop.target.blank
        prop.children [ Html.text "The missing link" ]
    ]
]`,description:o(),elements:u(r.exports.createElement(nt,o(),r.exports.createElement("a",{href:"https://www.imdb.com/title/tt6348138/",target:"_blank",children:n.Children.toArray(["The missing link"])})))})}function Hu(){return r.exports.createElement(m,{title:"Plain-text content",code:`Spectrum.Link [
    Link.onPress <| fun _ -> Browser.Dom.window.alert("Pressed!")
    Link.content "A label"
]`,description:o(),elements:u(n.createElement(nt,{onPress:e=>{window.alert(q("Pressed!"))},children:"A label"}))})}function Ou(){let e,t,l;return r.exports.createElement(m,{title:"Variants",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{direction:"column",children:n.Children.toArray([(e=g(["Would you like to ",n.createElement(nt,{variant:"primary",children:"learn more"})," about this fine component?"]),r.exports.createElement("p",{children:n.Children.toArray(Array.from(e))})),(t=g(["Would you like to ",n.createElement(nt,{variant:"secondary",children:"learn more"})," about this fine component?"]),r.exports.createElement("p",{children:n.Children.toArray(Array.from(t))})),(l=g(["Would you like to ",n.createElement(nt,{variant:"primary",isQuiet:!0,children:"learn more"})," about this fine component?"]),r.exports.createElement("p",{children:n.Children.toArray(Array.from(l))})),n.createElement(M,{backgroundColor:"positive",padding:"size-300",children:n.Children.toArray([n.createElement(nt,{variant:"overBackground",children:"learn more"})])})])}))})}function Wu(){const e=g(["Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Link.html"})," for more details."]);return r.exports.createElement(D,{title:"Link",description:e,examples:g([r.exports.createElement(Gu,null),r.exports.createElement(Hu,null),r.exports.createElement(Ou,null)])})}function qu(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Tabs [
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
]`,description:o(),elements:u(n.createElement(Ot,{["aria-label"]:"History of Ancient Rome",defaultSelectedKey:"FoR",children:n.Children.toArray([n.createElement(Wt,{children:[n.createElement(f,{key:"FoR",children:"Founding of Rome"}),n.createElement(f,{key:"MaR",children:"Monarchy and Republic"}),n.createElement(f,{key:"Emp",children:"Empire"})]}),n.createElement(qt,{children:[n.createElement(f,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),n.createElement(f,{key:"MaR",children:"Senatus Populusque Romanus."}),n.createElement(f,{key:"Emp",children:"Alea jacta est."})]})])}))})}function ju(){return r.exports.createElement(m,{title:"Dynamic content",code:`let tabs = [
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
]`,description:o(),elements:C(E(()=>{let e;const t=g([{children:"Arma virumque cano, Troiae qui primus ab oris.",id:1,name:"Founding of Rome"},{children:"Senatus Populusque Romanus.",id:2,name:"Monarchy and Republic"},{children:"Alea jacta est.",id:3,name:"Empire"}]),l=F(1);return S(r.exports.createElement(r.exports.Fragment,{},(e=`Current tab id: ${l[0]}`,r.exports.createElement("p",{children:[e]})),n.createElement(Ot,{["aria-label"]:"History of Ancient Rome",items:Array.from(t),onSelectionChange:l[1],children:n.Children.toArray([n.createElement(Wt,{children:i=>{const a=i.name;return n.createElement(f,{children:a})}}),n.createElement(qt,{children:i=>{const a=i.children;return n.createElement(f,{children:a})}})])})))}))})}function Uu(){let e,t,l;return r.exports.createElement(m,{title:"Icons in tabs",code:`Spectrum.Tabs [
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
]`,description:o(),elements:u(n.createElement(Ot,{["aria-label"]:"History of Ancient Rome",children:n.Children.toArray([r.exports.createElement(Wt,o(),n.createElement(f,{key:"FoR",children:n.Children.toArray([(e=Gl,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Founding of Rome"])})])}),n.createElement(f,{key:"MaR",children:n.Children.toArray([(t=Hl,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Monarchy and Republic"])})])}),n.createElement(f,{key:"Emp",children:n.Children.toArray([(l=Ol,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Empire"])})])})),r.exports.createElement(qt,o(),n.createElement(f,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),n.createElement(f,{key:"MaR",children:"Senatus Populusque Romanus."}),n.createElement(f,{key:"Emp",children:"Alea jacta est."}))])}))})}function Ku(){return r.exports.createElement(m,{title:"Selection",code:`let tabs = [
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
]`,description:o(),elements:C(E(()=>{const e=g([{children:"No keyboard detected",id:1,name:"Keyboard Settings"},{children:"No mouse detected",id:2,name:"Mouse Settings"},{children:"No gamepad detected",id:3,name:"Gamepad Settings"}]),t=F(2);return S(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([r.exports.createElement("span",{id:"label-2",children:n.Children.toArray(["Settings (uncontrolled)"])}),n.createElement(Ot,{["aria-labelledby"]:"label-2",items:Array.from(e),defaultSelectedKey:2,marginBottom:"size-400",children:n.Children.toArray([n.createElement(Wt,{children:l=>{const i=l.name;return n.createElement(f,{children:i})}}),n.createElement(qt,{children:l=>{const i=l.children;return n.createElement(f,{children:i})}})])}),r.exports.createElement("span",{id:"label-3",children:n.Children.toArray(["Settings (controlled)"])}),n.createElement(Ot,{["aria-labelledby"]:"label-3",items:Array.from(e),selectedKey:t[0],onSelectionChange:t[1],children:n.Children.toArray([n.createElement(Wt,{children:l=>{const i=l.name;return n.createElement(f,{children:i})}}),n.createElement(qt,{children:l=>{const i=l.children;return n.createElement(f,{children:i})}})])})])}))}))})}function Ju(){const e=g(["Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tabs.html"})," for more details.",r.exports.createElement("br",{}),r.exports.createElement("br",{}),"Please note that the following examples require the you to open ",r.exports.createElement("em",{children:["Fable.Core.JsInterop"]})," in order to access the dynamic operator (?)."]);return r.exports.createElement(D,{title:"Tabs",description:e,examples:g([r.exports.createElement(qu,null),r.exports.createElement(ju,null),r.exports.createElement(Uu,null),r.exports.createElement(Ku,null)])})}function $u(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Save" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Low disk space!"
        AlertDialog.variant AlertDialogVariant.Warning
        AlertDialog.primaryActionLabel "Confirm"
        AlertDialog.content "You are running low on disk space.\\nDelete unnecessary files to free up space."
    ]
]`,description:o(),elements:u(r.exports.createElement(Z,o(),r.exports.createElement(V,o(),"Save"),n.createElement(Et,{title:"Low disk space!",variant:"warning",primaryActionLabel:"Confirm",children:`You are running low on disk space.
Delete unnecessary files to free up space.`})))})}function Yu(){return r.exports.createElement(m,{title:"Content",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Exit" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Register profile"
        AlertDialog.variant AlertDialogVariant.Information
        AlertDialog.primaryActionLabel "Register"
        AlertDialog.secondaryActionLabel "Reminder me later"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.content "You have not saved your profile information \\nfor this account. Would you like to register now?"
    ]
]`,description:o(),elements:u(r.exports.createElement(Z,o(),r.exports.createElement(V,o(),"Exit"),n.createElement(Et,{title:"Register profile",variant:"information",primaryActionLabel:"Register",secondaryActionLabel:"Reminder me later",cancelLabel:"Cancel",children:`You have not saved your profile information 
for this account. Would you like to register now?`})))})}function Xu(){return r.exports.createElement(m,{title:"Accessibility",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Save" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Save file"
        AlertDialog.variant AlertDialogVariant.Confirmation
        AlertDialog.primaryActionLabel "Save"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.autoFocusButton AutoFocusButton.Primary
        AlertDialog.content "A file with the same name already exists. Overwrite?"
    ]
]`,description:o(),elements:u(r.exports.createElement(Z,o(),r.exports.createElement(V,o(),"Save"),n.createElement(Et,{title:"Save file",variant:"confirmation",primaryActionLabel:"Save",cancelLabel:"Cancel",autoFocusButton:"primary",children:"A file with the same name already exists. Overwrite?"})))})}function Zu(){return r.exports.createElement(m,{title:"Events",code:`let onPrimaryAction () = Browser.Dom.window.alert("Primary button pressed.")
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
]`,description:o(),elements:C(E(()=>S(r.exports.createElement(Z,o(),r.exports.createElement(V,o(),"Publish"),n.createElement(Et,{variant:"confirmation",title:"Confirm publish",primaryActionLabel:"Publish",secondaryActionLabel:"Save as draft",cancelLabel:"Cancel",onPrimaryAction:()=>{window.alert(q("Primary button pressed."))},onSecondaryAction:()=>{window.alert(q("Secondary button pressed."))},onCancel:()=>{window.alert(q("Cancel button pressed."))},children:"Are you sure you want to publish this document?"})))))})}function Qu(){const e=g(["AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html"})," for more details."]);return r.exports.createElement(D,{title:"AlertDialog",description:e,examples:g([r.exports.createElement($u,null),r.exports.createElement(Yu,null),r.exports.createElement(Xu,null),r.exports.createElement(Zu,null)])})}function em(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.DialogTrigger [
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
]`,description:o(),elements:u(r.exports.createElement(Z,o(),n.createElement(V,{children:n.Children.toArray(["Check connectivity"])}),e=>r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["Internet Speed Test"])}),n.createElement(Ln,{children:n.Children.toArray(["Connection status: Connected"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),n.createElement(y,{children:n.Children.toArray(["Start speed test?"])})),r.exports.createElement(Te,o(),n.createElement(P,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),n.createElement(P,{variant:"cta",onPress:t=>{e()},children:"Confirm"})))))})}function tm(){return r.exports.createElement(m,{title:"Content",code:`Spectrum.DialogTrigger [
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
]`,description:o(),elements:u(r.exports.createElement(Z,o(),n.createElement(V,{children:n.Children.toArray(["Publish"])}),e=>r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["Publish 3 pages"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),"Confirm publish"),r.exports.createElement(Te,o(),n.createElement(P,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),n.createElement(P,{variant:"cta",autoFocus:!0,onPress:t=>{e()},children:"Confirm"})))))})}function nm(){return r.exports.createElement(m,{title:"Dismissable",code:`Spectrum.DialogTrigger [
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
]`,description:o(),elements:u(n.createElement(Z,{isDismissable:!0,children:n.Children.toArray([n.createElement(V,{children:n.Children.toArray(["Status"])}),r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["Status"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),"Printer Status: Connected"))])}))})}function rm(){return r.exports.createElement(m,{title:"Complex UI",code:`Spectrum.DialogTrigger [
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
]`,description:o(),elements:u(r.exports.createElement(Z,o(),n.createElement(V,{children:n.Children.toArray(["Register"])}),e=>{let t;return n.createElement(se,{size:"L",children:n.Children.toArray([r.exports.createElement(U,o(),n.createElement(I,{alignItems:"center",gap:"size-100",children:n.Children.toArray([(t=pr,n.createElement(t,{size:"S"})),n.createElement(y,{children:n.Children.toArray(["Register for newsletter"])})])})),r.exports.createElement(Ln,o(),r.exports.createElement(nt,o(),r.exports.createElement("a",{href:"//example.com",target:"_blank",children:n.Children.toArray(["What is this?"])}))),r.exports.createElement(j,o()),r.exports.createElement(K,o(),r.exports.createElement(Qe,o(),n.createElement(L,{label:"First Name",placeholder:"John",autoFocus:!0}),n.createElement(L,{label:"Last Name",placeholder:"Smith"}),n.createElement(L,{label:"Street Address",placeholder:"123 Any Street"}),n.createElement(L,{label:"City",placeholder:"San Francisco"}))),r.exports.createElement(hr,o(),n.createElement(z,{children:n.Children.toArray(["I want to receive updates for exclusive offers in my area."])})),r.exports.createElement(Te,o(),n.createElement(P,{variant:"secondary",onPress:l=>{e()},children:"Cancel"}),n.createElement(P,{variant:"cta",onPress:l=>{e()},children:"Register"}))])})}))})}function lm(){return r.exports.createElement(m,{title:"Hero image",code:`Spectrum.DialogTrigger [
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
]`,description:o(),elements:u(r.exports.createElement(Z,o(),n.createElement(V,{children:n.Children.toArray(["Upload"])}),e=>r.exports.createElement(se,o(),n.createElement(fr,{slot:"hero",alt:"",src:"https://i.imgur.com/Z7AzH2c.png",objectFit:"cover"}),n.createElement(U,{children:n.Children.toArray(["Upload file"])}),r.exports.createElement(j,o()),n.createElement(K,{children:n.Children.toArray(["Are you sure you want to upload this file?"])}),r.exports.createElement(Te,o(),n.createElement(P,{variant:"secondary",onPress:t=>{e()},children:"Cancel"}),n.createElement(P,{variant:"cta",onPress:t=>{e()},children:"Confirm"})))))})}function im(){return r.exports.createElement(m,{title:"Events",code:`let alertSave = fun (close) ->
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
]`,description:o(),elements:C(E(()=>S(r.exports.createElement(Z,o(),n.createElement(V,{children:n.Children.toArray(["Set Profile"])}),e=>r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["Profile"])}),r.exports.createElement(j,o()),r.exports.createElement(Te,o(),n.createElement(P,{variant:"secondary",onPress:t=>{e(),window.alert(q("Profile not saved!"))},children:"Cancel"}),n.createElement(P,{variant:"cta",autoFocus:!0,onPress:t=>{e(),window.alert(q("Profile saved!"))},children:"Save"})),r.exports.createElement(K,o(),r.exports.createElement(Qe,o(),n.createElement(L,{label:"Name"}),n.createElement(z,{children:n.Children.toArray(["Make private"])}))))))))})}function am(){const e=g(["Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Dialog.html"})," for more details."]);return r.exports.createElement(D,{title:"Dialog",description:e,examples:g([r.exports.createElement(em,null),r.exports.createElement(tm,null),r.exports.createElement(nm,null),r.exports.createElement(rm,null),r.exports.createElement(lm,null),r.exports.createElement(im,null)])})}function om(){return r.exports.createElement(m,{title:"Default example",code:`let isOpen, setIsOpen = React.useState(false)

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
]`,description:o(),elements:C(E(()=>{let e;const t=F(!1),l=t[1];return S(r.exports.createElement(r.exports.Fragment,{},n.createElement(V,{onPress:i=>{l(!0)},children:n.Children.toArray([(e=un,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Delete"])})])}),n.createElement(gr,{onDismiss:()=>{l(!1)},children:n.Children.toArray(Array.from(C(E(()=>t[0]?S(n.createElement(Et,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"})):In()))))})))}))})}function cm(){const e=Wl();return r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["Edit"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),n.createElement(Qe,{children:n.Children.toArray([n.createElement(L,{autoFocus:!0,label:"First Name",defaultValue:"John"}),n.createElement(L,{label:"Last Name",defaultValue:"Smith"})])})),r.exports.createElement(Te,o(),n.createElement(P,{variant:"secondary",onPress:t=>{e.dismiss()},children:"Cancel"}),n.createElement(P,{variant:"cta",onPress:t=>{e.dismiss()},children:"Save"})))}function sm(){return r.exports.createElement(m,{title:"Dialog triggered by a menu item",code:`let dialog, setDialog = React.useState(JS.undefined<string>)
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
                Spectrum.Item [
                    Item.key "edit"
                    Item.content "Edit"
                ]
                Spectrum.Item [
                    Item.key "delete"
                    Item.content "Delete..."
                ]
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
`,description:o(),elements:C(E(()=>{let e;const t=F(void 0),l=t[1],i=t[0];return S(r.exports.createElement(r.exports.Fragment,{},r.exports.createElement(ee,o(),n.createElement(V,{["aria-label"]:"Actions",children:n.Children.toArray([(e=ql,n.createElement(e,{}))])}),n.createElement(te,{onAction:l,children:[n.createElement(f,{key:"edit",children:"Edit"}),n.createElement(f,{key:"delete",children:"Delete..."})]})),n.createElement(gr,{onDismiss:()=>{l(void 0)},type:"modal",children:n.Children.toArray(Array.from(C(E(()=>S(i==="edit"?r.exports.createElement(cm,null):i==="delete"?n.createElement(Et,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"}):null)))))})))}))})}function um(){const e=g(["A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html"})," for more details."]);return r.exports.createElement(D,{title:"DialogContainer",description:e,examples:g([r.exports.createElement(om,null),r.exports.createElement(sm,null)])})}function mm(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.DialogTrigger [
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
]`,description:o(),elements:u(n.createElement(Z,{type:"popover",children:n.Children.toArray([n.createElement(V,{children:n.Children.toArray(["Disk Status"])}),r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["C://"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),n.createElement(y,{children:n.Children.toArray(["50% disk space remaining."])})))])}))})}function dm(){return r.exports.createElement(m,{title:"Tray dialog",code:`Spectrum.DialogTrigger [
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
]`,description:o(),elements:u(n.createElement(Z,{type:"tray",children:n.Children.toArray([n.createElement(V,{children:n.Children.toArray(["Check messages"])}),r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["New messages"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),n.createElement(y,{children:n.Children.toArray(["You have 5 new messages."])})))])}))})}function pm(){return r.exports.createElement(m,{title:"Dialog anchor",code:`let ref = React.useRef<Browser.Types.HTMLElement option>(None)

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
]`,description:o(),elements:C(E(()=>{const e=or(void 0);return S(n.createElement(I,{gap:"size-1000",children:n.Children.toArray([n.createElement(Z,{type:"popover",targetRef:e,children:n.Children.toArray([n.createElement(V,{children:n.Children.toArray(["Trigger"])}),r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["The heading"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),n.createElement(y,{children:n.Children.toArray(["This is a popover anchored to the span"])})))])}),r.exports.createElement("span",{ref:e,style:{width:140,textAlign:"center"},children:n.Children.toArray(["Popover appears over here"])})])}))}))})}function hm(){return r.exports.createElement(m,{title:"Placement",code:`Spectrum.DialogTrigger [
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
]`,description:o(),elements:u(n.createElement(Z,{type:"popover",placement:"right top",children:n.Children.toArray([n.createElement(V,{children:n.Children.toArray(["Trigger"])}),r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["The Heading"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),n.createElement(y,{children:n.Children.toArray(["This is a popover placed to the right of its trigger and offset so the arrow is at the top of the dialog."])})))])}))})}function fm(){return r.exports.createElement(m,{title:"Offset and cross offset",code:`Spectrum.DialogTrigger [
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
]`,description:o(),elements:u(n.createElement(Z,{type:"popover",placement:"top",offset:50,children:n.Children.toArray([n.createElement(V,{children:n.Children.toArray(["Trigger"])}),r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["Offset"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),n.createElement(y,{children:n.Children.toArray(["Offset by an additional 50px."])})))])}))})}function gm(){return r.exports.createElement(m,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)

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
]`,description:o(),elements:C(E(()=>{let e;const t=F(!1);return S(n.createElement(I,{alignItems:"center",gap:"size-100",children:n.Children.toArray([n.createElement(Z,{type:"popover",placement:"top",onOpenChange:t[1],children:n.Children.toArray([n.createElement(V,{children:n.Children.toArray(["Whispers"])}),r.exports.createElement(se,o(),n.createElement(U,{children:n.Children.toArray(["Whispers and DMs"])}),r.exports.createElement(j,o()),r.exports.createElement(K,o(),n.createElement(y,{children:n.Children.toArray(["You have 0 new messages."])})))])}),(e=`Current open state: ${t[0]}`,n.createElement(y,{children:n.Children.toArray([e])}))])}))}))})}function xm(){const e=g(["DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html"})," for more details."]);return r.exports.createElement(D,{title:"DialogTrigger",description:e,examples:g([r.exports.createElement(mm,null),r.exports.createElement(dm,null),r.exports.createElement(pm,null),r.exports.createElement(hm,null),r.exports.createElement(fm,null),r.exports.createElement(gm,null)])})}function Em(){let e;return r.exports.createElement(m,{title:"Default example",code:`Spectrum.TooltipTrigger [
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
]`,description:o(),elements:u(n.createElement(He,{delay:0,children:n.Children.toArray([n.createElement(V,{["aria-label"]:"Edit Name",children:n.Children.toArray([(e=ur,n.createElement(e,{}))])}),n.createElement(Oe,{children:"Change Name"})])}))})}function Sm(){return r.exports.createElement(m,{title:"Warmup / Cooldown",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{gap:"size-200",children:n.Children.toArray([r.exports.createElement(He,o(),n.createElement(V,{children:n.Children.toArray(["Hover me"])}),n.createElement(Oe,{children:"I come up after a delay."})),r.exports.createElement(He,o(),n.createElement(V,{children:n.Children.toArray(["Then hover me"])}),n.createElement(Oe,{children:"If you did it quickly, I appear immediately."}))])}))})}function bm(){return r.exports.createElement(m,{title:"Tooltip placement",code:`Spectrum.TooltipTrigger [
    TooltipTrigger.placement TooltipPlacement.End
    TooltipTrigger.children [
        Spectrum.ActionButton [
            ActionButton.ariaLabel "Foo"
            ActionButton.content "Placement"
        ]
        Spectrum.Tooltip "In left-to-right, this is on the right. In right-to-left, this is on the left."
    ]
]`,description:o(),elements:u(n.createElement(He,{placement:"end",children:n.Children.toArray([n.createElement(V,{["aria-label"]:"Foo",children:"Placement"}),n.createElement(Oe,{children:"In left-to-right, this is on the right. In right-to-left, this is on the left."})])}))})}function ym(){return r.exports.createElement(m,{title:"Offset and cross offset",code:`Spectrum.TooltipTrigger [
    TooltipTrigger.offset 50
    TooltipTrigger.children [
        Spectrum.ActionButton "Offset"
        Spectrum.Tooltip "This will shift up..."
    ]
]`,description:o(),elements:u(n.createElement(He,{offset:50,children:n.Children.toArray([n.createElement(V,{children:n.Children.toArray(["Offset"])}),n.createElement(Oe,{children:"This will shift up..."})])}))})}function Cm(){let e,t,l;return r.exports.createElement(m,{title:"Visual variants",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{direction:"row",gap:"size-100",children:n.Children.toArray([r.exports.createElement(He,o(),n.createElement(V,{["aria-label"]:"Approve",children:n.Children.toArray([(e=jl,n.createElement(e,{}))])}),n.createElement(Oe,{variant:"positive",showIcon:!0,children:"Approve workflow"})),r.exports.createElement(He,o(),n.createElement(V,{["aria-label"]:"Information",children:n.Children.toArray([(t=Ul,n.createElement(t,{}))])}),n.createElement(Oe,{variant:"info",showIcon:!0,children:"Show the more information menu"})),r.exports.createElement(He,o(),n.createElement(V,{["aria-label"]:"Danger",children:n.Children.toArray([(l=un,n.createElement(l,{}))])}),n.createElement(Oe,{variant:"negative",showIcon:!0,children:"Dangerous action"}))])}))})}function Am(){const e=g(["Display container for Tooltip content. Has a directional arrow dependent on its placement.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tooltip.html"})," for more details."]);return r.exports.createElement(D,{title:"Tooltip",description:e,examples:g([r.exports.createElement(Em,null),r.exports.createElement(Sm,null),r.exports.createElement(bm,null),r.exports.createElement(ym,null),r.exports.createElement(Cm,null)])})}function vm(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ComboBox [
    ComboBox.label "Favorite animal"
    ComboBox.children [
        Spectrum.Item [
            Item.key "red panda"
            Item.content "Red Panda"
        ]
        Spectrum.Item [
            Item.key "cat"
            Item.content "Cat"
        ]
        Spectrum.Item [
            Item.key "dog"
            Item.content "Dog"
        ]
        Spectrum.Item [
            Item.key "aardvark"
            Item.content "Aardvark"
        ]
        Spectrum.Item [
            Item.key "kangaroo"
            Item.content "Kangaroo"
        ]
        Spectrum.Item [
            Item.key "snake"
            Item.content "Snake"
        ]
    ]
]`,description:o(),elements:u(n.createElement(We,{label:"Favorite animal",children:[n.createElement(f,{key:"red panda",children:"Red Panda"}),n.createElement(f,{key:"cat",children:"Cat"}),n.createElement(f,{key:"dog",children:"Dog"}),n.createElement(f,{key:"aardvark",children:"Aardvark"}),n.createElement(f,{key:"kangaroo",children:"Kangaroo"}),n.createElement(f,{key:"snake",children:"Snake"})]}))})}function wm(){return r.exports.createElement(m,{title:"Content",code:`let options = [
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
]`,description:o(),elements:C(E(()=>{let e;const t=g([{id:1,name:"Aerospace"},{id:2,name:"Mechanical"},{id:3,name:"Civil"},{id:4,name:"Biomedical"},{id:5,name:"Nuclear"},{id:6,name:"Industrial"},{id:7,name:"Chemical"},{id:8,name:"Agricultural"},{id:9,name:"Electrical"}]),l=F(void 0);return S(r.exports.createElement(r.exports.Fragment,{},(e=`Topic id: ${l[0]}`,r.exports.createElement("p",{children:[e]})),n.createElement(We,{label:"Pick an engineering major",placeholder:"Search engineering majors...",defaultItems:Array.from(t),onSelectionChange:l[1],children:i=>{const a=i.name;return n.createElement(f,{children:a})}})))}))})}function km(){return r.exports.createElement(m,{title:"Value",code:`let options = [
    {| id = 1; name = "Adobe Photoshop" |}
    {| id = 2; name = "Adobe XD" |}
    {| id = 3; name = "Adobe InDesign" |}
    {| id = 4; name = "Adobe AfterEffects" |}
    {| id = 5; name = "Adobe Illustrator" |}
    {| id = 6; name = "Adobe Lightroom" |}
    {| id = 7; name = "Adobe Premiere Pro" |}
    {| id = 8; name = "Adobe Fresco" |}
    {| id = 9; name = "Adobe Dreamweaver" |}
]
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
]`,description:o(),elements:C(E(()=>{const e=g([{id:1,name:"Adobe Photoshop"},{id:2,name:"Adobe XD"},{id:3,name:"Adobe InDesign"},{id:4,name:"Adobe AfterEffects"},{id:5,name:"Adobe Illustrator"},{id:6,name:"Adobe Lightroom"},{id:7,name:"Adobe Premiere Pro"},{id:8,name:"Adobe Fresco"},{id:9,name:"Adobe Dreamweaver"}]),t=F("Adobe XD");return S(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(We,{label:"Adobe product (Uncontrolled)",defaultItems:Array.from(e),defaultInputValue:"Adobe XD",children:l=>{const i=l.name;return n.createElement(f,{children:i})}}),n.createElement(We,{label:"Adobe product (Controlled)",defaultItems:Array.from(e),inputValue:t[0],onInputChange:t[1],children:l=>{const i=l.name;return n.createElement(f,{children:i})}})])}))}))})}function Im(){return r.exports.createElement(m,{title:"Custom value",code:`let options = [
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
            Spectrum.Item [
                Item.key name
                Item.content name
            ]
        )
    ]
]`,description:o(),elements:C(E(()=>{const e=g([{name:"Apple"},{name:"Banana"},{name:"Orange"},{name:"Grapes"},{name:"Watermelon"},{name:"Pear"}]);return S(r.exports.createElement(r.exports.Fragment,{},r.exports.createElement("p",{children:["Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list feel free to write your own selection."]}),n.createElement(We,{label:"Preferred fruit",defaultItems:Array.from(e),allowsCustomValue:!0,children:t=>{const l=t.name;return n.createElement(f,{key:l,children:l})}})))}))})}function Tm(){return r.exports.createElement(m,{title:"Sections",code:`Spectrum.ComboBox [
    ComboBox.label "Preferred fruit or vegetable"
    ComboBox.children [
        Spectrum.Section [
            Section.title "Fruit"
            Section.children [
                Spectrum.Item [
                    Item.key "Apple"
                    Item.content "Apple"
                ]
                Spectrum.Item [
                    Item.key "Banana"
                    Item.content "Banana"
                ]
                Spectrum.Item [
                    Item.key "Orange"
                    Item.content "Orange"
                ]
            ]
        ]
        Spectrum.Section [
            Section.title "Vegetables"
            Section.children [
                Spectrum.Item [
                    Item.key "Cabbage"
                    Item.content "Cabbage"
                ]
                Spectrum.Item [
                    Item.key "Lettuce"
                    Item.content "Lettuce"
                ]
                Spectrum.Item [
                    Item.key "Carrots"
                    Item.content "Carrots"
                ]
            ]
        ]
    ]
]`,description:o(),elements:u(n.createElement(We,{label:"Preferred fruit or vegetable",children:[n.createElement(Ae,{title:"Fruit",children:[n.createElement(f,{key:"Apple",children:"Apple"}),n.createElement(f,{key:"Banana",children:"Banana"}),n.createElement(f,{key:"Orange",children:"Orange"})]}),n.createElement(Ae,{title:"Vegetables",children:[n.createElement(f,{key:"Cabbage",children:"Cabbage"}),n.createElement(f,{key:"Lettuce",children:"Lettuce"}),n.createElement(f,{key:"Carrots",children:"Carrots"})]})]}))})}function Fm(){return r.exports.createElement(m,{title:"Events",code:`let options = [
    {| id = 1; name = "Aerospace" |}
    {| id = 2; name = "Mechanical" |}
    {| id = 3; name = "Civil" |}
    {| id = 4; name = "Biomedical" |}
    {| id = 5; name = "Nuclear" |}
    {| id = 6; name = "Industrial" |}
    {| id = 7; name = "Chemical" |}
    {| id = 8; name = "Chemical" |}
    {| id = 9; name = "Electrical" |}
]

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
]`,description:o(),elements:C(E(()=>{let e,t;const l=g([{id:1,name:"Aerospace"},{id:2,name:"Mechanical"},{id:3,name:"Civil"},{id:4,name:"Biomedical"},{id:5,name:"Nuclear"},{id:6,name:"Industrial"},{id:7,name:"Chemical"},{id:8,name:"Chemical"},{id:9,name:"Electrical"}]),i=F(""),a=F(0),c=a[0]|0;return S(r.exports.createElement(r.exports.Fragment,{},(e=`Current selected major id: ${c}`,r.exports.createElement("p",{children:[e]})),(t=`Current input text: ${i[0]}`,r.exports.createElement("p",{children:[t]})),n.createElement(We,{label:"Pick an engineering major",defaultItems:Array.from(l),selectedKey:c,onSelectionChange:s=>{a[1](s)},onInputChange:s=>{i[1](s)},children:s=>{const d=s.name;return n.createElement(f,{children:d})}})))}))})}function Bm(){let e,t,l,i;return r.exports.createElement(m,{title:"Complex items",code:`Spectrum.ComboBox [
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
]`,description:o(),elements:u(n.createElement(We,{label:"Select action",children:[n.createElement(f,{textValue:"Add to queue",children:n.Children.toArray([(e=Kl,n.createElement(e,{})),n.createElement(y,{children:n.Children.toArray(["Add to queue"])}),n.createElement(y,{slot:"description",children:n.Children.toArray(["Add to current watch queue"])})])}),n.createElement(f,{textValue:"Add review",children:n.Children.toArray([(t=sn,n.createElement(t,{})),n.createElement(y,{children:n.Children.toArray(["Add review"])}),n.createElement(y,{slot:"description",children:n.Children.toArray(["Post a review for the episode"])})])}),n.createElement(f,{textValue:"Subscribe to series",children:n.Children.toArray([(l=mr,n.createElement(l,{})),n.createElement(y,{children:n.Children.toArray(["Subscribe to series"])}),n.createElement(y,{slot:"description",children:n.Children.toArray(["Add series to your subscription list and be notified when a new episode airs"])})])}),n.createElement(f,{textValue:"Report",children:n.Children.toArray([(i=xt,n.createElement(i,{})),n.createElement(y,{children:n.Children.toArray(["Report"])}),n.createElement(y,{slot:"description",children:n.Children.toArray(["Report an issue/violation"])})])})]}))})}function Dm(){const e=g(["ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ComboBox.html"})," for more details.",r.exports.createElement("br",{}),r.exports.createElement("br",{}),"Please note that the following examples require the you to open ",r.exports.createElement("em",{children:["Fable.Core.JsInterop"]})," in order to access the dynamic operator (?)."]);return r.exports.createElement(D,{title:"ComboBox",description:e,examples:g([r.exports.createElement(vm,null),r.exports.createElement(wm,null),r.exports.createElement(km,null),r.exports.createElement(Im,null),r.exports.createElement(Tm,null),r.exports.createElement(Fm,null),r.exports.createElement(Bm,null)])})}function Vm(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Picker [
    Picker.label "Choose frequency"
    Picker.children [
        Spectrum.Item [
            Item.key "rarely"
            Item.content "Rarely"
        ]
        Spectrum.Item [
            Item.key "sometimes"
            Item.content "Sometimes"
        ]
        Spectrum.Item [
            Item.key "always"
            Item.content "Always"
        ]
    ]
]`,description:o(),elements:u(n.createElement(fn,{label:"Choose frequency",children:[n.createElement(f,{key:"rarely",children:"Rarely"}),n.createElement(f,{key:"sometimes",children:"Sometimes"}),n.createElement(f,{key:"always",children:"Always"})]}))})}function Nm(){return r.exports.createElement(m,{title:"Content",code:`let options = [
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
]`,description:o(),elements:C(E(()=>{let e;const t=g([{id:1,name:"Aardvark"},{id:2,name:"Cat"},{id:3,name:"Dog"},{id:4,name:"Kangaroo"},{id:5,name:"Koala"},{id:6,name:"Penguin"},{id:7,name:"Snake"},{id:8,name:"Turtle"},{id:9,name:"Wombat"}]),l=F(void 0);return S(r.exports.createElement(r.exports.Fragment,{},n.createElement(fn,{label:"Pick an animal",items:Array.from(t),onSelectionChange:l[1],children:i=>{const a=i.name;return n.createElement(f,{children:a})}}),(e=`Animal id: ${l[0]}`,r.exports.createElement("p",{children:[e]}))))}))})}function Mm(){return r.exports.createElement(m,{title:"Selection",code:`let options = [
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
                Spectrum.Item [
                    Item.key name
                    Item.content name
                ]
            )
        ]
        Spectrum.Picker [
            Picker.label "Pick an animal (Controlled)"
            Picker.items options
            Picker.selectedKey animal
            Picker.onSelectionChange setAnimal
            Picker.itemTemplate (fun item ->
                let name: string = item?name
                Spectrum.Item [
                    Item.key name
                    Item.content name
                ]
            )
        ]
    ]
]`,description:o(),elements:C(E(()=>{const e=g([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),t=F("Bison");return S(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(fn,{label:"Pick an animal (Uncontrolled)",items:Array.from(e),defaultSelectedKey:"Bison",children:l=>{const i=l.name;return n.createElement(f,{key:i,children:i})}}),n.createElement(fn,{label:"Pick an animal (Controlled)",items:Array.from(e),selectedKey:t[0],onSelectionChange:t[1],children:l=>{const i=l.name;return n.createElement(f,{key:i,children:i})}})])}))}))})}function Rm(){const e=g(["Pickers allow users to choose a single option from a collapsible list of options when space is limited.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Picker.html"})," for more details.",r.exports.createElement("br",{}),r.exports.createElement("br",{}),"Please note that the following examples require the you to open ",r.exports.createElement("em",{children:["Fable.Core.JsInterop"]})," in order to access the dynamic operator (?)."]);return r.exports.createElement(D,{title:"Picker",description:e,examples:g([r.exports.createElement(Vm,null),r.exports.createElement(Nm,null),r.exports.createElement(Mm,null)])})}function zm(){return r.exports.createElement(m,{title:"Default example",code:'Spectrum.RangeSlider [\n    RangeSlider.label "Range"\n    RangeSlider.defaultValue {| start = 12; ``end`` = 36 |}\n]',description:o(),elements:u(n.createElement(St,{label:"Range",defaultValue:{end:36,start:12}}))})}function Pm(){return r.exports.createElement(m,{title:"Value",code:'let value, setValue = React.useState({| start = 25; ``end`` = 75 |})\nSpectrum.Flex [\n    Flex.gap (DimValue.Size Size150)\n    Flex.wrap true\n    Flex.children [\n        Spectrum.RangeSlider [\n            RangeSlider.label "Range (Uncontrolled)"\n            RangeSlider.defaultValue {| start = 25; ``end`` = 75 |}\n        ]\n        Spectrum.RangeSlider [\n            RangeSlider.label "Range (Controlled)"\n            RangeSlider.value {| start = value.start; ``end`` = value.``end`` |}\n            RangeSlider.onChange (fun x -> setValue {| start = x.start; ``end`` = x.``end`` |})\n        ]\n    ]\n]',description:o(),elements:C(E(()=>{const e=F({end:75,start:25}),t=e[0];return S(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(St,{label:"Range (Uncontrolled)",defaultValue:{end:75,start:25}}),n.createElement(St,{label:"Range (Controlled)",value:{end:t.end,start:t.start},onChange:l=>{e[1]({end:l.end,start:l.start})}})])}))}))})}function Lm(){return r.exports.createElement(m,{title:"Different scale",code:`Spectrum.RangeSlider [
    RangeSlider.label "Range"
    RangeSlider.minValue 50
    RangeSlider.maxValue 150
    RangeSlider.defaultValue {| start = 75; \`\`end\`\` = 100 |}
]`,description:o(),elements:u(n.createElement(St,{label:"Range",minValue:50,maxValue:150,defaultValue:{end:100,start:75}}))})}function _m(){return r.exports.createElement(m,{title:"Number format",code:'Spectrum.RangeSlider [\n    RangeSlider.label "Price range"\n    RangeSlider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "JPY")\n    RangeSlider.defaultValue {| start = 75; ``end`` = 100 |}\n]',description:o(),elements:u(n.createElement(St,{label:"Price range",formatOptions:{localeMatcher:void 0,style:"currency",currency:"JPY",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},defaultValue:{end:100,start:75}}))})}function Gm(){return r.exports.createElement(m,{title:"Using the getValueLabel prop",code:'Spectrum.RangeSlider [\n    RangeSlider.label "Search radius"\n    RangeSlider.maxValue 200\n    RangeSlider.defaultValue {| start = 15; ``end`` = 60 |}\n    RangeSlider.getValueLabel (fun m -> $"{m.start}m to {m.``end``}m away")\n]',description:o(),elements:u(n.createElement(St,{label:"Search radius",maxValue:200,defaultValue:{end:60,start:15},getValueLabel:e=>`${e.start}m to ${e.end}m away`}))})}function Hm(){const e=g(["RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RangeSlider.html"})," for more details."]);return r.exports.createElement(D,{title:"RangeSlider",description:e,examples:g([r.exports.createElement(zm,null),r.exports.createElement(Pm,null),r.exports.createElement(Lm,null),r.exports.createElement(_m,null),r.exports.createElement(Gm,null)])})}function Om(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Slider [
    Slider.label "Cookies to buy"
    Slider.defaultValue 12
]`,description:o(),elements:u(n.createElement(gn,{label:"Cookies to buy",defaultValue:12}))})}function Wm(){return r.exports.createElement(m,{title:"Value",code:`let value, setValue = React.useState(25)
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
]`,description:o(),elements:C(E(()=>{const e=F(25);return S(n.createElement(I,{gap:"size-150",wrap:!0,children:n.Children.toArray([n.createElement(gn,{label:"Cookies to buy (Uncontrolled)",defaultValue:25}),n.createElement(gn,{label:"Cookies to buy (Controlled)",value:e[0],onChange:e[1]})])}))}))})}function qm(){return r.exports.createElement(m,{title:"Number format",code:`Spectrum.Slider [
    Slider.label "Currency"
    Slider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "USD")
    Slider.defaultValue 60
]`,description:o(),elements:u(n.createElement(gn,{label:"Currency",formatOptions:{localeMatcher:void 0,style:"currency",currency:"USD",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},defaultValue:60}))})}function jm(){const e=g(["Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Slider.html"})," for more details."]);return r.exports.createElement(D,{title:"Slider",description:e,examples:g([r.exports.createElement(Om,null),r.exports.createElement(Wm,null),r.exports.createElement(qm,null)])})}function Um(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Meter [
    Meter.label "Storage space"
    Meter.variant MeterVariant.Positive
    Meter.value 35
]`,description:o(),elements:u(n.createElement(jt,{label:"Storage space",variant:"positive",value:35}))})}function Km(){return r.exports.createElement(m,{title:"Warning example",code:`Spectrum.Meter [
    Meter.label "Progress"
    Meter.marginBottom (DimValue.Size Size300)
    Meter.value 25
    Meter.valueLabel "1 of 4"
    Meter.variant MeterVariant.Warning
]`,description:o(),elements:u(n.createElement(jt,{label:"Progress",marginBottom:"size-300",value:25,valueLabel:"1 of 4",variant:"warning"}))})}function Jm(){return r.exports.createElement(m,{title:"Labels and formatting",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{direction:"column",maxWidth:"size-3000",gap:"size-300",children:n.Children.toArray([n.createElement(jt,{label:"Space used",showValueLabel:!1,value:90,variant:"critical"}),n.createElement(jt,{label:"Space used",valueLabel:"54 of 60GB",value:90,variant:"critical"}),n.createElement(jt,{label:"Space used",value:89.123,formatOptions:{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:2,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0},variant:"critical"})])}))})}function $m(){const e=g(["Meters are visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Meter.html"})," for more details."]);return r.exports.createElement(D,{title:"Meter",description:e,examples:g([r.exports.createElement(Um,null),r.exports.createElement(Km,null),r.exports.createElement(Jm,null)])})}function Ym(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ProgressBar [
    ProgressBar.label "Loading..."
    ProgressBar.value 50
]`,description:o(),elements:u(n.createElement(_n,{label:"Loading...",value:50}))})}function Xm(){return r.exports.createElement(m,{title:"Indeterminate",code:`Spectrum.ProgressBar [
    ProgressBar.label "Loading..."
    ProgressBar.isIndeterminate true
]`,description:o(),elements:u(n.createElement(_n,{label:"Loading...",isIndeterminate:!0}))})}function Zm(){return r.exports.createElement(m,{title:"Over background",code:`Spectrum.View [
    View.backgroundColor (BackgroundColorValue.Color Positive)
    View.padding (DimValue.Size Size300)
    View.children [
        Spectrum.ProgressBar [
            ProgressBar.overBackgroundVariant
            ProgressBar.label "Loading..."
            ProgressBar.value 5
        ]
    ]
]`,description:o(),elements:u(n.createElement(M,{backgroundColor:"positive",padding:"size-300",children:n.Children.toArray([n.createElement(_n,{variant:"overBackground",label:"Loading...",value:5})])}))})}function Qm(){const e=g(["ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressBar.html"})," for more details."]);return r.exports.createElement(D,{title:"ProgressBar",description:e,examples:g([r.exports.createElement(Ym,null),r.exports.createElement(Xm,null),r.exports.createElement(Zm,null)])})}function ed(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.ProgressCircle [
    ProgressCircle.ariaLabel "Loading..."
    ProgressCircle.value 50
]`,description:o(),elements:u(n.createElement(Gn,{["aria-label"]:"Loading...",value:50}))})}function td(){return r.exports.createElement(m,{title:"Indeterminate",code:`Spectrum.ProgressCircle [
    ProgressCircle.ariaLabel "Loading..."
    ProgressCircle.isIndeterminate true
]`,description:o(),elements:u(n.createElement(Gn,{["aria-label"]:"Loading...",isIndeterminate:!0}))})}function nd(){return r.exports.createElement(m,{title:"Over background",code:`Spectrum.View [
    View.backgroundColor (BackgroundColorValue.Color Positive)
    View.padding (DimValue.Size Size300)
    View.children [
        Spectrum.ProgressCircle [
            ProgressCircle.overBackgroundVariant
            ProgressCircle.isIndeterminate true
            ProgressCircle.ariaLabel "Loading..."
        ]
    ]
]`,description:o(),elements:u(n.createElement(M,{backgroundColor:"positive",padding:"size-300",children:n.Children.toArray([n.createElement(Gn,{variant:"overBackground",isIndeterminate:!0,["aria-label"]:"Loading..."})])}))})}function rd(){const e=g(["ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressCircle.html"})," for more details."]);return r.exports.createElement(D,{title:"ProgressCircle",description:e,examples:g([r.exports.createElement(ed,null),r.exports.createElement(td,null),r.exports.createElement(nd,null)])})}function ld(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.StatusLight [
    StatusLight.variant StatusLightVariant.Positive
    StatusLight.content "Ready"
]`,description:o(),elements:u(n.createElement(Jl,{variant:"positive",children:"Ready"}))})}function id(){const e=g(["Status lights are used to color code categories and labels commonly found in data visualization. When status lights have a semantic meaning, they should use semantic variant colors.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/StatusLight.html"})," for more details."]);return r.exports.createElement(D,{title:"StatusLight",description:e,examples:u(r.exports.createElement(ld,null))})}function ad(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Content "Content is king"
`,description:o(),elements:u(n.createElement(K,{children:n.Children.toArray(["Content is king"])}))})}function od(){const e=g(["Content represents the primary content within a Spectrum container.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Content.html"})," for more details."]);return r.exports.createElement(D,{title:"Content",description:e,examples:u(r.exports.createElement(ad,null))})}function cd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content above"
        Spectrum.Divider ()
        Spectrum.Text "Content below"
    ]
]`,description:o(),elements:u(n.createElement(I,{direction:"column",gap:"size-125",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Content above"])}),r.exports.createElement(j,o()),n.createElement(y,{children:n.Children.toArray(["Content below"])})])}))})}function sd(){return r.exports.createElement(m,{title:"Vertical",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content left"
        Spectrum.Divider [
            Divider.orientation Orientation.Vertical
        ]
        Spectrum.Text "Content right"
    ]
]`,description:o(),elements:u(n.createElement(I,{direction:"row",gap:"size-125",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Content left"])}),n.createElement(j,{orientation:"vertical"}),n.createElement(y,{children:n.Children.toArray(["Content right"])})])}))})}function ud(){return r.exports.createElement(m,{title:"Size",code:`Spectrum.Flex [
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
]`,description:o(),elements:u(n.createElement(I,{direction:"column",gap:"size-125",children:n.Children.toArray([n.createElement(y,{children:n.Children.toArray(["Content above large Divider"])}),n.createElement(j,{size:"L"}),n.createElement(y,{children:n.Children.toArray(["Content above medium Divider"])}),n.createElement(j,{size:"M"}),n.createElement(y,{children:n.Children.toArray(["Content above small Divider"])}),n.createElement(j,{size:"S"})])}))})}function md(){const e=g(["Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Divider.html"})," for more details."]);return r.exports.createElement(D,{title:"Divider",description:e,examples:g([r.exports.createElement(cd,null),r.exports.createElement(sd,null),r.exports.createElement(ud,null)])})}function dd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Footer "\xA9 All rights reserved."
`,description:o(),elements:u(n.createElement(hr,{children:n.Children.toArray(["\xA9 All rights reserved."])}))})}function pd(){const e=g(["Footer represents a footer within a Spectrum container.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Footer.html"})," for more details."]);return r.exports.createElement(D,{title:"Footer",description:e,examples:u(r.exports.createElement(dd,null))})}function hd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Header "Header example..."
`,description:o(),elements:u(n.createElement(Ln,{children:n.Children.toArray(["Header example..."])}))})}function fd(){const e=g(["Header represents a header within a Spectrum container.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Header.html"})," for more details."]);return r.exports.createElement(D,{title:"Header",description:e,examples:u(r.exports.createElement(hd,null))})}function gd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Heading [
    Heading.level 4
    Heading.content "A level 4 heading..."
]`,description:o(),elements:u(n.createElement(U,{level:4,children:"A level 4 heading..."}))})}function xd(){const e=g(["Heading is used to create various levels of typographic hierarchies.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Heading.html"})," for more details."]);return r.exports.createElement(D,{title:"Heading",description:e,examples:u(r.exports.createElement(gd,null))})}function Ed(){let e;return r.exports.createElement(m,{title:"No search results",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.NoSearchResults []
    Spectrum.Heading "No matching results"
    Spectrum.Content "Try another search"
]`,description:o(),elements:u(r.exports.createElement(bt,o(),(e=$l,n.createElement(e,{})),n.createElement(U,{children:n.Children.toArray(["No matching results"])}),n.createElement(K,{children:n.Children.toArray(["Try another search"])})))})}function Sd(){let e;return r.exports.createElement(m,{title:"403 forbidden",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Unauthorized []
    Spectrum.Heading "Error 403: Access not allowed"
    Spectrum.Content "You do not have permission to access this page. Try checking the URL or visit a different page."
]`,description:o(),elements:u(r.exports.createElement(bt,o(),(e=Yl,n.createElement(e,{})),n.createElement(U,{children:n.Children.toArray(["Error 403: Access not allowed"])}),n.createElement(K,{children:n.Children.toArray(["You do not have permission to access this page. Try checking the URL or visit a different page."])})))})}function bd(){let e;return r.exports.createElement(m,{title:"404 not found",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.NotFound []
    Spectrum.Heading "Error 404: Page not found"
    Spectrum.Content "This page isn't available. Try checking the URL or visit a different page."
]`,description:o(),elements:u(r.exports.createElement(bt,o(),(e=Xl,n.createElement(e,{})),n.createElement(U,{children:n.Children.toArray(["Error 404: Page not found"])}),n.createElement(K,{children:n.Children.toArray(["This page isn't available. Try checking the URL or visit a different page."])})))})}function yd(){let e;return r.exports.createElement(m,{title:"500 internal server error",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Error []
    Spectrum.Heading "Error 500: Internal server error"
    Spectrum.Content "Something went wrong. Please try again later."
]`,description:o(),elements:u(r.exports.createElement(bt,o(),(e=Zl,n.createElement(e,{})),n.createElement(U,{children:n.Children.toArray(["Error 500: Internal server error"])}),n.createElement(K,{children:n.Children.toArray(["Something went wrong. Please try again later."])})))})}function Cd(){let e;return r.exports.createElement(m,{title:"503 service unavailable",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Unavailable []
    Spectrum.Heading "Error 503: Service unavailble"
    Spectrum.Content "This page isn't working. Try a different page or try again later."
]`,description:o(),elements:u(r.exports.createElement(bt,o(),(e=Ql,n.createElement(e,{})),n.createElement(U,{children:n.Children.toArray(["Error 503: Service unavailble"])}),n.createElement(K,{children:n.Children.toArray(["This page isn't working. Try a different page or try again later."])})))})}function Ad(){let e;return r.exports.createElement(m,{title:"504 server timeout",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Timeout []
    Spectrum.Heading "Error 504: Server timeout"
    Spectrum.Content "The server took too long. Please try again later."
]`,description:o(),elements:u(r.exports.createElement(bt,o(),(e=ei,n.createElement(e,{})),n.createElement(U,{children:n.Children.toArray(["Error 504: Server timeout"])}),n.createElement(K,{children:n.Children.toArray(["The server took too long. Please try again later."])})))})}function vd(){const e=g(["An IllustratedMessage displays an illustration and a message, usually for an empty state or an error page.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html"})," for more details."]);return r.exports.createElement(D,{title:"IllustratedMessage",description:e,examples:g([r.exports.createElement(Ed,null),r.exports.createElement(Sd,null),r.exports.createElement(bd,null),r.exports.createElement(yd,null),r.exports.createElement(Cd,null),r.exports.createElement(Ad,null)])})}function wd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Image [
    Image.src "https://i.imgur.com/Z7AzH2c.png"
    Image.alt "Sky and roof"
]`,description:o(),elements:u(n.createElement(fr,{src:"https://i.imgur.com/Z7AzH2c.png",alt:"Sky and roof"}))})}function kd(){const e=g(["Image is used to insert and display an image within a component.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Image.html"})," for more details."]);return r.exports.createElement(D,{title:"Image",description:e,examples:u(r.exports.createElement(wd,null))})}function Id(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Keyboard "\u2318V"
`,description:o(),elements:u(n.createElement(pn,{children:n.Children.toArray(["\u2318V"])}))})}function Td(){const e=g(["Keyboard represents text that specifies a keyboard command.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Keyboard.html"})," for more details."]);return r.exports.createElement(D,{title:"Keyboard",description:e,examples:u(r.exports.createElement(Id,null))})}function Fd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Text "A piece of text..."
`,description:o(),elements:u(n.createElement(y,{children:n.Children.toArray(["A piece of text..."])}))})}function Bd(){const e=g(["Text represents text with no specific semantic meaning.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Text.html"})," for more details."]);return r.exports.createElement(D,{title:"Text",description:e,examples:u(r.exports.createElement(Fd,null))})}function Dd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.View [
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
]`,description:o(),elements:u(n.createElement(M,{width:200,borderColor:"hover",borderWidth:"thicker",padding:"size-250",borderRadius:"medium",backgroundColor:{base:q("static-green-400"),S:q("label-gray"),M:q("static-blue-300"),L:q("static-red-400")},children:n.Children.toArray([n.createElement(V,{children:"Click me!"})])}))})}function Vd(){const e=g(["View is a general purpose container with no specific semantics that can be used for custom styling purposes. It supports Spectrum style props to ensure consistency with other Spectrum components.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/View.html"})," for more details."]);return r.exports.createElement(D,{title:"View",description:e,examples:u(r.exports.createElement(Dd,null))})}function Nd(){return r.exports.createElement(m,{title:"Default example",code:`Spectrum.Well [
    Well.content "Better a little which is well done, than a great deal imperfectly."
]`,description:o(),elements:u(n.createElement(Vn,{children:"Better a little which is well done, than a great deal imperfectly."}))})}function Md(){let e;return r.exports.createElement(m,{title:"Another example",code:`Spectrum.Well [
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
]`,description:o(),elements:u(n.createElement(Vn,{role:"region",["aria-labelledby"]:"well-label",children:n.Children.toArray([r.exports.createElement("h3",{id:"well-label",children:n.Children.toArray(["Shipping Address"])}),(e=g(["601 Townsend Street",r.exports.createElement("br",{})," San Francisco, CA 94103"]),r.exports.createElement("p",{children:n.Children.toArray(Array.from(e))}))])}))})}function Rd(){const e=g(["A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.",r.exports.createElement("br",{}),r.exports.createElement("br",{})," Check the official ",r.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Well.html"})," for more details."]);return r.exports.createElement(D,{title:"Well",description:e,examples:g([r.exports.createElement(Nd,null),r.exports.createElement(Md,null)])})}const zd=(()=>{let e=!1;try{(typeof window!="undefined"?typeof window.addEventListener=="function":!1)&&(window.addEventListener("testPassiveEventSupport",t=>{},{passive:!0}),window.removeEventListener("testPassiveEventSupport",t=>{}))}catch{}return e})();function cr(e){return Ea(t=>(t.passive?!zd:!1)?{capture:t.capture,once:t.once,passive:!1}:t,e)}function sr(e){return Sa(t=>{if(t.capture)return{capture:!0}},e)}function Lt(e,t){if(t.indexOf(e)===0)return t}function Cl(e,t){if(pa(t,e))return t}function Pd(e){return e===1?t=>{let l,i,a,c,s,d;return l=Lt("/",t),l!=null?(i=l,"#"+i):(a=Lt("#/",t),a!=null?(c=a,c):(s=Lt("#",t),s!=null?(d=s,"#/"+$r(d,1,d.length-1)):"#/"+t))}:t=>{let l,i;return l=Lt("/",t),l!=null?(i=l,i):"/"+t}}function T(e,t){return Pd(t)(vn("/",Fa(l=>((l.indexOf("?")>=0?!0:l.indexOf("#")===0)?!0:l.indexOf("/")===0)?l:encodeURIComponent(l),e)))}function Ld(e,t,l){t===1?history.pushState(void 0,"",T(e,l)):history.replaceState(void 0,"",T(e,l));const i=document.createEvent("CustomEvent");i.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(i)}function Al(e,t){return Ia(l=>{if(ha(l))return o();{const i=ga(l,"#");if(i==="?")return o();if(Lt("?",i)!=null)return u(i);{const a=i.split("?");if(Zr((c,s)=>c===s,a,null)?!1:a.length===1){const c=a[0];return u(decodeURIComponent(c))}else if(Zr((c,s)=>c===s,a,null)?!1:a.length===2)if(a[1]===""){const c=a[0];return u(decodeURIComponent(c))}else{const c=a[0],s=a[1];return g([decodeURIComponent(c),"?"+s])}else return o()}}},g(fa(Lt("#",e)!=null?$r(e,1,e.length-1):t===1&&(Cl("#",e)!=null||Cl("#/",e)!=null)?"":e,["/"],null,0)))}function _d(e,t,l){return t(Al(e===2?window.location.pathname+window.location.search:window.location.hash,e))}const Gd=ec(e=>{const t=Fn(p=>{const x=tn(e.onUrlChanged,b=>{});_d(tn(e.hashMode,1),x)});if(window.navigator.userAgent.indexOf("Trident")>=0?!0:window.navigator.userAgent.indexOf("MSIE")>=0){const p="hashchange",x=_=>{t(_)},b=void 0,k=le(()=>cr(b),[b]),N=le(()=>sr(b),[b]),H=le(()=>_=>{x(_)},[x]);ar(Fn(()=>(k==null?window.addEventListener(p,H):window.addEventListener(p,H,k),an(()=>{N==null?window.removeEventListener(p,H):window.removeEventListener(p,H,N)}))))}else{const p="popstate",x=t,b=void 0,k=le(()=>cr(b),[b]),N=le(()=>sr(b),[b]),H=le(()=>_=>{x(_)},[x]);ar(Fn(()=>(k==null?window.addEventListener(p,H):window.addEventListener(p,H,k),an(()=>{N==null?window.removeEventListener(p,H):window.removeEventListener(p,H,N)}))))}const l="CUSTOM_NAVIGATION_EVENT",i=t,a=void 0,c=le(()=>cr(a),[a]),s=le(()=>sr(a),[a]),d=le(()=>p=>{i(p)},[i]);ar(Fn(()=>(c==null?window.addEventListener(l,d):window.addEventListener(l,d,c),an(()=>{s==null?window.removeEventListener(l,d):window.removeEventListener(l,d,s)}))));const h=e.application;return h==null?null:h});function he(e,t,l){return n.createElement(Ae,{key:e,title:t,children:Array.from(l)})}function B(e,t){return n.createElement(f,{key:e,textValue:t,title:t})}function Hd(){return g([he("general","General",[B("overview","Overview"),B("installation","Installation")]),he("application","Application",[B("provider","Provider")]),he("layout","Layout",[B("flex","Flex"),B("grid","Grid")]),he("buttons","Buttons",[B("actionButton","ActionButton"),B("actionGroup","ActionGroup"),B("button","Button"),B("buttonGroup","ButtonGroup"),B("logicButton","LogicButton"),B("toggleButton","ToggleButton")]),he("collections","Collections",[B("listBox","ListBox"),B("menu","Menu"),B("menuTrigger","MenuTrigger"),B("tableView","TableView")]),he("forms","Forms",[B("checkbox","Checkbox"),B("checkboxGroup","CheckboxGroup"),B("form","Form"),B("numberField","NumberField"),B("radioGroup","RadioGroup"),B("searchField","SearchField"),B("switch","Switch"),B("textArea","TextArea"),B("textField","TextField")]),he("icons","Icons",[B("workflowIcons","Workflow Icons")]),he("navigation","Navigation",[B("breadcrumbs","Breadcrumbs"),B("link","Link"),B("tabs","Tabs")]),he("overlays","Overlays",[B("alertDialog","AlertDialog"),B("dialog","Dialog"),B("dialogContainer","DialogContainer"),B("dialogTrigger","DialogTrigger"),B("tooltip","Tooltip")]),he("pickers","Pickers",[B("comboBox","ComboBox"),B("picker","Picker")]),he("sliders","Sliders",[B("rangeSlider","RangeSlider"),B("slider","Slider")]),he("status","Status",[B("meter","Meter"),B("progressBar","ProgressBar"),B("progressCircle","ProgressCircle"),B("statusLight","StatusLight")]),he("content'","Content",[B("content","Content"),B("divider","Divider"),B("footer","Footer"),B("header","Header"),B("heading","Heading"),B("illustratedMessage","IllustratedMessage"),B("image","Image"),B("keyboard","Keyboard"),B("text","Text"),B("view","View"),B("well","Well")])])}function Od(e){switch(e){case"installation":return r.exports.createElement(rc,null);case"actionButton":return r.exports.createElement(oc,null);case"actionGroup":return r.exports.createElement(hc,null);case"button":return r.exports.createElement(Ec,null);case"buttonGroup":return r.exports.createElement(Cc,null);case"toggleButton":return r.exports.createElement(Dc,null);case"provider":return r.exports.createElement(zc,null);case"flex":return r.exports.createElement(Wc,null);case"grid":return r.exports.createElement(Uc,null);case"logicButton":return r.exports.createElement(kc,null);case"listBox":return r.exports.createElement(ts,null);case"menu":return r.exports.createElement(us,null);case"menuTrigger":return r.exports.createElement(hs,null);case"tableView":return r.exports.createElement(Es,null);case"checkbox":return r.exports.createElement(vs,null);case"checkboxGroup":return r.exports.createElement(Fs,null);case"form":return r.exports.createElement(Ms,null);case"numberField":return r.exports.createElement(js,null);case"radioGroup":return r.exports.createElement(Ys,null);case"searchField":return r.exports.createElement(eu,null);case"switch":return r.exports.createElement(au,null);case"textArea":return r.exports.createElement(Eu,null);case"textField":return r.exports.createElement(Bu,null);case"workflowIcons":return r.exports.createElement(Nu,null);case"breadcrumbs":return r.exports.createElement(_u,null);case"link":return r.exports.createElement(Wu,null);case"tabs":return r.exports.createElement(Ju,null);case"alertDialog":return r.exports.createElement(Qu,null);case"dialog":return r.exports.createElement(am,null);case"dialogContainer":return r.exports.createElement(um,null);case"dialogTrigger":return r.exports.createElement(xm,null);case"tooltip":return r.exports.createElement(Am,null);case"comboBox":return r.exports.createElement(Dm,null);case"picker":return r.exports.createElement(Rm,null);case"rangeSlider":return r.exports.createElement(Hm,null);case"slider":return r.exports.createElement(jm,null);case"meter":return r.exports.createElement($m,null);case"progressBar":return r.exports.createElement(Qm,null);case"progressCircle":return r.exports.createElement(rd,null);case"statusLight":return r.exports.createElement(id,null);case"content":return r.exports.createElement(od,null);case"divider":return r.exports.createElement(md,null);case"footer":return r.exports.createElement(pd,null);case"header":return r.exports.createElement(fd,null);case"heading":return r.exports.createElement(xd,null);case"illustratedMessage":return r.exports.createElement(vd,null);case"image":return r.exports.createElement(kd,null);case"keyboard":return r.exports.createElement(Td,null);case"text":return r.exports.createElement(Bd,null);case"view":return r.exports.createElement(Vd,null);case"well":return r.exports.createElement(Rd,null);default:return r.exports.createElement(nc,null)}}function vl(e){let t;switch(A(e)?t=52:v(e)===""?A(w(e))?t=0:t=52:v(e)==="installation"?A(w(e))?t=1:t=52:v(e)==="provider"?A(w(e))?t=2:t=52:v(e)==="flex"?A(w(e))?t=3:t=52:v(e)==="grid"?A(w(e))?t=4:t=52:v(e)==="actionbutton"?A(w(e))?t=5:t=52:v(e)==="actiongroup"?A(w(e))?t=6:t=52:v(e)==="button"?A(w(e))?t=7:t=52:v(e)==="buttongroup"?A(w(e))?t=8:t=52:v(e)==="logicbutton"?A(w(e))?t=9:t=52:v(e)==="togglebutton"?A(w(e))?t=10:t=52:v(e)==="listbox"?A(w(e))?t=11:t=52:v(e)==="menu"?A(w(e))?t=12:t=52:v(e)==="menutrigger"?A(w(e))?t=13:t=52:v(e)==="tableview"?A(w(e))?t=14:t=52:v(e)==="checkbox"?A(w(e))?t=15:t=52:v(e)==="checkboxgroup"?A(w(e))?t=16:t=52:v(e)==="form"?A(w(e))?t=17:t=52:v(e)==="numberfield"?A(w(e))?t=18:t=52:v(e)==="radiogroup"?A(w(e))?t=19:t=52:v(e)==="searchfield"?A(w(e))?t=20:t=52:v(e)==="switch"?A(w(e))?t=21:t=52:v(e)==="textarea"?A(w(e))?t=22:t=52:v(e)==="textfield"?A(w(e))?t=23:t=52:v(e)==="icons"?A(w(e))?t=24:t=52:v(e)==="breadcrumbs"?A(w(e))?t=25:t=52:v(e)==="link"?A(w(e))?t=26:t=52:v(e)==="tabs"?A(w(e))?t=27:t=52:v(e)==="alertdialog"?A(w(e))?t=28:t=52:v(e)==="dialog"?A(w(e))?t=29:t=52:v(e)==="dialogcontainer"?A(w(e))?t=30:t=52:v(e)==="dialogtrigger"?A(w(e))?t=31:t=52:v(e)==="tooltip"?A(w(e))?t=32:t=52:v(e)==="combobox"?A(w(e))?t=33:t=52:v(e)==="picker"?A(w(e))?t=34:t=52:v(e)==="rangeslider"?A(w(e))?t=35:t=52:v(e)==="slider"?A(w(e))?t=36:t=52:v(e)==="meter"?A(w(e))?t=37:t=52:v(e)==="progressbar"?A(w(e))?t=38:t=52:v(e)==="progresscircle"?A(w(e))?t=39:t=52:v(e)==="statuslight"?A(w(e))?t=40:t=52:v(e)==="content"?A(w(e))?t=41:t=52:v(e)==="divider"?A(w(e))?t=42:t=52:v(e)==="footer"?A(w(e))?t=43:t=52:v(e)==="header"?A(w(e))?t=44:t=52:v(e)==="heading"?A(w(e))?t=45:t=52:v(e)==="illustratedmessage"?A(w(e))?t=46:t=52:v(e)==="image"?A(w(e))?t=47:t=52:v(e)==="keyboard"?A(w(e))?t=48:t=52:v(e)==="text"?A(w(e))?t=49:t=52:v(e)==="view"?A(w(e))?t=50:t=52:v(e)==="well"&&A(w(e))?t=51:t=52,t){case 0:return"overview";case 1:return"installation";case 2:return"provider";case 3:return"flex";case 4:return"grid";case 5:return"actionButton";case 6:return"actionGroup";case 7:return"button";case 8:return"buttonGroup";case 9:return"logicButton";case 10:return"toggleButton";case 11:return"listBox";case 12:return"menu";case 13:return"menuTrigger";case 14:return"tableView";case 15:return"checkbox";case 16:return"checkboxGroup";case 17:return"form";case 18:return"numberField";case 19:return"radioGroup";case 20:return"searchField";case 21:return"switch";case 22:return"textArea";case 23:return"textField";case 24:return"workflowIcons";case 25:return"breadcrumbs";case 26:return"link";case 27:return"tabs";case 28:return"alertDialog";case 29:return"dialog";case 30:return"dialogContainer";case 31:return"dialogTrigger";case 32:return"tooltip";case 33:return"comboBox";case 34:return"picker";case 35:return"rangeSlider";case 36:return"slider";case 37:return"meter";case 38:return"progressBar";case 39:return"progressCircle";case 40:return"statusLight";case 41:return"content";case 42:return"divider";case 43:return"footer";case 44:return"header";case 45:return"heading";case 46:return"illustratedMessage";case 47:return"image";case 48:return"keyboard";case 49:return"text";case 50:return"view";case 51:return"well";case 52:return"overview"}}function Wd(e){switch(e){case"installation":return T(u("installation"),1);case"provider":return T(u("provider"),1);case"flex":return T(u("flex"),1);case"grid":return T(u("grid"),1);case"actionButton":return T(u("actionbutton"),1);case"actionGroup":return T(u("actiongroup"),1);case"button":return T(u("button"),1);case"buttonGroup":return T(u("buttongroup"),1);case"logicButton":return T(u("logicbutton"),1);case"toggleButton":return T(u("togglebutton"),1);case"listBox":return T(u("listbox"),1);case"menu":return T(u("menu"),1);case"menuTrigger":return T(u("menutrigger"),1);case"tableView":return T(u("tableview"),1);case"checkbox":return T(u("checkbox"),1);case"checkboxGroup":return T(u("checkboxgroup"),1);case"form":return T(u("form"),1);case"numberField":return T(u("numberfield"),1);case"radioGroup":return T(u("radiogroup"),1);case"searchField":return T(u("searchfield"),1);case"switch":return T(u("switch"),1);case"textArea":return T(u("textarea"),1);case"textField":return T(u("textfield"),1);case"workflowIcons":return T(u("icons"),1);case"breadcrumbs":return T(u("breadcrumbs"),1);case"link":return T(u("link"),1);case"tabs":return T(u("tabs"),1);case"alertDialog":return T(u("alertdialog"),1);case"dialog":return T(u("dialog"),1);case"dialogContainer":return T(u("dialogcontainer"),1);case"dialogTrigger":return T(u("dialogtrigger"),1);case"tooltip":return T(u("tooltip"),1);case"comboBox":return T(u("combobox"),1);case"picker":return T(u("picker"),1);case"rangeSlider":return T(u("rangeslider"),1);case"slider":return T(u("slider"),1);case"meter":return T(u("meter"),1);case"progressBar":return T(u("progressbar"),1);case"progressCircle":return T(u("progresscircle"),1);case"statusLight":return T(u("statuslight"),1);case"content":return T(u("content"),1);case"divider":return T(u("divider"),1);case"footer":return T(u("footer"),1);case"header":return T(u("header"),1);case"heading":return T(u("heading"),1);case"illustratedMessage":return T(u("illustratedmessage"),1);case"image":return T(u("image"),1);case"keyboard":return T(u("keyboard"),1);case"text":return T(u("text"),1);case"view":return T(u("view"),1);case"well":return T(u("well"),1);default:return T(u(""),1)}}class wl extends lt{constructor(t){super();this.SelectedDoc=t}}class qd extends qn{constructor(t,...l){super();this.tag=t|0,this.fields=l}cases(){return["SelectDocsId"]}}function jd(){return[new wl(vl(Al(window.location.hash,1))),o()]}function Ud(e,t){return[new wl(e.fields[0]),o()]}function Kd(e){let t;const l=e.dispatch,i=e.model,a=Hd(),c=F(!1),s=c[1],d=c[0];return n.createElement(I,{id:"main",direction:"column",alignItems:"center",children:n.Children.toArray([n.createElement(M,{id:"toggle-host",borderBottomColor:"dark",borderBottomWidth:"thin",alignSelf:"stretch",children:n.Children.toArray([n.createElement(ht,{isSelected:d,onChange:h=>{setTimeout(()=>{s(h)},0)},children:n.Children.toArray(Array.from(C(E(()=>{let h,p;return S(d?(h=ti,n.createElement(h,{})):(p=ni,n.createElement(p,{})))})))),alignSelf:"start"})])}),n.createElement(I,{id:"main-content",flex:1,columnGap:"size-300",direction:"row",children:n.Children.toArray([n.createElement(M,ue(C(E(()=>R(S(["id","navigation-list-host"]),E(()=>R(d?In():S(["UNSAFE_className","collapsed"]),E(()=>R(S(["backgroundColor","gray-200"]),E(()=>S(["children",n.Children.toArray([n.createElement(Fe,{id:"navigation-list",children:Array.from(a),["aria-label"]:"Navigation panel",selectionMode:"single",disallowEmptySelection:!0,selectedKeys:[i.SelectedDoc],onSelectionChange:h=>{const p=ae(h.values());let x,b;switch(A(p)?x=1:A(w(p))?(x=0,b=v(p)):x=1,x){case 0:{Ld(u(Wd(b)),1,1),s(!1),document.getElementById("content-host").scrollTo(0,0);break}}}})])]))))))))))),n.createElement(M,{id:"content-host",children:n.Children.toArray([(t=u(Gd({onUrlChanged:h=>{l(new qd(0,vl(h)))},application:r.exports.createElement(r.exports.Fragment,{},Od(i.SelectedDoc))})),r.exports.createElement("div",{children:n.Children.toArray(Array.from(t))}))])})])})])})}function Jd(e,t){let l;return n.createElement(Gt,ue(g([(l=dn,["theme",l]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["id","spectrum-provider"],["children",n.Children.toArray([r.exports.createElement(Kd,{model:e,dispatch:t})])]])))}Ro(Go("app-root",Do(jd,(e,t)=>Ud(e),(e,t)=>Jd(e,t))));
