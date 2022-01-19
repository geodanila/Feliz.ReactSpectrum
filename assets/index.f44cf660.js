import{r as l,a as Rr,_ as Gr,D as vn,F as O,W as Or,A as _,T as A,b as Je,I as B,B as R,V as M,c as Ft,L as Zt,d as ht,e as Hr,f as jr,g as Yt,h as Xt,i as In,j as Ur,k as Wr,l as Kr,m as Jr,n as qr,o as Zr,p as Yr,q as Xr,s as Dt,P as gt,R as Qr,t as Qt,C as $r,u as zt,G as Nn,v as ei,w as ge,S as Ae,M as J,x as q,K as $t,y as en,z as tn,E as Et,H as nn,J as qe,N as Z,O as ti,Q as ni,U as ri,X as ii}from"./vendor.48849a1e.js";const oi=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};oi();function Ne(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function li(e){return typeof e.CompareTo=="function"}function ai(e){return typeof e.Equals=="function"}function ci(e){return typeof e.GetHashCode=="function"}function Lt(e,t){return Object.getPrototypeOf(e).constructor===Object.getPrototypeOf(t).constructor}class si{constructor(t){this.iter=t}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this.iter.next();return this.current=t.value,!t.done}["System.Collections.IEnumerator.Reset"](){throw new Error("JS iterators cannot be reset")}Dispose(){}}function Te(e){return typeof e.GetEnumerator=="function"?e.GetEnumerator():new si(e[Symbol.iterator]())}function Tn(e){return{[Symbol.iterator](){return this},next(){const t=e["System.Collections.IEnumerator.MoveNext"](),n=t?e["System.Collections.IEnumerator.get_Current"]():void 0;return{done:!t,value:n}}}}function ke(e,t){let n=e.toString(10);for(;n.length<t;)n="0"+n;return n}function Mn(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function Vn(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Me{static id(t){return Me.idMap.has(t)||Me.idMap.set(t,++Me.count),Me.idMap.get(t)}}Me.idMap=new WeakMap;Me.count=0;function ui(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function rn(e){return e*2654435761|0}function xt(e){return e.length===0?0:e.reduce((t,n)=>(t<<5)+t^n)}function mi(e){return e.getTime()}function di(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=Ze(e[r]);return xt(n)}function Ze(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return rn(e);case"string":return ui(e);default:{if(ci(e))return e.GetHashCode();if(Ne(e))return di(e);if(e instanceof Date)return mi(e);if(Object.getPrototypeOf(e).constructor===Object){const t=Object.values(e).map(n=>Ze(n));return xt(t)}else return rn(Me.id(e))}}}function pi(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function Fn(e,t){return pi(e,t,St)}function fi(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let o=0;o<n.length;o++)if(n[o]!==r[o]||!St(e[n[o]],t[r[o]]))return!1;return!0}function St(e,t){return e===t?!0:e==null?t==null:t==null||typeof e!="object"?!1:ai(e)?e.Equals(t):Ne(e)?Ne(t)&&Fn(e,t):e instanceof Date?t instanceof Date&&Dn(e,t)===0:Object.getPrototypeOf(e).constructor===Object&&fi(e,t)}function Dn(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+Mn(e),r=t.getTime()+Mn(t)),n===r?0:n<r?-1:1}function zn(e,t){return e===t?0:e<t?-1:1}function hi(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,o=0;r<e.length;r++)if(o=n(e[r],t[r]),o!==0)return o;return 0}function Ln(e,t){return hi(e,t,Pe)}function gi(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let o=0,a=0;o<n.length;o++){const c=n[o];if(c!==r[o])return c<r[o]?-1:1;if(a=Pe(e[c],t[c]),a!==0)return a}return 0}function Pe(e,t){return e===t?0:e==null?t==null?0:-1:t==null?1:typeof e!="object"?e<t?-1:1:li(e)?e.CompareTo(t):Ne(e)?Ne(t)?Ln(e,t):-1:e instanceof Date?t instanceof Date?Dn(e,t):-1:Object.getPrototypeOf(e).constructor===Object?gi(e,t):-1}function Pn(e,t,n){return e(t,n)>0?t:n}function Ye(e){const t={};for(const n of e)t[n[0]]=n[1];return t}const yt=Symbol("curried");function on(e,t){if(t==null||t.length>1)return t;const n=(...r)=>{let o=t;for(let a=0;a<e;a++)o=o(r[a]);return o};return n[yt]=t,n}function ln(e,t,n){return r=>t===1?n(...e.concat([r])):ln(e.concat([r]),t-1,n)}function _n(e,t){return t==null||t.length===1?t:yt in t?t[yt]:ln([],e,t)}function Ei(e,t,n){if(t!=null)if(yt in t){t=t[yt];for(let r=0;r<n.length;r++)t=t(n[r]);return t}else return ln(n,e,t)}function xi(e){let t=0,n="[";for(const r of e){if(t===0)n+=Ee(r);else if(t===100){n+="; ...";break}else n+="; "+Ee(r);t++}return n+"]"}function Ee(e,t=0){if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return xi(e);{const n=Object.getPrototypeOf(e).constructor;return n===Object&&t<10?"{ "+Object.entries(e).map(([r,o])=>r+" = "+Ee(o,t+1)).join(`
  `)+" }":n.name}}return String(e)}function Si(e,t){if(t.length===0)return e;{let n="",r=!0;return t.length===1?(n=Ee(t[0]),r=n.indexOf(" ")>=0):n=t.map(o=>Ee(o)).join(", "),e+(r?" (":" ")+n+(r?")":"")}}class an{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Si(this.name,this.fields)}GetHashCode(){const t=this.fields.map(n=>Ze(n));return t.splice(0,0,rn(this.tag)),xt(t)}Equals(t){return this===t?!0:Lt(this,t)&&this.tag===t.tag?Fn(this.fields,t.fields):!1}CompareTo(t){return this===t?0:Lt(this,t)?this.tag===t.tag?Ln(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function yi(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}function wi(e){return"{ "+Object.entries(e).map(([t,n])=>t+" = "+Ee(n)).join(`
  `)+" }"}function bi(e){const t=Object.values(e).map(n=>Ze(n));return xt(t)}function Ci(e,t){if(e===t)return!0;if(Lt(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!St(e[n[r]],t[n[r]]))return!1;return!0}else return!1}function Ai(e,t){if(e===t)return 0;if(Lt(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const o=Pe(e[n[r]],t[n[r]]);if(o!==0)return o}return 0}else return-1}class _e{toJSON(){return yi(this)}toString(){return wi(this)}GetHashCode(){return bi(this)}Equals(t){return Ci(this,t)}CompareTo(t){return Ai(this,t)}}const Ve=Symbol("numeric");function ki(e){return typeof e=="number"||(e==null?void 0:e[Ve])}function Bi(e,t){return typeof e=="number"?e<t?-1:e>t?1:0:e.CompareTo(t)}function vi(e,t){return typeof e=="number"?e*t:e[Ve]().multiply(t)}function Ii(e,t){return typeof e=="number"?e.toFixed(t):e[Ve]().toFixed(t)}function Rn(e,t){return typeof e=="number"?e.toPrecision(t):e[Ve]().toPrecision(t)}function Gn(e,t){return typeof e=="number"?e.toExponential(t):e[Ve]().toExponential(t)}function On(e){return typeof e=="number"?(Number(e)>>>0).toString(16):e[Ve]().toHex()}var F={GetHashCode(){return xt([this.s,this.e].concat(this.c))},Equals(e){return!this.cmp(e)},CompareTo(e){return this.cmp(e)},[Ve](){const e=this;return{multiply:t=>e.mul(t),toPrecision:t=>e.toPrecision(t),toExponential:t=>e.toExponential(t),toFixed:t=>e.toFixed(t),toHex:()=>(Number(e)>>>0).toString(16)}}},Ni=28,Ti=1,Re=1e6,Hn=1e6,Mi=-29,Vi=29,Fi=!1,wt="[big.js] ",Ge=wt+"Invalid ",Pt=Ge+"decimal places",Di=Ge+"rounding mode",jn=wt+"Division by zero",xe=void 0,zi=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Un(){function e(t){var n=this;if(!(n instanceof e))return t===xe?Un():new e(t);if(t instanceof e)n.s=t.s,n.e=t.e,n.c=t.c.slice(),Li(n);else{if(typeof t!="string"){if(e.strict===!0)throw TypeError(Ge+"number");t=t===0&&1/t<0?"-0":String(t)}Pi(n,t)}n.constructor=e}return e.prototype=F,e.DP=Ni,e.RM=Ti,e.NE=Mi,e.PE=Vi,e.strict=Fi,e}function Li(e){if(e.c.length>1&&!e.c[0]){let t=e.c.findIndex(n=>n);e.c=e.c.slice(t),e.e=e.e-t}}function Pi(e,t){var n,r,o;if(!zi.test(t))throw Error(Ge+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),o=t.length,r=0;r<n&&r<o&&t.charAt(r)=="0";)++r;if(r==o)e.c=[e.e=0];else for(e.e=n-r-1,e.c=[],n=0;r<o;)e.c[n++]=+t.charAt(r++);return e=Fe(e,De.DP+1,De.RM),e}function Fe(e,t,n,r){var o=e.c;if(n===xe&&(n=De.RM),n!==0&&n!==1&&n!==2&&n!==3)throw Error(Di);if(t<1)r=n===3&&(r||!!o[0])||t===0&&(n===1&&o[0]>=5||n===2&&(o[0]>5||o[0]===5&&(r||o[1]!==xe))),o.length=1,r?(e.e=e.e-t+1,o[0]=1):o[0]=e.e=0;else if(t<o.length){const a=o.findIndex((c,s)=>s>=t&&c>0)<0;if(r=n===1&&o[t]>=5||n===2&&(o[t]>5||o[t]===5&&(r||o[t+1]!==xe||o[t-1]&1))||n===3&&(r||!a),o.length=t--,r)for(;++o[t]>9;)o[t]=0,t--||(++e.e,o.unshift(1));for(t=o.length;!o[--t];)o.pop()}return e}function Xe(e,t,n){var r=e.e,o=e.c.join(""),a=o.length;if(t)o=o.charAt(0)+(a>1?"."+o.slice(1):"")+(r<0?"e":"e+")+r;else if(r<0){for(;++r;)o="0"+o;o="0."+o}else if(r>0)if(++r>a)for(r-=a;r--;)o+="0";else r<a&&(o=o.slice(0,r)+"."+o.slice(r));else a>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&n?"-"+o:o}F.abs=function(){var e=new this.constructor(this);return e.s=1,e};F.cmp=function(e){var t,n=this.constructor,r=new n(this),e=new n(e),o=r.c,a=e.c,c=r.s,s=e.s,m=r.e,u=e.e;if(!o[0]||!a[0])return o[0]?c:a[0]?-s:0;if(c!=s)return c;if(t=c<0,m!=u)return m>u^t?1:-1;for(s=Math.max(o.length,a.length),c=0;c<s;c++)if(m=c<o.length?o[c]:0,u=c<a.length?a[c]:0,m!=u)return m>u^t?1:-1;return 0};F.div=function(e){var t=this.constructor,n=new t(this),e=new t(e),r=n.c,o=e.c,a=n.s==e.s?1:-1,c=t.DP;if(c!==~~c||c<0||c>Re)throw Error(Pt);if(!o[0])throw Error(jn);if(!r[0])return e.s=a,e.c=[e.e=0],e;var s,m,u,p,h,w=o.slice(),k=s=o.length,D=r.length,V=r.slice(0,s),U=V.length,Ke=e,Jt=Ke.c=[],qt=0,ft=c+(Ke.e=n.e-e.e)+1;for(Ke.s=a,a=ft<0?0:ft,w.unshift(0);U++<s;)V.push(0);do{for(u=0;u<10;u++){if(s!=(U=V.length))p=s>U?1:-1;else for(h=-1,p=0;++h<s;)if(o[h]!=V[h]){p=o[h]>V[h]?1:-1;break}if(p<0){for(m=U==s?o:w;U;){if(V[--U]<m[U]){for(h=U;h&&!V[--h];)V[h]=9;--V[h],V[U]+=10}V[U]-=m[U]}for(;!V[0];)V.shift()}else break}Jt[qt++]=p?u:++u,V[0]&&p?V[U]=r[k]||0:V=[r[k]]}while((k++<D||V[0]!==xe)&&a--);return!Jt[0]&&qt!=1&&(Jt.shift(),Ke.e--,ft--),qt>ft&&Fe(Ke,ft,t.RM,V[0]!==xe),Ke};F.eq=function(e){return this.cmp(e)===0};F.gt=function(e){return this.cmp(e)>0};F.gte=function(e){return this.cmp(e)>-1};F.lt=function(e){return this.cmp(e)<0};F.lte=function(e){return this.cmp(e)<1};F.minus=F.sub=function(e){var t,n,r,o,a=this.constructor,c=new a(this),e=new a(e),s=c.s,m=e.s;if(s!=m)return e.s=-m,c.plus(e);var u=c.c.slice(),p=c.e,h=e.c,w=e.e;if(!u[0]||!h[0])return h[0]?e.s=-m:u[0]?e=new a(c):e.s=1,e;if(s=p-w){for((o=s<0)?(s=-s,r=u):(w=p,r=h),r.reverse(),m=s;m--;)r.push(0);r.reverse()}else for(n=((o=u.length<h.length)?u:h).length,s=m=0;m<n;m++)if(u[m]!=h[m]){o=u[m]<h[m];break}if(o&&(r=u,u=h,h=r,e.s=-e.s),(m=(n=h.length)-(t=u.length))>0)for(;m--;)u[t++]=0;for(m=t;n>s;){if(u[--n]<h[n]){for(t=n;t&&!u[--t];)u[t]=9;--u[t],u[n]+=10}u[n]-=h[n]}for(;u[--m]===0;)u.pop();for(;u[0]===0;)u.shift(),--w;return u[0]||(e.s=1,u=[w=0]),e.c=u,e.e=w,e};F.mod=function(e){var t,n=this.constructor,r=new n(this),e=new n(e),o=r.s,a=e.s;if(!e.c[0])throw Error(jn);return r.s=e.s=1,t=e.cmp(r)==1,r.s=o,e.s=a,t?new n(r):(o=n.DP,a=n.RM,n.DP=n.RM=0,r=r.div(e),n.DP=o,n.RM=a,this.minus(r.times(e)))};F.plus=F.add=function(e){var t,n,r,o=this.constructor,a=new o(this),e=new o(e);if(a.s!=e.s)return e.s=-e.s,a.minus(e);var c=a.e,s=a.c,m=e.e,u=e.c;if(!s[0]||!u[0])return u[0]||(s[0]?e=new o(a):e.s=a.s),e;if(s=s.slice(),t=c-m){for(t>0?(m=c,r=u):(t=-t,r=s),r.reverse();t--;)r.push(0);r.reverse()}for(s.length-u.length<0&&(r=u,u=s,s=r),t=u.length,n=0;t;s[t]%=10)n=(s[--t]=s[t]+u[t]+n)/10|0;for(n&&(s.unshift(n),++m),t=s.length;s[--t]===0;)s.pop();return e.c=s,e.e=m,e};F.pow=function(e){var t=this.constructor,n=new t(this),r=new t("1"),o=new t("1"),a=e<0;if(e!==~~e||e<-Hn||e>Hn)throw Error(Ge+"exponent");for(a&&(e=-e);e&1&&(r=r.times(n)),e>>=1,!!e;)n=n.times(n);return a?o.div(r):r};F.prec=function(e,t){if(e!==~~e||e<1||e>Re)throw Error(Ge+"precision");return Fe(new this.constructor(this),e,t)};F.round=function(e,t){if(e===xe)e=0;else if(e!==~~e||e<-Re||e>Re)throw Error(Pt);return Fe(new this.constructor(this),e+this.e+1,t)};F.sqrt=function(){var e,t,n,r=this.constructor,o=new r(this),a=o.s,c=o.e,s=new r("0.5");if(!o.c[0])return new r(o);if(a<0)throw Error(wt+"No square root");a=Math.sqrt(o+""),a===0||a===1/0?(t=o.c.join(""),t.length+c&1||(t+="0"),a=Math.sqrt(t),c=((c+1)/2|0)-(c<0||c&1),e=new r((a==1/0?"5e":(a=a.toExponential()).slice(0,a.indexOf("e")+1))+c)):e=new r(a+""),c=e.e+(r.DP+=4);do n=e,e=s.times(n.plus(o.div(n)));while(n.c.slice(0,c).join("")!==e.c.slice(0,c).join(""));return Fe(e,(r.DP-=4)+e.e+1,r.RM)};F.times=F.mul=function(e){var t,n=this.constructor,r=new n(this),e=new n(e),o=r.c,a=e.c,c=o.length,s=a.length,m=r.e,u=e.e;if(e.s=r.s==e.s?1:-1,!o[0]||!a[0])return e.c=[e.e=0],e;for(e.e=m+u,c<s&&(t=o,o=a,a=t,u=c,c=s,s=u),t=new Array(u=c+s);u--;)t[u]=0;for(m=s;m--;){for(s=0,u=c+m;u>m;)s=t[u]+a[m]*o[u-m-1]+s,t[u--]=s%10,s=s/10|0;t[u]=s}for(s?++e.e:t.shift(),m=t.length;!t[--m];)t.pop();return e.c=t,e};F.toExponential=function(e,t){var n=this,r=n.c[0];if(e!==xe){if(e!==~~e||e<0||e>Re)throw Error(Pt);for(n=Fe(new n.constructor(n),++e,t);n.c.length<e;)n.c.push(0)}return Xe(n,!0,!!r)};F.toFixed=function(e,t){var n=this,r=n.c[0];if(e!==xe){if(e!==~~e||e<0||e>Re)throw Error(Pt);for(n=Fe(new n.constructor(n),e+n.e+1,t),e=e+n.e+1;n.c.length<e;)n.c.push(0)}return Xe(n,!1,!!r)};F.toJSON=F.toString=function(){var e=this,t=e.constructor;return Xe(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};F.toNumber=function(){var e=Number(Xe(this,!0,!0));if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(wt+"Imprecise conversion");return e};F.toPrecision=function(e,t){var n=this,r=n.constructor,o=n.c[0];if(e!==xe){if(e!==~~e||e<1||e>Re)throw Error(Ge+"precision");for(n=Fe(new r(n),e,t);n.c.length<e;)n.c.push(0)}return Xe(n,e<=n.e||n.e<=r.NE||n.e>=r.PE,!!o)};F.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(wt+"valueOf disallowed");return Xe(e,e.e<=t.NE||e.e>=t.PE,!0)};var De=Un();new De(0);new De(1);new De(-1);new De("79228162514264337593543950335");new De("-79228162514264337593543950335");var Wn;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(Wn||(Wn={}));function _i(e){return e===-2147483648?e:-e}var ne=null;try{ne=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Se(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}Se.prototype.GetHashCode=function(){let e=this.unsigned?1:0;return e=(e<<5)+e^this.high,e=(e<<5)+e^this.low,e};Se.prototype.Equals=function(e){return oe(this,e)};Se.prototype.CompareTo=function(e){return At(this,e)};Se.prototype.toString=function(e){return Ct(this,e)};Se.prototype.toJSON=function(){return Ct(this)};Se.prototype[Ve]=function(){const e=this;return{multiply:t=>X(e,t),toPrecision:t=>String(e)+0 .toPrecision(t).substr(1),toExponential:t=>String(e)+0 .toExponential(t).substr(1),toFixed:t=>String(e)+0 .toFixed(t).substr(1),toHex:()=>Ct(e.unsigned?e:eo(Xi(e),!0),16)}};Object.defineProperty(Se.prototype,"__isLong__",{value:!0});function me(e){return(e&&e.__isLong__)===!0}var Kn={},Jn={};function Qe(e,t){var n,r,o;return t?(e>>>=0,(o=0<=e&&e<256)&&(r=Jn[e],r)?r:(n=L(e,(e|0)<0?-1:0,!0),o&&(Jn[e]=n),n)):(e|=0,(o=-128<=e&&e<128)&&(r=Kn[e],r)?r:(n=L(e,e<0?-1:0,!1),o&&(Kn[e]=n),n))}function de(e,t){if(isNaN(e))return t?Le:pe;if(t){if(e<0)return Le;if(e>=Yn)return Hi}else{if(e<=-Xn)return re;if(e+1>=Xn)return Oi}return e<0?H(de(-e,t)):L(e%$e|0,e/$e|0,t)}function L(e,t,n){return new Se(e,t,n)}var _t=Math.pow;function qn(e,t,n){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return pe;if(typeof t=="number"?(n=t,t=!1):t=!!t,n=n||10,n<2||36<n)throw RangeError("radix");var r=e.indexOf("-");if(r>0)throw Error("interior hyphen");if(r===0)return H(qn(e.substring(1),t,n));for(var o=de(_t(n,8)),a=pe,c=0;c<e.length;c+=8){var s=Math.min(8,e.length-c),m=parseInt(e.substring(c,c+s),n);if(s<8){var u=de(_t(n,s));a=He(X(a,u),de(m))}else a=X(a,o),a=He(a,de(m))}return a.unsigned=t,a}function ze(e,t){return typeof e=="number"?de(e,t):typeof e=="string"?qn(e,t):L(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}var Zn=1<<16,Ri=1<<24,$e=Zn*Zn,Yn=$e*$e,Xn=Yn/2,Qn=Qe(Ri),pe=Qe(0),Le=Qe(0,!0),bt=Qe(1),Gi=Qe(1,!0),$n=Qe(-1),Oi=L(4294967295|0,2147483647|0,!1),Hi=L(4294967295|0,4294967295|0,!0),re=L(0,2147483648|0,!1);function et(e){return e.unsigned?e.low>>>0:e.low}function Rt(e){return e.unsigned?(e.high>>>0)*$e+(e.low>>>0):e.high*$e+(e.low>>>0)}function Ct(e,t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(Oe(e))return"0";if(ie(e))if(oe(e,re)){var n=de(t),r=Be(e,n),o=tt(X(r,n),e);return Ct(r,t)+et(o).toString(t)}else return"-"+Ct(H(e),t);for(var a=de(_t(t,6),e.unsigned),c=e,s="";;){var m=Be(c,a),u=et(tt(c,X(m,a)))>>>0,p=u.toString(t);if(c=m,Oe(c))return p+s;for(;p.length<6;)p="0"+p;s=""+p+s}}function Oe(e){return e.high===0&&e.low===0}function ie(e){return!e.unsigned&&e.high<0}function er(e){return(e.low&1)==1}function oe(e,t){return me(t)||(t=ze(t)),e.unsigned!==t.unsigned&&e.high>>>31==1&&t.high>>>31==1?!1:e.high===t.high&&e.low===t.low}function tr(e,t){return At(e,t)<0}function cn(e,t){return At(e,t)>0}function ji(e,t){return At(e,t)>=0}function At(e,t){if(me(t)||(t=ze(t)),oe(e,t))return 0;var n=ie(e),r=ie(t);return n&&!r?-1:!n&&r?1:e.unsigned?t.high>>>0>e.high>>>0||t.high===e.high&&t.low>>>0>e.low>>>0?-1:1:ie(tt(e,t))?-1:1}function H(e){return!e.unsigned&&oe(e,re)?re:He(Wi(e),bt)}function He(e,t){me(t)||(t=ze(t));var n=e.high>>>16,r=e.high&65535,o=e.low>>>16,a=e.low&65535,c=t.high>>>16,s=t.high&65535,m=t.low>>>16,u=t.low&65535,p=0,h=0,w=0,k=0;return k+=a+u,w+=k>>>16,k&=65535,w+=o+m,h+=w>>>16,w&=65535,h+=r+s,p+=h>>>16,h&=65535,p+=n+c,p&=65535,L(w<<16|k,p<<16|h,e.unsigned)}function tt(e,t){return me(t)||(t=ze(t)),He(e,H(t))}function X(e,t){if(Oe(e))return e.unsigned?Le:pe;if(me(t)||(t=ze(t)),ne){var n=ne.mul(e.low,e.high,t.low,t.high);return L(n,ne.get_high(),e.unsigned)}if(Oe(t))return e.unsigned?Le:pe;if(oe(e,re))return er(t)?re:pe;if(oe(t,re))return er(e)?re:pe;if(ie(e))return ie(t)?X(H(e),H(t)):H(X(H(e),t));if(ie(t))return H(X(e,H(t)));if(tr(e,Qn)&&tr(t,Qn))return de(Rt(e)*Rt(t),e.unsigned);var r=e.high>>>16,o=e.high&65535,a=e.low>>>16,c=e.low&65535,s=t.high>>>16,m=t.high&65535,u=t.low>>>16,p=t.low&65535,h=0,w=0,k=0,D=0;return D+=c*p,k+=D>>>16,D&=65535,k+=a*p,w+=k>>>16,k&=65535,k+=c*u,w+=k>>>16,k&=65535,w+=o*p,h+=w>>>16,w&=65535,w+=a*u,h+=w>>>16,w&=65535,w+=c*m,h+=w>>>16,w&=65535,h+=r*p+o*u+a*m+c*s,h&=65535,L(k<<16|D,h<<16|w,e.unsigned)}function Be(e,t){if(me(t)||(t=ze(t)),Oe(t))throw Error("division by zero");if(ne){if(!e.unsigned&&e.high===-2147483648&&t.low===-1&&t.high===-1)return e;var n=(e.unsigned?ne.div_u:ne.div_s)(e.low,e.high,t.low,t.high);return L(n,ne.get_high(),e.unsigned)}if(Oe(e))return e.unsigned?Le:pe;var r,o,a;if(e.unsigned){if(t.unsigned||(t=Yi(t)),cn(t,e))return Le;if(cn(t,Zi(e,1)))return Gi;a=Le}else{if(oe(e,re)){if(oe(t,bt)||oe(t,$n))return re;if(oe(t,re))return bt;var c=qi(e,1);return r=Ji(Be(c,t),1),oe(r,pe)?ie(t)?bt:$n:(o=tt(e,X(t,r)),a=He(r,Be(o,t)),a)}else if(oe(t,re))return e.unsigned?Le:pe;if(ie(e))return ie(t)?Be(H(e),H(t)):H(Be(H(e),t));if(ie(t))return H(Be(e,H(t)));a=pe}for(o=e;ji(o,t);){r=Math.max(1,Math.floor(Rt(o)/Rt(t)));for(var s=Math.ceil(Math.log(r)/Math.LN2),m=s<=48?1:_t(2,s-48),u=de(r),p=X(u,t);ie(p)||cn(p,o);)r-=m,u=de(r,e.unsigned),p=X(u,t);Oe(u)&&(u=bt),a=He(a,u),o=tt(o,p)}return a}function Ui(e,t){if(me(t)||(t=ze(t)),ne){var n=(e.unsigned?ne.rem_u:ne.rem_s)(e.low,e.high,t.low,t.high);return L(n,ne.get_high(),e.unsigned)}return tt(e,X(Be(e,t),t))}function Wi(e){return L(~e.low,~e.high,e.unsigned)}function Ki(e,t){return me(t)||(t=ze(t)),L(e.low&t.low,e.high&t.high,e.unsigned)}function Ji(e,t){return me(t)&&(t=et(t)),(t&=63)==0?e:t<32?L(e.low<<t,e.high<<t|e.low>>>32-t,e.unsigned):L(0,e.low<<t-32,e.unsigned)}function qi(e,t){return me(t)&&(t=et(t)),(t&=63)==0?e:t<32?L(e.low>>>t|e.high<<32-t,e.high>>t,e.unsigned):L(e.high>>t-32,e.high>=0?0:-1,e.unsigned)}function Zi(e,t){if(me(t)&&(t=et(t)),t&=63,t===0)return e;var n=e.high;if(t<32){var r=e.low;return L(r>>>t|n<<32-t,n>>>t,e.unsigned)}else return L(t===32?n:n>>>t-32,0,e.unsigned)}function Yi(e){return e.unsigned?e:L(e.low,e.high,!0)}function Xi(e,t){return t?Qi(e):$i(e)}function Qi(e){var t=e.high,n=e.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}function $i(e){var t=e.high,n=e.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,n>>>24,n>>>16&255,n>>>8&255,n&255]}function eo(e,t,n){return n?to(e,t):no(e,t)}function to(e,t){return new Se(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)}function no(e,t){return new Se(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}const le=He,ae=X,ve=Be,ro=Ui,io=H,nt=Ki,Gt=At,j=L,ye=et;function G(e,t,n){let r=e,o=0;switch(n){case 0:r=e<<24>>24,o=r;break;case 4:r=e<<24>>>24;break;case 1:r=e<<16>>16,o=r;break;case 5:r=e<<16>>>16;break;case 2:r=e>>0,o=r;break;case 6:r=e>>>0;break}return L(r,o>>31,t)}function sn(e){const t=e<0;e=Math.abs(e);const n=~~(e/36e5),r=e%36e5/6e4;return(t?"-":"+")+ke(n,2)+":"+ke(r,2)}function Ot(e,t){const n=e.toISOString();return t==="first"?n.substring(0,n.indexOf("T")):n.substring(n.indexOf("T")+1,n.length-1)}function oo(e,t){if(t)return e.toISOString();{const n=e.kind==null?!0:e.kind===2;return ke(e.getFullYear(),4)+"-"+ke(e.getMonth()+1,2)+"-"+ke(e.getDate(),2)+"T"+ke(e.getHours(),2)+":"+ke(e.getMinutes(),2)+":"+ke(e.getSeconds(),2)+"."+ke(e.getMilliseconds(),3)+(n?sn(e.getTimezoneOffset()*-6e4):"")}}function lo(e,t){const n=e.toISOString();return n.substring(0,n.length-1)+sn(t)}function nr(e,t,n){return t.replace(/(\w)\1*/g,r=>{let o=Number.NaN;switch(r.substring(0,1)){case"y":const a=n?e.getUTCFullYear():e.getFullYear();o=r.length<4?a%100:a;break;case"M":o=(n?e.getUTCMonth():e.getMonth())+1;break;case"d":o=n?e.getUTCDate():e.getDate();break;case"H":o=n?e.getUTCHours():e.getHours();break;case"h":const c=n?e.getUTCHours():e.getHours();o=c>12?c%12:c;break;case"m":o=n?e.getUTCMinutes():e.getMinutes();break;case"s":o=n?e.getUTCSeconds():e.getSeconds();break;case"f":o=n?e.getUTCMilliseconds():e.getMilliseconds();break}return Number.isNaN(o)?r:o<10&&r.length>1?"0"+o:""+o})}function ao(e,t){var n,r,o;const a=new Date(e.getTime()+((n=e.offset)!==null&&n!==void 0?n:0));if(typeof t!="string")return a.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+sn((r=e.offset)!==null&&r!==void 0?r:0);if(t.length===1)switch(t){case"D":case"d":return Ot(a,"first");case"T":case"t":return Ot(a,"second");case"O":case"o":return lo(a,(o=e.offset)!==null&&o!==void 0?o:0);default:throw new Error("Unrecognized Date print format")}else return nr(a,t,!0)}function co(e,t){const n=e.kind===1;if(typeof t!="string")return n?e.toUTCString():e.toLocaleString();if(t.length===1)switch(t){case"D":case"d":return n?Ot(e,"first"):e.toLocaleDateString();case"T":case"t":return n?Ot(e,"second"):e.toLocaleTimeString();case"O":case"o":return oo(e,n);default:throw new Error("Unrecognized Date print format")}else return nr(e,t,n)}function so(e,t,n){return e.offset!=null?ao(e,t):co(e,t)}function rr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}const kt=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,Bt=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function uo(e,t){return Bi(e,t)<0}function ir(e){return{input:e,cont:fo(e)}}function mo(e,t){let n=0,r=0,o="";Bt.lastIndex=0;let a=Bt.exec(e);for(;a;){const c=a.index+(a[1]||"").length;o+=e.substring(r,c).replace(/%%/g,"%");const[,,s,m,u,p]=a;o+=or(t[n++],s,m,u,p),r=Bt.lastIndex,Bt.lastIndex-=1,a=Bt.exec(e)}return o+=e.substring(r).replace(/%%/g,"%"),o}function po(e,t){return typeof t=="string"?e(t):t.cont(e)}function un(e){return po(t=>t,e)}function or(e,t,n,r,o){let a="";if(t=t||"",o=o||"",ki(e))switch(o.toLowerCase()!=="x"&&(uo(e,0)?(e=vi(e,-1),a="-"):t.indexOf(" ")>=0?a=" ":t.indexOf("+")>=0&&(a="+")),r=r==null?null:parseInt(r,10),o){case"f":case"F":r=r!=null?r:6,e=Ii(e,r);break;case"g":case"G":e=r!=null?Rn(e,r):Rn(e);break;case"e":case"E":e=r!=null?Gn(e,r):Gn(e);break;case"x":e=On(e);break;case"X":e=On(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=so(e):e=Ee(e);if(n=typeof n=="number"?n:parseInt(n,10),isNaN(n))e=a+e;else{const c=t.indexOf("0")>=0,s=t.indexOf("-")>=0,m=s||!c?" ":"0";m==="0"?(e=ar(e,n-a.length,m,s),e=a+e):e=ar(a+e,n,m,s)}return e}function lr(e,t,n,r="",o=-1){return(...a)=>{let c=r;const s=t.slice(),m=n.slice();for(const u of a){const[,,p,h,w,k]=m[0];let D=h;if(o>=0)D=o,o=-1;else if(D==="*"){if(u<0)throw new Error("Non-negative number required");o=u;continue}c+=s[0],c+=or(u,p,D,w,k),s.splice(0,1),m.splice(0,1)}return m.length===0?(c+=s[0],e(c)):lr(e,s,m,c,o)}}function fo(e){return t=>{kt.lastIndex=0;const n=[],r=[];let o=0,a=kt.exec(e);for(;a;){const c=a.index+(a[1]||"").length;n.push(e.substring(o,c).replace(/%%/g,"%")),r.push(a),o=kt.lastIndex,kt.lastIndex-=1,a=kt.exec(e)}return n.length===0?t(e.replace(/%%/g,"%")):(n.push(e.substring(o).replace(/%%/g,"%")),lr(t,n,r))}}function ho(e,t){const n=e.lastIndexOf(t);return n>=0&&n===e.length-t.length}function go(e){return typeof e!="string"||/^\s*$/.test(e)}function mn(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function ar(e,t,n,r){n=n||" ",t=t-e.length;for(let o=0;o<t;o++)e=r?e+n:n+e;return e}function Eo(e,t,n,r){if(n=typeof n=="number"?n:void 0,r=typeof r=="number"?r:0,n&&n<0)throw new Error("Count cannot be less than zero");if(n===0)return[];const o=(r&1)==1,a=(r&2)==2;t=t||[],t=t.filter(p=>p).map(rr),t=t.length>0?t:["\\s"];const c=[],s=new RegExp(t.join("|"),"g");let m=!0,u=0;do{const p=s.exec(e);if(p===null){const h=a?e.substring(u).trim():e.substring(u);(!o||h.length>0)&&c.push(h),m=!1}else{const h=a?e.substring(u,p.index).trim():e.substring(u,p.index);(!o||h.length>0)&&(n!=null&&c.length+1===n?(c.push(a?e.substring(u).trim():e.substring(u)),m=!1):c.push(h)),u=s.lastIndex}}while(m);return c}function xo(e,...t){return t.length===0?e.trimEnd():e.replace(new RegExp("["+rr(t.join(""))+"]+$"),"")}function cr(e,t,n){if(t+(n||0)>e.length)throw new Error("Invalid startIndex and/or length");return n!=null?e.substr(t,n):e.substr(t)}class rt{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Ze(this.value)}Equals(t){return t==null?!1:St(this.value,t instanceof rt?t.value:t)}CompareTo(t){return t==null?1:Pe(this.value,t instanceof rt?t.value:t)}}function Q(e){return e==null||e instanceof rt?new rt(e):e}function we(e){if(e==null)throw new Error("Option has no value");return e instanceof rt?e.value:e}function So(e){return e==null?[]:[we(e)]}function vt(e,t){return e!=null?we(e):t}function yo(e,t){return t!=null?Q(e(we(t))):void 0}function wo(e,t){return t!=null?e(we(t)):void 0}function sr(e,t){return typeof e=="function"?new e(t):new Array(t)}function ur(e,t,n,r){const o=t|0;return e.fill(r,o,o+n)}function bo(e,t){const n=sr(t,1);return n[0]=e,n}function it(e,t,n){if(e<0)throw new Error("The input must be non-negative\\nParameter name: count");const r=sr(n,e);for(let o=0;o<=e-1;o++)r[o]=t(o);return r}function Co(e){return e.slice()}function mr(e,t,n){if(t==null)return n==null;if(n==null)return!1;{let r=0,o=!0;const a=t.length|0,c=n.length|0;if(a>c)return!1;if(a<c)return!1;for(;r<a?o:!1;)o=e(t[r],n[r]),r=r+1|0;return o}}const dr="List was empty";class ce extends _e{constructor(t,n){super();this.head=t,this.tail=n}toString(){return"["+mn("; ",this)+"]"}Equals(t){const n=this;return n===t?!0:((o,a)=>{e:for(;;){const c=o,s=a,m=[c.tail,s.tail];if(m[0]!=null)if(m[1]!=null){const u=m[0],p=m[1];if(St(c.head,s.head)){o=u,a=p;continue e}else return!1}else return!1;else return m[1]==null}})(n,t)}GetHashCode(){return((r,o,a)=>{e:for(;;){const c=r,s=o,m=a,u=m.tail;if(u!=null){const p=u;if(c>18)return s|0;r=c+1,o=(s<<1)+Ze(m.head)+631*c,a=p;continue e}else return s|0}})(0,0,this)|0}toJSON(t){const n=this;return Array.from(n)}CompareTo(t){return((o,a)=>{e:for(;;){const c=o,s=a,m=[c.tail,s.tail];if(m[0]!=null)if(m[1]!=null){const u=m[0],p=m[1],h=Pe(c.head,s.head)|0;if(h===0){o=u,a=p;continue e}else return h|0}else return 1;else return m[1]!=null?-1:0}})(this,t)|0}GetEnumerator(){return ko(this)}[Symbol.iterator](){return Tn(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return Te(this)}}class Ao{constructor(t){this.xs=t,this.it=this.xs,this.current=null}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this,n=t.it.tail;if(n!=null){const r=n;return t.current=t.it.head,t.it=r,!0}else return!1}["System.Collections.IEnumerator.Reset"](){const t=this;t.it=t.xs,t.current=null}Dispose(){}}function ko(e){return new Ao(e)}function $(){return new ce(null,void 0)}function dn(e,t){return new ce(e,t)}function ot(e){return e.tail==null}function pr(e){return((n,r)=>{e:for(;;){const o=n,c=r.tail;if(c!=null){n=o+1,r=c;continue e}else return o|0}})(0,e)|0}function lt(e){if(e.tail!=null)return e.head;throw new Error(dr+"\\nParameter name: list")}function fe(e){const t=e.tail;if(t!=null)return t;throw new Error(dr+"\\nParameter name: list")}function d(){return $()}function pn(e,t){return dn(e,t)}function f(e){return dn(e,$())}function E(e){return ot(e)}function Bo(e){return pr(e)}function x(e){return lt(e)}function S(e){return fe(e)}function at(e){const t=pr(e)|0,n=ur(new Array(t),0,t,null);return((o,a)=>{e:for(;;){const c=o,s=a;if(!ot(s)){n[c]=lt(s),o=c+1,a=fe(s);continue e}break}})(0,e),n}function fn(e,t,n){let r=t,o=n;for(;!ot(o);)r=e(r,lt(o)),o=fe(o);return r}function vo(e,t,n){return((o,a,c)=>{e:for(;;){const s=o,m=a,u=c;if(ot(u))return m;o=s+1,a=e(s,m,lt(u)),c=fe(u);continue e}})(0,t,n)}function fr(e,t){fn((n,r)=>{e(r)},void 0,t)}function Io(e,t){let n=t;for(let r=e.length-1;r>=0;r--)n=dn(e[r],n);return n}function g(e){return Io(e,$())}function se(e){let t,n;if(Ne(e))return g(e);if(e instanceof ce)return e;{const r=$();let o=r;const a=Te(e);try{for(;a["System.Collections.IEnumerator.MoveNext"]();){const m=a["System.Collections.Generic.IEnumerator`1.get_Current"]();o=(t=o,n=new ce(m,void 0),t.tail=n,n)}}finally{a.Dispose()}const c=o,s=$();return c.tail=s,fe(r)}}function No(e){const t=$();let n=t;const r=c=>{n=fn((s,m)=>{const u=new ce(m,void 0);return s.tail=u,u},n,c)};if(Ne(e))e.forEach(r);else if(e instanceof ce)fr(r,e);else{const c=Te(e);try{for(;c["System.Collections.IEnumerator.MoveNext"]();)r(c["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{c.Dispose()}}const o=n,a=$();return o.tail=a,fe(t)}function To(e,t){let n,r;const o=$();let a=o,c=t;for(;!ot(c);){let u=e(lt(c));for(;!ot(u);)a=(n=a,r=new ce(lt(u),void 0),n.tail=r,r),u=fe(u);c=fe(c)}const s=a,m=$();return s.tail=m,fe(o)}function Mo(e,t){const n=$(),r=vo((a,c,s)=>{const m=new ce(e(a,s),void 0);return c.tail=m,m},n,t),o=$();return r.tail=o,fe(n)}function Vo(e,t){const n=$(),r=fn((a,c)=>{const s=new ce(e(c),void 0);return a.tail=s,s},n,t),o=$();return r.tail=o,fe(n)}function Fo(e){return Mo((t,n)=>[t,n],e)}function Do(e,t){console.error(e,t)}function hr(e,t,n){fr(r=>{try{r(t)}catch(o){e(o)}},n)}function gr(){return d()}function zo(e){return No(e)}function Lo(e){throw new Error(e)}const Po="Enumeration already finished.",_o="Enumeration has not started. Call MoveNext.",Er="The input sequence has an insufficient number of elements.",Ro="Reset is not supported on this enumerator.";function Go(){throw new Error(Ro)}function hn(){throw new Error(_o)}function gn(){throw new Error(Po)}class Oo{constructor(t){this.f=t}toString(){const t=this,n=4;let r=0,o="seq [";const a=Te(t);try{for(;r<n?a["System.Collections.IEnumerator.MoveNext"]():!1;)r>0&&(o=o+"; "),o=o+Ee(a["System.Collections.Generic.IEnumerator`1.get_Current"]()),r=r+1|0;return r===n&&(o=o+"; ..."),o+"]"}finally{a.Dispose()}}GetEnumerator(){return this.f()}[Symbol.iterator](){return Tn(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return this.f()}}function Ho(e){return new Oo(e)}class jo{constructor(t,n,r){this.current=t,this.next=n,this.dispose=r}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current()}["System.Collections.IEnumerator.get_Current"](){return this.current()}["System.Collections.IEnumerator.MoveNext"](){return this.next()}["System.Collections.IEnumerator.Reset"](){Go()}Dispose(){this.dispose()}}function Ht(e,t,n){return new jo(e,t,n)}function Uo(e){let t,n,r=!1,o=!1,a;const c=()=>{if(o=!0,n!=null){const s=n;try{s.Dispose()}finally{n=void 0}}if(t!=null){const s=t;try{s.Dispose()}finally{t=void 0}}};return Ht(()=>(r?o&&gn():hn(),a!=null?we(a):gn()),()=>{let s;if(r||(r=!0),o)return!1;{let m;for(;m==null;){const u=[t,n];if(u[0]!=null)if(u[1]!=null){const p=u[1];if(p["System.Collections.IEnumerator.MoveNext"]())a=Q(p["System.Collections.Generic.IEnumerator`1.get_Current"]()),m=!0;else try{p.Dispose()}finally{n=void 0}}else{const p=u[0];p["System.Collections.IEnumerator.MoveNext"]()?n=(s=p["System.Collections.Generic.IEnumerator`1.get_Current"](),Te(s)):(c(),m=!1)}else t=Te(e)}return we(m)}},()=>{o||c()})}function Wo(e,t){return Ht(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{t.Dispose()}finally{e()}})}function xr(e,t,n){let r=!1,o,a=Q(e());const c=()=>{if(a!=null){const m=we(a);try{n(m)}finally{a=void 0}}},s=()=>{try{c()}finally{o=void 0}};return Ht(()=>(r||hn(),o!=null?we(o):gn()),()=>{if(r||(r=!0),a!=null){const m=we(a);let u;try{u=t(m)}catch(p){throw s(),p}return u!=null?(o=u,!0):(s(),!1)}else return!1},c)}function Ko(e,t){let n,r=t;return Ht(()=>{if(n!=null){const o=n[0];return n[1],o}else return hn()},()=>(n=e(r),n!=null?(n[0],r=n[1],!0):!1),()=>{})}function Jo(e,t){t==null&&Lo(e)}function ct(e){return Ho(e)}function jt(e){return Jo("source",e),Te(e)}function v(e){return ct(()=>Te(e()))}function Sr(e){return ct(()=>Uo(e))}function qo(e,t){return ct(()=>Ko(e,t))}function Zo(){return v(()=>new Array(0))}function N(e){return v(()=>bo(e))}function z(e){return Ne(e)?g(e):e instanceof ce?e:se(e)}function Yo(e,t,n){return ct(()=>xr(e,t,n))}function Xo(e,t,n){return ct(()=>{let r=-1;return xr(e,o=>(r=r+1|0,t(r,o)),n)})}function he(e,t){return Sr([e,t])}function Qo(e,t,n){const r=jt(n);try{let o=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)o=e(o,r["System.Collections.Generic.IEnumerator`1.get_Current"]());return o}finally{r.Dispose()}}function $o(e,t){Qo((n,r)=>{e(r)},void 0,t)}function Ut(e,t){return Yo(()=>jt(t),n=>n["System.Collections.IEnumerator.MoveNext"]()?Q(e(n["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,n=>{n.Dispose()})}function el(e,t){return ct(()=>{const n=jt(t);try{for(let r=1;r<=e;r++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(Er+"\\nParameter name: source");return Wo(()=>{},n)}catch(r){throw n.Dispose(),r}})}function tl(e,t){return Xo(()=>jt(t),(n,r)=>{if(n<e){if(r["System.Collections.IEnumerator.MoveNext"]())return Q(r["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(Er+"\\nParameter name: source")}else return},n=>{n.Dispose()})}function yr(e,t){return v(()=>Sr(Ut(e,t)))}class wr extends _e{constructor(t,n){super();this.bound=t|0,this.digits=n}}function br(e,t){e:for(;;){const n=e,r=t;if(r===0)return 1;if(r%2==0){e=n*n,t=~~(r/2);continue e}else return n*br(n*n,~~(r/2))|0}}j(2013265921,0,!1);j(2013265921,0,!0);const nl=29;it(nl-1,e=>br(2,e),Int32Array);function En(e){return e.bound}function It(e,t){return e.digits[t]}function xn(e,t){return G(It(e,t),!1,2)}function Wt(e,t,n){e.digits[t]=n|0}function Sn(e,t){e:for(;;){const n=e,r=t;if(r===0)return j(1,0,!1);if(r%2==0){e=ae(n,n),t=~~(r/2);continue e}else return ae(n,Sn(ae(n,n),~~(r/2)))}}function st(e,t){e:for(;;){const n=e,r=t;if(r===0)return 1;if(r%2==0){e=n*n,t=~~(r/2);continue e}else return n*st(n*n,~~(r/2))|0}}function rl(e){let t=0;for(let n=0;n<=e.bound-1;n++)t=e.digits[n]+(t<<3)|0;return t|0}const ut=24,je=16777216,be=j(16777216,0,!1),mt=j(16777215,0,!1);j(16777215,0,!0);function Ue(e){return new wr(e,new Int32Array(e))}function il(e){return new wr(e.bound,Co(e.digits))}function Ce(e){const n=((r,o)=>{e:for(;;){const a=r,c=o;if(c===-1?!0:a[c]!==0)return c+1|0;r=a,o=c-1;continue e}})(e.digits,e.bound-1)|0;return e.bound=n|0,e}const Cr=2,Ar=3;function Nt(e){const t=(e<0?0:e)|0;if(t<je){const n=Ue(1);return n.digits[0]=t|0,Ce(n)}else{const n=Ue(Cr);for(let r=0;r<=Cr-1;r++)n.digits[r]=~~(t/st(je,r))%je|0;return Ce(n)}}function ol(e){const t=Gt(e,j(0,0,!1))<0?j(0,0,!1):e,n=Ue(Ar);for(let r=0;r<=Ar-1;r++)n.digits[r]=~~ye(ro(ve(t,Sn(be,r)),be))|0;return Ce(n)}function ll(e){if(e.bound===1)return e.digits[0]|0;{let t=0;for(let n=e.bound-1;n>=0;n--)t=e.digits[n]+je*t|0;return t|0}}const al=Nt(1),cl=Nt(0);function Y(e){return e.bound-1}function W(e){return e.bound===0}function kr(e,t){return e.bound===t.bound?((r,o,a)=>{e:for(;;){const c=r,s=o,m=a;if(m===-1)return!0;if(c[m]===s[m]){r=c,o=s,a=m-1;continue e}else return!1}})(e.digits,t.digits,e.bound-1):!1}function sl(e,t,n,r){return e.bound+t<n.bound+r?-1:e.bound+t>n.bound+t?1:((a,c,s)=>{e:for(;;){const m=a,u=c,p=s;if(p===-1)return 0;{const h=(p<t?0:m[p-t])|0,w=(p<r?0:u[p-r])|0;if(h===w){a=m,c=u,s=p-1;continue e}else return h<w?-1:1}}})(e.digits,n.digits,e.bound+t-1)|0}function ul(e,t){return e.bound<t.bound?-1:e.bound>t.bound?1:((r,o,a)=>{e:for(;;){const c=r,s=o,m=a;if(m===-1)return 0;if(c[m]===s[m]){r=c,o=s,a=m-1;continue e}else return c[m]<s[m]?-1:1}})(e.digits,t.digits,e.bound-1)|0}function Br(e,t){return ul(e,t)===-1}function ml(e,t){const n=Ue(2),r=ae(G(e,!1,2),G(t,!1,2));return Wt(n,0,~~ye(nt(r,mt))),Wt(n,1,~~ye(ve(r,be))),Ce(n)}function vr(e,t,n){e:for(;;){const r=e,o=t,a=n;if(Gt(o,j(0,0,!1))>0){const c=le(xn(r,a),o);Wt(r,a,~~ye(nt(c,mt))),e=r,t=ve(c,be),n=a+1;continue e}break}}function Ir(e,t){const n=En(e)|0,r=Ue(n+1),o=G(t,!1,2);let a=j(0,0,!1);for(let c=0;c<=n-1;c++){const s=le(le(a,xn(r,c)),ae(xn(e,c),o));Wt(r,c,~~ye(nt(s,mt))),a=ve(s,be)}return vr(r,a,n),Ce(r)}function dl(e,t){const n=Ue(e.bound+t.bound),r=n.digits;for(let o=0;o<=e.bound-1;o++){const a=G(e.digits[o],!1,2);let c=j(0,0,!1),s=o;for(let m=0;m<=t.bound-1;m++){const u=G(t.digits[m],!1,2),p=le(le(G(r[s],!1,2),c),ae(a,u));r[s]=~~ye(nt(p,mt))|0,c=ve(p,be),s=s+1|0}vr(n,c,s)}return Ce(n)}function pl(e,t){const n=En(e)===1,r=En(t)===1;return(n?r:!1)?ml(It(e,0),It(t,0)):n?Ir(t,It(e,0)):r?Ir(e,It(t,0)):dl(e,t)}class fl extends _e{constructor(t,n,r,o,a,c,s){super();this.bigL=t|0,this.twoToBigL=n|0,this.k=r|0,this.bigK=o|0,this.bigN=a|0,this.split=c|0,this.splits=s}}function ee(e,t,n,r){return new fl(e,st(2,e),t,n,r,~~(ut/e),it(~~(ut/e),o=>st(2,e*o),Int32Array))}const hl=[ee(1,28,268435456,268435456),ee(2,26,67108864,134217728),ee(3,24,16777216,50331648),ee(4,22,4194304,16777216),ee(5,20,1048576,5242880),ee(6,18,262144,1572864),ee(7,16,65536,458752),ee(8,14,16384,131072),ee(9,12,4096,36864),ee(10,10,1024,10240),ee(11,8,256,2816),ee(12,6,64,768),ee(13,4,16,208)];it(ut,e=>st(2,e)-1,Int32Array);it(ut,e=>st(2,e),Int32Array);it(ut,e=>Sn(j(2,0,!1),e));~~(hl[0].bigN/ut);function gl(e,t){return pl(e,t)}function El(e,t,n,r){const o=[e.digits,Y(e)],a=o[0],c=[n.digits,Y(n)],s=c[1]|0,m=c[0],u=G(t,!1,2);let p=0,h=ae(u,G(m[0],!1,2));for(;Gt(h,j(0,0,!1))>0?!0:p<s;){if(p>o[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let w=~~ye(nt(h,mt)),k=ve(h,be);w<=a[p+r]?a[p+r]=a[p+r]-w|0:(a[p+r]=a[p+r]+(je-w)|0,k=le(k,j(1,0,!1))),p<s?h=le(k,ae(u,G(m[p+1],!1,2))):h=k,p=p+1|0}Ce(e)}function xl(e,t,n,r){const o=[e.digits,Y(e)],a=o[0],c=[n.digits,Y(n)],s=c[1]|0,m=c[0],u=G(t,!1,2);let p=0,h=ae(u,G(m[0],!1,2));for(;Gt(h,j(0,0,!1))>0?!0:p<s;){if(p>o[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let w=~~ye(nt(h,mt)),k=ve(h,be);w<je-a[p+r]?a[p+r]=a[p+r]+w|0:(a[p+r]=w-(je-a[p+r])|0,k=le(k,j(1,0,!1))),p<s?h=le(k,ae(u,G(m[p+1],!1,2))):h=k,p=p+1|0}Ce(e)}function Sl(e,t,n){const r=[Y(t),Y(e)],o=r[1]|0,a=r[0]|0;if(o<a+n)return 0;{const c=[t.digits,e.digits],s=c[1],m=c[0],u=(a===0?o===n?~~(s[n]/m[0]):~~ye(ve(le(ae(G(s[o],!1,2),be),G(s[o-1],!1,2)),G(m[0],!1,2))):o===a+n?~~(s[o]/(m[a]+1)):~~ye(ve(le(ae(G(s[o],!1,2),be),G(s[o-1],!1,2)),le(G(m[a],!1,2),j(1,0,!1)))))|0;return u===0?sl(t,n,e,0)!==1?1:0:u|0}}function yl(e,t){if(W(t))throw new Error;if(Y(e)<Y(t))return[cl,e];{const n=il(e),r=Ue(Y(e)-Y(t)+1+1);let o=Y(e);const a=Y(t)|0;let c=o-a,s=!1;for(;!s;){const m=Sl(n,t,c)|0;m>0?(El(n,m,t,c),xl(r,m,al,c)):(s=m===0?c===0:!1,s||(o===a+c?c=c-1|0:(c=c-1|0,o=o-1|0)))}return[Ce(r),Ce(n)]}}Nt(2);function yn(e){return Nt(e)}function wl(e){return ol(e)}function Nr(e){const t=Y(e)|0,n=(a,c,s)=>{e:for(;;){const m=a,u=c,p=s;if(Y(p)>t)return pn([u,p],m);a=pn([u,p],m),c=u+1,s=gl(p,p);continue e}},r=(a,c,s,m)=>{e:for(;;){const u=a,p=c,h=s,w=m;if(E(w)){const k=ll(h)|0;return(u?k===0:!1)?p:pn(Vn(k),p)}else{const k=S(w),D=yl(h,x(w)[1]),V=D[1],U=D[0];if(u?W(U):!1){a=u,c=p,s=V,m=k;continue e}else{a=u,c=r(!1,p,V,k),s=U,m=k;continue e}}}},o=r(!0,d(),e,n(d(),0,Nt(10)));return E(o)?"0":mn("",at(o))}function bl(e){return e.bound<=1}function Tr(e){const t=e,n=0;return n<t.bound?t.digits[n]|0:0}class ue extends _e{constructor(t,n){super();this.signInt=t|0,this.v=n}toString(){const t=this;switch(We(t)|0){case-1:return W(P(t))?"0":"-"+Nr(P(t));case 0:return"0";case 1:return Nr(P(t));default:throw new Error("signs should be +/- 1 or 0")}}Equals(t){const n=this;return t instanceof ue?Mr(n,t):!1}GetHashCode(){return kl(this)|0}toJSON(t){return Ee(this)}CompareTo(t){const n=this;if(t instanceof ue)return Al(n,t)|0;throw new Error("the objects are not comparable\\nParameter name: obj")}}function wn(e,t){return new ue(e,t)}(()=>{ue.smallLim=4096,ue.smallPosTab=it(ue.smallLim,e=>yn(e)),ue.one=Cn(1),ue.two=Cn(2),ue.zero=Cn(0)})();function bn(e){return(bl(e)?Tr(e)<ue.smallLim:!1)?ue.smallPosTab[Tr(e)]:e}function We(e){return e.signInt}function P(e){return e.v}function Mr(e,t){const n=[We(e),We(t)];let r;switch(n[0]===-1?n[1]===-1?r=1:n[1]===0?r=8:n[1]===1?r=3:r=9:n[0]===0?n[1]===-1?r=6:n[1]===0?r=4:n[1]===1?r=5:r=9:n[0]===1?n[1]===-1?r=2:n[1]===0?r=7:n[1]===1?r=0:r=9:r=9,r){case 0:return kr(P(e),P(t));case 1:return kr(P(e),P(t));case 2:return W(P(e))?W(P(t)):!1;case 3:return W(P(e))?W(P(t)):!1;case 4:return!0;case 5:return W(P(t));case 6:return W(P(t));case 7:return W(P(e));case 8:return W(P(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function Cl(e,t){const n=[We(e),We(t)];let r;switch(n[0]===-1?n[1]===-1?r=1:n[1]===0?r=8:n[1]===1?r=3:r=9:n[0]===0?n[1]===-1?r=6:n[1]===0?r=4:n[1]===1?r=5:r=9:n[0]===1?n[1]===-1?r=2:n[1]===0?r=7:n[1]===1?r=0:r=9:r=9,r){case 0:return Br(P(e),P(t));case 1:return Br(P(t),P(e));case 2:return!1;case 3:return W(P(e))?!W(P(t)):!0;case 4:return!1;case 5:return!W(P(t));case 6:return!1;case 7:return!1;case 8:return!W(P(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function Al(e,t){return Cl(e,t)?-1:Mr(e,t)?0:1}function kl(e){return We(e)===0?1:We(e)+rl(P(e))|0}function Cn(e){return e>=0?wn(1,bn(yn(e))):e===-2147483648?wn(-1,bn(wl(io(G(e,!1,2))))):wn(-1,bn(yn(_i(e))))}function Bl(e,t,n,r){const o=Pe(e,n)|0;if(o===0)throw new Error("The step of a range cannot be zero");const a=o>0;return c=>{const s=Pe(c,t)|0;return((a?s<=0:!1)?!0:a?!1:s>=0)?[c,r(c,e)]:void 0}}function vl(e,t,n,r,o){const a=Bl(t,n,r,o);return v(()=>qo(a,e))}function Il(e,t,n){return vl(e,t,n,0,(r,o)=>r+o)}class dt extends an{constructor(t,...n){super();this.tag=t|0,this.fields=n}cases(){return["Writable","ReadWritable"]}}class Nl{constructor(t){this.state=new dt(0,ur(new Array(Pn((n,r)=>zn(n,r),t,10)),0,Pn((n,r)=>zn(n,r),t,10),null),0)}}function Tl(e){return new Nl(e)}function Ml(e){const t=e.state;if(t.tag===1){const n=t.fields[1]|0,r=t.fields[2]|0,o=t.fields[0],a=(r+1)%o.length|0;return a===n?e.state=new dt(0,o,n):e.state=new dt(1,o,n,a),Q(o[r])}else return}function Vl(e,t){const n=e.state;if(n.tag===1){const r=n.fields[1]|0,o=n.fields[2]|0,a=n.fields[0];a[r]=t;const c=(r+1)%a.length|0;c===o?e.state=new dt(1,Fl(e,o,a),a.length,0):e.state=new dt(1,a,c,o)}else{const r=n.fields[1]|0,o=n.fields[0];o[r]=t;const a=(r+1)%o.length|0;e.state=new dt(1,o,a,r)}}function Fl(e,t,n){return Array.from(v(()=>he(el(t,n),v(()=>he(tl(t,n),v(()=>yr(r=>N(null),Il(0,1,n.length))))))))}class Vr extends _e{constructor(t,n,r,o,a,c,s){super();this.init=t,this.update=n,this.subscribe=r,this.view=o,this.setState=a,this.onError=c,this.syncDispatch=s}}function Dl(e,t,n){return new Vr(e,t,r=>gr(),n,(r,o)=>{n(r,o)},r=>{Do(r[0],r[1])},on(2,r=>r))}function zl(e,t){return new Vr(t.init,t.update,t.subscribe,t.view,e,t.onError,t.syncDispatch)}function Ll(e){return _n(2,e.view)}function Pl(e,t){const n=t.init(e),r=n[0],o=Tl(10);let a=!1,c=r;const s=u=>{if(a)Vl(o,u);else{a=!0;let p=Q(u);for(;p!=null;){const h=we(p);try{const w=t.update(h,c),k=w[0];t.setState(k,m),hr(D=>{t.onError([un(ir("Error in command while handling: %A"))(h),D])},m,w[1]),c=k}catch(w){t.onError([un(ir("Unable to process the message: %A"))(h),w])}p=Ml(o)}a=!1}},m=Ei(1,t.syncDispatch,[s]);t.setState(r,m),hr(u=>{t.onError(["Error intitializing:",u])},m,zo(g([(()=>{try{return t.subscribe(r)}catch(u){return t.onError(["Unable to subscribe:",u]),gr()}})(),n[1]])))}function _l(e){Pl(void 0,e)}class Rl extends _e{constructor(t,n,r){super();this.model=t,this.render=n,this.equal=r}}class Gl extends l.exports.Component{constructor(t){super(t)}shouldComponentUpdate(t,n){const r=this;return!r.props.equal(r.props.model,t.model)}render(){return this.props.render()}}function Ol(e,t,n,r){return l.exports.createElement(Gl,new Rl(n,()=>t(n,r),e))}function Hl(e,t,n){return zl((r,o)=>{Rr.exports.render(e((a,c)=>a===c,on(2,Ll(n)),r,o),document.getElementById(t))},n)}function jl(e,t){return Hl((n,r,o,a)=>Ol(n,r,o,a),e,t)}const i=Gr,Ul=e=>{l.exports.useEffect(()=>{const t=e();return()=>{t.Dispose()}})},Wl=(e,t)=>{l.exports.useEffect(()=>{const n=e();return()=>{n.Dispose()}},t)},Kl=e=>{l.exports.useLayoutEffect(()=>{const t=e();return()=>{t.Dispose()}})},Jl=Ul,ql=Wl,Zl=Kl;function Yl(e,t,n,r){const o=i.memo(e,on(2,vt(_n(2,n),null)));return $o(a=>{e.displayName=a},So(t)),a=>i.createElement(o,Xl(r,a))}function Xl(e,t){if(e==null)return t;{const n=e;return t.key=n(t),t}}function Tt(e){return{Dispose(){e()}}}function An(e){Jl(e)}function Ql(e){Zl(t=>(e(),Tt(()=>{})))}function $l(e){ea(e,[])}function ea(e,t){ql(n=>(e(),Tt(()=>{})),t)}function ta(e,t){return i.useCallback(e,vt(t,[]))}function Fr(e){return i.useRef(e)}function na(){return Fr(void 0)}function Ie(e,t){return i.useMemo(e,vt(t,[]))}function ra(e,t,n){return Yl(e,void 0,n,t)}function Kt(e){const t=Fr(e),n=ta(r=>t.current(r),[]);return Ql(()=>{t.current=e}),n}function K(e){return i.useState(e)}class Mt extends an{constructor(t,...n){super();this.tag=t|0,this.fields=n}cases(){return["FSharp","Bash"]}}function Vt(e){const t=e.text,n=e.lang,r=na();$l(()=>{const a=r.current;a==null?console.warn("Failed to find element"):Prism.highlightAllUnder(a)});const o=n.tag===1?"language-bash":"language-fsharp";return l.exports.createElement("pre",{ref:r,className:o,children:i.Children.toArray([l.exports.createElement("code",{children:[t]})])})}function ia(e){const t=e.elements;return i.createElement(Or,{UNSAFE_className:"example-result",children:i.Children.toArray(Array.from(t))})}function T(e){const t=e.examples,n=e.description,r=e.title;return l.exports.createElement(l.exports.Fragment,{},...z(v(()=>he(N(l.exports.createElement("h1",{className:"title example-group-title",children:i.Children.toArray([r])})),v(()=>he(N(l.exports.createElement("p",{className:"example-group-description",children:i.Children.toArray(Array.from(n))})),v(()=>yr(o=>he(N(o[1]),v(()=>o[0]!==Bo(t)-1?he(N(l.exports.createElement("br",{})),v(()=>he(N(i.createElement(vn,{size:"S"})),v(()=>N(l.exports.createElement("br",{})))))):Zo())),Fo(t)))))))))}function y(e){const t=e.elements,n=e.description,r=e.code,o=e.title;return l.exports.createElement(l.exports.Fragment,{},...z(v(()=>he(N(l.exports.createElement("h2",{className:"subtitle",children:i.Children.toArray([o])})),v(()=>he(Ut(a=>a,n),v(()=>N(i.createElement(O,{direction:"column",gap:"size-100",children:i.Children.toArray([l.exports.createElement(Vt,{lang:new Mt(0),text:r}),l.exports.createElement(ia,{elements:t})])})))))))))}const Dr=g(["blue-400","blue-500","blue-600","blue-700","celery-400","celery-500","celery-600","celery-700","chartreuse-400","chartreuse-500","chartreuse-600","chartreuse-700","fuchsia-400","fuchsia-500","fuchsia-600","fuchsia-700","gray-50","gray-75","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","green-400","green-500","green-600","green-700","indigo-400","indigo-500","indigo-600","indigo-700","informative","magenta-400","magenta-500","magenta-600","magenta-700","negative","notice","orange-400","orange-500"]);function oa(){return l.exports.createElement(l.exports.Fragment,{},l.exports.createElement("h1",{className:"title",children:i.Children.toArray(["Feliz.ReactSpectrum",l.exports.createElement("a",{href:"https://www.nuget.org/packages/Feliz.ReactSpectrum/",children:i.Children.toArray([l.exports.createElement("img",{alt:"NuGet badge",src:"https://img.shields.io/nuget/v/Feliz.ReactSpectrum.svg?style=square"})])})])}),l.exports.createElement("h2",{className:"subtitle",children:i.Children.toArray(["Feliz-style Fable bindings for Adobe's React Spectrum components"])}),i.createElement(vn,{size:"M",marginTop:10,marginBottom:10}),l.exports.createElement("p",{children:i.Children.toArray(["Fable bindings for ",l.exports.createElement("a",{href:"https://react-spectrum.adobe.com/react-spectrum/",children:i.Children.toArray(["Adobe's React Spectrum components"])}),", written in the excelent ",l.exports.createElement("a",{href:"https://github.com/Zaid-Ajaj/Feliz",children:i.Children.toArray(["Feliz DSL style"])}),"."])}),l.exports.createElement("h2",{className:"subtitle paragraph",children:i.Children.toArray(["Features"])}),l.exports.createElement("ul",{className:"bullet-list",children:i.Children.toArray([l.exports.createElement("li",{children:["Covers all React Spectrum components as of version 3.15.1"]}),l.exports.createElement("li",{children:["Fully erased - the generated JS is zero size"]}),l.exports.createElement("li",{children:i.Children.toArray(["Compatible with the ",l.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:i.Children.toArray(["Femto dotnet tool"])})])})])}))}function la(){return l.exports.createElement(l.exports.Fragment,{},l.exports.createElement("h2",{className:"subtitle",children:i.Children.toArray(["Using the Femto dotnet tool"])}),l.exports.createElement("p",{className:"paragraph",children:i.Children.toArray(["The easiest way to install the package is using the ",l.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:i.Children.toArray(["Femto dotnet tool"])})," since this will also take care of installing the correct npm dependencies."])}),l.exports.createElement(Vt,{lang:new Mt(1),text:"dotnet femto install Feliz.ReactSpectrum"}),l.exports.createElement("h2",{className:"subtitle",children:i.Children.toArray(["Manual installation"])}),l.exports.createElement("p",{className:"paragraph",children:i.Children.toArray(["You can install the package using NuGet:"])}),l.exports.createElement(Vt,{lang:new Mt(1),text:"dotnet add package Feliz.ReactSpectrum"}),l.exports.createElement("p",{className:"paragraph",children:i.Children.toArray(["Or in case you use Paket:"])}),l.exports.createElement(Vt,{lang:new Mt(1),text:"dotnet paket add Feliz.ReactSpectrum"}),l.exports.createElement("p",{className:"paragraph",children:i.Children.toArray(["Don't forget to also install the npm dependencies:"])}),l.exports.createElement(Vt,{lang:new Mt(1),text:`npm install @adobe/react-spectrum
npm install @spectrum-icons/illustrations
npm install @spectrum-icons/workflow`}))}function aa(){return l.exports.createElement(y,{title:"Default example",code:`Spectrum.ActionButton [
    ActionButton.content "Press me"
    ActionButton.onPress (fun ev ->
        Browser.Dom.window.alert("I was clicked!")
    )
]`,description:d(),elements:f(i.createElement(_,{children:"Press me",onPress:e=>{window.alert(Q("I was clicked!"))}}))})}function ca(){let e;return l.exports.createElement(y,{title:"Adding an icon",code:`Spectrum.ActionButton [
    ActionButton.children [
        Spectrum.Icon.Airplane [
            Icon.size IconSize.M
        ]
        Spectrum.Text "I have an airplane icon"
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]`,description:d(),elements:f(i.createElement(_,{children:i.Children.toArray([(e=Hr,i.createElement(e,{size:"M"})),i.createElement(A,{children:i.Children.toArray(["I have an airplane icon"])})]),onPress:t=>{console.log("Event: ",t)}}))})}function sa(){let e;return l.exports.createElement(y,{title:"Icon-only",code:`Spectrum.ActionButton [
    ActionButton.ariaLabel "Edit"
    ActionButton.children [
        Spectrum.Icon.Edit [
            Icon.size IconSize.S
        ]
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]`,description:d(),elements:f(i.createElement(_,{["aria-label"]:"Edit",children:i.Children.toArray([(e=jr,i.createElement(e,{size:"S"}))]),onPress:t=>{console.log("Event: ",t)}}))})}function ua(){const e=g(["ActionButtons allow users to perform an action. They\u2019re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren\u2019t meant to draw a lot of attention.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionButton.html"})," for more details."]);return l.exports.createElement(T,{title:"ActionButton",description:e,examples:g([l.exports.createElement(aa,null),l.exports.createElement(ca,null),l.exports.createElement(sa,null)])})}function ma(){return l.exports.createElement(y,{title:"Default example",code:`let action, setAction = React.useState("")

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
]`,description:d(),elements:z(v(()=>{let e;const t=K("");return N(l.exports.createElement(l.exports.Fragment,{},i.createElement(Je,{onAction:t[1],children:[i.createElement(B,{key:"add",title:"Add"}),i.createElement(B,{key:"delete",title:"Delete"}),i.createElement(B,{key:"edit",title:"Edit"})]}),(e=`Action ${t[0]}`,l.exports.createElement("p",{children:[e]}))))}))})}function da(){return l.exports.createElement(y,{title:"Multiple selection",code:`let selected, setSelected = React.useState([ "list" ])

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
]`,description:d(),elements:z(v(()=>{let e,t;const n=K(f("list")),r=n[0];return N(l.exports.createElement(l.exports.Fragment,{},i.createElement(Je,Ye(g([["selectionMode","multiple"],["selectedKeys",Array.from(r)],(e=o=>{o instanceof ce&&n[1](o)},["onSelectionChange",o=>{const a=o;e(a==="all"?"all":se(a.values()))}]),["children",[i.createElement(B,{key:"grid",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["Grid view"])})])}),i.createElement(B,{key:"list",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["List view"])})])}),i.createElement(B,{key:"gallery",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["Gallery view"])})])})]]]))),(t=un(mo("Current selection (controller): %A%P()",[at(r)])),i.createElement(A,{children:i.Children.toArray([t])}))))}))})}function pa(){let e,t,n;return l.exports.createElement(y,{title:"With icons",code:`Spectrum.ActionGroup [
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
]`,description:d(),elements:f(i.createElement(Je,{children:[i.createElement(B,{key:"edit2",children:i.Children.toArray([(e=Yt,i.createElement(e,{})),i.createElement(A,{children:i.Children.toArray(["Edit"])})])}),i.createElement(B,{key:"copy2",children:i.Children.toArray([(t=Xt,i.createElement(t,{})),i.createElement(A,{children:i.Children.toArray(["Copy"])})])}),i.createElement(B,{key:"delete2",children:i.Children.toArray([(n=In,i.createElement(n,{})),i.createElement(A,{children:i.Children.toArray(["Delete"])})])})]}))})}function fa(){return l.exports.createElement(y,{title:"Using an item template",code:`let items = [
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
]`,description:d(),elements:z(v(()=>{let e;const t=g([{label:"React",name:"_React"},{label:"Add",name:"_Add"},{label:"Delete",name:"_Delete"}]);return N(i.createElement(Je,Ye(g([["items",Array.from(t)],["isEmphasized",!0],["selectionMode","single"],(e=n=>{let r,o;switch(n instanceof ce?E(n)?r=1:E(S(n))?(r=0,o=x(n)):r=1:r=1,r){case 0:{console.log("Selection: ",o);break}}},["onSelectionChange",n=>{const r=n;e(r==="all"?"all":se(r.values()))}]),["children",n=>i.createElement(B,{key:n.name,children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray([n.label])})])})]]))))}))})}function ha(){let e,t,n,r,o;return l.exports.createElement(y,{title:"Collapsing buttons",code:`Spectrum.ActionGroup [
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
]`,description:d(),elements:f(i.createElement(Je,{overflowMode:"collapse",maxWidth:250,children:[i.createElement(B,{key:"edit",textValue:"Edit",children:i.Children.toArray([(e=Yt,i.createElement(e,{})),i.createElement(A,{children:i.Children.toArray(["Edit"])})])}),i.createElement(B,{key:"copy",textValue:"Copy",children:i.Children.toArray([(t=Xt,i.createElement(t,{})),i.createElement(A,{children:i.Children.toArray(["Copy"])})])}),i.createElement(B,{key:"delete",textValue:"Delete",children:i.Children.toArray([(n=In,i.createElement(n,{})),i.createElement(A,{children:i.Children.toArray(["Delete"])})])}),i.createElement(B,{key:"move",textValue:"Move",children:i.Children.toArray([(r=Ur,i.createElement(r,{})),i.createElement(A,{children:i.Children.toArray(["Move"])})])}),i.createElement(B,{key:"duplicate",textValue:"Duplicate",children:i.Children.toArray([(o=Wr,i.createElement(o,{})),i.createElement(A,{children:i.Children.toArray(["Duplicate"])})])})]}))})}function ga(){let e,t,n,r,o;return l.exports.createElement(y,{title:"Collapsed with multiple selection",code:`Spectrum.ActionGroup [
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
]`,description:d(),elements:f(i.createElement(Je,{["aria-label"]:"Text style",overflowMode:"collapse",selectionMode:"multiple",isEmphasized:!0,summaryIcon:(e=Kr,i.createElement(e,{})),maxWidth:100,children:[i.createElement(B,{key:"bold",textValue:"Bold",children:i.Children.toArray([(t=Jr,i.createElement(t,{})),i.createElement(A,{children:i.Children.toArray(["Bold"])})])}),i.createElement(B,{key:"italic",textValue:"Italic",children:i.Children.toArray([(n=qr,i.createElement(n,{})),i.createElement(A,{children:i.Children.toArray(["Italic"])})])}),i.createElement(B,{key:"underline",textValue:"Underline",children:i.Children.toArray([(r=Zr,i.createElement(r,{})),i.createElement(A,{children:i.Children.toArray(["Underline"])})])}),i.createElement(B,{key:"strike",textValue:"Strikethrough",children:i.Children.toArray([(o=Yr,i.createElement(o,{})),i.createElement(A,{children:i.Children.toArray(["Strikethrough"])})])})]}))})}function Ea(){const e=g(["An ActionGroup is a grouping of ActionButtons that are related to one another.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html"})," for more details."]);return l.exports.createElement(T,{title:"ActionGroup",description:e,examples:g([l.exports.createElement(ma,null),l.exports.createElement(da,null),l.exports.createElement(pa,null),l.exports.createElement(fa,null),l.exports.createElement(ha,null),l.exports.createElement(ga,null)])})}function xa(){return l.exports.createElement(y,{title:"Default example",code:`Spectrum.Button [
    Button.variant ButtonVariant.CTA
    Button.content "Save"
]`,description:d(),elements:f(i.createElement(R,{variant:"cta",children:"Save"}))})}function Sa(){let e;return l.exports.createElement(y,{title:"Icon + label",code:`Spectrum.Button [
    Button.variant ButtonVariant.Primary
    Button.children [
        Spectrum.Icon.Bell []
        Spectrum.Text "Icon + Label"
    ]
]`,description:d(),elements:f(i.createElement(R,{variant:"primary",children:i.Children.toArray([(e=Xr,i.createElement(e,{})),i.createElement(A,{children:i.Children.toArray(["Icon + Label"])})])}))})}function ya(){return l.exports.createElement(y,{title:"Button variants",code:`Spectrum.Flex [
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
]`,description:d(),elements:f(i.createElement(O,{direction:"row",alignItems:"center",gap:"size-100",children:i.Children.toArray([i.createElement(R,{variant:"cta",children:"CTA"}),i.createElement(R,{variant:"primary",children:"Primary"}),i.createElement(R,{variant:"secondary",children:"Secondary"}),i.createElement(R,{variant:"negative",children:"Negative"}),i.createElement(M,{backgroundColor:"green-400",padding:20,children:i.Children.toArray([i.createElement(R,{variant:"overBackground",children:"Over background"})])})])}))})}function wa(){const e=g(["Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Button.html"})," for more details."]);return l.exports.createElement(T,{title:"Button",description:e,examples:g([l.exports.createElement(xa,null),l.exports.createElement(Sa,null),l.exports.createElement(ya,null)])})}function ba(){return l.exports.createElement(y,{title:"Default example",code:`Spectrum.ButtonGroup [
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
]`,description:d(),elements:f(l.exports.createElement(Ft,d(),i.createElement(R,{variant:"secondary",children:"No, thanks"}),i.createElement(R,{variant:"secondary",children:"Remind me later"}),i.createElement(R,{variant:"primary",children:"Rate now"})))})}function Ca(){return l.exports.createElement(y,{title:"Orientation",code:`Spectrum.ButtonGroup [
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
]`,description:d(),elements:f(i.createElement(Ft,{orientation:"vertical",children:i.Children.toArray([i.createElement(R,{variant:"secondary",children:"No, thanks"}),i.createElement(R,{variant:"secondary",children:"Remind me later"}),i.createElement(R,{variant:"primary",children:"Rate now"})])}))})}function Aa(){return l.exports.createElement(y,{title:"Alignment",code:`Spectrum.Flex [
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
]`,description:d(),elements:f(i.createElement(O,{gap:10,direction:"column",alignItems:"start",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["align = 'end'"])}),i.createElement(Ft,{orientation:"vertical",align:"end",children:i.Children.toArray([i.createElement(R,{variant:"secondary",children:"No, thanks"}),i.createElement(R,{variant:"secondary",children:"Remind me later"}),i.createElement(R,{variant:"primary",children:"Rate now"})])}),i.createElement(A,{children:i.Children.toArray(["align = 'center'"])}),i.createElement(Ft,{orientation:"vertical",align:"center",children:i.Children.toArray([i.createElement(R,{variant:"secondary",children:"No, thanks"}),i.createElement(R,{variant:"secondary",children:"Remind me later"}),i.createElement(R,{variant:"primary",children:"Rate now"})])})])}))})}function ka(){const e=g(["ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html"})," for more details."]);return l.exports.createElement(T,{title:"ButtonGroup",description:e,examples:g([l.exports.createElement(ba,null),l.exports.createElement(Ca,null),l.exports.createElement(Aa,null)])})}function Ba(){return l.exports.createElement(y,{title:"Default example",code:`Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.And
    LogicButton.children [
        Spectrum.Text "And"
    ]
]`,description:d(),elements:f(i.createElement(Zt,{variant:"and",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["And"])})])}))})}function va(){return l.exports.createElement(y,{title:"Or variant",code:`Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.Or
    LogicButton.children [
        Spectrum.Text "Or"
    ]
]`,description:d(),elements:f(i.createElement(Zt,{variant:"or",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["Or"])})])}))})}function Ia(){return l.exports.createElement(y,{title:"Events",code:`let variant, setVariant = React.useState(LogicButtonVariant.Or)

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
]`,description:d(),elements:z(v(()=>{const e=K("or"),t=e[0];return N(i.createElement(Zt,{variant:t,onPress:n=>{e[1](t==="or"?"and":"or")},children:t}))}))})}function Na(){const e=g(["A LogicButton displays an operator within a boolean logic sequence.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/LogicButton.html"})," for more details."]);return l.exports.createElement(T,{title:"LogicButton",description:e,examples:g([l.exports.createElement(Ba,null),l.exports.createElement(va,null),l.exports.createElement(Ia,null)])})}function Ta(){return l.exports.createElement(y,{title:"Default example",code:`Spectrum.ToggleButton [
    Spectrum.Text "Pin"
]`,description:d(),elements:f(l.exports.createElement(ht,d(),i.createElement(A,{children:i.Children.toArray(["Pin"])})))})}function Ma(){let e;return l.exports.createElement(y,{title:"Using icons",code:`Spectrum.ToggleButton [
    ToggleButton.children [
        Spectrum.Icon.PinOff []
        Spectrum.Text "Pin"
    ]
]`,description:d(),elements:f(i.createElement(ht,{children:i.Children.toArray([(e=Dt,i.createElement(e,{})),i.createElement(A,{children:i.Children.toArray(["Pin"])})])}))})}function Va(){return l.exports.createElement(y,{title:"Events",code:`let isSelected, setSelected = React.useState(false)

Spectrum.ToggleButton [
    ToggleButton.isEmphasized true
    ToggleButton.isSelected isSelected
    ToggleButton.onChange setSelected
    ToggleButton.ariaLabel "Pin"
    ToggleButton.children [
        Spectrum.Icon.PinOff []
        Spectrum.Text $"Is selected: {isSelected}"
    ]
]`,description:d(),elements:z(v(()=>{let e,t;const n=K(!1),r=n[0];return N(i.createElement(ht,{isEmphasized:!0,isSelected:r,onChange:o=>{setTimeout(()=>{n[1](o)},0)},["aria-label"]:"Pin",children:i.Children.toArray([(e=Dt,i.createElement(e,{})),(t=`Is selected: ${r}`,i.createElement(A,{children:i.Children.toArray([t])}))])}))}))})}function Fa(){let e,t;return l.exports.createElement(y,{title:"Static color",code:`Spectrum.Flex [
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
]`,description:d(),elements:f(i.createElement(O,{wrap:!0,gap:"size-250",children:i.Children.toArray([i.createElement(M,{backgroundColor:"static-seafoam-700",padding:20,children:i.Children.toArray([i.createElement(ht,{staticColor:"white",children:i.Children.toArray([(e=Dt,i.createElement(e,{})),i.createElement(A,{children:i.Children.toArray(["Pin"])})])})])}),i.createElement(M,{backgroundColor:"static-yellow-400",padding:20,children:i.Children.toArray([i.createElement(ht,{staticColor:"black",isQuiet:!0,defaultSelected:!0,children:i.Children.toArray([(t=Dt,i.createElement(t,{})),i.createElement(A,{children:i.Children.toArray(["Pin"])})])})])})])}))})}function Da(){const e=g(["ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ToggleButton.html"})," for more details."]);return l.exports.createElement(T,{title:"ToggleButton",description:e,examples:g([l.exports.createElement(Ta,null),l.exports.createElement(Ma,null),l.exports.createElement(Va,null),l.exports.createElement(Fa,null)])})}function za(){let e;return l.exports.createElement(y,{title:"Using the Provider component",code:`Spectrum.Provider [
    Provider.defaultTheme
    Provider.colorScheme ColorScheme.Light
    Provider.locale "en-US"
    Provider.scale Scale.Medium
    Provider.children [
        Spectrum.ActionButton [
            ActionButton.content "Spectrum button"
        ]
    ]
]`,description:d(),elements:f(i.createElement(gt,Ye(g([(e=zt,["theme",e]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["children",i.Children.toArray([i.createElement(_,{children:"Spectrum button"})])]]))))})}function La(){let e;const t=f(l.exports.createElement("p",{className:"paragraph",children:i.Children.toArray(["You can override the default screen breakpoints as follows. Resize the browser window to see the effects."])}));return l.exports.createElement(y,{title:"Provider screen breakpoints",code:`Spectrum.Provider [
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
]`,description:t,elements:f(i.createElement(gt,Ye(g([(e=zt,["theme",e]),["colorScheme","light"],["breakpoints",{L:1024,M:640,S:void 0}],["children",i.Children.toArray([i.createElement(M,{height:"size-2000",backgroundColor:{base:Q("celery-600"),S:void 0,M:Q("blue-600"),L:Q("magenta-600")}})])]]))))})}function Pa(){let e;return l.exports.createElement(y,{title:"Color scheme",code:`Spectrum.Provider [
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
`,description:d(),elements:f(i.createElement(gt,Ye(g([(e=zt,["theme",e]),["colorScheme","dark"],["children",i.Children.toArray([i.createElement(M,{padding:20,children:i.Children.toArray([i.createElement(_,{children:"Dark mode!"})])})])]]))))})}function _a(){const e=f(l.exports.createElement("p",{className:"paragraph",children:i.Children.toArray(["You can use a Provider component to define common properties for a group of components within. For example, you can disable multiple components as follows:"])}));return l.exports.createElement(y,{title:"Property groups",code:`Spectrum.Flex [
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
]`,description:e,elements:f(i.createElement(O,{direction:"column",gap:"size-100",alignItems:"start",children:i.Children.toArray([i.createElement(gt,{isDisabled:!0,children:i.Children.toArray([i.createElement(Qr,{label:"Favorite animal",children:i.Children.toArray([i.createElement(Qt,{value:"dogs",children:"Dogs"}),i.createElement(Qt,{value:"cats",children:"Cats"}),i.createElement(Qt,{value:"horses",children:"Horses"})])}),i.createElement($r,{children:i.Children.toArray(["I agree"])}),i.createElement(R,{variant:"primary",children:"Submit"})])})])}))})}function Ra(){const e=g(["Provider is the container for all React Spectrum applications. It defines the theme, locale, and other application level settings, and can also be used to provide common properties to a group of components.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Provider.html"})," for more details."]);return l.exports.createElement(T,{title:"Provider",description:e,examples:g([l.exports.createElement(za,null),l.exports.createElement(La,null),l.exports.createElement(Pa,null),l.exports.createElement(_a,null)])})}function Ga(){return l.exports.createElement(y,{title:"Vertical stack",code:`Spectrum.Flex [
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
]`,description:d(),elements:f(i.createElement(O,{direction:"column",width:"size-2000",gap:"size-100",children:i.Children.toArray([i.createElement(M,{backgroundColor:"celery-600",height:"size-800"}),i.createElement(M,{backgroundColor:"blue-600",height:"size-800"}),i.createElement(M,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function Oa(){return l.exports.createElement(y,{title:"Horizontal stack",code:`Spectrum.Flex [
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
]`,description:d(),elements:f(i.createElement(O,{direction:"row",height:"size-800",gap:"size-100",children:i.Children.toArray([i.createElement(M,{backgroundColor:"celery-600",width:"size-800"}),i.createElement(M,{backgroundColor:"blue-600",width:"size-800"}),i.createElement(M,{backgroundColor:"magenta-600",width:"size-800"})])}))})}function Ha(){const e=f(l.exports.createElement("p",{className:"paragraph",children:i.Children.toArray(["This example shows how you can nest flexboxes to create more complicated layouts. It also uses the flex prop on one of the children to expand it to fill the repaining space."])}));return l.exports.createElement(y,{title:"Nesting",code:`Spectrum.Flex [
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
]`,description:e,elements:f(i.createElement(O,{direction:"column",gap:"size-100",children:i.Children.toArray([i.createElement(M,{backgroundColor:"celery-600",height:"size-800"}),i.createElement(O,{direction:"row",height:"size-3000",gap:"size-100",children:i.Children.toArray([i.createElement(M,{backgroundColor:"indigo-600",width:"size-2000"}),i.createElement(M,{backgroundColor:"seafoam-600",flex:!0})])}),i.createElement(M,{backgroundColor:"magenta-600",height:"size-800"})])}))})}function ja(){const e=f(l.exports.createElement("p",{className:"paragraph",children:i.Children.toArray(["This example shows how to enable wrapping of items into multiple rows. Resize your browser window to see the items reflow."])}));return l.exports.createElement(y,{title:"Wrapping",code:`Spectrum.Flex [
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
]`,description:e,elements:f(i.createElement(O,{direction:"row",gap:"size-100",wrap:!0,children:i.Children.toArray(Array.from(z(v(()=>Ut(t=>i.createElement(M,{key:t,backgroundColor:t,width:"size-800",height:"size-800"}),Dr)))))}))})}function Ua(){return l.exports.createElement(y,{title:"Alignment",code:`Spectrum.Flex [
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
]`,description:d(),elements:f(i.createElement(O,{direction:"column",gap:"size-100",alignItems:"center",children:i.Children.toArray([i.createElement(M,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),i.createElement(M,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),i.createElement(M,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])}))})}function Wa(){return l.exports.createElement(y,{title:"Justification",code:`Spectrum.View [
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
]`,description:d(),elements:f(i.createElement(M,{height:"size-3000",borderWidth:"thin",borderColor:"dark",children:i.Children.toArray([i.createElement(O,{direction:"column",gap:"size-100",justifyContent:"center",height:"100%",children:i.Children.toArray([i.createElement(M,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),i.createElement(M,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),i.createElement(M,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})])})])}))})}function Ka(){const e=g(["A layout container using flexbox. Provides Spectrum dimension values, and supports the gap property to define consistent spacing between items.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Flex.html"})," for more details."]);return l.exports.createElement(T,{title:"Flex",description:e,examples:g([l.exports.createElement(Ga,null),l.exports.createElement(Oa,null),l.exports.createElement(Ha,null),l.exports.createElement(ja,null),l.exports.createElement(Ua,null),l.exports.createElement(Wa,null)])})}function Ja(){return l.exports.createElement(y,{title:"Explicit grid",code:`Spectrum.Grid [
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
]`,description:d(),elements:f(i.createElement(Nn,{areas:at(g(["header header","sidebar content","footer footer"])),columns:at(g(["1fr","3fr"])),rows:at(g(["size-1000","auto","size-1000"])),height:"size-6000",width:"80%",gap:"size-100",children:i.Children.toArray([i.createElement(M,{backgroundColor:"celery-600",gridArea:"header"}),i.createElement(M,{backgroundColor:"blue-600",gridArea:"sidebar"}),i.createElement(M,{backgroundColor:"purple-600",gridArea:"content"}),i.createElement(M,{backgroundColor:"magenta-600",gridArea:"footer"})])}))})}function qa(){let e;return l.exports.createElement(y,{title:"Implicit grid",code:`Spectrum.Grid [
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
]`,description:d(),elements:f(i.createElement(Nn,{height:"size-6000",width:"100%",columns:(e=ei,e("auto-fit","size-800")),autoRows:"size-800",justifyContent:"center",gap:"size-200",children:i.Children.toArray(Array.from(z(v(()=>Ut(t=>i.createElement(M,{key:t,backgroundColor:t}),Dr)))))}))})}function Za(){const e=g(["A layout container using CSS grid. Supports Spectrum dimensions as values to ensure consistent and adaptive sizing and spacing.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Grid.html"})," for more details."]);return l.exports.createElement(T,{title:"Grid",description:e,examples:g([l.exports.createElement(Ja,null),l.exports.createElement(qa,null)])})}function Ya(){return l.exports.createElement(y,{title:"Default example",code:`Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Alignment"
    ListBox.children [
        Spectrum.Item "Left"
        Spectrum.Item "Middle"
        Spectrum.Item "Right"
    ]
]`,description:d(),elements:f(i.createElement(ge,{width:"size-2400",["aria-label"]:"Alignment",children:[i.createElement(B,{children:"Left"}),i.createElement(B,{children:"Middle"}),i.createElement(B,{children:"Right"})]}))})}function Xa(){return l.exports.createElement(y,{title:"Content example",code:`let options = [
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
]`,description:d(),elements:z(v(()=>{const e=g([{id:1,name:"Aardvark"},{id:2,name:"Cat"},{id:3,name:"Dog"},{id:4,name:"Kangaroo"},{id:5,name:"Koala"},{id:6,name:"Penguin"},{id:7,name:"Snake"},{id:8,name:"Turtle"},{id:9,name:"Wombat"}]),t=K(void 0),n=t[1],r=t[0];return N(l.exports.createElement(l.exports.Fragment,{},...z(v(()=>he(N(i.createElement(ge,{width:"size-2400",["aria-label"]:"Animals",items:Array.from(e),children:o=>i.createElement(B,{children:o.name}),selectionMode:"single",onSelectionChange:o=>{const a=se(o.values());let c,s;switch(E(a)?c=1:E(S(a))?(c=0,s=x(a)):c=1,c){case 0:{n(s);break}case 1:{n(void 0);break}}}})),v(()=>{const o=r==null?"None selected":`Animal id: ${r}`;return N(l.exports.createElement("p",{children:[o]}))}))))))}))})}function Qa(){return l.exports.createElement(y,{title:"Selection example",code:`let options = [
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
]`,description:d(),elements:z(v(()=>{const e=g([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),t=K(f("Bison"));return N(i.createElement(O,{direction:"row",gap:"size-350",children:i.Children.toArray([i.createElement(ge,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),defaultSelectedKeys:["Bison","Koala"],width:"size-2400",children:n=>i.createElement(B,{key:n.name,textValue:n.name,children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray([n.name])})])})}),i.createElement(ge,{selectionMode:"multiple",["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],onSelectionChange:n=>{t[1](se(n.values()))},width:"size-2400",children:n=>i.createElement(B,{key:n.name,textValue:n.name,children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray([n.name])})])})})])}))}))})}function I(e,t){return i.createElement(B,{key:e,textValue:t,children:t})}function $a(){return l.exports.createElement(y,{title:"Sections",code:`Spectrum.ListBox [
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
]`,description:d(),elements:f(i.createElement(ge,{width:"size-2400",["aria-label"]:"Pick your favorite",selectionMode:"single",children:[i.createElement(Ae,{title:"Animals",children:[I("Aardvark","Aardvark"),I("Kangaroo","Kangaroo"),I("Snake","Snake")]}),i.createElement(Ae,{title:"People",children:[I("Danni","Danni"),I("Devon","Devon"),I("Ross","Ross")]})]}))})}function ec(){return l.exports.createElement(y,{title:"Dynamic items",code:`let options = [
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
]`,description:d(),elements:z(v(()=>{const e=g([{animals:[{id:2,name:"Koala"},{id:3,name:"Kangaroo"},{id:4,name:"Platypus"}],name:"Australian"},{animals:[{id:6,name:"Bald Eagle"},{id:7,name:"Bison"},{id:8,name:"Skunk"}],name:"American"}]),t=K(d());return N(i.createElement(ge,{["aria-label"]:"Pick an animal",items:Array.from(e),selectedKeys:t[0],selectionMode:"single",onSelectionChange:n=>{t[1](se(n.values()))},width:"size-2400",children:n=>i.createElement(Ae,{key:n.name,title:n.name,items:Array.from(n.animals),children:r=>{let o;return i.createElement(B,{key:(o=r.id,Vn(o)),textValue:r.name,children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray([r.name])})])})}})}))}))})}function tc(){return l.exports.createElement(y,{title:"Events",code:`let frequency, setFrequency = React.useState<string list>([])
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
]`,description:d(),elements:z(v(()=>{let e;const t=K(d()),n=t[0],r=o=>i.createElement(B,{key:o,textValue:o,children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray([o])})])});return N(l.exports.createElement(l.exports.Fragment,{},i.createElement(ge,{["aria-label"]:"Choose frequency",selectionMode:"single",onSelectionChange:o=>{t[1](se(o.values()))},width:"size-2400",children:[r("Rarely"),r("Sometimes"),r("Always")]}),(e=`You selected: ${E(n)?"":E(S(n))?x(n):""}`,l.exports.createElement("p",{children:[e]}))))}))})}function nc(){let e,t,n;return l.exports.createElement(y,{title:"Complex items",code:`Spectrum.ListBox [
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
]`,description:d(),elements:f(i.createElement(ge,{width:"size-2400",["aria-label"]:"Options",selectionMode:"single",children:[i.createElement(Ae,{title:"Permissions",children:[i.createElement(B,{textValue:"Read",children:i.Children.toArray([(e=ti,i.createElement(e,{size:"S"})),i.createElement(A,{children:i.Children.toArray(["Read"])}),i.createElement(A,{children:i.Children.toArray(["Read only"]),slot:"description"})])}),i.createElement(B,{textValue:"Write",children:i.Children.toArray([(t=Yt,i.createElement(t,{size:"S"})),i.createElement(A,{children:i.Children.toArray(["Write"])}),i.createElement(A,{children:i.Children.toArray(["Read and Write Only"]),slot:"description"})])}),i.createElement(B,{textValue:"Admin",children:i.Children.toArray([(n=ni,i.createElement(n,{size:"S"})),i.createElement(A,{children:i.Children.toArray(["Admin"])}),i.createElement(A,{children:i.Children.toArray(["Full access"]),slot:"description"})])})]})]}))})}function rc(){return l.exports.createElement(y,{title:"Disabled keys",code:`Spectrum.ListBox [
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
]`,description:d(),elements:f(i.createElement(ge,{width:"size-2400",["aria-label"]:"Pick your favorite",disabledKeys:["Snake","Ross"],selectionMode:"single",children:[i.createElement(Ae,{title:"Animals",children:[I("Aardvark","Aardvark"),I("Kangaroo","Kangaroo"),I("Snake","Snake")]}),i.createElement(Ae,{title:"People",children:[I("Danni","Danni"),I("Devon","Devon"),I("Ross","Ross")]})]}))})}function ic(){const e=g(["A list of options that can allow selection of one or more.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ListBox.html"})," for more details."]);return l.exports.createElement(T,{title:"ListBox",description:e,examples:g([l.exports.createElement(Ya,null),l.exports.createElement(Xa,null),l.exports.createElement(Qa,null),l.exports.createElement($a,null),l.exports.createElement(ec,null),l.exports.createElement(tc,null),l.exports.createElement(nc,null),l.exports.createElement(rc,null)])})}function oc(){return l.exports.createElement(y,{title:"Default example",code:`Spectrum.MenuTrigger [
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
]`,description:d(),elements:f(l.exports.createElement(J,d(),i.createElement(_,{children:"Edit"}),i.createElement(q,{onAction:e=>{window.alert(Q(e))},children:[I("cut","Cut"),I("copy","Copy"),I("paste","Paste"),I("replace","Replace")]})))})}function lc(){return l.exports.createElement(y,{title:"Using an item template",code:`let menuItems = [
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
]`,description:d(),elements:z(v(()=>{const e=g([{id:"cut",name:"Cut"},{id:"copy",name:"Copy"},{id:"Paste",name:"Paste"},{id:"replace",name:"Replace"}]);return N(l.exports.createElement(J,d(),l.exports.createElement(_,d(),"Edit"),i.createElement(q,{items:Array.from(e),children:t=>I(t.id,t.name)})))}))})}function ac(){return l.exports.createElement(y,{title:"Events",code:`let action, setAction = React.useState("")

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
]`,description:d(),elements:z(v(()=>{let e;const t=K(""),n=(r,o)=>i.createElement(B,{key:r,textValue:o,children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray([o])})])});return N(l.exports.createElement(l.exports.Fragment,{},l.exports.createElement(J,d(),l.exports.createElement(_,d(),"Edit"),i.createElement(q,{onAction:t[1],children:[n("cut","Cut"),n("copy","Copy"),n("paste","Paste")]})),(e=`Action: ${t[0]}`,l.exports.createElement("p",{children:[e]}))))}))})}function cc(){return l.exports.createElement(y,{title:"Selection",code:`let selected, setSelected = React.useState([ "middle" ])

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
]`,description:d(),elements:z(v(()=>{const e=K(f("middle")),t=e[0];return N(l.exports.createElement(l.exports.Fragment,{},...z(v(()=>he(N(l.exports.createElement(J,d(),l.exports.createElement(_,d(),"Align"),i.createElement(q,{selectionMode:"single",selectedKeys:t,onSelectionChange:n=>{e[1](se(n.values()))},children:[I("left","Left"),I("middle","Middle"),I("right","Right")]}))),v(()=>{let n;return E(t)?N(l.exports.createElement("p",{children:["No selection"]})):E(S(t))?N((n=`Current selection (controlled): ${x(t)}`,l.exports.createElement("p",{children:[n]}))):N(l.exports.createElement("p",{children:["No selection"]}))}))))))}))})}function sc(){return l.exports.createElement(y,{title:"Selection (multiple)",code:`let selected, setSelected = React.useState([ "Sidebar"; "Console" ])

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
]`,description:d(),elements:z(v(()=>{let e;const t=K(g(["Sidebar","Console"])),n=t[0];return N(l.exports.createElement(l.exports.Fragment,{},i.createElement(J,{closeOnSelect:!1,children:[l.exports.createElement(_,d(),"Show"),i.createElement(q,{selectionMode:"multiple",selectedKeys:n,onSelectionChange:r=>{t[1](se(r.values()))},children:[I("Sidebar","Sidebar"),I("Searchbar","Searchbar"),I("Tools","Tools"),I("Console","Console")]})]}),(e=`Current selection (controlled): ${at(n)}`,l.exports.createElement("p",{children:[e]}))))}))})}function uc(){return l.exports.createElement(y,{title:"Sections",code:`let selected, setSelected = React.useState([ "bold"; "left" ])

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
]`,description:d(),elements:z(v(()=>{const e=K(g(["bold","left"]));return N(l.exports.createElement(J,d(),l.exports.createElement(_,d(),"Edit"),i.createElement(q,{selectionMode:"multiple",selectedKeys:e[0],onSelectionChange:t=>{e[1](se(t.values()))},children:[i.createElement(Ae,{title:"Styles",children:[I("bold","Bold"),I("underline","Underline")]}),i.createElement(Ae,{title:"Align",children:[I("left","Left"),I("middle","Middle"),I("right","Right")]})]})))}))})}function mc(){let e,t,n;return l.exports.createElement(y,{title:"Complex items",code:`Spectrum.MenuTrigger [
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
]`,description:d(),elements:f(l.exports.createElement(J,d(),l.exports.createElement(_,d(),"Edit"),l.exports.createElement(q,d(),i.createElement(B,{key:"cut",textValue:"Cut",children:i.Children.toArray([(e=ri,i.createElement(e,{size:"S"})),i.createElement(A,{children:i.Children.toArray(["Cut"])}),i.createElement($t,{children:i.Children.toArray(["\u2318X"])})])}),i.createElement(B,{key:"copy",textValue:"Copy",children:i.Children.toArray([(t=Xt,i.createElement(t,{size:"S"})),i.createElement(A,{children:i.Children.toArray(["Copy"])}),i.createElement($t,{children:i.Children.toArray(["\u2318C"])})])}),i.createElement(B,{key:"paste",textValue:"Paste",children:i.Children.toArray([(n=ii,i.createElement(n,{size:"S"})),i.createElement(A,{children:i.Children.toArray(["Paste"])}),i.createElement($t,{children:i.Children.toArray(["\u2318V"])})])}))))})}function dc(){return l.exports.createElement(y,{title:"Disabled keys",code:`let items = [
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
]`,description:d(),elements:z(v(()=>{const e=g([{id:"a1b2c3",name:"tiff"},{id:"g5h1j9",name:"png"},{id:"p8k3i4",name:"jpg"},{id:"j7i3a0",name:"PDF"}]);return N(l.exports.createElement(J,d(),l.exports.createElement(_,d(),"Filter"),i.createElement(q,{items:Array.from(e),disabledKeys:["a1b2c3","p8k3i4"],children:t=>i.createElement(B,{children:t.name})})))}))})}function pc(){const e=g(["Menus display a list of actions or options that a user can choose.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Menu.html"})," for more details."]);return l.exports.createElement(T,{title:"Menu",description:e,examples:g([l.exports.createElement(oc,null),l.exports.createElement(lc,null),l.exports.createElement(ac,null),l.exports.createElement(cc,null),l.exports.createElement(sc,null),l.exports.createElement(uc,null),l.exports.createElement(mc,null),l.exports.createElement(dc,null)])})}function fc(){return l.exports.createElement(y,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)

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
]`,description:d(),elements:z(v(()=>{let e;const t=K(!1);return N(i.createElement(O,{gap:"size-100",alignItems:"center",children:i.Children.toArray([i.createElement(J,{onOpenChange:t[1],children:[l.exports.createElement(_,d(),"Edit"),l.exports.createElement(q,d(),i.createElement(B,{key:"cut",textValue:"Cut",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["Cut"])})])}),i.createElement(B,{key:"copy",textValue:"Copy",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["Copy"])})])}),i.createElement(B,{key:"paste",textValue:"Paste",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["Paste"])})])}))]}),(e=`Currently open: ${t[0]}`,l.exports.createElement("div",{children:[e]}))])}))}))})}function hc(){return l.exports.createElement(y,{title:"Alignment and direction",code:`Spectrum.Flex [
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
]`,description:d(),elements:f(i.createElement(O,{gap:"size-100",children:i.Children.toArray([i.createElement(J,{align:"start",children:[i.createElement(_,{children:i.Children.toArray(["Edit"])}),l.exports.createElement(q,d(),I("cut","Cut"),I("copy","Copy"),I("paste","Paste"))]}),i.createElement(J,{align:"end",direction:"top",shouldFlip:!1,children:[i.createElement(_,{children:i.Children.toArray(["View"])}),l.exports.createElement(q,d(),I("sidebar","Sidebar"),I("options","Page options"),I("edit","Edit panel"))]}),i.createElement(J,{align:"start",direction:"start",children:[i.createElement(_,{children:i.Children.toArray(["Edit"])}),l.exports.createElement(q,d(),I("cut","Cut"),I("copy","Copy"),I("paste","Paste"))]}),i.createElement(J,{align:"end",direction:"end",children:[i.createElement(_,{children:i.Children.toArray(["View"])}),l.exports.createElement(q,d(),I("sidebar","Sidebar"),I("options","Page options"),I("edit","Edit panel"))]})])}))})}function gc(){return l.exports.createElement(y,{title:"Open and selection",code:`let isOpen, setIsOpen = React.useState(false)
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
]`,description:d(),elements:z(v(()=>{const e=K(!1),t=K(d());return N(i.createElement(J,{isOpen:e[0],onOpenChange:e[1],children:[l.exports.createElement(_,d(),"View"),i.createElement(q,{selectionMode:"multiple",selectedKeys:t[0],onSelectionChange:n=>{t[1](se(n.values()))},children:[i.createElement(B,{key:"side",textValue:"Sidebar",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["Sidebar"])})])}),i.createElement(B,{key:"options",textValue:"Page options",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["Page options"])})])}),i.createElement(B,{key:"edit",textValue:"Edit panel",children:i.Children.toArray([i.createElement(A,{children:i.Children.toArray(["Edit panel"])})])})]})]}))}))})}function Ec(){const e=g(["The MenuTrigger serves as a wrapper around a Menu and its associated trigger, linking the Menu's open state with the trigger's press state.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html"})," for more details."]);return l.exports.createElement(T,{title:"MenuTrigger",description:e,examples:g([l.exports.createElement(fc,null),l.exports.createElement(hc,null),l.exports.createElement(gc,null)])})}function xc(){return l.exports.createElement(y,{title:"Default example",code:`Spectrum.TableView [
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
]`,description:d(),elements:f(i.createElement(en,{["aria-label"]:"Example table with static contents",selectionMode:"multiple",children:[l.exports.createElement(tn,d(),i.createElement(Et,{children:"Name"}),i.createElement(Et,{children:"Type"}),i.createElement(Et,{align:"end",children:["Date Modified"]})),l.exports.createElement(nn,d(),l.exports.createElement(qe,d(),i.createElement(Z,{children:"Games"}),i.createElement(Z,{children:"File folder"}),i.createElement(Z,{children:"6/7/2020"})),l.exports.createElement(qe,d(),i.createElement(Z,{children:"Program Files"}),i.createElement(Z,{children:"File folder"}),i.createElement(Z,{children:"4/7/2021"})),l.exports.createElement(qe,d(),i.createElement(Z,{children:"bootmgr"}),i.createElement(Z,{children:"System file"}),i.createElement(Z,{children:"11/20/2010"})),l.exports.createElement(qe,d(),i.createElement(Z,{children:"log.txt"}),i.createElement(Z,{children:"Text Document"}),i.createElement(Z,{children:"1/18/2016"})))]}))})}function Sc(){return l.exports.createElement(y,{title:"More complex example",code:`let columns = [
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
]`,description:d(),elements:z(v(()=>{const e=g([{name:"Name",uid:"name"},{name:"Type",uid:"entryType"},{name:"Date Modified",uid:"date"}]),t=g([{date:"6/7/2020",entryType:"File folder",id:1,name:"Games"},{date:"4/7/2021",entryType:"File folder",id:2,name:"Program Files"},{date:"11/20/2010",entryType:"System file",id:3,name:"bootmgr"},{date:"1/18/2016",entryType:"Text Document",id:4,name:"log.txt"}]);return N(i.createElement(en,{["aria-label"]:"Example table with dynamic content",maxWidth:"size-6000",selectionMode:"multiple",disabledKeys:[3],children:[i.createElement(tn,{columns:Array.from(e),children:n=>i.createElement(Et,{key:n.uid,align:n.uid==="date"?"end":"start",children:[n.name]})}),i.createElement(nn,{items:t,children:n=>i.createElement(qe,{children:r=>{const o=n[r];return i.createElement(Z,{children:o})}})})]}))}))})}function yc(){return l.exports.createElement(y,{title:"Layout + highlight selection + action",code:`let columns = [
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
]`,description:d(),elements:z(v(()=>{const e=g([{id:"firstName",name:"First Name"},{id:"lastName",name:"Last Name"},{id:"city",name:"City"}]),t=g([{city:"Sibiu",firstName:"George",id:1,lastName:"Danila"},{city:"Tilburg",firstName:"Andras",id:2,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:3,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:4,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:5,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:6,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:7,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:8,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:9,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:10,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:11,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:12,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:13,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:14,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:15,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:16,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:17,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:18,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:19,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:20,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:21,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:22,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:23,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:24,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:25,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:26,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:27,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:28,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:29,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:30,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:31,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:32,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:33,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:34,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:35,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:36,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:37,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:38,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:39,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:40,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:41,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:42,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:43,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:44,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:45,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:46,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:47,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:48,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:49,lastName:"Jaram"}]);return N(i.createElement(O,{height:"size-5000",width:"100%",direction:"column",gap:"size-150",children:i.Children.toArray([i.createElement(_,{alignSelf:"start",children:"Add"}),i.createElement(en,{flex:!0,["aria-label"]:"Example table with dynamic content",selectionMode:"single",selectionStyle:"highlight",onAction:n=>{window.alert(Q(n))},children:[i.createElement(tn,{columns:Array.from(e),children:n=>i.createElement(Et,{key:n.id,children:[n.name]})}),i.createElement(nn,{items:t,children:n=>i.createElement(qe,{children:r=>{const o=Ee(n[r]);return i.createElement(Z,{children:o})}})})]})])}))}))})}function wc(){const e=g(["Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TableView.html"})," for more details."]);return l.exports.createElement(T,{title:"TableView",description:e,examples:g([l.exports.createElement(xc,null),l.exports.createElement(Sc,null),l.exports.createElement(yc,null)])})}function bc(){const e=g(["Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Checkbox.html"})," for more details."]);return l.exports.createElement(T,{title:"Checkbox",description:e,examples:d()})}function Cc(){const e=g(["A CheckboxGroup allows users to select one or more items from a list of choices.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html"})," for more details."]);return l.exports.createElement(T,{title:"CheckboxGroup",description:e,examples:d()})}function Ac(){const e=g(["Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Form.html"})," for more details."]);return l.exports.createElement(T,{title:"Form",description:e,examples:d()})}function kc(){const e=g(["NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/NumberField.html"})," for more details."]);return l.exports.createElement(T,{title:"NumberField",description:e,examples:d()})}function Bc(){const e=g(["Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RadioGroup.html"})," for more details."]);return l.exports.createElement(T,{title:"RadioGroup",description:e,examples:d()})}function vc(){const e=g(["A SearchField is a text field designed for searches.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/SearchField.html"})," for more details."]);return l.exports.createElement(T,{title:"SearchField",description:e,examples:d()})}function Ic(){const e=g(["Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Switch.html"})," for more details."]);return l.exports.createElement(T,{title:"Switch",description:e,examples:d()})}function Nc(){const e=g(["TextAreas are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextArea.html"})," for more details."]);return l.exports.createElement(T,{title:"TextArea",description:e,examples:d()})}function Tc(){const e=g(["TextFields are text inputs that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextField.html"})," for more details."]);return l.exports.createElement(T,{title:"TextField",description:e,examples:d()})}function Mc(){const e=g(["Workflow icons are graphical metaphors or symbols that can be used to compliment existing experiences.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"})," for more details."]);return l.exports.createElement(T,{title:"Workflow Icons",description:e,examples:d()})}function Vc(){const e=g(["Breadcrumbs show hierarchy and navigational context for a user\u2019s location within an application.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html"})," for more details."]);return l.exports.createElement(T,{title:"Breadcrumbs",description:e,examples:d()})}function Fc(){const e=g(["Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Link.html"})," for more details."]);return l.exports.createElement(T,{title:"Link",description:e,examples:d()})}function Dc(){const e=g(["Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tabs.html"})," for more details."]);return l.exports.createElement(T,{title:"Tabs",description:e,examples:d()})}function zc(){const e=g(["AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html"})," for more details."]);return l.exports.createElement(T,{title:"AlertDialog",description:e,examples:d()})}function Lc(){const e=g(["Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Dialog.html"})," for more details."]);return l.exports.createElement(T,{title:"Dialog",description:e,examples:d()})}function Pc(){const e=g(["A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html"})," for more details."]);return l.exports.createElement(T,{title:"DialogContainer",description:e,examples:d()})}function _c(){const e=g(["DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html"})," for more details."]);return l.exports.createElement(T,{title:"DialogTrigger",description:e,examples:d()})}function Rc(){const e=g(["Display container for Tooltip content. Has a directional arrow dependent on its placement.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tooltip.html"})," for more details."]);return l.exports.createElement(T,{title:"Tooltip",description:e,examples:d()})}function Gc(){const e=g(["ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ComboBox.html"})," for more details."]);return l.exports.createElement(T,{title:"ComboBox",description:e,examples:d()})}function Oc(){const e=g(["Pickers allow users to choose a single option from a collapsible list of options when space is limited.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:i.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Picker.html"})," for more details."]);return l.exports.createElement(T,{title:"Picker",description:e,examples:d()})}function Hc(){return null}function jc(){return null}function Uc(){return null}function Wc(){return null}function Kc(){return null}function Jc(){return null}function qc(){return null}function Zc(){return null}function Yc(){return null}function Xc(){return null}function Qc(){return null}function $c(){return null}function es(){return null}function ts(){return null}function ns(){return null}function rs(){return null}function is(){return null}const os=(()=>{let e=!1;try{(typeof window!="undefined"?typeof window.addEventListener=="function":!1)&&(window.addEventListener("testPassiveEventSupport",t=>{},{passive:!0}),window.removeEventListener("testPassiveEventSupport",t=>{}))}catch{}return e})();function kn(e){return yo(t=>(t.passive?!os:!1)?{capture:t.capture,once:t.once,passive:!1}:t,e)}function Bn(e){return wo(t=>{if(t.capture)return{capture:!0}},e)}function pt(e,t){if(t.indexOf(e)===0)return t}function zr(e,t){if(ho(t,e))return t}function ls(e){return e===1?t=>{let n,r,o,a,c,s;return n=pt("/",t),n!=null?(r=n,"#"+r):(o=pt("#/",t),o!=null?(a=o,a):(c=pt("#",t),c!=null?(s=c,"#/"+cr(s,1,s.length-1)):"#/"+t))}:t=>{let n,r;return n=pt("/",t),n!=null?(r=n,r):"/"+t}}function b(e,t){return ls(t)(mn("/",Vo(n=>((n.indexOf("?")>=0?!0:n.indexOf("#")===0)?!0:n.indexOf("/")===0)?n:encodeURIComponent(n),e)))}function as(e,t,n){t===1?history.pushState(void 0,"",b(e,n)):history.replaceState(void 0,"",b(e,n));const r=document.createEvent("CustomEvent");r.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(r)}function Lr(e,t){return To(n=>{if(go(n))return d();{const r=xo(n,"#");if(r==="?")return d();if(pt("?",r)!=null)return f(r);{const o=r.split("?");if(mr((a,c)=>a===c,o,null)?!1:o.length===1){const a=o[0];return f(decodeURIComponent(a))}else if(mr((a,c)=>a===c,o,null)?!1:o.length===2)if(o[1]===""){const a=o[0];return f(decodeURIComponent(a))}else{const a=o[0],c=o[1];return g([decodeURIComponent(a),"?"+c])}else return d()}}},g(Eo(pt("#",e)!=null?cr(e,1,e.length-1):t===1&&(zr("#",e)!=null||zr("#/",e)!=null)?"":e,["/"],null,0)))}function cs(e,t,n){return t(Lr(e===2?window.location.pathname+window.location.search:window.location.hash,e))}const ss=ra(e=>{const t=Kt(u=>{const p=vt(e.onUrlChanged,h=>{});cs(vt(e.hashMode,1),p)});if(window.navigator.userAgent.indexOf("Trident")>=0?!0:window.navigator.userAgent.indexOf("MSIE")>=0){const u="hashchange",p=V=>{t(V)},h=void 0,w=Ie(()=>kn(h),[h]),k=Ie(()=>Bn(h),[h]),D=Ie(()=>V=>{p(V)},[p]);An(Kt(()=>(w==null?window.addEventListener(u,D):window.addEventListener(u,D,w),Tt(()=>{k==null?window.removeEventListener(u,D):window.removeEventListener(u,D,k)}))))}else{const u="popstate",p=t,h=void 0,w=Ie(()=>kn(h),[h]),k=Ie(()=>Bn(h),[h]),D=Ie(()=>V=>{p(V)},[p]);An(Kt(()=>(w==null?window.addEventListener(u,D):window.addEventListener(u,D,w),Tt(()=>{k==null?window.removeEventListener(u,D):window.removeEventListener(u,D,k)}))))}const n="CUSTOM_NAVIGATION_EVENT",r=t,o=void 0,a=Ie(()=>kn(o),[o]),c=Ie(()=>Bn(o),[o]),s=Ie(()=>u=>{r(u)},[r]);An(Kt(()=>(a==null?window.addEventListener(n,s):window.addEventListener(n,s,a),Tt(()=>{c==null?window.removeEventListener(n,s):window.removeEventListener(n,s,c)}))));const m=e.application;return m==null?null:m});function te(e,t,n){return i.createElement(Ae,{key:e,title:t,children:Array.from(n)})}function C(e,t){return i.createElement(B,{key:e,textValue:t,title:t})}function us(){return g([te("general","General",[C("overview","Overview"),C("installation","Installation")]),te("application","Application",[C("provider","Provider")]),te("layout","Layout",[C("flex","Flex"),C("grid","Grid")]),te("buttons","Buttons",[C("actionButton","ActionButton"),C("actionGroup","ActionGroup"),C("button","Button"),C("buttonGroup","ButtonGroup"),C("logicButton","LogicButton"),C("toggleButton","ToggleButton")]),te("collections","Collections",[C("listBox","ListBox"),C("menu","Menu"),C("menuTrigger","MenuTrigger"),C("tableView","TableView")]),te("forms","Forms",[C("checkbox","Checkbox"),C("checkboxGroup","CheckboxGroup"),C("form","Form"),C("numberField","NumberField"),C("radioGroup","RadioGroup"),C("searchField","SearchField"),C("switch","Switch"),C("textArea","TextArea"),C("textField","TextField")]),te("icons","Icons",[C("workflowIcons","Workflow Icons")]),te("navigation","Navigation",[C("breadcrumbs","Breadcrumbs"),C("link","Link"),C("tabs","Tabs")]),te("overlays","Overlays",[C("alertDialog","AlertDialog"),C("dialog","Dialog"),C("dialogContainer","DialogContainer"),C("dialogTrigger","DialogTrigger"),C("tooltip","Tooltip")]),te("pickers","Pickers",[C("comboBox","ComboBox"),C("picker","Picker")]),te("sliders","Sliders",[C("rangeSlider","RangeSlider"),C("slider","Slider")]),te("status","Status",[C("meter","Meter"),C("progressBar","ProgressBar"),C("progressCircle","ProgressCircle"),C("statusLight","StatusLight")]),te("content'","Content",[C("content","Content"),C("divider","Divider"),C("footer","Footer"),C("header","Header"),C("heading","Heading"),C("illustratedMessage","IllustratedMessage"),C("image","Image"),C("keyboard","Keyboard"),C("text","Text"),C("view","View"),C("well","Well")])])}function ms(e){switch(e){case"installation":return l.exports.createElement(la,null);case"actionButton":return l.exports.createElement(ua,null);case"actionGroup":return l.exports.createElement(Ea,null);case"button":return l.exports.createElement(wa,null);case"buttonGroup":return l.exports.createElement(ka,null);case"toggleButton":return l.exports.createElement(Da,null);case"provider":return l.exports.createElement(Ra,null);case"flex":return l.exports.createElement(Ka,null);case"grid":return l.exports.createElement(Za,null);case"logicButton":return l.exports.createElement(Na,null);case"listBox":return l.exports.createElement(ic,null);case"menu":return l.exports.createElement(pc,null);case"menuTrigger":return l.exports.createElement(Ec,null);case"tableView":return l.exports.createElement(wc,null);case"checkbox":return l.exports.createElement(bc,null);case"checkboxGroup":return l.exports.createElement(Cc,null);case"form":return l.exports.createElement(Ac,null);case"numberField":return l.exports.createElement(kc,null);case"radioGroup":return l.exports.createElement(Bc,null);case"searchField":return l.exports.createElement(vc,null);case"switch":return l.exports.createElement(Ic,null);case"textArea":return l.exports.createElement(Nc,null);case"textField":return l.exports.createElement(Tc,null);case"workflowIcons":return l.exports.createElement(Mc,null);case"breadcrumbs":return l.exports.createElement(Vc,null);case"link":return l.exports.createElement(Fc,null);case"tabs":return l.exports.createElement(Dc,null);case"alertDialog":return l.exports.createElement(zc,null);case"dialog":return l.exports.createElement(Lc,null);case"dialogContainer":return l.exports.createElement(Pc,null);case"dialogTrigger":return l.exports.createElement(_c,null);case"tooltip":return l.exports.createElement(Rc,null);case"comboBox":return l.exports.createElement(Gc,null);case"picker":return l.exports.createElement(Oc,null);case"rangeSlider":return l.exports.createElement(Hc,null);case"slider":return l.exports.createElement(jc,null);case"meter":return l.exports.createElement(Uc,null);case"progressBar":return l.exports.createElement(Wc,null);case"progressCircle":return l.exports.createElement(Kc,null);case"statusLight":return l.exports.createElement(Jc,null);case"content":return l.exports.createElement(qc,null);case"divider":return l.exports.createElement(Zc,null);case"footer":return l.exports.createElement(Yc,null);case"header":return l.exports.createElement(Xc,null);case"heading":return l.exports.createElement(Qc,null);case"illustratedMessage":return l.exports.createElement($c,null);case"image":return l.exports.createElement(es,null);case"keyboard":return l.exports.createElement(ts,null);case"text":return l.exports.createElement(ns,null);case"view":return l.exports.createElement(rs,null);case"well":return l.exports.createElement(is,null);default:return l.exports.createElement(oa,null)}}function Pr(e){let t;switch(E(e)?t=52:x(e)===""?E(S(e))?t=0:t=52:x(e)==="installation"?E(S(e))?t=1:t=52:x(e)==="provider"?E(S(e))?t=2:t=52:x(e)==="flex"?E(S(e))?t=3:t=52:x(e)==="grid"?E(S(e))?t=4:t=52:x(e)==="actionbutton"?E(S(e))?t=5:t=52:x(e)==="actiongroup"?E(S(e))?t=6:t=52:x(e)==="button"?E(S(e))?t=7:t=52:x(e)==="buttongroup"?E(S(e))?t=8:t=52:x(e)==="logicbutton"?E(S(e))?t=9:t=52:x(e)==="togglebutton"?E(S(e))?t=10:t=52:x(e)==="listbox"?E(S(e))?t=11:t=52:x(e)==="menu"?E(S(e))?t=12:t=52:x(e)==="menutrigger"?E(S(e))?t=13:t=52:x(e)==="tableview"?E(S(e))?t=14:t=52:x(e)==="checkbox"?E(S(e))?t=15:t=52:x(e)==="checkboxgroup"?E(S(e))?t=16:t=52:x(e)==="form"?E(S(e))?t=17:t=52:x(e)==="numberfield"?E(S(e))?t=18:t=52:x(e)==="radiogroup"?E(S(e))?t=19:t=52:x(e)==="searchfield"?E(S(e))?t=20:t=52:x(e)==="switch"?E(S(e))?t=21:t=52:x(e)==="textarea"?E(S(e))?t=22:t=52:x(e)==="textfield"?E(S(e))?t=23:t=52:x(e)==="icons"?E(S(e))?t=24:t=52:x(e)==="breadcrumbs"?E(S(e))?t=25:t=52:x(e)==="link"?E(S(e))?t=26:t=52:x(e)==="tabs"?E(S(e))?t=27:t=52:x(e)==="alertdialog"?E(S(e))?t=28:t=52:x(e)==="dialog"?E(S(e))?t=29:t=52:x(e)==="dialogcontainer"?E(S(e))?t=30:t=52:x(e)==="dialogtrigger"?E(S(e))?t=31:t=52:x(e)==="tooltip"?E(S(e))?t=32:t=52:x(e)==="combobox"?E(S(e))?t=33:t=52:x(e)==="picker"?E(S(e))?t=34:t=52:x(e)==="rangeslider"?E(S(e))?t=35:t=52:x(e)==="slider"?E(S(e))?t=36:t=52:x(e)==="meter"?E(S(e))?t=37:t=52:x(e)==="progressbar"?E(S(e))?t=38:t=52:x(e)==="progresscircle"?E(S(e))?t=39:t=52:x(e)==="statuslight"?E(S(e))?t=40:t=52:x(e)==="content"?E(S(e))?t=41:t=52:x(e)==="divider"?E(S(e))?t=42:t=52:x(e)==="footer"?E(S(e))?t=43:t=52:x(e)==="header"?E(S(e))?t=44:t=52:x(e)==="heading"?E(S(e))?t=45:t=52:x(e)==="illustratedmessage"?E(S(e))?t=46:t=52:x(e)==="image"?E(S(e))?t=47:t=52:x(e)==="keyboard"?E(S(e))?t=48:t=52:x(e)==="text"?E(S(e))?t=49:t=52:x(e)==="view"?E(S(e))?t=50:t=52:x(e)==="well"&&E(S(e))?t=51:t=52,t){case 0:return"overview";case 1:return"installation";case 2:return"provider";case 3:return"flex";case 4:return"grid";case 5:return"actionButton";case 6:return"actionGroup";case 7:return"button";case 8:return"buttonGroup";case 9:return"logicButton";case 10:return"toggleButton";case 11:return"listBox";case 12:return"menu";case 13:return"menuTrigger";case 14:return"tableView";case 15:return"checkbox";case 16:return"checkboxGroup";case 17:return"form";case 18:return"numberField";case 19:return"radioGroup";case 20:return"searchField";case 21:return"switch";case 22:return"textArea";case 23:return"textField";case 24:return"workflowIcons";case 25:return"breadcrumbs";case 26:return"link";case 27:return"tabs";case 28:return"alertDialog";case 29:return"dialog";case 30:return"dialogContainer";case 31:return"dialogTrigger";case 32:return"tooltip";case 33:return"comboBox";case 34:return"picker";case 35:return"rangeSlider";case 36:return"slider";case 37:return"meter";case 38:return"progressBar";case 39:return"progressCircle";case 40:return"statusLight";case 41:return"content";case 42:return"divider";case 43:return"footer";case 44:return"header";case 45:return"heading";case 46:return"illustratedMessage";case 47:return"image";case 48:return"keyboard";case 49:return"text";case 50:return"view";case 51:return"well";case 52:return"overview"}}function ds(e){switch(e){case"installation":return b(f("installation"),1);case"provider":return b(f("provider"),1);case"flex":return b(f("flex"),1);case"grid":return b(f("grid"),1);case"actionButton":return b(f("actionbutton"),1);case"actionGroup":return b(f("actiongroup"),1);case"button":return b(f("button"),1);case"buttonGroup":return b(f("buttongroup"),1);case"logicButton":return b(f("logicbutton"),1);case"toggleButton":return b(f("togglebutton"),1);case"listBox":return b(f("listbox"),1);case"menu":return b(f("menu"),1);case"menuTrigger":return b(f("menutrigger"),1);case"tableView":return b(f("tableview"),1);case"checkbox":return b(f("checkbox"),1);case"checkboxGroup":return b(f("checkboxgroup"),1);case"form":return b(f("form"),1);case"numberField":return b(f("numberfield"),1);case"radioGroup":return b(f("radiogroup"),1);case"searchField":return b(f("searchfield"),1);case"switch":return b(f("switch"),1);case"textArea":return b(f("textarea"),1);case"textField":return b(f("textfield"),1);case"workflowIcons":return b(f("icons"),1);case"breadcrumbs":return b(f("breadcrumbs"),1);case"link":return b(f("link"),1);case"tabs":return b(f("tabs"),1);case"alertDialog":return b(f("alertdialog"),1);case"dialog":return b(f("dialog"),1);case"dialogContainer":return b(f("dialogcontainer"),1);case"dialogTrigger":return b(f("dialogtrigger"),1);case"tooltip":return b(f("tooltip"),1);case"comboBox":return b(f("combobox"),1);case"picker":return b(f("picker"),1);case"rangeSlider":return b(f("rangeslider"),1);case"slider":return b(f("slider"),1);case"meter":return b(f("meter"),1);case"progressBar":return b(f("progressbar"),1);case"progressCircle":return b(f("progresscircle"),1);case"statusLight":return b(f("statuslight"),1);case"content":return b(f("content"),1);case"divider":return b(f("divider"),1);case"footer":return b(f("footer"),1);case"header":return b(f("header"),1);case"heading":return b(f("heading"),1);case"illustratedMessage":return b(f("illustratedmessage"),1);case"image":return b(f("image"),1);case"keyboard":return b(f("keyboard"),1);case"text":return b(f("text"),1);case"view":return b(f("view"),1);case"well":return b(f("well"),1);default:return b(f(""),1)}}class _r extends _e{constructor(t){super();this.SelectedDoc=t}}class ps extends an{constructor(t,...n){super();this.tag=t|0,this.fields=n}cases(){return["SelectDocsId"]}}function fs(){return[new _r(Pr(Lr(window.location.hash,1))),d()]}function hs(e,t){return[new _r(e.fields[0]),d()]}function gs(e,t){let n;const r=us();return i.createElement(gt,Ye(g([(n=zt,["theme",n]),["colorScheme","light"],["locale","en-US"],["scale","medium"],["id","spectrum-provider"],["children",i.Children.toArray([i.createElement(O,{width:"100%",height:"100%",direction:"column",alignItems:"center",children:i.Children.toArray([i.createElement(O,{columnGap:"size-300",direction:"row",height:"100%",width:"70%",children:i.Children.toArray([i.createElement(M,{width:200,backgroundColor:"gray-200",children:i.Children.toArray([i.createElement(ge,{id:"navigation-list",children:Array.from(r),["aria-label"]:"Navigation panel",selectionMode:"single",disallowEmptySelection:!0,selectedKeys:[e.SelectedDoc],onSelectionChange:o=>{const a=se(o.values());let c,s;switch(E(a)?c=1:E(S(a))?(c=0,s=x(a)):c=1,c){case 0:{as(f(ds(s)),1,1);break}}}})])}),i.createElement(M,{flexGrow:1,paddingTop:20,id:"content-host",children:i.Children.toArray([ss({onUrlChanged:o=>{t(new ps(0,Pr(o)))},application:l.exports.createElement(l.exports.Fragment,{},ms(e.SelectedDoc))})])})])})])})])]])))}_l(jl("app-root",Dl(fs,(e,t)=>hs(e),(e,t)=>gs(e,t))));
