import{r as l,a as Ml,$ as zl,b as Z,c as B,d as Qn,e as R,f as v,g as E,h as zt,i as H,j as P,k as ze,l as er,m as vt,_ as Rl,n as jr,o as In,p as tr,q as Tn,s as Pl,t as Ll,u as Gl,v as $l,w as Hl,x as Ol,y as Wl,z as Kr,A as gn,B as st,C as ne,D as mt,E as $,F as wt,G as ql,H as Ul,I as jl,J as Jr,K as Kl,L as Re,M as Ee,N as Fn,O as re,P as le,Q as xn,R as Zt,S as nr,T as ue,U as yt,V as rr,W as lr,X as Yr,Y as Jl,Z as Yl,a0 as Xl,a1 as Zl,a2 as Ql,a3 as ei,a4 as ti,a5 as Ue,a6 as O,a7 as xt,a8 as xe,a9 as En,aa as kt,ab as ce,ac as it,ad as St,ae as ot,af as je,ag as tn,ah as nn,ai as rn,aj as ni,ak as ri,al as li,am as Rt,an as ie,ao as J,ap as ir,aq as K,ar as ye,as as or,at as Xr,au as Zr,av as Ye,aw as Xe,ax as _n,ay as ii,az as oi,aA as ai,aB as ci,aC as Ze,aD as Sn,aE as si,aF as It,aG as yn,aH as Qt,aI as ar,aJ as cr,aK as mi,aL as Pt,aM as ui,aN as di,aO as pi,aP as hi,aQ as fi,aR as xi,aS as gi,aT as Ei}from"./vendor.7e903908.js";const Si=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}};Si();function Qe(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function yi(e){return typeof e.CompareTo=="function"}function bi(e){return typeof e.Equals=="function"}function Ci(e){return typeof e.GetHashCode=="function"}function Ai(e){return e!=null&&typeof e.Dispose=="function"}function Be(e){Ai(e)&&e.Dispose()}function bn(e,t){return Object.getPrototypeOf(e).constructor===Object.getPrototypeOf(t).constructor}class vi{constructor(t){this.iter=t}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this.iter.next();return this.current=t.value,!t.done}["System.Collections.IEnumerator.Reset"](){throw new Error("JS iterators cannot be reset")}Dispose(){}}function et(e){return typeof e.GetEnumerator=="function"?e.GetEnumerator():new vi(e[Symbol.iterator]())}function Qr(e){return{[Symbol.iterator](){return this},next(){const t=e["System.Collections.IEnumerator.MoveNext"](),r=t?e["System.Collections.IEnumerator.get_Current"]():void 0;return{done:!t,value:r}}}}function Oe(e,t){let r=e.toString(10);for(;r.length<t;)r="0"+r;return r}function Er(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}function el(e,t){return e=e<0&&t!=null&&t!==10?4294967295+e+1:e,e.toString(t)}class Ke{static id(t){return Ke.idMap.has(t)||Ke.idMap.set(t,++Ke.count),Ke.idMap.get(t)}}Ke.idMap=new WeakMap;Ke.count=0;function wi(e){let t=0,r=5381;const i=e.length;for(;t<i;)r=r*33^e.charCodeAt(t++);return r}function jn(e){return e*2654435761|0}function cn(e){return e.length===0?0:e.reduce((t,r)=>(t<<5)+t^r)}function ki(e){return e.getTime()}function Ii(e){const t=e.length,r=new Array(t);for(let i=0;i<t;i++)r[i]=Lt(e[i]);return cn(r)}function Lt(e){if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return jn(e);case"string":return wi(e);default:{if(Ci(e))return e.GetHashCode();if(Qe(e))return Ii(e);if(e instanceof Date)return ki(e);if(Object.getPrototypeOf(e).constructor===Object){const t=Object.values(e).map(r=>Lt(r));return cn(t)}else return jn(Ke.id(e))}}}function Ti(e,t,r){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!r(e[i],t[i]))return!1;return!0}function tl(e,t){return Ti(e,t,sn)}function Fi(e,t){const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;r.sort(),i.sort();for(let o=0;o<r.length;o++)if(r[o]!==i[o]||!sn(e[r[o]],t[i[o]]))return!1;return!0}function sn(e,t){return e===t?!0:e==null?t==null:t==null||typeof e!="object"?!1:bi(e)?e.Equals(t):Qe(e)?Qe(t)&&tl(e,t):e instanceof Date?t instanceof Date&&nl(e,t)===0:Object.getPrototypeOf(e).constructor===Object&&Fi(e,t)}function nl(e,t){let r,i;return"offset"in e&&"offset"in t?(r=e.getTime(),i=t.getTime()):(r=e.getTime()+Er(e),i=t.getTime()+Er(t)),r===i?0:r<i?-1:1}function Sr(e,t){return e===t?0:e<t?-1:1}function _i(e,t,r){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let i=0,o=0;i<e.length;i++)if(o=r(e[i],t[i]),o!==0)return o;return 0}function rl(e,t){return _i(e,t,ut)}function Bi(e,t){const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return r.length<i.length?-1:1;r.sort(),i.sort();for(let o=0,c=0;o<r.length;o++){const m=r[o];if(m!==i[o])return m<i[o]?-1:1;if(c=ut(e[m],t[m]),c!==0)return c}return 0}function ut(e,t){return e===t?0:e==null?t==null?0:-1:t==null?1:typeof e!="object"?e<t?-1:1:yi(e)?e.CompareTo(t):Qe(e)?Qe(t)?rl(e,t):-1:e instanceof Date?t instanceof Date?nl(e,t):-1:Object.getPrototypeOf(e).constructor===Object?Bi(e,t):-1}function yr(e,t,r){return e(t,r)>0?t:r}function s(e){const t={};for(const r of e)t[r[0]]=r[1];return t}const ln=Symbol("curried");function Cn(e,t){if(t==null||t.length>1)return t;const r=(...i)=>{let o=t;for(let c=0;c<e;c++)o=o(i[c]);return o};return r[ln]=t,r}function sr(e,t,r){return i=>t===1?r(...e.concat([i])):sr(e.concat([i]),t-1,r)}function ll(e,t){return t==null||t.length===1?t:ln in t?t[ln]:sr([],e,t)}function Di(e,t,r){if(t!=null)if(ln in t){t=t[ln];for(let i=0;i<r.length;i++)t=t(r[i]);return t}else return sr(r,e,t)}function Vi(e){let t=0,r="[";for(const i of e){if(t===0)r+=Pe(i);else if(t===100){r+="; ...";break}else r+="; "+Pe(i);t++}return r+"]"}function Pe(e,t=0){if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return Vi(e);{const r=Object.getPrototypeOf(e).constructor;return r===Object&&t<10?"{ "+Object.entries(e).map(([i,o])=>i+" = "+Pe(o,t+1)).join(`
  `)+" }":r.name}}return String(e)}function Ni(e,t){if(t.length===0)return e;{let r="",i=!0;return t.length===1?(r=Pe(t[0]),i=r.indexOf(" ")>=0):r=t.map(o=>Pe(o)).join(", "),e+(i?" (":" ")+r+(i?")":"")}}class mr{get name(){return this.cases()[this.tag]}toJSON(){return this.fields.length===0?this.name:[this.name].concat(this.fields)}toString(){return Ni(this.name,this.fields)}GetHashCode(){const t=this.fields.map(r=>Lt(r));return t.splice(0,0,jn(this.tag)),cn(t)}Equals(t){return this===t?!0:bn(this,t)&&this.tag===t.tag?tl(this.fields,t.fields):!1}CompareTo(t){return this===t?0:bn(this,t)?this.tag===t.tag?rl(this.fields,t.fields):this.tag<t.tag?-1:1:-1}}function Mi(e){const t={},r=Object.keys(e);for(let i=0;i<r.length;i++)t[r[i]]=e[r[i]];return t}function zi(e){return"{ "+Object.entries(e).map(([t,r])=>t+" = "+Pe(r)).join(`
  `)+" }"}function Ri(e){const t=Object.values(e).map(r=>Lt(r));return cn(t)}function Pi(e,t){if(e===t)return!0;if(bn(e,t)){const r=Object.keys(e);for(let i=0;i<r.length;i++)if(!sn(e[r[i]],t[r[i]]))return!1;return!0}else return!1}function Li(e,t){if(e===t)return 0;if(bn(e,t)){const r=Object.keys(e);for(let i=0;i<r.length;i++){const o=ut(e[r[i]],t[r[i]]);if(o!==0)return o}return 0}else return-1}class gt{toJSON(){return Mi(this)}toString(){return zi(this)}GetHashCode(){return Ri(this)}Equals(t){return Pi(this,t)}CompareTo(t){return Li(this,t)}}const nt=Symbol("numeric");function Gi(e){return typeof e=="number"||(e==null?void 0:e[nt])}function $i(e,t){return typeof e=="number"?e<t?-1:e>t?1:0:e.CompareTo(t)}function Hi(e,t){return typeof e=="number"?e*t:e[nt]().multiply(t)}function Oi(e,t){return typeof e=="number"?e.toFixed(t):e[nt]().toFixed(t)}function br(e,t){return typeof e=="number"?e.toPrecision(t):e[nt]().toPrecision(t)}function Cr(e,t){return typeof e=="number"?e.toExponential(t):e[nt]().toExponential(t)}function Ar(e){return typeof e=="number"?(Number(e)>>>0).toString(16):e[nt]().toHex()}var W={GetHashCode(){return cn([this.s,this.e].concat(this.c))},Equals(e){return!this.cmp(e)},CompareTo(e){return this.cmp(e)},[nt](){const e=this;return{multiply:t=>e.mul(t),toPrecision:t=>e.toPrecision(t),toExponential:t=>e.toExponential(t),toFixed:t=>e.toFixed(t),toHex:()=>(Number(e)>>>0).toString(16)}}},Wi=28,qi=1,dt=1e6,vr=1e6,Ui=-29,ji=29,Ki=!1,mn="[big.js] ",Et=mn+"Invalid ",Bn=Et+"decimal places",Ji=Et+"rounding mode",il=mn+"Division by zero",Ne=void 0,Yi=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function ol(){function e(t){var r=this;if(!(r instanceof e))return t===Ne?ol():new e(t);if(t instanceof e)r.s=t.s,r.e=t.e,r.c=t.c.slice(),Xi(r);else{if(typeof t!="string"){if(e.strict===!0)throw TypeError(Et+"number");t=t===0&&1/t<0?"-0":String(t)}Zi(r,t)}r.constructor=e}return e.prototype=W,e.DP=Wi,e.RM=qi,e.NE=Ui,e.PE=ji,e.strict=Ki,e}function Xi(e){if(e.c.length>1&&!e.c[0]){let t=e.c.findIndex(r=>r);e.c=e.c.slice(t),e.e=e.e-t}}function Zi(e,t){var r,i,o;if(!Yi.test(t))throw Error(Et+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".","")),(i=t.search(/e/i))>0?(r<0&&(r=i),r+=+t.slice(i+1),t=t.substring(0,i)):r<0&&(r=t.length),o=t.length,i=0;i<r&&i<o&&t.charAt(i)=="0";)++i;if(i==o)e.c=[e.e=0];else for(e.e=r-i-1,e.c=[],r=0;i<o;)e.c[r++]=+t.charAt(i++);return e=rt(e,tt.DP+1,tt.RM),e}function rt(e,t,r,i){var o=e.c;if(r===Ne&&(r=tt.RM),r!==0&&r!==1&&r!==2&&r!==3)throw Error(Ji);if(t<1)i=r===3&&(i||!!o[0])||t===0&&(r===1&&o[0]>=5||r===2&&(o[0]>5||o[0]===5&&(i||o[1]!==Ne))),o.length=1,i?(e.e=e.e-t+1,o[0]=1):o[0]=e.e=0;else if(t<o.length){const c=o.findIndex((m,p)=>p>=t&&m>0)<0;if(i=r===1&&o[t]>=5||r===2&&(o[t]>5||o[t]===5&&(i||o[t+1]!==Ne||o[t-1]&1))||r===3&&(i||!c),o.length=t--,i)for(;++o[t]>9;)o[t]=0,t--||(++e.e,o.unshift(1));for(t=o.length;!o[--t];)o.pop()}return e}function Gt(e,t,r){var i=e.e,o=e.c.join(""),c=o.length;if(t)o=o.charAt(0)+(c>1?"."+o.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)o="0"+o;o="0."+o}else if(i>0)if(++i>c)for(i-=c;i--;)o+="0";else i<c&&(o=o.slice(0,i)+"."+o.slice(i));else c>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&r?"-"+o:o}W.abs=function(){var e=new this.constructor(this);return e.s=1,e};W.cmp=function(o){var t,r=this.constructor,i=new r(this),o=new r(o),c=i.c,m=o.c,p=i.s,h=o.s,f=i.e,x=o.e;if(!c[0]||!m[0])return c[0]?p:m[0]?-h:0;if(p!=h)return p;if(t=p<0,f!=x)return f>x^t?1:-1;for(h=Math.max(c.length,m.length),p=0;p<h;p++)if(f=p<c.length?c[p]:0,x=p<m.length?m[p]:0,f!=x)return f>x^t?1:-1;return 0};W.div=function(i){var t=this.constructor,r=new t(this),i=new t(i),o=r.c,c=i.c,m=r.s==i.s?1:-1,p=t.DP;if(p!==~~p||p<0||p>dt)throw Error(Bn);if(!c[0])throw Error(il);if(!o[0])return i.s=m,i.c=[i.e=0],i;var h,f,x,y,S,A=c.slice(),I=h=c.length,M=o.length,_=o.slice(0,h),G=_.length,Q=i,se=Q.c=[],Y=0,me=p+(Q.e=r.e-i.e)+1;for(Q.s=m,m=me<0?0:me,A.unshift(0);G++<h;)_.push(0);do{for(x=0;x<10;x++){if(h!=(G=_.length))y=h>G?1:-1;else for(S=-1,y=0;++S<h;)if(c[S]!=_[S]){y=c[S]>_[S]?1:-1;break}if(y<0){for(f=G==h?c:A;G;){if(_[--G]<f[G]){for(S=G;S&&!_[--S];)_[S]=9;--_[S],_[G]+=10}_[G]-=f[G]}for(;!_[0];)_.shift()}else break}se[Y++]=y?x:++x,_[0]&&y?_[G]=o[I]||0:_=[o[I]]}while((I++<M||_[0]!==Ne)&&m--);return!se[0]&&Y!=1&&(se.shift(),Q.e--,me--),Y>me&&rt(Q,me,t.RM,_[0]!==Ne),Q};W.eq=function(e){return this.cmp(e)===0};W.gt=function(e){return this.cmp(e)>0};W.gte=function(e){return this.cmp(e)>-1};W.lt=function(e){return this.cmp(e)<0};W.lte=function(e){return this.cmp(e)<1};W.minus=W.sub=function(p){var t,r,i,o,c=this.constructor,m=new c(this),p=new c(p),h=m.s,f=p.s;if(h!=f)return p.s=-f,m.plus(p);var x=m.c.slice(),y=m.e,S=p.c,A=p.e;if(!x[0]||!S[0])return S[0]?p.s=-f:x[0]?p=new c(m):p.s=1,p;if(h=y-A){for((o=h<0)?(h=-h,i=x):(A=y,i=S),i.reverse(),f=h;f--;)i.push(0);i.reverse()}else for(r=((o=x.length<S.length)?x:S).length,h=f=0;f<r;f++)if(x[f]!=S[f]){o=x[f]<S[f];break}if(o&&(i=x,x=S,S=i,p.s=-p.s),(f=(r=S.length)-(t=x.length))>0)for(;f--;)x[t++]=0;for(f=t;r>h;){if(x[--r]<S[r]){for(t=r;t&&!x[--t];)x[t]=9;--x[t],x[r]+=10}x[r]-=S[r]}for(;x[--f]===0;)x.pop();for(;x[0]===0;)x.shift(),--A;return x[0]||(p.s=1,x=[A=0]),p.c=x,p.e=A,p};W.mod=function(o){var t,r=this.constructor,i=new r(this),o=new r(o),c=i.s,m=o.s;if(!o.c[0])throw Error(il);return i.s=o.s=1,t=o.cmp(i)==1,i.s=c,o.s=m,t?new r(i):(c=r.DP,m=r.RM,r.DP=r.RM=0,i=i.div(o),r.DP=c,r.RM=m,this.minus(i.times(o)))};W.plus=W.add=function(m){var t,r,i,o=this.constructor,c=new o(this),m=new o(m);if(c.s!=m.s)return m.s=-m.s,c.minus(m);var p=c.e,h=c.c,f=m.e,x=m.c;if(!h[0]||!x[0])return x[0]||(h[0]?m=new o(c):m.s=c.s),m;if(h=h.slice(),t=p-f){for(t>0?(f=p,i=x):(t=-t,i=h),i.reverse();t--;)i.push(0);i.reverse()}for(h.length-x.length<0&&(i=x,x=h,h=i),t=x.length,r=0;t;h[t]%=10)r=(h[--t]=h[t]+x[t]+r)/10|0;for(r&&(h.unshift(r),++f),t=h.length;h[--t]===0;)h.pop();return m.c=h,m.e=f,m};W.pow=function(e){var t=this.constructor,r=new t(this),i=new t("1"),o=new t("1"),c=e<0;if(e!==~~e||e<-vr||e>vr)throw Error(Et+"exponent");for(c&&(e=-e);e&1&&(i=i.times(r)),e>>=1,!!e;)r=r.times(r);return c?o.div(i):i};W.prec=function(e,t){if(e!==~~e||e<1||e>dt)throw Error(Et+"precision");return rt(new this.constructor(this),e,t)};W.round=function(e,t){if(e===Ne)e=0;else if(e!==~~e||e<-dt||e>dt)throw Error(Bn);return rt(new this.constructor(this),e+this.e+1,t)};W.sqrt=function(){var e,t,r,i=this.constructor,o=new i(this),c=o.s,m=o.e,p=new i("0.5");if(!o.c[0])return new i(o);if(c<0)throw Error(mn+"No square root");c=Math.sqrt(o+""),c===0||c===1/0?(t=o.c.join(""),t.length+m&1||(t+="0"),c=Math.sqrt(t),m=((m+1)/2|0)-(m<0||m&1),e=new i((c==1/0?"5e":(c=c.toExponential()).slice(0,c.indexOf("e")+1))+m)):e=new i(c+""),m=e.e+(i.DP+=4);do r=e,e=p.times(r.plus(o.div(r)));while(r.c.slice(0,m).join("")!==e.c.slice(0,m).join(""));return rt(e,(i.DP-=4)+e.e+1,i.RM)};W.times=W.mul=function(o){var t,r=this.constructor,i=new r(this),o=new r(o),c=i.c,m=o.c,p=c.length,h=m.length,f=i.e,x=o.e;if(o.s=i.s==o.s?1:-1,!c[0]||!m[0])return o.c=[o.e=0],o;for(o.e=f+x,p<h&&(t=c,c=m,m=t,x=p,p=h,h=x),t=new Array(x=p+h);x--;)t[x]=0;for(f=h;f--;){for(h=0,x=p+f;x>f;)h=t[x]+m[f]*c[x-f-1]+h,t[x--]=h%10,h=h/10|0;t[x]=h}for(h?++o.e:t.shift(),f=t.length;!t[--f];)t.pop();return o.c=t,o};W.toExponential=function(e,t){var r=this,i=r.c[0];if(e!==Ne){if(e!==~~e||e<0||e>dt)throw Error(Bn);for(r=rt(new r.constructor(r),++e,t);r.c.length<e;)r.c.push(0)}return Gt(r,!0,!!i)};W.toFixed=function(e,t){var r=this,i=r.c[0];if(e!==Ne){if(e!==~~e||e<0||e>dt)throw Error(Bn);for(r=rt(new r.constructor(r),e+r.e+1,t),e=e+r.e+1;r.c.length<e;)r.c.push(0)}return Gt(r,!1,!!i)};W.toJSON=W.toString=function(){var e=this,t=e.constructor;return Gt(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};W.toNumber=function(){var e=Number(Gt(this,!0,!0));if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(mn+"Imprecise conversion");return e};W.toPrecision=function(e,t){var r=this,i=r.constructor,o=r.c[0];if(e!==Ne){if(e!==~~e||e<1||e>dt)throw Error(Et+"precision");for(r=rt(new i(r),e,t);r.c.length<e;)r.c.push(0)}return Gt(r,e<=r.e||r.e<=i.NE||r.e>=i.PE,!!o)};W.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(mn+"valueOf disallowed");return Gt(e,e.e<=t.NE||e.e>=t.PE,!0)};var tt=ol();new tt(0);new tt(1);new tt(-1);new tt("79228162514264337593543950335");new tt("-79228162514264337593543950335");var wr;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(wr||(wr={}));function Qi(e){return e===-2147483648?e:-e}var ve=null;try{ve=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function He(e,t,r){this.low=e|0,this.high=t|0,this.unsigned=!!r}He.prototype.GetHashCode=function(){let e=this.unsigned?1:0;return e=(e<<5)+e^this.high,e=(e<<5)+e^this.low,e};He.prototype.Equals=function(e){return be(this,e)};He.prototype.CompareTo=function(e){return un(this,e)};He.prototype.toString=function(e){return on(this,e)};He.prototype.toJSON=function(){return on(this)};He.prototype[nt]=function(){const e=this;return{multiply:t=>ge(e,t),toPrecision:t=>String(e)+0 .toPrecision(t).substr(1),toExponential:t=>String(e)+0 .toExponential(t).substr(1),toFixed:t=>String(e)+0 .toFixed(t).substr(1),toHex:()=>on(e.unsigned?e:xo(po(e),!0),16)}};Object.defineProperty(He.prototype,"__isLong__",{value:!0});function Ve(e){return(e&&e.__isLong__)===!0}var kr={},Ir={};function $t(e,t){var r,i,o;return t?(e>>>=0,(o=0<=e&&e<256)&&(i=Ir[e],i)?i:(r=j(e,(e|0)<0?-1:0,!0),o&&(Ir[e]=r),r)):(e|=0,(o=-128<=e&&e<128)&&(i=kr[e],i)?i:(r=j(e,e<0?-1:0,!1),o&&(kr[e]=r),r))}function Fe(e,t){if(isNaN(e))return t?Je:_e;if(t){if(e<0)return Je;if(e>=cl)return ro}else{if(e<=-Fr)return we;if(e+1>=Fr)return no}return e<0?ee(Fe(-e,t)):j(e%Tt|0,e/Tt|0,t)}function j(e,t,r){return new He(e,t,r)}var An=Math.pow;function al(e,t,r){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return _e;if(typeof t=="number"?(r=t,t=!1):t=!!t,r=r||10,r<2||36<r)throw RangeError("radix");var i=e.indexOf("-");if(i>0)throw Error("interior hyphen");if(i===0)return ee(al(e.substring(1),t,r));for(var o=Fe(An(r,8)),c=_e,m=0;m<e.length;m+=8){var p=Math.min(8,e.length-m),h=parseInt(e.substring(m,m+p),r);if(p<8){var f=Fe(An(r,p));c=pt(ge(c,f),Fe(h))}else c=ge(c,o),c=pt(c,Fe(h))}return c.unsigned=t,c}function lt(e,t){return typeof e=="number"?Fe(e,t):typeof e=="string"?al(e,t):j(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}var Tr=1<<16,eo=1<<24,Tt=Tr*Tr,cl=Tt*Tt,Fr=cl/2,_r=$t(eo),_e=$t(0),Je=$t(0,!0),Kt=$t(1),to=$t(1,!0),Br=$t(-1),no=j(-1,2147483647,!1),ro=j(-1,-1,!0),we=j(0,-2147483648,!1);function Ft(e){return e.unsigned?e.low>>>0:e.low}function vn(e){return e.unsigned?(e.high>>>0)*Tt+(e.low>>>0):e.high*Tt+(e.low>>>0)}function on(e,t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(at(e))return"0";if(Ae(e))if(be(e,we)){var r=Fe(t),i=We(e,r),o=_t(ge(i,r),e);return on(i,t)+Ft(o).toString(t)}else return"-"+on(ee(e),t);for(var c=Fe(An(t,6),e.unsigned),m=e,p="";;){var h=We(m,c),f=Ft(_t(m,ge(h,c)))>>>0,x=f.toString(t);if(m=h,at(m))return x+p;for(;x.length<6;)x="0"+x;p=""+x+p}}function at(e){return e.high===0&&e.low===0}function Ae(e){return!e.unsigned&&e.high<0}function Dr(e){return(e.low&1)===1}function be(e,t){return Ve(t)||(t=lt(t)),e.unsigned!==t.unsigned&&e.high>>>31===1&&t.high>>>31===1?!1:e.high===t.high&&e.low===t.low}function Vr(e,t){return un(e,t)<0}function Ln(e,t){return un(e,t)>0}function lo(e,t){return un(e,t)>=0}function un(e,t){if(Ve(t)||(t=lt(t)),be(e,t))return 0;var r=Ae(e),i=Ae(t);return r&&!i?-1:!r&&i?1:e.unsigned?t.high>>>0>e.high>>>0||t.high===e.high&&t.low>>>0>e.low>>>0?-1:1:Ae(_t(e,t))?-1:1}function ee(e){return!e.unsigned&&be(e,we)?we:pt(oo(e),Kt)}function pt(e,t){Ve(t)||(t=lt(t));var r=e.high>>>16,i=e.high&65535,o=e.low>>>16,c=e.low&65535,m=t.high>>>16,p=t.high&65535,h=t.low>>>16,f=t.low&65535,x=0,y=0,S=0,A=0;return A+=c+f,S+=A>>>16,A&=65535,S+=o+h,y+=S>>>16,S&=65535,y+=i+p,x+=y>>>16,y&=65535,x+=r+m,x&=65535,j(S<<16|A,x<<16|y,e.unsigned)}function _t(e,t){return Ve(t)||(t=lt(t)),pt(e,ee(t))}function ge(e,t){if(at(e))return e.unsigned?Je:_e;if(Ve(t)||(t=lt(t)),ve){var r=ve.mul(e.low,e.high,t.low,t.high);return j(r,ve.get_high(),e.unsigned)}if(at(t))return e.unsigned?Je:_e;if(be(e,we))return Dr(t)?we:_e;if(be(t,we))return Dr(e)?we:_e;if(Ae(e))return Ae(t)?ge(ee(e),ee(t)):ee(ge(ee(e),t));if(Ae(t))return ee(ge(e,ee(t)));if(Vr(e,_r)&&Vr(t,_r))return Fe(vn(e)*vn(t),e.unsigned);var i=e.high>>>16,o=e.high&65535,c=e.low>>>16,m=e.low&65535,p=t.high>>>16,h=t.high&65535,f=t.low>>>16,x=t.low&65535,y=0,S=0,A=0,I=0;return I+=m*x,A+=I>>>16,I&=65535,A+=c*x,S+=A>>>16,A&=65535,A+=m*f,S+=A>>>16,A&=65535,S+=o*x,y+=S>>>16,S&=65535,S+=c*f,y+=S>>>16,S&=65535,S+=m*h,y+=S>>>16,S&=65535,y+=i*x+o*f+c*h+m*p,y&=65535,j(A<<16|I,y<<16|S,e.unsigned)}function We(e,t){if(Ve(t)||(t=lt(t)),at(t))throw Error("division by zero");if(ve){if(!e.unsigned&&e.high===-2147483648&&t.low===-1&&t.high===-1)return e;var r=(e.unsigned?ve.div_u:ve.div_s)(e.low,e.high,t.low,t.high);return j(r,ve.get_high(),e.unsigned)}if(at(e))return e.unsigned?Je:_e;var i,o,c;if(e.unsigned){if(t.unsigned||(t=uo(t)),Ln(t,e))return Je;if(Ln(t,mo(e,1)))return to;c=Je}else{if(be(e,we)){if(be(t,Kt)||be(t,Br))return we;if(be(t,we))return Kt;var m=so(e,1);return i=co(We(m,t),1),be(i,_e)?Ae(t)?Kt:Br:(o=_t(e,ge(t,i)),c=pt(i,We(o,t)),c)}else if(be(t,we))return e.unsigned?Je:_e;if(Ae(e))return Ae(t)?We(ee(e),ee(t)):ee(We(ee(e),t));if(Ae(t))return ee(We(e,ee(t)));c=_e}for(o=e;lo(o,t);){i=Math.max(1,Math.floor(vn(o)/vn(t)));for(var p=Math.ceil(Math.log(i)/Math.LN2),h=p<=48?1:An(2,p-48),f=Fe(i),x=ge(f,t);Ae(x)||Ln(x,o);)i-=h,f=Fe(i,e.unsigned),x=ge(f,t);at(f)&&(f=Kt),c=pt(c,f),o=_t(o,x)}return c}function io(e,t){if(Ve(t)||(t=lt(t)),ve){var r=(e.unsigned?ve.rem_u:ve.rem_s)(e.low,e.high,t.low,t.high);return j(r,ve.get_high(),e.unsigned)}return _t(e,ge(We(e,t),t))}function oo(e){return j(~e.low,~e.high,e.unsigned)}function ao(e,t){return Ve(t)||(t=lt(t)),j(e.low&t.low,e.high&t.high,e.unsigned)}function co(e,t){return Ve(t)&&(t=Ft(t)),(t&=63)===0?e:t<32?j(e.low<<t,e.high<<t|e.low>>>32-t,e.unsigned):j(0,e.low<<t-32,e.unsigned)}function so(e,t){return Ve(t)&&(t=Ft(t)),(t&=63)===0?e:t<32?j(e.low>>>t|e.high<<32-t,e.high>>t,e.unsigned):j(e.high>>t-32,e.high>=0?0:-1,e.unsigned)}function mo(e,t){if(Ve(t)&&(t=Ft(t)),t&=63,t===0)return e;var r=e.high;if(t<32){var i=e.low;return j(i>>>t|r<<32-t,r>>>t,e.unsigned)}else return j(t===32?r:r>>>t-32,0,e.unsigned)}function uo(e){return e.unsigned?e:j(e.low,e.high,!0)}function po(e,t){return t?ho(e):fo(e)}function ho(e){var t=e.high,r=e.low;return[r&255,r>>>8&255,r>>>16&255,r>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]}function fo(e){var t=e.high,r=e.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,r>>>24,r>>>16&255,r>>>8&255,r&255]}function xo(e,t,r){return r?go(e,t):Eo(e,t)}function go(e,t){return new He(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)}function Eo(e,t){return new He(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}const ke=pt,Ie=ge,qe=We,So=io,yo=ee,Ht=ao,Dn=un,te=j,Le=Ft;function X(e,t,r){let i=e,o=0;switch(r){case 0:i=e<<24>>24,o=i;break;case 4:i=e<<24>>>24;break;case 1:i=e<<16>>16,o=i;break;case 5:i=e<<16>>>16;break;case 2:i=e>>0,o=i;break;case 6:i=e>>>0;break}return j(i,o>>31,t)}function ur(e){const t=e<0;e=Math.abs(e);const r=~~(e/36e5),i=e%36e5/6e4;return(t?"-":"+")+Oe(r,2)+":"+Oe(i,2)}function wn(e,t){const r=e.toISOString();return t==="first"?r.substring(0,r.indexOf("T")):r.substring(r.indexOf("T")+1,r.length-1)}function bo(e,t){if(t)return e.toISOString();{const r=e.kind==null?!0:e.kind===2;return Oe(e.getFullYear(),4)+"-"+Oe(e.getMonth()+1,2)+"-"+Oe(e.getDate(),2)+"T"+Oe(e.getHours(),2)+":"+Oe(e.getMinutes(),2)+":"+Oe(e.getSeconds(),2)+"."+Oe(e.getMilliseconds(),3)+(r?ur(e.getTimezoneOffset()*-6e4):"")}}function Co(e,t){const r=e.toISOString();return r.substring(0,r.length-1)+ur(t)}function sl(e,t,r){return t.replace(/(\w)\1*/g,i=>{let o=Number.NaN;switch(i.substring(0,1)){case"y":const c=r?e.getUTCFullYear():e.getFullYear();o=i.length<4?c%100:c;break;case"M":o=(r?e.getUTCMonth():e.getMonth())+1;break;case"d":o=r?e.getUTCDate():e.getDate();break;case"H":o=r?e.getUTCHours():e.getHours();break;case"h":const m=r?e.getUTCHours():e.getHours();o=m>12?m%12:m;break;case"m":o=r?e.getUTCMinutes():e.getMinutes();break;case"s":o=r?e.getUTCSeconds():e.getSeconds();break;case"f":o=r?e.getUTCMilliseconds():e.getMilliseconds();break}return Number.isNaN(o)?i:o<10&&i.length>1?"0"+o:""+o})}function Ao(e,t){var r,i,o;const c=new Date(e.getTime()+((r=e.offset)!==null&&r!==void 0?r:0));if(typeof t!="string")return c.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+ur((i=e.offset)!==null&&i!==void 0?i:0);if(t.length===1)switch(t){case"D":case"d":return wn(c,"first");case"T":case"t":return wn(c,"second");case"O":case"o":return Co(c,(o=e.offset)!==null&&o!==void 0?o:0);default:throw new Error("Unrecognized Date print format")}else return sl(c,t,!0)}function vo(e,t){const r=e.kind===1;if(typeof t!="string")return r?e.toUTCString():e.toLocaleString();if(t.length===1)switch(t){case"D":case"d":return r?wn(e,"first"):e.toLocaleDateString();case"T":case"t":return r?wn(e,"second"):e.toLocaleTimeString();case"O":case"o":return bo(e,r);default:throw new Error("Unrecognized Date print format")}else return sl(e,t,r)}function wo(e,t,r){return e.offset!=null?Ao(e,t):vo(e,t)}function ml(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function Vn(e,t,r=0){return e.lastIndex=r,e.test(t)}const Ut=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g,jt=/(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;function ko(e,t){return $i(e,t)<0}function Nr(e){return{input:e,cont:Fo(e)}}function Io(e,t){let r=0,i=0,o="";jt.lastIndex=0;let c=jt.exec(e);for(;c;){const m=c.index+(c[1]||"").length;o+=e.substring(i,m).replace(/%%/g,"%");const[,,p,h,f,x]=c;o+=ul(t[r++],p,h,f,x),i=jt.lastIndex,jt.lastIndex-=1,c=jt.exec(e)}return o+=e.substring(i).replace(/%%/g,"%"),o}function To(e,t){return typeof t=="string"?e(t):t.cont(e)}function Kn(e){return To(t=>t,e)}function ul(e,t,r,i,o){let c="";if(t=t||"",o=o||"",Gi(e))switch(o.toLowerCase()!=="x"&&(ko(e,0)?(e=Hi(e,-1),c="-"):t.indexOf(" ")>=0?c=" ":t.indexOf("+")>=0&&(c="+")),i=i==null?null:parseInt(i,10),o){case"f":case"F":i=i!=null?i:6,e=Oi(e,i);break;case"g":case"G":e=i!=null?br(e,i):br(e);break;case"e":case"E":e=i!=null?Cr(e,i):Cr(e);break;case"x":e=Ar(e);break;case"X":e=Ar(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=wo(e):e=Pe(e);if(r=typeof r=="number"?r:parseInt(r,10),isNaN(r))e=c+e;else{const m=t.indexOf("0")>=0,p=t.indexOf("-")>=0,h=p||!m?" ":"0";h==="0"?(e=Mr(e,r-c.length,h,p),e=c+e):e=Mr(c+e,r,h,p)}return e}function dl(e,t,r,i="",o=-1){return(...c)=>{let m=i;const p=t.slice(),h=r.slice();for(const f of c){const[,,x,y,S,A]=h[0];let I=y;if(o>=0)I=o,o=-1;else if(I==="*"){if(f<0)throw new Error("Non-negative number required");o=f;continue}m+=p[0],m+=ul(f,x,I,S,A),p.splice(0,1),h.splice(0,1)}return h.length===0?(m+=p[0],e(m)):dl(e,p,h,m,o)}}function Fo(e){return t=>{Ut.lastIndex=0;const r=[],i=[];let o=0,c=Ut.exec(e);for(;c;){const m=c.index+(c[1]||"").length;r.push(e.substring(o,m).replace(/%%/g,"%")),i.push(c),o=Ut.lastIndex,Ut.lastIndex-=1,c=Ut.exec(e)}return r.length===0?t(e.replace(/%%/g,"%")):(r.push(e.substring(o).replace(/%%/g,"%")),dl(t,r,i))}}function _o(e,t){const r=e.lastIndexOf(t);return r>=0&&r===e.length-t.length}function Bo(e){return typeof e!="string"||/^\s*$/.test(e)}function Nn(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function Mr(e,t,r,i){r=r||" ",t=t-e.length;for(let o=0;o<t;o++)e=i?e+r:r+e;return e}function Do(e,t,r,i){if(r=typeof r=="number"?r:void 0,i=typeof i=="number"?i:0,r&&r<0)throw new Error("Count cannot be less than zero");if(r===0)return[];const o=(i&1)===1,c=(i&2)===2;t=t||[],t=t.filter(x=>x).map(ml),t=t.length>0?t:["\\s"];const m=[],p=new RegExp(t.join("|"),"g");let h=!0,f=0;do{const x=p.exec(e);if(x===null){const y=c?e.substring(f).trim():e.substring(f);(!o||y.length>0)&&m.push(y),h=!1}else{const y=c?e.substring(f,x.index).trim():e.substring(f,x.index);(!o||y.length>0)&&(r!=null&&m.length+1===r?(m.push(c?e.substring(f).trim():e.substring(f)),h=!1):m.push(y)),f=p.lastIndex}}while(h);return m}function Vo(e,...t){return t.length===0?e.trimEnd():e.replace(new RegExp("["+ml(t.join(""))+"]+$"),"")}function pl(e,t,r){if(t+(r||0)>e.length)throw new Error("Invalid startIndex and/or length");return r!=null?e.substr(t,r):e.substr(t)}const hl="Collection was empty.";class Bt{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return Lt(this.value)}Equals(t){return t==null?!1:sn(this.value,t instanceof Bt?t.value:t)}CompareTo(t){return t==null?1:ut(this.value,t instanceof Bt?t.value:t)}}function U(e){return e==null||e instanceof Bt?new Bt(e):e}function Me(e){if(e==null)throw new Error("Option has no value");return e instanceof Bt?e.value:e}function No(e){return e==null?[]:[Me(e)]}function an(e,t){return e!=null?Me(e):t}function Mo(e,t){return t!=null?U(e(Me(t))):void 0}function zo(e,t){return t!=null?e(Me(t)):void 0}function fl(e,t){return typeof e=="function"?new e(t):new Array(t)}function xl(e,t,r,i){const o=t|0;return e.fill(i,o,o+r)}function Ro(e,t){const r=fl(t,1);return r[0]=e,r}function Ot(e,t,r){if(e<0)throw new Error("The input must be non-negative\\nParameter name: count");const i=fl(r,e);for(let o=0;o<=e-1;o++)i[o]=t(o);return i}function Po(e){return e.slice()}function zr(e,t,r){if(t==null)return r==null;if(r==null)return!1;{let i=0,o=!0;const c=t.length|0,m=r.length|0;if(c>m)return!1;if(c<m)return!1;for(;i<c&&o;)o=e(t[i],r[i]),i=i+1|0;return o}}class Te extends gt{constructor(t,r){super();this.head=t,this.tail=r}toString(){return"["+Nn("; ",this)+"]"}Equals(t){const r=this;return r===t?!0:((o,c)=>{e:for(;;){const m=o,p=c,h=[m.tail,p.tail];if(h[0]!=null)if(h[1]!=null){const f=h[0],x=h[1];if(sn(m.head,p.head)){o=f,c=x;continue e}else return!1}else return!1;else return h[1]==null}})(r,t)}GetHashCode(){return((i,o,c)=>{e:for(;;){const m=i,p=o,h=c,f=h.tail;if(f!=null){const x=f;if(m>18)return p|0;i=m+1,o=(p<<1)+Lt(h.head)+631*m,c=x;continue e}else return p|0}})(0,0,this)|0}toJSON(t){const r=this;return Array.from(r)}CompareTo(t){return((o,c)=>{e:for(;;){const m=o,p=c,h=[m.tail,p.tail];if(h[0]!=null)if(h[1]!=null){const f=h[0],x=h[1],y=ut(m.head,p.head)|0;if(y===0){o=f,c=x;continue e}else return y|0}else return 1;else return h[1]!=null?-1:0}})(this,t)|0}GetEnumerator(){return Go(this)}[Symbol.iterator](){return Qr(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return et(this)}}class Lo{constructor(t){this.xs=t,this.it=this.xs,this.current=null}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current}["System.Collections.IEnumerator.get_Current"](){return this.current}["System.Collections.IEnumerator.MoveNext"](){const t=this,r=t.it.tail;if(r!=null){const i=r;return t.current=t.it.head,t.it=i,!0}else return!1}["System.Collections.IEnumerator.Reset"](){const t=this;t.it=t.xs,t.current=null}Dispose(){}}function Go(e){return new Lo(e)}function Se(){return new Te(null,void 0)}function dr(e,t){return new Te(e,t)}function Dt(e){return e.tail==null}function gl(e){return((r,i)=>{e:for(;;){const o=r,m=i.tail;if(m!=null){r=o+1,i=m;continue e}else return o|0}})(0,e)|0}function Vt(e){if(e.tail!=null)return e.head;throw new Error(hl+"\\nParameter name: list")}function De(e){const t=e.tail;if(t!=null)return t;throw new Error(hl+"\\nParameter name: list")}function d(){return Se()}function Gn(e,t){return dr(e,t)}function u(e){return dr(e,Se())}function k(e){return Dt(e)}function El(e){return gl(e)}function T(e){return Vt(e)}function F(e){return De(e)}function Ct(e){const t=gl(e)|0,r=xl(new Array(t),0,t,null);return((o,c)=>{e:for(;;){const m=o,p=c;if(!Dt(p)){r[m]=Vt(p),o=m+1,c=De(p);continue e}break}})(0,e),r}function pr(e,t,r){let i=t,o=r;for(;!Dt(o);)i=e(i,Vt(o)),o=De(o);return i}function $o(e,t,r){return((o,c,m)=>{e:for(;;){const p=o,h=c,f=m;if(Dt(f))return h;o=p+1,c=e(p,h,Vt(f)),m=De(f);continue e}})(0,t,r)}function Sl(e,t){pr((r,i)=>{e(i)},void 0,t)}function Ho(e,t){let r=t;for(let i=e.length-1;i>=0;i--)r=dr(e[i],r);return r}function a(e){return Ho(e,Se())}function pe(e){let t,r;if(Qe(e))return a(e);if(e instanceof Te)return e;{const i=Se();let o=i;const c=et(e);try{for(;c["System.Collections.IEnumerator.MoveNext"]();){const h=c["System.Collections.Generic.IEnumerator`1.get_Current"]();o=(t=o,r=new Te(h,void 0),t.tail=r,r)}}finally{Be(c)}const m=o,p=Se();return m.tail=p,De(i)}}function Oo(e){const t=Se();let r=t;const i=m=>{r=pr((p,h)=>{const f=new Te(h,void 0);return p.tail=f,f},r,m)};if(Qe(e))e.forEach(i);else if(e instanceof Te)Sl(i,e);else{const m=et(e);try{for(;m["System.Collections.IEnumerator.MoveNext"]();)i(m["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{Be(m)}}const o=r,c=Se();return o.tail=c,De(t)}function Wo(e,t){let r,i;const o=Se();let c=o,m=t;for(;!Dt(m);){let f=e(Vt(m));for(;!Dt(f);)c=(r=c,i=new Te(Vt(f),void 0),r.tail=i,i),f=De(f);m=De(m)}const p=c,h=Se();return p.tail=h,De(o)}function qo(e,t){const r=Se(),i=$o((c,m,p)=>{let h;return h=new Te(e(c,p),void 0),m.tail=h,h},r,t),o=Se();return i.tail=o,De(r)}function Uo(e,t){const r=Se(),i=pr((c,m)=>{let p;return p=new Te(e(m),void 0),c.tail=p,p},r,t),o=Se();return i.tail=o,De(r)}function jo(e){return qo((t,r)=>[t,r],e)}function Ko(e,t){console.error(e,t)}function Rr(e,t,r){Sl(i=>{try{i(t)}catch(o){e(o)}},r)}function yl(){return d()}function Jo(e){return Oo(e)}function Yo(e){throw new Error(e)}const Xo="Enumeration already finished.",Zo="Enumeration has not started. Call MoveNext.",bl="The input sequence has an insufficient number of elements.",Qo="Reset is not supported on this enumerator.";function ea(){throw new Error(Qo)}function hr(){throw new Error(Zo)}function Jn(){throw new Error(Xo)}class ta{constructor(t){this.f=t}toString(){const t=this,r=4;let i=0,o="seq [";const c=et(t);try{for(;i<r&&c["System.Collections.IEnumerator.MoveNext"]();)i>0&&(o=o+"; "),o=o+Pe(c["System.Collections.Generic.IEnumerator`1.get_Current"]()),i=i+1|0;return i===r&&(o=o+"; ..."),o+"]"}finally{Be(c)}}GetEnumerator(){return this.f()}[Symbol.iterator](){return Qr(this.GetEnumerator())}["System.Collections.IEnumerable.GetEnumerator"](){return this.f()}}function na(e){return new ta(e)}class ra{constructor(t,r,i){this.current=t,this.next=r,this.dispose=i}["System.Collections.Generic.IEnumerator`1.get_Current"](){return this.current()}["System.Collections.IEnumerator.get_Current"](){return this.current()}["System.Collections.IEnumerator.MoveNext"](){return this.next()}["System.Collections.IEnumerator.Reset"](){ea()}Dispose(){this.dispose()}}function Mn(e,t,r){return new ra(e,t,r)}function la(e){let t,r,i=!1,o=!1,c;const m=()=>{if(o=!0,r!=null){const p=r;try{Be(p)}finally{r=void 0}}if(t!=null){const p=t;try{Be(p)}finally{t=void 0}}};return Mn(()=>(i?o&&Jn():hr(),c!=null?Me(c):Jn()),()=>{let p;if(i||(i=!0),o)return!1;{let h;for(;h==null;){const f=[t,r];if(f[0]!=null)if(f[1]!=null){const x=f[1];if(x["System.Collections.IEnumerator.MoveNext"]())c=U(x["System.Collections.Generic.IEnumerator`1.get_Current"]()),h=!0;else try{Be(x)}finally{r=void 0}}else{const x=f[0];x["System.Collections.IEnumerator.MoveNext"]()?r=(p=x["System.Collections.Generic.IEnumerator`1.get_Current"](),et(p)):(m(),h=!1)}else t=et(e)}return Me(h)}},()=>{o||m()})}function ia(e,t){return Mn(()=>t["System.Collections.Generic.IEnumerator`1.get_Current"](),()=>t["System.Collections.IEnumerator.MoveNext"](),()=>{try{Be(t)}finally{e()}})}function Cl(e,t,r){let i=!1,o,c=U(e());const m=()=>{if(c!=null){const h=Me(c);try{r(h)}finally{c=void 0}}},p=()=>{try{m()}finally{o=void 0}};return Mn(()=>(i||hr(),o!=null?Me(o):Jn()),()=>{if(i||(i=!0),c!=null){const h=Me(c);let f;try{f=t(h)}catch(x){throw p(),x}return f!=null?(o=f,!0):(p(),!1)}else return!1},m)}function oa(e,t){let r,i=t;return Mn(()=>{if(r!=null){const o=r[0];return r[1],o}else return hr()},()=>(r=e(i),r!=null?(r[0],i=r[1],!0):!1),()=>{})}function aa(e,t){t==null&&Yo(e)}function Wt(e){return na(e)}function zn(e){return aa("source",e),et(e)}function b(e){return Wt(()=>et(e()))}function Al(e){return Wt(()=>la(e))}function ca(e,t){return Wt(()=>oa(e,t))}function Rn(){return b(()=>new Array(0))}function C(e){return b(()=>Ro(e))}function w(e){return Qe(e)?a(e):e instanceof Te?e:pe(e)}function sa(e,t,r){return Wt(()=>Cl(e,t,r))}function ma(e,t,r){return Wt(()=>{let i=-1;return Cl(e,o=>(i=i+1|0,t(i,o)),r)})}function L(e,t){return Al([e,t])}function ua(e,t,r){const i=zn(r);try{let o=t;for(;i["System.Collections.IEnumerator.MoveNext"]();)o=e(o,i["System.Collections.Generic.IEnumerator`1.get_Current"]());return o}finally{Be(i)}}function da(e,t){ua((r,i)=>{e(i)},void 0,t)}function dn(e,t){return sa(()=>zn(t),r=>r["System.Collections.IEnumerator.MoveNext"]()?U(e(r["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,r=>{Be(r)})}function pa(e,t){return Wt(()=>{const r=zn(t);try{for(let i=1;i<=e;i++)if(!r["System.Collections.IEnumerator.MoveNext"]())throw new Error(bl+"\\nParameter name: source");return ia(()=>{},r)}catch(i){throw Be(r),i}})}function ha(e,t){return ma(()=>zn(t),(r,i)=>{if(r<e){if(i["System.Collections.IEnumerator.MoveNext"]())return U(i["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(bl+"\\nParameter name: source")}else return},r=>{Be(r)})}function vl(e,t){return b(()=>Al(dn(e,t)))}class wl extends gt{constructor(t,r){super();this.bound=t|0,this.digits=r}}function kl(e,t){e:for(;;){const r=e,i=t;if(i===0)return 1;if(i%2===0){e=r*r,t=~~(i/2);continue e}else return r*kl(r*r,~~(i/2))|0}}te(2013265921,0,!1);te(2013265921,0,!0);const fa=29;Ot(fa-1,e=>kl(2,e),Int32Array);function Yn(e){return e.bound}function Jt(e,t){return e.digits[t]}function Xn(e,t){return X(Jt(e,t),!1,2)}function kn(e,t,r){e.digits[t]=r|0}function fr(e,t){e:for(;;){const r=e,i=t;if(i===0)return te(1,0,!1);if(i%2===0){e=Ie(r,r),t=~~(i/2);continue e}else return Ie(r,fr(Ie(r,r),~~(i/2)))}}function Nt(e,t){e:for(;;){const r=e,i=t;if(i===0)return 1;if(i%2===0){e=r*r,t=~~(i/2);continue e}else return r*Nt(r*r,~~(i/2))|0}}function xa(e){let t=0;for(let r=0;r<=e.bound-1;r++)t=e.digits[r]+(t<<3)|0;return t|0}const Mt=24,ct=16777216,Ge=te(16777216,0,!1),qt=te(16777215,0,!1);te(16777215,0,!0);function ht(e){return new wl(e,new Int32Array(e))}function ga(e){return new wl(e.bound,Po(e.digits))}function $e(e){const r=((i,o)=>{e:for(;;){const c=i,m=o;if(m===-1?!0:c[m]!==0)return m+1|0;i=c,o=m-1;continue e}})(e.digits,e.bound-1)|0;return e.bound=r|0,e}const Pr=2,Lr=3;function pn(e){const t=(e<0?0:e)|0;if(t<ct){const r=ht(1);return r.digits[0]=t|0,$e(r)}else{const r=ht(Pr);for(let i=0;i<=Pr-1;i++)r.digits[i]=~~(t/Nt(ct,i))%ct|0;return $e(r)}}function Ea(e){const t=Dn(e,te(0,0,!1))<0?te(0,0,!1):e,r=ht(Lr);for(let i=0;i<=Lr-1;i++)r.digits[i]=~~Le(So(qe(t,fr(Ge,i)),Ge))|0;return $e(r)}function Sa(e){if(e.bound===1)return e.digits[0]|0;{let t=0;for(let r=e.bound-1;r>=0;r--)t=e.digits[r]+ct*t|0;return t|0}}const ya=pn(1),ba=pn(0);function de(e){return e.bound-1}function ae(e){return e.bound===0}function Gr(e,t){return e.bound===t.bound?((i,o,c)=>{e:for(;;){const m=i,p=o,h=c;if(h===-1)return!0;if(m[h]===p[h]){i=m,o=p,c=h-1;continue e}else return!1}})(e.digits,t.digits,e.bound-1):!1}function Ca(e,t,r,i){return e.bound+t<r.bound+i?-1:e.bound+t>r.bound+t?1:((c,m,p)=>{e:for(;;){const h=c,f=m,x=p;if(x===-1)return 0;{const y=(x<t?0:h[x-t])|0,S=(x<i?0:f[x-i])|0;if(y===S){c=h,m=f,p=x-1;continue e}else return y<S?-1:1}}})(e.digits,r.digits,e.bound+t-1)|0}function Aa(e,t){return e.bound<t.bound?-1:e.bound>t.bound?1:((i,o,c)=>{e:for(;;){const m=i,p=o,h=c;if(h===-1)return 0;if(m[h]===p[h]){i=m,o=p,c=h-1;continue e}else return m[h]<p[h]?-1:1}})(e.digits,t.digits,e.bound-1)|0}function $r(e,t){return Aa(e,t)===-1}function va(e,t){const r=ht(2),i=Ie(X(e,!1,2),X(t,!1,2));return kn(r,0,~~Le(Ht(i,qt))),kn(r,1,~~Le(qe(i,Ge))),$e(r)}function Il(e,t,r){e:for(;;){const i=e,o=t,c=r;if(Dn(o,te(0,0,!1))>0){const m=ke(Xn(i,c),o);kn(i,c,~~Le(Ht(m,qt))),e=i,t=qe(m,Ge),r=c+1;continue e}break}}function Hr(e,t){const r=Yn(e)|0,i=ht(r+1),o=X(t,!1,2);let c=te(0,0,!1);for(let m=0;m<=r-1;m++){const p=ke(ke(c,Xn(i,m)),Ie(Xn(e,m),o));kn(i,m,~~Le(Ht(p,qt))),c=qe(p,Ge)}return Il(i,c,r),$e(i)}function wa(e,t){const r=ht(e.bound+t.bound),i=r.digits;for(let o=0;o<=e.bound-1;o++){const c=X(e.digits[o],!1,2);let m=te(0,0,!1),p=o;for(let h=0;h<=t.bound-1;h++){const f=X(t.digits[h],!1,2),x=ke(ke(X(i[p],!1,2),m),Ie(c,f));i[p]=~~Le(Ht(x,qt))|0,m=qe(x,Ge),p=p+1|0}Il(r,m,p)}return $e(r)}function ka(e,t){const r=Yn(e)===1,i=Yn(t)===1;return r&&i?va(Jt(e,0),Jt(t,0)):r?Hr(t,Jt(e,0)):i?Hr(e,Jt(t,0)):wa(e,t)}class Ia extends gt{constructor(t,r,i,o,c,m,p){super();this.bigL=t|0,this.twoToBigL=r|0,this.k=i|0,this.bigK=o|0,this.bigN=c|0,this.split=m|0,this.splits=p}}function he(e,t,r,i){return new Ia(e,Nt(2,e),t,r,i,~~(Mt/e),Ot(~~(Mt/e),o=>Nt(2,e*o),Int32Array))}const Ta=[he(1,28,268435456,268435456),he(2,26,67108864,134217728),he(3,24,16777216,50331648),he(4,22,4194304,16777216),he(5,20,1048576,5242880),he(6,18,262144,1572864),he(7,16,65536,458752),he(8,14,16384,131072),he(9,12,4096,36864),he(10,10,1024,10240),he(11,8,256,2816),he(12,6,64,768),he(13,4,16,208)];Ot(Mt,e=>Nt(2,e)-1,Int32Array);Ot(Mt,e=>Nt(2,e),Int32Array);Ot(Mt,e=>fr(te(2,0,!1),e));~~(Ta[0].bigN/Mt);function Fa(e,t){return ka(e,t)}function _a(e,t,r,i){const o=[e.digits,de(e)],c=o[0],m=[r.digits,de(r)],p=m[1]|0,h=m[0],f=X(t,!1,2);let x=0,y=Ie(f,X(h[0],!1,2));for(;Dn(y,te(0,0,!1))>0?!0:x<p;){if(x>o[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let S=~~Le(Ht(y,qt)),A=qe(y,Ge);S<=c[x+i]?c[x+i]=c[x+i]-S|0:(c[x+i]=c[x+i]+(ct-S)|0,A=ke(A,te(1,0,!1))),x<p?y=ke(A,Ie(f,X(h[x+1],!1,2))):y=A,x=x+1|0}$e(e)}function Ba(e,t,r,i){const o=[e.digits,de(e)],c=o[0],m=[r.digits,de(r)],p=m[1]|0,h=m[0],f=X(t,!1,2);let x=0,y=Ie(f,X(h[0],!1,2));for(;Dn(y,te(0,0,!1))>0?!0:x<p;){if(x>o[1])throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");let S=~~Le(Ht(y,qt)),A=qe(y,Ge);S<ct-c[x+i]?c[x+i]=c[x+i]+S|0:(c[x+i]=S-(ct-c[x+i])|0,A=ke(A,te(1,0,!1))),x<p?y=ke(A,Ie(f,X(h[x+1],!1,2))):y=A,x=x+1|0}$e(e)}function Da(e,t,r){const i=[de(t),de(e)],o=i[1]|0,c=i[0]|0;if(o<c+r)return 0;{const m=[t.digits,e.digits],p=m[1],h=m[0],f=(c===0?o===r?~~(p[r]/h[0]):~~Le(qe(ke(Ie(X(p[o],!1,2),Ge),X(p[o-1],!1,2)),X(h[0],!1,2))):o===c+r?~~(p[o]/(h[c]+1)):~~Le(qe(ke(Ie(X(p[o],!1,2),Ge),X(p[o-1],!1,2)),ke(X(h[c],!1,2),te(1,0,!1)))))|0;return f===0?Ca(t,r,e,0)!==1?1:0:f|0}}function Va(e,t){if(ae(t))throw new Error;if(de(e)<de(t))return[ba,e];{const r=ga(e),i=ht(de(e)-de(t)+1+1);let o=de(e);const c=de(t)|0;let m=o-c,p=!1;for(;!p;){const h=Da(r,t,m)|0;h>0?(_a(r,h,t,m),Ba(i,h,ya,m)):(p=h===0&&m===0,p||(o===c+m?m=m-1|0:(m=m-1|0,o=o-1|0)))}return[$e(i),$e(r)]}}pn(2);function Zn(e){return pn(e)}function Na(e){return Ea(e)}function Or(e){const t=de(e)|0,r=(c,m,p)=>{e:for(;;){const h=c,f=m,x=p;if(de(x)>t)return Gn([f,x],h);c=Gn([f,x],h),m=f+1,p=Fa(x,x);continue e}},i=(c,m,p,h)=>{e:for(;;){const f=c,x=m,y=p,S=h;if(k(S)){const A=Sa(y)|0;return f&&A===0?x:Gn(el(A),x)}else{const A=F(S),I=Va(y,T(S)[1]),M=I[1],_=I[0];if(f&&ae(_)){c=f,m=x,p=M,h=A;continue e}else{c=f,m=i(!1,x,M,A),p=_,h=A;continue e}}}},o=i(!0,d(),e,r(d(),0,pn(10)));return k(o)?"0":Nn("",Ct(o))}function Ma(e){return e.bound<=1}function Wr(e){const t=e,r=0;return r<t.bound?t.digits[r]|0:0}class Ce extends gt{constructor(t,r){super();this.signInt=t|0,this.v=r}toString(){const t=this;switch(ft(t)|0){case-1:return ae(q(t))?"0":"-"+Or(q(t));case 0:return"0";case 1:return Or(q(t));default:throw new Error("signs should be +/- 1 or 0")}}Equals(t){const r=this;return t instanceof Ce&&Tl(r,t)}GetHashCode(){return Pa(this)|0}toJSON(t){return Pe(this)}CompareTo(t){const r=this;if(t instanceof Ce)return Ra(r,t)|0;throw new Error("the objects are not comparable\\nParameter name: obj")}}function $n(e,t){return new Ce(e,t)}Ce.smallLim=4096,Ce.smallPosTab=Ot(Ce.smallLim,Zn),Ce.one=On(1),Ce.two=On(2),Ce.zero=On(0);function Hn(e){return Ma(e)&&Wr(e)<Ce.smallLim?Ce.smallPosTab[Wr(e)]:e}function ft(e){return e.signInt}function q(e){return e.v}function Tl(e,t){const r=[ft(e),ft(t)];let i;switch(r[0]===-1?r[1]===-1?i=1:r[1]===0?i=8:r[1]===1?i=3:i=9:r[0]===0?r[1]===-1?i=6:r[1]===0?i=4:r[1]===1?i=5:i=9:r[0]===1?r[1]===-1?i=2:r[1]===0?i=7:r[1]===1?i=0:i=9:i=9,i){case 0:return Gr(q(e),q(t));case 1:return Gr(q(e),q(t));case 2:return ae(q(e))?ae(q(t)):!1;case 3:return ae(q(e))?ae(q(t)):!1;case 4:return!0;case 5:return ae(q(t));case 6:return ae(q(t));case 7:return ae(q(e));case 8:return ae(q(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function za(e,t){const r=[ft(e),ft(t)];let i;switch(r[0]===-1?r[1]===-1?i=1:r[1]===0?i=8:r[1]===1?i=3:i=9:r[0]===0?r[1]===-1?i=6:r[1]===0?i=4:r[1]===1?i=5:i=9:r[0]===1?r[1]===-1?i=2:r[1]===0?i=7:r[1]===1?i=0:i=9:i=9,i){case 0:return $r(q(e),q(t));case 1:return $r(q(t),q(e));case 2:return!1;case 3:return ae(q(e))?!ae(q(t)):!0;case 4:return!1;case 5:return!ae(q(t));case 6:return!1;case 7:return!1;case 8:return!ae(q(e));case 9:throw new Error("signs should be +/- 1 or 0\\nParameter name: x")}}function Ra(e,t){return za(e,t)?-1:Tl(e,t)?0:1}function Pa(e){return ft(e)===0?1:ft(e)+xa(q(e))|0}function On(e){return e>=0?$n(1,Hn(Zn(e))):e===-2147483648?$n(-1,Hn(Na(yo(X(e,!1,2))))):$n(-1,Hn(Zn(Qi(e))))}function La(e,t,r,i){const o=ut(e,r)|0;if(o===0)throw new Error("The step of a range cannot be zero");const c=o>0;return m=>{const p=ut(m,t)|0;return(c&&p<=0?!0:!c&&p>=0)?[m,i(m,e)]:void 0}}function Ga(e,t,r,i,o){const c=La(t,r,i,o);return b(()=>ca(c,e))}function $a(e,t,r){return Ga(e,t,r,0,(i,o)=>i+o)}class At extends mr{constructor(t,...r){super();this.tag=t|0,this.fields=r}cases(){return["Writable","ReadWritable"]}}class Ha{constructor(t){this.state=new At(0,xl(new Array(yr(Sr,t,10)),0,yr(Sr,t,10),null),0)}}function Oa(e){return new Ha(e)}function Wa(e){const t=e.state;if(t.tag===1){const r=t.fields[1]|0,i=t.fields[2]|0,o=t.fields[0],c=(i+1)%o.length|0;return c===r?e.state=new At(0,o,r):e.state=new At(1,o,r,c),U(o[i])}else return}function qa(e,t){const r=e.state;if(r.tag===1){const i=r.fields[1]|0,o=r.fields[2]|0,c=r.fields[0];c[i]=t;const m=(i+1)%c.length|0;m===o?e.state=new At(1,Ua(e,o,c),c.length,0):e.state=new At(1,c,m,o)}else{const i=r.fields[1]|0,o=r.fields[0];o[i]=t;const c=(i+1)%o.length|0;e.state=new At(1,o,c,i)}}function Ua(e,t,r){return Array.from(b(()=>L(pa(t,r),b(()=>L(ha(t,r),b(()=>vl(i=>C(null),$a(0,1,r.length))))))))}class Fl extends gt{constructor(t,r,i,o,c,m,p){super();this.init=t,this.update=r,this.subscribe=i,this.view=o,this.setState=c,this.onError=m,this.syncDispatch=p}}function ja(e,t,r){return new Fl(e,t,i=>yl(),r,(i,o)=>{r(i,o)},i=>{Ko(i[0],i[1])},Cn(2,i=>i))}function Ka(e,t){return new Fl(t.init,t.update,t.subscribe,t.view,e,t.onError,t.syncDispatch)}function Ja(e){return ll(2,e.view)}function Ya(e,t){const r=t.init(e),i=r[0],o=Oa(10);let c=!1,m=i;const p=f=>{if(c)qa(o,f);else{c=!0;let x=U(f);for(;x!=null;){const y=Me(x);try{const S=t.update(y,m),A=S[0];t.setState(A,h),Rr(I=>{t.onError([Kn(Nr("Error in command while handling: %A"))(y),I])},h,S[1]),m=A}catch(S){t.onError([Kn(Nr("Unable to process the message: %A"))(y),S])}x=Wa(o)}c=!1}},h=Di(1,t.syncDispatch,[p]);t.setState(i,h),Rr(f=>{t.onError(["Error intitializing:",f])},h,Jo(a([(()=>{try{return t.subscribe(i)}catch(f){return t.onError(["Unable to subscribe:",f]),yl()}})(),r[1]])))}function Xa(e){Ya(void 0,e)}class Za extends gt{constructor(t,r,i){super();this.model=t,this.render=r,this.equal=i}}class Qa extends l.exports.Component{constructor(t){super(t)}shouldComponentUpdate(t,r){const i=this;return!i.props.equal(i.props.model,t.model)}render(){return this.props.render()}}function ec(e,t,r,i){const o=new Za(r,()=>t(r,i),e);return l.exports.createElement(Qa,o)}function tc(e,t,r){return Ka((i,o)=>{Ml.exports.render(e(c=>m=>c===m,Ja(r),i,o),document.getElementById(t))},r)}function nc(e,t){return tc((r,i,o,c)=>ec(Cn(2,r),Cn(2,i),o,c),e,t)}const n=zl,rc=e=>{l.exports.useEffect(()=>{const t=e();return()=>{t.Dispose()}})},lc=(e,t)=>{l.exports.useEffect(()=>{const r=e();return()=>{r.Dispose()}},t)},ic=e=>{l.exports.useLayoutEffect(()=>{const t=e();return()=>{t.Dispose()}})},oc=rc,ac=lc,cc=ic;function sc(e,t,r,i){const o=n.memo(e,Cn(2,an(ll(2,r),null)));return da(c=>{e.displayName=c},No(t)),c=>{const m=mc(i,c);return n.createElement(o,m)}}function mc(e,t){if(e==null)return t;{const r=e;return t.key=r(t),t}}function en(e){return{Dispose(){e()}}}function Wn(e){oc(e)}function uc(e){cc(t=>(e(),en(()=>{})))}function dc(e){pc(e,[])}function pc(e,t){ac(r=>(e(),en(()=>{})),t)}function hc(e,t){const r=an(t,[]);return n.useCallback(e,r)}function xr(e){return n.useRef(e)}function fc(){return xr(void 0)}function oe(e,t){const r=an(t,[]);return n.useMemo(e,r)}function xc(e,t,r){return sc(e,void 0,r,t)}function fn(e){const t=xr(e),r=hc(i=>t.current(i),[]);return uc(()=>{t.current=e}),r}function V(e){return n.useState(e)}class Yt extends mr{constructor(t,...r){super();this.tag=t|0,this.fields=r}cases(){return["FSharp","Bash"]}}function Xt(e){let t;const r=e.text,i=e.lang,o=fc();dc(()=>{const m=o.current;if(m==null)console.warn("Failed to find element");else{const p=m;Prism.highlightAllUnder(p)}});const c=i.tag===1?"language-bash":"language-fsharp";return l.exports.createElement("pre",s(a([["ref",o],["className",c],(t=[l.exports.createElement("code",{children:[r]})],["children",n.Children.toArray(Array.from(t))])])))}function gc(e){const t=e.elements,r=a([["UNSAFE_className","example-result"],["children",n.Children.toArray(Array.from(t))]]);return n.createElement(Qn,s(r))}function z(e){const t=e.examples,r=e.description,i=e.title,o=w(b(()=>L(C(l.exports.createElement("h1",{className:"title example-group-title",children:n.Children.toArray([i])})),b(()=>L(C(l.exports.createElement("p",{className:"example-group-description",children:n.Children.toArray(Array.from(r))})),b(()=>vl(c=>L(C(c[1]),b(()=>c[0]!==El(t)-1?L(C(l.exports.createElement("br",{})),b(()=>L(C(n.createElement(Z,{size:"S"})),b(()=>C(l.exports.createElement("br",{})))))):Rn())),jo(t))))))));return l.exports.createElement(l.exports.Fragment,{},...o)}function g(e){const t=e.elements,r=e.description,i=e.code,o=e.title,c=w(b(()=>L(C(l.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray([o])})),b(()=>L(dn(m=>m,r),b(()=>{let m,p;return C((m=a([["direction","column"],["gap","size-100"],(p=[l.exports.createElement(Xt,{lang:new Yt(0),text:i}),l.exports.createElement(gc,{elements:t})],["children",n.Children.toArray(Array.from(p))])]),n.createElement(B,s(m))))}))))));return l.exports.createElement(l.exports.Fragment,{},...c)}const _l=a(["blue-400","blue-500","blue-600","blue-700","celery-400","celery-500","celery-600","celery-700","chartreuse-400","chartreuse-500","chartreuse-600","chartreuse-700","fuchsia-400","fuchsia-500","fuchsia-600","fuchsia-700","gray-50","gray-75","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","green-400","green-500","green-600","green-700","indigo-400","indigo-500","indigo-600","indigo-700","informative","magenta-400","magenta-500","magenta-600","magenta-700","negative","notice","orange-400","orange-500"]);function Ec(){let e,t,r,i,o,c;const m=[l.exports.createElement("h1",s(a([["className","title"],(e=["Feliz.ReactSpectrum",l.exports.createElement("a",s(a([["href","https://www.nuget.org/packages/Feliz.ReactSpectrum/"],(t=[l.exports.createElement("img",{alt:"NuGet badge",src:"https://img.shields.io/nuget/v/Feliz.ReactSpectrum.svg?style=square"})],["children",n.Children.toArray(Array.from(t))])])))],["children",n.Children.toArray(Array.from(e))])]))),l.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray(["Feliz-style Fable bindings for Adobe's React Spectrum components"])}),n.createElement(Z,{size:"M",marginTop:10,marginBottom:10}),l.exports.createElement("p",s(u((r=["Fable bindings for ",l.exports.createElement("a",{href:"https://react-spectrum.adobe.com/react-spectrum/",children:n.Children.toArray(["Adobe's React Spectrum components"])}),", written in the excelent ",l.exports.createElement("a",{href:"https://github.com/Zaid-Ajaj/Feliz",children:n.Children.toArray(["Feliz DSL style"])}),"."],["children",n.Children.toArray(Array.from(r))])))),l.exports.createElement("h2",{className:"subtitle paragraph",children:n.Children.toArray(["Features"])}),l.exports.createElement("ul",s(a([["className","bullet-list"],(i=[(o=a(["Covers React Spectrum components featured in the ",l.exports.createElement("a",{href:"https://react-spectrum.adobe.com/react-spectrum/index.html",children:"official documentation"})]),l.exports.createElement("li",{children:n.Children.toArray(Array.from(o))})),l.exports.createElement("li",{children:["Fully erased - the generated JS is zero size"]}),l.exports.createElement("li",s(u((c=["Compatible with the ",l.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:n.Children.toArray(["Femto dotnet tool"])})],["children",n.Children.toArray(Array.from(c))]))))],["children",n.Children.toArray(Array.from(i))])])))];return l.exports.createElement(l.exports.Fragment,{},...m)}function Sc(){let e;const t=[l.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray(["Using the Femto dotnet tool"])}),l.exports.createElement("p",s(a([["className","paragraph"],(e=["The easiest way to install the package is using the ",l.exports.createElement("a",{href:"https://github.com/zaid-ajaj/femto",children:n.Children.toArray(["Femto dotnet tool"])})," since this will also take care of installing the correct npm dependencies."],["children",n.Children.toArray(Array.from(e))])]))),l.exports.createElement(Xt,{lang:new Yt(1),text:"dotnet femto install Feliz.ReactSpectrum"}),l.exports.createElement("h2",{className:"subtitle",children:n.Children.toArray(["Manual installation"])}),l.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["You can install the package using NuGet:"])}),l.exports.createElement(Xt,{lang:new Yt(1),text:"dotnet add package Feliz.ReactSpectrum"}),l.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["Or in case you use Paket:"])}),l.exports.createElement(Xt,{lang:new Yt(1),text:"dotnet paket add Feliz.ReactSpectrum"}),l.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["Don't forget to also install the npm dependencies:"])}),l.exports.createElement(Xt,{lang:new Yt(1),text:`npm install @adobe/react-spectrum
npm install @spectrum-icons/illustrations
npm install @spectrum-icons/workflow`})];return l.exports.createElement(l.exports.Fragment,{},...t)}function yc(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.ActionButton [
    ActionButton.content "Press me"
    ActionButton.onPress (fun ev ->
        Browser.Dom.window.alert("I was clicked!")
    )
]`,description:d(),elements:u(n.createElement(R,{children:"Press me",onPress:e=>{window.alert(U("I was clicked!"))}}))})}function bc(){let e,t,r,i;return l.exports.createElement(g,{title:"Adding an icon",code:`Spectrum.ActionButton [
    ActionButton.children [
        Spectrum.Icon.Airplane [
            Icon.size IconSize.M
        ]
        Spectrum.Text "I have an airplane icon"
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]`,description:d(),elements:u((e=a([(t=[(r=Rl,n.createElement(r,{size:"M"})),(i=u(["children",n.Children.toArray(["I have an airplane icon"])]),n.createElement(v,s(i)))],["children",n.Children.toArray(Array.from(t))]),["onPress",o=>{console.log("Event: ",o)}]]),n.createElement(R,s(e))))})}function Cc(){let e,t,r;return l.exports.createElement(g,{title:"Icon-only",code:`Spectrum.ActionButton [
    ActionButton.ariaLabel "Edit"
    ActionButton.children [
        Spectrum.Icon.Edit [
            Icon.size IconSize.S
        ]
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]`,description:d(),elements:u((e=a([["aria-label","Edit"],(t=[(r=jr,n.createElement(r,{size:"S"}))],["children",n.Children.toArray(Array.from(t))]),["onPress",i=>{console.log("Event: ",i)}]]),n.createElement(R,s(e))))})}function Ac(){const e=a(["ActionButtons allow users to perform an action. They\u2019re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren\u2019t meant to draw a lot of attention.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionButton.html"})," for more details."]);return l.exports.createElement(z,{title:"ActionButton",description:e,examples:a([l.exports.createElement(yc,null),l.exports.createElement(bc,null),l.exports.createElement(Cc,null)])})}function vc(){return l.exports.createElement(g,{title:"Default example",code:`let action, setAction = React.useState("")

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
]`,description:d(),elements:w(b(()=>{let e,t,r;const i=V("");return C((e=[(t=a([["onAction",i[1]],["children",[n.createElement(E,{key:"add",title:"Add"}),n.createElement(E,{key:"delete",title:"Delete"}),n.createElement(E,{key:"edit",title:"Edit"})]]]),n.createElement(zt,s(t))),(r=`Action ${i[0]}`,l.exports.createElement("p",{children:[r]}))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function wc(){return l.exports.createElement(g,{title:"Multiple selection",code:`let selected, setSelected = React.useState([ "list" ])

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c,m,p,h,f,x,y,S,A;const I=V(u("list")),M=I[0];return C((e=[(t=a([["selectionMode","multiple"],["selectedKeys",(_=>Array.from(_))(M)],(r=_=>{_ instanceof Te&&I[1](_)},["onSelectionChange",_=>{const G=_;r(G==="all"?"all":pe(G.values()))}]),["children",[(i=a([["key","grid"],(o=[(c=u(["children",n.Children.toArray(["Grid view"])]),n.createElement(v,s(c)))],["children",n.Children.toArray(Array.from(o))])]),n.createElement(E,s(i))),(m=a([["key","list"],(p=[(h=u(["children",n.Children.toArray(["List view"])]),n.createElement(v,s(h)))],["children",n.Children.toArray(Array.from(p))])]),n.createElement(E,s(m))),(f=a([["key","gallery"],(x=[(y=u(["children",n.Children.toArray(["Gallery view"])]),n.createElement(v,s(y)))],["children",n.Children.toArray(Array.from(x))])]),n.createElement(E,s(f)))]]]),n.createElement(zt,s(t))),(S=Kn(Io("Current selection (controller): %A%P()",[Ct(M)])),A=u(["children",n.Children.toArray([S])]),n.createElement(v,s(A)))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function kc(){let e,t,r,i,o,c,m,p,h,f,x,y,S;return l.exports.createElement(g,{title:"With icons",code:`Spectrum.ActionGroup [
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
]`,description:d(),elements:u((e=u(["children",[(t=a([["key","edit2"],(r=[(i=In,n.createElement(i,{})),(o=u(["children",n.Children.toArray(["Edit"])]),n.createElement(v,s(o)))],["children",n.Children.toArray(Array.from(r))])]),n.createElement(E,s(t))),(c=a([["key","copy2"],(m=[(p=tr,n.createElement(p,{})),(h=u(["children",n.Children.toArray(["Copy"])]),n.createElement(v,s(h)))],["children",n.Children.toArray(Array.from(m))])]),n.createElement(E,s(c))),(f=a([["key","delete2"],(x=[(y=Tn,n.createElement(y,{})),(S=u(["children",n.Children.toArray(["Delete"])]),n.createElement(v,s(S)))],["children",n.Children.toArray(Array.from(x))])]),n.createElement(E,s(f)))]]),n.createElement(zt,s(e))))})}function Ic(){return l.exports.createElement(g,{title:"Using an item template",code:`let items = [
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
]`,description:d(),elements:w(b(()=>{let e,t;return C((e=a([["items",(r=>Array.from(r))([{label:"React",name:"_React"},{label:"Add",name:"_Add"},{label:"Delete",name:"_Delete"}])],["isEmphasized",!0],["selectionMode","single"],(t=r=>{let i,o;switch(r instanceof Te?k(r)?i=1:k(F(r))?(i=0,o=T(r)):i=1:i=1,i){case 0:{console.log("Selection: ",o);break}}},["onSelectionChange",r=>{const i=r;t(i==="all"?"all":pe(i.values()))}]),["children",r=>{let i,o;const c=a([["key",r.name],(i=[(o=u(["children",n.Children.toArray([r.label])]),n.createElement(v,s(o)))],["children",n.Children.toArray(Array.from(i))])]);return n.createElement(E,s(c))}]]),n.createElement(zt,s(e))))}))})}function Tc(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A,I,M,_,G,Q,se,Y;return l.exports.createElement(g,{title:"Collapsing buttons",code:`Spectrum.ActionGroup [
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
]`,description:d(),elements:u((e=a([["overflowMode","collapse"],["maxWidth",250],["children",[(t=a([["key","edit"],["textValue","Edit"],(r=[(i=In,n.createElement(i,{})),(o=u(["children",n.Children.toArray(["Edit"])]),n.createElement(v,s(o)))],["children",n.Children.toArray(Array.from(r))])]),n.createElement(E,s(t))),(c=a([["key","copy"],["textValue","Copy"],(m=[(p=tr,n.createElement(p,{})),(h=u(["children",n.Children.toArray(["Copy"])]),n.createElement(v,s(h)))],["children",n.Children.toArray(Array.from(m))])]),n.createElement(E,s(c))),(f=a([["key","delete"],["textValue","Delete"],(x=[(y=Tn,n.createElement(y,{})),(S=u(["children",n.Children.toArray(["Delete"])]),n.createElement(v,s(S)))],["children",n.Children.toArray(Array.from(x))])]),n.createElement(E,s(f))),(A=a([["key","move"],["textValue","Move"],(I=[(M=Pl,n.createElement(M,{})),(_=u(["children",n.Children.toArray(["Move"])]),n.createElement(v,s(_)))],["children",n.Children.toArray(Array.from(I))])]),n.createElement(E,s(A))),(G=a([["key","duplicate"],["textValue","Duplicate"],(Q=[(se=Ll,n.createElement(se,{})),(Y=u(["children",n.Children.toArray(["Duplicate"])]),n.createElement(v,s(Y)))],["children",n.Children.toArray(Array.from(Q))])]),n.createElement(E,s(G)))]]]),n.createElement(zt,s(e))))})}function Fc(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A,I,M,_,G;return l.exports.createElement(g,{title:"Collapsed with multiple selection",code:`Spectrum.ActionGroup [
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
]`,description:d(),elements:u((e=a([["aria-label","Text style"],["overflowMode","collapse"],["selectionMode","multiple"],["isEmphasized",!0],["summaryIcon",(t=Gl,n.createElement(t,{}))],["maxWidth",100],["children",[(r=a([["key","bold"],["textValue","Bold"],(i=[(o=$l,n.createElement(o,{})),(c=u(["children",n.Children.toArray(["Bold"])]),n.createElement(v,s(c)))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(E,s(r))),(m=a([["key","italic"],["textValue","Italic"],(p=[(h=Hl,n.createElement(h,{})),(f=u(["children",n.Children.toArray(["Italic"])]),n.createElement(v,s(f)))],["children",n.Children.toArray(Array.from(p))])]),n.createElement(E,s(m))),(x=a([["key","underline"],["textValue","Underline"],(y=[(S=Ol,n.createElement(S,{})),(A=u(["children",n.Children.toArray(["Underline"])]),n.createElement(v,s(A)))],["children",n.Children.toArray(Array.from(y))])]),n.createElement(E,s(x))),(I=a([["key","strike"],["textValue","Strikethrough"],(M=[(_=Wl,n.createElement(_,{})),(G=u(["children",n.Children.toArray(["Strikethrough"])]),n.createElement(v,s(G)))],["children",n.Children.toArray(Array.from(M))])]),n.createElement(E,s(I)))]]]),n.createElement(zt,s(e))))})}function _c(){const e=a(["An ActionGroup is a grouping of ActionButtons that are related to one another.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html"})," for more details."]);return l.exports.createElement(z,{title:"ActionGroup",description:e,examples:a([l.exports.createElement(vc,null),l.exports.createElement(wc,null),l.exports.createElement(kc,null),l.exports.createElement(Ic,null),l.exports.createElement(Tc,null),l.exports.createElement(Fc,null)])})}function Bc(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Button [
    Button.variant ButtonVariant.CTA
    Button.content "Save"
]`,description:d(),elements:u(n.createElement(H,{variant:"cta",children:"Save"}))})}function Dc(){let e,t,r,i;return l.exports.createElement(g,{title:"Icon + label",code:`Spectrum.Button [
    Button.variant ButtonVariant.Primary
    Button.children [
        Spectrum.Icon.Bell []
        Spectrum.Text "Icon + Label"
    ]
]`,description:d(),elements:u((e=a([["variant","primary"],(t=[(r=Kr,n.createElement(r,{})),(i=u(["children",n.Children.toArray(["Icon + Label"])]),n.createElement(v,s(i)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(H,s(e))))})}function Vc(){let e,t,r,i;return l.exports.createElement(g,{title:"Button variants",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","row"],["alignItems","center"],["gap","size-100"],(t=[n.createElement(H,{variant:"cta",children:"CTA"}),n.createElement(H,{variant:"primary",children:"Primary"}),n.createElement(H,{variant:"secondary",children:"Secondary"}),n.createElement(H,{variant:"negative",children:"Negative"}),(r=a([["backgroundColor","green-400"],["padding",20],(i=[n.createElement(H,{variant:"overBackground",children:"Over background"})],["children",n.Children.toArray(Array.from(i))])]),n.createElement(P,s(r)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Nc(){const e=a(["Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Button.html"})," for more details."]);return l.exports.createElement(z,{title:"Button",description:e,examples:a([l.exports.createElement(Bc,null),l.exports.createElement(Dc,null),l.exports.createElement(Vc,null)])})}function Mc(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.ButtonGroup [
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
]`,description:d(),elements:u((e=a([n.createElement(H,{variant:"secondary",children:"No, thanks"}),n.createElement(H,{variant:"secondary",children:"Remind me later"}),n.createElement(H,{variant:"primary",children:"Rate now"})]),l.exports.createElement(ze,d(),...e)))})}function zc(){let e,t;return l.exports.createElement(g,{title:"Orientation",code:`Spectrum.ButtonGroup [
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
]`,description:d(),elements:u((e=a([["orientation","vertical"],(t=[n.createElement(H,{variant:"secondary",children:"No, thanks"}),n.createElement(H,{variant:"secondary",children:"Remind me later"}),n.createElement(H,{variant:"primary",children:"Rate now"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(ze,s(e))))})}function Rc(){let e,t,r,i,o,c,m,p;return l.exports.createElement(g,{title:"Alignment",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["gap",10],["direction","column"],["alignItems","start"],(t=[(r=u(["children",n.Children.toArray(["align = 'end'"])]),n.createElement(v,s(r))),(i=a([["orientation","vertical"],["align","end"],(o=[n.createElement(H,{variant:"secondary",children:"No, thanks"}),n.createElement(H,{variant:"secondary",children:"Remind me later"}),n.createElement(H,{variant:"primary",children:"Rate now"})],["children",n.Children.toArray(Array.from(o))])]),n.createElement(ze,s(i))),(c=u(["children",n.Children.toArray(["align = 'center'"])]),n.createElement(v,s(c))),(m=a([["orientation","vertical"],["align","center"],(p=[n.createElement(H,{variant:"secondary",children:"No, thanks"}),n.createElement(H,{variant:"secondary",children:"Remind me later"}),n.createElement(H,{variant:"primary",children:"Rate now"})],["children",n.Children.toArray(Array.from(p))])]),n.createElement(ze,s(m)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Pc(){const e=a(["ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html"})," for more details."]);return l.exports.createElement(z,{title:"ButtonGroup",description:e,examples:a([l.exports.createElement(Mc,null),l.exports.createElement(zc,null),l.exports.createElement(Rc,null)])})}function Lc(){let e,t,r;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.And
    LogicButton.children [
        Spectrum.Text "And"
    ]
]`,description:d(),elements:u((e=a([["variant","and"],(t=[(r=u(["children",n.Children.toArray(["And"])]),n.createElement(v,s(r)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(er,s(e))))})}function Gc(){let e,t,r;return l.exports.createElement(g,{title:"Or variant",code:`Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.Or
    LogicButton.children [
        Spectrum.Text "Or"
    ]
]`,description:d(),elements:u((e=a([["variant","or"],(t=[(r=u(["children",n.Children.toArray(["Or"])]),n.createElement(v,s(r)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(er,s(e))))})}function $c(){return l.exports.createElement(g,{title:"Events",code:`let variant, setVariant = React.useState(LogicButtonVariant.Or)

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
]`,description:d(),elements:w(b(()=>{const e=V("or"),t=e[0];return C(n.createElement(er,{variant:t,onPress:r=>{e[1](t==="or"?"and":"or")},children:t}))}))})}function Hc(){const e=a(["A LogicButton displays an operator within a boolean logic sequence.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/LogicButton.html"})," for more details."]);return l.exports.createElement(z,{title:"LogicButton",description:e,examples:a([l.exports.createElement(Lc,null),l.exports.createElement(Gc,null),l.exports.createElement($c,null)])})}function Oc(){let e,t;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.ToggleButton [
    Spectrum.Text "Pin"
]`,description:d(),elements:u((e=u((t=u(["children",n.Children.toArray(["Pin"])]),n.createElement(v,s(t)))),l.exports.createElement(vt,d(),...e)))})}function Wc(){let e,t,r,i;return l.exports.createElement(g,{title:"Using icons",code:`Spectrum.ToggleButton [
    ToggleButton.children [
        Spectrum.Icon.PinOff []
        Spectrum.Text "Pin"
    ]
]`,description:d(),elements:u((e=u((t=[(r=gn,n.createElement(r,{})),(i=u(["children",n.Children.toArray(["Pin"])]),n.createElement(v,s(i)))],["children",n.Children.toArray(Array.from(t))])),n.createElement(vt,s(e))))})}function qc(){return l.exports.createElement(g,{title:"Events",code:`let isSelected, setSelected = React.useState(false)

Spectrum.ToggleButton [
    ToggleButton.isEmphasized true
    ToggleButton.isSelected isSelected
    ToggleButton.onChange setSelected
    ToggleButton.ariaLabel "Pin"
    ToggleButton.children [
        Spectrum.Icon.PinOff []
        Spectrum.Text $"Is selected: {isSelected}"
    ]
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o;const c=V(!1),m=c[0];return C((e=a([["isEmphasized",!0],["isSelected",m],["onChange",c[1]],["aria-label","Pin"],(t=[(r=gn,n.createElement(r,{})),(i=`Is selected: ${m}`,o=u(["children",n.Children.toArray([i])]),n.createElement(v,s(o)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(vt,s(e))))}))})}function Uc(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A;return l.exports.createElement(g,{title:"Static color",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["wrap",!0],["gap","size-250"],(t=[(r=a([["backgroundColor","static-seafoam-700"],["padding",20],(i=[(o=a([["staticColor","white"],(c=[(m=gn,n.createElement(m,{})),(p=u(["children",n.Children.toArray(["Pin"])]),n.createElement(v,s(p)))],["children",n.Children.toArray(Array.from(c))])]),n.createElement(vt,s(o)))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(P,s(r))),(h=a([["backgroundColor","static-yellow-400"],["padding",20],(f=[(x=a([["staticColor","black"],["isQuiet",!0],["defaultSelected",!0],(y=[(S=gn,n.createElement(S,{})),(A=u(["children",n.Children.toArray(["Pin"])]),n.createElement(v,s(A)))],["children",n.Children.toArray(Array.from(y))])]),n.createElement(vt,s(x)))],["children",n.Children.toArray(Array.from(f))])]),n.createElement(P,s(h)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function jc(){const e=a(["ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ToggleButton.html"})," for more details."]);return l.exports.createElement(z,{title:"ToggleButton",description:e,examples:a([l.exports.createElement(Oc,null),l.exports.createElement(Wc,null),l.exports.createElement(qc,null),l.exports.createElement(Uc,null)])})}function Kc(){let e,t,r;return l.exports.createElement(g,{title:"Using the Provider component",code:`Spectrum.Provider [
    Provider.defaultTheme
    Provider.colorScheme ColorScheme.Light
    Provider.locale "en-US"
    Provider.scale Scale.Medium
    Provider.children [
        Spectrum.ActionButton [
            ActionButton.content "Spectrum button"
        ]
    ]
]`,description:d(),elements:u((e=a([(t=wt,["theme",t]),["colorScheme","light"],["locale","en-US"],["scale","medium"],(r=[n.createElement(R,{children:"Spectrum button"})],["children",n.Children.toArray(Array.from(r))])]),n.createElement(st,s(e))))})}function Jc(){let e,t,r,i;const o=u(l.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["You can override the default screen breakpoints as follows. Resize the browser window to see the effects."])}));return l.exports.createElement(g,{title:"Provider screen breakpoints",code:`Spectrum.Provider [
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
]`,description:o,elements:u((e=a([(t=wt,["theme",t]),["colorScheme","light"],["breakpoints",{L:1024,M:640,S:void 0}],(r=[(i=a([["height","size-2000"],["backgroundColor",{base:U("celery-600"),S:void 0,M:U("blue-600"),L:U("magenta-600")}]]),n.createElement(P,s(i)))],["children",n.Children.toArray(Array.from(r))])]),n.createElement(st,s(e))))})}function Yc(){let e,t,r,i,o;return l.exports.createElement(g,{title:"Color scheme",code:`Spectrum.Provider [
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
`,description:d(),elements:u((e=a([(t=wt,["theme",t]),["colorScheme","dark"],(r=[(i=a([["padding",20],(o=[n.createElement(R,{children:"Dark mode!"})],["children",n.Children.toArray(Array.from(o))])]),n.createElement(P,s(i)))],["children",n.Children.toArray(Array.from(r))])]),n.createElement(st,s(e))))})}function Xc(){let e,t,r,i,o,c,m;const p=u(l.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["You can use a Provider component to define common properties for a group of components within. For example, you can disable multiple components as follows:"])}));return l.exports.createElement(g,{title:"Property groups",code:`// Note: You still need to define an app-level Provider for themeing.
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
]`,description:p,elements:u((e=a([["direction","column"],["gap","size-100"],["alignItems","start"],(t=[(r=a([["isDisabled",!0],(i=[(o=a([["label","Favorite animal"],(c=[n.createElement(ne,{value:"dogs",children:"Dogs"}),n.createElement(ne,{value:"cats",children:"Cats"}),n.createElement(ne,{value:"horses",children:"Horses"})],["children",n.Children.toArray(Array.from(c))])]),n.createElement(mt,s(o))),(m=u(["children",n.Children.toArray(["I agree"])]),n.createElement($,s(m))),n.createElement(H,{variant:"primary",children:"Submit"})],["children",n.Children.toArray(Array.from(i))])]),n.createElement(st,s(r)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function qr(){if(ql().colorScheme==="dark"){const t=Ul;return n.createElement(t,{["aria-label"]:"In dark theme"})}else{const t=jl;return n.createElement(t,{["aria-label"]:"In light theme"})}}function Zc(){let e,t,r,i,o,c,m,p;return l.exports.createElement(g,{title:"Using the useProvider hook",code:`// DynamicIcon defined as a separate ReactComponent
// Adjusts automatically based on the colorScheme of its' parent Provider
[<ReactComponent>]
let DynamicIcon () =
    let providerContext = Spectrum.useProvider()
    let colorScheme = providerContext.colorScheme
    if colorScheme = ColorScheme.Dark
        then Spectrum.Icon.Moon [ prop.ariaLabel "In dark theme" ]
        else Spectrum.Icon.Light [ prop.ariaLabel "In light theme" ]

// ...
Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size200)
    Flex.children [
        Spectrum.Provider [
            Provider.defaultTheme
            Provider.colorScheme ColorScheme.Light
            Provider.locale "en-US"
            Provider.children [
                DynamicIcon ()
            ]
        ]
        Spectrum.Provider [
            Provider.defaultTheme
            Provider.colorScheme ColorScheme.Dark
            Provider.locale "en-US"
            Provider.children [
                DynamicIcon ()
            ]
        ]
    ]
]
`,description:d(),elements:u((e=a([["direction","row"],["gap","size-200"],(t=[(r=a([(i=wt,["theme",i]),["colorScheme","light"],["locale","en-US"],(o=[l.exports.createElement(qr,null)],["children",n.Children.toArray(Array.from(o))])]),n.createElement(st,s(r))),(c=a([(m=wt,["theme",m]),["colorScheme","dark"],["locale","en-US"],(p=[l.exports.createElement(qr,null)],["children",n.Children.toArray(Array.from(p))])]),n.createElement(st,s(c)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Qc(){const e=a(["Provider is the container for all React Spectrum applications. It defines the theme, locale, and other application level settings, and can also be used to provide common properties to a group of components.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Provider.html"})," for more details."]);return l.exports.createElement(z,{title:"Provider",description:e,examples:a([l.exports.createElement(Kc,null),l.exports.createElement(Jc,null),l.exports.createElement(Yc,null),l.exports.createElement(Xc,null),l.exports.createElement(Zc,null)])})}function es(){let e,t;return l.exports.createElement(g,{title:"Vertical stack",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","column"],["width","size-2000"],["gap","size-100"],(t=[n.createElement(P,{backgroundColor:"celery-600",height:"size-800"}),n.createElement(P,{backgroundColor:"blue-600",height:"size-800"}),n.createElement(P,{backgroundColor:"magenta-600",height:"size-800"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function ts(){let e,t;return l.exports.createElement(g,{title:"Horizontal stack",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","row"],["height","size-800"],["gap","size-100"],(t=[n.createElement(P,{backgroundColor:"celery-600",width:"size-800"}),n.createElement(P,{backgroundColor:"blue-600",width:"size-800"}),n.createElement(P,{backgroundColor:"magenta-600",width:"size-800"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function ns(){let e,t,r,i;const o=u(l.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["This example shows how you can nest flexboxes to create more complicated layouts. It also uses the flex prop on one of the children to expand it to fill the repaining space."])}));return l.exports.createElement(g,{title:"Nesting",code:`Spectrum.Flex [
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
]`,description:o,elements:u((e=a([["direction","column"],["gap","size-100"],(t=[n.createElement(P,{backgroundColor:"celery-600",height:"size-800"}),(r=a([["direction","row"],["height","size-3000"],["gap","size-100"],(i=[n.createElement(P,{backgroundColor:"indigo-600",width:"size-2000"}),n.createElement(P,{backgroundColor:"seafoam-600",flex:!0})],["children",n.Children.toArray(Array.from(i))])]),n.createElement(B,s(r))),n.createElement(P,{backgroundColor:"magenta-600",height:"size-800"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function rs(){let e,t;const r=u(l.exports.createElement("p",{className:"paragraph",children:n.Children.toArray(["This example shows how to enable wrapping of items into multiple rows. Resize your browser window to see the items reflow."])}));return l.exports.createElement(g,{title:"Wrapping",code:`Spectrum.Flex [
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
]`,description:r,elements:u((e=a([["direction","row"],["gap","size-100"],["wrap",!0],(t=w(b(()=>dn(i=>n.createElement(P,{key:i,backgroundColor:i,width:"size-800",height:"size-800"}),_l))),["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function ls(){let e,t;return l.exports.createElement(g,{title:"Alignment",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","column"],["gap","size-100"],["alignItems","center"],(t=[n.createElement(P,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),n.createElement(P,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),n.createElement(P,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function is(){let e,t,r,i;return l.exports.createElement(g,{title:"Justification",code:`Spectrum.View [
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
]`,description:d(),elements:u((e=a([["height","size-3000"],["borderWidth","thin"],["borderColor","dark"],(t=[(r=a([["direction","column"],["gap","size-100"],["justifyContent","center"],["height","100%"],(i=[n.createElement(P,{backgroundColor:"celery-600",width:"size-800",height:"size-800"}),n.createElement(P,{backgroundColor:"blue-600",width:"size-2000",height:"size-800"}),n.createElement(P,{backgroundColor:"magenta-600",width:"size-800",height:"size-800"})],["children",n.Children.toArray(Array.from(i))])]),n.createElement(B,s(r)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(P,s(e))))})}function os(){const e=a(["A layout container using flexbox. Provides Spectrum dimension values, and supports the gap property to define consistent spacing between items.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Flex.html"})," for more details."]);return l.exports.createElement(z,{title:"Flex",description:e,examples:a([l.exports.createElement(es,null),l.exports.createElement(ts,null),l.exports.createElement(ns,null),l.exports.createElement(rs,null),l.exports.createElement(ls,null),l.exports.createElement(is,null)])})}function as(){let e,t;return l.exports.createElement(g,{title:"Explicit grid",code:`Spectrum.Grid [
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
]`,description:d(),elements:u((e=a([["areas",Ct(a(["header header","sidebar content","footer footer"]))],["columns",Ct(a(["1fr","3fr"]))],["rows",Ct(a(["size-1000","auto","size-1000"]))],["height","size-6000"],["width","80%"],["gap","size-100"],(t=[n.createElement(P,{backgroundColor:"celery-600",gridArea:"header"}),n.createElement(P,{backgroundColor:"blue-600",gridArea:"sidebar"}),n.createElement(P,{backgroundColor:"purple-600",gridArea:"content"}),n.createElement(P,{backgroundColor:"magenta-600",gridArea:"footer"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(Jr,s(e))))})}function cs(){let e,t,r;return l.exports.createElement(g,{title:"Implicit grid",code:`Spectrum.Grid [
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
]`,description:d(),elements:u((e=a([["height","size-6000"],["width","100%"],["columns",(t=Kl,t("auto-fit","size-800"))],["autoRows","size-800"],["justifyContent","center"],["gap","size-200"],(r=w(b(()=>dn(i=>n.createElement(P,{key:i,backgroundColor:i}),_l))),["children",n.Children.toArray(Array.from(r))])]),n.createElement(Jr,s(e))))})}function ss(){const e=a(["A layout container using CSS grid. Supports Spectrum dimensions as values to ensure consistent and adaptive sizing and spacing.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Grid.html"})," for more details."]);return l.exports.createElement(z,{title:"Grid",description:e,examples:a([l.exports.createElement(as,null),l.exports.createElement(cs,null)])})}function ms(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Alignment"
    ListBox.children [
        Spectrum.Item "Left"
        Spectrum.Item "Middle"
        Spectrum.Item "Right"
    ]
]`,description:d(),elements:u((e=a([["width","size-2400"],["aria-label","Alignment"],["children",[n.createElement(E,{children:"Left"}),n.createElement(E,{children:"Middle"}),n.createElement(E,{children:"Right"})]]]),n.createElement(Re,s(e))))})}function us(){return l.exports.createElement(g,{title:"Content example",code:`let options = [
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
]`,description:d(),elements:w(b(()=>{let e;const t=a([{id:1,name:"Aardvark"},{id:2,name:"Cat"},{id:3,name:"Dog"},{id:4,name:"Kangaroo"},{id:5,name:"Koala"},{id:6,name:"Penguin"},{id:7,name:"Snake"},{id:8,name:"Turtle"},{id:9,name:"Wombat"}]),r=V(void 0),i=r[1],o=r[0];return C((e=w(b(()=>{let c;return L(C((c=a([["width","size-2400"],["aria-label","Animals"],["items",(m=>Array.from(m))(t)],["children",m=>n.createElement(E,{children:m.name})],["selectionMode","single"],["onSelectionChange",m=>{const p=pe(m.values());let h,f;switch(k(p)?h=1:k(F(p))?(h=0,f=T(p)):h=1,h){case 0:{i(f);break}case 1:{i(void 0);break}}}]]),n.createElement(Re,s(c)))),b(()=>{const m=o==null?"None selected":`Animal id: ${o}`;return C(l.exports.createElement("p",{children:[m]}))}))})),l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function ds(){return l.exports.createElement(g,{title:"Selection example",code:`let options = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=a([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),c=V(u("Bison"));return C((e=a([["direction","row"],["gap","size-350"],(t=[(r=a([["selectionMode","multiple"],["aria-label","Pick an animal"],["items",(m=>Array.from(m))(o)],["defaultSelectedKeys",["Bison","Koala"]],["width","size-2400"],["children",m=>{let p,h;const f=a([["key",m.name],["textValue",m.name],(p=[(h=u(["children",n.Children.toArray([m.name])]),n.createElement(v,s(h)))],["children",n.Children.toArray(Array.from(p))])]);return n.createElement(E,s(f))}]]),n.createElement(Re,s(r))),(i=a([["selectionMode","multiple"],["aria-label","Pick an animal"],["items",(m=>Array.from(m))(o)],["selectedKeys",c[0]],["onSelectionChange",m=>{c[1](pe(m.values()))}],["width","size-2400"],["children",m=>{let p,h;const f=a([["key",m.name],["textValue",m.name],(p=[(h=u(["children",n.Children.toArray([m.name])]),n.createElement(v,s(h)))],["children",n.Children.toArray(Array.from(p))])]);return n.createElement(E,s(f))}]]),n.createElement(Re,s(i)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function ps(){let e,t,r;return l.exports.createElement(g,{title:"Sections",code:`Spectrum.ListBox [
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
]`,description:d(),elements:u((e=a([["width","size-2400"],["aria-label","Pick your favorite"],["selectionMode","single"],["children",[(t=a([["title","Animals"],["children",[n.createElement(E,{key:"Aardvark",children:"Aardvark"}),n.createElement(E,{key:"Kangaroo",children:"Kangaroo"}),n.createElement(E,{key:"Snake",children:"Snake"})]]]),n.createElement(Ee,s(t))),(r=a([["title","People"],["children",[n.createElement(E,{key:"Danni",children:"Danni"}),n.createElement(E,{key:"Devon",children:"Devon"}),n.createElement(E,{key:"Ross",children:"Ross"})]]]),n.createElement(Ee,s(r)))]]]),n.createElement(Re,s(e))))})}function hs(){return l.exports.createElement(g,{title:"Dynamic items",code:`let options = [
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
]`,description:d(),elements:w(b(()=>{let e;const t=a([{animals:[{id:2,name:"Koala"},{id:3,name:"Kangaroo"},{id:4,name:"Platypus"}],name:"Australian"},{animals:[{id:6,name:"Bald Eagle"},{id:7,name:"Bison"},{id:8,name:"Skunk"}],name:"American"}]),r=V(d());return C((e=a([["aria-label","Pick an animal"],["items",(i=>Array.from(i))(t)],["selectedKeys",r[0]],["selectionMode","single"],["onSelectionChange",i=>{r[1](pe(i.values()))}],["width","size-2400"],["children",i=>{const o=a([["key",i.name],["title",i.name],["items",(c=>Array.from(c))(i.animals)],["children",c=>{let m,p,h;const f=a([["key",(m=c.id,el(m))],["textValue",c.name],(p=[(h=u(["children",n.Children.toArray([c.name])]),n.createElement(v,s(h)))],["children",n.Children.toArray(Array.from(p))])]);return n.createElement(E,s(f))}]]);return n.createElement(Ee,s(o))}]]),n.createElement(Re,s(e))))}))})}function fs(){return l.exports.createElement(g,{title:"Events",code:`let frequency, setFrequency = React.useState<string list>([])

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
]`,description:d(),elements:w(b(()=>{let e,t,r;const i=V(d()),o=i[0];return C((e=[(t=a([["aria-label","Choose frequency"],["selectionMode","single"],["onSelectionChange",c=>{i[1](pe(c.values()))}],["width","size-2400"],["children",[n.createElement(E,{key:"Rarely",children:"Rarely"}),n.createElement(E,{key:"Sometimes",children:"Sometimes"}),n.createElement(E,{key:"Always",children:"Always"})]]]),n.createElement(Re,s(t))),(r=`You selected: ${k(o)?"":k(F(o))?T(o):""}`,l.exports.createElement("p",{children:[r]}))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function xs(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A,I,M,_;return l.exports.createElement(g,{title:"Complex items",code:`Spectrum.ListBox [
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
]`,description:d(),elements:u((e=a([["width","size-2400"],["aria-label","Options"],["selectionMode","single"],["children",[(t=a([["title","Permissions"],["children",[(r=a([["textValue","Read"],(i=[(o=Yr,n.createElement(o,{size:"S"})),(c=u(["children",n.Children.toArray(["Read"])]),n.createElement(v,s(c))),(m=a([["children",n.Children.toArray(["Read only"])],["slot","description"]]),n.createElement(v,s(m)))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(E,s(r))),(p=a([["textValue","Write"],(h=[(f=In,n.createElement(f,{size:"S"})),(x=u(["children",n.Children.toArray(["Write"])]),n.createElement(v,s(x))),(y=a([["children",n.Children.toArray(["Read and Write Only"])],["slot","description"]]),n.createElement(v,s(y)))],["children",n.Children.toArray(Array.from(h))])]),n.createElement(E,s(p))),(S=a([["textValue","Admin"],(A=[(I=Jl,n.createElement(I,{size:"S"})),(M=u(["children",n.Children.toArray(["Admin"])]),n.createElement(v,s(M))),(_=a([["children",n.Children.toArray(["Full access"])],["slot","description"]]),n.createElement(v,s(_)))],["children",n.Children.toArray(Array.from(A))])]),n.createElement(E,s(S)))]]]),n.createElement(Ee,s(t)))]]]),n.createElement(Re,s(e))))})}function gs(){let e,t,r;return l.exports.createElement(g,{title:"Disabled keys",code:`Spectrum.ListBox [
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
]`,description:d(),elements:u((e=a([["width","size-2400"],["aria-label","Pick your favorite"],["disabledKeys",["Snake","Ross"]],["selectionMode","single"],["children",[(t=a([["title","Animals"],["children",[n.createElement(E,{key:"Aardvark",children:"Aardvark"}),n.createElement(E,{key:"Kangaroo",children:"Kangaroo"}),n.createElement(E,{key:"Snake",children:"Snake"})]]]),n.createElement(Ee,s(t))),(r=a([["title","People"],["children",[n.createElement(E,{key:"Danni",children:"Danni"}),n.createElement(E,{key:"Devon",children:"Devon"}),n.createElement(E,{key:"Ross",children:"Ross"})]]]),n.createElement(Ee,s(r)))]]]),n.createElement(Re,s(e))))})}function Es(){const e=a(["A list of options that can allow selection of one or more.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ListBox.html"})," for more details."]);return l.exports.createElement(z,{title:"ListBox",description:e,examples:a([l.exports.createElement(ms,null),l.exports.createElement(us,null),l.exports.createElement(ds,null),l.exports.createElement(ps,null),l.exports.createElement(hs,null),l.exports.createElement(fs,null),l.exports.createElement(xs,null),l.exports.createElement(gs,null)])})}function Ss(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.ActionMenu [
    Spectrum.Item "Cut"
    Spectrum.Item "Copy"
    Spectrum.Item "Paste"
]`,description:d(),elements:u((e=a([n.createElement(E,{children:"Cut"}),n.createElement(E,{children:"Copy"}),n.createElement(E,{children:"Paste"})]),l.exports.createElement(Fn,d(),...e)))})}function ys(){return l.exports.createElement(g,{title:"Content",code:`let actionMenuItems = [
    {| name = "Cut" |}
    {| name = "Copy" |}
    {| name = "Paste" |}
    {| name = "Select All" |}
]

Spectrum.ActionMenu [
    ActionMenu.items actionMenuItems
    ActionMenu.itemTemplate (fun (item: {| name: string |}) ->
        Spectrum.Item [
            Item.key item.name
            Item.content item.name
        ]
    )
]`,description:d(),elements:w(b(()=>{let e;return C((e=a([["items",(t=>Array.from(t))([{name:"Cut"},{name:"Copy"},{name:"Paste"},{name:"Select All"}])],["children",t=>n.createElement(E,{key:t.name,children:t.name})]]),n.createElement(Fn,s(e))))}))})}function bs(){return l.exports.createElement(g,{title:"Events",code:`let action, setAction = React.useState("")

Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size100)
    Flex.alignItems FlexAlignItems.Center
    Flex.children [
        Spectrum.ActionMenu [
            ActionMenu.onAction setAction
            ActionMenu.children [
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
        Html.p $"Action: {action}"
    ]
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=V("");return C((e=a([["direction","row"],["gap","size-100"],["alignItems","center"],(t=[(r=a([["onAction",o[1]],["children",[n.createElement(E,{key:"cut",children:"Cut"}),n.createElement(E,{key:"copy",children:"Copy"}),n.createElement(E,{key:"paste",children:"Paste"})]]]),n.createElement(Fn,s(r))),(i=`Action: ${o[0]}`,l.exports.createElement("p",{children:[i]}))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Cs(){let e,t,r;return l.exports.createElement(g,{title:"Sections",code:`Spectrum.ActionMenu [
    Spectrum.Section [
        Section.title "File"
        Section.children [
            Spectrum.Item [
                Item.key "new"
                Item.content "New"
            ]
            Spectrum.Item [
                Item.key "open"
                Item.content "Open"
            ]
        ]
    ]
    Spectrum.Section [
        Section.title "Save"
        Section.children [
            Spectrum.Item [
                Item.key "save"
                Item.content "Save"
            ]
            Spectrum.Item [
                Item.key "saveAs"
                Item.content "Save As..."
            ]
            Spectrum.Item [
                Item.key "saveAll"
                Item.content "Save All"
            ]
        ]
    ]
]`,description:d(),elements:u((e=a([(t=a([["title","File"],["children",[n.createElement(E,{key:"new",children:"New"}),n.createElement(E,{key:"open",children:"Open"})]]]),n.createElement(Ee,s(t))),(r=a([["title","Save"],["children",[n.createElement(E,{key:"save",children:"Save"}),n.createElement(E,{key:"saveAs",children:"Save As..."}),n.createElement(E,{key:"saveAll",children:"Save All"})]]]),n.createElement(Ee,s(r)))]),l.exports.createElement(Fn,d(),...e)))})}function As(){const e=a(['ActionMenu combines an ActionButton with a Menu for simple "more actions" use cases.',l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ActionMenu.html"})," for more details."]);return l.exports.createElement(z,{title:"ActionMenu",description:e,examples:a([l.exports.createElement(Ss,null),l.exports.createElement(ys,null),l.exports.createElement(bs,null),l.exports.createElement(Cs,null)])})}function vs(){let e,t;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.MenuTrigger [
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
]`,description:d(),elements:u((e=a([n.createElement(R,{children:"Edit"}),(t=a([["onAction",r=>{window.alert(U(r))}],["children",[n.createElement(E,{key:"cut",children:"Cut"}),n.createElement(E,{key:"copy",children:"Copy"}),n.createElement(E,{key:"paste",children:"Paste"}),n.createElement(E,{key:"replace",children:"Replace"})]]]),n.createElement(re,s(t)))]),l.exports.createElement(le,d(),...e)))})}function ws(){return l.exports.createElement(g,{title:"Using an item template",code:`let menuItems = [
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
]`,description:d(),elements:w(b(()=>{let e,t;const r=a([{id:"cut",name:"Cut"},{id:"copy",name:"Copy"},{id:"Paste",name:"Paste"},{id:"replace",name:"Replace"}]);return C((e=a([l.exports.createElement(R,d(),"Edit"),(t=a([["items",(i=>Array.from(i))(r)],["children",i=>n.createElement(E,{key:i.id,children:i.name})]]),n.createElement(re,s(t)))]),l.exports.createElement(le,d(),...e)))}))})}function ks(){return l.exports.createElement(g,{title:"Events",code:`let action, setAction = React.useState("")

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=V("");return C((e=[(t=a([l.exports.createElement(R,d(),"Edit"),(r=a([["onAction",o[1]],["children",[n.createElement(E,{key:"cut",children:"Cut"}),n.createElement(E,{key:"copy",children:"Copy"}),n.createElement(E,{key:"paste",children:"Paste"})]]]),n.createElement(re,s(r)))]),l.exports.createElement(le,d(),...t)),(i=`Action: ${o[0]}`,l.exports.createElement("p",{children:[i]}))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function Is(){return l.exports.createElement(g,{title:"Selection",code:`let selected, setSelected = React.useState([ "middle" ])

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
]`,description:d(),elements:w(b(()=>{let e;const t=V(u("middle")),r=t[0];return C((e=w(b(()=>{let i,o;return L(C((i=a([l.exports.createElement(R,d(),"Align"),(o=a([["selectionMode","single"],["selectedKeys",r],["onSelectionChange",c=>{t[1](pe(c.values()))}],["children",[n.createElement(E,{key:"left",children:"Left"}),n.createElement(E,{key:"middle",children:"Middle"}),n.createElement(E,{key:"right",children:"Right"})]]]),n.createElement(re,s(o)))]),l.exports.createElement(le,d(),...i))),b(()=>{let c;return k(r)?C(l.exports.createElement("p",{children:["No selection"]})):k(F(r))?C((c=`Current selection (controlled): ${T(r)}`,l.exports.createElement("p",{children:[c]}))):C(l.exports.createElement("p",{children:["No selection"]}))}))})),l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function Ts(){return l.exports.createElement(g,{title:"Selection (multiple)",code:`let selected, setSelected = React.useState([ "Sidebar"; "Console" ])

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=V(a(["Sidebar","Console"])),c=o[0];return C((e=[(t=a([["closeOnSelect",!1],["children",[l.exports.createElement(R,d(),"Show"),(r=a([["selectionMode","multiple"],["selectedKeys",c],["onSelectionChange",m=>{o[1](pe(m.values()))}],["children",[n.createElement(E,{key:"Sidebar",children:"Sidebar"}),n.createElement(E,{key:"Searchbar",children:"Searchbar"}),n.createElement(E,{key:"Tools",children:"Tools"}),n.createElement(E,{key:"Console",children:"Console"})]]]),n.createElement(re,s(r)))]]]),n.createElement(le,s(t))),(i=`Current selection (controlled): ${Ct(c)}`,l.exports.createElement("p",{children:[i]}))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function Fs(){return l.exports.createElement(g,{title:"Sections",code:`let selected, setSelected = React.useState([ "bold"; "left" ])

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=V(a(["bold","left"]));return C((e=a([l.exports.createElement(R,d(),"Edit"),(t=a([["selectionMode","multiple"],["selectedKeys",o[0]],["onSelectionChange",c=>{o[1](pe(c.values()))}],["children",[(r=a([["title","Styles"],["children",[n.createElement(E,{key:"bold",children:"Bold"}),n.createElement(E,{key:"underline",children:"Underline"})]]]),n.createElement(Ee,s(r))),(i=a([["title","Align"],["children",[n.createElement(E,{key:"left",children:"Left"}),n.createElement(E,{key:"middle",children:"Middle"}),n.createElement(E,{key:"right",children:"Right"})]]]),n.createElement(Ee,s(i)))]]]),n.createElement(re,s(t)))]),l.exports.createElement(le,d(),...e)))}))})}function _s(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A,I,M,_;return l.exports.createElement(g,{title:"Complex items",code:`Spectrum.MenuTrigger [
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
]`,description:d(),elements:u((e=a([l.exports.createElement(R,d(),"Edit"),(t=a([(r=a([["key","cut"],["textValue","Cut"],(i=[(o=Yl,n.createElement(o,{size:"S"})),(c=u(["children",n.Children.toArray(["Cut"])]),n.createElement(v,s(c))),(m=u(["children",n.Children.toArray(["\u2318X"])]),n.createElement(xn,s(m)))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(E,s(r))),(p=a([["key","copy"],["textValue","Copy"],(h=[(f=tr,n.createElement(f,{size:"S"})),(x=u(["children",n.Children.toArray(["Copy"])]),n.createElement(v,s(x))),(y=u(["children",n.Children.toArray(["\u2318C"])]),n.createElement(xn,s(y)))],["children",n.Children.toArray(Array.from(h))])]),n.createElement(E,s(p))),(S=a([["key","paste"],["textValue","Paste"],(A=[(I=Xl,n.createElement(I,{size:"S"})),(M=u(["children",n.Children.toArray(["Paste"])]),n.createElement(v,s(M))),(_=u(["children",n.Children.toArray(["\u2318V"])]),n.createElement(xn,s(_)))],["children",n.Children.toArray(Array.from(A))])]),n.createElement(E,s(S)))]),l.exports.createElement(re,d(),...t))]),l.exports.createElement(le,d(),...e)))})}function Bs(){return l.exports.createElement(g,{title:"Disabled keys",code:`let items = [
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
]`,description:d(),elements:w(b(()=>{let e,t;const r=a([{id:"a1b2c3",name:"tiff"},{id:"g5h1j9",name:"png"},{id:"p8k3i4",name:"jpg"},{id:"j7i3a0",name:"PDF"}]);return C((e=a([l.exports.createElement(R,d(),"Filter"),(t=a([["items",(i=>Array.from(i))(r)],["disabledKeys",["a1b2c3","p8k3i4"]],["children",i=>n.createElement(E,{children:i.name})]]),n.createElement(re,s(t)))]),l.exports.createElement(le,d(),...e)))}))})}function Ds(){const e=a(["Menus display a list of actions or options that a user can choose.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Menu.html"})," for more details."]);return l.exports.createElement(z,{title:"Menu",description:e,examples:a([l.exports.createElement(vs,null),l.exports.createElement(ws,null),l.exports.createElement(ks,null),l.exports.createElement(Is,null),l.exports.createElement(Ts,null),l.exports.createElement(Fs,null),l.exports.createElement(_s,null),l.exports.createElement(Bs,null)])})}function Vs(){return l.exports.createElement(g,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c,m,p,h,f,x,y,S,A;const I=V(!1);return C((e=a([["gap","size-100"],["alignItems","center"],(t=[(r=a([["onOpenChange",I[1]],["children",[l.exports.createElement(R,d(),"Edit"),(i=a([(o=a([["key","cut"],["textValue","Cut"],(c=[(m=u(["children",n.Children.toArray(["Cut"])]),n.createElement(v,s(m)))],["children",n.Children.toArray(Array.from(c))])]),n.createElement(E,s(o))),(p=a([["key","copy"],["textValue","Copy"],(h=[(f=u(["children",n.Children.toArray(["Copy"])]),n.createElement(v,s(f)))],["children",n.Children.toArray(Array.from(h))])]),n.createElement(E,s(p))),(x=a([["key","paste"],["textValue","Paste"],(y=[(S=u(["children",n.Children.toArray(["Paste"])]),n.createElement(v,s(S)))],["children",n.Children.toArray(Array.from(y))])]),n.createElement(E,s(x)))]),l.exports.createElement(re,d(),...i))]]]),n.createElement(le,s(r))),(A=`Currently open: ${I[0]}`,l.exports.createElement("div",{children:[A]}))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Ns(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A;return l.exports.createElement(g,{title:"Alignment and direction",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["gap","size-100"],(t=[(r=a([["align","start"],["children",[(i=u(["children",n.Children.toArray(["Edit"])]),n.createElement(R,s(i))),(o=a([n.createElement(E,{key:"cut",children:"Cut"}),n.createElement(E,{key:"copy",children:"Copy"}),n.createElement(E,{key:"paste",children:"Paste"})]),l.exports.createElement(re,d(),...o))]]]),n.createElement(le,s(r))),(c=a([["align","end"],["direction","top"],["shouldFlip",!1],["children",[(m=u(["children",n.Children.toArray(["View"])]),n.createElement(R,s(m))),(p=a([n.createElement(E,{key:"sidebar",children:"Sidebar"}),n.createElement(E,{key:"options",children:"Page options"}),n.createElement(E,{key:"edit",children:"Edit panel"})]),l.exports.createElement(re,d(),...p))]]]),n.createElement(le,s(c))),(h=a([["align","start"],["direction","start"],["children",[(f=u(["children",n.Children.toArray(["Edit"])]),n.createElement(R,s(f))),(x=a([n.createElement(E,{key:"cut",children:"Cut"}),n.createElement(E,{key:"copy",children:"Copy"}),n.createElement(E,{key:"paste",children:"Paste"})]),l.exports.createElement(re,d(),...x))]]]),n.createElement(le,s(h))),(y=a([["align","end"],["direction","end"],["children",[(S=u(["children",n.Children.toArray(["View"])]),n.createElement(R,s(S))),(A=a([n.createElement(E,{key:"sidebar",children:"Sidebar"}),n.createElement(E,{key:"options",children:"Page options"}),n.createElement(E,{key:"edit",children:"Edit panel"})]),l.exports.createElement(re,d(),...A))]]]),n.createElement(le,s(y)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Ms(){return l.exports.createElement(g,{title:"Open and selection",code:`let isOpen, setIsOpen = React.useState(false)
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c,m,p,h,f,x;const y=V(!1),S=V(d());return C((e=a([["isOpen",y[0]],["onOpenChange",y[1]],["children",[l.exports.createElement(R,d(),"View"),(t=a([["selectionMode","multiple"],["selectedKeys",S[0]],["onSelectionChange",A=>{S[1](pe(A.values()))}],["children",[(r=a([["key","side"],["textValue","Sidebar"],(i=[(o=u(["children",n.Children.toArray(["Sidebar"])]),n.createElement(v,s(o)))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(E,s(r))),(c=a([["key","options"],["textValue","Page options"],(m=[(p=u(["children",n.Children.toArray(["Page options"])]),n.createElement(v,s(p)))],["children",n.Children.toArray(Array.from(m))])]),n.createElement(E,s(c))),(h=a([["key","edit"],["textValue","Edit panel"],(f=[(x=u(["children",n.Children.toArray(["Edit panel"])]),n.createElement(v,s(x)))],["children",n.Children.toArray(Array.from(f))])]),n.createElement(E,s(h)))]]]),n.createElement(re,s(t)))]]]),n.createElement(le,s(e))))}))})}function zs(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A,I,M,_;return l.exports.createElement(g,{title:"Long press",code:`Spectrum.MenuTrigger [
    MenuTrigger.trigger MenuTriggerType.LongPress
    MenuTrigger.children [
        Spectrum.ActionButton [
            ActionButton.ariaLabel "Crop tool"
            ActionButton.onPress (fun _ -> Browser.Dom.window.alert("Cropping!"))
            ActionButton.children [
                Spectrum.Icon.Crop []
            ]
        ]
        Spectrum.Menu [
            Spectrum.Item [
                Item.textValue "Crop rotate"
                Item.children [
                    Spectrum.Icon.CropRotate []
                    Spectrum.Text "Crop rotate"
                ]
            ]
            Spectrum.Item [
                Item.textValue "Slice"
                Item.children [
                    Spectrum.Icon.Slice []
                    Spectrum.Text "Slice"
                ]
            ]
            Spectrum.Item [
                Item.textValue "Clone stamp"
                Item.children [
                    Spectrum.Icon.CloneStamp []
                    Spectrum.Text "Clone stamp"
                ]
            ]
        ]
    ]
]`,description:d(),elements:u((e=a([["trigger","longPress"],["children",[(t=a([["aria-label","Crop tool"],["onPress",G=>{window.alert(U("Cropping!"))}],(r=[(i=Zl,n.createElement(i,{}))],["children",n.Children.toArray(Array.from(r))])]),n.createElement(R,s(t))),(o=a([(c=a([["textValue","Crop rotate"],(m=[(p=Ql,n.createElement(p,{})),(h=u(["children",n.Children.toArray(["Crop rotate"])]),n.createElement(v,s(h)))],["children",n.Children.toArray(Array.from(m))])]),n.createElement(E,s(c))),(f=a([["textValue","Slice"],(x=[(y=ei,n.createElement(y,{})),(S=u(["children",n.Children.toArray(["Slice"])]),n.createElement(v,s(S)))],["children",n.Children.toArray(Array.from(x))])]),n.createElement(E,s(f))),(A=a([["textValue","Clone stamp"],(I=[(M=ti,n.createElement(M,{})),(_=u(["children",n.Children.toArray(["Clone stamp"])]),n.createElement(v,s(_)))],["children",n.Children.toArray(Array.from(I))])]),n.createElement(E,s(A)))]),l.exports.createElement(re,d(),...o))]]]),n.createElement(le,s(e))))})}function Rs(){const e=a(["The MenuTrigger serves as a wrapper around a Menu and its associated trigger, linking the Menu's open state with the trigger's press state.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html"})," for more details."]);return l.exports.createElement(z,{title:"MenuTrigger",description:e,examples:a([l.exports.createElement(Vs,null),l.exports.createElement(Ns,null),l.exports.createElement(Ms,null),l.exports.createElement(zs,null)])})}function Ps(){let e,t,r,i,o,c,m,p;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.TableView [
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
]`,description:d(),elements:u((e=a([["aria-label","Example table with static contents"],["selectionMode","multiple"],["children",[(t=a([n.createElement(Zt,{children:"Name"}),n.createElement(Zt,{children:"Type"}),(r=a([["align","end"],["children",["Date Modified"]]]),n.createElement(Zt,s(r)))]),l.exports.createElement(nr,d(),...t)),(i=a([(o=a([n.createElement(ue,{children:"Games"}),n.createElement(ue,{children:"File folder"}),n.createElement(ue,{children:"6/7/2020"})]),l.exports.createElement(yt,d(),...o)),(c=a([n.createElement(ue,{children:"Program Files"}),n.createElement(ue,{children:"File folder"}),n.createElement(ue,{children:"4/7/2021"})]),l.exports.createElement(yt,d(),...c)),(m=a([n.createElement(ue,{children:"bootmgr"}),n.createElement(ue,{children:"System file"}),n.createElement(ue,{children:"11/20/2010"})]),l.exports.createElement(yt,d(),...m)),(p=a([n.createElement(ue,{children:"log.txt"}),n.createElement(ue,{children:"Text Document"}),n.createElement(ue,{children:"1/18/2016"})]),l.exports.createElement(yt,d(),...p))]),l.exports.createElement(rr,d(),...i))]]]),n.createElement(lr,s(e))))})}function Ls(){return l.exports.createElement(g,{title:"More complex example",code:`let columns = [
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
]`,description:d(),elements:w(b(()=>{let e,t;const r=a([{date:"6/7/2020",entryType:"File folder",id:1,name:"Games"},{date:"4/7/2021",entryType:"File folder",id:2,name:"Program Files"},{date:"11/20/2010",entryType:"System file",id:3,name:"bootmgr"},{date:"1/18/2016",entryType:"Text Document",id:4,name:"log.txt"}]);return C((e=a([["aria-label","Example table with dynamic content"],["maxWidth","size-6000"],["selectionMode","multiple"],["disabledKeys",[3]],["children",[(t=a([["columns",(i=>Array.from(i))([{name:"Name",uid:"name"},{name:"Type",uid:"entryType"},{name:"Date Modified",uid:"date"}])],["children",i=>{const o=a([["key",i.uid],["align",i.uid==="date"?"end":"start"],["children",[i.name]]]);return n.createElement(Zt,s(o))}]]),n.createElement(nr,s(t))),n.createElement(rr,{items:r,children:i=>n.createElement(yt,{children:o=>{const c=i[o];return n.createElement(ue,{children:c})}})})]]]),n.createElement(lr,s(e))))}))})}function Gs(){return l.exports.createElement(g,{title:"Layout + highlight selection + action",code:`let columns = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=a([{id:"firstName",name:"First Name"},{id:"lastName",name:"Last Name"},{id:"city",name:"City"}]),c=a([{city:"Sibiu",firstName:"George",id:1,lastName:"Danila"},{city:"Tilburg",firstName:"Andras",id:2,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:3,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:4,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:5,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:6,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:7,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:8,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:9,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:10,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:11,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:12,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:13,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:14,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:15,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:16,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:17,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:18,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:19,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:20,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:21,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:22,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:23,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:24,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:25,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:26,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:27,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:28,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:29,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:30,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:31,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:32,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:33,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:34,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:35,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:36,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:37,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:38,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:39,lastName:"Jaram"},{city:"Lai Cach",firstName:"Northrop",id:40,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:41,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:42,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:43,lastName:"Jaram"},{city:"Tilburg",firstName:"Andras",id:44,lastName:"Rodmell"},{city:"Hollola",firstName:"Hansiain",id:45,lastName:"Muino"},{city:"Lai Cach",firstName:"Northrop",id:46,lastName:"Adnet"},{city:"Laspezia",firstName:"Giana",id:47,lastName:"Phython"},{city:"Tipaz",firstName:"Maud",id:48,lastName:"Jaram"},{city:"Testing",firstName:"Maud",id:49,lastName:"Jaram"}]);return C((e=a([["height","size-5000"],["width","100%"],["direction","column"],["gap","size-150"],(t=[n.createElement(R,{alignSelf:"start",children:"Add"}),(r=a([["flex",!0],["aria-label","Example table with dynamic content"],["selectionMode","single"],["selectionStyle","highlight"],["onAction",m=>{window.alert(U(m))}],["children",[(i=a([["columns",(m=>Array.from(m))(o)],["children",m=>{const p=a([["key",m.id],["children",[m.name]]]);return n.createElement(Zt,s(p))}]]),n.createElement(nr,s(i))),n.createElement(rr,{items:c,children:m=>n.createElement(yt,{children:p=>{const h=Pe(m[p]);return n.createElement(ue,{children:h})}})})]]]),n.createElement(lr,s(r)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function $s(){const e=a(["Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TableView.html"})," for more details.",l.exports.createElement("br",{}),l.exports.createElement("br",{}),"Please note that the following examples require the you to open ",l.exports.createElement("em",{children:["Fable.Core.JsInterop"]})," in order to access the dynamic operator (?)."]);return l.exports.createElement(z,{title:"TableView",description:e,examples:a([l.exports.createElement(Ps,null),l.exports.createElement(Ls,null),l.exports.createElement(Gs,null)])})}function Hs(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Checkbox [
    Checkbox.content "Unsubscribe"
]`,description:d(),elements:u((e=u(["children",n.Children.toArray(["Unsubscribe"])]),n.createElement($,s(e))))})}function Os(){return l.exports.createElement(g,{title:"Value",code:`let selected, setSelected = React.useState(true)
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=V(!0);return C((e=a([["direction","row"],(t=[(r=a([["defaultSelected",!0],["children",n.Children.toArray(["Subscribe (uncontrolled)"])]]),n.createElement($,s(r))),(i=a([["isSelected",o[0]],["onChange",o[1]],["children",n.Children.toArray(["Subscribe (controlled)"])]]),n.createElement($,s(i)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Ws(){let e;return l.exports.createElement(g,{title:"Indeterminate",code:`Spectrum.Checkbox [
    Checkbox.isIndeterminate true
    Checkbox.content "Subscribe"
]`,description:d(),elements:u((e=a([["isIndeterminate",!0],["children",n.Children.toArray(["Subscribe"])]]),n.createElement($,s(e))))})}function qs(){return l.exports.createElement(g,{title:"Events",code:`let selected, setSelected = React.useState(false)
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
    ]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=V(!1),c=o[0];return C((e=a([["direction","column"],(t=[(r=a([["isSelected",c],["onChange",o[1]],["children",n.Children.toArray(["Subscribe"])]]),n.createElement($,s(r))),(i=w(b(()=>C(`You are ${c?"subscribed":"unsubscribed"}`))),l.exports.createElement(P,d(),...i))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Us(){let e;return l.exports.createElement(g,{title:"Validation",code:`Spectrum.Checkbox [
        Checkbox.validationState ValidationState.Invalid
        Checkbox.content "I accept the terms and conditions"
    ]`,description:d(),elements:u((e=a([["validationState","invalid"],["children",n.Children.toArray(["I accept the terms and conditions"])]]),n.createElement($,s(e))))})}function js(){const e=a(["Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Checkbox.html"})," for more details."]);return l.exports.createElement(z,{title:"Checkbox",description:e,examples:a([l.exports.createElement(Hs,null),l.exports.createElement(Os,null),l.exports.createElement(Ws,null),l.exports.createElement(qs,null),l.exports.createElement(Us,null)])})}function Ks(){let e,t,r,i,o;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.CheckboxGroup [
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
]`,description:d(),elements:u((e=a([["label","Favorite sports"],(t=[(r=a([["value","soccer"],["children",n.Children.toArray(["Soccer"])]]),n.createElement($,s(r))),(i=a([["value","baseball"],["children",n.Children.toArray(["Baseball"])]]),n.createElement($,s(i))),(o=a([["value","basketball"],["children",n.Children.toArray(["Basketball"])]]),n.createElement($,s(o)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(Ue,s(e))))})}function Js(){return l.exports.createElement(g,{title:"Value",code:`let selected, setSelected = React.useState([ "soccer"; "baseball" ])
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c,m,p,h,f,x,y,S,A,I;const M=V(a(["soccer","baseball"])),_=M[0];return C((e=a([["gap","size-300"],(t=[(r=a([["label","Favorite sports (uncontrolled)"],["defaultValue",["soccer","baseball"]],(i=[(o=a([["value","soccer"],["children",n.Children.toArray(["Soccer"])]]),n.createElement($,s(o))),(c=a([["value","baseball"],["children",n.Children.toArray(["Baseball"])]]),n.createElement($,s(c))),(m=a([["value","basketball"],["children",n.Children.toArray(["Basketball"])]]),n.createElement($,s(m)))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(Ue,s(r))),(p=a([["direction","column"],["gap","size-200"],(h=[(f=a([["label","Favorite sports (controlled)"],["value",Array.from(_)],["onChange",G=>{M[1](pe(G))}],(x=[(y=a([["value","soccer"],["children",n.Children.toArray(["Soccer"])]]),n.createElement($,s(y))),(S=a([["value","baseball"],["children",n.Children.toArray(["Baseball"])]]),n.createElement($,s(S))),(A=a([["value","basketball"],["children",n.Children.toArray(["Basketball"])]]),n.createElement($,s(A)))],["children",n.Children.toArray(Array.from(x))])]),n.createElement(Ue,s(f))),(I=`Selected: ${Nn(", ",_)}`,l.exports.createElement("p",{children:[I]}))],["children",n.Children.toArray(Array.from(h))])]),n.createElement(B,s(p)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Ys(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A,I,M,_,G,Q,se,Y,me;return l.exports.createElement(g,{title:"Labeling",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["gap","size-300"],["wrap",!0],(t=[(r=a([["label","Favorite sports"],(i=[(o=a([["value","soccer"],["children",n.Children.toArray(["Soccer"])]]),n.createElement($,s(o))),(c=a([["value","baseball"],["children",n.Children.toArray(["Baseball"])]]),n.createElement($,s(c))),(m=a([["value","basketball"],["children",n.Children.toArray(["Basketball"])]]),n.createElement($,s(m)))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(Ue,s(r))),(p=a([["label","Favorite sports"],["isRequired",!0],["necessityIndicator","icon"],(h=[(f=a([["value","soccer"],["children",n.Children.toArray(["Soccer"])]]),n.createElement($,s(f))),(x=a([["value","baseball"],["children",n.Children.toArray(["Baseball"])]]),n.createElement($,s(x))),(y=a([["value","basketball"],["children",n.Children.toArray(["Basketball"])]]),n.createElement($,s(y)))],["children",n.Children.toArray(Array.from(h))])]),n.createElement(Ue,s(p))),(S=a([["label","Favorite sports"],["isRequired",!0],["necessityIndicator","label"],(A=[(I=a([["value","soccer"],["children",n.Children.toArray(["Soccer"])]]),n.createElement($,s(I))),(M=a([["value","baseball"],["children",n.Children.toArray(["Baseball"])]]),n.createElement($,s(M))),(_=a([["value","basketball"],["children",n.Children.toArray(["Basketball"])]]),n.createElement($,s(_)))],["children",n.Children.toArray(Array.from(A))])]),n.createElement(Ue,s(S))),(G=a([["label","Favorite sports"],["necessityIndicator","label"],(Q=[(se=a([["value","soccer"],["children",n.Children.toArray(["Soccer"])]]),n.createElement($,s(se))),(Y=a([["value","baseball"],["children",n.Children.toArray(["Baseball"])]]),n.createElement($,s(Y))),(me=a([["value","basketball"],["children",n.Children.toArray(["Basketball"])]]),n.createElement($,s(me)))],["children",n.Children.toArray(Array.from(Q))])]),n.createElement(Ue,s(G)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Xs(){return l.exports.createElement(g,{title:"Validation",code:`let selected, setSelected = React.useState([])
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
]`,description:d(),elements:w(b(()=>{let e;const t=V(d()),r=t[0];return C((e=w(b(()=>L(C(["label","Sandwich condiments"]),b(()=>L(C(["value",Array.from(r)]),b(()=>L(C(["onChange",i=>{t[1](pe(i))}]),b(()=>L(C(["isRequired",!0]),b(()=>L(El(r)===0?C(["validationState","invalid"]):Rn(),b(()=>{let i,o,c,m,p;return C((i=[(o=a([["value","lettuce"],["children",n.Children.toArray(["Lettuce"])]]),n.createElement($,s(o))),(c=a([["value","tomato"],["children",n.Children.toArray(["Tomato"])]]),n.createElement($,s(c))),(m=a([["value","onion"],["children",n.Children.toArray(["Onion"])]]),n.createElement($,s(m))),(p=a([["value","sprouts"],["children",n.Children.toArray(["Sprouts"])]]),n.createElement($,s(p)))],["children",n.Children.toArray(Array.from(i))]))})))))))))))),n.createElement(Ue,s(e))))}))})}function Zs(){const e=a(["A CheckboxGroup allows users to select one or more items from a list of choices.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html"})," for more details."]);return l.exports.createElement(z,{title:"CheckboxGroup",description:e,examples:a([l.exports.createElement(Ks,null),l.exports.createElement(Js,null),l.exports.createElement(Ys,null),l.exports.createElement(Xs,null)])})}function Qs(){let e,t,r;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Form [
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
]`,description:d(),elements:u((e=a([["maxWidth","size-3600"],(t=[n.createElement(O,{label:"Email",type:"email",placeholder:"abc@adobe.com"}),n.createElement(O,{label:"Password",type:"password",placeholder:"1234"}),(r=u(["children",n.Children.toArray(["Remember me"])]),n.createElement($,s(r)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(xt,s(e))))})}function em(){let e,t;return l.exports.createElement(g,{title:"Content",code:`Spectrum.Form [
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
]`,description:d(),elements:u((e=a([["maxWidth","size-3600"],["isRequired",!0],["necessityIndicator","label"],(t=[n.createElement(O,{label:"Name",placeholder:"Jane Smith"}),n.createElement(O,{label:"Email",placeholder:"abc@adobe.com"}),n.createElement(O,{label:"Address",placeholder:"123 Any Street",isRequired:!1})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(xt,s(e))))})}function tm(){let e,t,r,i,o;return l.exports.createElement(g,{title:"Labeling",code:`React.fragment [
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
]`,description:d(),elements:u((e=[l.exports.createElement("h3",{id:"label-3",children:n.Children.toArray(["Personal Information"])}),(t=a([["maxWidth","size-3600"],["aria-labelledby","label-3"],(r=[n.createElement(O,{label:"First Name",placeholder:"John"}),n.createElement(O,{label:"Last Name",placeholder:"Smith"}),(i=a([["label","Favorite pet"],(o=[n.createElement(ne,{value:"dogs",children:"Dogs"}),n.createElement(ne,{value:"cats",children:"Cats"}),n.createElement(ne,{value:"dragons",children:"Dragons"})],["children",n.Children.toArray(Array.from(o))])]),n.createElement(mt,s(i)))],["children",n.Children.toArray(Array.from(r))])]),n.createElement(xt,s(t)))],l.exports.createElement(l.exports.Fragment,{},...e)))})}function nm(){let e,t;return l.exports.createElement(g,{title:"Quiet",code:`Spectrum.Form [
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
]`,description:d(),elements:u((e=a([["isQuiet",!0],["aria-label","Quiet example"],["maxWidth","size-3600"],(t=[n.createElement(O,{label:"Name",placeholder:"John Smith"}),n.createElement(O,{label:"Address",placeholder:"123 Any Street"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(xt,s(e))))})}function rm(){const e=a(["Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Form.html"})," for more details."]);return l.exports.createElement(z,{title:"Form",description:e,examples:a([l.exports.createElement(Qs,null),l.exports.createElement(em,null),l.exports.createElement(tm,null),l.exports.createElement(nm,null)])})}function lm(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.NumberField [
    NumberField.label "Width"
    NumberField.defaultValue 1024
    NumberField.minValue 0
]`,description:d(),elements:u(n.createElement(xe,{label:"Width",defaultValue:1024,minValue:0}))})}function im(){return l.exports.createElement(g,{title:"Value",code:`let value, setValue = React.useState(15)
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
]`,description:d(),elements:w(b(()=>{let e,t;const r=V(15);return C((e=a([["gap","size-150"],["wrap",!0],(t=[n.createElement(xe,{width:"200px",label:"Cookies (uncontrolled)",defaultValue:15,minValue:0}),n.createElement(xe,{width:"200px",label:"Cookies (controlled)",value:r[0],onChange:r[1],minValue:0})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function om(){let e;return l.exports.createElement(g,{title:"Number formatting",code:`Spectrum.NumberField [
    NumberField.label "Adjust exposure"
    NumberField.defaultValue 0
    NumberField.formatOptions <| NumberFormat.make(
        signDisplay = NumberFormatSignDisplay.ExceptZero,
        minimumFractionDigits = 1,
        maximumFractionDigits = 2)
]`,description:d(),elements:u((e=a([["label","Adjust exposure"],["defaultValue",0],["formatOptions",{localeMatcher:void 0,style:void 0,currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:"exceptZero",notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:1,maximumFractionDigits:2,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}]]),n.createElement(xe,s(e))))})}function am(){let e;return l.exports.createElement(g,{title:"Percentage",code:`Spectrum.NumberField [
    NumberField.label "Sales tax"
    NumberField.defaultValue 0.05
    NumberField.minValue 0
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Percent)
]`,description:d(),elements:u((e=a([["label","Sales tax"],["defaultValue",.05],["minValue",0],["formatOptions",{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}]]),n.createElement(xe,s(e))))})}function cm(){let e;return l.exports.createElement(g,{title:"Currency values",code:`Spectrum.NumberField [
    NumberField.label "Transaction amount"
    NumberField.defaultValue 45
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Currency,
        currency = "EUR",
        currencyDisplay = NumberFormatCurrencyDisplay.Symbol,
        currencySign = NumberFormatCurrencySign.Accounting)
]`,description:d(),elements:u((e=a([["label","Transaction amount"],["defaultValue",45],["formatOptions",{localeMatcher:void 0,style:"currency",currency:"EUR",currencyDisplay:"symbol",currencySign:"accounting",useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}]]),n.createElement(xe,s(e))))})}function sm(){let e;return l.exports.createElement(g,{title:"Units",code:`Spectrum.NumberField [
    NumberField.label "Package width"
    NumberField.defaultValue 4
    NumberField.minValue 0
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Unit,
        unit = "inch",
        unitDisplay = NumberFormatUnitDisplay.Long)
]`,description:d(),elements:u((e=a([["label","Package width"],["defaultValue",4],["minValue",0],["formatOptions",{localeMatcher:void 0,style:"unit",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:"inch",unitDisplay:"long",minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}]]),n.createElement(xe,s(e))))})}function mm(){let e,t;return l.exports.createElement(g,{title:"Step values",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","column"],["gap","size-150"],(t=[n.createElement(xe,{label:"Step",step:10}),n.createElement(xe,{label:"Step + minValue",step:3,minValue:2}),n.createElement(xe,{label:"Step + minValue + maxValue",step:3,minValue:2,maxValue:21})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function um(){return l.exports.createElement(g,{title:"Events",code:`let value, setValue = React.useState(0)
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
]`,description:d(),elements:w(b(()=>{let e,t,r;const i=V(0);return C((e=a([["direction","column"],["gap","size-150"],(t=[n.createElement(xe,{onChange:i[1],label:"Number of cookies to buy",minValue:0}),(r=`How many cookies you are ordering: ${i[0]}`,l.exports.createElement("pre",{children:[r]}))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function dm(){return l.exports.createElement(g,{title:"Validation",code:`let value, setValue = React.useState(15)
let isValid = React.useMemo ((fun () -> value % 3 = 0 && value % 5 = 0), [| value |])
Spectrum.NumberField [
    NumberField.value value
    NumberField.onChange setValue
    NumberField.label "FizzBuzz values only"
    NumberField.validationState isValid
]`,description:d(),elements:w(b(()=>{let e;const t=V(15),r=t[0]|0;return C((e=a([["value",r],["onChange",t[1]],["label","FizzBuzz values only"],oe(()=>r%3===0&&r%5===0,[r])?["validationState","valid"]:["validationState","invalid"]]),n.createElement(xe,s(e))))}))})}function pm(){return l.exports.createElement(g,{title:"Help text",code:`let value, setValue = React.useState(1)
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
]`,description:d(),elements:w(b(()=>{let e;const t=V(1),r=t[0]|0,i=oe(()=>r>0?!0:isNaN(r),[r]);return C((e=w(b(()=>L(C(i?["validationState","valid"]:["validationState","invalid"]),b(()=>L(C(["value",r]),b(()=>L(C(["onChange",t[1]]),b(()=>L(C(["label","Positive numbers only"]),b(()=>L(C(["description","Enter a positive number."]),b(()=>C(r===0?["errorMessage","Is zero positive?"]:["errorMessage","Positive numbers are bigger than 0."]))))))))))))),n.createElement(xe,s(e))))}))})}function hm(){const e=a(["NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/NumberField.html"})," for more details."]);return l.exports.createElement(z,{title:"NumberField",description:e,examples:a([l.exports.createElement(lm,null),l.exports.createElement(im,null),l.exports.createElement(om,null),l.exports.createElement(am,null),l.exports.createElement(cm,null),l.exports.createElement(sm,null),l.exports.createElement(mm,null),l.exports.createElement(um,null),l.exports.createElement(dm,null),l.exports.createElement(pm,null)])})}function fm(){let e,t;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.RadioGroup [
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
]`,description:d(),elements:u((e=a([["label","Favorite pet"],(t=[n.createElement(ne,{value:"dogs",children:"Dogs"}),n.createElement(ne,{value:"cats",children:"Cats"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(mt,s(e))))})}function xm(){return l.exports.createElement(g,{title:"Value",code:`let selected, setSelected = React.useState("yes")

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c;const m=V("yes");return C((e=a([["gap","size-300"],(t=[(r=a([["label","Are you a wizard? (uncontrolled)"],["defaultValue","yes"],(i=[n.createElement(ne,{value:"yes",children:"Yes"}),n.createElement(ne,{value:"no",children:"No"})],["children",n.Children.toArray(Array.from(i))])]),n.createElement(mt,s(r))),(o=a([["label","Are you a wizard? (controlled)"],["value",m[0]],["onChange",m[1]],(c=[n.createElement(ne,{value:"yes",children:"Yes"}),n.createElement(ne,{value:"no",children:"No"})],["children",n.Children.toArray(Array.from(c))])]),n.createElement(mt,s(o)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function gm(){return l.exports.createElement(g,{title:"Events",code:`let selected, setSelected = React.useState("")

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=V(""),c=o[0];return C((e=[(t=a([["label","Favorite avatar"],["value",c],["onChange",o[1]],(r=[n.createElement(ne,{value:"wizard",children:"Wizard"}),n.createElement(ne,{value:"dragon",children:"Dragon"})],["children",n.Children.toArray(Array.from(r))])]),n.createElement(mt,s(t))),(i=`You have selected: ${c}`,l.exports.createElement("div",{children:[i]}))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function Em(){let e,t;return l.exports.createElement(g,{title:"Orientation",code:`Spectrum.RadioGroup [
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
]`,description:d(),elements:u((e=a([["label","Favorite avatar"],["orientation","horizontal"],(t=[n.createElement(ne,{value:"wizard",children:"Wizard"}),n.createElement(ne,{value:"dragon",children:"Dragon"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(mt,s(e))))})}function Sm(){const e=a(["Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RadioGroup.html"})," for more details."]);return l.exports.createElement(z,{title:"RadioGroup",description:e,examples:a([l.exports.createElement(fm,null),l.exports.createElement(xm,null),l.exports.createElement(gm,null),l.exports.createElement(Em,null)])})}function ym(){return l.exports.createElement(g,{title:"Default example",code:`let submittedText, setSubmittedText = React.useState("")
React.fragment [
    Spectrum.SearchField [
        SearchField.label "Search"
        SearchField.placeholder "Enter text"
        SearchField.onSubmit setSubmittedText
    ]
    Html.p $"Submitted text: {submittedText}"
]`,description:d(),elements:w(b(()=>{let e,t;const r=V("");return C((e=[n.createElement(En,{label:"Search",placeholder:"Enter text",onSubmit:r[1]}),(t=`Submitted text: ${r[0]}`,l.exports.createElement("p",{children:[t]}))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function bm(){return l.exports.createElement(g,{title:"Value",code:`let searchValue, setSearchValue = React.useState("puppies")
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
]`,description:d(),elements:w(b(()=>{let e,t;const r=V("puppies");return C((e=a([["gap","size-300"],(t=[n.createElement(En,{defaultValue:"puppies",label:"Search (uncontrolled)"}),n.createElement(En,{value:r[0],onChange:r[1],label:"Search (controlled)"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Cm(){return l.exports.createElement(g,{title:"Properties",code:`let currentText, setCurrentText = React.useState("")
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=V(""),c=o[1],m=o[0],p=V("");return C((e=a([["direction","column"],(t=[n.createElement(En,{value:m,onChange:c,label:"Your text",placeholder:"Enter some text",onClear:()=>{c("")},onSubmit:p[1]}),(r=`Mirrored text: ${m}`,l.exports.createElement("pre",{children:[r]})),(i=`Submitted text: ${p[0]}`,l.exports.createElement("pre",{children:[i]}))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Am(){const e=a(["A SearchField is a text field designed for searches.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/SearchField.html"})," for more details."]);return l.exports.createElement(z,{title:"SearchField",description:e,examples:a([l.exports.createElement(ym,null),l.exports.createElement(bm,null),l.exports.createElement(Cm,null)])})}function vm(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Switch [
    Switch.content "Low power mode"
]`,description:d(),elements:u(n.createElement(kt,{children:"Low power mode"}))})}function wm(){return l.exports.createElement(g,{title:"Value",code:`let selected, setSelected = React.useState(false)
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=V(!1),c=o[0];return C((e=[n.createElement(kt,{defaultSelected:!0,children:"Low power mode (uncontrolled)"}),(t=a([["direction","column"],["gap","size-100"],(r=[n.createElement(kt,{isSelected:c,onChange:o[1],children:"Low power mode (controlled)"}),(i=`The switch is on: ${c}`,l.exports.createElement("div",{children:[i]}))],["children",n.Children.toArray(Array.from(r))])]),n.createElement(B,s(t)))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function km(){return l.exports.createElement(g,{title:"Disabled",code:`Spectrum.Switch [
    Switch.isDisabled true
    Switch.content "Switch label"
]`,description:d(),elements:u(n.createElement(kt,{isDisabled:!0,children:"Switch label"}))})}function Im(){return l.exports.createElement(g,{title:"Emphasized",code:`Spectrum.Switch [
    Switch.isEmphasized true
    Switch.defaultSelected true
    Switch.content "Switch label"
]`,description:d(),elements:u(n.createElement(kt,{isEmphasized:!0,defaultSelected:!0,children:"Switch label"}))})}function Tm(){return l.exports.createElement(g,{title:"Read-only",code:`Spectrum.Switch [
    Switch.isReadOnly true
    Switch.defaultSelected true
    Switch.content "Switch label"
]`,description:d(),elements:u(n.createElement(kt,{isReadOnly:!0,defaultSelected:!0,children:"Switch label"}))})}function Fm(){const e=a(["Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Switch.html"})," for more details."]);return l.exports.createElement(z,{title:"Switch",description:e,examples:a([l.exports.createElement(vm,null),l.exports.createElement(wm,null),l.exports.createElement(km,null),l.exports.createElement(Im,null),l.exports.createElement(Tm,null)])})}function _m(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.TextArea [
    TextArea.label "Name"
]`,description:d(),elements:u(n.createElement(ce,{label:"Name"}))})}function Bm(){return l.exports.createElement(g,{title:"Value",code:`let value, setValue = React.useState("This is on a wait list")
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
]`,description:d(),elements:w(b(()=>{let e,t;const r=V("This is on a wait list");return C((e=a([["gap","size-150"],["wrap",!0],(t=[n.createElement(ce,{label:"Notes (uncontrolled)",defaultValue:"This is on a wait list"}),n.createElement(ce,{label:"Notes (controlled)",value:r[0],onChange:r[1]})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Dm(){return l.exports.createElement(g,{title:"todo",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "abc@gmail.com"
]`,description:d(),elements:u(n.createElement(ce,{label:"Email",placeholder:"abc@gmail.com"}))})}function Vm(){let e,t;return l.exports.createElement(g,{title:"todo",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["gap","size-150"],["wrap",!0],(t=[n.createElement(ce,{label:"Street address"}),n.createElement(ce,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),n.createElement(ce,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),n.createElement(ce,{label:"Street address",necessityIndicator:"label"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Nm(){return l.exports.createElement(g,{title:"Events",code:`let text, setText = React.useState("")
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
]`,description:d(),elements:w(b(()=>{let e,t,r;const i=V("");return C((e=a([["gap","size-150"],["direction","column"],(t=[n.createElement(ce,{label:"Your text",placeholder:"Enter some text...",onChange:i[1]}),(r=`Mirrored text: ${i[0]}`,l.exports.createElement("pre",{children:[r]}))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Mm(){return l.exports.createElement(g,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")
let regex = System.Text.RegularExpressions.Regex("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

Spectrum.TextArea [
    TextArea.validationState isValid
    TextArea.placeholder "Enter your email"
    TextArea.value value
    TextArea.onChange setValue
    TextArea.label "Email"
    TextArea.errorMessage "Invalid email"
]`,description:d(),elements:w(b(()=>{let e;const t=V("me@email.com"),r=t[0];return C((e=a([oe(()=>Vn(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,r),[r])?["validationState","valid"]:["validationState","invalid"],["placeholder","Enter your email"],["value",r],["onChange",t[1]],["label","Email"],["errorMessage","Invalid email"]]),n.createElement(ce,s(e))))}))})}function zm(){return l.exports.createElement(g,{title:"Quiet",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isQuiet true
]`,description:d(),elements:u(n.createElement(ce,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function Rm(){return l.exports.createElement(g,{title:"Disabled",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isDisabled true
]`,description:d(),elements:u(n.createElement(ce,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function Pm(){return l.exports.createElement(g,{title:"Read-only",code:`Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isReadOnly true
]`,description:d(),elements:u(n.createElement(ce,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function Lm(){return l.exports.createElement(g,{title:"Label asignment and position",code:`Spectrum.TextArea [
    TextArea.label "Search"
    TextArea.labelPosition LabelPosition.Side
    TextArea.labelAlign Alignment.End
]`,description:d(),elements:u(n.createElement(ce,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function Gm(){return l.exports.createElement(g,{title:"Help text",code:`let value, setValue = React.useState("0")
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
]`,description:d(),elements:w(b(()=>{let e;const t=V("0"),r=t[0],i=oe(()=>Vn(/^\d$/g,r),[r]);return C((e=w(b(()=>L(C(i?["validationState","valid"]:["validationState","invalid"]),b(()=>L(C(["value",r]),b(()=>L(C(["onChange",t[1]]),b(()=>L(C(["label","Favorite number"]),b(()=>L(C(["maxLength",1]),b(()=>L(C(["description","Enter a single digit number"]),b(()=>C(r===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))),n.createElement(ce,s(e))))}))})}function $m(){const e=a(["TextAreas are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextArea.html"})," for more details."]);return l.exports.createElement(z,{title:"TextArea",description:e,examples:a([l.exports.createElement(_m,null),l.exports.createElement(Bm,null),l.exports.createElement(Dm,null),l.exports.createElement(Vm,null),l.exports.createElement(Nm,null),l.exports.createElement(Mm,null),l.exports.createElement(zm,null),l.exports.createElement(Rm,null),l.exports.createElement(Pm,null),l.exports.createElement(Lm,null),l.exports.createElement(Gm,null)])})}function Hm(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.TextField [
    TextField.label "Name"
]`,description:d(),elements:u(n.createElement(O,{label:"Name"}))})}function Om(){return l.exports.createElement(g,{title:"Value",code:`let value, setValue = React.useState("me@email.com")
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
]`,description:d(),elements:w(b(()=>{let e,t;const r=V("me@email.com");return C((e=a([["gap","size-150"],["wrap",!0],(t=[n.createElement(O,{label:"Email (uncontrolled)",defaultValue:"me@email.com"}),n.createElement(O,{label:"Email (controlled)",defaultValue:r[0],onChange:r[1]})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Wm(){return l.exports.createElement(g,{title:"Placeholder",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "abc@gmail.com"
]`,description:d(),elements:u(n.createElement(O,{label:"Email",placeholder:"abc@gmail.com"}))})}function qm(){let e,t;return l.exports.createElement(g,{title:"Labeling",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["gap","size-150"],["wrap",!0],(t=[n.createElement(O,{label:"Street address"}),n.createElement(O,{label:"Street address",isRequired:!0,necessityIndicator:"icon"}),n.createElement(O,{label:"Street address",isRequired:!0,necessityIndicator:"label"}),n.createElement(O,{label:"Street address",necessityIndicator:"label"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Um(){return l.exports.createElement(g,{title:"Events",code:`let text, setText = React.useState("")
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
]`,description:d(),elements:w(b(()=>{let e,t,r;const i=V("");return C((e=a([["gap","size-150"],["direction","column"],(t=[n.createElement(O,{label:"Your text",placeholder:"Enter some text...",onChange:i[1]}),(r=`Mirrored text: ${i[0]}`,l.exports.createElement("pre",{children:[r]}))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function jm(){return l.exports.createElement(g,{title:"Validation",code:`let value, setValue = React.useState("me@email.com")
let regex = System.Text.RegularExpressions.Regex("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

Spectrum.TextField [
    TextField.validationState (if isValid then ValidationState.Valid else ValidationState.Invalid)
    TextField.placeholder "Enter your email"
    TextField.value value
    TextField.onChange setValue
    TextField.label "Email"
    TextField.errorMessage "Invalid email"
]`,description:d(),elements:w(b(()=>{let e;const t=V("me@email.com"),r=t[0];return C((e=a([["validationState",oe(()=>Vn(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,r),[r])?"valid":"invalid"],["placeholder","Enter your email"],["value",r],["onChange",t[1]],["label","Email"],["errorMessage","Invalid email"]]),n.createElement(O,s(e))))}))})}function Km(){return l.exports.createElement(g,{title:"Quiet",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isQuiet true
]`,description:d(),elements:u(n.createElement(O,{label:"Email",placeholder:"Email Address",isQuiet:!0}))})}function Jm(){return l.exports.createElement(g,{title:"Disabled",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isDisabled true
]`,description:d(),elements:u(n.createElement(O,{label:"Email",placeholder:"Email Address",isDisabled:!0}))})}function Ym(){return l.exports.createElement(g,{title:"Read-only",code:`Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isReadOnly true
]`,description:d(),elements:u(n.createElement(O,{label:"Email",placeholder:"Email Address",isReadOnly:!0}))})}function Xm(){return l.exports.createElement(g,{title:"Label alignment and position",code:`Spectrum.TextField [
    TextField.label "Search"
    TextField.labelPosition LabelPosition.Side
    TextField.labelAlign Alignment.End
]`,description:d(),elements:u(n.createElement(O,{label:"Search",labelPosition:"side",labelAlign:"end"}))})}function Zm(){return l.exports.createElement(g,{title:"Help text",code:`let value, setValue = React.useState("0")
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
]`,description:d(),elements:w(b(()=>{let e;const t=V("0"),r=t[0],i=oe(()=>Vn(/^\d$/g,r),[r]);return C((e=w(b(()=>L(C(i?["validationState","valid"]:["validationState","invalid"]),b(()=>L(C(["value",r]),b(()=>L(C(["onChange",t[1]]),b(()=>L(C(["label","Favorite number"]),b(()=>L(C(["maxLength",1]),b(()=>L(C(["description","Enter a single digit number"]),b(()=>C(r===""?["errorMessage","Empty input not allowed"]:["errorMessage","Single digit numbers are 0-9"]))))))))))))))),n.createElement(O,s(e))))}))})}function Qm(){const e=a(["TextFields are text inputs that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/TextField.html"})," for more details."]);return l.exports.createElement(z,{title:"TextField",description:e,examples:a([l.exports.createElement(Hm,null),l.exports.createElement(Om,null),l.exports.createElement(Wm,null),l.exports.createElement(qm,null),l.exports.createElement(Um,null),l.exports.createElement(jm,null),l.exports.createElement(Km,null),l.exports.createElement(Jm,null),l.exports.createElement(Ym,null),l.exports.createElement(Xm,null),l.exports.createElement(Zm,null)])})}function eu(){let e,t,r,i,o,c,m,p,h;return l.exports.createElement(g,{title:"Icon size",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["gap","size-100"],(t=[(r=it,n.createElement(r,{["aria-label"]:"XXS Beaker",size:"XXS"})),(i=it,n.createElement(i,{["aria-label"]:"XS Beaker",size:"XS"})),(o=it,n.createElement(o,{["aria-label"]:"S Beaker",size:"S"})),(c=it,n.createElement(c,{["aria-label"]:"M Beaker",size:"M"})),(m=it,n.createElement(m,{["aria-label"]:"L Beaker",size:"L"})),(p=it,n.createElement(p,{["aria-label"]:"XL Beaker",size:"XL"})),(h=it,n.createElement(h,{["aria-label"]:"XXL Beaker",size:"XXL"}))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function tu(){let e,t,r,i,o,c,m;return l.exports.createElement(g,{title:"Coloring",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["gap","size-100"],(t=[(r=St,n.createElement(r,{["aria-label"]:"Default Alert"})),(i=St,n.createElement(i,{["aria-label"]:"Negative Alert",color:"negative"})),(o=St,n.createElement(o,{["aria-label"]:"Notification Alert",color:"notice"})),(c=St,n.createElement(c,{["aria-label"]:"Positive Alert",color:"positive"})),(m=St,n.createElement(m,{["aria-label"]:"Informative Alert",color:"informative"}))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function nu(){const e=a(["Workflow icons are graphical metaphors or symbols that can be used to compliment existing experiences.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"})," for more details."]);return l.exports.createElement(z,{title:"Workflow Icons",description:e,examples:a([l.exports.createElement(eu,null),l.exports.createElement(tu,null)])})}function ru(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Breadcrumbs [
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
]`,description:d(),elements:u((e=a([n.createElement(E,{key:"home",children:"Home"}),n.createElement(E,{key:"trendy",children:"Trendy"}),n.createElement(E,{key:"march 2020 assets",children:"March 2020 Assets"})]),l.exports.createElement(ot,d(),...e)))})}function lu(){return l.exports.createElement(g,{title:"Events",code:`let folders = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r;const i=a([{id:1,label:"Home"},{id:2,label:"Trendy"},{id:3,label:"March 2020 Assets"}]),o=V(void 0);return C((e=a([(t=a([["onAction",o[1]],["children",w(b(()=>dn(c=>n.createElement(E,{key:c.id,children:c.label}),i)))]]),n.createElement(ot,s(t))),(r=`You pressed folder ID: ${o[0]}`,l.exports.createElement("p",{children:[r]}))]),l.exports.createElement("div",{children:n.Children.toArray(Array.from(e))})))}))})}function iu(){let e,t,r,i,o;return l.exports.createElement(g,{title:"Sizes",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","column"],["gap","size-150"],(t=[(r=a([["size","S"],["children",[n.createElement(E,{key:"home",children:"Home"}),n.createElement(E,{key:"trendy",children:"Trendy"})]]]),n.createElement(ot,s(r))),(i=a([["size","M"],["children",[n.createElement(E,{key:"home",children:"Home"}),n.createElement(E,{key:"trendy",children:"Trendy"})]]]),n.createElement(ot,s(i))),(o=a([["size","L"],["children",[n.createElement(E,{key:"home",children:"Home"}),n.createElement(E,{key:"trendy",children:"Trendy"})]]]),n.createElement(ot,s(o)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function ou(){let e;return l.exports.createElement(g,{title:"Multiline",code:`Spectrum.Breadcrumbs [
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
]`,description:d(),elements:u((e=a([["isMultiline",!0],["children",[n.createElement(E,{key:"home",children:"Home"}),n.createElement(E,{key:"trendy",children:"Trendy"}),n.createElement(E,{key:"march 2020 assets",children:"March 2020 Assets"})]]]),n.createElement(ot,s(e))))})}function au(){let e,t,r;return l.exports.createElement(g,{title:"Root context",code:`Spectrum.View [
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
]`,description:d(),elements:u((e=a([["overflow","hidden"],["width","200px"],(t=[(r=a([["showRoot",!0],["children",[n.createElement(E,{key:"home",children:"Home"}),n.createElement(E,{key:"trendy",children:"Trendy"}),n.createElement(E,{key:"march 2020 assets",children:"March 2020 Assets"}),n.createElement(E,{key:"winter",children:"Winter"}),n.createElement(E,{key:"holiday",children:"Holiday"})]]]),n.createElement(ot,s(r)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(P,s(e))))})}function cu(){const e=a(["Breadcrumbs show hierarchy and navigational context for a user\u2019s location within an application.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html"})," for more details."]);return l.exports.createElement(z,{title:"Breadcrumbs",description:e,examples:a([l.exports.createElement(ru,null),l.exports.createElement(lu,null),l.exports.createElement(iu,null),l.exports.createElement(ou,null),l.exports.createElement(au,null)])})}function su(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Link [
    Html.a [
        prop.href "https://www.imdb.com/title/tt6348138/"
        prop.target.blank
        prop.children [ Html.text "The missing link" ]
    ]
]`,description:d(),elements:u((e=u(l.exports.createElement("a",{href:"https://www.imdb.com/title/tt6348138/",target:"_blank",children:n.Children.toArray(["The missing link"])})),l.exports.createElement(je,d(),...e)))})}function mu(){return l.exports.createElement(g,{title:"Plain-text content",code:`Spectrum.Link [
    Link.onPress <| fun _ -> Browser.Dom.window.alert("Pressed!")
    Link.content "A label"
]`,description:d(),elements:u(n.createElement(je,{onPress:e=>{window.alert(U("Pressed!"))},children:"A label"}))})}function uu(){let e,t,r,i,o,c,m;return l.exports.createElement(g,{title:"Variants",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","column"],(t=[(r=a(["Would you like to ",n.createElement(je,{variant:"primary",children:"learn more"})," about this fine component?"]),l.exports.createElement("p",{children:n.Children.toArray(Array.from(r))})),(i=a(["Would you like to ",n.createElement(je,{variant:"secondary",children:"learn more"})," about this fine component?"]),l.exports.createElement("p",{children:n.Children.toArray(Array.from(i))})),(o=a(["Would you like to ",n.createElement(je,{variant:"primary",isQuiet:!0,children:"learn more"})," about this fine component?"]),l.exports.createElement("p",{children:n.Children.toArray(Array.from(o))})),(c=a([["backgroundColor","positive"],["padding","size-300"],(m=[n.createElement(je,{variant:"overBackground",children:"learn more"})],["children",n.Children.toArray(Array.from(m))])]),n.createElement(P,s(c)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function du(){const e=a(["Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Link.html"})," for more details."]);return l.exports.createElement(z,{title:"Link",description:e,examples:a([l.exports.createElement(su,null),l.exports.createElement(mu,null),l.exports.createElement(uu,null)])})}function pu(){let e,t,r,i;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Tabs [
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
]`,description:d(),elements:u((e=a([["aria-label","History of Ancient Rome"],["defaultSelectedKey","FoR"],(t=[(r=u(["children",[n.createElement(E,{key:"FoR",children:"Founding of Rome"}),n.createElement(E,{key:"MaR",children:"Monarchy and Republic"}),n.createElement(E,{key:"Emp",children:"Empire"})]]),n.createElement(tn,s(r))),(i=u(["children",[n.createElement(E,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),n.createElement(E,{key:"MaR",children:"Senatus Populusque Romanus."}),n.createElement(E,{key:"Emp",children:"Alea jacta est."})]]),n.createElement(nn,s(i)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(rn,s(e))))})}function hu(){return l.exports.createElement(g,{title:"Dynamic content",code:`let tabs = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=a([{children:"Arma virumque cano, Troiae qui primus ab oris.",id:1,name:"Founding of Rome"},{children:"Senatus Populusque Romanus.",id:2,name:"Monarchy and Republic"},{children:"Alea jacta est.",id:3,name:"Empire"}]),c=V(1);return C((e=[(t=`Current tab id: ${c[0]}`,l.exports.createElement("p",{children:[t]})),(r=a([["aria-label","History of Ancient Rome"],["items",(m=>Array.from(m))(o)],["onSelectionChange",c[1]],(i=[n.createElement(tn,{children:m=>{const p=m.name;return n.createElement(E,{children:p})}}),n.createElement(nn,{children:m=>{const p=m.children;return n.createElement(E,{children:p})}})],["children",n.Children.toArray(Array.from(i))])]),n.createElement(rn,s(r)))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function fu(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A,I,M;return l.exports.createElement(g,{title:"Icons in tabs",code:`Spectrum.Tabs [
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
]`,description:d(),elements:u((e=a([["aria-label","History of Ancient Rome"],(t=[(r=a([(i=a([["key","FoR"],(o=[(c=ni,n.createElement(c,{})),(m=u(["children",n.Children.toArray(["Founding of Rome"])]),n.createElement(v,s(m)))],["children",n.Children.toArray(Array.from(o))])]),n.createElement(E,s(i))),(p=a([["key","MaR"],(h=[(f=ri,n.createElement(f,{})),(x=u(["children",n.Children.toArray(["Monarchy and Republic"])]),n.createElement(v,s(x)))],["children",n.Children.toArray(Array.from(h))])]),n.createElement(E,s(p))),(y=a([["key","Emp"],(S=[(A=li,n.createElement(A,{})),(I=u(["children",n.Children.toArray(["Empire"])]),n.createElement(v,s(I)))],["children",n.Children.toArray(Array.from(S))])]),n.createElement(E,s(y)))]),l.exports.createElement(tn,d(),...r)),(M=a([n.createElement(E,{key:"FoR",children:"Arma virumque cano, Troiae qui primus ab oris."}),n.createElement(E,{key:"MaR",children:"Senatus Populusque Romanus."}),n.createElement(E,{key:"Emp",children:"Alea jacta est."})]),l.exports.createElement(nn,d(),...M))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(rn,s(e))))})}function xu(){return l.exports.createElement(g,{title:"Selection",code:`let tabs = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c;const m=a([{children:"No keyboard detected",id:1,name:"Keyboard Settings"},{children:"No mouse detected",id:2,name:"Mouse Settings"},{children:"No gamepad detected",id:3,name:"Gamepad Settings"}]),p=V(2);return C((e=a([["gap","size-150"],["wrap",!0],(t=[l.exports.createElement("span",{id:"label-2",children:n.Children.toArray(["Settings (uncontrolled)"])}),(r=a([["aria-labelledby","label-2"],["items",(h=>Array.from(h))(m)],["defaultSelectedKey",2],["marginBottom","size-400"],(i=[n.createElement(tn,{children:h=>{const f=h.name;return n.createElement(E,{children:f})}}),n.createElement(nn,{children:h=>{const f=h.children;return n.createElement(E,{children:f})}})],["children",n.Children.toArray(Array.from(i))])]),n.createElement(rn,s(r))),l.exports.createElement("span",{id:"label-3",children:n.Children.toArray(["Settings (controlled)"])}),(o=a([["aria-labelledby","label-3"],["items",(h=>Array.from(h))(m)],["selectedKey",p[0]],["onSelectionChange",p[1]],(c=[n.createElement(tn,{children:h=>{const f=h.name;return n.createElement(E,{children:f})}}),n.createElement(nn,{children:h=>{const f=h.children;return n.createElement(E,{children:f})}})],["children",n.Children.toArray(Array.from(c))])]),n.createElement(rn,s(o)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function gu(){const e=a(["Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tabs.html"})," for more details.",l.exports.createElement("br",{}),l.exports.createElement("br",{}),"Please note that the following examples require the you to open ",l.exports.createElement("em",{children:["Fable.Core.JsInterop"]})," in order to access the dynamic operator (?)."]);return l.exports.createElement(z,{title:"Tabs",description:e,examples:a([l.exports.createElement(pu,null),l.exports.createElement(hu,null),l.exports.createElement(fu,null),l.exports.createElement(xu,null)])})}function Eu(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Save" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Low disk space!"
        AlertDialog.variant AlertDialogVariant.Warning
        AlertDialog.primaryActionLabel "Confirm"
        AlertDialog.content "You are running low on disk space.\\nDelete unnecessary files to free up space."
    ]
]`,description:d(),elements:u((e=a([l.exports.createElement(R,d(),"Save"),n.createElement(Rt,{title:"Low disk space!",variant:"warning",primaryActionLabel:"Confirm",children:`You are running low on disk space.
Delete unnecessary files to free up space.`})]),l.exports.createElement(ie,d(),...e)))})}function Su(){let e;return l.exports.createElement(g,{title:"Content",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Exit" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Register profile"
        AlertDialog.variant AlertDialogVariant.Information
        AlertDialog.primaryActionLabel "Register"
        AlertDialog.secondaryActionLabel "Reminder me later"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.content "You have not saved your profile information \\nfor this account. Would you like to register now?"
    ]
]`,description:d(),elements:u((e=a([l.exports.createElement(R,d(),"Exit"),n.createElement(Rt,{title:"Register profile",variant:"information",primaryActionLabel:"Register",secondaryActionLabel:"Reminder me later",cancelLabel:"Cancel",children:`You have not saved your profile information 
for this account. Would you like to register now?`})]),l.exports.createElement(ie,d(),...e)))})}function yu(){let e;return l.exports.createElement(g,{title:"Accessibility",code:`Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Save" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Save file"
        AlertDialog.variant AlertDialogVariant.Confirmation
        AlertDialog.primaryActionLabel "Save"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.autoFocusButton AutoFocusButton.Primary
        AlertDialog.content "A file with the same name already exists. Overwrite?"
    ]
]`,description:d(),elements:u((e=a([l.exports.createElement(R,d(),"Save"),n.createElement(Rt,{title:"Save file",variant:"confirmation",primaryActionLabel:"Save",cancelLabel:"Cancel",autoFocusButton:"primary",children:"A file with the same name already exists. Overwrite?"})]),l.exports.createElement(ie,d(),...e)))})}function bu(){return l.exports.createElement(g,{title:"Events",code:`let onPrimaryAction () = Browser.Dom.window.alert("Primary button pressed.")
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
]`,description:d(),elements:w(b(()=>{let e;return C((e=a([l.exports.createElement(R,d(),"Publish"),n.createElement(Rt,{variant:"confirmation",title:"Confirm publish",primaryActionLabel:"Publish",secondaryActionLabel:"Save as draft",cancelLabel:"Cancel",onPrimaryAction:()=>{window.alert(U("Primary button pressed."))},onSecondaryAction:()=>{window.alert(U("Secondary button pressed."))},onCancel:()=>{window.alert(U("Cancel button pressed."))},children:"Are you sure you want to publish this document?"})]),l.exports.createElement(ie,d(),...e)))}))})}function Cu(){const e=a(["AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html"})," for more details."]);return l.exports.createElement(z,{title:"AlertDialog",description:e,examples:a([l.exports.createElement(Eu,null),l.exports.createElement(Su,null),l.exports.createElement(yu,null),l.exports.createElement(bu,null)])})}function Au(){let e,t;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.DialogTrigger [
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
]`,description:d(),elements:u((e=a([(t=u(["children",n.Children.toArray(["Check connectivity"])]),n.createElement(R,s(t))),r=>{let i,o,c,m,p;const h=a([(i=u(["children",n.Children.toArray(["Internet Speed Test"])]),n.createElement(J,s(i))),(o=u(["children",n.Children.toArray(["Connection status: Connected"])]),n.createElement(ir,s(o))),l.exports.createElement(Z,d()),(c=u((m=u(["children",n.Children.toArray(["Start speed test?"])]),n.createElement(v,s(m)))),l.exports.createElement(K,d(),...c)),(p=a([n.createElement(H,{variant:"secondary",onPress:f=>{r()},children:"Cancel"}),n.createElement(H,{variant:"cta",onPress:f=>{r()},children:"Confirm"})]),l.exports.createElement(ze,d(),...p))]);return l.exports.createElement(ye,d(),...h)}]),l.exports.createElement(ie,d(),...e)))})}function vu(){let e,t;return l.exports.createElement(g,{title:"Content",code:`Spectrum.DialogTrigger [
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
]`,description:d(),elements:u((e=a([(t=u(["children",n.Children.toArray(["Publish"])]),n.createElement(R,s(t))),r=>{let i,o;const c=a([(i=u(["children",n.Children.toArray(["Publish 3 pages"])]),n.createElement(J,s(i))),l.exports.createElement(Z,d()),l.exports.createElement(K,d(),"Confirm publish"),(o=a([n.createElement(H,{variant:"secondary",onPress:m=>{r()},children:"Cancel"}),n.createElement(H,{variant:"cta",autoFocus:!0,onPress:m=>{r()},children:"Confirm"})]),l.exports.createElement(ze,d(),...o))]);return l.exports.createElement(ye,d(),...c)}]),l.exports.createElement(ie,d(),...e)))})}function wu(){let e,t,r,i,o;return l.exports.createElement(g,{title:"Dismissable",code:`Spectrum.DialogTrigger [
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
]`,description:d(),elements:u((e=a([["isDismissable",!0],(t=[(r=u(["children",n.Children.toArray(["Status"])]),n.createElement(R,s(r))),(i=a([(o=u(["children",n.Children.toArray(["Status"])]),n.createElement(J,s(o))),l.exports.createElement(Z,d()),l.exports.createElement(K,d(),"Printer Status: Connected")]),l.exports.createElement(ye,d(),...i))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(ie,s(e))))})}function ku(){let e,t;return l.exports.createElement(g,{title:"Complex UI",code:`Spectrum.DialogTrigger [
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
]`,description:d(),elements:u((e=a([(t=u(["children",n.Children.toArray(["Register"])]),n.createElement(R,s(t))),r=>{let i,o,c,m,p,h,f,x,y,S,A,I,M;const _=a([["size","L"],(i=[(o=u((c=a([["alignItems","center"],["gap","size-100"],(m=[(p=Yr,n.createElement(p,{size:"S"})),(h=u(["children",n.Children.toArray(["Register for newsletter"])]),n.createElement(v,s(h)))],["children",n.Children.toArray(Array.from(m))])]),n.createElement(B,s(c)))),l.exports.createElement(J,d(),...o)),(f=u((x=u(l.exports.createElement("a",{href:"//example.com",target:"_blank",children:n.Children.toArray(["What is this?"])})),l.exports.createElement(je,d(),...x))),l.exports.createElement(ir,d(),...f)),l.exports.createElement(Z,d()),(y=u((S=a([n.createElement(O,{label:"First Name",placeholder:"John",autoFocus:!0}),n.createElement(O,{label:"Last Name",placeholder:"Smith"}),n.createElement(O,{label:"Street Address",placeholder:"123 Any Street"}),n.createElement(O,{label:"City",placeholder:"San Francisco"})]),l.exports.createElement(xt,d(),...S))),l.exports.createElement(K,d(),...y)),(A=u((I=u(["children",n.Children.toArray(["I want to receive updates for exclusive offers in my area."])]),n.createElement($,s(I)))),l.exports.createElement(or,d(),...A)),(M=a([n.createElement(H,{variant:"secondary",onPress:G=>{r()},children:"Cancel"}),n.createElement(H,{variant:"cta",onPress:G=>{r()},children:"Register"})]),l.exports.createElement(ze,d(),...M))],["children",n.Children.toArray(Array.from(i))])]);return n.createElement(ye,s(_))}]),l.exports.createElement(ie,d(),...e)))})}function Iu(){let e,t;return l.exports.createElement(g,{title:"Hero image",code:`Spectrum.DialogTrigger [
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
]`,description:d(),elements:u((e=a([(t=u(["children",n.Children.toArray(["Upload"])]),n.createElement(R,s(t))),r=>{let i,o,c;const m=a([n.createElement(Xr,{slot:"hero",alt:"",src:"https://i.imgur.com/Z7AzH2c.png",objectFit:"cover"}),(i=u(["children",n.Children.toArray(["Upload file"])]),n.createElement(J,s(i))),l.exports.createElement(Z,d()),(o=u(["children",n.Children.toArray(["Are you sure you want to upload this file?"])]),n.createElement(K,s(o))),(c=a([n.createElement(H,{variant:"secondary",onPress:p=>{r()},children:"Cancel"}),n.createElement(H,{variant:"cta",onPress:p=>{r()},children:"Confirm"})]),l.exports.createElement(ze,d(),...c))]);return l.exports.createElement(ye,d(),...m)}]),l.exports.createElement(ie,d(),...e)))})}function Tu(){return l.exports.createElement(g,{title:"Events",code:`let alertSave = fun (close) ->
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
]`,description:d(),elements:w(b(()=>{let e,t;return C((e=a([(t=u(["children",n.Children.toArray(["Set Profile"])]),n.createElement(R,s(t))),r=>{let i,o,c,m,p;const h=a([(i=u(["children",n.Children.toArray(["Profile"])]),n.createElement(J,s(i))),l.exports.createElement(Z,d()),(o=a([n.createElement(H,{variant:"secondary",onPress:f=>{r(),window.alert(U("Profile not saved!"))},children:"Cancel"}),n.createElement(H,{variant:"cta",autoFocus:!0,onPress:f=>{r(),window.alert(U("Profile saved!"))},children:"Save"})]),l.exports.createElement(ze,d(),...o)),(c=u((m=a([n.createElement(O,{label:"Name"}),(p=u(["children",n.Children.toArray(["Make private"])]),n.createElement($,s(p)))]),l.exports.createElement(xt,d(),...m))),l.exports.createElement(K,d(),...c))]);return l.exports.createElement(ye,d(),...h)}]),l.exports.createElement(ie,d(),...e)))}))})}function Fu(){const e=a(["Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Dialog.html"})," for more details."]);return l.exports.createElement(z,{title:"Dialog",description:e,examples:a([l.exports.createElement(Au,null),l.exports.createElement(vu,null),l.exports.createElement(wu,null),l.exports.createElement(ku,null),l.exports.createElement(Iu,null),l.exports.createElement(Tu,null)])})}function _u(){return l.exports.createElement(g,{title:"Default example",code:`let isOpen, setIsOpen = React.useState(false)

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c,m;const p=V(!1),h=p[1];return C((e=[(t=a([["onPress",f=>{h(!0)}],(r=[(i=Tn,n.createElement(i,{})),(o=u(["children",n.Children.toArray(["Delete"])]),n.createElement(v,s(o)))],["children",n.Children.toArray(Array.from(r))])]),n.createElement(R,s(t))),(c=a([["onDismiss",()=>{h(!1)}],(m=w(b(()=>p[0]?C(n.createElement(Rt,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"})):Rn())),["children",n.Children.toArray(Array.from(m))])]),n.createElement(Zr,s(c)))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function Bu(){let e,t,r,i,o;const c=ii(),m=a([(e=u(["children",n.Children.toArray(["Edit"])]),n.createElement(J,s(e))),l.exports.createElement(Z,d()),(t=u((r=u((i=[n.createElement(O,{autoFocus:!0,label:"First Name",defaultValue:"John"}),n.createElement(O,{label:"Last Name",defaultValue:"Smith"})],["children",n.Children.toArray(Array.from(i))])),n.createElement(xt,s(r)))),l.exports.createElement(K,d(),...t)),(o=a([n.createElement(H,{variant:"secondary",onPress:p=>{c.dismiss()},children:"Cancel"}),n.createElement(H,{variant:"cta",onPress:p=>{c.dismiss()},children:"Save"})]),l.exports.createElement(ze,d(),...o))]);return l.exports.createElement(ye,d(),...m)}function Du(){return l.exports.createElement(g,{title:"Dialog triggered by a menu item",code:`let dialog, setDialog = React.useState(JS.undefined<string>)
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
`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c,m,p;const h=V(void 0),f=h[1],x=h[0];return C((e=[(t=a([(r=a([["aria-label","Actions"],(i=[(o=oi,n.createElement(o,{}))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(R,s(r))),(c=a([["onAction",f],["children",[n.createElement(E,{key:"edit",children:"Edit"}),n.createElement(E,{key:"delete",children:"Delete..."})]]]),n.createElement(re,s(c)))]),l.exports.createElement(le,d(),...t)),(m=a([["onDismiss",()=>{f(void 0)}],["type","modal"],(p=w(b(()=>C(x==="edit"?l.exports.createElement(Bu,null):x==="delete"?n.createElement(Rt,{title:"Delete",variant:"destructive",primaryActionLabel:"Delete",children:"Are you sure you want to delete this item?"}):null))),["children",n.Children.toArray(Array.from(p))])]),n.createElement(Zr,s(m)))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function Vu(){const e=a(["A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html"})," for more details."]);return l.exports.createElement(z,{title:"DialogContainer",description:e,examples:a([l.exports.createElement(_u,null),l.exports.createElement(Du,null)])})}function Nu(){let e,t,r,i,o,c,m;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.DialogTrigger [
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
]`,description:d(),elements:u((e=a([["type","popover"],(t=[(r=u(["children",n.Children.toArray(["Disk Status"])]),n.createElement(R,s(r))),(i=a([(o=u(["children",n.Children.toArray(["C://"])]),n.createElement(J,s(o))),l.exports.createElement(Z,d()),(c=u((m=u(["children",n.Children.toArray(["50% disk space remaining."])]),n.createElement(v,s(m)))),l.exports.createElement(K,d(),...c))]),l.exports.createElement(ye,d(),...i))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(ie,s(e))))})}function Mu(){let e,t,r,i,o,c,m;return l.exports.createElement(g,{title:"Tray dialog",code:`Spectrum.DialogTrigger [
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
]`,description:d(),elements:u((e=a([["type","tray"],(t=[(r=u(["children",n.Children.toArray(["Check messages"])]),n.createElement(R,s(r))),(i=a([(o=u(["children",n.Children.toArray(["New messages"])]),n.createElement(J,s(o))),l.exports.createElement(Z,d()),(c=u((m=u(["children",n.Children.toArray(["You have 5 new messages."])]),n.createElement(v,s(m)))),l.exports.createElement(K,d(),...c))]),l.exports.createElement(ye,d(),...i))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(ie,s(e))))})}function zu(){return l.exports.createElement(g,{title:"Dialog anchor",code:`let ref = React.useRef<Browser.Types.HTMLElement option>(None)

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c,m,p,h;const f=xr(void 0);return C((e=a([["gap","size-1000"],(t=[(r=a([["type","popover"],["targetRef",f],(i=[(o=u(["children",n.Children.toArray(["Trigger"])]),n.createElement(R,s(o))),(c=a([(m=u(["children",n.Children.toArray(["The heading"])]),n.createElement(J,s(m))),l.exports.createElement(Z,d()),(p=u((h=u(["children",n.Children.toArray(["This is a popover anchored to the span"])]),n.createElement(v,s(h)))),l.exports.createElement(K,d(),...p))]),l.exports.createElement(ye,d(),...c))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(ie,s(r))),l.exports.createElement("span",{ref:f,style:{width:140,textAlign:"center"},children:n.Children.toArray(["Popover appears over here"])})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Ru(){let e,t,r,i,o,c,m;return l.exports.createElement(g,{title:"Placement",code:`Spectrum.DialogTrigger [
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
]`,description:d(),elements:u((e=a([["type","popover"],["placement","right top"],(t=[(r=u(["children",n.Children.toArray(["Trigger"])]),n.createElement(R,s(r))),(i=a([(o=u(["children",n.Children.toArray(["The Heading"])]),n.createElement(J,s(o))),l.exports.createElement(Z,d()),(c=u((m=u(["children",n.Children.toArray(["This is a popover placed to the right of its trigger and offset so the arrow is at the top of the dialog."])]),n.createElement(v,s(m)))),l.exports.createElement(K,d(),...c))]),l.exports.createElement(ye,d(),...i))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(ie,s(e))))})}function Pu(){let e,t,r,i,o,c,m;return l.exports.createElement(g,{title:"Offset and cross offset",code:`Spectrum.DialogTrigger [
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
]`,description:d(),elements:u((e=a([["type","popover"],["placement","top"],["offset",50],(t=[(r=u(["children",n.Children.toArray(["Trigger"])]),n.createElement(R,s(r))),(i=a([(o=u(["children",n.Children.toArray(["Offset"])]),n.createElement(J,s(o))),l.exports.createElement(Z,d()),(c=u((m=u(["children",n.Children.toArray(["Offset by an additional 50px."])]),n.createElement(v,s(m)))),l.exports.createElement(K,d(),...c))]),l.exports.createElement(ye,d(),...i))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(ie,s(e))))})}function Lu(){return l.exports.createElement(g,{title:"Events",code:`let isOpen, setIsOpen = React.useState(false)

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
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c,m,p,h,f,x;const y=V(!1);return C((e=a([["alignItems","center"],["gap","size-100"],(t=[(r=a([["type","popover"],["placement","top"],["onOpenChange",y[1]],(i=[(o=u(["children",n.Children.toArray(["Whispers"])]),n.createElement(R,s(o))),(c=a([(m=u(["children",n.Children.toArray(["Whispers and DMs"])]),n.createElement(J,s(m))),l.exports.createElement(Z,d()),(p=u((h=u(["children",n.Children.toArray(["You have 0 new messages."])]),n.createElement(v,s(h)))),l.exports.createElement(K,d(),...p))]),l.exports.createElement(ye,d(),...c))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(ie,s(r))),(f=`Current open state: ${y[0]}`,x=u(["children",n.Children.toArray([f])]),n.createElement(v,s(x)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Gu(){const e=a(["DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html"})," for more details."]);return l.exports.createElement(z,{title:"DialogTrigger",description:e,examples:a([l.exports.createElement(Nu,null),l.exports.createElement(Mu,null),l.exports.createElement(zu,null),l.exports.createElement(Ru,null),l.exports.createElement(Pu,null),l.exports.createElement(Lu,null)])})}function $u(){let e,t,r,i,o;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.TooltipTrigger [
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
]`,description:d(),elements:u((e=a([["delay",0],(t=[(r=a([["aria-label","Edit Name"],(i=[(o=jr,n.createElement(o,{}))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(R,s(r))),n.createElement(Ye,{children:"Change Name"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(Xe,s(e))))})}function Hu(){let e,t,r,i,o,c;return l.exports.createElement(g,{title:"Warmup / Cooldown",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["gap","size-200"],(t=[(r=a([(i=u(["children",n.Children.toArray(["Hover me"])]),n.createElement(R,s(i))),n.createElement(Ye,{children:"I come up after a delay."})]),l.exports.createElement(Xe,d(),...r)),(o=a([(c=u(["children",n.Children.toArray(["Then hover me"])]),n.createElement(R,s(c))),n.createElement(Ye,{children:"If you did it quickly, I appear immediately."})]),l.exports.createElement(Xe,d(),...o))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Ou(){let e,t;return l.exports.createElement(g,{title:"Tooltip placement",code:`Spectrum.TooltipTrigger [
    TooltipTrigger.placement TooltipPlacement.End
    TooltipTrigger.children [
        Spectrum.ActionButton [
            ActionButton.ariaLabel "Foo"
            ActionButton.content "Placement"
        ]
        Spectrum.Tooltip "In left-to-right, this is on the right. In right-to-left, this is on the left."
    ]
]`,description:d(),elements:u((e=a([["placement","end"],(t=[n.createElement(R,{["aria-label"]:"Foo",children:"Placement"}),n.createElement(Ye,{children:"In left-to-right, this is on the right. In right-to-left, this is on the left."})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(Xe,s(e))))})}function Wu(){let e,t,r;return l.exports.createElement(g,{title:"Offset and cross offset",code:`Spectrum.TooltipTrigger [
    TooltipTrigger.offset 50
    TooltipTrigger.children [
        Spectrum.ActionButton "Offset"
        Spectrum.Tooltip "This will shift up..."
    ]
]`,description:d(),elements:u((e=a([["offset",50],(t=[(r=u(["children",n.Children.toArray(["Offset"])]),n.createElement(R,s(r))),n.createElement(Ye,{children:"This will shift up..."})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(Xe,s(e))))})}function qu(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A;return l.exports.createElement(g,{title:"Visual variants",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","row"],["gap","size-100"],(t=[(r=a([(i=a([["aria-label","Approve"],(o=[(c=ai,n.createElement(c,{}))],["children",n.Children.toArray(Array.from(o))])]),n.createElement(R,s(i))),n.createElement(Ye,{variant:"positive",showIcon:!0,children:"Approve workflow"})]),l.exports.createElement(Xe,d(),...r)),(m=a([(p=a([["aria-label","Information"],(h=[(f=ci,n.createElement(f,{}))],["children",n.Children.toArray(Array.from(h))])]),n.createElement(R,s(p))),n.createElement(Ye,{variant:"info",showIcon:!0,children:"Show the more information menu"})]),l.exports.createElement(Xe,d(),...m)),(x=a([(y=a([["aria-label","Danger"],(S=[(A=Tn,n.createElement(A,{}))],["children",n.Children.toArray(Array.from(S))])]),n.createElement(R,s(y))),n.createElement(Ye,{variant:"negative",showIcon:!0,children:"Dangerous action"})]),l.exports.createElement(Xe,d(),...x))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Uu(){const e=a(["Display container for Tooltip content. Has a directional arrow dependent on its placement.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Tooltip.html"})," for more details."]);return l.exports.createElement(z,{title:"Tooltip",description:e,examples:a([l.exports.createElement($u,null),l.exports.createElement(Hu,null),l.exports.createElement(Ou,null),l.exports.createElement(Wu,null),l.exports.createElement(qu,null)])})}function ju(){let e,t,r,i,o;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.ContextualHelp [
    ContextualHelp.variant ContextualHelpVariant.Info
    ContextualHelp.children [
        Spectrum.Heading "Need help?"
        Spectrum.Content [
            Spectrum.Text "If you're having issues accessing your account, contact our customer
support team for help."
        ]
    ]
]`,description:d(),elements:u((e=a([["variant","info"],(t=[(r=u(["children",n.Children.toArray(["Need help?"])]),n.createElement(J,s(r))),(i=u((o=u(["children",n.Children.toArray([`If you're having issues accessing your account, contact our customer
      support team for help.`])]),n.createElement(v,s(o)))),l.exports.createElement(K,d(),...i))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(_n,s(e))))})}function Ku(){let e,t,r,i,o,c;return l.exports.createElement(g,{title:"Content",code:`Spectrum.ContextualHelp [
    ContextualHelp.variant ContextualHelpVariant.Help
    ContextualHelp.children [
        Spectrum.Heading "What is a segment?"
        Spectrum.Content [
            Spectrum.Text "Segments identify who your visitors are, what devices and services they
use, where they navigated from, and much more."
        ]
        Spectrum.Footer [
            Spectrum.Link [
                Link.content "Learn more about segments"
            ]
        ]
    ]
]`,description:d(),elements:u((e=a([["variant","help"],(t=[(r=u(["children",n.Children.toArray(["What is a segment?"])]),n.createElement(J,s(r))),(i=u((o=u(["children",n.Children.toArray([`Segments identify who your visitors are, what devices and services they
      use, where they navigated from, and much more.`])]),n.createElement(v,s(o)))),l.exports.createElement(K,d(),...i)),(c=u(n.createElement(je,{children:"Learn more about segments"})),l.exports.createElement(or,d(),...c))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(_n,s(e))))})}function Ju(){let e,t,r,i;return l.exports.createElement(g,{title:"Placement",code:`Spectrum.ContextualHelp [
    ContextualHelp.variant ContextualHelpVariant.Info
    ContextualHelp.placement Placement.TopStart
    ContextualHelp.children [
        Spectrum.Content [
            Spectrum.Text "The placement of this contextual help popover has been customized to use
top start."
        ]
    ]
]`,description:d(),elements:u((e=a([["variant","info"],["placement","top start"],(t=[(r=u((i=u(["children",n.Children.toArray([`The placement of this contextual help popover has been customized to use
      top start.`])]),n.createElement(v,s(i)))),l.exports.createElement(K,d(),...r))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(_n,s(e))))})}function Yu(){return l.exports.createElement(g,{title:"Events",code:`let state, setState = React.useState(false)

Spectrum.Flex [
    Flex.alignItems FlexAlignItems.Center
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.ContextualHelp [
            ContextualHelp.variant ContextualHelpVariant.Info
            ContextualHelp.onOpenChange setState
            ContextualHelp.children [
                Spectrum.Heading "Permission required"
                Spectrum.Content [
                    Spectrum.Text "Your admin must grant you permission before you can create a segment."
                ]
            ]
        ]
        Spectrum.Text $"Current open state: {state}"
    ]
]`,description:d(),elements:w(b(()=>{let e,t,r,i,o,c,m,p,h;const f=V(!1);return C((e=a([["alignItems","center"],["gap","size-100"],(t=[(r=a([["variant","info"],["onOpenChange",f[1]],(i=[(o=u(["children",n.Children.toArray(["Permission required"])]),n.createElement(J,s(o))),(c=u((m=u(["children",n.Children.toArray(["Your admin must grant you permission before you can create a segment."])]),n.createElement(v,s(m)))),l.exports.createElement(K,d(),...c))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(_n,s(r))),(p=`Current open state: ${f[0]}`,h=u(["children",n.Children.toArray([p])]),n.createElement(v,s(h)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Xu(){const e=a(["Contextual help shows a user extra information about the state of an adjacent component, or a total view.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html"})," for more details."]);return l.exports.createElement(z,{title:"ContextualHelp",description:e,examples:a([l.exports.createElement(ju,null),l.exports.createElement(Ku,null),l.exports.createElement(Ju,null),l.exports.createElement(Yu,null)])})}function Zu(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.ComboBox [
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
]`,description:d(),elements:u((e=a([["label","Favorite animal"],["children",[n.createElement(E,{key:"red panda",children:"Red Panda"}),n.createElement(E,{key:"cat",children:"Cat"}),n.createElement(E,{key:"dog",children:"Dog"}),n.createElement(E,{key:"aardvark",children:"Aardvark"}),n.createElement(E,{key:"kangaroo",children:"Kangaroo"}),n.createElement(E,{key:"snake",children:"Snake"})]]]),n.createElement(Ze,s(e))))})}function Qu(){return l.exports.createElement(g,{title:"Content",code:`let options = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r;const i=a([{id:1,name:"Aerospace"},{id:2,name:"Mechanical"},{id:3,name:"Civil"},{id:4,name:"Biomedical"},{id:5,name:"Nuclear"},{id:6,name:"Industrial"},{id:7,name:"Chemical"},{id:8,name:"Agricultural"},{id:9,name:"Electrical"}]),o=V(void 0);return C((e=[(t=`Topic id: ${o[0]}`,l.exports.createElement("p",{children:[t]})),(r=a([["label","Pick an engineering major"],["placeholder","Search engineering majors..."],["defaultItems",(c=>Array.from(c))(i)],["onSelectionChange",o[1]],["children",c=>{const m=c.name;return n.createElement(E,{children:m})}]]),n.createElement(Ze,s(r)))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function ed(){return l.exports.createElement(g,{title:"Value",code:`let options = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=a([{id:1,name:"Adobe Photoshop"},{id:2,name:"Adobe XD"},{id:3,name:"Adobe InDesign"},{id:4,name:"Adobe AfterEffects"},{id:5,name:"Adobe Illustrator"},{id:6,name:"Adobe Lightroom"},{id:7,name:"Adobe Premiere Pro"},{id:8,name:"Adobe Fresco"},{id:9,name:"Adobe Dreamweaver"}]),c=V("Adobe XD");return C((e=a([["gap","size-150"],["wrap",!0],(t=[(r=a([["label","Adobe product (Uncontrolled)"],["defaultItems",(m=>Array.from(m))(o)],["defaultInputValue","Adobe XD"],["children",m=>{const p=m.name;return n.createElement(E,{children:p})}]]),n.createElement(Ze,s(r))),(i=a([["label","Adobe product (Controlled)"],["defaultItems",(m=>Array.from(m))(o)],["inputValue",c[0]],["onInputChange",c[1]],["children",m=>{const p=m.name;return n.createElement(E,{children:p})}]]),n.createElement(Ze,s(i)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function td(){return l.exports.createElement(g,{title:"Custom value",code:`let options = [
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
]`,description:d(),elements:w(b(()=>{let e,t;const r=a([{name:"Apple"},{name:"Banana"},{name:"Orange"},{name:"Grapes"},{name:"Watermelon"},{name:"Pear"}]);return C((e=[l.exports.createElement("p",{children:["Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list feel free to write your own selection."]}),(t=a([["label","Preferred fruit"],["defaultItems",(i=>Array.from(i))(r)],["allowsCustomValue",!0],["children",i=>{const o=i.name;return n.createElement(E,{key:o,children:o})}]]),n.createElement(Ze,s(t)))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function nd(){let e,t,r;return l.exports.createElement(g,{title:"Sections",code:`Spectrum.ComboBox [
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
]`,description:d(),elements:u((e=a([["label","Preferred fruit or vegetable"],["children",[(t=a([["title","Fruit"],["children",[n.createElement(E,{key:"Apple",children:"Apple"}),n.createElement(E,{key:"Banana",children:"Banana"}),n.createElement(E,{key:"Orange",children:"Orange"})]]]),n.createElement(Ee,s(t))),(r=a([["title","Vegetables"],["children",[n.createElement(E,{key:"Cabbage",children:"Cabbage"}),n.createElement(E,{key:"Lettuce",children:"Lettuce"}),n.createElement(E,{key:"Carrots",children:"Carrots"})]]]),n.createElement(Ee,s(r)))]]]),n.createElement(Ze,s(e))))})}function rd(){return l.exports.createElement(g,{title:"Events",code:`let options = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=a([{id:1,name:"Aerospace"},{id:2,name:"Mechanical"},{id:3,name:"Civil"},{id:4,name:"Biomedical"},{id:5,name:"Nuclear"},{id:6,name:"Industrial"},{id:7,name:"Chemical"},{id:8,name:"Chemical"},{id:9,name:"Electrical"}]),c=V(""),m=V(0),p=m[0]|0;return C((e=[(t=`Current selected major id: ${p}`,l.exports.createElement("p",{children:[t]})),(r=`Current input text: ${c[0]}`,l.exports.createElement("p",{children:[r]})),(i=a([["label","Pick an engineering major"],["defaultItems",(h=>Array.from(h))(o)],["selectedKey",p],["onSelectionChange",h=>{m[1](h)}],["onInputChange",h=>{c[1](h)}],["children",h=>{const f=h.name;return n.createElement(E,{children:f})}]]),n.createElement(Ze,s(i)))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function ld(){let e,t,r,i,o,c,m,p,h,f,x,y,S,A,I,M,_,G,Q,se,Y;return l.exports.createElement(g,{title:"Complex items",code:`Spectrum.ComboBox [
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
]`,description:d(),elements:u((e=a([["label","Select action"],["children",[(t=a([["textValue","Add to queue"],(r=[(i=si,n.createElement(i,{})),(o=u(["children",n.Children.toArray(["Add to queue"])]),n.createElement(v,s(o))),(c=a([["slot","description"],["children",n.Children.toArray(["Add to current watch queue"])]]),n.createElement(v,s(c)))],["children",n.Children.toArray(Array.from(r))])]),n.createElement(E,s(t))),(m=a([["textValue","Add review"],(p=[(h=In,n.createElement(h,{})),(f=u(["children",n.Children.toArray(["Add review"])]),n.createElement(v,s(f))),(x=a([["slot","description"],["children",n.Children.toArray(["Post a review for the episode"])]]),n.createElement(v,s(x)))],["children",n.Children.toArray(Array.from(p))])]),n.createElement(E,s(m))),(y=a([["textValue","Subscribe to series"],(S=[(A=Kr,n.createElement(A,{})),(I=u(["children",n.Children.toArray(["Subscribe to series"])]),n.createElement(v,s(I))),(M=a([["slot","description"],["children",n.Children.toArray(["Add series to your subscription list and be notified when a new episode airs"])]]),n.createElement(v,s(M)))],["children",n.Children.toArray(Array.from(S))])]),n.createElement(E,s(y))),(_=a([["textValue","Report"],(G=[(Q=St,n.createElement(Q,{})),(se=u(["children",n.Children.toArray(["Report"])]),n.createElement(v,s(se))),(Y=a([["slot","description"],["children",n.Children.toArray(["Report an issue/violation"])]]),n.createElement(v,s(Y)))],["children",n.Children.toArray(Array.from(G))])]),n.createElement(E,s(_)))]]]),n.createElement(Ze,s(e))))})}function id(){const e=a(["ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ComboBox.html"})," for more details.",l.exports.createElement("br",{}),l.exports.createElement("br",{}),"Please note that the following examples require the you to open ",l.exports.createElement("em",{children:["Fable.Core.JsInterop"]})," in order to access the dynamic operator (?)."]);return l.exports.createElement(z,{title:"ComboBox",description:e,examples:a([l.exports.createElement(Zu,null),l.exports.createElement(Qu,null),l.exports.createElement(ed,null),l.exports.createElement(td,null),l.exports.createElement(nd,null),l.exports.createElement(rd,null),l.exports.createElement(ld,null)])})}function od(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Picker [
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
]`,description:d(),elements:u((e=a([["label","Choose frequency"],["children",[n.createElement(E,{key:"rarely",children:"Rarely"}),n.createElement(E,{key:"sometimes",children:"Sometimes"}),n.createElement(E,{key:"always",children:"Always"})]]]),n.createElement(Sn,s(e))))})}function ad(){return l.exports.createElement(g,{title:"Content",code:`let options = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r;const i=a([{id:1,name:"Aardvark"},{id:2,name:"Cat"},{id:3,name:"Dog"},{id:4,name:"Kangaroo"},{id:5,name:"Koala"},{id:6,name:"Penguin"},{id:7,name:"Snake"},{id:8,name:"Turtle"},{id:9,name:"Wombat"}]),o=V(void 0);return C((e=[(t=a([["label","Pick an animal"],["items",(c=>Array.from(c))(i)],["onSelectionChange",o[1]],["children",c=>{const m=c.name;return n.createElement(E,{children:m})}]]),n.createElement(Sn,s(t))),(r=`Animal id: ${o[0]}`,l.exports.createElement("p",{children:[r]}))],l.exports.createElement(l.exports.Fragment,{},...e)))}))})}function cd(){return l.exports.createElement(g,{title:"Selection",code:`let options = [
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
]`,description:d(),elements:w(b(()=>{let e,t,r,i;const o=a([{name:"Koala"},{name:"Kangaroo"},{name:"Platypus"},{name:"Bald Eagle"},{name:"Bison"},{name:"Skunk"}]),c=V("Bison");return C((e=a([["gap","size-150"],["wrap",!0],(t=[(r=a([["label","Pick an animal (Uncontrolled)"],["items",(m=>Array.from(m))(o)],["defaultSelectedKey","Bison"],["children",m=>{const p=m.name;return n.createElement(E,{key:p,children:p})}]]),n.createElement(Sn,s(r))),(i=a([["label","Pick an animal (Controlled)"],["items",(m=>Array.from(m))(o)],["selectedKey",c[0]],["onSelectionChange",c[1]],["children",m=>{const p=m.name;return n.createElement(E,{key:p,children:p})}]]),n.createElement(Sn,s(i)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function sd(){const e=a(["Pickers allow users to choose a single option from a collapsible list of options when space is limited.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Picker.html"})," for more details.",l.exports.createElement("br",{}),l.exports.createElement("br",{}),"Please note that the following examples require the you to open ",l.exports.createElement("em",{children:["Fable.Core.JsInterop"]})," in order to access the dynamic operator (?)."]);return l.exports.createElement(z,{title:"Picker",description:e,examples:a([l.exports.createElement(od,null),l.exports.createElement(ad,null),l.exports.createElement(cd,null)])})}function md(){let e;return l.exports.createElement(g,{title:"Default example",code:'Spectrum.RangeSlider [\n    RangeSlider.label "Range"\n    RangeSlider.defaultValue {| start = 12; ``end`` = 36 |}\n]',description:d(),elements:u((e=a([["label","Range"],["defaultValue",{end:36,start:12}]]),n.createElement(It,s(e))))})}function ud(){return l.exports.createElement(g,{title:"Value",code:'let value, setValue = React.useState({| start = 25; ``end`` = 75 |})\nSpectrum.Flex [\n    Flex.gap (DimValue.Size Size150)\n    Flex.wrap true\n    Flex.children [\n        Spectrum.RangeSlider [\n            RangeSlider.label "Range (Uncontrolled)"\n            RangeSlider.defaultValue {| start = 25; ``end`` = 75 |}\n        ]\n        Spectrum.RangeSlider [\n            RangeSlider.label "Range (Controlled)"\n            RangeSlider.value {| start = value.start; ``end`` = value.``end`` |}\n            RangeSlider.onChange (fun x -> setValue {| start = x.start; ``end`` = x.``end`` |})\n        ]\n    ]\n]',description:d(),elements:w(b(()=>{let e,t,r,i;const o=V({end:75,start:25}),c=o[0];return C((e=a([["gap","size-150"],["wrap",!0],(t=[(r=a([["label","Range (Uncontrolled)"],["defaultValue",{end:75,start:25}]]),n.createElement(It,s(r))),(i=a([["label","Range (Controlled)"],["value",{end:c.end,start:c.start}],["onChange",m=>{o[1]({end:m.end,start:m.start})}]]),n.createElement(It,s(i)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function dd(){let e;return l.exports.createElement(g,{title:"Different scale",code:`Spectrum.RangeSlider [
    RangeSlider.label "Range"
    RangeSlider.minValue 50
    RangeSlider.maxValue 150
    RangeSlider.defaultValue {| start = 75; \`\`end\`\` = 100 |}
]`,description:d(),elements:u((e=a([["label","Range"],["minValue",50],["maxValue",150],["defaultValue",{end:100,start:75}]]),n.createElement(It,s(e))))})}function pd(){let e;return l.exports.createElement(g,{title:"Number format",code:'Spectrum.RangeSlider [\n    RangeSlider.label "Price range"\n    RangeSlider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "JPY")\n    RangeSlider.defaultValue {| start = 75; ``end`` = 100 |}\n]',description:d(),elements:u((e=a([["label","Price range"],["formatOptions",{localeMatcher:void 0,style:"currency",currency:"JPY",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}],["defaultValue",{end:100,start:75}]]),n.createElement(It,s(e))))})}function hd(){let e;return l.exports.createElement(g,{title:"Using the getValueLabel prop",code:'Spectrum.RangeSlider [\n    RangeSlider.label "Search radius"\n    RangeSlider.maxValue 200\n    RangeSlider.defaultValue {| start = 15; ``end`` = 60 |}\n    RangeSlider.getValueLabel (fun m -> $"{m.start}m to {m.``end``}m away")\n]',description:d(),elements:u((e=a([["label","Search radius"],["maxValue",200],["defaultValue",{end:60,start:15}],["getValueLabel",t=>`${t.start}m to ${t.end}m away`]]),n.createElement(It,s(e))))})}function fd(){const e=a(["RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/RangeSlider.html"})," for more details."]);return l.exports.createElement(z,{title:"RangeSlider",description:e,examples:a([l.exports.createElement(md,null),l.exports.createElement(ud,null),l.exports.createElement(dd,null),l.exports.createElement(pd,null),l.exports.createElement(hd,null)])})}function xd(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Slider [
    Slider.label "Cookies to buy"
    Slider.defaultValue 12
]`,description:d(),elements:u(n.createElement(yn,{label:"Cookies to buy",defaultValue:12}))})}function gd(){return l.exports.createElement(g,{title:"Value",code:`let value, setValue = React.useState(25)
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
]`,description:d(),elements:w(b(()=>{let e,t;const r=V(25);return C((e=a([["gap","size-150"],["wrap",!0],(t=[n.createElement(yn,{label:"Cookies to buy (Uncontrolled)",defaultValue:25}),n.createElement(yn,{label:"Cookies to buy (Controlled)",value:r[0],onChange:r[1]})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))}))})}function Ed(){let e;return l.exports.createElement(g,{title:"Number format",code:`Spectrum.Slider [
    Slider.label "Currency"
    Slider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "USD")
    Slider.defaultValue 60
]`,description:d(),elements:u((e=a([["label","Currency"],["formatOptions",{localeMatcher:void 0,style:"currency",currency:"USD",currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:void 0,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}],["defaultValue",60]]),n.createElement(yn,s(e))))})}function Sd(){const e=a(["Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Slider.html"})," for more details."]);return l.exports.createElement(z,{title:"Slider",description:e,examples:a([l.exports.createElement(xd,null),l.exports.createElement(gd,null),l.exports.createElement(Ed,null)])})}function yd(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Meter [
    Meter.label "Storage space"
    Meter.variant MeterVariant.Positive
    Meter.value 35
]`,description:d(),elements:u(n.createElement(Qt,{label:"Storage space",variant:"positive",value:35}))})}function bd(){return l.exports.createElement(g,{title:"Warning example",code:`Spectrum.Meter [
    Meter.label "Progress"
    Meter.marginBottom (DimValue.Size Size300)
    Meter.value 25
    Meter.valueLabel "1 of 4"
    Meter.variant MeterVariant.Warning
]`,description:d(),elements:u(n.createElement(Qt,{label:"Progress",marginBottom:"size-300",value:25,valueLabel:"1 of 4",variant:"warning"}))})}function Cd(){let e,t,r;return l.exports.createElement(g,{title:"Labels and formatting",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","column"],["maxWidth","size-3000"],["gap","size-300"],(t=[n.createElement(Qt,{label:"Space used",showValueLabel:!1,value:90,variant:"critical"}),n.createElement(Qt,{label:"Space used",valueLabel:"54 of 60GB",value:90,variant:"critical"}),(r=a([["label","Space used"],["value",89.123],["formatOptions",{localeMatcher:void 0,style:"percent",currency:void 0,currencyDisplay:void 0,currencySign:void 0,useGrouping:void 0,signDisplay:void 0,notation:void 0,unit:void 0,unitDisplay:void 0,minimumIntegerDigits:void 0,minimumFractionDigits:2,maximumFractionDigits:void 0,minimumSignificantDigits:void 0,maximumSignificantDigits:void 0}],["variant","critical"]]),n.createElement(Qt,s(r)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Ad(){const e=a(["Meters are visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Meter.html"})," for more details."]);return l.exports.createElement(z,{title:"Meter",description:e,examples:a([l.exports.createElement(yd,null),l.exports.createElement(bd,null),l.exports.createElement(Cd,null)])})}function vd(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.ProgressBar [
    ProgressBar.label "Loading..."
    ProgressBar.value 50
]`,description:d(),elements:u(n.createElement(ar,{label:"Loading...",value:50}))})}function wd(){return l.exports.createElement(g,{title:"Indeterminate",code:`Spectrum.ProgressBar [
    ProgressBar.label "Loading..."
    ProgressBar.isIndeterminate true
]`,description:d(),elements:u(n.createElement(ar,{label:"Loading...",isIndeterminate:!0}))})}function kd(){let e,t;return l.exports.createElement(g,{title:"Over background",code:`Spectrum.View [
    View.backgroundColor (BackgroundColorValue.Color Positive)
    View.padding (DimValue.Size Size300)
    View.children [
        Spectrum.ProgressBar [
            ProgressBar.overBackgroundVariant
            ProgressBar.label "Loading..."
            ProgressBar.value 5
        ]
    ]
]`,description:d(),elements:u((e=a([["backgroundColor","positive"],["padding","size-300"],(t=[n.createElement(ar,{variant:"overBackground",label:"Loading...",value:5})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(P,s(e))))})}function Id(){const e=a(["ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressBar.html"})," for more details."]);return l.exports.createElement(z,{title:"ProgressBar",description:e,examples:a([l.exports.createElement(vd,null),l.exports.createElement(wd,null),l.exports.createElement(kd,null)])})}function Td(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.ProgressCircle [
    ProgressCircle.ariaLabel "Loading..."
    ProgressCircle.value 50
]`,description:d(),elements:u(n.createElement(cr,{["aria-label"]:"Loading...",value:50}))})}function Fd(){return l.exports.createElement(g,{title:"Indeterminate",code:`Spectrum.ProgressCircle [
    ProgressCircle.ariaLabel "Loading..."
    ProgressCircle.isIndeterminate true
]`,description:d(),elements:u(n.createElement(cr,{["aria-label"]:"Loading...",isIndeterminate:!0}))})}function _d(){let e,t;return l.exports.createElement(g,{title:"Over background",code:`Spectrum.View [
    View.backgroundColor (BackgroundColorValue.Color Positive)
    View.padding (DimValue.Size Size300)
    View.children [
        Spectrum.ProgressCircle [
            ProgressCircle.overBackgroundVariant
            ProgressCircle.isIndeterminate true
            ProgressCircle.ariaLabel "Loading..."
        ]
    ]
]`,description:d(),elements:u((e=a([["backgroundColor","positive"],["padding","size-300"],(t=[n.createElement(cr,{variant:"overBackground",isIndeterminate:!0,["aria-label"]:"Loading..."})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(P,s(e))))})}function Bd(){const e=a(["ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/ProgressCircle.html"})," for more details."]);return l.exports.createElement(z,{title:"ProgressCircle",description:e,examples:a([l.exports.createElement(Td,null),l.exports.createElement(Fd,null),l.exports.createElement(_d,null)])})}function Dd(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.StatusLight [
    StatusLight.variant StatusLightVariant.Positive
    StatusLight.content "Ready"
]`,description:d(),elements:u(n.createElement(mi,{variant:"positive",children:"Ready"}))})}function Vd(){const e=a(["Status lights are used to color code categories and labels commonly found in data visualization. When status lights have a semantic meaning, they should use semantic variant colors.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/StatusLight.html"})," for more details."]);return l.exports.createElement(z,{title:"StatusLight",description:e,examples:u(l.exports.createElement(Dd,null))})}function Nd(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Content "Content is king"
`,description:d(),elements:u((e=u(["children",n.Children.toArray(["Content is king"])]),n.createElement(K,s(e))))})}function Md(){const e=a(["Content represents the primary content within a Spectrum container.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Content.html"})," for more details."]);return l.exports.createElement(z,{title:"Content",description:e,examples:u(l.exports.createElement(Nd,null))})}function zd(){let e,t,r,i;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content above"
        Spectrum.Divider ()
        Spectrum.Text "Content below"
    ]
]`,description:d(),elements:u((e=a([["direction","column"],["gap","size-125"],(t=[(r=u(["children",n.Children.toArray(["Content above"])]),n.createElement(v,s(r))),l.exports.createElement(Z,d()),(i=u(["children",n.Children.toArray(["Content below"])]),n.createElement(v,s(i)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Rd(){let e,t,r,i;return l.exports.createElement(g,{title:"Vertical",code:`Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content left"
        Spectrum.Divider [
            Divider.orientation Orientation.Vertical
        ]
        Spectrum.Text "Content right"
    ]
]`,description:d(),elements:u((e=a([["direction","row"],["gap","size-125"],(t=[(r=u(["children",n.Children.toArray(["Content left"])]),n.createElement(v,s(r))),n.createElement(Z,{orientation:"vertical"}),(i=u(["children",n.Children.toArray(["Content right"])]),n.createElement(v,s(i)))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Pd(){let e,t,r,i,o;return l.exports.createElement(g,{title:"Size",code:`Spectrum.Flex [
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
]`,description:d(),elements:u((e=a([["direction","column"],["gap","size-125"],(t=[(r=u(["children",n.Children.toArray(["Content above large Divider"])]),n.createElement(v,s(r))),n.createElement(Z,{size:"L"}),(i=u(["children",n.Children.toArray(["Content above medium Divider"])]),n.createElement(v,s(i))),n.createElement(Z,{size:"M"}),(o=u(["children",n.Children.toArray(["Content above small Divider"])]),n.createElement(v,s(o))),n.createElement(Z,{size:"S"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(B,s(e))))})}function Ld(){const e=a(["Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Divider.html"})," for more details."]);return l.exports.createElement(z,{title:"Divider",description:e,examples:a([l.exports.createElement(zd,null),l.exports.createElement(Rd,null),l.exports.createElement(Pd,null)])})}function Gd(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Footer "\xA9 All rights reserved."
`,description:d(),elements:u((e=u(["children",n.Children.toArray(["\xA9 All rights reserved."])]),n.createElement(or,s(e))))})}function $d(){const e=a(["Footer represents a footer within a Spectrum container.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Footer.html"})," for more details."]);return l.exports.createElement(z,{title:"Footer",description:e,examples:u(l.exports.createElement(Gd,null))})}function Hd(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Header "Header example..."
`,description:d(),elements:u((e=u(["children",n.Children.toArray(["Header example..."])]),n.createElement(ir,s(e))))})}function Od(){const e=a(["Header represents a header within a Spectrum container.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Header.html"})," for more details."]);return l.exports.createElement(z,{title:"Header",description:e,examples:u(l.exports.createElement(Hd,null))})}function Wd(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Heading [
    Heading.level 4
    Heading.content "A level 4 heading..."
]`,description:d(),elements:u(n.createElement(J,{level:4,children:"A level 4 heading..."}))})}function qd(){const e=a(["Heading is used to create various levels of typographic hierarchies.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Heading.html"})," for more details."]);return l.exports.createElement(z,{title:"Heading",description:e,examples:u(l.exports.createElement(Wd,null))})}function Ud(){let e,t,r,i;return l.exports.createElement(g,{title:"No search results",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.NoSearchResults []
    Spectrum.Heading "No matching results"
    Spectrum.Content "Try another search"
]`,description:d(),elements:u((e=a([(t=ui,n.createElement(t,{})),(r=u(["children",n.Children.toArray(["No matching results"])]),n.createElement(J,s(r))),(i=u(["children",n.Children.toArray(["Try another search"])]),n.createElement(K,s(i)))]),l.exports.createElement(Pt,d(),...e)))})}function jd(){let e,t,r,i;return l.exports.createElement(g,{title:"403 forbidden",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Unauthorized []
    Spectrum.Heading "Error 403: Access not allowed"
    Spectrum.Content "You do not have permission to access this page. Try checking the URL or visit a different page."
]`,description:d(),elements:u((e=a([(t=di,n.createElement(t,{})),(r=u(["children",n.Children.toArray(["Error 403: Access not allowed"])]),n.createElement(J,s(r))),(i=u(["children",n.Children.toArray(["You do not have permission to access this page. Try checking the URL or visit a different page."])]),n.createElement(K,s(i)))]),l.exports.createElement(Pt,d(),...e)))})}function Kd(){let e,t,r,i;return l.exports.createElement(g,{title:"404 not found",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.NotFound []
    Spectrum.Heading "Error 404: Page not found"
    Spectrum.Content "This page isn't available. Try checking the URL or visit a different page."
]`,description:d(),elements:u((e=a([(t=pi,n.createElement(t,{})),(r=u(["children",n.Children.toArray(["Error 404: Page not found"])]),n.createElement(J,s(r))),(i=u(["children",n.Children.toArray(["This page isn't available. Try checking the URL or visit a different page."])]),n.createElement(K,s(i)))]),l.exports.createElement(Pt,d(),...e)))})}function Jd(){let e,t,r,i;return l.exports.createElement(g,{title:"500 internal server error",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Error []
    Spectrum.Heading "Error 500: Internal server error"
    Spectrum.Content "Something went wrong. Please try again later."
]`,description:d(),elements:u((e=a([(t=hi,n.createElement(t,{})),(r=u(["children",n.Children.toArray(["Error 500: Internal server error"])]),n.createElement(J,s(r))),(i=u(["children",n.Children.toArray(["Something went wrong. Please try again later."])]),n.createElement(K,s(i)))]),l.exports.createElement(Pt,d(),...e)))})}function Yd(){let e,t,r,i;return l.exports.createElement(g,{title:"503 service unavailable",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Unavailable []
    Spectrum.Heading "Error 503: Service unavailble"
    Spectrum.Content "This page isn't working. Try a different page or try again later."
]`,description:d(),elements:u((e=a([(t=fi,n.createElement(t,{})),(r=u(["children",n.Children.toArray(["Error 503: Service unavailble"])]),n.createElement(J,s(r))),(i=u(["children",n.Children.toArray(["This page isn't working. Try a different page or try again later."])]),n.createElement(K,s(i)))]),l.exports.createElement(Pt,d(),...e)))})}function Xd(){let e,t,r,i;return l.exports.createElement(g,{title:"504 server timeout",code:`Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Timeout []
    Spectrum.Heading "Error 504: Server timeout"
    Spectrum.Content "The server took too long. Please try again later."
]`,description:d(),elements:u((e=a([(t=xi,n.createElement(t,{})),(r=u(["children",n.Children.toArray(["Error 504: Server timeout"])]),n.createElement(J,s(r))),(i=u(["children",n.Children.toArray(["The server took too long. Please try again later."])]),n.createElement(K,s(i)))]),l.exports.createElement(Pt,d(),...e)))})}function Zd(){const e=a(["An IllustratedMessage displays an illustration and a message, usually for an empty state or an error page.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html"})," for more details."]);return l.exports.createElement(z,{title:"IllustratedMessage",description:e,examples:a([l.exports.createElement(Ud,null),l.exports.createElement(jd,null),l.exports.createElement(Kd,null),l.exports.createElement(Jd,null),l.exports.createElement(Yd,null),l.exports.createElement(Xd,null)])})}function Qd(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Image [
    Image.src "https://i.imgur.com/Z7AzH2c.png"
    Image.alt "Sky and roof"
]`,description:d(),elements:u(n.createElement(Xr,{src:"https://i.imgur.com/Z7AzH2c.png",alt:"Sky and roof"}))})}function ep(){const e=a(["Image is used to insert and display an image within a component.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Image.html"})," for more details."]);return l.exports.createElement(z,{title:"Image",description:e,examples:u(l.exports.createElement(Qd,null))})}function tp(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Keyboard "\u2318V"
`,description:d(),elements:u((e=u(["children",n.Children.toArray(["\u2318V"])]),n.createElement(xn,s(e))))})}function np(){const e=a(["Keyboard represents text that specifies a keyboard command.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Keyboard.html"})," for more details."]);return l.exports.createElement(z,{title:"Keyboard",description:e,examples:u(l.exports.createElement(tp,null))})}function rp(){let e;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Text "A piece of text..."
`,description:d(),elements:u((e=u(["children",n.Children.toArray(["A piece of text..."])]),n.createElement(v,s(e))))})}function lp(){const e=a(["Text represents text with no specific semantic meaning.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Text.html"})," for more details."]);return l.exports.createElement(z,{title:"Text",description:e,examples:u(l.exports.createElement(rp,null))})}function ip(){let e,t;return l.exports.createElement(g,{title:"Default example",code:`Spectrum.View [
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
]`,description:d(),elements:u((e=a([["width",200],["borderColor","hover"],["borderWidth","thicker"],["padding","size-250"],["borderRadius","medium"],["backgroundColor",{base:U("static-green-400"),S:U("label-gray"),M:U("static-blue-300"),L:U("static-red-400")}],(t=[n.createElement(R,{children:"Click me!"})],["children",n.Children.toArray(Array.from(t))])]),n.createElement(P,s(e))))})}function op(){const e=a(["View is a general purpose container with no specific semantics that can be used for custom styling purposes. It supports Spectrum style props to ensure consistency with other Spectrum components.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/View.html"})," for more details."]);return l.exports.createElement(z,{title:"View",description:e,examples:u(l.exports.createElement(ip,null))})}function ap(){return l.exports.createElement(g,{title:"Default example",code:`Spectrum.Well [
    Well.content "Better a little which is well done, than a great deal imperfectly."
]`,description:d(),elements:u(n.createElement(Qn,{children:"Better a little which is well done, than a great deal imperfectly."}))})}function cp(){let e,t,r;return l.exports.createElement(g,{title:"Another example",code:`Spectrum.Well [
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
]`,description:d(),elements:u((e=a([["role","region"],["aria-labelledby","well-label"],(t=[l.exports.createElement("h3",{id:"well-label",children:n.Children.toArray(["Shipping Address"])}),(r=a(["601 Townsend Street",l.exports.createElement("br",{})," San Francisco, CA 94103"]),l.exports.createElement("p",{children:n.Children.toArray(Array.from(r))}))],["children",n.Children.toArray(Array.from(t))])]),n.createElement(Qn,s(e))))})}function sp(){const e=a(["A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.",l.exports.createElement("br",{}),l.exports.createElement("br",{})," Check the official ",l.exports.createElement("a",{children:n.Children.toArray(["documentation"]),href:"https://react-spectrum.adobe.com/react-spectrum/Well.html"})," for more details."]);return l.exports.createElement(z,{title:"Well",description:e,examples:a([l.exports.createElement(ap,null),l.exports.createElement(cp,null)])})}const mp=(()=>{let e=!1;try{if(typeof window!="undefined"&&typeof window.addEventListener=="function"){const t={passive:!0};window.addEventListener("testPassiveEventSupport",r=>{},t),window.removeEventListener("testPassiveEventSupport",r=>{})}}catch{}return e})();function qn(e){return Mo(t=>t.passive&&!mp?{capture:t.capture,once:t.once,passive:!1}:t,e)}function Un(e){return zo(t=>{if(t.capture)return{capture:!0}},e)}function bt(e,t){if(t.indexOf(e)===0)return t}function Ur(e,t){if(_o(t,e))return t}function up(e){return e===1?t=>{let r,i,o,c,m,p;return r=bt("/",t),r!=null?(i=r,"#"+i):(o=bt("#/",t),o!=null?(c=o,c):(m=bt("#",t),m!=null?(p=m,"#/"+pl(p,1,p.length-1)):"#/"+t))}:t=>{let r,i;return r=bt("/",t),r!=null?(i=r,i):"/"+t}}function D(e,t){return up(t)(Nn("/",Uo(r=>((r.indexOf("?")>=0?!0:r.indexOf("#")===0)?!0:r.indexOf("/")===0)?r:encodeURIComponent(r),e)))}function dp(e,t,r){t===1?history.pushState(void 0,"",D(e,r)):history.replaceState(void 0,"",D(e,r));const i=document.createEvent("CustomEvent");i.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(i)}function Bl(e,t){return Wo(r=>{if(Bo(r))return d();{const i=Vo(r,"#");if(i==="?")return d();if(bt("?",i)!=null)return u(i);{const o=i.split("?");if(!zr((c,m)=>c===m,o,null)&&o.length===1){const c=o[0];return u(decodeURIComponent(c))}else if(!zr((c,m)=>c===m,o,null)&&o.length===2)if(o[1]===""){const c=o[0];return u(decodeURIComponent(c))}else{const c=o[0],m=o[1];return a([decodeURIComponent(c),"?"+m])}else return d()}}},a(Do(bt("#",e)!=null?pl(e,1,e.length-1):t===1&&(Ur("#",e)!=null||Ur("#/",e)!=null)?"":e,["/"],null,0)))}function pp(e,t,r){return t(Bl(e===2?window.location.pathname+window.location.search:window.location.hash,e))}const hp=xc(e=>{const t=fn(f=>{const x=an(e.onUrlChanged,y=>{});pp(an(e.hashMode,1),x)});if(window.navigator.userAgent.indexOf("Trident")>=0?!0:window.navigator.userAgent.indexOf("MSIE")>=0){const f="hashchange",x=M=>{t(M)},S=oe(()=>qn(void 0),[void 0]),A=oe(()=>Un(void 0),[void 0]),I=oe(()=>M=>{x(M)},[x]);Wn(fn(()=>{if(S==null)window.addEventListener(f,I);else{const M=S;window.addEventListener(f,I,M)}return en(()=>{if(A==null)window.removeEventListener(f,I);else{const M=A;window.removeEventListener(f,I,M)}})}))}else{const f="popstate",x=t,y=void 0,S=oe(()=>qn(y),[y]),A=oe(()=>Un(y),[y]),I=oe(()=>M=>{x(M)},[x]);Wn(fn(()=>{if(S==null)window.addEventListener(f,I);else{const M=S;window.addEventListener(f,I,M)}return en(()=>{if(A==null)window.removeEventListener(f,I);else{const M=A;window.removeEventListener(f,I,M)}})}))}const r="CUSTOM_NAVIGATION_EVENT",i=t,o=void 0,c=oe(()=>qn(o),[o]),m=oe(()=>Un(o),[o]),p=oe(()=>f=>{i(f)},[i]);Wn(fn(()=>{if(c==null)window.addEventListener(r,p);else{const f=c;window.addEventListener(r,p,f)}return en(()=>{if(m==null)window.removeEventListener(r,p);else{const f=m;window.removeEventListener(r,p,f)}})}));const h=e.application;return h==null?null:h});function fe(e,t,r){const i=a([["key",e],["title",t],["children",Array.from(r)]]);return n.createElement(Ee,s(i))}function N(e,t){return n.createElement(E,{key:e,textValue:t,title:t})}function fp(){return a([fe("general","General",[N("overview","Overview"),N("installation","Installation")]),fe("application","Application",[N("provider","Provider")]),fe("layout","Layout",[N("flex","Flex"),N("grid","Grid")]),fe("buttons","Buttons",[N("actionButton","ActionButton"),N("actionGroup","ActionGroup"),N("button","Button"),N("buttonGroup","ButtonGroup"),N("logicButton","LogicButton"),N("toggleButton","ToggleButton")]),fe("collections","Collections",[N("actionMenu","ActionMenu"),N("listBox","ListBox"),N("menu","Menu"),N("menuTrigger","MenuTrigger"),N("tableView","TableView")]),fe("forms","Forms",[N("checkbox","Checkbox"),N("checkboxGroup","CheckboxGroup"),N("form","Form"),N("numberField","NumberField"),N("radioGroup","RadioGroup"),N("searchField","SearchField"),N("switch","Switch"),N("textArea","TextArea"),N("textField","TextField")]),fe("icons","Icons",[N("workflowIcons","Workflow Icons")]),fe("navigation","Navigation",[N("breadcrumbs","Breadcrumbs"),N("link","Link"),N("tabs","Tabs")]),fe("overlays","Overlays",[N("alertDialog","AlertDialog"),N("dialog","Dialog"),N("dialogContainer","DialogContainer"),N("dialogTrigger","DialogTrigger"),N("tooltip","Tooltip"),N("contextualHelp","ContextualHelp")]),fe("pickers","Pickers",[N("comboBox","ComboBox"),N("picker","Picker")]),fe("sliders","Sliders",[N("rangeSlider","RangeSlider"),N("slider","Slider")]),fe("status","Status",[N("meter","Meter"),N("progressBar","ProgressBar"),N("progressCircle","ProgressCircle"),N("statusLight","StatusLight")]),fe("content'","Content",[N("content","Content"),N("divider","Divider"),N("footer","Footer"),N("header","Header"),N("heading","Heading"),N("illustratedMessage","IllustratedMessage"),N("image","Image"),N("keyboard","Keyboard"),N("text","Text"),N("view","View"),N("well","Well")])])}function xp(e){switch(e){case"installation":return l.exports.createElement(Sc,null);case"actionButton":return l.exports.createElement(Ac,null);case"actionGroup":return l.exports.createElement(_c,null);case"button":return l.exports.createElement(Nc,null);case"buttonGroup":return l.exports.createElement(Pc,null);case"toggleButton":return l.exports.createElement(jc,null);case"provider":return l.exports.createElement(Qc,null);case"flex":return l.exports.createElement(os,null);case"grid":return l.exports.createElement(ss,null);case"logicButton":return l.exports.createElement(Hc,null);case"actionMenu":return l.exports.createElement(As,null);case"listBox":return l.exports.createElement(Es,null);case"menu":return l.exports.createElement(Ds,null);case"menuTrigger":return l.exports.createElement(Rs,null);case"tableView":return l.exports.createElement($s,null);case"checkbox":return l.exports.createElement(js,null);case"checkboxGroup":return l.exports.createElement(Zs,null);case"form":return l.exports.createElement(rm,null);case"numberField":return l.exports.createElement(hm,null);case"radioGroup":return l.exports.createElement(Sm,null);case"searchField":return l.exports.createElement(Am,null);case"switch":return l.exports.createElement(Fm,null);case"textArea":return l.exports.createElement($m,null);case"textField":return l.exports.createElement(Qm,null);case"workflowIcons":return l.exports.createElement(nu,null);case"breadcrumbs":return l.exports.createElement(cu,null);case"link":return l.exports.createElement(du,null);case"tabs":return l.exports.createElement(gu,null);case"alertDialog":return l.exports.createElement(Cu,null);case"dialog":return l.exports.createElement(Fu,null);case"dialogContainer":return l.exports.createElement(Vu,null);case"dialogTrigger":return l.exports.createElement(Gu,null);case"tooltip":return l.exports.createElement(Uu,null);case"contextualHelp":return l.exports.createElement(Xu,null);case"comboBox":return l.exports.createElement(id,null);case"picker":return l.exports.createElement(sd,null);case"rangeSlider":return l.exports.createElement(fd,null);case"slider":return l.exports.createElement(Sd,null);case"meter":return l.exports.createElement(Ad,null);case"progressBar":return l.exports.createElement(Id,null);case"progressCircle":return l.exports.createElement(Bd,null);case"statusLight":return l.exports.createElement(Vd,null);case"content":return l.exports.createElement(Md,null);case"divider":return l.exports.createElement(Ld,null);case"footer":return l.exports.createElement($d,null);case"header":return l.exports.createElement(Od,null);case"heading":return l.exports.createElement(qd,null);case"illustratedMessage":return l.exports.createElement(Zd,null);case"image":return l.exports.createElement(ep,null);case"keyboard":return l.exports.createElement(np,null);case"text":return l.exports.createElement(lp,null);case"view":return l.exports.createElement(op,null);case"well":return l.exports.createElement(sp,null);default:return l.exports.createElement(Ec,null)}}function Dl(e){let t;switch(k(e)?t=54:T(e)===""?k(F(e))?t=0:t=54:T(e)==="installation"?k(F(e))?t=1:t=54:T(e)==="provider"?k(F(e))?t=2:t=54:T(e)==="flex"?k(F(e))?t=3:t=54:T(e)==="grid"?k(F(e))?t=4:t=54:T(e)==="actionbutton"?k(F(e))?t=5:t=54:T(e)==="actiongroup"?k(F(e))?t=6:t=54:T(e)==="button"?k(F(e))?t=7:t=54:T(e)==="buttongroup"?k(F(e))?t=8:t=54:T(e)==="logicbutton"?k(F(e))?t=9:t=54:T(e)==="togglebutton"?k(F(e))?t=10:t=54:T(e)==="actionmenu"?k(F(e))?t=11:t=54:T(e)==="listbox"?k(F(e))?t=12:t=54:T(e)==="menu"?k(F(e))?t=13:t=54:T(e)==="menutrigger"?k(F(e))?t=14:t=54:T(e)==="tableview"?k(F(e))?t=15:t=54:T(e)==="checkbox"?k(F(e))?t=16:t=54:T(e)==="checkboxgroup"?k(F(e))?t=17:t=54:T(e)==="form"?k(F(e))?t=18:t=54:T(e)==="numberfield"?k(F(e))?t=19:t=54:T(e)==="radiogroup"?k(F(e))?t=20:t=54:T(e)==="searchfield"?k(F(e))?t=21:t=54:T(e)==="switch"?k(F(e))?t=22:t=54:T(e)==="textarea"?k(F(e))?t=23:t=54:T(e)==="textfield"?k(F(e))?t=24:t=54:T(e)==="icons"?k(F(e))?t=25:t=54:T(e)==="breadcrumbs"?k(F(e))?t=26:t=54:T(e)==="link"?k(F(e))?t=27:t=54:T(e)==="tabs"?k(F(e))?t=28:t=54:T(e)==="alertdialog"?k(F(e))?t=29:t=54:T(e)==="dialog"?k(F(e))?t=30:t=54:T(e)==="dialogcontainer"?k(F(e))?t=31:t=54:T(e)==="dialogtrigger"?k(F(e))?t=32:t=54:T(e)==="tooltip"?k(F(e))?t=33:t=54:T(e)==="contextualhelp"?k(F(e))?t=34:t=54:T(e)==="combobox"?k(F(e))?t=35:t=54:T(e)==="picker"?k(F(e))?t=36:t=54:T(e)==="rangeslider"?k(F(e))?t=37:t=54:T(e)==="slider"?k(F(e))?t=38:t=54:T(e)==="meter"?k(F(e))?t=39:t=54:T(e)==="progressbar"?k(F(e))?t=40:t=54:T(e)==="progresscircle"?k(F(e))?t=41:t=54:T(e)==="statuslight"?k(F(e))?t=42:t=54:T(e)==="content"?k(F(e))?t=43:t=54:T(e)==="divider"?k(F(e))?t=44:t=54:T(e)==="footer"?k(F(e))?t=45:t=54:T(e)==="header"?k(F(e))?t=46:t=54:T(e)==="heading"?k(F(e))?t=47:t=54:T(e)==="illustratedmessage"?k(F(e))?t=48:t=54:T(e)==="image"?k(F(e))?t=49:t=54:T(e)==="keyboard"?k(F(e))?t=50:t=54:T(e)==="text"?k(F(e))?t=51:t=54:T(e)==="view"?k(F(e))?t=52:t=54:T(e)==="well"&&k(F(e))?t=53:t=54,t){case 0:return"overview";case 1:return"installation";case 2:return"provider";case 3:return"flex";case 4:return"grid";case 5:return"actionButton";case 6:return"actionGroup";case 7:return"button";case 8:return"buttonGroup";case 9:return"logicButton";case 10:return"toggleButton";case 11:return"actionMenu";case 12:return"listBox";case 13:return"menu";case 14:return"menuTrigger";case 15:return"tableView";case 16:return"checkbox";case 17:return"checkboxGroup";case 18:return"form";case 19:return"numberField";case 20:return"radioGroup";case 21:return"searchField";case 22:return"switch";case 23:return"textArea";case 24:return"textField";case 25:return"workflowIcons";case 26:return"breadcrumbs";case 27:return"link";case 28:return"tabs";case 29:return"alertDialog";case 30:return"dialog";case 31:return"dialogContainer";case 32:return"dialogTrigger";case 33:return"tooltip";case 34:return"contextualHelp";case 35:return"comboBox";case 36:return"picker";case 37:return"rangeSlider";case 38:return"slider";case 39:return"meter";case 40:return"progressBar";case 41:return"progressCircle";case 42:return"statusLight";case 43:return"content";case 44:return"divider";case 45:return"footer";case 46:return"header";case 47:return"heading";case 48:return"illustratedMessage";case 49:return"image";case 50:return"keyboard";case 51:return"text";case 52:return"view";case 53:return"well";case 54:return"overview"}}function gp(e){switch(e){case"installation":return D(u("installation"),1);case"provider":return D(u("provider"),1);case"flex":return D(u("flex"),1);case"grid":return D(u("grid"),1);case"actionButton":return D(u("actionbutton"),1);case"actionGroup":return D(u("actiongroup"),1);case"button":return D(u("button"),1);case"buttonGroup":return D(u("buttongroup"),1);case"logicButton":return D(u("logicbutton"),1);case"toggleButton":return D(u("togglebutton"),1);case"actionMenu":return D(u("actionmenu"),1);case"listBox":return D(u("listbox"),1);case"menu":return D(u("menu"),1);case"menuTrigger":return D(u("menutrigger"),1);case"tableView":return D(u("tableview"),1);case"checkbox":return D(u("checkbox"),1);case"checkboxGroup":return D(u("checkboxgroup"),1);case"form":return D(u("form"),1);case"numberField":return D(u("numberfield"),1);case"radioGroup":return D(u("radiogroup"),1);case"searchField":return D(u("searchfield"),1);case"switch":return D(u("switch"),1);case"textArea":return D(u("textarea"),1);case"textField":return D(u("textfield"),1);case"workflowIcons":return D(u("icons"),1);case"breadcrumbs":return D(u("breadcrumbs"),1);case"link":return D(u("link"),1);case"tabs":return D(u("tabs"),1);case"alertDialog":return D(u("alertdialog"),1);case"dialog":return D(u("dialog"),1);case"dialogContainer":return D(u("dialogcontainer"),1);case"dialogTrigger":return D(u("dialogtrigger"),1);case"tooltip":return D(u("tooltip"),1);case"contextualHelp":return D(u("contextualhelp"),1);case"comboBox":return D(u("combobox"),1);case"picker":return D(u("picker"),1);case"rangeSlider":return D(u("rangeslider"),1);case"slider":return D(u("slider"),1);case"meter":return D(u("meter"),1);case"progressBar":return D(u("progressbar"),1);case"progressCircle":return D(u("progresscircle"),1);case"statusLight":return D(u("statuslight"),1);case"content":return D(u("content"),1);case"divider":return D(u("divider"),1);case"footer":return D(u("footer"),1);case"header":return D(u("header"),1);case"heading":return D(u("heading"),1);case"illustratedMessage":return D(u("illustratedmessage"),1);case"image":return D(u("image"),1);case"keyboard":return D(u("keyboard"),1);case"text":return D(u("text"),1);case"view":return D(u("view"),1);case"well":return D(u("well"),1);default:return D(u(""),1)}}class Vl extends gt{constructor(t){super();this.SelectedDoc=t}}class Ep extends mr{constructor(t,...r){super();this.tag=t|0,this.fields=r}cases(){return["SelectDocsId"]}}function Sp(){return[new Vl(Dl(Bl(window.location.hash,1))),d()]}function yp(e,t){return[new Vl(e.fields[0]),d()]}function bp(e){let t,r,i,o,c,m,p,h,f,x,y,S;const A=e.dispatch,I=e.model,M=fp(),_=V(!1),G=_[1],Q=_[0],se=a([["id","main"],["direction","column"],["alignItems","center"],(t=[(r=a([["id","toggle-host"],["borderBottomColor","dark"],["borderBottomWidth","thin"],["alignSelf","stretch"],(i=[(o=a([["isSelected",Q],["onChange",G],(c=w(b(()=>{let Y,me;return C(Q?(Y=gi,n.createElement(Y,{})):(me=Ei,n.createElement(me,{})))})),["children",n.Children.toArray(Array.from(c))]),["alignSelf","start"]]),n.createElement(vt,s(o)))],["children",n.Children.toArray(Array.from(i))])]),n.createElement(P,s(r))),(m=a([["id","main-content"],["flex",1],["columnGap","size-300"],["direction","row"],(p=[(h=w(b(()=>L(C(["id","navigation-list-host"]),b(()=>L(Q?Rn():C(["UNSAFE_className","collapsed"]),b(()=>L(C(["backgroundColor","gray-200"]),b(()=>{let Y,me;return C((Y=[(me=a([["id","navigation-list"],["children",Array.from(M)],["aria-label","Navigation panel"],["selectionMode","single"],["disallowEmptySelection",!0],["selectedKeys",[I.SelectedDoc]],["onSelectionChange",Nl=>{const Pn=pe(Nl.values());let hn,gr;switch(k(Pn)?hn=1:k(F(Pn))?(hn=0,gr=T(Pn)):hn=1,hn){case 0:{dp(u(gp(gr)),1,1),G(!1),document.getElementById("content-host").scrollTo(0,0);break}}}]]),n.createElement(Re,s(me)))],["children",n.Children.toArray(Array.from(Y))]))})))))))),n.createElement(P,s(h))),(f=a([["id","content-host"],(x=[(y=u(hp(s(a([["onUrlChanged",Y=>{A(new Ep(0,Dl(Y)))}],(S=u(xp(I.SelectedDoc)),["application",l.exports.createElement(l.exports.Fragment,{},...S)])])))),l.exports.createElement("div",{children:n.Children.toArray(Array.from(y))}))],["children",n.Children.toArray(Array.from(x))])]),n.createElement(P,s(f)))],["children",n.Children.toArray(Array.from(p))])]),n.createElement(B,s(m)))],["children",n.Children.toArray(Array.from(t))])]);return n.createElement(B,s(se))}function Cp(e,t){let r,i;const o=a([(r=wt,["theme",r]),["colorScheme","light"],["locale","en-US"],["id","spectrum-provider"],(i=[l.exports.createElement(bp,{model:e,dispatch:t})],["children",n.Children.toArray(Array.from(i))])]);return n.createElement(st,s(o))}Xa(nc("app-root",ja(Sp,yp,Cp)));
