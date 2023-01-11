(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}})();function cl(e,t){const o=Object.create(null),a=e.split(",");for(let i=0;i<a.length;i++)o[a[i]]=!0;return t?i=>!!o[i.toLowerCase()]:i=>!!o[i]}const nm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",em=cl(nm);function hp(e){return!!e||e===""}function ae(e){if(rn(e)){const t={};for(let o=0;o<e.length;o++){const a=e[o],i=Wn(a)?om(a):ae(a);if(i)for(const l in i)t[l]=i[l]}return t}else{if(Wn(e))return e;if(Yn(e))return e}}const tm=/;(?![^(]*\))/g,sm=/:(.+)/;function om(e){const t={};return e.split(tm).forEach(o=>{if(o){const a=o.split(sm);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Bn(e){let t="";if(Wn(e))t=e;else if(rn(e))for(let o=0;o<e.length;o++){const a=Bn(e[o]);a&&(t+=a+" ")}else if(Yn(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}function T(e){if(!e)return null;let{class:t,style:o}=e;return t&&!Wn(t)&&(e.class=Bn(t)),o&&(e.style=ae(o)),e}const Ee=e=>Wn(e)?e:e==null?"":rn(e)||Yn(e)&&(e.toString===kp||!mn(e.toString))?JSON.stringify(e,gp,2):String(e),gp=(e,t)=>t&&t.__v_isRef?gp(e,t.value):ms(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[a,i])=>(o[`${a} =>`]=i,o),{})}:_p(t)?{[`Set(${t.size})`]:[...t.values()]}:Yn(t)&&!rn(t)&&!yp(t)?String(t):t,Fn={},ds=[],De=()=>{},am=()=>!1,im=/^on[^a-z]/,ba=e=>im.test(e),pl=e=>e.startsWith("onUpdate:"),ue=Object.assign,ul=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},lm=Object.prototype.hasOwnProperty,yn=(e,t)=>lm.call(e,t),rn=Array.isArray,ms=e=>xa(e)==="[object Map]",_p=e=>xa(e)==="[object Set]",mn=e=>typeof e=="function",Wn=e=>typeof e=="string",dl=e=>typeof e=="symbol",Yn=e=>e!==null&&typeof e=="object",vp=e=>Yn(e)&&mn(e.then)&&mn(e.catch),kp=Object.prototype.toString,xa=e=>kp.call(e),rm=e=>xa(e).slice(8,-1),yp=e=>xa(e)==="[object Object]",ml=e=>Wn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jo=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},cm=/-(\w)/g,Ze=Sa(e=>e.replace(cm,(t,o)=>o?o.toUpperCase():"")),pm=/\B([A-Z])/g,Zt=Sa(e=>e.replace(pm,"-$1").toLowerCase()),wa=Sa(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wa=Sa(e=>e?`on${wa(e)}`:""),co=(e,t)=>!Object.is(e,t),fs=(e,t)=>{for(let o=0;o<e.length;o++)e[o](t)},la=(e,t,o)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:o})},gi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let or;const um=()=>or||(or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ye;class bp{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ye&&(this.parent=ye,this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}run(t){if(this.active){const o=ye;try{return ye=this,t()}finally{ye=o}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this.active){let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.scopes)for(o=0,a=this.scopes.length;o<a;o++)this.scopes[o].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function dm(e){return new bp(e)}function mm(e,t=ye){t&&t.active&&t.effects.push(e)}function fl(){return ye}function hl(e){ye&&ye.cleanups.push(e)}const gl=e=>{const t=new Set(e);return t.w=0,t.n=0,t},xp=e=>(e.w&St)>0,Sp=e=>(e.n&St)>0,fm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=St},hm=e=>{const{deps:t}=e;if(t.length){let o=0;for(let a=0;a<t.length;a++){const i=t[a];xp(i)&&!Sp(i)?i.delete(e):t[o++]=i,i.w&=~St,i.n&=~St}t.length=o}},_i=new WeakMap;let Ks=0,St=1;const vi=30;let Re;const Bt=Symbol(""),ki=Symbol("");class _l{constructor(t,o=null,a){this.fn=t,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,mm(this,a)}run(){if(!this.active)return this.fn();let t=Re,o=vt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Re,Re=this,vt=!0,St=1<<++Ks,Ks<=vi?fm(this):ar(this),this.fn()}finally{Ks<=vi&&hm(this),St=1<<--Ks,Re=this.parent,vt=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(ar(this),this.onStop&&this.onStop(),this.active=!1)}}function ar(e){const{deps:t}=e;if(t.length){for(let o=0;o<t.length;o++)t[o].delete(e);t.length=0}}let vt=!0;const wp=[];function Ss(){wp.push(vt),vt=!1}function ws(){const e=wp.pop();vt=e===void 0?!0:e}function $e(e,t,o){if(vt&&Re){let a=_i.get(e);a||_i.set(e,a=new Map);let i=a.get(o);i||a.set(o,i=gl()),zp(i)}}function zp(e,t){let o=!1;Ks<=vi?Sp(e)||(e.n|=St,o=!xp(e)):o=!e.has(Re),o&&(e.add(Re),Re.deps.push(e))}function lt(e,t,o,a,i,l){const r=_i.get(e);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(o==="length"&&rn(e))r.forEach((p,u)=>{(u==="length"||u>=a)&&c.push(p)});else switch(o!==void 0&&c.push(r.get(o)),t){case"add":rn(e)?ml(o)&&c.push(r.get("length")):(c.push(r.get(Bt)),ms(e)&&c.push(r.get(ki)));break;case"delete":rn(e)||(c.push(r.get(Bt)),ms(e)&&c.push(r.get(ki)));break;case"set":ms(e)&&c.push(r.get(Bt));break}if(c.length===1)c[0]&&yi(c[0]);else{const p=[];for(const u of c)u&&p.push(...u);yi(gl(p))}}function yi(e,t){const o=rn(e)?e:[...e];for(const a of o)a.computed&&ir(a);for(const a of o)a.computed||ir(a)}function ir(e,t){(e!==Re||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const gm=cl("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(dl)),_m=vl(),vm=vl(!1,!0),km=vl(!0),lr=ym();function ym(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...o){const a=$n(this);for(let l=0,r=this.length;l<r;l++)$e(a,"get",l+"");const i=a[t](...o);return i===-1||i===!1?a[t](...o.map($n)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...o){Ss();const a=$n(this)[t].apply(this,o);return ws(),a}}),e}function vl(e=!1,t=!1){return function(a,i,l){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&l===(e?t?Rm:Lp:t?Ep:Tp).get(a))return a;const r=rn(a);if(!e&&r&&yn(lr,i))return Reflect.get(lr,i,l);const c=Reflect.get(a,i,l);return(dl(i)?$p.has(i):gm(i))||(e||$e(a,"get",i),t)?c:Tn(c)?r&&ml(i)?c:c.value:Yn(c)?e?ps(c):jn(c):c}}const bm=Cp(),xm=Cp(!0);function Cp(e=!1){return function(o,a,i,l){let r=o[a];if(po(r)&&Tn(r)&&!Tn(i))return!1;if(!e&&!po(i)&&(bi(i)||(i=$n(i),r=$n(r)),!rn(o)&&Tn(r)&&!Tn(i)))return r.value=i,!0;const c=rn(o)&&ml(a)?Number(a)<o.length:yn(o,a),p=Reflect.set(o,a,i,l);return o===$n(l)&&(c?co(i,r)&&lt(o,"set",a,i):lt(o,"add",a,i)),p}}function Sm(e,t){const o=yn(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&o&&lt(e,"delete",t,void 0),a}function wm(e,t){const o=Reflect.has(e,t);return(!dl(t)||!$p.has(t))&&$e(e,"has",t),o}function zm(e){return $e(e,"iterate",rn(e)?"length":Bt),Reflect.ownKeys(e)}const Ip={get:_m,set:bm,deleteProperty:Sm,has:wm,ownKeys:zm},$m={get:km,set(e,t){return!0},deleteProperty(e,t){return!0}},Cm=ue({},Ip,{get:vm,set:xm}),kl=e=>e,za=e=>Reflect.getPrototypeOf(e);function qo(e,t,o=!1,a=!1){e=e.__v_raw;const i=$n(e),l=$n(t);o||(t!==l&&$e(i,"get",t),$e(i,"get",l));const{has:r}=za(i),c=a?kl:o?xl:uo;if(r.call(i,t))return c(e.get(t));if(r.call(i,l))return c(e.get(l));e!==i&&e.get(t)}function Bo(e,t=!1){const o=this.__v_raw,a=$n(o),i=$n(e);return t||(e!==i&&$e(a,"has",e),$e(a,"has",i)),e===i?o.has(e):o.has(e)||o.has(i)}function Wo(e,t=!1){return e=e.__v_raw,!t&&$e($n(e),"iterate",Bt),Reflect.get(e,"size",e)}function rr(e){e=$n(e);const t=$n(this);return za(t).has.call(t,e)||(t.add(e),lt(t,"add",e,e)),this}function cr(e,t){t=$n(t);const o=$n(this),{has:a,get:i}=za(o);let l=a.call(o,e);l||(e=$n(e),l=a.call(o,e));const r=i.call(o,e);return o.set(e,t),l?co(t,r)&&lt(o,"set",e,t):lt(o,"add",e,t),this}function pr(e){const t=$n(this),{has:o,get:a}=za(t);let i=o.call(t,e);i||(e=$n(e),i=o.call(t,e)),a&&a.call(t,e);const l=t.delete(e);return i&&lt(t,"delete",e,void 0),l}function ur(){const e=$n(this),t=e.size!==0,o=e.clear();return t&&lt(e,"clear",void 0,void 0),o}function Vo(e,t){return function(a,i){const l=this,r=l.__v_raw,c=$n(r),p=t?kl:e?xl:uo;return!e&&$e(c,"iterate",Bt),r.forEach((u,d)=>a.call(i,p(u),p(d),l))}}function Ko(e,t,o){return function(...a){const i=this.__v_raw,l=$n(i),r=ms(l),c=e==="entries"||e===Symbol.iterator&&r,p=e==="keys"&&r,u=i[e](...a),d=o?kl:t?xl:uo;return!t&&$e(l,"iterate",p?ki:Bt),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:c?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function ut(e){return function(...t){return e==="delete"?!1:this}}function Im(){const e={get(l){return qo(this,l)},get size(){return Wo(this)},has:Bo,add:rr,set:cr,delete:pr,clear:ur,forEach:Vo(!1,!1)},t={get(l){return qo(this,l,!1,!0)},get size(){return Wo(this)},has:Bo,add:rr,set:cr,delete:pr,clear:ur,forEach:Vo(!1,!0)},o={get(l){return qo(this,l,!0)},get size(){return Wo(this,!0)},has(l){return Bo.call(this,l,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Vo(!0,!1)},a={get(l){return qo(this,l,!0,!0)},get size(){return Wo(this,!0)},has(l){return Bo.call(this,l,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Ko(l,!1,!1),o[l]=Ko(l,!0,!1),t[l]=Ko(l,!1,!0),a[l]=Ko(l,!0,!0)}),[e,o,t,a]}const[Tm,Em,Lm,Mm]=Im();function yl(e,t){const o=t?e?Mm:Lm:e?Em:Tm;return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(yn(o,i)&&i in a?o:a,i,l)}const Pm={get:yl(!1,!1)},Om={get:yl(!1,!0)},Am={get:yl(!0,!1)},Tp=new WeakMap,Ep=new WeakMap,Lp=new WeakMap,Rm=new WeakMap;function Fm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dm(e){return e.__v_skip||!Object.isExtensible(e)?0:Fm(rm(e))}function jn(e){return po(e)?e:bl(e,!1,Ip,Pm,Tp)}function Hm(e){return bl(e,!1,Cm,Om,Ep)}function ps(e){return bl(e,!0,$m,Am,Lp)}function bl(e,t,o,a,i){if(!Yn(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=i.get(e);if(l)return l;const r=Dm(e);if(r===0)return e;const c=new Proxy(e,r===2?a:o);return i.set(e,c),c}function hs(e){return po(e)?hs(e.__v_raw):!!(e&&e.__v_isReactive)}function po(e){return!!(e&&e.__v_isReadonly)}function bi(e){return!!(e&&e.__v_isShallow)}function Mp(e){return hs(e)||po(e)}function $n(e){const t=e&&e.__v_raw;return t?$n(t):e}function $a(e){return la(e,"__v_skip",!0),e}const uo=e=>Yn(e)?jn(e):e,xl=e=>Yn(e)?ps(e):e;function Sl(e){vt&&Re&&(e=$n(e),zp(e.dep||(e.dep=gl())))}function wl(e,t){e=$n(e),e.dep&&yi(e.dep)}function Tn(e){return!!(e&&e.__v_isRef===!0)}function Q(e){return Pp(e,!1)}function je(e){return Pp(e,!0)}function Pp(e,t){return Tn(e)?e:new Nm(e,t)}class Nm{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:$n(t),this._value=o?t:uo(t)}get value(){return Sl(this),this._value}set value(t){t=this.__v_isShallow?t:$n(t),co(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:uo(t),wl(this))}}function C(e){return Tn(e)?e.value:e}const jm={get:(e,t,o)=>C(Reflect.get(e,t,o)),set:(e,t,o,a)=>{const i=e[t];return Tn(i)&&!Tn(o)?(i.value=o,!0):Reflect.set(e,t,o,a)}};function Op(e){return hs(e)?e:new Proxy(e,jm)}class qm{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:a}=t(()=>Sl(this),()=>wl(this));this._get=o,this._set=a}get value(){return this._get()}set value(t){this._set(t)}}function Bm(e){return new qm(e)}function Wm(e){const t=rn(e)?new Array(e.length):{};for(const o in e)t[o]=Km(e,o);return t}class Vm{constructor(t,o,a){this._object=t,this._key=o,this._defaultValue=a,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Km(e,t,o){const a=e[t];return Tn(a)?a:new Vm(e,t,o)}class Um{constructor(t,o,a,i){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _l(t,()=>{this._dirty||(this._dirty=!0,wl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=a}get value(){const t=$n(this);return Sl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gm(e,t,o=!1){let a,i;const l=mn(e);return l?(a=e,i=De):(a=e.get,i=e.set),new Um(a,i,l||!i,o)}function kt(e,t,o,a){let i;try{i=a?e(...a):e()}catch(l){Ca(l,t,o)}return i}function He(e,t,o,a){if(mn(e)){const l=kt(e,t,o,a);return l&&vp(l)&&l.catch(r=>{Ca(r,t,o)}),l}const i=[];for(let l=0;l<e.length;l++)i.push(He(e[l],t,o,a));return i}function Ca(e,t,o,a=!0){const i=t?t.vnode:null;if(t){let l=t.parent;const r=t.proxy,c=o;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,r,c)===!1)return}l=l.parent}const p=t.appContext.config.errorHandler;if(p){kt(p,null,10,[e,r,c]);return}}Ym(e,o,i,a)}function Ym(e,t,o,a=!0){console.error(e)}let ra=!1,xi=!1;const Se=[];let at=0;const Ys=[];let Us=null,is=0;const Qs=[];let mt=null,ls=0;const Ap=Promise.resolve();let zl=null,Si=null;function Xn(e){const t=zl||Ap;return e?t.then(this?e.bind(this):e):t}function Qm(e){let t=at+1,o=Se.length;for(;t<o;){const a=t+o>>>1;mo(Se[a])<e?t=a+1:o=a}return t}function Rp(e){(!Se.length||!Se.includes(e,ra&&e.allowRecurse?at+1:at))&&e!==Si&&(e.id==null?Se.push(e):Se.splice(Qm(e.id),0,e),Fp())}function Fp(){!ra&&!xi&&(xi=!0,zl=Ap.then(Np))}function Zm(e){const t=Se.indexOf(e);t>at&&Se.splice(t,1)}function Dp(e,t,o,a){rn(e)?o.push(...e):(!t||!t.includes(e,e.allowRecurse?a+1:a))&&o.push(e),Fp()}function Jm(e){Dp(e,Us,Ys,is)}function Xm(e){Dp(e,mt,Qs,ls)}function Ia(e,t=null){if(Ys.length){for(Si=t,Us=[...new Set(Ys)],Ys.length=0,is=0;is<Us.length;is++)Us[is]();Us=null,is=0,Si=null,Ia(e,t)}}function Hp(e){if(Ia(),Qs.length){const t=[...new Set(Qs)];if(Qs.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((o,a)=>mo(o)-mo(a)),ls=0;ls<mt.length;ls++)mt[ls]();mt=null,ls=0}}const mo=e=>e.id==null?1/0:e.id;function Np(e){xi=!1,ra=!0,Ia(e),Se.sort((o,a)=>mo(o)-mo(a));const t=De;try{for(at=0;at<Se.length;at++){const o=Se[at];o&&o.active!==!1&&kt(o,null,14)}}finally{at=0,Se.length=0,Hp(),ra=!1,zl=null,(Se.length||Ys.length||Qs.length)&&Np(e)}}function nf(e,t,...o){if(e.isUnmounted)return;const a=e.vnode.props||Fn;let i=o;const l=t.startsWith("update:"),r=l&&t.slice(7);if(r&&r in a){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:f,trim:m}=a[d]||Fn;m&&(i=o.map(h=>h.trim())),f&&(i=o.map(gi))}let c,p=a[c=Wa(t)]||a[c=Wa(Ze(t))];!p&&l&&(p=a[c=Wa(Zt(t))]),p&&He(p,e,6,i);const u=a[c+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,He(u,e,6,i)}}function jp(e,t,o=!1){const a=t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let r={},c=!1;if(!mn(e)){const p=u=>{const d=jp(u,t,!0);d&&(c=!0,ue(r,d))};!o&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}return!l&&!c?(a.set(e,null),null):(rn(l)?l.forEach(p=>r[p]=null):ue(r,l),a.set(e,r),r)}function Ta(e,t){return!e||!ba(t)?!1:(t=t.slice(2).replace(/Once$/,""),yn(e,t[0].toLowerCase()+t.slice(1))||yn(e,Zt(t))||yn(e,t))}let se=null,Ea=null;function ca(e){const t=se;return se=e,Ea=e&&e.type.__scopeId||null,t}function Cn(e){Ea=e}function In(){Ea=null}function g(e,t=se,o){if(!t||e._n)return e;const a=(...i)=>{a._d&&Sr(-1);const l=ca(t),r=e(...i);return ca(l),a._d&&Sr(1),r};return a._n=!0,a._c=!0,a._d=!0,a}function Va(e){const{type:t,vnode:o,proxy:a,withProxy:i,props:l,propsOptions:[r],slots:c,attrs:p,emit:u,render:d,renderCache:f,data:m,setupState:h,ctx:_,inheritAttrs:w}=e;let S,P;const M=ca(e);try{if(o.shapeFlag&4){const A=i||a;S=Ue(d.call(A,A,f,l,h,m,_)),P=p}else{const A=t;S=Ue(A.length>1?A(l,{attrs:p,slots:c,emit:u}):A(l,null)),P=t.props?p:ef(p)}}catch(A){Js.length=0,Ca(A,e,1),S=b(wt)}let L=S;if(P&&w!==!1){const A=Object.keys(P),{shapeFlag:W}=L;A.length&&W&7&&(r&&A.some(pl)&&(P=tf(P,r)),L=Yt(L,P))}return o.dirs&&(L=Yt(L),L.dirs=L.dirs?L.dirs.concat(o.dirs):o.dirs),o.transition&&(L.transition=o.transition),S=L,ca(M),S}const ef=e=>{let t;for(const o in e)(o==="class"||o==="style"||ba(o))&&((t||(t={}))[o]=e[o]);return t},tf=(e,t)=>{const o={};for(const a in e)(!pl(a)||!(a.slice(9)in t))&&(o[a]=e[a]);return o};function sf(e,t,o){const{props:a,children:i,component:l}=e,{props:r,children:c,patchFlag:p}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&p>=0){if(p&1024)return!0;if(p&16)return a?dr(a,r,u):!!r;if(p&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(r[m]!==a[m]&&!Ta(u,m))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:a===r?!1:a?r?dr(a,r,u):!0:!!r;return!1}function dr(e,t,o){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!Ta(o,l))return!0}return!1}function of({vnode:e,parent:t},o){for(;t&&t.subTree===e;)(e=t.vnode).el=o,t=t.parent}const qp=e=>e.__isSuspense;function af(e,t){t&&t.pendingBranch?rn(e)?t.effects.push(...e):t.effects.push(e):Xm(e)}function xe(e,t){if(Qn){let o=Qn.provides;const a=Qn.parent&&Qn.parent.provides;a===o&&(o=Qn.provides=Object.create(a)),o[e]=t}}function x(e,t,o=!1){const a=Qn||se;if(a){const i=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return o&&mn(t)?t.call(a.proxy):t}}function wo(e,t){return $l(e,null,t)}const mr={};function fn(e,t,o){return $l(e,t,o)}function $l(e,t,{immediate:o,deep:a,flush:i,onTrack:l,onTrigger:r}=Fn){const c=Qn;let p,u=!1,d=!1;if(Tn(e)?(p=()=>e.value,u=bi(e)):hs(e)?(p=()=>e,a=!0):rn(e)?(d=!0,u=e.some(P=>hs(P)||bi(P)),p=()=>e.map(P=>{if(Tn(P))return P.value;if(hs(P))return Ht(P);if(mn(P))return kt(P,c,2)})):mn(e)?t?p=()=>kt(e,c,2):p=()=>{if(!(c&&c.isUnmounted))return f&&f(),He(e,c,3,[m])}:p=De,t&&a){const P=p;p=()=>Ht(P())}let f,m=P=>{f=S.onStop=()=>{kt(P,c,4)}};if(ho)return m=De,t?o&&He(t,c,3,[p(),d?[]:void 0,m]):p(),De;let h=d?[]:mr;const _=()=>{if(!!S.active)if(t){const P=S.run();(a||u||(d?P.some((M,L)=>co(M,h[L])):co(P,h)))&&(f&&f(),He(t,c,3,[P,h===mr?void 0:h,m]),h=P)}else S.run()};_.allowRecurse=!!t;let w;i==="sync"?w=_:i==="post"?w=()=>Jn(_,c&&c.suspense):w=()=>Jm(_);const S=new _l(p,w);return t?o?_():h=S.run():i==="post"?Jn(S.run.bind(S),c&&c.suspense):S.run(),()=>{S.stop(),c&&c.scope&&ul(c.scope.effects,S)}}function lf(e,t,o){const a=this.proxy,i=Wn(e)?e.includes(".")?Bp(a,e):()=>a[e]:e.bind(a,a);let l;mn(t)?l=t:(l=t.handler,o=t);const r=Qn;ks(this);const c=$l(i,l.bind(a),o);return r?ks(r):Wt(),c}function Bp(e,t){const o=t.split(".");return()=>{let a=e;for(let i=0;i<o.length&&a;i++)a=a[o[i]];return a}}function Ht(e,t){if(!Yn(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Tn(e))Ht(e.value,t);else if(rn(e))for(let o=0;o<e.length;o++)Ht(e[o],t);else if(_p(e)||ms(e))e.forEach(o=>{Ht(o,t)});else if(yp(e))for(const o in e)Ht(e[o],t);return e}function Wp(e,t){e.shapeFlag&6&&e.component?Wp(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function En(e){return mn(e)?{setup:e,name:e.name}:e}const gs=e=>!!e.type.__asyncLoader,Vp=e=>e.type.__isKeepAlive,rf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const o=Jt(),a=o.ctx;if(!a.renderer)return()=>{const M=t.default&&t.default();return M&&M.length===1?M[0]:M};const i=new Map,l=new Set;let r=null;const c=o.suspense,{renderer:{p,m:u,um:d,o:{createElement:f}}}=a,m=f("div");a.activate=(M,L,A,W,q)=>{const Y=M.component;u(M,L,A,0,c),p(Y.vnode,M,L,A,Y,c,W,M.slotScopeIds,q),Jn(()=>{Y.isDeactivated=!1,Y.a&&fs(Y.a);const an=M.props&&M.props.onVnodeMounted;an&&Ie(an,Y.parent,M)},c)},a.deactivate=M=>{const L=M.component;u(M,m,null,1,c),Jn(()=>{L.da&&fs(L.da);const A=M.props&&M.props.onVnodeUnmounted;A&&Ie(A,L.parent,M),L.isDeactivated=!0},c)};function h(M){Ka(M),d(M,o,c,!0)}function _(M){i.forEach((L,A)=>{const W=Ei(L.type);W&&(!M||!M(W))&&w(A)})}function w(M){const L=i.get(M);!r||L.type!==r.type?h(L):r&&Ka(r),i.delete(M),l.delete(M)}fn(()=>[e.include,e.exclude],([M,L])=>{M&&_(A=>Gs(M,A)),L&&_(A=>!Gs(L,A))},{flush:"post",deep:!0});let S=null;const P=()=>{S!=null&&i.set(S,Ua(o.subTree))};return zs(P),Yp(P),Ma(()=>{i.forEach(M=>{const{subTree:L,suspense:A}=o,W=Ua(L);if(M.type===W.type){Ka(W);const q=W.component.da;q&&Jn(q,A);return}h(M)})}),()=>{if(S=null,!t.default)return null;const M=t.default(),L=M[0];if(M.length>1)return r=null,M;if(!Gt(L)||!(L.shapeFlag&4)&&!(L.shapeFlag&128))return r=null,L;let A=Ua(L);const W=A.type,q=Ei(gs(A)?A.type.__asyncResolved||{}:W),{include:Y,exclude:an,max:un}=e;if(Y&&(!q||!Gs(Y,q))||an&&q&&Gs(an,q))return r=A,L;const vn=A.key==null?W:A.key,bn=i.get(vn);return A.el&&(A=Yt(A),L.shapeFlag&128&&(L.ssContent=A)),S=vn,bn?(A.el=bn.el,A.component=bn.component,A.transition&&Wp(A,A.transition),A.shapeFlag|=512,l.delete(vn),l.add(vn)):(l.add(vn),un&&l.size>parseInt(un,10)&&w(l.values().next().value)),A.shapeFlag|=256,r=A,qp(L.type)?L:A}}},Kp=rf;function Gs(e,t){return rn(e)?e.some(o=>Gs(o,t)):Wn(e)?e.split(",").includes(t):e.test?e.test(t):!1}function cf(e,t){Up(e,"a",t)}function pf(e,t){Up(e,"da",t)}function Up(e,t,o=Qn){const a=e.__wdc||(e.__wdc=()=>{let i=o;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(La(t,a,o),o){let i=o.parent;for(;i&&i.parent;)Vp(i.parent.vnode)&&uf(a,t,o,i),i=i.parent}}function uf(e,t,o,a){const i=La(t,e,a,!0);Pa(()=>{ul(a[t],i)},o)}function Ka(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function Ua(e){return e.shapeFlag&128?e.ssContent:e}function La(e,t,o=Qn,a=!1){if(o){const i=o[e]||(o[e]=[]),l=t.__weh||(t.__weh=(...r)=>{if(o.isUnmounted)return;Ss(),ks(o);const c=He(t,o,e,r);return Wt(),ws(),c});return a?i.unshift(l):i.push(l),l}}const rt=e=>(t,o=Qn)=>(!ho||e==="sp")&&La(e,t,o),Gp=rt("bm"),zs=rt("m"),df=rt("bu"),Yp=rt("u"),Ma=rt("bum"),Pa=rt("um"),mf=rt("sp"),ff=rt("rtg"),hf=rt("rtc");function gf(e,t=Qn){La("ec",e,t)}function Oa(e,t){const o=se;if(o===null)return e;const a=Ra(o)||o.proxy,i=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[r,c,p,u=Fn]=t[l];mn(r)&&(r={mounted:r,updated:r}),r.deep&&Ht(c),i.push({dir:r,instance:a,value:c,oldValue:void 0,arg:p,modifiers:u})}return e}function Et(e,t,o,a){const i=e.dirs,l=t&&t.dirs;for(let r=0;r<i.length;r++){const c=i[r];l&&(c.oldValue=l[r].value);let p=c.dir[a];p&&(Ss(),He(p,o,8,[e.el,c,e,t]),ws())}}const Qp="components",_f="directives";function qn(e,t){return Zp(Qp,e,!0,t)||e}const vf=Symbol();function fr(e){return Zp(_f,e)}function Zp(e,t,o=!0,a=!1){const i=se||Qn;if(i){const l=i.type;if(e===Qp){const c=Ei(l,!1);if(c&&(c===t||c===Ze(t)||c===wa(Ze(t))))return l}const r=hr(i[e]||l[e],t)||hr(i.appContext[e],t);return!r&&a?l:r}}function hr(e,t){return e&&(e[t]||e[Ze(t)]||e[wa(Ze(t))])}function zo(e,t,o,a){let i;const l=o&&o[a];if(rn(e)||Wn(e)){i=new Array(e.length);for(let r=0,c=e.length;r<c;r++)i[r]=t(e[r],r,void 0,l&&l[r])}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,l&&l[r])}else if(Yn(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,l&&l[c]));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,p=r.length;c<p;c++){const u=r[c];i[c]=t(e[u],u,c,l&&l[c])}}else i=[];return o&&(o[a]=i),i}function Je(e,t,o={},a,i){if(se.isCE||se.parent&&gs(se.parent)&&se.parent.isCE)return b("slot",t==="default"?null:{name:t},a&&a());let l=e[t];l&&l._c&&(l._d=!1),k();const r=l&&Jp(l(o)),c=z(Ln,{key:o.key||`_${t}`},r||(a?a():[]),r&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function Jp(e){return e.some(t=>Gt(t)?!(t.type===wt||t.type===Ln&&!Jp(t.children)):!0)?e:null}const wi=e=>e?cu(e)?Ra(e)||e.proxy:wi(e.parent):null,pa=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wi(e.parent),$root:e=>wi(e.root),$emit:e=>e.emit,$options:e=>nu(e),$forceUpdate:e=>e.f||(e.f=()=>Rp(e.update)),$nextTick:e=>e.n||(e.n=Xn.bind(e.proxy)),$watch:e=>lf.bind(e)}),kf={get({_:e},t){const{ctx:o,setupState:a,data:i,props:l,accessCache:r,type:c,appContext:p}=e;let u;if(t[0]!=="$"){const h=r[t];if(h!==void 0)switch(h){case 1:return a[t];case 2:return i[t];case 4:return o[t];case 3:return l[t]}else{if(a!==Fn&&yn(a,t))return r[t]=1,a[t];if(i!==Fn&&yn(i,t))return r[t]=2,i[t];if((u=e.propsOptions[0])&&yn(u,t))return r[t]=3,l[t];if(o!==Fn&&yn(o,t))return r[t]=4,o[t];zi&&(r[t]=0)}}const d=pa[t];let f,m;if(d)return t==="$attrs"&&$e(e,"get",t),d(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(o!==Fn&&yn(o,t))return r[t]=4,o[t];if(m=p.config.globalProperties,yn(m,t))return m[t]},set({_:e},t,o){const{data:a,setupState:i,ctx:l}=e;return i!==Fn&&yn(i,t)?(i[t]=o,!0):a!==Fn&&yn(a,t)?(a[t]=o,!0):yn(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:a,appContext:i,propsOptions:l}},r){let c;return!!o[r]||e!==Fn&&yn(e,r)||t!==Fn&&yn(t,r)||(c=l[0])&&yn(c,r)||yn(a,r)||yn(pa,r)||yn(i.config.globalProperties,r)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:yn(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};let zi=!0;function yf(e){const t=nu(e),o=e.proxy,a=e.ctx;zi=!1,t.beforeCreate&&gr(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:r,watch:c,provide:p,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:h,updated:_,activated:w,deactivated:S,beforeDestroy:P,beforeUnmount:M,destroyed:L,unmounted:A,render:W,renderTracked:q,renderTriggered:Y,errorCaptured:an,serverPrefetch:un,expose:vn,inheritAttrs:bn,components:Nn,directives:Vn,filters:te}=t;if(u&&bf(u,a,null,e.appContext.config.unwrapInjectedRef),r)for(const cn in r){const on=r[cn];mn(on)&&(a[cn]=on.bind(o))}if(i){const cn=i.call(o,o);Yn(cn)&&(e.data=jn(cn))}if(zi=!0,l)for(const cn in l){const on=l[cn],kn=mn(on)?on.bind(o,o):mn(on.get)?on.get.bind(o,o):De,Ve=!mn(on)&&mn(on.set)?on.set.bind(o):De,ie=R({get:kn,set:Ve});Object.defineProperty(a,cn,{enumerable:!0,configurable:!0,get:()=>ie.value,set:Ce=>ie.value=Ce})}if(c)for(const cn in c)Xp(c[cn],a,o,cn);if(p){const cn=mn(p)?p.call(o):p;Reflect.ownKeys(cn).forEach(on=>{xe(on,cn[on])})}d&&gr(d,e,"c");function ln(cn,on){rn(on)?on.forEach(kn=>cn(kn.bind(o))):on&&cn(on.bind(o))}if(ln(Gp,f),ln(zs,m),ln(df,h),ln(Yp,_),ln(cf,w),ln(pf,S),ln(gf,an),ln(hf,q),ln(ff,Y),ln(Ma,M),ln(Pa,A),ln(mf,un),rn(vn))if(vn.length){const cn=e.exposed||(e.exposed={});vn.forEach(on=>{Object.defineProperty(cn,on,{get:()=>o[on],set:kn=>o[on]=kn})})}else e.exposed||(e.exposed={});W&&e.render===De&&(e.render=W),bn!=null&&(e.inheritAttrs=bn),Nn&&(e.components=Nn),Vn&&(e.directives=Vn)}function bf(e,t,o=De,a=!1){rn(e)&&(e=$i(e));for(const i in e){const l=e[i];let r;Yn(l)?"default"in l?r=x(l.from||i,l.default,!0):r=x(l.from||i):r=x(l),Tn(r)&&a?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):t[i]=r}}function gr(e,t,o){He(rn(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,o)}function Xp(e,t,o,a){const i=a.includes(".")?Bp(o,a):()=>o[a];if(Wn(e)){const l=t[e];mn(l)&&fn(i,l)}else if(mn(e))fn(i,e.bind(o));else if(Yn(e))if(rn(e))e.forEach(l=>Xp(l,t,o,a));else{const l=mn(e.handler)?e.handler.bind(o):t[e.handler];mn(l)&&fn(i,l,e)}}function nu(e){const t=e.type,{mixins:o,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,c=l.get(t);let p;return c?p=c:!i.length&&!o&&!a?p=t:(p={},i.length&&i.forEach(u=>ua(p,u,r,!0)),ua(p,t,r)),l.set(t,p),p}function ua(e,t,o,a=!1){const{mixins:i,extends:l}=t;l&&ua(e,l,o,!0),i&&i.forEach(r=>ua(e,r,o,!0));for(const r in t)if(!(a&&r==="expose")){const c=xf[r]||o&&o[r];e[r]=c?c(e[r],t[r]):t[r]}return e}const xf={data:_r,props:Ot,emits:Ot,methods:Ot,computed:Ot,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:Ot,directives:Ot,watch:wf,provide:_r,inject:Sf};function _r(e,t){return t?e?function(){return ue(mn(e)?e.call(this,this):e,mn(t)?t.call(this,this):t)}:t:e}function Sf(e,t){return Ot($i(e),$i(t))}function $i(e){if(rn(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?ue(ue(Object.create(null),e),t):t}function wf(e,t){if(!e)return t;if(!t)return e;const o=ue(Object.create(null),e);for(const a in t)o[a]=le(e[a],t[a]);return o}function zf(e,t,o,a=!1){const i={},l={};la(l,Aa,1),e.propsDefaults=Object.create(null),eu(e,t,i,l);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);o?e.props=a?i:Hm(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function $f(e,t,o,a){const{props:i,attrs:l,vnode:{patchFlag:r}}=e,c=$n(i),[p]=e.propsOptions;let u=!1;if((a||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(Ta(e.emitsOptions,m))continue;const h=t[m];if(p)if(yn(l,m))h!==l[m]&&(l[m]=h,u=!0);else{const _=Ze(m);i[_]=Ci(p,c,_,h,e,!1)}else h!==l[m]&&(l[m]=h,u=!0)}}}else{eu(e,t,i,l)&&(u=!0);let d;for(const f in c)(!t||!yn(t,f)&&((d=Zt(f))===f||!yn(t,d)))&&(p?o&&(o[f]!==void 0||o[d]!==void 0)&&(i[f]=Ci(p,c,f,void 0,e,!0)):delete i[f]);if(l!==c)for(const f in l)(!t||!yn(t,f)&&!0)&&(delete l[f],u=!0)}u&&lt(e,"set","$attrs")}function eu(e,t,o,a){const[i,l]=e.propsOptions;let r=!1,c;if(t)for(let p in t){if(Jo(p))continue;const u=t[p];let d;i&&yn(i,d=Ze(p))?!l||!l.includes(d)?o[d]=u:(c||(c={}))[d]=u:Ta(e.emitsOptions,p)||(!(p in a)||u!==a[p])&&(a[p]=u,r=!0)}if(l){const p=$n(o),u=c||Fn;for(let d=0;d<l.length;d++){const f=l[d];o[f]=Ci(i,p,f,u[f],e,!yn(u,f))}}return r}function Ci(e,t,o,a,i,l){const r=e[o];if(r!=null){const c=yn(r,"default");if(c&&a===void 0){const p=r.default;if(r.type!==Function&&mn(p)){const{propsDefaults:u}=i;o in u?a=u[o]:(ks(i),a=u[o]=p.call(null,t),Wt())}else a=p}r[0]&&(l&&!c?a=!1:r[1]&&(a===""||a===Zt(o))&&(a=!0))}return a}function tu(e,t,o=!1){const a=t.propsCache,i=a.get(e);if(i)return i;const l=e.props,r={},c=[];let p=!1;if(!mn(e)){const d=f=>{p=!0;const[m,h]=tu(f,t,!0);ue(r,m),h&&c.push(...h)};!o&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!p)return a.set(e,ds),ds;if(rn(l))for(let d=0;d<l.length;d++){const f=Ze(l[d]);vr(f)&&(r[f]=Fn)}else if(l)for(const d in l){const f=Ze(d);if(vr(f)){const m=l[d],h=r[f]=rn(m)||mn(m)?{type:m}:m;if(h){const _=br(Boolean,h.type),w=br(String,h.type);h[0]=_>-1,h[1]=w<0||_<w,(_>-1||yn(h,"default"))&&c.push(f)}}}const u=[r,c];return a.set(e,u),u}function vr(e){return e[0]!=="$"}function kr(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function yr(e,t){return kr(e)===kr(t)}function br(e,t){return rn(t)?t.findIndex(o=>yr(o,e)):mn(t)&&yr(t,e)?0:-1}const su=e=>e[0]==="_"||e==="$stable",Cl=e=>rn(e)?e.map(Ue):[Ue(e)],Cf=(e,t,o)=>{if(t._n)return t;const a=g((...i)=>Cl(t(...i)),o);return a._c=!1,a},ou=(e,t,o)=>{const a=e._ctx;for(const i in e){if(su(i))continue;const l=e[i];if(mn(l))t[i]=Cf(i,l,a);else if(l!=null){const r=Cl(l);t[i]=()=>r}}},au=(e,t)=>{const o=Cl(t);e.slots.default=()=>o},If=(e,t)=>{if(e.vnode.shapeFlag&32){const o=t._;o?(e.slots=$n(t),la(t,"_",o)):ou(t,e.slots={})}else e.slots={},t&&au(e,t);la(e.slots,Aa,1)},Tf=(e,t,o)=>{const{vnode:a,slots:i}=e;let l=!0,r=Fn;if(a.shapeFlag&32){const c=t._;c?o&&c===1?l=!1:(ue(i,t),!o&&c===1&&delete i._):(l=!t.$stable,ou(t,i)),r=t}else t&&(au(e,t),r={default:1});if(l)for(const c in i)!su(c)&&!(c in r)&&delete i[c]};function iu(){return{app:null,config:{isNativeTag:am,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ef=0;function Lf(e,t){return function(a,i=null){mn(a)||(a=Object.assign({},a)),i!=null&&!Yn(i)&&(i=null);const l=iu(),r=new Set;let c=!1;const p=l.app={_uid:Ef++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:Yf,get config(){return l.config},set config(u){},use(u,...d){return r.has(u)||(u&&mn(u.install)?(r.add(u),u.install(p,...d)):mn(u)&&(r.add(u),u(p,...d))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,d){return d?(l.components[u]=d,p):l.components[u]},directive(u,d){return d?(l.directives[u]=d,p):l.directives[u]},mount(u,d,f){if(!c){const m=b(a,i);return m.appContext=l,d&&t?t(m,u):e(m,u,f),c=!0,p._container=u,u.__vue_app__=p,Ra(m.component)||m.component.proxy}},unmount(){c&&(e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return l.provides[u]=d,p}};return p}}function Ii(e,t,o,a,i=!1){if(rn(e)){e.forEach((m,h)=>Ii(m,t&&(rn(t)?t[h]:t),o,a,i));return}if(gs(a)&&!i)return;const l=a.shapeFlag&4?Ra(a.component)||a.component.proxy:a.el,r=i?null:l,{i:c,r:p}=e,u=t&&t.r,d=c.refs===Fn?c.refs={}:c.refs,f=c.setupState;if(u!=null&&u!==p&&(Wn(u)?(d[u]=null,yn(f,u)&&(f[u]=null)):Tn(u)&&(u.value=null)),mn(p))kt(p,c,12,[r,d]);else{const m=Wn(p),h=Tn(p);if(m||h){const _=()=>{if(e.f){const w=m?d[p]:p.value;i?rn(w)&&ul(w,l):rn(w)?w.includes(l)||w.push(l):m?(d[p]=[l],yn(f,p)&&(f[p]=d[p])):(p.value=[l],e.k&&(d[e.k]=p.value))}else m?(d[p]=r,yn(f,p)&&(f[p]=r)):h&&(p.value=r,e.k&&(d[e.k]=r))};r?(_.id=-1,Jn(_,o)):_()}}}const Jn=af;function Mf(e){return Pf(e)}function Pf(e,t){const o=um();o.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:r,createText:c,createComment:p,setText:u,setElementText:d,parentNode:f,nextSibling:m,setScopeId:h=De,cloneNode:_,insertStaticContent:w}=e,S=(v,y,E,H=null,D=null,V=null,Z=!1,B=null,U=!!y.dynamicChildren)=>{if(v===y)return;v&&!Ds(v,y)&&(H=nn(v),me(v,D,V,!0),v=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:N,ref:tn,shapeFlag:en}=y;switch(N){case Tl:P(v,y,E,H);break;case wt:M(v,y,E,H);break;case Ga:v==null&&L(y,E,H,Z);break;case Ln:Vn(v,y,E,H,D,V,Z,B,U);break;default:en&1?q(v,y,E,H,D,V,Z,B,U):en&6?te(v,y,E,H,D,V,Z,B,U):(en&64||en&128)&&N.process(v,y,E,H,D,V,Z,B,U,Dn)}tn!=null&&D&&Ii(tn,v&&v.ref,V,y||v,!y)},P=(v,y,E,H)=>{if(v==null)a(y.el=c(y.children),E,H);else{const D=y.el=v.el;y.children!==v.children&&u(D,y.children)}},M=(v,y,E,H)=>{v==null?a(y.el=p(y.children||""),E,H):y.el=v.el},L=(v,y,E,H)=>{[v.el,v.anchor]=w(v.children,y,E,H,v.el,v.anchor)},A=({el:v,anchor:y},E,H)=>{let D;for(;v&&v!==y;)D=m(v),a(v,E,H),v=D;a(y,E,H)},W=({el:v,anchor:y})=>{let E;for(;v&&v!==y;)E=m(v),i(v),v=E;i(y)},q=(v,y,E,H,D,V,Z,B,U)=>{Z=Z||y.type==="svg",v==null?Y(y,E,H,D,V,Z,B,U):vn(v,y,D,V,Z,B,U)},Y=(v,y,E,H,D,V,Z,B)=>{let U,N;const{type:tn,props:en,shapeFlag:sn,transition:pn,patchFlag:xn,dirs:On}=v;if(v.el&&_!==void 0&&xn===-1)U=v.el=_(v.el);else{if(U=v.el=r(v.type,V,en&&en.is,en),sn&8?d(U,v.children):sn&16&&un(v.children,U,null,H,D,V&&tn!=="foreignObject",Z,B),On&&Et(v,null,H,"created"),en){for(const Hn in en)Hn!=="value"&&!Jo(Hn)&&l(U,Hn,null,en[Hn],V,v.children,H,D,j);"value"in en&&l(U,"value",null,en.value),(N=en.onVnodeBeforeMount)&&Ie(N,H,v)}an(U,v,v.scopeId,Z,H)}On&&Et(v,null,H,"beforeMount");const An=(!D||D&&!D.pendingBranch)&&pn&&!pn.persisted;An&&pn.beforeEnter(U),a(U,y,E),((N=en&&en.onVnodeMounted)||An||On)&&Jn(()=>{N&&Ie(N,H,v),An&&pn.enter(U),On&&Et(v,null,H,"mounted")},D)},an=(v,y,E,H,D)=>{if(E&&h(v,E),H)for(let V=0;V<H.length;V++)h(v,H[V]);if(D){let V=D.subTree;if(y===V){const Z=D.vnode;an(v,Z,Z.scopeId,Z.slotScopeIds,D.parent)}}},un=(v,y,E,H,D,V,Z,B,U=0)=>{for(let N=U;N<v.length;N++){const tn=v[N]=B?ft(v[N]):Ue(v[N]);S(null,tn,y,E,H,D,V,Z,B)}},vn=(v,y,E,H,D,V,Z)=>{const B=y.el=v.el;let{patchFlag:U,dynamicChildren:N,dirs:tn}=y;U|=v.patchFlag&16;const en=v.props||Fn,sn=y.props||Fn;let pn;E&&Lt(E,!1),(pn=sn.onVnodeBeforeUpdate)&&Ie(pn,E,y,v),tn&&Et(y,v,E,"beforeUpdate"),E&&Lt(E,!0);const xn=D&&y.type!=="foreignObject";if(N?bn(v.dynamicChildren,N,B,E,H,xn,V):Z||kn(v,y,B,null,E,H,xn,V,!1),U>0){if(U&16)Nn(B,y,en,sn,E,H,D);else if(U&2&&en.class!==sn.class&&l(B,"class",null,sn.class,D),U&4&&l(B,"style",en.style,sn.style,D),U&8){const On=y.dynamicProps;for(let An=0;An<On.length;An++){const Hn=On[An],Pe=en[Hn],ts=sn[Hn];(ts!==Pe||Hn==="value")&&l(B,Hn,Pe,ts,D,v.children,E,H,j)}}U&1&&v.children!==y.children&&d(B,y.children)}else!Z&&N==null&&Nn(B,y,en,sn,E,H,D);((pn=sn.onVnodeUpdated)||tn)&&Jn(()=>{pn&&Ie(pn,E,y,v),tn&&Et(y,v,E,"updated")},H)},bn=(v,y,E,H,D,V,Z)=>{for(let B=0;B<y.length;B++){const U=v[B],N=y[B],tn=U.el&&(U.type===Ln||!Ds(U,N)||U.shapeFlag&70)?f(U.el):E;S(U,N,tn,null,H,D,V,Z,!0)}},Nn=(v,y,E,H,D,V,Z)=>{if(E!==H){for(const B in H){if(Jo(B))continue;const U=H[B],N=E[B];U!==N&&B!=="value"&&l(v,B,N,U,Z,y.children,D,V,j)}if(E!==Fn)for(const B in E)!Jo(B)&&!(B in H)&&l(v,B,E[B],null,Z,y.children,D,V,j);"value"in H&&l(v,"value",E.value,H.value)}},Vn=(v,y,E,H,D,V,Z,B,U)=>{const N=y.el=v?v.el:c(""),tn=y.anchor=v?v.anchor:c("");let{patchFlag:en,dynamicChildren:sn,slotScopeIds:pn}=y;pn&&(B=B?B.concat(pn):pn),v==null?(a(N,E,H),a(tn,E,H),un(y.children,E,tn,D,V,Z,B,U)):en>0&&en&64&&sn&&v.dynamicChildren?(bn(v.dynamicChildren,sn,E,D,V,Z,B),(y.key!=null||D&&y===D.subTree)&&Il(v,y,!0)):kn(v,y,E,tn,D,V,Z,B,U)},te=(v,y,E,H,D,V,Z,B,U)=>{y.slotScopeIds=B,v==null?y.shapeFlag&512?D.ctx.activate(y,E,H,Z,U):Pn(y,E,H,D,V,Z,U):ln(v,y,U)},Pn=(v,y,E,H,D,V,Z)=>{const B=v.component=Bf(v,H,D);if(Vp(v)&&(B.ctx.renderer=Dn),Wf(B),B.asyncDep){if(D&&D.registerDep(B,cn),!v.el){const U=B.subTree=b(wt);M(null,U,y,E)}return}cn(B,v,y,E,D,V,Z)},ln=(v,y,E)=>{const H=y.component=v.component;if(sf(v,y,E))if(H.asyncDep&&!H.asyncResolved){on(H,y,E);return}else H.next=y,Zm(H.update),H.update();else y.el=v.el,H.vnode=y},cn=(v,y,E,H,D,V,Z)=>{const B=()=>{if(v.isMounted){let{next:tn,bu:en,u:sn,parent:pn,vnode:xn}=v,On=tn,An;Lt(v,!1),tn?(tn.el=xn.el,on(v,tn,Z)):tn=xn,en&&fs(en),(An=tn.props&&tn.props.onVnodeBeforeUpdate)&&Ie(An,pn,tn,xn),Lt(v,!0);const Hn=Va(v),Pe=v.subTree;v.subTree=Hn,S(Pe,Hn,f(Pe.el),nn(Pe),v,D,V),tn.el=Hn.el,On===null&&of(v,Hn.el),sn&&Jn(sn,D),(An=tn.props&&tn.props.onVnodeUpdated)&&Jn(()=>Ie(An,pn,tn,xn),D)}else{let tn;const{el:en,props:sn}=y,{bm:pn,m:xn,parent:On}=v,An=gs(y);if(Lt(v,!1),pn&&fs(pn),!An&&(tn=sn&&sn.onVnodeBeforeMount)&&Ie(tn,On,y),Lt(v,!0),en&&gn){const Hn=()=>{v.subTree=Va(v),gn(en,v.subTree,v,D,null)};An?y.type.__asyncLoader().then(()=>!v.isUnmounted&&Hn()):Hn()}else{const Hn=v.subTree=Va(v);S(null,Hn,E,H,v,D,V),y.el=Hn.el}if(xn&&Jn(xn,D),!An&&(tn=sn&&sn.onVnodeMounted)){const Hn=y;Jn(()=>Ie(tn,On,Hn),D)}(y.shapeFlag&256||On&&gs(On.vnode)&&On.vnode.shapeFlag&256)&&v.a&&Jn(v.a,D),v.isMounted=!0,y=E=H=null}},U=v.effect=new _l(B,()=>Rp(N),v.scope),N=v.update=()=>U.run();N.id=v.uid,Lt(v,!0),N()},on=(v,y,E)=>{y.component=v;const H=v.vnode.props;v.vnode=y,v.next=null,$f(v,y.props,H,E),Tf(v,y.children,E),Ss(),Ia(void 0,v.update),ws()},kn=(v,y,E,H,D,V,Z,B,U=!1)=>{const N=v&&v.children,tn=v?v.shapeFlag:0,en=y.children,{patchFlag:sn,shapeFlag:pn}=y;if(sn>0){if(sn&128){ie(N,en,E,H,D,V,Z,B,U);return}else if(sn&256){Ve(N,en,E,H,D,V,Z,B,U);return}}pn&8?(tn&16&&j(N,D,V),en!==N&&d(E,en)):tn&16?pn&16?ie(N,en,E,H,D,V,Z,B,U):j(N,D,V,!0):(tn&8&&d(E,""),pn&16&&un(en,E,H,D,V,Z,B,U))},Ve=(v,y,E,H,D,V,Z,B,U)=>{v=v||ds,y=y||ds;const N=v.length,tn=y.length,en=Math.min(N,tn);let sn;for(sn=0;sn<en;sn++){const pn=y[sn]=U?ft(y[sn]):Ue(y[sn]);S(v[sn],pn,E,null,D,V,Z,B,U)}N>tn?j(v,D,V,!0,!1,en):un(y,E,H,D,V,Z,B,U,en)},ie=(v,y,E,H,D,V,Z,B,U)=>{let N=0;const tn=y.length;let en=v.length-1,sn=tn-1;for(;N<=en&&N<=sn;){const pn=v[N],xn=y[N]=U?ft(y[N]):Ue(y[N]);if(Ds(pn,xn))S(pn,xn,E,null,D,V,Z,B,U);else break;N++}for(;N<=en&&N<=sn;){const pn=v[en],xn=y[sn]=U?ft(y[sn]):Ue(y[sn]);if(Ds(pn,xn))S(pn,xn,E,null,D,V,Z,B,U);else break;en--,sn--}if(N>en){if(N<=sn){const pn=sn+1,xn=pn<tn?y[pn].el:H;for(;N<=sn;)S(null,y[N]=U?ft(y[N]):Ue(y[N]),E,xn,D,V,Z,B,U),N++}}else if(N>sn)for(;N<=en;)me(v[N],D,V,!0),N++;else{const pn=N,xn=N,On=new Map;for(N=xn;N<=sn;N++){const _e=y[N]=U?ft(y[N]):Ue(y[N]);_e.key!=null&&On.set(_e.key,N)}let An,Hn=0;const Pe=sn-xn+1;let ts=!1,er=0;const Fs=new Array(Pe);for(N=0;N<Pe;N++)Fs[N]=0;for(N=pn;N<=en;N++){const _e=v[N];if(Hn>=Pe){me(_e,D,V,!0);continue}let Ke;if(_e.key!=null)Ke=On.get(_e.key);else for(An=xn;An<=sn;An++)if(Fs[An-xn]===0&&Ds(_e,y[An])){Ke=An;break}Ke===void 0?me(_e,D,V,!0):(Fs[Ke-xn]=N+1,Ke>=er?er=Ke:ts=!0,S(_e,y[Ke],E,null,D,V,Z,B,U),Hn++)}const tr=ts?Of(Fs):ds;for(An=tr.length-1,N=Pe-1;N>=0;N--){const _e=xn+N,Ke=y[_e],sr=_e+1<tn?y[_e+1].el:H;Fs[N]===0?S(null,Ke,E,sr,D,V,Z,B,U):ts&&(An<0||N!==tr[An]?Ce(Ke,E,sr,2):An--)}}},Ce=(v,y,E,H,D=null)=>{const{el:V,type:Z,transition:B,children:U,shapeFlag:N}=v;if(N&6){Ce(v.component.subTree,y,E,H);return}if(N&128){v.suspense.move(y,E,H);return}if(N&64){Z.move(v,y,E,Dn);return}if(Z===Ln){a(V,y,E);for(let en=0;en<U.length;en++)Ce(U[en],y,E,H);a(v.anchor,y,E);return}if(Z===Ga){A(v,y,E);return}if(H!==2&&N&1&&B)if(H===0)B.beforeEnter(V),a(V,y,E),Jn(()=>B.enter(V),D);else{const{leave:en,delayLeave:sn,afterLeave:pn}=B,xn=()=>a(V,y,E),On=()=>{en(V,()=>{xn(),pn&&pn()})};sn?sn(V,xn,On):On()}else a(V,y,E)},me=(v,y,E,H=!1,D=!1)=>{const{type:V,props:Z,ref:B,children:U,dynamicChildren:N,shapeFlag:tn,patchFlag:en,dirs:sn}=v;if(B!=null&&Ii(B,null,E,v,!0),tn&256){y.ctx.deactivate(v);return}const pn=tn&1&&sn,xn=!gs(v);let On;if(xn&&(On=Z&&Z.onVnodeBeforeUnmount)&&Ie(On,y,v),tn&6)X(v.component,E,H);else{if(tn&128){v.suspense.unmount(E,H);return}pn&&Et(v,null,y,"beforeUnmount"),tn&64?v.type.remove(v,y,E,D,Dn,H):N&&(V!==Ln||en>0&&en&64)?j(N,y,E,!1,!0):(V===Ln&&en&384||!D&&tn&16)&&j(U,y,E),H&&pt(v)}(xn&&(On=Z&&Z.onVnodeUnmounted)||pn)&&Jn(()=>{On&&Ie(On,y,v),pn&&Et(v,null,y,"unmounted")},E)},pt=v=>{const{type:y,el:E,anchor:H,transition:D}=v;if(y===Ln){F(E,H);return}if(y===Ga){W(v);return}const V=()=>{i(E),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:Z,delayLeave:B}=D,U=()=>Z(E,V);B?B(v.el,V,U):U()}else V()},F=(v,y)=>{let E;for(;v!==y;)E=m(v),i(v),v=E;i(y)},X=(v,y,E)=>{const{bum:H,scope:D,update:V,subTree:Z,um:B}=v;H&&fs(H),D.stop(),V&&(V.active=!1,me(Z,v,y,E)),B&&Jn(B,y),Jn(()=>{v.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},j=(v,y,E,H=!1,D=!1,V=0)=>{for(let Z=V;Z<v.length;Z++)me(v[Z],y,E,H,D)},nn=v=>v.shapeFlag&6?nn(v.component.subTree):v.shapeFlag&128?v.suspense.next():m(v.anchor||v.el),wn=(v,y,E)=>{v==null?y._vnode&&me(y._vnode,null,null,!0):S(y._vnode||null,v,y,null,null,null,E),Hp(),y._vnode=v},Dn={p:S,um:me,m:Ce,r:pt,mt:Pn,mc:un,pc:kn,pbc:bn,n:nn,o:e};let _n,gn;return t&&([_n,gn]=t(Dn)),{render:wn,hydrate:_n,createApp:Lf(wn,_n)}}function Lt({effect:e,update:t},o){e.allowRecurse=t.allowRecurse=o}function Il(e,t,o=!1){const a=e.children,i=t.children;if(rn(a)&&rn(i))for(let l=0;l<a.length;l++){const r=a[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=ft(i[l]),c.el=r.el),o||Il(r,c))}}function Of(e){const t=e.slice(),o=[0];let a,i,l,r,c;const p=e.length;for(a=0;a<p;a++){const u=e[a];if(u!==0){if(i=o[o.length-1],e[i]<u){t[a]=i,o.push(a);continue}for(l=0,r=o.length-1;l<r;)c=l+r>>1,e[o[c]]<u?l=c+1:r=c;u<e[o[l]]&&(l>0&&(t[a]=o[l-1]),o[l]=a)}}for(l=o.length,r=o[l-1];l-- >0;)o[l]=r,r=t[r];return o}const Af=e=>e.__isTeleport,Zs=e=>e&&(e.disabled||e.disabled===""),xr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ti=(e,t)=>{const o=e&&e.to;return Wn(o)?t?t(o):null:o},Rf={__isTeleport:!0,process(e,t,o,a,i,l,r,c,p,u){const{mc:d,pc:f,pbc:m,o:{insert:h,querySelector:_,createText:w,createComment:S}}=u,P=Zs(t.props);let{shapeFlag:M,children:L,dynamicChildren:A}=t;if(e==null){const W=t.el=w(""),q=t.anchor=w("");h(W,o,a),h(q,o,a);const Y=t.target=Ti(t.props,_),an=t.targetAnchor=w("");Y&&(h(an,Y),r=r||xr(Y));const un=(vn,bn)=>{M&16&&d(L,vn,bn,i,l,r,c,p)};P?un(o,q):Y&&un(Y,an)}else{t.el=e.el;const W=t.anchor=e.anchor,q=t.target=e.target,Y=t.targetAnchor=e.targetAnchor,an=Zs(e.props),un=an?o:q,vn=an?W:Y;if(r=r||xr(q),A?(m(e.dynamicChildren,A,un,i,l,r,c),Il(e,t,!0)):p||f(e,t,un,vn,i,l,r,c,!1),P)an||Uo(t,o,W,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const bn=t.target=Ti(t.props,_);bn&&Uo(t,bn,null,u,0)}else an&&Uo(t,q,Y,u,1)}},remove(e,t,o,a,{um:i,o:{remove:l}},r){const{shapeFlag:c,children:p,anchor:u,targetAnchor:d,target:f,props:m}=e;if(f&&l(d),(r||!Zs(m))&&(l(u),c&16))for(let h=0;h<p.length;h++){const _=p[h];i(_,t,o,!0,!!_.dynamicChildren)}},move:Uo,hydrate:Ff};function Uo(e,t,o,{o:{insert:a},m:i},l=2){l===0&&a(e.targetAnchor,t,o);const{el:r,anchor:c,shapeFlag:p,children:u,props:d}=e,f=l===2;if(f&&a(r,t,o),(!f||Zs(d))&&p&16)for(let m=0;m<u.length;m++)i(u[m],t,o,2);f&&a(c,t,o)}function Ff(e,t,o,a,i,l,{o:{nextSibling:r,parentNode:c,querySelector:p}},u){const d=t.target=Ti(t.props,p);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Zs(t.props))t.anchor=u(r(e),t,c(e),o,a,i,l),t.targetAnchor=f;else{t.anchor=r(e);let m=f;for(;m;)if(m=r(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}u(f,t,d,o,a,i,l)}}return t.anchor&&r(t.anchor)}const Df=Rf,Ln=Symbol(void 0),Tl=Symbol(void 0),wt=Symbol(void 0),Ga=Symbol(void 0),Js=[];let Fe=null;function k(e=!1){Js.push(Fe=e?null:[])}function Hf(){Js.pop(),Fe=Js[Js.length-1]||null}let fo=1;function Sr(e){fo+=e}function lu(e){return e.dynamicChildren=fo>0?Fe||ds:null,Hf(),fo>0&&Fe&&Fe.push(e),e}function J(e,t,o,a,i,l){return lu(n(e,t,o,a,i,l,!0))}function z(e,t,o,a,i){return lu(b(e,t,o,a,i,!0))}function Gt(e){return e?e.__v_isVNode===!0:!1}function Ds(e,t){return e.type===t.type&&e.key===t.key}const Aa="__vInternal",ru=({key:e})=>e!=null?e:null,Xo=({ref:e,ref_key:t,ref_for:o})=>e!=null?Wn(e)||Tn(e)||mn(e)?{i:se,r:e,k:t,f:!!o}:e:null;function n(e,t=null,o=null,a=0,i=null,l=e===Ln?0:1,r=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ru(t),ref:t&&Xo(t),scopeId:Ea,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(El(p,o),l&128&&e.normalize(p)):o&&(p.shapeFlag|=Wn(o)?8:16),fo>0&&!r&&Fe&&(p.patchFlag>0||l&6)&&p.patchFlag!==32&&Fe.push(p),p}const b=Nf;function Nf(e,t=null,o=null,a=0,i=null,l=!1){if((!e||e===vf)&&(e=wt),Gt(e)){const c=Yt(e,t,!0);return o&&El(c,o),fo>0&&!l&&Fe&&(c.shapeFlag&6?Fe[Fe.indexOf(e)]=c:Fe.push(c)),c.patchFlag|=-2,c}if(Gf(e)&&(e=e.__vccOpts),t){t=I(t);let{class:c,style:p}=t;c&&!Wn(c)&&(t.class=Bn(c)),Yn(p)&&(Mp(p)&&!rn(p)&&(p=ue({},p)),t.style=ae(p))}const r=Wn(e)?1:qp(e)?128:Af(e)?64:Yn(e)?4:mn(e)?2:0;return n(e,t,o,a,i,r,l,!0)}function I(e){return e?Mp(e)||Aa in e?ue({},e):e:null}function Yt(e,t,o=!1){const{props:a,ref:i,patchFlag:l,children:r}=e,c=t?G(a||{},t):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ru(c),ref:t&&t.ref?o&&i?rn(i)?i.concat(Xo(t)):[i,Xo(t)]:Xo(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ln?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor}}function s(e=" ",t=0){return b(Tl,null,e,t)}function K(e="",t=!1){return t?(k(),z(wt,null,e)):b(wt,null,e)}function Ue(e){return e==null||typeof e=="boolean"?b(wt):rn(e)?b(Ln,null,e.slice()):typeof e=="object"?ft(e):b(Tl,null,String(e))}function ft(e){return e.el===null||e.memo?e:Yt(e)}function El(e,t){let o=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(rn(t))o=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),El(e,i()),i._c&&(i._d=!0));return}else{o=32;const i=t._;!i&&!(Aa in t)?t._ctx=se:i===3&&se&&(se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else mn(t)?(t={default:t,_ctx:se},o=32):(t=String(t),a&64?(o=16,t=[s(t)]):o=8);e.children=t,e.shapeFlag|=o}function G(...e){const t={};for(let o=0;o<e.length;o++){const a=e[o];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=Bn([t.class,a.class]));else if(i==="style")t.style=ae([t.style,a.style]);else if(ba(i)){const l=t[i],r=a[i];r&&l!==r&&!(rn(l)&&l.includes(r))&&(t[i]=l?[].concat(l,r):r)}else i!==""&&(t[i]=a[i])}return t}function Ie(e,t,o,a=null){He(e,t,7,[o,a])}const jf=iu();let qf=0;function Bf(e,t,o){const a=e.type,i=(t?t.appContext:e.appContext)||jf,l={uid:qf++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tu(a,i),emitsOptions:jp(a,i),emit:null,emitted:null,propsDefaults:Fn,inheritAttrs:a.inheritAttrs,ctx:Fn,data:Fn,props:Fn,attrs:Fn,slots:Fn,refs:Fn,setupState:Fn,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=nf.bind(null,l),e.ce&&e.ce(l),l}let Qn=null;const Jt=()=>Qn||se,ks=e=>{Qn=e,e.scope.on()},Wt=()=>{Qn&&Qn.scope.off(),Qn=null};function cu(e){return e.vnode.shapeFlag&4}let ho=!1;function Wf(e,t=!1){ho=t;const{props:o,children:a}=e.vnode,i=cu(e);zf(e,o,i,t),If(e,a);const l=i?Vf(e,t):void 0;return ho=!1,l}function Vf(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=$a(new Proxy(e.ctx,kf));const{setup:a}=o;if(a){const i=e.setupContext=a.length>1?Uf(e):null;ks(e),Ss();const l=kt(a,e,0,[e.props,i]);if(ws(),Wt(),vp(l)){if(l.then(Wt,Wt),t)return l.then(r=>{wr(e,r,t)}).catch(r=>{Ca(r,e,0)});e.asyncDep=l}else wr(e,l,t)}else pu(e,t)}function wr(e,t,o){mn(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Yn(t)&&(e.setupState=Op(t)),pu(e,o)}let zr;function pu(e,t,o){const a=e.type;if(!e.render){if(!t&&zr&&!a.render){const i=a.template;if(i){const{isCustomElement:l,compilerOptions:r}=e.appContext.config,{delimiters:c,compilerOptions:p}=a,u=ue(ue({isCustomElement:l,delimiters:c},r),p);a.render=zr(i,u)}}e.render=a.render||De}ks(e),Ss(),yf(e),ws(),Wt()}function Kf(e){return new Proxy(e.attrs,{get(t,o){return $e(e,"get","$attrs"),t[o]}})}function Uf(e){const t=a=>{e.exposed=a||{}};let o;return{get attrs(){return o||(o=Kf(e))},slots:e.slots,emit:e.emit,expose:t}}function Ra(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Op($a(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in pa)return pa[o](e)}}))}function Ei(e,t=!0){return mn(e)?e.displayName||e.name:e.name||t&&e.__name}function Gf(e){return mn(e)&&"__vccOpts"in e}const R=(e,t)=>Gm(e,t,ho);function ge(e,t,o){const a=arguments.length;return a===2?Yn(t)&&!rn(t)?Gt(t)?b(e,null,[t]):b(e,t):b(e,null,t):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&Gt(o)&&(o=[o]),b(e,t,o))}const Yf="3.2.37",Qf="http://www.w3.org/2000/svg",Rt=typeof document<"u"?document:null,$r=Rt&&Rt.createElement("template"),Zf={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,a)=>{const i=t?Rt.createElementNS(Qf,e):Rt.createElement(e,o?{is:o}:void 0);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,o,a,i,l){const r=o?o.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),o),!(i===l||!(i=i.nextSibling)););else{$r.innerHTML=a?`<svg>${e}</svg>`:e;const c=$r.content;if(a){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}t.insertBefore(c,o)}return[r?r.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}};function Jf(e,t,o){const a=e._vtc;a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}function Xf(e,t,o){const a=e.style,i=Wn(o);if(o&&!i){for(const l in o)Li(a,l,o[l]);if(t&&!Wn(t))for(const l in t)o[l]==null&&Li(a,l,"")}else{const l=a.display;i?t!==o&&(a.cssText=o):t&&e.removeAttribute("style"),"_vod"in e&&(a.display=l)}}const Cr=/\s*!important$/;function Li(e,t,o){if(rn(o))o.forEach(a=>Li(e,t,a));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const a=nh(e,t);Cr.test(o)?e.setProperty(Zt(a),o.replace(Cr,""),"important"):e[a]=o}}const Ir=["Webkit","Moz","ms"],Ya={};function nh(e,t){const o=Ya[t];if(o)return o;let a=Ze(t);if(a!=="filter"&&a in e)return Ya[t]=a;a=wa(a);for(let i=0;i<Ir.length;i++){const l=Ir[i]+a;if(l in e)return Ya[t]=l}return t}const Tr="http://www.w3.org/1999/xlink";function eh(e,t,o,a,i){if(a&&t.startsWith("xlink:"))o==null?e.removeAttributeNS(Tr,t.slice(6,t.length)):e.setAttributeNS(Tr,t,o);else{const l=em(t);o==null||l&&!hp(o)?e.removeAttribute(t):e.setAttribute(t,l?"":o)}}function th(e,t,o,a,i,l,r){if(t==="innerHTML"||t==="textContent"){a&&r(a,i,l),e[t]=o==null?"":o;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=o;const p=o==null?"":o;(e.value!==p||e.tagName==="OPTION")&&(e.value=p),o==null&&e.removeAttribute(t);return}let c=!1;if(o===""||o==null){const p=typeof e[t];p==="boolean"?o=hp(o):o==null&&p==="string"?(o="",c=!0):p==="number"&&(o=0,c=!0)}try{e[t]=o}catch{}c&&e.removeAttribute(t)}const[uu,sh]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(o&&Number(o[1])<=53)}return[e,t]})();let Mi=0;const oh=Promise.resolve(),ah=()=>{Mi=0},ih=()=>Mi||(oh.then(ah),Mi=uu());function rs(e,t,o,a){e.addEventListener(t,o,a)}function lh(e,t,o,a){e.removeEventListener(t,o,a)}function rh(e,t,o,a,i=null){const l=e._vei||(e._vei={}),r=l[t];if(a&&r)r.value=a;else{const[c,p]=ch(t);if(a){const u=l[t]=ph(a,i);rs(e,c,u,p)}else r&&(lh(e,c,r,p),l[t]=void 0)}}const Er=/(?:Once|Passive|Capture)$/;function ch(e){let t;if(Er.test(e)){t={};let o;for(;o=e.match(Er);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[Zt(e.slice(2)),t]}function ph(e,t){const o=a=>{const i=a.timeStamp||uu();(sh||i>=o.attached-1)&&He(uh(a,o.value),t,5,[a])};return o.value=e,o.attached=ih(),o}function uh(e,t){if(rn(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const Lr=/^on[a-z]/,dh=(e,t,o,a,i=!1,l,r,c,p)=>{t==="class"?Jf(e,a,i):t==="style"?Xf(e,o,a):ba(t)?pl(t)||rh(e,t,o,a,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mh(e,t,a,i))?th(e,t,a,l,r,c,p):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),eh(e,t,a,i))};function mh(e,t,o,a){return a?!!(t==="innerHTML"||t==="textContent"||t in e&&Lr.test(t)&&mn(o)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Lr.test(t)&&Wn(o)?!1:t in e}const Mr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return rn(t)?o=>fs(t,o):t};function fh(e){e.target.composing=!0}function Pr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const hh={created(e,{modifiers:{lazy:t,trim:o,number:a}},i){e._assign=Mr(i);const l=a||i.props&&i.props.type==="number";rs(e,t?"change":"input",r=>{if(r.target.composing)return;let c=e.value;o&&(c=c.trim()),l&&(c=gi(c)),e._assign(c)}),o&&rs(e,"change",()=>{e.value=e.value.trim()}),t||(rs(e,"compositionstart",fh),rs(e,"compositionend",Pr),rs(e,"change",Pr))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:o,trim:a,number:i}},l){if(e._assign=Mr(l),e.composing||document.activeElement===e&&e.type!=="range"&&(o||a&&e.value.trim()===t||(i||e.type==="number")&&gi(e.value)===t))return;const r=t==null?"":t;e.value!==r&&(e.value=r)}},gh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Or=(e,t)=>o=>{if(!("key"in o))return;const a=Zt(o.key);if(t.some(i=>i===a||gh[i]===a))return e(o)},du={beforeMount(e,{value:t},{transition:o}){e._vod=e.style.display==="none"?"":e.style.display,o&&t?o.beforeEnter(e):Hs(e,t)},mounted(e,{value:t},{transition:o}){o&&t&&o.enter(e)},updated(e,{value:t,oldValue:o},{transition:a}){!t!=!o&&(a?t?(a.beforeEnter(e),Hs(e,!0),a.enter(e)):a.leave(e,()=>{Hs(e,!1)}):Hs(e,t))},beforeUnmount(e,{value:t}){Hs(e,t)}};function Hs(e,t){e.style.display=t?e._vod:"none"}const _h=ue({patchProp:dh},Zf);let Ar;function vh(){return Ar||(Ar=Mf(_h))}const kh=(...e)=>{const t=vh().createApp(...e),{mount:o}=t;return t.mount=a=>{const i=yh(a);if(!i)return;const l=t._component;!mn(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const r=o(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function yh(e){return Wn(e)?document.querySelector(e):e}var bh=Object.defineProperty,Rr=Object.getOwnPropertySymbols,xh=Object.prototype.hasOwnProperty,Sh=Object.prototype.propertyIsEnumerable,Fr=(e,t,o)=>t in e?bh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,wh=(e,t)=>{for(var o in t||(t={}))xh.call(t,o)&&Fr(e,o,t[o]);if(Rr)for(var o of Rr(t))Sh.call(t,o)&&Fr(e,o,t[o]);return e},mu="usehead",Dr="head:count",Qa="data-head-attrs",fu="data-meta-body",zh=(e,t,o)=>{const a=o.createElement(e);for(const i of Object.keys(t))if(i==="body"&&t.body===!0)a.setAttribute(fu,"true");else{let l=t[i];if(i==="key"||l===!1)continue;i==="children"?a.textContent=l:a.setAttribute(i,l)}return a};function Hr(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const o=t.getAttribute("nonce");if(o&&!e.getAttribute("nonce")){const a=t.cloneNode(!0);return a.setAttribute("nonce",""),a.nonce=o,o===e.nonce&&e.isEqualNode(a)}}return e.isEqualNode(t)}var $h=e=>{const t=["key","id","name","property"];for(const o of t){const a=typeof e.getAttribute=="function"?e.hasAttribute(o)?e.getAttribute(o):void 0:e[o];if(a!==void 0)return{name:o,value:a}}},Ch=()=>{const e=x(mu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Ih=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Th=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(C(t)),Eh=e=>{const t=[],o=Object.keys(e);for(const a of o)if(e[a]!=null)switch(a){case"title":t.push({tag:a,props:{children:e[a]}});break;case"titleTemplate":break;case"base":t.push({tag:a,props:wh({key:"default"},e[a])});break;default:if(Ih.includes(a)){const i=e[a];Array.isArray(i)?i.forEach(l=>{t.push({tag:a,props:l})}):i&&t.push({tag:a,props:i})}break}return t},Nr=(e,t)=>{const o=e.getAttribute(Qa);if(o)for(const i of o.split(","))i in t||e.removeAttribute(i);const a=[];for(const i in t){const l=t[i];l!=null&&(l===!1?e.removeAttribute(i):e.setAttribute(i,l),a.push(i))}a.length?e.setAttribute(Qa,a.join(",")):e.removeAttribute(Qa)},Lh=(e=window.document,t,o)=>{var a,i;const l=e.head,r=e.body;let c=l.querySelector(`meta[name="${Dr}"]`),p=r.querySelectorAll(`[${fu}]`);const u=c?Number(c.getAttribute("content")):0,d=[],f=[];if(p)for(let h=0;h<p.length;h++)p[h]&&((a=p[h].tagName)==null?void 0:a.toLowerCase())===t&&f.push(p[h]);if(c)for(let h=0,_=c.previousElementSibling;h<u;h++,_=(_==null?void 0:_.previousElementSibling)||null)((i=_==null?void 0:_.tagName)==null?void 0:i.toLowerCase())===t&&d.push(_);else c=e.createElement("meta"),c.setAttribute("name",Dr),c.setAttribute("content","0"),l.append(c);let m=o.map(h=>{var _;return{element:zh(h.tag,h.props,e),body:(_=h.props.body)!=null?_:!1}});m=m.filter(h=>{for(let _=0;_<d.length;_++){const w=d[_];if(Hr(w,h.element))return d.splice(_,1),!1}for(let _=0;_<f.length;_++){const w=f[_];if(Hr(w,h.element))return f.splice(_,1),!1}return!0}),f.forEach(h=>{var _;return(_=h.parentNode)==null?void 0:_.removeChild(h)}),d.forEach(h=>{var _;return(_=h.parentNode)==null?void 0:_.removeChild(h)}),m.forEach(h=>{h.body===!0?r.insertAdjacentElement("beforeend",h.element):l.insertBefore(h.element,c)}),c.setAttribute("content",""+(u-d.length+m.filter(h=>!h.body).length))},Mh=e=>{let t=[],o=new Set;e&&t.push(je(e));const a={install(i){i.config.globalProperties.$head=a,i.provide(mu,a)},get headTags(){const i=[],l=t.map(r=>C(r).titleTemplate).reverse().find(r=>r!=null);return t.forEach(r=>{Eh(C(r)).forEach(p=>{if(p.tag==="meta"||p.tag==="base"||p.tag==="script"){const u=$h(p.props);if(u){let d=-1;for(let f=0;f<i.length;f++){const m=i[f],h=m.props[u.name],_=p.props[u.name];if(m.tag===p.tag&&h===_){d=f;break}}d!==-1&&i.splice(d,1)}}l&&p.tag==="title"&&(p.props.children=Th(l,p.props.children)),i.push(p)})}),i},addHeadObjs(i){t.push(i)},removeHeadObjs(i){t=t.filter(l=>l!==i)},updateDOM(i=window.document){let l,r={},c={};const p={};for(const d of a.headTags){if(d.tag==="title"){l=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(r,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(c,d.props);continue}p[d.tag]=p[d.tag]||[],p[d.tag].push(d)}l!==void 0&&(i.title=l),Nr(i.documentElement,r),Nr(i.body,c);const u=new Set([...Object.keys(p),...o]);for(const d of u)Lh(i,d,p[d]||[]);o.clear(),Object.keys(p).forEach(d=>o.add(d))}};return a},Ph=typeof window<"u",Oh=e=>{const t=Ch(),o=Q(e);t.addHeadObjs(o),Ph&&(wo(()=>{t.updateDOM()}),Ma(()=>{t.removeHeadObjs(o),t.updateDOM()}))};const Xs=Symbol("v-click-clicks"),Ft=Symbol("v-click-clicks-elements"),Pi=Symbol("v-click-clicks-order-map"),no=Symbol("v-click-clicks-disabled"),hu=Symbol("slidev-slide-scale"),$=Symbol("slidev-slidev-context"),Ah=Symbol("slidev-route"),Rh=Symbol("slidev-slide-context"),At="slidev-vclick-target",Za="slidev-vclick-hidden",Fh="slidev-vclick-fade",Ja="slidev-vclick-hidden-explicitly",Ns="slidev-vclick-current",Go="slidev-vclick-prior";function Dh(e){return e=e||[],Array.isArray(e)?e:[e]}function Oi(e,t){if(!e)return!1;const o=e.indexOf(t);return o>=0?(e.splice(o,1),!0):!1}function Hh(...e){let t,o,a;e.length===1?(t=0,a=1,[o]=e):[t,o,a=1]=e;const i=[];let l=t;for(;l<o;)i.push(l),l+=a||1;return i}function Nh(e){return e!=null}function jh(e,t){return Object.fromEntries(Object.entries(e).map(([o,a])=>t(o,a)).filter(Nh))}const Nt={theme:"default",title:"Cascading Style Sheets",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",version:"1.3.8"},zn=Nt;var mp;const yt=(mp=zn.aspectRatio)!=null?mp:16/9;var fp;const Vt=(fp=zn.canvasWidth)!=null?fp:980,gu=Math.round(Vt/yt),_u=R(()=>jh(zn.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Le(e,t,o){Object.defineProperty(e,t,{value:o,writable:!0,enumerable:!1})}const Xt=jn({page:0,clicks:0});let qh=[],Bh=[];Le(Xt,"$syncUp",!0);Le(Xt,"$syncDown",!0);Le(Xt,"$paused",!1);Le(Xt,"$onSet",e=>qh.push(e));Le(Xt,"$onPatch",e=>Bh.push(e));Le(Xt,"$patch",async()=>!1);function vu(e,t,o=!1){const a=[];let i=!1,l=!1,r,c;const p=jn(t);function u(h){a.push(h)}function d(h,_){clearTimeout(r),i=!0,p[h]=_,r=setTimeout(()=>i=!1,0)}function f(h){i||(clearTimeout(c),l=!0,Object.entries(h).forEach(([_,w])=>{p[_]=w}),c=setTimeout(()=>l=!1,0))}function m(h){let _;o?o&&window.addEventListener("storage",S=>{S&&S.key===h&&S.newValue&&f(JSON.parse(S.newValue))}):(_=new BroadcastChannel(h),_.addEventListener("message",S=>f(S.data)));function w(){!o&&_&&!l?_.postMessage($n(p)):o&&!l&&window.localStorage.setItem(h,JSON.stringify(p)),i||a.forEach(S=>S(p))}if(fn(p,w,{deep:!0}),o){const S=window.localStorage.getItem(h);S&&f(JSON.parse(S))}}return{init:m,onPatch:u,patch:d,state:p}}const{init:Wh,onPatch:Vh,patch:jr,state:Xa}=vu(Xt,{page:1,clicks:0}),ns=jn({});let Kh=[],Uh=[];Le(ns,"$syncUp",!0);Le(ns,"$syncDown",!0);Le(ns,"$paused",!1);Le(ns,"$onSet",e=>Kh.push(e));Le(ns,"$onPatch",e=>Uh.push(e));Le(ns,"$patch",async()=>!1);const{init:Gh,onPatch:Yh,patch:ku,state:da}=vu(ns,{},!1),Qh="modulepreload",Zh=function(e){return"/TPSI/4/css/"+e},qr={},$s=function(t,o,a){return!o||o.length===0?t():Promise.all(o.map(i=>{if(i=Zh(i),i in qr)return;qr[i]=!0;const l=i.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Qh,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function he(e,t,o){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,o),o):(e[t]=o,o)}function Jh(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}var Br;const qe=typeof window<"u",Xh=e=>typeof e<"u",ng=e=>typeof e=="function",yu=e=>typeof e=="string",Ai=()=>+Date.now(),na=()=>{};qe&&((Br=window==null?void 0:window.navigator)==null?void 0:Br.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ce(e){return typeof e=="function"?e():C(e)}function eg(e,t){function o(...a){e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})}return o}const bu=e=>e();function tg(e=bu){const t=Q(!0);function o(){t.value=!1}function a(){t.value=!0}return{isActive:t,pause:o,resume:a,eventFilter:(...l)=>{t.value&&e(...l)}}}function sg(e){return e}function og(e,t){var o;if(typeof e=="number")return e+t;const a=((o=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",i=e.slice(a.length),l=parseFloat(a)+t;return Number.isNaN(l)?e:l+i}function zt(e){return fl()?(hl(e),!0):!1}function ag(e){if(!Tn(e))return jn(e);const t=new Proxy({},{get(o,a,i){return C(Reflect.get(e.value,a,i))},set(o,a,i){return Tn(e.value[a])&&!Tn(i)?e.value[a].value=i:e.value[a]=i,!0},deleteProperty(o,a){return Reflect.deleteProperty(e.value,a)},has(o,a){return Reflect.has(e.value,a)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return jn(t)}function ig(e){return typeof e=="function"?R(e):Q(e)}var lg=Object.defineProperty,rg=Object.defineProperties,cg=Object.getOwnPropertyDescriptors,Wr=Object.getOwnPropertySymbols,pg=Object.prototype.hasOwnProperty,ug=Object.prototype.propertyIsEnumerable,Vr=(e,t,o)=>t in e?lg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,dg=(e,t)=>{for(var o in t||(t={}))pg.call(t,o)&&Vr(e,o,t[o]);if(Wr)for(var o of Wr(t))ug.call(t,o)&&Vr(e,o,t[o]);return e},mg=(e,t)=>rg(e,cg(t));function fg(e){if(!Tn(e))return Wm(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const o in e.value)t[o]=Bm(()=>({get(){return e.value[o]},set(a){if(Array.isArray(e.value)){const i=[...e.value];i[o]=a,e.value=i}else{const i=mg(dg({},e.value),{[o]:a});Object.setPrototypeOf(i,e.value),e.value=i}}}));return t}function hg(e,t=!0){Jt()?Gp(e):t?e():Xn(e)}function xu(e,t=!0){Jt()?zs(e):t?e():Xn(e)}function gg(e,t=1e3,o={}){const{immediate:a=!0,immediateCallback:i=!1}=o;let l=null;const r=Q(!1);function c(){l&&(clearInterval(l),l=null)}function p(){r.value=!1,c()}function u(){C(t)<=0||(r.value=!0,i&&e(),c(),l=setInterval(e,ce(t)))}if(a&&qe&&u(),Tn(t)){const d=fn(t,()=>{r.value&&qe&&u()});zt(d)}return zt(p),{isActive:r,pause:p,resume:u}}function _g(e,t,o={}){const{immediate:a=!0}=o,i=Q(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,r()}function p(...u){r(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,e(...u)},ce(t))}return a&&(i.value=!0,qe&&p()),zt(c),{isPending:i,start:p,stop:c}}function Su(e=!1,t={}){const{truthyValue:o=!0,falsyValue:a=!1}=t,i=Tn(e),l=Q(e);function r(c){if(arguments.length)return l.value=c,l.value;{const p=ce(o);return l.value=l.value===p?ce(a):p,l.value}}return i?r:[l,r]}var Kr=Object.getOwnPropertySymbols,vg=Object.prototype.hasOwnProperty,kg=Object.prototype.propertyIsEnumerable,yg=(e,t)=>{var o={};for(var a in e)vg.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&Kr)for(var a of Kr(e))t.indexOf(a)<0&&kg.call(e,a)&&(o[a]=e[a]);return o};function bg(e,t,o={}){const a=o,{eventFilter:i=bu}=a,l=yg(a,["eventFilter"]);return fn(e,eg(i,t),l)}var xg=Object.defineProperty,Sg=Object.defineProperties,wg=Object.getOwnPropertyDescriptors,ma=Object.getOwnPropertySymbols,wu=Object.prototype.hasOwnProperty,zu=Object.prototype.propertyIsEnumerable,Ur=(e,t,o)=>t in e?xg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,zg=(e,t)=>{for(var o in t||(t={}))wu.call(t,o)&&Ur(e,o,t[o]);if(ma)for(var o of ma(t))zu.call(t,o)&&Ur(e,o,t[o]);return e},$g=(e,t)=>Sg(e,wg(t)),Cg=(e,t)=>{var o={};for(var a in e)wu.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&ma)for(var a of ma(e))t.indexOf(a)<0&&zu.call(e,a)&&(o[a]=e[a]);return o};function Ig(e,t,o={}){const a=o,{eventFilter:i}=a,l=Cg(a,["eventFilter"]),{eventFilter:r,pause:c,resume:p,isActive:u}=tg(i);return{stop:bg(e,t,$g(zg({},l),{eventFilter:r})),pause:c,resume:p,isActive:u}}function gt(e){var t;const o=ce(e);return(t=o==null?void 0:o.$el)!=null?t:o}const de=qe?window:void 0,Tg=qe?window.document:void 0,Eg=qe?window.navigator:void 0;function Mn(...e){let t,o,a,i;if(yu(e[0])?([o,a,i]=e,t=de):[t,o,a,i]=e,!t)return na;let l=na;const r=fn(()=>gt(t),p=>{l(),p&&(p.addEventListener(o,a,i),l=()=>{p.removeEventListener(o,a,i),l=na})},{immediate:!0,flush:"post"}),c=()=>{r(),l()};return zt(c),c}function Lg(e,t,o={}){const{window:a=de,ignore:i,capture:l=!0,detectIframe:r=!1}=o;if(!a)return;const c=Q(!0);let p;const u=m=>{a.clearTimeout(p);const h=gt(e),_=m.composedPath();!h||h===m.target||_.includes(h)||!c.value||i&&i.length>0&&i.some(w=>{const S=gt(w);return S&&(m.target===S||_.includes(S))})||t(m)},d=[Mn(a,"click",u,{passive:!0,capture:l}),Mn(a,"pointerdown",m=>{const h=gt(e);c.value=!!h&&!m.composedPath().includes(h)},{passive:!0}),Mn(a,"pointerup",m=>{if(m.button===0){const h=m.composedPath();m.composedPath=()=>h,p=a.setTimeout(()=>u(m),50)}},{passive:!0}),r&&Mn(a,"blur",m=>{var h;const _=gt(e);((h=document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(_!=null&&_.contains(document.activeElement))&&t(m)})].filter(Boolean);return()=>d.forEach(m=>m())}const Mg=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Pg(e,t,o={}){const{target:a=de,eventName:i="keydown",passive:l=!1}=o,r=Mg(e);return Mn(a,i,p=>{r(p)&&t(p)},l)}function Og(e={}){const{window:t=de}=e,o=Q(0);return t&&(Mn(t,"blur",()=>o.value+=1,!0),Mn(t,"focus",()=>o.value+=1,!0)),R(()=>(o.value,t==null?void 0:t.document.activeElement))}function Fa(e,t=!1){const o=Q(),a=()=>o.value=Boolean(e());return a(),xu(a,t),o}function ea(e,t={}){const{window:o=de}=t,a=Fa(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let i;const l=Q(!1),r=()=>{!a.value||(i||(i=o.matchMedia(e)),l.value=i.matches)};return hg(()=>{r(),i&&("addEventListener"in i?i.addEventListener("change",r):i.addListener(r),zt(()=>{"removeEventListener"in i?i.removeEventListener("change",r):i.removeListener(r)}))}),l}const Ag={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Rg=Object.defineProperty,Gr=Object.getOwnPropertySymbols,Fg=Object.prototype.hasOwnProperty,Dg=Object.prototype.propertyIsEnumerable,Yr=(e,t,o)=>t in e?Rg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Hg=(e,t)=>{for(var o in t||(t={}))Fg.call(t,o)&&Yr(e,o,t[o]);if(Gr)for(var o of Gr(t))Dg.call(t,o)&&Yr(e,o,t[o]);return e};function Ng(e,t={}){function o(c,p){let u=e[c];return p!=null&&(u=og(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:a=de}=t;function i(c){return a?a.matchMedia(c).matches:!1}const l=c=>ea(`(min-width: ${o(c)})`,t),r=Object.keys(e).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>l(p),enumerable:!0,configurable:!0}),c),{});return Hg({greater:l,smaller(c){return ea(`(max-width: ${o(c,-.1)})`,t)},between(c,p){return ea(`(min-width: ${o(c)}) and (max-width: ${o(p,-.1)})`,t)},isGreater(c){return i(`(min-width: ${o(c)})`)},isSmaller(c){return i(`(max-width: ${o(c,-.1)})`)},isInBetween(c,p){return i(`(min-width: ${o(c)}) and (max-width: ${o(p,-.1)})`)}},r)}function jg(e={}){const{navigator:t=Eg,read:o=!1,source:a,copiedDuring:i=1500}=e,l=["copy","cut"],r=Fa(()=>t&&"clipboard"in t),c=Q(""),p=Q(!1),u=_g(()=>p.value=!1,i);function d(){t.clipboard.readText().then(m=>{c.value=m})}if(r.value&&o)for(const m of l)Mn(m,d);async function f(m=ce(a)){r.value&&m!=null&&(await t.clipboard.writeText(m),c.value=m,p.value=!0,u.start())}return{isSupported:r,text:c,copied:p,copy:f}}const Ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Fi="__vueuse_ssr_handlers__";Ri[Fi]=Ri[Fi]||{};const qg=Ri[Fi];function Bg(e,t){return qg[e]||t}function Wg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Vg=Object.defineProperty,Qr=Object.getOwnPropertySymbols,Kg=Object.prototype.hasOwnProperty,Ug=Object.prototype.propertyIsEnumerable,Zr=(e,t,o)=>t in e?Vg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Jr=(e,t)=>{for(var o in t||(t={}))Kg.call(t,o)&&Zr(e,o,t[o]);if(Qr)for(var o of Qr(t))Ug.call(t,o)&&Zr(e,o,t[o]);return e};const Gg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function We(e,t,o,a={}){var i;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:d,window:f=de,eventFilter:m,onError:h=Y=>{console.error(Y)}}=a,_=(d?je:Q)(t);if(!o)try{o=Bg("getDefaultStorage",()=>{var Y;return(Y=de)==null?void 0:Y.localStorage})()}catch(Y){h(Y)}if(!o)return _;const w=ce(t),S=Wg(w),P=(i=a.serializer)!=null?i:Gg[S],{pause:M,resume:L}=Ig(_,()=>A(_.value),{flush:l,deep:r,eventFilter:m});return f&&c&&Mn(f,"storage",q),q(),_;function A(Y){try{Y==null?o.removeItem(e):o.setItem(e,P.write(Y))}catch(an){h(an)}}function W(Y){if(!(Y&&Y.key!==e)){M();try{const an=Y?Y.newValue:o.getItem(e);if(an==null)return p&&w!==null&&o.setItem(e,P.write(w)),w;if(!Y&&u){const un=P.read(an);return ng(u)?u(un,w):S==="object"&&!Array.isArray(un)?Jr(Jr({},w),un):un}else return typeof an!="string"?an:P.read(an)}catch(an){h(an)}finally{L()}}}function q(Y){Y&&Y.key!==e||(_.value=W(Y))}}function Yg(e){return ea("(prefers-color-scheme: dark)",e)}var Qg=Object.defineProperty,Zg=Object.defineProperties,Jg=Object.getOwnPropertyDescriptors,Xr=Object.getOwnPropertySymbols,Xg=Object.prototype.hasOwnProperty,n_=Object.prototype.propertyIsEnumerable,nc=(e,t,o)=>t in e?Qg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,e_=(e,t)=>{for(var o in t||(t={}))Xg.call(t,o)&&nc(e,o,t[o]);if(Xr)for(var o of Xr(t))n_.call(t,o)&&nc(e,o,t[o]);return e},t_=(e,t)=>Zg(e,Jg(t));function I7(e,t={}){var o,a;const i=(o=t.draggingElement)!=null?o:de,l=Q((a=ce(t.initialValue))!=null?a:{x:0,y:0}),r=Q(),c=m=>t.pointerTypes?t.pointerTypes.includes(m.pointerType):!0,p=m=>{ce(t.preventDefault)&&m.preventDefault(),ce(t.stopPropagation)&&m.stopPropagation()},u=m=>{var h;if(!c(m)||ce(t.exact)&&m.target!==ce(e))return;const _=ce(e).getBoundingClientRect(),w={x:m.pageX-_.left,y:m.pageY-_.top};((h=t.onStart)==null?void 0:h.call(t,w,m))!==!1&&(r.value=w,p(m))},d=m=>{var h;!c(m)||!r.value||(l.value={x:m.pageX-r.value.x,y:m.pageY-r.value.y},(h=t.onMove)==null||h.call(t,l.value,m),p(m))},f=m=>{var h;!c(m)||!r.value||(r.value=void 0,(h=t.onEnd)==null||h.call(t,l.value,m),p(m))};return qe&&(Mn(e,"pointerdown",u,!0),Mn(i,"pointermove",d,!0),Mn(i,"pointerup",f,!0)),t_(e_({},fg(l)),{position:l,isDragging:R(()=>!!r.value),style:R(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var ec=Object.getOwnPropertySymbols,s_=Object.prototype.hasOwnProperty,o_=Object.prototype.propertyIsEnumerable,a_=(e,t)=>{var o={};for(var a in e)s_.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&ec)for(var a of ec(e))t.indexOf(a)<0&&o_.call(e,a)&&(o[a]=e[a]);return o};function i_(e,t,o={}){const a=o,{window:i=de}=a,l=a_(a,["window"]);let r;const c=Fa(()=>i&&"ResizeObserver"in i),p=()=>{r&&(r.disconnect(),r=void 0)},u=fn(()=>gt(e),f=>{p(),c.value&&i&&f&&(r=new ResizeObserver(t),r.observe(f,l))},{immediate:!0,flush:"post"}),d=()=>{p(),u()};return zt(d),{isSupported:c,stop:d}}function l_(e,t={}){const{immediate:o=!0,window:a=de}=t,i=Q(!1);let l=null;function r(){!i.value||!a||(e(),l=a.requestAnimationFrame(r))}function c(){!i.value&&a&&(i.value=!0,r())}function p(){i.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return o&&c(),zt(p),{isActive:i,pause:p,resume:c}}function r_(e,t={width:0,height:0},o={}){const a=Q(t.width),i=Q(t.height);return i_(e,([l])=>{a.value=l.contentRect.width,i.value=l.contentRect.height},o),fn(()=>gt(e),l=>{a.value=l?t.width:0,i.value=l?t.height:0}),{width:a,height:i}}const tc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function c_(e,t={}){const{document:o=Tg,autoExit:a=!1}=t,i=e||(o==null?void 0:o.querySelector("html")),l=Q(!1);let r=tc[0];const c=Fa(()=>{if(o){for(const w of tc)if(w[1]in o)return r=w,!0}else return!1;return!1}),[p,u,d,,f]=r;async function m(){!c.value||(o!=null&&o[d]&&await o[u](),l.value=!1)}async function h(){if(!c.value)return;await m();const w=gt(i);w&&(await w[p](),l.value=!0)}async function _(){l.value?await m():await h()}return o&&Mn(o,f,()=>{l.value=!!(o!=null&&o[d])},!1),a&&zt(m),{isSupported:c,isFullscreen:l,enter:h,exit:m,toggle:_}}const p_={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function u_(e={}){const{reactive:t=!1,target:o=de,aliasMap:a=p_,passive:i=!0,onEventFired:l=na}=e,r=jn(new Set),c={toJSON(){return{}},current:r},p=t?jn(c):c,u=new Set,d=new Set;function f(w,S){w in p&&(t?p[w]=S:p[w].value=S)}function m(){for(const w of d)f(w,!1)}function h(w,S){var P,M;const L=(P=w.key)==null?void 0:P.toLowerCase(),W=[(M=w.code)==null?void 0:M.toLowerCase(),L].filter(Boolean);L&&(S?r.add(L):r.delete(L));for(const q of W)d.add(q),f(q,S);L==="meta"&&!S?(u.forEach(q=>{r.delete(q),f(q,!1)}),u.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&S&&[...r,...W].forEach(q=>u.add(q))}Mn(o,"keydown",w=>(h(w,!0),l(w)),{passive:i}),Mn(o,"keyup",w=>(h(w,!1),l(w)),{passive:i}),Mn("blur",m,{passive:!0}),Mn("focus",m,{passive:!0});const _=new Proxy(p,{get(w,S,P){if(typeof S!="string")return Reflect.get(w,S,P);if(S=S.toLowerCase(),S in a&&(S=a[S]),!(S in p))if(/[+_-]/.test(S)){const L=S.split(/[+_-]/g).map(A=>A.trim());p[S]=R(()=>L.every(A=>C(_[A])))}else p[S]=Q(!1);const M=Reflect.get(w,S,P);return t?C(M):M}});return _}function T7(e={}){const{type:t="page",touch:o=!0,resetOnTouchEnds:a=!1,initialValue:i={x:0,y:0},window:l=de,eventFilter:r}=e,c=Q(i.x),p=Q(i.y),u=Q(null),d=w=>{t==="page"?(c.value=w.pageX,p.value=w.pageY):t==="client"&&(c.value=w.clientX,p.value=w.clientY),u.value="mouse"},f=()=>{c.value=i.x,p.value=i.y},m=w=>{if(w.touches.length>0){const S=w.touches[0];t==="page"?(c.value=S.pageX,p.value=S.pageY):t==="client"&&(c.value=S.clientX,p.value=S.clientY),u.value="touch"}},h=w=>r===void 0?d(w):r(()=>d(w),{}),_=w=>r===void 0?m(w):r(()=>m(w),{});return l&&(Mn(l,"mousemove",h,{passive:!0}),Mn(l,"dragover",h,{passive:!0}),o&&(Mn(l,"touchstart",_,{passive:!0}),Mn(l,"touchmove",_,{passive:!0}),a&&Mn(l,"touchend",f,{passive:!0}))),{x:c,y:p,sourceType:u}}var it;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(it||(it={}));function d_(e,t={}){const o=ig(e),{threshold:a=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:r}=t,c=jn({x:0,y:0}),p=(q,Y)=>{c.x=q,c.y=Y},u=jn({x:0,y:0}),d=(q,Y)=>{u.x=q,u.y=Y},f=R(()=>c.x-u.x),m=R(()=>c.y-u.y),{max:h,abs:_}=Math,w=R(()=>h(_(f.value),_(m.value))>=a),S=Q(!1),P=Q(!1),M=R(()=>w.value?_(f.value)>_(m.value)?f.value>0?it.LEFT:it.RIGHT:m.value>0?it.UP:it.DOWN:it.NONE),L=q=>t.pointerTypes?t.pointerTypes.includes(q.pointerType):!0,A=[Mn(e,"pointerdown",q=>{var Y,an;if(!L(q))return;P.value=!0,(an=(Y=o.value)==null?void 0:Y.style)==null||an.setProperty("touch-action","none");const un=q.target;un==null||un.setPointerCapture(q.pointerId);const{clientX:vn,clientY:bn}=q;p(vn,bn),d(vn,bn),r==null||r(q)}),Mn(e,"pointermove",q=>{if(!L(q)||!P.value)return;const{clientX:Y,clientY:an}=q;d(Y,an),!S.value&&w.value&&(S.value=!0),S.value&&(i==null||i(q))}),Mn(e,"pointerup",q=>{var Y,an;!L(q)||(S.value&&(l==null||l(q,M.value)),P.value=!1,S.value=!1,(an=(Y=o.value)==null?void 0:Y.style)==null||an.setProperty("touch-action","initial"))})],W=()=>A.forEach(q=>q());return{isSwiping:ps(S),direction:ps(M),posStart:ps(c),posEnd:ps(u),distanceX:f,distanceY:m,stop:W}}var m_=Object.defineProperty,sc=Object.getOwnPropertySymbols,f_=Object.prototype.hasOwnProperty,h_=Object.prototype.propertyIsEnumerable,oc=(e,t,o)=>t in e?m_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g_=(e,t)=>{for(var o in t||(t={}))f_.call(t,o)&&oc(e,o,t[o]);if(sc)for(var o of sc(t))h_.call(t,o)&&oc(e,o,t[o]);return e};function E7(e={}){const{controls:t=!1,offset:o=0,immediate:a=!0,interval:i="requestAnimationFrame"}=e,l=Q(Ai()+o),r=()=>l.value=Ai()+o,c=i==="requestAnimationFrame"?l_(r,{immediate:a}):gg(r,i,{immediate:a});return t?g_({timestamp:l},c):l}var __=Object.defineProperty,ac=Object.getOwnPropertySymbols,v_=Object.prototype.hasOwnProperty,k_=Object.prototype.propertyIsEnumerable,ic=(e,t,o)=>t in e?__(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y_=(e,t)=>{for(var o in t||(t={}))v_.call(t,o)&&ic(e,o,t[o]);if(ac)for(var o of ac(t))k_.call(t,o)&&ic(e,o,t[o]);return e};const b_={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};y_({linear:sg},b_);function Ye(e,t,o,a={}){var i,l,r;const{passive:c=!1,eventName:p,deep:u=!1,defaultValue:d}=a,f=Jt(),m=o||(f==null?void 0:f.emit)||((i=f==null?void 0:f.$emit)==null?void 0:i.bind(f))||((r=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(f==null?void 0:f.proxy));let h=p;t||(t="modelValue"),h=p||h||`update:${t.toString()}`;const _=()=>Xh(e[t])?e[t]:d;if(c){const w=Q(_());return fn(()=>e[t],S=>w.value=S),fn(w,S=>{(S!==e[t]||u)&&m(h,S)},{deep:u}),w}else return R({get(){return _()},set(w){m(h,w)}})}function L7({window:e=de}={}){if(!e)return Q(!1);const t=Q(e.document.hasFocus());return Mn(e,"blur",()=>{t.value=!1}),Mn(e,"focus",()=>{t.value=!0}),t}function x_(e={}){const{window:t=de,initialWidth:o=1/0,initialHeight:a=1/0,listenOrientation:i=!0}=e,l=Q(o),r=Q(a),c=()=>{t&&(l.value=t.innerWidth,r.value=t.innerHeight)};return c(),xu(c),Mn("resize",c,{passive:!0}),i&&Mn("orientationchange",c,{passive:!0}),{width:l,height:r}}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof window<"u";function S_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Rn=Object.assign;function ni(e,t){const o={};for(const a in t){const i=t[a];o[a]=Be(i)?i.map(e):e(i)}return o}const eo=()=>{},Be=Array.isArray,w_=/\/$/,z_=e=>e.replace(w_,"");function ei(e,t,o="/"){let a,i={},l="",r="";const c=t.indexOf("#");let p=t.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(a=t.slice(0,p),l=t.slice(p+1,c>-1?c:t.length),i=e(l)),c>-1&&(a=a||t.slice(0,c),r=t.slice(c,t.length)),a=T_(a!=null?a:t,o),{fullPath:a+(l&&"?")+l+r,path:a,query:i,hash:r}}function $_(e,t){const o=t.query?e(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function lc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function C_(e,t,o){const a=t.matched.length-1,i=o.matched.length-1;return a>-1&&a===i&&ys(t.matched[a],o.matched[i])&&$u(t.params,o.params)&&e(t.query)===e(o.query)&&t.hash===o.hash}function ys(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $u(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(!I_(e[o],t[o]))return!1;return!0}function I_(e,t){return Be(e)?rc(e,t):Be(t)?rc(t,e):e===t}function rc(e,t){return Be(t)?e.length===t.length&&e.every((o,a)=>o===t[a]):e.length===1&&e[0]===t}function T_(e,t){if(e.startsWith("/"))return e;if(!e)return t;const o=t.split("/"),a=e.split("/");let i=o.length-1,l,r;for(l=0;l<a.length;l++)if(r=a[l],r!==".")if(r==="..")i>1&&i--;else break;return o.slice(0,i).join("/")+"/"+a.slice(l-(l===a.length?1:0)).join("/")}var go;(function(e){e.pop="pop",e.push="push"})(go||(go={}));var to;(function(e){e.back="back",e.forward="forward",e.unknown=""})(to||(to={}));function E_(e){if(!e)if(cs){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),z_(e)}const L_=/^[^#]+#/;function M_(e,t){return e.replace(L_,"#")+t}function P_(e,t){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-o.left-(t.left||0),top:a.top-o.top-(t.top||0)}}const Da=()=>({left:window.pageXOffset,top:window.pageYOffset});function O_(e){let t;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),i=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!i)return;t=P_(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function cc(e,t){return(history.state?history.state.position-t:-1)+e}const Di=new Map;function A_(e,t){Di.set(e,t)}function R_(e){const t=Di.get(e);return Di.delete(e),t}let F_=()=>location.protocol+"//"+location.host;function Cu(e,t){const{pathname:o,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let c=i.includes(e.slice(l))?e.slice(l).length:1,p=i.slice(c);return p[0]!=="/"&&(p="/"+p),lc(p,"")}return lc(o,e)+a+i}function D_(e,t,o,a){let i=[],l=[],r=null;const c=({state:m})=>{const h=Cu(e,location),_=o.value,w=t.value;let S=0;if(m){if(o.value=h,t.value=m,r&&r===_){r=null;return}S=w?m.position-w.position:0}else a(h);i.forEach(P=>{P(o.value,_,{delta:S,type:go.pop,direction:S?S>0?to.forward:to.back:to.unknown})})};function p(){r=o.value}function u(m){i.push(m);const h=()=>{const _=i.indexOf(m);_>-1&&i.splice(_,1)};return l.push(h),h}function d(){const{history:m}=window;!m.state||m.replaceState(Rn({},m.state,{scroll:Da()}),"")}function f(){for(const m of l)m();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:p,listen:u,destroy:f}}function pc(e,t,o,a=!1,i=!1){return{back:e,current:t,forward:o,replaced:a,position:window.history.length,scroll:i?Da():null}}function H_(e){const{history:t,location:o}=window,a={value:Cu(e,o)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(p,u,d){const f=e.indexOf("#"),m=f>-1?(o.host&&document.querySelector("base")?e:e.slice(f))+p:F_()+e+p;try{t[d?"replaceState":"pushState"](u,"",m),i.value=u}catch(h){console.error(h),o[d?"replace":"assign"](m)}}function r(p,u){const d=Rn({},t.state,pc(i.value.back,p,i.value.forward,!0),u,{position:i.value.position});l(p,d,!0),a.value=p}function c(p,u){const d=Rn({},i.value,t.state,{forward:p,scroll:Da()});l(d.current,d,!0);const f=Rn({},pc(a.value,p,null),{position:d.position+1},u);l(p,f,!1),a.value=p}return{location:a,state:i,push:c,replace:r}}function N_(e){e=E_(e);const t=H_(e),o=D_(e,t.state,t.location,t.replace);function a(l,r=!0){r||o.pauseListeners(),history.go(l)}const i=Rn({location:"",base:e,go:a,createHref:M_.bind(null,e)},t,o);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function j_(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),N_(e)}function q_(e){return typeof e=="string"||e&&typeof e=="object"}function Iu(e){return typeof e=="string"||typeof e=="symbol"}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Tu=Symbol("");var uc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(uc||(uc={}));function bs(e,t){return Rn(new Error,{type:e,[Tu]:!0},t)}function tt(e,t){return e instanceof Error&&Tu in e&&(t==null||!!(e.type&t))}const dc="[^/]+?",B_={sensitive:!1,strict:!1,start:!0,end:!0},W_=/[.+*?^${}()[\]/\\]/g;function V_(e,t){const o=Rn({},B_,t),a=[];let i=o.start?"^":"";const l=[];for(const u of e){const d=u.length?[]:[90];o.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const m=u[f];let h=40+(o.sensitive?.25:0);if(m.type===0)f||(i+="/"),i+=m.value.replace(W_,"\\$&"),h+=40;else if(m.type===1){const{value:_,repeatable:w,optional:S,regexp:P}=m;l.push({name:_,repeatable:w,optional:S});const M=P||dc;if(M!==dc){h+=10;try{new RegExp(`(${M})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+A.message)}}let L=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(L=S&&u.length<2?`(?:/${L})`:"/"+L),S&&(L+="?"),i+=L,h+=20,S&&(h+=-8),w&&(h+=-20),M===".*"&&(h+=-50)}d.push(h)}a.push(d)}if(o.strict&&o.end){const u=a.length-1;a[u][a[u].length-1]+=.7000000000000001}o.strict||(i+="/?"),o.end?i+="$":o.strict&&(i+="(?:/|$)");const r=new RegExp(i,o.sensitive?"":"i");function c(u){const d=u.match(r),f={};if(!d)return null;for(let m=1;m<d.length;m++){const h=d[m]||"",_=l[m-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function p(u){let d="",f=!1;for(const m of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of m)if(h.type===0)d+=h.value;else if(h.type===1){const{value:_,repeatable:w,optional:S}=h,P=_ in u?u[_]:"";if(Be(P)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Be(P)?P.join("/"):P;if(!M)if(S)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);d+=M}}return d||"/"}return{re:r,score:a,keys:l,parse:c,stringify:p}}function K_(e,t){let o=0;for(;o<e.length&&o<t.length;){const a=t[o]-e[o];if(a)return a;o++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function U_(e,t){let o=0;const a=e.score,i=t.score;for(;o<a.length&&o<i.length;){const l=K_(a[o],i[o]);if(l)return l;o++}if(Math.abs(i.length-a.length)===1){if(mc(a))return 1;if(mc(i))return-1}return i.length-a.length}function mc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const G_={type:0,value:""},Y_=/[a-zA-Z0-9_]/;function Q_(e){if(!e)return[[]];if(e==="/")return[[G_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${o})/"${u}": ${h}`)}let o=0,a=o;const i=[];let l;function r(){l&&i.push(l),l=[]}let c=0,p,u="",d="";function f(){!u||(o===0?l.push({type:0,value:u}):o===1||o===2||o===3?(l.length>1&&(p==="*"||p==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:d,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=p}for(;c<e.length;){if(p=e[c++],p==="\\"&&o!==2){a=o,o=4;continue}switch(o){case 0:p==="/"?(u&&f(),r()):p===":"?(f(),o=1):m();break;case 4:m(),o=a;break;case 1:p==="("?o=2:Y_.test(p)?m():(f(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+p:o=3:d+=p;break;case 3:f(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,d="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),r(),i}function Z_(e,t,o){const a=V_(Q_(e.path),o),i=Rn(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function J_(e,t){const o=[],a=new Map;t=hc({strict:!1,end:!0,sensitive:!1},t);function i(d){return a.get(d)}function l(d,f,m){const h=!m,_=n1(d);_.aliasOf=m&&m.record;const w=hc(t,d),S=[_];if("alias"in d){const L=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of L)S.push(Rn({},_,{components:m?m.record.components:_.components,path:A,aliasOf:m?m.record:_}))}let P,M;for(const L of S){const{path:A}=L;if(f&&A[0]!=="/"){const W=f.record.path,q=W[W.length-1]==="/"?"":"/";L.path=f.record.path+(A&&q+A)}if(P=Z_(L,f,w),m?m.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),h&&d.name&&!fc(P)&&r(d.name)),_.children){const W=_.children;for(let q=0;q<W.length;q++)l(W[q],P,m&&m.children[q])}m=m||P,p(P)}return M?()=>{r(M)}:eo}function r(d){if(Iu(d)){const f=a.get(d);f&&(a.delete(d),o.splice(o.indexOf(f),1),f.children.forEach(r),f.alias.forEach(r))}else{const f=o.indexOf(d);f>-1&&(o.splice(f,1),d.record.name&&a.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return o}function p(d){let f=0;for(;f<o.length&&U_(d,o[f])>=0&&(d.record.path!==o[f].record.path||!Eu(d,o[f]));)f++;o.splice(f,0,d),d.record.name&&!fc(d)&&a.set(d.record.name,d)}function u(d,f){let m,h={},_,w;if("name"in d&&d.name){if(m=a.get(d.name),!m)throw bs(1,{location:d});w=m.record.name,h=Rn(X_(f.params,m.keys.filter(M=>!M.optional).map(M=>M.name)),d.params),_=m.stringify(h)}else if("path"in d)_=d.path,m=o.find(M=>M.re.test(_)),m&&(h=m.parse(_),w=m.record.name);else{if(m=f.name?a.get(f.name):o.find(M=>M.re.test(f.path)),!m)throw bs(1,{location:d,currentLocation:f});w=m.record.name,h=Rn({},f.params,d.params),_=m.stringify(h)}const S=[];let P=m;for(;P;)S.unshift(P.record),P=P.parent;return{name:w,path:_,params:h,matched:S,meta:t1(S)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:u,removeRoute:r,getRoutes:c,getRecordMatcher:i}}function X_(e,t){const o={};for(const a of t)a in e&&(o[a]=e[a]);return o}function n1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:e1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function e1(e){const t={},o=e.props||!1;if("component"in e)t.default=o;else for(const a in e.components)t[a]=typeof o=="boolean"?o:o[a];return t}function fc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function t1(e){return e.reduce((t,o)=>Rn(t,o.meta),{})}function hc(e,t){const o={};for(const a in e)o[a]=a in t?t[a]:e[a];return o}function Eu(e,t){return t.children.some(o=>o===e||Eu(e,o))}const Lu=/#/g,s1=/&/g,o1=/\//g,a1=/=/g,i1=/\?/g,Mu=/\+/g,l1=/%5B/g,r1=/%5D/g,Pu=/%5E/g,c1=/%60/g,Ou=/%7B/g,p1=/%7C/g,Au=/%7D/g,u1=/%20/g;function Ll(e){return encodeURI(""+e).replace(p1,"|").replace(l1,"[").replace(r1,"]")}function d1(e){return Ll(e).replace(Ou,"{").replace(Au,"}").replace(Pu,"^")}function Hi(e){return Ll(e).replace(Mu,"%2B").replace(u1,"+").replace(Lu,"%23").replace(s1,"%26").replace(c1,"`").replace(Ou,"{").replace(Au,"}").replace(Pu,"^")}function m1(e){return Hi(e).replace(a1,"%3D")}function f1(e){return Ll(e).replace(Lu,"%23").replace(i1,"%3F")}function h1(e){return e==null?"":f1(e).replace(o1,"%2F")}function fa(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function g1(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<a.length;++i){const l=a[i].replace(Mu," "),r=l.indexOf("="),c=fa(r<0?l:l.slice(0,r)),p=r<0?null:fa(l.slice(r+1));if(c in t){let u=t[c];Be(u)||(u=t[c]=[u]),u.push(p)}else t[c]=p}return t}function gc(e){let t="";for(let o in e){const a=e[o];if(o=m1(o),a==null){a!==void 0&&(t+=(t.length?"&":"")+o);continue}(Be(a)?a.map(l=>l&&Hi(l)):[a&&Hi(a)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+o,l!=null&&(t+="="+l))})}return t}function _1(e){const t={};for(const o in e){const a=e[o];a!==void 0&&(t[o]=Be(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const v1=Symbol(""),_c=Symbol(""),Ml=Symbol(""),Ru=Symbol(""),Ni=Symbol("");function js(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function o(){e=[]}return{add:t,list:()=>e,reset:o}}function ht(e,t,o,a,i){const l=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const p=f=>{f===!1?c(bs(4,{from:o,to:t})):f instanceof Error?c(f):q_(f)?c(bs(2,{from:t,to:f})):(l&&a.enterCallbacks[i]===l&&typeof f=="function"&&l.push(f),r())},u=e.call(a&&a.instances[i],t,o,p);let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(f=>c(f))})}function ti(e,t,o,a){const i=[];for(const l of e)for(const r in l.components){let c=l.components[r];if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(k1(c)){const u=(c.__vccOpts||c)[t];u&&i.push(ht(u,o,a,l,r))}else{let p=c();i.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=S_(u)?u.default:u;l.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&ht(m,o,a,l,r)()}))}}return i}function k1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vc(e){const t=x(Ml),o=x(Ru),a=R(()=>t.resolve(C(e.to))),i=R(()=>{const{matched:p}=a.value,{length:u}=p,d=p[u-1],f=o.matched;if(!d||!f.length)return-1;const m=f.findIndex(ys.bind(null,d));if(m>-1)return m;const h=kc(p[u-2]);return u>1&&kc(d)===h&&f[f.length-1].path!==h?f.findIndex(ys.bind(null,p[u-2])):m}),l=R(()=>i.value>-1&&S1(o.params,a.value.params)),r=R(()=>i.value>-1&&i.value===o.matched.length-1&&$u(o.params,a.value.params));function c(p={}){return x1(p)?t[C(e.replace)?"replace":"push"](C(e.to)).catch(eo):Promise.resolve()}return{route:a,href:R(()=>a.value.href),isActive:l,isExactActive:r,navigate:c}}const y1=En({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vc,setup(e,{slots:t}){const o=jn(vc(e)),{options:a}=x(Ml),i=R(()=>({[yc(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[yc(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const l=t.default&&t.default(o);return e.custom?l:ge("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:i.value},l)}}}),b1=y1;function x1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function S1(e,t){for(const o in t){const a=t[o],i=e[o];if(typeof a=="string"){if(a!==i)return!1}else if(!Be(i)||i.length!==a.length||a.some((l,r)=>l!==i[r]))return!1}return!0}function kc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yc=(e,t,o)=>e!=null?e:t!=null?t:o,w1=En({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:o}){const a=x(Ni),i=R(()=>e.route||a.value),l=x(_c,0),r=R(()=>{let u=C(l);const{matched:d}=i.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),c=R(()=>i.value.matched[r.value]);xe(_c,R(()=>r.value+1)),xe(v1,c),xe(Ni,i);const p=Q();return fn(()=>[p.value,c.value,e.name],([u,d,f],[m,h,_])=>{d&&(d.instances[f]=u,h&&h!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!ys(d,h)||!m)&&(d.enterCallbacks[f]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,d=e.name,f=c.value,m=f&&f.components[d];if(!m)return bc(o.default,{Component:m,route:u});const h=f.props[d],_=h?h===!0?u.params:typeof h=="function"?h(u):h:null,S=ge(m,Rn({},_,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[d]=null)},ref:p}));return bc(o.default,{Component:S,route:u})||S}}});function bc(e,t){if(!e)return null;const o=e(t);return o.length===1?o[0]:o}const z1=w1;function $1(e){const t=J_(e.routes,e),o=e.parseQuery||g1,a=e.stringifyQuery||gc,i=e.history,l=js(),r=js(),c=js(),p=je(dt);let u=dt;cs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ni.bind(null,F=>""+F),f=ni.bind(null,h1),m=ni.bind(null,fa);function h(F,X){let j,nn;return Iu(F)?(j=t.getRecordMatcher(F),nn=X):nn=F,t.addRoute(nn,j)}function _(F){const X=t.getRecordMatcher(F);X&&t.removeRoute(X)}function w(){return t.getRoutes().map(F=>F.record)}function S(F){return!!t.getRecordMatcher(F)}function P(F,X){if(X=Rn({},X||p.value),typeof F=="string"){const gn=ei(o,F,X.path),v=t.resolve({path:gn.path},X),y=i.createHref(gn.fullPath);return Rn(gn,v,{params:m(v.params),hash:fa(gn.hash),redirectedFrom:void 0,href:y})}let j;if("path"in F)j=Rn({},F,{path:ei(o,F.path,X.path).path});else{const gn=Rn({},F.params);for(const v in gn)gn[v]==null&&delete gn[v];j=Rn({},F,{params:f(F.params)}),X.params=f(X.params)}const nn=t.resolve(j,X),wn=F.hash||"";nn.params=d(m(nn.params));const Dn=$_(a,Rn({},F,{hash:d1(wn),path:nn.path})),_n=i.createHref(Dn);return Rn({fullPath:Dn,hash:wn,query:a===gc?_1(F.query):F.query||{}},nn,{redirectedFrom:void 0,href:_n})}function M(F){return typeof F=="string"?ei(o,F,p.value.path):Rn({},F)}function L(F,X){if(u!==F)return bs(8,{from:X,to:F})}function A(F){return Y(F)}function W(F){return A(Rn(M(F),{replace:!0}))}function q(F){const X=F.matched[F.matched.length-1];if(X&&X.redirect){const{redirect:j}=X;let nn=typeof j=="function"?j(F):j;return typeof nn=="string"&&(nn=nn.includes("?")||nn.includes("#")?nn=M(nn):{path:nn},nn.params={}),Rn({query:F.query,hash:F.hash,params:"path"in nn?{}:F.params},nn)}}function Y(F,X){const j=u=P(F),nn=p.value,wn=F.state,Dn=F.force,_n=F.replace===!0,gn=q(j);if(gn)return Y(Rn(M(gn),{state:wn,force:Dn,replace:_n}),X||j);const v=j;v.redirectedFrom=X;let y;return!Dn&&C_(a,nn,j)&&(y=bs(16,{to:v,from:nn}),Ve(nn,nn,!0,!1)),(y?Promise.resolve(y):un(v,nn)).catch(E=>tt(E)?tt(E,2)?E:kn(E):cn(E,v,nn)).then(E=>{if(E){if(tt(E,2))return Y(Rn({replace:_n},M(E.to),{state:wn,force:Dn}),X||v)}else E=bn(v,nn,!0,_n,wn);return vn(v,nn,E),E})}function an(F,X){const j=L(F,X);return j?Promise.reject(j):Promise.resolve()}function un(F,X){let j;const[nn,wn,Dn]=C1(F,X);j=ti(nn.reverse(),"beforeRouteLeave",F,X);for(const gn of nn)gn.leaveGuards.forEach(v=>{j.push(ht(v,F,X))});const _n=an.bind(null,F,X);return j.push(_n),ss(j).then(()=>{j=[];for(const gn of l.list())j.push(ht(gn,F,X));return j.push(_n),ss(j)}).then(()=>{j=ti(wn,"beforeRouteUpdate",F,X);for(const gn of wn)gn.updateGuards.forEach(v=>{j.push(ht(v,F,X))});return j.push(_n),ss(j)}).then(()=>{j=[];for(const gn of F.matched)if(gn.beforeEnter&&!X.matched.includes(gn))if(Be(gn.beforeEnter))for(const v of gn.beforeEnter)j.push(ht(v,F,X));else j.push(ht(gn.beforeEnter,F,X));return j.push(_n),ss(j)}).then(()=>(F.matched.forEach(gn=>gn.enterCallbacks={}),j=ti(Dn,"beforeRouteEnter",F,X),j.push(_n),ss(j))).then(()=>{j=[];for(const gn of r.list())j.push(ht(gn,F,X));return j.push(_n),ss(j)}).catch(gn=>tt(gn,8)?gn:Promise.reject(gn))}function vn(F,X,j){for(const nn of c.list())nn(F,X,j)}function bn(F,X,j,nn,wn){const Dn=L(F,X);if(Dn)return Dn;const _n=X===dt,gn=cs?history.state:{};j&&(nn||_n?i.replace(F.fullPath,Rn({scroll:_n&&gn&&gn.scroll},wn)):i.push(F.fullPath,wn)),p.value=F,Ve(F,X,j,_n),kn()}let Nn;function Vn(){Nn||(Nn=i.listen((F,X,j)=>{if(!pt.listening)return;const nn=P(F),wn=q(nn);if(wn){Y(Rn(wn,{replace:!0}),nn).catch(eo);return}u=nn;const Dn=p.value;cs&&A_(cc(Dn.fullPath,j.delta),Da()),un(nn,Dn).catch(_n=>tt(_n,12)?_n:tt(_n,2)?(Y(_n.to,nn).then(gn=>{tt(gn,20)&&!j.delta&&j.type===go.pop&&i.go(-1,!1)}).catch(eo),Promise.reject()):(j.delta&&i.go(-j.delta,!1),cn(_n,nn,Dn))).then(_n=>{_n=_n||bn(nn,Dn,!1),_n&&(j.delta&&!tt(_n,8)?i.go(-j.delta,!1):j.type===go.pop&&tt(_n,20)&&i.go(-1,!1)),vn(nn,Dn,_n)}).catch(eo)}))}let te=js(),Pn=js(),ln;function cn(F,X,j){kn(F);const nn=Pn.list();return nn.length?nn.forEach(wn=>wn(F,X,j)):console.error(F),Promise.reject(F)}function on(){return ln&&p.value!==dt?Promise.resolve():new Promise((F,X)=>{te.add([F,X])})}function kn(F){return ln||(ln=!F,Vn(),te.list().forEach(([X,j])=>F?j(F):X()),te.reset()),F}function Ve(F,X,j,nn){const{scrollBehavior:wn}=e;if(!cs||!wn)return Promise.resolve();const Dn=!j&&R_(cc(F.fullPath,0))||(nn||!j)&&history.state&&history.state.scroll||null;return Xn().then(()=>wn(F,X,Dn)).then(_n=>_n&&O_(_n)).catch(_n=>cn(_n,F,X))}const ie=F=>i.go(F);let Ce;const me=new Set,pt={currentRoute:p,listening:!0,addRoute:h,removeRoute:_,hasRoute:S,getRoutes:w,resolve:P,options:e,push:A,replace:W,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:Pn.add,isReady:on,install(F){const X=this;F.component("RouterLink",b1),F.component("RouterView",z1),F.config.globalProperties.$router=X,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>C(p)}),cs&&!Ce&&p.value===dt&&(Ce=!0,A(i.location).catch(wn=>{}));const j={};for(const wn in dt)j[wn]=R(()=>p.value[wn]);F.provide(Ml,X),F.provide(Ru,jn(j)),F.provide(Ni,p);const nn=F.unmount;me.add(F),F.unmount=function(){me.delete(F),me.size<1&&(u=dt,Nn&&Nn(),Nn=null,p.value=dt,Ce=!1,ln=!1),nn()}}};return pt}function ss(e){return e.reduce((t,o)=>t.then(()=>o()),Promise.resolve())}function C1(e,t){const o=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let r=0;r<l;r++){const c=t.matched[r];c&&(e.matched.find(u=>ys(u,c))?a.push(c):o.push(c));const p=e.matched[r];p&&(t.matched.find(u=>ys(u,p))||i.push(p))}return[o,a,i]}const si=Q(!1),so=Q(!1),us=Q(!1),I1=Q(!0),ji=Ng({xs:460,...Ag}),Kt=x_(),Fu=u_(),T1=R(()=>Kt.height.value-Kt.width.value/yt>180),Du=c_(qe?document.body:null),_s=Og(),E1=R(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=_s.value)==null?void 0:e.tagName)||"")||((t=_s.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),L1=R(()=>{var e;return["BUTTON","A"].includes(((e=_s.value)==null?void 0:e.tagName)||"")});We("slidev-camera","default");We("slidev-mic","default");const ta=We("slidev-scale",0),re=We("slidev-show-overview",!1),oi=We("slidev-presenter-cursor",!0),xc=We("slidev-show-editor",!1);We("slidev-editor-width",qe?window.innerWidth*.4:100);const Hu=Su(re);function Sc(e,t,o,a=i=>i){return e*a(.5-t*(.5-o))}function M1(e){return[-e[0],-e[1]]}function Ae(e,t){return[e[0]+t[0],e[1]+t[1]]}function Te(e,t){return[e[0]-t[0],e[1]-t[1]]}function Oe(e,t){return[e[0]*t,e[1]*t]}function P1(e,t){return[e[0]/t,e[1]/t]}function qs(e){return[e[1],-e[0]]}function O1(e,t){return e[0]*t[0]+e[1]*t[1]}function A1(e,t){return e[0]===t[0]&&e[1]===t[1]}function R1(e){return Math.hypot(e[0],e[1])}function F1(e){return e[0]*e[0]+e[1]*e[1]}function wc(e,t){return F1(Te(e,t))}function Nu(e){return P1(e,R1(e))}function D1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Bs(e,t,o){let a=Math.sin(o),i=Math.cos(o),l=e[0]-t[0],r=e[1]-t[1],c=l*i-r*a,p=l*a+r*i;return[c+t[0],p+t[1]]}function qi(e,t,o){return Ae(e,Oe(Te(t,e),o))}function zc(e,t,o){return Ae(e,Oe(t,o))}var{min:os,PI:H1}=Math,$c=.275,Ws=H1+1e-4;function N1(e,t={}){let{size:o=16,smoothing:a=.5,thinning:i=.5,simulatePressure:l=!0,easing:r=ln=>ln,start:c={},end:p={},last:u=!1}=t,{cap:d=!0,easing:f=ln=>ln*(2-ln)}=c,{cap:m=!0,easing:h=ln=>--ln*ln*ln+1}=p;if(e.length===0||o<=0)return[];let _=e[e.length-1].runningLength,w=c.taper===!1?0:c.taper===!0?Math.max(o,_):c.taper,S=p.taper===!1?0:p.taper===!0?Math.max(o,_):p.taper,P=Math.pow(o*a,2),M=[],L=[],A=e.slice(0,10).reduce((ln,cn)=>{let on=cn.pressure;if(l){let kn=os(1,cn.distance/o),Ve=os(1,1-kn);on=os(1,ln+(Ve-ln)*(kn*$c))}return(ln+on)/2},e[0].pressure),W=Sc(o,i,e[e.length-1].pressure,r),q,Y=e[0].vector,an=e[0].point,un=an,vn=an,bn=un;for(let ln=0;ln<e.length;ln++){let{pressure:cn}=e[ln],{point:on,vector:kn,distance:Ve,runningLength:ie}=e[ln];if(ln<e.length-1&&_-ie<3)continue;if(i){if(l){let j=os(1,Ve/o),nn=os(1,1-j);cn=os(1,A+(nn-A)*(j*$c))}W=Sc(o,i,cn,r)}else W=o/2;q===void 0&&(q=W);let Ce=ie<w?f(ie/w):1,me=_-ie<S?h((_-ie)/S):1;if(W=Math.max(.01,W*Math.min(Ce,me)),ln===e.length-1){let j=Oe(qs(kn),W);M.push(Te(on,j)),L.push(Ae(on,j));continue}let pt=e[ln+1].vector,F=O1(kn,pt);if(F<0){let j=Oe(qs(Y),W);for(let nn=1/13,wn=0;wn<=1;wn+=nn)vn=Bs(Te(on,j),on,Ws*wn),M.push(vn),bn=Bs(Ae(on,j),on,Ws*-wn),L.push(bn);an=vn,un=bn;continue}let X=Oe(qs(qi(pt,kn,F)),W);vn=Te(on,X),(ln<=1||wc(an,vn)>P)&&(M.push(vn),an=vn),bn=Ae(on,X),(ln<=1||wc(un,bn)>P)&&(L.push(bn),un=bn),A=cn,Y=kn}let Nn=e[0].point.slice(0,2),Vn=e.length>1?e[e.length-1].point.slice(0,2):Ae(e[0].point,[1,1]),te=[],Pn=[];if(e.length===1){if(!(w||S)||u){let ln=zc(Nn,Nu(qs(Te(Nn,Vn))),-(q||W)),cn=[];for(let on=1/13,kn=on;kn<=1;kn+=on)cn.push(Bs(ln,Nn,Ws*2*kn));return cn}}else{if(!(w||S&&e.length===1))if(d)for(let cn=1/13,on=cn;on<=1;on+=cn){let kn=Bs(L[0],Nn,Ws*on);te.push(kn)}else{let cn=Te(M[0],L[0]),on=Oe(cn,.5),kn=Oe(cn,.51);te.push(Te(Nn,on),Te(Nn,kn),Ae(Nn,kn),Ae(Nn,on))}let ln=qs(M1(e[e.length-1].vector));if(S||w&&e.length===1)Pn.push(Vn);else if(m){let cn=zc(Vn,ln,W);for(let on=1/29,kn=on;kn<1;kn+=on)Pn.push(Bs(cn,Vn,Ws*3*kn))}else Pn.push(Ae(Vn,Oe(ln,W)),Ae(Vn,Oe(ln,W*.99)),Te(Vn,Oe(ln,W*.99)),Te(Vn,Oe(ln,W)))}return M.concat(Pn,L.reverse(),te)}function j1(e,t={}){var o;let{streamline:a=.5,size:i=16,last:l=!1}=t;if(e.length===0)return[];let r=.15+(1-a)*.85,c=Array.isArray(e[0])?e:e.map(({x:h,y:_,pressure:w=.5})=>[h,_,w]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let _=1;_<5;_++)c.push(qi(c[0],h,_/4))}c.length===1&&(c=[...c,[...Ae(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=p[0],m=c.length-1;for(let h=1;h<c.length;h++){let _=l&&h===m?c[h].slice(0,2):qi(f.point,c[h],r);if(A1(f.point,_))continue;let w=D1(_,f.point);if(d+=w,h<m&&!u){if(d<i)continue;u=!0}f={point:_,pressure:c[h][2]>=0?c[h][2]:.5,vector:Nu(Te(f.point,_)),distance:w,runningLength:d},p.push(f)}return p[0].vector=((o=p[1])==null?void 0:o.vector)||[0,0],p}function q1(e,t={}){return N1(j1(e,t),t)}var B1=()=>({events:{},emit(e,...t){let o=this.events[e]||[];for(let a=0,i=o.length;a<i;a++)o[a](...t)},on(e,t){var o;return(o=this.events[e])!=null&&o.push(t)||(this.events[e]=[t]),()=>{var a;this.events[e]=(a=this.events[e])==null?void 0:a.filter(i=>t!==i)}}});function ha(e,t){return e-t}function W1(e){return e<0?-1:1}function ga(e){return[Math.abs(e),W1(e)]}function ju(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var V1=2,ot=V1,Cs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var i;var t;const o=this.drauu.el,a=(i=this.drauu.options.coordinateScale)!=null?i:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*a,y:(e.pageY-l.top)*a,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((t=o.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*a,y:r.y*a,pressure:e.pressure}}}createElement(e,t){var i;const o=document.createElementNS("http://www.w3.org/2000/svg",e),a=t?{...this.brush,...t}:this.brush;return o.setAttribute("fill",(i=a.fill)!=null?i:"transparent"),o.setAttribute("stroke",a.color),o.setAttribute("stroke-width",a.size.toString()),o.setAttribute("stroke-linecap","round"),a.dasharray&&o.setAttribute("stroke-dasharray",a.dasharray),o}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(ot))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},K1=class extends Cs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=q1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const o=t.reduce((a,[i,l],r,c)=>{const[p,u]=c[(r+1)%c.length];return a.push(i,l,(i+p)/2,(l+u)/2),a},["M",...t[0],"Q"]);return o.push("Z"),o.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},U1=class extends Cs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,o]=ga(e.x-this.start.x),[a,i]=ga(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,a);t=l,a=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",a);else{const[l,r]=[this.start.x,this.start.x+t*o].sort(ha),[c,p]=[this.start.y,this.start.y+a*i].sort(ha);this.attr("cx",(l+r)/2),this.attr("cy",(c+p)/2),this.attr("rx",(r-l)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function qu(e,t){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),a.setAttribute("id",e),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(i),o.appendChild(a),o}var G1=class extends Cs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=ju(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(qu(t,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${t})`),o}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:o}=e;if(this.shiftPressed){const a=e.x-this.start.x,i=e.y-this.start.y;if(i!==0){let l=a/i;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+i*l,o=this.start.y+i):(t=this.start.x+a,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-o),this.attr("x2",t),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",o)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Y1=class extends Cs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,o]=ga(e.x-this.start.x),[a,i]=ga(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,a);t=l,a=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-a),this.attr("width",t*2),this.attr("height",a*2);else{const[l,r]=[this.start.x,this.start.x+t*o].sort(ha),[c,p]=[this.start.y,this.start.y+a*i].sort(ha);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",p-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Q1(e,t){const o=e.x-t.x,a=e.y-t.y;return o*o+a*a}function Z1(e,t,o){let a=t.x,i=t.y,l=o.x-a,r=o.y-i;if(l!==0||r!==0){const c=((e.x-a)*l+(e.y-i)*r)/(l*l+r*r);c>1?(a=o.x,i=o.y):c>0&&(a+=l*c,i+=r*c)}return l=e.x-a,r=e.y-i,l*l+r*r}function J1(e,t){let o=e[0];const a=[o];let i;for(let l=1,r=e.length;l<r;l++)i=e[l],Q1(i,o)>t&&(a.push(i),o=i);return o!==i&&i&&a.push(i),a}function Bi(e,t,o,a,i){let l=a,r=0;for(let c=t+1;c<o;c++){const p=Z1(e[c],e[t],e[o]);p>l&&(r=c,l=p)}l>a&&(r-t>1&&Bi(e,t,r,a,i),i.push(e[r]),o-r>1&&Bi(e,r,o,a,i))}function X1(e,t){const o=e.length-1,a=[e[0]];return Bi(e,0,o,t,a),a.push(e[o]),a}function Cc(e,t,o=!1){if(e.length<=2)return e;const a=t!==void 0?t*t:1;return e=o?e:J1(e,a),e=X1(e,a),e}var nv=class extends Cs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=ju();const t=qu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Cc(this.points,1,!0),this.count=0),this.attr("d",Tc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Tc(Cc(this.points,1,!0))),!e.getTotalLength()))}};function ev(e,t){const o=t.x-e.x,a=t.y-e.y;return{length:Math.sqrt(Math.pow(o,2)+Math.pow(a,2)),angle:Math.atan2(a,o)}}function Ic(e,t,o,a){const i=t||e,l=o||e,r=.2,c=ev(i,l),p=c.angle+(a?Math.PI:0),u=c.length*r,d=e.x+Math.cos(p)*u,f=e.y+Math.sin(p)*u;return{x:d,y:f}}function tv(e,t,o){const a=Ic(o[t-1],o[t-2],e),i=Ic(e,o[t-1],o[t+1],!0);return`C ${a.x.toFixed(ot)},${a.y.toFixed(ot)} ${i.x.toFixed(ot)},${i.y.toFixed(ot)} ${e.x.toFixed(ot)},${e.y.toFixed(ot)}`}function Tc(e){return e.reduce((t,o,a,i)=>a===0?`M ${o.x.toFixed(ot)},${o.y.toFixed(ot)}`:`${t} ${tv(o,a,i)}`,"")}var sv=class extends Cs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(o,a)=>{if(o&&o.length)for(let i=0;i<o.length;i++){const l=o[i];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=l.getPointAtLength(r*c/this.pathSubFactor),u=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:c,element:a||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const o=this.pathFragments[t],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,a)&&(o.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,o)=>!e.includes(o))),e.length>0}lineLineIntersect(e,t){const o=e.x1,a=e.x2,i=t.x1,l=t.x2,r=e.y1,c=e.y2,p=t.y1,u=t.y2,d=(o-a)*(p-u)-(r-c)*(i-l),f=(o*c-r*a)*(i-l)-(o-a)*(i*u-p*l),m=(o*c-r*a)*(p-u)-(r-c)*(i*u-p*l),h=(_,w,S)=>_>=w&&_<=S?!0:_>=S&&_<=w;if(d===0)return!1;{const _={x:f/d,y:m/d};return h(_.x,o,a)&&h(_.y,r,c)&&h(_.x,i,l)&&h(_.y,p,u)}}};function ov(e){return{draw:new nv(e),stylus:new K1(e),line:new G1(e),rectangle:new Y1(e),ellipse:new U1(e),eraseLine:new sv(e)}}var av=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=B1(),this._models=ov(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(t)||this.el,a=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function iv(e){return new av(e)}const Wi=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Qe=We("slidev-drawing-enabled",!1),M7=We("slidev-drawing-pinned",!1),lv=Q(!1),rv=Q(!1),cv=Q(!1),_o=Q(!1),jt=ag(We("slidev-drawing-brush",{color:Wi[0],size:4,mode:"stylus"})),Ec=Q("stylus"),Bu=R(()=>zn.drawings.syncAll||Ge.value);let vo=!1;const Vs=R({get(){return Ec.value},set(e){Ec.value=e,e==="arrow"?(jt.mode="line",jt.arrowEnd=!0):(jt.mode=e,jt.arrowEnd=!1)}}),pv=jn({brush:jt,acceptsInputTypes:R(()=>Qe.value?void 0:["pen"]),coordinateTransform:!1}),pe=$a(iv(pv));function uv(){pe.clear(),Bu.value&&ku(Gn.value,"")}function Wu(){var e;rv.value=pe.canRedo(),lv.value=pe.canUndo(),cv.value=!!((e=pe.el)!=null&&e.children.length)}function dv(e){vo=!0;const t=da[e||Gn.value];t!=null?pe.load(t):pe.clear(),vo=!1}pe.on("changed",()=>{if(Wu(),!vo){const e=pe.dump(),t=Gn.value;(da[t]||"")!==e&&Bu.value&&ku(t,pe.dump())}});Yh(e=>{vo=!0,e[Gn.value]!=null&&pe.load(e[Gn.value]||""),vo=!1,Wu()});Xn(()=>{fn(Gn,()=>{!pe.mounted||dv()},{immediate:!0})});pe.on("start",()=>_o.value=!0);pe.on("end",()=>_o.value=!1);window.addEventListener("keydown",e=>{if(!Qe.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let o=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?pe.redo():pe.undo():e.code==="Escape"?Qe.value=!1:e.code==="KeyL"&&t?Vs.value="line":e.code==="KeyA"&&t?Vs.value="arrow":e.code==="KeyS"&&t?Vs.value="stylus":e.code==="KeyR"&&t?Vs.value="rectangle":e.code==="KeyE"&&t?Vs.value="ellipse":e.code==="KeyC"&&t?uv():e.code.startsWith("Digit")&&t&&+e.code[5]<=Wi.length?jt.color=Wi[+e.code[5]-1]:o=!1,o&&(e.preventDefault(),e.stopPropagation())},!1);function Kn(...e){return R(()=>e.every(t=>ce(t)))}function ke(e){return R(()=>!ce(e))}const Lc=Yg(),ai=We("slidev-color-schema","auto"),Vi=R(()=>zn.colorSchema!=="auto"),Pl=R({get(){return Vi.value?zn.colorSchema==="dark":ai.value==="auto"?Lc.value:ai.value==="dark"},set(e){Vi.value||(ai.value=e===Lc.value?"auto":e?"dark":"light")}}),Vu=Su(Pl);qe&&fn(Pl,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const sa=Q(1),oa=R(()=>Un.length-1),we=Q(0),Ol=Q(0);function mv(){we.value>sa.value&&(we.value-=1)}function fv(){we.value<oa.value&&(we.value+=1)}function hv(){if(we.value>sa.value){let e=we.value-Ol.value;e<sa.value&&(e=sa.value),we.value=e}}function gv(){if(we.value<oa.value){let e=we.value+Ol.value;e>oa.value&&(e=oa.value),we.value=e}}function _v(){const{escape:e,space:t,shift:o,left:a,right:i,up:l,down:r,enter:c,d:p,g:u,o:d}=Fu,f=[{name:"next_space",key:Kn(t,ke(o)),fn:bt,autoRepeat:!0},{name:"prev_space",key:Kn(t,o),fn:xt,autoRepeat:!0},{name:"next_right",key:Kn(i,ke(o),ke(re)),fn:bt,autoRepeat:!0},{name:"prev_left",key:Kn(a,ke(o),ke(re)),fn:xt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:bt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:xt,autoRepeat:!0},{name:"next_down",key:Kn(r,ke(re)),fn:yo,autoRepeat:!0},{name:"prev_up",key:Kn(l,ke(re)),fn:()=>bo(!1),autoRepeat:!0},{name:"next_shift",key:Kn(i,o),fn:yo,autoRepeat:!0},{name:"prev_shift",key:Kn(a,o),fn:()=>bo(!1),autoRepeat:!0},{name:"toggle_dark",key:Kn(p,ke(Qe)),fn:Vu},{name:"toggle_overview",key:Kn(d,ke(Qe)),fn:Hu},{name:"hide_overview",key:Kn(e,ke(Qe)),fn:()=>re.value=!1},{name:"goto",key:Kn(u,ke(Qe)),fn:()=>us.value=!us.value},{name:"next_overview",key:Kn(i,re),fn:fv},{name:"prev_overview",key:Kn(a,re),fn:mv},{name:"up_overview",key:Kn(l,re),fn:hv},{name:"down_overview",key:Kn(r,re),fn:gv},{name:"goto_from_overview",key:Kn(c,re),fn:()=>{xs(we.value),re.value=!1}}];return{customShortcuts:[],defaultShortcuts:f}}const Ku=Kn(ke(E1),ke(L1),I1);function vv(e,t,o=!1){typeof e=="string"&&(e=Fu[e]);const a=Kn(e,Ku);let i=0,l;const r=()=>{if(clearTimeout(l),!a.value){i=0;return}o&&(l=setTimeout(r,Math.max(1e3-i*250,150)),i++),t()};return fn(a,r,{flush:"sync"})}function kv(e,t){return Pg(e,o=>{!Ku.value||o.repeat||t()})}function yv(){const{customShortcuts:e,defaultShortcuts:t}=_v();new Map([...t,...e].map(a=>[a.key,a])).forEach(a=>{a.fn&&vv(a.key,a.fn,a.autoRepeat)}),kv("f",()=>Du.toggle())}const bv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xv=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Sv=[xv];function wv(e,t){return k(),J("svg",bv,Sv)}const zv={name:"carbon-close",render:wv};function Al(e){var o,a;const t=(a=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:a.no;return t!=null?`slidev-page-${t}`:""}const Uu=En({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;x($);const o=Q(),a=r_(o),i=R(()=>t.width?t.width:a.width.value),l=R(()=>t.width?t.width/yt:a.height.value);t.width&&wo(()=>{o.value&&(o.value.style.width=`${i.value}px`,o.value.style.height=`${l.value}px`)});const r=R(()=>i.value/l.value),c=R(()=>t.scale?t.scale:r.value<yt?i.value/Vt:l.value*yt/Vt),p=R(()=>({height:`${gu}px`,width:`${Vt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=R(()=>({"select-none":!zn.selectable,"slidev-code-line-numbers":zn.lineNumbers}));return xe(hu,c),(d,f)=>(k(),J("div",{id:"slide-container",ref_key:"root",ref:o,class:Bn(C(u))},[n("div",{id:"slide-content",style:ae(C(p))},[Je(d.$slots,"default")],4),Je(d.$slots,"controls")],2))}});const Rl=En({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const o=Ye(e,"clicks",t),a=Ye(e,"clicksElements",t),i=Ye(e,"clicksDisabled",t),l=Ye(e,"clicksOrderMap",t);a.value.length=0,xe(Ah,e.route),xe(Rh,e.context),xe(Xs,o),xe(no,i),xe(Ft,a),xe(Pi,l)},render(){var e,t;return this.$props.is?ge(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),$v=["innerHTML"],Cv=En({__name:"DrawingPreview",props:{page:null},setup(e){return x($),(t,o)=>C(da)[e.page]?(k(),J("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(da)[e.page]},null,8,$v)):K("v-if",!0)}}),Iv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Tv=["onClick"],Ev=En({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t);function i(){a.value=!1}function l(h){xs(h),i()}function r(h){return h===we.value}const c=ji.smaller("xs"),p=ji.smaller("sm"),u=4*16*2,d=2*16,f=R(()=>c.value?Kt.width.value-u:p.value?(Kt.width.value-u-d)/2:300),m=R(()=>Math.floor((Kt.width.value-u)/(f.value+d)));return wo(()=>{we.value=Gn.value,Ol.value=m.value}),(h,_)=>{const w=zv;return k(),J(Ln,null,[Oa(n("div",Iv,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ae(`grid-template-columns: repeat(auto-fit,minmax(${C(f)}px,1fr))`)},[(k(!0),J(Ln,null,zo(C(Un).slice(0,-1),(S,P)=>(k(),J("div",{key:S.path,class:"relative"},[n("div",{class:Bn(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(P+1)}]),onClick:M=>l(+S.path)},[(k(),z(Uu,{key:S.path,width:C(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:g(()=>[b(C(Rl),{is:S==null?void 0:S.component,"clicks-disabled":!0,class:Bn(C(Al)(S)),route:S,context:"overview"},null,8,["is","class","route"]),b(Cv,{page:+S.path},null,8,["page"])]),_:2},1032,["width"]))],10,Tv),n("div",{class:"absolute top-0 opacity-50",style:ae(`left: ${C(f)+5}px`)},Ee(P+1),5)]))),128))],4)],512),[[du,C(a)]]),C(a)?(k(),J("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:i},[b(w)])):K("v-if",!0)],64)}}});const Lv="/TPSI/4/css/assets/logo.b72bde5d.png",Mv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Pv=En({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t);function i(){a.value=!1}return(l,r)=>(k(),z(Kp,null,[C(a)?(k(),J("div",Mv,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>i())}),n("div",{class:Bn(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[Je(l.$slots,"default")],2)])):K("v-if",!0)],1024))}}),Ov={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Av=["innerHTML"],Rv=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:Lv,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),s("dev ")])])],-1),Fv=En({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t),i=R(()=>typeof zn.info=="string");return(l,r)=>(k(),z(Pv,{modelValue:C(a),"onUpdate:modelValue":r[0]||(r[0]=c=>Tn(a)?a.value=c:null),class:"px-6 py-4"},{default:g(()=>[n("div",Ov,[C(i)?(k(),J("div",{key:0,class:"mb-4",innerHTML:C(zn).info},null,8,Av)):K("v-if",!0),Rv])]),_:1},8,["modelValue"]))}});const Dv=["disabled","onKeydown"],Hv=En({__name:"Goto",setup(e){x($);const t=Q(),o=Q(""),a=R(()=>{if(o.value.startsWith("/"))return!!Un.find(r=>r.path===o.value.substring(1));{const r=+o.value;return!isNaN(r)&&r>0&&r<=ld.value}});function i(){a.value&&(o.value.startsWith("/")?xs(o.value.substring(1)):xs(+o.value)),l()}function l(){us.value=!1}return fn(us,async r=>{var c,p;r?(await Xn(),o.value="",(c=t.value)==null||c.focus()):(p=t.value)==null||p.blur()}),fn(o,r=>{r.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(r,c)=>(k(),J("div",{id:"slidev-goto-dialog",class:Bn(["fixed right-5 bg-main transform transition-all",C(us)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Oa(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=p=>o.value=p),type:"text",disabled:!C(us),class:Bn(["outline-none bg-transparent",{"text-red-400":!C(a)&&o.value}]),placeholder:"Goto...",onKeydown:[Or(i,["enter"]),Or(l,["escape"])],onBlur:l},null,42,Dv),[[hh,o.value]])],2))}}),Nv=En({__name:"Controls",setup(e){x($);const t=je(),o=je();return(a,i)=>(k(),J(Ln,null,[b(Ev,{modelValue:C(re),"onUpdate:modelValue":i[0]||(i[0]=l=>Tn(re)?re.value=l:null)},null,8,["modelValue"]),b(Hv),C(t)?(k(),z(C(t),{key:0})):K("v-if",!0),C(o)?(k(),z(C(o),{key:1,modelValue:C(si),"onUpdate:modelValue":i[1]||(i[1]=l=>Tn(si)?si.value=l:null)},null,8,["modelValue"])):K("v-if",!0),C(zn).info?(k(),z(Fv,{key:2,modelValue:C(so),"onUpdate:modelValue":i[2]||(i[2]=l=>Tn(so)?so.value=l:null)},null,8,["modelValue"])):K("v-if",!0)],64))}}),jv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qv=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Bv=[qv];function Wv(e,t){return k(),J("svg",jv,Bv)}const Vv={name:"carbon-settings-adjust",render:Wv},Kv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uv=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Gv=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Yv=[Uv,Gv];function Qv(e,t){return k(),J("svg",Kv,Yv)}const Zv={name:"carbon-information",render:Qv},Jv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xv=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),nk=[Xv];function ek(e,t){return k(),J("svg",Jv,nk)}const tk={name:"carbon-download",render:ek},sk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ok=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),ak=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),ik=[ok,ak];function lk(e,t){return k(),J("svg",sk,ik)}const rk={name:"carbon-user-speaker",render:lk},ck={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pk=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),uk=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),dk=[pk,uk];function mk(e,t){return k(),J("svg",ck,dk)}const fk={name:"carbon-presentation-file",render:mk},hk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gk=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),_k=[gk];function vk(e,t){return k(),J("svg",hk,_k)}const kk={name:"carbon-pen",render:vk},yk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},bk=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),xk=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Sk=[bk,xk];function wk(e,t){return k(),J("svg",yk,Sk)}const zk={name:"ph-cursor-duotone",render:wk},$k={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ck=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Ik=[Ck];function Tk(e,t){return k(),J("svg",$k,Ik)}const Gu={name:"ph-cursor-fill",render:Tk},Ek={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lk=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Mk=[Lk];function Pk(e,t){return k(),J("svg",Ek,Mk)}const Ok={name:"carbon-sun",render:Pk},Ak={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rk=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Fk=[Rk];function Dk(e,t){return k(),J("svg",Ak,Fk)}const Hk={name:"carbon-moon",render:Dk},Nk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jk=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),qk=[jk];function Bk(e,t){return k(),J("svg",Nk,qk)}const Wk={name:"carbon-apps",render:Bk},Vk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Kk=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Uk=[Kk];function Gk(e,t){return k(),J("svg",Vk,Uk)}const Yu={name:"carbon-arrow-right",render:Gk},Yk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qk=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Zk=[Qk];function Jk(e,t){return k(),J("svg",Yk,Zk)}const Xk={name:"carbon-arrow-left",render:Jk},n0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e0=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),t0=[e0];function s0(e,t){return k(),J("svg",n0,t0)}const o0={name:"carbon-maximize",render:s0},a0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i0=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),l0=[i0];function r0(e,t){return k(),J("svg",a0,l0)}const c0={name:"carbon-minimize",render:r0},p0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u0=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),d0=[u0];function m0(e,t){return k(),J("svg",p0,d0)}const f0={name:"carbon-checkmark",render:m0},h0={class:"select-list"},g0={class:"title"},_0={class:"items"},v0=["onClick"],k0=En({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t,{passive:!0});return(i,l)=>{const r=f0;return k(),J("div",h0,[n("div",g0,Ee(e.title),1),n("div",_0,[(k(!0),J(Ln,null,zo(e.items,c=>(k(),J("div",{key:c.value,class:Bn(["item",{active:C(a)===c.value}]),onClick:()=>{var p;a.value=c.value,(p=c.onClick)==null||p.call(c)}},[b(r,{class:Bn(["text-green-500",{"opacity-0":C(a)!==c.value}])},null,8,["class"]),s(" "+Ee(c.display||c.value),1)],10,v0))),128))])])}}});const Sn=(e,t)=>{const o=e.__vccOpts||e;for(const[a,i]of t)o[a]=i;return o},y0=Sn(k0,[["__scopeId","data-v-7dd0eaca"]]),b0={class:"text-sm"},x0=En({__name:"Settings",setup(e){x($);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,a)=>(k(),J("div",b0,[b(y0,{modelValue:C(ta),"onUpdate:modelValue":a[0]||(a[0]=i=>Tn(ta)?ta.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),S0={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},w0=En({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t,{passive:!0}),i=Q();return Lg(i,()=>{a.value=!1}),(l,r)=>(k(),J("div",{ref_key:"el",ref:i,class:"flex relative"},[n("button",{class:Bn({disabled:e.disabled}),onClick:r[0]||(r[0]=c=>a.value=!C(a))},[Je(l.$slots,"button",{class:Bn({disabled:e.disabled})})],2),(k(),z(Kp,null,[C(a)?(k(),J("div",S0,[Je(l.$slots,"menu")])):K("v-if",!0)],1024))],512))}}),z0={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Yo={__name:"VerticalDivider",setup(e){return x($),(t,o)=>(k(),J("div",z0))}},$0={render(){return[]}},C0={class:"icon-btn"},I0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},T0={class:"my-auto"},E0={class:"opacity-50"},L0=En({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;x($);const o=ji.smaller("md"),{isFullscreen:a,toggle:i}=Du,l=R(()=>Ui.value?`?password=${Ui.value}`:""),r=R(()=>`/presenter/${Gn.value}${l.value}`),c=R(()=>`/${Gn.value}${l.value}`),p=Q(),u=()=>{p.value&&_s.value&&p.value.contains(_s.value)&&_s.value.blur()},d=R(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=je(),m=je();return $s(()=>import("./DrawingControls.e8a7c30d.js"),["assets/DrawingControls.e8a7c30d.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.4a286728.js"]).then(h=>m.value=h.default),(h,_)=>{const w=c0,S=o0,P=Xk,M=Yu,L=Wk,A=Hk,W=Ok,q=Gu,Y=zk,an=kk,un=fk,vn=qn("RouterLink"),bn=rk,Nn=tk,Vn=Zv,te=Vv;return k(),J("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[n("div",{class:Bn(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",C(d)]),onMouseleave:u},[C(st)?K("v-if",!0):(k(),J("button",{key:0,class:"icon-btn",onClick:_[0]||(_[0]=(...Pn)=>C(i)&&C(i)(...Pn))},[C(a)?(k(),z(w,{key:0})):(k(),z(S,{key:1}))])),n("button",{class:Bn(["icon-btn",{disabled:!C(Y8)}]),onClick:_[1]||(_[1]=(...Pn)=>C(xt)&&C(xt)(...Pn))},[b(P)],2),n("button",{class:Bn(["icon-btn",{disabled:!C(G8)}]),title:"Next",onClick:_[2]||(_[2]=(...Pn)=>C(bt)&&C(bt)(...Pn))},[b(M)],2),C(st)?K("v-if",!0):(k(),J("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:_[3]||(_[3]=Pn=>C(Hu)())},[b(L)])),C(Vi)?K("v-if",!0):(k(),J("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:_[4]||(_[4]=Pn=>C(Vu)())},[C(Pl)?(k(),z(A,{key:0})):(k(),z(W,{key:1}))])),b(Yo),C(st)?K("v-if",!0):(k(),J(Ln,{key:3},[!C(Ge)&&!C(o)&&C(f)?(k(),J(Ln,{key:0},[b(C(f)),b(Yo)],64)):K("v-if",!0),C(Ge)?(k(),J("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:_[5]||(_[5]=Pn=>oi.value=!C(oi))},[C(oi)?(k(),z(q,{key:0})):(k(),z(Y,{key:1,class:"opacity-50"}))])):K("v-if",!0)],64)),!C(zn).drawings.presenterOnly&&!C(st)?(k(),J(Ln,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:_[6]||(_[6]=Pn=>Qe.value=!C(Qe))},[b(an),C(Qe)?(k(),J("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ae({background:C(jt).color})},null,4)):K("v-if",!0)]),b(Yo)],64)):K("v-if",!0),C(st)?K("v-if",!0):(k(),J(Ln,{key:5},[C(Ge)?(k(),z(vn,{key:0,to:C(c),class:"icon-btn",title:"Play Mode"},{default:g(()=>[b(un)]),_:1},8,["to"])):K("v-if",!0),C(V8)?(k(),z(vn,{key:1,to:C(r),class:"icon-btn",title:"Presenter Mode"},{default:g(()=>[b(bn)]),_:1},8,["to"])):K("v-if",!0),K("v-if",!0)],64)),(k(),J(Ln,{key:6},[C(zn).download?(k(),J("button",{key:0,class:"icon-btn",onClick:_[8]||(_[8]=(...Pn)=>C(Gi)&&C(Gi)(...Pn))},[b(Nn)])):K("v-if",!0)],64)),!C(Ge)&&C(zn).info&&!C(st)?(k(),J("button",{key:7,class:"icon-btn",onClick:_[9]||(_[9]=Pn=>so.value=!C(so))},[b(Vn)])):K("v-if",!0),!C(Ge)&&!C(st)?(k(),z(w0,{key:8},{button:g(()=>[n("button",C0,[b(te)])]),menu:g(()=>[b(x0)]),_:1})):K("v-if",!0),C(st)?K("v-if",!0):(k(),z(Yo,{key:9})),n("div",I0,[n("div",T0,[s(Ee(C(Gn))+" ",1),n("span",E0,"/ "+Ee(C(ld)),1)])]),b(C($0))],34)],512)}}}),M0={style:{"font-size":"0.55rem","line-height":"1rem"}},P0=n("div",{class:"absolute bottom-0 left-1"},[n("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),O0={class:"absolute bottom-1 left-89 text-gray-700"},A0={key:0,class:"absolute bottom-1 right-1 text-gray-700"},R0={__name:"global-top",setup(e){const t=x($);return(o,a)=>(k(),J("footer",M0,[P0,n("div",O0," ITT E.Agnelli - Informatica - "+Ee(C(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+Ee(C(t).configs.as)+" - v "+Ee(C(t).configs.version||0),1),C(t).nav.currentPage!==1&&C(t).nav.currentPage!=C(t).nav.total+1?(k(),J("div",A0,Ee(C(t).nav.currentPage-1)+" / "+Ee(C(t).nav.total-1),1)):K("v-if",!0)]))}},Qu={render(){return[ge(R0)]}},Zu={render(){return[]}},F0={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},D0=En({__name:"PresenterMouse",setup(e){return x($),(t,o)=>{const a=Gu;return C(Xa).cursor?(k(),J("div",F0,[b(a,{class:"absolute",style:ae({left:`${C(Xa).cursor.x}%`,top:`${C(Xa).cursor.y}%`})},null,8,["style"])])):K("v-if",!0)}}}),H0=En({__name:"SlidesShow",props:{context:null},setup(e){x($),fn(be,()=>{var o,a;((o=be.value)==null?void 0:o.meta)&&be.value.meta.preload!==!1&&(be.value.meta.__preloaded=!0),((a=ii.value)==null?void 0:a.meta)&&ii.value.meta.preload!==!1&&(ii.value.meta.__preloaded=!0)},{immediate:!0});const t=je();return $s(()=>import("./DrawingLayer.1b74a9ca.js"),[]).then(o=>t.value=o.default),(o,a)=>(k(),J(Ln,null,[K(" Global Bottom "),b(C(Zu)),K(" Slides "),(k(!0),J(Ln,null,zo(C(Un),i=>{var l,r;return k(),J(Ln,{key:i.path},[((l=i.meta)==null?void 0:l.__preloaded)||i===C(be)?Oa((k(),z(C(Rl),{key:0,is:i==null?void 0:i.component,clicks:i===C(be)?C(Ne):0,"clicks-elements":((r=i.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Bn(C(Al)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[du,i===C(be)]]):K("v-if",!0)],64)}),128)),K(" Global Top "),b(C(Qu)),C(t)?(k(),z(C(t),{key:0})):K("v-if",!0),C(Ge)?K("v-if",!0):(k(),z(D0,{key:1}))],64))}}),N0=En({__name:"Play",setup(e){x($),yv();const t=Q();function o(l){var r;xc.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?bt():xt())}J8(t);const a=R(()=>T1.value||xc.value);je();const i=je();return $s(()=>import("./DrawingControls.e8a7c30d.js"),["assets/DrawingControls.e8a7c30d.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.4a286728.js"]).then(l=>i.value=l.default),(l,r)=>(k(),J(Ln,null,[n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:ae(C(_u))},[b(Uu,{class:"w-full h-full",style:ae({background:"var(--slidev-slide-container-background, black)"}),width:C(Hl)?C(Kt).width.value:void 0,scale:C(ta),onPointerdown:o},{default:g(()=>[b(H0,{context:"slide"})]),controls:g(()=>[n("div",{class:Bn(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[C(a)?"opacity-100 right-0":"opacity-0 p-2",C(_o)?"pointer-events-none":""]])},[b(L0,{class:"m-auto",persist:C(a)},null,8,["persist"])],2),!C(zn).drawings.presenterOnly&&!C(st)&&C(i)?(k(),z(C(i),{key:0,class:"ml-0"})):K("v-if",!0)]),_:1},8,["style","width","scale"]),K("v-if",!0)],4),b(Nv)],64))}});function Ju(e){const t=R(()=>e.value.path),o=R(()=>Un.length-1),a=R(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=R(()=>ja(a.value)),l=R(()=>Un.find(m=>m.path===`${a.value}`)),r=R(()=>{var m,h,_;return(_=(h=(m=l.value)==null?void 0:m.meta)==null?void 0:h.slide)==null?void 0:_.id}),c=R(()=>{var m,h;return(h=(m=l.value)==null?void 0:m.meta)==null?void 0:h.layout}),p=R(()=>Un.find(m=>m.path===`${Math.min(Un.length,a.value+1)}`)),u=R(()=>Un.filter(m=>{var h,_;return(_=(h=m.meta)==null?void 0:h.slide)==null?void 0:_.title}).reduce((m,h)=>(Nl(m,h),m),[])),d=R(()=>jl(u.value,l.value)),f=R(()=>ql(d.value));return{route:e,path:t,total:o,currentPage:a,currentPath:i,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:p,rawTree:u,treeWithActiveStatuses:d,tree:f}}function Xu(e,t,o){const a=Q(0);Xn(()=>{ze.afterEach(async()=>{await Xn(),a.value+=1})});const i=R(()=>{var p,u;return a.value,((u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),l=R(()=>{var p,u,d;return+((d=(u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.clicks)!=null?d:i.value.length)}),r=R(()=>o.value<Un.length-1||e.value<l.value),c=R(()=>o.value>1||e.value>0);return{clicks:e,clicksElements:i,clicksTotal:l,hasNext:r,hasPrev:c}}const j0=["id"],Mc=En({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const o=e,a=Ye(o,"clicksElements",t),i=R(()=>({height:`${gu}px`,width:`${Vt}px`})),l=je();$s(()=>import("./DrawingPreview.20055e6c.js"),[]).then(u=>l.value=u.default);const r=R(()=>o.clicks),c=Xu(r,o.nav.currentRoute,o.nav.currentPage),p=R(()=>`${o.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return xe($,jn({nav:{...o.nav,...c},configs:zn,themeConfigs:R(()=>zn.themeConfig)})),(u,d)=>{var f;return k(),J("div",{id:C(p),class:"slide-container",style:ae(C(i))},[b(C(Zu)),b(C(Rl),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":C(a),"onUpdate:clicks-elements":d[0]||(d[0]=m=>Tn(a)?a.value=m:null),clicks:C(r),"clicks-disabled":!1,class:Bn(C(Al)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),C(l)?(k(),z(C(l),{key:0,page:+e.route.path},null,8,["page"])):K("v-if",!0),b(C(Qu))],12,j0)}}}),q0=En({__name:"PrintSlide",props:{route:null},setup(e){var l;const t=e;x($);const o=jn(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),a=R(()=>t.route),i=Ju(a);return(r,c)=>(k(),J(Ln,null,[b(Mc,{"clicks-elements":o,"onUpdate:clicks-elements":c[0]||(c[0]=p=>Tn(o)?o.value=p:null),clicks:0,nav:C(i),route:C(a)},null,8,["clicks-elements","nav","route"]),C(oo)?K("v-if",!0):(k(!0),J(Ln,{key:0},zo(o.length,p=>(k(),z(Mc,{key:p,clicks:p,nav:C(i),route:C(a)},null,8,["clicks","nav","route"]))),128))],64))}}),B0={id:"print-content"},W0=En({__name:"PrintContainer",props:{width:null},setup(e){const t=e;x($);const o=R(()=>t.width),a=R(()=>t.width/yt),i=R(()=>o.value/a.value),l=R(()=>i.value<yt?o.value/Vt:a.value*yt/Vt),r=Un.slice(0,-1),c=R(()=>({"select-none":!zn.selectable,"slidev-code-line-numbers":zn.lineNumbers}));return xe(hu,l),(p,u)=>(k(),J("div",{id:"print-container",class:Bn(C(c))},[n("div",B0,[(k(!0),J(Ln,null,zo(C(r),d=>(k(),z(q0,{key:d.path,route:d},null,8,["route"]))),128))]),Je(p.$slots,"controls")],2))}});const V0=En({__name:"Print",setup(e){x($);const t=Nt.canvasWidth,o=Math.round(t/Nt.aspectRatio)+1;function a(i,{slots:l}){if(l.default)return ge("style",l.default())}return wo(()=>{Hl?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(i,l)=>(k(),J(Ln,null,[b(a,null,{default:g(()=>[s(" @page { size: "+Ee(C(t))+"px "+Ee(o)+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ae(C(_u))},[b(W0,{class:"w-full h-full",style:ae({background:"var(--slidev-slide-container-background, black)"}),width:C(Kt).width.value},null,8,["style","width"])],4)],64))}});const K0={class:"slidev-layout end"},U0={__name:"end",setup(e){return x($),(t,o)=>(k(),J("div",K0," END "))}},G0=Sn(U0,[["__scopeId","data-v-ab32435f"]]);function Pc(e){return e.startsWith("/")?"/TPSI/4/css/"+e.slice(1):e}function Y0(e,t=!1){const o=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),a={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?t?`linear-gradient(#0005, #0008), url(${Pc(e)})`:`url("${Pc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const Q0={class:"my-auto w-full"},Z0=En({__name:"cover",props:{background:{default:""}},setup(e){const t=e;x($);const o=R(()=>Y0(t.background,!0));return(a,i)=>(k(),J("div",{class:"slidev-layout cover",style:ae(C(o))},[n("div",Q0,[Je(a.$slots,"default")])],4))}}),J0=n("h1",null,"Cascading Style Sheets",-1),X0=n("p",null,"Anche l\u2019occhio vuole la sua parte",-1),ny={class:"pt-12"},ey={class:"px-2 py-1"},ty=s(" Premi spazio o "),sy=s(" per la prossima slide "),oy={__name:"1",setup(e){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.3.8"};return x($),(o,a)=>{const i=Yu;return k(),z(Z0,T(I(t)),{default:g(()=>[J0,X0,n("div",ny,[n("span",ey,[ty,b(i,{class:"inline"}),sy])])]),_:1},16)}}},ay={class:"slidev-layout default"},O={__name:"default",setup(e){return x($),(t,o)=>(k(),J("div",ay,[Je(t.$slots,"default")]))}},iy=n("h1",null,"CSS",-1),ly=n("p",null,"Cascading Style Sheets - Fogli di Stile",-1),ry=n("p",null,"Un documento o pagina HTML \xE8 composto da tre parti principali:",-1),cy=n("h3",null,"Struttura",-1),py=n("p",null,"La sua componente logica e semantica: indica come suddividere il contenuto in elementi, eventualmente suddivisi in sottoelementi e cos\xEC via in una sorta di gerarchia ad albero. Ad esempio, questo documento ha un titolo e una successione di sezioni/paragrafi aperte a loro volta da un titolo.",-1),uy=n("h3",null,"Contenuto",-1),dy=n("p",null,"Generalmente costituito dalle parole e risorse, di diversa natuera, che compongono il documento (testo, immagine, audio e video).",-1),my=n("h3",null,"Stile",-1),fy=n("p",null,"Descrizione sul come visualizzare il documento su un particolare dispositivo o supporto. Un documento stampato su carta avr\xE0 uno stile diverso rispetto allo stesso documento formattato per una piattaforma mobile. Lo stile quindi influisce su come un documento HTML viene visualizzato su dispositivi e condizioni diverse.",-1),hy={__name:"2",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[iy,ly,ry,cy,py,uy,dy,my,fy]),_:1},16))}},gy=En({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,r;const e=fr("click"),t=fr("after"),o=(c,p,u)=>Oa(c,[[p,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let a=(r=(l=this.$slots).default)==null?void 0:r.call(l);if(!a)return;a=Dh(a);const i=c=>c.map((p,u)=>Gt(p)?o(ge(p),u%this.every===0?e:t,Math.floor(u/this.every)):p);return a.length===1&&["ul","ol"].includes(a[0].type)&&Array.isArray(a[0].children)?ge(a[0],{},[i(a[0].children)]):i(a)}}),Zn=En({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return b(gy,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),_y=n("h1",null,"CSS",-1),vy=n("p",null,"Cascading Style Sheets - Fogli di Stile",-1),ky=n("ul",null,[n("li",null,[n("em",null,"C"),s("ascading "),n("em",null,"S"),s("tyle "),n("em",null,"S"),s("heets (CSS) \xE8 un semplice meccanismo ed un linguaggio per definire lo stile (fonts, colors, spacing) e descrivere l\u2019aspetto e il layout di un documento HTML.")]),n("li",null,"La prima versione viene introdotta dal W3C nel 1996. Oggiamo siamo alla versione 3 - CSS3"),n("li",null,[s("CSS descrive come i vari elementi HTML devono essere visualizzati (colore, dimensione, font, bordo, \u2026) ==> "),n("strong",null,"no descrizione semantica"),s(".")])],-1),yy={grid:"~ cols-3 gap-12"},by=n("div",null,[n("br"),n("h1",null,"Titolo"),n("h1",{style:{color:"red"}},"Titolo"),n("h1",{style:{color:"green",background:"yellow"}},"Titolo"),n("h1",{style:{color:"gray",border:"4px dotted black"}},"Titolo")],-1),xy=n("div",{class:"col-span-2"},[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("green"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s("yellow"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("gray"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("4px dotted"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])])],-1),Sy=n("div",null,null,-1),wy={__name:"3",setup(e){const t={};return x($),(o,a)=>{const i=Zn;return k(),z(O,T(I(t)),{default:g(()=>[_y,vy,ky,n("div",yy,[b(i,null,{default:g(()=>[by]),_:1}),b(i,null,{default:g(()=>[xy]),_:1}),Sy])]),_:1},16)}}},zy=n("h1",null,"CSS",-1),$y=n("p",null,"Cascading Style Sheets - Fogli di Stile",-1),Cy=n("ul",null,[n("li",null,[s("Il nome "),n("em",null,"cascading"),s(" deriva dallo schema di priorit\xE0 con cui viene scelto quale stile applicare ad un dato elemento (stile viene applicato dall\u2019alto al basso).")]),n("li",null,[s("CSS \xE8 progettato per separare il contenuto dalla presentazione ["),n("a",{href:"https://en.wikipedia.org/wiki/Separation_of_concerns",target:"_blank",rel:"noopener"},"Separation of concerns"),s("].")]),n("li",null,[s("In altre parole "),n("strong",null,"HTML"),s(" descrive la semantica di una pagina, mentre "),n("strong",null,"CSS"),s(" descrive lo stile grafico e come deve apparire.")]),n("li",null,"Questa separazione fornisce molti vantaggi, tra cui la possibilit\xE0 di riusare lo stesso markup e visualizzarlo in modo diversi su dispositivi diversi."),n("li",null,[s("Normalmente lo stile di una pagina si definisce in un file esterno "),n("code",null,".css")]),n("li",null,[s("Permette anche di automentare la "),n("em",null,"manutenibilit\xE0"),s(" di un sito web, di separare il sito in aree funzionali diverse e di permettere la cooperazione tra diverse professionalit\xE0 all\u2019interno del gruppo di lavoro.")])],-1),Iy={__name:"4",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[zy,$y,Cy]),_:1},16))}},Ty=n("h1",null,"CSS",-1),Ey=n("p",null,[s("Il "),n("a",{href:"https://www.w3schools.com/",target:"_blank",rel:"noopener"},"sito web"),s(" del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.")],-1),Ly=n("h3",null,"HTML",-1),My=n("ul",null,[n("li",null,[n("a",{href:"https://www.w3schools.com/html/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/html/default.asp")]),n("li",null,[n("a",{href:"https://www.w3schools.com/tags/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/tags/default.asp")]),n("li",null,[n("a",{href:"https://htmlreference.io/",target:"_blank",rel:"noopener"},"https://htmlreference.io/")])],-1),Py=n("h3",null,"CSS",-1),Oy=n("ul",null,[n("li",null,[n("a",{href:"https://www.w3schools.com/css/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/css/default.asp")]),n("li",null,[n("a",{href:"https://www.w3schools.com/cssref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/cssref/default.asp")]),n("li",null,[n("a",{href:"https://cssreference.io/",target:"_blank",rel:"noopener"},"https://cssreference.io/")])],-1),Ay=n("h3",null,"Java Script",-1),Ry=n("ul",null,[n("li",null,[n("a",{href:"https://www.w3schools.com/js/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/js/default.asp")]),n("li",null,[n("a",{href:"https://www.w3schools.com/jsref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/jsref/default.asp")]),n("li",null,[n("a",{href:"https://devdocs.io/javascript/",target:"_blank",rel:"noopener"},"https://devdocs.io/javascript/")]),n("li",null,[n("a",{href:"https://javascript.info/",target:"_blank",rel:"noopener"},"https://javascript.info/")])],-1),Fy={__name:"5",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[Ty,Ey,Ly,My,Py,Oy,Ay,Ry]),_:1},16))}},Dy={class:"slidev-layout section w-full h-full grid"},Hy={class:"my-auto text-center"},ne={__name:"section",setup(e){return x($),(t,o)=>(k(),J("div",Dy,[n("div",Hy,[Je(t.$slots,"default")])]))}},Ny=n("h1",{class:"sezione"},"Regole, dichiarazioni e sintassi CSS",-1),jy={__name:"6",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[Ny]),_:1},16))}},qy="/TPSI/4/css/assets/css_01.eddfbc97.jpg",By=n("h1",null,"CSS",-1),Wy=n("p",null,"Regole e Sintassi",-1),Vy=n("ul",null,[n("li",null,[s("Un foglio di stile CSS (file .css) definisce una serie "),n("u",null,[n("strong",null,"regole")]),s(" da applicare ad una pagina HTML")]),n("li",null,[s("Una regola di stile \xE8 composta da "),n("strong",null,"2"),s(" parti: "),n("ul",null,[n("li",null,[n("u",null,[n("em",null,"Selettore")]),s(": seleziona o punta ad uno o pi\xF9 elementi o tag HTML.")]),n("li",null,[n("u",null,[n("em",null,"Blocco dichiarazione")]),s(": contiene una o pi\xF9 dichiarazioni separate da un punto e virgola "),n("code",null,";"),s(" e racchiuse tra "),n("code",null,"{}")])])]),n("li",null,[s("Ogni "),n("em",null,"dichiarazione"),s(" descrive una "),n("strong",null,"propriet\xE0 CSS"),s(" in base a: "),n("ul",null,[n("li",null,[n("u",null,[n("em",null,"nome")]),s(": nome della propriet\xE0 CSS del tag HTML")]),n("li",null,[n("u",null,[n("em",null,"valore")]),s(": valore assegnato alla propriet\xE0")])])])],-1),Ky=n("p",null,[n("img",{src:qy,alt:"css_01.jpg"})],-1),Uy={__name:"7",setup(e){const t={};return x($),(o,a)=>{const i=qn("center"),l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[By,Wy,Vy,b(l,null,{default:g(()=>[b(i,null,{default:g(()=>[Ky]),_:1})]),_:1})]),_:1},16)}}},Gy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Yy=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),Qy=[Yy];function Zy(e,t){return k(),J("svg",Gy,Qy)}const Jy={name:"ph-clipboard",render:Zy},Xy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},nb=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),eb=[nb];function tb(e,t){return k(),J("svg",Xy,eb)}const sb={name:"ph-check-circle",render:tb};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function nd(e){return typeof e>"u"||e===null}function ob(e){return typeof e=="object"&&e!==null}function ab(e){return Array.isArray(e)?e:nd(e)?[]:[e]}function ib(e,t){var o,a,i,l;if(t)for(l=Object.keys(t),o=0,a=l.length;o<a;o+=1)i=l[o],e[i]=t[i];return e}function lb(e,t){var o="",a;for(a=0;a<t;a+=1)o+=e;return o}function rb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var cb=nd,pb=ob,ub=ab,db=lb,mb=rb,fb=ib,Fl={isNothing:cb,isObject:pb,toArray:ub,repeat:db,isNegativeZero:mb,extend:fb};function ed(e,t){var o="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(o+='in "'+e.mark.name+'" '),o+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(o+=`

`+e.mark.snippet),a+" "+o):a}function ko(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=ed(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ko.prototype=Object.create(Error.prototype);ko.prototype.constructor=ko;ko.prototype.toString=function(t){return this.name+": "+ed(this,t)};var Dt=ko,hb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],gb=["scalar","sequence","mapping"];function _b(e){var t={};return e!==null&&Object.keys(e).forEach(function(o){e[o].forEach(function(a){t[String(a)]=o})}),t}function vb(e,t){if(t=t||{},Object.keys(t).forEach(function(o){if(hb.indexOf(o)===-1)throw new Dt('Unknown option "'+o+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(o){return o},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=_b(t.styleAliases||null),gb.indexOf(this.kind)===-1)throw new Dt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var oe=vb;function Oc(e,t){var o=[];return e[t].forEach(function(a){var i=o.length;o.forEach(function(l,r){l.tag===a.tag&&l.kind===a.kind&&l.multi===a.multi&&(i=r)}),o[i]=a}),o}function kb(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,o;function a(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(t=0,o=arguments.length;t<o;t+=1)arguments[t].forEach(a);return e}function Ki(e){return this.extend(e)}Ki.prototype.extend=function(t){var o=[],a=[];if(t instanceof oe)a.push(t);else if(Array.isArray(t))a=a.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(o=o.concat(t.implicit)),t.explicit&&(a=a.concat(t.explicit));else throw new Dt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(l){if(!(l instanceof oe))throw new Dt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Dt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Dt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(l){if(!(l instanceof oe))throw new Dt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Ki.prototype);return i.implicit=(this.implicit||[]).concat(o),i.explicit=(this.explicit||[]).concat(a),i.compiledImplicit=Oc(i,"implicit"),i.compiledExplicit=Oc(i,"explicit"),i.compiledTypeMap=kb(i.compiledImplicit,i.compiledExplicit),i};var yb=Ki,bb=new oe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),xb=new oe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Sb=new oe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),wb=new yb({explicit:[bb,xb,Sb]});function zb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function $b(){return null}function Cb(e){return e===null}var Ib=new oe("tag:yaml.org,2002:null",{kind:"scalar",resolve:zb,construct:$b,predicate:Cb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Tb(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Eb(e){return e==="true"||e==="True"||e==="TRUE"}function Lb(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Mb=new oe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Tb,construct:Eb,predicate:Lb,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Pb(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ob(e){return 48<=e&&e<=55}function Ab(e){return 48<=e&&e<=57}function Rb(e){if(e===null)return!1;var t=e.length,o=0,a=!1,i;if(!t)return!1;if(i=e[o],(i==="-"||i==="+")&&(i=e[++o]),i==="0"){if(o+1===t)return!0;if(i=e[++o],i==="b"){for(o++;o<t;o++)if(i=e[o],i!=="_"){if(i!=="0"&&i!=="1")return!1;a=!0}return a&&i!=="_"}if(i==="x"){for(o++;o<t;o++)if(i=e[o],i!=="_"){if(!Pb(e.charCodeAt(o)))return!1;a=!0}return a&&i!=="_"}if(i==="o"){for(o++;o<t;o++)if(i=e[o],i!=="_"){if(!Ob(e.charCodeAt(o)))return!1;a=!0}return a&&i!=="_"}}if(i==="_")return!1;for(;o<t;o++)if(i=e[o],i!=="_"){if(!Ab(e.charCodeAt(o)))return!1;a=!0}return!(!a||i==="_")}function Fb(e){var t=e,o=1,a;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),a=t[0],(a==="-"||a==="+")&&(a==="-"&&(o=-1),t=t.slice(1),a=t[0]),t==="0")return 0;if(a==="0"){if(t[1]==="b")return o*parseInt(t.slice(2),2);if(t[1]==="x")return o*parseInt(t.slice(2),16);if(t[1]==="o")return o*parseInt(t.slice(2),8)}return o*parseInt(t,10)}function Db(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Fl.isNegativeZero(e)}var Hb=new oe("tag:yaml.org,2002:int",{kind:"scalar",resolve:Rb,construct:Fb,predicate:Db,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Nb=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function jb(e){return!(e===null||!Nb.test(e)||e[e.length-1]==="_")}function qb(e){var t,o;return t=e.replace(/_/g,"").toLowerCase(),o=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:o*parseFloat(t,10)}var Bb=/^[-+]?[0-9]+e/;function Wb(e,t){var o;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Fl.isNegativeZero(e))return"-0.0";return o=e.toString(10),Bb.test(o)?o.replace("e",".e"):o}function Vb(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Fl.isNegativeZero(e))}var Kb=new oe("tag:yaml.org,2002:float",{kind:"scalar",resolve:jb,construct:qb,predicate:Vb,represent:Wb,defaultStyle:"lowercase"}),Ub=wb.extend({implicit:[Ib,Mb,Hb,Kb]}),Gb=Ub,td=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),sd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Yb(e){return e===null?!1:td.exec(e)!==null||sd.exec(e)!==null}function Qb(e){var t,o,a,i,l,r,c,p=0,u=null,d,f,m;if(t=td.exec(e),t===null&&(t=sd.exec(e)),t===null)throw new Error("Date resolve error");if(o=+t[1],a=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(o,a,i));if(l=+t[4],r=+t[5],c=+t[6],t[7]){for(p=t[7].slice(0,3);p.length<3;)p+="0";p=+p}return t[9]&&(d=+t[10],f=+(t[11]||0),u=(d*60+f)*6e4,t[9]==="-"&&(u=-u)),m=new Date(Date.UTC(o,a,i,l,r,c,p)),u&&m.setTime(m.getTime()-u),m}function Zb(e){return e.toISOString()}var Jb=new oe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Yb,construct:Qb,instanceOf:Date,represent:Zb});function Xb(e){return e==="<<"||e===null}var nx=new oe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Xb}),Dl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function ex(e){if(e===null)return!1;var t,o,a=0,i=e.length,l=Dl;for(o=0;o<i;o++)if(t=l.indexOf(e.charAt(o)),!(t>64)){if(t<0)return!1;a+=6}return a%8===0}function tx(e){var t,o,a=e.replace(/[\r\n=]/g,""),i=a.length,l=Dl,r=0,c=[];for(t=0;t<i;t++)t%4===0&&t&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(a.charAt(t));return o=i%4*6,o===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):o===18?(c.push(r>>10&255),c.push(r>>2&255)):o===12&&c.push(r>>4&255),new Uint8Array(c)}function sx(e){var t="",o=0,a,i,l=e.length,r=Dl;for(a=0;a<l;a++)a%3===0&&a&&(t+=r[o>>18&63],t+=r[o>>12&63],t+=r[o>>6&63],t+=r[o&63]),o=(o<<8)+e[a];return i=l%3,i===0?(t+=r[o>>18&63],t+=r[o>>12&63],t+=r[o>>6&63],t+=r[o&63]):i===2?(t+=r[o>>10&63],t+=r[o>>4&63],t+=r[o<<2&63],t+=r[64]):i===1&&(t+=r[o>>2&63],t+=r[o<<4&63],t+=r[64],t+=r[64]),t}function ox(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var ax=new oe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:ex,construct:tx,predicate:ox,represent:sx}),ix=Object.prototype.hasOwnProperty,lx=Object.prototype.toString;function rx(e){if(e===null)return!0;var t=[],o,a,i,l,r,c=e;for(o=0,a=c.length;o<a;o+=1){if(i=c[o],r=!1,lx.call(i)!=="[object Object]")return!1;for(l in i)if(ix.call(i,l))if(!r)r=!0;else return!1;if(!r)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function cx(e){return e!==null?e:[]}var px=new oe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:rx,construct:cx}),ux=Object.prototype.toString;function dx(e){if(e===null)return!0;var t,o,a,i,l,r=e;for(l=new Array(r.length),t=0,o=r.length;t<o;t+=1){if(a=r[t],ux.call(a)!=="[object Object]"||(i=Object.keys(a),i.length!==1))return!1;l[t]=[i[0],a[i[0]]]}return!0}function mx(e){if(e===null)return[];var t,o,a,i,l,r=e;for(l=new Array(r.length),t=0,o=r.length;t<o;t+=1)a=r[t],i=Object.keys(a),l[t]=[i[0],a[i[0]]];return l}var fx=new oe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:dx,construct:mx}),hx=Object.prototype.hasOwnProperty;function gx(e){if(e===null)return!0;var t,o=e;for(t in o)if(hx.call(o,t)&&o[t]!==null)return!1;return!0}function _x(e){return e!==null?e:{}}var vx=new oe("tag:yaml.org,2002:set",{kind:"mapping",resolve:gx,construct:_x});Gb.extend({implicit:[Jb,nx],explicit:[ax,px,fx,vx]});function Ac(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var kx=new Array(256),yx=new Array(256);for(var as=0;as<256;as++)kx[as]=Ac(as)?1:0,yx[as]=Ac(as);function bx(e){return Array.from(new Set(e))}function Rc(...e){let t,o,a;e.length===1?(t=0,a=1,[o]=e):[t,o,a=1]=e;const i=[];let l=t;for(;l<o;)i.push(l),l+=a||1;return i}function xx(e,t){if(!t||t==="all"||t==="*")return Rc(1,e+1);const o=[];for(const a of t.split(/[,;]/g))if(!a.includes("-"))o.push(+a);else{const[i,l]=a.split("-",2);o.push(...Rc(+i,l?+l+1:e+1))}return bx(o).filter(a=>a<=e).sort((a,i)=>a-i)}const Sx=["title"],hn=En({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;x($);const o=x(Xs),a=x(Ft),i=x(no);function l(f=5){const m=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_=h.length;for(let w=0;w<f;w++)m.push(h.charAt(Math.floor(Math.random()*_)));return m.join("")}const r=Q(),c=Jt();zs(()=>{const f=t.at==null?a==null?void 0:a.value.length:t.at,m=R(()=>i!=null&&i.value?t.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(f||0)),t.ranges.length-1)),h=R(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(i!=null&&i.value)){const _=l(),w=Hh(t.ranges.length-1).map(S=>_+S);a!=null&&a.value&&(a.value.push(...w),Pa(()=>w.forEach(S=>Oi(a.value,S)),c))}wo(()=>{if(!r.value)return;const w=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const S of w){const P=Array.from(S.querySelectorAll(".line")),M=xx(P.length,h.value);if(P.forEach((L,A)=>{const W=M.includes(A+1);L.classList.toggle(At,!0),L.classList.toggle("highlighted",W),L.classList.toggle("dishonored",!W)}),t.maxHeight){const L=S.querySelector(".line.highlighted");L&&L.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=jg();function d(){var m,h;const f=(h=(m=r.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,m)=>{const h=sb,_=Jy;return k(),J("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:ae({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Je(f.$slots,"default"),C(zn).codeCopy?(k(),J("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:C(p)?"Copied":"Copy",onClick:m[0]||(m[0]=w=>d())},[C(p)?(k(),z(h,{key:0,class:"p-2 w-8 h-8"})):(k(),z(_,{key:1,class:"p-2 w-8 h-8"}))],8,Sx)):K("v-if",!0)],4)}}}),wx=n("h1",null,"CSS",-1),zx=n("p",null,"Regole e Sintassi",-1),$x=n("ul",null,[n("li",null,[s("I commenti per il CSS sono quelli del C tradizionale "),n("code",null,"/*"),s(" e "),n("code",null,"*/")])],-1),Cx=n("br",null,null,-1),Ix=n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"/* questo \xE8 un commento su una sola linea */")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"h1"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"/* questo \xE8 un "),s(`
`),n("span",{class:"line"},"commento "),s(`
`),n("span",{class:"line"},"su pi\xF9 linee */"),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"p1"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")])])],-1),Tx={__name:"8",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[wx,zx,$x,Cx,b(i,G({},{ranges:[""]}),{default:g(()=>[Ix]),_:1},16)]),_:1},16)}}},Ex=n("h1",{class:"sezione"},"Priorit\xE0 Cascade CSS",-1),Lx={__name:"9",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[Ex]),_:1},16))}},Mx=n("h1",null,"CSS",-1),Px=n("p",null,"Cascade Style",-1),Ox=n("ul",null,[n("li",null,[s("Ci sono "),n("strong",null,"3"),s(" modi per specificare lo stile di una pagina/elemento HTML: "),n("ol",null,[n("li",null,[n("strong",null,"Inline")]),n("li",null,[n("strong",null,"Internal")]),n("li",null,[n("strong",null,"External")])])])],-1),Ax=n("h3",null,"Inline",-1),Rx=n("ul",null,[n("li",null,[s("Uno stile "),n("em",null,"inline"),s(" normalmente si usa per alterare la visualizzazione di un singolo elemento all\u2019interno di una pagina HTML.")]),n("li",null,[s("Per specificare uno stile "),n("em",null,"inline"),s(" basta inserire la "),n("u",null,[n("em",null,"dichiarazione CSS")]),s(" dentro l\u2019attributo "),n("em",null,[n("strong",null,"style")]),s(" del tag per cui si vuole definire lo stile.")])],-1),Fx={grid:"~ cols-2 gap-4"},Dx=n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])]),n("br"),n("h1",{style:{color:"red"}},"Titolo rosso")],-1),Hx=n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("1px solid"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo boerdo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])]),n("br"),n("h1",{style:{border:"1px solid"}},"Titolo bordo")],-1),Nx={__name:"10",setup(e){const t={};return x($),(o,a)=>{const i=Zn;return k(),z(O,T(I(t)),{default:g(()=>[Mx,Px,Ox,Ax,Rx,n("div",Fx,[b(i,null,{default:g(()=>[Dx]),_:1}),b(i,null,{default:g(()=>[Hx]),_:1})])]),_:1},16)}}},jx=n("h1",null,"CSS",-1),qx=n("p",null,"Cascade Style",-1),Bx=n("h3",null,"Inline",-1),Wx=n("ul",null,[n("li",null,[s("Specificare lo stile inline come attributo del tag, presenta vari svantaggi: "),n("ul",null,[n("li",null,"Rende il codice HTML pi\xF9 difficoltoso da leggere"),n("li",null,[s("Non rispetta il principio "),n("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",target:"_blank",rel:"noopener"},"DRY"),s(" (Don\u2019t Repeat Yourself)")]),n("li",null,"Proliferazione e duplicazione degli stili in una pagina di medio/alta complessit\xE0"),n("li",null,[n("strong",null,"Viola"),s(" il principio di suddivisione della struttura/semantica di una pagina dallo stile di presentazione")])])])],-1),Vx={grid:"~ cols-2 gap-4"},Kx=n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo1 in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo2 in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])]),n("br"),n("h1",{style:{color:"red"}},"Titolo1 in rosso"),n("h1",{style:{color:"red"}},"Titolo2 Titolo in rosso")],-1),Ux=n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo3 in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo4 in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])]),n("br"),n("h1",{style:{color:"red"}},"Titolo3 in rosso"),n("h1",{style:{color:"red"}},"Titolo4 in rosso")],-1),Gx={__name:"11",setup(e){const t={};return x($),(o,a)=>{const i=Zn;return k(),z(O,T(I(t)),{default:g(()=>[jx,qx,Bx,Wx,n("div",Vx,[b(i,null,{default:g(()=>[Kx]),_:1}),b(i,null,{default:g(()=>[Ux]),_:1})])]),_:1},16)}}},Yx=n("h1",null,"Esercizio css_01",-1),Qx=n("p",null,"CSS Inline",-1),Zx=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_02.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_01.html")]),n("li",null,[s("Definire lo stile inline per 4 tag "),n("code",null,"h2"),s(" e impostare il colore a rosso")]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_01.html")],-1),Jx={__name:"12",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[Yx,Qx,Zx]),_:1},16))}},Xx=n("h1",null,"CSS",-1),n2=n("p",null,"Cascade Style",-1),e2=n("h3",null,"Internal",-1),t2=n("ul",null,[n("li",null,[s("Per ovviare ai problemi degli stili "),n("em",null,"inline"),s(" \xE8 possibile specificare lo stile degli elementi di una pagina, all\u2019interno ("),n("em",null,"internal"),s(") della sezione "),n("code",null,"<style>"),s(" nell\u2019header della pagina HTML.")]),n("li",null,[s("All\u2019interno della sezione "),n("code",null,"<style>"),s(" saranno prersenti le "),n("em",null,[n("strong",null,"regole CSS")]),s(" da applicare a "),n("strong",null,"TUTTA"),s(" la pagina.")]),n("li",null,[s("Normalmente lo stile "),n("em",null,"internal"),s(" si usa quando una pagina ha un unico stile.")])],-1),s2={grid:"~ cols-2 gap-4"},o2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("title")]),n("span",{class:"token punctuation"},">")]),s("Internal CSS"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("title")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      h1 {color: red;} "),n("span",{class:"token comment"},"<!-- Regola CSS -->")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Ancora un Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Ultimo Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")])])])],-1),a2=n("br",null,null,-1),i2=n("div",null,[n("h1",{style:{color:"red"}},"Titolo in rosso"),n("h1",{style:{color:"red"}},"Ancora un Titolo in rosso"),n("h1",{style:{color:"red"}},"Ultimo Titolo in rosso"),n("br")],-1),l2={__name:"13",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[Xx,n2,e2,t2,n("div",s2,[b(l,null,{default:g(()=>[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[o2]),_:1},16),a2])]),_:1}),b(l,null,{default:g(()=>[i2]),_:1})])]),_:1},16)}}},r2=n("h1",null,"Esercizio css_02",-1),c2=n("p",null,"CSS Internal",-1),p2=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_01.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_02.html")]),n("li",null,[s("Definire uno stile internal per i tag "),n("code",null,"h2"),s(" e impostare il colore a blue")]),n("li",null,[s("Rispondere alle seguenti domande: "),n("ul",null,[n("li",null,"Tutti i tag h2 sono diventati blue?"),n("li",null,"Perch\xE8?")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_02.html")],-1),u2={__name:"14",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[r2,c2,p2]),_:1},16))}},d2=n("h1",null,"CSS",-1),m2=n("p",null,"Cascade Style",-1),f2=n("h3",null,"External",-1),h2=n("ul",null,[n("li",null,[s("Specificare lo style embedded nella pagina HTML, presenta alcuni svantaggi: "),n("ul",null,[n("li",null,"Rende il codice HTML pi\xF9 difficoltoso da leggere"),n("li",null,"Aumenta la dimensione della pagina html"),n("li",null,"Lo stile si applica ad una singola pagina web e deve essere replicato per altre pagien di un sito")])]),n("li",null,[s("Per ovviare a questi problemi, \xE8 possibile specificare lo stile di una o pi\xF9 pagine (sito) attraverso un file "),n("code",null,".css"),s(" esterno ("),n("em",null,"external style sheet"),s(")")]),n("li",null,[s("In questo modo si ottiene la massima flessibilit\xE0 e per modificare lo stile di un elemento per "),n("strong",null,"TUTTO"),s(" il sito basta fare una singola modifica.")])],-1),g2={__name:"15",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[d2,m2,f2,h2]),_:1},16))}},_2=n("h1",null,"CSS",-1),v2=n("p",null,"Cascade Style",-1),k2=n("h3",null,"External",-1),y2=n("ul",null,[n("li",null,[s("Quindi \xE8 possibile specificare lo stile come file esterno, utilizzanod il tag "),n("code",null,"<link>"),s(" all\u2019interno della sezione "),n("code",null,"<head>"),s(" della pagina HTML.")]),n("li",null,[s("Nello specifico bisogna indicare quale file "),n("code",null,".css"),s(" caricare in questo modo:")])],-1),b2=n("br",null,null,-1),x2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("path/to/file.css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text/css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])])])],-1),S2=s(' dove: - **rel="stylesheet"**: indica che il contenuto del file modificher\xE0 la parte di stile della pagina - **href="path/to/file.css"**: indica la posizione del file .css (percorso relativo o assoluto) - **type="text/css"**: indica che il file \xE8 di tipo style sheet (CSS) '),w2={__name:"16",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[_2,v2,k2,y2,b2,b(i,G({},{ranges:[""]}),{default:g(()=>[x2]),_:1},16),S2]),_:1},16)}}},z2=n("h1",null,"CSS",-1),$2=n("p",null,"Cascade Style",-1),C2=n("h3",null,"External",-1),I2={grid:"~ cols-3 gap-4"},T2={grid:"col-span-2"},E2=n("p",null,"index.html",-1),L2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("it"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stile.css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text/css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("title")]),n("span",{class:"token punctuation"},">")]),s("External CSS"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("title")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Ancora un Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Ancora un Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Ultimo Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")])])])],-1),M2=n("div",null,[n("p",null,"stile.css"),n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"h1 {color: red;}")])]),n("h1",{style:{color:"red","font-size":"24px"}},"Titolo in rosso"),n("h1",{style:{color:"red","font-size":"24px"}},"Ancora un Titolo in rosso"),n("h1",{style:{color:"red","font-size":"24px"}},"Ancora un Titolo in rosso"),n("h1",{style:{color:"red","font-size":"24px"}},"Ultimo Titolo in rosso")],-1),P2={__name:"17",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[z2,$2,C2,n("div",I2,[n("div",T2,[E2,b(i,G({},{ranges:[""]}),{default:g(()=>[L2]),_:1},16)]),M2])]),_:1},16)}}},O2=n("h1",null,"Esercizio css_03",-1),A2=n("p",null,"CSS External",-1),R2=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_02.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_03.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_03.css")]),n("li",null,[s("Definire uno stile external per i tag "),n("code",null,"h1"),s(" e "),n("code",null,"h2"),s(" e impostare il colore a verde")]),n("li",null,[s("Rispondere alle seguenti domande: "),n("ul",null,[n("li",null,"Tutti i tag h1 e h2 sono diventati verdi?"),n("li",null,"Perch\xE8?")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_03.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_03.css")],-1),F2={__name:"18",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[O2,A2,R2]),_:1},16))}},D2=n("h1",null,"CSS",-1),H2=n("p",null,"Priorit\xE0 degli stili",-1),N2=n("p",null,"Come visto nelle lezioni e esercizi precedenti, lo stile di un elemento pu\xF2 essere definito in 3 posizioni diverse:",-1),j2=n("ol",null,[n("li",null,"inline come attributo del tag"),n("li",null,"internal nella pagina"),n("li",null,"external in un file .css")],-1),q2=n("p",null,[s("Quindi, se per un elemento sono definiti 3 stili, "),n("strong",null,"quale si applica?")],-1),B2=n("ul",null,[n("li",null,[s("Gli stili si applicano in "),n("em",null,"cascata"),s(" (Cascade) secondo una priorit\xE0 dal livello pi\xF9 basso verso il livello pi\xF9 alto: "),n("ul",null,[n("li",null,"se \xE8 solo presente uno stile external questo viene applicato"),n("li",null,"se \xE8 presente uno stile exgternal e uno stile internal, quello internal viene applicato"),n("li",null,"se sono presenti tutti e tre i livelli di stile, quello inline viene applicato")])])],-1),W2=n("div",{style:{border:"1px solid black",margin:"15px",padding:"15px",background:"green",color:"yellow"}}," In altre parole viene applicato lo stile pi\xF9 vicino al tag. ",-1),V2={__name:"19",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[D2,H2,N2,j2,q2,B2,W2]),_:1},16))}},K2=n("h1",null,"Esercizio css_04",-1),U2=n("p",null,"CSS External",-1),G2=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_03.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_04.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_04.css")]),n("li",null,"Rimuovere tutti gli stili inline ed internal"),n("li",null,"Inserire tutti gli stilo solo come external"),n("li",null,[s("Rispondere alle seguenti domande: "),n("ul",null,[n("li",null,"Tutti i tag h1 e h2 sono diventati verdi?"),n("li",null,"Perch\xE8?")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_04.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_04.css")],-1),Y2={__name:"20",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[K2,U2,G2]),_:1},16))}},Q2=n("h1",{class:"sezione"},"I Selettori",-1),Z2={__name:"21",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[Q2]),_:1},16))}},J2=n("h1",null,"CSS",-1),X2=n("p",null,"Selettori",-1),nS=n("ul",null,[n("li",null,[s("Come visto in precedenza, una regola CSS inizia sempre con un "),n("em",null,[n("strong",null,"selettore")]),s(".")]),n("li",null,'Un selettore, "cerca" o seleziona uno o pi\xF9 tag HTML a cui applicare la regola CSS e quindi variarne lo stile.'),n("li",null,[s("I selettori CSS possono essere divisi in "),n("strong",null,"5"),s(" categorie: "),n("ol",null,[n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Simple")])]),s(" : selezionano un tag in base al nome, ad un ID o una classe")]),n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Combinator")])]),s(" : selezionano elementi basandosi su specifiche relazioni tra essi")]),n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Pseudo-Class")])]),s(" : selezionano tag in funzione di stati specifici")]),n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Pseudo-Elements")])]),s(" : seleziona solo una parte di un tag")]),n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Attribute")])]),s(" : seleziona tag in base a specifici attributi")])])])],-1),eS={__name:"22",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[J2,X2,nS]),_:1},16))}},tS=n("h1",{class:"sezione"},"Selettori Simple",-1),sS={__name:"23",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[tS]),_:1},16))}},oS=n("h1",null,"CSS",-1),aS=n("p",null,"Selettori Simple",-1),iS=n("h3",null,"element selector",-1),lS=n("ul",null,[n("li",null,[s("Il selettore "),n("em",null,[n("strong",null,"element")]),s(" seleziona tag HTML in base al nome")])],-1),rS=n("p",null,[s("Regola CSS: "),n("code",null,"<nome tag> { dichiarazione CSS}")],-1),cS=n("br",null,null,-1),pS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[s("p { /* seleziona tutti i tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(" */")]),s(`
`),n("span",{class:"line"},"    color: green;"),s(`
`),n("span",{class:"line"},"    text-align: center; "),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"},[s("h1 { color: red;} /* seleziona tutti i tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(" */")])])],-1),uS={grid:"~ cols-2 gap-4"},dS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Titolo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo senza stile"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"  Questo \xE8 un paragrafo con uno stile."),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),mS=n("br",null,null,-1),fS=n("h1",{style:{color:"red"}},"Titolo rosso",-1),hS=n("h2",null,"Sottotitolo senza stile",-1),gS=n("p",{style:{color:"green","text-align":"center"}}," Questo \xE8 un paragrafo a cui \xE8 stato applicato uno stile. ",-1),_S={__name:"24",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[oS,aS,iS,lS,rS,cS,b(i,G({},{ranges:[""]}),{default:g(()=>[pS]),_:1},16),n("div",uS,[n("div",null,[b(l,null,{default:g(()=>[b(i,G({},{ranges:[""]}),{default:g(()=>[dS]),_:1},16)]),_:1})]),n("div",null,[b(l,null,{default:g(()=>[mS,fS,hS,gS]),_:1})])])]),_:1},16)}}},vS=n("h1",null,"Esercizio css_05",-1),kS=n("p",null,"CSS element selector",-1),yS=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_04.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_05.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_05.css")]),n("li",null,[s("Definire lo stile esterno in modo che: "),n("ul",null,[n("li",null,[s("tutti i tag "),n("code",null,"h1"),s(" siano Rossi")]),n("li",null,[s("tutti i tag "),n("code",null,"h2"),s(" siano Verdi")]),n("li",null,[s("tutti i tag "),n("code",null,"p"),s(" siano Blue")])])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_05.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_05.css")],-1),bS={__name:"25",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[vS,kS,yS]),_:1},16))}},xS=n("h1",null,"CSS",-1),SS=n("p",null,"Selettori Simple",-1),wS=n("h3",null,"id selector",-1),zS=n("ul",null,[n("li",null,[s("Seleziona un tag con uno specifico valore per l\u2019attributo "),n("em",null,"id")]),n("li",null,[s("Il valore dell\u2019attributo "),n("em",null,"id"),s(" per un tag deve essere "),n("strong",null,"univoco"),s(" all\u2019interno di una pagina e non pu\xF2 iniziare con un numero.")]),n("li",null,"Pertanto questo tipo di selettore \xE8 molto utile per selezionare un singolo elemento all\u2019interno di una pagina.")],-1),$S=n("p",null,[s("Regola CSS: "),n("code",null,"#<valore id> { dichiarazione CSS}")],-1),CS={grid:"~ cols-3 gap-4"},IS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"p { "),s(`
`),n("span",{class:"line"},"    color: green;"),s(`
`),n("span",{class:"line"},"    text-align: left; "),s(`
`),n("span",{class:"line"},[s("}"),n("span",{class:"token comment"},"<!--seleziona tutti i tag p-->")]),s(`
`),n("span",{class:"line"},"#pr1 { "),s(`
`),n("span",{class:"line"},"  color: blue;"),s(`
`),n("span",{class:"line"},"  text-align: right; "),s(`
`),n("span",{class:"line"},"}<!--seleziona il tag con"),s(`
`),n("span",{class:"line"}," id=prg1-->")])],-1),TS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Parag element selector"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Parag element selector"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pr1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Parag id select"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Parag element selector"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),ES=n("p",{style:{color:"green","text-align":"left"}},"Parag element selector",-1),LS=n("p",{style:{color:"green","text-align":"left"}},"Parag element selector",-1),MS=n("p",{style:{color:"blue","text-align":"right"}},"Parag id select",-1),PS=n("p",{style:{color:"green","text-align":"left"}},"Parag element selector",-1),OS={__name:"26",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[xS,SS,wS,zS,$S,n("div",CS,[n("div",null,[b(l,null,{default:g(()=>[b(i,G({},{ranges:[""]}),{default:g(()=>[IS]),_:1},16)]),_:1})]),n("div",null,[b(l,null,{default:g(()=>[b(i,G({},{ranges:[""]}),{default:g(()=>[TS]),_:1},16)]),_:1})]),n("div",null,[b(l,null,{default:g(()=>[ES,LS,MS,PS]),_:1})])])]),_:1},16)}}},AS=n("h1",null,"CSS",-1),RS=n("p",null,"Selettori Simple",-1),FS=n("h3",null,"id selector",-1),DS={class:"grid grid-flow-col auto-cols-max gap-16"},HS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"<!-- seleziona tutti i tag <p> -->")]),s(`
`),n("span",{class:"line"},"p { "),s(`
`),n("span",{class:"line"},"    color: chartreuse;"),s(`
`),n("span",{class:"line"},"    text-align: left; "),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"<!-- seleziona il tag con id=prg1-->"),s()]),s(`
`),n("span",{class:"line"},"#pr1 { "),s(`
`),n("span",{class:"line"},"  color: blue;"),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"<!-- seleziona il tag con id=prg2-->"),s()]),s(`
`),n("span",{class:"line"},"#pr2 { "),s(`
`),n("span",{class:"line"},"  color: red; "),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"<!-- seleziona il tag con id=prg3-->"),s()]),s(`
`),n("span",{class:"line"},"#pr3 { "),s(`
`),n("span",{class:"line"}," color: green; "),s(`
`),n("span",{class:"line"},"}")])],-1),NS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo iniziale"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pr1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo #1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pr2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo #2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pr3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo #3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo finale"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),jS=n("p",{style:{color:"chartreuse"}},"Paragrafo iniziale",-1),qS=n("p",{style:{color:"blue"}},"Paragrafo #1",-1),BS=n("p",{style:{color:"red"}},"Paragrafo #2",-1),WS=n("p",{style:{color:"green"}},"Paragrafo #3",-1),VS=n("p",{style:{color:"chartreuse"}},"Paragrafo finale",-1),KS={__name:"27",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[AS,RS,FS,n("div",DS,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[HS]),_:1},16)]),n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[NS]),_:1},16)]),n("div",null,[b(l,null,{default:g(()=>[jS,qS,BS,WS,VS]),_:1})])])]),_:1},16)}}},US=n("h1",null,"Esercizio css_06",-1),GS=n("p",null,"CSS id selector",-1),YS=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_05.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_06.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_06.css")]),n("li",null,[s("Usando gli id selector, definire lo stile esterno in modo che: "),n("ul",null,[n("li",null,[s("tutti i tag "),n("code",null,"h1"),s(" siano Blue")]),n("li",null,[s("i tag "),n("code",null,"h2"),s(" numero 1,3,5 (partendo dall\u2019alto) siano Rossi")]),n("li",null,[s("i tag "),n("code",null,"h2"),s(" numero 2,4,6 (partendo dall\u2019alto) siano Verdi")]),n("li",null,[s("i tag "),n("code",null,"p"),s(" numero 1,3,5 (partendo dall\u2019alto) siano Grigi")]),n("li",null,[s("i tag "),n("code",null,"p"),s(" numero 2,4,6 (partendo dall\u2019alto) siano Arancioni")])])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_06.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_06.css")],-1),QS={__name:"28",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[US,GS,YS]),_:1},16))}},ZS=n("h1",null,"CSS",-1),JS=n("p",null,"Selettori Simple",-1),XS=n("h3",null,"class selector",-1),nw=n("ul",null,[n("li",null,[s("Seleziona un tag con uno specifico valore per l\u2019attributo "),n("em",null,"class")]),n("li",null,[s("Il valore dell\u2019attributo "),n("em",null,"class"),s(" pu\xF2 essere assegnato ad uno o pi\xF9 tag all\u2019interno di una pagina e non pu\xF2 iniziare con un numero.")]),n("li",null,"Pertanto questo tipo di selettore \xE8 molto utile per selezionare una serie specifica di elementi all\u2019interno di una pagina.")],-1),ew=n("p",null,[s("Regola CSS: "),n("code",null,".<valore class> { dichiarazione CSS}")],-1),tw={class:"grid grid-flow-col auto-cols-max gap-4"},sw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"<!-- seleziona tutti i tag con class=rosso -->")]),s(`
`),n("span",{class:"line"},".rosso { "),s(`
`),n("span",{class:"line"},"  color: red;"),s(`
`),n("span",{class:"line"},"}")])],-1),ow=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo semplice"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rosso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo semplice"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),aw=n("p",null,"Paragrafo semplice",-1),iw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),lw=n("p",null,"Paragrafo semplice",-1),rw={__name:"29",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[ZS,JS,XS,nw,ew,n("div",tw,[n("div",null,[b(l,null,{default:g(()=>[b(i,G({},{ranges:[""]}),{default:g(()=>[sw]),_:1},16)]),_:1})]),n("div",null,[b(l,null,{default:g(()=>[b(i,G({},{ranges:[""]}),{default:g(()=>[ow]),_:1},16)]),_:1})]),n("div",null,[b(l,null,{default:g(()=>[aw,iw,lw]),_:1})])])]),_:1},16)}}},cw=n("h1",null,"CSS",-1),pw=n("p",null,"Selettori Simple",-1),uw=n("h3",null,"class selector",-1),dw={class:"grid grid-flow-col auto-cols-max gap-4"},mw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"<!-- seleziona tutti "),s(`
`),n("span",{class:"line"},[s("i tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(" -->")]),s(`
`),n("span",{class:"line"},"p { "),s(`
`),n("span",{class:"line"},"    color: blue;"),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"<!-- seleziona tutti "),s(`
`),n("span",{class:"line"},"i tag con class=rosso -->"),s(`
`),n("span",{class:"line"},".rosso { "),s(`
`),n("span",{class:"line"},"  color: red;"),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"<!-- seleziona tutti "),s(`
`),n("span",{class:"line"},"i tag con class=verde-->"),s(`
`),n("span",{class:"line"},".verde {"),s(`
`),n("span",{class:"line"},"  color: green;"),s(`
`),n("span",{class:"line"},"}")])],-1),fw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo iniziale"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rosso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("verde"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo verde"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("verde"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo verde"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rosso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo finale"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),hw=n("p",{style:{color:"blue"}},"Paragrafo iniziale",-1),gw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),_w=n("p",{style:{color:"green"}},"Paragrafo verde",-1),vw=n("h2",{style:{color:"green"}},"Sottotitolo verde",-1),kw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),yw=n("p",{style:{color:"blue"}},"Paragrafo finale",-1),bw={__name:"30",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[cw,pw,uw,n("div",dw,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[mw]),_:1},16)]),n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[fw]),_:1},16)]),n("div",null,[b(l,null,{default:g(()=>[hw,gw,_w,vw,kw,yw]),_:1})])])]),_:1},16)}}},xw=n("h1",null,"Esercizio css_07",-1),Sw=n("p",null,"CSS class selector",-1),ww=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_06.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_07.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_07.css")]),n("li",null,[s("Usando i class selector, definire lo stile esterno in modo che: "),n("ul",null,[n("li",null,[s("tutti i tag "),n("code",null,"h1"),s(" siano Blue")]),n("li",null,[s("i tag "),n("code",null,"h2"),s(" numero 1,3,5 (partendo dall\u2019alto) siano Verdi")]),n("li",null,[s("i tag "),n("code",null,"h2"),s(" numero 2,4,6 (partendo dall\u2019alto) siano Rossi")]),n("li",null,[s("i tag "),n("code",null,"p"),s(" numero 1,3,5 (partendo dall\u2019alto) siano Arancioni")]),n("li",null,[s("i tag "),n("code",null,"p"),s(" numero 2,4,6 (partendo dall\u2019alto) siano Grigi")])])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_07.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_07.css")],-1),zw={__name:"31",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[xw,Sw,ww]),_:1},16))}},$w=n("h1",null,"CSS",-1),Cw=n("p",null,"Selettori Simple",-1),Iw=n("h3",null,"grouping selector",-1),Tw=n("ul",null,[n("li",null,"Seleziona una serie di tag in base al loro nome."),n("li",null,[s("In altre parole \xE8 un "),n("em",null,"element selector"),s(" multiplo che permette di applicare una stessa regola CSS a pi\xF9 tag contemporaneamente.")]),n("li",null,"Questo selettore \xE8 molto utile per applicare uno stile comune a pi\xF9 tag in una pagina. Semplifica notevolmente la manutenzione")],-1),Ew=n("p",null,[s("Regola CSS: "),n("code",null,"<nome tag1>, <nome tag2>, .... <nome tagN> { dichiarazione CSS}")],-1),Lw={__name:"32",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[$w,Cw,Iw,Tw,Ew]),_:1},16))}},Mw=n("h1",null,"CSS",-1),Pw=n("p",null,"Selettori Simple",-1),Ow=n("h3",null,"grouping selector",-1),Aw={class:"grid grid-flow-col auto-cols-max gap-8"},Rw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"<!-- applica la regola CSS a tutti i tag "),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(" e "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(" --> ")]),s(`
`),n("span",{class:"line"},"p, h1, h2 {"),s(`
`),n("span",{class:"line"},"  color: red;"),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"<!-- applica la regola CSS a tutti i tag "),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(" e "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(" --> ")]),s(`
`),n("span",{class:"line"},"h1,h2 {"),s(`
`),n("span",{class:"line"},"  text-decoration: underline;"),s(`
`),n("span",{class:"line"},"  text-decoration-color:blue;"),s(`
`),n("span",{class:"line"},"}")])],-1),Fw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h3")]),n("span",{class:"token punctuation"},">")]),s("Sotto sotto titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h3")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])])])],-1),Dw=n("h1",{style:{color:"red","text-decoration":"underline","text-decoration-color":"blue"}},"Titolo",-1),Hw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),Nw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),jw=n("h2",{style:{color:"red","text-decoration":"underline","text-decoration-color":"blue"}},"Sottotitolo",-1),qw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),Bw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),Ww=n("h3",null,"Sotto sotto titolo",-1),Vw=n("h2",{style:{color:"red","text-decoration":"underline","text-decoration-color":"blue"}},"Sottotitolo",-1),Kw={__name:"33",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[Mw,Pw,Ow,n("div",Aw,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[Rw]),_:1},16)]),n("div",null,[b(l,null,{default:g(()=>[b(i,G({},{ranges:[""]}),{default:g(()=>[Fw]),_:1},16)]),_:1})]),n("div",null,[b(l,null,{default:g(()=>[Dw,Hw,Nw,jw,qw,Bw,Ww,Vw]),_:1})])])]),_:1},16)}}},Uw=n("h1",null,"Esercizio css_08",-1),Gw=n("p",null,"CSS simple selector",-1),Yw=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_07.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_08.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_08.css")]),n("li",null,"definire lo stile per tutti gli heading h1, he e h3 con colore rosso e sottolineatura grigia"),n("li",null,"definire lo stile per tutti i paragrafi con colore blue e allineamento del testo a sinistra"),n("li",null,"definire lo stile per il terzo heading h2 con colore verde"),n("li",null,"definire lo stile per il settimo paragrafo con colore rosso e allineamento del testo a destra"),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<hr>"),s(" pari con colore nero e spessore 10px (contando dal primo tag hr)")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<hr>"),s(" dispari con colore rosso e spessore 3px (contando dal primo tag hr)")]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_08.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_08.css")],-1),Qw={__name:"34",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[Uw,Gw,Yw]),_:1},16))}},Zw=n("h1",{class:"sezione"},"Selettori Combinator",-1),Jw={__name:"35",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[Zw]),_:1},16))}},Xw="/TPSI/4/css/assets/css_02.5163b853.jpg",n3=n("h1",null,"Document Object Model",-1),e3=n("p",null,"DOM",-1),t3=n("ul",null,[n("li",null,[s("Ogni tag e elemento HTML \xE8 un "),n("strong",null,"oggetto")]),n("li",null,"Quando una pagina web \xE8 caricata, il browser crea una rappresentazione ad albero dei suoi elementi."),n("li",null,[s("Questo albero si chiama "),n("em",null,[n("strong",null,"Document Object Model")]),s(" o "),n("em",null,[n("strong",null,"DOM")]),s(".")])],-1),s3=n("p",null,[n("code",null,"il DOM \xE8 una rappresentazione ad albero degli oggetti della pagina HTML")],-1),o3=n("img",{src:Xw,width:"500"},null,-1),a3={__name:"36",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[n3,e3,t3,s3,b(i,null,{default:g(()=>[o3]),_:1})]),_:1},16)}}},i3=n("h1",null,"Document Object Model",-1),l3=n("p",null,"DOM",-1),r3=n("ul",null,[n("li",null,[s("Il DOM si manipola atraverso l\u2019oggetto pi\xF9 di alto livello "),n("strong",null,"Document")]),n("li",null,[n("code",null,"html"),s(" \xE8 il Root element del DOM")]),n("li",null,[s("La manipolazione del DOM da parte di JavaScript \xE8 alla base del moderno paradigma di sviluppo web, infatti: "),n("ul",null,[n("li",null,"JS pu\xF2 navigare nel DOM ed accedere a tutti gli oggetti"),n("li",null,"JS pu\xF2 manipolare tutti i tag ed attributi HTML di una pagina"),n("li",null,"JS pu\xF2 aggiungere o rimuovere elementi HTML ad una pagina"),n("li",null,"JS pu\xF2 modificare tutti gli stili di una pagina"),n("li",null,"JS pu\xF2 gestire tutti gli eventi di una pagina")])])],-1),c3={__name:"37",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[i3,l3,r3]),_:1},16))}},p3="/TPSI/4/css/assets/css_02a.45aff8c5.png",u3=n("h1",null,"Document Object Model",-1),d3=n("p",null,"DOM",-1),m3=n("ul",null,[n("li",null,[s("Per accedere al DOM di una pagina attraverso Chrome basta selezionare la pagine e dal men\xF9 contestuale (right-click) selezionare "),n("strong",null,"Ispeziona")])],-1),f3=n("br",null,null,-1),h3=n("img",{src:p3,width:"500"},null,-1),g3={__name:"38",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[u3,d3,m3,f3,b(i,null,{default:g(()=>[h3]),_:1})]),_:1},16)}}},_3="/TPSI/4/css/assets/css_02b.764deb5b.png",v3=n("h1",null,"Document Object Model",-1),k3=n("p",null,"DOM",-1),y3=n("img",{src:_3,width:"600"},null,-1),b3={__name:"39",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[v3,k3,b(i,null,{default:g(()=>[y3]),_:1})]),_:1},16)}}},x3="/TPSI/4/css/assets/css_02c.4d1742bb.png",S3="/TPSI/4/css/assets/css_02d.4c9c32c1.png",w3=n("h1",null,"Document Object Model",-1),z3=n("p",null,"DOM",-1),$3=n("ul",null,[n("li",null,"In questa finestra \xE8 possibile navigare tutto il DOM della pagina"),n("li",null,"E\u2019 possibile vederne l\u2019oragnizzazione gerarchica"),n("li",null,"E\u2019 possibile modificare qualsiasi oggetto vedendo immediatamente il risultato")],-1),C3=n("br",null,null,-1),I3=n("table",null,[n("tr",null,[n("td",null,[n("img",{src:x3,width:"500"})]),n("td",null,[n("img",{src:S3,width:"500"})])])],-1),T3={__name:"40",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[w3,z3,$3,C3,I3]),_:1},16))}},E3="/TPSI/4/css/assets/css_02e.2f978faf.png",L3="/TPSI/4/css/assets/css_02f.e5ef202c.png",M3=n("h1",null,"Document Object Model",-1),P3=n("p",null,"DOM",-1),O3=n("br",null,null,-1),A3=n("table",null,[n("tr",null,[n("td",null,[n("img",{src:E3,width:"500"})]),n("td",null,[n("img",{src:L3,width:"500"})])])],-1),R3={__name:"41",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[M3,P3,O3,A3]),_:1},16))}},F3="/TPSI/4/css/assets/css_02g.e81604b5.png",D3=n("h1",null,"Document Object Model",-1),H3=n("p",null,"DOM",-1),N3=n("ul",null,[n("li",null,[s("Un altro strumento che pu\xF2 essere utile \xE8 "),n("a",{href:"http://software.hixie.ch/utilities/js/live-dom-viewer/",target:"_blank",rel:"noopener"},"Live DOM Viewer")])],-1),j3=n("img",{src:F3,width:"600"},null,-1),q3={__name:"42",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[D3,H3,N3,b(i,null,{default:g(()=>[j3]),_:1})]),_:1},16)}}},B3=n("h1",null,"Esercizio css_09",-1),W3=n("p",null,"DOM",-1),V3=n("ol",null,[n("li",null,[s("Analizzare il DOM della pagina "),n("em",null,"|cognome|_esercizio_css_08.html"),s(" con: "),n("ul",null,[n("li",null,"Google Chrome Developer Tools"),n("li",null,"Live DOM Viewer")])])],-1),K3={__name:"43",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[B3,W3,V3]),_:1},16))}},U3=n("h1",null,"CSS",-1),G3=n("p",null,"Selettori Combinator",-1),Y3=n("h3",null,"child selector",-1),Q3=n("ul",null,[n("li",null,[s("Seleziona tutti i tag che sono "),n("strong",null,'"figli diretti"'),s(" di uno specifico tag.")])],-1),Z3=n("p",null,[s("Regola CSS: "),n("code",null,"<nome tag padre> > <nome tag figlio> { dichiarazione CSS}")],-1),J3={class:"grid grid-flow-col auto-cols-max gap-4"},X3=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("!--")]),s(),n("span",{class:"token attr-name"},"seleziona"),s(),n("span",{class:"token attr-name"},"tutti"),s(),n("span",{class:"token attr-name"},"i"),s(),n("span",{class:"token attr-name"},"tag"),s(),n("span",{class:"token attr-name"},"<p"),n("span",{class:"token punctuation"},">")]),s()]),s(`
`),n("span",{class:"line"},[s("  figli di un "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(" -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"div > p {"),s(`
`),n("span",{class:"line"},"  background-color: yellow;"),s(`
`),n("span",{class:"line"},"}")])],-1),nz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"<!-- questo <p> \xE8 figlio di <div> -->")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo figlio di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token comment"},"<!-- questo <p> \xE8 figlio di <span> -->")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo parente di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo figlio di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),ez=n("h2",null,"Sottotitolo",-1),tz=n("p",null,"Paragrafo singolo",-1),sz=n("div",null,[K(" questo <p> \xE8 figlio di <div> "),n("p",{style:{"background-color":"yellow"}},"Paragrafo figlio di div"),n("span",null,[K(" questo <p> \xE8 figlio di <span> "),n("p",null,"Paragrafo parente di div")]),n("p",{style:{"background-color":"yellow"}},"Paragrafo figlio di div")],-1),oz=n("p",null,"Paragrafo singolo",-1),az={__name:"44",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[U3,G3,Y3,Q3,Z3,n("div",J3,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[X3]),_:1},16)]),n("div",null,[b(l,null,{default:g(()=>[b(i,G({},{ranges:[""]}),{default:g(()=>[nz]),_:1},16)]),_:1})]),n("div",null,[b(l,null,{default:g(()=>[ez,tz,sz,oz]),_:1})])])]),_:1},16)}}},iz="/TPSI/4/css/assets/css_03.drawio.be0a5673.svg",lz=n("h1",null,"CSS",-1),rz=n("p",null,"Selettori Combinator",-1),cz=n("h3",null,"child selector",-1),pz={grid:"~ cols-2 gap-4"},uz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"<!-- questo <p> \xE8 figlio di <div> -->")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo figlio di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token comment"},"<!-- questo <p> \xE8 figlio di <span> -->")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo parente di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo figlio di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),dz=n("img",{src:iz,width:"300"},null,-1),mz={__name:"45",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=qn("center"),r=Zn;return k(),z(O,T(I(t)),{default:g(()=>[lz,rz,cz,n("div",pz,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[uz]),_:1},16)]),n("div",null,[b(r,null,{default:g(()=>[b(l,null,{default:g(()=>[dz]),_:1})]),_:1})])])]),_:1},16)}}},fz=n("h1",null,"Esercizio css_10",-1),hz=n("p",null,"CSS child selector",-1),gz=n("ol",null,[n("li",null,[s("Dato il file "),n("a",{href:"https://profmancusoa.github.io/TPSI/support/esercizio_css_10.html",target:"_blank",rel:"noopener"},"esercizio_css_10.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_10.css")]),n("li",null,"Definire lo stile per tutti i tag span figli diretti di h1 in modo che siano di colore blue"),n("li",null,"Definire lo stile per tutti i tag span figli diretti di h2 in modo che siano di colore rossi"),n("li",null,"Definire lo stile per tutti i tag span figli diretti di un paragrafo in modo che siano di colore viola"),n("li",null,"Definire lo stile per tutti i tag span nipoti di div e figli di p in modo che siano di colore verde scuro"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_10.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_10.css")],-1),_z={__name:"46",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[fz,hz,gz]),_:1},16))}},vz=n("h1",null,"CSS",-1),kz=n("p",null,"Selettori Combinator",-1),yz=n("h3",null,"descendant selector",-1),bz=n("ul",null,[n("li",null,[s("Seleziona tutti i tag che sono "),n("strong",null,'"discendenti"'),s(" di uno specifico tag.")])],-1),xz=n("p",null,[s("Regola CSS: "),n("code",null,"<nome tag padre> <nome tag discendente> { dichiarazione CSS}")],-1),Sz={class:"grid grid-flow-col auto-cols-max gap-4"},wz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("!--")]),s(),n("span",{class:"token attr-name"},"seleziona"),s(),n("span",{class:"token attr-name"},"tutti"),s(),n("span",{class:"token attr-name"},"i"),s(),n("span",{class:"token attr-name"},"tag"),s(),n("span",{class:"token attr-name"},"<p"),n("span",{class:"token punctuation"},">")]),s()]),s(`
`),n("span",{class:"line"},[s("  discendenti di un "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(" -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"div  p {"),s(`
`),n("span",{class:"line"},"  background-color: yellow;"),s(`
`),n("span",{class:"line"},"}")])],-1),zz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"<!-- questo <p> \xE8 figlio di <div> -->")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo figlio di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("!--")]),s(),n("span",{class:"token attr-name"},"questo"),s(),n("span",{class:"token attr-name"},"<p"),n("span",{class:"token punctuation"},">")]),s(" \xE8 figlio di "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s()]),s(`
`),n("span",{class:"line"},[s("      e discendente di "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("-->")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo parente di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo figlio di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),$z=n("h2",null,"Sottotitolo",-1),Cz=n("p",null,"Paragrafo singolo",-1),Iz=n("div",null,[n("p",{style:{"background-color":"yellow"}},"Paragrafo figlio di div"),n("span",null,[n("p",{style:{"background-color":"yellow"}},"Paragrafo parente di div")]),n("p",{style:{"background-color":"yellow"}},"Paragrafo figlio di div")],-1),Tz=n("p",null,"Paragrafo singolo",-1),Ez={__name:"47",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[vz,kz,yz,bz,xz,n("div",Sz,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[wz]),_:1},16)]),n("div",null,[b(l,null,{default:g(()=>[b(i,G({},{ranges:[""]}),{default:g(()=>[zz]),_:1},16)]),_:1})]),n("div",null,[b(l,null,{default:g(()=>[$z,Cz,Iz,Tz]),_:1})])])]),_:1},16)}}},Lz="/TPSI/4/css/assets/css_04.drawio.25e3f00d.svg",Mz=n("h1",null,"CSS",-1),Pz=n("p",null,"Selettori Combinator",-1),Oz=n("h3",null,"descendant selector",-1),Az={grid:"~ cols-2 gap-4"},Rz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"<!-- questo <p> \xE8 figlio di <div> -->")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo figlio di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("!--")]),s(),n("span",{class:"token attr-name"},"questo"),s(),n("span",{class:"token attr-name"},"<p"),n("span",{class:"token punctuation"},">")]),s(" \xE8 figlio di "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s()]),s(`
`),n("span",{class:"line"},[s("      e discendente di "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("-->")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo parente di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo figlio di div"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),Fz=n("img",{src:Lz,width:"300"},null,-1),Dz={__name:"48",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=qn("center"),r=Zn;return k(),z(O,T(I(t)),{default:g(()=>[Mz,Pz,Oz,n("div",Az,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[Rz]),_:1},16)]),n("div",null,[b(r,null,{default:g(()=>[b(l,null,{default:g(()=>[Fz]),_:1})]),_:1})])])]),_:1},16)}}},Hz=n("h1",null,"Esercizio css_11",-1),Nz=n("p",null,"CSS descendant selector",-1),jz=n("ol",null,[n("li",null,[s("Dato il file "),n("a",{href:"https://profmancusoa.github.io/TPSI/support/esercizio_css_11.html",target:"_blank",rel:"noopener"},"esercizio_css_11.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_11.css")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<mark>"),s(" che sono figli di "),n("code",null,"<p>"),s(" con colore verde")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<b>"),s(" che sono figli di "),n("code",null,"<p>"),s(" con colore giallo e sfondo nero")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<em>"),s(" che sono discendenti di "),n("code",null,"<div>"),s(" con rosso su sfondo giallo")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<span>"),s(" che sono discendenti di "),n("code",null,"<div>"),s(" con sfondo giallo e colore nero")]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_11.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_11.css")],-1),qz={__name:"49",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[Hz,Nz,jz]),_:1},16))}},Bz=n("h1",{class:"sezione"},"Selettori Pseudo-Class",-1),Wz={__name:"50",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[Bz]),_:1},16))}};const Is=e=>(Cn("data-v-65e96966"),e=e(),In(),e),Vz=Is(()=>n("h1",null,"CSS",-1)),Kz=Is(()=>n("p",null,"Selettori Pseudo-Class",-1)),Uz=Is(()=>n("ul",null,[n("li",null,[s("Un selettore "),n("em",null,[n("strong",null,"Pseudo Class")]),s(" \xE8 utilizzato per applicare una regola CSS in funzione dello stato di un tag.")]),n("li",null,[s("Per esempio, pu\xF2 essere usato per: "),n("ul",null,[n("li",null,[s("Definire lo stile di un elemento quando l\u2019utente ci passa sopra con il mouse ("),n("em",null,"mouse hover"),s(")")]),n("li",null,"Definire stili diversi per un link gi\xE0 visitato"),n("li",null,[s("Definire lo stile per un elemento che ha ricevuto il focus ("),n("em",null,"mouse e tastiera associati all\u2019elemento"),s(")")])])])],-1)),Gz=Is(()=>n("p",null,[s("Regola CSS: "),n("code",null,"<selettore>:<pseudo classe> { dichiarazione CSS}")],-1)),Yz={class:"grid grid-flow-col auto-cols-max gap-8"},Qz=Is(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[s("a:link { color: blue; } "),n("span",{class:"token comment"},"<!-- unvisited link -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("a:visited { color: green; } "),n("span",{class:"token comment"},"<!-- visited link -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("a:hover { color: red; background: yellow;} "),n("span",{class:"token comment"},"<!-- mouse over link -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("a:active { color: grey; } "),n("span",{class:"token comment"},"<!--  selected link -->")])])],-1)),Zz=Is(()=>n("div",null,[n("a",{href:"https://www.linux.it/linux",target:"_blank"},"Link ad una risorsa esterna")],-1)),Jz={__name:"51",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[Vz,Kz,Uz,Gz,n("div",Yz,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[Qz]),_:1},16)]),Zz])]),_:1},16)}}},Xz=Sn(Jz,[["__scopeId","data-v-65e96966"]]);const $t=e=>(Cn("data-v-21b7f755"),e=e(),In(),e),n$=$t(()=>n("h1",null,"CSS",-1)),e$=$t(()=>n("p",null,"Selettori Pseudo-Class",-1)),t$=$t(()=>n("h3",null,"pseudo class",-1)),s$={class:"grid grid-flow-col auto-cols-max gap-8"},o$=$t(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"div:hover {"),s(`
`),n("span",{class:"line"},"  background-color: blue;"),s(`
`),n("span",{class:"line"},"  color:white;"),s(`
`),n("span",{class:"line"},"  border: 5px dashed red;"),s(`
`),n("span",{class:"line"},"}")])],-1)),a$=$t(()=>n("div",null,[n("div",{id:"id1"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I ")],-1)),i$=$t(()=>n("p",null,[n("br"),n("br")],-1)),l$={class:"grid grid-flow-col auto-cols-max gap-8"},r$=$t(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"input:focus {"),s(`
`),n("span",{class:"line"},"  background: #D3D3D3;"),s(`
`),n("span",{class:"line"},"  color: blue;"),s(`
`),n("span",{class:"line"},"}")])],-1)),c$=$t(()=>n("div",null,[n("form",null,[n("label",{for:"fname"},"\xA0\xA0\xA0\xA0\xA0\xA0Nome:\xA0\xA0"),n("input",{type:"text",id:"fname",name:"fname",placeholder:"Inserisci il tuo nome"}),n("br"),n("br"),n("label",{for:"lname"},"Cognome:\xA0\xA0"),n("input",{type:"text",id:"lname",name:"lname",placeholder:"Inserisci il tuo cognome"}),n("br"),n("br")])],-1)),p$={__name:"52",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[n$,e$,t$,n("div",s$,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[o$]),_:1},16)]),a$]),i$,n("div",l$,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[r$]),_:1},16)]),c$])]),_:1},16)}}},u$=Sn(p$,[["__scopeId","data-v-21b7f755"]]);const ee=e=>(Cn("data-v-07e4e241"),e=e(),In(),e),d$=ee(()=>n("h1",null,"CSS",-1)),m$=ee(()=>n("p",null,"Selettori Pseudo-Class",-1)),f$=ee(()=>n("h3",null,"first child",-1)),h$=ee(()=>n("ul",null,[n("li",null,[s("La pseudo classe "),n("code",null,"first-child"),s(' seleziona solo il primo dei tag "figlii" di un altro elemento')])],-1)),g$=ee(()=>n("p",null,[s("Regola CSS: "),n("code",null,"<selettore>:first-child { dichiarazione CSS}")],-1)),_$={grid:"~ cols-3 gap-4"},v$=ee(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"h1 {"),s(`
`),n("span",{class:"line"},"  color: red;"),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"h1:first-child { "),s(`
`),n("span",{class:"line"},"  color: yellow; "),s(`
`),n("span",{class:"line"},"  background: grey;"),s(`
`),n("span",{class:"line"},"}")])],-1)),k$=ee(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Primo titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Secondo titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Terzo titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Quarto titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Quitno titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])],-1)),y$=ee(()=>n("h4",null,"Primo titolo",-1)),b$=ee(()=>n("br",null,null,-1)),x$=ee(()=>n("h4",null,"Secondo titolo",-1)),S$=ee(()=>n("br",null,null,-1)),w$=ee(()=>n("h4",null,"Terzo titolo",-1)),z$=ee(()=>n("br",null,null,-1)),$$=ee(()=>n("h4",null,"Quarto titolo",-1)),C$=ee(()=>n("br",null,null,-1)),I$=ee(()=>n("h4",null,"Quitno titolo",-1)),T$=ee(()=>n("br",null,null,-1)),E$={__name:"53",setup(e){const t={};return x($),(o,a)=>{const i=hn,l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[d$,m$,f$,h$,g$,n("div",_$,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[v$]),_:1},16)]),n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[k$]),_:1},16)]),n("div",null,[b(l,null,{default:g(()=>[y$,b$,x$,S$,w$,z$,$$,C$,I$,T$]),_:1})])])]),_:1},16)}}},L$=Sn(E$,[["__scopeId","data-v-07e4e241"]]),M$=n("h1",null,"Esercizio css_12",-1),P$=n("p",null,"CSS pseudo-class selector",-1),O$=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_11.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_12.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_12.css")]),n("li",null,"definire lo stile per tutte le ancore in modo che i link normalmente siano di colore blu, quando visitati di colore rosso con sfondo giallo, e quando l\u2019utente ci passa sopra con il mouse siano di colore verde"),n("li",null,"definire lo stile per il primo titolo di livello 1 in modo che siano sottolineati e di colore blue"),n("li",null,"definire lo stile per il primo titolo di livello 2 in modo che siano di colore verde"),n("li",null,"definire lo stile per il primo paragrafo in modo che siano colore rosso ed il testo sia allineato a sinistra"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_12.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_12.css")],-1),A$={__name:"54",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[M$,P$,O$]),_:1},16))}},R$=n("h1",{class:"sezione"},[n("span",{style:{color:"green"}},"Un Web a Colori")],-1),F$={__name:"55",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[R$]),_:1},16))}},D$=n("h1",null,"CSS",-1),H$=n("p",null,"Colori",-1),N$=n("ul",null,[n("li",null,[n("p",null,"In CSS ci sono vari modi per specificare un colore in una propriet\xE0:"),n("ol",null,[n("li",null,[s("Specificando il nome di uno dei "),n("a",{href:"https://www.w3schools.com/colors/colors_names.asp",target:"_blank",rel:"noopener"},"140 colori supportati"),s(" (Red, LightGray, Orange, \u2026)")]),n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"RGB")]),s(" (Red Green Blue) nella forma "),n("code",null,"rgb(240, 124, 22)")]),n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"HEX")]),s(" nel forma "),n("code",null,"#RRGGBB"),s(" - "),n("em",null,[n("strong",null,"#F1A3C4")])]),n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"HSL")]),s(" nella forma "),n("code",null,"hsl(5, 30%, 54%)")])])]),n("li",null,[n("p",null,[s("Inoltre \xE8 possibile anche specificare un parametro di trasparenza ("),n("em",null,[n("strong",null,"alpha")]),s(") compreso tra 0 e 1")]),n("ol",{start:"5"},[n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"RGBA")]),s(" (Red Green Blue Alpga) nella forma "),n("code",null,"rgba(240, 124, 22, 0.5)")]),n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"HSLA")]),s(" nella forma "),n("code",null,"hsla(5, 30%, 54%, 0.81)")])])])],-1),j$={__name:"56",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[D$,H$,N$]),_:1},16))}};const Ha=e=>(Cn("data-v-59ae0600"),e=e(),In(),e),q$=Ha(()=>n("h1",null,"CSS",-1)),B$=Ha(()=>n("p",null,"Colori",-1)),W$={class:"grid grid-flow-col auto-cols-max gap-8"},V$=Ha(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"#id1"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#id2"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #56d3f8"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#id3"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("23"),n("span",{class:"token punctuation"},","),s(" 182"),n("span",{class:"token punctuation"},","),s(" 85"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#id4"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("23"),n("span",{class:"token punctuation"},","),s(" 182"),n("span",{class:"token punctuation"},","),s(" 85"),n("span",{class:"token punctuation"},","),s(" 0.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#id5"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"hsl"),n("span",{class:"token punctuation"},"("),s("249"),n("span",{class:"token punctuation"},","),s(" 73%"),n("span",{class:"token punctuation"},","),s(" 40%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#id6"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"hsla"),n("span",{class:"token punctuation"},"("),s("249"),n("span",{class:"token punctuation"},","),s(" 73%"),n("span",{class:"token punctuation"},","),s(" 40%"),n("span",{class:"token punctuation"},","),s(" 0.75"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")])])],-1)),K$=Ha(()=>n("div",null,[n("div",{id:"id1"},"red"),n("br"),n("div",{id:"id2"},"#56d3f8"),n("br"),n("div",{id:"id3"},"rgb(23, 182, 85)"),n("br"),n("div",{id:"id4"},"rgba(23, 182, 85, 0.5)"),n("br"),n("div",{id:"id5"},"hsl(249, 73%, 40%);"),n("br"),n("div",{id:"id6"},"hsla(249, 73%, 40%, 0.75)"),n("br")],-1)),U$={__name:"57",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[q$,B$,n("div",W$,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[V$]),_:1},16)]),K$])]),_:1},16)}}},G$=Sn(U$,[["__scopeId","data-v-59ae0600"]]),Y$=n("h1",null,"CSS",-1),Q$=n("p",null,"Colori",-1),Z$=n("ul",null,[n("li",null,"Un problema principale (almeno per gli informatici :) ) \xE8 l\u2019accostamento dei colori"),n("li",null,"Un sito risulta gradevole se i colori sono armoniosi e scelti secondo regole precise"),n("li",null,"Fortunatamente per realizzare le nostre pagine Web possiamo ricorrete ad una moltitudine di strumenti disponibili sul web in forma gratuita"),n("li",null,[s("Questi strumenti prendono il nome di "),n("code",null,"palette generator"),s(" o "),n("code",null,"web palette generator")]),n("li",null,"Facendo una ricerca su google si trovano circa 6.700.000 risultati"),n("li",null,"Pertanto ognuno utilizzi il tool a lui pi\xF9 congegnale"),n("li",null,[s("Alcuni interessanti sono: "),n("ul",null,[n("li",null,[n("a",{href:"https://coolors.co/",target:"_blank",rel:"noopener"},"https://coolors.co/")]),n("li",null,[n("a",{href:"https://color.adobe.com/it/create/color-wheel",target:"_blank",rel:"noopener"},"https://color.adobe.com/it/create/color-wheel")]),n("li",null,[n("a",{href:"http://colormind.io/",target:"_blank",rel:"noopener"},"http://colormind.io/")]),n("li",null,[n("a",{href:"https://palettegenerator.com/",target:"_blank",rel:"noopener"},"https://palettegenerator.com/")]),n("li",null,[n("a",{href:"https://www.designbombs.com/best-online-color-palette-generators/",target:"_blank",rel:"noopener"},"https://www.designbombs.com/best-online-color-palette-generators/")])])])],-1),J$={__name:"58",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[Y$,Q$,Z$]),_:1},16))}},X$=n("h1",null,"Esercizio css_13",-1),nC=n("p",null,"Colori",-1),eC=n("ol",null,[n("li",null,[s("Creare un nuovo file e nominarlo "),n("em",null,"|cognome|_esercizio_css_13.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_13.css")]),n("li",null,"Creare una scacchiera 4 righe x 3 colonne"),n("li",null,[s("Con l\u2019aiuto di un tool di palette generation: "),n("ol",null,[n("li",null,"colorare lo sfondo di 2 celle specificando il nome del colore"),n("li",null,"colorare lo sfondo di 2 celle specificando il codice HEX del colore"),n("li",null,"colorare lo sfondo di 2 celle usando la funzione rgb"),n("li",null,"colorare lo sfondo di 2 celle usando la funzione rgba ed impostare la trasparenza"),n("li",null,"colorare lo sfondo di 2 celle usando la funzione hls"),n("li",null,"colorare lo sfondo di 2 celle usando la funzione hlsa ed impostare la trasparenza")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_13.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_13.css")],-1),tC={__name:"59",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[X$,nC,eC]),_:1},16))}},sC=n("h1",{class:"sezione"},"Larghezza e Altezza degli elementi Web",-1),oC={__name:"60",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[sC]),_:1},16))}},aC=n("h1",null,"CSS",-1),iC=n("p",null,"Larghezza ed Altezza",-1),lC=n("ul",null,[n("li",null,[s("Due propriet\xE0 molto importanti sono "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"width")]),s(": definisce la larghezza di un elemento HTML all\u2019interno della pagina")]),n("li",null,[n("em",null,[n("strong",null,"height")]),s(": definisce l\u2019altezza di un elemento HTML all\u2019interno della pagina")])])]),n("li",null,[s("Queste misure possono essere espresse in due modi: "),n("ol",null,[n("li",null,[n("em",null,[n("strong",null,"valore aasoluto")]),s(" : specificando il valore in pixel (px)")]),n("li",null,[n("em",null,[n("strong",null,"valore relativo")]),s(" : specificando un valore percentuale (%) rispetto all\u2019elemento padre")])])]),n("li",null,[s("Per default "),n("em",null,"width"),s(" e "),n("em",null,"height"),s(" sono impostate ad "),n("code",null,"auto"),s(" e pertanto il browser calcola le dimensioni minime per visualizzare l\u2019elemento.")])],-1),rC={__name:"61",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[aC,iC,lC]),_:1},16))}};const $o=e=>(Cn("data-v-d4279ca0"),e=e(),In(),e),cC=$o(()=>n("h1",null,"CSS",-1)),pC=$o(()=>n("p",null,"Larghezza ed Altezza",-1)),uC={class:"grid grid-flow-col auto-cols-max gap-8"},dC=$o(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),mC=$o(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".parent"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},"#child1"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 50%"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 50%"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},"#child2"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" yellow"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 50%"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 50%"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),fC=$o(()=>n("div",null,[n("div",{class:"parent"}),n("br"),n("br"),n("br"),n("br"),n("div",{class:"parent"},[n("div",{id:"child1"},[n("div",{id:"child2"})])])],-1)),hC={__name:"62",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[cC,pC,n("div",uC,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[dC]),_:1},16)]),n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[mC]),_:1},16)]),fC])]),_:1},16)}}},gC=Sn(hC,[["__scopeId","data-v-d4279ca0"]]),_C=n("h1",null,"Esercizio css_14",-1),vC=n("p",null,"Colori",-1),kC=n("ol",null,[n("li",null,[s("Creare un nuovo file e nominarlo "),n("em",null,"|cognome|_esercizio_css_14.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_14.css")]),n("li",null,"Creare un rettangolo con sfondo rosso con larghezza 400px ed altezza 200px"),n("li",null,"Creare quattro rettangoli con sfondo viola con larghezza rispettivamente pari a 1/4, 2/4, 3/4 e 4/4 della larghezza della pagine e altezza pari a 150 px"),n("li",null,"Creare quattro rettangoli con sfondo verde e trasparenza al 65% con larghezza rispettivamente pari a 1/8, 3/6, 5/8 e 2/9 della larghezza della pagine e altezza pari a 221 px"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_14.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_14.css")],-1),yC={__name:"63",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[_C,vC,kC]),_:1},16))}},bC=n("h1",{class:"sezione"},[n("div",{style:{color:"rgb(178,28,128)","background-image":"linear-gradient(to right top, #9198a3, #7f91b9, #7588ce, #797bde, #8a69e7)"}},"Lo sfondo degli elementi")],-1),xC={__name:"64",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[bC]),_:1},16))}},SC=n("h1",null,"CSS",-1),wC=n("p",null,"Background",-1),zC=n("ul",null,[n("li",null,[s("CSS definisce varie propriet\xE0 per definire il background di un elemento HTML: "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"background-color")]),s(" : speficica il colore dello sfondo")]),n("li",null,[n("em",null,[n("strong",null,"background-image")]),s(" : imposta un immagine come sfondo di un elemento")]),n("li",null,[n("em",null,[n("strong",null,"background-repeat")]),s(" : definisce il verso di ripetizione dell\u2019immagine di sfondo")]),n("li",null,[n("em",null,[n("strong",null,"background-attachment")]),s(" : specifica se l\u2019immagine si sfondo rimarr\xE0 fissa o far\xE0 scroll")]),n("li",null,[n("em",null,[n("strong",null,"background-position")]),s(" : definisce la posizione dell\u2019immagine di sfondo")])])])],-1),$C={__name:"65",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[SC,wC,zC]),_:1},16))}};const Co=e=>(Cn("data-v-fc19e4eb"),e=e(),In(),e),CC=Co(()=>n("h1",null,"CSS",-1)),IC=Co(()=>n("p",null,"background-image",-1)),TC={class:"grid grid-flow-col auto-cols-max gap-8"},EC=Co(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bg1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bg2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"  Questo \xE8 un "),s(`
`),n("span",{class:"line"},"  paragrafo con "),s(`
`),n("span",{class:"line"},"  del testo"),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bg3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),LC=Co(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg1"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string url"},'"/media/css_05.png"'),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 250px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg2"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string url"},'"/media/css_06.jpg"'),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},"#bg3"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string url"},'"/media/css_07.jpg"'),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 250px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),MC=Co(()=>n("div",null,[n("div",{class:"bg1"}),n("br"),n("br"),n("p",{class:"bg2"},"Questo \xE8 un paragrafo con del testo"),n("br"),n("br"),n("div",{id:"bg3"})],-1)),PC={__name:"66",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[CC,IC,n("div",TC,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[EC]),_:1},16)]),n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[LC]),_:1},16)]),MC])]),_:1},16)}}},OC=Sn(PC,[["__scopeId","data-v-fc19e4eb"]]);const Io=e=>(Cn("data-v-1513b6d2"),e=e(),In(),e),AC=Io(()=>n("h1",null,"CSS",-1)),RC=Io(()=>n("p",null,"background-repeat",-1)),FC={class:"grid grid-flow-col auto-cols-max gap-8"},DC=Io(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bg1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bg2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bg3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bg4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),HC=Io(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg1, .bg2, .bg3, .bg4"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string url"},'"/media/css_08.jpg"'),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 250px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 90px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid black"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg1"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-repeat"),n("span",{class:"token punctuation"},":"),s(" repeat"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},"  "),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg2"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-repeat"),n("span",{class:"token punctuation"},":"),s(" no-repeat"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},"  "),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg3"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-repeat"),n("span",{class:"token punctuation"},":"),s(" repeat-x"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},"  "),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg4"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-repeat"),n("span",{class:"token punctuation"},":"),s(" repeat-y"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")])])],-1)),NC=Io(()=>n("div",null,[n("div",{class:"bg1"}),n("br"),n("div",{class:"bg2"}),n("br"),n("div",{class:"bg3"}),n("br"),n("div",{class:"bg4"}),n("br")],-1)),jC={__name:"67",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[AC,RC,n("div",FC,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[DC]),_:1},16)]),n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[HC]),_:1},16)]),NC])]),_:1},16)}}},qC=Sn(jC,[["__scopeId","data-v-1513b6d2"]]),BC=n("h1",null,"Esercizio css_15",-1),WC=n("p",null,"background-repeat",-1),VC=n("ol",null,[n("li",null,[s("Creare ed editare i file "),n("em",null,"|cognome|_esercizio_css_15.html"),s(" e "),n("em",null,"|cognome|_esercizio_css_15.css"),s(".")]),n("li",null,[s("Creare una pagina contenente: "),n("ol",null,[n("li",null,"2xDIV con un immagine di background con path relativo e con dimesioni assolute"),n("li",null,"2xDIV con un immagine di background con path assoluto e con dimesioni relative"),n("li",null,"2xDIV con un immagine di background che usi la propriet\xE0 del background repeat"),n("li",null,"2xDIV con un immagine di background che usi la propriet\xE0 del background no-repeat"),n("li",null,"2xDIV con un immagine di background che usi la propriet\xE0 del background repeat-x"),n("li",null,"2xDIV con un immagine di background che usi la propriet\xE0 del background repeat-y")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_15.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_15.css")],-1),KC={__name:"68",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[BC,WC,VC]),_:1},16))}},UC=n("h1",{class:"sezione"},"Attorno al contenuto: Box Model",-1),GC={__name:"69",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[UC]),_:1},16))}},YC="/TPSI/4/css/assets/css_09.034d1fc7.jpg",QC=n("h1",null,"CSS",-1),ZC=n("p",null,"Box model",-1),JC=n("ul",null,[n("li",null,[s('Ogni elemento HTML pu\xF2 essere considerato come una "scatola" '),n("code",null,"box"),s(", che \xE8 composta da vari elementi che complessivamente prendono il nome di "),n("code",null,"box model"),s(".")]),n("li",null,[s("Il "),n("em",null,"box model"),s(" \xE8 composto da:")])],-1),XC=n("img",{src:YC,width:"650"},null,-1),n5=n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"content")]),s(" : il contenuto della scatola, dove testo e immagini sono visualizzate.")]),n("li",null,[n("em",null,[n("strong",null,"padding")]),s(" : area "),n("strong",null,"trasparente"),s(" attorno al contenuto e prima del margine.")]),n("li",null,[n("em",null,[n("strong",null,"border")]),s(" : bordo "),n("strong",null,"(in)visibile"),s(" attorno al padding.")]),n("li",null,[n("em",null,[n("strong",null,"margin")]),s(" : area "),n("strong",null,"trasparente"),s(" attorno al bordo.")])],-1),e5={__name:"70",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[QC,ZC,JC,b(i,null,{default:g(()=>[XC]),_:1}),n5]),_:1},16)}}};const es=e=>(Cn("data-v-1814a159"),e=e(),In(),e),t5=es(()=>n("h1",null,"CSS",-1)),s5=es(()=>n("p",null,"Box model",-1)),o5=es(()=>n("ul",null,[n("li",null,[s("Conoscere le propriet\xE0 del "),n("em",null,"box model"),s(" \xE8 molto importante durante il design ed il layout di una pagina web.")])],-1)),a5={class:"grid grid-flow-col auto-cols-max gap-8"},i5=es(()=>n("div",null,[K(" col 1 "),n("h3",null,"border"),n("div",{class:"parent"},[n("pre",null,`.parent1 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
}
`)]),n("div",{class:"parent"},[n("div",{id:"child1"},[n("pre",null,`#child1 {
  width: 80%;
  height: 80%;
  border: 1px solid;
}
    `)])]),n("div",{class:"parent"})],-1)),l5=es(()=>n("div",null,[K(" col 2 "),n("h3",null,"child padding"),n("div",{class:"parent"},[n("pre",null,`.parent2 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
}
`)]),n("div",{class:"parent"},[n("div",{id:"child2"},[n("pre",null,`#child2 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    `)])]),n("div",{class:"parent"})],-1)),r5=es(()=>n("div",null,[K(" col 3 "),n("h3",null,"father padding"),n("div",{class:"parent3"},[n("pre",null,`.parent3 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
  padding: 10px;
}
`)]),n("div",{class:"parent3"},[n("div",{id:"child3"},[n("pre",null,`#child3 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    `)])]),n("div",{class:"parent3"})],-1)),c5=es(()=>n("div",null,[K(" col 4 "),n("h3",null,"margin"),n("div",{class:"parent4"},[n("pre",null,`.parent4 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
  padding: 10px;
  margin: 10px;
}
`)]),n("div",{class:"parent4"},[n("div",{id:"child3"},[n("pre",null,`#child4 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    `)])]),n("div",{class:"parent4"})],-1)),p5={__name:"71",setup(e){const t={};return x($),(o,a)=>{const i=Zn;return k(),z(O,T(I(t)),{default:g(()=>[t5,s5,o5,n("div",a5,[i5,b(i,null,{default:g(()=>[l5]),_:1}),b(i,null,{default:g(()=>[r5]),_:1}),b(i,null,{default:g(()=>[c5]),_:1})])]),_:1},16)}}},u5=Sn(p5,[["__scopeId","data-v-1814a159"]]),d5=n("h1",null,"CSS",-1),m5=n("p",null,"Box model - sizing",-1),f5=n("ul",null,[n("li",null,"Il box model ci permette di definire bordi attorno agli elementi e di calcolare le dimensioni di un elemento e lo spazio tra elementi."),n("li",null,[s("E\u2019 importante considerare che quando si specifica una propriet\xE0 "),n("em",null,"width"),s(" e/o "),n("em",null,"height"),s(", si sta definendo la larghezza e/o altezza "),n("em",null,[n("strong",null,"SOLO")]),s(" della componente "),n("em",null,"content"),s(" del box model.")]),n("li",null,[s("Pertanto per calcolare la dimensione complessiva dell\u2019elemento HTML sar\xE0 necessario anche tenere in considerazione "),n("em",null,[n("strong",null,"padding")]),s(", "),n("em",null,[n("strong",null,"border")]),s(" e "),n("em",null,[n("strong",null,"margin")]),s(".")])],-1),h5={__name:"72",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[d5,m5,f5]),_:1},16))}},od="/TPSI/4/css/assets/css_10.fb7471a4.jpg";const Me=e=>(Cn("data-v-3ba4ad14"),e=e(),In(),e),g5=Me(()=>n("h1",null,"CSS",-1)),_5=Me(()=>n("p",null,"Box model - sizing",-1)),v5={class:"grid grid-flow-col auto-cols-max gap-8"},k5=Me(()=>n("h3",null,"Calcolo dimensione elemento HTML",-1)),y5=Me(()=>n("div",{id:"div1"},"Immagine larga 150px",-1)),b5=Me(()=>n("img",{id:"tux1",src:od,alt:"tux"},null,-1)),x5=Me(()=>n("div",{id:"div2"},[n("pre",null,`#div {
  width: 150px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
`)],-1)),S5=Me(()=>n("div",{id:"div3"},[n("pre",null,[s(`total_width = width + 2*padding + 2*border + 2*margin
`),n("p",null,"total_width =  150 + 20 + 10 + 0 = 180px"),s(`
`)])],-1)),w5=Me(()=>n("h3",null,"\xA0",-1)),z5=Me(()=>n("div",{id:"div1"},"Immagine larga 150px",-1)),$5=Me(()=>n("img",{id:"tux1",src:od,alt:"tux"},null,-1)),C5=Me(()=>n("div",{id:"div4"},[n("pre",null,`#div {
  width: 120px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
`)],-1)),I5=Me(()=>n("div",{id:"div3"},[n("pre",null,[s(`total_width = width + 2*padding + 2*border + 2*margin
`),n("p",null,"total_width = 120 + 20 + 10 + 0 = 150px"),s(`
`)])],-1)),T5={__name:"73",setup(e){const t={};return x($),(o,a)=>{const i=qn("center"),l=Zn;return k(),z(O,T(I(t)),{default:g(()=>[g5,_5,n("div",v5,[n("div",null,[k5,b(i,null,{default:g(()=>[y5,b5,x5,S5]),_:1})]),b(l,null,{default:g(()=>[n("div",null,[w5,b(i,null,{default:g(()=>[z5,$5,C5,I5]),_:1})])]),_:1})])]),_:1},16)}}},E5=Sn(T5,[["__scopeId","data-v-3ba4ad14"]]),L5=n("h1",null,"Esercizio css_16",-1),M5=n("p",null,"Box model",-1),P5=n("ol",null,[n("li",null,[s("Creare ed editare i file "),n("em",null,"|cognome|_esercizio_css_16.html"),s(" e "),n("em",null,"|cognome|_esercizio_css_16.css"),s(".")]),n("li",null,[s("Creare una foto gallery statica e centrata nella pagina, cos\xEC formata: "),n("ol",null,[n("li",null,"1 riga per 4 colonne"),n("li",null,"ogni cella deve contenere al centro un immagine di dimensione width pari a 250px"),n("li",null,"ogni immagine deve avere una didascalia nel bordo inferiore con bordo rosso di spessore 5px"),n("li",null,"nella didascalia deve esserci un breve titolo dell\u2019immagine con padding pari a 8px")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_16.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_16.css")],-1),O5={__name:"74",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[L5,M5,P5]),_:1},16))}},A5="/TPSI/4/css/assets/css_11.a5ae5190.jpg";const To=e=>(Cn("data-v-463299ae"),e=e(),In(),e),R5=To(()=>n("h1",null,"CSS",-1)),F5=To(()=>n("p",null,"Box model - sizing",-1)),D5=To(()=>n("div",{class:"grid grid-flow-col auto-cols-max gap-8"},[n("div",null,[n("ul",null,[n("li",null,[s("In CSS \xE8 possibile specificare il padding, border e margin per ognuno dei 4 lati: "),n("ol",null,[n("li",null,[n("em",null,[n("strong",null,"top")]),s(": lato superiore ("),n("em",null,[n("strong",null,"border-top")]),s(" - "),n("em",null,[n("strong",null,"padding-top")]),s(" - "),n("em",null,[n("strong",null,"margin-top")]),s(")")]),n("li",null,[n("em",null,[n("strong",null,"bottom")]),s(": lato inferiore ("),n("em",null,[n("strong",null,"border-bottom")]),s(" - "),n("em",null,[n("strong",null,"padding-bottom")]),s(" - "),n("em",null,[n("strong",null,"margin-bottom")]),s(")")]),n("li",null,[n("em",null,[n("strong",null,"left")]),s(": lato sinistro ("),n("em",null,[n("strong",null,"border-left")]),s(" - "),n("em",null,[n("strong",null,"padding-left")]),s(" - "),n("em",null,[n("strong",null,"margin-left")]),s(")")]),n("li",null,[n("em",null,[n("strong",null,"right")]),s(": lato destro ("),n("em",null,[n("strong",null,"border-right")]),s(" - "),n("em",null,[n("strong",null,"padding-right")]),s(" - "),n("em",null,[n("strong",null,"margin-right")]),s(")")])])])])]),n("div",null,[n("div",{id:"div1"})])],-1)),H5=To(()=>n("br",null,null,-1)),N5=To(()=>n("img",{src:A5,width:"700"},null,-1)),j5={__name:"75",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[R5,F5,D5,H5,b(i,null,{default:g(()=>[N5]),_:1})]),_:1},16)}}},q5=Sn(j5,[["__scopeId","data-v-463299ae"]]),B5=n("h1",null,"CSS",-1),W5=n("p",null,"Box model - sizing",-1),V5=n("ul",null,[n("li",null,"Generalizziamo ora la formula per calcolare le dimensioni effettive di un elemento HTML")],-1),K5=n("h3",null,"total width",-1),U5=n("br",null,null,-1),G5=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"Total width = width+left padding+right padding+left border+right border+left margin+right margin")])],-1),Y5=n("br",null,null,-1),Q5=n("br",null,null,-1),Z5=n("h3",null,"total height",-1),J5=n("br",null,null,-1),X5=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"Total height = height + top padding+bottom padding+top border+bottom border+top margin+bottom margin")])],-1),n4={__name:"76",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[B5,W5,V5,K5,U5,b(i,G({},{ranges:[""]}),{default:g(()=>[G5]),_:1},16),Y5,Q5,Z5,J5,b(i,G({},{ranges:[""]}),{default:g(()=>[X5]),_:1},16)]),_:1},16)}}},e4=n("h1",null,"Esercizio css_17",-1),t4=n("p",null,"CSS box model",-1),s4=n("ol",null,[n("li",null,[s("Data la seguente pagina html: "),n("a",{href:"../support/esercizio_css_17.html",target:"_blank",rel:"noopener"},"esercizio_css_17.html"),s(" e relativo css: "),n("a",{href:"../support/esercizio_css_17.css",target:"_blank",rel:"noopener"},"esercizio_css_17.css")]),n("li",null,[s("Editare il file e determinare il valore corretto per la propriet\xE0 "),n("strong",null,"width"),s(" della regola CSS "),n("em",null,"#div1"),s(","),n("em",null,"#div2"),s(" e "),n("em",null,"#div3"),s(" in modo che: "),n("ol",null,[n("li",null,[s("il componente "),n("strong",null,"div1"),s(" abbia dimensione complessiva pari a "),n("strong",null,"200px")]),n("li",null,[s("il componente "),n("strong",null,"div2"),s(" abbia dimensione complessiva pari a "),n("strong",null,"300px")]),n("li",null,[s("il componente "),n("strong",null,"div3"),s(" abbia dimensione complessiva pari a "),n("strong",null,"408px")])])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_17.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_17.css")],-1),o4={__name:"77",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[e4,t4,K(" risultato esercizio: 100,250,353 "),s4]),_:1},16))}},a4=n("h1",{class:"sezione"},"I bordi di un elemento",-1),i4={__name:"78",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[a4]),_:1},16))}},l4="/TPSI/4/css/assets/css_12.2e9157dd.jpg",r4=n("h1",null,"CSS",-1),c4=n("p",null,"Borders",-1),p4=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"border-style"),s(" permette di specificare lo stiledel bordo di un elemento.")])],-1),u4=n("h3",null,"border style",-1),d4=n("img",{src:l4,width:"550"},null,-1),m4={__name:"79",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[r4,c4,p4,u4,b(i,null,{default:g(()=>[d4]),_:1})]),_:1},16)}}},f4="/TPSI/4/css/assets/css_13.5f27eb92.jpg",h4=n("h1",null,"CSS",-1),g4=n("p",null,"Borders",-1),_4=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"border-width"),s(" permette di specificare lo spessore di un elemento.")])],-1),v4=n("h3",null,"border width",-1),k4=n("img",{src:f4,width:"300"},null,-1),y4={__name:"80",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[h4,g4,_4,v4,b(i,null,{default:g(()=>[k4]),_:1})]),_:1},16)}}},b4="/TPSI/4/css/assets/css_14.9d059fa0.jpg",x4=n("h1",null,"CSS",-1),S4=n("p",null,"Borders",-1),w4=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"border-color"),s(" permette di specificare il colore di un elemento.")])],-1),z4=n("h3",null,"border color",-1),$4=n("img",{src:b4,width:"300"},null,-1),C4={__name:"81",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[x4,S4,w4,z4,b(i,null,{default:g(()=>[$4]),_:1})]),_:1},16)}}},I4="/TPSI/4/css/assets/css_15.89a55d9c.jpg",T4=n("h1",null,"CSS",-1),E4=n("p",null,"Borders",-1),L4=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"border-radius"),s(" permette di specificare la rotondit\xE0 di un bordo di un elemento.")])],-1),M4=n("h3",null,"border radius",-1),P4=n("img",{src:I4,width:"300"},null,-1),O4={__name:"82",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[T4,E4,L4,M4,b(i,null,{default:g(()=>[P4]),_:1})]),_:1},16)}}},A4="/TPSI/4/css/assets/css_16.20528f70.jpg",R4=n("h1",null,"CSS",-1),F4=n("p",null,"Borders",-1),D4=n("h3",null,"border shorthand",-1),H4=n("ul",null,[n("li",null,[s("CSS ci permette di scrivere le dichiarazioni CSS in modo pi\xF9 compatto, tramite la forma nominata "),n("code",null,"shorthand")]),n("li",null,[s("Le 3 propriet\xE0 viste prime "),n("em",null,[n("strong",null,"border-style")]),s(", "),n("em",null,[n("strong",null,"border-width")]),s(", "),n("em",null,[n("strong",null,"border-color")]),s(" possono essere scritte in modo compatto in questo modo")])],-1),N4=n("p",null,[n("code",null,"Dichiarazione CSS - border: <width> <style> <color>;")],-1),j4=n("img",{src:A4,width:"290"},null,-1),q4={__name:"83",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[R4,F4,D4,H4,N4,b(i,null,{default:g(()=>[j4]),_:1})]),_:1},16)}}},B4=n("h1",null,"Esercizio css_18",-1),W4=n("p",null,"CSS borders",-1),V4=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_07.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_18.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_18.css")]),n("li",null,"Dichiarare lo stile della pagina in modo che tutti i titoli di primo livello abbiano un bordo inferiore solido, spesso 5px e di colore blue ed un bordo sinistro spesso 7px di colore nero"),n("li",null,"Dichiarare lo stile della pagina in modo che tutti i titoli di secondo livello abbiano un bordo superiore trattegiato, spesso 2px di colore verde"),n("li",null,"Dichiarare lo stile della pagina in modo che tutti i paragrafi abbiano un bordo un bordo inferiore tratteggiato spesso 3px di colore grigio e i bordi laterali di color verde"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_18.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_18.css")],-1),K4={__name:"84",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[B4,W4,V4]),_:1},16))}},U4=n("h1",{class:"sezione"},"Formattazione del Testo",-1),G4={__name:"85",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[U4]),_:1},16))}},Y4=n("h1",null,"CSS",-1),Q4=n("p",null,"Text Formatting",-1),Z4=n("ul",null,[n("li",null,[s("CSS mette a disposizione delle propriet\xE0 per definire la formattazione del testo: "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"color")]),s(" : specifica il colore del testo")]),n("li",null,[n("em",null,[n("strong",null,"text-align")]),s(" : specifica l\u2019allineamento e la giustificazione del testo all\u2019interno di un contenitore")]),n("li",null,[n("em",null,[n("strong",null,"text-decoration")]),s(" : permette di decorare il testo in vari modi (sottolineato, \u2026)")]),n("li",null,[n("em",null,[n("strong",null,"text-transform")]),s(" : permette di applicare delle trasformazioni al testo (uppercase, lowercase, \u2026)")]),n("li",null,[n("em",null,[n("strong",null,"line-height")]),s(" : permette di specificare lo spazio tra due linee di testo")]),n("li",null,[n("em",null,[n("strong",null,"text-shadow")]),s(" : permette di aggiungere un\u2019ombra ad un testo")])])])],-1),J4={__name:"86",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[Y4,Q4,Z4]),_:1},16))}};const Xe=e=>(Cn("data-v-5a346f12"),e=e(),In(),e),X4=Xe(()=>n("h1",null,"CSS",-1)),nI=Xe(()=>n("p",null,"color",-1)),eI=Xe(()=>n("p",null,[n("code",null,"{ color: red; }")],-1)),tI=Xe(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),sI=Xe(()=>n("p",null,[n("code",null,"{ color: #3feb00; }")],-1)),oI=Xe(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),aI=Xe(()=>n("p",null,[n("code",null,"{ color: rgba(45, 0, 224, 1); }")],-1)),iI=Xe(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),lI=Xe(()=>n("p",null,[n("code",null,"{ color: hsla(10, 100%, 44%, 1); }")],-1)),rI=Xe(()=>n("p",{id:"id4"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),cI={__name:"87",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[X4,nI,eI,tI,sI,oI,aI,iI,lI,rI]),_:1},16))}},pI=Sn(cI,[["__scopeId","data-v-5a346f12"]]);const nt=e=>(Cn("data-v-431d7199"),e=e(),In(),e),uI=nt(()=>n("h1",null,"CSS",-1)),dI=nt(()=>n("p",null,"text-align",-1)),mI=nt(()=>n("p",null,[n("code",null,"{ text-align: left; }")],-1)),fI=nt(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),hI=nt(()=>n("p",null,[n("code",null,"{ text-align: center; }")],-1)),gI=nt(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),_I=nt(()=>n("p",null,[n("code",null,"{ text-align: right; }")],-1)),vI=nt(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),kI=nt(()=>n("p",null,[n("code",null,"{ text-align: justify; }")],-1)),yI=nt(()=>n("p",{id:"id4"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),bI={__name:"88",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[uI,dI,mI,fI,hI,gI,_I,vI,kI,yI]),_:1},16))}},xI=Sn(bI,[["__scopeId","data-v-431d7199"]]);const et=e=>(Cn("data-v-7cbf7c5c"),e=e(),In(),e),SI=et(()=>n("h1",null,"CSS",-1)),wI=et(()=>n("p",null,"text-decoration",-1)),zI=et(()=>n("p",null,[n("code",null,"{ text-decoration: none; }")],-1)),$I=et(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),CI=et(()=>n("p",null,[n("code",null,"{ text-decoration: overline; }")],-1)),II=et(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),TI=et(()=>n("p",null,[n("code",null,"{ text-decoration: line-through; }")],-1)),EI=et(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),LI=et(()=>n("p",null,[n("code",null,"{ text-decoration: underline; }")],-1)),MI=et(()=>n("p",{id:"id4"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),PI={__name:"89",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[SI,wI,zI,$I,CI,II,TI,EI,LI,MI]),_:1},16))}},OI=Sn(PI,[["__scopeId","data-v-7cbf7c5c"]]);const Ct=e=>(Cn("data-v-64a1b501"),e=e(),In(),e),AI=Ct(()=>n("h1",null,"CSS",-1)),RI=Ct(()=>n("p",null,"text-trasnform",-1)),FI=Ct(()=>n("p",null,[n("code",null,"{ text-transform: uppercase; }")],-1)),DI=Ct(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),HI=Ct(()=>n("p",null,[n("code",null,"{ text-transform: lowercase; }")],-1)),NI=Ct(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),jI=Ct(()=>n("p",null,[n("code",null,"{ text-transform: capitalize; }")],-1)),qI=Ct(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),BI={__name:"90",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[AI,RI,FI,DI,HI,NI,jI,qI]),_:1},16))}},WI=Sn(BI,[["__scopeId","data-v-64a1b501"]]);const It=e=>(Cn("data-v-1cba713a"),e=e(),In(),e),VI=It(()=>n("h1",null,"CSS",-1)),KI=It(()=>n("p",null,"line-height",-1)),UI=It(()=>n("p",null,[n("code",null,"{ line-height: 0.8; }")],-1)),GI=It(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),YI=It(()=>n("p",null,[n("code",null,"{ line-height: 1.6; }")],-1)),QI=It(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),ZI=It(()=>n("p",null,[n("code",null,"{ line-height: 2.4; }")],-1)),JI=It(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),XI={__name:"91",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[VI,KI,UI,GI,YI,QI,ZI,JI]),_:1},16))}},nT=Sn(XI,[["__scopeId","data-v-1cba713a"]]);const Tt=e=>(Cn("data-v-775276c2"),e=e(),In(),e),eT=Tt(()=>n("h1",null,"CSS",-1)),tT=Tt(()=>n("p",null,"text-shadow",-1)),sT=Tt(()=>n("p",null,[n("code",null,"{ text-shadow: 2px 2px; }")],-1)),oT=Tt(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),aT=Tt(()=>n("p",null,[n("code",null,"{ text-shadow: 4px 0px red; }")],-1)),iT=Tt(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),lT=Tt(()=>n("p",null,[n("code",null,"{ text-shadow: 2px 2px 5px red; }")],-1)),rT=Tt(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),cT={__name:"92",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[eT,tT,sT,oT,aT,iT,lT,rT]),_:1},16))}},pT=Sn(cT,[["__scopeId","data-v-775276c2"]]),uT=n("h1",null,"Esercizio css_19",-1),dT=n("p",null,"Text formatting",-1),mT=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_07.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_19.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_19.css")]),n("li",null,[s("Dichiarare gli stili necessari affinch\xE8: "),n("ol",null,[n("li",null,"tutti i titoli di primo livello siano upper case e di colore blue"),n("li",null,"tutti i titoli di secondo livello inizino con una lettera maiuscola e di colore rosso e siano sottolineati"),n("li",null,"tutti i paragrafi siano giustificati tranne il 3zo paragrafo che deve avere un allineamento a destra"),n("li",null,"una frase o citazione importante del testo, deve possedere un effetto di ombreggiatura a piacere")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_19.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_19.css")],-1),fT={__name:"93",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[uT,dT,mT]),_:1},16))}},hT=n("h1",{class:"sezione"},"Font ed Icone",-1),gT={__name:"94",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[hT]),_:1},16))}},_T=n("h1",null,"CSS",-1),vT=n("p",null,"Font",-1),kT=n("ul",null,[n("li",null,[n("p",null,"In CSS \xE8 possibile cambiare il font del testo.")]),n("li",null,[n("p",null,"Usare un font che \xE8 facile da leggere \xE8 importante.")]),n("li",null,[n("p",null,"Ci sono 5 famiglie di font generici, ognuno con specifici font utilizzabili:"),n("ol",null,[n("li",null,[n("em",null,[n("strong",null,"Serif")]),s(" :")]),n("li",null,[n("em",null,[n("strong",null,"Sans-serif")])]),n("li",null,[n("em",null,[n("strong",null,"Monospace")])]),n("li",null,[n("em",null,[n("strong",null,"Cursive")])]),n("li",null,[n("em",null,[n("strong",null,"Fantasy")])])])]),n("li",null,[n("p",null,[s("Per specificare il font si usa la propriet\xE0 "),n("code",null,"font-family:<font name>")])])],-1),yT={__name:"95",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[_T,vT,kT]),_:1},16))}},bT="/TPSI/4/css/assets/css_17.056f1f5d.jpg",xT=n("h1",null,"CSS",-1),ST=n("p",null,"Font",-1),wT=n("img",{src:bT,width:"500"},null,-1),zT={__name:"96",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[xT,ST,b(i,null,{default:g(()=>[wT]),_:1})]),_:1},16)}}},$T=n("h1",null,"CSS",-1),CT=n("p",null,"Font Fall Back",-1),IT=n("ul",null,[n("li",null,[s("Specificando un font con la propriet\xE0 "),n("code",null,"font-family"),s(" non si pu\xF2 avere la certezza che questo venga visualizzato correttamente.")]),n("li",null,"Questo perch\xE8 se il font non \xE8 installato o non \xE8 trovato, non pu\xF2 essere visulizzato"),n("li",null,[s("Quindi il browser, in questo caso, visualizzer\xE0 un font di "),n("em",null,[n("strong",null,"fall-back")])]),n("li",null,[s("Per questo motivo \xE8 sempre "),n("strong",null,"UNA BUONA REGOLA"),s(" specificare pi\xF9 di un font, in modo che se il primo non \xE8 disponibile, il browser prover\xE0 a visualizzare il successivo e cos\xEC via.")])],-1),TT=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},'{ font-family: "Times New Roman", Times, serif; }')])],-1),ET=n("ul",null,[n("li",null,'Questa descrizone CSS, specifica di usare il font "Times New Roman" se disponibile. In caso contrario indica al browser di provare a dutilizzare il font "Times" e come ultima spiaggia qualsiasi font disponibile della famiglia "serif".')],-1),LT={__name:"97",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[$T,CT,IT,b(i,G({},{ranges:[""]}),{default:g(()=>[TT]),_:1},16),ET]),_:1},16)}}},MT=n("h1",null,"CSS",-1),PT=n("p",null,"Font Web Safe",-1),OT=n("ul",null,[n("li",null,[s("I font "),n("strong",null,"web safe"),s(" sono font che sono universalmente disponibili su tutti i sistemi operativi e browser pi\xF9 comuni")]),n("li",null,"Pertanto l\u2019uso di questo font massimizza la probabilit\xE0 che la pagina venga visualizzata come inizialmente pensata dall\u2019autore"),n("li",null,[s("Qui una lista di font "),n("strong",null,"web-safe"),s(" : "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"Arial (sans-serif)")]),s(" :"),n("span",{style:{"font-family":"Arial"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Verdana (sans-serif)")]),s(" :"),n("span",{style:{"font-family":"Verdana"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Helvetica (sans-serif)")]),s(" :"),n("span",{style:{"font-family":"Helvetica"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Tahoma (sans-serif)")]),s(" :"),n("span",{style:{"font-family":"Tahoma"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Times New Roman (serif)")]),s(" :"),n("span",{style:{"font-family":"'Times New Roman'"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Georgia (serif)")]),s(" :"),n("span",{style:{"font-family":"Georgia"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Garamond (serif)")]),s(" :"),n("span",{style:{"font-family":"Garamond"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Courier New (monospace)")]),s(" :"),n("span",{style:{"font-family":"'Courier New'","font-size":"13px"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")])])])],-1),AT={__name:"98",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[MT,PT,OT]),_:1},16))}},RT=n("h1",null,"CSS",-1),FT=n("p",null,"Font Style",-1),DT=n("ul",null,[n("li",null,[s("La propriet\xE0 "),n("code",null,"font-style: <style>"),s(" permette di variare alcune caratteristiche di visualizzazione del font")])],-1),HT=n("p",null,[n("code",null,"{ font-style:normal; }")],-1),NT=n("p",{style:{"font-style":"normal"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),jT=n("p",null,[n("code",null,"{ font-style:italic; }")],-1),qT=n("p",{style:{"font-style":"italic"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),BT=n("p",null,[n("code",null,"{ font-style:oblique; }")],-1),WT=n("p",{style:{"font-style":"oblique"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),VT={__name:"99",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[RT,FT,DT,HT,NT,jT,qT,BT,WT]),_:1},16))}},KT=n("h1",null,"CSS",-1),UT=n("p",null,"Font Weight",-1),GT=n("ul",null,[n("li",null,[s("La propriet\xE0 "),n("code",null,"font-weight: <weight>"),s(" permette di variare alcune caratteristiche di visualizzazione del font")])],-1),YT=n("p",null,[n("code",null,"{ font-weight: normal; }")],-1),QT=n("p",{style:{"font-weight":"normal"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),ZT=n("p",null,[n("code",null,"{ font-weight: bold;}")],-1),JT=n("p",{style:{"font-weight":"bold"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),XT={__name:"100",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[KT,UT,GT,YT,QT,ZT,JT]),_:1},16))}},n6=n("h1",null,"CSS",-1),e6=n("p",null,"Font Size",-1),t6=n("ul",null,[n("li",null,[s("La propriet\xE0 "),n("code",null,"font-size: <size>"),s(" permette di variare le dimensioni del font")]),n("li",null,"La dimensione pu\xF2 essere specificata in valore assoluto o relativo")],-1),s6=n("h3",null,"dimensione assoluta",-1),o6=n("p",null,[n("code",null,"{ font-size: 30px; }")],-1),a6=n("p",{style:{"font-size":"30px"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),i6=n("p",null,[n("code",null,"{ font-size: 10px; }")],-1),l6=n("p",{style:{"font-size":"10px"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),r6=n("ul",null,[n("li",null,"L\u2019utente non pu\xF2 cambiare la dimensione del font tramite le impostazioni del browser")],-1),c6={__name:"101",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[n6,e6,t6,s6,o6,a6,i6,l6,r6]),_:1},16))}},p6=n("h1",null,"CSS",-1),u6=n("p",null,"Font Size",-1),d6=n("h3",null,"valore relativo",-1),m6=n("ul",null,[n("li",null,"Imposta la dimensione del font relativamente")],-1),f6=n("p",null,[n("code",null,"{ font-size: 1em; }")],-1),h6=n("p",{style:{"font-size":"1em"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),g6=n("p",null,[n("code",null,"{ font-size: 2em; }")],-1),_6=n("p",{style:{"font-size":"2em"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),v6=n("p",null,[n("code",null,"{ font-size: 0.5em; }")],-1),k6=n("p",{style:{"font-size":"0.5em"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),y6=n("ul",null,[n("li",null,[n("strong",null,"1em"),s(" equivale alla dimensione del font attuale per la pagina (default 16px)")]),n("li",null,"L\u2019utente pu\xF2 adattare la dimensione del font tramite le impostazioni del browser")],-1),b6={__name:"102",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[p6,u6,d6,m6,f6,h6,g6,_6,v6,k6,y6]),_:1},16))}},x6=n("h1",null,"CSS",-1),S6=n("p",null,"Google Font",-1),w6=n("ul",null,[n("li",null,[s("Google mette a disposizione gratuitamente oltre "),n("a",{href:"https://fonts.google.com/",target:"_blank",rel:"noopener"},"1000 font")]),n("li",null,[s("Per utilizzarli basta inserire un tag "),n("em",null,"link"),s(" nella sezione "),n("em",null,"head"),s(" della pagina HTML")])],-1),z6=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://fonts.googleapis.com/css?family=<nome font>"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"oppure nel caso di pi\xF9 font"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://fonts.googleapis.com/css?family=<font1>|<font2>|<fontN>"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])])])],-1),$6=n("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Sofia|Audiowide"},null,-1),C6=n("p",null,[n("code",null,"{ font-family: Sofia, sans-serif; }")],-1),I6=n("p",{style:{"font-family":"Sofia, sans-serif"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),T6=n("p",null,[n("code",null,"{ font-family: Audiowide, sans-serif; }")],-1),E6=n("p",{style:{"font-family":"Audiowide, sans-serif"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),L6={__name:"103",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[x6,S6,w6,b(i,G({},{ranges:[""]}),{default:g(()=>[z6]),_:1},16),$6,C6,I6,T6,E6]),_:1},16)}}},M6=n("h1",null,"CSS",-1),P6=n("p",null,"Google Font",-1),O6=n("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Modak|Hanalei|Barriecito|Margarine"},null,-1),A6=n("p",null,[n("code",null,"{ font-family: 'Modak', cursive; }")],-1),R6=n("p",{style:{"font-family":"'Modak', cursive"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),F6=n("br",null,null,-1),D6=n("p",null,[n("code",null,"{ font-family: 'Hanalei', cursive; }")],-1),H6=n("p",{style:{"font-family":"'Hanalei', cursive"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),N6=n("br",null,null,-1),j6=n("p",null,[n("code",null,"{ font-family: 'Barriecito', cursive; }")],-1),q6=n("p",{style:{"font-family":"'Barriecito', cursive"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),B6=n("br",null,null,-1),W6=n("p",null,[n("code",null,"{ font-family: 'Margarine', cursive; }")],-1),V6=n("p",{style:{"font-family":"'Margarine', cursive"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),K6={__name:"104",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[M6,P6,O6,A6,R6,F6,D6,H6,N6,j6,q6,B6,W6,V6]),_:1},16))}},U6=n("h1",null,"CSS",-1),G6=n("p",null,"Google Icon",-1),Y6=n("ul",null,[n("li",null,[s("Google mette a disposizione gratuita molte centinaia di "),n("a",{href:"https://fonts.google.com/icons",target:"_blank",rel:"noopener"},"icone")]),n("li",null,[s("Per utilizzarli basta inserire un tag "),n("em",null,"link"),s(" nella sezione "),n("em",null,"head"),s(" della pagina HTML")])],-1),Q6=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://fonts.googleapis.com/icon?family=Material+Icons"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])])])],-1),Z6=n("br",null,null,-1),J6=n("ul",null,[n("li",null,[s("Per inserire un\u2019icona basta usare il tag "),n("code",null,"<span>"),s(" in questo modo:")])],-1),X6=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("material-icons"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("nome")]),s(),n("span",{class:"token attr-name"},"dell'icona"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")])])])],-1),nE=n("br",null,null,-1),eE=n("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"},null,-1),tE=n("p",null,[n("code",null,'<span class="material-icons">favorite</span>'),n("span",{class:"material-icons",style:{color:"red"}},"\xA0\xA0\xA0favorite")],-1),sE=n("p",null,[n("code",null,'<span class="material-icons">thumb_up</span>'),n("span",{class:"material-icons",style:{color:"blue"}},"\xA0\xA0\xA0thumb_up")],-1),oE=n("p",null,[n("code",null,'<span class="material-icons">emoji_emotions</span>'),n("span",{class:"material-icons",style:{color:"yellow"}},"\xA0\xA0\xA0emoji_emotions")],-1),aE={__name:"105",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[U6,G6,Y6,b(i,G({},{ranges:[""]}),{default:g(()=>[Q6]),_:1},16),Z6,J6,b(i,G({},{ranges:[""]}),{default:g(()=>[X6]),_:1},16),nE,eE,tE,sE,oE]),_:1},16)}}},iE=n("h1",null,"CSS",-1),lE=n("p",null,"List",-1),rE=n("ul",null,[n("li",null,[n("p",null,[s("CSS permette di definire lo stile anche per le liste tramite la propriet\xE0 "),n("code",null,"list-style-type:<type>")])]),n("li",null,[n("p",null,[s("Per le liste "),n("em",null,"unordered"),s(" i possibili tipi sono:")]),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"circle")])]),n("li",null,[n("em",null,[n("strong",null,"square")])])])]),n("li",null,[n("p",null,[s("Per le liste "),n("em",null,"ordered"),s(" i possibili tipi sono:")]),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"upper-roman")])]),n("li",null,[n("em",null,[n("strong",null,"lower-alpha")])])])])],-1),cE={__name:"106",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[iE,lE,rE]),_:1},16))}};const Eo=e=>(Cn("data-v-3c761cf3"),e=e(),In(),e),pE=Eo(()=>n("h1",null,"CSS",-1)),uE=Eo(()=>n("p",null,"List",-1)),dE={class:"grid grid-flow-col auto-cols-max gap-8"},mE=Eo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Unordered lists:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cerchio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coffee"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Tea"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coca Cola"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Unordered lists quadrato:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("quadrato"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coffee"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Tea"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coca Cola"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),fE=Eo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"ul.cercho"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" circle"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"ul.quadrato"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" square"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),hE=Eo(()=>n("div",null,[n("p",null,"Unordered lists cerchio:"),n("ul",{class:"cerchio"},[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola")]),n("p",null,"Unordered lists quadrato:"),n("ul",{class:"quadrato"},[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola")])],-1)),gE={__name:"107",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[pE,uE,n("div",dE,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[mE]),_:1},16)]),n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[fE]),_:1},16)]),hE])]),_:1},16)}}},_E=Sn(gE,[["__scopeId","data-v-3c761cf3"]]);const Lo=e=>(Cn("data-v-fb2e5764"),e=e(),In(),e),vE=Lo(()=>n("h1",null,"CSS",-1)),kE=Lo(()=>n("p",null,"List",-1)),yE={class:"grid grid-flow-col auto-cols-max gap-8"},bE=Lo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Ordered lists romano:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ol")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("roman"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coffee"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Tea"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coca Cola"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ol")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Ordered lists alpha:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ol")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("alpha"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coffee"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Tea"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coca Cola"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ol")]),n("span",{class:"token punctuation"},">")])])])],-1)),xE=Lo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"ol.roman"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" upper-roman"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"ol.alpha"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" lower-alpha"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),SE=Lo(()=>n("div",null,[n("p",null,"Ordered lists romano:"),n("ol",{class:"roman"},[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola")]),n("p",null,"Ordered lists alpha:"),n("ol",{class:"alpha"},[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola")])],-1)),wE={__name:"108",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[vE,kE,n("div",yE,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[bE]),_:1},16)]),n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[xE]),_:1},16)]),SE])]),_:1},16)}}},zE=Sn(wE,[["__scopeId","data-v-fb2e5764"]]);const Ts=e=>(Cn("data-v-968d1ace"),e=e(),In(),e),$E=Ts(()=>n("h1",null,"CSS",-1)),CE=Ts(()=>n("p",null,"List",-1)),IE=Ts(()=>n("ul",null,[n("li",null,"Possiamo anche usare un\u2019icome come elemento di una lista")],-1)),TE={class:"grid grid-flow-col auto-cols-max gap-8"},EE=Ts(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Unordered lists con icona:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coffee"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Tea"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coca Cola"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Fanta"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Sprite"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),LE=Ts(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"ul"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},"  "),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"li:before"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'done_outline'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'Material Icons'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),s(" -10%"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),ME=Ts(()=>n("div",null,[n("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),n("p",null,"Unordered lists con icona:"),n("ul",null,[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola"),n("li",null,"Fanta"),n("li",null,"Sprite")])],-1)),PE={__name:"109",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[$E,CE,IE,n("div",TE,[n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[EE]),_:1},16)]),n("div",null,[b(i,G({},{ranges:[""]}),{default:g(()=>[LE]),_:1},16)]),ME])]),_:1},16)}}},OE=Sn(PE,[["__scopeId","data-v-968d1ace"]]),AE=n("h1",null,"Esercizio css_20",-1),RE=n("p",null,"CSS text formatting",-1),FE=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_07.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_20.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_20.css")]),n("li",null,[s("Dichiarare gli stili necessari affinch\xE8: "),n("ol",null,[n("li",null,"i primi tre titoli di primo livelli abbiano 3 font differenti scelti tra quelli forniti da google (oltre 1000)"),n("li",null,"nel testo compaiano, laddove appropriato, delle icone selezionate tra le migliaia messe a disposizione da google"),n("li",null,[s("nel testo compaia una lista unordered con stile "),n("em",null,"circle")]),n("li",null,"nel testo compaina una lista ordered con stile con numeri romani"),n("li",null,"nel testo compaina una lista unordered che abbiamo come bullet item un\u2019icona fornita da google")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_20.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_20.css")],-1),DE={__name:"110",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[AE,RE,FE]),_:1},16))}},HE=n("h1",{class:"sezione"},"Elementi nascosti e elementi fantasma",-1),NE={__name:"111",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[HE]),_:1},16))}},jE=n("h1",null,"CSS",-1),qE=n("p",null,"Display e Visibility",-1),BE=n("ul",null,[n("li",null,[s("Ogni elemento HTMLha un valore di "),n("strong",null,"display"),s(" predefito che determina il modo in cui l\u2019elemto viene visualizzato.")]),n("li",null,[s("Pertanto una propriet\xE0 CSS molto importante \xE8 "),n("code",null,"dislay: <display value>")]),n("li",null,"Questa propriet\xE0, appunto, modifica il valore di display di un tag HTML"),n("li",null,"Tramite questa propriet\xE0 si pu\xF2 decidere se l\u2019elemento viene visualizzato o meno e come."),n("li",null,[s("I valori che "),n("code",null,"display"),s(" pu\xF2 assumere sono "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"inline")]),s(": elemento posizionato sulla linea corrente "),n("code",null,"<span>")]),n("li",null,[n("em",null,[n("strong",null,"block")]),s(": elemento posizionato su una nuova linea "),n("code",null,"<div>")]),n("li",null,[n("em",null,[n("strong",null,"none")]),s(": l\u2019elemento HTML "),n("u",null,"non \xE8 visualizzato e rimosso dal DOM"),s(", pertanto lo spazio "),n("strong",null,"NON"),s(" \xE8 occupato")])])]),n("li",null,[s("La propriet\xE0 "),n("code",null,"visibility: hidden | visible"),s(" in modo analogo a "),n("code",null,"display: none"),s(" rende l\u2019elemento invisibile, "),n("u",null,"senza rimuoverlo dal DOM"),s(", perci\xF2 lo spazio "),n("strong",null,"RIMANE"),s(" occupato.")]),n("li",null,"Normalmente queste propriet\xE0 sono manipolate da JavaScript fornendo cos\xEC uno strumento utile alla creazione di applicazioni dinamiche.")],-1),WE={__name:"112",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[jE,qE,BE]),_:1},16))}};const Mo=e=>(Cn("data-v-8a812890"),e=e(),In(),e),VE=Mo(()=>n("h1",null,"CSS",-1)),KE=Mo(()=>n("p",null,"Display e Visibility",-1)),UE={class:"grid grid-flow-col auto-cols-max gap-8"},GE=Mo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi rimosso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("linea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Line1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("linea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Line2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("linea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Line3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi invisibile"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),YE=Mo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".blocchi"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("1px solid black"),n("span",{class:"token punctuation"},";"),s()]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("200px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s("50px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".linea"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" inline"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("1px solid black"),n("span",{class:"token punctuation"},";"),s()]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("200px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/*ignorato*/")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s("50px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"/*ignorato*/")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".rimosso"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},"  "),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".invisibile"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"visibility"),n("span",{class:"token punctuation"},":"),s(" hidden"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),QE=Mo(()=>n("div",null,[K(" col3 "),n("div",{class:"blocchi"},"Block1"),n("div",{class:"blocchi"},"Block2"),n("div",{class:"blocchi"},"Block3"),n("div",{class:"blocchi rimosso"},"Block4"),n("div",{class:"linea"},"Line1"),n("div",{class:"linea"},"Line2"),n("div",{class:"linea"},"Line3"),n("div",{class:"blocchi invisibile"},"Block5"),n("div",{class:"blocchi"},"Block6")],-1)),ZE={__name:"113",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[VE,KE,n("div",UE,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[GE]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[YE]),_:1},16)]),QE])]),_:1},16)}}},JE=Sn(ZE,[["__scopeId","data-v-8a812890"]]);const Es=e=>(Cn("data-v-5d74cd56"),e=e(),In(),e),XE=Es(()=>n("h1",null,"CSS",-1)),nL=Es(()=>n("p",null,"Display e Visibility",-1)),eL=Es(()=>n("ul",null,[n("li",null,[s("Il tag "),n("code",null,"<li>"),s(" ha un valore di display di default pari a "),n("em",null,"block"),s(".")]),n("li",null,[s("Per esempio modificare il valore di display a "),n("em",null,"inline"),s(" \xE8 molto utile per generare delle barre di navigazione orizzontale.")])],-1)),tL={class:"grid grid-flow-col auto-cols-max gap-8"},sL=Es(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h3")]),n("span",{class:"token punctuation"},">")]),s("Lista:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h3")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Menu 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Menu 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Menu 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h3")]),n("span",{class:"token punctuation"},">")]),s("Barra Menu:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h3")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Menu 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Menu 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Menu 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),oL=Es(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".menu li"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" inline"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),aL=Es(()=>n("div",null,[K(" col3 "),n("h3",null,"Lista:"),n("ul",null,[n("li",null,"Menu 1"),n("li",null,"Menu 2"),n("li",null,"Menu 3")]),n("h3",null,"Barra Menu:"),n("ul",{class:"menu"},[n("li",null,"Menu 1"),n("li",null,"Menu 2"),n("li",null,"Menu 3")])],-1)),iL={__name:"114",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[XE,nL,eL,n("div",tL,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[sL]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[oL]),_:1},16)]),aL])]),_:1},16)}}},lL=Sn(iL,[["__scopeId","data-v-5d74cd56"]]),rL=n("h1",{class:"sezione"},"Elementi galleggianti",-1),cL={__name:"115",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[rL]),_:1},16))}},pL=n("h1",null,"CSS",-1),uL=n("p",null,"Layout - Float",-1),dL=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"float: <float value>"),s(" \xE8 utilizzata per posizionare e formattare il contenuto di una pagina web (es: posizionare un immagine a sinistra del testo).")]),n("li",null,[s("I possibili valori sono: "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"left")]),s(": l\u2019elemento si posiziona pi\xF9 possibile a sinistra rispetto al suo elemento padre (contenitore)")]),n("li",null,[n("em",null,[n("strong",null,"right")]),s(": l\u2019elemento si posiziona pi\xF9 possibile a sinistra rispetto al suo contenitore")]),n("li",null,[n("em",null,[n("strong",null,"inherit")]),s(": l\u2019elemento eredita il valore per float dal suo contenitore")]),n("li",null,[n("em",null,[n("strong",null,"none")]),s(": "),n("strong",null,"(default)"),s(" l\u2019elemento non si sposta e viene posizionato in linea con il testo")])])]),n("li",null,'In pratica immaginiamo che gli elementi HTML galleggiano ("float") e si possono spostare a destra, sinistra o rimanere fermi.')],-1),mL={__name:"116",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[pL,uL,dL]),_:1},16))}},Na="/TPSI/4/css/assets/css_18.46cdc138.jpg";const Ls=e=>(Cn("data-v-2c84db10"),e=e(),In(),e),fL=Ls(()=>n("h1",null,"CSS",-1)),hL=Ls(()=>n("p",null,"Layout - Float",-1)),gL=Ls(()=>n("h3",null,"float none",-1)),_L={class:"grid grid-flow-col auto-cols-max gap-4"},vL=Ls(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imgnone"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/media/css_18.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},"  L\u2019oratorio e la parrocchia "),s(`
`),n("span",{class:"line"},"  San Giovanni Bosco, espressioni "),s(`
`),n("span",{class:"line"},"  ......"),s(`
`),n("span",{class:"line"},"  nella Diocesi e nella citt\xE0 di Torino."),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1)),kL=Ls(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token selector"},"#imgnone"),s(),n("span",{class:"token punctuation"},"{"),s()]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),yL=Ls(()=>n("div",null,[K(" col3 "),n("p",{style:{width:"320px"}},[n("img",{id:"imgnone",src:Na}),s(" L\u2019oratorio e la parrocchia San Giovanni Bosco, espressioni ...... nella Diocesi e nella citt\xE0 di Torino. ")])],-1)),bL={__name:"117",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[fL,hL,gL,n("div",_L,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[vL]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[kL]),_:1},16)]),yL])]),_:1},16)}}},xL=Sn(bL,[["__scopeId","data-v-2c84db10"]]);const Ms=e=>(Cn("data-v-e80bdebd"),e=e(),In(),e),SL=Ms(()=>n("h1",null,"CSS",-1)),wL=Ms(()=>n("p",null,"Layout - Float",-1)),zL=Ms(()=>n("h3",null,"float left",-1)),$L={class:"grid grid-flow-col auto-cols-max gap-4"},CL=Ms(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imgnone"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/media/css_18.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},"  L\u2019oratorio e la parrocchia "),s(`
`),n("span",{class:"line"},"  San Giovanni Bosco, espressioni "),s(`
`),n("span",{class:"line"},"  ......"),s(`
`),n("span",{class:"line"},"  nella Diocesi e nella citt\xE0 di Torino."),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1)),IL=Ms(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token selector"},"#imgnone"),s(),n("span",{class:"token punctuation"},"{"),s()]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),TL=Ms(()=>n("div",null,[K(" col3 "),n("p",{style:{width:"320px"}},[n("img",{id:"imgnone",src:Na}),s(" L\u2019oratorio e la parrocchia San Giovanni Bosco, espressioni ...... nella Diocesi e nella citt\xE0 di Torino. ")])],-1)),EL={__name:"118",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[SL,wL,zL,n("div",$L,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[CL]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[IL]),_:1},16)]),TL])]),_:1},16)}}},LL=Sn(EL,[["__scopeId","data-v-e80bdebd"]]);const Ps=e=>(Cn("data-v-806cd720"),e=e(),In(),e),ML=Ps(()=>n("h1",null,"CSS",-1)),PL=Ps(()=>n("p",null,"Layout - Float",-1)),OL=Ps(()=>n("h3",null,"float right",-1)),AL={class:"grid grid-flow-col auto-cols-max gap-4"},RL=Ps(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imgnone"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/media/css_18.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},"  L\u2019oratorio e la parrocchia "),s(`
`),n("span",{class:"line"},"  San Giovanni Bosco, espressioni "),s(`
`),n("span",{class:"line"},"  ......"),s(`
`),n("span",{class:"line"},"  nella Diocesi e nella citt\xE0 di Torino."),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1)),FL=Ps(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token selector"},"#imgnone"),s(),n("span",{class:"token punctuation"},"{"),s()]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" right"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),DL=Ps(()=>n("div",null,[K(" col3 "),n("p",{style:{width:"320px"}},[n("img",{id:"imgnone",src:Na}),s(" L\u2019oratorio e la parrocchia San Giovanni Bosco, espressioni ...... nella Diocesi e nella citt\xE0 di Torino. ")])],-1)),HL={__name:"119",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[ML,PL,OL,n("div",AL,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[RL]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[FL]),_:1},16)]),DL])]),_:1},16)}}},NL=Sn(HL,[["__scopeId","data-v-806cd720"]]);const Os=e=>(Cn("data-v-e4e03818"),e=e(),In(),e),jL=Os(()=>n("h1",null,"CSS",-1)),qL=Os(()=>n("p",null,"Layout - Float",-1)),BL=Os(()=>n("h3",null,"div float",-1)),WL={class:"grid grid-flow-col auto-cols-max gap-4"},VL=Os(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("affonda"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("no float"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("affonda"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("no float"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("affonda"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("no float"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("galleggia"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("float left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("galleggia"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("float left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("galleggia"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("float left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),KL=Os(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".affonda"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("1px solid"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s("30px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".galleggia"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("1px solid"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s("30px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),UL=Os(()=>n("div",null,[K(" col3 "),n("div",{class:"affonda"},"no float"),n("div",{class:"affonda"},"no float"),n("div",{class:"affonda"},"no float"),n("div",{class:"galleggia"},"float left"),n("div",{class:"galleggia"},"float left"),n("div",{class:"galleggia"},"float left")],-1)),GL={__name:"120",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[jL,qL,BL,n("div",WL,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[VL]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[KL]),_:1},16)]),UL])]),_:1},16)}}},YL=Sn(GL,[["__scopeId","data-v-e4e03818"]]),ad="/TPSI/4/css/assets/css_19.dce21abe.jpg",QL=n("h1",null,"Esercizio css_21",-1),ZL=n("p",null,"Barra Navigazione orizzontale",-1),JL=n("ol",null,[n("li",null,[s("Creare un file e salvarlo come "),n("em",null,"|cognome|_esercizio_css_21.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_21.css")]),n("li",null,[s("Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche: "),n("ol",null,[n("li",null,[s("Deve includere le seguenti voci: "),n("code",null,"Home, ATS, Servizi, Contatti, About")]),n("li",null,"Si deve usare solo una lista"),n("li",null,"La barra di navigazione deve avere un colore di sfondo"),n("li",null,"Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_21.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_21.css")],-1),XL=n("br",null,null,-1),nM=n("img",{src:ad,width:"500"},null,-1),eM={__name:"121",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[QL,ZL,JL,XL,b(i,null,{default:g(()=>[nM]),_:1})]),_:1},16)}}},tM=n("h1",null,"Esercizio css_22",-1),sM=n("p",null,"Barra Navigazione orizzontale",-1),oM=n("ol",null,[n("li",null,[s("Creare un file e salvarlo come "),n("em",null,"|cognome|_esercizio_css_22.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_22.css")]),n("li",null,[s("Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche: "),n("ol",null,[n("li",null,[s("Deve includere le seguenti voci: "),n("code",null,"Home, ATS, Servizi, Contatti, About")]),n("li",null,"NON si pu\xF2 usare una lista"),n("li",null,"La barra di navigazione deve avere un colore di sfondo"),n("li",null,"Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_22.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_22.css")],-1),aM=n("br",null,null,-1),iM=n("img",{src:ad,width:"500"},null,-1),lM={__name:"122",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[tM,sM,oM,aM,b(i,null,{default:g(()=>[iM]),_:1})]),_:1},16)}}},rM=n("h1",{class:"sezione"},"Elementi allineati",-1),cM={__name:"123",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[rM]),_:1},16))}},pM=n("h1",null,"CSS",-1),uM=n("p",null,"Layout - Align",-1),dM=n("ul",null,[n("li",null,"Nello sviluppo di una pagina web risulta molto utile poter allineare i vari elementi"),n("li",null,"Per esempio \xE8 utile allineare il testo orizzontalmente o verticalmente, centrarlo, etc\u2026"),n("li",null,"Risulta spesso necessario allineare una o pi\xF9 immagini"),n("li",null,"In modo analogo \xE8 utile allineare anche altri tipi di tag per poter ottenere il layout desiderato ed essere sicuri che appaia allo stesso modo su ogni browser"),n("li",null,"Per far ci\xF2 CSS non mette a disposizione un\u2019unica ma caso per caso \xE8 necessario usare tecniche specifiche.")],-1),mM={__name:"124",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[pM,uM,dM]),_:1},16))}};const Po=e=>(Cn("data-v-6877b926"),e=e(),In(),e),fM=Po(()=>n("h1",null,"CSS",-1)),hM=Po(()=>n("p",null,"Layout - Align del testo",-1)),gM={class:"grid grid-flow-col auto-cols-max gap-8"},_M=Po(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("centerhv"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Testo allineato ")]),s(`
`),n("span",{class:"line"},"    orizzontalmente e "),s(`
`),n("span",{class:"line"},"    verticalmente"),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),vM=Po(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},".centerhv"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid green"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),kM=Po(()=>n("div",null,[K(" col3 "),n("div",{class:"centerhv"},[n("p",null,"Testo allineato orizzontalmente e verticalmente")])],-1)),yM={__name:"125",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[fM,hM,n("div",gM,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[_M]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[vM]),_:1},16)]),kM])]),_:1},16)}}},bM=Sn(yM,[["__scopeId","data-v-6877b926"]]);const Oo=e=>(Cn("data-v-b279125c"),e=e(),In(),e),xM=Oo(()=>n("h1",null,"CSS",-1)),SM=Oo(()=>n("p",null,"Layout - Align di un div",-1)),wM={class:"grid grid-flow-col auto-cols-max gap-8"},zM=Oo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Testo allineato ")]),s(`
`),n("span",{class:"line"},"      orizzontalmente e "),s(`
`),n("span",{class:"line"},"      verticalmente"),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),$M=Oo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},".parent"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid green"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("   "),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},".child"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid blue"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 50%"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s()]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),CM=Oo(()=>n("div",null,[K(" col3 "),n("div",{class:"parent"},[n("div",{class:"child"},[n("p",null,"Testo allineato orizzontalmente e verticalmente")])])],-1)),IM={__name:"126",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[xM,SM,n("div",wM,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[zM]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[$M]),_:1},16)]),CM])]),_:1},16)}}},TM=Sn(IM,[["__scopeId","data-v-b279125c"]]);const Ao=e=>(Cn("data-v-94b52373"),e=e(),In(),e),EM=Ao(()=>n("h1",null,"CSS",-1)),LM=Ao(()=>n("p",null,"Layout - Align di un img",-1)),MM={class:"grid grid-flow-col auto-cols-max gap-4"},PM=Ao(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h3")]),n("span",{class:"token punctuation"},">")]),s("Immagine centrata"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h3")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("img1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/media/css_18.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),OM=Ao(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#parent"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid green"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 250px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#img1"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),AM=Ao(()=>n("div",null,[K(" col3 "),n("h3",null,"Immagine centrata"),n("br"),n("div",{id:"parent"},[n("img",{id:"img1",src:Na})])],-1)),RM={__name:"127",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[EM,LM,n("div",MM,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[PM]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[OM]),_:1},16)]),AM])]),_:1},16)}}},FM=Sn(RM,[["__scopeId","data-v-94b52373"]]),DM=n("h1",null,"Esercizio css_23",-1),HM=n("p",null,"Foto Gallery",-1),NM=n("ol",null,[n("li",null,[s("Creare un file e salvarlo come "),n("em",null,"|cognome|_esercizio_css_23.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_23.css")]),n("li",null,[s("Creare in HTML (solo markuo) e CSS(tutti gli stili) una foto gallery con le seguenti caratteristiche "),n("ol",null,[n("li",null,"centrata rispetto alla pagina con bordo di 20px blu chiaro"),n("li",null,"contiene 5 colonne"),n("li",null,"ogni colonna contiene un immagine con larghezza pari a 150px"),n("li",null,"ogni colonna contiene al fondo una didascalia centrata e con carattere in bold"),n("li",null,"ogni colonna ha un bordo di 1px"),n("li",null,"le colonne sono distanziate di 5px"),n("li",null,[s("per uniformit\xE0 usare la seguente immagine "),n("a",{href:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1717px-Tux.svg.png",target:"_blank",rel:"noopener"},"TUX")]),n("li",null,"non si pu\xF2 utilizzare una tabella ma bisogna usare i DIV")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_23.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_23.css")],-1),jM={__name:"128",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[DM,HM,NM]),_:1},16))}},qM="/TPSI/4/css/assets/css_23.781727e0.png",BM=n("h1",null,"Esercizio css_23",-1),WM=n("p",null,"Foto Gallery",-1),VM=n("img",{src:qM,width:"500"},null,-1),KM={__name:"129",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[BM,WM,b(i,null,{default:g(()=>[VM]),_:1})]),_:1},16)}}},UM=n("h1",{class:"sezione"},"La posizione degli elementi",-1),GM={__name:"130",setup(e){const t={layout:"section"};return x($),(o,a)=>(k(),z(ne,T(I(t)),{default:g(()=>[UM]),_:1},16))}},YM=n("h1",null,"CSS",-1),QM=n("p",null,"Layout - Position",-1),ZM=n("ul",null,[n("li",null,[s("CSS permette di specificare la posizione di un elemento rispetto alla pagina o rispetto al suo contenitore tramite la propriet\xE0 "),n("code",null,"position: <value>")]),n("li",null,[s("Ci sono 5 possibili valori per questa propriet\xE0: "),n("ol",null,[n("li",null,[n("em",null,[n("strong",null,"static")]),s(" : "),n("em",null,"(default)"),s(" l\u2019elemento non \xE8 posizionato in nessun modo speciale, ma nella posizione in cui appare nel markup")]),n("li",null,[n("em",null,[n("strong",null,"relative")]),s(" : l\u2019elemento \xE8 posizionato relativamente alla sua posizione di default")]),n("li",null,[n("em",null,[n("strong",null,"fixed")]),s(" : l\u2019elemento \xE8 fisso rispetto al viewport, quindi rimarr\xE0 fermo anche se la pagine far\xE0 uno scroll")]),n("li",null,[n("em",null,[n("strong",null,"absolute")]),s(" : l\u2019elemento \xE8 posizionato in maniera assoluta rispetto al suo contenitore o in assenza al body")]),n("li",null,[n("em",null,[n("strong",null,"sticky")]),s(" : l\u2019elemento \xE8 posizionato in funzione della posizione di scroll")])])])],-1),JM={__name:"131",setup(e){const t={};return x($),(o,a)=>(k(),z(O,T(I(t)),{default:g(()=>[YM,QM,ZM]),_:1},16))}};const As=e=>(Cn("data-v-16ab5a4e"),e=e(),In(),e),XM=As(()=>n("h1",null,"CSS",-1)),n8=As(()=>n("p",null,"Layout - Position - Static e Relative",-1)),e8=As(()=>n("ul",null,[n("li",null,[s("Per posizionare un elemento in modo relativo si usano le propriet\xE0 "),n("code",null,"top - bottom - right - left")])],-1)),t8={class:"grid grid-flow-col auto-cols-max gap-4"},s8=As(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Elemento posizionato ")]),s(`
`),n("span",{class:"line"},[s("      in modo relativo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),o8=As(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#parent"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid green"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 150px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#child"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid blue"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),a8=As(()=>n("div",null,[K(" col3 "),n("div",{id:"parent"},[n("div",{id:"child"},[n("p",null,"Elemento posizionato in modo relativo")])])],-1)),i8={__name:"132",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[XM,n8,e8,n("div",t8,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[s8]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[o8]),_:1},16)]),a8])]),_:1},16)}}},l8=Sn(i8,[["__scopeId","data-v-16ab5a4e"]]);const Ro=e=>(Cn("data-v-940eea5d"),e=e(),In(),e),r8=Ro(()=>n("h1",null,"CSS",-1)),c8=Ro(()=>n("p",null,"Layout - Position - Fixed",-1)),p8={class:"grid grid-flow-col auto-cols-max gap-4"},u8=Ro(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Elemento posizionato ")]),s(`
`),n("span",{class:"line"},[s("      in modo fixed"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),d8=Ro(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"#parent"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid green"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 150px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#child"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid blue"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" fixed"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),m8=Ro(()=>n("div",null,[K(" col3 "),n("div",{id:"parent"},[n("div",{id:"child"},[n("p",null,"Elemento posizionato in modo fixed")])])],-1)),f8={__name:"133",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[r8,c8,n("div",p8,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[u8]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[d8]),_:1},16)]),m8])]),_:1},16)}}},h8=Sn(f8,[["__scopeId","data-v-940eea5d"]]);const Fo=e=>(Cn("data-v-485c9ba6"),e=e(),In(),e),g8=Fo(()=>n("h1",null,"CSS",-1)),_8=Fo(()=>n("p",null,"Layout - Position - Absolute",-1)),v8={class:"grid grid-flow-col auto-cols-max gap-4"},k8=Fo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Elemento posizionato ")]),s(`
`),n("span",{class:"line"},[s("      in modo absolute"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),y8=Fo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"#parent"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid green"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 150px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#child"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid blue"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 60px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),b8=Fo(()=>n("div",null,[K(" col3 "),n("div",{id:"parent"},[n("div",{id:"child"},[n("p",null,"Elemento posizionato in modo absolute")])])],-1)),x8={__name:"134",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[g8,_8,n("div",v8,[n("div",null,[K(" col1 "),b(i,G({},{ranges:[""]}),{default:g(()=>[k8]),_:1},16)]),n("div",null,[K(" col2 "),b(i,G({},{ranges:[""]}),{default:g(()=>[y8]),_:1},16)]),b8])]),_:1},16)}}},S8=Sn(x8,[["__scopeId","data-v-485c9ba6"]]),w8=n("h1",null,"CSS",-1),z8=n("p",null,"Layout - Position - Sticky",-1),$8=n("p",null,[n("em",null,"Aprire la seguente pagina"),s(),n("a",{href:"../support/position_sticky_css_slide.html",target:"_blank",rel:"noopener"},"sticky")],-1),C8=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sticky"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("I am sticky e non mi muovo!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scrolldiv"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, .... "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1),I8=n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"div.sticky"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" sticky"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #0ca00c"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid #0a7c0d"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},".scrolldiv"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"padding-bottom"),n("span",{class:"token punctuation"},":"),s("2000px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),T8={__name:"135",setup(e){const t={};return x($),(o,a)=>{const i=hn;return k(),z(O,T(I(t)),{default:g(()=>[w8,z8,$8,b(i,G({},{ranges:[""]}),{default:g(()=>[C8]),_:1},16),b(i,G({},{ranges:[""]}),{default:g(()=>[I8]),_:1},16)]),_:1},16)}}},E8="/TPSI/4/css/assets/css_20.4695063c.jpg",L8=n("h1",null,"Esercizio css_24",-1),M8=n("p",null,"Position",-1),P8=n("ol",null,[n("li",null,[s("Creare un file e salvarlo come "),n("em",null,"|cognome|_esercizio_css_24.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_24.css")]),n("li",null,"Creare in HTML e CSS il posizionamento di una stringa su di un immagine, in modo che la stringa sia posizionata nell\u2019angolo in alto a sinistra"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_24.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_24.css")],-1),O8=n("br",null,null,-1),A8=n("img",{src:E8,width:"500"},null,-1),R8={__name:"136",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[L8,M8,P8,O8,b(i,null,{default:g(()=>[A8]),_:1})]),_:1},16)}}},F8="/TPSI/4/css/assets/css_21.d37e4564.jpg",D8=n("p",null,"\xA0",-1),H8=n("img",{src:F8,width:"800"},null,-1),N8={__name:"137",setup(e){const t={};return x($),(o,a)=>{const i=qn("center");return k(),z(O,T(I(t)),{default:g(()=>[D8,b(i,null,{default:g(()=>[H8]),_:1})]),_:1},16)}}},j8=[{path:"1",name:"page-1",component:oy,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.3.8",title:"Cascading Style Sheets",slide:{raw:`---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
version: '1.3.8'
---  

# Cascading Style Sheets

Anche l'occhio vuole la sua parte

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

`,title:"Cascading Style Sheets",level:1,content:`# Cascading Style Sheets

Anche l'occhio vuole la sua parte

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.3.8",title:"Cascading Style Sheets"},index:0,start:0,end:27,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:hy,meta:{slide:{raw:`
# CSS

Cascading Style Sheets - Fogli di Stile

Un documento o pagina HTML \xE8 composto da tre parti principali:
### Struttura 
La sua componente logica e semantica: indica come suddividere il contenuto in elementi, eventualmente suddivisi in sottoelementi e cos\xEC via in una sorta di gerarchia ad albero. Ad esempio, questo documento ha un titolo e una successione di sezioni/paragrafi aperte a loro volta da un titolo.

### Contenuto
Generalmente costituito dalle parole e risorse, di diversa natuera, che compongono il documento (testo, immagine, audio e video).

### Stile
Descrizione sul come visualizzare il documento su un particolare dispositivo o supporto. Un documento stampato su carta avr\xE0 uno stile diverso rispetto allo stesso documento formattato per una piattaforma mobile. Lo stile quindi influisce su come un documento HTML viene visualizzato su dispositivi e condizioni diverse.

`,title:"CSS",level:1,content:`# CSS

Cascading Style Sheets - Fogli di Stile

Un documento o pagina HTML \xE8 composto da tre parti principali:
### Struttura 
La sua componente logica e semantica: indica come suddividere il contenuto in elementi, eventualmente suddivisi in sottoelementi e cos\xEC via in una sorta di gerarchia ad albero. Ad esempio, questo documento ha un titolo e una successione di sezioni/paragrafi aperte a loro volta da un titolo.

### Contenuto
Generalmente costituito dalle parole e risorse, di diversa natuera, che compongono il documento (testo, immagine, audio e video).

### Stile
Descrizione sul come visualizzare il documento su un particolare dispositivo o supporto. Un documento stampato su carta avr\xE0 uno stile diverso rispetto allo stesso documento formattato per una piattaforma mobile. Lo stile quindi influisce su come un documento HTML viene visualizzato su dispositivi e condizioni diverse.`,frontmatter:{},index:1,start:28,end:44,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:wy,meta:{slide:{raw:`
# CSS

Cascading Style Sheets - Fogli di Stile

- *C*ascading *S*tyle *S*heets (CSS) \xE8 un semplice meccanismo ed un linguaggio per definire lo stile (fonts, colors, spacing) e descrivere l'aspetto e il layout di un documento HTML.
- La prima versione viene introdotta dal W3C nel 1996.  Oggiamo siamo alla versione 3 - CSS3
- CSS descrive come i vari elementi HTML devono essere visualizzati (colore, dimensione, font, bordo, ...) ==> **no descrizione semantica**.

<div grid="~ cols-3 gap-12">
  <v-click>
  <div>
    <br />
    <h1>Titolo</h1>
    <h1 style="color: red;">Titolo</h1>
    <h1 style="color: green; background: yellow;">Titolo</h1>
    <h1 style="color: gray;border: 4px dotted black;">Titolo</h1>
  </div>
  </v-click>
  <v-click>
  <div class="col-span-2">

  \`\`\`html

  <h1>Titolo</h1>


  <h1 style="color:red;">Titolo</h1>


  <h1 style="color:green; background:yellow;">Titolo</h1>


  <h1 style="color:gray;border:4px dotted;">Titolo</h1>
  \`\`\`
  </div>
  </v-click>
<div></div>
</div>

`,title:"CSS",level:1,content:`# CSS

Cascading Style Sheets - Fogli di Stile

- *C*ascading *S*tyle *S*heets (CSS) \xE8 un semplice meccanismo ed un linguaggio per definire lo stile (fonts, colors, spacing) e descrivere l'aspetto e il layout di un documento HTML.
- La prima versione viene introdotta dal W3C nel 1996.  Oggiamo siamo alla versione 3 - CSS3
- CSS descrive come i vari elementi HTML devono essere visualizzati (colore, dimensione, font, bordo, ...) ==> **no descrizione semantica**.

<div grid="~ cols-3 gap-12">
  <v-click>
  <div>
    <br />
    <h1>Titolo</h1>
    <h1 style="color: red;">Titolo</h1>
    <h1 style="color: green; background: yellow;">Titolo</h1>
    <h1 style="color: gray;border: 4px dotted black;">Titolo</h1>
  </div>
  </v-click>
  <v-click>
  <div class="col-span-2">

  \`\`\`html

  <h1>Titolo</h1>


  <h1 style="color:red;">Titolo</h1>


  <h1 style="color:green; background:yellow;">Titolo</h1>


  <h1 style="color:gray;border:4px dotted;">Titolo</h1>
  \`\`\`
  </div>
  </v-click>
<div></div>
</div>`,frontmatter:{},index:2,start:45,end:86,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Iy,meta:{slide:{raw:`
# CSS

Cascading Style Sheets - Fogli di Stile

- Il nome *cascading* deriva dallo schema di priorit\xE0 con cui viene scelto quale stile applicare ad un dato elemento (stile viene applicato dall'alto al basso).
- CSS \xE8 progettato per separare il contenuto dalla presentazione [[Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)]. 
- In altre parole **HTML** descrive la semantica di una pagina, mentre **CSS** descrive lo stile grafico e come deve apparire.
- Questa separazione fornisce molti vantaggi, tra cui la possibilit\xE0 di riusare lo stesso markup e visualizzarlo in modo diversi su dispositivi diversi.
- Normalmente lo stile di una pagina si definisce in un file esterno \`.css\`
- Permette anche di automentare la *manutenibilit\xE0* di un sito web, di separare il sito in aree funzionali diverse e di permettere la cooperazione tra diverse professionalit\xE0 all'interno del gruppo di lavoro.

`,title:"CSS",level:1,content:`# CSS

Cascading Style Sheets - Fogli di Stile

- Il nome *cascading* deriva dallo schema di priorit\xE0 con cui viene scelto quale stile applicare ad un dato elemento (stile viene applicato dall'alto al basso).
- CSS \xE8 progettato per separare il contenuto dalla presentazione [[Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)]. 
- In altre parole **HTML** descrive la semantica di una pagina, mentre **CSS** descrive lo stile grafico e come deve apparire.
- Questa separazione fornisce molti vantaggi, tra cui la possibilit\xE0 di riusare lo stesso markup e visualizzarlo in modo diversi su dispositivi diversi.
- Normalmente lo stile di una pagina si definisce in un file esterno \`.css\`
- Permette anche di automentare la *manutenibilit\xE0* di un sito web, di separare il sito in aree funzionali diverse e di permettere la cooperazione tra diverse professionalit\xE0 all'interno del gruppo di lavoro.`,frontmatter:{},index:3,start:87,end:100,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Fy,meta:{slide:{raw:`
# CSS

Il [sito web](https://www.w3schools.com/) del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.

### HTML
- [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)
- [https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp)
- [https://htmlreference.io/](https://htmlreference.io/)

### CSS

- [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)
- [https://www.w3schools.com/cssref/default.asp](https://www.w3schools.com/cssref/default.asp)
- [https://cssreference.io/](https://cssreference.io/)

### Java Script

- [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)
- [https://www.w3schools.com/jsref/default.asp](https://www.w3schools.com/jsref/default.asp)
- [https://devdocs.io/javascript/](https://devdocs.io/javascript/)
- [https://javascript.info/](https://javascript.info/)

`,title:"CSS",level:1,content:`# CSS

Il [sito web](https://www.w3schools.com/) del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.

### HTML
- [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)
- [https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp)
- [https://htmlreference.io/](https://htmlreference.io/)

### CSS

- [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)
- [https://www.w3schools.com/cssref/default.asp](https://www.w3schools.com/cssref/default.asp)
- [https://cssreference.io/](https://cssreference.io/)

### Java Script

- [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)
- [https://www.w3schools.com/jsref/default.asp](https://www.w3schools.com/jsref/default.asp)
- [https://devdocs.io/javascript/](https://devdocs.io/javascript/)
- [https://javascript.info/](https://javascript.info/)`,frontmatter:{},index:4,start:101,end:125,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:jy,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Regole, dichiarazioni e sintassi CSS</h1>

`,content:'<h1 class="sezione">Regole, dichiarazioni e sintassi CSS</h1>',frontmatter:{layout:"section"},index:5,start:125,end:131,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Uy,meta:{slide:{raw:`
# CSS

Regole e Sintassi

- Un foglio di stile CSS (file .css) definisce una serie <u>**regole**</u> da applicare ad una pagina HTML
- Una regola di stile \xE8 composta da **2** parti:
  - <u>*Selettore*</u>: seleziona o punta ad uno o pi\xF9 elementi o tag HTML.
  - <u>*Blocco dichiarazione*</u>: contiene una o pi\xF9 dichiarazioni separate da un punto e virgola \`;\` e racchiuse tra \`{}\`
- Ogni *dichiarazione* descrive una **propriet\xE0 CSS** in base a:
  - <u>*nome*</u>: nome della propriet\xE0 CSS del tag HTML 
  - <u>*valore*</u>: valore assegnato alla propriet\xE0

<v-click>
<center>

![css_01.jpg](/media/css_01.jpg)

</center>
</v-click>
`,title:"CSS",level:1,content:`# CSS

Regole e Sintassi

- Un foglio di stile CSS (file .css) definisce una serie <u>**regole**</u> da applicare ad una pagina HTML
- Una regola di stile \xE8 composta da **2** parti:
  - <u>*Selettore*</u>: seleziona o punta ad uno o pi\xF9 elementi o tag HTML.
  - <u>*Blocco dichiarazione*</u>: contiene una o pi\xF9 dichiarazioni separate da un punto e virgola \`;\` e racchiuse tra \`{}\`
- Ogni *dichiarazione* descrive una **propriet\xE0 CSS** in base a:
  - <u>*nome*</u>: nome della propriet\xE0 CSS del tag HTML 
  - <u>*valore*</u>: valore assegnato alla propriet\xE0

<v-click>
<center>

![css_01.jpg](/media/css_01.jpg)

</center>
</v-click>`,frontmatter:{},index:6,start:132,end:153,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Tx,meta:{slide:{raw:`
# CSS

Regole e Sintassi

- I commenti per il CSS sono quelli del C tradizionale \`/*\` e \`*/\`

<br />

\`\`\`css
/* questo \xE8 un commento su una sola linea */
h1 { color: red; }



/* questo \xE8 un 
commento 
su pi\xF9 linee */
p1 { color: green; }
\`\`\`
`,title:"CSS",level:1,content:`# CSS

Regole e Sintassi

- I commenti per il CSS sono quelli del C tradizionale \`/*\` e \`*/\`

<br />

\`\`\`css
/* questo \xE8 un commento su una sola linea */
h1 { color: red; }



/* questo \xE8 un 
commento 
su pi\xF9 linee */
p1 { color: green; }
\`\`\``,frontmatter:{},index:7,start:154,end:175,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Lx,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Priorit\xE0 Cascade CSS</h1>

`,content:'<h1 class="sezione">Priorit\xE0 Cascade CSS</h1>',frontmatter:{layout:"section"},index:8,start:175,end:181,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Nx,meta:{slide:{raw:`
# CSS

Cascade Style

- Ci sono **3** modi per specificare lo stile di una pagina/elemento HTML:
  1. **Inline**
  2. **Internal**
  3. **External**

### Inline

- Uno stile *inline* normalmente si usa per alterare la visualizzazione di un singolo elemento all'interno di una pagina HTML.
- Per specificare uno stile *inline* basta inserire la <u>*dichiarazione CSS*</u> dentro l'attributo ***style*** del tag per cui si vuole definire lo stile.

<div grid="~ cols-2 gap-4">
  <v-click>
  <div>

  \`\`\`html
  <h1 style="color:red;">Titolo rosso</h1>
  \`\`\`

  <br />
  <h1 style="color:red;">Titolo rosso</h1>
  </div>
  </v-click>
  
  <v-click>
  <div>
  
  \`\`\`html
  <h1 style="border:1px solid;">Titolo boerdo</h1>
  \`\`\`
  <br />
  <h1 style="border:1px solid;">Titolo bordo</h1>
  </div>
  </v-click>
</div>
`,title:"CSS",level:1,content:`# CSS

Cascade Style

- Ci sono **3** modi per specificare lo stile di una pagina/elemento HTML:
  1. **Inline**
  2. **Internal**
  3. **External**

### Inline

- Uno stile *inline* normalmente si usa per alterare la visualizzazione di un singolo elemento all'interno di una pagina HTML.
- Per specificare uno stile *inline* basta inserire la <u>*dichiarazione CSS*</u> dentro l'attributo ***style*** del tag per cui si vuole definire lo stile.

<div grid="~ cols-2 gap-4">
  <v-click>
  <div>

  \`\`\`html
  <h1 style="color:red;">Titolo rosso</h1>
  \`\`\`

  <br />
  <h1 style="color:red;">Titolo rosso</h1>
  </div>
  </v-click>
  
  <v-click>
  <div>
  
  \`\`\`html
  <h1 style="border:1px solid;">Titolo boerdo</h1>
  \`\`\`
  <br />
  <h1 style="border:1px solid;">Titolo bordo</h1>
  </div>
  </v-click>
</div>`,frontmatter:{},index:9,start:182,end:222,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Gx,meta:{slide:{raw:`
# CSS

Cascade Style

### Inline

- Specificare lo stile inline come attributo del tag, presenta vari svantaggi:
  - Rende il codice HTML pi\xF9 difficoltoso da leggere
  - Non rispetta il principio [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself)
  - Proliferazione e duplicazione degli stili in una pagina di medio/alta complessit\xE0
  - **Viola** il principio di suddivisione della struttura/semantica di una pagina dallo stile di presentazione

<div grid="~ cols-2 gap-4">
  <v-click>
  <div>

  \`\`\`html
  <h1 style="color:red;">Titolo1 in rosso</h1>
  <h1 style="color:red;">Titolo2 in rosso</h1>

  \`\`\`

  <br />
  <h1 style="color:red;">Titolo1 in rosso</h1>
  <h1 style="color:red;">Titolo2 Titolo in rosso</h1>

  </div>
  </v-click>
  
  <v-click>
  <div>
  
  \`\`\`html
  <h1 style="color:red;">Titolo3 in rosso</h1>
  <h1 style="color:red;">Titolo4 in rosso</h1>
  \`\`\`
  <br />
  <h1 style="color:red;">Titolo3 in rosso</h1>
  <h1 style="color:red;">Titolo4 in rosso</h1>
  </div>
  </v-click>
</div>
`,title:"CSS",level:1,content:`# CSS

Cascade Style

### Inline

- Specificare lo stile inline come attributo del tag, presenta vari svantaggi:
  - Rende il codice HTML pi\xF9 difficoltoso da leggere
  - Non rispetta il principio [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself)
  - Proliferazione e duplicazione degli stili in una pagina di medio/alta complessit\xE0
  - **Viola** il principio di suddivisione della struttura/semantica di una pagina dallo stile di presentazione

<div grid="~ cols-2 gap-4">
  <v-click>
  <div>

  \`\`\`html
  <h1 style="color:red;">Titolo1 in rosso</h1>
  <h1 style="color:red;">Titolo2 in rosso</h1>

  \`\`\`

  <br />
  <h1 style="color:red;">Titolo1 in rosso</h1>
  <h1 style="color:red;">Titolo2 Titolo in rosso</h1>

  </div>
  </v-click>
  
  <v-click>
  <div>
  
  \`\`\`html
  <h1 style="color:red;">Titolo3 in rosso</h1>
  <h1 style="color:red;">Titolo4 in rosso</h1>
  \`\`\`
  <br />
  <h1 style="color:red;">Titolo3 in rosso</h1>
  <h1 style="color:red;">Titolo4 in rosso</h1>
  </div>
  </v-click>
</div>`,frontmatter:{},index:10,start:223,end:267,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Jx,meta:{slide:{raw:`
# Esercizio css_01

CSS Inline

1. Editare il file *|cognome|_esercizio_html_02.html* e salvarlo come *|cognome|_esercizio_css_01.html*
2. Definire lo stile inline per 4 tag \`h2\` e impostare il colore a rosso
3. Fornire il link github al file con nome |cognome|_esercizio_css_01.html


`,title:"Esercizio css_01",level:1,content:`# Esercizio css_01

CSS Inline

1. Editare il file *|cognome|_esercizio_html_02.html* e salvarlo come *|cognome|_esercizio_css_01.html*
2. Definire lo stile inline per 4 tag \`h2\` e impostare il colore a rosso
3. Fornire il link github al file con nome |cognome|_esercizio_css_01.html`,frontmatter:{},index:11,start:268,end:279,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:l2,meta:{slide:{raw:`
# CSS

Cascade Style

### Internal

- Per ovviare ai problemi degli stili *inline* \xE8 possibile specificare lo stile degli elementi di una pagina, all'interno (*internal*) della sezione \`<style>\` nell'header della pagina HTML. 
- All'interno della sezione \`<style>\` saranno prersenti le ***regole CSS*** da applicare a **TUTTA** la pagina.
- Normalmente lo stile *internal* si usa quando una pagina ha un unico stile.

<div grid="~ cols-2 gap-4">
  <v-click>
  <div>
 
\`\`\`html
<head>
    <title>Internal CSS</title>
    <style>
      h1 {color: red;} <!-- Regola CSS -->
    </style>
</head>
<html>
  <h1>Titolo in rosso</h1>
  <h1>Ancora un Titolo in rosso</h1>
  <h1>Ultimo Titolo in rosso</h1>
</html>
\`\`\`

  <br />

  </div>
  </v-click>
  
  <v-click>
  <div>
  
  <h1 style="color:red;">Titolo in rosso</h1>
  <h1 style="color:red;">Ancora un Titolo in rosso</h1>
  <h1 style="color:red;">Ultimo Titolo in rosso</h1>
  <br />
  </div>
  </v-click>
</div>

`,title:"CSS",level:1,content:`# CSS

Cascade Style

### Internal

- Per ovviare ai problemi degli stili *inline* \xE8 possibile specificare lo stile degli elementi di una pagina, all'interno (*internal*) della sezione \`<style>\` nell'header della pagina HTML. 
- All'interno della sezione \`<style>\` saranno prersenti le ***regole CSS*** da applicare a **TUTTA** la pagina.
- Normalmente lo stile *internal* si usa quando una pagina ha un unico stile.

<div grid="~ cols-2 gap-4">
  <v-click>
  <div>
 
\`\`\`html
<head>
    <title>Internal CSS</title>
    <style>
      h1 {color: red;} <!-- Regola CSS -->
    </style>
</head>
<html>
  <h1>Titolo in rosso</h1>
  <h1>Ancora un Titolo in rosso</h1>
  <h1>Ultimo Titolo in rosso</h1>
</html>
\`\`\`

  <br />

  </div>
  </v-click>
  
  <v-click>
  <div>
  
  <h1 style="color:red;">Titolo in rosso</h1>
  <h1 style="color:red;">Ancora un Titolo in rosso</h1>
  <h1 style="color:red;">Ultimo Titolo in rosso</h1>
  <br />
  </div>
  </v-click>
</div>`,frontmatter:{},index:12,start:280,end:326,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:u2,meta:{slide:{raw:`
# Esercizio css_02

CSS Internal

1. Editare il file *|cognome|_esercizio_css_01.html* e salvarlo come *|cognome|_esercizio_css_02.html*
2. Definire uno stile internal per i tag \`h2\` e impostare il colore a blue
3. Rispondere alle seguenti domande:
   - Tutti i tag h2 sono diventati blue?
   -  Perch\xE8? 
4. Fornire il link github al file con nome |cognome|_esercizio_css_02.html


`,title:"Esercizio css_02",level:1,content:`# Esercizio css_02

CSS Internal

1. Editare il file *|cognome|_esercizio_css_01.html* e salvarlo come *|cognome|_esercizio_css_02.html*
2. Definire uno stile internal per i tag \`h2\` e impostare il colore a blue
3. Rispondere alle seguenti domande:
   - Tutti i tag h2 sono diventati blue?
   -  Perch\xE8? 
4. Fornire il link github al file con nome |cognome|_esercizio_css_02.html`,frontmatter:{},index:13,start:327,end:341,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:g2,meta:{slide:{raw:`
# CSS

Cascade Style

### External

- Specificare lo style embedded nella pagina HTML, presenta alcuni svantaggi:
  - Rende il codice HTML pi\xF9 difficoltoso da leggere
  - Aumenta la dimensione della pagina html
  - Lo stile si applica ad una singola pagina web e deve essere replicato per altre pagien di un sito
- Per ovviare a questi problemi, \xE8 possibile specificare lo stile di una o pi\xF9 pagine (sito) attraverso un file \`.css\` esterno (*external style sheet*)
- In questo modo si ottiene la massima flessibilit\xE0 e per modificare lo stile di un elemento per **TUTTO** il sito basta fare una singola modifica.

`,title:"CSS",level:1,content:`# CSS

Cascade Style

### External

- Specificare lo style embedded nella pagina HTML, presenta alcuni svantaggi:
  - Rende il codice HTML pi\xF9 difficoltoso da leggere
  - Aumenta la dimensione della pagina html
  - Lo stile si applica ad una singola pagina web e deve essere replicato per altre pagien di un sito
- Per ovviare a questi problemi, \xE8 possibile specificare lo stile di una o pi\xF9 pagine (sito) attraverso un file \`.css\` esterno (*external style sheet*)
- In questo modo si ottiene la massima flessibilit\xE0 e per modificare lo stile di un elemento per **TUTTO** il sito basta fare una singola modifica.`,frontmatter:{},index:14,start:342,end:357,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:w2,meta:{slide:{raw:`
# CSS

Cascade Style

### External

- Quindi \xE8 possibile specificare lo stile come file esterno, utilizzanod il tag \`<link>\` all'interno della sezione \`<head>\` della pagina HTML.
- Nello specifico bisogna indicare quale file \`.css\` caricare in questo modo:

<br />

\`\`\`html
<link rel="stylesheet" href="path/to/file.css" type="text/css" />
\`\`\`     
dove:
- **rel="stylesheet"**: indica che il contenuto del file modificher\xE0 la parte di stile della pagina
- **href="path/to/file.css"**: indica la posizione del file .css (percorso relativo o assoluto)
- **type="text/css"**: indica che il file \xE8 di tipo style sheet (CSS)

`,title:"CSS",level:1,content:`# CSS

Cascade Style

### External

- Quindi \xE8 possibile specificare lo stile come file esterno, utilizzanod il tag \`<link>\` all'interno della sezione \`<head>\` della pagina HTML.
- Nello specifico bisogna indicare quale file \`.css\` caricare in questo modo:

<br />

\`\`\`html
<link rel="stylesheet" href="path/to/file.css" type="text/css" />
\`\`\`     
dove:
- **rel="stylesheet"**: indica che il contenuto del file modificher\xE0 la parte di stile della pagina
- **href="path/to/file.css"**: indica la posizione del file .css (percorso relativo o assoluto)
- **type="text/css"**: indica che il file \xE8 di tipo style sheet (CSS)`,frontmatter:{},index:15,start:358,end:379,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:P2,meta:{slide:{raw:`
# CSS

Cascade Style

### External

<div grid="~ cols-3 gap-4">
  <div grid="col-span-2">

index.html 
\`\`\`html
<!DOCTYPE html>
<html lang="it">
<head>
    <link rel="stylesheet" href="stile.css" type="text/css" />
    <title>External CSS</title>
</head>
<html>
  <h1>Titolo in rosso</h1>
  <h1>Ancora un Titolo in rosso</h1>
  <h1>Ancora un Titolo in rosso</h1>
  <h1>Ultimo Titolo in rosso</h1>
</html>
\`\`\`
  </div>
  <div>

stile.css
  \`\`\`html
  h1 {color: red;}
  \`\`\` 
  <h1 style="color:red;font-size: 24px;">Titolo in rosso</h1>
  <h1 style="color:red;font-size: 24px;">Ancora un Titolo in rosso</h1>
  <h1 style="color:red;font-size: 24px;">Ancora un Titolo in rosso</h1>
  <h1 style="color:red;font-size: 24px;">Ultimo Titolo in rosso</h1>
  </div>
</div>

`,title:"CSS",level:1,content:`# CSS

Cascade Style

### External

<div grid="~ cols-3 gap-4">
  <div grid="col-span-2">

index.html 
\`\`\`html
<!DOCTYPE html>
<html lang="it">
<head>
    <link rel="stylesheet" href="stile.css" type="text/css" />
    <title>External CSS</title>
</head>
<html>
  <h1>Titolo in rosso</h1>
  <h1>Ancora un Titolo in rosso</h1>
  <h1>Ancora un Titolo in rosso</h1>
  <h1>Ultimo Titolo in rosso</h1>
</html>
\`\`\`
  </div>
  <div>

stile.css
  \`\`\`html
  h1 {color: red;}
  \`\`\` 
  <h1 style="color:red;font-size: 24px;">Titolo in rosso</h1>
  <h1 style="color:red;font-size: 24px;">Ancora un Titolo in rosso</h1>
  <h1 style="color:red;font-size: 24px;">Ancora un Titolo in rosso</h1>
  <h1 style="color:red;font-size: 24px;">Ultimo Titolo in rosso</h1>
  </div>
</div>`,frontmatter:{},index:16,start:380,end:420,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:F2,meta:{slide:{raw:`
# Esercizio css_03

CSS External

1. Editare il file *|cognome|_esercizio_css_02.html* e salvarlo come *|cognome|_esercizio_css_03.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_03.css*
3. Definire uno stile external per i tag \`h1\` e \`h2\` e impostare il colore a verde
4. Rispondere alle seguenti domande:
   - Tutti i tag h1 e h2 sono diventati verdi?
   -  Perch\xE8? 
5. Fornire il link github al file con nome |cognome|_esercizio_css_03.html
6. Fornire il link github al file con nome |cognome|_esercizio_css_03.css


`,title:"Esercizio css_03",level:1,content:`# Esercizio css_03

CSS External

1. Editare il file *|cognome|_esercizio_css_02.html* e salvarlo come *|cognome|_esercizio_css_03.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_03.css*
3. Definire uno stile external per i tag \`h1\` e \`h2\` e impostare il colore a verde
4. Rispondere alle seguenti domande:
   - Tutti i tag h1 e h2 sono diventati verdi?
   -  Perch\xE8? 
5. Fornire il link github al file con nome |cognome|_esercizio_css_03.html
6. Fornire il link github al file con nome |cognome|_esercizio_css_03.css`,frontmatter:{},index:17,start:421,end:437,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:V2,meta:{slide:{raw:`
# CSS

Priorit\xE0 degli stili 

Come visto nelle lezioni e esercizi precedenti, lo stile di un elemento pu\xF2 essere definito in 3 posizioni diverse:
1. inline come attributo del tag
2. internal nella pagina
3. external in un file .css

Quindi, se per un elemento sono definiti 3 stili, **quale si applica?** 
- Gli stili si applicano in *cascata* (Cascade) secondo una priorit\xE0 dal livello pi\xF9 basso verso il livello pi\xF9 alto: 
  - se \xE8 solo presente uno stile external questo viene applicato
  - se \xE8 presente uno stile exgternal e uno stile internal, quello internal viene applicato
  - se sono presenti tutti e tre i livelli di stile, quello inline viene applicato

<div style="border: 1px solid black;margin: 15px; padding:15px; background: green; color: yellow;">
In altre parole viene applicato lo stile pi\xF9 vicino al tag.
</div>
`,title:"CSS",level:1,content:`# CSS

Priorit\xE0 degli stili 

Come visto nelle lezioni e esercizi precedenti, lo stile di un elemento pu\xF2 essere definito in 3 posizioni diverse:
1. inline come attributo del tag
2. internal nella pagina
3. external in un file .css

Quindi, se per un elemento sono definiti 3 stili, **quale si applica?** 
- Gli stili si applicano in *cascata* (Cascade) secondo una priorit\xE0 dal livello pi\xF9 basso verso il livello pi\xF9 alto: 
  - se \xE8 solo presente uno stile external questo viene applicato
  - se \xE8 presente uno stile exgternal e uno stile internal, quello internal viene applicato
  - se sono presenti tutti e tre i livelli di stile, quello inline viene applicato

<div style="border: 1px solid black;margin: 15px; padding:15px; background: green; color: yellow;">
In altre parole viene applicato lo stile pi\xF9 vicino al tag.
</div>`,frontmatter:{},index:18,start:438,end:458,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Y2,meta:{slide:{raw:`
# Esercizio css_04

CSS External

1. Editare il file *|cognome|_esercizio_css_03.html* e salvarlo come *|cognome|_esercizio_css_04.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_04.css*
3. Rimuovere tutti gli stili inline ed internal
4. Inserire tutti gli stilo solo come external
5. Rispondere alle seguenti domande:
   - Tutti i tag h1 e h2 sono diventati verdi?
   -  Perch\xE8? 
6. Fornire il link github al file con nome |cognome|_esercizio_css_04.html
7. Fornire il link github al file con nome |cognome|_esercizio_css_04.css



`,title:"Esercizio css_04",level:1,content:`# Esercizio css_04

CSS External

1. Editare il file *|cognome|_esercizio_css_03.html* e salvarlo come *|cognome|_esercizio_css_04.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_04.css*
3. Rimuovere tutti gli stili inline ed internal
4. Inserire tutti gli stilo solo come external
5. Rispondere alle seguenti domande:
   - Tutti i tag h1 e h2 sono diventati verdi?
   -  Perch\xE8? 
6. Fornire il link github al file con nome |cognome|_esercizio_css_04.html
7. Fornire il link github al file con nome |cognome|_esercizio_css_04.css`,frontmatter:{},index:19,start:459,end:477,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Z2,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">I Selettori</h1>

`,content:'<h1 class="sezione">I Selettori</h1>',frontmatter:{layout:"section"},index:20,start:477,end:483,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:eS,meta:{slide:{raw:`
# CSS

Selettori

- Come visto in precedenza, una regola CSS inizia sempre con un ***selettore***.
- Un selettore, "cerca" o seleziona uno o pi\xF9 tag HTML a cui applicare la regola CSS e quindi variarne lo stile.
- I selettori CSS possono essere divisi in **5** categorie:
  1. <u>***selettori Simple***</u> : selezionano un tag in base al nome, ad un ID o una classe
  2. <u>***selettori Combinator***</u> : selezionano elementi basandosi su specifiche relazioni tra essi
  3. <u>***selettori Pseudo-Class***</u> : selezionano tag in funzione di stati specifici
  4. <u>***selettori Pseudo-Elements***</u> : seleziona solo una parte di un tag
  5. <u>***selettori Attribute***</u> : seleziona tag in base a specifici attributi

`,title:"CSS",level:1,content:`# CSS

Selettori

- Come visto in precedenza, una regola CSS inizia sempre con un ***selettore***.
- Un selettore, "cerca" o seleziona uno o pi\xF9 tag HTML a cui applicare la regola CSS e quindi variarne lo stile.
- I selettori CSS possono essere divisi in **5** categorie:
  1. <u>***selettori Simple***</u> : selezionano un tag in base al nome, ad un ID o una classe
  2. <u>***selettori Combinator***</u> : selezionano elementi basandosi su specifiche relazioni tra essi
  3. <u>***selettori Pseudo-Class***</u> : selezionano tag in funzione di stati specifici
  4. <u>***selettori Pseudo-Elements***</u> : seleziona solo una parte di un tag
  5. <u>***selettori Attribute***</u> : seleziona tag in base a specifici attributi`,frontmatter:{},index:21,start:484,end:499,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:sS,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Selettori Simple</h1>

`,content:'<h1 class="sezione">Selettori Simple</h1>',frontmatter:{layout:"section"},index:22,start:499,end:505,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:_S,meta:{slide:{raw:`
# CSS

Selettori Simple

### element selector

- Il selettore ***element*** seleziona tag HTML in base al nome

Regola CSS: \`<nome tag> { dichiarazione CSS}\`

<br />

\`\`\`html
p { /* seleziona tutti i tag <p> */
    color: green;
    text-align: center; 
}
h1 { color: red;} /* seleziona tutti i tag <h1> */
\`\`\`
<div grid="~ cols-2 gap-4">
<div>
<v-click>

\`\`\`html

<h1>Titolo rosso</h1>
<h2>Sottotitolo senza stile</h2>
<p>
  Questo \xE8 un paragrafo con uno stile.
</p>
\`\`\`
</v-click>
</div>
<div>
<v-click>
<br />
<h1 style="color: red;">Titolo rosso</h1>
<h2>Sottotitolo senza stile</h2>
<p style="color:green;text-align:center;">
Questo \xE8 un paragrafo a cui \xE8 stato applicato uno stile.
</p>
</v-click>
</div>
</div>
`,title:"CSS",level:1,content:`# CSS

Selettori Simple

### element selector

- Il selettore ***element*** seleziona tag HTML in base al nome

Regola CSS: \`<nome tag> { dichiarazione CSS}\`

<br />

\`\`\`html
p { /* seleziona tutti i tag <p> */
    color: green;
    text-align: center; 
}
h1 { color: red;} /* seleziona tutti i tag <h1> */
\`\`\`
<div grid="~ cols-2 gap-4">
<div>
<v-click>

\`\`\`html

<h1>Titolo rosso</h1>
<h2>Sottotitolo senza stile</h2>
<p>
  Questo \xE8 un paragrafo con uno stile.
</p>
\`\`\`
</v-click>
</div>
<div>
<v-click>
<br />
<h1 style="color: red;">Titolo rosso</h1>
<h2>Sottotitolo senza stile</h2>
<p style="color:green;text-align:center;">
Questo \xE8 un paragrafo a cui \xE8 stato applicato uno stile.
</p>
</v-click>
</div>
</div>`,frontmatter:{},index:23,start:506,end:552,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:bS,meta:{slide:{raw:`
# Esercizio css_05

CSS element selector

1. Editare il file *|cognome|_esercizio_css_04.html* e salvarlo come *|cognome|_esercizio_css_05.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_05.css*
3. Definire lo stile esterno in modo che:
   - tutti i tag \`h1\` siano Rossi
   - tutti i tag \`h2\` siano Verdi
   - tutti i tag \`p\` siano Blue
4. Fornire il link github al file con nome |cognome|_esercizio_css_05.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_05.css



`,title:"Esercizio css_05",level:1,content:`# Esercizio css_05

CSS element selector

1. Editare il file *|cognome|_esercizio_css_04.html* e salvarlo come *|cognome|_esercizio_css_05.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_05.css*
3. Definire lo stile esterno in modo che:
   - tutti i tag \`h1\` siano Rossi
   - tutti i tag \`h2\` siano Verdi
   - tutti i tag \`p\` siano Blue
4. Fornire il link github al file con nome |cognome|_esercizio_css_05.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_05.css`,frontmatter:{},index:24,start:553,end:570,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:OS,meta:{slide:{raw:`
# CSS

Selettori Simple

### id selector

- Seleziona un tag con uno specifico valore per l'attributo *id*
- Il valore dell'attributo *id* per un tag deve essere **univoco** all'interno di una pagina e non pu\xF2 iniziare con un numero.
- Pertanto questo tipo di selettore \xE8 molto utile per selezionare un singolo elemento all'interno di una pagina.

Regola CSS: \`#<valore id> { dichiarazione CSS}\`

<div grid="~ cols-3 gap-4">
<div>
<v-click>

\`\`\`html
p { 
    color: green;
    text-align: left; 
}<!--seleziona tutti i tag p-->
#pr1 { 
  color: blue;
  text-align: right; 
}<!--seleziona il tag con
 id=prg1--> 
\`\`\`
</v-click>
</div>

<div>
<v-click>

\`\`\`html
<p>Parag element selector</p>

<p>Parag element selector</p>

<p id="pr1">Parag id select</p>

<p>Parag element selector</p>
\`\`\`
</v-click>
</div>

<div>
<v-click>
<p style="color:green;text-align:left;">Parag element selector</p>
<p style="color:green;text-align:left;">Parag element selector</p>
<p style="color:blue;text-align:right;">Parag id select</p>
<p style="color:green;text-align:left;">Parag element selector</p>
</v-click>
</div>
</div>

`,title:"CSS",level:1,content:`# CSS

Selettori Simple

### id selector

- Seleziona un tag con uno specifico valore per l'attributo *id*
- Il valore dell'attributo *id* per un tag deve essere **univoco** all'interno di una pagina e non pu\xF2 iniziare con un numero.
- Pertanto questo tipo di selettore \xE8 molto utile per selezionare un singolo elemento all'interno di una pagina.

Regola CSS: \`#<valore id> { dichiarazione CSS}\`

<div grid="~ cols-3 gap-4">
<div>
<v-click>

\`\`\`html
p { 
    color: green;
    text-align: left; 
}<!--seleziona tutti i tag p-->
#pr1 { 
  color: blue;
  text-align: right; 
}<!--seleziona il tag con
 id=prg1--> 
\`\`\`
</v-click>
</div>

<div>
<v-click>

\`\`\`html
<p>Parag element selector</p>

<p>Parag element selector</p>

<p id="pr1">Parag id select</p>

<p>Parag element selector</p>
\`\`\`
</v-click>
</div>

<div>
<v-click>
<p style="color:green;text-align:left;">Parag element selector</p>
<p style="color:green;text-align:left;">Parag element selector</p>
<p style="color:blue;text-align:right;">Parag id select</p>
<p style="color:green;text-align:left;">Parag element selector</p>
</v-click>
</div>
</div>`,frontmatter:{},index:25,start:571,end:628,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:KS,meta:{slide:{raw:`
# CSS

Selettori Simple

### id selector

<div class="grid grid-flow-col auto-cols-max gap-16">
<div>

\`\`\`html
<!-- seleziona tutti i tag <p> -->
p { 
    color: chartreuse;
    text-align: left; 
}
<!-- seleziona il tag con id=prg1--> 
#pr1 { 
  color: blue;
}
<!-- seleziona il tag con id=prg2--> 
#pr2 { 
  color: red; 
}
<!-- seleziona il tag con id=prg3--> 
#pr3 { 
 color: green; 
}
\`\`\`
</div>

<div>

\`\`\`html
<p>Paragrafo iniziale</p>

<p id="pr1">Paragrafo #1</p>

<p id="pr2">Paragrafo #2</p>

<p id="pr3">Paragrafo #3</p>

<p>Paragrafo finale</p>
\`\`\`
</div>

<div>
<v-click>
<p style="color:chartreuse;">Paragrafo iniziale</p>
<p style="color:blue;">Paragrafo #1</p>
<p style="color:red;">Paragrafo #2</p>
<p style="color:green;">Paragrafo #3</p>
<p style="color:chartreuse;">Paragrafo finale</p>
</v-click>
</div>
</div>
`,title:"CSS",level:1,content:`# CSS

Selettori Simple

### id selector

<div class="grid grid-flow-col auto-cols-max gap-16">
<div>

\`\`\`html
<!-- seleziona tutti i tag <p> -->
p { 
    color: chartreuse;
    text-align: left; 
}
<!-- seleziona il tag con id=prg1--> 
#pr1 { 
  color: blue;
}
<!-- seleziona il tag con id=prg2--> 
#pr2 { 
  color: red; 
}
<!-- seleziona il tag con id=prg3--> 
#pr3 { 
 color: green; 
}
\`\`\`
</div>

<div>

\`\`\`html
<p>Paragrafo iniziale</p>

<p id="pr1">Paragrafo #1</p>

<p id="pr2">Paragrafo #2</p>

<p id="pr3">Paragrafo #3</p>

<p>Paragrafo finale</p>
\`\`\`
</div>

<div>
<v-click>
<p style="color:chartreuse;">Paragrafo iniziale</p>
<p style="color:blue;">Paragrafo #1</p>
<p style="color:red;">Paragrafo #2</p>
<p style="color:green;">Paragrafo #3</p>
<p style="color:chartreuse;">Paragrafo finale</p>
</v-click>
</div>
</div>`,frontmatter:{},index:26,start:629,end:686,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:QS,meta:{slide:{raw:`
# Esercizio css_06

CSS id selector

1. Editare il file *|cognome|_esercizio_css_05.html* e salvarlo come *|cognome|_esercizio_css_06.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_06.css*
3. Usando gli id selector, definire lo stile esterno in modo che:
   - tutti i tag \`h1\` siano Blue
   - i tag \`h2\` numero 1,3,5 (partendo dall'alto) siano Rossi
   - i tag \`h2\` numero 2,4,6 (partendo dall'alto) siano Verdi
   - i tag \`p\` numero 1,3,5 (partendo dall'alto) siano Grigi
   - i tag \`p\` numero 2,4,6 (partendo dall'alto) siano Arancioni
4. Fornire il link github al file con nome |cognome|_esercizio_css_06.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_06.css



`,title:"Esercizio css_06",level:1,content:`# Esercizio css_06

CSS id selector

1. Editare il file *|cognome|_esercizio_css_05.html* e salvarlo come *|cognome|_esercizio_css_06.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_06.css*
3. Usando gli id selector, definire lo stile esterno in modo che:
   - tutti i tag \`h1\` siano Blue
   - i tag \`h2\` numero 1,3,5 (partendo dall'alto) siano Rossi
   - i tag \`h2\` numero 2,4,6 (partendo dall'alto) siano Verdi
   - i tag \`p\` numero 1,3,5 (partendo dall'alto) siano Grigi
   - i tag \`p\` numero 2,4,6 (partendo dall'alto) siano Arancioni
4. Fornire il link github al file con nome |cognome|_esercizio_css_06.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_06.css`,frontmatter:{},index:27,start:687,end:706,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:rw,meta:{slide:{raw:`
# CSS

Selettori Simple

### class selector

- Seleziona un tag con uno specifico valore per l'attributo *class*
- Il valore dell'attributo *class* pu\xF2 essere assegnato ad uno o pi\xF9 tag all'interno di una pagina e non pu\xF2 iniziare con un numero.
- Pertanto questo tipo di selettore \xE8 molto utile per selezionare una serie specifica di elementi all'interno di una pagina.

Regola CSS: \`.<valore class> { dichiarazione CSS}\`

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>
<v-click>

\`\`\`html
<!-- seleziona tutti i tag con class=rosso -->
.rosso { 
  color: red;
} 
\`\`\`
</v-click>
</div>

<div>
<v-click>

\`\`\`html
<p>Paragrafo semplice</p>

<p class="rosso">Paragrafo rosso</p>

<p>Paragrafo semplice</p>
\`\`\`
</v-click>
</div>

<div>
<v-click>
<p>Paragrafo semplice</p>
<p style="color:red;">Paragrafo rosso</p>
<p>Paragrafo semplice</p>
</v-click>
</div>
</div>
`,title:"CSS",level:1,content:`# CSS

Selettori Simple

### class selector

- Seleziona un tag con uno specifico valore per l'attributo *class*
- Il valore dell'attributo *class* pu\xF2 essere assegnato ad uno o pi\xF9 tag all'interno di una pagina e non pu\xF2 iniziare con un numero.
- Pertanto questo tipo di selettore \xE8 molto utile per selezionare una serie specifica di elementi all'interno di una pagina.

Regola CSS: \`.<valore class> { dichiarazione CSS}\`

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>
<v-click>

\`\`\`html
<!-- seleziona tutti i tag con class=rosso -->
.rosso { 
  color: red;
} 
\`\`\`
</v-click>
</div>

<div>
<v-click>

\`\`\`html
<p>Paragrafo semplice</p>

<p class="rosso">Paragrafo rosso</p>

<p>Paragrafo semplice</p>
\`\`\`
</v-click>
</div>

<div>
<v-click>
<p>Paragrafo semplice</p>
<p style="color:red;">Paragrafo rosso</p>
<p>Paragrafo semplice</p>
</v-click>
</div>
</div>`,frontmatter:{},index:28,start:707,end:755,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:bw,meta:{slide:{raw:`
# CSS

Selettori Simple

### class selector

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

\`\`\`html
<!-- seleziona tutti 
i tag <p> -->
p { 
    color: blue;
}

<!-- seleziona tutti 
i tag con class=rosso -->
.rosso { 
  color: red;
}

<!-- seleziona tutti 
i tag con class=verde-->
.verde {
  color: green;
}
\`\`\`
</div>

<div>

\`\`\`html
<p>Paragrafo iniziale</p>

<p class="rosso">Paragrafo rosso</p>

<p class="verde">Paragrafo verde</p>

<h2 class="verde">Sottotitolo verde</h2>

<p class="rosso">Paragrafo rosso</p>

<p>Paragrafo finale</p>
\`\`\`
</div>

<div>
<v-click>
<p style="color:blue;">Paragrafo iniziale</p>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:green;">Paragrafo verde</p>

<h2 style="color:green;">Sottotitolo verde</h2>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:blue;">Paragrafo finale</p>
</v-click>
</div>
</div>
`,title:"CSS",level:1,content:`# CSS

Selettori Simple

### class selector

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

\`\`\`html
<!-- seleziona tutti 
i tag <p> -->
p { 
    color: blue;
}

<!-- seleziona tutti 
i tag con class=rosso -->
.rosso { 
  color: red;
}

<!-- seleziona tutti 
i tag con class=verde-->
.verde {
  color: green;
}
\`\`\`
</div>

<div>

\`\`\`html
<p>Paragrafo iniziale</p>

<p class="rosso">Paragrafo rosso</p>

<p class="verde">Paragrafo verde</p>

<h2 class="verde">Sottotitolo verde</h2>

<p class="rosso">Paragrafo rosso</p>

<p>Paragrafo finale</p>
\`\`\`
</div>

<div>
<v-click>
<p style="color:blue;">Paragrafo iniziale</p>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:green;">Paragrafo verde</p>

<h2 style="color:green;">Sottotitolo verde</h2>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:blue;">Paragrafo finale</p>
</v-click>
</div>
</div>`,frontmatter:{},index:29,start:756,end:821,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:zw,meta:{slide:{raw:`
# Esercizio css_07

CSS class selector

1. Editare il file *|cognome|_esercizio_css_06.html* e salvarlo come *|cognome|_esercizio_css_07.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_07.css*
3. Usando i class selector, definire lo stile esterno in modo che:
   - tutti i tag \`h1\` siano Blue
   - i tag \`h2\` numero 1,3,5 (partendo dall'alto) siano Verdi
   - i tag \`h2\` numero 2,4,6 (partendo dall'alto) siano Rossi
   - i tag \`p\` numero 1,3,5 (partendo dall'alto) siano Arancioni
   - i tag \`p\` numero 2,4,6 (partendo dall'alto) siano Grigi
4. Fornire il link github al file con nome |cognome|_esercizio_css_07.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_07.css



`,title:"Esercizio css_07",level:1,content:`# Esercizio css_07

CSS class selector

1. Editare il file *|cognome|_esercizio_css_06.html* e salvarlo come *|cognome|_esercizio_css_07.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_07.css*
3. Usando i class selector, definire lo stile esterno in modo che:
   - tutti i tag \`h1\` siano Blue
   - i tag \`h2\` numero 1,3,5 (partendo dall'alto) siano Verdi
   - i tag \`h2\` numero 2,4,6 (partendo dall'alto) siano Rossi
   - i tag \`p\` numero 1,3,5 (partendo dall'alto) siano Arancioni
   - i tag \`p\` numero 2,4,6 (partendo dall'alto) siano Grigi
4. Fornire il link github al file con nome |cognome|_esercizio_css_07.html
5. Fornire il link github al file con nome |cognome|_esercizio_css_07.css`,frontmatter:{},index:30,start:822,end:841,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Lw,meta:{slide:{raw:`
# CSS

Selettori Simple

### grouping selector

- Seleziona una serie di tag in base al loro nome.
- In altre parole \xE8 un *element selector* multiplo che permette di applicare una stessa regola CSS a pi\xF9 tag contemporaneamente.
- Questo selettore \xE8 molto utile per applicare uno stile comune a pi\xF9 tag in una pagina. Semplifica notevolmente la manutenzione

Regola CSS: \`<nome tag1>, <nome tag2>, .... <nome tagN> { dichiarazione CSS}\`
`,title:"CSS",level:1,content:`# CSS

Selettori Simple

### grouping selector

- Seleziona una serie di tag in base al loro nome.
- In altre parole \xE8 un *element selector* multiplo che permette di applicare una stessa regola CSS a pi\xF9 tag contemporaneamente.
- Questo selettore \xE8 molto utile per applicare uno stile comune a pi\xF9 tag in una pagina. Semplifica notevolmente la manutenzione

Regola CSS: \`<nome tag1>, <nome tag2>, .... <nome tagN> { dichiarazione CSS}\``,frontmatter:{},index:31,start:842,end:855,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Kw,meta:{slide:{raw:`
# CSS

Selettori Simple

### grouping selector

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html

<!-- applica la regola CSS a tutti i tag 
<p> <h1> e <h2> --> 
p, h1, h2 {
  color: red;
}

<!-- applica la regola CSS a tutti i tag 
<h1> e <h2> --> 
h1,h2 {
  text-decoration: underline;
  text-decoration-color:blue;
}
\`\`\`
</div>

<div>
<v-click>

\`\`\`html

<h1>Titolo</h1>
<p>Paragrafo rosso</p>

<p>Paragrafo rosso</p>

<h2>Sottotitolo</h2>

<p>Paragrafo rosso</p>

<p>Paragrafo rosso</p>

<h3>Sotto sotto titolo</h3>

<h2>Sottotitolo</h2>
\`\`\`
</v-click>
</div>

<div>
<v-click>
<h1 style="color:red;text-decoration: underline;text-decoration-color:blue;">Titolo</h1>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:red;">Paragrafo rosso</p>

<h2 style="color:red;text-decoration: underline;text-decoration-color:blue;">Sottotitolo</h2>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:red;">Paragrafo rosso</p>

<h3>Sotto sotto titolo</h3>

<h2 style="color:red;text-decoration: underline;text-decoration-color:blue;">Sottotitolo</h2>

</v-click>
</div>
</div>

`,title:"CSS",level:1,content:`# CSS

Selettori Simple

### grouping selector

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html

<!-- applica la regola CSS a tutti i tag 
<p> <h1> e <h2> --> 
p, h1, h2 {
  color: red;
}

<!-- applica la regola CSS a tutti i tag 
<h1> e <h2> --> 
h1,h2 {
  text-decoration: underline;
  text-decoration-color:blue;
}
\`\`\`
</div>

<div>
<v-click>

\`\`\`html

<h1>Titolo</h1>
<p>Paragrafo rosso</p>

<p>Paragrafo rosso</p>

<h2>Sottotitolo</h2>

<p>Paragrafo rosso</p>

<p>Paragrafo rosso</p>

<h3>Sotto sotto titolo</h3>

<h2>Sottotitolo</h2>
\`\`\`
</v-click>
</div>

<div>
<v-click>
<h1 style="color:red;text-decoration: underline;text-decoration-color:blue;">Titolo</h1>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:red;">Paragrafo rosso</p>

<h2 style="color:red;text-decoration: underline;text-decoration-color:blue;">Sottotitolo</h2>

<p style="color:red;">Paragrafo rosso</p>

<p style="color:red;">Paragrafo rosso</p>

<h3>Sotto sotto titolo</h3>

<h2 style="color:red;text-decoration: underline;text-decoration-color:blue;">Sottotitolo</h2>

</v-click>
</div>
</div>`,frontmatter:{},index:32,start:856,end:929,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Qw,meta:{slide:{raw:`
# Esercizio css_08

CSS simple selector

1. Editare il file *|cognome|_esercizio_css_07.html* e salvarlo come *|cognome|_esercizio_css_08.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_08.css*
3. definire lo stile per tutti gli heading h1, he e h3 con colore rosso e sottolineatura grigia
4. definire lo stile per tutti i paragrafi con colore blue e allineamento del testo a sinistra
5. definire lo stile per il terzo heading h2 con colore verde
6. definire lo stile per il settimo paragrafo con colore rosso e allineamento del testo a destra
7. definire lo stile per tutti i tag \`<hr>\` pari con colore nero e spessore 10px (contando dal primo tag hr)
8. definire lo stile per tutti i tag \`<hr>\` dispari con colore rosso e spessore 3px (contando dal primo tag hr)
9. Fornire il link github al file con nome |cognome|_esercizio_css_08.html
10. Fornire il link github al file con nome |cognome|_esercizio_css_08.css


`,title:"Esercizio css_08",level:1,content:`# Esercizio css_08

CSS simple selector

1. Editare il file *|cognome|_esercizio_css_07.html* e salvarlo come *|cognome|_esercizio_css_08.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_08.css*
3. definire lo stile per tutti gli heading h1, he e h3 con colore rosso e sottolineatura grigia
4. definire lo stile per tutti i paragrafi con colore blue e allineamento del testo a sinistra
5. definire lo stile per il terzo heading h2 con colore verde
6. definire lo stile per il settimo paragrafo con colore rosso e allineamento del testo a destra
7. definire lo stile per tutti i tag \`<hr>\` pari con colore nero e spessore 10px (contando dal primo tag hr)
8. definire lo stile per tutti i tag \`<hr>\` dispari con colore rosso e spessore 3px (contando dal primo tag hr)
9. Fornire il link github al file con nome |cognome|_esercizio_css_08.html
10. Fornire il link github al file con nome |cognome|_esercizio_css_08.css`,frontmatter:{},index:33,start:930,end:948,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Jw,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Selettori Combinator</h1>

`,content:'<h1 class="sezione">Selettori Combinator</h1>',frontmatter:{layout:"section"},index:34,start:948,end:954,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:a3,meta:{slide:{raw:`
# Document Object Model

DOM

- Ogni tag e elemento HTML \xE8 un **oggetto**
- Quando una pagina web \xE8 caricata, il browser crea una rappresentazione ad albero dei suoi elementi.
- Questo albero si chiama ***Document Object Model*** o ***DOM***.

\`il DOM \xE8 una rappresentazione ad albero degli oggetti della pagina HTML\`


<center>
<img src="/media/css_02.jpg" width="500" />
</center>

`,title:"Document Object Model",level:1,content:`# Document Object Model

DOM

- Ogni tag e elemento HTML \xE8 un **oggetto**
- Quando una pagina web \xE8 caricata, il browser crea una rappresentazione ad albero dei suoi elementi.
- Questo albero si chiama ***Document Object Model*** o ***DOM***.

\`il DOM \xE8 una rappresentazione ad albero degli oggetti della pagina HTML\`


<center>
<img src="/media/css_02.jpg" width="500" />
</center>`,frontmatter:{},index:35,start:955,end:972,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:c3,meta:{slide:{raw:`
# Document Object Model

DOM

- Il DOM si manipola atraverso l'oggetto pi\xF9 di alto livello **Document**
- \`html\` \xE8 il Root element del DOM
- La manipolazione del DOM da parte di JavaScript \xE8 alla base del moderno paradigma di sviluppo web, infatti:
  - JS pu\xF2 navigare nel DOM ed accedere a tutti gli oggetti
  - JS pu\xF2 manipolare tutti i tag ed attributi HTML di una pagina
  - JS pu\xF2 aggiungere o rimuovere elementi HTML ad una pagina
  - JS pu\xF2 modificare tutti gli stili di una pagina
  - JS pu\xF2 gestire tutti gli eventi di una pagina
`,title:"Document Object Model",level:1,content:`# Document Object Model

DOM

- Il DOM si manipola atraverso l'oggetto pi\xF9 di alto livello **Document**
- \`html\` \xE8 il Root element del DOM
- La manipolazione del DOM da parte di JavaScript \xE8 alla base del moderno paradigma di sviluppo web, infatti:
  - JS pu\xF2 navigare nel DOM ed accedere a tutti gli oggetti
  - JS pu\xF2 manipolare tutti i tag ed attributi HTML di una pagina
  - JS pu\xF2 aggiungere o rimuovere elementi HTML ad una pagina
  - JS pu\xF2 modificare tutti gli stili di una pagina
  - JS pu\xF2 gestire tutti gli eventi di una pagina`,frontmatter:{},index:36,start:973,end:987,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:g3,meta:{slide:{raw:`
# Document Object Model

DOM

- Per accedere al DOM di una pagina attraverso Chrome basta selezionare la pagine e dal men\xF9 contestuale (right-click) selezionare **Ispeziona**

<br>
<center>
<img src="/media/css_02a.png" width="500" />
</center>

`,title:"Document Object Model",level:1,content:`# Document Object Model

DOM

- Per accedere al DOM di una pagina attraverso Chrome basta selezionare la pagine e dal men\xF9 contestuale (right-click) selezionare **Ispeziona**

<br>
<center>
<img src="/media/css_02a.png" width="500" />
</center>`,frontmatter:{},index:37,start:988,end:1001,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:b3,meta:{slide:{raw:`
# Document Object Model

DOM

<center>
<img src="/media/css_02b.png" width="600" />
</center>

`,title:"Document Object Model",level:1,content:`# Document Object Model

DOM

<center>
<img src="/media/css_02b.png" width="600" />
</center>`,frontmatter:{},index:38,start:1002,end:1012,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:T3,meta:{slide:{raw:`
# Document Object Model

DOM

- In questa finestra \xE8 possibile navigare tutto il DOM della pagina
- E' possibile vederne l'oragnizzazione gerarchica 
- E' possibile modificare qualsiasi oggetto vedendo immediatamente il risultato

<br>
<table>
<tr>
<td><img src="/media/css_02c.png" width="500" /></td>
<td><img src="/media/css_02d.png" width="500" /></td>
</tr>
</table>
`,title:"Document Object Model",level:1,content:`# Document Object Model

DOM

- In questa finestra \xE8 possibile navigare tutto il DOM della pagina
- E' possibile vederne l'oragnizzazione gerarchica 
- E' possibile modificare qualsiasi oggetto vedendo immediatamente il risultato

<br>
<table>
<tr>
<td><img src="/media/css_02c.png" width="500" /></td>
<td><img src="/media/css_02d.png" width="500" /></td>
</tr>
</table>`,frontmatter:{},index:39,start:1013,end:1030,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:R3,meta:{slide:{raw:`
# Document Object Model

DOM


<br>
<table>
<tr>
<td><img src="/media/css_02e.png" width="500" /></td>
<td><img src="/media/css_02f.png" width="500" /></td>
</tr>
</table>
`,title:"Document Object Model",level:1,content:`# Document Object Model

DOM


<br>
<table>
<tr>
<td><img src="/media/css_02e.png" width="500" /></td>
<td><img src="/media/css_02f.png" width="500" /></td>
</tr>
</table>`,frontmatter:{},index:40,start:1031,end:1045,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:q3,meta:{slide:{raw:`
# Document Object Model

DOM

- Un altro strumento che pu\xF2 essere utile \xE8 [Live DOM Viewer](http://software.hixie.ch/utilities/js/live-dom-viewer/)

<center>
<img src="/media/css_02g.png" width="600" />
</center>
`,title:"Document Object Model",level:1,content:`# Document Object Model

DOM

- Un altro strumento che pu\xF2 essere utile \xE8 [Live DOM Viewer](http://software.hixie.ch/utilities/js/live-dom-viewer/)

<center>
<img src="/media/css_02g.png" width="600" />
</center>`,frontmatter:{},index:41,start:1046,end:1057,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:K3,meta:{slide:{raw:`
# Esercizio css_09

DOM

1. Analizzare il DOM della pagina  *|cognome|_esercizio_css_08.html* con:
   - Google Chrome Developer Tools
   - Live DOM Viewer
  

`,title:"Esercizio css_09",level:1,content:`# Esercizio css_09

DOM

1. Analizzare il DOM della pagina  *|cognome|_esercizio_css_08.html* con:
   - Google Chrome Developer Tools
   - Live DOM Viewer`,frontmatter:{},index:42,start:1058,end:1069,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:az,meta:{slide:{raw:`
# CSS

Selettori Combinator

### child selector

- Seleziona tutti i tag che sono **"figli diretti"** di uno specifico tag.
  
Regola CSS: \`<nome tag padre> > <nome tag figlio> { dichiarazione CSS}\`

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

\`\`\`html
<!-- seleziona tutti i tag <p> 
  figli di un <div> -->

div > p {
  background-color: yellow;
}
\`\`\`

</div>
<div>
<v-click>

\`\`\`html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> -->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>
\`\`\`

</v-click>
</div>
<div>
<v-click>


<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> -->
    <p>Paragrafo parente di div</p>
  </span>
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>

</v-click>
</div>
</div>
`,title:"CSS",level:1,content:`# CSS

Selettori Combinator

### child selector

- Seleziona tutti i tag che sono **"figli diretti"** di uno specifico tag.
  
Regola CSS: \`<nome tag padre> > <nome tag figlio> { dichiarazione CSS}\`

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

\`\`\`html
<!-- seleziona tutti i tag <p> 
  figli di un <div> -->

div > p {
  background-color: yellow;
}
\`\`\`

</div>
<div>
<v-click>

\`\`\`html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> -->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>
\`\`\`

</v-click>
</div>
<div>
<v-click>


<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> -->
    <p>Paragrafo parente di div</p>
  </span>
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>

</v-click>
</div>
</div>`,frontmatter:{},index:43,start:1070,end:1139,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:mz,meta:{slide:{raw:`
# CSS

Selettori Combinator

### child selector

<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> -->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>
\`\`\`
</div>

<div>
<v-click>

<center>
<img src="/media/css_03.drawio.svg" width="300" />
</center>

</v-click>
</div>
</div>
`,title:"CSS",level:1,content:`# CSS

Selettori Combinator

### child selector

<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> -->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>
\`\`\`
</div>

<div>
<v-click>

<center>
<img src="/media/css_03.drawio.svg" width="300" />
</center>

</v-click>
</div>
</div>`,frontmatter:{},index:44,start:1140,end:1179,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:_z,meta:{slide:{raw:`
# Esercizio css_10

CSS child selector

1. Dato il file [esercizio_css_10.html](https://profmancusoa.github.io/TPSI/support/esercizio_css_10.html)
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_10.css*
3. Definire lo stile per tutti i tag span figli diretti di h1 in modo che siano di colore blue
4. Definire lo stile per tutti i tag span figli diretti di h2 in modo che siano di colore rossi
5. Definire lo stile per tutti i tag span figli diretti di un paragrafo in modo che siano di colore viola
6. Definire lo stile per tutti i tag span nipoti di div e figli di p in modo che siano di colore verde scuro
7. Fornire il link github al file con nome |cognome|_esercizio_css_10.html
8. Fornire il link github al file con nome |cognome|_esercizio_css_10.css



`,title:"Esercizio css_10",level:1,content:`# Esercizio css_10

CSS child selector

1. Dato il file [esercizio_css_10.html](https://profmancusoa.github.io/TPSI/support/esercizio_css_10.html)
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_10.css*
3. Definire lo stile per tutti i tag span figli diretti di h1 in modo che siano di colore blue
4. Definire lo stile per tutti i tag span figli diretti di h2 in modo che siano di colore rossi
5. Definire lo stile per tutti i tag span figli diretti di un paragrafo in modo che siano di colore viola
6. Definire lo stile per tutti i tag span nipoti di div e figli di p in modo che siano di colore verde scuro
7. Fornire il link github al file con nome |cognome|_esercizio_css_10.html
8. Fornire il link github al file con nome |cognome|_esercizio_css_10.css`,frontmatter:{},index:45,start:1180,end:1197,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Ez,meta:{slide:{raw:`
# CSS

Selettori Combinator

### descendant selector

- Seleziona tutti i tag che sono **"discendenti"** di uno specifico tag.
  
Regola CSS: \`<nome tag padre> <nome tag discendente> { dichiarazione CSS}\`

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

\`\`\`html
<!-- seleziona tutti i tag <p> 
  discendenti di un <div> -->

div  p {
  background-color: yellow;
}
\`\`\`

</div>
<div>
<v-click>

\`\`\`html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>
<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> 
      e discendente di <div>-->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>
<p>Paragrafo singolo</p>
\`\`\`

</v-click>
</div>
<div>
<v-click>


<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
  <span>
    <p style="background-color: yellow;">Paragrafo parente di div</p>
  </span>
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>

</v-click>
</div>
</div>
`,title:"CSS",level:1,content:`# CSS

Selettori Combinator

### descendant selector

- Seleziona tutti i tag che sono **"discendenti"** di uno specifico tag.
  
Regola CSS: \`<nome tag padre> <nome tag discendente> { dichiarazione CSS}\`

<div class="grid grid-flow-col auto-cols-max gap-4">
<div>

\`\`\`html
<!-- seleziona tutti i tag <p> 
  discendenti di un <div> -->

div  p {
  background-color: yellow;
}
\`\`\`

</div>
<div>
<v-click>

\`\`\`html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>
<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> 
      e discendente di <div>-->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>
<p>Paragrafo singolo</p>
\`\`\`

</v-click>
</div>
<div>
<v-click>


<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
  <span>
    <p style="background-color: yellow;">Paragrafo parente di div</p>
  </span>
  <p style="background-color: yellow;">Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>

</v-click>
</div>
</div>`,frontmatter:{},index:46,start:1198,end:1264,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Dz,meta:{slide:{raw:`
# CSS

Selettori Combinator

### descendant selector

<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> 
      e discendente di <div>-->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>
\`\`\`
</div>

<div>
<v-click>

<center>
<img src="/media/css_04.drawio.svg" width="300" />
</center>

</v-click>
</div>
</div>

`,title:"CSS",level:1,content:`# CSS

Selettori Combinator

### descendant selector

<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<h2>Sottotitolo</h2>
<p>Paragrafo singolo</p>

<div>
  <!-- questo <p> \xE8 figlio di <div> -->
  <p>Paragrafo figlio di div</p>
  <span>
    <!-- questo <p> \xE8 figlio di <span> 
      e discendente di <div>-->
    <p>Paragrafo parente di div</p>
  </span>
  <p>Paragrafo figlio di div</p>
</div>

<p>Paragrafo singolo</p>
\`\`\`
</div>

<div>
<v-click>

<center>
<img src="/media/css_04.drawio.svg" width="300" />
</center>

</v-click>
</div>
</div>`,frontmatter:{},index:47,start:1265,end:1306,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:qz,meta:{slide:{raw:"\n# Esercizio css_11\n\nCSS descendant selector\n\n\n1. Dato il file [esercizio_css_11.html](https://profmancusoa.github.io/TPSI/support/esercizio_css_11.html)\n2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_11.css*\n3. definire lo stile per tutti i tag `<mark>` che sono figli di `<p>` con colore verde\n4. definire lo stile per tutti i tag `<b>` che sono figli di `<p>` con colore giallo e sfondo nero\n5. definire lo stile per tutti i tag `<em>` che sono discendenti di `<div>` con rosso su sfondo giallo\n6. definire lo stile per tutti i tag `<span>` che sono discendenti di `<div>` con sfondo giallo e colore nero\n7.  Fornire il link github al file con nome |cognome|_esercizio_css_11.html\n8.  Fornire il link github al file con nome |cognome|_esercizio_css_11.css\n\n\n",title:"Esercizio css_11",level:1,content:"# Esercizio css_11\n\nCSS descendant selector\n\n\n1. Dato il file [esercizio_css_11.html](https://profmancusoa.github.io/TPSI/support/esercizio_css_11.html)\n2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_11.css*\n3. definire lo stile per tutti i tag `<mark>` che sono figli di `<p>` con colore verde\n4. definire lo stile per tutti i tag `<b>` che sono figli di `<p>` con colore giallo e sfondo nero\n5. definire lo stile per tutti i tag `<em>` che sono discendenti di `<div>` con rosso su sfondo giallo\n6. definire lo stile per tutti i tag `<span>` che sono discendenti di `<div>` con sfondo giallo e colore nero\n7.  Fornire il link github al file con nome |cognome|_esercizio_css_11.html\n8.  Fornire il link github al file con nome |cognome|_esercizio_css_11.css",frontmatter:{},index:48,start:1307,end:1324,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:Wz,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Selettori Pseudo-Class</h1>

`,content:'<h1 class="sezione">Selettori Pseudo-Class</h1>',frontmatter:{layout:"section"},index:49,start:1324,end:1330,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Xz,meta:{slide:{raw:`
# CSS

Selettori Pseudo-Class

- Un selettore ***Pseudo Class*** \xE8 utilizzato per applicare una regola CSS in funzione dello stato di un tag.
- Per esempio, pu\xF2 essere usato per:
  - Definire lo stile di un elemento quando l'utente ci passa sopra con il mouse (*mouse hover*)
  - Definire stili diversi per un link gi\xE0 visitato
  - Definire lo stile per un elemento che ha ricevuto il focus (*mouse e tastiera associati all'elemento*)

Regola CSS: \`<selettore>:<pseudo classe> { dichiarazione CSS}\`

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
a:link { color: blue; } <!-- unvisited link -->

a:visited { color: green; } <!-- visited link -->

a:hover { color: red; background: yellow;} <!-- mouse over link -->

a:active { color: grey; } <!--  selected link -->
\`\`\`
</div>
<div>
<a href="https://www.linux.it/linux" target="_blank">Link ad una risorsa esterna</a>
</div>
</div>

<style>
  a:link { color: blue; } 
  a:visited { color: green;}
  a:hover { color: red; background: yellow;}
  a:active { color: grey; }
</style>

`,title:"CSS",level:1,content:`# CSS

Selettori Pseudo-Class

- Un selettore ***Pseudo Class*** \xE8 utilizzato per applicare una regola CSS in funzione dello stato di un tag.
- Per esempio, pu\xF2 essere usato per:
  - Definire lo stile di un elemento quando l'utente ci passa sopra con il mouse (*mouse hover*)
  - Definire stili diversi per un link gi\xE0 visitato
  - Definire lo stile per un elemento che ha ricevuto il focus (*mouse e tastiera associati all'elemento*)

Regola CSS: \`<selettore>:<pseudo classe> { dichiarazione CSS}\`

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
a:link { color: blue; } <!-- unvisited link -->

a:visited { color: green; } <!-- visited link -->

a:hover { color: red; background: yellow;} <!-- mouse over link -->

a:active { color: grey; } <!--  selected link -->
\`\`\`
</div>
<div>
<a href="https://www.linux.it/linux" target="_blank">Link ad una risorsa esterna</a>
</div>
</div>

<style>
  a:link { color: blue; } 
  a:visited { color: green;}
  a:hover { color: red; background: yellow;}
  a:active { color: grey; }
</style>`,frontmatter:{},index:50,start:1331,end:1370,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:u$,meta:{slide:{raw:`
# CSS

Selettori Pseudo-Class


### pseudo class

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
div:hover {
  background-color: blue;
  color:white;
  border: 5px dashed red;
}
\`\`\`
</div>
<div>
<div id="id1">
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
</div>
</div>
</div>

<br /><br />
<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
input:focus {
  background: #D3D3D3;
  color: blue;
}
\`\`\`
</div>
<div>
<form>
  <label for="fname">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome:&nbsp;&nbsp;</label>
  <input type="text" id="fname" name="fname" placeholder="Inserisci il tuo nome"><br /><br />
  <label for="lname">Cognome:&nbsp;&nbsp;</label>
  <input type="text" id="lname" name="lname" placeholder="Inserisci il tuo cognome"><br><br>
</form> 
</div>
</div>

<style>
div #id1 {
  width: 400px;
  height: 150px;
  padding: 10px;
  background-color: gray;
  color:yellow;
  border: 0px solid black;
}

div:hover #id1 {
  background-color: blue;
  color:white;
  border: 5px dashed red;
}

input {
  border: 1px solid grey;
}

input:focus {
  background: #D3D3D3;
  color: blue;
}

</style>

`,title:"CSS",level:1,content:`# CSS

Selettori Pseudo-Class


### pseudo class

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
div:hover {
  background-color: blue;
  color:white;
  border: 5px dashed red;
}
\`\`\`
</div>
<div>
<div id="id1">
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
</div>
</div>
</div>

<br /><br />
<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
input:focus {
  background: #D3D3D3;
  color: blue;
}
\`\`\`
</div>
<div>
<form>
  <label for="fname">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome:&nbsp;&nbsp;</label>
  <input type="text" id="fname" name="fname" placeholder="Inserisci il tuo nome"><br /><br />
  <label for="lname">Cognome:&nbsp;&nbsp;</label>
  <input type="text" id="lname" name="lname" placeholder="Inserisci il tuo cognome"><br><br>
</form> 
</div>
</div>

<style>
div #id1 {
  width: 400px;
  height: 150px;
  padding: 10px;
  background-color: gray;
  color:yellow;
  border: 0px solid black;
}

div:hover #id1 {
  background-color: blue;
  color:white;
  border: 5px dashed red;
}

input {
  border: 1px solid grey;
}

input:focus {
  background: #D3D3D3;
  color: blue;
}

</style>`,frontmatter:{},index:51,start:1371,end:1446,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:L$,meta:{slide:{raw:`
# CSS

Selettori Pseudo-Class

### first child

- La pseudo classe \`first-child\` seleziona solo il primo dei tag "figlii" di un altro elemento
 
 Regola CSS: \`<selettore>:first-child { dichiarazione CSS}\`

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
h1 {
  color: red;
}

h1:first-child { 
  color: yellow; 
  background: grey;
} 
\`\`\`
</div>
<div>

\`\`\`html
<h1>Primo titolo</h1>

<h1>Secondo titolo</h1>

<h1>Terzo titolo</h1>

<h1>Quarto titolo</h1>

<h1>Quitno titolo</h1>
\`\`\`
</div>
<div>
<v-click>

<h4>Primo titolo</h4><br />
<h4>Secondo titolo</h4><br />
<h4>Terzo titolo</h4><br />
<h4>Quarto titolo</h4><br />
<h4>Quitno titolo</h4><br />
</v-click>
</div>
</div>

<style>
  h4 {color: red;}
  h4:first-child { color: yellow; background: grey;}
</style>

`,title:"CSS",level:1,content:`# CSS

Selettori Pseudo-Class

### first child

- La pseudo classe \`first-child\` seleziona solo il primo dei tag "figlii" di un altro elemento
 
 Regola CSS: \`<selettore>:first-child { dichiarazione CSS}\`

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
h1 {
  color: red;
}

h1:first-child { 
  color: yellow; 
  background: grey;
} 
\`\`\`
</div>
<div>

\`\`\`html
<h1>Primo titolo</h1>

<h1>Secondo titolo</h1>

<h1>Terzo titolo</h1>

<h1>Quarto titolo</h1>

<h1>Quitno titolo</h1>
\`\`\`
</div>
<div>
<v-click>

<h4>Primo titolo</h4><br />
<h4>Secondo titolo</h4><br />
<h4>Terzo titolo</h4><br />
<h4>Quarto titolo</h4><br />
<h4>Quitno titolo</h4><br />
</v-click>
</div>
</div>

<style>
  h4 {color: red;}
  h4:first-child { color: yellow; background: grey;}
</style>`,frontmatter:{},index:52,start:1447,end:1504,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:A$,meta:{slide:{raw:`
# Esercizio css_12

CSS pseudo-class selector

1. Editare il file *|cognome|_esercizio_html_11.html* e salvarlo come *|cognome|_esercizio_css_12.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_12.css*
3. definire lo stile per tutte le ancore in modo che i link normalmente siano di colore blu, quando visitati di colore rosso con sfondo giallo, e quando l'utente ci passa sopra con il mouse siano di colore verde
4. definire lo stile per il primo titolo di livello 1 in modo che siano sottolineati e di colore blue
5. definire lo stile per il primo titolo di livello 2 in modo che siano di colore verde
6. definire lo stile per il primo paragrafo in modo che siano colore rosso ed il testo sia allineato a sinistra
7. Fornire il link github al file con nome |cognome|_esercizio_css_12.html
8. Fornire il link github al file con nome |cognome|_esercizio_css_12.css


`,title:"Esercizio css_12",level:1,content:`# Esercizio css_12

CSS pseudo-class selector

1. Editare il file *|cognome|_esercizio_html_11.html* e salvarlo come *|cognome|_esercizio_css_12.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_12.css*
3. definire lo stile per tutte le ancore in modo che i link normalmente siano di colore blu, quando visitati di colore rosso con sfondo giallo, e quando l'utente ci passa sopra con il mouse siano di colore verde
4. definire lo stile per il primo titolo di livello 1 in modo che siano sottolineati e di colore blue
5. definire lo stile per il primo titolo di livello 2 in modo che siano di colore verde
6. definire lo stile per il primo paragrafo in modo che siano colore rosso ed il testo sia allineato a sinistra
7. Fornire il link github al file con nome |cognome|_esercizio_css_12.html
8. Fornire il link github al file con nome |cognome|_esercizio_css_12.css`,frontmatter:{},index:53,start:1505,end:1521,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:F$,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione"><span style="color: green;">Un Web a Colori</span></h1>

`,content:'<h1 class="sezione"><span style="color: green;">Un Web a Colori</span></h1>',frontmatter:{layout:"section"},index:54,start:1521,end:1527,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:j$,meta:{slide:{raw:`
# CSS

Colori

- In CSS ci sono vari modi per specificare un colore in una propriet\xE0:
  1.  Specificando il nome di uno dei [140 colori supportati](https://www.w3schools.com/colors/colors_names.asp) (Red, LightGray, Orange, ...) 
  2.  Usando un valore ***RGB*** (Red Green Blue) nella forma \`rgb(240, 124, 22)\`
  3.  Usando un valore ***HEX*** nel forma \`#RRGGBB\` - ***#F1A3C4***
  4.  Usando un valore ***HSL*** nella forma \`hsl(5,  30%, 54%)\`

- Inoltre \xE8 possibile anche specificare un parametro di trasparenza (***alpha***) compreso tra 0 e 1
  
  5. Usando un valore ***RGBA*** (Red Green Blue Alpga) nella forma \`rgba(240, 124, 22, 0.5)\`
  6. Usando un valore ***HSLA*** nella forma \`hsla(5,  30%, 54%, 0.81)\`
`,title:"CSS",level:1,content:`# CSS

Colori

- In CSS ci sono vari modi per specificare un colore in una propriet\xE0:
  1.  Specificando il nome di uno dei [140 colori supportati](https://www.w3schools.com/colors/colors_names.asp) (Red, LightGray, Orange, ...) 
  2.  Usando un valore ***RGB*** (Red Green Blue) nella forma \`rgb(240, 124, 22)\`
  3.  Usando un valore ***HEX*** nel forma \`#RRGGBB\` - ***#F1A3C4***
  4.  Usando un valore ***HSL*** nella forma \`hsl(5,  30%, 54%)\`

- Inoltre \xE8 possibile anche specificare un parametro di trasparenza (***alpha***) compreso tra 0 e 1
  
  5. Usando un valore ***RGBA*** (Red Green Blue Alpga) nella forma \`rgba(240, 124, 22, 0.5)\`
  6. Usando un valore ***HSLA*** nella forma \`hsla(5,  30%, 54%, 0.81)\``,frontmatter:{},index:55,start:1528,end:1544,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:G$,meta:{slide:{raw:`
# CSS

Colori

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`css
#id1 { background-color: red; }


#id2 { background-color: #56d3f8; }



#id3 { background-color: rgb(23, 182, 85); }



#id4 { background-color: rgba(23, 182, 85, 0.5); }



#id5 { background-color: hsl(249, 73%, 40%); }



#id6 { background-color: hsla(249, 73%, 40%, 0.75); }
\`\`\`
</div>
<div>
<div id="id1">red</div><br />
<div id="id2">#56d3f8</div><br />
<div id="id3">rgb(23, 182, 85)</div><br />
<div id="id4">rgba(23, 182, 85, 0.5)</div><br />
<div id="id5">hsl(249, 73%, 40%);</div><br />
<div id="id6">hsla(249, 73%, 40%, 0.75)</div><br />
</div>
</div>

<style>
  #id1 { background-color: red; width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id2 { background-color: #56d3f8; width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id3 { background-color: rgb(23, 182, 85); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id4 { background-color: rgba(23,182, 85, 0.5); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id5 { background-color: hsl(249, 73%, 40%); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id6 { background-color: hsla(249, 73%, 40%, 0.75); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
</style>
`,title:"CSS",level:1,content:`# CSS

Colori

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`css
#id1 { background-color: red; }


#id2 { background-color: #56d3f8; }



#id3 { background-color: rgb(23, 182, 85); }



#id4 { background-color: rgba(23, 182, 85, 0.5); }



#id5 { background-color: hsl(249, 73%, 40%); }



#id6 { background-color: hsla(249, 73%, 40%, 0.75); }
\`\`\`
</div>
<div>
<div id="id1">red</div><br />
<div id="id2">#56d3f8</div><br />
<div id="id3">rgb(23, 182, 85)</div><br />
<div id="id4">rgba(23, 182, 85, 0.5)</div><br />
<div id="id5">hsl(249, 73%, 40%);</div><br />
<div id="id6">hsla(249, 73%, 40%, 0.75)</div><br />
</div>
</div>

<style>
  #id1 { background-color: red; width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id2 { background-color: #56d3f8; width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id3 { background-color: rgb(23, 182, 85); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id4 { background-color: rgba(23,182, 85, 0.5); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id5 { background-color: hsl(249, 73%, 40%); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
  #id6 { background-color: hsla(249, 73%, 40%, 0.75); width:250px; height:50px; color:white; text-align:center; line-height: 50px; }
</style>`,frontmatter:{},index:56,start:1545,end:1595,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:J$,meta:{slide:{raw:`
# CSS

Colori

- Un problema principale (almeno per gli informatici :) ) \xE8 l'accostamento dei colori
- Un sito risulta gradevole se i colori sono armoniosi e scelti secondo regole precise
- Fortunatamente per realizzare le nostre pagine Web possiamo ricorrete ad una moltitudine di strumenti disponibili sul web in forma gratuita
- Questi strumenti prendono il nome di \`palette generator\` o \`web palette generator\`
- Facendo una ricerca su google  si trovano circa 6.700.000 risultati
- Pertanto ognuno utilizzi il tool a lui pi\xF9 congegnale
- Alcuni interessanti sono:
  - [https://coolors.co/](https://coolors.co/)
  - [https://color.adobe.com/it/create/color-wheel](https://color.adobe.com/it/create/color-wheel)
  - [http://colormind.io/](http://colormind.io/)
  - [https://palettegenerator.com/](https://palettegenerator.com/)
  - [https://www.designbombs.com/best-online-color-palette-generators/](https://www.designbombs.com/best-online-color-palette-generators/)
`,title:"CSS",level:1,content:`# CSS

Colori

- Un problema principale (almeno per gli informatici :) ) \xE8 l'accostamento dei colori
- Un sito risulta gradevole se i colori sono armoniosi e scelti secondo regole precise
- Fortunatamente per realizzare le nostre pagine Web possiamo ricorrete ad una moltitudine di strumenti disponibili sul web in forma gratuita
- Questi strumenti prendono il nome di \`palette generator\` o \`web palette generator\`
- Facendo una ricerca su google  si trovano circa 6.700.000 risultati
- Pertanto ognuno utilizzi il tool a lui pi\xF9 congegnale
- Alcuni interessanti sono:
  - [https://coolors.co/](https://coolors.co/)
  - [https://color.adobe.com/it/create/color-wheel](https://color.adobe.com/it/create/color-wheel)
  - [http://colormind.io/](http://colormind.io/)
  - [https://palettegenerator.com/](https://palettegenerator.com/)
  - [https://www.designbombs.com/best-online-color-palette-generators/](https://www.designbombs.com/best-online-color-palette-generators/)`,frontmatter:{},index:57,start:1596,end:1614,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:tC,meta:{slide:{raw:`
# Esercizio css_13

Colori

1. Creare un nuovo file e nominarlo *|cognome|_esercizio_css_13.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_13.css*
3. Creare una scacchiera 4 righe x 3 colonne
4. Con l'aiuto di un tool di palette generation:
   1. colorare lo sfondo di 2 celle specificando il nome del colore
   2. colorare lo sfondo di 2 celle specificando il codice HEX del colore
   3. colorare lo sfondo di 2 celle usando la funzione rgb
   4. colorare lo sfondo di 2 celle usando la funzione rgba ed impostare la trasparenza 
   5. colorare lo sfondo di 2 celle usando la funzione hls
   6. colorare lo sfondo di 2 celle usando la funzione hlsa ed impostare la trasparenza
5. Fornire il link github al file con nome |cognome|_esercizio_css_13.html
6. Fornire il link github al file con nome |cognome|_esercizio_css_13.css

`,title:"Esercizio css_13",level:1,content:`# Esercizio css_13

Colori

1. Creare un nuovo file e nominarlo *|cognome|_esercizio_css_13.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_13.css*
3. Creare una scacchiera 4 righe x 3 colonne
4. Con l'aiuto di un tool di palette generation:
   1. colorare lo sfondo di 2 celle specificando il nome del colore
   2. colorare lo sfondo di 2 celle specificando il codice HEX del colore
   3. colorare lo sfondo di 2 celle usando la funzione rgb
   4. colorare lo sfondo di 2 celle usando la funzione rgba ed impostare la trasparenza 
   5. colorare lo sfondo di 2 celle usando la funzione hls
   6. colorare lo sfondo di 2 celle usando la funzione hlsa ed impostare la trasparenza
5. Fornire il link github al file con nome |cognome|_esercizio_css_13.html
6. Fornire il link github al file con nome |cognome|_esercizio_css_13.css`,frontmatter:{},index:58,start:1615,end:1634,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:oC,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Larghezza e Altezza degli elementi Web</h1>

`,content:'<h1 class="sezione">Larghezza e Altezza degli elementi Web</h1>',frontmatter:{layout:"section"},index:59,start:1634,end:1640,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:rC,meta:{slide:{raw:`
# CSS

Larghezza ed Altezza

- Due propriet\xE0 molto importanti sono
  - ***width***: definisce la larghezza di un elemento HTML all'interno della pagina
  - ***height***: definisce l'altezza di un elemento HTML all'interno della pagina
- Queste misure possono essere espresse in due modi:
  1. ***valore aasoluto*** : specificando il valore in pixel (px)
  2. ***valore relativo*** : specificando un valore percentuale (%) rispetto all'elemento padre 
- Per default *width* e *height* sono impostate ad \`auto\` e pertanto il browser calcola le dimensioni minime per visualizzare l'elemento.

`,title:"CSS",level:1,content:`# CSS

Larghezza ed Altezza

- Due propriet\xE0 molto importanti sono
  - ***width***: definisce la larghezza di un elemento HTML all'interno della pagina
  - ***height***: definisce l'altezza di un elemento HTML all'interno della pagina
- Queste misure possono essere espresse in due modi:
  1. ***valore aasoluto*** : specificando il valore in pixel (px)
  2. ***valore relativo*** : specificando un valore percentuale (%) rispetto all'elemento padre 
- Per default *width* e *height* sono impostate ad \`auto\` e pertanto il browser calcola le dimensioni minime per visualizzare l'elemento.`,frontmatter:{},index:60,start:1641,end:1655,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:gC,meta:{slide:{raw:`
# CSS

Larghezza ed Altezza

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<div class="parent"></div>

<div class="parent">
  <div id="child1">
    <div id="child2"></div>
  </div>
</div>

\`\`\`
</div>
<div>

\`\`\`css
  .parent {
    background-color: red;
    border: 1px solid;
    width: 300px;
    height: 100px;
  }

  #child1 {
    background-color: green;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }

  #child2 {
    background-color: yellow;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }
\`\`\`
</div>
<div>

<div class="parent"></div><br /><br /><br /><br />

<div class="parent">
  <div id="child1">
    <div id="child2"></div>
  </div>
</div>

</div>
</div>

<style>
  .parent {
    background-color: red;
    border: 1px solid;
    width: 300px;
    height: 100px;
  }
  #child1 {
    background-color: green;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }
  #child2 {
    background-color: yellow;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }
</style>
`,title:"CSS",level:1,content:`# CSS

Larghezza ed Altezza

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<div class="parent"></div>

<div class="parent">
  <div id="child1">
    <div id="child2"></div>
  </div>
</div>

\`\`\`
</div>
<div>

\`\`\`css
  .parent {
    background-color: red;
    border: 1px solid;
    width: 300px;
    height: 100px;
  }

  #child1 {
    background-color: green;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }

  #child2 {
    background-color: yellow;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }
\`\`\`
</div>
<div>

<div class="parent"></div><br /><br /><br /><br />

<div class="parent">
  <div id="child1">
    <div id="child2"></div>
  </div>
</div>

</div>
</div>

<style>
  .parent {
    background-color: red;
    border: 1px solid;
    width: 300px;
    height: 100px;
  }
  #child1 {
    background-color: green;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }
  #child2 {
    background-color: yellow;
    border: 1px solid;
    width: 50%;
    height: 50%;
  }
</style>`,frontmatter:{},index:61,start:1656,end:1734,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:yC,meta:{slide:{raw:`
# Esercizio css_14

Colori

1. Creare un nuovo file e nominarlo *|cognome|_esercizio_css_14.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_14.css*
3. Creare un rettangolo con sfondo rosso con larghezza 400px ed altezza 200px
4. Creare quattro rettangoli con sfondo viola con larghezza rispettivamente pari a 1/4, 2/4, 3/4 e 4/4 della larghezza della pagine e altezza pari a 150 px
5. Creare quattro rettangoli con sfondo verde e trasparenza al 65% con larghezza rispettivamente pari a 1/8, 3/6, 5/8 e 2/9 della larghezza della pagine e altezza pari a 221 px
6.  Fornire il link github al file con nome |cognome|_esercizio_css_14.html
7.  Fornire il link github al file con nome |cognome|_esercizio_css_14.css
`,title:"Esercizio css_14",level:1,content:`# Esercizio css_14

Colori

1. Creare un nuovo file e nominarlo *|cognome|_esercizio_css_14.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_14.css*
3. Creare un rettangolo con sfondo rosso con larghezza 400px ed altezza 200px
4. Creare quattro rettangoli con sfondo viola con larghezza rispettivamente pari a 1/4, 2/4, 3/4 e 4/4 della larghezza della pagine e altezza pari a 150 px
5. Creare quattro rettangoli con sfondo verde e trasparenza al 65% con larghezza rispettivamente pari a 1/8, 3/6, 5/8 e 2/9 della larghezza della pagine e altezza pari a 221 px
6.  Fornire il link github al file con nome |cognome|_esercizio_css_14.html
7.  Fornire il link github al file con nome |cognome|_esercizio_css_14.css`,frontmatter:{},index:62,start:1735,end:1748,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:xC,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione"><div style="color: rgb(178,28,128); background-image: linear-gradient(to right top, #9198a3, #7f91b9, #7588ce, #797bde, #8a69e7);">Lo sfondo degli elementi</div></h1>


`,content:'<h1 class="sezione"><div style="color: rgb(178,28,128); background-image: linear-gradient(to right top, #9198a3, #7f91b9, #7588ce, #797bde, #8a69e7);">Lo sfondo degli elementi</div></h1>',frontmatter:{layout:"section"},index:63,start:1748,end:1755,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:$C,meta:{slide:{raw:`
# CSS

Background

- CSS definisce varie propriet\xE0 per definire il background di un elemento HTML:
  - ***background-color*** : speficica il colore dello sfondo
  - ***background-image*** : imposta un immagine come sfondo di un elemento
  - ***background-repeat*** :  definisce il verso di ripetizione dell'immagine di sfondo
  - ***background-attachment*** : specifica se l'immagine si sfondo rimarr\xE0 fissa o far\xE0 scroll
  - ***background-position*** : definisce la posizione dell'immagine di sfondo

`,title:"CSS",level:1,content:`# CSS

Background

- CSS definisce varie propriet\xE0 per definire il background di un elemento HTML:
  - ***background-color*** : speficica il colore dello sfondo
  - ***background-image*** : imposta un immagine come sfondo di un elemento
  - ***background-repeat*** :  definisce il verso di ripetizione dell'immagine di sfondo
  - ***background-attachment*** : specifica se l'immagine si sfondo rimarr\xE0 fissa o far\xE0 scroll
  - ***background-position*** : definisce la posizione dell'immagine di sfondo`,frontmatter:{},index:64,start:1756,end:1769,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:OC,meta:{slide:{raw:`
# CSS

background-image

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<div class="bg1">
</div>






<p class="bg2">
  Questo \xE8 un 
  paragrafo con 
  del testo
</p>



<div id="bg3">
</div>
\`\`\`
</div>
<div>

\`\`\`css
  .bg1 {
    background-image:url("/media/css_05.png");
    color: white;
    width: 250px;
    height: 100px;
  }

  .bg2 {
    background-image:url("/media/css_06.jpg");
  }

  #bg3 {
    background-image:url("/media/css_07.jpg");
    color: white;
    width: 250px;
    height: 100px;
  }

\`\`\`
</div>
<div>

<div class="bg1"></div><br /><br />
<p class="bg2">Questo \xE8 un paragrafo con del testo</p><br /><br />
<div id="bg3"></div>
</div>
</div>

<style>
  .bg1 {
    background-image: url("/media/css_05.png");
    color: white;
    width: 250px;
    height: 100px;
  }

  .bg2 {
    background-image: url("/media/css_06.jpg");
  }

  #bg3 {
    background-image: url("/media/css_07.jpg");
    color: white;
    width: 250px;
    height: 100px;
  }
</style>

`,title:"CSS",level:1,content:`# CSS

background-image

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<div class="bg1">
</div>






<p class="bg2">
  Questo \xE8 un 
  paragrafo con 
  del testo
</p>



<div id="bg3">
</div>
\`\`\`
</div>
<div>

\`\`\`css
  .bg1 {
    background-image:url("/media/css_05.png");
    color: white;
    width: 250px;
    height: 100px;
  }

  .bg2 {
    background-image:url("/media/css_06.jpg");
  }

  #bg3 {
    background-image:url("/media/css_07.jpg");
    color: white;
    width: 250px;
    height: 100px;
  }

\`\`\`
</div>
<div>

<div class="bg1"></div><br /><br />
<p class="bg2">Questo \xE8 un paragrafo con del testo</p><br /><br />
<div id="bg3"></div>
</div>
</div>

<style>
  .bg1 {
    background-image: url("/media/css_05.png");
    color: white;
    width: 250px;
    height: 100px;
  }

  .bg2 {
    background-image: url("/media/css_06.jpg");
  }

  #bg3 {
    background-image: url("/media/css_07.jpg");
    color: white;
    width: 250px;
    height: 100px;
  }
</style>`,frontmatter:{},index:65,start:1770,end:1851,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:qC,meta:{slide:{raw:`
# CSS

background-repeat

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<div class="bg1">
</div>


<div class="bg2">
</div>



<div class="bg3">
</div>




<div class="bg4">
</div>
\`\`\`
</div>
<div>

\`\`\`css
  .bg1, .bg2, .bg3, .bg4 {
    background-image: url("/media/css_08.jpg");
    width: 250px;
    height: 90px;
    border: 1px solid black;
  }

  .bg1 { background-repeat: repeat; }
  
  .bg2 { background-repeat: no-repeat; }
  
  .bg3 { background-repeat: repeat-x; }
  
  .bg4 { background-repeat: repeat-y; }
\`\`\`
</div>
<div>

<div class="bg1"></div><br />
<div class="bg2"></div><br />
<div class="bg3"></div><br />
<div class="bg4"></div><br />
</div>
</div>

<style>
  .bg1, .bg2, .bg3, .bg4 {
    background-image: url("/media/css_08.jpg");
    width: 250px;
    height: 90px;
    border: 1px solid black;
  }

  .bg1 {
    background-repeat: repeat;
  }

  .bg2 {
    background-repeat: no-repeat;
  }

  .bg3 {
    background-repeat: repeat-x;
  }

  .bg4 {
    background-repeat: repeat-y;
  }
</style>

`,title:"CSS",level:1,content:`# CSS

background-repeat

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<div class="bg1">
</div>


<div class="bg2">
</div>



<div class="bg3">
</div>




<div class="bg4">
</div>
\`\`\`
</div>
<div>

\`\`\`css
  .bg1, .bg2, .bg3, .bg4 {
    background-image: url("/media/css_08.jpg");
    width: 250px;
    height: 90px;
    border: 1px solid black;
  }

  .bg1 { background-repeat: repeat; }
  
  .bg2 { background-repeat: no-repeat; }
  
  .bg3 { background-repeat: repeat-x; }
  
  .bg4 { background-repeat: repeat-y; }
\`\`\`
</div>
<div>

<div class="bg1"></div><br />
<div class="bg2"></div><br />
<div class="bg3"></div><br />
<div class="bg4"></div><br />
</div>
</div>

<style>
  .bg1, .bg2, .bg3, .bg4 {
    background-image: url("/media/css_08.jpg");
    width: 250px;
    height: 90px;
    border: 1px solid black;
  }

  .bg1 {
    background-repeat: repeat;
  }

  .bg2 {
    background-repeat: no-repeat;
  }

  .bg3 {
    background-repeat: repeat-x;
  }

  .bg4 {
    background-repeat: repeat-y;
  }
</style>`,frontmatter:{},index:66,start:1852,end:1934,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:KC,meta:{slide:{raw:`
# Esercizio css_15

background-repeat

1. Creare ed editare i file *|cognome|_esercizio_css_15.html* e *|cognome|_esercizio_css_15.css*.
2. Creare una pagina contenente: 
   1. 2xDIV con un immagine di background con path relativo e con dimesioni assolute
   2. 2xDIV con un immagine di background con path assoluto e con dimesioni relative
   3. 2xDIV con un immagine di background che usi la propriet\xE0 del background repeat
   4. 2xDIV con un immagine di background che usi la propriet\xE0 del background no-repeat
   5. 2xDIV con un immagine di background che usi la propriet\xE0 del background repeat-x
   6. 2xDIV con un immagine di background che usi la propriet\xE0 del background repeat-y
3.  Fornire il link github al file con nome |cognome|_esercizio_css_15.html
4.  Fornire il link github al file con nome |cognome|_esercizio_css_15.css

`,title:"Esercizio css_15",level:1,content:`# Esercizio css_15

background-repeat

1. Creare ed editare i file *|cognome|_esercizio_css_15.html* e *|cognome|_esercizio_css_15.css*.
2. Creare una pagina contenente: 
   1. 2xDIV con un immagine di background con path relativo e con dimesioni assolute
   2. 2xDIV con un immagine di background con path assoluto e con dimesioni relative
   3. 2xDIV con un immagine di background che usi la propriet\xE0 del background repeat
   4. 2xDIV con un immagine di background che usi la propriet\xE0 del background no-repeat
   5. 2xDIV con un immagine di background che usi la propriet\xE0 del background repeat-x
   6. 2xDIV con un immagine di background che usi la propriet\xE0 del background repeat-y
3.  Fornire il link github al file con nome |cognome|_esercizio_css_15.html
4.  Fornire il link github al file con nome |cognome|_esercizio_css_15.css`,frontmatter:{},index:67,start:1935,end:1952,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:GC,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Attorno al contenuto: Box Model</h1>

`,content:'<h1 class="sezione">Attorno al contenuto: Box Model</h1>',frontmatter:{layout:"section"},index:68,start:1952,end:1958,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:e5,meta:{slide:{raw:`
# CSS

Box model

- Ogni elemento HTML pu\xF2 essere considerato come una "scatola" \`box\`, che \xE8 composta da vari elementi che complessivamente prendono il nome di \`box model\`.
- Il *box model* \xE8 composto da:
<center>
<img src="/media/css_09.jpg" width="650" />
</center>

  - ***content*** : il contenuto della scatola, dove testo e immagini sono visualizzate.
  - ***padding*** : area **trasparente** attorno al contenuto e prima del margine.
  - ***border*** : bordo **(in)visibile** attorno al padding.
  - ***margin*** : area **trasparente** attorno al bordo.
`,title:"CSS",level:1,content:`# CSS

Box model

- Ogni elemento HTML pu\xF2 essere considerato come una "scatola" \`box\`, che \xE8 composta da vari elementi che complessivamente prendono il nome di \`box model\`.
- Il *box model* \xE8 composto da:
<center>
<img src="/media/css_09.jpg" width="650" />
</center>

  - ***content*** : il contenuto della scatola, dove testo e immagini sono visualizzate.
  - ***padding*** : area **trasparente** attorno al contenuto e prima del margine.
  - ***border*** : bordo **(in)visibile** attorno al padding.
  - ***margin*** : area **trasparente** attorno al bordo.`,frontmatter:{},index:69,start:1959,end:1975,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:u5,meta:{slide:{raw:`
# CSS

Box model

- Conoscere le propriet\xE0 del *box model* \xE8 molto importante durante il design ed il layout di una pagina web.

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col 1 -->
<h3>border</h3>
<div class="parent">
<pre>
.parent1 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
}
</pre>
</div>
<div class="parent">
  <div id="child1">
    <pre>
#child1 {
  width: 80%;
  height: 80%;
  border: 1px solid;
}
    </pre>
  </div>
</div>
<div class="parent"></div>
</div>

<v-click>
<div><!-- col 2 -->
<h3>child padding</h3>
<div class="parent">
<pre>
.parent2 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
}
</pre>
</div>
<div class="parent">
<div id="child2">
    <pre>
#child2 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    </pre>
  </div>
</div>
<div class="parent"></div>
</div>
</v-click>

<v-click>
<div><!-- col 3 -->
<h3>father padding</h3>
<div class="parent3">
<pre>
.parent3 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
  padding: 10px;
}
</pre>
</div>
<div class="parent3">
<div id="child3">
    <pre>
#child3 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    </pre>
  </div>
</div>
<div class="parent3"></div>
</div>
</v-click>

<v-click>
<div><!-- col 4 -->
<h3>margin</h3>
<div class="parent4">
<pre>
.parent4 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
  padding: 10px;
  margin: 10px;
}
</pre>
</div>
<div class="parent4">
<div id="child3">
    <pre>
#child4 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    </pre>
  </div>
</div>
<div class="parent4"></div>
</div>
</v-click>
</div>

<style>
  .parent {
    font-size: 10px;
    width: 200px;
    height: 100px;
    border: 1px dashed;
  }

  .parent3 {
    font-size: 10px;
    width: 200px;
    height: 100px;
    border: 1px dashed;
    padding: 10px;
  }

  .parent4 {
    font-size: 10px;
    width: 200px;
    height: 100px;
    border: 1px dashed;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  
  #child1 {
    font-size: 8px;
    width: 80%;
    height: 80%;
    border: 1px solid;
  }

   #child2 {
    font-size: 8px;
    width: 80%;
    height: 80%;
    border: 1px solid;
    padding: 10px;
  }

  #child3 {
    font-size: 8px;
    width: 80%;
    height: 80%;
    border: 1px solid;
    padding: 10px;
  }
  

</style>

`,title:"CSS",level:1,content:`# CSS

Box model

- Conoscere le propriet\xE0 del *box model* \xE8 molto importante durante il design ed il layout di una pagina web.

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col 1 -->
<h3>border</h3>
<div class="parent">
<pre>
.parent1 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
}
</pre>
</div>
<div class="parent">
  <div id="child1">
    <pre>
#child1 {
  width: 80%;
  height: 80%;
  border: 1px solid;
}
    </pre>
  </div>
</div>
<div class="parent"></div>
</div>

<v-click>
<div><!-- col 2 -->
<h3>child padding</h3>
<div class="parent">
<pre>
.parent2 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
}
</pre>
</div>
<div class="parent">
<div id="child2">
    <pre>
#child2 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    </pre>
  </div>
</div>
<div class="parent"></div>
</div>
</v-click>

<v-click>
<div><!-- col 3 -->
<h3>father padding</h3>
<div class="parent3">
<pre>
.parent3 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
  padding: 10px;
}
</pre>
</div>
<div class="parent3">
<div id="child3">
    <pre>
#child3 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    </pre>
  </div>
</div>
<div class="parent3"></div>
</div>
</v-click>

<v-click>
<div><!-- col 4 -->
<h3>margin</h3>
<div class="parent4">
<pre>
.parent4 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
  padding: 10px;
  margin: 10px;
}
</pre>
</div>
<div class="parent4">
<div id="child3">
    <pre>
#child4 {
  width: 80%;
  height: 80%;
  border: 1px solid;
  padding: 10px;
}
    </pre>
  </div>
</div>
<div class="parent4"></div>
</div>
</v-click>
</div>

<style>
  .parent {
    font-size: 10px;
    width: 200px;
    height: 100px;
    border: 1px dashed;
  }

  .parent3 {
    font-size: 10px;
    width: 200px;
    height: 100px;
    border: 1px dashed;
    padding: 10px;
  }

  .parent4 {
    font-size: 10px;
    width: 200px;
    height: 100px;
    border: 1px dashed;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  
  #child1 {
    font-size: 8px;
    width: 80%;
    height: 80%;
    border: 1px solid;
  }

   #child2 {
    font-size: 8px;
    width: 80%;
    height: 80%;
    border: 1px solid;
    padding: 10px;
  }

  #child3 {
    font-size: 8px;
    width: 80%;
    height: 80%;
    border: 1px solid;
    padding: 10px;
  }
  

</style>`,frontmatter:{},index:70,start:1976,end:2151,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:h5,meta:{slide:{raw:`
# CSS

Box model - sizing

- Il box model ci permette di definire bordi attorno agli elementi e di calcolare le dimensioni di un elemento e lo spazio tra elementi.
- E' importante considerare che quando si specifica una propriet\xE0 *width* e/o *height*, si sta definendo la larghezza e/o altezza ***SOLO*** della componente *content* del box model.
- Pertanto per calcolare la dimensione complessiva dell'elemento HTML sar\xE0 necessario anche tenere in considerazione ***padding***, ***border*** e ***margin***.  

`,title:"CSS",level:1,content:`# CSS

Box model - sizing

- Il box model ci permette di definire bordi attorno agli elementi e di calcolare le dimensioni di un elemento e lo spazio tra elementi.
- E' importante considerare che quando si specifica una propriet\xE0 *width* e/o *height*, si sta definendo la larghezza e/o altezza ***SOLO*** della componente *content* del box model.
- Pertanto per calcolare la dimensione complessiva dell'elemento HTML sar\xE0 necessario anche tenere in considerazione ***padding***, ***border*** e ***margin***.`,frontmatter:{},index:71,start:2152,end:2162,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:E5,meta:{slide:{raw:`
# CSS

Box model - sizing

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>
<h3>Calcolo dimensione elemento HTML</h3>
<center>
<div id="div1">Immagine larga 150px</div>
<img id="tux1" src="/media/css_10.jpg"  alt="tux">
<div id="div2">
<pre>
#div {
  width: 150px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
</pre>
</div>
<div id="div3">
<pre>
total_width = width + 2*padding + 2*border + 2*margin

total_width =  150 + 20 + 10 + 0 = 180px

</pre>
</div>
</center>
</div>

<v-click>
<div>
<h3>&nbsp;</h3>
<center>
<div id="div1">Immagine larga 150px</div>
<img id="tux1" src="/media/css_10.jpg" alt="tux">
<div id="div4">
<pre>
#div {
  width: 120px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
</pre>
</div>
<div id="div3">
<pre>
total_width = width + 2*padding + 2*border + 2*margin

total_width = 120 + 20 + 10 + 0 = 150px

</pre>
</div>
</center>
</div>
</v-click>
</div>

<style>
  #tux1 {  
    border:1px solid;
    width: 150px;
  }
  #div1 {
  margin-top:20px;
  font-size: 14px;
}
#div2 {
  text-align: left;
  box-sizing: content-box;
  font-size: 10px;
  width: 150px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
#div3 {
  text-align: left;
  font-size:14px;
  margin-top: 10px;
  border:0px solid gray;
}
#div4 {
  text-align: left;
  box-sizing: content-box;
  font-size: 10px;
  width: 120px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
</style>
`,title:"CSS",level:1,content:`# CSS

Box model - sizing

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>
<h3>Calcolo dimensione elemento HTML</h3>
<center>
<div id="div1">Immagine larga 150px</div>
<img id="tux1" src="/media/css_10.jpg"  alt="tux">
<div id="div2">
<pre>
#div {
  width: 150px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
</pre>
</div>
<div id="div3">
<pre>
total_width = width + 2*padding + 2*border + 2*margin

total_width =  150 + 20 + 10 + 0 = 180px

</pre>
</div>
</center>
</div>

<v-click>
<div>
<h3>&nbsp;</h3>
<center>
<div id="div1">Immagine larga 150px</div>
<img id="tux1" src="/media/css_10.jpg" alt="tux">
<div id="div4">
<pre>
#div {
  width: 120px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
</pre>
</div>
<div id="div3">
<pre>
total_width = width + 2*padding + 2*border + 2*margin

total_width = 120 + 20 + 10 + 0 = 150px

</pre>
</div>
</center>
</div>
</v-click>
</div>

<style>
  #tux1 {  
    border:1px solid;
    width: 150px;
  }
  #div1 {
  margin-top:20px;
  font-size: 14px;
}
#div2 {
  text-align: left;
  box-sizing: content-box;
  font-size: 10px;
  width: 150px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
#div3 {
  text-align: left;
  font-size:14px;
  margin-top: 10px;
  border:0px solid gray;
}
#div4 {
  text-align: left;
  box-sizing: content-box;
  font-size: 10px;
  width: 120px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
</style>`,frontmatter:{},index:72,start:2163,end:2259,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:O5,meta:{slide:{raw:`
# Esercizio css_16

Box model

1. Creare ed editare i file *|cognome|_esercizio_css_16.html* e *|cognome|_esercizio_css_16.css*.
2. Creare una foto gallery statica e centrata nella pagina, cos\xEC formata:
   1. 1 riga per 4 colonne
   2. ogni cella deve contenere al centro un immagine di dimensione width pari a 250px
   3. ogni immagine deve avere una didascalia nel bordo inferiore con bordo rosso di spessore 5px
   4. nella didascalia deve esserci un breve titolo dell'immagine con padding pari a 8px
3.  Fornire il link github al file con nome |cognome|_esercizio_css_16.html
4.  Fornire il link github al file con nome |cognome|_esercizio_css_16.css

`,title:"Esercizio css_16",level:1,content:`# Esercizio css_16

Box model

1. Creare ed editare i file *|cognome|_esercizio_css_16.html* e *|cognome|_esercizio_css_16.css*.
2. Creare una foto gallery statica e centrata nella pagina, cos\xEC formata:
   1. 1 riga per 4 colonne
   2. ogni cella deve contenere al centro un immagine di dimensione width pari a 250px
   3. ogni immagine deve avere una didascalia nel bordo inferiore con bordo rosso di spessore 5px
   4. nella didascalia deve esserci un breve titolo dell'immagine con padding pari a 8px
3.  Fornire il link github al file con nome |cognome|_esercizio_css_16.html
4.  Fornire il link github al file con nome |cognome|_esercizio_css_16.css`,frontmatter:{},index:73,start:2260,end:2275,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:q5,meta:{slide:{raw:`
# CSS

Box model - sizing

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

- In CSS \xE8 possibile specificare il padding, border e margin per ognuno dei 4 lati:
  1. ***top***: lato superiore (***border-top*** - ***padding-top*** - ***margin-top***)
  2. ***bottom***: lato inferiore (***border-bottom*** - ***padding-bottom*** - ***margin-bottom***)
  3. ***left***: lato sinistro (***border-left*** - ***padding-left*** - ***margin-left***)
  4. ***right***: lato destro (***border-right*** - ***padding-right*** - ***margin-right***)
   
</div>

<div>
<div id="div1">
</div>
</div>
</div>

<br />
<center>
<img src="/media/css_11.jpg" width="700" />
</center>

<style>
  #div1 {
    width: 200px;
    height: 100px;
    border-top:3px solid red;
    border-bottom:5px dotted blue;
    border-left:8px solid green;
    border-right:3px dashed black;
  }
</style>
`,title:"CSS",level:1,content:`# CSS

Box model - sizing

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

- In CSS \xE8 possibile specificare il padding, border e margin per ognuno dei 4 lati:
  1. ***top***: lato superiore (***border-top*** - ***padding-top*** - ***margin-top***)
  2. ***bottom***: lato inferiore (***border-bottom*** - ***padding-bottom*** - ***margin-bottom***)
  3. ***left***: lato sinistro (***border-left*** - ***padding-left*** - ***margin-left***)
  4. ***right***: lato destro (***border-right*** - ***padding-right*** - ***margin-right***)
   
</div>

<div>
<div id="div1">
</div>
</div>
</div>

<br />
<center>
<img src="/media/css_11.jpg" width="700" />
</center>

<style>
  #div1 {
    width: 200px;
    height: 100px;
    border-top:3px solid red;
    border-bottom:5px dotted blue;
    border-left:8px solid green;
    border-right:3px dashed black;
  }
</style>`,frontmatter:{},index:74,start:2276,end:2314,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:n4,meta:{slide:{raw:`
# CSS

Box model - sizing

- Generalizziamo ora la formula per calcolare le dimensioni effettive di un elemento HTML

### total width

<br />

\`\`\`html
Total width = width+left padding+right padding+left border+right border+left margin+right margin
\`\`\`
<br /><br />

### total height

<br />

\`\`\`html
Total height = height + top padding+bottom padding+top border+bottom border+top margin+bottom margin
\`\`\`
`,title:"CSS",level:1,content:`# CSS

Box model - sizing

- Generalizziamo ora la formula per calcolare le dimensioni effettive di un elemento HTML

### total width

<br />

\`\`\`html
Total width = width+left padding+right padding+left border+right border+left margin+right margin
\`\`\`
<br /><br />

### total height

<br />

\`\`\`html
Total height = height + top padding+bottom padding+top border+bottom border+top margin+bottom margin
\`\`\``,frontmatter:{},index:75,start:2315,end:2339,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:o4,meta:{slide:{raw:`
# Esercizio css_17

CSS box model

<!-- risultato esercizio: 100,250,353 -->

1. Data la seguente pagina html: [esercizio_css_17.html](../support/esercizio_css_17.html) e relativo css:  [esercizio_css_17.css](../support/esercizio_css_17.css)
2. Editare il file e determinare il valore corretto per la propriet\xE0 **width** della regola CSS *#div1*,*#div2* e *#div3* in modo che:
   1. il componente **div1** abbia dimensione complessiva pari a **200px**
   2. il componente **div2** abbia dimensione complessiva pari a **300px**
   3. il componente **div3** abbia dimensione complessiva pari a **408px**
3. Fornire il link github al file con nome |cognome|_esercizio_css_17.html
4. Fornire il link github al file con nome |cognome|_esercizio_css_17.css


`,title:"Esercizio css_17",level:1,content:`# Esercizio css_17

CSS box model

<!-- risultato esercizio: 100,250,353 -->

1. Data la seguente pagina html: [esercizio_css_17.html](../support/esercizio_css_17.html) e relativo css:  [esercizio_css_17.css](../support/esercizio_css_17.css)
2. Editare il file e determinare il valore corretto per la propriet\xE0 **width** della regola CSS *#div1*,*#div2* e *#div3* in modo che:
   1. il componente **div1** abbia dimensione complessiva pari a **200px**
   2. il componente **div2** abbia dimensione complessiva pari a **300px**
   3. il componente **div3** abbia dimensione complessiva pari a **408px**
3. Fornire il link github al file con nome |cognome|_esercizio_css_17.html
4. Fornire il link github al file con nome |cognome|_esercizio_css_17.css`,frontmatter:{},index:76,start:2340,end:2357,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:i4,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">I bordi di un elemento</h1>
`,content:'<h1 class="sezione">I bordi di un elemento</h1>',frontmatter:{layout:"section"},index:77,start:2357,end:2362,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:m4,meta:{slide:{raw:`
# CSS

Borders

- La propriet\xE0 CSS \`border-style\` permette di specificare lo stiledel bordo di un elemento.

### border style

<center>
<img src="/media/css_12.jpg" width="550" />
</center>

`,title:"CSS",level:1,content:`# CSS

Borders

- La propriet\xE0 CSS \`border-style\` permette di specificare lo stiledel bordo di un elemento.

### border style

<center>
<img src="/media/css_12.jpg" width="550" />
</center>`,frontmatter:{},index:78,start:2363,end:2377,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:y4,meta:{slide:{raw:`
# CSS

Borders

- La propriet\xE0 CSS \`border-width\` permette di specificare lo spessore di un elemento.

### border width

<center>
<img src="/media/css_13.jpg" width="300" />
</center>

`,title:"CSS",level:1,content:`# CSS

Borders

- La propriet\xE0 CSS \`border-width\` permette di specificare lo spessore di un elemento.

### border width

<center>
<img src="/media/css_13.jpg" width="300" />
</center>`,frontmatter:{},index:79,start:2378,end:2392,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:C4,meta:{slide:{raw:`
# CSS

Borders

- La propriet\xE0 CSS \`border-color\` permette di specificare il colore di un elemento.

### border color

<center>
<img src="/media/css_14.jpg" width="300" />
</center>

`,title:"CSS",level:1,content:`# CSS

Borders

- La propriet\xE0 CSS \`border-color\` permette di specificare il colore di un elemento.

### border color

<center>
<img src="/media/css_14.jpg" width="300" />
</center>`,frontmatter:{},index:80,start:2393,end:2407,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:O4,meta:{slide:{raw:`
# CSS

Borders

- La propriet\xE0 CSS \`border-radius\` permette di specificare la rotondit\xE0 di un bordo di un elemento.

### border radius

<center>
<img src="/media/css_15.jpg" width="300" />
</center>

`,title:"CSS",level:1,content:`# CSS

Borders

- La propriet\xE0 CSS \`border-radius\` permette di specificare la rotondit\xE0 di un bordo di un elemento.

### border radius

<center>
<img src="/media/css_15.jpg" width="300" />
</center>`,frontmatter:{},index:81,start:2408,end:2422,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:q4,meta:{slide:{raw:`
# CSS

Borders

### border shorthand

- CSS ci permette di scrivere le dichiarazioni CSS in modo pi\xF9 compatto, tramite la forma nominata \`shorthand\`
- Le 3 propriet\xE0 viste prime ***border-style***, ***border-width***, ***border-color*** possono essere scritte in modo compatto in questo modo

\`Dichiarazione CSS - border: <width> <style> <color>;\`

<center>
<img src="/media/css_16.jpg" width="290" />
</center>
`,title:"CSS",level:1,content:`# CSS

Borders

### border shorthand

- CSS ci permette di scrivere le dichiarazioni CSS in modo pi\xF9 compatto, tramite la forma nominata \`shorthand\`
- Le 3 propriet\xE0 viste prime ***border-style***, ***border-width***, ***border-color*** possono essere scritte in modo compatto in questo modo

\`Dichiarazione CSS - border: <width> <style> <color>;\`

<center>
<img src="/media/css_16.jpg" width="290" />
</center>`,frontmatter:{},index:82,start:2423,end:2439,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:K4,meta:{slide:{raw:`
# Esercizio css_18

CSS borders

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_css_18.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_18.css*
3. Dichiarare lo stile della pagina in modo che tutti i titoli di primo livello abbiano un bordo inferiore solido, spesso 5px e di colore blue ed un bordo sinistro spesso 7px di colore nero 
4. Dichiarare lo stile della pagina in modo che tutti i titoli di secondo livello abbiano un bordo superiore trattegiato, spesso 2px di colore verde
5. Dichiarare lo stile della pagina in modo che tutti i paragrafi abbiano un bordo un bordo inferiore tratteggiato spesso 3px di colore grigio e i bordi laterali di color verde 
6. Fornire il link github al file con nome |cognome|_esercizio_css_18.html
7.  Fornire il link github al file con nome |cognome|_esercizio_css_18.css


`,title:"Esercizio css_18",level:1,content:`# Esercizio css_18

CSS borders

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_css_18.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_18.css*
3. Dichiarare lo stile della pagina in modo che tutti i titoli di primo livello abbiano un bordo inferiore solido, spesso 5px e di colore blue ed un bordo sinistro spesso 7px di colore nero 
4. Dichiarare lo stile della pagina in modo che tutti i titoli di secondo livello abbiano un bordo superiore trattegiato, spesso 2px di colore verde
5. Dichiarare lo stile della pagina in modo che tutti i paragrafi abbiano un bordo un bordo inferiore tratteggiato spesso 3px di colore grigio e i bordi laterali di color verde 
6. Fornire il link github al file con nome |cognome|_esercizio_css_18.html
7.  Fornire il link github al file con nome |cognome|_esercizio_css_18.css`,frontmatter:{},index:83,start:2440,end:2455,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:G4,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Formattazione del Testo</h1>

`,content:'<h1 class="sezione">Formattazione del Testo</h1>',frontmatter:{layout:"section"},index:84,start:2455,end:2461,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:J4,meta:{slide:{raw:`
# CSS

Text Formatting

- CSS mette a disposizione delle propriet\xE0 per definire la formattazione del testo:
  - ***color*** : specifica il colore del testo
  - ***text-align*** : specifica l'allineamento e la giustificazione del testo all'interno di un contenitore
  - ***text-decoration*** : permette di decorare il testo in vari modi (sottolineato, ...)
  - ***text-transform*** : permette di applicare delle trasformazioni al testo (uppercase, lowercase, ...)
  - ***line-height*** : permette di specificare lo spazio tra due linee di testo
  - ***text-shadow*** : permette di aggiungere un'ombra ad un testo 

`,title:"CSS",level:1,content:`# CSS

Text Formatting

- CSS mette a disposizione delle propriet\xE0 per definire la formattazione del testo:
  - ***color*** : specifica il colore del testo
  - ***text-align*** : specifica l'allineamento e la giustificazione del testo all'interno di un contenitore
  - ***text-decoration*** : permette di decorare il testo in vari modi (sottolineato, ...)
  - ***text-transform*** : permette di applicare delle trasformazioni al testo (uppercase, lowercase, ...)
  - ***line-height*** : permette di specificare lo spazio tra due linee di testo
  - ***text-shadow*** : permette di aggiungere un'ombra ad un testo`,frontmatter:{},index:85,start:2462,end:2476,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:pI,meta:{slide:{raw:`
# CSS

color

\`{ color: red; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ color: #3feb00; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ color: rgba(45, 0, 224, 1); }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ color: hsla(10, 100%, 44%, 1); }\`
<p id="id4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { color: red; border:1px solid;}
#id2 { color: #3feb00; border:1px solid;}
#id3 { color: rgba(45, 0, 224, 1); border:1px solid;}
#id4 { color: hsla(10, 100%, 44%, 1); border:1px solid;}
</style>
`,title:"CSS",level:1,content:`# CSS

color

\`{ color: red; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ color: #3feb00; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ color: rgba(45, 0, 224, 1); }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ color: hsla(10, 100%, 44%, 1); }\`
<p id="id4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { color: red; border:1px solid;}
#id2 { color: #3feb00; border:1px solid;}
#id3 { color: rgba(45, 0, 224, 1); border:1px solid;}
#id4 { color: hsla(10, 100%, 44%, 1); border:1px solid;}
</style>`,frontmatter:{},index:86,start:2477,end:2502,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:xI,meta:{slide:{raw:`
# CSS

text-align

\`{ text-align: left; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-align: center; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-align: right; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-align: justify; }\`
<p id="id4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { text-align: left; border:1px solid;}
#id2 { text-align: center; border:1px solid;}
#id3 { text-align: right; border:1px solid;}
#id4 { text-align: justify; border:1px solid;}
</style>

`,title:"CSS",level:1,content:`# CSS

text-align

\`{ text-align: left; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-align: center; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-align: right; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-align: justify; }\`
<p id="id4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { text-align: left; border:1px solid;}
#id2 { text-align: center; border:1px solid;}
#id3 { text-align: right; border:1px solid;}
#id4 { text-align: justify; border:1px solid;}
</style>`,frontmatter:{},index:87,start:2503,end:2529,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:OI,meta:{slide:{raw:`
# CSS

text-decoration

\`{ text-decoration: none; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  text-decoration: overline; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-decoration: line-through; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-decoration: underline; }\`
<p id="id4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { text-decoration: none; border:1px solid;}
#id2 {  text-decoration: overline; border:1px solid;}
#id3 { text-decoration: line-through;border:1px solid;}
#id4 { text-decoration: underline; border:1px solid;}
</style>

`,title:"CSS",level:1,content:`# CSS

text-decoration

\`{ text-decoration: none; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  text-decoration: overline; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-decoration: line-through; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-decoration: underline; }\`
<p id="id4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { text-decoration: none; border:1px solid;}
#id2 {  text-decoration: overline; border:1px solid;}
#id3 { text-decoration: line-through;border:1px solid;}
#id4 { text-decoration: underline; border:1px solid;}
</style>`,frontmatter:{},index:88,start:2530,end:2556,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:WI,meta:{slide:{raw:`
# CSS

text-trasnform

\`{ text-transform: uppercase; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  text-transform: lowercase; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-transform: capitalize; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { text-transform: uppercase; border:1px solid;}
#id2 {  text-transform: lowercase; border:1px solid;}
#id3 { text-transform: capitalize;;border:1px solid;}
</style>


`,title:"CSS",level:1,content:`# CSS

text-trasnform

\`{ text-transform: uppercase; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  text-transform: lowercase; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ text-transform: capitalize; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { text-transform: uppercase; border:1px solid;}
#id2 {  text-transform: lowercase; border:1px solid;}
#id3 { text-transform: capitalize;;border:1px solid;}
</style>`,frontmatter:{},index:89,start:2557,end:2580,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:nT,meta:{slide:{raw:`
# CSS

line-height

\`{ line-height: 0.8; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  line-height: 1.6; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ line-height: 2.4; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { line-height: 0.8; border:1px solid;}
#id2 {  line-height: 1.6; border:1px solid;}
#id3 { line-height: 2.4; border:1px solid;}
</style>

`,title:"CSS",level:1,content:`# CSS

line-height

\`{ line-height: 0.8; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  line-height: 1.6; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{ line-height: 2.4; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 { line-height: 0.8; border:1px solid;}
#id2 {  line-height: 1.6; border:1px solid;}
#id3 { line-height: 2.4; border:1px solid;}
</style>`,frontmatter:{},index:90,start:2581,end:2603,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:pT,meta:{slide:{raw:`
# CSS

text-shadow

\`{   text-shadow: 2px 2px; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  text-shadow: 4px 0px red; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  text-shadow: 2px 2px 5px red; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 {   text-shadow: 2px 2px; border:1px solid;}
#id2 {  text-shadow: 4px 0px red; border:1px solid;}
#id3 {  text-shadow: 2px 2px 5px red;border:1px solid;}
</style>
`,title:"CSS",level:1,content:`# CSS

text-shadow

\`{   text-shadow: 2px 2px; }\`
<p id="id1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  text-shadow: 4px 0px red; }\`
<p id="id2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

\`{  text-shadow: 2px 2px 5px red; }\`
<p id="id3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


<style>
#id1 {   text-shadow: 2px 2px; border:1px solid;}
#id2 {  text-shadow: 4px 0px red; border:1px solid;}
#id3 {  text-shadow: 2px 2px 5px red;border:1px solid;}
</style>`,frontmatter:{},index:91,start:2604,end:2625,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:fT,meta:{slide:{raw:`
# Esercizio css_19

Text formatting

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_css_19.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_19.css*
3. Dichiarare gli stili necessari affinch\xE8:
   1. tutti i titoli di primo livello siano upper case e di colore blue
   2. tutti i titoli di secondo livello inizino con una lettera maiuscola e di colore rosso e siano sottolineati
   3. tutti i paragrafi siano giustificati tranne il 3zo paragrafo che deve avere un allineamento a destra
   4. una frase o citazione importante del testo, deve possedere un effetto di ombreggiatura a piacere
4. Fornire il link github al file con nome |cognome|_esercizio_css_19.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_19.css
`,title:"Esercizio css_19",level:1,content:`# Esercizio css_19

Text formatting

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_css_19.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_19.css*
3. Dichiarare gli stili necessari affinch\xE8:
   1. tutti i titoli di primo livello siano upper case e di colore blue
   2. tutti i titoli di secondo livello inizino con una lettera maiuscola e di colore rosso e siano sottolineati
   3. tutti i paragrafi siano giustificati tranne il 3zo paragrafo che deve avere un allineamento a destra
   4. una frase o citazione importante del testo, deve possedere un effetto di ombreggiatura a piacere
4. Fornire il link github al file con nome |cognome|_esercizio_css_19.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_19.css`,frontmatter:{},index:92,start:2626,end:2641,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:gT,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Font ed Icone</h1>

`,content:'<h1 class="sezione">Font ed Icone</h1>',frontmatter:{layout:"section"},index:93,start:2641,end:2647,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:yT,meta:{slide:{raw:`
# CSS

Font

- In CSS \xE8 possibile cambiare il font del testo.
- Usare un font che \xE8 facile da leggere \xE8 importante.
- Ci sono 5 famiglie di font generici, ognuno con specifici font utilizzabili:
  1.  ***Serif***  : 
  2.  ***Sans-serif*** 
  3.  ***Monospace*** 
  4.  ***Cursive*** 
  5.  ***Fantasy***

- Per specificare il font si usa la propriet\xE0 \`font-family:<font name>\`
`,title:"CSS",level:1,content:`# CSS

Font

- In CSS \xE8 possibile cambiare il font del testo.
- Usare un font che \xE8 facile da leggere \xE8 importante.
- Ci sono 5 famiglie di font generici, ognuno con specifici font utilizzabili:
  1.  ***Serif***  : 
  2.  ***Sans-serif*** 
  3.  ***Monospace*** 
  4.  ***Cursive*** 
  5.  ***Fantasy***

- Per specificare il font si usa la propriet\xE0 \`font-family:<font name>\``,frontmatter:{},index:94,start:2648,end:2664,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:zT,meta:{slide:{raw:`
# CSS

Font

<center>
<img src="/media/css_17.jpg" width="500" />
</center>

`,title:"CSS",level:1,content:`# CSS

Font

<center>
<img src="/media/css_17.jpg" width="500" />
</center>`,frontmatter:{},index:95,start:2665,end:2675,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:LT,meta:{slide:{raw:`
# CSS

Font Fall Back

- Specificando un font con la propriet\xE0 \`font-family\` non si pu\xF2 avere la certezza che questo venga visualizzato correttamente.
- Questo perch\xE8 se il font non \xE8 installato o non \xE8 trovato, non pu\xF2 essere visulizzato
- Quindi il browser, in questo caso, visualizzer\xE0 un font di ***fall-back***
- Per questo motivo \xE8 sempre **UNA BUONA REGOLA** specificare pi\xF9 di un font, in modo che se il primo non \xE8 disponibile, il browser prover\xE0 a visualizzare il successivo e cos\xEC via.

\`\`\`html
{ font-family: "Times New Roman", Times, serif; }
\`\`\`

- Questa descrizone CSS, specifica di usare il font "Times New Roman" se disponibile. In caso contrario indica al browser di provare a dutilizzare il font "Times" e come ultima spiaggia qualsiasi font disponibile della famiglia "serif".

`,title:"CSS",level:1,content:`# CSS

Font Fall Back

- Specificando un font con la propriet\xE0 \`font-family\` non si pu\xF2 avere la certezza che questo venga visualizzato correttamente.
- Questo perch\xE8 se il font non \xE8 installato o non \xE8 trovato, non pu\xF2 essere visulizzato
- Quindi il browser, in questo caso, visualizzer\xE0 un font di ***fall-back***
- Per questo motivo \xE8 sempre **UNA BUONA REGOLA** specificare pi\xF9 di un font, in modo che se il primo non \xE8 disponibile, il browser prover\xE0 a visualizzare il successivo e cos\xEC via.

\`\`\`html
{ font-family: "Times New Roman", Times, serif; }
\`\`\`

- Questa descrizone CSS, specifica di usare il font "Times New Roman" se disponibile. In caso contrario indica al browser di provare a dutilizzare il font "Times" e come ultima spiaggia qualsiasi font disponibile della famiglia "serif".`,frontmatter:{},index:96,start:2676,end:2693,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:AT,meta:{slide:{raw:`
# CSS

Font Web Safe

- I font **web safe** sono font che sono universalmente disponibili su tutti i sistemi operativi e browser pi\xF9 comuni
- Pertanto l'uso di questo font massimizza la probabilit\xE0 che la pagina venga visualizzata come inizialmente pensata dall'autore
- Qui una lista di font **web-safe** :
  - ***Arial (sans-serif)*** :<span style="font-family:Arial;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Verdana (sans-serif)*** :<span style="font-family:Verdana;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Helvetica (sans-serif)*** :<span style="font-family:Helvetica;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Tahoma (sans-serif)*** :<span style="font-family:Tahoma;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Times New Roman (serif)*** :<span style="font-family:'Times New Roman';">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Georgia (serif)*** :<span style="font-family:Georgia;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Garamond (serif)*** :<span style="font-family:Garamond;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Courier New (monospace)*** :<span style="font-family:'Courier New';font-size:13px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
 
`,title:"CSS",level:1,content:`# CSS

Font Web Safe

- I font **web safe** sono font che sono universalmente disponibili su tutti i sistemi operativi e browser pi\xF9 comuni
- Pertanto l'uso di questo font massimizza la probabilit\xE0 che la pagina venga visualizzata come inizialmente pensata dall'autore
- Qui una lista di font **web-safe** :
  - ***Arial (sans-serif)*** :<span style="font-family:Arial;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Verdana (sans-serif)*** :<span style="font-family:Verdana;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Helvetica (sans-serif)*** :<span style="font-family:Helvetica;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Tahoma (sans-serif)*** :<span style="font-family:Tahoma;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Times New Roman (serif)*** :<span style="font-family:'Times New Roman';">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Georgia (serif)*** :<span style="font-family:Georgia;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Garamond (serif)*** :<span style="font-family:Garamond;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  - ***Courier New (monospace)*** :<span style="font-family:'Courier New';font-size:13px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>`,frontmatter:{},index:97,start:2694,end:2712,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:VT,meta:{slide:{raw:`
# CSS

Font Style

- La propriet\xE0 \`font-style: <style>\` permette di variare alcune caratteristiche di visualizzazione del font

\`{ font-style:normal; }\`
<p style="font-style:normal;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-style:italic; }\`
<p style="font-style:italic;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-style:oblique; }\`
<p style="font-style:oblique;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`,title:"CSS",level:1,content:`# CSS

Font Style

- La propriet\xE0 \`font-style: <style>\` permette di variare alcune caratteristiche di visualizzazione del font

\`{ font-style:normal; }\`
<p style="font-style:normal;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-style:italic; }\`
<p style="font-style:italic;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-style:oblique; }\`
<p style="font-style:oblique;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`,frontmatter:{},index:98,start:2713,end:2730,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:XT,meta:{slide:{raw:`
# CSS

Font Weight

- La propriet\xE0 \`font-weight: <weight>\` permette di variare alcune caratteristiche di visualizzazione del font

\`{ font-weight: normal; }\`
<p style="font-weight: normal;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-weight: bold;}\`
<p style="font-weight: bold;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`,title:"CSS",level:1,content:`# CSS

Font Weight

- La propriet\xE0 \`font-weight: <weight>\` permette di variare alcune caratteristiche di visualizzazione del font

\`{ font-weight: normal; }\`
<p style="font-weight: normal;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-weight: bold;}\`
<p style="font-weight: bold;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`,frontmatter:{},index:99,start:2731,end:2745,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:c6,meta:{slide:{raw:`
# CSS

Font Size

- La propriet\xE0 \`font-size: <size>\` permette di variare le dimensioni del font
- La dimensione pu\xF2 essere specificata in valore assoluto o relativo

### dimensione assoluta
\`{ font-size: 30px; }\`
<p style="font-size: 30px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-size: 10px; }\`
<p style="font-size: 10px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

- L'utente non pu\xF2 cambiare la dimensione del font tramite le impostazioni del browser

`,title:"CSS",level:1,content:`# CSS

Font Size

- La propriet\xE0 \`font-size: <size>\` permette di variare le dimensioni del font
- La dimensione pu\xF2 essere specificata in valore assoluto o relativo

### dimensione assoluta
\`{ font-size: 30px; }\`
<p style="font-size: 30px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-size: 10px; }\`
<p style="font-size: 10px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

- L'utente non pu\xF2 cambiare la dimensione del font tramite le impostazioni del browser`,frontmatter:{},index:100,start:2746,end:2764,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:b6,meta:{slide:{raw:`
# CSS

Font Size

### valore relativo

- Imposta la dimensione del font relativamente 

\`{ font-size: 1em; }\`
<p style="font-size: 1em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-size: 2em; }\`
<p style="font-size: 2em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-size: 0.5em; }\`
<p style="font-size: 0.5em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

- **1em** equivale alla dimensione del font attuale per la pagina (default 16px)
- L'utente pu\xF2 adattare la dimensione del font tramite le impostazioni del browser

`,title:"CSS",level:1,content:`# CSS

Font Size

### valore relativo

- Imposta la dimensione del font relativamente 

\`{ font-size: 1em; }\`
<p style="font-size: 1em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-size: 2em; }\`
<p style="font-size: 2em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-size: 0.5em; }\`
<p style="font-size: 0.5em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

- **1em** equivale alla dimensione del font attuale per la pagina (default 16px)
- L'utente pu\xF2 adattare la dimensione del font tramite le impostazioni del browser`,frontmatter:{},index:101,start:2765,end:2787,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:L6,meta:{slide:{raw:`
# CSS

Google Font

- Google mette a disposizione gratuitamente oltre [1000 font](https://fonts.google.com/) 
- Per utilizzarli basta inserire un tag *link* nella sezione *head* della pagina HTML

\`\`\`html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=<nome font>">
</head>

oppure nel caso di pi\xF9 font

<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=<font1>|<font2>|<fontN>">
</head>
\`\`\`

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia|Audiowide">

\`{ font-family: Sofia, sans-serif; }\`
<p style="font-family: Sofia, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-family: Audiowide, sans-serif; }\`
<p style="font-family: Audiowide, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`,title:"CSS",level:1,content:`# CSS

Google Font

- Google mette a disposizione gratuitamente oltre [1000 font](https://fonts.google.com/) 
- Per utilizzarli basta inserire un tag *link* nella sezione *head* della pagina HTML

\`\`\`html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=<nome font>">
</head>

oppure nel caso di pi\xF9 font

<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=<font1>|<font2>|<fontN>">
</head>
\`\`\`

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia|Audiowide">

\`{ font-family: Sofia, sans-serif; }\`
<p style="font-family: Sofia, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

\`{ font-family: Audiowide, sans-serif; }\`
<p style="font-family: Audiowide, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`,frontmatter:{},index:102,start:2788,end:2817,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:K6,meta:{slide:{raw:`
# CSS

Google Font


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Modak|Hanalei|Barriecito|Margarine">

\`{ font-family: 'Modak', cursive; }\`
<p style="font-family: 'Modak', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<br>

\`{ font-family: 'Hanalei', cursive; }\`
<p style="font-family: 'Hanalei', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<br>

\`{ font-family: 'Barriecito', cursive; }\`
<p style="font-family: 'Barriecito', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<br>

\`{ font-family: 'Margarine', cursive; }\`
<p style="font-family: 'Margarine', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

`,title:"CSS",level:1,content:`# CSS

Google Font


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Modak|Hanalei|Barriecito|Margarine">

\`{ font-family: 'Modak', cursive; }\`
<p style="font-family: 'Modak', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<br>

\`{ font-family: 'Hanalei', cursive; }\`
<p style="font-family: 'Hanalei', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<br>

\`{ font-family: 'Barriecito', cursive; }\`
<p style="font-family: 'Barriecito', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<br>

\`{ font-family: 'Margarine', cursive; }\`
<p style="font-family: 'Margarine', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`,frontmatter:{},index:103,start:2818,end:2842,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:aE,meta:{slide:{raw:`
# CSS

Google Icon

- Google mette a disposizione gratuita molte centinaia di [icone](https://fonts.google.com/icons) 
- Per utilizzarli basta inserire un tag *link* nella sezione *head* della pagina HTML

\`\`\`html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
\`\`\`
<br>

- Per inserire un'icona basta usare il tag \`<span>\` in questo modo:

\`\`\`html
<span class="material-icons"><nome dell'icona></span>
\`\`\`
<br>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

\`<span class="material-icons">favorite</span>\`
<span class="material-icons" style="color:red;">&nbsp;&nbsp;&nbsp;favorite</span>

\`<span class="material-icons">thumb_up</span>\`
<span class="material-icons" style="color:blue;">&nbsp;&nbsp;&nbsp;thumb_up</span>

\`<span class="material-icons">emoji_emotions</span>\`
<span class="material-icons" style="color:yellow;">&nbsp;&nbsp;&nbsp;emoji_emotions</span>

`,title:"CSS",level:1,content:`# CSS

Google Icon

- Google mette a disposizione gratuita molte centinaia di [icone](https://fonts.google.com/icons) 
- Per utilizzarli basta inserire un tag *link* nella sezione *head* della pagina HTML

\`\`\`html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
\`\`\`
<br>

- Per inserire un'icona basta usare il tag \`<span>\` in questo modo:

\`\`\`html
<span class="material-icons"><nome dell'icona></span>
\`\`\`
<br>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

\`<span class="material-icons">favorite</span>\`
<span class="material-icons" style="color:red;">&nbsp;&nbsp;&nbsp;favorite</span>

\`<span class="material-icons">thumb_up</span>\`
<span class="material-icons" style="color:blue;">&nbsp;&nbsp;&nbsp;thumb_up</span>

\`<span class="material-icons">emoji_emotions</span>\`
<span class="material-icons" style="color:yellow;">&nbsp;&nbsp;&nbsp;emoji_emotions</span>`,frontmatter:{},index:104,start:2843,end:2877,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:cE,meta:{slide:{raw:`
# CSS

List

- CSS permette di definire lo stile anche per le liste tramite la propriet\xE0 \`list-style-type:<type>\`

- Per le liste *unordered* i possibili tipi sono:
  - ***circle***
  - ***square***

- Per le liste *ordered* i possibili tipi sono:
  - ***upper-roman***
  - ***lower-alpha***
  `,title:"CSS",level:1,content:`# CSS

List

- CSS permette di definire lo stile anche per le liste tramite la propriet\xE0 \`list-style-type:<type>\`

- Per le liste *unordered* i possibili tipi sono:
  - ***circle***
  - ***square***

- Per le liste *ordered* i possibili tipi sono:
  - ***upper-roman***
  - ***lower-alpha***`,frontmatter:{},index:105,start:2878,end:2893,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:_E,meta:{slide:{raw:`
# CSS

List

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<p>Unordered lists:</p>
<ul class="cerchio">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>


<p>Unordered lists quadrato:</p>
<ul class="quadrato">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
\`\`\`
</div>
<div>

\`\`\`css
ul.cercho {
  list-style-type: circle;
}

ul.quadrato {
  list-style-type: square;
}
\`\`\`
</div>
<div>

<p>Unordered lists cerchio:</p>
<ul class="cerchio">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<p>Unordered lists quadrato:</p>
<ul class="quadrato">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

</div>
</div>

<style>
ul.cerchio {
  list-style-type: circle;
}
ul.quadrato {
  list-style-type: square;
}
</style>
`,title:"CSS",level:1,content:`# CSS

List

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<p>Unordered lists:</p>
<ul class="cerchio">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>


<p>Unordered lists quadrato:</p>
<ul class="quadrato">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
\`\`\`
</div>
<div>

\`\`\`css
ul.cercho {
  list-style-type: circle;
}

ul.quadrato {
  list-style-type: square;
}
\`\`\`
</div>
<div>

<p>Unordered lists cerchio:</p>
<ul class="cerchio">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<p>Unordered lists quadrato:</p>
<ul class="quadrato">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

</div>
</div>

<style>
ul.cerchio {
  list-style-type: circle;
}
ul.quadrato {
  list-style-type: square;
}
</style>`,frontmatter:{},index:106,start:2894,end:2959,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:zE,meta:{slide:{raw:`
# CSS

List

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<p>Ordered lists romano:</p>
<ol class="roman">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<p>Ordered lists alpha:</p>
<ol class="alpha">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>
\`\`\`
</div>
<div>

\`\`\`css
ol.roman {
  list-style-type: upper-roman;
}

ol.alpha {
  list-style-type: lower-alpha;
}
\`\`\`
</div>
<div>

<p>Ordered lists romano:</p>
<ol class="roman">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<p>Ordered lists alpha:</p>
<ol class="alpha">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

</div>
</div>

<style>
ol.roman {
  list-style-type: upper-roman;
}

ol.alpha {
  list-style-type: lower-alpha;
}
</style>
`,title:"CSS",level:1,content:`# CSS

List

<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html
<p>Ordered lists romano:</p>
<ol class="roman">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<p>Ordered lists alpha:</p>
<ol class="alpha">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>
\`\`\`
</div>
<div>

\`\`\`css
ol.roman {
  list-style-type: upper-roman;
}

ol.alpha {
  list-style-type: lower-alpha;
}
\`\`\`
</div>
<div>

<p>Ordered lists romano:</p>
<ol class="roman">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<p>Ordered lists alpha:</p>
<ol class="alpha">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

</div>
</div>

<style>
ol.roman {
  list-style-type: upper-roman;
}

ol.alpha {
  list-style-type: lower-alpha;
}
</style>`,frontmatter:{},index:107,start:2960,end:3025,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:OE,meta:{slide:{raw:`
# CSS

List

- Possiamo anche usare un'icome come elemento di una lista
  
<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html

<p>Unordered lists con icona:</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
  <li>Fanta</li>
  <li>Sprite</li>
</ul>
\`\`\`
</div>
<div>

\`\`\`css
ul {
  list-style-type: none;
}
  
li:before {
  content: 'done_outline';
  font-family: 'Material Icons';
  color: red;
  vertical-align: -10%;
  padding-right: 10px;
}
\`\`\`
</div>
<div>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

<p>Unordered lists con icona:</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
  <li>Fanta</li>
  <li>Sprite</li>
</ul>


</div>
</div>

<style>
ul{
    list-style-type: none;
}
  
li:before{
  content: 'done_outline';
  font-family: 'Material Icons';
  color: red;
  vertical-align: -10%;
  padding-right: 10px;
}
</style>
`,title:"CSS",level:1,content:`# CSS

List

- Possiamo anche usare un'icome come elemento di una lista
  
<div class="grid grid-flow-col auto-cols-max gap-8">
<div>

\`\`\`html

<p>Unordered lists con icona:</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
  <li>Fanta</li>
  <li>Sprite</li>
</ul>
\`\`\`
</div>
<div>

\`\`\`css
ul {
  list-style-type: none;
}
  
li:before {
  content: 'done_outline';
  font-family: 'Material Icons';
  color: red;
  vertical-align: -10%;
  padding-right: 10px;
}
\`\`\`
</div>
<div>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

<p>Unordered lists con icona:</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
  <li>Fanta</li>
  <li>Sprite</li>
</ul>


</div>
</div>

<style>
ul{
    list-style-type: none;
}
  
li:before{
  content: 'done_outline';
  font-family: 'Material Icons';
  color: red;
  vertical-align: -10%;
  padding-right: 10px;
}
</style>`,frontmatter:{},index:108,start:3026,end:3095,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:DE,meta:{slide:{raw:`
# Esercizio css_20

CSS text formatting

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_css_20.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_20.css*
3. Dichiarare gli stili necessari affinch\xE8:
   1. i primi tre titoli di primo livelli abbiano 3 font differenti scelti tra quelli forniti da google (oltre 1000)
   2. nel testo compaiano, laddove appropriato, delle icone selezionate tra le migliaia messe a disposizione da google
   3. nel testo compaia una lista unordered con stile *circle*
   4. nel testo compaina una lista ordered con stile  con numeri romani
   5. nel testo compaina una lista unordered che abbiamo come bullet item un'icona fornita da google 
4.  Fornire il link github al file con nome |cognome|_esercizio_css_20.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_20.css
`,title:"Esercizio css_20",level:1,content:`# Esercizio css_20

CSS text formatting

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_css_20.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_20.css*
3. Dichiarare gli stili necessari affinch\xE8:
   1. i primi tre titoli di primo livelli abbiano 3 font differenti scelti tra quelli forniti da google (oltre 1000)
   2. nel testo compaiano, laddove appropriato, delle icone selezionate tra le migliaia messe a disposizione da google
   3. nel testo compaia una lista unordered con stile *circle*
   4. nel testo compaina una lista ordered con stile  con numeri romani
   5. nel testo compaina una lista unordered che abbiamo come bullet item un'icona fornita da google 
4.  Fornire il link github al file con nome |cognome|_esercizio_css_20.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_20.css`,frontmatter:{},index:109,start:3096,end:3112,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:NE,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Elementi nascosti e elementi fantasma</h1>

`,content:'<h1 class="sezione">Elementi nascosti e elementi fantasma</h1>',frontmatter:{layout:"section"},index:110,start:3112,end:3118,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:WE,meta:{slide:{raw:`
# CSS

Display e Visibility

- Ogni elemento HTMLha un valore di **display** predefito che determina il modo in cui l'elemto viene visualizzato.
- Pertanto una propriet\xE0 CSS molto importante \xE8 \`dislay: <display value>\`
- Questa propriet\xE0, appunto, modifica il valore di display di un tag HTML
- Tramite questa propriet\xE0 si pu\xF2 decidere se l'elemento viene visualizzato o meno e come.
- I valori che \`display\` pu\xF2 assumere sono
  - ***inline***: elemento posizionato sulla linea corrente \`<span>\`
  - ***block***: elemento posizionato su una nuova linea  \`<div>\`
  - ***none***: l'elemento HTML <u>non \xE8 visualizzato e rimosso dal DOM</u>, pertanto lo spazio **NON** \xE8 occupato
- La propriet\xE0 \`visibility: hidden | visible\` in modo analogo a \`display: none\` rende l'elemento invisibile, <u>senza rimuoverlo dal DOM</u>, perci\xF2  lo spazio **RIMANE** occupato.
- Normalmente queste propriet\xE0 sono manipolate da JavaScript fornendo cos\xEC uno strumento utile alla creazione di applicazioni dinamiche.
`,title:"CSS",level:1,content:`# CSS

Display e Visibility

- Ogni elemento HTMLha un valore di **display** predefito che determina il modo in cui l'elemto viene visualizzato.
- Pertanto una propriet\xE0 CSS molto importante \xE8 \`dislay: <display value>\`
- Questa propriet\xE0, appunto, modifica il valore di display di un tag HTML
- Tramite questa propriet\xE0 si pu\xF2 decidere se l'elemento viene visualizzato o meno e come.
- I valori che \`display\` pu\xF2 assumere sono
  - ***inline***: elemento posizionato sulla linea corrente \`<span>\`
  - ***block***: elemento posizionato su una nuova linea  \`<div>\`
  - ***none***: l'elemento HTML <u>non \xE8 visualizzato e rimosso dal DOM</u>, pertanto lo spazio **NON** \xE8 occupato
- La propriet\xE0 \`visibility: hidden | visible\` in modo analogo a \`display: none\` rende l'elemento invisibile, <u>senza rimuoverlo dal DOM</u>, perci\xF2  lo spazio **RIMANE** occupato.
- Normalmente queste propriet\xE0 sono manipolate da JavaScript fornendo cos\xEC uno strumento utile alla creazione di applicazioni dinamiche.`,frontmatter:{},index:111,start:3119,end:3135,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:JE,meta:{slide:{raw:`
# CSS

Display e Visibility

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

\`\`\`html
<div class="blocchi">Block1</div>
<div class="blocchi">Block2</div>
<div class="blocchi">Block3</div>
<div class="blocchi rimosso">Block4</div>
<div class="linea">Line1</div>
<div class="linea">Line2</div>
<div class="linea">Line3</div>
<div class="blocchi invisibile">Block5</div>
<div class="blocchi">Block6</div>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
  .blocchi {
    border:1px solid black; 
    width:200px;
    height:50px;
    margin-bottom: 10px;
  }

  .linea {
    display: inline;
    border:1px solid black; 
    width:200px; /*ignorato*/
    height:50px;/*ignorato*/
  }

  .rimosso {display: none;}
  
  .invisibile {
    visibility: hidden;
  }
\`\`\`
</div>

<div> <!-- col3 -->
<div class="blocchi">Block1</div>
<div class="blocchi">Block2</div>
<div class="blocchi">Block3</div>
<div class="blocchi rimosso">Block4</div>
<div class="linea">Line1</div>
<div class="linea">Line2</div>
<div class="linea">Line3</div>
<div class="blocchi invisibile">Block5</div>
<div class="blocchi">Block6</div>

</div>

</div>

<style>
  .blocchi {
    border:1px solid black; 
    width:200px;
    height:50px;
    margin-bottom: 10px;
  }

  .linea {
    display: inline;
    border:1px solid black; 
    width:200px; /*ignorato*/
    height:50px;/*ignorato*/
  }

  .rimosso {display: none;}

  .invisibile {visibility: hidden;}
</style>
`,title:"CSS",level:1,content:`# CSS

Display e Visibility

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

\`\`\`html
<div class="blocchi">Block1</div>
<div class="blocchi">Block2</div>
<div class="blocchi">Block3</div>
<div class="blocchi rimosso">Block4</div>
<div class="linea">Line1</div>
<div class="linea">Line2</div>
<div class="linea">Line3</div>
<div class="blocchi invisibile">Block5</div>
<div class="blocchi">Block6</div>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
  .blocchi {
    border:1px solid black; 
    width:200px;
    height:50px;
    margin-bottom: 10px;
  }

  .linea {
    display: inline;
    border:1px solid black; 
    width:200px; /*ignorato*/
    height:50px;/*ignorato*/
  }

  .rimosso {display: none;}
  
  .invisibile {
    visibility: hidden;
  }
\`\`\`
</div>

<div> <!-- col3 -->
<div class="blocchi">Block1</div>
<div class="blocchi">Block2</div>
<div class="blocchi">Block3</div>
<div class="blocchi rimosso">Block4</div>
<div class="linea">Line1</div>
<div class="linea">Line2</div>
<div class="linea">Line3</div>
<div class="blocchi invisibile">Block5</div>
<div class="blocchi">Block6</div>

</div>

</div>

<style>
  .blocchi {
    border:1px solid black; 
    width:200px;
    height:50px;
    margin-bottom: 10px;
  }

  .linea {
    display: inline;
    border:1px solid black; 
    width:200px; /*ignorato*/
    height:50px;/*ignorato*/
  }

  .rimosso {display: none;}

  .invisibile {visibility: hidden;}
</style>`,frontmatter:{},index:112,start:3136,end:3218,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:lL,meta:{slide:{raw:`
# CSS

Display e Visibility

- Il tag \`<li>\` ha un valore di display di default pari a *block*.
- Per esempio modificare il valore di display a *inline* \xE8 molto utile per generare delle barre di navigazione orizzontale.

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

\`\`\`html
<h3>Lista:</h3>
<ul>
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>

<h3>Barra Menu:</h3>
<ul class="menu">
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
  .menu li {
    display: inline;
    border: 1px solid;
    margin: 0;
    padding: 5px;
  }
\`\`\`
</div>

<div> <!-- col3 -->
<h3>Lista:</h3>
<ul>
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>

<h3>Barra Menu:</h3>
<ul class="menu">
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>

</div>

</div>

<style>
  .menu li {
    display: inline;
    border: 1px solid;
    margin: 0;
    padding: 5px;
  }
</style>
`,title:"CSS",level:1,content:`# CSS

Display e Visibility

- Il tag \`<li>\` ha un valore di display di default pari a *block*.
- Per esempio modificare il valore di display a *inline* \xE8 molto utile per generare delle barre di navigazione orizzontale.

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

\`\`\`html
<h3>Lista:</h3>
<ul>
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>

<h3>Barra Menu:</h3>
<ul class="menu">
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
  .menu li {
    display: inline;
    border: 1px solid;
    margin: 0;
    padding: 5px;
  }
\`\`\`
</div>

<div> <!-- col3 -->
<h3>Lista:</h3>
<ul>
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>

<h3>Barra Menu:</h3>
<ul class="menu">
  <li>Menu 1</li>
  <li>Menu 2</li>
  <li>Menu 3</li>
</ul>

</div>

</div>

<style>
  .menu li {
    display: inline;
    border: 1px solid;
    margin: 0;
    padding: 5px;
  }
</style>`,frontmatter:{},index:113,start:3219,end:3288,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:cL,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Elementi galleggianti</h1>

`,content:'<h1 class="sezione">Elementi galleggianti</h1>',frontmatter:{layout:"section"},index:114,start:3288,end:3294,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:mL,meta:{slide:{raw:`
# CSS

Layout - Float

- La propriet\xE0 CSS \`float: <float value>\` \xE8 utilizzata per posizionare e formattare il contenuto di una pagina web (es: posizionare un immagine a sinistra del testo).
- I possibili valori sono:
  - ***left***: l'elemento si posiziona pi\xF9 possibile a sinistra rispetto al suo elemento padre (contenitore)
  - ***right***: l'elemento si posiziona pi\xF9 possibile a sinistra rispetto al suo contenitore
  - ***inherit***: l'elemento eredita il valore per float dal suo contenitore
  - ***none***: **(default)** l'elemento non si sposta e viene posizionato in linea con il testo 
- In pratica immaginiamo che gli elementi HTML galleggiano ("float") e si possono spostare a destra, sinistra o rimanere fermi.

`,title:"CSS",level:1,content:`# CSS

Layout - Float

- La propriet\xE0 CSS \`float: <float value>\` \xE8 utilizzata per posizionare e formattare il contenuto di una pagina web (es: posizionare un immagine a sinistra del testo).
- I possibili valori sono:
  - ***left***: l'elemento si posiziona pi\xF9 possibile a sinistra rispetto al suo elemento padre (contenitore)
  - ***right***: l'elemento si posiziona pi\xF9 possibile a sinistra rispetto al suo contenitore
  - ***inherit***: l'elemento eredita il valore per float dal suo contenitore
  - ***none***: **(default)** l'elemento non si sposta e viene posizionato in linea con il testo 
- In pratica immaginiamo che gli elementi HTML galleggiano ("float") e si possono spostare a destra, sinistra o rimanere fermi.`,frontmatter:{},index:115,start:3295,end:3309,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:xL,meta:{slide:{raw:`
# CSS

Layout - Float

### float none

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<p>
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

 #imgnone { 
    width: 100px;
    float: none;
    margin: 10px;
  }  
\`\`\`
</div>

<div> <!-- col3 -->

<p style="width: 320px;"> 
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>

</div>

</div>

<style>
  #imgnone { 
    width: 100px;
    float: none;
    margin: 10px;
  }  
</style>

`,title:"CSS",level:1,content:`# CSS

Layout - Float

### float none

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<p>
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

 #imgnone { 
    width: 100px;
    float: none;
    margin: 10px;
  }  
\`\`\`
</div>

<div> <!-- col3 -->

<p style="width: 320px;"> 
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>

</div>

</div>

<style>
  #imgnone { 
    width: 100px;
    float: none;
    margin: 10px;
  }  
</style>`,frontmatter:{},index:116,start:3310,end:3368,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:LL,meta:{slide:{raw:`
# CSS

Layout - Float

### float left

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<p>
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

 #imgnone { 
    width: 100px;
    float: left;
    margin: 10px;
  }  
\`\`\`
</div>

<div> <!-- col3 -->

<p style="width: 320px;"> 
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>

</div>

</div>

<style>
  #imgnone { 
    width: 100px;
    float: left;
    margin: 10px;
  }  
</style>
`,title:"CSS",level:1,content:`# CSS

Layout - Float

### float left

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<p>
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

 #imgnone { 
    width: 100px;
    float: left;
    margin: 10px;
  }  
\`\`\`
</div>

<div> <!-- col3 -->

<p style="width: 320px;"> 
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>

</div>

</div>

<style>
  #imgnone { 
    width: 100px;
    float: left;
    margin: 10px;
  }  
</style>`,frontmatter:{},index:117,start:3369,end:3426,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:NL,meta:{slide:{raw:`
# CSS

Layout - Float

### float right

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<p>
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

 #imgnone { 
    width: 100px;
    float: right;
    margin: 10px;
  }  
\`\`\`
</div>

<div> <!-- col3 -->

<p style="width: 320px;"> 
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>

</div>

</div>

<style>
  #imgnone { 
    width: 100px;
    float: right;
    margin: 10px;
  }  
</style>

`,title:"CSS",level:1,content:`# CSS

Layout - Float

### float right

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<p>
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

 #imgnone { 
    width: 100px;
    float: right;
    margin: 10px;
  }  
\`\`\`
</div>

<div> <!-- col3 -->

<p style="width: 320px;"> 
  <img id="imgnone" src="/media/css_18.jpg" />
  L\u2019oratorio e la parrocchia 
  San Giovanni Bosco, espressioni 
  ......
  nella Diocesi e nella citt\xE0 di Torino.
</p>

</div>

</div>

<style>
  #imgnone { 
    width: 100px;
    float: right;
    margin: 10px;
  }  
</style>`,frontmatter:{},index:118,start:3427,end:3485,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:YL,meta:{slide:{raw:`
# CSS

Layout - Float

### div float

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<div class="affonda">no float</div>
<div class="affonda">no float</div>
<div class="affonda">no float</div>

<div class="galleggia">float left</div>
<div class="galleggia">float left</div>
<div class="galleggia">float left</div>

\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
  .affonda {
    float: none;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: red;
    padding: 5px;
  }

  .galleggia {
    float: left;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: green;
    padding: 5px;
  }
\`\`\`
</div>

<div> <!-- col3 -->

<div class="affonda">no float</div>
<div class="affonda">no float</div>
<div class="affonda">no float</div>
<div class="galleggia">float left</div>
<div class="galleggia">float left</div>
<div class="galleggia">float left</div>

</div>

</div>

<style>
  .affonda {
    float: none;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: red;
    padding: 5px;
  }

  .galleggia {
    float: left;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: green;
    padding: 5px;
  }
</style>
`,title:"CSS",level:1,content:`# CSS

Layout - Float

### div float

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<div class="affonda">no float</div>
<div class="affonda">no float</div>
<div class="affonda">no float</div>

<div class="galleggia">float left</div>
<div class="galleggia">float left</div>
<div class="galleggia">float left</div>

\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
  .affonda {
    float: none;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: red;
    padding: 5px;
  }

  .galleggia {
    float: left;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: green;
    padding: 5px;
  }
\`\`\`
</div>

<div> <!-- col3 -->

<div class="affonda">no float</div>
<div class="affonda">no float</div>
<div class="affonda">no float</div>
<div class="galleggia">float left</div>
<div class="galleggia">float left</div>
<div class="galleggia">float left</div>

</div>

</div>

<style>
  .affonda {
    float: none;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: red;
    padding: 5px;
  }

  .galleggia {
    float: left;
    border:1px solid;
    width: 100px;
    height:30px;
    background-color: green;
    padding: 5px;
  }
</style>`,frontmatter:{},index:119,start:3486,end:3566,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:eM,meta:{slide:{raw:`
# Esercizio css_21

Barra Navigazione orizzontale

1. Creare un file e salvarlo come *|cognome|_esercizio_css_21.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_21.css*
3. Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche:
   1. Deve includere le seguenti voci: \`Home, ATS, Servizi, Contatti, About\`
   2. Si deve usare solo una lista
   3. La barra di navigazione deve avere un colore di sfondo
   4. Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo
4.  Fornire il link github al file con nome |cognome|_esercizio_css_21.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_21.css

<br />
<center>
<img src="/media/css_19.jpg" width="500">
</center>
`,title:"Esercizio css_21",level:1,content:`# Esercizio css_21

Barra Navigazione orizzontale

1. Creare un file e salvarlo come *|cognome|_esercizio_css_21.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_21.css*
3. Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche:
   1. Deve includere le seguenti voci: \`Home, ATS, Servizi, Contatti, About\`
   2. Si deve usare solo una lista
   3. La barra di navigazione deve avere un colore di sfondo
   4. Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo
4.  Fornire il link github al file con nome |cognome|_esercizio_css_21.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_21.css

<br />
<center>
<img src="/media/css_19.jpg" width="500">
</center>`,frontmatter:{},index:120,start:3567,end:3587,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:lM,meta:{slide:{raw:`
# Esercizio css_22

Barra Navigazione orizzontale

1. Creare un file e salvarlo come *|cognome|_esercizio_css_22.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_22.css*
3. Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche:
   1. Deve includere le seguenti voci: \`Home, ATS, Servizi, Contatti, About\`
   2. NON si pu\xF2 usare una lista
   3. La barra di navigazione deve avere un colore di sfondo
   4. Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo
4.  Fornire il link github al file con nome |cognome|_esercizio_css_22.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_22.css

<br />
<center>
<img src="/media/css_19.jpg" width="500">
</center>

`,title:"Esercizio css_22",level:1,content:`# Esercizio css_22

Barra Navigazione orizzontale

1. Creare un file e salvarlo come *|cognome|_esercizio_css_22.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_22.css*
3. Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche:
   1. Deve includere le seguenti voci: \`Home, ATS, Servizi, Contatti, About\`
   2. NON si pu\xF2 usare una lista
   3. La barra di navigazione deve avere un colore di sfondo
   4. Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo
4.  Fornire il link github al file con nome |cognome|_esercizio_css_22.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_22.css

<br />
<center>
<img src="/media/css_19.jpg" width="500">
</center>`,frontmatter:{},index:121,start:3588,end:3609,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:cM,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Elementi allineati</h1>
`,content:'<h1 class="sezione">Elementi allineati</h1>',frontmatter:{layout:"section"},index:122,start:3609,end:3614,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:mM,meta:{slide:{raw:`
# CSS

Layout - Align

- Nello sviluppo di una pagina web risulta molto utile poter allineare i vari elementi
- Per esempio \xE8 utile allineare il testo orizzontalmente o verticalmente, centrarlo, etc...
- Risulta spesso necessario allineare una o pi\xF9 immagini
- In modo analogo \xE8 utile allineare anche altri tipi di tag per poter ottenere il layout desiderato ed essere sicuri che appaia allo stesso modo su ogni browser
- Per far ci\xF2 CSS non mette a disposizione un'unica ma caso per caso \xE8 necessario usare tecniche specifiche.


`,title:"CSS",level:1,content:`# CSS

Layout - Align

- Nello sviluppo di una pagina web risulta molto utile poter allineare i vari elementi
- Per esempio \xE8 utile allineare il testo orizzontalmente o verticalmente, centrarlo, etc...
- Risulta spesso necessario allineare una o pi\xF9 immagini
- In modo analogo \xE8 utile allineare anche altri tipi di tag per poter ottenere il layout desiderato ed essere sicuri che appaia allo stesso modo su ogni browser
- Per far ci\xF2 CSS non mette a disposizione un'unica ma caso per caso \xE8 necessario usare tecniche specifiche.`,frontmatter:{},index:123,start:3615,end:3628,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:bM,meta:{slide:{raw:`
# CSS

Layout - Align del testo

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

\`\`\`html

<div class="centerhv">
  <p>Testo allineato 
    orizzontalmente e 
    verticalmente
  </p>
</div>

\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

.centerhv {
  border: 3px solid green;
  width: 400px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
\`\`\`
</div>

<div> <!-- col3 -->

<div class="centerhv">
  <p>Testo allineato orizzontalmente e verticalmente</p>
</div>

</div>

</div>

<style>

.centerhv {
  border: 3px solid green;
  width: 400px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  padding: 20px 0;
}


</style>


`,title:"CSS",level:1,content:`# CSS

Layout - Align del testo

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

\`\`\`html

<div class="centerhv">
  <p>Testo allineato 
    orizzontalmente e 
    verticalmente
  </p>
</div>

\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

.centerhv {
  border: 3px solid green;
  width: 400px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
\`\`\`
</div>

<div> <!-- col3 -->

<div class="centerhv">
  <p>Testo allineato orizzontalmente e verticalmente</p>
</div>

</div>

</div>

<style>

.centerhv {
  border: 3px solid green;
  width: 400px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  padding: 20px 0;
}


</style>`,frontmatter:{},index:124,start:3629,end:3690,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:TM,meta:{slide:{raw:`
# CSS

Layout - Align di un div

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

\`\`\`html

<div class="parent">
  <div class="child">
    <p>Testo allineato 
      orizzontalmente e 
      verticalmente
    </p>
  </div>
</div>

\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

.parent {
  border: 3px solid green;
  width: 400px;
  height: 300px;
   text-align: center;
}

.child {
  border: 3px solid blue;
  width: 50%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px; 
}
\`\`\`
</div>

<div> <!-- col3 -->

<div class="parent">
  <div class="child">
    <p>Testo allineato orizzontalmente e verticalmente</p>
  </div>
</div>

</div>

</div>

<style>

.parent {
  border: 3px solid green;
  width: 400px;
  height: 300px;
   text-align: center;
}

.child {
  border: 3px solid blue;
  width: 50%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px; 
}


</style>

`,title:"CSS",level:1,content:`# CSS

Layout - Align di un div

<div class="grid grid-flow-col auto-cols-max gap-8">

<div> <!-- col1 -->

\`\`\`html

<div class="parent">
  <div class="child">
    <p>Testo allineato 
      orizzontalmente e 
      verticalmente
    </p>
  </div>
</div>

\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

.parent {
  border: 3px solid green;
  width: 400px;
  height: 300px;
   text-align: center;
}

.child {
  border: 3px solid blue;
  width: 50%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px; 
}
\`\`\`
</div>

<div> <!-- col3 -->

<div class="parent">
  <div class="child">
    <p>Testo allineato orizzontalmente e verticalmente</p>
  </div>
</div>

</div>

</div>

<style>

.parent {
  border: 3px solid green;
  width: 400px;
  height: 300px;
   text-align: center;
}

.child {
  border: 3px solid blue;
  width: 50%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px; 
}


</style>`,frontmatter:{},index:125,start:3691,end:3770,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:FM,meta:{slide:{raw:`
# CSS

Layout - Align di un img

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<h3>Immagine centrata</h3><br />
<div id="parent">
  <img id="img1" src="/media/css_18.jpg" />
</div>


\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

#parent {
  border: 3px solid green;
  width: 250px;
  padding: 10px;
}
#img1 {
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
\`\`\`
</div>

<div> <!-- col3 -->

<h3>Immagine centrata</h3><br />
<div id="parent">
  <img id="img1" src="/media/css_18.jpg" />
</div>

</div>

</div>

<style>

#parent {
  border: 3px solid green;
  width: 250px;
  padding: 10px;
}
#img1 {
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
`,title:"CSS",level:1,content:`# CSS

Layout - Align di un img

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<h3>Immagine centrata</h3><br />
<div id="parent">
  <img id="img1" src="/media/css_18.jpg" />
</div>


\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

#parent {
  border: 3px solid green;
  width: 250px;
  padding: 10px;
}
#img1 {
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
\`\`\`
</div>

<div> <!-- col3 -->

<h3>Immagine centrata</h3><br />
<div id="parent">
  <img id="img1" src="/media/css_18.jpg" />
</div>

</div>

</div>

<style>

#parent {
  border: 3px solid green;
  width: 250px;
  padding: 10px;
}
#img1 {
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>`,frontmatter:{},index:126,start:3771,end:3836,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:jM,meta:{slide:{raw:`
# Esercizio css_23

Foto Gallery

1. Creare un file e salvarlo come *|cognome|_esercizio_css_23.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_23.css*
3. Creare in HTML (solo markuo) e CSS(tutti gli stili) una foto gallery con le seguenti caratteristiche
   1. centrata rispetto alla pagina con bordo di 20px blu chiaro
   2. contiene 5 colonne
   3. ogni colonna contiene un immagine con larghezza pari a 150px
   4. ogni colonna contiene al fondo una didascalia centrata e con carattere in bold
   5. ogni colonna ha un bordo di 1px
   6. le colonne sono distanziate di 5px
   7. per uniformit\xE0 usare la seguente immagine [TUX](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1717px-Tux.svg.png)
   8. non si pu\xF2 utilizzare una tabella ma bisogna usare i DIV
4.  Fornire il link github al file con nome |cognome|_esercizio_css_23.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_23.css
`,title:"Esercizio css_23",level:1,content:`# Esercizio css_23

Foto Gallery

1. Creare un file e salvarlo come *|cognome|_esercizio_css_23.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_23.css*
3. Creare in HTML (solo markuo) e CSS(tutti gli stili) una foto gallery con le seguenti caratteristiche
   1. centrata rispetto alla pagina con bordo di 20px blu chiaro
   2. contiene 5 colonne
   3. ogni colonna contiene un immagine con larghezza pari a 150px
   4. ogni colonna contiene al fondo una didascalia centrata e con carattere in bold
   5. ogni colonna ha un bordo di 1px
   6. le colonne sono distanziate di 5px
   7. per uniformit\xE0 usare la seguente immagine [TUX](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1717px-Tux.svg.png)
   8. non si pu\xF2 utilizzare una tabella ma bisogna usare i DIV
4.  Fornire il link github al file con nome |cognome|_esercizio_css_23.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_23.css`,frontmatter:{},index:127,start:3837,end:3856,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",name:"page-129",component:KM,meta:{slide:{raw:`
# Esercizio css_23

Foto Gallery

<center>
<img src="/media/css_23.png" width="500">
</center>
`,title:"Esercizio css_23",level:1,content:`# Esercizio css_23

Foto Gallery

<center>
<img src="/media/css_23.png" width="500">
</center>`,frontmatter:{},index:128,start:3857,end:3866,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:128,no:129},__clicksElements:[],__preloaded:!1}},{path:"130",name:"page-130",component:GM,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">La posizione degli elementi</h1>

`,content:'<h1 class="sezione">La posizione degli elementi</h1>',frontmatter:{layout:"section"},index:129,start:3866,end:3872,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:129,no:130},__clicksElements:[],__preloaded:!1}},{path:"131",name:"page-131",component:JM,meta:{slide:{raw:`
# CSS

Layout - Position

- CSS permette di specificare la posizione di un elemento rispetto alla pagina o rispetto al suo contenitore tramite la propriet\xE0 \`position: <value>\`
- Ci sono 5 possibili valori per questa propriet\xE0:
  1. ***static*** : *(default)* l'elemento non \xE8 posizionato in nessun modo speciale, ma nella posizione in cui appare nel markup 
  2. ***relative*** : l'elemento \xE8 posizionato relativamente alla sua posizione di default
  3. ***fixed*** :  l'elemento \xE8 fisso rispetto al viewport, quindi rimarr\xE0 fermo anche se la pagine far\xE0 uno scroll
  4. ***absolute*** : l'elemento \xE8 posizionato in maniera assoluta rispetto al suo contenitore o in assenza al body
  5. ***sticky*** : l'elemento \xE8 posizionato in funzione della posizione di scroll

`,title:"CSS",level:1,content:`# CSS

Layout - Position

- CSS permette di specificare la posizione di un elemento rispetto alla pagina o rispetto al suo contenitore tramite la propriet\xE0 \`position: <value>\`
- Ci sono 5 possibili valori per questa propriet\xE0:
  1. ***static*** : *(default)* l'elemento non \xE8 posizionato in nessun modo speciale, ma nella posizione in cui appare nel markup 
  2. ***relative*** : l'elemento \xE8 posizionato relativamente alla sua posizione di default
  3. ***fixed*** :  l'elemento \xE8 fisso rispetto al viewport, quindi rimarr\xE0 fermo anche se la pagine far\xE0 uno scroll
  4. ***absolute*** : l'elemento \xE8 posizionato in maniera assoluta rispetto al suo contenitore o in assenza al body
  5. ***sticky*** : l'elemento \xE8 posizionato in funzione della posizione di scroll`,frontmatter:{},index:130,start:3873,end:3887,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:130,no:131},__clicksElements:[],__preloaded:!1}},{path:"132",name:"page-132",component:l8,meta:{slide:{raw:`
# CSS

Layout - Position - Static e Relative

- Per posizionare un elemento in modo relativo si usano le propriet\xE0 \`top - bottom - right - left\`

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<div id="parent">
  <div id="child">
    <p>Elemento posizionato 
      in modo relativo</p>
  </div>
</div>


\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: relative;
  left: 50px;
  top: 10px;
}
\`\`\`
</div>

<div> <!-- col3 -->


<div id="parent">
  <div id="child">
    <p>Elemento posizionato in modo relativo</p>
  </div>
</div>

</div>

</div>

<style>

#parent0 {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child0 {
  border: 3px solid blue;
  width: 200px;
}

#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: relative;
  left: 50px;
  top: 10px;
}

</style>

`,title:"CSS",level:1,content:`# CSS

Layout - Position - Static e Relative

- Per posizionare un elemento in modo relativo si usano le propriet\xE0 \`top - bottom - right - left\`

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<div id="parent">
  <div id="child">
    <p>Elemento posizionato 
      in modo relativo</p>
  </div>
</div>


\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css

#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: relative;
  left: 50px;
  top: 10px;
}
\`\`\`
</div>

<div> <!-- col3 -->


<div id="parent">
  <div id="child">
    <p>Elemento posizionato in modo relativo</p>
  </div>
</div>

</div>

</div>

<style>

#parent0 {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child0 {
  border: 3px solid blue;
  width: 200px;
}

#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: relative;
  left: 50px;
  top: 10px;
}

</style>`,frontmatter:{},index:131,start:3888,end:3975,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:131,no:132},__clicksElements:[],__preloaded:!1}},{path:"133",name:"page-133",component:h8,meta:{slide:{raw:`
# CSS

Layout - Position - Fixed

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<div id="parent">
  <div id="child">
    <p>Elemento posizionato 
      in modo fixed</p>
  </div>
</div>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: fixed;
  bottom: 200px;
  right: 50px;
}
\`\`\`
</div>

<div> <!-- col3 -->


<div id="parent">
  <div id="child">
    <p>Elemento posizionato in modo fixed</p>
  </div>
</div>

</div>

</div>

<style>


#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: fixed;
  bottom: 100px;
  right: 50px;
}

</style>
`,title:"CSS",level:1,content:`# CSS

Layout - Position - Fixed

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<div id="parent">
  <div id="child">
    <p>Elemento posizionato 
      in modo fixed</p>
  </div>
</div>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: fixed;
  bottom: 200px;
  right: 50px;
}
\`\`\`
</div>

<div> <!-- col3 -->


<div id="parent">
  <div id="child">
    <p>Elemento posizionato in modo fixed</p>
  </div>
</div>

</div>

</div>

<style>


#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: fixed;
  bottom: 100px;
  right: 50px;
}

</style>`,frontmatter:{},index:132,start:3976,end:4047,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:132,no:133},__clicksElements:[],__preloaded:!1}},{path:"134",name:"page-134",component:S8,meta:{slide:{raw:`
# CSS

Layout - Position - Absolute

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<div id="parent">
  <div id="child">
    <p>Elemento posizionato 
      in modo absolute</p>
  </div>
</div>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
  position: relative;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: absolute;
  bottom: 20px;
  right: 60px;
}
\`\`\`
</div>

<div> <!-- col3 -->


<div id="parent">
  <div id="child">
    <p>Elemento posizionato in modo absolute</p>
  </div>
</div>

</div>

</div>

<style>


#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
  position: relative;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: absolute;
  bottom: 20px;
  right: 60px;
}

</style>
`,title:"CSS",level:1,content:`# CSS

Layout - Position - Absolute

<div class="grid grid-flow-col auto-cols-max gap-4">

<div> <!-- col1 -->

\`\`\`html

<div id="parent">
  <div id="child">
    <p>Elemento posizionato 
      in modo absolute</p>
  </div>
</div>
\`\`\`
</div>

<div> <!-- col2 -->

\`\`\`css
#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
  position: relative;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: absolute;
  bottom: 20px;
  right: 60px;
}
\`\`\`
</div>

<div> <!-- col3 -->


<div id="parent">
  <div id="child">
    <p>Elemento posizionato in modo absolute</p>
  </div>
</div>

</div>

</div>

<style>


#parent {
  border: 3px solid green;
  width: 400px;
  height: 150px;
  position: relative;
}

#child {
  border: 3px solid blue;
  width: 200px;
  position: absolute;
  bottom: 20px;
  right: 60px;
}

</style>`,frontmatter:{},index:133,start:4048,end:4121,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:133,no:134},__clicksElements:[],__preloaded:!1}},{path:"135",name:"page-135",component:T8,meta:{slide:{raw:`
# CSS

Layout - Position - Sticky

*Aprire la seguente pagina* [sticky](../support/position_sticky_css_slide.html)

\`\`\`html
<div class="sticky">I am sticky e non mi muovo!</div>
<div class="scrolldiv">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, .... </p>
</div>
\`\`\`

\`\`\`css
div.sticky {
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: #0ca00c;
  border: 2px solid #0a7c0d;
  color: white;
  font-size: 20px;
}
.scrolldiv {
    padding-bottom:2000px;
}
\`\`\`
`,title:"CSS",level:1,content:`# CSS

Layout - Position - Sticky

*Aprire la seguente pagina* [sticky](../support/position_sticky_css_slide.html)

\`\`\`html
<div class="sticky">I am sticky e non mi muovo!</div>
<div class="scrolldiv">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, .... </p>
</div>
\`\`\`

\`\`\`css
div.sticky {
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: #0ca00c;
  border: 2px solid #0a7c0d;
  color: white;
  font-size: 20px;
}
.scrolldiv {
    padding-bottom:2000px;
}
\`\`\``,frontmatter:{},index:134,start:4122,end:4151,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:134,no:135},__clicksElements:[],__preloaded:!1}},{path:"136",name:"page-136",component:R8,meta:{slide:{raw:`
# Esercizio css_24

Position

1. Creare un file e salvarlo come *|cognome|_esercizio_css_24.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_24.css*
3. Creare in HTML e CSS il posizionamento di una stringa su di un immagine, in modo che la stringa sia posizionata nell'angolo in alto a sinistra
4.  Fornire il link github al file con nome |cognome|_esercizio_css_24.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_24.css

<br />
<center>
<img src="/media/css_20.jpg" width="500">
</center>


`,title:"Esercizio css_24",level:1,content:`# Esercizio css_24

Position

1. Creare un file e salvarlo come *|cognome|_esercizio_css_24.html*
2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_24.css*
3. Creare in HTML e CSS il posizionamento di una stringa su di un immagine, in modo che la stringa sia posizionata nell'angolo in alto a sinistra
4.  Fornire il link github al file con nome |cognome|_esercizio_css_24.html
5.  Fornire il link github al file con nome |cognome|_esercizio_css_24.css

<br />
<center>
<img src="/media/css_20.jpg" width="500">
</center>`,frontmatter:{},index:135,start:4152,end:4170,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:135,no:136},__clicksElements:[],__preloaded:!1}},{path:"137",name:"page-137",component:N8,meta:{slide:{raw:`
&nbsp;
<center>
<img src="/media/css_21.jpg" width="800" />
</center>
`,content:`&nbsp;
<center>
<img src="/media/css_21.jpg" width="800" />
</center>`,frontmatter:{},index:136,start:4171,end:4177,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:136,no:137},__clicksElements:[],__preloaded:!1}},{path:"138",component:G0,meta:{layout:"end"}}],Un=j8,q8=[{name:"play",path:"/",component:N0,children:[...Un]},{name:"print",path:"/print",component:V0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>$s(()=>import("./Presenter.8f53b428.js"),["assets/Presenter.8f53b428.js","assets/Presenter.1ea605f8.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.4a286728.js"]),beforeEnter:e=>{if(!Nt.remote||Nt.remote===e.query.password)return!0;if(Nt.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Nt.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],ze=$1({history:j_("/TPSI/4/css/"),routes:q8});function B8(e,t,{mode:o="replace"}={}){return R({get(){const a=ze.currentRoute.value.query[e];return a==null?t!=null?t:null:Array.isArray(a)?a.filter(Boolean):a},set(a){Xn(()=>{ze[C(o)]({query:{...ze.currentRoute.value.query,[e]:a}})})}})}const id=Q(0);Xn(()=>{ze.afterEach(async()=>{await Xn(),id.value+=1})});const ct=R(()=>ze.currentRoute.value),Hl=R(()=>ct.value.query.print!==void 0),W8=R(()=>ct.value.query.print==="clicks"),st=R(()=>ct.value.query.embedded!==void 0),Ge=R(()=>ct.value.path.startsWith("/presenter")),oo=R(()=>Hl.value&&!W8.value),Ui=R(()=>ct.value.query.password),V8=R(()=>!Ge.value&&(!zn.remote||Ui.value===zn.remote)),Fc=B8("clicks","0"),ld=R(()=>Un.length-1),K8=R(()=>ct.value.path),Gn=R(()=>parseInt(K8.value.split(/\//g).slice(-1)[0])||1);R(()=>ja(Gn.value));const be=R(()=>Un.find(e=>e.path===`${Gn.value}`));R(()=>{var e,t,o;return(o=(t=(e=be.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:o.id});R(()=>{var e,t;return(t=(e=be.value)==null?void 0:e.meta)==null?void 0:t.layout});const ii=R(()=>Un.find(e=>e.path===`${Math.min(Un.length,Gn.value+1)}`)),U8=R(()=>{var e,t;return id.value,((t=(e=be.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ne=R({get(){if(oo.value)return 99999;let e=+(Fc.value||0);return isNaN(e)&&(e=0),e},set(e){Fc.value=e.toString()}}),_a=R(()=>{var e,t,o;return+((o=(t=(e=be.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?o:U8.value.length)}),G8=R(()=>Gn.value<Un.length-1||Ne.value<_a.value),Y8=R(()=>Gn.value>1||Ne.value>0),Q8=R(()=>Un.filter(e=>{var t,o;return(o=(t=e.meta)==null?void 0:t.slide)==null?void 0:o.title}).reduce((e,t)=>(Nl(e,t),e),[])),Z8=R(()=>jl(Q8.value,be.value));R(()=>ql(Z8.value));function bt(){_a.value<=Ne.value?yo():Ne.value+=1}async function xt(){Ne.value<=0?await bo():Ne.value-=1}function ja(e){return Ge.value?`/presenter/${e}`:`/${e}`}function yo(){const e=Math.min(Un.length,Gn.value+1);return xs(e)}async function bo(e=!0){const t=Math.max(1,Gn.value-1);await xs(t),e&&_a.value&&ze.replace({query:{...ct.value.query,clicks:_a.value}})}function xs(e,t){return ze.push({path:ja(e),query:{...ct.value.query,clicks:t}})}function J8(e){const t=Q(0),{direction:o,distanceX:a,distanceY:i}=d_(e,{onSwipeStart(l){l.pointerType==="touch"&&(_o.value||(t.value=Ai()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||_o.value)return;const r=Math.abs(a.value),c=Math.abs(i.value);r/window.innerWidth>.3||r>100?o.value===it.LEFT?bt():xt():(c/window.innerHeight>.4||c>200)&&(o.value===it.DOWN?bo():yo())}})}async function Gi(){const{saveAs:e}=await $s(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(yu(zn.download)?zn.download:zn.exportFilename?`${zn.exportFilename}.pdf`:"/TPSI/4/css/slidev-exported.pdf",`${zn.title}.pdf`)}async function X8(e){var t,o;if(e==null){const a=(o=(t=be.value)==null?void 0:t.meta)==null?void 0:o.slide;if(!(a!=null&&a.filepath))return!1;e=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Nl(e,t,o=1){var i,l,r,c,p;const a=(l=(i=t.meta)==null?void 0:i.slide)==null?void 0:l.level;a&&a>o&&e.length>0?Nl(e[e.length-1].children,t,o+1):e.push({children:[],level:o,path:t.path,hideInToc:Boolean((r=t.meta)==null?void 0:r.hideInToc),title:(p=(c=t.meta)==null?void 0:c.slide)==null?void 0:p.title})}function jl(e,t,o=!1,a){return e.map(i=>{const l={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:o};return l.children.length>0&&(l.children=jl(l.children,t,l.active||l.hasActiveParent,l)),a&&(l.active||l.activeParent)&&(a.activeParent=!0),l})}function ql(e,t=1){return e.filter(o=>!o.hideInToc).map(o=>({...o,children:ql(o.children,t+1)}))}function nP(){const e=zn.titleTemplate.replace("%s",zn.title||"Slidev");Oh({title:e}),Wh(`${e} - shared`),Gh(`${e} - drawings`);function t(){Ge.value&&(jr("page",+Gn.value),jr("clicks",Ne.value))}ze.afterEach(t),fn(Ne,t),Vh(o=>{(+o.page!=+Gn.value||Ne.value!==o.clicks)&&ze.replace({path:ja(o.page),query:{...ze.currentRoute.value.query,clicks:o.clicks||0}})})}const eP=En({__name:"App",setup(e){return x($),nP(),(t,o)=>{const a=qn("RouterView"),i=qn("StarportCarrier");return k(),J(Ln,null,[b(a),b(i)],64)}}});function li(e){return e!==null&&typeof e=="object"}function Yi(e,t,o=".",a){if(!li(t))return Yi(e,{},o,a);const i=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const r=e[l];r!=null&&(a&&a(i,l,r,o)||(Array.isArray(r)&&Array.isArray(i[l])?i[l]=r.concat(i[l]):li(r)&&li(i[l])?i[l]=Yi(r,i[l],(o?`${o}.`:"")+l.toString(),a):i[l]=r))}return i}function tP(e){return(...t)=>t.reduce((o,a)=>Yi(o,a,"",e),{})}const sP=tP();var Dc;const rd=typeof window<"u",oP=Object.prototype.toString,aP=e=>typeof e=="number",iP=e=>typeof e=="string",Qi=e=>oP.call(e)==="[object Object]",Ut=()=>{};rd&&((Dc=window==null?void 0:window.navigator)==null?void 0:Dc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function cd(e){return fl()?(hl(e),!0):!1}function Bl(e){Jt()&&Pa(e)}function lP(e,t,o){const a=fn(e,(...i)=>(Xn(()=>a()),t(...i)),o)}function Qt(e){var t;const o=C(e);return(t=o==null?void 0:o.$el)!=null?t:o}const pd=rd?window:void 0;function rP(...e){let t,o,a,i;if(iP(e[0])?([o,a,i]=e,t=pd):[t,o,a,i]=e,!t)return Ut;let l=Ut;const r=fn(()=>Qt(t),p=>{l(),p&&(p.addEventListener(o,a,i),l=()=>{p.removeEventListener(o,a,i),l=Ut})},{immediate:!0,flush:"post"}),c=()=>{r(),l()};return cd(c),c}const Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ji="__vueuse_ssr_handlers__";Zi[Ji]=Zi[Ji]||{};Zi[Ji];function cP(e,t,o={}){const{root:a,rootMargin:i="0px",threshold:l=.1,window:r=pd}=o,c=r&&"IntersectionObserver"in r;let p=Ut;const u=c?fn(()=>({el:Qt(e),root:Qt(a)}),({el:f,root:m})=>{if(p(),!f)return;const h=new IntersectionObserver(t,{root:m,rootMargin:i,threshold:l});h.observe(f),p=()=>{h.disconnect(),p=Ut}},{immediate:!0,flush:"post"}):Ut,d=()=>{p(),u()};return cd(d),{isSupported:c,stop:d}}var Hc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Hc||(Hc={}));const ud=1/60*1e3,pP=typeof performance<"u"?()=>performance.now():()=>Date.now(),dd=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(pP()),ud);function uP(e){let t=[],o=[],a=0,i=!1,l=!1;const r=new WeakSet,c={schedule:(p,u=!1,d=!1)=>{const f=d&&i,m=f?t:o;return u&&r.add(p),m.indexOf(p)===-1&&(m.push(p),f&&i&&(a=t.length)),p},cancel:p=>{const u=o.indexOf(p);u!==-1&&o.splice(u,1),r.delete(p)},process:p=>{if(i){l=!0;return}if(i=!0,[t,o]=[o,t],o.length=0,a=t.length,a)for(let u=0;u<a;u++){const d=t[u];d(p),r.has(d)&&(c.schedule(d),e())}i=!1,l&&(l=!1,c.process(p))}};return c}const dP=40;let Xi=!0,xo=!1,nl=!1;const vs={delta:0,timestamp:0},Do=["read","update","preRender","render","postRender"],qa=Do.reduce((e,t)=>(e[t]=uP(()=>xo=!0),e),{}),el=Do.reduce((e,t)=>{const o=qa[t];return e[t]=(a,i=!1,l=!1)=>(xo||hP(),o.schedule(a,i,l)),e},{}),mP=Do.reduce((e,t)=>(e[t]=qa[t].cancel,e),{});Do.reduce((e,t)=>(e[t]=()=>qa[t].process(vs),e),{});const fP=e=>qa[e].process(vs),md=e=>{xo=!1,vs.delta=Xi?ud:Math.max(Math.min(e-vs.timestamp,dP),1),vs.timestamp=e,nl=!0,Do.forEach(fP),nl=!1,xo&&(Xi=!1,dd(md))},hP=()=>{xo=!0,Xi=!0,nl||dd(md)},fd=()=>vs;function hd(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]]);return o}var gP=function(){},Nc=function(){};const tl=(e,t,o)=>Math.min(Math.max(o,e),t),ri=.001,_P=.01,jc=10,vP=.05,kP=1;function yP({duration:e=800,bounce:t=.25,velocity:o=0,mass:a=1}){let i,l;gP(e<=jc*1e3);let r=1-t;r=tl(vP,kP,r),e=tl(_P,jc,e/1e3),r<1?(i=u=>{const d=u*r,f=d*e,m=d-o,h=sl(u,r),_=Math.exp(-f);return ri-m/h*_},l=u=>{const f=u*r*e,m=f*o+o,h=Math.pow(r,2)*Math.pow(u,2)*e,_=Math.exp(-f),w=sl(Math.pow(u,2),r);return(-i(u)+ri>0?-1:1)*((m-h)*_)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-o)*e+1;return-ri+d*f},l=u=>{const d=Math.exp(-u*e),f=(o-u)*(e*e);return d*f});const c=5/e,p=xP(i,l,c);if(e=e*1e3,isNaN(p))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(p,2)*a;return{stiffness:u,damping:r*2*Math.sqrt(a*u),duration:e}}}const bP=12;function xP(e,t,o){let a=o;for(let i=1;i<bP;i++)a=a-e(a)/t(a);return a}function sl(e,t){return e*Math.sqrt(1-t*t)}const SP=["duration","bounce"],wP=["stiffness","damping","mass"];function qc(e,t){return t.some(o=>e[o]!==void 0)}function zP(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!qc(e,wP)&&qc(e,SP)){const o=yP(e);t=Object.assign(Object.assign(Object.assign({},t),o),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Wl(e){var{from:t=0,to:o=1,restSpeed:a=2,restDelta:i}=e,l=hd(e,["from","to","restSpeed","restDelta"]);const r={done:!1,value:t};let{stiffness:c,damping:p,mass:u,velocity:d,duration:f,isResolvedFromDuration:m}=zP(l),h=Bc,_=Bc;function w(){const S=d?-(d/1e3):0,P=o-t,M=p/(2*Math.sqrt(c*u)),L=Math.sqrt(c/u)/1e3;if(i===void 0&&(i=Math.min(Math.abs(o-t)/100,.4)),M<1){const A=sl(L,M);h=W=>{const q=Math.exp(-M*L*W);return o-q*((S+M*L*P)/A*Math.sin(A*W)+P*Math.cos(A*W))},_=W=>{const q=Math.exp(-M*L*W);return M*L*q*(Math.sin(A*W)*(S+M*L*P)/A+P*Math.cos(A*W))-q*(Math.cos(A*W)*(S+M*L*P)-A*P*Math.sin(A*W))}}else if(M===1)h=A=>o-Math.exp(-L*A)*(P+(S+L*P)*A);else{const A=L*Math.sqrt(M*M-1);h=W=>{const q=Math.exp(-M*L*W),Y=Math.min(A*W,300);return o-q*((S+M*L*P)*Math.sinh(Y)+A*P*Math.cosh(Y))/A}}}return w(),{next:S=>{const P=h(S);if(m)r.done=S>=f;else{const M=_(S)*1e3,L=Math.abs(M)<=a,A=Math.abs(o-P)<=i;r.done=L&&A}return r.value=r.done?o:P,r},flipTarget:()=>{d=-d,[t,o]=[o,t],w()}}}Wl.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Bc=e=>0,gd=(e,t,o)=>{const a=t-e;return a===0?1:(o-e)/a},Vl=(e,t,o)=>-o*e+o*t+e,_d=(e,t)=>o=>Math.max(Math.min(o,t),e),ao=e=>e%1?Number(e.toFixed(5)):e,So=/(-)?([\d]*\.?[\d])+/g,ol=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,$P=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ho(e){return typeof e=="string"}const No={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},io=Object.assign(Object.assign({},No),{transform:_d(0,1)}),Qo=Object.assign(Object.assign({},No),{default:1}),Kl=e=>({test:t=>Ho(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Mt=Kl("deg"),lo=Kl("%"),dn=Kl("px"),Wc=Object.assign(Object.assign({},lo),{parse:e=>lo.parse(e)/100,transform:e=>lo.transform(e*100)}),Ul=(e,t)=>o=>Boolean(Ho(o)&&$P.test(o)&&o.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(o,t)),vd=(e,t,o)=>a=>{if(!Ho(a))return a;const[i,l,r,c]=a.match(So);return{[e]:parseFloat(i),[t]:parseFloat(l),[o]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},qt={test:Ul("hsl","hue"),parse:vd("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:o,alpha:a=1})=>"hsla("+Math.round(e)+", "+lo.transform(ao(t))+", "+lo.transform(ao(o))+", "+ao(io.transform(a))+")"},CP=_d(0,255),ci=Object.assign(Object.assign({},No),{transform:e=>Math.round(CP(e))}),_t={test:Ul("rgb","red"),parse:vd("red","green","blue"),transform:({red:e,green:t,blue:o,alpha:a=1})=>"rgba("+ci.transform(e)+", "+ci.transform(t)+", "+ci.transform(o)+", "+ao(io.transform(a))+")"};function IP(e){let t="",o="",a="",i="";return e.length>5?(t=e.substr(1,2),o=e.substr(3,2),a=e.substr(5,2),i=e.substr(7,2)):(t=e.substr(1,1),o=e.substr(2,1),a=e.substr(3,1),i=e.substr(4,1),t+=t,o+=o,a+=a,i+=i),{red:parseInt(t,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:i?parseInt(i,16)/255:1}}const al={test:Ul("#"),parse:IP,transform:_t.transform},fe={test:e=>_t.test(e)||al.test(e)||qt.test(e),parse:e=>_t.test(e)?_t.parse(e):qt.test(e)?qt.parse(e):al.parse(e),transform:e=>Ho(e)?e:e.hasOwnProperty("red")?_t.transform(e):qt.transform(e)},kd="${c}",yd="${n}";function TP(e){var t,o,a,i;return isNaN(e)&&Ho(e)&&((o=(t=e.match(So))===null||t===void 0?void 0:t.length)!==null&&o!==void 0?o:0)+((i=(a=e.match(ol))===null||a===void 0?void 0:a.length)!==null&&i!==void 0?i:0)>0}function bd(e){typeof e=="number"&&(e=`${e}`);const t=[];let o=0;const a=e.match(ol);a&&(o=a.length,e=e.replace(ol,kd),t.push(...a.map(fe.parse)));const i=e.match(So);return i&&(e=e.replace(So,yd),t.push(...i.map(No.parse))),{values:t,numColors:o,tokenised:e}}function xd(e){return bd(e).values}function Sd(e){const{values:t,numColors:o,tokenised:a}=bd(e),i=t.length;return l=>{let r=a;for(let c=0;c<i;c++)r=r.replace(c<o?kd:yd,c<o?fe.transform(l[c]):ao(l[c]));return r}}const EP=e=>typeof e=="number"?0:e;function LP(e){const t=xd(e);return Sd(e)(t.map(EP))}const jo={test:TP,parse:xd,createTransformer:Sd,getAnimatableNone:LP},MP=new Set(["brightness","contrast","saturate","opacity"]);function PP(e){let[t,o]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=o.match(So)||[];if(!a)return e;const i=o.replace(a,"");let l=MP.has(t)?1:0;return a!==o&&(l*=100),t+"("+l+i+")"}const OP=/([a-z-]*)\(.*?\)/g,il=Object.assign(Object.assign({},jo),{getAnimatableNone:e=>{const t=e.match(OP);return t?t.map(PP).join(" "):e}});function pi(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(t-e)*6*o:o<1/2?t:o<2/3?e+(t-e)*(2/3-o)*6:e}function Vc({hue:e,saturation:t,lightness:o,alpha:a}){e/=360,t/=100,o/=100;let i=0,l=0,r=0;if(!t)i=l=r=o;else{const c=o<.5?o*(1+t):o+t-o*t,p=2*o-c;i=pi(p,c,e+1/3),l=pi(p,c,e),r=pi(p,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:a}}const AP=(e,t,o)=>{const a=e*e,i=t*t;return Math.sqrt(Math.max(0,o*(i-a)+a))},RP=[al,_t,qt],Kc=e=>RP.find(t=>t.test(e)),wd=(e,t)=>{let o=Kc(e),a=Kc(t),i=o.parse(e),l=a.parse(t);o===qt&&(i=Vc(i),o=_t),a===qt&&(l=Vc(l),a=_t);const r=Object.assign({},i);return c=>{for(const p in r)p!=="alpha"&&(r[p]=AP(i[p],l[p],c));return r.alpha=Vl(i.alpha,l.alpha,c),o.transform(r)}},FP=e=>typeof e=="number",DP=(e,t)=>o=>t(e(o)),zd=(...e)=>e.reduce(DP);function $d(e,t){return FP(e)?o=>Vl(e,t,o):fe.test(e)?wd(e,t):Id(e,t)}const Cd=(e,t)=>{const o=[...e],a=o.length,i=e.map((l,r)=>$d(l,t[r]));return l=>{for(let r=0;r<a;r++)o[r]=i[r](l);return o}},HP=(e,t)=>{const o=Object.assign(Object.assign({},e),t),a={};for(const i in o)e[i]!==void 0&&t[i]!==void 0&&(a[i]=$d(e[i],t[i]));return i=>{for(const l in a)o[l]=a[l](i);return o}};function Uc(e){const t=jo.parse(e),o=t.length;let a=0,i=0,l=0;for(let r=0;r<o;r++)a||typeof t[r]=="number"?a++:t[r].hue!==void 0?l++:i++;return{parsed:t,numNumbers:a,numRGB:i,numHSL:l}}const Id=(e,t)=>{const o=jo.createTransformer(t),a=Uc(e),i=Uc(t);return a.numHSL===i.numHSL&&a.numRGB===i.numRGB&&a.numNumbers>=i.numNumbers?zd(Cd(a.parsed,i.parsed),o):r=>`${r>0?t:e}`},NP=(e,t)=>o=>Vl(e,t,o);function jP(e){if(typeof e=="number")return NP;if(typeof e=="string")return fe.test(e)?wd:Id;if(Array.isArray(e))return Cd;if(typeof e=="object")return HP}function qP(e,t,o){const a=[],i=o||jP(e[0]),l=e.length-1;for(let r=0;r<l;r++){let c=i(e[r],e[r+1]);if(t){const p=Array.isArray(t)?t[r]:t;c=zd(p,c)}a.push(c)}return a}function BP([e,t],[o]){return a=>o(gd(e,t,a))}function WP(e,t){const o=e.length,a=o-1;return i=>{let l=0,r=!1;if(i<=e[0]?r=!0:i>=e[a]&&(l=a-1,r=!0),!r){let p=1;for(;p<o&&!(e[p]>i||p===a);p++);l=p-1}const c=gd(e[l],e[l+1],i);return t[l](c)}}function Td(e,t,{clamp:o=!0,ease:a,mixer:i}={}){const l=e.length;Nc(l===t.length),Nc(!a||!Array.isArray(a)||a.length===l-1),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const r=qP(t,a,i),c=l===2?BP(e,r):WP(e,r);return o?p=>c(tl(e[0],e[l-1],p)):c}const Ba=e=>t=>1-e(1-t),Gl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,VP=e=>t=>Math.pow(t,e),Ed=e=>t=>t*t*((e+1)*t-e),KP=e=>{const t=Ed(e);return o=>(o*=2)<1?.5*t(o):.5*(2-Math.pow(2,-10*(o-1)))},Ld=1.525,UP=4/11,GP=8/11,YP=9/10,Md=e=>e,Yl=VP(2),QP=Ba(Yl),Pd=Gl(Yl),Od=e=>1-Math.sin(Math.acos(e)),Ad=Ba(Od),ZP=Gl(Ad),Ql=Ed(Ld),JP=Ba(Ql),XP=Gl(Ql),nO=KP(Ld),eO=4356/361,tO=35442/1805,sO=16061/1805,va=e=>{if(e===1||e===0)return e;const t=e*e;return e<UP?7.5625*t:e<GP?9.075*t-9.9*e+3.4:e<YP?eO*t-tO*e+sO:10.8*e*e-20.52*e+10.72},oO=Ba(va),aO=e=>e<.5?.5*(1-va(1-e*2)):.5*va(e*2-1)+.5;function iO(e,t){return e.map(()=>t||Pd).splice(0,e.length-1)}function lO(e){const t=e.length;return e.map((o,a)=>a!==0?a/(t-1):0)}function rO(e,t){return e.map(o=>o*t)}function aa({from:e=0,to:t=1,ease:o,offset:a,duration:i=300}){const l={done:!1,value:e},r=Array.isArray(t)?t:[e,t],c=rO(a&&a.length===r.length?a:lO(r),i);function p(){return Td(c,r,{ease:Array.isArray(o)?o:iO(r,o)})}let u=p();return{next:d=>(l.value=u(d),l.done=d>=i,l),flipTarget:()=>{r.reverse(),u=p()}}}function cO({velocity:e=0,from:t=0,power:o=.8,timeConstant:a=350,restDelta:i=.5,modifyTarget:l}){const r={done:!1,value:t};let c=o*e;const p=t+c,u=l===void 0?p:l(p);return u!==p&&(c=u-t),{next:d=>{const f=-c*Math.exp(-d/a);return r.done=!(f>i||f<-i),r.value=r.done?u:u+f,r},flipTarget:()=>{}}}const Gc={keyframes:aa,spring:Wl,decay:cO};function pO(e){if(Array.isArray(e.to))return aa;if(Gc[e.type])return Gc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?aa:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Wl:aa}function Rd(e,t,o=0){return e-t-o}function uO(e,t,o=0,a=!0){return a?Rd(t+-e,t,o):t-(e-t)+o}function dO(e,t,o,a){return a?e>=t+o:e<=-o}const mO=e=>{const t=({delta:o})=>e(o);return{start:()=>el.update(t,!0),stop:()=>mP.update(t)}};function Fd(e){var t,o,{from:a,autoplay:i=!0,driver:l=mO,elapsed:r=0,repeat:c=0,repeatType:p="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:m,onRepeat:h,onUpdate:_}=e,w=hd(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:S}=w,P,M=0,L=w.duration,A,W=!1,q=!0,Y;const an=pO(w);!((o=(t=an).needsInterpolation)===null||o===void 0)&&o.call(t,a,S)&&(Y=Td([0,100],[a,S],{clamp:!1}),a=0,S=100);const un=an(Object.assign(Object.assign({},w),{from:a,to:S}));function vn(){M++,p==="reverse"?(q=M%2===0,r=uO(r,L,u,q)):(r=Rd(r,L,u),p==="mirror"&&un.flipTarget()),W=!1,h&&h()}function bn(){P.stop(),m&&m()}function Nn(te){if(q||(te=-te),r+=te,!W){const Pn=un.next(Math.max(0,r));A=Pn.value,Y&&(A=Y(A)),W=q?Pn.done:r<=0}_==null||_(A),W&&(M===0&&(L!=null||(L=r)),M<c?dO(r,L,u,q)&&vn():bn())}function Vn(){d==null||d(),P=l(Nn),P.start()}return i&&Vn(),{stop:()=>{f==null||f(),P.stop()}}}function Dd(e,t){return t?e*(1e3/t):0}function fO({from:e=0,velocity:t=0,min:o,max:a,power:i=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:m,onStop:h}){let _;function w(L){return o!==void 0&&L<o||a!==void 0&&L>a}function S(L){return o===void 0?a:a===void 0||Math.abs(o-L)<Math.abs(a-L)?o:a}function P(L){_==null||_.stop(),_=Fd(Object.assign(Object.assign({},L),{driver:d,onUpdate:A=>{var W;f==null||f(A),(W=L.onUpdate)===null||W===void 0||W.call(L,A)},onComplete:m,onStop:h}))}function M(L){P(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:p},L))}if(w(e))M({from:e,velocity:t,to:S(e)});else{let L=i*t+e;typeof u<"u"&&(L=u(L));const A=S(L),W=A===o?-1:1;let q,Y;const an=un=>{q=Y,Y=un,t=Dd(un-q,fd().delta),(W===1&&un>A||W===-1&&un<A)&&M({from:un,to:A,velocity:t})};P({type:"decay",from:e,velocity:t,timeConstant:l,power:i,restDelta:p,modifyTarget:u,onUpdate:w(L)?an:void 0})}return{stop:()=>_==null?void 0:_.stop()}}const Hd=(e,t)=>1-3*t+3*e,Nd=(e,t)=>3*t-6*e,jd=e=>3*e,ka=(e,t,o)=>((Hd(t,o)*e+Nd(t,o))*e+jd(t))*e,qd=(e,t,o)=>3*Hd(t,o)*e*e+2*Nd(t,o)*e+jd(t),hO=1e-7,gO=10;function _O(e,t,o,a,i){let l,r,c=0;do r=t+(o-t)/2,l=ka(r,a,i)-e,l>0?o=r:t=r;while(Math.abs(l)>hO&&++c<gO);return r}const vO=8,kO=.001;function yO(e,t,o,a){for(let i=0;i<vO;++i){const l=qd(t,o,a);if(l===0)return t;t-=(ka(t,o,a)-e)/l}return t}const ia=11,Zo=1/(ia-1);function bO(e,t,o,a){if(e===t&&o===a)return Md;const i=new Float32Array(ia);for(let r=0;r<ia;++r)i[r]=ka(r*Zo,e,o);function l(r){let c=0,p=1;const u=ia-1;for(;p!==u&&i[p]<=r;++p)c+=Zo;--p;const d=(r-i[p])/(i[p+1]-i[p]),f=c+d*Zo,m=qd(f,e,o);return m>=kO?yO(r,f,e,o):m===0?f:_O(r,c,c+Zo,e,o)}return r=>r===0||r===1?r:ka(l(r),t,a)}const ui={};class xO{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,o,a){if(!!this.subscriptions.size)for(const i of this.subscriptions)i(t,o,a)}clear(){this.subscriptions.clear()}}const Yc=e=>!isNaN(parseFloat(e));class SO{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new xO,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:a,timestamp:i}=fd();this.lastUpdated!==i&&(this.timeDelta=a,this.lastUpdated=i),el.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>el.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=Yc(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Yc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Dd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(o=>{const{stop:a}=t(o);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function wO(e){return new SO(e)}const{isArray:zO}=Array;function $O(){const e=Q({}),t=a=>{const i=l=>{!e.value[l]||(e.value[l].stop(),e.value[l].destroy(),Jh(e.value,l))};a?zO(a)?a.forEach(i):i(a):Object.keys(e.value).forEach(i)},o=(a,i,l)=>{if(e.value[a])return e.value[a];const r=wO(i);return r.onChange(c=>{he(l,a,c)}),he(e.value,a,r),r};return Bl(t),{motionValues:e,get:o,stop:t}}const CO=e=>Array.isArray(e),Pt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),di=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),IO=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),mi=()=>({type:"keyframes",ease:"linear",duration:300}),TO=e=>({type:"keyframes",duration:800,values:e}),Qc={default:IO,x:Pt,y:Pt,z:Pt,rotate:Pt,rotateX:Pt,rotateY:Pt,rotateZ:Pt,scaleX:di,scaleY:di,scale:di,backgroundColor:mi,color:mi,opacity:mi},Bd=(e,t)=>{let o;return CO(t)?o=TO:o=Qc[e]||Qc.default,{to:t,...o(t)}},Zc={...No,transform:Math.round},Wd={color:fe,backgroundColor:fe,outlineColor:fe,fill:fe,stroke:fe,borderColor:fe,borderTopColor:fe,borderRightColor:fe,borderBottomColor:fe,borderLeftColor:fe,borderWidth:dn,borderTopWidth:dn,borderRightWidth:dn,borderBottomWidth:dn,borderLeftWidth:dn,borderRadius:dn,radius:dn,borderTopLeftRadius:dn,borderTopRightRadius:dn,borderBottomRightRadius:dn,borderBottomLeftRadius:dn,width:dn,maxWidth:dn,height:dn,maxHeight:dn,size:dn,top:dn,right:dn,bottom:dn,left:dn,padding:dn,paddingTop:dn,paddingRight:dn,paddingBottom:dn,paddingLeft:dn,margin:dn,marginTop:dn,marginRight:dn,marginBottom:dn,marginLeft:dn,rotate:Mt,rotateX:Mt,rotateY:Mt,rotateZ:Mt,scale:Qo,scaleX:Qo,scaleY:Qo,scaleZ:Qo,skew:Mt,skewX:Mt,skewY:Mt,distance:dn,translateX:dn,translateY:dn,translateZ:dn,x:dn,y:dn,z:dn,perspective:dn,transformPerspective:dn,opacity:io,originX:Wc,originY:Wc,originZ:dn,zIndex:Zc,filter:il,WebkitFilter:il,fillOpacity:io,strokeOpacity:io,numOctaves:Zc},Zl=e=>Wd[e],Vd=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function EO(e,t){let o=Zl(e);return o!==il&&(o=jo),o.getAnimatableNone?o.getAnimatableNone(t):void 0}const LO={linear:Md,easeIn:Yl,easeInOut:Pd,easeOut:QP,circIn:Od,circInOut:ZP,circOut:Ad,backIn:Ql,backInOut:XP,backOut:JP,anticipate:nO,bounceIn:oO,bounceInOut:aO,bounceOut:va},Jc=e=>{if(Array.isArray(e)){const[t,o,a,i]=e;return bO(t,o,a,i)}else if(typeof e=="string")return LO[e];return e},MO=e=>Array.isArray(e)&&typeof e[0]!="number",Xc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&jo.test(t)&&!t.startsWith("url("));function PO(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function OO({ease:e,times:t,delay:o,...a}){const i={...a};return t&&(i.offset=t),e&&(i.ease=MO(e)?e.map(Jc):Jc(e)),o&&(i.elapsed=-o),i}function AO(e,t,o){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),PO(t),RO(e)||(e={...e,...Bd(o,t.to)}),{...t,...OO(e)}}function RO({delay:e,repeat:t,repeatType:o,repeatDelay:a,from:i,...l}){return!!Object.keys(l).length}function FO(e,t){return e[t]||e.default||e}function DO(e,t,o,a,i){const l=FO(a,e);let r=l.from===null||l.from===void 0?t.get():l.from;const c=Xc(e,o);r==="none"&&c&&typeof o=="string"&&(r=EO(e,o));const p=Xc(e,r);function u(f){const m={from:r,to:o,velocity:a.velocity?a.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return l.type==="inertia"||l.type==="decay"?fO({...m,...l}):Fd({...AO(l,m,e),onUpdate:h=>{m.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{a.onComplete&&a.onComplete(),i&&i(),f&&f()}})}function d(f){return t.set(o),a.onComplete&&a.onComplete(),i&&i(),f&&f(),{stop:()=>{}}}return!p||!c||l.type===!1?d:u}function HO(){const{motionValues:e,stop:t,get:o}=$O();return{motionValues:e,stop:t,push:(i,l,r,c={},p)=>{const u=r[i],d=o(i,u,r);if(c&&c.immediate){d.set(l);return}const f=DO(i,d,l,c,p);d.start(f)}}}function NO(e,t={},{motionValues:o,push:a,stop:i}=HO()){const l=C(t),r=Q(!1),c=fn(o,m=>{r.value=Object.values(m).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),p=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},u=m=>(typeof m=="string"&&(m=p(m)),Promise.all(Object.entries(m).map(([h,_])=>{if(h!=="transition")return new Promise(w=>{a(h,_,e,m.transition||Bd(h,m[h]),w)})}).filter(Boolean)));return{isAnimating:r,apply:u,set:m=>{const h=Qi(m)?m:p(m);Object.entries(h).forEach(([_,w])=>{_!=="transition"&&a(_,w,e,{immediate:!0})})},stopTransitions:()=>{c(),i()},leave:async m=>{let h;if(l&&(l.leave&&(h=l.leave),!l.leave&&l.initial&&(h=l.initial)),!h){m();return}await u(h),m()}}}const Jl=typeof window<"u",jO=()=>Jl&&window.onpointerdown===null,qO=()=>Jl&&window.ontouchstart===null,BO=()=>Jl&&window.onmousedown===null;function WO({target:e,state:t,variants:o,apply:a}){const i=C(o),l=[],r=(..._)=>{const w=rP.apply(null,_);return l.push(w),w},c=Q(!1),p=Q(!1),u=Q(!1),d=R(()=>{let _=[];return i&&(i.hovered&&(_=[..._,...Object.keys(i.hovered)]),i.tapped&&(_=[..._,...Object.keys(i.tapped)]),i.focused&&(_=[..._,...Object.keys(i.focused)])),_}),f=R(()=>{const _={};Object.assign(_,t.value),c.value&&i.hovered&&Object.assign(_,i.hovered),p.value&&i.tapped&&Object.assign(_,i.tapped),u.value&&i.focused&&Object.assign(_,i.focused);for(const w in _)d.value.includes(w)||delete _[w];return _});i.hovered&&(r(e,"mouseenter",()=>{c.value=!0}),r(e,"mouseleave",()=>{c.value=!1,p.value=!1}),r(e,"mouseout",()=>{c.value=!1,p.value=!1})),i.tapped&&(BO()&&(r(e,"mousedown",()=>{p.value=!0}),r(e,"mouseup",()=>{p.value=!1})),jO()&&(r(e,"pointerdown",()=>{p.value=!0}),r(e,"pointerup",()=>{p.value=!1})),qO()&&(r(e,"touchstart",()=>{p.value=!0}),r(e,"touchend",()=>{p.value=!1}))),i.focused&&(r(e,"focus",()=>{u.value=!0}),r(e,"blur",()=>{u.value=!1}));const m=fn(f,a);return{stop:()=>{l.forEach(_=>_()),m()}}}function VO({set:e,target:t,variants:o,variant:a}){const i=C(o);return{stop:fn(()=>t,()=>{!i||(i.initial&&e("initial"),i.enter&&(a.value="enter"))},{immediate:!0,flush:"pre"})}}function KO({state:e,apply:t}){return{stop:fn(e,a=>{a&&t(a)},{immediate:!0})}}function UO({target:e,variants:t,variant:o}){const a=C(t);let i=Ut;if(a&&(a.visible||a.visibleOnce)){const{stop:l}=cP(e,([{isIntersecting:r}])=>{a.visible?r?o.value="visible":o.value="initial":a.visibleOnce&&(r?o.value!=="visibleOnce"&&(o.value="visibleOnce"):o.value||(o.value="initial"))});i=l}return{stop:i}}function GO(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const o=Q([]);if(t.lifeCycleHooks){const{stop:i}=VO(e);o.value.push(i)}if(t.syncVariants){const{stop:i}=KO(e);o.value.push(i)}if(t.visibilityHooks){const{stop:i}=UO(e);o.value.push(i)}if(t.eventListeners){const{stop:i}=WO(e);o.value.push(i)}const a=()=>o.value.forEach(i=>i());return Bl(a),{stop:a}}function Kd(e={}){const t=jn({...e}),o=Q({});return fn(t,()=>{const a={};for(const[i,l]of Object.entries(t)){const r=Zl(i),c=Vd(l,r);a[i]=c}o.value=a},{immediate:!0,deep:!0}),{state:t,style:o}}const YO=["","X","Y","Z"],QO=["perspective","translate","scale","rotate","skew"],Ud=["transformPerspective","x","y","z"];QO.forEach(e=>{YO.forEach(t=>{const o=e+t;Ud.push(o)})});const ZO=new Set(Ud);function Xl(e){return ZO.has(e)}const JO=new Set(["originX","originY","originZ"]);function Gd(e){return JO.has(e)}function XO(e){const t={},o={};return Object.entries(e).forEach(([a,i])=>{Xl(a)||Gd(a)?t[a]=i:o[a]=i}),{transform:t,style:o}}function nA(e,t){let o,a;const{state:i,style:l}=Kd(),r=fn(()=>Qt(e),u=>{if(!!u){a=u;for(const d of Object.keys(Wd))u.style[d]===null||u.style[d]===""||Xl(d)||Gd(d)||he(i,d,u.style[d]);o&&Object.entries(o).forEach(([d,f])=>he(u.style,d,f)),t&&t(i)}},{immediate:!0}),c=fn(l,u=>{if(!a){o=u;return}for(const d in u)he(a.style,d,u[d])},{immediate:!0});return{style:i,stop:()=>{a=void 0,o=void 0,r(),c()}}}const eA={x:"translateX",y:"translateY",z:"translateZ"};function Yd(e={},t=!0){const o=jn({...e}),a=Q("");return fn(o,i=>{let l="",r=!1;t&&(i.x||i.y||i.z)&&(l+=`translate3d(${[i.x||0,i.y||0,i.z||0].map(dn.transform).join(",")}) `,r=!0);for(const[c,p]of Object.entries(i)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const u=Zl(c),d=Vd(p,u);l+=`${eA[c]||c}(${d}) `}t&&!r&&(l+="translateZ(0px) "),a.value=l.trim()},{immediate:!0,deep:!0}),{state:o,transform:a}}function tA(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const o=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return t.reduce((a,i)=>{if(!i)return a;const[l,r]=i.split("("),p=r.split(",").map(d=>o(d.endsWith(")")?d.replace(")",""):d.trim())),u=p.length===1?p[0]:p;return{...a,[l]:u}},{})}function sA(e,t){Object.entries(tA(t)).forEach(([o,a])=>{a=parseFloat(a);const i=["x","y","z"];if(o==="translate3d"){if(a===0){i.forEach(l=>{he(e,l,0)});return}a.forEach((l,r)=>{he(e,i[r],l)});return}if(o==="translateX"){he(e,"x",a);return}if(o==="translateY"){he(e,"y",a);return}if(o==="translateZ"){he(e,"z",a);return}he(e,o,a)})}function oA(e,t){let o,a;const{state:i,transform:l}=Yd(),r=fn(()=>Qt(e),u=>{!u||(a=u,u.style.transform&&sA(i,u.style.transform),o&&(u.style.transform=o),t&&t(i))},{immediate:!0}),c=fn(l,u=>{if(!a){o=u;return}a.style.transform=u},{immediate:!0});return{transform:i,stop:()=>{o=void 0,a=void 0,r(),c()}}}function aA(e,t){const o=jn({}),a=f=>{Object.entries(f).forEach(([m,h])=>{he(o,m,h)})},{style:i,stop:l}=nA(e,a),{transform:r,stop:c}=oA(e,a),p=fn(o,f=>{Object.entries(f).forEach(([m,h])=>{const _=Xl(m)?r:i;_[m]&&_[m]===h||he(_,m,h)})},{immediate:!0,deep:!0}),u=fn(()=>Qt(e),f=>{!f||t&&a(t)},{immediate:!0});return{motionProperties:o,style:i,transform:r,stop:()=>{l(),c(),p(),u()}}}function iA(e={}){const t=C(e),o=Q();return{state:R(()=>{if(!!o.value)return t[o.value]}),variant:o}}function lA(e,t={},o){const{motionProperties:a,stop:i}=aA(e),{variant:l,state:r}=iA(t),c=NO(a,t),p={target:e,variant:l,variants:t,state:r,motionProperties:a,...c,stop:(d=!1)=>{}},{stop:u}=GO(p,o);return p.stop=(d=!1)=>{const f=()=>{p.stopTransitions(),i(),u()};if(!d&&t.value&&t.value.leave){const m=fn(p.isAnimating,h=>{h||(m(),f())})}else f()},Bl(()=>p.stop()),lP(()=>Qt(e),d=>{!d||d!=null&&d.motionInstance&&(p.stop(),Object.assign(p,d.motionInstance))}),p}const rA=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],cA=(e,t)=>{const o=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};o&&(o.variants&&Qi(o.variants)&&(t.value={...t.value,...o.variants}),rA.forEach(a=>{if(a==="delay"){if(o&&o[a]&&aP(o[a])){const i=o[a];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={...t.value.enter.transition,delay:i}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={...t.value.visible.transition,delay:i}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={...t.value.visibleOnce.transition,delay:i}))}return}a==="visible-once"&&(a="visibleOnce"),o&&o[a]&&Qi(o[a])&&(t.value[a]=o[a])}))},fi=e=>{const t=(a,i,l)=>{const r=i.value&&typeof i.value=="string"?i.value:l.key;r&&ui[r]&&ui[r].stop();const c=Q(e||{});typeof i.value=="object"&&(c.value=i.value),cA(l,c);const p=lA(a,c);a.motionInstance=p,r&&he(ui,r,p)},o=a=>{a.motionInstance&&a.motionInstance.stop()};return{created:t,unmounted:o,bind:t,unbind:o,getSSRProps(a,i){const{initial:l}=a.value||i&&i.props||{},r=sP((e==null?void 0:e.initial)||{},l||{});if(!r||Object.keys(r).length===0)return;const{transform:c,style:p}=XO(r),{transform:u}=Yd(c),{style:d}=Kd(p);return u.value&&(d.value.transform=u.value),{style:d.value}}}},pA={initial:{opacity:0},enter:{opacity:1}},uA={initial:{opacity:0},visible:{opacity:1}},dA={initial:{opacity:0},visibleOnce:{opacity:1}},mA={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},fA={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},hA={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},gA={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},_A={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},vA={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},kA={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},yA={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},bA={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},xA={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},SA={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},wA={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},zA={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},$A={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},CA={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},IA={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},TA={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},EA={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},LA={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},MA={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},PA={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},OA={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},AA={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},RA={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},FA={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},DA={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},HA={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},np={__proto__:null,fade:pA,fadeVisible:uA,fadeVisibleOnce:dA,pop:mA,popVisible:fA,popVisibleOnce:hA,rollBottom:zA,rollLeft:gA,rollRight:kA,rollTop:xA,rollVisibleBottom:$A,rollVisibleLeft:_A,rollVisibleRight:yA,rollVisibleTop:SA,rollVisibleOnceBottom:CA,rollVisibleOnceLeft:vA,rollVisibleOnceRight:bA,rollVisibleOnceTop:wA,slideBottom:FA,slideLeft:IA,slideRight:LA,slideTop:OA,slideVisibleBottom:DA,slideVisibleLeft:TA,slideVisibleRight:MA,slideVisibleTop:AA,slideVisibleOnceBottom:HA,slideVisibleOnceLeft:EA,slideVisibleOnceRight:PA,slideVisibleOnceTop:RA};function NA(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(a,i=>o.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const jA={install(e,t){if(e.directive("motion",fi()),!t||t&&!t.excludePresets)for(const o in np){const a=np[o];e.directive(`motion-${NA(o)}`,fi(a))}if(t&&t.directives)for(const o in t.directives){const a=t.directives[o];a.initial,e.directive(`motion-${o}`,fi(a))}}};var ep;const ro=typeof window<"u",qA=Object.prototype.toString,BA=e=>qA.call(e)==="[object Object]";ro&&((ep=window==null?void 0:window.navigator)==null?void 0:ep.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function WA(e){return fl()?(hl(e),!0):!1}function VA(e){var t;const o=C(e);return(t=o==null?void 0:o.$el)!=null?t:o}const KA=ro?window:void 0,ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rl="__vueuse_ssr_handlers__";ll[rl]=ll[rl]||{};ll[rl];function UA(e,t={}){const{immediate:o=!0,window:a=KA}=t,i=Q(!1);let l=null;function r(){!i.value||!a||(e(),l=a.requestAnimationFrame(r))}function c(){!i.value&&a&&(i.value=!0,r())}function p(){i.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return o&&c(),WA(p),{isActive:i,pause:p,resume:c}}var tp;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(tp||(tp={}));const nr="vue-starport-injection",Qd="vue-starport-options",GA={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Zd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var YA=Object.defineProperty,ya=Object.getOwnPropertySymbols,Jd=Object.prototype.hasOwnProperty,Xd=Object.prototype.propertyIsEnumerable,sp=(e,t,o)=>t in e?YA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,QA=(e,t)=>{for(var o in t||(t={}))Jd.call(t,o)&&sp(e,o,t[o]);if(ya)for(var o of ya(t))Xd.call(t,o)&&sp(e,o,t[o]);return e},op=(e,t)=>{var o={};for(var a in e)Jd.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&ya)for(var a of ya(e))t.indexOf(a)<0&&Xd.call(e,a)&&(o[a]=e[a]);return o};const ZA=En({name:"StarportProxy",props:QA({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Zd),setup(e,t){const o=x(nr),a=R(()=>o.getInstance(e.port,e.component)),i=Q(),l=a.value.generateId(),r=Q(!1);return a.value.isVisible||(a.value.land(),r.value=!0),zs(async()=>{a.value.el||(a.value.el=i.value,await Xn(),r.value=!0,a.value.rect.update())}),Ma(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,r.value=!1,!a.value.options.keepAlive&&(await Xn(),await Xn(),!a.value.el&&o.dispose(a.value.port))}),fn(()=>e,async()=>{a.value.props&&await Xn();const c=e,{props:p}=c,u=op(c,["props"]);a.value.props=p||{},a.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=e,{initialProps:p,mountedProps:u}=c,d=op(c,["initialProps","mountedProps"]),f=G(d,(r.value?u:p)||{});return ge("div",G(f,{id:l,ref:i,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),t.slots.default?ge(t.slots.default):void 0)}}});var JA=Object.defineProperty,XA=Object.defineProperties,n7=Object.getOwnPropertyDescriptors,ap=Object.getOwnPropertySymbols,e7=Object.prototype.hasOwnProperty,t7=Object.prototype.propertyIsEnumerable,ip=(e,t,o)=>t in e?JA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,s7=(e,t)=>{for(var o in t||(t={}))e7.call(t,o)&&ip(e,o,t[o]);if(ap)for(var o of ap(t))t7.call(t,o)&&ip(e,o,t[o]);return e},o7=(e,t)=>XA(e,n7(t));const a7=En({name:"Starport",inheritAttrs:!0,props:Zd,setup(e,t){const o=Q(!1);return zs(()=>{o.value=!0}),()=>{var r,c;const a=(c=(r=t.slots).default)==null?void 0:c.call(r);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const i=a[0];let l=i.type;return(!BA(l)||Gt(l))&&(l={render(){return a}}),ge(ZA,o7(s7({},e),{key:e.port,component:$a(l),props:i.props}))}}});function i7(e){const t=jn({height:0,width:0,left:0,top:0,update:a,listen:l,pause:r,margin:"0px",padding:"0px"}),o=ro?document.documentElement||document.body:void 0;function a(){if(!ro)return;const c=VA(e);if(!c)return;const{height:p,width:u,left:d,top:f}=c.getBoundingClientRect(),m=window.getComputedStyle(c),h=m.margin,_=m.padding;Object.assign(t,{height:p,width:u,left:d,top:o.scrollTop+f,margin:h,padding:_})}const i=UA(a,{immediate:!1});function l(){!ro||(a(),i.resume())}function r(){i.pause()}return t}let l7=(e,t=21)=>(o=t)=>{let a="",i=o;for(;i--;)a+=e[Math.random()*e.length|0];return a};const lp=l7("abcdefghijklmnopqrstuvwxyz",5);function rp(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function r7(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var c7=Object.defineProperty,cp=Object.getOwnPropertySymbols,p7=Object.prototype.hasOwnProperty,u7=Object.prototype.propertyIsEnumerable,pp=(e,t,o)=>t in e?c7(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,hi=(e,t)=>{for(var o in t||(t={}))p7.call(t,o)&&pp(e,o,t[o]);if(cp)for(var o of cp(t))u7.call(t,o)&&pp(e,o,t[o]);return e};function d7(e,t,o={}){const a=r7(t),i=rp(a)||lp(),l=Q(),r=Q(null),c=Q(!1),p=Q(!1),u=dm(!0),d=Q({}),f=R(()=>hi(hi(hi({},GA),o),d.value)),m=Q(0);let h;u.run(()=>{h=i7(l),fn(l,async P=>{P&&(p.value=!0),await Xn(),l.value||(p.value=!1)})});const _=rp(e);function w(){return`starport-${i}-${_}-${lp()}`}const S=w();return jn({el:l,id:S,port:e,props:r,rect:h,scope:u,isLanded:c,isVisible:p,options:f,liftOffTime:m,component:t,componentName:a,componentId:i,generateId:w,setLocalOptions(P={}){d.value=JSON.parse(JSON.stringify(P))},elRef(){return l},liftOff(){!c.value||(c.value=!1,m.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function m7(e){const t=jn(new Map);function o(i,l){let r=t.get(i);return r||(r=d7(i,l,e),t.set(i,r)),r.component=l,r}function a(i){var l;(l=t.get(i))==null||l.scope.stop(),t.delete(i)}return{portMap:t,dispose:a,getInstance:o}}var f7=Object.defineProperty,h7=Object.defineProperties,g7=Object.getOwnPropertyDescriptors,up=Object.getOwnPropertySymbols,_7=Object.prototype.hasOwnProperty,v7=Object.prototype.propertyIsEnumerable,dp=(e,t,o)=>t in e?f7(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k7=(e,t)=>{for(var o in t||(t={}))_7.call(t,o)&&dp(e,o,t[o]);if(up)for(var o of up(t))v7.call(t,o)&&dp(e,o,t[o]);return e},y7=(e,t)=>h7(e,g7(t));const b7=En({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=x(nr);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=R(()=>t.getInstance(e.port,e.component)),a=R(()=>{var r;return((r=o.value.el)==null?void 0:r.id)||o.value.id}),i=R(()=>{const r=Date.now()-o.value.liftOffTime,c=Math.max(0,o.value.options.duration-r),p=o.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!o.value.isVisible||!o.value.el?y7(k7({},u),{zIndex:-1,display:"none"}):(o.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:o.value.options.easing}),u)}),l={};return()=>{const r=!!(o.value.isLanded&&o.value.el);return ge("div",{style:i.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},ge(Df,{to:r?`#${a.value}`:"body",disabled:!r},ge(o.value.component,G(l,o.value.props))))}}}),x7=En({name:"StarportCarrier",setup(e,{slots:t}){const o=m7(x(Qd,{}));return Jt().appContext.app.provide(nr,o),()=>{var i;return[(i=t.default)==null?void 0:i.call(t),Array.from(o.portMap.entries()).map(([l,{component:r}])=>ge(b7,{key:l,port:l,component:r}))]}}});function S7(e={}){return{install(t){t.provide(Qd,e),t.component("Starport",a7),t.component("StarportCarrier",x7)}}}function w7(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(jA),e.app.use(S7({keepAlive:!0}))}function ve(e,t,o){var a,i;return(i=((a=e.instance)==null?void 0:a.$).provides[t])!=null?i:o}function z7(){return{install(e){e.directive("click",{name:"v-click",mounted(t,o){var d,f,m,h;if(oo.value||((d=ve(o,no))==null?void 0:d.value))return;const a=ve(o,Ft),i=ve(o,Xs),l=ve(o,Pi),r=o.modifiers.hide!==!1&&o.modifiers.hide!=null,c=o.modifiers.fade!==!1&&o.modifiers.fade!=null,p=((f=a==null?void 0:a.value)==null?void 0:f.length)||0,u=c?Fh:Za;if(a&&!((m=a==null?void 0:a.value)!=null&&m.includes(t))&&a.value.push(t),o.value===null&&(o.value=a==null?void 0:a.value.length),!(l!=null&&l.value.has(o.value)))l==null||l.value.set(o.value,[t]);else if(!((h=l==null?void 0:l.value.get(o.value))!=null&&h.includes(t))){const _=(l==null?void 0:l.value.get(o.value))||[];l==null||l.value.set(o.value,[t].concat(_))}t==null||t.classList.toggle(At,!0),i&&fn(i,()=>{var P;const _=(P=i==null?void 0:i.value)!=null?P:0,w=o.value!=null?_>=o.value:_>p;t.classList.contains(Ja)||t.classList.toggle(u,!w),r!==!1&&r!==void 0&&t.classList.toggle(u,w),t.classList.toggle(Ns,!1);const S=l==null?void 0:l.value.get(_);S==null||S.forEach((M,L)=>{M.classList.toggle(Go,!1),L===S.length-1?M.classList.toggle(Ns,!0):M.classList.toggle(Go,!0)}),t.classList.contains(Ns)||t.classList.toggle(Go,w)},{immediate:!0})},unmounted(t,o){t==null||t.classList.toggle(At,!1);const a=ve(o,Ft);a!=null&&a.value&&Oi(a.value,t)}}),e.directive("after",{name:"v-after",mounted(t,o){var c,p;if(oo.value||((c=ve(o,no))==null?void 0:c.value))return;const a=ve(o,Ft),i=ve(o,Xs),l=ve(o,Pi),r=a==null?void 0:a.value.length;o.value===void 0&&(o.value=a==null?void 0:a.value.length),l!=null&&l.value.has(o.value)?(p=l==null?void 0:l.value.get(o.value))==null||p.push(t):l==null||l.value.set(o.value,[t]),t==null||t.classList.toggle(At,!0),i&&fn(i,()=>{var d,f,m;const u=((d=i.value)!=null?d:0)>=((m=(f=o.value)!=null?f:r)!=null?m:0);t.classList.contains(Ja)||t.classList.toggle(Za,!u),t.classList.toggle(Ns,!1),t.classList.contains(Ns)||t.classList.toggle(Go,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(At,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,o){var r,c,p;if(oo.value||((r=ve(o,no))==null?void 0:r.value))return;const a=ve(o,Ft),i=ve(o,Xs),l=((c=a==null?void 0:a.value)==null?void 0:c.length)||0;a&&!((p=a==null?void 0:a.value)!=null&&p.includes(t))&&a.value.push(t),t==null||t.classList.toggle(At,!0),i&&fn(i,()=>{var f;const u=(f=i==null?void 0:i.value)!=null?f:0,d=o.value!=null?u>=o.value:u>l;t.classList.toggle(Za,d),t.classList.toggle(Ja,d)},{immediate:!0})},unmounted(t,o){t==null||t.classList.toggle(At,!1);const a=ve(o,Ft);a!=null&&a.value&&Oi(a.value,t)}})}}}function $7(e,t){const o=Ju(e),a=Xu(t,o.currentRoute,o.currentPage);return{nav:{...o,...a,downloadPDF:Gi,next:bt,nextSlide:yo,openInEditor:X8,prev:xt,prevSlide:bo},configs:zn,themeConfigs:R(()=>zn.themeConfig)}}function C7(){return{install(e){const t=$7(ct,Ne);e.provide($,jn(t))}}}const Rs=kh(eP);Rs.use(ze);Rs.use(Mh());Rs.use(z7());Rs.use(C7());w7({app:Rs,router:ze});Rs.mount("#app");export{Vs as $,K as A,Tn as B,re as C,Ev as D,Cn as E,Ln as F,In as G,Ne as H,_a as I,G8 as J,ii as K,Xa as L,_o as M,oi as N,_u as O,H0 as P,Al as Q,L0 as R,Rl as S,Gn as T,ld as U,Hv as V,Sn as W,We as X,I7 as Y,Je as Z,Uu as _,n as a,Yo as a0,zo as a1,jt as a2,Qe as a3,Wi as a4,lv as a5,rv as a6,cv as a7,uv as a8,Oa as a9,du as aa,M7 as ab,pe as ac,kk as ad,hu as ae,dv as af,Ma as ag,Cv as ah,R as b,J as c,En as d,$ as e,be as f,z as g,C as h,x as i,yv as j,J8 as k,zn as l,Oh as m,Bn as n,k as o,zs as p,jn as q,Q as r,T7 as s,Ee as t,E7 as u,L7 as v,fn as w,b as x,ae as y,g as z};
